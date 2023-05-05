---
layout: page
title: "PC-SIG Diskette Library (Disk #2295)"
permalink: /software/pcx86/sw/misc/pcsig/2000-2999/DISK2295/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #2295"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "PRINTER ART 2 & YAMP, TMAC"

    Here's another collection of art from the author of PRINTER ART (disk
    #154). This disk has a wide variety of art that can you can print
    without any type of graphics needed on your system. You'll find
    everything from a dragon or Snoopy to the Statue of Liberty. There are
    also some pictures that are not suitable for children, so parental
    discretion is advised.
    
    Another program that has been included on this disk is TMAC100. With
    this program, you can convert a drawing that's been made with ASCII
    characters and convert it to a ReadMAC format. After your drawing has
    been converted, you can then display it on any system that has
    graphics capabilities. Any utility that can read ReadMAC format
    drawings will be able to read the drawings made with TMAC100.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## COLORNUD.BAS

{% raw %}
```bas
5  A=2
10  'Modified from the HP 9845 Basic by G. Wesley  12/29/82
15 ' draw statements to color figure
20 ' by DAVE MOON 11/83
25  KEY OFF
30  CLS
35  DEFINT X,Y,C
40  SCREEN 1:COLOR 15,0
45  C=0:LINE -(0,0),C
50  FOR I=1 TO 360
55     READ X,Y,P
60     X=X*320/360
65     Y=Y*200/240
70     Y=200-Y 'do y transformation to
75 'get picture right side up.
80     IF P=13 THEN C=0 ELSE C=A
85     LINE -(X,Y),C
90 NEXT I
95 PSET (70,167),2:PAINT (27,150),2
100 PAINT(27,165),3,2:LOCATE 1,1:LINE (105,152)-(105,156),2:LINE(107,157)-(107,157),2:PSET(92,140),2:PAINT (27,170),0,2
105 LINE(301,96)-(302,96),2:PSET (299,96),2:PSET (309,85),2:PSET(288,108),2:PSET(304,108),3
110 PAINT(304,108),2,2 'shoes
115 LINE (169,74)-(173,80),2 'line on leg so paint won't leak
120 PSET(246,143),2
125 PAINT(160,150),0,2
130 PAINT (290,77),0,2 'torso & boobs
135 PSET(167,83),2
140 PAINT(170,95),0,2 'torso
145 PAINT (58,130),0,2 'face
150 PSET (245,143),7 ' a dot on her arm
155 PSET (144,91),2 'right nipple
160 PSET (145,91),2 'rn
165 PSET (146,90),2 'rn
170 PSET (148,89),2 'rn
175 DRAW "c2lr1D1L1D1L1D1R1D1r6u1l6u1r4"'RN
180 PSET (95,90),2  'left nipple
185 DRAW "c2d1r1u1r1u1r3"'fill l.nipple
190 PSET (94,91),2  'ln
195 PSET (93,92),2  'ln
200 PSET (216,141),1
205 DRAW "c1r3l9u1l6r16u1r1u1r2u1r1u1r2u1r1u1r1"'arm and ass space
210 PSET (216,141),1
215 PAINT (300,190),1,2
220 PAINT (55,122),0,2 'top eye
225 PAINT (50,118),0,2 'eye
230 PAINT (55,124),0,2 ' eye
235 PAINT (57,122),0,2 'eye
240 PAINT (58,120),0,2 ' eye
245 PSET (59,124),1 ' blue dot in eye
250 PSET (60,124),1 'second blue dot
255 PAINT (50,185),2   'paints hair red
260 PAINT (30,5),1,2 ' paints top yellow
265 WHILE INKEY$<> "":WEND
270 WHILE INKEY$="":WEND
275 DATA 51,100,13,79,103,12,104,92,12
280 DATA 108,87,12,108,82,12,104,72,12
285 DATA 88,57,12,93,75,13,93,78,12
290 DATA 91,82,12,90,84,12,90,87,12
295 DATA 89,90,12,89,94,12,90,93,12
300 DATA 91,89,12,92,86,12,92,83,12
305 DATA 94,77,12,93,75,13,96,80,12
310 DATA 97,83,12,97,87,12,96,89,12
315 DATA 92,92,12,89,94,12,93,89,12
320 DATA 94,85,12,94,77,12,85,81,13
325 DATA 85,83,12,86,84,12,86,82,12
330 DATA 85,81,12,85,86,13,84,86,12
335 DATA 83,88,12,85,86,12,67,54,13
340 DATA 65,60,12,64,67,12,66,74,12
345 DATA 67,74,12,66,67,12,66,60,12
350 DATA 67,54,12,69,56,13,68,61,12
355 DATA 67,67,12,68,70,12,71,73,12
360 DATA 69,69,12,69,64,12,71,60,12
365 DATA 69,56,12,71,60,13,74,64,12
370 DATA 74,68,12,71,72,12,73,68,12
375 DATA 73,64,12,70,61,12,70,63,13
380 DATA 71,63,12,73,65,12,73,68,12
385 DATA 71,69,12,70,69,12,69,68,12
390 DATA 70,65,13,70,66,12,71,66,12
395 DATA 71,65,12,70,65,12,64,87,13
400 DATA 60,91,12,59,94,12,58,98,12
405 DATA 60,100,12,59,97,12,62,92,12
410 DATA 64,87,12,69,86,13,65,88,12
415 DATA 63,93,12,62,100,12,65,98,12
420 DATA 64,95,12,64,90,12,69,86,13
425 DATA 70,91,12,68,95,12,65,98,12
430 DATA 65,97,12,67,95,12,69,91,12
435 DATA 69,86,12,65,88,13,66,88,12
440 DATA 68,89,12,69,91,12,67,94,12
445 DATA 65,94,12,64,93,12,65,90,13
450 DATA 65,91,12,66,91,12,66,90,12
455 DATA 65,90,12,61,101,13,50,104,12
460 DATA 36,100,12,24,90,12,17,75,12
465 DATA 16,61,12,25,43,12,44,33,12
470 DATA 60,33,12,79,40,12,57,38,12
475 DATA 41,45,12,24,62,12,17,75,12
480 DATA 51,100,13,57,95,12,63,80,12
485 DATA 62,72,12,58,78,12,62,65,12
490 DATA 65,49,12,52,45,13,65,49,12
495 DATA 88,65,12,87,50,12,79,40,12
500 DATA 17,75,13,5,67,12,0,45,12
505 DATA 4,23,12,25,11,12,58,17,12
510 DATA 110,14,12,135,25,12,160,32,12
515 DATA 164,40,12,162,44,12,155,46,12
520 DATA 143,45,12,151,43,12,149,40,12
525 DATA 125,48,12,118,55,12,119,51,13
530 DATA 117,58,12,113,62,12,104,62,12
535 DATA 115,61,13,115,67,12,111,71,12
540 DATA 104,72,12,121,52,13,133,50,12
545 DATA 145,51,12,131,56,13,145,51,12
550 DATA 170,47,12,245,41,12,255,42,12
555 DATA 262,46,12,271,58,12,282,81,12
560 DATA 281,78,13,287,81,12,280,76,13
565 DATA 285,74,12,288,75,12,278,73,13
570 DATA 282,75,12,283,79,13,288,75,12
575 DATA 293,74,12,301,77,12,299,76,13
580 DATA 306,75,12,313,76,12,314,77,12
585 DATA 313,78,12,309,78,12,309,77,12
590 DATA 311,76,12,309,78,13,304,79,12
595 DATA 300,81,12,295,79,12,302,80,13
600 DATA 313,83,12,316,85,12,312,85,12
605 DATA 311,84,12,311,83,12,313,83,12
610 DATA 312,85,13,300,84,12,292,82,12
615 DATA 300,84,13,305,88,12,306,90,12
620 DATA 302,89,12,301,88,12,302,87,12
625 DATA 305,88,12,302,89,13,289,85,12
630 DATA 295,79,13,280,92,12,275,91,12
635 DATA 244,68,12,251,64,13,244,68,12
640 DATA 220,73,12,170,89,12,164,92,12
645 DATA 157,92,12,220,73,13,243,73,12
650 DATA 261,81,12,270,95,12,273,109,12
655 DATA 270,125,12,259,143,12,244,160,12
660 DATA 227,177,12,208,193,12,196,206,12
665 DATA 214,202,13,198,210,12,189,213,12
670 DATA 182,213,12,176,211,12,172,206,12
675 DATA 170,199,12,172,190,12,182,167,12
680 DATA 197,141,12,209,125,12,236,105,12
685 DATA 180,122,13,185,126,12,187,137,12
690 DATA 191,150,12,208,193,13,214,202,12
695 DATA 222,216,12,228,223,12,234,226,12
700  DATA  240,226,12,247,222,12,276,192,12
705 DATA  305,164,12,318,155,12,330,150,12
710 DATA  349,137,12,347,139,13,360,149,12
715 DATA  360,140,12,357,129,12,353,123,12
720 DATA  350,121,12,335,120,12,349,137,13
725 DATA  339,123,12,324,110,12,322,111,12
730 DATA  322,113,12,324,116,12,330,121,12
735 DATA  341,126,12,337,124,13,338,127,12
740 DATA  335,120,13,335,116,12,349,107,12
745 DATA  348,106,12,340,110,12,324,110,12
750 DATA  341,126,13,334,128,12,330,128,12
755 DATA  325,126,12,320,123,12,316,122,12
760 DATA  312,124,12,310,127,12,308,134,12
765 DATA  305,140,12,290,150,12,275,159,12
770 DATA  257,168,12,249,174,12,244,179,12
775 DATA  293,148,13,289,142,12,285,142,12
780 DATA  282,143,12,274,150,12,266,155,12
785 DATA  241,163,12,248,205,13,247,194,12
790 DATA  241,163,12,90,99,13,95,103,12
795 DATA  94,100,13,98,114,12,105,128,12
800 DATA  108,132,12,108,134,12,110,135,12
805 DATA  111,134,12,108,132,12,105,128,13
810 DATA  117,134,12,111,134,13,117,134,12
815 DATA  131,130,12,143,122,12,99,95,13
820 DATA  114,100,12,130,108,12,124,97,13
825 DATA 130,104,12,137,115,12,143,122,12
830 DATA 160,130,12,167,132,12,169,134,12
835 DATA 171,133,12,171,131,12,167,132,12
840 DATA 160,130,13,175,126,12,171,131,13
845 DATA 175,126,12,181,120,12,186,110,12
850 DATA 188,100,12,186,89,12,181,121,13
855 DATA 190,121,12,200,118,12,210,112,12
860 DATA 222,103,12,195,120,13,200,122,12
865 DATA 183,122,13,190,125,12,207,127,12
870 DATA 233,107,13,232,103,12,365,0,13
875 END
```
{% endraw %}

