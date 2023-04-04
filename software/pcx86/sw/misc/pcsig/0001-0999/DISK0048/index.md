---
layout: page
title: "PC-SIG Library Disk #48"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0048/
machines:
  - id: ibm5150
    type: pcx86
    config: /machines/pcx86/ibm/5150/cga/256kb/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk 0048"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5150" %}

{% comment %}info_begin{% endcomment %}

## Information about "RUNOFF"

    RUNOFF is a simple text formatter that allows you to send form feed
    commands to the printer from DOS and gives you even more control of
    print commands from DOS. Along with EDIPAGE, FF, and PCFORM, this
    combination of program which allows you to "custom print" with greater
    control over your printout's appearance.  The documentation gives you
    all the features and special functions that will assist you in running
    the program.
    
    System Requirements:  Some programs require color graphics; printer
    recommended.
    
    How to Start: Consult the .DOC and .TXT files for directions.
    To run a program with the suffix .COM, .EXE, or .BAT, just type
    its name, i.e., for FF.BAT, type FF <ENTER>. documentation.  To
    run the BASIC programs, consult the directions in GETTING STARTED
    for your configuration.
    
    Suggested Registration: $10.00
    
    File Descriptions:
    
    RUBIC    BAS  BASIC program
    UPLOAD   BAS  BASIC program
    XX       HED  Program
    DATAFIX  BAS  Adds or deletes line numbers from sequential files
    EDIPAGE  BAS  Produces formatted listing of BASIC programs
    FORTH    BAS  Implimentation of FORTH language in BASIC  (From Dr Dobbs)
    FF       TXT  Used by FF.BAT
    FF       DOC  Description of FF.BAT
    FF       BAT  Sends formfeed to printer
    SERIAL   BAS  Allows printscreen command to work with serial printer
    RUNOFF   RNO  Sample text for RUNOFF text formatter
    RUNOFF   BAS  Simple text formatter
    QUADRIVE DOC  Documentation for QUADRAM board
    PCFORM   BAS  Form generator example
    LOAN2    BAS  Calculates the missing loan amortization factor
    GROWTH2  BAS  Analysis trends and projects future growth rates
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## DATAFIX.BAS

```bas
100 'DATAFIX
120 '
140 'BY         Art Schneider Feb 8,1982
150 '           Boston Computer Society, IBM Personal Computer Users Group
160 '
180 'DESCRIPTION:   Utility program for Sequential data files!
200 '
220 '           1.  For line line numbered data files this program
240 '           strips off line numbers {and or leading  <',>
260 '           characters} from the data line and saves the remaining
280 '           full data line in a new file.  The line numbered file
300 '           must have been saved in ASCII (A'option)
320 '
340 '           2.  For convential data files (with out line numbers)
360 '           this program will add a leading line number and <',>
380 '           {remark format}.  The new line numbered file may be
400 '           loaded and edited in BASIC
420 '
440 'INSTRUCTIONS:  Run program and respond to questions.
460 '           Questions relate to choice 1 or 2 as noted above;
480 '           the names of input and output files;  and if you wish
500 '           to see on the screen the file modification as it occurs.
510 '
515 'REFERENCE:    "DIRECT TYPED SEQUENTIAL DATA FILES"
517 '
520 '           Type and edit data files with the full Screen Basic Editor!
522 '
525 '           A 15 page report on how to use this program with sequential
527 '           data files is available.  SEND $1.00 to:
530 '           Art Schneider   8 Melanie Ln    Mattapoisett MA 02739
540 '
560 'LANQUAGE:      BASIC  IBM Personal Computer (microsoft) Disk
570 '
580 '...................................   INITIALIZE   ................
600 '
620 SCREEN 0,0 : CLS : CLOSE            'set up & clear
640 DEFINT A-Z : WIDTH 80 : K =0
660 KEY OFF : TB = 10 : C$ =""
680 FALSE = 0 : TRUE = NOT FALSE
700 PRINT TAB(TB+10);
720 COLOR 0,7 :PRINT "SEQUENTIAL  DATA  FILE  UTILITY  DATAFIX"
740 PRINT : COLOR 15,0                  'bright screen
760 PRINT TAB(TB);"Select option to ADD or REMOVE line numbers from data file"
780 PRINT : PRINT TAB(TB); "A = Add  R = Remove ";:INPUT "[A or R]";S$
800 PRINT
820 PRINT TAB(TB);"Do you want the as modified file also listed on the screen;"
840 PRINT TAB(TB);:INPUT "{ LIST ... Y or N }";P$
860 IF P$="Y" OR P$ ="y" THEN P = TRUE  'yes do a screen list
880 IF S$ ="A" OR S$="a" THEN 1600      'add line utility
900 IF S$ ="R" OR S$="r" THEN 960       'remove line
920 PRINT S$; " ain't A or R ":GOTO 780
940 '
960 '................................   REMOVE  LINE NUMBERS  UTILITY  ...
1000 COLOR 7,0 : PRINT
1020 PRINT "Remove line numbers from......"
1040 INPUT "Line numbered data file name...d:Name.Ext ";L$
1060 ON ERROR GOTO 2260                 'process open error
1080 OPEN "I",#1,L$                     'input file with line #
1100 PRINT "input File.... ";L$;" found"
1120 PRINT
1140 PRINT "State file format  1,2,3"
1160 PRINT "1 = Direct  2 = Comma  3 = Remark  (4=HELP)";
1180 INPUT "   {1,2,3 or 4} ";F
1200 IF F = 4 THEN GOTO 2600            'help - explain format
1220 IF F=1 THEN C$ = " " ELSE C$ = CHR$(44) ' 1 =blank 2&3 = comma
1240 PRINT
1260 PRINT "If you name a presaved output file we will append to it!!"
1280 INPUT "Name of file without line #.......d:Name.Ext   ";D$
1300 ON ERROR GOTO 2380                 'open file error
1320 OPEN "A",#2,D$                     'with optional Append
1340 PRINT "output file ";D$ ; " ready"
1360 LOCATE 25,30                       'reserved 25th line
1380 COLOR 18,0: PRINT " processing file " ' Blink it
1400 COLOR 7,0                          'normal screen
1420 WHILE NOT EOF(1)                   'close & end
1440 LINE INPUT #1,A$                   'read full data line
1460 B = INSTR(1,A$,C$)                 'locate 1st delimeter
1480 K = K+1                            'count the lines
1500 B$ = RIGHT$(A$,LEN(A$)-B)          'the desired full data string
1520 PRINT #2,B$                        'save data string in D$ file
1540 IF P OR K <2 THEN PRINT B$         'list all or atleast one line
1560 WEND                               'continue for the length of file
1580 GOTO 2740
1600 '..................  ADD LINE NUMERS AND <',>  UTILITY  ...........
1640 COLOR 7,0 : PRINT
1660 PRINT "Add line numbers and <',> to data in file...."
1680 INPUT "Data file name....d:Name.Ext  ";L$
1700 ON ERROR GOTO 2320
1720 OPEN "I" ,#1,L$                    'input a sequential data file
1740 PRINT : PRINT "File ...." L$ " Found"
1760 PRINT
1780 PRINT "If you name a presaved file next, we will destroy old values!!"
1800 INPUT "Line numbered data file ... d:Name.Ext";D$
1820 ON ERROR GOTO 2440                 'open error trap
1840 OPEN "O",#2,D$                     'file with line numbers
1860 PRINT : PRINT "Output file " D$ " Ready"
1880 PRINT : ON ERROR GOTO 2500         'trap large data line
1900 LOCATE 25,30
1920 COLOR 18,0 : PRINT " processing file"
1940 COLOR 7,0
1960 LINENUM= 990 : INC=10              '1st line number & increment
1980 R$ =" "+CHR$(39)+","               'remark format < ',>
2000 WHILE NOT EOF(1)                   'close and end
2020 LINE INPUT #1,A$                   'read full data line
2040 LINENUM = LINENUM + INC            'the line number
2060 'drop leading numeric line number blank by string conversion
2080 LINES$ =RIGHT$(STR$(LINENUM),4) + R$ 'line number string
2100 B$ = LINES$ + A$                   'put them together
2120 K = K + 1                          'counter
2140 PRINT #2,B$                        'load the file
2160 IF P OR K <2 THEN PRINT B$         'list all or atleast one line
2180 WEND                               'continue
2200 GOTO 2740
2220 '......................  ERROR  TRAPS  .......................
2240 '
2260 IF ERR= 53 OR ERR=64 THEN PRINT "I Can't find file ";L$ : RESUME 1040
2280 IF ERR= 68 OR ERR=71 THEN PRINT "check disk & retype name":RESUME 1040
2300 ON ERROR GOTO 0            'halt on any other error
2320 IF ERR= 53 OR ERR=64 THEN PRINT "I Can't find file ";L$ : RESUME 1640
2340 IF ERR= 68 OR ERR=71 THEN PRINT "check disk & retype name":RESUME 1640
2360 ON ERROR GOTO 0            'halt on any other error
2380 IF ERR= 53 OR ERR= 64 THEN PRINT "I Can't open file ";D$ : RESUME 1240
2400 IF ERR= 68 OR ERR=71 THEN PRINT "check disk & retype name":RESUME 1240
2420 ON ERROR GOTO 0            'halt on any other error
2440 IF ERR= 53 OR ERR= 64 THEN PRINT "I Can't open file ";D$ : RESUME 1760
2460 IF ERR= 68 OR ERR=71 THEN PRINT "check disk & retype name":RESUME 1760
2480 ON ERROR GOTO 0            'halt on any other error
2500 IF ERR = 15 THEN RESUME 2520 ELSE ON ERROR GOTO 0
2520 PRINT
2540 PRINT TAB(TB) "You have a very big line and I can't add the line number"
2560 PRINT :PRINT A$            'big line
2580 PRINT : PRINT "So I have to halt":GOTO 2740
2600 PRINT :PRINT "    By format we mean the first characters after the line number" : PRINT "Your line numbered file should be in one of the following forms:"
2620 PRINT
2640 PRINT "    1. DIRECT  a string data value follows the line number."
2660 PRINT "    2. COMMA   a <,> follows the line number."
2680 PRINT "    3. REMARK  the two <',> characters follow the line number."
2700 GOTO  1120                 'repeat the question
2710 '
2720 '.........................  CLOSE  AND  END  .....................
2740 CLOSE     'all data files
2760 PRINT : PRINT : COLOR 15,0
2780 PRINT TAB(TB) K "  Data Lines Processed into " CHR$(34) D$;
2800 IF INSTR(1,D$,".") THEN PRINT CHR$(34) ELSE PRINT ".   " CHR$(34)
2820 RD1 = VAL(MID$(TIME$,4,2))*540     'use clock for random seed
2840 RD2 = VAL(MID$(TIME$,7,2))*100
2860 RANDOMIZE RD1-RD2
2880 FOR J = 1 TO 5
2900 SOUND RND*1000+37,4        'random sound at end
2920 NEXT J : SOUND 100,0 : COLOR 7,0
2940 KEY ON : ON ERROR GOTO 0   'must also end open error traps
2960 END                        'by Art Schneider (617) 993-2621
```

## EDIPAGE.BAS

