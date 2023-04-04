---
layout: page
title: "PC-SIG Library Disk #49"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0049/
machines:
  - id: ibm5150
    type: pcx86
    config: /machines/pcx86/ibm/5150/cga/256kb/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk 0049"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5150" %}

{% comment %}info_begin{% endcomment %}

## Information about "PC-SIG SAMPLER #2"

    Another virtual potpouri of programs, which includes programs which will
    allow you to print 3x5 cards, display dot matrix characters, on-screen
    digital clock, play with a Rubic cube simulation, use a calendar
    program, calculate great circle crossings, try a hearing test, run a
    loan amortization statistics program, or hit the bouncing ball.
    
    System Requirements:  Some programs require color graphics.
    
    How to Start: To read DOC files, enter TYPE filename.ext and press
    <ENTER>.  For instructions on running BASIC programs, please refer to
    the GETTING STARTED section in this catalog.
    
    File Descriptions:
    
    ADDRFLCD BAS  Prints 3x5 cards
    BIGTYPE1 BAS  Displays dot matrix characters in ROM pattern
    CALEPSON BAS  Modification to CALENDAR.BAS (1.0 & 1.1) for Epson printer
    CALEPSON DOC  Documentation for CALEPSON
    CHARDISP BAS  Displays screen character set
    CUBE     BAS  Rubic cube simulation
    CLOCK    BAS  On screen digital clock
    EMBEDDED BAS  Demonstrates embedded printer commands
    DAYLOG   BAS  Calendar program
    FINISH   BAS  Text formatter written in BASIC
    FINISHTX BAS  Documentation for FINISH.BAS  (Use FINISH.BAS to list)
    GREATCIR BAS  Calculate great circle crossings
    GREATRHM BAS  Great circle calculations
    JOYSTEST BAS  Test joystick
    HEARING  BAS  Hearing test
    PRINTER2 BAS  Sets up printer and lists files
    PCHALLEN BAS  Game - hit the bouncing ball
    NCCLSPRE BAS  Statistics program - precision based on collected data
    LOAN3    BAS  Loan amortization
    PRINTSET      Sets up Epson printer to 1/8 inch line spacing
    JOYSTICK BAS  Display joystick values
    PRINTSET DOC  Description of how to use PRINTSET
    RHMLINE  BAS  World navigation
    SEC&BYTE BAS  Prints a table listing # of bytes as a function of sectors
    XREFMOD  BAS  Produces cross-reference of variables in a BASIC program
    SPINOUT  BAS  Game using color graphics
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## ADDRFLCD.BAS

```bas
10 KEY OFF:CLS
20 '                PC^3 Software Library Program  ADDRFLCD
30 '                    Michael Csontos  7-30-82
40 PRINT " This program generates form filecards (3x5 index cards) for the collection and"
50 PRINT " filing of club membership or other name and address information.  They look"
60 PRINT " something like the following.":PRINT
70 PRINT
80 PRINT "              Name:______________________________________________
90 PRINT "               as you want it on address labels
100 PRINT "             Street Address______________________________________
110 PRINT "               for mailing purposes
120 PRINT "             City___________________________State________ZIP_____
130 PRINT
140 PRINT "             Company_______________________Mail Code_____________
150 PRINT "               may help in distributing meeting notices
160 PRINT "             Phone:Home___________________Work___________________
170 PRINT
180 PRINT "             Club Office_________________________________________
190 PRINT "               office or duties assumed during the current year
200 PRINT
210 PRINT " The program is set up for an Epson MX-80 with Graphtrack. Other printers may
220 PRINT " require modification of the printer commands.  The output is intended for
230 PRINT "continuous sprocket feed form index cards (one across) such as are available
240 PRINT "from Misco Inc., Box 399, Holmdel, NJ 07733, 800/631-2227 (Cat. # 8871)
250 PRINT
260 INPUT "How many cards do you want in this run"; NUMBER
270 IF NUMBER<1 OR INT(NUMBER)<>NUMBER THEN PRINT "Please enter an integer number from 1 to the number of blank cards you have":GOTO 260
280 INPUT "Is the printer ready to print the cards";Q$
290 IF Q$="y" OR Q$="Y" THEN GOTO 320
300 IF Q$="n" OR Q$="N" THEN GOTO 280
310 PRINT "Please enter Y, y, N, or n":GOTO 280
320 PRINTED=NUMBER
330 LPRINT CHR$(27)CHR$(64);'                           reset printer
340 LPRINT CHR$(27)CHR$(67)CHR$(0)CHR$(3);'             3 inch form
350 LPRINT CHR$(15)CHR$(27)CHR$(65)CHR$(10);'           10/72 inch lines
360 IF NUMBER>0 THEN GOSUB 390  ELSE GOTO 550
370 NUMBER=NUMBER-1
380 GOTO 360
390 LPRINT CHR$(27)CHR$(69) "Name:" CHR$(27)CHR$(45)CHR$(1) STRING$(40,"_") CHR$(27)CHR$(45)CHR$(0)'
400 LPRINT CHR$(27)CHR$(70)CHR$(27)CHR$(83)CHR$(0) "    AS YOU WANT IT ON ADDRESS LABLES" CHR$(27)CHR$(72)
410 LPRINT
420 LPRINT CHR$(27)CHR$(69) "Street Address:" CHR$(27)CHR$(45)CHR$(1) STRING$(30,"_") CHR$(27)CHR$(45)CHR$(0)
430 LPRINT CHR$(27)CHR$(70)CHR$(27)CHR$(83)CHR$(0) "    FOR MAILING PURPOSES" CHR$(27)CHR$(72)
440 LPRINT
450 LPRINT CHR$(27)CHR$(69) "City:" CHR$(27)CHR$(45)CHR$(1) STRING$(17,"_") CHR$(27)CHR$(45)CHR$(0) "State:" CHR$(27)CHR$(45)CHR$(1) STRING$(5,"_") CHR$(27)CHR$(45)CHR$(0) "ZIP:" CHR$(27)CHR$(45)CHR$(1) STRING$(8,"_") CHR$(27)CHR$(45)CHR$(0)
460 LPRINT :LPRINT
470 LPRINT CHR$(27)CHR$(69) "Company:" CHR$(27)CHR$(45)CHR$(1) STRING$(13,"_") CHR$(27)CHR$(45)CHR$(0) "Mail Code:" CHR$(27)CHR$(45)CHR$(1) STRING$(14,"_") CHR$(27)CHR$(45)CHR$(0)
480 LPRINT CHR$(27)CHR$(70)CHR$(27)CHR$(83)CHR$(0) "    MAY HELP IN DISTRIBUTING MEETING NOTICES" CHR$(27)CHR$(72)
490 LPRINT
500 LPRINT CHR$(27)CHR$(69) "Phone:Home:" CHR$(27)CHR$(45)CHR$(1) STRING$(14,"_") CHR$(27)CHR$(45)CHR$(0) "Work:" CHR$(27)CHR$(45)CHR$(1) STRING$(15,"_") CHR$(27)CHR$(45)CHR$(0)
510 LPRINT :LPRINT
520 LPRINT "Club Office:" CHR$(27)CHR$(45)CHR$(1) STRING$(33,"_") CHR$(27)CHR$(45)CHR$(0)'
530 LPRINT CHR$(27)CHR$(70)CHR$(27)CHR$(83)CHR$(0) "    OFFICE OR DUTIES ASSUMED BY YOU DURING THE CURRENT YEAR" CHR$(27)CHR$(72)
540 LPRINT CHR$(140);:RETURN
550 PRINT PRINTED " cards completed.":PRINT:PRINT:KEY ON
560 END
570 ' SAVE"addrflcd
```

## BIGTYPE1.BAS

```bas
10 'Program to display dot matrix characters from ROM patterns.
20 'Will Fastie --19 Nov 81. Typed in 6 Feb 82 from Creative Computing
30 ' VOL.8 NO. 3 (MARCH 82) BY R. HILL
40 'Modified to write over whole screen 2/13/82, by R. Hill.
50 DEFINT A-Z
90 GOSUB 1300
100 DEF SEG=&HF000
110 BASEADR=&HFA6E
120 BYTESPERCHAR=8
130 KEY OFF
200 CLS
201 X=1:Y=1
210 CHAR$=INKEY$: IF CHAR$="" THEN 210
220 CODE=ASC(CHAR$)
230 IF CODE >= 128 THEN BEEP: GOTO 200
240 ADR = BASEADR+(CODE*BYTESPERCHAR)
260 DOTCHAR=CODE
265 'Change "DOTSIZE" to get different width characters.
270 DOTSIZE=1
280 DOT$=STRING$(DOTSIZE,DOTCHAR)
285 GOSUB 1000
290 Y=Y+8*DOTSIZE
295 IF Y<SCREENWIDTH GOTO 210
300 IF X=17 GOTO 320
305 X=X+8
310 Y=1
315 GOTO 210
320 Y=1:CHAR$=INKEY$:IF CHAR$="" THEN 320
325 PRINT"":PRINT"":PRINT"":PRINT"":PRINT"":PRINT"":PRINT"":PRINT"":PRINT""
330 GOTO 220
1000 FOR ROW=1 TO 8
1010   ROWVAL=PEEK(ADR+(ROW-1))
1020   FOR COL=1 TO 8
1030     COLMASK=2^(7-(COL-1))
1040     IF (ROWVAL AND COLMASK) <> 0 THEN GOSUB 1200
1050   NEXT COL
1060 NEXT ROW
1080 RETURN
1200 'Locate to bit position and display giant pixel!
1210 LOCATE X+(ROW-1),Y+(COL-1)*DOTSIZE
1220 PRINT LEFT$(DOT$,DOTSIZE);
1230 RETURN
1300 'Initialize display
1310 SCREENWIDTH=80
1320 RETURN
```

## CALEPSON.BAS

```bas
1440 T$ = STRING$(4,157)+CHR$(152) : M$(1)=CHR$(134)+T$+T$+T$+T$+T$+T$+STRING$(4,157)+CHR$(149)
1450 T$ = "    "+CHR$(156) : M$(2)=CHR$(156)+T$+T$+T$+T$+T$+T$+"    "+CHR$(156):M$(3)=M$(2)
1480 T$ = STRING$(4,157)+CHR$(159) : M$(4)=CHR$(150)+T$+T$+T$+T$+T$+T$+STRING$(4,157)+CHR$(151)
1490 T$ = STRING$(4,157)+CHR$(158) : M$(19)=CHR$(153)+T$+T$+T$+T$+T$+T$+STRING$(4,157)+CHR$(154)
1500 FOR I = 5 TO 18:M$(I) = M$(I-3):NEXT I
1740 IF YR = 4 THEN DAYS(2)=29
1750 IF YR = 8 THEN DAYS(2)=29
65000 '         SAVE"calepson",a
```

## CHARDISP.BAS

```bas
10 '     Picture City Personal Computer Programming Club    "CHARDISP"
20 '             Michael Csontos, 3228 Livonia Center Road, Lima, NY 14485
30 KEY OFF:CLS
40 PRINT "This program allows you to view the complete character set for
50 PRINT "       the IBM Personal Computer on the display in a form which
60 PRINT "       allows you to closely examine it for selection of characters
70 PRINT "       which might be useful for special purposes.
80 PRINT
90 PRINT "The entire set will scroll slowly and may be stopped at any time by
100 PRINT "       pressing <Ctrl> and <Num Lock> keys simutaniously. To resume
110 PRINT "       the scrolling, press the space bar.   Use <Ctrl>+<Break) to
120 PRINT "       stop before the end. If you then want to start elsewhere in
130 PRINT "       the series, type N=nnn, <"CHR$(217)"> 3 or 4 times, and <F5>.
140 PRINT "
150 PRINT "To use characters which are not represented by keys on the keyboard,
160 PRINT "      the sequence CHR$(n) must be used in a print statement, where
170 PRINT "      n is the number that appears at the beginning of the line
180 PRINT "      in the display, e.g. PRINT CHR$(146) produces ";CHR$(146);"."
190 PRINT
200 PRINT "Non-displayed characters are described only, since outputting them
210 PRINT "      to the display might produce a confusing result.
220 PRINT "
230 INPUT "Ready to start (Y/N)";A$
240 IF A$="Y" GOTO 290
250 IF A$="y" GOTO 290
260 IF A$="n" THEN GOTO 580
270 IF A$="N" THEN GOTO 580
280 PRINT:PRINT "The program will respond to keys y,Y,n or N only!":FOR W=1 TO 5000:NEXT :GOTO 10
290 CLS
300 FOR N=0 TO 255
310 IF N<10 THEN PRINT " ";
320 IF N<100 THEN PRINT " ";
330 PRINT N;
340 IF N=0 THEN PRINT "NULL":L$=STRING$(20,CHR$(1)):GOTO 740
350 IF N=7 THEN PRINT "BEEP";CHR$(7):GOTO 590
360 IF N=8 THEN PRINT "BACKSPACE":GOTO 590
370 IF N=9 THEN PRINT "TAB":GOTO 590
380 IF N=10 THEN PRINT "LINE FEED":GOTO 590
390 IF N=11 THEN PRINT "HOME":GOTO 590
400 IF N=12 THEN PRINT "FORM FEED":GOTO 590
410 IF N=13 THEN PRINT "CARRIAGE RETURN":GOTO 700
420 IF N=28 THEN PRINT "CURSOR RIGHT":GOTO 590
430 IF N=29 THEN PRINT "CURSOR LEFT":GOTO 590
440 IF N=30 THEN PRINT "CURSOR UP":GOTO 590
450 IF N=31 THEN PRINT "CURSOR DOWN":GOTO 590
460 IF N=32 THEN PRINT "SPACE":GOTO 730
470 IF N=255 THEN PRINT "BLANK 'FF'":GOTO 590
480 PRINT CHR$(N);"  ";
490 FOR M=1 TO 72
500 PRINT CHR$(N);
510 NEXT M
520 FOR Q=0 TO 1500:NEXT'delay at end of full charactor lines
530 IF FIX(N/2)=N/2 THEN 600 ELSE 650
540 PRINT SPC(40);Z$;W$;:FOR P=0 TO 400:NEXT 'delay at end of split lines
550 GOSUB 760
560 NEXT N
570 FOR NN=0 TO 10:PRINT:FOR NNN=0 TO 1500:NEXT:PRINT:GOSUB 760:FOR NNNN=0 TO 1000:NEXT:NEXT:CLS
580 PRINT:PRINT "G";CHR$(1);CHR$(2);CHR$(3);"  B";CHR$(157);CHR$(144):PRINT:KEY ON:END
590 FOR O=0 TO 2000:NEXT:PRINT:FOR O=0 TO 1000:NEXT:GOTO 550'delays for non-print lines
600 X$=CHR$(N)
610 Z$=STRING$(20,X$)
620 IF N=6 THEN Y$=" ":GOTO 640
630 Y$=CHR$(N+1)
640 W$=STRING$(20,Y$):GOTO 540
650 IF N=7 THEN Y$=" ":GOTO 670
660 Y$=CHR$(N)
670 W$=STRING$(20,Y$)
680 X$=CHR$(N+1)
690 Z$=STRING$(20,X$):GOTO 540
700 K$=STRING$(20,CHR$(14))
710 PRINT SPC(40);K$
720 GOTO 550
730 L$=STRING$(20,CHR$(33))
740 PRINT SPC(60);L$;
750 GOTO 550
760 DEF SEG = &HB800
770 FOR COLUMN = 50 TO 70
780 POKE ((CSRLIN-10)*160+(COLUMN-1)*2)+1,112
790 NEXT COLUMN
800 FOR COLUMN = 50 TO 70
810 POKE ((CSRLIN-11)*160+(COLUMN-1)*2)+1,112
820 NEXT COLUMN
830 RETURN
840 '           SAVE"CHARDISP
```

## CLOCK.BAS

```bas
10 REM                   Smart Digital Clock
11 REM
12 REM           by: Dale Dewey
13 REM               Eastman Kodak Company
14 REM
100 REM  Define screen fundamental strings
110 REM
120 BSLF$=CHR$(29)+CHR$(31)
130 HL$=CHR$(205)+CHR$(205)+CHR$(205)
140 VL$=CHR$(186)+BSLF$+CHR$(186)+BSLF$
150 US5$=CHR$(30)+CHR$(30)+CHR$(30)+CHR$(30)+CHR$(30)
160 US3$=LEFT$(US5$,3)
170 BS4$=CHR$(29)+CHR$(29)+CHR$(29)+CHR$(29)
200 REM
210 REM Start of main program
220 REM
230 CLS:WIDTH 80:KEY OFF
240 REM
250 REM Set the time if necessary
260 REM
270 PRINT "Do you wish to set the time? => ";
280 A$=INKEY$
290 IF LEN(A$)<>1 THEN A$="":GOTO 280
300 PRINT
310 IF LEFT$(A$,1)="y" THEN GOSUB 1530
320 IF LEFT$(A$,1)="Y" THEN GOSUB 1530
330 T$=TIME$
500 REM
510 REM Display the time
520 REM
530 CLS
540 REM
550 REM Draw the box
560 REM
570 LOCATE 6,20
580 FOR I=1 TO 39:PRINT CHR$(223);:NEXT I:PRINT
590 LOCATE 6,19
600 FOR I=1 TO 11:PRINT CHR$(222);BSLF$;:NEXT I:PRINT
610 LOCATE 6,59
620 FOR I=1 TO 11:PRINT CHR$(221);BSLF$;:NEXT I:PRINT
630 LOCATE 16,20
640 FOR I=1 TO 39:PRINT CHR$(220);:NEXT I:PRINT
650 REM
660 REM Draw the digits
670 REM
680 X=8:Y=25:Z=VAL(LEFT$(T$,1))
690 GOSUB 1030
700 Y=32:Z=VAL(MID$(T$,2,1))
710 GOSUB 1030
720 Y=39:Z=10:COLOR 23
730 GOSUB 1030
740 Y=42:Z=VAL(MID$(T$,4,1)):COLOR 7
750 GOSUB 1030
760 Y=49:Z=VAL(MID$(T$,5,1))
770 GOSUB 1030
780 REM
790 REM Wait for the minutes to change
800 REM
810 WHILE MID$(T$,5,1)=MID$(TIME$,5,1):WEND
820 T$=TIME$
830 GOTO 530
1000 REM
1010 REM Locate the digit and print the number
1020 REM
1030 LOCATE X,Y:ON Z+1 GOSUB 1140,1150,1160,1170,1180,1190,1200,1210,1220,1230,1240:RETURN
1100 REM
1110 REM Print strings for each digit. Value of Z in statement 1030 picks digit
1120 REM        to be printed.  If Z=2 then a '2' is printed.
1130 REM
1140 PRINT CHR$(201);HL$;CHR$(187);BSLF$;VL$;VL$;CHR$(186);BSLF$;BS4$;US5$;VL$;VL$;CHR$(186);BSLF$;CHR$(200);HL$;CHR$(188):RETURN
1150 PRINT " ";CHR$(213);CHR$(187);BSLF$;VL$;VL$;CHR$(186);BSLF$;CHR$(29);CHR$(29);CHR$(212);CHR$(205);CHR$(202);CHR$(205);CHR$(190):RETURN
1160 PRINT CHR$(213);HL$;CHR$(187);BSLF$;VL$;BS4$;CHR$(201);HL$;CHR$(188);BSLF$;BS4$;VL$;CHR$(200);HL$;CHR$(190):RETURN
1170 PRINT CHR$(213);HL$;CHR$(187);BSLF$;VL$;BS4$;CHR$(198);HL$;CHR$(185);BSLF$;VL$;BS4$;CHR$(212);HL$;CHR$(188):RETURN
1180 PRINT CHR$(210);BSLF$;VL$;CHR$(200);HL$;CHR$(185);CHR$(29);US3$;CHR$(210);BSLF$;VL$;CHR$(31);VL$;CHR$(208):RETURN
1190 PRINT CHR$(201);HL$;CHR$(184);BSLF$;BS4$;VL$;CHR$(200);HL$;CHR$(187);BSLF$;VL$;BS4$;CHR$(212);HL$;CHR$(188):RETURN
1200 PRINT CHR$(201);HL$;CHR$(184);BSLF$;BS4$;VL$;CHR$(200);HL$;CHR$(187);BSLF$;VL$;BS4$;CHR$(212);HL$;CHR$(188);US3$;CHR$(29);BS4$;CHR$(204);BSLF$;VL$;CHR$(200):RETURN
1210 PRINT CHR$(213);HL$;CHR$(187);BSLF$;VL$;VL$;CHR$(186);BSLF$;CHR$(208):RETURN
1220 PRINT CHR$(201);HL$;CHR$(187);BSLF$;VL$;VL$;CHR$(186);BSLF$;BS4$;US5$;VL$;VL$;CHR$(186);BSLF$;CHR$(200);HL$;CHR$(188);US3$;CHR$(29);BS4$;CHR$(204);HL$;CHR$(185):RETURN
1230 PRINT CHR$(210);BSLF$;VL$;CHR$(200);HL$;CHR$(185);CHR$(29);US3$;CHR$(210);BSLF$;VL$;CHR$(31);VL$;CHR$(208);US3$;US3$;CHR$(29);BS4$;CHR$(201);HL$;CHR$(187):RETURN
1240 PRINT  " ";BSLF$;CHR$(2);BSLF$;CHR$(31);CHR$(31);CHR$(2):RETURN
1500 REM
1510 REM Set the time
1520 REM
1530 INPUT "Enter the HOUR => ",H$
1540 IF LEN(H$)=1 THEN 1550 ELSE H$=LEFT$(H$,2)
1550 INPUT "Enter the MINUTES => ",M$
1560 IF LEN(M$)=1 THEN 1570 ELSE M$=LEFT$(M$,2)
1570 INPUT "Enter the SECONDS => ",S$
1580 IF LEN(S$)=0 THEN S$="0"
1590 IF LEN(S$)=1 THEN S$="0"+S$ ELSE S$=LEFT$(S$,2)
1600 TIME$=H$+":"+M$+":"+S$
1610 T$=TIME$
1620 RETURN
```

## CUBE.BAS

