---
layout: page
title: "PC-SIG Library Disk #978"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0978/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk 0978"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "MMAKE, FIXER, AND EGABLANK"

    Programmers -- automate the process of compiling and linking a program
    that is contained in several (or numerous) source files.  MMAKE can be
    used with any programming language and with any compiler that can be run
    from the MS-DOS command line.  It can speed-up program development
    enormously, both by making recompilation of a program go much faster,
    and by preventing errors when a changed file is not recompiled.  Based
    on the UNIX ``make'' utility.
    
    Edit your WordStar, WordPerfect, or ASCII files so they can contain the
    255 character ASCII set.  Press your ALT key along with the decimal
    code that denotes the character you desire and it will be put into your
    file.  The program has a full screen editor and on-line help is
    available to you from a pop-up window.
    
    BREAKER is a life-saving utility when you have a text file that is too
    large to fit in your wordprocessor.  Invoke BREAKER and you are asked
    what file you want to break and how many lines each of your broken files
    will contain.  The files are saved with any name you desire that has a
    sequentially added number attached to it for easy tracking.
    
    Once you have worked with your broken files, put them back together
    again in the same fashion.  A very easy program to use that should be in
    any person's utility library.
    File Descriptions:
    
    BREAKER  EXE  The BREAKER main program.
    BUDG     PRN  Data file.
    
    STRIPPER reads an input text file and produces an output file by
    replacing any control character visible.  You have the option of
    deleting characters in the ASCII character set that are above 126, below
    126, 126 only, below 32, above 32, delete spaces, or any combination in
    between.
    File Descriptions:
    
    STRIPPER EXE  The STRIPPER main program.
    TESTMAIL DBF  Data base file.
    
    EGABLANK blanks your EGA screen after two minutes of inactivity.
    Pressing any key will reactivate your screen.
    File Descriptions:
    
    EGABLANK COM  Main program.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## HLP3.BAS

```bas
100 'HLP3 - HELP FILE FOR SHAREWARE VERSION OF 'PLOT'.  05/08/87
110 'COPYRIGHT 1985,1986,1987, Prowess, Inc.
120 SCREEN 0,0:CLS:KEY OFF:COLOR 6,0
130 PRINT "                              'PLOT'- HELP PROGRAM"
140 PRINT "                               -------------------"
150 PRINT "INTRODUCTION"
160 PRINT "------------":COLOR 6,0
170 PRINT "Your Prowess, Inc. 'PLOT' shareware is a technical productivity tool that"
180 PRINT "provides a quick means of graphing a variety of functions. These include"
190 PRINT "plotting rectilinear and polar equations and vectors. In addition,"
200 PRINT "integrating capability is provided for finding the approximate area under"
210 PRINT "a curve (in rectangular coordinates only). After each plot is completed, you"
220 PRINT "may review a tabulation of all points plotted. BASIC syntax is used for "
230 PRINT "entering all functions. "
240 PRINT
250 PRINT:COLOR 7,0
260 PRINT "    A REMINDER: If you use these programs, after a trial period, you"
270 PRINT "                must pay the nominal registeration fee. Shareware"
280 PRINT "                companies can't exist without your support !!"
290 PRINT
300 PRINT
310 COLOR 6,0:PRINT "You are free to copy and distribute this shareware package providing that"
320 PRINT "you distribute ALL files on this diskette, in UNALTERED form."
330 LOCATE 23,28:PRINT "PRESS ANY KEY TO CONTINUE"
340 LOCATE 23,55:Q$=INKEY$:IF Q$="" THEN 340
350 CLS:KEY OFF:PRINT :PRINT
360 COLOR 7,0
370 PRINT
380 PRINT "                                PROGRAM DESCRIPTIONS"
390 PRINT "                                --------------------"
400 PRINT
410 PRINT "                  PLOT Y=f(X)-------(PGM. MENU SELECTION #1)---1":PRINT
420 PRINT "                  POLAR PLOTTING----(PGM. MENU SELECTION #2)---2":PRINT
430 PRINT "                  VECTOR PLOTTING---(PGM. MENU SELECTION #3) --3":PRINT
440 PRINT "                  PLOT SIM. EQ.-----(PGM. MENU SELECTION #4) --4":PRINT
450 PRINT "                  RETURN TO 'PLOT' PROGRAM  MENU --------------5":PRINT
460 PRINT "                  EXIT ----------------------------------------6":PRINT
470 PRINT
480 PRINT "                                MAKE SELECTION             "
490 LOCATE 20,49:XX$=INKEY$:IF XX$="" OR VAL(XX$)<1 OR VAL(XX$)>6 THEN 490
500 CLS:ON VAL(XX$) GOTO 520,740,980,1200,1870,1900
510 '------------------------------iplot-------------------------------------
520 COLOR 7,0:PRINT "Y=f(X)   (SELECTION #1 ON THE MENU)":COLOR 6,0
530 PRINT
540 PRINT "This program plots single valued functions of X over any range of X that you"
550 PRINT "specify (99999>X>.0001). You will be prompted to enter an equation in the "
560 PRINT "form y=f(x) and to specify a range of X (XMIN,XMAX) over which to plot. The"
570 PRINT "graph will be plotted over the range that you specify, but the X-axis will be"
580 PRINT "labeled + and - the larger of XMIN or XMAX.":PRINT
590 PRINT "Your equation will be evaluated at 200 evenly spaced points between XMIN and"
600 PRINT "XMAX and the largest absolute value of Y determined. This value of Y provides a"
610 PRINT "scaling factor that is used to insure that the graph of the function will fit"
620 PRINT "on the plot field. The Y-axis is labled + and - this largest value of Y.":PRINT
630 PRINT "The total range of X (XMIN to XMAX) is divided by 199 to establish a plotting "
640 PRINT "increment. The first point plotted is XMIN and 199th of the total range of X is"
650 PRINT "added for each of the 200 plot points. This tends to reduce the possibility"
660 PRINT "of division by zero, BUT DOES INSURE THAT IT WON'T OCCUR. If you get  a "
670 PRINT "'division by zero' error message, try a slight change in the range of X."
680 PRINT "After plotting, a tabulation of all plotting point may be viewed.":PRINT
690 PRINT "NOTE: In trig functions, X will be considered an angle in radians!"
700 PRINT
710 COLOR 6,0:LOCATE 23,28:PRINT "PRESS ANY KEY TO CONTINUE":COLOR 7,0
720 LOCATE 23,54:A$=INKEY$:IF A$="" THEN 720
730 CLS:GOTO 1560
740 '-------------------------------pplot-------------------------------------
750 COLOR 7,0:PRINT "POLAR PLOTTING (SELECTION #2 ON THE MENU)":COLOR 6,0
760 PRINT
770 PRINT "This program plots polar equations in polar format. There are two common forms"
780 PRINT "of polar equations:"
790 PRINT
800 PRINT "                     R = f(";CHR$(233);")   OR     Y = f(";CHR$(233);")  AND  X = f(";CHR$(233);")"
810 PRINT
820 PRINT "You will first be prompted to select the desired format. You will then be"
830 PRINT "prompted through the process of entering your equation(s)."
840 PRINT
850 COLOR 7,0:PRINT "               NOTE: ENTER ANY FIXED ANGLES IN RADIANS !!!"
860 PRINT
870 PRINT "    THE PLOT (VARIABLE A) WILL RUN FROM 0 TO 2*PI RADIANS [(0-360) DEGREES]":COLOR 6,0:PRINT
880 PRINT "Your equation(s) will be evaluated every 2 degrees to determine the largest"
890 PRINT "value of R for scaling. (X and Y formats are automatically converted to 'R'"
900 PRINT "format for scaling and plotting. After plotting, you may review a tabulation "
910 PRINT "of all plot points in both 'R' and 'X and Y' formats."
920 PRINT:COLOR 7,0
930 PRINT "      NOTE: The variable in your equation must always be 'A' (for angle)"
940 PRINT "            i.e.;   R = 2 * SIN((A+180)"
950 COLOR 6,0:LOCATE 23,28:PRINT "PRESS ANY KEY TO CONTINUE":COLOR 7,0
960 LOCATE 23,54:A$=INKEY$:IF A$="" THEN 960
970 GOTO 350
980 '-----------------------------vplot---------------------------------------
990 COLOR 7,0:PRINT "VECTOR PLOTTING  (SELECTION #3 ON THE MENU)":PRINT:COLOR 6,0
1000 PRINT "This program allows you to enter up to 10 vectors, in either polar or"
1010 PRINT "rectangular coordinates. You will be prompted through the inputs."
1020 PRINT
1030 PRINT "If you entered in polar format, a list of vectors representing your inputs will"
1040 PRINT "be shown along with the rectangular coordinates of each point. The coordinates"
1050 PRINT "of the resultant will be displayed in both coordinate systems"
1060 PRINT
1070 PRINT "The longest vector ( including the resultant ) will be used to scale the plot"
1080 PRINT "field and each vector will be shown in polar form. The resultant will be"
1090 PRINT "identified by a large, white terminator circle. The x and y coordinates of the"
1100 PRINT "resultant will be noted beside the graph."
1110 PRINT
1120 PRINT "Vectors input in rectangular format are handled in much the same way."
1130 PRINT
1140 COLOR 7,0:PRINT "        NOTE:  Roundoff errors may result in small calculation errors."
1150 PRINT "               Example:  5  might be represented by 4.9999  etc."
1160 PRINT :PRINT
1170 COLOR 6,0:LOCATE 23,28:PRINT "PRESS ANY KEY TO CONTINUE":COLOR 7,0
1180 LOCATE 23,54:A$=INKEY$:IF A$="" THEN 1180
1190 GOTO 350
1200 '-------------------------------splot-----------------------------------
1210 COLOR 7,0:PRINT "SIMULTANEOUS EQUATION PLOTTING (SELECTION #4 ON THE MENU)":COLOR 6,0:PRINT
1220 PRINT "This program allows you to input two equations, one in the form Y=f(X)."
1230 PRINT "and the other in the form A=f(B) and to plot them both on the same plot field."
1240 PRINT
1250 PRINT "You will be prompted to enter two equations and a range of X. Both equations"
1260 PRINT "will be plotted over the same range (XMIN to XMAX). Plotting increments are"
1270 PRINT "derived by dividing this total range by 199. Plotting starts at XMIN and 199th"
1280 PRINT "of the range is added for each of the 200 iterations. This greatly reduces the"
1290 PRINT "probability of getting a 'divide by zero' error, BUT DOES NOT ELIMINATE IT!!."
1300 PRINT "Should you get a 'divide by zero' error, try changing the range of X by a"
1310 PRINT "small amount. Both equations are evaluated over the whole range to determine"
1320 PRINT "the largest value of Y. The largest value (from either equation) will be used"
1330 PRINT "to scale the Y-axis (+Ymax to -Ymax).":PRINT:COLOR 7,0
1340 PRINT "  NOTE: IF ONE EQUATION PRODUCES VERY LARGE Y-AXIS VALUES AND THE OTHER"
1350 PRINT "        VERY SMALL Y-AXIS VALUES, THE TRUE SHAPE OF THE SMALL-VALUED CURVE"
1360 PRINT "        MAY BE VERY DIFFICULT TO DISCERN. OFTEN, RESTRICTING THE RANGE OF X"
1370 PRINT "        HELPS RESTRICT THE 'Y-VALUES' SO THAT BOTH CURVES ARE WELL PRESENTED."
1380 LOCATE 22,1:COLOR 6,0:PRINT "                          PRESS ANY KEY TO CONTINUE":COLOR 7,0
1390 LOCATE 22,54:A$=INKEY$:IF A$="" THEN 1390
1400 CLS:PRINT :PRINT :PRINT "When plotting of the two equations is completed, you may review a tabulation"
1410 PRINT "of all plotted points. This table displays the calculated values of Y and A for"
1420 PRINT "each value of X.":PRINT:COLOR 7,0
1430 PRINT "   NOTE: A RATIONAL FIRST ASSUMPTION IS THAT IF THE CURVES INTERSECT,"
1440 PRINT "         THE TABULATED VALUES SHOULD SHOW THE SOLUTION(S): i,e. Y=A"
1450 PRINT "         FOR A GIVEN X. IF THIS HAPPENS, IT IS PURE CHANCE SINCE THE"
1460 PRINT "         RANGE OF X WAS ARBITRARILY DIVIDED INTO 199 EVEN INCREMEMENTS."
1470 PRINT "         ALTHOUGH EXACT SOLUTIONS ARE NOT LIKELY TO BE DISPLAYED, THE"
1480 PRINT "         TABULAR VALUES OFTEN PROVIDE A SATISFACTORY ANSWER. RESTRICTING"
1490 PRINT "         THE RANGE OF X TO BARELY INCLUDE THE INTERSECTION POINT WILL"
1500 PRINT "         PROVIDE TABULATED VALUES THAT ARE CLOSEST TO THE THE EXACT"
1510 PRINT "         SOLUTION. A FEW ITERATIONS MAY BE REQUIRED."
1520 COLOR 6,0:LOCATE 23,28:PRINT "PRESS ANY KEY TO CONTINUE"
1530 LOCATE 23,54:A$=INKEY$:IF A$="" THEN 1530
1540 GOTO 350
1550 '------------------------------iplot continued ---------------------------
1560 COLOR 7,0:PRINT "PLOT Y=f(X) AND INTEGRATE (IF DESIRED) (SELECTION #1 ON THE PGM. MENU)":COLOR 6,0:PRINT
1570 PRINT "After the function is plotted, a prompt is displayed that allows you to find"
1580 PRINT "the area under the curve, or go to the next menu.":PRINT
1590 PRINT "If you choose the 'Area' option, you will be prompted to enter a lower limit"
1600 PRINT "of X and an upper limit of X (X1,X2), over which to calculate the area under"
1610 PRINT "the curve. After selection, these limits are displayed as white lines on the:
1620 PRINT "plot field and integration begins immediately. Progress of the integration is""
1630 PRINT "shown by progressive shading over the range of interest. When integration is"
1640 PRINT "completed, the absolute value of the approximate area is displayed. You can"
1650 PRINT "accurately integrate beyond the plotted curve and even beyond the plot field."
1660 PRINT "INTEGRATING BEYOND THE LIMITS OF THE SCREEN IS POSSIBLE, BUT NOT RECOMMENDED.":PRINT:COLOR 7,0
1670 PRINT "      NOTE: THE ACCURACY OF THE AREA CALCULATION IS AFFECTED BY BOTH"
1680 PRINT "            THE FINITE ( 200 INCREMENT ) INTEGRATION AND ROUNDOFF ERRORS"
1690 PRINT "            IN THE COMPUTER. IN MOST CASES, THE ACCURACY OF THE AREA"
1700 PRINT "            IS MUCH BETTER THAN 1%."
1710 LOCATE 22,1:COLOR 6,0:PRINT "                          PRESS ANY KEY TO CONTINUE"
1720 LOCATE 22,54:A$=INKEY$:IF A$="" THEN 1720
1730 CLS:LOCATE 4,1
1740 PRINT "Note that the 200 increments over which the integration is performed are not"
1750 PRINT "the same increments that were used in plotting the function. The range of X"
1760 PRINT "over which you elected to integrate is separately divided into 200 parts for"
1770 PRINT "the integration routine. After the area is displayed, you may still review"
1780 PRINT "the tabulated plotting points.":PRINT
1790 PRINT "NOTE: It takes no longer to integrate over a broad expanse of the plotted"
1800 PRINT "function than over a small portion since 200 equally spaced points will be"
1810 PRINT "used for integration in either case. Some improvement in area calculation"
1820 PRINT "accuracy is obtained by restricting the plotting range of X to just include"
1830 PRINT "the desired range of integration."
1840 COLOR 6,0:LOCATE 23,28:PRINT "PRESS ANY KEY TO CONTINUE":COLOR 7,0
1850 LOCATE 23,54:A$=INKEY$:IF A$="" THEN 1850
1860 GOTO 350
1870 '---------------------------goto plotting menu---------------------------
1880 CLS
1890 RUN "PLOTM"
1900 '------------------------------return to system--------------------------
1910 CLS:COLOR 10,0:LOCATE 12,31:PRINT "ARE YOU SURE?  Y/N"
1920 LOCATE 12,51:A$=INKEY$:IF A$="" THEN 1920
1930 IF A$="Y" OR A$="y" THEN 1960
1940 IF A$="N" OR A$="n" THEN 350
1950 GOTO 1920
1960 LOCATE 15,30:COLOR 7,0:PRINT "COPY AUDIT #: ";CHR$(4);CHR$(225);CHR$(213);CHR$(177);CHR$(146);CHR$(216);CHR$(6);CHR$(206):FOR I=1 TO 1500:NEXT I
1970 CLS:CHAIN "PLIC
1980 END
```

