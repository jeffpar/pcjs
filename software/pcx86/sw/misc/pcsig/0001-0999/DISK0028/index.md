---
layout: page
title: "PC-SIG Diskette Library (Disk #28)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0028/
machines:
  - id: ibm5150
    type: pcx86
    config: /machines/pcx86/ibm/5150/cga/256kb/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0028"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5150" %}

{% comment %}info_begin{% endcomment %}

## Information about "DISKMODF"

    A variety of BASIC and DOS tools, directory listers, machine
    tutorials, graphics and games.  Utilities are included to let you
    design your own graphics characters, generate a resident COMMAND.COM,
    or generate a large block font set from BASIC.  Some amusing games are
    here as well.  DOS utilities include directory handlers, diskette
    speed-up, one to confirm files when doing wildcard deletes, a function
    to give status info on all drives, and others.
    
    System Requirements: Programs marked "+" require color
    graphics.
    
    How to Start: To run an EXE or COM program simply type its name and
    press <ENTER>.  For instructions on running BASIC programs, please
    refer to the GETTING STARTED section in this catalog.  To read DOC
    files simply enter TYPE filename.ext and press <ENTER>.
    
    File Descriptions:
    
    BIGTYPE  BAS  Displays character set in large block font
    DISKMODF BAS  Improved version of disk sector modifier program
    DDATE    COM  Allows quick updating of date and time on bootup
    PALLETTE BAS  Displays colors available in low-res (160x200) graphics
    JUMBLE   BAS  Permutes jumbled words
    LF       COM  Directory lister sorted by extension & filename
    HALS     DOC  Doc on above files
    TIMING   BAS  Accurately times the execution of short BASIC programs
    SPEED411 COM  Sets disk step rate to 4 ms - test with format and copy
    VDEL     COM  Provides for OK's when doing wildcard deletes
    CD       COM  Sets default drive, file information, & sorts directory
    WAIT     COM  Batch file PAUSE for three seconds
    GUMUP1   DOC  Doc on LF, VDEL, CD, WAIT
    SYSTAT   DOC  Documentation on SYSTAT.COM
    SYSTAT   COM  Status report on all drives
    FK       COM  Function key handler (with reset) for DOS 1.0 & 1.1
    FK       DOC  Documentation on FK.COM
    SD       COM  Directory lister, 4 up
    UNPROT2  TXT  Ultra simple technique for unprotecting BASIC programs
    SDIR     EXE  Directory lister, 2 up - upgrade of SDIR.COM on Disk #2
    ARTILL   BAS  Artillery for 2, random terrain & winds - Quite good
    GRAFGE   BAS  Uses graphic screen to develop your own upper ASCII set
    RESCMDCK BAS  Resident COMMAND.COM with BEEP, PAGE, CLS
    RESCMD   DOC  Documentation on resident COMMAND.COM
    CPCPRO   DOC  Tutorials -BASIC PrtSc, Printer bit graphics, Keyloc
    RESCMD   BAS  Generates resident COMMAND.COM
    GSDUMP   BAS  Graphics Sideways memory DUMP (C.Itoh 8510 or NEC8023)
    COLOUR   DOC  Tutorial + small routines re: Artifacting, high-res
    SQUISH   EXE  Compresses BASIC programs, removes REM's, etc
    SQUISH   SRC  Upgrade of SQUISH on Disk No 9, modified for compiler
    MEMPEEK  BAS  Similiar to disk modify programs except for RAM memory
    GRAFGE   DOC  Documentation for GRAFGE.BAS
    SQUISH   DOC  Documentation on SQUISH
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## ARTILL.BAS

{% raw %}
```bas
1 ' THE PORTLAND IBM PERSONAL COMPUTER CLUB
2 ' ARTILL.BAS
3 ' Submitted by Joe Lipska,  July 1982
4 '
30 DEF SEG=0
40 IF (PEEK(&H410) AND &H30)<>&H30 THEN DEF SEG:GOTO 110
50 WIDTH 80:CLS:LOCATE 3,1
60 PRINT "HOLD IT!"
70 PRINT "YOU'RE NOT USING THE COLOR/GRAPHICS MONITOR ADAPTER!"
80 PRINT "THIS PROGRAM USES GRAPHICS AND REQUIRES THAT ADAPTER."
90 PRINT "SORRY,BUT THIS PROGRAM WILL NOT CONTINUE."
100 END
110 TIM$=RIGHT$(TIME$,2)
120 RIM=ASC(RIGHT$(TIM$,1))
130 RIM=RIM+ASC(LEFT$(TIM$,1))
140 RANDOMIZE(RIM)
150 DEF SEG=0:POKE &H417,96
160 DEG=.017745329#
170 KEY OFF:CLS:WIDTH 40
180 INPUT "A 0=MONOCROME  1=COLOR";A
190 CLS
200 PRINT  "              ARTILLARY"
210 PRINT " To shoot shells input ANGLE,VELOCITY "
220 PRINT " an example is  70,100"
230 PRINT
240 PRINT " Wind can vary both in direction and in"
250 PRINT " strength if you choose this option"
260 PRINT
270 PRINT " Each gun company starts with 100 men."
280 PRINT " After each shot there is a deserter"
290 PRINT " on each side.  Near misses can cause"
300 PRINT " casualties, dependent on distance and"
310 PRINT " # of men remaining. A near miss which"
320 PRINT " would bring a gun company to less than"
330 PRINT " 10 men is treated as a direct hit. A"
340 PRINT " running total of base strength is"
350 PRINT " maintained between battles for each "
360 PRINT " side. Misses leaves craters; therefore"
370 PRINT " shots can be used to lower a large"
380 PRINT " mountain!"
390 PRINT " If desertion brings your gun company"
400 PRINT " to less than 5 men, your gun misfires"
410 INPUT " (PRESS RETURN TO CONTINUE)";ZZZ$: CLS
420 PRINT
430 INPUT "TYPE Y IF YOU WANT VARYING WIND";Q$:Q$=LEFT$(Q$,1)
440  Q1=0
450 SCREEN 1:COLOR A,1
460  IF Q$<>"Y" THEN 500
470 Q1=1
480 PRINT "LEVEL OF DIFFICULTY":INPUT"     1=EASY,20=DIFFICULT";LEVEL
490 IF LEVEL <1 OR LEVEL>20 THEN 480
500 DIM H(320),A1(2),A2(2), B1(4),B2(4),L(2),T1(2),M1(2)
510 DIM E1(2),V1(2),WINDOW(18)
520 N=1.5+-1^ INT(100*RND(1))*.5
530 CLS
540 LINE (0,0)-(14,14),3,B
550 PAINT (1,1),3,3
560 GET (1,1)-(13,13),WINDOW
570 PLAY "MBO2T230L3CL5MSFP8FL4ACL2FL4CL5MSFAL4O3CO2AP14FP14L1C"
580 CLS
590 PLAY "MBP6L3CL4MSFFFFP4L3CL4MSFFFF"
600 PLAY "MBT230P3O3L3CO2L2AL4FL3CCL1F"
610 RESTORE
620 DATA -1,1,1,-1,-1,-1,1,1
630 T1(1)=0
640 T1(2)=0
650 M1(1)=101
660 M1(2)=101
670 A1(1)=2
680 A1(2)=2
690 A2(1)=4
700 A2(2)=27
710 FOR L=1 TO 4
720 READ B1(L)
730 NEXT L
740 FOR L=1 TO 4
750 READ B2(L)
760 NEXT L
770 E1(1)=0
780 E1(2)=0
790 V1(1)=0
800 V1(2)=0
810 N2=0
820 E3=0
830 V3=0
840 REM ESTABLISH BASE LOCATIONS
850 X1=INT(53+RND(1)*60)
860 X2=INT(198+RND(1)*60)
870 L(1)=INT(20+(X1-20)*RND(1))
880 L(2)=INT(X2+(300-X2)*RND(1))
890 REM ESTABLISH LEFT & RIGHT ELEVATIONS
900 HGT1=RND(1)*98+2
910 HGT2=RND(1)*98+2
920 IF HGT1<>HGT2 THEN 960
930 HGT1=15
940 HGT2=15
950 GOTO 1020
960 IF HGT1>HGT2 THEN 1000
970 HGT2=15+(HGT2-HGT1)
980 HGT1=15
990 GOTO 1020
1000 HGT1=15+(HGT1-HGT2)
1010 HGT2=15
1020 FOR I=1 TO X1
1030 H(I)=HGT1
1040 NEXT I
1050 H9=RND(1)*98+2
1060 FOR I=X2 TO 320
1070 H(I)=HGT2
1080 NEXT I
1090 REM PEAK ELEVATION
1100 X3=X1+INT(RND(1)*(X2-X1-20))+10
1110 H(X3)=RND(1)*90+50
1120 TOP=X3
1130 REM SLOPE OF FLAT LAND TO PEAK
1140 D1=(H(X3)-H(1))/2
1150 D2=(H(X3)-H(320))/2
1160 IF D1*D2<0 THEN 1360
1170 REM DRAW CURVE TO PEAK
1180 J=-180
1190 K=180/(X3-X1+1)
1200 H9=H(1)+D1
1210 FOR I=X1+1 TO X3-1
1220 J=J+K
1230 H(I)=H9+COS(J*DEG)*D1
1240 NEXT I
1250 J=0
1260 K=180/(X2-X3+1)
1270 H9=H(320)+D2
1280 REM DRAW CURVE FROM PEAK
1290 FOR I=X3+1 TO X2-1
1300 J=J+K
1310 IF I=321 THEN 1340
1320 H(I)=H9+COS(J*DEG)*D2
1330 NEXT I
1340 GOTO 1440
1350 REM DRAW CURVE FROM LEFT TO RIGHT
1360 D=(H(1)-H(320))/2
1370 J=0
1380 K=180/(X2-X1+1)
1390 H9=H(320)+D
1400 FOR I=X1+1 TO X2-1
1410 J=J+K
1420 H(I)=H9+COS(J*DEG)*D
1430 NEXT I
1440 REM DRAW TERAIN
1450 CLS
1460 LINE (X2,(200-H(X2)))-(319,(200-H(X2))),1
1470 LINE (0,(200-H(1)))-(X1,(200-H(X1))),1
1480 FOR I=X1 TO X2
1490 LINE -(I,(200-H(I))),1
1500 NEXT I
1510 PAINT (100,199),1
1520 REM DETERMINE WIND
1530 WIND=100*RND(1)-50
1540 W=((LEVEL*2)*RND(1))-LEVEL+WIND
1550 W=INT(W)
1560 IF W<1 THEN ARROW=27 ELSE ARROW=26
1570 IF W=0 THEN 1540
1580 N=3-N
1590 M1(N)=M1(N)-1
1600 M1(3-N)=M1(3-N)-1
1610 REM DRAW BASES
1620 XX=L(1)
1630 YY=200-H(L(1))
1640 LINE (XX-2,YY-2)-(XX+2,YY+2),,BF
1650 XX=L(2)
1660 YY=200-H(L(2))
1670 LINE (XX-2,YY-2)-(XX+2,YY+2),,BF
1680 REM PRINT TITLES
1690 LOCATE 1,2
1700 PRINT "ANGLE,SPEED MEN"
1710 LOCATE 1,25
1720 PRINT "ANGLE,SPEED MEN"
1730 LOCATE 2,14:PRINT USING "###";M1(1)
1740 LOCATE 2,37:PRINT USING "###";M1(2)
1750 LOCATE 1,19
1760 PRINT "Wind"
1770 LOCATE 2,18
1780 PRINT USING "##";ABS(W):LOCATE 2,21:PRINT "mph";
1790 LOCATE 3,12
1800 PRINT "              "
1810 LOCATE 3,20
1820 PRINT CHR$(ARROW)
1830 LOCATE A1(N),A2(N)
1840 PRINT USING "###";E1(N);
1850 PRINT ",";:PRINT USING "###";V1(N)
1860 LOCATE A1(N)+1,A2(N)-1
1870 PRINT "           "
1880 LOCATE A1(N)+1,A2(N)-1
1890 INPUT E$,V$
1900 E=VAL(E$):V=VAL(V$)
1910 IF E=0 OR V=0 THEN 1860
1920 E1(N)=E:V1(N)=V
1930 V=V/10
1940 IF M1(N)>5 THEN 1980
1950 E=90
1960 V=0
1970 W=1
1980 REM
1990 E=90-E
2000 C=1
2010 IF N=1 THEN 2040
2020 E=-E
2030 E3=-E3
2040 X1=L(N)
2050 Y1=H(L(N))
2060 T=0
2070 V1=SIN(E*DEG)*V
2080 V2=COS(E*DEG)*V
2090 T=T+.3
2100 IF T=.3 THEN 2120
2110 PRESET (X,200-Y)
2120 V1=V1+(V1+W)/1500
2130 X=X1+(V1+W/50)*T
2140 IF X<1 OR X>320 THEN 2670
2150 REM account for gravity and accelerarion
2160 Y=Y1+(V2-T/2.5)*T
2170 PSET (X,200-Y)
2180 IF Y-H(X)=>1 THEN 2090
2190 PRESET (X,200-Y)
2200 IF ABS(X-L(N))<1 AND T>.5 THEN 2710
2210 IF ABS (X-L(3-N))<1 THEN 2690
2220 IF T<.5 THEN 2090
2230 REM miss
2240 IF X<6 THEN 2570
2250 IF X>314 THEN 2570
2260 SOUND 179,3
2270 LINE (X-3,(200-H(X-3)))-(X-2,(200-H(X-2))),0
2280 FOR L=X-2 TO X+3
2290 LINE -(L,(200-H(L))),0
2300 NEXT L
2310 TMY=195-Y
2320 IF TMY>186 THEN 2570
2330 REM CHANGE LANDSCAPE
2340 PUT (X-6,TMY),WINDOW,PRESET
2350 TMPX=X-6:TMPY=205-Y
2360 H(X-3)=H(X-3)-1
2370 H(X-2)=H(X-2)-2
2380 H(X-1)=H(X-1)-3.5
2390 H(X)=H(X)-4
2400 H(X+1)=H(X+1)-3.5
2410 H(X+2)=H(X+2)-2
2420 H(X+3)=H(X+3)-1
2430 MIN=X-12
2440 MAX=X+12
2450 IF MIN<1 THEN MIN=1
2460 IF MAX>320 THEN MAX=320
2470 LINE (MIN,(200-H(MIN)))-(MIN+1,(200-H(MIN+1))),1
2480 FOR L=MIN+1 TO MAX
2490 LINE -(L,(200-H(L))),1
2500 NEXT L
2510 FOR PNTX=X-2 TO X+2
2520 PNTY=205-H(PNTX)
2530 IF PNTY>199 THEN PNTY=199
2540 PAINT (PNTX,PNTY),1,1
2550 PAINT (PNTX,201-H(PNTX)),1,1
2560 NEXT PNTX
2570 IF ABS(X-L(3-N))>8 THEN 2670
2580 REM near miss
2590 D9=2*ABS(X-L(3-N))
2600 D9=INT(M1(3-N)/D9)
2610 M1(3-N)=M1(3-N)-D9
2620 T1(3-N)=T1(3-N)+D9
2630 N2=1
2640 IF M1(3-N)<10 THEN 2690
2650 N2=0
2660 SOUND 179,5
2670 IF Q1=1 THEN 1540 ELSE 1580
2680 REM hit and explotion
2690 N=3-N
2700 PLAY "MBO1L16FP16FP16F"
2710 PSET (X,200-Y),2
2720 DRAW "H15E2F2E2F2E2F2E2F2E2F2E2F2E2F2E2F2G16C2"
2730 PAINT (X,199-Y),2,2
2740 LOCATE 1,1
2750 PRINT "                                       "
2760 PRINT "                                       "
2770 PRINT "                                      "
2780 LOCATE 1,1
2790 T1(N)=T1(N)+M1(N)
2800 PRINT  " CASUALTIES   left=" ;T1(1);" right=";T1(2)
2810 IF N2=1 THEN 2830
2820 N=3-N
2830 LOCATE 2,1
2840 PRINT " AGAIN?";
2850 INPUT A$:A$=LEFT$(A$,1)
2860 IF A$="N" THEN 2880
2870 PRINT "PLEASE WAIT 5 SECONDS":GOTO 610
2880 END
```
{% endraw %}

