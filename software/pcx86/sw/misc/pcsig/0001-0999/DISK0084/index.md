---
layout: page
title: "PC-SIG Library Disk #84"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0084/
machines:
  - id: ibm5150
    type: pcx86
    config: /machines/pcx86/ibm/5150/cga/256kb/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk 0084"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5150" %}

{% comment %}info_begin{% endcomment %}

## Information about "DOS UTILITIES NO 4"

    DOS Utilities No 4 is a selection of file tools which let you change a
    file's attribute byte, control BASIC program functions with a command
    shell, or give you a menu-driven BASIC file-deletion tool.  Another
    program of interest is DRAWIT, a BASIC screen drawing utility, which
    lets you design graphic screen displays.
    
    System Requirements:  Some programs require color; BASIC
    
    How to Start: To run a COM or EXE program simply type its name and
    press <ENTER>.  For instructions on ASM or 'C' listings, refer to your
    Assembler or 'C' language manuals.  For instructions on running BASIC
    programs, please refer to the GETTING STARTED section in this catalog.
    To read DOC files simply enter TYPE filename.ext and press <ENTER>.
    
    File Descriptions:
    
    CHMOD    EXE  Changes file attribute byte
    CHMOD    C    Source for CHMOD.EXE, written in C86
    DOWTRY   TXT  Sample data for DOWDIF.COM
    DOWDIF   DOC  Documentation file for DOWDIF.COM
    DOWDIF   COM  Converts Dow Jones date to DIF format for VISICALC & 123
    DOWDIF   BAT  Batch file to print DOWDIF.DOC file
    DRAWIT   BAS  Graphics draw utility - relatively simple, but very good
    FILECMD  BAS  Loads, runs, renames or deletes .BAS files  (DOS 1.1)
    FPR      C    File print routine written in C86. Personalize and compile
    FILECMD2 BAS  Loads, runs, renames or deletes .BAS files  (DOS 2.0)
    QPRINT   BIN  BLOADable BASIC CALL for fast screen writes, color or mono
    QPRINT   BAS  Demo of QPRINT vs PRINT
    QPRINT   ASM  Source for QPRINT.BIN from Byte, July 83, page 408
    KILL     BAS  Deletes multiple files selected from a menu  (Color req)
    TXTPRO   DOC  Documentation for TXTPRO.EXE
    UPVC     DOC  How to unprotect VISICALC
    TXTPRO   EXE  Filter utility for ASCII files  (Requires BASRUN.LIB)
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## DRAWIT.BAS

