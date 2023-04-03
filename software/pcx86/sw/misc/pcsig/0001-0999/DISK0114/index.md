---
layout: page
title: "PC-SIG Library Disk #114"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0114/
machines:
  - id: ibm5150
    type: pcx86
    config: /machines/pcx86/ibm/5150/cga/256kb/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk 0114"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5150" %}

{% comment %}info_begin{% endcomment %}

## Information about "ASSEMBLY"

    The file ASM. is a tutorial on the assembly language for the IBM-PC's
    8088 processor and was distributed by IBM itself.  It is a concise
    description of the essentials of IBM-PC assembly language programming.
    NEWCLOCK is a fixit device driver addressing the 24 hour rollover
    problem as well as mis-stamped file times.  UASMLS is a utility that
    will enable the creation of an almost-assembler-ready listing from the
    output of a DEBUG dis-assembly.  The PCTALK files are overlays to the
    original PCTALK III release and support VT100 or VT52 terminal
    protocols.  TERM is overlay for the IBM ASYNC.BAS program.
    
    Special Requirements:  Some programs require a version of BASIC.
    
    How to Start:  Type GO (press enter).
    
    Suggested Registration:  None.
    
    File Descriptions:
    
    BASCOM   DOC  Four patches for the BASIC Compiler.
    CABLE    DOC  Procedure for making a cable for the Sony Profeel.
    FPLOT    BAS  Plots math functions in polar and Cartesian coordinates.
    FPLOT    DOC  Documentation file for FPLOT.BAS.
    KBDFIX   BAS  Fix for keyboard buffer program in September Softalk.
    NEWCLOCK DOC  Documentation file for NEWCLOCK.SYS.
    NEWCLOCK SYS  Fix for DOS 2.0 clock update function.
    PC-TALK  DEF  PC-Talk utility file.
    PC-TALK  DIR  PC-Talk utility file.
    PC-TALK  KEY  PC-Talk utility file.
    PCT3VT   BAS  Vidtex, VT52, VT100 & ANSI cursor control to PC-Talk III.
    PROFEEL  DOC  Review of Sony KX 1211 HG monitor/TV.
    TERM     BAS  Adds auto-dial and auto log-on to IBM ASYSC. Comm. 2.0.
    TERM     DOC  Documentation file for TERM.BAS.
    TREND123 DOC  Documentation file for TREND123.MAC.
    TREND123 MAC  LOTUS 123 macro for straight line/exponential curves.
    UASMLS   DOC  Documentation file for UASMLS.EXE.
    UASMLS   EXE  Formats DEBUG unassemble output file.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FPLOT.BAS