## BIGTYPE.BAS

{% raw %}
```bas
9 'BIGTYPE  18 DEC 82  Hal Sampson
10 'add: roam thru larger screen
20 ' print screen translation to Epson, multiple character sets
30 ' scrolling
40 ' cursor off during screen print
50 ' absorb auto repeat when type too fast?
1000 REM Program to display dot matrix characters from ROM patterns
1010 REM Will Fastie -- 19 Nov 81     Creative Computing  March 1982
1020 REM Entered by Patrick Leabo    Tuscon
1030 DEFINT A-Z
1035 DIM B$(256),C$(256)
1040 DOTCHAR = 219
1065 CUR$=STRING$(7,DOTCHAR)
1070 GOSUB 1410
1072 KEY OFF
1075 DEF SEG:POKE 106,0   'FOR USE OF RUN SOFT KEY
1080 DEF SEG=&HF000
1090 BASEADR=&HFA6E
1100 BYTESPERCHAR=8
1115 FOR I=0 TO 15:M=1:D$="":FOR B=1 TO 4:D$=CHR$((I AND M)>0 AND DOTCHAR OR 32 AND (I AND M)=0)+D$:M=M+M:NEXT B:C$(I)=D$:C$(I16)=D$:I16=I16+16:NEXT I
1122 FOR I=0 TO 255:B$(I)=C$(I AND &HF0)+C$(I AND &HF):NEXT I
1130 CLS:LOCATE ,,0
1140 FOR X=1 TO 19 STEP 9
1150 FOR Y=1 TO 73 STEP 8
1160 RM=7+(X=19):CM=8+(X=19 AND Y=73)
1162 CHAR$=INKEY$:IF CHAR$<>"" THEN 1180
1165 LOCATE X+6,Y:PRINT CUR$;:FOR R=RM TO 0 STEP -1:LOCATE X+R,Y:PRINT LEFT$(   "        ",CM);:NEXT R
1170 CHAR$=INKEY$: IF CHAR$="" THEN 1165
1180 CODE =ASC(CHAR$):IF CODE=0 THEN CODE=ASC(RIGHT$(CHAR$,1))+300
1190 IF (CODE = 8 OR CODE=375) AND Y>8 THEN Y=Y-8:GOTO 1160
1195 IF CODE = 372 AND X>9  THEN X=X-9:GOTO 1160
1197 IF CODE = 377 AND Y<66 THEN Y=Y+8:GOTO 1160
1198 IF CODE = 380 AND X<19 THEN X=X+9:GOTO 1160
1199 IF CODE>=300 OR CODE =8 THEN 1160
1200 ADR = BASEADR + (CODE*BYTESPERCHAR)
1260 FOR ROW=0 TO RM:LOCATE X+ROW,Y:PRINT LEFT$(B$(PEEK(ADR+ROW)),CM);:NEXT ROW
1265 NEXT Y:NEXT X
1270 GOTO 1140
1410 REM Initialize display
1420 SCREEN 0:SCREENWIDTH=80
1430 RETURN
```
{% endraw %}

## COLOUR.DOC

{% raw %}
```
typ colour.txt
GETTING MORE COLOUR FOR YOUR ADAPTER!
-------------------------------------

By:  Andrew Tuline & Byron Sheppard


     Are you feeling limited with 4
colour graphics? Does the hi-res
mode look a little drab? Well, there
are ways to add excitement to your
monochrome and colour graphics. Among
them are artifacting and dithertizing,
two techniques used widely on other
colour computers. 
     Unfortunately for the RGB monitor
owner, those two methods have draw-
backs. In order to understand why, we
must first examine the differences
between the various types of colour
displays used.
     The colour television is the 
most widely used and also the poorest
quality display.  This is due to the
fact that all colour and synchro-
nization signals are combined to form
a single composite video signal. This
is then mixed with a higher frequency
signal, usually channels 2 or 3, and
applied to the  T.V.'s antenna
terminals. From here the T.V. converts
it back to its original form.  This
extra (and redundant) handling 
greatly reduces picture quality.
     The composite video monitor is
a step up from the T.V. The major
difference between the two is that
the composite signal described earlier
does not have to be converted to T.V.
frequencies. This then cuts down on
one of the conversion processes, ther-
eby reducing distortion.  Unfortunate-
ly, due to the complexities of the 
composite video signal, this type
of monitor still is not very good.
     The RGB monitor, recently intro-
duced to personal computing, is the
highest quality colour display
currently available. The reason for
this is that all of the signals are
sent to the monitor on separate wires.
Since this is the way that all the 
monitors actually USE the signals,
the whole series of combining,recom-
bining, and splitting done in the
previous two colour displays is
eliminated.  This simple and straight-
forward approach effectively results
in the RGB type of monitor having a
much higher picture quality.

            Artifacting
   
     The composite monitor and T.V., 
while having lower resolution than the
RGB, are capable of displaying more 
colours by taking advantage of faults
in the composite video signal. This
process is known as artifacting, and 
is the simplest method of increasing 
the number of colours for the display.
It involves drawing lines on alternate
even or odd columns.  Magenta, for
example, appears red if drawn on even
columns and blue if drawn on odd
columns. Unfortunately, this will not
work with RGB monitors.
(See last paragraph for exception.)

Below is a table of colours available
when using this technique.

Normal      Even         Odd
colours    columns      columns
      
Green       Red'         Green'
Red         Red''        Blue
Brown       Red'         Green''
Cyan        Black        Cyan
Magenta     Red          Blue
White       Brown        Cyan

The quotation marks beside the colours
represent a slightly different shade
of the original colour.

        Dithertizing

The next step in adding more colours
to your display is to use a technique
called dithertizing. It involves
setting points in a checkerboard
pattern of different colours. You
could, for instance, set all even
columns and rows to red, all odd rows
and columns to green, and the rest to
yellow, producing some alternate
colour.  Since this technique doesn't
depend on "faults" in the video
signal, it will work on RGB type
monitors.  The main drawback of this
technique is the increased time
necessary to draw a picture. However,
with the use of assembly language 
subroutines and/or preset shape
tables, you could speed up any
graphics action.

       Some Program Examples
   
     Using artifacting, the following
short program will show lots of 
colours in the medium resolution mode.

10 SCREEN 1,0
20 FOR I=0 TO 50
30 LINE (I,0)-(I,50),RND*4
40 NEXT
50 GOTO 20

It is even possible to turn the
"hi-res" monochrome mode into a multi
coloured spectacle with a change in
line 10.
 
10 SCREEN 2:OUT 984,&HA:OUT 985,&H32

OUT 984,&HA- Selects 320x200 colour
             graphics.
OUT 985,&H32- is binary 00110010
                          ^^  ^
     selects cyan palette-!!  !
     selects intensified---!  !
     select green backgnd.----!

The last addition will allow an RGB
monitor to use the standard 3 colour
palette. Otherwise, when using the
composite video input, there are many
colours available, even in this mode.

For more information, please refer
to pages 2-57 to 2-59 of the Technical
Reference Manual. More advanced 
programmers should also refer to the
BIOS video section starting on page
A-43.

     There is a device available for 
owners of RGB monitors which will
allow the use of the techniques
previously described. It is called an
N.T.S.C. demodulator, and converts the
composite video signal to RGB format.
The demodulator is manufactured by
Electrohome (model# I-1302) and is
available from the Byte shop for about
$100. Incidentally, the N.T.S.C. 
module enables you to attach your RGB
monitor to a video recorder or T.V.
tuner. In this case, it makes an 
excellent television monitor.


     
    MEDIUM RESOLUTION GRAPHICS MODE
    -------------------------------

          By: Andrew Tuline


     It   seems  someone  has  finally
found the 160 X 100 graphics mode I've
been having so much trouble with. It's
in the Dec.  82  issue  of  Dr.  Dobbs
Journal   by  John  Seal  of  Franklin
Indiana.

     Starting in  the  80  X  25  text
mode,  the  user  must  split a single
character    into    foreground    and
background  by  poking  character  222
into the display buffer. Then the 6845
CRT controller is set to  squeeze  the
four  video  pages  onto  one  screen,
effectively  giving  100   points   of
vertical   resolution.   To   set  the
points, the user must set  either  the
foreground,  or  background attributes
depending   on  the  location  of  the
character.   Below  is  a  copy of the
program submitted by the author.

100 '
110 'Set up low resolution 160 X 100
115 '    16-color graphics mode
120 '
130 SCREEN 0 : WIDTH 80          ' set up 80 X 25 alpha
140 KEY OFF : CLS                ' clear screen
150 OUT &H3D8,9                  'disable blink attribs
160 A%=&H3D4 : D%=&H3D5          ' crt controller ports
170 OUT A%,4 : OUT D%,&H7F       ' vertical total
180 OUT A%,6 : OUT D%,&H64       ' vertical displayed
190 OUT A%,7 : OUT D%,&H70       ' vert sync position
200 OUT A%,9 : OUT D%,1          ' max scan line addr
210 DEF SEG=&HB800               ' display buffer seg
220 FOR CC%=0 TO &H3FFE STEP 2   ' all character codes
230 POKE CC%,&HDE : NEXT         ' set to special char
240 FOR AT%=1 TO &H3FFF STEP 2   ' all attributes
250 POKE AT%,0 : NEXT            ' preset to black
260 '
270 ' Compute offset into display
275 '   buffer, based on X and Y
280 '
290 DEF FNOFFSET%(X%,Y%) =160 * Y% + (X% OR 1)
300 '
310 END

        Addenda
        -------

     An easy way to set the width to 40 while in 
screen 2 and then converting back without clearing
the screen or using get/put graphics is by typing:

def seg=&H40:poke &H49,4 'sets width 40
def seg=&H40:poke &H49,6 'sets width 80

     There is a video data area used by the BIOS
in Segment &H40 starting at address &H49 to 
address &H66. Again, refer to the technical manual
page A-3 for further information.

     An interesting mode of resolution I found
a long time ago while in screen 2 is as follows:

out 984,&H18

This is similar to the 160 X 100 mode shown above,
but unfortunately I have been unable to decode the
colour pattern.

     Also, the user could try to change the 
parameters of the 6845 Display Chip itself. There
are 19 registers in the 6845. 18 of them are 
addressed by the first one by the following. For
example, if we wanted to put a &H64 to register
6 we would type the following:

out &H3d4,6     ;set address register to point
                ;to register 6
out &H3d5,&H64  ;put &H64 into register 6 of 
                ;display chip.

Each of these registers controls different 
parameters for the display, such as the 
starting address of the display, the cursor
address, the total number of lines displayed
and so on. See page 2-56 of technical manual.

     Finally, to wrap it up, I'd like to say that
although I was initially dismayed at the resolution
of the colour graphics on the PC, I also found that
to do any reasonable animation that too many pixels
causes the speed to reduce drastically. While we may
not have 16 shades of each colour as on the Atari,
we do have enough to keep us busy. Maybe the next
version of the Flight Simulator will allow the
owners of RGB monitors to also enjoy the colour
of flight.


SIG/Access: 
```
{% endraw %}

## CPCPRO.DOC