## IPLOT.BAS

```bas
100 'IPLOT - SHAREWARE F(X) PLOT WITH INTEGRATION
110 'COPYRIGHT 1985,1986,1987 Prowess, Inc.
120 CLS:KEY OFF:CLEAR,,2000:SCREEN 0,0,0:COLOR 6,0:XX$=STRING$(78,32)
130 DIM R(51),U(51),X(51),Y(51),XC(51),YC(51)
140 COLOR 3,0:LOCATE 1,25:PRINT CHR$(201)+STRING$(31,205)+CHR$(187)
150 FOR L=2 TO 3:LOCATE L,25:PRINT CHR$(186):LOCATE L,57:PRINT CHR$(186):NEXT L
160 LOCATE 2,34:PRINT "RECTLINEAR PLOT"
170 LOCATE 3,26:PRINT "(C) 1985,1986,1987 Prowess,Inc."
180 COLOR 3,0:LOCATE 4,25:PRINT CHR$(200)+STRING$(31,205)+CHR$(188)
190 COLOR 1,0:LOCATE 4,2:PRINT CHR$(201)+STRING$(78,205)+CHR$(187)
200 LOCATE 3,75:COLOR 7,0:PRINT "V2.5":COLOR 1,0
210 FOR L=6 TO 19
220 LOCATE L,1:PRINT CHR$(186):LOCATE L,80:PRINT CHR$(186)
230 NEXT L
240 LOCATE 19,2:PRINT CHR$(200)+STRING$(78,205)+CHR$(188):COLOR 6,0
250 IF FLAG<>0 THEN 340
260 LOCATE 12,16:PRINT "Do you want to read the instructions?  (Y/N/Q)"
270 LOCATE 12,62:K$=INKEY$:IF K$="" THEN 270
280 IF K$="Y" OR K$="y" THEN LOCATE 12,2:PRINT XX$:LOCATE 3,75:PRINT "    ":GOTO 2370
290 IF K$="N" OR K$="n" THEN LOCATE 12,2:PRINT XX$:LOCATE 3,75:PRINT "    ":GOTO 320
300 IF K$="Q" OR K$="q" THEN 2230
310 GOTO 270
320 LOCATE 12,3:PRINT STRING$(75,32)
330 DEFDBL X-Y:PI=3.1415926#
340 COLOR 10,0
350 LOCATE 6,3:PRINT "Enter your equation in the form   Y=f(X) and press 'return'":COLOR 7,0
360 LOCATE 8,3:PRINT "EXAMPLE: Y = 2*X^2 - 20*X - 3  or  Y = exp(-.3*X)*sin(4*X)":LOCATE 10,12:COLOR 15,0:PRINT "Y ="
370 IF FLAG=3 THEN LOCATE 21,3:COLOR 6,0:PRINT "YOUR EQUATION WAS ":COLOR 7,0:LOCATE 21,22:PRINT "Y = ";EQ$:COLOR 7,4:LOCATE 18,9:PRINT "DIVISION BY ZERO OCCURED-REENTER EQUATION AND CHECK RANGE OF X":COLOR 10,0:FLAG=0:LOCATE 14,3
380 IF FLAG=2 THEN LOCATE 21,3:COLOR 6,0:PRINT "YOUR EQUATION WAS ":COLOR 7,0:LOCATE 21,22:PRINT "Y = ";EQ$:COLOR 7,4:LOCATE 18,20:PRINT "PLEASE CHECK FOR SYNTAX ERROR AND REENTER ":COLOR 10,0:FLAG=0:LOCATE 14,3
390 IF FLAG=4 THEN LOCATE 21,3:COLOR 6,0:PRINT "YOUR EQUATION WAS ":COLOR 7,0:LOCATE 21,22:PRINT "Y = ";EQ$:COLOR 7,4:LOCATE 17,3:PRINT "AN ILLEGAL FUNCTION CALL WAS MADE-POSSIBLY AN IMMAGINARY NUMBER WAS CREATED"
400 IF FLAG=4 THEN LOCATE 18,3:PRINT " -  REENTER THE EQUATION. CHECK YOUR RANGE SPECIFICATION."
410 COLOR 15,0:FLAG=0:LOCATE 14,3
420 '---------------------inputs user's equation string---------------------
430 B$="1910 Y="          'line # at which user eq. will be placed---------
440 LOCATE 10,16:LINE INPUT EQ$:IF LEN(EQ$)=0 THEN BEEP:GOSUB 530:GOTO 360
450 C$ = B$+EQ$
460 '----------writes the equation string to a file called funct.bas---------
470 OPEN "O",#1,"FUNCT.BAS"
480    PRINT  #1,C$
490 CLOSE #1
500 '-------merges funct.bas with this pgm. and continues execution----------
510 CHAIN MERGE "FUNCT.BAS",560,ALL:ON ERROR GOTO 1930
520 '----------------------clear upper & lower fields-------------------------
530 FOR LL=6 TO 19:LOCATE LL,3:PRINT STRING$(76,32):NEXT LL
540 FOR LL=21 TO 23:LOCATE LL,3:PRINT STRING$(75,32):NEXT LL:RETURN
550 '-------------------------------------------------------------------------
560 COLOR 10,0
570 GOSUB 530
580 '--user defines range of x over which to plot-------------
590 LOCATE 21,3:PRINT "Enter RANGE of X over which to plot. (Xmin,Xmax)":COLOR 12,0
600 LOCATE 8,20:PRINT "NOTE: XMIN must be smaller than XMAX !!!":COLOR 10,0
610 LOCATE 12,3:PRINT "The X-AXIS will be scaled + and - whichever (Xmin or Xmax) has the largest"
620 LOCATE 13,3:PRINT "absolute value."
630 LOCATE 15,3:PRINT "Example: If you wish to plot the function from X = -10 to X = 0, you would"
640 LOCATE 16,3:PRINT "enter -10,0. The X axis would run from -10 to +10 and the function would"
650 LOCATE 17,3:PRINT "be plotted from X = -10 to X = 0, as you requested."
660 LOCATE 21,52:INPUT "",XMIN,XMAX
670 IF XMIN>=XMAX THEN BEEP:LOCATE 21,52:PRINT "              ":GOTO 660
680 INC = (XMAX-XMIN)/199                  'sets up plotting increment of x
690 CLS:COLOR 28,0
700 ' ------------determines largest values of x and y for scaling ----------
710 GOSUB 530
720 LOCATE 12,20:PRINT "FINDING MAX VALUES OF X AND Y FOR SCALING"
730 X=XMIN:LOCATE 23,1:ON ERROR GOTO 1930
740 GOSUB 1910
750 YBIG=ABS(Y):XBIG=ABS(X)
760 FOR K=2 TO 200
770    X = X + INC
780   GOSUB 1910
790    IF ABS(Y) > YBIG THEN YBIG=ABS(Y)
800 NEXT K
810 IF ABS(XMIN) > ABS(XMAX) THEN XBIG=ABS(XMIN) ELSE XBIG=ABS(XMAX)
820 '------------------------draws plotting field-----------------------------
830 BEEP
840 SCREEN 2,0:CLS
850 LINE (137,9.3)-(493,157),7,B      'draws graph field---------------
860 FOR I=7.38 TO 73.8 STEP 7.38
870 LINE (315+(I/0.417),9.3)-(315+(I/0.417),157),7,,&HAAAA '+ vert grid lines
880 LINE (315-(I/0.417),9.3)-(315-(I/0.417),157),7,,&HAAAA ' - vert grid lines
890 LINE (137,83.2+I)-(493,83.2+I),7,,&HAAAA             '+ horiz grid lines
900 LINE (137,83.2-I)-(493,83.2-I),7,,&HAAAA             '- horiz grid lines
910 NEXT I
920 LINE (315,9.3)-(315,157),7         'draws vertical axis -----------------
930 LINE (137,83.2)-(493,83.2),7       'draws horizontal axis ---------------
940 ' -------------------prints axis labels, etc. ---------------------------
950 LOCATE 1,40
960 PRINT "Y"
970 LOCATE 11,64
980 PRINT "X"
990 LOCATE 2,64
1000 IF YBIG<=0 THEN 1020
1010 PRINT USING "+#######.####";YBIG:GOTO 1030
1020 PRINT USING "+#.#####";YBIG:
1030 LOCATE 20,65
1040 IF YBIG#<=0 THEN 1060
1050 PRINT USING "#######.####";-YBIG:GOTO 1070
1060 PRINT USING "#.#####";-YBIG
1070 LOCATE 20,65:PRINT " "
1080 LOCATE 21,11
1090 IF XBIG<=0 THEN 1110
1100 PRINT USING "#######.####";-XBIG:GOTO 1120
1110 PRINT USING "#.#####";-XBIG
1120 LOCATE 21,11:PRINT " "
1130 LOCATE 21,56
1140 IF XBIG<=0 THEN 1160
1150 PRINT USING "+#######.####";XBIG:GOTO 1170
1160 PRINT USING "+#.#####";XBIG
1170 LOCATE 21,40
1180 PRINT "0"
1190 LOCATE 11,15
1200 PRINT "0"
1210 ' -----------------------plots points------------------------------------
1220 X=XMIN:W$=STRING$(80,32):LOCATE 1,1:PRINT "PLOTTING"
1230 GOSUB 1910
1240 PSET ((315+(X*177)/XBIG),(83.2-(Y*73.8/YBIG)))    'sets cursor to 1st pt.
1250 FOR K=2 TO 200                            'scales and plots user function
1260    X=X+INC
1270    GOSUB 1910
1280   LINE -((315+(X*177)/XBIG),(83.2-(Y*73.8)/YBIG)),7
1290 NEXT K
1300 LOCATE 1,1:PRINT "          "
1310 LOCATE 22,1
1320 OPEN "I",2,"FUNCT.BAS"
1330  INPUT #2,T$
1340 LOCATE 1,1:PRINT "GRAPH OF ";MID$(T$,5)
1350 LOCATE 22,1:PRINT W$:LOCATE 22,1:PRINT "PRESS 'A' TO FIND AREA UNDER CURVE, OTHERWISE, PRESS 'C' ":LOCATE 23,78
1360 LOCATE 22,78:A$=INKEY$:IF A$="" THEN 1360
1370 LOCATE 22,1:PRINT W$
1380 IF A$="A" OR A$="a" THEN GOSUB 1980:LOCATE 15,65:PRINT "PRESS ANY KEY":LOCATE 16,65:PRINT "TO CONTINUE":FOR I=1 TO 3000:NEXT I:LOCATE 15,65:PRINT "             ":LOCATE 16,65:PRINT "           "  ELSE 1410
1390 LOCATE 22,80:W$=INKEY$:IF W$="" THEN 1390
1400 GOTO 1430
1410 IF A$="C" OR A$="c" THEN 1430
1420 BEEP:GOTO 1350
1430 CLOSE 2:SCREEN 0,,0,0
1440 CLS  '--------------- provides choice of continuing or not -------------
1450 PRINT :PRINT :PRINT :PRINT :PRINT :COLOR 10,0
1460 PRINT "           DISPLAY A TABLE OF CALCULATED X & Y VALUES ? .....1"
1470 PRINT "           CHANGE RANGE OF X FOR PRESENT FUNCTION ...........2"
1480 PRINT "           PLOT A NEW FUNCTION...............................3"
1490 PRINT "           EXIT .............................................4"
1500 PRINT
1510 PRINT "                       MAKE SELECTION "
1520 LOCATE 11,42:SS$=INKEY$:IF SS$="" OR VAL(SS$)<1 OR VAL(SS$)>4 THEN 1520
1530 ON VAL(SS$) GOTO 1540,530,120,2240
1540 Q = 12
1550 X=XMIN-INC
1560 CLS
1570 '--------------------------sets up page header---------------------------
1580 COLOR 10,0:PRINT "        POINT #            X                   Y "
1590 LOCATE 18,60:COLOR 6,0:PRINT "PRESS ANY KEY TO"
1600 LOCATE 19,60:PRINT "CONTINUE OR 'Q'"
1610 LOCATE 20,60:PRINT "FOR NEXT MENU."
1620 COLOR 14,0:J=4:K=2:L=1
1630 FOR I=3 TO 22
1640 X=X+INC
1650 GOSUB 1910:IF FLAG=1 THEN LOCATE I:PRINT "                                                         ":GOTO 1690
1660 LOCATE I,11:PRINT L
1670 LOCATE I,18:PRINT USING "#######.####";X
1680 LOCATE I,38:PRINT USING "#######.####";Y
1690 L=L+1
1700 IF L=200 THEN FLAG=1
1710 NEXT I
1720 FLAG=0
1730 LOCATE 23,80:A$=INKEY$:IF A$="" THEN 1730
1740 IF A$="Q" OR A$="q" THEN CLS:GOTO 1780
1750 IF L<200 GOTO 1630
1760 LOCATE 23,80:A$=INKEY$:IF A$="" THEN 1760
1770 CLS
1780 '-------------------provides choice of continuing or not-----------------
1790 COLOR 10,0:LOCATE 8,1
1800 PRINT "                 PLOT SAME FUNCTION AGAIN ................1"
1810 PRINT "                 CHANGE RANGE OF X FOR PRESENT FUNCTION ..2"
1820 PRINT "                 INPUT A NEW FUNCTION ....................3"
1830 PRINT "                 EXIT ....................................4":PRINT
1840 PRINT "                              MAKE SELECTION "
1850 LOCATE 13,47:GG$=INKEY$:IF GG$="" OR VAL(GG$)<1 OR VAL(GG$)>4 THEN 1850
1860 ON VAL(GG$) GOTO 820,530,120,2240
1870 CLS:IF I=200 THEN 1770
1880 Q = Q + 12
1890 Y=SIN(X)
1900 '-----------------------------user function-----------------------------
1910 Y=10*SQR(X)
1920 RETURN
1930 '-----------------------error trap routine-syntax,/0,--------------------
1940 IF ERR=2 AND ERL=1910 THEN CLS:FLAG=2:CLS:BEEP:RESUME 140
1950 IF ERR=11 AND (ERL=1910 OR ERL=1240) THEN CLS:BEEP:FLAG=3:RESUME 140
1960 IF ERR=5 AND ERL=1910 THEN CLS:FLAG=4:CLS:BEEP:RESUME 140
1970 ON ERROR GOTO 0:CLS:GOTO 140
1980 Z$=STRING$(79,32) '----integration subroutine----------------------------
1990 LOCATE 23,1:PRINT "Z$":LOCATE 23,1
2000 INPUT "To find AREA between X1 and X2, enter in the form: X1,X2  ";X1,X2
2010 LOCATE 23,1:PRINT Z$:LOCATE 23,1:PRINT "INTEGRATING":LOCATE 23,80
2020 X=X1
2030 GOSUB 1910
2040 PSET (315+(X*177/XBIG),83.2)
2050 LINE -(315+(X*177/XBIG),(83.2-(Y*73.8/YBIG))),7
2060 X=X2
2070 GOSUB 1910
2080 PSET (315+(X*177/XBIG),83.2)
2090 LINE -(315+(X*177/XBIG),(83.2-(Y*73.8/YBIG))),7
2100 AINC = (X2-X1)/251:DA=0
2110 FOR J=X1 TO X2 STEP AINC
2120   X=J+AINC
2130   GOSUB 1910
2140   PSET (315+(X*177/XBIG),83.2)
2150   LINE -(315+(X*177/XBIG),(83.2-(Y*73.8/YBIG))),7
2160   X=J+(AINC/2)
2170   GOSUB 1910
2180   DA=DA+(AINC*ABS(Y))
2190 NEXT J
2200 LOCATE 23,1:PRINT Z$:LOCATE 23,1:PRINT "APPROX AREA BETWEEN  ";X1;" AND  ";X2;"  = "
2210 LOCATE 23,45:PRINT USING "#######.####";DA:LOCATE 23,60:PRINT " SQ. UNITS"
2220 RETURN
2230 '-------------------------------quit menu---------------------------------
2240 SCREEN 0,1,0:CLS:COLOR 6,0
2250 LOCATE 8,25:PRINT "RESTART THIS PROGRAM --------------1"
2260 LOCATE 10,25:PRINT "RETURN TO PLOT MENU ---------------2"
2270 LOCATE 12,25:PRINT "EXIT ------------------------------3"
2280 LOCATE 17,30:PRINT "Make selection"
2290 LOCATE 17,50:Q$=INKEY$:IF Q$="" THEN 2290
2300 QT=VAL(Q$)
2310 IF QT<1 OR QT>3 THEN BEEP:GOTO 2290
2320 IF QT=1 THEN 120
2330 IF QT=2 THEN CHAIN "PLOTM"
2340 IF QT=3 THEN KEY ON:COLOR 7,0:CLS:SYSTEM
2350 BEEP:GOTO 2290
2360 '---------------------------------help-----------------------------------
2370 GOSUB 530
2380 LOCATE 6,3:PRINT "* This program plots functions of the form Y = f(X) over any range of X"
2390 LOCATE 7,5:PRINT "that you specify."
2400 LOCATE 9,3:PRINT "* If your equation uses letters other than 'Y' and 'X', you will have to"
2410 LOCATE 10,5:PRINT "change to the Y = f(X) format before entering."
2420 LOCATE 12,3:PRINT "* BASIC language syntax must be used when entering your equation. Check"
2430 LOCATE 13,5:PRINT "your BASICA (or equiv.) manual if you are not familiar with handling"
2440 LOCATE 14,5:PRINT "BASIC math statements."
2450 LOCATE 16,3:PRINT "* Although this program contains statements to trap 'division by zero'"
2460 LOCATE 17,5:PRINT "that might occur, BASICA does not allow trapping this error. Some other"
2470 LOCATE 18,5:PRINT "BASICA equivalents DO allow 'division by zero' trapping. If you get a"
2480 LOCATE 19,5:PRINT "'division by zero' error message, you will have to rerun the program."
2490 LOCATE 21,3:PRINT "Press any key to continue"
2500 LOCATE 21,27:K$=INKEY$:IF K$="" THEN 2500
2510 GOSUB 530
2520 LOCATE 6,3:PRINT "* To minimize the chance of inadvertently creating a 'divide by zero'"
2530 LOCATE 7,5:PRINT "situation, the program divides the plotting range into 199 parts. Thus,"
2540 LOCATE 8,5:PRINT "if specify that you want an equation plotted from X = -10 to +20, the"
2550 LOCATE 9,5:PRINT "program will first plot the value of Y for X = -10. The next plot point"
2560 LOCATE 10,5:PRINT "will be the value of Y for X = -10 + (30/199). The 30/199 is added to X"
2570 LOCATE 11,5:PRINT "for each iteration. Unless you enter zero as one of the range numbers, the"
2580 LOCATE 12,5:PRINT "likelyhood of accidently dividing by zero is very small."
2590 LOCATE 14,3:PRINT "* After your curve is plotted, you may calculate the approximate area"
2600 LOCATE 15,5:PRINT "between the curve and the X-axis by selecting the 'A' option. Take the "
2610 LOCATE 16,5:PRINT "'C' (continue) option if you don't want to find the area."
2620 LOCATE 18,3:PRINT "* After plotting, you may review the X and Y values for each plotting point."
2630 LOCATE 21,3:PRINT "Press any key to start"
2640 LOCATE 21,25:K$=INKEY$:IF K$="" THEN 2640
2650 GOSUB 530:GOTO 330
```

