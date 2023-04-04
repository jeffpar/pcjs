---
layout: page
title: "PC-SIG Library Disk #6"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0006/
machines:
  - id: ibm5150
    type: pcx86
    config: /machines/pcx86/ibm/5150/cga/256kb/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk 0006"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5150" %}

{% comment %}info_begin{% endcomment %}

## Information about "RAMDISK"

    This disk has many DOS utilities, printer utilities, and more.  The
    FREE programs provide an electronic disk drive, and a "soft" reset that
    will not lose the contents of your machine's memory.  Some of these
    programs, however, are only useful with versions 1.x of DOS.
    
    System Requirements: 256K, some programs require 2 floppy drives;
    Some programs usable under DOS 1.x ONLY; some require color.
    
    How to Start: To run an EXE program, simply type its filename and
    press <ENTER>.  For instructions on running a BASIC program, please
    refer to the GETTING STARTED section in this catalog.  To read DOC
    files simply enter TYPE filename.ext and press <ENTER>.
    
    Suggested Registration:  FREE1 $15.00; FREE3 $10.00
    
    File Descriptions:
    
    ACRS     BAS  Accelerated Cost Recovery System, Creative Computing 2/83
    PROFILER BAS  Demos use of PROFILE.MEM
    GRAFHAT  BAS  Draws "industry standard" graphic pattern in high res mode
    GUIDE1   REF  Reference Guides - DOS, BASIC & Volkswriter function keys
    ZELLER   BAS  Determines day of week using Zeller's congruence
    GDUMP    EXE  Compiled - stand alone version of GDUMP.BAS
    FREE3    DOC  Documentation for FREE3
    COLOR80  COM  DOS switch to colorgraphics 80 col text mode
    FREE1    DOC  Documentation for FREE1
    FREE1    EXE  Electronic disk generates 160KB RAM drive (Requires 256K)
    CHARS    EXE  Compiled - stand alone version of CHARS.BAS
    CNTRLBK  BAS  Demos CtrlBreak disable & embedded protect/unprotect
    COLOR40  COM  DOS switch to colorgraphics 40 col text mode
    FREE1    BIN  Part of electronic disk
    STARLANE BAS  2-4 players invest in interstellar trading & shipping
    CHARS    BAS  Full character set display  (Requires monochrome card)
    MONO     COM  DOS switch to monochrome 80 col text mode
    FREE3    COM  NEW RESET - Softer resets save RAM drive data
    GRAFHAT  EXE  Somewhat faster compiled version of above
    DCBA     HOW  Patch to DISKCOPY for production copying
    GDUMP    BAS  Med. resolution graphics to C.Itoh 8510/NEC 8023 printers
    KB_FLAG  BAS  Software control of keyboard modes   [TUTORIAL]
    PRTSET   BAS  Printer setup program for C.ITOH/NEC printers
    PROFILE  BAS  Generates PROFILE.MEM.  See PC MAGAZINE, October, 1982
    CHECKOUT BAS  Checkout various ports, devices - strong on modems
    STICK    BAS  Displays joystick/paddle gameport values
    NUM-WORD BAS  Routine converts numeric value to literal expression
    GUIDE2   REF  Reference Guide - C.Itoh/NEC command codes
    COLORG   COM  DOS switch to colorgraphics med. resolution graphics mode
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## ACRS.BAS

```bas
10 REM -- ACRS PROGRAM
20 REM -- BY L. AND S. BROUDY
25 REM -- SEPT. 1982
27 REM -- from: Creative Computing, Feb. 1983 pg 183
30 N=1
40 CLS:KEY OFF:COLOR 0,7:LOCATE 3,8:PRINT"DEPRECIATION (ACRS) PROGRAM":            COLOR 7,0:PRINT
50 INPUT "WOULD YOU LIKE TO READ DATA FROM DISK    (Y/N)";ANS$
60 IF ANS$="Y" OR ANS$="y" THEN 710
70 IF ANS$="N" OR ANS$="n" THEN S=1
80 REM -- INSERTING NEW INFORMATION
90 INPUT "PLEASE TYPE IN YOUR NAME, AND YOUR SOCIAL SECURITY NUMBER (NAME,SS#)";   NM$,SS$
100 INPUT "ITEM";IT$(N)
110 PRINT "IS THE RECOVERY PERIOD FOR ";IT$(N);" 3 YRS, 5 YRS, OR 10 YRS";:         INPUT C(N)
115 IF C(N)=3 OR C(N)=5 OR C(N)=10 THEN GOTO 120 ELSE 110
120 INPUT "UNADJUSTED BASIS";BP(N)
130 INPUT "DATE PLACED IN SERVICE";S$(N)
140 INPUT "% USED FOR BUSINESS";B(N)
150 INPUT "DEPRECIATION YEAR (1,2,ETC.)";Y
160 IF C(N)=3 THEN GOSUB 410
170 IF C(N)=5 THEN GOSUB 470
180 IF C(N)=10 THEN GOSUB 530
190 INPUT "WOULD YOU LIKE A PRINTOUT";ANS$
195 IF ANS$="Y" OR ANS$="y" THEN GOSUB 850
200 REM -- SCREEN DISPLAY
210 CLS: PRINT C(N)"- YEAR ACRS"
220 PRINT "COST RECOVERY FOR  ";IT$(N)
230 PRINT "UNADJUSTED BASIS: ";:PRINT USING "$$#####.## ";BP(N)
240 PRINT:PRINT "DATE PLACED IN SERVICE: ";S$(N):PRINT "DEPRECIATION YEAR:";Y
250 PRINT:PRINT "RATE OF ACRS DEPRECIATION: ";100*R;"%"
260 DEP=BP(N)*R
270 PRINT:PRINT "FULL ACRS DEPRECIATION AMT, =";:PRINT USING "$$#####.##";DEP
280 PRINT "PERCENT OF USE FOR BUSINESS:";B(N);"%":B=0.01*B(N)
290 TD=B*DEP
300 PRINT:PRINT "ACRS DEPRECIATION DEDUCTION = ";:PRINT USING "$$#####.##";TD
310 INPUT "DO YOU WANT ANOTHER DEPRECIATION YEAR   (Y/N)";A$
320 IF A$="Y" OR A$="y" THEN GOTO 150
330 IF A$="N" AND S=1 OR A$="n" AND S=1 THEN 370
340 INPUT "DO YOU WANT TO REVIEW ANOTHER ITEM FROM THE DISK  (Y/N)";A$
350 IF A$="Y" OR A$="y" THEN 780
360 IF A$="N" OR A$="n" THEN N=M ELSE 340
370 INPUT "DO YOU WANT TO ENTER ANOTHER ITEM (Y/N)";AN$
380 IF AN$="Y" OR AN$="y" THEN N=N+1:S=1:GOTO 100
390 INPUT "DO YOU WANT TO SAVE YOUR DATA (Y/N)";A$
400 IF A$="Y" OR A$="y" THEN 610 ELSE END
410 REM -- 3 YEAR ACRS
420 IF Y=1 THEN R=0.25
430 IF Y=2 THEN R=0.38
440 IF Y=3 THEN R=0.37
450 IF Y>3 THEN GOTO 150
460 RETURN
470 REM -- 5 YEAR ACRS
480 IF Y=1 THEN R=0.15
490 IF Y=2 THEN R=0.22
500 IF Y>2 AND Y<6 THEN R=0.21
510 IF Y>5 THEN GOTO 150
520 RETURN
530 REM -- 10 YEAR ACRS
540 IF Y=1 THEN R=0.08
550 IF Y=2 THEN R=0.14
560 IF Y=3 THEN R=0.12
570 IF Y>3 AND Y<7 THEN R=0.1
580 IF Y>6 AND Y<11 THEN R=0.09
590 IF Y>10 THEN GOTO 150
600 RETURN
610 REM --DISK ACCESS
620 M=N
630 INPUT "WHAT WOULD YOU LIKE YOUR NAME TO FILE";F$
640 OPEN F$+".TAX" FOR OUTPUT AS #1
650 WRITE #1,M,NM$,SS$
660 FOR I=1 TO M
670 WRITE #1,IT$(I),BP(I),S$(I),B(I),C(I)
680 NEXT I
690 CLOSE #1
700 END
710 INPUT "WHAT FILE WOULD YOU LIKE TO READ";F$
720 OPEN F$+".TAX" FOR INPUT AS #1
730 INPUT #1,M,NM$,SS$
740 FOR I=1 TO M
750 750 INPUT #1,IT$(I),BP(I),S$(I),B(I),C(I)
760 NEXT I
770 CLOSE #1
780 CLS:PRINT"ITEMS IN THE FILE ARE "
790 FOR I=1 TO M
800 PRINT I,IT$(I)
810 NEXT I
820 INPUT "WHICH ITEM WOULD YOU LIKE TO REVIEW (ENTER ITEM # OR 0 FOR NEW ITEM)";I
830 PRINT IT$(I): N=I: IF I=0 THEN N=M: GOTO 370
835 IF I<=M THEN GOTO 150
840 PRINT "THE ITEM YOU CHOSE ISN'T IN THE FILE":FOR K=1 TO 1500:NEXT: GOTO 780
850 REM -- PRINTER SUBROUTINE
860 LPRINT C(N) "-YEAR DEPRECIATION (ACRS) WORKSHEET"
870 LPRINT NM$;"..................SS# ";SS$
880 LPRINT
890 LPRINT "COST RECOVERY FOR  ";IT$(N)
900 LPRINT
910 LPRINT "UNADJUSTED BASIS: ";:LPRINT USING "$$#####.## ";BP(N)
920 LPRINT "DATE PLACED IN SERVICE: ";S$(N):LPRINT"DEPRECIATION YEAR: ";Y
930 LPRINT "RATE OF ACRS DEPRECIATION: ";100*R;"%"
940 DEP=BP(N)*R
950 LPRINT:LPRINT "FULL ACRS DEPRECIATION AMT. =";:LPRINT USING "$$#####.##";DEP
960 LPRINT "PERCENT OF USE FOR BUSINESS: ";B(N);"%": B=0.01*B(N)
970 TD=B*DEP
980 LPRINT:LPRINT "ACRS DEPRECIATION DEDUCTION = ";:LPRINT USING "$$#####.##";TD
985 LPRINT
990 GOTO 310
```

