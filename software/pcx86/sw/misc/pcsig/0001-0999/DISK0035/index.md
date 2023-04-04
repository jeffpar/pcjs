---
layout: page
title: "PC-SIG Library Disk #35"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0035/
machines:
  - id: ibm5150
    type: pcx86
    config: /machines/pcx86/ibm/5150/cga/256kb/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk 0035"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5150" %}

{% comment %}info_begin{% endcomment %}

## Information about "GAMES SERIES NO 5"

    Another collection of games from the earlier years of PC-SIG.  All
    these games have been in the library since the early 1980's.  These
    programs are not only entertaining, but will show you the origins of
    some of later programs in the library.  Some programs here have some
    practical uses as well.  Simple phone lists, checkbook programs, and
    others provide useful functions for you to enjoy.
    
    Special Requirements:  A version of BASIC.
    
    How to Start:  Type GO (press enter).
    
    Suggested Registration:  None.
    
    File Descriptions:
    
    BULLSEYE BAS  Simulated dart game.
    CHESS    BAS  Play chess with the computer.
    CHIEF    BAS  Math game.
    CAPTURE  BAS  Logic game, try to capture the enemy space ship.
    DECIDE   BAS  Helps decide between alternatives.
    GOLF     BAS  Play golf, pick your club and stroke.
    DESERT   BAS  Try to cross the desert without getting killed.
    BARGRAPH BAS  Creates bargraphs.
    KENO     BAS  Nevada style bingo.
    ICICLE   BAS  A race to the top of the screen.
    LOAN     BAS  Loan amortization program.
    LEM      BAS  A moon lander program.
    LANDER   BAS  Another moon lander program.
    KINGDOM  BAS  Can you survive your term as king?
    MISSLE   BAS  Earth under attack from another planet.
    SECRETNO BAS  You try to guess the number.
    STARS    BAS  Challenging permutation puzzle to solve.
    STORY    BAS  Creates four stories from user-supplied words.
    TRAP     BAS  Number guessing game.
    STRIKE9  BAS  Dice roll numbers game.
    ZAP-EM   BAS  Space shoot'em on the monochrome.
    23MATCH  BAS  The match game.
    ADDRESS  BAS  Addresses and phone numbers.
    BANKER   BAS  Checking account maintenance, expense categories.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## 23MATCH.BAS

```bas
100 REM *** '23 MATCHES'"
110 PRINT "LET'S PLAY 23 MATCHES. WE START WITH 23 MATCHES,"
115 PRINT "YOU MOVE FIRST. YOU MAY TAKE 1,2 OR 3 MATCHES."
120 PRINT "THEN I MOVE...I MAY TAKE 1,2 OR 3 MATCHES."
125 PRINT "YOU MOVE, I MOVE AND SO ON. THE ONE WHO HAS TO"
130 PRINT "TAKE THE LAST MATCH LOSES."
135 PRINT "GOOD LUCK AND HAVE FUN!"
140 PRINT
150 LET M=23
200 REM *** THE HUMAN MOVES
205 PRINT
210 PRINT "THERE ARE NOW ";M;"MATCHES."
215 PRINT
220 INPUT "HOW MANY DO YOU TAKE"; H
240 IF H>M THEN 510
250 IF H<>INT(H) THEN 510
260 IF H<=0 THEN 510
270 IF H>=4 THEN 510
280 LET M=M-H
290 IF M=0 THEN 410
300 REM *** THE COMPUTER MOVES
305 IF M=1 THEN 440
310 LET R=M-4*INT(M/4)
320 IF R<>1 THEN 350
330 LET C=INT(3*RND)+1
340 GOTO 360
350 LET C=(R+3)-4*INT((R+3)/4)
360 LET M=M-C
370 IF M=0 THEN 440
380 PRINT "I TOOK";C;"...";
390 GOTO 210
400 REM *** SOMEBODY WON (SEE LINES 290,305,370)
410 PRINT
420 PRINT "I WON!!! BETTER LUCK NEXT TIME."
430 GOTO 140
440 PRINT
450 PRINT "OK, SO YOU WON. LET'S PLAY AGAIN."
460 GOTO 140
500 REM *** THE UMAN CHEATED! (SEE LINES 240 THRU 270)
510 PRINT "YOU CHEATED! BUT I'LL GIVE YOU ANOTHER CHANCE."
520 GOTO 215
999 END
```

## ADDRESS.BAS

