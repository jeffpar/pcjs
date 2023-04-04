---
layout: page
title: "PC-SIG Library Disk #143"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0143/
machines:
  - id: ibm5160
    type: pcx86
    config: /machines/pcx86/ibm/5160/cga/256kb/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk 0143"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5160" %}

{% comment %}info_begin{% endcomment %}

## Information about "PROGRAMERS UTILITIES #7"

    This disk contains many different kinds and flavors of utilities.  CMP
    compares files (either ASCII or binary) of different lengths and
    reports differences, good for archiving or updating text files. COPYFLD
    is a dBASE II tool to cut and paste from different dBASE files.  D and
    PC-ZAP both work on individual disk sectors, tracks, and sides for low
    level disk data manipulation and display.  RUSQ performs the inverse
    function of SQ, whichs squeezes files, but it does it in a different
    way than the public domain version of UNSQ, helpful if UNSQ doesnt
    work.  Lastly, SCRIPT is a XTALK utility used to set up a menu driven
    environment within XTALK.
    
    System Requirements:  Some programs require BASIC.
    
    How to Start: Enter PRINT *.DOC at the DOS prompt (A:), the
    instructions for running programs are in their respective text files.
    
    File Descriptions:
    
    COPYFLD  DOC  Documentation for COPYFLD.PRG
    COPYFLD  PRG  dBASE II program to copy fields from one file to another
    CMP      DOC  Documentation for CMP.COM
    CMP      COM  Intelligent file compare - works on binary files
    SCRIPT   DOC  A Crosstalk script for menu-driven operation
    RUSQ     EXE  Another (different) file unsqueezer - as last resort!
    PROJECTS DAT  Sample database for PROJECTS.BAS
    PROJECTS BAS  Home projects database manager
    PC-ZAP   DOC  Documentation for PC-ZAP.EXE
    D        EXE  Display selected disk sides/sectors/tracks
    PC-ZAP   EXE  Apply patches to disk(ette) - supports auto-patch files
    D        DOC  Documentation for D.EXE
    READ     ME   Listing of included files
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## PROJECTS.BAS