## IQBUILD.BAS

```bas
10 REM ======================================================================
20 REM ============================= IQ Builder =============================
30 REM This program presents a menu of the programs available in the      ===
40 REM IQ Builder series and allows the user to select a program by       ===
50 REM moving the cursor to the desired program and pressing ENTER.       ===
60 REM ======================================================================
70 REM $s2
80 REM  =====================================================================
90 REM  Turn off KEY display, set display width, clear the screen and set ===
100 REM KEY(10) to reload the menu program when pressed in command mode.  ===
110 REM =====================================================================
120 REM $s2
130 KEY OFF:WIDTH 80:CLS:KEY 10,"run "+CHR$(34)+"b:???0??"+CHR$(13)
140 REM $s2
150 REM =====================================================================
160 REM Display the menu of the programs available in IQ Builder.         ===
170 REM =====================================================================
180 REM $s2
190 LOCATE 1,34,0:COLOR 0,7:PRINT " IQ Builder ";
200 LOCATE 3,10:COLOR 7,0:PRINT "The following programs are available on this diskette:";
210 LOCATE 5,30:PRINT "Number Series"
220 LOCATE 6,30:PRINT "Analogies"
230 LOCATE 7,30:PRINT "Synonyms"
240 LOCATE 8,30:PRINT "Antonyms"
270 LOCATE 16,1:PRINT"Use the ";:COLOR 15:PRINT"UP ("CHR$(24)")";:COLOR 7:PRINT" and ";:COLOR 15:PRINT"DOWN ("CHR$(25)")";:COLOR 7:PRINT" arrows to position the cursor to the function"
280 LOCATE 17,1:PRINT"desired and then press the ";:COLOR 15:PRINT"ENTER ("CHR$(17)CHR$(196)CHR$(217)")";:COLOR 7:PRINT" key."
290 REM $s2
300 REM =====================================================================
310 REM Set up the initial coordinates for the selection arrow.           ===
320 REM =====================================================================
330 REM $s2
340 X=25:Y=5
350 REM $pa
360 REM =====================================================================
370 REM Set up UP and DOWN arrows for moving selection arrow.             ===
380 REM =====================================================================
390 REM $s2
400 KEY(11) ON:KEY(14) ON:ON KEY(11) GOSUB 730:ON KEY(14) GOSUB 800
410 REM $s2
420 REM =====================================================================
430 REM Set up KEY(10) to return to MENU program on A-disk.               ===
440 REM =====================================================================
450 REM $s2
460 KEY(10) ON:ON KEY(10) GOSUB 1000
470 REM $s2
480 REM =====================================================================
490 REM Display highlighted selection arrow at Y,X.                       ===
500 REM ======================                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                
```

## PLIC.BAS

```bas
500 'PLIC  -- Prowess, Inc. license agreement 04/28/87
510 CLS:CLEAR:SCREEN 0,0
520 LOCATE 1,28:PRINT "PLOT -- LICENSE AGREEMENT"
530 LOCATE 2,20:PRINT "Copyright 1985,1986,1987, Prowess, Inc."
540 LOCATE 4,5:PRINT "This is a user supported software product.  It is not public domain"
550 LOCATE 5,5:PRINT "software, nor is it free software. You are granted a limited license"
560 LOCATE 6,5:PRINT "to use this product on a trial basis.   If you continue to use this"
570 LOCATE 7,5:PRINT "product, after a trial period, you must register by sending:"
580 LOCATE 9,5:PRINT "    $25 (Minimum reg.)         or         $35 (+ $4 s/h) (Full reg.)"
590 LOCATE 10,5:PRINT "   * Technical support                   *  Technical support"
600 LOCATE 11,5:PRINT "   * Informed of updates                 *  Latest diskette supplied"
610 LOCATE 12,5:PRINT "                                         *  Printed manual"
620 LOCATE 14,18:PRINT "Texas residents, please add 7 1/4 % sales tax"
630 LOCATE 15,11:PRINT "Contact us for information concerning low cost site licenses."
640 LOCATE 17,5:PRINT "If you like the shareware concept - try before you buy - support the"
650 LOCATE 18,5:PRINT "companies that provide useful, professional quality products."
660 LOCATE 20,5:PRINT "Prowess,Inc. -  203 Lakeridge Village - Suite 102 - Dallas, TX  75238"
670 LOCATE 21,33:PRINT "(214) 349-4718"
680 LOCATE 23,29:PRINT "Press any key to exit"
690 LOCATE 23,52:F$=INKEY$:IF F$="" THEN 690
700 COLOR 7,0:SYSTEM
```