{% raw %}
```
typ cpcpro

How to Print Screen from a Basic Program
(C) Copyright 1982, Peter Norton, author of The Norton Utilities for the IBM
PC)

When BASIC is operating on the IBM Personal Computer, the "print-screen" 
function doesn't work.  This article shows how your BASIC programs can perform
a print screen operation, and gives you an opportunity to learn more about how
the IBM PC works.

Before we explain it all, here is how to print-screen in BASIC.  First, you  
must set up a print-screen routine by executing these instructions, once:
        DEF SEG = 4095
        POKE 0, 205   :   POKE 1, 5   :   POKE 2, 203
        PRINT.SCREEN = 0
Then, your programs can print the screen contents at any time, by executing:
        CALL PRINT.SCREEN
As long as the "DEF SEG" hasn't been changed, then CALL statement will print
the current screen display.

This bit of BASIC program doesn't make the "PrtSc" key work-- it lets your
programs perform the print-screen function.  Your program must decide when to
print the screen, perhaps by acting on a special keystroke.

To understand how this works, we have to touch on some of the most fundamental
parts of the IBM PC.

Built into the IBM PC, in the read-only-memory, or ROM, are many service
routines that perform operations that are basic to the computer; among them is
the print-screen operation.  These services are activated by a mechanism known
as a "software interrupt," and print-screen is requested with interrupt number
5.

The programs that service the keyboard are also found in the ROM.  The ordinary
keyboard service program always checks for the "PrtSc" key: when this key is
pressed, the keyboard program performs an interrupt #5, and the screen is
printed.  The keyboard service routine uses interrupt #5, but doesn't own it
exclusively-- any program that knows how to request interrupts can use it.

When BASIC is running, BASIC takes charge of the keyboard, and so the regular
ROM keyboard program doesn't see the PrtSc key, and BASIC ignores this key.
This prevents us from using the PrtSc key to print the screen.

So, the print-screen operation is not available in BASIC, ordinarily.  But
BASIC has the ability to accept and perform machine language subroutines.  If
we set up a program that will request interrupt 5, then we can CALL it, and
print the screen.  That is what the BASIC program above does.  

Here's how it works.  Our machine language program consists of only two
instructions: one to request interrupt five, and the other to return to the
caller.  The "interrupt" instruction is two bytes long, and the "return" is
one, for a total of three bytes.  The three POKE statements above create those
three bytes.  The numeric values 205 and 5 are the interrupt #5 instruction,
and the value 203 is the return instruction.

There is one messy little problem that occurs whenever machine-language
programs are used in BASIC-- where to put them.  There is no one clean simple
way to deal with this problem; it has to be solved differently depending upon
the size of the computer's memory, and upon what else a BASIC program might do
with "DEF SEG" related statements.

The example above is set up for a computer with 64K of memory, and places the
print-screen program in the last 16 bytes of memory.  For another memory size,
"X" expressed in kilobytes, or "K," this formula will do the same 
        DEF SEG = X * 64 - 1
If X is 64K, then this formula works out to 4095, which is the number used in
the example above.
    
If your programs set the "DEF SEG" for any other reason, then it will have to
be coordinated with its use for the PRINT.SCREEN program, or any other such
machine language program.  When PRINT.SCREEN is called, DEF SEG must be set to
the same value used when the program was created with the POKE statements.



Printer Bit Image Graphics Demonstration 
by Dave Browning

This program demonstrates a portion of the Epson printer graphics capabilities
when the printer is connected to an IBM PC.

This program has been tested for an Epson MX-100 which comes with the
GraftraxPlus option standard.  Although not tested, the program should also 
run as is for an Epson MX-80 with the Graftrax option.  The program should 
also run as is for an Epson MX-70.  (The MX-70 has only normal density bit 
image graphics mode, as opposed to dual selectable modes on the MX-80 with 
Graftrax or the MX-100, but this program does not utilize the higher density 
mode.)

The reason for the WIDTH "LPT1:",255 statement in line 120 (use this statement
as is even if you have an 80 column printer), and for opening the printer
"LPT1:" as file #1 in line 130 is to suppress the line feed that Basic and
Basica automatically send after each carriage return (ASCII 13).  Since Basic
does not check context to distinguish between an actual carriage return and a
character with the value 13 used for other purposes, it adds a line feed (ASCII
10) after every character 13 output with a PRINT, PRINT #, PRINT USING, PRINT #
USING, or WRITE # statement.  The WIDTH #1,255 statement suppresses the
linefeed normally added to the end of lines also, so the program has to add it
where needed (the CHR$(10) at the end of line 3000).

This subject is addressed in part in several places in the IBM Basic manual. 
See the OPEN and WIDTH statements as well as the print and write statements
mentioned above.  You may test this by removing the OPEN and WIDTH statements
from the program and changing all PRINT #1 xxxxx statements to LPRINT xxxxx.

If this program still seems to be putting line feeds in strange places, you
might check your printer switches for proper setting.  Switch SW2-3 on the MX-
80 and MX-100 can be set to automatically add line feeds within the printer no
matter what the computer does.  See your printer manual for details of getting
at and setting the proper switch.

After running the program as is, you may want to experiment with different
settings of the parameters such as PRTLENGTH.  For MX-100s and MX-80s with 
GraftraxPlus, changing the 75 in line 2020 to 76 will set the printer to high 
resolution graphics (twice as many dots per inch).  Those with the MX-80 and 
MX-100 GraftraxPlus printer manual can now proceed with the excellent 
tutorials on bit graphics included in it.  Since the manual does not have a lot
of information on the IBM PC connection, this program was developed to show how
to overcome the "automatic linefeed" types of problems.

One additional note:  if you stop the program during execution with a control-
break, the printer may be in the middle of graphics mode and be waiting for
more graphics characters.  If you then try to RUN the program (with or without
changes) again, the printer may seem to do weird things until the buffer and
the program are back in synch.  Everything will be OK if the program runs to
completion, or if you turn the printer power off momentarily before reRUNning
the program.


100 '*** PRINTER BIT IMAGE GRAPHICS DEMONSTRATION ***
105 '***    PROVIDED BY DAVE BROWNING 1/10/83    ***
110 'set up BASIC to suppress automatic line feeds
120 WIDTH "LPT1:",255
130 OPEN "LPT1:" AS #1
140 GOTO 1000
200 'subroutine to output one character to printer
210 PRINT #1, CHR$(X);
220 RETURN
1000 ' ***  PRINTER TEST PROGRAM  *****
1010 DEFINT A-Z       'runs faster using integers
1020 CHRSTART = 0     'first graphics character to print
1030 CHREND = 255     'last graphics character to print
1040 PRTLENGTH = 50   'number of times to repeat the
         graphics char
1050 PRTLEN1 = PRTLENGTH MOD 256
        'printer expects two numbers-first remainder
1060 PRTLEN2 = PRTLENGTH \ 256
        'then number of "256's"
2000 FOR GRAFCHAR = CHRSTART TO CHREND 
        'repeats for graphics characters
2010 X = 27 : GOSUB 200   'sends <ESC> character
2020 X = 75 : GOSUB 200 
        'sends char K to shift printer to graphics
2040 X = PRTLEN1 : GOSUB 200 
        'sends n1 (# bit images modulo 256)
2060 X = PRTLEN2 : GOSUB 200
        'sends n2 (# bit images times 256)(n2 max is 7)
2070 FOR I = 1 TO PRTLENGTH 'send same character PRTLENGTH times
2080   X = GRAFCHAR : GOSUB 200 'send the character
2090 NEXT I
3000 PRINT #1, "   X = ";X;CHR$(10);
         'notes which graphics character was
3010 'printed, and sends line feed.
         This flushes the printer buffer and
3020 'returns the print head to the
         beginning of the next line.
3030 NEXT GRAFCHAR  'loop back for next character
3040 CLOSE #1 'resets the WIDTH statement to default
3050 END

PC Keyboarding for the Handicapped
by Mike Todd

A couple of months ago I received a letter from someone I greatly respect. 
Since he is handicapped, he is unable to press two keys on the keyboard
simultaneously. He asked if there was a way to create a CTRL, SHIFT, and/or ALT
lock through the keyboard so that he might be able to do a system reboot, use
Wordstar (or any other program that requires simultaneous pressing of multiple
keys), and whatever anyone else can do on a PC.  I mentioned the need at a
Capital PC general meeting and asked that someone with a little spare time just
take a look at how it might be done. John Black came to the rescue!  He didn't
just tell us how to do it but produced a sophisticated program and some really 
good documentation too! Thank you, John!

The program, called KEYLOC.EXE, along with the source code and documentation,
will be on the next Capital PC Software Exchange disk ($5 and stamped, self
addressed mailer to Capital PC Software Exchange, PO Box 6128, Silver Spring,
MD 20906).  The following is taken from the introduction to John's
documentation:

    Keyloc is a patch to the BIOS keyboard routine. It modifies the operation
    of the Alt, Ctrl, Left Shift and Right Shift keys. It allows one finger
    typing by locking those keys in their shifted state.

    Normally the Ctrl, Alt, Left Shift, and Right Shift keys have to be held
    down with one finger, while another finger is used to type another key. For
    example, if a program requires you to enter a ^P, you must hold down the
    Ctrl key with one finger, then depress the "P" key with another.

    When Keyloc is loaded into memory--this is done in DOS before executing the
    program--it changes the way these keys operate. To type in a ^P, you first
    type and release the Ctrl key. This locks the Ctrl key in its shifted
    state. Next the "P" key is depressed and released.  This enters a ^P.
    Depressing Ctrl again takes the key from its shifted to unshifted state.

    Keyloc gives an audio signal so the user can tell when he is shifting or
    unshifting a key. The first time the Ctrl key is depressed, a low tone
    followed by a high tone is sounded. This signals that the key has been put
    in the shifted state. The next time the Ctrl key is depressed, a low tone
    followed by a high tone is sounded. This signals that the key has been
    returned to the unshifted state.

I've tried John's program in DOS, from within Basic, with a Basic program,
right now with Volkswriter running, and with Wordstar. I haven't found a single
bug and the audible tones are separated enough to be useful, at first, but not
so much that they would become annoying after long hours at the keyboard. As a
matter of fact, some users who would just like to strike a single key at a time
may not find the new procedure too hard to accommodate.


Some Useful BASIC Function Definitions
by Harry Foxwell, SigSTAT chairman, Capital PC

Conspicuously missing from IBM Basic are predefined functions for computing the
maximum and the minimum of two numbers, and a function for converting a
character string from lowercase to uppercase.

Although it is fairly simple to code these functions with a few lines using IF
statements, using predefined functions makes the overall program more compact
and easily readable.

The maximum and minimum of two values can be computed using the following
functions:

    DEF FNMAX(X,Y) = X*ABS(X>=Y) + Y*ABS(X<Y)
    DEF FNMIN(X,Y) = X*ABS(X<=Y) + Y*ABS(X>Y)

A function that converts a lowercase letter to its uppercase equivalent is:

    DEF FNUCS$(A$) = CHR$(ASC(A$)+32*(A$>="a" AND A$<="z"))

Each of these function definitions depends upon the fact that the comparison
operators (<, >, and =) yield a value of 0 when the comparison is FALSE, and
yield -1 when the comparison is TRUE. These values, expressed simply as the  
original comparison, may be used in the same way as any other BASIC variable.



SIG/Access: 
```
{% endraw %}

## CRC.TXT

{% raw %}
```
PC-SIG Disk No. #28, version v1.1 

The following is a list of the file checksums which should be produced by
the CRCK4 program on disk #9 (and others).  If the CRC numbers do not match
you may have a bad file.  To use type:  CRCK4 <filespec>

CRCK4 output for this disk:


CRCK ver 4.2B (MS DOS VERSION )
CTL-S pauses, CTL-C aborts

--> FILE:  BIGTYPE .BAS         CRC = 2E 66

--> FILE:  DDATE   .COM         CRC = EB B1

--> FILE:  DISKMODF.BAS         CRC = 14 9B

--> FILE:  JUMBLE  .BAS         CRC = 61 7D

--> FILE:  PALLETTE.BAS         CRC = 96 2F

--> FILE:  SYSTAT  .COM         CRC = F6 0D

--> FILE:  SPEED411.COM         CRC = 00 00

--> FILE:  TIMING  .BAS         CRC = 1B CC

--> FILE:  HALS    .DOC         CRC = 5D C8

--> FILE:  VDEL    .COM         CRC = 8A D8

--> FILE:  WAIT    .COM         CRC = 28 C8

--> FILE:  GUMUP1  .DOC         CRC = F1 3E

--> FILE:  SD      .COM         CRC = D6 C7

--> FILE:  SYSTAT  .DOC         CRC = 17 58

--> FILE:  SDIR    .EXE         CRC = 1D 51

--> FILE:  CD      .COM         CRC = A5 13

--> FILE:  LF      .COM         CRC = 51 B7

--> FILE:  MEMPEEK .BAS         CRC = 1F 16

--> FILE:  FK      .COM         CRC = 7C A0

--> FILE:  FK      .DOC         CRC = 8C D1

--> FILE:  UNPROT2 .TXT         CRC = 70 EE

--> FILE:  ARTILL  .BAS         CRC = A9 43

--> FILE:  GRAFGE  .BAS         CRC = B4 89

--> FILE:  GRAFGE  .DOC         CRC = C0 8D

--> FILE:  GSDUMP  .BAS         CRC = 54 62

--> FILE:  SQUISH  .EXE         CRC = 7C 35

--> FILE:  SQUISH  .SRC         CRC = 6E 9C

--> FILE:  RESCMD  .BAS         CRC = DF 1B

--> FILE:  RESCMD  .DOC         CRC = D9 79

--> FILE:  RESCMDCK.BAS         CRC = 69 F6

--> FILE:  COLOUR  .DOC         CRC = 7F E4

--> FILE:  CPCPRO  .DOC         CRC = 63 70

--> FILE:  SQUISH  .DOC         CRC = 33 F0

 ---------------------> SUM OF CRCS = 6D E6

DONE

These and other Public Domain and user-supported programs from:

PC Software Interest Group
1125 Stewart Ct  Suite G
Sunnyvale, CA 94086
(408) 730-9291
```
{% endraw %}

## DISKMODF.BAS