## CHARS.BAS

```bas
10 REM IBM PC  -----CHARS------
20 VERSION$= "V1.02"   ' 8/14/1982 rev 11/14/82
21 ' Will compile w/o the /V parm.  Disregard the 4 severe errors.
30 REM Author: Herb Shear, 1590 Vineyard Dr., Los Altos, CA 94022
40 GOSUB 720  'initialize
199 '
200 REM  --------start of scroll loop -------
210 IN$=INKEY$:IF IN$ = "" THEN 210
215 WHILE INKEY$<>"":WEND    'kill overshoot
230 K = ASC(IN$)
232 POKE I*10 + 647, &H7   'dim old char
235 REM  --- process cursor keys ---
240 IF LEN(IN$) = 2 THEN K = ASC(MID$(IN$,2,1)) ELSE I = K : GOTO 325
250 IF K = 77 THEN I = I + 1 : GOTO 320
260 IF K = 75 THEN I = I - 1 : GOTO 320
270 IF K = 80 THEN I = I + 16 : GOTO 320
280 IF K = 72 THEN I = I - 16 : GOTO 320
290 IF K = 71 OR K = 3 THEN I = 0 : GOTO 320  'home & CTR 2 = null
295 IF K = 68 THEN 470
300 GOTO 200    'invalid key
320 I = (I + 256) MOD 256  'fix wraps
322 '
325 REM --- end cursor key process ---
360 POKE I*10 + 647, &HF   'highlight char in table
365 POKE &HDEC,I:POKE &HDF0,I  'display char  & print data
410 LOCATE 23,30,0 : COLOR 15: PRINT HEX$(I);TAB(38);I;TAB(49);OCT$(I)," ";
420 FOR J = 7 TO 0 STEP -1 : PRINT USING "#";I\2^J MOD 2;:NEXT : COLOR 7
421 '
422 REM --- state invisible chars ---
423 RA$=CHR$(26) 'right arrow
424 IF I = 0 THEN A$ =" null"+RA$  ELSE  A$ = "      "
425 IF I = 255 THEN A$ = "blank" +RA$
426 IF I = 32 THEN A$ ="space"+RA$
430 LOCATE 23,16: PRINT A$;
435 '
440 REM --- put cursor on table char ---
448 ROW = I\16 + 5
449 COL = (I MOD 16 + 1) * 5 - 1
450 LOCATE ROW,COL,1,13,0
460 GOTO 200
470 COLOR 7,0: LOCATE ,,,12,13: CLS: END
475 '
720 REM ------initialization -----------------
740 DEFINT A-Z
741 DEF SEG = &H40
743 POKE &H17, PEEK(&H17) AND &HDF 'insure cursor keys
750 DEF SEG = &HB000  ' mono mem
760 KEY OFF:COLOR 7,0:WIDTH 80:CLS
765 FOR I=1 TO 9:ON KEY(I) GOSUB 0 : KEY(I) ON: NEXT
770 ON KEY(10) GOSUB 470 : KEY(10) ON
780 PRINT VERSION$; TAB(25);"HEX TABLE - COMPLETE CHARACTER SET";TAB(71);
785 PRINT TAB(71);"Herb Shear"
790 COLOR 0,7 : LOCATE 3,1
1100 FOR I = 0 TO &HF: PRINT  "   "+HEX$(I)+" ";:NEXT
1110 FOR I = 0 TO &HF:LOCATE I+5,1:PRINT HEX$(I);:NEXT
1120 FOR I = 0 TO 255
1130 POKE I*10 + 646, I
1140 NEXT I
1150 COLOR 7,0 : LOCATE 22,22
1160 PRINT "CHAR    HEX      DEC       OCT      BINARY";
1170 LOCATE 25,1
1180 PRINT "Cursor Home "+CHR$(27)+CHR$(45)+CHR$(24)+CHR$(25)+CHR$(45)+CHR$(26)+", Alt+keypad or any key selects character.         F10 exits";
1185 POKE &HDED,&HF    'setup bright spot
1188 POKE &HDF1,&H70   'setup inverse video spot
1190 LOCATE 5,4,0,13,0
1200 RETURN
```

## CHECKOUT.BAS

