---
layout: page
title: "PC-SIG Diskette Library (Disk #1826)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1826/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1826"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "SURVEY LAND YOURSELF"

    You can survey your land yourself -- quickly, easily, and
    inexpensively.  This is a simple compass and tape surveying system which
    can be used to plot deeds, find lost property corners and lines,
    calculate acreage and write land descriptions so that you can find your
    boundary again at a later time. You can also establish test plots,
    subdivide property, layout building foundations and gaming fields, hide
    and recover buried treasure, or  even map a cave.
    
    The surveying instructions (print them from disk files) are in plain
    English. They presume only a high school education. No magic. The catch
    is that the precision is only 98%, equal to the accuracy of drawing on
    graph paper with a protractor and ruler. BASIC is required for
    calculations, and with CGA or Hercules you can draw maps on the screen.
    
    The intended audience is those people who need a good preliminary
    survey. Obvious users include buyers and sellers of land, and
    landowners who want to know their boundaries. Land use planners,
    developers, artists, landscapers, architects, foresters, geologists,
    prospectors, ecologists, hydrologists, pollution control engineers, and
    industrial espionage engineers estimate with this method.
    
    Speleologists and other brands of -ologists use this method to measure
    points, lines, areas, and volumes on, above, and beneath the Earth. For
    2% of the expense and trouble, they get 98% of the information.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## CAVEMAP1.BAS

