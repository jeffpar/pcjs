---
layout: page
title: "PC-SIG Diskette Library (Disk #59)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0059/
machines:
  - id: ibm5150
    type: pcx86
    config: /machines/pcx86/ibm/5150/cga/256kb/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0059"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5150" %}

{% comment %}info_begin{% endcomment %}

## Information about "PEPSON/FASTPRT/QCKREF"

    PEPSON and PSCREEN make up a text formatting program.  Together, these
    programs allow you to enter text more or less "free-form," with
    formatting commands interspersed with the text.  It can adjust the
    lines of text (align) to any length you specify (under 71 columns)
    center lines.  It also accepts pre-formatted text (i.e., text that is
    to be printed without aligning) and allows you to change the fonts in
    the middle of a line.
    
    QUICKREF is a means of inexpensively producing a function key template
    on your printer.  This template can indicate the purpose of any or all
    of the 40 function keys for any program you desire. It allows you to
    create, update or change a template, review existing templates on the
    monitor, or print the templates. FASTPRT is a speed-up utility for the
    PrtSc function; it enables you to STOP a PrtSc operation on any
    printer.
    
    System Requirements:  Some programs require BASIC, EPSON-compatible
    printer.
    
    How to Start: Consult the .DOC and .TXT files for directions.  To run
    a program with the suffix .COM, .EXE, or .BAT, just type its name,
    i.e., for FASTPRT.BAT, type FASTPRT and hit <ENTER>.  To run the BASIC
    programs, consult the directions in GETTING STARTED for your
    configuration.
    
    Suggested Registration:  FASTPRT $10.00
    
    File Descriptions:
    
    -------- ---  PEPSON Epson printer utility
    PRINT    DOC  Documentation for PRINT.BAS
    PEPSON   BAS  Printer formatter to work with Epson printer
    PEPCON   DOC  Documentation for PEPCON.BAS
    PSCREEN  BAS  Printer formatter to show results to screen
    PEPSON   EXE  Compiled version of PEPSON.BAS
    PSCREEN  EXE  Compiled version of PSCREEN.BAS
    -------- ---  FASTPRT, a faster PrtSc function
    ADD      BAT  Part of FASTPRT
    AUTO     BAT  Part of FASTPRT
    AUTOEXEC BAT  Part of FASTPRT
    AUTOADD  BAT  Part of FASTPRT
    TWO      BAT  Part of FASTPRT
    INSTALL  BAT  To install FASTPRT
    FASTPRT  DOC  Documentation for FASTPRT.BAS
    FASTPRT  COM  Main program -Speedup the PrtSc function on PC or XT
    -------- ---  QUICKREF creates quick reference keyboard templates
    AUTOEXEC BAK  Part of QUICKREF
    GUIDE    BAT  Prints QUICKREF.DOC file
    QUICKREF BAS  Main program to create keyboard reference templates
    QUICKREF DOC  Doc for QUICKREF.BAS  (May not print on all printers )
    EW       KEY  Part of QUICKREF - template file for Easywriter
    BASIC    KEY  Part of QUICKREF - template file for BASIC
    TEMPLE   KEY  Part of QUICKREF - template file for Temple of Apshai
    VOLKSWTR KEY  Part of QUICKREF - template file for Volkswriter
    QR       KEY  Part of QUICKREF - blank template file
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## PEPSON.BAS