```bas
1000 '"CHECKOUT" Test output ports, peripherals and handshake
1010 REV$="821210"'Robert Hamilton  (415) 493-2664                             »
1020 MODEM$="COM1:300,N,8,1,CS300,DS300,CD0":NUMBER$="7678900":NUM=1
1030 SERIAL$=",N,8,1,RS":BAUD$="300":CL$=STRING$(79,0):COL$="40"
1040 A$="ABCDEFGHI.JKLMNOPQR.STUVWXYZ0.123456789."
1050 B$="abcdefghi.jklmnopqr.stuvwxyz!.@#$%^&*()."
1060      REM: »» KEYS
1070 KEY OFF
1080 FOR I=1 TO 10:ON KEY(I) GOSUB 0:KEY(I) ON:NEXT
1130 KEY 1,CHR$(27)+"CLS:LIST  "
1140 KEY 2,CHR$(27)+"RUN "+CHR$(7):KEY 3,CHR$(27)+"LOAD"+CHR$(7)+CHR$(34)
1150 KEY 4,CHR$(27)+"SAVE"+CHR$(34):KEY 5,CHR$(27)+"RUN"+CHR$(7)+CHR$(34):KEY 6,CHR$(27)+" GOTO 1000"
1160 KEY 7,CHR$(27)+CHR$(12)+"FILES "+CHR$(34)+"A:*.*":KEY 8,CHR$(27)+"RENUM 1000"
1170 KEY 9,CHR$(12)+"COLOR 7,0:CLS"+CHR$(13):KEY 10,CHR$(27)+"RUN"+CHR$(34)+"AUTOST"+CHR$(7)
1180      REM: »» TITLE
1190 CLS:LOCATE 3,25:PRINT CHR$(213)+STRING$(31,205)+CHR$(184)
1200 PRINT TAB(25);CHR$(179)+STRING$(31,32)+CHR$(179)
1210 PRINT TAB(25);CHR$(179)+"        C H E C K O U T        ";CHR$(179)
1220 PRINT TAB(25);CHR$(179)+STRING$(31,32)+CHR$(179)
1230 PRINT TAB(25);CHR$(179)+"        Version: ";REV$;"        ";CHR$(179)
1240 PRINT TAB(25);CHR$(179)+STRING$(31,32)+CHR$(179)
1250 PRINT TAB(25);CHR$(212)+STRING$(31,205)+CHR$(190)
1260 PRINT CHR$(10);TAB(32);"By Hamilton Company"
1270 PRINT TAB(32);"Tel  (415) 493-2664"
1280 LOCATE 20,1:PRINT"NOTE: Requires DOS Rev 1.10 & Basica";
1290      REM: »» START program
1300 LOCATE 24,1:COLOR 0,7:PRINT" SPACE ";:COLOR 7,0:PRINT" To Test Ports  ";
1310 COLOR 0,7:PRINT" Q ";:COLOR 7,0:PRINT" Quit Program";
1320 K$=INKEY$:IF MID$(K$,1,1)="Q" OR MID$(K$,1,1)="q" THEN 1630
1330 IF K$="" THEN 1320
1340      REM: »» MENU
1350 CLS:LOCATE 3,30:PRINT"T E S T   M E N U"
1360 LOCATE 5,25:PRINT"Key  Description":LOCATE 6,25:PRINT "===  ";STRING$(35,61)
1370 LOCATE 8,25:PRINT" 1   Parallel Port  LPT1:"
1380 LOCATE ,25:PRINT" 2   Parallel Port  LPT2:"
1390 LOCATE ,25:PRINT" 3   Parallel Port  LPT3:"
1400 LOCATE ,25:PRINT" A   Serial Port    COM1:"
1410 LOCATE ,25:PRINT" B   Serial Port    COM2:"
1420 LOCATE ,25:PRINT" C   CRT Display    SCRN:";CHR$(10)
1430 LOCATE ,25:PRINT" D   Dial Smart Modem        (COM1:Time Check)"
1440 LOCATE ,25:PRINT" I   Impulse Dial Modem      (COM1:Time Check)"
1450 LOCATE ,25:PRINT" M   Change Printed Message  (Times: ";MID$(STR$(NUM),2);")";" (Col: ";COL$;")"
1460 LOCATE ,25:PRINT" R   Change Baud Rate       ";" (";BAUD$;")"
1470 LOCATE ,25:PRINT" S   Change Serial Handshake ";"(";SERIAL$;")"
1480 LOCATE ,25:PRINT" Q   Quit Program"
1490 LOCATE 24,1:COLOR 0,7:PRINT" KEY ";:COLOR 7,0:PRINT" Select Test";
1500 K$=INKEY$:IF MID$(K$,1,1)="1" THEN P$="LPT1:":GOTO 2130
1510 IF MID$(K$,1,1)="2" THEN P$="LPT2:":GOTO 2130
1520 IF MID$(K$,1,1)="3" THEN P$="LPT3:":GOTO 2130
1530 IF MID$(K$,1,1)="A" OR MID$(K$,1,1)="a" THEN S$="COM1:":GOTO 2180
1540 IF MID$(K$,1,1)="B" OR MID$(K$,1,1)="b" THEN S$="COM2:":GOTO 2180
1550 IF MID$(K$,1,1)="C" OR MID$(K$,1,1)="c" THEN 2240
1560 IF MID$(K$,1,1)="D" OR MID$(K$,1,1)="d" THEN X$="T":GOTO 2340
1570 IF MID$(K$,1,1)="I" OR MID$(K$,1,1)="i" THEN X$="P":GOTO 2340
1580 IF MID$(K$,1,1)="M" OR MID$(K$,1,1)="m" THEN 1640
1590 IF MID$(K$,1,1)="R" OR MID$(K$,1,1)="r" THEN 1860
1600 IF MID$(K$,1,1)="S" OR MID$(K$,1,1)="s" THEN 1750
1610 IF MID$(K$,1,1)="Q" OR MID$(K$,1,1)="q" THEN 1630
1620 GOTO 1500
1630 CLS:LOCATE 23,1:PRINT"DONE";CHR$(10):KEY ON:SOUND 500,5:END
1640      REM: »» MESSAGE
1650 CLS:LOCATE 23,1:PRINT"REPEAT OUTPUT MESSAGE: (1 to 999 Times)";
1660 LOCATE 24,1:COLOR 0,7:PRINT" ENTER ";:COLOR 7,0:PRINT" 1 Time  ";
1670 COLOR 0,7:PRINT" NUMBER ";:COLOR 7,0:PRINT" Number of Times ";
1680 INPUT"",NUM2:IF NUM2=0 THEN NUM=1 ELSE NUM=NUM2
1690 IF NUM<1 OR NUM>999 THEN BEEP:GOTO 1650
1700 CLS:LOCATE 24,1:COLOR 0,7:PRINT" ENTER ";:COLOR 7,0:PRINT" 40 Column Message  ";
1710 COLOR 0,7:PRINT" 8 ";:COLOR 7,0:PRINT" 80 Column Message";
1720 K$=INKEY$:IF MID$(K$,1,1)="8" THEN C$=A$:D$=B$:COL$="80":GOTO 1350
1730 IF K$="" THEN 1720
1740 C$="":D$="":COL$="40":GOTO 1350
1750      REM: »» HANDSHAKE
1760 CLS:LOCATE 10,1:PRINT"SERIAL HANDSHAKE OPTIONS:"
1770 LOCATE 12,1:PRINT"EXAMPLE: ,N,8,1,CS1000,DS1000";CHR$(10)
1780 PRINT"This is for No parity, 8 data bits, 1 stop bit, Clear to Send with"
1790 PRINT"a 1 second timeout, Data Set ready with 1 second timeout"
1800 LOCATE 18,1:PRINT"Refer to OPEN COM Statement in Basic Manual Rev 1.10 for more detail"
1810 LOCATE 22,1:PRINT "CURRENT HANDSHAKE OPTIONS: ";SERIAL$
1820 PRINT "ENTER Desired Options:":PRINT"NOTE: ENTER for no change";:LOCATE 23,28
1830 LINE INPUT;"",SRL$:IF SRL$<>"" THEN SERIAL$=SRL$
1840 GOTO 1350
1850      REM: »» BAUD
1860 CLS:LOCATE 10,33:PRINT"B A U D   M E N U":LOCATE 11,29:PRINT STRING$(25,61)
1870 LOCATE 13,28:PRINT" 1   BAUD RATE = 75"
1880 LOCATE ,28:PRINT" 2   BAUD RATE = 110"
1890 LOCATE ,28:PRINT" 3   BAUD RATE = 150"
1900 LOCATE ,28:PRINT" 4   BAUD RATE = 300"
1910 LOCATE ,28:PRINT" 5   BAUD RATE = 600"
1920 LOCATE ,28:PRINT" 6   BAUD RATE = 1200"
1930 LOCATE ,28:PRINT" 7   BAUD RATE = 2400"
1940 LOCATE ,28:PRINT" 8   BAUD RATE = 4800"
1950 LOCATE ,28:PRINT" 9   BAUD RATE = 9600"
1970 LOCATE 24,1:COLOR 0,7:PRINT" SPACE  ";:COLOR 7,0:PRINT" Menu   ";
1971 COLOR 0,7:PRINT" SELECT BAUD RATE ";:COLOR 7,0
1980 K$=INKEY$
1990 IF MID$(K$,1,1)="1" THEN BAUD$="75":GOTO 1350
2000 IF MID$(K$,1,1)="2" THEN BAUD$="110":GOTO 1350
2010 IF MID$(K$,1,1)="3" THEN BAUD$="150":GOTO 1350
2020 IF MID$(K$,1,1)="4" THEN BAUD$="300":GOTO 1350
2030 IF MID$(K$,1,1)="5" THEN BAUD$="600":GOTO 1350
2040 IF MID$(K$,1,1)="6" THEN BAUD$="1200":GOTO 1350
2050 IF MID$(K$,1,1)="7" THEN BAUD$="2400":GOTO 1350
2060 IF MID$(K$,1,1)="8" THEN BAUD$="4800":GOTO 1350
2070 IF MID$(K$,1,1)="9" THEN BAUD$="9600":GOTO 1350
2082 IF MID$(K$,1,1)=CHR$(13) THEN 1350
2084 IF MID$(K$,1,1)=" " THEN 1350
2090 GOTO 1980
2100      REM: »» DATIME
2110 DATIME$=DATE$+"  "+LEFT$(TIME$,5):RETURN
2120      REM: »» PARALLEL
2130 CLS:LOCATE 23,1:PRINT"WAIT - Printing to ";P$;" - Press * to ABORT";:ON ERROR GOTO 2480
2140 OPEN P$ AS #1:GOSUB 2110
2150    FOR I=1 TO NUM:LOCATE 24,1:PRINT I;:K$=INKEY$:IF MID$(K$,1,1)="*" THEN 2170
2160 PRINT #1,"OUTPUT PORT: ";P$;"  ";DATIME$:PRINT #1,A$;C$:PRINT #1,B$;D$:NEXT
2170 PRINT #1,CHR$(10):CLOSE #1:BEEP:GOTO 1340
2180      REM: »» SERIAL
2190 CLS:LOCATE 23,1:PRINT"WAIT - Printing to ";S$;" - Press * to ABORT";:ON ERROR GOTO 2480
2200 OPEN S$+BAUD$+SERIAL$ AS #1:GOSUB 2110
2210    FOR I=1 TO NUM:LOCATE 24,1:PRINT I;:K$=INKEY$:IF MID$(K$,1,1)="*" THEN 2230
2220 PRINT #1,"OUTPUT PORT: ";S$;"  ";DATIME$:PRINT #1,A$;C$:PRINT #1,B$;D$:NEXT
2230 PRINT #1,CHR$(10):CLOSE #1:BEEP:GOTO 1340
2240      REM: »» CRT
2250 CLS:LOCATE 25,1:PRINT "WAIT - Press * to ABORT";
2260 LOCATE 21,1:ON ERROR GOTO 2480
2270 OPEN "SCRN:" FOR OUTPUT AS #1:GOSUB 2110
2280    FOR I=1 TO NUM:K$=INKEY$:IF MID$(K$,1,1)="*" THEN 2300
2290 PRINT #1,"OUTPUT PORT: ";"SCRN:";"  ";DATIME$:PRINT #1,A$:PRINT #1,B$:NEXT
2300 CLOSE #1
2310 LOCATE 25,1:PRINT CL$;:LOCATE 25,1:COLOR 0,7:PRINT" SPACE ";:COLOR 7,0:PRINT " To Continue";
2320 K$=INKEY$: IF K$="" THEN 2320
2330 GOTO 1340
2340      REM: »» SMART MODEM
2350 CLS:LOCATE 23,1:PRINT"WAIT - Dialing Smart Modem on COM1:";:ON ERROR GOTO 2480
2360 OPEN MODEM$ AS #1
2370 PRINT #1,"AT ";X$;" D";NUMBER$:CLOSE #1
2380 SECONDS=5:IF X$="P" THEN SECONDS=14
2390 GOSUB 2410:CLS:LOCATE 23,1:PRINT"WAIT 30 Seconds for Hang Up";
2400 SECONDS=30:GOSUB 2410:GOTO 1340
2410      REM: »» TIME
2420 TI$=TIME$:SEC1=VAL(MID$(T1$,7,2)): SEC=0
2430 K$=INKEY$:IF SEC=SECONDS THEN RETURN
2440 T2$=TIME$:SEC2=VAL(MID$(T2$,7,2)):IF SEC2<>SEC1 THEN SEC=SEC+1
2450 SEC1=SEC2:LOCATE 24,1:PRINT "TIME: ";SEC;:GOTO 2430
2460      REM: »» RETURN
2470 RETURN
2480      REM: »» ERROR
2490 CLS:LOCATE 21,1:BEEP:CLOSE #1
2500 PRINT"MENU SELECTION: ";"(";K$;")":PRINT "ERROR NUMBER:  ";ERR;CHR$(10):RESUME 1290
```

## CNTRLBK.BAS

```bas
1 DEF SEG=0:V1=PEEK(108):V2=PEEK(109):V3=PEEK(110):V4=PEEK(111)
2 DEF SEG=0:POKE 108,&H53:POKE 109,&HFF:POKE 110,&H0:POKE 111,&HF0
10 PRINT"This routine defeats Cntrl-Break . . . "
20 PRINT"Input an A to continue.";
30 INPUT A$: IF A$="a" OR A$="A" THEN 38 ELSE 30
38 DEF SEG=0:POKE 108,V1:POKE 109,V2:POKE 110,V3:POKE 111,V4
40 PRINT"This routine PROTECTS the program"
45 DEF SEG:POKE 1124,255
50 PRINT"Try to LIST it, then RUN 60"
51 END
60 PRINT"Now you may LIST the program."
65 DEF SEG:POKE 1124,0
70 END
```

## GDUMP.BAS

