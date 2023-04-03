---
layout: page
title: "PC-SIG Library Disk #4"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0004/
machines:
  - id: ibm5150
    type: pcx86
    config: /machines/pcx86/ibm/5150/cga/256kb/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk 0004"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5150" %}

{% comment %}info_begin{% endcomment %}

## Information about "DBMS/MODEM7"

    A communications and file transfer modem program adapted from CP/M, and
    an assortment of games.  The MODEM7 program includes communications and
    program transfer functions; it emulates a terminal, echoes data back to
    the sender, sends and receives CP/M files, and performs multi-file
    program transfers.
    
    System Requirements: Two disk drives; some programs require color.
    
    How to Start: Consult the .DOC files for documentation and directions.
    To run the BASIC programs follow the GETTING STARTED instructions for
    your configuration.  Programs suffixed .COM or .EXE run from DOS by
    typing <filename> <ENTER>.
    
    File Descriptions:
    
    MODEM7   COM  Communications & file transfer program adapted from CP/M.
    DUMP     BAS  Part of DBMS.
    DBMENU   BAS  Menu program for Data Base Management System (DBMS).
    METEOR   BAS  Arcade type game - eat goodies while dodging meteors.
    BACKUP   BAS  Part of DBMS.
    LOOKUP   BAS  Part of DBMS.
    CATCH88  BAS  Catch falling goodies - improve typing skills.
    MODEM7   DOC  Documentation file for MODEM7.COM.
    CREATE   BAS  Part of DBMS.
    INSERT   BAS  Part of DBMS.
    HANGMAN  BAS  Popular word guessing game.
    CHESS    EXE  Chess program (See Disk No 120 for a better version).
    SURVIVAL BAS  Adventure type game-survive a crash landing on the moon.
    SATURN   BAS  Graphics demo-the ringed planet with orbiting moon.
    SCREEN   BAS  Part of DBMS.
    ELIZA    BAS  Talk your problems out with ELIZA the psychotherapist.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## BACKUP.BAS

```bas
1  REM-------------------------------------------------------
2 REM
3 REM                    backup.BAS
4 REM      copy b-tree index file and master data file
5 REM         remove deleted items in the database
6 REM--------------------------------------------------------
7 CLS:KEY OFF
10 GOTO 1100          'branch to main program
20 REM ----------------SUROUTINES---------------------
30 REM
100 REM--------------------------------------------------
105 REM
110 REM                    READ.BAS
115 REM    INPUT A B-TREE NODE FROM DISK FILE #1
120 REM---------------------------------------------------
130 GET 1,P%:LSET REC$=R$
131 FOR INDEX%=1 TO N%
132    CH%=SIZE% *(INDEX%-1)
133    FLAG$=MID$(REC$,CH%+1,1)
134    IF FLAG$="E" THEN FLAG%(INDEX%)=0
135    IF FLAG$="F" THEN FLAG%(INDEX%)=1
136    IF FLAG$="D" THEN FLAG%(INDEX%)=2
137    KEYS$(INDEX%)=MID$(REC$,CH%+2,SIZE%-3)
138    ARC%(INDEX%)=CVI(MID$(REC$,CH%+SIZE%-1,2))
139  NEXT INDEX%
140 ARC%(N%+1)=CVI(MID$(REC$,126,2))
145 RETURN
150 REM-----------------------------------------------------
155 REM
160 REM                     WRITE.BAS
165 REM     OUTPUT A B-TREE NODE TO FILE #1
170 REM
175 REM-----------------------------------------------------
180 FOR INDEX%=1 TO N%
181   CH%=SIZE% *(INDEX%-1)
182   ON FLAG%(INDEX%)+1 GOTO 183,184,185
183    FLAG$="E":GOTO 186
184    FLAG$="F":GOTO 186
185    FLAG$="D"
186   MID$(REC$,CH%+1,1)=FLAG$
187   MID$(REC$,CH%+2,SIZE%-3)=KEYS$(INDEX%)
188   MID$(REC$,CH%+SIZE%-1,2)=MKI$(ARC%(INDEX%))
189 NEXT INDEX%
190 MID$(REC$,126,2)=MKI$(ARC%(N%+1))
195 LSET NR$=REC$:PUT G%,LNF%
199 RETURN
250 REM--------------------------------------
251 REM
252 REM               restore a b-tree node
253 REM--------------------------------------
260 FOR INDEX%=1 TO N%+1
262  FLAG%(INDEX%)=SFLAG%(INDEX%)
264  KEYS$(INDEX%)=SKEYS$(INDEX%)
266  ARC%(INDEX%)=SARC%(INDEX%)
268 NEXT INDEX%
270 RETURN
500 REM---------------------------------------------
501 REM
502 REM    search b-tree for left-most item, only
503 REM---------------------------------------------
510 PRINT:D$="Found": P0%=ROOT%
515 GOSUB 100          'read a node
520 IF ARC%(1)=0 THEN 525 ELSE 535
525   PRINT:LINE INPUT "File is empty. Strike RETURN ";Y$
530  PRINT:D$="Not found":RETURN
535 IF ARC%(1)<0 THEN 540 ELSE 545
540   ITEM%=1 :RETURN
545 P0%=ARC%(1)
550 GOTO 515
700 REM------------------------------------------
701 REM     read next sequential node
702 REM------------------------------------------
710 D$="":P0%=LINK%
720 IF P0%=0 THEN 725 ELSE 740
725   PRINT:D$="Done":RETURN
740 GOSUB 100:ITEM%=1:RETURN
750 REM----------------------------------------
751 REM   fill new index file node
752 REM-----------------------------------------
755 FOR NI%=NI% TO N%
760  SKEYS$(NI%)=ZERO$
765  SFLAG%(NI%)=0
770  SARC%(NI%)=0
775 NEXT NI%
780 IF D$="Done" THEN SARC%(N%+1)=0 ELSE SARC%(N%+1)=LNF%+1
795 RETURN
1000 REM------------------------------
1001 REM  finish up
1002 REM------------------------------
1005 REM
1015 CLOSE 1,2
1020 OPEN "O",2,"HEADER.DAT"
1025 PRINT #2,FSCREEN$;",";ROOT%;NPTR%-1;LNF%-1;AN%;LINS%;N%;SIZE%;
1030 PRINT #2,INDEX$;MAST$
1035 CLOSE 2
1040 RETURN
1100 REM--------------------------------------
1101 REM    COPY AND GARBAGE COLLECT
1102 REM--------------------------------------
1110 OPEN "I",2,"HEADER.DAT"
1115  INPUT #2,FSCREEN$,ROOT%,LNG%,LNF%,AN%,LINS%,N%,SIZE%,INDEX$,MAST$
1120 CLOSE 2
1125 N0%=N%+1:DIM FLAG%(N0%),KEYS$(N0%),ARC%(N0%)
1130          DIM SFLAG%(N0%),SKEYS$(N0%),SARC%(N0%)
1135 OPEN "R",1,INDEX$
1140 FIELD 1, 127 AS R$
1145 REC$=SPACE$(127):ZERO$=SPACE$(SIZE%-3):LSET ZERO$="0"
1150 OPEN "R",2,MAST$
1155   FIELD 2,127 AS MR$
1200 REM--------------------------------------------
1201 REM
1202 REM      NOW THAT THE FILES ARE OPEN, ETC.
1203 REM      CREATE BACKUP COPIES...
1204 REM--------------------------------------------
1270 LINE INPUT"Enter name of backup data file : ";NW$
1275 LINE INPUT"        Correct (Y/N) ?";Y$
1280 IF Y$<>"Y" AND Y$<>"y" THEN 1270
1290 LINE INPUT"Enter name of backup index file : ";OUTDEX$
1300 LINE INPUT"        Correct (Y/N) ?";Y$
1310 IF Y$<>"Y" AND Y$<>"y" THEN 1290
1320 PRINT"Busy working..."
1330 OPEN "R",3,OUTDEX$
1340 FIELD 3,127 AS NR$
1350 G%=3
1360 OPEN "R",4,NW$
1370  FIELD 4,127 AS RR$
1380 GOSUB 500
1390 IF D$="Not Found" THEN 1395 ELSE 1400
1395   CLOSE 1,2,3,4 :RUN "dbmenu"
1400 REM-----------------copy from old master to new--------------------
1470 NPTR%=1:LNF%=1:ITEM%=1
1480 REM ----------loop-------------------
1490  FOR NI%=1 TO N%-1
1492  IF ITEM%=N% THEN GOSUB 700
1496  IF D$="Done" THEN 1760
1500  MPTR%=-ARC%(ITEM%)
1505  IF MPTR%=0 THEN 1506 ELSE 1510
1506    ITEM%=ITEM%+1
1507    GOTO 1492
1510  IF FLAG%(ITEM%)=2 THEN 1506
1550  GET 2,MPTR%
1560  LSET RR$=MR$
1570  PUT 4,NPTR%
1580 REM----copy index info-------
1590  SKEYS$(NI%)=KEYS$(ITEM%)
1600  SFLAG%(NI%)=1
1610  SARC%(NI%)=-NPTR%
1630 REM-----update new master pointer
1650    NPTR%=NPTR%+1
1700 REM -----update old index info----------
1720    ITEM%=ITEM%+1
1750 NEXT NI%
1751 PRINT"Calm down, I'm still working on it..."
1755 IF (KEYS$(ITEM%)=ZERO$) AND (LINK%=0) THEN 1756 ELSE 1760
1756  D$="Done":SARC%(N%+1)=0
1760 GOSUB 750:GOSUB 250:GOSUB 150
1770 LNF%=LNF%+1
1780  IF D$="Done" THEN 1850 ELSE 1490
1850 REM------------------------------------------
1851 REM   close  files and redefine header file
1852 REM------------------------------------------
1880 CLOSE 1,2,3,4
1890 INDEX$=OUTDEX$
1900 MAST$=NW$
1910 PRINT"Data file re-organized. Now for the index file..."
1930 REM--------------do b-tree tier by tier--------------------
1950 P0%=1:ROOT%=LNF%
1960 OPEN "R",1,OUTDEX$
1965 G%=1:FIELD,1127 AS NR$
1980 REM---------------------find last key and move it up-----------------
2000 KOUNT%=1:D$=""
2010 FOR ITEM%=1 TO N%-1
2020  GOSUB 100:SFAG%(ITEM%)=1
2030  I%=0
2031   I%=I%+1
2032   SKEYS$(ITEM%)=KEYS$(N%-I%)
2033   IF KEYS$(N%-I%)=ZERO$ THEN 2031
2060  SARC%(ITEM%)=P0%
2070  P0%=LINK%
2080  IF P0%=0 THEN 2100
2090 NEXT ITEM%
2100 REM---------finish off node-------------------
2105 PRINT"You are being so patient..."
2130 IF P0%=0 THEN 2140 ELSE 2250
2140  D$="Done":NI%=ITEM%+1:GOSUB 750
2150  GOSUB 250:GOSUB 150
2155  P0%=ROOT%:ROOT%=LNG%+1:LNF%=ROOT%
2160 GOTO 2330
2200 REM---------------more still to come---------------------------
2250   KOUNT%=KOUNT%+1
2255   NI%=N%
2260   GOSUB 750:GOSUB 250:GOSUB 150
2270   LNF%=LNF%+1:GOTO 2010
2330 IF KOUNT%=1 THEN 2340 ELSE 2000
2340 PRINT"Done at last."
2390 ROOT%=ROOT%-1:GOSUB 1000
2400 RUN "dbmenu"
2500 END
```

## CATCH88.BAS

