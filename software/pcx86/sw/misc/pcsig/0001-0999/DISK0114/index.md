---
layout: page
title: "PC-SIG Diskette Library (Disk #114)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0114/
machines:
  - id: ibm5150
    type: pcx86
    config: /machines/pcx86/ibm/5150/cga/256kb/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0114"
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

## BASCOM.DOC

{% raw %}
```
Here are a few of the patches from IBM related to the
IBM PC BASIC Compiler

-----CHAIN with COMMON-----

The use of CHAIN with COMMON when CHAINing from a large program
with a large data area to a small program with a large data
area may produce an incorrect "Out of memory" error.

  Here is the patch procedure:
A>rename basrun.exe basrun.tmp
A>b:debug basrun.tmp
-e1951
xxxx:1951  3B.72 C1.09 77.3b 03.c1 E9.77 CA.05 FB.e9
xxxx:1958  A3.ca 7A.fb 07.00 0B.00 FF.a3 74.7a 38.07
-w
Writing 7C00 bytes
-q
A>rename basrun.tmp basrun.exe

-----MOD-----

MOD (and others??) does not return the correct value under the
following conditions:

  1) Using a binary non-commutative operator such as MOD, IMP,
     of \ (integer division with the backslash)
  2) The left operand is simpler than the right operand
  3) The result is required in the BX register

The following example shows the problem:

 10 A=3 : B=4 : C=10
 20 PRINT "10 MOD (3 + 4) = "; C MOD (A + B)

In the unpatched compiler, it will return 7 (the right operand,
A + B).  The correct value is 3.

    The patch procedure:
A>b:debug bascom.com
-e7450
xxxx:7450  F6.86 87.47 02.02 00.24 08.08
-w
Writing A280 bytes
-q
A>



-----ARRAYS and OPTIMIZING-----

When using arrays and making calculations such as:
    T(J,L) = G(J)*E(L)+T(J+1,I)
the compiler may give an Internal Error or the calculation
may be performed incorrectly.  I think the error is in the
optimization process.  I wanted to compare the generated code
before and after the patch but the unpatched compiler bombed
on that statement with "Internal Error".

   The patch procedure:
A>b:debug bascom.com
-e8ab3
xxxx:8AB3  0C.1f
-w
Writing A280 bytes
-q
A>



-------------

How to get patches for a problem with IBM software.

   If you are having a problem with one of IBM's software
products for the PC, you should do the following.  Try to
isolate the simplist conditions that will cause the problem.
If the problem is with a language product, isolate it to
one line (if possible) and have a very short program
available that will demonstrate the problem.  Then, take
this information to your friendly dealer who sold you the
product.

   There should be someone at the dealership who can
understand your problem.  If he can't see anything wrong
with your sample program, he will have to contact IBM.
He will call the IBM hotline and tell them what product the
problem is with.  The support people are usually all busy,
so they will take the phone number of the dealer and will
call him back when someone is available (i.e. you will have
to come back/call back later for the answer).  When the
dealer gets in touch with IBM, they will try to find a
patch that deals with the area of your problem.  If one
is found, IBM will print the update description and procedure
and send it to the dealer.  These are titled "IBM Personal
Computer Programming Clarifications" and are usually a couple
of pages long, printed on an IBM/Epson printer.  If they
can find no match for your problem, they will ask for an
example of the problem, and work from there.


        Dave Alverson
        72155,1560
        September 15, 1983

-----------------------------------------------------------------------------
        Some additional patches courtesy of the SVCS Library SIG.
-----------------------------------------------------------------------------

The use of the INPUT# statement with quoted strings of length 1
may produce random results.

A>RENAME BASRUN.EXE BASRUN.TMP
-E6236
XXXX:6236  3C.b1 22.ff
XXXX:623B  75.3c 10.22 80.75 FA.10 2C.80 75.fa 0B.2c E8.75
XXXX:6240  7E.0b 00.e8 BA.7c 22.00 22.ba E8.22 48.22 D4.e8
XXXX:6248  72.46 40.d4 B1.72 FF.3e
-W
Writing 7C00 bytes
-Q
A>RENAME BASRUN.TMP BASRUN.EXE


A>B:DEBUG BASCOM.LIB
-ECBD7
XXXX.CBD7  3C.b1
XXXX.CBD8  22.ff 75.3c 10.22 80.75 FA.10 2C.80 75.fa 0B.2C
XXXX.CBE0  E8.75 00.0b 00.e8 BA.00 22.00 22.ba E8.22 00.22
XXXX.CBE8  00.e8 72.00 40.00 B1.72 FF.3e
-ECCA1
XXXX.CCA1  39.3b
-ECCA8
XXXX.CCA8  3F.41
-W
Writing 19600 bytes
-Q
A>

Test program:
10 OPEN "TSTPROG" FOR OUTPUT AS #1
20 FOR I=1 TO 10
30 WRITE #1,I,"A","BB","CCC","DDDD"
40 NEXT
50 CLOSE
60 OPEN "TSTPROG" FOR INPUT AS #1
70 IF EOF(1) THEN END
80 INPUT #1,J,A$,B$,C$,D$
90 PRINT J,A$,B$,C$,D$
900 GOTO 70

Program should print:
1 ABBCCCDDDD
2 ABBCCCDDDD
3 ABBCCCDDDD
4 ABBCCCDDDD
5 ABBCCCDDDD
6 ABBCCCDDDD
7 ABBCCCDDDD
8 ABBCCCDDDD
9 ABBCCCDDDD
10 ABBCCCDDDD

Test program for the ARRAY patch given above:

10 DEFINT D,F,N
20 DSD=0
30 FOR N=0 TO 7
40   FSEC=FSEC+1
50 NEXT
60 PRINT "The result is  ";512*(1-DSD)*FSEC,"The result should be 4096"





```
{% endraw %}