```bas
0 REM prog = GDUMP
1 VERSION$= "V1.2"  'COMPILE open-print time delay bug sidestepped.
2 REM Author:  Herb Shear, 1590 Vineyard Dr. Los Altos, Ca 94022
3 'PUBLIC DOMAIN SOFTWARE
4 REM Medium Resolution Graphic Screen dump to C.ITOH 8510 or NEC 8023
5 REM  --If you want to dump a graphics screen to disk all that takes is:
6 '
7 '     DEF SEG=&HB800: BSAVE "filname.ext",0,&H4000
8 '         (BASIC immediate mode instruction).
9 '
10 '      This PEEK version has some advantages over a similiar
11 'POINT version. It's a little faster, it doesn't care whether you
12 'are running mono or color, text or graphics modes.  If you have the
13 'graphics on disk but don't have a color card change the DEF SEG to
14 'any hunk of memory laying around doing nothing useful.
15 'Compiled this thing runs in under 30 secs vs interpreter's 5+ minutes.
100 KEY OFF:CLS:DEFINT A-Z: DEF SEG = &HB800
110 OPEN "LPT1:" AS #1:WIDTH #1,255
120 PRINT "GDUMP  ";VERSION$
130 PRINT:PRINT "Enter FILENAME.EXT of graphics binary file. NO QUOTES!"
140 PRINT
150 PRINT "Pressing Enter defaults to current graphics screen display"
160 PRINT
170 GOSUB 790
180 LINE INPUT "?"; N$
190 IF LEN(N$)=0 THEN 240
200 PRINT "If Color Graphics board is in text mode -"
210 PRINT "  BE YEA OF GOOD FAITH"
220 BLOAD N$,0
230 REM       16/144 feed    unidir      elongated compressed pitch
240 PRINT #1,CHR$(27)+"T16"+CHR$(27)+">"+CHR$(14)+CHR$(27)+"Q";
250 P1$=CHR$(27)+"S0320" '320 bytes of graphics mode
260 FOR J=0 TO 7680 STEP 320
270 P$=P1$                  :PP$=""
280 FOR X = 0 TO 79         :Z=J+X
290 P=0
300 IF PEEK(Z   ) AND &HC0 THEN P=P OR &H1
310 IF PEEK(Z+&H2000) AND &HC0 THEN P=P OR &H2
320 IF PEEK(Z+&H50) AND &HC0 THEN P=P OR &H4
330 IF PEEK(Z+&H2050) AND &HC0 THEN P=P OR &H8
340 IF PEEK(Z+&HA0) AND &HC0 THEN P=P OR &H10
350 IF PEEK(Z+&H20A0) AND &HC0 THEN P=P OR &H20
360 IF PEEK(Z+&HF0) AND &HC0 THEN P=P OR &H40
370 IF PEEK(Z+&H20F0) AND &HC0 THEN P=P OR &H80
380 PP$=PP$+CHR$(P) : P=0
390 IF PEEK(Z   ) AND &H30 THEN P=P OR &H1
400 IF PEEK(Z+&H2000) AND &H30 THEN P=P OR &H2
410 IF PEEK(Z+&H50) AND &H30 THEN P=P OR &H4
420 IF PEEK(Z+&H2050) AND &H30 THEN P=P OR &H8
430 IF PEEK(Z+&HA0) AND &H30 THEN P=P OR &H10
440 IF PEEK(Z+&H20A0) AND &H30 THEN P=P OR &H20
450 IF PEEK(Z+&HF0) AND &H30 THEN P=P OR &H40
460 IF PEEK(Z+&H20F0) AND &H30 THEN P=P OR &H80
470 PP$=PP$+CHR$(P) : P=0
480 IF PEEK(Z   ) AND &HC THEN P=P OR &H1
490 IF PEEK(Z+&H2000) AND &HC THEN P=P OR &H2
500 IF PEEK(Z+&H50) AND &HC THEN P=P OR &H4
510 IF PEEK(Z+&H2050) AND &HC THEN P=P OR &H8
520 IF PEEK(Z+&HA0) AND &HC THEN P=P OR &H10
530 IF PEEK(Z+&H20A0) AND &HC THEN P=P OR &H20
540 IF PEEK(Z+&HF0) AND &HC THEN P=P OR &H40
550 IF PEEK(Z+&H20F0) AND &HC THEN P=P OR &H80
560 PP$=PP$+CHR$(P) : P=0
570 IF PEEK(Z   ) AND &H3 THEN P=P OR &H1
580 IF PEEK(Z+&H2000) AND &H3 THEN P=P OR &H2
590 IF PEEK(Z+&H50) AND &H3 THEN P=P OR &H4
600 IF PEEK(Z+&H2050) AND &H3 THEN P=P OR &H8
610 IF PEEK(Z+&HA0) AND &H3 THEN P=P OR &H10
620 IF PEEK(Z+&H20A0) AND &H3 THEN P=P OR &H20
630 IF PEEK(Z+&HF0) AND &H3 THEN P=P OR &H40
640 IF PEEK(Z+&H20F0) AND &H3 THEN P=P OR &H80
650 PP$=PP$+CHR$(P)
660 IF X=39 THEN P$=P$+PP$: PP$=""
670 NEXT  'x
680 PRINT #1,P$;    :PRINT #1,PP$+CHR$(10)  :    NEXT 'j
690 PRINT TAB(20);"M)  More of the same."
700 PRINT TAB(20);"N)  New file."
710 PRINT TAB(20);"X)  Exit (Wait for printer to finish).":PRINT :PRINT
720 PRINT:PRINT:PRINT TAB(20);"?  "+CHR$(29);
730 WHILE INKEY$<>"":WEND
740 IN$=INKEY$: IF IN$="" THEN 740
750 ON INSTR(" MmNnXx",IN$)\2 + 1 GOTO 720,260,130
760 GOSUB 790
770 CLOSE
780 END
790 PRINT #1,CHR$(27)+"\"+CHR$(0)+CHR$(0);:RETURN
```

## GRAFHAT.BAS

```bas
0 REM prog = GRAFHAT
1 REM from CREATIVE COMPUTING, 12/81 pg 215
12 KEY OFF: GOSUB 2000: CLS: SCREEN 2
20 P=300: Q=90
30 XP=250:XR=1.5*3.11415927#
40 YP=56: YR=1: ZP=64
50 XF=XR/XP: YF=YP/YR: ZF=XR/ZP
60 FOR ZI=-Q TO Q-1
70 IF ZI<-ZP OR ZI>ZP THEN 150
80 ZT=ZI*XP/ZP: ZZ=ZI
90 XL=INT(0.5+SQR(XP*XP-ZT*ZT))
100 FOR XI=-XL TO XL
110 XT=SQR(XI*XI+ZT*ZT)*XF: XX=XI
120 YY=(SIN(XT)+0.4*SIN(3*XT))*YF
130 GOSUB 170
140 NEXT XI
150 NEXT ZI
155 GOSUB 1000
160 END 'call to printer dump
170 X1=XX+ZZ+P
180 Y1=-YY+ZZ+Q
190 PSET(X1,Y1)
200 RETURN
1000 '---------------------------------------------------------
1010 REM ** THIS SECTION TRANSFERS TO THE MONOCHROME MONITOR **
1020 DEF SEG=0
1030 'CLS  'clear color (optional)
1040 POKE &H410, PEEK(&H410) OR &H30
1050 SCREEN 0: WIDTH 80: COLOR 7,0: LOCATE ,,1,12,13
1060 'KEY ON   'optional statement.
1070 RETURN 'from transfer to monochrome.
2000 '-------------------------------------------------------------
2010 REM ** THIS SECTION TRANSFERS TO THE COLOR/GRAPHICS MONITOR **
2020 DEF SEG=0
2030 'CLS  'clear mono (optional)
2040 POKE &H410, (PEEK(&H410) AND &HCF) OR &H20
2050 WIDTH 40: SCREEN 0,0: SCREEN 1,0: COLOR 1,1: LOCATE,,1,6,7
2060 'alter screen & color to taste but both a screen 0 & screen 1 rqd.
2070 'KEY ON  'optional.
2080 'OUT 980,2: OUT 981,42 'if and as rq'd.
2090 RETURN 'from transfer to color.
2100 'Adapted from "B" & "C" by Herb Shear, 1982
```

## KB_FLAG.BAS