## DARTH.BAS

{% raw %}
```bas
10   REM ----------- DARTH VADER PLOT -----------------------------------------
20 ' Converted to the IBM-PC from the HP 9845 by G.Wesley  2/27/83
30 '  ICE -- IBM Computer Enthusiasts of the Lehigh Valley Computer Group
40 '          Data  215-250-0173
50 '
60 CLS:'PRINT " DARTH.BAS -- a gift from ICE to the public domain":FOR I=1 TO 1000:NEXT
70  ' SCALE -5,30,5,33
80 CLS:SCREEN 2
90  REM
100  FOR I=1 TO 409
110  READ Y,X,P
120     X=(X+5)*640/35
130     Y=(Y-5)*200/28
140     Y=200-Y
150     LINE -(X,Y),P
160  NEXT I
170 GOTO 170
180 DATA 19.89,6.765,0,19.89,6.765,1,22.0925,6.695,1,21.305,6.44,0,20.7425,7.0675
190 DATA 1,21.345,7.0375,0,20.6775,6.4125,1,21.0075,6.1525,0,21.05,7.36,1,5.77,2.17
200 DATA 0,8.2325,7.7775,1,9.96,7.735,1,10.78,7.4775,1,11.82,6.7675,1,12.3875,6.335
210 DATA 1,13.19,6.1875,1,14.155,6.0775,1,17.62,4.6575,1,19.1225,5.9425,1,19.565
220 DATA 5.585,1,20.4125,5.2725,1,21.235,5.34,1,22.0975,5.7675,1,22.525,6.485,1
230 DATA 22.715,7.4675,1,22.645,8.15,1,22.415,8.715,1,22.005,9.205,1,20.0425,9.2675
240 DATA 1,19.7175,8.62,1,19.43,7.785,1,19.37,6.9375,1,19.4725,6.1275,1,19.545,5.605
250 DATA 1,19.1125,5.94,1,18.87,6.865,1,18.98,7.79,1,19.2825,8.7225,1,19.655,9.47
260 DATA 1,19.5225,11.19,0,19.11,12.48,1,19.0325,13.455,1,18.9875,14.4275,1,19.0375
270 DATA 15.4775,1,19.1875,16.4825,1,19.69,17.3525,1,21.1075,17.14,1,21.7525,16.7575
280 DATA 1,22.54,15.93,1,23.1125,14.7575,1,23.2775,13.7475,1,23.145,12.49,1,22.6025
290 DATA 11.4725,1,22.36,11.2325,1,19.8175,11.32,1,19.4925,12.545,1,19.42,13.4925
300 DATA 1,19.385,14.4175,1,19.4575,15.5275,1,19.605,16.5025,1,19.685,17.36,1,17.725
310 DATA 15.61,1,13.1075,15.0225,1,12.7475,14.495,1,12,13.9775,1,11.55,13.19,1
320 DATA 10.67,12.7375,1,9.4,12.7375,1,9.2325,8.785,1,10.335,8.7625,1,11.2275,7.795
330 DATA 1,11.83,6.7625,1,12.4125,6.3325,1,13.1825,6.1675,1,17.73,15.6,0,18.6025
340 DATA 11.1175,1,18.3525,10.6725,1,18.7575,10.255,1,18.79,9.86,1,18.2725,9.095
350 DATA 1,20.0575,9.5625,1,20.2475,9.94,1,20.2475,10.2625,1,19.9575,10.61,1,17.125
360 DATA 10.69,1,17.105,9.17,1,18.275,9.0825,1,18.4775,8.6075,1,17.635,4.65,1,14.1575
370 DATA 6.09,1,14.675,5.86,1,12.69,5.64,1,13.01,6,1,12.405,6.3325,1,12.24,5.9475
380 DATA 1,12.7275,5.6425,1,12.7525,14.49,0,13.1625,14.4625,1,13.43,14.8625,1,13.095
390 DATA 15.02,1,6.3325,14.5125,0,7.4975,14.5125,1,8.685,17.4325,1,10.715,17.39
400 DATA 1,12.035,17.7725,1,14.9375,19.025,1,15.8025,19.245,1,16.9575,19.295,1
410 DATA 6.71,22.22,0,8.69,17.4225,1,10.5325,23.9425,1,11.145,24.79,1,11.6925,24.8125
420 DATA 1,23.7425,20.0975,1,25.1725,20.27,1,26.705,20.09,1,28.7975,19.5025,1,30.0625
430 DATA 18.565,1,31.01,17.4,1,31.4275,16.23,1,31.7,15.065,1,31.865,13.9425,1,31.8775
440 DATA 12.7,1,31.28,9.3425,0,31.0525,7.855,1,29.845,5.9375,1,28.915,5.2875,1
450 DATA 27.8075,4.845,1,26.35,4.595,1,25.1575,4.545,1,23.8775,4.545,1,23.165,4.6575
460 DATA 1,22.5125,4.4225,1,21.7275,4.16,1,12.975,1.0325,1,11.7825,1.52,1,11.7825
470 DATA 1.52,1,11.0275,2.215,1,10.4425,3.1675,1,9.9975,4.165,1,9.5875,5.355,1
480 DATA 9.3175,6.415,1,9.0125,7.7625,1,9.53,7.7375,0,9.78,6.5125,1,10.03,5.4975
490 DATA 1,10.395,4.375,1,10.7975,3.4125,1,11.34,2.475,1,12.0475,1.835,1,12.81
500 DATA 1.525,1,12.975,1.035,1,12.84,1.515,1,21.4925,4.525,1,22.1225,5.0475,1
510 DATA 22.465,5.5175,1,22.875,6.4125,1,23.035,7.4925,1,22.9275,8.1975,1,22.675
520 DATA 8.7725,1,22.4475,9.095,1,23.88,9.015,0,24.2325,8.3775,1,24.5625,7.4325
530 DATA 1,24.64,6.7325,1,24.275,5.875,1,24.015,5.42,1,23.3225,4.89,1,21.7325,4.13
540 DATA 1,22.34,4.6875,1,22.75,5.3075,1,23.0875,6.31,1,23.0425,7.47,1,24.0125
550 DATA 10.675,0,24.545,11.5775,1,24.895,12.3675,1,25.045,13.0075,1,25.2,13.88
560 DATA 1,25.2425,14.7075,1,25.2475,15.565,1,25.1025,16.42,1,24.9025,17.25,1,24.6275
570 DATA 18.1675,1,24.27,19.1725,1,23.75,20.0825,1,22.675,10.7,0,23.045,11.2425
580 DATA 1,23.4275,12.3825,1,23.6375,13.715,1,23.6325,14.27,1,23.585,14.895,1,23.425
590 DATA 15.4325,1,23.06,16.2075,1,22.315,17.2275,1,21.5325,17.78,1,13.655,21.2275
600 DATA 1,13.1375,22.7025,1,12.5175,23.7975,1,11.6625,24.81,1,9.345,17.4125,0
610 DATA 11.0325,23.71,1,11.4525,24.27,1,12.0925,23.485,1,12.6875,22.44,1,13.32
620 DATA 20.9,1,13.6375,21.22,1,13.3,20.9075,1,16.9475,19.2825,1,21.2825,17.3675
630 DATA 1,21.9875,16.96,1,22.885,16.12,1,23.2625,15.4075,1,23.6325,14.2625,1,14.1775
640 DATA 6.0725,0,17.785,9.1075,1,13.175,6.1675,1,13.205,6.66,0,17.09,9.1625,1
650 DATA 17.12,10.6875,1,13.4975,14.15,1,13.51,14.52,0,17.9,10.67,1,14.38,14.9225
660 DATA 1,14.675,15.0675,0,17.9,10.685,1,14.3175,13.35,0,13.6475,13.3625,1,13.6225
670 DATA 12.5675,1,15.235,12.5,1,15.68,12.055,0,13.595,12.1175,1,13.5925,11.2925
680 DATA 1,16.6225,11.125,1,17.11,10.6875,0,13.55,10.815,1,13.5325,10.0675,1,17.0725
690 DATA 9.8975,1,17.0725,9.4025,0,13.48,9.55,1,13.48,8.74,1,16.2325,8.615,1,15.58
700 DATA 8.2025,0,13.43,8.255,1,13.4125,7.4975,1,14.4425,7.4575,1,13.415,7.49,0
710 DATA 13.6375,7.8525,1,13.445,8.28,1,13.7625,8.2575,0,13.7625,8.2575,1,13.9425
720 DATA 7.8225,1,13.715,7.465,1,13.9675,7.49,0,14.2,7.83,1,14.025,8.2425,1,14.305
730 DATA 8.2425,0,14.4775,7.8425,1,14.235,7.4725,1,14.5625,7.545,0,14.7225,7.8375
740 DATA 1,14.56,8.215,1,14.885,8.2275,0,15.0375,7.8575,1,15.245,7.9925,0,15.155
750 DATA 8.2025,1,13.4975,8.745,0,13.695,9.1125,1,13.4825,9.52,1,13.6725,9.52,0
760 DATA 13.925,9.09,1,13.7125,8.735,1,13.99,8.735,0,14.2,9.075,1,13.9525,9.515
770 DATA 1,14.245,9.5,0,14.4825,9.095,1,14.2725,8.73,1,14.5825,8.73,0,14.765,9.0675
780 DATA 1,14.535,9.475,1,14.815,9.455,0,15.0425,9.04,1,14.845,8.7125,1,15.115
790 DATA 8.7125,0,15.315,9.0575,1,15.0975,9.445,1,15.415,9.445,0,15.635,9.0475
800 DATA 1,15.44,8.6875,1,15.7,8.6875,0,15.895,9.03,1,15.665,9.4275,1,15.965,9.4275
810 DATA 0,16.165,9.005,1,15.97,8.6725,1,16.22,8.6725,0,16.4425,8.9925,1,16.18
820 DATA 9.435,1,16.54,9.3925,0,16.7525,9.01,1,13.52,10.0625,0,13.7975,10.425,1
830 DATA 13.56,10.815,1,13.865,10.79,0,14.105,10.385,1,13.8875,10.0775,1,14.1025
840 DATA 10.0775,0,14.335,10.3925,1,14.125,10.76,1,14.4275,10.76,0,14.6325,10.36
850 DATA 1,14.3775,10.0425,1,14.65,10.0425,0,14.87,10.3575,1,14.6775,10.73,1,14.9775
860 DATA 10.73,0,15.165,10.35,1,14.945,10.045,1,15.205,10.045,0,15.42,10.3625,1
870 DATA 15.21,10.7,1,15.4825,10.7,0,15.72,10.3025,1,15.49,10.0125,1,15.7225,10.0125
880 DATA 0,15.935,10.3075,1,15.7025,10.6925,1,16.015,10.6925,0,16.2375,10.3025
890 DATA 1,16.0175,9.98,1,16.26,9.98,0,16.4975,10.2875,1,16.2825,10.67,1,16.5825
900 DATA 10.67,0,16.8325,10.2675,1,16.6175,9.97,1,13.5775,11.3175,0,13.8525,11.6925
910 DATA 1,13.62,12.0875,1,13.88,12.0875,0,14.1275,11.68,1,13.845,11.32,1,14.1075
920 DATA 11.32,0,14.38,11.6725,1,14.155,12.055,1,14.445,12.055,0,14.67,11.675,1
930 DATA 14.38,11.28,1,14.665,11.28,0,14.93,11.6725,1,14.71,12.0275,1,15.0125,12.0275
940 DATA 0,15.2125,11.66,1,14.9075,11.255,1,15.1775,11.255,0,15.455,11.6425,1,15.2525
950 DATA 12.0125,1,15.5625,12.0125,0,15.7825,11.64,1,15.4925,11.23,1,15.7325,11.23
960 DATA 0,16.0125,11.6075,1,15.875,11.8525,1,13.635,12.5775,0,13.895,12.9575,1
970 DATA 13.65,13.35,1,14.025,13.3275,0,14.255,12.935,1,14.0025,12.5825,1,14.2625
980 DATA 12.5825,0,14.515,12.9025,1,14.2525,13.325,1,14.81,12.86,0,14.5875,12.5625
990 DATA 1,14.8825,12.54,0,14.985,12.6875,1,20.7225,10.62,0,20.7225,9.6125,1,21.2575
1000 DATA 9.6125,1,21.2575,10.6075,1,20.73,10.625,1,32.075,11.71,0,32.0625,11.7275
1010 DATA 0,31.905,12.6925,1,31.6975,11.71,1,31.04,10.82,1,30.1275,10.5,1,29.225
1020 DATA 10.415,1,22.4425,10.69,1,21.62,9.9125,1,21.7075,9.8,1,22.31,10.3575,1
1030 DATA 29.33,10.04,1,30.2975,10.2,1,31.085,10.465,1,31.415,10.715,1,32.05,11.7125
1040 DATA 1,31.9725,10.595,1,31.555,9.53,1,30.635,9.01,1,29.4175,8.785,1,22.4475
1050 DATA 9.095,1,21.7,9.785,1,13.14,6.18,0,13.47,14.54,1,14.38,14.91,1,14.68,15.05
1060 DATA 1,17.72,15.59,1,36.31,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
1070 DATA 0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
1080 DATA 0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
1090 DATA 0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
```
{% endraw %}