```bas

10 DIM P$(100),PRIORITY(100),HOURS(100),COST(100),CUMCOST(100),CUMHOURS(100)
20 CLS : OPEN "I",#1,"PROJECTS.DAT"
30 FOR I=1 TO 100 : INPUT #1,N,P$(N),PRIORITY(N),HOURS(N),COST(N),CUMCOST(N),CUMHOURS(N) : NEXT I : CLOSE #1
40 CLS:N=0:COLOR 13,0,0:LOCATE 1,29:PRINT "HOUSEHOLD PROJECTS DATA BASE"
50 COLOR 3,0,0 : LOCATE 3,37 : PRINT "M E N U" : COLOR 4,0,0
60  LOCATE 6,1 :PRINT "E      ENTER DATA"
70  LOCATE 10,1 :PRINT "D      DISPLAY DATA"
80  LOCATE 12,1 :PRINT "P      PRINT REPORT"
90  LOCATE  8,1 :PRINT "U      UPDATE DATA BASE"
100  LOCATE 14,1 :PRINT "S      SORT DATA BASE"
110  LOCATE 16,1 :PRINT "Q      EXIT TO BASIC MODE"
120  LOCATE 18,1 :PRINT "X      EXIT TO DOS"
130 LOCATE 21,1:COLOR 22,0,0:PRINT "E N T E R   C O M M A N D ":COLOR 2,0,0
140 LOCATE 4,60 :COLOR 9,0,0: PRINT DATE$
150 LOCATE 6,60:COLOR 6,0,0:PRINT TIME$:Z$=INKEY$:IF Z$ = "" THEN 150
160 COLOR 2,0,0:IF Z$ = "E" OR Z$ = "e" THEN 240
170 IF Z$ = "D" OR Z$ = "d" THEN 770
180 IF Z$ = "S" OR Z$ = "s" THEN 930
190 IF Z$ = "U" OR Z$ = "u" THEN 1090
200 IF Z$ = "P" OR Z$ = "p" THEN 1120
210 IF Z$ = "Q" OR Z$ = "q" THEN 1540
220 IF Z$ = "X" OR Z$ = "x" THEN 1530
230 PRINT "INVALID RESPONSE * PLEASE RETRY" : GOTO 140
240 CLS : N=0 : COLOR 13,0,0 : LOCATE 1,33 : PRINT "PROJECTS DATA BASE"
250 COLOR 12,0,0 : LOCATE 12,5 : PRINT "HIT ENTER KEY TO DISPLAY MENU"
260 COLOR 2,0,0 : LOCATE 4,1 : PRINT "PROJECT NUMBER"
270 PRINT "PROJECT"
280 PRINT "PRIORITY"
290 PRINT "ESTIMATED COST"
300 PRINT "ESTIMATED HOURS"
310 LOCATE 4,1:INPUT "PROJECT NUMBER ";N:IF N=0 THEN 750
320 FOR I=15 TO 23:LOCATE I,1:PRINT "                                   ":NEXT I
330 IF P$(N) = "" THEN 450
340 LOCATE 15,1 : COLOR 14,0,0 : PRINT "CURRENT CONTENTS OF INTERSECTION"
350 LOCATE 22,1 : COLOR 1,0,0 : PRINT "OPTIONS"
360 LOCATE 22,10 : COLOR 3,0,0 : PRINT "<RET> NO CHANGE TO CURRENT LINE"
370 LOCATE 23,10 : COLOR 3,0,0 : PRINT "  =   NO CHANGE TO THIS PROJECT"
380 LOCATE 24,10 : COLOR 3,0,0 : PRINT "  #   REMOVE THIS PROJECT";
390 LOCATE 17,15: PRINT "                                                     "
395 LOCATE 17,1 : COLOR 6,0,0
400 PRINT "PROJECT        ";P$(N)
410 PRINT "PRIORITY       ";PRIORITY(N)
420 PRINT "ESTIMATED COST ";COST(N)
430 PRINT "ESTIMATED HOURS";HOURS(N)
440 GOTO 460
450 LOCATE 19,1:COLOR 14,0,0:PRINT "CURRENT INTERSECTION EMPTY":COLOR 2,0,0
460 LOCATE 5,1 : COLOR 2,0,0 : X$=P$(N)
470 INPUT "PROJECT        ";P$(N)
480 LOCATE 23,10 : PRINT "                                               "
490 LOCATE 24,10 : PRINT "                                               ";
500 IF P$(N) <> "" THEN 550
510 P$(N)=X$
520 LOCATE 15,1 : COLOR 13,0,0  : PRINT "CURRENT PROJECT NAME NOT CHANGED" : COLOR 2,0,0
530 LOCATE 6,1 : COLOR 2,0,0
540 GOTO 630
550 IF P$(N) <> "=" THEN 590
560 P$(N)=X$
570 LOCATE 15,1 : COLOR 13,0,0  : PRINT "CURRENT INTERSECTION NOT CHANGED" : COLOR 2,0,0
580 GOTO 700
590 IF P$(N) <> "#" THEN 630
600 PRIORITY(N)=0 : COST(N)=0 : HOURS(N)=0 : P$(N)=""
610 LOCATE 15,1:COLOR 13,0,0:PRINT "CURRENT INTERSECTION REMOVED   ":COLOR 2,0,0
620 GOTO 700
630 HOLD=PRIORITY(N):LOCATE 6,1:COLOR 2,0,0:INPUT "PRIORITY       ";PRIORITY(N)
640 IF PRIORITY(N) = 0 THEN PRIORITY(N)=HOLD
650 HOLD=COST(N) : INPUT "ESTIMATED COST ";COST(N)
660 IF COST(N) = 0 THEN COST(N)=HOLD
670 HOLD=HOURS(N) : INPUT "ESTIMATED HOURS";HOURS(N)
680 IF HOURS(N) = 0 THEN HOURS(N)=HOLD
690 PRINT " "
700 I=4
710 LOCATE I,16 : PRINT "                                        "
720 I=I+1
730 IF I<9 THEN 710
740 GOTO 310
750 N=0 : CUMCOST(1)=COST(1) : CUMHOURS(1)=HOURS(1)
760 FOR I=2 TO 100:J=I-1:CUMCOST(I)=CUMCOST(J)+COST(I):CUMHOURS(I)=CUMHOURS(J)+HOURS(I):NEXT I:GOTO 40
770 CLS : COUNT=0
780 COLOR 9,0,0 : PRINT "  #  PRORITY  PROJECT                               HOURS     COST     CUM-COST" : COLOR 2,0,0
790 PRINT  " "
800 N=N+1 : COUNT=COUNT+1
810 PRINT USING "###     ";N;
820 PRINT USING "###   ";PRIORITY(N);
830 PRINT USING "\                                \";P$(N);
840 PRINT USING "######## ";HOURS(N);
850 PRINT USING "######.## ";COST(N);
860 PRINT USING "########.##";CUMCOST(N)
870 IF COUNT = 20 THEN 890
880 GOTO 800
890 COLOR 20,0,0 : PRINT "PRESS ANY KEY TO CONTINUE" : COLOR 2,0,0
900 A$=INKEY$: IF A$="" THEN 900
910 IF (CUMCOST(N) = CUMCOST(N+1)) AND (CUMHOURS(N) = CUMHOURS(N+1)) THEN 40
920 IF N < 100 THEN 770 ELSE 40
930 LOCATE 21,1 : COLOR 28,0,0 : PRINT "       S O R T I N G                  "
940 FOR I=1 TO 100
950 IF PRIORITY(I) = 0 THEN PRIORITY(I)=999
960 NEXT I
970 FOR ISORT=1 TO 99
980 LOCATE 4,60:COLOR 9,0,0:PRINT DATE$:LOCATE 6,60:COLOR 6,0,0:PRINT TIME$
990 FOR JSORT = ISORT TO 100
1000 IF PRIORITY(ISORT) <= PRIORITY(JSORT) THEN 1020
1010 SWAP P$(ISORT), P$(JSORT)       : SWAP PRIORITY(ISORT), PRIORITY(JSORT) :       SWAP HOURS(ISORT), HOURS(JSORT) : SWAP COST(ISORT), COST(JSORT)
1020 NEXT JSORT
1030 NEXT ISORT
1040 FOR I=1 TO 100
1050 IF PRIORITY(I) = 999 THEN PRIORITY(I) = 0 ELSE PRIORITY(I) = I
1060 NEXT I
1070 N=0 : CUMCOST(1)=COST(1) : CUMHOURS(1)=HOURS(1)
1080 FOR I=2 TO 100 : J=I-1 : CUMCOST(I)=CUMCOST(J)+COST(I) : CUMHOURS(I)=CUMHOURS(J)+HOURS(I) : NEXT I : GOTO 40
1090 LOCATE 21,1 : COLOR 22,0,0 : PRINT "F I L E   B E I N G   W R I T T E N   T O   D I S K" : COLOR 2,0,0 : OPEN "O",#2,"A:PROJECTS.DAT"
1100 FOR N=1 TO 100 : WRITE #2,N,P$(N),PRIORITY(N),HOURS(N),COST(N),CUMCOST(N),CUMHOURS(N) : NEXT N
1110 CLOSE #2 : GOTO 40
1120 COLOR 11,0,0:LOCATE 12,40:PRINT "P R I N T   O P T I O N S"
1130 LOCATE 14,40:PRINT "F     FORMAL REPORT"
1140 LOCATE 16,40:PRINT "W     WORK REPORT"
1150 LOCATE 18,40:PRINT "C     COMPRESSED WORK REPORT"
1160 LOCATE 21,1:COLOR 22,0,0:PRINT "E N T E R   P R I N T   O P T I O N   ":COLOR 2,0,0
1170 LOCATE 6,60:COLOR 6,0,0:PRINT TIME$:Z$=INKEY$: IF Z$="" THEN 1170
1180 IF Z$ = "F" OR Z$ = "f" THEN 1190 ELSE 1200
1190 LPRINT CHR$(27)"G" : LPRINT CHR$(27)"E" : GOTO 1220
1200 IF Z$ = "C" OR Z$ = "c" THEN 1210 ELSE 1220
1210 LPRINT CHR$(15)
1220 LOCATE 21,1:COLOR 28,0,0:PRINT "SET PRINTER AND PRESS ENTER KEY TO START"
1230 LOCATE 6,60:COLOR 6,0,0:PRINT TIME$:Z$=INKEY$: IF Z$="" THEN 1230
1240 LOCATE 21,1:COLOR 28,0,0:PRINT "P R I N T I N G   A T   P R I N T E R   "
1250 LOCATE 14,40:PRINT "                   "
1260 LOCATE 16,40:PRINT "                 "
1270 LOCATE 18,40:PRINT "                            "
1280 LOCATE 12,40:PRINT "                         "
1290 WIDTH "LPT1:",132:N=1
1300 LPRINT " "
1310 LPRINT CHR$(27)"W"CHR$(1) "                 HOUSEHOLD PROJECTS PRIORITY LIST" ; CHR$(27)"W"CHR$(0)
1320 LPRINT " "
1330 LPRINT " "
1340 LPRINT " "
1350 LPRINT "  JOB   PRIORITY    PROJECT                                                   HOURS    CUMHOURS         COST       CUMCOST"
1360 LPRINT "  ---   --------    -------------------------------------------------------   -----    --------        -----       -------"
1370 LPRINT " "
1380 FOR I=N TO N+49
1385 LOCATE 6,60:COLOR 6,0,0:PRINT TIME$
1390 LPRINT USING " ###    ";I;
1400 LPRINT USING "####        ";PRIORITY(I);
1410 LPRINT USING "\                                                   \";P$(I);
1420 LPRINT USING "##########  ";HOURS(I);
1430 LPRINT USING "##########  ";CUMHOURS(I);
1440 LPRINT USING "#########.## ";COST(I);
1450 LPRINT USING "#########.##";CUMCOST(I)
1460 NEXT I
1470 FOR J=1 TO 7
1480 LPRINT " "
1490 NEXT J
1500 IF (CUMCOST(50) = CUMCOST(51)) AND (CUMHOURS(50) = CUMHOURS(51)) THEN 1520
1510 IF N = 51 THEN 1520 ELSE N=51 : GOTO 1300
1520 LPRINT CHR$(27)"H"; CHR$(18); CHR$(27)"F" : WIDTH "LPT1:",80 : GOTO 40
1530 CLS : COLOR 2,0,0 : PRINT " EXITING TO DOS " : SYSTEM
1540 CLS : COLOR 2,0,0 : END




```

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0143

     Volume in drive A has no label
     Directory of A:\

    PC-ZAP   DOC    153728   3-29-84   6:00p
    PC-ZAP   EXE     42112   3-29-84   3:04p
    D        EXE      2560   4-09-84  11:15a
    D        DOC       896   4-09-84  11:14a
    SCRIPT   DOC     12672   3-09-84  10:28p
    PROJECTS BAS      7808   4-09-84  11:19a
    PROJECTS DAT      2944   4-09-84  11:19a
    COPYFLD  DOC      3712   4-09-84  11:22a
    COPYFLD  PRG      4480   4-09-84  11:22a
    CMP      COM      2176   4-08-84  11:45p
    CMP      DOC      7680   4-08-84  11:46p
    RUSQ     EXE     16512   4-09-84  12:18a
    READ     ME        955   4-09-84  11:41a
    CRC      TXT      1170  11-13-84   2:51p
    CRCK4    COM      1536  10-21-82   7:54p
           15 file(s)     260941 bytes
                           53248 bytes free