```bas
10 '***************************************************************************
20 '*                                                                         *
30 '*                            DRAW-IT.BAS                                  *
40 '*                                                                         *
50 '*                     BY ROBERT RELF (70176,403)                          *
60 '*                                                                         *
70 '*                             (C) 1983                                    *
80 '*                                                                         *
90 '***************************************************************************
100 '
110 'THIS IS A PROGRAM FOR DRAWING SCREEN GRAPHICS WITH SIMPLE KEYSTROKES.
120 'REQUIRES BASICA 2.00, COLOR GRAPHICS ADAPTER, ONE DISK DRIVE, COLOR OR
130 'NON-IBM MONOCHROME MONITOR, AND NEC OR PROWRITER DOT MATRIX PRINTER TO
140 'USE BUILT-IN GRAPHICS HARDCOPY SUBROUTINE. (DOS "GRAPHICS" COMMAND MAY
150 'BE USABLE FOR IBM OR EQUIVALENT PRINTER.)
160 '
170 '*************** IMPORTANT! ******************
180 'REMOVE THE APOSTROPHE FROM LINE 210 FOR COLOR MONITOR OR FROM LINE
190 '220 FOR NON-IBM MONOCHROME MONITOR.
200 '
210 COL1=1:COL2=1:COL3=2:COL7=7:COL10=10:COL14=14:COL15=15:P=0
220 'COL1=0:COL2=3:COL3=3:COL7=7:COL10=15:COL14=15:COL15=15:P=1
230 '
235 GOSUB 50000  'SWITCH TO COLOR MONITOR  ** ADDED BY TOM D. HALL **
240 GOSUB 1160      'CAPS LOCK / NUM LOCK ON
250 X%=160:Y%=90:Z%=3:C%=160:D%=90:C=0:DIM K%(14600):L%=1:M%=1:N%=318:P%=180
260 ON ERROR GOTO 2750
270 KEY 15,CHR$(&H40)+CHR$(71)   'DEFINE KEY TRAPS      HOME
280 KEY 16,CHR$(&H40)+CHR$(73)   'PgUp
290 KEY 17,CHR$(&H40)+CHR$(79)   'END
300 KEY 18,CHR$(&H40)+CHR$(81)   'PgDn
310 KEY 19,CHR$(&H40)+CHR$(58)   'CAPS LOCK
320 KEY 20,CHR$(&H40)+CHR$(69)   'NUM LOCK
340 KEY OFF:SCREEN 0,1:COLOR 15,0,0:WIDTH 40:CLS:LOCATE 5,19:PRINT "IBM"
350 LOCATE 7,12,0:PRINT "Personal Computer"
360 COLOR COL10,0:LOCATE 10,5,0:PRINT CHR$(213)+STRING$(31,205)+CHR$(184)
370 LOCATE 11,5,0:PRINT CHR$(179)+"            DRAW-IT            "+CHR$(179)
380 LOCATE 12,5,0:PRINT CHR$(179)+"                               "+CHR$(179)
390 LOCATE 13,5,0:PRINT CHR$(179)+STRING$(31,32)+CHR$(179)
400 LOCATE 14,5,0:PRINT CHR$(179)+"         Version 2.40          "+CHR$(179)
410 LOCATE 15,5,0:PRINT CHR$(212)+STRING$(31,205)+CHR$(190)
420 COLOR 15,0:LOCATE 17,6,0:PRINT "(C) Copyright  Rob Relf  1983"
430 COLOR COL14,0:LOCATE 23,7,0:PRINT "Press space bar to continue"
440 DEF SEG=0: POKE 1050,PEEK(1052):DEF SEG   'CLEAR KEYBOARD BUFFER
450 IF INKEY$=" " THEN ELSE 450
460 SCREEN 0:WIDTH 80:COLOR COL7,COL1,COL1:CLS      'SET SCREEN ATTRIBUTES
470 LOCATE 2,30:PRINT "WELCOME TO DRAW-IT
480 PRINT
490 GOSUB 2240         'PRINT HELP SCREEN
500 PRINT "WHICH DRIVE CONTAINS THIS PROGRAM ? (A,B,C,D,E,F or G)";
510 G$=INKEY$
520 IF G$="A"THEN F$="A:":GOTO 560
530 IF G$="B"THEN F$="B:":GOTO 560
540 IF G$="C"THEN F$="C:":GOTO 560
541 IF G$="D"THEN F$="D:":GOTO 560     ' ** ADDED BY TOM D. HALL **
542 IF G$="E"THEN F$="E:":GOTO 560     '
543 IF G$="F"THEN F$="F:":GOTO 560     '
544 IF G$="G"THEN F$="G:":GOTO 560     '
550 GOTO 510
560 SCREEN 1:COLOR 0,P:CLS:VIEW SCREEN (1,1)-(318,180),,3     'GRAPHICS SCREEN
570 LOCATE 24,1:PRINT "TO SET BACKGROUND COLOR PUSH SPACEBAR";
580 LOCATE 25,1:PRINT "THEN PUSH <ENTER> TO CONTINUE";
590 Q$=INKEY$
600 IF Q$=" "THEN READ Q:IF Q>15 THEN Q=0:RESTORE
610 COLOR Q
620 IF Q$=CHR$(13)THEN 650
630 GOTO 590
640 DATA 1,3,7,8,9,11,13,15,16
650 GOSUB 1100:GOSUB 1090:GOSUB 1190:GOSUB 2920:GOSUB 1790  'PRINT STATUS LINES
655 GOSUB 1520                   'ENABLE KEY TRAPS
660 C$=INKEY$                                      'LOOP AND WAIT FOR KEYSTROKE
670 PSET(X%,Y%),Z%
680 IF C$="L"THEN GOSUB 1180    'LINE
690 IF C$="S"THEN GOSUB 1250    'SAVE SCREEN
700 IF C$="R"THEN GOSUB 1350    'RETRIEVE FILE
710 IF C$="*"THEN GOSUB 1410    'PRINT SCREEN
720 IF C$="X"THEN GOSUB 1510    'ACTIVATE KEYS
730 IF C$="p"THEN GOSUB 1740    'PALETTE
740 IF C$="D"THEN GOSUB 1780    'DRAW
750 IF C$="0"THEN Z%=0:GOSUB 1830       'SET COLOR 0
760 IF C$="1"THEN Z%=1:GOSUB 1830       'SET COLOR 1
770 IF C$="2"THEN Z%=2:GOSUB 1830       'SET COLOR 2
780 IF C$="3"THEN Z%=3:GOSUB 1830       'SET COLOR 3
790 IF C$="P"THEN GOSUB 1920    'PAINT
800 IF C$="A"THEN GOSUB 1960    'ARC
810 IF C$="C"THEN GOSUB 2000    'CIRCLE
820 IF C$="W"THEN GOSUB 2210    'WIPE SCREEN CLEAN
830 IF C$="H"THEN GOSUB 2630    'HELP
840 IF C$="F"THEN GOSUB 2900    'FAST
850 IF C$="I"THEN GOSUB 2970    'INSERT TEXT
860 IF C$="Q"THEN SCREEN 0:WIDTH 80:COLOR COL7,COL0,COL0:CLS:END
870 GOTO 660
880 '** TEST FOR DOT POSITION WITHIN SCREEN **
890 IF Y%>M% THEN Y%=Y%-L%:GOSUB 1050
900 RETURN 660
910 IF X%>M% THEN X%=X%-L%:GOSUB 1050
920 RETURN 660
930 IF X%<N% THEN X%=X%+L%:GOSUB 1050
940 RETURN 660
950 IF Y%<P% THEN Y%=Y%+L%:GOSUB 1050
960 RETURN 660
970 IF X%>M% AND Y%>M% THEN X%=X%-L%:Y%=Y%-L%:GOSUB 1050
980 RETURN 660
990 IF X%<N% AND Y%>M% THEN X%=X%+L%:Y%=Y%-L%:GOSUB 1050
1000 RETURN 660
1010 IF X%>M% AND Y%<P% THEN X%=X%-L%:Y%=Y%+L%:GOSUB 1050
1020 RETURN 660
1030 IF X%<N% AND Y%<P% THEN X%=X%+L%:Y%=Y%+L%:GOSUB 1050
1040 RETURN 660
1050 IF B=1 THEN 1060 ELSE 1070
1060 PSET(C%,D%),Z%:LINE-(X%,Y%),Z%:GOTO 1080
1070 PSET(C%,D%),C:B=0
1080 C=POINT(X%,Y%):C%=X%:D%=Y%
1090 LOCATE 25,3:PRINT X%;:LOCATE 25,10:PRINT Y%;:RETURN
1100 POKE &H4E,COL2     'PRINT GREEN TEXT IN COLOR MODE
1110 LOCATE 24,1:PRINT "           <L>INE  <A>RC  <C>IR  <H>ELP";
1120 GOSUB 1830
1130 LOCATE 25,1:PRINT "X=     Y=      <D>RAW  <F>AST  <P>AINT ";
1140 RETURN
1150 '** CAPS LOCK / NUM LOCK ON **
1160 DEF SEG=0:POKE &H417,192:DEF SEG:RETURN
1170 '** TOGGLE "LINE" FUNCTION **
1180 A=A+1
1190 IF A=1 THEN A%=X%:B%=Y%:LOCATE 24,12:POKE &H4E,2:PRINT "<L>INE  ";
1200 IF A=1 THEN POKE &H4E,COL2:RETURN
1210 IF A=2 THEN LINE(A%,B%)-(X%,Y%),Z%:A=0:LOCATE 24,12:PRINT "<L>INE  ";
1220 RETURN
1230 LOCATE 24,12:PRINT "<L>INE  ";:RETURN
1240 '** SAVE SCREEN TO DISK **
1250 GET(1,1)-(318,180),K%:CLS
1260 LOCATE 5,2:PRINT "  WHAT WILL YOU NAME YOUR DRAWING? ";
1270 LOCATE 6,2:PRINT "TYPE IN A NAME UP TO 8 LETTERS LONG"
1280 LOCATE 7,2:INPUT "AND PRESS <ENTER>",A$
1290 IF A$=""OR  LEN(A$)>8 THEN LOCATE 7,2:PRINT STRING$(38," ");:BEEP:GOTO 1280
1300 GOSUB 2700
1310 B$=F$+A$+".PIC"
1320 DEF SEG=&HB800:BSAVE B$,0,&H4000:DEF SEG
1330 RETURN
1340 '** RETRIEVE SCREEN FROM DISK **
1350 LOCATE 24,1:PRINT STRING$(39," ");:POKE &H4E,COL3
1360 CLS:LOCATE 5,1:FILES F$+"*.PIC"
1370 LOCATE 24,1:INPUT;"ENTER FILENAME TO RECALL";D$:E$=F$+D$+".PIC"
1380 DEF SEG=&HB800:BLOAD E$,0 :DEF SEG
1390 POKE &H4E,COL2:RETURN 650
1400 '** DUMP SCREEN TO NEC OR C.ITOH DOT MATRIX PRINTER **
1410 OPEN "lpt1:" AS #1:WIDTH #1,255:DEF SEG=&HB800
1420 LPRINT CHR$(29)CHR$(30)CHR$(27)"A"STRING$(4,10)CHR$(15)CHR$(27)"E"CHR$(27)"T16"CHR$(27)">";
1430 FOR Y%=79 TO 0 STEP -1
1440 LPRINT CHR$(27);"S";"0552";
1450 FOR X%=Y% TO 7280+Y% STEP 80:PRINT#1,STRING$(3,PEEK(X%))STRING$(3,PEEK(X%+&H2000));:NEXT
1470 LPRINT :NEXT :CLOSE #1 :LPRINT
1480 LPRINT CHR$(27)"A" STRING$(8,10)CHR$(29)CHR$(30)CHR$(27)"<";
1490 DEF SEG:RETURN
1500 '** ENABLE KEY TRAPPING **
1510 DEF SEG=0:POKE 1050,PEEK(1052):DEF SEG    'CLEAR BUFFERS
1520 ON KEY(11)GOSUB 890
1530 KEY(11)ON
1540 ON KEY(12)GOSUB 910
1550 KEY(12)ON
1560 ON KEY(13)GOSUB 930
1570 KEY(13)ON
1580 ON KEY(14)GOSUB 950
1590 KEY(14)ON
1600 ON KEY(15)GOSUB 970
1610 KEY(15)ON
1620 ON KEY(16)GOSUB 990
1630 KEY(16)ON
1640 ON KEY(17)GOSUB 1010
1650 KEY(17)ON
1660 ON KEY(18)GOSUB 1030
1670 KEY(18)ON
1680 ON KEY(19)GOSUB 1160
1690 KEY(19)ON
1700 ON KEY(20)GOSUB 1160
1710 KEY(20)ON
1720 RETURN
1730 '** TOGGLE COLOR PALETTE **
1740 IF P=0 THEN P=1 ELSE P=0
1750 COLOR ,P
1760 RETURN
1770 '** TOGGLE "DRAW" FUNCTION **
1780 IF B=0 THEN B=1 ELSE B=0
1790 IF B=1 THEN LOCATE 25,16:POKE &H4E,2:PRINT "<D>RAW";:POKE &H4E,COL2
1800 IF B<>1 THEN LOCATE 25,16:PRINT "<D>RAW";
1810 RETURN
1820 '** PRINT COLOR ON STATUS LINE **
1830 Z$=STR$(Z%):LOCATE 24,1:PRINT "COLOR 0123";
1840 POKE &H4E,2
1850 IF Z%=0 THEN LOCATE 24,7:PRINT RIGHT$(Z$,1);
1860 IF Z%=1 THEN LOCATE 24,8:PRINT RIGHT$(Z$,1);
1870 IF Z%=2 THEN LOCATE 24,9:PRINT RIGHT$(Z$,1);
1880 IF Z%=3 THEN LOCATE 24,10:PRINT RIGHT$(Z$,1);
1890 POKE &H4E,COL2
1900 RETURN
1910 '** FILL IN SHAPE WITH CURRENT COLOR **
1920 IF Z%=0 THEN W%=1 ELSE W%=0
1930 PSET(X%,Y%),W%:PAINT(X%,Y%),Z%,Z%:C=Z%
1940 RETURN
1950 '** DRAW SPECIFIED ARC OR CIRCLE **
1960 POKE &H4E,COL3:LOCATE 24,1:PRINT STRING$(39," ");
1970 LOCATE 24,1:INPUT;"ENTER STARTING POINT DEGREES    ",S$:I$=S$:GOSUB 2820
1980 LOCATE 24,1:PRINT STRING$(39," ");
1990 LOCATE 24,1:INPUT;"ENTER ENDING POINT DEGREES      ",T$:I$=T$:GOSUB 2820
2000 LOCATE 24,1:PRINT STRING$(39," ");
2010 POKE &H4E,COL3:LOCATE 24,1
2020 INPUT;"ENTER THE DESIRED RADIUS     ",R$:I$=R$:GOSUB 2820
2030 S=VAL(S$):T=VAL(T$):R=VAL(R$)
2040 IF S=0 AND T=0 THEN 2160
2050 B#=2*3.141593
2060 A#=B#/360
2070 S#=(S+90)*A#:T#=(T+90)*A#
2080 IF S#>B# THEN S#=S#-B#
2090 IF T#>B# THEN T#=T#-B#
2100 LOCATE 24,1:PRINT STRING$(39," ");
2110 LOCATE 24,1:PRINT "CONNECT ENDS OF ARC TO CENTER? (Y or N)";:POKE &H4E,COL2
2120 I$=INKEY$
2130 IF I$="Y"THEN S#=-S#:T#=-T#:GOTO 2170
2140 IF I$="N"THEN 2170
2150 GOTO 2120
2160 CIRCLE(X%,Y%),R,Z%:GOTO 2180
2170 CIRCLE(X%,Y%),R,Z%,S#,T#:S$="":T$=""
2180 GOSUB 1100:GOSUB 1090:GOSUB 1190:GOSUB 2920:GOSUB 1790  'RESET STATUS LINE
2190 RETURN
2200 '** CLEAR SCREEN **
2210 SCREEN 0,0,0:CLS:X%=160:Y%=90:Z%=3:C%=160:D%=90:C=0:RETURN 560
2220 '** "HELP" SCREEN **
2230 SCREEN 0:WIDTH 80:COLOR COL7,COL1,COL1:CLS
2240 PRINT "  THIS IS A PROGRAM FOR DRAWING GRAPHICS ON THE SCREEN. ";
2250 PRINT "SELECT THE COLOR THAT
2260 PRINT "YOU WILL DRAW IN BY TYPING 0,1,2 OR 3. ";
2270 PRINT "YOU MAY ALTERNATE BETWEEN ONE OF TWO
2280 PRINT "COLOR PALETTES BY PRESSING SHIFT / P. ";
2290 PRINT "YOU CAN MOVE FREELY ABOUT THE SCREEN BY
2300 PRINT "PRESSING ANY OF THE KEYS ON THE NUMERIC KEYPAD EXCEPT 0 OR 5. ";
2310 PRINT "(IF ANY OF THE
2320 PRINT "KEYS CEASE TO FUNCTION, PRESS X TO RESET THE KEYS). ";
2330 PRINT "TO DRAW A LINE AS YOU MOVE,
2340 PRINT "TYPE D. TO STOP DRAWING, TYPE D AGAIN. ";
2350 PRINT "TO DRAW A LINE THAT CANNOT BE DRAWN WITH
2360 PRINT "THE NUMERIC KEYS, ";
2370 PRINT "MOVE TO YOUR STARTING POINT AND TYPE L, THEN MOVE TO YOUR
2380 PRINT "ENDING POINT AND TYPE L ONCE AGAIN. ";
2390 PRINT "TYPE F FOR THE FAST MODE TO MOVE OR DRAW
2400 PRINT "IN UNITS OF TEN INSTEAD OF ONE. ";
2410 PRINT "( NOTE THAT YOU MUST BE IN THE NORMAL SPEED MODE";
2420 PRINT "TO MOVE OR DRAW TO THE BORDER LINE ). ";
2430 PRINT "TO DRAW A CIRCLE OR AN ARC, MOVE TO THE
2440 PRINT "DESIRED CENTER POINT,";
2450 PRINT "TYPE C OR A, AND ANSWER THE PROMPTS WHICH APPEAR.PARAMETERS";
2460 PRINT "FOR AN ARC ARE 0 TO 360 ";
2470 PRINT "DEGREES WITH 0 AT THE TOP AND GOING COUNTER-CLOCKWISE
2480 PRINT "ON THE SCREEN. ";
2490 PRINT "RESPOND TO PROMPTS WHICH APPEAR ON THE STATUS LINE AND PRESS
2500 PRINT "<ENTER>.YOU MAY PAINT ANY ";
2510 PRINT "AREA WITH COLOR BY TYPING P, PROVIDED THAT THE ENTIRE";
2520 PRINT "AREA IS BORDERED BY THAT ";
2530 PRINT "SAME COLOR. YOU MAY RECALL ANY PREVIOUSLY DRAWN SCREEN";
2540 PRINT "BY TYPING R AND ANSWERING ";
2550 PRINT "THE PROMPT. TYPE Q TO QUIT. TYPE PrtSc TO PRINT A COPY";
2560 PRINT "OF YOUR DRAWING ON THE PRINTER. ";
2570 PRINT "TYPE S TO SAVE YOUR DRAWING TO A DISK FILE.
2580 PRINT "TYPE I TO INSERT TEXT ";
2590 PRINT "INTO THE GRAPHICS SCREEN AT THE CURRENT X/Y COORDINATE.";
2600 PRINT "TYPE W TO WIPE THE SCREEN ";
2610 PRINT "IMAGE AND BEGIN AGAIN. TYPE H FOR HELP (THIS SCREEN).
2620 RETURN
2630 '** SAVE SCREEN IN ARRAY **
2640 GET(1,1)-(318,180),K%
2650 GOSUB 2230
2660 PRINT
2670 PRINT "                PRESS ANY KEY TO RETURN TO DRAWING
2680 N$=INKEY$
2690 IF N$=""THEN 2680
2700 '** REPLACE SCREEN AS BEFORE **
2710 SCREEN 1:COLOR Q,P:CLS:VIEW SCREEN (1,1)-(318,180),,3
2720 PUT(1,1),K%
2730 GOSUB 1100:GOSUB 1090:GOSUB 1190:GOSUB 2920:GOSUB 1790 'PRINT STATUS LINES
2740 RETURN
2750 '** ERROR HANDLING **
2760 BEEP :DEF SEG
2770 LOCATE 24,1:PRINT STRING$(39," ");
2780 POKE &H4E,COL3:LOCATE 24,1:PRINT"ERROR HAS OCCURRED - TRY AGAIN  ";
2790 POKE &H4E,COL2
2800 FOR X=1 TO 2000:NEXT
2810 RESUME 650
2820 '** TEST FOR PROPER INPUT **
2830 IF I$=""THEN ERROR 200
2840 FOR X=1 TO LEN(I$)
2850 X$=MID$(I$,X)
2860 IF ASC(X$)>44 AND ASC(X$)<58 THEN 2870 ELSE K=1
2870 NEXT
2880 IF K=1 THEN K=0:ERROR 200
2890 RETURN
2900 '** TOGGLE "FAST" FUNCTION **
2910 F=F+1
2920 IF F=1 THEN L%=10:M%=11:N%=308:P%=170:LOCATE 25,24
2930 IF F=1 THEN POKE &H4E,2:PRINT "<F>AST  ";:POKE &H4E,COL2:RETURN
2940 IF F=2 THEN L%=1:M%=1:N%=318:P%=180:F=0
2950 LOCATE 25,24:PRINT "<F>AST  ";:RETURN
2960 '**** INSERT TEXT INTO GRAPHICS SCREEN ****
2970 POKE &H4E,Z%
2980 ROW=Y%/8
2990 COL=X%/8+1
3000 LOCATE ROW,COL
3010 INPUT;"",I$
3020 POKE &H4E,COL2
3030 RETURN
49990 REM ---- Switch to Color Monitor   ** ADDED BY TOM D. HALL **
50000 KEY OFF   'turn off 25th line
50010 CLS       'clear screen
50020 LOCATE ,,0 'turn off cursor
50030 DEF SEG =0 'address bios
50040 POKE &H410,(PEEK(&H410) AND &HCF) OR &H10 'change equipment parameter
50050 DEF SEG   'address default memory
50060 SCREEN 1  'set medium resolution graphics
50070 SCREEN 0  'set text mode
50080 WIDTH 80  'set width to 80 characters
50090 WIDTH 40  'set width to 40 characters
50100 LOCATE ,,1,6,7    'turn on cursor
50110 SCREEN 1,0 'set medium resolution graphics and enable color
50120 COLOR 0,0  'set background to black and select palette 0
50130 RETURN
```