{% raw %}
```bas
100 'diskmodf v1.2
110 GOTO 280
140 '
150 ' The following are the slow subroutines which might be converted to ASM
160 COLOR 7,0
170 BM24=BYTE MOD 24:LOCATE BYTE\24+2,BM24*2+1:PRINT HX$(CHAR);:LOCATE ,BM24+51:PRINT AS$(CHAR);:RETURN
180 LOCATE 24,21:PRINT Z;"  ";:RETURN
190 LOCATE 1,42:PRINT BYTE:CHAR=PEEK(BUF+BYTE):LOCATE 24,35:PRINT CHAR;" ";:RETURN
280 CLEAR ,&H4B00:KEY OFF
300 DEFINT A-Z
390 DATA &h55
400 DATA &h8b,&hec
420 DATA &hbb,&h00
430 DATA &h4c,&h8b,&h76,&h06,&h8b
440 DATA &h0c,&h8b,&h76,&h08,&h8b
445 DATA &h14,&h8b,&h76,&h0a,&h8b,&h04,&h8a,&he0,&hb0,&h01
450 DATA &hcd,&h13,&h8a,&hc4,&hb4,&h00,&h89,&h04,&h5d
460 DATA &hca,&h06,&h00
500 INT13=&H4B00:FOR I=INT13 TO INT13+36:READ J:POKE I,J:NEXT I
505 BUF=&H4C00
512 DATA &h8b,&hdc,&hb4,&h08,&hcd,&h21,&h84,&hc0,&h74,&hf8,&h32,&he4,&h8b,&h5f,&h04,&h89,&h07,&hca,&h02,&h00
514 IN=&H4B80:FOR I=IN TO IN+19:READ J:POKE I,J:NEXT I
515 CLS:COLOR 7,0:LOCATE 12,13
517 PRINT "DiskModf V1.2 - Disk sector viewing and modification"
518 LOCATE 15,7:PRINT "Improved by Hal Sampson from original program by John Vandegrift"
520 DIM HX$(255):DIM AS$(255)
530 FOR I=0 TO 255:HX$(I)=RIGHT$("0"+HEX$(I),2):AS$(I)=CHR$(I):NEXT I
540 FOR I=7 TO 13:AS$(I)=CHR$(I+64):NEXT I
550 AS$(28)="\":AS$(29)="]":AS$(30)=CHR$(24):AS$(31)=CHR$(25)
560 NOTREAD=1
570 GOSUB 910
650 CLS:LOCATE 2,37:PRINT"DiskModf"
660 IF NOTREAD THEN LOCATE 23,30:PRINT "Sector not declared!!":GOTO 690
670 LOCATE 23,30:IF NOSIDES=1 THEN PRINT "Single-sided diskette":GOTO 690
680 PRINT "Double-sided diskette"
690 LOCATE 10,30:PRINT "(S)elect diskette sector"
700 LOCATE 11,30:PRINT "(V)iew/alter sector"
710 LOCATE 12,30:PRINT "(W)rite sector back to diskette"
730 LOCATE 13,30:PRINT"(Q)uit"
740 LOCATE 16,30:PRINT "Choice?";
745 CALL IN(I):I=I AND &H5F
747 IF I=83 THEN GOSUB 910
748 IF I=86 THEN GOSUB 1210
749 IF I=87 THEN GOSUB 790
750 IF I=81 THEN STOP
770 GOTO 650
790 REM         Put Sector on diskette
860 IF NOTREAD THEN RETURN
865 PRINT:PRINT:PRINT "Are you sure you want to alter disk? [N]";
868 CALL IN(I): IF (I AND &H5F) <>89  THEN RETURN
870 OP=3
880 CALL INT13 (OP,HDDR,TRSC)
885 IF OP<>0 THEN PRINT " retry";:OP=0:CALL INT13(OP,HDDR,TRSC):GOTO 870
890 RETURN
910 '
960 CLS:LOCATE 2,37:PRINT"DiskModf"
970 LOCATE 10,10:INPUT "Select drive (A-D)";DRIVE$
975 IF DRIVE$="" THEN 970
980 DRIVE=(ASC(DRIVE$) AND &H5F)-&H41
1000 IF DRIVE <0 OR DRIVE >3 THEN 970
1010 HDDR=256+DRIVE:TRSC=1:TRIES=3:NOTREAD=1
1020 OP=2:CALL INT13 (OP,HDDR,TRSC) 'check for single/double sided
1040 IF OP = 0 THEN NOSIDES=HDDR/256 +1:GOTO 1080
1050 TRIES=TRIES-1:IF TRIES=0 THEN 1055 ELSE OP=0: CALL INT13(OP,HDDR,TRSC):GOTO 1020
1055 IF HDDR>255 THEN TRIES=3:HDDR=DRIVE:GOTO 1020
1060 LOCATE 15,10:INPUT "Diskette error. C/R to go on.";I
1080 LOCATE 11,10:INPUT "Select track (0-39)";TRACK
1090 IF TRACK<0 OR TRACK>39 THEN 1080
1100 LOCATE 12,10:INPUT "Select sector (1-8)";SECTOR
1110 IF SECTOR<1 OR SECTOR>8 THEN 1100
1120 HEAD=0:IF NOSIDES=1 THEN 1150
1130 LOCATE 13,10:INPUT "Select side (0-1)";HEAD
1140 IF HEAD<0 OR HEAD>1 THEN 1130
1150 LOCATE 20,10:PRINT "Inputs satisfactory [Y]?"
1160 I$=INKEY$:IF I$="" THEN 1160 ELSE IF I$="N" OR I$="n" THEN 960
1170 HDDR=(HEAD*256)+DRIVE:TRSC=(TRACK*256)+SECTOR
1180 OP=2:CALL INT13(OP,HDDR,TRSC)
1185 IF OP<>0 THEN PRINT " retry";CHR$(7):OP=0:CALL INT13(OP,HDDR,TRSC):GOTO 1180
1187 NOTREAD=0
1190 GOSUB 1210 'always display it
1200 RETURN
1210 '
1280 IF NOTREAD THEN RETURN
1290 CLS
1300 LOCATE 1,1:PRINT"Drive ";DRIVE$;"  Side";HEAD;" Track";TRACK TAB(28) "Sector";SECTOR;" Byte";0
1310 BYTE=0
1320 GOSUB 1630
1330 GOSUB 190
1340 LOCATE 24,1:PRINT "New Value (Decimal)";
1350 COLOR 0,7:LOCATE 25,1:FOR II=24 TO 27:PRINT CHR$(II);:NEXT
1360 PRINT " - Cursor    No.+C/R - new no.    X - eXit";
1370 COLOR 0,7:GOSUB 170:GOSUB 180
1380 CALL IN(A)
1390 IF A=13 THEN CHAR=Z:Z=0:GOSUB 160:GOSUB 1520:GOTO 1370
1400 GOSUB 160
1430 IF A=77 THEN IF BYTE<511 THEN BYTE=BYTE+1:GOTO 1475
1440 IF A=80 THEN IF BYTE<488 THEN BYTE=BYTE+24:GOTO 1475
1450 IF A=75 THEN IF BYTE>0 THEN BYTE=BYTE-1:GOTO 1475
1460 IF A=72 THEN IF BYTE>24 THEN BYTE=BYTE-24:GOTO 1475
1470 IF A=88 OR A=120 THEN RETURN
1475 GOSUB 190
1480 IF A<48 OR A>57 THEN 1370
1490 Z=Z*10+A-48
1500 IF Z>255 THEN Z=0
1510 GOTO 1370
1520 POKE (BUF+BYTE),CHAR
1530 IF BYTE<511 THEN BYTE=BYTE+1
1540 GOSUB 190
1550 RETURN
1630 LOCATE 2,1:FOR A=BUF TO BUF+511 STEP 24:FOR B=A TO A+23:PRINT HX$(PEEK(B));:NEXT B:PRINT TAB(51);:FOR B=A TO A+23:PRINT AS$(PEEK(B));:NEXT B:PRINT:NEXT A
1640 LOCATE 23,17:PRINT "                                ";:LOCATE 23,59:PRINT "                ";:RETURN
```
{% endraw %}

## FK.DOC

{% raw %}
```
************************************************************************
  DOCUMENTATION FOR FK: A FUNCTION KEY HANDLER FOR PC-DOS 1.0 and 1.1
**********************************************************************

I.  Introduction

        This document describes the program FK, a function key handler for
use under IBM PC-DOS versions 1.0 and 1.1.  The program may not work
under other versions of DOS.

        The program was developed under a grant from Userview Corporation.


II.  Rationale

        Under standard PC-DOS, the ten function keys are not used to their
full potential.  The keys are used for simple command line editing, and
several of the functions are duplicated by other keys on the keyboard.
FK allows you to assign strings up to 24 characters in length to each
of the function keys, so you can give an entire command or file name
with a single keypress.

        For those who use the normal PC-DOS command line editing facilities,
FK moves functions not already duplicated to keys on the cursor moving pad.


III.  Using the program

        There are five different actions available with FK.  They all
begin with the command name 'FK'; of course, the FK program (FK.COM) must be
available on the selected disk drive when the command is issued.

        The actions are as follows:

        SHOWING THE DEFINITIONS:  You may display the current definitions
of the ten function keys by giving the command "FK". Control characters
imbedded in the strings are displayed as ^x (just as they are echoed
during command line input) except for carriage return (ENTER), which is
displayed as a leftward-pointing arrow.  Users with a printer may get
a hardcopy of their definitions by pressing CTRL-PRTSC before giving the
FK command.

        REDEFINING A KEY:  You may assign a string to one of the function
keys by giving the command "FK Fn <string>" where n is the number of the
key to assign (1 thru 10), and <string> is the string of characters you
wish to get when you press that key.  For example, "FK F1 DIR" would
assign the directory command "DIR" to function key F1.  You may include
a carriage return in the string by using the vertical line character (|)
wherever you want the CR; for example, "FK F1 DIR|" would do the directory
command immediately upon your pressing F1 (in the previous case, you would
have to press ENTER yourself after pressing F1).  Keys may only be assigned
strings of up to 24 characters in length; strings which are too long will
be truncated without warning.

        SAVING THE DEFINITIONS:  You may save the current definitions of
the function keys to a disk file for later use (see LOADING below).  To
do so, give the command "FK SAVE <fname>" where <fname> is the name of
the file in which to save the definitions.  For example, "FK SAVE MY.KEY"
would save all current key assignments in the file "MY.KEY".  Any valid
filename may be used, but the use of the ".KEY" extension is recommended
for clarity.

        LOADING KEY DEFINITIONS:  You may recover key definitions previously
saved with "FK SAVE" by typing "FK LOAD <fname>", where <fname> is the
name of the file containing the key definitions.  You should *only* use
this command on files which have been created by "FK SAVE"; if you don't,
FK will probably not accept the file.  The key definitions which are
automatically loaded with FK when it is first called should be available
in the file "STD.KEY" on the disk with this document.

        GETTING HELP: You can get a rundown of these command formats by
typing "FK HELP".


IV.  Notes

        Abbreviations: You can use S, L, and H as abbreviations for
"SAVE", "LOAD", and "HELP", respectively.  For example, you might type
"FK L STD.KEY" to recover those definitions.

        Warning concerning key files:  Attempting to load key files
which were not created with "FK SAVE" or which were altered with DEBUG
or some editor may result in system crashes.

        Command line editing facilities:  As mentioned, the old actions
assigned to the function keys have been moved to the cursor keypad.
F1 (copy one char from template) has always been duplicated by the cursor-
right key.  With FK active, the skip/copy function of F2 is moved to
the cursor-up key.  Copy-remaining (F3) is moved to the END key.
Skip/delete (F4) is now assigned to the down-arrow key. Move-displayed (F5)
has been reassigned to the HOME key.

        F6 was used by DOS to issue the end-of-file mark, ^Z.  The
standard key definitions leave ^Z assigned to F6, but if you need to
change this, you can always signal end-of-file by typing CTRL-Z.


V. Additions to revision 2 (28 July 1982)

        The following enhancements have been added to FK as of 28 July 1982.
Thanks to Webb Blackman, Jr. , and Michael Sullivan for suggestions and
comments.

        * QUIET MODE: To prevent extraneous output during FK processing
          (for example, the possibly unwanted listing of key definitions
          during a "load" in an autoexec file), the 'quiet mode' option
          has been added.  Preceeding any command letter with 'Q' causes
          most output to be suppressed.  Copyright notices and error
          messages will be displayed even if quiet mode is requested.
          Example: "FK QL DEV.KEY" to 'quietly' load the definition file
          "DEV.KEY".

CHANGES AND REVISIONS:

1) Carriage returns are now displayed as a vertical bar instead of
   a left arrow. This change was made since the left arrow is a character
   27 (escape), which many printers use as a "here comes a command"
   signal.

2) The file name you're using to SAVE your definitions is displayed
   at the conclusion of a successful SAVE.  No drive or extension
   spec is displayed, however.

3) The much-demanded FK RESET option is now available.  Typing FK R
   puts FK asleep until another FK command is issued, at which point
   it reawakens (unless that is another FK R, in which case FK
   is awake only a millisecond or so).  Please experiment with this
   option under several systems (EDIX and VOLKSWRITER come to mind)
   to make sure it behaves like you want it to.


            PATCHING FK FOR NONSTANDARD OPERATING SYSTEMS

     FK  is  designed to lodge itself properly in one of two different
operating systems. Standard FK can handle DOS 1.00 and DOS  1.10.  For
any given unusual system (i.e. hard disk, RAM-resident disk, etc.) the
program  may  not  operate properly and may have to be modified as per
the following instructions:

     1.  Boot the oddball operating system.

     2.  Using DEBUG, search segment 60 for the following string:

            3C 3E 3D 3D 3F

         The resulting address is the TABLE address.

     3.  Search segment 60 for the following string:

            92 B4 00 CD 16

        The resulting address is the VECTOR address.

     4.  Note that both the TABLE and VECTOR addresses are offsets in
         segment 60H.  If either of them cannot be found, FK probably
         cannot be patched to run in this environment.

     5.  DEBUG FK.COM

     6.  In the code segment at location 210 are six bytes which must be
         patched to allow for the new operating system.  At 210 and 211 are
         the two "identifier bytes" printed by FK when it signs on
         (i.e. DOS 1.xx-- xx are the ID bytes).  For example, the RAMDrive
         version of FK under DOS 1.1 has "1r" as ID bytes.

     7.  The next two bytes (locations 212-213) must contain the TABLE
         address in normal low - high order.  For example, if the search
         returned address 0B88 for the TABLE address, one might do an
         ECS:212 88 0B

     8.  The next two bytes (locations 214-215) must contain the VECTOR
         address in low - high order, much as in the previous example.

     9.  When the patches have been made, use W to save the new version
         of FK.COM.  One should, of course, back up the program first
         in case something went wrong.

     When following this patching procedure, FK will  work  under  the
desired  operating  system as well as under vanilla DOS 1.10. If it is
necessary to use something else  besides  1.10,  the  patches  may  be
performed  at  location  216  as  well, allowing two oddball operating
systems.

     The author assumes absolutely no responsibility  for  anguish  or
lost data caused by attempting to patch FK.

KNOWN PATCHES:

for DOS 1.00:                  ecs:210 30 30 18 05 C7 00
for JEL/JFORMAT:               ecs:210 31 6A 88 0B 95 00
for JEL/JFORMAT v1.62:         ecs:210 31 6A 88 0D 95 00
for Microsoft RAMDrive:        ecs:210 31 72 48 06 95 00

```
{% endraw %}

## GRAFGE.BAS