## CABLE.DOC

{% raw %}
```
        These instructions are to help IBM PC users with the Color Graphics
Adapter construct a cable/interface for a Sony Profeel monitor.  These
are not complete instructions, but corrections to the instructions and
schematics that appeared in PC World, Volume 1, Number 3, pages 320-321,
and Softalk, August 1983, pages 8-9.   Sony now lists a cable for use
in interfacing with the IBM PC.  It is part # PC701.  It retails for
80 dollars.

        This cable/interface will only produce the high intensity colors.
Use of the IBM CG Adapter pin #6, used for setting intensity, is NOT
applied.  Use of that pin was NOT in the magazine instructions, and this
author is not qualified to figure out the correct use of that signal in
interfacing.  It is not known whether the Sony PC701 cable gives both
intensities.  I am waiting for a reply from Sony.

        These corrections have been determined through comparison of the
pin-outs of the Color Graphics Adapter printed in the adapter's
Inventory Checklist, the Sony 12" Profeel monitor's pin-ins as printed
in the Sony PX-34 instructions that came with the set, and finally, the
schematics printed in the two issues of the above mentioned magazines.
This author takes ABSOLUTELY NO RESPONSIBILITY for the results of this
cabling procedure.  You are onw your own.  These instructions are only
supplied in order to share my experience with you.

        The Sony Profeel and the IBM Color Graphics Adapter (CGA) differ
in their handling of the Vertical and Horizontal Sychronizations.  Sony
uses negative logic.  IBM uses positive.  To get the two to work with
each other, the polarity of the Vert and Horz signals must be reversed
between the two.

        The basic design of the schematics that appeared in the magazines
was correct.  The errors are all in the identification of the pin
numbers of the IBM CGA pin-outs.  The number labeling at the Sony end
was correct.

        In essence, the Red, Green, and Blue signals are passed from
the CGA directly to the Sony 34 pin connector.  This is just a straight
wiring.  The IBM signal pins were mislabeled in the schematic.  Pin #1
is shown as Ground.  This is correct.  Pin #2 is shown as the Red signal.
This is very incorrect!  Pin #2 is ALSO a ground.  The Red signal comes
from Pin #3.  The Green signal comes from Pin #4.  The Blue signal comes
from Pin #5.

        As indicated above, the IBM CGA pin #6 is for intensity and
IS NOT used in this cabling application (at this time - I am trying to
get data on how to use it correctly).  The IBM CGA Pin #7 is not used
by IBM and not used here.  I think it is a dead pin.

        The magazine schematics also mis-labeled the Pin Numbers for
pins #8 and #9.  As mentioned above, the Sony end IS LABELED CORRECTLY!
The IBM CGA pin #8 is the Horz Synch, NOT the Vert as listed.  The VERT
Synch comes from Pin #9 of the IBM CGA.

        Here are the correct Pass-Throughs for the interface:
IBM Pin # 1 (ground) to Sony Pin # 11 or Pin #13. (I used 11 because it
is the one Identified by Sony as Ground).

        IBM Pin # 2 to 74LS240 Inverter Pin # 1, and connect jumper from
74LS240 Pin # 1 to 74LS240 Pin # 10.  All of these are Grounds also.

        IBM Pin # 3 (Red Signal) to Sony Pin # 25 (Red).  IBM Pin # 4
(Green Signal) to Sony Pin # 26 (Green).  IBM Pin # 5 (Blue Signal) to
Sony Pin # 27 (Blue).  IBM Pins # 6 and # 7 are not used.

        IBM Pin # 8 (Horz Signal) to 74LS240 Pin # 2.  74LS240 Pin #18
to Sony Pin # 30 (Horz).  IBM Pin # 9 (Vert Signal) to 74LS240 Pin # 4.
Then 74LS240 Pin # 16 to Sony Pin # 31.

        Remember to jump the Vert and Horz signals to Ground via the
47 Pica Ferad Capacitors as indicated in the schematic.  This jump can
be made back to 74LS240 Pins # 1 or # 10, or to the cable wire running
from IBM Pin #1 to Sony Pin # 11 (or 13).

        There is one more wire that needs to be run.  It is a 5 volt
power supply than must be obtained and run to Pin # 20 of the 74LS240
Inverter.  The magazine instruction was to obtain the 5 V source from the
the IBM CGA's Light Pen connector.

        The Sony documentation indicated that a 5 V supply could be
obtained from the Sony Pin #1 or #2.  If the 74LS240 Inverter is placed
near the Profeel end of the cable the use of the monitor's 5 V source
makes much more sense.  The cable can be entirely self contained rather
than the sloppy arrangement of getting the power source from within the
computer.  This obviously allows easier connect/disconnect from the
computer when needed.

        My cable/interface came out well.  As I mentioned, I mounted
a 20 Pin Wirewrap socket (PAGE part # PWG20-2) to a mini-circuit board
(from neighborhood Radio Shack).  Radio Shack did not carry the 74LS240
Inverter.  I found it at another electronics supply house.  I mounted
the circuit board in a Radio Shack Deluxe Project Case #270-220.  I
had to slice off some internal ridges with an EXACTO knife, and had to
drill holes through which to route the cable.  Radio Shack stores now
also carry the DB 9 connector needed for the IBM end.  Be VERY CAREFUL
with the Sony 34 pin connector.  I don't know how difficult it would be
find another.

         CompuServe 70055,474

```
{% endraw %}