## FILE2295.TXT

{% raw %}
```
Disk No: 2295
Disk Title: YAMP, TMAC & Printer Art 2
PC-SIG Version: S1

Program Title: YAMP, TMAC & Printer Art 2
Author Version: 1.00
Author Registration: None.
Special Requirements: 384K RAM, and CGA.

Here's another collection of art from the author of PRINTER ART (disk
#154). This disk has a wide variety of art that can you can print
without any type of graphics needed on your system. You'll find
everything from a dragon or Snoopy to the Statue of Liberty. There are
also some pictures that are not suitable for children, so parental
discretion is advised.

Another program that has been included on this disk is TMAC100. With
this program, you can convert a drawing that's been made with ASCII
characters and convert it to a ReadMAC format. After your drawing has
been converted, you can then display it on any system that has graphics
capabilities. Any utility that can read ReadMAC format drawings will be
able to read the drawings made with TMAC100.

PC-SIG
1030D East Duane Avenue
Sunnyvale  Ca. 94086
(408) 730-9291
(c) Copyright 1989 PC-SIG, Inc.

--------------------------------------------------------------------------
Disk No 1xxx  YAMP, TMAC & Printer Art 2                       v1.00
--------------------------------------------------------------------------

+------------------------------------------------------------------------+
| Note1: This is a companion disk to #154 Printer Art.  To get as much   |
|        material on the disk as possible, the .PIC and .NUD files have  |
|        been squeezed.  Also, a few files had to be moved here from     |
|        from disk #154 after the latest update to #154 created space    |
|        problems there.  Instructions to expand the squeezed files      |
|        follow below in this .TXT file.                                 |
+------------------------------------------------------------------------+

+------------------------------------------------------------------------+
| Note2: In the following, files (after expansion) with extensions of    |
|        .PIC or .NUD may be directly printed on a printer.  Files with  |
|        extensions of .BAS are BASIC programs which must be run under   |
|        the PC or GW (or compatible) interpreters.  The Color Graphics  |
|        Adaptor is usually required for these BASIC programs.           |
+------------------------------------------------------------------------+

TMAC:  The TMAC program contained on this disk lets one translate .PIC
       and .NUD files directly into ReadMAC format.  See the file
       TMAC100.DOC file for more information.

+------------------------------------------------------------------------+
| Note3: The TMAC100 program also has the ability to directly read       |
|        and display ReadMACs, using a built-in version of the YAMP      |
|        ReadMAC viewer, also on this disk as a separate program.        |
+------------------------------------------------------------------------+

       To print out this documentation, issue a

            A>COPY TMAC100.DOC LPT1

       command, or use WordStar(R) to print out the file.

Disclaimer:  To the best of Galaxy Systems Corporation's knowledge, the
             material hereon is public domain or under the control of
             Galaxy Systems Corporation, or was originally on disk #154
             as PC-SIG material under the control or PC-SIG.  Upon
             notification that any material is not public domain,
             it will be speedily removed.

                                     Galaxy Systems Corporation   02/23/89


Contents of this disk:

FILS1xxx TXT  This text file.

TMAC100  EXE  Translates .PIC and .NUD files into ReadMACs!
TMAC100  DOC  Information about TMAC100.
TMACHELP DAT  Help File for TMAC100.

YAMP21   EXE  The BEST CGA-oriented ReadMAC viewer available!
YAMP21   DOC  Information about YAMP21.

READMACS DOC  A detailed discussion of the format of ReadMAC files!

DARTH    BAS  Darth Vader  --- From Disk #154

NUSQ     COM  File Unsqueeze Utility.

UN-PQC   BAT  Batch command file to unsqueeze .PQC pictures.
                To execute, type

                          A>UN-PQC [destination-drive:]

                If destination-drive: is omitted, the current drive
                is used.  For example,

                          A>UN-PQC C:

                will unsqueeze all files with the .PQC extension and place
                them on drive C:.  Note: if you only have one diskette drive
                and no hard disk, it may be best to unsqueeze to a ram-disk
                and copy files from it to a fresh floppy, so as to reduce
                floppy disk swaps.

DRAGON   PQC  How can a dragon look bored?
KLINGON  PQC  A battle cruiser.
PROUD    PQC  Standing Proud:  the Statue of Liberty.
SHIP     PQC  Sails from simpler days.
SNOOPYA  PQC  Snoopy, one view, corrected & ready to print  --- From Disk #154
SNOOPYB  PQC  Snoopy, another view, ready to print  --- From Disk #154
TREK2    PQC  Competition for KLINGON.PIC.

MONA     MAC  A ReadMAC created from MONA.PIC (from disk #154) with the
                TMAC100 program on this disk.


-------- ---  --------- Material After This Point is not for Kiddies ---------

UN-NQD   BAT  Batch command file to unsqeeze .NQD pictures.
                To execute, type
                  A>UN-NQD [destination-drive:]

88NUDE   NQD  Nude
ACNUDE2  NQD  Nude
ACNUDE6  NQD  Nude
ANITA    NQD  Nude
BABE     NQD  Nude
BLONDIE  NQD  Nude
GIRL     NQD  Nude  --- From Disk #154
HEATHER  NQD  Nude
JOYCE    NQD  Nude
KISSY    NQD  Nude  --- From Disk #154
PIXIE    NQD  Nude

SUSAN    MAC  A ReadMAC created from SUSAN.NUD (from disk #154) with the
                TMAC100 program on this disk.

COLORNUD BAS  G. Wesley / D. Moon color vsn. of HIRESNUD.BAS
                (NUDE.BAS on Disk 176)  --- From Disk #154
HIRESNUD BAS  G. Wesley black/white vsn. of COLORNUD.BAS
                (NUDE.BAS on Disk 208)  --- From Disk #154
```
{% endraw %}