## PLOG.BAS

```bas
100 'PLOT - LOGO, LICENSE (COLOR SYS)  - SHAREWARE VERSION 2.0 -- 05/08/87
110 ' COPYRIGHT 1985,1986, 1987, Prowess, Inc.
120 CLEAR:SCREEN 1,0,0
130 CLS:KEY OFF
140 LOCATE 5,16:COLOR 1,1:PRINT "PROWESS, Inc."
150 LINE (115,40)-(177,40),1
160 LINE (115,40)-(115,90),1
170 LINE (177,40)-(177,90),1
180 LINE (118,94)-(142,94),1
190 LINE (150,94)-(174,94),1
200 CIRCLE (119,91),4,1,3.14,4.712:CIRCLE (173,91),4,1,4.71,0
210 CIRCLE (173,91),4,1,4.71,0
220 CIRCLE (141,97),4,1,0,1.57
230 CIRCLE (151,97),4,1,1.57,3.1422:PSET (146,98),1
240 PSET (146,98),1
250 LINE (118,42)-(174,92),1,B
260 PSET (146,94),1:DRAW "H2 F2 E2 G2"
270 PSET (146,93):PSET (146,92)
280 LINE (118,91.4)-(174,91.4)
290 CIRCLE (198,86),52,1,2.1,3.05
300 CIRCLE (94,86),52,1,0.1,1.05
310 CIRCLE (198,86),58,1,2.01,2.6
320 CIRCLE (94,86),58,1,0.5,1.1
330 PSET (146,65),1
340 PSET (146,48),1:DRAW "U3 D3 D3"
350 PSET (146,48),1:DRAW "H3 F3 F3"
360 PSET (146,48),1:DRAW "E3 G3 G3"
370 PSET (148,48),1:DRAW "H3 F3 F3"
380 PSET (144,48),1:DRAW "E3 G3 G3"
390 LOCATE 14,6:PRINT "Shareware for Technical Design"
400 LOCATE 15,14:PRINT "and Management"
410 LINE (5,130)-(315,165),1,B
420 LOCATE 18,17:PRINT "PLOT"
430 LOCATE 20,5:PRINT "(C) 1985,1986, 1987, Prowess, Inc."
440 LOCATE 1,1:PRINT "1003-B-v2.0"
450 LOCATE 23,7:PRINT "Press any key to continue"
460 LOCATE 21,34:F$=INKEY$:IF F$="" THEN 460
470 WIDTH 80
480 'PLIC  -- Prowess, Inc. license agreement 04/28/87
490 CLS:CLEAR:SCREEN 0,0
500 LOCATE 1,28:PRINT "PLOT - LICENSE AGREEMENT"
510 LOCATE 2,20:PRINT "Copyright 1985,1986,1987 Prowess, Inc."
520 LOCATE 4,5:PRINT "This is a user supported software product.  It is not public domain"
530 LOCATE 5,5:PRINT "software, nor is it free software. You are granted a limited license"
540 LOCATE 6,5:PRINT "to use this product on a trial basis.   If you continue to use this"
550 LOCATE 7,5:PRINT "product, after a trial period, you must register by sending:"
560 LOCATE 9,5:PRINT "    $25 (Minimum reg.)         or         $35 (+ $4 s/h) (Full reg.)"
570 LOCATE 10,5:PRINT "   * Technical support                   *  Technical support"
580 LOCATE 11,5:PRINT "   * Informed of updates                 *  Latest diskette supplied"
590 LOCATE 12,5:PRINT "                                         *  Printed manual"
600 LOCATE 14,18:PRINT "Texas residents, please add 7 1/4 % sales tax"
610 LOCATE 15,11:PRINT "Contact us for information concerning low cost site licenses."
620 LOCATE 17,5:PRINT "If you like the shareware concept - try before you buy - support the"
630 LOCATE 18,5:PRINT "companies that provide useful, professional quality products."
640 LOCATE 20,5:PRINT "Prowess,Inc. -  203 Lakeridge Village - Suite 102 - Dallas, TX  75238"
650 LOCATE 21,33:PRINT "(214) 349-4718"
660 LOCATE 23,26:PRINT "Press any key to continue"
670 LOCATE 23,52:F$=INKEY$:IF F$="" THEN 670
680 CHAIN "PLOTM
690 END
```

## PLOTM.BAS

```bas
100 'PLOTM - PLOTTING PROGRAM MENU -- SHAREWARE VERSION - 05/07/87
110 'Copyright 1986, 1987, PROWESS, Inc.
120 KEY OFF:CLS:CLEAR:SCREEN 0,1,0
130 COLOR 3,0:LOCATE 1,25:PRINT CHR$(201)+STRING$(31,205)+CHR$(187)
140 FOR L=2 TO 3:LOCATE L,25:PRINT CHR$(186):LOCATE L,57:PRINT CHR$(186):NEXT L
150 COLOR 6,0:LOCATE 2,33:PRINT "PLOTTING PROGRAMS"
160 LOCATE 3,26:PRINT "(C) 1985,1986,1987, Prowess,Inc"
170 COLOR 3,0:LOCATE 4,25:PRINT CHR$(200)+STRING$(31,205)+CHR$(188)
180 COLOR 1,0:LOCATE 4,2:PRINT CHR$(201)+STRING$(78,205)+CHR$(187)
190 LOCATE 3,75:COLOR 7,0:PRINT "V2.5":COLOR 1,0
200 FOR L=6 TO 19
210 LOCATE L,1:PRINT CHR$(186):LOCATE L,80:PRINT CHR$(186)
220 NEXT L
230 LOCATE 19,2:PRINT CHR$(200)+STRING$(78,205)+CHR$(188):COLOR 6,0
240 '-----------------------------------menu-----------------------------------
250 LOCATE 6,38:PRINT "MENU":LOCATE 7,38:PRINT "----"
260 LOCATE 9,5:PRINT "*   PLOT FUNCTION OF THE FORM y = f(x) (also find area under curve) -1"
270 LOCATE 11,5:PRINT "*   PLOT IN POLAR FORMAT  r = f(";CHR$(233);")  or  y = f(";CHR$(233);"); x = f(";CHR$(233);") FORMS ----2"
280 LOCATE 13,5:PRINT "*   PLOT AND RESOLVE VECTORS ( polar or rect. inputs ) --------------3"
290 LOCATE 15,5:PRINT "*   PLOT TWO SIMULTANEOUS EQUATIONS ---------------------------------4"
310 LOCATE 17,5:PRINT "*   HELP  ( plotting program descriptions ) -------------------------5"
320 LOCATE 19,5:PRINT "*   EXIT ------------------------------------------------------------6"
330 LOCATE 21,3:PRINT "Enter selection number"
340 LOCATE 21,27:ZZ$=INKEY$:IF ZZ$="" THEN 340
350 IF VAL(ZZ$)<1 OR VAL(ZZ$)>6 THEN BEEP:GOTO 340
360 ON VAL(ZZ$) GOTO 370,380,390,400,420,430
370 RUN "IPLOT"
380 RUN "PPLOT"
390 RUN "VPLOT"
400 RUN "SPLOT"
420 RUN "HLP3"
430 CLS:CHAIN "PLIC
440 BEEP:GOTO 100
450 GOTO 100
```

## PPLOT.BAS