## FILES114.TXT

{% raw %}
```
Disk No:  114
Program Title:  Assembly
PC-SIG version: 1.2

The file ASM. is a tutorial on the assembly language for the IBM-PC's
8088 processor and was distributed by IBM itself.  It is a concise
description of the essentials of IBM-PC assembly language programming.
NEWCLOCK is a fixit device driver addressing the 24 hour rollover
problem as well as mis-stamped file times.  UASMLS is a utility that
will enable the creation of an almost-assembler-ready listing from the
output of a DEBUG dis-assembly.  The PCTALK files are overlays to the
original PCTALK III release and support VT100 or VT52 terminal
protocols.  TERM is overlay for the IBM ASYNC.BAS program.

Usage:  Programming/Education.

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

PC-SIG
1030D East Duane Avenue
Sunnyvale  Ca. 94086
(408) 730-9291
(c) Copyright 1985,86,87,88.89 PC-SIG, Inc.

```
{% endraw %}

## FPLOT.BAS

{% raw %}
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
{% endraw %}

## FPLOT.DOC

{% raw %}
```
   This program is an IBM adaptation of an Apple program written by James
Fuller, that appeared in Creative Computing, January 1983.  The program
allows the plotting of a function defined at line 270 in Cartesian, or Polar
coordinates or as a 3 dimensional "Solid of Rotation".  The program also
allows the screen image to be saved for later recall.
   Three dimensional plots are quite time consuming (1-2 hours), although
often very interesting.  The program can be compiled which speeds up the
3d plots considerably considerably.
   Some suggested equations:

                DEF FN R(Q)=COS(7*SIN(2*Q))  in Polar coordinates
                DEF FN R(Q)=COS(Q)+COS(2*Q)+COS(5*Q)  any type of plot
                DEF FN R(Q)=COS(2*Q)+COS(X+BB/16)  3D plot
                DEF FN R(Q)=COS(4*Q)+(20/X^2+3))   3D plot

   Some interesting spiral graphics can be obtained with polar plots with
the following alterations:
                    Delete 750, 760
                680 FOR G=0 TO 18000 STEP INX
                770 IF G=0 THEN PSET(1.2*G+XOFF,YY)
                775 line -(1.2*XX+XOFF,YY)
        try DEF FN R(Q)=Q/3.14159 or R(Q)=COS(4*Q)
Use large increments (25-150), and small scale factors (0.05-0.5) for best
results.  Other examples were listed in the article.

                                        David Bush
                                        71046,654

```
{% endraw %}