```bas
100 CLS
110 A$=STRING$(80,205)
120 PRINT A$
130 PRINT TAB(21)"ADDRESSES AND PHONE NUMBERS 6005-A.BAS"
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
240 '    ***************************************************************
250 '    *                                                             *
260 '    *    FILING PROGRAM FOR NAMES, ADDRESSES AND PHONE NUMBERS    *
270 '    *                                                             *
280 '    *    The program uses a bubble sort to alphabetize and a      *
290 '    *     search loop to find a particular name.                  *
300 '    *                                                             *
310 '    ***************************************************************
320 '
330 '
340 DIM N$(20)
350 DIM A$(20)
360 DIM T$(20)
370   READ N                '*********************************
380   FOR I = 1 TO N        '*  ENTER THE DATA INTO 3 ARRAYS *
390     READ N$,A$,T$       '*                               *
400     N$(I) = N$          '*  AN ARRAY FOR THE NAMES       *
410     A$(I) = A$          '*               THE ADDRESSES   *
420     T$(I) = T$          '*               THE PHONE #     *
430  NEXT I                 '*********************************
440 '
450 '
460  FOR I = 2 TO N         '*****************************************
470   K = I                 '*                                       *
480   J = I-1               '*    THE BUBBLE SORT WHICH SORTS EACH   *
490   N$(0) = N$(K)         '*            ARRAY IN TANDEM            *
500   WHILE N$(J) > N$(K)   '*                                       *
510     SWAP N$(J), N$(K)   '*****************************************
520     SWAP A$(J), A$(K)
530     SWAP T$(J), T$(K)   ' NOTE: N$(0) is a sentinel value
540     K = J
550     J = J - 1
560   WEND
570  NEXT I
580 '
590 '
600 PRINT "FOR A LISTING OF ALL ENTRIES, ENTER A"  '***********************
610 PRINT "TO PRINT A PARTICULAR ENTRY, ENTER B"   '*                     *
620 PRINT "TO QUIT, ENTER C"                       '*     THIS IS THE     *
630 INPUT Z$                                       '*                     *
640 IF Z$ = "A" OR Z$ = "a" THEN GOSUB 700         '*         MENU        *
650 IF Z$ = "B" OR Z$ = "b" THEN GOSUB 800         '*                     *
660 IF Z$ = "C" OR Z$ = "c" THEN END               '***********************
670 GOTO 600
680 '
690 '
700 PRINT " "
710 FOR I = 1 TO N
720   PRINT N$(I)               '******************************************
730   PRINT A$(I)               '*                                        *
740   PRINT T$(I)               '*  THIS SUBROUTINE PRINTS THE LIST OF    *
750   PRINT " "                 '*       ENTRIES THAT HAVE BEEN           *
760 NEXT I                      '*            ALPHABETIZED                *
770 RETURN                      '*                                        *
780                             '******************************************
790 '
800 INPUT "WHOSE NUMBER ARE YOU LOOKING FOR"; S$   '***********************
810 I = 1                                          '*                     *
820 N$(N+1) = S$                                   '*   THE SEARCH LOOP   *
830 WHILE N$(I) <> S$                              '*                     *
840    I = I + 1                                   '***********************
850 WEND
860 IF I = N + 1 THEN GOTO 940
870 PRINT " "                    'NOTE: N$(N+1) is a sentinel which ends
880 PRINT N$(I)                  '      an unsuccessful search. You put
890 PRINT A$(I)                  '      whatever you are looking for at the
900 PRINT T$(I)                  '      very end of the array so the search is
910 PRINT " "                    '      sure to end. Otherwise you will search
920 RETURN                       '      off the end of the error and get an
930                              '      error message.
940 PRINT
950 PRINT
960 PRINT "NOT FOUND - remember that spacing and capitalization must be                                identical to that in the data statement":PRINT
970 GOTO 600
980 '          *************************************************************
990 '          *                                                           *
1000 '          *   ENTER THE DATA HERE --- BE SURE TO UPDATE THE NUMBER    *
1010 '          *                OF ENTRIES IN LINE #685                    *
1020 '          *                                                           *
1030 '          *************************************************************
1040 '
1050 '
1060 DATA 5
1070 DATA SMITH RAY, 6 HICKORY STICK APT HARRIS NY, 587-6687
1080 DATA TAMARINE BRIAN, 555 HARVARD STREET BOSTON MA 55138, 655-866-9887
1090 DATA BARTHOL MURRAY, 44123 TAM O`SHANTER DR. SUNNY CA 96664, 714-555-5660
1100 DATA ANESHANSELY DAN, SOMEWHERE IN ITHACA, ###########
1110 DATA JOHNSON RUTH, 441 EAST 25nd ST NY NY, 212-455-0338
1120 END
```

## BANKER.BAS

```bas
10 BE=1
20 WIDTH 80
30 '*************************Title display*************************
40 KEY OFF: CLS
50 FOR J=2 TO 22
60 LOCATE 2,2:PRINT CHR$(201):LOCATE 2,79:PRINT CHR$(187)
70 LOCATE 23,2:PRINT CHR$(200):LOCATE 23,79:PRINT CHR$(188)
80 LOCATE J,2:PRINT CHR$(186)
90 LOCATE J,79:PRINT CHR$(186)
100 NEXT J
110 FOR J=3 TO 78
120 LOCATE 2,J:PRINT CHR$(205)
130 LOCATE 23,J:PRINT CHR$(205)
140 NEXT J
150 LOCATE 4 ,26: PRINT "Personal Accounting Program"
160 LOCATE 5 ,32: PRINT  "      for"
170 LOCATE 7 ,27:PRINT "THE IBM PERSONAL COMPUTER"
180 LOCATE 9 ,21: PRINT "This program is an extensive adaptation"
190 LOCATE 10,21: PRINT "of one by David Andresen for the TRS 80"
200 LOCATE 11,26: PRINT "as modified by Manuel Pablo."
210 LOCATE 12,21: PRINT "(Published in 80 Microcomputing May 82)"
220 LOCATE 18,27: PRINT "Anthony Costello, June 82"
230 LOCATE 21,27: PRINT "PRESS ANY KEY TO CONTINUE"
240 X$ = INKEY$: IF X$ = "" THEN 240
250 IF BE=1 THEN 5880
260 '********************Initial values set************************
270 DEFINT C,I-S,Z
280 DIM MO$(12),N$(26),T(12),R(12),CN(1000),M(1000),A(1000),CT(1000),ND$(14),MD(1000),AD(1000),CD(1000),TD(12)
290 NC=0:JE=0:RE=0:PR=0
300 MO$(1)="Jan":MO$(2)="Feb":MO$(3)="Mar":MO$(4)="Apr":MO$(5)="May":MO$(6)="Jun"
310 MO$(7)="Jul":MO$(8)="Aug":MO$(9)="Sep":MO$(10)="Oct":MO$(11)="Nov":MO$(12)="Dec"
320 'Expense categories
330 N$(1)="Mortgage           "
340 N$(2)="Gas Company        "
350 N$(3)="Electricity        "
360 N$(4)="Phone Company      "
370 N$(5)="Car inc. insurance "
380 N$(6)="Gulf Oil           "
390 N$(7)="American Express   "
400 N$(8)="MC/Visa/Sears      "
410 N$(9)="Water & Sewage     "
420 N$(10)="Colleges          "
430 N$(11)="Health            "
440 N$(12)="Charities         "
450 N$(13)="Entertainment     "
460 N$(14)="Allowances        "
470 N$(15)="Insurance         "
480 N$(16)="Food & cleaning   "
490 N$(17)="Cash & TC.s       "
500 N$(18)="Clothes & hair    "
510 N$(19)="Household         "
520 N$(20)="Savings & taxes   "
530 N$(21)="Business expenses "
540 N$(22)="Cancelled/not paid"
550 N$(23)="Miscellaneous     "
560 N$(24)="All categories    "
570 'Deposit categories
580 ND$(1)="AJC Salary         "
590 ND$(2)="EJC Salary         "
600 ND$(3)="Clinical practice  "
610 ND$(4)="Expense reimb.     "
620 ND$(5)="AJC misc. earnings "
630 ND$(6)="EJC misc. earnings "
640 ND$(7)="Tax repayments     "
650 ND$(8)="Transfers from CMA "
660 ND$(9)="Dividends, interest"
670 ND$(10)="Gifts             "
680 ND$(11)="Sales             "
690 ND$(12)="Corrections       "
700 ND$(13)="Miscellaneous     "
710 ND$(14)="All categories    "
720 G$="$$######,.##"
730 CLS:PRINT TAB(20) "***** MAIN MENU *****"
740 PRINT :PRINT
750 IF RE=1 THEN 780
760 PRINT "You may find it more convenient from this point to enter numeric data and       choices using the numeric key pad. To do this, press Num Lock once."
770 PRINT "If you do, use the grey back arrow key to delete an entry if you make a mistake,OR complete the entry and revise it afterwards. The program will give prompts."
780 PRINT
790 PRINT "Your options are:-"
800 PRINT TAB(16) "1) Review, enter or revise cheques"
810 PRINT TAB(16) "2) Review, enter or revise deposits"
820 PRINT TAB(16) "3) Review current balance"
830 PRINT TAB(16) "4) Exit to Basic"
840 PRINT
850 INPUT "Please enter the number of the procedure you have chosen";L
860 IF L<1 OR L>4 THEN PRINT "Try again" ELSE 880
870 LOCATE 11,1:PRINT STRING$(80,32):LOCATE 11,1:GOTO 850
880 ON L GOTO 900,3450,5710,5860
890 '**********************Cheque section**************************
900 CLS
910 NC=0:PR=0
920 PRINT TAB(15) "CHEQUE ANALYSIS"
930 PRINT :PRINT "All cheques for year to date should be entered."
940 PRINT "Analysis can be by month or category."
950 PRINT
960 PRINT "If at any point you are uncertain how to respond, press ENTER
970 PRINT
980 PRINT
990 PRINT "Please choose your task."
1000 PRINT:PRINT "1) Analysis"
1010 PRINT "2) Enter more cheques"
1020 PRINT "3) Revise an old entry":PRINT
1030 INPUT "Option";S
1040 IF S<1 OR S>3 THEN PRINT "Try again...":GOTO 1000
1050 ON S  GOTO 1070,2350,3010
1060 '**************Select complete printout option*****************
1070 S=0:FOR I=1 TO 12:T(I)=0:NEXT I:T#=0:ZM=1
1080 PRINT
1090 PRINT "Your next choice:-"
1100 PRINT
1110 PRINT "1) Complete printout of all categories with subtotals by month"
1120 PRINT "2) Continue to choice of category"
1130 PRINT
1140 INPUT "Option";Q:IF Q<1 OR Q>2 THEN 1440
1150 IF Q=2 THEN GOTO 1220
1160 IF Q=1 THEN IF PR=0 THEN GOSUB 5630
1170 IF PR=1 THEN 1190
1180 PRINT
1190 Q1=Q
1200 S1=Q1:IF Q1=25 THEN 1290
1210 GOSUB 1390:GOSUB 1490:IF S1=24 THEN GOTO 1290
1220 CLS:ZM=1:T#=0:FOR J= 1 TO 12:T(J)=0:NEXT J:GOSUB 1340
1230 PRINT :INPUT "Which category number do you wish to analyse";S1
1240 IF S1<1 OR S1>24 THEN PRINT "Try again...":GOTO 1230
1250 IF RE <1 THEN GOSUB 3360
1260 GOSUB 1390
1270 GOSUB 1490
1280 '********************Select from menu*************************
1290 GOSUB 1710
1300 ON S2 GOTO 1220,1310,1320,990,730
1310 GOSUB 1810:GOTO 1290
1320 GOSUB 2080:GOTO 1290
1330 'Subroutine to display category selection list
1340 FOR J=1 TO 12
1350 PRINT USING "##.";J;:PRINT "  ";N$(J)TAB(25);:PRINT USING"##.";J+12;:PRINT "  ";N$(J+12)
1360 NEXT J
1370 RETURN
1380 '****Add cheques by month/category; calculate grand total*****
1390 IF RE=1 THEN 1400 ELSE GOSUB 3360
1400 FOR J=1 TO JE
1410 LOCATE 16,16:PRINT "Thinking about cheque no. ";CN(J);
1420 IF S1=24 THEN 1440
1430 IF CT(J)<>S1 THEN 1460
1440 T#=T#+A(J)
1450 T(M(J))=T(M(J))+A(J)
1460 NEXT J
1470 RETURN
1480 '***********Display and or print monthly expenses*************
1490 CLS
1500 PRINT "Category";S1,N$(S1)
1510 IF Q=1 THEN LPRINT "Category";S1,N$(S1),,DATE$
1520 PRINT "Month","    Subtotal","Month","    Subtotal"
1530 IF Q=1 THEN LPRINT"Month","    Subtotal","Month","    Subtotal"
1540 PRINT STRING$(63,"-")
1550 IF Q=1 THEN LPRINT STRING$(63,"-")
1560 FOR J=1 TO 6
1570 PRINT MO$(J),:PRINT USING G$;T(J),:PRINT ,:PRINT MO$(J+6),:PRINT USING G$;T(J+6)
1580 IF Q=1 THEN LPRINT MO$(J), :LPRINT USING G$;T(J),:LPRINT ,:LPRINT MO$(J+6),:LPRINT USING G$;T(J+6)
1590 NEXT J
1600 PRINT ,,"Grand total",:PRINT USING G$;T#
1610 IF Q=1 THEN LPRINT ,,"Grand total",:LPRINT USING G$;T#:LPRINT CHR$(138)
1620 IF Q<>1 THEN GOTO 1670
1630 Q1=Q1+1:T#=0:FOR J=1 TO 12:T(J)=0:NEXT J 'reset variables
1640 '****************Paginates 5 tables to a page*****************
1650 IF INT((Q1-1)/5)=(Q1-1)/5 THEN LPRINT CHR$(12)
1660 IF Q1<25 THEN 1200
1670 PRINT "Press any key to continue"
1675 IF Q=1 THEN LPRINT CHR$(12)
1680 T#=0:A$=INKEY$:IF A$="" THEN 1680
1690 RETURN
1700 '*****************Menu display routine************************
1710 CLS:PRINT :PRINT :PRINT "Please choose next option."
1720 PRINT ,"1.Select new category"
1730 PRINT ,"2.List cheque numbers"
1740 PRINT ,"3.Plot data on screen"
1750 PRINT ,"4.Record or revise cheques"
1760 PRINT ,"5.Return to main menu"
1770 INPUT S2
1780 IF S2<1 OR S2>5 THEN PRINT "Try again, please....":GOTO 1770
1790 RETURN
1800 '********Show data for each selected cheque on screen*********
1810 CLS:I=1
1820 INPUT "Please enter P if you want a copy printed, otherwise press enter to continue",P$:CLS:IF P$="p" OR P$="P" THEN LP=1 ELSE LP=0
1830 IF LP=1 THEN IF PR=0 THEN GOSUB 5630
1840 PRINT "Cheques for category";S1;": "N$(S1)
1850 IF LP=1 THEN LPRINT "Cheques for category";S1;": "N$(S1),,DATE$
1860 PRINT "Cheque no.","Month","      Amount","Category"
1870 IF LP=1 THEN LPRINT "Cheque no.","Month","      Amount","Category"
1880 PRINT STRING$(63,"-")
1890 IF LP=1 THEN LPRINT STRING$(63,"-")
1900 FOR J=1 TO JE
1910 IF (CN(J)=0) OR (M(J)=0) THEN 2010
1920 IF S1 =24 THEN GOTO 1940
1930 IF CT(J)<>S1 THEN 2010
1940 PRINT CN(J),MO$(M(J)),:PRINT USING G$;A(J),:PRINT ,:PRINT  N$(CT(J))
1950 IF LP=1 THEN LPRINT CN(J),MO$(M(J)),:LPRINT USING G$;A(J),:LPRINT ,:LPRINT  N$(CT(J))
1960 I=I+1:LC=LC+1
1970 IF LC=58 AND LP=1 THEN 1980 ELSE 1990
1980 LPRINT CHR$(140):LC=0
1990 IF I<20 THEN 2010 ELSE INPUT "Press any key to continue";A$
2000 I=1:LOCATE 4,1
2010 NEXT J
2020 PRINT "Press any key to continue"
2030 A$=INKEY$:IF A$="" THEN 2030
2040 RETURN
2050 '**********Screen plot routine. First find max t(i)***********
2060 IF CE=1 THEN 2080
2070 FOR I=1 TO 12:T(I)=TD(I):NEXT I
2080 CLS:TM=T(1)
2090 FOR I=2 TO 12
2100 IF T(I)>TM THEN TM=T(I)
2110 NEXT I
2120 'Calculate scaling for y axis
2130 ZM=INT((TM+20)/20)
2140 FOR J=1 TO 12
2150 R(J)=21-(INT(T(J)/ZM))
2160 NEXT J
2170 'print y axis values
2180 FOR I=1 TO 21 STEP 2
2190 LOCATE I,1:PRINT USING "$$####.";ZM*(21-I)
2200 NEXT I
2210 'print y axis line
2220 FOR J=1 TO 21
2230 LOCATE J,7:PRINT CHR$(219)
2240 NEXT J
2250 'print x axis line
2260 FOR J=7 TO 80:LOCATE 22,J:PRINT CHR$(223);:NEXT J
2270 LOCATE 23,5:FOR J=1 TO 12:PRINT "   ";MO$(J);:NEXT J
2280 'plot values
2290 FOR J=9 TO 75 STEP 6:I=(J-3)/6:LOCATE R(I),J:PRINT "+";:NEXT J
2300 LOCATE 25,1:PRINT "Press any key to continue";
2310 A$=INKEY$:IF A$="" THEN 2310
2320 CLS
2330 RETURN
2340 '**************Instructions for adding cheques****************
2350 CLS
2360 FOR J=1 TO 23
2370 PRINT J;"  ";N$(J);"  ";
2380 NEXT J
2390 PRINT
2400 PRINT STRING$(80,"_"):IF NC>0 GOTO 2420
2410 PRINT "For each entry ";:GOTO 2430
2420 PRINT "        Please ";
2430 PRINT "give cheque no., month (numeric), amount (including the . if any"
2440 PRINT "cents), and category no., as each ? appears."
2450 IF NC>0 GOTO 2480
2460 PRINT "When entries are complete, enter 0 for cheque no."
2470 PRINT
2480 PRINT
2490 IF NC>0 THEN J=L:GOTO 2510
2500 FOR J=1 TO 200
2510 INPUT "Cheque no.";CN(J)
2520 IF CN(J)=0 THEN Z=J-1:GOTO 2670 'end of entry, go to sort
2530 INPUT "Month";M(J)
2540 IF M(J)>12 GOTO 2530
2550 INPUT"Amount";A(J)
2560 INPUT "Category";CT(J)
2570 IF CT(J)>23 GOTO 2560
2580 IF RE=1 AND NC>0 THEN GOTO 2770'cheques in array, go straight to sort
2590 IF NC=0 THEN 2600 ELSE 2650 'if revision read rest of disk
2600 LOCATE 16,1
2610 FOR L=1 TO 6:PRINT "                                        ":NEXT L
2620 LOCATE 16,1
2630 NEXT J
2640 PRINT "These entries will now be stored. Take a break"
2650 NR=NC(J):MR=M(J):AR=A(J):CR=CT(J):GOTO 2670
2660 'shell sort
2670 COLOR 18 'flashes display
2680 CLS
2690 PRINT:PRINT:PRINT :PRINT
2700 PRINT TAB(16)"Old entries now being read. A moment, please":COLOR 2
2710 GOSUB 3360'first read disk ,add to array
2720 'old and new cheques now in array of k elements; begin sort
2730 K=JE
2740 IF NC=0 THEN 2760
2750 NC(L)=NR:M(L)=MR:A(L)=AR:CT(L)=CR:NC=0
2760 COLOR 18:PRINT TAB(16) "Now sorting. A moment more please":COLOR 2
2770 D=K:FLAG=0
2780 D=INT((D+1)/2)
2790 FOR N=1 TO K-D
2800 IF CN(N) <=CN(N+D) THEN GOTO 2860
2810 SWAP CN(N),CN(N+D)
2820 SWAP CT(N),CT(N+D)
2830 SWAP M(N),M(N+D)
2840 SWAP A(N),A(N+D)
2850 FLAG=1
2860 NEXT N
2870 IF FLAG=1 THEN FLAG=0:GOTO 2790
2880 IF D>1 THEN GOTO 2780
2890 'write to disk and check for duplicates
2900 CN=0:OPEN "check" FOR OUTPUT AS #1
2910 FOR N=1 TO K
2920 IF M(N)=0 THEN GOTO 2950
2930 IF CN(N)=CN(N+1) THEN GOTO 3230
2940 PRINT #1,CN(N);M(N);A(N);CT(N)
2950 NEXT N
2960 CLOSE #1
2970 COLOR 2
2980 CLS
2990 GOTO 1000
3000 '******************Cheque correction routine******************
3010 IF RE =1 THEN 3170
3020 OPEN "check" FOR INPUT AS #1
3030 CLS:INPUT "Please enter number of cheque to be corrected";NC
3040 J=0
3050 J=J+1
3060 IF EOF(1) THEN GOTO 3120
3070 INPUT #1,CN(J),M(J),A(J),CT(J)
3080 IF NC=CN(J) THEN 3100'cheque found:now revise it
3090 GOTO 3050
3100 L=J:LOCATE 21,1:PRINT "Cheque no."," Month"," Amount"," Category":PRINT CN(J),M(J),A(J),CT(J):LOCATE 1,1:CLOSE #1:GOTO 2360
3110 PRINT "Sorry, cheque not found.":CLOSE #1:GOTO 3130
3120 IF CN(L)<>NC THEN 3110
3130 PRINT "Press any key to continue"
3140 A$=INKEY$:IF A$="" THEN 3140
3150 GOTO 970
3160 '****************Routine to correct duplicates****************
3170 CLS:INPUT "Please enter number of cheque to be corrected";NC
3180 FOR J=1 TO JE
3190 IF NC=CN(J) THEN 3220'cheque found:now revise it
3200 NEXT J
3210 PRINT "Sorry, cheque not found":INPUT "Press any key to continue",A$:GOTO 990
3220 L=J:LOCATE 21,1:PRINT "Cheque no."," Month"," Amount"," Category":PRINT CN(J),M(J),A(J),CT(J):LOCATE 1,1:GOTO 2360
3230 IF M(N+1)=0 THEN GOTO 2940
3240 CLOSE #1
3250 PRINT "Duplicates","Cheque no.","Month","Amount","Category"
3260 PRINT 1,CN(N),M(N),A(N),CT(N)
3270 PRINT 2,CN(N+1),M(N+1),A(N+1),CT(N+1)
3280 INPUT "Which cheque should be deleted (enter 3 to delete both )";CH
3290 IF CH>3 OR CH=0 THEN GOTO 3280
3300 IF CH=1 THEN M(N)=0
3310 IF CH=2 THEN M(N+1)=0
3320 IF CH=3 THEN M(N)=0
3330 IF CH=3 THEN M(N+1)=0
3340 GOTO 2900
3350 '***********Reads file for all subsequent analysis************
3360 OPEN "check" FOR INPUT AS #1
3370 Z=Z+1
3380 IF EOF(1) THEN 3410
3390 INPUT #1,CN(Z),M(Z),A(Z),CT(Z):LOCATE 16,16:PRINT "Reading,now at cheque no.";CN(Z);
3400 GOTO 3370
3410 CLOSE #1
3420 JE=Z:Z=0:RE=1
3430 RETURN
3440 '***********************Deposit section*************************
3450 CLS
3460 PRINT TAB(15) "DEPOSIT ANALYSIS":PRINT :PRINT
3470 NC=0:Z=0:R=0
3480 PRINT :PRINT "All deposits for year to date should be entered."
3490 PRINT "Analysis can be by month or category."
3500 PRINT
3510 PRINT "If at any point you are uncertain how to respond, press ENTER."
3520 PRINT
3530 PRINT "Please choose your task."
3540 PRINT:PRINT "1) Analysis of deposits"
3550 PRINT "2) Record more deposits"
3560 PRINT "3) Revise a deposit entered previously ":PRINT
3570 INPUT "Option";S
3580 IF S<1 OR S>3 THEN PRINT "Try again":GOTO 3540
3590 ON S  GOTO 3610,4620,5270
3600 '**************Select complete printout option****************
3610 S=0:FOR I=1 TO 12:TD(I)=0:NEXT I:TD#=0:ZM=1:NC=0
3620 PRINT
3630 PRINT "Your next choice:-"
3640 PRINT
3650 PRINT "1) Complete printed record of all categories"
3660 PRINT "2) Continue to choice of category"
3670 PRINT
3680 INPUT "Option";Q
3690 IF Q<>1 THEN GOTO 3750
3700 IF PR=1 THEN 3720
3710 GOSUB 5630
3720 Q1=Q
3730 S1=Q1
3740 GOSUB 3910:GOSUB 4020:IF S1=14 THEN 3810
3750 CLS:ZM=1:TD#=0:FOR J= 1 TO 12:TD(J)=0:NEXT J:GOSUB 3860
3760 PRINT :INPUT "Which category number do you wish to analyse";S1
3770 IF S1<1 OR S1>14 THEN PRINT "Try again...":GOTO 3760
3780 GOSUB 3910
3790 GOSUB 4020
3800 '*********************Select from menu************************
3810 GOSUB 4270
3820 ON S2 GOTO 3750,3830,3840,3530,730
3830 GOSUB 4370:GOTO 3810
3840 GOSUB 2060:GOTO 3810
3850 '*******Subroutine to display category selection list*********
3860 FOR J=1 TO 7
3870 PRINT USING "##.";J;:PRINT "  ";ND$(J)TAB(25);:PRINT USING"##.";J+7;:PRINT "  ";ND$(J+7)
3880 NEXT J
3890 RETURN
3900 '****Add deposits by month/category; calculate grand total****
3910 J=0:IF RD=1 THEN GOTO 3920 ELSE GOSUB 5540'reads data if not read
3920 FOR J=1 TO JD'JD is n. of entries defined in first file read
3930 LOCATE 16,16:PRINT "Thinking about deposit no.";J;
3940 IF MD(J)=0 THEN 3990
3950 IF S1=14 THEN 3970
3960 IF CD(J)<>S1 THEN 3990
3970 TD#=TD#+AD(J)
3980 TD(MD(J))=TD(MD(J))+AD(J)
3990 NEXT J
4000 LOCATE 16,16:PRINT STRING$(30," "):RETURN
4010 '***********Display and or print monthly deposits*************
4020 CLS
4030 IF Q=1 THEN IF PR=0 THEN GOSUB 5630
4040 PRINT "Category";S1,ND$(S1)
4050 IF S1=16 THEN 3860
4060 IF Q=1 THEN LPRINT "Category";S1,ND$(S1),,DATE$
4070 PRINT "Month","    Subtotal","Month","    Subtotal"
4080 IF Q=1 THEN LPRINT"Month","    Subtotal","Month","    Subtotal"
4090 PRINT STRING$(63,"-")
4100 IF Q=1 THEN LPRINT STRING$(63,"-")
4110 FOR J=1 TO 6
4120 PRINT MO$(J),:PRINT USING G$;TD(J),:PRINT ,:PRINT MO$(J+6),:PRINT USING G$;TD(J+6)
4130 IF Q=1 THEN LPRINT MO$(J), :LPRINT USING G$;TD(J),:LPRINT ,:LPRINT MO$(J+6),:LPRINT USING G$;TD(J+6)
4140 NEXT J
4150 PRINT ,,"Grand total",:PRINT USING G$;TD#
4160 IF Q=1 THEN LPRINT ,,"Grand total",:LPRINT USING G$;TD#:LPRINT CHR$(138)
4170 IF Q<>1 THEN GOTO 4220
4180 Q1=Q1+1:TD#=0:FOR J=1 TO 12:TD(J)=0:NEXT J' Reset all variables
4190 '****************Paginates 5 tables to a page********************
4200 IF INT((Q1-1)/5)=(Q1-1)/5 THEN LPRINT CHR$(12)
4210 IF Q1<15 THEN 3730
4220 PRINT :PRINT :PRINT "Press any key to continue"
4230 IF Q=1 THEN LPRINT CHR$(12)
4240 TD#=0:A$=INKEY$:IF A$="" THEN 4240
4250 Q1=14:RETURN
4260 '******************Menu display routine***********************
4270 CLS:PRINT :PRINT :PRINT "Please choose next option."
4280 PRINT ,"1.Select new category"
4290 PRINT ,"2.List deposits"
4300 PRINT ,"3.Plot data on screen"
4310 PRINT ,"4.Record or revise deposits"
4320 PRINT ,"5.Return to main menu"
4330 INPUT S2
4340 IF S2<1 OR S2>5 THEN PRINT "Try again, please....":GOTO 4330
4350 RETURN
4360 '*******Show data for each selected deposit on screen*********
4370 CLS:I=1
4380 INPUT "Please enter P if you want a copy printed, otherwise press enter to continue",P$:CLS:IF P$="p" OR P$="P" THEN LP=1 ELSE LP=0
4390 IF LP=1 THEN IF PR=0 THEN GOSUB 5630
4400 PRINT "Deposits for category";S1;": "ND$(S1)
4410 IF LP=1 THEN LPRINT "Deposits for category";S1;": "ND$(S1),,DATE$
4420 PRINT "Deposit no.","Month","      Amount","Category"
4430 IF LP=1 THEN LPRINT "Deposit no.","Month","      Amount","Category"
4440 PRINT STRING$(63,"-")
4450 IF LP=1 THEN LPRINT STRING$(63,"-")
4460 FOR J=1 TO JD
4470 IF MD(J)=0 THEN 4570
4480 IF S1=14 THEN GOTO 4500
4490 IF CD(J)<>S1 THEN 4570
4500 PRINT J,MO$(MD(J)),:PRINT USING G$;AD(J),:PRINT ,:PRINT  ND$(CD(J))
4510 IF LP=1 THEN LPRINT J,MO$(MD(J)),:LPRINT USING G$;AD(J),:LPRINT ,:LPRINT  ND$(CN(J))
4520 I=I+1:LC=LC+1
4530 IF LC=58 AND LP=1 THEN 4540 ELSE 4550
4540 LPRINT CHR$(140):LC=0
4550 IF I<20 THEN 4570 ELSE PRINT "Press any key to continue"
4560 A$=INKEY$:IF A$="" THEN 4560 ELSE I=1:LOCATE 4,1
4570 NEXT J
4580 PRINT "Press any key to continue"
4590 A$=INKEY$:IF A$="" THEN 4590
4600 CLS:RETURN
4610 '************Instructions for adding deposits*****************
4620 NC=0
4630 CLS
4640 FOR J=1 TO 13
4650 PRINT J;"  ";ND$(J);"  ";
4660 NEXT J
4670 Z=0
4680 PRINT
4690 PRINT STRING$(80,"_"):IF NC=1 GOTO 4710
4700 PRINT "For each entry ";:GOTO 4720
4710 PRINT "        Please ";
4720 PRINT "give month (numeric), amount (including the . if any"
4730 PRINT "cents), and category no., as each ? appears."
4740 IF NC=1 THEN PRINT :GOTO 4790
4750 PRINT "When entries are complete, enter 0 for month."
4760 PRINT
4770 PRINT
4780 IF NC=1 THEN J=R:GOTO 4800
4790 FOR J=1 TO 200
4800 LOCATE 13,1:INPUT "Month";MD(J)
4810 IF NC=1 THEN 4830
4820 IF MD(J)=0 THEN Z=J-1:GOTO 4940 'end of entry, go to sort
4830 IF MD(J)>12 THEN LOCATE 13,1:PRINT "                     ":GOTO 4800
4840 INPUT"Amount";AD(J)
4850 LOCATE 15,1:INPUT "Category";CD(J)
4860 IF CD(J)>13 THEN LOCATE 15,1:PRINT "                     ":GOTO 4850
4870 IF NC=1 THEN CLOSE #2:GOTO 4930
4880 LOCATE 13,1
4890 FOR L=1 TO 6:PRINT "                                        ":NEXT L
4900 LOCATE 13,1
4910 NEXT J
4920 PRINT "These entries will now be stored. Take a break"
4930 MR=MD(J):AR=AD(J):CR=CD(J)'store temporary values to replace those on disk
4940 COLOR 18 'flashes display
4950 CLS
4960 PRINT:PRINT:PRINT :PRINT
4970 PRINT TAB(16)"Previous entries now being read. A moment, please":COLOR 2
4980 GOSUB 5540'first read disk ,add to array
4990 'old and new deposits now in array of k elements; begin sort
5000 K=JD
5010 IF NC=0 THEN 5030
5020 MD(R)=MR:AD(R)=AR:CD(R)=CR
5030 COLOR 18:PRINT TAB(16)"Now sorting. A moment more,please":COLOR 2
5040 D=K:FLAG=0
5050 D=INT((D+1)/2)
5060 FOR N=1 TO K-D
5070 IF MD(N) <=MD(N+D) THEN GOTO 5120
5080 SWAP MD(N),MD(N+D)
5090 SWAP AD(N),AD(N+D)
5100 SWAP CD(N),CD(N+D)
5110 FLAG=1
5120 NEXT N
5130 IF FLAG=1 THEN FLAG=0:GOTO 5060
5140 IF D>1 THEN GOTO 5050
5150 NC=0:OPEN "bank" FOR OUTPUT AS #2
5160 COLOR 18:PRINT TAB(16)"Now writing on to disc once again. A moment please":COLOR 2
5170 FOR N=1 TO K
5180 IF MD(N)=MD(N+1) THEN GOSUB 5430
5190 IF MD(N)=0 THEN GOTO 5210
5200 PRINT #2,MD(N);AD(N);CD(N)
5210 NEXT N
5220 Z=0:R=0:CLOSE #2
5230 COLOR 2
5240 CLS
5250 GOTO 3540
5260 '***************Deposit correction routine********************
5270 NC=1
5280 OPEN "bank" FOR INPUT AS #2
5290 CLS:INPUT "Please enter month of deposit to be corrected";MD
5300 INPUT "Please enter amount of deposit to be corrected";AD
5310 R=0
5320 R=R+1
5330 IF EOF(2) THEN GOTO 5380
5340 INPUT #2,MD(R),AD(R),CD(R)
5350 IF MD=MD(R) AND AD=AD(R) THEN 5370'deposit found:now revise it
5360 GOTO 5320
5370 LOCATE 21,1:PRINT " Month"," Amount"," Category":PRINT MD(R),AD(R),CD(R):LOCATE 1,1:GOTO 4640
5380 PRINT "Sorry, no deposit of this size and date is recorded.":GOTO 5390
5390 PRINT "Press any key to continue"
5400 A$=INKEY$:IF A$="" THEN 5400
5410 CLOSE #2:GOTO 3540 'unsuccessful revision; go back to menu
5420 '**************Routine to correct duplicates******************
5430 IF AD(N)<>AD(N+1) THEN RETURN
5440 IF CD(N)<>CD(N+1) THEN RETURN
5450 PRINT "Duplicates","Month","Amount","Category"
5460 PRINT 1,MD(N),AD(N),CD(N)
5470 PRINT 2,MD(N+1),AD(N+1),CD(N+1)
5480 INPUT "Which deposit should be deleted (enter 0 to delete neither )";CH
5490 IF CH>3 THEN GOTO 5480
5500 IF CH=1 THEN MD(N)=0
5510 IF CH=2 THEN MD(N+1)=0
5520 RETURN
5530 '**********Reads file for all subsequent analysis*************
5540 OPEN "bank" FOR INPUT AS #2
5550 IF EOF(2) THEN 5590
5560 Z=Z+1
5570 INPUT #2,MD(Z),AD(Z),CD(Z):LOCATE 16,16:PRINT "Reading,now at deposit no.";Z;
5580 GOTO 5550
5590 CLOSE #2
5600 JD=Z:Z=0:RD=1' JD = number of entries on disk; RD = flag to show disk read
5610 RETURN
5620 '******Check for status of printer if printing requested******
5630 ON ERROR GOTO 5660
5640 PRINT "Just testing to see if printer is ready":LPRINT CHR$(7);
5650 PR=1:GOTO 5690
5660 IF ERR =24 THEN BEEP:PRINT "Printer not ready.Check and press any key when ready ";
5670 A$=INKEY$:IF A$="" THEN 5670
5680 PR=1
5690 RETURN
5700 '**********************Balance section************************
5710 CLS:LOCATE 5,15:PRINT "CURRENT BALANCE"
5720 S1=14
5730 GOSUB 3910
5740 S1=24
5750 GOSUB 1390
5760 LOCATE 16,16:PRINT STRING$(35," ")
5770 PRINT "Total income",,:PRINT USING G$;TD#
5780 PRINT "Total expenditure",:PRINT USING G$;T#
5790 PRINT TAB(30) STRING$(12,"-")
5800 PRINT "Balance",,:PRINT USING G$;TD#-T#
5810 PRINT :PRINT :PRINT
5820 PRINT "Press any key to return to main menu"
5830 A$=INKEY$:IF A$="" THEN 5830
5840 GOTO 730
5850 '*************************Exit********************************
5860 PRINT "Exit to Basic. To run again, press F2":END
5870 '******************Setup Instructions*************************
5880 GOSUB 5630
5890 CLS:PRINT TAB(16) "SETUP PROCEDURE"
5900 LPRINT TAB(16) "SETUP PROCEDURE"
5920 PRINT
5930 LPRINT
5940 PRINT "It is recommended that you LLIST the program first and examine the structure."
5950 LPRINT "It is recommended that you LLIST the program first and examine the structure."
5960 PRINT "Lines 330-700 give titles for 23 cheque categories and 13 deposit categories.   These may be altered to suit your personal requirements,but keep titles within  the quote marks."
5970 LPRINT "Lines 330-700 give titles for 23 cheque categories and 13 deposit categories.   These may be altered to suit your personal requirements,but keep titles within  the quote marks."
5980 PRINT "If you want to change the number of categories note lines 280,1200,1210,1240,   1340-1360,1420,1660,3740,3770,3860-3880,3950,4050,4480,5720,5740, where changes will be needed."
5990 LPRINT "If you want to change the number of categories note lines 280,1200,1210,1240,   1340-1360,1420,1660,3740,3770,3860-3880,3950,4050,4480,5720,5740, where changes will be needed."
6000 PRINT "This list is not guaranteed to be exhaustive, but will show you likely areas to check."
6010 LPRINT "This list is not guaranteed to be exhaustive, but will show you likely areas to check."
6020 PRINT "If you use an AUTOEXEC.BAT file (see DOS manual 2-16) remember to include DATE. The call to Basic should take the form BASIC/S:0/F:2 (Basic manual B-14)."
6030 LPRINT "If you use an AUTOEXEC.BAT file (see DOS manual 2-16) remember to include DATE. The call to Basic should take the form BASIC/S:0/F:2 (Basic manual B-14)."
6040 PRINT "IMPORTANT. Before starting, alter line 10 to '10 BE=0`, OR delete lines  10 and 250. 5870-6150 can be removed to save space."
6050 LPRINT "IMPORTANT. Before starting, alter line 10 to '10 BE=0`, OR delete lines  10 and 250. 5870-6150 can be removed to save space."
6060 PRINT "The next 6 lines establish files on first run. If run again, they will overwritedata, so do not ignore above advice."
6065 LPRINT "The next 6 lines establish files on first run. If run again, they will overwritedata, so do not ignore above advice."
6070 OPEN "bank" FOR OUTPUT AS #2
6080 PRINT #2,0;0;0
6090 CLOSE #2
6100 OPEN "check" FOR OUTPUT AS #1
6110 PRINT #1,0;0;0;0
6120 CLOSE #1
6130 PRINT :PRINT :PRINT "Press any key to continue with program. Do not attempt to enter data until you  have changed line 10. ( Ctrl-Break to stop and do this now, or continue, to     explore program's features.)"
6140 LPRINT "Press any key to continue with program. Do not attempt to enter data until you  have changed line 10. ( Ctrl-Break to stop and do this now, or continue, to     explore program's features.)":LPRINT CHR$(140)
6150 A$=INKEY$:IF A$="" THEN 6150 ELSE 270
```

## BARGRAPH.BAS

```bas
10 DIM M#(72),M(72),T(39),A%(71),TITLE$(3),LABEL$(71),S(71),W(71),SV$(12)
20 LOCATE ,,0: YOPT=1: DEFINT I,J,K,L,O,X,Y
60 KEY OFF:FOR I=1 TO 10: KEY I,"": NEXT: ON KEY (9) GOSUB 740: KEY (9) ON
70 ON KEY (1) GOSUB 8000: REDO%=1: KEY (1) ON
80 ON KEY (3) GOSUB 9000
90 DEF SEG: POKE 106,0
100 ON ERROR GOTO 7000
200 CLS: LOCATE 12,35: PRINT "Bar Chart"
210 LOCATE 24,50: PRINT "Press space bar to continue."
220 K$=INKEY$: IF K$<>" " THEN 220
230 CLS: LOCATE 2,35:PRINT "Bar Chart":LOCATE 6,17:PRINT "1. On screens where an asterisk appears in":LOCATE 8,20:PRINT "the top right hand corner, the image":LOCATE 10,20:PRINT "will remain until the SPACE BAR is depressed."
240  LOCATE 14,17: PRINT "2. On all other screens, you will be prompted for ":LOCATE 16,20:PRINT "input. To use a FUNCTION KEY when input is expected,":LOCATE 18,20:PRINT "press the desired key followed by ENTER."
250 LOCATE 1,80:PRINT "*"
260 K$=INKEY$: IF K$<>" " THEN 260
270 CLS: LOCATE 2,35:PRINT "Bar Chart":LOCATE 20,17:PRINT "4. Press F9 (followed by enter) at any time":LOCATE 22,20:PRINT "to immediately exit the program.":LOCATE 6,17: PRINT "3. Press F1 (followed by enter) to return to":LOCATE 8,20
280 PRINT "the top of the nearest INPUT screen. This": LOCATE 10,20: PRINT "key should be used when a REDO FROM START":LOCATE 12,20: PRINT "or OVERFLOW message appears. It can also be ":LOCATE 14,20
290 PRINT "used at the beginning of the program to skip":LOCATE 16,20:PRINT "these introductory screens." :LOCATE 1,80:PRINT "*"
300 K$=INKEY$: IF K$<>" " THEN 300
310 CLS: LOCATE 10,39:PRINT "For":LOCATE 12,37:PRINT "SAMPLES":LOCATE 14,38:PRINT "Press":LOCATE 16,40:PRINT "F3":LOCATE 1,79:PRINT "*":KEY (3) ON
320 K$=INKEY$: IF K$<>" " THEN 320: ELSE KEY (3) OFF
400 REDO%=1: SAMPLE$="n":CLS:LOCATE 2,38:PRINT "MENU 1":LOCATE 6,1:PRINT "Select an option.
410 LOCATE 11,33: PRINT "1. RESTORE a file":LOCATE 13,33:PRINT "2. RUN from start":LOCATE 15,33:PRINT "3. List FILES"
420 LOCATE 17,33: IF OPT3=4 AND OP$<>"3" THEN PRINT "4. Return to MENU 3"
430 IF OP$="3" THEN PRINT "4. QUIT": SV$="3": ELSE SV$=""
440 LOCATE 6,19: INPUT OP$
450 IF OP$="2" THEN 530
460 IF OP$="3" THEN 4300
470 IF OP$="4" THEN IF SV$<>"3"  AND OPT3<>4 THEN 440: ELSE IF SV$="3" THEN 740: ELSE 3800
480 IF OP$<>"1" THEN BEEP: GOTO 440
490 GOSUB 5700: LOCATE 23,1:PRINT "Enter the name under which the file was saved:"
500 LOCATE 23,60: INPUT FILE$: FOR K=1 TO LEN(FILE$): IF MID$(FILE$,K,1)="." THEN 510: ELSE NEXT
510 IF K>9 THEN K=9
520 OLDFILE$=LEFT$(FILE$,K-1): OLDFILE$=OLDFILE$+".bar": GOSUB 4600
530 IF OP$="2" THEN OPT3=0 :GOSUB 800
600 IF OPT=1 THEN GOSUB 900
610 IF OPT=2 THEN GOSUB 1100
620 IF OPT=3 THEN GOSUB 1500
630 IF OPT=4 THEN GOSUB 5000
640 GOSUB 1300
650 GOSUB 1700
660 GOSUB 1800
670 GOSUB 2400
680 IF OPT=1 THEN GOSUB 2800
690 IF OPT=2 THEN GOSUB 3000
700 IF OPT=3 THEN GOSUB 2900
710 IF OPT=4 THEN GOSUB 3200
720 GOSUB 3300
730 GOTO 3800
740 CLS: KEY 2,"run"+CHR$(13): END
800 REDO%=2:CLS:LOCATE 2,38:PRINT "MENU 2":LOCATE 6,1:PRINT "Select an option.":LOCATE 9,33:PRINT "1. Monthly Graph":LOCATE 11,33:PRINT "2. Quarterly Graph":LOCATE 13,33:PRINT "3. Yearly Graph":LOCATE 15,33:PRINT "4. Do-it-yourself Graph"
810 LOCATE 6,20:INPUT Z$ :IF VAL(Z$)<1 OR VAL(Z$)>4 THEN BEEP: GOTO 810: ELSE OPT=VAL(Z$)\1
815 QOPT$="":YRS=0:PRCENT$="y"
820 RETURN: '****************************************************************
900 REDO%=3: CLS
910 LOCATE 1,37: PRINT "MONTHLY"
920 LOCATE 6,1:PRINT "Enter the last month and year for which data will be entered.":LOCATE 8,1:PRINT "(Use format mm,yyyy)"
930 LOCATE 8,61: INPUT Z1$,Z2$: IF VAL(Z1$)<1 OR VAL(Z1$)>12 THEN BEEP: GOTO 930:ELSE MTH%=VAL(Z1$)\1
940 IF VAL(Z2$)<1000 OR VAL(Z2$)>9999 THEN LOCATE 14,1: PRINT "The year must be between 1000 and 9999": BEEP: GOTO 930: ELSE YR=VAL(Z2$)\1
950 N=11:XL=59:W=3:S=2
960 LABEL$(0)="JAN":LABEL$(1)="FEB":LABEL$(2)="MAR":LABEL$(3)="APR":LABEL$(4)="MAY":LABEL$(5)="JUN":LABEL$(6)="JUL":LABEL$(7)="AUG":LABEL$(8)="SEP":LABEL$(9)="OCT":LABEL$(10)="NOV":LABEL$(11)="DEC"
970 FOR I=0 TO 11-MTH%: SV$(I)=LABEL$(I+MTH%):NEXT
980 FOR I=12-MTH% TO 11:SV$(I)=LABEL$(I-12+MTH%):NEXT
990 FOR I=0 TO 11:LABEL$(I)=SV$(I):NEXT: IF OP$="1" THEN RETURN
1000 REDO%=4:CLS: LOCATE 1,37: PRINT "MONTHLY":LOCATE 4,1:PRINT "For each month enter a number."
1010 FOR I=0 TO 11: LOCATE I+6,1: PRINT LABEL$(I);",";:IF I<12-MTH% THEN PRINT YR-1:ELSE PRINT YR
1020 NEXT: IF OPT4=2 THEN 1300
1030 RETURN 640: '************************************************************
1100 REDO%=5: CLS:LOCATE 2,38:PRINT "QUARTERLY":LOCATE 6,1:PRINT "The graph will display data for 1 to 3 years.":PRINT "If data for 2 or 3 years is entered,":PRINT "the bars can be plotted chronologically or grouped by quarters."
1110 LOCATE 11,1:PRINT "Enter the number of years for which data will be entered."
1120 LOCATE 11,73:INPUT Z$ :IF VAL(Z$)<1 OR VAL(Z$)>3 THEN BEEP: GOTO 1120: ELSE YRS=VAL(Z$)\1
1130 IF YRS=1 THEN Z$="":QOPT$="c":GOTO 1160:ELSE Z$=" last"
1140 LOCATE 14,1:PRINT "Enter C to display chronologically or G to display in groups.":
1150 LOCATE 14,73:INPUT QOPT$:IF QOPT$<>"c" AND QOPT$<>"g" THEN BEEP: GOTO 1150
1160 IF YRS=1 THEN X=14: ELSE X=17
1170 LOCATE X,1:PRINT "Enter the";Z$;" year for which data will be entered.":
1180 LOCATE X,70: INPUT Z$: IF VAL(Z$)<1000 OR VAL(Z$)>9999 THEN BEEP: LOCATE X+4,1:PRINT "The year must be between 1000 and 9999":GOTO 1180:ELSE YR=VAL(Z$)\1
1190 REDO%=6: CLS:LOCATE 1,36:PRINT "QUARTERLY":LOCATE 4,1:PRINT "For each quarter enter a number."
1200 K=-1:FOR I=1 TO YRS:FOR J=1 TO 4: K=K+1:LOCATE 6+K,1:PRINT USING "####"; YR+I-YRS;:PRINT " QTR";J:NEXT:NEXT:IF OPT4=2 THEN GOTO 1300
1210 N=YRS*4-1:IF QOPT$="c" THEN 1230
1220 IF YRS=2 THEN XL=63:S=10:W=6:GOTO 1250:ELSE XL=63:S=12:W=4:GOTO 1250
1230 IF YRS=1 THEN XL=61:S=4:W=12:GOTO 1250
1240 IF YRS=2 THEN XL=64:S=2:W=6:ELSE XL=60:S=1:W=4
1250 IF OP$="2" THEN RETURN 640: ELSE RETURN  '*******************************
1300 I=-1:J=0
1310 I=I+1: K=I: L=17
1320 IF N>11 THEN K=I MOD (N+2)\2: IF I>=(N+1)/2 THEN L=57
1330 LOCATE 6+K,L,1: IF OPT4<>2 THEN INPUT Z$: M#(I)=VAL(Z$): ELSE PRINT M#(I): GOTO 1380
1340 IF ABS(M#(I))<1.00000000000000e+15# THEN 1380
1350 J=1
1360 BEEP: LOCATE 22,1:PRINT "Enter numbers no greater in absolute value "
1370 LOCATE 23,1:PRINT "than 999,999,999,999,999. Do not use commas.":IF J=2 THEN 1450:ELSE 1330
1380 IF I<N THEN 1310
1390 IF OPT4=2 THEN RETURN
1400 IF J=1 THEN LOCATE 22,1: FOR X=1 TO 2: FOR Y=1 TO 10: PRINT "          ";:NEXT:NEXT
1410 LOCATE K+9,1: GOSUB 5900
1420 IF R$="y" THEN 1460
1430 IF R$="n" THEN LOCATE K+9,1:FOR X=1 TO 5: PRINT "               ";:NEXT:ELSE BEEP: GOTO 1410
1440 LOCATE K+9,1:PRINT "Enter the value of the horizontal axis."
1450 LOCATE K+9,50: INPUT Z$: REF#=VAL(Z$): IF REF#>999999999999999# THEN J=2: GOTO 1360
1460 RETURN: '****************************************************************
1500 REDO%=7: CLS:LOCATE 1,38:PRINT "YEARLY":LOCATE 6,1:PRINT "Enter the number of years to be graphed": LOCATE 7,1: PRINT "(Minimum is 2, Maximum is 20)":LOCATE 9,1:PRINT "And the last year for which data will be entered."
1510 LOCATE 6,65: INPUT Z$: IF VAL(Z$)<2 OR VAL(Z$)>20 THEN 1510:ELSE N=VAL(Z$)\1-1
1520 LOCATE 9,65: INPUT Z$: IF VAL(Z$)>999 AND VAL(Z$)<10000 THEN YR=VAL(Z$):GOTO 1540
1530 LOCATE 13,1: PRINT "The year must be between 1000 and 9999": BEEP:GOTO 1520
1540 REDO%=8: CLS: LOCATE 1,38:PRINT "YEARLY":LOCATE 4,1:PRINT "For each year enter a number."
1550 I=-1
1560 I=I+1: K=I: L=1
1570 IF N>11 THEN K=I MOD (N+2)\2: IF I>=(N+1)/2 THEN L=40
1580 LOCATE 6+K,L:PRINT USING "####"; YR+I-N:IF I<N THEN 1560
1590 IF OPT4=2 THEN 1300
1600 IF N>=16 THEN S=1:GOTO 1670
1610 IF 9<=N AND N<=15 THEN S=2
1620 IF N=12 OR N=11 THEN S=1: GOTO 1670
1630 IF N=7 THEN S=2:GOTO 1670
1640 IF 4<=N AND N<=6 THEN S=3:GOTO 1670
1650 IF N=8 THEN S=3:GOTO 1670
1660 IF 1<=N AND N<=3 THEN S=5:GOTO 1670
1670 W=S-1
1680 W=W+1: XL=1+(N+1)*W+S*N: IF XL+N+1<67 THEN 1680
1690 IF OP$="2" THEN RETURN 640: ELSE RETURN: '******************************
1700 REDO%=9: CLS: LOCATE 1,38: PRINT "TITLES"
1710 LOCATE 6,1:PRINT "Enter the title of the graph"
1720 LOCATE 7,1:PRINT "(maximum two lines of 80 characters)"
1730 LOCATE 14,1:PRINT "Enter the title of the vertical axis"
1740 LOCATE 9,1,1:INPUT TITLE$(1)
1750 LOCATE 10,1,1:INPUT TITLE$(2)
1760 LOCATE 16,1,1:INPUT TITLE$(3)
1770 IF OPT4=3 THEN 3900
1780 RETURN: '****************************************************************
1800 CLS: LOCATE 25,62: PRINT "Just a second...."
1810 I=-1:AVG#=0: MIN#=ABS(M#(0)): MAX#=ABS(M#(0))
1820 I=I+1:IF M#(I)>MAX# THEN MAX#=M#(I)
1830 IF M#(I)<MIN# THEN MIN#=M#(I)
1840 AVG#=AVG#+M#(I)/(N+1)
1850 IF I<N THEN 1820
1860 IF YOPT<>3 THEN 1900 :ELSE IF MIN#<0 OR AVG#=0 THEN PRCENT$="n": GOTO 4100:ELSE PRCENT$="y":SCALE$="":FOR K=0 TO N: M(K)=100*M#(K)/(AVG#*(N+1)):NEXT: MAX=100*MAX#/(AVG#*(N+1)): MIN=100*MIN#/(AVG#*(N+1))
1870 IF R$="n" THEN IF REF#>100 THEN REF=100: ELSE IF REF#<0 THEN REF=0: ELSE REF=REF#
1880 IF R$="y" THEN REF=100/(N+1)
1890 GOTO 2070
1900 IF R$="y" THEN REF#=AVG#
1910 ABMAX#=ABS(MAX#): IF ABS(MIN#)>ABMAX# THEN ABMAX#=ABS(MIN#)
1920 IF ABS(REF#)>ABMAX# THEN ABMAX#=ABS(REF#)
1930 IF ABMAX#>=0.001 AND ABMAX#<1000 THEN 1980
1940 IF ABMAX#>=1 AND ABMAX# <1.000000e+9 THEN 1990
1950 IF ABMAX#>=1000. AND ABMAX#<1 THEN 2010
1960 IF ABMAX#>=1.000000e+9 AND ABMAX#<1.000000e+12 THEN 2030
1970 IF ABMAX#>=1.000000e+12 THEN 2050
1980 AVG=AVG#:REF=REF#:MIN=MIN#:MAX=MAX#:FOR I=0 TO N: M(I)=M#(I):NEXT:SCALE$="":GOTO 2070
1990 AVG=AVG#/1:REF=REF#/1:MIN=MIN#/1:MAX=MAX#/1:FOR I=0 TO N:M(I)=M#(I)/1: NEXT
2000 SCALE$="(in millions)": GOTO 2070
2010 AVG=AVG#/1000:REF=REF#/1000.:MIN=MIN#/1000:MAX=MAX#/1000:FOR I=0 TO N:M(I)=M#(I)/1000: NEXT
2020 SCALE$="(in thousands)": GOTO 2070
2030 AVG=AVG#/1.000000e+9:REF=REF#/1.000000e+9:MIN=MIN#/1.000000e+9:MAX=MAX#/1.000000e+9: FOR I=0 TO N: M(I)=M#(I)/1.000000e+9: NEXT
2040 SCALE$="(in billions)": GOTO 2070
2050 AVG=AVG#/1.000000e+12:REF=REF#/1.000000e+12:MIN=MIN#/1.000000e+12:MAX=MAX#/1.000000e+12: FOR I=0 TO N: M(I)=M#(I)/1.000000e+12: NEXT
2060 SCALE$="(in trillions)": GOTO 2070
2070 IF YOPT<>2 THEN REF=CINT(REF)
2080 I=0: IF REF=<MIN THEN I=1: JUMP!=(MAX-REF)/37: GOTO 2150
2100 IF REF>=MAX THEN I=37: JUMP!=(REF-MIN)/37: GOTO 2150
2110 I=I+2: A=MIN+((MAX-MIN)/38)*(I-2): B=MIN+((MAX-MIN)/38)*I
2120 IF A<=REF AND REF<=B THEN I=I-1: GOTO 2130: ELSE 2110
2130 A=(MAX-REF)/(38-I): B=(REF-MIN)/I
2140 IF A>=B THEN JUMP!=A:ELSE JUMP!=B
2150 IF YOPT=2 THEN 2180:ELSE  IF JUMP!<0.25 THEN JUMP!=0.25
2155 SV=JUMP!: J!=INT(JUMP!)-0.25
2160 J!=J!+0.25: IF SV>J! THEN JUMP!=J!+0.25: IF J!<INT(SV)+1 THEN 2160
2180 IF YOPT=2 THEN IF JUMP!=0 THEN JUMP!=0.001
2190 T(I)=REF: FOR J=0 TO 38: T(J)=T(I)+(J-I)*JUMP!:NEXT
2200 XAXIS=23.5-I/2: XTIC=I
2210 I=-1
2220 I=I+1: A%(I)=0
2230 J=0:IF M(I)>=0.5*(T(32)+T(31)) THEN J=31: GOTO 2270
2240 IF M(I)>=0.5*(T(24)+T(23)) THEN J=23: GOTO 2270
2250 IF M(I)>=0.5*(T(16)+T(15)) THEN J=15: GOTO 2270
2260 IF M(I)>=0.5*(T(8)+T(7)) THEN J=7
2270 J=J+1: IF M(I)>=0.5*(T(J)+T(J-1)) THEN A%(I)=J: ELSE 2290
2280 IF J<38 THEN 2270
2290 IF I<N THEN 2220
2300 RETURN: '***************************************************************
2400 YAX=(82-XL-1)\2: IF YAX<8 THEN YAXSV=YAX: YAX=8: ELSE YAXSV=8
2410 IF OPT3=2 THEN LPRINT CHR$(27)+CHR$(12)
2420 CLS: IF GRID$<>"y" THEN 2450
2430 DOT$="": FOR I=1 TO XL: DOT$=DOT$+CHR$(249): NEXT:
2440 FOR I=5 TO 23: LOCATE I,YAX+1: PRINT DOT$;: NEXT
2450 I=4: IF 1=XAXIS MOD 2 THEN I=3
2460 I=I+2:J=39-2*(I-4): IF T(J)>=0 THEN 2510
2470 LOCATE I,YAX-7:IF T(J)<=-1000 OR YOPT<>2 THEN PRINT USING "+####.";T(J): LOCATE I,YAX-2: IF YOPT<>3 THEN PRINT ".";:GOTO 2550: ELSE PRINT "%";: GOTO 2550
2480 IF T(J)<=-100 AND T(J)>-1000 THEN PRINT USING "+###.#";T(J):GOTO 2550
2490 IF T(J)>-100 AND T(J)<=-10 THEN PRINT USING "+##.##";T(J):GOTO 2550
2500 PRINT USING "+#.###";T(J):GOTO 2550
2510 LOCATE I,YAX-6:IF T(J)>=1000 OR YOPT<>2 THEN PRINT USING "####.";T(J): LOCATE I,YAX-2: IF YOPT<>3 THEN PRINT ".";:GOTO 2550: ELSE PRINT "%";: GOTO 2550
2520 IF T(J)>=100 AND T(J)<1000 THEN PRINT USING "###.#";T(J):GOTO 2550
2530 IF T(J)<100 AND T(J)>=10 THEN PRINT USING "##.##";T(J):GOTO 2550
2540 PRINT USING "#.###";T(J)
2550 IF I<22 THEN 2460
2560 K=0
2570 K=K+1
2580 I=LEN(TITLE$(K)): J=(82-I)\2: IF YAXSV<8 THEN J=J+YAXSV\2
2590 IF J<1 THEN J=1
2600 LOCATE K,J:PRINT TITLE$(K)
2610 IF K=1 GOTO 2570
2620 I=LEN(TITLE$(3)):J=(2*YAX+1-I)\2:IF J<1 THEN J=1
2630 IF SCALE$="" THEN 2650
2640 LOCATE 3,J:PRINT TITLE$(3):LOCATE 4,YAX-6:PRINT SCALE$:GOTO 2660
2650 LOCATE 4,J:PRINT TITLE$(3)
2660 FOR J=YAX TO XL+YAX:LOCATE XAXIS,J
2670 PRINT CHR$(196);:NEXT
2680 FOR I=5 TO 23:LOCATE I,YAX
2690 PRINT CHR$(197):NEXT
2700 IF XTIC=1 THEN LOCATE 23,YAX:PRINT CHR$(192)
2710 IF XTIC=37 THEN LOCATE 5,YAX: PRINT CHR$(218)
2720 RETURN  '************************************************************
2800 LOCATE 24,YAX+1:FOR I=0 TO 11:PRINT LABEL$(I)+"  ";:NEXT:LOCATE 24,XL+YAX+2:IF MTH%=12 THEN PRINT YR;:ELSE PRINT " "+RIGHT$(STR$(YR-1),2);"-";RIGHT$(STR$(YR),2);
2810 RETURN 720 '**********************************************************
2900 IF W>4 THEN W1=(W-4)\2: ELSE W1=0
2910 FOR I=0 TO N :J=YAX+W1+(W+S)*I+1: LOCATE 24,J: IF N>13 THEN PRINT RIGHT$(STR$(YR+I-N),2);: ELSE PRINT RIGHT$(STR$(YR+I-N),4);
2920 NEXT: RETURN 720  '***************************************************
3000 IF QOPT$="g" THEN 3060
3010 IF YRS<>1 THEN 3030
3020 FOR I=1 TO 4: J=YAX+1+16*(I-1): LOCATE 24,J+7:PRINT RIGHT$(STR$(YR),4);:LOCATE 24,J+1:PRINT "QTR";:LOCATE 24,J+4: PRINT I;:LOCATE 24,J+6: PRINT ",";:NEXT:GOTO 3110
3030 IF YRS<>2 THEN 3050
3040 K=-1: FOR I=0 TO 1: FOR J=1 TO 4: K=K+1: L=YAX+8*K:LOCATE 24,L+5: PRINT RIGHT$(STR$(YR-1+I),2);:LOCATE 24,L:PRINT J;:LOCATE 24,L+2: PRINT "QTR";:NEXT:NEXT: GOTO 3110
3050 K=-1: FOR I=0 TO 2: FOR J=1 TO 4: K=K+1: L=YAX+5*K:LOCATE 24,L+3: PRINT RIGHT$(STR$(YR-2+I),2);: LOCATE 24,L:PRINT J;:LOCATE 24,L+2:PRINT "Q";:NEXT:NEXT: GOTO 3110
3060 IF YRS<>2 THEN 3090
3070 FOR I=0 TO 1:FOR J=1 TO 4
3080 L=(YAX+7*I)+16*(J-1):LOCATE 24,L+5:PRINT RIGHT$(STR$(YR-1+I),2);:LOCATE 24,L:PRINT J;:LOCATE 24,L+2:PRINT "QTR";:NEXT:NEXT:GOTO 3110
3090 FOR I=0 TO 2:FOR J=1 TO 4:L=(YAX+5*I)+16*(J-1)
3100 LOCATE 24,L+3:PRINT RIGHT$(STR$(YR-2+I),2);: LOCATE 24,L:PRINT J;:LOCATE 24,L+2:PRINT "Q";:NEXT:NEXT
3110 RETURN 720 '***********************************************************
3200 X=YAX+1: FOR J=0 TO N: X=X+S(J)+W(J): Y=X+(W(J+1)-LEN(LABEL$(J)))\2
3210 LOCATE 24,Y: PRINT LABEL$(J);:NEXT: RETURN '****************************
3300 L=0: X9=YAX+1: IF QOPT$="g" THEN N=3
3310 L=L+1:IF YRS=2 THEN X9=YAX+1+(L-1)*7
3320 IF YRS=3 THEN X9=YAX+1+(L-1)*5
3330 IF OPT=4 AND DOOP$="2" THEN Y=YAX+1+S(0)
3340 I=-1
3350 I=I+1:P%=I+(L-1)*4
3360 IF OPT=4 AND DOOP$="2" THEN W=W(I+1): IF I>0 THEN Y=Y+S(I)+W(I)
3370 IF A%(P%)=XTIC THEN 3660
3380 IF XTIC=1 AND A%(P%)=0 THEN 3660
3390 IF XTIC=37 AND A%(P%)=38 THEN 3660
3400 IF OPT=4 AND DOOP$="1" THEN S=S(1):W=W(1)
3410 IF OPT<>4 OR DOOP$<>"2" THEN  Y=X9+(W+S)*I
3420 IF XTIC>A%(P%) THEN 3550
3430 IF 1=A%(P%) MOD 2 THEN 3500
3440 X=(40-A%(P%))/2+4
3450 FOR J=Y TO Y+W-1
3460 LOCATE XAXIS,J: PRINT CHR$(223)
3470 FOR K=X TO XAXIS-1: LOCATE K,J:PRINT CHR$(219)
3480 NEXT:NEXT
3490 GOTO 3660
3500 X=(39-A%(P%))/2+4
3510 FOR J=Y TO Y+W-1
3520 LOCATE XAXIS,J: PRINT CHR$(223): LOCATE X,J: PRINT CHR$(220)
3530 FOR K=X+1 TO XAXIS-1: LOCATE K,J: PRINT CHR$(219):NEXT:NEXT
3540 GOTO 3660
3550 IF 1=A%(P%) MOD 2 THEN 3620
3560 X=(38-A%(P%))/2+4
3570 FOR J=Y TO Y+W-1
3580 LOCATE XAXIS,J: PRINT CHR$(220)
3590 FOR K=XAXIS+1 TO X: LOCATE K,J:PRINT CHR$(219)
3600 NEXT:NEXT
3610 GOTO 3660
3620 X=(39-A%(P%))/2+4
3630 FOR J=Y TO Y+W-1
3640 LOCATE XAXIS,J: PRINT CHR$(220): LOCATE X,J: PRINT CHR$(223)
3650 FOR K=XAXIS+1 TO X-1: LOCATE K,J: PRINT CHR$(219):NEXT:NEXT
3660 '
3670 IF I<N THEN 3350
3680 IF QOPT$="g" AND L<YRS THEN 3310:ELSE IF QOPT$="g" THEN N=YRS*4-1
3690 IF OPT3=2 THEN GOSUB 4800
3700 LOCATE 1,80: PRINT "*";
3710 L$=INKEY$: IF L$<>" " THEN 3710
3720 IF SAMPLE$="y" THEN GOTO 9010
3730 RETURN: '***************************************************************
3800 REDO%=10: CLS:OPTF$="0": LOCATE 2,38:PRINT "MENU 3":LOCATE 6,1:PRINT "Select an option."
3810 LOCATE 8,33:PRINT "1. Return to GRAPH": LOCATE 10,33:PRINT "2. PRINT Graph":LOCATE 12,33: PRINT "3. STORE Input":LOCATE 14,33:PRINT "4. Return to MENU 1":LOCATE 16,33: PRINT "5. Y-AXIS Options":LOCATE 18,33: PRINT "6. Display Other OPTIONS"
3820 LOCATE 6,20: INPUT Z$: IF VAL(Z$)<1 OR VAL(Z$)>6 THEN BEEP: GOTO 3820: ELSE OPT3=VAL(Z$)\1
3830 ON OPT3 GOTO 670,670,3840,400,4100,3900
3840 LOCATE 22,1: PRINT "Enter the name under which the file shall be saved."
3850 LOCATE 22,55:INPUT DATUM$: FOR K=1 TO LEN(DATUM$):IF MID$(DATUM$,K,1)="." THEN 3860: ELSE NEXT
3860 IF K>9 THEN K=9
3870 DATUM$=LEFT$(DATUM$,K-1): NEWFILE$=DATUM$+".bar": GOSUB 4200
3880 GOSUB 5700: LOCATE 22,1:PRINT "The file named ";DATUM$;" has been saved.": LOCATE 6,20: PRINT "    ": GOTO 3820
3890  '***************************************************************
3900 REDO%=11: KEY (1) ON: CLS:OPT4=0: G$="n": LOCATE 2,38:PRINT "MENU 4":LOCATE 6,1:PRINT "Select an option."
3910 LOCATE 9,28:PRINT "1. Change HORIZONTAL AXIS":LOCATE 11,28:PRINT "2. Display DATA": LOCATE 13,28: PRINT "3. Change TITLES":LOCATE 17,28:PRINT "5. Display GRAPH":LOCATE 19,28:PRINT "6. Return to MENU 3"
3920 LOCATE 15,28:IF GRID$<>"y" THEN PRINT "4. Add GRID Lines":ELSE PRINT "4. Delete GRID Lines"
3930 LOCATE 6,20: INPUT Z$: IF VAL(Z$)<1 OR VAL(Z$)>6 THEN BEEP: GOTO 3930:ELSE OPT4=VAL(Z$)
3940 ON OPT4 GOTO 3950,5500,1700,4060,670,3800
3950 GOSUB 4050
3960 IF R$="y" THEN R$="n": GOTO 4010
3970 LOCATE 23,1: GOSUB 5900
3980 IF R$="y" THEN 4030
3990 IF R$<>"n" THEN BEEP: GOTO 3970
4000 GOSUB 4050
4010 LOCATE 23,1:PRINT "Enter the value of the horizontal axis.";
4020 LOCATE 23,50:INPUT Z$: REF#=VAL(Z$) :IF REF#>=1.00000000000000e+16# THEN BEEP: GOTO 4020
4030 GOSUB 1860: GOSUB 4050
4040 LOCATE 23,1:PRINT "Anything else?":LOCATE 6,21:PRINT "  ";: GOTO 3930
4050 LOCATE 23,1:FOR J=1 TO 19:PRINT "    ";:NEXT: RETURN
4060 IF G$="n" THEN IF GRID$<>"y" THEN GRID$="y":ELSE GRID$="n"
4070 G$="y": GOTO 4040 '*****************************************************
4100 REDO%=14: CLS: SV=YOPT: LOCATE 2,37:PRINT "Y-AXIS":LOCATE 6,1:PRINT "Select an option.":LOCATE 8,1:PRINT "This option determines how the tick values":LOCATE 9,1:PRINT "are calculated. The default option is 1"
4110 LOCATE 14,28:PRINT "1. INTEGERS (rounding occurs)":LOCATE 16,28:PRINT "2. EXACT (to four digits)":LOCATE 18,28:PRINT "3. PERCENTAGES (rounded to integers)":GOSUB 5800
4120 LOCATE 6,20:INPUT Z$: IF VAL(Z$)<1 OR VAL(Z$)>3 THEN BEEP: GOTO 4120: ELSE YOPT=VAL(Z$)
4130 GOSUB 5800: IF PRCENT$="n" AND YOPT=3 THEN 4120:ELSE IF SV=YOPT THEN 3800: ELSE GOSUB 1810: GOTO 3800
4200 OPEN NEWFILE$ FOR OUTPUT AS #1:KEY (1) STOP: KEY (9) STOP
4210 PRINT#1,N,MTH%,YR,YRS,OPT,REF#,YOPT,DUMMY1,DUMMY2,
4220 FOR I=0 TO N: PRINT#1,M#(I),:NEXT
4230 IF OPT<>4 THEN 4250
4240 FOR I=0 TO N: PRINT#1,S(I),W(I+1):NEXT
4250 PRINT#1,TITLE$(1);",";TITLE$(2);",";TITLE$(3);",";QOPT$;",";R$;",";DOOP$;",";GRID$;",";DUMMY1$;",";DUMMY2$
4260 IF OPT<>4 THEN 4280
4270 FOR I=0 TO N: PRINT#1,LABEL$(I);",";:NEXT
4280 CLOSE #1: KEY (9) ON: KEY (1) ON: RETURN '*****************************
4300 REDO%=12: CLS: LOCATE 2,38:PRINT "FILES":LOCATE 4,1:PRINT "Select an option.":LOCATE 6,1:PRINT "1. Return          2. Erase
4310 LOCATE 10: FILES "*.bar"
4320 LOCATE 4,20:INPUT OPTF$: IF OPTF$<>"1" AND OPTF$<>"2" THEN BEEP: GOTO 4320
4330 IF OPTF$="1" THEN 400: ELSE 4400   '********************************
4400 REDO%=13: GOSUB 4500: LOCATE 5,1: PRINT "Enter the name of the file to be erased "
4410 LOCATE 5,42:INPUT GONE$: IF GONE$="/" THEN 400
4420 FOR K=1 TO LEN(GONE$):IF MID$(GONE$,K,1)="." THEN 4430: ELSE NEXT
4430 IF K>9 THEN K=9
4440 GONE$=LEFT$(GONE$,K-1): GONER$=GONE$+".bar": KILL GONER$: GOTO 4400
4450 LOCATE 6,30:PRINT "This name must be on the list.":GOTO 4410
4500 LOCATE 3,1: FOR K2=1 TO 20: PRINT "                    ";:NEXT:RETURN
4600 OPEN OLDFILE$ FOR INPUT AS #1
4610 IF EOF(1) THEN CLOSE: GOTO 4710
4620 INPUT#1,N,MTH%,YR,YRS,OPT,REF#,YOPT,DUUMY1,DUMMY2
4630 FOR I=0 TO N: INPUT#1,M#(I):NEXT
4640 IF OPT<>4 THEN 4660
4650 FOR I=0 TO N: INPUT#1,S(I),W(I+1):NEXT
4660 IF EOF(1) THEN 4700
4670 INPUT#1,TITLE$(1),TITLE$(2),TITLE$(3),QOPT$,R$,DOOP$,GRID$,DUMMY1$,DUMMY2$
4680 IF OPT<>4 THEN 4700
4690 FOR I=0 TO N: INPUT#1,LABEL$(I):NEXT
4700 CLOSE #1
4710 IF OPT=4 THEN GOSUB 5480
4720 IF OPT=1 THEN GOSUB 950
4730 IF OPT=2 THEN GOSUB 1210
4740 IF OPT=3 THEN GOSUB 1590
4750 RETURN 660: '***********************************************************
4800 FOR I=1 TO 25:FOR J=1 TO 80: X=SCREEN (I,J)
4810 IF I=1 AND J=80 THEN X=160
4820 IF X<192 THEN 4900
4830 IF X=218 THEN X=200
4840 IF X=192 THEN X=170
4850 IF X=196 THEN X=172
4860 IF X=197 THEN X=206
4870 IF X=223 THEN X=175
4880 IF X=219 THEN X=223
4890 IF X=249 THEN X=32
4900 LPRINT CHR$(X);:NEXT:NEXT: IF SAMPLE$="y" THEN RETURN 9010: ELSE RETURN 730: '*********************************************
5000 REDO%=15: CLS:LOCATE 2,34:PRINT "Do-It-Yourself":LOCATE 6,1:PRINT "Select an option.":LOCATE 10,22:PRINT "1. Set constant bar width and spacing":LOCATE 12,22:PRINT "2. Enter widths and spaces individually"
5010 LOCATE 6,19: IF OPT4=2 THEN PRINT "? ";DOOP$: GOTO 5030
5020 INPUT DOOP$: IF DOOP$<>"1" AND DOOP$<>"2" THEN BEEP: GOTO 5010
5030 IF DOOP$="1" THEN LOCATE 16,1:PRINT "Enter the WIDTH (same for each bar)":LOCATE 18,1:PRINT "Enter the SPACE (between bars)": ELSE IF OPT4<>2 THEN 5200: ELSE 5130
5040 LOCATE 16,40:IF OPT4<>2 THEN INPUT Z$: IF VAL(Z$)<1 OR VAL(Z$)>71 THEN BEEP: GOTO 5040: ELSE W=VAL(Z$)\1: GOTO 5060
5050 PRINT W: GOTO 5060
5060 LOCATE 18,40:IF OPT4<>2 THEN INPUT Z$:IF VAL(Z$)<0 OR VAL(Z$)\1+W>71 THEN BEEP: GOTO 5060:ELSE S=VAL(Z$)\1: GOTO 5080
5070 PRINT S: GOTO 5130
5080 I=1
5090 I=I+1: IF W*I+S*(I-1)<=71 THEN 5090
5100 IMAX=I-1
5110 LOCATE 21,22: PRINT "The maximum number of bars will be";I-1
5120 LOCATE 23,22: PRINT "If more than this are needed, press Q."
5130 LOCATE 1,79: PRINT "*": K$=INKEY$: IF K$="q" AND OPT4<>2 THEN LOCATE 22,36:PRINT "    ": LOCATE 1,79: PRINT " ";:GOTO 5040
5140 IF K$<>" " THEN 5130: ELSE IF OPT4=2 THEN 5510 '************************
5200 PAGE=0: L=0: SV%=L: RE16$="n"
5210 REDO%=16: CLS:PAGE=PAGE+1: IF RE16$="y" THEN PAGE=PAGE-1
5220 LOCATE 2,30:PRINT "Do-It-Yourself":LOCATE 5,5:PRINT "Label":LOCATE 5,34:PRINT "Value":IF DOOP$="2" THEN LOCATE 5,55:PRINT "Space":LOCATE 5,68:PRINT "Width";
5230 IF DOOP$="2" AND OPT4<>2 THEN LOCATE 23,1:PRINT "You have used ";:PRINT USING "###";L;:PRINT " of 71 print positions. There are ";:PRINT USING "###";71-L;:PRINT " remaining.";
5240 IF OPT4=2 THEN RETURN
5250 IF PAGE>1 THEN 5270
5260 I=-1
5270 IF RE16$="y" THEN I=(PAGE-1)*15-1: RE16$="n"
5280 I=I+1: IF DOOP$="1" AND I=IMAX THEN 5410
5290 IF L=71 THEN 5410
5300 IF I=PAGE*15 THEN I=I-1: SV%=L: GOTO 5210
5310 J=7-(PAGE-1)*15: LOCATE I+J,1:PRINT USING "##";I+1;:PRINT "."
5320 LOCATE I+J,5:INPUT LABEL$(I):IF LABEL$(I)="/" THEN 5410
5330 X=LEN(LABEL$(I)):IF X>26 THEN BEEP: GOTO 5320
5340 LOCATE I+J,34:INPUT Z$: M#(I)=VAL(Z$):IF ABS(M#(I))>999999999999999# THEN BEEP:GOTO 5340
5350 IF DOOP$="1" THEN Y=W: GOTO 5400
5360 LOCATE I+J,55:INPUT Z$: S(I)=VAL(Z$)\1:IF S(I)>70 OR S(I)<0 THEN BEEP :GOTO 5360: ELSE Y=S(I)
5370 L=L+Y:IF L>71 THEN L=L-Y: BEEP:GOTO 5360: ELSE GOSUB 5600
5380 LOCATE I+J,68:INPUT Z$: W(I+1)=VAL(Z$)\1 :IF W(I+1)>71 OR L+W(I+1)>71 THEN BEEP: GOTO 5380: ELSE IF W(I+1)<1 THEN L=L-Y:GOSUB 5600: GOTO 5320
5390 L=L+W(I+1): GOSUB 5600: Y=W(I+1)
5400 LABEL$(I)=LEFT$(LABEL$(I),Y): GOTO 5280
5410 N=I-1: IF N=-1 THEN 400: ELSE GOSUB 5700
5420 LOCATE 23,1: GOSUB 5900
5430 IF R$="y" THEN 5470
5440 IF R$="n" THEN GOSUB 5700 :ELSE BEEP: GOTO 5420
5450 LOCATE 23,1:PRINT "Enter the value of the horizontal axis.";
5460 LOCATE 23,50:INPUT Z$: REF#=VAL(Z$) :IF REF#>=1.00000000000000e+16# THEN BEEP: GOTO 5460
5470 IF DOOP$="2" THEN 5480: ELSE FOR I=1 TO N+1: W(I)=W: S(I)=S:NEXT: S(0)=0: W(0)=0
5480 XL=0: FOR I=0 TO N+1: XL=XL+S(I)+W(I):NEXT: XL=XL-S(N+1)
5490 IF OP$="1" OR SAMPLE$="y" THEN RETURN :ELSE RETURN 650 '***************
5500 KEY (1) OFF: IF OPT<>4 THEN 5570: ELSE 5000
5510 GOSUB 5200: IF PAGE>1 THEN 5530
5520 I=-1
5530 I=I+1:IF I<>PAGE*15 THEN 5550
5540 LOCATE 1,79: PRINT "*": K$=INKEY$: IF K$<>" " THEN 5540: ELSE IF I-1=N THEN 3900: ELSE : GOSUB 5210
5550 J=7-(PAGE-1)*15:LOCATE I+J,1:PRINT USING "##";I+1;:PRINT ".";:LOCATE I+J,7:PRINT LABEL$(I):LOCATE I+J,36:PRINT M#(I);:IF DOOP$="2" THEN LOCATE I+J,57:PRINT S(I);:LOCATE I+J,70: PRINT W(I+1);
5560 IF I<N THEN 5530: ELSE I=I+1: GOTO 5540
5570 ON OPT GOSUB 1000,1190,1540: LOCATE 1,79,0:PRINT "*";
5580 K$=INKEY$: IF K$<>" " THEN 5580: ELSE 3900  '************************
5600 LOCATE 23,15:PRINT USING "###";L;:LOCATE 23,52:PRINT USING "###";71-L;:RETURN  '*********************************************************************
5700 LOCATE 22,1: FOR I=1 TO 19: PRINT "        ";:NEXT: RETURN '***********
5800 IF PRCENT$="n" AND YOPT=3 THEN BEEP: LOCATE 22,1:PRINT "The PERCENTAGE option can be chosen only if all data":PRINT "is non-negative and the total is positive.";
5810 RETURN  '***************************************************************
5900 INPUT "Display the data relative to the average value (Y or N) ";R$: IF R$="Y" THEN R$="y": ELSE IF R$="N" THEN R$="n"
5910 RETURN '****************************************************************
7000 IF ERR<>71 THEN 7020: ELSE CLS: BEEP:LOCATE 13,25:PRINT "Did you remove the diskette?": LOCATE 1,79: PRINT "*": IF REDO%=10 THEN 7120
7010 K$=INKEY$: IF K$<>" " THEN 7010: ELSE IF SAMPLE$="y" THEN RESUME 310: ELSE IF REDO%=13 THEN RESUME 4300: ELSE RESUME 400
7020 IF ERR<>62 THEN 7040: ELSE CLS: BEEP:LOCATE 10,20:PRINT "The file you have accessed can not be used.":LOCATE 12,20:PRINT "It probably wasn't stored during execution":LOCATE 14,20:PRINT "of this program. The disk might have been full,"
7030 LOCATE 16,20:PRINT "or this might be a bug.":LOCATE 1,79:PRINT "*":GOTO 7050
7040 IF SAMPLE$<>"y" THEN 7060: ELSE CLS: LOCATE 13,39:PRINT "Fin":LOCATE 1,79:PRINT "*":GOTO 7050
7050 K$=INKEY$: IF K$<>" " THEN 7050: ELSE RESUME 400
7060 IF REDO%=1 AND OP$="1" THEN BEEP:GOSUB 5700: LOCATE 23,1: PRINT "No file named ";FILE$;" has been saved.";: RESUME 440
7070 IF ERR=53 AND REDO%=13 THEN  BEEP:RESUME 4450
7080 IF OP$="3" AND ERR=64 THEN BEEP:RESUME 4450
7090 IF ERR<>61 THEN 7100: ELSE CLS:BEEP:LOCATE 10,20:PRINT "The disk appears to be full.":LOCATE 12,20:PRINT "The file you have attempted to save might":LOCATE 14,20:PRINT "not have been completely stored.":LOCATE 1,78:PRINT "*" : GOTO 7120
7100 IF REDO%=10 AND OPT3=3 THEN LOCATE 23,48: PRINT "This name is invalid.";:BEEP:RESUME 3850
7110 IF ERR<>27 THEN 7130 ELSE CLS: BEEP:LOCATE 8,20:PRINT "Either your printer is not plugged in,":LOCATE 10,20:PRINT "not connected to the computer,":LOCATE 12,20:PRINT "out of paper, or worse....":LOCATE 1,79:PRINT "*"
7120 K$=INKEY$: IF K$<>" " THEN 7120: ELSE RESUME 3800
7130 IF REDO%=12 AND ERR=53 THEN BEEP:LOCATE 13,30:PRINT "No files have been stored.": LOCATE 1,79:PRINT "*": ELSE 7150
7140 K$=INKEY$: IF K$<>" " THEN 7140 ELSE RESUME 400
7150 IF ERR=24 THEN CLS: LOCATE 13,30:PRINT "Check your printer.": BEEP:LOCATE 1,79:PRINT "*":GOTO 7120
8000 IF REDO%>8 THEN 8020: ELSE IF REDO%>4 THEN 8010:ELSE IF REDO%=1 THEN RETURN 400: ELSE IF REDO%=2 THEN RETURN 800: ELSE IF REDO%=3 THEN RETURN 900: ELSE IF REDO%=4 THEN RETURN 1000
8010 IF REDO%=5 THEN RETURN 1100: ELSE IF REDO%=6 THEN RETURN 1190: ELSE IF REDO%=7 THEN RETURN 1500: ELSE IF REDO%=8 THEN  RETURN 1540
8020 IF REDO%>12 THEN 8030: ELSE IF REDO%=9 THEN RETURN 1700: ELSE IF REDO%=10 THEN RETURN 3800: ELSE IF REDO%=11 THEN RETURN 3900: ELSE IF REDO%=12 THEN RETURN 4300
8030 IF REDO%=13 THEN RETURN 4400: ELSE IF REDO%=14 THEN RETURN 4100: ELSE IF REDO%=15 THEN RETURN 5000: ELSE IF REDO%=16 THEN RE16$="y": L=SV%: RETURN 5210
9000 KEY (3) OFF: SAMPLE$="y":Z$=""
9010 Z$=Z$+"s": OLDFILE$=Z$+".bar": GOTO 4600
```

## BULLSEYE.BAS

```bas
100 CLS
110 A$=STRING$(80,205)
120 PRINT A$
130 PRINT TAB(33)"BULLSEYE  #2002"
140 COLOR 23
150 PRINT :PRINT :PRINT TAB(39)"IPCO"
160 COLOR 7
170 PRINT :PRINT :PRINT TAB(25)"PERSONAL COMPUTER OWNERS GROUP"
180 PRINT :PRINT :PRINT TAB(19)"p.o. box 10426, pittsburgh, pennslyvania 15234"
190 PRINT A$
200 PRINT :PRINT :PRINT :PRINT :PRINT
210 PRINT TAB(28)"PRESS ANY KEY TO CONTINUE"
220 A$=INKEY$:IF A$="" THEN 220
230 CLS
240 PRINT  TAB(32);"BULLSEYE"
250 PRINT TAB(15);"CREATIVE COMPUTING MORRISTOWN, NEW JERSEY"
260 PRINT:PRINT:PRINT
270 PRINT "IN THIS GAME, UP TO 20 PLAYERS THROW DARTS AT A TARGET"
280 PRINT "WITH 10, 20, 30, AND 40 POINT ZONES.  THE OBJECTIVE IS"
290 PRINT "TO GET 200 POINTS.": PRINT
300 PRINT  "THROW",TAB(20);"DESCRIPTION";TAB(45);"PROBABLE SCORE"
310 PRINT "1";TAB(20);"FAST OVERARM";TAB(45);"BULLSEYE OR COMPLETE MISS"
320  PRINT "2";TAB(20);"CONTROLLED OVERARM";TAB(45);"10, 20 OR 30 POINTS"
330 PRINT"3";TAB(20)"UNDERARM";TAB(45);"ANYTHING":PRINT
340 DIM A$(20),S(20),W(10): M=0 :R=0:FOR I=1 TO 20: S(I)=0:NEXT I
350 INPUT "HOW MANY PLAYERS";N:PRINT
360 FOR I=1 TO N
370 PRINT "NAME OF PLAYER #";I;:INPUT A$(I)
380 NEXT I
390 R=R+1:PRINT :PRINT  "ROUND";R
400 FOR I=1 TO N
410 PRINT :PRINT  A$(I)"'S THROW";: INPUT T
420 IF T<0 OR T>3 THEN PRINT "INPUT 1,2 OR 3!": GOTO  410
430 ON T GOTO 440, 450, 460
440 P1=0.65:P2=0.55: P3=0.5: P4=0.5: GOTO 470
450 P1=0.9899999: P2=0.77: P3=0.43: P4=0.01: GOTO 470
460 P1=0.95: P2=0.75: P3=0.45: P4=0.05
470 U=RND(1)
480 IF U>=P1 THEN PRINT "BULLESYE!!  40 POINTS!":B=40:GOTO 540
490 IF T=1 THEN 530
500 IF U>=P2 THEN PRINT "30-POINT ZONE!":B=30: GOTO 540
510 IF U>=P3 THEN PRINT "20-POINT ZONE":B=20: GOTO 540
520 IF U>=P4 THEN PRINT "WHEW! 10 POINTS.":B=10: GOTO 540
530 PRINT "MISSED THE TARGET!  TOO BAD.": B=0
540 S(I)=S(I)+B: PRINT "TOTAL SCORE =";S(I): NEXT I
550 FOR I =1 TO N
560 IF S(I)>=200 THEN M=M+1: W(M)=I
570 NEXT I
580 IF M=0 THEN 390
590 PRINT :PRINT  "WE HAVE A WINNER!!!":PRINT
600 FOR I=1 TO M:PRINT A$(W(I));"SCORED";S(W(I));"POINTS.":NEXT I
610 PRINT :PRINT  "THANKS OR THE GAME.":END
```

## CAPTURE.BAS

```bas
100 CLS
110 A$=STRING$(80,205)
120 PRINT A$
130 PRINT TAB(23)"CAPTURE THE ENEMY SPACE SHIP #2005"
140 COLOR 23,0,0
150 PRINT :PRINT :PRINT TAB(39)"IPCO"
160 COLOR 7,0,0
170 PRINT :PRINT :PRINT TAB(25)"PERSONAL COMPUTER OWNERS GROUP"
180 PRINT :PRINT :PRINT TAB(19)"p.o. box 10426, pittsburgh, pennsylvania 15234"
190 PRINT A$
200 PRINT :PRINT :PRINT :PRINT :PRINT
210 PRINT TAB(28)"PRESS ANY KEY TO CONTINUE"
220 A$=INKEY$:IF A$="" THEN 220
230 CLS
240 KEY OFF
250 CLS
260 RANDOMIZE
270 CLS: CLEAR 500: CR$=STRING$(5,140)+CHR$(143)
280 F$="###.##"
290 PRINT TAB(26)"******* *** ***** ***** ****"
300 PRINT TAB(26)"CAPTURE THE ENEMY SPACE SHIP"
310 PRINT TAB(26)"******* *** ***** ***** ****"
320 PRINT TAB(22) "ENTER YOUR NAME FOR GALACTIC RECORDS"
330 INPUT A$
340 DIM Q(9,9)
350 S=25
360 PRINT :PRINT :PRINT :PRINT :PRINT :INPUT "DO YOU NEED INSTRUCTIONS(Y OR N)";I$
370 IF LEFT$(I$,1)="Y" THEN 380 ELSE GOTO 560
380 CLS
390 PRINT TAB(26) "CAPTURE THE ENEMY SPACE SHIP"
400 PRINT TAB(26) "******* *** ***** ***** ****"
410 PRINT :PRINT
420 PRINT "YOUR  MISSION  COMMANDER  "A$;"  IS  TO CAPTURE AN ENEMY BATTLE VESSEL.     "
430 PRINT "YOU  MUST NOT  DESTROY THE ENEMY, YOU MUST TAKE HIM ALIVE.  TO EFFECT A CAPTURE, "
440 PRINT "YOU  MUST  DESTROY  ALL REGIONS AROUND IT.  YOUR SHIP'S BATTLE-DEFENCE COMPUTER "
450 PRINT "WILL KEEP UP TO DATE ON THE ENEMY`S LAST POSITION.                      "
460 PRINT :PRINT
470 PRINT "THERE  IS  ALSO  A  PROTECTED  AREA   USING   THE  AXES  X=1 AND Y=1 SO THAT THE"
480 PRINT "ALIEN  HAS A  CHANCE IF YOU FIRE INTO THIS REGION, IT IS THE SAME AS FIRING INTO"
490 PRINT "A PREVIOUSLY DESTROYED AREA!!!"
500 PRINT :PRINT :PRINT TAB(25)"GOOD LUCK COMMANDER ";A$;"!!"
510 PRINT
520 PRINT "PRESS ANY KEY TO CONTINUE."
530 IF INKEY$="" THEN 530 ELSE CLS
540 PRINT
550 PRINT
560 CLS
570 S=25
580 CLS
590 PRINT TAB(20)"COMMANDER ";A$;" YOU HAVE ";S;"SHOTS"
600 FOR X=1 TO 9
610 FOR Y=1 TO 9
620 Q(Y,X)=0
630 Q(1,X)=-1
640 Q(9,X)=-1
650 Q(Y,1)=-1
660 Q(Y,9)=-1
670 NEXT Y
680 NEXT X
690 X=INT(10*RND)
700 IF X<1 THEN 690
710 IF X>8 THEN 690
720 Y=INT(10*RND)
730 IF Y<1 THEN 720
740 IF Y>8 THEN 720
750 PRINT
760 PRINT "ENEMY'S LAST KNOWN POSITION"
770 PRINT "SECTOR";X;",";Y
780 PRINT
790 IF S<0 THEN 1620
800 C=X
810 D=Y
820 A=INT(10*RND)
830 IF A<C THEN 850
840 GOTO 860
850 X=X-1
860 IF A>C THEN 880
870 GOTO 890
880 X=X+1
890 IF X<1 THEN 910
900 GOTO 920
910 X=1
920 IF X>8 THEN 940
930 GOTO 950
940 X=8
950 A=INT(10*RND)
960 IF A<D THEN 980
970 GOTO 990
980 Y=Y-1
990 IF A>D THEN 1010
1000 GOTO 1020
1010 Y=Y+1
1020 IF Y<1 THEN 1040
1030 GOTO 1050
1040 Y=1
1050 IF Y>8 THEN 1070
1060 GOTO 1080
1070 Y=8
1080 IF Q(Y,X)<>-1 THEN 1120
1090 X=C
1100 Y=D
1110 GOTO 820
1120 FOR A=1 TO 8
1130 FOR B=1 TO 8
1140 IF Q(B,A)=0 THEN 1160
1150 GOTO 1170
1160 PRINT " ";"*";
1170 IF Q(B,A)=-1 THEN 1190
1180 GOTO 1200
1190 PRINT " ";" ";
1200 NEXT B
1210 PRINT " ";A
1220 NEXT A
1230 PRINT   " 1 2 3 4 5 6 7 8"
1240 PRINT
1250 A=INT(10*RND)
1260 IF A>4 THEN 1320
1270 PRINT "COMMANDER ";A$;" YOU HAVE BEEN ATTACKED AND SOME OF YOUR PRECIOUS ENERGY HAS"
1280 PRINT "BEEN USED TO REPLENISH THE SHIELDS.."
1290 S=S-1
1300 PRINT "COMMANDER ";A$;" ONLY ";S;" SHOTS REMAIN"
1310 PRINT
1320 A=INT(10*RND)
1330 IF A<9 THEN 1450
1340 A=INT(10*RND)
1350 IF A=X THEN 1340
1360 IF A<1 THEN 1340
1370 IF A>8 THEN 1340
1380 B=INT(10*RND)
1390 IF B=Y THEN 1380
1400 IF B<1 THEN 1380
1410 IF B>8 THEN 1380
1420 Q(B,A)=-1
1430 PRINT "NOVA IN SECTOR ";A;" , ";B
1440 PRINT
1450 PRINT "ENTER YOUR PHASOR SHOT (X,Y)";
1460 INPUT A,B
1470 S=S-1
1480 IF A=X THEN 1650
1490 IF B=Y THEN 1650
1500 IF Q(B,A)=-1 THEN 1700
1510 Q(B,A)=-1
1520 FOR A=X-1 TO X+1
1530 FOR B=Y-1 TO Y+1
1540 IF A=X THEN 1570
1550 IF B=Y THEN 1570
1560 IF Q(B,A)<>-1 THEN 750
1570 NEXT B
1580 NEXT A
1590 PRINT:PRINT:PRINT "GOOD SHOW COMMANDER ";A$;" YOU HAVE CAPTURED THE ALIEN ENEMY.."
1600 PRINT " AND YOU HAVE ";S;"SHOTS REMAINING"
1610 GOTO 1670
1620 PRINT:PRINT:PRINT "COMMANDER ";A$;" YOU HAVE NO MORE ENERGY FOR PHASORS...
1630 GOTO 1690
1640 PRINT :PRINT
1650 PRINT:PRINT:PRINT "COMMANDER ";A$;" SORRY, YOU JUST KILLED THE ALIEN AND YOUR MISSION WAS "
1660 PRINT "TO CAPTURE THE ENEMY SHIP AND NOT DESTROY IT.  TRY AGAIN.."
1670 PRINT :PRINT :PRINT :INPUT "DO YOU WANT TO PLAY AGAIN (Y or N)";G$
1680 IF G$="Y" GOTO 570
1690 IF G$="N" THEN 1720
1700 PRINT:PRINT:PRINT " COMMANDER ";A$;" YOU JUST FIRED ON A PREVIOUSLY DESTROYED AREA AND IN THIS GAME YOU DO NOT HAVE ANY PHASORS TO EXPEND UNWISELY..."
1710 GOTO 750
1720 CLS:PRINT:PRINT "THANK YOU FOR THE GAME AND I LOOK FORWARD TO PLAYING WITH YOU AGAIN."
```

## CHESS.BAS

```bas
0 ' exit on error
1 CLEAR ,,2048:KEY OFF
2 CLS:COLOR 0,7:LOCATE 1,6:PRINT SPACE$(68)
3 LOCATE 2,6:PRINT" ********* Chess *********   By: M. C. Rakaska, Ides of March, 1980 "
4 LOCATE 3,6:PRINT SPACE$(68):LOCATE 4,6:PRINT"      Adapted for the IBM PC by  S. W. Huggins, December, 1981      "
5 LOCATE 5,6:PRINT SPACE$(68)
6 LOCATE 6,6:PRINT"                   <D-o-w-n-l-o-a-d-e-d  F-r-o-m>                   "
12 LOCATE 7,6:PRINT SPACE$(68):LOCATE 8,6:PRINT"  PC-NET #1 of Denver, Co.   303-773-2699 or Voice at 303-694-9038  "
13 LOCATE 9,6:PRINT SPACE$(68)
20 DEFINT A-Z:A=0:B=0:X=0:Y=0:S=0:A0=0:T=0:A8=0:A1=0:A2=0:A3=0:A4=0:B1=0:B6!=0:           H=0:M=0:N=0:P=0:W=0:A5=0:I=1
22 DIM C(64), A(10,10), B(10,10), T(10,10), S(8,8)
25 COLOR 7,0:LOCATE 18,1:PRINT"Important:  Use Caps Lock key to shift to UPPER CASE before continuing...."
30 LOCATE 21,1:INPUT "DO YOU WANT INSTRUCTIONS ";IN$:IN$=LEFT$(IN$,1):             IF IN$="Y" THEN GOSUB 2220
40 CL$="N"
50 CLS:INPUT "YOUR NAME IS ";B$:IF B$="" THEN B$=" HUMAN " ELSE B$=LEFT$(B$,9)
60 CLS:PRINT "LEVEL OF PLAY";:INPUT B8!:IF B8!=0 THEN B8!=1:B7!=1+RND(0)/2:ELSE    B7!=(B8!+1)/2+RND(0)/2
70 CLS:PRINT "DO YOU WANT WHITE ";B$;" ";:INPUT C$:GOSUB 790:IF LEFT$(C$,1)<>"N"   THEN GOSUB 900:GOTO 190
80 GOSUB 890:IF CL$="Y" THEN LOCATE 25,6,0:                                        PRINT "START ";TIME$;
100 F!=-99:A0=0:FOR J=1 TO 8:FOR K=1 TO 8:IF A(J,K)=99 THEN A6=J:A7=K
110 NEXT:NEXT
120 FOR X=1 TO 8:FOR Y=1 TO 8:IF A(X,Y)<0 THEN GOSUB 270:                           IF F!>=B7! THEN GOTO 150
130 NEXT:NEXT:IF F!>=-9 THEN GOTO 150 ELSE GOSUB 900
140 LOCATE 25,62,0: PRINT "I CONCEED    ";:GOTO 2190
150 A(R,U)=A(E,Q):A(E,Q)=1:IF A(R,U)=-2 AND U=1 THEN A(R,U)=-9
160 X=R:Y=U:A0=4:GOSUB 270:LOCATE 25,62,0:PRINT "IS MY MOVE    ";:                  LOCATE 25,51,0:PRINT CHR$(E+64);Q;"- "CHR$(R+64);U;
170 IF CL$="Y" THEN LOCATE 25,31,0:PRINT "STOP ";TIME$;
180 X=E:Y=Q:GOSUB 910:X=R:Y=U:GOSUB 910:IF C=1 THEN LOCATE 24,1,1:                  PRINT "CHECK ";:C=0 ELSE LOCATE 24,1,1:PRINT "      ";
190 IF X$="S" THEN GOSUB 1830:B7!=3*RND(0):LOCATE 25,1,1:PRINT "SELF-PLAYING";: GOSUB 2480:GOTO 100
195 LOCATE 25,1,1:PRINT "MOVE "+CHR$(7);B$;:GOSUB 1590:D=0:B4=A:B9=B:B5=0:IF A(X,Y)=2 AND Y=5 AND B=6 AND A(A,B)=1 AND ABS(A-X)=1 THEN B5=1:GOTO 220
200 IF X$="K" OR X$="Q" THEN GOSUB 900:LOCATE 25,1,0:PRINT STRING$(14," ");:        GOTO 100
210 IF X$="S" THEN CL$="N":GOTO 190:ELSE A0=3:GOSUB 250:                            IF D=0 THEN LOCATE 25,31,0:PRINT "ILLEGAL       ";:GOTO 190
220 LOCATE 25,31,1:PRINT "OK            ";:A=B4:B=B9:A(A,B)=A(X,Y):A(X,Y)=1:        GOSUB 910:X=A:Y=B:GOSUB 910:IF N$="N" THEN GOSUB 900:N$=" "
230 IF A(A,B)=2 AND B=8 THEN LOCATE 25,31,1:PRINT "WHAT PIECE";:GOSUB 2100:         X=A:Y=B:GOSUB 910:LOCATE 25,31,1:PRINT "              ";
240 IF B5=1 THEN A(A,B-1)=1:X=A:Y=B-1:GOSUB 910:GOTO 100:ELSE GOTO 100
250 LOCATE 1,78,0:PRINT "$ ";:                                                      ON A(X,Y) GOTO 0, 480, 0, 380, 330, 0, 280, 0, 330:GOTO 460
270 ON -A(X,Y) GOTO 0, 530, 0, 380, 330, 0, 280, 0, 330:GOTO 460
280 B=Y:FOR A=X+1 TO 8:GOSUB 640:IF S=0 THEN NEXT ELSE GOTO 290
290 FOR A=X-1 TO 1 STEP -1:GOSUB 640:IF S=0 THEN NEXT ELSE GOTO 300
300 A=X:FOR B=Y+1 TO 8:GOSUB 640:IF S=0 THEN NEXT ELSE GOTO 310
310 FOR B=Y-1 TO 1 STEP -1:GOSUB 640:IF S=0 THEN NEXT:RETURN ELSE RETURN
330 B=Y:FOR A=X+1 TO 8:B=B+1:GOSUB 640:IF S=0 THEN NEXT ELSE GOTO 340
340 B=Y:FOR A=X-1 TO 1 STEP -1:B=B-1:GOSUB 640:IF S=0 THEN NEXT ELSE GOTO 350
350 B=Y:FOR A=X-1 TO 1 STEP -1:B=B+1:GOSUB 640:IF S=0 THEN NEXT ELSE GOTO 360
360 B=Y:FOR A=X+1 TO 8:B=B-1:GOSUB 640: IF S=0 THEN NEXT ELSE GOTO 370
370 IF ABS(A(X,Y))=9 THEN GOTO 280:ELSE RETURN
380 A=X+2:B=Y+1:IF A<9 AND B<9 THEN GOSUB 650 ELSE GOTO 390
390 B=B-2:IF B>0 AND A<9 THEN GOSUB 650 ELSE GOTO 400
400 A=A-4:IF A>0 AND B>0 THEN GOSUB 650 ELSE GOTO 410
410 B=B+2:IF B<9 AND A>0 THEN GOSUB 650 ELSE GOTO 420
420 A=A+1:B=B+1:IF A>0 AND A<9 AND B<9 THEN GOSUB 650 ELSE GOTO 430
430 B=B-4:IF B>0 AND A>0 AND A<9 THEN GOSUB 650 ELSE GOTO 440
440 A=A+2:IF A>0 AND A<9 AND B>0 THEN GOSUB 650 ELSE GOTO 450
450 B=B+4:IF B<9 AND A>0 AND A<9 THEN GOSUB 650:RETURN ELSE RETURN
460 FOR A=X-1 TO X+1:FOR B=Y-1 TO Y+1:IF A(A,B)<>0 THEN GOSUB 650
470 NEXT:NEXT:RETURN
480 A=X:IF Y>2 THEN GOTO 500 ELSE GOTO 490
490 B=Y+1:IF A(A,B)=1 THEN GOSUB 660:B=B+1:IF A(A,B)=1 THEN GOSUB 660:GOTO 510:     ELSE GOTO 510:ELSE GOTO 510
500 B=Y+1:IF A(A,B)=1 THEN GOSUB 660 ELSE GOTO 510
510 A=X+1:B=Y+1:IF A(A,B)<0 THEN GOSUB 660 ELSE GOTO 520
520 A=A-2:IF A(A,B)<0 THEN GOSUB 660:RETURN:ELSE RETURN
530 A=X:IF Y<7 THEN GOTO 550 ELSE GOTO 540
540 B=Y-1:IF A(A,B)=1 THEN GOSUB 660:B=B-1:IF A(A,B)=1 THEN GOSUB 660:GOTO 560:     ELSE GOTO 560:ELSE GOTO 560
550 B=Y-1:IF A(A,B)=1 THEN GOSUB 660 ELSE GOTO 560
560 A=X-1:B=Y-1:IF A(A,B)>1 THEN GOSUB 660 ELSE GOTO 570
570 A=A+2:IF A(A,B)>1 THEN GOSUB 660:RETURN:ELSE GOTO 590
580 T=A(A,B):IF T=-99 THEN B1=T:RETURN:ELSE GOTO 590
590 A5=S:IF ABS(T)<=A(X,Y) THEN A(A,B)=A(X,Y):A(X,Y)=1:GOTO 610:ELSE GOTO 600
600 IF T<B1 THEN B1=T:S=A5:RETURN:ELSE S=A5:RETURN
610 A1=X:A2=Y:A3=A:A4=B:A8=T:A0=2:FOR X=1 TO 8:FOR Y=1 TO 8:                        IF A(X,Y)<0 THEN GOSUB 270:IF T=0 THEN GOTO 630
620 NEXT:NEXT
630 X=A1:Y=A2:A=A3:B=A4:A0=5:A(X,Y)=A(A,B):A(A,B)=A8:GOTO 600
640 S=0:IF A(A,B)=1 THEN GOTO 660 ELSE IF A(A,B)=0 THEN S=1:RETURN:                 ELSE IF SGN(A(A,B))=SGN(A(X,Y)) THEN S=1:RETURN:ELSE S=1:GOTO 660
650 IF A(A,B)=1 THEN GOTO 660 ELSE IF SGN(A(A,B))=SGN(A(X,Y)) THEN RETURN:          ELSE GOTO 660
660 LOCATE 1,78,0:PRINT "  ";:ON A0 GOTO 670, 680, 690, 700, 710:GOTO 720
670 IF A6=A AND A7=B THEN B1=B1+1:RETURN:ELSE RETURN
680 IF A3=A AND A4=B THEN T=0:RETURN:ELSE RETURN
690 IF B4=A AND B9=B THEN D=1:RETURN:ELSE RETURN
700 IF A6=A AND A7=B THEN C=1:RETURN:ELSE RETURN
710 IF A(A,B)<0 THEN GOTO 580 ELSE RETURN
720 B3=S:W=X:M=Y:N=A:H=B:P=A(A,B):A(A,B)=A(X,Y):A(X,Y)=1:B1=0
730 A0=5:FOR X=1 TO 8:FOR Y=1 TO 8:IF A(X,Y)>1 THEN GOSUB 250
740 NEXT:NEXT:X=N:Y=H:A0=1:GOSUB 270:A0=0:S=B3:X=W:Y=M:A=N:B=H:A(X,Y)=A(A,B):       A(A,B)=P
750 B6!=1/(ABS(4.5-A)+ABS(4.5-B)+1):IF A(X,Y)<-2 AND A(X,Y)>-9 THEN                 B6!=B6!+1/(ABS(A6-A)+ABS(A7-B)+5)+RND(0)/15
760 G!=P+B1+B6!:IF P=99 THEN GOSUB 900:                                             LOCATE 25,1,1:PRINT "MATE ";B$;:GOTO 2190
770 IF G!<=F! THEN RETURN
780 F!=G!:E=X:Q=Y:R=A:U=B:RETURN
790 CLS
800 Y=0:FOR J=896 TO 0 STEP -128:Y=Y+1:X=0:FOR K=J TO 42+J STEP 6:X=X+1:            T(X,Y)=K:NEXT:NEXT
810 Y=0:FOR J=960 TO 64 STEP -128:Y=Y+1:X=0:FOR K=J TO 42+J STEP 6:X=X+1:            B(X,Y)=K:NEXT:NEXT
820 DATA -7, -4, -5, -9, -99, -5, -4, -7
830 DATA -2, -2, -2, -2, -2, -2, -2, -2
840 DATA 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1
850 DATA 2, 2, 2, 2, 2, 2, 2, 2
860 DATA 7, 4, 5, 9, 99, 5, 4, 7
870 FOR Y=8 TO 1 STEP -1:FOR X=1 TO 7 STEP 2:S(X,Y)=I:S(X+1,Y)=-I:NEXT:I=-I:NEXT
880 FOR Y=8 TO 1 STEP -1:FOR X=1 TO 8:READ A(X,Y):NEXT:NEXT:RETURN
890 I=-I:A(4,1)=99:A(5,1)=9:A(4,8)=-99:A(5,8)=-9
900 FOR Y=1 TO 8:FOR X=1 TO 8:GOSUB 910:NEXT:NEXT:RETURN
910 IF S(X,Y)>0 THEN GOTO 940
920 ON ABS(A(X,Y)) GOSUB 980, 1040, 0, 1340, 1440, 0, 1540, 0, 1140                   :IF ABS(A(X,Y))=99 THEN GOSUB 1240:RETURN ELSE RETURN
940 ON ABS(A(X,Y)) GOSUB 960, 990, 0, 1290, 1390, 0, 1490, 0, 1090                    :IF ABS(A(X,Y))=99 THEN GOSUB 1190:RETURN ELSE RETURN
960 IF S(X,Y)<0 THEN GOTO 980
970 LOCATE 25-Y*3,X*8+1,0
971 PRINT STRING$(8,CHR$(219));
972 LOCATE 26-Y*3,X*8+1,0
973 PRINT STRING$(8,CHR$(219));
974 LOCATE 27-Y*3,X*8+1,0
975 PRINT STRING$(8,CHR$(219));:RETURN
980 LOCATE 25-Y*3,X*8+1,0
981 PRINT STRING$(8," ");
982 LOCATE 26-Y*3,X*8+1,0
983 PRINT STRING$(8," ");
984 LOCATE 27-Y*3,X*8+1,0
985 PRINT STRING$(8," ");:RETURN
990 IF I*A(X,Y)<0 THEN GOTO 1020
1000 LOCATE 25-Y*3,X*8+1,0
1001 PRINT STRING$(8,CHR$(219));
1010 LOCATE 26-Y*3,X*8+1,0
1011 PRINT STRING$(3,CHR$(219));CHR$(2);STRING$(4,CHR$(219));
1012 LOCATE 27-Y*3,X*8+1,0
1013 PRINT STRING$(8,CHR$(219)):RETURN
1020 LOCATE 25-Y*3,X*8+1,0
1021 PRINT STRING$(8,CHR$(219));
1030 LOCATE 26-Y*3,X*8+1,0
1031 PRINT STRING$(3,CHR$(219));CHR$(1);STRING$(4,CHR$(219));
1032 LOCATE 27-Y*3,X*8+1,0
1033 PRINT STRING$(8,CHR$(219));:RETURN
1040 IF I*A(X,Y)<0 THEN GOTO 1070
1050 LOCATE 25-Y*3,X*8+1,0
1051 PRINT STRING$(8,CHR$(32));
1060 LOCATE 26-Y*3,X*8+1,0
1061 PRINT STRING$(3,CHR$(32));CHR$(2);STRING$(4,CHR$(32));
1062 LOCATE 27-Y*3,X*8+1,0
1063 PRINT STRING$(8,CHR$(32)):RETURN
1070 LOCATE 25-Y*3,X*8+1,0
1071 PRINT STRING$(8,CHR$(32));
1080 LOCATE 26-Y*3,X*8+1,0
1081 PRINT STRING$(3,CHR$(32));CHR$(1);STRING$(4,CHR$(32));
1082 LOCATE 27-Y*3,X*8+1,0
1083 PRINT STRING$(8,CHR$(32));:RETURN
1090 IF I*A(X,Y)<0 THEN GOTO 1120
1100 LOCATE 25-Y*3,X*8+1,0
1101 PRINT STRING$(2,CHR$(219));STRING$(3,CHR$(178));STRING$(3,CHR$(219));
1110 LOCATE 26-Y*3,X*8+1,0
1111 PRINT CHR$(219)+"QUEEN"+CHR$(219);CHR$(219);
1112 LOCATE 27-Y*3,X*8+1,0
1113 PRINT STRING$(2,CHR$(219));STRING$(3,CHR$(178));STRING$(3,CHR$(219));          :RETURN
1120 LOCATE 25-Y*3,X*8+1,0
1121 PRINT STRING$(2,CHR$(219));STRING$(3,CHR$(176));STRING$(3,CHR$(219));
1130 LOCATE 26-Y*3,X*8+1,0
1131 PRINT CHR$(219)+"QUEEN"+CHR$(219);CHR$(219);
1132 LOCATE 27-Y*3,X*8+1,0
1133 PRINT STRING$(2,CHR$(219));STRING$(3,CHR$(176));STRING$(3,CHR$(219));          :RETURN
1140 IF I*A(X,Y)<0 THEN GOTO 1170
1150 LOCATE 25-Y*3,X*8+1,0
1151 PRINT STRING$(2,CHR$(32));STRING$(3,CHR$(178));STRING$(3,CHR$(32));
1160 LOCATE 26-Y*3,X*8+1,0
1161 PRINT CHR$(32)+"QUEEN"+CHR$(32);CHR$(32);
1162 LOCATE 27-Y*3,X*8+1,0
1163 PRINT STRING$(2,CHR$(32));STRING$(3,CHR$(178));STRING$(3,CHR$(32));            :RETURN
1170 LOCATE 25-Y*3,X*8+1,0
1171 PRINT STRING$(2,CHR$(32));STRING$(3,CHR$(176));STRING$(3,CHR$(32));
1180 LOCATE 26-Y*3,X*8+1,0
1181 PRINT CHR$(32)+"QUEEN"+CHR$(32);CHR$(32);
1182 LOCATE 27-Y*3,X*8+1,0
1183 PRINT STRING$(2,CHR$(32));STRING$(3,CHR$(176));STRING$(3,CHR$(32));            :RETURN
1190 IF I*A(X,Y)<0 THEN GOTO 1220
1200 LOCATE 25-Y*3,X*8+1,0
1201 PRINT STRING$(2,CHR$(219));STRING$(4,CHR$(178));STRING$(2,CHR$(219));
1210 LOCATE 26-Y*3,X*8+1,0
1211 PRINT CHR$(219);CHR$(178)+"KING"+CHR$(178);CHR$(219);
1212 LOCATE 27-Y*3,X*8+1,0
1213 PRINT STRING$(2,CHR$(219));STRING$(4,CHR$(178));STRING$(2,CHR$(219));          :RETURN
1220 LOCATE 25-Y*3,X*8+1,0
1221 PRINT STRING$(2,CHR$(219));STRING$(4,CHR$(176));STRING$(2,CHR$(219));
1230 LOCATE 26-Y*3,X*8+1,0
1231 PRINT CHR$(219);CHR$(176)+"KING"+CHR$(176);CHR$(219);
1232 LOCATE 27-Y*3,X*8+1,0
1233 PRINT STRING$(2,CHR$(219));STRING$(4,CHR$(176));STRING$(2,CHR$(219));          :RETURN
1240 IF I*A(X,Y)<0 THEN GOTO 1270
1250 LOCATE 25-Y*3,X*8+1,0
1251 PRINT STRING$(2,CHR$(32));STRING$(4,CHR$(178));STRING$(2,CHR$(32));
1260 LOCATE 26-Y*3,X*8+1,0
1261 PRINT CHR$(32);CHR$(178)+"KING"+CHR$(178);CHR$(32);
1262 LOCATE 27-Y*3,X*8+1,0
1263 PRINT STRING$(2,CHR$(32));STRING$(4,CHR$(178));STRING$(2,CHR$(32));            :RETURN
1270 LOCATE 25-Y*3,X*8+1,0
1271 PRINT STRING$(2,CHR$(32));STRING$(4,CHR$(176));STRING$(2,CHR$(32));
1280 LOCATE 26-Y*3,X*8+1,0
1281 PRINT CHR$(32);CHR$(176)+"KING"+CHR$(176);CHR$(32);
1282 LOCATE 27-Y*3,X*8+1,0
1283 PRINT STRING$(2,CHR$(32));STRING$(4,CHR$(176));STRING$(2,CHR$(32));            :RETURN
1290 IF I*A(X,Y)<0 THEN GOTO 1320
1300 LOCATE 25-Y*3,X*8+1,0
1301 PRINT STRING$(3,CHR$(219));STRING$(2,CHR$(178));STRING$(3,CHR$(219));
1310 LOCATE 26-Y*3,X*8+1,0
1311 PRINT CHR$(219)+"KNIGHT"+CHR$(219);
1312 LOCATE 27-Y*3,X*8+1,0
1313 PRINT STRING$(3,CHR$(219));STRING$(2,CHR$(178));STRING$(3,CHR$(219));          :RETURN
1320 LOCATE 25-Y*3,X*8+1,0
1321 PRINT STRING$(3,CHR$(219));STRING$(2,CHR$(176));STRING$(3,CHR$(219));
1330 LOCATE 26-Y*3,X*8+1,0
1331 PRINT CHR$(219)+"KNIGHT"+CHR$(219);
1332 LOCATE 27-Y*3,X*8+1,0
1333 PRINT STRING$(3,CHR$(219));STRING$(2,CHR$(176));STRING$(3,CHR$(219));          :RETURN
1340 IF I*A(X,Y)<0 THEN GOTO 1370
1350 LOCATE 25-Y*3,X*8+1,0
1351 PRINT STRING$(3,CHR$(32));STRING$(2,CHR$(178));STRING$(3,CHR$(32));
1360 LOCATE 26-Y*3,X*8+1,0
1361 PRINT CHR$(32)+"KNIGHT"+CHR$(32);
1362 LOCATE 27-Y*3,X*8+1,0
1363 PRINT STRING$(3,CHR$(32));STRING$(2,CHR$(178));STRING$(3,CHR$(32));            :RETURN
1370 LOCATE 25-Y*3,X*8+1,0
1371 PRINT STRING$(3,CHR$(32));STRING$(2,CHR$(176));STRING$(3,CHR$(32));
1380 LOCATE 26-Y*3,X*8+1,0
1381 PRINT CHR$(32)+"KNIGHT"+CHR$(32);
1382 LOCATE 27-Y*3,X*8+1,0
1383 PRINT STRING$(3,CHR$(32));STRING$(2,CHR$(176));STRING$(3,CHR$(32));            :RETURN
1390 IF I*A(X,Y)<0 THEN GOTO 1420
1400 LOCATE 25-Y*3,X*8+1,0
1401 PRINT STRING$(3,CHR$(219));STRING$(2,CHR$(178));STRING$(3,CHR$(219));
1410 LOCATE 26-Y*3,X*8+1,0
1411 PRINT CHR$(219)+"BISHOP"+CHR$(219);
1412 LOCATE 27-Y*3,X*8+1,0
1413 PRINT STRING$(3,CHR$(219));STRING$(2,CHR$(178));STRING$(3,CHR$(219));          :RETURN
1420 LOCATE 25-Y*3,X*8+1,0
1421 PRINT STRING$(3,CHR$(219));STRING$(2,CHR$(176));STRING$(3,CHR$(219));
1430 LOCATE 26-Y*3,X*8+1,0
1431 PRINT CHR$(219)+"BISHOP"+CHR$(219);
1432 LOCATE 27-Y*3,X*8+1,0
1433 PRINT STRING$(3,CHR$(219));STRING$(2,CHR$(176));STRING$(3,CHR$(219));          :RETURN
1440 IF I*A(X,Y)<0 THEN GOTO 1470
1450 LOCATE 25-Y*3,X*8+1,0
1451 PRINT STRING$(3,CHR$(32));STRING$(2,CHR$(178));STRING$(3,CHR$(32));
1460 LOCATE 26-Y*3,X*8+1,0
1461 PRINT CHR$(32)+"BISHOP"+CHR$(32);
1462 LOCATE 27-Y*3,X*8+1,0
1463 PRINT STRING$(3,CHR$(32));STRING$(2,CHR$(178));STRING$(3,CHR$(32));            :RETURN
1470 LOCATE 25-Y*3,X*8+1,0
1471 PRINT STRING$(3,CHR$(32));STRING$(2,CHR$(176));STRING$(3,CHR$(32));
1480 LOCATE 26-Y*3,X*8+1,0
1481 PRINT CHR$(32)+"BISHOP"+CHR$(32);
1482 LOCATE 27-Y*3,X*8+1,0
1483 PRINT STRING$(3,CHR$(32));STRING$(2,CHR$(176));STRING$(3,CHR$(32));            :RETURN
1490 IF I*A(X,Y)<0 THEN GOTO 1520
1500 LOCATE 25-Y*3,X*8+1,0
1501 PRINT CHR$(219);CHR$(219);CHR$(178);CHR$(219);CHR$(219);CHR$(178);              CHR$(219);CHR$(219);
1510 LOCATE 26-Y*3,X*8+1,0
1511 PRINT CHR$(219);CHR$(219)+"ROOK"+CHR$(219);CHR$(219);
1512 LOCATE 27-Y*3,X*8+1,0
1513 PRINT STRING$(2,CHR$(219));STRING$(4,CHR$(178));STRING$(2,CHR$(219));          :RETURN
1520 LOCATE 25-Y*3,X*8+1,0
1521 PRINT CHR$(219);CHR$(219);CHR$(176);CHR$(219);CHR$(219);CHR$(176);              CHR$(219);CHR$(219);
1530 LOCATE 26-Y*3,X*8+1,0
1531 PRINT CHR$(219);CHR$(219)+"ROOK"+CHR$(219);CHR$(219);
1532 LOCATE 27-Y*3,X*8+1,0
1533 PRINT STRING$(2,CHR$(219));STRING$(4,CHR$(176));STRING$(2,CHR$(219));          :RETURN
1540 IF I*A(X,Y)<0 THEN GOTO 1570
1550 LOCATE 25-Y*3,X*8+1,0
1551 PRINT CHR$(32);CHR$(32);CHR$(178);CHR$(32);CHR$(32);CHR$(178);                  CHR$(32);CHR$(32);
1560 LOCATE 26-Y*3,X*8+1,0
1561 PRINT CHR$(32);CHR$(32)+"ROOK"+CHR$(32);CHR$(32);
1562 LOCATE 27-Y*3,X*8+1,0
1563 PRINT STRING$(2,CHR$(32));STRING$(4,CHR$(178));STRING$(2,CHR$(32));            :RETURN
1570 LOCATE 25-Y*3,X*8+1,0
1571 PRINT CHR$(32);CHR$(32);CHR$(176);CHR$(32);CHR$(32);CHR$(176);                  CHR$(32);CHR$(32);
1580 LOCATE 26-Y*3,X*8+1,0
1581 PRINT CHR$(32);CHR$(32)+"ROOK"+CHR$(32);CHR$(32);
1582 LOCATE 27-Y*3,X*8+1,0
1583 PRINT STRING$(2,CHR$(32));STRING$(4,CHR$(176));STRING$(2,CHR$(32));            :RETURN
1590 LOCATE 25,31,1:PRINT STRING$(10," ");
1600 X$=INKEY$:IF X$="N" THEN N$=X$
1610 IF X$>="A" AND X$<="H" THEN X=VAL(CHR$(ASC(X$)-16)):GOTO 1730
1620 IF X$="N" THEN GOSUB 2030
1630 IF X$="K" AND A(5,1)=99 AND A(8,1)=7 THEN A(5,1)=1:A(8,1)=1:A(7,1)=99          :A(6,1)=7:GOTO 1800
1640 IF X$="Q" AND A(5,1)=99 AND A(1,1)=7 THEN A(5,1)=1:A(1,1)=1:A(3,1)=99          :A(4,1)=7:GOTO 1800
1650 IF X$="K" AND A(4,1)=99 AND A(1,1)=7 THEN A(4,1)=1:A(1,1)=1:A(2,1)=99          :A(3,1)=7:GOTO 1800
1660 IF X$="Q" AND A(4,1)=99 AND A(8,1)=7 THEN A(4,1)=1:A(8,1)=1:A(6,1)=99          :A(5,1)=7:GOTO 1800
1670 IF X$="X" THEN GOSUB 1830:LOCATE 25,1,0:PRINT "EXCHANGING         ";           :GOSUB 2480:IF CL$="Y" THEN LOCATE 25,50,0:PRINT "START ";TIME$;:GOTO 100       :ELSE:GOTO 100
1680 IF X$="S" THEN GOTO 1820
1690 IF X$="M" THEN GOSUB 1840
1700 IF X$="I" THEN GOSUB 2220:CLS:GOSUB 900:LOCATE 25,1,1                          :PRINT "MOVE "+CHR$(7);B$;
1710 IF X$="L" THEN GOSUB 2040
1720 GOTO 1600
1730 LOCATE 25,21,1:PRINT X$;:LOCATE 25,31,1:PRINT "            ";
1740 Y=VAL(INKEY$):IF Y=0 THEN GOTO 1740
1750 LOCATE 25,22,1:PRINT Y;:LOCATE 25,25,1:PRINT "-";
1760 IF A(X,Y)<2 OR A(X,Y)>99 THEN LOCATE 25,31,1:PRINT "ENTRY ERROR ";             :GOTO 1590
1770 A$=INKEY$:IF A$<"A" OR A$>"H" THEN GOTO 1770 ELSE A=VAL(CHR$(ASC(A$)-16))
1780 LOCATE 25,27,1:PRINT A$;
1790 B=VAL(INKEY$):IF B=0 THEN GOTO 1790 ELSE LOCATE 25,28,1:PRINT B;
1800 IF X$="K" OR X$="Q" THEN LOCATE 25,20,1:PRINT "CSTL. ";X$;"-SIDE";             :GOSUB 1830 ELSE GOSUB 1830
1810 IF CL$="Y" THEN LOCATE 25,50,0:PRINT "START ";TIME$;
1820 RETURN
1830 LOCATE 25,1,1:PRINT STRING$(79," ");:RETURN
1840 GOSUB 1830:LOCATE 25,1,1:PRINT "MODIFYING          ";
1850 GOSUB 2010:IF M$<"A" OR M$>"H" THEN GOTO 1850
1860 X=VAL(CHR$(ASC(M$)-16)):LOCATE 25,21,1:PRINT M$;
1870 M$=INKEY$:IF M$<"1" OR M$>"8" THEN GOTO 1870
1880 Y=VAL(M$):LOCATE 25,23,1:PRINT M$;" = ";
1890 M$=INKEY$:IF M$="C" OR M$="P" OR M$="E" THEN S1$=M$:LOCATE 25,27,1             :PRINT M$;:ELSE GOTO 1890
1900 M$=INKEY$:IF M$="S" OR M$="P" OR M$="N" OR M$="B" OR M$="R" OR M$="Q" OR        M$="K" THEN V$=M$:LOCATE 25,29,1:PRINT M$; ELSE GOTO 1900
1910 IF V$="P" THEN V1=2
1920 IF V$="N" THEN V1=4
1930 IF V$="B" THEN V1=5
1940 IF V$="R" THEN V1=7
1950 IF V$="Q" THEN V1=9
1960 IF V$="K" THEN V1=99
1970 IF V$="S" THEN V1=1
1980 IF S1$="C" AND V1<>1 THEN V1=-V1
1990 A(X,Y)=V1:IF S1$="E" THEN A(X,Y)=1
2000 GOSUB 910:GOTO 1840
2010 M$=INKEY$:IF M$="N" THEN GOSUB 2030:GOTO 2010:ELSE IF M$="Z" THEN               GOSUB 1830:LOCATE 25,20,1:PRINT "         ";:GOSUB 900:ELSE RETURN
2020 IF CL$="Y" THEN LOCATE 25,51,0:PRINT "START ";TIME$;:GOTO 100 ELSE GOTO 100
2030 FOR J=1 TO 8:FOR K=1 TO 8:K$=STR$(K)
2031 LOCATE 27-K*3,J*8+1,0
2032 PRINT CHR$(J+64);RIGHT$(K$,1);:NEXT:NEXT:RETURN
2040 GOSUB 1830:LOCATE 25,20,1:PRINT "LEVEL=";B8!;:PRINT "CHANGE LEVELS?";
2050 C$=INKEY$:IF C$="N" THEN GOTO 2090 ELSE IF C$="Y" THEN LOCATE 25,27,1          :PRINT "       ";:GOSUB 1830:ELSE GOTO 2050
2060 L1$=INKEY$:IF L1$="" THEN GOTO 2060 ELSE IF L1$>="0" AND L1$<="9" THEN          LOCATE 25,27,1:PRINT L1$;:ELSE GOTO 2060
2070 L2$=INKEY$:IF L2$="" THEN GOTO 2070 ELSE IF L2$<"0" OR L2$>"9" THEN L2$=L1$    :L1$="0"
2080 B8!=VAL(L1$)*10+VAL(L2$):B7!=B8!/2:LOCATE 25,27,0:PRINT L1$;L2$;
2090 GOSUB 1830:LOCATE 25,20,0:PRINT "              ";:LOCATE 25,1,1                :PRINT "MOVE ";B$;:RETURN
2100 REM *** PROMOTION ROUTINE ***
2110 LOCATE 2,1,1:PRINT "P, N, B, R, Q ";
2120 Z$=INKEY$:IF Z$="P" THEN A(A,B)=2:GOTO 2180
2130 IF Z$="N" THEN A(A,B)=4:GOTO 2180
2140 IF Z$="B" THEN A(A,B)=5:GOTO 2180
2150 IF Z$="R" THEN A(A,B)=7:GOTO 2180
2160 IF Z$="Q" THEN A(A,B)=9:GOTO 2180
2170 GOTO 2120
2180 RETURN
2190 IF CL$="Y" THEN LOCATE 25,61,1:PRINT "STOP ";TIME$;
2200 LOCATE 25,1,1:PRINT "HIT (P) TO PLAY OR HIT (B) FOR BASIC";
2210 A$=INKEY$:IF A$="" THEN GOTO 2210 ELSE IF A$="B" THEN CLS:END                   ELSE IF A$="P" THEN RUN ELSE GOTO 2210
2220 CLS
2221 PRINT "1. USE LIST TO INSURE LOADED RIGHT, THE LAST LINE IS 65529 "
2230 PRINT "2. ALSE NOTE MEMORY SIZE AS A DOUBLE CHECK "
2240 PRINT "3. SPECIAL COMMANDS DURING PLAYER'S MOVE ARE:"
2250 PRINT "   TYPE 'N' - TO NUMBER THE BOARD "
2260 PRINT "        'K' - TO CASTLE KING SIDE "
2270 PRINT "        'Q' - TO CASTLE QUEEN SIDE "
2280 PRINT "        'X' - TO EXCHANGE PIECES AND LET COMPUTER MOVE"
2290 PRINT "        'S' - TO LET THE COMPUTER PLAY BY ITSELF "
2300 PRINT "        'M' - TO MODIFY THE BOARD, ENTER THE SQUARE FOLLOWED BY"
2310 PRINT "                 C, P, OR E  FOR COMPUTER, PLAYER, OR EMPTY"
2320 PRINT "                 AND S,P,N,B,R,Q,K  FOR SQUARE,PAWN, ETC..."
2330 PRINT "        'Z' - TO ESCAPE MODIFY AND LET COMPUTER MOVE"
2340 PRINT "        'I' - TO GET INSTRUCTIONS AGAIN"
2350 PRINT "        'L' - TO LOOK AT OR CHANGE LEVEL OF PLAY"
2360 REM ********************************************************************
2370 INPUT "HIT ENTER TO CONTINUE";EN$:PRINT
2380 PRINT "4. TO PROMOTE TO P,N,B,R,Q ENTER THE LETTER WHEN PROMOTED"
2390 PRINT "5. TO CAPTURE 'EN PASSANT' SPECIFY THE 'FROM' - 'TO' SQUARES"
2400 PRINT "6. LEVELS OF PLAY ARE FROM 01 TO 24"
2410 PRINT "7. COMPUTER ASSUMES MATE IF KING IS LEFT IN CHECK SO BE SURE TO "
2411 PRINT "    WATCH FOR CHECK MESSAGE"
2420 PRINT "8. IF A MOVE IS ILLEGAL OR AN ENTRY ERROR IS MADE SIMPLY TYPE IN"
2421 PRINT "    A NEW MOVE.  A MOVE MAY BE STARTED OVER BY FORCING AN ERROR. (E.G. '9')."
2430 PRINT "9. IF <BREAK> IS HIT DURING THE GAME, TYPE 'GOSUB 900:CONT' TO"
2435 PRINT "    DRAW BOARD AND CONTINUE"
2440 PRINT "10. YOU HAVE A CHOICE OF BLACK OR WHITE, THE COMPUTER WILL ALWAYS"
2441 PRINT "     BE AT THE TOP OF THE SCREEN"
2450 PRINT:PRINT:INPUT "HIT ENTER TO CONTINUE GAME";EN$
2460 RETURN
2480 I=-I:GOSUB 2490:GOSUB 900:RETURN
2490 L=0:FOR J=1 TO 8:FOR K=1 TO 8:L=L+1:IF A(J,K)<>1 THEN C(L)=-A(J,K)             :ELSE C(L)=A(J,K)
2500 NEXT:NEXT
2510 L=65:FOR J=1 TO 8: FOR K=1 TO 8:L=L-1:A(J,K)=C(L):NEXT:NEXT
2520 RETURN
65529 END
```

## CHIEF.BAS

```bas
10 PRINT " I AM CHIEF NUMBER FRIEK, THE GREAT INDIAN MATH GOD."
20 PRINT "ARE YOU READY TO TAKE THE TEST YOU CALLED ME OUT FOR";
30 INPUT A$
40 IF LEFT$ (A$,1)="Y" THEN 60
50 PRINT "SHUT UP PALEFACE WITH WISE TONGUE."
60 PRINT " TAKE A NUMBER AND ADD 3. DIVIDE THIS NUMBER BY 5 AND"
70 PRINT "MULTIPLY BY 8. DIVIDE BY 5 AND ADD THE SAME. SUBTRACT 1."
80 PRINT "WHAT DO YOU HAVE";
90 INPUT B
100 C=(B+1-5)*5/8*5-3
110 PRINT "I BET YOUR NUMBER WAS ";C;" WAS I RIGHT";
120 INPUT D$
130 IF LEFT$ (D$,1)="Y" THEN 510
140 PRINT "WHAT WAS YOUR ORIGINAL NUMBER";
150 INPUT K
160 F=K+3
165 G=F/5
170 H=G*8
180 I=H/5+5
190 J=I-1
200 PRINT "SO YOU THINK YOUR SO SMART, EH?"
210 PRINT "NOW WATCH...."
220 PRINT K;"+3=";F;". THIS DIVIDED BY 5 =";G;","
230 PRINT "THIS * 8 =";H;". IF WE DIVIDE BY 5 AND ADD THE SAME,"
240 PRINT "WE GET ";I;". -1 = ";J;"."
250 PRINT "NOW DO YOU BELIEVE ME"; : INPUT Z$
260 IF LEFT$(Z$,1)="Y" THEN 510
295 PRINT "YOU HAVE MADE ME MAD!!!"
300 PRINT "THERE MUST BE A GREAT LIGHTNING BOLT!"
310 PRINT : PRINT
320 FOR X = 30 TO 22 STEP -1
340 PRINT TAB(X); "X X"
350 NEXT X
360 PRINT TAB(21);"X XXX"
370 PRINT TAB(20);"X   X"
380 PRINT TAB(19);"XX XXX"
390 FOR Y = 20 TO 13 STEP -1
400 PRINT TAB(Y);"X X"
410 NEXT Y
420 PRINT TAB(12);"XX"
430 PRINT TAB(11);"X"
440 PRINT TAB(10);"*"
450 PRINT
460 PRINT "################################" : PRINT
470 PRINT "I HOPE YOU BELIEVE ME NOW FOR YOUR SAKE!!!"
480 GOTO 520
510 PRINT "BYE"
520 END
```

## DECIDE.BAS

```bas
100 CLS
110 A$=STRING$(80,205)
120 PRINT A$
130 PRINT TAB(34)"DECIDE #2001"
140 COLOR 23
150 PRINT :PRINT :PRINT TAB(39)"IPCO"
160 COLOR 7
170 PRINT :PRINT :PRINT TAB(25)"PERSONAL COMPUTER OWNERS GROUP"
180 PRINT :PRINT :PRINT TAB(19)"p.o. box 10426, pittsburgh, pennsylvania 15234"
190 PRINT A$
200 PRINT :PRINT :PRINT :PRINT
210 PRINT TAB(28)"PRESS ANY KEY TO CONTINUE"
220 A$=INKEY$:IF A$="" THEN 220
250 CLEAR 500
260 MD=10
270 DIM L$(MD),F$(MD),V(MD),C(MD,MD),D(MD),Z(MD)
280 E$="END"
290 GOSUB 1530
300 PRINT "I CAN HELP YOU MAKE A DECISION.  ALL I NEED TO DO IS ASK SOME QUESTIONS AND THENANALYZE THE INFORMATION YOU GIVE."
310 PRINT:PRINT TAB(10) STRING$(60,205):PRINT
320 PRINT "WHICH OF THESE BEST DESCRIBES THE TYPE OF DECISION FACING YOU?"
330 PRINT :PRINT "  1) CHOOSING AN ITEM FROM VARIOUS ALTERNATIVES."
340 PRINT "  2) CHOOSING A COURSE OF ACTION FROM VARIOUS ALTERNATIVES."
350 PRINT "  3) MAKING A `YES' OR `NO' DECISION."
360 PRINT :PRINT"WHICH ONE (1,2, OR 3)?":
370 R$=INKEY$:IF R$="" THEN 370
380 T=VAL(R$):IF T<1 OR T>3 THEN 370
390 PRINT  T:GOSUB 1530
400 FOR J=1 TO 9:R$=INKEY$:NEXT:ON T GOTO 410,430,440
410 PRINT"WHAT TYPE OF ITEM MUST YOU DECIDE UPON?"
420 INPUT T$:GOTO 470
430 T$="COURSE OF ACTION":GOTO 470
440 T$="'YES' OR 'NO'"
450 NI=2:L$(1)="DECIDING YES":L$(2)="DECIDING NO"
460 GOTO  690
470 GOSUB 1530:NI=0
480 PRINT"I NEED TO HAVE A LIST OF EACH ";T$;" UNDER CONSIDERATION.":PRINT
500 PRINT"INPUT THEM ONE AT A TIME IN RESPONSE TO EACH QUESTION MARK.  THE ORDER IN WHICH   YOU INPUT THEM HAS NO SPECIAL SIGNIFICANCE."
520 PRINT :PRINT"TYPE THE WORD `";E$;"' TO INDICATE THAT THE WHOLE LIST HAS BEEN ENTERED.":PRINT
530 IF NI>=MD THEN PRINT "--LIST FULL--":GOTO  570
540 NI=NI+1:INPUT L$(NI)
550 IF L$(NI)<>E$ THEN 530
560 NI=NI-1
570 IF NI>=2 THEN 600
580 PRINT :PRINT"YOU MUST HAVE AT LEAST 2 CHOICES!":PRINT
590 PRINT"TRY AGAIN":GOSUB 1550:GOTO 470
600 GOSUB 1530:PRINT"O.K. HERE'S THE LIST YOU'VE GIVEN ME:":PRINT
610 FOR J=1 TO NI:PRINT"  ";J;CHR$(24);") ";L$(J):NEXT:PRINT
620 FOR J=1 TO 9:R$=INKEY$:NEXT:PRINT"IS THIS LIST CORRECT (Y OR N) ?";
630 R$=INKEY$:IF R$="" THEN 630
640 IF R$="Y" THEN PRINT "YES":GOTO 690
650 IF R$="N" THEN PRINT"NO"
660 IF R$="N" THEN PRINT:PRINT"THE LIST MUST BE RE-ENTERED"
670 IF R$="N" THEN GOSUB 1550:GOSUB 470
680 GOTO 630
690 GOSUB 1530:FOR J=1 TO 9:R$=INKEY$:NEXT
700 PRINT"NOW, THINK OF THE DIFFERENT FACTORS ";
710 IF T<3 THEN PRINT"THAT ARE IMPORTANT TO YOU IN CHOOSING THE BEST ";T$;"."
730 IF T=3 THEN PRINT" THAT ARE IMPORTANT TO YOU IN DECIDING ";T$;"."
740 PRINT :PRINT"INPUT THEM ONE AT A TIME IN RESPONSE TO EACH QUESTION MARK.":PRINT
750 PRINT"TYPE THE WORD`";E$;"' TO TERMINATE THE LIST."
760 PRINT :NF=0
770 IF NF>=MD THEN PRINT"--LIST FULL --":PRINT:GOTO 810
780 NF=NF+1:INPUT F$(NF)
790 IF F$(NF)<>E$ THEN 770
800 NF=NF-1:PRINT
810 IF NF<1 THEN PRINT"YOU MUST HAVE AT LEAST ONE ! REDO IT"
820 IF NF<1 THEN GOSUB 1550:GOTO 690
830 GOSUB 1530: PRINT"HERE'S THE LIST OF FACTORS YOU GAVE ME:":PRINT
840 FOR J=1 TO NF:PRINT "  ";J;CHR$(24);") ";F$(J):NEXT:PRINT
850 PRINT"DECIDE WHICH FACTOR ON THE LIST IS THE MOST IMPORTANT AND INPUT IT'S NUMBER.     (TYPE 0 IF THE LIST NEEDS TO BE CHANGED."
870 PRINT
880 INPUT A:A=INT(A):IF A=0 THEN 690
890 IF A>NF OR A<0 THEN 830
900 GOSUB 1530:IF NF=1 THEN 1020
910 PRINT"NOW LET'S SUPPOSE WE HAVE A SCALE OF IMPORTANCE RANGING FROM 0 TO 10."
930 PRINT:PRINT"  WE'LL GIVE ";F$(A);" A VALUE OF 10 SINCE ";F$(A)
950 PRINT" WAS RATED THE MOST IMPORTANT.":PRINT
960 PRINT"ON THIS SCALE, WHAT VALUE OF IMPORTANCE WOULD THE OTHER FACTORS HAVE?"
980 FOR J=1 TO NF:IF J=A THEN 1010
990 PRINT:PRINT F$(J):INPUT THE (J)
1000 IF V(J)<0 OR V(J)>10 THEN
1010 NEXT
1020 V(A)=10:Q=O:FOR J=1 TO NF:Q=Q+V(J):NEXT:FOR J=1 TO NF
1030 V(J)=V(J)/Q:NEXT:GOSUB 1530
1040 IF T<>3 THEN PRINT"EACH ";T$;
1050 IF T=3 THEN PRINT"DECIDING `YES' OR DECIDING `NO' ";
1060 PRINT " MUST NOW BE COMPAIRED WITH RESPECT TO EACH IMPORTANCE FACTOR."
1080 PRINT "WE'LL CONSIDER EACH FACTOR SEPARATELY AND THEN RATE";
1090 IF T<>3 THEN PRINT" EACH ";T$" IN TERMS";
1100 IF T=3 THEN PRINT"DECIDING `YES' OR DECIDING `NO' IN TERMS ";
1110 PRINT " OF THAT FACTOR ONLY.":PRINT
1120 PRINT "LET'S GIVE ";L$(1);" A VALUE OF 10 ON EVERY SCALE.  THE OTHER ";T$;" UNDER CONSIDERATION WILL BE ASSIGNED A VALUE HIGHER OR LOWER THAN 10."
1150 PRINT " THIS VALUE DEPENDS ON HOW MUCH YOU THINK IT IS BETTER OR WORSE THAN ";L$(1);"."
1180 PRINT " ********* (HIT ANY KEY TO CONTINUE)"
1190 R$=INKEY$:IF R$="" THEN 1190
1200 FOR J=1 TO NF
1210 PRINT  TAB(8);STRING$(25,"-")
1220 PRINT "CONSIDERING ONLY ";F$(J);" AND ASSIGNING 10 TO ";L$(1);" ;"
1240 PRINT "WHAT VALUE WOULD YOU ASSIGN TO ";
1250 FOR K=2 TO NI
1260 PRINT L$(K);:INPUT C(K,J):IF C(K,J)>=0 THEN 1280
1270 PRINT "  -- NEGATIVE VALUES NOT LEGAL --":GOTO 1260
1280 NEXT:PRINT:C(1,J)=10:NEXT
1290 FOR J=1 TO NF:Q=0:FOR K=1 TO NI
1300 Q=Q+C(K,J):NEXT:FOR K=1 TO NI
1310 C(K,J)=C(K,J)/Q:NEXT:NEXT
1320 FOR K=1 TO NI:D(K)=0:FOR J=1 TO NF
1330 D(K)=D(K)+C(K,J)*V(J):NEXT:NEXT
1340 MX=0:FOR K=1 TO NI
1350 IF D(K)>MX THEN MX=D(K)
1360 NEXT:FOR K=1 TO NI:D(K)=D(K)*100/MX:NEXT
1370 FOR K=1 TO NI:Z(K)=K:NEXT:NM=NI-1
1380 FOR K=1 TO NI:FOR J=1 TO NM:N1=Z(J):N2=Z(J+1): IF D(N1)>D(N2) THEN 1400
1390 Z(J+1)=N1:Z(J)=N2
1400 NEXT:NEXT:J1=Z(1):J2=Z(2):DF=D(J1)-D(J2):GOSUB 1530
1410 PRINT L$(J1);
1420 PRINT" COMES OUT BEST";
1430 IF DF<5 THEN PRINT " BUT IT'S VERY CLOSE.":GOTO 1470
1440 IF DF<10 THEN PRINT" BUT IT'S FAIRLY CLOSE.":GOTO 1470
1450 IF DF<20 THEN PRINT" BY A FAIR AMOUNT.":GOTO 1470
1460 PRINT" QUITE DECISIVELY."
1470 PRINT TAB(16)"******* HERE IS THE FINAL LIST IN ORDER ********"
1480 PRINT L$(J1);" HAS BEEN GIVEN A VALUE OF 100 AND THE OTHERS RATED ACCORDINGLY."
1500 PRINT TAB(10) STRING$(60,205)
1510 FOR J=1 TO NI:Q=Z(J):PRINT D(Q),L$(Q):NEXT
1520 END
1530 FOR J=1 TO 400:NEXT
1540 CLS:PRINT TAB(26);"DECIDE":PRINT:RETURN
1550 FOR J=1 TO 1500:NEXT:RETURN
```

## DESERT.BAS

```bas
100 CLS
110 A$=STRING$(80,205)
120 PRINT A$
130 PRINT TAB(33)"DESERT  #2004"
140 COLOR 23,0,0
150 PRINT :PRINT :PRINT TAB(39)"IPCO"
160 COLOR 7,0,0
170 PRINT :PRINT :PRINT TAB(25)"PERSONAL COMPUTER OWNERS GROUP"
180 PRINT :PRINT :PRINT TAB(19)"p.o. box 10426, pittsburgh, pennsylvania 15234"
190 PRINT A$
200 PRINT :PRINT :PRINT :PRINT :PRINT
210 PRINT TAB(28)"PRESS ANY KEY TO CONTINUE"
220 A$=INKEY$:IF A$="" THEN 220
230 CLS
240 KEY 1," DRINK "
250 KEY 2," MOD "
260 KEY 3," FAST "
270 KEY 4," STOP "
280 KEY 5," STATUS? "
290 KEY 6," HOPE "
300 KEY 7,""
310 KEY 8,""
320 KEY 9,""
330 KEY 10,""
340 REM  ***  DESERT PROGRAM ***
350 REM TRANSLATED BY IPCO 2/82
360 CLS
370 PRINT TAB(35)"DESERT"
380 PRINT TAB(35)"******"
390 PRINT
400 PRINT TAB(29)"IBM BASICA FOR THE PC"
410 PRINT
420 PRINT
430 Y$=STRING$(80,205)
440 PRINT Y$
450 PRINT
460 PRINT
470 PRINT
480 FOR DELAY=1 TO 1000
490 NEXT DELAY
500 PRINT
510 PRINT "ENTER YOUR LAST NAME.";
520 INPUT L$
530 CLS
540 PRINT "WOULD YOU LIKE INSTRUCTIONS (Y OR N)";
550 INPUT D$
560 IF D$="N" THEN 870
570 CLS
580 PRINT
590 PRINT
600 PRINT  "WELCOME  TO  DESERT.  THE  OBJECT  IS  TO TRAVEL 40 MILES ACROSS THE GREAT GOBI" :PRINT
610 PRINT "DESERT. A TRIBE OF KNOCKED KNEED PIGMIES WILL BE CHASING YOU.  YOU WILL BE ASKED"
620 PRINT "FOR COMMANDS EVERY SO OFTEN..."
630 PRINT
640 PRINT
650 PRINT "   C O M M A N D S :"
660 PRINT "   ==============="
670 PRINT
680 PRINT "   #1 DRINK FROM YOUR CANTEEN"
690 PRINT "   #2 AHEAD MODERATE SPEED"
700 PRINT "   #3 AHEAD FULL SPEED"
710 PRINT "   #4 STOP FOR THE NIGHT"
720 PRINT "   #5 STATUS CHECK"
730 PRINT "   #6 HOPE FOR HELP"
740 PRINT
750 PRINT
760 PRINT "PRESS ANY KEY TO CONTINUE"
770 A$=INKEY$:IF A$="" THEN 770
780 CLS
790 PRINT
800 PRINT "YOU HAVE ONE QUART OF WATER WHICH WILL LAST YOU SIX DRINKS.":PRINT
810 PRINT "YOUR MAY RENEW YOUR WATER SUPPLY COMPLETELY AT AN OASIS.":PRINT
820 PRINT "YOU GET A HALF A QUART IF FOUND BY HELP.":PRINT
830 PRINT "IF HELP DOES NOT FIND YOU AFTER COMMAND SIX, YOU LOSE.":PRINT
840 PRINT "BE WARY OF COMMAND #3 USE IT ONLY WHEN YOUR CAMEL IS FRESH AND RESTED.":PRINT
850 PRINT
860 PRINT
870 PRINT :PRINT "GOOD LUCK AND GOOD CAMELING!":PRINT :PRINT
880 PRINT "PRESS ANY KEY TO CONTINUE"
890 A$=INKEY$:IF A$="" THEN 890
900 PRINT:CLS
910 PRINT "YOU ARE IN THE MIDDLE OF THE DESERT AT AN OASIS."
920 PRINT
930 GOSUB 2610
940 IF C>39 THEN 2030
950 Z=Z-1
960 IF Z=1 THEN 970 ELSE 1040
970 CLS
980 PRINT
990 PRINT "---------WARNING-----------GET A DRINK----------------"
1000 PRINT
1010 FOR DELAY=1 TO 2000
1020 NEXT DELAY
1030 CLS
1040 IF Z<0 THEN 2520
1050 P=P+1
1060 X2=INT(10*RND)+2.5
1070 IF Q>0 THEN 1690
1080 IF P<4 THEN 1210
1090 C1=C1+X2
1100 IF C1<C THEN 1200
1110 CLS
1120 PRINT "===================================="
1130 PRINT "THE PYGMIES HAVE CAPTURED":PRINT
1140 PRINT "YOU--CAMEL AND PEOPLE SOUP":PRINT
1150 PRINT "IS THEIR FAVORITE DISH!!!":PRINT
1160 FOR DELAY=1 TO 3500
1170 NEXT DELAY
1180 CLS
1190 GOTO 2440
1200 PRINT "THE PYGMIES ARE";C-C1;" MILES BEHIND YOU.":PRINT
1210 PRINT :PRINT "YOU HAVE TRAVELLED ";C;" MILES ALL TOGETHER.":PRINT
1220 PRINT :PRINT "WHAT IS YOUR COMMAND, CAMELEER ";L$;"";
1230 PRINT Y$
1240 INPUT Y
1250 ON Y GOTO 1540,1320,1390,1480,1510,1260
1260 T=INT(10*RND)
1270 IF T<>1 THEN 2020
1280 PRINT:PRINT "HELP HAS FOUND YOU IN A STATE OF UNCONSCIOUSNESS."
1290 S=3
1300 Z=4
1310 GOTO 940
1320 F=F+1
1330 IF F=8 THEN 2000
1340 GOSUB 1590
1350 X1=INT(10*RND)
1360 C=C+X1
1370 PRINT:PRINT "YOUR CAMEL LIKES THIS PLACE."
1380 GOTO 940
1390 F=F+3
1400 IF F>7 THEN 2000
1410 GOSUB 1590
1420 X1=2*INT(10*RND)
1430 C=C+X1
1440 PRINT
1450 PRINT:PRINT  "YOUR CAMEL IS BURNING ACROSS THE DESERT SANDS."
1460 PRINT
1470 GOTO 940
1480 PRINT:PRINT "YOUR CAMEL THANKS YOU!"
1490 F=0
1500 GOTO 950
1510 PRINT:PRINT "YOUR CAMEL HAS";7-F;"GOOD DAYS LEFT."
1520 PRINT :PRINT "YOU HAVE ";S;" DRINKS LEFT IN YOUR CANTEEN "
1530 PRINT :PRINT "YOU CAN GO ";Z;" COMMANDS WITHOUT DRINKING."
1540 S=S-1
1550 IF S<0 THEN 2020
1560 PRINT :PRINT "BETTER WATCH FOR AN OASIS !"
1570 Z=4
1580 GOTO 1220
1590 A=INT(100*RND)
1600 IF A>5 THEN 1940
1610 PRINT "WILD BERBERS HIDDEN IN THE SAND HAVE CAPTURED YOU."
1620 PRINT :PRINT "LUCKILY THE LOCAL SHEIK HAS AGREED TO THEIR RANSOME "
1630 PRINT :PRINT "DEMANDS....BUT....WATCH OUT FOR THE PYGMIES!!!!"
1640 PRINT
1650 PRINT "YOU HAVE A NEW CHOICE OF SUB-COMMANDS:"
1660 KEY 7," ESCAPE"
1670 PRINT
1680 KEY 8," WAIT "
1690 PRINT " #7 ATTEMPT TO ESCAPE"
1700 PRINT " #8 WAIT FOR PAYMENT"
1710 PRINT
1720 PRINT "YOUR SUB-COMMAND ";
1730 INPUT X
1740 IF X=8 THEN 1820
1750 X1=INT(10*RND)
1760 IF X1<5 THEN 1800
1770 PRINT :PRINT "CONGRATULATIONS, YOU ESCAPED SUCCESSFULLY !!!!!"
1780 Q=0
1790 GOTO 940
1800 PRINT :PRINT "YOU ARE MORTALLY WOUNDED BY A PIG STABBER WHILE ESCAPING!!!!"
1810 GOTO 2260
1820 X1=INT(100*RND)
1830 REM
1840 IF X1>24 THEN 1900
1850 PRINT :PRINT "YOUR RANSOME HAS BEEN PAID AND YOU ARE FREE TO GO."
1860 FOR DELAY=1 TO 4000
1870 NEXT DELAY
1880 Q=0
1890 GOTO 940
1900 PRINT "THE LOCAL SULTAN IS COLLECTING... JUST WAIT..."
1910 FOR DELAY=1 TO 4000
1920 NEXT DELAY
1930 GOTO 940
1940 A=INT(10*RND)
1950 IF A>2 THEN 2100
1960 PRINT :PRINT "YOU HAVE ARRIVED AT AN OASIS, YOUR CAMEL IS FILLING YOUR CANTEEN AND EATING FIGS"
1970 Z=4
1980 S=6
1990 RETURN
2000 PRINT :PRINT "YOU DIRTY RAPSCALLION !!!"
2010 PRINT :PRINT "YOU RAN YOUR POOR CAMEL TO DEATH !!!!!"
2020 GOTO 2260
2030 CLS
2040 PRINT Y$
2050 X$=STRING$(80,2)
2060 PRINT X$
2070 PRINT "YOU WIN!  A PARTY IS BEING GIVEN IN YOUR HONOR........."
2080 PRINT :PRINT "...THE PYGMIES ARE PLANNING TO ATTEND......."
2090 GOTO 2440
2100 X1=INT(100*RND)
2110 IF X1>5 THEN 2210
2120 PRINT :PRINT "YOU HAVE BEEN CAUGHT IN A SANDSTORM...... GOOD LUCK !!!"
2130 X5=INT(10*RND)
2140 X6=INT(10*RND)
2150 IF X6<5 THEN 2180
2160 C=C+X5
2170 GOTO 2190
2180 C=C-X5
2190 PRINT :PRINT "YOUR NEW POSITION IS ";C;" MILES SO FAR!"
2200 RETURN
2210 X1=INT(100*RND)
2220 IF X1>5 THEN 1250
2230 C1=C1+1
2240 PRINT :PRINT "YOUR CAMEL HAS HURT HIS HUMP LUCKILY THE PYGMIES WERE FOOTWEARY !!!!"
2250 RETURN
2260 U=INT(10*RND)
2270 PRINT :PRINT "YOU DIED IN THE DESERT."
2280 FOR DELAY=1 TO 4000
2290 NEXT DELAY
2300 PRINT
2310 IF U>1 THEN 2340
2320 PRINT "THE NATIONAL CAMEL'S UNION IS NOT ATTENDING YOUR FUNERAL !!!"
2330 GOTO 2440
2340 IF U>3 THEN 2370
2350 PRINT :PRINT "YOUR BODY WAS EATEN BY VULTURES AND IMPORTED CANNIBALS !!!!"
2360 GOTO 2440
2370 IF U>5 THEN 2400
2380 PRINT :PRINT "THE LOCAL SHEIK NOW USES YOUR SKULL FOR A CHANGE PURSE !!!!"
2390 GOTO 2440
2400 IF U>7 THEN 2430
2410 PRINT :PRINT "PEOPLE WITH LITTLE INTELLIGENCE SHOULD STAY OUT OF THE DESERT!!!!"
2420 GOTO 2440
2430 PRINT :PRINT "TURKEYS SHOULD FLY, NOT RIDE CAMELS !!!"
2440 PRINT
2450 FOR DELAY=1 TO 4000
2460 NEXT DELAY
2470 PRINT
2480 PRINT "WANT A NEW CAMEL AND A NEW GAME (Y OR N)";
2490 INPUT D$
2500 IF D$="Y" THEN 850
2510 GOTO 2540
2520 PRINT :PRINT "YOU RAN OUT OF WATER........SORRY CHUM!!!!!"
2530 GOTO 2260
2540 CLS
2550 PRINT Y$
2560 PRINT X$
2570 PRINT TAB(37)"CHICKEN"
2580 PRINT X$
2590 PRINT Y$
2600 END
2610 Z=4
2620 S=6
2630 C=0
2640 C1=0
2650 Q=0
2660 F=0
2670 P=0
2680 RETURN
```

## GOLF.BAS

```bas
100 CLS
110 A$=STRING$(80,205)
120 PRINT A$
130 PRINT TAB(36)"GOLF 2006"
140 COLOR 23,0,0
150 PRINT :PRINT :PRINT TAB(39)"IPCO"
160 COLOR 7,0,0
170 PRINT :PRINT :PRINT TAB(25)"PERSONAL COMPUTER OWNERS GROUP"
180 PRINT :PRINT :PRINT TAB(19)"p.o. box 10426, pittsburgh, pennsylvania 15234"
190 PRINT A$
200 PRINT :PRINT :PRINT :PRINT :PRINT
210 PRINT TAB(28)"PRESS ANY KEY TO CONTINUE"
220 A$=INKEY$:IF A$="" THEN 220
230 CLS
240 REM CONVERTED BY STEVE ESTLE
250 CLS
260 RANDOMIZE
270 DIM A$(25)
280 A$(1)="1ST TEE"
290 A$(2)="2ND TEE"
300 A$(3)="3RD TEE"
310 A$(4)="4TH TEE"
320 A$(5)="5TH TEE"
330 A$(6)="6TH TEE"
340 A$(7)="7TH TEE"
350 A$(8)="8TH TEE"
360 A$(9)="9TH TEE"
370 A$(10)="10TH TEE"
380 A$(11)="11TH TEE"
390 A$(12)="12TH TEE"
400 A$(13)="13TH TEE"
410 A$(14)="14TH TEE"
420 A$(15)="15TH TEE"
430 A$(16)="16TH TEE"
440 A$(17)="17TH TEE"
450 A$(18)="18TH TEE"
460 PRINT
470 PRINT
480 PRINT
490 INPUT "ARE YOU A NEW MEMBER OF THE CLUB?  ENTER Y OR N";X$
500 CLS
510 IF X$="Y" THEN 550
520 IF X$="N" THEN 790
530 PRINT "I CAN SEE YOU HAVE ALREADY SPENT CONSIDERABLE TIME AT THE 19THHOLE TRY ANSWERING AGAIN."
540 GOTO 490
550 PRINT :PRINT :PRINT :PRINT
560 PRINT "             YOU ARE ABOUT TO PLAY A ROUND OF GOLF                                           AT THE NEW AND EXCITING ESSICK COUNTRY                                          CLUB."
570 PRINT
580 PRINT TAB(18)"********** THESE ARE YOUR CLUBS **********"
590 PRINT
600 PRINT
610 PRINT TAB(26)"  4 WOODS NUMBERED 1 THRU 4"
620 PRINT
630 PRINT TAB(26)"  8 (EIGHT) IRONS  2 THRU 9"
640 PRINT
650 PRINT TAB(26)"  A PUTTER AND A WEDGE"
660 PRINT
670 PRINT
680 INPUT "PRESS ENTER FOR INSTRUCTIONS ";X0$
690 CLS
700 PRINT
710 PRINT
720 PRINT
730 PRINT "A PUTTER CAN BE USED ONLY ON THE GREEN.  YOU PUTT BY INPUTTING A NUMBER FROM 1  TO 10. THE DISTANCE AND ACCURACY OF YOUR PUTT ARE CONTROLLED BY THE MAGNITUDE "
740 PRINT "OF YOUR INPUT.  A 1 WILL TAP THE BALL ACCURATELY, A TEN WILL DRIVE IT APPROX    100 FT WITH QUESTIONABLE ACCURACY."
750 PRINT
760 PRINT TAB(26)"PRESS ENTER TO CONTINUE.."
770 INPUT I9$
780 CLS
790 S=S+1
800 IF S<>19 THEN 830
810 K1=2
820 GOTO 2600
830 IF S<>10 THEN 930
840 K1=1
850 PRINT
860 PRINT
870 PRINT "DO YOU WANT TO PLAY ANOTHER NINE HOLES,  ";
880 INPUT "YES/NO ";X2$
890 IF X2$="Y" THEN 930
900 IF X2$="N" THEN 2600
910 PRINT :PRINT :PRINT "IF YOU PLAY LIKE YOU TYPE YOU WILL NEVER MAKE IT!!!"
920 GOTO 870
930 PRINT
940 PRINT
950 READ Y
960 Y1=Y
970 READ D
980 PRINT "YOU ARE ON THE ";A$(S);"..."
990 PRINT "IT IS ";Y;" YARDS LONG, PAR ";D
1000 C=0
1010 K=0
1020 PRINT
1030 IF INT(Y)=0 THEN 2150
1040 C=C+1
1050 IF S+C<3 THEN 1080
1060 PRINT :PRINT :PRINT "WEDGE, IRON OR WOOD";
1070 GOTO 1090
1080 PRINT "TELL ME WHICH TYPE OF CLUB TO USE, A WEDGE AN IRON OR A WOOD.  FROM NOW ON I    WILL JUST ASK WEDGE, IRON OR WOOD."
1090 INPUT Z$
1100 IF Z$="WOOD" THEN 1380
1110 IF Z$="WEDGE" THEN 1150
1120 IF Z$="IRON" THEN 1210
1130 PRINT "YOU CAN ONLY CHOOSE A WEDGE, IRON OR WOOD."
1140 GOTO 1090
1150 IF Y<(18*RND+73) THEN 1180
1160 PRINT "  HEY... YOU CAN'T USE A WEDGE AT THIS DISTANCE...."
1170 GOTO 1060
1180 IF INT(15*RND)=13 THEN 2530
1190 Y=Y-(INT(75*RND+50))
1200 GOTO 2070
1210 PRINT "WHAT NUMBER IRON ";
1220 INPUT A
1230 IF A<2 THEN 1260
1240 IF A>9 THEN 1260
1250 GOTO 1280
1260 PRINT "YOUR IRONS ARE NUMBERED 2 THRU 9, RETYPE..."
1270 GOTO 1220
1280 IF K=0 THEN 1310
1290 IF INT(5*RND)=3 THEN 2070
1300 GOTO 2020
1310 M=INT(35*RND+200)
1320 X=INT(M-14.4*A-(7*RND+38))
1330 Y=Y-X
1340 IF M/27=INT(M/27) THEN 1950
1350 IF M/8=INT(M/8) THEN 1850
1360 IF M/69=INT(M/69) THEN 2530
1370 GOTO 1700
1380 PRINT "WHAT NUMBER WOOD";
1390 INPUT A
1400 IF A<1 THEN 1430
1410 IF A>4 THEN 1430
1420 GOTO 1450
1430 PRINT "YOUR WOODS ARE NUMBERED 1-4, RETYPE...";
1440 GOTO 1390
1450 IF K=0 THEN 1480
1460 IF INT(7*RND)=3 THEN 2070
1470 GOTO 2020
1480 X=INT(RND*250)
1490 IF A<>1 THEN 1520
1500 IF X<220 THEN 1480
1510 GOTO 1620
1520 IF A<>2 THEN 1560
1530 IF X<210 THEN 1480
1540 IF X>230 THEN 1480
1550 GOTO 1620
1560 IF A<>3 THEN 1600
1570 IF X<200 THEN 1480
1580 IF X>220 THEN 1480
1590 GOTO 1620
1600 IF X<190 THEN 1480
1610 IF X>210 THEN 1480
1620 Y=Y-X
1630 FOR I=1 TO (4-A+C^2)
1640 V=INT(30*RND)
1650 IF X/11=INT(X/11) THEN 1770
1660 IF X/5=INT(X/5) THEN 1900
1670 IF X/28=INT(X/28) THEN 1800
1680 IF X/27=INT(X/27) THEN 1950
1690 NEXT I
1700 IF Y>27 THEN 1750
1710 IF Y<-23 THEN 1990
1720 IF ABS(Y)<5 THEN 1880
1730 IF (3.3*RND)=2 THEN 1840
1740 GOTO 2070
1750 PRINT "YOU HIT IT ";X;" YARDS. YOU ARE ";Y;" YARDS AWAY."
1760 GOTO 1020
1770 IF Y<25 THEN 1850
1780 PRINT "YOU ARE IN THE LEFT ROUGH ";Y;" YARDS AWAY."
1790 GOTO 1020
1800 PRINT "YOU SLICED THE BALL INTO A POND.  LOSE TWO STROKES AND REPLAY.."
1810 C=C+1
1820 Y=Y1
1830 GOTO 1020
1840 Y=ABS(Y)
1850 Y=30*RND+15
1860 PRINT "YOU'RE IN A TRAP NEAR THE GREEN."
1870 GOTO 1020
1880 PRINT "YOU S U N K THE SHOT......."
1890 GOTO 2540
1900 IF V/6=A THEN 1950
1910 IF Y-20<X-(A*V) THEN 1700
1920 PRINT "YOU`RE IN THE RIGHT ROUGH ";Y+25;" YARDS AWAY..."
1930 Y=Y-25
1940 GOTO 1020
1950 PRINT "THE BALL IS LOST IN THE WOODS.  REPLAY....TWO STROKE PENALTY.."
1960 C=C+1
1970 Y=Y1
1980 GOTO 1020
1990 Y=ABS(Y)
2000 PRINT "YOU OVERSHOT THE GREEN BY ";Y;" YARDS..."
2010 GOTO 1020
2020 IF INT(2*RND)=1 THEN 2050
2030 PRINT "THE IDEA IS TO HIT THE BALL NOT THE SAND.."
2040 GOTO 1020
2050 PRINT "YOU TOPPED IT NO GAIN.."
2060 GOTO 1020
2070 IF INT(4*RND)<>3 THEN 2100
2080 F=INT(10*RND)
2090 GOTO 2140
2100 IF INT(7*RND)<>7 THEN 2130
2110 F=INT(50*RND+50)
2120 GOTO 2140
2130 F=INT(50*RND+10)
2140 IF INT(F)=0 THEN 2540
2150 IF F<>1 THEN 2180
2160 PRINT "YOU ARE ON THE GREEN 1 FT FROM THE PIN.. LUCK SHOT...."
2170 GOTO 2200
2180 PRINT "YOU ARE ON THE GREEN,";F;"FEET FROM THE PIN..."
2190 PRINT
2200 PRINT
2210 C=C+1
2220 PRINT "WHAT IS YOUR PUTT";
2230 INPUT A
2240 IF A>10 THEN 2270
2250 IF A<1 THEN 2270
2260 GOTO 2290
2270 PRINT "CAN'T USE THAT...RETYPE."
2280 GOTO 2230
2290 K=F
2300 F=INT(F=(A^2+A-((0.5*A^2-A+1)*RND)))
2310 IF ABS(F)>(RND+1.5) THEN 2390
2320 IF K>5 THEN 2480
2330 IF INT(10*RND)=7 THEN 2360
2340 PRINT "THE TAP IS GOOD.."
2350 GOTO 2540
2360 PRINT "OH BOY, YOU JABBED THE PUTT";INT(9*RND+2);"INCHES FROM THE CUP.."
2370 F=1
2380 GOTO 2200
2390 IF F=0 THEN 2480
2400 IF F>0 THEN 2430
2410 F=ABS(F)
2420 PRINT "YOU OVERSHOT THE BLOOMING CUP!!!"
2430 IF F<>1 THEN 2460
2440 PRINT "YOU ARE ONE FOOT FROM THE PIN..."
2450 GOTO 2390
2460 PRINT "YOU ARE NOW ";F;" FEET FROM THE PIN..."
2470 GOTO 2200
2480 IF K<>1 THEN 2510
2490 PRINT "YOU SUNK IT FROM ONE FOOT."
2500 GOTO 2540
2510 PRINT "YOU SUNK IT FROM ";K;" FEET.."
2520 GOTO 2540
2530 PRINT "YOU    S U N K    IT!!!!!!"
2540 PRINT
2550 IF C<>1 THEN 2570
2560 PRINT "************HOLE   IN   ONE**************"
2570 E=E+C
2580 PRINT "YOU HAVE HAD ";C;" STROKES ON HOLE NUMBER ";S;"."
2590 GOTO 790
2600 PRINT "AFTER";(K1*9);"HOLES YOU HAVE HAD";E;" STROKES..."
2610 IF K1*36-E<0 THEN 2700
2620 IF (K1*36-E)<>0 THEN 2650
2630 PRINT "NICE GAME....... YOU SHOT PAR!!!!"
2640 GOTO 2730
2650 PRINT "THE PAR IS";(K1*36);".  YOU ARE";(K1*36-E);"UNDER PAR."
2660 PRINT
2670 PRINT TAB(28)"CONGRATULATIONS!!!!!!"
2680 PRINT :PRINT :PRINT TAB(12)"YOU PLAYED A GREAT GAME AT THE ESSICK COUNTRY CLUB !!!!"
2690 GOTO 2730
2700 PRINT "THE PAR IS";(K1*36);".  YOU ARE";(E-K1*36);"OVER PAR."
2710 DATA 374,4,434,4,210,3,376,4,205,3,440,4,422,4,510,5,595,5
2720 DATA 510,5,434,4,210,3,312,4,428,4,440,4,205,3,515,5,318,4
2730 END
```

## ICICLE.BAS

```bas
10 SEED = VAL(MID$(TIMES$,4,2))*60 = VAL(RIGHT$(TIME$,2)):RANDOMIZE SEED
20 DIM V(79)
30 CLS:KEY OFF
40 X = INT(RND(1)*79)+1
50 Y = V(X)
60 Y = Y + 1:V(X) = Y
70 IF V(X) = 24 THEN GOTO 100
80 LOCATE 25-Y,X:PRINT CHR$(  219);
90 GOTO 40
100 LOCATE 1,X:COLOR 26: PRINT CHR$(219  );:COLOR 7:
110 A$ = INKEY$:IF LEN(A$) >0 THEN ERASE V:GOTO 20
120 GOTO 110
```

## KENO.BAS

```bas
10 REM KENO ACCORDING TO PAYOFFS OF
11 REM MGM GRAND CASINO LAS VEGAS JAN 1976
12 REM WRITTEN BY G.W.FLEMMING MEMBER SCCS
13 REM MODIFIED BY ED HALL
15 PRINT TAB(15);"$$$$$ K E N O $$$$$"
16 PRINT CHR$(7);CHR$(7);CHR$(7);TAB(15);"     $$$$$$$$$";CHR$(7)
17 PRINT CHR$(7);CHR$(7);CHR$(7);CHR$(7);CHR$(7)
18 INPUT "DO YOU WANT INSTRUCTIONS";D$
19 IF LEFT$(D$,1)="N" THEN 145
20 PRINT:PRINT "EACH PLAY WILL COST YOU $1. YOU MAY SELECT"
21 PRINT "FROM 1 TO 15 NUMBERS TO PLAY. WHEN ASKED FOR YOUR"
22 PRINT "NUMBERS, TYPE IN EACH NUMBER SEPARATED BY COMMAS."
23 PRINT "IF YOU ACCIDENTILY PLACE A COMMA AFTER YOUR LAST"
24 PRINT "NUMBER, THE COMPUTER WILL TELL YOU THAT THE EXTRA"
25 PRINT "NUMBER WAS IGNORED (IN THIS CASE, THE EXTRA WAS"
26 PRINT "A SPACE). IF YOU PUT IN MORE NUMBERS THAN ARE NEEDED,"
27 PRINT "ONLY THE FIRST REQUIRED ONES WILL BE USED. IF"
28 PRINT "YOU DON'T ENTER ENOUGH NUMBERS, THE COMPUTER WILL"
29 PRINT "RESPOND WITH '??'. ENTER THE REQUIRED EXTRA NUMBERS."
30 PRINT:PRINT "      THE COMPUTER WILL BE CHOOSING 20 NUMBERS"
31 PRINT "AT RANDOM FROM NUMBER 1 TO NUMBER 80."
32 PRINT:PRINT "TO QUIT, TYPE '0' WHEN ASKED HOW MANY NUMBERS YOU WANT."
33 PRINT:PRINT:PRINT "G O O D   L U C K ! ! ! ! !"
34 PRINT:PRINT
145 DIM A(20),H(80)
146 INPUT "IS THIS A CONTINUATION OF AN OLD GAME";A$
147 IF LEFT$(A$,1)="N" THEN 151
148 INPUT "HOW MANY DOLLARS WERE LEFT";S
150 GOTO 160
151 E=0
155 INPUT "HOW MUCH CASH DID YOU BRING";S
160 W=S
170 Q=0:PRINT
180 REM INPUT NUMBERS
190 INPUT "HOW MANY NUMBERS DO YOU WANT";T
191 IF T=0 THEN 2000
195 PRINT "YOUR NUMBERS: "
200 IF T=1 THEN INPUT A(1)
201 IF T=2 THEN INPUT A(1),A(2)
202 IF T=3 THEN INPUT A(1),A(2),A(3)
203 IF T=4 THEN INPUT A(1),A(2),A(3),A(4)
204 IF T=5 THEN INPUT A(1),A(2),A(3),A(4),A(5)
205 IF T=6 THEN INPUT A(1),A(2),A(3),A(4),A(5),A(6)
206 IF T=7 THEN INPUT A(1),A(2),A(3),A(4),A(5),A(6),A(7)
207 IF T=8 THEN INPUT A(1),A(2),A(3),A(4),A(5),A(6),A(7),A(8)
208 IF T=9 THEN INPUT "FIRST FIVE:";A(1),A(2),A(3),A(4),A(5)
209 IF T=9 THEN INPUT "LAST FOUR:";A(6),A(7),A(8),A(9)
210 IF T=10 THEN INPUT "FIRST FIVE:";A(1),A(2),A(3),A(4),A(5)
211 IF T=10 THEN INPUT "LAST FIVE:";A(6),A(7),A(8),A(9),A(10)
212 IF T=11 THEN INPUT "FIRST FIVE:";A(1),A(2),A(3),A(4),A(5)
213 IF T=11 THEN INPUT "LAST SIX:";A(6),A(7),A(8),A(9),A(10),A(11)
216 IF T=12 THEN INPUT "FIRST SIX:";A(1),A(2),A(3),A(4),A(5),A(6)
217 IF T=12 THEN INPUT "LAST SIX:";A(7),A(8),A(9),A(10),A(11),A(12)
218 IF T=13 THEN INPUT "FIRST FIVE:";A(1),A(2),A(3),A(4),A(5)
219 IF T=13 THEN INPUT "NEXT FIVE:";A(6),A(7),A(8),A(9),A(10)
220 IF T=13 THEN INPUT "LAST THREE:";A(11),A(12),A(13)
221 IF T=14 THEN INPUT "FIRST FIVE:";A(1),A(2),A(3),A(4),A(5)
222 IF T=14 THEN INPUT "NEXT FIVE:";A(6),A(7),A(8),A(9),A(10)
223 IF T=14 THEN INPUT "LAST FOUR:";A(11),A(12),A(13),A(14)
224 IF T=15 THEN INPUT "FIRST FIVE:";A(1),A(2),A(3),A(4),A(5)
225 IF T=15 THEN INPUT "NEXT FIVE:";A(6),A(7),A(8),A(9),A(10)
226 IF T=15 THEN INPUT "LAST FIVE:";A(11),A(12),A(13),A(14),A(15)
227 FOR R=1 TO T-1
230 FOR M=R+1 TO T
235 IF A(R)=A(M) THEN 225
236 IF A(R)>80 THEN 261
240 NEXT M
245 NEXT R
250 GOTO 299
255 PRINT "YOU HAVE DUPLICATED NUMBERS. TRY AGAIN."
260 GOTO 191
261 PRINT "YOU HAVE A NUMBER TOO LARGE. TRY AGAIN."
262 GOTO 191
299 N=T
300 FOR X=1 TO 20:REM SELECT 20 NUMBERS AT RANDOM
310 H(X)=INT(80*RND)+1
320 FOR Y=1 TO (X-1)
330 IF H(X)=H(X-Y) THEN 310
340 NEXT Y
350 NEXT X
399 REM DETERMINE HOW MANY WINNERS
400 FOR X=1 TO N
410 FOR Y=1 TO 20
420 IF A(X)=H(Y) THEN Q=Q+1
430 NEXT Y
440 NEXT X
499 REM DETERMINE PAYOFF
500 IF N<>1 THEN 550
510 IF Q=1 THEN W=W+3
550 IF N<>2 THEN 600
560 IF Q=2 THEN W=W+12
600 IF N<>3 THEN 650
610 IF Q=2 THEN W=W+1
620 IF Q=3 THEN W=W+43
650 IF N<>4 THEN 700
660 IF Q=2 THEN W=W+1
670 IF Q=3 THEN W=W+4
680 IF Q=4 THEN W=W+114
700 IF N<>5 THEN 750
710 IF Q=3 THEN W=W+1.5
715 IF Q=4 THEN W=W+21.5
720 IF Q=5 THEN W=W+485.5
750 IF N<>6 THEN 800
760 IF Q=3 THEN W=W+1
765 IF Q=4 THEN W=W+4.5
770 IF Q=5 THEN W=W+85.5
775 IF Q=6 THEN W=W+1571.5
800 IF N<>7 THEN 850
810 IF Q=3 THEN W=W+0.5
815 IF Q=4 THEN W=W+1.5
820 IF Q=5 THEN W=W+21.5
825 IF Q=6 THEN W=W+328.5
830 IF Q=7 THEN W=W+5000
850 IF N<>8 THEN 900
855 IF Q=5 THEN W=W+8.5
860 IF Q=6 THEN W=W+85.5
865 IF Q=7 THEN W=W+1643
870 IF Q=8 THEN W=W+17857
900 IF N<>9 THEN 950
905 IF Q=4 THEN W=W+0.5
910 IF Q=5 THEN W=W+3
920 IF Q=6 THEN W=W+43
925 IF Q=7 THEN W=W+285.5
930 IF Q=8 THEN W=W+4000
935 IF Q=9 THEN W=W+17857
950 IF N<>10 THEN 1000
955 IF Q=5 THEN W=W+2
956 IF Q=6 THEN W=W+20
957 IF Q=7 THEN W=W+140
958 IF Q=8 THEN W=W+1000
959 IF Q=9 THEN W=W+3800
960 IF Q=10 THEN W=W+17857
1000 IF N<>11 THEN 1050
1001 IF Q=5 THEN W=W+1
1002 IF Q=6 THEN W=W+8.5
1003 IF Q=7 THEN W=W+71.5
1004 IF Q=8 THEN W=W+357
1005 IF Q=9 THEN W=W+1714
1006 IF Q=10 THEN W=W+10714
1007 IF Q=11 THEN W=W+17857
1050 IF N<>12 THEN 1100
1055 IF Q=5 THEN W=W+1
1056 IF Q=6 THEN W=W+4
1057 IF Q=7 THEN W=W+28.5
1058 IF Q=8 THEN W=W+214
1059 IF Q=9 THEN W=W+571.5
1060 IF Q=10 THEN W=W+1428.5
1061 IF Q=11 THEN W=W+7143
1062 IF Q=12 THEN W=W+25000
1100 IF N<>13 THEN 1150
1101 IF Q=6 THEN W=W+1.5
1102 IF Q=7 THEN W=W+17
1103 IF Q=8 THEN W=W+71.5
1104 IF Q=9 THEN W=W+678.5
1105 IF Q=10 THEN W=W+3571.5
1106 IF Q=11 THEN W=W+6428.5
1107 IF Q=12 THEN W=W+14285.7
1108 IF Q=13 THEN W=W+25000
1150 IF N<>14 THEN 1200
1160 IF Q=6 THEN W=W+3
1161 IF Q=7 THEN W=W+8
1162 IF Q=8 THEN W=W+31.5
1163 IF Q=9 THEN W=W+250
1164 IF Q=10 THEN W=W+714
1165 IF Q=11 THEN W=W+2857
1166 IF Q=12 THEN W=W+10714
1167 IF Q=13 THEN W=W+21428.5
1168 IF Q=14 THEN W=W+25000
1200 IF N<>15 THEN 1900
1201 IF Q=6 THEN W=W+1.5
1202 IF Q=7 THEN W=W+7
1203 IF Q=8 THEN W=W+21.5
1204 IF Q=9 THEN W=W+107
1205 IF Q=10 THEN W=W+285.5
1206 IF Q=11 THEN W=W+2143
1207 IF Q=12 THEN W=W+7143
1208 IF Q=13 THEN W=W+21428.5
1209 IF Q=14 THEN W=W+25000
1210 IF Q=15 THEN W=W+25000
1899 REM PRINT GAME RESULTS
1900 PRINT "MY NUMBERS WERE: "
1905 PRINT
1910 FOR X=1 TO 10
1920 PRINT H(X);
1930 NEXT X
1935 PRINT
1940 FOR X=11 TO 20
1950 PRINT H(X);
1960 NEXT X
1965 PRINT: PRINT: W=W-1: REM SUBTRACT BET
1966 E=E+1
1967 IF W<1 AND W>0 THEN PRINT "YOU HAD ";Q;"RIGHT, BUT NOW YOU"
1968 IF W<1 AND W>0 THEN PRINT "DON'T HAVE ENOUGH TO BET."
1969 IF W<1 AND W>0 THEN GOTO 2000
1970 IF W=0 THEN PRINT "YOU HAD";Q;"RIGHT, BUT NOW YOU'RE BROKE."
1971 IF W=0 THEN 2000
1972 PRINT "YOU HAD ";Q;"RIGHT. YOU NOW HAVE ";W;"DOLLARS LEFT."
1980 GOTO 170
2000 PRINT "COME BACK AGAIN. BRING MORE MONEY!!!"
2010 PRINT "TOTAL TURNS ";E
2020 PRINT "TOTAL MONEY LEFT ";W
2500 END
19000 PRINT "MY NUMBERS WERE: "
```

## KINGDOM.BAS

```bas
10 FOR I=1 TO 10:PRINT:NEXT I
20 PRINT TAB(20);"*** KINGDOM ***":FOR I=1 TO 10:PRINT:NEXT I
30 N5=8:N4=8
380 PRINT "YOUR GOAL: TO COMPLETE YOUR ";N4;" YEAR TERM."
390 PRINT "GOOD LUCK••"
400 M=INT(70000.+(RND*1000)-(RND*1000))
410 P=INT(500 +(RND*10)-(RND*10))
420 L=2000
430 W=0:X2=0:E0=0:X1=0:E1=0:S9=0:S0=0:M5=0:S1=0
440 D1=INT(P/3)
450 L1=INT((RND*5)+10)
460 L0=INT(RND*10+95)
470 GOSUB 2220
480 PRINT "YOU HAVE ";M;" RALLODS, ";
490 PRINT P;" COUNTRYMEN,";
500 IF W=0 THEN 520
510 PRINT W;" FOREIGN WORKERS,";
520 PRINT " AND ";L;" SQ. MILES OF LAND."
530 PRINT "THIS YEAR INDUSTRY WILL BUY LAND FOR ";L0;" RALLODS/SQ. MILE"
540 PRINT "LAND CURRENTLY COSTS ";L1;" RALLODS/SQ. MILE TO PLANT"
550 IF S1=0 THEN 570
560 PRINT "POLLUTION LEVEL IS ";S1;" UNITS."
570 GOSUB 2220
580 INPUT"HOW MANY SQ. MILES TO SELL TO INDUSTRY ";L2
600 IF L2<0 THEN 580
610 IF L2<(L-1000) THEN 680
620 PRINT "  THINK AGAIN. YOU'VE ONLY ";L-1000;" SQ. MILES OF FARM LAND"
630 IF X<>1 THEN 580
640 PRINT "(FOREIGN INDUSTRY NOT INTERESTED IN FOREST LAND BECAUSE"
650 PRINT "OF GREATER DEVELOPMENT COST)"
660 X1=1
670 GOTO 580
680 M=INT(M+L2*L0)
690 L=INT(L-L2)
700 X9=INT(44*(2000-L))
710 M2=0
720 M3=0
730 M4=0
740 INPUT"HOW MANY RALLODS TO DISTRIBUTE TO YOUR COUNTRYMEN ";M1
770 IF M1<0 THEN 740
780 IF M1<=M THEN 810
790 GOSUB 2250
800 GOTO 740
810 M=INT(M-M1)
820 IF M=0 THEN 1170
830 INPUT"HOW MANY SQ. MILES TO PLANT ";L3
850 IF L3<0 THEN 830
860 IF L3<=P*2 THEN 890
870 PRINT "EACH COUNTRYMAN CAN ONLY PLANT 2 SQ. MILES":GOTO 950
890 IF L3<=L-1000 THEN 920
900 PRINT "ONLY GOT ";L-1000;" SQ. MILES OF FARM LAND."
910 GOTO 950
920 M4=INT(L3*L1)
930 IF M4<=M THEN 990
940 GOSUB 2250
950 PRINT "YOU CAN AFFORD ";INT(M/L1);
960 PRINT " AND HAVE LABOR FOR ";P*2;
970 PRINT " AND HAVE ";L-1000;" SQ. MILES":GOTO 830
990 M=INT(M-M4)
1000 IF M=0 THEN 1170
1010 INPUT"HOW MUCH TO SPEND FOR EDUCATION ";M2
1030 IF M2<0 THEN 1010
1040 IF M2<M THEN 1070
1050 GOSUB 2250
1060 GOTO 1010
1070 M=INT(M-M2)
1080 IF M=0 THEN 1170
1090 IF L=2000 THEN 1170
1100 INPUT"HOW MUCH TO SPEND TO COMBAT POLLUTION ";M3
1120 IF M3<0 THEN 1100
1130 IF M3<=M THEN 1160
1140 GOSUB 2250
1150 GOTO 1100
1160 M=INT(M-M3)
1170 GOSUB 2220
1180 D0=0
1190 E2=M2/P
1200 D2=INT(P-M1/100)
1210 IF D2<=0 THEN 1240
1220 D0=D2
1230 PRINT  D2;" COUNTRYMEN DIED OF STARVATION."
1240 D3=INT((S1/100000.)*(0.1+0.4*RND)*P)
1250 IF D3<=0 THEN 1280
1260 PRINT  D3;" COUNTRYMEN DIED OF EXCESS POLLUTION."
1270 D0=D0+D3
1280 IF D0<=0THEN 1400
1290 F=D0*9
1300 PRINT "YOU WERE FORCE TO SPEND ";F;" RALLODS FOR FUNERAL EXPENSES"
1310 M=INT(M-F)
1320 IF M<=0 THEN 1400
1330 PRINT "INSUFFICIENT RESOURCES FORCED SALE OF LAND."
1340 T0=-INT((M-L0+1)/L0)
1350 L=L-T0
1360 IF L>=1000 THEN 1390
1370 PRINT "NOT ENOUGH LAND TO SELL"
1380 GOTO 2270
1390 M=M+T0*L0
1400 IF D0>200 THEN 2300
1410 P=P-D0
1420 D1=D1-D0
1430 IF D1<0 THEN 2410
1440 IF D2<=2 THEN 1460
1450 IF M>500 THEN 2520
1460 IF L2=0 THEN 1520
1470 T0=INT(L2+L2*RND*2)
1480 IF W=0 THEN 1500
1490 T0=INT(T0+0.1*W)
1500 PRINT  T0;" WORKERS CAME TO THE ISLAND AND"
1510 W=W+T0
1520 T0=INT(((500-P)/10-D3/3-D2/5)*0.75*(1+RND))
1530 PRINT  ABS(T0);" COUNTRYMEN ";
1540 IF T0<0 THEN 1570
1550 PRINT "CAME TO ";
1560 GOTO 1580
1570 PRINT "LEFT ";
1580 PRINT " THE ISLAND."
1590 P=P+T0
1600 IF P<W THEN 2480
1610 T0=0
1620 IF L=2000 THEN 1680
1630 T0=INT((S1/100000.)*L3)
1640 IF T0<=L3 THEN 1660
1650 T0=L3
1660 IF T0=0 THEN 1680
1670 PRINT "OF ";L3;" SQ. MILES PLANTED, ";
1680 PRINT "YOU HARVESTED ";L3-T0;" SQ. MILES OF CROPS."
1690 IF T0=0 THEN 1760
1700 IF X2>=2 THEN 1760
1710 PRINT "  (DUE TO ";
1720 IF X2=0 THEN 1740
1730 PRINT "INCREASED ";
1740 PRINT "POLLUTION LEVEL)"
1750 X2=X2+1
1760 T1=INT((39+RND*20)*(1+0.25*(E0+E1)/20))
1770 PRINT "  MAKING ";INT(T1*(L3-T0));" RALLODS."
1780 M=M+INT(T1*(L3-T0))
1790 E0=E1
1800 IF E2<=10 THEN 1820
1810 E2=10
1820 E1=E2
1830 T0=2000-L
1840 IF T0<2 THEN 2100
1850 IF T0<=26 THEN 1870
1860 T0=26
1870 T0=INT(T0*500*(0.52+0.5*RND))
1880 T1=S1/100000.
1890 IF T1<=1 THEN 1910
1900 T1=1
1910 T1=T1*T0
1920 PRINT "YOU MADE ";INT(T0-T1);" RALLODS FROM TOURIST TRADE"
1930 M=M+INT(T0-T1)
1940 IF INT(T0-T1)<=M5 THEN 2080
1950 IF S1<=S9 THEN 2080
1960 PRINT "  DECREASE BECAUSE ";
1970 T2=RND*10
1980 ON (T2/2)+1 GOTO 1990,2010,2030,2050,2070,2070
1990 PRINT "FISH POPULATIN HAS DWINDLED DUE TO WATER POLLUTION"
2000 GOTO 2080
2010 PRINT "AIR POLLUTION IS KILLING GAME BIRD POPULATION"
2020 GOTO 2080
2030 PRINT "MINERAL BATHS ARE BEING RUINED BY WATER POLLUTION"
2040 GOTO 2080
2050 PRINT "UNPLEASANT SMOG IS DISCOURIGING SUN BATHERS"
2060 GOTO 2080
2070 PRINT "HOTEL ARE LOOKING SHABBY DUE TO SMOG GRIT"
2080 M5=INT(T0-T1)
2090 S9=S1
2100 S2=(2000-L)^2-M3/0.44
2110 PRINT "YOU RECEIVED ";X9;" RALLODS FROM TAXES ON INDUSTRY"
2120 IF S2>=0 THEN 2170
2130 S1=INT(S1+S2/2)
2140 IF S1>=S0 THEN 2160
2150 S1=S0
2160 GOTO 2190
2170 S1=INT(S1+S2)
2180 S0=INT(S0+S2/10)
2190 N5=N5-1
2200 IF N5>0 THEN 450
2210 GOTO 2570
2220 PRINT :PRINT :RETURN
2250 PRINT "ONLY GOT ";M;" RALLODS LEFT!••":RETURN
2270 PRINT "YOU HAVE BEEN THROWN OUT OF OFFICE AND YOU ARE NOW"
2280 PRINT "RESIDING IN PRISON."
2290 END
2300 PRINT D0;" COUNTRYMEN DIED IN ONE YEAR!•!•!•!•!•"
2310 PRINT "DUE TO THIS EXTREME MISMANAGEMENT YOU HAVE NOT ONLY"
2320 PRINT "BEEN IMPEACHED AND THROWN OUT OF OFFICE BUT YOU"
2330 T0=INT(RND*2.01)+1
2340 ON T0 GOTO 2350,2370,2390
2350 PRINT "ALSO HAD YOUR LEFT EYE GOUGED OUT."
2360 END
2370 PRINT "HAVE ALSO GAINED A VERY BAD REPUTATION."
2380 END
2390 PRINT "HAVE ALSO BEEN DECLARED NATIONAL FINK."
2400 END
2410 PRINT "OVER ONE THIRD OF THE POPULATION HAS DIED SINCE YOU"
2420 PRINT "WERE ELECTED TO OFFICE.  THE PEOPLE (REMAINING)"
2430 PRINT "HATE YOUR GUTS."
2440 GOTO 2450
2450 IF RND<0.25 THEN 2270
2460 PRINT "YOU HAVE BEEN ASSASINATED."
2470 END
2480 PRINT "THE NUMBER OF FOREIGN WORKERS HAS EXCEEDED THE NUMBER"
2490 PRINT "OF COUNTRYMEN. AS A MAJORITY THEY HAVE REVOLTED AND"
2500 PRINT "TAKEN OVER THE COUNTRY."
2510 GOTO 2450
2520 PRINT "MONEY WAS LEFT OVER IN THE TREASURY WHICH YOU DID NOT"
2530 PRINT "SPEND.  AS A RESULT SOME OF YOUR COUNTRYMEN DIED OF "
2540 PRINT "STARVATION.  THE PUBLIC IS ENRAGED AND YOU HAVE BEEN"
2550 PRINT "FORCED TO EITHER RESIGN OR COMMIT SUICIDE."
2560 END
2570 PRINT
2580 PRINT "CONGRATULATIONS"
2590 PRINT "YOU HAVE SUCCESSFULLY COMPLETED YOUR ";N4;" YEAR TERM"
2600 PRINT "OF OFFICE.  YOU HAVE DONE SUCH A GOOD JOB THAT YOU MIGHT"
2610 PRINT "WANT TO RUN FOR ELECTION AGAIN THIS TIME."
2620 PRINT "TYPE 0 (ZERO) IF YOU DO";
2630 INPUT Q
2640 N5=N4
2650 IF Q=0 THEN 440
2660 END
```

## LANDER.BAS

```bas
1 	REM----------------------------------------------------
2 	REM		L  A  N  D  E  R
3 	REM----------------------------------------------------
4       REM
5 	REM		JUNE 16, 1977
6       REM
7 	REM	THIS VERSION OF LUNAR LANDER IS COURTESY OF
8 	REM	THE IMSAI COMPANY.
9       REM
300 S3 =0
310 N3=0
320 H=500
430 IF H<=0 THEN 1560
1010 PRINT"LUNAR LANDING SIMULATION"
1020 PRINT"----- ------- ----------"
1030 PRINT"TYPE '1' FOR INSTRUCTIONS";
1040 INPUT A
1050 IF A<>1 THEN 1260
1060 PRINT
1070 PRINT"YOU ARE LANDING ON THE MOON, YOUR HAVE HAD TO"
1075 PRINT"ABORT YOUR AUTOMATIC LANDING PLAN AND HAVE TAKEN"
1077 PRINT"OVER MANUAL CONTROL 500 FT. OVER A GOOD LANDING"
1080 PRINT"SPOT. YOU ARE FALLING AT 50 FT/SEC, WITH 120 LBS"
1090 PRINT"OF FUEL TOTAL; DEPLETED AS FOLLOWS:"
1120 PRINT"(1) AFTER EACH SECOND, THE HEIGHT,VELOCITY AND"
1130 PRINT"REMAINING FUEL WILL BE REPORTED."
1140 PRINT"(2) NEXT, A/?/ WILL BE TYPED. ENTER THE NUMBER"
1150 PRINT"OF LBS OF FUEL YOU WISH TO BURN DURING THE NEXT"
1160 PRINT"SECOND. EACH LB BURNED WILL SLOW THE DESCENT BY"
1170 PRINT"1 FT/SEC. 5 LBS OF FUEL WILL MAINTAIN YOUR CUR-"
1175 PRINT"RENT VELOCITY EXACTLY."
1180 PRINT"(3) MAXIMUM THRUST YOUR ENGINE CAN SUSTAIN IS"
1185 PRINT"30 FT/SEC OR 30 LBS OF FUEL/SEC."
1200 PRINT "(4) WHEN YOU CONTACT THE LUNAR SURFACE, YOUR"
1210 PRINT"DESCENT ENGINE WILL AUTO-SHUT OFF AND YOU WILL"
1220 PRINT"BE GIVEN A READOUT OF LANDING CONDITIONS."
1230 PRINT"(5) IF OUT OF FUEL, ONLY REPORTS UNTIL"
1235 PRINT"YOU CONTACT THE LUNAR SURFACE"
1240 T=0
1245 V1=-5
1260 PRINT"ALERT! ALERT! DESCENT PROCEEDURE INITIATED!"
1265 IF T>30 THEN PRINT "HINT; NO BURN TILL SECOND # 4"
1266 IF T=0 OR V1=0 THEN 1290
1267 IF T<12 THEN PRINT "HINT; YOU BURNED LATE FOR A NOVICE"
1290 PRINT"SEC  FEET   SPEED    FUEL       PLOT OF DISTANCE"
1300 PRINT
1310 T=0
1320 H=500
1330 V=50
1340 F=120
1350 PRINT T;TAB(4);H;TAB(12);V;TAB(20);F;TAB(29);
1352 PRINT "I";TAB(H/15+29);"*"
1360 INPUT B
1370 IF B<0 THEN 1500
1380 IF B>30 THEN 1520
1390 IF B >F THEN 1540
1400 V1=V-B+5
1410 F=F-B
1420 H = H-0.5*(V+V1)
1430 IF H<=0 THEN 1560
1440 T=T+1
1450 V=V1
1460 IF F>0 THEN 1350
1470 IF B=0 THEN 1490
1480 PRINT TAB(29);"***** OUT OF FUEL *****"
1490 PRINT T;TAB(4);H;TAB(12);V;TAB(20);F;TAB(29);
1492 PRINT "I";TAB(H/15+29);"."
1500 B=0
1510 GOTO 1400
1520 B=30
1530 GOTO 1390
1540 B=F
1550 GOTO 1400
1560 PRINT "*** CONTACT ***";
1562 IF V1>20 THEN PRINT TAB(29);"0"
1563 IF V1>25 THEN PRINT TAB(29);"00"
1564 IF V1>30 THEN PRINT TAB(29);"000"
1565 IF V1>35 THEN PRINT TAB(29);"0  ."
1566 IF V1>40 THEN PRINT TAB(29);".    ."
1567 IF V1>45 THEN PRINT TAB(29);"."
1570 H =H+0.5*(V+V1)
1580 IF B=5 THEN 1610
1585 Z=V*V+H*(10-2*B)
1587 IF Z<0 THEN 1770
1588 P=SQR(Z)
1590 D=(P-V)/(5-B)
1600 GOTO 1620
1610 D=H/V
1620 V1=V+(5-B)*D
1625 N3 =N3+1
1630 PRINT "TOUCHDOWN AT "; T+D;"SECONDS"
1640 PRINT"LANDING VELOCITY=";V1;"FT/SEC"
1641 IF V1>8 THEN PRINT "OR ";V1*0.5937999;" MPH, GROUNDHOG";
1642 IF V1<>0 THEN 1648
1644 PRINT "CONGRATULATIONS! A PERFECT LANDING"
1645 S3=S3+8
1646 GOTO 1710
1648 IF V1<85 THEN 1654
1650 PRINT:PRINT"YOU HAD TO TRY FOR THAT! DO IT RIGHT"
1652 GOTO 1260
1654 FOR I1=1 TO 7
1656 LET S1=2^I1
1657 IF S1>V1 THEN 1660
1658 NEXT I1
1659 GOTO 1790
1660 PRINT";   SCORE = ";7-I1
1661 S3 =S3+7-I1
1662 ON I1 GOTO  1664,1670,1672,1674,1676,1678,1710
1664 PRINT"NEARLY PERFECT: YOU MUST TRY AGAIN!"
1666 PRINT"                    ----"
1668 GOTO  1260
1670 PRINT "GOOD.  ( YOU COULD WALK AWAY FROM IT )":GOTO 1710
1672 PRINT"ABOUT LIKE HITTING THE WALL RUNNING HARD.":GOTO 1710
1674 PRINT"OUCH! THAT HURT! ( THE LANDER )":GOTO 1710
1676 PRINT"PUH-LEEEZE!  MY SOUFFLE'!":GOTO 1710
1678 PRINT " YOU SHOULD REREAD THIS:   FOR EACH":GOTO 1160
1710 PRINT "*"
1720 PRINT " TYPE 1 FOR ANOTHER MISSION.";
1730 INPUT A
1740 IF A=1 THEN 1260
1745 PRINT "FOR";N3;"MISSIONS, AVERAGE SCORE =";S3/N3
1746 IF N3>3 AND S3/N3>4.5 THEN PRINT "GOOD WORK!•"
1750 PRINT " CONTROL OUT"
1760 END
1770 PRINT "NEGATIVE ARGUMENT, END OF MISSION."
1780 GOTO 1710
1790 PRINT "LOOP OVERFLOW, END MISSION"
1800 GOTO 1710
1810 STOP
```

## LEM.BAS

```bas
10     CLS:KEY OFF:PRINT:PRINT:PRINT:PRINT:PRINT:PRINT
20           PRINT "          L    U    N    A    R"
30     PRINT
40     PRINT "                    L    A    N    D    E    R"
50     PRINT:PRINT
60     PRINT TAB(25);"LUNAR LANDING SIMULATION"
70     PRINT CHR$(7)
80     PRINT TAB(15);"-------HOUSTON CALLING LUNAR MODULE-------"
90     PRINT TAB(15);
100    PRINT TAB(15);"YOU MAY SET THE FUEL RATE (K) TO ZERO OR ANY VALUE"
110    PRINT TAB(15);"BETWEEN 8 AND 200 LBS PER SECOND.  A NEGATIVE FUEL"
120    PRINT TAB(15);"RATE WILL ABORT THE MISSION."
130    PRINT
140    PRINT TAB(15);"YOU HAVE 16000 LBS OF FUEL."
150    PRINT TAB(15);"ESTIMATED FREE FALL IMPACT TIME IS 120 SECONDS."
160    PRINT TAB(15);"CAPSULE WEIGHT IS 32,500 LBS."
170    PRINT
180    PRINT TAB(20);"FIRST RADAR CHECK COMING UP..."
190    PRINT TAB(20);"BEGIN LANDING PROCEDURE" :PRINT:PRINT
200    PRINT "TIME(SECS)","HEIGHT(MI)","VELOCITY(MPH)","FUEL(LBS)","FUEL RATE"
210    LET L=0:LET A=120:LET V=1:LET M=32500:LET N=16500
220    LET G=0.001:LET Z=1.8
230      PRINT INT(L+0.5),A,V*3600,M-N,"K  ";
240   INPUT K
250   LET T=10
260   IF K<0 THEN GOTO 630
270   IF K=0 THEN GOTO 320
280   IF K<8 THEN 300
290   IF K<=200 THEN GOTO 320
300   PRINT TAB(9);"INVALID BURN RATE - RETRY";TAB(57);"K  ";
310   INPUT K:  GOTO 260
320   IF M-N-0.001 <0 THEN GOTO 440
330   IF T<0.001 THEN GOTO 230
340   S=T
350   IF N +S*K <=M THEN GOTO 370
360   S=(M-N) /K
370   I0 =1
380   GOTO 900
390   IF I <=0 THEN GOTO 720
400   IF V <=0 THEN GOTO 420
410   IF J <0 THEN GOTO 780
420   I0=1
430   GOTO 690
440   REM
450   PRINT
460   PRINT "FUEL OUT AT " ;L;" SECS"
470   S=(-V+SQR(V*V+2*A*G))/G
480   V =V+G*S
490   L=L+S
500   REM
510   PRINT
520   PRINT TAB(10);"----------- 'THE EAGLE HAS LANDED!' -----------"
530   PRINT
540   PRINT TAB(10);"ON THE MOON AT ";L;" SECS"
550   W=3600*V
560   PRINT TAB(10);"IMPACT VELOCITY OF ";W;" MPH"
570   PRINT TAB(10);"FUEL LEFT "; M-N;" LBS"
580 IF W>=60 THEN GOSUB 1080 :  GOTO 630
590 IF W>=25 THEN WWW=INT((W/5))-4 : GOSUB 2140 : GOTO 630
600 ON INT(W+0.5)+1 GOSUB 1340,1400,1440,1470,1500,1530,1560,1590,1620,1650,1680,1710,1740,1770,1800,1830,1860,1890,1920,1950,1980,2010,2040,2070,2100,2100
610     GOTO 630
620     PRINT "<ON> STMT ERROR"
630     REM
640   PRINT TAB(20);"TRY AGAIN?  (Y OR N)  ";
650  INPUT R$
660   IF LEFT$(R$,1)="Y" THEN GOTO 170
670   IF LEFT$(R$,1)<>"N" THEN:PRINT TAB(20);"HOUSTON:  'I DIDN'T COPY.  REPEAT'" : GOTO 630
680   PRINT:PRINT:PRINT TAB(10);"THIS IS HOUSTON SIGNING OFF":END
690   L=L+S:T=T-S:M=M-S*K:A=I:V=J
700   IF I0=1 THEN GOTO 320
710   IF I0=3 THEN GOTO 870
720   IF S<0.005000001 THEN GOTO 500
730 TEMP1=(G-Z*K/M)
740 TEMP=V*V+2*A*(TEMP1)
750 S=2*A/(V+SQR(TEMP))
760   I0=2
770   GOTO 900
780   W=(1-M*G/(Z*K))/2
790 TEMP1=(W*W+V/Z)
800 TEMPT=(W+SQR(TEMP1))
810 TEMPT2=(Z*K*(TEMPT))
820 S=M*V/TEMPT2+0.05
830   I0=3
840   GOTO 900
850   IF I<=0 THEN GOTO 720
860   GOTO 690
870   IF J>=0 THEN GOTO 320
880   IF V<=0 THEN GOTO 320
890   GOTO 780
900   Q=S*K/M
910   IF Q<=0 THEN GOTO 1050
920 TEMP=(1/4+Q*(1/5))
930 TEMP1=(1/3+Q*(TEMP))
940 TEMP2=(1/2+Q*(TEMP1))
950 TEMP3=(1+Q*(TEMP2))
960 J=V+G*S+Z*(-Q*(TEMP3))
970 TEMP=(1/20 +Q*(1/30))
980 TEMP1=(1/6+Q*(1/12+Q*TEMP))
990 TEMP2=(1/2+Q*(TEMP1))
1000 TEMP3=(Q*(TEMP2))
1010 I=A-G*S*S/2-V*S+Z*S*(TEMP3)
1020   IF I0=1 THEN GOTO 390
1030   IF I0=2 THEN GOTO 690
1040    IF I0=3 THEN GOTO 850
1050   J=V+G*S
1060  I=A-G*S*S/2-V*S
1070  GOTO 1020
1080    REM-----  W>=60-----
1090    PRINT TAB(10);"SORRY, THERE WERE NO SURVIVORS"
1100    PRINT TAB(10);"IN FACT, YOU BLASTED A NEW LUNAR CRATER ";
1110    PRINT W*0.277777;" FEET DEEP!"
1120    RETURN
1130    REM----- 25<=W<30
1140    PRINT TAB(10);"UNSAFE LANDING WITH MINOR CRAFT DAMAGE"
1150    RETURN
1160    REM----- 30<=W<35
1170    PRINT TAB(10);"LANDING GEAR DAMAGED"
1180    RETURN
1190    REM----- 35<=W<40
1200    PRINT TAB(10);"DAMAGE SIGNIFICANT. UNABLE TO TAKE OFF"
1210    RETURN
1220    REM----- 40<=W<45
1230    PRINT TAB(10);"MAJOR DAMAGE.  CREW INJURED."
1240    RETURN
1250    REM----- 45<=W<50
1260    PRINT TAB(10);"IMPACT SEVERE.  CRAFT DESTROYED."
1270    RETURN
1280    REM----- 50<=W<55
1290    PRINT TAB(10);"LANDING CRAFT DISINTEGRATED ON IMPACT."
1300    RETURN
1310    REM----- 55<=W<60
1320    PRINT TAB(10);"TOTAL LOSS"
1330    RETURN
1340    REM----- 0<=W<.5
1350    PRINT CHR$(7);TAB(10);"----------------------------------------"
1360    PRINT TAB(10);"     P   E   R   F   E   C   T   !"
1370    PRINT CHR$(7);TAB(10);"----------------------------------------"
1380    PRINT
1390    RETURN
1400    REM----- .5<=W<1.5
1410    PRINT TAB(10);"G R E A T       L A N D I N G"
1420    PRINT
1430    RETURN
1440    REM----- 1.5<=W<2.5
1450    PRINT TAB(10);"EXCELLENT LANDING, CAPTAIN"
1460    RETURN
1470    REM----- 2.5<=W<3.5
1480    PRINT TAB(10);"ONE OF THE BEST LANDINGS I'VE SEEN"
1490    RETURN
1500    REM----- 3.5<=W<4.5
1510    PRINT TAB(10);"VERY GOOD, SIR.  ALMOST THERE"
1520    RETURN
1530    REM----- 4.5<=W<5.5
1540    PRINT TAB(10);"GOOD LANDING"
1550    RETURN
1560    REM----- 5.5<=W<6.5
1570    PRINT TAB(10);"SOFT LANDING"
1580    RETURN
1590    REM----- 6.5<=W<7.5
1600    PRINT TAB(10);"SOFT LANDING BUT THE CREW IS SHAKEN"
1610    RETURN
1620    REM----- 7.5<=W<8.5
1630    PRINT TAB(10);"OK LANDING BUT HOUSTON IS COMPLAINING"
1640    RETURN
1650    REM----- 8.5<=W<9.5
1660    PRINT TAB(10);"FENDER BENDER"
1670    RETURN
1680    REM----- 9.5<=W<10.5
1690    PRINT TAB(10);"ARE YOUR HANDS SWEATING?"
1700    RETURN
1710    REM----- 10.5<=W<11.5
1720    PRINT TAB(10);"WHEW. . .  THAT WAS CLOSE!"
1730    RETURN
1740    REM----- 11.5<=W<12.5
1750    PRINT TAB(10);"GETTING BETTER"
1760    RETURN
1770    REM----- 12.5<=W<13.5
1780    PRINT TAB(10);"IMPACT VELOCITY APPROACHING SAFETY LIMITS"
1790    RETURN
1800    REM----- 13.5<=W<14.5
1810    PRINT TAB(10);"NEIL ARMSTRONG COULD DO BETTER"
1820    RETURN
1830    REM----- 14.5<=W<15.5
1840    PRINT TAB(10);"ANY FASTER AND THE PRESIDENT WON'T TELEPHONE YOU"
1850    RETURN
1860    REM----- 15.5<=W<16.5
1870    PRINT TAB(10);"HOUSTON: 'ARE YOU ALL RIGHT UP THERE?!?'"
1880    RETURN
1890    REM----- 16.5<=W<17.5
1900    PRINT TAB(10);"AT LEAST YOU MADE IT"
1910    RETURN
1920    REM----- 17.5<=W<18.5
1930    PRINT TAB(10);"WELL, THAT'S BETTER THAN THE RUSSIANS DID"
1940    RETURN
1950    REM----- 18.5<=W<19.5
1960    PRINT TAB(10);"POSSIBLE DAMAGE TO CRAFT"
1970    RETURN
1980    REM----- 19.5<=W<20.5
1990    PRINT TAB(10);"HOUSTON IS REVOKING YOUR PILOTS LICENSE"
2000    RETURN
2010    REM----- 20.5<=W<21.5
2020    PRINT TAB(10);"AFTER THAT IMPACT, THE LANDER WILL NEED AN OVERHAUL!"
2030    RETURN
2040    REM----- 21.5<=W<22.5
2050    PRINT TAB(10);"SCIENTIFIC PAYLOAD PACKAGE DAMAGED"
2060    RETURN
2070    REM----- 22.5<=W<23.5
2080    PRINT TAB(10);"EXTERNAL ANTENNA DID NOT SURVIVE THE IMPACT"
2090    RETURN
2100    REM----- 23.5<=W<24.5
2110    PRINT TAB(10);"EVA WILL REVEAL DAMAGE TO LANDING GEAR"
2120    RETURN
2130    PRINT:PRINT
2140    REM-----ON GOSUB
2150    ON WWW GOSUB 1130,1160,1190,1220,1250,1280,1310
2160    RETURN
```

## LOAN.BAS

```bas
10 REM   LOAN AMORTIZATION PROGRAM
20 REM   WRITTEN BY BOB SIMPSON , CARDIFF CA.
30 PRINT "* * * * LOAN AMORTIZATION PROGRAM * * * * "
40 PRINT
50 PRINT "TO USE THIS PROGRAM, ENTER THE LOAN DATA AS EACH FACTOR"
60 PRINT "IS REQUESTED. THE COMPUTER WILL REPEAT THE PERTINANT"
70 PRINT "INFORMATION AND GIVE THE PERIODIC PAYMENT.  YOU WILL THEN BE ASKED"
80 PRINT "IF YOU WANT THE PAYMENT SCHEDULE.  A 'Y' ANSWER WILL PRINT THE FULL"
90 PRINT "TABULATION, PAYMENT BY PAYMENT WITH ALL PERIODIC AND CUMULATIVE TOTALS"
100 PRINT
110 PRINT "YOU WILL THEN BE GIVEN A CHANCE TO MODIFY PARAMETERS.  IF YOU WANT"
120 PRINT "TO RECALCULATE A LOAN CHANGING ONLY THE INTEREST RATE, TYPE"
130 PRINT "'I'.  AFTER ENTERING THE NEW INTEREST RATE, ANSWER 'C' TO CONTINUE."
140 PRINT "IF OTHER PARAMETERS NEED CHANGING, SPECIFY THEM BEFORE THE 'C'."
150 PRINT "IF 'N' IS ANSWERED TO THE 'CHANGE PARAMETERS?' PROMPT, THE PROGRAM"
160 PRINT "WILL START FROM THE BEGINNING."
170 PRINT
180 PRINT
190 REM
200 GOSUB 540
210 GOSUB 570
220 GOSUB 600
230 GOSUB 630
240 D=N*Y
250 R=R1/(100*N)
260 IF R<>0 THEN 290
270 A1=P/D
280 GOTO 300
290 A1=(R/(1-(1+R)^(-D)))*P
300 A=INT(A1*100+0.5)/100
310 PRINT "PAYMENT IS $";A;","; N;"TIMES PER YEAR FOR ";Y;"YEARS"
320 PRINT "FOR A LOAN OF $";P;"AT ";R1;"% INTEREST"
330 PRINT
340 PRINT "PAYMENT SCHEDULE";
350 INPUT Q$
360 IF Q$="Y" THEN 660
370 PRINT
380 PRINT "CHANGE PARAMETER  N(O), I(NT), Y(EARS), P(AYMENTS), L(OAN), OR C(ONTINUE)"
390 INPUT Q$
400 IF Q$="N" THEN 200
410 IF Q$="I" THEN 460
420 IF Q$="P" THEN 480
430 IF Q$="Y" THEN 500
440 IF Q$="L" THEN 520
450 GOTO 240
460 GOSUB 540
470 GOTO 380
480 GOSUB 570
490 GOTO 380
500 GOSUB 600
510 GOTO 380
520 GOSUB 630
530 GOTO 380
540 PRINT "INTEREST RATE IN %";
550 INPUT R1
560 RETURN
570 PRINT "NUMBER OF PAYMENTS PER YEAR";
580 INPUT N
590 RETURN
600 PRINT "HOW MANY YEARS";
610 INPUT Y
620 RETURN
630 PRINT "LOAN IN $";
640 INPUT P
650 RETURN
660 B=P
670 P1=0:P2=0
680 I1=0:I2=0
690 PRINT "PMNT   YR  PER    PMNT       TOTAL    PMNT       TOTAL";
700 PRINT "     BAL"
710 PRINT " NO.";TAB(19);"INT         INT     PRIN       PRIN      DUE"
720 PRINT "-----------------------------------------------------------";
730 PRINT "------"
740 FOR T=1 TO D
750 IF T=0 THEN 810
760 I1=INT(R*B*100+0.5)/100
770 I2=I2+I1
780 P1=A-I1
790 P2=P2+P1
800 B=B-P1
810 Y1=INT(T/N)
820 T1=T-Y1*N
830 PRINT T;TAB(8);Y1;TAB(13);T1;TAB(19);I1;TAB(29);I2;TAB(39);P1;
840 PRINT TAB(49);P2;TAB(59);B
850 NEXT T
860 PRINT "PAYMENTS TOTAL $";D*A
870 GOTO 370
880 END
```

## MISSLE.BAS

```bas
100 CLS
110 A$=STRING$(80,205)
120 PRINT A$
130 PRINT TAB(27)"MISSLE STRIKE  #2011-A.BAS"
140 COLOR 23,0,0
150 PRINT :PRINT :PRINT TAB(38)"IPCO"
160 COLOR 7,0,0
170 PRINT :PRINT :PRINT TAB(27)"INTERNATIONAL PC OWNERS"
180 PRINT :PRINT :PRINT TAB(19)"p.o. box 10426, pittsburgh, pennsylvania 15234"
190 PRINT A$
200 PRINT :PRINT :PRINT :PRINT :PRINT
210 PRINT TAB(28)"PRESS ANY KEY TO CONTINUE"
220 A$=INKEY$:IF A$="" THEN 220
230 CLS
240 Z=0:GOSUB 580
250 CLS:M=1:W=1:LOCATE 12,30:PRINT "WAVE "W:F=150:FOR L=1 TO 500:NEXT
260 CLS:I=1:KEY OFF:B=45:H=23
270 IF W>=3 THEN B$="()" ELSE B$="*"
280 ON ERROR GOTO 260
290 LOCATE 25,3:PRINT "SCORE "Z
300 X=INT(RND(1)*50):IF X>25 THEN X=45 ELSE X=35
310 LOCATE H,B:M$=STRING$(3,223):PRINT M$
320 I=I+1:Y=INT(RND(1)*50):IF Y>25 THEN X=X-1 ELSE X=X+1:IF X<10 THEN X=11:IF X>70 THEN X=69
330 S=X:IF I=24 THEN 480
340 LOCATE I,S:PRINT B$:FOR J=1 TO F:NEXT:IF I=H AND S=B OR I=H AND S=B+1 OR I=H AND S=B+2 THEN 430
350 A$=INKEY$
360 IF A$=CHR$(75) THEN 390
370 IF A$=CHR$(76) THEN 410
380 GOTO 320
390 B=B-1:LOCATE H,B:PRINT M$" "
400 GOTO 320
410 LOCATE H,B:PRINT " ":B=B+1:LOCATE H,B::PRINT M$
420 GOTO 320
430 LOCATE H,B:PRINT "< >":PRINT CHR$(7):FOR D=1 TO 20:NEXT
440 IF B$="()" THEN 460
450 GOTO 470
460 Z=Z+50:P=P+5
470 Z=Z+50
480 M=M+1:IF M=20 THEN 500
490 GOTO 260
500 P=P+10:IF Z/50>=P THEN 540
510 CLS:LOCATE 25,1:PRINT "SCORE "Z:LOCATE 12,25:INPUT "WOULD YOU LIKE TO PLAY AGAIN ";V$
520 IF V$="Y" THEN 240
530 END
540 W=W+1:LOCATE 13,30:PRINT "WAVE "W:FOR U=1 TO 1000:NEXT
550 V=0:M=0:F=F-50
560 IF F<=50 THEN F=25
570 GOTO 260
580 CLS:LOCATE 15,25:PRINT "  MISSLE  STRIKE"
590 LOCATE 16,25:PRINT "  *************"
600 LOCATE 17,25:PRINT "        BY"
610 LOCATE 18,25:PRINT "  John McCallon"
620 LOCATE 22,1:PRINT "    THE EARTH IS BEING ATTACKED BY MISSLES FROM AN ANOTHER"
630 PRINT "    PLANET. YOU ARE TO USE EARTH'S ONLY DEFENCE AGAINST THE ALIEN "
640 PRINT "    MISSLES. YOU ARE EARTH'S LAST HOPE, USE YOUR ABM'S WELL."
650 PRINT:PRINT
660 PRINT "                   POINT VALUES"
670 PRINT "                     *      50"
680 PRINT "                     ()    100"
690 PRINT :PRINT
700 PRINT "                     < >   DESTROYED MISSLE"
710 PRINT
720 PRINT "      YOU MUST DESTROY 10 OUT THE 20 MISSLES FIRED AT YOU."
730 PRINT "          (USE 'K` FOR LEFT, 'L` FOR MOVING RIGHT)"
740 PRINT "                  PRESS ANY KEY TO BEGIN"
750 C$=INKEY$:IF C$="" THEN RETURN
760 RETURN
```

## SECRETNO.BAS

```bas
100 CLS
110 A$=STRING$(80,205)
120 PRINT A$
130 PRINT TAB(33)"SECRET NUMBER"
140 COLOR 23,0,0
150 COLOR 7,0,0
160 PRINT :PRINT :PRINT TAB(25)"PERSONAL COMPUTER OWNERS GROUP"
170 PRINT :PRINT :PRINT TAB(19)"p.o.box 10426, pittsburgh, pennsylvania 15234"
180 PRINT A$
190 PRINT :PRINT :PRINT :PRINT :PRINT
200 PRINT TAB(28)"PRESS ANY KEY TO CONTINUE"
210 A$=INKEY$:IF A$="" THEN 210
220 CLS
230 A$=STRING$(80,176)
240 B$=STRING$(80,205)
250 C$=STRING$(80,2)
260 PRINT A$
270 PRINT B$
280 PRINT TAB(33)"SECRET NUMBER"
290 PRINT
300 PRINT TAB(18)"TRANSLATED BY IPCO TO IBM BASICA FOR THE PC"
310 PRINT:PRINT:PRINT
320 PRINT "PRESS ANY KEY TO CONTINUE"
330 A$=INKEY$:IF A$="" THEN 330
340 CLS
350 PRINT B$
360 PRINT "GREETINGS!  THIS IS THE GAME OF SECRET NUMBERS."
370 PRINT B$
380 PRINT
390 INPUT "BEFORE WE START, PLEASE TELL ME YOUR NAME";NAM$
400 CLS
410 PRINT "O.K. ";NAM$;" THESE ARE THE RULES..."
420 PRINT B$
430 PRINT :PRINT "FIRST YOUR MUST ENTER A LIMIT...."
440 PRINT :PRINT "SECOND, I WILL THINK OF A SECRET NUMBER BETWEEN 1 AND YOUR LIMIT."
450 PRINT :PRINT "THEN ENTER YOUR GUESS AND I WILL TELL YOU IF IT IS HIGH OR LOW."
460 PRINT :PRINT"THEN YOU CAN KEEP GUESSING UNTIL YOU GET THE SECRET NUMBER."
470 PRINT B$
480 PRINT "PRESS ANY KEY TO CONTINUE"
490 A$=INKEY$:IF A$="" THEN 490
500 CLS
510 RANDOMIZE
520 MSG1$="SECRET NUMBER IS"
530 MSG2$="YOUR NUMBER"
540 CLS
550 INPUT "ENTER LIMIT ";LIMIT
560 FOR X=1 TO 20
570 IF LIMIT<2^X THEN 600
580 NEXT X
590 P
600 PRINT "YOU SHOULD GUESS THE SECRET NUMBER IN NO MORE THAN ";X;"TRIES."
610 SECRET=INT(LIMIT*RND)+1
620 PRINT
630 N=N+1
640 PRINT
650 INPUT "GUESS: " ;GUESS
660 IF SECRET=GUESS THEN 730
670 IF SECRET<GUESS THEN 690
680 IF SECRET>GUESS THEN 710
690 PRINT MSG1$;" LESS THAN ";MSG2$
700 GOTO 630
710 PRINT MSG1$;" LARGER THAN ";MSG2$
720 GOTO 630
730 PRINT "YOU GUESSED THE SECRET MUMBER IN ";N;" TRIES"
740 IF N>X THEN 910
750 Y=110*(2^(1/12))^(4*T)
760 INPUT "WANT TO PLAY AGAIN (Y OR N)";D$
770 IF D$<>"Y" THEN 870
780 N=0
790 PRINT
800 PRINT "ARE YOU PLAYING AGAIN ";NAM$;"?"
810 INPUT "ENTER Y OR N";D$
820 IF D$="N" THEN 350
830 CLS
840 PRINT "LIMIT IS ";LIMIT;" WANT TO SET A NEW LIMIT?"
850 INPUT "ENTER Y OR N";D$
860 IF D$="Y" THEN 540 ELSE 610
870 CLS
880 PRINT B$
890 PRINT TAB(26)"THANK YOU FOR THE GAME..."
900 END
910 PRINT :PRINT :PRINT "THAT'S NOT A VERY GOOD SCORE AT ALL ";NAM$;"!!!"
920 FOR DEL=1 TO 1500
930 NEXT DEL
940 PRINT "PERHAPS YOU WILL IMPROVE WITH PRACTISE."
950 GOTO 760
960 CLS
```

## STARS.BAS

```bas
0 REM SHOOTING STARS BY TBX
10 PRINT "INSTRUCTIONS (1=YES, 0=NO)";
20 INPUT Z
30 IF Z=1 THEN GOSUB 900
100 A=-1: 'START LOOP
101 B=-1
102 C=-1
103 D=-1
104 E=1
105 F=-1
106 G=-1
107 H=-1
108 I=-1
109 J=0
148 PRINT
149 IF INT(J/3)*3=J THEN PRINT ""
150 IF A=1 THEN PRINT "* ";
151 IF A=-1 THEN PRINT "- ";
155 IF B=1 THEN PRINT "* ";
156 IF B=-1 THEN PRINT "- ";
160 IF C=1 THEN PRINT "* ";J
161 IF C=-1 THEN PRINT "- ";J
165 IF D=1 THEN PRINT "* ";
166 IF D=-1 THEN PRINT "- ";
170 IF E=1 THEN PRINT "* ";
171 IF E=-1 THEN PRINT "- ";
175 IF F=1 THEN PRINT "* "
176 IF F=-1 THEN PRINT "- "
180 IF G=1 THEN PRINT "* ";
181 IF G=-1 THEN PRINT "- ";
185 IF H=1 THEN PRINT "* ";
186 IF H=-1 THEN PRINT "- ";
190 IF I=1 THEN PRINT "*     ";
191 IF I=-1 THEN PRINT "-     ";
250 IF E=1 THEN 390
260 IF A+B+C+D+F+G+H+I=8 THEN 809
270 IF A+B+C+D+F+G+H+I=-8 THEN 820
390 PRINT "SHOOT";
391 INPUT Y
395 ON Y GOTO 509,519,529,539,549,559,569,579,589
499 PRINT "YOU GAVE UP ON ";J;" TRYS !!!!"
500 GOTO 830
509 IF A=-1 THEN 800
510 A=-A
511 B=-B
512 D=-D
513 E=-E
516 GOTO 597
519 IF B=-1 THEN 800
520 A=-A
521 B=-B
522 C=-C
526 GOTO 597
529 IF C=-1 THEN 800
530 B=-B
531 C=-C
532 E=-E
533 F=-F
536 GOTO 597
539 IF D=-1 THEN 800
540 A=-A:D=-D:G=-G
546 GOTO 597
549 IF E=-1 THEN 800
550 B=-B:D=-D:E=-E:F=-F:H=-H
556 GOTO 597
559 IF F=-1 THEN 800
560 C=-C:F=-F:I=-I
566 GOTO 597
569 IF G=-1 THEN 800
570 D=-D:E=-E:G=-G:H=-H
576 GOTO 597
579 IF H=-1 THEN 800
580 G=-G:H=-H:I=-I
586 GOTO 597
589 IF I=-1 THEN 800
590 E=-E:F=-F:H=-H:I=-I
597 J=J+1
598 GOTO 148
800 PRINT "HEY ! ! YOU CAN ONLY SHOOT"
801 PRINT "STARS, NOT BLACK HOLES."
802 GOTO 390
809 PRINT
810 PRINT "YOU WIN WITH ";J;" SHOOTS"
815 GOTO 830
820 PRINT "YOU LOST WITH ";J;" TRYS."
830 PRINT
831 PRINT "TRY AGAIN (1=YES, 0=NO)";
832 INPUT X
833 IF X=1 THEN 100
834 IF X=0 THEN 890
835 PRINT "FOLLOW INSTRUCTIONS "
836 GOTO 831
890 PRINT "HOPE YOU HAD FUN"
895 REM
899 REM INSTRUCTION SUBROUTINE
900 PRINT"";
901 PRINT "* * *  THERE ARE STARS"
902 PRINT "- - -  AND BLACK HOLES"
903 PRINT "* * *  IN THE UNIVERSE"
904 PRINT
905 PRINT "1 2 3  YOU SHOOT A STAR *"
906 PRINT "4 5 6  NOT A BLACK HOLE -"
907 PRINT "7 8 9  BY TYPING ITS NUMBER"
908 PRINT
910 PRINT "EACH STAR IS IN A GALAXY."
911 PRINT "WHEN YOU SHOOT A STAR, EVERY-"
912 PRINT "THING IN ITS GALAXY CHANGES."
913 PRINT "ALL STARS BECOME BLACK HOLES,"
914 PRINT "ALL BLACK HOLES BECOME STARS."
915 PRINT "TYPE '2' TO GO ON."
916 INPUT Z
920 PRINT "GALAXY MAPS:"
921 PRINT
923 PRINT "1 * -   * 2 *   - * 3"
924 PRINT "* * -   - - -   - * *"
925 PRINT "- - -   - - -   - - -"
926 PRINT
927 PRINT "* - -   - * -   - - *"
928 PRINT "4 - -   * 5 *   - - 6"
929 PRINT "* - -   - * -   - - *"
930 PRINT
931 PRINT "- - -   - - -   - - -"
932 PRINT "* * -   - - -   - * *"
933 PRINT "7 * -   * 8 *   - * 9"
934 PRINT
935 PRINT "TYPE '3' TO GO ON";
936 INPUT Z
940 PRINT "PATTERNS TO LOOK FOR:"
941 PRINT
942 PRINT "START    WIN     LOSE"
943 PRINT
945 PRINT "- - -   * * *   - - -"
946 PRINT "- * -   * - *   - - -"
947 PRINT "- - -   * * *   - - -"
948 PRINT
949 PRINT "TYPE '0' TO END GAME"
950 PRINT
951 PRINT "TYPE '4' TO GO ON";
952 INPUT Z
999 RETURN
1000 END
```

## STORY.BAS

```bas
10       REM---------------------------------------------------
20       REM             s  t  o  r  y
30       REM---------------------------------------------------
40       REM                     june 16, 1977
50 KEY OFF: CLS: PRINT
60       PRINT TAB(15);"S   t   o   r   y"
70       PRINT:PRINT:PRINT
80    PRINT
90    DIM A$(11),B$(5),C$(10)
100    PRINT "First, we will need to know your name ";
110    INPUT NAM$
120     PRINT "thanx, ";NAM$
130      RANDOMIZE
140    PRINT CHR$(7);TAB(12);"O.K.  --  We're going to print some stories"
150    PRINT TAB(12);"together.  You supply the words, I supply the plot."
160 PRINT TAB(12);"Type the number of the one you would like ";
170 INPUT N
180   REM
190 PRINT TAB(12);"First I need eleven adjectives.  Adjectives modify":PRINT TAB(12);"a noun, like: Red, Dirty, Large, etc."
200 FOR X=1 TO 11:PRINT TAB(15);"Adjective #";X;" ";:INPUT A$(X):NEXT X:PRINT:PRINT:PRINT TAB(12);"Thanks"
210 PRINT TAB(12);"Now I need five adverbs.  They modify verbs and end":PRINT TAB(12);"in 'ly', like: Slowly, Greedily."
220 FOR X=1 TO 5:PRINT TAB(15);"Adverb #";X;" ";:INPUT B$(X):NEXT X:PRINT:PRINT TAB(12);"Thank you, ";NAM$
230 PRINT:PRINT TAB(12);"Next I'll need 10 nouns!  These are names of things, such":PRINT TAB(12);"as: Insect, Box, Tree, Banana"
240 FOR X=1 TO 10:PRINT TAB(15);"Noun #";X;" ";:INPUT C$(X):NEXT X
250 PRINT:PRINT TAB(12);"You're doing great, ";NAM$;", there's not much more."
260 PRINT:PRINT TAB(12);"How about two first names of men.":PRINT TAB(15);"The first man's name ";:INPUT D$:PRINT TAB(15);"And now the second's ";:INPUT E$
270 PRINT:PRINT TAB(12);"The first name of a woman ";:INPUT F$:PRINT:PRINT TAB(12);"And someone's last name ";:INPUT G$
280 PRINT:PRINT TAB(12);"A geographical location ";:INPUT H$:PRINT:PRINT TAB(12);"A kind of liquid ";:INPUT I$
290 PRINT:PRINT TAB(12);"And finally, an exclamatory word or two ";:INPUT J$
300 PRINT:PRINT TAB(12);"Well done, ";NAM$;", now. . ."
310    REM
320    PRINT
330    PRINT TAB(12);"Would you like a newspaper ad (1),"
340    PRINT TAB(12);"               a western (2),"
350    PRINT TAB(12);"               a story about the army (3),"
360    PRINT TAB(12);"            or a waterbed (4)."
365 INPUT N
370 REM
380 ON N GOSUB 460,650,910,1180
390 PRINT TAB(15);"Want another story ";NAM$;" ";
400 INPUT QQ$
410 IF LEFT$(QQ$,1)<>"Y" AND LEFT$(QQ$,1)<>"y" THEN PRINT:PRINT:PRINT:PRINT TAB(15);"goodbye "; NAM$:END
420 PRINT TAB(15);"Want to use the same words ";
430 INPUT QQ$
440 IF LEFT$(QQ$,1)<>"Y" AND LEFT$(QQ$,1)<>"y" THEN GOTO 180
450 GOTO 310
460 REM
470 PRINT
480 PRINT
490 PRINT
500 PRINT
510 PRINT TAB(15);"DAILY GRUNT CLASSIFIEDS"
520 PRINT "FOR SALE: 1957 Sedan.  This ";A$(1);" car is in a ";A$(2)
530 PRINT "condition.  It was formerly owned by a ";A$(3);" school teacher"
540 PRINT "who always drove it ";B$(1);".  There is a ";A$(4);" ";C$(1);" in"
550 PRINT "the back seat.  It has a chrome ";C$(2);" on the hood, a ";A$(5)
560 PRINT "paint job, ";A$(6);" tires and the back opens into a ";A$(7)
570 PRINT C$(3);".  Will consider taking a slightly used ";C$(4);" in trade."
580 PRINT:PRINT
590 PRINT "LOST:  In the vicinity of ";H$;", a ";A$(8);" french poodle with"
600 PRINT A$(9);" hair and a ";A$(10);" tail.  It answers to the name of"
610 PRINT F$;".  When last seen it was carrying a ";C$(5);" in its mouth."
620 PRINT "A ";A$(11);" reward is offered."
630 PRINT :PRINT :PRINT
640      RETURN
650 REM
660 PRINT:PRINT:PRINT:PRINT
670 PRINT TAB(12);"AN ADULT WESTERN"
680 PRINT
690 PRINT "Tex ";G$;", the Marshall of ";D$;" City rode into town.  He sat"
700 PRINT B$(2);" in the saddle, ready for trouble.  He knew that his ";A$(1)
710 PRINT "enemy, ";E$;" the Kid was in town.  The Kid was in love with Tex's"
720 PRINT "horse, ";F$;".  Suddenly, the Kid came out of the ";A$(7);" Nugget"
730 PRINT "Saloon.  "
740 PRINT
750 PRINT "'DRAW TEX', he yelled ";B$(3)
760 PRINT
770 PRINT "Tex reached for his ";C$(4);", but before he could get it out of"
780 PRINT "his ";C$(5);" the Kid fired, hitting Tex in the ";C$(6);" and"
790 PRINT "the ";C$(7);"."
800 PRINT
810 PRINT "As Tex fell he pulled out his own ";C$(8);" and shot the Kid ";
820 PRINT INT(50*RND+3)
830 PRINT "times in the ";C$(9);".  The Kid dropped in a pool of ";I$
840 PRINT
850 PRINT "'";J$;"', Tex said.  'I hated to do it, but he was on the wrong"
860 PRINT "side of the ";C$(10);"."
870  PRINT
880  PRINT
890 PRINT
900     RETURN
910 REM
920 PRINT :PRINT:PRINT:PRINT
930 PRINT "If you plan on joining the army, here are some ";A$(11);" hints"
940 PRINT "that will help you become a ";A$(10);" soldier."
950 PRINT
960 PRINT "The army is made up of Officers, Non-coms, and ";C$(1);"s."
970 PRINT "You can recognize an Officer by the ";C$(2);"s on his shoulders"
980 PRINT "and the funny-looking ";C$(3);"s on his cap.  When you address"
990 PRINT "an Officer, always say ";C$(4);" and say it ";B$(5);".  If you get"
1000 PRINT "a ";A$(9);" haircut, keep your ";C$(5);"s shined, and see that"
1010 PRINT "your ";C$(6);" is clean at all times, you will be a credit to the "
1020 PRINT "slogan:"
1030 PRINT
1040 PRINT "       The Army Builds Better ";C$(7);"s!"
1050 PRINT
1060 PRINT "At roll call, when the ";A$(8);" sergeant calls your name, shout"
1070 PRINT "'";J$;"' loud and clear."
1080 PRINT
1090 PRINT "You will become familiar with weapons like the .30 calibre ";C$(8)
1100 PRINT "and the automatic ";C$(9);"."
1110 PRINT
1120 PRINT "Follow this advice and you may win the. . ."
1130 PRINT
1140 PRINT "******** ";A$(7);" Conduct ";C$(10);" ********"
1150 PRINT
1160 PRINT
1170     RETURN
1180 REM
1190 PRINT
1200 PRINT "Bust-a-Button and Duck Dept. Store"
1210 PRINT "Dix Hills, New York"
1220 PRINT
1230 PRINT
1240 PRINT "Dear Sirs,"
1250 PRINT
1260 PRINT "    Last week I purchased a ";A$(2);" contour water bed in your"
1270 PRINT "store.  I got it especially for my ";A$(4);" husband who sleeps"
1280 PRINT "very ";B$(1);" and says that ";A$(6);" water beds that have"
1290 PRINT C$(1);"s in them make his ";C$(3);" ache.  When the bed arrived "
1300 PRINT "my husband tested it ";B$(2);" and said the ";A$(8);" ";C$(5)
1310 PRINT "was bent and kept pressing into his ";C$(6);".  He says this"
1320 PRINT "could lead to a ";A$(10);" condition of the ";C$(8);"."
1330 PRINT
1340 PRINT "    I would like to exchange this ";A$(9);" bed for one that"
1350 PRINT "will allow my husband to sleep ";B$(4);" and won't make his"
1360 PRINT C$(10);" sore."
1370 PRINT
1380 PRINT
1390 PRINT TAB(25);"Yours ";B$(5);","
1400 PRINT TAB(25);F$;" ";G$
1410 PRINT
1420 PRINT
1430     RETURN
```

## STRIKE9.BAS

```bas
90 	DIM A(9),D(4),U(9)
110 PRINT
150 PRINT
160 PRINT
170 PRINT "DO YOU NEED INSTRUCTIONS (YES/NO?)"
180 INPUT R$
185 RANDOMIZE
190 IF LEFT$(R$,1) = "N" THEN 340
200 IF LEFT$(R$,1) <> "Y" THEN 170
210 PRINT "BOARD WITH 9 NOS. : 1 2 3 4 5 6 7 8 9"
220 PRINT
250 PRINT "YOU WILL BE GIVEN A CHART OF THE NUMBERS YOU HAVE LEFT."
280 PRINT "TAKE OFF, ONE AT A TIME.  THE NUMBERS YOU TAKE OFF"
290 PRINT "MUST ADD UP TO THE ROLL.  YOU WIN BY REMOVING EVERY"
300 PRINT "NUMBER FROM THE BOARD.  YOU LOSE IF YOU CANNOT◘T "
310 PRINT "REMOVE THE NUMBERS WITH THE ROLL YOU HAVE."
320 PRINT
340 PRINT
345 PRINT
350 PRINT "HERE IS THE BOARD:   "
360 REM SET UP THE BOARD
370 FOR B=1 TO 9
380 PRINT B;
390 A(B)=B
400 NEXT B
405 PRINT
410 C=INT(RND*6+1)+INT(RND*6+1)
420 PRINT"YOUR ROLL IS",C
430 T=0
435 J=0
440 FOR X=1 TO 9
445 IF A(X) < 1 THEN 460
446 J=J+1
447 U(J)=A(X)
450 T=T+A(X)
460 NEXT X
465 REM CHECK FOR LOSS
470 IF C>T THEN 950
480 IF C=T THEN 1120
490 FOR K=1 TO J
500 FOR L=1 TO J
510 FOR M=1 TO J
520 FOR N=1 TO J
530 IF N=K THEN 630
540 IF N=L THEN 630
550 IF N=M THEN 630
560 IF M=K THEN 640
570  IF M=L THEN 640
580 IF L=K THEN 650
590 IF C-U(K)=0 THEN 680
600 IF C-U(K)=U(N) THEN 680
610 IF C-U(K)-U(L)=U(N) THEN 680
620 IF C-U(K)-U(L)-U(M)=U(N) THEN 680
630 NEXT N
640 NEXT M
650 NEXT L
660 NEXT K
670 GOTO 950
680 FOR X=1 TO 4
690 D(X)=0
700 NEXT X
710 PRINT"NO. OF NUMBERS TO REMOVE"
720 INPUT E
730 IF INT(E)<>E THEN 760
740 IF E<1 THEN 760
750 IF E>4 THEN 760
755 GOTO 770
760 PRINT"ANSWER 1,2,3, OR 4"
765 GOTO 710
770 PRINT"WHAT  IS THE NUMBER"
780 FOR F=1 TO E
790 INPUT D(F)
800 Q=D(F)
805 IF A(Q) <>0 THEN 825
810 PRINT "YOU REMOVED IT BEFORE, TRY AGAIN"
820 GOTO 710
825 NEXT F
830 IF C<>(D(1)+D(2)+D(3)+D(4)) THEN 870
835 FOR F=1 TO E
840 A(D(F))=0
850 NEXT F
860 GOTO 880
870 PRINT "THOSE NUMBERS DONT  ADD UP TO YOUR ROLL, TRY AGAIN"
875 GOTO 710
880 PRINT "THE NUMBERS YOU HAVE LEFT TO REMOVE ARE"
890 FOR B=1 TO 9
900 IF A(B)=0 THEN 920
910 PRINT A(B);
920 NEXT B
930 PRINT
940 GOTO 410
950 PRINT"SORRY, YOU LOST THIS TIME."
960 T=0
970 FOR B=1TO 9
980 IF A(B)=0 THEN 1000
990 T=T+1
1000 NEXT B
1010 PRINT"THERE ARE ";T;"NUMBERS LEFT ON THE BOARD:  "
1020 FOR X=1 TO 9
1030 IF A(X)=0 THEN 1050
1040 PRINT A(X);
1050 NEXT X
1060 PRINT
1070 GOTO 1140
1120 PRINT TAB(15);"*** CONGRATULATIONS ***"
1130 PRINT TAB(25);"* YOU WON *"
1140 PRINT
1150 PRINT
1160 PRINT "PLAY ANOTHER GAME (YES/NO)"
1170 INPUT H$
1180 IF LEFT$(H$,1)="Y" THEN 170
1190 IF LEFT$(H$,1)<>"N" THEN 1160
1200 STOP
1210  END
```

## TRAP.BAS

```bas
5  RANDOMIZE
10 G = 6 : N=100
50 INPUT "DO YOU WANT INSTRUCTIONS (1=YES, 2=N0)";Z
60 IF Z<>1 THEN 180
70 PRINT "I AM THINKING OF A NUMBER BETWEEN 1 AND ";N
80 PRINT "TRY TO GUESS MY NUMBER. ON EACH GUESS, YOU"
90 PRINT "ARE TO ENTER 2 NUMBERS, TRYING TO TRAP MY NUMBER "
100 PRINT "BETWEEN YOUR NUMBERS. I WILL TELL YOU IF YOU "
110 PRINT "TRAPPED MY NUMBER, IF MY NUMBER IS SMALLER,"
120 PRINT "OR IF MY NUMBER IS LARGER THAN YOUR TWO NUMBERS."
130 PRINT "IF YOU THINK YOU KNOW MY NUMBER, INPUT THAT NUMBER"
140 PRINT "FOR BOTH GUESSES. EX- 4,4."
150 PRINT "YOU GET ";G;" GUESSES."
180 X = INT(RND*N)
200 FOR Q = 1 TO G
210 PRINT : PRINT "GUESS #";Q; : INPUT A,B
230 IF A<>B THEN 240
235 IF X = A THEN 400
240 IF A<=B THEN 260
250 GOSUB 360
260 IF X<A THEN 300
270 IF X < = B THEN 320
280 PRINT "MY NUMBER IS LARGER THAN YOUR TRAP NUMBERS."
290 GOTO 330
300 PRINT "MY NUMBER IS SMALLER THAN YOUR TRAP NUMBERS."
310 GOTO 330
320 PRINT "YOU HAVE TRAPPED MY NUMBER."
330 NEXT Q
340 PRINT " SORRY, THAT'S ";G;" GUESSES. MY NUMBER WAS "; X
350 GOTO 410
360 R=A : A=B : B=R
390 RETURN
400 PRINT "YOU GOT IT!!!"
410 INPUT "DO YOU WANT TO PLAY AGAIN (1=YES, 2=NO)" ;F
420 IF F<>2 THEN 180
430 PRINT "GOODBYE"
440 END
```

## ZAP-EM.BAS

```bas
100 CLS
110 A$=STRING$(80,205)
120 PRINT A$
130 PRINT TAB(34)"ZAP`EM  #2007-A"
140 COLOR 23,0,0
150 PRINT :PRINT :PRINT TAB(39)"IPCO"
160 COLOR 7,0,0
170 PRINT :PRINT :PRINT TAB(25)"PERSONAL COMPUTER OWNERS GROUP"
180 PRINT :PRINT :PRINT TAB(19)"p.o. box 10426, pittsburgh, pennsylvania 15234"
190 PRINT A$
200 PRINT :PRINT :PRINT :PRINT :PRINT
210 PRINT TAB(28)"PRESS ANY KEY TO CONTINUE"
220 A$=INKEY$:IF A$="" THEN 220
230 CLS
240 KEY OFF:SCREEN 0,1:COLOR 15,0,0:WIDTH 40:CLS:LOCATE 5,19:PRINT "IBM"
250 LOCATE 7,8 ,0:PRINT "General  utility  programs"
260 COLOR 9 ,0:LOCATE 10,9,0:PRINT CHR$(213)+STRING$(21,205)+CHR$(184)
270 LOCATE 11,9,0:PRINT CHR$(179)+"       ZAP'EM        "+CHR$(179)
280 LOCATE 12,9,0:PRINT CHR$(179)+STRING$(21,32)+CHR$(179)
290 COLOR 9,0:LOCATE 13,9,0:PRINT CHR$(179)+"     Version  1B     "+CHR$(179)
300 BEEP
310 LOCATE 14,9,0:PRINT CHR$(212)+STRING$(21,205)+CHR$(190)
320 COLOR 15,0  :LOCATE 17,7,0:PRINT "FEBRUARY 03,1982   MAV-5-5-K "
330 COLOR 9,0:LOCATE 23,6,0:PRINT "Press space bar to continue..."
340 IF INKEY$ <> "" THEN GOTO 340
350 CMD$ = INKEY$
360 IF CMD$ = "" THEN GOTO 350
370 IF CMD$ = CHR$(27) THEN GOTO 390
380 IF CMD$ <> " " THEN GOTO 350
390 CLS:INPUT "DO YOU WANT INSTRUCTIONS";IN$
400 IF IN$="Y" OR IN$="YES" OR IN$="y" OR IN$="yes" THEN GOSUB 1230
410 REM TRANSFER COMMAND
420 REM **ZAP EM  ***
430 REM **A GAME*****
440 CLS
450 CLEAR ,,21000
460 INPUT "AH....YOUR NAME PLEASE ";NME$:LOCATE 15,1:INPUT "YOUR LAST SCORE ";R
470 DIM A(250),B(250)
480 FUEL=150
490 SHIP=3
500 V=7
510 T1=6
520 X=10 :Y=20
530 SCREEN 0,1
540 COLOR 7,0
550 RANDOMIZE R
560 CLS
570 COLOR 1
580 FOR I=1 TO 23:LOCATE I,1:PRINT CHR$(186):LOCATE I,38:PRINT CHR$(186):NEXT I
590 LOCATE 1,1:PRINT CHR$(201):LOCATE 1,38:PRINT CHR$(187):LOCATE 23,1:PRINT CHR$(200):LOCATE 23,38:PRINT CHR$(188)
600 FOR I=2 TO 37:LOCATE 1,I:PRINT CHR$(205):LOCATE 23,I:PRINT CHR$(205):NEXT I
610 LOCATE 4,1:PRINT CHR$(204):LOCATE 4,38:PRINT CHR$(185):FOR O=2 TO 37:LOCATE 4,O:PRINT CHR$(205):NEXT O
620 KEY(14) ON
630 ON KEY(14) GOSUB 970
640 KEY(11) ON
650 ON KEY(11) GOSUB 980
660 KEY(1) ON
670 ON KEY(1) GOSUB 990
680 REM **TRANSFER COMMAND**
690 LOCATE 2,15:PRINT SHIP
700 IF SHIP=0 OR FUEL=0 THEN FOR H1=1 TO 13:PRINT "GAME OVER":NEXT:GOTO 1330
710 LOCATE X,2:PRINT CHR$(27)
720 RR=INT(RND(2)*10)
730 IF B(RR)=0 THEN A(RR)=INT(RND(3)*16)+5:B(RR)=INT(RND(4)*7 )+30
740 FOR F=1 TO T1
750 IF A(F)=0 OR B(F)=0 THEN 810
760 IF A(F)=X AND B(F)=2 THEN BEEP:SHIP=SHIP-1:LOCATE X,2:PRINT"OUCH":FOR VV=1 TO 300:NEXT VV:LOCATE X,2:PRINT "      ":LOCATE 2,15:PRINT SHIP
770 IF A(F)=0 THEN 810
780 IF B(F)<3 THEN LOCATE A(F),B(F):PRINT " ":B(F)=0:A(F)=0:SCORE=SCORE-150:SOUND 55,1:GOTO 810
790 LOCATE A(F),B(F):PRINT " ":B(F)=B(F)-1
800 COLOR 14:LOCATE A(F),B(F):PRINT CHR$(254):COLOR 7
810 NEXT F
820 Y=Y+  M
830 IF X>21 THEN LOCATE 22,2:PRINT "   ":X=6
840 IF X<6 THEN LOCATE 5,2:PRINT "   ":X=21
850 FUEL=FUEL-1.2
860 IF FUEL<50 THEN V=31
870 COLOR 7:LOCATE 2,24:PRINT "SCORE: ";SCORE
880 COLOR V
890 IF FUEL<1 THEN COLOR 7:LOCATE 3,3:FOR U=1 TO 10:PRINT "GAME OVER":NEXT:GOTO 1330
900 RR=INT(RND(2)*T1)
910 IF B(RR)=0 THEN A(RR)=INT(RND(3)*16)+5:B(RR)=INT(RND(4)*7 )+30:IF A(RR)<6 THEN A(RR)=7
920 IF A(RR)=0 THEN A(RR)=INT(RND(3)*16)+5:B(RR)=INT(RND(4)*7 )+30:IF A(RR)<6 THEN A(RR)=7
930 LOCATE 2,3:PRINT"FUEL: ";INT(FUEL)
940 LOCATE X,2:PRINT CHR$(27)
950 COLOR 7
960 GOTO 620
970 GOSUB 1010:X=X+1        :GOTO 680
980 GOSUB 1010:X=X-1        :GOTO 680
990 GOSUB 1050
1000 GOTO 620
1010 IF X>22 THEN X=2
1020 IF X<2 THEN X=22
1030 LOCATE X,2:PRINT" "
1040 RETURN
1050 LOCATE X,2:PRINT CHR$(27)
1060 COLOR 4
1070 FOR Z=1 TO T1
1080 IF X=A(Z) THEN 1120
1090 NEXT Z
1100 FOR CC=3 TO 24:LOCATE X,CC:PRINT "-":LOCATE X,CC:PRINT " ":NEXT CC
1110 COLOR 7:GOTO 620
1120 FOR LL=3 TO 24
1130 LOCATE X,LL:PRINT "-"
1140 IF LL=B(Z) THEN LOCATE X,LL:PRINT "*":GOSUB 1190:LOCATE X,LL:PRINT " ":A(Z)=0:B(LL)=0:SCORE=SCORE+100:GOTO 680
1150 LOCATE X,LL:PRINT " "
1160 NEXT LL
1170 COLOR 7
1180 GOTO 620
1190 FOR OO=300 TO 315
1200 SOUND OO   ,0.21
1210         NEXT OO
1220 RETURN
1230 CLS
1240 LOCATE 25,1:PRINT"Press any key to start game..."
1250 PRINT"               Zap'em"
1260 PRINT:PRINT"  You are the reverse arrow (It is      supposed to be a fighter with rakish    inverse swept wings)."
1270 PRINT:PRINT"  Your mission is to zap the invading   Horde ships in your path. The Horde is  a huge mass of drone ships that is try- ing to get past the imperial fleet and  into the rich homeworld systems."
1280 PRINT:PRINT"  The Horde ships are unpredictable.    Some are Ghost ships. These will take   more than one hit or will vanish upon   being hit without a score increment."
1290 PRINT:PRINT"  The controls are simple: up and down  cursor control arrow keys for up and    down movement. F1 to fire."
1300 PRINT:PRINT"  Good hunting"
1310 X$=INPUT$(1):IF X$<>"" THEN RETURN
1320 GOTO 1310
1330 '**HIGH SCORE**
1340 CLS
1350 LOCATE 2,2:PRINT"HIGH SCORES...."
1360 LOCATE 3,1:PRINT"_______________________________________"
1370 LOCATE 5,1
1380 DIM NME$(50),SCORE(50)
1390 OPEN "METEOR.DAT" FOR INPUT AS #1
1400 FOR I=1 TO 10
1410 INPUT #1,NME$(I),SCORE(I)
1420 PRINT NME$(I),SCORE(I)
1430 NEXT I
1440 NME$(10)=NME$:SCORE(10)=SCORE
1450 CLOSE
1460 IF SCORE(10)<SCORE(9) GOTO 1520
1470 FOR I=1 TO 10
1480 IF SCORE(I)<SCORE(I+1) THEN SWAP SCORE(I),SCORE(I+1):SWAP NME$(I),NME$(I+1):F=1
1490 NEXT I:IF F=1 THEN F=0:GOTO 1470
1500 OPEN "METEOR.DAT" FOR OUTPUT AS #1
1510 FOR I=1 TO 10:PRINT#1,NME$(I);",";SCORE(I):NEXT I:CLOSE
1520 LOCATE 5,1
1530 FOR I=1 TO 9
1540 PRINT NME$(I),SCORE(I)
1550 NEXT I
1560 LOCATE 17,1:PRINT "YOUR SCORE, ";NME$;", WAS";SCORE
1570 LOCATE 22,1:INPUT "PLAY AGAIN (Y OR N)";PLY$
1580 IF PLY$="Y" THEN 420
1590 RUN "MENU
```

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk 0035

     Volume in drive A has no label
     Directory of A:\

    LEM      BAS      6016   2-22-83  12:01p
    STARS    BAS      2663   1-01-80   6:01a
    STRIKE9  BAS      2100   1-01-80   6:04a
    STORY    BAS      5666   1-01-80   6:02a
    LANDER   BAS      3456   2-14-83  11:49p
    LOAN     BAS      2304   2-14-83  11:08p
    TRAP     BAS      1152   2-14-83  10:52p
    CHESS    BAS     16000   1-01-80  12:04a
    ICICLE   BAS       384   1-01-80  12:21a
    BARGRAPH BAS     22016
    CHIEF    BAS      1254   1-01-80   5:49a
    KINGDOM  BAS      5644   1-01-80   5:55a
    KENO     BAS      5530   1-01-80   5:59a
    23MATCH  BAS      1021   1-01-80   5:58a
    SECRETNO BAS      2071   1-01-80   6:07a
    DESERT   BAS      5820   1-01-80   6:09a
    ZAP-EM   BAS      4431   5-19-82   5:34a
    GOLF     BAS      6197   3-04-82   5:35a
    BULLSEYE BAS      1792   2-22-82
    DECIDE   BAS      4897   2-03-82   5:40a
    CAPTURE  BAS      3787   1-01-80   6:10a
    MISSLE   BAS      1942   1-01-80   6:14a
    BANKER   BAS     21248   6-22-82
    ADDRESS  BAS      5010   1-01-80   6:28a
    GO       BAT        38  10-19-87   3:56p
    GO       TXT       617  12-01-88   2:41p
    MANUAL   BAT       147   6-08-88   3:02p
    FILES35  TXT      1873   1-27-89   2:29p
           28 file(s)     135076 bytes
                           17408 bytes free