```bas
100 'PPLOT - SHAREWARE POLAR PLOTTING PROGRAM  - revision date: 05/07/87
110 'Copyright 1985,1986,1987, Prowess, Inc.
120 'THIS PROGRAM RESOLVES AND PLOTS VECTORS
130 CLS:KEY OFF:CLEAR:SCREEN 0,0
140 DIM R(51),U(51),X(51),Y(51),XC(51),YC(51)
150 COLOR 6,0:XX$=STRING$(78,32)
160 COLOR 3,0:LOCATE 1,25:PRINT CHR$(201)+STRING$(31,205)+CHR$(187)
170 FOR L=2 TO 3:LOCATE L,25:PRINT CHR$(186):LOCATE L,57:PRINT CHR$(186):NEXT L
180 LOCATE 2,35:PRINT "POLAR PLOTTING"
190 LOCATE 3,26:PRINT "(C) 1985,1986,1987 Prowess,Inc."
200 COLOR 3,0:LOCATE 4,25:PRINT CHR$(200)+STRING$(31,205)+CHR$(188)
210 COLOR 1,0:LOCATE 4,2:PRINT CHR$(201)+STRING$(78,205)+CHR$(187)
220 LOCATE 3,75:COLOR 7,0:PRINT "V2.0":COLOR 1,0
230 FOR L=6 TO 19
240 LOCATE L,1:PRINT CHR$(186):LOCATE L,80:PRINT CHR$(186)
250 NEXT L
260 LOCATE 19,2:PRINT CHR$(200)+STRING$(78,205)+CHR$(188):COLOR 6,0
270 IF SKIP=1 THEN 390
280 LOCATE 12,16:PRINT "Do you want to read the instructions?  (Y/N/Q)"
290 LOCATE 12,62:K$=INKEY$:IF K$="" THEN 290
300 IF K$="Y" OR K$="y" THEN LOCATE 12,2:PRINT XX$:LOCATE 3,75:PRINT "    ":GOTO 2780
310 IF K$="N" OR K$="n" THEN LOCATE 12,2:PRINT XX$:LOCATE 3,75:PRINT "    ":GOTO 390
320 IF K$="Q" OR K$="q" THEN 2650
330 GOTO 290
340 '-----------------------clear pgm. field subroutine------------------------
350 FOR LL= 6 TO 19:LOCATE LL,3:PRINT STRING$(76,32):NEXT LL:RETURN
360 '---------------------clear message panel subroutine-----------------------
370 FOR LL=21 TO 23:LOCATE LL,3:PRINT STRING$(76,32):NEXT LL:RETURN
380 '--------------------------enter polar equation(s)-------------------------
390 COLOR 6,0:PI=3.1415926#:BIG=0:AMIN=0:AMAX=360:SKIP=0
400 LOCATE 10,10:PRINT "Polar equations of the form:   r = f(";CHR$(233);")................1"
410 LOCATE 12,10:PRINT "Polar equations of the form:  x = f(";CHR$(233);") and y = f(";CHR$(233);")....2"
420 LOCATE 21,3:PRINT "Enter selection number"
430 LOCATE 21,27:EE$=INKEY$:IF EE$=""  THEN 430
440 IF EE$="Q" OR EE$="q" THEN 2650
450 IF VAL(EE$)<1 OR VAL(EE$)>2 THEN BEEP:GOTO 430
460 IF VAL(EE$)=1 THEN 480
470 IF VAL(EE$)=2 THEN 680
480 GOSUB 350:GOSUB 370
490 COLOR 10,0:ON ERROR GOTO 0:LOCATE 10,1
500 LOCATE 10,17:PRINT "ENTER YOUR POLAR EQUATION IN THE FORM  R = f(A)"
510 LOCATE 12,10:COLOR 7,0:PRINT "EXAMPLE:"
520 LOCATE 12,19:PRINT "R = 10 * SIN(2*A)":COLOR 15,0
530 LOCATE 14,19:PRINT "R = "
540 LOCATE 14,23:LINE INPUT EQ1$
550 IF EQ1$="Q" OR EQ1$="q" THEN 2650
560 IF LEN(EQ1$)=0 THEN BEEP:GOTO 540
570 B$="2410 R = "
580 C$ = B$+EQ1$
590 '------------writes the equation string to a file called fct1.bas-----------
600 OPEN "O",#1,"FCT1.BAS"
610    PRINT #1,C$
620 CLOSE #1
630 '-----------merges fct1.bas with this pgm. and continues execution ---------
640 CHAIN MERGE "FCT1.BAS",650,ALL
650 GOTO 1010
660 GOSUB 350:GOSUB 370
670 '--------------------------enter parametric form--------------------------
680 GOSUB 350:GOSUB 370
690 LOCATE 6,17:COLOR 7,0:PRINT "You will enter two equations: Y = f("CHR$(233);") and X = f(";CHR$(233);")"
700 ON ERROR GOTO 0
710 LOCATE 8,5:COLOR 6,0:PRINT "Enter the 1st equation in the form  Y = f(A) & press 'RETURN'"
720 LOCATE 10,10:COLOR 7,0:PRINT "EXAMPLE:  Y = 5 * SIN(2*A)"
730 LOCATE 12,20:COLOR 15,0:PRINT "Y = "
740 LOCATE 12,24:LINE INPUT EQ2$
750 D$ = "2430 Y = "
760 IF EQ2$="Q" OR EQ2$="q" THEN BEEP:GOTO 2650
770 IF LEN(EQ2$)=0 THEN BEEP:GOTO 740
780 E$ = D$+EQ2$
790 '----------------writes 1st equation to file called fct2.bas --------------
800 OPEN "O",#2,"FCT2.BAS"
810   PRINT #2,E$
820 CLOSE #2:COLOR 10,0
830 IF FLAG=3 THEN FLAG=0:CHAIN MERGE "FCT2.BAS",850,ALL:GOTO 1140
840 '----------------------------enter 2nd function--------------------------
850 LOCATE 14,5:COLOR 6,0:PRINT "Enter the 2nd equation in the form  x = f(A) & press 'RETURN'"
860 LOCATE 16,10:COLOR 7,0:PRINT "EXAMPLE:  X = COS(A/4)"
870 LOCATE 18,20:COLOR 15,0:PRINT "X ="
880 G$ = "2450 X = "
890 LOCATE 18,24:COLOR 15,0:LINE INPUT EQ3$
900 IF EQ3$="Q" OR EQ3$="q" THEN 2650
910 IF LEN(EQ3$)=0 THEN BEEP:GOTO 890
920 F$ = G$+EQ3$
930 '-----------------writes 2nd equation to a file called fct3.bas------------
940 OPEN "O",#3,"FCT3.BAS"
950    PRINT #3,F$
960 CLOSE #3
970 '-----merges fct2.bas & fct3.bas with this pgm and continues execution-----
980 CHAIN MERGE "FCT2.BAS",990,ALL
990 CHAIN MERGE "FCT3.BAS",1000,ALL
1000 IF VAL(EE$)=1 THEN 1050 ELSE 1150
1010 '--------------finds largest value of r for scaling------------------------
1020 GOSUB 350:GOSUB 370:ON ERROR GOTO 2570
1030 LOCATE 12,22:COLOR 28,0:PRINT "FINDING LARGEST VALUES FOR SCALING"
1040 LOCATE 23,80:RMAX=0
1050 FOR A=AMIN*PI/180 TO AMAX*PI/180 STEP 2*PI/180
1060   GOSUB 2410
1070   YP=R*SIN(A)
1080   XP=R*COS(A)
1090 IF R>RMAX THEN RMAX=R
1100   IF ABS(YP)>BIG THEN BIG=ABS(YP)
1110   IF ABS(XP)>BIG THEN BIG=ABS(XP)
1120 NEXT A
1130 GOTO 1280
1140 '----------------finds largest valueof y and x for scaling---------------
1150 GOSUB 350:GOSUB 370::ON ERROR GOTO 2570
1160 LOCATE 12,22:COLOR 28,0:PRINT "FINDING LARGEST VALUES FOR SCALING"
1170 LOCATE 24,1:RMAX=0
1180 FOR A=AMIN*PI/180 TO AMAX*PI/180 STEP 2*PI/180
1190  GOSUB 2430
1200  IF ABS(Y)>BIG THEN BIG=ABS(Y)
1210  GOSUB 2450
1220  IF ABS(X)>BIG THEN BIG=ABS(X)
1230 R=SQR(X^2+Y^2)
1240 IF R>RMAX THEN RMAX=R
1250 NEXT A
1260 GOTO 1280
1270 '---------------------------set-up plot field----------------------------
1280 CLS:SCREEN 2,0,0
1290 FOR ANG=0 TO 6.2831853# STEP 0.785398163#
1300 J=ANG
1310 PSET (311.2,100),1
1320 LINE -(311.2+(360*COS(J)),100+(133.3*SIN(J))),0
1330 NEXT ANG
1340 LINE (106.7,100)-(511.2,100),1,,&HAAAA    '-draws horizontal axis--------
1350 LINE (311.2,22.2)-(311.2,183.3),1,,&HAAAA '-draws vertical axis---------
1360 LOCATE 13,64
1370 PRINT "0 (2*PI)"
1380 LOCATE 3,35
1390 PRINT "90 (PI/2)"
1400 LOCATE 13,8
1410 PRINT "180 (PI)"
1420 LOCATE 23,35
1430 PRINT "270 (3*PI/2)"
1440 IF VAL(EE$) = 2 THEN 1700
1450 '------------------plot routine for the r=f(ang) case------------------
1460 A=AMIN*PI/180
1470 GOSUB 2410
1480 YP=R*SIN(A)*70/BIG
1490 XP=R*COS(A)*168/BIG
1500 LOCATE 23,1:PRINT "PLOTTING"
1510 PSET (311.2+XP,100-YP)          '----sets 1st point for r=f(a)---------
1520 FOR A=AMIN*PI/180 TO AMAX*PI/180 STEP 2*PI/180
1530    GOSUB 2410
1540    YP=R*SIN(A)*70/BIG
1550    XP=R*COS(A)*168/BIG
1560    LINE -(311.2 + XP,100-YP)     '----------draws graph of r=f(a)--------
1570 NEXT A
1580 OPEN "I",#1,"FCT1.BAS"
1590   INPUT #1,J$
1600   LOCATE 1,1
1610   PRINT "GRAPH OF: ";MID$(J$,5)
1620 CLOSE #1
1630 LOCATE 4,60:PRINT "R(MAX) = ";RMAX
1640 LOCATE 23,1:PRINT "                    "
1650 LOCATE 20,70:PRINT "PRESS ANY"
1660 LOCATE 21,70:PRINT "  KEY":FOR I=1 TO 2000:NEXT I
1670 LOCATE 20,70:PRINT "          ":LOCATE 21,70:PRINT "         "
1680 LOCATE 23,74:A$=INKEY$:IF A$="" THEN 1680
1690 GOTO 1970
1700 '---------------plot routine for the y=f(ang),x=f(ang) case-------------
1710 A=AMIN*PI/180
1720 GOSUB 2430
1730 GOSUB 2450
1740 LOCATE 23,1:PRINT "PLOTTING"
1750 PSET (311.2+((X*168)/BIG),100-(Y*70/BIG))  '---sets 1st point (x & y)---
1760 FOR A=AMIN*PI/180 TO AMAX*PI/180 STEP 2*PI/180
1770     GOSUB 2430
1780     GOSUB 2450
1790     LINE -(311.2+(X*168/BIG),100-(Y*70/BIG))  'plots x-y =f(a) graph----
1800 NEXT A
1810 OPEN "I",#2,"FCT2.BAS"
1820 OPEN "I",#3,"FCT3.BAS"
1830   INPUT #2,K$
1840   INPUT #3,L$
1850   LOCATE 1,1
1860   PRINT "GRAPH OF: ";MID$(K$,5)
1870   LOCATE 2,11
1880   PRINT MID$(L$,5)
1890 CLOSE #3
1900 CLOSE #2
1910 LOCATE 4,60:PRINT "R(MAX) = ";RMAX
1920 LOCATE 23,1:PRINT "              "
1930 LOCATE 20,70:PRINT "PRESS ANY"
1940 LOCATE 21,70:PRINT "   KEY":FOR I=1 TO 2000:NEXT I
1950 LOCATE 20,70:PRINT "         ":LOCATE 21,70:PRINT "          "
1960 LOCATE 23,74:A$=INKEY$:IF A$="" THEN 1960
1970 CLS                   '-------------header for tabular list--------------
1980 SCREEN 0,0:COLOR 6,0:SKIP=1
1990 LOCATE 10,23:PRINT "DISPLAY TABULAR VALUES ..........1"
2000 LOCATE 12,23:PRINT "START OVER ......................2"
2010 LOCATE 14,23:PRINT "EXIT MENU .......................3"
2020 LOCATE 21,29:PRINT "Enter selection number"
2030 LOCATE 21,53:AA$=INKEY$:IF AA$="" THEN 2030
2040 IF VAL(AA$)<1 OR VAL(AA$)>3 THEN BEEP:GOTO 2030
2050 ON VAL(AA$) GOTO 2070,2060,2650
2060 CLS:GOTO 150
2070 CLS                 '--routine for displaying calculated values-------
2080 T=-2:ON ERROR GOTO 0
2090 Z=18:CNT=0:SCREEN 0,1,0
2100 COLOR 6,0:PRINT
2110   'PAGE HEADER
2120   LOCATE 2,1
2130   PRINT "  POINT        ANGLE      ANGLE      R         X         Y"
2140   PRINT "    #          (DEG)      (RAD)"
2150   PRINT :PRINT:COLOR 7,0
2160    FOR Q=1 TO 18
2170      T=T+2
2180      CNT=CNT+1
2190      A=T*PI/180
2200      IF VAL(EE$)=1 THEN GOSUB 2470 ELSE GOSUB 2520
2210      LOCATE Q+4,1:PRINT "   ";CNT," ";T
2220      LOCATE Q+4,23:PRINT USING "#####.####";A,R,X,Y
2230      IF T>=360 THEN FLAG=1:GOTO 2280
2240    NEXT Q
2250 COLOR 6,0:LOCATE 19,65:PRINT "PRESS ANY KEY TO"
2260 LOCATE 20,65:PRINT "CONTINUE OR 'Q'"
2270 LOCATE 21,65:PRINT "FOR NEXT MENU"
2280 LOCATE 22,69:A$=INKEY$:IF A$="" THEN 2280
2290 IF FLAG =1 THEN FLAG=0:CLS:GOTO 2320
2300 IF A$="Q" OR A$="q" THEN 2320
2310 CLS:Z=Z+18:GOTO 2100
2320 CLS:COLOR 6,0:SKIP=1
2330 LOCATE 10,23:PRINT "ENTER A NEW POLAR FUNCTION ......1"
2340 LOCATE 12,23:PRINT "EXIT MENU .......................2"
2350 LOCATE 21,29:PRINT "Enter selection number"
2360 LOCATE 21,53:GG$=INKEY$:IF GG$="" THEN 2360
2370 IF VAL(GG$)<1 OR VAL(GG$)>2 THEN 2360
2380 ON VAL(GG$) GOTO 2390,2650
2390 GOSUB 350:GOSUB 370:GOTO 150
2400 '-------------------------------user functions--------------------------
2410 R = SIN(3*A)
2420 RETURN
2430 Y = 5*SIN(2*A)
2440 RETURN
2450 X = 3*COS(3*A)
2460 RETURN
2470 '-----------------subroutine for calculating r=f(a) values--------------
2480 GOSUB 2410
2490 X=R*COS(A)
2500 Y=R*SIN(A)
2510 RETURN
2520 '-------------subroutine for calculating x=f(a) & y=f(a) values---------
2530 GOSUB 2430
2540 GOSUB 2450
2550 R=SQR(X^2+Y^2)
2560 RETURN
2570 '-------------------------------error traps-------------------------------
2580 IF ERR=2 AND ERL=2410 THEN GOSUB 350:COLOR 15,4:LOCATE 21,3:PRINT "YOUR EQUATION R = ";EQ1$:LOCATE 21,21+LEN(EQ1$):PRINT " HAS A SYNTAX ERROR - PLEASE FIX.":RESUME 490
2590 IF ERR=2 AND ERL=2430 THEN GOSUB 350:COLOR 15,4:LOCATE 21,3:PRINT "YOUR EQUATION Y = ";EQ2$:LOCATE 21,21+LEN(EQ2$):PRINT " HAS A SYNTAX ERROR - PLEASE FIX.":FLAG=3:COLOR 7,0:RESUME 690
2600 IF ERR=2 AND ERL=2450 THEN GOSUB 350:COLOR 15,4:LOCATE 21,3:PRINT "YOUR EQUATION X = ";EQ3$:LOCATE 21,21+LEN(EQ3$):PRINT " HAS A SYNTAX ERROR - PLEASE FIX.":COLOR 7,0:RESUME 830
2610 IF (ERR=11 OR ERR=6) AND (ERL=1060 OR ERL=1190 OR ERL=1210) THEN GOSUB 350:COLOR 15,4:LOCATE 21,3:PRINT "DIVISION BY ZERO OCCURED-CHECK YOUR EQUATION AND START OVER":COLOR 7,0:RESUME  100
2620 LOCATE 21,3:COLOR 15,4:PRINT "---------------FATAL ERROR START OVER------------":FOR I=1 TO 2000:NEXT I:CLS:COLOR 6,0:GOTO 100
2630 RESUME 100
2640 '-----------------------------------quit---------------------------------
2650 GOSUB 370:GOSUB 350:COLOR 6,0
2660 LOCATE 8,25:PRINT "RESTART THIS PROGRAM --------------1"
2670 LOCATE 10,25:PRINT "RETURN TO PLOT MENU ---------------2"
2680 LOCATE 12,25:PRINT "EXIT ------------------------------3"
2690 LOCATE 21,29:PRINT "Enter selection number"
2700 LOCATE 21,53:Q$=INKEY$:IF Q$="" THEN 2700
2710 QT=VAL(Q$)
2720 IF QT<1 OR QT>3 THEN BEEP:GOTO 2700
2730 IF QT=1 THEN 100
2740 IF QT=2 THEN CLS:CHAIN "PLOTM
2750 IF QT=3 THEN CLS:CHAIN "PLIC
2760 BEEP:GOTO 2700
2770 '-----------------------------------help----------------------------------
2780 GOSUB 370:GOSUB 350
2790 LOCATE 6,3:PRINT "* This program plots polar functions. It will handle both standard forms"
2800 LOCATE 7,5:PRINT "(R = f(angle)) and parametric forms (Y = f(angle) and X = f(angle)."
2810 LOCATE 9,3:PRINT "* The value(s) of your function will be calculated from 0 to 360 degrees,"
2820 LOCATE 10,5:PRINT "in 2 degree increments, and plotted."
2830 LOCATE 12,3:PRINT "* Standard format (R = f(angle)) - The length of a radius (R), from 0,0,"
2840 LOCATE 13,5:PRINT "is expressed in terms of the angle (A). Example: R = A  generates a"
2850 LOCATE 14,5:PRINT "spiral;   R = SIN(3*A)  generates a three-leaf rose."
2860 LOCATE 16,3:PRINT "* Parametric format (Y = f(angle) & X = f(angle)) - The values of Y and X"
2870 LOCATE 17,5:PRINT "are independently expressed in terms of the angle. Example: Y = 5*SIN(2*A)"
2880 LOCATE 18,5:PRINT "and X = 3*COS(3*A) - generates a lissajous pattern."
2890 LOCATE 21,3:PRINT "Press any key to continue"
2900 LOCATE 21,30:K$=INKEY$:IF K$="" THEN 2900
2910 IF K$="Q" OR K$="q" THEN CLS:GOTO 2650
2920 GOSUB 370:GOSUB 350
2930 LOCATE 6,3:PRINT "* This program features full autoscaling, e.g. no matter how large a value"
2940 LOCATE 7,5:PRINT "is calculated (within the computer's capability), it will 'fit' within"
2950 LOCATE 8,5:PRINT "the plot field. This can create a problem if both very large and very"
2960 LOCATE 9,5:PRINT "small values are generated. Because the plot field is scalled to handle"
2970 LOCATE 10,5:PRINT "the largest value, plotting details of the smaller values may be lost"
2980 LOCATE 11,5:PRINT "because of the finite resolution of the screen."
2990 LOCATE 13,3:PRINT "* After plotting your function, you may review all of the plotting points"
3000 LOCATE 14,5:PRINT "in tabular format. Regardless of the polar format that you used, the"
3010 LOCATE 15,5:PRINT "tabular display shows the value of R, X and Y for each two-degree"
3020 LOCATE 16,5:PRINT "increment."
3030 LOCATE 18,3:PRINT "* The IBM-PC does not allow error trapping of 'division by zero'. If your"
3040 LOCATE 19,5:PRINT "function accidently tries to divide by zero, you will have to start over!"
3050 LOCATE 21,3:PRINT "Press any key to start
3060 LOCATE 21,30:K$=INKEY$:IF K$="" THEN 3060
3070 GOSUB 350:GOSUB 370:GOTO 390
```