```bas
10 DEFINT A-Z
20 DIM RE(25), CE(25), MV(25), VM(10), MC(25), CM(10)
30 KEY OFF : SCREEN 0 : WIDTH 40 :CLS
40 F = 1
50 RANDOMIZE CVI(MID$(TIME$,7,2))
60 VM(1) = 1: VM(2) = 1: VM(3) = 1: VM(4) = 1: VM(5) = 2
70 VM(6) = 2: VM(7) = 2: VM(8) = 3: VM(9) = 3: VM(10) = 5
80 CM(1) = 25:CM(2) =25: CM(3) =25: CM(4) =25: CM(5)=157
90 CM(6) = 157: CM(7) =157: CM(8) = 15:CM(9)=15:CM(10) = 2
100 LOCATE 7,1
140 PRINT "        Press 4 for 40 columns"
150 PRINT "        Press 8 for 80 columns";:LOCATE ,,0
160 X$ = INKEY$
170 IF X$ = "4" THEN GOSUB 1230 : GOTO 200
180 IF X$ = "8" THEN GOSUB 1390 : GOTO 200
181 IF X$ = "Q" THEN CLS :END
185 IF X$ = "r" THEN GOSUB 3000
190 GOTO 160
200 X$ = INKEY$
210 IF X$ = "e" THEN MM=21 : LV=15 : SLV=2 : NE=25-2*F : GOTO 270
220 IF X$ = "m" THEN MM=21 : LV=10 : SLV=7 : NE=20-2*F : GOTO 270
230 IF X$ = "h" THEN MM=21 : LV=10 : SLV=10: NE=15-2*F : GOTO 270
240 IF X$ = "v" THEN MM=21 : LV=5  : SLV=15: NE=10-F : GOTO 270
250 IF X$ = "Q" THEN CLS : END
260 GOTO 200
270 CLS : LOCATE 12,28,0 : PRINT "G o o d   L u c k !";
275 HITS = 0: MISSES =0
280 FOR I = 1 TO 2000 : NEXT I
290 CLS
300 LOCATE 1,SC,0 :PRINT "SCORE 0";
310 LOCATE 1,RM,0 :PRINT "REMAINING ";MM
320 IF SIZE = 40 THEN 370
330 S$ = " 11223344556677889900qqwweerrttyyuuiiooppaassddffgghhjjkkll;;zzxxccvvbbnnmm,,.."
340 LOCATE 25,1,0 : PRINT S$;
350 LOCATE 24,1,0 :PRINT " ";:FOR I = 1 TO 39 :PRINT CHR$(223);CHR$(223); :NEXT
360 GOTO 400
370 S$ = "1234567890qwertyuiopasdfghjkl;zxcvbnm,."
380 LOCATE 25,1,0 : PRINT S$;
390 LOCATE 24,1,0 : FOR I = 1 TO 39 : PRINT CHR$(223); :NEXT
400 OLDPOS = 20 :NEWPOS = 20 : GOSUB 930
410 FOR N = 1 TO NE : GOSUB 1050 :NEXT
420 NP = 1
430 REM
440 RN = RE(NP) + 1 : CN = CE(NP)
450 IF RN < 23 THEN LOCATE RN-1,CN,0 : PRINT " "; :LOCATE RN,CN,0 : PRINT CHR$(MC(NP)); : RE(NP) = RN : GOTO 480
460 LOCATE 22,CN,0 : PRINT " "; : N = NP
470 IF (CN = NEWPOS) OR (CN = NEWPOS+1) THEN GOSUB 1100:GOSUB 1050 ELSE GOSUB 1020
480 X$ = INKEY$
490 IF X$ = "Q" THEN CLS :END
500 IF X$ ="1" THEN NEWPOS =1: GOSUB 930
510 IF X$ ="2" THEN NEWPOS =2: GOSUB 930
520 IF X$ ="3" THEN NEWPOS =3: GOSUB 930
530 IF X$ ="4" THEN NEWPOS =4: GOSUB 930
540 IF X$ ="5" THEN NEWPOS =5: GOSUB 930
550 IF X$ ="6" THEN NEWPOS =6: GOSUB 930
560 IF X$ ="7" THEN NEWPOS =7: GOSUB 930
570 IF X$ ="8" THEN NEWPOS =8: GOSUB 930
580 IF X$ ="9" THEN NEWPOS =9: GOSUB 930
590 IF X$ ="0" THEN NEWPOS =10: GOSUB 930
600 IF X$ ="q" THEN NEWPOS =11: GOSUB 930
610 IF X$ ="w" THEN NEWPOS =12: GOSUB 930
620 IF X$ ="e" THEN NEWPOS =13: GOSUB 930
630 IF X$ ="r" THEN NEWPOS =14: GOSUB 930
640 IF X$ ="t" THEN NEWPOS =15: GOSUB 930
650 IF X$ ="y" THEN NEWPOS =16: GOSUB 930
660 IF X$ ="u" THEN NEWPOS =17: GOSUB 930
670 IF X$ ="i" THEN NEWPOS =18: GOSUB 930
680 IF X$ ="o" THEN NEWPOS =19: GOSUB 930
690 IF X$ ="p" THEN NEWPOS =20: GOSUB 930
700 IF X$ ="a" THEN NEWPOS =21: GOSUB 930
710 IF X$ ="s" THEN NEWPOS =22: GOSUB 930
720 IF X$ ="d" THEN NEWPOS =23: GOSUB 930
730 IF X$ ="f" THEN NEWPOS =24: GOSUB 930
740 IF X$ ="g" THEN NEWPOS =25: GOSUB 930
750 IF X$ ="h" THEN NEWPOS =26: GOSUB 930
760 IF X$ ="j" THEN NEWPOS =27: GOSUB 930
770 IF X$ ="k" THEN NEWPOS =28: GOSUB 930
780 IF X$ ="l" THEN NEWPOS =29: GOSUB 930
790 IF X$ =";" THEN NEWPOS =30: GOSUB 930
800 IF X$ ="z" THEN NEWPOS =31: GOSUB 930
810 IF X$ ="x" THEN NEWPOS =32: GOSUB 930
820 IF X$ ="c" THEN NEWPOS =33: GOSUB 930
830 IF X$ ="v" THEN NEWPOS =34: GOSUB 930
840 IF X$ ="b" THEN NEWPOS =35: GOSUB 930
850 IF X$ ="n" THEN NEWPOS =36: GOSUB 930
860 IF X$ ="m" THEN NEWPOS =37: GOSUB 930
870 IF X$ ="," THEN NEWPOS =38: GOSUB 930
880 IF X$ ="." THEN NEWPOS =39: GOSUB 930
890 IF MISSES > MM THEN GOTO 1130
900 NP = NP + 1 : IF NP = NE THEN NP = 1
910 GOTO 430
920 REM
930 IF SIZE = 40 THEN 980
940 NEWPOS = 2*NEWPOS : LOCATE 23,OLDPOS,0:PRINT "  ";
950 LOCATE 23,NEWPOS,0:PRINT CHR$(211);CHR$(189);
960 OLDPOS = NEWPOS
970 RETURN
980 LOCATE 23,OLDPOS,0 :PRINT " ";
990 LOCATE 23,NEWPOS,0 :PRINT CHR$(127);
1000 OLDPOS = NEWPOS
1010 RETURN
1020 SOUND 15000,1 :SOUND 10000,1 :SOUND 5000,1
1030 MISSES = MISSES + 1
1040 LOCATE 1,RM+11,0 : PRINT MM-MISSES+1;
1050 RE(N) = RND*LV + SLV : CE(N) = RND*RPOS + RS
1060 MT = RND*9 + 1
1070 MV(N) = VM(MT) : MC(N) = CM(MT)
1080 LOCATE RE(N),CE(N),0 :PRINT CHR$(MC(N));
1090 RETURN
1100 SOUND 2000,1 : SOUND 1000,1
1110 HITS = HITS + MV(NP) : LOCATE 1,SC+6,0 : PRINT HITS;
1120 RETURN
1130 REM      levels of achievement
1140 IF HITS < F*10 THEN FOR I = 370 TO 300 STEP -3: SOUND I,1 :NEXT :GOTO 1210
1150 IF HITS < F*60 THEN FOR I = -8 TO 10 STEP 1 : SOUND 420 + I*ABS(I),1 :NEXT  :GOTO 1210
1160 IF HITS < F*100 THEN PLAY "o3cco2cc" :GOTO 1210
1170 IF HITS < F*150 THEN PLAY "o3msl4t210ceeemnl2c" :GOTO 1210
1180 IF HITS < F*200 THEN FOR I = 10000 TO 2700 STEP -53:SOUND I,1:NEXT I :GOTO 1210
1190 IF HITS < F*250 THEN PLAY "l2o4cdefgl4gggo5l1c":GOTO 1210
1200 IF HITS > F*250 THEN GOSUB 1620
1210 LOCATE 3,1,0 : INPUT "GAME OVER press return to continue ",X$
1215 IF SIZE = 40 THEN GOSUB 1230 ELSE GOSUB 1390
1220 GOTO 200
1230 WIDTH 40 : CLS :PRINT
1240 SIZE = 40 : RPOS = 38 : SC = 1: RM = 20 : RS = 1
1250 PRINT "                CATCH88" : PRINT
1260 PRINT "The object of the game is to catch 'em"
1270 PRINT "          before they fall."
1280 PRINT
1290 PRINT : PRINT "       ";CHR$(25);"  is worth 1 point."
1300 PRINT "       ";CHR$(157);"  is worth 2 points."
1310 PRINT "       ";CHR$(15);"  is worth 3 points."
1320 PRINT "       ";CHR$(2);"  is worth 5 points."
1330 PRINT : PRINT : PRINT "   A capital  Q  will stop the game."
1340 PRINT : PRINT
1350 PRINT "   Choose a suitable level of play :"
1360 PRINT :PRINT
1370 PRINT "e(asy  m(edium  h(ard  v(ery hard  Q(uit  ";
1380 RETURN
1390 WIDTH 80 : CLS : SIZE = 80 : RPOS = 77 : SC = 10 : RM = 50:RS = 2
1400 PRINT
1410 PRINT SPC(19) " [[[[  [[[  [[[[[  [[[[ [   [  [[[   [[[ "
1420 PRINT SPC(19) "[     [   [   [   [     [   [ [   [ [   ["
1430 PRINT SPC(19) "[     [   [   [   [     [   [ [   [ [   ["
1440 PRINT SPC(19) "[     [[[[[   [   [     [[[[[  [[[   [[[ "
1450 PRINT SPC(19) "[     [   [   [   [     [   [ [   [ [   ["
1460 PRINT SPC(19) "[     [   [   [   [     [   [ [   [ [   ["
1470 PRINT SPC(19) " [[[[ [   [   [    [[[[ [   [  [[[   [[[ "
1480 PRINT
1490 PRINT SPC(10) "The object of the game is to catch 'em before they fall."
1500 PRINT SPC(12) "Move the basket by pressing the correct letter key."
1510 PRINT
1520 PRINT : PRINT  SPC(29) CHR$(25);"  is worth 1 point."
1530 PRINT  SPC(29) CHR$(157);"  is worth 2 points."
1540 PRINT  SPC(29) CHR$(15);"  is worth 3 points."
1550 PRINT  SPC(29) CHR$(2);"  is worth 5 points."
1560 PRINT : PRINT : PRINT  SPC(24) "A capital  Q  will stop the game."
1570 PRINT
1580 PRINT SPC(24) "Choose a suitable level of play :"
1590 PRINT :PRINT SPC(19) "e(asy  m(edium  h(ard  v(ery hard   Q(uit";
1600 LOCATE 12,1,0
1610 RETURN
1620 CLS : PRINT :PRINT "     I really did'nt think anyone was"
1630 PRINT "that fast.  Rescaling ....":PRINT :PRINT:FOR I = 1 TO 2000:NEXT
1640 SOUND 37,180:FOR I = 1 TO 14000:NEXT:SOUND 37,0
1650 F = F*2 :PRINT "Next time you run this program,"
1660 PRINT "press the letter r before you"
1670 PRINT "enter a 4 or 8.  My very best luck."
1680 PRINT :PRINT "                           RKC"
1690 RETURN
3000 INPUT "Enter your factor number  ",F
3001 IF F > 5 THEN PRINT "Be reasonable !" : GOTO 3000
3002 RETURN
```

## CREATE.BAS

```bas
1 CLS:KEY OFF
2 REM  AN EXAMPLE OF HOW TO USE THIS DBMS FOLLOWS: TYPE "TEL" FOR INDEX FILE
3 REM   NAME: TYPE "TEL1" FOR SCREEN FORM FILE NAME (THIS LISTS THE FORMAT FOR
4 REM   YOUR DATA LISTINGS). TYPE "TEL2" FOR THE DATA FILE NAME (THIS LISTS THE
5 REM   ACTUAL DATA, I.E. ADDRESSES AND TELEPHONES).
100 REM--------------------------------------------------------
105 REM
110 REM                      CREATE.BAS
115 REM     Create a database from information about the files
120 REM
125 REM--------------------------------------------------------
130 GOTO 340
140 REM--------------------------------------------------------
145 REM   WRITE ( P%,FLAG%,KEYS$, ARC%, LINK% )
150 REM--------------------------------------------------------
170 REC$=SPACE$ (127)
180 FOR INDEX%=1 TO N%
190  CH%=SIZE% * (INDEX%-1)
200  ON FLAG% (INDEX%)+1 GOTO 210,230,250
210    FLAG$="E":GOTO 260
220    REM
230    FLAG%="F":GOTO 260
240    REM
250    FLAG%="D"
260  MID$(REC$,CH%+1,1)=FLAG$
270  MID$(REC$,CH%+2,SIZE%-3)=KEYS$(INDEX%)
280  MID$(REC$,CH%+SIZE%-1,2)=MKI$(ARC%(INDEX%))
290 NEXT INDEX%
300 MID$(REC$,126,2)=MKI$(LINK%)
310 LSET R$=REC$
320 PUT 1, P%
330 RETURN
340 REM----------------------------------------------------
350 REM   create: make header file for b-tree index
360 REM----------------------------------------------------
370 FOR I%=1 TO 10:PRINT:NEXT I%
380 PRINT"    Create Index File Header"
390 PRINT:PRINT:PRINT
395 LINE INPUT   "Enter index file name: " ;INDEX$
400 LINE INPUT   "      Correct (Y/N) ? ";Y$
410       IF Y$<>"Y" AND Y$<>"y" THEN 395
420 PRINT "How many characters per search key ";:INPUT SIZE%
430 LINE INPUT   "      Correct (Y/N) ? ";Y$
440       IF Y$<>"Y" AND Y$<>"y" THEN 420
450 LINE INPUT   "Enter the file name for the screen form : ";FSCREEN$
460 LINE INPUT   "      Correct (Y/N) ? ";Y$
470       IF Y$<>"Y" AND Y$<>"y" THEN 450
475 PRINT"How many screen lines in form";:INPUT LINS%
480 LINE INPUT   "      Correct (Y/N) ? ";Y$
485       IF Y$<>"Y" AND Y$<>"y" THEN 475
490 LINE INPUT   "Enter data file name : ";MAST$
495 LINE INPUT   "      Correct (Y/N) ? ";Y$
500       IF Y$<>"Y" AND Y$<>"y" THEN 490
505 PRINT"Enter number of fields in screen form : ";:INPUT AN%
510 LINE INPUT   "      Correct (Y/N) ? ";Y$
515       IF Y$<>"Y" AND Y$<>"y" THEN 505
520 REM-------------------------------------------------------
525 REM    write header file
530 REM-------------------------------------------------------
535 SIZE%=SIZE%+3
540 N%=INT(126/SIZE%)
545 OPEN "O",2, "HEADER.DAT"
550 ROOT%=1
555 LNF%=1:LNG%=0
560 P%=ROOT%
565 PRINT #2,FSCREEN$;",";ROOT%;LNG%;LNF%;AN%;LINS%;N%;SIZE%;INDEX$;",";MAST$
570 CLOSE 2
575 REM-------------------------------------------
580 REM   WRITE FIRST ROOT NODE
585 REM--------------------------------------------
590 DIM FLAG%(N%+1),KEYS$(N%+1),ARC%(N%+1)
595 ZERO$=SPACE$(SIZE%-3):LSET ZERO$="0"
600 FOR I0%=1 TO N%
605  KEYS$(I0%)=SPACE$(SIZE%-3)
610  FLAG%(I0%)=0:KEYS$(I0%)=ZERO$:ARC%(I0%)=0
615 NEXT I0%
620 LINK%=0
625 OPEN "R",1,INDEX$
630 FIELD 1, 127 AS R$
635 GOSUB 140
640 CLOSE 1
645 REM----------------------------------------------
650 REM    ALL DONE. RETURN TO DBMENU.BAS
655 REM-----------------------------------------------
660 RUN "DBMENU"
665 END
```

## DBMENU.BAS

```bas
10 CLS:KEY OFF
20 REM   DBMS CREATED BY T.G.Lewis (USING THE IBM PERSONAL COMPUTER)
21 REM        DBMS contains the following files:
22 REM             create.bas, insert.bas, lookup.bas
23 REM             backup.bas, screen.bas, dump.bas
24 REM       DBMS allows up to 127 fields
30 REM-------------------------------------
40 REM
50 REM               DBMENU.BAS
60 REM   Root program of the DBMS demo program
70 REM
80 REM-----------------------------------------
90 REM
100 NMAX%=7
110 FOR I%=1 TO 25:PRINT:NEXT I%
120 PRINT TAB(25) "DATABASE MANAGEMENT SYSTEM":PRINT:PRINT
121 PRINT" To create a totally new database system you must first use [1], then [5], then
122 PRINT" [2].":PRINT:PRINT
130 PRINT"     [ 1 ]. Create a database system."
140 PRINT"     [ 2 ]. Add new records."
150 PRINT"     [ 3 ]. Lookup or Modify existing records."
160 PRINT"     [ 4 ]. Backup file and index."
170 PRINT"     [ 5 ]. Build screen form ( for input )."
180 PRINT"     [ 6 ]. Quick dump index file."
190 PRINT"     [ 7 ]. Stop. Exit DBMS system."
200 PRINT:PRINT:PRINT:PRINT:PRINT"       Select one of the above: "; :INPUT N%
210 PRINT:PRINT:PRINT
220 IF N%>NMAX% OR N%<1 THEN 110
230 ON N% GOTO 240,250,260,270,280,290,300
240       RUN "CREATE"
250       RUN "INSERT"
260       RUN "LOOKUP"
270       RUN "BACKUP"
280       RUN "SCREEN"
290       RUN "DUMP"
300 END
```

