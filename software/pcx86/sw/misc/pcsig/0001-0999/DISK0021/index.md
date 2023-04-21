---
layout: page
title: "PC-SIG Diskette Library (Disk #21)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0021/
machines:
  - id: ibm5150
    type: pcx86
    config: /machines/pcx86/ibm/5150/cga/256kb/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0021"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5150" %}

{% comment %}info_begin{% endcomment %}

## Information about "PCMAN   (PAC MAN GAME AND MORE)"

    This disk contains a splendid example of what can be done graphically
    without the need of a graphics card, either monochrome or color. PCMAN
    and PCGIRLA are two different versions of the age-old run-and-eat maze
    game that revolutionized the computer and arcade industries. PCGIRLA
    uses ASCII characters to draw out the maze, while PCMAN uses the same
    character but in a 40-column color mode, to represent the player and
    the monsters that live in the maze.
    
    System Requirements:  Some programs require color graphics.
    
    How to Start:  While PCCHEERS requires BASIC, all the other can be
    run from DOS by typing their filename and pressing <ENTER>.
    
    File Descriptions:
    
    JOYSTICK DOC  Documentation file for JOYSTICK.EXE
    JOYSTICK EXE  Program to test your joystick's positions
    PCHEERS  BAS  THE TWELVE DAYS OF CHRISTMAS for the computer age
    PACGIRLA EXE  Monochrome version of PAC-MAN
    PCMAN    EXE  Color version of PAC-MAN
    PCMANHI  FIL  High score data file for PCMAN
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## CRC.TXT

{% raw %}
```
PC-SIG Disk No. #21, version v1 

The following is a list of the file checksums which should be produced by
the CRCK4 program on disk #9 (and others).  If the CRC numbers do not match
you may have a bad file.  To use type:  CRCK4 <filespec>

CRCK4 output for this disk:


CRCK ver 4.2B (MS DOS VERSION )
CTL-S pauses, CTL-C aborts

--> FILE:  PCMAN   .EXE         CRC = 7F 26

--> FILE:  JOYSTICK.EXE         CRC = B2 D3

--> FILE:  PACGIRLA.EXE         CRC = 52 B4

--> FILE:  JOYSTICK.DOC         CRC = DD 8E

--> FILE:  PCHEERS .BAS         CRC = 6C 3C

--> FILE:  PCMANHI .FIL         CRC = 3F ED

 ---------------------> SUM OF CRCS = 0E 64

DONE

These and other Public Domain and user-supported programs from:

PC Software Interest Group
1125 Stewart Ct  Suite G
Sunnyvale, CA 94086
(408) 730-9291
```
{% endraw %}

## JOYSTICK.DOC

{% raw %}
```
If you want to use a joystic with PCMAN, run JOYSTICK first.
JOYSTICK will create a file that PCMAN looks for to decide
whether or not to accept joystick input.

```
{% endraw %}

## PCHEERS.BAS