## KBDFIX.BAS

{% raw %}
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
{% endraw %}

## NEWCLOCK.DOC

{% raw %}
```
The following paragraph is a cogent explanation of the functioning of the Dos
2.0 CLOCK$ routine and the partial fix made by Larry Rosen:

There are two different "date" problems, Earle. One is caused by the fact that
the BIOS updates the time and DOS updates the date. That is, just because the
time passes midnight and is reset to zero, the date is not changed until DOS
"notices" that condition. If <two> midnights are passed without anyone asking
DOS for the time or date, it can't know that any more than <one> midnight was
passed. The other problem is the way DOS determines whether midnight was
passed. Without my "fix" DOS uses the "midnight" flag returned by a TOD request
to the BIOS. The <first> request after midnight receives this indication, which
is then reset. The problem in DOS 2.0 is the fact that the builtin CLOCK$
routine is not going to be the first requestor after midnight since other
routines also request the TOD, especially the diskette and hard disk routines
which are more popular. My "fix" causes DOS to detect the date change whenever
the current TOD is less than the previous TOD. The technique is not perfect,
but it's better than the old way.

SVCS Library SIG comment: DOS 2.1 functions correctly, no fix required.

```
{% endraw %}

## PCT3VT.BAS

{% raw %}
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
{% endraw %}

## PROFEEL.DOC

{% raw %}
```
        First, let me thank those SIG members who helped me with the process
of gathering information and then tying it together.  In no way could I have
gotten the job done without that help.

        As I type this text, I am viewing a brilliant two-color Wordstar.
The Sony is fired up and works beautifully.  It is the 12" PROFEEL, Model
Number KX-1211HG.  Last night I left a reply on this SIG to Dave Crane
and advised him that the image and text quality of this monitor was
better than the Amdek II RGB, but maybe not as good as the IBM, Quadram,
or Princeton.  I lied!!

        Maybe I had been up too late on several consecutive nights.
Maybe I had read too many specs (such as the Sony spec on PROFEEL Horz
Resolution that only claimed "..greater than 350 lines...").  Today I
got a chance to compare this jewel side by side with the same Princeton
that I judged side-by-side with an IBM.  All Five people judging it
judged the PROFEEL as good, and three of the five judged it better!

        Here is an interesting quote from the Sony PROFEEL KX-1211HG's
Operating Instructions Book.  "...The line system is switched
automatically from the normal 525 lines to 625 lines according to the
input from the microcomputer...".  Why Sony doesn't publish this spec
is beyond me, but the text and graphics quality speak for themselves.

        Another real plus, this 12" monitor gives me an eight and three-
quarter inch wide 80 column screen.  My Zenith ZVM-121 green monochrome
display, also 12", gives me only seven and one-half inches of width
(full 80 columns).

        The PROFEEL does not have the richer background of the IBM, but
the Sony seems to have more brilliant color than the rest of the field
(sans IBM).  The text is clearer and sharper than I ever hoped for.  And
the one big plus for me --- I can reach to the front panel and toggle
from RGB signal to TV/VCR signal, all with one easy touch.  And the TV
picture quality is unexcelled.

        I am going to write and upload cabling instructions to the SIG
XA area.  The schematic that appeared in PC World Vol 1, No 3, page 321,
and Softalk, August 1983, both had errors (identical).  I will document
those errors and give corrections.

        A major limitation IS left.  The color intensity is FIXED.  The
cable DOES NOT handle the Intensity signal-out from the Color Graphics
Adapter.  That pin-out #6 of the adapter is not used at all in the
cabling.  I do not possess the knowledge on how this intensity-out works.
The PROFEEL has a "Level Set" pin on it's pin-ins.  I have not tried any
connection between the two as I am afraid of hurting one or the other.
I am looking for a cure to this and will let the group know
when I discover it.  If anyone knows, please give me the info or a ring
at (918) 250 9770.

                                ADDENDUM

        Some additional information --- I am adding this one day later than
the original part of this text was created.  Today I was able to do a
side by side comparison with the IBM Color Display.  It was done at a
local computer store.  Everyone's eyes bugged out.  The two displays were
identical in clarity and quality.  Brightness and color were exactly the
same.  The ONLY difference was the background.  The Sony 12" Profeel
had just as black a background as the IBM.  The difference is that the
IBM has more of a flat black or non-glare appearance.  The actual
display screen of the Sony is larger, but I did not have the opportunity
to take measurements as I did vs. the Zenith green screen monitor.

        Anyone with nearby access to a video recorder/tuner would be
foolish to overlook this option.  Think of the possibilities.  The
combination of the PC / Profeel / and PC could be used as a terrific
computer training aid.  The student/teacher could toggle back and forth
between active computer and video-taped instruction as needed or
instructed.              -FP

         CompuServe 70055,474

```
{% endraw %}

