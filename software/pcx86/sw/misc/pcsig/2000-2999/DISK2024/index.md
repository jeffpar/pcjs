---
layout: page
title: "PC-SIG Diskette Library (Disk #2024)"
permalink: /software/pcx86/sw/misc/pcsig/2000-2999/DISK2024/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #2024"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "SPLOT (SCREEN PLOT)"

    SPLOT plots two and three dimensional data to the screen of a PC with
    CGA, EGA, VGA or Hercules graphics.  The plot can be sent to an
    IBM/Epson compatible printer or a DHPGL compatible plotter.
    
    It can produce these types of plots:  line, smooth curve, scatter, step
    or histogram of up to 16,000 data points.  Up to 200 sets of data can be
    plotted on the same 2-dimensional plot; multiple data sets can also be
    plotted as a 3-dimensional plot.  Axes can be linear, log or normal
    probability with auto or manual scaling.  Data can be fit by a spline or
    a least squares polynomial or exponential.
    
    The program creates the plot by executing a set of plot commands which
    can be typed at the keyboard, selected from a menu or read from a
    command file.  On most PCs, the program detects the type of graphics
    card and uses the highest resolution available.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## CURVEGEN.BAS

```bas
10 REM  PROGRAM CURVEGEN GENERATES VALUES OF A 3D CURVE.
20 REM  THE PROGRAM WRITES THE VALUES ALONG WITH PLOT COMMANDS TO A FILE
30 REM  NAMED CURVDATA.PLT; THE VALUES ARE THEN PLOTTED BY USING THE SHELL
40 REM  COMMAND TO RUN THE SPLOT PROGRAM.
50 REM
60 REM  COPYRIGHT 1988, 1989 BY WILLIAM G. HOOD
70 REM
80 REM  WARNING: DO NOT RENUMBER!
90 REM
100 CLS: KEY OFF
110 PRINT"This program plots a curve in three dimensions.  The curve is"
120 PRINT"defined parametrically by a subroutine which must follow the"
130 PRINT"main program.  The subroutine must set variables X, Y and Z"
140 PRINT"equal to functions of the parameter T."
150 PRINT
160 INPUT"Do you want to see current equations (N/Y)"; A$: A$=LEFT$(A$,1)
170 IF A$="Y" OR A$="y" THEN CLS: LIST 1000-1999: END
180 REM
190 OPEN "CURVDATA.PLT" FOR OUTPUT AS #2
200 PRINT: LINE INPUT"Title? "; TITLE$: PRINT#2,"TITLE "+TITLE$
205 PRINT: LINE INPUT"Z-Axis Label? "; LZ$: PRINT#2,"ZLABEL "+LZ$
210 LINE INPUT"X-Axis Label? ";LX$: PRINT#2,"XLABEL "+LX$
220 LINE INPUT"Y-Axis Label? ";LY$: PRINT#2,"YLABEL "+LY$
222 PRINT: INPUT"Log Z-Axis (N/Y)"; A$: A$=LEFT$(A$,1)
224 IF A$="Y" OR A$="y" THEN PRINT#2,"LOGZ"
230 INPUT"Log X-Axis (N/Y)"; A$: A$=LEFT$(A$,1)
240 IF A$="Y" OR A$="y" THEN PRINT#2,"LOGX"
250 INPUT"Log Y-Axis (N/Y)"; A$: A$=LEFT$(A$,1)
260 IF A$="Y" OR A$="y" THEN PRINT#2,"LOGY"
290 REM
350  PRINT
360  PRINT"Enter initial value, final value & step size of parameter ";
372  PRINT"separated by spaces"
390  INPUT V$: IF V$="" GOTO 470
400   GOTO 420
410    INPUT"Initial Value, Final Value, Step Size"; V$: IF V$="" GOTO 470
420   P=1: GOSUB 680: TI. = V: GOSUB 680: TF. = V: GOSUB 680: TS. = V
430   IF TS. <= 0 THEN PRINT"ERROR: INVALID STEP SIZE": GOTO 410
440   ND. = INT( (TF.-TI.)/TS. + 1.5 )
450   IF ND. < 2 THEN PRINT"ERROR: INVALID RANGE": GOTO 410
460   IF ND. > 1024 THEN PRINT"ERROR: TOO MANY POINTS - MAX IS 1024": GOTO 410
470  PRINT:PRINT"Calculating..."
480  PRINT#2,"READXYZ ";ND.
490  FOR I.=1 TO ND.
500   T = TI. + (I.-1)*TS.
510   GOSUB 1100
520   PRINT#2, X;" ";Y;" ";Z
530  NEXT I.
540 PRINT#2,"PLOT3D CURVE": PRINT#2,"KEYBOARD"
550 CLOSE#2
560 REM
570 PRINT:PRINT"Press the ENTER key to display the plot";
580 PRINT" - press the ESC key to clear the plot."
590 A$=INKEY$: IF A$<>"" GOTO 590
600 A$=INKEY$: IF A$="" GOTO 600
610 IF ASC(A$)<>13 GOTO 600
620 SHELL( "SPLOT CURVDATA.PLT" )
630 END
670 REM EXTRACTS V FROM V$ STARTING AT POSITION P
680 P2=LEN(V$)
690 IF MID$(V$,P,1)=" " AND P<=P2 THEN P=P+1: GOTO 690
700 P0=P: IF P0>P2 THEN V=0: RETURN
710 IF MID$(V$,P,1)<>" " AND P<=P2 THEN P=P+1: GOTO 710
720 V = VAL( MID$( V$, P0, P-P0 ) )
730 RETURN
1000 REM
1010 REM NOTE: To avoid conflict with main program variables,
1020 REM       do not use variable names that contain a period.
1030 REM
1100 REM Subroutine must set X=f1(T), Y=f2(T), Z=f3(T) after this line #
1110 X = T * SIN(T): Z = T * COS(T): Y = T
1190 RETURN
```