{% raw %}
```bas
4  WIDTH 80
5  ON ERROR GOTO 9500 : PLAY "P64"
10 KEY OFF
15 COLOR 7,1 : LOCATE 1,1,0 : CLS
20 B$=CHR$(15)
25 DIM PR$(5)
30 P1E%=114:P2E%=140:P25E%=59:P3E%=65:P4E%=71:P5E%=77:P6E%=83
40 DIM P1$(P1E%),P2$(P2E%),P25$(P25E%),P3$(P3E%),P4$(P4E%),P5$(P5E%),P6$(P6E%)
50 AB%=1:AE%=21:BB%=22:BE%=35:CB%=36:CE%=39:DB%=40:DE%=48:EB%=49:EE%=66
60 E1B%=67:E1E%=88:FB%=89:FE%=102:GB%=103:GE%=108:HB%=109:HE%=113
70 W1%=9:W2%=12:W3%=5:W4%=5:W5%=5:W6%=6:W7%=6:X%=113
80 DIM N$(113),B%(609),W1$(W1%),W2$(W2%),W3$(W3%),W4$(W4%),W5$(W5%),W6$(W6%),W7$(W7%)
81 RESTORE 1041
82 FOR I%=1 TO 5 : READ PR$(I%) : NEXT I%
83 FOR I%=1 TO 5 : PRINT : PRINT PR$(I%) : NEXT I%
90 RESTORE 1050
100 FOR I%=1 TO X%
110 READ N$(I%)
115 NEXT I%
117 RESTORE 1660
120 FOR I%=1 TO W1% : READ W1$(I%) : NEXT I%
130 FOR I%=1 TO W2% : READ W2$(I%) : NEXT I%
140 FOR I%=1 TO W3% : READ W3$(I%) : NEXT I%
150 FOR I%=1 TO W4% : READ W4$(I%) : NEXT I%
160 FOR I%=1 TO W5% : READ W5$(I%) : NEXT I%
170 FOR I%=1 TO W6% : READ W6$(I%) : NEXT I%
180 FOR I%=1 TO W7% : READ W7$(I%) : NEXT I%
185 RESTORE 1180
190 FOR I%=1 TO 609 : READ B%(I%) : NEXT I%
240 REM store notes in play arrays
250 J%=1
260 FOR I%=AB% TO DE% : P1$(J%)=N$(I%) : J%=J%+1 : NEXT I%
270 REM 3rd verse
280 FOR I%=BB% TO CE% : P1$(J%)=N$(I%) : J%=J%+1 : NEXT I%
290 FOR I%=CB% TO DE% : P1$(J%)=N$(I%) : J%=J%+1 : NEXT I%
300 REM 4th verse
310 FOR I%=BB% TO BE% : P1$(J%)=N$(I%) : J%=J%+1 : NEXT I%
320 FOR L%=1 TO 3
330 FOR I%=CB% TO CE% : P1$(J%)=N$(I%) : J%=J%+1 : NEXT I% : NEXT L%
340 FOR I%=DB% TO DE% : P1$(J%)=N$(I%) : J%=J%+1 : NEXT I%
350 REM 5th - 7th verses
360 J%=1
370 FOR I%=EB% TO E1E% : P2$(J%)=N$(I%) : J%=J%+1 : NEXT I%
380 REM 6th verse
390 FOR I%=FB% TO HE% : P2$(J%)=N$(I%) : J%=J%+1 : NEXT I%
400 FOR I%=E1B% TO E1E% : P2$(J%)=N$(I%) : J%=J%+1 : NEXT I%
410 REM 7th verse
420 FOR I%=FB% TO GE% : P2$(J%)=N$(I%) : J%=J%+1 : NEXT I%
430 FOR I%=GB% TO HE% : P2$(J%)=N$(I%) : J%=J%+1 : NEXT I%
440 FOR I%=E1B% TO E1E% : P2$(J%)=N$(I%) : J%=J%+1 : NEXT I%
450 REM 8th verse
460 J%=1
470 FOR I%=FB% TO FE% : P25$(J%)=N$(I%) : J%=J%+1 : NEXT I%
480 FOR L%=1 TO 3
490 FOR I%=GB% TO GE% : P25$(J%)=N$(I%) : J%=J%+1 : NEXT I% : NEXT L%
500 FOR I%=HB% TO HE% : P25$(J%)=N$(I%) : J%=J%+1 : NEXT I%
510 FOR I%=E1B% TO E1E% : P25$(J%)=N$(I%) : J%=J%+1 : NEXT I%
520 REM 9th verse
530 J%=1
540 FOR I%=FB% TO FE% : P3$(J%)=N$(I%) : J%=J%+1 : NEXT I%
550 FOR L%=1 TO 4
560 FOR I%=GB% TO GE% : P3$(J%)=N$(I%) : J%=J%+1 : NEXT I% : NEXT L%
570 FOR I%=HB% TO HE% : P3$(J%)=N$(I%) : J%=J%+1 : NEXT I%
580 FOR I%=E1B% TO E1E% : P3$(J%)=N$(I%) : J%=J%+1 : NEXT I%
590 REM 10th verse
600 J%=1
610 FOR I%=FB% TO FE% : P4$(J%)=N$(I%) : J%=J%+1 : NEXT I%
620 FOR L%=1 TO 5
630 FOR I%=GB% TO GE% : P4$(J%)=N$(I%) : J%=J%+1 : NEXT I% : NEXT L%
640 FOR I%=HB% TO HE% : P4$(J%)=N$(I%) : J%=J%+1 : NEXT I%
650 FOR I%=E1B% TO E1E% : P4$(J%)=N$(I%) : J%=J%+1 : NEXT I%
660 REM 11th verse
670 J%=1
680 FOR I%=FB% TO FE% : P5$(J%)=N$(I%) : J%=J%+1 : NEXT I%
690 FOR L%=1 TO 6
700 FOR I%=GB% TO GE% : P5$(J%)=N$(I%) : J%=J%+1 : NEXT I% : NEXT L%
710 FOR I%=HB% TO HE% : P5$(J%)=N$(I%) : J%=J%+1 : NEXT I%
720 FOR I%=E1B% TO E1E% : P5$(J%)=N$(I%) : J%=J%+1 : NEXT I%
730 REM 12th verse
740 J%=1
750 FOR I%=FB% TO FE% : P6$(J%)=N$(I%) : J%=J%+1 : NEXT I%
760 FOR L%=1 TO 7
770 FOR I%=GB% TO GE% : P6$(J%)=N$(I%) : J%=J%+1 : NEXT I% : NEXT L%
780 FOR I%=HB% TO HE% : P6$(J%)=N$(I%) : J%=J%+1 : NEXT I%
790 FOR I%=E1B% TO E1E% : P6$(J%)=N$(I%) : J%=J%+1 : NEXT I%
800 REM Play It Again Sam!
810 R%=1 : P%=1
820 GOSUB 2220
830 FOR I%=1 TO P1E% : GOSUB 2140 : PLAY P1$(I%) : LOCATE R%,C% : PRINT " "
840 NEXT I%
850 R%=1 : GOSUB 2240
860 FOR I%=1 TO P2E% : GOSUB 2140 : PLAY P2$(I%) : LOCATE R%,C% : PRINT " "
870 NEXT I%
880 R%=1 : GOSUB 2260
890 FOR I%=1 TO P25E% : GOSUB 2140 : PLAY P25$(I%) : LOCATE R%,C% : PRINT " "
900 NEXT I%
910 R%=1 : GOSUB 2270
920 FOR I%=1 TO P3E% : GOSUB 2140 : PLAY P3$(I%) : LOCATE R%,C% : PRINT " "
930 NEXT I%
940 R%=1 : GOSUB 2280
950 FOR I%=1 TO P4E% : GOSUB 2140 : PLAY P4$(I%) : LOCATE R%,C% : PRINT " "
960 NEXT I%
970 R%=1 : GOSUB 2290
980 FOR I%=1 TO P5E% : GOSUB 2140 : PLAY P5$(I%) : LOCATE R%,C% : PRINT " "
990 NEXT I%
1000 R%=1 : GOSUB 2300
1010 FOR I%=1 TO P6E% : GOSUB 2140 : PLAY P6$(I%) : LOCATE R%,C% : PRINT " "
1020 NEXT I%
1025 LOCATE 21,1
1028 PRINT "Transcription of music from a copy of a copy of `Twelve Days of Christmas'"
1029 PRINT " and program written by Bonnie Lamb"
1030 LOCATE ,,1
1035 END
1040 RETURN
1041 DATA "A long, long time ago, in the fifteenth century, friends "
1042 DATA "celebrated Christmas by giving 12 gifts of pleasure, "
1043 DATA "entertainment, and worth.  In the twentieth century, the "
1044 DATA "custom still lives on.  The gifts of pleasure, entertainment, "
1045 DATA "and worth are not the same. . . "
1050 DATA MF T120 MN O3 C8,C8,C4,F8,F8,F4,E8,F8,G8,A8,B-8,G8
1060 DATA A4.,B-8,O4 C4,ML D8,O3 B-8 P64 MN,A8,F8,G4,F2.
1070 DATA C8,C8,C8,C8,F8,F8,F4,E8,F8,G8,A8,B-8,G8,A2
1080 DATA O4 C4,O3 ML G8,A8 P64 MN,B-4
1090 DATA A8,B-8 O4,C4 ML,D8 O3,B-8 P64 MN,A8,F8,G4,F2.
1100 DATA C8,C8,C4,F8,F8,F4,E8,F8,G8,A8,B-8,G8,A2
1110 DATA O4 C2,ML D8,O3 B8.,B4 P64 MN,O4 C1
1120 DATA ML O4 C8 O3,B-8 P64 MN,A8,G8,F4,B-4,D4,F4
1130 DATA ML G8,F8 P64 MN,E8,D8,C4,A8,B-8 O4,C4,ML D8 O3
1140 DATA B-8 P64 MN,A8,F8,G4,F2.
1150 DATA C8,C8,C8,C8,F8,F8,F4,E8,F8,G8,A8,B-8,G8,A2
1160 DATA O4 C8,C8 O3,G8,A8,B-8,G8
1170 DATA O4 C2,ML D8,O3 B8.,B4 P64 MN,O4 C1
1180 DATA 1,5,10,15,18,23,29,33,37,42,47,51,55
1190 DATA -1,4,9,14,19,22,24,25
1200 DATA -1,5,9,13,17,20,25,31,35,39,44,49,53,57
1210 DATA -2,6,9,13,20,23,26,31,36,41,44,46,47
1220 DATA -1,5,10,13,16,19,24,30,34,38,43,48,52,56
1230 DATA -3,9,14,19,25,29,32,36,43,46,49,54,59,64,67,69,70
1240 DATA -1,5,10,14,17,20,25,31,35,39,44,49,53,57
1250 DATA -2,6,9,14,21,27,32,37
1260 DATA -2,6,9,13,20,23,26,31,36,41,44,46,47
1270 DATA 1,5,10,15,18,23,29,33,37,42,47,51,55
1280 DATA -2,6,10,12,16
1290 DATA -2,5,7,10,15,22,29,37
1300 DATA -2,4,7,10,14,21,24,27,32,37,42,45,47,48
1310 DATA -1,5,10,13,16,19,24,30,34,38,43,48,52,55
1320 DATA -2,4,8,12,17,21,27,31,35,37,41
1330 DATA -2,5,7,10,15,22,29,37
1340 DATA -2,4,7,10,14,21,24,27,32,37,42,45,47,48
1350 DATA -1,5,9,13,18,21,26,32,36,40,45,50,54,58
1360 DATA -2,5,10,15,20,25,30,32,36,40,45,49,55,59,63,65,69
1370 DATA -2,5,7,10,15,22,29,37
1380 DATA -2,4,7,10,14,21,24,27,32,37,42,45,47,48
1390 DATA 1,5,10,14,17,20,25,31,35,39,44,49,53,57
1400 DATA -3,6,10,14,19,24,29,32,37,42,47,52,57,59,63,67,72,76
1410 DATA -2,6,10,12,16
1420 DATA -2,5,7,10,15,22,29,37
1430 DATA -2,4,7,10,14,21,24,27,32,37,42,45,47,48
1440 DATA 1,5,10,13,16,19,24,30,34,38,43,48,52,56
1450 DATA -2,5,8,12,16,21,27,30,34,38,43,48,53,56,61,66,71,76
1460 DATA -2,4,8,12,17,21,27,31,35,37,41
1470 DATA -2,5,7,10,15,22,29,37
1480 DATA -2,4,7,10,14,21,24,27,32,37,42,45,47,48
1490 DATA 1,5,10,13,16,19,24,30,34,38,43,48,52,56
1500 DATA -2,4,8,13,16,19,24,30,34,38,43,48,52,55,59,63,68,73
1510 DATA -2,5,10,15,20,25,30,32,36,40,45,49,55,59,63,65,69
1520 DATA -2,5,7,10,15,22,29,37
1530 DATA -2,4,7,10,14,21,24,27,32,37,42,45,47,48
1540 DATA 1,5,9,14,19,22,27,33,37,41,46,51,55,59
1550 DATA -2,6,11,16,21,26,31,33,37,41,46,51,56,59,62,66,70,75
1560 DATA -3,6,10,14,19,24,29,32,37,42,47,52,57,59,63,67,72,76
1570 DATA -2,6,10,12,16
1580 DATA -2,5,7,10,15,22,29,37
1590 DATA -2,4,7,10,14,21,24,27,32,37,42,45,47,48
1600 DATA 1,5,9,12,17,20,25,31,35,39,44,49,53,57
1610 DATA -2,5,10,16,22,27,32,36,41,46,51,56
1620 DATA -2,4,8,13,17,22,27,30,33,37,41,46,52,55,59,63,68,73
1630 DATA -2,5,10,15,20,25,30,32,36,40,45,49,55,59,63,65,69
1640 DATA -2,5,7,10,15,22,29,37
1650 DATA -2,4,7,10,14,21,24,27,32,37,42,45,47,48
1660 DATA"On the first day of Christ-mas, my true love gave to me:"
1670 DATA"A tape cas-sette and a PC."
1680 DATA"On the sec-ond day of Christ-mas, my true love sent to me:"
1690 DATA"Two disk_ drives, and a tape cas-sette and a PC."
1700 DATA"On the third_ day of Christ-mas, my true love sent to me:"
1710 DATA"Three paral-lel ports, Two disk_ drives, and a tape cas-sette and a PC."
1720 DATA"On the fourth_ day of Christ-mas, my true love sent to me:"
1730 DATA"Four me-ga-bytes, Three paral-lel ports,"
1740 DATA"Two disk_ drives, and a tape cas-sette and a PC."
1750 DATA"On the fifth day of Christ-mas, my true love sent to me:"
1760 DATA"Five EX-TRA_ slots!"
1770 DATA"Four_ me-ga-bytes, Three parallel ports,"
1780 DATA"Two_ disk_ drives, and a tape cas-sette and a PC."
1790 DATA"On the sixth_ day of Christ_mas, my true love sent to me:"
1800 DATA"Six_ tunes a - hum-ming, Five EX-TRA_ slots!
1810 DATA"Four_ me-ga-bytes, Three parallel ports,"
1820 DATA"Two_ disk_ drives, and a tape cas-sette and a PC."
1830 DATA"On the sev-enth day of Christ-mas, my true love sent to me:"
1840 DATA"Sev-en spool-ers spool-ing, Six_ tunes a - hum-ming, Five EX-TRA_ slots!"
1850 DATA"Four_ me-ga-bytes, Three parallel ports,"
1860 DATA"Two_ disk_ drives, and a tape cas-sette and a PC."
1870 DATA"On the eighth_ day of Christ-mas, my true love sent to me:"
1880 DATA"Eight_ games a - play-ing, Sev-en spool-ers spool-ing, Six_ tunes a - hum-ming,"
1890 DATA"Five EX-TRA_ slots!"
1900 DATA"Four_ me-ga-bytes, Three parallel ports,"
1910 DATA"Two_ disk_ drives, and a tape cas-sette and a PC."
1920 DATA"On the ninth_ day of Christ-mas, my true love sent to me:"
1930 DATA"Nine_ Vis-i's Calc-ing, Eight_ games a - play-ing, Sev-en spool-ers spool-ing,"
1940 DATA"Six_ tunes a - hum-ming, Five EX-TRA_ slots!
1950 DATA"Four_ me-ga-bytes, Three parallel ports,"
1960 DATA"Two_ disk_ drives, and a tape cas-sette and a PC."
1970 DATA"On the tenth_ day of Christ-mas, my true love sent to me:"
1980 DATA"Ten_ graph-ics danc-ing, Nine_ Vis-i's Calc-ing, Eight_ games a - play-ing,"
1990 DATA"Sev-en spool-ers spool-ing, Six_ tunes a - hum-ming, Five EX-TRA_ slots!"
2000 DATA"Four_ me-ga-bytes, Three parallel ports,"
2010 DATA"Two_ disk_ drives, and a tape cas-sette and a PC."
2020 DATA"On the 'lev-enth day of Christ-mas, my true love sent to me:"
2030 DATA"'Lev-en print-ers print-ing, Ten_ graph-ics danc-ing, Nine_ Vis-i's Calc-ing,"
2040 DATA"Eight_ games a - play-ing, Sev-en spool-ers spool-ing, Six_ tunes a - hum-ming,"
2050 DATA"Five EX-TRA_ slots!"
2060 DATA"Four_ me-ga-bytes, Three parallel ports,"
2070 DATA"Two_ disk_ drives, and a tape cas-sette and a PC."
2080 DATA"On the twelfth day of Christ-mas, my true love sent to me:"
2090 DATA"Twelve FORTH's a - FORTH-ing, 'Lev-en print-ers print-ing,"
2100 DATA"Ten_ graph-ics danc-ing, Nine_ Vis-i's Calc-ing, Eight_ games a - play-ing,"
2110 DATA"Sev-en spool-ers spool-ing, Six_ tunes a - hum-ming, Five EX-TRA_ slots!"
2120 DATA"Four_ me-ga-bytes, Three parallel ports,"
2130 DATA"Two_ disk_ drives, and a tape cas-sette and a PC."
2140 C%=B%(P%)
2150 IF C% > 0 THEN GOTO 2180
2160 C%=-C%
2170 R%=R%+2
2180 LOCATE R%,C%
2190 PRINT B$
2200 P%=P%+1
2210 RETURN
2220 CLS : FOR K%=1 TO W1% : PRINT : PRINT W1$(K%) : NEXT K% : RETURN
2240 CLS : FOR K%=1 TO W2%-1 : PRINT : PRINT W2$(K%) : NEXT K% : PRINT : PRINT W2$(W2%); : RETURN
2260 CLS : FOR K%=1 TO W3% : PRINT : PRINT W3$(K%) : NEXT K% : RETURN
2270 CLS : FOR K%=1 TO W4% : PRINT : PRINT W4$(K%) : NEXT K% : RETURN
2280 CLS : FOR K%=1 TO W5% : PRINT : PRINT W5$(K%) : NEXT K% : RETURN
2290 CLS : FOR K%=1 TO W6% : PRINT : PRINT W6$(K%) : NEXT K% : RETURN
2300 CLS : FOR K%=1 TO W7% : PRINT : PRINT W7$(K%) : NEXT K% : RETURN
9500 CLS
9510 PRINT "This program requires ADVANCED BASIC; please reload using BASICA."
9520 END
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0021

     Volume in drive A has no label
     Directory of A:\

    CRC      TXT       840  11-09-84   8:27a
    CRCK4    COM      1536  10-21-82   7:54p
    JOYSTICK DOC       165  12-15-82   8:12a
    JOYSTICK EXE     23424  11-04-82   9:24a
    PACGIRLA EXE     48896   1-02-83  10:56a
    PCHEERS  BAS     11776  12-14-82   7:31a
    PCMAN    EXE     48384  11-04-82   8:28a
    PCMANHI  FIL       128   1-01-80  12:06a
            8 file(s)     135149 bytes
                           23552 bytes free