```bas
10 '         Function plotting program, adapted from:
20 '         Creative Computing: Vol 9(no.1), 202, 1983
30 '                           by: James Fuller
40 '                  Modified by: David Bush
50 DEFINT P
60 KEY OFF
70 XOFF=200
80 SCREEN 0:CLS
90 PRINT:PRINT:PRINT
100 PRINT "This program will plot the function located at line no. 270"
110 PRINT
120 PRINT "For example:"
130 COLOR 15,0
140 PRINT:PRINT "FN R(Q)=COS(Q)+COS(2*Q)+COS(5*Q)":COLOR 7,0
150 PRINT
160 PRINT "Do you wish a:"
170 PRINT
180 PRINT"       1) A Cartesian plot"
190 PRINT"       2) A Polar plot"
200 PRINT"       3) A Three dimensional plot"
210 PRINT:PRINT"       4) Recall a previously stored image
220 PRINT:INPUT"            Input 1, 2, 3 or 4 ";PLOT
230 PRINT
240 ' ------------------------------------------------------------------------
250 '           Function to Plot:
260 '
270 DEF FN R(Q)=2*COS(Q)-COS(2*Q)+ABS(SIN(5*Q))
280 '
290 '--------------------------------------------------------------------------
300 IF PLOT<1 OR PLOT>4 THEN 220
310 ON PLOT GOTO 320,320,950,1570
320 '          Set Scaling
330 CLS:PRINT:PRINT
340 INPUT"Function increment =";INX:PRINT
350 PRINT
360 PRINT" To expand or contract axes, enter a  scaling factor."
370 PRINT" 1 is normal (enter 2 for double scale, 0.5 for half scale).
380 PRINT
390 INPUT"X-Axis scaling factor = ";SCALE.X
400 PRINT
410 INPUT"Y-Axis scaling factor = ";SCALE.Y
420 PRINT
430 INPUT"To move the origin left or right, enter a number from -130 to 130. ";SHIFT.X
440 PRINT
450 INPUT"To move the origin up or down, enter a number from -90 to 90. ";SHIFT.Y
460 '
470 CLS:SCREEN 2
480 KEY(1) ON:KEY OFF:LOCATE 25,30
490 PRINT" * * Use <F1> to Save or Stop * * ";
500 ' - - - - - - - - -   DRAW AXES  - - - - - - - - - - -
510     Y.AXIS=96+SHIFT.Y:X.AXIS=139+SHIFT.X
520       LINE(1.2*X.AXIS+XOFF,0) - (1.2*X.AXIS+XOFF,191)
530       LINE(XOFF,Y.AXIS) - (1.2*278+XOFF,Y.AXIS)
540             FOR XR=X.AXIS TO 278 STEP 19*SCALE.X
550                 LINE(1.2*XR+XOFF,Y.AXIS-1) - (1.2*XR+XOFF,Y.AXIS+1):NEXT XR
560             FOR XL=X.AXIS TO 0 STEP -19*SCALE.X
570                 LINE(1.2*XL+XOFF,Y.AXIS-1) - (1.2*XL+XOFF,Y.AXIS+1):NEXT XL
580             FOR YD=Y.AXIS TO 191 STEP 15*SCALE.Y
590                 LINE(1.2*X.AXIS-1+XOFF,YD) - (1.2*X.AXIS+1+XOFF,YD):NEXT YD
600             FOR YU=Y.AXIS TO 0 STEP -15*SCALE.Y
610                 LINE(1.2*X.AXIS-1+XOFF,YU) - (1.2*X.AXIS+1+XOFF,YU):NEXT YU
620 '
630 ON PLOT GOTO 810,640
640 ' - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
650 '                    ************************
660 '                    *      Polar Plot      *
670 '                    ************************
680 FOR G=0 TO 360 STEP INX
690   T=G/57.29579
700 ON KEY (1) GOSUB 1410
710     X=FN R(T)*COS(T)
720     Y=FN R(T)*SIN(T)
730       XX=X*(19*SCALE.X)+X.AXIS
740       YY=-Y*(15*SCALE.Y)+Y.AXIS
750         IF XX<0 OR XX>270 THEN 790
760         IF YY<0 OR YY>191 THEN 790
770       PSET(1.2*XX+XOFF,YY)
780     LINE -(1.2*XX+XOFF,YY)
790 NEXT G
800 GOTO 1420
810 ' - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
820 '
830 '                   ****************************
840 '                   *      Cartesian plot      *
850 '                   ****************************
860 FOR G=0 TO 278 STEP INX
870 ON KEY (1) GOSUB 1410
880     X=(G-X.AXIS)/(19*SCALE.X)
890     Y=FN R(X)
900             YY=Y.AXIS-(Y*15*SCALE.Y)
910                     IF YY<0 OR YY>191 THEN 930
920             PSET(1.2*G+XOFF,YY)
930 NEXT G
940 GOTO 1420
950 ' - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
960 '                  *************************************
970 '                  *      Three-Dimensional plot       *
980 '                  *************************************
990 CLS
1000 PRINT:PRINT
1010 PRINT"To expand or compress the plot vertically, enter a number
1020 INPUT"from -40 to 40 (20 is typical). ";N1
1030 PRINT
1040 PRINT"To move the plot up or down on the screen, enter a number"
1050 INPUT"from -50 to 150 (90 is typical). ";N2
1060 '
1070 REM  constants = A, B, SHIFT.X, SHIFT.Y, Y.AXIS, X.AXIS, G
1080 REM  FOR-NEXT variables = H,BB
1090 REM     dependent on H= AA, BB
1100 REM     dependent on H and BB = CC, D1, DD
1110 REM  plotting variables = X, X1, Y, Y1
1120 REM     dependent on BB and H = X, X1
1130 REM     dependent on DD and H = Y, Y1
1140 '
1150            A=144:B=2.25:SHIFT.X=N1:SHIFT.Y=.0327:Y.AXIS=160:X.AXIS=N2:G=199
1160 ' - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
1170 CLS:SCREEN 2
1180 KEY(1) ON:KEY OFF:LOCATE 25,25
1190 PRINT" * * Use <F1> to Save or Stop * * ";
1200 '
1210 FOR H= -A TO A STEP B
1220 AA=INT(.5+SQR(A^2-H^2))
1230 FOR BB=-AA TO AA
1240 ON KEY (1) GOSUB 1410
1250 CC=SQR(BB^2+H^2)*SHIFT.Y:D1=FN R(CC):DD=D1*SHIFT.X
1260 GOSUB 1300
1270 NEXT BB
1280 NEXT H
1290 GOTO 1420
1300 ' - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
1310 X=BB+(H/B)+Y.AXIS
1320 Y=DD-(H/B)+X.AXIS
1330 X1=INT(.8499999*X)
1340 Y1=INT(.9*(G-Y))
1350 IF Y1<0 OR Y1>190 THEN RETURN
1360 PSET(1.2*X1+XOFF,Y1)
1370 CN=0 'Erase background
1380 LINE(1.2*X1+XOFF,(Y1+1)) - (1.2*X1+XOFF,190),CN
1390 CN=1
1400 RETURN
1410 ' - - - - - - - - - - Save/Recall Images- - - - - - - - - - - - - - - - -
1420 LOCATE 25,1:PRINT SPACE$(70);
1430 LOCATE 25,25:PRINT"Save this plot(y/n) ?";
1440 GOSUB 1690
1450 IF R$="n" OR R$="N" THEN 1510
1460 ON ERROR GOTO 1700
1470 LOCATE 25,25:PRINT SPACE$(50);
1480 LOCATE 25,25:INPUT;"Name: ";N$
1490 DEF SEG=&HB800 'point segment at screen buffer
1500 BSAVE N$,0,&H4000
1510 '  ? Repeat
1520 LOCATE 25,25:PRINT SPACE$(30);
1530 LOCATE 25,25:PRINT" Another plot (y/n) ?";
1540 GOSUB 1690
1550 IF R$="y" OR R$="Y" THEN SCREEN 0:LOCATE 12,10:PRINT"Program Halts execution":LOCATE 14,10:PRINT"Redefine this function to change plot
1560 SCREEN 0:COLOR 7,0
1570 'Recall Stored Image
1580 ON ERROR GOTO 1750
1590 PRINT" Do you want a listing of files? ";:GOSUB 1690
1600 IF R$="y" OR R$="Y" THEN FILES"*.bas                                       1586
1610 KEY(3) ON:KEY(4) ON
1620 KEY OFF
1630 LOCATE 25,1:INPUT"name of image to display ";A$
1640 CLS:KEY OFF:SCREEN 2
1650 DEF SEG=&HB800  'point segment to screen buffer
1660 BLOAD A$,0
1670 LOCATE 25,1
1680 GOTO 1520
1690 R$=INKEY$:IF R$="" THEN 1690 ELSE RETURN
1700 ' -- -- -- -- -- -- Error Traps -- -- -- -- -- --
1710 IF ERR=64 THEN LOCATE 25,10:PRINT"Illegal filename-- hit <CR> to continue.";:INPUT;R$:RESUME 1460
1720 IF ERR=61 THEN LOCATE 25,10:PRINT"Disk Full -- insert another disk, hit <CR> when ready.";:INPUT R$;:RESUME 1500
1730 IF ERR=52 THEN MSG$="Can't open that file"
1740 LOCATE 25,1:PRINT MSG$;" -- hit <CR> to continue.";:INPUT;R$:LOCATE 25,1:PRINT SPACE$(50);:RESUME 1480
1750 IF ERR=53 THEN MSG$="File not found"
1760 IF ERR=54 THEN MSG$="Not a screen image file"
1770 IF ERR<53 OR ERR>54 THEN 1790
1780 LOCATE 25,1:PRINT MSG$;" -- hit <CR> to continue.";:INPUT;R$:LOCATE 25,1:PRINT SPACE$(50);:RESUME 1590
1790 ON ERROR GOTO 0
```

