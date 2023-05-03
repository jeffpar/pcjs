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

{% raw %}
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
{% endraw %}

## FILE2024.TXT

{% raw %}
```
Disk No: 2024                                                           
Disk Title: SPLOT (screen plot)                                         
PC-SIG Version: S3.0                                                    
                                                                        
Program Title: SPlot                                                    
Author Version: 6.6                                                     
Author Registration: $20.00                                             
Special Requirements: CGA, EGA, VGA, or Hercules                        
                                                                        
SPLOT plots two and three dimensional data to the screen of a PC with   
CGA, EGA, VGA or Hercules graphics.  The plot can be sent to an         
IBM/Epson compatible printer or an DHPGL compatible plotter.            
                                                                        
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
                                                                        
PC-SIG                                                                  
1030D East Duane Avenue                                                 
Sunnyvale  Ca. 94086                                                    
(408) 730-9291                                                          
(c) Copyright 1989 PC-SIG, Inc.                                         
```
{% endraw %}

## FUNGEN.BAS

{% raw %}
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
{% endraw %}

## GO.TXT

{% raw %}
```
╔═════════════════════════════════════════════════════════════════════════╗
║             <<<<  Disk #2024  SPLOT (SCREEN PLOT)  >>>>                 ║
╠═════════════════════════════════════════════════════════════════════════╣
║ To print intro materials, type:  COPY README PRN (press Enter)          ║
║                                                                         ║
║ To start program, type:  SPLOT (press Enter)                            ║
║                                                                         ║
║ To print documentation, type:  COPY SPLOT.DOC PRN  (press Enter)        ║
║                                                                         ║
║ To print the HPLOT documentation, type:  COPY HPLOT.DOC PRN (Enter)     ║
║                                                                         ║
║ To print the PLOTDUMP documentation, type: COPY PLOTDUMP.DOC PRN (Enter)║
║                                                                         ║
║ To print registration form, type:  COPY PAYFORM PRN (press Enter)       ║
╚═════════════════════════════════════════════════════════════════════════╝
(c) Copyright 1990, PC-SIg Inc.
```
{% endraw %}

## HPLOT.DOC

{% raw %}
```
                         HPLOT USER INSTRUCTIONS

      The program HPLOT (HP Plot) will plot two and three dimensional data
      on a HPGL compatible plotter connected to a serial port (COM1 or COM2).

      If the user types "HPLOT filename COMn" at the DOS prompt the
      program HPLOT will read plot commands from the text file "filename"
      and output HPGL plotter instructions to a plotter connected to serial
      port "COMn".  If the parameter "COMn" is omitted it defaults to
      "COM1".  The port "COMn" must have been configured with the DOS
      command "MODE COMn:baudrate,parity,databits,stopbits,P".  The plot
      commands are a subset of the plot commands recognized by the SPLOT
      (Screen Plot) program; HPLOT does not have an interactive mode and
      does not recognize the commands intended for interactive use.  Type
      just "HPLOT" at the DOS prompt to display a summary of the plot
      commands recognized by HPLOT.  You can use the SPLOT program to display
      a plot on the screen then use the SAVE command to create a plot
      command file that the HPLOT program can use to produce a hardcopy plot.

      The command "HPLOT filename hpfile" will send the HPGL plotter
      instructions to file "hpfile"; this file could then be transfered to
      another computer to be output to a HPGL compatible plotter.

      The HPLOT program has been tested on a HP 7550 plotter and on a HP
      ColorPro plotter.

      The HPLOT program is protected by copyright law; it is not public
      domain. It is provided with the SPLOT software and its use, other
      than for evaluation purposes, without payment for the SPLOT software
      is a copyright violation. The HPLOT program is provided "AS IS"
      without warranty of any kind.
      
```
{% endraw %}

## SPLOT.DOC