{% raw %}
```bas
1 '      *************
2 '      ** GRAFGEN **
3 '      *************
4 '
5 '      by Wes Meier
6 '      230 B Park Lake Circle
7 '      Walnut Creek, CA 94598
8 '
9 '      June/July 1982
10 '
11 '     Requires Color Adapter, BASICA,
12 '     and, optionally, IBM or Epson
13 '     (MX-80 or MX-100) equipped with
14 '     the GRAFTRAX ROMs.
15 '
16 KEY OFF
17 WIDTH 40
18 SCREEN 1,0
19 COLOR 1,0
20 DEFINT A-Z
21 DIM GRID (700),REDBOX (20), YELLOWBOX (17)
22 CLS
23 DEF FNGC(G,C)=(G-128)*8+C
24 DEF FNEXC(C)=2^(7-C)
25 Q$=CHR$(34)' Quote Marks
26 ' Set up graphics grid.
27 FOR X=0 TO 73 STEP 9
28 LINE (X,0)-(X,72),1
29 NEXT
30 FOR Y= 0 TO 73 STEP 9
31 LINE (0,Y)-(72,Y),1
32 NEXT
33 GET (0,0)-(72,72),GRID
34 CLS
35 ' Set up cursor.
36 LINE (2,2)-(7,7),2,BF
37 GET (1,1)-(8,8),REDBOX
38 CLS
39 ' Set up graphics block.
40 LINE (1,1)-(8,8),3,BF
41 GET (1,1)-(8,8),YELLOWBOX
42 GOSUB 45
43 GOTO 225
44 ' Set up Main Menu Key Vectors.
45 ON KEY(1) GOSUB 66
46 ON KEY(2) GOSUB 73
47 ON KEY(3) GOSUB 80
48 ON KEY(4) GOSUB 86
49 ON KEY(5) GOSUB 89
50 ON KEY(6) GOSUB 100
51 ON KEY(7) GOSUB 97
52 ON KEY(8) GOSUB 108
53 ON KEY(9) GOSUB 111
54 ON KEY(10) GOSUB 122
55 ON KEY(11) GOSUB 199
56 ON KEY(12) GOSUB 209
57 ON KEY(13) GOSUB 214
58 ON KEY(14) GOSUB 219
59 ' Turn on Key Trapping.
60 FOR X=1 TO 14
61 KEY (X) ON
62 NEXT
63 RETURN
64 ' Main Menu Key Subroutines
65 ' F1 Sub. Set Block.
66 T=PEEK(FNGC(GN,ROW))
67 IF T AND FNEXC(COL) THEN 71' Block already set.
68 PUT (COL*9+1,ROW*9+1),YELLOWBOX,PSET'Set block.
69 T=T+FNEXC(COL)
70 POKE(FNGC(GN,ROW)),T'Put it in memory.
71 RETURN
72 ' F2 Sub. Reset block.
73 T=PEEK(FNGC(GN,ROW))
74 IF (T AND FNEXC(COL))=0 THEN 71' Cell not set. Return.
75 PUT (COL*9+1,ROW*9+1),YELLOWBOX' Reset Block (XOR).
76 T=T-FNEXC(COL)
77 GOSUB 204' Put cursor there.
78 GOTO 70'Put in mem. and return.
79 ' F3 Sub. Fill grid.
80 K=255' All dots on.
81 FOR ROW=0 TO 7
82 POKE FNGC(GN,ROW),K
83 NEXT
84 RETURN 277
85 ' F4 Sub. Clear grid.
86 K=0' All dots off.
87 GOTO 81' Use fill routine.
88 ' F5 Sub. Fill Current column.
89 FOR ROW=0 TO 7
90 P=PEEK(FNGC(GN,ROW))
91 IF (P AND FNEXC(COL)) THEN 94
92 P=P+FNEXC(COL)
93 POKE FNGC(GN,ROW),P
94 NEXT
95 GOTO 84
96 ' F7 Sub. Fill Current Row.
97 POKE FNGC(GN,ROW),255
98 GOTO 84
99 ' F6 Sub. Reset Current Column.
100 FOR ROW=0 TO 7
101 P=PEEK (FNGC(GN,ROW))
102 IF (P AND FNEXC(COL))=0 THEN 105
103 P=P-FNEXC(COL)
104 POKE FNGC(GN,ROW),P
105 NEXT
106 GOTO 84
107 ' F8 Sub. Reset Current Row.
108 POKE FNGC(GN,ROW),0
109 GOTO 84
110 ' F9 Sub. Save Set on Disk.
111 CLS
112 LOCATE 12,1
113 INPUT "Enter Filespec ";FS$
114 IF LEN(FS$)>14 THEN BEEP:GOTO 111
115 PRINT"Is "Q$FS$Q$" correct (Y/N) ?";
116 A$=INKEY$:IF A$="" THEN 116
117 IF A$="Y" OR A$="y" OR A$=CHR$(13) THEN 119
118 IF A$="N" OR A$="n" OR A$="0" THEN 111 ELSE BEEP:GOTO 116
119 BSAVE FS$,0,1024
120 RETURN 249
121 ' F10 Sub. Select Alternate Menu.
122 RETURN 124
123 ' Set up Alternate Menu.
124 LINE (1,100)-(318,163),0,BF
125 LOCATE 14,13
126 PRINT"Alternate Menu"
127 LOCATE 15,3:PRINT"F1 Main Menu.      F2  Display Set."
128 LOCATE 16,3:PRINT"F3 Print Set.      F4  End Program."
129 ' Set up Alternate Menu Keys.
130 ON KEY (1) GOSUB 140
131 ON KEY (2) GOSUB 143
132 ON KEY (3) GOSUB 160
133 ON KEY (4) GOSUB 190
134 ' Turn off Keys 5-14.
135 FOR X=5 TO 14
136 KEY (X) OFF
137 NEXT
138 GOTO 138' Pressing the proper "F" key will break this loop.
139 ' F1 Sub. Return to Main Menu.
140 GOSUB 45' Restore Main Key Vectors.
141 RETURN 264
142 ' F2 Sub. Display Set on CRT.
143 CLS
144 FOR X=128 TO 255 STEP 3
145 FOR Y=0 TO 2
146 IF X+Y>255 THEN 148
147 PRINT"#";:PRINT USING "### = "+Q$+"!"+Q$+" ";X+Y;CHR$(X+Y);
148 NEXT:PRINT
149 IF X<>191 THEN 153
150 PRINT"Press any key to continue..."
151 A$=INKEY$
152 IF A$=""THEN 151
153 NEXT
154 PRINT"Press any key to continue..."
155 A$=INKEY$
156 IF A$="" THEN 155
157 CLS
158 GOTO 140
159 '
160 ' F3 Sub. Display Character Set on Printer.
161 ' This routine will function only
162 ' with an IBM or EPSON (MX-80 or 100)
163 ' equipped with the GRAFTRAX graphics
164 ' ROMS!!
165 ' Also, use this routine only if you
166 ' have IBM DOS Version 1.10. Version
167 ' 1.00 has a bug in its printer
168 ' I/O routine.
169 LPRINT CHR$(27)"@"' Reset Printer.
170 FOR X=128 TO 255 STEP 4
171  FOR Y=0 TO 3
172   IF Y+X>254 THEN 183
173   LPRINT "#";:LPRINT USING "### = "+Q$;X+Y;
174   LPRINT CHR$(27)"K"CHR$(8)CHR$(0);
175   FOR Z=0 TO 7
176    BYTE=0
177    FOR B=0 TO 7
178     IF PEEK(FNGC(X+Y,B)) AND FNEXC(Z) THEN BYTE=BYTE + FNEXC(B)
179    NEXT B
180   LPRINT CHR$(BYTE);
181   NEXT Z
182  LPRINT Q$SPACE$(3);
183  NEXT Y
184 LPRINT
185 NEXT X
186 LPRINT CHR$(12)
187 CLS
188 GOTO 140
189 ' F4 Sub. End Program.
190 CLS
191 RETURN 192
192 ' Turn Key Trapping off.
193 FOR X=1 TO 14
194 KEY (X) OFF
195 NEXT
196 END
197 ' Cursor Positioning Subroutines.
198 ' F11 Sub. Cursor Up.
199 IF ROW-1<0 THEN RETURN' At top of grid already.
200 GOSUB 204'XOR Cursor.
201 ROW=ROW-1'Go Up.
202 ' This Sub. erases cursor, if there,
203 ' or sets it, if not there.
204 PUT (COL*9+1,ROW*9+1),REDBOX
205 X=RND*6
206 PLAY"MBMSL64O=X;T255A"' Just for the fun of it.
207 RETURN
208 ' F12 Sub. Cursor Left.
209 IF COL-1<0 THEN RETURN' Already at left side of grid.
210 GOSUB 204' XOR Current cursor.
211 COL=COL-1' Go left.
212 GOTO 204' Set Cursor.
213 ' F13 Sub. Cursor Right.
214 IF COL+1>7 THEN RETURN
215 GOSUB 204
216 COL=COL+1
217 GOTO 204
218 ' F14 Sub. Cursor Down.
219 IF ROW+1>7 THEN RETURN
220 GOSUB 204
221 ROW=ROW+1
222 GOTO 204
223 'Point graphics vector to area just
224 'above BASICA in a 128K system.
225 DEF SEG=0' Point to Bottom of RAM.
226 POKE 124,0
227 POKE 125,0
228 POKE 126,PEEK(&H510)+1
229 POKE 127,PEEK(&H511)+16
230 'The vector at 0000:0510H-0511H points to the start of BASICA's
231 '64K segment.
232 '
233 'Point to Graphics table 64K+1 bytes
234 'above beginning of BASICA.
235 DEF SEG=256*PEEK(127)+PEEK(126)
236 CLS
237 LOCATE 12,1
238 PRINT"Do you want to load a previously saved"
239 PRINT"character set (Y/N) ?"
240 A$=INKEY$:IF A$="" THEN 240
241 IF A$="N" OR A$="n" OR A$="0" THEN 249
242 IF A$<>CHR$(13) AND A$<>"Y" AND A$<>"y" THEN BEEP:GOTO 240
243 INPUT "Enter filespec ";FS$
244 ON ERROR GOTO 246'Trap "File not found" error. ERR=53.
245 GOTO 248
246 IF ERR=53 THEN PRINT Q$FS$Q$" was not found.":BEEP:RESUME 243
247 ON ERROR GOTO 0' Crash if any other error.
248 BLOAD FS$,0
249 CLS
250 LOCATE 12,1
251 PRINT"Last Character number generated ="GN
252 X=GN
253 PRINT "Enter Character number to"
254 INPUT "generate (128-255)(EN=Next) ";GN
255 IF GN=0 THEN GN=X+1
256 IF GN<128 THEN GN=128
257 IF GN>255 THEN GN=255
258 IF GN<>255 THEN 263
259 PRINT
260 PRINT"CHR$(255) is always null and cannot be"
261 PRINT"modified."
262 GOTO 253
263 CLS
264 LOCATE 14,1
265 LINE (1,100)-(318,163),0,BF
266 LOCATE 14,3:PRINT"Use Arrow Keys to move Cursor."
267 LOCATE 15,3:PRINT"F1 Sets Dot.    F2  Resets Dot."
268 LOCATE 16,3:PRINT"F3 Fills Grid.  F4  Clears Grid."
269 LOCATE 17,3:PRINT"F5 Fills Col.   F6  Clears Col."
270 LOCATE 18,3:PRINT"F7 Fills Row.   F8  Clears Row."
271 LOCATE 19,3:PRINT"F9 Saves Set.   F10 Alternate Menu."
272 LOCATE 20,3:PRINT"Press Enter to Accept Character."
273 LINE (0,99)-(319,164),2,B
274 FOR X=0 TO 7
275 LINE(73,X*9+4)-(152,X*8+3),2
276 NEXT
277 PUT (0,0),GRID,PSET' Overwrite the existing grid.
278 FOR ROW=0 TO 7
279 P=PEEK(FNGC(GN,ROW))
280 IF P=0 THEN 284' Skip a blank row.
281 FOR COL=0 TO 7
282 IF P AND FNEXC(COL) THEN GOSUB 204:PUT(COL*9+1,ROW*9+1),YELLOWBOX
283 NEXT
284 NEXT
285 ROW=0
286 COL=0
287 PUT(1,1),REDBOX
288 GOTO 294
289 ROW=0
290 COL=0
291 PUT (0,0),GRID
292 PUT (1,1),REDBOX
293 REM *** Main Strobe Loop ***
294 LOCATE 12,1
295 PRINT"CHR$("RIGHT$(STR$(GN),3)") = "Q$CHR$(GN)Q$" ";
296 PRINT"STRING$(5,"RIGHT$(STR$(GN),3)") = "Q$STRING$(5,GN)Q$;
297 A$=INKEY$
298 IF A$=CHR$(13) THEN 249' "Enter" key? Get a new Character if so.
299 FOR X=0 TO 7
300 LOCATE X+1,20
301 PRINT"Byte"X"= "RIGHT$("0"+HEX$(PEEK(FNGC(GN,X))),2)
302 NEXT
303 GOTO 294
304 END ' of program.


```
{% endraw %}

## GRAFGE.DOC

{% raw %}
```
typ grafge.doc
1 '      *****************
2 '      ** GRAFGEN.DOC **
3 '      *****************
4 '
5 '      by Wes Meier
6 '      70215,1017
7 '
8 '      January 28, 1983
9 '
10 'This documentation assumes the user has at least 96K of RAM.
11 '
12 'The data stored at locations 0000:007C - 0000:007F is an address used by
13 'BASIC as a pointer to a table used for the definition of the top 128 ASCII
14 'characters. Once the character set is in memory, this address must be made
15 'to point to the beginning of the table.
16 '
17 'The easiest place to store the table is immediately following the 64K
18 'segment used by BASIC. The address stored at 0000:0510 - 0000:0511 points
19 'to the beginning of this segment. The address is stored in the LSB/MSB
20 'format. If we add 10H to the MSB and 1H to the LSB the result is an
21 'address pointing to the first byte following BASIC's segment.
22 '********************************************************************
23 '  This code should be included in any program using a character set
24 '  created by GRAFGEN.BAS.
25 '  Assume the set has been BSAVED as "CHARSET.BIN".
26 '********************************************************************
27 DEF SEG=0   'Point to bottom of memory.
28 POKE &H7C,0 'Zero LSB of Character Table Offset Pointer.
29 POKE &H7D,0 'Zero LSB of Character Table Offset Pointer.
30 POKE &H7E,PEEK(&H510)+1     'BASIC's LSB Pointer + 1
31 POKE &H7F,PEEK(&H511)+&H10  'BASIC's MSB Pointer + 10H
32 'Now the character set pointers are directed to the first byte following
33 'the 64K segment used by BASIC.
34 DEF SEG=256*PEEK(&H7F)+PEEK(&H7E)    'Point to character table segment.
35 BLOAD "CHARSET.BIN",0        'Load in the table saved by GRAFGEN.BAS.
36 DEF SEG      'Reset segment pointer to default.
37 'End of required code.
38 END 'of GRAFGEN.DOC


SIG/Access: 
```
{% endraw %}

## GSDUMP.BAS