```bas
7 ' Source:  Printed copy offered in
8 '          PC Magazine, Vol. 1, No. 2, pp. 85-87
9 ' (all comments omitted)
10 '                          RUBIK'S CUBE SIMULATOR
20 '                                 PC MAGAZINE
30 '                                 march, 1982
40 '                                 karl koessel
50 SCREEN 0,1,0,0
60 COLOR 7,0,1
70 CLS
80 KEY OFF
90 CLEAR,,2000
100 DEFINT A-Z
110 DIM HOLD(20)
120 GOSUB 3240
130 GOSUB 3620
140 GOSUB 3680
150 GOSUB 3770
160 GOSUB 600
190 GOSUB 2760
200 COLOR 23
210 PRINT "Enter ";
220 COLOR 7
230 INPUT "a twist or command: ",TWIST$
240 IF TWIST$="" THEN 190
250 GOSUB 1860
260 REQ$=TWIST$
270 GOSUB 820
280 IF D THEN 190
290 GOSUB 910
300 GOTO 190
320 GOSUB 2760
330 PRINT "Press [RETURN] to twist the ";
340 IF CLRMON THEN COLOR BR(F) ELSE COLOR 1
350 PRINT PLACE$(1,F);
360 COLOR 7
370 PRINT " face ";
380 IF CLRMON THEN COLOR BR(F) ELSE COLOR 1
390 PRINT DIRECTION$(OSO)
400 COLOR 7
410 IF CLRMON AND BIG THEN 430
420 PRINT SPC(13)
430 PRINT "or enter a new twist or command: ";
440 INPUT "",GO$
450 GOSUB 1860
460 IF GO$="" THEN 530
470 REQ$=,GO$
480 GOSUB 820
490 ON D GOTO 320,320,320,320,510,320,320,320,530
500 GOSUB 910
510 RETURN
530 GOSUB 2360
540 GOSUB 2520
550 GOSUB 1900
560 GOSUB 2000
570 GOSUB 1590
580 RETURN
600 GOSUB 1900
610 IF CLRMON THEN WIDTH 40:BIG=-1
620 IF NOT BIG AND D=8 THEN RETURN
630 GOSUB 2790
640 IF D<>8 THEN GOSUB 2610
650 IF NOT BIG THEN 690
660 GOSUB 3020
670 CLS
680 GOSUB 3040
690 GOSUB 1290
700 RETURN
720 RQ$=""
730 FOR K=1 TO LEN(REQ$)
740     RK$=MID$(REQ$,K,1)
750     IF RK$="'" THEN 770
760     RK$=CHR$((ASC(RK$) AND 95))
770     RQ$=RQ$+RK$
780 NEXT
790 REQ$=RQ$
800 RETURN
820 GOSUB 720
830 D=0
840 FOR DMI=1 TO 9
850     IF LEFT$(REQ$,LEN(DM$(DMI)))=DM$(DMI) THEN D=DMI
860 NEXT
870 IF D>0 AND D<4 THEN DM=D-1
880 ON D GOSUB 1590,1590,1590,1380,600,1210,2040,610,1350
890 RETURN
910 GOSUB 1900
930 IF MID$(REQ$,2,1)=""OR MID$(REQ$,2,1)="'"AND LEN(REQ$)<3 THEN 960
940 GOTO 1020
960 F=0
970 FOR W=1 TO LEN(T$)
980     IF LEFT$(REQ$,1)=MID$(T$,W,1) THEN F=W:TWIST$=REQ$
990 NEXT
1000 IF F THEN 1100
1020 GOSUB 2760
1030 PRINT "Input ";:COLOR 23:PRINT "NOT";:COLOR 7:PRINT " recognized"
1040 PRINT "    One moment please..."
1050 GOSUB 1590
1060 GOSUB 1860
1070 RETURN
1100 IF MID$(REQ$,2,1)="'" THEN OSO=2:OSI=1 ELSE OSO=0:OSI=5
1120 GOSUB 2200
1130 GOSUB 2260
1150 GOSUB 2460
1170 IF SKIP THEN 530
1180 GOSUB 1590
1190 GOTO 320
1210 IF NOT CLRMON THEN 1330
1220 BIG=NOT BIG
1230 IF BIG THEN WIDTH 40:GOTO 1260
1240 WIDTH 80
1250 GOSUB 2790
1260 GOSUB 1290
1270 RETURN
1290 IF BIG THEN GOSUB 3060
1300 GOSUB 1390
1310 GOSUB 1590
1320 IF NOT BIG THEN GOSUB 2040
1330 RETURN
1350 SKIP=NOT SKIP
1360 RETURN
1380 LABEL = NOT LABEL
1390 FOR FA=1 TO 6
1400     IF BIG THEN LOCATE XBL(FA),YBL(FA):GOTO 1420
1410     LOCATE X(FA)+2,Y(FA)-1
1420     IF NOT LABEL GOTO 1460
1430     IF CLRMON THEN COLOR BR(FA) ELSE COLOR 1
1440     PRINT PLACE$(1,FA);
1450     GOTO 1470
1460     PRINT SPC(5);
1470 NEXT
1480 IF NOT BIG THEN 1570
1490 FOR XBL=1 TO 2
1500     LOCATE XBL+4,19-XBL
1510     IF NOT LABEL THEN GOTO 1540
1520     COLOR BR(3)
1530     PRINT "/";
1540     PRINT " "
1550 NEXT
1560 COLOR 7
1570 RETURN
1590 DB=1:DUB=0
1600 IF BIG THEN DB=2
1610 FOR FA=1 TO 6
1620 FOR P=0 TO 8
1630 IF BIG THEN FOR DUB=0 TO 1
1640     LOCATE X(FA)+XOF(P)*DB+DUB-REL(FA)*BIG,Y(FA)+YOF(P)+RELY(FA)*BIG
1650     BR=BR(FIX(CUBIE(FA,P,1)\10))
1660     IF BR THEN COLOR CUBIE(FA,P,2)*-16,BR:GOTO 1680
1670     IF CUBIE(FA,P,2) THEN COLOR 0,7 ELSE COLOR 7,0
1680     IF DUB THEN PRINT "  ";:GOTO 1710
1690     IF DM THEN PRINT USING "\\"; CUBIE$(FA,P,DM);                                         ELSE PRINT USING "**"; CUBIE(FA,P,1);
1710     ON P+1 GOTO 1730,1720,1720,1800,1800,1800,1740,1740,1730
1720     ND=1:GOTO 1760
1730     ND=4:GOTO 1760
1740     ND=-1:GOTO 1760
1760     IF BR THEN COLOR BR,BR(FIX(CUBIE(FA,(P+ND) MOD 12,1)\10)) ELSE 1780
1770     PRINT CHR$(221);:GOTO 1800
1780     IF CUBIE(FA,P,2)=CUBIE(FA,(P+ND) MOD 12,2) THEN 1790 ELSE COLOR 7,0
1790     PRINT " ";
1800 IF BIG THEN NEXT
1810 NEXT
1820 NEXT
1830 COLOR 7,0
1840 RETURN
1860 GOSUB 2760
1870 PRINT "One moment, please..."SPC(79)SPC(39)SPC(21)
1880 RETURN
1900 FOR J=1 TO 4
1910     FOR K=1 TO 3
1920         CUBIE(FACE(J),((POSITION(J)+K-2) MOD 8)+1,2)=0
1930     NEXT
1940 NEXT
1950 FOR P=1 TO 8
1960     CUBIE(F,P,2)=0
1970 NEXT
1980 RETURN
2000 TWISTSSOFAR$(AT)=TWISTSSOFAR$(AT)+TWIST$+" "
2010 IF LEN(TWISTSSOFAR$(AT))>36 THEN AT=AT+1
2020 IF BIG THEN RETURN
2040 LOCATE 18,1
2050 IF BIG THEN PRINT
2060 COLOR 1
2070 PRINT TWISTSSOFAR$(0);
2080 COLOR 7
2090 PRINT SPC(13)
2100 FOR K=1 TO AT
2110     PRINT TWISTSSOFAR$(K);
2120     IF NOT BIG THEN PRINT TWISTSSOFAR$(K+1);:K=K+1
2130     PRINT
2140 NEXT
2150 IF NOT BIG THEN RETURN
2160 GOSUB 3020
2170 GOSUB 1860
2180 RETURN
2200 FOR J=1 TO 4
2210     FACE(J)=VAL(MID$(OC$(F),J*2-1,1))
2220     POSITION(J)=VAL(MID$(OC$(F),J*2,1))
2230 NEXT
2240 RETURN
2260 FOR J=1 TO 4
2270     FOR K=1 TO 3
2290         HOLD((J-1)*3+K)=CUBIE(FACE(J),((POSITION(J)+K-2) MOD 8)+1,1)
2310         CUBIE(FACE(J),((POSITION(J)+K-2) MOD 8)+1,2)=-1
2320     NEXT
2330 NEXT
2340 RETURN
2360 FOR J=1 TO 4
2370     FOR K=1 TO 3
2380         CUBIE(FACE(((J+OSO) MOD 4)+1),((POSITION(((J+OSO) MOD 4)+1)+K-2)                MOD 8)+1,1)=HOLD((J-1)*3+K)
2390         FOR DMI=1 TO 2
2400             CUBIE$(FACE(((J+OSO) MOD 4)+1),((POSITION(((J+OSO) MOD 4)+1)                    +K-2) MOD 8)+1,DMI)=PLACE$(DMI,FIX((HOLD((J-1)*3+K)\10)))
2410         NEXT
2420     NEXT
2430 NEXT
2440 RETURN
2460 FOR P=1 TO 8
2470     HOLD(12+P)=CUBIE(F,P,1)
2480     CUBIE(F,P,2)=-1
2490 NEXT
2500 RETURN
2520 FOR P=1 TO 8
2530     CUBIE(F,P,1)=HOLD(13+((P+OSI)MOD 8))
2540     FOR DMI=1 TO 2
2550         CUBIE$(F,P,DMI)=PLACE$(DMI,FIX(CUBIE(F,P,1)\10))
2560     NEXT
2570 NEXT
2580 RETURN
2610 FOR F = 1 TO 6
2620     FOR P = 0 TO 9
2630         CUBIE(F,P,1)=F*10+P
2640         FOR DMI=1 TO 2
2650             CUBIE$(F,P,DMI)=LEFT$(PLACE$(DMI,F),2)
2660         NEXT
2670     NEXT
2680 NEXT
2700 FOR K=1 TO AT
2710     TWISTSSOFAR$(K)=""
2720 NEXT
2730 AT=1
2740 RETURN
2760 IF BIG THEN LOCATE 19,1 ELSE LOCATE 15,1
2770 RETURN
2790 IF BIG THEN COLOR ,4:BG=3 ELSE BG=43
2800 CLS
2810 LOCATE 1,1+BG:COLOR 1:PRINT TITLE$
2820 LOCATE 3,3+BG:COLOR 7:PRINT"Each twist is called by the first"
2830 LOCATE 4,BG:PRINT"letter of the face you wish to twist:"
2840 LOCATE 5,BG:COLOR 1:PRINT"U";:COLOR 7:PRINT" for the upper face, ";             :COLOR 1:PRINT"L";:COLOR 7:PRINT" for the left"
2850 LOCATE 6,BG:PRINT"face, ";:COLOR 1:PRINT"F";:COLOR 7:                           :PRINT" for the front face, ";:COLOR 1:PRINT"R";:COLOR 7:PRINT" for the"
2860 LOCATE 7,BG:PRINT"right face, ";:COLOR 1:PRINT"B";:COLOR 7                      :PRINT" for the back face and ";:COLOR 1:PRINT"D":COLOR 7
2870 LOCATE 8,BG:PRINT"for the downward face. The twists will"
2880 LOCATE 9,BG:PRINT"be clockwise. To make a counterclock-"
2890 LOCATE 10,BG:PRINT"wise twist, the letter is followed by"
2900 LOCATE 11,BG:PRINT"a ";:COLOR 1:PRINT"'";:COLOR 7:PRINT" (e.g. ";               :COLOR 1:PRINT"L'";:COLOR 7:PRINT" ). To change the display,"
2910 LOCATE 12,BG:PRINT"enter either the word ";:COLOR 1:PRINT"Labels";              :COLOR 7:PRINT" or ";:COLOR 1:PRINT"Colors";:COLOR 7
2920 IF CLRMON THEN LOCATE 12,BG:PRINT"enter the word ";:COLOR 1:PRINT "Big";:                      COLOR 7:PRINT" or ";
2930 LOCATE 13,BG:PRINT"or ";:COLOR 1:PRINT"Faces";:COLOR 7:PRINT" or ";             :COLOR 1:PRINT"Codes";:COLOR 7:PRINT". Use ";:COLOR 1:PRINT"Skip";:COLOR 7      :PRINT" to resume/"
2940 LOCATE 14,BG:PRINT"skip verification. Use ";:COLOR 1:PRINT"New";:COLOR 7        :PRINT" to restart."
2950 IF NOT BIG THEN RETURN
2960 LOCATE 15,3:PRINT "To accommodate those using television ";
2970 PRINT "  sets (i.e. confined to WIDTH 40), the ";
2980 PRINT "  commands ";:COLOR 1:PRINT "List";:COLOR 7:PRINT " & ";:COLOR 1
2990 PRINT "Help";:COLOR 7:PRINT " have been added."
3000 RETURN
3020 LOCATE 25,9:PRINT "Press the spacebar to continue";
3030 IF INKEY$<>" " THEN 3030
3040 LOCATE 25,3:COLOR 1,4:PRINT TITLE$;:COLOR 7,0:RETURN
3060 LOCATE 1,19:COLOR BR(2),,BR(4):PRINT "Twists: ";
3070 FOR LI=1 TO 2:LOCATE LI,25+LI
3080     FOR TI=1 TO 3
3090         FOR DI=0 TO 1
3100             COLOR BR((LI-1)*3+TI)
3110             IF DI THEN PU$="!' " ELSE PU$="! "
3120             PRINT USING PU$;MID$(T$,(LI-1)*3+TI);
3130         NEXT
3140     NEXT
3150 NEXT
3160 LOCATE 4,31:COLOR BR(6):PRINT "Commands:";
3170 FOR CM=1 TO 9
3180     LOCATE 5+CM,35
3190     COLOR BR(CM MOD 6+1)
3200     PRINT DM$(CM)
3210 NEXT
3220 COLOR 7:RETURN
3240 FOR FACE=1 TO 6
3250     READ PLACE$(1,FACE)
3260 NEXT
3270 DATA"upper","left","front","right","back","down"
3280 FOR FACE=1 TO 6
3290     READ YOURS$(FACE)
3300 NEXT
3310 DATA"white","orange","blue","red","green","yellow"
3320 FOR P=1 TO 8
3330     READ XOF(P),YOF(P)
3340 NEXT
3350 DATA -1,-3,-1,0,-1,3,0,3,1,3,1,0,1,-3,0,-3
3360 FOR FA=1 TO 6
3370     READ XBL(FA),YBL(FA)
3380 NEXT
3390 DATA 2,4,13,3,4,19,13,19,13,27,17,17
3400 FOR FA=1 TO 6
3410     READ REL(FA),RELY(FA)
3420 NEXT
3430 DATA 1,2,3,0,3,2,3,4,3,6,5,2
3440 FOR F=1 TO 6
3450     READ X(F),Y(F)
3460 NEXT
3470 DATA 2,14,6,4,6,14,6,24,6,34,10,14
3480 FOR F=1 TO 6
3490     READ OC$(F)
3500 NEXT
3510 DATA "21514131","17376753","15476123","13576333","11276543","25354555"
3520 FOR DMI=1 TO 9
3530     READ DM$(DMI)
3540 NEXT
3550 DATA CODE,FACE,COLOR,LABEL,NEW,BIG,LIST,HELP,SKIP
3560 DIRECTION$(0)="clockwise":DIRECTION$(2)="counterclockwise"
3570 T$="ULFRBD"
3580 TWISTSSOFAR$(0)="The list of twists so far :"
3590 TITLE$=SPACE$(7)+"RUBIK'S CUBE SIMULATOR"+SPACE$(7)
3600 RETURN
3620 DEF SEG=0
3630 IF (PEEK(&H410) AND &H30)<>&H30 THEN CLRMON=-1
3640 DM=1
3650 LABEL=-1
3660 RETURN
3680 IF CLRMON THEN COLOR 1,4:WIDTH 40:K=1 ELSE WIDTH 80:K=21
3690 CLS:LOCATE 3,2+K:PRINT TITLE$
3700 LOCATE 6,15+K:PRINT"PC MAGAZINE"
3710 LOCATE ,15+K:COLOR 7:PRINT"march, 1982"
3720 LOCATE 24,19+K:PRINT"press the spacebar";
3730 IF INKEY$<>" " THEN 3730
3740 COLOR 7,0
3750 RETURN
3770 CLS
3780 LOCATE 2,7+K
3790 K$="*** COLORING THE CUBE ***"
3810 IF CLRMON THEN 3880
3830 PRINT K$
3840 LOCATE 9,K+6
3850 PRINT"(The name of each color":PRINT SPC(11+K)"should begin with a":
3860 PRINT SPC(16+K)"different letter.)":GOTO 4080
3880 FOR L=1 TO 25
3890     COLOR (L MOD 7)+1
3900     PRINT MID$(K$,L,1);
3910 NEXT
3920 LOCATE 4,4
3930 FOR C=1 TO 7
3940     COLOR ,C
3950     PRINT "     ";
3960     COLOR C,0
3970     PRINT "---";C;
3980     PRINT SPC(10)
3990 NEXT
4000 LOCATE 9,1
4010 COLOR 1,4
4020 PRINT "Choose each face's color by entering the";
4030 PRINT "appropriate number from the list above, ";
4040 COLOR 0,2
4050 PRINT "or just press [RETURN] for each face and";
4060 PRINT "the computer will choose the colors.    "
4080 LOCATE 15,K
4090 COLOR 23,0:PRINT"Enter";
4100 COLOR 7:PRINT" a color for each face:"
4110 PRINT
4120 FOR FACE = 1 TO 6
4130     LOCATE FACE+16,15+K:COLOR 0,7:PRINT USING" \    \";PLACE$(1,FACE);
4140     COLOR 7,0:INPUT;" ";PLACE$(2,FACE)
4150     IF CLRMON THEN 4190
4160     IF PLACE$(2,FACE)="" THEN PLACE$(2,FACE)=YOURS$(FACE)
4170     GOTO 4240
4190     IF PLACE$(2,FACE)="" THEN BR(FACE)=FACE:GOTO 4220                               ELSE BR(FACE)=VAL(PLACE$(2,FACE))
4200     IF BR(FACE)<1 OR BR(FACE)>7 THEN LOCATE ,26:PRINT SPC(14):GOTO 4130
4210     IF ASC(PLACE$(2,FACE))<56 THEN PLACE$(2,FACE)=MID$(PLACE$(2,FACE),2)
4220     COLOR 7,0:LOCATE ,24:PRINT "= ";
4230     COLOR 0,BR(FACE):PRINT PLACE$(2,FACE)+"     "
4240 NEXT
4260 COLOR 7,0
4270 LOCATE 15,K:PRINT "*Chosen ";
4280 LOCATE 9,K
4290 COLOR 1,4
4300 PRINT "  Check each face and its chosen color. ";
4310 COLOR 7,0
4320 PRINT SPC(79)" ";
4330 LOCATE 11,K
4340 COLOR 5,2
4350 PRINT "Press the spacebar to start over...  or,";
4360 COLOR ,0
4370 PRINT SPC(79)" ";
4380 LOCATE 13,K
4390 COLOR 4,6
4400 PRINT "if everything is okay press the `G' key."
4410 COLOR 7,0
4420 G$=INKEY$
4430 IF G$=" " THEN 3770
4440 IF G$<>"G" AND G$<>"g" THEN 4420
4450 RETURN
4460 END
```

## DAYLOG.BAS

```bas
1 '     Picture City Personal Computer Programmers Club Software Library
2 '
3 '     Program - DAYLOG - submitted by:
4 '
5 '     Michael Csontos, 3228 Livonia Center Road, Lima, New York 14485
6 '
7 '     August 18, 1982
8 '
9 '
110 PRINT "This program generates a form for recording data on a day by day basis with
120 PRINT "      each line labeled with the day and date.  Columns are set up and labeled
130 PRINT "      by the user.":PRINT
140 PRINT "The form will look something like the following:":PRINT
150 PRINT "             Date____|_Title_1_|_Title_2_|_Title 3_|_Title_4_|_Title 5_|
160 PRINT "             Mon.    |         |         |         |         |         |
170 PRINT "             Jan. 1  |         |         |         |         |         |
180 PRINT "             2001____|_________|_________|_________|_________|_________|
190 PRINT "             Tue.    |         |         |         |         |         |":PRINT
200 PRINT "The dates will run consecutively between starting and ending dates that you
210 PRINT "     enter, but you may select days of the week to be skipped.  This program
220 PRINT "     was written for a Epson MX-80 printer with Graphtrack.  Although no
230 PRINT "     special graphics features were used, some printer commands may have to be
240 PRINT "     changed for other printers.":PRINT
250 PRINT "You may have a set of titles and other format data filed on the disk.
260 DIM MTHNAME$(12):MTHNAME$(1)="JAN.":MTHNAME$(2)="FEB.":MTHNAME$(3)="MAR.":MTHNAME$(4)="APR.":MTHNAME$(5)="MAY.":MTHNAME$(6)="JUN.":MTHNAME$(7)="JUL.":MTHNAME$(8)="AUG.":MTHNAME$(9)="SEP.":MTHNAME$(10)="OCT.":MTHNAME$(11)="NOV.":MTHNAME$(12)="DEC."
270 KEY OFF:PRINT:PRINT "Do you have a format on file";:GOSUB 12000:ON A GOTO 310,280,270'YESORNOA
280 GOSUB 11000'retrieve file GETFILE
290 IF NOFILE=1 THEN GOTO 310 ELSE GOSUB 14000'modify? CHNGFORM
300 GOTO 520
310 PRINT "Please enter the date at which you want the form to start.":PRINT
320 GOSUB 1000' enter date  DATCHECK
330 STARTDATE$ = DAT$
340 PRINT "Please enter the date at which you want the form to end.":PRINT
350 GOSUB 1000' enter date  DATCHECK
360 ENDDATE$ = DAT$
370 PRINT "Do you want to skip any days of the week";:GOSUB 12000:ON A GOTO 390,380,370'YESORNOA
380 GOSUB 10000' input days to be skipped  SKIPDAY
390 GOSUB 8000' enter titles  TITLEIN
400 LINES=0:PRINT "This program is set up for 11 inch pages. You have four options for paging.":PRINT
410 PRINT "     1  30 lines per page regardless of content.
420 PRINT "     2  Start a new page for each new month.
430 PRINT "     3  Continuous chart with no paging.
440 PRINT "     4  The number of lines you choose (greater than 3 lines).
450 PRINT:INPUT "Please enter the number of the option you choose";LINES
460 IF LINES<1 OR INT(LINES)<>LINES OR LINES>4 THEN PRINT "Please enter a number corresponding to one of the options listed.":GOTO 400
470 IF LINES=4 THEN INPUT "Enter the number of lines you want per page";LINES
480 PRINT:PRINT "You may have a heading at the top of each page. Please enter the heading."
490 INPUT "Heading";HEADING$
500 PRINT "Do you want to save the format for this form";:GOSUB 12000:ON A GOTO 520,510,500'YESORNOA
510 GOSUB 13000'file the format variables  MAKEFILE
520 HOLD=0:TITLE$(0)="date    ":BADTITLE=0
530 WIDE=0:FOR W=0 TO 10:WIDE=WIDE+LEN(TITLE$(W))+1:NEXT W
540 LEFTMAR=132-WIDE:IF LEFTMAR<0 THEN 550 ELSE 570
550 Z=ABS(LEFTMAR)+1:PRINT "The chart is " Z " characters too wide. You should make your titles shorter.":BADTITLE=1:GOSUB 14000'modify? CHNGFORM
560 IF MODIFIED=1 THEN GOTO 520 ELSE LEFTMAR=0:BADTITLE=0
570 LEFTMAR$=STRING$(LEFTMAR," ")
580 BADHEAD=0:HEADGAP=8.5*(8-(LEFTMAR/17.16+LEN(HEADING$)/8.5+9/8.5))-1:IF HEADGAP<1 THEN 590 ELSE HEADMAR$=LEFTMAR$:GOTO 620
590 HEADGAP=2:HEADMAR=8.5*(8-(LEN(HEADING$)/8.5+9/8.5))-1:IF HEADMAR<1 THEN 600 ELSE HEADMAR$=STRING$(HEADMAR," "):GOTO 620
600 ZZ=INT(ABS(HEADMAR))+2:PRINT "The heading is " ZZ " characters too wide. You should make your heading shorter.":BADHEAD=1:GOSUB 14000'modify? CHNGFORM
610 IF MODIFIED=1  THEN GOTO 580 ELSE HEADGAP=1:HEADMAR$="":BADHEAD=0
620 PRINT "Is the printer ready to print the form";:GOSUB 12000:ON A GOTO 620,630,620'YESORNOA
630 PRINT "Pressing <H> will cause the printer to pause at the end of each page to allow ":PRINT "single sheet feeding.
640 PRINT "Pressing <Esc> will cause the printing to stop at the end of the date line being printed.":GOSUB 9000' set up printer  CHRTPRNT
650 DAT$=STARTDATE$:PAGENUM=0:GOSUB 2000'convert date to numbers DATTONUM
660 D=D-1:LINENUM=0:PAGENUM=PAGENUM+1
670 PRINTIME=0:ON ERROR GOTO 15000' printer error subroutine PRTERROR
680 LPRINT HEADMAR$ CHR$(14) HEADING$ SPC(HEADGAP) "Page" PAGENUM:LPRINT
690 LPRINT LEFTMAR$ CHR$(27)CHR$(45)CHR$(1);
700 FOR T=0 TO 10:LPRINT TITLE$(T);CHR$(156);:NEXT T:LPRINT
710 LPRINT CHR$(27)CHR$(45)CHR$(0);:ON ERROR GOTO 0
720 D=D+1:GOSUB 4000' check new date  DATGEN
730 IF DATINC=1 THEN GOTO 910
740 GOSUB 3000' find day of week  DAYNAME
750 FOR WKDY=1 TO 7:IF DAYNAME$ = DAYSKIP$(WKDY) THEN GOTO 780
760 NEXT WKDY
770 LINENUM=LINENUM+1:GOSUB 7000' print a form line  LINEFORM
780 IF ATE$ = ENDDATE$ THEN GOTO 850
790 ESC$=INKEY$:IF ESC$="H" OR ESC$="h" THEN HOLD=1
800 IF ESC$=CHR$(27) THEN PRINT "Form terminated. ";:FOR N=0 TO 15:DUMP$=INKEY$:NEXT:GOTO 860 ELSE IF ESC$<>"" THEN GOTO 790
810 IF LINES=1 AND LINENUM>=30 THEN GOTO 830
820 IF LINES>=4 AND LINENUM>=LINES THEN GOTO 830 ELSE GOTO 720
830 LPRINT CHR$(140):IF HOLD=1 THEN PRINT "Page " PAGENUM " finished. Press <Esc> to exit, any other key to continue.":FOR N=0 TO 15:DUMP$=INKEY$:NEXT:GOTO 840 ELSE GOTO 660
840 RESTART$=INKEY$:IF RESTART$=CHR$(27) THEN GOTO 860 ELSE IF RESTART$<>"" THEN GOTO 660 ELSE GOTO 840
850 PRINT "Form completed. ";:IF LINES=3 THEN GOTO 860 ELSE LPRINT CHR$(140)
860 GOSUB 14000:IF MODIFY=0 THEN GOTO 880'modify CHNGFORM
870 PRINT "Do you want to run this modification";:GOSUB 12000:ON A GOTO 890,520,870'YESORNOA
880 PRINT "Do want to run another copy of this form";:GOSUB 12000:ON A GOTO 900,620,880'YESORNOA
890 PRINT "Are you sure";:GOSUB 12000:ON A GOTO 870,900,890
900 PRINT "GOOD BYE":KEY ON:END
910 GOSUB 5000' increment to next month  NEXTDAY
920 GOSUB 4000' check incremented date  DATGEN
930 IF LINES=2 THEN GOTO 830 ELSE GOTO 740
1000 Z1000$=DATE$'                                           --
1010 INPUT "date";DAT$'                                       | subroutine
1020 ON ERROR GOTO 1070'        Converts input                |    to
1030 DATE$=DAT$'                to standard                   |   enter
1040 ON ERROR GOTO 0'           date format (mm-dd-yyyy)      |    and
1050 DAT$=DATE$:DATE$=Z1000$'   and returns it as DAT$        |   check
1060 RETURN'                                                  |    the
1070 IF ERR=5 THEN 1080 ELSE PRINT "DATCHECK TROUBLE":STOP'   |   date
1080 PRINT "Not a valid date. Try again.":RESUME 1010'       --
2000 Y=VAL(RIGHT$(DAT$,4))'                        --
2010 D=VAL(MID$(DAT$,4,2))'   dat$ as mm-dd-yyyy     |  subroutine
2020 M=VAL(LEFT$(DAT$, 2))'    to  M,D,Y,M$,D$,Y$    |     to
2030 M2030=M+100:D2030=D+100'                        |  decompose
2040 M$=STR$(M2030):D$=STR$(D2030):Y$=STR$(Y)'       |    dates
2050 M$=RIGHT$(M$,2):D$=RIGHT$(D$,2):Y$=RIGHT$(Y$,4)'|    into
2060 RETURN'                                       --  strings & numbers
3000 M3000=M:Y3000=Y'
3010 IF M3000>2 THEN 3030'
3020 M3000=M3000+12:Y3000=Y3000-1'
3030 N=2+D+M3000*2+Y3000+INT(Y3000/4)-INT(Y3000/100)+INT(Y3000/400)+INT(.6*(M3000+1))'
3040 ON 1+INT(1/2+(N/7-INT(N/7))*7) GOTO 3050,3060,3070,3080,3090,3100,3110'
3050 DAYNAME$="SAT.":RETURN'
3060 DAYNAME$="SUN.":RETURN'         Subroutine to give day of week
3070 DAYNAME$="MON.":RETURN'
3080 DAYNAME$="TUE.":RETURN'                     from
3090 DAYNAME$="WED.":RETURN'
3100 DAYNAME$="THU.":RETURN'            integers M, D, & Y.
3110 DAYNAME$="FRI.":RETURN'
4000 DATINC=0:Z4000$=DATE$'                                  --
4010 M$=STR$(M+100):D$=STR$(D+100):Y$=STR$(Y+10000)'           | subroutine
4020 M$=RIGHT$(M$,2):D$=RIGHT$(D$,2):Y$=RIGHT$(Y$,4)'          |    to
4030 ATE$=M$+"-"+D$+"-"+Y$'                                    |   form
4040 ON ERROR GOTO 4080'   Converts M,D, & Y integers          |    and
4050 DATE$=ATE$'           into ATE$ in form mm-dd-yyyy        |   check
4060 ON ERROR GOTO 0'      and M$,D$, & Y$ as mm, dd, & yyyy.  |     a
4070 DATE$=Z4000$:RETURN'  If invalid date, returns DATINC = 1.| standard
4080 IF ERR=5 THEN DATINC=1 ELSE PRINT "DATGEN TROUBLE":STOP'  |date format
4090 RESUME 4060'                                            --
5000 D=1:M=M+1:YEARLIM=0'                                 --
5010 IF M=13 THEN 5030'     Uses M, D, & Y.                 | subroutine
5020 RETURN'                Assumes end of old month.       |    for
5030 M=1:Y=Y+1'             Returns D=1,M+1,Y+1 as needed.  | incrementing
5040 IF Y>=2099 THEN 5060'  If Y exceeds 2099,              |    a
5050 RETURN'                      returns: YEARLIM = 1      |   date
5060 PRINT "Cannot go beyond year 2099"'                    |    by
5070 YEARLIM=1:RETURN'                                    --   one month
7000 ON ERROR GOTO 15000:COL0DL = LEN(TITLE$(0))-LEN(DAYNAME$)'
7010 IF D<10 THEN DD=3 ELSE DD=4'                                    |
7020 COL0ML = LEN(TITLE$(0))-(LEN(MTHNAME$(M))+DD)'                  |subrtn.
7030 COL0YL = LEN(TITLE$(0))-LEN(Y$)'                                |to
7040 COL0D$ = STRING$(COL0DL," ")'        needs TITLE$(t)            |print
7050 COL0M$ = STRING$(COL0ML," ")'              MTHNAME$(m)          |a
7060 COL0Y$ = STRING$(COL0YL," ")'              DAYNAME$             |three
7070 FOR C=1 TO 10'                             Y$                   |line
7080 COL$(C) = STRING$(LEN(TITLE$(C))," ")'     D                    |form
7090 NEXT C'                                    COL$(C) array must be|with
7100 LPRINT LEFTMAR$ DAYNAME$ COL0D$ CHR$(156);'dimensioned if C>10  |up
7110 FOR C=1 TO 10:LPRINT COL$(C) CHR$(156);:NEXT C:LPRINT'          |to
7120 LPRINT LEFTMAR$ MTHNAME$(M) D COL0M$ CHR$(156);'                |ten
7130 FOR C=1 TO 10:LPRINT COL$(C) CHR$(156);:NEXT C:LPRINT'          |columns
7140 LPRINT LEFTMAR$ CHR$(27) "-" CHR$(1);Y$;COL0Y$ CHR$(156);'      |defined
7150 FOR C=1 TO 10:LPRINT COL$(C) CHR$(156);:NEXT C'                 |by their
7160 LPRINT CHR$(27) "-" CHR$(0)'                                    |title
7170 ON ERROR GOTO 0:RETURN
8000 PRINT:PRINT "You may have up to ten titles. The maximum width is 132 characters but ten are"
8010 PRINT "taken up by dividing lines and ten by the date  (0)  column,  leaving 112.  By"
8020 PRINT "skipping a title you will have a double vertical dividing line. Extra dividing"
8030 PRINT "lines appear as a right-hand border.  The width of the column is determined by"
8040 PRINT "the title. To extend the width of the title beyond the title word use a period"
8050 PRINT "or quotation marks, eg.: .   123  . or  " CHR$(34) "   b   " CHR$(34) " .   Use (" CHR$(34) ")'s around a title
8055 PRINT "that has commas in it.
8060 TITLELENGTH=20
8070 FOR T=1 TO 10
8080 PRINT "Title for data column number";T;:INPUT TITLE$(T)
8090 TITLELENGTH=TITLELENGTH+LEN(TITLE$(T))
8100 PRINT "You have used " TITLELENGTH "characters. You have room for " 132-TITLELENGTH "more.":PRINT
8110 NEXT T
8120 RETURN
9000 ON ERROR GOTO 15000:LPRINT CHR$(27) "@";
9010 WIDTH "LPT1:",255
9020 LPRINT CHR$(27);CHR$(67);CHR$(0);CHR$(11);'ESC,FORM LENGTH,ELEVEN INCHES
9030 LPRINT CHR$(15);CHR$(27);CHR$(65);CHR$(8);'COMPRESSED,ESC,LINEFEED,8/72 ON
9040 LPRINT CHR$(27)+CHR$(85)+CHR$(1);         'ESC,UNIDIRECTIONAL PRINTING,ON
9050 ON ERROR GOTO 0:RETURN'
10000 DAY$(1)="Saturday":DAY$(2)="Sunday":DAY$(3)="Monday":DAY$(4)="Tuesday":DAY$(5)="Wednesday":DAY$(6)="Thursday":DAY$(7)="Friday"
10010 SKIPDAY$(1)="SAT.":SKIPDAY$(2)="SUN.":SKIPDAY$(3)="MON.":SKIPDAY$(4)="TUE.":SKIPDAY$(5)="WED.":SKIPDAY$(6)="THU.":SKIPDAY$(7)="FRI."
10020 FOR SKN=1 TO 7'                                          subroutine to
10030 PRINT "Do you want to skip "DAY$(SKN);:INPUT SKIP$'      return an array
10040 IF SKIP$="Y" THEN DAYSKIP$(SKN)=SKIPDAY$(SKN):GOTO 10090'of day and null
10050 IF SKIP$="y" THEN DAYSKIP$(SKN)=SKIPDAY$(SKN):GOTO 10090'strings as the
10060 IF SKIP$="N" THEN DAYSKIP$(SKN)="":GOTO 10090'           var. DAYSKIP$
10070 IF SKIP$="n" THEN DAYSKIP$(SKN)="":GOTO 10090'
10080 PRINT "Please answer y or n.":GOTO 10030'   requires no common variables
10090 NEXT'                                       uses SKN,DAYS$(1-7),SKIP$
10100 RETURN'                                     SKIPDAY$(1-7)
11000 ON ERROR GOTO 11130:NOFILE=0
11010 PRINT:PRINT "The following files are available.":FILES "*.frm"
11020 ON ERROR GOTO 0
11030 PRINT:PRINT "What is the filename of the one you want to use":INPUT "(if none type NONE)";FILENAME$
11040 IF FILENAME$="NONE" OR FILENAME$="none" OR FILENAME$="None" THEN NOFILE=1:RETURN
11050 FILENAME$=FILENAME$+".frm"
11060 ON ERROR GOTO 11150:OPEN FILENAME$ FOR INPUT AS #1
11070 INPUT #1,STARTDATE$,ENDDATE$
11080 FOR N=1 TO 7:INPUT #1,DAYSKIP$(N):NEXT
11090 FOR N=1 TO 10:INPUT #1,TITLE$(N):NEXT
11100 INPUT #1,LINES,HEADING$
11110 CLOSE #1:ON ERROR GOTO 0
11120 RETURN
11130 IF ERR=53 THEN 11140 ELSE PRINT "GETFILE TROUBLE":STOP
11140 PRINT "There are no files for this program on this disk.":NOFILE=1:RESUME 11120
11150 IF ERR = 52 THEN PRINT "That is not a correct filespec, try again":RESUME 11020
11160 IF ERR = 62 THEN PRINT "Bad file data. You are trying to read from the wrong file. Try again.":RESUME 11000
11170 IF ERR = 53 THEN 11180 ELSE PRINT "GETFILE TROUBLE":STOP
11180 PRINT "That isn't one of the files available, try again.":RESUME 11020
12000 INPUT Q$'                         subroutine which returns    --
12010 IF Q$="n" THEN A=1:RETURN'         A = 1, 2, or 3 in response    |
12020 IF Q$="N" THEN A=1:RETURN'         to a yes or no question.      |
12030 IF Q$="y" THEN A=2:RETURN'                                       |
12040 IF Q$="Y" THEN A=2 ELSE A=3:PRINT "Please answer Y, y, N, or n."'|
12050 RETURN'                                                       --
13000 ON ERROR GOTO 13160
13010 PRINT:FILES "*.frm"
13020 PRINT:PRINT "The above file names have been used."
13030 ON ERROR GOTO 0
13040 PRINT "What filename do you want to use? (Up to 8 characters, no extension;Type NONE
13050 INPUT "to return to printing without saving modifications.):  FILENAME";FILENAME$
13060 IF FILENAME$="none" OR FILENAME$="None" OR FILENAME$="NONE" THEN RETURN
13070 IF LEN(FILENAME$)>8 THEN PRINT "Filename too long. Try again. Do not use extension. Extension {.FRM} is added.":GOTO 13040
13080 FILENAME$=FILENAME$+".frm"
13090 ON ERROR GOTO 16000' disk error subroutine DSKERROR
13100 OPEN FILENAME$ FOR OUTPUT AS #1
13110 WRITE #1,STARTDATE$,ENDDATE$
13120 FOR N=1 TO 7:WRITE #1,DAYSKIP$(N):NEXT
13130 FOR N=1 TO 10:WRITE #1,TITLE$(N):NEXT
13140 WRITE #1,LINES,HEADING$
13150 CLOSE #1:ON ERROR GOTO 0:RETURN
13160 IF ERR = 53 THEN 13170 ELSE PRINT "MAKEFILE TROUBLE":STOP
13170 PRINT "There are no format files on this disk":RESUME 13030
14000 PRINT "Do you want to modify this form";:GOSUB 12000:ON A GOTO 14010,14020,14000'YESORNOA
14010 MODIFIED=0:RETURN
14020 MODIFIED=1:IF BADTITLE=1 THEN GOTO 14150
14030 IF BADHEAD=1 THEN GOTO 14280
14040 PRINT "The current starting date is "STARTDATE$". Do you want to change it";:GOSUB 12000:ON A GOTO 14080,14050,14040'YESORNOA
14050 PRINT "New ";:GOSUB 1000' enter date DATCHECK
14060 GOSUB 2000' generate numerical date constants  DATTONUM
14070 STARTDATE$=DAT$
14080 PRINT "The current ending date is " ENDDATE$ ". Do you want to change it";:GOSUB 12000:ON A GOTO 14110,14090,14080'YESORNOA
14090 PRINT "New ";:GOSUB 1000' enter date DATCHECK
14100 ENDDATE$=DAT$:GOTO 14110
14110 PRINT "Presntly the days to be skipped are: ";:FOR N=1 TO 7:PRINT DAYSKIP$(N) ", ";:NEXT:PRINT
14120 PRINT "Do you want to change these";:GOSUB 12000'YESORNOA
14130 ON A GOTO 14150,14140,14110
14140 GOSUB 10000' reenter skip days SKIPDAY
14150 PRINT "The present set of column titles is:"
14160 FOR N=1 TO 10:PRINT TITLE$(N):NEXT:PRINT
14170 PRINT "Do you want to change these";:GOSUB 12000:ON A GOTO 14220,14180,14150'YESORNOA
14180 FOR CHG = 1 TO 10
14190 PRINT USING "The title for column ## is:   "; CHG :PRINT SPC(29) TITLE$(CHG) :PRINT "Do you want to change it";:GOSUB 12000:ON A GOTO 14210,14200,14190'YESORNOA
14200 GOSUB 14330:INPUT "New title";TITLE$(CHG):GOSUB 14350
14210 NEXT CHG
14220 IF BADTITLE=1 THEN GOTO 14300
14230 PRINT "The form length options are 1. 31 lines; 2. months; 3. continuous; 4. specified."
14240 PRINT "The current option is " LINES ". Do you want to change it";:GOSUB 12000:ON A GOTO 14280,14250,14230'YESORNOA
14250 INPUT "New option number";LINES
14260 IF LINES<1 OR INT(LINES)<>LINES OR LINES>4 THEN PRINT "Please enter  1, 2, 3, or 4.":GOTO 14230
14270 IF LINES=4 THEN INPUT "Number of lines";LINES
14280 PRINT "The present heading for the chart is:":PRINT:PRINT HEADING$:PRINT "Do you want to change it";:GOSUB 12000:ON A GOTO 14300,14290,14280'YESORNOA
14290 GOSUB 14340:INPUT "New heading";HEADING$:GOSUB 14350:PRINT:PRINT
14300 PRINT "Do you want to save these modifications";:GOSUB 12000:ON A GOTO 14320,14310,14300'YESORNOA
14310 GOSUB 13000'file the new variables MAKEFILE
14320 RETURN
14330 X=CSRLIN:LOCATE 25,1:PRINT "Note: You may edit and enter an isolated line above instead of retyping it!":LOCATE X-4,30:PRINT "12345678901234567890123456789012345678901234567890":LOCATE X,1:RETURN
14340 X=CSRLIN:LOCATE 25,1:PRINT "Note: You may edit and enter an isolated line above instead of retyping it!":LOCATE X-4,1:PRINT "1234567890123456789012345678901234567890123456789012345678901234567890123456789":LOCATE X,1:RETURN
14350 X=CSRLIN:LOCATE 25,1:BLANK$=STRING$(79," "):PRINT BLANK$;:LOCATE X,1:RETURN
15000 IF ERR = 27 THEN PRINT "Printer off or out of paper. Program will continue when problem is corrected.":RESUME
15010 IF ERR = 68 THEN PRINT "Printer unavailable or disabled. Program will continue when problem is corrected.":RESUME
15020 IF ERR = 25 THEN PRINT "Printer fault. Program will continue when problem is corrected.":RESUME
15030 IF ERR = 24 THEN PRINTIME=PRINTIME+1 ELSE PRINT "PRTERROR problem:on error GOTO 0:stop
15040 IF PRINTIME < 2 THEN RESUME ELSE PRINT "Printer off line. Program will continue when problem is corrected.":PRINTIME=0:RESUME
16000 IF ERR=24 THEN PRINT "No disk in drive? Device timeout.":GOTO 16090
16010 IF ERR=57 THEN PRINT "I/O error. Try another disk.":GOTO 16090
16020 IF ERR=61 THEN PRINT "Disk full. Try another disk.":GOTO 16090
16030 IF ERR=64 THEN PRINT "Bad file name. ";:INPUT "Try entering the complete filespec (with extension).";FILENAME$:RESUME
16040 IF ERR=67 THEN PRINT "Too many files in directory. Try another disk to temoroarily save your data.":GOTO 16090
16050 IF ERR=68 THEN PRINT "Disk drive unavailable.":GOTO 16090
16060 IF ERR=70 THEN PRINT "You have write protected this disk!":GOTO 16090
16070 IF ERR=71 THEN PRINT "No disk in drive or door not closed.":GOTO 16090
16080 IF ERR=72 THEN PRINT "Disk Media Error. Try another disk.":GOTO 16090
16090 PRINT "Program will continue when problem is corrected.":RESUME
65000 ' SAVE"DAYLOG.bas",a
```

## EMBEDDED.BAS

```bas
10 '  SOURCE: CREATIVE COMPUTING [MAY 1982] page 198
20 '  AUTHOR: Will Fastie
30 '  EDITED BY David Reussow
100 ' PROGRAM TO DEMONSTRATE EMBEDDED PRINT ATTRIBUTES
110 ESC$ = CHR$(27)
120 CR = 13
130 NORMAL$ = "NORMAL PRINT"
140 DASHES$ = " -- "
150 NLEN = LEN(NORMAL$) + LEN(DASHES$)
160 X$ = "BOLD PRINT"
170 ' PRINT NORMAL TEXT, LEAVING SPACE FOR EMPHASIZED PART
180 LPRINT NORMAL$;DASHES$;SPC(LEN(X$));DASHES$;NORMAL$;
190 LPRINT CHR$(128+CR);     'COMMAND PRINTER TO PRINT, NO LINE ADVANCE
200 LPRINT ESC$;"E";         'TURN ON EMPHASIS
210 LPRINT SPC(NLEN);X$      'SPACE OVER TO HOLE, PRINT TEXT WHILE EMPHASIS ON
220                          'NOTE:  TAB WONT WORK ABOVE!
230 LPRINT ESC$;"F";         'TURN OFF EMPHASIS
240 LPRINT: LPRINT
250 X$ = "DOUBLE WIDTH"
260                          'DOUBLE WIDTH PRINTING IS EASIER!
270 LPRINT NORMAL$;DASHES$;CHR$(14);X$;CHR$(20);DASHES$;NORMAL$
280 END
```

## FINISH.BAS

```bas
10 ' Program "finish" with 8 fonts, diskette version, saved 820603.2320
20 DEFINT A-Z
30 DIM K(50), KEYS$(20)
35 SCREEN 0,,1,1: KEY OFF: CLS
40 SCREEN 0,,0,1: CLS: KEY OFF: LOCATE 23,1
50 RESTORE: GOSUB 2410: GOSUB 2590  'Set F-keys
60 DATA Lt,Rt,"17","10",Pr,Pl,Ju,Ra,Do,Si,Fi,He,Re," B",END
65 GOSUB 4000' Give an intro on the screen.
70 GOSUB 2540  'Get runtime parameters.
80 IF R.MGN.RUN>(((18-CPI)/3*0.65)+1)*80 THEN PRINT"cpi & right margin clash": GOTO 70
90 IF R.MGN.RUN-L.MGN.RUN-9<LEN(HEADER$) THEN PRINT "Header won't fit between margins": GOTO 70
100 'DATA statements define system commands.
110 '
120 'Margin control --
130 DATA .tm#::Å┘ Set # of blank lines at top of page.     Default =  0
140 DATA .bm#::Å┘ Set # of blank lines at bottom of page.  Default = 12
150 DATA .lm#::Å┘ Move left margin (+ = rightward)         Default =  0
160 DATA .rm#::Å┘ Move right margin (- = leftward)         Default =  0
170 DATA .pl#::Å┘ Set # of lines per page.                 Default = 66
180 DATA .ma#::Å┘ Adjust both margins in (+) or out (-)#.  Default =  0
190 DATA .ov#::Å┘ Move all text over # columns.            Default =  0
200 'Formatting --
210 DATA .bl#::Å┘ Insert # blank lines.
220 DATA .in#::Å┘ Indent # columns.                        Default =  0
230 DATA .jl::Å┘  Justify left margin only. (This is the default condition.)
240 DATA .jr::Å┘  Justify right margin only.
250 DATA .jb::Å┘  Justify both margins.
260 DATA .ls#::Å┘ Line spacing #. 1=single (default), 2=double, etc.
270 DATA .ce::Å┘  Center the following line, up to next C/R.
280 DATA .fi::Å┘  Fill each line as much as possible.  (Default)
290 DATA .nf::Å┘  No filling. Print line essentially as entered.
300 'Printer font selection for the IBM printer (Epson MX-80) --
310 '  P     |  #=1 for normal, single-width, single-strike, unemphasized.
320 '  R  F  |    2 for   "           "             "        emphasized.
330 '  I  O  |    3 for   "           "       double-strike, emphasized.
340 '  N  N -|    4 for compressed, single-width, single-strike.
350 '  T  T  |    5 for     "       double-width,       "
360 '  E  S  |    6 for     "             "       double-strike.
370 '  R     |    7 for normal, double-width, single-strike, emphasized.
380 '        |    8 for   "           "       double-strike,     "     .
390 '           Default mode is runtime choice, also invoked by #=0.
400 '           Runtime "plain" font corresponds to #=1, "pretty" to #=2.
410 '           Only fonts 1-3 show proper line layout on the video screen.
420 '
430 DATA .pf#::Å┘ Select printer font (for full line only).
440 'Carriage control --
450 DATA .pa#::Å┘ Start new page, numbered #. If no #, use old# + 1.
460 DATA .wt::Å┘  Wait for paper alignment at top of following page(s).
470 DATA .tp#::Å┘ Test page; if <# lines remain, force a .pa command.
480 DATA .hd::Å┘  Use the following line (to C/R) as header on following page(s).
490 '
500 DATA END::Å┘ of command definitions
510 'Put the above commands into a testable string.
520 COMMAND$=".##"
530 FOR I = 0 TO 50
540 READ ZZ$: COMMAND$ = COMMAND$+LEFT$(ZZ$,3): IF ZZ$<>"END" THEN NEXT
550 'Request insertion-strings for runtime substitution at $# points.
560 PRINT"    Enter text to be inserted at each occurrence of $# place marker.
570 PRINT"A plain carriage-return will get you out of this sequence when you're done."
580 PRINT:PRINT"$#   Text to be substituted"
590 FOR I = 0 TO 9
600 PRINT I;:LINE INPUT IS$(I): IF IS$(I)<>"" THEN NEXT
610 'Get diskette ready for reading the text file.
620 FLNM$=FLNM$+".bas"
630 OPEN FLNM$ FOR INPUT AS #1
640 'Open the screen or printer as the output device.
650 PRINT:PRINT"Output to screen (s) or to printer (p)?"
660 GOSUB 2400
670 IF ZZ$<>"p" GOTO 730
680 WIDTH "lpt1:",132
690 MX.COMP=CPI: MX.EMPH=FONT: MX.WID=20: MX.STRK=72
700 ON ERROR GOTO 2980
710 LPRINT CHR$(24);: IF CPI=18 THEN LPRINT CHR$(27);CHR$(FONT); ELSE LPRINT CHR$(27);CHR$(70);CHR$(15);
720 ON ERROR GOTO 0
730 IF ZZ$="p" THEN OU$="lpt1:": LPRINT ELSE OU$="scrn:"
740 OPEN OU$ FOR OUTPUT AS #2
750 'Allow printing of partial document.
760 P.LAST.PG=3000: INPUT"Begin actual printing at what page (C/R for whole document)";P.1ST.PG
770 IF P.1ST.PG<>0 THEN PRINT"Stop printing after what page (C/R for everything from page";P.1ST.PG;"on)";:INPUT P.LAST.PG: IF P.LAST.PG=0 THEN P.LAST.PG=3000
780 'Set initial conditions to default values as listed above.
790 T.MGN=0: B.MGN=12: L.MGN=L.MGN.RUN: R.MGN=R.MGN.RUN: M.ADJ=0: M.OVR=0
800 PG.LEN=66: PG.NUM=1: WAIT.TOP=0: N.INDENT=0: FILL=0
810 CPI16.5!=1.7
820 'Do initial housekeeping.
830 TAPE$="": BUFF$="": FMAT$=""
840 GOSUB 2350: K7=0: U1=0: LN.CNT=0: NEW.PAGE=0
850 'Get the next string of text from the diskette.
860 'Exit if END-OF-FILE; else strip line number and apostrophe.
870 IF EOF(1) THEN GOSUB 1790: GOTO 2240
880 LINE INPUT #1, TAPE$: IF TAPE$="" GOTO 870
890 Z=INSTR(TAPE$,"'"): IF Z<>0 THEN Z$=LEFT$(TAPE$,Z-1) ELSE BEEP: Z=4
900 TAPE$=MID$(TAPE$,Z+1)
910 'Replace tabs with 8 spaces.
920 I=INSTR(TAPE$,CHR$(9)): IF I=0 GOTO 960
930 MID$(TAPE$,I,1)=" "
940 TAPE$=LEFT$(TAPE$,I)+SPACE$(7 - (I-1) MOD 8)+MID$(TAPE$,I+1): GOTO 920
950 'Substitute IS$(#) for corresponding $# in text.
960 I=INSTR(TAPE$,"$#"): IF I=0 GOTO 1000
970 TAPE$=LEFT$(TAPE$,I-1)+IS$(VAL(MID$(TAPE$,I+2)))+MID$(TAPE$,I+3)
980 GOTO 960
990 'Check for command at start of TAPE$ and process if found.
1000 IF LEFT$(TAPE$,1)="." GOTO 1860
1010 'Print unprocessed text if no-fill mode.
1020 IF FILL THEN FMAT$=TAPE$: GOSUB 1650: GOTO 870
1030 'Append TAPE$ to BUFF$ (or as much of TAPE$ as will fit....)
1040 IF LEN(BUFF$)+LEN(TAPE$)<=255 GOTO 1070
1050 VOL=240-LEN(BUFF$): BUFF$=BUFF$+LEFT$(TAPE$,VOL)
1060 TAPE$=MID$(TAPE$,VOL+1): GOTO 1100
1070 IF RIGHT$(BUFF$,1)<>" " AND RIGHT$(BUFF$,1)<>"-" THEN BUFF$=BUFF$+" "
1080 BUFF$=BUFF$+TAPE$: TAPE$=""
1090 'Fill FMAT$ from BUFF$.
1100 IF LEFT$(BUFF$,1)=" " THEN BUFF$=MID$(BUFF$,2): GOTO 1100
1110 GOSUB 2350
1120 IF LEN(BUFF$)<LN.LEN THEN IF LEN(TAPE$) GOTO 1080 ELSE GOTO 870
1130 GOSUB 1350: IF LN.LEN=LEN(FMAT$) THEN GOSUB 1760: JFY=0: GOSUB 1650: GOSUB 1770: GOTO 1110
1140 'Justify FMAT$.
1150 K1=1: IF N.INDENT=>0 GOTO 1170
1160 LN.LEN=LN.LEN+N.INDENT: L$=LEFT$(FMAT$,-N.INDENT): FMAT$=MID$(FMAT$,1-N.INDENT)
1170 IF JFY<2 GOTO 1300
1180 N.BLKS=LN.LEN-LEN(FMAT$): K=-1
1190 IF K1 THEN K=K+1: K1=INSTR(K1+1,FMAT$," "): K(K)=K1: GOTO 1190
1200 N.SPCS=N.BLKS\K: KF=N.BLKS-N.SPCS*K
1210 IF K7=0 OR K=1 OR K=N.BLKS OR KF<1 THEN K7=1: K0=1: KF=K-KF: GOTO 1230
1220 K7=0: K0=-1: N.SPCS=N.SPCS+1
1230 J.FMAT$="": K1=1
1240 FOR I = 0 TO K-1
1250 J.FMAT$=J.FMAT$+MID$(FMAT$,K1,K(I)-K1)+SPACE$(N.SPCS)
1260 KF=KF-1: K1=K(I)
1270 IF KF=0 THEN N.SPCS=N.SPCS+K0
1280 NEXT
1290 FMAT$=J.FMAT$+MID$(FMAT$,K(K-1))
1300 IF N.INDENT<0 THEN LN.LEN=LN.LEN-N.INDENT: FMAT$=L$+FMAT$
1310 IF JFY<>1 GOTO 1330 ELSE L=LN.LEN-LEN(FMAT$)
1320 FMAT$=SPACE$(L)+FMAT$
1330 GOSUB 1650: GOTO 1110
1340 'Subroutine to fill FMAT$.
1350 IF LN.LEN>LEN(BUFF$) THEN FMAT$=BUFF$: BUFF$="": RETURN
1360 FOR I = LN.LEN+1 TO 2 STEP -1
1370 IF MID$(BUFF$,I,1)=" " THEN IF MID$(BUFF$,I-1,1)<>" " GOTO 1420
1380 IF MID$(BUFF$,I,1)="-" THEN IF I<=LN.LEN THEN FMAT$=LEFT$(BUFF$,I):BUFF$=MID$(BUFF$,I+1): RETURN
1390 NEXT
1400 BEEP: PRINT: PRINT"line "Z$" longer than"LN.LEN"spaces:"
1410 PRINT BUFF$: STOP
1420 FMAT$=LEFT$(BUFF$,I-1): BUFF$=MID$(BUFF$,I+1)
1430 IF MID$(BUFF$,1,1)=" " THEN BUFF$=MID$(BUFF$,2): GOTO 1430
1440 RETURN
1450 'Subroutine for top-of-form and Header.
1460 T.MX.COMP=MX.COMP: T.MX.EMPH=MX.EMPH: T.MX.WID=MX.WID: T.MX.STRK=MX.STRK: MX.COMP=CPI: MX.EMPH=FONT: MX.WID=20: MX.STRK=72: T.LN.LEN=LN.LEN: T.M.ADJ=M.ADJ
1470 T.L.MGN=L.MGN: T.R.MGN=R.MGN: T.N.INDENT=N.INDENT: L.MGN=L.MGN.RUN: R.MGN=R.MGN.RUN: N.INDENT=0: M.ADJ=0: GOSUB 2350: IF LN.CNT=T.MGN+1 GOTO 1510
1480 IF PG.NUM=>P.1ST.PG THEN PRINT #2, CHR$(12): FOR LN.CNT=0 TO T.MGN: PRINT #2,: NEXT
1490 PG.NUM=PG.NUM+1: IF PG.NUM>P.LAST.PG GOTO 2240
1500 IF WAIT.TOP THEN BEEP: LINE INPUT"Align paper then hit C/R...";ZZ$
1510 LN.CNT=T.MGN+1: NEW.PAGE=1
1520 IF HEADER$="" GOTO 1590
1530 IF LN.LEN-10<LEN(HEADER$) THEN FMAT$="": GOTO 1550
1540 FMAT$=SPACE$(LN.LEN-(LEN(HEADER$)+10))
1550 FMAT$=FMAT$+HEADER$+", page"+STR$(PG.NUM)
1560 IF PG.NUM=>P.1ST.PG THEN IF OU$="lpt1:" THEN PRINT #2, CHR$(MX.COMP); CHR$(MX.WID); CHR$(27); CHR$(MX.EMPH); CHR$(27); CHR$(MX.STRK); TAB(L.MGN+M.OVR+2); FMAT$ ELSE PRINT #2, TAB(L.MGN+M.OVR); FMAT$
1570 FOR LN.CNT=LN.CNT TO LN.SPA*(LN.CNT+2): IF PG.NUM=>P.1ST.PG THEN PRINT #2,
1580 NEXT
1590 MX.COMP=T.MX.COMP: MX.EMPH=T.MX.EMPH: MX.WID=T.MX.WID: MX.STRK=T.MX.STRK: LN.LEN=T.LN.LEN
1600 L.MGN=T.L.MGN: R.MGN=T.R.MGN: N.INDENT=T.N.INDENT: M.ADJ=T.M.ADJ: RETURN
1610 'Subroutine to print a line on the output device.
1620 'The left margin is adjusted automatically to compensate for font.
1630 'Note that a bug in the MX-80 counts 2 unprintable control characters
1640 '  as printable when executing tabs, thus requiring the "+2" in TAB.DIST.
1650 IF LN.CNT>PG.LEN-B.MGN THEN T.FMAT$=FMAT$: T.BUFF$=BUFF$: GOSUB 1460: BUFF$=T.BUFF$: FMAT$=T.FMAT$
1660 TAB.DIST!=L.MGN+M.OVR+M.ADJ
1670 IF MX.COMP=15 THEN TAB.DIST!=TAB.DIST!*CPI16.5!
1680 IF MX.WID=14 THEN TAB.DIST!=TAB.DIST!/2
1690 TAB.DIST=(TAB.DIST!)+2+N.INDENT
1700 IF PG.NUM=>P.1ST.PG THEN IF OU$="lpt1:" THEN PRINT #2, CHR$(MX.COMP); CHR$(27); CHR$(MX.STRK); CHR$(27); CHR$(MX.EMPH); CHR$(MX.WID); TAB(TAB.DIST); FMAT$ ELSE PRINT #2, TAB(TAB.DIST-2); FMAT$
1710 N.INDENT=0: LN.CNT=LN.CNT+1
1720 FOR B2 = 1 TO LN.SPA-1: IF PG.NUM => P.1ST.PG THEN PRINT #2,
1730 LN.CNT=LN.CNT+1: NEXT
1740 FMAT$="": NEW.PAGE=0: RETURN
1750 'Subroutine to push and pop JFY.
1760 U1=U1+1: JFY(U1)=JFY: RETURN
1770 JFY=JFY(U1): U1=U1-1: RETURN
1780 'Subroutine to run out BUFF$.
1790 IF BUFF$="" THEN RETURN
1800 FMAT$=BUFF$: BUFF$=""
1810 IF JFY=1 THEN FMAT$=SPACE$(LN.LEN-LEN(FMAT$))+FMAT$
1820 GOSUB 1760: JFY=0
1830 IF LN.CNT+LN.SPA<PG.LEN THEN GOSUB 1660 ELSE GOSUB 1650
1840 GOSUB 1770: RETURN
1850 'Command handler.
1860 'IF MID$(TAPE$,2,2)<>"pf" THEN GOSUB 1710
1870 GOSUB 1790
1880 C.INDEX=INSTR(COMMAND$,LEFT$(TAPE$,3))\3
1890 '               .tm  .bm  .lm  .rm  .pl  .ma  .ov  .bl  .in  .jl  .jr  .jb  .ls  .ce  .fi  .nf  .pf  .pa  .wt  .tp  .hd
1900 ON C.INDEX GOTO 1920,1930,1940,1950,1960,1970,1980,1990,2040,2060,2070,2080,2090,2100,2180,2190,3010,2130,2150,2160,2120
1910 BEEP: PRINT: COLOR 0,7: PRINT"Bad command: ";LEFT$(TAPE$,3);" on line ";Z$;: COLOR 7,0: PRINT: GOTO 2200
1920 T.MGN=VAL(MID$(TAPE$,4)): GOTO 2200            'Top margin (.tm)
1930 B.MGN=VAL(MID$(TAPE$,4)): GOTO 2200            'Bottom margin (.bm)
1940 L.MGN=VAL(MID$(TAPE$,4))+L.MGN.RUN: GOTO 2200  'Left margin (.lm)
1950 R.MGN=VAL(MID$(TAPE$,4))+R.MGN.RUN: GOTO 2200  'Right margin (.rm)
1960 PG.LEN=VAL(MID$(TAPE$,4)): GOTO 2200           'Page length (.pl)
1970 M.ADJ=VAL(MID$(TAPE$,4)): GOTO 2200            'Margin adjust (.ma)
1980 M.OVR=VAL(MID$(TAPE$,4)): GOTO 2200            'Margin over (.ov)
1990 IF NEW.PAGE=1 THEN NEW.PAGE=0: GOTO 2200       'Blank line(s) (.bl)
2000 B.LNS=VAL(MID$(TAPE$,4))*LN.SPA
2010 IF B.LNS=0 THEN B.LNS=LN.SPA
2020 FOR Q = 1 TO B.LNS: IF PG.NUM=>P.1ST.PG THEN PRINT #2,
2030 LN.CNT=LN.CNT+1: IF LN.CNT=PG.LEN GOTO 2140 ELSE NEXT: GOTO 2200
2040 N.INDENT=VAL(MID$(TAPE$,4))                    'Indent (.it)
2050 LN.LEN = LN.LEN-N.INDENT: GOTO 2200
2060 JFY=0: GOTO 2200                               'Justify left (.jl)
2070 JFY=1: GOTO 2200                               'Justify right (.jr)
2080 JFY=2: GOTO 2200                               'Justify both (.jb)
2090 LN.SPA=VAL(MID$(TAPE$,4)): GOTO 2200           'Line spacing (.ls)
2100 GOSUB 2350: FMAT$=SPACE$((LN.LEN-LEN(MID$(TAPE$,4)))/2)+MID$(TAPE$,4)  'Center
2110 GOSUB 1760: JFY=0: GOSUB 1650: GOSUB 1770: GOTO 2220           ' (.ce)
2120 HEADER$=MID$(TAPE$,4): GOTO 2220               'Header (.hd)
2130 T.PG.NUM=VAL(MID$(TAPE$,4)): IF T.PG.NUM THEN PG.NUM=T.PG.NUM-1  'Page
2140 GOSUB 1460: NEW.PAGE=0: GOTO 2200 '                               (.pa)
2150 WAIT.TOP=-1: GOTO 2200                          'Wait at page top (.wt)
2160 IF LN.CNT>PG.LEN-B.MGN-VAL(MID$(TAPE$,4))*LN.SPA THEN GOSUB 1460  'Test page
2170 GOTO 2200 '                                                    (.tp)
2180 FILL=0: GOTO 2200'                               Fill line (.fi)
2190 FILL=-1: GOTO 2200'                              No filling (.nf)
2200 C.INDEX=INSTR(2,TAPE$,".")
2210 IF C.INDEX<>0 THEN TAPE$=MID$(TAPE$,C.INDEX): GOTO 1880
2220 BUFF$="": GOTO 870
2230 ' Job done. Ask about repeat.
2240 ZZ$=STRING$(30,"*"):PRINT:BEEP:PRINT ZZ$" END OF PROCESSING "ZZ$:PRINT
2250 CLOSE: IF OU$="lpt1:" THEN LPRINT CHR$(27);"F"
2260 PRINT "Do you want to rerun with the same text insertions?";
2270 GOSUB 2400
2280 IF LEFT$(ZZ$,1)<>"y" THEN KEY OFF ELSE GOTO 630
2290 ' Graceful exit.
2300 CLS: WIDTH "lpt1:",80: CHAIN "labels.bas"
2340 'Compute line length, compensating for font size.
2350 LN.LEN!=R.MGN-L.MGN-2*M.ADJ+1
2360 IF MX.COMP=15 THEN LN.LEN!=LN.LEN!*CPI16.5!
2370 IF MX.WID=14 THEN LN.LEN!=LN.LEN!/2
2380 LN.LEN=LN.LEN!-N.INDENT: RETURN
2390 'Await striking of a key.
2400 ZZ$=INKEY$: IF ZZ$="" GOTO 2400 ELSE RETURN
2410 ' Subr to set initial F-keys & defaults.
2420 KEY 1,"Lt margin at: ": L.MGN.RUN=3
2430 KEY 2,"Rt margin at: ": R.MGN.RUN=72
2440 KEY 3,"17 cpi"+CHR$(13): CPI=18
2450 KEY 4,"Plain font"+CHR$(13): FONT=69
2460 KEY 5,"Justified edge"+CHR$(13): JFY=0
2470 KEY 6,"Double-spaced"+CHR$(13): LN.SPA=1
2480 KEY 7,"File  name: ": FLNM$=""
2490 KEY 8,"Header: ": HEADER$=""
2500 KEY 9,"Review"+CHR$(13)
2510 KEY 10," Begin"
2520 DEF SEG: POKE 106,0
2530 KEY ON: RETURN
2540 ' Subr to select & implement F-key.
2550 DEF SEG: POKE 106,0: LINE INPUT FKEY$
2560 FOR I=1 TO N.KEYS: IF LEFT$(FKEY$,2)=KEYS$(I-1) GOTO 2570 ELSE NEXT: GOTO 2550
2570 ON I GOTO 2620,2640,2670,2680,2700,2710,2730,2740,2760,2770,2790,2810,2830,2580
2580 IF FLNM$="" THEN BEEP: PRINT "I can't begin; you forgot to give me a file name....": GOTO 2550 ELSE RETURN  '(key 10)
2590 ' Subr to set up array of F-key codes.
2600 FOR N.KEYS=1 TO 20: READ KEYS$(N.KEYS-1): IF KEYS$(N.KEYS-1)<>"END" THEN NEXT ELSE RETURN
2610 ' Set a margin, unless C/R without an entry>0. (Keys 1&2).
2620 VOL=VAL(MID$(FKEY$,15)): IF VOL>0 THEN L.MGN.RUN=VOL
2630 GOTO 2550
2640 VOL=VAL(MID$(FKEY$,15)): IF VOL>0 THEN R.MGN.RUN=VOL
2650 GOTO 2550
2660 ' Toggle between 16.5 & 10 characters per inch. (Key 3).
2670 CPI=15: KEY 3,"10 cpi"+CHR$(13): IF FONT=69 THEN PRINT "Plain font forced";: GOSUB 5000
2675 GOTO 2710
2680 CPI=18: KEY 3,"17 cpi"+CHR$(13): GOTO 2550
2690 ' Toggle between normal & emphasized font. (Key 4).
2700 FONT=69: KEY 4,"Plain font"+CHR$(13): IF CPI=15 THEN PRINT "10 cpi forced";: GOSUB 5000
2705 GOTO 2680
2710 FONT=70: KEY 4,"Pretty font"+CHR$(13): GOTO 2550
2720 ' Toggle between justified & ragged right edge. (Key 5).
2730 JFY=2: KEY 5,"Ragged edge"+CHR$(13): GOTO 2550
2740 JFY=0: KEY 5,"Justified edge"+CHR$(13): GOTO 2550
2750 ' Toggle between single- & double-spacing. (Key 6).
2760 LN.SPA=2: KEY 6,"Single-spaced"+CHR$(13): GOTO 2550
2770 LN.SPA=1: KEY 6,"Double-spaced"+CHR$(13): GOTO 2550
2780 ' Set cassette file name. (Key 7).
2790 FLNM$=MID$(FKEY$,13): GOTO 2550
2800 ' Set header. (Key 8).
2810 HEADER$=MID$(FKEY$,9): GOTO 2550
2820 ' Review the present settings. (Key 9).
2830 PRINT: PRINT"Left margin at";L.MGN.RUN
2840 PRINT"Right margin at";R.MGN.RUN
2850 IF CPI=15 THEN PRINT"17"; ELSE PRINT "10";
2860 PRINT" characters per inch"
2870 IF FONT=69 THEN PRINT"Pretty font" ELSE PRINT"Plain font"
2880 IF JFY=2 THEN PRINT"Justified"; ELSE PRINT"Ragged";
2890 PRINT" right edge"
2900 IF LN.SPA=2 THEN PRINT"Double-"; ELSE PRINT "Single-";
2910 PRINT"spaced lines"
2920 PRINT"File name: ";
2930 IF FLNM$="" THEN BEEP: COLOR 0,7: PRINT " Don't begin until you specify a file name! ";: COLOR 7,0: PRINT ELSE PRINT FLNM$+".bas"
2940 PRINT"Header: ";
2950 IF HEADER$="" THEN PRINT"UNSPECIFIED; neither header nor page # will be printed." ELSE PRINT HEADER$
2960 PRINT: GOTO 2550
2970 ' Alert the operator to an off-line printer.
2980 BEEP: PRINT: PRINT"Printer is off-line; hit ON LINE button."
2990 RESUME 710
3000 'Implement choice of printer font.
3010 ON VAL(MID$(TAPE$,4))+1 GOTO 3030,3040,3050,3060,3070,3080,3090,3100,3110
3020 BEEP: PRINT"Bad font-selection code. Current code survives.": GOTO 2200
3030 MX.COMP=CPI: MX.EMPH=FONT: MX.WID=20: MX.STRK=72: GOTO 2200 'Runtime font
3040 MX.COMP=18: MX.EMPH=70: MX.WID=20: MX.STRK=72: GOTO 2200    'Font 1
3050 MX.COMP=18: MX.EMPH=69: MX.WID=20: MX.STRK=72: GOTO 2200    'Font 2
3060 MX.COMP=18: MX.EMPH=69: MX.WID=20: MX.STRK=71: GOTO 2200    'Font 3
3070 MX.COMP=15: MX.EMPH=70: MX.WID=20: MX.STRK=72: GOTO 2200    'Font 4
3080 MX.COMP=15: MX.EMPH=70: MX.WID=14: MX.STRK=72: GOTO 2200    'Font 5
3090 MX.COMP=15: MX.EMPH=70: MX.WID=14: MX.STRK=71: GOTO 2200    'Font 6
3100 MX.COMP=18: MX.EMPH=69: MX.WID=14: MX.STRK=72: GOTO 2200    'Font 7
3110 MX.COMP=18: MX.EMPH=69: MX.WID=14: MX.STRK=71: GOTO 2200    'Font 8
4000 ' This is the screen of introductory remarks.
4010 LINE.1=1: LOCATE LINE.1,1
4020 PRINT TAB(35);"FINISH"
4030 PRINT TAB(16);"A text-formatting program by Paul F. Doering"
4040 PRINT: PRINT "Use the 10 function keys according to their labels to specify the runtime"
4041 PRINT "parameters."
4050 PRINT: PRINT "Notice that keys F3, F4, F5, and F6 are toggles. If you hit F6, for example,"
4060 PRINT "it will select double-spaced lines; but hitting it again will revert back to"
4070 PRINT "single spacing. The label always shows what will happen the next time you hit"
4080 PRINT "the key. It does NOT show the currently selected parameter."
4090 PRINT: PRINT "To see where things stand at any given moment, hit F9, the Review key."
4100 PRINT: PRINT "Keys F1, F2, F7, and F8 require an argument and a carriage return."
4110 PRINT "Key F10 requires a carriage return also, and the key will be ignored if you"
4120 PRINT "haven't indicated a name for the text file yet.
4130 PRINT: PRINT"Finish only works on files stored on the diskette by a SAVE command in which"
4140 PRINT "the    ,a     option was invoked; that is, it will only handle a file saved"
4150 PRINT "as an ASCII-format BASIC program."
4160 PRINT: PRINT "When specifying a file after hitting key F7, give only the file name."
4170 PRINT "Do NOT give the   .bas   extension.
4180 SCREEN 0,,0,0: RETURN
5000 PRINT ", because the pretty font is only available at 10 cpi.": RETURN
```

## FINISHTX.BAS

```bas
10 '$#0
20 '.pf8.ce"finish"
30 '.pf0.cea formatting printer
40 '.cefor the IBM Personal Computer
50 '.ceand  the EPSON MX-80
60 '.bl1.ceby Paul F. Doering
70 '.bl3.pf6
80 'Introduction
90 '.pf0.in5
100 'In the August 1978 issue of KILOBAUD (now MICROCOMPUTING) there appeared
110 'the full listing of a program its authors called "DOCUFORM". It marked
120 'the first time that anyone had put a complex text-formatting program
130 'into the public domain, and it led to a host of look-alikes on a wide
140 'variety of personal computers. Today its descendents form the nuclei of
150 'several word processors being sold for hundreds of dollars. My version,
160 'heavily modified and extended, is called "finish". Because it is based on
170 'work given freely by its originators, I have maintained that spirit and
180 'have elected to distribute "finish" without charge. There is a corollary,
190 'of course: "finish" comes to you without any guarantees. I will not
200 'promise that it will work under new circumstances. I will not send you
210 'updates. I will not fix bugs in your copy. All I will say now is that
220 'this documentation has been prepared using "finish"; to this extent it is
230 'functional. Have fun with it. It's yours without restriction.
240 '.bl2.pf6.tp4
250 'The files on your diskette
260 '.pf0.in5
270 '"finish" expects to run in a single-drive, single-sided, double-density environment. You can
280 'modify it by yourself. Frankly, I don't feel it's
290 'worth the bother. Put the diskette into drive A and run a directory listing.
300 'You'll find these files.
310 '.bl1.tp4.ma5
320 '*  finish.bas - This is the program itself, saved in ASCII (untokenized)
330 'format for reasons not germane to this discussion. This file is heavily
340 'and cogently commented. Reading it will give you a lot of insight into
350 'both "finish" and BASIC programming in general.
360 '.bl1.tp4
370 '*  finishtx.bas - This is the raw text file for the documentation you are
380 'now reading. It is instructive to compare a straight dump of this file
390 'with the formatted material "finish" produces from it. That comparison is
400 'a good introduction to the principles of imbedded commands, the form of
410 'command "finish" uses to implement your wishes.
411 '.bl1.tp4
412 '*  labels.bas - a little worksaver to which "finish" chains when it is done.
413 '"labels" will produce an altered set of soft labels for the function keys,
414 'a set that I find more useful than IBM's choice. You can change it; but
415 'there has to be such a program, or the chain will fail as "finish" exits.
420 '.bl1.tp4.ma0.in5
430 'What you will NOT find on your diskette is a program to capture the text to
440 'be processed later by "finish". There used to be such a program, called
450 '"keyin". It was so simple that it turned out to be scant help, so I
460 'scuttled it. I have found that I can create text files for "finish" without
470 'the nuisance of a text-capture program's getting in my way. Maybe you'll
480 'disagree and choose to write one. Good luck.
490 '.bl1.tp2.in5
500 'Also mysteriously missing is any kind of an editing program. There's a
510 'good reason for that. Your PC comes with a full-screen editor as a part of
520 'the BASIC interpreter. Why go to the trouble of writing another one?
530 '.bl2.pf6.tp4
540 'The basic principles of "finish"
550 '.pf0.in5
560 'The raw text that "finish" processes is actually a BASIC program that
570 'consists entirely of REMARK statements. Therefore, every line in your raw
580 'text file must begin with a unique line number; and these numbers determine
590 'the actual sequence of the lines in the final documents, just as they do in
600 'BASIC. In the IBM PC, a REMARK statement is indicated by the presence of an
610 'apostrophe following the line number. We have to follow that rule, too; and
620 'you can take my word that your most frequent mistake will be forgetting to
630 'include the apostrophe.
640 '.bl1.tp2.in5
650 'Now you know why file "finishtx.bas" looks as it does. You also know how to
660 'create a file of raw text for "finish" to process. You just start every
670 'line with a line number in increasing sequence, follow it with an
680 'apostrophe, and then enter a line of your intended material. Like any BASIC
690 'line, your text line can have up to 255 characters, including the number
700 'and apostrophe. Personally, I find it easier to read my raw text if I limit
710 'each line's length to the 80-character width of the screen. That's pretty
720 'much the convention in "finishtx.bas".
730 '.bl1.tp2.in5
740 'When you have completed the raw text file, just save it on diskette by
750 'using the command
760 '.bl1.nf
770 '     save"textname",a
780 '.bl1.fi
790 'The use of the ",a" modifier when saving the file to diskette is crucial.
800 '"finish" can only process files saved in ASCII format, and the ",a" is
810 'BASIC's cue to use ASCII instead of the default tokenized format. If you
820 'ever get weird results when asking "finish" to process a file, check to see
830 'with a PC-DOS "type" command whether the file is in ASCII. I'll bet it
840 'won't be.
850 '.bl1.tp2.in5
860 'Incidentally, the raw text will be accumulating in RAM as you enter it in
870 'the form of a peculiar BASIC program. It is good practice to save it onto
880 'the diskette from time to time as it grows larger, guarding yourself
890 'against the disaster of losing the whole job if something goes wrong.
900 '.bl1.tp2.in5
910 'You can see, then, that there are three steps in going from no text at all
920 'to having a finished, printed document.
930 '.bl1.tp4.ma5
940 '1. Using the apostrophe convention for a REMARK statement, create the raw
950 'text of your document in the form of a sequentially numbered set of lines.
960 'Because you are writing a kind of BASIC program, you have the full power
970 'of the BASIC editor available.
980 '.bl1.tp2
990 '2. Save the file of raw text on diskette, using the BASIC "save" command
1000 'and the ",a" option to force a file in ASCII format. To save a file
1010 'named, say, "FRED", you would use the command
1020 '.nf.bl1
1021 '     save"fred",a
1030 '.fi.bl1.tp2
1040 '3. Run the program "finish" as explained below, specifying the name of the
1050 'file of raw text to be processed.
1060 '.bl1.tp2.ma0.in5
1070 'If the document turns out to have mistypings in it, you can return to step
1080 '1, using the BASIC editor in the normal fashion to correct the file. If
1090 'the only problem is the format of the document, as opposed to its content,
1100 'you can make runtime format changes in using "finish" and will not have
1110 'to alter the text file. Only step 3 need be repeated.
1120 '.bl2.pf6.tp4
1130 'Running "finish"
1140 '.pf0.in5
1150 '"finish" is easy to run. Get into BASIC and type
1160 '.nf.bl1
1170 '     run"finish
1180 '.fi.bl1.tp2
1190 'There will be some diskette action, followed by a few seconds of blank
1200 'screen, after which a full screen of instructions will appear. There will
1210 'also be a new set of soft labels on the 25th screen line. These refer to
1220 'the actions of the ten function keys, F1 - F10. Read the instructions.
1230 'Note especially that you will be unsuccessful in getting printed output
1240 'if you fail to hit F7 and type in a file name (like "fred") before you
1250 'hit F10, the "Begin" key.
1260 '.bl1.tp2.in5
1270 'The actions of those function keys deserve some discussion.
1280 'F1 sets the absolute left margin for the printed text. F2 does the same
1290 'for the right. By "absolute" I mean that all adjustments to the margin
1300 'settings by any imbedded commands (see below) will be RELATIVE to the
1310 'runtime values set with F1 and F2. Default values are 3 and 72. Margins
1320 'are set in terms of tenths of inches from the "1" position on the
1330 'printer. These tenths of inches also correspond to the embossed numbers
1340 'on the printer's metal paper bail. Even if you use compressed characters
1350 'at 17 to the inch, these margin settings will still be in tenths of
1360 'inches and will still align with the paper bail.
1370 '.bl1.tp2.in5
1380 'F3 is a toggle. It switches back and forth between 10 characters per inch
1390 'and 17 cpi. That means that at runtime you can select compressed or normal
1400 'fonts. Notice that any toggling key always shows on its soft label what
1410 'will happen the next time it's hit, not what the current state of its
1420 'parameter is. F3's label starts out saying "17 cpi", but "finish" is set
1430 'at that stage to print at 10 cpi. If you hit F3, "finish" will set itself
1440 'for 17 cpi, and the new soft label for F3 will say "10 cpi". If you find
1450 'yourself confused, just hit F9 for a complete status report.
1460 '.bl1.tp2.in5
1470 'F4 toggles between two fonts: "pretty" and "plain", corresponding to
1480 'the printer's emphasized and normal typeface, respectively. "Plain" runs
1490 'faster and is useful for drafts. "Pretty" makes a nicer looking final
1500 'copy. There is an interlock between F3 and F4. The "pretty" font can only
1510 'exist at 10 cpi, and "finish" will not allow otherwise.
1520 '.bl1.tp2.in5
1530 'F5 toggles the justification of the right margin between fully justified
1540 'and ragged. Unless you specify a peculiar left margin justification by an
1550 'imbedded command in the raw text, the left marging is always justified.
1560 '.bl1.tp2.in5
1561 'F6 toggles between single-spaced lines of text and double-spaced.
1562 '.bl1.tp2.in5
1570 'F7 allows you to specify the file name of the raw text. This is mandatory.
1580 'Enter only the name, not the ".bas" extension. You do not have to specify
1590 'a diskette drive, since the program expects everything to be on drive A.
1600 'Nevertheless, you can prefix a "b:" to the file name and it will be
1610 'honored.
1620 '.bl1.tp2.in5
1630 'F8 lets you specify a header, text to be written right-justified with the
1640 'page number at the top of pages two and beyond. If you choose to not
1650 'supply a header, the page number will not be typed either.
1660 '.bl1.tp2.in5
1670 'F9 is the "Review" key. Whenever the blinking cursor is at the left side
1680 'of the screen, awaiting the striking of a function key, you may hit F9
1690 'to get a display of the existing values of the runtime parameters. Until
1700 'you get the hang of using the toggling keys, it's a good idea to take a
1710 'reading with F9 occasionally.
1720 '.bl1.tp2.in5
1730 'F10 is the key you hit when you're ready to start the printing. "finish"
1740 'will conduct a few plausibility tests on the runtime parameters and will
1750 'announce that it can't start printing and why, should it find an
1760 'inconsistency. Accept its criticism without rancor, and correct the
1770 'situation. When you think all is well, hit F10 again.
1780 '.bl1.tp2.in5
1790 'The display will pose a question about what text you wish to substitute
1800 'for a thing called dollar/number 0. This is as good a place to talk about the dollar/number
1810 'codes as any; but there is a logistical problem to be cleared up first.
1812 'In this documentation I am forced to use the term "dollar/number" when I
1814 'really mean the pair of characters produced as shifted-4 and shifted-3,
1816 'respectively. The problem is that I can't actually type those two
1818 'characters, because "finish" will regard them as a substitution request;
1819 'and I don't really want one. Read on; you'll see what I mean....
1820 '.bl2.pf6.tp4
1830 'The substitution-string codes
1840 '.pf0.in5
1850 'There are times when you want to prepare a document for general use under
1860 'more than one circumstance. A form letter is an example. The substitution-
1870 'string codes are place markers that let you tell "finish" that here is a
1880 'place where you wish to insert some text (like an addressee's name) that
1890 'was indeterminate at composing time. You may use up to ten such codes.
1900 'They are designated by the character grouping dollar/number 0 through dollar/number 9. For
1910 'example, you might begin a form letter with
1920 '.bl1.nf
1930 '     Dear dollar/number 1,
1940 '.bl1.fi
1950 'At runtime you would respond to the display inquiry about what you wanted
1960 'to substitute in the place of dollar/number 1 by entering, say, Hilda. At that part
1970 'of the letter, the printer would put out
1980 '.bl1.nf.tp3
1990 '     Dear Hilda,
2000 '.bl1.fi
2010 'having substituted "Hilda" for the dollar/number 1 between the space and the comma.
2020 '.bl1.tp2.in5
2030 'Since there is no conceptual limitation on the nature of the string you
2040 'substitute at runtime, you may also replace a dollar/number with one or more imbedded
2050 'commands. There's no law that says a substitute string has to show up in
2060 'the document as so many words. I think that this is enough on that subject.
2070 'You'll learn most about the dollar/number codes by playing with them. I generally put
2080 'dollar/number 0 as the complete content of the first line of my raw text, so I can
2090 'decide at runtime whether there are any last-minute commands I want to
2100 'imbed. Remember that "finish" will respond to your hitting F10, the "Begin"
2110 'key, by asking what (if any) strings you want to substitute for the
2120 'occurrence of the dollar/number codes, should they be encountered later in the raw
2130 'text.
2140 '.bl1.tp2.in5
2150 'You should not skip any integers in the sequence from 0 to 9 for the
2160 'dollar/number codes. Begin with 0 and go as high as you must without
2170 'leaving any out.
2180 '.bl1.tp2.in5
2190 'PHEW! Now let's get back to what happens when you hit the F10 key and the
2200 'program begins its execution. If you have used any dollar/number codes,
2210 'you can indicate what you want them to stand for in this one printing. They
2220 'can stand for something else during the next printing. Hitting the "enter"
2230 'key without specifying a substitute string terminates "finish"'s inquiries
2240 'on that subject and gets you on to other things.
2250 '.bl1.tp2.in5
2260 '"finish" next asks you to choose output to the screen or the printer. You
2270 'can't have both at once. Make a choice by hitting s or p.
2280 '.bl1.tp2.in5
2290 '"finish" will ask whether you want to print the whole document or just a
2300 'partial set of pages. Most of the time you'll want the whole thing; but
2310 'there'll be times when there's an error on just one page in the middle,
2320 'and then you'll be glad for this feature.
2330 '.bl1.tp2.in5
2340 'That's it. If the printer is turned on, you'll get your document.
2350 'When "finish" is done, it will ask whether you want to make another copy
2360 'with the same dollar/number substitutions. You answer y or n. Guess what
2370 'happens....
2400 '.bl2.tp4.pf6
2401 'Using imbedded commands to control format
2402 '.pf0.in5
2450 'There are two ways to instruct "finish" concerning the appearance of
2460 'the printed results. The first way is the use of the function keys to set
2470 'up runtime specifications on margin placement, font size and elegance, edge
2480 'alignment, line spacing, and header content. You have the power to set these
2490 'parameters before any printing occurs.
2500 '.bl1.tp2.in5
2510 'The other way is to insert the instructions for "finish" directly into
2520 'the body of the text itself. Provided that there is a way for "finish" to
2530 'identify these instructions and to distinguish them from the material being
2540 'printed, this scheme can be quite powerful. These imbedded
2550 'commands, as they are called, can be placed in the flow of text with great
2560 'precision, so as to affect the formatting of a very specific section.
2570 '.bl1.tp2.in5
2580 'You can envision the parameters settable with the function keys as being
2590 'a kind of framework for the formatting process, a set of default conditions that
2600 'apply in the absence of counter-instructions buried in the text. In general,
2610 'any imbedded command has precedence over any runtime specification. For
2620 'example, the imbedded command to begin double line spacing overrides your
2630 'runtime choice from function key 6, the "single/double" key.
2640 '.bl1.tp2.in5
2650 'There is one pair of runtime parameters that will remain in effect
2660 'irrespective of the occurrence of their imbedded counterparts. The left-
2670 'margin and right-margin values from the function keys become absolute.
2680 'All margin adjustments made with imbedded commands are understood to be
2690 'relative to the runtime values. If you use function key 1 to set the runtime
2700 'left margin at 15, then any imbedded command later setting it to 5 will be
2710 'taken to mean "5 with respect to 15", for an actual margin setting of 20 on
2720 'the physical page.
2730 '.bl1.tp2.in5
2740 'To help "finish" identify an imbedded command, we adhere to a brief set
2750 'of rules governing their form and placement in the text.
2760 '.bl1.tp2.in5
2770 'Imbedded commands may occur alone or in chains, but they must always
2780 'start at the left end on a line typed in from the keyboard. The term "imbedded"
2790 'alludes to the commands' being within the body of the text as a whole, not to
2800 'their being allowed to appear at random within any given entered line of that
2810 'text.
2820 '.bl1.tp2.in5
2830 'An imbedded command consists of three characters: a period and two
2840 'lower-case alphabetic characters. This trio may sometimes be followed by an
2850 'integer or a string of textual material as an argument, if permitted by the
2860 'rules outlined in the next section.
2870 '.bl1.tp2.in5
2880 'An example of an imbedded command that takes no argument is
2890 '.ce.wt
2900 'which is the command Wait at Top, forcing "finish" to stop printing at the top
2910 'of all subsequent pages, presumably because you want to align the
2920 'paper manually before printing begins on the new sheet.
2930 '.bl1.tp2.in5
2940 'An example of a command that takes an integer as an argument is
2950 '.ce.lm5
2960 'which is the command mentioned above to move the left margin inward five
2970 'columns with respect to the physical absolute left margin set at runtime with
2980 'function key 1.
2990 '.bl1.tp2.in5
3000 'An example of a command that takes a string of text as an argument is
3010 '.ce.ceTitle
3020 'which is the command to center between the effective margins whatever textual
3030 'material occurs from immediately after the .ce command to the next carriage
3040 'return. In this example, the word   Title   would be centered.
3050 '.bl1.tp2.in5
3060 'In the examples just cited the commands are shown in the center of the
3070 'page to set them apart for emphasis. Remember that when they are imbedded in
3080 'the text, you must type them at the start of a new line. You may not even
3090 'type an innocent space-character first on that line.
3100 '.bl1.tp2.in5
3110 'In the following definitions and explanations, the symbol # will denote
3120 'an integer and XXXX will denote a string of text.
3150 '.bl2.tp9.pf6
3160 'Definitions of the imbedded commands
3170 '.pf0.bl3
3180 'Commands that control margin placement --
3190 '.bl2.tp2
3200 'Set the number of blank lines at the top of the page            .tm#
3210 '.in3
3220 'The default value is zero. Printing will begin at top-of-form.
3230 '.bl1.tp3
3240 'Set the number of blank lines at the bottom of the page         .bm#
3250 '.in3
3260 'Default is 12. Taken together, these two default values will
3270 '.in3
3280 'leave a 12-line gap across the page perforations.
3290 '.bl1.tp2
3300 'Set the left margin at a chosen column                          .lm#
3310 '.in3
3320 'Default is zero; i.e. the runtime margin.
3330 '.bl1.tp2
3340 'Set the right margin at a chosen column                         .rm#
3350 '.in3
3360 'Default is zero; i.e. the runtime margin.
3370 '.bl1.tp2
3380 'Set the number of lines on a physical page                      .pl#
3390 '.in3
3400 'Default is 66, the length of an 8 1/2 by 11" sheet.
3410 '.bl1.tp2
3420 'Adjust both margins in (+) or out(-) by the same amount         .ma#
3430 '.in3
3440 'Default is zero; .ma0 restores the runtime margins.
3450 '.bl1.tp2
3460 'Move all printing rightward (+) or leftward (-)                 .ov#
3470 '.bl2.tp10
3480 'Commands that format the text --
3490 '.bl2.tp2
3500 'Insert blank lines                                              .bl#
3510 '.in3
3520 'Must be >0. Usually used as .bl1 between paragraphs.
3530 '.bl1.tp2
3540 'Indent at the start of a line                                   .in#
3550 '.in3
3560 'Essentially a versatile tab command.
3570 '.bl1.tp2
3580 'Justify left edge of text aligned (right edge ragged)           .jl
3590 '.in3
3600 'This is the default condition, like most typing.
3610 '.bl1.tp2
3620 'Justify right edge aligned (left edge ragged)                   .jr
3630 '.in3
3640 'Seldom used. Find a use and win a prize.
3650 '.bl1.tp2
3660 'Justify both edges aligned                                      .jb
3670 '.in3
3680 'This lengthens the line by extra spaces between words.
3690 '.bl1.tp2
3700 'Set single- (#=1) or double- (#=2) line spacing                 .ls#
3710 '.in3
3720 'Any # not 2 will be reset to 1, which is the default.
3730 '.bl1.tp2
3740 'Center the following text between the current margins           .ceXXXX
3750 '.in3
3760 'It's up to you to see that it fits!
3770 '.bl1.tp2
3780 'Fill the current line with text from the next one if possible   .fi
3790 '.in3
3800 'This is normal operation, the default condition.
3810 '.bl1.tp2
3820 'No filling. Add no text to this line from the following one     .nf
3830 '.in3
3840 'This is useful for inside addresses in letters.
3850 '.bl2.tp10
3860 'Commands related to paging
3870 '.bl2.tp2
3880 'Immediately start a new page                                    .pa
3890 '.in3
3900 'Continuous page numbering is maintained.
3910 '.bl1.tp2
3920 'Immediately start a new page                                    .pa#
3930 '.in3
3940 'Assign # as the number of the new page.
3950 '.bl1.tp2
3960 'Wait at the top of each successive new page                     .wt
3970 '.in3
3980 'This allows paper alignment before printing.
3990 '.bl1.tp3
4000 'Test if there's enough room at the bottom of this page          .tp#
4010 '.in3
4020 'Start a new page unless there are at least # remaining lines
4030 '.in3
4040 'on the current page. Useful for keeping charts & tables intact.
4050 '.bl1.tp3
4060 'Define a header                                                 .hdXXXX
4070 '.in3
4080 'The string of text and the page number will print at the top
4090 '.in3
4100 'of the following pages until superseded by another .hd command.
4110 '.bl2.tp8
4120 'Commands to select an printer font
4130 '.bl2.tp5
4140 'Select a printer font                                           .pf#
4150 '.in3
4160 'The new font applies to a full line. No mixing of fonts on
4170 '.in3
4180 'a single line is possible.
4190 '.bl2.tp12
4200 '.pf1
4210 'This is a sample of the font you get when you use .pf1
4220 '.pf2
4230 'This is a sample of the font you get when you use .pf2
4240 '.pf3
4250 'This is a sample of the font you get when you use .pf3
4260 '.pf4
4270 'This is a sample of the font you get when you use .pf4
4280 '.pf5
4290 'This is a sample of the font you get when you use .pf5
4300 '.pf6
4310 'This is a sample of the font you get when you use .pf6
4311 '.pf7
4312 'This is the font from .pf7
4313 '.pf8
4314 'This is the font from .pf8
4320 '.pf0.bl1.tp2
4330 'Using .pf0 restores the font chosen at runtime, "plain" or "pretty"
```

## GREATCIR.BAS

```bas
10 '********************************************************
20 '*****            GREAT CIRCLE PLOTTING             *****
30 '*****               E. WEISSBERGER                 *****
40 '*****              version 06-08-82                *****
50 '********************************************************
60 CLS: KEY OFF
70 LOCATE 1,22
80 PRINT "GREAT CIRCLE PLOTTING"
90 LOCATE 2,26: PRINT "E. WEISSBERGER"
100 COLOR 0,7,0
110 PRINT " No guarantee is given for the accuracy of values returned by this "
120 PRINT "       program.  Use of these values is at the user's risk.        "
130 COLOR 7,0,0
140 PRINT: PRINT "This program calculates GREAT CIRCLE circle crossing"
150 PRINT "  latitudes for given intercept longitudes"
160 PRINT: PRINT "The program does not operate along lines of equal longitude"
170 PRINT "coordinates will be entered as DEGREE.MIN"
180 PRINT "SECONDS should be converted to decimal MIN and concatinated with MIN"
190 LOCATE 13,5: COLOR 16,1,0
200 PRINT "for SOUTH longitude or EAST latitude use NEGATIVE values"
210 COLOR 7,0,0
220 LOCATE 20,20
230 PRINT "type any key to continue"
240 A$ = INKEY$: IF A$ = "" THEN 240
250 B$(1) = "LATITUDE": B$(2) = "LONGITUDE"
260 C$(1) = "INITIAL": C$(2) = "FINAL": C$(3) = "CROSSING LONGITUDE"
270 PI = 3.1415926#: CONVER = 180.#/PI                 '***** degrees per radian
280 CLS
290 R = 1
300 FOR X = R TO 3
310 PRINT "The COORDINATES of the "C$(X)" point are "
320 FOR Y = 1 TO 2
330 IF X = 3 THEN Y = 2
340 PRINT B$(Y)
350 INPUT "     DEGREES.MIN ",D(X,Y)
360 D1(X,Y) = INT(ABS(D(X,Y)))
370 IF D(X,Y) < 0 THEN GOTO 380 ELSE GOTO 390
380 D1(X,Y) = -D1(X,Y)
390 M1(X,Y) = (D(X,Y) - D1(X,Y))*100
400 DMIN1(X,Y) = M1(X,Y)/60.#
410 L(X,Y) = (D1(X,Y) + DMIN1(X,Y))/CONVER
420 PRINT
430 NEXT Y
440 NEXT X
450 SILONG1 = SIN(L(3,2) - L(1,2))
460 SILONG2 = SIN(L(3,2) - L(2,2))
470 SILONG12 = SIN(L(2,2) - L(1,2))
480 TA2 = TAN(L(2,1)): TA1 = TAN(L(1,1))
490 FL = TA2*SILONG1: FR = TA1*SILONG2
500 LAT = ATN((FL - FR)/SILONG12)
510 LAT = LAT*CONVER
520 LATD = INT(ABS(LAT))
530 LATM = (ABS(LAT) - LATD)*60/100
540 LATA = LATD + LATM
550 CLS:PRINT "The intercept coordinates are:"
560 PRINT
570 PRINT USING "LATITUDE  ####.## DEG.MIN ";LATA
580 PRINT USING "LONGITUDE ####.## DEG.MIN ";D(3,2)
590 PRINT
600 PRINT "Will you run again (Y/N)? "
610 A$ = INKEY$: IF A$ = "" THEN 610 ELSE IF A$ = "Y" OR A$ = "y" THEN R = 3: GOTO 300
620 KEY ON: END
```

## GREATRHM.BAS

```bas
10 '********************************************************
20 '*****                  GREATRHM                    *****
30 '*****               E. WEISSBERGER                 *****
40 '*****              version 06-09-82                *****
50 '********************************************************
60 CLS: KEY OFF
70 LOCATE 1,5
80 PRINT "GREAT CIRCLE PLOTTING FOLLOWED BY RHUMBLINE NAVIGATION"
90 LOCATE 2,20: PRINT "E. WEISSBERGER"
100 COLOR 0,7,0
110 PRINT " No guarantee is given for the accuracy of the values returned by "
120 PRINT "    this program.  Use of these values is at the user's risk.     "
130 COLOR 7,0,0
140 PRINT: PRINT "This program calculates GREAT CIRCLE crossing latitudes"
150 PRINT "            for given intercept longitudes"
160 PRINT "The program does not operate along lines of equal longitude"
170 PRINT "coordinates will be entered as DEGREE.MIN"
180 PRINT "SECONDS should be converted to decimal MIN and concatinated with MIN"
190 LOCATE 13,5: COLOR 16,1,0
200 PRINT "for SOUTH longitude or EAST latitude use NEGATIVE values"
210 COLOR 7
220 LOCATE 20,20
230 PRINT "type any key to continue"
240 A$ = INKEY$: IF A$ = "" THEN 240
250 B$(1) = "LATITUDE": B$(2) = "LONGITUDE"
260 PI = 3.1415926#: CONVER = 180.#/PI                 '***** degrees per radian
270 CLS
280 PRINT "How many interceptions will you use?";
290 A$ = INKEY$: IF A$ = "" THEN 290 ELSE IN = VAL(A$): PRINT IN
300 FOR I = 1 TO (IN + 2) STEP (IN + 1)
310 IF I = 1 THEN 320 ELSE 330
320 PRINT "The COORDINATES of the INITIAL point are ": GOTO 340
330 PRINT "The COORDINATES of the FINAL point are "
340 FOR J = 1 TO 2
350 PRINT B$(J)
360 GOSUB 400
370 NEXT J
380 NEXT I
390 GOTO 480
400 INPUT "     DEGREES.MIN ",D(I,J)
410 D1(I,J) = INT(ABS(D(I,J)))
420 IF D(I,J) < 0 THEN GOTO 430 ELSE GOTO 440
430 D1(I,J) = -D1(I,J)
440 M1(I,J) = (D(I,J) - D1(I,J))*100
450 DMIN1(I,J) = M1(I,J)/60.#
460 L(I,J) = (D1(I,J) + DMIN1(I,J))/CONVER
470 RETURN
480 FOR I = 2 TO (IN + 1)
490 PRINT USING "The crossing LONGITUDE of the number # intercept is ###.#";(I-1)
500 J = 2: GOSUB 400
510 NEXT I
520 CLS
530 SILONG12 = SIN(L((IN+2),2) - L(1,2))
540 TA2 = TAN(L((IN+2),1)): TA1 = TAN(L(1,1))
550 FOR I = 2 TO (IN + 1)
560 SILONG1(I) = SIN(L(I,2) - L(1,2))
570 SILONG2(I) = SIN(L(I,2) - L((IN+2),2))
580 FL = TA2*SILONG1(I): FR = TA1*SILONG2(I)
590 L(I,1) = ATN((FL - FR)/SILONG12)
600 PRINT USING "The intercept coordinates of intercept number # are: ";(I-1)
610 PRINT
620 PRINT USING "LATITUDE  ####.## DEC. DEG ";L(I,1)*CONVER
630 PRINT USING "LONGITUDE ####.## DEC. DEG ";L(I,2)*CONVER
640 PRINT
650 NEXT I
660 PRINT "Will you continue to the RHUMBLINE calculation (Y/N)"
670 A$ = INKEY$: IF A$ = "" THEN 670 ELSE IF A$ = "Y" OR A$ = "y" THEN GOTO 680 ELSE KEY ON: END
680 CLS: LOCATE 1,17
690 PRINT "THE FOLLOWING RESTRICTIONS APPLY:"
700 PRINT "    1. No course may pass through the north or south pole"
710 PRINT "    2. The course may not go due east or due west across the"
720 PRINT "       180 degree meridian (International Date Line)
730 PRINT "    3. Distance errors occur as the course approaches 90 or 270 degrees"
740 PRINT "    4. Accuracy deteriorates for very short distances"
750 PRINT: PRINT "The average variation between initial and final points is used."
760 PRINT "   This is not strictly accurate for large variation changes."
770 LOCATE 13,20
780 PRINT "type any key to continue"
790 A$ = INKEY$: IF A$ = "" THEN 790
800 CLS
810 FOR J = 1 TO (IN + 1)
820 LONGDIF = L(J,2) - L((J+1),2)
830 FACTL2 = LOG(TAN(PI/4.# + L((J+1),1)/2.#))
840 FACTL1 = LOG(TAN(PI/4.# + L(J,1)/2.#))
850 ALPHA = LONGDIF/2.#
860 SIALPHA = SIN(ALPHA)
870 NORMALPHA = ATN(SIALPHA/SQR(1-SIALPHA*SIALPHA))
880 Y = 2.#*NORMALPHA
890 X = FACTL2 - FACTL1
900 C = ATN(Y/X)
910 IF X > 0 THEN 940 ELSE
920 IF X < 0 THEN 930 ELSE
930 C = PI - ABS(C): GOTO 950
940 C = ABS(C)
950 C1 = C*CONVER
960 NORM = SIN(LONGDIF)
970 NORMLONG = ATN(NORM/SQR(1-NORM*NORM))
980 IF NORMLONG < 0.# THEN GOTO 990 ELSE GOTO 1000
990 C1 = 360.# - C1
1000 BEEP: BEEP: PRINT
1010 PRINT: PRINT USING "Determine the magnetic course of leg # based on average variation (Y/N)? ";J
1020 A$ = INKEY$: IF A$ = "" THEN 1020 ELSE IF A$ = "Y" OR A$ = "y" THEN 1030 ELSE 1080
1030 PRINT: PRINT "Use a negative value for EAST variation "
1040 INPUT "What is the LEG initial point variation? ",VI
1050 INPUT "What is the LEG final   point variation? ",VF
1060 VAVER = (VI + VF)/2
1070 CM = C1 + VAVER
1080 PRINT: PRINT USING "The true course for leg # is ###.# degrees";J,C1
1090 COC = COS(C)
1100 IF COC = 0.# THEN GOTO 1110 ELSE GOTO 1140
1110 FACTLONG1 = 60.#*LONGDIF*CONVER
1120 DIST = ABS(COS(L((J+1),1))*FACTLONG1)
1130 GOTO 1170
1140 DISTFACT = 60.#/COC
1150 LATDIF = L((J+1),1) - L(J,1)
1160 DIST = ABS(LATDIF*DISTFACT*CONVER)
1170 PRINT USING "The distance for leg # is #####.# nautical miles";J,DIST
1180 IF A$ = "Y" OR A$ = "y" THEN GOTO 1190 ELSE GOTO 1220
1190 COLOR 0,7,0
1200 PRINT USING " The magnetic course for leg # is ###.# degrees ";J,CM;
1210 COLOR 7,0,0
1220 NEXT J
1230 KEY ON: END
```

## HEARING.BAS

```bas
10 KEY OFF: CLS: LOCATE 1,22: PRINT "HEARING EVALUATION"
20  LOCATE 2,24: PRINT "E. WEISSBERGER"
30 LOCATE 3,24: PRINT "version 6-15-82"
40 COLOR 0,7,0
50 PRINT " While this evaluation may be interesting, it is not a medically "
60 PRINT "                   sound evaluation.                             "
70 COLOR 7,0,0
80 PRINT
90 PRINT "You will hear a tone (or not hear it) depending on your hearing."
100 PRINT "Your response will be monitored to control tone frequency."
110 COLOR 0,7,0
120 PRINT " Indicate that you hear the tone by typing Y "
130 COLOR 7,0,0
140 LOCATE 15,15: PRINT "Type any key to continue"
150 A$ = INKEY$: IF A$ = "" THEN 150 ELSE 160
160 CLS: INPUT "What is your first name? ",N$
170 FOR I = 1 TO 1000: NEXT I
180 R = 1000: S = 125
190 FOR I = 5 TO 30 STEP 1
200 TIME$ = "00:00:00"
210 SOUND I*R,50
220 A$ = INKEY$: IF A$ = "" AND TIME$ < "00:00:05" THEN 220 ELSE IF A$ = "Y" OR A$ = "y" GOTO 240 ELSE IF TIME$ => "00:00:05" THEN GOTO 230
230 F1 = I - 1: I = 30
240 NEXT I
250 FOR J = 1 TO 7
260 TIME$ = "00:00:00"
270 SOUND (F1*R + J*S),50
280 A$ = INKEY$: IF A$ = "" AND TIME$ < "00:00:05" THEN 280 ELSE IF A$ = "Y" OR A$ = "y" GOTO 300 ELSE IF TIME$ => "00:00:05" THEN GOTO 290
290 F2 = J - 1: J = 7
300 NEXT J
310 FR = R*F1 + S*F2
320 PRINT USING "&, your upper hearing limit is ##### hertz ";N$,FR
330 PRINT
340 PRINT "Will you run this program again (Y/N)?"
350 A$ = INKEY$: IF A$ = "" THEN 350 ELSE IF A$ = "Y" OR A$ = "y" THEN CLS: GOTO 190 ELSE CLS: KEY ON: END
```

## JOYSTEST.BAS

```bas
10 'SAVE"B:JOYSTEST.BAS",A
20 'SAVE"B:JOYSTEST.BAK"
30 REM Program to watch the joystick ports
40 REM Will Fastie - 23 Dec 81
50 REM David Reussow - Mar 8,1983
60 KEY OFF: SCREEN 1 :CLS :STRIG ON
70 F$=" ###  ### (##) (##) (##) (##)  "
80 CL$ = "S4;U6;D12;U6;L6;R12;L6"
90 A$ = "S04;BH4;L2;D2;U3;E1;R1;F1;D3;U2;L2"
100 B$ = "S04;BE4;BR1;L2;D2;L1;R3;E1;H1;E1;H1;L3;R1;D2;R2"
110 DR$ = "S04;D1;G5;L2;H1;U1;E1;R2;F3;R3;E2;U4;H2;L2;G2;D1;F2;R3;E5;R3;F2;D1;G2;L3;F3;BH3;E1;U1;D1;G1;D1;G2"
120 HEART$ = "S04;H6;U3;E2;R2;F2;R1;E2;R2;F2;D3;G6;L1"
130 CHERRY$ = "S04;C1;D1;R2;F1;D3;G2;L6;H1;U1;H1;U4;E2;R4;D1;F1;C1;E5;R1"
140 BELL$ = ""
150 LEMON$ = ""
160 DIAMOND$ = ""
170 BAR$ = ""
180 DRAW "BM0,0;M0,199;M319,199;M319,0;M0,0"
190 LOCATE 6,14: PRINT             "Joystick A"
200 LOCATE 8,8 : PRINT     "X    Y   S0   S1   S4   S5    "
210 AX2=AXX:AY2=AYY
220 AX=STICK(0):AY=STICK(1):AS1=STRIG(0):AS2=STRIG(1):AS3=STRIG(4):AS4=STRIG(5)
230 'AX=0:AY=0
240 LOCATE 9,6: PRINT USING F$;AX,AY,AS1,AS2,AS3,AS4
250 IF AX=0 AND AY=0 THEN AXX=40 :AYY=180 :GOTO 280
260 AXX=AX*319/255:AYY=AY*199/255
270 PRESET (AX2,AY2) :DRAW CL$+A$
280 PSET (AXX,AYY) : DRAW CL$+A$
290 DRAW "BM160,100"+CL$
300 LOCATE 16,14: PRINT            "Joystick B"
310 LOCATE 18,8: PRINT     "X    Y   S2   S3   S6   S7    "
320 BX2=BXX:BY2=BYY
330 BX=STICK(2):BY=STICK(3):BS1=STRIG(2):BS2=STRIG(3):BS3=STRIG(6):BS4=STRIG(7)
340 LOCATE 19,6: PRINT USING F$;BX,BY,BS1,BS2,BS3,BS4
350 IF BX=0 AND BY=0 THEN BXX=280 :BYY=180 :GOTO 380
360 BXX=BX*319/255:BYY=BY*199/255
370 PRESET (BX2,BY2) :DRAW CL$+B$
380 PSET (BXX,BYY) : DRAW CL$+B$
390 DRAW "BM160,185"+HEART$
400 DRAW "BM250,025"+DR$
410 GOTO 180
```

## JOYSTICK.BAS

```bas
10 REM PROGRAM TO WATCH THE JOYSTICK PORTS
15 REM SOURCE: CREATIVE COMPUTING [APRIL 1982] PAGE 321
20 REM AUTHOR: Will Fastie - 23 DEC 81
25 REM EDITED BY: David Reussow
30 KEY OFF: CLS: STRIG ON
40 F$="#### ####   ##     #### ####   ##"
50 LOCATE 8,1: PRINT "   JOYSTICK A         JOYSTICK B"
60 PRINT "   X    Y    T        X    Y    T"
70 AX=STICK(0): AY=STICK(1): AT=STRIG(0) OR STRIG(1)
80 BX=STICK(2): BY=STICK(3): BT=STRIG(2) OR STRIG(3)
90 LOCATE 10,1: PRINT USING F$;AX,AY,AT,BX,BY,BT
100 GOTO 70
```

## LOAN3.BAS

```bas
10 CLS: KEY OFF: LOCATE 3,30: PRINT "LOAN.BAS"
20 LOCATE 9,25: PRINT "Edward Weissberger"
21 LOCATE 10,6: PRINT "While every effort has been made to insure calculation accuracy,"
22 PRINT "the author accepts no responsibility for consequences of using of LOAN.BAS"
30 LOCATE 7,14:PRINT "A PROGRAM TO CALCULATE LOAN PARAMETERS"
40 LOCATE 4,26: PRINT "version 02-01-83"
45 LOCATE 20,50: PRINT "Type any key to continue"
46 A$ = INKEY$: IF A$ = "" THEN 46
50 DEF SEG: POKE 106,0
60 KEY 1,"Rate"+CHR$(13)
70 KEY 2,"Paymnt"+CHR$(13)
80 KEY 3,"Value"+CHR$(13)
90 KEY 4,"Time"+CHR$(13)
100 KEY 5,"Paid"+CHR$(13)
110 KEY 6,"Amort"+CHR$(13)
120 KEY 8,"Quit"+CHR$(13)
130 KEY 7,"Table"+CHR$(13)
140 KEY 9,""
150 KEY 10,""
160 KEY ON
170 CLS
180 'Explain program
190 LOCATE 1,15: COLOR 0,7,0: PRINT " MEANING OF THE SOFT KEY CALCULATION OPTIONS ": COLOR 7,0,0: PRINT
200 PRINT "KEY 1: Calculate INTEREST RATE from loan amount, years, monthly payments.": PRINT
210 PRINT "KEY 2: Calculate MONTHLY PAYMENTS from loan amount, years, rate.": PRINT
220 PRINT "KEY 3: Calculate the PRINCIPLE VALUE (amount) remaining at any given time.": PRINT
230 PRINT "KEY 4: Calculate the TIME remaining on the loan."
240 PRINT "       Use this after a ballon principle payment or to determine"
250 PRINT "       the time needed to pay a loan with given payments.": PRINT
260 PRINT "KEY 5: Calculate AMOUNTS PAID to principle and interest at any time."
270 PRINT "       USE ONLY WITH SCHEDUAL VALUES FOR DURATION OF LOAN AND PMTS."
280 PRINT "       If using extra payments, use soft KEY 6, Amort.": PRINT
290 PRINT "KEY 6: Calculates an AMORTIZATION SCHEDULE of interest paid and"
300 PRINT "       the principle remaining in any given time period of the loan.": PRINT
310 PRINT "KEY 7: Prints an amortization schedule TABLE.": PRINT
320 PRINT "KEY 8: Terminates LOAN.BAS and assigns the SOFT KEYS to a useful set."
330 'Select an option for calculation.
340 LOCATE 24,15: COLOR 0,7,0
350 PRINT " Select an option for calculation. ";: COLOR 7,0,0
360 LINE INPUT; C$
370 CLS
380 IF C$="Rate" THEN 470 ELSE IF C$="Paymnt" THEN 640 ELSE IF C$="Value" THEN 760 ELSE IF C$="Time" THEN 1060 ELSE IF C$="Quit" THEN 420 ELSE IF C$="Paid" THEN 1230 ELSE IF C$="Amort" THEN 1480 ELSE IF C$="Table" THEN 1720
390 LOCATE 21,1: PRINT "Try again, please.": GOTO 340
400 LINE INPUT; ITEM$
410 'Terminate with re-assignment of the soft keys.
420 CLS: LOCATE 20,15: PRINT "Are you sure you want to Quit? (Y/N)"
430 A$ = INKEY$: IF A$ = "" THEN 430
440 IF A$ = "y" OR A$ = "Y" THEN 450 ELSE 170
450 GOTO 2200
460 'Iteratively calculate the interest rate.
470 CC = 1
480 ITER = 1
490 GOSUB 900
500 GOSUB 930
510 GOSUB 920
520 GOSUB 1440
530 I = 1.1: REF = 200: REFI = 2
540 PRINT: PRINT "Please wait during calculation."
550 GOSUB 980
560 GOSUB 830
570 IF I < 0 THEN I = ABS(I): GOTO 550
580 WHILE FIX((OPV-PVF)*100)
590 IF (OPV-PVF) < REF THEN I = I + REFI: GOTO 550
600 I = I - REFI: REF = REF/2: REFI = REFI/2: GOTO 550
610 WEND
620 CLS: PRINT USING "The interest rate is ##.## ";I
630 ITER = 0: GOTO 340
640 'Calculate the needed monthly payment.
650 GOSUB 890
660 GOSUB 900
670 GOSUB 930
680 GOSUB 1440
690 GOSUB 980
700 GOTO 710
710 PMT = OPV*FACT3
720 CLS: PRINT USING "The monthly payment required is #####.## ";PMT
730 PMTYR = PMT*12
740 PRINT USING "The yearly  payment required is #####.## ";PMTYR
750 GOTO 340
760 'Calculate the unpaid principle.
770 GOSUB 890
780 GOSUB 900
790 GOSUB 920
800 GOSUB 950
810 GOSUB 1440
820 GOSUB 980
830 PVF = PMT/FACT3
840 IF ITER = 1 THEN RETURN
850 IF PAID = 1 THEN RETURN
860 CLS: PRINT USING "The unpaid principle is ######.## ";PVF
870 GOTO 340
880 'The data request statements.
890 INPUT "Type the interest rate: ",I: RETURN
900 INPUT "Type the initial loan value: ",OPV: RETURN
910 INPUT "Type the present loan value: ",PV: RETURN
920 INPUT "Type the monthly payment: ",PMT: RETURN
930 INPUT "Type the loan duration in years: ",YR
940 MON = YR*12: RETURN
950 INPUT "Type the number of months remaining: ",MON: RETURN
960 INPUT "Type the number of months already paid: ",MONP: RETURN
970 'The common arithmetic factors.
980 INTR = I/1200
990 IF VALP = 1 THEN RETURN
1000 FACT = (1 + INTR)^(-MON)
1010 IF AMTR = 1 THEN RETURN ELSE IF TABLE = 1 THEN RETURN
1020 FACT2 = 1 - FACT
1030 FACT3 = INTR/FACT2
1040 RETURN
1050 'Calculate the time remaining on the loan.
1060 VALP = 1
1070 GOSUB 890
1080 GOSUB 910
1090 GOSUB 920
1100 GOSUB 1440
1110 GOSUB 980
1120 FACT4 = PV*INTR/PMT
1130 IF FACT4 >= 1 THEN COLOR 0,7,0: PRINT " Sorry, you MUST pay more per month. ": COLOR 7,0,0: GOTO 340
1140 FACT5 = -FACT4 + 1
1150 MON = -(LOG(FACT5)/LOG(1 + INTR))
1160 CLS
1170 PRINT USING "There are ###.## months remaining. ";MON: PRINT
1180 YR = MON/12
1190 PRINT USING "There are  ##.### years remaining. ";YR
1200 VALP = 0
1210 GOTO 340
1220 'Calculate the principle and interest paid since the loan's beginning.
1230 PAID = 1
1240 GOSUB 890
1250 GOSUB 900
1260 GOSUB 930
1270 GOSUB 960
1280 GOSUB 920
1290 GOSUB 1440
1300 MON = MON - MONP
1310 GOSUB 980
1320 GOSUB 830
1330 PVP = OPV - PVF
1340 PD = PMT*MONP
1350 INTP = PD - PVP
1360 CLS
1370 PRINT USING "The principle paid is ######.## ";PVP
1380 PRINT USING "The interest  paid is ######.## ";INTP
1390 TOT = PVP + INTP
1400 PRINT USING "The total     paid is ######.## ";TOT
1410 PRINT: PRINT USING "The principle remaining is ######.## ";PVF
1420 PAID = 0
1430 GOTO 340
1440 PRINT: PRINT "Are these values correct? (Y/N) "
1450 A$ = INKEY$: IF A$ = "" THEN 1450
1460 IF A$ = "n" OR A$ = "N" THEN: CLS: LOCATE 15,5: GOTO 370 ELSE IF A$ = "y" OR A$ = "Y" THEN RETURN ELSE LOCATE 15,5: PRINT "Answer again, please.": GOTO 1440
1470 'Calculate amortization schedule
1480 AMTR = 1
1490 GOSUB 890
1500 GOSUB 900
1510 GOSUB 920
1520 INPUT "Type the first payment number for the period of concern: ",JJ
1530 INPUT "Type the final payment number for the period of concern: ",KK
1540 GOSUB 1440
1550 IF TABLE = 1 THEN 1780
1560 MON = KK
1570 GOSUB 980
1580 BAL(1) = (1/FACT)*(PMT*(FACT-1)/INTR + OPV)
1590 MON = JJ - 1
1600 GOSUB 1000
1610 BAL(2) = (1/FACT)*(PMT*(FACT-1)/INTR + OPV)
1620 INTRNG = BAL(1)- BAL(2)+ (KK - JJ + 1)*PMT
1630 TOTPAD = PMT*(KK-JJ+1)
1640 CLS: PRINT USING "In the payment period range #### to #### ";JJ,KK: PRINT
1650 PRINT USING "The interest paid:       ######.## ";INTRNG
1660 PRINT USING "The principle remaining: ######.## ";BAL(1)
1670 PRINT: PRINT USING "The total paid:   ######.## ";TOTPAD
1680 PRINT: PRINT "Will you run again with the same loan with changed periods? (Y/N)"
1690 A$ = INKEY$: IF A$ = "" THEN 1690
1700 IF A$ = "n" OR A$ = "N" THEN CLS: AMTR = 0: TABLE = 0: GOTO 340 ELSE IF A$ = "Y" OR A$ = "y" THEN CLS: GOTO 1520 ELSE CLS: PRINT "Answer again, please": GOTO 1680
1710 'Print amoritzation table with line printer
1720 TABLE = 1
1730 CLS: LOCATE 10,5: COLOR 0,7,0: PRINT " Turn printer on and on line. "
1740 COLOR 7,0,0
1750 PRINT: LOCATE 12,15: PRINT "Type any key to continue."
1760 A$ = INKEY$: IF A$ = "" THEN 1760
1770 CLS: GOSUB 1490
1780 TPMT = 0: INPA = 0: DUR = KK - JJ + 1
1790 LPRINT: LPRINT
1800 LPRINT CHR$(14); "       LOAN  AMORTIZATION  TABLE";CHR$(20)
1810 LPRINT
1820 LPRINT USING "           LOAN VALUE: $######.##     MONTHLY PAYMENT: $######.##";OPV,PMT
1830 LPRINT USING "                     ANNUAL PERCENTAGE RATE:     ##.##%";I
1840 LPRINT
1850 LPRINT USING "                   FIRST INSTALLMENT OF CALCULATION: ###";JJ
1860 LPRINT USING "                   LAST  INSTALLMENT OF CALCULATION: ###";KK
1870 LPRINT USING "                                 NUMBER OF PAYMENTS: ###";DUR
1880 LPRINT: LPRINT: LPRINT:
1890 LPRINT "    PAYMENT          REMAINING            PRINCIPLE        INTEREST"
1900 LPRINT "    NUMBER           PRINCIPLE             PAYMENT          PAYMENT"
1910 LPRINT
1920 F$ =   "    ###.##           ######.##          ######.##        ######.##"
1930 FOR LNS = JJ TO CINT(KK)
1940 IF LNS = CINT(KK) THEN LNS = KK
1950 FOR JJJ = 1 TO 2
1960 MON = LNS + 1 - JJJ
1970 GOSUB 980
1980 IF FIX(KK) = KK OR LNS < KK THEN GOTO 2010
1990 BAL(2) = BAL(1): BAL(1) = 0
2000 INTPD = BAL(2)*INTR*(KK - FIX(KK)): F = 1: JJJ = 2: GOTO 2020
2010 BAL(JJJ) = (1/FACT)*(PMT*(FACT-1)/INTR + OPV)
2020 NEXT JJJ
2030 PRNPD = BAL(2) - BAL(1): IF F = 1 GOTO 2050
2040 INTPD = PMT - PRNPD
2050 LPRINT USING F$; LNS, BAL(1), PRNPD, INTPD
2060 TPMT = TPMT + PRNPD: INPA = INPA + INTPD: TOTPAD = TPMT + INPA
2070 NEXT LNS
2080 F = 0
2090 LPRINT
2100 LPRINT USING "   PRIN. PAID $######.##  INTER. PAID $######.##  TOT PAID $######.##";TPMT,INPA,TOTPAD
2110 GOTO 1680
2200 KEY 1,"LIST "
2210 KEY 2,"RUN"+CHR$(13)
2220 KEY 3,"LOAD"+CHR$(34)
2230 KEY 4,"SAVE"+CHR$(34)
2240 KEY 5,"B:"
2250 KEY 6,CHR$(44)+CHR$(34)+"LPT1:"+CHR$(34)+CHR$(13)
2260 KEY 7,CHR$(34)+",A"+CHR$(13)
2270 KEY 8,"SYSTEM"+CHR$(13)
2280 KEY 9,"FILES"+CHR$(13)
2290 KEY 10,"FILES"+CHR$(34)+"B:*.*"+CHR$(13)
2300 DEF SEG: POKE 106,0
2310 KEY ON: CLS: NEW: END
```

## NCCLSPRE.BAS

```bas
5 CLS:KEY OFF
10 REM PRECISION PROGRAM v1.83 by N. ADAMS
20 REM This program will calculate within run,run to run, and day to day
30 REM precision.
32 CLEAR
34 INPUT "Title: ";TI$
35 INPUT "Enter number of days of data collected ";N
40 OPTION BASE 1
50 DIM A(N,4),B(N,2),C(N,4),D(N),E(N,2),G(N)
60 PRINT "ENTER EACH DAYS VALUES AS FOLLOWS:"
70 PRINT "RUN 1 VALUE 1,RUN 1 VALUE 2,RUN 2 VALUE 1, RUN 2 VALUE 2"
80 FOR I =1 TO N:INPUT "DATA ";A(I,1),A(I,2),A(I,3),A(I,4)
90 NEXT I
100 FOR I =1 TO N:
110       B(I,1) = (A(I,1) + A(I,2))/2
120       B(I,2) = (A(I,3) + A(I,4))/2
130 NEXT I
140 FOR I = 1 TO N:
150       C(I,1) = (A(I,1) - B(I,1))^2
160       C(I,2) = (A(I,2) - B(I,1))^2
170       C(I,3) = (A(I,3) - B(I,2))^2
180       C(I,4) = (A(I,4) - B(I,2))^2
190 NEXT I
200 S=0
210 FOR I = 1 TO N:
220 FOR J = 1 TO 4:
230    S = S+C(I,J)
240 NEXT J
250 NEXT I
260 WR = S/(2*N)
265 WRP = SQR(WR)
270 PRINT "WITHIN RUN PRECISION = ",WRP
280 FOR I = 1 TO N: D(I) = (B(I,1) + B(I,2))/2
290 NEXT I
300 T = 0
310 FOR I = 1 TO N:
320      E(I,1) = (B(I,1) - D(I))^2
330      E(I,2) = (B(I,2) - D(I))^2
340 T = T + E(I,1) + E(I,2)
350 NEXT I
360 RR = (2*T)/N
365 RRP = (RR-WR)/2 :QW = SQR(RRP)
370 PRINT:PRINT "RUN TO RUN PRECISION = ",QW
380 L = 0
390 FOR I = 1 TO N:L = L + D(I)
400 NEXT I
410 F = L/N
420 H = 0
430 FOR I = 1 TO N:
440      G(I) = (D(I) - F)^2
450 H = H + G(I)
460 NEXT I
470 PR = (4*H)/(N-1)
475 PRP = (PR-RR)/4 :ZW =SQR(PRP)
480 PRINT :PRINT "DAY TO DAY PRECISION = ",ZW
485 LPRINT TI$:LPRINT
490 LPRINT SPC(20) "RUN 1" SPC(25) "RUN 2"
495 LPRINT "DAY","REP 1","REP 2","REP 1","REP 2"
500 FOR I = 1 TO N:
510 LPRINT I,A(I,1),A(I,2),A(I,3),A(I,4)
520 NEXT I
530 LPRINT:LPRINT:LPRINT
600 LPRINT: LPRINT:LPRINT
610 LPRINT "THE WITHIN RUN PRECISION = ";WRP
620 LPRINT:LPRINT "THE RUN TO RUN PRECISION = ";QW
630 LPRINT:LPRINT "THE DAY TO DAY PRECISION = ";ZW
635 PRINT :PRINT
640 PRINT:INPUT "Continue (C) or End (E): ";ZX$
650 IF ZX$ = "C" OR ZX$ ="c" THEN 10 ELSE 660
660 IF ZX$ ="e" OR ZX$ = "E" THEN 700 ELSE 640
700 CLS: KEY ON
```

## PCHALLEN.BAS

```bas
1 GOTO 11
2 FOR T= 1TO L:NEXT:POKE FNP(X,V),32
3 X=X+A:V=V+B:IF V=1 THEN A=1-2*RND ELSE IF V=23 THEN 9 ELSE IF PEEK(FNP(X,V))<>219 THEN POKE FNP(X,V),2:GOTO 2
4 IF PEEK(FNP(X,V-B))=32 THEN B=-B:M=M+1 ELSE IF PEEK(FNP(X-A,V))=32 THEN A=-A ELSE A=-A:B=-B:M=M+1
5 PLAY"MBC64":IF M MOD 14 THEN 3 ELSE L=L*0.9:GOTO 3
6 KEY(12) OFF:KEY(13) OFF:IF D>1 THEN D=D-3:GOTO 8 ELSE 8
7 KEY(12) OFF:KEY(13) OFF:IF D<51 THEN D=D+3
8 LOCATE 22,D:PRINT P$;:PLAY"A64":KEY(12) ON:KEY(13) ON:RETURN
9 KEY(12) OFF:KEY(13) OFF:SOUND 39,11:C=C-1:LOCATE 9,69:PRINT C:IF C=0 THEN 15
10 FOR T=1 TO 2000:NEXT:M=1:RANDOMIZE(C):X=RND*35+10:V=RND*2+2:LOCATE 1,9+C*4:PRINT" ":KEY(12) ON:KEY(13) ON:GOTO 3
11 WIDTH 80:COLOR 4,3,2:CLS:KEY OFF:DEFINT B-V:B=1:C=11:DEF FNP(X,V)=INT(X+0.5)*2+V*160:ON KEY(12) GOSUB 6:ON KEY(13) GOSUB 7:LOCATE 10,20:PRINT"Left and right cursor keys move paddle.":LOCATE 12,15:INPUT"Input drag factor: (100 is medium...0 is fast!)";L
12 DEF FNZ=VAL(LEFT$(TIME$,2))*3600+VAL(MID$(TIME$,4,2))*60+VAL(RIGHT$(TIME$,2)):B$="   ":LOCATE 14,20:PRINT"Pick a paddle size: (Small, Medium or Large)":A$=INKEY$:IF A$=""THEN 12 ELSE IF A$="S"OR A$="s"THEN P=3 ELSE IF A$="M"OR A$="m"THEN P=4 ELSE P=5
13 CLS:COLOR 1:LOCATE 24,15:PRINT"Stay on the Ball with PC Magazine";:LOCATE 3,66:PRINT"PChallenge":LOCATE 8,66:PRINT"Balls left":LOCATE 11,65:PRINT"Initial Drag":DEF SEG=0:IF (PEEK(1040) AND 48)=48 THEN DEF SEG=&HB000 ELSE DEF SEG=&HB800
14 P$=B$+STRING$(P,219)+B$:FOR T=0 TO 9:POKE FNP(12+4*T,0),2:NEXT:FOR S=2 TO 54+P:POKE FNP(S,1),219:NEXT:FOR S=2 TO 20:FOR T=0 TO 1:POKE FNP(T+2,S),219:POKE FNP(53+P+T,S),219:NEXT:NEXT:COLOR 4:LOCATE,69:PRINT L:D=25:GOSUB 8:W=FNZ:GOTO 9
15 Z=FNZ:COLOR 1:LOCATE 17,66:PRINT"Time Spent":LOCATE 14,66:PRINT"Final Drag":COLOR 4:LOCATE,69:PRINT L:LOCATE 18,65:PRINT USING"#### seconds";Z-W:LOCATE 20,65:PRINT"Want to play":LOCATE,65:PRINT"AGAIN (Y/N)?"
16 A$=INKEY$:IF A$="Y"OR A$="y"THEN RUN ELSE IF A$="N"OR A$="n"THEN CLS ELSE 16
```

## PRINTER2.BAS

```bas
10 REM PRINTER
15 REM SOURCE: CREATIVE COMPUTING [MAY 1982] page 194
20 REM PROGRAM TO DEAL WITH THE IBM 80 CPS PRINTER (EPSON MX80)
30 REM FUNCTIONS: SETUP PRINTER MODES
40 REM            PRINT PAGINATED LISTED LISTING OF TEXT FILES
50 REM            ISSUE CONTROLS TO PRINTER
55 REM EDITED BY DAVID C. REUSSOW
60 REM AUTHOR:    Will Fastie
70 REM CREATED:   12 DEC 1981
80 REM EDITED:    26 JAN 1982 2355
90 REM SOURCE:    PRINTER.BAS
100 REM NOTE:     OPERATES ON CURRENT DISPLAY DEVICE, CURRENT MODE
110 REM *****  CONSTANTS
120 PROG$ = "PRINTER  V1.01  26 JAN 1982"
130 ESC$=CHR$(27)
140 CLRLPT$=CHR$(18)+CHR$(20)+ESC$+"F"+ESC$+"H"
150 PWIDTH=77
160 REM ***** INITAL MENU
170 KEY OFF: CLS: SCREEN 0,0,0
180 PRINT PROG$: PRINT
190 PRINT "THE PRINTER MUST BE ONLINE TO"
200 PRINT "PREFORM THESE FUNTIONS."
210 PRINT
220 PRINT "FUNCTIONS:";
230 PRINT TAB(13);"P - PRINT A TEXT FILE"
240 PRINT TAB(13);"S - SETUP PRINTER"
250 PRINT TAB(13);"R - RESET PRINTER"
260 PRINT TAB(13);"T - ADVANCE PAPER TO TOP"
270 PRINT TAB(13);"Q - QUIT (RETURN TO DOS)"
280 PRINT TAB(13);"X - EXIT TO BASIC"
290 MENSEL = CSRLIN+1
300 PLOC = MENSEL: GOSUB 1270
310 INPUT "   ENTER FUNCTION:  ",X$: IF X$="" THEN BEEP: GOTO 300
320 GOSUB 1210
330 X = INSTR("PSRTQX",X$): IF X = 0 THEN BEEP: GOTO 300
340 ON X GOSUB 360, 770, 1080, 1120, 1150, 1180
350 GOTO 160
360 REM ***** PRINT PAGINATED LISTING
370 CLS
380 PRINT PROG$: PRINT
390 PRINT "ADJUST THE PAPER IN THE PRINTER SO THAT"
400 PRINT "THE PERFORATION IS AT THE PAPER BAIL."
410 PRINT "PUT THE PRINTER ONLINE."
420 PRINT
425 PRINT "*****************************************"
430 PRINT "*    FILES MUST BE ASCII TEXT FILES     *"
435 PRINT "*       NOTE: SAVE`FILE NAME',A         *"
440 PRINT "*****************************************"
445 PRINT
450 PRINT "NO FILENAME EXTENSION IS ASSUMED,"
460 PRINT "SO ENTER THE FILENAME EXACTLY."
470 PRINT "DEPRESS ENTER KEY TO RETURN TO MENU."
480 PRINT "PRESS ESC KEY TO ABORT PRINTING."
490 PRINT:FILES:PRINT
500 INPUT "FILE TO PRINT :  ",X$
510 IF LEN(X$) = 0 THEN RETURN
520 GOSUB 1210
530 WIDTH "LPT1:",PWIDTH
540 OPEN X$ FOR INPUT AS #1
550 PAGENR = 0
560 LINENR = 1
570 IF EOF (1) THEN 650
580 LINE INPUT #1, L$
590 IF LINENR = 1 THEN GOSUB 690
600 LPRINT L$
610 IF INKEY$ = ESC$ THEN 650
620 LINENR = LINENR + INT((LEN(L$)+79)/80)
630 IF LINENR > 54 THEN LINENR = 1
640 GOTO 570
650 REM CLOSE FILE AND RETURN
660 CLOSE
670 GOSUB 1120
680 GOTO 500
690 REM ***** SUBROUTINE TO PRINT PAGE HEADING
700 IF PAGENR <> 0 THEN LPRINT CHR$(12);
710 PAGENR = PAGENR + 1
720 LPRINT: LPRINT
730 LPRINT CHR$(14);X$;" ";CHR$(20);
740 LPRINT "-- PRINTED ON ";DATE$;" AT ";TIME$;" -- PAGE";PAGENR
750 LPRINT: LPRINT
760 RETURN
770 REM ***** SETUP PRINTER
780 CLS: PRINT PROG$
790 PRINT : PRINT "PRINTER ENHANCEMENTS ARE:"
800 PRINT
810 PRINT "   DW - DOUBLE WIDTH"
820 PRINT "   C  - COMPRESSED PRINT "
830 PRINT "   E  - EMPHASIZED PRINT "
840 PRINT "   DS - DOUBLE STRIKE"
850 PRINT
860 PRINT "ENTER EHANCEMENTS SEPARATED BY SPACES."
870 PRINT
880 PRINT" EXAMPLES:"
890 PRINT
900 PRINT "  C E          -ILLEGAL"
910 PRINT "               -10   CPI, NORMAL"
920 PRINT "  E            -10   CPI, BOLD"
930 PRINT "  DS C         -16.5 CPI, DOUBLE"
940 PRINT
950 INPUT "   ENTER ENHANCEMENTS:   ",O$
960 X$=O$: GOSUB 1210: O$=X$
970 LPRINT CLRLPT$;
980 IF INSTR(O$,"DW") THEN LPRINT CHR$(14);
990 IF INSTR(O$,"C")  THEN LPRINT CHR$(15);
1000 IF INSTR(O$,"E") THEN LPRINT ESC$;"E";
1010 IF INSTR(O$,"DS")THEN LPRINT ESC$;"G";
1020 PRINT
1030 PLOC=CSRLIN
1040 GOSUB 1270
1050 INPUT "ENTER DESIRED LINE WIDTH:   ",PWIDTH
1060 IF 1 > PWIDTH OR PWIDTH > 132 THEN 1040
1070 RETURN
1080 REM ***** RESET PRINTER TO DEFAULTS
1090 LPRINT CLRLPT$;
1100 PWIDTH =80
1110 RETURN
1120 REM ***** FORM FEED TO PRINTER
1130 LPRINT CHR$(12);
1140 RETURN
1150 REM ***** RETUNR TO DOS
1160 CLS
1170 SYSTEM
1180 REM ***** EXIT TO BASIC
1190 CLS
1200 END
1210 REM ***** SUBROUTINE TO UPPERFY A STRING (IN X$)
1220 FOR X = 1 TO LEN(X$)
1230   XC$ = MID$(X$,X,1)
1240 IF "a" <= XC$ AND XC$ <= "z" THEN MID$(X$,X,1) = CHR$(ASC(XC$)-32)
1250 NEXT X
1260 RETURN
1270 REM ***** SUBROUTINE TO POSITION AT SPECIFIED LINE AND CLEAR IT
1280 LOCATE PLOC,1
1290 PRINT STRING$(40," ");
1300 LOCATE PLOC,1
1310 RETURN
1320 REM ***** SUBROUTINE TO WAIT FOR ANY KEYSTROKE
1330 PRINT "DEPRESS ANY KEY TO COTINUE...";
1340 GOSUB 1360
1350 RETURN
1360 REM ***** SUBROUTINE TO GET A KEYSTROKE INTO X$
1370 X$ = INKEY$
1380 IF X$ = "" THEN 1370
1390 RETURN
```

## RHMLINE.BAS

```bas
10 '**************************************************************
20 '*****                RHUMBLINE NAVIGATION                *****
30 '*****                  Version 06-08-82                  *****
40 '*****                    E.Weissberger                   *****
50 '**************************************************************
60 CLS:KEY OFF:LOCATE 1,20
70 PRINT "RHUMBLINE NAVIGATION PROGRAM"
80 LOCATE 2,25: PRINT "E. WEISSBERGER"
90 COLOR 0,7,0
100 PRINT " No guarantee is given for the accuracy of values returned by this "
110 PRINT "        program.  Use of this program is at the user's risk.       "
120 COLOR 7,0,0
130 PRINT
140 PRINT "THE FOLLOWING RESTRICTIONS APPLY:"
150 PRINT "    1. No course may pass through the north or south pole"
160 PRINT "    2. The course may not go due ease or due west across the"
170 PRINT "       180 degree meridian (International Date Line)
180 PRINT "    3. Distance errors occur as the course approaches 90 or 270 degrees"
190 PRINT "    4. Accuracy deteriorates for very short distances"
200 PRINT :PRINT "Coordinates will be entered as DEGREE.MIN"
210 PRINT "SECONDS should be converted to decimal MIN and concatinated with MIN"
220 PRINT: PRINT "enter WEST variation as a positive number"
230 PRINT "enter EAST variation as a negative number"
240 PRINT: PRINT "The average variation between initial and final points is used."
250 PRINT "   This is not strictly accurate for large variation changes."
260 LOCATE 22,5: COLOR 16,1,0
270 PRINT "for SOUTH longitude or EAST latitude use NEGATIVE value"
280 COLOR 7
290 LOCATE 24,50
300 PRINT "type any key to continue";
310 A$ = INKEY$: IF A$ = "" THEN 310
320 B$(1) = "LATITUDE": B$(2) = "LONGITUDE"
330 C$(1) = "INITIAL": C$(2) = "FINAL"
340 PI = 3.1415926#: CONVER = 180.#/PI          '***** degrees per radian
350 CLS
360 FOR X = 1 TO 2
370 PRINT "The COORDINATES of the "C$(X)" point are "
380 FOR Y = 1 TO 2
390 PRINT B$(Y)
400 INPUT "     DEGREES.MIN ",D(X,Y)           '***** see note at beginning
410 D1(X,Y) = INT(ABS(D(X,Y)))
420 IF D(X,Y) < 0 THEN GOTO 430 ELSE GOTO 440
430 D1(X,Y) = -D1(X,Y)
440 M1(X,Y) = (D(X,Y) - D1(X,Y))*100
450 DMIN1(X,Y) = M1(X,Y)/60.#                   '***** convert to decimal degrees
460 L(X,Y) = (D1(X,Y) + DMIN1(X,Y))/CONVER     '***** total decimal radians
470 NEXT Y
480 NEXT X
490 LONGDIF = L(1,2) - L(2,2)                  '***** in radians
500 FACTL2 = LOG(TAN(PI/4.# + L(2,1)/2.#))
510 FACTL1 = LOG(TAN(PI/4.# + L(1,1)/2.#))
520 ALPHA = LONGDIF/2.#
530 SIALPHA = SIN(ALPHA)
540 NORMALPHA = ATN(SIALPHA/SQR(1-SIALPHA*SIALPHA))
550 Y = 2.#*NORMALPHA
560 X = FACTL2 - FACTL1
570 C = ATN(Y/X)
580 IF X > 0 THEN 610 ELSE
590 IF X < 0 THEN 600 ELSE
600 C = PI - ABS(C): GOTO 620
610 C = ABS(C)
620 C1 = C*CONVER
630 NORM = SIN(LONGDIF)
640 NORMLONG = ATN(NORM/SQR(1-NORM*NORM))
650 IF NORMLONG < 0.# THEN GOTO 660 ELSE GOTO 670
660 C1 = 360.# - C1
670 CLS: BEEP: BEEP
680 PRINT "Determine the magnetic course based on average variation (Y/N)? ";
690 A$ = INKEY$: IF A$ = "" THEN 690
700 IF A$ = "Y" OR A$ = "y" THEN 710 ELSE 760
710 PRINT: PRINT "Use a negative value for EAST variation "
720 INPUT "What is the initial point variation? ",VI
730 INPUT "What is the final   point variation? ",VF
740 VAVER = (VI + VF)/2
750 CM = C1 + VAVER
760 CLS: PRINT: PRINT USING "The true course is ###.# degrees";C1
770 COC = COS(C)
780 IF COC = 0.# THEN GOTO 790 ELSE GOTO 820
790 FACTLONG1 = 60.#*LONGDIF*CONVER
800 DIST = ABS(COS(L(2,1))*FACTLONG1)
810 GOTO 850
820 DISTFACT = 60.#/COC
830 LATDIF = L(2,1) - L(1,1)
840 DIST = ABS(LATDIF*DISTFACT*CONVER)
850 PRINT USING "The distance is  #####.# nautical miles";DIST
860 IF A$ = "Y" OR A$ = "y" THEN GOTO 870 ELSE GOTO 900
870 COLOR 0,7,0
880 PRINT USING " The magnetic course is ###.# degrees ";CM
890 COLOR 7,0,0
900 PRINT: PRINT "Will you run again (Y/N)? "
910 A$ = INKEY$: IF A$ = "" THEN 910 ELSE IF A$ = "Y" OR A$ = "y" THEN 350
920 KEY ON: END
```

## SEC&BYTE.BAS

```bas
10 'SAVE "B:Sec&Byte.BAS"
20 REM Program to print table of sectors and bytes
30 REM David Reussow - 3/8/83
40 KEY OFF : CLS
50 Y$ =  "      ###  ###,###      ###  ###,###      ###  ###,###      ###  ###,###  "
60 LPRINT CHR$(27);CHR$(71);
70 PRINT "      Sec   Bytes       Sec   Bytes       Sec   Bytes       Sec   Bytes  " : PRINT
80 LPRINT "      Sec   Bytes       Sec   Bytes       Sec   Bytes       Sec   Bytes  " : LPRINT
90 FOR X = 1 TO 55
100 PRINT USING Y$;X,(X*512),X+55,((X+55)*512),X+110,((X+110)*512),X+165,((X+165)*512)
110 LPRINT USING Y$;X,(X*512),X+55,((X+55)*512),X+110,((X+110)*512),X+165,((X+165)*512)
120 NEXT X
130 LPRINT CHR$(27);CHR$(64);
```

## SPINOUT.BAS

```bas
10 REM ibm pc spinout
20 REM K.R. Sloan, Jr.
30 REM 1 January 1982
40 DIM BALL[14]
50 DIM PADDLE[9]
60 DIM BRICK[20,4]
65 RANDOMIZE(VAL(RIGHT$(TIME$,2)))
70 KEY OFF:PLAY "mb"
80 LOUD=0
90 BRUNO$="l16o2b-o3cl8ddc+16do2fp1"
110 T=8:B=188:L=8:R=308
120 BH=8:BW=(R-L)/20
130 BT=T+(BH*4):BB=BT+(BH*4)
135 CLS
140 LOCATE 7,12: PRINT "Welcome to Spinout";
150 LOCATE 8,12: PRINT "ArchMach Version 1";
160 LOCATE 12,1:PRINT "Choose a key to move the paddle right";
170 R$=INKEY$:IF R$="" GOTO 170
180 LOCATE 12,1:PRINT "Choose a key to move the paddle left ";
190 L$=INKEY$:IF L$="" GOTO 190
200 IF R$=L$ GOTO 160
210 LOCATE 12,1:PRINT "Choose a key to serve                ";
220 S$=INKEY$:IF S$="" GOTO 220
230 IF (R$=S$)OR(L$=S$) GOTO 160
240 LOCATE 12,1:PRINT "Choose a key to turn noise on/off   ";
250 N$=INKEY$:IF N$="" GOTO 250;
260 IF (R$=N$)OR(L$=N$)OR(S$=N$) GOTO 160
270 LOCATE 12,1:INPUT;"How good are you at this game (1-10)";SKILL
275 IF SKILL<1 GOTO 270
276 IF SKILL>10 GOTO 270
280 SKILL=SKILL/10
290 MAXVX=6+(4*SKILL):MAXVY=MAXVX
295 G=SKILL/5
296 DEF SEG=0:EQUIPMENT%=PEEK(&H410):POKE &H410,EQUIPMENT%-&H10
297 WIDTH 40:WIDTH 80:SCREEN 0,0,0:SCREEN 1:COLOR 1,0:CLS
300 LINE (0,0)-(319,199),0,BF
310 FOR BY=0 TO 3
320 FOR BX=0 TO 19
330 BRICK[1+BX,1+BY]=10+50*BY
340 LINE (L+2+(BW*BX),BT+2+(BH*BY))-STEP (BW-4,BH-4),2+INT(BY/2),BF
350 NEXT BX,BY
360 SCORE = 0
370 LINE (L,T)-(R,T)
380 LINE -(R,B)
390 LINE -(L,B)
400 LINE -(L,T)
410 X=160:Y=100
420 LASTD$=""
430 FOR I=1 TO 5
440 FOR J=1 TO 5
450 IF ((I-3)*(I-3))+((J-3)*(J-3))<6.25 THEN PSET (X-3+I,Y-3+J)
460 NEXT J,I
470 GET (X-2,Y-2)-(X+2,Y+2),BALL
480 PL=150:PR=170:PY=B-20
490 LINE (PL,PY)-(PR,PY),1,BF
500 GET(PL,PY)-(PR,PY),PADDLE
510 REM main loop
520 IF LOUD=1 THEN PLAY BRUNO$
530 FOR SHOT=1 TO 4
540 LOCATE 25,1
550 PRINT USING "#####";SCORE;
560 LOCATE 25,8
570 PRINT USING "Ball #  ";SHOT;
580 LOCATE 25,18
590 PRINT "K.R.Sloan,Jr.  1Jan82";
600 IF X>R THEN X=R
610 IF X<L THEN X=L
620 IF Y<T THEN Y=T
630 IF Y>B THEN Y=B
640 PUT(X-2,Y-2),BALL
650 X=L+RND(X)*(R-L)
660 Y=B-10
670 PUT(X-2,Y-2),BALL
680 VX=6*RND(1)-3
690 VY=-5-2*RND(1)
700 SPIN=0
710 FAST=1+SKILL
720 GOSUB 1410 `MOVE PADDLE
730 IF D$<>S$ GOTO 720
740 OX=X:OY=Y:OBX=BX:OBY=BY
750 OVX=VX:OVY=VY
760 VX=OVX-(SPIN*OVY*.05):VY=OVY+(SPIN*OVX*.05)+G
761 SPIN=SPIN*.9999
770 IF VX>MAXVX THEN VX=MAXVX
771 IF VY>MAXVY THEN VY=MAXVY
780 IF VX<-MAXVX THEN VX=-MAXVX
781 IF VY<-MAXVY THEN VY=-MAXVY
790 X=X+VX:Y=Y+VY
800 BX=INT((X-L)/BW)
810 IF BX>19 THEN BX=19
820 IF BX<0 THEN BX=0
830 BY=INT((Y-BT)/BH)
840 IF BY>3 GOTO 1050
850 IF BY<0 GOTO 1050
860 IF BRICK[1+BX,1+BY]<=0 GOTO 1050
870 IF BY>1 GOTO 890
880 VY=VY*FAST
890 IF (OBX<>BX)THEN VX=-VX
900 IF (OBY<>BY)THEN VY=-VY
910 SCORE=SCORE+BRICK[1+BX,1+BY]
920 SOUND 440,2*LOUD
930 PUT(OX-2,OY-2),BALL,XOR
940 LINE (L+2+(BW*BX),BT+2+(BH*BY))    -STEP (BW-4,BH-4),0,BF
950 PUT(OX-2,OY-2),BALL,XOR
960 BRICK[1+BX,1+BY]=-BRICK[1+BX,1+BY]
970 IF SCORE<6800 GOTO 1050
972 LOCATE 25,1
974 PRINT USING "#####";SCORE;
980 FOR FLASH=1 TO 8
990 COLOR FLASH,.5+RND(FLASH)
1000 PLAY "mfaemb"
1010 NEXT FLASH
1040 GOTO 1340
1050 IF X<=L THEN X=L+L-X:VX=-VX:VY=VY+SPIN:SOUND 600,2*LOUD
1060 IF X>=R THEN X=R+R-X:VX=-VX:VY=VY-SPIN:SOUND 1200,2*LOUD
1070 IF Y<=T THEN Y=T+T-Y:VY=-VY:VX=VX-SPIN:SOUND 880,2*LOUD
1080 IF Y>=B GOTO 1310
1090 IF (Y<PY)OR(OY>PY) THEN GOTO 1270
1100 IF ((PL-2)<X)AND(X<(PR+2)) GOTO 1130
1110 IF ((PL-2)<OX)AND(OX<(PR+2)) GOTO 1130
1120 GOTO 1270
1130 Y=PY+PY-Y
1140 SOUND 300,5*LOUD
1150 IF (RND(1)*2)>SKILL GOTO 1210
1160 BX=INT(RND(1)*19.99):BY=INT(RND(1)*3.99):
1170 IF BRICK[1+BX,1+BY]>0 GOTO 1210
1180 BRICK[1+BX,1+BY]=-BRICK[1+BX,1+BY]
1190 LINE (L+2+(BW*BX),BT+2+(BH*BY)) -STEP (BW-4,BH-4),2+INT(BY/2),BF
1200 SCORE=SCORE-BRICK[1+BX,1+BY]
1210 LOCATE 25,1
1220 PRINT SCORE;
1230 VY=-VY
1240 MISS=(X-(PL+PR)/2)/(PL-PR)
1250 VX=VX+VY*MISS*SKILL*5
1260 SPIN=(SPIN*SKILL)+MISS*SKILL
1270 PUT(X-2,Y-2),BALL,XOR
1280 PUT(OX-2,OY-2),BALL,XOR
1290 GOSUB 1410 'move paddle
1300 GOTO 740
1310 REM lost ball
1320 IF LOUD=1 THEN SOUND 200,20
1330 NEXT SHOT
1340 REM End of Game
1341 DEF SEG=0:POKE &H410,125:WIDTH 40:WIDTH 80:SCREEN 0,0,0
1350 LOCATE 12,20
1360 PRINT "Do you want to play another game?";
1370 D$=INKEY$
1380 IF D$="y" THEN RUN
1390 IF D$="n" THEN STOP
1400 GOTO 1370
1410 REM move paddle routine
1420 OPL=PL
1430 D$=INKEY$
1440 IF D$=N$ THEN LOUD=-1*LOUD+1
1450 IF D$=L$ THEN PL=PL-5:GOTO 1430
1460 IF D$=R$ THEN PL=PL+5:GOTO 1430
1470 IF PL<L THEN PL=L
1480 IF PL>(R-20) THEN PL=R-20
1490 IF OPL=PL THEN RETURN
1500 PR=PL+20
1510 PUT (OPL,PY),PADDLE,XOR
1520 PUT(PL,PY),PADDLE,XOR
1530 RETURN
```

## XREFMOD.BAS

```bas
1 '     XREFMOD.BAS modified from XREF.BAS and PRINTER.BAS from BALTIMORE
2 '
3 '     PC VOL. 1.45 from the PC^3 Software Library by
4 '
5 '     Michael Csontos, 3228 Livonia Center Road, Lima, New York 14485
6 '
7 '     August 18, 1982
8 '
9 '
10 LPRINT CHR$(27) "@";
20 LPRINT CHR$(27);"C";CHR$(0);CHR$(11);      'ESC,FORM LENGTH,11 INCHES
30 LPRINT CHR$(15);CHR$(27);CHR$(65);CHR$(9);'COMPRESSED,ESC,LINE FEED,9/72 IN.
50 PRINT "Disk A":FILES "a:*.*":PRINT:PRINT "Disk B":FILES "b:*.*"
60 WIDTH "lpt1:",255
180 PRINT :PRINT "XREF Lists all variables & referenced line #'s as well as the program."
200 PRINT "Initializing_______ ENTER Filename BY   filespec  OR   b:filespec"
220 PRINT "Operate ENTER when last program to be XREF has been entered"
250 DEFINT I-J:LW = 130
260 ON ERROR GOTO 1700
270 DIM RW$(149),PT%(25),F$(20)
280 I = 400: DIM VNXT%(I + 90),V$(I + 90),FRST%(I),LST%(I),RFL%(5 * I),NXT%(5 * I)
320 DATA ABS,AND,ASC,AS,ATN,AUTO,BEEP,CDBL,CHAIN,CHR$,CINT,CIRCLE,CLEAR,CLOSE,CLS,COLOR,COMMON,CONT
330 DATA COS,CSNC,CSRLIN,CVD,CVI,CVS,DATA,DATE$,DEF
340 DATA DEFDBL,DEFINT,DEFSNG,DEFSTR,DELETE,DIM,DRAW
350 DATA EDIT,ELSE,END,EOF,EQV,ERASE,ERL,ERROR,EXP,FIELD,FILES,FIX,FN,FOR
360 DATA FRE,GET,GOSUB,GOTO,HEX$
370 DATA IF,IMP,INKEY$,INPUT,INSTR,INT,KEY,KILL,LEFT$,LEN,LET,LINE
380 DATA LIST,LLIST,LOAD,LOCATE,LOF,LOG,LPOS,LPRINT,LSET,MERGE,MID$,MKD$,MKI$
390 DATA MKS$,MOD,MOTOR,NAME,NEW,NEXT,NOT,OCT$,OFF,ON,OPEN,OPTION,OR,OUT
400 DATA PAINT,PEEK,PEN,PLAY,POINT,POKE,POS,PRESET,PRINT,PSET,PUT
410 DATA RANDOMIZE,READ,REM,RENUM,RESET,RESTORE,RESUME,RETURN,RIGHT$,RND,RSET,RUN
420 DATA SAVE,SCREEN,SGN,SIN,SOUND,SPACE$,SPC(,SQR,STEP,STICK,STOP,STR$,STRIG,STRING$,SWAP,SYSTEM
430 DATA TAB(,TAN,THEN,TIME$,TO,TROFF,TRON
440 DATA USING,USR,VAL,VARPTR,WAIT,WEND,WHILE,WIDTH,WRITE,XOR,"\"
480 RW = 0
490 READ RW$
500 RW = RW + 1: RW$(RW) = RW$: IF RW$ = "\" THEN 550
510 I = ASC(RW$) - ASC("A"): IF PT%(I) = 0 THEN PT%(I) = RW
530 GOTO 490
550 FOR I = 0 TO 25: IF PT%(I) = 0 THEN PT%(I) = RW
560 NEXT
600 FX = 0
610 PRINT :PRINT " ASCII saved program # " FX + 1 " = ";:LINE INPUT L$
612 FOR X=1 TO LEN(L$)' ------- UPPERFY from PRINTER.BAS -----------
614 XC$=MID$(L$,X,1)
616 IF "a" <= XC$ AND XC$ <= "z" THEN MID$(L$,X,1) =CHR$(ASC(XC$)-32)
618 NEXT X'     --------------------------------------------
620 IF L$ = "" THEN IF FX < 1 THEN 780 ELSE 680
630 IF INSTR(L$,".") = 0 THEN L$ = L$ + ".bas"
640 NAME L$ AS L$
650 FX = FX + 1: F$(FX) = L$
660 GOTO 610
680 D$ = DATE$:T$ = TIME$
690 PRINT : INPUT"1) cross reference   2) list   3)both ";M
695 PRINT "Current line being parsed"
730 FOR F = 1 TO FX
740 CLOSE: OPEN"I",1,F$(F):PRG$ = CHR$(34)+F$(F)+CHR$(34)+" - Printed on "+ D$+" at "+T$: GOSUB 820
745 LPRINT CHR$(12)      'form feed      LPRINT STRING$(65 - LZ,CHR$(10))
750 NEXT
780 END
820 LC = 0: BC = 0: PZ = 0: V$ = "": C$ = "": VC = 91: RC = -1:PAGE.LEN = 80
830 FOR I = 0 TO 91: VNXT%(I) = -1: NEXT I
840 IF M > 1 THEN GOSUB 1760
880 IF EOF(1) THEN 1420
890 LINE INPUT#1,L$: IF M > 1 THEN GOSUB 1650: IF M = 2 THEN 880
900 LG = LEN(L$): BRNCH = 0: ER$ = "": LC = LC + 1: BC = BC + LG
910 LP = INSTR(L$," "): LN = VAL(LEFT$(L$,LP)): PRINT LN;
920 IF LN > 32767 THEN LN = LN - 65536.
960 LP = LP + 1: IF LP > LG THEN GOSUB 1220: GOTO 880
970 C$ = MID$(L$,LP,1)
980 IF C$ >= "A" AND C$ <= "Z" THEN 1100 ELSE IF C$ >= "0" AND C$ <= "9" THEN 1360
990 IF C$ = " " THEN GOSUB 1220: GOTO 960 ELSE IF C$ <> ", " THEN BRNCH = 0
1000 IF C$ = CHR$(34) THEN GOSUB 1220: LP = INSTR(LP + 1,L$,C$): IF LP > 0 THEN 960 ELSE 880
1010 IF C$ = "'" THEN GOSUB 1220: GOTO 880
1020 IF C$ = "&" THEN GOSUB 1220: V$ = C$: GOTO 960
1030 IF C$ = "$" OR C$ = "!" OR C$ = "%" OR C$ = "#" THEN GOSUB 1340: GOTO 960
1040 IF C$ = "(" THEN GOSUB 1340
1050 GOSUB 1220: IF C$ <> ", " THEN ER$ = ""
1060 GOTO 960
1100 IF V$ > "" THEN 1370 ELSE C = ASC(C$): P = PT%(C - ASC("A")): BRNCH = 0
1110 IF C < ASC(RW$(P)) THEN 1370
1120 IF INSTR(LP,L$,RW$(P)) <> LP THEN P = P + 1: GOTO 1110
1130 GOSUB 1220: RW$ = RW$(P)
1140 IF RW$ = "DATA" THEN LP = INSTR(LP,L$,": "): IF LP > 0 THEN 960 ELSE 880
1150 IF RW$ = "REM" THEN 880
1160 IF RW$ = "GOTO" OR RW$ = "GOSUB" OR RW$ = "THEN" OR RW$ = "ELSE" OR RW$ = "RESUME" THEN BRNCH = 1
1170 IF RW$ = "ERASE" THEN ER$ = "(" ELSE ER$ = ""
1180 LP = LP + LEN(RW$) - 1: GOTO 960
1220 IF V$ = "" THEN RETURN
1230 IF V$ >= "A" THEN V$ = V$ + ER$: C = ASC(V$) + 1 ELSE IF V$ >= "0" THEN V$ = RIGHT$("    " + V$,5): C = VAL(LEFT$(V$,2)) ELSE 1300
1240 IL = -1: I = C
1250 IF V$ > V$(I) THEN IL = I: I = VNXT%(I): IF I > 0 THEN 1250 ELSE 1270
1260 IF V$ = V$(I) THEN J = LST%(I-91): IF RFL%(J) = LN THEN 1300 ELSE RC = RC + 1: NXT%(J) = RC: GOTO 1290
1270 VC = VC + 1: IF IL >= 0 THEN VNXT%(IL) = VC
1280 V$(VC) = V$: VNXT%(VC) = I: RC = RC + 1: FRST%(VC - 91) = RC: I = VC
1290 RFL%(RC) = LN: NXT%(RC) = -1: LST%(I - 91) = RC
1300 V$ = "": RETURN
1340 IF V$ <> "" THEN V$ = V$ + C$
1350 RETURN
1360 IF V$ = "" AND BRNCH = 0 THEN 960
1370 V$ = V$ + C$: GOTO 960
1420 IF M = 2 THEN RETURN
1422 IF M=1 THEN PZ=0
1424 SINGPG=0:IF M=3 THEN LPRINT:LPRINT:LZ=LZ+2:SINGPG=1
1430 GOSUB 1790           'print page no and header
1440 FOR J = 0 TO 91: V = J
1450 V = VNXT%(V): IF V < 0 THEN 1560
1460 IF LZ > PAGE.LEN THEN GOSUB 1620 ELSE SZ = SZ + 1: IF SZ = 3 THEN GOSUB 1630
1470 RZ = 0: I = FRST%(V - 91): LPRINT V$(V);
1480 IF RZ = 0 THEN LPRINT TAB(16);
1490 LN = RFL%(I): IF LN < 0 THEN LN = LN + 65536.
1500 LPRINT USING "    #####";LN;
1510 RZ = RZ + 1
1520 IF RZ > 12 THEN RZ = 0: LPRINT: LZ = LZ + 1: IF LZ > PAGE.LEN THEN GOSUB 1620
1530 I = NXT%(I): IF I > 0 THEN 1480
1540 IF RZ > 0 THEN LPRINT: LZ = LZ + 1
1550 GOTO 1450
1560 NEXT J
1580 LPRINT STRING$(130, "=")
1590 LPRINT "lines: ";LC;"    bytes: ";BC;"     symbols: ";VC - 91; "references: ";RC + 1
1600 LZ = LZ + 2: RETURN
1620 GOSUB 1750: LPRINT "symbol/line no. ";TAB(20);"reference line":LPRINT STRING$(130,"-"):LZ = LZ + 1
1630 LPRINT :LZ = LZ + 1: SZ = 0: RETURN
1650 X = 1
1660 IF LZ > PAGE.LEN OR RIGHT$(L$,3) = "'PG" THEN GOSUB 1750
1670 Y = INSTR(X,L$,CHR$(10)): IF Y > 0 THEN LPRINT MID$(L$,X,Y - X): LZ = LZ + 1: X = Y + 1: GOTO 1670
1680 LPRINT MID$(L$,X,LW):LZ = LZ + 1: X = X + LW: IF X < LEN(L$) THEN 1680 ELSE RETURN
1700 IF ERR = 53 THEN PRINT:PRINT "file not found": RESUME 610
1710 IF ERR = 58 THEN RESUME 650
1720 IF ERR = 24 THEN RESUME          ' device timeout occurred, continue
1730 ON ERROR GOTO 0
1750 LPRINT CHR$(12)       'form feed     LPRINT STRING$(65 - LZ,CHR$(10))
1760 IF SINGPG=1 THEN LPRINT :SINGPG=0:RETURN ELSE PZ = PZ + 1
1770 LPRINT  CHR$(14) PRG$  "     PAGE" PZ: LPRINT
1780 LZ = 3 : RETURN
1790 GOSUB 1760: LPRINT "symbol/line no. ";TAB(20);"reference line":LZ = LZ + 1
1800 LPRINT STRING$(130,"-"):LZ = LZ + 1: SZ = 0: RETURN
2000 '  SAVE"a:xrefmod.sys",a
```

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk 0049

     Volume in drive A has no label
     Directory of A:\

    CLOCK    BAS      2944   2-17-82
    BIGTYPE1 BAS      1152   2-17-82
    JOYSTICK BAS       640   5-05-82
    PRINTER2 BAS      4736   8-24-82   6:32p
    EMBEDDED BAS      1024   5-05-82
    FINISH   BAS     16512   7-02-82   4:17p
    FINISHTX BAS     24064   6-24-82  11:42p
    DAYLOG   BAS     19584   8-21-82
    HEARING  BAS      1280
    RHMLINE  BAS      3712
    GREATCIR BAS      2304
    GREATRHM BAS      4608
    CHARDISP BAS      2944   7-20-82
    SPINOUT  BAS      4864   7-06-82
    CUBE     BAS     12544   7-06-82
    LOAN3    BAS      7680   2-02-83   6:48p
    ADDRFLCD BAS      3200   7-30-82
    PCHALLEN BAS      1536   7-07-82
    XREFMOD  BAS      5888   8-18-82
    NCCLSPRE BAS      1920   2-02-83   6:24p
    SEC&BYTE BAS       640   3-08-83   9:14a
    PRINTSET            28  11-10-82  12:27p
    PRINTSET DOC       769   1-19-83   5:25p
    CALEPSON BAS       640   2-13-83  11:14p
    CALEPSON DOC      1942   2-24-83  12:09p
    JOYSTEST BAS      1536   3-08-83   8:10a
    CRC      TXT      1780  11-09-84  10:09a
    CRCK4    COM      1536  10-21-82   7:54p
           28 file(s)     132007 bytes
                           22016 bytes free