## HIRESNUD.BAS

{% raw %}
```bas
1  'Modified from the HP 9845 Basic by G. Wesley  12/29/82
10  CLS
11  DEFINT X,Y,C
14  F=1
20  KEY OFF
30  SCREEN 2
40  C=0:LINE -(0,0),C
50  FOR I=1 TO 360
60  READ X,Y,P
70  X=X*640/360/F
80  Y=Y*200/240/F
90  Y=(200/F)-Y 'do y transformation to get picture right side up.
100 IF P=13 THEN C=0 ELSE C=1
110 LINE -(X,Y),C
120 NEXT I
130  LOCATE 5,5 ':PRINT "EAT YOUR HEART OUT!!!"
140  GOTO 140
150  DATA  51,100,13,79,103,12,104,92,12
160  DATA  108,87,12,108,82,12,104,72,12
170  DATA  88,57,12,93,75,13,93,78,12
180  DATA  91,82,12,90,84,12,90,87,12
190  DATA  89,90,12,89,94,12,90,93,12
200  DATA  91,89,12,92,86,12,92,83,12
210  DATA  94,77,12,93,75,13,96,80,12
220  DATA  97,83,12,97,87,12,96,89,12
230  DATA  92,92,12,89,94,12,93,89,12
240  DATA  94,85,12,94,77,12,85,81,13
250  DATA  85,83,12,86,84,12,86,82,12
260  DATA  85,81,12,85,86,13,84,86,12
270  DATA  83,88,12,85,86,12,67,54,13
280  DATA  65,60,12,64,67,12,66,74,12
290  DATA  67,74,12,66,67,12,66,60,12
300  DATA  67,54,12,69,56,13,68,61,12
310  DATA  67,67,12,68,70,12,71,73,12
320  DATA  69,69,12,69,64,12,71,60,12
330  DATA  69,56,12,71,60,13,74,64,12
340  DATA  74,68,12,71,72,12,73,68,12
350  DATA  73,64,12,70,61,12,70,63,13
360  DATA  71,63,12,73,65,12,73,68,12
370  DATA  71,69,12,70,69,12,69,68,12
380  DATA  70,65,13,70,66,12,71,66,12
390  DATA  71,65,12,70,65,12,64,87,13
400  DATA  60,91,12,59,94,12,58,98,12
410  DATA  60,100,12,59,97,12,62,92,12
420  DATA  64,87,12,69,86,13,65,88,12
430  DATA  63,93,12,62,100,12,65,98,12
440  DATA  64,95,12,64,90,12,69,86,13
450  DATA  70,91,12,68,95,12,65,98,12
460  DATA  65,97,12,67,95,12,69,91,12
470  DATA  69,86,12,65,88,13,66,88,12
480  DATA  68,89,12,69,91,12,67,94,12
490  DATA  65,94,12,64,93,12,65,90,13
500  DATA  65,91,12,66,91,12,66,90,12
510  DATA  65,90,12,61,101,13,50,104,12
520  DATA  36,100,12,24,90,12,17,75,12
530  DATA  16,61,12,25,43,12,44,33,12
540  DATA  60,33,12,79,40,12,57,38,12
550  DATA  41,45,12,24,62,12,17,75,12
560  DATA  51,100,13,57,95,12,63,80,12
570  DATA  62,72,12,58,78,12,62,65,12
580  DATA  65,49,12,52,45,13,65,49,12
590  DATA  88,65,12,87,50,12,79,40,12
600  DATA  17,75,13,5,67,12,0,45,12
610  DATA  4,23,12,25,11,12,58,17,12
620  DATA  110,14,12,135,25,12,160,32,12
630  DATA  164,40,12,162,44,12,155,46,12
640  DATA  143,45,12,151,43,12,149,40,12
650  DATA  125,48,12,118,55,12,119,51,13
660  DATA  117,58,12,113,62,12,104,62,12
670  DATA  115,61,13,115,67,12,111,71,12
680  DATA  104,72,12,121,52,13,133,50,12
690  DATA  145,51,12,131,56,13,145,51,12
700  DATA  170,47,12,245,41,12,255,42,12
710  DATA  262,46,12,271,58,12,282,81,12
720  DATA  281,78,13,287,81,12,280,76,13
730  DATA  285,74,12,288,75,12,278,73,13
740  DATA  282,75,12,283,79,13,288,75,12
750  DATA  293,74,12,301,77,12,299,76,13
760  DATA  306,75,12,313,76,12,314,77,12
770  DATA  313,78,12,309,78,12,309,77,12
780  DATA  311,76,12,309,78,13,304,79,12
790  DATA  300,81,12,295,79,12,302,80,13
800  DATA  313,83,12,316,85,12,312,85,12
810  DATA  311,84,12,311,83,12,313,83,12
820  DATA  312,85,13,300,84,12,292,82,12
830  DATA  300,84,13,305,88,12,306,90,12
840  DATA  302,89,12,301,88,12,302,87,12
850  DATA  305,88,12,302,89,13,289,85,12
860  DATA  295,79,13,280,92,12,275,91,12
870  DATA  244,68,12,251,64,13,244,68,12
880  DATA  220,73,12,170,89,12,164,92,12
890  DATA  157,92,12,220,73,13,243,73,12
900  DATA  261,81,12,270,95,12,273,109,12
910  DATA  270,125,12,259,143,12,244,160,12
920  DATA  227,177,12,208,193,12,196,206,12
930  DATA  214,202,13,198,210,12,189,213,12
940  DATA  182,213,12,176,211,12,172,206,12
950  DATA  170,199,12,172,190,12,182,167,12
960  DATA  197,141,12,209,125,12,236,105,12
970  DATA  180,122,13,185,126,12,187,137,12
980  DATA  191,150,12,208,193,13,214,202,12
990  DATA  222,216,12,228,223,12,234,226,12
1000  DATA  240,226,12,247,222,12,276,192,12
1010 DATA  305,164,12,318,155,12,330,150,12
1020 DATA  349,137,12,347,139,13,360,149,12
1030 DATA  360,140,12,357,129,12,353,123,12
1040 DATA  350,121,12,335,120,12,349,137,13
1050 DATA  339,123,12,324,110,12,322,111,12
1060 DATA  322,113,12,324,116,12,330,121,12
1070 DATA  341,126,12,337,124,13,338,127,12
1080 DATA  335,120,13,335,116,12,349,107,12
1090 DATA  348,106,12,340,110,12,324,110,12
1100 DATA  341,126,13,334,128,12,330,128,12
1110 DATA  325,126,12,320,123,12,316,122,12
1120 DATA  312,124,12,310,127,12,308,134,12
1130 DATA  305,140,12,290,150,12,275,159,12
1140 DATA  257,168,12,249,174,12,244,179,12
1150 DATA  293,148,13,289,142,12,285,142,12
1160 DATA  282,143,12,274,150,12,266,155,12
1170 DATA  241,163,12,248,205,13,247,194,12
1180 DATA  241,163,12,90,99,13,95,103,12
1190 DATA  94,100,13,98,114,12,105,128,12
1200 DATA  108,132,12,108,134,12,110,135,12
1210 DATA  111,134,12,108,132,12,105,128,13
1220 DATA  117,134,12,111,134,13,117,134,12
1230 DATA  131,130,12,143,122,12,99,95,13
1240 DATA  114,100,12,130,108,12,124,97,13
1250 DATA  130,104,12,137,115,12,143,122,12
1260 DATA  160,130,12,167,132,12,169,134,12
1270 DATA  171,133,12,171,131,12,167,132,12
1280 DATA  160,130,13,175,126,12,171,131,13
1290 DATA  175,126,12,181,120,12,186,110,12
1300 DATA  188,100,12,186,89,12,181,121,13
1310 DATA  190,121,12,200,118,12,210,112,12
1320 DATA  222,103,12,195,120,13,200,122,12
1330 DATA  183,122,13,190,125,12,207,127,12
1340 DATA  233,107,13,232,103,12,365,0,13
1350 STOP
65399 '** DONE - PRESS ENTER TO RETURN TO MENU **
```
{% endraw %}

## READMACS.DOC