## KBDFIX.BAS

```bas
1 'Fix for keyboard buffer program in Sept. Softalk
2 'Merge these statements with the orginal BASIC program.  Jeff Garbers
5 DEFINT A-Z
10 DIM CHECK(49)
20 FOR I = 1 TO 49 : CHECK(I)=0 : NEXT
40 FOR I=1 TO 49
130 FOR I=1 TO 49
180 IF LINECHECK<>163 THEN PRINT "Data bad in lines 2010-2060."
300 FOR I=1 TO 376
1000 DATA   233,   98,    2,    0,    0,    0,    0,    0
1370 DATA     2,    0,  187,   64,    0,  142,  219,  160
1380 DATA    23,    0,   91,   31,  207,   30,  184,    0
1390 DATA     0,  142,  216,  250,  161,   36,    0,   46
1400 DATA   163,    3,    1,  161,   38,    0,   46,  163
1410 DATA     5,    1,  199,    6,   36,    0,  166,    2
1420 DATA   140,   14,   38,    0,  251,  161,   88,    0
1430 DATA    46,  163,    7,    1,  161,   90,    0,   46
1440 DATA   163,    9,    1,  199,    6,   88,    0,   14
1450 DATA     3,  140,   14,   90,    0,  184,   64,    0
1460 DATA   142,  216,  250,  187,   30,    0,  137,   30
1470 DATA    26,    0,  199,    7,    0,    0,  131,  195
1480 DATA     2,  137,   30,   28,    0,  251,  186,  101
1490 DATA     3,  205,   39,    0,    0,    0,    0,    0
2000 '
2010 DATA   137,    0,   80,   37,  235,   44,  173,   56
2050 DATA   248,  215,  143,  245,   12,   58,    7,  171
2060 DATA    69,  166,   94,   60,   35,  158,  154,  173
2070 DATA   233
```

## PCT3VT.BAS

