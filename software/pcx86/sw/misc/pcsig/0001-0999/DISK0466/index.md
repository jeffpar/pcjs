---
layout: page
title: "PC-SIG Diskette Library (Disk #466)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0466/
machines:
  - id: ibm5150
    type: pcx86
    config: /machines/pcx86/ibm/5150/cga/256kb/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0466"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5150" %}

{% comment %}info_begin{% endcomment %}

## Information about "CPA LEDGER 1 OF 2 (ALSO 468)"

    A menu-driven general ledger and financial statement program designed
    for non-manufacturing businesses that offer products or services for
    sale.
    
    Start your books and maintain them: post transactions; prepare
    unadjusted and post-closing trial balances, and income statements; print
    a list of all postings for any period; search for previously-entered
    transactions; and reconstruct specific GL accounts and add new ones.
    CPA-LEDGER has plenty of muscle to record your daily transactions. Any
    single general ledger entry can have up to 30 debits and 30 credits,
    with total values of up to $999,999,999.99. A very powerful system.
    Some knowledge of double-entry bookkeeping is necessary to operate this
    package.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## ACTDTL.BAS

{% raw %}
```bas
500  ' COPYRIGHT 1986 TRONOLONE & FOSTER, PC
1000 REM ACTDTL.BAS
1010 CLEAR: ON ERROR GOTO 2560
1090 CLS: GOSUB 2470   'OPEN G/L FILE
1100 INPUT #3,F1: FOR I = 1 TO 4: INPUT #3,F2: NEXT I  'READ TO QTY BNK ACTS
1110 FOR I = 1 TO F2: INPUT #3,F1: NEXT I   'PASS BANK ACCT #S
1120 L1=1: INPUT #3,L2: INPUT #3,L3: INPUT #3,T1$ 'L2=SALES L3=LAST ACCT#
1130 L4=L2: L5=L3  'SAVE L2&O0L3 FOR RESTORE IF PRINT AGAIN
1140 CLS: LOCATE 10,1: PRINT"ENTER TODAY'S DATE. USE FORMAT MMDDYY. (I.E., JUNE 8, 1984 = 060884).";: GOSUB 2700: ROW=10: COLUMN=74: LENGTH=6: GOSUB 3180: I6$=I8$
1160 GOSUB 2420: IF F1 <> 0 OR LEN(I8$) < 6 THEN  GOTO 1140
1170 CLS: LOCATE 5,1
1180 PRINT"SELECT ONE OF THE FOLLOWING NUMBERS.  THE NUMBER THAT YOU SELECT WILL GOVERN"
1190 PRINT"WHICH GENERAL LEDGER ACCOUNTS ARE PRINTED FOR YOUR REVIEW.  FOR EACH GENERAL"
1200 PRINT"LEDGER ACCOUNT PRINTED, THE FOLLOWING INFORMATION WILL BE SHOWN - (1) ACCOUNT"
1210 PRINT"NUMBER, (2) BEGINNING BALANCE, (3) ENDING BALANCE, AND (4) THE DETAILS OF EACH"
1220 PRINT"TRANSACTION POSTED TO THAT GENERAL LEDGER ACCOUNT.  THE DETAILS WILL, FOR EACH"
1230 PRINT"TRANSACTION, INCLUDE THE TRANSACTION DATE, THE TRANSACTION EXPLANATION, THE"
1240 PRINT"POSTING REFERENCE, CHECK NUMBER (IF APPLICABLE), POSTING REFERENCE, AND THE"
1250 PRINT"TRANSACTION AMOUNT.  THE TOTAL VALUE OF ALL PRINTED TRANSACTIONS IS ALSO SHOWN.": PRINT
1260 PRINT"THE NUMBERS AND THEIR MEANINGS ARE SHOWN BELOW.": PRINT
1270 PRINT" 1. BALANCE SHEET ACCOUNTS ONLY, OR"
1280 PRINT" 2. INCOME STATEMENT ACCOUNTS ONLY, OR."
1290 PRINT" 3. BOTH BALANCE SHEET AND INCOME STATEMENT ACCOUNTS."
1300 LOCATE 20,1: PRINT"WHICH NUMBER DO YOU SELECT? (ENTER 1, OR 2, OR 3.)";: ROW=20: COLUMN=54: LENGTH=1: GOSUB 3180: I10$=I8$
1310 GOSUB 2700: X20$=I10$: GOSUB 2510
1320 IF F1 <> 0 OR VAL(I10$) < 1 OR VAL(I10$) > 3 THEN GOTO 1300
1330 CLS: LOCATE 5,1:  PRINT "SELECT ANOTHER NUMBER.  THE NUMBER THAT YOU SELECT WILL DETERMINE WHICH"
1340 PRINT"ADDITIONAL QUESTIONS ARE TO BE ASKED ABOUT THE TIME PERIOD THAT YOU SELECT.": PRINT
1350 PRINT" 1. A SPECIFIC TRANSACTION MONTH, SUCH AS MAY."
1360 PRINT" 2. A RANGE OF TRANSACTION MONTHS, SUCH AS FROM MAY TO SEPTEMBER."
1370 PRINT" 3. DISREGARD THE TRANSACTION DATE. (THE DATE WILL WILL IGNORED.)"
1380 LOCATE 12,1: PRINT"WHICH NUMBER DO YOU SELECT? (ENTER 1 OR 2 OR 3.)";: ROW=12: COLUMN=59: LENGTH=1: GOSUB 3180: I11$=I8$: GOSUB 2510
1390 IF F1 <> 0 OR VAL(I11$) < 1 OR VAL(I11$) > 3 THEN GOTO 1380
1400 IF I11$="1" THEN I12$="DURING A SPECIFIC TRANSACTION MONTH.": GOTO 1430
1410 IF I11$="2" THEN I12$="DURING A RANGE OF MONTHS.": GOTO 1430
1420 IF I11$="3" THEN M1=1: M2=12: FF2=1: M1$="ALL DATES": GOTO 1600
1430 LOCATE 14,1: PRINT"FOR NUMBER THAT YOU ENTERED IMMEDIATELY ABOVE DIRECTS CPA-LEDGER TO LIMIT THE"
1440 PRINT"PRINTOUT TO TRANSACTIONS THAT OCCURRED ";I12$;: PRINT
1450 IF I11$="2" THEN GOTO 1500
1460 LOCATE 17,1: PRINT"ENTER THE TRANSACTION MONTH. (USE FORMAT MM. I.E., JULY = 07).";: GOSUB 2700: ROW=17: COLUMN=67: LENGTH=2: GOSUB 3180: M1$=I8$  'M1$=BEG MONTH
1470 X20$=M1$: GOSUB 2510
1480 IF F1=0 AND VAL(M1$) > 0 AND VAL(M1$) < 13 AND LEN(M1$) > 1 THEN M1=VAL(M1$): M2=M1: GOTO 1600     'M2$=ENDING MONTH
1490 GOTO 1460
1500 LOCATE 17,1: PRINT"ENTER THE BEGINNING (LOW) MONTH.  (USE FORMAT MM. I.E., JULY = 07).";: ROW=17: COLUMN=70: LENGTH=2: GOSUB 3180: M1$=I8$  'M1$=BEG MONTH
1510 GOSUB 2510
1520 IF F1=0 AND VAL(M1$) > 0 AND VAL(M1$) < 13 AND LEN(M1$) > 1 THEN GOTO 1540
1530 GOTO 1500
1540 LOCATE 18,1: PRINT"ENTER THE ENDING (HIGH) MONTH. (USE FORMAT MM. I.E., OCTOBER = 10).";: ROW=18: COLUMN=70: LENGTH=2: GOSUB 3180: M2$=I8$  'M2$=END MONTH
1550 GOSUB 2510
1560 IF F1=0 AND VAL(M2$) > 0 AND VAL(M2$) < 13 AND LEN(M2$) > 1 THEN GOTO 1580
1570 GOTO 1540
1580 M1=VAL(M1$): M2=VAL(M2$): IF M1 < M2 THEN GOTO 1600
1590 LOCATE 18,1: PRINT SPACE$(80): GOTO 1500
1600 CLS: GOSUB 2540: GOSUB 2550: GOSUB 2900
1610 IF Z88=0 THEN GOSUB 2130: Z88=1
1620 'READ G/L FILE
1630 C1=L1-1: H6=0
1640 C6#=0#: C8#=0#: C9#=0#
1650 IF Z2=L2 THEN GOTO 2020         'PROCESSING COMPLETE L2=LAST REC
1660 GOSUB 2750       'READ G/L
1670 IF Z2=L2 AND I10$="1" THEN GOTO 2020
1680 IF W1$ <> "1" THEN GOTO 1650
1690 GOSUB 2710     'C3#=ACCT BAL
1700 IF I3#=0# AND I4#=0# AND I5#=0# AND I6#=0# THEN GOTO 1640 '0 BAL
1702 LOCATE 15,1: PRINT"CHECKING THIS GENERAL LEDGER ACCOUNT   ";C1;I3$
1704 LOCATE 17,1: PRINT"UPPER LIMIT OF ACCOUNTS TO BE CHECKED  ";L2
1705 LOCATE 18,1: PRINT" NOTE: INACTIVE ACCOUNTS ARE BYPASSED."
1710 IF C2=1 THEN CLOSE #2
1720 C2=1
1730 OPEN "GENJNL.FIL" FOR INPUT AS #2
1740 ' I7$ = TRANSACTION DATE
1750 ' I1  = ACCT. NBR.
1760 ' I2$ = D OR 2 FOR DEBIT - C OR 1 FOR CREDIT
1770 ' J1$ = POSTING REFERENCE
1780 ' F6$ = CHECK NUMBER OR 1 BLANK
1790 ' I2# = TRANSACTION AMOUNT
1800 ' F90$ = PAYEE IF CHECK
1810 ' F100$ = JV EXPLANATION
1820 'READ TRANSACTION FILE
1830 H5=0    'H5 SET TO 1 IF A XACTION IS PRINTED
1840 WHILE NOT EOF(2)
1850 INPUT #2,F1: IF F1 <> 0 THEN GOTO 1870
1860 INPUT #2,F100$,J1$,I7$: GOTO 1960
1870 I1=F1: INPUT #2,I2$,I2#,F6$,F90$
1880 IF I1 <> Z2 THEN GOTO 1960
1890 C5$=LEFT$(I7$,2): C5=VAL(C5$)    'C5=XACTION MONTH
1900 IF C5 > M2 THEN GOTO 1960
1910 IF I2$="C" OR I2$="1" THEN I2#=I2# * -1#
1920 IF C5 < M1 THEN C6#=C6# + I2#: GOTO 1960   'C6#=BEG BAL FOR XACTIONS
1930 GOSUB 2370   'SET SPACE FOR PRINT
1940 GOSUB 3060: H5=1: H6=1    'PRINT XACTION
1950 C8#=C8# + I2#    'C8#=VAL OF PRINTED XACTIONS
1960 WEND
1970 IF H5=0 THEN GOTO 1640
1980 C9#=C6#+C8# 'C9#=ACCT BAL C6#=VAL PRIOR XACTION
1990 C10#=C6#  'C6#= PRIOR XACTIONS C10#=BEG BAL
2000 GOSUB 2950  'PRINT TOTS
2010 GOTO 1640
2020 IF H6=1 THEN GOTO 2050
2030 CLS: LOCATE 9,1: PRINT"NO ENTRIES WERE POSTED FOR THE PERIOD THAT YOU SELECTED."
2040 PRINT"DO YOU WISH TO TRY AGAIN?": GOTO 2070
2050 CLS: LOCATE 9,1: PRINT"GENERAL LEDGER ACCOUNTS THAT MET YOUR SELECTION CRITERIA HAVE BEEN PRINTED."
2060 PRINT"DO YOU WISH TO PRINT ADDITIONAL GENERAL LEDGER ACCOUNTS?"
2070 GOSUB 2700: PRINT"ENTER `Y' FOR `YES' OR `N' FOR `NO'.";: ROW=11: COLUMN=40: LENGTH=1: GOSUB 3180
2080 IF I8$ = "Y" OR I8$="y" OR I8$ = "N" OR I8$="n" THEN GOTO 2100
2090 GOTO 2070
2100 IF I8$="Y" OR I8$="y" THEN H6=0: Z2=0: Z88=0: L1=1: L2=L4: L3=L5: FF2=0: CLS: LOCATE 10,32: PRINT "STAND BY.": P3=66-P3: GOSUB 2120: GOTO 1170
2110 GOTO 3390
2120 FOR L = 1 TO P3: LPRINT: NEXT L: RETURN
2130 P2=P2+1: P3=15
2140 FOR L = 1 TO 6
2150 IF L=4 THEN LPRINT SPACE$(69);"PAGE ";P2: GOTO 2180
2160 IF L=5 THEN LPRINT SPC(59) "RUNDATE  ";: IF L=5 THEN GOSUB 2330: LPRINT: GOTO 2180
2170 LPRINT
2180 NEXT L
2190 FF1=LEN(T1$): FF1=40-(INT(FF1)/2): LPRINT SPACE$(FF1);T1$
2200 T4$= "POSTINGS TO GENERAL LEDGER ACCOUNTS PERTAINING TO THE": FF1=LEN(T4$): FF1=40-(INT(FF1)/2): LPRINT SPACE$(FF1) T4$
2210 IF I10$="1" THEN T4$="BALANCE SHEET": GOTO 2240
2220 IF I10$="2" THEN T4$="INCOME STATEMENT": GOTO 2240
2230 T4$="BALANCE SHEET AND INCOME STATEMENT"
2240 FF1=LEN(T4$): FF1=40-(INT(FF1)/2): LPRINT SPACE$(FF1) T4$
2250 IF FF2=1 THEN LPRINT SPC(36) "ALL DATES": GOTO 2280
2260 IF I11$="1" THEN LPRINT SPC(35) "FOR MONTH ";M1$: GOTO 2280
2270 LPRINT SPC(29) "FOR MONTHS ";M1$;" THROUGH ";M2$
2280 LPRINT: LPRINT
2290 LPRINT "ACCT." SPC(40) "POSTING" SPC(4) "CHECK"
2300 LPRINT SPC(1) "NBR." SPC(3) "DATE" SPC(2) "TRANSACTION EXPLANATION" SPC(8) "REFERENCE" SPC(2) "NUMBER" SPC(10) "AMOUNT"
2310 LPRINT
2320 RETURN
2330 LPRINT LEFT$(I6$,2);"/";MID$(I6$,3,2);"/";RIGHT$(I6$,2);: RETURN
2340 P3=P3+1
2350 IF P3>55 THEN P3=66-P3: GOSUB 2120: GOSUB 2130
2360 RETURN
2370 IF I40# > 999999.99# THEN P1=1: FORMAT3$="###########,.##-": GOTO 2410
2380 IF I40# > 999.99# THEN P1=5: FORMAT3$="#######,.##-": GOTO 2410
2390 IF I40# > 0.99# THEN P1=10: FORMAT3$="###.##-": GOTO 2410
2400 IF I40# < 1# THEN P1=13: FORMAT3$=".##-": GOTO 2410
2410 RETURN
2420 D1$=LEFT$(I8$,2): IF D1$ < "01" OR D1$ > "12" THEN F1=1: GOTO 2460
2430 D1$=MID$(I8$,3,2): IF D1$ < "01" OR D1$ > "31" THEN F1=1: GOTO 2460
2440 D1$=RIGHT$(I8$,2): IF D1$ < "86" THEN F1=1: GOTO 2460
2450 F1=0
2460 RETURN
2470 OPEN "PASACT.FIL" FOR INPUT AS #3
2480 OPEN "R",1,"GENLEG.FIL",111
2490 FIELD #1,25 AS X1$,30 AS X2$,6 AS X3$,1 AS X4$,4 AS X5$,2 AS X7$,1 AS X8$,10 AS X9$,8 AS Y1$,8 AS Y2$,8 AS Y3$,8 AS Y4$
2500 RETURN
2510 F1=0: FOR I = 1 TO LEN(X20$)
2520 IF MID$(X20$,I,1) < "0" OR MID$(X20$,I,1) > "9" THEN F1=1: I=LEN(X20$)
2530 NEXT I: RETURN
2540 LOCATE 10,32: PRINT"PLEASE STAND BY.": RETURN
2550 LOCATE 11,32: PRINT"SEARCHING FILE.": RETURN
2560 IF ERR=53 THEN GOTO 2590
2570 IF ERR=25 OR ERR=27 THEN GOTO 2660
2580 ON ERROR GOTO 0
2590 CLS: LOCATE 10,2
2600 PRINT"GENERAL LEDGER DATA FILES NOT FOUND. PRESS ANY KEY AND YOU WILL BE RETURNED"
2610 PRINT"TO THE DAILY MENU.": GOSUB 2620: GOTO 3390
2620 GOSUB 2700
2630 K$=INKEY$
2640 IF K$="" THEN GOTO 2630
2650 RETURN
2660 CLS: LOCATE 10,2
2670 PRINT"CHECK YOUR PRINTER.  IT IS EITHER NOT TURNED ON OR IT IS OUT OF PAPER."
2680 PRINT"PRESS ANY KEY WHEN YOU ARE READY TO CONTINUE.": GOSUB 2700: GOSUB 2620
2690 CLS: RESUME
2700 DEF SEG=0: POKE 1050, PEEK(1052): RETURN
2710 D1#=I3#+I5#  'D1#=SUM DR. - THIS PERIOD.
2720 D2#=(I4#+I6#) * -1#   'D2#=SUM CR. - THIS PERIOD.
2730 IF I4$="D" OR I4$= "1" THEN C3#=D1#+D2# ELSE C3#=D2#+D1#   'C3#=ACCT BAL
2740 RETURN
2750 C1=C1+1: GET 1,C1
2760 I1$=X1$  'ACCOUNT CLASSIFICATION
2770 I3$=X2$  'ACCOUNT TITLE
2780 Z1$=X3$  'LAST TRANS DATE
2790 W1$=X4$   'ACCT STATUS (0=INACTIVE,1=ACTIVE)
2800 Z2=CVS(X5$)  'ACCOUNT NUMBER
2810 I2=VAL(X7$)  'ACCT TYPE CODE
2820 I4$=X8$  'DR AND CR INDICATOR.D=DR, C=CR
2830 Z3$=X9$  'POSTING REF.
2840 I3#=CVD(Y1$)   'OPENING DEBIT
2850 I4#=CVD(Y2$)  'OPENING CREDIT
2860 I5#=CVD(Y3$)  'PERIOD DEBITS
2870 I6#=CVD(Y4$)  'PERIOD CREDITS
2880 RETURN
2890 ' COMING IN, L1=1: L2=SALES ACCT#: L3=LAST ACCT#
2900 IF I10$="1" THEN GOTO 2930  'B/S ONLY
2910 IF I10$="2" THEN L1=L2: L2=L3: GOTO 2930  'P/L ONLY
2920 L2=L3  'B/S AND P/L
2930 RETURN
2940 'PRINT TOTALS
2950 I40#=C8#: IF I40# < 0# THEN I40# =I40# * -1#  'C8#=PNTED XACTIONS
2960 GOSUB 2370
2970 LPRINT: LPRINT SPC(11) "VALUE OF ABOVE TRANSACTIONS" SPC(24) SPC(P1);: LPRINT USING FORMAT3$; C8#
2980 I40#=C10#: IF I40# < 0# THEN I40# = I40# * -1#
2990 GOSUB 2370
3000 LPRINT SPC(11) "BEGINNING BALANCE PRIOR TO ABOVE TRANSACTIONS" SPC(6) SPC(P1);: LPRINT USING FORMAT3$; C10#
3010 I40#=C9#: IF I40# < 0# THEN I40# = I40# * -1#
3020 GOSUB 2370
3030 LPRINT SPC(11) "ENDING BALANCE AFTER ABOVE TRANSACTIONS" SPC(12) SPC(P1);: LPRINT USING FORMAT3$;C9#
3040 LPRINT SPC(11) "ACCOUNT NAME (FOR ABOVE DATA) IS " SPC(3) I3$
3050 LPRINT: LPRINT: P3=P3+7: GOSUB 2350: RETURN
3060 LPRINT USING "####";I1;: LPRINT SPC(1);   'ACCT #
3070 LPRINT LEFT$(I7$,2) "/" MID$(I7$,3,2) "/" RIGHT$(I7$,2) SPC(1);   'DATE
3080 F1=LEN(F100$): F1=31-F1
3090 LPRINT F100$ SPC(F1);
3100 F1=LEN(J1$): F1=11-F1
3110 LPRINT J1$ SPC(F1);    'POSTING REF.
3120 F1=LEN(F6$): F1=6-F1
3130 IF F1=0 THEN LPRINT F6$: GOTO 3150
3140 LPRINT F6$ SPC(F1);    'CHECK #
3150 I40#=I2#: IF I40# < 0# THEN I40#=I40# * -1#
3160 GOSUB 2370
3170 LPRINT SPC(P1);: LPRINT USING FORMAT3$;I2#: GOSUB 2340: RETURN
3180 GOSUB 2700: I8$=""
3190 FOR X = 1 TO LENGTH: I8$=I8$ + CHR$(254): NEXT X
3200 LOCATE ROW,COLUMN
3210 PRINT I8$;
3220 POINTER = 1: A$=" "
3230 WHILE (ASC(A$) <> 13)
3240 A$ = INPUT$(1)
3250 IF (POINTER > LENGTH) AND (ASC(A$) = 13) THEN GOTO 3370
3260 IF (POINTER > LENGTH) AND (ASC(A$) = 8) THEN GOTO 3320
3270 IF (POINTER > LENGTH) THEN BEEP: BEEP: BEEP: GOTO 3370
3280 IF (ASC(A$) >= 32) THEN MID$(I8$,POINTER,1) = A$: POINTER = POINTER +1:  GOTO 3350
3290 IF (POINTER = 1) AND (ASC(A$) = 8) THEN BEEP: BEEP: BEEP: GOTO 3350
3300 IF (ASC(A$) <> 8) THEN GOTO 3340
3310 IF MID$(I8$,POINTER,1) = CHR$(254) THEN
3320    MID$(I8$,POINTER-1,1) = CHR$(254)
3330    POINTER = POINTER -1
3340 IF (ASC(A$) = 13) THEN I8$ = MID$(I8$,1,POINTER-1): POINTER = LENGTH + 1
3350 LOCATE ROW,COLUMN
3360 PRINT I8$
3370 WEND
3380 RETURN
3390 CLOSE: FOR I = 1 TO 10: LPRINT: NEXT I: RUN "DAILY.BAS": END
```
{% endraw %}

## APNDX-A.TXT

{% raw %}
```
 
     
     
                                                                        97
     
     
                                APPENDIX A
     
           CPA-LEDGER AND THE INCOME STATEMENT'S COST OF GOODS SOLD      
     
     
     
     CPA-LEDGER  can  be used for businesses with merchandise inventory and 
     purchases (which need a Cost of  Goods  Sold  Section  in  the  Income 
     Statement)  and for service establishments which do not need a Cost of 
     Goods Sold section. 
     
     CPA-LEDGER senses which one is applicable but looking at the accounts 
     that you include in your general ledger.  
     
          .  If you (1) DO NOT  include  an  account  under  the  purchases 
             category  while  using Option 1 of the SETUP menu,  AND if you 
             (2) DO  NOT  identify  an  account  as  beginning  merchandise 
             inventory  while using Option 2 of the SETUP menu,  AND if you 
             (3) DO NOT add an account for beginning merchandise  inventory 
             later while using Option 8 of the DAILY menu,  CPA-LEDGER WILL 
             NOT PRINT the Cost of Goods Sold section when  preparing  your 
             Income  Statements.  Stated  another  way,  BOTH the beginning 
             inventory account AND the purchases related accounts  must  be 
             absent in order to bypass the Cost of Goods Section. 
     
          .  If  you (1) DO include an account under the purchases category 
             while using Option 1 of the SETUP  menu,  OR  if  you  (2)  DO 
             identify  an  account as beginning merchandise inventory while 
             using Option 2 of the SETUP menu,  OR if you  (3)  DO  add  an 
             account  for  beginning  merchandise  inventory later by using 
             Option 8 of the DAILY menu,  CPA-LEDGER WILL PRINT the Cost of 
             Goods  Sold  Section  of the Income Statement.  Stated another 
             way,  EITHER a beginning  inventory  account  OR  a  purchases 
             related  account  will cause the Cost of Goods Sold section to 
             be printed. 
          
     
     It is as simple as that.
     
        
     
     
                                                                        98
     
     
     



                   This page is included for future expansion.
     
     

































```
{% endraw %}

## APNDX-B.TXT

{% raw %}
```
 
                                                                        
          
                                                                        
                                                                        99
     
                                   APPENDIX B
               
                        USING CPA-LEDGER WITH FIXED DISK
     
     The differing versions of CPA-LEDGER are discussed beginning  on  page 
     99-3.  Information  on  ordering  CPA-LEDGER  from  Tronolone & Foster 
     begins there also. 

     This version of CPA-LEDGER is for fixed disk.  All of  the  CPA-LEDGER 
     internal commands and files use the DEFAULT DRIVE, which should ALWAYS 
     be C:. 
     
     Both  CPA-LEDGER and PC-DOS should be on fixed disk.  Also,  you might 
     want to establish a separate directory for CPA-LEDGER.  Refer to  your 
     IBM  Disk  Operating  System  reference  manual for details.  The same 
     reference manual covers other considerations that are beyond the scope 
     of this appendix, such as: 
     
          .  Fixed disk drive letters, and
     
          .  How to prepare your fixed disk.
     
     Major  advantages  of  fixed  disk  are speed the additional space for 
     recording your transactions.  A disadvantage is that only ONE  general 
     ledger  can be recorded for each directory.  If you have more than one 
     general ledger,  you  might  want  the  CPA-LEDGER  version  that  has 
     CPA-LEDGER  on  fixed  disk  and your general ledger on a floppy disk. 
     That way,  you can have as many general ledgers as you wish - one  for 
     each  separate  floppy.  To  order  other versions of CPA-LEDGER, see 
     page 99-3. 
     
     It is important to understand that CPA-LEDGER needs access to  BASICA. 
     You  can  make  BASICA available by either (1) copying BASICA onto the 
     same directory where CPA-LEDGER resides  or  by  (2)  using  the  PATH 
     command  for  the  access  (see  your  PC-DOS  reference manual for an 
     explanation of the PATH command).  If you have any questions, call Jim 
     at (703) 569-2254.  Or, write Jim at 8529 Greeley Blvd.,  Springfield, 
     Virginia 22152.  As mentioned in the cover page of this manual, always 
     call  Jim  after 7:30 PM weekdays or anytime during the weekend.  Call 
     back if the answering machine asks for your message. 
     
     A reminder - the  "Program  Disk"  contains  the  CPA-LEDGER  computer 
     programs  (files  with  an extension of ".BAS") and a practice general 
     ledger (files with an extension of  ".FIL)  is  on  the  Documentation 
     Disk.  Before  you start practicing,  copy the practice general ledger 
     onto a separate floppy to be used as  a  back-up.  Of  course,  ALWAYS 
     keep  a back-up of the CPA-LEDGER computer programs,  ALWAYS,  ALWAYS, 
     ALWAYS, ALWAYS!! 
     
      
          
                                                                       99-1
     
     
     Several chapters in the  User's  Manual  ask  you  to  practice  using 
     CPA-LEDGER,  which requires use of (1) the practice general ledger AND 
     (2) the CPA-LEDGER computer programs.  Copy both to your hard disk  by 
     following this procedure (while  the  default  drive  is  C:,  in  the 
     directory of your choice): 
     
        1.  Follow these procedures: (Before you proceed, you might want to 
            set up a  separate  directory  for  CPA-LEDGER.  See  your  DOS 
            User's Manual for the procedure.) 
         
           a.  To copy the computer programs  onto  hard  disk,  place  the 
               "Program Disk" in the A: drive and give this command: 
     
                    COPY A:*.BAS C:/V   (and press the return key)
     
           b.  To  copy  the practice general ledger onto hard disk,  place 
               the "Documentation Disk" (the one that  has  files  with  an 
               extension of .FIL) in the A: drive and give this command: 
     
                    COPY A:*.FIL C:/V   (and press the return key)
     
               There is no need to copy any part of the  User's  Manual  to 
               hard disk. 
     
           c.  Store  the  "Program Disk" and the "Documentation Disk" in a 
               safe place. 
     
     Once CPA-LEDGER has been loaded onto hard disk, the system is ready to 
     use.  Follow this procedure each time you wish to use CPA-LEDGER:
     
       1.  Boot to PC-DOS.
     
       2.  If necessary,  go to the directory where CPA-LEDGER  is  stored. 
           (That is,  you may have stored CPA-LEDGER in it's own directory. 
           If  so,  you  will  need  to  tell  PC-DOS,  either  through  an 
           AUTOEXEC.BAT file or  by  giving  appropriate  commands  at  the 
           keyboard,  that you wish to go to the directory where CPA-LEDGER 
           is stored.  AS MENTIONED ABOVE,  PLEASE REMEMBER THAT CPA-LEDGER 
           M-U-S-T  HAVE  ACCESS  TO BASICA.  See the 5th paragraph on page 
           99.) 
     
       3.  Type  BASICA  and  press the return key.  (If nothing happens at 
           this point,  you probably haven't followed the proper  procedure 
           for  allowing  PC-DOS to access BASICA.  Refer to your reference 
           manual for PC-DOS for the proper procedure.)
     
     
                                                                       99-2
     
     
                      
       4.  The next command depends on whether you  want  to  start  a  new 
           general  ledger  or  you  wish process files on a general ledger 
           that is already on fixed disk. 
     
             a.  To start a new general ledger, type:
     
                   RUN "SETUP"     (and press the Enter key)
     
             b.  To process a general ledger file that is already on  fixed 
                 disk, type: 
     
                   RUN "DAILY"     (and press the Enter key)
     
           After you press the Enter key,  CPA-LEDGER's menu  will  appear. 
           Select  the  option  of  your  choice.  Chapters  in this User's 
           Manual explain how to use each of the CPA-LEDGER options. 
     
     
        
                                                                      99-3
     
          
     Nine separate options of CPA-LEDGER are available.   They are:
     

                                                          When Ordering,
        Business Type           Processing Option         Ask For Option
     
      A. Corporations          #1. Hard Disk Only              A1
         Corporations          #2. Floppy Disk Only            A2
         Corporations          #3. Hard Disk & Floppy Disk     A3
     
      B. Partnerships          #1. Hard Disk Only              B1
         Partnerships          #2. Floppy Disk Only            B2
         Partnerships          #3. Hard Disk & Floppy Disk     B3
     
      C. Sole Proprietorships  #1. Hard Disk Only              C1
         Sole Proprietorships  #2. Floppy Disk Only            C2
         Sole Proprietorships  #3. Hard Disk & Floppy Disk     C3
     
     
     For EACH Business Type (A, B & C), CPA-LEDGER is used as follows:
     
      .  Hard Disk Only - Processing Option #1.

           Both  CPA-LEDGER  and the general ledger files are maintained on 
           hard disk.  You will need a separate directory for each separate 
           general  ledger,   with  CPA-LEDGER  in  each  directory. 
         
           Read Appendix C regarding  disk  capacities.  Always  make  sure 
           that  you  have  enough  room  available  on  your hard disk for 
           CPA-LEDGER  to  record   your   general   ledger   transactions.  
           Frequently  check  the  space  used  and  make  additional space 
           available  to  CPA-LEDGER  if  it  is  needed.  Please  do  this 
           frequently!  Don't  take  the  chance  of running out of room on 
           your hard disk! 
     
      .  Floppy Disk Only - Processing Option #2.
     
           CPA-LEDGER is on a diskette in the  B:  drive  and  the  general 
           ledger  files  are  recorded  on a diskette in the A:  drive.  A 
           SEPARATE floppy is used for each SEPARATE general  ledger.  This 
           allows you to secure your general ledger files when they are not 
           in use - a good security practice.  Also,  if you use CPA-LEDGER 
           for several clients,  you can have each client's general  ledger 
           on a separate floppy. 
     
           A potential problem,  however,  is that  your  (or  a  client's) 
           general ledger may become too large,  during the year,  to "fit" 
           on one floppy disk.  Please remember this - you can use ONLY one 
           
     
     
                                                                       99-4
     

           floppy disk for any one  general  ledger.  If  the  floppy  disk 
           becomes "full",  there is only ONE solution - call me and I will 
           send you the "hard disk only" version of CPA-LEDGER and you must 
           convert to  hard  disk  processing.  In  the  interim,  you  may 
           experience  delays  (waiting  on the disks from me) and you will 
           PROBABLY have to use the latest back-up  copy  of  your  general 
           ledger  files  when  you convert to hard disk operations,  which 
           will cause additional delay in bringing your system  up-to-date.  
           That means re-entering transactions since your last backup (your 
           "full"  floppy disk may be unusable).  In other words,  you have 
           plenty of headaches ahead if you order this version and  one  of 
           your  floppy  disks become full.  If you have ANY doubts,  DON'T 
           KEEP YOUR GENERAL LEDGER FILES ON FLOPPY DISK  -  USE  THE  HARD 
           DISK VERSION.  Appendix C gives you some GENERAL ideas about how 
           may transactions that may "fit" on a floppy disk.  But,  PLEASE, 
           use Appendix C to get a general idea of floppy  disk  capacities 
           and  NOT  for absolute specifics for your case.  As explained in 
           Appendix C,  YOUR floppy disk capacity depends on many  factors, 
           including  how  your  enter  your  transactions  and your mix of 
           transactions. 
     
      .  Hard Disk & Floppy Disk - Processing Option #3.
     
           CPA-LEDGER is kept on hard  disk  (in  one  directory)  and  the 
           general ledger files are recorded on a diskette in the A: drive.  
           A  separate  floppy  is  used  for each separate general ledger.  
           Like for Floppy Disk Only,  you will  be  able  to  secure  your 
           general ledger files when they are not in use. 
     
           However,  PLEASE read the last two paragraphs under "Floppy Disk 
           Only  -  Processing  Option  #2",  above  and  be  aware  of the 
           consequences if a floppy disk becomes  full.  Again,  please  DO 
           NOT  keep  your general ledger files on floppy disk if you think 
           there is any chance of the  floppy  becomming  full  during  the 
           accounting year. 
     
          
     The CPA-LEDGER differences for Business  Types  pertains  to  how  the 
     Owner's  Equity  section  of  the  Balance  Sheet  is maintained.  The 
     Business Type for corporations is the one in the public domain and you 
     should have (through practicing with the system) have an understanding 
     on  how  it  functions.   Details  on   the   partnership   and   sole 
     proprietorship Business Types are described below. 
     
     PARTNERSHIPS.

     Instead  of  asking  for  information  about  a  corporation's owners' 
     equity,  the names of  partner's  capital  and  drawing  accounts  are 
     requested.  This is done in SETUP menu option 1. 
     
     
     
                                                                       99-5
       

     The partnership Business Type gives you two options  for  distributing 
     profits  to  partners.  Either  (one,  not  both)  of  the options are 
     selected in SETUP menu Option 2.  They are: 

       .  Profits and losses are to be distributed to partners based  on  a 
          fixed percentage for profits and losses (the same percentage  for 
          BOTH profits and losses).  You can change the percentages anytime 
          that you wish.  You may also switch to the second option,  below, 
          any time that you wish.  However,  any  changes  pertain  to  the 
          entire  period  for  which you prepare financial statements.  For 
          example,  assume two partners with a  profit/loss  percentage  of 
          50/50.  In  June,  you  wish  to change the percentages to 40/60. 
          After the June changes, the 40/60 is effective since the first of 
          the year, just as if you had started the year with 40/60. 
      
     
       .  The second option is that  profits  and  losses  are  NOT  to  be 
          distributed,  automatically,  by  CPA-LEDGER.  Instead,  you  are 
          asked  to make the allocation after CPA-LEDGER (1) informs you of 
          the profit or  loss  amount  and  (2)  requests  a  distribution. 
          CPA-LEDGER asks for the distribution,  by partner name, each time 
          you use DAILY option 3.  SETUP menu option 2  asks  you  for  the 
          number  of  partners  in the partnership and each partner's name. 
          Your allocation of profit/loss amounts  permit  more  flexibility 
          than  is  provided  by  a  fixed percentage allocation.  Like the 
          fixed percentage allocation,  above,  any allocation pertains  to 
          the  entire  period  for  which you request financial statements.  
          The allocation process proceeds as follows,  after you ask for an 
          income statement: 
     
            .  First,   CPA-LEDGER  informs  you  of  the  profit/loss  for 
               year-to-date  and  asks  you  to  be  ready  to   make   the 
               distribution to partners. 
     
            .  Second,  CPA-LEDGER displays partner names (there is a limit 
               on  the  number  of  partners and that limit is 10) and asks 
               that you enter the profit/loss amount for each  partner,  in 
               turn. 
          
     
     
                                                                       99-6
     

            .  Provided that your allocation equals the profit/loss amount, 
               CPA-LEDGER  proceeds  to  prepare  the financial statements.  
               Otherwise, you are returned to the first step, above. 
     
     SOLE PROPRIETORSHIPS.
     
     Instead  of  asking  for  information  about  a  corporation's owners' 
     equity,  the names of proprietor's capital and  drawing  accounts  are 
     requested.  This is done in SETUP menu option 1. 
     
     
     
     
       
                                                                       99-7
     
     
     IF YOU WISH TO ORDER CPA-LEDGER FROM TRONOLONE & FOSTER, PC.
     

     Requested donations for expanded versions of CPA-LEDGER are identified 
     below.  As previously mentioned,  the system comes in  nine  different 
     version.  For  clarity,  we  subdivide  the versions into (1) Business 
     Types  (there  are  three  -  corporations,  partnerships,   and  sole 
     proprietorships)  and  Processing Options (there are three - Hard Disk 
     Only,  Floppy Disk Only,  and Hard Disk and  Floppy  Disk).  Requested 
     donations are: 
     

                              ------------ Requested Donation -------------
                                Your First      Your Second    Your Third
                                Processing       Processing    Processing
        Business Type             Option           Option        Option
     --------------------     ---------------    ----------     ---------
     Corporations                $45.00            $40.00        $40.00
     
     Partnerships                 45.00             40.00         40.00
     
     Sole Proprietorships         45.00             40.00         40.00
     
     
     
     For example,  assume that your first order is for two  Business  Types 
     (corporations  and  partnerships).  The  total  requested  donation is 
     $90.00.   Later,   you  order  the  second   Processing   Option   for 
     corporations.  The  requested donation is $40.00 for the second order. 
     Your donations are greatly appreciated.  They help defray the costs of 
     maintaining the system and for  providing  free  consultation  on  the 
     technical programming of CPA-LEDGER.  
     
     Please be sure to specify (1) the Business Type and (2) the Processing 
     Option that you wish for us to ship to you.  Also please  be  sure  to 
     show  your current address so that we may update our records.  For any 
     Business Type and Processing Option ordered from Tronolone  &  Foster, 
     you  may  obtain updated copies anytime that you wish.  Just send your 
     request to Tronolone & Foster (address on the cover page of the User's 
     Manual) along with $5 for postage and handling of each shipment. 
     














```
{% endraw %}

## APNDX-C.TXT

{% raw %}
```
         
                                                                     
                                                                       100 
     
                                    APPENDIX C
               
                         SOME COMMENTS ON DISK CAPACITIES
     
     
     
     Daily Option 1 will use your hard disk or floppy  disk  (depending  on 
     the  version  of  CPA-LEDGER that you have - see Appendix B) to record 
     your accounting entries.  The entries will be: 
     
          .  Posted to the general ledger,
     
          .  Added to a data base for monthly income statements, and 
     
          .  Added to a TRANSACTION FILE.
     
     The main purpose of this appendix is to ask you to  think  about  disk 
     capacities  BEFORE you start using CPA-LEDGER,  especially if you plan 
     for your data files to be on floppy disk.  PLEASE REMEMBER THIS  -  if 
     your  data  disk  becomes  full  during  the year,  there is plenty of 
     frustration (and possibly a ruined set of  accounting  records)  ahead 
     for  you.  See  Appendix B for a more detailed discussion.  If you use 
     floppy disk for your data files and if you think  there  is  a  REMOTE 
     chance  that  the  disk  may become full before year's end,  we HIGHLY 
     recommend that you use the CPA-LEDGER version that is  for  hard  disk 
     only.  Please,  carefully think about your disk capacities  BEFORE you 
     start using CPA-LEDGER, PLEASE. 
     
     These are the three major general ledger files.  (Several other  files 
     will be on the disk, but their space requirements are minimal.) In the 
     discussion that follows, we used a floppy disk for comparison purposes 
     -  a  floppy  that  was  double-sided,  double-density  and  that when 
     completely erased had 362,496 bytes available.  We  will  assume  that 
     your  general  ledger  and the data base for monthly income statements 
     will require no more than 60,000 bytes.  (The general ledger  and  the 
     monthly  data  base  in  your "Practice Disk" requires less than 60000 
     bytes.) 
     
     To  test  capacities,  we  used  the  floppy  disk  with 362,496 bytes 
     available.  How many transactions may be added to a  transaction  file 
     without exceeding the 362,496 byte limitation? 
     
     The  disk  space  that  will  be required for your transaction file is 
     directly related to the (1) the  quantity  of  transactions  that  you 
     process  and  (2)  HOW  you  use  DAILY  Option  1.  Following  is  an 
     explanation: 
     
          .  At the beginning of EACH complete set of debits  and  credits, 
             Option 1 adds a 39 character "header" to the transaction file. 
             This  header  contains  information  such  as  the  date,  the 
             transaction reference,  and your explanation  of  the  general 
             ledger entry. The "header" is added each time that you enter a 
     
     
     
                                                                      101
     

             "Q"  (for  Quit  -  see  Chapter  6) while you are posting the 
             general ledger.  So, the more times that you enter a "Q",  the 
             more "headers" that will be added and the more disk space that 
             will be required. 
    

          .  For  each  credit to a bank checking account,  Option 1 adds a 
             check number and the payee's name  to  the  transaction  data.  
             So,  the more checks you write,  the more disk space that will 
             be required. 
     
     
     To conserve space:
     
          .  Consolidate your general  ledger  entries.  That  is,  include 
             several  debits and credits in a single entry.  Avoid "debit", 
             "credit", "Q" for Quit, "debit", "credit,  "Q" for Quit,  etc. 
             Instead,  consolidate - like this, "debit", "debit", "credit", 
             "credit", "Q" for Quit. 
     
          .  If  feasible,  consolidate  your checks.  That is,  instead of 
             writing two checks to the same vendor on the same  day,  write 
             one   check  for  the  entire  amount,   if  that  suits  your 
             record-keeping requirements. 
     
     
     To show you the effect this has,  we conducted a small  experiment  in 
     writing records to the transaction file.  Here is what we did: 
     
          .  Using  a copy of a completely erased disk (362,496 bytes),  we 
             posted two transactions,  over and over again,  until the disk 
             was full.  One of the transactions included a credit to a bank 
             account  and  the  other transaction did not.  We recorded the 
             two transactions in this fashion - "debit", "credit",  "Q" for 
             Quit, "debit", "credit", and "Q" for Quit.  
                  
                . 2,648 transactions were written before the disk was full. 
     
                . 5,296 debits and credits were recorded.
     
                . 1,324 checks were included in the credits.
     
          .  We repeated the  above  experiment,  EXCEPT  the  sequence  of 
             posting was "debit",  "debit", "credit", "credit", and "Q" for 
             Quit. 
     
                . 3,324 transactions were written before the disk was full. 
     
                . 6,648 debits and credits were recorded. 
     
                . 1,662 checks were included in the credits. 
     
     
     
                                                                       102 
     

     We also tried another mix of transactions,  this time expressed  on  a 
     monthly  basis.  We  assumed the following mix of monthly transactions 
     for a twelve month period,  and used 300,000 bytes as available to the 
     transaction file. 
     
          .  75 separate entries.  (That is,  the "Q" for Quit was used  75 
             times.) 
     
          .  Daily sales 24 times, each with one debit and one credit. 
     
          .  180  transactions  with  checks,  each  with one debit and one 
             credit. 
          
          .  50 additional transactions, each with one debit and one credit. 
     
     
     The computer program told us that, for a year: 
     
          .  6,096 debits and credits  would  have  been  posted  and  that 
             289,129 of the 300,000 bytes available would have been used. 
     
          .  2,160 checks would have been included in the credits. 
     
     
     This should give you some general idea on disk capacity.  HOWEVER,  DO 
     NOT USE THE ABOVE EXAMPLES AS HARD AND FAST RULES.  The  examples  are 
     intended for illustration only.  It is impossible for us to predict if 
     and  when  you will fill your transaction file.  As pointed out,  that 
     depends on your volume of transactions and on how you enter them. 
    
     This means that you should study your transactions very carefully  and 
     be  very  sure  that all of them,  for the entire year,  can be easily 
     included on the disk used for your transaction files.  Do NOT take any 
     chances.  If you have any doubts, do not use CPA-LEDGER.  We recommend 
     that you DO NOT use  CPA-LEDGER  with  only  one  floppy  drive,  with 
     CPA-LEDGER and your general ledger files on the same floppy disk. 
     

















```
{% endraw %}

## APNDX-D.TXT

{% raw %}
```
      
     
                                                                       103
                                                                        
     
                                   APPENDIX D              

            SOME COMMENTS ABOUT AN ACCOUNTING AND BOOKKEEPING SYSTEM
     
     
     
     
     
     Refer to the Preface of this manual (page 3) for  an  outline  of  the 
     bookkeeping  knowledge  that you will need in order to effectively use 
     CPA-LEDGER.  We assume that you have that knowledge and that you  know 
     how to apply it properly in your business. 
     
     Remember  this.  The  more  complex  that  your  business transactions 
     become, the more bookkeeping and accounting knowledge you should have.  
     We are not attempting to alarm you or to convince you that you  should 
     rely  on  others  to  maintain  your accounting system.  However,  you 
     should know that bookkeeping does require technical knowledge and that 
     you should possess  that  technical  knowledge  BEFORE  attempting  to 
     maintain a double-entry bookkeeping system. 
     
     In  the  following discussion we will briefly cover several areas that 
     you should consider before designing your accounting  and  bookkeeping 
     system. 

          .  First,  we  will  distinguish  between  the cash basis and the 
             accrual basis of accounting. 
     
          .  Second,  we will cover some important procedures and  controls 
             that should be considered for any accounting system. 
     
          .  Third, we will present an overview of the accounting cycle and 
             tell you where CPA-LEDGER fits into the picture. 
     
          .  Fourth,  we  will  briefly  discuss  the Balance Sheet and the 
             Income Statement. 
     
          .  Fifth, we will tell you about the account classifications that 
             CPA-LEDGER uses in the Balance Sheet and the Income Statement.  
             We will also tell you about the types  of  accounts  that  are 
             typically included in each classification. 
     
          .  Sixth,  we will make some suggestions on how you can decide on 
             the specific  accounts  to  be  included  in  your  accounting 
             system. 
     
      
     
                                                                       104 
     
     
     CASH VERSUS ACCRUAL BASIS OF ACCOUNTING.
     
     The "cash basis" of accounting is used if:
     
           .  Income is recorded when cash is COLLECTED, and
     
           .  Expenses are recorded when cash is PAID. 
     
      The "accrual basis" of accounting is used if:
     
           .  Income is recorded when it is EARNED (regardless of when cash 
              is collected), and 
     
           .  Expenses are recorded when they are INCURRED  (regardless  of 
              when cash is paid). 
        

     Thus, you have two choices for your accounting system - the cash basis 
     or  the  accrual  basis.  The method that you choose should be the one 
     that results in an accurate measurement of  your  company's  operating 
     results.  The  cash  basis  of  accounting  may  not  be acceptable if 
     failure to record "accruals"  and  "deferred"  items  will  result  in 
     material misstatements in the financial statements.  

     Accruals  and  deferred  items  are  discussed  in the section of this 
     appendix entitled, "ADJUSTING ENTRIES". 
    
     The cash basis has advantages,  including simpler and more  economical 
     bookkeeping.   However,   it  has  disadvantages  also.   Unless  cash 
     receipts less disbursements closely approximates  your  true  earnings 
     and  financial  condition,  the cash basis of accounting may result in 
     materially inaccurate financial statements - as  compared  to  similar 
     statements that would result from the accrual basis. 
     
     A  complete discussion of the advantages and disadvantages,  including 
     income tax considerations,  of these  two  methods  of  accounting  is 
     beyond  the  scope  of  this appendix.  The accounting method that you 
     choose is extremely important,  from both an income tax standpoint and 
     from  the  standpoint  of  managing  your business.  Consult with your 
     local CPA if you cannot decide which method is best for you. 
     
      
     
                                                                       105 
     

     PROCEDURES AND CONTROLS.
         
     The importance of good accounting procedures and  controls  cannot  be 
     overemphasized.  Following  is  an  outline  of  major points that you 
     should consider. 
     
     
             .  Decide when your accounting entries will  be  recorded  and 
                who will record them.  Set a schedule and stick to it. 
     
             .  Make  sure  that  anyone  assigned  accounting  duties  is 
                properly trained. 
     
             .  If  feasible,  do  not  allow  any  one  employee  to  have 
                responsibility  for  any  two or more of the following four 
                functions  -  (1)  authorization  of  a  transaction,   (2) 
                recording  the  transaction in the accounting records,  (3) 
                custody  of  the  assets   involved,   and   (4)   periodic 
                reconciliation of existing assets to recorded amounts. 
     
             .  Decide  on  all  forms  that  you  will need and train your 
                employees how to use them.  The  forms  should  be  of  two 
                types  - (1) SOURCE DOCUMENT forms,  discussed in a section 
                of this appendix to  follow  and  that  is  entitled,  "THE 
                ACCOUNTING  CYCLE",  and (2) forms to assist in summarizing 
                entries  to  be  entered   in   your   accounting   system.  
                Summarizing forms suggested for CPA-LEDGER are contained in 
                Appendix E. 
   
             .  Decide  on  cost effective internal controls that are to be 
                followed  in  making  sure  that   all   transactions   are 
                authorized  according  to  approved company policy and that 
                each entry in your accounting system is: 
     
                  .  Complete and supported by proper documentation. 
    
                  .  Calculated in the proper amounts. 
     
                  .  Entered into the proper accounts. 
     
                  .  Recorded in the proper period. 
     
                You should also establish controls to be sure that no valid 
                transactions are omitted from your accounting system. 
     
             .  Decide on procedures to be followed in: 
     
                  .   Limiting  access  to   assets,   important   records, 
                     documents,   and   blank   forms  to  only  authorized 
                     personnel. 
     
                                                                          
                                                                       106     
     
                  .  Periodic  comparison  of  amounts  recorded   in  your 
                     accounting   system   with   independent  evidence  of 
                     existence and valuation.  Examples include  counts  of 
                     cash on hand, counts or securities, and reconciliation 
                     of  bank  accounts.  Your controls should also provide 
                     for action to be taken on  any  differences  resulting 
                     from the comparison. 
     
     As you can see,  designing an accounting system is not an  easy  task.  
     Selecting  the  proper accounts to be included requires both technical 
     knowledge and informed  judgement.  Then,  there  are  the  accounting 
     controls that you will need.  Without a good balance of cost effective 
     controls,  one  takes  an undue chance that the accounting system will 
     not produce accurate results.  If  you  do  not  feel  comfortable  in 
     designing your accounting system or controls,  consult with your local 
     CPA.   Know  that  designing  effective  internal  controls   requires 
     professional  knowledge.  Seek  professional  assistance if you do not 
     understand how to design effective internal controls in an  accounting 
     system. 
          
     THE ACCOUNTING CYCLE.
     
     The accounting cycle begins with collecting economic information about 
     transactions  that occur in your business and ends with preparation of 
     formal financial statements.  An accounting system should be  designed 
     to  accurately  assemble  the economic information in a manner that is 
     both understandable and meaningful. 
     
     Perhaps it would be helpful to step through this "assembling"  process 
     so that you will have a better understanding of the accounting cycle. 
                        

          STEP  1  - COLLECTING ECONOMIC INFORMATION.  Economic information 
     is collected in an accounting system by  means  of  SOURCE  DOCUMENTS.  
     Examples are: 
     
          .  Evidence  of  transactions involving outside parties,  such as 
             sales invoices, paid checks, notes signed by debtors, invoices 
             received from creditors, and deposit slips. 
     
          .  Other economic events that do not involve outside parties  and 
             which  must  be  recorded  because  they have an impact on the 
             company.  Examples are depreciation and estimates of bad  debt 
             expense. 
     
     These  source  documents are the "documentation" which support entries 
     made in the accounting system.  However,  the entries cannot  be  made 
     until  the  source documents are analyzed and a decision is made as to 
     the transaction that occurred and which accounts were affected. 
     
      
     
                                                                       107 
     

          STEP   2  -  ANALYZING  SOURCE  DOCUMENTS.   This  step  involves 
     analyzing the source documents to assess their impact on the  business 
     in terms of revenues,  expenses,  gains,  losses, assets, liabilities, 
     and owners' equity.  The analysis forms the basis  for  developing  an 
     ACCOUNTING  ENTRY.  For  example,  a cash sale increases both an asset 
     (cash) and revenues (sales).  The accounting entry should be  a  debit 
     (increase) to cash and a credit (increase) to sales. 
     
     It  is  very important that source documents be analyzed thoroughly in 
     order to determine the proper accounting entry.  This often requires a 
     high degree of accounting skill.  The accuracy with which it  is  done 
     determines the reliability of the financial statements. 
                                                            

          STEP 3 - RECORDING THE TRANSACTION.  Recording the transaction in 
     the  accounting  system  basically  involves  showing  the date of the 
     transaction, account(s) debited, account(s) credited,  dollar amounts, 
     reference information, and a short explanation for future recall.  You 
     Use  CPA-LEDGER's  DAILY  Option  1  to  record  transactions  in your 
     accounting system. 
     
     Various types of records are used to record  accounting  transactions.  
     Manual systems usually have (1) a general journal, (2) several special 
     journals  to  accommodate like-kind transactions such as cash receipts, 
     cash disbursements, accounts payable, and (3) a general ledger. 
     
     The general ledger has an account for each  type  of  asset  (such  as 
     cash,  account receivable, and buildings), liability (such as accounts 
     payable, wages payable), owners' equity, revenues, expenses, gains and 
     losses.  At the end  of  each  accounting  period  (usually  monthly), 
     information  in  the  general  journal  and in the special journals is 
     transferred to the general ledger. 
     
     This process is often referred to as "posting".  The general ledger is 
     used for preparing financial statements. 

     Some computerized accounting systems do not use a general  journal  or 
     the special journals.  Rather,  accounting entries are posted directly 
     to the general ledger and the general journal and special journals are 
     reconstructed from a detailed transaction file.  This is  the  process 
     followed by CPA-LEDGER. 
                                                        

          STEP  4  -  PREPARING AN UNADJUSTED TRIAL BALANCE.  At the end of 
     each accounting period (usually a month),  after all entries have been 
     posted  to the general ledger,  an unadjusted trial balance is usually 
     prepared.  An unadjusted trial balance is a listing of all accounts in 
     the general ledger,  and their respective debit and  credit  balances, 
     before  any  adjusting  entries  have been posted.  CPA-LEDGER's DAILY 
     Option 2 is used to automatically print an unadjusted trial balance. 
     
      
     
                                                                       108
     

          STEP 5 - ADJUSTING ENTRIES.  If your accounting system is kept on 
     the accrual basis (see the above section of  this  appendix  entitled, 
     CASH  VERSUS  ACCRUAL  BASIS  OF  ACCOUNTING),  you  will need to make 
     several adjusting entries to amounts in  your  general  ledger  before 
     preparing a Balance Sheet or an Income Statement.  Remember,  when the 
     accrual basis is used: 
     
          .  Income should be recorded when EARNED, regardless of when cash 
             is received. 
     
          .  Expenses should be recorded when INCURRED,  regardless of when 
             cash is paid. 
     
     
     Adjusting entries can be viewed as falling into these categories: 
     
          .  ACCRUED  EXPENSES.   During  the  accounting  period,  certain 
             expenses may have been incurred even  though  payment  is  not 
             made  until  the  next  accounting period.  An example is rent 
             expense  that  is  not  billed  until  the   month   following 
             occupancy. 
     
          .  ACCRUED  INCOME.  Certain  income  may  be  earned  during the 
             accounting period even though cash has not been collected.  An 
             example is rental income that is not billed  until  the  month 
             following occupancy. 
     
          .  DEFERRED  EXPENSES.  Expenses may have been recorded that will 
             not to be  used  up  in  the  current  accounting  period.  An 
             example is rent expense that is paid in advance. 
     
          .  DEFERRED INCOME.  You may collect income in advance of when it 
             due.  An  example  is  rental  income  that  is  collected  in 
             advance. 
     
          .  ESTIMATED ITEMS.  Some adjusting entries are estimated because 
             they depend on  future  events.  Examples  are  estimates  for 
             depreciation expense and bad debt expense. 
     
          .  INVENTORIES.  Physical inventories must be taken at the end of 
             each accounting period to determine the inventory amount to be 
             reported  on  the  Balance Sheet and the Income Statement.  If 
             perpetual inventory records are kept,  there still  should  be 
             some  procedure  to  ensure  that  the  perpetual  amounts are 
             accurate. 
     
     
     With the exception of inventories,  use CPA-LEDGER's DAILY Option 1 to 
     record  your  adjusting  entries.  DAILY  Option 3 asks for the ending 
     inventory value and uses the value to  make  the  necessary  adjusting 
     entry.  Remember  that.  REMEMBER  THAT  OPTION  3 MAKES THE ADJUSTING 
     ENTRY FOR ENDING INVENTORY. 
     
     
     
                                                                       109
     

     Determining  the  proper  adjusting  entries  is not as easy task.  It 
     requires  detailed  knowledge  of  (1)  bookkeeping  procedures  being 
     followed,  (2) transactions that have and that have not been recorded, 
     and (3) careful  analysis.  The  unadjusted  trial  balance  is  often 
     helpful  in identifying account balances that require adjustment,  but 
     it must be supplemented with (1), (2), and (3) mentioned above. 
     
     To assist  you  in  gaining  a  firmer  grasp  on  adjusting  entries, 
     following are some illustrations. 
     

          .  ACCRUED  EXPENSES.  Your  company  has a Note Payable,  in the 
     amount of $10,000,  recorded on the Balance  Sheet.  Interest  in  the 
     amount of $1,200 is payable each March 31,  for the preceding 12 month 
     period.  On December 31 (the date of your financial statements),  $900 
     of the $1,200 ($100 per month times nine months) in unpaid interest is 
     unrecorded  and  is  properly  chargeable  to  the  current accounting 
     period.  The adjusting entry to record the accrued interest is: 
     
            Interest Expense                       $900.00
              Interest Payable                                 $900.00
     

          .  ACCRUED  INCOME.  Assume  the  same facts shown above,  except 
     that the Note Payable is a Note Receivable.  The adjusting entry would 
     be: 
     
            Interest Receivable                    $900.00
              Interest Income                                  $900.00
     

          .  DEFERRED EXPENSES.  Assume the same facts as shown for ACCRUED 
     EXPENSES,  except that  the  $1,200  was  paid  and  recorded  at  the 
     BEGINNING  of  the  interest  period.  The following entry was made on 
     March 31: 
     
            Interest Expense                     $1,200.00
              Cash                                           $1,200.00
     
     The adjusting entry on December 31 would be:
     
            Interest Expense Paid in Advance       $300.00  
              Interest Expense                                 $300.00
     
     Notice that,  after  the  adjusting  entry,  $900.00  remains  in  the 
     Interest  Expense  account.  Interest Expense Paid in Advance is shown 
     on the Balance Sheet as a Current Asset.  (Some accountants would  use 
     the  title "Prepaid Interest Expense" in lieu of Interest Expense Paid 
     in Advance.) 
          
      
                                                                       110
     
     

          .  DEFERRED INCOME.  Assume the same facts as shown for  DEFERRED 
     EXPENSES,  except  that  the  note  is  a Note Receivable and that the 
     following entry was made on March 31: 
     
            Cash                                 $1,200.00
              Interest Revenue                               $1,200.00
     
     The adjusting entry on December 31 would be:
     
            Interest Revenue                       $300.00
              Interest Collected in Advance                    $300.00
     
     Notice that $900.00 remains in the Interest Revenue account.  Interest 
     Collected in Advance is shown  on  the  Balance  Sheet  as  a  Current 
     Liability.  (Some  accountants  would  use the title "Prepaid Interest 
     Income" in lieu of Interest Collected in Advance.) 
     

          .  ESTIMATED ITEMS.  As mentioned,  the amounts of some adjusting 
     entries  must  be estimated.  This is because the amount of the actual 
     expense is dependent upon some future  condition  or  event.  Examples 
     are  provisions  for  depreciation,  bad debts,  and warranty expense. 
     Consider depreciation as  an  example.  Assuming  that  the  "straight 
     line"  method  is used,  the annual depreciation charge is based on an 
     estimated useful life of the asset.  Bad debt expense is based  on  an 
     estimate  of  amounts  that  will prove to be uncollectible.  Warranty 
     expense is based on an estimate of the volume of  claims  against  the 
     warranty.  Sample  adjusting  entries are shown below,  along with the 
     estimates used to compute the amount of the adjustment. 
     
     An item of equipment,  costing $82,000 is estimated to have  a  useful 
     life  of  10  years.  It  is  estimated that the equipment will have a 
     salvage value of $2,000 at the end of the 10 year  period.  Using  the 
     straight  line method of depreciation,  the annual depreciation charge 
     would be ($82,000 less $2,000, or $80,000 divided by 10 years): 
     
          Depreciation Expense - Building           $8,000.00
            Allowance for Depreciation - Building               $8,000.00
     
     After reviewing outstanding Accounts Receivable,  it is estimated that 
     $10,000 will prove to be  uncollectible.  The  account  Allowance  for 
     Doubtful  Accounts  has  a  current balance of $8,000.00 The adjusting 
     entry would be: 
     
          Bad Debt Expense                          $2,000.00
            Allowance for Doubtful Accounts                     $2,000.00
     
      
     
                                                                       111
     

          .  INVENTORIES.  Some accountants do not consider  recording  the 
     ending inventory as an "adjusting entry".  We are including it just to 
     be  sure  that  you do not overlook it.  We will not allow theoretical 
     arguments get in the way of our understanding what needs to be done. 
     
     As  already  mentioned,   if  perpetual  inventory  records  are   not 
     maintained,  the  ending inventory should be recorded before financial 
     statements are prepared.  In a manual system,  the following entry  is 
     usually  made:   (Assume  that  the  ending  inventory  is  valued  at 
     $50,000.00.) 
     
          Inventory                                $50,000.00
            Income Summary                                     $50,000.00
     
     When you use CPA-LEDGER's DAILY Option 3, the computer system asks you 
     to enter the inventory value and it makes  the  appropriate  adjusting 
     entry. 
     
     
     To further assist you in identifying adjusting entries that need to be 
     made  before  preparing  financial statements,  following is a list of 
     areas that you should consider.  (The  list  is  not  intended  to  be 
     complete   because   each   business   usually   has  its  own  unique 
     characteristics.) 
     
          .  Any expense or loss that should be  recorded  in  the  current 
             accounting period but which has not yet been recorded. 
     
          .  Any  revenue  or  gain  that should be recorded in the current 
             accounting period but which has not yet been recorded. 
     
          .  Any expense that  is  paid  in  advance  and  that  should  be 
             recognized as an expense in some other accounting period. 
     
          .  Any  revenue  that  is collected in advance and that should be 
             recognized as revenue in some other accounting period. 
     
          .  Depreciation expense. 
     
          .  Bad debt expense. 
     
          .  Warranty expense. 
     
          .  Ending inventory. 
     
      
     
                                                                       112
     

          .  STEP 6 - CLOSING  ENTRIES.  In  a  manual  accounting  system, 
     closing entries are prepared so that all revenue,  expense,  gain, and 
     loss accounts will be reduced to  zero  and  be  ready  for  the  next 
     accounting period. 
     
     You  do  not  have  to  worry  about  closing  entries  when  you  use 
     CPA-LEDGER.  It automatically makes the closing entries for you. 
     
     
          .  STEP  7  -  PREPARING  THE  FINANCIAL  STATEMENTS.  After  the 
     adjusting  and closing entries have been posted to the general ledger, 
     you are ready to prepare the financial statements. 
     
     CPA-LEDGER's  DAILY  Option  3  prepares  the  statements   for   you, 
     automatically. 
     
     
          .  STEP  8  -  PREPARING A POST-CLOSING TRIAL BALANCE.  After all 
     adjusting and closing entries have been posted to the general  ledger, 
     a  post-closing  trial  balance may be prepared.  It is used to verify 
     that debits  and  credits  are  equal  at  the  start  of  the  coming 
     accounting period.  
     
     DAILY  Option  9 will print a post-closing trial balance for you.  Use 
     it as a guide in determining the accounts to be included  in  the  new 
     general  ledger for the accounting period that is about to start.  See 
     Chapter 13. 
     
     
          .  STEP 9  -  REVERSING  ENTRIES.  Reversing  entries  are  used, 
     sometimes,  to back out adjusting entries that were made at the end of 
     the  previous  accounting  period.   Reversing   entries   are   never 
     mandatory,  even  in  a manual accounting system.  Their purpose is to 
     simplify  a  subsequent  accounting  entry.   If  one  remembers   the 
     adjustments,  and  makes  subsequent accounting entries correctly with 
     the adjustments  in  mind,  there  is  no  requirement  for  reversing 
     entries. 
     
     Reversing  entries  are never made when using CPA-LEDGER.  There is no 
     need for them.  That is because a new general ledger is started at the 
     beginning of each accounting period.  See  Chapter  3  of  the  User's 
     Manual for details. 
     
     
     THE BALANCE SHEET AND THE INCOME STATEMENT.
     
     The  Balance  Sheet,  also sometimes called the Statement of Financial 
     Position,  summarizes the financial position of a  business  as  of  a 
     specific  point  in  time.  It presents the assets,  liabilities,  and 
     owners' equity. 
     
     The  Income  Statement,  on  the  other  hand,   summarizes  revenues, 
     expenses,  gains, and losses for a specified period of time - a month, 
     a quarter, or a year. 
     
      
     
                                                                       113
     

     ACCOUNT CLASSIFICATIONS USED BY CPA-LEDGER.
     
     Refer to Chapter 3 of the User's Manual  for  a  list  of  the  account 
     classifications  used  by CPA-LEDGER.  To assist you while using SETUP 
     Option 1 (also see Chapter 3), the following is a brief description of 
     the types  of  accounts  that  should  be  included  in  each  of  the 
     classifications.  We  will  take  up the Balance Sheet classifications 
     first. 
     
     
          .  CURRENT ASSETS are cash and other assets that  are  reasonably 
     expected  to  be (1) converted to cash,  (2) to be sold,  or (3) to be 
     used by the business during its normal operating cycle or  within  one 
     year  from  the Balance Sheet date,  whichever is longer.  Examples of 
     current assets are cash,  accounts receivable,  merchandise inventory, 
     short-term investments, and prepaid expenses. 

          
          .  INVESTMENT  AND FUNDS include assets acquired for financial or 
     investment purposes and funds that are set  aside  for  future  needs.  
     Examples include investments in real estate, stocks, and bonds.  Funds 
     set  aside  for future needs includes monies reserved for purchasing a 
     future building site and for redeeming long-term liabilities. 
     

          .  OPERATIONAL ASSETS are those facilities  and  equipment  which 
     are needed (and are being used) by a business in its on-going major or 
     central  operations.   Examples  include  land,   buildings,  delivery 
     vehicles, machinery, equipment, and furniture and fixtures. 
     

          .  INTANGIBLE ASSETS are those assets which provide an  exclusive 
     right  which  has  a  monetary  value  and  the  monetary value is not 
     dependent  upon  the  assets'  physical  substance.  Examples  include 
     goodwill, copyrights, patents, trademarks, and a franchise. 
     

          .  OTHER  ASSETS  are those assets that are not easily classified 
     in any one  of  the  above  asset  classifications.  Examples  include 
     long-term receivables from employees and idle operational assets. 
     

          .  DEFERRED  CHARGES  are  for  expenses  that  have been paid in 
     advance and that will  benefit  future  accounting  periods.  Examples 
     include   machinery   rearrangement   costs  and  long-term  insurance 
     prepayments.  Deferred charges are distinguished from prepaid expenses 
     shown under CURRENT  ASSETS  by  the  time  period  involved.  Prepaid 
     expenses  pertain  to  the  next  accounting period.  Deferred charges 
     pertain to a longer time. 
     
      
                                                                       114
     
     

          .  CURRENT LIABILITIES are those liabilities  that  will  require 
     the  use  of existing current assets or that will require the creation 
     of other  current  liabilities.  Examples  include  accounts  payable, 
     revenue  collected  in  advance,  short-term  notes  payable,  current 
     maturities  of  long-term  debt,   and  accrued  expenses  for  taxes, 
     interest, and payroll. 
     

          .  LONG-TERM  LIABILITIES  are  liabilities that will not require 
     the use of current assets during the next operating cycle or one  year 
     from  the  Balance Sheet date,  whichever is longer.  Examples include 
     long-term bonds payable and long-term notes payable. 
     

          .  OWNERS' EQUITY.  Depending on the version of  CPA-LEDGER  that 
     you  ordered,  you  will  see  differing formats in the OWNERS' EQUITY 
     section of the Balance Sheet.  For a sole proprietorship, you will see 
     CAPITAL and  DRAWING  accounts.  For  partnerships,  you  will  see  a 
     separate  CAPITAL  and  DRAWING account for each partner.  The CAPITAL 
     account represents ownership interest in  the  business.  The  DRAWING 
     account  represent  withdrawals  from  the business during the current 
     accounting period.  The OWNERS' equity section for  a  corporation  is 
     more   extensive   and   the  account  classifications  are  presented 
     separately below. 
     

          .  CONTRIBUTED CAPITAL reports the stated or legal capital of the 
     corporation.  This is  represented,  usually,  by  the  par  value  of 
     outstanding    capital   stock.    The   corporation's   Articles   of 
     Incorporation and state  law  specify  the  legal  capital.  See  your 
     attorney   if   you   have   any  questions  regarding  legal  capital 
     requirements.   CPA-LEDGER's  SETUP  Option  1  asks  you   how   many 
     CONTRIBUTED  CAPITAL  accounts  that  you  want to create.  You should 
     create one account for each class of outstanding capital stock.  SETUP 
     Option 3 assigns values to each of the accounts. 
     

          .  OTHER  CONTRIBUTED  CAPITAL  includes  transactions  that  are 
     related  to CONTRIBUTED CAPITAL.  Examples include amounts received in 
     excess of par or stated value of capital stock  outstanding,  treasury 
     stock transactions, and retirements and conversion of stock. 
     

          .  RETAINED  EARNINGS  is the corporation's accumulated earnings, 
     less losses and dividends to date. 
     
      
     
                                                                       115
     

          .  ALL OTHER EQUITY is  used,  primarily,  to  report  unrealized 
     losses  and  loss  recoveries  from  application of the lower-of-cost- 
     or-market rule for long-term investments in  equity  securities.  This 
     rule  is  discussed  in  Financial  Accounting  Standards Board (FASB) 
     Statement 12,  and it  is  quite  technical.  We  recommend  that  you 
     consult  with  your  local  CPA  before  using  the  ALL  OTHER EQUITY 
     classification to comply with FASB Statement  12.  Also  consult  with 
     your  CPA  before using this classification for any other transaction.  
     This is because the ALL OTHER EQUITY  classification  should  be  used 
     only  in  rare  cases,  and very technical rules cover its use.  These 
     rules are beyond the scope of this appendix. 
     

     This  concludes  discussion  of  the  Balance  Sheet  classifications.  
     Income Statement classifications follow. 
     
     
          .   SALES  is  represented  by  assets  received  or  liabilities 
     liquidated (or a combination of both)  in  the  sale  of  products  or 
     services  that  are  related to the business' ongoing major or central 
     operations.   For  CPA-LEDGER  purposes,  Sales,   Sales  Returns  and 
     Allowances,   and   Sales   Discount   are   included   in  the  SALES 
     classification. 
     

          .  PURCHASES AND RELATED ACCOUNTS are used  to  accumulate  costs 
     merchandise that will be held for resale to others and that is related 
     to  the business' ongoing major or central operations.  Accounts under 
     this  classification   include   Purchases,   Purchase   Returns   and 
     Allowances, and Purchase Discounts. 
     
     
          .  OPERATING EXPENSES are outflows or other using up of assets or 
     incurrence  of  liabilities  (or a combination of both) resulting from 
     rendering services,  delivering or producing goods,  or  carrying  out 
     other  activities  that  constitute  the  business'  ongoing  major or 
     central  operations.   Examples   of   accounts   included   in   this 
     classification  include  Salary  and  Wage Expense,  Supplies Expense, 
     Depreciation Expense,  Entertainment Expense,  Insurance Expense,  and 
     Rent Expense. 
     

          .  OTHER  REVENUES  AND  GAINS  are derived from activities other 
     than  those  that  constitute  the  company's   ongoing   or   central 
     operations.  Examples include Interest Income,  Rent Income,  and Gain 
     on Sale of Nonproductive Assets. 
                    
      
     
                                                                       116
     

          .  OTHER EXPENSES AND LOSSES are incurred from  activities  other 
     than   those   that   constitute  the  company's  ongoing  or  central 
     operations.  Examples include Interest Expense and  Loss  on  Sale  of 
     Nonproductive Assets. 
     

          .  EXTRAORDINARY GAINS AND EXTRAORDINARY  LOSSES  are  gains  and 
     losses  that  (1)  are  unusual  in  nature  and that (2) do not occur 
     frequently.   Before  a   gain   or   a   loss   may   be   considered 
     "extraordinary",  stringent rules must be applied.  These rules, which 
     almost eliminate the  extraordinary  classification,  are  covered  in 
     Accounting Principles Board Opinion 30.  We recommend that you consult 
     with your local CPA before using the extraordinary classification.  
     
     
          .  INCOME TAX EXPENSE is represented  by  income  tax  levied  by 
     Federal, State, and local jurisdictions. 
     
     

     ACCOUNTS TO BE INCLUDED IN YOUR ACCOUNTING SYSTEM.
     
     The number and type of accounts maintained for a specific business are 
     affected by considerations such as what is owned and owed,  the nature 
     and volume of operations,  and the type of information which is needed 
     for decisions, tax purposes, and credit purposes. 
     
     For example,  one salary expense account may suffice for your company.  
     Another company may opt  to  set  up  separate  expense  accounts  for 
     executive, office, and sales salaries. 
     
     As  a  general  rule,  the  financial  and  other  reports needed by a 
     business owner provide a clue as to what accounts need to be  included 
     in  the  accounting  system.  Accounts  for assets,  liabilities,  and 
     equity will be needed for the Balance Sheet.  Accounts  for  revenues, 
     expenses,  gains,  and losses will be needed for the Income Statement.  
     The level of detail in each of these account classifications  will  be 
     determined,  to  a large extent,  by the business owners' needs.  Some 
     elaboration of revenue and expense accounts may be needed for Internal 
     Revenue purposes.  Other details may be  required  by  creditors.  The 
     major  question  is  this - What specific accounts do you need for the 
     information requirements of your business? 
     
     You can answer that question by considering  your  type  of  business, 
     your financial information requirements,  and the past and anticipated 
     operations of your company.  If available, review financial statements 
     of businesses  similar  to  yours.  Review  your  own  past  financial 
     statements.  Read  trade  journals and other publications that discuss 
     accounting systems for your type of business.  If you think you may be 
     borrowing funds in the near future,  consult with potential creditors.  
     These sources should give you some good ideas. 
     
     

                                                                       
















```
{% endraw %}

## APNDX-E.TXT

{% raw %}
```
       
     
     
                                                                       117
     
     
     
                                   APPENDIX E 
     
                   SOME FORMS THAT MAY BE USED WITH CPA-LEDGER
     
     
     This appendix contains some forms that might be helpful to you in your 
     use of CPA-LEDGER.  Study each form and,  if required,  revise and add 
     to them to suit your particular needs. 
     
     The  forms  can  be  used  for  either  the  cash  or accrual basis of 
     accounting.  If you use the cash basis of accounting, however, some of 
     the forms may not be applicable.  For example,  FORMS 8 and 14  record 
     sales  and purchases on account.  Unless you keep separate records for 
     accounts receivable and accounts payable,  you might not wish  to  use 
     these  two  forms.  Also,  as  indicated in the first paragraph,  your 
     particular needs may dictate revising the forms that you do use. 

     The forms in this appendix are designed to assist you  in  summarizing 
     general  ledger  entries.  They  are  NOT  designed to serve as source 
     documentation  that  support   the   entries.   Examples   of   source 
     documentation  include  sales invoices,  deposit slips,  cash register 
     readings to support cash sales,  paid checks,  and vendors'  invoices. 
     Always  reference  the  source  documentation  on  the  forms  used to 
     summarize your general ledger entries. 
     
     Whether you use  the  forms  in  this  appendix,  or  other  ones,  we 
     recommend  that  you  adopt a standardized method for documenting each 
     general ledger entry that you  enter  in  CPA-LEDGER.  ALWAYS  prepare 
     supporting  source  documentation  for  each  of  your  general ledger 
     entries BEFORE you post your electronic  books!  Then,  summarize  the 
     entries  on  forms  such  as are suggested in this appendix,  post the 
     entries  based  on  the  summarized  data,   and   file   the   source 
     documentation and summarizing forms for future reference. 
     
     Seventeen forms are offered in the pages that follow.  Data on FORM 1, 
     FORMS  8  -  14,  and  FORMS 16 and 17 are used to make general ledger 
     entries in CPA-LEDGER.  (All data on FORMS 2 - 7 and 15 are summarized 
     on FORM 1.) FORM 1 has been assigned the acronym "DCR", for DAILY CASH 
     REPORT.  Use  that  acronym  (with an assigned number) when giving the 
     posting reference to CPA-LEDGER.  For other than FORM 1,  use the form 
     number (such as FORM 8) as the posting reference.  The use of standard 
     names   for   posting  references  will  facilitate  your  input  into 
     CPA-LEDGER and will provide a standardized method for referring to the 
     forms and to the supporting source documentation. 
     
     

                                                                       118   
                                DAILY CASH REPORT
     
     FORM 1                                                    DATE: __________
                                                           DCR NBR.: __________
     G/L
     ACCT.
     NBR.   
             STARTING CASH - BEGINNING OF DAY                     $ ___________
             TODAY'S CASH COLLECTIONS:
     ____     FROM CASH SALES (BEFORE SALES TAX & RETURNS)          ___________
     ____     FROM SALES TAX ON CASH SALES                          ___________
              FROM ACCOUNTS RECEIVABLE:                  
     FORM 2       CASH COLLECTIONS, INCLUDING CHECKS (FROM FORM 2)  ___________
     FORM 3   FROM OTHER CASH RECEIPTS (FROM FORMS 3 AND 15)        ___________
     FORM 15
                TOTAL CASH TO BE ACCOUNTED FOR ...................  ___________
       
              CASH COUNT - END OF DAY                               ___________
     ____     TODAY'S BANK DEPOSITS -  ONE                          ___________
     ____                           -  TWO                          ___________
              TODAY'S CASH PAYMENTS:
     FORM 4     FOR MERCHANDISE PURCHASES (FROM FORM 4)             ___________
     FORM 5     FOR OPERATING EXPENSES (FROM FORM 5)                ___________
     FORM 6     FOR SALES RETURNS PAID IN CASH (FROM FORM 6)        ___________
     FORM 7     FOR OTHER CASH DISBURSEMENTS (FROM FORM 7)          ___________
              TOTAL CASH ACCOUNTED FOR ...........................  ___________
     ____     CASH OVER OR (SHORT)                                  ___________

              SALES TAX INFORMATION:
     ____       WHOLESALE      $ ___________   PREPARED BY ____ CHECKED BY ____
     ____       RETAIL           ___________   POSTED BY   ____ DATE __________
     ____       EXEMPT           ___________
                COLLECTED        ___________
     ENTRY POSTED TO GENERAL LEDGER (FROM THIS FORM AND FORMS 2 - 7 and 15)
     G/L ACCT.    DEBIT        CREDIT      G/L ACCT.    DEBIT        CREDIT
       NBR.                                  NBR.
      _____  $ __________  $ __________      _____  $ _________  $ __________

      _____    __________    __________      _____    _________    __________

      _____    __________    __________      _____    _________    __________

      _____    __________    __________      _____    _________    __________

      _____    __________    __________      _____    _________    __________

      _____    __________    __________      _____    _________    __________

      _____    __________    __________      _____    _________    __________

      _____    __________    __________      _____    _________    __________
     
      ____     __________    __________      _____    _________    __________
     
      ____     __________    __________      _____    _________    __________

     TOTALS  $ __________  $ __________             $ _________  $ __________
     
     
     
                                                                       119
     
     
     Use FORM 1 to (1)  record  summarize  your  daily  cash  receipts  and 
     disbursements,  (2) account for cash, and to (3) summarize the related 
     general ledger entry. 
    
     Use the G/L ACCT. NBR. column to record the account numbers to be used 
     in the general ledger entry.  Then summarize the entry at  the  bottom 
     of FORM 1. 
     
     Also notice that FORM 1 is used for summarizing general ledger entries 
     that are shown on FORMS 2 through 7 and 15.  Thus, FORM 1 is a control 
     form  for facilitating recording general ledger entries that come from 
     several sources. 
     
     
                                                                       120
                         ACCOUNTS RECEIVABLE COLLECTIONS
     
     
     FORM 2                                                   DATE: ________
     
      .......... CLIENT ........     . AMOUNT COLLECTED FOR .          TOTAL
     ACCT.                           SALES   FINANCE  ACCOUNT  CASH    CASH
     NBR.       NAME       INVOICE    TAX    CHARGES  BALANCE  DISC.   COLLECTED
                                                  
     ____ ________________ _______ $_______ $_______ $_______ $_______ $_______
         
     ____ ________________ _______  _______  _______  _______  _______  _______
     
     ____ ________________ _______  _______  _______  _______  _______  _______
     
     ____ ________________ _______  _______  _______  _______  _______  _______
     
     ____ ________________ _______  _______  _______  _______  _______  _______
     
     ____ ________________ _______  _______  _______  _______  _______  _______
     
     ____ ________________ _______  _______  _______  _______  _______  _______
     
     ____ ________________ _______  _______  _______  _______  _______  _______
     
     ____ ________________ _______  _______  _______  _______  _______  _______
     
     ____ ________________ _______  _______  _______  _______  _______  _______
         
     TOTALS                        $_______ $_______ $_______ $_______ $_______
     
       G/L ACCT. NBR.               _______  _______  _______  _______  _______


     RECORD THE GENERAL LEDGER ENTRY BELOW AND TRANSFER IT TO FORM 1.
     PREPARED BY ____ CHECKED BY ____ TRANSFERRED TO FORM 1 BY ____
     
     G/L
     ACCT.
     NBR.       DEBIT        CREDIT
     
     ____   $ _________  $ _________ 
     
     ____     _________    _________

     ____     _________    _________
     
     ____     _________    _________ 
     
     ____     _________    _________
             
     TOTALS $ _________  $ _________
     
     NOTE:  SEE NEXT PAGE FOR GUIDELINES ON WHEN  THIS  FORM  IS  USED  FOR 
     EITHER THE CASH BASIS OR ACCRUAL BASIS OF ACCOUNTING. 
     
     
     
                                                                       121
     
     
     FORM  2  is  used  to  record  cash  (including  check) collections of 
     accounts  receivable.  The  accounting  entry  to  record  collections 
     depends  upon  (1) the procedure for recognizing finance charges,  (2) 
     local sales tax requirements,  and (3) whether the cash or the accrual 
     basis of accounting is used. 
     
     The  illustration  that  follows  assumes  that (1) client A purchases 
     $1,000 in merchandise on account,  (2) client A is  allowed  a  $20.00 
     sales  discount,  (3) the finance charge is 20 percent annually on the 
     outstanding balance (excluding taxes and discounts) from the  date  of 
     sale,  and  (4)  the  account  is  collected one month after the sale. 
     Consult your local sales tax requirements regarding when sales tax  is 
     payable  to  the taxing authority.  The following illustration assumes 
     that the tax is payable when the account is  collected  for  the  cash 
     basis of accounting and when the sale is made for the accrual basis. 
     
     
     1.  CASH BASIS OF ACCOUNTING.
     
        A.  DATE OF SALE.  No entry.
     
        B.  COLLECTION.
     
             Cash                         $ 1,046.33
             Sales Discount                    20.00
               Sales                                    $ 1,000.00
               Finance Charge Revenue                        16.33
               Sales Tax Payable                             50.00
     
     2.  ACCRUAL BASIS OF ACCOUNTING.
     
        A.  DATE OF SALE.
     
             Accounts Receivable          $ 1,050.00
               Sales                                    $ 1,000.00
               Sales Tax Payable                             50.00
  
        B.  COLLECTION AND ONE MONTH'S FINANCE CHARGE
     
             Cash                         $ 1,046.33
             Sales Discount                    20.00
               Accounts Receivable                      $ 1,050.00
               Finance Charge Revenue                        16.33
     
     
     The  purpose  of  the  entries  above is to illustrate two methods for 
     recording the transaction.  Dollar amounts shown for entries 1B and 2B 
     are taken from FORM 2.  Entry 2A is taken from FORM 8.  Note that  the 
     SALES  TAX  column is used for the cash basis of accounting but is not 
     used for the accrual basis.  This is  because  Sales  Tax  Payable  is 
     recorded in entry 2A. 
     
     
                                                                       122
                               OTHER CASH RECEIPTS
     
     FORM 3                                                   DATE: ________
     
     G/L
     ACCT.
     NBR.            EXPLANATION OF CASH RECEIPT                   AMOUNT
     
     ____    _________________________________________________  $ _________
     
     ____    _________________________________________________    _________
     
     ____    _________________________________________________    _________
     
     ____    _________________________________________________    _________
     
     ____    _________________________________________________    _________
     
     ____    _________________________________________________    _________
     
     ____    _________________________________________________    _________
    
     
             TOTAL CASH COLLECTED                               $ _________
     
     
     RECORD THE GENERAL LEDGER ENTRY BELOW AND TRANSFER IT TO FORM 1.
     PREPARED BY ____ CHECKED BY ____ TRANSFERRED TO FORM 1 BY ____

     G/L
     ACCT.
     NBR.       DEBIT           CREDIT
     
     ____   $ __________    $ __________  
          
     ____     __________      __________
     
     ____     __________      __________
     
     ____     __________      __________
     
     ____     __________      __________
     
     ____     __________      __________
     
     ____     __________      __________
     
     TOTALS $ __________    $ __________
     
     NOTE:  USE  THIS FORM TO RECORD DAILY CASH RECEIPTS (INCLUDING CHECKS) 
           FROM SOURCES OTHER  THAN  CASH  SALES,  COLLECTION  OF  ACCOUNTS 
           RECEIVABLE,  AND CASH REFUNDS ON PURCHASE RETURNS (SEE FORM 15). 
           EXAMPLES INCLUDE COLLECTION OF A  NOTE  RECEIVABLE  AND  A  CASH 
           REFUND ON SECURITY DEPOSITS. 
     
      
                                                                       123
                     CASH PAYMENTS FOR MERCHANDISE PURCHASES
     
     
     FORM 4                                                 DATE: _______
                                                                          
     
      ............  VENDOR  ............   . FOR ACCTS. PAY. ONLY .   TOTAL    
     ACCT.                                     INVOICE     CASH       CASH
     NBR.          NAME            INVOICE    AMT. PAID   DISCOUNT    PAID
     
     _____  _____________________  _______ $__________ $__________ $__________
     
     _____  _____________________  _______  __________  __________  __________
     
     _____  _____________________  _______  __________  __________  __________
     
     _____  _____________________  _______  __________  __________  __________
     
     _____  ____________________   _______  __________  __________  __________
     
     _____  ____________________   _______  __________  __________  __________
     
     _____  ____________________   _______  __________  __________  __________
     
     _____  ____________________   _______  __________  __________  __________
     
     
      TOTALS                               $__________ $__________ $__________
     
      GENERAL LEDGER ACCT. NBR.             __________  __________  __________
     
     
     RECORD THE GENERAL LEDGER ENTRY BELOW AND TRANSFER IT TO FORM 1.
     PREPARED BY ____ CHECKED BY ____ TRANSFERRED TO FORM 1 BY ____
     
     G/L
     ACCT.
     NBR.          DEBIT        CREDIT
     
     ____      $ _________  $ __________ 
          
     ____        _________    __________
     
     ____        _________    __________
     
     ____        _________    __________
     
     ____        _________    __________
     
     TOTALS    $ _________  $ __________

     NOTE:  USE  THIS  FORM  TO  RECORD  CASH  (NOT  CHECK)  PAYMENTS  FOR 
            MERCHANDISE  PURCHASES  AND  FOR  PAYMENTS   ON   ACCOUNT   FOR 
            MERCHANDISE  PURCHASES PREVIOUSLY RECORDED AS ACCOUNTS PAYABLE. 
            USE FORM 9 FOR CHECK PAYMENTS FOR  MERCHANDISE  PURCHASES.  USE 
            FORMS 5 AND 10 FOR PURCHASES RELATED TO OPERATING EXPENSES. 
    
   
                                                                       124
                         OPERATING EXPENSES PAID IN CASH
                         (OTHER THAN SALARIES AND WAGES)
     
     FORM 5                                                  DATE: ________
     
     G/L       .................. VENDOR ...................
     ACCT.   ACCT.
     NBR.    NBR.               NAME                   INVOICE          AMOUNT
     
     ____   _____  ___________________________________ _______      $ __________
     
     ____   _____  ___________________________________ _______        __________
     
     ____   _____  ___________________________________ _______        __________
     
     ____   _____  ___________________________________ _______        __________
     
     ____   _____  ___________________________________ _______        __________
     
     ____   _____  ___________________________________ _______        __________
     
     ____   _____  ___________________________________ _______        __________
     
     ____   _____  ___________________________________ _______        __________
     
     
            TOTAL CASH PAID                                         $ __________
     
     
     RECORD THE GENERAL LEDGER ENTRY BELOW AND TRANSFER IT TO FORM 1.
     PREPARED BY ____ CHECKED BY ____ TRANSFERRED TO FORM 1 BY ____
     
     G/L                                     G/L
     ACCT.                                   ACCT.
     NBR.         DEBIT        CREDIT        NBR.      DEBIT       CREDIT
                                             
     ____     $ _________  $ __________     _____  $ __________ $ __________ 
     
     ____       _________    __________     _____    __________   __________
     
     ____       _________    __________     _____    __________   __________
     
     ____       _________    __________     _____    __________   __________
     
     ____       _________    __________     _____    __________   __________
     
      TOTALS  $ ________   $ __________            $ __________ $ __________
     
     NOTE: USE  THIS FORM TO RECORD CASH (NOT CHECK) PAYMENTS FOR OPERATING 
           EXPENSES, SUCH AS POSTAGE,  TRANSPORTATION,  AND OFFICE SUPPLIES 
           AND  FOR  CASH  PAYMENTS  FOR THESE ITEMS PREVIOUSLY RECORDED AS 
           ACCOUNTS PAYABLE.  RECORD CHECK PAYMENTS FOR OPERATING  EXPENSES 
           ON FORM 10. RECORD SALARIES AND WAGES DATA ON FORMS 12 AND 13. 
     
      
     
                                                                       125
                           SALES RETURNS PAID IN CASH
                OR SALES RETURNS CREDITED TO ACCOUNTS RECEIVABLE
     
     FORM 6                                                    DATE: _______
     
            
     CLIENT                                 TOTAL                   
     ACCT.             SALES       ACCT.    CASH   CASH                SALES
     NBR.    CLIENT    INVOICE     REC.     PAID   DISCOUNT  SALES     TAX

     ____ ____________ _______  $_______ $_______ $_______ $_______  $_______
     
     ____ ____________ _______   _______  _______  _______  _______   _______
                         
     ____ ____________ _______   _______  _______  _______  _______   _______
     
     ____ ____________ _______   _______  _______  _______  _______   _______
     
     ____ ____________ _______   _______  _______  _______  _______   _______
     
     ____ ____________ _______   _______  _______  _______  _______   _______
     
     ____ ____________ _______   _______  _______  _______  _______   _______
                                                     
     TOTALS                     $_______ $_______ $_______ $_______  $_______
     
     G/L ACCT. NBR.              _______  _______  _______  _______   _______

     
     
     RECORD THE GENERAL LEDGER ENTRY BELOW AND TRANSFER IT TO FORM 1.
     PREPARED BY ____ CHECKED BY ____ TRANSFERRED TO FORM 1 BY ____
     
     G/L
     ACCT.
     NBR.         DEBIT        CREDIT
     
     ____    $ __________  $ __________ (SALES RETURNS AND ALLOWANCES -
                                         DEBIT)
     ____      __________    __________
     
     ____      __________    __________
     
     ____      __________    __________

     ____      __________    __________
     
     ____      __________    __________  
                                                                      
     TOTALS  $ __________  $ __________
     
     NOTE:  USE THIS FORM TO RECORD (1) CASH PAYMENTS AND  (2)  CREDITS  TO 
            ACCOUNTS  RECEIVABLE  FOR  MERCHANDISE WHICH WAS SOLD AND WHICH 
            WAS SUBSEQUENTLY RETURNED BY THE CLIENT.  RECORD CHECK PAYMENTS 
            ON FORM 11.  COLUMNS USED WILL DEPEND UPON THE PREVIOUS GENERAL 
            LEDGER ENTRY. 
     
     
     
     
                                                                       126
     

     The  general  ledger entry to record the return depends upon the entry 
     that was made previously to record the sale .  Generally,  the general 
     ledger entry should cancel (reverse) the previous entry or entries. 
     
     For example, assume that this entry was made to record a sale. 
     
        Accounts Receivable               $1,000.00
          Sales                                      $1,000.00
          
     If  the client returns all of the merchandise,  before making payment, 
     the following entry would record the transaction. 
     
        Sales Returns and Allowances      $1,000.00
          Accounts Receivable                        $1,000.00
     
     
     The client's account should also be reduced by $1,000.00,  or whatever 
     amount  was charged.  Use the "CLIENT ACCT.  NBR." column of FORM 6 to 
     identify the client's account number. 
     
     Cash, in lieu of Accounts Receivable (above), would have been credited 
     if the client had been reimbursed $1,000.00 in cash.  Also, if a sales 
     cash discount was allowed before the  merchandise  was  returned,  the 
     discount should be reversed. 
     

                                                                       127
                            OTHER CASH DISBURSEMENTS
     
     
     FORM 7                                                   DATE: _______
     
     G/L      .................... VENDOR ......................
     ACCT.  ACCT.                                          
     NBR.   NBR.                   NAME                    INVOICE     AMOUNT
     
     ____   ____  ________________________________________ _______  $__________
     
     ____   ____  ________________________________________ _______   __________
     
     ____   ____  ________________________________________ _______   __________
     
     ____   ____  ________________________________________ _______   __________
     
     ____   ____  ________________________________________ _______   __________
     
     ____   ____  ________________________________________ _______   __________
     
     ____   ____  ________________________________________ _______   __________
     
     
            TOTAL CASH PAID                                         $__________
     
     
     RECORD THE GENERAL LEDGER ENTRY BELOW AND TRANSFER IT TO FORM 1.
     PREPARED BY ____ CHECKED BY ____ TRANSFERRED TO FORM 1 BY ____
     
     G/L                                  G/L
     ACCT.                                ACCT.
     NBR.         DEBIT        CREDIT     NBR.       DEBIT       CREDIT
     
     ____     $ __________ $ __________   ____   $ __________ $ __________
     
     ____       __________   __________   ____     __________   __________
     
     ____       __________   __________   ____     __________   __________
     
     ____       __________   __________   ____     __________   __________
     
     ____       __________   __________   ____     __________   __________
     
     
     TOTALS   $ __________ $ __________          $ __________ $ __________
     
     NOTE: EXCEPT FOR SALARIES AND WAGES, USE THIS FORM TO RECORD ALL OTHER 
           CASH  (NOT CHECK) DISBURSEMENTS NOT SHOWN FORMS 4 - 6.  EXAMPLES 
           INCLUDE   ADVANCES  TO  EMPLOYEES AND SECURITY DEPOSITS.  RECORD 
           SALARIES  AND  WAGES   ON  FORMS  12  AND   13.   RECORD   OTHER 
           DISBURSEMENTS BY CHECK ON FORM 12.  
     
     
                                                                       128
                                SALES ON ACCOUNT
    

     FORM 8                                                   DATE: ________
     
     ....... CLIENT ......   SALES                            OTHER
     ACCT.                   INVOICE      SALES     SALES     G/L              
     NBR.        NAME        NBR.         AMOUNT    TAX       ACCT.  AMOUNT   

     ____  _______________  _______     $________ $________   ____ $________ 

     ____  _______________  _______      ________  ________   ____  ________  

     ____  _______________  _______      ________  ________   ____  ________  

     ____  _______________  _______      ________  ________   ____  ________  

     ____  _______________  _______      ________  ________   ____  ________  

     ____  _______________  _______      ________  ________   ____  ________  

     ____  _______________  _______      ________  ________   ____  ________  

     ____  _______________  _______      ________  ________   ____  ________  

     ____  _______________  _______      ________  ________   ____  ________  

     ____  _______________  _______      ________  ________   ____  ________  

     ____  _______________  _______      ________  ________   ____  ________  

           TOTALS                       $________ $________        $________
     
           GENERAL LEDGER ACCT. NBR.     ________  ________          


     RECORD THE ENTRY BELOW AND POST IT TO THE GENERAL LEDGER.
     PREPARED BY ____ CHECKED BY ____ POSTED BY ____ DATE ________

     G/L
     ACCT.
     NBR.        DEBIT        CREDIT
     
     ____    $ __________ $ __________ (ACCOUNTS RECEIVABLE - DEBIT)
     
     ____      __________   __________
     
     ____      __________   __________ 
     
     ____      __________   __________ (SALES - CREDIT)
     
     TOTALS  $ __________ $ __________
     
     NOTE:  USE THIS FORM TO  RECORD  SALES  ON  ACCOUNT  THAT  ARE  TO  BE 
            CONSIDERED  AS  ACCOUNTS  RECEIVABLE.  POST THE AMOUNTS TO YOUR 
            GENERAL LEDGER IF ACCOUNTS RECEIVABLE IS INCLUDED IN YOUR CHART 
            OF ACCOUNTS.  IF A PARTIAL PAYMENT IS RECEIVED ON  A  SALE,  AT 
            THE TIME OF THE SALE, RECORD THE ENTIRE RECEIVABLE ON THIS FORM 
            AND THE COLLECTION ON FORM 2. 
     

     
                                                                       129
                    CHECK PAYMENTS FOR MERCHANDISE PURCHASES 
                
     
     FORM 9                                                 DATE: ________
     
             ......... VENDOR .........   . FOR ACCTS. PAY. ONLY .
      CHK.  ACCT.                          INVOICE       CASH        CHECK
      NBR.  NBR.       NAME      INVOICE   AMT. PAID   DISCOUNT      AMOUNT
     
     ____ ____  ________________ _______ $__________ $__________   $__________
     
     ____ ____  ________________ _______  __________  __________    __________
     
     ____ ____  ________________ _______  __________  __________    __________

     ____ ____  ________________ _______  __________  __________    __________

     ____ ____  ________________ _______  __________  __________    __________
     
     ____ ____  ________________ _______  __________  __________    __________
     
     ____ ____  ________________ _______  __________  __________    __________
     
     ____ ____  ________________ _______  __________  __________    __________
     
     ____ ____  ________________ _______  __________  __________    __________
     
      TOTALS                             $__________ $__________   $__________
     
      GENERAL LEDGER ACCT. NBR.           __________  __________    __________
     
     RECORD THE ENTRY BELOW AND POST IT TO THE GENERAL LEDGER.
     PREPARED BY ____ CHECKED BY ____ POSTED BY ____ DATE ________
     
     G/L                                 G/L
     ACCT. CHK.                          ACCT. CHK.
     NBR.  NBR.    DEBIT      CREDIT     NBR.  NBR.    DEBIT   CREDIT
                                       
     ____  ____ $_________ $_________    ____  ____  $________ $________
     
     ____  ____  _________  _________    ____  ____   ________  ________
     
     ____  ____  _________  _________    ____  ____   ________  ________
     
     ____  ____  _________  _________    ____  ____   ________  ________
     
     ____  ____  _________  _________  
     
     TOTALS     $_________ $_________                $________ $________
     
     NOTE: USE THIS FORM TO RECORD CHECK PAYMENTS FOR MERCHANDISE PURCHASES 
           AND  FOR  CHECK  PAYMENTS  FOR  MERCHANDISE PURCHASES PREVIOUSLY 
           RECORDED AS ACCOUNTS PAYABLE.  RECORD THE CHECK NUMBER  AND  THE 
           PAYEE  FOR  EACH  CREDIT TO A BANK ACCOUNT.  USE FORM 4 FOR CASH 
           PAYMENTS FOR MERCHANDISE PURCHASES. 
    
      
                                                                       130
                         OPERATING EXPENSES PAID BY CHECK
                         (OTHER THAN SALARIES AND WAGES)
     
     
     FORM 10                                                 DATE: ________
     
     G/L         ..................... VENDOR ...................
     ACCT. CHK. INVOICE  ACCT.                                        CHECK
     NBR.  NBR.  NBR.    NBR.                NAME                     AMOUNT
     
     ____  ____ _______ ____  ____________________________________ $ __________
                        
     ____  ____ _______ ____  ____________________________________   __________
     
     ____  ____ _______ ____  ____________________________________   __________
     
     ____  ____ _______ ____  ____________________________________   __________
     
     ____  ____ _______ ____  ____________________________________   __________
     
     ____  ____ _______ ____  ____________________________________   __________
     
     ____  ____ _______ ____  ____________________________________   __________
     
     ____  ____ _______ ____  ____________________________________   __________
     
     
            TOTAL                                                  $ __________
     
     RECORD THE ENTRY BELOW AND POST IT TO THE GENERAL LEDGER.
     PREPARED BY ____ CHECKED BY ____ POSTED BY ____ DATE ________
     
     G/L                                 G/L
     ACCT. CHK.                          ACCT. CHK.
     NBR.  NBR.   DEBIT        CREDIT    NBR.  NBR.    DEBIT      CREDIT
                                             
     ____  ____ $_________ $__________  ____  ____ $__________ $__________ 
                                           
     ____  ____  _________  __________  ____  ____  __________  __________
     
     ____  ____  _________  __________  ____  ____  __________  __________
     
     ____  ____  _________  __________  ____  ____  __________  __________
     
     ____  ____  _________  __________  ____  ____  __________  __________
     
    TOTALS      $_________ $__________             $__________ $__________
     
     NOTE: USE  THIS FORM TO RECORD CHECK PAYMENTS FOR OPERATING  EXPENSES, 
           SUCH  AS  POSTAGE,  TRANSPORTATION,  AND OFFICE SUPPLIES AND FOR 
           CHECK PAYMENTS FOR THESE ITEMS PREVIOUSLY RECORDED  AS  ACCOUNTS 
           PAYABLE.  RECORD  THE CHECK NUMBER AND THE PAYEE FOR EACH CREDIT 
           TO A BANK ACCOUNT.  RECORD CASH PAYMENTS FOR OPERATING  EXPENSES 
           ON FORM 5.  RECORD SALARIES AND WAGES DATA ON FORMS 12 AND 13. 
     
     
                                                                       131
                           SALES RETURNS PAID BY CHECK
     
     
     FORM 11                                                   DATE: _______
     
     
           CLIENT
     CHK.  ACCT.             SALES     ACCTS.   CHECK    CASH            SALES
     NBR.  NBR.    CLIENT    INVOICE   REC.     AMT.     DISC.   SALES    TAX  
                                                                         
     ____ ____ ____________ _______ $_______ $_______ $_______ $_______ $_______
     
     ____ ____ ____________ _______  _______  _______  _______  _______  _______
     
     ____ ____ ____________ _______  _______  _______  _______  _______  _______
     
     ____ ____ ____________ _______  _______  _______  _______  _______  _______
     
     ____ ____ ____________ _______  _______  _______  _______  _______  _______
     
     ____ ____ ____________ _______  _______  _______  _______  _______  _______
     
     ____ ____ ____________ _______  _______  _______  _______  _______  _______
     
     
     TOTALS                         $_______ $_______ $_______ $_______ $_______
     
     GENERAL LEDGER ACCT. NBR.       _______  _______  _______  _______  _______
     
     
     RECORD THE ENTRY BELOW AND POST IT TO THE GENERAL LEDGER.
     PREPARED BY ____ CHECKED BY ____ POSTED BY ____ DATE ________
     
     G/L                                  G/L
     ACCT. CHK.                           ACCT. CHK.
     NBR.  NBR.     DEBIT      CREDIT     NBR.  NBR.   DEBIT       CREDIT
     
     ____  ____ $__________ $__________ (SALES RETURNS AND ALLOWANCES - DEBIT) 
               
     ____  ____  __________  __________   ____  ____ $__________ $__________
     
     ____  ____  __________  __________   ____  ____  __________  __________
     
     ____  ____  __________  __________   ____  ____  __________  __________

     ____  ____  __________  __________   ____  ____  __________  __________
     
     ____  ____  __________  __________   ____  ____  __________  __________
     
       TOTALS   $__________ $__________              $__________ $__________
     
     NOTE: USE THIS FORM TO RECORD CHECK PAYMENTS FOR MERCHANDISE WHICH WAS 
           SOLD  AND WHICH WAS SUBSEQUENTLY RETURNED BY THE CLIENT.  RECORD 
           CASH  PAYMENTS  FOR RETURNS ON FORM 6.  COLUMNS USED WILL DEPEND 
           UPON THE  PREVIOUS   GENERAL  LEDGER  ENTRY.  RECORD  THE  CHECK 
           NUMBER AND THE PAYEE FOR EACH CREDIT TO A BANK ACCOUNT. 
     
    
                                                                       132
                            OTHER DISBURSEMENTS BY CHECK
     
     
     FORM 12                                                  DATE: _______
     
     G/L           .................. VENDOR ...................
     ACCT.  CHK. INVOICE  ACCT.
     NBR.   NBR.   NBR.   NBR.              NAME                      AMOUNT
     
     ____   ____ _______ ____  __________________________________  $__________
     
     ____   ____ _______ ____  __________________________________   __________
     
     ____   ____ _______ ____  __________________________________   __________
     
     ____   ____ _______ ____  __________________________________   __________
     
     ____   ____ _______ ____  __________________________________   __________
     
     ____   ____ _______ ____  __________________________________   __________
     
     ____   ____ _______ ____  __________________________________   __________
     
     
            TOTAL                                                  $__________
     
     
     RECORD THE ENTRY BELOW AND POST IT TO THE GENERAL LEDGER.
     PREPARED BY ____ CHECKED BY ____ POSTED BY ____ DATE ________
     
     G/L                                    G/L
     ACCT. CHK.                             ACCT. CHK.
     NBR.  NBR.     DEBIT      CREDIT       NBR.  NBR.    DEBIT       CREDIT
     
     ____ ____  $__________ $__________     ____  ____ $__________ $__________
     
     ____ ____   __________  __________     ____  ____  __________  __________
     
     ____ ____   __________  __________     ____  ____  __________  __________
     
     ____ ____   __________  __________     ____  ____  __________  __________
     
     ____ ____   __________  __________     ____  ____  __________  __________
     
     
     TOTALS     $__________ $__________                $__________ $__________
     
     NOTE:  USE THIS FORM TO RECORD ALL OTHER CHECK DISBURSEMENTS NOT SHOWN 
            FORMS 9 - 11 AND 13.  EXAMPLES INCLUDE  ADVANCES  TO  EMPLOYEES 
            AND  SECURITY  DEPOSITS.  ALSO  USE  THIS  FORM TO RECORD CHECK 
            PAYMENTS TO EMPLOYEES FOR PAYROLL - SEE  FORM  13.  RECORD  THE 
            CHECK  NUMBER  AND THE PAYEE FOR EACH CREDIT TO A BANK ACCOUNT.  
            RECORD OTHER CASH DISBURSEMENTS ON FORM 7.  RECORD SALARIES AND 
            WAGES ON FORM 13. 
            
     
     
                                                                       133
                               SALARIES AND WAGES
     
     
     FORM 13                                                     DATE: ________
                                                FOR PAY PERIOD ENDING:_________
     
                                                           G/L
                                                           ACCT.
                                                           NBR.     AMOUNT
     FROM PAYROLL REGISTER FOR EMPLOYEES:
       REGULAR EARNINGS                  $__________       ____ $__________
                                                           ____  __________
                                                           ____  __________
       OVERTIME EARNINGS                  __________       ____  __________
                                                           ____  __________
                                                           ____  __________
       BONUS EARNINGS                     __________       ____  __________
                                                           ____  __________
                                                           ____  __________
       OTHER PREMIUM PAY EARNINGS         __________       ____  __________
                                                           ____  __________
                                                           ____  __________

        TOTAL DEBITS ................... $__________            $__________
     DEDUCTIONS:
       FEDERAL INCOME TAX                $__________       ____ $__________
       STATE INCOME TAX                   __________       ____  __________
       LOCAL INCOME TAX                   __________       ____  __________
       FICA TAX                           __________       ____  __________
       U.S. SAVINGS BONDS                 __________       ____  __________
       CHARITABLE CONTRIBUTIONS           __________       ____  __________
       OTHER _______________________      __________       ____  __________
             _______________________      __________       ____  __________
             _______________________      __________       ____  __________

         TOTAL CREDITS ................. $__________             __________

     FROM PAYROLL REGISTER, INDIVIDUAL
     TAXES ON EMPLOYERS - CREDITS:
       AMOUNT SUBJECT TO FICA TAX        $__________
         FICA TAX                                          ____ $__________
       AMOUNT SUBJECT TO UNEMPLOYMENT TAX:
         STATE                            __________ 
          STATE UNEMPLOYMENT COMP. TAX                     ____  __________
         FEDERAL                          __________
          FEDERAL UNEMPLOYMENT COMP.TAX                    ____  __________
       OTHER EMPLOYER TAXES:
          ____________________________    __________
          AMOUNT OF TAX                                    ____  __________
          ____________________________    __________
          AMOUNT OF TAX                                    ____  __________
     
         TOTAL EMPLOYER TAX - DEBIT ....                        $__________
     
     PREPARED BY ____ CHECKED BY ____ POSTED BY ____ DATE ________
     
     
     
                                                                       134
     
     
     Use  FORM  13 to summarize information that you record on your Payroll 
     Register.  A Payroll Register is not included with  CPA-LEDGER  or  in 
     this  User's  Manual.   Consult  with  your  local  CPA  if  you  need 
     assistance in this area. 
     
     You should also know that various federal,  state,  and local laws and 
     regulations  require  employers  to keep certain data in their payroll 
     records.  Also,  periodic reports of this data must  be  sent  to  the 
     governmental  agencies  and  remittances  must  be  made  for  amounts 
     withheld from employees and for taxes  levied  on  the  employer.  You 
     should be thoroughly familiar with these laws and regulations.  If you 
     need assistance in this area, consult with your local CPA. 
     
     The  amounts  on  FORM 13 are used to prepare the general ledger entry 
     for payroll.  Typical general ledger entries  for  payroll  are:  (For 
     brevity, all possible accounts are not shown.  Consult with your local 
     CPA  if  you  do  not  understand  the general ledger entries that are 
     required to record the payroll.) 
     
      EMPLOYEES' EARNINGS: 
     
       Office Salaries Expense                            Debit $
       Sales Salaries Expense                             Debit $
       General and Administrative Salaries Expense        Debit $
         Employee Federal Income Tax Payable                       Credit $
         Employee State Income Tax Payable                         Credit $
         Employee FICA Tax Payable                                 Credit $
         Employee Bond Deductions Payable                          Credit $
         Salaries Payable                                          Credit $
     
      EMPLOYER'S PAYROLL TAXES:
     
       Payroll Tax Expense                                Debit $
         Employer FICA Tax Payable                                 Credit $
         State Unemployment Comp. Tax Payable                      Credit $
         Fed. Unemployment Comp. Tax Payable                       Credit $
                          

     Use FORM 12 to record the  check  payments  for  the  various  payable 
     accounts shown above. 
     
     
                                                                       135
                              PURCHASES ON ACCOUNT
    
     FORM 14                                                  DATE: ________
     
     ....... VENDOR ......   PURCHASE     MDSE.      OTHER
     ACCT.                   INVOICE      PURCHASE   G/L             ACCOUNTS  
     NBR.        NAME        NBR.         AMOUNT     ACCT.  AMOUNT   PAYABLE

     ____  _______________  _______     $________    ____ $________ $________ 

     ____  _______________  _______      ________    ____  ________  ________ 

     ____  _______________  _______      ________    ____  ________  ________ 

     ____  _______________  _______      ________    ____  ________  ________ 

     ____  _______________  _______      ________    ____  ________  ________ 

     ____  _______________  _______      ________    ____  ________  ________ 

     ____  _______________  _______      ________    ____  ________  ________ 

     ____  _______________  _______      ________    ____  ________  ________ 

     ____  _______________  _______      ________    ____  ________  ________ 

     ____  _______________  _______      ________    ____  ________  ________ 

     ____  _______________  _______      ________    ____  ________  ________ 

           TOTALS                       $________         $________ $________
     
           GENERAL LEDGER ACCT. NBR.     ________          ________  ________  


     RECORD THE ENTRY BELOW AND POST IT TO THE GENERAL LEDGER.
     PREPARED BY ____ CHECKED BY ____ POSTED BY ____ DATE ________

     G/L                                  G/L
     ACCT.                                ACCT.
     NBR.        DEBIT        CREDIT      NBR.       DEBIT       CREDIT
     
     ____    $ __________ $ __________    ____   $ __________ $ __________
     
     ____      __________   __________    ____     __________   __________
     
     ____      __________   __________    ____     __________   __________
     
     TOTALS  $ __________ $ __________           $ __________ $ __________
     
     NOTE:  USE THIS FORM TO RECORD PURCHASES ON ACCOUNT  THAT  ARE  TO  BE 
            CONSIDERED  AS  ACCOUNTS  PAYABLE.  POST  THE  AMOUNTS  TO YOUR 
            GENERAL LEDGER IF ACCOUNTS PAYABLE IS INCLUDED IN YOUR CHART OF 
            ACCOUNTS.  IF A  PARTIAL PAYMENT IS MADE AT  THE  TIME  OF  THE 
            PURCHASE,  RECORD  THE  ENTIRE  PURCHASE  ON  THIS FORM AND THE 
            PARTIAL PAYMENT ON EITHER FORM 4, FORM 5, FORM 9, OR FORM 10. 
     
      
     
                                                                       136
                                PURCHASES RETURNS
     
     
     FORM 15                                                   DATE: _______
     
            
      ........ VENDOR .......                                      OTHER
     ACCT.                       ACCT    CASH   CASH      MDSE.    G/L  
     NBR.    NAME      INVOICE   PAY.    RECD.  DISCOUNT  PUR.     ACCT.   AMT.

     ____ ____________ ______ $_______ $_______ $_______ $_______  ____ $_______
     
     ____ ____________ ______  _______  _______  _______  _______  ____  _______
                         
     ____ ____________ ______  _______  _______  _______  ______   ____  _______
     
     ____ ____________ ______  _______  _______  _______  _______  ____  _______
     
     ____ ____________ ______  _______  _______  _______  _______  ____  _______
     
     ____ ____________ ______  _______  _______  _______  _______  ____  _______
     
     ____ ____________ ______  _______  _______  _______  _______  ____  _______
     
     TOTALS                   $_______ $_______ $_______ $_______       $_______
     
     G/L ACCT. NBR.            _______  _______  _______  _______        _______

     
     RECORD THE GENERAL LEDGER ENTRY BELOW AND TRANSFER IT TO FORM 1.

     PREPARED BY ____ CHECKED BY ____ TRANSFERRED TO FORM 1 BY ____
     
     G/L
     ACCT.
     NBR.         DEBIT        CREDIT
     
     ____    $ __________  $ __________  
                                         
     ____      __________    __________
     
     ____      __________    __________
     
     ____      __________    __________

     ____      __________    __________
     
     ____      __________    __________  (PURCHASE RETURNS & ALLOWANCES - 
                                          CREDIT)
     TOTALS  $ __________  $ __________
     
     NOTE:  USE THIS FORM TO RECORD PURCHASES WHICH WERE  RETURNED  TO  THE 
            VENDOR.  COLUMNS  USED  WILL  DEPEND  UPON THE PREVIOUS GENERAL 
            LEDGER ENTRY. 
     
     
     
     
                                                                       137
     

     The  general  ledger entry to record the return depends upon the entry 
     that was made previously to  record  the  purchase  .  Generally,  the 
     general  ledger  entry  should  cancel (reverse) the previous entry or 
     entries. 
     
     For example, assume that this entry was made to record a purchase. 
     
        Merchandise Purchases             $1,000.00
          Accounts Payable                          $1,000.00
          
     If you return all of  the  merchandise,  before  making  payment,  the 
     following entry would record the transaction. 
     
        Accounts Payable                  $1,000.00
          Purchase Returns and Allowances           $1,000.00
     
     
     The vendor's account should also be reduced by $1,000.00,  or whatever 
     amount was credited.  Use the "VENDOR ACCT. NBR." column of FORM 15 to 
     identify the vendor's account number. 
     
     Cash, in lieu of Accounts Payable (above),  would have been debited if 
     you had received the $1,000.00.  Also, if a purchase cash discount was 
     allowed  before  the merchandise was returned,  the discount should be 
     reversed. 
     
     
                                                                      138
                                             
                                  DEPRECIATION
                 FOR PERIOD FROM ____________  TO _____________
     
     
     FORM 16                                              DATE: _________
     
     G/L                                         PRIOR
     ACCT.                                       ACCUMULATED    DEPRECIATION
     NBR.          ASSET              COST       DEPRECIATION   THIS PERIOD
     
     ____    _____________________ $___________  $___________  $___________
     
     ____    _____________________  ___________   ___________   ___________
     
     ____    _____________________  ___________   ___________   ___________
     
     ____    _____________________  ___________   ___________   ___________
     
     ____    _____________________  ___________   ___________   ___________
     
     ____    _____________________  ___________   ___________   ___________
     
     ____    _____________________  ___________   ___________   ___________
     
        TOTAL                                                  $___________
     
     RECORD THE ENTRY BELOW AND POST IT TO THE GENERAL LEDGER.
     PREPARED BY ____ CHECKED BY ____ POSTED BY ____ DATE ________
     
     G/L
     ACCT.
     NBR.         DEBIT       CREDIT
     
     ____     $__________ $__________
     
     ____      __________  __________
     
     ____      __________  __________
     
     ____      __________  __________
     
     ____      __________  __________
  
     TOTALS   $__________ $__________
     
     
     NOTE:  ATTACH  APPROPRIATE  DEPRECIATION SCHEDULES TO THIS FORM.  EACH 
            DEPRECIATION SCHEDULE  SHOULD,  AT  A  MINIMUM,  SHOW  THE  (1) 
            ASSET'S COST,  (2) ACCUMULATED DEPRECIATION AT THE BEGINNING OF 
            THE PERIOD (3) BOOK VALUE AT THE BEGINNING OF THE  PERIOD,  (4) 
            METHOD   OF   DEPRECIATION  BEING  USED,   (5)  COMPUTATION  OF 
            DEPRECIATION  EXPENSE  FOR  THE   CURRENT   PERIOD,   AND   (6) 
            UNDEPRECIATED ASSET BALANCE AT THE END OF THE PERIOD. 
     
     
                                                                       139
                          OTHER GENERAL LEDGER ENTRIES
     
     
     FORM 17                                             DATE: __________
     
     G/L                  .... CLIENT .....      .... VENDOR .....
     ACCT. CHK. INVOICE  ACCT.                 ACCT.
     NBR.  NBR.   NBR.   NBR.       NAME       NBR.        NAME        AMOUNT
     
     ____ ____  _______ ____ ________________  ____ ________________ $________
     
     ____ ____  _______ ____ ________________  ____ ________________  ________
                                
     ____ ____  _______ ____ ________________  ____ ________________  ________
     
     ____ ____  _______ ____ ________________  ____ ________________  ________
     
     ____ ____  _______ ____ ________________  ____ ________________  ________
     
     ____ ____  _______ ____ ________________  ____ ________________  ________
     
        TOTAL                                                        $________
     
     RECORD THE ENTRY BELOW AND POST IT TO THE GENERAL LEDGER.
     PREPARED BY ____ CHECKED BY ____ POSTED BY ____ DATE ________
     
     G/L                                G/L
     ACCT. CHK.                             ACCT. CHK.
     NBR.  NBR.      DEBIT      CREDIT      NBR   NBR.    DEBIT       CREDIT
                                        
     ____  ____  $__________ $__________    ____  ____ $__________ $__________
     
     ____  ____   __________  __________    ____  ____  __________  __________
     
     ____  ____   __________  __________    ____  ____  __________  __________
     
     ____  ____   __________  __________    ____  ____  __________  __________
     
     ____  ____   __________  __________    ____  ____  __________  __________
     
     ____  ____   __________  __________    ____  ____  __________  __________
     
     TOTALS      $__________ $__________               $__________ $__________


     NOTE: USE THIS FORM TO SUMMARIZE ANY GENERAL LEDGER ENTRY NOT PROVIDED 
           FOR  BY FORMS  1 - 16.  EXAMPLES INCLUDE RECORDING UNCOLLECTIBLE 
           ACCOUNTS, RECORDING UNREALIZED LOSSES ON SHORT-TERM INVESTMENTS, 
           RECORDING  AMORTIZATION  OF  INTANGIBLE  ASSETS,  AND  RECORDING 
           RETIREMENT  OF  AN  ASSET  WHEN  NO  CASH  IS  INVOLVED  IN  THE 
           TRANSACTION.  RECORD THE CHECK NUMBER AND  THE  PAYEE  FOR  EACH 
           CREDIT TO A BANK ACCOUNT. 

     





















```
{% endraw %}

## CHKREG.BAS

{% raw %}
```bas
500  ' COPYRIGHT 1986 TRONOLONE & FOSTER, PC
1000 REM CHKREG.BAS
1010 CLEAR: ON ERROR GOTO 2580
1080 CLS: LOCATE 10,1: PRINT"WOULD YOU LIKE A BRIEFING ON HOW TO USE THIS COMPUTER PROGRAM?": PRINT
1090 LOCATE 12,1: PRINT"ENTER `Y' FOR `YES' OR `N' FOR `NO'.": ROW=12: COLUMN=40: LENGTH=1: GOSUB 3150
1100 IF I8$="Y" OR I8$="y" OR I8$="N" OR I8$="n" THEN GOTO 1120
1110 GOTO 1090
1120 IF I8$="N" OR I8$="n" THEN GOTO 1210
1130 CLS: LOCATE 5,1
1140 PRINT"THIS COMPUTER PROGRAM PRINTS TRANSACTIONS THAT HAVE EITHER INCREASED OR "
1150 PRINT"DECREASED THE BANK ACCOUNT(S).  EACH BANK ACCOUNT, IF THERE IS MORE THAN ONE,"
1160 PRINT"CAUSES A SEPARATE PRINTOUT.  BANK TRANSACTIONS ARE SELECTED BASED ON CRITERIA"
1170 PRINT"THAT YOU SUPPLY.  THE SELECTION CRITERIA IS EITHER A MONTH, A RANGE OF MONTHS,"
1180 PRINT"OR FOR THE ENTIRE ACCOUNTING PERIOD TO DATE.": PRINT
1190 PRINT"PRESS ANY KEY WHEN YOU ARE READY TO CONTINUE."
1200 GOSUB 2680: GOSUB 3360
1210 CLS: GOSUB 2470   'OPEN G/L FILE
1220 INPUT #3,F1: FOR I = 1 TO F1-1: INPUT #3,F2: IF I <> 4 THEN GOTO 1240
1230 DIM A(F2): R1=F2: FOR J = 1 TO R1: INPUT #3,F2: A(J)=F2: NEXT J: INPUT #3,F1: INPUT #3,F1: INPUT #3,T1$: GOTO 1250
1240 NEXT I
1250 IF R1 < 11 THEN GOTO 1330  'R1=QTY BANK ACCTS
1260 CLS: LOCATE 10,1
1270 PRINT"MORE THAN 10 BANK ACCOUNTS SPECIFIED IN INTERNAL FILE.  THIS RUN WILL BE"
1280 PRINT"THIS ERROR IS PROBABLY DUE TO CHANGING THE IMPUT IN THE INTERNAL FILE.  WHEN"
1290 PRINT"THE INTERNAL FILE (NAMED `PASACT.FIL') CONTAINS INCORRECT DATA, OUTPUT FROM"
1300 PRINT"OTHER COMPUTER PROGRAMS WILL PROBABLY BE INCORRECT.  SO, YOU SHOULD NOT"
1310 PRINT"USE ANY OF THE SOFTWARE UNTIL THE ERROR IS CORRECTED.": PRINT
1320 PRINT"PRESS ANY KEY TO RETURN TO THE DAILY MENU.": GOSUB 2680: GOSUB 3360: GOTO 3390
1330 R2=4
1340 LOCATE 10,1: PRINT"ENTER TODAY'S DATE. USE FORMAT MMDDYY. (I.E., JUNE 8, 1984 = 060884).";: GOSUB 2680: ROW=10: COLUMN=73: LENGTH=6: GOSUB 3150
1350 GOSUB 2510: IF F1 <> 0 OR LEN(I8$) < 6 THEN GOTO 1340
1360 GOSUB 2430: IF F1 <> 0 THEN GOTO 1340
1370 I88$=I8$
1380 CLS: LOCATE 5,1: PRINT"SELECT ONE OF THE FOLLOWING NUMBERS.  THE NUMBER THAT YOU SELECT WILL DETERMINE"
1390 PRINT"WHICH ADDITIONAL QUESTIONS ARE TO BE ASKED ABOUT THE TIME PERIOD.": PRINT
1400 PRINT" 1. A SPECIFIC TRANSACTION MONTH, SUCH AS MAY."
1410 PRINT" 2. A RANGE OF TRANSACTION MONTHS, SUCH AS FROM MAY TO SEPTEMBER."
1420 PRINT" 3. DISREGARD THE TRANSACTION DATE. (THE DATE WILL WILL IGNORED.)"
1430 LOCATE 12,1: PRINT"WHICH NUMBER DO YOU SELECT? (ENTER 1 OR 2 OR 3.)";: GOSUB 2680: ROW=12: COLUMN=59: LENGTH=1: GOSUB 3150: I11$=I8$: GOSUB 2510
1440 IF F1=0 AND VAL(I11$) > 0 AND VAL(I11$) < 4 THEN GOTO 1460
1450 GOTO 1430
1460 IF I11$="1" THEN I12$="DURING A SPECIFIC TRANSACTION MONTH.": GOTO 1490
1470 IF I11$="2" THEN I12$="DURING A RANGE OF MONTHS.": GOTO 1490
1480 IF I11$="3" THEN M1$="1": M2$="12": M1=1: M2=12: FF2=1: GOTO 1620
1490 LOCATE 14,1: PRINT"YOU INDICATED YOUR DESIRE TO LIMIT THE PRINTOUT TO TRANSACTIONS THAT OCCURRED "
1500 PRINT I12$;: PRINT
1510 IF I11$="2" THEN GOTO 1550
1520 LOCATE 17,1: PRINT"ENTER THE TRANSACTION MONTH. (USE FORMAT MM. I.E., JULY = 07).";: ROW=17: COLUMN=67: LENGTH=2: GOSUB 3150: M1$=I8$: GOSUB 2510
1530 IF F1=0 AND VAL(M1$) > 0 AND VAL(M1$) < 13 AND LEN(M1$) > 1 THEN  M1=VAL(M1$): M2=VAL(M1$): GOTO 1620     'M2=ENDING MONTH
1540 GOTO 1520
1550 LOCATE 17,1: PRINT"ENTER THE BEGINNING (LOW) MONTH.  (USE FORMAT MM. I.E., JULY = 07).";: ROW=17: COLUMN=71: LENGTH=2: GOSUB 3150: M1$=I8$: GOSUB 2510   'M1$=BEG MTH.
1560 IF F1=0 AND VAL(M1$) > 0 AND VAL(M1$) < 13 AND LEN(M1$) > 1 THEN GOTO 1580
1570 GOTO 1550
1580 LOCATE 18,1: PRINT"ENTER THE ENDING (HIGH) MONTH. (USE FORMAT MM. I.E., OCTOBER = 10).";: ROW=18: COLUMN=71: LENGTH=2: GOSUB 3150: M2$=I8$: GOSUB 2510
1590 IF F1=0 AND VAL(M2$) > 0 AND VAL(M2$) < 13 AND LEN(M2$) > 1 THEN GOTO 1610
1600 GOTO 1580
1610 M1=VAL(M1$): M2=VAL(M2$): IF M2 =< M1 THEN GOTO 1550
1620 CLS: GOSUB 2560: GOSUB 2570: IF Z89=0 THEN GOSUB 2180
1630 Z89=1
1640 'READ G/L FILE
1650 F20=0
1660 FOR O = 1 TO R1  'R1=# OF BANK ACCTS.
1670 C1=A(O)  'A( CONTAINS BANK ACCOUNT NUMBERS
1680 C4=0: C6#=0#: C8#=0# : C9#=0#
1690 GOSUB 2730       'READ G/L
1692 LOCATE 15,28: PRINT SPACE$(32)
1694 LOCATE 15,24: PRINT"FOR: ";I3$
1700 IF W1 = 1 THEN GOTO 1740
1710 CLS: LOCATE 10,1
1720 PRINT"AN INACTIVE ACCOUNT NUMBER WAS FOUND IN 'ACTDTL.FIL'.  THIS RUN WILL BE"
1730 PRINT"TERMINATED.  PRESS ANY KEY TO RETURN TO THE DAILY MENU.": GOSUB 2680: GOSUB 3360: GOTO 3390
1740 GOSUB 2690     'C3#=ACCT BAL
1750 IF C2=1 THEN CLOSE #2
1760 C2=1
1770 OPEN "GENJNL.FIL" FOR INPUT AS #2
1780 ' I7$ = TRANSACTION DATE
1790 ' I1  = ACCT. NBR.
1800 ' I2$ = D OR 2 FOR DEBIT - C OR 1 FOR CREDIT
1810 ' J1$ = POSTING REF
1820 ' F6$ = CHECK NUMBER OR 1 BLANK
1830 ' I2# = TRANS $
1840 ' F90$ = PAYEE IF A CHECK
1850 ' F100$=JV EXPLANATION
1860 'READ TRANSACTION FILE
1870 H5=0: CT1=0  'H5 SET TO 1 IF A XACTION IS PRINTED
1872 LOCATE 18,42: PRINT SPACE$(10)
1880 WHILE NOT EOF(2)
1882 CT1=CT1+1
1890 INPUT #2,F1: IF F1 <> 0 THEN GOTO 1910
1900 INPUT #2,F100$,J1$,I7$: GOTO 2000
1910 I1=F1: INPUT #2,I2$,I2#,F6$,F90$
1912 LOCATE 18,24:PRINT"EXAMINING DEBIT/CREDIT NUMBER ";CT1
1920 IF I1 <> C1 THEN GOTO 2000
1930 C5$=LEFT$(I7$,2): C5=VAL(C5$)    'C5=XACTION MONTH
1940 IF I2$="C" OR I2$="1" THEN I2#=I2# * -1#
1950 IF C5 < M1 THEN C6#=C6# + I2#: GOTO 2000   'C6#=BEG BAL FOR XACTIONS
1960 IF C5 > M2 THEN GOTO 2000
1970 GOSUB 2380   'SET SPACE FOR PRINT
1980 GOSUB 3000: GOSUB 2350: H5=1: Z88=1   'PRINT XACTION
1990 C8#=C8# + I2#    'C8#=VAL OF PRINTED XACTIONS
2000 WEND
2010 ' OUT OF TRANSACTION FILE.
2020 IF H5=0 THEN GOTO 2060
2030 C9#=C6#+C8# 'C9#=ACCT BAL C6#=VAL PRIOR XACTION
2040 C10#=C6#  'C6#= PRIOR XACTIONS C10#=BEG BAL
2050 GOSUB 2880  'PRINT TOTS
2060 NEXT O
2070 ' OUT OF LOOP
2080 IF Z88=1 THEN GOTO 2120
2090 CLS: LOCATE 10,1
2100 PRINT"NO BANK TRANSACTIONS WERE FOUND THAT MET YOUR SELECTION CRITERIA.
2110 PRINT"DO YOU WISH TO TRY AGAIN?": GOSUB 3560: GOTO 2150
2120 CLS: LOCATE 10,1
2130 PRINT"ALL BANK TRANSACTIONS THAT YOU SELECTED HAVE BEEN PRINTED."
2140 PRINT"DO YOU WISH TO PRINT ADDITIONAL BANK TRANSACTIONS?": GOSUB 3560
2150 IF I8$="Y" OR I8$="y" THEN Z88=0: Z89=0: FF2=0: CLS: LOCATE 10,32: PRINT "STAND BY.": P4=66-P3: GOSUB 2170: GOTO 1380
2160 CLS: LOCATE 12,1: FOR I = 1 TO 10: LPRINT: NEXT I: GOTO 3390
2170 FOR L = 1 TO P4: LPRINT: NEXT L: RETURN
2180 P2=P2+1: P3=14
2190 FOR L = 1 TO 6
2200 IF L=4 THEN LPRINT SPACE$(69);"PAGE ";P2: GOTO 2230
2210 IF L=5 THEN LPRINT SPC(59) "RUNDATE  ";: IF L=5 THEN GOSUB 2340: LPRINT: GOTO 2230
2220 LPRINT
2230 NEXT L
2240 FF1=LEN(T1$): FF1=40-(INT(FF1)/2): LPRINT SPACE$(FF1);T1$
2250 T4$= "CHECK REGISTER": F1=LEN(T4$): F1=40-(INT(F1)/2): LPRINT SPACE$(F1) T4$
2260 IF FF2=1 THEN LPRINT SPC(36) "ALL DATES": GOTO 2290
2270 IF I11$="1" THEN LPRINT SPC(35) "FOR MONTH ";M1$: GOTO 2290
2280 LPRINT SPC(29) "FOR MONTHS ";M1$;" THROUGH ";M2$
2290 LPRINT: LPRINT
2300 LPRINT "ACCT." SPC(9) "PAYEE (IF A DECREASE)" SPC(10) "POSTING" SPC(4) "CHECK"
2310 LPRINT SPC(1) "NBR." SPC(2) "DATE" SPC(3) "EXPLANATION (IF AN INCREASE)" SPC(3) "REFERENCE" SPC(2) "NUMBER" SPC(10) "AMOUNT"
2320 LPRINT
2330 RETURN
2340 LPRINT LEFT$(I88$,2);"/";MID$(I88$,3,2);"/";RIGHT$(I88$,2);: RETURN
2350 P3=P3+1
2360 IF P3>60 THEN P4=66-P3: GOSUB 2170: GOSUB 2180
2370 RETURN
2380 IF I40# > 999999.99# THEN P1=1: FORMAT3$="###########,.##-": GOTO 2420
2390 IF I40# > 999.99# THEN P1=5: FORMAT3$="#######,.##-": GOTO 2420
2400 IF I40# > 0.99# THEN P1=10: FORMAT3$="###.##-": GOTO 2420
2410 IF I40# < 1# THEN P1=13: FORMAT3$=".##-": GOTO 2420
2420 RETURN
2430 F1=0: D1$=LEFT$(I8$,2): IF D1$ < "01" OR D1$ > "12" THEN F1=1: GOTO 2460
2440 D1$=MID$(I8$,3,2): IF D1$ < "01" OR D1$ > "31" THEN F1=1: GOTO 2460
2450 D1$=RIGHT$(I8$,2): IF D1$ < "86" THEN F1=1
2460 RETURN
2470 OPEN "PASACT.FIL" FOR INPUT AS #3
2480 OPEN "R",1,"GENLEG.FIL",111
2490 FIELD #1,25 AS X1$,30 AS X2$,6 AS X3$,1 AS X4$,4 AS X5$,2 AS X7$,1 AS X8$,10 AS X9$,8 AS Y1$,8 AS Y2$,8 AS Y3$,8 AS Y4$
2500 RETURN
2510 F1=0
2520 FOR I = 1 TO LEN(I8$)
2530 IF MID$(I8$,I,1) < "0" OR MID$(I8$,I,1) > "9" THEN F1=1: I=LEN(I8$)
2540 NEXT I
2550 RETURN
2560 LOCATE 10,32: PRINT"PLEASE STAND BY.": RETURN
2570 LOCATE 11,32: PRINT"SEARCHING FILE.": RETURN
2580 IF ERR=53 THEN GOTO 2610
2590 IF ERR= 25 OR ERR=27 THEN GOTO 2640
2600 ON ERROR GOTO 0
2610 CLS: LOCATE 10,2
2620 PRINT"GENERAL LEDGER DATA FILES NOT FOUND. PRESS ANY KEY AND YOU WILL BE RETURNED"
2630 PRINT"TO THE DAILY MENU.": GOSUB 2680: GOSUB 3360: GOTO 3390
2640 CLS: LOCATE 10,2
2650 PRINT"CHECK YOUR PRINTER.  IT IS EITHER NOT TURNED ON OR IT IS OUT OF PAPER."
2660 PRINT"PRESS ANY KEY WHEN YOU ARE READY TO CONTINUE.": GOSUB 2680: GOSUB 3360
2670 CLS: RESUME
2680 DEF SEG=0: POKE 1050, PEEK(1052): RETURN
2690 D1#=I3#+I5#  'D1#=SUM DR. - THIS PERIOD.
2700 D2#=(I4#+I6#) * -1#   'D2#=SUM CR. - THIS PERIOD.
2710 IF I4$="D" OR I4$= "1" THEN C3#=D1#+D2# ELSE C3#=D2#+D1#  'C3#=ACCT BAL
2720 RETURN
2730 GET 1,C1
2740 I1$=X1$  'ACCOUNT CLASSIFICATION
2750 I3$=X2$  'ACCOUNT TITLE
2760 Z1$=X3$  'LAST TRANS DATE
2770 W1=VAL(X4$)   'ACCT STATUS (0=INACTIVE,1=ACTIVE)
2780 Z2=CVS(X5$)  'ACCOUNT NUMBER
2790 I2=VAL(X7$)  'ACCT TYPE CODE
2800 I4$=X8$  'D=DR C=CR
2810 Z3$=X9$  'POSTING REF.
2820 I3#=CVD(Y1$)   'OPENING DEBIT
2830 I4#=CVD(Y2$)  'OPENING CREDIT
2840 I5#=CVD(Y3$)  'PERIOD DEBITS
2850 I6#=CVD(Y4$)  'PERIOD CREDITS
2860 RETURN
2870 'PRINT TOTALS
2880 I40#=C8#: IF I40# < 0# THEN I40# =I40# * -1#  'C8#=PNTED XACTIONS
2890 GOSUB 2380
2900 LPRINT: LPRINT SPC(11) "VALUE OF ABOVE TRANSACTIONS" SPC(24) SPC(P1);: LPRINT USING FORMAT3$; C8#
2910 I40#=C10#: IF I40# < 0# THEN I40# = I40# * -1#
2920 GOSUB 2380
2930 LPRINT SPC(11) "BEGINNING BALANCE PRIOR TO ABOVE TRANSACTIONS" SPC(6) SPC(P1);: LPRINT USING FORMAT3$; C10#
2940 I40#=C9#: IF I40# < 0# THEN I40# = I40# * -1#
2950 GOSUB 2380
2960 LPRINT SPC(11) "ENDING BALANCE AFTER ABOVE TRANSACTIONS" SPC(12) SPC(P1);: LPRINT USING FORMAT3$;C9#
2970 LPRINT SPC(11) "ACCOUNT NAME (FOR ABOVE DATA) IS " SPC(3) I3$
2980 LPRINT: LPRINT: P3=P3+7: GOSUB 2350: RETURN
2990 ' PRINT A TRANSACTION
3000 LPRINT USING "####";I1;: LPRINT SPC(1);   'ACCT #
3010 LPRINT LEFT$(I7$,2) "/" MID$(I7$,3,2) "/" RIGHT$(I7$,2) SPC(1);   'DATE
3020 IF I2$="C" OR I2$="1" THEN GOTO 3050
3030 F1=LEN(F100$): F1=31-F1
3040 LPRINT F100$ SPC(F1): GOTO 3070
3050 F1=LEN(F90$): F1=31-F1
3060 LPRINT F90$ SPC(F1);
3070 F1=LEN(J1$): F1=11-F1
3080 LPRINT J1$ SPC(F1);    'POSTING REF.
3090 F1=LEN(F6$): F1=6-F1
3100 IF F1=0 THEN LPRINT F6$: GOTO 3120
3110 LPRINT F6$ SPC(F1);    'CHECK #
3120 I40#=I2#: IF I40# < 0# THEN I40#=I40# * -1#
3130 GOSUB 2380
3140 LPRINT SPC(P1);: LPRINT USING FORMAT3$;I2#: RETURN
3150 GOSUB 2680: I8$=""
3160 FOR X = 1 TO LENGTH: I8$=I8$ + CHR$(254): NEXT X
3170 LOCATE ROW,COLUMN
3180 PRINT I8$;
3190 POINTER = 1: A$=" "
3200 WHILE (ASC(A$) <> 13)
3210 A$ = INPUT$(1)
3220 IF (POINTER > LENGTH) AND (ASC(A$) = 13) THEN GOTO 3340
3230 IF (POINTER > LENGTH) AND (ASC(A$) = 8) THEN GOTO 3290
3240 IF (POINTER > LENGTH) THEN BEEP: BEEP: BEEP: GOTO 3340
3250 IF (ASC(A$) >= 32) THEN MID$(I8$,POINTER,1) = A$: POINTER = POINTER +1:  GOTO 3320
3260 IF (POINTER = 1) AND (ASC(A$) = 8) THEN BEEP: BEEP: BEEP: GOTO 3320
3270 IF (ASC(A$) <> 8) THEN GOTO 3310
3280 IF MID$(I8$,POINTER,1) = CHR$(254) THEN
3290    MID$(I8$,POINTER-1,1) = CHR$(254)
3300    POINTER = POINTER -1
3310 IF (ASC(A$) = 13) THEN I8$ = MID$(I8$,1,POINTER-1): POINTER = LENGTH + 1
3320 LOCATE ROW,COLUMN
3330 PRINT I8$
3340 WEND
3350 RETURN
3360 K$=INKEY$
3370 IF K$="" THEN GOTO 3360
3380 RETURN
3390 CLOSE: FOR I = 1 TO 10: LPRINT: NEXT I: RUN "DAILY.BAS": END
3560 LOCATE 13,1
3570 PRINT"ENTER `Y' FOR `YES' OR `N' FOR `NO'."
3580 ROW=13: COLUMN=40: LENGTH=1: GOSUB 3150
3590 IF I8$ = "Y" OR I8$="y" OR I8$ = "N" OR I8$="n" THEN GOTO 3610
3600 GOTO 3580
3610 RETURN
```
{% endraw %}

## CHP12-14.TXT

{% raw %}
```
 
     
                                                                        
                                                                        83
                                   CHAPTER 12
               
                             DAILY MENU  -  OPTION 7
     
     
     
     
     
     WHAT OPTION 7 IS USED FOR.
     
     DAILY Option 7 is used to print a complete  listing  of  your  general 
     ledger accounts. 
          
     As explained in Chapter 3, SETUP Option 1 is used to identify accounts 
     that  are to be included in your general ledger.  While SETUP Option 1 
     is establishing your general ledger,  according to your  instructions, 
     it also automatically adds extra accounts for use at a later time. 
     
          .  The  accounts that you identify to SETUP Option 1 are referred 
             to as "active accounts". 
     
          .  The extra  accounts  that  Option  1  automatically  adds  are 
             referred to as "inactive accounts". 
     

     You may use DAILY Option 7 to print:
     
          .  Active accounts only, or
     
          .  Inactive accounts only, or
     
          .  Both active and inactive accounts.       

     
     A printout from Option 7 will show:
          
          .  For each "active account" the:

             .  Account  classification,  such as Current Assets or Current 
                Liabilities. 
      
             .  Account number.
     
             .  Account title, such as Cash in Bank.
     
             .  Year's opening balance.
     
             .  Cumulative sum of all charges to the account.
         
     
     
                                                                        84
     

          .  For each "inactive account" the:
     
             .  Account classification,  such as Current Assets or  Current 
                Liabilities. 
     
             .  Account number.
     
             .  Words "INACTIVE ACCOUNT".
     
     If  you  want  to  add another account to the general ledger,  get the 
     account number (an inactive account) from a DAILY  Option  7  printout 
     (this  chapter).  Then use that account number in DAILY Option 8 (next 
     chapter). 
     
     Or,  perhaps you will want to use Option  7  to  determine  the  total 
     values  that  have  been  added  to  each of the active general ledger 
     accounts.  As explained above, the printout will list the total values 
     for your review. 
     
     
     OPTION 7 SEQUENCE OF EXECUTION AND AN ILLUSTRATION.
     
     Refer to Chapter 2 for the standard messages and  reminders  that  are 
     part  of  Option  7.  After  the standard messages and reminders,  the 
     following appears on your computer screen: 
            
       WOULD YOU LIKE A BRIEFING ON HOW TO USE THIS PROGRAM TO BE DISPLAYED  
       ON THE COMPUTER SCREEN? (ENTER `Y' FOR `YES' OR `N' FOR `NO').   _
     
     If your response is `Y' the following appears:  (If you  respond  with 
     `N', the briefing is bypassed.) 
               
       THIS COMPUTER PROGRAM PRINTS A CHART OF GENERAL LEDGER ACCOUNTS.  
       YOU WILL BE GIVEN THE OPTIONS OF:
     
        1.  PRINTING ACTIVE ACCOUNTS ONLY, OR
        2.  PRINTING INACTIVE ACCOUNTS ONLY, OR
        3.  PRINTING BOTH ACTIVE AND INACTIVE ACCOUNTS.
     
       (ACTIVE  ACCOUNTS  ARE  ACCOUNTS  THAT  SETUP  OPTION 1 ADDED TO THE 
       GENERAL LEDGER,  IN  ACCORDANCE  WITH  YOUR  INSTRUCTIONS.  INACTIVE 
       ACCOUNTS  ARE  ACCOUNTS  THAT SETUP OPTION 1 AUTOMATICALLY ADDED FOR 
       FUTURE  EXPANSION  OF  ACTIVE  GENERAL  LEDGER  ACCOUNTS.   INACTIVE 
       ACCOUNTS  ARE  IDENTIFIED  IN  THE  PRINTOUT  BY THE WORDS `INACTIVE 
       ACCOUNT'.) 
     
       PRESS ANY KEY TO CONTINUE.
     
     
      
                                                                        85
     

     After you press a key, Option 7 asks for TODAY'S DATE, as explained in 
     Chapter 2 (STANDARD MESSAGES  AND  REMINDERS).  After  you  enter  the 
     date,  Option 7 asks you to enter which accounts you wish to print, as 
     follows: (The assumed input is "3".) 
     
     
     
       SELECT THE OPTION OF YOUR CHOICE.
           ENTER `1' FOR PRINTING ACTIVE ACCOUNTS ONLY, OR
           ENTER `2' FOR PRINTING INACTIVE ACCOUNTS ONLY, OR
           ENTER `3' FOR PRINTING BOTH ACTIVE AND INACTIVE ACCOUNTS.   3
     
     
     
     After making your entry, Option 7 begins printing.
     
     
     ERROR MESSAGES.
     
     There  are  several types of errors that you might make while entering 
     your input into Option 7.  An example is an entry of 13 for  a  month. 
     Another  example  is  a  number  that is not within a range of numbers 
     requested. 
     
     If you make an input error,  Option 7 refuses to  continue  until  you 
     reenter  your  answer.  Instructions will be displayed on the computer 
     screen so that you may determine the correct input. 
     
     
     PRINTED OUTPUT.
     
     The following sample printout assumes that all active and all inactive 
     general  ledger  accounts are to be printed.  For brevity,  only a few 
     accounts are shown in the sample printout. 
     
     
     
                                                                        86
     
     
                                                                     PAGE 1
                                                         RUNDATE   06/16/85
     
                               ABC WHOLESALE, INC.
              CHART OF ACTIVE AND INACTIVE GENERAL LEDGER ACCOUNTS
     
     
    
     ACCOUNT CLASSIFICATIONS                             ACCOUNT    ACCOUNT
           AND TITLES                                    BALANCE    NUMBER
     
     *************************  BALANCE SHEET  ***************************
     CURRENT ASSETS
      INACTIVE ACCOUNT                                              1
      INACTIVE ACCOUNT                                              2
      CASH IN BANK                                      20,847.06       3
        OPENING BALANCE - DEBIT         12,620.10
        OPENING BALANCE - CREDIT              .00
        SUM OF PERIOD DEBITS            20,301.04
        SUM OF PERIOD CREDITS           12,074.08   
      INACTIVE ACCOUNT                                               4
      INACTIVE ACCOUNT                                               5
      INACTIVE ACCOUNT                                               6
      SHORT-TERM INVESTMENTS                             4,500.00       7
        OPENING BALANCE - DEBIT          4,500.00
        OPENING BALANCE - CREDIT              .00
        SUM OF PERIOD DEBITS                  .00
        SUM OF PERIOD CREDITS                 .00
      INACTIVE ACCOUNT                                               8
      INACTIVE ACCOUNT                                               9
      INACTIVE ACCOUNT                                              10
     
     
     
     The printout will continue in a similar manner until all Balance Sheet 
     accounts are printed.  Then, the Income Statement accounts will start. 
     
     
     Practice.
     
     Use Option 7 and your practice general ledger to print all active  and 
     inactive general ledger accounts. 
     
     
                                                                        87
     
                                   CHAPTER 13

                             DAILY MENU  -  OPTION 8
     
     
     
     
     
     WHAT OPTION 8 IS USED FOR.
     
     Use  Option  8  whenever  you  want  to  add an account to the general 
     ledger. 
     
     As explained in Chapter 3, SETUP Option 1 is used to identify accounts 
     that are to be included in your general ledger.  While SETUP Option  1 
     is  establishing your general ledger,  according to your instructions, 
     it also automatically adds extra accounts for use at a later time. 
     
          .  The accounts that you identify to SETUP Option 1 are  referred 
             to as "active accounts". 
     
          .  The  extra  accounts that are automatically added are referred 
             to as "inactive accounts". 
     
     Use the "inactive accounts" if you want to add new  accounts  to  your 
     general   ledger.   Option   8  will  remove  the  "inactive  account" 
     designation and will assign whatever account name that you specify. 
     
     It is important WHERE,  in the general ledger,  that  you  add  a  new 
     account. 

     For example, assume that you want to add the account Sales Returns and 
     Allowances.  Like any other new account,  this account should be added 
     so that it will follow the account to which it is related.  (Sales, in 
     this case.) 

     Another  example  might  be  a  new bank account.  You should add this 
     account immediately after the bank account that is  currently  in  the 
     general ledger.  If there is no related account in the general ledger, 
     add  the  new  account  where  it should normally appear - immediately 
     before accounts receivable, for a bank account. 
     
     The reason for this requirement is related to the logic built into the 
     computer  programs  that  print  the  Balance  Sheet  and  the  Income 
     Statement.  The  logic,  with  certain  exceptions,  assumes  that the 
     accounts are in the order that they should  appear  in  the  financial 
     statements.  
     
     This should not prove to be a problem to you.  Merely use DAILY Option 
     7  to  print  all  active  and inactive accounts.  Use the printout to 
     determine the available  accounts  (those  with  the  words  "Inactive 
     Account") and the account number to be used. 
     
      
     
                                                                        88
     
     
     So that you can see the results,  we used Option 8 to add new accounts 
     to your practice general ledger - account numbers 4,  80, 244, and 254 
     for corporations and account 4 or  partnerships  and  proprietorships. 
     Look at the Unadjusted Trial Balance that you prepared in the Practice 
     section  of  Chapter  7.  Notice that the accounts were added in their 
     logical places for preparation of the financial statements. 
     

     OPTION 8 SEQUENCE OF EXECUTION AND AN ILLUSTRATION.
     
     Refer  to  Chapter  2  for an explanation of the standard messages and 
     reminders that are part of Option 8.  After the standard messages  and 
     reminders, the following will appear on your computer screen: 
     
     
     
       WOULD YOU LIKE A BRIEFING ON HOW TO USE THIS COMPUTER PROGRAM TO BE   
       DISPLAYED ON THE COMPUTER SCREEN?
     
       ENTER `Y' FOR `YES' OR `N' FOR `NO'.    _
     
     
     
     If  you answer `Y',  the following appears:  (If your response is `N', 
     the briefing is bypassed.) 
     
     
     
       THIS COMPUTER PROGRAM IS TO BE USED ONLY FOR ADDING NEW ACCOUNTS  TO 
       THE GENERAL LEDGER.  EACH NEW ACCOUNT MUST ALREADY BE IN THE GENERAL 
       LEDGER  AND  BE  CLASSIFIED  AS  AN  `INACTIVE  ACCOUNT'.   YOU  CAN 
       DETERMINE  WHICH  ACCOUNT  NUMBERS  HAVE  THIS   CLASSIFICATION   BY 
       RETURNING TO THE DAILY MENU, SELECTING OPTION 7, AND SPECIFYING THAT 
       ALL ACCOUNTS BE PRINTED. 
     
       DO YOU WISH TO CONTINUE THIS SESSION?
     
       ENTER `Y' FOR `YES' OR `N' FOR `NO'.    _
     
     
     
     If your answer is `Y', the following appears:  (If you answer `N', you 
     will be returned to the DAILY menu.) 
     
     
                                                                        89
     
     

       THE COMPUTER IS READY TO START ADDING NEW ACCOUNTS  TO  THE  GENERAL 
       LEDGER. 
     
       THREE  INPUTS  ARE  REQUIRED FOR EACH NEW ACCOUNT.  THEY ARE (1) THE 
       ACCOUNT NUMBER, (2) THE ACCOUNT TITLE,  AND (3) A `D' FOR `DEBIT' OR 
       A `C' FOR `CREDIT'. 
     
       ONE LINE ON THE COMPUTER SCREEN IS USED FOR ENTERING (1),  (2),  AND 
       (3) ABOVE. 
     
       CPA-LEDGER AUTOMATICALLY ASSIGNS TO EACH ACCOUNT A BEGINNING BALANCE 
       OF ZERO. 
     
       YOU SHOULD PRESS THE RETURN KEY AFTER ENTERING  EACH  OF  THE  THREE 
       INPUT VALUES. (CAREFULLY NOTE THAT YOU WILL BE REQUIRED TO PRESS THE 
       RETURN  KEY  THREE  TIMES  -  ONE  TIME  FOR EACH OF THE THREE INPUT 
       VALUES.) 
     
       ERROR MESSAGES WILL APPEAR AT THE TOP OF THE  COMPUTER  SCREEN.  THE 
       ERROR MESSAGES ARE SELF EXPLANATORY. 
     
       PRESS ANY KEY TO CONTINUE. 
     
     
     
     After  you  press a key,  Option 8 starts asking for information about 
     the accounts that you wish to add to the general ledger. 
     
     In the illustration to follow, we will assume that two accounts are to 
     be added.  Details are: 
     
          .  OFFICE SALARIES EXPENSE is to be added to the Income Statement 
             accounts.  Reference to an Option 7 printout shows that  SALES 
             SALARY  EXPENSE  is  currently  in  the  general ledger,  with 
             account number 207.  The printout shows  that  account  number 
             208 is an INACTIVE ACCOUNT.  We will assign account number 208 
             to OFFICE SALARIES EXPENSE, a debit balance account. 
     
          .  OFFICE  SUPPLIES is to be added to the Balance Sheet accounts, 
             as a CURRENT ASSET.  We decide to add this account immediately 
             after MERCHANDISE INVENTORY which is presently in the  general 
             ledger  with  account  number  19.  Account  number  20  is an 
             inactive account.  We will assign account number 21 to  OFFICE 
             SUPPLIES, a debit balance account. 
     
     The Option 8 display and the assumed input, explained above, are: 
     
           
                                                                        90
     

       ENTER DATA FOR YOUR NEW ACCOUNTS BELOW.  ALWAYS REMEMBER THAT:
        1.  EACH  NEW  ACCOUNT  REQUIRES  T-H-R-E-E INPUTS (ACCOUNT NUMBER; 
            ACCOUNT TITLE; AND A `D' FOR A `DEBIT' OR `C' FOR A `CREDIT'.) 
        2.  YOU MUST PRESS THE RETURN KEY AFTER E-A-C-H OF THE THREE  ABOVE 
            INPUTS. 
        3.  CPA-LEDGER   AUTOMATICALLY   ASSIGNS  ZERO  AS  THE  ACCOUNT'S 
            BEGINNING BALANCE. 
        4.  ALL MESSAGES WILL APPEAR IN THE  UPPER  PART  OF  THE  COMPUTER 
            SCREEN. 
        5.  NEW  ACCOUNTS  REJECTED IN THEIR ENTIRETY ARE TO REENTERED.
        6.  ENTER `Q` (FOR QUIT) FOR THE ACCT. NBR. AFTER ALL NEW ACCOUNTS 
            ARE ENTERED. 
        7.  YOUR COMPUTER'S CAPS-LOCK KEY MUST BE `ON'.
     **********************************************************************
     
               ACCOUNT                                       D=DEBIT
               NUMBER      ACCOUNT TITLE                     C=CREDIT
     
                208        OFFICE SALARIES EXPENSE              D
                21         OFFICE SUPPLIES                      D
                Q
     
     Each time you add a new account,  the  system  asks  you  if  the  new 
     account  is for accounts receivable,  beginning merchandise inventory, 
     retained  earnings  for  corporations  or  the  capital  account   for 
     partnerships and proprietorships (unless these accounts are already in 
     the general ledger), or for a new bank account. 
     
     After entering `Q', the following appears:
     
       YOUR  INPUT  WILL  BE DISPLAYED ON THE SCREEN SO THAT YOU MAY VERIFY 
       IT.  CAREFULLY NOTE ANY ERRORS SO THAT INCORRECT DATA  WILL  NOT  BE 
       POSTED TO THE ACCOUNTS. 
     
       PRESS ANY KEY TO CONTINUE.
     
               
     After pressing a key, you will see this:
          
       YOUR DEBIT ENTRIES (WITH ACCOUNT TITLES) APPEAR BELOW.
     
       THE LIST OF DEBIT ENTRIES IS COMPLETE.  NOTE ANY INPUT ERRORS.
     
       PRESS ANY KEY TO CONTINUE.
     
     
        ACCOUNT                                             ACCOUNT
        NUMBER     ACCOUNT TITLE                            BALANCE
     
         208       OFFICE SALARIES EXPENSE                      .00
          21       OFFICE SUPPLIES                              .00
     
     
      
                                                                        91
     

     After  you press a key,  a screen similar to the above will appear for 
     any credit accounts.  For this  illustration,  the  following  wording 
     would appear where the account information is normally displayed: 
     
     
     
       **** THERE WERE NO NEW ACCOUNTS WITH CREDITS. *****
     
     
     
     This  control  is  provided to help you detect any input errors.  (You 
     might inform Option 8  that  an  account  has  a  debit  balance,  for 
     example, when you intended to signify that it has a credit balance.) 
     
     Continuing with the illustration, the following is next to appear: 
     
     
     
       DO  YOU  DESIRE  TO  ADD TO THE GENERAL LEDGER THE ACCOUNTS THAT YOU 
       JUST REVIEWED? 
     
       ENTER `Y' FOR `YES' OR `N' FOR `NO'.    _
     
     
     
     If you answer `Y',  the new account(s) will be added  to  the  general 
     ledger.  If you answer `N',  they will not be added.  In either of the 
     two events, the following is next to appear on your screen: 
     
     
     
       DO YOU DESIRE TO ADD MORE NEW ACCOUNTS TO THE GENERAL LEDGER?
       ENTER `Y' FOR `YES' OR `N' FOR `NO'.   _
     
     
     
     If you answer `Y',  Option 8  starts  again  and  asks  you  to  enter 
     information  about  the  new  accounts,  as already explained.  If you 
     answer `N', you will be returned to the DAILY menu. 
     
     
     ERROR MESSAGES. 
     
     Option 8 monitors your input to help ensure that you  do  not  make  a 
     mistake.  If  you  make  a  mistake and if instructions explaining the 
     required input are already on the computer screen, Option 8 refuses to 
     continue until you reenter your answer. 
     
     In other cases,  however,  you will need more detailed instructions on 
     what you did wrong and how you should proceed.  These cases are: 
                                                              
      
     
                                                                        92
     

       AN ACTIVE ACCOUNT NUMBER IS ENTERED.
     
       For  this  error,  Option  8  displays  the  following  message  and 
       question: 
     
         YOU  SELECTED  AN  ACTIVE ACCOUNT FOR POSTING.  THE ACCOUNT NUMBER 
         THAT YOU SELECTED IS NUMBER  (a  number  is  shown).  NEW  GENERAL 
         LEDGER  ACCOUNTS  MUST  COME  FROM  INACTIVE  ACCOUNTS.   INACTIVE 
         ACCOUNTS CAN BE IDENTIFIED BY SELECTING  OPTION  7  OF  THE  DAILY 
         MENU.  DO YOU WISH TO RETURN TO THE DAILY MENU? 
     
         ENTER `Y' FOR `YES' OR `N' FOR `NO'.   _
     
       If  you  answer  `Y',  none  of the current accounts that you are in 
       process of entering will be added to the general ledger and you will 
       be returned to the DAILY menu. 
     
       If you answer `N',  Option 8 will resume at the point where you made 
       the input error. 
     
     
       A NON-EXISTENT ACCOUNT NUMBER IS ENTERED. 
     
       This error causes the following message to be displayed: 
     
       YOUR INPUT FOR THE ACCOUNT NUMBER IS TOO LARGE.  THE LARGEST ACCOUNT 
       NUMBER  IN  THE  GENERAL LEDGER IS (a number is shown).  IF DESIRED, 
       YOU CAN DETERMINE THE ACCOUNT  NUMBERS  IN  THE  GENERAL  LEDGER  BY 
       SELECTING  OPTION  7  OF  THE  DAILY  MENU  AND  SPECIFYING THAT ALL 
       ACCOUNTS BE PRINTED. 
     
       PRESS ANY KEY TO CONTINUE. 
     
       After you press a key,  Option 8 continues where you made the  input 
       error. 
     
     
       AN ACCOUNT NUMBER IS ENTERED A SECOND TIME. 
     
       For this error, Option 8 displays: 
     
     
                                                                        93
     
     

       THE  ACCOUNT  NUMBER  (a  number  is  shown)  THAT  YOU SELECTED WAS 
       ASSIGNED AN OPENING BALANCE DURING THIS OR A PREVIOUS SESSION.  ONLY 
       INACTIVE ACCOUNT NUMBERS MAY BE SPECIFIED IN THIS COMPUTER  PROGRAM. 
       YOU  MAY  DETERMINE  WHICH ACCOUNTS ARE INACTIVE BY RETURNING TO THE 
       DAILY MENU AND SELECTING OPTION 7.  DO YOU WISH  TO  RETURN  TO  THE 
       DAILY MENU? 
     
       ENTER `Y' FOR `YES' OR `N' FOR `NO'.   _
     
       If  you enter `Y',  none of the new accounts currently being entered 
       will be added to the general ledger and you will be returned to  the 
       DAILY  menu.  If you enter `N',  Option 8 resumes at the point where 
       you made the input error. 
     
     
     PRINTED OUTPUT. 
     
     
     Using the illustration,  above,  the Option 8 printout would look like 
     this: 
     
     
     
                                                                   PAGE  1
                                                        RUNDATE   06/15/85
     
                               ABC WHOLESALE, INC.
                    NEW ACCOUNTS ADDED TO THE GENERAL LEDGER
     
     ACCOUNT                                           BEGINNING BALANCE
     NUMBER      ACCOUNT TITLE                      DEBIT            CREDIT
     
      208        OFFICE SALARIES EXPENSE              .00
       21        OFFICE SUPPLIES                      .00
     
     
     
     Practice.
     
     Use  Option 8 and your practice general ledger to add two new accounts 
     to the general ledger.  Use the same account titles  as  used  in  the 
     above  illustration  (OFFICE  SALARIES  EXPENSE  and OFFICE SUPPLIES). 
     Determine the account numbers that you should use by  referring  to  a 
     printout from DAILY Option 7. 
     
     
                                                                        94
     
                                  CHAPTER 14

                            DAILY MENU  -  OPTION 9
     

     WHAT OPTION 9 IS USED FOR.
     
     Use  Option  9  at  the  end  of the year,  after all formal financial 
     statements have been prepared.  The information shown in the  printout 
     is  used  as  a  guide  in  identifying asset,  liability,  and equity 
     accounts that are to be included in the new  general  ledger  for  the 
     coming year, if you use Options 1, 2, and 3 of the SETUP menu. 
     
     Account  titles  and  dollar values shown in an Option 9 printout will 
     agree,  exactly,  with account titles and dollar amounts shown on  the 
     Balance Sheet. 
     
     As mentioned above,  the Option 9 printout is used as a guide for  the 
     Balance  Sheet accounts that should be in the new general ledger.  Use 
     the Income Statement as a  guide  for  the  remaining  general  ledger 
     accounts.  If you use Option 4 of the SETUP menu,  CPA-LEDGER does all 
     of this for you, automatically. (See Chapter 16.) 
     
     Note that the Option 9 printout and the Income Statement are  used  as 
     GUIDES  in  deciding  on  accounts  to  be included in the new general 
     ledger.  Determining the accounts is a crucial step. 
     
     Carefully consider your  past  and  anticipated  business  operations.  
     Carefully  identify  every  account  that  might  be needed.  Refer to 
     Appendix D for additional detail. 
     
     IN CASE OF DOUBT, INCLUDE THE ACCOUNT.  It can be annoying,  after the 
     accounting year has started, to have to constantly add new accounts to 
     the  general  ledger.  Remember  this  when  deciding  whether  to use 
     Options 1,  2,  and 3 of the SETUP menu or Option 4 of the SETUP menu. 
     (Option 4 allows for NO new accounts, active or inactive.) 
          
     OPTION 9 SEQUENCE OF EXECUTION. 
     
     Refer  to  the  standard  messages and reminders that are discussed in 
     Chapter 2.  After the standard messages and reminders, Option 9 begins 
     printing the account balances.  The format of the printout is the same 
     as for an unadjusted trial balance, as shown in Chapter 7. 
            
     ERROR MESSAGES.
     
     As mentioned above,  Option 9 is used AFTER the Income  Statement  and 
     the Balance Sheet have been prepared at the end of the year. 
     
     If  you  attempt  to  use  Option  9  before  these two statements are 
     prepared (by using DAILY Option 3),  the following message will appear 
     on your computer screen: 
     
     
      
                                                                        95
     

       YOU  HAVE  EITHER  (1)  NOT  YET  USED OPTION 3 OF THE DAILY MENU TO 
       PREPARE AN INCOME STATEMENT AND A BALANCE  SHEET  OR  (2)  YOU  USED 
       DAILY  OPTION  1  SINCE  YOU LAST USED OPTION 3.  YOU MUST USE DAILY 
       MENU OPTION 3 BEFORE  THE  CURRENTLY  REQUESTED  POST-CLOSING  TRIAL 
       BALANCE WILL BE PREPARED. 
     
     
     After pressing a key, you will be returned to the DAILY menu. 
     
     
     Practice. 
     
     Use  Option 9 and your practice general ledger to print a post-closing 
     trial balance.  Remember,  before Option 9  will  execute,  an  Income 
     Statement  and  a  Balance Sheet (DAILY Option 3) must be printed.  If 
     you see the error message mentioned above when  you  select  Option  9 
     from  the  DAILY menu,  execute Option 3 (Chapter 8) and then Option 9 
     (this Chapter). 
     
   



































```
{% endraw %}

## DAILY.BAS

{% raw %}
```bas
100 'COPYRIGHT 1986 TRONOLONE & FOSTER, PC
500 ON ERROR GOTO 10000
600 GOSUB 15000
1000 CLEAR: KEY OFF: CLS: CLOSE
1010 LOCATE 3,1: PRINT SPC(35) "CPA-LEDGER"
1020 LOCATE 5,1: PRINT SPC(35) "DAILY MENU": LOCATE 8,1
1030 PRINT"SELECT ONE OF THE OPTION NUMBERS BELOW.": PRINT
1040 PRINT"  1. ENTER NEW TRANSACTIONS IN THE GENERAL LEDGER."
1050 PRINT"  2. PRINT AN UNADJUSTED TRIAL BALANCE."
1060 PRINT"  3. PRINT AN INCOME STATEMENT.
1070 PRINT"  4. PRINT TRANSACTIONS THAT HAVE BEEN POSTED TO THE GENERAL LEDGER.
1080 PRINT"  5. PRINT GENERAL LEDGER ACCOUNTS WITH DETAILS OF ALL DEBITS AND ALL CREDITS."
1090 PRINT"  6. PRINT BANK DEPOSITS AND CHECKS WRITTEN (CHECK REGISTER)."
1100 PRINT"  7. PRINT GENERAL LEDGER ACCOUNTS AND THEIR BALANCES."
1110 PRINT"  8. ADD NEW ACCOUNTS TO THE GENERAL LEDGER."
1120 PRINT"  9. PRINT A POST-CLOSING TRIAL BALANCE.
1130 PRINT" 10. STOP ALL CPA-LEDGER PROCESSING AND RETURN CONTROL TO PC-DOS."
1132 GOSUB 9000
1140 LOCATE 21,1: PRINT"WHICH OPTION NUMBER DO YOU SELECT?";: GOSUB 1390: ROW=21: COLUMN=37: LENGTH=2: GOSUB 1400
1150 F1=0:FOR I = 1 TO LEN(I8$)
1152 IF MID$(I8$,I,1) < "0" OR MID$(I8$,I,1) > "9" THEN F1=1
1154 NEXT I
1160 IF F1 = 0 AND VAL(I8$) => 1 AND VAL(I8$) =< 10 THEN GOTO 1210
1170 LOCATE 22,1: PRINT"ENTRY IS INCORRECT. TRY AGAIN. PRESS ANY KEY TO CONTINUE.": GOSUB 1390
1180 K$=INKEY$
1190 IF K$="" THEN GOTO 1180
1200 LOCATE 22,1: PRINT SPACE$(80): GOTO 1140
1210 IF I8$="10" THEN CLS: SYSTEM
1220 CLS: LOCATE 10,1: PRINT"ADJUST THE PAPER IN YOUR PRINTER SO THAT THE PAPER IS AT TOP-OF-PAGE.": PRINT
1230 PRINT"THE PAPER WILL BE AT TOP-OF-PAGE WHEN THE PRINTER WILL PRINT ON THE VERY FIRST"
1240 PRINT"LINE AT THE TOP OF THE PAGE.": PRINT
1270 PRINT"PRESS ANY KEY WHEN YOU ARE READY TO CONTINUE.": GOSUB 1390
1280 K$=INKEY$
1290 IF K$="" THEN GOTO 1280
1300 IF I8$="1" THEN GOSUB 1610: RUN "POST.BAS": END
1310 IF I8$="2" THEN GOSUB 1610: RUN "TRIBAL.BAS": END
1320 IF I8$="3" THEN GOSUB 1610: RUN "PANDL.BAS": END
1330 IF I8$="4" THEN GOSUB 1610: RUN "SELTRA.BAS": END
1340 IF I8$="5" THEN GOSUB 1610: RUN "ACTDTL.BAS": END
1350 IF I8$="6" THEN GOSUB 1610: RUN "CHKREG.BAS": END
1360 IF I8$="7" THEN GOSUB 1610: RUN "GLACTS.BAS": END
1370 IF I8$="8" THEN GOSUB 1610: RUN "NEWACT.BAS": END
1380 IF I8$="9" THEN GOSUB 1610: RUN "PSTCLS.BAS": END
1382 CLS: LOCATE 10,1:
1384 PRINT"THIS PROGRAM HAD BEEN MODIFIED IMPROPERLY.  CHECK KEYS FOR RUN STATEMENTS.": END
1390 DEF SEG=0: POKE 1050, PEEK(1052): RETURN
1400 I8$=""
1410 FOR X = 1 TO LENGTH: I8$=I8$ + CHR$(254): NEXT X
1420 LOCATE ROW,COLUMN
1430 PRINT I8$;
1440 POINTER = 1: A$=" "
1450 WHILE (ASC(A$) <> 13)
1460 A$ = INPUT$(1)
1470 IF (POINTER > LENGTH) AND (ASC(A$) = 13) THEN GOTO 1590
1480 IF (POINTER > LENGTH) AND (ASC(A$) = 8) THEN GOTO 1540
1490 IF (POINTER > LENGTH) THEN BEEP: BEEP: BEEP: GOTO 1590
1500 IF (ASC(A$) >= 32) THEN MID$(I8$,POINTER,1) = A$: POINTER = POINTER +1:  GOTO 1570
1510 IF (POINTER = 1) AND (ASC(A$) = 8) THEN BEEP: BEEP: BEEP: GOTO 1570
1520 IF (ASC(A$) <> 8) THEN GOTO 1560
1530 IF MID$(I8$,POINTER,1) = CHR$(254) THEN
1540    MID$(I8$,POINTER-1,1) = CHR$(254)
1550    POINTER = POINTER -1
1560 IF (ASC(A$) = 13) THEN I8$ = MID$(I8$,1,POINTER-1): POINTER = LENGTH + 1
1570 LOCATE ROW,COLUMN
1580 PRINT I8$
1590 WEND
1600 RETURN
1610 CLS: LOCATE 10,31: PRINT"PLEASE STAND BY.": RETURN
9000 LOCATE 23,1: PRINT"(C) COPYRIGHT 1986 TRONOLONE & FOSTER, PC
9002 LOCATE 1,1: PRINT"ASSISTANCE?"
9004 LOCATE 2,4: PRINT"WRITE"
9006 LOCATE 3,1: PRINT"JIM FOSTER"
9008 LOCATE 4,1: PRINT"8529 GREELEY BLVD."
9010 LOCATE 5,1: PRINT"SPRINGFIELD, VIRGINIA  22152"
9020 LOCATE 2,70: PRINT"CALL"
9030 LOCATE 3,67: PRINT"JIM FOSTER"
9040 LOCATE 4,65: PRINT"(703) 569-2254"
9050 LOCATE 5,65: PRINT"AFTER 7:30 PM"
9060 LOCATE 6,67: PRINT"OR ANYTIME"
9070 LOCATE 7,67: PRINT" WEEKENDS."
9100 LOCATE 1,67: PRINT"ASSISTANCE?"
9200 LOCATE 2,70: PRINT"CALL"
9300 LOCATE 3,67: PRINT"JIM FOSTER"
9400 LOCATE 4,65: PRINT"(703) 569-2254"
9500 LOCATE 5,65: PRINT"AFTER 7:30 PM"
9600 LOCATE 6,67: PRINT"OR ANYTIME"
9700 LOCATE 7,67: PRINT" WEEKENDS."
9800 RETURN
10000 IF ERR=53 THEN GOTO 10030
10020 ON ERROR GOTO 0
10030 CLS: LOCATE 10,1
10040 PRINT"NO. YOU CANNOT USE THE DAILY MENU UNTIL YOU HAVE STARTED YOUR GENERAL LEDGER."
10050 PRINT"USE THE SETUP MENU FOR THAT PURPOSE.  SEE YOUR USER'S MANUAL, BEGINNING ON"
10060 PRINT"PAGES 6 AND 19. PRESS ANY KEY FOR THE SETUP MENU.": GOSUB 20000
10070 RUN "SETUP.BAS": END
15000 OPEN "PASACT.FIL" FOR INPUT AS #1
15010 INPUT #1,F1: INPUT #1,F1
15020 IF F1 <> 30000 THEN GOTO 18000
15030 CLS: LOCATE 10,1
15040 PRINT"NO. YOU HAVE NOT USED OPTION 2 OF THE SETUP MENU.  YOU MUST USE OPTION 2 OF
15050 PRINT"THAT MENU BEFORE YOU USE ANY OPTION OF THE DAILY MENU.  SEE YOUR USER'S MANUAL"
15060 PRINT"BEGINING ON PAGES 7 & 27-1.  PRESS ANY KEY FOR THE SETUP MENU.": GOSUB 20000: RUN "SETUP.BAS": END
18000 RETURN
20000 K$=INKEY$
20010 IF K$="" THEN GOTO 20000
20020 RETURN
```
{% endraw %}

## GENLGR.BAS

{% raw %}
```bas
500  ' COPYRIGHT 1986 TRONOLONE & FOSTER, PC
1000 REM GENLGR.BAS
1010 CLEAR: ON ERROR GOTO 3110
1020 CLS: LOCATE 1,1
1030 PRINT"THIS PROGRAM IS TO BE USED FOR ESTABLISHING A NEW GENERAL LEDGER.  IT SHOULD BE"
1040 PRINT"USED AT THE BEGINNING OF EACH YEAR.  BEFORE YOU USE THIS PROGRAM, MAKE SURE"
1050 PRINT"THAT LAST YEAR'S DATA FILES HAVE BEEN COPIED TO DISKETTE.  CPA-LEDGER WILL"
1060 PRINT"COMPLETELY ERASE ANY DATA FILES THAT ARE NOW ON HARD DISK.": PRINT
1070 PRINT"AFTER THIS PROGRAM HAS COMPLETED ITS PROCESSING, A LISTING OF ALL AVAILABLE"
1080 PRINT"ACCOUNTS (THE ONES THAT YOU ENTER) WILL BE PRINTED ON THE PRINTER.  REVIEW THE"
1090 PRINT"PRINTOUT VERY CAREFULLY AND NOTE ANY ERRORS, SUCH AS MISSPELLED ACCOUNT TITLES"
1100 PRINT"OR INCORRECT DESIGNATIONS AS TO WHETHER AN ACCOUNT HAS A NORMAL DEBIT OR"
1110 PRINT"NORMAL CREDIT BALANCE.  IF YOU NOTE ANY ERRORS, RERUN THIS COMPUTER PROGRAM BY"
1120 PRINT"SELECTING OPTION 1 AGAIN FROM THE SETUP MENU.  IT IS VERY IMPORTANT THAT YOUR"
1130 PRINT"PRINTOUT BE ERROR FREE BECAUSE THERE IS NO OTHER PROVISION FOR CORRECTING YOUR"
1140 PRINT"MISTAKES.": PRINT
1150 PRINT"THIS VERSION OF CPA-LEDGER IS FOR CORPORATIONS.  ALSO, THIS SHOULD BE THE FIRST"
1160 PRINT"CPA-LEDGER COMPUTER PROGRAM THAT YOU USE EACH ACCOUNTING YEAR.  ONCE YOUR"
1170 PRINT"GENERAL LEDGER IS ESTABLISHED AND YOU AGREE WITH THE PRINTED OUTPUT, THIS"
1180 PRINT"PROGRAM SHOULD NOT BE USED AGAIN UNTIL THE BEGINNING OF THE NEXT ACCOUNTING"
1190 PRINT"YEAR.  DO YOU WISH TO ESTABLISH A NEW GENERAL LEDGER?": C5=22: GOSUB 2560
1200 IF I8$="N" OR I8$="n" THEN GOTO 5000 ELSE CLS: LOCATE 10,36: PRINT "STAND BY.": OPEN "PASACT.FIL" FOR OUTPUT AS  #1: CLOSE: KILL "*.FIL"
1210 CLS: LOCATE 10,1: PRINT"ENTER YOUR BUSINESS NAME. ";: ROW=10: COLUMN=44: LENGTH=30: GOSUB 2900
1220 IF LEFT$(I8$,1) < "A" OR LEFT$(I8$,1) > "Z" THEN GOTO 1210
1230 T1$=I8$
1240 DATA BALANCE SHEET,INCOME STATEMENT
1250 DATA CURRENT ASSETS,1,1
1260 DATA INVESTMENTS AND FUNDS,1,2
1270 DATA OPERATIONAL ASSETS,1,3
1280 DATA INTANGIBLE ASSETS,1,4
1290 DATA OTHER ASSETS,1,5
1300 DATA DEFERRED CHARGES,1,6
1310 DATA CURRENT LIABILITIES,2,7
1320 DATA LONG-TERM LIABILITIES,2,8
1330 DATA CONTRIBUTED CAPITAL,3,9
1340 DATA OTHER CONTRIBUTED CAPITAL,4,10
1350 DATA RETAINED EARNINGS,5,11
1360 DATA ALL OTHER EQUITY,6,12
1370 DATA SALES,7,1
1380 DATA PURCHASES,8,2
1390 DATA OPERATING EXPENSES,9,3
1400 DATA OTHER REVENUES AND GAINS,10,4
1410 DATA OTHER EXPENSES AND LOSSES,11,5
1420 DATA EXTRAORDINARY GAINS,12,6
1430 DATA EXTRAORDINARY LOSSES,13,7
1440 DATA INCOME TAX EXPENSE,14,8
1450 B2=36: B3=24: B4=36: E1=2:
1460 DIM B(20) 'QTY OF ACCT CLASSI - CHG AS REQUIRED
1470 DIM A1$(2): DIM A2$(B2): DIM A3$(B3)
1480 CLS: LOCATE 10,16
1490 PRINT"STAND BY.  YOUR DATA FILES ARE BEING INITIALIZED."
1500  GOSUB 2190: CLS
1510 GOSUB 2890: LOCATE 10,1: PRINT"ENTER TODAY'S DATE (USE FORMAT MMDDYY. I.E., JUNE 8, 1984 = 060884).";: ROW=10: COLUMN=72: LENGTH=6: GOSUB 2900
1520 GOSUB 2680
1530 IF F1=1 OR I8$ < "0" OR I8$="" OR LEN(I8$) < 6 THEN CLS: GOTO 1510
1540 CLS: I1$=I8$
1550 FOR I=1 TO 2
1560 LOCATE 8,1
1570 PRINT"THE FOLLOWING QUESTIONS PERTAIN TO THE ";A1$(I);"."
1580 IF I=2 THEN B2=B3
1590 FOR J=1 TO B2
1600 GOSUB 2270
1610 IF PF=1 THEN PF=0: LOCATE 15,1: PRINT SPACE$(80): LOCATE 16,1: PRINT SPACE$(80)
1620 IF I2$="PURCHASES" THEN PF=1: LOCATE 15,1: PRINT"IF YOU DO NOT WISH TO HAVE A COST OF GOODS SOLD SECTION ON YOUR INCOME STATE-"
1630 IF I2$="PURCHASES" THEN LOCATE 16,1: PRINT"MENT, ENTER 0 (ZERO).  SEE THE USER'S MANUAL FOR DETAILS."
1640 LOCATE 10,1: PRINT SPACE$(80): LOCATE 10,1: PRINT"HOW MANY `";I2$;"' ACCOUNTS DO YOU WISH TO CREATE? ";
1650 GOSUB 2890: ROW=10: COLUMN=70: LENGTH=2: GOSUB 2900
1660 GOSUB 2510  'CHK NUM
1670 IF F1=1 OR I8$ < "0" THEN GOTO 1650
1680 I1=VAL(I8$): C1=I1
1690 IF I2$="RETAINED EARNINGS" AND I1 < 1 THEN LOCATE 15,1: PRINT"AT LEAST ONE RETAINED EARNINGS ACCOUNT IS REQUIRED.": GOTO 1650
1700 IF I2$="SALES" AND I1 < 1 THEN LOCATE 15,1: PRINT"AT LEAST ONE SALES/REVENUE ACCOUNT IS REQUIRED.": GOTO 1650
1710 IF I2$="OPERATING EXPENSES" AND I1 < 1 THEN LOCATE 15,1: PRINT"AT LEAST ONE OPERATING EXPENSE ACCOUNT IS REQUIRED.": GOTO 1650
1720 IF I2$="OPERATING EXPENSES" AND C1 > 0 THEN SEXP = C2+1: FEXP=C2+6: GOTO 1740
1730 IF I2$="SALES" AND C1 > 0 THEN SSALES = C2+1: FSALES=(((C1*4)+2)+C2)
1740 IF I1 > 0 THEN CLS: GOTO 1780
1750 ' WRITE EXTRA ACCTS FOR CLASSI WITH NO ACTIVE ACCTS
1760 FOR K = 1 TO 6: I3$="INACTIVE ACCOUNT": I4$=" ": I5$="0": GOSUB 2310: NEXT K: F20=F20+1: B(F20)=6: GOTO 1950
1770 ' B( = NBR ACCTS WRITTEN FOR CLASSI WITH ACTIVE ACCTS.
1780 F20=F20+1: B(F20)=((C1*4)+2)  ' C1=ACTIVE ACCTS,C1*X=ACTIVE ACCTS + INACTIVE ACCTS FOR EACH ACTIVE ACCT, +Y=QTY INACTIVE ACCTS ADDED AT BEGINNING OF EACH CLASSIFICATION. C1*X+Y=TOT ACCTS IN A CLASSIFICATION
1790 FOR K = 1 TO C1  'C1=QTY ACTIVE ACCTS REQUESTED
1800 IF K > 1 THEN GOTO 1822
1810 ' ADD INACTIVE ACCTS AT START OF CLASSIFICATION
1820 FOR W = 1 TO 2: I3$="INACTIVE ACCOUNT": I4$=" ": I5$="0": GOSUB 2310: NEXT W
1822 CLS: LOCATE 5,23: PRINT"YOUR Caps-Lock KEY SHOULD BE `ON'.
1830 LOCATE 10,1: PRINT"ENTER THE TITLE OF `";I2$;"' ACCOUNT NUMBER ";K;" OF ";I1; " BELOW."
1840 GOSUB 2890: ROW=12: COLUMN=25: LENGTH=30: GOSUB 2900: I3$=I8$
1850 IF LEFT$(I3$,1) < "A" OR LEFT$(I3$,1) > "Z" THEN GOTO 1840
1860 LOCATE 15,1: PRINT"ENTER  `D'  FOR  `DEBIT' BALANCE OR A  `C'  FOR  `CREDIT' BALANCE.";
1870 GOSUB 2890: ROW=15: COLUMN=75: LENGTH=1: GOSUB 2900: I4$=I8$
1880 IF I4$="D" OR I4$="C" THEN GOTO 1900
1890 GOTO 1870
1900 CLS: GOSUB 2430
1910 IF F1=1 THEN F1=0: GOTO 1822
1920 I5$="1": GOSUB 2310
1930 FOR W = 1 TO 3: I3$="INACTIVE ACCOUNT": I4$=" ": I5$="0": GOSUB 2310: NEXT W
1940 NEXT K
1950 NEXT J
1960 NEXT I
1970 'PRINT GENERAL LEDGER CHART OF ACCOUNTS ON THE PRINTER.
1980 B2=B4: C2=0: F20=0: CLS: LOCATE 10,36: PRINT"STAND BY.": LOCATE 12,36: PRINT "PRINTING."
1990 GOSUB 2740  'PRINT PAGE HEADINGS
2000 FOR I = 1 TO 2  'PRINT IDENTITY OF FINANCIAL STATEMENT
2010 IF C3 > 57 THEN B5=66-C3: GOSUB 2860: GOSUB 2740
2020 IF I=2 THEN LPRINT: C3=C3+1
2030 C3=C3+1
2040 LPRINT STRING$(27,"*");A1$(I);" ACCOUNTS";STRING$(27,"*"): IF I=2 THEN B2=B3
2050 FOR J=1 TO B2  'PRINT ACCT CLASSI (I.E., CURRENT ASSETS)
2060 C3=C3+2
2070 IF C3 > 57 THEN B5=66-C3: GOSUB 2860: GOSUB 2740
2080 GOSUB 2270: LPRINT: LPRINT I2$
2090 F20=F20+1: C1=B(F20)
2100 FOR K=1 TO C1  'PRINT THE ACCOUNT
2110 C2=C2+1: GET #1,C2: LASTACTNO=C2: I5$=X4$: IF I5$ <> "1" THEN GOTO 2140
2120 GOSUB 2370: C3=C3+1: IF C3 < 60 THEN GOTO 2140
2130 B5=66-C3: GOSUB 2860: GOSUB 2740
2140 NEXT K: NEXT J: NEXT I
2150 CLOSE
2160 OPEN "PASACT.FIL" FOR OUTPUT AS #2
2170 FRMCHK=30000: WRITE #2,LASTACTNO,FRMCHK
2180 GOTO 3170   'EOF
2190 OPEN "TEST1.FIL" FOR OUTPUT AS #3: CLOSE #3
2200 OPEN "R",1,"GENLEG.FIL",111
2210 FIELD #1,25 AS X1$,30 AS X2$,6 AS X3$,1 AS X4$,4 AS X5$,2 AS X7$,1 AS X8$,10 AS X9$,8 AS Y1$,8 AS Y2$,8 AS Y3$,8 AS Y4$
2220 OPEN "GENJNL.FIL" FOR OUTPUT AS #2
2230 FOR I = 1 TO 2: READ I9$: A1$(I)=I9$: NEXT I
2240 FOR I = 1 TO B2: READ I9$: A2$(I)=I9$: NEXT I
2250 FOR I = 1 TO B3: READ I9$: A3$(I)=I9$: NEXT I
2260 RETURN
2270 IF I=2 THEN GOTO 2290
2280 I2$=A2$(J): J=J+1: I8$=A2$(J): J=J+1: I9$=A2$(J): GOTO 2300
2290 I2$=A3$(J): J=J+1: I8$=A3$(J): J=J+1: I9$=A3$(J)
2300 I6$=I8$: I7$=I9$: RETURN
2310 LSET X1$=I2$: LSET X2$=I3$: LSET X3$=I1$: LSET X4$=I5$
2320 C2=C2+1
2330 LSET X5$=MKS$(C2): LSET X6$=I6$: LSET X7$=I7$: LSET X8$=I4$
2340 T2$="               ": LSET X9$=T2$
2350 LSET Y1$=MKD$(0#): LSET Y2$=MKD$(0#): LSET Y3$=MKD$(0#): LSET Y4$=MKD$(0#)
2360 PUT #1,C2: RETURN
2370 I2$=X1$: I3$=X2$: I4$=X8$: LPRINT"  ";I3$;: LPRINT"  ";
2390 IF I4$="D" THEN I4$="DEBIT " ELSE I4$="CREDIT"
2400 LPRINT"  NORMAL BAL. = ";I4$;"   ACCOUNT NBR. = ";CVS(X5$): GOTO 2420
2420 RETURN
2430 F1=0: CLS: LOCATE 10,1
2440 PRINT"VERIFY YOUR INPUT BEFORE THIS ACCOUNT IS OPENED.": PRINT
2450 PRINT"   THE ACCOUNT TITLE IS        ";I3$
2460 IF I4$="D" THEN I10$="DEBIT" ELSE I10$="CREDIT"
2470 PRINT"   THE ACCOUNT BALANCE IS      ";I4$;"   (WHICH SIGNIFIES `";I10$;"')": PRINT
2480 PRINT"ARE   B-O-T-H   CORRECT?": C5=16: GOSUB 2560
2490 IF I8$="N" OR I8$="n" THEN F1=1
2500 CLS: RETURN
2510 F1=0
2520 FOR N = 1 TO LEN(I8$)
2530 IF MID$(I8$,N,1) < "0" OR MID$(I8$,N,1) > "9" THEN F1=1
2540 NEXT N
2550 RETURN
2560 LOCATE C5,1: PRINT"ENTER `Y' FOR `YES' OR `N' FOR `NO.'";
2570 GOSUB 2890: ROW=C5: COLUMN=40: LENGTH=1: GOSUB 2900
2580 IF I8$="Y" OR I8$="y" OR I8$="N" OR I8$="n" THEN GOTO 2600
2590 GOTO 2570
2600 RETURN
2610 LOCATE 17,1
2620 PRINT"PRESS ANY KEY TO CONTINUE."
2630 GOSUB 2890
2640 K$=INKEY$
2650 IF K$="" THEN GOTO 2640
2660 RETURN
2670 'CHECK THE DATE.
2680 GOSUB 2510: IF F1=1 THEN GOTO 2730
2690 D1$=LEFT$(I8$,2): IF D1$ < "01" OR D1$ > "12" THEN F1=1: GOTO 2730
2700 D1$=MID$(I8$,3,2): IF D1$ < "01" OR D1$ > "31" THEN F1=1: GOTO 2730
2710 D1$=RIGHT$(I8$,2): IF D1$ < "86" THEN F1=1: GOTO 2730
2720 F1=0
2730 RETURN
2740 C4=C4+1: C3=11
2750 FOR L= 1 TO 6
2760 IF L = 3 THEN LPRINT SPACE$(69);"PAGE ";C4: GOTO 2790
2770 IF L = 4 THEN LPRINT SPACE$(59) "RUNDATE  " LEFT$(I1$,2) "/" MID$(I1$,3,2) "/" RIGHT$(I1$,2): GOTO 2790
2780 LPRINT
2790 NEXT L
2800 FF1=LEN(T1$)
2810 FF1=40-(INT(FF1)/2)
2820 LPRINT SPACE$(FF1);T1$
2830 LPRINT SPACE$(24);"CHART OF GENERAL LEDGER ACCOUNTS"
2840 LPRINT: LPRINT: LPRINT
2850 RETURN
2860 FOR L=1 TO B5: LPRINT: NEXT L: RETURN
2870 'CLEAR BOTTOM OF SCREEN
2880 C5=11: FOR M = 1 TO 10: LOCATE C5+M: PRINT SPACE$(80): NEXT M: RETURN
2890 DEF SEG=0: POKE 1050, PEEK(1052): RETURN
2900 GOSUB 2890: I8$=""
2910 FOR X = 1 TO LENGTH: I8$ =I8$ + CHR$(254): NEXT X
2920 LOCATE ROW,COLUMN
2930 PRINT I8$;
2940 POINTER = 1: A$=" "
2950 WHILE (ASC(A$) <> 13)
2960 A$ = INPUT$(1)
2970 IF (POINTER > LENGTH) AND (ASC(A$) = 13) THEN GOTO 3090
2980 IF (POINTER > LENGTH) AND (ASC(A$) = 8) THEN GOTO 3040
2990 IF (POINTER > LENGTH) THEN BEEP: BEEP: BEEP: GOTO 3090
3000 IF (ASC(A$) >= 32) THEN MID$(I8$,POINTER,1) = A$: POINTER = POINTER +1:  GOTO 3070
3010 IF (POINTER = 1) AND (ASC(A$) = 8) THEN GOTO 3070
3020 IF (ASC(A$) <> 8) THEN GOTO 3060
3030 IF MID$(I8$,POINTER,1) = CHR$(254) THEN
3040    MID$(I8$,POINTER-1,1) = CHR$(254)
3050    POINTER = POINTER -1
3060 IF (ASC(A$) = 13) THEN I8$ = MID$(I8$,1,POINTER-1): POINTER = LENGTH + 1
3070 LOCATE ROW,COLUMN
3080 PRINT I8$
3090 WEND
3100 RETURN
3110 IF ERR=25 OR ERR=27 THEN GOTO 3130
3120 ON ERROR GOTO 0
3130 CLS: LOCATE 10,2
3140 PRINT"CHECK YOUR PRINTER.  IT IS EITHER NOT TURNED ON OR IT IS OUT OF PAPER."
3150 PRINT"PRESS ANY KEY WHEN YOU ARE READY TO CONTINUE.": GOSUB 2630
3160 CLS: RESUME
3170 CLOSE: OPEN "EXPACTS.FIL" FOR OUTPUT AS #1
3180 WRITE #1,SSALES,FSALES,SEXP,FEXP: CLOSE
3190 OPEN "STDACT.FIL" FOR OUTPUT AS #1
3200 WRITE #1,0,0#," "," "," "," "," "," ","0"
3210 CLOSE : IF C3 > 50 THEN B5=66-C3: GOSUB 2860: GOSUB 2740
3220 FOR I = 1 TO 5: LPRINT: NEXT I
3230 LPRINT"THIS PRINTOUT SHOWS ONLY ACTIVE ACCOUNTS.  EVEN THOUGH NOT PRINTED ON THIS"
3250 LPRINT"PRINTOUT, EACH ACCOUNT CLASSIFICATION DOES HAVE INACTIVE ACCOUNTS.  INACTIVE"
3260 LPRINT"ACCOUNTS ARE FOR ADDING NEW ACCOUNTS TO YOUR GENERAL LEDGER BY USING OPTION 8"
3270 LPRINT"OF THE DAILY MENU.  USE OPTION 7 OF THE DAILY MENU TO IDENTIFY THE ACCOUNT"
3280 LPRINT"NUMBERS OF INACTIVE ACCOUNTS WITHIN EACH ACCOUNT CLASSIFICATION.  EXAMPLES"
3290 LPRINT"OF `ACCOUNT CLASSIFICATIONS' (SHOWN ABOVE) ARE CURRENT ASSETS, INVESTMENT &"
3300 LPRINT"FUNDS, AND OPERATIONAL ASSETS."
5000 RUN "SETUP.BAS": END
```
{% endraw %}

## GLACTS.BAS

{% raw %}
```bas
500  ' COPYRIGHT 1986 TRONOLONE & FOSTER, PC
1000 REM GLACTS.BAS
1010 CLEAR: ON ERROR GOTO 2320
1090 CLS: GOSUB 1890: LOCATE 12,1
1100 PRINT"WOULD YOU LIKE A BRIEFING ON HOW TO USE THIS COMPUTER PROGRAM TO BE"
1110 PRINT"DISPLAYED ON THE COMPUTER SCREEN?  (INPUT `Y' FOR `YES' OR `N' FOR `NO'.)";: ROW=13: COLUMN=77: LENGTH=1: GOSUB 2430
1120 IF I8$="Y" OR I8$="y" OR I8$="N" OR I8$="n" THEN GOTO 1140
1130 LOCATE 13,77: PRINT SPACE$(1): LOCATE 13,1: GOTO 1110
1140 IF I8$="N" OR I8$="n" THEN I8$=" ": GOTO 1270
1150 CLS: LOCATE 2,1
1160 PRINT"THIS COMPUTER PROGRAM PRINTS A CHART OF GENERAL LEDGER ACCOUNTS.  YOU WILL"
1170 PRINT"BE GIVEN THE OPTION OF:": PRINT
1180 PRINT"   1.  PRINTING ACTIVE ACCOUNTS ONLY, OR"
1190 PRINT"   2.  PRINTING INACTIVE ACCOUNTS ONLY, OR"
1200 PRINT"   3.  PRINTING BOTH ACTIVE AND INACTIVE ACCOUNTS.": PRINT
1210 PRINT"(ACTIVE ACCOUNTS ARE ACCOUNTS THAT YOU HAVE PREVIOUSLY ADDED TO YOUR"
1220 PRINT" GENERAL LEDGER.  INACTIVE ACCOUNTS ARE ACCOUNTS THAT THE COMPUTER"
1230 PRINT" PROGRAM HAS PROVIDED FOR BUT WHICH HAVE NOT BEEN ACTIVATED - I.E.,"
1240 PRINT" THE ACCOUNTS EXIST BUT HAVE NEVER BEEN USED.  THE DAILY MENU PROVIDES"
1250 PRINT" AN OPTION FOR ACTIVATING THESE INACTIVE ACCOUNTS IN THE EVENT THEY ARE"
1260 PRINT" NEEDED.)": PRINT: PRINT"PRESS ANY KEY TO CONTINUE.": GOSUB 1820
1270 CLS
1280 INPUT #2,F1: FOR I = 1 TO F1-1: INPUT #2,F2: NEXT I: Z1=F2: INPUT #2,T1$
1290 LOCATE 12,1: PRINT"ENTER TODAYS DATE (USE FORMAT MMDDYY. I.E. JUNE 8, 1984 = 060884).  ";: ROW=12: COLUMN=71: LENGTH=6: GOSUB 2430
1300 GOSUB 1960: IF F1 <> 0 OR LEN(I8$) < 6 THEN GOTO 1290
1310 I1$=I8$: CLS: LOCATE 10,1: PRINT"SELECT THE OPTION OF YOUR CHOICE."
1320 PRINT"    ENTER `1' FOR PRINTING ACTIVE ACCOUNTS ONLY, OR"
1330 PRINT"    ENTER `2' FOR PRINTING INACTIVE ACCOUNTS ONLY, OR"
1340 PRINT"    ENTER `3' FOR PRINTING BOTH ACTIVE AND INACTIVE ACCOUNTS.";: ROW=13: COLUMN=65: LENGTH=1: GOSUB 2430
1350 IF I8$ < "1" OR I8$ > "3" THEN LOCATE 13,65: PRINT SPACE$(1): LOCATE 13,1: GOTO 1340
1360 GOSUB 1930: IF F1 <> 0 THEN I8$="4": GOTO 1350
1370 FORMAT2$="####"
1380 I2=VAL(I8$): CLS
1390 LOCATE 10,36: PRINT"PRINTING.": GOSUB 2030
1400 FOR P = 1 TO Z1
1410 C5=C5+1: GET #1,C5
1420 Y5$=X1$: Y6$=X2$: Y9$=X7$: I4$=X8$: I5$=X4$
1430 IF I2=1 AND (I5$ <> "1") THEN GOTO 1650
1440 IF I2=2 AND I5$="1" THEN GOTO 1650
1450 IF Y7$=Y5$ THEN GOTO 1510
1460 IF Y9$="1 " THEN F10=F10+1
1470 IF F10=1 AND F8=0 THEN GOSUB 2200: F8=1
1480 IF F10=2 AND F8=1 THEN GOSUB 2200: F8=2
1490 IF C3 > 55 THEN B5 = 66-C3: GOSUB 2190: GOSUB 2030
1500 LPRINT Y5$: C3=C3+1: Y7$=Y5$
1510 GOSUB 1860: I2#=C9A#: GOSUB 2270: D2A#=D2# * -1
1530 IF I2=3 AND I5$="0" THEN LPRINT SPC(2) Y6$ SPC(38);: LPRINT USING FORMAT2$;C5: GOTO 1560
1540 LPRINT SPC(2) Y6$ SPC(18);: LPRINT SPC(P1): LPRINT USING FORMAT3$;C9#;: LPRINT SPC(2);: LPRINT USING FORMAT2$;C5
1560 IF I5$="0" OR I5$="2" THEN C1=C1+1: C3=C3+1: GOTO 1620
1570 I2#=CVD(Y1$): GOSUB 2270: P6=5: P6$="OPENING BALANCE  - DEBIT": P7=2: GOSUB 2640
1580 I2#=CVD(Y2$): GOSUB 2270: P6$="OPENING BALANCE  - CREDIT": P7=1: GOSUB 2640
1590 I2#=CVD(Y3$): GOSUB 2270: P6$="SUM OF PERIOD DEBITS": P7=6:GOSUB 2640
1600 I2#=CVD(Y4$): GOSUB 2270: P6$="SUM OF PERIOD CREDITS": P7=5: GOSUB 2640
1610 C3=C3+5
1620 IF C3 > 55 THEN B5 = 66-C3: GOSUB 2190: GOSUB 2030
1630 IF I5$="0" OR I5$="2" THEN GOTO 1650
1640 C1=C1+1: C2#=C2#+CVD(Y1$): C6#=C6#+CVD(Y2$): C7#=C7#+CVD(Y3$): C8#=C8#+CVD(Y4$)
1650 NEXT P
1660 IF I2=1 OR I2=3 THEN GOTO 1690
1670 IF C3 > 55 THEN B5=66-C3: GOSUB 2190: GOSUB 2030
1680 GOTO 1700
1690 IF C3 > 50 THEN B5=66-C3: GOSUB 2190: GOSUB 2030
1700 FOR I = 1 TO 5: LPRINT: NEXT I
1710 LPRINT"NUMBER OF ACCOUNTS PRINTED       =          ";: LPRINT USING FORMAT2$;C1
1720 IF I2=2 THEN GOTO 1810
1730 LPRINT"SUM OF BEGINNING BALANCES:"
1740 I2#=C2#: GOSUB 2270: P6=4: P6$="DEBITS": P7=23: GOSUB 2650
1750 I2#=C6#: GOSUB 2270: P6$="CREDITS": P7=22: GOSUB 2650
1760 LPRINT"SUM OF POSTINGS TO ACCOUNTS:"
1770 I2#=C7#: GOSUB 2270: P6$="DEBITS": P7=23: GOSUB 2650
1780 I2#=C8#: GOSUB 2270: P6$="CREDITS": P7=22: GOSUB 2650
1790 IF (C2#+C7#) < (C6#+C8#) THEN I2#=(C2#+C7#) - (C6#+C8#) ELSE I2# = (C6#+C8#) - (C2#+C7#)
1800 IF I2# < 0.01# THEN I2# = 0#: LPRINT"DIFFERENCE, DEBITS LESS CREDITS  = $";: LPRINT SPC(P1);: LPRINT USING FORMAT3$;I2#
1810 FOR I = 1 TO 10: LPRINT: NEXT I: GOTO 2660
1820 K$=INKEY$
1830 IF K$="" THEN GOTO 1820
1840 RETURN
1850 'COMPUTE ACCOUNT BALANCE
1860 D1#=CVD(Y1$) + CVD(Y3$): D2#=(CVD(Y2$) + CVD(Y4$)) * -1#
1870 C9#=D1#+D2#: C9A#=C9#: IF C9A# < 0# THEN C9A#=C9A#*-1#
1880 RETURN
1890 OPEN "PASACT.FIL" FOR INPUT AS #2
1900 OPEN "R",#1,"GENLEG.FIL",111
1910 FIELD #1,25 AS X1$,30 AS X2$,6 AS X3$,1 AS X4$,4 AS X5$,2 AS X7$,1 AS X8$,10 AS X9$,8 AS Y1$,8 AS Y2$,8 AS Y3$,8 AS Y4$
1920 RETURN
1930 F1=0: FOR N = 1 TO LEN(I8$)
1940 IF MID$(I8$,N,1) < "0" OR MID$(I8$,N,1) > "9" THEN F1=1
1950 NEXT N: RETURN
1960 GOSUB 1930
1970 IF F1=1 THEN GOTO 2020
1980 D1$=LEFT$(I8$,2): IF D1$ < "01" OR D1$ > "12" THEN F1=1: GOTO 2020
1990 D1$=MID$(I8$,3,2): IF D1$ < "01" OR D1$ > "31" THEN F1=1: GOTO 2020
2000 D1$=RIGHT$(I8$,2): IF D1$ < "86" THEN F1=1: GOTO 2020
2010 F1=0
2020 RETURN
2030 C4=C4+1: C3=14
2040 FOR L= 1 TO 6
2050 IF L=4 THEN LPRINT SPACE$(69);"PAGE ";C4: GOTO 2080
2060 IF L=5 THEN LPRINT SPC(59) "RUNDATE  ";: IF L=5 THEN GOSUB 2250: GOTO 2080
2070 LPRINT
2080 NEXT L
2090 FF1=LEN(T1$): FF1=40-(INT(FF1)/2): LPRINT SPACE$(FF1);T1$
2100 IF I2=2 THEN GOTO 2130
2110 IF I2=3 THEN GOTO 2140
2120 LPRINT SPC(20);"CHART OF ACTIVE GENERAL LEDGER ACCOUNTS": GOTO 2150
2130 LPRINT SPC(19);"CHART OF INACTIVE GENERAL LEDGER ACCOUNTS": GOTO 2150
2140 LPRINT SPC(14);"CHART OF ACTIVE AND INACTIVE GENERAL LEDGER ACCOUNTS"
2150 LPRINT: LPRINT: LPRINT
2160 LPRINT "ACCOUNT CLASSIFICATIONS";SPC(39);"ACCOUNT";SPC(2);"ACCOUNT
2170 LPRINT SPC(6);"AND TITLES";SPC(46);"BALANCE";SPC(2);"NUMBER": LPRINT
2180 RETURN
2190 FOR L=1 TO B5: LPRINT: NEXT L: RETURN
2200 IF C3 > 55 THEN B5=66-C3: GOSUB 2190: GOSUB 2030
2210 LPRINT: C3=C3+2
2220 IF F8=0 THEN A1$="BALANCE SHEET" ELSE A1$="INCOME STATEMENT"
2230 LPRINT STRING$(25,"*");A1$;" ACCOUNTS";STRING$(25,"*")
2240 RETURN
2250 LPRINT LEFT$(I1$,2);"/";MID$(I1$,3,2);"/";RIGHT$(I1$,2): RETURN
2260 'SET FORMAT STATEMENT.
2270 IF I2# >    999999.99# THEN P1=5: FORMAT3$="###########,.##-": GOTO 2310
2280 IF I2# >       999.99# THEN P1=9: FORMAT3$="#######,.##-": GOTO 2310
2290 IF I2# >          0.99# THEN P1=14: FORMAT3$="###.##-": GOTO 2310
2300 IF I2# <         1#   THEN P1=17: FORMAT3$=".##-"
2310 RETURN
2320 IF ERR=53 THEN GOTO 2350
2330 IF ERR=25 OR ERR=27 THEN GOTO 2380
2340 ON ERROR GOTO 0
2350 CLS: LOCATE 10,2
2360 PRINT"GENERAL LEDGER DATA FILES NOT FOUND. PRESS ANY KEY AND YOU WILL BE RETURNED"
2370 PRINT"TO THE DAILY MENU.": GOSUB 2420: GOSUB 1820: GOTO 2660
2380 CLS: LOCATE 10,2
2390 PRINT"CHECK YOUR PRINTER.  IT IS EITHER NOT TURNED ON OR IT IS OUT OF PAPER."
2400 PRINT"PRESS ANY KEY WHEN YOU ARE READY TO CONTINUE.": GOSUB 2420: GOSUB 1820
2410 CLS: RESUME
2420 DEF SEG=0: POKE 1050, PEEK(1052): RETURN
2430 GOSUB 2420: I8$=""
2440 FOR X = 1 TO LENGTH: I8$=I8$ + CHR$(254): NEXT X
2450 LOCATE ROW,COLUMN
2460 PRINT I8$;
2470 POINTER = 1: A$=" "
2480 WHILE (ASC(A$) <> 13)
2490 A$ = INPUT$(1)
2500 IF (POINTER > LENGTH) AND (ASC(A$) = 13) THEN GOTO 2620
2510 IF (POINTER > LENGTH) AND (ASC(A$) = 8) THEN GOTO 2570
2520 IF (POINTER > LENGTH) THEN GOTO 2620
2530 IF (ASC(A$) >= 32) THEN MID$(I8$,POINTER,1) = A$: POINTER = POINTER +1:  GOTO 2600
2540 IF (POINTER = 1) AND (ASC(A$) = 8) THEN GOTO 2600
2550 IF (ASC(A$) <> 8) THEN GOTO 2590
2560 IF MID$(I8$,POINTER,1) = CHR$(254) THEN
2570    MID$(I8$,POINTER-1,1) = CHR$(254)
2580    POINTER = POINTER -1
2590 IF (ASC(A$) = 13) THEN I8$ = MID$(I8$,1,POINTER-1): POINTER = LENGTH + 1
2600 LOCATE ROW,COLUMN
2610 PRINT I8$
2620 WEND
2630 RETURN
2640 LPRINT SPC(P6) P6$ SPC(P7) SPC(P1);: LPRINT USING FORMAT3$;I2#: RETURN
2650 LPRINT SPC(P6) P6$ SPC(P7) "= $" SPC(P1);: LPRINT USING FORMAT3$;I2#: RETURN
2660 CLOSE: FOR I = 1 TO 10: LPRINT: NEXT I: RUN "DAILY.BAS": END
```
{% endraw %}

## NEWACT.BAS

{% raw %}
```bas
500  ' COPYRIGHT 1986 TRONOLONE & FOSTER, PC
1000 REM NEWACT.BAS
1010 CLEAR: ON ERROR GOTO 3460
1080 CLS: LOCATE 12,31: PRINT"PLEASE STAND BY.": GOSUB 1670
1090 CLS: LOCATE 8,1
1100 PRINT"ENTER TODAY'S DATE. (USE FORMAT MMDDYY.  I.E. JUNE 8, 1984 = 060884.)"
1110 GOSUB 3560: ROW=8: COLUMN=72:LENGTH=6: GOSUB 3580
1120 F2=1: GOSUB 2140: IF F1 <> 0 OR LEN(I8$) < 6 THEN GOTO 1110
1130 GOSUB 2550: IF F1 <> 0 THEN GOTO 1110
1140 I3$=I8$: CLS
1150 FORMAT1$="###########,.##"
1160 FORMAT2$="####"
1170 FORMAT4$="###############,.##"
1180 GOSUB 2850: IF I8$="N" OR I8$="n" THEN GOTO 3770
1190 'FIND LAST POSTING RECORD AND NAME & SAVING PASACT.FIL IN MEMORY
1200 DIM BANKAC(31): INPUT #3,F1: QTYAC=F1: FOR I = 1 TO F1-1: INPUT #3,M3
1210 IF I = 4 THEN QTYBNKAC=M3: HOLDMARK=M3: GOTO 1230
1212 IF I=1 THEN ACNOAR=M3: HOLDAR=M3: GOTO 1220
1214 IF I=2 THEN ACNOINV=M3: HOLDINV=M3: GOTO 1220
1216 IF I=3 THEN ACNORE=M3: HOLDRE=M3
1220 NEXT I
1230 F2=M3: FOR I = 1 TO F2: INPUT #3,F1: BANKAC(I)=F1: NEXT I
1240 INPUT #3,M3: ACNOSALES=M3: INPUT #3,M3: ACNOLAST=M3: INPUT #3,T1$: CONAME$=T1$: F1=0: F2=0
1250 'M1 &O0M2 SETS LIMIT ON DR (M1) &O0CR (M2) POSTINGS UNDER ONE ENTRY
1260 '***
1270 M1=30: M2=30: DIM A1(M1): DIM A2$(M1): DIM A3(M2): DIM A4$(M1): DIM A5(M3)
1280 CLS: GOSUB 3250: GOSUB 3450: I2#=0#: GOSUB 2720  'I2#=OPN BAL
1290  P1=15
1300 ' ACCT#
1310 GOSUB 3560: F2=1: ROW=P1: COLUMN=13: LENGTH=4: GOSUB 3580
1320 IF F3=1 AND I8$="Q" THEN GOSUB 1870: GOTO 1570
1330 GOSUB 2140: IF F1=1 THEN GOTO 1310
1340 I1=VAL(I8$): HOLDAC=I1: IF I1 < 1 THEN GOTO 1310
1350 IF I1 > M3 THEN GOSUB 2540: LOCATE 2,1: GOSUB 3350: GOSUB 3240: GOTO 1310
1360 LOCATE P1,13: PRINT SPACE$(4): LOCATE P1,12: PRINT I1: GET #1,I1: I5$=X4$
1370 'ACTIVE ACCT PRINT
1380 IF I5$="0" THEN F1=0: GOTO 1420
1390 GOSUB 2600: IF I8$="N" OR I8$="n" THEN  GOSUB 3240: GOTO 1310
1400 CLS: LOCATE 5,1
1402 PRINT"WARNING!  SINCE YOU ARE DISCONTINUING PROCESSING, SOME ACCOUNTS THAT YOU"
1403 PRINT"ENTERED ON THE VERY LAST SCREEN MAY BE ADDED TO YOUR GENERAL LEDGER WITHOUT"
1404 PRINT"BEING PRINTED ON YOUR PRINTER.  DO YOU STILL WISH TO RETURN TO THE DAILY MENU?"
1405 PRINT"IF NOT, YOU WILL BE ALLOWED TO START AGAIN, WITH THE LAST SCREEN.": PRINT
1406 PRINT"IF YES, DO THIS - WITHOUT FAIL - - - USE OPTION 7 OF THE DAILY MENU TO PINPOINT"
1407 PRINT"WHICH ACCOUNTS WERE ADDED TO YOUR GENERAL LEDGER.  ASK THAT ALL ACTIVE ACCOUNTS"
1408 PRINT"BE PRINTED.  THAT'S THE ONLY WAY TO BE SURE.":PRINT
1409 LOCATE 15,1: PRINT"DO YOU WISH TO RETURN TO THE DAILY MENU?";
1410 ROW=15: COLUMN=43: LENGTH=1: GOSUB 3580
1411 IF I8$="Y" OR I8$="y" OR I8$="N" OR I8$="n" THEN GOTO 1412 ELSE GOTO 1410
1412 IF I8$="Y" OR I8$="y" THEN CLS: ABFLAG=1: LOCATE 10,31: PRINT"STAND BY ...": GOTO 1640
1414 F1=1: GOTO 1570
1420 F1=0: FOR I = 1 TO B1: IF I1=A5(I) THEN F1=1: I=B1
1430 NEXT I
1440 IF CVD(Y1$) = 0# AND CVD(Y2$) = 0# AND F1=0 THEN GOTO 1480
1450 GOSUB 2650: IF I8$="Y" OR I8$="y" THEN GOTO 1640
1460 GOSUB 3250: GOTO 1310
1470 ' ACCT TITLE.
1480 GOSUB 3560: ROW=P1: COLUMN=22: LENGTH=30: GOSUB 3580: I20$=I8$
1490 IF LEFT$(I8$,1) = " " OR LEFT$(I8$,1) < "A" OR LEFT$(I8$,1) > "Z" THEN GOTO 1480
1500 LOCATE P1,22: PRINT SPACE$(30): LOCATE P1,22: PRINT I20$
1510 'DR OR CR PRINT
1520 B1=B1+1: A5(B1)=I1
1530 GOSUB 3560: ROW=P1: COLUMN=60: LENGTH=1: GOSUB 3580: I2$=I8$: GOSUB 2120
1540 IF F1=1 THEN GOTO 1530
1550 LOCATE P1,60: PRINT SPACE$(1): LOCATE P1,60: PRINT I2$: GOSUB 1760: F3=1: GOSUB 4000: GOTO 1310
1560 ' F1=1 MAX. ENTRIES EXCEEDED.  F1=2 NO INPUT.  F1=3#O NOT POST
1570 IF F1=1 OR F1=2 OR F1=3 THEN GOTO 1572 ELSE GOTO 1580
1572 IF ARHIT=1 THEN ACNOAR=HOLDAR: ARHIT=0
1573 IF INVHIT=1 THEN ACNOINV=HOLDINV: INVHIT=0
1574 IF REHIT=1 THEN ACNORE=HOLDRE: REHIT=0
1576 IF BNKHIT=1 THEN QTYBNKAC = QTYBNKAC - NEWBANK: BNKHIT=0
1577 GOTO 1600
1580 CLS: LOCATE 8,1: GOSUB 2310
1590 PRINT"THE NEW ACCOUNT DATA THAT YOU JUST ENTERED HAS BEEN POSTED TO THE GENERAL": PRINT"LEDGER. FOR YOUR RECORDS, THE NEW ACCOUNT DATA WAS PRINTED ON THE PRINTER.": PRINT: GOSUB 2260
1600 CLS: LOCATE 8,1: PRINT"DO YOU DESIRE TO ADD MORE NEW ACCOUNTS TO THE GENERAL LEDGER?": LOCATE 11,1: L1=12: GOSUB 2490
1610 IF I8$="N" OR I8$="n" THEN GOTO 1630
1620 CLS: GOSUB 3250: GOSUB 3450: NEWBANK=0: BNKHIT=0: ARHIT=0: INVHIT=0: REHIT=0: B1=0: C1=0: C2=0: GOTO 1290
1630 IF P3 > 55 THEN P3=66-P3 :GOSUB 2710: GOSUB 2720
1640 FOR I = 1 TO 5: LPRINT: NEXT I
1642 IF ABFLAG=0 THEN GOTO 1650
1644 LPRINT"WHILE ADDING ACCOUNTS TO THE GENERAL LEDGER, YOU SELECTED AN ACTIVE ACCOUNT"
1645 LPRINT"AND ELECTED TO DISCONTINUE PROCESSING.  BE SURE TO USE OPTION 7 OF THE DAILY"
1646 LPRINT"MENU TO DETERMINE WHICH ACCOUNTS, IF ANY, WERE ADDED TO YOUR GENERAL LEDGER.": GOTO 3770
1650 LPRINT"NUMBER OF NEW ACCOUNTS ADDED TO GENERAL LEDGER         =        ";: LPRINT USING FORMAT2$;C5
1660 GOTO 3770  'EOF
1670 OPEN "PASACT.FIL" FOR INPUT AS #3
1680 OPEN "R",1,"GENLEG.FIL",111
1690 FIELD #1,25 AS X1$,30 AS X2$,6 AS X3$,1 AS X4$,4 AS X5$,2 AS X7$,1 AS X8$,10 AS X9$,8 AS Y1$,8 AS Y2$,8 AS Y3$,8 AS Y4$
1700 RETURN
1710 F1=1: GOSUB 2540: LOCATE 5,1
1720 PRINT"MAXIMUM OF ";M1;" NEW DEBIT OR ";M2;" NEW CREDIT ACCOUNTS EXCEEDED."
1730 PRINT"REDESIGN YOUR INPUT SO THAT MAXIMUMS WILL NOT BE EXCEEDED."
1740 PRINT"NONE OF THESE NEW ACCOUNTS WILL BE POSTED UNTIL YOU REDESIGN YOUR INPUT.": PRINT: GOSUB 2260: CLS: RETURN
1750 'SAVE ENTRY
1760 F1=0: IF I2$="C" THEN GOTO 1790
1770 C1=C1+1: IF C1 <= M1 THEN GOTO 1780 ELSE GOTO 1800
1780 A1(C1)=I1: A2$(C1)=I20$: GOTO 1820
1790 C2=C2+1: IF C2 <= M2 THEN GOTO 1810
1800 GOSUB 1710: GOTO 1600
1810 A3(C2)=I1: A4$(C2)=I20$
1820 GOSUB 1840
1830 RETURN
1840 IF P1=22 THEN GOSUB 3070: P1=15: GOTO 1860
1850 P1=P1+1
1860 RETURN
1870 CLS: LOCATE 5,1
1880 PRINT"YOUR INPUT WILL BE DISPLAYED ON THE SCREEN SO THAT YOU MAY VERIFY"
1890 PRINT"IT.  CAREFULLY NOTE ANY ERRORS SO THAT INCORRECT DATA WILL NOT BE POSTED TO"
1900 PRINT"THE ACCOUNTS.": PRINT: GOSUB 2260
1910 F1=0: A1=C1: F1$="DEBIT": C9=0: CLS
1920 GOSUB 3150
1930 FOR I = 1 TO A1: C9=C9+1
1940 IF C9 > 10 THEN GOSUB 3170: C9=1: LOCATE 14,1
1950 IF F1=0 THEN I1=A1(I): I4$=A2$(I): GOTO 1970
1960 I1=A3(I): I4$=A4$(I)
1970 GET #1,I1
1980 GOSUB 3420: NEXT I
1990 IF A1=0 THEN LOCATE 15,13: PRINT"****THERE WERE NO NEW ACCOUNTS WITH ";F1$"S. ****"
2000 GOSUB 3400:LOCATE 4,1: PRINT"THE LIST OF ";F1$;" ENTRIES IS COMPLETE.  NOTE ANY INPUT ERRORS.": LOCATE 8,1: GOSUB 2260: CLS
2010 IF F1=1 THEN GOTO 2030
2020 C9=0: F1=1: A1=C2: F1$="CREDIT": CLS: GOTO 1920
2030 IF C1>0 OR C2>0 THEN GOTO 2080
2040 CLS: LOCATE 5,1
2050 PRINT"YOU DID NOT ENTER ANY NEW ACCOUNTS. INPUT IS REQUIRED BEFORE THE"
2060 PRINT"GENERAL LEDGER CAN BE POSTED.  RETURN TO THE DAILY MENU, RERUN THIS OPTION,"
2070 PRINT"AND ASK THAT A BRIEFING BE DISPLAYED ON THE SCREEN.":LOCATE 10,1: GOSUB 2260: GOTO 1640
2080 CLS: F1=0: LOCATE 5,1: PRINT"DO YOU DESIRE TO ADD TO THE GENERAL LEDGER THE ACCOUNTS THAT YOU JUST REVIEWED?";: L1=8: LOCATE 7,1: GOSUB 2490
2090 IF I8$ = "Y" OR I8$="y" THEN F1=5: GOTO 2110
2100 CLS: F1=3
2110 RETURN
2120 F1=1: IF I2$="D" OR I2$="C" THEN F1=0
2130 RETURN
2140 Q1=0: Q2=0: Q3=0: F1=0
2150 FOR I = 1 TO LEN(I8$): IF F2=1 THEN GOTO 2200
2160 IF MID$(I8$,I,1) <>  "."  THEN  GOTO 2200
2170 Q1=Q1+1: Q3=Q3+1: I6$=RIGHT$(I8$,3): I9$=LEFT$(I6$,1)
2180 IF I9$ <> "." THEN Q1=2: I=LEN(I8$)
2190 GOTO 2210
2200 IF MID$(I8$,I,1) < "0" OR MID$(I8$,I,1) > "9" THEN Q2=Q2+1
2210 NEXT I
2220 IF F2=0 AND Q1>1 THEN F1=1
2230 IF (F2=0 OR F2=1) AND  Q2>0 THEN F1=1
2240 IF F2=2 AND (Q1>1 OR Q2>0) THEN F1=1
2242 IF I8$="" OR ((Q3 > 1) OR (LEN(I8$) = 1 AND I8$=".") OR (LEN(I8$) = 2 AND LEFT$(I8$,1) = ".")) THEN F1=1
2250 RETURN
2260 PRINT"PRESS ANY KEY TO CONTINUE.": GOSUB 3560
2270 K$=INKEY$
2280 IF K$="" THEN GOTO 2270
2290 RETURN
2300 'POST THE TRANSACTIONS AND PRINT THE POSTINGS FOR FUTURE REFERENCE.
2310 C8=C1: F1=1: C5=C5+C1+C2
2320 FOR I = 1 TO C8
2330 IF F1=2 THEN GOTO 2380
2340 I1=A1(I): GET #1,I1: I4$=A2$(I): P1=6: GOSUB 3570
2350 LPRINT SPC(1): LPRINT USING FORMAT2$;I1;: LPRINT SPC(5) I4$ SPC(P1);: LPRINT USING FORMAT1$;I2#
2360 IF I=C1 THEN I2$="2" ELSE I2$="D"
2370 I2#=A2#(I): GOSUB 3430: GOTO 2420
2380 I1=A3(I): GET #1,I1: I4$=A4$(I): P1=19: GOSUB 3570
2390 LPRINT SPC(1);: LPRINT USING FORMAT2$;I1;: LPRINT SPC(9) I4$ SPC(P1);: LPRINT USING FORMAT1$;I2#
2400 IF I=C2 THEN I2$="1" ELSE I2$="C"
2410 I2#=A4#(I): GOSUB 3430
2420 LSET X3$=I3$: LSET X9$="NEW A/C": LSET X2$=I4$: LSET X4$="1": LSET X8$=I2$
2430 PUT #1,I1
2440 NEXT I
2450 F1=F1+1: C8=C2
2460 IF F1=2 THEN GOTO 2320
2470 LPRINT: LPRINT: P3=P3+1: GOSUB 3430
2480 RETURN
2490 LOCATE L1,1: PRINT"ENTER `Y' FOR `YES' OR `N' FOR `NO'."
2500 GOSUB 3560: ROW=L1: COLUMN=40: LENGTH=1: GOSUB 3580
2510 IF I8$="Y" OR I8$="y" OR I8$="N" OR I8$="n" THEN GOTO 2530
2520 GOTO 2500
2530 L1=0: RETURN
2540 FOR I = 1 TO 10: LOCATE I,1: PRINT SPACE$(80): NEXT I: RETURN
2550 D1$=LEFT$(I8$,2): IF D1$ < "01" OR D1$ > "12" THEN F1=1: GOTO 2590
2560 D1$=MID$(I8$,3,2): IF D1$ < "01" OR D1$ > "31" THEN F1=1: GOTO 2590
2570 D1$=RIGHT$(I8$,2): IF D1$ < "86" THEN F1=1: GOTO 2590
2580 F1=0
2590 RETURN
2600 L1=10: GOSUB 2540: LOCATE 3,1
2610 PRINT"YOU SELECTED AN ACTIVE ACCOUNT FOR POSTING.  THE ACCOUNT NUMBER THAT YOU"
2620 PRINT"SELECTED IS NUMBER ";I1;".  NEW GENERAL LEDGER ACCOUNTS MUST COME FROM INACTIVE"
2630 PRINT"ACCOUNTS.  INACTIVE ACCOUNTS CAN BE IDENTIFIED BY SELECTING OPTION 7 OF THE"
2640 PRINT"DAILY MENU.  DO YOU WISH TO RETURN TO THE DAILY MENU?": PRINT: GOSUB 2490: RETURN
2650 L1=8: GOSUB 2540: LOCATE 1,1
2660 PRINT"THE ACCOUNT NUMBER (NBR.  ";I1;") THAT YOU SELECTED WAS ASSIGNED AN OPENING"
2670 PRINT"BALANCE DURING THIS OR A PREVIOUS SESSION.  ONLY INACTIVE ACCOUNT NUMBERS MAY"
2680 PRINT"BE SPECIFIED IN THIS COMPUTER PROGRAM.  YOU MAY DETERMINE WHICH ACCOUNTS ARE"
2690 PRINT"ACTIVE AND WHICH ARE INACTIVE BY RETURNING TO THE DAILY MENU AND SELECTING"
2700 PRINT"OPTION 7.  DO YOU WISH TO RETURN TO THE DAILY MENU?": GOSUB 2490: GOSUB 2540: RETURN
2710 FOR L = 1 TO P3: LPRINT: NEXT L: RETURN
2720 P2=P2+1: P3=12
2730 FOR L = 1 TO 6
2740 IF L=4 THEN LPRINT SPACE$(69);"PAGE ";P2: GOTO 2770
2750 IF L=5 THEN LPRINT SPC(59) "RUNDATE  ";: IF L=5 THEN GOSUB 2830: GOTO 2770
2760 LPRINT
2770 NEXT L
2780 FF1=LEN(T1$): FF1=40-(INT(FF1)/2): LPRINT SPACE$(FF1);T1$
2790 LPRINT SPC(20) "NEW ACCOUNTS ADDED TO THE GENERAL LEDGER": PRINT: LPRINT
2800 LPRINT "ACCOUNT" SPC(51) "BEGINNING BALANCE"
2810 LPRINT "NUMBER" SPC(4) "ACCOUNT TITLE" SPC(33) "DEBIT" SPC(11) "CREDIT"
2820 LPRINT: RETURN
2830 LPRINT LEFT$(I3$,2) "/" MID$(I3$,3,2) "/" RIGHT$(I3$,2): RETURN
2840 RETURN
2850 L1=11: LOCATE 8,1: PRINT"WOULD YOU LIKE A BRIEFING ON HOW TO USE THIS COMPUTER PROGRAM TO BE"
2860 PRINT"DISPLAYED ON THE COMPUTER SCREEN?": L1=11: GOSUB 2490
2870 IF I8$="N" OR I8$="n" THEN CLS: I8$= " ": GOTO 3060
2880 CLS: LOCATE 4,1
2890 PRINT"THIS COMPUTER PROGRAM IS TO BE USED ONLY FOR ADDING NEW ACCOUNTS TO THE"
2900 PRINT"GENERAL LEDGER.  EACH NEW ACCOUNT MUST ALREADY BE IN THE GENERAL LEDGER AND"
2910 PRINT"BE CLASSIFIED AS AN `INACTIVE ACCOUNT'.  YOU CAN DETERMINE WHICH ACCOUNT"
2920 PRINT"NUMBERS HAVE THIS CLASSIFICATION BY RETURNING TO THE DAILY MENU, SELECTING"
2930 PRINT"OPTION 7 AND SPECIFYING THAT ALL ACCOUNTS BE PRINTED.": PRINT
2940 PRINT"DO YOU WISH TO CONTINUE WITH THIS SESSION?"
2950 L1=13: GOSUB 2490: IF I8$="N" OR I8$="n" THEN GOTO 3060
2960 CLS: LOCATE 3,1: PRINT"THE COMPUTER IS READY TO START ADDING NEW ACCOUNTS TO THE GENERAL LEDGER.": PRINT
2970 PRINT"THREE INPUTS ARE REQUIRED FOR EACH NEW ACCOUNT.  THEY ARE (1) THE ACCOUNT"
2980 PRINT"NUMBER, (2) THE ACCOUNT TITLE, AND (3) A `D' FOR `DEBIT' OR A `C' FOR `CREDIT'.": PRINT
2990 PRINT"ONE LINE ON THE COMPUTER SCREEN IS USED FOR ENTERING (1), (2), AND (3), ABOVE.": PRINT
3000 PRINT"CPA-LEDGER AUTOMATICALLY ASSIGNS TO EACH ACCOUNT A BEGINNING BALANCE OF ZERO.": PRINT
3010 PRINT"YOU SHOULD PRESS THE RETURN KEY AFTER ENTERING EACH OF THE THREE INPUT VALUES."
3020 PRINT"(CAREFULLY NOTE THAT YOU WILL BE REQUIRED TO PRESS THE RETURN KEY THREE TIMES -"
3030 PRINT"ONE TIME FOR EACH OF THE THREE INPUT VALUES.)": PRINT
3040 PRINT"ERROR MESSAGES WILL APPEAR AT THE TOP OF THE COMPUTER SCREEN.  THE ERROR"
3050 PRINT"MESSAGES ARE SELF EXPLANATORY.": PRINT: GOSUB 2260: CLS
3060 RETURN
3070 P1=0: GOSUB 2540: LOCATE 1,1
3080 PRINT"BECAUSE YOU HAVE MORE ACCOUNTS TO INPUT AND THE SCREEN IS FULL, THE
3090 PRINT"LINES BELOW WILL BE ERASED TO MAKE ROOM FOR YOUR ADDITIONAL ACCOUNTS."
3100 PRINT"BEFORE ERASING THE LINES, THE COMPUTER IS PAUSING SO THAT YOU CAN MAKE"
3110 PRINT"WHATEVER NOTES THAT YOU MIGHT WISH.  (EVEN THOUGH THE LINES BELOW WILL"
3120 PRINT"BE ERASED FROM THE SCREEN, THE DATA WILL N-O-T BE ERASED FROM THE"
3130 PRINT"COMPUTER PROGRAM ITSELF.)": PRINT: LOCATE 9,1: GOSUB 2260
3140 CLS: GOSUB 3250: GOSUB 3450: RETURN
3150 LOCATE 12,1: PRINT SPC(5) "ACCOUNT" SPC(39) "ACCOUNT"
3160 PRINT SPC(5)"NUMBER" SPC(6) "ACCOUNT TITLE" SPC(21) "BALANCE": RETURN
3170 GOSUB 3400: LOCATE 3,1
3180 PRINT"BECAUSE THE SCREEN IS FULL, THE ";F1$;" ACCOUNTS BELOW WILL BE ERASED SO THAT"
3190 PRINT"ADDITIONAL ";F1$" ACCOUNTS CAN BE DISPLAYED FOR YOUR REVIEW.  THE COMPUTER IS"
3200 PRINT"PAUSING SO THAT YOU CAN REVIEW THE ENTRIES AND MAKE WHATEVER NOTES THAT YOU"
3210 PRINT"MIGHT WISH.  (EVEN THOUGH THE LINES BELOW WILL BE ERASED FROM THE SCREEN,"
3220 PRINT"THE DATA WILL N-O-T BE ERASED FROM THE PROGRAM ITSELF.)"
3230 PRINT: LOCATE 9,1: GOSUB 2260: CLS: GOSUB 3150: GOSUB 3560: RETURN
3240 GOSUB 2540
3250 LOCATE 1,1
3260 PRINT"ENTER DATA FOR YOUR NEW ACCOUNTS BELOW.  ALWAYS REMEMBER THAT:"
3270 PRINT" 1. EACH NEW ACCOUNT REQUIRES   T-H-R-E-E   INPUTS (ACCOUNT NUMBER;
3280 PRINT"    ACCOUNT TITLE; AND  `D' FOR A `DEBIT' OR  `C' FOR A `CREDIT')."
3290 PRINT" 2. YOU MUST PRESS THE RETURN KEY AFTER   E-A-C-H   OF THE ABOVE THREE INPUTS."
3300 PRINT" 3. CPA-LEDGER AUTOMATICALLY ASSIGNS ZERO AS THE ACCOUNT'S BEGINNING BALANCE."
3310 PRINT" 4. ALL MESSAGES WILL APPEAR IN THE UPPER PART OF THE COMPUTER SCREEN."
3320 PRINT" 5. NEW ACCOUNTS REJECTED IN THEIR ENTIRETY ARE TO BE REENTERED."
3330 PRINT" 6. AFTER ENTERING ALL INPUT FOR A NEW ACCOUNT OR A SERIES OF ACCOUNTS, ENTER A"
3340 PRINT"    A   `Q'   (FOR QUIT)    WHEN YOU ARE ASKED FOR THE NEXT `ACCOUNT NUMBER'.": PRINT STRING$(75,"*"): RETURN
3350 PRINT"YOUR INPUT FOR THE ACCOUNT NUMBER IS TOO LARGE. THE LARGEST ACCOUNT"
3360 PRINT"NUMBER IN THE GENERAL LEDGER IS ACCOUNT NUMBER ";M3;".  IF DESIRED,"
3370 PRINT"YOU CAN DETERMINE THE ACCOUNT NUMBERS IN THE GENERAL LEDGER BY"
3380 PRINT"SELECTING OPTION 7 OF THE DAILY MENU AND SPECIFYING THAT ALL"
3390 PRINT"ACCOUNTS BE PRINTED.": LOCATE 8,1: GOSUB 2260: RETURN
3400 LOCATE 2,1: PRINT"YOUR ";F1$;" ENTRIES (WITH ACCOUNT TITLES) APPEAR BELOW.": RETURN
3420 LOCATE (C9+13),7: PRINT USING FORMAT2$;I1;: LOCATE (C9+13),18: PRINT I4$;: LOCATE (C9+13),53: PRINT F1$: RETURN
3430 P3=P3+1: IF P3>55 THEN P3=66=P3: GOSUB 2710: GOSUB 2720
3440 RETURN
3450 LOCATE 13,11: PRINT "ACCOUNT" SPC(38) "D=DEBIT": PRINT SPC(10) "NUMBER" SPC(5) "ACCOUNT TITLE" SPC(21) "C=CREDIT": RETURN
3460 IF ERR=53 THEN GOTO 3490
3470 IF ERR=25 OR ERR=27 THEN GOTO 3520
3480 ON ERROR GOTO 0
3490 CLS: LOCATE 10,2
3500 PRINT"GENERAL LEDGER DATA FILES NOT FOUND. PRESS ANY KEY AND YOU WILL BE RETURNED"
3510 PRINT"TO THE DAILY MENU.": GOSUB 3560: GOSUB 2270: GOTO 3770
3520 CLS: LOCATE 10,2
3530 PRINT"CHECK YOUR PRINTER.  IT IS EITHER NOT TURNED ON OR IT IS OUT OF PAPER."
3540 PRINT"PRESS ANY KEY WHEN YOU ARE READY TO CONTINUE.": GOSUB 3560: GOSUB 2270
3550 CLS: GOSUB 3250: GOSUB 3450: RESUME
3560 DEF SEG=0: POKE 1050, PEEK(1052): RETURN
3570 L2=LEN(I4$): P1=P1+(30-L2): RETURN  'ADD ADDL SPACES TO P1
3580 GOSUB 3560: I8$=""
3590 FOR X = 1 TO LENGTH: I8$ =I8$ + CHR$(254): NEXT X
3600 LOCATE ROW,COLUMN: PRINT I8$;: POINTER = 1: A$=" "
3610 WHILE (ASC(A$) <> 13)
3620 A$ = INPUT$(1)
3630 IF (POINTER > LENGTH) AND (ASC(A$) = 13) THEN GOTO 3750
3640 IF (POINTER > LENGTH) AND (ASC(A$) = 8) THEN GOTO 3700
3650 IF (POINTER > LENGTH) THEN GOTO 3750
3660 IF (ASC(A$) >= 32) THEN MID$(I8$,POINTER,1) = A$: POINTER = POINTER +1:  GOTO 3730
3670 IF (POINTER = 1) AND (ASC(A$) = 8) THEN GOTO 3730
3680 IF (ASC(A$) <> 8) THEN GOTO 3720
3690 IF MID$(I8$,POINTER,1) = CHR$(254) THEN
3700    MID$(I8$,POINTER-1,1) = CHR$(254)
3710    POINTER = POINTER -1
3720 IF (ASC(A$) = 13) THEN I8$ = MID$(I8$,1,POINTER-1): POINTER = LENGTH + 1
3730 LOCATE ROW,COLUMN
3740 PRINT I8$
3750 WEND
3760 RETURN
3770 IF CHGIT=0 THEN GOTO 3830
3780 CLOSE: OPEN "PASACT.FIL" FOR OUTPUT AS #1
3790 QTYAC=QTYAC + (QTYBNKAC - HOLDMARK)
3800 WRITE #1,QTYAC,ACNOAR,ACNOINV,ACNORE,QTYBNKAC
3810 FOR I = 1 TO QTYBNKAC: WRITE #1,BANKAC(I): NEXT I
3820 WRITE #1,ACNOSALES,ACNOLAST,CONAME$
3830 CLOSE: FOR I = 1 TO 10: LPRINT: NEXT I: RUN "DAILY.BAS": END
4000 IF ACNOAR <> 0 THEN GOTO 4040
4020 GOSUB 4500: PRINT"IS NEW ACCOUNT FOR ACCOUNTS RECEIVABLE?   (`Y' OR `N')";
4022 GOSUB 5000: IF I8$="Y" OR I8$="y" OR I8$="N" OR I8$="n" THEN GOTO 4024 ELSE GOTO 4020
4024 IF I8$="N" OR I8$="n" THEN GOTO 4040
4030 GOSUB 6000: IF I8$="Y" OR I8$="y" THEN CHGIT=1: ARHIT=1: ACNOAR=HOLDAC: GOTO 4120 ELSE ARHIT=0: GOSUB 7000: GOTO 4120
4040 IF ACNOINV <> 0 THEN GOTO 4070
4050 GOSUB 4500: PRINT"IS NEW ACCOUNT FOR BEGINNING MERCHANDISE INVENTORY?  (`Y' OR `N')";
4052 GOSUB 5000: IF I8$="Y" OR I8$="y" OR I8$="N" OR I8$="n" THEN GOTO 4054 ELSE GOTO 4050
4054 IF I8$="N" OR I8$="n" THEN GOTO 4070
4060 GOSUB 6000: IF I8$="Y" OR I8$="y" THEN CHGIT=1: INVHIT=1: ACNOINV=HOLDAC: GOTO 4120 ELSE INVHIT=0: GOSUB 7000: GOTO 4120
4070 IF ACNORE <> 0 THEN GOTO 4100
4080 GOSUB 4500: PRINT"IS THE NEW ACCOUNT FOR RETAINED EARNINGS?  (`Y' OR `N')";
4082 GOSUB 5000: IF I8$="Y" OR I8$="y" OR I8$="N" OR I8$="n" THEN GOTO 4084 ELSE GOTO 4080
4084 IF I8$="N" OR I8$="n" THEN GOTO 4100
4090 GOSUB 6000: IF I8$="Y" OR I8$="y" THEN CHGIT=1: REHIT=0: ACNORE=HOLDAC: GOTO 4120 ELSE REHIT=0: GOSUB 7000: GOTO 4120
4100 GOSUB 4500: PRINT"IS THE NEW ACCOUNT FOR A BANK ACCOUNT?  (`Y' OR `N')";
4102 GOSUB 5000: IF I8$="Y" OR I8$="y" OR I8$="N" OR I8$="n" THEN GOTO 4104 ELSE GOTO 4100
4104 IF I8$="N" OR I8$="n" THEN GOTO 4120
4110 GOSUB 6000: IF I8$="Y" OR I8$="y" THEN CHGIT=1: BNKHIT=1: NEWBANK=NEWBANK+1: QTYBNKAC=QTYBNKAC+1: BANKAC(QTYBNKAC)=HOLDAC ELSE GOSUB 7000
4120 GOSUB 4500: RETURN
4500 LOCATE 23,1: PRINT SPACE$(70);: LOCATE 23,1: RETURN
5000 ROW=23: COLUMN=70: LENGTH=1: GOSUB 3580: RETURN
6000 LOCATE 22,1: PRINT"ARE YOU ABSOLUTELY SURE? (`Y' FOR YES OR `N' FOR NO.)";
6002 ROW=22: COLUMN=56: LENGTH=1: GOSUB 3580
6004 IF I8$="Y" OR I8$="y" OR I8$="N" OR I8$="n" THEN GOTO 6006 ELSE GOTO 6002
6006 LOCATE 22,1: PRINT SPACE$(60);: RETURN
7000 LOCATE P1-1,1: PRINT SPACE$(80);: B1=B1-1: P1=P1-1
7010 IF I2$="D" THEN C1=C1-1
7020 IF I2$="C" THEN C2=C2-1
7030 RETURN
```
{% endraw %}

## OPNBAL.BAS

{% raw %}
```bas
500  ' COPYRIGHT 1986 TRONOLONE & FOSTER, PC
1000 REM OPNBAL.BAS
1010 CLEAR
1020 ON ERROR GOTO 4540
1080 GOSUB 1940
1090 Z49=0: OPEN "PASACT.FIL" FOR INPUT AS #3: INPUT #3,F1
1100 FOR I = 1 TO F1-1: INPUT #3,F2
1110 IF I = 1 OR I = 2 THEN GOTO 1150
1120 IF I = 3 THEN F1=F2: GOTO 1150
1130 IF F2=0 THEN Z49=0: GOTO 1160
1140 Z49=0: DIM Z(F2): FOR J=1 TO F2: INPUT #3,F3: Z49=Z49+1: Z(Z49)=F3: NEXT J: GOTO 1160
1150 NEXT I
1160 INPUT #3,M3: INPUT #3,M3: INPUT #3,T1$: F1=0: F2=0: F3=0: CLOSE #3
1170 GOSUB 1290: GOSUB 3530: IF I8$="N" OR I8$="n" THEN GOTO 1870
1180 CLS: LOCATE 8,1
1190 PRINT"ENTER TODAY'S DATE. USE FORMAT MMDDYY.  (I.E. JUNE 8, 1984 = 060884.)"
1200 ROW=8: COLUMN=71: LENGTH=6: GOSUB 4660: GOSUB 3130
1210 IF LEFT$(I8$,1) = " " OR I8$ < "0" OR LEN(I8$) < 6 THEN GOTO 1180
1220 F2=1: GOSUB 2620: IF F1 <> 0 THEN GOTO 1180
1230 GOSUB 3130: IF F1 <> 0 THEN GOTO 1180
1240 I3$=I8$: CLS: LOCATE 12,31: PRINT"PLEASE STAND BY.": GOSUB 3330
1250 LOCATE 12,1: PRINT SPACE$(80)
1260 'M1 &O0M2 = LIMIT ON DR. (M1) AND CR. (M2) POSTINGS FOR ONE ENTRY.
1270 '***
1280 M1=30: M2=30: DIM A1(M1): DIM A2#(M1): DIM A3(M2): DIM A4#(M2): DIM A5(M3)
1282 GOTO 1320
1290 FORMAT1$="###########,.##"
1300 FORMAT2$="####"
1310 FORMAT4$="###############,.##"
1312 RETURN
1320 CLS: GOSUB 4120: GOSUB 4520
1330 'LOCATE LINE FOR ENTERING POSTING DATA.
1340  P1=15
1350 LOCATE P1,22
1360 'INPUT AND VERIFY ACCOUNT NUMBER.
1370 GOSUB 4650: ROW=P1: COLUMN=22: LENGTH=4: GOSUB 4660
1380 IF F3=1 AND I8$="Q" THEN GOSUB 2200: GOTO 1780
1390  F2=1: GOSUB 2620: IF F1 <> 0 OR I8$ < "0" THEN GOTO 1350
1400 I1=VAL(I8$)
1410 IF I1 =< 0 THEN GOTO 1350
1420 IF I1 > M3 THEN GOSUB 3120: LOCATE 2,1: GOSUB 4310: GOSUB 4110: GOTO 1350
1430 LOCATE P1,21: PRINT SPACE$(5): LOCATE P1,22: PRINT I1: GET #1,I1: CLASSI$=X1$: I5$=X4$
1432 IF X8$="1" THEN SAME1$="C": GOTO 1450 '1OR2 COMES FROM NEWACT
1434 IF X8$="2" THEN SAME1$="D": GOTO 1450
1436 SAME1$=X8$
1440 'ACTIVE ACT PRINT
1450 IF I5$="1" THEN F1=0: GOTO 1490
1460 GOSUB 3180: GOSUB 3120: IF I8$="Y" OR I8$="y" THEN GOSUB 4210: GOTO 1860
1470 GOSUB 4120: GOTO 1350
1480 ' USED BEFORE PRINT
1490 FOR I = 1 TO B1: IF I1=A5(I) THEN F1=1
1500 NEXT I
1510 IF CVD(Y1$) = 0# AND CVD(Y2$) = 0# AND F1=0 THEN  LOCATE P1,21: PRINT " ";: GOTO 1550
1520 GOSUB 3270: IF I8$="N" OR I8$="n" THEN GOSUB 4120: GOTO 1350
1530 CLS: GOTO 1860
1540 'DR OR CR PRINT
1550 B1=B1+1: A5(B1)=I1
1560 GOSUB 4650: ROW=P1: COLUMN=35: LENGTH=1: GOSUB 4660: GOSUB 2600
1570 IF F1 <> 0 THEN GOTO 1560
1580 LOCATE P1,34: PRINT SPACE$(2): LOCATE P1,35: PRINT I8$: I2$=I8$
1590 'MAKE SURE DEBITS GOTO DEBIT ACCOUNTS AND CREDITS GOTO CREDIT ACCOUNTS.
1600 IF I2$=SAME1$ THEN GOTO 1710
1610 ' SKIP BANK A/C'S - MAY BE OVERDRAFT
1620 IF Z49=0 THEN GOTO 1660  'NO BANK A/C IN GL
1630 FOR J = 1 TO Z49: IF I1 = Z(J) THEN GOTO 1710  'Z( HAS BANK A/C #S
1640 NEXT J
1650 ' NOT A BANK A/C.  NOW SKIP R/E - MAY BE DEFICIT.
1660 IF CLASSI$="RETAINED EARNINGS        " THEN GOTO 1710
1670 ' NOT A BANK A/C OR R/E.
1680 GOSUB 4010: IF I8$="N" OR I8$="n" THEN B1=B1-1: LOCATE P1,34: PRINT SPACE$(2): GOSUB 4120: GOTO 1350
1690 GOSUB 4210: GOTO 1820
1700 ' $ OK PRINT
1710 GOSUB 4650: ROW=P1: COLUMN=44: LENGTH=10: GOSUB 4660: F2=0: GOSUB 2620
1720 IF F1=1 THEN GOTO 1750
1730 I2#=VAL(I8$)
1740 IF I2# > 0# AND I2# =< 9999999.99# THEN LOCATE P1,44: PRINT SPACE$(11): LOCATE P1,43: PRINT I2#: GOSUB 2040: F3=1: GOTO 1350
1750 GOSUB 3450: GOSUB 4110: B1=B1-1: LOCATE P1,1: PRINT SPACE$(53): GOTO 1350  'B1 USED TO STORE A/C#s
1760 ' F1=1 MAX. DR. OR CR. ENTRIES EXCEEDED.  F1=2 NO DR. OR CR. INPUT.
1770 ' F1=3#O NOT DESIRE TO POST. F1=4#R. <> CR.  F1=5#R=CR AND POST.
1780 IF F1=1 OR F1=2 OR F1=3 OR F1=4 THEN GOTO 1820
1790 CLS: LOCATE 8,1: GOSUB 2800
1800 PRINT"THE OPENING BALANCES THAT YOU JUST ENTERED HAVE BEEN POSTED TO THE GENERAL": PRINT"LEDGER. FOR YOUR RECORDS, THE ENTRY WAS PRINTED ON THE PRINTER.": PRINT: GOSUB 2740
1810 C5=C5+1: C6#=C6#+C3#: C7#=C7#+C4#
1820 CLS: LOCATE 8,1: PRINT"DO YOU DESIRE TO POST ADDITIONAL OPENING BALANCES TO THE GENERAL LEDGER?": LOCATE 11,1: L1=11: GOSUB 3070
1830 IF I8$="N" OR I8$="n" THEN GOTO 1860
1840 CLS: GOSUB 4120: GOSUB 4520: B1=0: C1=0: C2=0: C3#=0# : C4#=0# : GOTO 1340
1850 'PRINT SUMMARY DATA.
1860 IF P3 > 55 THEN P4=66-P3 :GOSUB 3320: GOSUB 3330
1870 FOR I = 1 TO 5: LPRINT: NEXT I
1880 LPRINT"NUMBER OF GENERAL LEDGER ENTRIES POSTED               =        ";: LPRINT USING FORMAT2$;C5
1890 LPRINT"VALUE OF ALL DEBITS POSTED                            = $";: LPRINT USING FORMAT4$;C6#
1900 LPRINT"VALUE OF ALL CREDITS POSTED                           = $";: LPRINT USING FORMAT4$;C7#
1910 IF C6# > C7# THEN C5# = C6# - C7# ELSE C5# = C7# - C6#
1920 LPRINT"DIFFERENCE - DEBITS LESS CREDITS POSTED               = $";: LPRINT USING FORMAT4$;C5#
1930 GOTO 4870
1940 OPEN "TEST2.FIL" FOR INPUT AS #3: CLOSE #3
1950 OPEN "R",1,"GENLEG.FIL",111
1960 FIELD #1,25 AS X1$,30 AS X2$,6 AS X3$,1 AS X4$,4 AS X5$,2 AS X7$,1 AS X8$,10 AS X9$,8 AS Y1$,8 AS Y2$,8 AS Y3$,8 AS Y4$
1970 OPEN "GENJNL.FIL" FOR APPEND AS #2
1980 RETURN
1990 F1=1: GOSUB 3120: LOCATE 5,1
2000 PRINT"MAXIMUM OF ";M1;" DEBIT OR ";M2;" CREDIT POSTING EXCEEDED."
2010 PRINT"REDESIGN YOUR ENTRY SO THAT MAXIMUMS WILL NOT BE EXCEEDED."
2020 PRINT"NONE OF THIS GENERAL LEDGER ENTRY WILL BE POSTED UNTIL YOU REDESIGN THE ENTRY.": PRINT: GOSUB 2740: CLS: RETURN
2030 'SAVE ENTRY.
2040 F1=0
2050 IF I2$="C" THEN GOTO 2090
2060 C1=C1+1: C3#=C3#+I2#: IF C1 <= M1 THEN GOTO 2080
2070 GOTO 2110
2080 A1(C1)=I1: A2#(C1)=I2#: GOTO 2130
2090 C2=C2+1: C4#=C4#+I2#
2100 IF C2 <= M2 THEN GOTO 2120
2110 GOSUB 1990: GOTO 2140
2120 A3(C2)=I1: A4#(C2)=I2#
2130 GOSUB 2150
2140 RETURN
2150 IF P1=22 THEN GOSUB 3840: P1=15: GOTO 2170
2160 P1=P1+1
2170 RETURN
2180 GOSUB 3120: LOCATE 5,1
2190 PRINT"ENTRY IS INCORRECT.  TRY AGAIN.  PRESS ANY KEY TO CONTINUE.": GOSUB 2750: RETURN
2200 CLS: LOCATE 2,1
2210 CLS: PRINT"YOUR INPUT WILL BE DISPLAYED ON THE SCREEN SO THAT YOU CAN VERIFY"
2220 PRINT"IT.  (FOR YOUR INFORMATION, ACCOUNT TITLES ASSIGNED TO THE ACCOUNT"
2230 PRINT"NUMBERS THAT YOU INPUT WILL ALSO BE DISPLAYED.)  CAREFULLY NOTE ANY"
2240 PRINT"ERRORS SO THAT INCORRECT DATA WILL NOT BE POSTED TO THE ACCOUNTS.": PRINT: GOSUB 2740
2250 F1=0: A1=C1: F1$="DEBIT": C9=0: CLS
2260 GOSUB 3920
2270 FOR I = 1 TO A1
2280 C9=C9+1
2290 IF C9 > 10 THEN GOSUB 3940: C9=1: LOCATE 14,1
2300 IF F1=0 THEN I1=A1(I): B2#=A2#(I): GOTO 2320
2310 I1=A3(I): B2#=A4#(I)
2320 GET #1,I1
2330 I4$=X2$: GOSUB 4370: NEXT I
2340 IF A1=0 THEN LOCATE 15,13: PRINT"****THERE WERE NO ";F1$" ENTRIES.****"
2350 GOSUB 4360:LOCATE 4,1: PRINT"THE LIST OF ";F1$;" ENTRIES IS COMPLETE.  NOTE ANY INPUT ERRORS.": LOCATE 8,1: GOSUB 2740: CLS
2360 IF F1=1 THEN GOTO 2380
2370 C9=0: F1=1: A1=C2: F1$="CREDIT": CLS: GOTO 2260
2380 IF C1>0 OR C2>0 THEN GOTO 2430
2390 CLS: LOCATE 5,1
2400 PRINT"YOU DID NOT ENTER ANY DEBITS OR CREDITS.  INPUT IS REQUIRED BEFORE THE"
2410 PRINT"GENERAL LEDGER CAN BE POSTED.  RETURN TO THE SETUP MENU, RERUN THIS OPTION,"
2420 PRINT"AND ASK THAT INSTRUCTIONS BE DISPLAYED ON THE SCREEN.":LOCATE 10,1: GOSUB 2740: GOTO 2590
2430 CLS: LOCATE 5,1: PRINT"DO YOU DESIRE TO POST THE DEBIT AND CREDIT ENTRIES THAT YOU JUST REVIEWED?";: L1=7: LOCATE 7,1: GOSUB 3070
2440 IF I8$ = "Y" OR I8$="y" THEN GOTO 2460
2450 CLS: F1=3: GOSUB 4210: GOTO 2590
2460 IF C3# = C4# THEN F1=5: GOTO 2590
2470 IF C3# > C4# THEN C5# = C3# - C4# ELSE C5# = C4# - C3#
2480 IF C5# < 0.01# THEN F1=5: GOTO 2590
2490 CLS: LOCATE 5,1: F1=4
2500 PRINT"FOR THE ENTRY THAT YOU JUST REVIEWED, THE TOTAL VALUE OF THE VALUE OF THE"
2510 PRINT"DEBITS DO NOT EQUAL THE TOTAL VALUE OF THE CREDITS.  NONE OF THE DEBITS"
2520 PRINT"OR CREDITS FOR THIS ENTRY WILL BE POSTED TO THE GENERAL LEDGER."
2530 PRINT"CAREFULLY REVIEW THE DEBIT AND CREDIT AMOUNTS AND REENTER THE ENTIRE"
2540 PRINT"ENTRY FROM THE BEGINNING.  THE TOTAL VALUES ARE AS FOLLOWS:"
2550 PRINT
2560 PRINT"  TOTAL VALUE OF DEBITS             = $";: PRINT USING FORMAT4$;C3#
2570 PRINT"  TOTAL VALUE OF CREDITS            = $";: PRINT USING FORMAT4$;C4#
2580 LOCATE 14,1: F1=6: GOSUB 4220: F1=2
2590 RETURN
2600 F1=1: IF I8$="D" OR I8$="C" THEN F1=0
2610 RETURN
2620 Q1=0: Q2=0: Q3=0: F1=0
2630 FOR I = 1 TO LEN(I8$): IF F2=1 THEN GOTO 2680
2640 IF MID$(I8$,I,1) <>  "."  THEN  GOTO 2680
2650 Q1=Q1+1: Q3=Q3+1: I6$=RIGHT$(I8$,3): I9$=LEFT$(I6$,1)
2660 IF I9$ <> "." THEN Q1=2: I=LEN(I8$)
2670 GOTO 2690
2680 IF MID$(I8$,I,1) < "0" OR MID$(I8$,I,1) > "9" THEN Q2=Q2+1
2690 NEXT I
2700 IF F2=0 AND Q1>1 THEN F1=1
2710 IF (F2=0 OR F2=1) AND Q2>0 THEN F1=1
2720 IF F2=2 AND (Q1>1 OR Q2 > 0) THEN F1=1
2722 IF I8$="" OR ((Q3 > 1) OR (LEN(I8$) = 1 AND I8$=".") OR (LEN(I8$) = 2 AND LEFT$(I8$,1) = ".")) THEN F1=1
2730 RETURN
2740 PRINT"PRESS ANY KEY TO CONTINUE."
2750 GOSUB 4650
2760 K$=INKEY$
2770 IF K$="" THEN GOTO 2760
2780 RETURN
2790 'POST TRANS AND PRINT
2800 C8=C1: F1=1
2810 FOR I = 1 TO C8
2820 IF F1=2 THEN GOTO 2870
2830 I1=A1(I): GET #1,I1: I4$=X2$: GOSUB 4410
2840 LPRINT SPC(1): LPRINT USING FORMAT2$;I1;: LPRINT SPC(5) I4$ SPC(P1);: LPRINT USING FORMAT3$;I2#
2850 IF I=C1 THEN I2$="2" ELSE I2$="D"
2860 I2#=A2#(I): GOSUB 4380: GOTO 2910
2870 I1=A3(I): GET #1,I1: I4$=X2$: GOSUB 4410
2880 LPRINT SPC(1);: LPRINT USING FORMAT2$;I1;: LPRINT SPC(9) I4$ SPC(P1);: LPRINT USING FORMAT3$;I2#
2890 IF I=C2 THEN I2$="1" ELSE I2$="C"
2900 I2#=A4#(I): GOSUB 4380
2910 LSET X3$=I3$: LSET X9$="OPENING"
2920 IF F1=1 THEN LSET Y1$=MKD$(I2#)
2930 IF F1=2 THEN LSET Y2$=MKD$(I2#)
2940 PUT #1,I1
2950 ' POST THE GENERAL JOURNAL. I7$=TRANSACTION DATE; I1=ACCOUNT NUMBER;
2960 ' I2$=D OR DEBIT, C FOR CREDIT; J1$=POSTING REFERENCE; F6$=CHECK NUMBER
2970 ' I2#=TRANSACTION AMOUNT; F90$=PAYEE FOR CHECK; F100$=TRANS EXPLANATION
2980 IF I=1 THEN F100$="OPENING JOURNAL ENTRY": J1$="OPENING": I7$=I3$: F6$=" ": F90$=" "
2990 IF I=1 THEN WRITE #2,0,F100$,J1$,I7$
3000 ' ***
3010 WRITE #2, I1,I2$,I2#,F6$,F90$
3020 NEXT I
3030 F1=F1+1: C8=C2
3040 IF F1=2 THEN GOTO 2810
3050 LPRINT: LPRINT: P3=P3+1: GOSUB 4380
3060 RETURN
3070 GOSUB 4650: PRINT"ENTER `Y'  FOR `YES' OR  `N'  FOR `NO'.";
3080 ROW=L1: COLUMN=43: LENGTH=1: GOSUB 4660
3090 IF I8$="Y" OR I8$="y" OR I8$="N" OR I8$="n" THEN GOTO 3110
3100 GOTO 3080
3110 L1=0: RETURN
3120 FOR I = 1 TO 10: LOCATE I,1: PRINT SPACE$(80): NEXT I: RETURN
3130 D1$=LEFT$(I8$,2): IF D1$ < "01" OR D1$ > "12" THEN F1=1: GOTO 3170
3140 D1$=MID$(I8$,3,2): IF D1$ < "01" OR D1$ > "31" THEN F1=1: GOTO 3170
3150 D1$=RIGHT$(I8$,2): IF D1$ < "86" THEN F1=1: GOTO 3170
3160 F1=0
3170 RETURN
3180 L1=10: GOSUB 3120: LOCATE 1,1
3190 PRINT"YOU SELECTED AN INACTIVE ACCOUNT FOR POSTING.  THE ACCOUNT NUMBER"
3200 PRINT"THAT YOU SELECTED IS NUMBER ";I1;".  YOU WILL NOT BE ALLOWED TO ASSIGN AN"
3210 PRINT"OPENING AMOUNT TO THIS ACCOUNT BECAUSE IT IS CLASSIFIED AS INACTIVE.  REFER"
3220 PRINT"TO THE PRINTOUT OF THE CHART OF ACCOUNTS FROM SETUP OPTION 1.  IF YOU DID NOT"
3230 PRINT"MAKE A MISTAKE IN YOUR INPUT, RETURN TO THE SETUP MENU AND SELECT ALL OPTIONS"
3240 PRINT"AGAIN, STARTING WITH OPTION 1.": PRINT
3250 PRINT"DO YOU WISH TO RETURN TO THE SETUP MENU?"
3260 PRINT: GOSUB 3070: RETURN
3270 L1=7: GOSUB 3120: LOCATE 1,1
3280 PRINT"THE ACCOUNT NUMBER (NBR.  ";I1;") THAT YOU SELECTED FOR POSTING WAS ASSIGNED"
3290 PRINT"AN OPENING BALANCE DURING THIS OR A PREVIOUS SESSION.  ONLY   O-N-E   OPENING"
3300 PRINT"BALANCE PER ACCOUNT IS PERMITTED.": PRINT
3310 GOSUB 3250: GOSUB 3120: RETURN
3320 FOR L = 1 TO P3: LPRINT: NEXT L: RETURN
3330 P2=P2+1: P3=13
3340 FOR L = 1 TO 6
3350 IF L=4 THEN LPRINT SPACE$(69);"PAGE ";P2: GOTO 3380
3360 IF L=5 THEN LPRINT SPC(59) "RUNDATE  ";: IF L=5 THEN GOSUB 3440: GOTO 3380
3370 LPRINT
3380 NEXT L
3390 FF1=LEN(T1$): FF1=40-(INT(FF1)/2): LPRINT SPACE$(FF1);T1$
3400 LPRINT SPC(32) "OPENING ENTRIES": LPRINT: LPRINT
3410 LPRINT "ACCOUNT"
3420 LPRINT "NUMBER" SPC(4) "ACCOUNT TITLE" SPC(33) "DEBIT" SPC(11) "CREDIT"
3430 LPRINT: RETURN
3440 LPRINT LEFT$(I3$,2);"/";MID$(I3$,3,2);"/";RIGHT$(I3$,2): RETURN
3450 GOSUB 3120: LOCATE 2,1
3460 PRINT"YOUR INPUT FOR THE DOLLAR AMOUNT IS INCORRECT.  THE O-N-L-Y ALLOWABLE"
3470 PRINT"CHARACTERS FOR THE DOLLAR AMOUNT ARE ZERO(0) THROUGH NINE (9) AND A PERIOD"
3480 PRINT"TO SEPARATE DOLLARS AND CENTS.  EXAMPLES OF CORRECT INPUT, FOR EITHER"
3490 PRINT"DEBITS OR CREDITS, ARE SHOWN BELOW."
3500  PRINT".01  1   1.00  1.01   126   126.00   126.59   1648   1648.00   1648.25"
3510 PRINT"THE MINIMUM DOLLAR AMOUNT FOR ANY ONE DEBIT OR CREDIT IS .01."
3520 PRINT"THE MAXIMUM DOLLAR AMOUNT FOR ANY ONE DEBIT OR CREDIT IS 9999999.99.": PRINT: GOSUB 2740: RETURN
3530 CLS: L1=11: LOCATE 8,1: PRINT"WOULD YOU LIKE A BRIEFING ON HOW TO USE THIS COMPUTER PROGRAM TO BE"
3540 PRINT"DISPLAYED ON THE SCREEN?": LOCATE 11,1: GOSUB 3070
3550 IF I8$="N" OR I8$="n" THEN CLS: I8$=" ": GOTO 3830
3560 CLS: LOCATE 1,1
3570 PRINT"THIS COMPUTER PROGRAM IS TO BE USED ONLY FOR POSTING OPENING (BEGINNING)"
3580 PRINT"BALANCES TO THE GENERAL LEDGER ACCOUNTS.  EACH GENERAL LEDGER ACCOUNT TO"
3590 PRINT"BE POSTED M-U-S-T BE AN ACTIVE ACCOUNT.  YOU CAN DETERMINE WHICH ACCOUNTS"
3600 PRINT"ARE ACTIVE BY REVIEWING THE PRINTOUT FROM SETUP OPTION 1.": PRINT
3610 PRINT"ALSO, THIS COMPUTER PROGRAM WILL N-O-T ALLOW YOU TO ASSIGN MORE THAN"
3620 PRINT"O-N-E OPENING BALANCE PER GENERAL LEDGER ACCOUNT.  ONCE AN GENERAL"
3630 PRINT"LEDGER ACCOUNT HAS BEEN ASSIGNED AN OPENING BALANCE, THAT BALANCE"
3640 PRINT"C-A-N-N-O-T BE CHANGED BY THIS COMPUTER PROGRAM.": PRINT
3650 PRINT"IF YOU FIND THAT YOU HAVE NOT ESTABLISHED ALL OF THE REQUIRED ACCOUNTS,"
3660 PRINT"OR IF YOU ASSIGN IMPROPER AMOUNTS TO ACCOUNTS, YOU SHOULD RERUN OPTIONS 1, 2,"
3670 PRINT"AND 3 OF THE SETUP MENU.": PRINT
3680 PRINT"DO YOU WISH TO CONTINUE WITH THIS SESSION?"
3690 L1=16: GOSUB 3070: IF I8$="N" OR I8$="n" THEN GOTO 3830
3700 CLS: LOCATE 1,1: PRINT"THE COMPUTER IS READY TO START ACCEPTING YOUR OPENING JOURNAL ENTRIES."
3710 PRINT"EACH JOURNAL ENTRY REQUIRES AT LEAST ONE DEBIT AND ONE CREDIT.  EACH DEBIT"
3720 PRINT"OR CREDIT, IN TURN, REQUIRES  T-H-R-E-E  INPUT VALUES.  THE THREE INPUT""
3730 PRINT"VALUES ARE (1) THE ACCOUNT NUMBER, (2) A `D' TO SIGNIFY A `DEBIT OR A `C'"
3740 PRINT"SIGNIFY A `CREDIT', AND (3) THE DOLLAR AMOUNT OF THE DEBIT OR CREDIT.": PRINT
3750 PRINT"ONE LINE ON THE COMPUTER SCREEN IS USED FOR INPUTTING (1), (2), AND"
3760 PRINT"(3) ABOVE.  YOU SHOULD PRESS THE RETURN KEY AFTER INPUTING EACH OF"
3770 PRINT"OF THE THREE INPUT VALUES.  (CAREFULLY NOTE THAT YOU WILL BE REQUIRED"
3780 PRINT"TO PRESS THE RETURN KEY T-H-R-E-E TIMES FOR EACH LINE OF INPUT - ONE"
3790 PRINT"TIME AFTER YOU INPUT THE ACCOUNT NUMBER, ONE TIME AFTER YOU SIGNIFY"
3800 PRINT"A DEBIT (`D') OR CREDIT (`C'), AND ONE TIME AFTER YOU INPUT THE AMOUNT.)": PRINT
3810 PRINT"ERROR MESSAGES WILL APPEAR AT THE TOP OF THE COMPUTER SCREEN.  THE"
3820 PRINT"ERROR MESSAGES ARE SELF EXPLANATORY.": PRINT: GOSUB 2740: CLS
3830 RETURN
3840 P1=0: GOSUB 3120: LOCATE 1,1
3850 PRINT"BECAUSE YOU HAVE MORE ENTRIES TO INPUT AND THE SCREEN IS FULL, THE"
3860 PRINT"LINES BELOW WILL BE ERASED TO MAKE ROOM FOR YOUR ADDITIONAL ENTRIES."
3870 PRINT"BEFORE ERASING THE LINES, THE COMPUTER IS PAUSING SO THAT YOU CAN MAKE"
3880 PRINT"WHATEVER NOTES THAT YOU MIGHT WISH.  (EVEN THOUGH THE LINES BELOW WILL"
3890 PRINT"BE ERASED FROM THE SCREEN, THE DATA WILL N-O-T BE ERASED FROM THE"
3900 PRINT"COMPUTER PROGRAM ITSELF.)": PRINT: LOCATE 9,1: GOSUB 2740
3910 CLS: GOSUB 4120: GOSUB 4520: RETURN
3920 LOCATE 12,1: PRINT SPC(5) "ACCOUNT"
3930 PRINT SPC(5)"NUMBER" SPC(6) "ACCOUNT TITLE" SPC(27) "AMOUNT": RETURN
3940 GOSUB 4360: LOCATE 3,1
3950 PRINT"BECAUSE THE SCREEN IS FULL, THE ";F1$;" ENTRIES BELOW WILL BE ERASED SO THAT"
3960 PRINT"ADDITIONAL ";F1$" ENTRIES CAN BE DISPLAYED FOR YOUR REVIEW.  THE COMPUTER IS"
3970 PRINT"PAUSING SO THAT YOU CAN REVIEW THE ENTRIES AND MAKE WHATEVER NOTES THAT YOU"
3980 PRINT"MIGHT WISH.  (EVEN THOUGH THE LINES BELOW WILL BE ERASED FROM THE SCREEN,"
3990 PRINT"THE DATA WILL N-O-T BE ERASED FROM THE PROGRAM ITSELF.)"
4000 PRINT: LOCATE 9,1: GOSUB 2740: CLS: GOSUB 3920: GOSUB 4650: RETURN
4010 GOSUB 3120: LOCATE 1,1: I5$=X2$: L1=9
4020 IF I2$="D" THEN I4$="DEBIT" ELSE I4$="CREDIT"
4030 PRINT"YOUR OPENING ENTRY IS INCORRECT.  YOU REQUESTED TO DEBIT A CREDIT BALANCE"
4040 PRINT"ACCOUNT OR TO CREDIT A DEBIT BALANCE ACCOUNT.  ACCORDING TO YOUR INPUT"
4050 PRINT"YOU WANT TO   ";I4$;"   THE ACCOUNT    `";I5$;"'."
4060 PRINT"NONE OF YOUR ENTRY WILL BE POSTED UNTIL YOU CORRECT THE PREVIOUS DEBIT OR"
4070 PRINT"CREDIT.  WOULD YOU LIKE TO REENTER THIS ENTIRE ENTRY FROM THE BEGINNING?"
4080 PRINT"IF YOUR ANSWER IS `N' FOR `NO', YOU WILL BE ASKED TO REENTER THIS DEBIT OR"
4090 PRINT"CREDIT, STARTING WITH THE   A-C-C-O-U-N-T  N-U-M-B-E-R.)": PRINT
4100 GOSUB 3070: GOSUB 3120: RETURN
4110 GOSUB 3120
4120 LOCATE 1,1
4130 PRINT"ENTER YOUR DEBIT AND CREDIT ENTRIES BELOW.  ALWAYS REMEMBER THAT:"
4140 PRINT" 1. EACH DEBIT OR CREDIT ENTRY REQUIRES  T-H-R-E-E  INPUTS (THE ACCOUNT NUMBER;"
4150 PRINT"    A   `D'   FOR A  `DEBIT'  OR A   `C'   FOR A  `CREDIT'; AND THE AMOUNT)."
4160 PRINT" 2. YOU MUST PRESS THE RETURN KEY AFTER   E-A-C-H   OF THE THREE ABOVE INPUTS."
4170 PRINT" 3. ALL MESSAGES WILL APPEAR IN THE UPPER PART OF THE COMPUTER SCREEN."
4180 PRINT" 4. JOURNAL ENTRIES REJECTED IN THEIR ENTIRETY ARE TO BE REENTERED."
4190 PRINT" 5. **** AFTER YOU HAVE COMPLETED ALL INPUT FOR A JOURNAL ENTRY, ENTER A   `Q'"
4200 PRINT"    (FOR QUIT) WHEN YOU ARE ASKED FOR THE NEXT `ACCOUNT NUMBER'.****": RETURN
4210 LOCATE 2,1
4220 PRINT"THE COMPUTER IS PAUSING FOR YOU TO REVIEW YOUR SOURCE DOCUMENTATION."
4230 PRINT"DETERMINE WHETHER YOUR DOCUMENTATION OR YOUR INPUT IS IN ERROR."
4240 PRINT"REMEMBER, NO DEBITS OR CREDITS OF THIS JOURNAL ENTRY WILL BE POSTED TO THE"
4250 PRINT"GENERAL LEDGER.  REINPUT THIS JOURNAL ENTRY EITHER DURING THIS SESSION OR"
4260 PRINT"AT A LATER TIME.  IN   E-I-T-H-E-R   CASE,    C-A-R-E-F-U-L-L-Y    MARK THE"
4270 PRINT"ENTRY SO THAT YOU WILL REMEMBER THAT IT IS TO BE REINPUT."
4280 IF F1=6 THEN LOCATE 21,1: GOTO 4300
4290 LOCATE 9,1
4300 GOSUB 2740: RETURN
4310 PRINT"YOUR INPUT FOR THE ACCOUNT NUMBER IS TOO LARGE. THE LARGEST ACCOUNT"
4320 PRINT"NUMBER IN THE GENERAL LEDGER IS ACCOUNT NUMBER ";M3;".  IF DESIRED,"
4330 PRINT"YOU CAN DETERMINE THE ACCOUNT NUMBERS IN THE GENERAL LEDGER BY"
4340 PRINT"REVIEWING THE CHART OF GENERAL LEDGER ACCOUNTS THAT WAS PRINTED WHEN"
4350 PRINT"YOU USED SETUP OPTION 1.": LOCATE 8,1: GOSUB 2740: RETURN
4360 LOCATE 2,1: PRINT"YOUR ";F1$;" ENTRIES (WITH ACCOUNT TITLES) APPEAR BELOW.": RETURN
4370 LOCATE (C9+13),6: PRINT USING FORMAT2$;I1;: LOCATE (C9+13),15: PRINT I4$;: LOCATE (C9+13),49: PRINT USING FORMAT1$;B2#: RETURN
4380 P3=P3+1
4390 IF P3>55 THEN P4=66-P3: GOSUB 3320: GOSUB 3330
4400 RETURN
4410 IF F1=2 THEN I2#=A4#(I) ELSE I2#=A2#(I)
4420 IF F1=2 THEN GOTO 4470
4430 IF I2# > 999999.99# THEN P1=6: FORMAT3$="###########,.##": GOTO 4510
4440 IF I2# > 999.99# THEN P1=10: FORMAT3$="#######,.##": GOTO 4510
4450 IF I2# > 0.99# THEN P1=15: FORMAT3$="###.##": GOTO 4510
4460 IF I2# < 1# THEN P1=18: FORMAT3$=".##": GOTO 4510
4470 IF I2# > 999999.99# THEN P1=19: FORMAT3$="###########,.##": GOTO 4510
4480 IF I2# > 999.99# THEN P1=23: FORMAT3$="#######,.##": GOTO 4510
4490 IF I2# > 0.99# THEN P1=28: FORMAT3$="###.##": GOTO 4510
4500 IF I2# < 1# THEN P1=31: FORMAT3$=".##"
4510 RETURN
4520 LOCATE 13,20: PRINT "ACCOUNT" SPC(5) "D=DEBIT" SPC(5) "DOLLAR": PRINT SPC(19) "NUMBER" SPC(6) "C=CREDIT" SPC(4) "AMOUNT": RETURN
4530 ' ERROR HANDLING ROUTINE.
4540 IF ERR=53 THEN GOTO 4570
4550 IF ERR=25 OR ERR=27 THEN GOTO 4610
4560 ON ERROR GOTO 0
4570 CLS: LOCATE 10,1
4580 PRINT"GENERAL LEDGER DATA FILES NOT FOUND. PRESS ANY KEY AND YOU WILL BE RETURNED"
4590 PRINT"TO THE SETUP MENU.": GOSUB 2740
4600 GOTO 4870
4610 CLS: LOCATE 10,2
4620 PRINT"CHECK YOUR PRINTER.  IT IS EITHER NOT TURNED ON OR IT IS OUT OF PAPER."
4630 PRINT"PRESS ANY KEY WHEN YOU ARE READY TO CONTINUE.": GOSUB 2750
4640 CLS: RESUME
4650 DEF SEG=0: POKE 1050, PEEK(1052): RETURN
4660 GOSUB 4650: I8$=""
4670 FOR X = 1 TO LENGTH: I8$=I8$ + CHR$(254): NEXT X
4680 LOCATE ROW,COLUMN
4690 PRINT I8$;
4700 POINTER = 1: A$=" "
4710 WHILE (ASC(A$) <> 13)
4720 A$ = INPUT$(1)
4730 IF (POINTER > LENGTH) AND (ASC(A$) = 13) THEN GOTO 4850
4740 IF (POINTER > LENGTH) AND (ASC(A$) = 8) THEN GOTO 4800
4750 IF (POINTER > LENGTH) THEN GOTO 4850
4760 IF (ASC(A$) >= 32) THEN MID$(I8$,POINTER,1) = A$: POINTER = POINTER +1:  GOTO 4830
4770 IF (POINTER = 1) AND (ASC(A$) = 8) THEN BEEP: BEEP: BEEP: GOTO 4830
4780 IF (ASC(A$) <> 8) THEN GOTO 4820
4790 IF MID$(I8$,POINTER,1) = CHR$(254) THEN
4800    MID$(I8$,POINTER-1,1) = CHR$(254)
4810    POINTER = POINTER -1
4820 IF (ASC(A$) = 13) THEN I8$ = MID$(I8$,1,POINTER-1): POINTER = LENGTH + 1
4830 LOCATE ROW,COLUMN
4840 PRINT I8$
4850 WEND
4860 RETURN
4870 CLOSE: FOR I = 1 TO 10: LPRINT: NEXT I: RUN "SETUP.BAS": END
```
{% endraw %}

## PANDL.BAS

{% raw %}
```bas
500  ' COPYRIGHT 1986 TRONOLONE & FOSTER, PC
1000 REM PANDL.BAS
1010 CLEAR: ON ERROR GOTO 6310
1090 H2$="INCOME STATEMENT"
1100 CLS: LOCATE 10,1: PRINT"ENTER THE BEGINNING DATE FOR THE INCOME STATEMENT.": PRINT "(USE FORMAT MMDDYY. I.E., JUNE 30, 1984 = 063084.)";: GOSUB 3550: ROW=11: COLUMN=58: LENGTH=6: GOSUB 6410
1110 GOSUB 3330: IF F1 <> 0 OR LEN(I8$) < 6 THEN CLS: GOTO 1100
1120 GOSUB 4330: IF F1 <> 0 THEN CLS: GOTO 1100
1130 T3$=I8$
1140 LOCATE 13,1: PRINT"ENTER THE ENDING DATE FOR THE INCOME STATEMENT.": PRINT "(USE FORMAT MMDDYY. I.E., DECEMBER 31, 1984 = 123184.)";: GOSUB 3550: ROW=14: COLUMN=58: LENGTH=6: GOSUB 6410
1150 GOSUB 3330: IF F1 <> 0 OR LEN(I8$) < 6 THEN GOTO 1140
1160 GOSUB 4330: IF F1 <> 0 THEN GOTO 1140
1170 T6$=I8$: T11$=I8$: DIM A(20): DIM B(40): DIM C(20): DIM D(20) 'A=PRIMARY ACCT B=CONTRA C=# CONTRAS D=START IN B(
1210 CLS: LOCATE 12,32: PRINT"PLEASE STAND BY.": GOSUB 3610: CLS  'OPN GENLGR
1220 INPUT #2,F1: FOR I = 1 TO F1-1: INPUT #2,F2
1222 IF I=2 AND F2=0 THEN C16# = 0#: GOTO 1260
1230 IF I=2 THEN INVFLAG=1: GET #1,F2: GOSUB 3420: GOSUB 2200: C16#=C3#  'A/C# BEG INV
1240 IF I <> 4 THEN GOTO 1260
1250 FOR J = 1 TO F2: INPUT #2,F3: NEXT J: GOTO 1270
1260 NEXT I
1270 INPUT #2,S1 'A/C# SALES
1280 INPUT #2,S2 'LAST A/C#
1282 INPUT #2,T1$ 'CO NAME
1283 GOSUB 7000
1284 IF INVFLAG=0 AND PURFL=0 THEN C12#=0#: GOTO 1300
1286 CLS: LOCATE 10,1: PRINT"ENTER VALUE OF ENDING INVENTORY.  ";: GOSUB 3550: ROW=10: COLUMN=36: LENGTH=10: GOSUB 6410: GOSUB 4520
1287 IF F1=1 OR I8$ < "0" THEN LOCATE 12,1: GOSUB 3370: GOSUB 3560: CLS: GOTO 1286
1288 C12#=VAL(I8$)
1300 F1=0: F2=0: F3=0: C1=S1-1
1310 GOSUB 2280
1320 GOSUB 2340  'IDENTIFY PRI/CONTRAS
1330 CLS: LOCATE 12,32: PRINT"PLEASE STAND BY.": LOCATE 13,22: PRINT"FINANCIAL STATEMENT IS BEING PRINTED."
1340 IF C1=S2 THEN GOTO 1530  'EOF
1350 GOSUB 3410  'READ G/L
1360 IF I1=0 THEN GOTO 1340  'INACTIVE ACCT
1370 IF F70=1 THEN GOSUB 2140  'CHK FOR CONTRA
1380 IF F30=1 THEN GOTO 1340  '1=CONTRA
1390 GOSUB 2200  'ACCT. BAL.
1400 IF C3#=0# THEN GOTO 1340  'SKIP 0 VALS
1410 IF F70=1 THEN GOSUB 2170  'PRI HAVE CONTRA PRINT
1420 IF K1 => 4 AND K1 < 8 THEN GOTO 1470
1430 IF I1$ <> T7$ THEN T7$=I1$: K9=0
1440 IF I1$="SALES                    " THEN K1=1: GOSUB 4630: GOTO 1340
1450 IF I1$="PURCHASES                " THEN K1=2: GOSUB 4940:GOTO 1340
1460 IF I1$="OPERATING EXPENSES       " THEN K1=3: GOSUB 5340: GOTO 1340
1470 IF I1$="OTHER REVENUES AND GAINS " THEN K1=4: GOSUB 5650: GOTO 1340
1480 IF I1$="OTHER EXPENSES AND LOSSES" THEN K1=5: GOSUB 5650: GOTO 1340
1490 IF I1$="EXTRAORDINARY GAINS      " THEN K1=6: GOSUB 5650: GOTO 1340
1500 IF I1$="EXTRAORDINARY LOSSES     " THEN K1=7: GOSUB 5650: GOTO 1340
1510 IF I1$="INCOME TAX EXPENSE       " THEN K1=8: GOSUB 6100: GOTO 1340
1520 CLS: LOCATE 10,1: PRINT"LOGIC ERROR.  PROCESSING TERMINATED.": END
1530 IF F6=0 THEN GOSUB 4730  'PRINT SALES TOT
1540 IF F8=0 THEN GOSUB 5040  'PRINT COGS
1550 IF F9=0 THEN GOSUB 5450  'PRINT TOT OP EXP &O0INC FROM PRI OPS
1560 IF K1 > 3 AND K1 < 8 THEN GOSUB 5830   'PRINT OTHR INC &O0 EXP TOTS
1570 GOSUB 5990  'PRINT INC TX EXP &O0UNDERLINE
1580 P1=56: GOSUB 3810: LPRINT  'UNDERLINE &O0SPC DWN
1590 LPRINT
1600 C22#=C15# + (C18#+C19#+C21#): I2#=C22#  'C22#=N/P
1610 IF I2# < 0# THEN I2#=I2# * -1#
1620 GOSUB 3720  'SPC FOR $
1630 I2#=C22#: I2#=I2# * -1#  'CHG SIGN
1640 LPRINT"NET INCOME" SPC(22) SPC(P1);: LPRINT USING FORMAT3$;I2#;
1650 C17#=C22#: GOSUB 6270  'COMPUTE %
1660 LPRINT SPC(1);: LPRINT USING "###.#-";F71;: LPRINT"%";
1670 P1=56: GOSUB 3810: LPRINT  'UNDERLINE
1680 LPRINT SPC(P1) STRING$(14,"-"): CLOSE #2
1690 OPEN "R",2,"INVPRO.FIL",23
1700 FIELD #2,1 AS V1$,8 AS V2$,8 AS V3$,6 AS V4$
1710 LSET V1$="1": LSET V2$=MKD$(C12#): LSET V3$=MKD$(C22#): LSET V4$=T11$  'C12#=END INV C22#=PROFT T11$=END DATE
1720 PUT #2,1: FOR I = 1 TO 10: LPRINT: NEXT I: CLS: LOCATE 1,10
1860 RUN "DAILY.BAS": END
1870 ' PRINT PRIMARY ACCOUNT THAT HAS A CONTRA
1880 I2#=C3#: IF I2# < 0# THEN I2#=I2# * -1#
1890 GOSUB 3660  'SPACE FOR $0!
1900 F7#=C3#  'SAVE C3 TO COMPUTE PRI - CONTRA.
1910 IF K1=1 THEN GOSUB 3780  'SET C3# IF CR
1920 GOSUB 4460  'CHK PAG SKP
1930 IF K9 = 1 THEN LPRINT   'K9=0 IF 1ST LINE OF PRNT
1940 IF K1 <> 1 THEN GOTO 1960  'PAST COGS
1950 LPRINT I2$ SPC(2) SPC(P1);: LPRINT USING FORMAT3$;C3#;: GOTO 1970 'PROF
1960 LPRINT SPC(2) I2$ SPC(P1);: LPRINT USING FORMAT3$;C3#; 'PRINT PRI ACCT
1970 F2=C1: F1=D(C11)  'SAVE C1 FOR NEXT READ
1980 ' CONTRA(S)
1990 FOR V = 1 TO C(C11)
2000 C1=B(F1)-1: F1=F1+1  'SET TO POSITION IN D( WHERE CONTRA STARTS IN B(
2010 GOSUB 3410   'GET CONTRA
2020 GOSUB 2200   'ACCT. BAL.
2030 F7#=F7#+C3#  'PRI - CONTRA.
2040 ' PRINT CONTRA(S)
2050 I2#=C3#: IF I2# < 0# THEN I2#=I2# * -1#
2060 GOSUB 3660   'LNGTH FOR $0!
2070 IF K1=1 THEN GOSUB 3780  'SET C3# IF CR
2080 GOSUB 4460
2090 IF K9=1 THEN LPRINT
2100 IF K1 <> 1 THEN GOTO 2120
2110 LPRINT I2$ SPC(2) SPC(P1);: LPRINT USING FORMAT3$;C3#;: GOTO 2130 'CONT
2120 LPRINT SPC(2) I2$ SPC(P1);: LPRINT USING FORMAT3$;C3#;
2130 NEXT V: K9=1: C1=F2: RETURN
2140 F1=0: F30=0: FOR I=1 TO F52  'F52=# CONTRAS
2150 IF C1=B(I) THEN F1=I: I=F52: F30=1
2160 NEXT I: RETURN
2170 F1=0: F30=0: FOR I = 1 TO F51 'F51=# PRI
2180 IF C1=A(I) THEN C11=I: I=F51: F30=1
2190 NEXT I: RETURN
2200 D1#=I3#+I5#  'D1#=SUM PERIOD DR
2210 D2#=(I4#+I6#) * -1#   'D2#=SUM PERIOD CR
2220 IF I4$="D" OR I4$="2" THEN C3#=D1#+D2# ELSE C3#=D2#+D1#   'C3#=ACCT BAL
2230 RETURN
2240 PRINT"ENTER `Y' FOR `YES' OR `N' FOR `NO'.";: GOSUB 3550: ROW=13: COLUMN=40: LENGTH=1: GOSUB 6410
2250 IF I8$="Y" OR I8$="y" OR I8$="N" OR I8$="n" THEN GOTO 2270
2260 LOCATE P1,1: GOTO 2240
2270 RETURN
2280 T5$=T4$: F4=10: F5=F5+1: LPRINT: LPRINT: LPRINT SPC(70) "PAGE " F5: LPRINT
2290 T4$=T1$: GOSUB 2320: LPRINT SPC(C9) T1$: T4$=H2$: GOSUB 2320: LPRINT SPC(C9) H2$: T4$=T3$
2300 LPRINT SPC(22) "FOR PERIOD " LEFT$(T3$,2) "/" MID$(T3$,3,2) "/" RIGHT$(T3$,2)  " THROUGH " LEFT$(T6$,2) "/" MID$(T6$,3,2) "/" RIGHT$(T6$,2)
2310 FOR I = 1 TO 3: LPRINT: NEXT I: T4$=T5$: RETURN
2320 C7=LEN(T4$): C9=CINT(C7): C9=40-(C9/2): C9=CINT(C9): RETURN
2330 'GET PRI/CONTRAS
2340 F70=0: CLS: LOCATE 5,1
2350 PRINT"THE PURPOSE OF THESE INSTRUCTIONS IS TO EXPLAIN THE MEANING OF   `PRIMARY'"
2360 PRINT"AND  `CONTRA'  ACCOUNTS.  YOU SHOULD UNDERSTAND THESE INSTRUCTIONS BEFORE YOU"
2370 PRINT"CONTINUE.": PRINT
2380 PRINT"A  `CONTRA'  ACCOUNT IS AN ACCOUNT WHOSE BALANCE IS SHOWN ON THE INCOME"
2390 PRINT"STATEMENT AS EITHER AN ADDITION TO OR A SUBTRACTION FROM ANOTHER ACCOUNT."
2400 PRINT"FOR EXAMPLE, THE BALANCE OF THE ACCOUNT `PURCHASE RETURNS AND ALLOWANCES' IS"
2410 PRINT"SHOWN ON THE INCOME STATEMENT AS A SUBTRACTION FROM THE ACCOUNT `PURCHASES'."
2420 PRINT"'PURCHASE RETURNS AND ALLOWANCES' IS THE   *** CONTRA ***   ACCOUNT AND"
2430 PRINT"'PURCHASES' IS THE   *** PRIMARY ***   ACCOUNT.  IT IS IMPORTANT THAT YOU "
2440 PRINT"UNDERSTAND THE MEANING OF `PRIMARY' AND `CONTRA' ACCOUNTS BEFORE YOU CONTINUE."
2450 PRINT"YOU CAN IDENTIFY `PRIMARY' AND `CONTRA' ACCOUNTS, AS WELL AS THEIR ACCOUNT"
2460 PRINT"NUMBERS,  FROM A TRIAL BALANCE OR A LISTING OF ACTIVE ACCOUNTS."
2470 PRINT"IN THE QUESTIONS THAT FOLLOW THESE INSTRUCTIONS, YOU WILL BE ASKED TO"
2480 PRINT"ENTER THE ACCOUNT NUMBERS OF PRIMARY AND CONTRA ACCOUNTS."
2490 PRINT: GOSUB 3560
2500 CLS: LOCATE 10,1
2510 PRINT"DOES THE INCOME STATEMENT INCLUDE ANY CONTRA ACCOUNTS?"
2520 P1=13: LOCATE P1,1: GOSUB 2240
2530 IF I8$="N" OR I8$="n" THEN GOTO 3320
2540 CLS: LOCATE 10,1: F70=1
2550 PRINT"ENTER THE QUANTITY OF   *** PRIMARY ***   ACCOUNTS THAT HAVE  CONTRA"
2560 PRINT"ACCOUNTS.  YOU SHOULD DETERMINE THIS QUANTITY BY REVIEWING A CURRENT TRIAL"
2570 PRINT"BALANCE OR A LISTING OF ACTIVE ACCOUNTS.": PRINT
2580 PRINT"ENTER THE QUANTITY OF PRIMARY ACCOUNTS NOW.  IF YOU HAVE MADE A MISTAKE AND"
2590 PRINT"WISH TO INDICATE THAT THERE ARE NO PRIMARY ACCOUNTS WITH CONTRA ACCOUNTS,"
2600 PRINT"ENTER A ZERO (0).";: GOSUB 3550: ROW=16: COLUMN=20: LENGTH=2: GOSUB 6410
2610 IF I8$ < "0" THEN F1=1: GOTO 2630
2620 GOSUB 3330
2630 IF F1=1 THEN LOCATE 16,20: PRINT SPACE$(2): LOCATE 16,1:  GOTO 2600
2640 C6=VAL(I8$)
2650 IF C6=0 THEN F70=0: GOTO 3320
2660 IF C6 < 21 THEN CLS: GOTO 2680
2670 LOCATE 17,1: GOSUB 3370: LOCATE 18,1:PRINT"LIMIT IS 20 PRIMARY ACCOUNTS.": LOCATE 19,1: GOSUB 3560: GOTO 2540
2680 C10=C6  'SAVE INPUT FOR # PRIMARY ACCTS
2690 T2$="PRIMARY": CLS: GOSUB 4380
2700 F50=10: F51=0: F52=0: F53=0  'F51=PRIMARY CTR. F52=CONTRA CTR.
2710 FOR I = 1 TO C10: F50=F50+1
2720 F50=F50+1
2730 LOCATE F50,65: PRINT SPACE$(2): LOCATE F50,1: PRINT"ENTER THE ACCOUNT NUMBER FOR   **** PRIMARY ****  ACCOUNT ";I;".  ";: GOSUB 3550: ROW=F50: COLUMN=65: LENGTH=4: GOSUB 6410
2740 GOSUB 3380  'CHK FOR NONNUMS
2750 IF F1=1 OR I8$ < "1" THEN GOTO 2730
2760 F51=F51+1: A(F51)=C6 'PRI ACCT#
2770 ' INPUT CONTRAS
2780 LOCATE F50+5,1
2790 PRINT"ENTER THE QUANTITY OF CONTRA ACCTS. FOR THE ABOVE PRIMARY ACCT. (LIMIT 2).";: GOSUB 3550: ROW=F50+5: COLUMN=76: LENGTH=1: GOSUB 6410
2800 GOSUB 3330
2810 IF F1=1 OR I8$ < "1" THEN LOCATE F50+5,71: PRINT SPACE$(1): GOTO 2780
2820 C6=VAL(I8$): IF (C6 < 1) OR (C6 > 2) THEN F1=1: GOTO 2810
2830 F53=F53+1: C(F53)=C6  'C(=QTY CONTRAS
2840 LOCATE 16,1: PRINT SPACE$(80)
2850 ' SAVE CONTRA ACCT. #S
2860 D(I)=F52+1
2870 FOR Y = 1 TO C(F53): F50=F50+1
2880 LOCATE F50,1: PRINT SPACE$(80): LOCATE F50,1: PRINT"ENTER THE ACCOUNT NUMBER FOR   **** CONTRA  ****  ACCOUNT ";Y;".  ";: GOSUB 3550: ROW=F50: COLUMN=65: LENGTH=4: GOSUB 6410
2890 GOSUB 3380
2900 IF F1=1 OR I8$ < "1" THEN GOTO 2880
2910 F52=F52+1: B(F52)=C6  'STORE CONTRA
2920 NEXT Y
2930 F50=11: FOR Y = 1 TO 3: F50=F50+1: LOCATE F50,1: PRINT SPACE$(80): NEXT Y:  F50=10: LOCATE 17,1: PRINT SPACE$(80): NEXT I
2940 C10=C10 * 2  'SET C10 TO # INPUTS IN  A(
2950 CLS: LOCATE 5,1
2960 PRINT"YOUR INPUT WILL BE DISPLAYED FOR YOUR REVIEW.  ACCOUNT NUMBERS, AS WELL AS"
2970 PRINT"ACCOUNT TITLES WILL BE DISPLAYED.  IT IS VERY IMPORTANT THAT THE INPUT BE"
2980 PRINT"ABSOLUTELY CORRECT BEFORE THE PROGRAM USES IT TO PREPARE THE INCOME STATEMENT."
2990 PRINT"OTHERWISE, THE STATEMENT MAY BE INCORRECTLY PREPARED.  SO, REVIEW THE DATA"
3000 PRINT"V-E-R-Y  CAREFULLY AND NOTE ANY ERRORS.": PRINT
3010 PRINT"TO THE LEFT ON THE SCREEN WILL BE ONE PRIMARY ACCOUNT,  WITH THE RELATED CONTRA"
3020 PRINT"ACCOUNT(S) TO THE RIGHT.  STUDY THE DISPLAYED DATA VERY   C-A-R-E-F-U-L-L-Y"
3030 PRINT"AND NOTE ANY INPUT ERRORS.  STUDY THE ACCOUNT TITLES, AS WELL AS THE ACCOUNT"
3040 PRINT"NUMBERS.  IT IS EXTREMELY IMPORTANT THAT YOUR INPUT FOR THE PRIMARY AND CONTRA"
3050 PRINT"ACCOUNTS BE ABSOLUTELY CORRECT.": PRINT
3060 PRINT"AFTER YOU FINISH YOUR REVIEW, YOU WILL BE ASKED TO INDICATE WHETHER YOUR INPUT"
3070 PRINT"WAS OR WAS NOT CORRECT.  IF YOU INDICATE THAT YOUR INPUT WAS INCORRECT, THE"
3080 PRINT"COMPUTER WILL ASK YOU TO REENTER YOUR DATA, FROM THE BEGINNING.":PRINT: GOSUB 3560
3090 F11=0: GOSUB 4180: F50=0  'PRINT TOP OF SCREEN + HEADINGS
3100 FOR P = 1 TO F51  'F51=QTY OF PRIMARY ACCTS
3110 GET #1,A(P): GOSUB 3420: W1=CVS(X5$): I20$=I2$  'GET PRIMARY
3120 ' DISPLAY PRIMARY
3130 IF F11=2 THEN F11=0: P1=13: LOCATE 22,1: GOSUB 3560: GOSUB 4180
3140 F11=F11+1: P1=P1+2: LOCATE P1,1: PRINT SPACE$(80): LOCATE P1,1
3150 PRINT SPC(1);: PRINT USING "####";W1;: PRINT SPC(3) I2$;
3160 ' DISPLAY CONTRAS
3170 FOR Q = 1 TO C(P): F50=F50+1
3180 GET #1,B(F50): GOSUB 3420: W2=CVS(X5$)   'GET CONTRA
3190 IF Q > 1 THEN PRINT SPACE$(38);
3200 PRINT SPC(1);: PRINT USING "####";W2;: PRINT SPC(3) I2$: P1=P1+1
3210 NEXT Q
3220 NEXT P
3230 LOCATE 22,1: PRINT"DISPLAY IS COMPLETE.  PRESS ANY KEY TO CONTINUE.": GOSUB 3570
3240 CLS: LOCATE 10,1
3250 PRINT"WERE ALL PRIMARY / CONTRA ACCOUNTS CORRECT AS DISPLAYED?  (IF YOU INDICATE"
3260 PRINT"THAT THEY WERE  N-O-T  CORRECT, YOU WILL BE ASKED TO ENTER THE DATA AGAIN.)": PRINT
3270 PRINT"ENTER `Y' FOR `YES' (CORRECT) OR `N' FOR `N0' (INCORRECT).";: ROW=13: COLUMN=62: LENGTH=1: GOSUB 6410
3280 IF I8$= "Y" OR I8$="y" OR I8$= "N" OR I8$="n" THEN GOTO 3300
3290 LOCATE 13,62: PRINT SPACE$(1): LOCATE 13,1: GOTO 3270
3300 IF I8$= "N" OR I8$="n" THEN GOTO 2340
3310 F1=0
3320 RETURN
3330 F1=0
3340 FOR K = 1 TO LEN(I8$)
3350 IF MID$(I8$,K,1) < "0" OR MID$(I8$,K,1) > "9" THEN F1=1
3360 NEXT K: RETURN
3370 PRINT"ENTRY IS INCORRECT.  TRY AGAIN.": RETURN
3380 F1=0: GOSUB 3340: IF F1=1 THEN GOTO 3400 'CHK NONNUMS
3390 C6=VAL(I8$): GOSUB 3930
3400 RETURN
3410 C1=C1+1: GET 1,C1
3420 I1$=X1$  'ACCOUNT CLASSIFICATION
3430 I2$=X2$  'ACCOUNT TITLE
3440 Z1$=X3$  'LAST TRANS DATE
3450 I1=VAL(X4$)   'ACCT STATUS (0=INACTIVE,1=ACTIVE)
3460 Z2$=X5$  'ACCOUNT NUMBER
3470 I2=VAL(X7$)  'ACCT TYPE CODE
3480 I4$=X8$  'DR AND CR INDICATOR.D=DR, C=CR
3490 Z3$=X9$  'POSTING REF.
3500 I3#=CVD(Y1$)   'OPENING DEBIT
3510 I4#=CVD(Y2$)  'OPENING CREDIT
3520 I5#=CVD(Y3$)  'PERIOD DEBITS
3530 I6#=CVD(Y4$)  'PERIOD CREDITS
3540 RETURN
3550 DEF SEG=0: POKE 1050, PEEK(1052): RETURN
3560 PRINT"PRESS ANY KEY TO CONTINUE."
3570 GOSUB 3550
3580 K$=INKEY$
3590 IF K$="" THEN GOTO 3580
3600 RETURN
3610 OPEN "PASACT.FIL" FOR INPUT AS #2
3620 OPEN "R",1,"GENLEG.FIL",111
3630 FIELD #1,25 AS X1$,30 AS X2$,6 AS X3$,1 AS X4$,4 AS X5$,2 AS X7$,1 AS X8$,10 AS X9$,8 AS Y1$,8 AS Y2$,8 AS Y3$,8 AS Y4$
3640 RETURN
3650 ' OTHER THAN EXTENDED PRINT
3660 IF I2# > 999999.99# THEN P1=7: FORMAT3$="###########,.##-": GOTO 3700
3670 IF I2# > 999.99# THEN P1=11: FORMAT3$="#######,.##-": GOTO 3700
3680 IF I2# > 0.99# THEN P1=16: FORMAT3$="###.##-": GOTO 3700
3690 IF I2# < 1# THEN P1=19: FORMAT3$=".##-"
3700 RETURN
3710 ' EXTENDED PRINT
3720 IF I2# > 999999.99# THEN P1=23: FORMAT3$="###########,.##-": GOTO 3760
3730 IF I2# > 999.99# THEN P1=27: FORMAT3$="#######,.##-": GOTO 3760
3740 IF I2# > 0.99# THEN P1=32: FORMAT3$="###.##-": GOTO 3760
3750 IF I2# < 1# THEN P1=35: FORMAT3$=".##-"
3760 RETURN
3770 ' NORMAL CREDIT BALANCE.
3780 IF C3# < 0# THEN C3#=C3# * -1#: GOTO 3800
3790 IF C3# > 0# THEN C3#=C3# * -1#
3800 RETURN
3810 OPEN "LPT1:" AS #3
3820 WIDTH #3,255
3830 PRINT #3,
3840 WIDTH #3,80
3850 PRINT #3, SPC(P1) STRING$(14,"_");
3860 CLOSE #3
3870 RETURN
3880 LOCATE 2,1
3890 PRINT"BECAUSE THE SCREEN IS FULL, THE INFORMATION BELOW WILL BE ERASED (FROM THE"
3900 PRINT"SCREEN ONLY) TO MAKE ROOM FOR YOUR ADDITIONAL INPUT. NOTE YOUR LAST INPUT SO"
3910 PRINT"YOU WILL KNOW WHERE TO CONTINUE ONCE THE DATA IS ERASED FROM THE SCREEN.": PRINT: GOSUB 3560: CLS: RETURN
3920 ' CHECK PRIMARY / CONTRA INPUT
3930 IF C6 < 1 THEN F1=1: GOTO 4160
3940 IF C6 >= S1 AND C6 <= S2 THEN GOTO 3990   'CHK IF ACCT > B/S ACCTS
3950 GOSUB 4170: F1=1: LOCATE 2,1: GOSUB 3370: PRINT
3960 PRINT"YOUR ENTRY FOR THE ACCOUNT NUMBER WAS ";C6;".  THAT ACCOUNT NUMBER IS NOT"
3970 PRINT"INCLUDED IN THE INCOME STATEMENT.  STUDY A CURRENT TRIAL BALANCE AND CORRECT"
3980 PRINT"YOUR INPUT.": PRINT: GOSUB 3560: GOSUB 4170: GOSUB 8000: GOSUB 4380: GOTO 4160
3990 FOR M = 1 TO F51  'CHK FOR PREV INPUT - PRI ACCTS
4000 IF C6=A(M) THEN F1=1: M=F51
4010 NEXT M
4020 IF F1=1 THEN GOTO 4070
4030 FOR M = 1 TO F52  'CHK FOR PREV INPUT - CONTRAS
4040 IF C6=B(M) THEN F1=1: M=F52
4050 NEXT M
4060 IF F1=0 THEN GOTO 4110
4070 GOSUB 4170: LOCATE 2,1: GOSUB 3370: PRINT
4080 PRINT"YOU JUST ENTERED THE SAME ACCOUNT NUMBER A SECOND TIME.  A PRIMARY OR CONTRA"
4090 PRINT"CONTRA ACCOUNT SHOULD BE IDENTIFIED ONE TIME ONLY.  STUDY A CURRECT TRIAL"
4100 PRINT"BALANCE AND CORRECT YOUR INPUT.": PRINT: GOSUB 3560: GOSUB 4170: GOSUB 8000: GOSUB 4380: GOTO 4160
4110 GET #1,C6: GOSUB 3420: GOSUB 2200  'CHK FOR ACTIVE ACCOUNT & ACCT. BAL.
4120 IF I1 = 1 AND C3# <> 0# THEN GOTO 4160 'GOOD REC-ACTIVE AND BAL <> 0
4130 GOSUB 4170: F1=1: LOCATE 2,1: GOSUB 3370: PRINT
4140 PRINT"ERROR - INACTIVE ACCOUNT OR ACCOUNT WITH ZERO BALANCE.  YOUR INPUT CALLS FOR"
4150 PRINT"ACCT. NUMBER ";C6;".  STUDY A CURRENT TRIAL BALANCE AND CORRECT YOUR INPUT.": GOSUB 3560: GOSUB 4170: GOSUB 8000: GOSUB 4380
4160 RETURN
4170 FOR W = 1 TO 10: LOCATE W,1: PRINT SPACE$(80): NEXT W: RETURN
4180 CLS: LOCATE 1,1
4190 PRINT"YOUR INPUT (WITH ACCOUNT TITLES) IS DISPLAYED BELOW.  CAREFULLY REVIEW THE"
4200 PRINT"INPUT AND NOTE ANY ERRORS.  ONE PRIMARY ACCOUNT, WITH THE ACCOUNT NUMBER AND"
4210 PRINT"TITLE, IS ON THE SCREEN TO THE LEFT.  THE RELATED CONTRA ACCOUNT(S), WITH"
4220 PRINT"ACCOUNT NUMBER(S) AND TITLES(S), IS ON THE SCREEN TO THE RIGHT."
4230 PRINT"CONSIDER IT TO BE AN INPUT ERROR IF ACCOUNT NUMBERS DO NOT CORRESPOND TO THE"
4240 PRINT"ACCOUNT TITLES.  ALSO CONSIDER IT TO BE AN INPUT ERROR IF THE DISPLAYED CONTRA"
4250 PRINT"ACCOUNT(S) DO NOT RELATE TO THE DISPLAYED PRIMARY ACCOUNT.  (IF ALL OF YOUR"
4260 PRINT"ACCOUNT NUMBERS ARE NOT SHOWN BELOW, THEY WILL APPEAR WHEN YOU PRESS A KEY"
4270 PRINT"TO CONTINUE.)
4280 LOCATE 11,1
4290 PRINT SPC(1) STRING$(10,"*") " PRIMARY ACCOUNT " STRING$(10,"*") SPC(2) STRING$(10,"*") " CONTRA ACCOUNT " STRING$(11,"*")
4300 PRINT SPC(1) "ACCT." SPC(34) "ACCT."
4310 PRINT SPC(2) "NBR." SPC(2) "ACCOUNT TITLE" SPC(20) "NBR." SPC(2) "ACCOUNT TITLE"
4320 P1=13: RETURN
4330 D1$=LEFT$(I8$,2): IF D1$ < "01" OR D1$ > "12" THEN F1=1: GOTO 4370
4340 D1$=MID$(I8$,3,2): IF D1$ < "01" OR D1$ > "31" THEN F1=1: GOTO 4370
4350 D1$=RIGHT$(I8$,2): IF D1$ < "86" THEN F1=1: GOTO 4370
4360 F1=0
4370 RETURN
4380 LOCATE 1,1
4390 PRINT"ENTER THE PRIMARY AND CONTRA ACCOUNT NUMBERS BELOW.  PAY ATTENTION TO THE TYPE"
4400 PRINT"OF INPUT THAT IS REQUESTED.  WORK FROM A CURRENT TRIAL BALANCE.  THE INPUT THAT"
4410 PRINT"YOU MAKE (BELOW) WILL BE DISPLAYED (LATER) FOR YOUR REVIEW AND APPROVAL OR"
4420 PRINT"DISAPPROVAL.  IF YOU DISAPPROVE THE INPUT, YOU WILL BE ASKED TO REENTER ALL OF"
4430 PRINT"THE DATA - STARTING AT THE POINT WHERE THE COMPUTER ASKS IF THERE ARE ANY"
4440 PRINT"PRIMARY AND CONTRA ACCOUNTS TO BE CONSIDERED.  THUS, IF YOU REJECT YOUR INPUT,"
4450 PRINT"IT WILL BE COMPLETELY ERASED FROM THE COMPUTER'S MEMORY AND YOU WILL BE GIVEN": PRINT "A FRESH START.": RETURN
4460 F4=F4+1
4470 IF F4 < 55 THEN GOTO 4510
4480 IF K9=1 THEN LPRINT: K9=0
4490 F4=66-F4: FOR U = 1 TO F4: LPRINT: NEXT U
4500 GOSUB 2280
4510 RETURN
4520 Q1=0: Q2=0: Q3=0: F1=0
4530 FOR I = 1 TO LEN(I8$)
4540 IF MID$(I8$,I,1) <> "." THEN GOTO 4580
4550 Q1=Q1+1: Q3=Q3+1: I10$=RIGHT$(I8$,3): I11$=LEFT$(I10$,1)
4560 IF I11$ <> "." THEN Q1=2: I=LEN(I8$)
4570 GOTO 4590
4580 IF MID$(I8$,I,1) < "0" OR MID$(I8$,I,1) > "9" THEN I=LEN(I8$): F1=1
4590 NEXT I
4600 IF Q1 > 1 THEN F1=1
4602 IF I8$="" OR ((Q3 > 1) OR (LEN(I8$) = 1 AND I8$=".") OR (LEN(I8$) = 2 AND LEFT$(I8$,1) = ".")) THEN F1=1
4610 RETURN
4620 ' SALES
4630 IF F30=1 THEN GOSUB 1880: F30=0: F7=1: C13#=C13# + F7#: GOTO 4710
4640 I2#=C3#: IF I2# < 0# THEN I2#=I2# * -1#
4650 C13#=C13# + C3#  'CUM SALES
4660 GOSUB 3660  'SPACE FOR $
4670 GOSUB 3780  'SET C3# IF ACCT IS CR
4680 GOSUB 4460   'CHK PG SKP
4690 IF K9=1 THEN LPRINT
4700 LPRINT I2$ SPC(2) SPC(P1);: LPRINT USING FORMAT3$;C3#;
4710 K9=1: RETURN
4720 'PRINT TOT SALES &O0COGS HEADINGS THRU BEG. INV.
4730 IF C13# = 0# AND K9=1 THEN LPRINT
4740 IF C13# = 0# THEN GOTO 4760
4750 P1=40: GOSUB 3810: LPRINT  'UNDERLINE
4760 I2#=C13#: IF I2# < 0# THEN I2#=I2# * -1#
4770 LPRINT: GOSUB 4460  'SKIP A LINE
4780 GOSUB 3720  'SPACE FOR $
4790 C3#=C13#: GOSUB 3780  'SET C3# IF ACCT IS CR
4800 IF F7=1 THEN I8$="NET REVENUE  " ELSE I8$="TOTAL REVENUE"
4810 GOSUB 4460
4820 LPRINT I8$ SPC(19) SPC(P1);: LPRINT USING FORMAT3$;C3#;
4830 IF C13# => 0# THEN F71=0 ELSE F71=100
4840 LPRINT SPC(1);: LPRINT USING "###.#-";F71;: LPRINT"%"
4850 LPRINT: LPRINT: F4=F4+2: GOSUB 4460
4852 IF INVFLAG=0 AND PURFL=0 THEN C15#=C13#: GOTO 4920  'C15#=G/P
4860 LPRINT"COST OF GOODS SOLD:"
4870 IF C16#=0# THEN GOTO 4910  'C16#=BEG INV.
4880 I2#=C16#: IF I2# < 0# THEN I2#=I2# * -1#
4890 GOSUB 3660: GOSUB 4460  'SPACE FOR $
4900 LPRINT SPC(2) "BEGINNING INVENTORY" SPC(11) SPC(P1);: LPRINT USING FORMAT3$;C16#;
4910 K9=1: C14#=0# : C14#=C14# + C16#  'CUM COGS. C16#=BEG INV
4920 RETURN
4930 'COGS
4940 IF F6=0 THEN C33#=C3#: GOSUB 4730: C3#=C33#: F6=1  'PRINT SALES TOT
4950 IF F30=1 THEN GOSUB 1880: F30=0: C14#=C14# + F7#: GOTO 5020
4960 I2#=C3#: IF I2# < 0# THEN I2#=I2# * -1#
4970 C14#=C14# + C3#
4980 GOSUB 3660  'SPACE FOR $
4990 GOSUB 4460  'CHK NXT PG
5000 IF K9=1 THEN LPRINT
5010 LPRINT SPC(2) I2$ SPC(P1);: LPRINT USING FORMAT3$;C3#;
5020 K9=1: RETURN
5030 'PRINT END OF COGS SECN
5040 IF INVFLAG=0 AND PURFL=0 THEN C15#=C13#: GOTO 5320  'C15#=G/P
5042 IF C14#=0# AND K9=1 THEN LPRINT
5050 IF C14# = 0# THEN GOTO 5160  'C14#=COGS
5060 P1=40: GOSUB 3810: LPRINT  'UNDERLINE
5070 I2#=C14#: IF I2# < 0# THEN I2#=I2# * -1#
5080 LPRINT: GOSUB 4460   'SKIP A LINE
5090 GOSUB 3660: GOSUB 4460           'SET SPACE FOR $
5100 LPRINT SPC(2) "TOTAL GOODS AVAILABLE FOR SALE" SPC(P1): LPRINT USING FORMAT3$;C14#
5110 I2#=C12#: IF I2# < 0# THEN I2#=I2# * -1#   'C12#=END INV
5120 GOSUB 3660: GOSUB 4460  'SPACE FOR $
5130 LPRINT SPC(2) "LESS: ENDING INVENTORY" SPC(8) SPC(P1);: LPRINT USING FORMAT3$;C12#;
5140 P1=40: GOSUB 3810: LPRINT  'UNDERLINE
5150 C14#=C14# - C12#      'C14#=COGS. C12#=END INV
5160 I2#=C14#: IF I2# < 0# THEN I2#=I2# * -1#
5170 GOSUB 3720  'SPACE FOR $
5180 LPRINT: GOSUB 4460      'SKIP A LINE
5190 LPRINT SPC(6) "COST OF GOODS SOLD" SPC(8) SPC(P1);: LPRINT USING FORMAT3$;C14#;
5200 C17#=C14#: GOSUB 6270: F71=F71 * -1 'COMPUTE % & REVERSE SIGN
5210 LPRINT SPC(1);: LPRINT USING "###.#-";F71;: LPRINT"%";
5220 P1=56: GOSUB 3810: LPRINT: GOSUB 4460    'UNDERLINE
5230 LPRINT: GOSUB 4460          'SKIP A LINE
5240 C15#=C13# + C14#   'C15#=GP. C13#=SALES. C14#=COGS
5250 I2#=C15#: IF I2# < 0# THEN I2#=I2# * -1#
5260 GOSUB 3720: GOSUB 4460     'SET SPACE FOR $
5270 I2#=C15#: I2#=I2# * -1#  'CHG SIGN
5280 LPRINT "GROSS MARGIN ON SALES" SPC(11) SPC(P1);: LPRINT USING FORMAT3$;I2#;
5290 C17#=C15#: GOSUB 6270        'COMPUTE %
5300 LPRINT SPC(1);: LPRINT USING "###.#-";F71;: LPRINT"%"
5310 LPRINT: LPRINT"OPERATING EXPENSES:": P4=P4+2: C18#=0#
5320 RETURN
5330 'OP EXP
5340 IF INVFLAG=0 AND PURFL=0 AND FIRSTEXP=0 THEN C99#=C3#: GOSUB 4730: GOSUB 5310:   C3#=C99#: F6=1: F8=1: FIRSTEXP=1: GOTO 5360
5341 IF INVFLAG=0 AND PURFL=0 THEN GOTO 5360
5342 IF F6=0 THEN C33#=C3#: GOSUB 4730: C3#=C33#: F6=1  'PRINT SALES TOT
5350 IF F8=0 THEN C33#=C3#: GOSUB 5040: C3#=C33#: F8=1  'PRINT COGS
5360 IF F30=1 THEN GOSUB 1880: F30=0: C18#=C18# + F7#: GOTO 5430
5370 I2#=C3#: IF I2# < 0# THEN I2#=I2# * -1#
5380 C18#=C18# + C3#   'C18#=CUM OP EXP
5390 GOSUB 3660  'SPACE FOR $
5400 GOSUB 4460  'CHK FOR NXT PAGE
5410 IF K9=1 THEN LPRINT
5420 LPRINT SPC(2) I2$ SPC(P1);: LPRINT USING FORMAT3$;C3#;
5430 K9=1: RETURN
5440 'PRINT TOT OP EXP & INCOME FROM OPS
5450 IF C18# = 0# AND K9=1 THEN LPRINT
5460 IF C18# = 0# THEN GOTO 5480   'C18#=TOT OP EXP
5470 P1=40: GOSUB 3810: LPRINT  'UNDERLINE
5480 I2#=C18#: IF I2# < 0# THEN I2#=I2# * -1#
5490 LPRINT: GOSUB 4460  'SKIP A LINE
5500 GOSUB 3720: GOSUB 4460  'SPACE FOR $
5510 LPRINT SPC(5) "TOTAL OPERATING EXPENSE" SPC(4) SPC(P1);: LPRINT USING FORMAT3$;C18#;
5520 C17#=C18#: GOSUB 6270: F71=F71 * -1   'COMPUTE % & REVERSE SIGN
5530 LPRINT SPC(1);: LPRINT USING "###.#-";F71;: LPRINT"%";
5540 P1=56: GOSUB 3810: LPRINT  'UNDERLINE
5550 LPRINT: GOSUB 4460  'SKIP A LINE
5560 I2#=C15# + C18#: IF I2# < 0# THEN I2#=I2# * -1#    'C15#=GP. C18#=TOT OP EX
5570 GOSUB 3720: GOSUB 4460  'SPACE FOR $
5580 I2#=C15# + C18#: I2#=I2# * -1#  'CHG SIGN
5590 LPRINT "INCOME FROM PRIMARY OPERATIONS" SPC(2) SPC(P1);: LPRINT USING FORMAT3$;I2#;
5600 C17#=C15# + C18#: GOSUB 6270  'COMPUTE %
5610 LPRINT SPC(1);: LPRINT USING "###.#-";F71;: LPRINT"%"
5620 IF F4 > 50 THEN GOSUB 4480  'CHK FOR SKP PAGE
5630 RETURN
5640 'OTHER REVENUE
5650 IF F6=0 THEN C33#=C3#: GOSUB 4730: C3#=C33#: F6=1  'PRINT SALES TOT
5660 IF F8=0 THEN C33#=C3#: GOSUB 5040: C3#=C33#: F8=1  'PRINT COGS
5670 IF F9=0 THEN C33#=C3#: GOSUB 5450: C3#=C33#: F9=1  'PRINT TOT OP EXP
5680 IF I1$ = F2$ THEN GOTO 5730
5690 F2$=I1$
5700 IF F4 > 50 THEN GOSUB 4480  'CHK FOR SKP PAGE
5710 LPRINT: K2=1
5720 LPRINT I1$: P4=P4+1   'PRINT ACCT CLASSI
5730 IF F30=1 THEN GOSUB 1880: F30=0: C19#=C19# + F7#: GOTO 5800 'C19#= OTHER
5740 I2#=C3#: IF I2# < 0# THEN I2#=I2# * -1#
5750 C19#=C19# + C3#   'C19#=CUM TOT
5760 GOSUB 3660: GOSUB 4460  'SPACE FOR $
5770 GOSUB 4460   'CHK FOR NXT PAGE
5780 IF K9=1 AND K2=0 THEN LPRINT
5790 LPRINT SPC(2) I2$ SPC(P1);: LPRINT USING FORMAT3$;C3#;
5800 K9=1: K2=0: RETURN
5810 '***
5820 'PRINT OTHER CAT. TOTAL
5830 I2#=C19#: IF I2# < 0# THEN I2#=I2# * -1#
5840 P1=40: GOSUB 3810   'UNDERLINE
5850 GOSUB 3720: P1=P1-22
5860 IF P1 > 0 THEN LPRINT SPC(P1);
5870 LPRINT USING FORMAT3$;C19#;
5880 C17#=C19#: GOSUB 6270: F71=F71 * -1  'COMPUTE % & REVERSE SIGN
5890 LPRINT SPC(1);: LPRINT USING "###.#-";F71;: LPRINT"%";
5900 P1=56: GOSUB 3810    'UNDERLINE
5910 C20#=C15# + (C18# + C19#)    'C20#=NET BEFORE INC-TX.C15#=G/P.C18#=TOT OP EXP.C19#=TOT OTHER
5920 I2#=C20#: IF I2# < 0# THEN I2#=I2# * -1#
5930 GOSUB 3720: LPRINT: P4=P4+1: GOSUB 4460  'SPACE FOR $
5940 I2#=C20#: I2#=I2# * -1#
5950 LPRINT"INCOME BEFORE INCOME TAX" SPC(8) SPC(P1);: LPRINT USING FORMAT3$;I2#;
5960 C17#=C20#: GOSUB 6270   'COMPUTE %
5970 LPRINT SPC(1);: LPRINT USING "###.#-";F71;: LPRINT "%"
5980 RETURN
5990 I2#=C21#: IF I2# < 0# THEN I2#=I2# * -1#
6000 IF K1 <> 8 THEN GOTO 6020
6010 P1=40: GOSUB 3810: LPRINT    'UNDERLINE
6020 GOSUB 3720: GOSUB 4460   'SET SPACE FOR $
6030 IF K9=1 THEN LPRINT
6040 LPRINT"INCOME TAX EXPENSE" SPC(14) SPC(P1);: LPRINT USING FORMAT3$;C21#;
6050 C17#=C21#: GOSUB 6270: F71=F71 * -1   'COMPUTE % & REVERSE SIGN
6060 LPRINT SPC(1);: LPRINT USING "###.#-";F71;: LPRINT"%";
6070 RETURN
6080 '***
6090 'INCOME TAX EXP
6100 IF F6=0 THEN C33#=C3#: GOSUB 4730: C3#=C33#: F6=1  'PRINT SALES TOT
6110 IF F8=0 THEN C33#=C3#: GOSUB 5040: C3#=C33#: F8=1  'PRINT COGS
6120 IF F9=0 THEN C33#=C3#: GOSUB 5450: C3#=C33#: F9=1  'PRINT TOT OP EXP
6130 IF F10=0 THEN C33#=C3#: GOSUB 5830: C3#=C33#: F10=1 'PRINT OTHER
6140 IF I1$ = F2$ THEN GOTO 6180
6150 F2$=I1$
6160 IF F4 > 50 THEN GOSUB 4480
6170 LPRINT I1$: P4=P4+1
6180 IF F30=1 THEN GOSUB 1880: F30=0: C21#=C21# + F7#: GOTO 6250 'C21#=TOT INC/TX
6190 I2#=C3#: IF I2# < 0# THEN I2#=I2# * -1#
6200 C21#=C21# + C3#  'C21#=TOT INC TX EXP
6210 GOSUB 3660  'SET SPACE FOR $
6220 GOSUB 4460   'CHK FOR NXT PAGE
6230 IF U9= 1 THEN LPRINT  'SPACE DOWN
6240 LPRINT SPC(2) I2$ SPC(P1);: LPRINT USING FORMAT3$;C3#;
6250 U9=1: RETURN
6260 'COMPUTE %
6270 IF C17# = 0# OR C13# => 0# THEN F71=0: GOTO 6300
6280 F71# = (C17#/C13#) * 1000#
6282 IF F71# > 32767# OR F71# < -32767# THEN F71 = 0: GOTO 6300
6290 F71 = (CINT(F71#))/10#
6300 RETURN
6310 IF ERR=53 THEN GOTO 6340
6320 IF ERR=24 OR ERR=25 OR ERR=27 THEN GOTO 6370
6330 ON ERROR GOTO 0
6340 CLS: LOCATE 10,2
6350 PRINT"GENERAL LEDGER DATA FILES NOT FOUND. PRESS ANY KEY AND YOU WILL BE RETURNED"
6360 PRINT"TO THE DAILY MENU.": GOSUB 3570: GOTO 6640
6370 CLS: LOCATE 10,2
6380 PRINT"CHECK YOUR PRINTER.  IT IS EITHER NOT TURNED ON OR IT IS OUT OF PAPER."
6390 PRINT"PRESS ANY KEY WHEN YOU ARE READY TO CONTINUE.": GOSUB 3570
6400 CLS: RESUME
6410 GOSUB 3550: I8$=""
6420 FOR X = 1 TO LENGTH
6430 I8$=I8$ + CHR$(254)
6440 NEXT X
6450 LOCATE ROW,COLUMN
6460 PRINT I8$;
6470 POINTER = 1: A$=" "
6480 WHILE (ASC(A$) <> 13)
6490 A$ = INPUT$(1)
6500 IF (POINTER > LENGTH) AND (ASC(A$) = 13) THEN GOTO 6620
6510 IF (POINTER > LENGTH) AND (ASC(A$) = 8) THEN GOTO 6570
6520 IF (POINTER > LENGTH) THEN BEEP: BEEP: BEEP: GOTO 6620
6530 IF (ASC(A$) >= 32) THEN MID$(I8$,POINTER,1) = A$: POINTER = POINTER +1:  GOTO 6600
6540 IF (POINTER = 1) AND (ASC(A$) = 8) THEN BEEP: BEEP: BEEP: GOTO 6600
6550 IF (ASC(A$) <> 8) THEN GOTO 6590
6560 IF MID$(I8$,POINTER,1) = CHR$(254) THEN
6570    MID$(I8$,POINTER-1,1) = CHR$(254)
6580    POINTER = POINTER -1
6590 IF (ASC(A$) = 13) THEN I8$ = MID$(I8$,1,POINTER-1): POINTER = LENGTH + 1
6600 LOCATE ROW,COLUMN
6610 PRINT I8$
6620 WEND
6630 RETURN
6640 CLOSE: FOR I = 1 TO 10: LPRINT: NEXT I: RUN "DAILY.BAS": END
6998 'CHK IF ACTIVE PURCHASES IN G/L.
7000 CLASSI$=" ": PURFL=0: F1=S1-1
7010 WHILE CLASSI$ <> "PURCHASES                "
7020 F1=F1+1: GET #1,F1: CLASSI$=X1$
7030 WEND
7040 F1=F1-1: CLASSI$=" "
7050 WHILE CLASSI$ <> "OPERATING EXPENSES       "
7060 F1=F1+1: GET #1,F1: CLASSI$=X1$ :F1$=X4$: IF F1$="1" THEN  PURFL=1
7070 WEND
7080 F1$=" "
7090 RETURN
8000 LOCATE 1,1
8010 PRINT"PERHAPS YOU WOULD LIKE TO START AGAIN AND REENTER ALL OF YOUR INFORMATION"
8020 PRINT"ABOUT PRIMARY AND CONTRA ACCOUNTS - AT THE POINT WHERE CPA-LEDGER ASKS YOU"
8030 PRINT"WHETHER OR NOT THERE ARE ANY PRIMARY AND CONTRA ACCOUNTS.": PRINT
8040 PRINT"DO YOU WISH TO START AGAIN?  ENTER `Y' FOR `YES' OR `N' FOR `NO'."
8050 ROW=5: COLUMN=69: LENGTH=1: GOSUB 6410
8060 IF I8$="Y" OR I8$="y" OR I8$="N" OR I8$="n" THEN GOTO 8080 ELSE GOTO 8050
8080 IF I8$="Y" OR I8$="y" THEN GOTO 1320
8090 LOCATE 1,1: FOR U= 1 TO 5: LOCATE U,1: PRINT SPACE$(80): NEXT U
9000 RETURN
```
{% endraw %}

## POST.BAS

{% raw %}
```bas
500  ' COPYRIGHT 1986 TRONOLONE & FOSTER, PC
1000 REM POST.BAS
1010 CLEAR: KEY OFF: CLS: ON ERROR GOTO 4560
1090 OPEN "R",1,"INVPRO.FIL",23
1100 FIELD #1,1 AS V1$,8 AS V2$,8 AS V3$,6 AS V4$
1110 LSET V1$="0": LSET V2$=MKD$(0#): LSET V3$=MKD$(0#): LSET V4$="NODATE"
1120 PUT #1,1: CLOSE #1  'CLEAR INVPRO.FIL
1130 GOSUB 2090  'OPEN FILES
1140 INPUT #3,F1: FOR I = 1 TO F1-1: INPUT #3,B20: IF I <> 4 THEN GOTO 1160
1142 IF B20=0 THEN GOTO 1170
1150 DIM B2(B20): FOR J = 1 TO B20: INPUT #3,F2: B2(J)=F2: NEXT J: GOTO 1170
1160 NEXT I
1170 INPUT #3,F1: INPUT #3,M3: INPUT #3,T1$: F1=0: F2=0
1180 CLS: LOCATE 8,1
1190 PRINT"ENTER TODAY'S DATE. (USE FORMAT MMDDYY.  I.E. JUNE 8, 1984 = 060884.)"
1200 ROW=8: COLUMN=72: LENGTH=6: GOSUB 4670
1210 IF LEFT$(I8$,1)=" " OR I8$ < "0" OR LEN(I8$) < 6 THEN GOTO 1200
1220 F2=1: GOSUB 2720: IF F1 <> 0 THEN GOTO 1200
1230 GOSUB 3230: IF F1 <> 0 THEN GOTO 1200
1240 I3$=I8$: CLS: LOCATE 12,31: PRINT"PLEASE STAND BY.": GOSUB 3370
1250 'DISPLAY START MESSAGES AND INSTRUCTIONS.
1260 LOCATE 12,1: PRINT SPACE$(80): GOSUB 3580: IF I8$="N" OR I8$="n" THEN GOTO 4880
1270 'M1 SETS LIMIT ON DEBIT AND CREDIT POSTINGS UNDER ONE ENTRY.
1280 M1=30: DIM A1(M1): DIM A2#(M1): DIM A7$(M1)
1290        DIM A3(M1): DIM A4#(M1): DIM A10$(M1)
1300        DIM A11$(M1): DIM B4$(M1)
1310 FORMAT2$="####"
1320 FORMAT1$="###########,.##"
1330 FORMAT4$="###############,.##"
1340 CLS: GOSUB 4040: GOSUB 4460: GOSUB 4480
1350 'LOCATE LINE FOR POSTING.
1360  P1=14
1370 LOCATE P1,11: IF F3=1 THEN GOTO 1470
1380 'TRANS. DATE
1390 GOSUB 4660: ROW=P1: COLUMN=12: LENGTH=6: GOSUB 4670
1400 IF F11=1 AND I8$="S" THEN I7$=J2$: GOTO 1450
1410 IF LEFT$(I8$,1)=" " OR I8$ < "0" THEN GOTO 1390
1420 F2=1: GOSUB 2720: IF F1 <> 0 THEN GOTO 1390
1430 GOSUB 3230: IF F1 <> 0 THEN GOTO 1390
1440 I7$=I8$: J2$=I8$
1450 LOCATE P1,12: PRINT SPACE$(6): LOCATE P1,11: PRINT I7$
1460 'ACCT NBR
1470 GOSUB 4660: ROW=P1: COLUMN=22: LENGTH=4: GOSUB 4670
1480 IF F3=1 AND I8$="Q" THEN GOTO 1490 ELSE GOTO 1530
1490 LOCATE P1,1: PRINT"ENTER EXPLANATION FOR THE ABOVE ENTRY."
1500 ROW=P1: COLUMN=49: LENGTH=22: GOSUB 4670
1510 IF LEFT$(I8$,1) = " " OR LEFT$(I8$,1) < "A" THEN GOTO 1500
1520 F100$=I8$: GOSUB 2330: F6$=" ": F90$=" ": GOTO 1950
1530 F2=1: GOSUB 2720: IF F1 <> 0 OR I8$ < "0" THEN GOTO 1470
1540 I1=VAL(I8$): IF I1 > M3 THEN GOSUB 3210: LOCATE 2,1: GOSUB 4220: GOSUB 4030: GOTO 1470
1550 IF I1 < 1 THEN GOTO 1470
1560 LOCATE P1,22: PRINT SPACE$(4): LOCATE P1,21: PRINT I1: GET #1,I1: I5$=X4$
1570 'ACTIVE ACCT?
1580 IF I5$="1" THEN F1=0: GOTO 1620
1590 GOSUB 3280: IF I8$="N" OR I8$="n" THEN  GOSUB 4030: GOTO 1470
1600 GOSUB 4120: GOTO 1980
1610 'DR OR CR?
1620 GOSUB 4660: ROW=P1: COLUMN=32: LENGTH=1: GOSUB 4670: I2$=I8$: GOSUB 2700
1630 IF F1 <> 0 THEN GOTO 1620
1640 'INPUT AND VERIFY DOLLAR AMOUNT.
1650 GOSUB 4660: ROW=P1: COLUMN=39: LENGTH=10: GOSUB 4670
1660 F2=0: GOSUB 2720: IF F1=1 THEN GOSUB 3500: GOTO 1650
1670 I2#=VAL(I8$): IF I2# > 0# AND I2# =< 9999999.99# THEN LOCATE P1,39: PRINT SPACE$(11);: LOCATE P1,38: PRINT I2#;: GOTO 1700
1680 GOSUB 3500: GOTO 1650
1690 'TRANS REF
1700 IF F3=1 THEN GOTO 1770
1710 GOSUB 4660: ROW=P1: COLUMN=53: LENGTH=10: GOSUB 4670
1720 IF F11=1 AND I8$="S" THEN J1$=J3$: GOTO 1750
1730 IF I8$ < "0" OR LEFT$(I8$,1) = " " THEN GOTO 1710
1740 J1$=I8$: J3$=I8$
1750 F3=1: F11=1: LOCATE 12,54: PRINT SPACE$(7);: LOCATE 13,53: PRINT SPACE$(9);: LOCATE P1,52: PRINT SPACE$(12)
1760 ' CHK NBR NEEDED?
1770 IF I2$="D" THEN F6$=" ": F90$=" ": GOTO 1900
1780 F1=0: FOR W = 1 TO B20: IF I1=B2(W) THEN F1=1: W=B20
1782 NEXT W
1790 IF F1=0 THEN F6$=" ": F90$=" ": GOTO 1900
1800 LOCATE 12,65: PRINT"CHECK";: LOCATE 13,65: PRINT"NUMBER"
1810 GOSUB 4660: F2=1: ROW=P1: COLUMN=65: LENGTH=6: GOSUB 4670
1820 IF I8$ < "0" OR LEFT$(I8$,1) = " " THEN GOTO 1810
1830 F6$=I8$: LOCATE P1,65: PRINT SPACE$(7): LOCATE P1,65: PRINT F6$
1840 'PAYEE
1850 LOCATE P1+1,1: PRINT SPACE$(80);: LOCATE P1+1,1
1860 PRINT"ENTER PAYEE FOR THE ABOVE CHECK.    ";
1870 GOSUB 4660: ROW=P1+1: COLUMN=38: LENGTH=30: GOSUB 4670
1880 IF I8$ < "0" OR LEFT$(I8$,1) = " " THEN GOTO 1850
1890 F90$=I8$: LOCATE 12,65: PRINT SPACE$(6): LOCATE 13,65: PRINT SPACE$(7): LOCATE P1,65: PRINT SPACE$(7): LOCATE P1+1,1: PRINT SPACE$(80);
1900 GOSUB 2180: F6$=" ": F90$=" "   'SAVE ENTRY
1910 'CHECK FOR EXCEEDING MAX. POSTINGS.
1920 IF F1 <> 1 THEN GOTO 1370
1930 ' F1=1 MAX. DR. OR CR. ENTRIES EXCEEDED.  F1=2 NO DR. OR CR. INPUT.
1940 ' F1=3 DO NOT DESIRE TO POST. F1=4 DR. <> CR.  F1=5 DR=CR AND POST.
1950 IF F1=1 OR F1=2 OR F1=3 OR F1=4 THEN GOTO 1980
1960 CLS: LOCATE 12,34: PRINT"PRINTING": LOCATE 8,1: GOSUB 2890    'POST ENTR
1970 C5=C5+1: C6#=C6#+C3#: C7#=C7#+C4#
1980 CLS: LOCATE 8,1: PRINT"DO YOU DESIRE TO ENTER ADDITIONAL DEBITS AND CREDITS?": LOCATE 11,1: L1=11: GOSUB 3160: IF I8$="N" OR I8$="n" THEN GOTO 2010
1990 CLS: GOSUB 4040: GOSUB 4460: GOSUB 4480: B1=0: C1=0: C2=0: F3=0: C3#=0#: C4#=0#: Z1=0: GOTO 1360
2000 'PRINT SUMMARY DATA.
2010 IF P3 > 55 THEN P4=66-P3 :GOSUB 3360: GOSUB 3370
2020 FOR I = 1 TO 5: LPRINT: NEXT I
2030 LPRINT"NUMBER OF ENTRIES POSTED                              =        ";: LPRINT USING FORMAT2$;C5
2040 LPRINT"VALUE OF ALL DEBITS POSTED                            = $";: LPRINT USING FORMAT4$;C6#
2050 LPRINT"VALUE OF ALL CREDITS POSTED                           = $";: LPRINT USING FORMAT4$;C7#
2060 IF C6# > C7# THEN C26# = C6# - C7# ELSE C26# = C7# - C6#
2070 LPRINT"DIFFERENCE - DEBITS LESS CREDITS POSTED               = $";: LPRINT USING FORMAT4$;C26#
2080 GOTO 4880
2090 OPEN "PASACT.FIL" FOR INPUT AS #3
2100 OPEN "R",1,"GENLEG.FIL",111
2110 FIELD #1,25 AS X1$,30 AS X2$,6 AS X3$,1 AS X4$,4 AS X5$,2 AS X7$,1 AS X8$,10 AS X9$,8 AS Y1$,8 AS Y2$,8 AS Y3$,8 AS Y4$
2120 OPEN "GENJNL.FIL" FOR APPEND AS #2
2130 RETURN
2140 F1=1: GOSUB 3210: LOCATE 5,1
2150 PRINT"MAXIMUM OF ";M1;" DEBIT OR ";M1;" CREDIT POSTING EXCEEDED."
2160 PRINT"REDESIGN YOUR ENTRY SO THAT MAXIMUMS WILL NOT BE EXCEEDED."
2170 PRINT"NONE OF THIS ENTRY WILL BE POSTED UNTIL YOU REDESIGN THE ENTRY.": PRINT: GOSUB 2840: CLS: RETURN
2180 F1=0
2190 IF I2$="C" THEN GOTO 2240
2200 C1=C1+1: C3#=C3#+I2#: IF C1 <= M1 THEN GOTO 2220
2210 GOSUB 2140: GOTO 2280
2220 A1(C1)=I1: A2#(C1)=I2#: GOSUB 2300: GOTO 2280
2230 ' I1=ACCT#; I2#=$; F6$=CHK#; F90$=PAYEE
2240 C2=C2+1: C4#=C4#+I2#: IF C2 <= M1 THEN GOTO 2260
2250 GOSUB 2140: GOTO 2280
2260 A3(C2)=I1: A4#(C2)=I2#: A10$(C2)=F6$: B4$(C2)=F90$
2270 GOSUB 2300: IF F6$ <> " " AND F90$ <> " " THEN GOSUB 4500
2280 RETURN
2290 'CHK MAX LINES ON SCREEN.
2300 IF P1=21 THEN GOSUB 3840: P1=15: GOTO 2320
2310 P1=P1+1
2320 RETURN
2330 CLS: LOCATE 2,1
2340 CLS: PRINT"YOUR INPUT WILL BE DISPLAYED ON THE SCREEN SO THAT YOU MAY VERIFY"
2350 PRINT"IT.  (FOR YOUR INFORMATION, ACCOUNT TITLES ASSIGNED TO THE ACCOUNT"
2360 PRINT"NUMBERS THAT YOU INPUT WILL ALSO BE DISPLAYED.)  CAREFULLY NOTE ANY"
2370 PRINT"ERRORS SO THAT INCORRECT DATA WILL NOT BE POSTED TO THE ACCOUNTS.": PRINT: GOSUB 2840
2380 F1=0: A1=C1: F1$="DEBIT": C9=0: CLS
2390 GOSUB 3930
2400 FOR I = 1 TO A1
2410 C9=C9+1
2420 IF C9 > 10 THEN GOSUB 3960: C9=1: LOCATE 14,1
2430 IF F1=0 THEN I1=A1(I): I2#=A2#(I): GOTO 2450
2440 I1=A3(I): I2#=A4#(I): F6$=A10$(I): F90$=B4$(I)
2450 GET #1,I1
2460 I4$=X2$: GOSUB 4290
2470 IF I=A1 AND F1$="CREDIT" THEN PRINT"ENTRY EXPLANATION = "; F100$
2480 NEXT I
2490 IF A1=0 THEN LOCATE 15,13: PRINT"****THERE WERE NO ";F1$" ENTRIES.****"
2500 GOSUB 4270:LOCATE 4,1: PRINT"THE LIST OF ";F1$;" ENTRIES IS COMPLETE.  NOTE ANY INPUT ERRORS.": LOCATE 8,1: GOSUB 2840: CLS
2510 IF F1=1 THEN GOTO 2530
2520 C9=0: F1=1: A1=C2: F1$="CREDIT": CLS: GOTO 2390
2530 CLS: LOCATE 5,1: PRINT"DO YOU DESIRE TO POST THE DEBIT AND CREDIT ENTRIES THAT YOU JUST REVIEWED?";: L1=7: LOCATE 7,1: GOSUB 3160
2540 IF I8$="N" OR I8$="n" THEN CLS: F1=3: GOSUB 4120: GOTO 2690
2550 IF C3# > C4# THEN C26# = C3# - C4# ELSE C26# = C4# - C3#
2560 IF C26# < 0.01# THEN F1=5: GOTO 2690
2570 IF C3# > C4# THEN C26# = C3# - C4# ELSE C26# = C4# - C3#
2580 IF C26# < 0.01# THEN GOTO 2690
2590 CLS: LOCATE 5,1: F1=4
2600 PRINT"FOR THE ENTRY THAT YOU JUST REVIEWED, THE TOTAL VALUE OF THE DEBITS"
2610 PRINT"DO NOT EQUAL THE TOTAL VALUE OF THE CREDITS.  NONE OF THE DEBITS"
2620 PRINT"OR CREDITS FOR THIS ENTRY WILL BE POSTED TO THE GENERAL LEDGER."
2630 PRINT"CAREFULLY REVIEW THE DEBIT AND CREDIT AMOUNTS AND REENTER THE ENTIRE"
2640 PRINT"ENTRY FROM THE BEGINNING.  THE TOTAL VALUES ARE AS FOLLOWS:"
2650 PRINT
2660 PRINT"  TOTAL VALUE OF DEBITS             = $";: PRINT USING FORMAT4$;C3#
2670 PRINT"  TOTAL VALUE OF CREDITS            = $";: PRINT USING FORMAT4$;C4#
2680 LOCATE 14,1: F1=6: GOSUB 4130: F1=2
2690 RETURN
2700 F1=1: IF I2$="D" OR I2$="C" THEN F1=0
2702 IF I2$="d" OR I2$="c" THEN GOSUB 4900
2710 RETURN
2720 Q1=0: Q2=0: Q3=0: F1=0
2730 FOR I = 1 TO LEN(I8$): IF F2=1 THEN GOTO 2780
2740 IF MID$(I8$,I,1) <>  "."  THEN  GOTO 2780
2750 Q1=Q1+1: Q3=Q3+1: I6$=RIGHT$(I8$,3): I9$=LEFT$(I6$,1)
2760 IF I9$ <> "." THEN Q1=2: I=LEN(I8$)
2770 GOTO 2790
2780 IF MID$(I8$,I,1) < "0" OR MID$(I8$,I,1) > "9" THEN Q2=Q2+1
2790 NEXT I
2800 IF F2=0 AND Q1>1 THEN F1=1
2810 IF (F2=0 OR F2=1) AND  Q2>0 THEN F1=1
2822 IF  I8$="" OR ((Q3 > 1) OR (LEN(I8$) = 1 AND I8$=".") OR (LEN(I8$) = 2 AND LEFT$(I8$,1) = ".")) THEN F1=1
2830 RETURN
2840 PRINT"PRESS ANY KEY TO CONTINUE.": GOSUB 4660
2850 K$=INKEY$
2860 IF K$="" THEN GOTO 2850
2870 RETURN
2880 'POST AND PRINT
2890 C8=C1: F1=1
2900 FOR I = 1 TO C8
2910 IF F1=2 THEN GOTO 2990
2920 I1=A1(I): GET #1,I1: I2#=A2#(I): GOSUB 4350
2930 ' I1=ACCT#;I2#=$; F6$=CHK#;F90$=PAYEE
2940 IF C1=I THEN I2$="2" ELSE I2$="D"
2950 I4$=X2$
2960 IF I=1 THEN J3$=J1$: I3$=I7$: GOSUB 3490: LPRINT SPC(1);: GOTO 2980
2970 LPRINT SPC(9);
2980 LPRINT USING FORMAT2$;I1;: LPRINT SPC(3) I4$ SPC(P1);: LPRINT USING FORMAT3$;I2#: GOSUB 4320: GOTO 3020
2990 I1=A3(I): GET #1,I1: F6$=A10$(I): I2#=A4#(I): F90$=B4$(I): GOSUB 4350
3000 I4$=X2$: IF I=C2 THEN I2$="1" ELSE I2$="C"
3010 LPRINT SPC(9);: LPRINT USING FORMAT2$;I1;: LPRINT SPC(6) I4$ SPC(P1);: LPRINT USING FORMAT3$;I2#: GOSUB 4320
3020 LSET X3$=I7$: LSET X9$=J1$
3030 IF F1=1 THEN O1#=I2#: O2#=CVD(Y3$): I2#=I2#+O2#: LSET Y3$=MKD$(I2#): I2#=O1#: GOTO 3080
3040 IF F1=2 THEN O1#=I2#: O2#=CVD(Y4$): I2#=I2#+O2#: LSET Y4$=MKD$(I2#): I2#=O1#
3050 ' POST THE GENERAL JOURNAL. I7$=TRANSACTION DATE; I1=ACCOUNT NUMBER;
3060 ' I2$=D OR DEBIT, C FOR CREDIT; J1$=POSTING REFERENCE; F6$=CHECK NUMBER
3070 ' I2#=TRANSACTION AMOUNT; F90$=PAYEE FOR CHECK; F100$=TRANS EXPLANATION
3080 IF I=1 THEN WRITE #2,0,F100$,J1$,I7$
3100 WRITE #2,I1,I2$,I2#,F6$,F90$
3110  PUT #1,I1
3120 NEXT I
3130 F1=F1+1: C8=C2: IF F1=2 THEN GOTO 2900
3140 GOSUB 4510: LPRINT: LPRINT: P3=P3+1: GOSUB 4320
3150 RETURN
3160 PRINT"ENTER `Y' FOR `YES' OR `N' FOR `NO'.";
3170 GOSUB 4660: ROW=L1: COLUMN=42: LENGTH=1: GOSUB 4670
3180 IF I8$="Y" OR I8$="y" OR I8$="N" OR I8$="n" THEN GOTO 3200
3190 GOTO 3170
3200 L1=0: RETURN
3210 FOR I = 1 TO 10: LOCATE I,1: PRINT SPACE$(80): NEXT I: RETURN
3220 'CHECK THE DATE.
3230 D1$=LEFT$(I8$,2): IF D1$ < "01" OR D1$ > "12" THEN F1=1: GOTO 3270
3240 D1$=MID$(I8$,3,2): IF D1$ < "01" OR D1$ > "31" THEN F1=1: GOTO 3270
3250 D1$=RIGHT$(I8$,2): IF D1$ < "86" THEN F1=1: GOTO 3270
3260 F1=0
3270 RETURN
3280 L1=9: GOSUB 3210: LOCATE 1,1
3290 PRINT"YOU SELECTED AN INACTIVE ACCOUNT FOR POSTING.  THE ACCOUNT NUMBER"
3300 PRINT"THAT YOU SELECTED IS NUMBER ";I1;".  BEFORE A GENERAL LEDGER ACCOUNT"
3310 PRINT"CAN BE POSTED, IT   M-U-S-T   FIRST BE CLASSIFIED AS AN ACTIVE ACCOUNT"
3320 PRINT"BY USING OPTION 8 OF THE DAILY MENU.  OTHERWISE, THE ENTRY WILL"
3330 PRINT"NOT BE PERMITTED.": PRINT
3340 PRINT"DO YOU WISH TO RETURN TO THE DAILY MENU?": PRINT: GOSUB 3160
3350 RETURN
3360 FOR L = 1 TO P4: LPRINT: NEXT L: RETURN
3370 P2=P2+1: P3=13
3380 FOR L = 1 TO 6
3390 IF L=4 THEN LPRINT SPACE$(69);"PAGE ";P2: GOTO 3420
3400 IF L=5 THEN LPRINT SPC(59) "RUNDATE  ";: IF L=5 THEN GOSUB 3490: LPRINT: GOTO 3420
3410 LPRINT
3420 NEXT L
3430 FF1=LEN(T1$): FF1=40-(INT(FF1)/2): LPRINT SPACE$(FF1);T1$
3440 LPRINT SPC(29) "GENERAL LEDGER ENTRIES": LPRINT: LPRINT
3450 LPRINT SPC(9) "ACCT."
3460 LPRINT SPC(2) "DATE" SPC(3) "NBR." SPC(3) "ACCOUNT TITLE" SPC(28) "DEBIT" SPC(9) "CREDIT"
3470 LPRINT
3480 RETURN
3490 LPRINT LEFT$(I3$,2);"/";MID$(I3$,3,2);"/";RIGHT$(I3$,2);: RETURN
3500 GOSUB 3210: LOCATE 2,1
3510 PRINT"YOUR INPUT FOR THE DOLLAR AMOUNT IS INCORRECT.  THE O-N-L-Y ALLOWABLE"
3520 PRINT"CHARACTERS FOR THE DOLLAR AMOUNT ARE ZERO(0) THROUGH NINE (9) AND A DECIMAL"
3530 PRINT"POINT TO SEPARATE DOLLARS AND CENTS.  EXAMPLES OF CORRECT INPUT, FOR EITHER"
3540 PRINT"DEBITS OR CREDITS, ARE SHOWN BELOW."
3550  PRINT".01  1   1.00  1.01   126   126.00   126.59   1648   1648.00   1648.25"
3560 PRINT"THE MINIMUM DOLLAR AMOUNT FOR ANY ONE DEBIT OR CREDIT IS .01."
3570 PRINT"THE MAXIMUM DOLLAR AMOUNT FOR ANY ONE DEBIT OR CREDIT IS 9999999.99.": PRINT: GOSUB 2840: GOSUB 4030: RETURN
3580 L1=11: LOCATE 8,1: PRINT"WOULD YOU LIKE A BRIEFING ON HOW TO USE THIS COMPUTER PROGRAM TO BE"
3590 PRINT"DISPLAYED ON THE SCREEN?": LOCATE 11,1: GOSUB 3160
3600 IF I8$="N" OR I8$="n" THEN CLS: I8$=" ": GOTO 3830
3610 CLS: LOCATE 5,1
3620 PRINT"THIS COMPUTER PROGRAM IS TO BE USED ONLY FOR POSTING DAILY OR ADJUSTING ENTRIES"
3630 PRINT"TO THE GENERAL LEDGER ACCOUNTS.  EACH GENERAL LEDGER ACCOUNT TO BE POSTED MUST"
3640 PRINT"(REPEAT, MUST) BE AN ACTIVE ACCOUNT.  YOU CAN DETERMINE WHICH ACCOUNTS ARE"
3650 PRINT"ACTIVE BY RETURNING TO THE DAILY MENU, SELECTING OPTION 7, AND SPECIFYING THAT"
3660 PRINT"ALL ACCOUNTS BE PRINTED.  IF YOU DESIRE TO RECLASSIFY AN ACCOUNT FROM INACTIVE"
3670 PRINT"ACTIVE STATUS (SO THAT YOU WILL BE ALLOWED TO POST A TRANSACTION TO IT), YOU"
3680 PRINT"YOU SHOULD USE OPTION 8 OF THE DAILY MEMU.": PRINT
3690 PRINT"DO YOU WISH TO CONTINUE WITH THIS SESSION?": PRINT
3700 L1=15: GOSUB 3160: IF I8$="N" OR I8$="n" THEN GOTO 3830
3710 CLS: LOCATE 1,1: PRINT"THE COMPUTER IS READY TO START ACCEPTING YOUR GENERAL LEDGER ENTRIES.": PRINT
3720 PRINT"EACH GENERAL LEDGER ENTRY REQUIRES AT LEAST ONE DEBIT AND ONE CREDIT.": PRINT
3730 PRINT"EACH DEBIT OR CREDIT, IN TURN, REQUIRES INPUT UNDER DESCRIPTIVE COLUMN"
3740 PRINT"HEADINGS THAT WILL APPEAR ON THE COMPUTER SCREEN.": PRINT
3750 PRINT"TO ASSIST YOU BRIEF INSTRUCTIONS WILL BE DISPLAYED ABOVE THE COLUMN HEADINGS.": PRINT
3760 PRINT"AFTER EACH CREDIT TO A BANK ACCOUNT, THE COMPUTER WILL ASK YOU FOR THE PAYEE'S"
3770 PRINT"NAME.  THE COMPUTER WILL PROMPT YOU FOR THIS INPUT.": PRINT
3780 PRINT"ALL MESSAGES WILL APPEAR ABOVE THE COLUMN HEADINGS.  THE ERROR MESSAGES"
3790 PRINT"ARE SELF EXPLANATORY.": PRINT
3800 PRINT"PRESS THE RETURN KEY AFTER YOU ENTER EACH REQUESTED INPUT.": PRINT
3810 PRINT"NEVER, UNDER  A-N-Y  CIRCUMSTANCES, INTERRUPT THIS PROGRAM BY PRESSING THE"
3820 PRINT"'Ctrl - Break' KEYS ON YOUR KEYBOARD!": PRINT: GOSUB 2840: CLS
3830 RETURN
3840 P1=0: GOSUB 3210: LOCATE 1,1
3850 PRINT"BECAUSE YOU HAVE MORE ENTRIES TO INPUT AND THE SCREEN IS FULL, THE"
3860 PRINT"LINES BELOW WILL BE ERASED TO MAKE ROOM FOR YOUR ADDITIONAL ENTRIES."
3870 PRINT"BEFORE ERASING THE LINES, THE COMPUTER IS PAUSING SO THAT YOU CAN MAKE"
3880 PRINT"WHATEVER NOTES THAT YOU MIGHT WISH.  (EVEN THOUGH THE LINES BELOW WILL"
3890 PRINT"BE ERASED FROM THE SCREEN, THE DATA WILL N-O-T BE ERASED FROM THE"
3900 PRINT"COMPUTER'S MEMORY.)": PRINT: LOCATE 9,1: GOSUB 2840
3910 CLS: GOSUB 4040: GOSUB 4460 :RETURN
3920 'DISPLAY COLUMN HEADINGS ON SCREEN.
3930 LOCATE 12,1: PRINT SPC(7) "ACCOUNT" SPC(40) "DOLLAR" SPC(2) "POSTING";: IF F1$="CREDIT" THEN PRINT SPC(4) "CHECK" ELSE PRINT
3940 PRINT SPC(1) "DATE" SPC(2) "NUMBER" SPC(2) "ACCOUNT TITLE" SPC(26) "AMOUNT" SPC(2) "REFERENCE";: IF F1$="CREDIT" THEN PRINT SPC(2) "NUMBER" ELSE PRINT
3950 RETURN
3960 GOSUB 4270: LOCATE 3,1
3970 PRINT"BECAUSE THE SCREEN IS FULL, THE ";F1$;" ENTRIES BELOW WILL BE ERASED SO THAT"
3980 PRINT"ADDITIONAL ";F1$" ENTRIES CAN BE DISPLAYED FOR YOUR REVIEW.  THE COMPUTER IS"
3990 PRINT"PAUSING SO THAT YOU CAN REVIEW THE ENTRIES AND MAKE WHATEVER NOTES THAT YOU"
4000 PRINT"MIGHT WISH.  (EVEN THOUGH THE LINES BELOW WILL BE ERASED FROM THE SCREEN,"
4010 PRINT"THE DATA WILL N-O-T BE ERASED FROM THE COMPUTER'S MEMORY.)"
4020 PRINT: LOCATE 9,1: GOSUB 2840: CLS: GOSUB 3930: RETURN
4030 GOSUB 3210
4040 LOCATE 1,1: PRINT"EACH DEBIT OR CREDIT ENTRY REQUIRES INPUT IN THE COLUMNS BELOW."
4050 PRINT" 1. `DATE' COLUMN IS FOR TRANSACTION DATE. USE FORMAT MMDDYY- 6/30/84 = 063084."
4060 PRINT" 2. `POSTING REFERENCE' COLUMN IS FOR FUTURE REFERENCE TO SUPPORTING DOCUMENTA-"
4070 PRINT"    TION. EXAMPLES ARE SALES INVOICE NUMBER AND PURCHASE INVOICE NUMBER."
4080 PRINT" 3. INPUT AN  `S'  (FOR SAME)   TO USE THE PREVIOUS DATE OR POSTING REFERENCE."
4090 PRINT" 4. PRESS THE RETURN KEY AFTER YOU HAVE COMPLETED YOUR INPUT IN A COLUMN."
4100 PRINT" 5. **** AFTER YOU HAVE COMPLETED ALL INPUT FOR A GENERAL LEDGER ENTRY, INPUT"
4110 PRINT"    A  `Q'  (FOR QUIT) WHEN YOU ARE ASKED FOR THE NEXT `ACCOUNT NUMBER'.****": PRINT STRING$(75,"*"): RETURN
4120 CLS: LOCATE 2,1
4130 PRINT"THE COMPUTER IS PAUSING FOR YOU TO REVIEW YOUR SOURCE DOCUMENTATION."
4140 PRINT"DETERMINE WHETHER YOUR DOCUMENTATION OR YOUR INPUT IS IN ERROR."
4150 PRINT"REMEMBER, NO DEBITS OR CREDITS OF THIS ENTRY WILL BE POSTED TO THE"
4160 PRINT"GENERAL LEDGER.  REINPUT THIS ENTRY EITHER DURING THIS SESSION OR"
4170 PRINT"AT A LATER TIME.  IN   E-I-T-H-E-R   CASE,    C-A-R-E-F-U-L-L-Y    MARK THE"
4180 PRINT"ENTRY SO THAT YOU WILL REMEMBER THAT IT IS TO BE REENTERED."
4190 IF F1=6 THEN LOCATE 21,1: GOTO 4210
4200 LOCATE 9,1
4210 GOSUB 2840: RETURN
4220 PRINT"YOUR INPUT FOR THE ACCOUNT NUMBER IS TOO LARGE. THE LARGEST ACCOUNT"
4230 PRINT"NUMBER IN THE GENERAL LEDGER IS ACCOUNT NUMBER ";M3;".  IF DESIRED,"
4240 PRINT"YOU CAN DETERMINE THE ACCOUNT NUMBERS IN THE GENERAL LEDGER BY"
4250 PRINT"SELECTING OPTION 7 IN THE DAILY MENU AND SPECIFYING THAT ALL"
4260 PRINT"ACCOUNTS BE PRINTED.": LOCATE 8,1: GOSUB 2840: RETURN
4270 LOCATE 2,1: PRINT"YOUR ";F1$;" ENTRIES (WITH ACCOUNT TITLES) APPEAR BELOW.": RETURN
4280 'PRINT ENTRIES ON SCREEN.
4290 LOCATE (C9+13),1: PRINT I7$;: LOCATE (C9+13),9: PRINT USING FORMAT2$;I1;: LOCATE (C9+13),16: PRINT I4$;: LOCATE (C9+13),46: PRINT USING FORMAT1$;I2#;: LOCATE (C9+13),63: PRINT J1$;
4300 IF F1$="CREDIT" AND (F6$ <> " " AND F90$ <> " ") THEN LOCATE (C9+13),74: PRINT F6$;
4310 RETURN
4320 P3=P3+1
4330 IF P3>55 THEN P4=66-P3: GOSUB 3360: GOSUB 3370
4340 RETURN
4350 IF F1=2 THEN GOTO 4400
4360 IF I2# > 999999.99# THEN P1=1: FORMAT3$="###########,.##": GOTO 4440
4370 IF I2# > 999.99# THEN P1=5: FORMAT3$="#######,.##": GOTO 4440
4380 IF I2# > 0.99# THEN P1=10: FORMAT3$="###.##": GOTO 4440
4390 IF I2# < 1# THEN P1=13: FORMAT3$=".##": GOTO 4440
4400 IF I2# > 999999.99# THEN P1=13: FORMAT3$="###########,.##": GOTO 4440
4410 IF I2# > 999.99# THEN P1=17: FORMAT3$="#######,.##": GOTO 4440
4420 IF I2# > 0.99# THEN P1=22: FORMAT3$="###.##": GOTO 4440
4430 IF I2# < 1# THEN P1=25: FORMAT3$=".##"
4440 RETURN
4450 'DISPLAY POSTING HEADINGS.
4460 LOCATE 12,20: PRINT "ACCOUNT" SPC(2) "D=DEBIT" SPC(3) "DOLLAR"
4470 LOCATE 13,20: PRINT "NUMBER" SPC(3) "C=CREDIT" SPC(2) "AMOUNT"SPC(8): RETURN
4480 LOCATE 13,12: PRINT"DATE": LOCATE 12,54: PRINT"POSTING": LOCATE 13,53: PRINT"REFERENCE": RETURN
4490 'SAVE CHECK NUMBERS
4500 Z1=Z1+1: A11$(Z1)=F6$: A7$(Z1)=F90$: RETURN
4510 LPRINT SPC(22) F100$
4520 LPRINT SPC(22) "POSTING REFERENCE = ";J1$
4530 P3=P3+1: GOSUB 4320
4540 FOR I = 1 TO Z1
4550 LPRINT SPC(22) "CHECK NBR.  "; A11$(I) " TO " A7$(I): GOSUB 4320: NEXT I: Z1=0: RETURN
4560 IF ERR=53 THEN GOTO 4590
4570 IF ERR=24 OR ERR=25 OR ERR=27 THEN GOTO 4620
4580 ON ERROR GOTO 0
4590 CLS: LOCATE 10,2
4600 PRINT"GENERAL LEDGER DATA FILES NOT FOUND. PRESS ANY KEY AND YOU WILL BE RETURNED"
4610 PRINT"TO THE DAILY MENU.": GOSUB 4660: GOSUB 2850: GOTO 4880
4620 CLS: LOCATE 10,2
4630 PRINT"CHECK YOUR PRINTER.  IT IS EITHER NOT TURNED ON OR IT IS OUT OF PAPER."
4640 PRINT"PRESS ANY KEY WHEN YOU ARE READY TO CONTINUE.": GOSUB 4660: GOSUB 2850
4650 CLS: RESUME
4660 DEF SEG=0: POKE 1050, PEEK(1052): RETURN
4670 GOSUB 4660: I8$=""
4680 FOR X = 1 TO LENGTH: I8$=I8$ + CHR$(254): NEXT X
4690 LOCATE ROW,COLUMN
4700 PRINT I8$;
4710 POINTER = 1: A$=" "
4720 WHILE (ASC(A$) <> 13)
4730 A$ = INPUT$(1)
4740 IF (POINTER > LENGTH) AND (ASC(A$) = 13) THEN GOTO 4860
4750 IF (POINTER > LENGTH) AND (ASC(A$) = 8) THEN GOTO 4810
4760 IF (POINTER > LENGTH) THEN BEEP: BEEP: BEEP: GOTO 4860
4770 IF (ASC(A$) >= 32) THEN MID$(I8$,POINTER,1) = A$: POINTER = POINTER +1:  GOTO 4840
4780 IF (POINTER = 1) AND (ASC(A$) = 8) THEN BEEP: BEEP: BEEP: GOTO 4840
4790 IF (ASC(A$) <> 8) THEN GOTO 4830
4800 IF MID$(I8$,POINTER,1) = CHR$(254) THEN
4810    MID$(I8$,POINTER-1,1) = CHR$(254)
4820    POINTER = POINTER -1
4830 IF (ASC(A$) = 13) THEN I8$ = MID$(I8$,1,POINTER-1): POINTER = LENGTH + 1
4840 LOCATE ROW,COLUMN
4850 PRINT I8$
4860 WEND
4870 RETURN
4880 CLOSE: FOR I = 1 TO 10: LPRINT: NEXT I: RUN "DAILY.BAS": END
4900 LOCATE 11,1: PRINT SPACE$(75);: LOCATE 11,15: PRINT"***************** PRESS YOUR CAPS LOCK KEY ***************": RETURN
```
{% endraw %}

## PSTCLS.BAS

{% raw %}
```bas
500  ' COPYRIGHT 1986 TRONOLONE & FOSTER, PC
1000 REM PSTCLS.BAS
1010 CLEAR: ON ERROR GOTO 1910
1080 CLS: LOCATE 12,31: PRINT"PLEASE STAND BY.": GOSUB 1570
1090 INPUT #3,F1: FOR I = 1 TO F1-1: INPUT #3,F2
1100 IF I=1 THEN GOTO 1140
1110 IF I=2 THEN B1=F2: GOTO 1140  'BEG INV A/C#
1120 IF I=3 THEN R1=F2: GOTO 1140  'R/E A/C#
1130 IF I=4 THEN F3=F2: GOTO 1150  'QTY BANK A/C
1140 NEXT I
1150 FOR I = 1 TO F3: INPUT #3,F2: NEXT I
1160 INPUT #3,F2: S1=F2 'SALES A/C#
1170 INPUT #3,F2: INPUT #3,T1$ 'CO NAME
1180 CLOSE #3: F1=0: F2=0: F3=0
1190 OPEN "R",3,"INVPRO.FIL",23
1200 FIELD #3,1 AS V1$,8 AS V2$,8 AS V3$,6 AS V4$
1210 GET #3,1: G1$=V1$: G4#=CVD(V2$): G3#=CVD(V3$): I8$=V4$ 'G4#=END INV G3#=N/PI8$=DATE
1220 IF G1$="1" THEN GOTO 1300
1230 CLS: LOCATE 5,1
1240 PRINT"YOU HAVE EITHER (1) NOT YET USED OPTION 3 OF THE DAILY MENU TO PREPARE AN"
1250 PRINT"INCOME STATEMENT AND A BALANCE SHEET OR (2) YOU USED DAILY OPTION 1 SINCE YOU"
1260 PRINT"LAST USED OPTION 3.  YOU MUST USE DAILY MENU OPTION 3 BEFORE THE CURRENTLY"
1270 PRINT"REQUESTED POST-CLOSING TRIAL BALANCE WILL BE PREPARED."
1280 PRINT"PRESS ANY KEY AND YOU WILL BE RETURNED TO THE DAILY MENU.": PRINT
1290 GOSUB 1970: GOTO 2460
1300 CLS: LOCATE 12,31: PRINT"PLEASE STAND BY.": GOSUB 1680
1310 OPEN "LPT1:" AS #2: C10=S1
1320 FOR J = 1 TO C10: C1=C1+1: GET #1,C1: I1=VAL(X4$)
1330 IF C1=S1 THEN GOTO 1550   'S1=SALES A/C#
1340 IF I1=0 OR I1=2 THEN GOTO 1540
1350 I3$=X2$: I4$=X8$
1360 IF I4$="D" OR I4$="C" OR I4$="1" OR I4$="2" THEN GOTO 1390
1370 CLS: LOCATE 10,1: PRINT"INCORRECT DATA FOUND. PROCESSING TERMINATED."
1380 PRINT"PRESS ANY KEY TO RETURN TO THE DAILY MENU.": GOSUB 1970: GOTO 2460
1390 C2#=CVD(Y1$): C3#=CVD(Y2$): C4#=CVD(Y3$): C5#=CVD(Y4$)
1400 C6#=C2#+C4#: C7#=C3#+C5#
1410 IF C1 <> R1 OR (C1 = R1 AND G3# = 0#) THEN GOTO 1440
1420 IF G3# < 0# THEN G3# = G3# * -1#: C7# = C7# + G3#: GOTO 1440
1430 C6# = C6# + G3#
1440 IF C6# => C7# THEN I2# = C6# - C7# ELSE I2# = C7# - C6#
1450 IF C1=B1 THEN I2#=G4# 'G4#=END INV
1460 IF (I4$="D" OR I4$="2") AND C6# <  C7# THEN F1=2: C9#=C9#+I2#: GOTO 1500
1470 IF (I4$="D" OR I4$="2") AND C6# => C7# THEN F1=1: C8#=C8#+I2#: GOTO 1500
1480 IF (I4$="C" OR I4$="1") AND C7# <  C6# THEN F1=1: C8#=C8#+I2#: GOTO 1500
1490 IF (I4$="C" OR I4$="1") AND C7# => C6# THEN F1=2: C9#=C9#+I2#
1500 GOSUB 1800: IF F5=1 THEN WIDTH #2,80: PRINT #2,
1510 WIDTH #2,255
1520 PRINT #2,SPC(5);: PRINT #2,USING "####";C1;: PRINT #2,SPC(4) I3$ SPC(P1);: PRINT #2,USING FORMAT3$;I2#: F5=1
1530 P3=P3+1: IF P3 > 50 THEN WIDTH #2,80: PRINT #2,: F5=0: P3=66-P3: GOSUB 1670: GOSUB 1680
1540 NEXT J
1550 GOSUB 2080
1560 FOR I = 1 TO 10: LPRINT: NEXT I: GOTO 2460
1570 OPEN "PASACT.FIL" FOR INPUT AS #3
1580 OPEN "R",#1,"GENLEG.FIL",111
1590 FIELD #1,25 AS X1$,30 AS X2$,6 AS X3$,1 AS X4$,4 AS X5$,2 AS X7$,1 AS X8$,10 AS X9$,8 AS Y1$,8 AS Y2$,8 AS Y3$,8 AS Y4$
1600 RETURN
1610 PRINT"PRESS ANY KEY TO CONTINUE.": GOSUB 1970: RETURN
1620 D1$=LEFT$(I8$,2): IF D1$ < "01" OR D1$ > "12" THEN F1=1: GOTO 1660
1630 D1$=MID$(I8$,3,2): IF D1$ < "01" OR D1$ > "31" THEN F1=1: GOTO 1660
1640 D1$=RIGHT$(I8$,2): IF D1$ < "86" THEN F1=1: GOTO 1660
1650 F1=0
1660 RETURN
1670 FOR L = 1 TO P3: LPRINT: NEXT L: RETURN
1680 P2=P2+1: P3=13
1690 FOR L = 1 TO 6
1700 IF L=4 THEN LPRINT SPACE$(69);"PAGE ";P2: GOTO 1730
1710 IF L=5 THEN LPRINT SPC(59) "RUNDATE  ";: GOSUB 1790: GOTO 1730
1720 LPRINT
1730 NEXT L
1740 FF1=LEN(T1$): FF1=40-(INT(FF1)/2): LPRINT SPACE$(FF1);T1$
1750 LPRINT SPC(27) "POST-CLOSING TRIAL BALANCE": LPRINT: LPRINT
1760 LPRINT SPC(5) "ACCOUNT"
1770 LPRINT SPC(5) "NUMBER" SPC(4) "ACCOUNT TITLE" SPC(26) "DEBIT" SPC(10) "CREDIT"
1780 LPRINT: RETURN
1790 LPRINT LEFT$(I8$,2);"/";MID$(I8$,3,2);"/";RIGHT$(I8$,2): RETURN
1800 IF F1=2 THEN GOTO 1850
1810 IF I2# > 999999.99# THEN P1=1: FORMAT3$="###########,.##": GOTO 1890
1820 IF I2# > 999.99# THEN P1=5: FORMAT3$="#######,.##": GOTO 1890
1830 IF I2# > 0.99# THEN P1=10: FORMAT3$="###.##": GOTO 1890
1840 IF I2# < 1# THEN P1=13: FORMAT3$=".##": GOTO 1890
1850 IF I2# > 999999.99# THEN P1=17: FORMAT3$="###########,.##": GOTO 1890
1860 IF I2# > 999.99# THEN P1=21: FORMAT3$="#######,.##": GOTO 1890
1870 IF I2# > 0.99# THEN P1=26: FORMAT3$="###.##": GOTO 1890
1880 IF I2# < 1# THEN P1=29: FORMAT3$=".##"
1890 RETURN
1900 ' ERROR HANDLING ROUTINE.
1910 IF ERR=25 OR ERR=27 THEN GOTO 2010
1920 IF ERR=53 THEN GOTO 1940
1930 ON ERROR GOTO 0
1940 CLS: LOCATE 10,1
1950 PRINT"GENERAL LEDGER DATA FILES NOT FOUND. PRESS ANY KEY AND YOU WILL BE RETURNED"
1960 PRINT"TO THE DAILY MENU.": GOSUB 1970: GOTO 2460
1970 GOSUB 2060
1980 K$=INKEY$
1990 IF K$="" THEN GOTO 1980
2000 RETURN
2010 CLS: LOCATE 10,2
2020 PRINT"CHECK YOUR PRINTER.  IT IS EITHER NOT TURNED ON OR IT IS OUT OF PAPER."
2030 PRINT"PRESS ANY KEY WHEN YOU ARE READY TO CONTINUE.": GOSUB 1970
2040 CLS: RESUME
2050 ' CLEAR KEYBOARD BUFFER.
2060 DEF SEG=0: POKE 1050, PEEK(1052): RETURN
2070 ' PRINT LAST ACCOUNT AND TOTALS.
2080 WIDTH #2,80
2090 PRINT #2,SPC(45) STRING$(14,"_") SPC(2) STRING$(14,"_")
2100 PRINT #2,
2110 WIDTH #2,255
2120 I2#=C8#: F1=1: GOSUB 1800
2130 PRINT #2,SPC(5) "TOTALS"  SPC(32) SPC(P1);: PRINT #2,USING FORMAT3$;I2#;
2140 I2#=C9#: F1=2: GOSUB 1800: P1=P1-16
2150 PRINT #2,SPC(P1);: PRINT #2,USING FORMAT3$;I2#
2160 WIDTH #2,80
2170 PRINT #2,SPC(45) STRING$(14,"_") SPC(2) STRING$(14,"_")
2180 PRINT #2,SPC(45) STRING$(14,"-") SPC(2) STRING$(14,"-")
2190 CLOSE #2
2200 RETURN
2210 GOSUB 2060: I8$=""
2220 FOR X = 1 TO LENGTH: I8$=I8$ + CHR$(254): NEXT X
2230 LOCATE ROW,COLUMN
2240 PRINT I8$;
2250 POINTER = 1: A$=" "
2260 WHILE (ASC(A$) <> 13)
2270 A$ = INPUT$(1)
2280 IF (POINTER > LENGTH) AND (ASC(A$) = 13) THEN GOTO 2400
2290 IF (POINTER > LENGTH) AND (ASC(A$) = 8) THEN GOTO 2350
2300 IF (POINTER > LENGTH) THEN BEEP: BEEP: BEEP: GOTO 2400
2310 IF (ASC(A$) >= 32) THEN MID$(I8$,POINTER,1) = A$: POINTER = POINTER +1:  GOTO 2380
2320 IF (POINTER = 1) AND (ASC(A$) = 8) THEN BEEP: BEEP: BEEP: GOTO 2380
2330 IF (ASC(A$) <> 8) THEN GOTO 2370
2340 IF MID$(I8$,POINTER,1) = CHR$(254) THEN
2350    MID$(I8$,POINTER-1,1) = CHR$(254)
2360    POINTER = POINTER -1
2370 IF (ASC(A$) = 13) THEN I8$ = MID$(I8$,1,POINTER-1): POINTER = LENGTH + 1
2380 LOCATE ROW,COLUMN
2390 PRINT I8$
2400 WEND
2410 RETURN
2420 F1=0: FOR I = 1 TO LEN(I8$)
2430 IF MID$(I8$,I,1) < "0" OR MID$(I8$,I,1) > "9" THEN F1=1
2440 NEXT I
2450 RETURN
2460 CLOSE: FOR I = 1 TO 10: LPRINT: NEXT I: RUN "DAILY.BAS": END
```
{% endraw %}

## SELTRA.BAS

{% raw %}
```bas
500  ' COPYRIGHT 1986 TRONOLONE & FOSTER, PC
1000 REM SELTRA.BAS
1010 CLEAR: DIM A1(30): DIM A2#(30): DIM A7$(30): DIM C11$(30)
1020 DIM A3(30): DIM A4#(30): DIM A10$(30): DIM A11$(30)
1030 CLS: ON ERROR GOTO 3520
1040 GOSUB 3240: FORMAT2$="####"  'OPEN FILE
1050 FORMAT1$="###########,.##"
1060 INPUT #3,F1: FOR I = 1 TO F1-1: INPUT #3,C1: NEXT I: INPUT #3,T1$: C1=0: F1=0
1070 CLS: LOCATE 10,1: PRINT"ENTER TODAY'S DATE. USE FORMAT MMDDYY. (I.E., JUNE 8, 1984 = 060884).";: GOSUB 3620: ROW=10: COLUMN=73: LENGTH=6: GOSUB 3630
1080 X20$=I8$: GOSUB 3430: IF F1 <> 0 OR LEN(I8$) < 6 THEN GOTO 1070
1090 GOSUB 3190: IF F1 <> 0 THEN GOTO 1070
1100 D10$=I8$: CLS: GOSUB 3490: GOSUB 2840
1110 CLS: LOCATE 1,1: PRINT "SELECT ONE OF THE FOLLOWING NUMBERS.  EXCEPT FOR NUMBER 6, YOUR SELECTION"
1120 PRINT"WILL GOVERN WHICH ADDITIONAL INPUT WILL BE REQUESTED."
1130 PRINT" 1. A SPECIFIC TRANSACTION DATE OR A RANGE OF TRANSACTION DATES."
1140 PRINT" 2. A SPECIFIC ACCOUNT NUMBER OR A RANGE OF ACCOUNT NUMBERS."
1150 PRINT" 3. A SPECIFIC DOLLAR AMOUNT OR A RANGE OF DOLLAR AMOUNTS."
1160 PRINT" 4. A SPECIFIC CHECK NUMBER OR A RANGE OF CHECK NUMBERS."
1170 PRINT" 5. A SPECIFIC POSTING REFERENCE."
1180 PRINT" 6. NO CRITERIA - ALL GENERAL LEDGER ENTRIES WILL BE PRINTED.": PRINT
1190 LOCATE 11,1: PRINT"WHICH NUMBER DO YOU SELECT?";: GOSUB 3620: ROW=11: COLUMN=31: LENGTH=1: GOSUB 3630: I10$=I8$
1200 IF I10$ < "1" OR I10$ >"6" THEN X1=13: X2=11: GOSUB 3420: GOTO 1190
1210 F10=VAL(I10$)
1220 IF F10=6 THEN I30$="    ": I31$="9999": CLS: GOSUB 3490: GOSUB 3500: LOCATE 15,24: PRINT"EXAMINING DEBIT/CREDIT NUMBER": GOTO 2060
1230 IF I10$="1" THEN LOCATE 15,1 ELSE LOCATE 13,1
1240 PRINT "SELECT ANOTHER NUMBER.  LIKE THE FIRST NUMBER, ABOVE, YOUR SELECTION WILL"
1250 PRINT"GOVERN WHICH ADDITIONAL INPUT WILL BE REQUESTED."
1260 PRINT" 1. A SPECIFIC TRANSACTION MONTH AND DAY, SUCH AS MAY 16."
1270 PRINT" 2. A SPECIFIC TRANSACTION MONTH, SUCH AS MAY."
1280 PRINT" 3. A RANGE OF TRANSACTION MONTHS, SUCH AS FROM MAY TO SEPTEMBER."
1290 IF I10$="1" THEN GOTO 1310
1300 PRINT" 4. DISREGARD THE TRANSACTION DATE. (THE DATE WILL WILL IGNORED.)"
1310 LOCATE 21,1: PRINT"WHICH NUMBER DO YOU SELECT?";: GOSUB 3620: ROW=21: COLUMN=31: LENGTH=1: GOSUB 3630: I11$=I8$
1320 IF (I11$ <"1" OR (I10$="1" AND I11$ > "3") OR (I10$ > "1" AND I11$ > "4")) THEN X2=22: X1=22: GOSUB 3420: GOTO 1310
1330 F20=VAL(I11$)
1340 IF I10$="1" THEN I12$="TRANSACTION DATE": GOTO 1430
1350 IF I10$="2" THEN I12$="ACCOUNT NUMBER": GOTO 1430
1360 IF I10$="3" THEN I12$="DOLLAR AMOUNT": GOTO 1430
1370 IF I10$="4" THEN I12$="CHECK NUMBER": GOTO 1430
1380 CLS: LOCATE 5,1: PRINT"THE FIRST NUMBER THAT YOU ENTERED DIRECTS CPA-LEDGER TO SELECT ENTRIES BASED ON"
1390 PRINT"A SPECIFIC POSTING REFERENCE."
1400 LOCATE 8,1: PRINT"ENTER THE TRANSACTION REFERENCE.";: GOSUB 3620: ROW=8: COLUMN=36: LENGTH=10: GOSUB 3630: I20$=I8$
1410 IF LEFT$(I20$,1)= " " OR I20$ < "0" THEN GOTO 1400
1420 LOCATE 8,36: PRINT SPACE$(10): LOCATE 8,36: PRINT I20$: GOTO 1710
1430 CLS: LOCATE 5,1: PRINT"THE FIRST NUMBER THAT YOU ENTERED DIRECTS CPA-LEDGER TO SELECT ENTRIES BASED ON"
1440 PRINT"A SPECIFIC ";I12$;" OR A RANGE OF ";I12$;"S."
1450 IF I10$="1" THEN GOTO 1710
1460 LOCATE 8,1: PRINT"ENTER `1' TO USE A SPECIFIC ";I12$;" OR"
1470 PRINT"      `2' TO USE A RANGE OF ";I12$;"S.  ";: GOSUB 3620: ROW=9: COLUMN=49: LENGTH=1: GOSUB 3630: I20$=I8$
1480 IF I20$ < "1" OR I20$ > "2" THEN X1=11: X2=9: GOSUB 3420: GOTO 1460
1490 F30=VAL(I20$)
1500 IF F10=1 THEN GOTO 1710
1510 IF I20$ <> "1" THEN GOTO 1600
1520 LOCATE 11,1: PRINT"ENTER THE SPECIFIC ";I12$;".";: GOSUB 3620: ROW=11
1530 IF I10$="2" THEN COLUMN=38: LENGTH=4: GOTO 1560
1540 IF I10$="3" THEN COLUMN=37: LENGTH=10: GOTO 1560
1550 COLUMN=36: LENGTH=6
1560 GOSUB 3630: I20$=I8$
1570 IF I10$ > "4" THEN GOTO 1710
1580 X20$=I20$: GOSUB 3430: IF F1=0 AND VAL(I20$) > 0 THEN GOTO 1710
1590 X1=13: X2=11: GOSUB 3420: GOTO 1520
1600 LOCATE 11,1: PRINT"ENTER THE BEGINNING (LOW)  ";I12$".";: GOSUB 3620: ROW=11: COLUMN=44: LENGTH=10: GOSUB 3630: I20$=I8$
1610 IF I10$ > "4" THEN LOCATE 11,44: PRINT SPACE$(10): LOCATE 11,44: PRINT I20$: GOTO 1640
1620 X20$=I20$: GOSUB 3430: IF F1=0 AND VAL(I20$) > 0 THEN LOCATE 11,44: PRINT SPACE$(10): LOCATE 11,44: PRINT I20$: GOTO 1640
1630 X1=13: X2=11: GOSUB 3420: GOTO 1600
1640 LOCATE 12,1: PRINT"ENTER THE ENDING (HIGH)    ";I12$".";: GOSUB 3620: ROW=12: COLUMN=44: LENGTH=10: GOSUB 3630: I21$=I8$
1650 IF I10$ > "4" THEN LOCATE 12,44: PRINT SPACE$(10): LOCATE 12,44: PRINT I21$: GOTO 1710
1660 X20$=I21$: GOSUB 3430
1670 IF F1=0 AND VAL(I21$) > 0 THEN LOCATE 12,44: PRINT SPACE$(10): LOCATE 12,44: PRINT I21$: GOTO 1690
1680 X1=14: X2=12: GOSUB 3420: GOTO 1640
1690 IF I21$ > I20$ THEN GOTO 1710
1700 X1=14: X2=12: GOSUB 3420: LOCATE 11,1: PRINT SPACE$(80): GOTO 1600
1710 IF I11$="1" THEN I12$="ON A SPECIFIC TRANSACTION MONTH AND DAY."
1720 IF I11$="2" THEN I12$="DURING A SPECIFIC TRANSACTION MONTH."
1730 IF I11$="3" THEN I12$="DURING A RANGE OF MONTHS."
1740 IF I11$="4" THEN GOTO 1980
1750 LOCATE 14,1: PRINT"THE SECOND NUMBER THAT YOU ENTERED DIRECTS CPA-LEDGER TO SELECT ENTRIES"
1760 PRINT"BASED ON ";I12$: PRINT
1770 IF I11$="2" THEN GOTO 1830
1780 IF I11$="3" THEN GOTO 1870
1790 LOCATE 17,1: PRINT"ENTER THE SPECIFIC TRANSACTION MONTH AND DAY."
1800 PRINT"(USE FORMAT MMDD.  I.E., JULY 16 = 0716).";: GOSUB 3620: ROW=18: COLUMN=45: LENGTH=4: GOSUB 3630: I30$=I8$
1810 IF LEN(I30$) < 4 OR LEFT$(I30$,2) < "01" OR LEFT$(I30$,2) > "12" OR RIGHT$(I30$,2) < "01" OR RIGHT$(I30$,2) > "31" THEN X1=19: X2=17: GOSUB 3420: LOCATE X2+1,1: PRINT SPACE$(80): GOTO 1790
1820 GOTO 1980
1830 LOCATE 17,1: PRINT"ENTER THE TRANSACTION MONTH. (USE FORMAT MM. I.E., JULY = 07).";: GOSUB 3620: ROW=17: COLUMN=72: LENGTH=2: GOSUB 3630: I30$=I8$
1840 X20$=I30$: GOSUB 3430
1850 IF F1=0 AND VAL(I30$) > 0 AND VAL(I30$) < 13 AND LEN(I30$) > 1 AND LEN(I30$) < 3 THEN GOTO 1980
1860 X1=19: X2=17: GOSUB 3420: GOTO 1830
1870 LOCATE 17,1: PRINT"ENTER THE BEGINNING (LOW) MONTH.  (USE FORMAT MM. I.E., JULY = 07).";: ROW=17: COLUMN=72: LENGTH=2: GOSUB 3630: I30$=I8$
1880 X20$=I30$: GOSUB 3430
1890 IF F1=0 AND VAL(I30$) > 0 AND VAL(I30$) < 13  AND LEN(I30$) > 1 AND LEN(I30$) < 3 THEN GOTO 1910
1900 X1=19: X2=17: GOSUB 3420: GOTO 1870
1910 LOCATE 18,1: PRINT"ENTER THE ENDING (HIGH) MONTH. (USE FORMAT MM. I.E., OCTOBER = 10).";: ROW=18: COLUMN=72: LENGTH=2: GOSUB 3630: I31$=I8$
1920 X20$=I31$: GOSUB 3430
1930 IF F1=0 AND VAL(I31$) > 0 AND VAL(I31$) < 13 AND LEN(I31$) > 1 AND LEN(I31$) < 3 THEN GOTO 1950
1940 X1=20: X2=18: GOSUB 3420: GOTO 1910
1950 IF I31$ > I30$ THEN GOTO 1980
1960 X1=20: X2=18: GOSUB 3420: LOCATE 17,1: PRINT SPACE$(80): GOTO 1870
1970 'SEARCH GENERAL JOURNAL.
1980 CLS: GOSUB 3490: GOSUB 3500: CT1=0: LOCATE 15,24: PRINT"EXAMINING DEBIT/CREDIT NUMBER"
1990 IF F20=1 OR F20=2 THEN I31$=I30$
2000 IF (F10 > 1 AND F10 < 6) AND F30 <> 2 THEN I21$=I20$
2010 IF F10=2 THEN I20=VAL(I20$): I21=VAL(I21$): GOTO 2030
2020 IF F10=3 THEN I20#=VAL(I20$): I21#=VAL(I21$)
2030 IF F20=4 THEN I30$="    ": I31$="9999"
2040 IF F10 > 1 THEN GOTO 2170
2050 ' PRINT ENTRIES WITH 1ST OPTION NBR ASSGNMT OF 1 OR 6
2060 WHILE NOT EOF(2)
2062 CT1=CT1+1: LOCATE 15,56: PRINT CT1;
2070 INPUT #2,F1: IF F1 <> 0 THEN GOTO 2100
2080 F5=0: INPUT #2, F100$,J1$,I7$: GOSUB 3390: GOTO 2140
2090 ' F100$=XACTION EXPLA; J1$=POST REF; I7$=DATE
2100 I1=F1: INPUT #2, I2$,I2#,F6$,F90$
2110 ' I1=ACCT#;I2$=DR/CR;I2#=$;F6$CHK# OR BLANK
2120 IF I10$ < I30$ OR I10$ > I31$ THEN GOTO 2140
2130 Z88=1: GOSUB 2710   'PRINT
2140 WEND
2150 GOTO 2340
2160 'PRINT J/ENTRIES WITH 1ST OPTION NBR ASSIGNMT OF 2-5!
2170 F3=0: C1=0: C2=0: Z88=0: Z89=0
2180 WHILE NOT EOF(2)
2182 CT1=CT1+1: LOCATE 15,56: PRINT CT1;
2190 INPUT #2,F1: IF F1 <> 0 THEN GOTO 2210
2200 INPUT #2, F100$,J1$,I7$: GOSUB 3390: GOTO 2330
2210 I1=F1: INPUT #2, I2$,I2#,F6$,F90$
2220 IF I10$ < I30$ OR I10$ > I31$ THEN GOTO 2330  'SKP IF DATE OUT OF RANGE
2230 IF F10 <> 5 THEN GOTO 2260  'LOOK FOR POSTING REF.
2240 IF J1$ < I20$ OR J1$ > I21$ THEN GOTO 2330  'CHK POST. REF.
2250 Z88=1: GOSUB 2710: GOTO 2330   'PRINT DIRECT
2260 IF F10=3 THEN GOTO 2290
2270 IF F10=4 THEN GOTO 2300
2280 IF I1  < I20  OR I1  > I21  THEN GOTO 2320 ELSE GOTO 2310  'ACCT. #
2290 IF I2# < I20# OR I2# > I21# THEN GOTO 2320 ELSE GOTO 2310 'CHK $
2300 IF F6$ < I20$ OR F6$ > I21$ THEN GOTO 2320 ELSE GOTO 2310 'CHK CHK#
2310 Z88=1: Z89=1 'SET FLAGS FOR A HIT
2320 GOSUB 2450  'SAVE FOR POSSIBLE LATER PRINTING
2330 WEND
2340 IF Z88=1 THEN GOTO 2370
2350 CLS: LOCATE 9,1: PRINT"NO ENTRIES, MEETING YOUR SELECTION CRITERIA, WERE FOUND."
2360 PRINT"DO YOU WISH TO TRY AGAIN?": GOTO 2390
2370 CLS: LOCATE 9,1: PRINT"ENTRIES THAT MET YOUR SELECTION CRITERIA HAVE BEEN PRINTED."
2380 PRINT"DO YOU WISH TO PRINT ADDITIONAL ENTRIES?"
2390 GOSUB 3620: PRINT"ENTER `Y' FOR `YES' OR `N' FOR `NO'.";: ROW=11: COLUMN=40: LENGTH=1: GOSUB 3630
2400 IF I8$ = "Y" OR I8$="y" OR I8$ = "N" OR I8$="n" THEN GOTO 2420
2410 LOCATE 14,1: GOSUB 3350: CLS: GOTO 2340
2420 IF I8$="Y" OR I8$="y" THEN CLOSE #2: GOSUB 3270: CLS: Z88=0: Z89=0: GOTO 1110
2430 GOTO 3840   'EOF
2440 'SAVE THE DEBIT OR CREDIT ENTRY IN ARRAYS.
2450 IF I2$="C" OR I2$ = "1" THEN GOTO 2470
2460 C1=C1+1: A1(C1)=I1: A2#(C1)=I2#: GOTO 2490
2470 C2=C2+1
2480 A3(C2)=I1: A4#(C2)=I2#: A10$(C2)=F6$: IF F6$ <> " " THEN C11$(C2)=F90$
2490 IF I2$="1" AND Z89=1 THEN Z89=0: GOSUB 2530: LPRINT: GOSUB 2970
2500 IF I2$="1" THEN C1=0: C2=0: F3=0
2510 RETURN
2520 'PRINT THE POSTINGS - FROM ARRAYS.
2530 C8=C1: F1=1
2540 FOR I = 1 TO C8
2550 IF F1=2 THEN GOTO 2610
2560 I1=A1(I): GET #1,I1: I2#=A2#(I): GOSUB 2990
2570 I4$=X2$
2580 IF I=1 THEN D11$=D10$: D10$=I7$: GOSUB 2950: D10$=D11$: LPRINT SPC(2);: GOTO 2600
2590 LPRINT SPC(10);
2600 LPRINT USING FORMAT2$;I1;: LPRINT SPC(3) I4$ SPC(P1);: LPRINT USING FORMAT3$;I2#: GOSUB 2970: GOTO 2650
2610 I1=A3(I): GET #1,I1: F6$=A10$(I): I2#=A4#(I): GOSUB 2990
2620 I4$=X2$
2630 LPRINT SPC(10);: LPRINT USING FORMAT2$;I1;: LPRINT SPC(6) I4$ SPC(P1);: LPRINT USING FORMAT3$;I2#: F6$=A10$(I): F90$=C11$(I): GOSUB 2970
2640 GOSUB 3100
2650 NEXT I
2660 F1=F1+1: C8=C2
2670 IF F1=2 THEN GOTO 2540
2680 GOSUB 3140: LPRINT: GOSUB 2970
2690 RETURN
2700 ' PRINT THE POSTING - DIRECT.
2710 IF I2$="C" OR I2$="1" THEN GOTO 2770
2720 IF F5=0 THEN F5=1: D11$=D10$: D10$=I7$: GOSUB 2950: D10$=D11$: LPRINT SPC(2);: GOTO 2740
2730 LPRINT SPC(10);
2740 GET #1,I1: I4$=X2$: F1=1: GOSUB 2990
2750 LPRINT USING FORMAT2$;I1;: LPRINT SPC(3) I4$ SPC(P1);: LPRINT USING FORMAT3$;I2#: GOSUB 2970
2760 GOTO 2800
2770 GET #1,I1: I4$=X2$: F1=2: GOSUB 2990
2780 LPRINT SPC(10);: LPRINT USING "####";I1;: LPRINT SPC(6) I4$ SPC(P1);: LPRINT USING FORMAT3$;I2#: GOSUB 2970: GOSUB 3100
2790 IF I2$="1" THEN GOSUB 3140: F3=0: LPRINT: GOSUB 2970
2800 RETURN
2810 'SKIP TO TOP OF NEXT PAGE.
2820 FOR L = 1 TO P3: LPRINT: NEXT L: RETURN
2830 'PRINT PAGE HEADINGS.
2840 P2=P2+1: P3=13
2850 FOR L = 1 TO 6
2860 IF L=4 THEN LPRINT SPACE$(69);"PAGE ";P2: GOTO 2890
2870 IF L=5 THEN LPRINT SPC(59) "RUNDATE  ";: IF L=5 THEN GOSUB 2950: LPRINT: GOTO 2890
2880 LPRINT
2890 NEXT L
2900 FF1=LEN(T1$): FF1=40-(INT(FF1)/2): LPRINT SPACE$(FF1);T1$
2910 LPRINT SPC(24) "PREVIOUS GENERAL LEDGER ENTRIES": LPRINT: LPRINT
2920 LPRINT SPC(9) "ACCOUNT"
2930 LPRINT SPC(2) "DATE" SPC(3) "NUMBER" SPC(2) "ACCOUNT TITLE" SPC(28) "DEBIT" SPC(9) "CREDIT": LPRINT: RETURN
2940 'PRINT THE DATE.
2950 LPRINT LEFT$(D10$,2);"/";MID$(D10$,3,2);"/";RIGHT$(D10$,2);: RETURN
2960 ' CHECK POSITION OF PRINTER.
2970 P3=P3+1: IF P3>55 THEN P3=66-P3: GOSUB 2820: GOSUB 2840: RETURN
2980 'SET PRINT FORMAT
2990 IF F1=2 THEN GOTO 3040
3000 IF I2# > 999999.99# THEN P1=1: FORMAT3$="###########,.##": GOTO 3080
3010 IF I2# > 999.99# THEN P1=5: FORMAT3$="#######,.##": GOTO 3080
3020 IF I2# > 0.99# THEN P1=10: FORMAT3$="###.##": GOTO 3080
3030 IF I2# < 1# THEN P1=13: FORMAT3$=".##": GOTO 3080
3040 IF I2# > 999999.99# THEN P1=13: FORMAT3$="###########,.##": GOTO 3080
3050 IF I2# > 999.99# THEN P1=17: FORMAT3$="#######,.##": GOTO 3080
3060 IF I2# > 0.99# THEN P1=22: FORMAT3$="###.##": GOTO 3080
3070 IF I2# < 1# THEN P1=25: FORMAT3$=".##"
3080 RETURN
3090 'SAVE CHECK NUMBERS
3100 IF F6$=" " THEN GOTO 3120
3110 F3=F3+1: A11$(F3)=F6$: A7$(F3)=F90$
3120 RETURN
3130 'PRINT POSTING REF. AND CHECK NUMBERS
3140 LPRINT SPC(22) "EXPLANATION " F100$
3150 LPRINT SPC(22) "POSTING REFERENCE ";J1$
3160 P3=P3+1: GOSUB 2970
3170 FOR I = 1 TO F3
3180 LPRINT SPC(22) "CHK. NUMBER  ";A11$(I) " TO "  A7$(I): GOSUB 2970: NEXT I: RETURN
3190 D1$=LEFT$(I8$,2): IF D1$ < "01" OR D1$ > "12" THEN F1=1: GOTO 3230
3200 D1$=MID$(I8$,3,2): IF D1$ < "01" OR D1$ > "31" THEN F1=1: GOTO 3230
3210 D1$=RIGHT$(I8$,2): IF D1$ < "86" THEN F1=1: GOTO 3230
3220 F1=0
3230 RETURN
3240 OPEN "PASACT.FIL" FOR INPUT AS #3
3250 OPEN "R",1,"GENLEG.FIL",111
3260 FIELD #1,25 AS X1$,30 AS X2$,6 AS X3$,1 AS X4$,4 AS X5$,2 AS X7$,1 AS X8$,10 AS X9$,8 AS Y1$,8 AS Y2$,8 AS Y3$,8 AS Y4$
3270 OPEN "GENJNL.FIL" FOR INPUT AS #2
3280 ' WRITTEN AS:  0,F100$,J1$,I7$ ONE TIME FOR EACH ENTRY.
3290 '                                0 = NEW ENTRY. F100$=TRANS EXPLA.
3300 '                                J1$=POSTING REF. I7$=TRANS DATE.
3310 '              I1,I2$,I2#,F6$,F90$   I1=ACCT#, I2$=DR/CR, I2#=$
3320 '                                    F6$=CHK#0! F90$=PAYEE
3330 RETURN
3340 ' ERROR MESSAGE.
3350 PRINT"ENTRY IS INCORRECT.  TRY AGAIN.  PRESS ANY KEY TO CONTINUE.": GOSUB 3620
3360 K$=INKEY$
3370 IF K$="" THEN GOTO 3360
3380 RETURN
3390 IF F20=1 THEN I10$=LEFT$(I7$,4): GOTO 3410
3400 IF F20=2 OR F20=3 OR F20=4 THEN I10$=LEFT$(I7$,2)
3410 RETURN
3420 LOCATE X1,1: GOSUB 3350: LOCATE X1,1: PRINT SPACE$(80): LOCATE X2,1: RETURN
3430 F1=0: F6=0
3440 FOR I = 1 TO LEN(X20$)
3450 IF F10=3 AND MID$(X20$,I,1) = "." THEN F6=F6+1: GOTO 3470
3460 IF MID$(X20$,I,1) < "0" OR MID$(X20$,I,1) > "9" THEN F1=1: I=LEN(X20$)
3470 NEXT I: IF F6>1 THEN F1=1
3480 RETURN
3490 LOCATE 10,32: PRINT"PLEASE STAND BY.": RETURN
3500 LOCATE 11,32: PRINT"SEARCHING FILE.": RETURN
3510 ' ERROR HANDLING ROUTINE.
3520 IF ERR=53 THEN GOTO 3550
3530 IF ERR=25 OR ERR=27 THEN GOTO 3580
3540 ON ERROR GOTO 0
3550 CLS: LOCATE 10,2
3560 PRINT"GENERAL LEDGER DATA FILES NOT FOUND. PRESS ANY KEY AND YOU WILL BE RETURNED"
3570 PRINT"TO THE DAILY MENU.": GOSUB 3620: GOSUB 3360: GOTO 3840
3580 CLS: LOCATE 10,2
3590 PRINT"CHECK YOUR PRINTER.  IT IS EITHER NOT TURNED ON OR IT IS OUT OF PAPER."
3600 PRINT"PRESS ANY KEY WHEN YOU ARE READY TO CONTINUE.": GOSUB 3620: GOSUB 3360
3610 CLS: RESUME
3620 DEF SEG=0: POKE 1050, PEEK(1052): RETURN
3630 GOSUB 3620: I8$=""
3640 FOR X = 1 TO LENGTH: I8$=I8$ + CHR$(254): NEXT X
3650 LOCATE ROW,COLUMN
3660 PRINT I8$;
3670 POINTER = 1: A$=" "
3680 WHILE (ASC(A$) <> 13)
3690 A$ = INPUT$(1)
3700 IF (POINTER > LENGTH) AND (ASC(A$) = 13) THEN GOTO 3820
3710 IF (POINTER > LENGTH) AND (ASC(A$) = 8) THEN GOTO 3770
3720 IF (POINTER > LENGTH) THEN BEEP: BEEP: BEEP: GOTO 3820
3730 IF (ASC(A$) >= 32) THEN MID$(I8$,POINTER,1) = A$: POINTER = POINTER +1:  GOTO 3800
3740 IF (POINTER = 1) AND (ASC(A$) = 8) THEN GOTO 3800
3750 IF (ASC(A$) <> 8) THEN GOTO 3790
3760 IF MID$(I8$,POINTER,1) = CHR$(254) THEN
3770    MID$(I8$,POINTER-1,1) = CHR$(254)
3780    POINTER = POINTER -1
3790 IF (ASC(A$) = 13) THEN I8$ = MID$(I8$,1,POINTER-1): POINTER = LENGTH + 1
3800 LOCATE ROW,COLUMN
3810 PRINT I8$
3820 WEND
3830 RETURN
3840 CLOSE: FOR I = 1 TO 10: LPRINT: NEXT I: RUN "DAILY.BAS": END
```
{% endraw %}

## SETUP.BAS

{% raw %}
```bas
500  ' COPYRIGHT 1986 TRONOLONE & FOSTER, PC
1000 KEY OFF: CLS: LOCATE 5,1
1010 LOCATE 3,1: PRINT SPC(35) "CPA-LEDGER"
1020 LOCATE 5,1: PRINT SPC(35) "SETUP MENU": LOCATE 8,1
1030 PRINT"SELECT ONE OF THE OPTION NUMBERS BELOW.": PRINT
1040 PRINT"  1. ESTABLISH A NEW GENERAL LEDGER AND ASSIGN ACCOUNT TITLES."
1050 PRINT"  2. IDENTIFY SELECTED ACCOUNT NUMBERS THAT ARE IN THE NEW GENERAL
1060 PRINT"     LEDGER AND IDENTIFY YOUR BUSINESS NAME."
1070 PRINT"  3. ASSIGN BEGINNING DOLLAR AMOUNTS TO NEW GENERAL LEDGER ACCOUNTS."
1072 PRINT"  4. GO TO THE DAILY MENU."
1080 PRINT"  5. STOP ALL CPA-LEDGER PROCESSING AND RETURN CONTROL TO PC-DOS."
1082 GOSUB 9000
1090 LOCATE 17,1: PRINT"WHICH OPTION NUMBER DO YOU SELECT?";: GOSUB 1290: ROW=17: COLUMN=37: LENGTH=1: GOSUB 1300
1100 F1=0:FOR I = 1 TO LEN(I8$): IF MID$(I8$,I,1) < "1" OR MID$(I8$,I,1) > "9" THEN F1=1
1102 NEXT I
1110 IF F1 = 0 AND VAL(I8$) => 1 AND VAL(I8$) =< 5 THEN GOTO 1160
1120 LOCATE 22,1: PRINT"ENTRY IS INCORRECT. TRY AGAIN. PRESS ANY KEY TO CONTINUE.": GOSUB 1290: GOSUB 1130: LOCATE 22,1: PRINT SPACE$(80): GOTO 1090
1130 K$=INKEY$
1140 IF K$="" THEN GOTO 1130
1142 RETURN
1150 LOCATE 22,1: PRINT SPACE$(80)
1160 IF I8$="5" THEN CLS: SYSTEM
1162 IF I8$="2" THEN GOTO 1270
1164 IF I8$="4" THEN GOTO 1282
1180 CLS: LOCATE 10,1: PRINT"ADJUST THE PAPER IN YOUR PRINTER SO THAT THE PAPER IS AT TOP-OF-PAGE.": PRINT
1190 PRINT"THE PAPER WILL BE AT TOP-OF-PAGE WHEN THE PRINTER WILL PRINT ON THE VERY FIRST"
1200 PRINT"LINE AT THE TOP OF THE PAGE.": PRINT
1230 PRINT"PRESS ANY KEY WHEN YOU ARE READY TO CONTINUE.": GOSUB 1290
1240 K$=INKEY$
1250 IF K$="" THEN GOTO 1240
1260 IF I8$="1" THEN GOSUB 1510: RUN "GENLGR.BAS": END
1270 IF I8$="2" THEN GOSUB 1510: RUN "STOACT.BAS": END
1280 IF I8$="3" THEN GOSUB 1510: RUN "OPNBAL.BAS": END
1282 IF I8$="4" THEN GOSUB 1510: RUN "DAILY.BAS": END
1284 CLS: LOCATE 10,1
1286 PRINT"THIS PROGRAM HAS BEEN MODIFIED IMPROPERLY.  CHECK KEYS FOR RUN STATEMENTS.": END
1290 DEF SEG=0: POKE 1050, PEEK(1052): RETURN
1300 I8$=""
1310 FOR X = 1 TO LENGTH: I8$=I8$ + CHR$(254): NEXT X
1320 LOCATE ROW,COLUMN
1330 PRINT I8$;
1340 POINTER = 1: A$=" "
1350 WHILE (ASC(A$) <> 13)
1360 A$ = INPUT$(1)
1370 IF (POINTER > LENGTH) AND (ASC(A$) = 13) THEN GOTO 1490
1380 IF (POINTER > LENGTH) AND (ASC(A$) = 8) THEN GOTO 1440
1390 IF (POINTER > LENGTH) THEN BEEP: BEEP: BEEP: GOTO 1490
1400 IF (ASC(A$) >= 32) THEN MID$(I8$,POINTER,1) = A$: POINTER = POINTER +1:  GOTO 1470
1410 IF (POINTER = 1) AND (ASC(A$) = 8) THEN BEEP: BEEP: BEEP: GOTO 1470
1420 IF (ASC(A$) <> 8) THEN GOTO 1460
1430 IF MID$(I8$,POINTER,1) = CHR$(254) THEN
1440    MID$(I8$,POINTER-1,1) = CHR$(254)
1450    POINTER = POINTER -1
1460 IF (ASC(A$) = 13) THEN I8$ = MID$(I8$,1,POINTER-1): POINTER = LENGTH + 1
1470 LOCATE ROW,COLUMN
1480 PRINT I8$
1490 WEND
1500 RETURN
1510 CLS: LOCATE 10,31: PRINT"PLEASE STAND BY.": RETURN
9000 LOCATE 23,1: PRINT"(C) COPYRIGHT 1986 TRONOLONE & FOSTER, PC
9002 LOCATE 1,1: PRINT"ASSISTANCE?"
9004 LOCATE 2,4: PRINT"WRITE"
9006 LOCATE 3,1: PRINT"JIM FOSTER"
9008 LOCATE 4,1: PRINT"8529 GREELEY BLVD."
9010 LOCATE 5,1: PRINT"SPRINGFIELD, VIRGINIA  22152"
9100 LOCATE 1,67: PRINT"ASSISTANCE?"
9200 LOCATE 2,70: PRINT"CALL"
9300 LOCATE 3,67: PRINT"JIM FOSTER"
9400 LOCATE 4,65: PRINT"(703) 569-2254"
9500 LOCATE 5,65: PRINT"AFTER 7:30 PM"
9600 LOCATE 6,67: PRINT"OR ANYTIME"
9700 LOCATE 7,67: PRINT" WEEKENDS."
9800 RETURN
```
{% endraw %}

## STOACT.BAS

{% raw %}
```bas
500  ' COPYRIGHT 1986 TRONOLONE & FOSTER, PC
1000 ' STOACT.  THE ORDER OF DATA IN PASACT.FIL IS:
1100 '  1. THE QUANTITY OF ACCOUNTS BEFORE THE COMPANY NAME
1200 '  2. ACCOUNT NUMBER FOR ACCTS REC.
1300 '  3.   "       "     "  BEGINNING INVENTORY
1400 '  4.   "       "     "  RETAINED EARNINGS
1500 '  5.   "       "     "  QTY. OF BANK ACCOUNTS
1600 '  6.   "       "     "  THE BANK ACCOUNT NUMBERS (QTY DEPENDS ON #5)
1700 '  7.   "       "     "  ACCOUNT NUMBER FOR SALES
1800 '  8.   "       "     "  LAST ACCOUNT IN THE FILE
1900 '  9.   "       "     "  COMPANY NAME
2000 CLEAR: CLS: LOCATE 10,1: ON ERROR GOTO 25000
2100 DIM B(30): DIM A(20): DIM C(9)  'A( FOR A/C NOS.
2200 CLS: LOCATE 1,1
2300 PRINT"SEVERAL OF THE COMPUTER PROGRAMS THAT PROCESS YOUR TRANSACTIONS NEED TO KNOW"
2400 PRINT"THE ACCOUNT NUMBERS THAT HAVE BEEN ASSIGNED TO VARIOUS ACCOUNTS.  THIS"
2500 PRINT"COMPUTER PROGRAM ASKS YOU TO ENTER THE APPROPRIATE ACCOUNT NUMBERS AND STORES"
2600 PRINT"THEM FOR AUTOMATIC REFERENCE WHEN THEY ARE NEEDED.": PRINT
2700 PRINT"USE A CURRENT LISTING OF GENERAL LEDGER ACCOUNTS WHILE MAKING INPUT TO THIS"
2800 PRINT"COMPUTER PROGRAM.": PRINT
2900 PRINT"PROCESSING WILL BE AS FOLLOWS.  THE COMPUTER WILL DISPLAY THE NAME OF AN"
3000 PRINT"ACCOUNT ON THE COMPUTER SCREEN AND ASK YOU TO ENTER THE ACCOUNT NUMBER FOR THAT"
3100 PRINT"ACCOUNT.  THE NAME DISPLAYED MAY NOT BE EXACTLY THE SAME AS YOU ASSIGNED IN THE"
3200 PRINT"GENERAL LEDGER, BUT YOU WILL KNOW WHICH ACCOUNT IS BEING REFERENCED.": PRINT
3300 PRINT"AFTER YOU GIVE YOUR INPUT, THE COMPUTER WILL DISPLAY THE ACTUAL ACCOUNT TITLE"
3400 PRINT"FOR THAT ACCOUNT NUMBER AND ASK YOU TO CONFIRM YOUR INPUT.": PRINT
3500 PRINT"YOU MAY BE ASKED TO ENTER AN ACCOUNT NUMBER FOR AN ACCOUNT THAT IS NOT INCLUDED"
3600 PRINT"IN THE GENERAL LEDGER.  IN THIS CASE, ENTER A 0 (ZERO).  THE COMPUTER WILL"
3700 PRINT"RECOGINZE THE ZERO AS PERTAINING TO AN ACCOUNT THAT IS NOT IN THE GENERAL"
3800 PRINT"LEDGER.": PRINT
3900 PRINT"PRESS ANY KEY WHEN YOU ARE READY TO CONTINUE."
4000 GOSUB 16300
4100 C1=0: F1=0: M3=0
4200 CLS: LOCATE 12,32: PRINT"PLEASE STAND BY."
4202 OPEN "PASACT.FIL" FOR INPUT AS #2: INPUT #2,LASTACTNO,FRMCHK
4204 IF FRMCHK=30000 THEN GOTO 4400  'FRMCHK=30000 IF COMING FROM OPTION 1
4206 CLS: LOCATE 10,1: PRINT"ARE YOU COMING TO THIS OPTION OF THE SETUP MENU TO CORRECT PREVIOUS MISTAKES IN"
4208 PRINT"IDENTIFYING ACCOUNT NUMBERS?  (IF NOT, YOU WILL BE RETURNED TO THE DAILY MENU.)": PRINT
4210 PRINT"ENTER `Y'  (YES, CONTINUE PROCESSING) OR `N'  (NO, RETURN TO DAILY MENU.)"
4212 ROW=13: COLUMN=76: LENGTH=1: GOSUB 22800
4214 IF I8$="Y" OR I8$="y" OR I8$="N" OR I8$="n" THEN GOTO 4216 ELSE GOTO 4212
4216 IF I8$="N" OR I8$="n" THEN RUN "DAILY.BAS": END
4218 CLS: LOCATE 10,1: PRINT"BE SURE TO HAVE A CURRENT LISTING OF YOUR GENERAL LEDGER ACOUNTS BEFORE YOU"
4220 PRINT"CONTINUE.  IT IS VERY IMPORTANT THAT YOU GIVE CPA-LEDGER THE PROPER ACCOUNT"
4222 PRINT"NUMBERS.  OTHERWISE, THE DAILY MENU OPTIONS WILL NOT EXECUTE PROPERLY.": PRINT
4224 PRINT"DO NOT RELY ON YOUR MEMORY.  HAVE A CURRENT LISTING OF THE ACCOUNT NUMBERS IN"
4226 PRINT"FRONT OF YOU FOR REFERENCE.": PRINT
4228 PRINT"PRESS ANY KEY WHEN YOU ARE READY TO CONTINUE.": GOSUB 16300: CLS
4230 FOR I = 1 TO LASTACTNO-2: INPUT #2,F2     '1ST 2 RECS ALREADY READ
4232 IF I=3 AND F2=0 THEN GOTO 4242     'I=3 WHEN AT QTY OF BANK ACCOUNTS
4234 IF I=3 AND F2 <> 0 THEN GOTO 4238  'BANK ACCTS ARE STORED- BYPASS THEM
4236 GOTO 4240
4238 FOR J = 1 TO F2: INPUT #2,F3: NEXT J: GOTO 4242  'BYPASS BANK ACCTS
4240 NEXT I
4242 INPUT #2,S1          'A/C# SALES
4244 INPUT #2,LASTACTNO   'LAST A/C#
4400 CLOSE: GOSUB 14700: WHILE I1$ <> "SALES                    "
4500 M3=M3+1: GET #1,M3: I1$=X1$
4600 IF F1=1 THEN GOTO 4900
4700 IF I1$="SALES                    " THEN Z99=M3: F1=1
4800 WEND
4900 M3=LASTACTNO: FOR V = 1 TO 3
5000 IF V=1 THEN T1$="ACCOUNTS RECEIVABLE": GOTO 5300
5100 IF V=2 THEN T1$="BEGINNING MERCHANDISE INVENTORY": GOTO 5300
5200 IF V=3 THEN T1$="RETAINED EARNINGS": GOSUB 26100
5300 CLS: IF V=2 THEN LOCATE 15,1: PRINT"IF YOU DO NOT WISH TO HAVE A COST OF GOODS SOLD SECTION ON YOUR INCOME STATE-"
5400 IF V=2 THEN LOCATE 16,1: PRINT"MENT, ENTER 0 (ZERO).  THE COST OF GOODS SECTION IS OMITTED FROM YOUR INCOME"
5500 IF V=2 THEN LOCATE 17,1: PRINT"INCOME STATEMENT IF YOU ENTER A 0 (ZERO) NOW   A-N-D  IF YOU DID NOT"
5600 IF V=2 THEN LOCATE 18,1: PRINT"INCLUDE ANY ACTIVE ACCOUNTS FOR PURCHASES WHILE USING OPTION 1 OF THE"
5700 IF V=2 THEN LOCATE 19,1: PRINT"SETUP MENU.": LOCATE 10,1: GOTO 5900
5800 CLS: LOCATE 10,1
5900 PRINT"ENTER THE ACCOUNT NUMBER FOR ";T1$;".  ";: GOSUB 22700: ROW=10: COLUMN=64: LENGTH=4: GOSUB 22800
6000 GOSUB 15400      'CHK FOR NONNUMS
6100 IF V=2 THEN LOCATE 15,1: PRINT SPACE$(80): LOCATE 16,1: PRINT SPACE$(80): LOCATE 17,1: PRINT SPACE$(80): LOCATE 18,1: PRINT SPACE$(80): LOCATE 19,1: PRINT SPACE$(12)
6200 IF I8$ < "0" THEN GOTO 5300
6300 IF F1=1 THEN GOSUB 15900: GOSUB 16100: GOTO 5300
6400 C1=VAL(I8$)
6500 IF C1 > M3 THEN GOSUB 16700: GOTO 5300  'CHK ACCT NBR UPPER LIMIT
6600 IF C1 > 0 THEN GOTO 7000
6700 IF V=3 THEN GOSUB 26100: GOTO 5300
6800 GOSUB 17900   'VERIFY INPUT OF ZERO FOR ACCT NBR
6900 IF I8$ = "N" OR I8$="n" THEN GOTO 5300 ELSE CLS: GOTO 8400
7000 GET #1,C1
7100 I5$=X4$
7200 IF I5$ = "1" THEN GOTO 7400
7300 GOSUB 20400: GOTO 5300
7400 F1=0
7500 FOR K = 1 TO C2       'CHK FOR DOUBLE ENTRY OF ACCT NBR
7600 IF A(K)=C1 THEN F1=1
7700 NEXT K
7800 IF F1=0 THEN GOTO 8200
7900 GOSUB 21800            'ERROR MSG
8000 IF F1=2 THEN CLOSE: KILL "*.FIL": GOTO 24900   'RETURN TO SETUP MENU.
8100 GOTO 5300
8200 GOSUB 18600   'DISPLAY INPUT FOR VERIFICATION
8300 IF I8$= "N" OR I8$="n" THEN GOTO 5300
8400 WRITE #2,C1: C2=C2+1: A(C2)=C1: F11=F11+1
8500 NEXT V: CLS:OLDC2=C2
8600 CLS: LOCATE 5,1
8700 PRINT"HOW MANY DIFFERENT CHECKING ACCOUNTS SHOULD BE INCLUDED IN THE GENERAL LEDGER?"
8800 PRINT"CAREFULLY NOTE THAT THE REQUESTED INPUT IS FOR THE NUMBER OF DIFFERENT CHECKING"
8900 PRINT"ACCOUNTS  -  NOT FOR THE NUMBER OF BANKS IN WHICH YOU HAVE THOSE CHECKING"
9000 PRINT"ACCOUNTS.  FOR EXAMPLE, IT YOU HAVE TWO DIFFERENT CHECKING ACCOUNTS IN ONE"
9100 PRINT"BANK, YOUR INPUT SHOULD BE  2.  IF YOU HAVE FIVE CHECKING ACCOUNTS IN TWO"
9200 PRINT"BANKS, YOUR INPUT SHOULD BE  5."
9300 LOCATE 18,1: PRINT SPACE$(80): LOCATE 18,1
9400 PRINT"ENTER YOUR INPUT NOW.";: GOSUB 22700: ROW=18: COLUMN=25: LENGTH=1: GOSUB 22800
9500 GOSUB 15400
9600 IF F1=1 THEN LOCATE 20,1: GOSUB 16000: LOCATE 21,1: GOSUB 16200: LOCATE 20,1: PRINT SPACE$(80): LOCATE 21,1: PRINT SPACE$(80): GOTO 9300
9700 C11=VAL(I8$)
9800 QTYACTS=C11  'SAVE QTY BANK ACTS.
9900 IF C11 = 0 THEN  WRITE #2,QTYACTS: F11=F11+1: GOTO 13100  'NO BANK ACTS.
10000 T1$=" BANK ACCOUNT "
10100 BNKACT=0: FOR V = 1 TO C11
10200 CLS: LOCATE 10,1
10300 PRINT"ENTER THE ACCOUNT NUMBER FOR";T1$;V;" OF ";C11;".";: GOSUB 22700: ROW=10: COLUMN=55: LENGTH=4: GOSUB 22800
10400 GOSUB 15400      'CHK FOR NONNUMS
10500 IF F1=1 THEN GOSUB 15900: GOSUB 16100: GOTO 10200
10600 C1=VAL(I8$)
10700 IF C1 > M3 THEN GOSUB 16700: GOTO 10200  'CHK ACCT NBR UPPER LIMIT
10800 IF C1 > 0 THEN GOTO 11100
10900 F1=0: GOSUB 17100: IF F1=1 THEN GOTO 8600 ELSE GOTO 10200  'ERROR MESSAGE
11000 IF I8$ = "N" OR I8$="n" THEN GOTO 10200 ELSE GOTO 12500
11100 GET #1,C1
11200 I5$=X4$
11300 IF I5$ = "1" THEN GOTO 11500
11400 GOSUB 20400: GOTO 10200
11500 F1=0
11600 FOR K = 1 TO C2       'CHK FOR DOUBLE ENTRY OF ACCT NBR
11700 IF A(K)=C1 THEN F1=1
11800 NEXT K
11900 IF F1=0 THEN GOTO 12300
12000 GOSUB 21800            'ERROR MSG
12100 IF F1=2 THEN CLOSE: KILL "*.FIL": GOTO 24900   'RETURN TO SETUP MENU.
12200 GOTO 10200
12300 GOSUB 18600   'DISPLAY INPUT FOR VERIFICATION
12400 IF I8$= "N" OR I8$="n" THEN GOTO 10200
12500 BNKACT=BNKACT+1: C(BNKACT)=C1: C2=C2+1: A(C2)=C1:  'SAVE BANK ACCT#
12600 NEXT V
12700 WRITE #2,QTYACTS: F11=F11+1: IF BNKACT=QTYACTS THEN GOTO 13000
12800 CLS: LOCATE 10,1: PRINT"NON-RECOVERABLE ERROR.  IF YOU NEED ASSISTANCE, CALL JIM FOSTER.  TELEPHONE AND"
12900 PRINT"ADDRESS ARE IN USER'S MANUAL.": END
13000 FOR I = 1 TO QTYACTS: WRITE #2,C(I): F11=F11+1: NEXT I
13100 CLOSE #2: OPEN "PASACT.FIL" FOR INPUT AS #2
13200 FOR S = 1 TO F11: INPUT #2,C1: B(S)=C1: NEXT S: CLOSE #2
13300 OPEN "PASACT.FIL" FOR OUTPUT AS #2
13400 WRITE #2,F11+3
13500 FOR P = 1 TO F11: WRITE #2,B(P): NEXT P: F11=F11+1
13600 WRITE #2,Z99: WRITE #2,M3: F11=F11+2  'WRITE SALES ACCT#(Z99) AND LAST REC#(M3)
13700 CLS: LOCATE 5,1
13800 PRINT"ONE LAST INPUT IS REQUIRED BEFORE PROCESSING BY THIS PROGRAM WILL BE COMPLETE."
13900 PRINT"THAT INPUT IS THE NAME OF THE COMPANY OR THE INDIVIDUAL FOR WHOM FINANCIAL"
14000 PRINT"RECORDS ARE TO BE MAINTAINED.  FOR EXAMPLE, IF THE NAME IS `ABC COMPANY', YOUR"
14100 PRINT"INPUT SHOULD BE `ABC COMPANY' (WITHOUT THE QUOTES).": PRINT
14200 PRINT"ENTER THE NAME NOW.": ROW=10: COLUMN=23: LENGTH=30: GOSUB 22800
14300 IF LEFT$(I8$,1) = " " THEN GOTO 13700
14400 WRITE #2,I8$  'WRITE COMPANY NAME
14500 LSET V1$="0": LSET V2$=MKD$(0#): LSET V3$=MKD$(0#): PUT #3,1
14600 GOTO 24900
14700 OPEN "TEST1.FIL" FOR INPUT AS #2: CLOSE #2
14800 OPEN "TEST2.FIL" FOR OUTPUT AS #2: CLOSE #2
14900 OPEN "R",1,"GENLEG.FIL",111
15000 FIELD #1,25 AS X1$,30 AS X2$,6 AS X3$,1 AS X4$,4 AS X5$,2 AS X7$,1 AS X8$,10 AS X9$,8 AS Y1$,8 AS Y2$,8 AS Y3$,8 AS Y4$
15100 OPEN "R",3,"INVPRO.FIL",17
15200 FIELD #3,1 AS V1$,8 AS V2$,8 AS V3$
15300 OPEN "PASACT.FIL" FOR OUTPUT AS #2: RETURN
15400 F1=0
15500 FOR I = 1 TO LEN(I8$)
15600 IF MID$(I8$,I,1) < "0" OR MID$(I8$,I,1) > "9" THEN F1=1: I=LEN(I8$)
15700 NEXT I
15800 RETURN
15900 LOCATE 18,1
16000 PRINT"ENTRY IS INCORRECT.  TRY AGAIN.": RETURN
16100 LOCATE 19,1
16200 PRINT"PRESS ANY KEY TO CONTINUE.
16300 GOSUB 22700
16400 K$=INKEY$
16500 IF K$="" THEN GOTO 16400
16600 RETURN
16700 LOCATE 15,1
16800 PRINT"THE ACCOUNT NUMBER THAT YOU INPUT IS TOO LARGE.  THE LARGEST ACCOUNT NUMBER IN"
16900 PRINT"THE GENERAL LEDGER IS ";M3;".  CONSULT A CURRENT LISTING OF THE ACCOUNTS AND"
17000 PRINT"TRY AGAIN.  PRESS ANY KEY TO CONTINUE.": GOSUB 16300: RETURN
17100 LOCATE 13,1: PRINT"YOUR ENTRY IS INCORRECT.  YOU MUST ENTER AN ACCOUNT NUMBER FOR A BANK OR START"
17200 LOCATE 14,1: PRINT"AGAIN AT THE POINT WHERE YOU ENTER THE NUMBER OF CHECKING ACCOUNTS TO BE"
17300 LOCATE 15,1: PRINT"INCLUDED IN THE GENERAL LEDGER.  DO YOU WISH TO START AGAIN?"
17400 LOCATE 17,1: PRINT"ENTER `Y' FOR `YES' OR `NO' FOR `NO'.";
17500 ROW=17: COLUMN=40: LENGTH=1: GOSUB 22800
17600 IF I8$="Y" OR I8$="y" OR I8$="N" OR I8$="n" THEN GOTO 17700  ELSE GOTO 17500
17700 IF I8$="Y" OR I8$="y" THEN F1=1: C2=OLDC2
17800 RETURN
17900 LOCATE 13,1: PRINT"YOUR INPUT FOR THE ACCOUNT NUMBER IS ZERO (0).  FOR THAT INPUT, A ZERO, THE"
18000 PRINT"COMPUTER WILL ASSUME THAT THE ABOVE ACCOUNT IS NOT CURRENTLY INCLUDED IN THE"
18100 PRINT"GENERAL LEDGER.  IS THAT ASSUMPTION CORRECT?  ANSWER BY ENTERING `Y' FOR `YES'"
18200 LOCATE 16,1: PRINT SPACE$(80): LOCATE 16,1: PRINT"OR `N' FOR `NO'.";: GOSUB 22700: ROW=16: COLUMN=20: LENGTH=1: GOSUB 22800
18300 IF I8$ = "Y" OR I8$="y" OR I8$ = "N" OR I8$="n" THEN GOTO 18500
18400 LOCATE 18,1: GOSUB 16000: LOCATE 19,1: GOSUB 16200: LOCATE 18,1: PRINT SPACE$(80): LOCATE 19,1: PRINT SPACE$(80): GOTO 18200
18500 RETURN
18600 CLS: LOCATE 2,1
18700 PRINT"YOUR INPUT FOR THE ACCOUNT NUMBER IS DISPLAYED BELOW.  FOR YOUR REVIEW, ALSO"
18800 PRINT"DISPLAYED IS THE ACCOUNT'S TITLE AS IT IS RECORDED IN THE GENERAL LEDGER."
18900 PRINT"REVIEW BOTH THE ACCOUNT NUMBER AND THE ACCOUNT TITLE.  IF THE ACCOUNT TITLE"
19000 PRINT"IS NOT FOR  ****** ";T1$;" ******, YOUR INPUT FOR THE"
19100 PRINT"ACCOUNT NUMBER IS INCORRECT.": PRINT
19200 GET #1,C1
19300 T5$=X2$
19400 PRINT SPC(6) "ACCOUNT"
19500 PRINT SPC(6) "NUMBER" SPC(3) STRING$(8,"*") " ACCOUNT TITLE " STRING$(7,"*")
19600 PRINT
19700 PRINT SPC(7);: PRINT USING "####";C1;: PRINT SPC(4) T5$
19800 PRINT
19900 LOCATE 13,1: PRINT SPACE$(80): LOCATE 13,1: PRINT"IS YOUR INPUT FOR THE ACCOUNT NUMBER CORRECT?  ANSWER WITH `Y' FOR `YES' OR"
20000 PRINT"`N' FOR `NO'. ";: GOSUB 22700: ROW=14: COLUMN=16: LENGTH=1: GOSUB 22800
20100 IF I8$ = "Y" OR I8$="y" OR I8$ = "N" OR I8$="y" THEN GOTO 20300
20200 LOCATE 16,1: GOSUB 16000: LOCATE 17,1: GOSUB 16200: LOCATE 16,1: PRINT SPACE$(80): LOCATE 17,1: PRINT SPACE$(80): GOTO 19900
20300 RETURN
20400 LOCATE 12,1
20500 PRINT"YOUR INPUT IS FOR AN INACTIVE ACCOUNT.  ONLY ACTIVE ACCOUNTS CAN BE PROCESSED"
20600 PRINT"AT THIS POINT.  CONSULT THE PRINTOUT FROM OPTION 1 OF THE SETUP MENU.": PRINT
20700 PRINT"IF YOU MADE A MISTAKE IN OPTION 1 OF THE SETUP MENU AND THIS ACCOUNT IS NOT"
20800 PRINT"INCLUDED IN THE OPTION 1 PRINTOUT, ANSWER `Y' TO THE QUESTION THAT FOLLOWS AND"
20900 PRINT"YOU WILL BE RETURNED TO THE SETUP MENU FOR USING OPTION 1 TO REENTER ALL OF"
21000 PRINT"YOUR ACCOUNT INFORMATION.  UPON REENTERING YOUR ACCOUNT INFORMATION, BE VERY"
21100 PRINT"CAREFUL AND TRY TO AVOID MISTAKES.": PRINT
21200 PRINT"DO YOU WISH TO RETURN TO THE SETUP MENU TO START AGAIN?"
21300 PRINT"ENTER `Y' FOR `YES' OR `N' FOR `NO'"
21400 ROW=22: COLUMN=39: LENGTH=1: GOSUB 22800
21500 IF I8$="Y" OR I8$="y" OR I8$="N" OR I8$="n" THEN GOTO 21600 ELSE GOTO 21400
21600 IF I8$="Y" OR I8$="y" THEN CLOSE: KILL "*.FIL": RUN "SETUP.BAS"
21700 RETURN
21800 LOCATE 12,1: GOSUB 16000    'ENTRY IS INCORRECT
21900 PRINT"YOU INPUT THE SAME ACCOUNT NUMBER MORE THAN ONE TIME.  IF YOUR ARE UNSURE OF"
22000 PRINT"YOUR INPUT, YOU MAY, IF YOU DESIRE, RETURN TO THE SETUP MENU AND START AGAIN,"
22100 PRINT"WITH OPTION 1 (AND ALL THE INPUT REQUIRED BY OPTION 1).  DO YOU DESIRE TO"
22200 PRINT"RETURN TO THE SETUP MENU?  ANSWER `Y' FOR `YES' OR `N' FOR `NO'.";
22300 ROW=16: COLUMN=67: LENGTH=1: GOSUB 22800
22400 IF I8$= "Y" OR I8$="y" OR I8$ = "N" OR I8$="n" THEN GOTO 22500 ELSE GOTO 22300
22500 IF I8$ = "Y" OR I8$="y" THEN F1=2 ELSE F1=0
22600 RETURN
22700 DEF SEG=0: POKE 1050, PEEK(1052): RETURN
22800 GOSUB 22700: I8$=""
22900 FOR X = 1 TO LENGTH: I8$=I8$ + CHR$(254): NEXT X
23000 LOCATE ROW,COLUMN
23100 PRINT I8$;
23200 POINTER = 1: A$=" "
23300 WHILE (ASC(A$) <> 13)
23400 A$ = INPUT$(1)
23500 IF (POINTER > LENGTH) AND (ASC(A$) = 13) THEN GOTO 24700
23600 IF (POINTER > LENGTH) AND (ASC(A$) = 8) THEN GOTO 24200
23700 IF (POINTER > LENGTH) THEN BEEP: BEEP: BEEP: GOTO 24700
23800 IF (ASC(A$) >= 32) THEN MID$(I8$,POINTER,1) = A$: POINTER = POINTER +1:  GOTO 24500
23900 IF (POINTER = 1) AND (ASC(A$) = 8) THEN BEEP: BEEP: BEEP: GOTO 24500
24000 IF (ASC(A$) <> 8) THEN GOTO 24400
24100 IF MID$(I8$,POINTER,1) = CHR$(254) THEN
24200    MID$(I8$,POINTER-1,1) = CHR$(254)
24300    POINTER = POINTER -1
24400 IF (ASC(A$) = 13) THEN I8$ = MID$(I8$,1,POINTER-1): POINTER = LENGTH + 1
24500 LOCATE ROW,COLUMN
24600 PRINT I8$
24700 WEND
24800 RETURN
24900 CLOSE: FOR I = 1 TO 10: LPRINT: NEXT I: RUN "SETUP.BAS": END
25000 IF ERR=53 THEN GOTO 25300
25100 IF ERR=25 OR ERR=27 THEN GOTO 25700
25200 ON ERROR GOTO 0
25300 CLS: LOCATE 10,1
25400 PRINT"GENERAL LEDGER DATA FILES NOT FOUND. PRESS ANY KEY AND YOU WILL BE RETURNED"
25500 PRINT"TO THE SETUP MENU.": GOSUB 16300
25600 GOTO 24900
25700 CLS: LOCATE 10,2
25800 PRINT"CHECK YOUR PRINTER.  IT IS EITHER NOT TURNED ON OR IT IS OUT OF PAPER."
25900 PRINT"PRESS ANY KEY WHEN YOU ARE READY TO CONTINUE.": GOSUB 16300
26000 CLS: RESUME
26100 CLS: LOCATE 5,1
26200 PRINT"SINCE THIS VERSION OF CPA-LEDGER IS FOR CORPORATIONS, YOU MUST HAVE AT LEAST"
26300 PRINT"ONE RETAINED EARNINGS ACCOUNT IN YOUR STATEMENT OF FINANCIAL CONDITION.": PRINT
26400 PRINT"THE ACCOUNT NUMBER THAT YOU ENTER SHOULD BE THE ONE TO BE USED FOR POSTING"
26500 PRINT"PROFITS AND LOSSES.  ANY OTHER RETAINED EARNINGS ACCOUNTS THAT YOU ESTABLISH"
26600 PRINT"ARE FOR YOUR OWN INFORMATION -  CPA-LEDGER DOES NOT USE THEM FOR POSTING"
26700 PRINT"PROFITS AND LOSSES.": PRINT
26800 PRINT"IF YOU DID NOT INCLUDE AT LEAST ONE RETAINED EARNINGS ACCOUNT IN THE STATEMENT"
26900 PRINT"FINANCIAL POSITION, ANSWER `N' (FOR `NO') TO THE QUESTION THAT FOLLOWS AND"
27000 PRINT"USE OPTION 1 OF THE SETUP MENU AGAIN, THIS TIME INCLUDING AT LEAST ONE RETAINED"
27100 PRINT"EARNINGS ACCOUNT.": PRINT: PRINT
27200 PRINT"DID YOU INCLUDE A RETAINED EARNINGS ACCOUNT IN"
27300 PRINT"THE STATEMENT OF FINANCIAL CONDITION?"
27400 ROW=20: COLUMN=50: LENGTH=1: GOSUB 22800
27500 IF I8$="Y" OR I8$="y" OR I8$="N" OR I8$="n" THEN GOTO 27600 ELSE GOTO 27400
27600 IF I8$="Y" OR I8$="y" THEN GOTO 27800
27700 CLOSE: KILL "*.FIL": GOTO 24900
27800 RETURN
```
{% endraw %}

## TRIBAL.BAS

{% raw %}
```bas
500  ' COPYRIGHT 1986 TRONOLONE & FOSTER, PC
1000 REM TRIBAL.BAS
1010 CLEAR: ON ERROR GOTO 1700
1080 CLS: LOCATE 12,31: PRINT"PLEASE STAND BY.": GOSUB 1360
1090 INPUT #3,F1: FOR I = 1 TO F1-1: INPUT #3,C10: NEXT I: INPUT #3,T1$
1100 CLS: LOCATE 8,1
1110 PRINT"ENTER TODAY'S DATE. USE FORMAT MMDDYY.  (I.E. JUNE 8, 1984 = 060884.)"
1120 ROW=8: COLUMN=73: LENGTH=6: GOSUB 2000: GOSUB 1410
1130 IF F1 <> 0 OR LEN(I8$) < 6 THEN GOTO 1100
1140 GOSUB 2210: IF F1 <> 0 THEN GOTO 1100
1150 CLS: LOCATE 12,31: PRINT"PLEASE STAND BY.": GOSUB 1470
1160 OPEN "LPT1:" AS #2
1170 FOR J = 1 TO C10: C1=C1+1: GET #1,C1: I1=VAL(X4$)
1180 IF I1=0 OR I1=2 THEN GOTO 1330
1190 I3$=X2$: I4$=X8$
1200 IF I4$="D" OR I4$="C" OR I4$="1" OR I4$="2" THEN GOTO 1220
1210 CLS: LOCATE 10,1: PRINT"INCORRECT DATA FOUND. PROCESSING TERMINATED.": GOSUB 1760: GOTO 2250
1220 C2#=CVD(Y1$): C3#=CVD(Y2$): C4#=CVD(Y3$): C5#=CVD(Y4$)
1230 C6#=C2#+C4#: C7#=C3#+C5#
1240 IF C6# => C7# THEN I2# = C6# - C7# ELSE I2# = C7# - C6#
1250 IF (I4$="D" OR I4$="2") AND C6# < C7# THEN F1=2: C9#=C9#+I2#: GOTO 1290
1260 IF (I4$="D" OR I4$="2") AND C6# => C7# THEN F1=1: C8#=C8#+I2#: GOTO 1290
1270 IF (I4$="C" OR I4$="1") AND C7# <  C6# THEN F1=1: C8#=C8#+I2#: GOTO 1290
1280 IF (I4$="C" OR I4$="1") AND C7# => C6# THEN F1=2: C9#=C9#+I2#
1290 GOSUB 1590: IF F5=1 THEN WIDTH #2,80: PRINT #2,
1300 WIDTH #2,255
1310 PRINT #2,SPC(5);: PRINT #2,USING "####";C1;: PRINT #2,SPC(4) I3$ SPC(P1);: PRINT #2,USING FORMAT3$;I2#: F5=1
1320 P3=P3+1: IF P3 > 50 THEN WIDTH #2,80: PRINT #2,: F5=0: P3=66-P3: GOSUB 1460: GOSUB 1470
1330 NEXT J
1340 GOSUB 1870
1350 FOR I = 1 TO 10: LPRINT: NEXT I: GOTO 2250
1360 OPEN "PASACT.FIL" FOR INPUT AS #3
1370 OPEN "R",#1,"GENLEG.FIL",111
1380 FIELD #1,25 AS X1$,30 AS X2$,6 AS X3$,1 AS X4$,4 AS X5$,2 AS X7$,1 AS X8$,10 AS X9$,8 AS Y1$,8 AS Y2$,8 AS Y3$,8 AS Y4$
1390 RETURN
1400 PRINT"PRESS ANY KEY TO CONTINUE.": GOSUB 1760: RETURN
1410 D1$=LEFT$(I8$,2): IF D1$ < "01" OR D1$ > "12" THEN F1=1: GOTO 1450
1420 D1$=MID$(I8$,3,2): IF D1$ < "01" OR D1$ > "31" THEN F1=1: GOTO 1450
1430 D1$=RIGHT$(I8$,2): IF D1$ < "86" THEN F1=1: GOTO 1450
1440 F1=0
1450 RETURN
1460 FOR L = 1 TO P3: LPRINT: NEXT L: RETURN
1470 P2=P2+1: P3=13
1480 FOR L = 1 TO 6
1490 IF L=4 THEN LPRINT SPACE$(69);"PAGE ";P2: GOTO 1520
1500 IF L=5 THEN LPRINT SPC(59) "RUNDATE  ";: GOSUB 1580: GOTO 1520
1510 LPRINT
1520 NEXT L
1530 FF1=LEN(T1$): FF1=40-(INT(FF1)/2): LPRINT SPACE$(FF1);T1$
1540 LPRINT SPC(28) "UNADJUSTED TRIAL BALANCE": LPRINT: LPRINT
1550 LPRINT SPC(5) "ACCOUNT"
1560 LPRINT SPC(5) "NUMBER" SPC(4) "ACCOUNT TITLE" SPC(26) "DEBIT" SPC(10) "CREDIT"
1570 LPRINT: RETURN
1580 LPRINT LEFT$(I8$,2);"/";MID$(I8$,3,2);"/";RIGHT$(I8$,2): RETURN
1590 IF F1=2 THEN GOTO 1640
1600 IF I2# > 999999.99# THEN P1=1: FORMAT3$="###########,.##": GOTO 1680
1610 IF I2# > 999.99# THEN P1=5: FORMAT3$="#######,.##": GOTO 1680
1620 IF I2# > 0.99# THEN P1=10: FORMAT3$="###.##": GOTO 1680
1630 IF I2# < 1# THEN P1=13: FORMAT3$=".##": GOTO 1680
1640 IF I2# > 999999.99# THEN P1=17: FORMAT3$="###########,.##": GOTO 1680
1650 IF I2# > 999.99# THEN P1=21: FORMAT3$="#######,.##": GOTO 1680
1660 IF I2# > 0.99# THEN P1=26: FORMAT3$="###.##": GOTO 1680
1670 IF I2# < 1# THEN P1=29: FORMAT3$=".##"
1680 RETURN
1690 ' ERROR HANDLING ROUTINE.
1700 IF ERR=53 THEN GOTO 1730
1710 IF ERR= 25 OR ERR=27 THEN GOTO 1800
1720 ON ERROR GOTO 0
1730 CLS: LOCATE 10,1
1740 PRINT"GENERAL LEDGER DATA FILES NOT FOUND. PRESS ANY KEY AND YOU WILL BE RETURNED"
1750 PRINT"TO THE DAILY MENU.": GOSUB 1760: GOTO 2250
1760 GOSUB 1850
1770 K$=INKEY$
1780 IF K$="" THEN GOTO 1770
1790 RETURN
1800 CLS: LOCATE 10,2
1810 PRINT"CHECK YOUR PRINTER.  IT IS EITHER NOT TURNED ON OR IT IS OUT OF PAPER."
1820 PRINT"PRESS ANY KEY WHEN YOU ARE READY TO CONTINUE.": GOSUB 1760
1830 CLS: RESUME
1840 ' CLEAR KEYBOARD BUFFER.
1850 DEF SEG=0: POKE 1050, PEEK(1052): RETURN
1860 ' PRINT LAST ACCOUNT AND TOTALS.
1870 WIDTH #2,80
1880 PRINT #2,SPC(45) STRING$(14,"_") SPC(2) STRING$(14,"_")
1890 PRINT #2,
1900 WIDTH #2,255
1910 I2#=C8#: F1=1: GOSUB 1590
1920 PRINT #2,SPC(5) "TOTALS"  SPC(32) SPC(P1);: PRINT #2,USING FORMAT3$;I2#;
1930 I2#=C9#: F1=2: GOSUB 1590: P1=P1-16
1940 PRINT #2,SPC(P1);: PRINT #2,USING FORMAT3$;I2#
1950 WIDTH #2,80
1960 PRINT #2,SPC(45) STRING$(14,"_") SPC(2) STRING$(14,"_")
1970 PRINT #2,SPC(45) STRING$(14,"-") SPC(2) STRING$(14,"-")
1980 CLOSE #2
1990 RETURN
2000 GOSUB 1850: I8$=""
2010 FOR X = 1 TO LENGTH: I8$=I8$ + CHR$(254): NEXT X
2020 LOCATE ROW,COLUMN
2030 PRINT I8$;
2040 POINTER = 1: A$=" "
2050 WHILE (ASC(A$) <> 13)
2060 A$ = INPUT$(1)
2070 IF (POINTER > LENGTH) AND (ASC(A$) = 13) THEN GOTO 2190
2080 IF (POINTER > LENGTH) AND (ASC(A$) = 8) THEN GOTO 2140
2090 IF (POINTER > LENGTH) THEN GOTO 2190
2100 IF (ASC(A$) >= 32) THEN MID$(I8$,POINTER,1) = A$: POINTER = POINTER +1:  GOTO 2170
2110 IF (POINTER = 1) AND (ASC(A$) = 8) THEN GOTO 2170
2120 IF (ASC(A$) <> 8) THEN GOTO 2160
2130 IF MID$(I8$,POINTER,1) = CHR$(254) THEN
2140    MID$(I8$,POINTER-1,1) = CHR$(254)
2150    POINTER = POINTER -1
2160 IF (ASC(A$) = 13) THEN I8$ = MID$(I8$,1,POINTER-1): POINTER = LENGTH + 1
2170 LOCATE ROW,COLUMN
2180 PRINT I8$
2190 WEND
2200 RETURN
2210 F1=0: FOR I = 1 TO LEN(I8$)
2220 IF MID$(I8$,I,1) < "0" OR MID$(I8$,I,1) > "9" THEN F1=1
2230 NEXT I
2240 RETURN
2250 CLOSE: FOR I = 1 TO 10: LPRINT: NEXT I: RUN "DAILY.BAS": END
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0466

     Volume in drive A has no label
     Directory of A:\

    ACTDTL   BAS     10186   1-23-89  10:12a
    ANALYS   FIL       135   7-08-88  12:23a
    APNDX-A  TXT      2491   1-23-89  10:19a
    APNDX-B  TXT     17769   1-23-89  10:19a
    APNDX-C  TXT      7599   1-23-89  10:19a
    APNDX-D  TXT     38245   1-23-89  10:19a
    APNDX-E  TXT     54214   1-23-89  10:19a
    CHKREG   BAS      9994   1-23-89  10:12a
    CHP12-14 TXT     26383   1-23-89  10:20a
    DAILY    BAS      3949   1-23-89  10:11a
    EXPACTS  FIL        18   1-01-80   1:24a
    GENJNL   FIL      4827   6-26-88  12:02a
    GENLEG   FIL     32412   1-01-80  12:55a
    GENLGR   BAS      9706   1-23-89  10:10a
    GLACTS   BAS      6524   1-23-89  10:10a
    INVPRO   FIL        23   1-03-80   3:12a
    NEWACT   BAS     15537   1-23-89  10:11a
    OPNBAL   BAS     17579   1-23-89  10:10a
    PANDL    BAS     24552   1-23-89  10:11a
    PASACT   FIL        53  10-14-87  12:12a
    POST     BAS     17464   1-23-89  10:12a
    PSTCLS   BAS      5192   1-23-89  10:12a
    READ     ME       4672   1-03-80  12:53a
    SELTRA   BAS     12564   1-23-89  10:11a
    SETUP    BAS      2717   1-23-89  10:12a
    STDACT   FIL       322   1-01-80   1:02a
    STOACT   BAS     13735   1-23-89  10:12a
    TEST1    FIL         1   1-01-80   1:01a
    TEST2    FIL         1   1-01-80  12:36a
    TRIBAL   BAS      4247   1-23-89  10:11a
    GO       BAT        91   3-14-89   9:24a
           31 file(s)     343202 bytes
                               0 bytes free