```bas
1 PRINT"CAVEMAP1, a program in GW-BASIC to calculate preliminary land surveys.◙Copywright (c) 1990 by DP_BYTER, proliferate freely.◙Shareware fee: $1 [one buck] to CAVE Inc, ½ Fast Road, Ritner KY  42639": CLOSE
20 PRINT"Buy your $75 surveying instruments here too.◙See file SIYORDER.TXT to order.
30 PRINT"For this program to be of any use, you first must read◙◙                             SURVEY IT YOURSELF◙◙contained in files SIY*.TXT
40 PRINT"CAVEMAP1  Control=CMT.022  Date=900710": GOSUB 480: KEY OFF: IF NN% = 0 THEN GOSUB 3560
50 PRINT"Whachawannado?
60 PRINT:PRINT"A = Assign coordinates
70 PRINT"B = Reassign coordinates
80 PRINT"C = Close this loop
90 PRINT"D = Display duh data
100 PRINT"E = Eliminate intermediate stations
110 PRINT"H = Help!
120 PRINT"I = Instrument definitions
130 PRINT"K = Kalibrate the map
140 PRINT"L = List the coordinates
150 PRINT"M = Map
160 PRINT"O = Offsets
170 PRINT"P = Precision
180 PRINT"Q = Quit
190 PRINT"R = Read file from disk
200 PRINT"S = Shoot a station
210 PRINT"T = Throw out this data
220 PRINT"W = Write file to disk
230 PRINT"X = Segments
240 PRINT FRE("");" bytes free":PRINT:PRINT"A B C D E H I K L M O P Q R S T W X ?";: GOSUB 520
250 IF IN$ = "A" THEN GOSUB 550: GOTO 50
260 IF IN$ = "B" THEN GOSUB 2890: GOTO 50
270 IF IN$ = "C" THEN GOSUB 2960: GOTO 50
280 IF IN$ = "D" THEN GOSUB 1250: GOTO 50
290 IF IN$ = "E" THEN PRINT"I am too simple to eliminate intermediate stations.◙Please use CAVEMAP.BIG&UGLY": GOTO 50
300 IF IN$ = "H" OR IN$ = "?" THEN PRINT"Help is available in file CAVEMAP1.TXT or from◙DP_BYTER\ ½ Fast Road\ Ritner, KY  42639\ (606)376-3137": GOSUB 480: GOTO 50
310 IF IN$ = "I" THEN GOSUB 3340: GOTO 50
320 IF IN$ = "K" THEN GOSUB 2450: GOTO 50
330 IF IN$ = "L" THEN GOSUB 2300: GOTO 50
340 IF IN$ = "M" THEN GOSUB 2600: GOTO 50
350 IF IN$ = "O" THEN PRINT"I am too simple to calculate offsets.◙Please use CAVEMAP.BIG'UN
360 IF IN$ = "P" THEN PRINT"Precision not calculated with this version.": GOTO 50
370 IF IN$ = "Q" THEN PRINT"Re-enter with GOTO 1":PRINT"Good riddance!": BEEP: END
380 IF IN$ = "R" THEN GOSUB 1680: GOTO 50
390 IF IN$ = "S" THEN GOSUB 600: GOTO 50
400 IF IN$ = "T" THEN PRINT"Wanna save it first? Y";: GOSUB 520: IF IN$ = "N" THEN NN%= 0: GOTO 50 ELSE GOSUB 1990: GOTO 50
410 IF IN$ = "W" THEN GOSUB 1990: GOTO 50
420 IF IN$ = "X" THEN PRINT"Segments are not implemented in this version.": GOSUB 480: GOTO 50
430 BEEP: PRINT IN$; " is not a choice!": GOTO 50
440 BEEP: PRINT"QUIET! I'm thinking.": RETURN
450 REM common subroutines
460 II% = 0: IF IN$ = "" THEN II% = -1: RETURN ELSE IF ASC( IN$) = 96 THEN IN$ = PX$ + RIGHT$( IN$, LEN( IN$) -1)'FROM finder. SPLIT ME
470 IF IN$ = TT$(II%) THEN RETURN ELSE IF II% <= NN% THEN II% = II% + 1: GOTO 470 ELSE II% = -1: BEEP: PRINT"I can't find "; IN$: RETURN
480 PRINT "Stroke my key. ";
490 IN$ = INKEY$: IF IN$ = "" THEN 490 ELSE PRINT CHR$(168): RETURN
500 IF ASC(IN$) > 96 AND ASC(IN$) < 123 THEN IN$ = CHR$(ASC(IN$) - 32)'shift to CAPS
510 RETURN
520 I% = POS(I%) :IF I% = 1 THEN PRINT: LOCATE ,1,1,0,15 ELSE LOCATE ,I%-1,1,0,15'back over last character for choice
530 IN$ = INKEY$: IF IN$ = "" THEN 530 ELSE GOSUB 500: LOCATE ,,1,12,14: PRINT IN$: RETURN
540 REM AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
550 CLS: INPUT "Assign coordinates to station ->",TT$(NN%): IF TT$(NN%) = "" OR TT$(NN%) = "-" THEN PRINT"Assign cancelled.":RETURN
560 IN$ = "it. Must be a new station.": GOSUB 460: IF II% = -1 THEN N% = NN% :PRINT"Assign original coordinates": ELSE N% = II% PRINT"Assign new coordinates to existing station"
570 INPUT "North ->",NS(N%): INPUT "East ->", ES(N%): IF II% = -1 THEN FR$(N%) = TT$(N%): LINE INPUT "Remark ->", RM$(N%): INCL(N%) = 0: NI(N%) = 0: EI(N%) = 0: COMP(N%) = 0: TAPE(N%) = 0: DT$(N%) = " c0 t0": PR$ = TT$(N%): NN% = NN% + 1
580 RETURN
590 REM SSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSS
600 IF NN% = 0 THEN PRINT"You ain't got nowheres to start!": GOSUB 480: GOSUB 550
605 PRINT"Shoot stations◙Prefix stations with ";CHR$(34);PX$;CHR$(34);"? Y";: GOSUB 520: IF IN$ = "N" THEN INPUT "New station name prefix ->",PX$
610 N% = NN%: F$ = "": GOSUB 630: IF F$ = "" THEN RETURN ELSE IF F$ = "-" THEN 610 ELSE GOSUB 800: NN% = NN% + 1: GOTO 610'get inputs: calculate position
630 PRINT:PRINT"TO ->";PX$;: INPUT "",IN$: IF IN$ = "" OR IN$ = "-" THEN F$ = IN$: RETURN
640 TT$(N%) = PX$ + IN$
650 PRINT "FROM is "; PR$; " -> ";:INPUT"", IN$: IF IN$ = "-" THEN 630
660 IF IN$ = "" THEN IN$ = PR$
670 GOSUB 460: IF II% = -1 THEN 650 ELSE FR$(N%) = IN$
680 PR$ = TT$(N%)
690 DT$(N%) = ""
700 INPUT"Compass ->", IN$: IF IN$ = "-" THEN 650 ELSE DT$(N%) = DT$(N%) + " c" + IN$: GOSUB 940: IF A >= 0 AND A <= 360 THEN COMP(N%) = A ELSE BEEP: PRINT"Compass out of range. Try again!": GOTO 700
710 PRINT"COMPASS "; COMP(N%)
720 IF BZ THEN INPUT "Backcompass ->", IN$: IF IN$ = "-" THEN 700 ELSE DT$(N%) = DT$(N%) + " b" + IN$'but not used in this version
730 INPUT "Tape ->", IN$: DT$(N%)= DT$(N%) + " t" + IN$: IF IN$ = "-" THEN 700 ELSE GOSUB 920: IF A >= 0 THEN TAPE(N%) = A ELSE BEEP: PRINT"Try that again!": GOTO 700
740 PRINT"TAPE "; TAPE(N%)
750 IF IZ THEN INPUT "Inclinometer ->", IN$: IF IN$ = "-" THEN 700 ELSE DT$(N%) = DT$(N%) + " i" + IN$: GOSUB 870: IF A >= -90 AND A <= 90 THEN INCL(N%) = A ELSE BEEP: PRINT"Inclinometer out of range. Try again.": GOTO 750 ELSE INCL(N%) = 0
760 PRINT "Inclinometer is "; INCL(N%)
770 IF RZ THEN INPUT "Right offset -> ",IN$: IF IN$ = "-" THEN 750 ELSE DT$(N%) = DT$(N) + " r" + IN$
780 LINE INPUT "Remark ->", IN$: IF IN$ = "-" THEN 730 ELSE RM$(N%) = IN$
790 F$ = "½": RETURN'with complete data for this station
800 HD = COS((INCL(N%) - CC) / RD) * TAPE(N%)'calculate coordinates
810 NI(N%) = HD * COS ((COMP(N%) - DC) / RD)
820 EI(N%) = HD * SIN ((COMP(N%) - DC) / RD)
830 IN$ = FR$(N%): GOSUB 460: IF II% < 0 THEN PRINT"Calculation aborted": RETURN
840 NS(N%) = NS(II%) + NI(N%)
850 ES(N%) = ES(II%) + EI(N%)
860 RETURN
870 IF IN$ = "" THEN A = 0: RETURN ELSE A$ = IN$'incl handler
880 IF LEFT$( A$, 1) = " " THEN A$ = RIGHT$( A$, LEN(A$) -1): GOTO 880'incl handler
890 IF LEFT$( A$, 1) = "-" THEN B$ = RIGHT$( A$, LEN(A$) -1) ELSE B$ = A$
900 A = 60: GOSUB 1060: IF LEFT$(A$, 1) = "-" THEN A = - A
910 IF IZ = 2 THEN A = A - 90: RETURN ELSE A = A * IZ: RETURN
920 IF IN$ = "" THEN A = 0: RETURN ELSE IF TZ = 1 THEN A = 12 ELSE IF TZ = POLE THEN A = 25 ELSE IF TZ = GUNTER THEN A = 100 ELSE A = 0'tape handler
930 B$ = IN$: GOSUB 1060: A = A * TZ: RETURN
940 IF IN$ = "" THEN A = -999: RETURN'compass handler; azumuth, quadrants, gradians
950 A$ = IN$: B$ = ""
960 FOR I% = 1 TO LEN(A$)'; finder
970 IN$ = MID$( A$, I%, 1)
980 IF IN$ = ";" THEN PRINT"Tell me why you want multiple compass readings and I'll let you do it.": B$ = LEFT$(A$, I% - 1): I% = LEN(A$)
990 NEXT
1000 IF B$ = "" THEN B$ = A$
1010 IF QZ = 0 THEN A = 60: GOSUB 1060: RETURN
1020 IF QZ = 1 THEN A = 60: GOSUB 1150: RETURN
1030 IF QZ = 0.9 THEN A = VAL(IN$) * QZ: RETURN
1040 BEEP: PRINT"Bad value for QZ = compass quadrant logic.": A = -9999: RETURN
1050 PRINT"Tell me why you want to enter multiple compass readings & I'll let you do it.": RETURN
1060 IF B$ = "" OR B$ = "/" THEN A = 0: RETURN'/minutes etc handler
1070 L% = 0: FOR J% = 1 TO LEN( B$): M% = ASC( MID$( B$, J%, 1)): IF NOT(M% = 32 OR M% > 42 AND M% < 58) THEN L% = -9: PRINT"Garbage character "; CHR$( K%)
1080 NEXT: IF L% = -9 THEN A = -999: RETURN
1090 J% = 1
1100 IF MID$( B$, J%, 1) = "/" THEN GOSUB 1120: RETURN'minutes only
1110 IF J% = LEN(B$) THEN A = VAL( B$): RETURN ELSE J% = J% + 1: GOTO 1100'no /
1120 IF J% = 1 THEN A = VAL( RIGHT$( B$, LEN(B$) -1) / A: RETURN'minutes only
1130 IF J% = LEN(B$) THEN A = VAL( LEFT$( B$, J% - 1)): RETURN'degrees only
1140 A = VAL( LEFT$( B$, J% - 1)) + VAL( RIGHT$( B$, LEN(B$) - J%)) / A: RETURN'degrees/minutes
1150 IF LEN( B$) = 1 THEN IN$ = B$: GOSUB 500: IF IN$ = "N" THEN A = 0: RETURN ELSE IF IN$ = "E" THEN A = 90: RETURN ELSE IF IN$ = "S" THEN A = 180: RETURN ELSE IF IN$ = "W" THEN A = 270: RETURN ELSE BEEP: PRINT B$; " is not a choice!": A = -888: RETURN'c
1160 IN$ = LEFT$( B$, 1): GOSUB 500: C$ = IN$
1170 IN$ = RIGHT$( B$, 1): GOSUB 500: D$ = IN$
1180 B$ = MID$( B$, 2, LEN(B$) - 2): IF B$ = "" THEN A = 45: ELSE GOSUB 1060
1190 IF C$ = "N" AND D$ = "E" THEN RETURN
1200 IF C$ = "S" AND D$ = "E" THEN A = 180 - A: RETURN
1210 IF C$ = "S" AND D$ = "W" THEN A = 180 + A: RETURN
1220 IF C$ = "N" AND D$ = "W" THEN A = 360 - A: RETURN
1230 BEEP: PRINT"Bad quadrant.": A = -999: RETURN
1240 REM DDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDD
1250 PRINT"Suppress output? N";: GOSUB 520: IF IN$ = "Y" THEN 1360'Display duh data
1260 J% = 0: PRINT"Suppress remarks? Y";: GOSUB 520: IF IN$ = "N" THEN J% = -1
1270 PRINT"Display original input? N";: GOSUB 520: IF IN$ <> "Y" THEN K% = 0 ELSE K% = -1
1280 PRINT"To printer? N";: GOSUB 520: IF IN$ = "Y" THEN GOSUB 1630: RETURN
1290 PRINT"TO"; TAB(10); "FROM"; TAB(20); "COMPASS"; TAB(30); "TAPE"
1300 FOR I% = 0 TO NN% - 1
1310 PRINT: IF K% THEN PRINTDT$(I%)
1320 PRINT TT$(I%); TAB(10); FR$(I%); TAB(20); COMP(I%); TAB(30); TAPE(I%);:IF J% THEN PRINT TAB(40); RM$(I%);
1330 A$ = INKEY$: IF A$ = "" THEN 1330
1340 NEXT
1350 PRINT: INPUT "That's all.", IN$
1360 PRINT"Wanna change sump'un? N";: GOSUB 520: IF IN$ <> "Y" THEN 1500
1370 PRINT"Delete station with OLD FROM=DELETE◙Insert before station with OLD FROM=INSERT.◙<RETURN> leaves old value.
1380 INPUT "TO->",IN$: IF IN$ = "" OR IN$ = "-" THEN 1360
1390 GOSUB 460: IF II% < 0 THEN 1360
1400 K% = II%: PRINT"OLD FROM= ";FR$(K%)
1410 INPUT "New FROM->",IN$: IF IN$ = "-" THEN 1380
1420 IF IN$="INSERT" OR IN$ ="insert" THEN GOSUB 440: GOSUB 1600: NN% = NN% + 1: GOTO 1360
1430 IF IN$ = "DELETE" OR IN$ = "delete" THEN GOSUB 440: GOSUB 1550: GOTO 1360
1440 IF IN$ <> "" THEN GOSUB 460: IF II% < 0 THEN 1360 ELSE FR$(K%) = IN$
1450 PRINT"Old COMP= ";COMP(K%):INPUT "NEW COMP->",IN$:IF IN$ <> "" THEN IF IN$ = "-" THEN 1400 ELSE DT$(K%) = DT$(K%) + " cc" + IN$: GOSUB 940: IF A >= 0 AND A <= 360 THEN COMP(K%) = A: ELSE BEEP: PRINT"Try again!": GOTO 1450
1460 PRINT"Old TAPE = ";TAPE(K%):INPUT "New TAPE->",IN$: IF IN$ <> "" THEN IF IN$ = "-" THEN 1450 ELSE GOSUB 920: IF A >= 0 THEN TAPE(K%) = A: DT$(K%) = DT$(K%) + " tt" + IN$ ELSE BEEP: PRINT"Try again!": GOTO 1460
1470 IF IZ THEN PRINT"Old INCL ="; INCL(K%): INPUT"New INCL->"; IN$: IF IN$ <> "" THEN IF IN$ = "-" THEN 1460 ELSE GOSUB 870: IF A >= -90 AND A <= 90 THEN DT$(K%) = DT$(K%) + " ii" + IN$: INCL(K%) = A ELSE PRINT"Incl out of range. Try again.": GOTO 1470
1480 PRINT"Old remark= ";RM$(K%): LINE INPUT "New remark->";IN$: IF IN$ <> "" THEN IF IN$ = "-" THEN 1460 ELSE RM$(K%) = IN$
1490 GOTO 1360
1500 PRINT"Wanna recalculate? N";: GOSUB 520: IF IN$ <> "Y" THEN RETURN
1510 PRINT"All of 'em? Y";: GOSUB 520: I% = 0: J% = NN% - 1: IF IN$ <> "N" THEN 1540
1520 INPUT "Starting station->";IN$: GOSUB 460: I% = II%: IF II% < 0 THEN 1500
1530 INPUT "Stopping station->";IN$: GOSUB 460: J% = II%: IF II% < 0 THEN 1500
1540 GOSUB 440: FOR N% = I% TO J%: GOSUB 800: NEXT: RETURN
1550 FOR J% = K% TO NN% - 1'delete
1560 TT$(J%) = TT$(J%+1): FR$(J%) = FR$(J%+1): COMP(J%) = COMP(J%+1): TAPE(J%) = TAPE(J%+1): INCL(J%) = INCL(J%+1): DT$(J%) = DT$(J%+1): NI(J%) = NI(J%+1): EI(J%) = EI(J%+1): NS(J%) = NS(J%+1): ES(J%) = ES(J%+1): RM$(J%) = RM$(J%+1)
1570 NEXT: NN% = NN% -1
1580 IN$ = FR$(K): GOSUB 460: IF II% < 0 THEN PRINTIN$; " was referenced by "; TT$(K%)
1590 RETURN
1600 FOR J% = NN% - 1 TO K% STEP -1'insert
1610 TT$(J%+1) = TT$(J%): FR$(J%+1) = FR$(J%): COMP(J%+1) = COMP(J%): TAPE(J%+1) = TAPE(J%): INCL(J%+1) = INCL(J%): DT$(J%+1) = DT$(J%): NI(J%+1) = NI(J%): EI(J%+1) = EI(J%): NS(J%+1) = NS(J%): ES(J%+1) = ES(J%): RM$(J%+1) = RM$(J%): NEXT
1620 N% = K%: GOSUB 620: GOSUB 630: PRINT"This may have made a hole in your data": GOSUB 800: RETURN
1630 LPRINT"TO";TAB(10);"FROM";TAB(20);"COMPASS";TAB(30);"TAPE"'raw data to printer
1640 FOR I%=0 TO NN% -1: LPRINT: IF K% THEN LPRINT DT$(I%)
1650 LPRINT TT$(I%); TAB(10); FR$(I%); TAB(20); COMP(I%); TAB(30); TAPE(I%);:IF J% THEN LPRINT TAB(40); RM$(I%);
1660 NEXT: LPRINT: RETURN
1670 REM RRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRR
1680 PRINT"Default drive is ";DR$;"  Default extension is ";X10$
1690 INPUT "Read which file";IN$: IF IN$=""THEN FILES DR$: GOSUB 480: RETURN
1700 IF MID$(IN$,2,1)= ":" THEN DR$ = LEFT$(IN$,2): IN$= RIGHT$(IN$, LEN(IN$)-2)
1710 FOR I%= 0 TO 3: IF I%>=LEN(IN$)THEN 1730
1720 IF LEN(IN$)>1 THEN IF MID$(IN$, LEN(IN$)-I%, 1)= "." THEN X10$= RIGHT$(IN$,I%+1): IN$ = LEFT$(IN$,LEN(IN$)-I%-1):I%= 3
1730 NEXT
1740 ON ERROR GOTO 1960
1750 OPEN "I", #1, DR$+IN$+X10$
1760 ON ERROR GOTO 0
1770 INPUT#1, A$, PX$, DC, BZ, BC, A$, TZ, IZ, IC, RZ, I%, I%: LINE INPUT #1, A$
1780 WHILE NOT EOF(1)
1790 INPUT#1, TT$(NN%)
1800 INPUT#1, FR$(NN%)
1810 INPUT#1, COMP(NN%)
1820 INPUT#1, TAPE(NN%)
1830 INPUT#1, INCL(NN%)
1840 LINE INPUT#1, DT$(NN%)
1850 INPUT#1, NI(NN%)
1860 INPUT#1, EI(NN%)
1870 INPUT#1, NS(NN%)
1880 INPUT#1, ES(NN%)
1890 INPUT#1, I%'up increment
1900 INPUT#1, I%'up sum
1910 LINE INPUT#1, RM$(NN%)
1920 NN% = NN% + 1
1930 WEND
1940 CLOSE #1
1950 RETURN
1960 CLOSE #1: IF ERR = 52 OR ERR = 53 THEN PRINT"AIN'T NO ";DR$+IN$+X10$;" HERE!": FILES DR$ + "*" + X10$: ELSE IF ERR = 71 THEN PRINT"Youse ain't got no ";DR$;" drive nowheres" ELSE PRINT"Now what?": ON ERROR GOTO 0
1970 GOSUB 480: RESUME 1680
1980 REM WWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW
1990 PRINT"Default drive is ";DR$;"  Default extension is ";X10$
2000 INPUT"Whacha name it";IN$: IF IN$ = "" THEN RETURN
2010 IF MID$(IN$,2,1)= ":" THEN DR$= LEFT$(IN$,2): IN$= RIGHT$(IN$,LEN(IN$)-2)
2020 IF LEN(IN$)<= 1 THEN I%=3: GOTO 2060
2030 FOR I%= 0 TO 3:IF I%>= LEN(IN$) THEN 2050
2040 IF MID$(IN$,LEN(IN$)-I%,1)="." THEN X10$= RIGHT$(IN$,I%+1): IN$= LEFT$(IN$, LEN(IN$)-I%-1): I%=3
2050 NEXT
2060 ON ERROR GOTO 2270: OPEN "I", #1, DR$+IN$+X10$: CLOSE #1: ON ERROR GOTO 0: A$ = IN$: PRINT"Overwrite file? N";: GOSUB 520: IF IN$ <> "Y" THEN RETURN ELSE IN$ = A$
2070 ON ERROR GOTO 2280: OPEN "O", #1, DR$+IN$+X10$
2080 PRINT#1, "Data for CAVEMAP◙A program in BASIC to calculate preliminary survey data.": PRINT #1, PX$
2090 PRINT#1,DC:PRINT#1,BZ:PRINT#1,BC:PRINT#1,"":PRINT#1,TZ:PRINT#1,IZ:PRINT#1,IC:PRINT#1,RZ:PRINT#1,0:PRINT#1,0:PRINT#1,"DP_BYTER\CAVE Inc\Ritner KY  42639\(606)376-3137
2100 FOR I% = 0 TO NN% - 1
2110 PRINT#1, TT$(I%)
2120 PRINT#1, FR$(I%)
2130 PRINT#1, COMP(I%)
2140 PRINT#1, TAPE(I%)
2150 PRINT#1, INCL(I%)
2160 PRINT#1, DT$(I%)
2170 PRINT#1, NI(I%)
2180 PRINT#1, EI(I%)
2190 PRINT#1, NS(I%)
2200 PRINT#1, ES(I%)
2210 PRINT#1, 0
2220 PRINT#1, 0
2230 PRINT#1, RM$(I%)
2240 NEXT
2250 CLOSE #1
2260 RETURN
2270 IF ERR = 53 THEN RESUME 2070 ELSE IF ERR = 71 THEN PRINT"Waddya mean, drive ";DR$;"?": GOSUB 480: RESUME 2250 ELSE ON ERROR GOTO 0: RESUME 2250
2280 IF ERR = 70 THEN PRINT"If you really want it on this disk then you'll have to remove the write protect.": GOSUB 480: RESUME 2250
2290 REM LLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLL
2300 PRINT"Suppress remarks? Y";: GOSUB 520: IF IN$ = "N" THEN J% = -1 ELSE J% = 0'list coordinates
2310 PRINT"Sent to printer? N";: GOSUB 520: IF IN$ = "Y" THEN GOSUB 2390: RETURN
2320 PRINT"TO"; TAB(20); "NORTH"; TAB(30); "EAST"
2330 FOR I% = 0 TO NN% - 1
2340 PRINT TT$(I%); TAB(20); INT(NS(I%)+0.5); TAB(30); INT(ES(I%)+0.5);
2350 IF J% THEN PRINT TAB(40);RM$(I%);
2360 PRINT
2370 A$= INKEY$: IF A$="" THEN 2370 ELSE NEXT
2380 INPUT"All done",IN$: RETURN
2390 LPRINT"TO"; TAB(20); "NORTH"; TAB(30); "EAST"
2400 FOR I% = 0 TO NN% - 1
2410 LPRINT TT$(I%); TAB(20); INT(NS(I%)+0.5); TAB(30); INT(ES(I%)+0.5);
2420 IF J% THEN LPRINT TAB(40);RM$(I%);
2430 PRINT: NEXT: RETURN
2440 REM KKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKK
2450 CLS:PRINT"Let's see if I can plot a map on your screen and printer.◙I'll plot a square. You measure the horizontal and vertical size.◙Then I'll adjust the square to make it squarer.
2460 PRINT"You may report in either millimeters or inches and twentieths.": GOSUB 480
2470 PRINT"Send it to the printer? N";: GOSUB 520: IF IN$ = "Y" THEN A = PRNX: I% = -1 ELSE A = SCRX
2480 KEY OFF: ON ERROR GOTO 2580: SCREEN 2
2490 IF A <= 1 THEN LINE(120,0)-(518,0): LINE-(518,199*A): LINE-(120,199*A): LINE-(120,0): LINE(318,0)-(318,199*A): LINE(120,99*A)-(518,99*A)
2500 IF A > 1 THEN A=1/A: LINE(120*A,0)-(518*A,0): LINE-(518*A,199): LINE-(120*A,199): LINE-(120*A,0): LINE(318*A,0)-(318*A,199): LINE(120*A,99)-(518*A,99)
2510 A$=INKEY$:IF A$=""THEN 2510 ELSE IF I% = -1 THEN GOSUB 2770
2520 SCREEN 0
2530 INPUT"What was the horizontal distance?◙If you don't know, then enter 0.0 ",B
2540 IF B=0 THEN PRINT"So you like it the way it is? Y";: GOSUB 520: IF IN$="N" THEN PRINT"OK Mush4brains, we'll do it again.": GOSUB 480: GOTO 2450 ELSE RETURN
2550 INPUT"What was the vertical distance";C: B=B/C: PRINT"I can change the screen by ";ABS(B-1)/1*100;"% if you wish.◙Your wish is my command. Y";: GOSUB 520: IF IN$ <>"N" THEN IF K% PRNX=PRNX*B ELSE SCRX=SCRX*B
2560 PRINT"You may permanently change the screen aspect by changing variable SCRX in the   source code. The printer aspect is in variable PRNX
2570 GOSUB 480: RETURN
2580 PRINT"I can't plot on your computer. Error ";ERR;" in line ";ERL: RESUME 2570
2590 REM MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
2600 IF NN% < 2 THEN PRINT"You ain't got no data to plot!": GOSUB 480: RETURN ELSE PRINT"set scale? N";: GOSUB 520: IF IN$="Y" THEN PRINT"Topo scale? Y";: GOSUB 520: IF IN$ ="N" THEN INPUT"N-S size->",A ELSE A = 11050 ELSE A = 0
2610 B=0:C=0:D=0:E=0:PRINT"Send it to the printer? N";: GOSUB 520: IF IN$ = "Y" THEN K% = -1 ELSE K% = 0
2620 FOR I% = 0 TO NN% - 1
2630 IF B<NS(I%) THEN B=NS(I%)
2640 IF C>NS(I%) THEN C=NS(I%)
2650 IF D<ES(I%) THEN D=ES(I%)
2660 IF E>ES(I%) THEN E=ES(I%)
2670 NEXT
2680 IF 198/(B-C)<338/(D-E) THEN C=198/(B-C) ELSE C= 338/(D-E)
2690 IF A<>0 THEN A=200/A: IF A>C THEN PRINT"N-S size too small. Must be > ";200/C: GOTO 2600 ELSE ELSE A=C
2700 IF K% THEN C=PRNX ELSE C=SCRX
2710 KEY OFF: SCREEN 2: LINE (600,0)-(639,0): LINE (600,199)-(639,199): FOR I% = 0 TO NN% - 1: J%=I%+1
2720 J% = J% - 1: IF FR$(I%) <> TT$(J%) THEN IF J% > 0 GOTO 2720 ELSE SCREEN 0: PRINT "Station "; FR$(I%); " missing. Plot aborted.": I% = NN%: GOTO 2740
2730 IF C<=1 THEN LINE(2*((ES(J%)-E)*A)+1, ((B-NS(J%))*A*C)+1)-(2*((ES(I%)-E)*A)+1, ((B-NS(I%))*A*C)+1) ELSE LINE(2*((ES(J%)-E)*A/C)+1, ((B-NS(J%))*A)+1)-(2*((ES(I%)-E)*A/C)+1, ((B-NS(I%))*A)+1)
2740 NEXT
2750 A$=INKEY$:IF A$=""THEN 2750 ELSE IF K% THEN B = 200/A: C = B/5.52: GOSUB 2770: SCREEN 0: PRINT"N-S size is ", B; "Scale = "; C: RETURN
2760 SCREEN 0: RETURN
2770 ON ERROR GOTO 2872: OPEN"lpt1:"AS #1:'Seikosha map print routine
2780 WIDTH #1,255'suppress normal return at 80 columns
2790 PRINT#1, CHR$(27);"A";CHR$(8);'line feed to 8/72"
2795 ON ERROR GOTO 0
2800 FOR I% = 639 TO 0 STEP -8
2810 PRINT#1, CHR$(13);CHR$(10);CHR$(27);"*";CHR$(5);CHR$(0);CHR$(2);'Turn on 1:1 graphics
2820 FOR J% = 0 TO 199
2830 A = POINT(I%,J%)*128 + POINT(I%-1,J%)*64 + POINT(I%-2,J%)*32 + POINT(I%-3,J%)*16 + POINT(I%-4,J%)*8 + POINT(I%-5,J%)*4 + POINT(I%-6,J%)*2 + POINT(I%-7,J%)
2840 PRINT#1, CHR$(A);CHR$(A);
2850 NEXT
2860 FOR J% = 0 TO 111:PRINT#1, CHR$(0);:NEXT'pad out line
2865 NEXT
2870 CLOSE:RETURN
2872 IF ERR = 25 THEN RESUME 2870 ELSE ON ERROR GOTO 0: RESUME
2880 REM BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB
2890 INPUT "Reassign station "; IN$: GOSUB 460: K% = II%: IF K% < 0 THEN GOSUB 480: RETURN
2900 INPUT " such that station "; IN$: GOSUB 460: J% = II%: IF J% < 0 THEN GOSUB 480: RETURN
2910 INPUT " equals station "; IN$: GOSUB 460: IF II% < 0 THEN GOSUB 480: RETURN
2920 NS(K%) = NS(K%) - NS(J%) + NS(II%)
2930 ES(K%) = ES(K%) - ES(J%) + ES(II%)
2940 GOSUB 1500: RETURN
2950 REM CCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCC
2960 PRINT"Close a survey loop to check for blunder.
2970 INPUT "First closure station ->"; IN$: GOSUB 460: IF II% < 0 THEN RETURN ELSE J% = II%: A$ = IN$
2980 INPUT "Second name for the same closure station ->";IN$: GOSUB 460: IF II% < 0 THEN RETURN ELSE K% = II%: B$ = IN$
2990 A = NS(K%) - NS(J%)
3000 B = ES(K%) - ES(J%)
3010 C = SQR(A*A + B*B)
3020 D = ATN (B/(A + 1.000000e-8)*RD): IF A < 0 THEN D = D + 180
3030 IF D < 0 THEN D = D + 360
3040 PRINT:PRINT"The closure error betwixt ";A$; " and ";B$; " is "; INT(C + 0.5);
3050 PRINT"In the direction "; INT (D + 0.5)'for this sort of ½fast preliminary surveying, you don't need to keep tract of the change.
3060 PRINT"Do all the stations lay upon the loop? Y";: GOSUB 520: IF IN$ = "N" THEN RETURN
3070  E = 0: FOR I% = 0 TO NN% - 1: E = E + TAPE(I%): NEXT: F = C / E * 100'run of loop
3080 PRINT "That's ";: PRINT USING "###.#";F;: PRINT "% of a run of "; INT(E + 0.5)
3090 PRINT:PRINT"Should I close this loop assuming that all of the error is in the compass? Y";: GOSUB 520: IF IN$ = "N" THEN RETURN
3100 IF F > 5 THEN PRINT"You don't really expect me to close a loop with ";CINT(F); "% closure error, do you? N";: GOSUB 520: IF IN$ <> "Y" THEN RETURN
3110 C = 0: D = 0
3120 FOR I% = 0 TO NN% - 1'sum movements each axis each shot
3130 C = C + ABS(NI(I%))
3140 D = D + ABS(EI(I%))
3150 NEXT
3160 E = 0: F = 0
3170 FOR I% = 0 TO NN% - 1'adjust coordinates
3180 E = E + ABS( NI(I%)) / C * B
3190 F = F + ABS( EI(I%)) / D * A
3200 NS(I%) = NS(I%) - F'north error distributed with east movement. Compass Rule
3210 ES(I%) = ES(I%) - E
3220 NEXT
3230 PRINT"I can calculate the acreage in this loop. Your wish is my command. Y";: GOSUB 520: IF IN$ = "N" THEN RETURN
3240 PRINT"◙Are you sure that this data forms a loop, that each station references the ◙previous station, and that all the stations are on the loop? N";: GOSUB 520
3250 A = 0
3260 FOR I% = 1 TO NN% - 1
3270 A = A + (NS(I%) + NS(I% - 1)) * (ES(I%) - ES(I% - 1))
3280 NEXT
3290 A = ABS( A / 87120.)
3300 PRINT"The area enclosed by this loop is ";: PRINT USING "####.##";A;: PRINT " acres.
3310 IF IN$ <> "Y" THEN PRINT "But I'm not sure either.
3320 GOSUB 480: RETURN
3330 REM IIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIII
3340 CLS: PRINT"Instrument parameters◙◙A = Azimuth ◙G = Gradians◙Q = Quadrants ◙[May be degrees/minutes][Multiple readings separated by "; CHR$(34); ";"; CHR$(34); "]"
3350 IF QZ = 0 THEN A$ = "A" ELSE IF QZ = 1 THEN A$ = "Q" ELSE IF QZ = 0.9 THEN A$ = "G" ELSE A$ = "?"
3360 PRINT"How do you prefer your compass? ";A$;: GOSUB 520: IF ASC(IN$) = 13 THEN 3380 ELSE A$ = IN$
3370 IF A$ = "A" THEN QZ = 0 ELSE IF A$ = "Q" THEN QZ = 1 ELSE IF A$ = "G" THEN QZ = 0.9 ELSE PRINT A$; " is not a choice!": GOSUB 480: GOTO 3340
3380 PRINT"Compass declination of";DC;"? Y";: GOSUB 520: IF IN$ = "N" THEN INPUT "Compass declination ->",DC
3390 PRINT"Using backcompass? N";: GOSUB 520
3400 IF IN$ = "Y" THEN PRINT"Backcompass not supported in simple program. But I'll write them down on the◙disk if you want.": BZ = 1: PRINT"Backcompass declination of ";DB;"? Y";: GOSUB 520: IF IN$ = "N" THEN INPUT"Backcompass declination ->", DB
3410 PRINT"F = Feet [May be feet/inches]◙M = Meters◙P = Poles or rods [May be poles/links]◙C = Gunter Chains [May be chains/links]◙Q = Pace [User defined]
3420 IF TZ = 1 THEN A$ = "F" ELSE IF TZ = MTR THEN A$ = "M" ELSE IF TZ = POLE THEN A$ = "P" ELSE IF TZ = GUNTER THEN A$ = "C" ELSE A$ = "Q"
3430 PRINT"And how do you measure your distance? ";A$;: GOSUB 520
3440 IF IN$="F"THEN TZ=1ELSE IF IN$="M"THEN TZ=MTR ELSE IF IN$="P" THEN TZ=POLE ELSE IF IN$="C" THEN TZ=GUNTHER ELSE IF IN$ = "Q" THEN INPUT "Length of pace, in feet -> "; TZ ELSE IF ASC(IN$)<>13 THEN PRINT IN$;" is not a choice!": BEEP:GOTO 3410
3450 IF IZ THEN A$ = "Y" ELSE A$ = "N"
3460 PRINT"Using clinometer? "; A$;: GOSUB 520
3470 IF ASC(IN$) = 13 THEN IN$ = A$
3480 IF IN$ = "Y" THEN IZ = 1: PRINT"D = degrees [May be degrees/minutes]◙G = gradians◙S = semicircular protractor◙D G S D";: GOSUB 520 ELSE IZ = 0
3490 IF IZ THEN IF IN$ = "G" THEN IZ = 0.9 ELSE IF IN$ = "S" THEN IZ = 2 ELSE IF ASC(IN$) <> 13 THEN 3460
3500 IF IZ THEN PRINT"Clinometer correction of "; CC; "? Y";: GOSUB 520: IF IN$ = "N" THEN INPUT "Clinometer correction -> ", CC
3510 PRINT"Using offsets? N";: GOSUB 520: IF IN$ = "Y" THEN RZ = 1: PRINT"Offsets not supported in simple program." ELSE RZ = 0
3520 PRINT"Put the data on drive ";DR$;"? Y";: GOSUB 520: IF IN$ <> "N" THEN 3540 ELSE PRINT"Data drive ->";
3530 IN$ = INKEY$: IF IN$ = "" THEN 3530 ELSE GOSUB 500: DR$ = IN$ + ":": PRINT DR$
3540 PRINT"With an extension of ";X10$;"? Y";: GOSUB 520: IF IN$ = "N" THEN INPUT "Extension ->.",X10$: X10$ = "." + X10$: IF LEN(X10$) > 4 THEN PRINT"Extension too long!  ";X10$: BEEP: GOTO 3540
3550 PRINT"Ya like it? Y";: GOSUB 520: IF IN$ = "N" THEN 3340 ELSE RETURN
3560 PRINT"This is a simple version of CAVEMAP with many complications removed.◙Instructions for using this program are in the file CAVEMAP1.TXT
3570 PRINT"Instructions for surveying [quickly, easily & inexpensively getting the data◙which CAVEMAP manipulates] are in the files SIY*.TXT
3580 PRINT"For help, contact◙                        Dave Beiter◙                        CAVE, Inc◙                        ½ Fast Road◙                        Ritner, KY  42639◙                        (606)376-3137
3590 NN% = 0'array pointer for data
3600 NMAX% = 100: PRINT:PRINT"Will you be using more than";NMAX%;"stations? N";: GOSUB 520: IF IN$ = "Y" THEN INPUT "Maximum number of stations ->", NMAX%
3610 DIM TT$(NMAX%), FR$(NMAX%), COMP(NMAX%), TAPE(NMAX%), INCL(NMAX%), DT$(NMAX%), NI(NMAX%), EI(NMAX%), NS(NMAX%), ES(NMAX%), RM$(NMAX%)'To, From, Compass, Tape, Inclinometer, Data, North increment, East increment, North sum, East sum, Remark
3620 BZ = 0'backcompass logic
3630 DC = 0: DB = 0'declination compass & backcompass
3640 DR$ = "A:"'data drive
3650 IC = 0'inclinometer correction
3660 IZ = 0'inclinometer logic
3670 X10$ = ".CAV"
3680 PR$ = ""'previous station
3690 PX$ = "prefix"
3700 QZ = 0'compass units logic
3710 TZ = 1'tape units logic
3720 RZ = 0'offset logic
3730 HD = 0'horizontal distance
3740 RD = 57.29578'degrees per radian
3750 MTR = 3.28083'feet per meter
3760 POLE = 16.5'feet per USA pole
3770 GUNTER = 66'feet per Gunter's chain of 100 links
3780 SCRX=1.077936: PRNX=0.989175'screen & printer map aspect for permanent adjustment
3790 RETURN
3800 END'CAVEMAP1.BAS, ver 891210, (c) 1989 DP_BYTER, proliferate freely. ◙CAVE Inc, ½ Fast Road, Ritner, KY  42639  606/376-3137◙Silva Ranger Compass, $39. 200' fiberglass/PVC tapemeasure, $29.◙+ $5 Shipping & handling.◙Instructions in CAVEMAP1.TXT
```