```bas
125 DIM ALT$(10),K$(40),SCR.DN(16),SCR.CLR(27),SCR.UP(14),GRAF(33),PARAM(10)
135 BS$=CHR$(8):LF$=CHR$(10):CR$=CHR$(13):ESC$=CHR$(27):ESC=0:WTH=-1:ANSI=-1:LED$=CHR$(27)
140 RCV$="":TRN$="":DIAL$="":STRT$="":SAV$="":GO$="===Proceed..."
170 RESTORE 172:FOR I=1 TO 16:READ SCR.DN(I):NEXT ' Reverse Index routine
172 DATA &H5152,&H5053,&H00B7,&H08B4,&H10CD,&HE788,&H00B9,&HBA00,&H174F,&H01B8,&HCD07,&H5810,&H595B,&HCB5A,&H05CD,&HCBCB
174 FOR I=1 TO 27:READ SCR.CLR(I):NEXT  ' Screen clearing routines
176 DATA &H00B0,&H5152,&H5053,&H00B7,&H03B4,&H10CD,&H08B4,&H10CD,&HC389,&HD189,&H4FB2,&H00B8,&HCD06,&H5810,&H003C,&H0875,&H595B,&HCB5A,&HFFB0,&HDAEB,&HC5FE,&H00B1,&H17B6,&H00B8,&HCD06,&HEB10,&HCBEB
180 FOR I=1 TO 14:SCR.UP(I)=SCR.DN(I):NEXT:SCR.UP(11)=&HCD06  'Index routine
182 FOR I=1 TO 33:READ GRAF(I):NEXT     ' Pseudo-graphics characters
184 DATA 32,4,177,26,21,27,25,248,241,23,18,217,191,218,192,197,223,205,196,22,220,195,180,193,194,179,243,242,227,247,156,250,32
210 DFNUM=30:DIM DP$(30), D$(30), DT$(30)
560 IF NOT EOF(1) THEN GOSUB 605
565 GOTO 515
640 FOR I=1 TO LEN(A$):C$=MID$(A$,I,1):IF ESC THEN GOSUB 12000:GOTO 655
645 IF C$=CR$ THEN LOCATE ,1:GOTO 655 ELSE IF C$=LF$ THEN GOSUB 12085:GOTO 655 ELSE IF C$=BS$ THEN GOSUB 2650:GOTO 655 ELSE IF C$=ESC$ AND ANSI<>0 THEN ESC=-1:GOTO 655
650 IF GRAPHICS THEN IF C$<"_" THEN PRINT C$; ELSE PRINT CHR$(GRAF(ASC(C$)-94)); ELSE PRINT C$;
655 NEXT
710 B$=INKEY$:IF B$<>"" THEN RETURN 525
730 RETURN
1245 NEXT:IF EXIT THEN EXIT=0:LOCATE ROW,COL:GOTO 560
1520 IF EX=72 THEN B$=LED$+"A":GOTO 535 ELSE IF EX=75 THEN B$=LED$+"D":GOTO 535
1525 IF EX=77 THEN B$=LED$+"C":GOTO 535 ELSE IF EX=80 THEN B$=LED$+"B":GOTO 535
1530 IF EX=71 THEN 2000 ELSE IF EX=83 THEN B$=CHR$(127):GOTO 535
1540 IF EX=47 THEN 3400 ELSE IF EX=24 THEN GOSUB 12140:GOTO 515
1610 IF EX=114 OR EX=132 THEN BEEP:PRINT:IF PR=0 THEN GOSUB 12225:GOTO 515 ELSE GOSUB 12230:GOSUB 2715:GOTO 515
1680 IF EX=30 THEN IF WTH THEN GOSUB 12165:GOTO 515 ELSE GOSUB 12170:GOTO 515
1685
1995 GOTO 515  ' DON'T remove this line!  (failsafe to return to terminal)
2007 IF NOT WTH THEN GOSUB 12170:GOSUB 2800
2130 DATA" Alt-W = Margin bell Alt-A = Width"
3035 RC=-1:IF RC$="X" THEN 4500 ELSE 560
4035 PRINT#1,Y$;:IF TR$="B" OR NOT ECH THEN 4050
4050 GOSUB 605:ROW=CSRLIN:COL=POS(0):GOSUB 4070:B$=INKEY$:IF B$="" THEN 4060
5208 IF NOT WTH THEN GOSUB 12170
5435 DATA Comm. port,"COM1:",Comm. init.,",CS,DS",Modem init.,,C/R subst.,"}",Term. type,TTY
5680 IF D$(30)="TTY" OR D$(30)="NONE" THEN ANSI=0 ELSE IF D$(30)="ANSI" OR D$(30)="VT100" THEN ANSI=1 ELSE ANSI=-1
5685 GOSUB 5815:RETURN
9015 IF ERL=225 THEN IF I=30 THEN DP$(30)="Term. type":D$(30)="TTY":GOSUB 5440:RESUME 300 ELSE RESUME 245
12000 ' Cursor Control  VT52 (VIDTEX) or VT100 (ANSI)
12005 IF ANSI>0 THEN 12025 ELSE 12010
12010 ESC=0:P=INSTR("CDABFGHIJKWXYZ<=>\]^_jlmrtuvwxy",C$):IF P THEN 12015 ELSE 12055  ' VT52 (Visual 200 or VIDTEX)
12015 ON P GOTO 12100,12100,12100,12100,12155,12160,12090,12220,12210,12190,12020,12230,12120,12240,12135,12145,12150,12020,12235,12225,12230,12180,12170,12165,12175,12195,12180,12180,12180,12190,12180
12020 RETURN   '  Function not implemented yet
12025 IF BRAK THEN 12030 ELSE IF PARA THEN 12065 ELSE IF C$="[" THEN 12080 ELSE IF C$="(" OR C$=")" THEN 12060 ELSE P=INSTR("=>78DEMZc",C$):IF P THEN 12070 ELSE 12055   ' VT100 (ANSI) Terminal
12030 P=INSTR("CDABHJKfhilmn",C$):IF P THEN BRAK=0:ESC=0:IF SAV$="" THEN SAV=1:PARAM(1)=0:PARAM(2)=0:GOTO 12050 ELSE 12040
12035 P=INSTR("?0123456789;",C$):IF P THEN SAV$=SAV$+C$:RETURN ELSE 12055
12040 SAV=1:PARAM(1)=0:FOR J=1 TO LEN(SAV$):IF MID$(SAV$,J,1)=";" THEN SAV=SAV+1:PARAM(SAV)=0 ELSE IF C$="?" THEN 12045 ELSE PARAM(SAV)=PARAM(SAV)*10+VAL(C$)
12045 NEXT:SAV$=""
12050 ON P GOTO 12095,12095,12095,12095,12105,12255,12250,12105,12020,12265,12270,12280,12260
12055 PRINT SAV$;C$;:SAV$="":ESC=0:BRAK=0:RETURN
12060 PARA=-1:RETURN
12065 ESC=0:PARA=0:P=INSTR("012AB",C$):IF P THEN ON P GOTO 12155,12020,12020,12160,12160 ELSE 12055
12070 ESC=0:ON P GOTO 12145,12150,12020,12020,12085,12075,12220,12245,12020
12075 LOCATE ,1:GOTO 12085
12080 BRAK=-1:RETURN
12085 GOSUB 12185:IF ROW<24 THEN LOCATE ROW+1,COL,1:RETURN ELSE P=VARPTR(SCR.UP(1)):CALL P:GOTO 12205              ' Index cursor with scroll
12090 LOCATE 1,1,1:RETURN            ' Move cursor to Home
12095 IF PARAM(1)=0 THEN 12100 ELSE PRINT STRING$(PARAM(1),P+27);:RETURN
12100 PRINT CHR$(P+27);:RETURN       ' Move cursor right,left,up,down
12105 P=40-40*WTH:ROW=PARAM(1):PARAM(1)=0:IF ROW=0 THEN ROW=1 'ANSI H or f codes
12110 COL=PARAM(2):PARAM(2)=0:IF COL=0 THEN COL=1
12115 IF ROW>24 OR ROW<1 OR COL>P OR COL<1 THEN RETURN ELSE 12205
12120 P=40-40*WTH:IF LEN(A$)<I+2 THEN A$=A$+INPUT$(I+2-LEN(A$),#1)
12125 I=I+1:ROW=ASC(MID$(A$,I,1))-31:I=I+1:COL=ASC(MID$(A$,I,1))-31:IF ROW>24 OR ROW<1 OR COL>P OR COL<1 THEN PRINT MID$(A$,I-2,2);:RETURN ELSE 12205  ' Position cursor with error checking for VT52
12130 ANSI=-1:LED$=ESC$:RETURN             ' Change to VT52 (VIDTEX) mode
12135 ANSI= 1:LED$=ESC$+"[":RETURN         ' Change to VT100 (ANSI) mode
12140 IF ANSI=0 THEN 12135 ELSE IF ANSI=1 THEN 12130 ELSE ANSI=0:LED$="":RETURN
12145 KEYPAD=-1:RETURN              ' Enable Keypad codes
12150 KEYPAD= 0:RETURN              ' Disable Keypad codes
12155 GRAPHICS=-1:RETURN            ' Enable Character graphics
12160 GRAPHICS= 0:RETURN            ' Disable Character graphics
12165 WIDTH 40:COLOR FG,BG,BG:CLS:WTH=0:SCR.CLR(11)=&H27B2:SCR.UP(9)=&H1727:SCR.DN(9)=&H1727:RETURN               ' Set to 40 Width
12170 WIDTH 80:COLOR FG,BG,BG:CLS:WTH=-1:GOSUB 2800:SCR.CLR(11)=&H4FB2:SCR.UP(9)=&H174F:SCR.DN(9)=&H174F:RETURN   ' Set to 80 Width
12175 GOSUB 12185:PRINT#1,STR$(ROW+31);STR$(COL+31);:RETURN
12180 LOCATE 1,1:GOTO 12210         ' Clear screen and Home cursor
12185 ROW=CSRLIN:COL=POS(0):LOCATE ,,0:P=40-40*WTH:RETURN  'Get cursor position
12190 P=VARPTR(SCR.CLR(1)):CALL P:RETURN     ' Clear to EOL
12195 LOCATE ,1:GOTO 12190                   ' Clear line
12200 GOSUB 12185:LOCATE ,1:PRINT SPACE$(COL);:GOTO 12205     ' Clear to BOL
12205 LOCATE ROW,COL,1:RETURN        ' Normal Return
12210 P=VARPTR(SCR.CLR(19)):CALL P:RETURN    ' Clear to EOP
12215 GOSUB 12185:FOR J=1 TO ROW-1:LOCATE J,1,0:PRINT SPACE$(P);:NEXT:PRINT SPACE$(COL);:GOTO 12205            ' Clear to BOP
12220 GOSUB 12185:IF ROW>1 THEN LOCATE ROW-1,COL,1:RETURN ELSE P=VARPTR(SCR.DN(1)):CALL P:GOTO 12205    ' Reverse scroll (index)
12225 PR=-1:PRINT"===Printout ON ===":CLOSE#3:OPEN PRNTPORT$ AS #3:PRINT#3,PRNTINIT$;:RETURN         ' Turn Printer ON
12230 PR= 0:PRINT"===Printout OFF===":CLOSE#3:RETURN    ' Turn Printer OFF
12235 P=VARPTR(SCR.DN(15)):CALL P:RETURN               ' Print Screen
12240 PRINT#1,ESC$"/Z";:RETURN           ' Terminal ID for DEC VT52
12245 PRINT#1,ESC$"[?1;11c";:RETURN      ' Terminal for DEC VT100
12250 IF PARAM(1)=0 THEN 12190 ELSE IF PARAM(1)=1 THEN 12200 ELSE IF PARAM(1)=2 THEN 12195 ELSE RETURN
12255 IF PARAM(1)=0 THEN 12210 ELSE IF PARAM(1)=1 THEN 12215 ELSE IF PARAM(1)=2 THEN GOSUB 12185:LOCATE 1,1:GOSUB 12210:GOTO 12205 ELSE RETURN
12260 IF PARAM(1)=5 THEN PRINT#1,ESC$"[0n";:RETURN ELSE IF PARAM(1)=6 THEN GOSUB 12185:PRINT#1,ESC$"["STR$(ROW)";"STR$(COL)"R";:GOTO 12205
12265 IF PARAM(1)=5 THEN 12225 ELSE IF PARAM(1)=4 THEN 12230 ELSE IF PARAM(1)=0 THEN 12235 ELSE  RETURN
12270 FOR J=1 TO SAV:IF PARAM(J)=2 THEN ANSI=-1
12275 NEXT:RETURN
12280 FOR J=1 TO SAV:IF PARAM(J)=0 THEN LOCATE ,,,7,7:COLOR FG,BG ELSE IF PARAM(J)=1 THEN COLOR HI ELSE IF PARAM(J)=4 THEN LOCATE ,,,1,7 ELSE IF PARAM(J)=5 THEN COLOR FG+32 ELSE IF PARAM(J)=7 THEN COLOR BG,FG
12285 NEXT:RETURN
```