{% raw %}
```
                               READMACS.DOC
                               ============

Note & Disclaimer:
------------------

    The following contains information relating to the format of "ReadMAC"
files as they are found on IBM PCs and compatibles.  The information is
thought to be accurate but comes from a number of sources, often informal,
and is not guaranteed to be accurate.  No warranty, express or implied,
of any kind is offered with respect to the following material.  You use
the following information at your own risk.


What is a ReadMAC?
------------------

ReadMACs are graphic images originally produced on the Apple Macintosh (TM)
computer.  One day some person realized that if these images could be
transfered to an IBM PC or compatible, they could be displayed on the
IBM CGA monitor.  They are called ReadMACs because one of the first programs
to be able to display these images on PCs was called READMAC.  One source
indicates that the original READMAC program was created by a company called
Micro Technologies, Inc., 921 Royal Heights Road, Belleville, Illinois 62223.
It is not known by this writer if this address is still current.


Sources for ReadMACs:
---------------------

ReadMACs can be found on most electronic bulletin board systems (BBSs).
They are distinguished by their description, which usually includes the term
"ReadMAC" or "MAC", or by their extension, which may be ".MAC" or ".MCP".

If the ReadMAC on the bulletin board has been compressed to reduce transfer
time over a modem, the extension may be ".ARC", which means you will have
to decompress the .MAC file before it can be used by a viewer.  If you are
new to BBS-ing, ask a friend or associate to help get you started, or
ask for help on the board itself.

If you have access to both a Macintosh and a PC, and you wish to transfer
ReadMACs from the Mac to the PC, you can reportedly use the following
direct-transfer arrangement:

     On the Macintosh, you can use a communications program such as
     MacLink or MacTerminal to send the image.  On the PC, just about
     any PC communications package can be used to receive it.

     The direct cable between the two machines reportedly
     uses the following configuration:

             MacIntosh 9-pin                    PC Serial 25-pin

                 pin 3 <----------------------------> pin 7
                 pin 5 <----------------------------> pin 3
                 pin 9 <----------------------------> pin 2

             (DB9P connector)                   (DB25S connector)

ReadMAC File Format:
--------------------

The overall file architecture of the image on the Macintosh is a critter
foreign to those of us who live in the IBM-compatible PC world.  Thus,
the following discussion applies to the format of ReadMACs that have
already been transfered to a PC.

ReadMACs on IBM-compatible systems have two parts.  The first part is
header information and the second is the actual image.  Two varieties
of ReadMACs exist, one with 512-byte headers and the other with 640-byte
headers.

A 512-byte-headed ReadMAC is identifiable by the fact that the first two
bytes of the ReadMAC file are binary zeroes (at address hex 0000, the
first two bytes are hex 00 00).  For 512-header ReadMACs, apparently no
other useful information (as far as PCs are concerned) exists anywhere
in these 512 bytes.

A 640-byte-headed ReadMAC is identifiable by the fact that the second
byte of the header is greater than zero (at address hex 0001, byte > 00).
This byte in fact is a length code for a bit of titling information in
the header.  A sample dump of a 640-header ReadMAC follows: 

 Hex
Offset  Bytes (Hex)                                      Displayable Bytes

000000  00 0C 74 69 74 6c 65 20-66 6f 72 20 31 32 .. ..  ..title for 12..
000010  .. .. .. .. .. .. .. ..-.. .. .. .. .. .. .. ..  ................
000020  .. .. .. .. .. .. .. ..-.. .. .. .. .. .. .. ..  ................
000030  .. .. .. .. .. .. .. ..-.. .. .. .. .. .. .. ..  ................
000040  .. 50 4E 54 47 50 41 4E-54 01 .. .. .. .. .. ..  .PNTGPANTo......
000050  .. .. .. .. .. 7E CB ..-.. .. .. .. .. .. .. ..  ................
000060  .. .. .. .. .. .. .. ..-.. .. .. .. .. .. .. ..  ................
 ...
000270  .. .. .. .. .. .. .. ..-.. .. .. .. .. .. .. ..  ................
000280  0A 6F BB B7 77 FD F7 5A-DB A9 77 5F FE FF 08 F7  ................
000290  BB 6D 6D DD 52 AF 7D EF-D0 FF 0A 5D 76 6D EF 7B  ................
 ...
007F30  2A 4A 29 55 49 55 15 22-94 AA 8A 95 AE AB 4A AB  ................
007F40  24 85 51 12 40 B9 00 B9-00 B9 00                 ...........

As you will note, the second byte of the file is a hex 0C (twelve), and
it is followed by twelve bytes of title ("title for 12").

At offset hex 41 is a literal "PNTGPANT" and byte of hex 01.  This is
apparently a signature of the program which originally created the ReadMAC
on the Macintosh.  Some ReadMAC viewers are sensitive to the presence of
this literal, and will not recognize a ReadMAC without its presence.

At offset hex 55 is a length code.  This is also used by some ReadMAC
viewers and, if incorrect, will cause the image to be truncated or not
displayed at all.  The correct value for the length code is usually
determinable as follows:

     Get the Last Address of the file.  (Here 7F4A)
     Add 1 to get the File Length.      (7F4A + 1 = 7F4B)
     Subtract hex 80.                   (7F4B - 80 = 7ECB)

Note that the length code is placed in the ReadMAC in UNinverted order.
In other words, the most significant byte of the length is first, and
the least significant second.  On IBM PCs and compatibles, a word's
worth (2 bytes) of information is usually stored least-byte-first,
and for folks used to this ordering, the NORMAL order of high-byte-first
could be confusing.

All other bytes in the header are apparently irrelevant as far as PC-based
ReadMAC viewers are concerned.  (These bytes reportedly contain bit maps
of the paint patterns that are displayed on the borders of the MacPaint
screen on the Macintosh.)

Note that the YAMP ReadMAC viewer is not sensitive to errors in the
header of a ReadMAC, and will very rarely choke on a file.  It can handle
ReadMACs with both 512-byte and 640-byte headers successfully.


ReadMAC Image Format:
---------------------

Once the header is taken care of, the actual image information (beginning
at either hex 200 or hex 280) can be processed.

Overall, each ReadMAC defines 720 horizontal scan lines of 576 pixels
each.  Since each byte can contain 8 pixels (bits), each scan line is
72 bytes long.  That is why most PC-based ReadMAC viewers supply a left
and right border of 4 bytes each.

Apparently each ReadMAC must define the full 720 lines, even if trailing
lines are not used in the image.  (However, the YAMP viewer will supply
trailing lines if the image information stops short.)

To conserve space the ReadMAC image is in a mildly-compressed format.
Where byte-length bit patterns repeat, a repetition code followed by the
byte of the pattern is used.  Where information does not repeat, a
length code followed by the miscellaneous bytes of bit-patterns is given.

The encoding is as follows:

    Examine the first byte of the image data.
    If it is > 127 decimal, it indicates a repetition code.
        Calculate (257 - this byte).  This is the repetition count
        of the next byte.
    If it is < 128 decimal, it is a length code.  Add 1 to this
        value.  This is the number of bytes of image data which
        follow the length code.
    After processing either a repetition code and its bit pattern
        or a length code and its bytes, the next byte in the file
        is again either a repetition code or a length code.

One other adjustment must be made.  Because on the Macintosh, a 1 bit
indicates a dark pixel and a 0 bit a white pixel, the bits must be
flipped before display on a PC-based system.  This is usually accomplished
with an XOR 255 instruction.





Note that the ReadMAC compression is apparently line-by-line.  In other
words, if the trailing 20 bytes of line 15 match the leading 10 bytes
of line 16, the 30 matching bytes are NOT compressed into one repetition
encoding.  Similarly, a length code is apparently never large enough to
have its following bytes spill over from one image scan line to the next.

However, YAMP should work even if these situations should ever occur,
because it DOES test for them.


Aspect Ratio Differences:
-------------------------

The image on a Macintosh screen is roughly 576 by 432.  This means the
width of a pixel matches the height of a pixel.  On a PC-based CGA
monitor, the screen is 640 by 200 in high-resolution mode.

This means that in a normal display mode, most ReadMAC viewers will show
ReadMACs as elongated, stretched images.

There are two easy ways to correct this distortion.  One is to simply
skip every other image scan line, giving the CGA screen a "fake"
640 by 400 capacity.  The other is to double the pixel sizes on a
horizontal basis.  This corrects the aspect ratio without losing
detail, but the image must be panned for the entire image to be viewed.

Of course, ReadMAC viewers which can display on EGA monitors do not 
have to contend with these problems.  EGA views of ReadMACs come very
close to original aspect ratio, and distortion is unnoticeable.

(The YAMP viewer is a CGA-only viewer at this time, and uses both
tricks of aspect ratio conversion.  It also supplies a number of enhanced
variations of these methods.)

=======================================================================

The following file was found on an electronic bulletin board and is
given here for informational purposes only:


TESTMAC.BAS:

50 DEFINT A-Z
100 KEY OFF:CLS
150 PRINT "Test example of reading READMAC files in basic"
200 PRINT "Written by Keith P. Graham for PC-Rockland BBS (914) 353-2176"
250 PRINT "input name of file to open"
252 '
255 '     It is not know whether the above number is still correct.
258 '
300 INPUT F$                                'get file name
350 OPEN F$ AS #1                           'open it
400 FIELD #1, 128 AS L$                     'we'll use 128 byte chunks
450 FOR J = 1 TO 5: GET #1 : NEXT           'quickly bypass first 5 chunks
452 '
455 '     Apparently set up for 640-byte headers only.
458 '


500 REM set screen type
550 SCREEN 2                                'hi res
600 CLS
650 REM loop for reading file
700 GET #1                                  'get first data chunk
750 GOSUB 2250                              'get first byte of data in A$
800 IF ASC(A$) > 127 THEN GOSUB 2650 ELSE GOSUB 2950
850 REM this is the key, bytes from 0 to 127 indicate that the following
900 REM bytes are to be sent to the screen
950 REM value of the first byte from 128 to 255 mean that the next byte
1000 REM is to be repeated.
1050 ZZ=1                                   'zz is a counter into r$ value
1100 WHILE NOT EOF(1)
1150    GOSUB 1750                          'get next logical byte
1200   DEF SEG=&HB800 + &H200*T             'set up raster line address
1250   POKE X+Y,ASC(A$) XOR 255             'poke the byte on the screen
1252 '
1254 ' Note the inversion of the bits with XOR 255
1256 '
1300  X = X + 1                             'count how many on a line
1350 REM the next line limits the number of bytes on a line to 72
1400 REM the y is the next line down, but the lines are interlaced
1450 REM so t controls the interlace
1500 REM all of this stuff is screen stuff and has nothing to do with the
1550 REM readmac file except that readmacs are 72 bytes wide
1600 IF X> 71  THEN X = 0 :IF T = 0 THEN T = 1 ELSE T = 0:Y = Y+80
1650 WEND                                   ' get out
1700 END
1750 REM get next byte
1800 REM r$ has the expanded data from the file
1850 REM zz is kept as an index into that file
1900 IF ZZ <= LEN(R$) THEN A$=MID$(R$,ZZ,1):ZZ=ZZ+1:RETURN
1950 REM have completed the runlength, get a new string
2000 GOSUB 2250                             ' get a real byte from file
2050 IF ASC(A$) > 127 THEN GOSUB 2650 ELSE GOSUB 2950  'check  expansion
2100 ZZ=2                                   'next time through start
2102 '                                        with second byte
2150 A$=MID$(R$,1,1)                        'return first byte
2200 RETURN
2250 Z = Z + 1                              'this is get a real byte
2251 '                                        from 128 byte chunk
2300 IF Z > 128 THEN GOSUB 2450             'if none left get a new chunk
2350 A$=MID$(L$,Z,1)
2400 RETURN
2450 REM get a new record
2500 GET #1                                 'get next chunk
2550 Z = 1                                  'start with first byte
2600 RETURN
2650 REM get dup string
2700 ZZ=257-ASC(A$)                         'if byte > 127 then subtract
2702 '                                        it from 257
2750 GOSUB 2250                             'get a new byte
2800 R$=STRING$(ZZ,A$)                      'make r$ a string of a$ length zz
2850 ZZ=1                                   'start at first byte
2900 RETURN




2950 REM positive so we count bytes
3000 ZZ=ASC(A$)+1                           'if 0 to 127 then just add 1 to it
3050 R$=""                                  'null out r$
3100 FOR J = 1 TO ZZ                        'zz times
3150 GOSUB 2250                             'get a real byte
3200 R$=R$+A$                               'concatenate it to r$
3250 NEXT                                   'do it again
3300 ZZ=1                                   'set index to first byte
3350 RETURN



                           --- End of Document ---

```
{% endraw %}