## FUNGEN.BAS

```bas
10 REM  PROGRAM FUNGEN GENERATES VALUES OF A FUNCTION.
20 REM  THE PROGRAM WRITES THE VALUES ALONG WITH PLOT COMMANDS TO A FILE
30 REM  NAMED FUNDATA.PLT; THE VALUES ARE THEN PLOTTED BY USING THE SHELL
40 REM  COMMAND TO RUN THE SPLOT PROGRAM.
50 REM
60 REM  COPYRIGHT 1988 BY WILLIAM G. HOOD
70 REM
80 REM  WARNING: DO NOT RENUMBER!
90 REM
100 CLS: KEY OFF
110 PRINT"This program plots up to 5 functions defined by subroutines"
120 PRINT"which follow the main program.  Each subroutine must set the"
130 PRINT"dependent variable Y equal to a function evaluated at the"
140 PRINT"current value of the independent variable X or, optionally,"
142 PRINT"set variables X and Y equal to a pair of parametrical functions
143 PRINT"evaluated at the current value of the parameter T.
150 PRINT
160 INPUT"Do you want to see current functions (N/Y)"; A$: A$=LEFT$(A$,1)
170 IF A$="Y" OR A$="y" THEN CLS: LIST 1000-1999: END
180 REM
182 PRINT:INPUT"Are the functions represented parametrically (N/Y)"; P.$
183 P.$=LEFT$(P.$,1): IF P.$ = "y" THEN P.$ = "Y"
190 OPEN "FUNDATA.PLT" FOR OUTPUT AS #2
200 PRINT: LINE INPUT"Title? "; TITLE$: PRINT#2,"TITLE "+TITLE$
210 PRINT: LINE INPUT"X-Axis Label? ";LX$: PRINT#2,"XLABEL "+LX$
220 LINE INPUT"Y-Axis Label? ";LY$: PRINT#2,"YLABEL "+LY$
230 PRINT: INPUT"Log X-Axis (N/Y)"; A$: A$=LEFT$(A$,1)
240 IF A$="Y" OR A$="y" THEN PRINT#2,"LOGX"
250 INPUT"Log Y-Axis (N/Y)"; A$: A$=LEFT$(A$,1)
260 IF A$="Y" OR A$="y" THEN PRINT#2,"LOGY"
270 PRINT: INPUT"Draw grid lines (N/Y)";A$: A$=LEFT$(A$,1)
280 IF A$="Y" OR A$="y" THEN PRINT#2,"GRID"
290 REM
300 NP.=1: PRINT: INPUT"Number of functions (1-5)"; NP.
310 IF NP. > 5 THEN PRINT"TOO MANY": END
320 IF NP. < 1 THEN NP. = 1
330 FOR J.=1 TO NP.
340  IF NP. > 0 THEN PRINT:PRINT"Function #";J.;":"
350  PRINT
360  PRINT"Enter initial value, final value & step size of ";
370  IF P.$ <> "Y" THEN PRINT"independent variable" ELSE PRINT"parameter"
372  PRINT"separated by spaces";
380  IF J. > 1 THEN PRINT" (press ENTER key if same)";
390  INPUT V$: IF V$="" GOTO 470
400   GOTO 420
410    INPUT"Initial Value, Final Value, Step Size"; V$: IF V$="" GOTO 470
420   P=1: GOSUB 680: XI. = V: GOSUB 680: XF. = V: GOSUB 680: XS. = V
430   IF XS. <= 0 THEN PRINT"ERROR: INVALID STEP SIZE": GOTO 410
440   ND. = INT( (XF.-XI.)/XS. + 1.5 )
450   IF ND. < 2 THEN PRINT"ERROR: INVALID RANGE": GOTO 410
460   IF ND. > 1024 THEN PRINT"ERROR: TOO MANY POINTS - MAX IS 1024": GOTO 410
470  PRINT:PRINT"Calculating..."
472  IF ND. <= 61 AND P.$ <> "Y" THEN PRINT#2,"CURVE ";J.
474  IF ND. <= 21 THEN PRINT#2,"SYMBOLS ";J.
480  PRINT#2,"READ ";ND.
490  FOR I.=1 TO ND.
500   IF P.$ <> "Y" THEN X = XI. + (I.-1)*XS. ELSE T = XI. + (I.-1)*XS.
510   ON J. GOSUB 1100, 1200, 1300, 1400, 1500
520   PRINT#2, X;" ";Y
530  NEXT I.
540 NEXT J.
545 PRINT#2,"PLOT": PRINT#2,"KEYBOARD"
550 CLOSE#2
560 REM
570 PRINT:PRINT"Press the ENTER key to display the plot";
580 PRINT" - press the ESC key to clear the plot."
590 A$=INKEY$: IF A$<>"" GOTO 590
600 A$=INKEY$: IF A$="" GOTO 600
610 IF ASC(A$)<>13 GOTO 600
620 SHELL( "SPLOT FUNDATA.PLT" )
630 END
670 REM EXTRACTS V FROM V$ STARTING AT POSITION P
680 P2=LEN(V$)
690 IF MID$(V$,P,1)=" " AND P<=P2 THEN P=P+1: GOTO 690
700 P0=P: IF P0>P2 THEN V=0: RETURN
710 IF MID$(V$,P,1)<>" " AND P<=P2 THEN P=P+1: GOTO 710
720 V = VAL( MID$( V$, P0, P-P0 ) )
730 RETURN
1000 REM
1010 REM NOTE: To avoid conflict with main program variables,
1020 REM       do not use variable names that contain a period.
1030 REM
1100 REM Subroutine #1 must set variable Y = FUNCTION(X) after this line #
1110 Y = COS(X)*EXP(-ABS(X/5))
1190 RETURN
1200 REM Subroutine #2 must set variable Y = FUNCTION(X) after this line #
1210 Y = SIN(X)*EXP(-ABS(X/5))
1290 RETURN
1300 REM Subroutine #3 must set variable Y = FUNCTION(X) after this line #
1310 N=0: GOSUB 2000: Y=J#: REM Y = J0(X) calculated by called subroutine
1390 RETURN
1400 REM Subroutine #4 must set variable Y = FUNCTION(X) after this line #
1410 N=1: GOSUB 2000: Y=J#: REM Y = J1(X) calculated by called subroutine
1490 RETURN
1500 REM Subroutine #5 must set variable Y = FUNCTION(X) after this line #
1510 N=2: GOSUB 2000: Y=J#: REM Y = J2(X) calculated by called subroutine
1999 RETURN
2000 REM SETS J# = BESSEL FUNCTION OF THE FIRST KIND OF ORDER N: Jn(X)
2010 IF INT(N)<>N THEN PRINT"Jn(X) MUST BE OF INTEGER ORDER.": END
2020 C# = (X/2#)^N
2030 IF N>1 THEN FOR K=2 TO N: C# = C#/K: NEXT K
2040 J# = C#: IF ABS(X)<.001 THEN RETURN
2050 Z# = -X*X/4#: K=0
2060  K = K+1: C# = Z#/K/(K+N)*C#: J# = J# + C#
2070  IF ABS(C#)>1E+08 OR K>100 GOTO 2100
2080 IF ABS(C#)>.00005 GOTO 2060
2090 RETURN
2100 PRINT"CAN NOT ACCURATELY CALCULATE Jn(X) FOR n =";N;" & |X| >";ABS(X)
2110 END
```

