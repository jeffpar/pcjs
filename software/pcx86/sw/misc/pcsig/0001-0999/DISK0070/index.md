---
layout: page
title: "PC-SIG Diskette Library (Disk #70)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0070/
machines:
  - id: ibm5150
    type: pcx86
    config: /machines/pcx86/ibm/5150/cga/256kb/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0070"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5150" %}

{% comment %}info_begin{% endcomment %}

## Information about "DISKCAT"

    DISKCAT and DC-SORT: These two programs combine for a disk cataloging
    and sorting/pring system for keeping track of your disk files.  It
    works with DOS 1.1 format disks only.
    
    PAGESKIP : This utility simply skips to the top of form from DOS 2.0,
    so that you do not have to push buttons on your printer.  Just key
    "PAGE" and hit enter to run, if the utility is on a diskette in your
    default drive.  NOTE: it requires an EPSON MX or FX compatible.
    
    SMALLPRT and USMALLPRT: These install (and uninstall) a utility that
    skips you to the top of form then sets the printer to compressed
    double-strike mode.  While slow, it saves paper and makes printouts
    more readable and xerox-able, when printing documentation like this.
    
    How to Start: Consult the .TXT and .DOC files for directions.
    The BASIC programs require GWBASIC; the .EXE and .COM programs
    can be run directly from DOS.
    
    File Descriptions:
    
    PAGE     BAT  Sends formfeed to printer
    PAGESKIP DOC  Documentation for PAGESKIP.BAS
    PAGES    KIP  Formfeed character
    UNSMALLP BAT  Batch file to reset Epson in normal print mode
    SMALLPRT DOC  Notes for using SMALLPRT.BAT
    SMALLPRT BAT  Batch file to put Epson in condensed, double-strike mode
    SMALLPR  INT  Commands to put Epson in condensed, double-strike mode
    UNSMALLP DOC  Notes for using UNSMALLP.BAT
    UNSMALLP RNT  Commands to put Epson printer back to normal mode
    DISKCAT  BAS  Disk cataloging program
    *        EXE  Compiled version of DISKCAT BASIC files (2 files
    DISKCAT  DOC  Documentation for DISKCAT.BAS
    VPRINT   COM  Redirects printer output to file
    DC-SORT  BAS  Sort program for DISKCAT
    VPRINT   ASM  Assembly language source for VPRINT.COM
    DIRMANIP EXE  Directory manipulation program
    VPRINT   DOC  Documentation for VPRINT.COM
    VIRTUAL  PRN  Printer utility
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## DC-SORT.BAS

```bas
1 '                 DISKCAT SORT/PRINT PROGRAM
2 '      (C) COPYRIGHT 1983 NELSON FORD  ALL RIGHTS RESERVED
3 '
10 SCREEN 0,1: WIDTH 80
20 DEFINT A-Z:	DIM F$: F$=":diskcat.dta"
23 BG=0: IF (PEEK(&H410) AND &H30)<>&H30 THEN FG=6 ELSE FG=7
24 COLOR FG, BG, BG
30 DIM X, X$, JOB, D$(2), Y$, I, N$(2,2000), LAST(2), STACK(20), N(2,2000)
40 CLS: PRINT TAB(30) "D I S K C A T":  LOCATE 5,1,0:  X=20
50 PRINT TAB(X) "1  Compare two DISKCAT.DTA files"
60 PRINT TAB(X) "2  Print DISKCAT.DTA sorted by file name"
65 PRINT TAB(X) "3  Print DISKCAT.DTA sorted by disk name"
70 PRINT TAB(X) "4  Print DISKCAT.DTA sorted by file type"
80 PRINT TAB(X) "5  Print DISKCAT.DTA sorted by file extension"
90 PRINT TAB(X) "6  Return to main program"
95 PRINT TAB(X) "7  Return to DOS": PRINT
100 PRINT TAB(X) "   Select";
110 LOCATE,X: GOSUB 150
120 IF X$<"1" OR X$>"7" THEN 110  ELSE JOB= VAL(X$)
130 ON JOB GOTO 1000,2000,2000,2000,2000,131,135
131 '
132 PRINT:PRINT:PRINT TAB(X) "What drive is DISKCAT on?  ";: GOSUB 150
133 X$=X$+":diskcat":  CHAIN X$
134 '
135 END
139 '
140 ''''''''''get keypress:
141 '
150 COLOR 16,FG: PRINT CHR$(219) CHR$(29);: COLOR FG,BG
160 X$=INKEY$: IF X$="" THEN 160 ELSE PRINT X$;
170 IF X$=CHR$(27) THEN RUN
171 IF X$=CHR$(3) THEN END ELSE RETURN
180 '
190 ''''''''''sort:
191 '
200 CLS: LOCATE 12,35: PRINT "SORTING": TOP=0 : LO=1 : HI=LAST(S)
210   WHILE 1
220	WHILE LO < HI
230 IF HI-LO >1 THEN GOTO 260
240 IF N$(S,LO)<=N$(S,HI) THEN 320
250 SWAP N$(S,LO),N$(S,HI): SWAP N(S,LO),N(S,HI)
260 J=HI+1: GOSUB 350
270 IF J-LO >= HI-J THEN GOTO 290
280 STACK(TOP+1)=J+1: STACK(TOP+2)=HI:	 HI=J-1 : GOTO 300
290 STACK(TOP+1)=LO:  STACK(TOP+2)=J-1:  LO=J+1
300 TOP=TOP+2
310	WEND
320 IF TOP=0 THEN RETURN
330 HI=STACK(TOP) : LO=STACK(TOP-1) : TOP=TOP-2
340   WEND
350 '
360 CK.PT$= N$(S,LO) : I=LO
370   WHILE 1
380 I=I+1 : IF N$(S,I) < CK.PT$ AND I<HI THEN GOTO 380
390 J=J-1 : IF N$(S,J) > CK.PT$ THEN GOTO 390
400 IF I<J THEN SWAP N$(S,I),N$(S,J): SWAP N(S,I), N(S,J)  ELSE GOTO 420
410   WEND
420 SWAP N$(S,LO),N$(S,J):  SWAP N(S,LO), N(S,J): RETURN
430 '
998 '''''''''''''compare two diskcat files:
999 '
1000 CLS:LOCATE 10,10: PRINT "Enter drives to access (must be different): ";
1010 GOSUB 150: D$(1)=X$: PRINT "  ";:  GOSUB 150:  D$(2)=X$
1020 IF D$(1)=D$(2) THEN BEEP: PRINT " different? ";: GOTO 1020
1030   FOR S=1 TO 2
1040 CLS: LOCATE 12,30: PRINT "Loading DISKCAT.DTA" S:  J=0
1050 OPEN D$(S)+F$ AS 1 LEN=74:  FIELD 1, 12 AS X$, 62 AS Y$:  FIELD 1,1 AS T$
1060 GET 1: IF T$<>"\" AND T$<>" " THEN J=J+1: N$(S,J)=X$: N(S,J)=J: GOTO 1060
1070 CLOSE:  LAST(S)= J:  GOSUB 200  'go sort
1080	NEXT
1090 'print comparison:
1100 I=1:  J=1:  L=1:  CLS:  CLOSE
1110 LOCATE 12,5: PRINT"Print comparative lists to [1] Screen or [2] Printer? ";
1120 GOSUB 150
1130 IF X$="1" THEN O$="scrn:" ELSE IF X$="2" THEN O$="lpt1:": GOSUB 1250            ELSE 1120
1140 OPEN O$ FOR OUTPUT AS #1:	CLS
1142 OPEN D$(1)+F$ AS 2 LEN=74
1143 FIELD 2, 12 AS NM$, 8 AS DSK$, 35 AS Y$, 10 AS DT$, 7 AS SZ$, 2 AS Y$
1144 FIELD 2, 1 AS T$, 73 AS Y$
1145 OPEN D$(2)+F$ AS 3 LEN=74
1146 FIELD 3, 12 AS NM2$, 8 AS DSK2$, 35 AS Y$, 10 AS DT2$, 7 AS SZ2$, 2 AS Y$
1147 FIELD 3, 1 AS T2$, 73 AS Y$
1150 GET 2, N(1,I):  GET 3, N(2,J)
1151 IF NM$<>NM2$ OR SZ$<>SZ2$ THEN 1160
1152 PRINT #1, NM$"  "SZ$"  "DSK$ TAB(40) NM2$"  "SZ2$"  "DSK2$:  I=I+1: J=J+1:      GOTO 1165
1160 IF NM$<=NM2$ THEN PRINT #1, NM$"  "SZ$"  "DSK$: I=I+1: GOTO 1170                ELSE  PRINT TAB(40) NM2$"  "SZ$"  "DSK$: J=J+1: GOTO 1170
1165 Q$=INKEY$: IF Q$="" THEN 1170 ELSE L=CSRLIN
1166 LOCATE 25,3: PRINT"1-Continue  2-Start printing over  3-Start program over  4-End  ";: GOSUB 150:  IF X$="1" THEN LOCATE L,1: GOTO 1170
1167 IF X$="2" THEN 1100  ELSE IF X$="3" THEN RUN
1169 IF X$="4" THEN END ELSE 1166
1170 L=L+1: IF O$="lpt1:"  THEN 1210
1180 IF L<=20 THEN 1200 ELSE PRINT: PRINT "Press Enter to continue."
1190 GOSUB 150: L=1: CLS
1200 GOTO 1230
1210 IF L<=50 THEN 1230
1220 LPRINT CHR$(12): GOSUB 1260: L=1
1230 IF I=<LAST(1) OR J<=LAST(2) THEN 1150
1240 GOSUB 150: RUN
1250 CLS: LOCATE 12,20: PRINT "PREPARE PRINTER & PRESS ENTER ";: GOSUB 150
1260 LPRINT TAB(30) "DISKCAT CATALOG COMPARISON": LPRINT
1262 LPRINT STRING$(31,"-") TAB(40) STRING$(31,"-")
1263 LPRINT " FILE NAME      SIZE     DISK" TAB(40) "";
1264 LPRINT " FILE NAME      SIZE     DISK"
1265 LPRINT "------------  -------  --------" TAB(40) "";
1266 LPRINT "------------  -------  --------"
1269 LPRINT: RETURN
1270 '
2000 ''''''''''''''print sorted by other fields:
2001 '
2010 CLS: LOCATE 12,20: PRINT "Which drive has DISKCAT.DTA? ";
2020 GOSUB 150: D$(1)=X$: CLS: LOCATE 12,30: PRINT "Loading data"
2030 OPEN D$(1)+F$ AS 1 LEN=74:   FIELD 1, 1 AS T$
2040 FIELD 1, 12 AS W$, 62 AS Y$                           'by name
2045 IF JOB=3 THEN FIELD 1, 12 AS Y$,  8 AS X$, 54 AS Y$   'by disk
2050 IF JOB=4 THEN FIELD 1, 20 AS Y$, 10 AS X$, 44 AS Y$   'by type
2060 IF JOB=5 THEN FIELD 1,  9 AS Y$,  3 AS X$, 62 AS Y$   'by ext.
2065 J=0:  I=0
2070 GET 1: I=I+1
2075 IF T$<>"\" AND T$<>" " THEN IF T$<>"z" THEN J=J+1: N$(1,J)=X$+W$: N(1,J)=I:     GOTO 2070 ELSE 2070
2080 LAST(1)= J
2090 S=1: GOSUB 200
2400 CLS: CLOSE: LOCATE 10
2410 PRINT TAB(30) "1  To printer"
2420 PRINT TAB(30) "2  To screen"
2430 PRINT TAB(30) "3  To disk file":  PRINT: PRINT TAB(30) "  Select";
2440 LOCATE,30:  GOSUB 150:  CLS: ON VAL(X$) GOTO 2450,2460,3000
2450 CLS: LOCATE 12,20: PRINT "Prepare printer & press Enter  ";: GOSUB 150
2451 OPEN "lpt1:" FOR OUTPUT AS #2
2452 GOTO 2500
2460 OPEN "scrn:" FOR OUTPUT AS #2
2500 '
2520 GOSUB 2610   'print page heading
2530 OPEN D$(1)+F$ AS 1 LEN=74
2540 FIELD 1, 12 AS NM$, 8 AS DSK$, 10 AS TY$, 25 AS DESCR$, 10 AS DT$, 7 AS SZ$    ,2 AS E$
2550   FOR I=1 TO LAST(1)
2560 GET 1, N(1,I)
2570 PRINT #2, NM$ " " DSK$" "TY$" "DESCR$" "DT$" "USING "###,###"; VAL(SZ$)
2571 Q$=INKEY$: IF Q$="" THEN 2580 ELSE L=CSRLIN
2572 LOCATE 25,3: PRINT"1-Continue  2-Start printing over  3-Start program over  4-End  ";: GOSUB 150:  IF X$="1" THEN LOCATE L,1: GOTO 2580
2573 IF X$="2" THEN 2400  ELSE IF X$="3" THEN RUN
2574 IF X$="4" THEN END ELSE 2571
2580 L=L+1: IF L>55 THEN PRINT #2, CHR$(12): GOSUB 2610
2590   NEXT
2600 CLOSE: GOSUB 150: RUN
2610 PRINT #2, TAB(30) "DISKCAT File Listing": PRINT #2, "":  L=1
2620 PRINT #2, " FILE NAME     DISK   FILE TYPE       DESCRIPTION             DATE      SIZE"
2630 PRINT #2, "------------ -------- --------- -------------------------  ---------- -------"
2640 RETURN
3000 LOCATE 12,20: LINE INPUT "enter output filename:  "; FI$
3010 CLS:' LOCATE 12,30: PRINT "doing it":
3020 OPEN D$(1)+F$ AS 1 LEN=74:  FIELD 1, 74 AS A$
3030 OPEN FI$ AS 2 LEN=74:       FIELD 2, 74 AS B$
3040   FOR I=1 TO LAST(1)
3050 GET 1,N(1,I):  LSET B$= A$:  PUT 2,I
3055 PRINT B$
3060   NEXT
3070 CLOSE:  CLOSE: RUN
```

## DISKCAT.BAS

```bas
1 ''DISKCAT.BAS     (C) COPYRIGHT  1983  NELSON FORD   ALL RIGHTS RESERVED
2 ''To compile, the following lines must be changed:
3 ''     Uncompiled:             Compiled:
4 ''  54 SIDE1!=&HE000    to   54 SIDE1%=&HE000
5 ''  82 SIDE2!=&HE050    to   82 SIDE2%=&HE050
6 ''1710 CALL SIDE1! (B)  to   1710 CALL ABSOLUTE (B,SIDE1%)
7 ''1711 IF PEEK(&HE100)=&HFF THEN B=B+256: CALL SIDE2! (B): S2=1536 ELSE S2=0   to 1711 IF PEEK(&HE100)=&HFF THEN B=B+256: CALL ABSOLUTE (B,SIDE2%): S2=1536            ELSE S2=0
8 ''           (tunes in lines 800-900 are timed for compiled pgm.)
9 ''
10 CLEAR ,35000!,2000
11 DEFINT A-Z
12 KEY OFF: SCREEN 0     'check for CG Board and set foreground color:
13 BG=0:             IF (PEEK(&H410) AND &H30)<>&H30 THEN FG=6 ELSE FG=7
14 COLOR FG, BG, BG
15 SP$= SPACE$(30):  ESC$=CHR$(27):  YES=NOT NO:  NO= NOT YES
16 FILL$= STRING$(72,"z")+CHR$(13)+CHR$(10)
17 ENTR$= " "+CHR$(17)+STRING$(2,196)+CHR$(217)+" ":   DRV$=""
18 DEF SEG: POKE 106,0
19 RANDOMIZE(VAL(RIGHT$(TIME$,2))): IF FIX(RND*10)=3 THEN GOSUB 10000
20 WIDTH 80:  CLS:  LOCATE 1,1,0
21 'routine to read side 1 directory into high mem.
22 DATA &h55,  &h06
23 DATA &hb8,&h00,&h00
25 DATA &h8e,&hc0
26 DATA &h8b,&hec
28 DATA &hb4,&h02
30 DATA &hb0,&h07
32 DATA &hbb,&h00,&he1
34 DATA &hb9,&h02,&h00
38 DATA &h8b,&h76,&h08
40 DATA &h8b,&h14
42 DATA &hcd,&h13
44 DATA &h07,  &h5d
45 DATA &hca,&h02,&h00
50 DEF SEG=0
52 FOR I=0 TO 30:READ J:POKE &HE000+I,J:NEXT
54 SIDE1!=&HE000
55 '
60 'read side 2 directory
61 DATA &h55,  &h06
62 DATA &hb8,&h00,&h00
63 DATA &h8e,&hc0
64 DATA &h8b,&hec
65 DATA &hb4,&h02
67 DATA &hb0,&h02
68 DATA &hbb,&h00,&hef
69 DATA &hb9,&h01,&h00
71 DATA &h8b,&h76,&h08
72 DATA &h8b,&h14
73 DATA &hcd,&h13
74 DATA &h07,  &h5d
75 DATA &hca,&h02,&H0
80 FOR I=0 TO 30:READ J:POKE &HE050+I,J:NEXT
82 SIDE2!=&HE050
99 '
100 DIM TYPES$(16):  LAST.TYPE= 16
110 DIM NA$(112), DT$(112), SZ$(112), TY$(112), DS$(112), DISK$(500)
140 ON ERROR GOTO 142:  GOTO 160
142 GOSUB 10000:  CLS
143 LOCATE 12,10: PRINT"Drive containing DISKCAT.DTA or N for new catalog:  ";
144 FL=-1:  GOSUB 270
145 IF IN$="N" THEN JUST.STARTING=YES: CLS: LOCATE 12,20: PRINT "Drive for DISKCAT.DTA:  ";: FL=-1: GOSUB 270: DRV$=IN$+":": RESUME 165
146 DRV$= IN$+":"
150 RESUME 160
155 '
160 OPEN DRV$+"diskcat.nfo" FOR INPUT AS 1:  ON ERROR GOTO 0
161 CLS:  LOCATE 10,30: PRINT "loading DISKCAT.NFO"
162 INPUT #1, NUM.DISKS, NUM.FILES
163 FOR I=1 TO NUM.DISKS:  INPUT #1, DISK$(I): NEXT:  CLOSE
165 ON ERROR GOTO 0:  CLOSE
170 FOR I=1 TO LAST.TYPE:  READ TYPES$(I):  NEXT    'change to taste:
180 DATA "Accounting"
181 DATA "Communica."
182 DATA "Data Base "
183 DATA "Demo      "
184 DATA "Finance   "
185 DATA "Games     "
186 DATA "Graphics  "
187 DATA "Informatn."
190 DATA "Music     "
191 DATA "Statistics"
192 DATA "Util-BASIC"
193 DATA "Util-DOS  "
194 DATA "Ut-Printer"
195 DATA "Util-Other"
196 DATA "Word Proc."
197 DATA "Other     "
210 GOTO 500
250 '
260 '''''''''''''''''''''inkey routine''''''''''''''''''
265 '
270 IN$="": W$=INKEY$: WD=0: WS=0: WL=0: SOUND 80,.03: MOVE.IT=NO
280 QX= POS(0):  QY=CSRLIN
290 QL=ABS(FL):  IF QL=1 THEN QP$="?" ELSE QP$=" "
300 COLOR BG,FG
310 PRINT STRING$(QL,QP$);: LOCATE QY,QX
320 IF PROMPT$<>"" THEN PRINT LEFT$(PROMPT$,QL);: PROMPT$=""
330 LOCATE QY,QX
340 COLOR BG,FG
350 W$=INKEY$: IF W$="" THEN 350
355 IF LEN(W$)=2 THEN MOVE.IT=YES: KY=ASC(RIGHT$(W$,1)): COLOR FG,BG: RETURN
360 IF W$=ESC$ THEN COLOR FG,BG:  GOTO 500
370 IF WL=0 THEN IF W$="-" OR W$="+" THEN IN$=W$: COLOR FG,BG: RETURN
380 IF QL=WL THEN 410
390 IF FL>0 AND W$>=" " AND W$<="z" THEN 450
400 IF FL<0 THEN IF W$>="a" AND W$<="z" THEN W$=CHR$(ASC(W$)-32):  GOTO 450         ELSE IF W$>=" " AND W$<"a" THEN 450
410 IF W$=CHR$(13) THEN GOTO 440
420 IF WL>0 AND W$=CHR$(8) THEN PRINT CHR$(29) " " CHR$(29);:  WL= WL-1:            IN$=LEFT$(IN$,WL)
430 GOTO 350
440 COLOR FG,BG: LOCATE QY,QX: PRINT IN$;SPC(QL-WL);: RETURN
450 IF WL=0 AND QL>1 THEN COLOR BG,FG: PRINT STRING$(QL," ");: LOCATE QY,QX
460 COLOR FG,BG: PRINT W$;: IN$=IN$+W$: WL=WL+1
470 IF QL=1 THEN 440 ELSE 340
471 '
475 LOCATE 25,29: PRINT "press"ENTR$"to continue";: FL=0: GOSUB 270
476 RETURN
480 '
500 '''''''''''''''''''''main menu''''''''''''''''''''''
505 CLS:  CLOSE
507 LOCATE 22,15
509 PRINT "Press  Esc  at any prompt to return to this menu.";
510 LOCATE 3,25:  PRINT"DISKCAT - DISK FILE CATALOG":  LOCATE 6,1
520 PRINT TAB(21) "1  Read a disk directory into the catalog"
530 PRINT TAB(21) "2  Add descriptions to file names"
540 PRINT TAB(21) "3  Give a disk its own catalog."
550 PRINT TAB(21) "4  Find all copies of one file."
560 PRINT TAB(21) "5  Display all files for a disk name."
570 PRINT TAB(21) "6  Display all disk names."
580 PRINT TAB(21) "7  Print a hardcopy catalog listing."
590 PRINT TAB(21) "8  Purge deleted files from catalog."
601 PRINT TAB(21) "9  End"
610 PRINT:PRINT
620 PRINT TAB(21) "    Select an option.";
630 LOCATE,21:  FL=-1:  GOSUB 270:  IF IN$="P" THEN 700
635 IF IN$="S" THEN 8000
640 ON VAL(IN$) GOTO 1000,3000,2000,4000,5000,6000,670,700,800:  GOTO 630
660 '
670 LOCATE 20,20: PRINT "Which drive is DC-SORT on?  ";
680 FL=1:  GOSUB 270:  CHAIN IN$+":dc-sort"
690 '
700 'purge deleted files:
701 '
705 GOSUB 1320   'open diskcat.dta
710 CLS: LOCATE 12,30:  PRINT "purging"
715 I=1:  J=1:  NM$="zzzzzzzz"
720 GET 1,I
725 IF A2$<>NM$ THEN PUT 1,J:  J=J+1  ELSE NUM.FILES= NUM.FILES -1
730 IF LEFT$(ALL$,1)="\" THEN  CLOSE:  GOTO 500
735 I=I+1
740 GOTO 720
790 '
800 'exit to DOS:
801 '
810 CLS: LOCATE 10,20
812 X=INT(RND*5):  ON X GOTO 820,825,830,835,899
820 PRINT "Turn out the lights, the party's over..."
821 SOUND 311,2: GOSUB 862: SOUND 311,2: GOSUB 862: SOUND 392,2: GOSUB 862:         SOUND 467,6: GOSUB 863: SOUND 392,2: GOSUB 862: SOUND 349,2: GOSUB 862:         SOUND 392,2: GOSUB 862: SOUND 349,2: GOSUB 862: SOUND 311,6:  GOTO 850
825 PRINT "Miller time..."
826 SOUND 392,2: GOSUB 862: SOUND 392,6: GOSUB 863: SOUND 392,2: GOSUB 862:         SOUND 349,2: GOSUB 862: SOUND 392,2: GOSUB 862: SOUND 424,6: GOTO 850
830 SOUND 2000,3: SOUND 1000,3: SOUND 1350,5
831 PRINT "Now, where did I put that Pac Man disk?": GOTO 850
835 SOUND 424,4: GOSUB 862: SOUND 311,2: GOSUB 860: SOUND 311,2: GOSUB 862:         SOUND 349,4: GOSUB 862: SOUND 311,6: GOSUB 861: PRINT "          THAT'S        ";: SOUND 392,5: GOSUB 862: SOUND 424,8: PRINT"ALL": GOTO 850
850 GOSUB 865: END
860 FOR I!=1 TO 300:  NEXT:  RETURN
861 FOR I!=1 TO 800:  NEXT:  RETURN
862 FOR I!=1 TO 400:  NEXT:  RETURN
863 FOR I!=1 TO 1000: NEXT:  RETURN
865 FOR I!=1 TO 2000: NEXT:  RETURN
899 GOTO 812
990 '
992 '''''''''''''''''''''add to catalog
994 '
1000 GOSUB 1080   'get disk name for files being added or quit
1010   IF QUIT THEN 500
1020 GOSUB 1600   'go read target disk
1025 GOSUB 1910   'sort disk filenames
1030 GOSUB 1320   'open DISKCAT.DTA file
1040 GOSUB 1440   'save last disk read
1050 GOTO 1000
1070 '
1080 CLS: LOCATE 11,30: PRINT "(Press" ENTR$ "to quit.)":  QUIT=NO
1090 LOCATE 10,20: PRINT "Name or Number of disk being read: ";
1100 FL= -8:  GOSUB 270:  NM$=LEFT$(IN$+SPACE$(8),8)
1110 IF IN$="" THEN QUIT = YES:  RETURN   ELSE I=1
1120 IF NUM.DISKS=0 THEN NUM.DISKS=1:  DISK$(1)= NM$:  RETURN
1130 IF DISK$(I)<>NM$ THEN I=I+1:  IF I <=NUM.DISKS THEN 1130                        ELSE NUM.DISKS=NUM.DISKS+1: DISK$(I)=LEFT$(NM$+SPACE$(8),8): RETURN
1140 CLS: LOCATE 10,30: PRINT "Name already used.":  LOCATE 12,1
1150 PRINT TAB(15) "1  Delete entries in DISKCAT.DTA for "NM$
1151 PRINT TAB(15) "2  Update the listing in DISKCAT.DTA for "NM$
1152 PRINT TAB(15) "3  Enter another disk name": PRINT: PRINT TAB(15) "";
1160 FL=1:  GOSUB 270:  X=VAL(IN$)
1165 IF X=2 THEN UPDATE=YES:  RETURN  ELSE UPDATE=NO
1170 IF X=3 THEN CLS:  GOTO 1080  ELSE IF X<>1 THEN 1140
1180 PRINT:  PRINT "Verify - "
1190 PRINT "Delete files already in the catalog with the disk name of "NM$;
1200 PRINT " (Y/N) ";:  FL= -1:  GOSUB 270:  IF IN$<>"Y" THEN 1080
1210 '
1220 CLS: LOCATE 12,30:  PRINT "deleting":  LOCATE 14,17
1221 PRINT "(Files are only being marked as deleted.":  LOCATE,5
1222 PRINT "Select Purge at the menu to clean deleted files out of catalog.)"
1230 FOR J= I TO NUM.DISKS:  DISK$(J)= DISK$(J+1): PRINT ".";:  NEXT:
1240 NUM.DISKS= NUM.DISKS -1
1250 GOSUB 1320    'open the DISKCAT.DTA file
1260 GET 1,I
1270 IF LEFT$(ALL$,1)="\" THEN  CLOSE:  GOTO 1080
1275 IF A2$= NM$ THEN LSET ALL$=FILL$:  PUT 1,I
1280 I=I+1
1290 GOTO 1260
1310 '
1320 ON ERROR GOTO 1330:  GOTO 1380
1330 CLS:  LOCATE 12,15
1340 PRINT "Press"ENTR$"when disk with DISKCAT.DTA is in drive "DRV$
1350 FL=0:  GOSUB 270
1360 IF JUST.STARTING THEN JUST.STARTING= NO: RESUME 1390 ELSE RESUME 1380
1370 '
1380 OPEN DRV$+"diskcat.dta" FOR INPUT AS #1:  CLOSE
1390 OPEN DRV$+"diskcat.dta" AS 1 LEN=74:  ON ERROR GOTO 0
1400 FIELD 1, 12 AS A1$, 8 AS A2$, 10 AS A3$, 25 AS A4$, 10 AS A5$, 7 AS A6$,        2 AS A7$:  LSET A7$=CHR$(13)+CHR$(10)
1410 'na:12  dsk:8  type:10  descr:25  dt:10  size:7
1420 FIELD 1, 74 AS ALL$
1430 RETURN
1440 LSET A2$= NM$: LSET A3$= SPACE$(10):  LSET A4$= SPACE$(25)
1444 IF UPDATE THEN 9000
1445 CLS: LOCATE 1,30: PRINT "Adding to catalog"
1450   FOR I=1 TO LAST.FILE
1460 LSET A1$= NA$(I)
1470 LSET A5$= DT$(I)
1480 LSET A6$= SZ$(I)
1485 PRINT A2$"  "A1$"  "A5$"  "A6$
1490 PUT 1, NUM.FILES +I
1500   NEXT
1510 NUM.FILES= NUM.FILES +LAST.FILE
1520 LAST.FILE= 0
1530 '
1540 LSET ALL$="\":  PUT 1:  CLOSE
1550 ON ERROR GOTO 1330
1560 OPEN DRV$+"diskcat.nfo" FOR OUTPUT AS 1:  ON ERROR GOTO 0
1570 WRITE #1, NUM.DISKS:  WRITE #1, NUM.FILES
1580 FOR I=1 TO NUM.DISKS:  WRITE #1, DISK$(I):  NEXT:  CLOSE
1590 RETURN
1600 '
1610 CLS:  LOCATE 11,20
1620 PRINT "(Press Esc to Quit)":  LOCATE 10,10
1630 PRINT "Which floppy (Left or Rt.) has the disk to be read?  ";
1640 FL= -1:  GOSUB 270
1660 IF IN$="L" THEN IN$="A" ELSE IF IN$="R" THEN IN$="B" ELSE 1640
1670 DRV.2$= IN$
1680 '
1690 CLS:IF DRV.2$="A" THEN B=0 ELSE B=1
1700 DEF SEG=0
1710 CALL SIDE1! (B)  'read directory into high mem. (up to 64 files)
1711 IF PEEK(&HE100)=&HFF THEN B=B+256: CALL SIDE2! (B): S2=1536  ELSE S2=0
1720 CLS:  F=1:  BUF= &HE100+1024
1730 '
1740     FOR I=0 TO 2016+S2 STEP 32
1750 F$="":  IF PEEK(I+BUF)=&HE5 THEN 1880  'skip deleted files
1755 IF PEEK(I+BUF)=32 THEN I=2016+S2: GOTO 1880
1760 FOR J=0 TO 7:  F$= F$ +CHR$(PEEK(J+I+BUF)):  NEXT:  F$= F$ +"."
1770 FOR J=8 TO 10: F$= F$ +CHR$(PEEK(J+I+BUF)):  NEXT
1780 MO$ = STR$((PEEK(I+BUF+&H19) AND 1)*8 + ((PEEK(I+BUF+&H18) AND 224)/32))
1790 IF LEN(MO$)>2 THEN MO$=RIGHT$(MO$,2)
1800 DAY$ = STR$(PEEK(I+BUF+&H18) AND 31)
1810 IF LEN(DAY$)>2 THEN DAY$=RIGHT$(DAY$,2)
1820 YR$ = RIGHT$(STR$((INT(PEEK(I+BUF+&H19)/2))+1980),4)
1830 D8$=MO$+"/"+DAY$+"/"+YR$
1840 SIZE!=PEEK(I+BUF+&H1C)+(PEEK(I+BUF+&H1D)*256)+(PEEK(I+BUF+&H1E)*65536!)
1845 IF SIZE! > 360000! THEN I=2016+S2:  GOTO 1880
1846 IF SIZE!<0 THEN SIZE!= 65536! +SIZE!
1850 LOCATE ,15:  PRINT F$; "    ";
1860 PRINT "  " D8$ " " SIZE!
1870 NA$(F)=F$:  DT$(F)= D8$:  SZ$(F)= STR$(SIZE!):  F=F+1
1880     NEXT
1890 LAST.FILE= F -1
1900 RETURN
1901 '
1905 '''''''''''''sort filenames:
1906 '
1910 CLS:  LOCATE 12,30:  PRINT"Sorting file names"
1915 M=LAST.FILE:  N=M:  C=0
1920 M=INT(M/2):IF M=0 THEN  RETURN  ELSE J=1: K=N-M
1925 I=J
1930 L=I+M:  C=C+1
1935 IF NA$(I) < NA$(L) THEN 1950
1937 SWAP DT$(I),DT$(L):  SWAP SZ$(I),SZ$(L)
1940 SWAP NA$(I),NA$(L):  I=I-M:  IF I=>1 THEN 1930
1945 I=I-M:  IF I=>1 THEN 1930
1950 J=J+1:  IF J>K THEN 1920 ELSE 1925
1990 '
2000 ''''''''''''''give disk its own catalog:
2001 '
2010 GOSUB 2420  'get disk name
2020 GOSUB 1310  'open DISKCAT.DTA file
2030 GOSUB 2320  'get files for the disk
2040 GOSUB 2080  'create directory file
2050 GOTO 500
2060 '
2080 CLS: LOCATE 10,10
2090 PRINT "Place "DSK$" disk in drive and enter drive spec. (A-H): ";
2100 FL=-1:  GOSUB 270: IF IN$<"A" OR IN$>"H" THEN 2080
2110 CLS: LOCATE 10,30: PRINT"Saving as DIR-LIST"
2120 OPEN IN$+":DIR-LIST" AS 1 LEN=56
2130 FIELD 1, 16 AS NM$, 13 AS TYP$, 25 AS DES$, 2 AS CR$
2135 FIELD 1, 54 AS A$, 2 AS Y$
2140 I=1:  LSET CR$=CHR$(13)+CHR$(10)
2145 LSET A$="FILE NAME       FILE TYPE           DESCRIPTION":  PUT 1
2146 LSET A$="-------------   ----------   -------------------------":  PUT 1
2150 FOR I=1 TO LAST.IN.DIR
2160   LSET NM$=NA$(I):  LSET TYP$=TY$(I):  LSET DES$=DS$(I)
2170   PUT 1
2180 NEXT:  CLOSE
2190 RETURN
2200 '
2300 '''''''''''''read all files in for one disk:
2310 '
2320 I=1:  GOSUB 2375
2330 FOR J=1 TO NUM.FILES
2340   GET 1,J:  IF A2$<>DSK$ THEN 2360
2350   NA$(I)=A1$:  TY$(I)=A3$:  DS$(I)=A4$:  I=I+1
2355   PRINT  A1$ "  " A3$ "  " A4$ "  " A5$ "  " A6$
2356   IF I MOD 20=0 AND J<NUM.FILES THEN GOSUB 475: GOSUB 2375
2360 NEXT:  CLOSE:  LAST.IN.DIR= I-1
2370 RETURN
2375 CLS:  PRINT TAB(30) "Contents of "DSK$:  PRINT:  RETURN
2380 '
2400 ''''''''''''''get name of disk in catalog:
2410 '
2420 CLS: LOCATE 12,15
2425 PRINT "Enter name or press  + or -  to scroll disk names."
2430 PRINT TAB(29) "(Press Esc to cancel.)"
2440 LOCATE 10,30:  PRINT "Disk name:  ";:  I=1
2450 PROMPT$= DISK$(I):  FL=-8:  GOSUB 270
2460 IF IN$="+" THEN IF I<NUM.DISKS THEN I=I+1: GOTO 2450 ELSE I=1: GOTO 2450
2470 IF IN$="-" THEN IF I>1 THEN I=I-1: GOTO 2450 ELSE I=NUM.DISKS: GOTO 2450
2480 IF IN$="" THEN 2500  ELSE DSK$= IN$:  I=1
2490 IF DISK$(I) <> DSK$  THEN  IF I<NUM.DISKS THEN I=I+1:  GOTO 2490                  ELSE LOCATE 15,30:  PRINT "NO MATCH.":  LOCATE 10,42:  GOTO 2450
2500 DSK$= LEFT$(DISK$(I)+SPACE$(8),8)
2510 RETURN
3000 '
3010 '''''''''''''''''''''''add descriptions
3020 '
3030 CLS: PRINT"FILE TYPES:"
3040 FOR I=1 TO 4:  FOR J= I TO 16 STEP 4
3050   PRINT USING "   ##  &"; J; TYPES$(J);
3060 NEXT:  PRINT:  NEXT:  LOCATE 10,1
3070 PRINT"    Name           Disk           Type              Description"
3080 PRINT"------------     --------      ----------   -------------------------":   LOCATE 14,1
3085 PRINT"============     ========      ==========   =========================":   LOCATE 8,2
3090 PRINT"(Enter one of the above #'s for file type or input a new type.)":         LOCATE 18,9: PRINT "Hold  [Alt]  and press key indicated for:":PRINT
3100 PRINT"[P] Prior entry.  [F] Find file.  [D] Find disk.  [K] Kill entry.  [Q] Quit."
3110 OPEN DRV$+"diskcat.dta" AS 1 LEN=74:  I=1
3120 FIELD 1, 12 AS A1$, 8 AS A2$, 10 AS A3$, 25 AS A4$, 10 AS A5$, 7 AS A6$,                 2 AS A7$:  FIELD 1, 74 AS ALL$:  FIELD 1, 1 AS T$
3130 LOCATE 13,1
3140 GET 1,I: LOCATE,1: IF LEFT$(A1$,1)="\" THEN 3270 ELSE PRINT TAB(79);
3141 IF T$ <> "z" THEN 3150
3142 IF KY<>25 OR I=1 THEN I=I+1 ELSE I=I-1
3143 KY=0:  GOTO 3140
3150 COLOR FG,BG:  LOCATE,1: PRINT A1$ TAB(18) A2$;:  TY$=A3$:  DS$=A4$
3160 LOCATE,32:  FL=10:  PROMPT$=A3$:  GOSUB 270:  T= VAL(IN$)
3161 IF NOT MOVE.IT THEN 3170
3165  IF KY=16 THEN 500 ELSE IF KY=25 THEN I=I+(I>1) ELSE IF KY=32 THEN GOSUB         3510 ELSE IF KY=33 THEN GOSUB 3350 ELSE IF KY=37 THEN GOTO 3700 ELSE 3150
3166  GOTO 3140
3170 IF LEN(IN$)<3 THEN IF T>0 AND T<=LAST.TYPE  THEN IN$=TYPES$(T)
3180 IF IN$<>"" THEN TY$= IN$
3190 LOCATE,32:  PRINT TY$;:  LSET A3$= TY$
3200 LOCATE,45:  FL=25:  PROMPT$=A4$:  GOSUB 270
3205 IF MOVE.IT THEN LOCATE,45: PRINT A4$;:  GOTO 3150
3210 IF IN$<>"" THEN LSET A4$= IN$: LOCATE,45: PRINT A4$;
3230 PUT 1,I:  I=I+1
3240 LOCATE,1: COLOR,FG: PRINT TAB(70);: COLOR,BG
3250 GOTO 3140
3252 '
3255 '''''''end routine:
3270 GOTO 500
3320 '
3330 ''''''''''find a file:
3340 '
3350 LOCATE 25,15
3360 PRINT "Enter all or part of file name:  ";:  F=1
3370 FL=-12:  GOSUB 270:  X$=IN$
3380 GET 1,F
3390 IF LEFT$(A1$,1)= "\" THEN 3460
3400 IF INSTR(A1$,X$) =0 THEN F=F+1:  GOTO 3380
3401 LOCATE,5:  COLOR BG,FG:  PRINT A1$;:  COLOR FG,BG
3405 PRINT " is on the disk named ";:  COLOR BG,FG
3410 PRINT A2$;:  COLOR FG,BG
3412 X=INT(RND*7):  ON X GOSUB 3481,3482,3483,3484,3485,3486,3487
3413 PRINT "  " I$ "?  (Y/N) ";
3420 FL=-1:  GOSUB 270
3430 IF IN$<>"Y" THEN F=F+1:  GOTO 3380
3440 I=F:  LOCATE,5: COLOR FG,BG: PRINT SPC(70);: LOCATE 13,1: RETURN
3460 LOCATE,5:  PRINT SPC(20) "No match.  Press"ENTR$ SPACE$(33);
3470 FL=0:  GOSUB 270: LOCATE 25,15: PRINT SPACE$(60);:  LOCATE 13,1
3480 RETURN
3481 I$="     Is this it":  RETURN
3482 I$="       This one":  RETURN
3483 I$="   How about it":  RETURN
3484 I$="This must be it":  RETURN
3485 I$="   Close enough":  RETURN
3486 I$=" Can I stop now":  RETURN
3487 I$="     Is this it":  RETURN
3490 '
3500 ''''''''''''''''''''find a disk:
3510 LOCATE 25,15
3520 PRINT "Enter all or part of disk name:  ";:  F=1
3530 FL=-8:  GOSUB 270:  X$=IN$: IF X$="" OR X$=CHR$(27) THEN RETURN
3540 GET 1,F
3550 IF LEFT$(A1$,1)= "\" THEN 3620
3560 IF INSTR(A2$,X$) =0 THEN 3610
3570 LOCATE,15:  PRINT A2$ "     Is this it? (Y/N) ";
3580 FL=1:  GOSUB 270
3590 IF IN$<>"y" AND IN$<>"Y" THEN 3610
3600 I=F:  LOCATE,15: COLOR FG,BG: PRINT SPC(50);: LOCATE 13,1: RETURN
3610 F= F+1:  GOTO 3540
3620 LOCATE,15:  PRINT SPC(10) "No match.  Press Enter." SPC(20);
3630 FL=0:  GOSUB 270: LOCATE,15: PRINT SPC(60);:  LOCATE 13,1
3640 RETURN
3699 '
3700 ''''''''''''delete an entry
3701 '
3710 LSET ALL$= FILL$:  PUT 1,I: I=I+1:  GOTO 3140
3999 '
4000 '''''''''''''find all copies of one file
4001 '
4010 GOSUB 1320   'open DISKCAT.DTA
4020 CLS: LOCATE 10,15
4030 GOSUB 3360   'input file name
4040 GOTO 500
4999 '
5000 '''''''''''''display all files for a disk name:
5001 '
5010 GOSUB 2420  'get disk name
5020 GOSUB 1310  'open DISKCAT.DTA file
5030 GOSUB 2320  'get files & display them
5040 GOSUB 475   'press Enter...
5050 GOTO 500
5999 '
6000 ''''''''''''''display all disk names:
6001 '
6010 CLS:  L=3: TB=2:  PRINT TAB(27) "Names of Disks in Catalog": PRINT
6020 FOR I=1 TO NUM.DISKS
6030   LOCATE L,TB: PRINT DISK$(I);:  L=L+1
6040   IF L=21 THEN L=3: IF TB<72 THEN TB=TB+10 ELSE GOSUB 475: CLS: TB=2
6050 NEXT
6060 GOSUB 475
6070 GOTO 500
8000 '
8005 '''''''''''''sort disk names:
8006 '
8010 CLS:  LOCATE 12,30:  PRINT"Sorting disk names"
8015 M=NUM.DISKS:  N=M:  C=0
8020 M=INT(M/2):IF M=0 THEN  500  ELSE J=1: K=N-M
8025 I=J
8030 L=I+M:  C=C+1
8035 IF DISK$(I) < DISK$(L) THEN 8050
8040 SWAP DISK$(I),DISK$(L):  I=I-M:  IF I=>1 THEN 8030
8045 I=I-M:  IF I=>1 THEN 8030
8050 J=J+1:  IF J>K THEN 8020 ELSE 8025
9000 'update files   (branches here from 1444)
9005 CLS:  START=1
9010   FOR I=1 TO NUM.FILES
9012 J= START
9020 GET 1,I:  IF A2$ <> NM$ THEN 9110
9030 IF A1$ = NA$(J) THEN LSET A5$= DT$(J):  LSET A6$= SZ$(J):  PUT 1,I:             START= START -(J=START+1): NA$(J)= SPACE$(12): GOTO 9110
9040 IF A1$ < NA$(J) THEN 9070
9060 IF J < LAST.FILE THEN J=J+1:  GOTO 9030
9070 LSET ALL$= FILL$:  PUT 1,I
9110   NEXT
9120 LSET A2$= NM$:  LSET A3$= SPACE$(10):  LSET A4$= SPACE$(25)
9200   FOR I=1 TO LAST.FILE
9210 IF NA$(I)= SPACE$(12) THEN 9250
9220 LAST.FILE= LAST.FILE +1
9230 LSET A1$= NA$(I):  LSET A5$= DT$(I):  LSET A6$= SZ$(I)
9240 PUT 1,LAST.FILE
9250   NEXT
9260 CLOSE:  RETURN
9999 '''
10000 IF ALREADY.DID.THIS THEN RETURN ELSE ALREADY.DID.THIS = YES
10005 WIDTH 40: CLS:  LOCATE 10,16,0
10010 PRINT "DISKCAT";:  I$="CAT"
10020 X=VAL(RIGHT$(TIME$,1)): WHILE ABS(VAL(RIGHT$(TIME$,1))-X)<2:WEND
10030 LOCATE 10,20: PRINT " ";: LOCATE 12,16: PRINT "C";: SOUND 311,1
10040 GOSUB 10360
10050 LOCATE 10,21: PRINT " ";: LOCATE 12,17: PRINT "A";: SOUND 392,1
10060 GOSUB 10360
10070 LOCATE 10,22: PRINT " ";: LOCATE 12,18: PRINT "T";: SOUND 467,1
10080 X=VAL(RIGHT$(TIME$,1)): WHILE ABS(VAL(RIGHT$(TIME$,1))-X)<2:WEND
10090 PRINT "A";: SOUND 467,1: GOSUB 10370
10100 PRINT "L";: SOUND 424,1: GOSUB 10370
10110 PRINT "O";: SOUND 392,1: GOSUB 10370
10120 PRINT "G";: SOUND 349,1: GOSUB 10370
10130 LOCATE 14,16:  PRINT "PROGRAM":  SOUND 311,2
10140 LOCATE 18,5: PRINT "(C) Copyright  Nelson Ford  1983": PRINT
10150 PRINT TAB(12) "P.O. Box 61565"
10160 PRINT TAB(12) "Houston, Tx 77208"
10170 PRINT TAB(12) "Source:  ST3564"
10180 GOSUB 863
10190 LOCATE 10,20:PRINT " "CHR$(8)" ";:  SOUND 37,20
10200 LOCATE 24,8
10210 PRINT"press"ENTR$"to continue";
10220 FL=0:  GOSUB 250:  WIDTH 80:  CLS:  X=20
10225 LOCATE 6,30: PRINT "Freebie-Ware"
10230 LOCATE 8,X
10240 PRINT"If you find this program useful";
10241 T=VAL(RIGHT$(TIME$,1)): WHILE ABS(VAL(RIGHT$(TIME$,1))-T)<3:WEND
10250 PRINT TAB(X)"  bring money."
10251 PRINT TAB(X)"Lots of it."
10252 PRINT TAB(X)"In a brown paper bag."
10260 PRINT TAB(X)"No bills larger than a $20."
10270 PRINT TAB(X)"No consecutive serial numbers."
10280 PRINT TAB(X)"Drive to the park and leave the money on"
10290 PRINT TAB(X)"  the third park bench by the yellow can."
10300 PRINT TAB(X)"This is not a joke.  Someone will be watching"
10310 PRINT TAB(X)"  your house to see if you use this program."
10320 LOCATE 24,X
10330 PRINT"Press"ENTR$"when you've got the money ready.";
10340 FL=0:  GOSUB 250:  LOCATE ,,0
10350 RETURN
10360 FOR I!=1 TO 600: NEXT:  RETURN
10370 FOR I!=1 TO 300: NEXT:  RETURN
```

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0070

     Volume in drive A has no label
     Directory of A:\

    PAGE     BAT        68   7-28-83   2:29a
    PAGES    KIP         4   7-28-83   2:30a
    PAGESKIP DOC       564   7-28-83   2:30a
    SMALLPR  INT        11   7-28-83   2:30a
    SMALLPRT BAT        80   7-28-83   2:21a
    SMALLPRT DOC       664   7-28-83   2:26a
    UNSMALLP BAT       124   7-28-83   2:23a
    UNSMALLP DOC       602   7-28-83   2:31a
    UNSMALLP RNT        11   7-28-83   2:31a
    DISKCAT  BAS     21376   7-27-83
    DISKCAT  EXE     44672   7-27-83
    DISKCAT  DOC      5373   7-27-83
    DC-SORT  BAS      7040   7-27-83
    DC-SORT  EXE     27136   7-27-83
    VPRINT   COM      1408   2-13-83  12:46a
    VPRINT   ASM      8065   2-13-83  12:15a
    VPRINT   DOC      1742   2-05-83  12:14a
    DIRMANIP EXE      9728   6-06-82
    VIRTUAL  PRN       512   8-28-83  12:33p
    CRC      TXT      1451  11-09-84  11:31a
    CRCK4    COM      1536  10-21-82   7:54p
           21 file(s)     132167 bytes
                           22528 bytes free