## DUMP.BAS

```bas
1 CLS:KEY OFF
10 REM------------------------------------------------------
20 REM
30 REM                     DUMP.BAS
40 REM      Print contents of the entire b-tree
50 REM
60 REM-------------------------------------------------------
70 GOTO 270
80 REM-----------------------------------------------------
90 REM
100 REM                 read.bas
110 REM    input a b-tree node from disk file #1
120 REM
130 REM-----------------------------------------------------
140 GET 1, P%:LSET REC$=R$
150 FOR INDEX%=1 TO N%
160   CH%=SIZE% *(INDEX%-1)
170   FLAG$=MID$(REC$,CH%+1,1)
180   IF FLAG$="E" THEN FLAG%(INDEX%)=0
190   IF FLAG$="F" THEN FLAG%(INDEX%)=1
200   IF FLAG$="D" THEN FLAG%(INDEX%)=2
210  KEYS$(INDEX%)=MID$(REC$,CH%+2,SIZE%-3)
220  ARC%(INDEX%)=CVI(MID$(REC$,CH%+SIZE%-1,2))
230 NEXT INDEX%
240 ARC%(N%+1)=CVI(MID$(REC$,126,2))
250 RETURN
260 REM
270 REM------------------------------------------------
280 REM
290 REM            QUICK READ-OUT OF B-TREE INDEX FILE
300 REM------------------------------------------------
310 FOR I%=1 TO  5:PRINT:NEXT I%
320 OPEN "I",2, "HEADER.DAT"
330   INPUT #2, FSCREEN$,ROOT%,LNG%,LNF%,AN%,LINS%,N%,SIZE%,INDEX$,MAST$
340 CLOSE 2
350 N0%=N%+1:DIM FLAG%(N0%),KEYS$(N0%),ARC%(N0%)
360 OPEN "R",1, INDEX$
370 FIELD 1,127 AS R$
380 REC$=SPACE$(128):LSET ZERO$="0"
390 K$=SPACE$(SIZE%-3)
400 INPUT"Turn on printer, Strike RETURN :" ;Y$
410 LPRINT"Quick dump of B-tree index file: "
420 LPRINT:LPRINT
430 P%=0
440 FOR I1%=1 TO LNF%
450   P%=P%+1:GOSUB 80          'read a node
460   LPRINT"------------------------------- Node = ",P%,"-----------------"
470   FOR I%=1 TO N%
480     IF FLAG%(I%)=0 THEN C$="Empty"
490     IF FLAG%(I%)=1 THEN C$="Full"
500     IF FLAG%(I%)=2 THEN C$="Deleted"
510     LPRINT "Flag =";C$;
520     LPRINT " Key =";KEYS$(I%);
530     LPRINT " Arc ="; ARC%(I%)
540   NEXT I%
550   LPRINT "Link = ";ARC%(N0%)
560 NEXT I1%
570 CLOSE 1
580 REM-----------------------other stuff-------------------------------
590 LPRINT:LPRINT
600 LPRINT"Root node =",ROOT%
610 LPRINT"Number items indexed =",LNG%
620 LPRINT"Number of nodes(sectors)= ",LNF%
630 LPRINT"Number of fields per input form = ",AN%
640 LPRINT"Number of lines per input form  = ",LINS%
650 LPRINT"Number of items per node(sector)= ",N%
660 LPRINT"Size(chars) of each node item   = ",SIZE%
670 LPRINT"Name of master(data) file       = ",MAST$
680 LPRINT"Name of index file (b-tree)     = ",INDEX$
690 RUN "dbmenu"
700 END
```

## ELIZA.BAS

```bas
10 DIM S(36),R(36),N(36)
20 N1=36:N2=14:N3=112
30 RESTORE 2030
40 FOR X=1 TO N1
50 READ S(X),L:R(X)=S(X):N(X)=S(X)+L-1
60 NEXT X
70 CLS:PRINT "HI! I'M ELIZA. I AM YOUR PERSONAL THERAPY COMPUTER.  PLEASE TELL                ME YOUR PROBLEM. (PLEASE TYPE IN CAPITAL LETTERS)"
80 REM
90 REM       -----USER INPUT SECTION------
100 REM
110 INPUT I$
120 I$=" "+I$+" "
130 REM GET RID OF APOSTROPHES
140 FOR L=1 TO LEN(I$)
150 IF MID$(I$,L,1)="'" THEN I$=LEFT$(I$,L-1)+RIGHT$(I$,LEN(I$)-L):GOTO 150
160 IF L+4<=LEN(I$) THEN IF MID$(I$,L,4)="SHUT" THEN PRINT "SHUT UP...":END
170 NEXT L
180 IF I$=P$ THEN PRINT "PLEASE DON'T REPEAT YOURSELF!":GOTO 80
190 REM
200 REM    ------FIND KEYWORD IN I$------
210 REM
220 RESTORE
230 S=0
240 FOR K=1 TO N1
250 READ K$
260 IF S>0 THEN 300
270 L=INSTR(I$,K$)
280 IF L>0 THEN S=K:T=L:F$=K$
300 NEXT K
310 IF S>0 THEN K=S:L=T:GOTO 340
320 K=36:GOTO 600:REM   WE DIDN'FIND ANY KEYWORDS
330 REM
340 REM   TAKE RIGHT PART OF STRING AND CONJUGATE IT
350 REM   USING THE LIST OF STRINGS TO BE SWAPPED
360 REM
370 RESTORE 820
400 C$="  "+RIGHT$(I$,LEN(I$)-LEN(F$)-L+1)+" "
410 FOR X=1 TO N2/2
420 READ S$,R$
430 FOR L=1 TO LEN(C$)
440 IF L+LEN(S$)>LEN(C$) THEN 490
450 IF MID$(C$,L,LEN(S$))<>S$ THEN 490
460 C$=LEFT$(C$,L-1)+R$+RIGHT$(C$,LEN(C$)-L-LEN(S$)+1)
470 L=L+LEN(R$)
480 GOTO 530
490 IF L+LEN(R$)>LEN(C$) THEN 530
500 IF MID$(C$,L,LEN(R$))<>R$ THEN 530
510 C$=LEFT$(C$,L-1)+S$+RIGHT$(C$,LEN(C$)-L-LEN(R$)+1)
520 L=L+LEN(S$)
530 NEXT L
540 NEXT X
550 IF MID$(C$,2,1)="  "THEN C$=RIGHT$(C$,LEN(C$)-1)
560 FOR L=1 TO LEN(C$)
570 IF MID$(C$,L,1)="!" THEN C$=LEFT$(C$,L-1)+RIGHT$(C$,LEN(C$)-L):GOTO 570
580 NEXT L
590 REM
600 REM    NOW USING THE KEYWORD NUMBER (K) GET REPLY
610 REM
620 RESTORE 880
630 FOR X=1 TO R(K):READ F$: NEXT X
640 R(K)=R(K)+1: IF R(K)>N(K) THEN R(K)=S(K)
650 IF RIGHT$(F$, 1)<>"*" THEN PRINT F$:P$=I$:GOTO 80
660 PRINT LEFT$(F$,LEN(F$)-1);C$
670 P$=I$:GOTO  80
680 REM
690 REM    ------PROGRAM DATA FOLLOWS
700 REM
710 REM        KEYWORDS
720 REM
730 DATA "CAN YOY", "CAN I", "YOU ARE", "YOU'RE", "I DON'T", "I FEEL"
740 DATA "WHY DON'T YOU", "WHY CAN'T I", "ARE YOU", "I CAN'T", "I AM", "I'M"
750 DATA "YOU", "I WANT", "WHAT", "HOW", "WHO", "WHERE", "WHEN", "WHY"
760 DATA "NAME", "CAUSE", "SORRY", "DREAM", "HELLO", "HI", "MAYBE"
770 DATA "NO", "YOUR", "ALWAYS", "THINK", "ALIKE", "YES", "FRIEND"
780 DATA "COMPUTER", "NO KEY FOUND"
790 REM
800 REM      STRING DATA FOR CONJUGATIONS
810 REM
820 DATA " ARE ", " AM ", "WE'RE ", " WAS ", " YOU ", " I ", " YOUR ", " MY "
830 DATA " I'VE ", " YOU'VE ", " I'M ", " YOU'RE "
840 DATA " ME ", " !YOU "
850 REM
860 REM      REPLIES
870 REM
880 DATA "DON'T YOU BELIEVE THAT I CAN*"
890 DATA "PERHAPS YOU WOULD LIKE TO BE ABLE TO*"
900 DATA "YOU WANT ME TO BE ABLE TO*"
910 DATA "PERHAPS YOU DON'T WANT TO*"
920 DATA "DO YOU WANT TO BE ABLE TO*"
930 DATA "WHAT MAKES YOU THINK I AM*"
940 DATA "DOES IT PLEASE YOU TO BELIEVE I AM*"
950 DATA "PERHAPS YOU WOULD LIKE TO BE*"
960 DATA "DO YOU SOMETIMES WISH YOU WERE*"
970 DATA "DON'T YOU REALLY*"
980 DATA "WHY DON'T YOU*"
990 DATA "DO YOU WISH TO BE ABLE TO*"
1000 DATA "DOES THAT TROUBLE YOU?"
1010 DATA "TELL ME MORE ABOUT SUCH FEELINGS."
1020 DATA "DO YOU OFTEN FEEL*"
1030 DATA "DO YOU ENJOY FEELING*"
1040 DATA "DO YOU REALLY BELIEVE I DON'T*"
1050 DATA "PERHAPS IN GOOD TIME I WILL*"
1060 DATA "DO YOU WANT ME TO*"
1070 DATA "DO YOU THINK YOU SHOULD BE ABLE TO*"
1080 DATA "WHY CAN'T YOU*"
1090 DATA "WHY ARE YOU INTERESTED IN WHETHER OR NOT I AM*"
1100 DATA "WOULD YOU PREFER IF I WERE NOT*"
1110 DATA "PERHAPS IN YOUR FANTASIES I AM*"
1120 DATA "HOW DO YOU KNOW YOU CAN'T*"
1130 DATA "HAVE YOU TRIED?"
1140 DATA "PERHAPS YOU CAN NOW*"
1150 DATA "DID YOU COME TO ME BECAUSE YOU ARE*"
1160 DATA "HOW LONG HAVE YOU BEEN*"
1170 DATA "DO YOU BELIEVE IT IS NORMAL TO BE*"
1180 DATA "DO YOU ENJOY BEING*"
1190 DATA "WE WERE DISCUSSING YOU --NOT ME."
1200 DATA "OH, I*"
1210 DATA "YOU'RE NOT REALLY TALKING ABOUT ME, ARE YOU?"
1220 DATA "WHAT WOULD IT MEAN TO YOU IF YOU GOT*"
1230 DATA "WHY DO YOU WANT*"
1240 DATA "SUPPOSE YOU GOT*"
1250 DATA "WHAT IF YOU NEVER GOT*"
1260 DATA "I SOMETIMES ALSO WANT*"
1270 DATA "WHY DO YOU ASK?"
1280 DATA "DOES THAT QUESTION INTEREST YOU?"
1290 DATA "WHAT ANSWER WOULD PLEASE YOU THE MOST?"
1300 DATA "WHAT DO YOU THINK?"
1310 DATA "ARE SUCH QUESTIONS ON YOUR MIND OFTEN?"
1320 DATA "WHAT IS IT THAT YOU REALLY WANT TO KNOW?"
1330 DATA "HAVE YOU ASKED ANYONE ELSE?"
1340 DATA "HAVE YOU ASKED SUCH QUESTIONS BEFORE?"
1350 DATA "WHAT ELSE COMES TO MIND WHEN YOU ASK THAT?"
1360 DATA "NAMES DON'T INTEREST ME."
1370 DATA "I DON'T CARE ABOUT NAMES--PLEASE GO ON."
1380 DATA "IS THAT THE REAL REASON?"
1390 DATA "DON'T ANY OTHER REASONS COME TO MIND?"
1400 DATA "DOES THAT REASON EXPLAIN ANYTHING ELSE?"
1410 DATA "WHAT OTHER REASONS MIGHT THERE BE?"
1420 DATA "PLEASE DON'T APOLOGISE!"
1430 DATA "APOLOGIES ARE NOT NECESSARY."
1440 DATA "WHAT FEELINGS DO YOU HAVE WHEN YOU APOLOGISE?"
1450 DATA "DON'T BE SO DEFENSIVE!"
1460 DATA "WHAT DOES THAT DREAM SUGGEST TO YOU?"
1470 DATA "DO YOU DREAM OFTEN?"
1480 DATA "WHAT PERSONS APPEAR IN YOUR DREAMS?"
1490 DATA "ARE YOU DISTURBED BY YOUR DREAMS?"
1500 DATA "HOW DO YOU...PLEASE STATE YOUR PROBLEM."
1510 DATA "YOU DON'T SEEM QUITE CERTAIN."
1520 DATA "WHY THE UNCERTAIN TONE?"
1530 DATA "CAN'T YOU BE MORE POSITIVE?"
1540 DATA "YOU AREN'T SURE?"
1550 DATA "DON'T YOU KNOW?"
1560 DATA "ARE YOU SAYING NO JUST TO BE NEGATIVE?"
1570 DATA "YOU ARE BEING A BIT NEGATIVE."
1580 DATA "WHY NOT?"
1590 DATA "ARE YOU SURE?"
1600 DATA "WHY NO?"
1610 DATA "WHY ARE YOU CONCERNED ABOUT MY*"
1620 DATA "WHAT ABOUT YOUR OWN*"
1630 DATA "CAN YOU THINK OF A SPECIFIC EXAMPLE?"
1640 DATA "WHEN?"
1650 DATA "WHAT ARE YOU THINKING OF?"
1660 DATA "REALLY,ALWAYS?"
1670 DATA "DO YOU REALLY THINK SO?"
1680 DATA "BUT YOU ARE NOT SURE YOU*"
1690 DATA "DO YOU DOUBT YOU*"
1700 DATA "IN WHAT WAY?"
1710 DATA "WHAT RESEMBLENCE DO YOU SEE?"
1720 DATA "WHAT DOES THE SIMILARITY SUGGEST TO YOU?"
1730 DATA "WHAT OTHER CONNECTIONS DO YOU SEE?"
1740 DATA "COULD THERE REALLY BE SOME CONNECTION?"
1750 DATA "HOW?"
1760 DATA "YOU SEEM QUITE POSITIVE."
1770 DATA "ARE YOU SURE?"
1780 DATA "I SEE."
1790 DATA "I UNDERSTAND."
1800 DATA "WHY DO YOU BRING UP THE TOPIC OF FRIENDS?"
1810 DATA "DO YOUR FRIENDS WORRY YOU?"
1820 DATA "DO YOUR FRIENDS PICK ON YOU?"
1830 DATA "ARE YOU SURE YOU HAVE ANY FRIENDS?"
1840 DATA "DO YOU IMPOSE ON YOUR FRIENDS?"
1850 DATA "PERHAPS YOUR LOVE FOR FRIENDS WORRIES YOU."
1860 DATA "DO COMPUTERS WORRY YOU?"
1870 DATA "ARE YOU TALKING ABOUT ME IN PARTICULAR?"
1880 DATA "ARE YOU FRIGHTENED BY MACHINES?"
1890 DATA "WHY DO YOU MENTION COMPUTERS?"
1900 DATA "WHAT DO YOU THINK MACHINES HAVE TO DO WITH YOUR PROBLEMS?"
1910 DATA "DON'T YOU THINK COMPUTERS CAN HELP PEOPLE?"
1920 DATA "WHAT IS IT ABOUT MACHINES THAT WORRIES YOU?"
1930 DATA "SAY, DO YOU HAVE ANY PSYCHOLOGICAL PROBLEMS?"
1940 DATA "WHAT DOES THAT SUGGEST TO YOU?"
1950 DATA "I SEE."
1960 DATA "I'M NOT SURE I UNDERSTAND YOU FULLY."
1970 DATA "COME, COME, ELUCIDATE YOUR THOUGHTS."
1980 DATA "CAN YOU ELABORATE ON THAT?"
1990 DATA "THAT IS QUITE INTERESTING."
2000 REM
2010 REM     DATA FOR FINDING RIGHT REPLIES
2020 REM
2030 DATA 1,3,4,2,6,4,6,4,10,4,14,3,17,3,20,2,22,3,25,3
2040 DATA 28,4,28,4,32,3,35,5,40,9,40,9,40,9,40,9,40,9,40,9
2050 DATA 49,2,51,4,55,4,59,4,63,1,63,1,64,5,69,5,74,2,76,4
2060 DATA 80,3,83,7,90,3,93,6,99,7,106,6
```