{% raw %}
```bas
0 'Prog = -------SCMDUMP-------
1 'no nonsense Graphics Sideways memory DUMP for C.ITOH 8510 PROWRITER
2 'Author: Herb Shear;
11 'NEC 8023 may require `[' (incremental) rather than `>" (unidirectional).
20 KEY OFF:DEFINT A-Z:DEF SEG=&HB800:WIDTH"LPT1:",255:E$=CHR$(27)
30 LPRINT CHR$(29)" "E$"A"STRING$(4,10)E$"T16"E$"N"E$"L010"E$">"CHR$(15)E$"P";
40 FOR Y=1 TO 80:LPRINT E$"S1000";:FOR X=80 TO 8000 STEP 80:K=X-Y:LPRINT STRING$(5,PEEK(K))STRING$(5,PEEK(K+8192));:NEXT:LPRINT:NEXT:LPRINT CHR$(10)E$"A"STRING$(8,10)CHR$(29)" "E$"<"CHR$(15)E$"N"E$"L000";:WIDTH"LPT1:",80:END
```
{% endraw %}

## GUMUP1.DOC

{% raw %}
```

***************************************************************************
			DOCUMENTATION FOR 'GUMUPs':
		GARBS' UNSUPPORTED MODERATELY USEFUL PROGRAMS
***************************************************************************


I. Introduction

	GUMUPs are small but useful utility programs which have been
placed in the public domain by J. P. Garbers (me).  They may be distributed
freely, but may NOT be included in marketed software without my express
written consent.

	As the acronym implies, I cannot support the GUMUPs.  I have
tested them thoroughly and use them every day on my own system, but
I cannot be held liable for any problems they may create for you.
I am also not responsible for providing updates, fixes, or patches
for new operating system releases or nonstandard hardware configurations.

	Comments are welcome.  See the appendix for my addresses.

	The GUMUPs were developed under a grant from Userview Corporation.


II. OBTAINING GUMUPs

	The GUMUPs may be obtained from a number of sources.  First,
when Radio Free PC is on the air (as announced in POST IBM on the
Source), users of the Crosstalk communications package may call the
system at 404-294-6879 to do a direct download of the files.

	Users of the Source may also obtain the GUMUPs in HEX format
files.	These files will have to be converted to binary form before
they are used.	To do this conversion, a program called PC-HEX may
be obtained from the same account (12)CL0040.  The PC-HEX program
is in Microsoft BASIC and is self-documenting.

	Users without communications capabilities may wish to send me
a formatted diskette with a stamped, self-addressed return mailer
(I will return no diskettes without a stamped return mailer), which I
will return with the GUMUP programs.  Feel free to send along any nice
public domain software if you take this route.

	In any case, I would appreciate it if you would drop me a note
letting me know where you got the programs, and how you like them.

III. LF.COM

	LF is a program which provides a selective directory listing
sorted by extension and filename.

	INVOKING THE PROGRAM:  LF may be invoked with the same options
as DIR, i.e. 'LF', 'LF B:', 'LF *.ASM', etc.  However, if either the
filename or extension is not supplied on the command line, LF will fill
it in with wildcards; thus, 'LF .ASM' is the same as 'LF *.ASM' and
will list all the files with the extension '.ASM'.

	LIMITATIONS:  LF has been successfully used on 160K and 320K
floppy drives.	It should work equally well on any DOS-compatible
drive, and should be transportable to any MS-DOS system.


IV. VDEL.COM

	VDEL is a program which allows selective deletion of files.

	INVOKING THE PROGRAM:  VDEL may be invoked by typing
'VDEL fname.ext' at the command prompt.  Wildcards may (and usually will)
be used, i.e. 'VDEL *.ASM'.

	If any matching files are found, VDEL will display the name of
the file, and ask if it should be deleted.  Pressing 'Y' or 'y' will
delete the file. Pressing ESC stops the program.  Any other key will
leave the file alone and continue asking about other matching files.

	I strongly encourage you to use VDEL instead of DEL or ERASE
when doing wild-card deletions.  It is too easy to accidentally delete
a file you wanted to keep when using the normal DOS commands.

	LIMITATIONS: VDEL should be transportable to any MS-DOS system.


V. FK.COM

	FK is a function key handler for the IBM PC.  Full documentation
is available in the external document FK.DOC.


VI. SYSTAT.COM

	SYSTAT provides you with information about all the disks
currently accessible to your system.

	INVOKING THE PROGRAM: From DOS command level, type SYSTAT.  No
arguments are needed.  SYSTAT will report on all drives available on
your system, showing their capacities, free space, names, and comments.

	Both SYSTAT and CD (see below) make use of .NAM files for disk iden-
tification.  With EDLIN or any other editor (or with a quick COPY CON DISK.NAM),
create a file with the extension .NAM.	The file should consist of one
line describing the contents of the file (i.e. 'communications programs',
'utility packages', 'BASIC games', etc.)  SYSTAT and CD will display
the contents of the .NAM file to help you keep track of what's currently in
your system.  There should only be one .NAM file per diskette.

	LIMITATIONS:  SYSTAT and CHKDSK occasionally disagree about disk
free space.

	SYSTAT should be compatible with all hard-disk and RAM-disk systems,
and is transportable to any MS-DOS system.


VII.  CD.COM

	CD logs a new drive (or remains on the current one), displays
the drive's name and description, and presents a sorted directory.

	INVOKING THE PROGRAM:  From DOS command level, type CD x: where
x: is the drive you wish to use.  Normally, you would just type x: to
do this.  CD will connect you to the drive, display the disk's logical
name and description (see discussion of .NAM files above), and
display the disk's directory sorted by extension and file name.

	LIMITATIONS:  CD should be compatible with all MS-DOS systems.

VIII.  WAIT.COM

	WAIT is only useful in batch files.  It takes about three
seconds to count down from three before continuing.  Thus, it allows
a user to interrupt a batch file (if, perhaps, an error occurred at
one stage in the batch processing), but will not require attention
during unattended operation (unlike the standard DOS command PAUSE,
which will wait forever for a keypress).

APPENDIX

	I may be reached Source mail at CL0040, or via U.S. mail at

	Jeffrey P. Garbers
	890E Clubhouse Circle West
	Decatur, GA 30032

	Upon receiving this document, please do me a favor and
and send me a note containing your name, address, and where you got the
programs. Monetary contributions will not be refused, but are not solicited;
comments, suggestions, criticisms, and contributions of quality public-domain
software will be especially appreciated.






SIG/Access:

```
{% endraw %}

## HALS.DOC

{% raw %}
```
DDATE.COM makes it easy to set the date when starting up MS/DOS.
	Just include it in your AUTOEXEC.BAT file and it will
	remember the last date you set on disk so that all you
	have to do is change the day with the cursor right key
	(or advance by a month with the cursor up key or from
	Friday to Monday with the (week)End key).  If you overshoot,
	use the cursor left or down keys to go back.  When the date
	is right, press ENTER.

	DDATE should reside on a writable drive, preferably the 
	default drive, for proper operation.


DISKMODF.BAS is an improved version of the disk sector modifier.
	I've added retries and sped up the interaction.

TIMING.BAS accurately times the execution of short BASIC programs
	by interval averaging over 10 seconds.  

SPEED411.COM changes the diskette drive step rate to 4 ms which has
	worked fine for me but I make no guarantees.  (Test
	it first on your drives by doing some formats and copies.)

BIGTYPE.BAS is for entertaining the children.  They especially like
	control-A's.

JUMBLE.BAS permutes jumble words when your brain gets stuck.

PALLETTE.BAS displays the colors possible in 160 by 200 color graphics
	(especially good with a composite monitor).  To exit and return
	the screen to normal, press Break then F9 then F10 (SCREEN 0,0,0).

```
{% endraw %}

## JUMBLE.BAS

{% raw %}
```bas
100 'jumble - solves jumbles
120 'This is 10 lines in PASCAL but the EXE file is huge!
130 'There's got to be a better way in BASIC to do recursion
140 '   or some other permutation algorithm
145 '--Oh well, it works as fast as it can be read.
147 '
148 ' Hal Sampson (408) 866-7840
149 '
150 DEFINT A-Z
200 INPUT "Jumbled word to permute";A$(0)
300 I=0:L=LEN(A$(0))
350 FOR J=1 TO 16:IF 80\(L+J)=80/(L+J) THEN 375 ELSE NEXT J
375 B$=STRING$(J,32)
400 GOSUB 1000
600 PRINT
700 GOTO 200
1000 IF A$(I)="" THEN FOR K=0 TO I-1:PRINT O$(K);:NEXT K:PRINT B$;:RETURN
1050 J(I)=0
1100 IF J(I)=LEN(A$(I)) THEN RETURN ELSE J(I)=J(I)+1
1200 O$(I)=LEFT$(A$(I),1)
1300 A$(I+1)=MID$(A$(I),2)
1400 I=I+1
1500 GOSUB 1000
1600 I=I-1
1700 A$(I)=MID$(A$(I),2)+LEFT$(A$(I),1)
1800 GOTO 1100
```
{% endraw %}

## MEMPEEK.BAS

{% raw %}
```bas
1000 'MEMPEEK.BAS - John Schnell - Nov. 1982...Used by permission of N.Y.P.C.
1001 'From MICROCOMPUTING, March 1983, pg 18.
1010 ' A program to display memory
1020 KEY OFF : COLOR 7,0 : CLS
1030 PRINT TAB(25)"*** Memory Lister ***"
1040 PRINT :PRINT :PRINT
1050 PRINT "Memory Lister will display the contents of a selected segment of memory in"
1060 PRINT "256 byte blocks per screen.  The contents are displayed in HEXIDECIMAL and in"
1070 PRINT "ASCII format.  From the menu, select the segment you wish to examine."
1080 PRINT :PRINT
1090 PRINT TAB(25)"U = User selected segment."
1100 PRINT TAB(25)"D = DOS segment of memory."
1110 PRINT TAB(25)"P = This program in memory."
1120 PRINT TAB(25)"R = ROM contents in memory."
1125 PRINT TAB(25)"C + Color screen buffer."
1130 PRINT TAB(25)"M = Monochrome screen buffer."
1140 PRINT TAB(25)"E = End program."
1150 PRINT :PRINT :PRINT
1160 PRINT TAB(25)"Please enter your choice : ";
1170 DEF SEG = 0: POKE 1047,PEEK(1047) OR 64
1180 RESP$ = INPUT$(1)
1190 CHOICE = INSTR("UDPRCME",RESP$) : IF CHOICE = 0 THEN BEEP:GOTO 1170
1200 CLS: ON CHOICE GOTO 1210,1300,1330,1390,1412,1420: GOTO 1830
1210 'user selection
1220 INPUT "Enter start of segment in hexadecimal (0000 to FFFF ) : ";SEGMENT$
1230 IF LEN(SEGMENT$)<1 OR LEN(SEGMENT$)>4 THEN BEEP: GOTO 1220
1240 FOR LOOP=1 TO 4: IF MID$(SEGMENT$,LOOP,1)<"0" OR MID$(SEGMENT$,LOOP,1)>"F" THEN BEEP: GOTO 1220 ELSE NEXT LOOP
1250 PRINT :PRINT
1260 INPUT "Enter memory offset in hexadecimal ( 0000 to FFFF ) : ";OFFSET$
1270 IF LEN(OFFSET$)<1 OR LEN(OFFSET$)>4 THEN BEEP: GOTO 1260
1280 FOR LOOP=1 TO 4: IF MID$(OFFSET$,LOOP,1)<"0" OR MID$(OFFSET$,LOOP,1)>"F" THEN BEEP: GOTO 1260 ELSE NEXT LOOP
1290 LOCATE 19,23:PRINT ">>  User Selected Segment  <<":GOTO 1450
1300 'display of DOS
1310 SEGMENT$ = "0000": OFFSET$ ="0000"
1320 LOCATE 19,23:PRINT ">>    Display of DOS    <<":GOTO 1450
1330 'display of program in memory
1340 DEF SEG = 0: BASIC = PEEK(&H510)+PEEK(&H511)*256
1350 DEF SEG: PROGRAM = PEEK(&H30)+PEEK(&H31)*256
1360 SEGMENT$=RIGHT$("0000"+HEX$(BASIC),4)
1370 OFFSET$=RIGHT$("0000"+HEX$(PROGRAM),4)
1380 LOCATE 19,23:PRINT ">>  Display program in Mem.  <<":GOTO 1450
1390 ' beginning of rom in high memory
1400 SEGMENT$="F000":OFFSET$="E000"
1410 LOCATE 19,23:PRINT ">> Display ROM in High Mem. <<":GOTO 1450
1411 'color screen buffer
1412 SEGMENT$="B800":OFFSET$="0000"
1413 LOCATE 19,23:PRINT">> Display Color ScreenBuff. <<":GOTO 1450
1420 'monochrome screen buffer
1430 SEGMENT$="B000":OFFSET$="0000"
1440 LOCATE 19,23:PRINT ">> Display Mono Screen Buff. <<":GOTO 1450
1450 'press spacebar to start
1460 LOCATE 21,1:PRINT TAB(25)"SEGMENT starts at : &H" SEGMENT$
1470 PRINT TAB(25)"OFFSET starts at : &H" OFFSET$
1480 PRINT :PRINT TAB(25)"Press <SPACE-BAR> TO START :";
1490 RESP$=INPUT$(1): IF RESP$<>" " THEN BEEP, GOTO 1490
1500 'routine for displaying the contents of memory on the screen
1510 CUR.SEG$="&H"+SEGMENT$: CUR.OFF$="&H"+OFFSET$
1520 HEXVAL$="0123456789ABCDEF01234567890ABCDE": HEXHEADING=VAL("&H"+RIGHT$(OFFSET$,1))+1
1530 LINECOUNT=1:ADDR.FMT$="\  \ =":BYTE.FMT$="\\ "
1540 FOR LOOP=VAL(CUR.OFF$) TO 65336. STEP 16:DEF SEG=VAL(CUR.SEG$)
1550 IF LINECOUNT =1 THEN CLS:DIVIDER=3:PRINT TAB(25);"SEGMENT STARTS AT :  "CUR.SEG$ ELSE 1620
1560 PRINT "offset";TAB(28)"hexidecimal values";TAB(69)"ASCII code";
1570 COLOR 0,7:PRINT "hex   ";
1580 FOR LOOP1=HEXHEADING TO HEXHEADING+15
1590  DIVIDER = DIVIDER+1:IF DIVIDER = 4 THEN PRINT CHR$(221);:DIVIDER=0
1600  PRINT MID$(HEXVAL$,LOOP1,1)+"  ";
1610 NEXT LOOP1:PRINT CHR$(221)+" "MID$(HEXVAL$,HEXHEADING,16):COLOR 7,0:DIVIDER=3
1620 ADDR$=RIGHT$("0000"+HEX$(LOOP),4)
1630 PRINT USING ADDR.FMT$;ADDR$;
1640 FOR LOOP2 = LOOP TO LOOP+15
1650   BYTECONTENT$=RIGHT$("00"+HEX$(PEEK(LOOP2)),2)
1660   DIVIDER=DIVIDER+1:IF DIVIDER=4 THEN PRINT CHR$(221);:DIVIDER =0
1670   PRINT USING BYTE.FMT$;BYTECONTENT$;
1680 NEXT LOOP2
1690 PRINT CHR$(221)+" ";
1700 FOR LOOP3=LOOP TO LOOP+15
1710   CHAR$=CHR$(PEEK(LOOP3)): IF CHAR$=>" " THEN PRINT CHAR$;ELSE PRINT ".";
1720 NEXT LOOP3
1730 PRINT
1740 LINECOUNT=LINECOUNT+1: IF LINECOUNT<17 THEN 1810
1750 PRINT
1760 COLOR 0,7:PRINT " < SPACE-BAR > continues forward, < - > backward, < M > returns to menu ";: COLOR 7,0
1770 DEF SEG = 0:POKE 1047, PEEK(1047) OR 64
1780 RESP$=INPUT$(1)
1790   IF RESP$="M" THEN BEEP:GOTO 1020
1795   IF RESP$="-" THEN LOOP=LOOP-512: LINECOUNT=1:GOTO 1810
1800   IF RESP$<>" " THEN BEEP:GOTO 1770 ELSE LINECOUNT=1
1810 NEXT LOOP
1820 GOTO 1020
1830 END
```
{% endraw %}

## PALLETTE.BAS

{% raw %}
```bas
10 'Pallette - 7 FEB 83 - Hal Sampson - (408) 866-7840
20 'Demonstrates Pallette of >64 colors available in 160 X 200 composite mode
27 KEY 9,"goto 210"+CHR$(13)
28 PRINT"Press Break then F9 then F10 to exit"
30 DEF SEG=0
40 OUT &H3D8,&H1A
50 OUT &H3D9,31
60 DEFINT A-Z
70 FOR I=0 TO 13
80 OUT &H3D4,I
90 READ S
100 OUT &H3D5,S
110 NEXT
120 DATA &H38,&H28,&H2d,10,127,3,100,112,2,1,0,0,0,0
130 DEF SEG = &HB800
140 FOR K=0 TO 15:M=K*17
150 FOR I=K*5 TO 8191 STEP 80:POKE I,M:POKE I+1,M:POKE I+2,M:POKE I+3,M:POKE I+4,M:POKE I+8192,M:POKE I+8193,M:POKE I+8194,M:POKE I+8195,M:POKE I+8196,M:NEXT
160 NEXT K
190 A=INP(33):OUT 33,A OR 1  'turn off timer interrupt
200 OUT 985,1:OUT 985,2:OUT 985,3:OUT 985,4:OUT 985,5:OUT 985,6:OUT 985,7:OUT 985,9:OUT 985,10:OUT 985,11:OUT 985,13:OUT 985,14:OUT 985,15:GOTO 200
210 A=INP(33):OUT 33,A AND 254  'turn on timer interrupt
220 STOP
```
{% endraw %}

## RESCMD.BAS

{% raw %}
```bas
100 '
200 ' COMMAND.COM   MODIFICATION TRANSFER PROGRAM
300 '               "RESCMD.BAS"                   Last Update 11/26/82
350 '                                              John Chapman
351 '                                              CIS 70205,1217
400 '
500 'This program will read in an unmodified COMMAND.COM (Release 1.1)
600 '     and produce an output file called COMMAND.CMD.. which can be
700 '     renamed to COMMAND.COM.. This output file will contain all of 
800 '     the modifications to COMMAND.COM currently available from the
900 '     author. See COMMAND.DOC for complete list and limitations.
910 '
950 DEFINT A-Z
1000 BFIL$ = "COMMAND.COM"
1100 CFIL$ = "COMMAND.CMD"
1200 INPUT "Enter Drive where COMMAND.COM resides followed by a colon ?",DRV$
1210 BFIL$=DRV$+BFIL$
1220 CFIL$=DRV$+CFIL$
1230 '
1240 OPEN BFIL$ FOR INPUT AS #1:CLOSE #1
1250 OPEN BFIL$ AS #1 LEN=1
1260 V= VARPTR(#1)
1270 L0=PEEK(V)
1280 IF L0 <>4 THEN GOTO 5000
1290 L1=PEEK(V+17) + 256 * PEEK(V+18) 'FILESIZE IN BYTES
1300 LIMIT = L1: IF LIMIT>6800 THEN PRINT "file too large":GOTO 5000 :
2000 'check base and change files for random, size and
2100 ' equal length .. abort if not correct conditions
2200 PRINT "BASE    FILE SIZE = ",LIMIT
2300 READ T:PRINT "ORIGIN  FILE SIZE = ",T
3000 DIM BB%(6800)
3100 '
3200 FIELD #1,1 AS INB$
3300 '
3400 FOR I = 1 TO LIMIT
3410 GET #1,I
3420 BB%(I) = ASC(INB$)
3430 NEXT I
3431 CLOSE #1
3432 '
3440 READ BYTES:
3500 FOR I = 1 TO BYTES
3600 READ IKJ%,XOLD%,XNEW%
3700 IF BB%(IKJ%) <> XOLD% THEN GOTO 3950
3800 BB%(IKJ%) = XNEW%
3900 GOTO 4300
3950 PRINT "VERIFY REJECT AT ";IKJ%," (";XOLD%;" / ";XNEW%;") ":
4100 PRINT "TARGET FILE COMMAND.CMD UNUSABLE":
4200 END
4300 NEXT I
4500 '
4501 PRINT "last byte = ";IKJ%;" was ";XOLD%;" now ";XNEW%
4600 '
4610 OPEN CFIL$ FOR OUTPUT AS #2:CLOSE #2
4620 OPEN CFIL$ AS #2 LEN=1
4630 FIELD #2,1 AS INC$
4700 '
4710 FOR I = 1 TO LIMIT
4712 IF BB%(I)>255 THEN PRINT "FORMAT ERROR AT";I;" = ";BB%(I):
4720 LSET INC$ = CHR$(BB%(I))
4730 PUT #2,I
4740 NEXT I
4741 PRINT I;" Bytes Written to COMMAND.CMD"
4750 CLOSE #2
4760 '
4800 PRINT "File COMMAND.CMD Created .. Rename to Use"
4900 END
4990 ' ** DATA STATEMENT WRITE SUBROUTINE
4991 '
4999 DATA  4959,  34
5000 DATA  865, 70, 84, 868, 3, 79, 869, 1, 4
5010 DATA  870, 161, 5, 871, 2, 12, 872, 0, 1
5020 DATA  877, 163, 64, 878, 82, 163, 879, 4, 3
5030 DATA  880, 45, 1, 881, 12, 161, 882, 1, 2
5040 DATA  883, 144, 0, 885, 79, 82, 890, 232, 184
5050 DATA  1369, 140, 144, 1370, 200, 161, 1371, 43, 2
5060 DATA  1372, 6, 0, 1373, 159, 43, 1374, 15, 6
5070 DATA  1375, 186, 159, 1376, 16, 15, 1377, 0, 186
5080 DATA  1378, 247, 16, 1379, 226, 0, 1380, 11, 247
5090 DATA  1381, 210, 226, 1382, 116, 115, 4052, 140, 144
5100 DATA  4053, 200, 161, 4054, 5, 2, 4055, 192, 0
5110 DATA  4056, 0, 72
```
{% endraw %}

## RESCMD.DOC

{% raw %}
```

			  RESIDENT COMMAND INTERPRETER

				  John Chapman
			       844 S. Madison St.
			    Hinsdale, Illinois 60521

			     COMPUSERV ID 70205,1217

	DISCLAIMER

	This  modification is provided without warranty of any kind.  The
	author	assumes no liability for failure of this code to  perform
	in  any  environment.  The  user is  completely  responsible  for
	determining   the  applicability  of  this  modification   to	a
	particular environment.

	LIMITATIONS

	This modification causes the transient portion of COMMAND.COM  to
	be  made resident at system IPL.   Re-booting the system with  an
	unmodified   COMMAND.COM   is  the  only  way  to   remove   this
	modification.  This  modification  alters  the	starting  segment
	[paragraph] address available to programs, lowering the amount of
	storage  available  by 4288 bytes [for PC/DOS 1.1 with	a  normal
	load   segment	address  of  02C1].    The  starting  segment  of
	COMMAND.COM can be found at location 0000:9E,  and should display
	[debug] as	 0000:009E 2C 01

	CONTENTS

	This   modification,   supplied  as  a	BASIC	program    called
	"RESCMD.COM"  (Or  RESCMDCK.BAS  for realtime clock users)  which
	will read in an UNMODIFIED DOS 1.1 COMMAND.COM and produce a  new
	file, "COMMAND.CMD" which has all the mods installed. This set of
	modifications  alters  the  IBM  Personal  Computer  DOS  command
	interpreter  (COMMAND.COM)  to remain entirely	resident,  rather
	than  be half resident and half transient.  The whole purpose  of
	this  modification is to suppress 99% of the occurrances  of  the
	refresh   of  the  transient  portion.	 This  will  remove   the
	requirement  to  ALWAYS have a disk with a valid  COMMAND.COM  in
	drive  A.  This  change has been especially useful with  multiple
	DISKCOPY  type activities,  and with those  application  packages
	which  use all of memory,  including the top 4880 bytes where the
	transient COMMAND.COM resides.

	The  modification  merely omits the relocation of  the	transient
	portion of COMMAND.COM, and sets the first free paragraph address
	to  be	the area behind the transient routines,  rather than  the
	small "resident" portion.







					1



	PC/DOS Initialization Overview

	The  IBM  Personal  Computer DOS is brought in from disk  by  the
	bootstrap loader read from track 0 of drive A by the ROM routines
	after the initial hardware tests are performed at  power-on,  and
	subsequently  when  ALT-CTRL-DEL re-boot is  requested.  In  both
	cases, the following sequence occurs:

	     1) The "boot" program is read from track 0.

	     2) It reads IBMBIO.COM  from  a  specific location

	     3) IBMBIO is given control and builds the environmental
		control blocks, initializes peripherals, and then
		reads IBMDOS.COM from its specific location on disk

	     4) IBMDOS is passed control. After initializing the
		remainder of the operating system, IBMDOS loads
		the COMMAND.COM file [the command interpreter], and
		passes it control

	     5) The command interpreter immediately relocates all of the
		main line code for command prompting,  parsing,  and  the
		code which supports the resident commands to the high end
		of memory, where it can be more easily destroyed by
		wandering programs.

	     6) Resident COMMAND.COM will now [pretend to] detect a
		checksum error in the transient portion of itself,
		immediately causing a Re-load from disk, thus setting
		the tone for a long and tedious interaction, interrupted
		frequently by disk I/O and requests for a DOS disk
		in the default drive.



	REAL-TIME CLOCK VERSION

	An   alternate	version  of  the  modification	is  supplied   as
	"RESCMDCK.BAS".   This version REQUIRES THE PRESENCE OF A  CLOCK.
	The  DOS  DATE	and TIME commands ARE DISABLED by  this  version,
	requiring the user to employ the software provided with the clock
	card  to access date and time.	 The space formerly used by  DATE
	and TIME is reused for three new RESIDENT commands,  BEEP,  PAGE,
	and CLS.  PAGE causes the printer (LPT1:) to skip to top-of form.
	CLS clears the active display.	BEEP causes a warbling tone to be
	produced.

	[The DOS 1.10 command  DEL  will  not  be  recognized however the
	function remains implemented under the ERASE command.]








					2