## TERM.BAS

{% raw %}
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
{% endraw %}

## TERM.DOC

{% raw %}
```
        This is a program that is designed to be merged into the TERMINAL.BAS
program of the IBM Asyncronous Communications Support 2.0 to provide autodial
with a forty number directory and auto log-on capability for Compuserve and
very likely other services as well.  It also contains the lines neccessary to
add color to the program operation, and is formatted to work properly in 40
column as well as 80.  For auto log-on to Compuserve it requires a modem that
displays a screen message indicating that the carrier tone from the host
computer has been detected, for example the "CONNECT" message provided by the
Hayes Smartmodem.  The log-on sequence works by watching for "prompts" that you
have entered at the time of making your directory entry-- (actually, it watches
for the last three characters of the screen message-- "ECT" for "CONNECT",
"ID:" for "USER ID:", and "rd:" for "Password:".  Note that you must specify the
prompts exactly, with upper and lower case correct.  When you respond to the
input statements while entering the log-on information, you cannot enter
certain characters directly such as the "^C" (ASCII 3) neccessary to respond to
the "CONNECT" message from the modem.  Instead, enter the desired ASCII number
plus 128 by holding down the ALT key while typing the number on the numeric
keypad, then releasing the ALT key.  (For example, type 131 for a "^C" or 141
for a carriage return.  The character produced on the screen will actually be an
ASCII 131 or 141 but will be stripped of the added 128 when it is sent by the
communications program).  More instructions can be found by reading the program
listing.  For safety's sake, *DO NOT MODIFY YOUR ORIGINAL PROGRAM DISK!*.  The
program is actually written to use the Hayes Smartmodem and touch-tone dialing.
If your phone line will not support touch-tone, it will be neccessary to change
the "ATDT" in line 4430 to "ATDP".  This line and others may have to be further
modified if this program is to be adapted to another brand of auto-dialing
modem.  Please send questions, comments or suggestions to Robert Relf,
[70176,403].

```
{% endraw %}

## TREND123.DOC

