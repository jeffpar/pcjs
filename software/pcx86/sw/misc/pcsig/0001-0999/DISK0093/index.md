---
layout: page
title: "PC-SIG Diskette Library (Disk #93)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0093/
machines:
  - id: ibm5150
    type: pcx86
    config: /machines/pcx86/ibm/5150/cga/256kb/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0093"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5150" %}

{% comment %}info_begin{% endcomment %}

## Information about "PC-SIG SAMPLER #5"

    An interesting assortment of utilities here, PC-SIG Sampler No 5
    includes programs to give help for learning MORSE code, expand tabs
    into spaces in text files, and analyze a loan. And for relaxation,
    games abound!  You can battle with tanks, play with flashcards, or even
    create the world.  Lots of fun!
    
    System Requirements:  Some programs require color; BASIC.
    
    How to Start:  For instructions on running BASIC programs, please refer
    to the GETTING STARTED section in this catalog. To read DOC files simply
    enter TYPE filename.ext and press <ENTER>.
    
    File Descriptions:
    
    DETAB    DOC  Documentation file for DETAB.EXE
    FLASHCRD LST  Sample flashcard data file
    FLASHCRD BAS  IPCO - Allows the creation and drill of flashcards
    FLASHCRD      Data file for FLASHCRD.BAS
    DETAB    EXE  Expands tabs in text file to correct number of spaces
    FLIPPER  BAS  IPCO puzzle game - flip the tokens
    LOANANAL BAS  Loan analysis
    TANK     BAS  IPCO Game - tank fighting for 2 players
    MORSECOD BAS  Morse code program
    WORLDMAP BAS+ IPCO world map drawing game
    VW128FIX INS  Instruction for using VW128FIX.BAT
    VW128FIX BAT  Modifies Volkswriter to bypass title page
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## DETAB.DOC

{% raw %}
```

     DETAB Filter
     Command
    
     --------------------------------------------------
     Purpose:  This filter reads text from the standard
     		   input device, replaces all tab characters
     		   with the corresponding number of spaces
     		   and then writes it to the standard output
     		   device.
             
     
     Format:   DETAB [n1 n2 n3 ... nx][/n]

     
     Type:     Internal  External
                           ***
     
     Remarks:  The default expansion is tab stops every
     		   four characters, this may be overridden
     		   in two ways using the optional parameters.

               The n1 n2 ... nx parameters are a list of x
               integers separated by spaces, that specify
               the columns for the first x tab stops.
               
               The /n parameter is an integer indicating
               that tabs are to be set every n columns after
               the current one.

             
	 Example:  A>DETAB <detab.doc
	 		   
	 		   Will output this document to the screen, with
	 		   each tab expanded to four characters. (It will
	 		   look diferent than if the file is TYPE'd since
	 		   type expands tabs to eight characters).
             
               A>DETAB 2 4 6 /3 <fname.ext >fname.lst
                
               Will expand the first three tabs on a line 
               to two spaces and the rest to three spaces
               placing the file with expanded tabs in the
               .lst file.


     Notes:    1.   The two methods of specifying tabs can
     				be used independently, or together as in
     				the second example, but the /n parameter
     				must follow any list of numbers (if only
     				a list of numbers is specified, the tabs
     				after the lists end will be every four 
     				columns).

     		   2.	There are an almost unlimited number of 
     		   		tab stops posible, but any tabs occuring 
     		   		beyond the 100'th column will be expanded
     		   		to a single space.

     		   3.	Tab stops may be specified at every column
     		   		if desired, but each tab character will be
     		   		expanded into at least one space.

               4.   For anyone desiring the source code 
                    for DETAB, it is written in C, and I will
                    provide it to anyone who sends me a PC
                    formated, single sided diskette with 
                    return postage and a check for $5.
                    (my address is: Michael Hanson,
                                   4032 Burton Pl. W.,
                                   Seattle, WA 98199)


              Written by Michael Hanson

```
{% endraw %}

## FLASHCRD.BAS