```bas
5 WIDTH "LPT1:",180
10 LPRINT CHR$(27)"@";
20 LPRINT CHR$(27)"2";
25 LPRINT CHR$(27)"O";
30 E$=CHR$(27)
35 F6P = 0: F2P = 0: 
40 ONN$(2)=E$+CHR$(87)+CHR$(1) : OFFF$(2)=E$+CHR$(87)+CHR$(0)
50 ONN$(3)=E$+CHR$(69)         : OFFF$(3)=E$+CHR$(70)
60 ONN$(4)=E$+CHR$(52)         : OFFF$(4)=E$+CHR$(53)
70 ONN$(5)=E$+CHR$(48)         : OFFF$(5)=E$+CHR$(50)
80 ONN$(6)=E$+CHR$(70)+CHR$(15): OFFF$(6)=CHR$(18)
90 ONN$(7)=E$+CHR$(71)         : OFFF$(7)=E$+CHR$(72)
100 ONN$(8)=E$+CHR$(45)+CHR$(1): OFFF$(8)=E$+CHR$(45)+CHR$(0)
105 LPI = 6 : DOTS.INCH=216
110 INPUT "Set the printer to the top of the page. Ready";C$
112 INPUT "COMMAND INDICATOR CHARACTER";Q$
114 IF C$ ="s" THEN STD = 1 ELSE STD = 0 :INPUT "lines per inch (d=6)";LPI
115 IF LPI = 0 THEN LPI = 6
116 IF NOT LPI=6 THEN XLPL=DOTS.INCH\LPI: OFFF$(5)=E$+CHR$(51)+CHR$(XLPL): ONN$(5)=OFFF$(5)
117 PRINT XLPL: IF NOT LPI = 6 THEN LPRINT OFFF$(5);
118 LENGTH = 66: LINE.LENGTH = 68
120 IF STD = 0 THEN INPUT "How many lines per page (d=66)";LENGTH
125 IF LENGTH = 0 THEN LENGTH = 66
130 IF STD = 0 THEN INPUT "what`s the line length (d=68)";LINE.LENGTH
135 IF LINE.LENGTH = 0 THEN LINE.LENGTH = 68
170 PAGE = 1:  SECTION.C$ = " ": ZZ$="a"
180 INPUT "Do you want lettered sections (Y or N)";SECT$
190 IF NOT(SECT$="Y" OR SECT$="y") THEN SECT$="-": GOTO 250
200 INPUT "What letter should I start with?  (1=`A' 2=`B' etc.)";S.N
205 IF S.N = 0 THEN S.N = 1
210 SECTION.N = 64+S.N
220 SECTION.C$ = CHR$(SECTION.N)
230 SECT$ = " "
250 LPRINT CHR$(27)"C"CHR$(LENGTH);
255 T.START = 6: T.END = 59: PAGE.LINE = 63: M.L = 8
260 IF STD = 0 THEN INPUT "On which line does the text begin (d=6)";T.START
265 IF T.START = 0 THEN T.START = 6
270 IF STD = 0 THEN INPUT "On which line does it end (d=59) ";T.END
275 IF T.END = 0 THEN T.END = 59
280 PITCH = 10
281 IF NOT STD = 0 THEN GOTO 290
282 INPUT "How many columns for left margin (d=8)";M$
283 IF M$="" THEN M.L = 8 ELSE M.L = VAL(M$)
285 IF NOT ((LINE.LENGTH + M.L) > 78) THEN GOTO 290
286 LINE.LENGTH = LINE.LENGTH - 1
287 GOTO 285
290 PARA.INDENT = 5: CC.ON.BUF = 0
300 TLINES = T.END - T.START + 1
310 MARG.BOT = LENGTH - T.END
320 LYNE = 1
330 FOR I=0 TO 8: FLAG(I)=0: NEXT I
340 MARG.TOP = T.START - 1
350 FOR I=1 TO MARG.TOP
360 LYNE = LYNE + 1 :LPRINT
370 NEXT I
380 MODE = 1: TEXT.COUNT = 0: BUFFER$ = "": LAST.TEXT$ = " "
385 T.IN.LINE = 0: L.ON = 1
390 IF STD = 0 THEN INPUT "On which line do you want the page numbers";PAGE.LINE
400 INPUT "What is the name of your file"; FILE$
410 '
420 OPEN FILE$ FOR INPUT  AS #1
430 '
440 '
460 ' SUBROUTINE NEW-LINE
470 '
480 IF EOF(1) THEN GOSUB 1360:GOSUB 1570: CLOSE: LPRINT CHR$(27)"@":END
490 CC.CODE = 1
500 LINE INPUT  #1,C$
510 LEN.C = LEN(C$)
520 IF NOT (LEN.C=0) THEN GOTO 550
530 IF FLAG (0) = 1 THEN GOSUB 1360
540 GOTO 460
550 LASTC$=RIGHT$(C$,1)
560 IF LASTC$ = " " THEN C$=LEFT$(C$,LEN.C-1): GOTO 510
570 FIRSTC$=LEFT$(C$,1)
580 IF (FLAG(0)=1) OR (NOT(FIRSTC$=" ")) THEN GOTO 620
590 LEN.C = LEN(C$)
600 C$ = RIGHT$(C$,LEN.C -1)
610 IF LEN.C =1 THEN GOTO 460 ELSE GOTO 570
620 IF FIRSTC$=Q$ THEN GOSUB 670 ELSE  GOSUB 760
630 IF NOT(LEN(C$) = 0) THEN GOTO 570
640 IF FLAG(0) = 1 THEN GOSUB 1360
650 GOTO 460
660 '
670 ' Subroutine control character
680 '
690 L.LEN = LEN(C$)
700 CC.CHAR$=MID$(C$,2,1)
705 IF CC.CHAR$=" " THEN GOTO 742
710 L.LEN = L.LEN -2
720 IF L.LEN>0 THEN C$=RIGHT$(C$,L.LEN) ELSE C$="" '  removes control character
730  GOSUB 1810  ' send control char to buffer
740 RETURN
741 '  here is a literal "!". keep it as text.
742 E.MARK$ = LEFT$(C$,2)
743 BUFFER$=BUFFER$ + E.MARK$
744 TEXT.COUNT = TEXT.COUNT + 2
745 L.LEN = L.LEN - 2
746 IF L.LEN>0 THEN C$=RIGHT$(C$,L.LEN) ELSE C$="" '  removes control character
747 RETURN
750 '
760 ' Subroutine accumulate good text from line
770 '
780 L.LEN = LEN (C$)
790 FOR I=1 TO L.LEN
800 IF MID$(C$,I,1) = Q$ THEN GOTO 870
810 NEXT I
820 TEXT$=C$
830 IF FLAG(1) = 1 THEN C$ = "":  RETURN '  if this is a centering line...
840 GOSUB 950' send text to buffer
850 C$=""
860 RETURN
870 ' (there's a cc.char in the string...)
880 TEXT$=LEFT$(C$,I-1)
890 L.LEN = L.LEN -I+1
900 C$=RIGHT$(C$,L.LEN)
910 IF FLAG(1) = 1 THEN RETURN
920 GOSUB 950'  send text to buffer
930 RETURN
940 '
950 'Subroutine text buffer
960 '
970 IF (TEXT.COUNT + (LEN(TEXT$)*10/PITCH) > LINE.LENGTH - 1) THEN GOTO 1070
980 TEXT.COUNT = TEXT.COUNT + (LEN(TEXT$)*10/PITCH)' add text to buffer
990 IF (LAST.TEXT$ = " " AND LEFT$(TEXT$,1) = " " AND FLAG(0)=0) THEN                   TEXT$ = RIGHT$(TEXT$,LEN(TEXT$) -1): ELSE GOTO 1010
1000 GOTO 990
1010 IF NOT (LAST.TEXT$ = " " OR LEFT$(TEXT$,1) = " ") THEN                        BUFFER$=BUFFER$ + SPACE$(1): TEXT.COUNT = TEXT.COUNT + PITCH/10
1020 BUFFER$=BUFFER$+TEXT$: T.IN.LINE = 1
1030 LAST.TEXT$= RIGHT$(BUFFER$,1)
1040 TEXT$ = ""
1050 RETURN' buffer isn't full yet.
1060 '
1070 GOSUB 1180 'find the max amount of text that fits
1080 IF NOT(LAST.TEXT$=" " OR LEFT$(MAX.TEXT$,1) = " ") THEN                            BUFFER$=BUFFER$ + SPACE$(1)
1090 BUFFER$=BUFFER$ + MAX.TEXT$: T.IN.LINE =1'--fill the buffer with amap
1100 LAST.TEXT$ = RIGHT$(BUFFER$,1)
1110 GOSUB 1360: L.ON = 0
1120 IF NOT(LYNE > T.END) THEN GOTO 1140
1130 GOSUB 1570: GOSUB 1710
1140 IF LEN(TEXT$) >0 THEN GOTO 970
1150 RETURN
1160 ' end text buffer
1170 '
1180 'Subroutine find the max amount of text that fits
1200 SPACE = LINE.LENGTH - TEXT.COUNT'-- this is the space available at EOL
1210 SPACE = SPACE * PITCH/10
1215 IF FLAG(0) = 1 THEN GOTO 1280
1220 FOR I=SPACE TO 1 STEP -1'   ----------\
1230 M$=MID$(TEXT$,I,1)
1240 IF M$=" " OR M$= "-" THEN GOTO 1320'  >- find a blank in the string
1250 NEXT I' ------------------------------/
1260 MAX.TEXT$= ""
1270 IF FLAG(0)=0 THEN RETURN
1280 MAX.TEXT$=TEXT$
1290 PRINT "pre-formatted line is too long." TEXT$
1300 INPUT "continue";Z$
1310 TEXT$ = "": RETURN
1320 MAX.TEXT$=LEFT$(TEXT$,I)'---this is as much as can be added to buffer
1330 TEXT$=RIGHT$(TEXT$,LEN(TEXT$)-I)'--this is what's left.
1340 RETURN
1350 '
1360 ' Subroutine print buffer and initialize it again
1370 '
1380 IF (FLAG(1)=1 OR FLAG(0)=1) THEN BLANKS=M.L ELSE BLANKS = INDENT+M.L
1382 DS$ = "": IF F2P=1 THEN DS$ = DS$ + ONN$(2)
1384           IF F6P=1 THEN DS$ = DS$ + ONN$(6)
1386 DSO$="": IF F2P=1 THEN DSO$ = DSO$ + OFFF$(2)
1388          IF F6P=1 THEN DSO$ = DSO$ + OFFF$(6)
1400 LPRINT DSO$;SPACE$(BLANKS);DS$; BUFFER$
1410 BUFFER$="": CC.ON.BUF = 0: T.IN.LINE = 0
1420 LAST.TEXT$ = " ": CENTER = 0
1430 IF FLAG(0)=1 OR FLAG(1)=1 THEN TEXT.COUNT = 0 ELSE TEXT.COUNT = INDENT
1440 LYNE = LYNE + 1
1445 F6P = FLAG(6): F2P = FLAG(2)
1450 IF NOT(LYNE > T.END) THEN RETURN
1460 IF P.END = 1 THEN P.END =0: RETURN   ELSE GOSUB 1570: GOSUB 1710
1470 RETURN
1480 '
1490 '
1500 'Subroutine stick control character on buffer
1510 '
1520 IF FLAG(CODE.NUMBER)=1 THEN BUFFER$=BUFFER$ + ONN$(CODE.NUMBER)                    ELSE BUFFER$ = BUFFER$ + OFFF$(CODE.NUMBER)
1530 CC.ON.BUF = CC.ON.BUF + 3
1540 RETURN
1550 '
1560 '
1570 'Subroutine go to the top of the next page
1580 '
1590 IF LYNE > T.END THEN GOTO  1640' take care of new page
1600 TOSKIP = T.END - LYNE
1610 FOR I=1 TO TOSKIP : LPRINT
1620 LYNE = LYNE + 1
1630 NEXT I
1640 FOR I = 1 TO MARG.BOT
1650 IF LYNE = PAGE.LINE THEN GOSUB 2870 ELSE LPRINT : LYNE=LYNE+1
1660 NEXT I
1670 PAGE = PAGE + 1
1680 RETURN
1690 '
1700 '
1710 ' subroutine top of new page
1720 IF NOT (ZZ$="") THEN INPUT "new page. ready?";ZZ$
1730 LYNE = 1
1740 FOR I = 1 TO MARG.TOP
1750 IF I= PAGE.LINE THEN GOSUB 2870 ELSE LPRINT :LYNE=LYNE+1
1760 NEXT I
1770 RETURN
1780 'END  (newpage)
1790 '
1800 '
1810 'Subroutine special code mode
1820 '
1830 IF NOT(CC.CHAR$= "*") THEN GOTO 1870
1840 IF TEXT.COUNT > 0 THEN GOSUB 1360
1850 IF FLAG(0) = 1 THEN FLAG(0) = 0:L.ON =1: ELSE FLAG(0) = 1: L.ON = 0
1860  RETURN
1870 V = VAL (CC.CHAR$)
1880 IF CC.CHAR$ = "0" THEN GOTO 1900
1890 IF NOT (0 < V  AND V < 7) THEN GOTO 1930' \___ handle indentation
1900 IF TEXT.COUNT > 0 THEN GOSUB 1360: L.ON = 1
1910 INDENT = 5 * VAL(CC.CHAR$)
1920 TEXT.COUNT = INDENT*10/PITCH  : RETURN
1930 IF NOT(CC.CHAR$ = "p" OR CC.CHAR$ = "P") THEN GOTO 1990
1940 IF T.IN.LINE = 1 THEN GOSUB 1360 :L.ON=0 :ELSE GOTO 1970
1950    BUFFER$ = BUFFER$ + SPACE$(PARA.INDENT)
1960    TEXT.COUNT = PARA.INDENT * 10/PITCH + TEXT.COUNT: RETURN
1970 'IF L.ON = 1  THEN GOSUB 1360
1980 'L.ON = 1
1985 GOTO 1950
1990 IF NOT(CC.CHAR$ = "L" OR CC.CHAR$="l") THEN GOTO 2020
2000 IF T.IN.LINE = 1 OR L.ON = 1 THEN GOSUB 1360
2010 L.ON = 1 : RETURN
2020 IF NOT (CC.CHAR$="!") THEN GOTO 2060
2030 IF TEXT.COUNT > INDENT THEN GOSUB 1360
2040 GOSUB 1570: GOSUB 1710
2050 L.ON = 1: RETURN
2060 IF NOT (CC.CHAR$="?") THEN GOTO 2100
2070 LINES.LEFT = T.END-LYNE
2080 IF LINES.LEFT < 10 THEN RETURN ELSE GOTO 2030
2090 RETURN
2100 IF NOT (CC.CHAR$="C" OR CC.CHAR$="c") THEN GOTO 2120 ELSE GOSUB 2270
2110  RETURN 'special code mode
2120 IF NOT (CC.CHAR$="$") THEN GOSUB 2460 ELSE GOSUB 2160
2130 RETURN
2140 '
2150 '
2160 'Subroutine next section
2170 '
2180 IF SECT$= "-" THEN RETURN
2190 GOSUB 1570
2200 PAGE = 1
2210 SECTION.N = SECTION.N + 1
2220 SECTION.C$ = CHR$(SECTION.N)
2230 GOSUB 1710
2240 RETURN
2250 '
2260 '
2270 ' Subroutine center the line
2280 '
2290 COLS = PITCH * (LINE.LENGTH/10)
2295 'IF CENTER = 1 THEN GOTO 2310
2300 IF T.IN.LINE > 0 THEN GOSUB 1360: L.ON =0'-- print the buffer
2305 IF CENTER = 1 THEN GOTO 2310
2310 TEXT.COUNT = 0
2320 FLAG(1) = 1
2330 GOSUB 760'---get text up to next Q$
2340 IF LEN(TEXT$) > LINE.LENGTH  THEN GOSUB 1180                                            ELSE MAX.TEXT$ = TEXT$ : TEXT$ = ""
2350 TOSKIP = (COLS -LEN(MAX.TEXT$))/2 '  compute leading blanks
2360 BUFFER$ = BUFFER$ + SPACE$(TOSKIP) '  add the blanks to buffer
2370 BUFFER$ = BUFFER$ + MAX.TEXT$: T.IN.LINE = 1'---add text to buffer
2380 LAST.TEXT$ = " "
2390 GOSUB 1360'-- print the line
2400 IF LEN(TEXT$)>0 THEN GOTO 2340
2410 FLAG(1) =0 : L.ON = 1: CENTER=1
2420 RETURN
2430 END' (SUBROUTINE SPECIAL CODE MODE)
2440 '
2450 '
2460 'Subroutine decode cc.char and send codes to buffer
2470 '
2480 IF NOT(CC.CHAR$="@") THEN GOTO 2530
2490 FOR I = 2 TO 8
2500    FLAG(I) = 0: BUFFER$ = BUFFER$ + OFFF$(I)
2510    NEXT I
2520    GOTO 2810
2530 IF NOT (CC.CHAR$="E" OR CC.CHAR$="e") THEN GOTO 2560                                 ELSE IF (CC.CHAR$="E") THEN FLAG(3) = 1  ELSE FLAG(3) = 0
2540 CODE.NUMBER = 3:  GOSUB 1490'  get buffer fixed
2550                            GOTO 2810
2560 IF NOT (CC.CHAR$="D" OR CC.CHAR$="d") THEN GOTO 2590                                ELSE IF (CC.CHAR$="D") THEN FLAG(2) = 1  ELSE FLAG(2) = 0
2570 CODE.NUMBER = 2: GOSUB 1490'  get buffer fixed
2580                            GOTO 2810
2590 IF NOT (CC.CHAR$="I" OR CC.CHAR$="i") THEN GOTO 2620                                ELSE IF (CC.CHAR$="I") THEN FLAG(4) = 1  ELSE FLAG(4) = 0
2600 CODE.NUMBER = 4: GOSUB 1490'  get buffer fixed
2610                            GOTO 2810
2620 IF NOT (CC.CHAR$="N" OR CC.CHAR$="n") THEN GOTO 2650                                ELSE IF (CC.CHAR$="N") THEN FLAG(5) = 1   ELSE FLAG(5) = 0
2630 CODE.NUMBER = 5: GOSUB 1490' get buffer fixed
2640                            GOTO 2810
2650 IF NOT (CC.CHAR$="T" OR CC.CHAR$="t") THEN GOTO 2680                                ELSE IF (CC.CHAR$="T") THEN FLAG(7) = 1 ELSE FLAG(7) = 0
2660 CODE.NUMBER = 7: GOSUB 1490' get buffer fixed
2670                            GOTO 2810
2680 IF NOT (CC.CHAR$="U" OR CC.CHAR$="u") THEN GOTO 2710                                ELSE IF (CC.CHAR$="U") THEN FLAG(8) = 1 ELSE FLAG(8) = 0
2690 CODE.NUMBER = 8: GOSUB 1490' get buffer fixed
2700                            GOTO 2810
2710 IF NOT (CC.CHAR$="S" OR CC.CHAR$="s") THEN GOTO 2740                                ELSE IF (CC.CHAR$="S") THEN FLAG(6) = 1 ELSE FLAG(6) = 0
2720 CODE.NUMBER = 6: GOSUB 1490' get buffer fixed
2730                            GOTO 2810
2740 IF NOT (CC.CHAR$="X")THEN FLAG(9)=0: GOTO 2790 ELSE FLAG(9)=1
2750 XC$=LEFT$(C$,2) : LEN.C = LEN(C$) - 2 : C$ = RIGHT$(C$,LEN.C)
2760 XX = VAL (XC$)
2770 BUFFER$=BUFFER$ + CHR$(XX)
2780 RETURN
2790 PRINT "I don't recognize this print control character: ";CC.CHAR$
2800 RETURN
2810 '
2820 PITCH = 10
2830 IF FLAG(6) = 1 THEN PITCH =  17
2840 IF FLAG(2) = 1 THEN PITCH = 5
2850 RETURN
2860 '
2870 ' PAGENUMBER
2880 '
2890 P.END = 1
2900 FOR J = 2 TO 8: BUFFER$= BUFFER$ + OFFF$(J): NEXT J
2910 PN = LINE.LENGTH /2 - 2
2920 BUFFER$=BUFFER$ + SPACE$(PN)
2930 BUFFER$=BUFFER$ + ONN$(3)+ONN$(7)+SECTION.C$ +" -" + STR$(PAGE)+SECT$
2940 GOSUB 2980
2950 BLANKS = 8: GOSUB 1400' PRINT BUFFER OUT AND EMPTY
2960 RETURN
2970 '
2980 ' Subroutine reset old cc.codes in new buffer
2990 '
3000 FOR K=2 TO 8
3010    IF FLAG(K) = 1 THEN BUFFER$ = BUFFER$ + ONN$(K)                                    ELSE BUFFER$ = BUFFER$ + OFFF$(K)
3020 NEXT K
3030 RETURN
```

## PSCREEN.BAS

```bas
5 WIDTH "SCRN:",80
10 'LPRINT CHR$(27)"@";
20 'LPRINT CHR$(27)"2";
30 E$=CHR$(27)
40 ONN$(2)=E$+CHR$(87)+CHR$(1) : OFFF$(2)=E$+CHR$(87)+CHR$(0)
50 ONN$(3)=E$+CHR$(69)         : OFFF$(3)=E$+CHR$(70)
60 ONN$(4)=E$+CHR$(52)         : OFFF$(4)=E$+CHR$(53)
70 ONN$(5)=E$+CHR$(48)         : OFFF$(5)=E$+CHR$(50)
80 ONN$(6)=E$+CHR$(70)+CHR$(15): OFFF$(6)=CHR$(18)
90 ONN$(7)=E$+CHR$(71)         : OFFF$(7)=E$+CHR$(72)
100 ONN$(8)=E$+CHR$(45)+CHR$(1): OFFF$(8)=E$+CHR$(45)+CHR$(0)
110 INPUT "Set the printer to the top of the page. ";C$
115 IF C$ = "s"  THEN STD = 1 ELSE STD = 0
116 INPUT "What is the control character indicator?";Q$
118 LENGTH = 66
120 IF STD=0 THEN INPUT "How many lines per page";LENGTH
121 IF LENGTH = 0 THEN LENGTH = 66
125 LINE.LENGTH = 70
130 IF STD=0 THEN INPUT "what`s the line length";LINE.LENGTH
135 IF LINE.LENGTH = 0 THEN LINE.LENGTH = 70
170 PAGE = 1:  SECTION.C$ = " ": ZZ$="a"
180 INPUT "Do you want lettered sections (Y or N)";SECT$
190 IF NOT(SECT$="Y" OR SECT$="y") THEN SECT$="-": GOTO 240
200 INPUT "What letter should I start with?  (1=`A' 2=`B' etc.)";S.N
205 IF S.N =0 THEN S.N = 1
210 SECTION.N = 64+S.N
220 SECTION.C$ = CHR$(SECTION.N)
230 SECT$ = " "
240 'LPRINT CHR$(27)"O";
250 'LPRINT CHR$(27)"C"CHR$(1)CHR$(LENGTH);
255 T.START = 6: T.END = 59: M.L = 8
260 IF STD = 0 THEN INPUT "On which line does the text begin";T.START
265 IF T.START = 0 THEN T.START = 6
270 IF STD = 0 THEN INPUT "On which line does it end        ";T.END
275 IF T.END = 0 THEN T.END = 59
280 PITCH = 10
281 IF NOT STD = 0 THEN GOTO 290
282 INPUT "How many columns for left margin (d=8)";M$
283 IF M$="" THEN M.L = 8 ELSE M.L = VAL(M$)
285 IF NOT ((LINE.LENGTH + M.L) > 78) THEN GOTO 290
286 LINE.LENGTH = LINE.LENGTH - 1
287 GOTO 285
290 PARA.INDENT = 5: CC.ON.BUF = 0
300 TLINES = T.END - T.START + 1
310 MARG.BOT = LENGTH - T.END
320 LYNE = 1
330 FOR I=0 TO 8: FLAG(I)=0: NEXT I
340 MARG.TOP = T.START - 1
350 FOR I=1 TO MARG.TOP
360 LYNE = LYNE + 1 :PRINT
370 NEXT I
380 MODE = 1: TEXT.COUNT = 0: BUFFER$ = "": LAST.TEXT$ = " "
385 T.IN.LINE = 0: L.ON = 1: PAGE.LINE = 63
390 IF STD=0 THEN INPUT "On which line do you want the page numbers";PAGE.LINE
400 INPUT "What is the name of your file"; FILE$
410 '
420 OPEN FILE$ FOR INPUT  AS #1
430 '
440 '
450 'LPRINT CHR$(27)"@";
460 ' SUBROUTINE NEW-LINE
470 '
480 IF EOF(1) THEN GOSUB 1360: CLOSE:END
490 CC.CODE = 1
500 LINE INPUT  #1,C$
510 LEN.C = LEN(C$)
520 IF NOT (LEN.C=0) THEN GOTO 550
530 IF FLAG (0) = 1 THEN GOSUB 1360
540 GOTO 460
550 LASTC$=RIGHT$(C$,1)
560 IF LASTC$ = " " THEN C$=LEFT$(C$,LEN.C-1): GOTO 510
570 FIRSTC$=LEFT$(C$,1)
580 IF (FLAG(0)=1) OR (NOT(FIRSTC$=" ")) THEN GOTO 620
590 LEN.C = LEN(C$)
600 C$ = RIGHT$(C$,LEN.C -1)
610 IF LEN.C =1 THEN GOTO 460 ELSE GOTO 570
620 IF FIRSTC$=Q$ THEN GOSUB 670 ELSE  GOSUB 760
630 IF NOT(LEN(C$) = 0) THEN GOTO 570
640 IF FLAG(0) = 1 THEN GOSUB 1360
650 GOTO 460
660 '
670 ' Subroutine control character
680 '
690 L.LEN = LEN(C$)
700 CC.CHAR$=MID$(C$,2,1)
705 IF CC.CHAR$=" " THEN GOTO 742
710 L.LEN = L.LEN -2
720 IF L.LEN>0 THEN C$=RIGHT$(C$,L.LEN) ELSE C$="" '  removes control character
730  GOSUB 1810  ' send control char to buffer
740 RETURN
741 '  here is a literal Q$. keep it as text.
742 E.MARK$ = LEFT$(C$,2)
743 BUFFER$=BUFFER$ + E.MARK$
744 TEXT.COUNT = TEXT.COUNT + 2
745 L.LEN = L.LEN - 2
746 IF L.LEN>0 THEN C$=RIGHT$(C$,L.LEN) ELSE C$="" '  removes control character
747 RETURN
750 '
760 ' Subroutine accumulate good text from line
770 '
780 L.LEN = LEN (C$)
790 FOR I=1 TO L.LEN
800 IF MID$(C$,I,1) = Q$ THEN GOTO 870
810 NEXT I
820 TEXT$=C$
830 IF FLAG(1) = 1 THEN C$ = "":  RETURN '  if this is a centering line...
840 GOSUB 950' send text to buffer
850 C$=""
860 RETURN
870 ' (there's a cc.char in the string...)
880 TEXT$=LEFT$(C$,I-1)
890 L.LEN = L.LEN -I+1
900 C$=RIGHT$(C$,L.LEN)
910 IF FLAG(1) = 1 THEN RETURN
920 GOSUB 950'  send text to buffer
930 RETURN
940 '
950 'Subroutine text buffer
960 '
970 IF (TEXT.COUNT + (LEN(TEXT$)*PITCH/10) > LINE.LENGTH - 1) THEN GOTO 1070
980 TEXT.COUNT = TEXT.COUNT + (LEN(TEXT$)*PITCH/10)' add text to buffer
990 IF (LAST.TEXT$ = " " AND LEFT$(TEXT$,1) = " " AND FLAG(0)=0) THEN                   TEXT$ = RIGHT$(TEXT$,LEN(TEXT$) -1): ELSE GOTO 1010
1000 GOTO 990
1010 IF NOT (LAST.TEXT$ = " " OR LEFT$(TEXT$,1) = " ") THEN                        BUFFER$=BUFFER$ + SPACE$(1): TEXT.COUNT = TEXT.COUNT + PITCH/10
1020 BUFFER$=BUFFER$+TEXT$: T.IN.LINE = 1
1030 LAST.TEXT$= RIGHT$(BUFFER$,1)
1040 TEXT$ = ""
1050 RETURN' buffer isn't full yet.
1060 '
1070 GOSUB 1180 'find the max amount of text that fits
1080 IF NOT(LAST.TEXT$=" " OR LEFT$(MAX.TEXT$,1) = " ") THEN                            BUFFER$=BUFFER$ + SPACE$(1)
1090 BUFFER$=BUFFER$ + MAX.TEXT$: T.IN.LINE =1'--fill the buffer with amap
1100 LAST.TEXT$ = RIGHT$(BUFFER$,1)
1110 GOSUB 1360: L.ON = 0
1120 IF NOT(LYNE > T.END) THEN GOTO 1140
1130 GOSUB 1570: GOSUB 1710
1140 IF LEN(TEXT$) >0 THEN GOTO 970
1150 RETURN
1160 ' end text buffer
1170 '
1180 'Subroutine find the max amount of text that fits
1200 SPACE = LINE.LENGTH - TEXT.COUNT'-- this is the space available at EOL
1210 SPACE = SPACE * PITCH/10
1215 IF FLAG(0) = 1 THEN GOTO 1280
1220 FOR I=SPACE TO 1 STEP -1'   ----------\
1230 M$=MID$(TEXT$,I,1)
1240 IF M$=" " OR M$= "-" THEN GOTO 1320'  >- find a blank in the string
1250 NEXT I' ------------------------------/
1260 MAX.TEXT$= ""
1270 IF FLAG(0)=0 THEN RETURN
1280  MAX.TEXT$=TEXT$
1290 PRINT "pre-formatted line is too long." TEXT$
1300 INPUT "continue";Z$
1310 TEXT$ = "": RETURN
1320 MAX.TEXT$=LEFT$(TEXT$,I)'---this is as much as can be added to buffer
1330 TEXT$=RIGHT$(TEXT$,LEN(TEXT$)-I)'--this is what's left.
1340 RETURN
1350 '
1360 ' Subroutine print buffer and initialize it again
1370 '
1380 IF (FLAG(1)=1 OR FLAG(0)=1) THEN BLANKS =M.L ELSE BLANKS = INDENT +M.L
1400 PRINT SPACE$(BLANKS); BUFFER$
1410 BUFFER$="": CC.ON.BUF = 0: T.IN.LINE = 0
1420 LAST.TEXT$ = " ": CENTER = 0
1430 IF FLAG(1)=1 OR FLAG(0)=1 THEN TEXT.COUNT = 0 ELSE TEXT.COUNT = INDENT
1440 LYNE = LYNE + 1
1450 IF NOT(LYNE > T.END) THEN RETURN
1460 IF P.END = 1 THEN P.END =0: RETURN   ELSE GOSUB 1570: GOSUB 1710
1470 RETURN
1480 '
1490 '
1500 'Subroutine stick control character on buffer
1510 '
1520 'IF FLAG(CODE.NUMBER)=1 THEN BUFFER$=BUFFER$ + ONN$(CODE.NUMBER)                    ELSE BUFFER$ = BUFFER$ + OFFF$(CODE.NUMBER)
1530 CC.ON.BUF = CC.ON.BUF + 3
1540 RETURN
1550 '
1560 '
1570 'Subroutine go to the top of the next page
1580 '
1590 IF LYNE > T.END THEN GOTO  1640' take care of new page
1600 TOSKIP = T.END - LYNE
1610 FOR I=1 TO TOSKIP : PRINT
1620 LYNE = LYNE + 1
1630 NEXT I
1640 FOR I = 1 TO MARG.BOT
1650 IF LYNE = PAGE.LINE THEN GOSUB 2870 ELSE PRINT : LYNE=LYNE+1
1660 NEXT I
1670 PAGE = PAGE + 1
1680 RETURN
1690 '
1700 '
1710 ' subroutine top of new page
1720 IF NOT (ZZ$="") THEN INPUT "new page. ready?";ZZ$
1730 LYNE = 1
1740 FOR I = 1 TO MARG.TOP
1750 IF I= PAGE.LINE THEN GOSUB 2870 ELSE PRINT :LYNE=LYNE+1
1760 NEXT I
1770 RETURN
1780 'END  (newpage)
1790 '
1800 '
1810 'Subroutine special code mode
1820 '
1830 IF NOT(CC.CHAR$= "*") THEN GOTO 1870
1840 IF TEXT.COUNT > 0 THEN GOSUB 1360
1850 IF FLAG(0) = 1 THEN FLAG(0) = 0:L.ON =1: ELSE FLAG(0) = 1: L.ON = 0
1860  RETURN
1870 V = VAL (CC.CHAR$)
1880 IF CC.CHAR$ = "0" THEN GOTO 1900
1890 IF NOT (0 < V  AND V < 7) THEN GOTO 1930' \___ handle indentation
1900 IF TEXT.COUNT > 0 THEN GOSUB 1360: L.ON = 1
1910 INDENT = 5 * VAL(CC.CHAR$)
1920 TEXT.COUNT = INDENT  : RETURN
1930 IF NOT(CC.CHAR$ = "p" OR CC.CHAR$ = "P") THEN GOTO 1990
1940 IF T.IN.LINE = 1 THEN GOSUB 1360 :L.ON=0 :ELSE GOTO 1970
1950    BUFFER$ = BUFFER$ + SPACE$(PARA.INDENT)
1960    TEXT.COUNT = PARA.INDENT+ TEXT.COUNT: RETURN
1970 'IF L.ON = 1  THEN GOSUB 1360
1980 'L.ON = 1: GOTO 1950
1985 GOTO 1950
1990 IF NOT(CC.CHAR$ = "L" OR CC.CHAR$="l") THEN GOTO 2020
2000 IF T.IN.LINE = 1 OR L.ON = 1 THEN GOSUB 1360
2010 L.ON = 1 : RETURN
2020 IF NOT (CC.CHAR$="!") THEN GOTO 2060
2030 IF TEXT.COUNT > INDENT THEN GOSUB 1360
2040 GOSUB 1570: GOSUB 1710
2050 L.ON = 1: RETURN
2060 IF NOT (CC.CHAR$="?") THEN GOTO 2100
2070 LINES.LEFT = T.END-LYNE
2080 IF LINES.LEFT < TLINES/2 THEN RETURN ELSE GOTO 2030
2090 RETURN
2100 IF NOT (CC.CHAR$="C" OR CC.CHAR$="c") THEN GOTO 2120 ELSE GOSUB 2270
2110  RETURN 'special code mode
2120 IF NOT (CC.CHAR$="$") THEN GOSUB 2460 ELSE GOSUB 2160
2130 RETURN
2140 '
2150 '
2160 'Subroutine next section
2170 '
2180 IF SECT$= "-" THEN RETURN
2190 GOSUB 1570
2200 PAGE = 1
2210 SECTION.N = SECTION.N + 1
2220 SECTION.C$ = CHR$(SECTION.N)
2230 GOSUB 1710
2240 RETURN
2250 '
2260 '
2270 ' Subroutine center the line
2280 '
2290 COLS = PITCH * (LINE.LENGTH/10)
2300 IF T.IN.LINE > 0 THEN GOSUB 1360: L.ON =0'-- print the buffer
2305 IF CENTER = 1 THEN GOTO 2310
2310 TEXT.COUNT = 0
2320 FLAG(1) = 1
2330 GOSUB 760'---get text up to next Q$
2340 IF LEN(TEXT$) > LINE.LENGTH  THEN GOSUB 1180                                            ELSE MAX.TEXT$ = TEXT$ : TEXT$ = ""
2350 TOSKIP = (COLS -LEN(MAX.TEXT$))/2 '  compute leading blanks
2360 BUFFER$ = BUFFER$ + SPACE$(TOSKIP) '  add the blanks to buffer
2370 BUFFER$ = BUFFER$ + MAX.TEXT$: T.IN.LINE = 1'---add text to buffer
2380 LAST.TEXT$ = " "
2390 GOSUB 1360'-- print the line
2400 IF LEN(TEXT$)>0 THEN GOTO 2340
2410 FLAG(1) =0 : L.ON = 1: CENTER = 1
2420 RETURN
2430 END' (SUBROUTINE SPECIAL CODE MODE)
2440 '
2450 '
2460 'Subroutine decode cc.char and send codes to buffer
2470 '
2480 IF NOT(CC.CHAR$="@") THEN GOTO 2530
2490 FOR I = 2 TO 8
2500    FLAG(I) = 0' BUFFER$ = BUFFER$ + OFFF$(I)
2510    NEXT I
2520    GOTO 2810
2530 IF NOT (CC.CHAR$="E" OR CC.CHAR$="e") THEN GOTO 2560                                 ELSE IF (CC.CHAR$="E") THEN FLAG(3) = 1  ELSE FLAG(3) = 0
2540 CODE.NUMBER = 3:  GOSUB 1490'  get buffer fixed
2550                            GOTO 2810
2560 IF NOT (CC.CHAR$="D" OR CC.CHAR$="d") THEN GOTO 2590                                ELSE IF (CC.CHAR$="D") THEN FLAG(2) = 1  ELSE FLAG(2) = 0
2570 CODE.NUMBER = 2: GOSUB 1490'  get buffer fixed
2580                            GOTO 2810
2590 IF NOT (CC.CHAR$="I" OR CC.CHAR$="i") THEN GOTO 2620                                ELSE IF (CC.CHAR$="I") THEN FLAG(4) = 1  ELSE FLAG(4) = 0
2600 CODE.NUMBER = 4: GOSUB 1490'  get buffer fixed
2610                            GOTO 2810
2620 IF NOT (CC.CHAR$="N" OR CC.CHAR$="n") THEN GOTO 2650                                ELSE IF (CC.CHAR$="N") THEN FLAG(5) = 1   ELSE FLAG(5) = 0
2630 CODE.NUMBER = 5: GOSUB 1490' get buffer fixed
2640                            GOTO 2810
2650 IF NOT (CC.CHAR$="T" OR CC.CHAR$="t") THEN GOTO 2680                                ELSE IF (CC.CHAR$="T") THEN FLAG(7) = 1 ELSE FLAG(7) = 0
2660 CODE.NUMBER = 7: GOSUB 1490' get buffer fixed
2670                            GOTO 2810
2680 IF NOT (CC.CHAR$="U" OR CC.CHAR$="u") THEN GOTO 2710                                ELSE IF (CC.CHAR$="U") THEN FLAG(8) = 1 ELSE FLAG(8) = 0
2690 CODE.NUMBER = 8: GOSUB 1490' get buffer fixed
2700                            GOTO 2810
2710 IF NOT (CC.CHAR$="S" OR CC.CHAR$="s") THEN GOTO 2740                                ELSE IF (CC.CHAR$="S") THEN FLAG(6) = 1 ELSE FLAG(6) = 0
2720 CODE.NUMBER = 6: GOSUB 1490' get buffer fixed
2730                            GOTO 2810
2740 IF NOT (CC.CHAR$="X")THEN FLAG(9)=0: GOTO 2790 ELSE FLAG(9)=1
2750 XC$=LEFT$(C$,2) : LEN.C = LEN(C$) - 2 : C$ = RIGHT$(C$,LEN.C)
2760 XX = VAL (XC$)
2770 'BUFFER$=BUFFER$ + CHR$(XX)
2780 RETURN
2790 PRINT "I don't recognize this print control character: ";CC.CHAR$
2800 RETURN
2810 '
2820 PITCH = 10
2830 IF FLAG(6) = 1 THEN PITCH = PITCH * 1.7
2840 IF FLAG(2) = 1 THEN PITCH = PITCH * .5
2850 RETURN
2860 '
2870 ' PAGENUMBER
2880 '
2890 P.END = 1
2900 FOR J = 2 TO 8: BUFFER$= BUFFER$ :NEXT J
2910 BUFFER$=BUFFER$ '+ ONN$(3)+ONN$(7)
2920 PN = LINE.LENGTH /2
2930 BUFFER$=BUFFER$ + SPACE$(PN)+ SECTION.C$ + " -" + STR$(PAGE)+SECT$
2940 GOSUB 2980
2950 BLANKS = 8: GOSUB 1400' PRINT BUFFER OUT AND EMPTY
2960 RETURN
2970 '
2980 ' Subroutine reset old cc.codes in new buffer
2990 '
3000 FOR K=2 TO 8
3010 '  IF FLAG(K) = 1 THEN BUFFER$ = BUFFER$ + ONN$(K)                                    ELSE BUFFER$ = BUFFER$ + OFFF$(K)
3020 NEXT K
3030 RETURN
```

## QUICKREF.BAS

```bas
10 '
20 '
30 ' QUICKREF: A Quick Refresh For Function Keys    (Version 1.0)
40 ' (c) Copyright 1983, LSI Associates       All Rights Reserved
50 '
60 ' by Sheila Wersal
70 '
80 '
90 '
100 '
110 ' **************************** NOTICE *****************************
120 ' *  A  limited license is granted to all users of this program,  *
130 ' *  to make copies of this program and distribute them to other  *
140 ' *  users, on the following conditions:                          *
150 ' *     1. The notices contained in lines  10 through 640 of the  *
160 ' *        program are not to be altered or removed.              *
170 ' *     2. The program is not to be distributed to others in      *
180 ' *        modified form.                                         *
190 ' *     3. No fee is to be charged for copying or distributing    *
200 ' *        the program without an express written agreement with  *
210 ' *        LSI ASSOCIATES, P.O. Box G, Gilroy, CA  94020.         *
220 ' *                                                               *
230 ' *               (c) COPYRIGHT 1983 LSI Associates               *
240 ' *****************************************************************
250 '
260 '
270 '
280 GOTO 370   ' BRANCH TO MAIN LINE PROGRAM
290 GOTO 1020   ' TEMPLATE ENTRY
300 GOTO 1460  ' WRITE FILE
310 GOTO 1960  ' PRINT FILE
320 GOTO 2810  ' READ FILE
330 GOTO 3310  ' PUT TO SCREEN
340 GOTO 4160  ' ERROR ROUTINE
350 GOTO 4250  ' FUNCTION KEYS
360 GOTO 4320  ' KEYBOARD ENTRY
370 COLOR 7,0:KEY OFF:CLS : LOCATE 6,1
380 PRINT "      ╒═══════════════════════════════════════════════════════════════════╕"
390 PRINT "      │                                                                   │"
400 PRINT "      │                                                                   │"
410 PRINT "      │                                                                   │"
420 PRINT "      │                                                                   │"
430 PRINT "      │                                                                   │"
440 PRINT "      │                                                                   │"
450 PRINT "      │                                                                   │"
460 PRINT "      │                                                                   │"
470 PRINT "      ╘═══════════════════════════════════════════════════════════════════╛"
480 LOCATE 9,33: PRINT "Q U I C K   R E F"
490 LOCATE 12,25 : PRINT "(c) COPYRIGHT 1983 LSI Associates "
500 FOR DELAY = 1 TO 2000 : NEXT
510 FOR N=1 TO 10 : KEY N,"":NEXT
520 CLS
530 LOCATE 1,10:PRINT "This program will generate a listing of the function keys for any"
540 LOCATE 2,7 :PRINT "application  program  you desire.   This listing will be apporx. 2x8"
550 LOCATE 3,7 :PRINT "inches in size and will lay on the top  keyboard  ledge  very nicely"
560 LOCATE 4,7 :PRINT "providing quick refresh to the purpose of the function keys relative"
570 LOCATE 5,7 :PRINT "to the job you are running."
580 LOCATE 7,16:PRINT "For samples list the following files with opton 3."
590 LOCATE 9,23:PRINT "BASIC      EW      TEMPLE     QR"
600 LOCATE 14,15: PRINT "If you have used this program and found it of value  "
610 LOCATE 15,14: PRINT "your contribution ($10 suggested) will be appreciated."
620 LOCATE 17,33: PRINT "LSI Associates"
630 LOCATE 18,26: PRINT "P.O. Box G, Gilroy, CA 95020"
640 LOCATE 20,10: PRINT "You are encouraged to copy and share this program with others."
650 LOCATE 23,25 :COLOR 0,7 : PRINT "  PRESS ANY KEY TO CONTINUE  " : COLOR 7,0
660 ANYK$=INKEY$ : IF ANYK$="" GOTO 660
670 DIM FKEY$(10),AKEY$(10),CKEY$(10),SKEY$(10)
680 FOR L=1 TO 10 :FKEY$(L)="":AKEY$(L)="":CKEY$(L)="":SKEY$(L)="":NEXT L
690 TM$="n" : ANS$="" : ROWA$="" : ROWC$="" : ROWS$="" : TITLE$=""
700 CLS :COLOR 7,0:PRINT
710 LOCATE 2,11:COLOR 0,7:PRINT "F1";:COLOR 7,0
720 LOCATE 2,15:PRINT "CREATE";
730 LOCATE 2,31:COLOR 0,7:PRINT "F4";:COLOR 7,0
740 LOCATE 2,35:PRINT "DISPLAY";
750 LOCATE 2,51:COLOR 0,7:PRINT "F10";:COLOR 7,0
760 LOCATE 2,56:PRINT "EXIT TO DOS"
770 LOCATE 4,11:COLOR 0,7:PRINT "F2";:COLOR 7,0
780 LOCATE 4,15:PRINT "UPDATE"
790 LOCATE 4,31:COLOR 0,7:PRINT "F5";:COLOR 7,0
800 LOCATE 4,35:PRINT "DELETE"
810 LOCATE 4,51:COLOR 0,7:PRINT "ESC";:COLOR 7,0
820 LOCATE 4,56:PRINT "CANCEL Operation"
830 LOCATE 6,11:COLOR 0,7:PRINT "F3";:COLOR 7,0
840 LOCATE 6,15:PRINT "PRINT";
850 LOCATE 6,31:COLOR 0,7:PRINT "F6";:COLOR 7,0
860 LOCATE 6,35:PRINT "END Creation or Update"
870 PRINT
880 PRINT : LINE2$=STRING$(75,"-") : PRINT "Existing KEY files on disk" : PRINT LINE2$
890 FILES "*.KEY"
900 PRINT : PRINT LINE2$
910 K$=INKEY$ : IF K$ = "" GOTO 910
920 IF LEN (K$) <2 THEN BEEP: ELSE GOTO 940
930 GOTO 910
940 IF ASC(MID$(K$,2,1))=59 THEN GOSUB 4250
950 IF ASC(MID$(K$,2,1))=60 THEN GOSUB 4260
960 IF ASC(MID$(K$,2,1))=61 THEN GOSUB 4270
970 IF ASC(MID$(K$,2,1))=62 THEN GOSUB 4280
980 IF ASC(MID$(K$,2,1))=63 THEN GOSUB 4290
990 IF ASC(MID$(K$,2,1))=68 THEN GOTO  1050
1000 BEEP : GOTO 910
1010 ' ---------------------------- ROW INPUT ----------------------------------
1020 PRINT : PRINT "FILE NAME ?  [Eight characters max (no extension)] ........ [ "FL$" ]";:LOCATE ,52:GOSUB 4470
1030 IF ANS$<>"" THEN FL$=ANS$
1040 ON S GOTO 1070,2810,2810,2810,1060,1460
1050 CLS:SYSTEM
1060 ON ERROR GOTO 4160:KILL FL$+".KEY": GOTO 680
1070 V=CSRLIN:LOCATE 25,25:COLOR 0,15:PRINT " F6 to END Creation or Update ";:LOCATE V,1:COLOR 7,0:PRINT
1080 FOR N= 1 TO 5 :KEY (N) OFF:NEXT:KEY (10) OFF
1090 PRINT "PROGRAM NAME"; TAB(20) "........";" [ ";TITLE$;" ]  ";:LOCATE,20
1100 GOSUB 4320 : IF ANS$<>"" THEN TITLE$=ANS$
1110 PRINT
1120 FOR K = 1 TO 10
1130 PRINT "FUNCTION KEYS 1 -> 10";"  (";K;")  ";TAB(36) ".........";"  [ ";FKEY$(K);" ]";:LOCATE,36
1140 GOSUB 4320 : IF ANS$<>"" THEN FKEY$(K)=ANS$
1150 PRINT
1160 NEXT K
1170 PRINT "TITLE FOR SECOND ROW ";
1180 PRINT "  ............";"  [ ";ROWA$;" ]";:LOCATE ,24
1190 GOSUB 4320 : IF ANS$<>"" THEN ROWA$=ANS$
1200 PRINT
1210 FOR A = 1 TO 10
1220 PRINT ROWA$; " KEYS 1 -> 10";"  (";A;")  ";TAB(36) ".........";"  [ ";AKEY$(A);" ]";:LOCATE,36
1230 GOSUB 4320 : IF ANS$<>"" THEN AKEY$(A)=ANS$
1240 PRINT
1250 NEXT A
1260 PRINT "TITLE FOR THIRD ROW ";
1270 PRINT "   ............";"  [ ";ROWC$;" ]";:LOCATE ,24
1280 GOSUB 4320 : IF ANS$<>"" THEN ROWC$=ANS$
1290 PRINT
1300 FOR C = 1 TO 10
1310 PRINT ROWC$; " KEYS 1 -> 10";"  (";C;")  ";TAB(36) ".........";"  [ ";CKEY$(C);" ]";:LOCATE,36
1320 GOSUB 4320 : IF ANS$<>"" THEN CKEY$(C)=ANS$
1330 PRINT
1340 NEXT C
1350 PRINT "TITLE FOR FOURTH ROW ";
1360 PRINT "  ............";"  [ ";ROWS$;" ]";:LOCATE ,24
1370 GOSUB 4320 : IF ANS$<>"" THEN ROWS$=ANS$
1380 PRINT
1390 FOR S = 1 TO 10
1400 PRINT ROWS$; " KEYS 1 -> 10";"  (";S;")  ";TAB(36) ".........";"  [ ";SKEY$(S);" ]";:LOCATE,36
1410 GOSUB 4320 : IF ANS$<> "" THEN SKEY$(S)=ANS$
1420 PRINT
1430 NEXT S
1440 GOTO 1460
1450 ' ---------------------------- WRITE FILE ---------------------------------
1460 OPEN FL$+".KEY" FOR OUTPUT AS #1
1470 PRINT #1, TM$
1480 PRINT #1, TITLE$
1490 PRINT #1, FKEY$(1)
1500 PRINT #1, FKEY$(2)
1510 PRINT #1, FKEY$(3)
1520 PRINT #1, FKEY$(4)
1530 PRINT #1, FKEY$(5)
1540 PRINT #1, FKEY$(6)
1550 PRINT #1, FKEY$(7)
1560 PRINT #1, FKEY$(8)
1570 PRINT #1, FKEY$(9)
1580 PRINT #1, FKEY$(10)
1590 PRINT #1, ROWA$
1600 PRINT #1, AKEY$(1)
1610 PRINT #1, AKEY$(2)
1620 PRINT #1, AKEY$(3)
1630 PRINT #1, AKEY$(4)
1640 PRINT #1, AKEY$(5)
1650 PRINT #1, AKEY$(6)
1660 PRINT #1, AKEY$(7)
1670 PRINT #1, AKEY$(8)
1680 PRINT #1, AKEY$(9)
1690 PRINT #1, AKEY$(10)
1700 PRINT #1, ROWC$
1710 PRINT #1, CKEY$(1)
1720 PRINT #1, CKEY$(2)
1730 PRINT #1, CKEY$(3)
1740 PRINT #1, CKEY$(4)
1750 PRINT #1, CKEY$(5)
1760 PRINT #1, CKEY$(6)
1770 PRINT #1, CKEY$(7)
1780 PRINT #1, CKEY$(8)
1790 PRINT #1, CKEY$(9)
1800 PRINT #1, CKEY$(10)
1810 PRINT #1, ROWS$
1820 PRINT #1, SKEY$(1)
1830 PRINT #1, SKEY$(2)
1840 PRINT #1, SKEY$(3)
1850 PRINT #1, SKEY$(4)
1860 PRINT #1, SKEY$(5)
1870 PRINT #1, SKEY$(6)
1880 PRINT #1, SKEY$(7)
1890 PRINT #1, SKEY$(8)
1900 PRINT #1, SKEY$(9)
1910 PRINT #1, SKEY$(10)
1920 CLOSE #1
1930 KEY (6) OFF
1940 CLS :GOTO 680
1950 ' --------------------------- PRINT FILE ---------------------------------
1960 PRINT :PRINT : PRINT "ALIGN PAPER AND PRESS ANY KEY WHEN READY"
1970 P$=INKEY$ : IF P$ = "" GOTO 1970
1980 IF P$=CHR$(27) GOTO 680
1990 ON ERROR GOTO 4160
2000 WIDTH "LPT1:",255:LPRINT CHR$(15);
2010 PRINT : PRINT "Printing Template............."
2020 LINE3$ = STRING$(131,"-")
2030 LPRINT LINE3$;
2040 WIDTH "LPT1:",80:LPRINT CHR$(27)"E";CHR$(27)"G"
2050 IF TM$="N" OR TM$="n" THEN PAD = (38-LEN(TITLE$))\2 ELSE 2070
2060 GOTO 2080
2070 PAD = (36-LEN(TITLE$))\2
2080 TITLE$ = STRING$(PAD," ")+TITLE$
2090 LPRINT CHR$(142)+TITLE$;
2100 LPRINT CHR$(27)"F";CHR$(27)"H";
2110 LPRINT CHR$(15);:IF TM$="C" OR TM$="c" THEN LPRINT " (c)";
2120 IF TM$="TM" OR TM$="tm" THEN LPRINT " (tm)" ELSE LPRINT
2130 LPRINT CHR$(144):WIDTH "LPT1:",255
2140 LINE1$ = STRING$(131,"*")
2150 LPRINT LINE1$
2160 LPRINT "*   FUNCTION KEY";
2170 LPRINT TAB(20) "---F 1---";
2180 LPRINT TAB(31) "---F 2---";
2190 LPRINT TAB(42) "---F 3---";
2200 LPRINT TAB(53) "---F 4---";
2210 LPRINT TAB(64) "---F 5---";
2220 LPRINT TAB(75) "---F 6---";
2230 LPRINT TAB(86) "---F 7---";
2240 LPRINT TAB(97) "---F 8---";
2250 LPRINT TAB(108) "---F 9---";
2260 LPRINT TAB(119) "---F10---";
2270 LPRINT TAB(131) "*"
2280 LPRINT "* ";
2290 LPRINT TAB(20) FKEY$(1);
2300 LPRINT TAB(31) FKEY$(2);
2310 LPRINT TAB(42) FKEY$(3);
2320 LPRINT TAB(53) FKEY$(4);
2330 LPRINT TAB(64) FKEY$(5);
2340 LPRINT TAB(75) FKEY$(6);
2350 LPRINT TAB(86) FKEY$(7);
2360 LPRINT TAB(97) FKEY$(8);
2370 LPRINT TAB(108) FKEY$(9);
2380 LPRINT TAB(119) FKEY$(10);
2390 LPRINT TAB(131) "*"
2400 LPRINT "*  "ROWA$;
2410 LPRINT TAB(20) AKEY$(1);
2420 LPRINT TAB(31) AKEY$(2);
2430 LPRINT TAB(42) AKEY$(3);
2440 LPRINT TAB(53) AKEY$(4);
2450 LPRINT TAB(64) AKEY$(5);
2460 LPRINT TAB(75) AKEY$(6);
2470 LPRINT TAB(86) AKEY$(7);
2480 LPRINT TAB(97) AKEY$(8);
2490 LPRINT TAB(108) AKEY$(9);
2500 LPRINT TAB(119) AKEY$(10);
2510 LPRINT TAB(131) "*"
2520 LPRINT "*  ";ROWC$;
2530 LPRINT TAB(20) CKEY$(1);
2540 LPRINT TAB(31) CKEY$(2);
2550 LPRINT TAB(42) CKEY$(3);
2560 LPRINT TAB(53) CKEY$(4);
2570 LPRINT TAB(64) CKEY$(5);
2580 LPRINT TAB(75) CKEY$(6);
2590 LPRINT TAB(86) CKEY$(7);
2600 LPRINT TAB(97) CKEY$(8);
2610 LPRINT TAB(108) CKEY$(9);
2620 LPRINT TAB(119) CKEY$(10);
2630 LPRINT TAB(131) "*"
2640 LPRINT "*  ";ROWS$;
2650 LPRINT TAB(20) SKEY$(1);
2660 LPRINT TAB(31) SKEY$(2);
2670 LPRINT TAB(42) SKEY$(3);
2680 LPRINT TAB(53) SKEY$(4);
2690 LPRINT TAB(64) SKEY$(5);
2700 LPRINT TAB(75) SKEY$(6);
2710 LPRINT TAB(86) SKEY$(7);
2720 LPRINT TAB(97) SKEY$(8);
2730 LPRINT TAB(108) SKEY$(9);
2740 LPRINT TAB(119) SKEY$(10);
2750 LPRINT TAB(131) "*"
2760 LPRINT LINE1$
2770 LPRINT LINE3$
2780 'LPRINT CHR$(27)+"@";
2790 CLS :GOTO 680
2800 ' --------------------------- READ FILE ----------------------------------
2810 ON ERROR GOTO 4160 :OPEN FL$+".KEY" FOR INPUT AS #1
2820 FOR N = 1 TO 6:KEY(N) OFF:NEXT
2830 LINE INPUT #1, TM$
2840 LINE INPUT #1, TITLE$
2850 LINE INPUT #1, FKEY$(1)
2860 LINE INPUT #1, FKEY$(2)
2870 LINE INPUT #1, FKEY$(3)
2880 LINE INPUT #1, FKEY$(4)
2890 LINE INPUT #1, FKEY$(5)
2900 LINE INPUT #1, FKEY$(6)
2910 LINE INPUT #1, FKEY$(7)
2920 LINE INPUT #1, FKEY$(8)
2930 LINE INPUT #1, FKEY$(9)
2940 LINE INPUT #1, FKEY$(10)
2950 LINE INPUT #1, ROWA$
2960 LINE INPUT #1, AKEY$(1)
2970 LINE INPUT #1, AKEY$(2)
2980 LINE INPUT #1, AKEY$(3)
2990 LINE INPUT #1, AKEY$(4)
3000 LINE INPUT #1, AKEY$(5)
3010 LINE INPUT #1, AKEY$(6)
3020 LINE INPUT #1, AKEY$(7)
3030 LINE INPUT #1, AKEY$(8)
3040 LINE INPUT #1, AKEY$(9)
3050 LINE INPUT #1, AKEY$(10)
3060 LINE INPUT #1, ROWC$
3070 LINE INPUT #1, CKEY$(1)
3080 LINE INPUT #1, CKEY$(2)
3090 LINE INPUT #1, CKEY$(3)
3100 LINE INPUT #1, CKEY$(4)
3110 LINE INPUT #1, CKEY$(5)
3120 LINE INPUT #1, CKEY$(6)
3130 LINE INPUT #1, CKEY$(7)
3140 LINE INPUT #1, CKEY$(8)
3150 LINE INPUT #1, CKEY$(9)
3160 LINE INPUT #1, CKEY$(10)
3170 LINE INPUT #1, ROWS$
3180 LINE INPUT #1, SKEY$(1)
3190 LINE INPUT #1, SKEY$(2)
3200 LINE INPUT #1, SKEY$(3)
3210 LINE INPUT #1, SKEY$(4)
3220 LINE INPUT #1, SKEY$(5)
3230 LINE INPUT #1, SKEY$(6)
3240 LINE INPUT #1, SKEY$(7)
3250 LINE INPUT #1, SKEY$(8)
3260 LINE INPUT #1, SKEY$(9)
3270 LINE INPUT #1, SKEY$(10)
3280 CLOSE #1
3290 ON S GOTO 1070,1070,1960,3310
3300 ' --------------------------- PUT TO SCREEN ------------------------------
3310 IF TM$="N" OR TM$="n" THEN PAD = (75-LEN(TITLE$))\2 ELSE 3330
3320 GOTO 3340
3330 PAD = (72-LEN(TITLE$))\2
3340 TITLE$ = STRING$(PAD," ")+TITLE$
3350 CLS: COLOR 15,0 : PRINT  TITLE$; : COLOR 7,0
3360 IF TM$="c" OR TM$="C" THEN PRINT " (c)";
3370 IF TM$="tm" OR TM$="TM" THEN PRINT " (tm)" ELSE PRINT
3380 LINE1$ = STRING$(75,"*")
3390 PRINT LINE1$
3400 PRINT "*  FUNCTION KEY";
3410 PRINT TAB(20) "---F 1---";
3420 PRINT TAB(31) "---F 2---";
3430 PRINT TAB(42) "---F 3---";
3440 PRINT TAB(53) "---F 4---";
3450 PRINT TAB(64) "---F 5---";
3460 PRINT TAB(75)"*"
3470 PRINT "*";
3480 PRINT TAB(20) FKEY$(1);
3490 PRINT TAB(31) FKEY$(2);
3500 PRINT TAB(42) FKEY$(3);
3510 PRINT TAB(53) FKEY$(4);
3520 PRINT TAB(64) FKEY$(5);
3530 PRINT TAB(75)"*"
3540 PRINT "*  "ROWA$;
3550 PRINT TAB(20) AKEY$(1);
3560 PRINT TAB(31) AKEY$(2);
3570 PRINT TAB(42) AKEY$(3);
3580 PRINT TAB(53) AKEY$(4);
3590 PRINT TAB(64) AKEY$(5);
3600 PRINT TAB(75)"*"
3610 PRINT "*  ";ROWC$;
3620 PRINT TAB(20) CKEY$(1);
3630 PRINT TAB(31) CKEY$(2);
3640 PRINT TAB(42) CKEY$(3);
3650 PRINT TAB(53) CKEY$(4);
3660 PRINT TAB(64) CKEY$(5);
3670 PRINT TAB(75)"*"
3680 PRINT "*  ";ROWS$;
3690 PRINT TAB(20) SKEY$(1);
3700 PRINT TAB(31) SKEY$(2);
3710 PRINT TAB(42) SKEY$(3);
3720 PRINT TAB(53) SKEY$(4);
3730 PRINT TAB(64) SKEY$(5);
3740 PRINT TAB(75)"*"
3750 PRINT LINE1$
3760 PRINT "*  FUNCTION KEY";
3770 PRINT TAB(20) "---F 6---";
3780 PRINT TAB(31) "---F 7---";
3790 PRINT TAB(42) "---F 8---";
3800 PRINT TAB(53) "---F 9---";
3810 PRINT TAB(64) "---F10---";
3820 PRINT TAB(75)"*"
3830 PRINT "*";
3840 PRINT TAB(20) FKEY$(6);
3850 PRINT TAB(31) FKEY$(7);
3860 PRINT TAB(42) FKEY$(8);
3870 PRINT TAB(53) FKEY$(9);
3880 PRINT TAB(64) FKEY$(10);
3890 PRINT TAB(75)"*"
3900 PRINT "*  "ROWA$;
3910 PRINT TAB(20) AKEY$(6);
3920 PRINT TAB(31) AKEY$(7);
3930 PRINT TAB(42) AKEY$(8);
3940 PRINT TAB(53) AKEY$(9);
3950 PRINT TAB(64) AKEY$(10);
3960 PRINT TAB(75)"*"
3970 PRINT "*  ";ROWC$;
3980 PRINT TAB(20) CKEY$(6);
3990 PRINT TAB(31) CKEY$(7);
4000 PRINT TAB(42) CKEY$(8);
4010 PRINT TAB(53) CKEY$(9);
4020 PRINT TAB(64) CKEY$(10);
4030 PRINT TAB(75)"*"
4040 PRINT "*  ";ROWS$;
4050 PRINT TAB(20) SKEY$(6);
4060 PRINT TAB(31) SKEY$(7);
4070 PRINT TAB(42) SKEY$(8);
4080 PRINT TAB(53) SKEY$(9);
4090 PRINT TAB(64) SKEY$(10);
4100 PRINT TAB(75)"*"
4110 PRINT LINE1$
4120 LOCATE 24,17:COLOR 0,15 :PRINT "  PRESS ANY KEY TO RETURN TO SELECTION  ";
4130 ANY$=INKEY$ : IF ANY$="" GOTO 4130
4140 COLOR 7,0 :CLS :GOTO 680
4150 ' --------------------------- ERROR ROUTINES -----------------------------
4160 IF ERR=53 OR ERR=52 GOTO 4210
4170 IF ERR = 27 OR ERR = 24 GOTO 4230
4180 IF ERR = 71 OR ERR = 70 GOTO 4220
4190 KEY 1,"LIST ":KEY 2,"RUN"+CHR$(13):KEY 3,"LOAD"+CHR$(34):KEY 4,"SAVE"+CHR$(34):KEY 5,"CONT":KEY ON
4200 ON ERROR GOTO 0 : GOTO 0
4210 BEEP :PRINT : PRINT " PROGRAM NOT FOUND " : RESUME 1020
4220 BEEP:PRINT:PRINT "Disk not ready or write protected......................":RESUME 1020
4230 BEEP:PRINT : PRINT "Printer not ready or out of paper....................":RESUME 1960
4240 ' --------------------------- FUNCTION KEYS ------------------------------
4250 V=CSRLIN:LOCATE 2,15:COLOR 31,0:PRINT "CREATE";:COLOR 7,0:S=1 :LOCATE V,1: RETURN 1020
4260 V=CSRLIN:LOCATE 4,15:COLOR 31,0:PRINT "UPDATE";: COLOR 7,0:S=2 :LOCATE V,1: RETURN 1020
4270 V=CSRLIN:LOCATE 6,15:COLOR 31,0:PRINT "PRINT";:COLOR 7,0:S=3 :LOCATE V,1: RETURN 1020
4280 V=CSRLIN:LOCATE 2,35:COLOR 31,0:PRINT "DISPLAY";:S=4 :COLOR 7,0:LOCATE V,1: RETURN 1020
4290 V=CSRLIN:LOCATE 4,35:COLOR 31,0:PRINT "DELETE";:S=5:COLOR 7,0:LOCATE V,1:RETURN 1020
4300 RETURN 1460
4310 ' --------------------------- KEYBOARD ENTRY AREA ------------------------
4320 ANS$="" : GOTO 4340
4330 BEEP
4340 K$=INKEY$ : IF K$ ="" GOTO 4340
4350 IF K$=CHR$(27) GOTO 680
4360 IF K$=CHR$(13) THEN RETURN
4370 IF LEN (K$)>1 THEN IF ASC(MID$(K$,2,1))=64 THEN GOTO 1460  ELSE 4330
4380 IF K$=CHR$(8) THEN XX=POS(0) ELSE 4430
4390 L1=LEN(ANS$)
4400 L2=L1-1
4410 ANS$=LEFT$(ANS$,L2)
4420 LOCATE,XX-1:PRINT " ";:LOCATE,XX-1:GOTO 4340
4430 PRINT K$;: ANS$=ANS$+K$
4440 GOTO 4340
4450 ' --------------------------- KEYBOARD ENTRY AREA FOR FILENAME -----------
4460 BEEP
4470 ANS$=""
4480 K$=INKEY$ : IF K$ ="" GOTO 4480
4490 IF K$=CHR$(27) GOTO 680
4500 IF K$=CHR$(13) THEN RETURN
4510 IF LEN (K$)>1 THEN GOTO 4460
4520 IF K$=CHR$(8) THEN XX=POS(0) ELSE 4570
4530 L1=LEN(ANS$)
4540 L2=L1-1
4550 ANS$=LEFT$(ANS$,L2)
4560 LOCATE,XX-1:PRINT " ";:LOCATE,XX-1:GOTO 4480
4570 PRINT K$;: ANS$=ANS$+K$
4580 GOTO 4480
```

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0059

     Volume in drive A has no label
     Directory of A:\

    ADD      BAT       121   6-02-83  11:41p
    AUTO     BAT        75   6-02-83  11:41p
    AUTOADD  BAT        19   2-11-83  12:13a
    AUTOEXEC BAK        30   3-29-83   9:34p
    AUTOEXEC BAT        22   2-11-83  12:11a
    BASIC    KEY       162   3-31-83   8:48p
    CRC      TXT      1639  11-09-84  11:05a
    CRCK4    COM      1536  10-21-82   7:54p
    EW       KEY       245   4-18-83   7:13p
    FASTPRT  COM       366   6-02-83  10:07p
    FASTPRT  DOC      5834   6-02-83  11:19p
    GUIDE    BAT        91   3-31-83   9:37p
    INSTALL  BAT       146   3-29-83   9:17p
    PEPCON   DOC      1476   5-31-83   1:51p
    PEPSON   BAS     13225   8-04-83  10:23a
    PEPSON   EXE     29312   8-04-83  10:25a
    PRINT    DOC      7955   8-04-83  10:34a
    PSCREEN  BAS     12597   5-31-83   1:57p
    PSCREEN  EXE     27904   5-31-83   2:01p
    QR       KEY       241   4-18-83   7:13p
    QUICKREF BAS     13568   4-19-83   7:15p
    QUICKREF DOC     13765   4-18-83   8:55p
    TEMPLE   KEY       290   4-18-83   7:14p
    TWO      BAT       245   6-06-83  12:18p
    VOLKSWTR KEY       256   1-01-80  12:12a
           25 file(s)     131120 bytes
                           22016 bytes free