## SPLOT.BAS

```bas
100 'SPLOT - SHAREWARE SIM. EQ. PLOTTING PROGRAM  - revision date: 05/08/87
110 'Copyright 1985,1986,1987, Prowess, Inc.
120 'This progem plots simultaneous equations
130 CLS:KEY OFF:CLEAR:SCREEN 0,0,0:COLOR 6,0:XX$=STRING$(78,32)
140 DIM R(51),U(51),X(51),Y(51),XC(51),YC(51)
150 COLOR 3,0:LOCATE 1,25:PRINT CHR$(201)+STRING$(31,205)+CHR$(187)
160 FOR L=2 TO 3:LOCATE L,25:PRINT CHR$(186):LOCATE L,57:PRINT CHR$(186):NEXT L
170 LOCATE 2,28:PRINT "PLOT SIMULTANEOUS EQUATIONS"
180 LOCATE 3,26:PRINT "(C) 1985,1986,1987 Prowess,Inc."
190 COLOR 3,0:LOCATE 4,25:PRINT CHR$(200)+STRING$(31,205)+CHR$(188)
200 COLOR 1,0:LOCATE 4,2:PRINT CHR$(201)+STRING$(78,205)+CHR$(187)
210 LOCATE 3,75:COLOR 7,0:PRINT "V2.0":COLOR 1,0
220 FOR L=6 TO 19
230 LOCATE L,1:PRINT CHR$(186):LOCATE L,80:PRINT CHR$(186)
240 NEXT L
250 LOCATE 19,2:PRINT CHR$(200)+STRING$(78,205)+CHR$(188):COLOR 6,0
260 IF SKIP=1 THEN 670
270 IF SKIP=2 THEN 410
280 LOCATE 12,16:PRINT "Do you want to read the instructions?  (Y/N/Q)"
290 LOCATE 12,62:K$=INKEY$:IF K$="" THEN 290
300 IF K$="Y" OR K$="y" THEN LOCATE 12,2:PRINT XX$:LOCATE 3,75:PRINT "    ":GOTO 2420
310 IF K$="N" OR K$="n" THEN LOCATE 12,2:PRINT XX$:LOCATE 3,75:PRINT "    ":GOTO 380
320 IF K$="Q" OR K$="q" THEN 2290
330 GOTO 290
340 '--------------------------clear field subroutines------------------------
350 FOR LL=6 TO 19:LOCATE LL,3:PRINT STRING$(76,32):NEXT LL
360 FOR LL=21 TO 23:LOCATE LL,3:PRINT STRING$(76,32):NEXT LL:RETURN
370 '-------------------------------------------------------------------------
380 LOCATE 12,3:PRINT STRING$(75,32)
390 IF FLAG=>1 THEN LOCATE 21,3:PRINT "Your previous equations were:":LOCATE 22,3:PRINT "Y = ";EQ1$;" and  A = ";EQ2$
392 IF FLAG=1 OR FLAG=3 THEN 410
394 IF FLAG=2 OR FLAG=4 THEN 500
400 '------------------------inputs two user defined equations-----------------
410 LOCATE 6,3:PRINT "Enter the first equation in the form:  y = f(x)"
420 LOCATE 8,10:COLOR 7,0:PRINT "Example:  Y = X^3 -(2*X^2) + X - 10"
430 W$ = "2170  Y = ":LOCATE 10,19:COLOR 15,0:PRINT "Y = ":LOCATE 10,24
440 LINE INPUT EQ1$:IF LEN(EQ1$)=0 THEN BEEP:GOTO 440  'inputs user string-----
450 S$ = W$+EQ1$              'adds correct line # to 1st equation string------
460 OPEN "O",#1,"FCT1.BAS"    'writes 1st equation to the file fct1.bas--------
470   PRINT #1,S$
480 CLOSE #1
490 IF FLAG=1 OR FLAG=3 THEN 620
500 LOCATE 14,1:COLOR 6,0
510 LOCATE 14,3:PRINT "Enter the second equation in the form  A = f(B)"
520 COLOR 7,0
530 LOCATE 16,10:PRINT "EXAMPLE: A = 2*EXP(-SIN(B))"
540 LOCATE 18,19:COLOR 15,0:PRINT "A = ":LOCATE 18,24
550 Q$ = "2190 A = "
560 COLOR 15,0:LINE INPUT EQ2$:IF LEN(EQ2$)=0 THEN BEEP:GOTO 560  'inputs 2nd user string-
570 SS$ = Q$+EQ2$             'adds correct line# to 2nd equation string--------
580 OPEN "O",#2,"FCT2.BAS"    'writes 2nd equation to the file fct2.bas--------
590   PRINT #2,SS$
600 CLOSE #2
610 ' -------------merges fct1.bas and fct2.bas with this pgm ------------------
620 CHAIN MERGE "FCT1.BAS",630,ALL
630 IF FLAG=1 THEN FLAG =0:GOTO 770
640 CHAIN MERGE "FCT2.BAS",660,ALL
650 '---------------------user defines plotting range of x-axis-----------------
660 IF FLAG=1 OR FLAG=2 THEN 770
670 GOSUB 350
680 LOCATE 8,20:COLOR 14,0:PRINT "NOTE: XMIN must be smaller than XMAX !!!"
690 LOCATE 13,3:COLOR 7,0:PRINT "The X-axis will be scaled + and - whichever (Xmen or Xmax) has the largest"
700 LOCATE 14,3:PRINT "absolute value."
710 LOCATE 16,3:PRINT "Example: If you wish to plot the functions from X = -15 to X = +5, you"
720 LOCATE 17,3:PRINT "would enter -15,5. The axis would run from -15 to +15 and the function"
730 LOCATE 18,3:PRINT "would be plotted from X = -15 to X = 5, as you requested."
740 LOCATE 21,3:COLOR 6,0:INPUT "Enter RANGE of X over which to plot. (Xmin,Xmax) ",XMIN,XMAX
750 IF XMIN>XMAX THEN BEEP:LOCATE 21,52:PRINT "                  ":GOTO 740
760 '--------evaluates both functions and finds largest value of y and a -------
770 FLAG=0
780 GOSUB 350:ON ERROR GOTO 2210:COLOR 28,0:LOCATE 12,17
790 PRINT "FINDING LARGEST VALUES OF Y AND A FOR SCALING"
800 LOCATE 23,1
810 PRINT
820 INC = (XMAX-XMIN)/199         'sets up plotting increment of x -------------
830 X = XMIN:YBIG=0
840 B = XMIN
850 ON ERROR GOTO 2210
860 FOR X=XMIN TO XMAX STEP INC             'finds biggest value of y-----------
870    GOSUB 2170
880    IF ABS(Y)>YBIG THEN YBIG = ABS(Y)
890 NEXT X
900 FOR B=XMIN TO XMAX STEP INC:ON ERROR GOTO 2210 'finds biggest value of a ---
910   GOSUB 2190
920   IF ABS(A)>YBIG THEN YBIG = ABS(A)     'sets YBIG equal to largest y or a--
930 NEXT B
940 IF ABS(XMIN)>ABS(XMAX) THEN XBIG=ABS(XMIN) ELSE XBIG=ABS(XMAX)
950   '---------------draws and labels plot field----------------------
960 BEEP:SCREEN 2,,0,0
970 CLS
980 LINE (137,9.3)-(493,157),7,B      'draws graph field ---------
990 FOR I=7.38 TO 73.8 STEP 7.38
1000 LINE (315+(I/0.417),9.3)-(315+(I/0.417),157),7,,&HAAAA
1010 LINE (315-(I/0.417),9.3)-(315-(I/0.417),157),7,,&HAAAA
1020 LINE (137,83.2+I)-(493,83.2+I),7,,&HAAAA
1030 LINE (137,83.2-I)-(493,83.2-I),7,,&HAAAA
1040 NEXT I
1050 LINE (315,9.3)-(315,157),7         'draws vertical axis -----------------
1060 LINE (137,83.2)-(493,83.2),7       'draws horizontal axis ---------------
1070 ' -------------------prints axis labels, etc. ---------------------------
1080 LOCATE 1,40
1090 PRINT "Y"
1100 LOCATE 11,64
1110 PRINT "X"
1120 LOCATE 2,64
1130 IF YBIG<=0 THEN 1150
1140 PRINT USING "+#######.###";YBIG:GOTO 1160
1150 PRINT USING "+#.####";YBIG:
1160 LOCATE 20,65
1170 IF YBIG#<=0 THEN 1190
1180 PRINT USING "#######.###";-YBIG:GOTO 1200
1190 PRINT USING "#.####";-YBIG
1200 LOCATE 20,65:PRINT " "
1210 LOCATE 21,11
1220 IF XBIG<=0 THEN 1240
1230 PRINT USING "#######.###";-XBIG:GOTO 1250
1240 PRINT USING "#.####";-XBIG
1250 LOCATE 21,11:PRINT " "
1260 LOCATE 21,56
1270 IF XBIG<=0 THEN 1290
1280 PRINT USING "+#######.###";XBIG:GOTO 1300
1290 PRINT USING "+#.####";XBIG
1300 LOCATE 21,40
1310 PRINT "0"
1320 LOCATE 11,15
1330 PRINT "0"
1340 '-------------plot routine for both equations------------------
1350 X=XMIN:B=XMIN:U$=STRING$(80,32) 'initializes x and b to same smallest value-
1360 LOCATE 1,1:PRINT "PLOTTING":GOSUB 2170
1370 PSET ((315+(XMIN*177/XBIG)),(83.2-(Y*73.8/YBIG)))    'sets 1st plot pt.---
1380 FOR X=X+INC TO XMAX STEP INC                      'plots 1st equation-----
1390    GOSUB 2170
1400    LINE -((315+(X*177/XBIG)),(83.2-(Y*73.8/YBIG))),7
1410 NEXT X
1420 GOSUB 2190
1430 PSET ((315+(B*177/XBIG)),(83.2-(A*73.8/YBIG)))   'sets 1st pt of 2nd eq.--
1440 FOR B=B+INC TO XMAX STEP INC                       'plots 2nd equation -----
1450 GOSUB 2190
1460   LINE -((315+(B*177/XBIG)),(83.2-(A*73.8/YBIG))),7,,&HAAAA
1470 NEXT B
1480 LOCATE 1,1:PRINT "          ":LOCATE 22,1:PRINT U$:LOCATE 23,1
1490 LOCATE 23,1:PRINT "GRAPH OF:"
1500 OPEN "I",#1,"FCT1.BAS"
1510  INPUT #1,T$
1520 CLOSE #1
1530 OPEN "I",#2,"FCT2.BAS"
1540  INPUT #2,Q$
1550 CLOSE #2
1560 LOCATE 23,11
1570 PRINT MID$(T$,5);"  AND  ";MID$(Q$,5):LOCATE 3,1:PRINT "PRESS ANY KEY":LOCATE 4,1:PRINT "TO CONTINUE":FOR I=1 TO 2000:NEXT I
1580 LOCATE 3,1:PRINT "             ":LOCATE 4,1:PRINT "            "
1590 LOCATE 23,78:A$=INKEY$:IF A$="" THEN 1590
1600 SCREEN 0,1,0:CLS:COLOR 6,0
1610 LOCATE 10,1
1620 PRINT "            DISPLAY TABULATED VALUES OF X, Y AND A...............1"
1630 PRINT
1640 PRINT "            ENTER NEW RANGE OF X ................................2"
1650 PRINT
1660 PRINT "            INPUT TWO NEW FUNCTIONS .............................3"
1670 PRINT
1680 PRINT "            EXIT ................................................4"
1690 PRINT
1700 PRINT "                           MAKE SELECTION     "
1710 LOCATE 18,46:SS$=INKEY$:IF SS$="" OR VAL(SS$)<1 OR VAL(SS$)>4 THEN 1710
1720 ON VAL(SS$) GOTO 1750,1730,1740,2290
1730 SKIP=1:GOSUB 350:GOTO 150
1740 SKIP=2:GOSUB 350:GOTO 150
1750 '---------------routine for listing calculated values --------------------
1760 CLS:X=XMIN-INC:COLOR 10,0
1770   PRINT " POINT          FOR                EQ.#1               EQ.#2"
1780   PRINT "   #           X & B                 Y                   A"
1790 LOCATE 18,68:COLOR 12,0:PRINT "PRESS ANY KEY"
1800 LOCATE 19,68:PRINT " TO CONTINUE"
1810 LOCATE 20,71:PRINT "OR 'Q'"
1820 LOCATE 21,68:PRINT "FOR NEXT MENU"
1830 COLOR 7,0:J=4:K=2:L=1
1840 FOR I=3 TO 22
1850 X=X+INC:B=X
1860 GOSUB 2170:GOSUB 2190
1870 LOCATE I,3:PRINT L
1880 'LIMIT DISPLAY DIGITS FOR SINGLE PRECISION
1890 LOCATE I,11:PRINT USING "#######.####";X
1900 LOCATE I,31:PRINT USING "#######.####";Y
1910 LOCATE I,51:PRINT USING "#######.####";A
1920 L=L+1
1930 IF L=201 THEN 1990
1940 NEXT I
1950 FLAG=0
1960 LOCATE 23,74:A$=INKEY$:IF A$="" THEN 1960
1970 IF A$="Q" OR A$="q" THEN CLS:GOTO 2010
1980 IF L<200 GOTO 1840
1990 LOCATE 23,74:A$=INKEY$:IF A$="" THEN 1990
2000 CLS
2010 LOCATE 10,1:COLOR 6,0
2020 LOCATE 10,16:PRINT "REVIEW TABULAR VALUES .........................1"
2030 LOCATE 12,16:PRINT "CHANGE RANGE OF X FOR PRESENT FUNCTIONS .......2"
2040 LOCATE 14,16:PRINT "INPUT TWO NEW FUNCTIONS .......................3"
2050 LOCATE 16,16:PRINT "EXIT ..........................................4"
2060 LOCATE 21,29:PRINT "Enter selection number"
2070 LOCATE 21,52:GG$=INKEY$:IF GG$="" OR VAL(GG$)<1 OR VAL(GG$)>4 THEN 2070
2080 Q=Q+12
2090 CLS
2100 ON VAL(GG$) GOTO 2130,2110,2120,2290
2110 SKIP=1:GOSUB 350:GOTO 150
2120 SKIP=2:GOSUB 350:GOTO 150
2130 CLS
2140 IF I=200 THEN CLS:GOTO 2010
2150 CLS:GOTO 1760
2160 '-----------------------------user functions----------------------------
2170  Y = X^2-5
2180 RETURN
2190 A = -B-3
2200 RETURN
2210 '---------------------------error trap routine----------------------------
2220 IF ERR=2 AND ERL=2170 THEN BEEP:GOSUB 350:LOCATE 19,23:COLOR 12,4:PRINT "SYNTAX ERROR IN EQUATION #1 - REDO":FOR PP=1 TO 1000:NEXT PP:FLAG=1:COLOR 6,0:RESUME 390
2230 IF ERR=2 AND ERL=2190 THEN BEEP:GOSUB 350:LOCATE 19,23:COLOR 12,4:PRINT "SYSTAX ERROR IN EQUATION #2 - REDO":FOR PP=1 TO 1000:NEXT PP:FLAG=2:COLOR 6,0:RESUME 390
2240 IF ERR=5 AND ERL=2170 THEN BEEP:GOSUB 350:LOCATE 19,3:COLOR 12,4:PRINT "IMAGINARY NUMBERS CREATED! - ALTER EQUATION AND/OR LIMITS":FOR I=1 TO 1000:NEXT I:COLOR 6,0:FLAG=3:RESUME 390
2250 IF ERR=5 AND ERL=2190 THEN BEEP:GOSUB 350:LOCATE 19,3:COLOR 12,4:PRINT "IMAGINARY NUMBERS CREATED! - ALTER EQUATION AND/OR LIMITS":FOR I=1 TO 1000:NEXT I:COLOR 6,0:FLAG=4:RESUME 390
2260 IF ERR=11 AND ERL=2170 OR ERL=2190 THEN GOSUB 350:COLOR 12,4:FLAG=3:LOCATE 21,3:PRINT "DIVISION BY ZERO OCCURED - CHECK YOUR EQUATION AND REDO!":FOR I=1 TO 1000:NEXT I:RESUME 390
2265 IF ERR=6 THEN BEEP:LOCATE 21,3:COLOR 12,4:FLAG=4:PRINT "AN OVERFLOW HAS OCCURED - ALTER EQUATION AND/OR LIMITS":FOR I=1 TO 1000:NEXT I:CLS:RESUME 390
2270 ON ERROR GOTO 0:CLS:GOTO 100
2280 '-----------------------------------quit---------------------------------
2290 SCREEN 0,1:CLS:COLOR 6,0
2300 LOCATE 8,25:PRINT "RESTART THIS PROGRAM --------------1"
2310 LOCATE 10,25:PRINT "RETURN TO PLOT MENU ---------------2"
2320 LOCATE 12,25:PRINT "QUIT ------------------------------3"
2330 LOCATE 17,30:PRINT "MAKE SELECTION"
2340 LOCATE 17,50:Q$=INKEY$:IF Q$="" THEN 2340
2350 QT=VAL(Q$)
2360 IF QT<1 OR QT>3 THEN BEEP:GOTO 2340
2370 IF QT=1 THEN SKIP=2:GOSUB 350:GOTO 150
2380 IF QT=2 THEN RUN "PLOTM"
2390 IF QT=3 THEN CLS:CHAIN "PLIC
2400 BEEP:GOTO 2340
2410 '----------------------------------help----------------------------------
2420 GOSUB 350
2430 LOCATE 6,3:PRINT "* This program plots two simultaneous equations - one in the form Y=f(X)"
2440 LOCATE 7,5:PRINT "and the other in the form of A=f(B)."
2450 LOCATE 9,3:PRINT "* After plotting is completed, a tabulation of all plotted points may be"
2460 LOCATE 10,5:PRINT "reviewed."
2470 LOCATE 12,3:PRINT "* Since 'Y' axis is scaled to accomodate the largest value from either"
2480 LOCATE 13,5:PRINT "equation, if one equation produces large values of 'Y' (Y or A) and the"
2490 LOCATE 14,5:PRINT "other produces small values of 'Y' (Y or A), the curve with the smaller"
2500 LOCATE 15,5:PRINT "values may not show much detail. Curves display best when both produce"
2510 LOCATE 16,5:PRINT "a similiar range of values. Often, restricting the range of X, to just"
2520 LOCATE 17,5:PRINT "cover a particular point of interest, will keep values of both curves"
2530 LOCATE 18,5:PRINT "in a good display range."
2540 LOCATE 21,3:PRINT "Press any key to continue"
2550 LOCATE 21,30:K$=INKEY$:IF K$="" THEN 2550
2560 IF K$="Q" OR K$="q" THEN 2290
2570 GOSUB 350
2580 LOCATE 6,3:PRINT "* Error traps detect syntax errors and provide a chance to recover without"
2590 LOCATE 7,5:PRINT "having to restart the program."
2600 LOCATE 9,3:PRINT "* Error traps exist, in this program, to detect both 'division by zero'"
2610 LOCATE 10,5:PRINT "and 'floating point overflow' conditions, however IBM BASICA does not"
2620 LOCATE 11,5:PRINT "allow trapping these errors and the statements will not function. Some"
2630 LOCATE 12,5:PRINT "BASICA 'clones' do not have these restrictions, in which case, the error"
2640 LOCATE 13,5:PRINT "traps will work. If you get a system generated 'division by zero' or"
2650 LOCATE 14,5:PRINT "'overflow' error, you will have to restart the program."
2660 LOCATE 16,3:PRINT "* See the HELP file accessable from the PLOT MENU for a more thorough"
2670 LOCATE 17,5:PRINT "discussion of this program.
2680 LOCATE 19,3:PRINT "* For practice, try: Y = X^2-5 AND A = -B -3, FROM X = -4 TO +4 (i.e. -4,4)"
2690 LOCATE 21,3:PRINT "Press any key to begin"
2700 LOCATE 21,28:K$=INKEY$:IF K$="" THEN 2700
2710 IF K$="Q" OR K$="q" THEN 2290
2720 GOSUB 350:GOTO 410
```