## HANGMAN.BAS

```bas
1 DEF SEG=&H40:X=PEEK(&H17):X=X OR &H40:POKE &H17,X: 'Upper Case Letters
10 KEY OFF:CLS:WIDTH 40
12 LOCATE 7,1
14 PRINT "        Press 4 for 40 columns"
16 PRINT "        Press 8 for 80 columns";:LOCATE ,,0
18 X$ = INKEY$:IF X$<>"4" AND X$<>"8" THEN GOTO 18
20 IF X$ = "4" THEN GOTO 24
22 IF X$ = "8" THEN WIDTH 80
24 CLS:LOCATE 4,15,0:PRINT "HANGMAN"
25 LOCATE 6,5:PRINT"Original by CREATIVE COMPUTING"
26 LOCATE 8,1:PRINT"Modified for the IBM PC by Chris Jordan":PRINT:PRINT:PRINT
27 RANDOMIZE VAL(MID$(TIME$,7,2))
28 NUMWORDS%=66
30 DIM P$(13,12),L$(20),D$(20),N$(26),U(NUMWORDS%)
40 C=1:N=NUMWORDS%
42 LOCATE 23,7:COLOR 23,0:PRINT"Press SPACE BAR to continue.":COLOR 7,0:POKE 106,0
43 CMD$=INKEY$:IF CMD$<>" " THEN 43
45 LOCATE 23,7:COLOR 7,0:PRINT SPACE$(30);
50 FOR I=1 TO 20:D$(I)="-":NEXT I:M=0
60 FOR I=1 TO 26:N$(I)="":NEXT I
70 FOR I=1 TO 12:FOR J=1 TO 12:P$(I,J)=" ":NEXT J:NEXT I
80 FOR I=1 TO 13:P$(I,1)=CHR$(219):NEXT I
90 FOR I=1 TO 7:P$(1,I)=CHR$(220):NEXT:P$(2,7)=CHR$(179)
95 IF C<N THEN 100
97 PRINT "YOU DID ALL THE WORDS !!!":GOTO 999
100 Q=INT(N*RND(1))+1
110 IF U(Q)=1 THEN 100
115 U(Q)=1:C=C+1:RESTORE:T1=0
150 FOR I=1 TO Q:READ A$:NEXT I
160 L=LEN(A$):FOR I=1 TO LEN(A$):L$(I)=MID$(A$,I,1):NEXT I
170 CLS:LOCATE 3,1:PRINT "HERE ARE THE LETTERS YOU USED:"
180 FOR I=1 TO 26:PRINT N$(I);:IF N$(I+1)=""THEN 200
190 PRINT ",";:NEXT I
200 PRINT :PRINT :FOR I=1 TO L:PRINT D$(I);:NEXT I:PRINT :PRINT
210 INPUT "WHAT IS YOUR GUESS";G$:R=0
220 FOR I=1 TO 26:IF N$(I)=""THEN 250
230 IF G$=N$(I)THEN COLOR 23,0:PRINT :PRINT "YOU GUESSED THAT LETTER BEFORE !!":COLOR 7,0:FOR RR=1 TO 3000:NEXT RR:GOTO 170
240 NEXT I:PRINT "Program error. Run again.":STOP
250 N$(I)=G$:T1=T1+1
260 FOR I=1 TO L:IF L$(I)=G$ THEN 280
270 NEXT I:IF R=0 THEN 290
275 GOTO 300
280 D$(I)=G$:R=R+1:GOTO 270
290 M=M+1:GOTO 400
300 FOR I=1 TO L:IF D$(I)="-" THEN 320
310 NEXT I:GOTO 390
320 PRINT :FOR I=1 TO L:PRINT D$(I);:NEXT I:PRINT :PRINT
330 INPUT "WHAT IS YOUR GUESS FOR THE ** WORD ** ";B$
340 IF A$=B$ THEN 360
350 PRINT "WRONG. TRY ANOTHER LETTER.":PRINT :GOTO 170
360 PRINT :PRINT "RIGHT !!! IT TOOK YOU";T1;"GUESSES !!!"
370 PRINT :PRINT :INPUT "  WANT ANOTHER WORD ???";W$:IF W$="Y" OR W$="YES" THEN 50
380 CLS:LOCATE 10,10 :PRINT "IT'S BEEN FUN !    BYE FOR NOW.":GOTO 999
390 PRINT :PRINT "YOU FOUND THE WORD !!":GOTO 370
400 CLS:PRINT :PRINT "SORRY, THAT LETTER ISN'T IN THE WORD."
405 BEEP:FOR DELAY=1 TO 800:NEXT DELAY
410 ON M GOTO 415,420,425,430,435,440,445,450,455,460
415 PRINT "FIRST, WE DRAW A HEAD":PRINT:GOTO 470
420 PRINT "NOW WE DRAW A BODY.":PRINT:GOTO 470
425 PRINT "NEXT WE DRAW AN ARM.":PRINT:GOTO 470
430 PRINT "THIS TIME IT'S THE OTHER ARM.":PRINT:GOTO 470
435 PRINT "NOW, LET'S DRAW THE RIGHT LEG.":PRINT:GOTO 470
440 PRINT "THIS TIME WE DRAW THE LEFT LEG.":PRINT:GOTO 470
445 PRINT "NOW WE PUT UP A HAND.":PRINT:GOTO 470
450 PRINT "NEXT THE OTHER HAND.":PRINT:GOTO 470
455 PRINT "NOW WE DRAW ONE FOOT":PRINT:GOTO 470
460 PRINT "HERE'S THE OTHER FOOT -- YOU'RE HUNG !!!":SOUND 200,10:SOUND 80,10:PRINT
470 ON M GOTO 480,490,500,510,520,530,540,550,560,570
480 P$(3,6)=",":P$(3,7)=",":P$(3,8)=",":P$(4,5)="(":P$(4,6)="."
481 P$(4,8)=".":P$(4,9)=")":P$(5,6)=" ":P$(5,7)="-":P$(5,8)=" ":GOTO 580
490 FOR I=6 TO 9:P$(I,7)=":":NEXT I:GOTO 580
500 FOR I=4 TO 7:P$(I,I-1)="\":NEXT I:GOTO 580
510 P$(4,11)="/":P$(5,10)="/":P$(6,9)="/":P$(7,8)="/":GOTO 580
520 P$(10,6)="/":P$(11,5)="/":GOTO 580
530 P$(10,8)="\":P$(11,9)="\":GOTO 580
540 P$(3,11)="\":GOTO 580
550 P$(3,3)="/":GOTO 580
560 P$(12,10)="\":P$(12,11)="-":GOTO 580
570 P$(12,3)="-":P$(12,4)="/"
580 FOR I=1 TO 13:PRINT TAB(13);:FOR J=1 TO 12:PRINT P$(I,J);:NEXT J
590 PRINT :NEXT I
591 LOCATE 23,7:COLOR 23,0:PRINT"Strike any key to continue.":COLOR 7,0
594 IF INKEY$="" THEN 594
599 IF M<>10 THEN 170
600 CLS:LOCATE 10,1:PRINT "SORRY, YOU LOSE !!   THE WORD WAS ";A$:GOTO 370
700 DATA  "GUM","SIN","FOR","CRY","HID","BYE","FLY"
710 DATA  "DISK","HOST","WORK","TALK","DOWN","DRAW"
720 DATA  "GAMES","MODEM","INPUT","LEARN","RADIO","FAULT","ELBOW"
730 DATA  "BUDGET","ESCORT","QUAINT","PICKLE","FLOPPY","REMOVE","STICKY"
740 DATA  "UTILITY","INSTALL","TENSION","REPLICA","COMMAND","EXAMPLE","DISPLAY"
750 DATA  "INSTRUCT","SOFTWARE","COMPUTER","INFORMED","TERMINAL","PERSONAL"
760 DATA  "TECHNICAL","STRUCTURE","DELIVERED","IMPORTANT","PURCHASED","EXPANSION","TRANSMITTER"
770 DATA  "SIMULATION","MAGISTRATE","DICTIONARY","DOCUMENTED","PERIPHERAL","MAINTENANCE"
771 DATA  "INTERESTED","SUBROUTINE","PARAMETERS","TRANSMITTER","LOUDSPEAKER","INTEGRATOR"
772 DATA  "PARASYMPATHOMIMETIC"
780 DATA  "PROGRAMMING","INTRODUCTION","DOCUMENTATION","TRANSMITTED","SIMULATION","MAINTENANCE"
990 PRINT "BYE NOW"
999 END
```

## INSERT.BAS