```bas
100 'EDIPAGE
120 '   by      Art Schneider  Feb 8 1982
125 '            Boston Computer Society, IBM Personal Computer Users Group
130 '
140 ' DESCRIPTION
150 '   Lists an ASCII file in page formate; 50 lines per page
155 '   with FILE NAME,  REMARKS,  DATE,  PAGE NUMBER on page top
158 '   and either  `continued'  or  `end'  at page bottom.
160 '   Start printer at aprox. six lines down with continous feed paper
162 '
170 '   Used on 80 column printer width & Spinwriter 7730
180 '
190 DEFINT A-Z
200 WIDTH "lpt1:",80            'print line width, alter if desired
300 LP = 50                     'lines of file per page, alter if desired
500 '
1000 PRINT "Page List Program"
1100 PRINT
1150 PRINT "File you want to list must be saved in ASCII { see `A OPTION' }"
1200 COLOR 15,0 : INPUT "Full ASCII File Name   d:name.ext ";ASCIIFILE$
1220 '
1225 'Listing file name as printed may differ from actual disk file name
1227 'per the next input.  The next input name will print to the left top of
1230 'of each page.  Current date and page number will print at the right.
1240 '
1250 PRINT : INPUT "List heading file name........";HEAD$
1260 INPUT "2 = Screen    1 = printer  (1 or 2)";FF
1270 ON FF GOTO 1300,1350
1300 OPEN "lpt1:" FOR OUTPUT AS #FF :GOTO 1400
1350 OPEN "scrn:" FOR OUTPUT AS #FF
1400 OPEN ASCIIFILE$ FOR INPUT AS #3
1430 '
1440 'Use a short discriptive comment about file on next input.
1442 'This heading will center on each page of the listing
1445 '
1450 PRINT : INPUT "Short heading remark";REMLINE$
1500 PAGE =0 : COLOR 7,0 : PRINT : TB = 5
1600 PAGE = PAGE + 1 : GOSUB 3000
2000 '
2100 K = K+1
2200 IF K = LP THEN PRINT #FF, "  " : PRINT #FF, TAB(30) "continued" CHR$(12):GOTO 1600
2300 LINE INPUT #3,A$
2320 LA = LEN(A$) :IF LA > 80 THEN K= K+1 : IF LA > 160 THEN K = K +1
2400 PRINT #FF,  A$
2500 IF EOF(3) THEN 6000 ELSE 2100
3000 PRINT #FF, HEAD$ TAB(20) REMLINE$ TAB(60) DATE$ "  page" PAGE
3100 PRINT #FF, " ": PRINT #FF, " ":K=0 : RETURN
6000 PRINT #FF, " "
6100 PRINT #FF, " "
6300 PRINT #FF, TAB(30) "end" CHR$(12)
6400 CLOSE : END
```

## FORTH.BAS

```bas
10 REM **********BASIC FORTH V. 3 ************
11 ' by C. H. Ting
12 ' PO BOX 504, Sunnyvale, CA 94086
13 ' converted to IBM PC by Art Bevilacqua, 14 Arthur St. Danvers, Ma 01923
14 ' See Dr. Dobbs Journal Number 60, October 1981 for the base article
20 DIM S(40),R(20),L(10),LO(10)
30 DIM I$(80)
40 PRINT "BASIC FORTH VERSION V.3"
50 REM N IS SP, M IS RP, K IS IP, AND L IS W.
60 ON ERROR GOTO 90
70 ON KEY(1) GOSUB 2340
80 GOTO 100
90 PRINT A$," ?"
100 M=0
110 N=0
120 REM ************ TEXT INTERPRETER  ************
130 K=1
140 INPUT I$
150 L1=0
160 L(K)=L1
170 LO(K)=LEN(I$)
180 L1=LO(K)
190 IF N<0 THEN GOTO 210
200 GOTO 230
210 PRINT "STACK EMPTY"
220 GOTO 100
230 L(K)=L(K)+1
240 IF L(K)>LO(K) THEN GOTO 350
250 B$=MID$(I$,L(K),1)
260 IF B$=" " THEN GOTO 230
270 A$=B$
280 L(K)=L(K)+1
290 IF L(K)>LO(K) THEN GOTO 340
300 B$=MID$(I$,L(K),1)
310 IF B$=" " THEN GOTO 340
320 A$=A$+B$
330 GOTO 280
340 GOTO 400
350 IF K<2 THEN GOTO 130
360 K=K-1
370 I$=MID$(I$,1,LO(K))
380 L1=LO(K)
390 GOTO 230
400 REM ***********  DICTIONARY **********
410 REM 300-900 :: HIGH LEVEL DEFINITIONS
420 IF A$<>"SQUARE" THEN GOTO 470
430 B$="DUP *"
440 I$=I$+B$
450 K=K+1
460 GOTO 160
470 IF A$<>"CUBE" THEN GOTO 520
480 B$="DUP SQUARE *"
490 I$=I$+B$
500 K=K+1
510 GOTO 160
520 IF A$<>"TEST" THEN GOTO 570
530 B$="DO PI 10 / R@ * SIN . LOOP"
540 I$=I$+B$
550 K=K+1
560 GOTO 160
570 REM
580 REM *************** LOW LEVEL DEFINITIONS NUCLEUS **********
590 IF A$<>"+" THEN GOTO 630
600 N=N-1
610 S(N)=S(N)+S(N+1)
620 GOTO 190
630 IF A$<>"-" THEN GOTO 670
640 N=N-1
650 S(N)=S(N)-S(N+1)
660 GOTO 190
670 IF A$<>"*" THEN GOTO 710
680 N=N-1
690 S(N)=S(N)*S(N+1)
700 GOTO 190
710 IF A$<>"/" THEN GOTO 750
720 N=N-1
730 S(N)=S(N)/S(N+1)
740 GOTO 190
750 IF A$<>"ABS" THEN GOTO 780
760 S(N)=ABS(S(N))
770 GOTO 190
780 IF A$<>"ATN" THEN GOTO 810
790 S(N)=ATN(S(N))
800 GOTO 190
810 IF A$<>"COS" THEN GOTO 840
820 S(N)=COS(S(N))
830 GOTO 190
840 IF A$<>"EXP" THEN GOTO 870
850 S(N)=EXP(S(N))
860 GOTO 190
870 IF A$<>"INT" THEN GOTO 900
880 S(N)=INT(S(N))
890 GOTO 190
900 IF A$<>"LOG" THEN GOTO 930
910 LET S(N)=LOG(S(N))
920 GOTO 190
930 IF A$<>"RND" THEN GOTO 960
940 S(N)=RND(-N)
950 GOTO 190
960 IF A$<>"SGN" THEN GOTO 990
970 S(N)=SGN(S(N))
980 GOTO 190
990 IF A$<>"SIN" THEN GOTO 1020
1000 S(N)=SIN(S(N))
1010 GOTO 190
1020 IF A$<>"SQR" THEN GOTO 1050
1030 S(N)=SQR(S(N))
1040 GOTO 190
1050 IF A$<>"TAN" THEN GOTO 1080
1060 S(N)=TAN(S(N))
1070 GOTO 190
1080 IF A$<>"^" THEN GOTO 1120
1090 N=N-1
1100 S(N)=S(N)^S(N+1)
1110 GOTO 190
1120 IF A$<>"S?" THEN GOTO 1170
1130 FOR I=1 TO N
1140 PRINT S(N-I+1)
1150 NEXT I
1160 GOTO 190
1170 IF A$<>"." THEN GOTO 1220
1180 IF N<1 THEN GOTO 210
1190 PRINT S(N)
1200 N=N-1
1210 GOTO 190
1220 IF A$<>"DUP" THEN GOTO 1260
1230 N=N+1
1240 S(N)=S(N-1)
1250 GOTO 190
1260 IF A$<>"DROP" THEN GOTO 1290
1270 N=N-1
1280 GOTO 190
1290 IF A$<>"SWAP" THEN GOTO 1340
1300 S(N+1)=S(N-1)
1310 S(N-1)=S(N)
1320 S(N)=S(N+1)
1330 GOTO 190
1340 IF A$<>"OVER" THEN GOTO 1380
1350 N=N+1
1360 S(N)=S(N-2)
1370 GOTO 190
1380 IF A$<>">R" THEN GOTO 1430
1390 M=M+1
1400 R(M)=S(N)
1410 N=N-1
1420 GOTO 190
1430 IF A$<>"R>" THEN GOTO 1480
1440 N=N+1
1450 S(N)=R(M)
1460 M=M-1
1470 GOTO 190
1480 IF A$<>"R@" THEN GOTO 1520
1490 N=N+1
1500 S(N)=R(M)
1510 GOTO 190
1520 REM **************CONTROL STRUCTURES **************
1530 IF A$<>"=" THEN GOTO 1600
1540 N=N-1
1550 IF S(N)=S(N+1) THEN GOTO 1580
1560 S(N)=0
1570 GOTO 190
1580 S(N)=1
1590 GOTO 190
1600 IF A$<>">" THEN GOTO 1670
1610 N=N-1
1620 IF S(N)>S(N+1) THEN GOTO 1650
1630 S(N)=0
1640 GOTO 190
1650 S(N)=1
1660 GOTO 190
1670 IF A$<>"<" THEN GOTO 1740
1680 N=N-1
1690 IF S(N)<S(N+1) THEN GOTO 1720
1700 S(N)=0
1710 GOTO 190
1720 S(N)=1
1730 GOTO 190
1740 IF A$<>"IF" THEN GOTO 1870
1750 N=N-1
1760 IF S(N+1) THEN GOTO 190
1770 FOR I=L(K) TO LO(K)-3
1780 B$=MID$(I$,I,4)
1790 IF B$="ELSE" THEN GOTO 1840
1800 IF B$="THEN" THEN GOTO 1840
1810 NEXT I
1820 PRINT "IF?"
1830 GOTO 100
1840 L(K)=I+4
1850 GOTO 190
1860 GOTO 190
1870 IF A$<>"ELSE" THEN GOTO 1890
1880 GOTO 1770
1890 IF A$<>"THEN" THEN GOTO 1910
1900 GOTO 190
1910 IF A$<>"BEGIN" THEN GOTO 1950
1920 M=M+1
1930 R(M)=L(K)
1940 GOTO 190
1950 IF A$<>"UNTIL" THEN GOTO 2030
1960 N=N-1
1970 IF S(N+1) THEN GOTO 2010
1980 IF S(N+1) THEN GOTO 190
1990 L(K)=R(M)
2000 GOTO 190
2010 M=M-1
2020 GOTO 190
2030 IF A$<>"DO" THEN GOTO 2120
2040 M=M+1
2050 R(M)=L(K)
2060 M=M+1
2070 R(M)=S(N-1)
2080 M=M+1
2090 R(M)=S(N)
2100 N=N-2
2110 GOTO 190
2120 IF A$<>"LOOP" THEN GOTO 2190
2130 R(M)=R(M)+1
2140 IF R(M-1)>R(M) THEN GOTO 2170
2150 M=M-3
2160 GOTO 190
2170 L(K)=R(M-2)
2180 GOTO 190
2190 REM ********* CONSTANTS **************
2200 IF A$<>"PI" THEN GOTO 2240
2210 N=N+1
2220 S(N)=3.14159
2230 GOTO 190
2240 IF A$<>"0" THEN GOTO 2280
2250 N=N+1
2260 S(N)=0
2270 GOTO 190
2280 IF A$<>"STOP" THEN GOTO 2300
2290 STOP
2300 REM ********* NUMBER **********
2310 N=N+1
2320 S(N)=VAL(A$)
2330 GOTO 190
2340 END
```

## GROWTH2.BAS

```bas
10 KEY OFF
30 WIDTH 80:SCREEN 0:COLOR 7,0:CLS
40 DIM F(53)
49 COLOR 0,7:PRINT SPC(79):LOCATE 1,1
50 PRINT TAB(5);"Growth Rate        and       Projections  via  Exponential Regression":COLOR 7,0
60 PRINT
70 PRINT
81 PRINT "    This program analyzes the trend (of some value) for past periods,"
82 PRINT "    computes an average growth rate, and projects future figures."
83 PRINT :PRINT "    If entering new data ---":PRINT "    You will be asked to specify the number of past periods, and then the number    of future periods to project.  ";
84 PRINT "For each of the past periods, you must then":PRINT "    enter the number of items. (the number must be non-zero)"
85 PRINT :PRINT "    The total number of periods (past + future) cannot exceed 52."
90 PRINT
100 PRINT
150 LINE INPUT;"Do you want to enter new <new> or review old <old> data ? ";TODO$:TODO$=LEFT$(TODO$,1)
160 IF TODO$="n" OR TODO$="N" THEN PRINT :GOTO 200
165 IF TODO$<>"o" AND TODO$<>"O" THEN PRINT:GOTO 150
170 PRINT :LINE INPUT"What is the file name of the old data you want to review ?";OLD$:OLD$=LEFT$(OLD$,12):LOCATE 25,10:PRINT "Please stand by while the file is read in";:IF OLD$="" THEN RUN
175 OPEN OLD$ FOR INPUT AS #1 : J=0
176 INPUT#1, TITLE$:INPUT #1, M,P
177 WHILE NOT EOF(1) : J=J+1:IF J>52 THEN 188 ELSE INPUT#1,F(J):WEND
188 GOTO 300
199 REM .. data entry
200 PRINT :LINE INPUT "How many past periods: ? ";M$:M=VAL(M$)
210 LINE INPUT "How many periods to project (future): ? ";P$:P=VAL(P$):IF P<0 THEN P=0
220 IF M+P>52 THEN PRINT :PRINT "ONLY 52 PERIODS PLEASE  !":GOTO 100
225 IF M=<0 THEN PRINT :PRINT "Number of past periods can't = ";M;"!":GOTO 100
230 PRINT
240 PRINT "Now enter amounts for past periods :"
250 PRINT
260 FOR J=1 TO M
270 PRINT "Period ";J;": ? ";
280 LINE INPUT;F$:F(J)=VAL(F$):IF F(J) > 0.  THEN 290
282 Y=CSRLIN:SOUND 40,20:LOCATE 25,1:PRINT "Sorry, you must enter a numeric value > 0";:LOCATE Y,1:PRINT SPC(30);:LOCATE Y,1:GOTO 270
290 PRINT :NEXT J
299 REM .. perform exponential regression
300 T=LOG(F(1)):TOTAL=0
310 V=0
320 FOR J=2 TO M
325 IF J>52 THEN J=52 GOTO 360
330 L=LOG(F(J))
340 T=T+L
350 V=V+(J-1)*L
360 NEXT J
370 A=6*(2*V/(M-1)-T)/M/(M+1)
380 A=EXP(A)-1
390 AGF=EXP(T/M-A*(M-1)/2)
399 REM .. project values for future periods
400 FOR J=M+1 TO M+P
410 F(J)=INT(AGF*(1+A)^(J-1)+0.5)
420 NEXT J
430 MIN=F(1)
440 MAX=F(1)
450 FOR J=1 TO M+P
455 IF J<=M THEN TOTAL=TOTAL+F(J)
460 IF F(J)>MAX THEN MAX=F(J)
470 IF F(J)<MIN THEN MIN=F(J)
480 NEXT J
490 S=168/(MAX+MIN) : AVG=TOTAL/M  'find graph scale factor (s), 168 is number                                      of vertical dots space left
999 REM .. results in tabular form
1000 CLS:Y=1:X=1:ROW14=0:Y1=1
1010 FOR J=1 TO M
1030 LOCATE Y,X
1040 PRINT "Period #";J;F(J);
1042 Y=Y+1
1043 IF Y=14 THEN Y=1:X=X+20:ROW14=-1
1050 NEXT J
1051 IF ROW14 THEN Y=14:X=1 ELSE X=1
1052 LOCATE Y,X:FOR J1=1 TO 79 : PRINT CHR$(240);:NEXT:LOCATE Y,33:PRINT " PROJECTED ":Y=Y+1:Y1=Y
1053 FOR J=M+1 TO M+P : IF X>79 THEN X=1
1054 LOCATE Y,X
1055 PRINT "Period #";J;" ";F(J);:Y=Y+1
1056 IF Y=23 THEN Y=Y1:X=X+20
1058 NEXT J
1060 LOCATE 23,1:PRINT "** (Growth Rate =";INT(A*10000+0.5)/100;"%";
1065 PRINT "   Average value for the past ";M;" periods = ";AVG;")";
1066 LOCATE 24,5:PRINT TITLE$;
1070 LOCATE 25,1:LINE INPUT;"Press  Return  to continue ... ";GOON$
1099 REM .. plot individual data points < scatter graph >
1100 GOSUB 2010
1110 FOR J=1 TO M+P
1120 IF J>M THEN C=1
1130 PSET (J*11+45,200-INT(S*F(J))),C
1140 NEXT J
1199 REM .. plot line graph
1200 GOSUB 2000
1202 FLAG!=0  'false
1205 IF ASC(A$)=27 THEN SCREEN 0 : GOTO 1000
1207 IF FLAG! THEN GOSUB 2010
1210 PSET (56,200-INT(S*F(1))),C
1220 FOR J=2 TO M+P
1230 IF J>M THEN C=1
1240 LINE -(J*11+45,200-INT(S*F(J))),C
1250 NEXT J
1260 REM .. plot individual data points, connect them with a line <line graph>
1262 GOSUB 2000
1264 FLAG!=0  'false
1266 IF ASC(A$)=27 THEN 1100
1268 IF FLAG! THEN GOSUB 2010
1269 IF M+P<24 THEN R1=2 ELSE R1=3   'used to set radius of circle on linegraph
1270 PSET (56,200-INT(S*F(1))),C  : CIRCLE (56,200-INT(S*F(1))),R1,1,,6.2831
1272 FOR J=2 TO M+P
1274 IF J>M THEN C=1
1276 P1=J*11+45 : P2=200-INT(S*F(J))
1278 LINE -(P1,P2),C : CIRCLE (P1,P2),R1,1,,6.2831  : PAINT (P1,P2),2,1
1280 NEXT J
1299 REM .. plot a bar graph
1300 GOSUB 2000
1303 IF ASC(A$)=27 THEN FLAG!=-1 : GOTO 1207
1310 FOR J=1 TO M+P
1320 IF J>M THEN C=1
1330 LINE (J*11+45,200)-(J*11+54,200-INT(S*F(J))),C,BF
1340 NEXT J
1399 REM .. store this data if requested
1400 A$=INPUT$(1) : IF ASC(A$)=27 THEN FLAG!=-1 : GOTO 1268
1402 SCREEN 0:WIDTH 80:CLS:LOCATE 3,1
1404 LINE INPUT;"Do you wish to review this data again ? ";YORN$:YORN1$=LEFT$(YORN$,1):IF YORN1$="y" OR YORN1$="Y" THEN 1000
1408 LOCATE 6,1:LINE INPUT;"Do you want to save this data  ? ";YORN$:YORN1$=LEFT$(YORN$,1):IF YORN1$<>"y" AND YORN1$<>"Y" AND YORN1$<>"n" AND YORN1$<>"N" THEN 1402
1409 IF YORN1$="n" OR YORN1$="N" THEN 1510
1410 LOCATE 8,1:LINE INPUT;"Please enter the file name (8 characters max) : ? ";FILENAME$:FILENAME$=LEFT$(FILENAME$,8):FILENAME$=FILENAME$+".gro"
1412 LOCATE 10,1:LINE INPUT;"Please specify a title for this data ? ";TITLE$
1420 OPEN FILENAME$ FOR OUTPUT AS #1:PRINT #1,LEFT$(TITLE$,70):PRINT #1, M;P
1430 FOR J=1 TO M+P : PRINT#1, F(J) : NEXT
1440 CLOSE#1
1510 SCREEN 0,0,0
1520 RUN
1999 REM .. select graphic screen resolution, choose colors (c), display titles             & scaled values.  Then return to perform the graph
2000 A$=INPUT$(1) : IF A$="" THEN A$="."  'dummy
2002 IF ASC(A$)=27 THEN RETURN
2010 CLS
2020 SCREEN 2,0 : IF M+P < 24 THEN SCREEN 1,0
2030 IF M+P < 24 THEN COLOR 0,7
2040 IF M+P < 24 THEN C=2 ELSE C=1
2050 PRINT "Average Growth Rate = ";INT(A*10000+0.5)/100;"%";
2070 IF M+P<24 THEN PRINT :PRINT "Amount";:PRINT " ||    <----------- Periods ---------->": PRINT " \/    1  3   6   9   12  15  18  21  24";:GOTO 2088
2080 PRINT "   Average value for past";M;"periods =";AVG:PRINT "Amount  ";TITLE$:PRINT " ||    <------------------------------- Periods ------------------------------>"
2085 PRINT " \/    1  3   6   9   12  15  18  21 23  26  29  32 34 36 38  41  44  47  50  53";
2088 IF M+P<24 THEN 2200
2100 FOR J=5 TO 25 STEP 2:LOCATE J,1:PRINT INT((168-(J/5-1)*40)/S+0.5);:NEXT:RETURN
2200 FOR J=5 TO 25 STEP 3:LOCATE J,1:PRINT INT((168-(J/5-1)*40)/S+0.5);:NEXT:RETURN
```

## LOAN2.BAS

```bas
10 REM BASIC LOAN ANALYSIS
12 WIDTH 80:DOLL$="$$######,.##":NUMM$="######,.##":PERR$="######,.##_ _%"
20 ON ERROR GOTO 1400
25 GOTO 100  'start main program
50 REM subroutine to strip out any comma's and evaluate a "K" entry
51 D2$=""
52 FOR C=1 TO LEN(D$)
53 IF MID$(D$,C,1)="," THEN 56 ELSE D2$=D2$+MID$(D$,C,1)
56 NEXT
57 D$=D2$ : IF RIGHT$(D$,1)="K" OR RIGHT$(D$,1)="k" THEN D=VAL(LEFT$(D$,LEN(D$)    -1))*1000  ELSE D=VAL(D$)
59 RETURN   ' end of subroutine
100 REM start main program
101 CLS:KEY OFF
105 COLOR 0,7:PRINT SPC(79):LOCATE ,30:PRINT "LOAN ANALYSIS":COLOR 7,0:PRINT
110 PRINT "This Program calculates the missing factor of any fully amortized loan" : PRINT "given the other three.  It also provides details on the full cost of the loan"
115 PRINT "and the interest paid over any specified period."
130 LOCATE 7,1:PRINT "Factors of the Loan :    Any one of these four factors may be unknown.":PRINT "Principal,  Monthly Payment,  Number of Payments, &  Annual Interest Rate"
140 PRINT "---------   ---------------   ------------------     --------------------";
145 LOCATE 25,8:PRINT "For the ONE unknown item, enter nothing, just press return";
150 LOCATE 11,1:LINE INPUT"What is the Principal Amount of the Loan   ? ";V$:       PRINT
155 D$=V$ : GOSUB 50 : V$=D$ : V=D  'strip out comma's  &  evaluate "K"
170 LINE INPUT"What is the Amount of the Monthly Payment  ? ";M$:       PRINT
175 D$=M$ : GOSUB 50 : M$=D$ : M=D  'strip out comma's  &  evaluate "K"
180 LINE INPUT"How many Monthly Payments have to be made  ? ";N$:       PRINT
185 D$=N$ : GOSUB 50 : N$=D$ : N=D  'strip out comma's  &  evaluate "K"
190 LINE INPUT"What's the Annual Percentage Interest Rate ? ";I$:       PRINT
195 D$=I$ : GOSUB 50 : I$=D$ : I=D/1200  'strip out comma's  &  evaluate "K"
199 OL=CSRLIN : LOCATE 25,8:PRINT SPC(71); : LOCATE OL,1
200 REM
201 IF V$="" AND (M$="" OR N$="" OR I$="") THEN PRINT :PRINT "MORE TAHN ONE UNKNOWN .... SORRY .... STOP PROGRAM":END
203 IF M$="" AND (N$="" OR I$="") THEN PRINT :PRINT "MORE THAN ONE UNKNOWN .... SORRY .... STOP PROGRAM":END
205 IF N$="" AND I$="" THEN PRINT :PRINT "MORE TAHN ONE UNKNOWN .... SORRY .... STOP PROGRAM":END
250 REM
251 IF M$="" THEN 500
252 IF N$="" THEN 600
253 IF M*N<V THEN PRINT :PRINT "The Monthly Payment  times  the Number of Payments  = ";M*N:PRINT "This is less than the Principal !  Loan data is inconsistant...STOP PROGRAM":END
254 IF V$="" THEN 400
255 IF I$="" THEN 700
300 PRINT :PRINT "All items are known......       Using your data : " : GOTO 900
400 REM *** calculate Principal
410 V=M*(1-(1/(1+I)^N))/I
420 PRINT :PRINT "The Principal Amount of the Loan  = ";:PRINT USING DOLL$;V;:      GOTO 900
500 REM *** calculate Monthly Payment
510 M=V*(I/(1-(1+I)^(-N)))
520 PRINT :PRINT "The Monthly Payment amount  = ";:PRINT USING DOLL$;M;:GOTO 900
600 REM *** calculate Number of Payments
610 N=LOG(1/(1-I*V/M))/LOG(1+I)
620 PRINT :PRINT "The Number of Monthly Payments  = ";:PRINT USING NUMM$;N;:        GOTO 900
700 REM *** calculate Annual Interest
702 I1=2*(N-V/M)/(N*(N+1))
704 V1=M*(1-(1+I1)^(-N))/I1
706 IF V1>1.000001#*V THEN 750
707 IF V1<0.9999991#*V THEN 750
708 I=I1*1200
720 PRINT :PRINT "The Annual Interest Rate  = ";:PRINT USING PERR$;I;:I=I/1200:     GOTO 900  'switch interest to onthly value for part two of program
750 Y=(1+I1)^(-N)
751 W=1-Y
752 I1=I1*(1-(((I1*V/M)-W)/(W-(N*I1*Y/(1+I1)))))
753 GOTO 704
900 REM show total
901 PRINT TAB(50);"Total Paid = ";:PRINT USING DOLL$;M*N
905 PRINT TAB(50);"Interest   = ";:PRINT USING DOLL$;M*N-V
910 LOCATE 23,1 : LINE INPUT"Would you care to review the interest payable over a specified period   ? ";YORN$
915 IF LEFT$(YORN$,1)="y" OR YORN$="Y" THEN 1200
920 GOTO 1300   'ask if another cycle desired
1200 REM  find interest payable over a specified period
1210 CLS:LOCATE 2,20:PRINT "LOAN PROGRAM   PART 2";
1230 LOCATE 5,1 : PRINT "In order to calculate the total interest payable over some specified period" : PRINT "You must state the First and Last monthly period over which to compute."
1234 LOCATE 9,1:PRINT "Example :  First month of  13   and   Last month of 24" :     PRINT"will produce the interest for the second year of the loan .... etc."
1250 LOCATE 13,1 : LINE INPUT"What is the number of the First monthly payment for this period  ? ";N1$ : PRINT
1255 D$=N1$ : GOSUB 50 : N1=D : N1P=N1-1
1260 LOCATE 14,1 : LINE INPUT"What is the number of the Last monthly payment for this period   ? ";N2$ : PRINT
1265 D$=N2$ : GOSUB 50 : N2=D
1280 IP=M*(N2-N1P-(((1+I)^(N2-N))/I)+(((1+I)^(N1P-N))/I))
1285 LOCATE 18,1 : PRINT "The interest payable on the loan over the period ";N1;     "thru";N2;TAB(65);" =  "; : PRINT USING DOLL$;IP;: LOCATE 19,1
1290 VREMAIN=(M/I)*(1-(1+I)^(N2-N))
1292 PRINT "The remaining principal of the loan after period number  ";N2;           TAB(65);" =  "; :PRINT USING DOLL$;VREMAIN; : LOCATE 22,1
1295 LINE INPUT;"Would you like to review the interest payable over another period  ? ";YORN$
1296 IF LEFT$(YORN$,1)="y" OR YORN$="Y" THEN 1210 ELSE LOCATE 23,1
1300 REM cycle thru again if desired
1310 LINE INPUT;"Would you like to cycle thru another problem (y or n)  ? "    ;YORN$
1320 IF LEFT$(YORN$,1)="y" OR YORN$="Y" THEN RUN ELSE END
1400 REM error section
1408 IF ERR<>5 AND ERR<>6 THEN 1450
1410 SOUND 45,12:PRINT "SORRY ...  But the loan parameters you entered are beyond the computational":PRINT"           range of this program. ":PRINT
1412 LINE INPUT;"Would you like to cycle thru another problem (y or n)  ? "    ;YORN$
1414 IF LEFT$(YORN$,1)="y" OR YORN$="Y" THEN RUN ELSE END
1450 ON ERROR GOTO 0 : PRINT "Program ERROR... STOP PROGRAM":STOP
```

## PCFORM.BAS

```bas
1 'PCFORM 11/01/82 Forms-oriented data entry routines
2 '
3 'COPYRIGHT (c) 1982 by Buzz Hamilton
4 '                      29 Crawford Street
5 '                      Northboro, MA 01532 (617) 393-3199
6 '
7 'Permission to copy this program is hereby granted except for commercial gain.
8 '
9 '
10 'These routines handle the left-cursor(75), right-cursor(77),
11 '  insert(82), delete(83), and back-space(8) keys in a way
12 '  which is similar to the PCBASIC screen editor.
13 '
14 ' Each field is described by five items:
15 '   1 ROW
16 '   2 COLUMN
17 '   3 LENGTH    (negative length means FULL FIELD REQUIRED)
18 '   4 TYPE      (0=text  1=numeric)
19 '   5 PROMPT
20 '
100 CLEAR
110 DEF FNB(Z$,Z)=ASC(MID$(Z$,Z)):DEF FNFILL$(Z,Z9)=STRING$(Z9-LEN(STR$(Z))+1,48)+MID$(STR$(Z),2)
120 E$=CHR$(7):L9=0
130 READ N:FOR I=1 TO N:READ A$:P1=1:F=0
140 FOR P2=P1 TO LEN(A$):IF MID$(A$,P2,1)="|" THEN 160
150 NEXT P2:IF F<4 THEN PRINT"Missing field - ";A$:END
160 F=F+1:IF F<5 THEN J=VAL(MID$(A$,P1,P2-P1))
170 ON F GOTO 180,190,200,220,230
180 Y=J:GOTO 240
190 X=J:GOTO 240
200 L=J:IF L<0 THEN L=127-L
210 GOTO 240
220 T=J:GOTO 240
230 P$=MID$(A$,P1,P2-P1):K=P1
240 IF F<5 THEN P1=P2+1:GOTO 140
250 IF I=1 THEN 350
260 '------ CHECK FOR FIELD OVERLAP
270 FOR J=1 TO I-1
280 IF FNB(Y$,J)<>Y THEN 330
290 L0=FNB(LF$,J):IF L0>127 THEN L0=L0-127
300 IF (X+L+LEN(P$))<(FNB(X$,J)-L0) OR X>=(FNB(X$,J)+L0) THEN 330
310 PRINT"Position conflict between":PRINT I;"-";P$;
320 RESTORE:READ N:FOR K=1 TO J:READ A$:NEXT K:P=FNB(PD$,J):PRINT" and ";J;"-";MID$(A$,P,FNB(LP$,J)):END
330 NEXT J
340 '------ PACK NUMERIC PARAMETERS INTO STRINGS
350 X$=X$+CHR$(X+LEN(P$)+1):Y$=Y$+CHR$(Y)
360 LP$=LP$+CHR$(LEN(P$)):LF$=LF$+CHR$(L):T$=T$+CHR$(T):PD$=PD$+CHR$(K):PR$=PR$+CHR$(L9)
370 L2=L:IF L2>127 THEN L2=L2-127
380 L9=L9+L2:NEXT I
390 '------ DISPLAY PROMPTS
400 COLOR 7,0:CLS:RESTORE:READ N
410 FOR I=1 TO N
420 READ A$
430 L=FNB(LP$,I):IF L<>0 THEN LOCATE FNB(Y$,I),FNB(X$,I)-L:P1=FNB(PD$,I):PRINT MID$(A$,P1,FNB(LP$,I));
440 NEXT I
450 '------ ENTER DATA
460 REC$=SPACE$(L9)
470 INSF=0
480 FOR I=1 TO N
490 O=FNB(PR$,I):L0=FNB(LF$,I):L=L0:IF L0>127 THEN L=L0-127
500 P=1:IF L=0 THEN 820
510 Y=FNB(Y$,I):X=FNB(X$,I)
520 COLOR 0,7
530 LOCATE Y,X:PRINT MID$(REC$,O+1,L)
540 COLOR 7,0
550 IF P<=L THEN LOCATE Y,X+P-1:CI=FNB(REC$,O+P):PRINT CHR$(CI);:LOCATE Y,X+P-1
560 I$=INKEY$:IF I$="" THEN 560
570 IF E<>0 THEN LOCATE 25,1:COLOR 7,0:PRINT SPACE$(79);:E=0:LOCATE Y,X+P-1
580 C=ASC(I$):IF C=27 THEN COLOR 7,0:CLS:END
590 COLOR 0,7:IF C=8 THEN 640
600 IF LEN(I$)=1 THEN 700 ELSE C=FNB(I$,2):IF C<>75 AND C<>77 AND C<>82 AND C<>83 THEN 550
610 IF C=82 THEN INSF=1-INSF:IF INSF=0 THEN 540 ELSE COLOR 16,7:GOTO 550
620 INSF=0:IF C<>83 AND P<=L THEN PRINT CHR$(CI);
630 IF C<>75 THEN 660
640 IF P=1 THEN IF I=1 THEN P$="AT FIRST FIELD":GOSUB 920:GOTO 550 ELSE IF C=75 THEN I=I-1:GOTO 490 ELSE P$="AT BEGINNING OF FIELD":GOSUB 920:GOTO 550
650 P=P-1
660 IF C=83 OR C=8 THEN MID$(REC$,O+P,L-P)=MID$(REC$,O+P+1,L-P):MID$(REC$,O+L,1)=" ":IF C=8 THEN LOCATE Y,X+P-1
670 IF C<>75 AND C<>77 THEN PRINT MID$(REC$,O+P,L-P+1);
680 IF C=77 THEN IF P=L THEN 750 ELSE P=P+1
690 GOTO 540
700 IF C=13 THEN 760
710 IF P>L THEN 750
720 IF INSF=1 THEN IF MID$(REC$,O+L,1)<>" " THEN 750 ELSE MID$(REC$,O+P+1,L-P)=MID$(REC$,O+P,L-P):MID$(REC$,O+P,1)=I$:PRINT MID$(REC$,O+P,L-P+1);:P=P+1:COLOR 16,7:GOTO 550
730 PRINT I$;:IF FNB(T$,I)=1 THEN IF C<48 OR C>57 THEN P$="NUMERICS ONLY":GOSUB 920:GOTO 550
740 MID$(REC$,O+P,1)=I$:IF P<=L THEN P=P+1:GOTO 550
750 P$="FIELD IS FULL":GOSUB 920:GOTO 550
760 J=L:IF P<=L THEN PRINT CHR$(CI);:FOR J=L TO 1 STEP -1:IF MID$(REC$,O+J,1)=" " THEN NEXT J
770 IF J<L THEN IF L0>127 THEN P$="FULL FIELD REQUIRED":GOSUB 920:GOTO 550
780 IF FNB(T$,I)<>1 THEN 800
790 MID$(REC$,O+1,L)=FNFILL$(VAL(MID$(REC$,O+1,L)),L):GOTO 810
800 LOCATE Y,X+J:COLOR 7,0:PRINT SPACE$(L-J+1);
810 '  (additional field validation would occur here)
820 INSF=0:NEXT I
830 '  (record REC$ is complete)
840 '------ BLANK DATA FIELDS TO PREPARE FOR NEXT RECORD ENTRY
850 COLOR 7,0
860 FOR I=2 TO N
870 L=FNB(LF$,I):IF L>127 THEN L=L-127
880 IF L<>0 THEN LOCATE FNB(Y$,I),FNB(X$,I):PRINT SPACE$(L);
890 NEXT I
900 GOTO 460
910 '------ ERROR MESSAGE
920 LOCATE 25,1:PRINT">>";:COLOR 16,7:PRINT P$;:COLOR 0,7:PRINT "<<";E$;:E=1:RETURN
930 DATA 5
940 DATA 01|01|20|0|NAME
950 DATA 03|01|20|0|ADDRESS
960 DATA 05|01|15|0|CITY
970 DATA 05|22|-2|0|STATE
980 DATA 05|31|05|1|ZIP
```

## RUBIC.BAS

```bas
1 CLS
10 PRINT "INSTRUCTIONS"
20 PRINT "WHEN YOU ARE ASKED FOR THE NUMBER OF MIXES, ENTER THE NUMBER OF"
30 PRINT "RANDOM FACE ROTATIONS YOU DESIRE" : PRINT
40 PRINT " WHEN YOU ARE ASKED FOR YOUR MOVE, ENTER THE DESIGNATION OF THE "
50 PRINT " FACE:  F=FRONT, B=BACK, L=LEFT, R=RIGHT,T=TOP, B=BOTTOM
60 PRINT" AND THE AMOUNT OF ROTATION, += CLOCKWIZE 1, -=COUNTERCLOCKWIZE 1"
70 PRINT "              2= 180 DEGREES"
80 PRINT " SEE THE ARTICLE IN KILOBAUD JANUARY 1982 PAGE 28"
90 PRINT " THIS VERSION WAS EXTENSIVELY CONVERTED TO RUN ON THE ibm"
100 PRINT "I CAN'T FIGURE WHY THEY USED SUCH A LARGE ARRAY TO STORE THE CUBE"
101 PRINT " LINE 730 PRINTS THE RANDOM MIX MOVES SO THAT YOU CAN "
102 PRINT " CHEAT AND SOLVE THE CUBE.  COMMENT THIS LINE OUT TO BE HONEST"
110 PRINT "PRESS ANY KEY TO CONTINUE"
120 B$=INKEY$:IF B$="" THEN GOTO 120
130 CLS
140 SCREEN 2
150 DRAW "BL120M-120,-20D60M+120,20U60M+120,-20D60M-120,20U20M-120,-20U20"
160 DRAW "M+120,20M+120,-20D20M-120,20D20M-40,-7U60M+120,-20M+40,+7M-120,-20"
170 DRAW "M-120,20D60M+40,+7U60M+120,-20M-40,-7M-40,+7M+120,+20D60M-40,+7U60"
180 DRAW "M-120,-20"
190 DRAW "BR360BD45"
200 DRAW "A2M-120,-20D60M+120,20U60M+120,-20D60M-120,20U20M-120,-20U20"
210 DRAW "M+120,20M+120,-20D20M-120,20D20M-40,-7U60M+120,-20M+40,+7M-120,-20"
220 DRAW "M-120,20D60M+40,+7U60M+120,-20M-40,-7M-40,+7M+120,+20D60M-40,+7U60"
230 DRAW "M-120,-20A0"
240 OP$="D6R5U6L5":YP$="F3E3G3D3":RP$="D6U6R5D3L5R3F4":WP$="D6E3F3U6"
250 BP$="D6R5U3L5R5U3L5":GP$="R5D1U1L5D6R5U2L1"
260 DIM OA%(5),YA%(5),RA%(5),WA%(5),BA%(5),GA%(5)
270 DRAW "BM1,1;XOP$;":GET(1,1)-(7,8),OA% :PUT(1,1),OA%
280 DRAW "BM1,1;XYP$;":GET(1,1)-(7,8),YA% :PUT(1,1),YA%
290 DRAW "BM1,1;XRP$;":GET(1,1)-(7,8),RA% :PUT(1,1),RA%
300 DRAW "BM1,1;XWP$;":GET(1,1)-(7,8),WA% :PUT(1,1),WA%
310 DRAW "BM1,1;XBP$;":GET(1,1)-(7,8),BA% :PUT(1,1),BA%
320 DRAW "BM1,1;XGP$;":GET(1,1)-(7,8),GA% :PUT(1,1),GA%
330 DATA 478,149,518,143,557,136,437,142,478,136,518,129,396,136,437,129,478
340 DATA 123
350 DATA 177,144,177,124,177,104,137,137,137,117,137,97,97,131,97,111,97,91
360 DATA 217,144,217,124,217,104,257,137,257,117,257,97,297,131,297,111,297,91
370 DATA 197,90,157,84,117,77,237,84,197,77,157,71,277,77,237,71,197,64
380 DATA 376,123,376,103,376,83,416,117,416,97,416,77,456,110,456,90,456,70
390 DATA 577,123,577,103,577,83,537,117,537,97,537,77,496,110,496,90,496,70
400 DIM R$(5,5,5),R1$(5,5,5),A$(5,5),B$(5,5),C$(5,5),D$(5,5)
410 LLL=0
420 FOR I=1 TO 5: FOR J=1 TO 5: FOR K=1 TO 5
430 R$(I,J,K)=""
440 NEXT K: NEXT J: NEXT I
450 FOR I=2 TO 4:FOR J=2 TO 4
460 R$(1,I,J)="R":R$(I,1,J)="W":R$(I,J,1)="G"
470 R$(5,I,J)="O":R$(I,5,J)="B":R$(I,J,5)="Y"
480 NEXT J: NEXT I
490 REM
500 REM MIX RUBIK'S CUB
510 REM
520 INPUT "INPUT NUMBER OF MIXES";N
530 Z$=""
540 FOR I=1 TO N
550 X%= INT(6*RND(1)):Y%= INT(3*RND(1))
560 IF X%<>0 THEN 580
570 X$="R":GOTO 670
580 IF X%<>1 THEN 600
590 X$="F": GOTO 670
600 IF X%<>2 THEN 620
610 X$="L": GOTO 670
620 IF X%<>3 THEN 640
630 X$="U": GOTO 670
640 IF X%<>4 THEN 660
650 X$="B": GOTO 670
660 X$="D"
670 IF Y%<>0 THEN 690
680 Y$="+": GOTO 720
690 IF Y%<>1 THEN 710
700 Y$="-": GOTO 720
710 Y$="2"
720 Z$=Z$+X$+Y$
730 PRINT Z$
740 NEXT I
750 GOSUB 920
760 GOSUB 2470
770 REM
780 REM CHANGE RUBIK'S CUBE
790 REM
800 LOCATE 1,1
810 PRINT "                         "
820 PRINT "                         "
830 LLL=1
840 LOCATE 1,1
850 INPUT "INPUT MOVE";Z$
860 GOSUB 920
870 GOSUB 2470
880 GOTO 800
890 REM
900 REM PERFORM MOVES
910 REM
920 'FOR I=1 TO 5: FOR J=1 TO 5: FOR K=1 TO 5
930 'R1$(I,J,K)=R$(I,J,K)
940 'NEXT K: NEXT J: NEXT I
950 IF Z$="" THEN RETURN
960 X$=MID$(Z$,1,1)
970 IF X$="S" THEN 2780
980 IF X$="M" THEN 1670
990 REM
1000 REM MOVE FACES
1010 REM
1020 Y$=MID$(Z$,2,1)
1030 IF X$<>"R" THEN 1130
1040 FOR I=1 TO 5:FOR J=1 TO 5
1050 A$(I,J)=R$(I,1,J):B$(I,J)=R$(I,2,J)
1060 NEXT J: NEXT I
1070 GOSUB 2140
1080 IF E=1 THEN 2090
1090 FOR I=1 TO 5: FOR J=1 TO 5
1100 R$(I,1,J)=A$(I,J):R$(I,2,J)=B$(I,J)
1110 NEXT J: NEXT I
1120 GOTO 1620
1130 IF X$<>"F" THEN 1230
1140 FOR I=1 TO 5: FOR J=1 TO 5
1150 A$(I,J)=R$(1,I,J):B$(I,J)=R$(2,I,J)
1160 NEXT J: NEXT I
1170 GOSUB 2220
1180 IF E=1 THEN 2090
1190 FOR I=1 TO 5: FOR J=1 TO 5
1200 R$(1,I,J)=A$(I,J): R$(2,I,J)=B$(I,J)
1210 NEXT J: NEXT I
1220 GOTO 1620
1230 IF X$<>"L" THEN 1330
1240 FOR I=1 TO 5:FOR J=1 TO 5
1250 A$(I,J)=R$(I,5,J):B$(I,J)=R$(I,4,J)
1260 NEXT J: NEXT I
1270 GOSUB 2220
1280 IF E=1 THEN 2090
1290 FOR I=1 TO 5: FOR J=1 TO 5
1300 R$(I,5,J)=A$(I,J): R$(I,4,J)=B$(I,J)
1310 NEXT J: NEXT I
1320 GOTO 1620
1330 IF X$<>"B" THEN 1430
1340 FOR I=1 TO 5: FOR J=1 TO 5
1350 A$(I,J)=R$(5,I,J): B$(I,J)=R$(4,I,J)
1360 NEXT J: NEXT I
1370 GOSUB 2140
1380 IF E=1 THEN 2090
1390 FOR I=1 TO 5: FOR J=1 TO 5
1400 R$(5,I,J)=A$(I,J): R$(4,I,J)=B$(I,J)
1410 NEXT J: NEXT I
1420 GOTO 1620
1430 IF X$<>"U" THEN 1530
1440 FOR I=1 TO 5: FOR J=1 TO 5
1450 A$(I,J)=R$(I,J,5): B$(I,J)=R$(I,J,4)
1460 NEXT J: NEXT I
1470 GOSUB 2140
1480 IF E=1 THEN 2090
1490 FOR I=1 TO 5: FOR J=1 TO 5
1500 R$(I,J,5)=A$(I,J): R$(I,J,4)=B$(I,J)
1510 NEXT J: NEXT I
1520 GOTO 1620
1530 IF X$<>"D" THEN 2090
1540 FOR I=1 TO 5: FOR J=1 TO 5
1550 A$(I,J)=R$(I,J,1):B$(I,J)=R$(I,J,2)
1560 NEXT J: NEXT I
1570 GOSUB 2220
1580 IF E=1 THEN 2090
1590 FOR I=1 TO 5: FOR J=1 TO 5
1600 R$(I,J,1)=A$(I,J):R$(I,J,2)=B$(I,J)
1610 NEXT J: NEXT I
1620 Z$=MID$(Z$,3)
1630 GOTO 950
1640 REM
1650 REM CHANGE VIEWING CORNERS
1660 REM
1670 X$=MID$(Z$,2,1):Y$=MID$(Z$,3,1)
1680 S$=MID$(Z$,4,1)
1690 IF S$<>"1" AND S$<>"2" AND S$<>"3" THEN 2090
1700 N=VAL(S$)
1710 IF X$<>"F" THEN 1960
1720 IF Y$<>"R" THEN 1840
1730 Z$=MID$(Z$,5)
1740 FOR K=1 TO N
1750 Z$="U-D+"+"Z$
1760 FOR I=1 TO 5: FOR J=1 TO 5
1770 A$(I,J)=R$(I,J,3)
1780 NEXT J: NEXT I
1790 FOR I=1 TO 5: FOR J=1 TO 5
1800 R$(6-J,I,3)=A$(I,J)
1810 NEXT J: NEXT I
1820 NEXT K
1830 GOTO 950
1840 IF Y$<>"U" THEN 2090
1850 Z$=MID$(Z$,5)
1860 FOR K=1 TO N
1870 Z$="R+L-"+Z$
1880 FOR I=1 TO 5: FOR J=1 TO 5
1890 A$(I,J)=R$(I,3,J)
1900 NEXT J: NEXT I
1910 FOR I=1 TO 5: FOR J=1 TO 5
1920 R$(J,3,6-I)=A$(I,J)
1930 NEXT J: NEXT I
1940 NEXT K
1950 GOTO 950
1960 IF X$<>"U" THEN 2090
1970 IF Y$<>"R" THEN 2090
1980 Z$=MID$(Z$,5)
1990 FOR K=1 TO N
2000 Z$="F+B-"+Z$
2010 FOR I=1 TO 5: FOR J=1 TO 5
2020 A$(I,J)=R$(3,I,J)
2030 NEXT J: NEXT I
2040 FOR I=1 TO 5: FOR J=1 TO 5
2050 R$(3,6-J,I)=A$(I,J)
2060 NEXT J: NEXT I
2070 NEXT K
2080 GOTO 950
2090 PRINT "INVALID MOVE, TRY AGAIN. "
2100 'FOR I=1 TO 5: FOR J=1 TO 5: FOR K=1 TO 5
2110 'R$(I,J,K)=R1$(I,J,K)
2120 'NEXT K: NEXT J: NEXT I
2130 RETURN
2140 E=0
2150 IF Y$<>"+" THEN 2170
2160 GOSUB 2370: RETURN
2170 IF Y$<>"-" THEN 2190
2180 GOSUB 2300: RETURN
2190 IF Y$<>"2" THEN 2210
2200 GOSUB 2300: GOSUB 2300: RETURN
2210 E=1: RETURN
2220 E=0
2230 IF Y$<>"+" THEN 2250
2240 GOSUB 2300: RETURN
2250 IF Y$<>"-" THEN 2270
2260 GOSUB 2370: RETURN
2270 IF Y$<>"2" THEN 2290
2280 GOSUB 2300: GOSUB 2300: RETURN
2290 E=1: RETURN
2300 FOR I=1 TO 5: FOR J=1 TO 5
2310 C$(I,J)=A$(I,J): D$(I,J)=B$(I,J)
2320 NEXT J: NEXT I
2330 FOR I=1 TO 5: FOR J=1 TO 5
2340 A$(6-J,I)=C$(I,J):B$(6-J,I)=D$(I,J)
2350 NEXT J: NEXT I
2360 RETURN
2370 FOR I=1 TO 5: FOR J=1 TO 5
2380 C$(I,J)=A$(I,J): D$(I,J)=B$(I,J)
2390 NEXT J: NEXT I
2400 FOR I=1 TO 5: FOR J=1 TO 5
2410 A$(J,6-I)=C$(I,J): B$(J,6-I)=D$(I,J)
2420 NEXT J: NEXT I
2430 RETURN
2440 REM
2450 REM PRINT RUBIK'S CUBE
2460 REM
2470 RESTORE 330
2480 FOR K=1 TO 5 STEP 4
2490 FOR I=2 TO 4: FOR J=2 TO 4
2500 READ POSA%,POSB%
2510 IF R$(I,J,K)="R" THEN PUT (POSA%,POSB%),RA% ,PSET
2520 IF R$(I,J,K)="Y" THEN PUT (POSA%,POSB%),YA% ,PSET
2530 IF R$(I,J,K)="G" THEN PUT (POSA%,POSB%),GA% ,PSET
2540 IF R$(I,J,K)="B" THEN PUT (POSA%,POSB%),BA% ,PSET
2550 IF R$(I,J,K)="W" THEN PUT (POSA%,POSB%),WA% ,PSET
2560 IF R$(I,J,K)="O" THEN PUT (POSA%,POSB%),OA% ,PSET
2570 NEXT J: NEXT I
2580 FOR I=2 TO 4: FOR J=2 TO 4
2590 READ POSA%,POSB%
2600 IF R$(K,I,J)="R" THEN PUT (POSA%,POSB%),RA% ,PSET
2610 IF R$(K,I,J)="Y" THEN PUT (POSA%,POSB%),YA% ,PSET
2620 IF R$(K,I,J)="G" THEN PUT (POSA%,POSB%),GA% ,PSET
2630 IF R$(K,I,J)="B" THEN PUT (POSA%,POSB%),BA% ,PSET
2640 IF R$(K,I,J)="W" THEN PUT (POSA%,POSB%),WA% ,PSET
2650 IF R$(K,I,J)="O" THEN PUT (POSA%,POSB%),OA% ,PSET
2660 NEXT J: NEXT I
2670 FOR I=2 TO 4: FOR J=2 TO 4
2680 READ POSA%,POSB%
2690 IF R$(I,K,J)="R" THEN PUT (POSA%,POSB%),RA% ,PSET
2700 IF R$(I,K,J)="Y" THEN PUT (POSA%,POSB%),YA% ,PSET
2710 IF R$(I,K,J)="G" THEN PUT (POSA%,POSB%),GA% ,PSET
2720 IF R$(I,K,J)="B" THEN PUT (POSA%,POSB%),BA% ,PSET
2730 IF R$(I,K,J)="W" THEN PUT (POSA%,POSB%),WA% ,PSET
2740 IF R$(I,K,J)="O" THEN PUT (POSA%,POSB%),OA%  ,PSET
2750 NEXT J: NEXT I
2760 NEXT K
2770 RETURN
2780 PRINT "THANK YOU FOR PLAYING. "
2790 END
```

## RUNOFF.BAS

```bas
10 REM  RUNOFF - A simple text formatter      February, 1982
20 REM
30 REM  COPYRIGHT 1982 John M. Nevison Associates, Concord, Mass.
32 REM  
34 REM  Timothy J. Stein
36 REM  John M. Nevison Associates
38 REM  Concord, Mass. 01742
40 REM  (617) 369 4214
42 REM
44 REM  Takes a text file and formats it for output to a line
46 REM  printer, screen, or another file. All lines starting with
48 REM  a period are considered formatting commands. The program
50 REM  recognizes these commands:
52 REM          .PAGE or .P             Force a new page
54 REM          .SPACING n or .S n      Set line spacing to n
56 REM          .LEFTMARGIN n or .LM n  Set left margin to column n
58 REM          .RIGHTMARGIN n or .RM n Set right margin to column n
60 REM          .JUSTIFY or .J          Fill lines to fit
62 REM          .NOJUSTIFY or .NJ       Don't bother
64 REM          .CENTER or .C           Center all lines
66 REM          .NOCENTER or .NC        Don't center any more
68 REM          .INCLUDE file or
70 REM            .I file               Read text from file specified
72 REM  
73 REM  A few notes:
74 REM  1. The program does not reassemble lines. If a line is longer
75 REM     than the distance from LM to RM it will be truncated.
76 REM     It will also not be justified or centered.
77 REM  2. The INCLUDE command cannot be nested. That is, an INCLUDED
78 REM     file cannot contain an INCLUDE command.
79 REM
80 REM  MAJOR VARIABLES:
81 REM          L$              The current line
82 REM          PAGE$           One page of lines
83 REM          V.xxx           Values used globally
84 REM          S.xxx           Switches used globally
85 REM
87 'PAGE
90 '------------------------------------------------------------------------
91 ' MAIN LOOP
92 '
93 ' 1. Set up initial values, get command names
94 ' 2. Get file names
95 ' 3. IF input file entered THEN
96 '      UNTIL eof seen on input file
97 '      1. Get a page of text
98 '      2. Send it out
99 ' 4. Close files and exit
100 '-----------------------------------------------------------------------
102 '
105 GOSUB 500                           'Initialize
110 GOSUB 2000                          'Get file names
120 IF INFILE$ = "" THEN 200
130   GOSUB 5000                        'Assemble a page
140   GOSUB 11000                       'Print it out
150   IF S.EOF = 0 THEN 130              'Until EOF
160 CLOSE
200 '
210 SYSTEM
390 'PAGE
400 '------------------------------------------------------------------------
500 'SUB: Initialize
510 '------------------------------------------------------------------------
515 '
520 DIM PAGE$(60)               'page of text
530 S.JUSTIFY = 0               'justify off
540 S.CENTER = 0                'center off
550 S.EOF = 0                   'not eof yet
560 S.PAGE = 0                  'not end of page yet
565 V.PAGE = 1                  'page number
567 V.INF = 1                   'current input file number
570 V.LM = 10                   'left margin value
580 V.RM = 70                   'right margin value
585 V.COL = V.RM - V.LM + 1     'current column width
590 V.SPACING = 1               'single spacing value
595 V.CC$ = "."                 'command character
597 V.PAGESIZE = 50             'page length
600 '
605 DATA 9 
606                             'number of commands (DIM if greater than 10)
610 DATA PAGE, P
620 DATA SPACING, S
630 DATA LEFTMARGIN, LM
640 DATA RIGHTMARGIN, RM
650 DATA JUSTIFY,J
660 DATA NOJUSTIFY, NJ
670 DATA CENTER, C
680 DATA NOCENTER, NC
685 DATA INCLUDE, I
690 '
700 READ NCMDS
710 FOR I = 1 TO NCMDS
720   READ CMD$(I), CMDA$(I)
730 NEXT I
740 '
750 RETURN
1900 'PAGE
1910 '-----------------------------------------------------------------------
1920 ' SUB: Get file names
1921 '      IN: none
1922 '     OUT: infile$ - input file name (null if none typed)
1930 '----------------------------------------------------------------------
1990 '
2000 CLS
2100 LOCATE 10,26
2110 INPUT "File: "; INFILE$
2120 IF INFILE$ = "" THEN 2410                'return
2130 ON ERROR GOTO 2160
2140 OPEN INFILE$ FOR INPUT AS #1
2150 GOTO 2220
2160 LOCATE 11,26
2170   IF ERR = 53 THEN 2200
2180      PRINT "File open error ";ERR
2190      GOTO 2210
2200   PRINT "No such file"
2210   RESUME 2100
2220 '
2225 V.INF = 1
2230 LOCATE 11,26
2240 INPUT "Output device: ";O$
2250 ON ERROR GOTO 2280
2260 OPEN O$ FOR OUTPUT AS #2
2270 GOTO 2310
2280   LOCATE 12,26
2290   PRINT "Illegal device, error ";ERR
2300   RESUME 2230
2310 '
2311 IF LEFT$(O$,3) <> "LPT" AND LEFT$(O$,3) <> "lpt" THEN 2318
2312    A$=CHR$(27)+"D"
2313    LPRINT A$;
2314    FOR I = 8 TO 64 STEP 8
2315      LPRINT CHR$(I);
2316    NEXT I
2317    PRINT #2,CHR$(0);
2318 '
2319 ON ERROR GOTO 0
2320 LOCATE 12,26
2330 PRINT "                              "
2410 RETURN
4900 'PAGE
4910 '-----------------------------------------------------------------------
5000 'SUB: Assemble a page
5001 '     IN: v.inf - input file number
5002 '    OUT: s.eof - if end of input file seen
5003 '         s.page - if .page command seen
5004 '         v.inf - changed if .include command seen
5005 '         linecount - number of lines this page
5006 '         page() - assembled page
5007 '-----------------------------------------------------------------------
5010 '
5020 LINECOUNT = 0
5030 GOSUB 5500                         'Get a good line
5040   IF S.EOF = 1 OR S.PAGE = 1 THEN 5100
5045     IF S.GOODLINE = 0 THEN 5070
5050       GOSUB 6000                    'Insert a line in the page
5060       IF LINECOUNT >= V.PAGESIZE THEN 5100
5070 GOTO 5030
5100 '
5110 RETURN
5400 'PAGE
5410 '-----------------------------------------------------------------------
5500 'SUB: Get a good line
5501 '     IN: v.inf - input file number
5502 '    OUT: l$ - line
5503 '         s.goodline - 0 if no text line, 1 if so
5504 '         v.inf - may have changed if .include seen
5505 '         s.eof - may be set if end of file seen
5507 '   NOTE: also processes commands seen; if .justify or .center are
5508 '         in effect, l$ is returned as justified or centered.
5509 '-----------------------------------------------------------------------
5510 '
5515 S.GOODLINE = 0
5520 IF EOF(V.INF) THEN 5585
5530   LINE INPUT #V.INF,L$
5540   LLEN = LEN(L$)
5550   IF LEFT$(L$,1) <> V.CC$ THEN 5560
5553     GOSUB 6500                     'Do command
5555     GOTO 5600
5560   IF S.JUSTIFY = 1 THEN GOSUB 8000 'Justify
5570   IF S.CENTER = 1 THEN GOSUB 8500  'Center line
5575   S.GOODLINE = 1
5580   GOTO 5600
5585 '
5587 IF V.INF = 1 THEN 5595
5589   CLOSE V.INF
5591   V.INF = 1
5593   GOTO 5520
5595 '
5597 S.EOF = 1
5600 '
5610 RETURN
5900 'PAGE
5910 '-----------------------------------------------------------------------
6000 'SUB: Insert a line
6001 '     IN: l$ - line to be inserted
6002 '         linecount - current number of lines this page
6003 '    OUT: page$() - page array
6004 '         linecount - modified to reflect line plus spacing
6005 '-----------------------------------------------------------------------
6010 '
6020 LINECOUNT = LINECOUNT + 1
6030 PAGE$(LINECOUNT) = LEFT$((SPACE$(V.LM-1) + L$),V.RM)
6040 IF V.SPACING <= 1 THEN 6100
6050   FOR I = 1 TO V.SPACING - 1
6060     LINECOUNT = LINECOUNT + 1
6070     PAGE$(LINECOUNT) = " "
6080   NEXT I
6100 '
6110 RETURN
6400 'PAGE
6410 '-----------------------------------------------------------------------
6500 'SUB: Do command
6501 '     IN: l$ - line with command on it (first char is ".")
6502 '    OUT: none
6503 '   NOTE: as side effect, the command is done
6504 '-----------------------------------------------------------------------
6510 '
6520 TPOS = 2
6530 GOSUB 9000                         'Get token
6540 IF TOKEN$ = "" THEN 6610
6550   FOR I = 1 TO NCMDS
6560     IF CMD$(I) = TOKEN$ THEN 6650
6570   NEXT I
6580   FOR I = 1 TO NCMDS
6590     IF CMDA$(I) = TOKEN$ THEN 6650
6600   NEXT I
6610   ERRX$ = "Illegal command <" + TOKEN$ + ">"
6620   GOSUB 10000                      'Print error
6630   GOTO 6690
6650 '
6660 ON I GOSUB 6700, 6800, 6900, 7000, 7100, 7200, 7300, 7400, 7500
6670 '
6690 RETURN
6695 'PAGE
6697 '-----------------------------------------------------------------------
6700 'SUB: page eject
6701 '-----------------------------------------------------------------------
6710 '
6720 S.PAGE = 1
6730 RETURN
6740 '
6790 '-----------------------------------------------------------------------
6800 'SUB: spacing
6801 '-----------------------------------------------------------------------
6810 '
6820 GOSUB 9300                         'Get value
6830 IF VALUE = -0.001 THEN VALUE = 1
6840   V.SPACING = VALUE
6850 RETURN
6860 '
6890 '-----------------------------------------------------------------------
6900 'SUB: left margin
6901 '-----------------------------------------------------------------------
6910 '
6920 GOSUB 9300
6930 IF VALUE = -0.001 THEN VALUE = 1
6940   IF V.RM > VALUE THEN 6947
6942      ERROR$ = "Left margin greater than right margin"
6944      GOSUB 10000
6946      GOTO 6950
6947   V.LM = VALUE
6948   V.COL = V.RM - V.LM + 1
6950 RETURN
6960 '
6990 '-----------------------------------------------------------------------
7000 'SUB: right margin
7001 '-----------------------------------------------------------------------
7010 '
7020 GOSUB 9300
7030 IF VALUE = -0.001 THEN VALUE = 1
7040   IF V.LM < VALUE THEN 7047
7042      ERROR$ = "Left margin greater than right margin"
7044      GOSUB 10000
7046      GOTO 7050
7047   V.RM = VALUE
7048   V.COL = V.RM - V.LM + 1
7050 RETURN
7060 '
7090 '-----------------------------------------------------------------------
7100 'SUB: justify
7101 '-----------------------------------------------------------------------
7110 '
7120 S.JUSTIFY = 1
7130 RETURN
7140 '
7190 '-----------------------------------------------------------------------
7200 'SUB: nojustify
7201 '-----------------------------------------------------------------------
7210 '
7220 S.JUSTIFY = 0
7230 RETURN
7240 '
7290 '-----------------------------------------------------------------------
7300 'SUB: center
7301 '-----------------------------------------------------------------------
7310 '
7320 S.CENTER = 1
7330 RETURN
7340 '
7390 '-----------------------------------------------------------------------
7400 'SUB: nocenter
7401 '-----------------------------------------------------------------------
7410 '
7420 S.CENTER = 0
7430 RETURN
7440 'PAGE
7490 '-----------------------------------------------------------------------
7500 'SUB: include
7501 '-----------------------------------------------------------------------
7510 '
7512 IF V.INF = 1 THEN 7520
7514   ERRX$ = "Cannot nest .include files"
7516   GOSUB 10000
7518   GOTO 7650
7520 GOSUB 9000                         'Get token
7530 ON ERROR GOTO 7560
7540 OPEN TOKEN$ FOR INPUT AS #3
7550   GOTO 7600
7560 ON ERROR GOTO 0
7570 ERRX$ = "Error opening .include file " + TOKEN$
7580 GOSUB 10000
7590 GOTO 7650
7600 '
7610 V.INF = 3
7620 '
7650 RETURN
7900 'PAGE
7910 '-----------------------------------------------------------------------
8000 'SUB: JUSTIFY
8001 '     IN: l$ - line to justify
8002 '         v.col - column width
8003 '    OUT: l$ - line justified
8004 '-----------------------------------------------------------------------
8010 '
8020 SCOUNT = 0
8030 FOR I = 1 TO LLEN
8040   IF MID$(L$,I,1) = " " THEN SCOUNT = SCOUNT + 1
8050 NEXT I
8060 IF SCOUNT = 0 THEN 8400
8070   LET SLOP = V.COL - LLEN
8080   IF SLOP <= 0 THEN 8400
8090   LET SSIZE = INT(SLOP/SCOUNT)
8100   LET SREM = SLOP - SSIZE * SCOUNT
8110   L2$ = L$
8120   L$ = ""
8130   FOR I = 1 TO LLEN
8140     X$ = MID$(L2$,I,1)
8150     L$ = L$ + X$
8160     IF X$ = " " THEN 8190
8180       GOTO 8300
8190     'else
8200       FOR J = 1 TO SSIZE
8210         L$ = L$ + " "
8230       NEXT J
8240       IF SREM <= 0 THEN 8300
8250         L$ = L$ + " "
8260         SREM = SREM - 1
8300   NEXT I
8310   LLEN = LEN(L$)
8320 '
8400 RETURN
8490 'PAGE
8495 '-----------------------------------------------------------------------
8500 'SUB: Center 
8501 '     IN: l$ - line to center
8502 '         v.col - column width
8503 '    OUT: l$ - line center
8504 '-----------------------------------------------------------------------
8510  '
8520 SLOP = V.COL - LLEN
8530 IF SLOP <= 0 THEN 8700
8540   L$ = SPACE$(SLOP/2) + L$
8550   LLEN = LEN(L$)
8560 '
8700 RETURN
8900 'PAGE
8910 '-----------------------------------------------------------------------
9000 'SUB: Get token
9001 '     IN: l$ - line in which to look for token
9002 '         tpos - character to start the search
9003 '         llen - length of line
9004 '    OUT: token$ - token found, or null if none
9005 '         tpos - moved to point to char after token
9007 '   NOTE: tokens delimited by spaces, leading spaces ignored, all
9008 '         alpha characters shift to upper case
9009 '-----------------------------------------------------------------------
9010 '
9020 TOKEN$ = ""
9030 FOR I = TPOS TO LLEN
9040   X$ = MID$(L$,I,1)
9050   IF X$ <> " " THEN 9080
9060 NEXT I
9070 GOTO 9250
9080 '
9090 FPOS = I
9100   FOR I = FPOS TO LLEN
9110     X$ = MID$(L$,I,1)
9120     IF X$ = " " THEN 9140
9130   NEXT I
9140 '
9150 TPOS = I + 1
9160 TOKEN$ = MID$(L$,FPOS,TPOS-FPOS-1)
9162 X = LEN(TOKEN$)
9164 FOR I = 1 TO X
9165   X$ = MID$(TOKEN$,I,1)
9166   IF X$ < "a" OR X$ > "z" THEN 9169
9167     X$ = CHR$(ASC(X$) - 32)
9168     MID$(TOKEN$,I,1) = X$
9169 NEXT I
9170 '
9250 RETURN
9290 'PAGE
9295 '-----------------------------------------------------------------------
9300 'SUB: get value
9301 '     IN: l$ - line to find value on
9302 '         tpos - place to start search
9303 '    OUT: value - numeric value of next token, or -.001 if none
9304 '         tpos - updated to point after token
9305 '-----------------------------------------------------------------------
9310 '
9320 GOSUB 9000                         'Get token
9330 ON ERROR GOTO 9400
9340   VALUE = VAL(TOKEN$)
9350   GOTO 9450
9400 RESUME 9410
9410 VALUE = -0.001
9420 '
9450 ON ERROR GOTO 0
9460 RETURN
9470 '
9900 'PAGE
9910 '-----------------------------------------------------------------------
10000 'SUB: print errors
10001 '----------------------------------------------------------------------
10010 '
10020 PRINT "ERROR: ";ERRX$;" in this line: "
10030 PRINT "   ";L$
10040 RETURN
11000 'SUB: print a page
11001 '     IN: page$() - page array
11002 '         linecount - number of lines assembled for this page
11003 '         v.page - current page number
11004 '    OUT: v.page - next page number
11005 '         s.page - reset to 0
11006 '----------------------------------------------------------------------
11010 '
11020 IF LINECOUNT > V.PAGESIZE THEN LINECOUNT = V.PAGESIZE
11030 FOR I = 1 TO LINECOUNT
11040   PRINT #2,PAGE$(I)
11050 NEXT I
11060 FOR I = 1 TO V.PAGESIZE - LINECOUNT + 4
11070   PRINT #2," "
11080 NEXT I
11090 PRINT #2,SPACE$((V.RM - 7)/2);"--";V.PAGE;"--"
11100 V.PAGE = V.PAGE + 1
11110 PRINT #2,CHR$(12)
11120 S.PAGE = 0
11130 RETURN
11140 END
11900 'PAGE
11910 '----------------------------------------------------------------------
```

## SERIAL.BAS

```bas
1 ' see  PC Magazine  Volume 1 Number 3  june/july 1982
10 REM program serial.  used to fakeout PC to allow use of serial printer in the                        same way the Print Screen function works for a parallel
20 '
30 ' It seems that in order for this program to run you must have the serial         cable connected to a printer or modem that is TURNED ON.  Otherwise the         open COMLINE$ in line 220 wont open.
40 '
50 ' Baud rates in line 220 can ONLY be 75, 110, 150, 300, 600, 1200, 1800, 2400     4800, or 9600
60 '
70 ' After running this program, you must exit to the system (DONT BOOT), then       re-enter BASIC for basic to recognize the new parameters.
80 '
90 'LLIST  and LPRINT  will work ;  and when you use the SYSTEM command to          return to DOS, Control PrtSc & up-shift PrtSc are enabled in PC-DOS rev 1.0     you could AUTOEXEC.BAT this routine ie..  1) DATE  2)BASIC SERIAL  3)BASIC
100 '
110 CLS:COLOR 0,7:PRINT TAB(32);"PROGRAM SERIAL";TAB(79):COLOR 7,0:LOCATE 3,1:      PRINT "Make sure your serial printer is connected to the Async RS-232 port":    PRINT "and the printer in turned on and `ON-LINE' ie. not in `local' mode"
115 REM
120 LOCATE 8,1:PRINT "Please enter the baud rate at which":PRINT "you wish to send data to the serial printer";TAB(79):PRINT SPC(79):PRINT "(baud rate can only be :  75,110,150,300,600,1200,1800,2400,4800,9600)";TAB(79);
130 LOCATE 9,50:LINE INPUT;"? ";BAUD$:BAUD$=LEFT$(BAUD$,4):IF BAUD$="" THEN BAUD!=300 :GOTO 200  ELSE BAUD!=VAL(BAUD$)
140 IF BAUD!=  75 OR BAUD!= 110 THEN 200
150 IF BAUD!= 150 OR BAUD!= 300 THEN 200
160 IF BAUD!= 600 OR BAUD!=1200 THEN 200
170 IF BAUD!=1800 OR BAUD!=2400 THEN 200
180 IF BAUD!=4800 OR BAUD!=9600 THEN 200
190 SOUND 45,12:GOTO 120  'illegal baud rate, re-enter
200 COMLINE$="COM1:"+STR$(BAUD!)+",N,8,1"
210 COMLINE$=LEFT$(COMLINE$,5)+MID$(COMLINE$,7)   ' to remove imbedded space                                                        after colen
220 OPEN COMLINE$ AS #1
230 WIDTH "com1:",80
240 DEF SEG=&H60
250 POKE &HD, &H40  'dos parallel printer vector change
260 POKE &HE, &H1
270 DEF SEG=&H40
280 POKE &H8, &HF8  'tell basic that there is a printer
290 POKE &H9, &H3
300 DEF SEG=&H0 : POKE &H100, &HFB  'restore the flages
310 REM an inconsistency exists in the rom bios concerning the meaning of the AH        register in the RS232 and the Parallel port subroutines therefore the           following line
320 POKE &H101, &HB4 : POKE &H102, &H1
330 REM  the next three lines simulate the printer port interrupt vector
340 POKE &H103, &HEA : POKE &H104, &H39
350 POKE &H105, &HE7 : POKE &H106, &H0
360 POKE &H107, &HF0
370 REM  now tell the interrupt handler to jump to  100H  for its new                    instruction sequence
380 POKE &H5C, &H0 : POKE &H5D, &H1
390 POKE &H5E, &H0 : POKE &H5F, &H0
400 CLS:BEEP:LOCATE 4,10:PRINT "The new parameters for serial printer operation  at";BAUD!;"baud":LOCATE,10:PRINT"have been set;": LOCATE 7,10:PRINT "Re-enter basic and use        up-shift PrtSc    in BASIC.":LOCATE 9,40:PRINT "up-shift or"
410 LOCATE ,40:PRINT"Control PrtSc     in PC-DOS":LOCATE ,61:PRINT "as required";:LOCATE 15,1
420 SYSTEM
4800 , OR 9600
```

## UPDLOAD.BAS

```bas
5  'UPDLOAD
10 'DTSS DUMB TERMINAL AND DOWN LOAD PROGRAM
20 ' Modified IMB dumb terminal example program; by Art Schneider Jan 16,82
22 '   File transfer program to & from IBM PC and DTSS Time Share computer
30 SCREEN 0,0
40 ' SEE PAGE F-4 IN BASIC BOOK  this program was modified for file transfer
50 '
60 '
70 KEY OFF : CLS: CLOSE
80 '
90 DEFINT A-Z
95 KEY 5,"old "                   'DTSS edit commands
97 KEY 7,"tex rep PRINT,"
99 KEY 8,"PRINT#FF/,,ALL"
100 KEY 10,"UNSAVE " : KEY 4,"tap"
101 KEY 9,"TEX REP &,+,ALL"
110 FALSE=0 : TRUE = NOT FALSE
112 K=0 : PUN$ = "PUN"+CHR$(13)
114 P$ = "ABCDE" :CR = FALSE : CTC$ = CHR$(3)
116 X1$ = "": AB$="ABORT" : DN=FALSE
120 XOFF$=CHR$(19) : XON$=CHR$(17)
130  NW$ = "tap" + CHR$(13)
132 COLOR 15,0 : PRINT TAB(15);"DTSS down load up load and dumb terminal program"
134 COLOR 7,0 : PRINT TAB(15);"to down load  have disk in drive.  "
136 PRINT TAB(15);"Connect with DTSS; call up file with OLD name.
138 PRINT TAB(15);"Start down load with PUN & then give disk:name" ; " <<<<"
140 PRINT TAB(15);"when asked. " : PRINT
141 PRINT TAB(15);"Start up-load with  tap  on key 4"; " <<<<"
142 PRINT TAB(15); "dial up & press return about 3 times"
144 M$=INKEY$
146 IF M$<> CHR$(13) THEN 144
160 OPEN "com1:300,E,7,1" AS #1
180 OPEN "scrn:" FOR OUTPUT AS 2
200 LOCATE ,,1
400 PAUSE =FALSE :ON ERROR GOTO 9000
450 KEY ON
500 'send keyboard input to com line
510 B$=INKEY$: IF B$<>"" THEN PRINT#1,B$;:PRINT #2,B$;:IF B$ = CHR$(13) THEN CR=TRUE: K=0
512 IF B$=CTC$ THEN PRINT #1, CHR$(0) 'break DTSS
515 IF CR=TRUE AND B$<>"" THEN P$=RIGHT$(P$+B$,4) : IF P$=PUN$ OR P$=NW$ THEN 1000 ELSE K=K+1 : IF K>=5 THEN K=0 : CR=FALSE
520 '
530 IF EOF(1) THEN 510
570 IF LOC(1)>128 THEN PAUSE=TRUE : PRINT #1,XOFF$;
590 C$= INPUT$(LOC(1),#1) :A$=""
600 ' x linefeed
620 FOR I = 1 TO LEN(C$)
630 A1$=MID$(C$,I,1) :AX=ASC(A1$) : IF AX <> 10 THEN A$=A$+A1$
640 NEXT I
650 PRINT #2,A$;: IF LOC(1)>0 THEN 570
690 IF PAUSE THEN PAUSE=FALSE : PRINT #1,XON$;
710 GOTO 510
990 'DOWN LOAD rutine here after  PUN  input
1000 'PUN doun load sub
1010 PRINT #1, XOFF$
1015 IF P$ = NW$ THEN 3000      'up-load sub
1020 COLOR 15,0
1030 INPUT "IBM   disk:File-Name.BAS  ";F$
1040 COLOR 7,0
1042 IF F$ =AB$ THEN PRINT #1,XON$ :GOTO 510
1050 OPEN F$ FOR OUTPUT AS #3
1060 PRINT #1,XON$
1101 PRINT "file open"
1200 IF LOC(1)>128 THEN PAUSE=TRUE : PRINT #1,XOFF$;
1300 A$ = INPUT$(LOC(1),#1) :C$=""
1400 FOR I = 1 TO LEN(A$)
1500 A1$ = MID$(A$,I,1) : AX = ASC(A1$)
1600 IF AX =13  THEN C$ = C$+A1$
1620 IF AX >31 AND AX<126  THEN C$ = C$+A1$
1650 IF AX =19 THEN DN =TRUE : GOTO 1800
1700 NEXT I
1800 PRINT#2,C$; : PRINT #3,C$; :IF DN THEN 2000   ELSE IF LOC(1) > 0 THEN 1200
1850 IF PAUSE THEN PAUSE=FALSE: PRINT #1, XON$;
1900 GOTO 1200
2000 IF NOT PAUSE THEN PRINT #1,XOFF$;
2100 CLOSE #3
2200 COLOR 15,0
2300 PRINT "File ";F$;" transfered"
2400 COLOR 7,0
2450 FOR JJ = 1 TO 5 : SOUND RND*1000 +37 ,6 : NEXT JJ
2500 P$ ="abcde" :CR=FALSE :DN=FALSE:K=0:PAUSE=FALSE :PRINT #1, XON$;: GOTO 510
3000 ' up load sub
3050 COLOR 15,0
3100 INPUT "Send IBM file.... d:name.ext";IBF$
3150 ON ERROR GOTO 5000
3200 IF IBF$ = AB$ THEN PRINT #1, XON$; : GOTO 510
3250 OPEN IBF$ FOR INPUT AS #3
3300 PRINT "File...."; IBF$; " open for transfer."
3350 PRINT #1, XON$; : COLOR 7,0
3360 ON ERROR GOTO 9000
3400 IF EOF(3) THEN 2000
3500 LINE INPUT #3,L$
3550 PRINT #1,L$  : PRINT #2,L$
3700 'send keyboard input to com line
3720 B$=INKEY$: IF B$<>"" THEN PRINT#1,B$;:PRINT #2,B$;
3740 IF B$=CTC$ THEN PRINT #1, CHR$(0) 'break DTSS
3760 IF EOF(1) THEN 3400
3780 IF LOC(1)>128 THEN PAUSE=TRUE : PRINT #1,XOFF$;
3800 C$= INPUT$(LOC(1),#1) :A$=""
3810 ' x linefeed
3820 FOR I = 1 TO LEN(C$)
3830 A1$=MID$(C$,I,1) :AX=ASC(A1$) : IF AX <> 10 THEN A$=A$+A1$
3840 NEXT I
3850 PRINT #2,A$;: IF LOC(1)>0 THEN 3780
3860 IF PAUSE THEN PAUSE=FALSE : PRINT #1,XON$;
3900 GOTO 3400
5000 IF ERR = 53 OR ERR = 64 THEN PRINT "I can`t open " IBF$ : RESUME 3100
5100 IF ERR = 68 OR ERR = 71 THEN PRINT "Check disk " : RESUME 3100
5200 ON ERROR GOTO 9000
9000 RESUME
9990 END
```

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0048

     Volume in drive A has no label
     Directory of A:\

    CRC      TXT      1310  11-09-84  10:06a
    CRCK4    COM      1536  10-21-82   7:54p
    DATAFIX  BAS      7168   1-01-80  12:33a
    EDIPAGE  BAS      1920   1-01-80   1:21a
    FF       BAT        20   9-10-82   9:41p
    FF       DOC       290   1-01-80   1:19a
    FF       TXT         2   9-10-82   9:40p
    FORTH    BAS      4096   1-01-80  12:35a
    GROWTH2  BAS      5376   7-13-82
    LOAN2    BAS      4992   7-13-82
    PCFORM   BAS      3840  11-01-82   9:49p
    QUADRIVE DOC      5868  10-13-82  10:07p
    RUBIC    BAS      8960   1-01-80   1:33a
    RUNOFF   BAS     14336   2-10-82
    RUNOFF   RNO     15616   2-09-82
    SERIAL   BAS      3328   1-01-80   1:42a
    UPDLOAD  BAS      4224   6-11-82
    XX       HED       128   7-05-83  10:54a
           18 file(s)      83010 bytes
                           73216 bytes free