## VPLOT.BAS

```bas
100 'VPLOT - SHAREWARE VECTOR PROGRAM - COPYRIGHT 1985,1986,1987, Prowess, Inc.
110 'THIS PROGRAM RESOLVES AND PLOTS VECTORS
120 CLS:KEY OFF:CLEAR:SCREEN 0,0,0:COLOR 6,0:XX$=STRING$(78,32)
130 DIM R(51),U(51),X(51),Y(51),XC(51),YC(51)
140 COLOR 3,0:LOCATE 1,25:PRINT CHR$(201)+STRING$(31,205)+CHR$(187)
150 FOR L=2 TO 3:LOCATE L,25:PRINT CHR$(186):LOCATE L,57:PRINT CHR$(186):NEXT L
160 LOCATE 2,35:PRINT "VECTOR PROGRAM"
170 LOCATE 3,26:PRINT "(C) 1985,1986,1987 Prowess,Inc."
180 COLOR 3,0:LOCATE 4,25:PRINT CHR$(200)+STRING$(31,205)+CHR$(188)
190 COLOR 1,0:LOCATE 4,2:PRINT CHR$(201)+STRING$(78,205)+CHR$(187)
200 LOCATE 3,75:COLOR 7,0:PRINT "V1.0":COLOR 1,0
210 FOR L=6 TO 19
220 LOCATE L,1:PRINT CHR$(186):LOCATE L,80:PRINT CHR$(186)
230 NEXT L
240 LOCATE 19,2:PRINT CHR$(200)+STRING$(78,205)+CHR$(188):COLOR 6,0
250 LOCATE 12,16:PRINT "Do you want to read the instructions?  (Y/N/Q)"
260 LOCATE 12,62:K$=INKEY$:IF K$="" THEN 260
270 IF K$="Y" OR K$="y" THEN LOCATE 12,2:PRINT XX$:LOCATE 3,75:PRINT "    ":GOTO 1830
280 IF K$="N" OR K$="n" THEN LOCATE 12,2:PRINT XX$:LOCATE 3,75:PRINT "    ":GOTO 350
290 IF K$="Q" OR K$="q" THEN 2150
300 GOTO 260
310 '-------------------------------------------------------------------------
320 FOR T=6 TO 19:LOCATE T,2:PRINT XX$:NEXT T:RETURN
330 FOR T=21 TO 23:LOCATE T,1:PRINT XX$:NEXT T:RETURN
340 FOR T=6 TO 19:LOCATE T,2:PRINT XX$:NEXT T:FOR T=21 TO 23:LOCATE T,1:PRINT XX$:NEXT T:RETURN
350 LOCATE 10,14:PRINT "HOW MANY VECTORS DO YOU WANT TO SUM ?  ( MAX OF 10 )"
360 LOCATE 10,70:INPUT "",CT$:CT=VAL(CT$)
370 IF CT$="Q" OR CT$="q" THEN 2150
380 IF CT<1 OR CT>10 THEN BEEP:GOSUB 320:GOTO 350  'chk illegal entry --------
390 LOCATE 14,9:PRINT "WILL YOU ENTER VECTORS IN POLAR OR RECTANGULAR FORMAT  (P/R)?"
400 LOCATE 14,72:S$=INKEY$:IF S$="" THEN 390
410 IF S$="Q" OR S$="q" THEN 2150
420 IF S$<>"R" AND S$<>"P" AND S$<>"r" AND S$<>"p" THEN LOCATE 14,2:PRINT XX$:GOTO 400
430 IF S$ = "P" OR S$="p" THEN LOCATE 14,2:PRINT XX$:GOTO 540
440 LOCATE 14,2:PRINT XX$:LOCATE 10,2:PRINT XX$
450 LOCATE 6,18:PRINT "ENTER X AND Y COORDINATES IN THE FORM   X,Y":INC=2
460 FOR N=1 TO CT               'enters rect. coordinates----------------------
470    LOCATE 6+INC,30:PRINT "#";N:LOCATE 6+INC,35:INPUT "",X$,Y$:X(N)=VAL(X$):Y(N)=VAL(Y$)
480 IF X$="Q" OR X$="q" THEN 2150
490 IF Y$="Q" OR Y$="q" THEN 2150
500     IF X(N)=0 AND Y(N)=0 THEN BEEP:LOCATE 21,2:PRINT "CAN'T ALLOW BOTH X AND Y TO BE ZERO !":FOR J=1 TO 3000:NEXT J:GOSUB 340:GOTO 450
510    INC=INC+1
520 NEXT N
530 GOTO 640
540 GOSUB 320
550 XS=0
560 YS=0:INC=2
570 LOCATE 6,18:PRINT "ENTER VECTOR IN THE FORM  R,";CHR$(233);"  ( ";CHR$(233);" IN DEGREES )":INC=2
580 FOR N = 1 TO CT              'enters polar vectors------------------------
590   LOCATE 6+INC,30:PRINT "#";N:LOCATE 6+INC,35:INPUT "",R$,U$:R(N)=VAL(R$):U(N)=VAL(U$)
600 IF R$="Q" OR R$="q" THEN 2150
610 IF U$="Q" OR U$="q" THEN 2150
620  INC=INC+2
630 NEXT N
640 GOSUB 320:COLOR 6,0
650 LOCATE 6,2:PRINT TAB(11);"VECTOR #";TAB(29);"R";TAB(38);"THETA";TAB(51);"X";TAB(62);"Y"
660 LOCATE 7,2:PRINT TAB(10);"--------------------------------------------------------------"
670 FOR N = 1 TO CT
680 IF S$="R" OR S$="r" THEN 710     'avoids p -> r conversion if rect. format-
690    X(N) = R(N) * COS(( U(N) * 3.1415926#)/ 180)  'calculates x coordinate-
700    Y(N) = R(N) * SIN(( U(N) * 3.1415926#)/ 180)  'calculates y coordinate-
710      IF ABS( X(N)) > 0.0001 THEN 730      'avoids x roundoff error---------
720      X(N) = 0
730      IF ABS(Y(N)) > 0.0001 THEN 750       'avoids y roundoff error---------
740    Y(N) = 0
750    XS = XS + X(N)
760    YS = YS + Y(N)
770    LOCATE N+7,2:PRINT TAB(14);N
780    LOCATE N+7,23
790    PRINT USING " #####.#### ";R(N),U(N),X(N),Y(N)
800 NEXT N
810 LOCATE N+7,2:PRINT TAB(10);"--------------------------------------------------------------"
820 H = XS
830 V = YS
840 IF ABS( H) > 0.0001 THEN 940
850 XS = 0
860 IF ABS( V) > 0.0001 THEN 890
870 THETA = 0
880 GOTO 1120
890 IF V > 0 THEN 920
900 THETA = 270
910 GOTO 1120
920 THETA = 90
930 GOTO 1120
940 IF ABS( V) < 0.0001 THEN 1070
950 THETA = (ATN(YS/XS) * 180)/ 3.1415926#
960 IF YS < 0 THEN 1020
970 IF XS < 0 THEN 1000
980 THETA = THETA
990 GOTO 1060
1000 THETA = 180 + THETA
1010 GOTO 1060
1020 IF XS < 0 THEN 1050
1030 THETA = 360 + THETA
1040 GOTO 1060
1050 THETA = 180 + THETA
1060 GOTO 1120
1070 YS = 0
1080 IF XS > 0  THEN 1110
1090 THETA = 180
1100 GOTO 1120
1110 PRINT
1120 RT = SQR(XS^2 + YS^2)
1130 R(51)=RT
1140 U(51)=THETA
1150 X(51)=XS
1160 Y(51)=YS
1170 V=10
1180 LOCATE N+8,10
1190 PRINT "RESULTANT ->"
1200 LOCATE N+8,22
1210 PRINT USING " ######.####";RT,THETA,XS,YS
1220 LOCATE 21,2
1230 PRINT "PRESS ANY KEY TO CONTINUE"
1240 LOCATE 21,28:A$=INKEY$:IF A$="" THEN 1240
1250 XM=0
1260 YM=0
1270 GOSUB 330
1280 LOCATE 21,32
1290 PRINT "BUILDING ARRAYS"
1300 COLOR 6,0
1310   FOR N=1 TO CT         'finds largest value of x and y for scaling-----
1320    IF ABS(X(N))>XM THEN XM=ABS(X(N))
1330    IF ABS(Y(N))>YM THEN YM=ABS(Y(N))
1340   NEXT N
1350 IF ABS(X(51))>XM THEN XM=ABS(X(51))  'includes resultant in scaling-----
1360 IF ABS(Y(51))>YM THEN YM=ABS(Y(51))  'includes resultant in scaling-----
1370 IF YM>XM THEN XM=YM                  'makes xm the largest value--------
1380        FOR N=1 TO CT            'scales for graph and x-y aspect ratio--
1390           XC(N)=((X(N)/XM)*197.6)
1400           YC(N)=((Y(N)/XM)*81.7)
1410        NEXT N
1420 XC(51)=((X(51)/XM)*197.6)            'scales resultant-------------------
1430 YC(51)=((Y(51)/XM)*81.7)             'scales resultant-------------------
1440 CLS:SCREEN 2,0,0
1450 PI=3.1415926#
1460 LINE (222.5,13.4)-(623,180.9),1,B    'draws plotting field---------------
1470 LINE (422.8,13.4)-(422.8,180.9),1    'draws vert axis--------------------
1480 LINE (222.5,97.2)-(623,97.2),1       'draws horiz axis-------------------
1490 LOCATE 12,80
1500 PRINT "X"                            'labels x-axis----------------------
1510 LOCATE 1,53
1520 PRINT "Y"                            'labels y-axis----------------------
1530 LOCATE 1,1
1540 PRINT "X and Y MAX = +/-"          'prints length of x-axis from 0-------
1550 LOCATE 1,18:PRINT USING "######.####";XM:LOCATE 2,1
1560 PSET (422.8,97.2),1
1570   FOR N=1 TO CT                    'plots each vector--------------------
1580     LINE -(422.8+XC(N),97.2-YC(N)),1
1590     CIRCLE  (422.8+XC(N),97.2-YC(N)),4,1
1600     PSET (422.8,97.2),1            'resets to origin---------------------
1610        FOR I=1 TO 100              'creates slight pause between plots---
1620        NEXT I
1630   NEXT N
1640 LINE -(422.8+XC(51),97.2-YC(51)),1 'plots resultant----------------------
1650 CIRCLE (422.8+XC(51),97.2-YC(51)),7,1
1660 PSET (422.8,97.2),1
1670 LOCATE 10,1
1680 PRINT "RESULTANT IDENTIFIED"
1690 PRINT "  BY LARGE WHITE"
1700 PRINT "TERMINATOR CIRCLE AT:"
1710 PRINT
1720 PRINT "  (";X(51);",";Y(51);")"     'prints resultant rect coordinates---
1730 PRINT :PRINT :PRINT :
1740 PRINT "TO START OVER ....1"
1750 PRINT "TO REVIEW VALUES .2
1760 PRINT "EXIT .............3":PRINT
1770 PRINT " MAKE SELECTION"
1780 LOCATE 22,18:AA$=INKEY$:IF AA$="" THEN 1780
1790 IF VAL(AA$)<1 OR VAL(AA$)>3 THEN BEEP:GOTO 1780
1800 IF VAL(AA$)=1 THEN 100
1810 IF VAL(AA$)=2 THEN FOR I=1 TO 51:XC(I)=0:YC(I)=0:NEXT I:XS=0:YS=0:SCREEN 0,0,0:CLS:GOTO 640
1820 IF VAL(AA$)=3 THEN SCREEN 0,1,0:COLOR 6,0:GOTO 2150
1830 '----------------------------------help-----------------------------------
1840 GOSUB 320
1850 LOCATE 6,5:PRINT "* Up to 10 vectors may be entered in either rectangular or polar"
1860 LOCATE 7,7:PRINT "formats. You must declare the number of vectors that the program"
1870 LOCATE 8,7:PRINT "must handle and the format that you intend to use."
1880 LOCATE 10,5:PRINT "* When inputting is complete, the program first displays a tabular"
1890 LOCATE 11,7:PRINT "list of your inputs. If you used polar format, the list shows"
1900 LOCATE 12,7:PRINT "your inputs in both polar and rectangular form. The resultant"
1910 LOCATE 13,7:PRINT "of all input vectors is shown in both formats."
1920 LOCATE 15,5:PRINT "* Pressing any key after the tabular display will clear the screen"
1930 LOCATE 16,7:PRINT "and present a plot of your input vectors and their resultant."
1940 LOCATE 18,5:PRINT "* The vector plot is autoscaled to insure that all vectors will"
1950 LOCATE 19,7:PRINT "fit on the plot field."
1960 LOCATE 21,2:PRINT "PRESS ANY KEY TO CONTINUE"
1970 LOCATE 21,30:K$=INKEY$:IF K$="" THEN 1970
1980 IF K$="Q" OR K$="q" THEN 2150
1990 GOSUB 340
2000 LOCATE 6,5:PRINT "* The largest X or Y value (including the resultant) is used to"
2010 LOCATE 7,7:PRINT "scale both the X and Y axis. The value of the largest X or Y value"
2020 LOCATE 8,7:PRINT "defines the value of both the X and Y axis. The value is displayed."
2030 LOCATE 10,5:PRINT "* The coordinates of the resultant vector are listed and the"
2040 LOCATE 11,7:PRINT "plotted resultant can be distinguished from the input vectors by"
2050 LOCATE 12,7:PRINT "the large terminator circle at its end point."
2060 LOCATE 14,5:PRINT "* Vector lengths (including the resultant) are limited to four"
2070 LOCATE 15,7:PRINT "digits to the left of the decimal point and four decimal places."
2080 LOCATE 17,5:PRINT "* A comma error will result in a 'REDO FROM START' message. Simply"
2090 LOCATE 18,7:PRINT "reenter, using correct syntax, at the currrent cursor position."
2100 LOCATE 21,2:PRINT "PRESS ANY KEY TO START"
2110 LOCATE 21,27:K$=INKEY$:IF K$="" THEN 2110
2120 IF K$="Q" OR K$="q" THEN 2150
2130 GOSUB 340:GOTO 350
2140 '-----------------------------------quit---------------------------------
2150 CLS
2160 LOCATE 8,25:PRINT "RESTART THIS PROGRAM --------------1"
2170 LOCATE 10,25:PRINT "RETURN TO PLOT MENU ---------------2"
2180 LOCATE 12,25:PRINT "QUIT ------------------------------3"
2190 LOCATE 17,30:PRINT "MAKE SELECTION"
2200 LOCATE 17,50:Q$=INKEY$:IF Q$="" THEN 2200
2210 QT=VAL(Q$)
2220 IF QT<1 OR QT>3 THEN BEEP:GOTO 2200
2230 IF QT=1 THEN 100
2240 IF QT=2 THEN RUN "PLOTM"
2250 IF QT=3 THEN CLS:CHAIN "PLIC
2260 BEEP:GOTO 2200
```

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk 0978

     Volume in drive A has no label
     Directory of A:\

    !READ    ME        714   9-08-87  10:12a
    AR-REORD DBF      1024   5-25-84   1:38a
    BIGBMW   TXT     28696   1-01-80   1:14a
    FIXER    EXE     61590   7-29-87   2:20p
    BUDG     PRN     11547   1-01-80   5:22a
    STRIPPER EXE     10866   9-13-87   7:58p
    BREAKER  EXE     51900   8-21-87   5:13p
    ASCEDIT  @@@      1951   7-29-87   8:28p
    IQBUILD  BAS      4608   5-17-85   7:52p
    SPECIAL  DOC      2048   2-27-85  10:52a
    HELP     ASC      6105   1-01-80  12:46a
    TESTMAIL DBF      2048
    EGABLANK COM       256   6-16-87   7:45p
    MMAKE    EXE     21231   5-12-88   4:22p
    MMAKE    DOC     28292   5-12-88   4:20p
    DESCRIPT          1121   8-12-87  10:37p
    HLP3     BAS     11303   5-11-87   1:55p
    README   DOC     12398   5-22-87  10:24a
    IPLOT    BAS     10937   5-06-87   4:09p
    PLIC     BAS      1310   5-06-87  10:59a
    PLOG     BAS      2477   5-08-87  12:02p
    PLOT     BAT        29   5-22-87  10:14a
    PLOTM    BAS      1444   5-11-87   2:02p
    PPLOT    BAS     11335   5-10-87   2:54a
    SPLOT    BAS     11215   5-11-87   1:49p
    VPLOT    BAS      8523   5-10-87   2:53a
    FILES978 TXT      3276   1-27-89   2:11p
    GO       TXT       463   6-03-88   9:19a
    GO       BAT        38  10-19-87   3:56p
    MANUALS  BAT        16   6-03-88   9:19a
           30 file(s)     308761 bytes
                           36864 bytes free