```bas
10 REM------------------------------------------------------
20 REM
30 REM                   insert.bas
40 REM      Add to the contents of a data file thru its index
50 REM
60 REM-------------------------------------------------------
70 CLS:KEY OFF
80 S0%=20:DIM STACK%(S0%):GOTO 2220
90 REM
100 REM       Subroutines used:
110 REM         100,150:read, write a node of b-tree
120 REM         200,250:save, restore copy of b-tree node
130 REM         300,350,395:push, pop, init the stack
140 REM         400 :shift items in node for splitting node
150 REM         500: search down b-tree
160 REM         600: allocate more space for b-tree
170 REM         700: split b-tree node to root node
180 REM         800: overflow b-tree node to root node
190 REM         900: insert a new item into b-tree
200 REM        1000: close all files and finish up
210 REM
220 REM
230 REM
240 REM
250 REM-----------------------------------------------------------
260 REM
270 REM                          READ.BAS
280 REM      INPUT A B-TREE NODE FROM DISK FILE #1
290 REM------------------------------------------------------------
300 GET 1, P%:LSET REC$=R$
310 FOR INDEX%=1 TO N%
320   CH%=SIZE%*(INDEX%-1)
330   FLAG$=MID$(REC$,CH%+1,1)
340    IF FLAG$="E" THEN FLAG%(INDEX%)=0
350    IF FLAG$="F" THEN FLAG%(INDEX%)=1
360    IF FLAG$="D" THEN FLAG%(INDEX%)=2
370   KEYS$(INDEX%)=MID$(REC$,CH%+2,SIZE%-3)
380   ARC%(INDEX%)=CVI(MID$(REC$,CH%+SIZE%-1,2))
390 NEXT INDEX%
400 ARC%(N%+1)=CVI(MID$(REC$,126,2))
410 RETURN
420 REM------------------------------------------------------------
430 REM                      WRITE.BAS
440 REM     Output a b-tree node to file #1
450 REM-------------------------------------------------------------
460 REC$=STRING$(127, " " )
470 FOR INDEX%=1 TO N%
480   CH%=SIZE%*(INDEX%-1)
490   FLAG$=MID$(REC$,CH%+1,1)
500     FLAG$="E" :GOTO 530
510     FLAG$="F":GOTO 530
520     FLAG$="D"
530   MID$(REC$,CH%+1,1)=FLAG$
540   MID$(REC$,CH%+2,SIZE%-3)=KEYS$(INDEX%)
550   MID$(REC$,CH%+SIZE%-1,2)=MKI$(ARC%(INDEX%))
560 NEXT INDEX%
570 MID$(REC$,126,2)=MKI$(ARC%(N%+1))
580 LSET R$=REC$:PUT 1, P%
590 RETURN
600 REM-------------------------------------
610 REM       SAVE A B-TREE NODE
620 REM-------------------------------------
630 FOR INDEX%=1 TO N%+1
640     SFLAG%(INDEX%)=FLAG%(INDEX%)
650     SKEYS$(INDEX%)=KEYS$(INDEX%)
660     SARC%(INDEX%)=ARC%(INDEX%)
670 NEXT INDEX%
680 RETURN
690 REM------------------------------------------
700 REM       RESTORE A B-TREE NODE
710 REM------------------------------------------
720 FOR INDEX%=1 TO N%+1
730     FLAG%(INDEX%)=SFLAG%(INDEX%)
740     KEYS$(INDEX%)=SKEYS$(INDEX%)
750     ARC%(INDEX%)=SARC%(INDEX%)
760 NEXT INDEX%
770 RETURN
780 REM------------------------
790 REM       PUSH
800 REM------------------------
810 IF TS%<=S0% THEN 840
820    D$="Stack overflow"
830    RETURN
840 STACK%(TS%)=A%:TS%=TS%+1
850 D$= "" :RETURN
860 REM---------------------
870 REM     pop
880 REM----------------------
890 TS%=TS%-1
900 IF TS%>0 THEN 930
910    D$="Stack underflow"
920    RETURN
930 A%=STACK%(TS%)
940 D$= "" :RETURN
950 REM--------------------------
960 REM   Initialize stack
970 REM--------------------------
980 TS%=1:RETURN
990 REM--------------------------------
1000 REM   Shift b-tree node
1010 REM--------------------------------
1020 SPLIT%=INT((N%+1)/2)
1030 I%=1
1040 IF SPLIT%+I%<=N% THEN 1050 ELSE 1100
1050   ARC%(I%)=ARC%(SPLIT%+I%)
1060   KEYS$(I%)=KEYS$(SPLIT%+I%)
1070   FLAG%(I%)=FLAG%(SPLIT%+I%)
1080   I%=I%+1
1090   GOTO 1040
1100 ARC%(I%)=TEMP%
1110 KEYS$(I%)=ZERO$
1120 FLAG%(I%)=0
1130 REM---------------------------------------
1140 REM   Zero out remaining items in node
1150 REM---------------------------------------
1160 FOR I%=I%+1 TO N%
1170  ARC%(I%)=0
1180  KEYS$(I%)=ZERO$
1190  FLAG%(I%)=0
1200 NEXT I%
1210 GOSUB 1420   'allocate disk space at p2%
1220 SWAP P%,P2%
1230 GOSUB 420    'write right son to disk
1240 SWAP P%,P2%
1250 RETURN
1260 REM------------------------------------
1270 REM       search b-tree for k$
1280 REM-------------------------------------
1290 D$= ""                   'message
1300 GOSUB 950                'initialize stack
1310 P%=ROOT%
1320 REM repeat until found or not-in-file
1330  I%=1
1340  GOSUB 250
1350  IF KEYS$(I%)=ZERO$ THEN 1380
1360  IF KEYS$(I%)<K$ THEN 1370 ELSE 1380
1370     I%=I%+1:GOTO 1350
1380  A%=P%:GOSUB 780    'push node number
1390  A%=I%:GOSUB 780    'push item number
1400 P%=ARC%(I%):IF P%<=0 THEN RETURN
1410 GOTO 1320
1420 REM----------------------------------------------------
1430 REM    Allocate more disk space for b-tree
1440 REM----------------------------------------------------
1450 D$= "" :LNF%=LNF%+1
1460 P2%=LNF%
1470 RETURN
1480 REM------------------------------------------------------
1490 REM   Split a b-tree node into lf and rt nodes
1500 REM------------------------------------------------------
1510 GOSUB 600
1520 GOSUB 990
1530 GOSUB 690
1540 K$=KEYS$(SPLIT%)
1550 FOR I%=SPLIT%+1 TO N%
1560  KEYS$(I%)=ZERO$
1570  FLAG%(I%)=0
1580  ARC%(I%)=0
1590 NEXT I%
1600 ARC%(N%+1)=P2%
1610 GOSUB 420
1620 RETURN
1630 REM----------------------
1640 REM   Overflow
1650 REM----------------------
1660 GOSUB 1480:P0%=P%
1670 GOSUB 860:ITEM%=A%
1680 GOSUB 860:P%=A%
1690 IF D$="Stack underflow" THEN 1700 ELSE 1810
1700    FLAG%(1)=1:KEYS$(1)=K$:ARC%(1)=P0%
1710    FLAG%(2)=0:KEYS$(2)=ZERO$:ARC%(2)=P2%
1720    FOR I%=3 TO N%
1730        FLAG%(I%)=0
1740        KEYS$(I%)=ZERO$
1750        ARC%(I%)=0
1760   NEXT I%
1770   ARC%(N%+1)=0
1780 GOSUB 1420:P%=P2%
1790 GOSUB 420:ROOT%=P%
1800   D$="Done":RETURN
1810 REM--------------------------------
1820 GOSUB 250     'read parent node
1830 ARC%(ITEM%)=P2%
1840 D$="Not done"
1850 RETURN
1860 REM-----------------------------------------
1870 REM       Insert new item in b-tree
1880 REM-----------------------------------------
1890 GOSUB 1260    'SEARCH
1900 GOSUB 860:ITEM%=A%      'POP
1910 GOSUB 860:P%=A%        'POP
1920 IF K$=KEYS$(ITEM%) THEN 1930 ELSE 1960
1930   D$="Found":PRINT"Alreay indexed"
1940   LINE INPUT"Strike return to continue";Y$
1950   RETURN
1960 REM--------------------------------
1970 TEMP%=ARC%(N%)
1980 FOR I%=N% TO ITEM%+1 STEP (-1)
1990   ARC%(I%)=ARC%(I%-1)
2000   KEYS$(I%)=KEYS$(I%-1)
2010   FLAG%(I%)=FLAG%(I%-1)
2020 NEXT I%
2030 ARC%(ITEM%)=P0%
2040 KEYS$(ITEM%)=K$
2050 FLAG%(ITEM%)=1
2060 REM----------------------- Insert done ----------------------
2070 IF KEYS$(N%)=ZERO$ THEN 2080 ELSE 2090
2080   GOSUB 420:RETURN                    're-write node
2090 GOSUB 1630:IF D$<>"Done" THEN 1960      'ascend b-tree?
2100 RETURN
2110 REM----------------------------
2120 REM       Finish up
2130 REM-----------------------------
2140 FOR I%=1 TO 24
2150 PRINT
2160 NEXT I%        'clear screen
2170 CLOSE 1,2
2180 OPEN "o",2,"HEADER.DAT"
2190 PRINT #2,FSCREEN$;",";ROOT%;LNG%;LNF%;AN%;LINS%;N%;SIZE%;INDEX$;",";MAST$
2200 CLOSE 2
2210 RETURN
2220 REM--------------------------------------------
2230 REM Capture data from screen form
2240 REM--------------------------------------------
2241 PRINT :PRINT:PRINT "As each line of your screen form appears, type in the requested"
2242 PRINT " information.":PRINT:PRINT
2250 FOR I%=1 TO  3:PRINT:NEXT I%
2260 OPEN "I",2,"HEADER.DAT"
2270 INPUT #2,FSCREEN$,    ROOT%,LNG%,LNF%,AN%,LINS%,N%,SIZE%,INDEX$,    MAST$
2280 CLOSE 2
2290 N0%=N%+1:DIM FLAG%(N0%),KEYS$(N0%),ARC%(N0%)
2300          DIM SFLAG%(N0%),SKEYS$ (N0%),SARC%(N0%)
2310 OPEN "I",2,FSCREEN$
2320   FOR L%=1 TO LINS%:INPUT #2,RW$(L%):NEXT L%
2330 CLOSE 2
2340 OPEN "R",1,INDEX$
2350 FIELD 1,127 AS R$
2360 REC$=SPACE$(128):ZERO$=SPACE$(SIZE%-3):LSET ZERO$="0"
2370 K$=SPACE$(SIZE%-3)
2380 OPEN "R",2,MAST$
2390  FIELD 2, 127 AS MR$
2400 REM --------------------FORMS INPUT----------------------
2410 DIM AN$(AN%)             'ANSWERS IN AN$
2420 K%=0
2430 FOR L%=1 TO LINS%
2440   SRW$=RW$(L%)                    'SAVE FORM PROMPT
2450   PRINT USING "##";L%;:PRINT ".";
2460   IF INSTR(LEFT$(RW$(L%),1),"-")=1 THEN 2480
2470   IF INSTR(LEFT$(RW$(L%),1)," ")=0 THEN 2500
2480    RW$(L%)=RIGHT$(RW$(L%),LEN(RW$(L%))-1)
2490    GOTO 2460
2500    STAR%=INSTR(RW$(L%), "*")
2510    J%=INSTR(RW$(L%), ":")
2520    IF STAR%=0 THEN 2540
2530    IF STAR%<J% THEN 2590
2540    IF J%=0 THEN 2590
2550      PRINT "  ";LEFT$(RW$(L%),J%);
2560      K%=K%+1:RW$(L%)=RIGHT$(RW$(L%),LEN(RW$(L%))-J%)
2570      LINE INPUT AN$(K%)
2580      GOTO 2460
2590    J%=INSTR(RW$(L%), "*")
2600    IF J%=0 THEN 2680
2610      PRINT "  ";LEFT$(RW$(L%),J%);
2620      K%=K%+1:RW$(L%)=RIGHT$(RW$(L%),LEN(RW$(L%))-J%)
2630      LINE INPUT AN$(K%):K$= ""
2640    K$=LEFT$(AN$(K%),SIZE%-3)
2650    LNG%=LNG%+1:P0%=-LNG%
2660    PRINT "INDEXING BY ";K$
2670    GOSUB 1860:GOTO 2460             'INSERT K$,P0% INTO B-TREE
2680    RW$(L%)=SRW$
2690    IF D$="Found" THEN 2450              'try again
2700 NEXT L%
2710 TR$=STRING$(127, ":"):I1%=1
2720 FOR I%=1 TO AN%
2730   I2%=I1%+LEN(AN$(I%))-1
2740   MID$(TR$,I1%,I2%)=AN$(I%)
2750   I1%=I2%+2
2760 NEXT I%                       'pack answers into tr$
2770 LSET MR$=TR$
2780 PUT 2, LNG%                    'write random record
2790  PRINT"Inputs stored in file: ";MAST$
2800  REM--------------------DO IT AGAIN ?---------------------
2810 LINE INPUT"Do you want to enter more (Y/N) ? ";Y$
2820  IF Y$="Y" OR Y$="y" THEN 2420
2830 GOSUB 2110
2840 RUN"dbmenu"
2850 END
```

## LOOKUP.BAS

```bas
1  REM-------------------------------------------------------
2 REM
3 REM                    LOOKUP.BAS
4 REM      RETRIEVE/CHANGE INFORMATION IN DATABASE
5 REM
6 REM--------------------------------------------------------
7 CLS:KEY OFF
10 GOTO 1100
20 REM ----------------SUROUTINES---------------------
30 REM
100 REM--------------------------------------------------
105 REM
110 REM                    READ.BAS
115 REM    INPUT A B-TREE NODE FROM DISK FILE #1
120 REM---------------------------------------------------
130 GET 1,P%:LSET REC$=R$
131 FOR INDEX%=1 TO N%
132    CH%=SIZE% *(INDEX%-1)
133    FLAG$=MID$(REC$,CH%+1,1)
134    IF FLAG$="E" THEN FLAG%(INDEX%)=0
135    IF FLAG$="F" THEN FLAG%(INDEX%)=1
136    IF FLAG$="D" THEN FLAG%(INDEX%)=2
137    KEYS$(INDEX%)=MID$(REC$,CH%+2,SIZE%-3)
138    ARC%(INDEX%)=CVI(MID$(REC$,CH%+SIZE%-1,2))
139  NEXT INDEX%
140 ARC%(N%+1)=CVI(MID$(REC$,126,2))
145 RETURN
150 REM-----------------------------------------------------
155 REM
160 REM                     WRITE.BAS
165 REM     OUTPUT A B-TREE NODE TO FILE #1
170 REM
175 REM-----------------------------------------------------
177 REC$=STRING$( 127, " " )
180 FOR INDEX%=1 TO N%
181   CH%=SIZE% *(INDEX%-1)
182   ON FLAG%(INDEX%)+1 GOTO 183,184,185
183    FLAG$="E":GOTO 186
184    FLAG$="F":GOTO 186
185    FLAG$="D"
186   MID$(REC$,CH%+1,1)=FLAG$
187   MID$(REC$,CH%+2,SIZE%-3)=KEYS$(INDEX%)
188   MID$(REC$,CH%+SIZE%-1,2)=MKI$(ARC%(INDEX%))
189 NEXT INDEX%
190 MID$(REC$,126,2)=MKI$(ARC%(N%+1))
195 LSET R$=REC$:PUT 1,P%
199 RETURN
500 REM----------------------------------------
501 REM   SEARCH FOR K$ IN B-TREE
502 REM----------------------------------------
505 REM
515 P%=ROOT%:D$=""
520 REM -------------------REPEAT UNTIL FOUND OR NOT IN FILE-------------------
525    I%=1
530    GOSUB 100         'READ NODE
535    IF KEYS$(I%)=ZERO$ THEN 545
540    IF KEYS$(I%)<K$ THEN 542 ELSE 545
542      I%=I%+1:GOTO 535
545    A%=P%
550    ITEM%=I%
552    P%=ARC%(I%)
555 IF P%<=0 THEN 560 ELSE 520
560 IF KEYS$(ITEM%)<>K$ THEN 565
561 IF FLAG%(ITEM%)<>2 THEN 563
562   PRINT"Key deleted...cannot retrieve it.":GOTO 567
563 P%=A%:RETURN
565   PRINT"Key not found...cannot retrieve it."
567 D$="Not found"
570 RETURN
800 REM----------------------------------------------------
801 REM   get and unpack data file
802 REM------------------------------------------------------
805 REM
810 GET 2, -ARC%(ITEM%)
840 LSET TR$=MR$:I1%=1
850 FOR I%=1 TO AN%
855     I2%=INSTR(TR$, ":")
860     AN$(I%)=SPACE$(I2%-I1%)
870     LSET AN$(I%)=MID$(TR$,I1%,I2%-1)
880     MID$(TR$,I1%,I2%)=STRING$(I2%-I1%+1," ")
890     I1%=I2%+1
895 NEXT I%
899 RETURN
900 REM-----------------------------------------------------------
901 REM
902 REM          pack and re-write data file record
903 REM------------------------------------------------------------
920 TR$=STRING$( 127,":"):I1%=1
925  FOR I%=1 TO AN%
930    I2%=I1%+LEN(AN$(I%))-1
935    MID$(TR$,I1%,I2%)=AN$(I%)
940    I1%=I2%+2
945 NEXT I%
950 LSET MR$=TR$
955 PUT 2, -ARC%(ITEM%)
960 RETURN
1000 REM-------------------------
1001 REM      finish
1002 REM-------------------------
1010 CLOSE 1,2
1015 OPEN "O",2, "HEADER.DAT"
1020  PRINT #2,FSCREEN$;",";ROOT%;LNG%;LNF%;AN%;LINS%;N%;SIZE%;INDEX$;",";MAST$
1025 CLOSE 2
1030 RUN "DBMENU"              'BAIL OUT
1100 REM----------------------------------------------------
1101 REM        RETRIEVE DATA USING SCREEN FORM
1102 REM-----------------------------------------------------
1105 FOR I%=1 TO 10:PRINT:NEXT I%
1110 OPEN "I",2, "HEADER.DAT"
1115   INPUT #2,FSCREEN$,ROOT%,LNG%,LNF%,AN%,LINS%,N%,SIZE%,INDEX$,MAST$
1120 CLOSE 2
1125 N0%=N%+1:DIM FLAG%(N0%),KEYS$(N0%),ARC%(N0%)
1130          DIM SFLAG%(N0%),SKEYS$(N0%),SARC%(N0%)
1135 DIM AN$(AN%)
1137 OPEN "I",2,FSCREEN$
1140   FOR L%=1 TO LINS%:INPUT #2, RW$(L%):NEXT L%
1145 CLOSE 2
1150 OPEN "R", 1, INDEX$
1155 FIELD 1,127 AS R$
1160 REC$=SPACE$(127):ZERO$=SPACE$(SIZE%-3):LSET ZERO$="0"
1165 K$=SPACE$(SIZE%-3):TR$=SPACE$(128)
1170 OPEN "R",2,MAST$
1175  FIELD  2, 127 AS MR$
1180 PRINT:LINE INPUT "Enter search key value : ";KINP$:LSET K$=KINP$
1185 LINE INPUT "         Correct (Y/N) ? ";Y$
1190 IF Y$="y" OR Y$="Y" THEN 1192 ELSE 1180
1192 IF LEN(KINP$)=0 THEN 1000
1195 GOSUB 500
1196 IF D$<>"" THEN 1180
1197 GOSUB 800
1199 REM---------------------forms display---------------------------
1200 REM
1210 K%=0
1220 FOR I%=1 TO LINS%
1225  SRW$=RW$(I%)
1230  PRINT USING "##";I%;:PRINT ".";
1235  IF INSTR(LEFT$(RW$(I%),1),"-")=1 THEN 1237
1236  IF INSTR(LEFT$(RW$(I%),1)," ")=0 THEN 1240
1237   RW$(I%)=RIGHT$(RW$(I%),LEN(RW$(I%))-1)
1238    PRINT " ";:GOTO 1235
1240  J%=INSTR(RW$(I%),":")
1242  JSTAR%=INSTR(RW$(I%), "*")
1243   IF JSTAR%=0 THEN 1250
1245   IF JSTAR%<J% THEN 1300
1250  IF J%=0 THEN 1300
1260    PRINT LEFT$(RW$(I%),J%);
1270    K%=K%+1:RW$(I%)=MID$(RW$(I%),J%+LEN(AN$(K%))+1)
1280    PRINT AN$(K%);
1290    GOTO 1235
1300  J%=INSTR(RW$(I%),"*")
1310  IF J%=0 THEN 1340
1311  K%=K%+1:PRINT LEFT$(RW$(I%),J%);
1312  RW$(I%)=MID$(RW$(I%),J%+LEN(AN$(K%))+1)
1313   PRINT AN$(K%);
1338  GOTO 1235
1340  PRINT:RW$(I%)=SRW$
1345 NEXT I%
1400 REM--------------MODIFY, DELETE OR WHAT----------------------
1405 PRINT:PRINT
1410 PRINT:LINE INPUT"Enter  (M)=modify,  (L)=lookup,  (D)=delete, (E)=exit:";C$
1420 IF C$="E" OR C$="e" THEN 1000
1430 IF C$="D" OR C$="d" THEN 1450
1440 IF C$="M" OR C$="m" THEN 1500
1445 GOTO 1180
1450 REM------------------DELETE DATA-------------------
1455 LINE INPUT "Are you sure you want to delete this information ?";Y$
1460 IF Y$<>"Y" AND Y$<>"y" THEN 1410
1465 FLAG%(ITEM%)=2
1470 GOSUB 150         're-write b-tree node
1475 GOTO 1410
1500 REM-------------change an$------------------------
1505 Y$="N"
1510 PRINT:PRINT"Enter   (0)=quit, or the # of the field to change: ";:INPUT L%
1515 IF L%<= 0 OR L%>AN% THEN 1545
1520 PRINT:PRINT "Change ";AN$(L%); " to ";:INPUT C$
1525 LINE INPUT "Are you sure ?";Y$
1530 IF Y$<>"Y" AND Y$<>"y" THEN 1510
1535 AN$(L%)=C$
1540 GOTO 1510
1545 IF Y$="N" THEN 1410
1550 GOSUB 900:GOTO 1410      're-write data
1599 END
```