## TMAC100.DOC

{% raw %}
```
+----------------------------------------------------------------------------+
|                                                                            |
|        T M A C  --  Convert TXT Files to ReadMAC Format  -- v. 1.00        |
|        ============================================================        |
|         (C) 1989 Galaxy Systems Corporation -- All Rights Reserved         |
|                                                                            |
+----------------------------------------------------------------------------+

                         QuickBASIC Runtime Modules
    (C) Copyright 1982-1988 Microsoft Corporation -- All Rights Reserved


T M A C  may be given away and shared between interested parties on an AS-IS
basis only.  No liability is assumed by Galaxy Systems Corporation for any
damages, direct, indirect or consequential, which may arise out of the use
of this product or inability to use this product.  No warranty, express or
implied, including the warranties of merchantability and fitness for a
particular purpose, is offered.

The complete, entire  T M A C  package is now distributed by PC-SIG,
and upgrades to the package will only be available through PC-SIG.
No monies of any kind are solicited.  If you have any comments about
the package, please address them to:

>>> Galaxy Systems Corp., Box 26387, Richmond, Va. 23260-6387 <<<  --Enjoy!


Program Specifications for  T M A C  (TMAC100.EXE):
===================================================

     Usage:          . Converts Printer Art into ReadMAC-format graphic
                       images.

                     . Contains a built-in version of YAMP, a ReadMAC
                       viewer optimized for display on CGA monitors.

     Requirements:   . Color Graphics Adaptor card, or equivalent
                     . DOS 2.1 or later; 384K available memory (may
                       also run successfully in some smaller machines)



















                                  Page 1
Introduction to TMAC:
=====================

The TMAC program is a stripped-down version of the REPP program
on PC-SIG Disk 154 ("Printer Art").  While the REPP program (Reverse-
Engineer Printer Picture) converted old-style printer art into
CGA graphics, TMAC will convert such printer art into ReadMAC-format
graphics files which may then be read by any utility program which
displays ReadMACs.

Of course, TMAC itself contains a built-in ReadMAC viewer.
The viewer is YAMP, "Yet Another Mac Program", a viewer
optimized for the display of ReadMACs on CGA monitors.  It contains
Portrait and Landscape mode views, contrast settings, colorized
contrast settings, inversions and mirroring, and other options.

The ReadMAC viewer is available whenever you select a .MAC file
to view from out of the F4 area (see later).

The documentation that follows is organized in this order:

         .  An introduction to the TMAC menu

         .  A suggested installation procedure

         .  A list of initial considerations

         .  An explanation of command-line options

         .  An explanation of the TMAC menu

         .  An explanation of the YAMP options


Have fun!























                                  Page 2
Introduction to the TMAC Menu:
==============================

The  T M A C  menu can be used to create bit-image graphic
equivalents of old-style, ASCII-type 'printer art'.

Further,  T M A C  provides you with various 'tuning' options,
just as R.E.P.P. does.  However, because the purpose of TMAC
is to create ReadMACs, only vertical orientation options are
available.  And while squeezed and normal modes are available,
as well as 5 contrast settings, no color contrast settings
are available as they are in the R.E.P.P. program.

Also, once a picture has been transformed into a ReadMAC, it can
be recalled for viewing with the built-in YAMP viewer.  The YAMP
viewer DOES have horizontal-orientation viewing capability and
a colorization mode.  Also, any ReadMAC can be called up for
view, not just ones created from Printer Art by TMAC.

Pictures to be converted to ReadMACs must be in printable,
ASCII form.  If "COPY picname.pic LPT1" works, then TMAC will
usually work with "picname.pic".




































                                  Page 3
Installation Notes:
===================

1.  The TMAC package consists of the following files:

          TMAC100.EXE      The printer art conversion program.
          TMACHELP.DAT     On-Line Help information.
          TMAC100.DOC      This documentation file.

    Various sample pictures and files are also usually included.

2.  If you have a hard drive, skip to #3.  If you will be running REPP
    from a floppy-based system, read on:

    For a single-drive system:

          Place TMAC100.EXE and TMACHELP.DAT onto a
          single floppy.  Copy any printer art and
          ReadMACs you wish to view to this same floppy, or to a
          RAM disk which you may have set up (see your DOS manual
          for details on VDISK.SYS).

    For a double-drive system:

          Place TMAC100.EXE and TMACHELP.DAT onto one
          floppy.  You should also have room to include the TMAC100.DOC
          file and any other samples that may have come with the package,
          so you may as well keep everything together.

          Place the files of printer art and ReadMACs
          onto a second floppy.

          When you are ready to run the programs, run them from the
          floppy they are on, and set up the default directory to point
          to the root directory of the other drive.  (See function F1,
          later in this document.)  Note:  you can
          switch to the other drive and switch directories once
          in the program also.

3.  For hard disk users, the following installation configuration is
    suggested:

          Create a directory such as \IMG.  Copy all the files from
          this package into it.  (Obviously, you won't need the .DOC
          file or the sample .PIC files to *run* the programs, so if
          you are tight on space, you can eliminate these.)












                                  Page 4
3.  (cont'd.)

          TMAC is designed to run with DOS versions that have some
          problems in providing directory information.  Therefore,
          whenever TMAC100 is executed, it will assume that the
          TMACHELP.DAT file is in the current directory unless
          told otherwise by the /DDIR= command-line option:

          C>TMAC100 /DDIR=\IMG

          You could also create a .BAT file in a directory that is in
          your current PATH, and then be able to execute TMAC100 
          from any point on your hard drive:

          TMAC.BAT:

              TMAC100 /DDIR=\datfiledirectory

          Other run-time options are also available and are discussed
          in the text that follows.


Some Initial Notes:
===================

1.  TMAC100 can determine if you have a CGA-capable monitor, but it
    cannot tell if the monitor is color or black & white (monochrome).
    If you have a monochrome CGA monitor, some parts of the menus may be
    very hard to read.  Use the /BWMON option on the command line:

      C>TMAC100 /BWMON

      A>TMAC100 /BWMON

2.  TMAC Menu:  Printer art which uses OVERPRINTING *IS* SUPPORTED.

3.  Upon entry, TMAC100 sets up to work with the current drive's CURRENT
    DIRECTORY.  *THIS IS DIFFERENT FROM OLDER VERSIONS OF REPP, WHICH SET
    UP IN THE ROOT DIRECTORY.*  You can set the directory again, even
    changing the drive and giving an ambiguous file specification to
    limit the display, if you wish, once in this menu screen.
    You can also specify the Initial DIRectory and file specification
    on the command line, as in the following example:

          C>TMAC100 /IDIR=\IMG\*.PIC













                                  Page 5
+--------------------+
|                    |
|  Running TMAC100:  |
|  ================  |
|                    |
+--------------------+

TMAC100 is invoked from the command line by typing

       d>TMAC100

Several optional command-line parameters may be coded.  The
complete syntax for a TMAC100 invocation is

       d>TMAC100 [/BWMON]          [IDIR=\initialdirectory&filespec]
                                   [DDIR=\dat&helpfiledirectoryspec]

Note that the square brackets [] simply indicate OPTIONAL items
that are not required for executing TMAC100.  You do not code
the [ and ] brackets themselves.

Also, since QuickBASIC replaces all lower-case letters on the command 
line with upper-case, case is not important when keying the parameters.

       /BWMON      is used to make all menu displays Black & White.
                   If you are using a composite video monitor, you
                   will appreciate this.

       /IDIR=      indicates to the program what the initial directory
                   is to be.  If omitted, the current directory is
                   used as the initial directory.

       /DDIR=      indicates the location of the TMACHELP.DAT file.
                   This is needed only if the file is not in the
                   directory from which TMAC100 is being invoked.

Once the program has begun and the menu screen is showing,
F1, F2, F3 and F4 place the cursor into the associated keying
area.  To leave an entry unchanged, press RETURN or another F-key
WHENEVER the cursor is at the LEFT EDGE of the keying area.


















                                  Page 6
+------------------+
|                  |
|  The TMAC Menu:  |
|  ==============  |
|                  |
+------------------+


F1 (Current Drive/Directory/Ambiguous File Name Specification):
===============================================================

Note that TO ENTER A DIRECTORY, you DO NOT lead off with the
CHDIR or CD command; just enter the directory name.  Also, to
list any files, a specification (such as *.*) MUST follow the
directory.  Example:  \art\*.pic

The directory you entered will be shown once you press another
function key (or RETURN).

If you just wish to point to a directory but do not wish the files
listed, enter the directory name without any file specification,
as in
	\dir\subdir

You may also enter a drive letter and colon (:) to switch to a 
particular drive.

If you enter a drive letter and directory (for example, b:\pic) and
the drive you specify IS valid but the directory you specify IS NOT,
then REPP will switch to the new drive's CURRENT directory.


F2 (Selection of File to Graph or Convert to a ReadMAC):
========================================================

In this area, you key the name of the printer art file to be translated
into a graphics image.  If you omit the extension, ".PIC" is assumed.

The file's existence is verified once you activate the selection
(see below) or move out of this keying area into another area,
so some disk activity may occur.

If the file does not exist, you will be beeped at and a message
will appear.


F3 (Convert the File Listed in the F2 Area to a ReadMAC):
=========================================================

Key in the name by which you wish to save the ReadMAC version of
the file in the F2 area.  If you omit the extension, ".MAC" is assumed.

The file MUST NOT ALREADY EXIST, or else you will be beeped at and
a message will appear.

File verification occurs when you activate the save (see below)
or move to another keying area.

                                  Page 7
F4 (Recalling a Saved or Other ReadMAC):
========================================

In this area, you key the name of a ReadMAC you wish to view.  The file
must exist, or else you will be beeped at, and a message will appear.

File verification occurs when you activate the recall or move
to a different keying area.

If you do not specify an extension, ".MAC" will be used.


Activating F2, F3, or F4:
=========================

To execute an F2, F3 or F4 option after all other options have been
set or are satisfactory, press F2, F3 or F4, enter the file name, and
EITHER press RETURN or REPEAT the same F-key again.

(If the correct file name is already in the option area, you can just
press the appropriate F-key TWICE.)

After an image is drawn with the F2 option, the pressing of any key
other than F9 or F10 will return you to the menu.  Pressing F9 or
F10 will return you to DOS.


F5 (Framing), F6 (Sizing), F7 (Contrast/Color Palette):
=======================================================

For TMAC, F5 is not available.  The Framing will always be
"Vertical / Exact".  After a ReadMAC is created, you can use the
YAMP ReadMAC viewer's Landscape mode to view the image sideways.

F6 & F7 simply rotate between the available customizing options
for the generation of the graphics image.


F8 (Help):
==========

F8 displays an abbreviated version of this documentation.


F9/F10 (Exit/Interrupt Drawing):
================================

F9 quits to DOS, to the directory last in the F1 area, when pressed
with the TMAC menu showing.  F10 works the same way, except during the
conversion or draw (F2/F3) functions:

If F9 is pressed while the graphics picture is being drawn or converted,
TMAC will return to the current menu screen.  So if you do not like how a
graphics image is turning out, you do not need to wait for its completion
before adjusting the contrast and trying again, for example.  If you
use F10, REPP will return to the menu screen, but NOT show the contents
of the current directory.  (Useful if a snoop is in the area.)

                                  Page 8
An Example:
===========

On the distribution disk is a file called SHIP.PIC.
The following will create an image of this craft:

Press F2 and key 'SHIP'.  (The .PIC suffix is assumed.)
Press F6 to select 'squeezed' mode.
Press F7 enough times to bring up CRISPY.

Press F2 once.  This gives you a chance to change the picture
file name.  Since it is correct, however, just press F2 -AGAIN-
to indicate so, and the SHIP.PIC file will be analyzed for you.

After the analysis, press RETURN (or ENTER) to begin drawing the
picture.  After the picture (only a portion of which can be placed on
the screen) is completed, you can press ENTER to get back to the menu.  

Now press F3 to get into that area, and type 'SHIP' and press ENTER.
(The .MAC extension is assumed.)  Again, the file will be analyzed,
and you will be given a chance to change the Sizing or Contrast
settings.  Change them if you like.  Press ENTER to begin the
conversion of the SHIP.PIC file to a SHIP.MAC file.

After the conversion is complete and the menu is again showing,
press F4 and type 'SHIP' and press ENTER.  The converted image file
will be recalled for viewing.  While in the YAMP ReadMAC viewer,
pressing F1 will bring up a Help Screen.  Pressing ENTER will get
you back to the TMAC menu.





























                                  Page 9
+----------------------------+
|                            |
|  The YAMP ReadMAC Viewer:  |
|  ========================  |
|                            |
+----------------------------+

TMAC100 incorporates the functions of the YAMP 2.1 ReadMAC viewer.
The YAMP program ("Yet Another MAC Program") is a ReadMAC viewer which
has been painstakingly optimized for the display of ReadMACs on CGA
monitors.  If you request a .MAC file to be viewed, YAMP viewer
will be invoked.

While in the YAMP viewer, F1 or F8 bring up a help menu.  F1 was the
original key used by YAMP; F8 was added to be consistent with the
TMAC and REPP menus.

Note that, in giving the ReadMAC viewer commands, lower-case keys
work just as well as upper-case.

The following functions are available:

    .  You can scroll the image with the Arrow Keys and PgUp and PgDn.

    .  The Home key brings you to the top of the image, and the
       End key puts you at the bottom of the image.

    .  Ctrl-Left Arrow aligns you with the left edge of the image, and
       Ctrl-Right Arrow aligns you with the right edge of the image
       (especially useful in the double-wide modes).

    .  "V" toggles between 1/2-vertical & normal modes.  Because of the
       number of vertical scan lines on the CGA display (200) as opposed
       to the number of lines on the Macintosh (350 or so), the image on
       the CGA will appear elongated.  Cutting the image in half restores
       the aspect ratio but loses you some detail.

    .  "H" toggles between enhanced-dbl-wide & normal modes.  Another way
       to get around the elongation problem is to make the ReadMAC image
       twice as wide on the CGA screen.  This means you will now have to
       scroll sideways to view the entire image, but you will not lose
       any detail.  However, the image may appear grainy.  This enhanced
       double-wide mode has been set up to reduce the graininess where
       possible.  See also the next option.

    .  "T" toggles between original-dbl-wide & normal modes.  "T" is the
       original way in which most ReadMAC viewers created a double-wide
       mode.  It is still useful with the REPP program's UTIL Menu 
       colorization options, as these options (especially option 07)
       work better with an image captured from a "T" double-wide mode
       as opposed to an "H" double-wide mode.







                                  Page 10
    .  "S" begins a sequence of 1/2-vertical "Smart" modes.  Keying "S"
       again & again toggles between 5 contrast settings.  These modes
       are similar to the "V" mode but use extra algorithms to enhance
       the image.  You get out of the "S"mart modes by choosing another
       mode, such as "H", "V", "P" (see below), or "N" (for normal mode).

    .  "P" begins a sequence of 1/2-vertical Palette-1 colorizations.
       Pressing "P" again & again toggles between 5 contrast settings.
       "P" modes function like the "S" modes above.  Again, get out the
       "P" modes by choosing another mode (H,V,N,S).

    .  "I" simply inverts the image top-to-bottom.

    .  "M" mirrors the image.  (Inverts left-to-right.)

    .  "L" toggles between Landscape and Portrait views of the image.
       The Portrait (or vertical) view is the normal view.  The Landscape
       (or horizontal) view is created by this option the first time
       this option is selected for a particular image.  Thereafter, access
       to the Landscape view of an image is practically instantaneous.
       Note that the Portrait and Landscape views of an image are
       independent images.  That means you can manipulate one image
       without affecting the other, and when you toggle between the
       images, you will always return to where you left off with an
       image, and return to the display mode in which you were with
       that image.

    .  "D" just reDisplays the current screen.  This is useful after the
       display of the help screen.

    .  "Z" applies a smoothing algorithm to the image.  Sometimes, after
       the creation of a Landscape version of a ReadMAC, a "striping"
       or "lined-up" effect will appear.  Smoothing will get rid of this,
       but we suggest trying the "S"mart modes on the image first.
       This is because the "Z" function actually changes the image
       in memory, and if you have both Portrait and Landscape views,
       it changes them BOTH.  There are some exiguous technical reasons
       for this, which we will omit here.  See also the next option.

    .  "R" reloads the image from disk.  If, after a smoothing function
       (the only function that actually modifies the image), you decide
       you would like the original image back, just press "R".  This keeps
       you from having to return to the REPP or UTIL menu screen to
       request a reload of the ReadMAC file.

    .  RETURN (ENTER) or ESC get you out of YAMP and return you to the
       TMAC menu.  Consistency note:  TMAC and YAMP were originally 
       different programs, so there are some inconsistencies in the user
       interface.  If you wish to use the same key to return to the TMAC
       menu after viewing any image, just use the RETURN (or ENTER) key.

    .  Effect of F9 and F10:  F9 and F10 work as if the image were always
       completely displayed, and return you to DOS.  This is because the
       grafting of YAMP onto TMAC100 was not 100% transparent.  To hide
       the current screen on a temporary basis, see the following:



                                  Page 11

    .  "Ins" and "Del" are the "BOSS" keys for the YAMP viewer.  If you
       press these keys, they will show a normal screen on an apparently
       "hung" system.  No keystrokes will appear to work (besides Ctrl-
       Alt-Del, of course).  To get back to what you were viewing after
       the danger passes, press Ctrl-Home.

Extra note:  The smoothing routine (Z) turns out to be asymmetric in its
effect on the "S"mart and "P"alette modes.  This means that after
"smoothing" or colorizing, the "S"mart and "P"alette modes may differ
in their effect on an image that has been mirrored from one that has not
been mirrored.  Try it and see.






+--------------------+
|                    |
|  Upgrade History:  |
|  ================  |
|                    |
+--------------------+

None.




























                          --- End of Document ---



                                  Page 12

```
{% endraw %}