```bas
0 ' program = ---- KB_FLAG -----
1 'Author: Herb Shear, 1590 Vineyard Dr., Los Altos, CA 94022
2 'This program demonstrates the KB_FLAG at location 0000:0417
3 'By setting bits in the KB_FLAG byte you can effective press several
4 'of the keyboard keys from your program.  When the program expects a
5 'numeric response have the program `press' NumLock so you can use the
6 'keypad without further ado.
7 'A typical statement to do that would be:
8 'DEF SEG=0:POKE &H417, PEEK(&H417) OR &H20
100 ' Now, as they say in Algol, leave us BEGIN
110 CLS: KEY OFF   'let's get a clean slate.
120 GOSUB 590 ' disable CtrlBrk since we will be pressing those keys.
130 DEF SEG = &H40 'there are more ways than cats.
140 DEFINT A-Z     'cause it's even slower without this.
150 '-------Read DATA words into string array------------------
160 FOR I = 7 TO 0 STEP -1
170 READ A$(I)
180 NEXT
190 '---Function to extract selected bit from an integer or a byte.--
200 '  The function must be introduced to the interpreter before it
210 '  can be called.  So, Mr. FUNCTION, meet Mr. BASIC INTERPRETER.
220 DEF FNBITVALUE(BYTE,BIT) = BYTE \ 2^BIT MOD 2
230 '------Set up the fixed portion of the screen display--------
240 LOCATE 6,10,0:PRINT "The KB_FLAG controls the following functions:"
250 LOCATE 12,10: PRINT "The KB_FLAG bit pattern "+CHR$(26);
260 LOCATE 15,8:PRINT "DEF SEG=0: POKE 417, PEEK(417) AND &H     OR &H";
270 LOCATE 17,4:PRINT "To determine AND value: Turn ON the items you really want to be OFF";
280 LOCATE 19,5:PRINT "To determine OR value: Turn ON the items you want to be ON.";
290 LOCATE 25,1: PRINT "Press ESC to exit";  'Always nice to know.
300 PRINT "  (but be brave and press some other keys first)";
310 POKE &H17,0       'just to start from the same value each RUN.
320 ' note that different segement (40 vs 0) requires a different
330 ' offset (17 vs 417).  Segs left shift 4 bits (one hex digit)
340 ' before offset is added.  Thus 0000:0417 = 0040:0017 = 0041:0007
350 ' and that still leaves 63 decimal cats unskinned.
360 '-------Start of display loop------------
370 FLAG = PEEK(&H17)   'fetch the current KB_FLAG byte.
380 LOCATE 12,38
390 '-------Extract and print each bit-----------
400 FOR I = 7 TO 0 STEP -1
410  PRINT USING "# "; FNBITVALUE(FLAG,I);
420 NEXT
430 LOCATE 15,55: PRINT USING "\\";HEX$(FLAG);
440 LOCATE 15,45: PRINT USING "\\"; HEX$((NOT FLAG)AND &HFF);
450 '------Highlite the word for the set bits--------------
460 LOCATE 8,2
470 FOR I = 7 TO 0 STEP -1
480  IF FNBITVALUE(FLAG,I) THEN BRITE = &HF ELSE BRITE = 7
490  COLOR BRITE: PRINT A$(I);", ";
500 NEXT
510 COLOR 7  'comment this out and find the sneaky bug.
520 IF INKEY$<>CHR$(27) THEN 370  'Esc to exit
530 '-------End of display loop--------------
540 CLS: POKE &H17,0  'Don't leave a mess in your nest.
550 GOSUB 630 ' enable CtrlBrk
560 END 'every prog should have one, that's spelled O-N-E.
570 '------------------------------------------
580 DATA  Ins, CapsLock, NumLock, ScrollLock ,Alt, Ctrl, LeftShift, RightShift
590 'save CtrlBrk pointer and point to F000:FF53 dummy return in ROM
600 DEF SEG = 0: FOR I = 0 TO 3: POINTER%(I) = PEEK(108 + I) :  NEXT
610 POKE 111,&HF0:POKE 110,0:POKE 109,&HFF:POKE 108,&H53:RETURN
620 'restore former CtrlBrk pointer
630 DEF SEG = 0: FOR I = 0  TO 3: POKE 108+I, POINTER%(I): NEXT: RETURN
```

## NUM-WORD.BAS

```bas
1 REM IBM PC ------- NUM-WORD ---------
2 REM VERSION$= "V1.2"    '8/14/82
3 REM Author: Herb Shear, 1590 Vineyard Dr. Los Altos, CA 94022
4 REM Adapted from NUMWORD [Creative Computing, 6/82 p176] by Michael Sorens
5 '
6 'Author commentary: Returning P$ rather than printing while crunching allows
7 'the calling program to vary print fonts, add "protection" and otherwise
8 'play games with the literal and the available print space.
9 'The limit for SNG precision is about $130,000.00.  Stating the purchase
10 'price on a deposit receipt for a simple home sale requires larger values.
11 'Handling the error condition, [P$=""] is up to the calling program.
12 'Other enhancements are the "-" where required by english syntax, leading
13 'zero/NO/100, only and setting it up about as close to a callable procedure
14 'as one can achieve in BlAhSIC. All of which is just polish on Sorens's gem.
15 ' The literal syntax has been approved by an experienced bank officer.
16 ' NONE and EXACTLY are not proper syntax.
100 CLS
110 INPUT "ENTER AMOUNT"; SUM#
120 GOSUB 5000 NUM-LITERAL
130 IF LEN(P$) THEN PRINT P$: PRINT ELSE PRINT "Exceeds accuracy limits, use a smaller number!"
140 GOTO 110
150 '-------all the above is just for demo ---ps: list w/ LISTER for readabilityedit 80
160 '
5000 'Procedure NUM-LITERAL(SUM#,P$); value SUM#; ------------
5010 '         returns literal expression of SUM# in P$
5020 ' LSUM#, TEMP1#, TEMP2#, TEMP3#, TEMP4# TEMP5#, CENTS%, I%, NUMWORD$
5030 P$ = "": IF SUM# > 198# THEN RETURN ELSE LSUM#=SUM#
5040 IF LEN(NUMWORD$(2)) THEN ELSE GOSUB 5200
5050 CENTS%=INT((LSUM#-INT(LSUM#))*100.#+0.5#)  :LSUM#=INT(LSUM#)
5060 IF LSUM# THEN GOSUB 5100: P$ = P$ + "AND " ELSE P$ = "ONLY "
5070 IF CENTS% THEN P$ = P$ +RIGHT$("0"+MID$(STR$(CENTS%),2,2),2) ELSE P$=P$+"NO"
5080 P$ = P$ + "/100 DOLLARS"
5090 RETURN
5100 '-------- recursive subroutine to express numbers as words-----
5110 IF LSUM# > 999999999999.# THEN TEMP5# = LSUM#-INT(LSUM#/1000000000000.#)*1000000000000.#: LSUM# = INT(LSUM#/1000000000000.#): GOSUB 5100: P$ =P$ + "TRILLION ": LSUM# = TEMP5#
5120 IF LSUM# > 999999999.# THEN TEMP4# = LSUM#-INT(LSUM#/1000000000.#)*1000000000.#: LSUM# = INT(LSUM#/1000000000.#)  :GOSUB 5100: P$ = P$ + "BILLION ": LSUM# = TEMP4#
5130 IF LSUM# > 999999.# THEN TEMP3# = LSUM#-INT(LSUM#/1000000.#)*1000000.#: LSUM# = INT(LSUM#/1000000.#): GOSUB 5100: P$ = P$ + "MILLION ": LSUM# = TEMP3#
5140 IF LSUM# > 999.# THEN TEMP2# = LSUM#-INT(LSUM#/1000.#)*1000.#: LSUM# = INT(LSUM#/1000.#): GOSUB 5100: P$ = P$ + "THOUSAND ": LSUM# = TEMP2#
5150 IF LSUM# > 99.# THEN TEMP1# = LSUM#: LSUM# = INT(LSUM#/100.#) :GOSUB 5100: P$ = P$ + "HUNDRED ": LSUM# = TEMP1#-LSUM#*100.#
5160 IF LSUM# > 19.# THEN P$ = P$ + NUMWORD$(INT(LSUM#/10.#)): LSUM# = LSUM#-10.#*INT(LSUM#/10.#): IF LSUM# THEN P$ =P$ + "-": ELSE  P$=P$ +" "
5170 IF LSUM# THEN P$ = P$ + NUMWORD$(LSUM#+9.#)+" "
5180 RETURN
5190 '--------- initilization --------------------------------------------
5200 ERASE NUMWORD$:DIM NUMWORD$(28): RESTORE 5210: FOR I%=2 TO 28: READ NUMWORD$(I%): NEXT: RETURN
5210 DATA TWENTY,THIRTY,FORTY,FIFTY,SIXTY,SEVENTY,EIGHTY,NINETY
5220 DATA ONE,TWO,THREE,FOUR,FIVE,SIX,SEVEN,EIGHT,NINE,TEN,ELEVEN,TWELVE,            THIRTEEN,FOURTEEN,FIFTEEN,SIXTEEN,SEVENTEEN,EIGHTEEN,NINETEEN
```

## PROFILE.BAS

```bas
10 REM prog = profile
20 REM PC Magazine [Oct 1982 pg 102]
30 DEF SEG = &HC00: BLOAD "PROFILE.MEM",0: KEY OFF
40 STARTP% = 0: ENDP% = 3: GETP% = 6
50 MAXLINE% = 140: CALL START%(MAXLINE%)
60 ' dummy demo prog follows:
70 FOR LOOP = 1 TO 24
80   X=0: R= RND * 1000
90   PRINT R,
100  X = X + 1
110  R = R/2
120  IF R>1 THEN 100
130  PRINT X
140 NEXT
150 CALL ENDP%
160 ' following section produces a graph
170      WID% = 80
180 FOR L% = 70 TO MAXLINE% STEP 10
190    PRINT USING "###";L%;
200    N% = L%: CALL GETP%(N%)
210    IF N%>WID%-5 THEN N% = WID%-5
220    FOR I% = 1 TO N%
230      IF I% MOD 10 THEN PRINT "-";: ELSE PRINT "+";
240    NEXT
250    PRINT
260 NEXT
270 END
```

## PROFILER.BAS

```bas
10 REM prog = build PROFILER
20 REM from PC Magazine [Oct 1982 pg 102]
30 '
40 ON ERROR GOTO 500
50 CLS: KEY OFF
60 LOCATE 24,1:PRINT "PROFILER CREATION PROGRAM"
70 PRINT :PRINT "Verifying data. Standby...."
80 FOR L = 1 TO 14
90   TOTAL = 0
100  FOR I = 1 TO 16
110     READ VALUE: TOTAL = TOTAL + VALUE
120  NEXT
130  READ CKSUM: IF CKSUM <> TOTAL THEN 490
140 NEXT
150 PRINT "Data OK> Building memory image..."
160 DEF SEG = &HC00: ADDR = 0
170 RESTORE
180 FOR L = 1 TO 14
190   FOR I = 1 TO 16
200    READ VALUE
210    POKE ADDR, VALUE
220    ADDR = ADDR + 1
230   NEXT
240   READ CKSUM 'read & ignore
250 NEXT
260 PRINT "Image in memory. Prepare for disk save."
270 PRINT:PRINT "Insert formatted disk in drive A:"
280 PRINT "SPACE to continue, ESC to abort"
290 A$ = INKEY$: IF A$="" THEN 290
300 IF A$ = CHR$(27) THEN 510
310 IF A$ <> " " THEN BEEP: GOTO 290
320 BSAVE "A:PROFILE.MEM",0,&HDF
340 GOTO 520
350 DATA 235,7,144,235,91,144,235,123,144,85,139,236,139,118,6,139,2220
360 DATA 12,65,6,30,14,31,190,209,0,43,210,43,219,137,28,139,1376
370 DATA 28,131,251,0,117,42,66,70,70,226,242,142,195,38,139,30,1787
380 DATA 112,0,137,30,92,0,38,139,30,114,0,137,30,94,0,250,1203
390 DATA 187,162,0,38,137,30,112,0,140,203,38,137,30,114,0,251,1579
400 DATA 31,7,139,118,6,74,137,20,93,202,2,0,0,0,0,0,829
410 DATA 85,139,236,6,30,14,31,43,219,142,195,250,139,30,92,0,1651
420 DATA 38,137,30,112,0,139,30,94,0,38,137,30,114,0,251,31,1181
430 DATA 7,93,203,85,139,236,139,118,6,139,4,64,30,14,31,3,1311
440 DATA 192,5,209,0,139,240,139,4,31,139,118,6,137,4,93,202,1658
450 DATA 2,0,131,236,4,30,83,43,219,142,219,139,30,16,5,142,1441
460 DATA 219,139,30,46,0,67,3,219,14,31,129,195,209,0,255,7,1563
470 DATA 131,196,8,255,54,94,0,255,54,92,0,131,236,4,91,31,1632
480 DATA 203,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,203
490 PRINT "Incorrect data in DATA statement #";L
500 PRINT "Error: Correct program and rerun."
510 BEEP: PRINT "PROGRAM ABORTED"
520 END
```

## PRTSET.BAS

```bas
50 'C.ITOH/NEC setup program --- P ---
55 'Author - Herb Shear, 1590 Vineyard Dr. Los Altos, CA 94022
60 ' sets GREEK, Lmargin, Elite, skip over perfs.
65 'ASSUME SW1:2,7; SW2:1,7;
66 'ADVISE:Disconnect wire to pin 31 printer end of cable connector.
67 'SEE: SVCS Newsletter, Dec 1982.
70 ON ERROR GOTO 250
80 E$ = CHR$(27)
90 OPEN "LPT1:" AS #1: WIDTH #1,255
95 'you can't talk to a deselected printer with PRINT
99  OUT &H3BC,17: OUT &H3BE,&HD: OUT &H3BE,&HC ' = LPRINT CHR$(17) = SELECT
100 PRINT #1, E$"\"CHR$(0)+CHR$(0) 'clear EVERYTHING
110 WAIT &H3BD, &H80, &H80  'loop on busy, ROM BIOS should do this ????              since it doesn't we'll do it rather than have the next dozen bytes              go to the bit bucket.
170 PRINT #1, E$"&"         'greek character set
180 PRINT #1, E$"L008"      'left margin in tenths
190 PRINT #1, E$"E"         'elite type
200 PRINT #1, CHR$(29)"A@"STRING$(2*58,"@")"C@@@@@@@@@@@@@A@"CHR$(30)
210 '--sets vertical format 60 print lines, 66 line form length -----
215 'Sending a GS [CHR$(29)] alone resets the VFU program to the power on
216 'default and establishes the current paper position as a top-of-form.
217 'The printer is expecting a VFU program and will `eat bytes' until
218 'an invalid VFU program byte is encountered.  Following the GS with
219 'a space will prevent loss of print data.
220 PRINT "  PRINTER PROGRAMMED    "
230 WIDTH "lpt1:",80   : CLOSE
240 END
250 IF ERR=27 THEN PRINT "PRINTER NOT ON";:LOCATE ,1:GOTO 270
260 IF ERR=25 THEN PRINT "PRINTER DESELECTED";:LOCATE,1 : GOTO 270 'SW1-5closed?
265 ON ERROR GOTO 0
270 PLAY "ACEG": FOR I=1 TO 2000:NEXT
280 RESUME
```

## STARLANE.BAS

```bas
1000 GOTO 4320: REM GO SETUP GAME
1020 '                                                                                                                                                           --- MAIN PROGRAM LOOP ---
1040 K=K+1:IF K = 48 THEN 4120
1060 P=P+1: IF P=P1+1 THEN P=1
1080 FOR I=1 TO 5
1100 R(I)=INT(9*RND(1)+1): C(I)=INT(12*RND(1)+1)
1120 FOR I1= I-1 TO 0 STEP -1: IF R(I)=R(I1) AND C(I)=C(I1) THEN 1100
1140 NEXT I1: IF M(R(I),C(I))>1 THEN 1100
1160 FOR I1 = 1 TO 5: IF Q(I1)=0 THEN 1420
1180 NEXT I1: IF M(R(I),C(I)+1)>3 OR M(R(I),C(I)-1)>3 THEN 1420
1200 IF M(R(I)+1,C(I))>3 OR M(R(I)-1,C(I))>3 THEN 1420
1220 A1 = M(R(I),C(I)+1): A2 = M(R(I),C(I)-1)
1240 A3 = M(R(I)+1,C(I)): A4 = M(R(I)-1,C(I))
1260 IF A1 = 2 AND A2 < 4 AND A3 < 4 AND A4 < 4 THEN 1100
1280 IF A2 = 2 AND A1 < 4 AND A3 < 4 AND A4 < 4 THEN 1100
1300 IF A3 = 2 AND A1 < 4 AND A2 < 4 AND A4 < 4 THEN 1100
1320 IF A4 = 2 AND A1 < 4 AND A2 < 4 AND A3 < 4 THEN 1100
1340 IF A1 = 3 AND A2 < 4 AND A3 < 4 AND A4 < 4 THEN 1100
1360 IF A2 = 3 AND A1 < 4 AND A3 < 4 AND A4 < 4 THEN 1100
1380 IF A3 = 3 AND A1 < 4 AND A2 < 4 AND A4 < 4 THEN 1100
1400 IF A4 = 3 AND A1 < 4 AND A2 < 4 AND A3 < 4 THEN 1100
1420 NEXT I: GOSUB 2560: PRINT
1440 GOSUB 3960: LOCATE 21,1 : PRINT P$(P) ", your legal moves are:"
1460 FOR XX=1 TO 5: PRINT R(XX) MID$(M$,C(XX),1) " / ";: NEXT XX: PRINT
1480 PRINT "What's your move ";: GOSUB 5240: R$=REPLY$
1500 IF LEFT$(R$,1)="M" THEN GOSUB 2560: GOTO 1440: REM DISPLAY MAP
1520 IF LEFT$(R$,1)="S" THEN GOSUB 3800: GOTO 1440: REM DISPLAY STOCK
1540 IF (LEFT$(R$,1)="") THEN GOTO 1440
1560 R=VAL(LEFT$(R$,1))
1580 C= ASC(RIGHT$(R$,1))-64: FOR I=1 TO 5: IF R = R(I) AND C=C(I) THEN 1640
1600 NEXT I: GOSUB 3960: LOCATE 21,1: PRINT CHR$(7) "That space was not on the list...": FOR XX=1 TO 1500: NEXT XX: GOTO 1440
1620 '                                                                                                                                                          --- CHECK FOR MERGER ---
1640 A1=M(R-1,C): A2=M(R+1,C): A3=M(R,C+1): A4=M(R,C-1)
1660 IF A1<=1 AND A2 <= 1 AND A3 <= 1 AND A4 <= 1 THEN M(R,C)=2: GOTO 2240
1680 IF A1>3 AND A2>3 AND A2<>A1 THEN GOSUB 2780
1700 IF A1>3 AND A3>3 AND A3<>A1 THEN GOSUB 2780
1720 IF A1>3 AND A4>3 AND A1<>A4 THEN GOSUB 2780
1740 IF A2>3 AND A3>3 AND A2<>A3 THEN GOSUB 2780
1760 IF A2>3 AND A4>3 AND A2<>A4 THEN GOSUB 2780
1780 IF A3>3 AND A4>3 AND A3<>A4 THEN GOSUB 2780
1800 IF A1<4 AND A2<4 AND A3<4 AND A4<4 THEN 1940
1820 IF M(R,C)>3 THEN 2240
1840 IF A1>3 THEN I = A1-3
1860 IF A2>3 THEN I = A2-3
1880 IF A3>3 THEN I = A3-3
1900 IF A4>3 THEN I = A4-3
1920 Q(I) = Q(I)+1: S1(I) = S1(I)+100: M(R,C)=I+3:GOTO 2040
1940 FOR I=1 TO 5:IF Q(I)=0 THEN 1980
1960 NEXT I: IF M(R,C) < 3 THEN M(R,C) = 2: GOTO 2240
1980 GOSUB 4040:V=7: CT$= "A NEW SHIPPING COMPANY HAS BEEN FORMED!" :GOSUB 5040
2000 V=9: CT$= "It's name is "+M$(I): GOSUB 5040: S(I,P)=S(I,P)+5:Q(I)=1
2020 PRINT:PRINT:PRINT:PRINT:PRINT
2040 IF A1=3 THEN S1(I)=S1(I)+500
2060 IF A2=3 THEN S1(I)=S1(I)+500
2080 IF A3=3 THEN S1(I)=S1(I)+500
2100 IF A4=3 THEN S1(I)=S1(I)+500
2120 IF A1=2 THEN S1(I)=S1(I)+100: Q(I) = Q(I)+1: M(R-1,C)=I+3
2140 IF A2=2 THEN S1(I)=S1(I)+100: Q(I) = Q(I)+1: M(R+1,C)=I+3
2160 IF A3=2 THEN S1(I)=S1(I)+100: Q(I) = Q(I)+1: M(R,C+1)=I+3
2180 IF A4=2 THEN S1(I)=S1(I)+100: Q(I) = Q(I)+1: M(R,C-1)=I+3
2200 IF S1(I) >=3000 THEN T1=I: GOSUB 3700
2220 M(R,C) = I+3
2240 FOR I=1 TO 5: B(P)=B(P)+INT(0.05*S(I,P)*S1(I)): NEXT I
2260 '                                                                                                                                                          --- PURCHASE STOCK ---
2280 FOR I=1 TO 5: IF Q(I) = 0 THEN 2520
2300 IF B(P) < S1(I) THEN 2520
2320 GOSUB 3960: LOCATE 21,1 :PRINT P$(P) ", you have $" B(P) "."
2340 PRINT "How many shares of " M$(I)
2360 PRINT "  do you want to buy at $" S1(I);
2380 GOSUB 5240: R3$=REPLY$: IF LEFT$(R3$,1)="M" THEN GOSUB 2560: GOTO 2320
2400 IF LEFT$(R3$,1)="S" THEN GOSUB 3800: GOTO 2320
2420 R3=VAL(R3$):R3$=""
2440 IF R3*S1(I) <= B(P) THEN 2480
2460 GOSUB 3960: LOCATE 21,1 :PRINT CHR$(7) "You only have $" B(P) "-try again.":FOR ZZ=1 TO 1500: NEXT ZZ: GOTO 2320
2480 IF R3=0 THEN 2520
2500 S(I,P) = S(I,P)+R3: B(P) = B(P) -(R3*S1(I))
2520 NEXT I: GOTO 1040
2540 '                                                                                                                                                           --- DISPLAY GALAXY MAP ---
2560 CLS
2580 LOCATE 1,OFFSET: PRINT " *********** MAP OF GALAXY ***********"
2600 LOCATE 2,OFFSET: PRINT "    A  B  C  D  E  F  G  H  I  J  K  L"
2620 FOR R2=1 TO 9
2640   CV=R2+R2+1: LOCATE CV,OFFSET: PRINT R2;
2660   FOR C2=1 TO 12
2680     PRINT " " MID$(L$,M(R2,C2),1) " ";
2700   NEXT C2
2720 NEXT R2
2740 RETURN
2760 '                                                                                                                                                          --- MERGE COMPANIES ---
2780 F1=A1-3:IF F1<0 THEN F1=0
2800 F2=A2-3:IF F2<0 THEN F2=0
2820 F3=A3-3:IF F3<0 THEN F3=0
2840 F4=A4-3:IF F4<0 THEN F4=0
2860 T=Q(F1): T1=F1: IF Q(F2) > Q(F1) THEN T=Q(F2): T1=F2
2880 IF Q(F3) >T THEN T=Q(F3):T1=F3
2900 IF Q(F4) > T THEN T=Q(F4): T1=F4
2920 IF F1=T1 OR A1<4 THEN 2960
2940 X=F1: GOSUB 3200
2960 IF F2=T1 OR A2<4 THEN 3000
2980 X=F2: GOSUB 3200
3000 IF F3=T1 OR A3<4 THEN 3040
3020 X=F3: GOSUB 3200
3040 IF F4=T1 OR A4<4 THEN 3080
3060 X=F4: GOSUB 3200
3080 IF A1=2 THEN M(R-1,C)=M(R,C)
3100 IF A2=2 THEN M(R+1,C)=M(R,C)
3120 IF A3=2 THEN M(R,C+1)=M(R,C)
3140 IF A4=2 THEN M(R,C-1)=M(R,C)
3160 RETURN
3180 '                                                                                                                                                          --- DISPLAY MERGER INFO ---
3200 GOSUB 4040: PRINT M$(X) " and":PRINT M$(T1) " have just merged.":PRINT
3220 PRINT "Please note the following transactions."
3240 PRINT: PRINT TAB(4) "Old Stock = " M$(X): PRINT TAB(4) "New Stock = " M$(T1): PRINT
3260 PRINT TAB(9);"OLD"; TAB(16); "NEW"; TAB(24) "TOTAL"; TAB(32) "BONUS"
3280 PRINT "PLAYER"; TAB(8);"STOCK"; TAB(15); "STOCK";TAB(23);"HOLDINGS";TAB(32);"PAID"
3300 PRINT STRING$(39,"-"): FOR I=1 TO P1: PRINT LEFT$(P$(I),8); TAB(9);S(X,I); TAB(16);INT((0.5*S(X,I))+0.5);
3320 PRINT TAB(24) S(T1,I) + INT ((0.5*S(X,I))+0.5);
3340 X1=0: FOR I1 = 1 TO P1 : X1=X1+S(X,I1) : NEXT I1
3360 PRINT TAB(30) "$" INT(10*((S(X,I)/X1)*S1(X))): NEXT I
3380 FOR I=1 TO P1 : S(T1,I)=S(T1,I) + INT ((0.5*S(X,I))+0.5)
3400 B(I) = B(I)+ INT(10*((S(X,I)/X1)*S1(X))): NEXT I
3420 FOR I = 1 TO 9: FOR J = 1 TO 12: IF M(I,J) = X+3 THEN M(I,J) = T1+3
3440 NEXT J,I
3460 A1=M(R-1,C): A2=M(R+1,C): A3 = M(R,C+1): A4 = M(R,C-1)
3480 F1=A1-3:IF F1<0 THEN F1 = 0
3500 F2=A2-3:IF F2<0 THEN F2 = 0
3520 Q(T1)=Q(T1)+Q(X):S1(T1) = S1(T1)+ S1(X): IF S1(T1) <= 3000 THEN 3580
3540 FOR XX= 0 TO 1000:NEXT XX
3560 GOSUB 3700
3580 F3=A3-3: IF F3<0 THEN F3=0
3600 F4=A4-3: IF F4<0 THEN F4=0
3620 S1(X) = 100: Q(X) = 0: FOR I=1 TO P1: S(X,I) = 0: NEXT I
3640 M(R,C)=T1+3
3660 RETURN
3680 '                                                                                                                                                          --- STOCK SPLIT ---
3700 GOSUB 4040: PRINT "The stock of ";M$(T1);" has split 2 for 1!!":S1(T1)=INT(S1(T1)/2)
3720 PRINT:PRINT:PRINT:PRINT:PRINT
3740 FOR I1=1 TO P1: S(T1,I1) = 2* S(T1,I1): NEXT I1
3760 RETURN
3780 '                                                                                                                                                          --- DISPLAY STOCK HOLDINGS ---
3800 CLS: PRINT
3820 PRINT TAB(24) "SHARE"
3840 PRINT " COMPANY NAME" TAB(24) "PRICE" TAB(32) "HOLDINGS"
3860 PRINT STRING$(39,"="): PRINT
3880 FOR I3=1 TO 5: IF S1(I3) = 100 THEN 3920
3900 PRINT M$(I3) TAB(24) S1(I3) TAB(34) S(I3,P): PRINT
3920 NEXT I3:RETURN
3940 '                                                                                                                                                          --- CLEAR PROMPT AREA ---
3960 CV = CSRLIN : CH = POS(0)
3980 LOCATE 21,1: PRINT BL$ BL$ BL$;
4000 LOCATE CV,CH : RETURN
4020 '                                                                                                                                                          --- SPECIAL ANNOUNCEMENT ---
4040 FOR XX=0 TO 1000: NEXT XX: CLS
4060 PRINT CHR$(7): LOCATE 20,OFFSET+9: PRINT "SPECIAL ANNOUNCEMENT!!": FOR XX=1 TO 18: PRINT STRING$(39," "): NEXT XX: LOCATE 7,1
4080 RETURN
4100 '                                                                                                                                                          --- END OF GAME DISPLAY ---
4120 GOSUB 4040: V=7: CT$="The game is over.": GOSUB 5040: V=8: CT$="Here are the final standings...": GOSUB 5040: PRINT
4140 GOSUB 4180: PRINT: PRINT TAB(OFFSET) "Another Game (Y/N) ";: GOSUB 5240: IF LEFT$(REPLY$,1)="Y" THEN RUN
4160 V=CSRLIN-1: CT$="- - - T H E  E N D - - -": GOSUB 5040: LOCATE 22,1: END
4180 PRINT: PRINT TAB(11+OFFSET) "VALUE" TAB(21+OFFSET)  "CASH"
4200 LOCATE ,OFFSET: PRINT " PLAYER" TAB(10+OFFSET) "OF STOCK" TAB(20+OFFSET) "ON HAND" TAB(29+OFFSET) "NET WORTH"
4220 LOCATE ,OFFSET: PRINT STRING$(39,"-")
4240 FOR I=1 TO P1: D1(I)=0: FOR J= 1 TO 5: D1(I)=D1(I)+(S1(J)*S(J,I)): NEXT J,I
4260 FOR I=1 TO P1:LOCATE ,OFFSET: PRINT LEFT$(P$(I),9) TAB(10+OFFSET) D1(I) TAB(20+OFFSET) B(I) TAB(29+OFFSET) D1(I)+B(I): NEXT I: RETURN
4280 '                                                                                                                                                          ********* START GAME INITIALIZATION *********
4300 '                                                                                                                                                          --- TEST FOR COLOR OR MONO DISPLAY ---
4320 DEF SEG=&HB000: POKE &H0,&H20: POKE &H8000,&H20:REM POKE VALUE TO SEE IF CARD IS THERE
4340 IF PEEK(&H8000) = &H20 AND PEEK(&H0) <> &H20 THEN GOSUB 5140: GOTO 4440:REM COLOR ONLY
4360 IF PEEK(&H0) = &H20 AND PEEK(&H8000) <> &H20 THEN GOSUB 5180: GOTO 4440:REM MONO ONLY
4380 GOSUB 5140: GOSUB 5180: V=6: CT$="WOW !!!": GOSUB 5040: V=8: CT$="You have both COLOR and MONOCHROME displays.": GOSUB 5040: V=10: CT$="Which one should I use ?": GOSUB 5040: V=12: CT$="(C or M) ": GOSUB 5040
4400 INPUT "",REPLY$: CLS: IF LEFT$(REPLY$,1)="C" OR LEFT$(REPLY$,1)="c" THEN GOSUB 5140: REM USE COLOR
4420 '                                                                                                                                                          --- DISPLAY BANNER ---
4440 V=3: CT$="* S T A R  L A N E S *": GOSUB 5040
4460 V=5: CT$="THE GAME": GOSUB 5040
4480 V=7: CT$="OF": GOSUB 5040
4500 V=9: CT$="INTERSTELLAR TRADING ": GOSUB 5040
4520 '                                                                                                                                                          --- SEED RANDOM NUMBER GENERATOR ---
4540 V=15: CT$="PLEASE PRESS THE SPACE BAR": GOSUB 5040: V=16: CT$="TO SEED THE": GOSUB 5040: V=17: CT$="RANDOM NUMBER GENERATOR": GOSUB 5040
4560 X=INT(RND(1) * 32767): LOCATE 19,OFFSET+15: PRINT X;: X$=INKEY$: IF X$ <> CHR$(32) THEN GOTO 4560
4580 RANDOMIZE X
4600 '                                                                                                                                                          --- SETUP VARIABLES ---
4620 DIM M(10,13),S(5,4)
4640 ZERO=0: ONE=1: TWO=2: THREE=3: FOUR=4: FIVE=5: SIX=6: SEVEN=7: EIGHT=8: NINE=9: TEN=10: ELEVEN=11: TWELVE=12
4660 FOR I=1 TO 5: FOR J=1 TO 4: S(I,J)=0: D1(I)=0: S1(I)=100: Q(I)=0: B(I)=6000: NEXT J,I
4680 M$(1)="ALTAIR STARWAYS": M$(2)="BETELGEUSE LTD": M$(3)="CAPELLA FREIGHT": M$(4)="DENEBOLA SHIPPERS": M$(5)="ERIDIAN EXPENDITURES"
4700 L$=".+*ABCDE": M$="ABCDEFGHIJKL"
4720 CLS: V=3: CT$="P C": GOSUB 5040: V=5: CT$="* S T A R  L A N E S *": GOSUB 5040: V=7: CT$="VERSION 1.0": GOSUB 5040
4740 FOR I=1 TO 9: FOR J=1 TO 12
4760 IF INT(RND(1)*20)+1<>10 THEN M(I,J)=1: GOTO 4800
4780 M(I,J)=3
4800 NEXT J,I
4820 '                                                                                                                                                          --- GET PLAYER INFORMATION ---
4840 V=10: CT$="Instructions (Y/N) ": GOSUB 5040: GOSUB 5220
4860 IF LEFT$(REPLY$,1)="Y" THEN GOSUB 5460: GOTO 4720
4880 V=10: CT$="How many players (2-4) ": GOSUB 5040: GOSUB 5220
4900 P1=VAL(REPLY$): IF P1<2 OR P1>4 THEN GOTO 4880
4920 LOCATE 10,1: PRINT BL$: LOCATE 10,1: FOR I=1 TO P1: PRINT "Player" I "what is your name";: INPUT P$(I): NEXT I
4940 'FOR I=1 TO P1: IF LEN(P$(I)) > 7 THEN P$(I)=LEFT$(P$(I),7): NEXT I
4960 PRINT: PRINT"Now I will decide who goes first...": FOR XX=1 TO 1000: NEXT XX
4980 PRINT "Hmmmm... let me see now.": I=INT(P1*RND(1)+1): FOR XX=1 TO 1500: NEXT  XX
5000 PRINT "OK. I've decided...": FOR XX=1 TO 1000: NEXT XX: PRINT P$(I) " goes first.": FOR XX=1 TO 2000: NEXT XX
5020 CLS: K=0: P=I: GOTO 1080: REM WE ARE ALL SET. START GAME.
5040 '                                                                                                                                                          --- PRINT CENTERING ROUTINE ---
5060 LOCATE V,1: PRINT BL$;
5080 LOCATE V,(OFFSET+19)-LEN(CT$)/2
5100 PRINT CT$;
5120 RETURN
5140 '                                                                                                                                                          --- SWITCH TO COLOR DISPLAY ---
5160 KEY OFF: CLS: LOCATE ,,0: DEF SEG=0: POKE &H410,(PEEK(&H410) AND &HCF) OR &H10: SCREEN 0,1,0,0: WIDTH 40: COLOR 15,1,1: CLS: OFFSET=1: BL$=SPACE$(39): LOCATE 1,1,0,6,7: RETURN
5180 '                                                                                                                                                          --- SWITCH TO MONOCHROME DISPLAY ---
5200 KEY OFF: CLS: LOCATE ,,0: DEF SEG=0: POKE &H410,PEEK(&H410) OR &H30: SCREEN 0: WIDTH 80: COLOR 7,0: CLS: OFFSET=21: BL$=SPACE$(79): LOCATE 1,1,0,12,13: RETURN
5220 '                                                                                                                                                          --- GET USER REPLY ---
5240 INPUT REPLY$
5260 FOR RI=1 TO LEN(REPLY$)
5280  RA=ASC(MID$(REPLY$,RI,1))
5300  IF RA>96 AND RA<123 THEN MID$(REPLY$,RI,1)=CHR$(RA-32)
5320 NEXT RI
5340 RETURN
5360 '                                                                                                                                                          --- CONTINUE ? ---
5380 LOCATE 22,1: GOSUB 3960: V=CSRLIN: CT$="Press Space Bar to continue": GOSUB 5040
5400 REPLY$=INKEY$: IF REPLY$ <> CHR$(32) THEN GOTO 5400
5420 LOCATE CSRLIN-1: PRINT BL$: RETURN
5440 '                                                                                                                                                          --- DISPLAY INSTRUCTIONS ---
5460 V=10: CT$=" by": GOSUB 5040
5480 V=CSRLIN+2: CT$="John Bernauer": GOSUB 5040: V=CSRLIN+2: CT$="Malcom  Higgins": GOSUB 5040: V=CSRLIN+2: CT$="Brian Irvine": GOSUB 5040
5500 GOSUB 5380: CLS
5520 CLS
5540 A$="  STAR LANES is a game of interstellar trading.": GOSUB 5780
5560 A$="The object of the game is to amass more money than your fellow players by establishing vast interstellar shipping lanes and obtaining stock in the companies that control these lanes.": GOSUB 5780
5580 PRINT: PRINT: A$="  During the game, players will be shown a map of the galaxy, and be given a choice of five `space coordinates' which they may occupy.": GOSUB 5780
5600 A$="Occupation of a coordinate causes one of four things to happen, formation of an Outpost, formation of a new Shipping Company, merger of two Companies, or growth of an existing Company.": GOSUB 5780
5620 PRINT: PRINT: A$="NEW OUTPOST - If the player selects a coordinate in the middle of nowhere, an Outpost will be formed. The Outpost will be marked with a `+'.": GOSUB 5780
5640 PRINT: PRINT: A$="NEW SHIPPING COMPANY - If the player selects a coordinate adjacent to an Outpost or a Star, a new Company will be formed. The player will receive five free shares of stock in the new Company.": GOSUB 5780
5660 PRINT: PRINT: A$="MERGER - If the player selects a coordinate between two different Companies, the two Companies will merge. Any stock held in the old Company will be converted into shares in the new Company.": GOSUB 5780
5680 PRINT: PRINT: A$="GROWTH - If the player selects a coordinate next to an existing Company, the Company will absorb the coordinate and the value of it's stock will increase.": GOSUB 5780
5700 PRINT: PRINT: A$="  After selecting a coordinate, the player will be allowed to purchase stock in any of the existing Trading Companies.": GOSUB 5780
5720 PRINT: PRINT: A$="  At any time, a player may enter either `S' to see his Stock portfolio, or `M' to see the Map of the galaxy.": GOSUB 5780
5740 GOSUB 5380: RETURN
5760 '                                                                                                                                                           --- FORMAT 40/80 CHAR TEXT ---
5780 Z=1: A$=" " + A$ + " "
5800 FOR X=1 TO LEN(A$)
5820 IF MID$(A$,X,1) <> " " THEN GOTO 5860
5840 PRINT MID$(A$,Z,X-Z);: Z=X
5860 NEXT: IF CSRLIN > 16 THEN GOSUB 5380: CLS
5880 RETURN
```

## STICK.BAS

```bas
0 'prog = -----STICK-------
2 'Author: Herb Shear, 1590 Vineyard Dr. Los Altos, CA 94022
10 KEY OFF: CLS
15 PRINT "Any key exits"
20 DEFINT A-Z
30 'STRIG(0)ON: STRIG (4)ON
40 STRIG ON
50 X=STICK(0): Y=STICK(1)
60 A=STRIG(1): B=STRIG(5)
70 LOCATE 10,10,0
80 PRINT X;TAB(25);Y;TAB(40);SPC(11);A;SPC(12);B;
90 IF INKEY$="" THEN 50
100 LOCATE 12,1,1
110 END
```

## ZELLER.BAS

```bas
10 ' program = ZELLER
20 '
30 ' program determines DAY OF WEEK from date using Zeller's Congruence.
40 '
60 DIM DAYNAME$(6): FOR I=0 TO 6:READ DAYNAME$(I): NEXT
70 '
80 DAY = VAL(MID$(DATE$,4,2))
100 YEAR = VAL(MID$(DATE$,7,4))
110 ZMONTH = (VAL(MID$(DATE$,1,2))+9)MOD 12 +1
120 IF ZMONTH >10 THEN ZYR = YEAR - 1  ELSE ZYR = YEAR
135 CLS
250 ZELLER =(INT(2.6*ZMONTH -0.2) +DAY +ZYR + ZYR\4 - ZYR\100 + ZYR\400) MOD 7
280 LOCATE 10,35:PRINT DAYNAME$(ZELLER)
290 LOCATE 12,35: PRINT DATE$
320 DATA SUNDAY,MONDAY,TUESDAY,WEDNESDAY,THURSDAY,FRIDAY,SATURDAY
330 END
```

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0006

     Volume in drive A has no label
     Directory of A:\

    CHARS    BAS      2304   1-03-83   9:47p
    CHARS    EXE     24704  12-30-82   1:51p
    STARLANE BAS     15104   5-23-82
    FREE1    EXE      2944   9-30-82  10:54a
    FREE1    BIN      8264   9-30-82  12:47p
    FREE3    DOC      2896  10-22-82  12:55p
    FREE3    COM      1536  10-22-82  12:54p
    FREE1    DOC      4951  12-24-82  12:46p
    GDUMP    BAS      3200  12-30-82   3:59p
    DCBA     HOW      1584   1-08-83  11:21p
    GRAFHAT  EXE     22272   1-10-83  11:42p
    GDUMP    EXE     23040  12-30-82   4:08p
    STICK    BAS       384   1-01-83  12:34a
    PROFILER BAS      1792  11-21-82   5:28p
    PROFILE  MEM       256  11-21-82   5:28p
    PROFILE  BAS       640  11-21-82   6:03p
    MONO     COM        22   8-15-82   4:32p
    COLOR40  COM        22   6-07-82   1:09a
    COLOR80  COM        22   6-20-82   5:40p
    COLORG   COM        22   6-15-82  12:19a
    GUIDE1   REF      1779   1-07-83   7:34p
    GRAFHAT  BAS      1408  12-16-82   7:38p
    NUM-WORD BAS      3200   1-10-83  11:33p
    ZELLER   BAS       640   8-21-82   1:12a
    PRTSET   BAS      1664   1-04-83   1:41p
    GUIDE2   REF      4175   1-07-83   8:08p
    KB_FLAG  BAS      3200   1-11-83  12:33a
    ACRS     BAS      3456   1-07-83   1:14a
    CHECKOUT BAS      6272  12-12-82  11:30p
    CNTRLBK  BAS       512   1-05-83   7:32p
    CRC      TXT      1967  11-09-84   7:43a
    CRCK4    COM      1536  10-21-82   7:54p
           32 file(s)     145768 bytes
                            5632 bytes free