{% raw %}
```

                      SPLOT USER INSTRUCTIONS

  The program SPLOT (Screen PLOT) will plot two and three dimensional
  data on the screen of an IBM compatible PC with CGA, EGA, VGA or
  Hercules graphics.  The SPLOT program creates a plot by executing a
  sequence of plot commands which can be typed at the keyboard, selected
  from a menu or read from a command file.

  If the user types "SPLOT filename" at the DOS prompt the program SPLOT
  will execute plot commands read from the text file "filename".  The
  plot commands specify plot parameters such as type of axes.  Multiple
  sets of data can be plotted on the same plot.  The sets of data can be
  in the command file or in separate data files.  It is assumed that the
  plot commands and data are stored as ASCII text by an editor, word
  processor or a user written program that generates the plot commands
  and/or data as output (as do the example Basic programs FUNGEN.BAS,
  SURFGEN.BAS and CURVEGEN.BAS which generate data and commands to plot
  user specified functions).

  If just "SPLOT" is typed at the DOS prompt then the plot commands can be
  typed at the keyboard.  Pressing the ESC key calls up a menu from which
  the plot commands can be selected using the arrow keys or a mouse.  The
  RETURN key (or left mouse button) selects a menu item; the ESC key (or
  right mouse button) exits the menu and sub-menus.  The mouse must have a
  Microsoft compatible driver installed that can be called with software
  interrupt # 33h. If calling software interrupt # 33h on a PC with no mouse
  or a nonstandard mouse causes a problem (not likely but just incase...)
  then use of a mouse can be disabled with the DOS command "SET SPLOT=NOM";
  the equals-sign "=" must immediately follow "SPLOT" and the string "NOM"
  must be in uppercase. The SET command must be typed before starting the
  SPLOT program or it can be placed in the AUTOEXEC.BAT file.

  On most PCs the program will detect the type of installed graphics
  card (CGA, EGA or Hercules) and use the highest resolution graphics
  mode available with that card; EGA resolution is used with VGA
  cards.  If a monitor used with an EGA card will only support CGA
  resolution or if the program incorrectly detects the type of
  graphics card then the card can be specified with the DOS command
  "SET SPLOT=card" where "card" is "CGA", "EGA" or "HER".  For example,
  the AT&T 6300 Display Enhancement Board is detected as being EGA but
  it is not compatible with EGA; it is compatible with CGA.  To specify
  that the SPLOT program use CGA mode on an AT&T with a DEB, give the
  DOS command "SET SPLOT=CGA"; to also disable use of a mouse give the
  command "SET SPLOT=CGA/NOM".

  The following plot commands specify the type of axes.  The x axis is
  the horizontal axis and the y axis is the vertical axis; a
  3-Dimensional plot will also have a z axis perpendicular to the x-y
  plane.  The z axis can also be used as a second vertical axis on
  the right side of a 2-Dimensional plot (see USEZ command):

  LINX     - Selects linear x axis (the default).
  LOGX     - Selects log x axis.
  PROBX    - Selects cumulative normal probability x axis.
  LINY     - Selects linear y axis (the default).
  LOGY     - Selects log y axis.
  PROBY    - Selects cumulative normal probability y axis.
  LINZ     - Selects linear z axis (the default).
  LOGZ     - Selects log z axis.

  By default the program will automatically set the scales of the axes
  based on the minimum and maximum data values.  The scales of the
  axes can be set by the user with the following commands:

  XSTART value    - The x axis will start at "value".
  XEND value      - The x axis will end at "value".
  XSTEP value     - Linear x axis tic marks will be labeled
                    in steps of "value".
  YSTART value    - The y axis will start at "value".
  YEND value      - The y axis will end at "value".
  YSTEP value     - Linear y axis tic marks will be labeled
                    in steps of "value".
  ZSTART value    - The z axis will start at "value".
  ZEND value      - The z axis will end at "value".
  ZSTEP value     - Linear z axis tic marks will be labeled
                    in steps of "value".

  Automatic scaling of an axis can be re-enabled by setting the starting
  and ending values equal to the same value, i.e., "XSTART 0" and "XEND
  0".  If the step size is omitted from a linear axis then the program
  will select a step size and adjust the starting and ending values to
  match the step size.  The step size is ignored with a log axis.  A log
  axis will cover a maximum of four decades and will always start and
  end at decade boundaries.  Data plotted on a normal probability axis
  must be in the range .0001 to .9999; the axis will be labeled using
  the scaled range .01 to 99.99.

  The following commands specify other axes parameters:

  XGRID        - Grid lines will be drawn at labeled x axis tic marks.
  YGRID        - Grid lines will be drawn at labeled y axis tic marks.
  XGRID OFF    - Turns off display of x axis grid lines.
  YGRID OFF    - Turns off display of y axis grid lines.
  XBASE value  - Vertical base line will be drawn at "value" on x axis.
  YBASE value  - Horizontal base line will be drawn at "value" on y axis.
  XBASE        - Turns off display of x axis base line.
  YBASE        - Turns off display of y axis base line.
  XTICS n      - Selects "n" minor x axis tic marks between labeled
                 tic marks (default is 4).
  YTICS n      - Selects "n" minor y axis tic marks between labeled
                 tic marks (default is 4).
  ZTICS n      - Selects "n" minor z axis tic marks between labeled
                 tic marks (default is 4).

  The following commands are used to read the data:

  OPEN filename   - Opens data file "filename" for read.
  READ n          - Reads "n" x y data point pairs.

  If no data file is opened then the data is read from the command file
  starting at the line after the READ command.  Multiple READ commands will
  result in multiple sets of data being plotted on the same plot.  There
  can be a maximum of 200 data sets and a maximum of 16000 data points
  per data set; the number of data points per data set will also be limited
  by the amount of available memory.  If "n" is omitted then it defaults
  to 1024; less than "n" data points will be read if the end of the file
  is reached.  Successive data values must be separated by at least one
  non-numeric character other than "+", "-", ".", "E" or "e".  Numbers can
  be in scientific notation with "E" or "e" preceding the exponent.

  Data can also be read inwhich all of the x values precede all of the y
  values:

  READX n         - Reads "n" x data values; must precede READY command.
  READY n         - Reads "n" y data values; x = 1, 2, 3 ... if no READX.

  If multiple READY commands are used to read multiple data sets inwhich
  corresponding y values are associated with the same x value then only
  one READX command is required.  If a READY command is not preceded
  by a READX (or READ) command then the y values will be plotted at even
  intervals.

  Multiple sets of data can also be read when the data is arranged in
  the form of a table:

  READTAB m n     - Reads "n" rows of table with columns x, y1, ..., ym.
                    The x values must be in the first column and the
                    corresponding y values of data set #1 to data set #m
                    must be in the remaining "m" columns.
  READTABY m n    - Reads "n" rows of table with columns y1, ..., ym.
                    If the command is not preceded by a READX command
                    then the y values will be plotted at even intervals.

  Multiple sets of data can be plotted on a 3-Dimensional plot inwhich
  each data set corresponds to a point on the z axis:

  READZ n         - Reads "n" z data values for 3-D plots; there should
                    be one z value per data set.

  A single 3-Dimensional curve can be plotted inwhich the points on the
  curve are the x-y points in data set #1 and the corresponding z values
  read with the READZ command.  There can be a maximum 1024 points on
  the 3-D curve.  A table of x y z data values can be read with the
  following command:

  READXYZ n       - Reads "n" x y z values as single 3-D data set
                    for plotting as a 3-D curve or 3-D scatter plot.
  READZXY n       - Reads the 3-D data point values in the order z x y.

  The following are some more commands used in reading data:

  READBARX n      - Reads "n" character strings to be used as the x
                    value labels on a bar graph.
  SKIP n          - Skips "n" lines of the data file.
  SEARCH text     - Reads from the data file until a line containing
                    "text" is read.
  CLOSE           - Closes the data file; opening a new data file will
                    also close a previously opened data tile.

  The following commands will generate a curve fit of a data set:

  POLY m n        - Generates an mth degree polynomial least squares fit
                    of data set #n.
  EXP m n         - Generates an exponential of an mth degree polynomial
                    least squares fit of data set #n, i.e.,
                             m         m-1
                         Cm X  + Cm-1 X   + ... + C1 X + C0
                    Y = e
  AVG m n         - Generates a nonweighted moving average fit of data
                    set #n using a moving window 2*m+1 data points wide.
                    The data points must be equally spaced.

  If "m" is omitted then it defaults to one; a polynomial fit's degree
  can not be greater than 10.  If "n" is omitted it defaults to the last
  read data set.  The generated data is stored as a new data set.  If
  the POLY or EXP command is used again to fit the same data set with a
  different degree polynomial or the AVG command is used again with a
  different window size then the new fit will overwrite the old one.

  KEEP            - Keeps the last generated fit from being overwritten
                    by a new one.
  OUTPOLY file    - Outputs the last generated polynomial's coefficients
                    to the specified file; if the file is omitted then
                    the output will be to the screen.

  The following command is used to plot error bars:

  ERRBARS m n     - Data set #m will plot as upper or lower error bars of
                    data set #n.  To have upper and lower error bars for
                    data set #n there must be two sets of data specified
                    as error bars.  One data set must contain lower limits
                    and the other must contain upper limits on the
                    corresponding y values of data set #n; the x values of
                    the error bar data sets are ignored.

  The following commands select the type of 2-D plot for each data set:

  LINE n          - Selects a line plot (the default) of data set #n
                    inwhich successive data points are connected by
                    straight lines.
  SPLINE n        - Selects a natural cubic spline plot of data set #n
                    inwhich successive data points are connected by a
                    smooth curve.
  CURVE n         - Selects a smooth curve plot of data set #n using a
                    proprietary method that does not oscillate as much
                    as a spline curve.
  SYMBOLS n       - Specifies that symbols (small squares) are to be
                    drawn at the data points of data set #n along with
                    the connecting lines or curve.
  SCATTER n       - Selects a scatter plot of data set #n with just the
                    symbols for the data points and without the
                    connecting lines or curve.
  SPIKES n        - Specifies that vertical spikes are to be drawn to the
                    data points of data set #n along with the connecting
                    lines or curve.
  HISTOGRAM n     - Selects a histogram of data set #n with the data
                    points represented by vertical spikes and without the
                    connecting lines or curve.
  HISTWIDTH value - If "value" is nonzero then histograms will be plotted
                    using bars of width "value" instead of spikes.
  STEP n          - Selects a step plot of data set #n with successive
                    data points connected by horizontal steps.

  If "n" is omitted from any of the above commands then the command
  applies to all data sets.  In order to make a spline or curve plot the
  x values must be in ascending order.

  Multiple sets of plotted data that correspond to different orders of
  magnitude or different ranges can be compared by using the z axis as a
  second vertical axis on the right side of a 2-D plot (see USEZ command)
  or by using the following commands:

  SCALEX value n  - Multiplies the x values in data set #n by "value".
  OFFSETX value n - Adds "value" to the x values of data set #n.
  SCALEY value n  - Multiplies the y values in data set #n by "value".
  OFFSETY value n - Adds "value" to the y values in data set #n.
  SCALEZ value    - Multiplies the z values by "value".
  OFFSETZ value   - Adds "value" to the z values.

  If "n" is omitted from any of the above commands then it defaults to
  all data sets; this feature can be used to scale the data to keep
  scientific notation from being used in axes tic mark labels.

  A new data set can be generated from a mathematical transformation of one
  or more existing data sets by entering a function in the following format:

  Y(Xn) = function of (Xn, Y1, Y2, ..., Yn, ..., Ym)

  Example:  Y(X1) = (Y2-Y1)^2 / SQRT( 1 + X1 )

  The function must consist of a single expression that can contain
  constants, the symbol PI, variables Xn, Y1, Y2, ..., Ym, the operators
  "+" (addition), "-" (substraction), "*" (multiplication),
  "/" (division) and "^" (exponentiation) and parentheses.  The
  expression can also contain the following elementary functions:

     ABS(X)    Absolute Value.
     SQRT(X)   Square Root.
     EXP(X)    Exponential (e to the power of X).
     LOG(X)    Logarithm (base e).
     LOG10(X)  Logarithm (base 10).
     COS(X)    Cosine.
     SIN(X)    Sine.
     TAN(X)    Tangent.
     ACOS(X)   Arccosine.
     ASIN(X)   Arcsine.
     ATAN(X)   Arctangent.
     COSH(X)   Hyperbolic Cosine.
     SINH(X)   Hyperbolic Sine.
     TANH(X)   Hyperbolic Tangent.
     SINC(X)   Sin(X) / X.
     RND(X)    Random Number (between 0 and 1).
     U(X)      Unit Step Function.
     ERF(X)    Error Function.
     INVERF(X) Inverse Error Function.

  The Y variables represent the Y values of different data sets.  The Y
  values of all data sets that appear in the expression must correspond to
  the same X values, represented by a single X variable.  The X variable
  specified as the function argument is the only X variable that can appear
  in the expression.  The expression is evaluated at each of the X values in
  data set #n.  In the above example, the Y values of both data set #1 and
  data set #2 (represented by the variables Y1 & Y2) must correspond to the
  X values in data set #1 (represented by the variable X1); this would be
  true, for example, if the data sets were read with the READTAB command.

  WARNING: The program will abort if floating point overflow occurs during
           evaluation of an expression.

  A function of a single independent variable can be graphed by entering
  the function in the following format:

  Y(X) = function of X

  Example:  Y(X) = 1 + 2 * EXP(-X^2) * SIN(PI*X)

  The function must consist of a single expression; X is the only variable
  that can appear in the expression.  A new data set will be generated by
  evaluating the function at even intervals of X between starting and ending
  values specified by the XSTART and XEND commands.  The number of sample
  points (which defaults to 251) can be specified with the following command:

  XSAMPLES n

  Three dimensional data can be generated by entering a function of
  two independent variables in the format:

  Y(X,Z) = f(X,Z)

  Example:  Y(X,Z) = SINC( SQRT( X*X + Z*Z ) )

  The function will be evaluated at even intervals of Z between starting and
  ending values specified by the ZSTART and ZEND commands.  The number of Z
  sample points (which defaults to 51) can be specified with the following
  command:

  ZSAMPLES n
  
  Some more commands for manipulating data sets are:

  INTEGRATE n     - Generates the indefinite integral of data set #n using
                    the trapezoidal method of numerical integration.
  COPY x1 x2 n    - Copies points between x1 and x2 from data set #n to
                    a new data set; COPY 0 0 n copies all of the data set.
  SWAPXY n        - Swaps x and y values of data set #n.

  Each set of data is plotted in a different color with EGA/VGA graphics;
  dash lines are used with CGA and Hercules graphics.

  COLOR m         - Specifies that color index "m" be used for drawing
                    axes and labels with EGA/VGA graphics.
  DATACOLOR m n   - Specifies that color index "m" be used for plotting
                    data set #n with EGA/VGA graphics.  Colors can be
                    specified only for the first 10 data sets; these
                    colors will be repeated if more than 10 data sets are
                    plotted.  A simple way of handling color is to put your
                    choice of color commands in a command file, COLOR.PLT
                    for example, then put the command "DO COLOR.PLT" in
                    all other command files or type it interactively.
  DASH ON         - Enables dashed lines (default for CGA & Hercules).
  DASH OFF        - Disables dashed lines (default for EGA/VGA).

  The following commands are used to specify a title, axes labels and
  data set legends:

  XLABEL text     -  The character string "text" will be printed below
                     the x-axis.
  YLABEL text     -  The character string "text" will be printed to the
                     left of the y-axis.
  ZLABEL text     -  The character string "text" will be printed to the
                     right of the z-axis on 3-D plots (or 2-D plots
                     with a second vertical axis).
  TITLE text      -  The character string "text" will be printed above
                     the plot.
  LEGENDn x y text - The legend "text" associated with data set #n will
                     be printed at coordinate (x,y).

  The LEGENDn coordinate (x,y) is the coordinate of the lower left corner
  of the first character in the text.  The coordinate values are specified
  as fractions of axis length and are normally between 0. and 1., i.e.,
  (0.,0.) is at the origin, (1.,0.) is at the end of the x-axis and (0.,1.)
  is at the top of the y-axis.  LEGEND1, LEGEND2, ..., LEGEND9 are
  associated with data sets 1 to 9, respectively, and LEGEND0 is associated
  with data set 10; only the first 10 data sets can be given legends.  The
  legends are displayed using the same colors used to plot the corresponding
  data sets with EGA graphics; if no data set corresponds to a legend then
  the axes color is used.  Legends are printed on 2-D plots only.

  Rather than use the LEGENDn command, an easier way to display a
  legend for data set #n is to manually place the legend on the plot.
  After the plot is drawn:

    (1) Press function key Fn.
    (2) Move the cursor to the desired position on the screen.
    (3) Type the text of the legend.
    (4) Press the RETURN key.

  The cursor appears after a function key has been pressed; it disappears
  after the RETURN key has been pressed.  The arrow keys will move the
  cursor in pixel increments; the HOME and END keys will move the cursor
  left and right in character increments and the PgUp and and PgDn keys will
  move the cursor up and down in character increments.  The cursor can also
  be moved with a mouse.  If the plot is saved with the SAVE command
  (described below) then the legends entered on the screen will be saved as
  LEGENDn commands.  If just one function key is used to enter more than one
  legend then only the last one entered is saved.  Note that the legend
  coordinates are screen coordinates; the legends are not repositioned if
  the origin or axes scales are changed.  Legends can be temporarily
  disabled or cleared with the following commands:

  LEGENDS OFF     - Disables display of legends.
  LEGENDS ON      - Enables display of legends.
  LEGENDS CLR     - Clears all legends.

  A 2-Dimensional plot will be made when the end of the command file is
  reached or the following command is read:

  PLOT            - Makes a 2-Dimensional plot.

  IMPORTANT NOTE: The plot will be cleared from the screen
                  when the ESC key (or right mouse button) is pressed.

  USEZ n1 n2...  - Data sets n1, n2, ... will be plotted using the z axis
                   as a second vertical axis on right side of a 2-D plot.
                   The scale of the second vertical axis is set by ZSTART,
                   ZEND & ZSTEP and the axis label is set by ZLABEL.  The
                   list of data sets is cleared with "USEZ".

  A 3-Dimensional plot will be made when one of the following commands is
  read:

  PLOT3D          - Makes a 3-Dimensional plot of multiple x-y data sets
                    with the z axis a parameter axis.
  PLOT3D SURFACE  - Makes a 3-Dimensional plot of multiple x-y data sets
                    representing curves on a surface y = f(x,z).
  PLOT3D CURVE    - Makes a plot of a 3-Dimensional curve.
  PLOT3D SCATTER  - Makes a 3-Dimensional scatter plot.

  Each x-y data set will correspond to a point on the z axis.  If z
  values were read with the READZ command then the kth x-y data set will
  correspond to the kth z value.  The z values must be in ascending
  order.  If no z values were read then the x-y data sets will be plotted
  at even intervals along the z axis.  With a normal 3-D plot the data
  sets are plotted in different colors.   With a surface 3-D plot all
  data sets are plotted with the same color using a different hidden line
  algorithm that allows the bottom of the surface to be visible as well
  as the top.

  With a surface 3-D plot each data set is assumed to contain the points
  of a curve on the surface that corresponds to a constant value of z,
  i.e., Y = f(X,Zk) where Zk is the value of z that corresponds to the
  kth data set containing the x and y values.  If all data sets contain
  the same sequence of x values (i.e., the data values are points on a
  rectangular grid) then the easiest way of reading the points on the
  surface is to use a READZ command and a READTAB command:

   READZ m
      Z1  Z2 ...  Zm
   READTAB m n
   X1 Y11 Y12 ... Y1m
   X2 Y21 Y22 ... Y2m
   .              .
   :              :
   Xn Yn1 Yn2 ... Ynm

  A 3-D curve is plotted as as sequence of (x,y,z) values inwhich the x-y
  values were read as data set #1 using the READ command and the z values
  were read using the READZ command.  The (x,y,z) values can also be read
  using the READXYZ command (or the READZXY command).

  If a group of (x,y,z) values contained in data set #1 and z is plotted
  as a 3-Dimensional scatter plot then a symbol is drawn at each data
  point along with a vertical line connecting the symbol to the xz plane.

  A different view of the a 3-D plot can be specified with the following
  command:

  ROTATE          - Next 3-D plot will be rotated 90 degrees.
  ROTATE OFF      - Next 3-D plot will be displayed using the normal
                    view.

  Equally spaced y data values can be plotted as a bar graph with the
  following command:

  BAR             - Makes a bar graph of equally spaced y data values.

  If multiple sets of data are to be plotted as a bar graph then all of
  the data sets must have the same number of data points.  A maximum of
  25 data points can be plotted as a bar graph.  If no character strings
  were read with the READBARX command as the x value labels then the
  x-axis is labeled using the values specified by the "XSTART" and
  "XSTEP" commands; if the the XSTEP value is zero then the x-axis is
  labeled as 1, 2, 3, ...

  If just "SPLOT" is typed at the DOS prompt then the plot commands and
  data can be entered at the keyboard.  The following commands are
  useful when commands are entered interactively at the keyboard:

  HELP          - Displays a summary of the plot commands.
  CLRDATA n     - Clears data set #n; clears all data sets if "n" is
                  omitted.
  CLRPLOT       - Resets all plot parameters to their default values.
  SHOW          - Displays the current status of plot parameters.
  DO filename   - Executes the plot commands in file "filename".
  SAVE filename - Saves the data and plot commands to the file
                  "filename".  If the filename is omitted then it
                  defaults to "SAVE.PLT". If the file already exists it
                  is overwritten.
  DOS command   - Executes the specified DOS command; a copy of
                  COMMAND.COM must be accessible by the system.
  EDIT n        - Invokes a user supplied editor to edit data set #n.
                  Before starting the SPLOT program, the name of the
                  editor must be specified with the DOS command "SET
                  SPEDIT=editor".  For example, "SET SPEDIT=EDLIN"
                  specifies that the DOS EDLIN editor will be used; a
                  path to the editor must also be specified.  The EDIT
                  command will write data set #n to the temporary file
                  SPLOTDAT.TMP in the default directory then invoke the
                  specified editor to edit the file.  After the editor
                  terminates, the SPLOT program reads the data back in
                  from the file then deletes the file SPLOTDAT.TMP and
                  the file SPLOTDAT.BAK.  The edited data set must not
                  contain more than 100 additional data points.
  QUIT          - Terminates the program.

  Keyboard input of commands can be particularly useful when doing a
  polynomial curve fit and it is not known what degree will give the
  best fit. When entered from the keyboard, the POLY command will
  display a statistic, the residual variance. First try a first degree
  fit with the command "POLY 1" and note the residual variance. Then
  try a second degree fit with the command "POLY 2" and again note the
  residual variance. Then try a third degree fit, etc. When a degree is
  reached inwhich the residual variance did not change by much from the
  previous value then the previous degree is the one that should be used.

  The DOS memory resident program GRAPHICS will dump a plot to an Epson
  compatible dot matrix printer when the Shift and PrtSc keys are
  simultaneously pressed; the program must have been previously
  installed with the DOS command "GRAPHICS". The GRAPHICS program
  draws the plot sideways and some versions will not work with EGA or
  Hercules graphics. The memory resident program PLOTDUMP draws the
  plot right side up and will work with CGA, EGA or Hercules graphics.
  It is installed with the command "PLOTDUMP" and is invoked by
  simultaneously pressing the Ctrl and PrtSc keys.  If plot dumps are
  made often then the PLOTDUMP command should be placed in the
  AUTOEXEC.BAT file (the file PLOTDUMP.COM must be in the root
  directory or a path must be specified to the directory containing
  the file).

  PLEASE NOTE: In order to dump a plot to a printer the PLOTDUMP
  program must be installed in memory before making the plot.

                            EXAMPLES

  Suppose the file EXAMPLE.PLT contains the following commands:

  title Example Plot
  xlabel This is the x axis
  ylabel This is the y axis
  xstart 5
  xend 15
  xstep 2.5
  ygrid
  open data2.dat
  read 16
  read
  open data1.dat
  read
  close
  read 12
  6  178    7 193   7.5 212    8 243    8.5 365   9.5 185
  10  72   12  43  12.5 150   13 240   13.5 30    14  85
  symbols 3
  symbols 4
  plot

  And suppose data file DATA2.DAT contains:

    5   30     6   40    7  70    8    120
    9  250    9.5 450   10 800   10.25 900
  10.5 950  10.75 880   11 700   11.5  290
  12   150    13   80   14  50    15    40

   5  980    6 980     7  980   8  950    8.5 900    9 800
  9.5 500   10 400   10.5 300   11 250   11.5 220   12 200
  13  200   14 200     15 200

  And suppose data file DATA1.DAT contains:

  4 50   6 75   8 125   10 275   12 575   14 950

  A plot will be displayed by typing "SPLOT EXAMPLE.PLT" at the DOS
  prompt. The x and y axes will be labeled and the plot will be titled.
  The x-axis will be linear by default and will range from 5 to 15 and
  be labeled in increments of 2.5. By default the program SPLOT will
  set the scale of the y-axis which will also be linear. Horizontal grid
  lines will be drawn. Four sets of data will be plotted. The first set
  of data will consist of 16 data points read from file data2.dat. The
  second set of data will be all of the remaining data in file
  data2.dat. The third set of data will be read from file data1.dat.
  The fourth set of data will be the 12 data points in the command
  file. All four sets of data will be plotted as line plots. Symbols
  will be drawn at the data points in the third and fourth sets of data.

  The data in the following command file will be plotted at even
  intervals on the X-axis using a log Y-axis:

  title Example Log Plot
  xlabel X
  ylabel Y
  logy
  ready 24
  2.1  2.9  3.3  3.8  4.6  6.2  8.3  12.4  17.1  29.3  53.7  75.4
  92.1 62.3  25.4  15.2  11.2  7.4  5.9  4.1  3.6  2.8  2.3  1.95
  plot

  The following commands will produce a 3rd degree polynomial curve fit:

  title Third Degree Polynomial Curve Fit
  xlabel X
  ylabel Y
  read 10
  .5  3     1.5  7    2.5  12.5   5.5 14.5   6.5 16
  9.5 14.5  10.5 16   12.5 16    14.5 21    15.5 23
  poly 3
  plot


                   SPLOT SOFTWARE LICENSE AGREEMENT

  The SPLOT software (programs SPLOT, HPLOT and PLOTDUMP and all
  documentation and examples) is copyrighted by the author.  If you find
  the SPLOT software useful please send payment of $20.00 to the author:

                        William G. Hood
                        711 Mitchell
                        Conway, AR 72032 (USA)

  The SPLOT software is protected by copyright law; it is not public
  domain.  You are granted a limited license to have possession of an
  unpaid for copy of the SPLOT software for the purpose of evaluation of
  the software and a license to make and freely give away unmodified
  copies for the purpose of evaluation of the software by others.  The
  software may not be sold, separately or in conjunction with any other
  software or hardware, without written permission of the author; a
  reasonable (under $10) media and handling fee may be charged for
  diskettes or other media containing the software or for access to the
  software on bulletin boards.

  Actual use of the SPLOT software, other than for reasonable evaluation
  purposes, without payment of $20.00 to the author is a copyright
  violation.  Payment of $20.00 entitles a single user to use the SPLOT
  software.

  Those who have previously paid for the right to use a previous major
  version of the SPLOT software can purchase the right to use the current
  version for $10.00.

  The software is provided "AS IS" without warranty of any kind, either
  expressed or implied.

-----------------------------------------------------------------------------

                    SPLOT VERSION NUMBER: 6.6

       Send payment to:   William G. Hood
                          711 Mitchell
                          Conway, AR 72032 (USA)

  [ ]  Payment by check of ________ for a license for ____ (1 to 4) users
       to use the SPLOT software @ $20.00 / user ($10.00 / user if you have
       already paid for version 3.x, 4.x or 5.x; no additional charge if
       you have already paid for version 6.x).

  [ ]  Payment by check of ________ for a license for ____ (5 to 9) users
       to use the SPLOT software @ $15.00 / user.

  [ ]  Payment by check of ________ for a license for ____ (10 to 24) users
       to use the SPLOT software @ $10.00 / user.

  [ ]  Payment by check of $250.00 for a license for an unlimited number
       of users of the SPLOT software (within a single organization).

  [ ]  Payment by check of $30.00 for a single user license and a floppy
       diskette containing the latest version of the SPLOT software plus
       a smaller noninteractive version of the SPLOT program designed
       for "shelling" out of large user written programs.

           Type of diskette:  [ ] 360K 5.25",  [ ] 720K 3.5"

  [ ]  Payment by check of $450.00 for a floppy diskette containing the
       source code (in C and assembler language) and a license for internal
       use of the source code (write author for information on purchasing a
       license to sell or distribute software produced from the source code).


  Name:    ________________________________________________________________

  Company: ________________________________________________________________

  Address: ________________________________________________________________

           ________________________________________________________________

           ________________________________________________________________

  Phone:   ___________________________

  Comments and Suggestions: _______________________________________________

           ________________________________________________________________

           ________________________________________________________________

           ________________________________________________________________

           ________________________________________________________________

           ________________________________________________________________

           ________________________________________________________________
```
{% endraw %}

## SURFGEN.BAS

{% raw %}
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
{% endraw %}

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