## FILECMD.BAS

```bas
10 ' **************************FILCMD.BAS**************************************
20 ' *                                                                        *
30 ' *  BASIC FILECOMMAND for DOS 1.1 - MONOCHROME/80 COLUMN COLOR MONITOR    *
40 ' *                                  1,2, OR 3 DRIVES                      *
50 ' *    By Gene R. McGalliard                                               *
60 ' *    Naval Postgraduate School     For DOS 2.0 Version:                  *
70 ' *    Monterey, Ca 93943             1. Download this and FILCM2.MRG      *
80 ' *    74145,63                       2. MERGE "FILCM2.MRG" into this.     *
90 ' *                                                                        *
100 '*    This program is designed to load, run, rename or delete .BAS        *
110 '*    files from any disk, including a RAMDISK without typing the         *
120 '*    command and program name, but rather using the cursor keys and      *
130 '*    a command keystroke.  All .BAS files from the selected disk will    *
140 '*    be displayed, with one in reverse video.  The program is selected   *
150 '*    by positioning the reverse video section with cursor keys and       *
160 '*    pressing the appropriate key to load, run, rename or kill the file. *
170 '*                                                                        *
180 '*    This is an enhanced version of a program by A.D. Scarbrough,        *
190 '*    which appeared in the September 1983 issue of PC WORLD.             *
200 '*    I have found the program especially effective when loaded           *
210 '*    in a RAMDISK and loaded/run by using PROKEY, or any user defined    *
220 '*    keying system.                                                      *
230 '*                                                                        *
240 '*    Program code expanded for clarity.  To make this program take less  *
250 '*    space, run/load faster, I recommand removing remarks lines,         *
260 '*    compressing code and saving under a short name, without /A option.  *
270 '*    If you have no C: (RAMDISK/HARDDISK), change variable D in line     *
280 '*    340 to something other than 3. (i.e. D=2)                           *
290 '*                                                                        *
300 '*    Please report any bugs/suggestions to me via a SIG message.         *
310 '*                                                                        *
320 '*                                                                        *
330 '*********************CALL MAIN MENU - INITIAL INPUT***********************
340 SCREEN 0,0,0:WIDTH 80:D=3 'make d<>3 with no C: drive present
350 GOSUB 1090
360 K$=INPUT$(1)
370 IF K$="S" OR K$="s" THEN 1290 ELSE IF K$="E" OR K$="e" THEN 1300
380 IF D=3 THEN IF K$="C" OR K$="c" THEN B=2:GOTO 410
390 IF K$="B" OR K$="b" THEN B=1 ELSE IF K$="A" OR K$="a" THEN B=0 ELSE BEEP:GOTO 360
400 '************************CALL FILES ***************************************
410 IF SCRNCK=1 THEN CLS
420 LOCATE 1,1:IF B=0 THEN D$="A:" ELSE IF B=1 THEN D$="B:" ELSE IF B=2 AND D=3 THEN D$="C:"
430 ON ERROR GOTO 1280:FILES D$+"*.BAS"
440 AA=CSRLIN:GOSUB 1170:ON ERROR GOTO 350:Y=1:X=0
450 F$="":COLOR 0,7:FOR L=1 TO 12:LOCATE Y,X+L:C$=CHR$(SCREEN(Y,X+L)):PRINT C$:F$=F$+C$:NEXT L:COLOR 7,0
460 '************************INKEY$ SCREENING *********************************
470 K$=INKEY$:IF LEN(K$)=0 THEN 470
480 IF LEN(K$)=2 THEN 720 'CURSOR
490 IF K$="A" OR K$="a" THEN B=0:COLOR 7,0:GOTO 700
500 IF K$="B" OR K$="b" THEN B=1:COLOR 7,0:GOTO 700
510 IF D=3 AND (K$="C" OR K$="c") THEN B=2:COLOR 7,0:GOTO 700
520 IF SFLAG=9 THEN IF K$="Y" OR K$="y" THEN CLS:SYSTEM
530 IF SFLAG=9 AND SCRNCK=1 THEN SFLAG=0:K$="":GOSUB 1340:GOTO 360
540 IF SFLAG=9 AND SCRNCK=2 THEN GOSUB 1340:GOTO 450
550 IF SFLAG=8 THEN IF K$="Y" OR K$="y" THEN CLS:NEW
560 IF SFLAG=8 AND SCRNCK=1 THEN SFLAG=0:K$="":GOSUB 1340:GOTO 360
570 IF SFLAG=8 AND SCRNCK=2 THEN GOSUB 1340:GOTO 450
580 IF SFLAG=7 THEN IF K$="Y" OR K$="y" THEN OKAY=1:GOTO 870
590 IF SFLAG=7 THEN SFLAG=0:K$="":GOSUB 1340:GOTO 450
600 IF SFLAG=6 THEN IF K$="Y" OR K$="y" THEN OKAY=2:GOTO 920
610 IF SFLAG=6 THEN SFLAG=0:K$="":GOSUB 1340:GOTO 450
620 IF ASC(K$)=13 THEN 790 'LOAD
630 IF ASC(K$)=42 THEN 830 'RUN
640 IF ASC(K$)=83 OR ASC(K$)=115 THEN 1290 'SYSTEM
650 IF (ASC(K$)=68 OR ASC(K$)=100) AND LEFT$(F$,1)<>" " THEN 1310 'DELETE
660 IF ASC(K$)=69 OR ASC(K$)=101 THEN 1300 'END
670 IF (ASC(K$)=82 OR ASC(K$)=114) AND LEFT$(F$,1)<>" " THEN 1320 'RENAME
680 IF ASC(K$)=27 THEN 350 'RETURN MENU
690 BEEP:K$="":GOTO 470
700 FOR JJ=1 TO AA:LOCATE JJ,1:PRINT STRING$(80,32):NEXT:GOTO 410
710 '******************FILE HIGHLIGHT POSITION CONTROL*************************
720 R$=RIGHT$(K$,1):A=ASC(R$):IF A=72 AND Y>1 THEN GOSUB 1070:Y=Y-1:GOTO 450
730 IF A=80 AND Y<AA-1 THEN GOSUB 1070:Y=Y+1:GOTO 450
740 IF A=75 AND X>12 THEN GOSUB 1070:X=X-13:GOTO 450
750 IF A=77 AND X<64 THEN GOSUB 1070:X=X+13:GOTO 450
760 GOTO 470
770 '***********************EXECUTION LINES************************************
780 '=========LOADING ROUTINE
790 IF LEFT$(F$,1)=" " THEN BEEP:GOTO 450 ELSE CLS:COLOR 0,7:PRINT"Loading ---> ";F$:COLOR 7,0
800 IF B=1 THEN LOAD"B:"+F$ ELSE IF B=2 THEN LOAD"C:"+F$ ELSE LOAD"A:"+F$
810 GOTO 1070
820 '=========RUNNING ROUTINE
830 IF LEFT$(F$,1)=" " THEN BEEP:GOTO 450 ELSE CLS:COLOR 0,7:PRINT"Running ---> ";F$:COLOR 7,0
840 IF B=1 THEN RUN"B:"+F$ ELSE IF B=2 THEN RUN"C:"+F$ ELSE RUN"A:"+F$
850 GOTO 1070
860 '=========DELETING ROUTINE
870 IF OKAY=1 AND B=0 THEN KILL"A:"+F$:SFLAG=0:OKAY=0:GOTO 900
880 IF OKAY=1 AND B=1 THEN KILL"B:"+F$:SFLAG=0:OKAY=0:GOTO 900
890 IF OKAY=1 AND B=2 THEN KILL"C:"+F$:SFLAG=0:OKAY=0:GOTO 900
900 GOSUB 1340:GOTO 700
910 '=========RENAMING ROUTINE
920 COLOR 0,7:LOCATE AA+5,1:PRINT"New Name for ";F$;:INPUT" -->";N$:COLOR 7,0
925 IF LEN(N$)=0 THEN BEEP:GOTO 1020
930 IF RIGHT$(N$,4)<>".bas" OR RIGHT$(N$,4)<>".BAS" THEN N$=N$+".BAS"
940 LOCATE AA+5,1:PRINT STRING$(79,32)
950 LOCATE AA+5,1:COLOR 0,7:PRINT"Is ";N$;" correct? (Y/N)":COLOR 7,0
960 Q$=INKEY$:IF LEN(Q$)=0 THEN 960
970 IF Q$="Y" OR Q$="y" THEN Q=1:GOTO 980 ELSE 1020
980 ON ERROR GOTO 1030
990 IF Q=1 AND OKAY=2 AND B=0 THEN NAME"A:"+F$ AS "A:"+N$:GOTO 1020
1000 IF Q=1 AND OKAY=2 AND B=1 THEN NAME"B:"+F$ AS "B:"+N$:GOTO 1020
1010 IF Q=1 AND OKAY=2 AND B=2 THEN NAME"C:"+F$ AS "C:"+N$
1020 GOSUB 1340:LOCATE AA+5,1:PRINT STRING$(50,32):N$="":Q=0:SFLAG=0:OKAY=0:GOTO 410
1030 IF ERR=58 THEN RESUME 1040 ELSE SCRNCK=1:GOTO 410
1040 BEEP:BEEP:COLOR 0,7:LOCATE AA+5,1:PRINT"Duplicate Name, try again!!!!":COLOR 7,0
1050 FOR JJ=1 TO 1500:NEXT:GOTO 1020
1060 '************************SCREENS******************************************
1070 FOR L=1 TO 12:LOCATE Y,X+L:PRINT CHR$(SCREEN(Y,X+L)):NEXT L:F$=LEFT$(F$,0):RETURN
1080 '***********************SCREEN #1*****************************************
1090 ON ERROR GOTO 350:CLS:LOCATE 1,1:PRINT CHR$(201):I=1:FOR J=2 TO 43:LOCATE I,J:PRINT CHR$(205);:NEXT J
1100 PRINT CHR$(187);:I=8:AA=9
1110 FOR J=2 TO 43:LOCATE I,J:PRINT CHR$(205);:NEXT J:PRINT CHR$(188);:LOCATE 8,1:PRINT CHR$(200):J=1
1120 FOR I=2 TO 7:LOCATE I,J:PRINT CHR$(186);:NEXT I:J=44:FOR I=2 TO 7:LOCATE I,J:PRINT CHR$(186);:NEXT I
1130 IF FLAG=1 THEN LOCATE 2,5:PRINT"*** No .BAS files in drive <";D$;"> ***":FLAG=0
1140 SCRNCK=1:LOCATE 3,8:PRINT "Select drive A,B";:IF D=3 THEN PRINT", or C files"
1150 LOCATE 5,6:PRINT"<E> to END and CLEAR this program":LOCATE 6,6,0:PRINT"<S> to RETURN to DOS":RETURN
1160 '************************SCREEN #2****************************************
1170 LOCATE AA,1:FOR I=1 TO 80:PRINT CHR$(205);:NEXT:COLOR 0,7:LOCATE AA,69:PRINT"DRIVE --> ";D$:COLOR 7,0
1180 IF SCRNCK=2 THEN RETURN ELSE SCRNCK=2:LOCATE 18,1:FOR I=1 TO 80:PRINT CHR$(205);:NEXT
1190 LOCATE 19,1:PRINT"<A> ------ A-drive .BAS FILES":LOCATE 20,1:PRINT"<B> ------ B-drive .BAS FILES"
1200 IF D=3 THEN LOCATE 21,1:PRINT"<C> ------ C-drive .BAS FILES"
1210 LOCATE 22,1:PRINT"<S> ------ RETURN to DOS":LOCATE 23,1:PRINT"<E> ------ END and CLEAR this program"
1220 LOCATE 19,40:PRINT"<ESC> ---- RETURN to opening screen"
1230 LOCATE 20,40:PRINT"<ENTER> -- LOAD --- highlighted file"
1240 LOCATE 21,40:PRINT"<*> ------ RUN ---- highlighted file"
1250 LOCATE 22,40:PRINT"<D> ------ DELETE - highlighted file"
1260 LOCATE 23,40:PRINT"<R> ------ RENAME - highlighted file":RETURN
1270 '************************SAFETY CHECKS************************************
1280 BEEP:FLAG=1:RESUME 350
1290 BEEP:S$="** RETURN TO DOS **":SFLAG=9:GOTO 1330
1300 BEEP:S$="** END this PROGRAM **":SFLAG=8:GOTO 1330
1310 BEEP:S$="DELETE ---> "+F$:SFLAG=7:GOTO 1330
1320 BEEP:S$="RENAME ---> "+F$:SFLAG=6
1330 BEEP:LOCATE AA+1,1:COLOR 0,7:PRINT S$:LOCATE AA+3,1:PRINT"Are you sure? (Y/N)":COLOR 7,0:GOTO 470
1340 SFLAG=0:LOCATE AA+1,1:PRINT STRING$(30,32):LOCATE AA+3,1:PRINT STRING$(19,32):RETURN
1350 '************************END OF PROGRAM***********************************
```