## TERM.BAS

```bas
2 COLOR 7,1,1
3 CTR=1:DONE=1
134 ON DONE GOTO 140
135 C$=RIGHT$(C$+B$,5)
136 IF INSTR(C$,P1$)>0 THEN C$="":GOTO 4870
137 IF INSTR(C$,P2$)>0 THEN C$="":GOTO 4880
138 IF INSTR(C$,P3$)>0 THEN C$="":GOTO 4890
140 IF LL<>IWT OR B$<>CR$ THEN PRINT B$;:IF IPRR THEN L$=B$:GOSUB 95
145 K$=INKEY$:IF PHONE$=""THEN 146 ELSE K$=MID$(PHONE$,CTR,1):CTR=CTR+1:IF CTR>LEN(PHONE$)THEN PHONE$="":CTR=1
146 IF K$="" GOTO 100
147 IF K$="~"THEN 4000
3884 LOCATE 25,31,0:PRINT"F7<";
3887 COLOR ICOL(IPF+1):PRINT"FILEWRITE";:COLOR 7:PRINT">  F9<AUTODIAL>  F10<HELP>";
4000 '*************************************************************************
4010 '*       AUTO DIAL AND LOG-ON FOR IBM ASYNC COMM SUPPORT 2.0             *
4020 '*           BY ROBERT RELF [70176,403] - COPYRIGHT 1983                 *
4030 '*************************************************************************
4040 '*** SAVE THIS PROGRAM WITH THE "A" OPTION AND MERGE IT INTO TERMINAL.BAS
4050 '*** THEN SAVE TERMINAL.BAS BACK TO ITS DISK WITHOUT THE "A" OPTION
4060 '*** FOR MONOCHROME MONITOR DELETE LINES 2,31005,31576,32330 *BEFORE* MERGING
4070 OPEN "B:PHONE.DAT" AS #1 LEN=90        '*** OPEN RANDOM ACCESS FILE
4080 FIELD #1,16 AS NME$,20 AS N$,3 AS P1$,15 AS R1$,3 AS P2$,15 AS R2$,3 AS P3$,15 AS R3$
4090 GET #1,1:IF ASC(NME$)<33 THEN CLS:PRINT "INITIALIZE FILE? ANY DATA WILL BE ";"LOST-- (Y or N)":ELSE 4160
4100 K$=INKEY$:IF K$=""THEN 4100
4110 IF K$="Y"OR K$="y"THEN 4140            '*** CLEAR FILE OF GARBAGE
4120 IF K$="N"OR K$="n"THEN 4160
4130 BEEP:GOTO 4100
4140 FOR X=1 TO 40:PUT #1,X:NEXT:CNTR=0
4150 '*** GET FILE INFO AND FORMAT SCREEN ***
4160 CLS:LOCATE 2,1:FOR I=1 TO 20
4170 GET #1,I:IF ASC(NME$)>32 THEN CNTR=I:PRINT USING "##";I;:PRINT " "+NME$:GOTO 4190
4180 PRINT USING "##";I
4190 NEXT
4200 FOR I=21 TO 40
4210 GET #1,I:IF ASC(NME$)>32 THEN CNTR=I:LOCATE I-19,21:PRINT USING "##";I;:PRINT " "+NME$:GOTO 4230
4220 LOCATE I-19,21:PRINT USING "##";I
4230 NEXT
4240 PRINT "41 ADD NAME TO LISTING"
4250 PRINT "42 DELETE NAME FROM LISTING"
4260 PRINT "43 RETURN TO TERMINAL OPERATION";
4270 '*** MAKE SELECTION OF DESIRED ACTION ***
4280 LOCATE 1,1:PRINT SPACE$(39);
4290 LOCATE 1,1:INPUT "PLEASE ENTER YOUR SELECTION  ",SEL
4300 IF SEL=41 THEN 4380
4310 IF SEL=42 THEN GOSUB 4710:PUT #1,SEL:GOTO 4160
4320 IF SEL=43 THEN GOTO 4850
4330 IF SEL<=CNTR THEN GET #1,SEL:GOTO 4340 ELSE 4360 '*** TEST FOR VALID CHOICE
4340 IF ASC(NME$)>32 THEN PHONE$=LEFT$(N$,INSTR(N$," ")-1) ELSE 4360
4350 IF ASC(P1$)>32 THEN DONE=0:GOTO 4850 ELSE DONE=1:GOTO 4850
4360 BEEP:GOTO 4280
4370 '*** INPUT LISTING INFORMATION ***
4380 CLS:PRINT"ENTER DESIRED POSITION OF LISTING OR ";"<ENTER> TO FOLLOW LAST ENTRY.  ";
4390 INPUT "",SEL:IF SEL=0 THEN SEL=CNTR+1
4400 PRINT "ENTER NAME OF LISTING UP TO 16 CHAR.
4410 INPUT "",NM$:IF NM$="" THEN GOSUB 4750:GOTO 4160 ELSE LSET NME$=NM$
4420 PRINT "ENTER PHONE # UP TO 20 CHARACTERS
4430 INPUT "",NBR$:IF NBR$="" THEN GOSUB 4750:GOTO 4160 ELSE NBR$="ATDT"+NBR$+CHR$(13):LSET N$=NBR$
4440 PRINT "ENTER AUTO LOG-ON ? (Y or N)
4450 K$=INKEY$:IF K$=""THEN 4450
4460 IF K$="Y"OR K$="y"THEN 4490
4470 IF K$="N"OR K$="n"THEN GOSUB 4770:GOTO 4640
4480 BEEP:GOTO 4450
4490 PRINT"ENTER FIRST PROMPT -- ALL PROMPTS ARE ";"LAST 3 CHARACTERS OF SCREEN MESSAGE ";
4495 PRINT"FROM HOST-USE QUOTES IF THERE ARE COMMAS
4500 INPUT "",PRMPT1$:IF PRMPT1$="" THEN GOSUB 4770:GOTO 4640 ELSE LSET P1$=PRMPT1$
4510 PRINT"ENTER FIRST RESPONSE UP TO 20 CHAR.":GOTO 4550
4515 '*************************************************************************
4520 '*** TO ENTER A CONTROL CHARACTER, HOLD DOWN THE "ALT" KEY WHILE TYPING
4530 '*** THE DESIRED ASCII NUMBER PLUS 128 ON THE NUMERIC KEYPAD--FOR EXAMPLE,
4540 '*** TYPE 131 FOR A ^C OR 141 FOR A CARRIAGE RETURN.
4545 '*************************************************************************
4550 INPUT "",RES1$:IF RES1$="" THEN GOSUB 4770:GOTO 4640 ELSE RES1$=RES1$+CHR$(13):LSET R1$=RES1$
4560 PRINT"ENTER SECOND PROMPT
4570 INPUT "",PRMPT2$:IF PRMPT2$="" THEN GOSUB 4790:GOTO 4640 ELSE LSET P2$=PRMPT2$
4580 PRINT"ENTER SECOND RESPONSE
4590 INPUT "",RES2$:IF RES2$="" THEN GOSUB 4790:GOTO 4640 ELSE RES2$=RES2$+CHR$(13):LSET R2$=RES2$
4600 PRINT"ENTER THIRD PROMPT
4610 INPUT "",PRMPT3$:IF PRMPT3$="" THEN GOSUB 4810:GOTO 4640 ELSE LSET P3$=PRMPT3$
4620 PRINT"ENTER THIRD RESPONSE
4630 INPUT"",RES3$:IF RES3$=""THEN GOSUB 4810:GOTO 4640 ELSE RES3$=RES3$+CHR$(13):LSET R3$=RES3$
4640 PRINT"IS ALL INFORMATION CORRECT? (Y or N)
4650 K$=INKEY$:IF K$=""THEN 4650
4660 IF K$="Y"OR K$="y"THEN 4690
4670 IF K$="N"OR K$="n"THEN CLS:GOTO 4400
4680 BEEP:GOTO 4650
4690 PUT #1,SEL:GOTO 4160             '*** WRITE LISTING IN BUFFER TO FILE
4700 '*** DELETE LISTING IN WHOLE OR IN PART ***
4710 LOCATE 1,1:PRINT SPACE$(39);
4720 LOCATE 1,1:INPUT "ENTER # OF LISTING TO DELETE  ",SEL
4730 IF SEL=0 THEN 4160
4740 IF SEL>43 THEN BEEP:GOTO 4710
4750 LSET NME$=""
4760 LSET N$=""
4770 LSET P1$=""
4780 LSET R1$=""
4790 LSET P2$=""
4800 LSET R2$=""
4810 LSET P3$=""
4820 LSET R3$=""
4830 RETURN
4840 '*** RETURN TO TERMINAL OPERATION ***
4850 CLS:CLOSE #1:GOTO 3400
4860 '*** FILL STRING FOR PSEUDO KEYBOARD INPUT TO MAIN PROGRAM ***
4870 PHONE$=LEFT$(R1$,INSTR(R1$," ")-1):IF ASC(P2$)=0 THEN DONE=1 ELSE 140
4880 PHONE$=LEFT$(R2$,INSTR(R2$," ")-1):IF ASC(P3$)=0 THEN DONE=1 ELSE 140
4890 PHONE$=LEFT$(R3$,INSTR(R3$," ")-1):DONE=1:GOTO 140
31005 COLOR 7,1,1
31533 KEY 9,"~"
31576 COLOR 7,1,1:CLS
32330 CLS:KEY OFF:SCREEN 0,1,0:WIDTH 40:COLOR 7,1,1:CLS:RETURN
32490 PRINT"F9 AUTODIAL    F10 This HELP Menu       ";"[ON or OFF] indicates current status.   ";
```

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk 0114

     Volume in drive A has no label
     Directory of A:\

    BASCOM   DOC      4772   1-06-84   9:59p
    CABLE    DOC      5317  12-11-83  11:30a
    FPLOT    BAS      7231  12-11-83   2:54p
    FPLOT    DOC      1406  12-13-83   7:29p
    KBDFIX   BAS      1350  12-11-83  12:03p
    NEWCLOCK DOC      1271   1-06-84   9:05p
    NEWCLOCK SYS       384  12-11-83   2:42p
    PCT3VT   BAS      7696  12-11-83   2:21p
    PROFEEL  DOC      4022  12-11-83  11:36a
    TERM     BAS      5686  12-11-83   2:23p
    TERM     DOC      2140   1-06-84  10:06p
    TREND123 DOC      3250  12-11-83   2:39p
    TREND123 MAC      4224  12-11-83   2:32p
    UASMLS   DOC      3158  12-11-83  11:40a
    UASMLS   EXE     22656  12-11-83  11:55a
    PC-TALK  DEF       640   1-11-84   9:44p
    PC-TALK  KEY      5248   1-11-84   9:44p
    PC-TALK  DIR       512   1-11-84   9:44p
    GO       BAT        38  10-19-87   3:56p
    GO       TXT       694  12-01-88   2:46p
    MANUAL   BAT       147   6-08-88   3:02p
    FILES114 TXT      1996   1-27-89   2:34p
           22 file(s)      83838 bytes
                           69632 bytes free