{% raw %}
```
                                   TREND123
                                 version 1.0
                       A Lotus 123 Curve fitting macro
               created by John C. Dannenfeldt (Compuserve 71435,561)

The file TREND123.WKS is a independent macro that may be used within any Lotus
123 spreadsheet.  This version enables you to create a set of data points with
the range name LINE or CURVE which fit any set of data points you range name
DATA with either a least squares straight line or an exponential curve:

     Linear (LINE)-         y=(c1 * x) + c2

     Exponential (CURVE)-   ln y=(c1 * x) + c2

Restrictions:
     The DATA range must be continous.. no blank cells.
     ...     ...    must be less than 257 points long.
     You must be at A70 before you load the macro into your worksheet.
     Your spreadsheet must not extend beyond A1..IV69 or it may be partially
        overwritten.

Instructions:
     Before running the macro you must:
          1) Define a continuous set of numbers range named DATA.
               They may be in either a row or column orientation but the
               program takes much longer to work on the vertical ranges
               because it must first transpose them into a horizontal range.

          2) Name the macro so that you can call it by typing:

               /RNC\t  then press (ENTER)
               A70     then press (ENTER)

          3) Load the macro into your spreadsheet-
             Now goto A70 and type:

               /FCCETREND123   then press (ENTER)

    To activate the macro type ALT-T and follow the instructions.  When the
    macro is done it will return you to its main menu and ask if you would
    like to do a linear or exponential curve fit or quit.  If you do a
    different curve fit the old LINE or CURVE will be destroyed.  If you quit
    you may then look at LINE or CURVE directly or even better graph it beside
    the original DATA that you were trying to fit the curve to.

Comments:
     I was forced to create some type of curve fitting regime for an
application I had and in the process developed part of the current macro.  The
next version will include some additional curve fitting routines such as
parabolic, moving averages and exponential smoothing.
     Some of the things I don't like about this macro are a result of the
limitations of the 123 macro language.  After finally figuring out how to
transpose a column into a row I certainly wished that 123 had a general
command for that function.  Hopefully the next version will have an easier to
use macro language.
     Feel free to make changes to the routine to fit your needs.  Some obvious
variants would be a basically vertical layout (which would make vertical
ranges faster to input) and locating the origin of the macro at a point more
suitable for your particular spreadsheet( remember that all references to
cells within a macro must be changed for it to work in a new location).
     If you got this macro in the form TREND123.HEX you must convert it to a
binary file called TREND123.WKS before trying to use it in a worksheet.

 If you have any suggestions contact me on COMPUSERVE at the IBMPC SIG.

```
{% endraw %}

## UASMLS.DOC

{% raw %}
```
                           Uasmls

     Ever  use  DEBUG to dis-assemble a file and sit  around  for
hours  doing  a simetaneous dump to the printer,  all  the  while
wishing you could put it in a file instead,  and them get down to
actually  editing  the source code and re-assemblying,  with  you
changes? Pipes and filters are the answer.

     The  DOS manual says pipes "allow the screen output  of  one
program   to   be   used  as  the  keyboard  input   to   another
program....and piping is the chaining of programs with  automatic
redirection of standard input and output."

     Well,  exactly what is standard input and  output?  Keyboard
and screen, respectively. The redirection of standard output is a
cinch,  just  tell  DOS  to  send  the output  to  a  disk  file.
Unfortunately,  this kills the standard output to the screen,  so
you don't know what you are doing. Working in the dark, you might
say.  This is where the use of input redirection comes into play,
why not create a script of debug commands,  use that as  standard
input  and kick back and let the script do all the work.  This is
how it can be done for creating a debug dis-assembly file.

A>DEBUG
-F CS:0100 L1000 "0"   <=== Fills 1,000 bytes with hex "F"
-Q
A>DEBUG MYFILE.COM     <=== Load the file to be dis-assembled
-D                     <=== Dump  the  file,   note   addresses
                            containing data, continue Dumping
                            until you reach the end of the file
                            (section when contains contigious
                            FFFFFF's).
-Q                     <=== Quit debug
A>Copy con infile
U addr1  addr2         <=== Start and stop address
U addr3  addr4         <=== Start and stop address
etc.                   <=== Until all code addresses are specified
q                      <=== Tell debug to Quit
Ctrl Z                 <=== End of file mark

A>DEBUG MYFILE.COM <INFILE >OUTFILE

     Think of the pipes as funnels.  In this case INFILE will  be
used  in lieu of keyboard input to debug.  All output that  would
normally  be  sent to the screen will be piped to a  file  called
OUTFILE.  Of  course,  the names of these files can be changed to
any filename that you would like to use.

     You've  now  created  a  file  which  is  identical  to  the
unassembly that you would normally see on your screen. Now run the
UASMLS program. The program  will ask for the  input  file.  Enter
OUTFILE.  When  asked  for  the  output file  name  enter  a  new
filename,  usually with a .ASM extension.  The program will  then
read OUTFILE,  eliminate the hex addresses on the left and assign
labels  (in  the form Ln,  where n = 1 - 999) for all  jumps  and
calls, and send the results to the new file you have specified.

     If  you  get an error message "Error:  Referenced  code  not
found:",  it means that a jump or call was found which referenced
an  address  not found in the input file.  This means you  missed
portions of the code, you started unassembling in the middle   of
an instruction,  or you got into data areas

```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0114

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