## SIY2LINR.BAS

```bas
0 'Enter direction (as 0 to 360 degrees) and distance from land description◙SNORTH = distance north of beginning station, SEAST = distance east◙Plot on graph paper, connect the dots, this is the map, or plat, of the propertyThis is too easy for a 2-liner
1 D=0.01745329:PRINT"Instructions in SIY*.TXT◙Survey It Yourself: The Poor Man's Guide to Land Surveying◙(c)1989, DP_BYTER -=>Go forth & exponentiate^<=-◙½ Fast Software◙Rt 72 Box 66-G◙Delta KY  42639◙606/376-3137◙Quick. Easy. Inexpensive instruments. No magic!
2 INPUT"Compass ($40)";CO:INPUT"Tape ($28)";TA:SN=SN+TA*COS(CO*D):SE=SE+TA*SIN(CO*D):PRINT"SNORTH =";SN,"SEAST =";SE:GOTO 2'◙This is interpreted BASIC. You need GWBASIC or BASICA or help. ¿What happened to the magic in line 1?
```

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #1826

     Volume in drive A has no label
     Directory of A:\

    COPYWRIG HT       1858   7-07-90  10:40p
    (C)1990  BY       1023   7-07-90  10:43p
    DP_BYTER          1024   7-13-90   2:41p
    BROWSE   COM       960  12-20-88   6:08p
    READ     ME       5120   7-13-90   2:04p
    WARRANTY IAM     10090   7-13-90   2:11p
    HARDWARE TXT      1019   7-07-90  11:20p
    SOFTWARE TXT      2962   7-07-90  11:23p
    PROFSURV TXT      2048   2-08-90  12:39a
    SIY      BAT       701   5-20-90  10:26p
    SIYPRINT BAT      1005   5-20-90  10:40p
    SIY0     TXT     10593   8-08-90  10:26p
    SIYHALF  TXT      7845   7-07-90   9:04p
    SIY1     TXT     22458   7-13-90   3:24p
    SIY2     TXT      4342   7-03-90   2:24p
    SIY3     TXT     13783   7-03-90   2:52p
    SIY4     TXT      4854   4-26-90  10:10p
    SIY5     TXT      6529   7-03-90   3:29p
    SIY6     TXT      2048   1-22-90   2:11a
    SIY7     TXT     12799   7-03-90   4:02p
    SIY8     TXT      5675   7-03-90   4:10p
    SIY9     TXT     11023   7-03-90   4:33p
    SIY10    TXT      7036   7-12-90  12:03a
    SIY11    TXT     17155   7-03-90   6:14p
    SIY12    TXT      2623   7-03-90   6:19p
    SIY13    TXT      2737   7-03-90   7:45p
    SIY14    TXT      2182   7-03-90   7:51p
    SIYG     TXT      6397   7-03-90   8:19p
    SIYB     TXT      2983   7-03-90   8:25p
    SIYW     TXT     14335   7-13-90   2:18p
    SIY1_C   TXT     20389   7-13-90   2:25p
    SIYORDER TXT      5083   8-08-90  10:27p
    CAVEMAP1 BAS     22576   7-11-90  12:36a
    CAVEMAP1 TXT      9543   8-01-90   9:02p
    SIY2LINR BAS       735   4-05-89  10:35p
    GRAF1    CAV       731  11-25-89   9:41p
    GRAF2    CAV      1007   7-31-90  11:51p
    TABLE1   CAV       761  11-25-89   9:28p
    TABLE2   CAV       832  11-25-89  10:51p
    TABLE3   CAV      1843  11-25-89  11:10p
    EXAMPLE0 TXT      3030   7-31-90   2:58a
    EXAMPLE0 CAV      9046   7-10-90  11:29p
    EXAMPLE1 TXT      2866   7-31-90   9:02p
    EXAMPLE1 CAV      3520  11-24-89  12:36a
    EXAMPLE2 TXT      2009   7-31-90   2:52a
    EXAMPLE2 CAV      3061   7-31-90   9:40p
    EXAMPLE3 TXT      2017   7-31-90   9:35p
    EXAMPL3A CAV      1443  11-29-89   5:50p
    EXAMPL3B CAV      1000   7-31-90   9:57p
    EXAMPLE4 TXT      1499  12-04-89  12:59a
    EXAMPLE4 CAV      8157   7-31-90   9:52p
    EXAMPLE5 TXT       551  12-08-89   2:21a
    EXAMPLE5 CAV      1843  12-07-89  10:26p
    RETIRE   NOW      4082   2-08-90  12:44a
    RETIRE_H ERE     17336   7-30-90   1:06p
    3RDWORLD TXT      7759   7-07-90  11:51p
    EARLLAND TXT      3063   8-04-90  12:56a
    SPECSHEE TXT      4375   7-06-89  12:21a
    BEEF     TXT      1024   1-05-90   1:54a
    SOUP     TXT       689   8-28-89  12:19a
    TAX_DAY  TXT      1811   7-08-90  12:09a
    GUNSMOKE TXT       874   7-08-90  12:18a
    AMER_ENG TXT      1647   7-15-90  12:36a
    ART_LIFE TXT       750   7-08-90  12:32a
    Y        TXT      1024   7-08-90  12:36a
    LIBRARYN TXT      1528   7-08-90  12:38a
    DIRECTRY TXT      3700   8-09-90  10:28a
    CAVE     BAT      1024   1-25-90   8:52p
    MS_BAT   TXT      1024   8-01-90  10:31p
    INTRO    BAT      1018   8-08-90  10:26p
    FILE1826 TXT      2961   8-29-90   5:14p
           71 file(s)     344438 bytes
                               0 bytes free