## YAMP21.DOC

{% raw %}
```
+----------------------------------------------------------------------------+
|                                                                            |
|              Y.A.M.P -- Yet Another Mac Program -- Version 2.1             |
|                Copyright (C) 1988 Galaxy Systems Corporation               |
|                       All Commercial Rights Reserved                       |
|                                                                            |
+----------------------------------------------------------------------------+


               This program may be freely distributed on a
               noncommercial basis only.  For any business use,
               the program must be licensed from Galaxy Systems 
               Corporation, Box 26387, Richmond, VA  23260-6387.

               * NOTICE *  Galaxy Systems Corporation assumes no
               liability for any damages, direct, indirect or   
               consequential, which may arise out of the use of 
               this product or inability to use this product.   
               No warranty, express or implied, including the   
               warranties of merchantibility and fitness for a
               particular purpose, is offered.


+----------------------------+
|                            |
|  The YAMP ReadMAC Viewer:  |
|  ========================  |
|                            |
+----------------------------+

The YAMP program ("Yet Another MAC Program") is a ReadMAC viewer which
has been painstakingly optimized for the display of ReadMACs on CGA
monitors.

Also, it has been coded so as to be able to load most any file that
refers to itself as a ReadMAC.  Some ReadMAC viewers are sensitive to
information in the header of the .MAC file and will fail to display
the image properly or at all.  YAMP has been coded for the utmost
flexibility in this regard.

Further, the "Smart" half-vertical size mode (see later) has 5 different
contrast settings.  The double-wide mode (see later) is a TRUE double-wide
mode, not just a pixel-duplication double-wide mode.  It is the BEST
double-wide mode I have seen to date.

Also, there are no size or panning limitations in the double-wide modes.
The full image is always available.











                                  Page 1
Using YAMP:
===========

There are two stages in the use of the YAMP program.  First, you must
select a ReadMAC file to view, and then you select one or more viewing
options.

After the YAMP title screen appears and you press a key, the current
directory of *.MAC files is displayed on the screen.  At this point,
you can either give another ambiguous file specification or key in the
name of a file to view.  If you omit the extension, .MAC is assumed.

        For example, for a file spec, you could enter

                *.MAC
                A:\DIR\*.pic
                d:			(*.MAC assumed)
                abc\def\*.*
                \ghi			(*.MAC assumed)


Once you have selected a file, it will be brought up in "Normal" mode.
In this mode, the image will appear elongated, because of the difference
in the aspect ratios between the IBM CGA display and the Apple Macintosh
display.

And while viewing a file, F1 or F8 bring up a help menu.  F1 was the
original key used by YAMP; F8 was added to be consistent with the
REPP310 Printer Art Conversion Package, in which the YAMP viewer is
also included.

Once you are viewing a file, a number of display-modificaton options
become available.  Most are selected with single keystrokes.  If an
option is selected with a letter, both upper and lower-case versions
of the letter will work identically.

The options are as follows:

    .  You can scroll the image with the Arrow Keys and PgUp and PgDn.

    .  The Home key brings you to the top of the image, and the
       End key puts you at the bottom of the image.

    .  Ctrl-Left Arrow aligns you with the left edge of the image, and
       Ctrl-Right Arrow aligns you with the right edge of the image
       (especially useful in the double-wide modes).

    .  "V" toggles between 1/2-vertical & normal modes.  Because of the
       number of vertical scan lines on the CGA display (200) as opposed
       to the number of lines on the Macintosh (350 or so), the image on
       the CGA will appear elongated.  Cutting the image in half restores
       the aspect ratio but loses you some detail.






                                  Page 2
    .  "H" toggles between enhanced-dbl-wide & normal modes.  Another way
       to get around the elongation problem is to make the ReadMAC image
       twice as wide on the CGA screen.  This means you will now have to
       scroll sideways to view the entire image, but you will not lose
       any detail.  However, the image may appear grainy.  This enhanced
       double-wide mode has been set up to reduce the graininess where
       possible.  See also the next option.

    .  "T" toggles between original-dbl-wide & normal modes.  "T" is the
       original way in which most ReadMAC viewers created a double-wide
       mode.  It is still useful with the UTIL Menu colorization options
       of the REPP310 package and so has been included here.

    .  "S" begins a sequence of 1/2-vertical "Smart" modes.  Keying "S"
       again & again toggles between 5 contrast settings.  These modes
       are similar to the "V" mode but use extra algorithms to enhance
       the image.  You get out of the "S"mart modes by choosing another
       mode, such as "H", "V", "P" (see below), or "N" (for normal mode).

    .  "P" begins a sequence of 1/2-vertical Palette-1 colorizations.
       Pressing "P" again & again toggles between 5 contrast settings.
       "P" modes function like the "S" modes above.  Again, get out the
       "P" modes by choosing another mode (H,V,N,S).

    .  "I" simply inverts the image top-to-bottom.

    .  "M" mirrors the image.  (Inverts left-to-right.)

    .  "L" toggles between Landscape and Portrait views of the image.
       The Portrait (or vertical) view is the normal view.  The Landscape
       (or horizontal) view is created by this option the first time
       this option is selected for a particular image.  Thereafter, access
       to the Landscape view of an image is practically instantaneous.
       Note that the Portrait and Landscape views of an image are
       independent images.  That means you can manipulate one image
       without affecting the other, and when you toggle between the
       images, you will always return to where you left off with an
       image, and return to the display mode in which you were with
       that image.

    .  "D" just reDisplays the current screen.  This is useful after the
       display of the help screen.

    .  "Z" applies a smoothing algorithm to the image.  Sometimes, after
       the creation of a Landscape version of a ReadMAC, a "striping"
       or "lined-up" effect will appear.  Smoothing will get rid of this,
       but we suggest trying the "S"mart modes on the image first.
       This is because the "Z" function actually changes the image
       in memory, and if you have both Portrait and Landscape views,
       it changes them BOTH.  There are some exiguous technical reasons
       for this, which we will omit here.  See also the next option.

       Extra note:  The smoothing routine (Z) turns out to be asymmetric
       in its effect on the "S"mart and "P"alette modes.  This means that
       after "smoothing" or colorizing, the "S"mart and "P"alette modes may
       differ in their effect on an image that has been mirrored from one
       that has not been mirrored.  Try it and see.

                                  Page 3
    .  "R" reloads the image from disk.  If, after a smoothing function
       (the only function that actually modifies the image), you decide
       you would like the original image back, just press "R".  If you
       are using YAMP from within the REPP310 package, this keeps
       you from having to return to the REPP or UTIL menu screen to
       request a reload of the ReadMAC file.

    .  RETURN (ENTER) or ESC get you out of YAMP and return you to the
       files display.

    .  "Ins" and "Del" are the "BOSS" keys for the YAMP viewer.  They
       are active only while you are viewing an image.  If you press
       these keys, they will show a normal screen on an apparently
       "hung" system.  No keystrokes will appear to work (besides Ctrl-
       Alt-Del, of course).  "See boss, the machine appears to be
       hung.  I press keys and nothing happens!"  To get out of the
       BOSS screens (there are two available) either press Ctrl-Home
       or (if your Boss is watching) re-boot with Ctrl-Alt-Del.

       If your Boss comes around WHILE you are VIEWING THE FILE 
       DIRECTORY, just press RETURN twice.



A note on REPP310:
==================

YAMP is included within the REPP310 Printer Art Conversion Package.
This package is available from PC-SIG on their Printer Art disk #154.

This package is able to convert old-style printer art text files into
displayable graphics.  The package has a number of options and
capabilities, including the ability to be used as a general text-file
scrubber.  For some reason, using REPP to play around with the old
text file pictures is kind of fun, and the disk is very popular.

NOTE:  The REPP310 version of the PC-SIG Printer Art disk is expected
to be available March 15, 1989.  The current version of REPP, REPP288,
does not have YAMP incorporated.















                          --- End of Document ---



                                  Page 4

```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #2295

     Volume in drive A has no label
     Directory of A:\

    FILE2295 TXT      6129   1-01-80   2:32a
    TMAC100  EXE    110247   2-15-89   8:55p
    TMAC100  DOC     22272   2-16-89  11:11p
    TMACHELP DAT      4224   2-16-89  11:58p
    YAMP21   EXE     64838   2-07-89   1:51p
    YAMP21   DOC      9984   2-07-89  11:27p
    READMACS DOC     14080   2-17-89   1:00p
    DARTH    BAS      7793   2-14-88  11:50a
    NUSQ     COM      2176   5-19-84   5:31p
    UN-PQC   BAT       384   2-14-88  12:01p
    DRAGON   PQC      2581  10-30-87  12:12a
    KLINGON  PQC      4696  10-30-87  12:26a
    PROUD    PQC      1778  10-30-87  12:17a
    SHIP     PQC      3513   1-01-88   1:52p
    SNOOPYA  PQC       784  11-15-86  10:55p
    SNOOPYB  PQC       996   8-02-86  11:49p
    TREK2    PQC      6042  10-30-87  12:25a
    MONA     MAC     24204   2-23-89   2:48p
    UN-NQD   BAT       384   2-14-88  12:02p
    88NUDE   NQD      3253  10-11-87   1:04a
    ACNUDE2  NQD      1897  10-03-87   7:37p
    ACNUDE6  NQD      2638  10-03-87   8:23p
    ANITA    NQD      2266   7-26-87   1:41p
    BABE     NQD      3783   2-16-89   9:57p
    BLONDIE  NQD      2257   1-07-86  11:27p
    GIRL     NQD      5254  11-15-86   2:55p
    HEATHER  NQD      3742   1-07-86  10:06p
    JOYCE    NQD      2018   7-19-87   8:59p
    KISSY    NQD      2898   1-07-86  10:44p
    PIXIE    NQD      5072   1-08-86  12:31a
    SUSAN    MAC     14346   2-23-89   2:41p
    COLORNUD BAS      5901   2-14-88  11:52a
    HIRESNUD BAS      4944   2-14-88  11:51a
    GO       BAT       540   7-18-90   2:41a
           34 file(s)     347914 bytes
                               0 bytes free