{% raw %}
```bas
10 KEY OFF:CLS
20 SCREEN 0
30 WIDTH 40
40 PRINT"░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░"
50 PRINT"░┌───────────────────────────────────┐░"
60 PRINT"░│                                   │░"
70 PRINT"░│            5016-A.BAS             │░"
80 PRINT"░│            FLASH CARD             │░"
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
1000 WIDTH 40
1010 COLOR 7,0,0
1020 KEY OFF:COLOR 7,0,0:CLS:SCREEN 0,1
1030 ' * * * Makes cover * * *
1040 COLOR 9,0,0:PRINT CHR$(201)+STRING$(37,205)+CHR$(187);
1050 FOR X=2 TO 23:LOCATE X,1:PRINT STRING$(1,186):LOCATE X,39:PRINT STRING$(1,186);:NEXT X:PRINT CHR$(200)+STRING$(37,205)+CHR$(188);
1060 PLAY "L8MBO0AAAAAAAAAAAAAAA"
1070 S$="FLASH CARD "
1080 COLOR 15:FOR X=1 TO 23:A$=LEFT$(S$,X):LOCATE 3,39-X,0:PRINT A$:FOR Y=1 TO 100:NEXT Y,X
1090 LOCATE 22,8!:COLOR 17:PRINT "PRESS SPACEBAR TO CONTINUE."
1100 COLOR 4:LOCATE 9,9:PRINT CHR$(201)+STRING$(20,205)+CHR$(187):FOR X=10 TO 15:LOCATE X,9:PRINT STRING$(1,186):LOCATE X,30:PRINT STRING$ (1,186):NEXT X:LOCATE 15,9:PRINT CHR$(200)+STRING$(20,205)+CHR$(188)
1110 COLOR 9:LOCATE 11,15:PRINT "Practice":LOCATE 13,15,0 :PRINT "and Drill"
1120 Q$=INKEY$:IF Q$=" " THEN 1130 ELSE 1120
1130 KEY OFF:CLS:COLOR 7,0
1140 ' * * * Dirctions * * *
1150 LOCATE 1,15:PRINT "DIRCTIONS"
1160 PRINT :PRINT "You may only enter thirty cards and theymust be  no longer then forty characters per side.":PRINT
1170 PRINT "You can save your lists on disk and  youcan  call  your lists  back  at a  latertime.There is an option to choose either side  of the card you wish.There is also an option to edit your cards in case of a mistake."
1180 PRINT :PRINT "All you have to do is follow the menus  and pick which option you want and the  computer will do the rest.Good luck and happy studying, well good luck at least."
1190 INPUT"Enter drive for data (AB)";D$
1200 IF D$<>"b" AND D$<>"B" THEN D$="A"
1210 LOCATE 23,7:PRINT "PRESS SPACEBAR TO CONTINUE."
1220 A$=INKEY$:IF A$=" " THEN GOTO 1230 ELSE 1220
1230 ' * * * Initializing * * *
1240 DIM S1$(30), S2$(30), SS1$(30), SS2$(30)
1250 RANDOMIZE(VAL(RIGHT$(TIME$,2)+MID$(TIME$,4,2)))
1260 X=0:FF=1:Q=0:S=-1:SCREEN 0,1:KEY OFF:CLS:GOTO 2600
1270 ' * * * Makes cards * * *
1280 INPUT "ENTER NUMBER OF CARDS";N
1290 FOR A=1 TO N
1300 PRINT "ENTER SIDE ONE OF CARD";A:INPUT S1$(A)
1310 PRINT "ENTER SIDE TWO OF CARD";A:INPUT S2$(A)
1320 PRINT :PRINT:NEXT A
1330 RETURN
1340 ' * * * Save cards * * *
1350 GOSUB 2910
1360 GOSUB 2760
1370 LOCATE 2,16:COLOR 21:PRINT "Files used":COLOR 15
1380 ON ERROR GOTO 1400
1390 LOCATE 6,1:FILES D$+":*.   "
1400 RESUME NEXT
1410 LOCATE 23,1:INPUT "ENTER FILE NAME,(0)FOR NONE.";F$
1420 IF F$="0" THEN RETURN ELSE O$=D$+":"+F$+".LST"
1430 OPEN O$ FOR OUTPUT AS #2
1440 PRINT#2,N
1450 CLOSE #2
1460 IF N=0 THEN N=X
1470 FF$=D$+":"+F$:GOSUB 2940
1480 OPEN FF$ AS #1 LEN=80
1490 FOR X=1 TO N
1500 FIELD #1, 40 AS SS1$(X), 40 AS SS2$(X)
1510 LSET SS1$(X)=S1$(X)
1520 LSET SS2$(X)=S2$(X)
1530 PUT #1,X
1540 NEXT X
1550 X=X-1:CLOSE #1
1560 RETURN
1570 ' * * * Load cards * * *
1580 GOSUB 2910
1590 LU=3
1600 GOSUB 2760
1610 LOCATE 2,16:COLOR 21:PRINT "Data files":COLOR 15
1620 ON ERROR GOTO 1640
1630 LOCATE 6,1:FILES D$+":*.   "
1640 RESUME NEXT
1650 LOCATE 23,1:Q=1:INPUT "ENTER NAME OF FILE,(0)FOR NONE";F$
1660 IF F$="0" THEN RETURN ELSE O$=D$+":"+F$+".LST"
1670 OPEN O$ FOR INPUT AS #2
1680 INPUT #2,N
1690 CLOSE #2
1700 FF$=D$+":"+F$
1710 OPEN FF$ AS #1 LEN=80
1720 FOR X=1 TO N
1730 FIELD #1, 40 AS SS1$(X), 40 AS SS2$(X)
1740 GET #1,X
1750 S1$(X)=SS1$(X):S2$(X)=SS2$(X)
1760 NEXT X
1770 CLOSE #1
1780 RETURN
1790 ' * * * Drill cards * * *
1800 GOSUB 2760
1810 LOCATE 2,15:COLOR 21:PRINT "Test options":COLOR 15
1820 LOCATE 7,14:PRINT "[1] SIDE ONE"
1830 LOCATE 9,14:PRINT "[2] SIDE TWO"
1840 LOCATE 11,14:PRINT "[3] BOTH SIDES"
1850 LOCATE 13,14:PRINT "[4] MENU"
1860 LOCATE 21,11:PRINT "[Esc] END PROGRAM"
1870 LOCATE 23,8:PRINT "ENTER OPTION TO CONTINUE."
1880 P$=INKEY$:IF P$=CHR$(27) THEN RETURN ELSE IF VAL(P$)<1 OR VAL(P$)>4 THEN 1880
1890 P=VAL(P$)
1900 IF P=4 THEN RETURN
1910 CLS:WIDTH 80:GOTO 1930
1920 FOR Y=1 TO 3000:NEXT Y:CLS:COLOR 15
1930 SIDE=INT(RND*2)+1
1940 CARD=INT(RND*N)+1
1950 IF P=3 THEN 1970
1960 IF P=1 THEN SIDE=2 ELSE SIDE=1
1970 IF S1$(CARD)="" OR S2$(CARD)="" THEN WIDTH 40:LOCATE 11,16,0:PRINT "BAD DATA":FOR TT=1 TO 2000:NEXT TT:RETURN
1980 LOCATE 1,20:PRINT "SIDE";SIDE:LOCATE 1,58:PRINT "NO.";CARD
1990 GOSUB 2820
2000 FFF=1:FF=1
2010 JJ$=RIGHT$(S1$(CARD),FF):LL=ASC(JJ$):IF LL<>32 THEN CC=40-FF ELSE FF=FF+1:GOTO 2010
2020 JJJ$=RIGHT$(S2$(CARD),FFF):LLL=ASC(JJJ$):IF LLL<>32 THEN CCC=40-FFF ELSE FFF=FFF+1:GOTO 2020
2030 IF LU<>3 THEN CC=LEN(S1$(CARD)):CCC=LEN(S2$(CARD))
2040 IF SIDE=1 THEN WW=40-CC:HH=WW/2:LOCATE 4,21+HH:PRINT S1$(CARD) ELSE WW=40-CCC:HH=WW/2:LOCATE 4,21+HH:PRINT S2$(CARD)
2050 LOCATE 4,61:PRINT CHR$(179)
2060 GOSUB 2860
2070 LOCATE 8,20:PRINT "ENTER OTHER SIDE OF CARD."
2080 LOCATE 23,20:PRINT "TYPE IN {END} FOR SCORE AND TO END TEST."
2090 LOCATE 11,21:INPUT "",AAW$
2100 IF AAW$="END" OR AAW$="end" THEN 2190
2110 IF Q=1 THEN W=LEN(AAW$):Z=40-W:K$=SPACE$(Z):AW$=AAW$+K$ ELSE AW$=AAW$
2120 S=S+1:IF SIDE=1 THEN 2130 ELSE 2160
2130 IF SIDE=1 AND AW$=S2$(CARD) THEN R=R+1:LOCATE 15,38:PRINT "RIGHT" ELSE H=H+1:LOCATE 15,26:PRINT "WRONG,THE ANSWER IS AS FOLLOWS"
2140 IF AW$<>S2$(CARD) THEN LOCATE 17,30:PRINT S2$(CARD)
2150 GOTO 1920
2160 IF SIDE=2 AND AW$=S1$(CARD) THEN R=R+1:LOCATE 15,38:PRINT "RIGHT" ELSE H=H+1:LOCATE 15,26:PRINT "WRONG,THE ANSWER IS AS FOLLOWS"
2170 IF AW$<>S1$(CARD) THEN LOCATE 17,30:PRINT S1$(CARD)
2180 GOTO 1920
2190 WIDTH 40:CLS:LOCATE 8,11,0:PRINT R;"RIGHT  ";H;"WRONG"
2200 FOR L=1 TO 4000:NEXT L:RETURN
2210 ' * * * Editing cards * * *
2220 LOCATE 23,1:INPUT "WHAT CARD DO YOU WANT TO EDIT.";E
2230 LOCATE 1,1:PRINT "CARD";E;"   SIDE ONE"
2240 PRINT S1$(E)
2250 PRINT "CARD";E;"   SIDE TWO"
2260 PRINT S2$(E)
2270 LOCATE 23,1:PRINT SPACE$(39):LOCATE 23,1:INPUT "ENTER SIDE TO BE EDITED.";W
2280 IF W=0 THEN RETURN
2290 IF W=1 THEN 2300 ELSE 2340
2300 LOCATE 23,1:PRINT "ENTER NEW DATA FOR CARD.    ";S1$(E)
2310 INPUT S1$(E)
2320 K=40-LEN(S1$(E)):IF Q=1 THEN S1$(E)=S1$(E)+SPACE$(K)
2330 RETURN
2340 LOCATE 23,1:PRINT "ENTER NEW DATA FOR CARD.    "
2350 INPUT S2$(E)
2360 K=40-LEN(S2$(E)):IF Q=1 THEN S2$(E)=S2$(E)+SPACE$(K)
2370 RETURN
2380 ' * * * Lists whats in file * * *
2390 CLS:LOCATE 9,14:PRINT "TURN ON PRINTER"
2400 LOCATE 12,15:PRINT "INSERT  PAPER"
2410 LOCATE 23,6:PRINT "{P} FOR PRINTER {S} FOR SCREEN"
2420 LOCATE 21,9:PRINT "PRESS {C} FOR CHEAT NOTES"
2430 A$=INKEY$:IF A$="" THEN 2420 ELSE IF A$="P" THEN ZA=1 ELSE IF A$="C" THEN ZA=2
2440 IF N=0 THEN 2450 ELSE X=N:GOTO 2460
2450 IF X=0 THEN X=N-1
2460 CLS:GOSUB 3120:WIDTH 80
2470 FOR L=1 TO X:YY=0
2480 PRINT "NO.";L;" SIDE 1 ";S1$(L)
2490 YY=YY+1
2500 BB$=MID$(S1$(L),40-YY,1):IF BB$=" " THEN 2490 ELSE SS1$(L)=LEFT$(S1$(L),40-YY)
2510 IF ZA=2 THEN LPRINT CHR$(27)"1";CHR$(15);CHR$(27)"S"CHR$(1);SS1$(L)+"-"+S2$(L)
2520 IF ZA=1 THEN LPRINT CHR$(13);:LPRINT "NO.";L;" SIDE 1 ";S1$(L)
2530 PRINT "NO.";L;" SIDE 2 ";S2$(L)
2540 IF ZA=1 THEN LPRINT "NO.";L;" SIDE 2 ";S2$(L)
2550 PRINT :T=T+1:IF T=7 OR L=X THEN LOCATE 23,30,0:PRINT "PRESS SPACEBAR TO CONTINUE.":T=0 ELSE GOTO 2570
2560 A$=INKEY$:IF A$=" " THEN CLS:GOTO 2570 ELSE 2560
2570 NEXT L
2580 WIDTH 40:IF X=0 THEN LOCATE 11,17,0:PRINT "NO CARDS":FOR TT=1 TO 2000:NEXT TT
2590 RETURN
2600 ' * * * Options * * *
2610 CLS:WIDTH 40:GOSUB 2760
2620 LOCATE 2,16:COLOR 21:PRINT "Flash Card":COLOR 15
2630 LOCATE 7,14:PRINT "[1] MAKE CARDS"
2640 LOCATE 9,14:PRINT "[2] SAVE CARDS"
2650 LOCATE 11,14:PRINT "[3] TEST CARDS
2660 LOCATE 13,14:PRINT "[4] LOAD CARDS"
2670 LOCATE 15,14:PRINT "[5] EDIT CARDS
2680 LOCATE 17,14:PRINT "[6] LIST CARDS
2690 LOCATE 21,11:PRINT "[Esc] END PROGRAM"
2700 LOCATE 23,8,0:PRINT "ENTER OPTION TO CONTINUE."
2710 O$=INKEY$:IF O$=CHR$(27) THEN CLS:END ELSE IF VAL(O$)<1 OR VAL(O$)>7 THEN 2710
2720 CLS:ON VAL(O$) GOSUB 1280,1340,1790,1570,2220,2380,2380
2730 GOTO 2600
2740 END
2750 ' * * * Makes title outline * * *
2760 P=0:R=0:H=0
2770 COLOR 10:CLS:LOCATE 1,13:PRINT CHR$(201)+STRING$(14,205)+CHR$(187)
2780 FOR U=2 TO 3:LOCATE U,13:PRINT CHR$(186):LOCATE U,28:PRINT CHR$(186):NEXT
2790 LOCATE 3,13:PRINT CHR$(200)+STRING$(14,205)+CHR$(188)
2800 RETURN
2810 ' * * * Makes cards outline * * *
2820 LOCATE 2,20:PRINT CHR$(218)+STRING$(40,196)+CHR$(191)
2830 FOR V=3 TO 5:LOCATE V,20:PRINT CHR$(179):LOCATE V,61:PRINT CHR$(179):NEXT V
2840 LOCATE 6,20:PRINT CHR$(192)+STRING$(40,196)+CHR$(217)
2850 RETURN
2860 LOCATE 9,20:PRINT CHR$(218)+STRING$(40,196)+CHR$(191)
2870 FOR V=10 TO 12:LOCATE V,20:PRINT CHR$(179):LOCATE V,61:PRINT CHR$(179):NEXT V
2880 LOCATE 13,20:PRINT CHR$(192)+STRING$(40,196)+CHR$(217)
2890 RETURN
2900 ' * * * Save and load dirctions * * *
2910 LOCATE 10,13:PRINT "INSERT DATA DISK"
2920 LOCATE 23,8:PRINT "PRESS SPACEBAR TO CONTINUE."
2930 A$=INKEY$:IF A$=" " THEN RETURN ELSE 2930
2940 ' * * * Checks to see if file is used * * *
2950 CLS:GOSUB 2750:COLOR 21:LOCATE 2,16:PRINT "File check":COLOR 15
2960 ON ERROR GOTO 2980
2970 NAME FF$ AS FF$
2980 Z=ERR:RESUME 2990
2990 ON ERROR GOTO 0
3000 IF Z=53 THEN 3110 ELSE IF Z<>58 THEN PRINT "UNEXPECTED ERROR";ERR:STOP
3010 LOCATE 6,9:PRINT "FILE ";F$" ALREADY EXISTS."
3020 LOCATE 9,10:PRINT "[1] ENTER ANOTHER NAME"
3030 LOCATE 11,10:PRINT "[2] SAVE FILE"
3040 LOCATE 13,10:PRINT "[3] MENU"
3050 LOCATE 21,11:PRINT "[Esc] END PROGRAM"
3060 LOCATE 23,8,0:PRINT "ENTER OPTION TO CONTINUE."
3070 O$=INKEY$:IF O$=CHR$(27) THEN CLS:END ELSE IF VAL(O$)<1 OR VAL(O$)>3 THEN 3070
3080 CLS:ON VAL(O$) GOSUB 1340,3110,2600
3090 GOTO 3110
3100 KILL "fF$":X=0
3110 RETURN
3120 ' * * * ABC TO LIST * * *
3130 LOCATE 11,14:PRINT "Getting Cards"
3140 FOR I=1 TO X-1
3150 FOR J=I TO X
3160 IF S1$(J)<S1$(I) THEN T$=S1$(J):TT$=S2$(J):S1$(J)=S1$(I):S2$(J)=S2$(I):S1$(I)=T$:S2$(I)=TT$
3170 NEXT J
3180 'R=R+1:S1$(R)=T$
3190 NEXT I
3200 RETURN
```
{% endraw %}