## FILECMD2.BAS

```bas
1 '  **************************FILCM2.MRG**************************************
2 '  *                                                                        *
3 '  *   BASIC FILECOMMAND for DOS 2.0 - MONOCHROME/80 COLUMN COLOR MONITOR   *
4 '  *   By Gene R. McGalliard 74145,63                                       *
5 '  *                                                                        *
6 '  *   To be merged with FILCMD.BAS to convert the DOS 1.1 version to       *
7 '  *   the DOS 2.0 version.  Limited to 48 BASIC files, but easily changed. *
8 '  *                                                                        *
9 '  **************************************************************************
10 ' **************************FILCMD.BAS**************************************
20 ' *                                                                        *
30 ' *  BASIC FILECOMMAND for DOS 2.0 - MONOCHROME/80 COLUMN COLOR MONITOR    *
40 ' *                                  1,2, OR 3 DRIVES                      *
50 ' *    By Gene R. McGalliard                                               *
60 ' *    Naval Postgraduate School     For DOS 2.0 Version:                  *
70 ' *    Monterey, Ca 93943             1. Download this and FILCM2.MRG      *
80 ' *    74145,63                       2. MERGE "FILCM2.MRG" into this.     *
90 ' *                                                                        *
100 '*    This program is designed to load, run, rename or delete .BAS        *
110 '*    files from any disk, including a RAMDISK without typing the         *
120 '*    command and program name, but rather using the cursor keys and      *
130 '*    a command keystroke.  All .BAS files from the selected disk will    *
140 '*    be displayed, with one in reverse video.  The program is selected   *
150 '*    by positioning the reverse video section with cursor keys and       *
160 '*    pressing the appropriate key to load, run, rename or kill the file. *
170 '*                                                                        *
180 '*    This is an enhanced version of a program by A.D. Scarbrough,        *
190 '*    which appeared in the September 1983 issue of PC WORLD.             *
200 '*    I have found the program especially effective when loaded           *
210 '*    in a RAMDISK and loaded/run by using PROKEY, or any user defined    *
220 '*    keying system.                                                      *
230 '*                                                                        *
240 '*    Program code expanded for clarity.  To make this program take less  *
250 '*    space, run/load faster, I recommand removing remarks lines,         *
260 '*    compressing code and saving under a short name, without /A option.  *
270 '*    If you have no C: (RAMDISK/HARDDISK), change variable D in line     *
280 '*    340 to something other than 3. (i.e. D=2)                           *
290 '*                                                                        *
300 '*    Please report any bugs/suggestions to me via a SIG message.         *
310 '*                                                                        *
320 '*                                                                        *
330 '*********************CALL MAIN MENU - INITIAL INPUT***********************
340 SCREEN 0,0,0:WIDTH 80:D=3 'make d<>3 with no C: drive present
350 GOSUB 1090
360 K$=INPUT$(1)
370 IF K$="S" OR K$="s" THEN 1290 ELSE IF K$="E" OR K$="e" THEN 1300
380 IF D=3 THEN IF K$="C" OR K$="c" THEN B=2:GOTO 410
390 IF K$="B" OR K$="b" THEN B=1 ELSE IF K$="A" OR K$="a" THEN B=0 ELSE BEEP:GOTO 360
400 '************************CALL FILES ***************************************
410 IF SCRNCK=1 THEN CLS
420 LOCATE 1,1:IF B=0 THEN D$="A:" ELSE IF B=1 THEN D$="B:" ELSE IF B=2 AND D=3 THEN D$="C:"
430 ON ERROR GOTO 1280:FILES D$+"*.BAS"
440 AA=CSRLIN:GOSUB 1170:ON ERROR GOTO 350:Y=2:X=0
450 F$="":COLOR 0,7:FOR L=1 TO 12:LOCATE Y,X+L:C$=CHR$(SCREEN(Y,X+L)):PRINT C$:F$=F$+C$:NEXT L:COLOR 7,0
460 '************************INKEY$ SCREENING *********************************
470 K$=INKEY$:IF LEN(K$)=0 THEN 470
480 IF LEN(K$)=2 THEN 720 'CURSOR
490 IF K$="A" OR K$="a" THEN B=0:COLOR 7,0:GOTO 700
500 IF K$="B" OR K$="b" THEN B=1:COLOR 7,0:GOTO 700
510 IF D=3 AND (K$="C" OR K$="c") THEN B=2:COLOR 7,0:GOTO 700
520 IF SFLAG=9 THEN IF K$="Y" OR K$="y" THEN CLS:SYSTEM
530 IF SFLAG=9 AND SCRNCK=1 THEN SFLAG=0:K$="":GOSUB 1340:GOTO 360
540 IF SFLAG=9 AND SCRNCK=2 THEN GOSUB 1340:GOTO 450
550 IF SFLAG=8 THEN IF K$="Y" OR K$="y" THEN CLS:NEW
560 IF SFLAG=8 AND SCRNCK=1 THEN SFLAG=0:K$="":GOSUB 1340:GOTO 360
570 IF SFLAG=8 AND SCRNCK=2 THEN GOSUB 1340:GOTO 450
580 IF SFLAG=7 THEN IF K$="Y" OR K$="y" THEN OKAY=1:GOTO 870
590 IF SFLAG=7 THEN SFLAG=0:K$="":GOSUB 1340:GOTO 450
600 IF SFLAG=6 THEN IF K$="Y" OR K$="y" THEN OKAY=2:GOTO 920
610 IF SFLAG=6 THEN SFLAG=0:K$="":GOSUB 1340:GOTO 450
620 IF ASC(K$)=13 THEN 790 'LOAD
630 IF ASC(K$)=42 THEN 830 'RUN
640 IF ASC(K$)=83 OR ASC(K$)=115 THEN 1290 'SYSTEM
650 IF (ASC(K$)=68 OR ASC(K$)=100) AND LEFT$(F$,1)<>" " THEN 1310 'DELETE
660 IF ASC(K$)=69 OR ASC(K$)=101 THEN 1300 'END
670 IF (ASC(K$)=82 OR ASC(K$)=114) AND LEFT$(F$,1)<>" " THEN 1320 'RENAME
680 IF ASC(K$)=27 THEN 350 'RETURN MENU
690 BEEP:K$="":GOTO 470
700 FOR JJ=1 TO AA:LOCATE JJ,1:PRINT STRING$(80,32):NEXT:GOTO 410
710 '******************FILE HIGHLIGHT POSITION CONTROL*************************
720 R$=RIGHT$(K$,1):A=ASC(R$):IF A=72 AND Y>2 THEN GOSUB 1070:Y=Y-1:GOTO 450
730 IF A=80 AND Y<AA-3 THEN GOSUB 1070:Y=Y+1:GOTO 450
740 IF A=75 AND X>12 THEN GOSUB 1070:X=X-18:GOTO 450
750 IF A=77 AND X<50 THEN GOSUB 1070:X=X+18:GOTO 450
760 GOTO 470
770 '***********************EXECUTION LINES************************************
780 '=========LOADING ROUTINE
790 IF LEFT$(F$,1)=" " THEN BEEP:GOTO 450 ELSE CLS:COLOR 0,7:PRINT"Loading ---> ";F$:COLOR 7,0
800 IF B=1 THEN LOAD"B:"+F$ ELSE IF B=2 THEN LOAD"C:"+F$ ELSE LOAD"A:"+F$
810 GOTO 1070
820 '=========RUNNING ROUTINE
830 IF LEFT$(F$,1)=" " THEN BEEP:GOTO 450 ELSE CLS:COLOR 0,7:PRINT"Running ---> ";F$:COLOR 7,0
840 IF B=1 THEN RUN"B:"+F$ ELSE IF B=2 THEN RUN"C:"+F$ ELSE RUN"A:"+F$
850 GOTO 1070
860 '=========DELETING ROUTINE
870 IF OKAY=1 AND B=0 THEN KILL"A:"+F$:SFLAG=0:OKAY=0:GOTO 900
880 IF OKAY=1 AND B=1 THEN KILL"B:"+F$:SFLAG=0:OKAY=0:GOTO 900
890 IF OKAY=1 AND B=2 THEN KILL"C:"+F$:SFLAG=0:OKAY=0:GOTO 900
900 GOSUB 1340:GOTO 700
910 '=========RENAMING ROUTINE
920 COLOR 0,7:LOCATE AA+1,1:PRINT"New Name for ";F$;:INPUT" -->";N$:COLOR 7,0
925 IF LEN(N$)=0 THEN BEEP:GOTO 1020
930 IF RIGHT$(N$,4)<>".bas" OR RIGHT$(N$,4)<>".BAS" THEN N$=N$+".BAS"
940 LOCATE AA+1,1:PRINT STRING$(79,32)
950 LOCATE AA+1,1:COLOR 0,7:PRINT"Is ";N$;" correct? (Y/N)":COLOR 7,0
960 Q$=INKEY$:IF LEN(Q$)=0 THEN 960
970 IF Q$="Y" OR Q$="y" THEN Q=1:GOTO 980 ELSE 1020
980 ON ERROR GOTO 1030
990 IF Q=1 AND OKAY=2 AND B=0 THEN NAME"A:"+F$ AS "A:"+N$:GOTO 1020
1000 IF Q=1 AND OKAY=2 AND B=1 THEN NAME"B:"+F$ AS "B:"+N$:GOTO 1020
1010 IF Q=1 AND OKAY=2 AND B=2 THEN NAME"C:"+F$ AS "C:"+N$
1020 GOSUB 1340:LOCATE AA+1,1:PRINT STRING$(50,32):N$="":Q=0:SFLAG=0:OKAY=0:GOTO 410
1030 IF ERR=58 THEN RESUME 1040 ELSE SCRNCK=1:GOTO 410
1040 BEEP:BEEP:COLOR 0,7:LOCATE AA+1,1:PRINT"Duplicate Name, try again!!!!":COLOR 7,0
1050 FOR JJ=1 TO 1500:NEXT:GOTO 1020
1060 '************************SCREENS******************************************
1070 FOR L=1 TO 12:LOCATE Y,X+L:PRINT CHR$(SCREEN(Y,X+L)):NEXT L:F$=LEFT$(F$,0):RETURN
1080 '***********************SCREEN #1*****************************************
1090 ON ERROR GOTO 350:CLS:LOCATE 1,1:PRINT CHR$(201):I=1:FOR J=2 TO 43:LOCATE I,J:PRINT CHR$(205);:NEXT J
1100 PRINT CHR$(187);:I=8:AA=9
1110 FOR J=2 TO 43:LOCATE I,J:PRINT CHR$(205);:NEXT J:PRINT CHR$(188);:LOCATE 8,1:PRINT CHR$(200):J=1
1120 FOR I=2 TO 7:LOCATE I,J:PRINT CHR$(186);:NEXT I:J=44:FOR I=2 TO 7:LOCATE I,J:PRINT CHR$(186);:NEXT I
1130 IF FLAG=1 THEN LOCATE 2,5:PRINT"*** No .BAS files in drive <";D$;"> ***":FLAG=0
1140 SCRNCK=1:LOCATE 3,8:PRINT "Select drive A,B";:IF D=3 THEN PRINT", or C files"
1150 LOCATE 5,6:PRINT"<E> to END and CLEAR this program":LOCATE 6,6,0:PRINT"<S> to RETURN to DOS":RETURN
1160 '************************SCREEN #2****************************************
1170 LOCATE AA-2,20:FOR I=20 TO 80:PRINT CHR$(205);:NEXT:COLOR 0,7:LOCATE AA-2,69:PRINT"DRIVE --> ";D$:COLOR 7,0
1180 IF SCRNCK=2 THEN RETURN ELSE SCRNCK=2:LOCATE 18,1:FOR I=1 TO 80:PRINT CHR$(205);:NEXT
1190 LOCATE 19,1:PRINT"<A> ------ A-drive .BAS FILES":LOCATE 20,1:PRINT"<B> ------ B-drive .BAS FILES"
1200 IF D=3 THEN LOCATE 21,1:PRINT"<C> ------ C-drive .BAS FILES"
1210 LOCATE 22,1:PRINT"<S> ------ RETURN to DOS":LOCATE 23,1:PRINT"<E> ------ END and CLEAR this program"
1220 LOCATE 19,40:PRINT"<ESC> ---- RETURN to opening screen"
1230 LOCATE 20,40:PRINT"<ENTER> -- LOAD --- highlighted file"
1240 LOCATE 21,40:PRINT"<*> ------ RUN ---- highlighted file"
1250 LOCATE 22,40:PRINT"<D> ------ DELETE - highlighted file"
1260 LOCATE 23,40:PRINT"<R> ------ RENAME - highlighted file":RETURN
1270 '************************SAFETY CHECKS************************************
1280 BEEP:FLAG=1:RESUME 350
1290 BEEP:S$="** RETURN TO DOS **":SFLAG=9:GOTO 1330
1300 BEEP:S$="** END this PROGRAM **":SFLAG=8:GOTO 1330
1310 BEEP:S$="DELETE ---> "+F$:SFLAG=7:GOTO 1330
1320 BEEP:S$="RENAME ---> "+F$:SFLAG=6
1330 BEEP:LOCATE AA,1:COLOR 0,7:PRINT S$:LOCATE AA,40:PRINT"Are you sure? (Y/N)":COLOR 7,0:GOTO 470
1340 SFLAG=0:LOCATE AA,1:PRINT STRING$(30,32):LOCATE AA,40:PRINT STRING$(19,32):RETURN
1350 '************************END OF PROGRAM***********************************
```