## METEOR.BAS

```bas
100 REM meteor, a character graphics arcade game
120 M$=CHR$(2):C$=CHR$(219):X$=CHR$(25):REM face, solid square, down arrow
130 C5$=C$+C$+C$+C$+C$:H$="":T=0:REM block, latch for face motion, score
140 Y=178:E1$=STRING$(1,Y):E3$=STRING$(3,Y):E6$=STRING$(6,Y):REM shading
145 CLS:KEY OFF:WIDTH 80:LOCATE 10,1
150 PRINT "Do you want directions (Y/N)?":R=523:REM random seed
160 R$=INKEY$:IF R$="Y" OR R$="y" THEN GOSUB 740:GOTO 180
170 IF R$="N" OR R$="n" OR R$=CHR$(13) THEN 180 ELSE R=(R+511)MOD 32003:GOTO 160
180 RANDOMIZE R:REM seed based on delay in ansering question
190 PRINT "How hard (1-9)?";
200 R$=INKEY$:C=ASC(R$+" "):IF C>48 AND C<58 THEN C=C-48:GOTO 220
210 IF C=13 THEN C=5 ELSE 200
220 HX=20+INT(40*RND+1):HY=16+INT(8*RND+1):REM position for face
230 CLS:LOCATE 25,1:COLOR 2:PRINT "METEOR! (Cursors move ";;:COLOR 3:PRINT M$;:COLOR 2:PRINT ")";
240 GOSUB 680:REM put targets, player marker
250 Y1=1:Y2=24:REM describe meteor path
260 X1=INT(RND*80+1):X2=INT(RND*80+1):REM each is inter 1-80
270 GOSUB 350:GOTO 260:REM plot meteor path, repeat
280 REM plot x$ at y,x checking for scores, face motion
290 K$=INKEY$:IF K$<>"" THEN H$=K$:REM h$ is latch
300 IF LEN(H$)>0 THEN GOSUB 500:REM key was struck
310 IF ABS(X-HX)<1 AND ABS(Y-HY)<1 THEN 400:REM face hit
320 IF SCREEN(Y,X)=219 THEN C2=-1:SOUND 660,2:GOSUB 620:REM target hit
330 IF Y=24 AND X=80 THEN X=79:REM writing 24,80 causes scrolling
340 LOCATE Y,X:COLOR 4:PRINT X$;:RETURN
350 REM draw a line from x1,y1 to x2,y2
360 S0=(X2-X1)/(Y2-Y1):S=X1-S0
370 FOR Y=Y1 TO Y2:S=S+S0:X=INT(0.5+S)
380 IF Y>HY+1 THEN RETURN:REM give up if below target
390 GOSUB 280:NEXT Y:RETURN
400 REM target is hit, position message
410 HX=HX-4:IF HX>72 THEN HX=72
420 IF HX<1 THEN HX=1
430 IF HY=24 THEN HY=23
440 SOUND 400,8:LOCATE HY,HX:COLOR 5:PRINT E1$;:COLOR 6:PRINT "BANG";:COLOR 5:PRINT E1$;:LOCATE HY+1,HX:PRINT E6$;
450 LOCATE 25,35:COLOR 2:PRINT "    DEL = FINISH,  INS = PLAY AGAIN          ";
460 H$=INKEY$:IF H$=CHR$(0)+CHR$(83) THEN CLS:KEY ON:END
470 IF H$=CHR$(0)+CHR$(83) THEN CLS:KEY ON:END
480 IF H$=CHR$(0)+CHR$(82) THEN CLS:RUN
490 GOTO 460
500 REM process keyboard request
510 IF H$=CHR$(32) THEN 630:REM pause on space bar
520 IF LEN(H$)=1 THEN H$="":RETURN
530 HH=ASC(RIGHT$(H$,1)):K$=H$:H$="":LOCATE HY,HX:PRINT " ";
540 IF HH=77 THEN HX=HX+1:H$=K$:IF HX>80 THEN HX=1
550 IF HH=75 THEN HX=HX-1:H$=K$:IF HX<1 THEN HX=80
560 IF HH=80 AND HY<24 THEN HY=HY+1:H$=K$
570 IF HH=72 AND HY>1 THEN HY=HY-1:H$=K$
580 IF HH=80 AND HY=24 THEN HY=23
590 IF SCREEN(HY,HX)=219 THEN SOUND 440,1:C2=10:GOSUB 620
600 IF SCREEN(HY,HX)=25 THEN SOUND 420,1:C2=2:GOSUB 620
610 LOCATE HY,HX:COLOR 3:PRINT M$;:RETURN
620 T=T+C2:LOCATE 25,27:COLOR 1:PRINT T;:RETURN:REM score points
630 LOCATE 25,35:COLOR 2:PRINT "KEYS:  INS=CONTINUE, DEL=STOP, ENTER=RESTORE ";
640 H$=INKEY$:IF H$=CHR$(0)+CHR$(82) THEN 720
650 IF H$=CHR$(13) THEN 680
660 IF H$=CHR$(0)+CHR$(83) THEN CLS:KEY ON:END
670 GOTO 640
680 REM put targets and face on screen
690 FOR I=12-C TO 24-C
700 LOCATE I,15:COLOR 7:PRINT C5$;:LOCATE I,35:PRINT C5$;:LOCATE I,55:PRINT C5$;
710 NEXT I:LOCATE HY,HX:COLOR 3:PRINT M$;
720 LOCATE 25,35:COLOR 2:PRINT "     Hit space bar to pause                  ";
730 RETURN
740 REM directions
750 CLS:PRINT :PRINT TAB(35);"METEOR":PRINT :PRINT
760 PRINT "A simple arcade game using character graphics."
770 PRINT :PRINT "The cursor control keys start the ";:COLOR 3:PRINT M$;:COLOR 1:PRINT " symbol moving."
780 PRINT "The space bar stops all action temporarily, and allows ";
790 PRINT "restoring targets."
800 PRINT "Any letter (and some other keys) will stop cursor motion."
810 PRINT :PRINT "See if you can erase the solid blocks before a falling ";
820 PRINT "meteor hits you."
830 PRINT "Each ";:COLOR 7:PRINT C$;:COLOR 1:PRINT " you erase scores 10 points, each ";:COLOR 4:PRINT X$;:COLOR 1:PRINT " 2 points."
840 PRINT "You lose 1 point for each ";:COLOR 7:PRINT C$;:COLOR 1:PRINT " a meteor hits."
850 PRINT :PRINT "To hit you, a meteor needs to get within the shaded area.";
860 PRINT :COLOR 6:PRINT  TAB(37);E3$:PRINT TAB(37);E1$;:COLOR 3:PRINT M$;:COLOR 6:PRINT E1$
870 PRINT TAB(37);E3$:PRINT:COLOR 1
880 PRINT "Some extra instructions will be on the bottom line.":PRINT :RETURN
```

## SATURN.BAS

```bas
10 CLS
20 SCREEN 1:KEY OFF
30 OUT 980,2 : OUT 981,43
40 FOR E=1 TO 600:PSET ((RND*320),RND*200),1
50 NEXT E
60 LOCATE 15,1
70 CIRCLE (160,100),60,1
80 PAINT (160,51),1,1
90 FOR R=100 TO 155 STEP 1
100 C=(R-99)/13
110 CIRCLE(160,100),R,C,2.2-(R-100)/174,6.28,1/4
120 CIRCLE (160,100),R,C,0,1+(R-100)/170-0.05,1/4
130 NEXT R
140 DIM B(5000):GET (0,50)-(319,150),B
145 LINE (0,0)-(30,30),0,BF
150 CIRCLE (20,20),10,1
160 PAINT (20,20),3,1
170 DIM A(40)
180 CIRCLE (300,10),7,2:PAINT (300,10),2,2
190 GET (9,9)-(30,30),A
200 CIRCLE (20,20),10,0
210 FOR T=1 TO 295  STEP 3
220 PUT (X,Y),A,>=:FOR U=1 TO 25:NEXT U
230 Q=X:W=Y
240 X=T:Y=50-SIN(T/96)*32
250 PUT (Q,W),A,>=
260 NEXT T
270 FOR T=1 TO 2500:NEXT T
280 FOR T=295 TO 1 STEP -3
290 PUT (X,Y),A,>=:FOR U=1 TO 25:NEXT U
300 Q=X:W=Y
310 X=T:Y=140+SIN(T/96)*32
320 PUT (Q,W),A,>=
330 NEXT T:FOR T=1 TO 2500:NEXT:GOTO 210
```

## SCREEN.BAS

```bas
10 CLS
20 CLS:KEY OFF
30 REM----------------------------------------------
40 REM                SCREEN.BAS
50 REM    BUILD A SCREEN FORMAT FOR DATA ENTRY
60 REM----------------------------------------------
70 REM
80 OPEN "I",2, "HEADER.DAT"
90  INPUT #2,FSCREEN$,ROOT%,LNG%,LNF%,AN%,LINS%,N%,SIZE%,INDEX$,MAST$
100 CLOSE 2
110 FOR I%=1 TO 10:PRINT:NEXT I%
120 PRINT" Enter a Screen Form one line at a time."
130 PRINT
131 PRINT"EXAMPLE:   1 LAST NAME *----------------
132 PRINT"           2 FIRST :---------------
133 PRINT"           3 STREET:---------------
134 PRINT"           4 CITY  :----------------------
135 PRINT"           5 STATE :----      ZIP:----------
136 PRINT"           6 PHONE :---------------
140 PRINT:PRINT:PRINT" Remember these codes:
150 PRINT
160 PRINT"                * = keyed (indexed) value"
170 PRINT"                : = begins a field
180 PRINT"                - = field designation"
190 FOR I%=1 TO  3:PRINT:NEXT I%
200 DIM RW$(LINS%)
210 FOR L%=1 TO LINS%
220  PRINT USING "## ";L%;
230  LINE INPUT RW$(L%)
240 NEXT L%
250 REM--------------------------------
260 REM      edit it
270 REM--------------------------------
280 PRINT
290 INPUT "Enter 0 to stop, or line number to change: ";L%
300 IF L%<= 0 OR L%>LINS% THEN 390
310  PRINT USING "## ";L%;
320  PRINT RW$(L%)
330  PRINT USING "## ";L%;
340  LINE INPUT RW$(L%)
350 GOTO 280
360 REM-----------------------------------------
370 REM     file it in fscreen$
380 REM-----------------------------------------
390 REM
400 PRINT:LINE INPUT "Do you want hard copy ?";Y$
410 IF Y$<>"y" AND Y$<>"Y" THEN 440
420 GOSUB 540:GOTO 400
430 REM------------------------------------
440 OPEN "o",1, FSCREEN$
450  FOR L%=1 TO LINS%
460      PRINT #1,RW$(L%)
470  NEXT L%
480 CLOSE 1
490 PRINT:PRINT"Form saved in ";FSCREEN$
500 RUN "dbmenu"
510 REM-----------------------------------
520 REM        hard copy
530 REM-----------------------------------
540 LPRINT:LPRINT "                    Screen Form ";FSCREEN$
550 LPRINT:LPRINT
560 FOR L%=1 TO LINS%
570  LPRINT USING "## ";L%:LPRINT RW$(L%)
580 NEXT L%
590 LPRINT:LPRINT:LPRINT
600 RETURN
```