```
{% endraw %}

## RESCMDCK.BAS

{% raw %}
```bas
50 '
100 '
200 ' COMMAND.COM   MODIFICATION TRANSFER PROGRAM
300 '               "RESCMDCK.BAS"                 Last Update 11/26/82
350 '                                     .        John Chapman
351 '                                              CIS 70205,1217
400 '
500 'This program will read in an unmodified COMMAND.COM (Release 1.1)
600 '     and produce an output file called COMMAND.CMD.. which can be
700 '     renamed to COMMAND.COM.. This output file will contain all of
800 '     the modifications to COMMAND.COM currently available from the
900 '     author. See COMMAND.DOC for complete list and limitations.
910 '
950 DEFINT A-Z
1000 BFIL$ = "COMMAND.COM"
1100 CFIL$ = "COMMAND.CMD"
1200 INPUT "Enter Drive where COMMAND.COM resides followed by a colon ?",DRV$
1210 BFIL$=DRV$+BFIL$
1220 CFIL$=DRV$+CFIL$
1230 '
1240 OPEN BFIL$ FOR INPUT AS #1:CLOSE #1
1250 OPEN BFIL$ AS #1 LEN=1
1260 V= VARPTR(#1)
1270 L0=PEEK(V)
1280 IF L0 <>4 THEN GOTO 5000
1290 L1=PEEK(V+17) + 256 * PEEK(V+18) 'FILESIZE IN BYTES
1300 LIMIT = L1: IF LIMIT>6800 THEN PRINT "file too large":GOTO 5000 :
2000 'check base and change files for random, size and
2100 ' equal length .. abort if not correct conditions
2200 PRINT "BASE    FILE SIZE = ",LIMIT
2300 READ T:PRINT "ORIGIN  FILE SIZE = ",T
3000 DIM BB%(6800)
3100 '
3200 FIELD #1,1 AS INB$
3300 '
3400 FOR I = 1 TO LIMIT
3410 GET #1,I
3420 BB%(I) = ASC(INB$)
3430 NEXT I
3431 CLOSE #1
3432 '
3440 READ BYTES:
3500 FOR I = 1 TO BYTES
3600 READ IKJ%,XOLD%,XNEW%
3700 IF BB%(IKJ%) <> XOLD% THEN GOTO 3950
3800 BB%(IKJ%) = XNEW%
3900 GOTO 4300
3950 PRINT "VERIFY REJECT AT ";IKJ%," (";XOLD%;" / ";XNEW%;") ":
4100 PRINT "TARGET FILE COMMAND.CMD UNUSABLE":
4200 END
4300 NEXT I
4500 '
4501 PRINT "last byte = ";IKJ%;" was ";XOLD%;" now ";XNEW%
4600 '
4610 OPEN CFIL$ FOR OUTPUT AS #2:CLOSE #2
4620 OPEN CFIL$ AS #2 LEN=1
4630 FIELD #2,1 AS INC$
4700 '
4710 FOR I = 1 TO LIMIT
4712 IF BB%(I)>255 THEN PRINT "FORMAT ERROR AT";I;" = ";BB%(I):
4720 LSET INC$ = CHR$(BB%(I))
4730 PUT #2,I
4740 NEXT I
4741 PRINT I;" Bytes Written to COMMAND.CMD"
4750 CLOSE #2
4760 '
4800 PRINT "File COMMAND.CMD Created .. Rename to Use"
4900 END
4990 ' ** DATA STATEMENT WRITE SUBROUTINE
4991 '
4999 DATA  4959,  203
5000 DATA  865, 70, 84, 868, 3, 79, 869, 1, 4
5010 DATA  870, 161, 5, 871, 2, 12, 872, 0, 1
5020 DATA  877, 163, 64, 878, 82, 163, 879, 4, 3
5030 DATA  880, 45, 1, 881, 12, 161, 882, 1, 2
5040 DATA  883, 144, 0, 885, 79, 82, 890, 232, 184
5050 DATA  1363, 0, 1, 1369, 140, 144, 1370, 200, 161
5060 DATA  1371, 43, 2, 1372, 6, 0, 1373, 159, 43
5070 DATA  1374, 15, 6, 1375, 186, 159, 1376, 16, 15
5080 DATA  1377, 0, 186, 1378, 247, 16, 1379, 226, 0
5090 DATA  1380, 11, 247, 1381, 210, 226, 1382, 116, 115
5100 DATA  3632, 232, 144, 3633, 6, 144, 3634, 0, 144
5110 DATA  3635, 232, 144, 3636, 150, 144, 3637, 0, 144
5120 DATA  3641, 190, 51, 3642, 129, 210, 3643, 0, 51
5130 DATA  3644, 232, 219, 3645, 191, 51, 3646, 255, 192
5140 DATA  3647, 60, 184, 3648, 13, 12, 3649, 116, 0
5150 DATA  3650, 9, 232, 3651, 187, 7, 3652, 45, 0
5160 DATA  3653, 47, 184, 3654, 232, 3, 3655, 7, 0
5170 DATA  3656, 1, 232, 3657, 235, 1, 3658, 61, 0
5180 DATA  3659, 144, 195, 3660, 186, 205, 3661, 87, 23
5190 DATA  3662, 14, 128, 3663, 180, 228, 3664, 9, 169
5200 DATA  3665, 205, 128, 3666, 33, 252, 3667, 180, 0
5210 DATA  3668, 42, 116, 3669, 205, 7, 3670, 33, 186
5220 DATA  3671, 152, 29, 3672, 139, 10, 3673, 240, 180
5230 DATA  3674, 209, 9, 3675, 230, 205, 3676, 3, 33
5240 DATA  3677, 240, 195, 3678, 129, 13, 3679, 198, 10
5250 DATA  3680, 51, 80, 3681, 14, 114, 3682, 139, 105
5260 DATA  3683, 217, 110, 3684, 185, 116, 3685, 3, 101
5270 DATA  3686, 0, 114, 3687, 232, 32, 3688, 9, 69
5280 DATA  3689, 251, 114, 3690, 176, 114, 3691, 32, 111
5290 DATA  3692, 232, 114, 3693, 92, 32, 3694, 1, 45
5300 DATA  3695, 139, 32, 3696, 195, 70, 3697, 139, 117
5310 DATA  3698, 202, 110, 3699, 178, 99, 3700, 100, 116
5320 DATA  3701, 246, 105, 3702, 242, 111, 3703, 134, 110
5330 DATA  3704, 196, 32, 3705, 146, 65, 3706, 179, 98
5340 DATA  3707, 45, 111, 3708, 232, 114, 3709, 17, 116
5350 DATA  3710, 1, 101, 3711, 186, 100, 3712, 104, 13
5360 DATA  3713, 14, 10, 3714, 187, 36, 3715, 45, 0
5370 DATA  3716, 47, 144, 3717, 232, 184, 3718, 178, 0
5380 DATA  3719, 0, 6, 3720, 116, 185, 3721, 151, 0
5390 DATA  3722, 114, 0, 3723, 55, 186, 3724, 172, 79
5400 DATA  3725, 58, 24, 3726, 195, 183, 3727, 116, 7
5410 DATA  3728, 4, 205, 3729, 58, 16, 3730, 199, 180
5420 DATA  3731, 117, 2, 3732, 46, 186, 3733, 232, 0
5430 DATA  3734, 216, 0, 3735, 0, 183, 3736, 114, 0
5440 DATA  3737, 41, 205, 3738, 185, 16, 3739, 108, 195
5450 DATA  3740, 7, 144, 3741, 128, 187, 3742, 60, 220
5460 DATA  3743, 13, 5, 3744, 116, 228, 3745, 11, 97
5470 DATA  3746, 176, 144, 3747, 100, 36, 3748, 246, 252
5480 DATA  3749, 228, 230, 3750, 139, 97, 3751, 200, 185
5490 DATA  3752, 232, 50, 3753, 197, 0, 3754, 0, 226
5500 DATA  3755, 114, 254, 3756, 22, 12, 3757, 138, 2
5510 DATA  3758, 196, 230, 3759, 180, 97, 3760, 0, 185
5520 DATA  3761, 3, 50, 3762, 200, 0, 3763, 172, 226
5530 DATA  3764, 60, 254, 3765, 13, 75, 3767, 11, 235
5540 DATA  3768, 180, 195, 3769, 43, 144, 3770, 205, 144
5550 DATA  3771, 33, 144, 3772, 10, 144, 3773, 192, 144
5560 DATA  3774, 117, 144, 3775, 3, 144, 3776, 233, 144
5570 DATA  3777, 94, 144, 3778, 255, 144, 3779, 186, 144
5580 DATA  3780, 72, 144, 3781, 14, 144, 3782, 180, 144
5590 DATA  3783, 9, 144, 3784, 205, 144, 3785, 33, 144
5600 DATA  3786, 235, 144, 3787, 179, 144, 4052, 140, 144
5610 DATA  4053, 200, 161, 4054, 5, 2, 4055, 192, 0
5620 DATA  4056, 0, 72, 4902, 68, 67, 4903, 69, 76
5630 DATA  4904, 76, 83, 4906, 176, 68, 4907, 5, 10
5640 DATA  4941, 68, 66, 4942, 65, 69, 4943, 84, 69
5650 DATA  4944, 69, 80, 4946, 248, 92, 4947, 9, 10
5660 DATA  4949, 84, 80, 4950, 73, 65, 4951, 77, 71
5670 DATA  4954, 139, 248, 4955, 10, 9
```
{% endraw %}

## SQUISH.DOC

{% raw %}
```
		SS SS SS SS SS SS SS SS SS SS SS
		SS			      SS
		SS	  IBM PC Basic	      SS
		SS	    "Squish"          SS
		SS   Author: Dave Archibald   SS
		SS Translation: Alan J. Zett  SS
		SS    Copyright (c) 1982      SS
		SS SoftSide Publications, Inc SS
		SS			      SS
		SS SS SS SS SS SS SS SS SS SS SS
"Squish" is a utility program for the IBM PC with 32K,
color/graphics adapter, 1 disk drive, and Basic.

(The following is condensed from SoftSide magazine, issue no. 34.)

     Programmers tend to use quite a few REMarks when
programming, add extra spaces to make listings more readable, as
well as putting only a few statements on each line.  The result
is a program that is easier to read and debug, but not very space
or memory efficient.  The ideal utility would remove extra spaces
and REMs, and combine lines, when possible without altering the
structure of the BASIC program.
     Enter the TRS-80 program Squish...if only it were translated
to the IBM PC.	We've done so, and it is presented here for the
benefit of all our IBM subscribers.

TO USE SQUISH:
     First LOAD the program you wish to pack.  After it is
loaded, SAVE it with the ASCII option to a new file.  For example:
LOAD "MYPROG.BAS" and then reSAVE it as "MYPROG.ASC",A.  After
the program has been saved with the ASCII option, LOAD in
"Squish" and type RUN.
     Answer the first question with the name of the file saved
with the ASCII option ("MYPROG.ASC" in the example above).
     You will then be given a series of options.  You can remove
extra spaces, delete REMarks, and combine lines.  The fourth
option gives you the ability to protect a line or group of lines
from being "Squished."  Lines entered under this option are
totally ignored by "Squish."
     "Squish" will then read in the program to check for lines
that are referenced and proceed to work on it.	The display will
update constantly to show, in color (or monochrome), what
"Squish" is doing, and where.
     When "Squish" is done, it will allow you to enter the
"Squished" program for examination.  I suggest you then do a
quick RENUMber and reSAVE the program under another filename.
     When you are finished, you will have a neatly renumbered
program that is not only much shorter than the original (usually
by a few K), but will execute faster.  All in all, "Squish" is
quite a useful utility.

VARIABLES;
     A: Temporary numeric storage.
     A!: Temporary numeric storage.
     A$: Current program line being Squished.
     C$: Contains lines that have been combined.
     D: Length of a reserved word being searched for.
     DS: The maximum number of user protected lines.
     DT: Set to 1 if current line contains a DATA statement.
     G1 - G6: A position in A$ at which INSTR starts searching.
     HH: Miscellaneous.
     I$: Name of a DEF FN to convert a string input into a single upper
	       case letter.
     IP$: Set to "Y" if REM statements are to be deleted.
     J$: Storage for A$ as it is being reconstructed.
     LN: Current line number being processed.
     L$, L1$: Current character of A$ being processed.
     N$: Set to STR$(LN).
     P: Set to 1 the first time a quote is encountered in a PRINT
	       statement.  Set to 0 when second quote or end of
	       line is encountered.  While P equals 1, all
	       compression functions are cancelled.
     PJ: Points to the current line in PRO(*) being tested.
     PP: Set to 1 minus the location of the first character in a
	       program line following the line number.
     PV: Number of protected lines entered.
     PRO(*): Optional protected line numbers specified by user.
     Q$: Used in an INKEY$ loop.
     R: Number of line numbers referenced in REF(*).
     RD: Total number of REM statements deleted.
     RE: Total number of lines combined.
     REF(*): Number of program lines that can be referenced.
     S,S1: Miscellaneous.  Used in sort routine.
     SD: Total number of spaces deleted.
     SQ$: SAVE filename for Squished program.
     SV$: SAVE filename for Squished program.
     T,T1-T2: Miscellaneous.
     V$: The current program line stripped of its line number.
     X: Set equal to PP.
     XC$: Set to "Y" if lines are to be combined.
     XS$: Set to "Y" if extra spaces are to be deleted.
     XP$: Set to "Y" if user wishes to protect lines.


2/9/83 Patches, enhancements, etc. by Herb Shear

The R pointer can no longer lag behind allowing referenced REM and '
  statements to be deleted.
Trailing ' no longer added on nonnull referenced lines.
RESTORE & RETURN references to a line now protect the line.
Constructs like X=IGOTO+35 no longer protects line 35.
Indentation was preserved even when combining.
The deblanking tests were extended to close up constructs such as
  A( I ),  etc.
Goofs in naming the input file are now handled in a friendly fashion
  instead of repeating the entire input session over again.

      Users should take note of the instructions to use SAVE"-----",A
files as input.  Squish is tuned to the interpreter's output which is a
subset of valid input forms.  Lowercase, blanks preceding line numbers
and `GO TO xxx' are not handled properly by Squish.

3/7/83 Patches etc.
  Line 185:  Variable G5  corrected to G8.
  Line 210:  Added  OR L$=")"  to the IF conditions.
  Added test for ERL=
  Fixed erronous line numbers from use of VAL(A$)
  All integer variables, less time consuming display antics, compiler ready.

```
{% endraw %}

## SYSTAT.DOC

{% raw %}
```
SYSTAT.COM.......Contributed by Jeff Garber.. 10/7/82

This program when executed from DOS will display on your
screen  the capactity of each drive and the free space
on each. Also if you have placed on each disk an ASCII
file with the extension of .NAM, will display the Name
you have given the disk and a comment about the disk...


A>SYSTAT  (this is what you get when you type this)

MS-DOS Systat version 1.1       8 October 1982 4:50AM

Drive   Name      Capacity    Free  Comments
-----   ----      --------    ----  --------
 A:     AHOST         156K     12K  HOSTCOMM Master disk
 B:     BHOST         156K     69K  HOSTCOMM B drive general files
 C:     CHOST         156K      5K  HOSTCOMM C drive PC-TALK & additions
 D:     DHOST         156K     28K  HOSTCOMM D drive files


System Memory:    256K              Available memory:  212K

The Name field is the file name I placed on each disk and
each had the extension of .NAM (ie. AHOST.NAM was on drive A.)
The comments were in that file as line 1.....



```
{% endraw %}

## TIMING.BAS

{% raw %}
```bas
1 'TIMING - times statements accurately by interval averaging - Hal Sampson
2 SZ$="00:00:01":FZ$="00:00:11":QZ$=TIME$:TIME$="00":SOUND 37,1:SOUND 37,1
3 IF TIME$<SZ$ THEN 3 ELSE WHILE TIME$<FZ$:IZ%=IZ%+1
9 'Replace with statement(s) to be timed.  (e.g. this takes about 3 ms)
65527 WEND
65528 PRINT USING "##.###";10000/IZ%-5.2005;:PRINT " ms":TIME$=QZ$
```
{% endraw %}

## UNPROT2.TXT

{% raw %}
```
      UNPROTECTING BASIC PROGRAMS SAVED WITH THE ,P OPTION

	 The following is a very simple anywhere, any time
method for unprotecting BASIC programs which have been saved
with the ,P option.  The principle of this method is to
force a zero byte into offset 1124 of BASIC's default
segement.  Loading a protected program disables immediate
mode pokes however the BLOAD function will do the job.	This
requires a compatable file readily generated with BSAVE.  In
turn, this requires a zero byte somewhere to save.  The best
place to get that byte is from offset 1124 before loading
the protected program.	This means that the BSAVE file
header will cause BLOAD to default to that load address.
Thus the technique is as follows:

	 BASIC[A]
	 BSAVE "unpro",1124,1
	 LOAD "filespec of protected program
	 BLOAD "unpro"

	 If you write 1124 on the back of your driver's
license you'll be able to deal with problems in protected
programs any time, any place.  There have been sporatic
cases were LISTing continues past the lines of the protected
program on into prior program residue in memory.

```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0028

     Volume in drive A has no label
     Directory of A:\

    ARTILL   BAS      7680   3-03-83   1:31p
    BIGTYPE  BAS      1536   2-09-83  12:11a
    CD       COM       640   1-01-80  12:21a
    COLOUR   DOC      9088   3-02-83  10:31p
    CPCPRO   DOC     12800   3-04-83  12:01a
    CRC      TXT      2111  11-09-84   8:47a
    CRCK4    COM      1536  10-21-82   7:54p
    DDATE    COM       512   2-09-83  12:00a
    DISKMODF BAS      3712   2-09-83  12:10a
    FK       COM      2432  11-17-82   1:15a
    FK       DOC      8806   3-03-83  11:06p
    GRAFGE   BAS      8335   3-05-83   1:39a
    GRAFGE   DOC      1920   3-02-83  11:04p
    GSDUMP   BAS       512   3-09-83   2:48p
    GUMUP1   DOC      6089   3-09-83   1:34a
    HALS     DOC      1320   2-24-83   9:09a
    JUMBLE   BAS       768   2-09-83  12:18a
    LF       COM       512   1-01-80  12:22a
    MEMPEEK  BAS      3840   2-26-83  12:50a
    PALLETTE BAS       768   2-09-83  12:04a
    RESCMD   BAS      2688   3-03-83  10:45p
    RESCMD   DOC      4386   3-09-83   4:02p
    RESCMDCK BAS      5504   3-09-83   4:07p
    SD       COM      1505   2-02-82
    SDIR     EXE      1792   5-08-82
    SPEED411 COM        15  12-16-82  12:07a
    SQUISH   DOC      5541   3-09-83   6:11p
    SQUISH   EXE     28416   3-08-83  12:50a
    SQUISH   SRC      7175   3-09-84   5:11p
    SYSTAT   COM      1408   1-01-80  12:20a
    SYSTAT   DOC      1050  10-09-82   3:05p
    TIMING   BAS       384   2-09-83  12:21a
    UNPROT2  TXT      1117   2-24-83  12:18p
    VDEL     COM       768   1-01-80  12:20a
    WAIT     COM       128   1-01-80  12:24a
           35 file(s)     136794 bytes
                           15872 bytes free