## KILL.BAS

```bas
10 '***************************************************************************
20 '*                                                                         *
30 '*                               KILL.BAS                                  *
40 '*                                                                         *
50 '*                       BY ROBERT RELF (70176,403)                        *
60 '*                                                                         *
70 '*                               (C) 1983                                  *
80 '*                                                                         *
90 '***************************************************************************
100 '
110 '         REQUIRES DOS 2.00,COLOR GRAPHICS ADAPTER,2 DISK DRIVES
120 '         FORMAT A DISK WITH THE "/S" OPTION
130 '         COPY ONTO IT: KILL.BAS,BASICA.COM,COMMAND.COM,SORT.EXE
140 '         OR RUN WITH DOS DISK IN DRIVE "A"
150 '         REMOVE APOSTROPHE FROM LINE 180 FOR COLOR MONITOR OR
160 '         FROM LINE 190 FOR NON-IBM MONOCHROME MONITOR
170 '
180 COL1=1:COL2=2:COL4=4:COL5=5:COL7=7:COL10=10:COL14=14:COL15=15
190 'COL1=0:COL2=15:COL4=15:COL5=15:COL7=7:COL10=7:COL14=15:COL15=15
195 GOSUB 50000  'switch to color/graphics   ** Added by Tom D. Hall **
200 KEY OFF:SCREEN 0,1:COLOR COL15,0,0:WIDTH 40:CLS:LOCATE 5,19:PRINT "IBM"
210 LOCATE 7,12,0:PRINT "Personal Computer"
220 COLOR COL10,0:LOCATE 10,5,0:PRINT CHR$(213)+STRING$(31,205)+CHR$(184)
230 LOCATE 11,5,0:PRINT CHR$(179)+"             KILL              "+CHR$(179)
240 LOCATE 12,5,0:PRINT CHR$(179)+"                               "+CHR$(179)
250 LOCATE 13,5,0:PRINT CHR$(179)+STRING$(31,32)+CHR$(179)
260 LOCATE 14,5,0:PRINT CHR$(179)+"         Version 1.00          "+CHR$(179)
270 LOCATE 15,5,0:PRINT CHR$(212)+STRING$(31,205)+CHR$(190)
280 COLOR COL15,0:LOCATE 17,6,0:PRINT "(C) Copyright  Rob Relf  1983"
290 COLOR COL14,0:LOCATE 23,7,0:PRINT "Press space bar to continue"
300 DEF SEG : POKE 106,0          'CLEAR KEYBOARD BUFFER
310 IK$=INKEY$ : IF IK$ = "" THEN GOTO 310
320 ON ERROR GOTO 1360
330 DEF SEG=0:POKE &H417,192      'CAPS LOCK / NUM LOCK ON
340 SCREEN ,,1,1:WIDTH 80:COLOR COL7,COL1,COL1:CLS:DIM FILE$(200):ROW=10
350 PRINT "THIS IS A PROGRAM FOR DELETING MULTIPLE FILES FROM THE SELECTED DISK.
360 PRINT "UP TO 80 FILES MAY BE DELETED IN ONE SESSION.
370 PRINT "WHICH DISK DO YOU WISH TO ERASE FILES FROM ?";
380 PRINT " PLEASE TYPE THE DRIVE LETTER.
390 B$=INKEY$
400 IF B$="" THEN GOTO 390
410 IF ASC(B$)>68 OR  ASC(B$)<65 THEN BEEP:GOTO 390  'TEST FOR "A" TO "D"
420 CLS
430 SHEL$="DIR "+B$+":| SORT > FILE.LST":GOSUB 1380 'SORT DIR TO DISK FILE
440 SCREEN ,,1,1:CLS
450 LOCATE 3,1:COLOR COL5
460 PRINT STRING$(45,205);CHR$(203);STRING$(34,205);
470 FOR X=1 TO 11:PRINT TAB(46) CHR$(186);:NEXT
480 PRINT TAB(46) CHR$(204);
490 LOCATE 15,47:PRINT STRING$(34,205);
500 FOR X=13 TO 20:PRINT TAB(46) CHR$(186);:NEXT
510 LOCATE 24,1:PRINT STRING$(45,205);CHR$(188);:COLOR COL7
520 LOCATE 1,1
530 PRINT "USE THE "CHR$(24)" AND "CHR$(25)" KEYS TO SELECT AND THE Del KEY ";
540 PRINT "TO MARK THE FILE(S) TO DELETE.
550 PRINT "PRESS THE SPACE BAR TO ADVANCE THE LISTING ON THE SCREEN ";
560 PRINT "(YOU CANNOT COME BACK)
570 LOCATE 4,48:PRINT"PRESS THE ESCAPE KEY TO EXIT
580 LOCATE 5,48:PRINT"FROM THIS PROGRAM.
590 LOCATE 7,48:PRINT"TO VIEW THE CONTENTS OF A FILE,
600 LOCATE 8,48:PRINT"MOVE THE CURSOR TO THE NAME,
610 LOCATE 9,48:PRINT"THEN TYPE THE LETTER "CHR$(34)"T"CHR$(34)"."
620 LOCATE 10,48:PRINT"USE CONTROL / NUM LOCK
630 LOCATE 11,48:PRINT"TO CONTROL SCROLLING.
640 LOCATE 13,48:PRINT"PRESS <ENTER> WHEN YOU ARE DONE
650 LOCATE 14,48:PRINT"SELECTING FILES TO DELETE.
660 KEY 15,CHR$(&H40)+CHR$(83)     'ASSIGN SPECIAL FUNCTION KEYS
670 KEY 16,CHR$(&H40)+CHR$(1)
680 ON KEY(11)GOSUB 790:KEY(11)ON
690 ON KEY(14)GOSUB 810:KEY(14)ON
700 ON KEY(15)GOSUB 950:KEY(15)ON
710 ON KEY(16)GOSUB 1340:KEY(16)ON
720 OPEN "FILE.LST" FOR INPUT AS #1   'GET DIR LISTING FROM DISK
730 GOSUB 830
740 C$=INKEY$
750 IF C$=" "THEN ROW=4:GOSUB 830
760 IF C$=CHR$(13) THEN 1120
770 IF C$="T" THEN GOSUB 1420
780 GOTO 740
790 IF CSRLIN>4 THEN LOCATE CSRLIN-1,1
800 RETURN
810 IF CSRLIN<23 THEN LOCATE CSRLIN+1,1
820 RETURN
830 IF DONE=1 THEN BEEP:RETURN
840 LOCATE 4,1
850 FOR X=1 TO 20
860 IF NOT EOF(1) THEN 900
870 IF EOF(1) THEN CLOSE #1:DONE=1:COLOR COL2
880 PRINT "****END OF LISTING HAS BEEN REACHED****
890 COLOR COL7:LOCATE ROW,1,1,0,7:RETURN
900 INPUT #1,A$
910 PRINT A$
920 NEXT
930 LOCATE ROW,1,1,0,7
940 RETURN
950 IF POS(0)>1 THEN BEEP:RETURN
960 IF Z=80 THEN COLOR COL7:GOTO 1120
970 COLOR COL4:Z=Z+1
980 FOR X=1 TO 12
990 IF X=9 THEN FILE$(Z)=FILE$(Z)+"."
1000 V=SCREEN(CSRLIN,X,1):IF V MOD 16=4 THEN BEEP:Z=Z-1:GOTO 1090
1010 IF V MOD 16=15 THEN BEEP:Z=Z-1:GOTO 1090  'TEST FOR FILE ALREADY MARKED
1020 C=SCREEN(CSRLIN,X)
1030 IF C=32 THEN 1070
1040 C$=CHR$(C)
1050 FILE$(Z)=FILE$(Z)+C$
1060 LOCATE CSRLIN,X:PRINT C$;
1070 NEXT
1080 Y=CSRLIN:LOCATE 25,1:PRINT FILE$(Z);"         ";:LOCATE Y,X
1090 COLOR COL7
1100 IF CSRLIN<23 THEN LOCATE CSRLIN+1,1
1110 RETURN 740
1120 CLS:LOCATE 4,1
1130 FOR X=1 TO Z
1140 IF X>60 THEN LOCATE X-57,61:GOTO 1170  'FORMAT SCREEN LISTING OF
1150 IF X>40 THEN LOCATE X-37,41:GOTO 1170  'MARKED FILENAMES
1160 IF X>20 THEN LOCATE X-17,21:GOTO 1170
1170 PRINT USING"###";X;:PRINT " "+FILE$(X)
1180 NEXT
1190 LOCATE 1,1,0
1200 PRINT "THESE ARE THE FILES THAT WILL BE ";:COLOR COL14:PRINT "DELETED";
1210 COLOR COL7:PRINT " FROM DRIVE ";B$;". IS THIS OK?
1220 PRINT "ENTER THE NUMBER OF ONE FILE TO ";CHR$(34);"UNDELETE";CHR$(34);
1230 PRINT " OR JUST <ENTER> IF LIST IS CORRECT.":INPUT "",I
1240 IF I=0 THEN 1260
1250 FILE$(I)="":GOTO 1120
1260 CLS:LOCATE 5,20:PRINT "DELETING FILES. PLEASE STAND BY.
1270 FOR X=1 TO Z
1280 LOCATE 8,1:PRINT STRING$(20," ")
1290 LOCATE 8,1:PRINT B$+":"+FILE$(X)
1300 KILL B$+":"+FILE$(X)
1310 NEXT
1314 CLOSE                      '** ADDED BY TOM D. HALL **"
1315 KILL B$+":FILE.LST"        '** ADDED BY TOM D. HALL **"
1320 SCREEN ,,0,0:LOCATE ,,,7,7:CLS
1330 LOCATE 5,20:PRINT "*********** FINISHED *************":GOTO 1350
1340 SCREEN ,,0,0:LOCATE ,,,7,7:CLS
1350 LOCATE 1,1:END
1360 IF ERR=53 THEN RESUME 1310 ELSE IF ERR=64 THEN RESUME 1310
1370 IF ERR=76 THEN RESUME 1310 ELSE PRINT "OTHER ERROR"  'IGNORE THESE ERRORS
1380 DEF SEG:A=PEEK(&H30):B=PEEK(&H31)   'GET OFFSET TO START OF PROGRAM TEXT
1390 SHELL SHEL$                         'EXECUTE DOS COMMAND
1400 DEF SEG:POKE &H30,A:POKE &H31,B     'RESTORE OFFSET TO START OF PROGRAM
1410 RETURN
1420 FOR X=1 TO 12                  'GET FILENAME TO USE IN DOS "TYPE" COMMAND
1430 IF X=9 THEN TYPE$=TYPE$+"."
1440 C=SCREEN(CSRLIN,X)
1450 IF C=32 THEN 1480
1460 C$=CHR$(C)
1470 TYPE$=TYPE$+C$
1480 NEXT
1490 ROW=CSRLIN                               'GET CURRENT ROW
1500 SCREEN ,,0,0:COLOR COL7,COL1,COL1:CLS    'CHANGE DISPLAY PAGE OF C/G ADPT
1510 SHEL$="TYPE "+B$+":"+TYPE$:GOSUB 1380    'FILENAME TO TYPE
1520 COLOR COL2:LOCATE 25,4
1530 PRINT"          ********* STRIKE ANY KEY TO RETURN TO PROGRAM ********";
1540 COLOR COL7
1550 TYPE$=""
1560 D$=INKEY$:IF D$="" THEN 1560
1570 SCREEN ,,1,1:LOCATE ROW,1,1,0,7          'RETURN TO FORMER DISPLAY PAGE
1580 RETURN
49990 REM ---- Switch to Color Monitor    ** Added by Tom D. Hall **
50000 KEY OFF   'turn off 25th line
50010 CLS       'clear screen
50020 LOCATE ,,0 'turn off cursor
50030 DEF SEG =0 'address bios
50040 POKE &H410,(PEEK(&H410) AND &HCF) OR &H10 'change equipment parameter
50050 DEF SEG   'address default memory
50060 SCREEN 1  'set medium resolution graphics
50070 SCREEN 0  'set text mode
50080 WIDTH 80  'set width to 80 characters
50090 WIDTH 40  'set width to 40 characters
50100 LOCATE ,,1,6,7    'turn on cursor
50110 SCREEN 1,0 'set medium resolution graphics and enable color
50120 COLOR 0,0  'set background to black and select palette 0
50130 RETURN
```