## SURFGEN.BAS

```bas
10 REM  PROGRAM SURFGEN GENERATES VALUES OF A FUNCTION OF TWO VARIABLES.
20 REM  THE PROGRAM WRITES THE VALUES ALONG WITH PLOT COMMANDS TO A FILE
30 REM  NAMED SURFDATA.PLT; THE VALUES ARE THEN PLOTTED BY USING THE SHELL
40 REM  COMMAND TO RUN THE SPLOT PROGRAM.
50 REM
60 REM  COPYRIGHT 1988, 1989 BY WILLIAM G. HOOD
70 REM
80 REM  WARNING: DO NOT RENUMBER!
90 REM
100 CLS: KEY OFF
105 DIM Z.(201), X.(201)
110 PRINT"This program plots a function of two variables defined by a"
120 PRINT"subroutine which follows the main program.  The subroutine must"
130 PRINT"set dependent variable Y equal to a function evaluated at the"
140 PRINT"current value of the independent variables X and Z."
150 PRINT
160 INPUT"Do you want to see current function (N/Y)"; A$: A$=LEFT$(A$,1)
170 IF A$="Y" OR A$="y" THEN CLS: LIST 1000-1999: END
180 REM
190 OPEN "SURFDATA.PLT" FOR OUTPUT AS #2
200 PRINT: LINE INPUT"Title? "; TITLE$: PRINT#2,"TITLE "+TITLE$
205 PRINT: LINE INPUT"Z-Axis Label? ";LZ$: PRINT#2,"ZLABEL "+LZ$
215 LINE INPUT"X-Axis Label? ";LX$: PRINT#2,"XLABEL "+LX$
220 LINE INPUT"Y-Axis Label? ";LY$: PRINT#2,"YLABEL "+LY$
222 PRINT: INPUT"Log Z-Axis (N/Y)"; A$: A$=LEFT$(A$,1)
224 IF A$="Y" OR A$="y" THEN PRINT#2,"LOGZ"
230 INPUT"Log X-Axis (N/Y)"; A$: A$=LEFT$(A$,1)
240 IF A$="Y" OR A$="y" THEN PRINT#2,"LOGX"
250 INPUT"Log Y-Axis (N/Y)"; A$: A$=LEFT$(A$,1)
260 IF A$="Y" OR A$="y" THEN PRINT#2,"LOGY"
290 REM
300 PRINT: PRINT"Enter initial value, final value & step size of ";
305 PRINT"independent variable Z"
310 INPUT V$: IF V$ <> "" GOTO 320
315     INPUT"Initial Value, Final Value, Step Size"; V$: IF V$="" GOTO 315
320   P=1: GOSUB 680: ZI. = V: GOSUB 680: ZF. = V: GOSUB 680: ZS. = V
325   IF ZS. <= 0 THEN PRINT"ERROR: INVALID STEP SIZE": GOTO 315
330   NZ. = INT( (ZF.-ZI.)/ZS. + 1.5 )
335   IF NZ. < 2 THEN PRINT"ERROR: INVALID RANGE": GOTO 315
340   IF NZ. > 201 THEN PRINT"ERROR: TOO MANY POINTS - MAX OF 201": GOTO 315
350 PRINT: PRINT"Enter initial value, final value & step size of ";
355 PRINT"independent variable X"
360 INPUT V$: IF V$ <> "" GOTO 370
365     INPUT"Initial Value, Final Value, Step Size"; V$: IF V$="" GOTO 365
370   P=1: GOSUB 680: XI. = V: GOSUB 680: XF. = V: GOSUB 680: XS. = V
375   IF XS. <= 0 THEN PRINT"ERROR: INVALID STEP SIZE": GOTO 365
380   NX. = INT( (XF.-XI.)/XS. + 1.5 )
385   IF NX. < 2 THEN PRINT"ERROR: INVALID RANGE": GOTO 365
390   IF NX. > 201 THEN PRINT"ERROR: TOO MANY POINTS - MAX OF 201": GOTO 365
395 REM
470 PRINT:PRINT"Calculating ... Please wait ..."
475 PRINT#2,"READZ ";NZ.
480 FOR I.=1 TO NX. : X.(I.) = XI. + (I.-1)*XS. : NEXT I.
482 FOR I.=1 TO NZ. : Z.(I.) = ZI. + (I.-1)*ZS. : PRINT#2, Z.(I.) : NEXT I.
484 PRINT#2,"READTAB ";NZ.;" ";NX.
490 FOR I.=1 TO NX.
500   X = X.(I.)
505   PRINT#2, X.(I.);
510   FOR J.=1 TO NZ.
512     Z = Z.(J.): GOSUB 1100: PRINT#2," ";Y;
514     IF ( J. AND 3 ) = 0 OR J. = NZ. THEN PRINT#2,""
516   NEXT J.
520 NEXT I.
545 PRINT#2,"PLOT3D"; : IF NZ. > 20 THEN PRINT#2," SURFACE";
546 PRINT#2,"" : PRINT#2,"KEYBOARD"
550 CLOSE#2
560 REM
570 PRINT:PRINT"Press the ENTER key to display the plot";
580 PRINT" - press the ESC key to clear the plot."
590 A$=INKEY$: IF A$<>"" GOTO 590
600 A$=INKEY$: IF A$="" GOTO 600
610 IF ASC(A$)<>13 GOTO 600
620 SHELL( "SPLOT SURFDATA.PLT" )
630 END
670 REM EXTRACTS V FROM V$ STARTING AT POSITION P
680 P2=LEN(V$)
690 IF MID$(V$,P,1)=" " AND P<=P2 THEN P=P+1: GOTO 690
700 P0=P: IF P0>P2 THEN V=0: RETURN
710 IF MID$(V$,P,1)<>" " AND P<=P2 THEN P=P+1: GOTO 710
720 V = VAL( MID$( V$, P0, P-P0 ) )
730 RETURN
1000 REM
1010 REM NOTE: To avoid conflict with main program variables,
1020 REM       do not use variable names that contain a period.
1030 REM
1100 REM Subroutine must set variable Y = function(X,Z) after this line #
1110 REM Insert here GOTO 1210 to plot another functions
1120 REM Let X and Z vary from -12.5 to 12.5 with a step of .5 or .25
1130 R = SQR( X*X + Z*Z ): GOSUB 1160: Y = S
1140 RETURN
1150 REM S = SINC( R )
1160 IF R <> 0 THEN S = SIN(R) / R ELSE S = 1
1170 RETURN
1200 REM Let X and Z vary from -90 to +90 with a step of 6 or 3
1210 R = 9 * SIN( 1.745329E-02 * Z ): GOSUB 1160: YZ = S
1220 R = 6 * SIN( 1.745329E-02 * X ): GOSUB 1160: YX = S
1230 Y = YZ * YX
1240 RETURN
```

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #2024

     Volume in drive A has no label
     Directory of A:\

    HPLOT    EXE     45266   7-31-90   9:17p
    SPLOT    EXE     65029   8-25-90   7:13a
    HIST     PLT       346   7-30-90   8:26p
    HPLOT    DOC      1825   6-09-90   3:44p
    PLOTDUMP DOC      1958   6-09-90   3:44p
    HPCOM1   BAT       103  12-22-88   7:42p
    ERRBARS  PLT       338   8-02-90  10:10p
    EXAMPLE  PLT       578   8-21-89  11:02a
    PAYFORM           2509   8-25-90  11:55p
    ZOOM     PLT      3579   7-07-90   9:41a
    BAR      PLT       204   7-30-89   2:56p
    FUNDIF   PLT      1042   8-25-90   7:21a
    ROOT     EXE     24233   8-24-90  11:00p
    SURFACE  PLT     17633   6-03-90   9:40p
    CURVE3D  PLT      5061   6-03-90  11:10p
    FUNSURF  PLT       240   8-15-90   9:22a
    FIT      PLT       381   7-07-90   9:38a
    AVG      PLT      1867   6-03-90  10:04p
    SCAT3D   PLT       283  12-01-89  10:22p
    DATA2    DAT       316   1-21-89   1:45p
    DATA1    DAT        57   8-21-89  11:02a
    FUNGEN   BAS      4816   8-15-89   9:26p
    SURFGEN  BAS      4333   8-15-89   9:27p
    CURVEGEN BAS      2993   8-15-89   9:28p
    OLDCOLOR PLT       388   5-26-90   8:31a
    PLOTDUMP COM      1928   5-27-90   8:38p
    NEWCOLOR PLT       377   5-26-90   6:16p
    BESSEL   PLT      6776   7-14-90  12:24p
    PLOT3D   PLT      2950   6-03-90   5:24p
    EXPFIT   PLT       267   7-07-90   9:38a
    PROB     PLT       507   7-07-90   9:39a
    POLYROOT EXE     22889   8-26-90   9:05p
    FUNPLOT  PLT       473   8-15-90   9:39a
    DEMO     PLT       484   8-25-90   6:49a
    SPLOT    DOC     34984   8-25-90  11:57p
    README            3575   8-26-90   9:31p
    GO       BAT        38   1-01-80   1:37a
    FILE2024 TXT      2221   9-12-90   3:09p
    GO       TXT      1189   9-12-90   7:16a
           39 file(s)     264036 bytes
                           35840 bytes free