## SURVIVAL.BAS

```bas
10 '---------------------------------------------------------------
12 '
14 ' Survival: by Stewart F. Rush (Enhancements by G. M. Bright)
16 '
18 ' variable definitions: P  = current position
20 '                       T1 = current elapsed time
22 '                       T2 = oxygen remaining
24 '                       C  = no. of items carried
28 '                       F1 = flag: shed open
30 '                       F2 = flag: meteor shower occurred
32 '                       F3 = flag: laser beam deflected
34 '                       F4 = flag: ventillator shaft illuminated
36 '                       F5 = flag: deactivator exposed
38 '                       F7 = flag: spacecraft repair status
40 '                       F9 = flag: power in use
42 '                       P1 = power unit power remaining
44 '                       P2 = power pack power remaining
45 '                       V  = number of reads of computer message
46 '
60 '---------------------------------------------------------------
100 SCREEN 0: WIDTH 80
170 CLEAR: DIM T$(64): DIM M(43,8): DIM O(15)
176 '***************************************
178 '** initialize text and move matrices **
180 '***************************************
182 CLS: COLOR 16,7: PRINT "SURVIVAL";: COLOR 7,0
184 DEF SEG=0:X=PEEK(&H417) AND &H40:IF X=64 THEN POKE &H417,PEEK(&H417) AND &H0:'   toggle lowercase
186 PRINT ": Would you like instructions (y/n)?"
220 D$=INKEY$:IF D$="" THEN 220 ELSE IF D$="y" THEN GOSUB 5040
221 PRINT: PRINT "initialization in process - please wait"
222 FOR I=1 TO 15
224   READ O(I)
226 NEXT I
230 FOR I= 1 TO 64
240   READ T$(I)
250 NEXT I
260 FOR I= 1 TO 43
270   FOR J = 1 TO 8
280     READ M(I,J)
290   NEXT J
300 NEXT I
305 RESTORE
320 P=1: C=2: T1=0: T2=185: P1=230: P2=50: V=0
390 F1=0: F2=0: F3=0: F4=0: F5=0: F7=0: F9=0
400 M(2,8)=6
410 M(14,8)=30
620 REM *****************************************************
630 REM ** display current status and location information **
640 REM *****************************************************
650 CLS
653 COLOR 0,7:PRINT "*****************************************":COLOR 7,0
654 COLOR 0,7:PRINT "* CURRENT STATUS & LOCATION INFORMATION *":COLOR 7,0
655 COLOR 0,7:PRINT "*****************************************":COLOR 7,0
690 IF O(11)=99 AND P1>0 THEN P1=P1-5
700 IF O(14)=99 AND P2>0 THEN P2=P2-5
710 IF O(3)=99 AND T2>0 THEN T2=T2-5
720 IF (P>21) AND (F9=0) THEN 760
730 IF (O(11)<>99) AND (O(14)<>99) THEN 2870
740 IF (O(11)=99) AND (P1=0) THEN 2870
750 IF (O(14)=99) AND (P2=0) THEN 2870
760 IF (P>17) AND (P<22) THEN 790
770 IF (P>21) AND (P<>38) AND (F9=0) THEN 790
775 IF (P=38) AND (R=39) AND (F9=0) THEN 790
780 IF (O(3)<>99) OR (T2=0) THEN 2900
790 PRINT: PRINT "ELAPSED TIME: ";T1;" MINUTES"
800 IF O(11)=99 THEN PRINT "POWER UNIT: ";P1;" UNITS"
810 IF O(14)=99 THEN PRINT "POWER PACK: ";P2;" UNITS"
820 IF O(3)=99 THEN PRINT "OXYGEN REMAINING: ";T2;" MINUTES"
830 IF T1>400 THEN 2960
840 IF T1>350 THEN 3840
850 IF T1>200 THEN 3740
855 T1=T1+5
860 PRINT: PRINT "LOCATION: You are ";
870 FOR I=M(P,7) TO M(P,8)
880 PRINT T$(I)
890 NEXT I
900 PRINT "##"
910 REM *********************************
920 REM ** display any objects present **
930 REM *********************************
940 IF P=14 THEN 1920
950 FOR I = 1 TO 15
960 IF O(I)<>P THEN 990
970 GOSUB 4410
980 PRINT "There is ";B$;" here."
990 NEXT I
1000 GOTO 2000
1010 REM ****************************************
1020 REM ** read and process keyboard response **
1030 REM ****************************************
1040 INPUT B$: IF LEN(B$)<>1 GOTO 1320
1050 I=INSTR(1,"nsewudq",B$)
1060 IF I=0 GOTO 1570 ELSE IF I=7 GOTO 9999
1150 IF M(P,I)=0 THEN PRINT "You cannot go in that direction!": GOTO 1040
1160 IF M(P,I)=99 THEN 2940
1170 Q=M(P,I)
1180 IF P=12 THEN 3060
1190 IF P=13 THEN 3180
1200 IF P=22 THEN 3310
1210 IF P=23 THEN 3420
1220 IF P=29 THEN 3470
1230 R=P
1240 P=Q
1260 GOTO 650
1290 REM ********************************************
1300 REM ** process two or more character commands **
1310 REM ********************************************
1320 C$=LEFT$(B$,3)
1330 IF C$="loo" THEN 650
1340 IF C$="des" THEN 650
1345 IF C$="sta" THEN 650
1350 IF C$="get" THEN 2190
1360 IF C$="tak" THEN 2190
1370 IF C$="kee" THEN 2190
1380 IF C$="dro" THEN 2580
1390 IF C$="lea" THEN 2580
1400 IF C$="put" THEN 2580
1410 IF C$="inv" THEN 2780
1420 IF C$="qui" THEN 9999
1430 IF C$="end" THEN 9999
1440 IF C$="tra" THEN 1750
1450 IF C$="dig" THEN 1860
1470 IF C$="fue" THEN 4030
1480 IF C$="rea" THEN 4250
1490 IF C$="dea" THEN 3890
1500 IF C$="bla" THEN 4110
1505 IF C$="fir" THEN 4110
1510 IF C$="up" THEN 1640
1520 IF C$="dow" THEN 1640
1530 IF C$="nor" THEN 1640
1540 IF C$="sou" THEN 1640
1550 IF C$="eas" THEN 1640
1560 IF C$="wes" THEN 1640
1562 IF C$="hel" THEN 1581
1564 IF C$="wha" THEN 1581
1566 IF C$="deb" THEN 1610
1567 IF C$="ent" THEN 1670
1570 PRINT "Invalid Command"
1575 IF IC<5 THEN PRINT "You may enter `help' for some suggestions."
1580 GOTO 1040
1581 PRINT "Valid direction commands are: North, South, East, West, Up & Down."
1582 PRINT "You can also just enter the first letter, i.e. n,s,w,e,u,d."
1583 PRINT "Other commands include: INVentory, FUEL, DIG, TRAnsport, etc."
1584 PRINT "The latter can be abbreviated by using only 3 letters. The"
1585 PRINT "commands TRY or USE are useful only when you confront a situation."
1586 PRINT "Commands other than directives may require an object. Good luck!"
1587 GOTO 1040
1590 PRINT "I cannot process your request!"
1600 GOTO 1040
1610 PRINT "enter location"
1620 INPUT P
1630 GOTO 650
1640 D$=LEFT$(B$,1)
1650 B$=D$
1660 GOTO 1050
1670 '
1672 ' PROCESS SHED AND SPACE CRAFT ENTRY
1674 '
1680 IF P<>13 AND P<>15 THEN 1590
1690 IF P=13 THEN I=4: GOTO 3180
1700 I=2: GOTO 1170
1720 REM *******************************
1730 REM ** process transport command **
1740 REM *******************************
1750 IF P<>36 THEN 1800
1760 IF O(8)=99 THEN 1590
1770 P=O(8)
1780 PRINT "Beaming in process "
1782 FOR I = 1 TO 60: PRINT "~";: SOUND 300,1: NEXT
1790 GOTO 650
1800 IF P<>O(8) THEN 1590 ELSE P=36: GOTO 1780
1830 REM *************************
1840 REM ** process dig command **
1850 REM *************************
1860 IF O(15)<>99 THEN GOTO 3940
1865 IF P<>10 THEN PRINT "The ground is too hard here.": GOTO 1040
1870 O(9)=10
1880 GOTO 940
1890 REM *************************************
1900 REM ** drop illuminator if at overlook **
1910 REM *************************************
1920 IF O(4)<>99 THEN 950
1930 O(4)=100
1940 PRINT "You dropped your illuminator!!!  You cannot retrieve it."
1950 GOTO 950
1970 REM *******************
1980 REM ** process robot **
1990 REM *******************
2000 IF O(5)=28 THEN O(5)=35
2010 IF O(5)=42 THEN O(5)=28
2020 IF O(5)=41 THEN O(5)=42
2030 IF O(5)=27 THEN O(5)=41
2040 IF O(5)=25 THEN O(5)=27
2050 IF O(5)<>35 THEN 2090
2060 IF P<>28 THEN 1010
2070 M(28,1)=35
2080 GOTO 1010
2090 IF O(5)<>32 THEN 1010
2100 IF P<>32 THEN 1010
2110 O(5)=25
2120 IF O(13)=99 THEN 1010
2130 PRINT "Robot fails to recognize you.  It fires a phasor weapon at you!!!"
2135 FOR I=1 TO 1800:  NEXT
2140 FOR I=1 TO 3: FOR IS=1 TO 12: IT=(25*IS): SOUND 2600-IT,1: NEXT: NEXT
2145 FOR I=1 TO 1800:  NEXT
2150 GOTO 2980
2160 REM *********************************
2170 REM ** process get or take command **
2180 REM *********************************
2190 GOSUB 4590
2200 IF I>0 THEN 2260
2210 IF I<0 THEN 2240
2220 PRINT "I don't recognize ";RIGHT$(B$,LEN(B$)-J);"."
2230 GOTO 1040
2240 PRINT "What item?"
2250 GOTO 1040
2260 IF O(I)<>P THEN 2370
2270 IF C>3 THEN PRINT "You can't carry anymore!": GOTO 1040
2280 IF I=5 THEN PRINT "You can't carry a Robot!": GOTO 1040
2285 IF I=7 THEN PRINT "The bomb is way too heavy!": GOTO 1040
2290 IF I=10 THEN 2430
2300 IF I=11 THEN 2460
2310 IF I=14 THEN 2490
2320 C=C+1
2330 O(I)=99
2340 IF I=3 THEN F0=1
2350 PRINT "Okay"
2360 GOTO 1040
2370 IF O(I)=99 THEN 2542
2375 PRINT "There is no ";RIGHT$(B$,LEN(B$)-J);" here!!!"
2380 GOTO 1040
2430 PRINT "You can't get the message.  It's on the terminal screen."
2450 GOTO 1040
2460 IF O(14)=99 THEN 2520
2470 O(11)=99
2480 GOTO 2320
2490 IF O(11)=99 THEN 2520
2500 O(14)=99
2510 GOTO 2320
2520 PRINT "You can't have more than one power device at a time!"
2540 GOTO 1040
2542 PRINT "You already have ";RIGHT$(B$,LEN(B$)-J);"!"
2544 GOTO 1040
2550 REM ***********************************
2560 REM ** process drop or leave command **
2570 REM ***********************************
2580 GOSUB 4590
2590 IF I>0 THEN 2620
2600 IF I<0 THEN 2240
2610 GOTO 2220
2620 IF O(I)<>99 THEN 2690
2630 C=C-1
2640 O(I)=P
2680 GOTO 2350
2690 PRINT "You don't have "RIGHT$(B$,LEN(B$)-J);"!"
2700 GOTO 1040
2750 REM *******************************
2760 REM ** process inventory command **
2770 REM *******************************
2780 FOR I=1 TO 15
2790 IF O(I)<>99 THEN 2820
2800 GOSUB 4410
2810 PRINT "You have ";B$;"."
2820 NEXT I
2830 GOTO 1040
2840 REM ************************************
2850 REM ** program termination processing **
2860 REM ************************************
2870 PRINT "You have no power left, or you have no power source."
2880 PRINT "You have frozen to death."
2890 GOTO 2980
2900 PRINT "Oxygen required here, none available."
2910 GOTO 2980
2920 PRINT "A nuclear detonation has just occurred."
2930 GOTO 2980
2940 PRINT "You have fallen to your death."
2950 GOTO 2980
2952 PRINT "You have been zapped by the laser."
2954 GOTO 2980
2960 PRINT "The moon base has just been destroyed by a large asteroid."
2980 PRINT "You have failed to survive."
2990 INPUT "Do you wish to try again";D$
3010 IF LEFT$(D$,1)="y" THEN 221
3020 GOTO 9999
3030 REM ***************************
3040 REM ** process meteor shower **
3050 REM ***************************
3060 IF M(P,I)<>13 THEN 1230
3070 IF F2=1 THEN 1230
3080 PRINT "There is a meteor shower.  Your space suit has developed a leak!!"
3100 GOSUB 4890
3110 IF I<>2 THEN 2980
3120 PRINT "Proceeding to seal suit.......":FOR CX=1 TO 1500: NEXT CX
3130 F2=1
3140 GOTO 1230
3150 REM *************************
3160 REM ** process locked shed **
3170 REM *************************
3180 IF M(P,I)<>22 THEN 1230
3190 IF F1=1 THEN 1230
3200 PRINT "The shed is locked"
3210 GOSUB 4890
3220 IF I<>1 THEN 3260
3230 PRINT "Proceeding to try key.......":FOR CX=1 TO 1500: NEXT CX
3240 F1=1
3250 GOTO 1230
3260 PRINT "Your attempt fails."
3270 GOTO 1040
3280 REM ***********************************
3290 REM ** process dark ventilator shaft **
3300 REM ***********************************
3310 IF M(P,I)<>23 THEN 1230
3320 IF F4=1 THEN 1230
3330 PRINT "It is dangerous to proceed in the dark!"
3340 GOSUB 4890
3350 IF I<>4 THEN 2940
3360 PRINT "The shaft is now illuminated.  You may proceed.......":FOR CX=1 TO 2500: NEXT CX
3370 F4=1
3380 GOTO 1230
3390 REM ************************************
3400 REM ** process shaft with no illuminator
3410 REM ***************************************
3420 IF O(4)<>99 THEN IF O(4)<>23 THEN 2940
3430 GOTO 1230
3440 REM ************************
3450 REM ** process laser beam **
3460 REM ************************
3470 IF M(P,I)<>37 THEN 1230
3480 IF F3=1 THEN 1230
3490 PRINT "There is a laser beam here. Passage not possible with beam present."
3510 GOSUB 4890
3520 IF I<>12 THEN 2952
3530 PRINT "Proceeding to deflect beam.......":FOR CX=1 TO 2500: NEXT CX
3540 F3=1
3550 GOTO 1230
3560 REM *****************************************
3570 REM ** process blown seal in space station **
3580 REM *****************************************
3590 IF R<>29 THEN 850
3600 IF F9=1 THEN 850
3610 F9=1
3620 PRINT "You have just blown the air seal in space station."
3640 GOTO 850
3710 REM ************************
3720 REM ** expose deactivator **
3730 REM ************************
3740 IF F5=1 THEN 855
3750 O(6)=14
3760 M(2,8)=5
3770 M(14,8)=29
3780 M(14,4)=2
3790 F5=1
3800 GOTO 855
3810 REM *******************
3820 REM ** detonate bomb **
3830 REM *******************
3840 IF F7=0 THEN 2920
3850 GOTO 850
3860 REM *********************
3870 REM ** deactivate bomb **
3880 REM *********************
3890 IF O(6)<>99 THEN 3940
3900 IF P<>38 THEN 3980
3910 F7=1
3915 T$(31)="at crash site of a space craft.  Repairs are now complete."
3920 PRINT "Bomb is now deactivated."
3930 GOTO 1040
3940 PRINT "You have nothing to do it with!"
3950 GOTO 1040
3960 PRINT "There is nothing to do it to!"
3970 GOTO 1040
3980 PRINT "You can't do it from here!"
3990 GOTO 1040
4000 REM *****************
4010 REM ** fuel rocket **
4020 REM *****************
4030 IF P<>19 THEN 3980
4040 IF O(9)<>99 THEN 3940
4050 O(9)=98
4060 PRINT "Fuel is now loaded."
4070 GOTO 1040
4080 REM *************************
4090 REM ** blastoff processing **
4100 REM *************************
4110 IF P<>21 THEN 3980
4120 IF O(9)<>98 THEN 4200
4130 IF F7=1 THEN 4160
4140 PRINT "Repairs not yet complete."
4150 GOTO 1040
4160 FOR IS=1 TO 150: IJ=IS*10: SOUND IJ+1000,1: NEXT IS
4165 PRINT "Congratulations, you have just blasted off and are on your way to               earth.  Your escape time was ";T1;" minutes."
4190 GOTO 2990
4200 PRINT "Your space craft has no fuel!!"
4210 GOTO 1040
4220 REM *********************************
4230 REM ** computer readout processing **
4240 REM *********************************
4250 IF P<>35 THEN 3980
4260 GOSUB 4590
4270 IF I<>10 THEN 3960
4280 IF V<>0 THEN 4320
4290 PRINT "Bomb de-activator located somewhere east of Mare Serenitatis on moon's surface."
4310 GOTO 4360
4320 IF V<>1 THEN 4350
4330 PRINT "Local fuel source: Dilithium Crystal."
4340 GOTO 4360
4350 PRINT "Dilithium found in soft surfaces."
4360 IF F7=1 THEN PRINT "Spacecraft repairs complete."
4365 V=V+1
4370 GOTO 1040
4380 REM **********************************************
4390 REM ** subroutine to describe items at location **
4400 REM **********************************************
4410 IF I=1 THEN B$="an ELECTRONIC KEY"
4420 IF I=2 THEN B$="SEALANT"
4430 IF I=3 THEN B$="an OXYGEN MODULE"
4440 IF I=4 THEN B$="an ILLUMINATOR"
4450 IF I=5 THEN B$="a ROBOT"
4460 IF I=6 THEN B$="a DEACTIVATOR"
4470 IF I=7 THEN B$="a NUCLEAR BOMB"
4480 IF I=8 THEN B$="a TRANSPORTER UNIT"
4490 IF I=9 THEN B$="DILITHIUM CRYSTALS"
4500 IF I=10 THEN B$="a COMPUTER MESSAGE"
4510 IF I=11 THEN B$="a POWER UNIT"
4520 IF I=12 THEN B$="a MIRROR"
4530 IF I=13 THEN B$="a CODED BADGE"
4540 IF I=14 THEN B$="a POWER PACK"
4545 IF I=15 THEN B$="a SHOVEL"
4550 RETURN
4560 REM ***********************************************
4570 REM ** subroutine to convert an item to a number **
4580 REM ***********************************************
4590 FOR J=1 TO LEN(B$)
4600 IF MID$(B$,J,1)=" " THEN 4640
4610 NEXT J
4620 I=-1
4630 RETURN
4640 C$=MID$(B$,J+1,3)
4650 I=0
4660 IF C$="ele" THEN I=1
4670 IF C$="key" THEN I=1
4680 IF C$="sea" THEN I=2
4690 IF C$="oxy" THEN I=3
4700 IF C$="mod" THEN I=3
4710 IF C$="ill" THEN I=4
4720 IF C$="rob" THEN I=5
4730 IF C$="dea" THEN I=6
4740 IF C$="nuc" THEN I=7
4750 IF C$="bom" THEN I=7
4760 IF C$="tra" THEN I=8
4770 IF C$="dil" THEN I=9
4780 IF C$="cry" THEN I=9
4790 IF C$="com" THEN I=10
4800 IF C$="mes" THEN I=10
4810 IF C$="uni" THEN I=11
4820 IF C$="mir" THEN I=12
4830 IF C$="bad" THEN I=13
4840 IF C$="pac" THEN I=14
4845 IF C$="sho" THEN I=15
4850 RETURN
4860 REM ***************************************
4870 REM ** subroutine to process try command **
4880 REM ***************************************
4890 INPUT B$
4900 C$=LEFT$(B$,3)
4910 IF C$="try" THEN 4950
4920 IF C$="use" THEN 4950
4930 I=-1
4940 RETURN
4950 GOSUB 4590
4960 IF I<1 THEN 5012
4970 IF O(I)=99 THEN RETURN
4980 PRINT"You don't have ";RIGHT$(B$,LEN(B$)-J);"!"
4990 GOTO 4930
5000 PRINT "Your attempt fails!"
5010 GOTO 4930
5012 PRINT "With what?": GOTO 4930
5020 REM ************************
5030 REM ** print instructions **
5040 REM ************************
5045 CLS
5050 PRINT "You have crash landed on the earth's moon.  You have limited supplies and time  in which to survive.  You will encounter various items and situations during    your travels."
5055 PRINT
5060 PRINT "To travel, you may enter directions such as north or n, as well as s, e, w, and u or d (up or down)."
5065 PRINT
5090 PRINT "To communicate, enter commands (verbs), followed by object names, if applicable.For example: get xxx, leave xxx, use xxx, etc."
5110 PRINT "Unless instructed otherwise, be sure to press the ENTER key after each input.   The enter key is on the right of the keyboard and has this symbol on it: "+CHR$( 17)+CHR$(196)+CHR$(217)
5115 PRINT
5120 PRINT "Once you have survived, the object then is to achieve the optimum survival time.May the force be with you!!!"
5122 PRINT
5124 COLOR 16,7:PRINT"Press any key to continue":COLOR 7,0
5126 A$=INKEY$: IF A$="" THEN 5126
5130 RETURN
6000 '****************************************
6001 '** object locations                   **
6002 '****************************************
6010 DATA 21,19,99,06,32,00,38
6020 DATA 35,00,35,99,33,34,37,43
7500 '********************************
7501 '** text location descriptions **
7502 '********************************
8001 DATA "at Mare Serenitatis. Long eerie"
8002 DATA "shadows from distant mountains and craters cast"
8003 DATA "themselves across the barren landscape."
8004 DATA "on a promontary point on the rim of the"
8005 DATA "crater Posidonius, only half visible when seen from below."
8006 DATA "There is total darkness to the East."
8007 DATA "between the craters of Dawes and Plinius."
8008 DATA "at a narrow pass in the mountains of Haemus."
8009 DATA "at a steep base of the crater of Manilus."
8010 DATA "at Mare Vaporum. The Apennines Mountains"
8011 DATA "rise ominously to the North and West."
8012 DATA "at the base of the awesome Mt. Eudoxus."
8013 DATA "inside the crater of Aristoteles. The"
8014 DATA "crater floor is littered with rocks."
8015 DATA "in Lacus Somnorium, North of Posidonius"
8016 DATA "and North East of Mare Serenitatus."
8017 DATA "at the base of the Burg crater in Lacus"
8018 DATA "Mortis. The surface is very soft here."
8019 DATA "at the East side of the vast Mare of"
8020 DATA "Imbrium. To the North the low angle of"
8021 DATA "the sun casts eerie shadows on the soft lunar surface"
8022 DATA "and the distant mountains to the East. To the West, the"
8023 DATA "Mare stretches out of sight to the horizon. To the South"
8024 DATA "the Apennine Mountains seem to rise out of nowhere."
8025 DATA "at the base of the crater of Plato. A"
8026 DATA "shiney object is seen to the West."
8027 DATA "standing before a small metal shed. A"
8028 DATA "sign reads ventillator shaft number 2."
8029 DATA "somewhere East of Mare Serenitatus."
8030 DATA "There is total darkness."
8031 DATA "at the crash site of a space craft."
8032 DATA "The entrance to the space craft is before you."
8033 DATA "at the center of vast Mare of Imbrium."
8034 DATA "in the air lock chamber of the space craft."
8035 DATA "in the aft cargo and fuel storage compartment."
8036 DATA "in the engine room of the space craft."
8037 DATA "in the control room, the ships console"
8038 DATA "is before you."
8039 DATA "inside a dark shed. A ladder leads down"
8040 DATA "into a large metal shaft below."
8041 DATA "in a ventillator passage."
8042 DATA "at a ventillator opening. Through the"
8043 DATA "opening a lit passageway can be seen."
8044 DATA "in a lighted space station corridor."
8045 DATA "in the space station infirmary."
8046 DATA "in the recreation room and library."
8047 DATA "in the mess hall. Abandoned food trays"
8048 DATA "are still on the tables."
8049 DATA "in the storage room and supply area."
8050 DATA "in the sleeping quarters of the space station."
8051 DATA "in an elevator at the subsurface level."
8052 DATA "in an elevator at the surface level."
8053 DATA "in the space station's control center."
8054 DATA "in the transporter room."
8055 DATA "in the space station research laboratory."
8056 DATA "in the hangar area. The launch area"
8057 DATA "is located to the South of here."
8058 DATA "in an air lock chamber between the space suit"
8059 DATA "changing area and the hangar."
8060 DATA "in a space suit changing area."
8061 DATA "at the top of a rocky arete on Burg crater. To"
8062 DATA "the North the center of the crater is thousands of feet below you."
8063 DATA "To the West, the huge crater of Eudoxus can be seen between crags"
8064 DATA "on a ridge bordering Lacus Mortis."
8500 REM **************************************
8501 REM ** movement and text pointer matrix **
8502 REM **************************************
9001 DATA 07,04,02,15,00,00,01,03
9002 DATA 09,03,14,01,00,00,04,06
9003 DATA 02,05,14,04,00,00,07,07
9004 DATA 01,05,03,00,00,00,08,08
9005 DATA 04,00,03,06,00,00,09,09
9006 DATA 00,00,05,00,00,00,10,11
9007 DATA 08,01,09,11,00,00,12,12
9008 DATA 00,07,10,00,00,00,13,14
9009 DATA 10,02,14,07,00,00,15,16
9010 DATA 00,09,14,08,43,00,17,18
9011 DATA 12,15,07,16,00,00,19,24
9012 DATA 00,11,00,13,00,00,25,26
9013 DATA 00,16,12,22,00,00,27,28
9014 DATA 99,99,99,99,00,00,29,30
9015 DATA 11,18,01,00,00,00,31,32
9016 DATA 17,16,17,16,00,00,33,33
9017 DATA 16,17,11,17,00,00,33,33
9018 DATA 15,19,00,00,00,00,34,34
9019 DATA 18,00,20,00,00,00,35,35
9020 DATA 00,00,00,19,21,00,36,36
9021 DATA 00,00,00,00,00,20,37,38
9022 DATA 00,00,13,00,00,23,39,40
9023 DATA 24,00,00,00,22,00,41,41
9024 DATA 25,23,00,00,00,00,42,43
9025 DATA 27,26,33,32,24,00,44,44
9026 DATA 25,00,30,31,00,00,44,44
9027 DATA 34,25,41,00,00,00,44,44
9028 DATA 00,29,42,36,00,00,44,44
9029 DATA 28,38,40,37,00,00,44,44
9030 DATA 00,00,00,26,00,00,45,45
9031 DATA 00,00,26,00,00,00,46,46
9032 DATA 00,00,25,00,00,00,47,48
9033 DATA 00,00,00,25,00,00,50,50
9034 DATA 00,27,00,00,00,00,49,49
9035 DATA 00,28,00,00,24,00,53,53
9036 DATA 00,00,28,00,00,00,54,54
9037 DATA 00,00,29,00,00,00,55,55
9038 DATA 29,00,39,00,00,00,56,57
9039 DATA 40,00,00,38,00,00,58,59
9040 DATA 00,39,00,29,00,00,60,60
9041 DATA 00,00,00,27,42,00,51,51
9042 DATA 00,00,00,28,00,41,52,52
9043 DATA 00,00,00,00,00,10,61,64
9999 END
```

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk 0004

     Volume in drive A has no label
     Directory of A:\

    BACKUP   BAS      5888  11-09-82   1:10a
    CATCH88  BAS      6016  12-03-82   3:15p
    CHESS    EXE     46464   1-01-80  12:41a
    CREATE   BAS      3072  11-10-82  12:05p
    DBMENU   BAS      1280  11-10-82  12:10p
    DUMP     BAS      2304  11-06-82  10:46a
    ELIZA    BAS      6656   8-11-82  12:05a
    FILES004 TXT      1177   5-29-87   8:33a
    HANGMAN  BAS      3968  12-03-82   4:27p
    INSERT   BAS      8448  11-06-82  10:40a
    LOOKUP   BAS      5376  11-09-82   1:09a
    METEOR   BAS      3456   1-01-80   3:34a
    MODEM7   COM      7552  10-16-82   5:31a
    MODEM7   DOC     12288  11-01-82   6:30p
    README2  004      2697   1-30-83  11:20p
    SATURN   BAS       768   5-22-82
    SCREEN   BAS      1920  11-10-82  12:16p
    SURVIVAL BAS     19328  12-04-82   1:15a
           18 file(s)     138658 bytes
                           18432 bytes free