## FLIPPER.BAS

{% raw %}
```bas
10 KEY OFF:CLS
20 SCREEN 0
30 WIDTH 40
40 PRINT"░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░"
50 PRINT"░┌───────────────────────────────────┐░"
60 PRINT"░│                                   │░"
70 PRINT"░│            2070-A.BAS             │░"
80 PRINT"░│             FLIPPER               │░"
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
1000 REM <<<<< FLIPPER >>>>> 23 JUN 83
1010 CLS:FOR I=1 TO 23
1020 LOCATE I,I+37:PRINT "FLIPPER":LOCATE I,39-I:PRINT "FLIPPER"
1030 LOCATE 24-I,39-I:PRINT "FLIPPER":LOCATE 24-I,I+37:PRINT "FLIPPER":NEXT I
1040 LOCATE 12,1:PRINT "A GAME FOR THE `IBM PC'":LOCATE 12,60:PRINT "BY PETER AIRD"
1050 FOR II=1 TO 10:LOCATE 12,38:PRINT "FLIPPER":FOR I=1 TO 200:NEXT I:LOCATE 12,38:PRINT "       ":FOR I=1 TO 150:NEXT I:NEXT II
1060 CLS:DEFINT A-X
1070 DEF SEG=&H40:POKE &H17,PEEK(&H17) OR 64
1080 GOTO 1100
1090 LOCATE 1,70:PRINT TIME$:RETURN
1100 TI=VAL(RIGHT$(TIME$,2)):RANDOMIZE TI:Z=RND(Z)
1110 LOCATE 20,24,1:PRINT "DO YOU WANT INSTRUCTIONS (Y/N) -";
1120 D$=INKEY$:IF D$="" THEN 1120
1130 IF D$="Y" THEN GOSUB 1760
1140 CLS:N=0:T=0
1150 LOCATE 5,25:PRINT 1;:PRINT TAB(40) 2;:PRINT TAB(55) 3
1160 LOCATE 11,25:PRINT 4;:PRINT TAB(40) 5;:PRINT TAB(55) 6
1170 LOCATE 17,25:PRINT 7;:PRINT TAB(40) 8;:PRINT TAB(55) 9
1180 FOR I=1 TO 9:Z=INT(RND(Z)*3)+1
1190 IF Z<2 THEN 1210
1200 P(I)=0:GOTO 1220
1210 P(I)=1
1220 NEXT I
1230 FOR I=1 TO 9:T=T+P(I):NEXT I
1240 IF T<1 OR T>7 THEN 1180
1250 FOR I=1 TO 9:M=I:X=I:GOSUB 1460:NEXT I
1260 LOCATE 1,34:PRINT "MOVE NUMBER -";N:TIME$="00:00:00"
1270 GOSUB 1090:LOCATE 21,34:PRINT "YOUR MOVE IS - ";
1280 M$=INKEY$:IF M$="" THEN GOSUB 1090:GOTO 1280
1290 M=ASC(M$):M=M-48:IF M<1 OR M>9 THEN 1280
1300 LOCATE 21,48:PRINT M
1310 IF P(M)<>1 THEN 1730
1320 N=N+1:LOCATE 1,47:PRINT N
1330 ON M GOTO 1340,1350,1360,1370,1380,1390,1400,1410,1420
1340 X=1:GOSUB 1430:X=2:GOSUB 1430:X=4:GOSUB 1430:X=5:GOSUB 1430:GOTO 1630
1350 X=2:GOSUB 1430:X=1:GOSUB 1430:X=3:GOSUB 1430:GOTO 1630
1360 X=3:GOSUB 1430:X=2:GOSUB 1430:X=5:GOSUB 1430:X=6:GOSUB 1430:GOTO 1630
1370 X=4:GOSUB 1430:X=1:GOSUB 1430:X=7:GOSUB 1430:GOTO 1630
1380 X=5:GOSUB 1430:X=2:GOSUB 1430:X=4:GOSUB 1430:X=8:GOSUB 1430:X=6:GOSUB 1430:GOTO 1630
1390 X=6:GOSUB 1430:X=3:GOSUB 1430:X=9:GOSUB 1430:GOTO 1630
1400 X=7:GOSUB 1430:X=4:GOSUB 1430:X=5:GOSUB 1430:X=8:GOSUB 1430:GOTO 1630
1410 X=8:GOSUB 1430:X=7:GOSUB 1430:X=9:GOSUB 1430:GOTO 1630
1420 X=9:GOSUB 1430:X=8:GOSUB 1430:X=5:GOSUB 1430:X=6:GOSUB 1430:GOTO 1630
1430 IF P(X)=1 THEN 1450
1440 P(X)=1:GOTO 1460
1450 P(X)=0
1460 ON X GOTO 1470,1480,1490,1500,1510,1520,1530,1540,1550
1470 A=3:B=22:GOTO 1560
1480 A=3:B=37:GOTO 1560
1490 A=3:B=52:GOTO 1560
1500 A=9:B=22:GOTO 1560
1510 A=9:B=37:GOTO 1560
1520 A=9:B=52:GOTO 1560
1530 A=15:B=22:GOTO 1560
1540 A=15:B=37:GOTO 1560
1550 A=15:B=52
1560 IF P(X)<>1 THEN 1600
1570 LOCATE A,B:PRINT "▄▄▄▄▄▄▄▄▄":LOCATE A+1,B:PRINT "██▀▀▀▀▀██"
1580 LOCATE A+2,B:PRINT "██":LOCATE A+2,B+7:PRINT "██"
1590 LOCATE A+3,B:PRINT "██▄▄▄▄▄██":LOCATE A+4,B:PRINT "▀▀▀▀▀▀▀▀▀":RETURN
1600 LOCATE A,B:PRINT "┌───────┐":LOCATE A+1,B:PRINT "│       │"
1610 LOCATE A+2,B:PRINT "│ ":LOCATE A+2,B+7:PRINT " │"
1620 LOCATE A+3,B:PRINT "│       │":LOCATE A+4,B:PRINT "└───────┘":RETURN
1630 S=0:FOR I=1 TO 9:S=S+P(I):NEXT I
1640 IF S=0 THEN 1670
1650 IF S=8 AND P(5)=0 THEN 1710
1660 GOTO 1270
1670 LOCATE 23,30:PRINT "SORRY, YOU LOSE..........."
1680 LOCATE 25,30:PRINT "ANOTHER GAME (Y/N) - ";
1690 R$=INKEY$:IF R$="" THEN 1690
1700 IF R$="Y" THEN 1140 ELSE IF R$<>"N" THEN 1690 ELSE CLS:END
1710 LOCATE 23,30:PRINT "THAT'S IT, YOU WON !!!!!"
1720 GOTO 1680
1730 BEEP:LOCATE 23,34:PRINT "- ILLEGAL MOVE -":FOR I=1 TO 400:NEXT I
1740 LOCATE 23,34:PRINT "                "
1750 GOTO 1270
1760 CLS:LOCATE 1,35:PRINT "- FLIPPER -":PRINT
1770 PRINT "FLIPPER is a puzzle played on a 3 X 3 board using tokens which are WHITE on one":PRINT "side and BLACK on the other."
1780 PRINT "The playing positions are numbered 1 to 9."
1790 PRINT "At least one piece is white at the commencement of each game."
1800 PRINT "The object of the game is to FLIP the tokens until the centre piece is BLACK"
1810 PRINT "and all the other pieces are WHITE."
1820 PRINT :PRINT "The board and rules are as follows:-"
1830 PRINT :PRINT TAB(10)"1   2   3":PRINT :PRINT TAB(10)"4   5   6":PRINT :PRINT TAB(10)"7   8   9"
1840 LOCATE 12,25:PRINT "1) Only white pieces may be selected."
1850 LOCATE 14,25:PRINT "2) If a corner piece is selected, as well as FLIPPING":LOCATE 15,28:PRINT "itself, the three adjacent pieces also FLIP."
1860 LOCATE 16,28:PRINT "For example, FLIP '1' and 2,4 and 5 FLIP too."
1870 LOCATE 18,25:PRINT "3) Select the middle of a side and the whole side FLIPS"
1880 LOCATE 20,25:PRINT "4) FLIP '5' and 2,4,6 and 8 will also FLIP."
1890 LOCATE 22,25:PRINT "5) You LOSE if all tokens become BLACK, you":LOCATE 23,28:PRINT "WIN if all tokens except '5' become WHITE."
1900 LOCATE 20,1:PRINT "(PRESS ANY KEY)":LOCATE 21,4:PRINT "(TO PLAY)"
1910 G$=INKEY$:IF G$="" THEN 1910 ELSE RETURN
```
{% endraw %}

## LOANANAL.BAS

{% raw %}
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
{% endraw %}

## MORSECOD.BAS

{% raw %}
```bas
10 KEY OFF
20 SCREEN 0,0,0
30 WIDTH 40
40 PRINT"░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░"
50 PRINT"░┌───────────────────────────────────┐░"
60 PRINT"░│                                   │░"
70 PRINT"░│            5017-A.BAS             │░"
80 PRINT"░│            MORSE CODE             │░"
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
290 REM Revised 25. February 1987 for PC-SIG by J. A. Poth, P.O. Box 28853,
300 REM San Jose, Calif.  95159.  Corrected errors in title page display and
310 REM Morse code generating algorithm.
1000 RANDOMIZE VAL(RIGHT$(TIME$,2))
1010 COLOR 7,0,0
1020 KEY OFF:COLOR 7,0,0:CLS:SCREEN 0,1
1030 COLOR 9,0,0:PRINT CHR$(213)+STRING$(37,205)+CHR$(184);
1040 FOR X=2 TO 23:LOCATE X,1:PRINT STRING$(1,179):LOCATE X,39:PRINT STRING$(1,179);: NEXT X: PRINT: PRINT CHR$(212)+STRING$(37,205)+CHR$(190);
1050 LOCATE 3,15:COLOR 15:PRINT "MORSE CODE"
1060 LOCATE 22,8:COLOR 17:PRINT "PRESS ANY KEY TO CONTINUE"
1070 COLOR 4:LOCATE 9,9:PRINT CHR$(213)+STRING$(20,205)+CHR$(184):FOR X=10 TO 15:LOCATE X,9:PRINT STRING$(1,179):LOCATE X,30:PRINT STRING$ (1,179):NEXT X:LOCATE 15,9:PRINT CHR$(212)+STRING$(20,205)+CHR$(190)
1080 COLOR 9:LOCATE 11,15:PRINT "Practice":LOCATE 13,15 :PRINT "and Drill"
1090 Q$=INKEY$:IF Q$="" THEN 1090 ELSE 1100
1100 KEY OFF:CLS:COLOR 0,7
1110 CLS:COLOR ,,15:RANDOMIZE(T)
1120 INPUT "Enter code speed in words/minute";WPM: PRINT
1122 LET E=(0.877/WPM)*(18.2)  'Length of tone element, (sec)*(clock ticks/sec)
1124 LET PITCH=800            'Pitch of tone, Hz.
1130 INPUT "(1) Learning   (2) Testing";W: CLS
1140 DIM A$(26), B$(26) ,HH(24)
1160 FOR Z=1 TO 26:READ B$(Z):NEXT Z
1170 COLOR 0,7,0: CLS
1172 F=FIX(RND*17+4+0.9999):IF W<>1 THEN COLOR ,,4:LOCATE 10,17:PRINT "TESTING"
1174 FOR I=1 TO 1500: NEXT I    'Pause
1180 FOR Z=1 TO F
1190 H=FIX(RND*10+0.9999):HH(Z)=H:IF W=1 THEN PRINT B$(H),CHR$(H+64)
1220 FOR Y=1 TO LEN(B$(H))
1230 IF MID$(B$(H),Y,1)="-" THEN D=3 ELSE LET D=1   '3:1 dah-dit ratio.
1240 SOUND PITCH,D*E            'Generate the sound
1242 SOUND 32767,E              'Element space
1250 NEXT Y
1252 SOUND 32767,3*E            'Character space
1254 NEXT Z
1256 IF W=1 THEN 1270
1260 CLS:COLOR ,,15:FOR X=1 TO F:PRINT CHR$(HH(X)+64),B$(HH(X)):NEXT X
1270 LOCATE 24,1: COLOR 7,0,0: KEY ON: PRINT "PRESS <F5> TO CONTINUE";
1272 LOCATE 22,1: END
1280 KEY OFF: GOTO 1170
8000 DATA .-,-...,-.-.,-..,.,..-.,--.,....,..,.---,-.-,.-..,--,-.
8010 DATA -.,---,.--.,--.-,.-.,...,-,..-,...-,.--,-..-,-.--,--..
9999 END
```
{% endraw %}

## TANK.BAS

{% raw %}
```bas
10 KEY OFF:CLS
20 SCREEN 0
30 WIDTH 40
40 PRINT"░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░"
50 PRINT"░┌───────────────────────────────────┐░"
60 PRINT"░│                                   │░"
70 PRINT"░│            2077-A.BAS             │░"
80 PRINT"░│              TANK                 │░"
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
1000 '<====={ TANK }=====>
1010 'Danny Y. Toronot User Group + JULIAN M.
1020 CLEAR:SOU=0:KEY OFF:RB$=CHR$(248):LB$=CHR$(42)
1030 GOSUB 2000:GOSUB 2150:GOSUB 1450:SP$=CHR$(32):RP$=CHR$(232):LP$=CHR$(233)
1040 A=20:B=77:E=3:F=3:D=0:G=0:H=0:I=0:K=0:Q=0:R=0:S=5:T=0:W=5:U=0:GOSUB 1990
1050 LOCATE 22,26:COLOR 0,7:PRINT"TO END GAME PRESS THE ESC BUTTON":COLOR 7,0
1060 LOCATE 1,38:COLOR 0,7:PRINT"TANK!":COLOR 7,0:EX$=CHR$(8)
1070 IF SOU=0 THEN LOCATE 1,65:COLOR 0,7:PRINT"SOUND ON "
1080 IF SOU=2 THEN LOCATE 1,65:COLOR 0,7:PRINT"SOUND OFF"
1090 COLOR 7,0
1100 C$=INKEY$
1110 IF C$="I"OR C$="i"THEN GOSUB 2280:GOTO 1070
1120 IF C$="O"OR C$="o"THEN SOU=2:GOTO 1070
1130 IF C$="P"OR C$="p"THEN SOU=0:GOTO 1070
1140 IF C$=CHR$(27)THEN 2030
1150 IF C$="M"OR C$="K"OR C$="L"THEN 1100
1160 IF RIGHT$(C$,1)="H"OR C$="8"THEN X$="I":GOSUB 1280
1170 IF C$="W"OR C$="w"THEN X$="W":GOSUB 1360
1180 IF RIGHT$(C$,1)="P"OR C$="2"THEN X$="M":GOSUB 1320
1190 IF C$="X"OR C$="x"THEN X$="X":GOSUB 1400
1200 IF RIGHT$(C$,1)="M"OR C$="6"THEN X$="L":GOSUB 1340
1210 IF C$="D"OR C$="d"THEN X$="D":GOSUB 1420
1220 IF RIGHT$(C$,1)="K"OR C$="4"THEN X$="J":GOSUB 1300
1230 IF C$="A"OR C$="a"THEN X$="A":GOSUB 1380
1240 IF RIGHT$(C$,1)="R"OR C$="0"OR C$="5"THEN GOSUB 1470
1250 IF C$="S"OR C$="s"THEN GOSUB 1600
1260 LOCATE A,B:PRINT RP$
1270 LOCATE E,F:PRINT LP$:GOTO 1100
1280 IF A-1<2 THEN  RETURN
1290 LOCATE A,B:PRINT SP$:A=A-1:RETURN
1300 IF B-1<2 THEN RETURN
1310 LOCATE A,B:PRINT SP$:B=B-1:RETURN
1320 IF A+1>21 THEN RETURN
1330 LOCATE A,B:PRINT SP$:A=A+1:RETURN
1340 IF B+1>79 THEN RETURN
1350 LOCATE A,B:PRINT SP$:B=B+1:RETURN
1360 IF E-1<2 THEN RETURN
1370 LOCATE E,F:PRINT SP$:E=E-1:RETURN
1380 IF F-1<2 THEN RETURN
1390 LOCATE E,F:PRINT SP$:F=F-1:RETURN
1400 IF E+1>21 THEN RETURN
1410 LOCATE E,F:PRINT SP$:E=E+1:RETURN
1420 IF F+1>79 THEN RETURN
1430 LOCATE E,F:PRINT SP$:F=F+1:RETURN
1440 RETURN
1450 GOSUB 2000:LOCATE 22,10
1460 COLOR 0,7:PRINT"TANKS":LOCATE 22,68:PRINT"TANKS":COLOR 7,0:RETURN
1470 G=A:U=B:IF X$="I"THEN 1520
1480 IF X$="M"THEN 1540
1490 IF X$="L"THEN 1560
1500 IF X$="J"THEN 1580
1510 LOCATE G,B:PRINT SP$:LOCATE A,U:PRINT SP$:GOSUB 2240:RETURN
1520 LOCATE A,B:PRINT RP$:LOCATE G,B:PRINT SP$:G=G-1:LOCATE G,B:COLOR 15,0:PRINT RB$:COLOR 7,0:GOSUB 1730:IF G<3 THEN 1510
1530 GOTO 1520
1540 LOCATE A,B:PRINT RP$:LOCATE G,B:PRINT SP$: G=G+1:LOCATE G,B:COLOR 15,0:PRINT RB$:COLOR 7,0:GOSUB 1730:IF G>20 THEN 1510
1550 GOTO 1540
1560 LOCATE A,B:PRINT RP$:LOCATE A,U:PRINT SP$:U=U+1:LOCATE A,U:COLOR 15,0:PRINT RB$:COLOR 7,0:GOSUB 1730:IF U>78 THEN 1510
1570 GOTO 1560
1580 LOCATE A,B:PRINT RP$:LOCATE A,U:COLOR 15,0:PRINT SP$:U=U-1:LOCATE A,U:COLOR 15,0:PRINT RB$:COLOR 7,0:GOSUB 1730:IF U<3 THEN 1510
1590 GOTO 1580
1600 G=E:U=F:IF X$="W"THEN 1650
1610 IF X$="X"THEN 1670
1620 IF X$="D"THEN 1690
1630 IF X$="A"THEN 1710
1640 LOCATE G,F:PRINT SP$:LOCATE E,U:PRINT SP$:GOSUB 2240:RETURN
1650 LOCATE E,F:PRINT LP$:LOCATE G,F:PRINT SP$:G=G-1:LOCATE G,F:COLOR 15,0:PRINT LB$:COLOR 7,0:GOSUB 1860:IF G<3 THEN 1640
1660 GOTO 1650
1670 LOCATE E,F:PRINT LP$:LOCATE G,F:PRINT SP$:G=G+1:LOCATE G,F:COLOR 15,0:PRINT LB$:COLOR 7,0:GOSUB 1860:IF G>20 THEN 1640
1680 GOTO 1670
1690 LOCATE E,F:PRINT LP$:LOCATE E,U:PRINT SP$:U=U+1:LOCATE E,U:COLOR 15,0:PRINT LB$:COLOR 7,0:GOSUB 1860:IF U>78 THEN 1640
1700 GOTO 1690
1710 LOCATE E,F:PRINT LP$:LOCATE E,U:PRINT SP$:U=U-1:LOCATE E,U:COLOR 15,0:PRINT LB$:COLOR 7,0:GOSUB 1860:IF U<3  THEN 1640
1720 GOTO 1710:'REM ROUTINE TO SCORE AND SOUND
1730 IF G=E THEN 1750
1740 GOTO 1760
1750 IF U=F THEN 1770
1760 RETURN
1770 FOR J=1 TO 25:LOCATE E,F:PRINT EX$:LOCATE E,F:COLOR 0,7:PRINT EX$:COLOR 7,0
1780 IF SOU=2 THEN 1820
1790 COLOR 7,0:SOUND 440,.4
1800 SOUND 230.81,.4
1810 SOUND 780 ,.4
1820 NEXT J
1830 W=W-1
1840 IF W<1 THEN WI=2:GOTO 2030
1850 GOSUB 1990:GOTO 1100
1860 IF G=A THEN 1880
1870 GOTO 1890
1880 IF U=B THEN 1900
1890 RETURN
1900 FOR J=1 TO 25:LOCATE A,B:PRINT EX$:LOCATE A,B:COLOR 0,7:PRINT EX$:COLOR 7,0
1910 IF SOU=2 THEN 1950
1920 SOUND 440,.4
1930 SOUND 230.81,.4
1940 SOUND 780 ,.4
1950 NEXT J
1960 S=S-1
1970 IF S<1 THEN WI=1:GOTO 2030
1980 GOSUB 1990:GOTO 1100
1990 LOCATE 23,11:PRINT LP$;W:LOCATE 23,69:PRINT RP$;S:RETURN
2000 CLS:LL$=CHR$(0):LM$=CHR$(0):LL$=CHR$(219):FOR CA=1 TO 79'BOARDER
2010 LM$=LM$+LL$:NEXT:LOCATE 1,1:PRINT LM$:LOCATE 22,1:PRINT LM$:FOR CA=1 TO 22
2020 LOCATE CA,1:PRINT LL$:LOCATE CA,80:PRINT LL$:NEXT:CA=0:RETURN
2030 GOSUB 2000:'TO END GAME
2040 LOCATE 9,37:COLOR 1,0:PRINT" TANK !":COLOR 7,0
2050 COLOR 7,0:LOCATE 14,32:IF WI=1 THEN CH=233:GOTO 2080
2060 IF WI=2 THEN CH=232:GOTO 2080
2070 GOTO 2090
2080 COLOR 19,0:PRINT CHR$(CH)" IS THE WINNER!!!!":COLOR 7,0
2090 LOCATE 18,26:PRINT"DO YOU WISH TO PLAY AGAIN (Y/N) ";
2100 C$=INPUT$(1)
2110 IF C$="Y" OR C$="y" THEN  1020
2120 IF C$="N" OR C$="n" THEN 2140
2130 BEEP:GOTO 2090
2140 CLS:LOCATE 11,35:COLOR 17,0:PRINT"SEE YA'":COLOR 7,0:LOCATE 22,1:END
2150 LOCATE 6,36:COLOR 1,0:PRINT" TANK !":COLOR 7,0
2160 LOCATE 10,13:PRINT"PRESS "CHR$(34)"I"CHR$(34)" TO LEARN THE RULES OF THE GAME DURING GAME PLAY"
2170 LOCATE 12,15:PRINT"PRESS "CHR$(34)"O"CHR$(34)" TO TURN SOUND OFF ANYTIME DURING GAME PLAY"
2180 LOCATE 14,15:PRINT"PRESS "CHR$(34)"P"CHR$(34)" TO TURN SOUND ON ANYTIME DURING GAME PLAY"
2190 LOCATE 16,24:PRINT"NUMBER OF TANKS PER PLAYER IS FIVE(5)"
2200 LOCATE 20,28:PRINT"PRESS ANY KEY TO CONTINUE":LOCATE 18,24:PRINT"TO END GAME PRESS THE ESC BUTTON"
2210 A$=INKEY$
2220 IF A$="" THEN 2210
2230 RETURN:'REM NOISE FOR MISSES
2240 IF SOU=2 THEN RETURN
2250 SOUND  250,.7
2260 SOUND  450,.9
2270 SOUND  350,.9:RETURN
2280 GOSUB 2000:LOCATE 8,36:COLOR 1,0:PRINT" TANK !"
2290 COLOR 7,0:LOCATE 12,27:PRINT" THIS IS THE GAME OF TANK.":LOCATE 13,17
2300 PRINT" THE GAME LETS TWO TANK COMMANDERS FIGHT EACH OTHER.":LOCATE 14,8
2310 PRINT"THE PLAYER ON THE LEFT USES THE W,A,X,D AND S AS THE FIRING BUTTON."
2320 LOCATE 15,7:PRINT"THE PLAYER ON THE RIGHT USES THE 8,4,2,6 AND 0 AS THE FIRING BUTTON."
2330 LOCATE 16,26:PRINT"TO TURN OFF SOUND PRESS "CHR$(34)"O"CHR$(34)"."
2340 LOCATE 17,27:PRINT"TO TURN ON SOUND PRESS "CHR$(34)"P"CHR$(34)"."
2350 LOCATE 18,29:PRINT"INSTRUCTIONS PRESS "CHR$(34)"I"CHR$(34)"."
2360 LOCATE 20,24:PRINT"PRESS ANY KEY TO RESUME THE GAME"
2370 IF INKEY$="" THEN 2370
2380 GOSUB 2000:GOSUB 1990
2390 LOCATE 22,26:COLOR 0,7:PRINT"TO END GAME PRESS THE ESC BUTTON":COLOR 7,0
2400 LOCATE 1,38:COLOR 0,7:PRINT"TANK!":COLOR 7,0:RETURN
```
{% endraw %}

## WORLDMAP.BAS

{% raw %}
```bas
10 KEY OFF:CLS
20 SCREEN 0
30 WIDTH 40
40 PRINT"░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░"
50 PRINT"░┌───────────────────────────────────┐░"
60 PRINT"░│                                   │░"
70 PRINT"░│            4029-A.BAS             │░"
80 PRINT"░│             WORLD MAP             │░"
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
1000 '**************************************************************************
1010 '*                                                                        *
1020 '*                          MAP OF THE WORLD                              *
1030 '*                                                                        *
1040 '*  Published in the Premier Edition of DIALOGUE Magazine (March, 1983)   *
1050 '*                                                                        *
1060 '*                  REQUIRES COLOR-GRAPHICS BOARD!!                       *
1070 '*                                                                        *
1080 '*  Uploaded to PCanada by Mark Magner (PC296) April 10, 1983             *
1090 '*                                                                       *
1100 '*************************************************************************
1110 '
1120 SCREEN 0,0 : CLS : KEY OFF : COLOR 9,0 : WIDTH 80
1130 PRINT TAB(20) "MAP OF THE WORLD" : PRINT
1140 PRINT "Choose one of the following:"
1150 PRINT "      Half-scale map of the world - video display only....(1)"
1160 PRINT "      Full-scale map of the world - video display only....(2)"
1170 PRINT "      Same as (1) above except for colouring..............(3)"
1180 PRINT "      Same as (2) above except for colouring..............(4)"
1190 PRINT "      Half-scale printed map - outline only...............(5)"
1200 PRINT "      Full-scale printed map - outline only...............(6)"
1210 PRINT "      Half-scale printed map with shading.................(7)"
1220 PRINT "      Full-scale printed map with shading.................(8)"
1230 COLOR 15,0 : PRINT : LOCATE ,20 : INPUT "YOUR CHOICE?  (1 - 8) ",CHC
1240 IF CHC<1 OR CHC>8 THEN BEEP : PRINT "Illegal choice........Try again!" : FOR J=1 TO 3000 : NEXT J : GOTO 1120
1250 PRINT : IF CHC>4 THEN PRINT "Is printer ready and has VIDEOGRAPH been installed?  (Y/N)"; : INPUT Z$ : IF Z$="n" OR Z$="N" THEN 1120 '                        **** VIDEOGRAPH is a graphics screen dump program for the PC
1260 SCREEN 1,0 : CLS
1270 READ N
1280 IF N < 0 THEN 2440
1290 READ X1,Y1,X,Y
1300 IF CHC = 1 OR CHC = 3 OR CHC = 5 OR CHC = 7 THEN LINE (X1+50, Y1+20) - (X+50,Y+20),3
1310 IF CHC = 2 OR CHC = 4 OR CHC = 6 OR CHC = 8 THEN LINE (X1*2, Y1*2) - (X*2, Y*2),3
1320     FOR J=3 TO N
1330     READ X,Y
1340     IF CHC = 1 OR CHC = 3 OR CHC = 5 OR CHC = 7 THEN LINE -(X+50, Y+20),3 : GOTO 1360
1350     LINE -(X*2, Y*2),3
1360     NEXT J
1370 GOTO 1270
1380 DATA 168,2,16,3,16,3,15,4,14,6,14,6,12,8,12,9,10,10,10,12,9,15,9,17,10
1390 DATA 19,11,25,11,27,12,27,13,30,13,30,12,28,12,28,10,26,10,26,9,28,8,30,8
1400 DATA 30,9,32,10,32,9,33,9,33,12,31,12,32,13,35,13,35,11,37,9,39,9,36,12
1410 DATA 39,12,39,10,40,9,43,9,46,12,46,14,43,17,40,15,40,14,42,14,43,13,42,12
1420 DATA 40,12,40,13,38,14,38,16,34,16,30,19,30,20,33,22,34,22,34,25,37,21
1430 DATA 36,19,39,17,40,17,41,18,41,19,43,18,44,22,46,23,46,24,45,24,45,25
1440 DATA 45,26,46,26,46,28,43,27,43,26,45,25,42,25,39,25,40,27,40,30,37,30
1450 DATA 32,35,32,37,28,39,29,43,28,44,27,43,26,40,24,40,24,41,21,41,18,44
1460 DATA 18,46,17,47,19,49,21,48,21,46,24,46,22,51,25,51,25,55,28,55,28,56
1470 DATA 29,56,32,53,35,55,36,54,42,58,44,58,45,60,45,62,47,62,48,64,51,64
1480 DATA 54,66,54,68,52,71,52,76,48,80,48,83,45,87,45,88,42,91,42,94,43,95
1490 DATA 43,99,45,100,42,100,43,99,41,100,38,96,35,88,35,83,34,76,30,74,30,73
1500 DATA 26,66,26,62,28,57,27,56,24,56,22,53,21,53,21,52,19,52,19,51,16,51
1510 DATA 12,49,13,47,10,40,11,46,10,46,8,42,8,38,7,37,7,32,11,27,12,27,12,26
1520 DATA 11,24,12,19,9,17,7,18,6,18,6,19,4,19,2,20,2,16
1530 DATA 5
1540 DATA 31,8,34,7,35,8,32,9,31,8
1550 DATA 4
1560 DATA 34,9,36,9,34,11,34,9
1570 DATA 5
1580 DATA 36,7,38,7,38,8,36,8,36,7
1590 DATA 40
1600 DATA 42,7,46,4,44,4,43,6,41,6,41,5,44,4,48,2,50,2,51,3,50,4,54,3,58,3,61,1
1610 DATA 64,1,65,3,67,3,67,4,65,8,64,8,62,10,63,10,63,11,59,12,58,14,57,14
1620 DATA 53,19,51,18,49,14,51,12,51,11,52,11,52,8,48,8,47,7,50,4,48,4,45,8
1630 DATA 44,7,42,7
1640 DATA 6
1650 DATA 62,13,66,13,67,14,64,16,62,14,62,13
1660 DATA 7
1670 DATA 25,46,26,45,28,45,31,47,29,48,29,47,25,46
1680 DATA 5
1690 DATA 32,47,34,48,32,49,31,48,32,47
1700 DATA 5
1710 DATA 78,5,80,5,81,6,79,7,78,5
1720 DATA 4
1730 DATA 81,4,82,4,82,5,81,4
1740 DATA 4
1750 DATA 81,6,82,6,82,7,81,6
1760 DATA 8
1770 DATA 94,10,94,8,97,6,98,6,98,7,95,9,95,10,94,10
1780 DATA 9
1790 DATA 96,70,98,69,98,68,99,67,100,70,98,76,96,77,95,75,96,70
1800 DATA 5
1810 DATA 140,20,143,23,143,25,142,25,140,20
1820 DATA 5
1830 DATA 143,26,145,26,146,27,144,29,143,26
1840 DATA 9
1850 DATA 145,29,147,30,147,33,143,36,142,35,144,34,142,34,145,32,145,29
1860 DATA 5
1870 DATA 139,40,140,40,140,43,139,42,139,40
1880 DATA 7
1890 DATA 140,46,141,45,142,48,143,50,142,50,139,48,140,46
1900 DATA 4
1910 DATA 140,51,140,52,139,53,140,51
1920 DATA 4
1930 DATA 142,50,143,52,142,52,142,50
1940 DATA 10
1950 DATA 144,52,145,53,144,56,143,55,143,54,142,54,142,53,142,52,143,52,144,52
1960 DATA 9
1970 DATA 138,54,140,54,140,60,138,62,135,62,134,60,134,57,136,57,138,54
1980 DATA 8
1990 DATA 141,58,144,58,144,59,142,59,143,64,141,64,140,62,141,58
2000 DATA 5
2010 DATA 145,58,146,58,146,59,145,59,145,58
2020 DATA 15
2030 DATA 147,59,149,59,150,60,152,60,156,62,158,64,160,64,158,66,160,68,157,68
2040 DATA 155,66,152,67,151,64,148,62,147,59
2050 DATA 4
2060 DATA 143,66,140,66,140,67,141,67
2070 DATA 2
2080 DATA 143,67,144,66
2090 DATA 13
2100 DATA 160,86,162,86,163,90,160,93,159,92,154,96,152,96,152,95,158,91
2110 DATA 159,92,159,90,161,89,160,86
2120 DATA 26
2130 DATA 133,85,134,83,134,76,136,74,138,74,143,70,145,70,148,68,150,68
2140 DATA 150,70,152,72,153,68,154,68,156,76,158,78,152,88,146,89,148,90
2150 DATA 148,91,146,92,146,89,144,84,139,84,139,85,134,85,133,84
2160 DATA 10
2170 DATA 126,55,127,55,133,61,132,65,136,66,137,65,136,64,131,64,126,57,126,55
2180 DATA 9
2190 DATA 68,20,70,19,71,20,71,22,72,23,72,24,68,25,69,22,68,20
2200 DATA 5
2210 DATA 68,22,68,24,66,24,67,22,68,22
2220 DATA 178
2230 DATA 65,36,60,44,60,52,66,57,74,57,74,60,77,64,77,68,76,70,76,73,81,83
2240 DATA 86,83,91,76,91,73,94,70,94,66,93,64,93,62,100,54,100,51,96,52
2250 DATA 92,47,90,40,94,46,96,50,100,49,102,48,105,44,103,42,108,42,110,45
2260 DATA 112,45,113,52,115,55,116,55,117,52,117,55,118,55,118,53,117,52
2270 DATA 118,48,122,44,127,51,127,53,130,58,132,58,132,57,128,52,128,50
2280 DATA 132,54,134,52,134,50,132,46,132,44,136,44,138,42,139,36,136,34
2290 DATA 136,32,134,32,134,30,137,30,139,34,140,34,141,33,139,30,139,28
2300 DATA 141,28,141,28,136,18,136,16,141,16,141,14,143,14,143,18,147,21
2310 DATA 148,20,145,15,148,12,147,10,150,10,149,8,146,8,144,7,138,7,138,8
2320 DATA 134,8,134,7,126,7,126,8,122,8,122,7,115,7,114,5,110,5,110,4,108,4
2330 DATA 106,2,104,4,105,4,105,3,106,3,106,5,108,5,108,7,106,7,102,9,104,12
2340 DATA 102,12,100,8,99,8,99,10,100,12,94,12,92,13,91,11,90,11,90,14,88,15
2350 DATA 88,14,89,13,84,10,82,10,74,17,74,20,76,19,79,21,80,20,80,17,82,14
2360 DATA 84,16,82,18,83,20,80,22,76,22,76,20,75,20,75,22,70,26,69,26,70,28
2370 DATA 70,29,66,29,65,33,67,34,71,33,71,31,76,29,79,33,79,34,80,34,80,31
2380 DATA 76,28,79,28,83,34,83,32,86,31,86,28,88,28,89,29,90,27,92,27,91,28
2390 DATA 93,30,88,30,85,33,86,34,90,34,90,38,86,38,83,36,80,38,76,36,76,34
2400 DATA 71,34,70,35,67,35,65,36
2410 DATA 5
2420  DATA 96,28,98,27,100,34,98,34,96,28
2430 DATA -34
2440 ON CHC GOTO 2590,2590,2480,2480,2450,2450,2480,2480
2450 ON CHC GOTO 2590,2590,2590,2590,2460,2460,2460,2460
2460 DEF SEG = 0 : SBR% = 260 : CALL SBR%(SBR%)
2470 GOTO 2590
2480 READ X,Y
2490 IF X < 0 OR Y < 0 THEN 2450
2500    IF CHC = 3 OR CHC = 7 THEN PAINT (X+50,Y+20),2,3 : GOTO 2520
2510    PAINT (X*2,Y*2),2,3
2520 GOTO 2480
2530 DATA 20,30
2540 DATA 110,30,98,72,56,10,150,80,154,64,138,58
2550 DATA 156,94,130,60,135,65,40,70,70,23,67,23
2560 DATA 64,14,47,4,28,46,79,5,145,27,146,32,142,23,141,47,144,54
2570 DATA 78,31,79,5,147,91,141,61,139,41,44,27,32,48,95,8
2580 DATA -23,-23,-23,-23
2590 Z$=INKEY$ : IF Z$="" THEN 2590
2600 SCREEN 0,0,0,0 : WIDTH 80 : CLS
2610 END
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0093

     Volume in drive A has no label
     Directory of A:\

    DETAB    DOC      2816   8-23-83  12:09a
    DETAB    EXE     10752   8-18-83   5:27a
    FLASHCRD           896   6-02-83  12:09a
    FLASHCRD BAS     11008   8-21-83  10:07a
    FLASHCRD LST       128   6-02-83  12:09a
    FLIPPER  BAS      6016   8-01-83  12:00a
    LOANANAL BAS     39936   8-20-83   4:11p
    MORSECOD BAS      2816   2-25-87   4:37p
    TANK     BAS      7808   9-18-83   3:51p
    VW128FIX BAT      2165   7-24-83   5:25p
    VW128FIX INS        31   7-24-83   3:23p
    WORLDMAP BAS      9472   8-21-83   1:50p
           12 file(s)      93844 bytes
                           63488 bytes free