## QPRINT.BAS

```bas
10 ' qprint.bas
20 ' The program demonstrates the use of the QPRINT.BIN direct screen writing
30 ' routine described in Byte, July 1983, pg 408.
40 DIM BB$(255)
50 DEF SEG=&H1700:QPRINT.ADDR=0
60 BLOAD "qprint.bin",QPRINT.ADDR
70 CLS:KEY OFF:WIDTH 80
80 '---Print a border with PRINT
90 LOCATE 1,10:PRINT"╔"STRING$(60,205)"╗":FOR K=1 TO 10:PRINT TAB(10)"║"TAB(71)"║":NEXT:PRINT TAB(10)"╚"STRING$(60,205)"╝"
100 LOCATE 2,12:PRINT"This area was printed using a normal print statement."
110 FOR K%=1 TO 8:LOCATE ,12:PRINT STRING$(58,"*"):NEXT
120 LOCATE ,12:PRINT"You probable noted that it was not particularily rapid."
130 '---Now print a border with QPRINT
140 ROW%=13:CLM%=10:P$="╔"+STRING$(60,205)+"╗":GOSUB 210  'print top line
150                 P$="║"+SPACE$ (60)    +"║":FOR ROW%=14 TO 23:GOSUB 210:NEXT
160                 P$="╚"+STRING$(60,205)+"╝":GOSUB 210
170 ROW%=14:CLM%=12:P$="-----------This area was printed using QPRINT ---------"
180 GOSUB 210 :     P$=STRING$(58,1) : FOR ROW%=15 TO 22:GOSUB 210:NEXT
190 P$="------------ A performance worthy of a smile! ------------":GOSUB 210
200 END
210 CALL QPRINT (P$,ROW%,CLM%): RETURN
```

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk 0084

     Volume in drive A has no label
     Directory of A:\

    CHMOD    C        8869  10-08-83   1:01a
    CHMOD    EXE     15104   9-30-83  10:44p
    CMODE    DOC      1775   9-26-83   3:12a
    CRC      TXT      1404  11-09-84  12:10p
    CRCK4    COM      1536  10-21-82   7:54p
    DOWDIF   BAT       547   9-22-83   8:04a
    DOWDIF   COM     35968   9-22-83   8:42a
    DOWDIF   DOC     15416   9-22-83   8:05a
    DOWTRY   TXT       708   9-22-83   7:47a
    DRAWIT   BAS     11294   9-30-83   4:02a
    FILECMD  BAS      7726   9-23-83   3:52p
    FILECMD2 BAS      8482   9-23-83   3:52p
    FPR      C        5577   9-27-83   6:00p
    KILL     BAS      6579   9-23-83   4:17p
    QPRINT   ASM      4933  10-11-83  10:22p
    QPRINT   BAS       994  10-12-83  12:47a
    QPRINT   BIN       105   7-11-83   9:26p
    TXTPRO   DOC      1256   9-30-83   5:47p
    TXTPRO   EXE      2560  10-01-83  12:12a
    UPVC     DOC      2552   9-22-83   7:49a
           20 file(s)     133385 bytes
                           22016 bytes free
