---
layout: page
title: "PC-SIG Library Disk #376"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0376/
machines:
  - id: ibm5160
    type: pcx86
    config: /machines/pcx86/ibm/5160/cga/256kb/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk 0376"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5160" %}

{% comment %}info_begin{% endcomment %}

## Information about "PATCHES"

    PATCHES is our mega-collection for unprotecting and patching specific
    programs.  The programs on this disk allow you to place the indicated
    programs on your hard disk or to make backup copies, inspect file
    descriptions, and includes a multitude of information on such subjects
    as BASIC patches, CLOCKS, VisiCalc back-up, WORDSTAR 3.3 PATCH FOR PC
    AT.  There is even a demonstration of building and searching a tree
    structure, and how to run a non-serialized program with PRO Basic.
    
    Check carefully to be sure your program's unprotect program is here by
    version.
    
    System Requirements: Some programs require BASIC
    
    How to Start: Except for three litte BASICs, these are all
    documentation files (suffix .UNP (for unprotect), .DOC (for DOCument),
    or .TXT (for TeXT) files.  Screen read with TYPE, then PRINT what you
    need.
    
    File Descriptions:
    
    123      UNP  How to make backup copy of 123 (& run without key disk)
    123A     UNP  How to make backup copy of 123 Ver A (& run w/o key disk)
    123-LOGO PAT  How to eliminate 123 logo page
    DB3ZAP   BAT  Batch file for unprotecting DBIII
    BASRUN   PAT  Latest BASRUN patches
    BASLIB   PAT  Latest BASLIB patches
    BASCOM   PAT  Latest BASCOM patches
    BASCOM   FIX  Documentation for patching bugs in Basic Compiler Ver 1.0
    NEWCOLOR 123  Changes colors displayed by original 123
    8088     TXT  How to identify defective 8088 chips which crash systems
    123STAR  UNP  How to make backup copy of 123 Ver A*
    EWBACKUP UNP  How to make backup copy of EasyWriter 1.0
    DSKCPY20 MOD  Modifies DISCOPY to eliminate messages to user
    DOS_ERR  DOC  How to fix 'C' programs to bypass DOS 2.0 redirection bug
    FRMWK1   DOC  How to make backup copy of Framework Ver 1.0
    DOSBUG   MOD  Fixes DOS 1.1 bug relating to random access I/O
    DB3-NEW  DOC  Documentation for DB3ZAP.UNP and DB3ZAP.BAT
    COMMOD   TXT  Adds resident commands to COMMAND.COM
    VCBACKUP DOC  How to backup VisiCalc disk (1982 version)
    COMMAND  MOD  Makes transient portion of COMMAND.COM be resident at IPL
    COMCOM20 PAT  DOS 2.0 patch parameters for COMMAND.MOD
    CLOCKFIX SYS  Installable driver to replace PC DOS2.0 CLOCK$
    CLOCKFIX DOC  Info on PC DOS 2.0 CLOCK$; not to change date at midnight
    XTALK    PAT  Bypass the sign-on screen on Crosstalk Rel 3.4
    FILECMD  PAT  Add color to IBM's FileCommand
    C86MOD   DOC  Enables C86 function MAIN to return error code to DOS 2.0
    DB3ZAP   UNP  Parameters needed by DB3ZAP.BAT
    FIND     MOD  Patch to eliminate header inserted by DOS 2.X FIND filter
    PROKEY   UNP  How to backup PROKEY V3.0
    PRINT20  DOC  Patch so DOS 2.0 PRINT.COM skip prompt for list device
    POOLCOPY DOC  Patch to fix POOLCOPY monitor bug and to make backup copy
    PE-LOGO  PAT  Patch to eliminate logo screen on IBM Personal Editor
    PE-COLR  MOD  Patch to set colors in IBM Personal Editor
    FRMWK1   UNP  Parameters needed by FRMWK1.BAT
    PCM      UNP  How to make copy of IBM Personal Comm. Manager V 1.0
    PATCHER  BAS  How to patch other programs using patch (.PAT) data file
    FRMWK1   BAT  Batch file to backup Framework (see FRMWK1.DOC)
    NORTONS  MOD  Patch to Norton Utilities V2.01: access tracks above #39
    MEMSHIFT UNP  How to make backup copy of MEMORY/SHIFT
    LAYOUT   UNP  How to make backup copy of PROKEY 3.0
    JRAM123  MOD  How to use 123 V1.0 with JRAM memory board in IBM-XT
    GENPATCH BAS  Generates patches for PATCHER.BAS
    FORMAT20 MOD  Patch to cause DOS 2.0 FORMAT to prompt for volume label
    FLT-SIM  MOD  Allows RGB monitor to show colors using Flight Simulator
    DB3      UNP  Used in conjunction with DB3ZAP.UNP
    SK100A   UNP  How to backup Side Kick 1.00A (another version)
    SK110A   UNP  How to backup Side Kick 1.10A (another version)
    NEWCOLOR IN   Unidentified color patches
    RESCMD   DOC  Documentation to RESCMD.BAS
    RESCMD   BAS  Program to make COMMAND.COM totally memory resident
    XTFORMAT DOC  Batch utility for PC XT allows user to format A: only
    TIME-MGR UNP  How to backup IBM Time Manager
    SAMNA    UNP  How to backup SAMNA WORD II Ver 1.1
    COPYWRIT UNP  How to backup Copywrit
    RB4000   UNP  How to backup RB4000 Ver 1.11
    TKSOLVER UNP  How to backup TK Solver Ver TK-1(2J)
    CLOUT384 UNP  How to backup Clout V1.0 384K Disk 1
    CLOUT256 UNP  How to backup Clout V1.0 256K Disk 1
    WS33-AT  PAT  Patch to allow Wordstar 3.3 to work properly on the PC AT
    MSWORD   UNP  How to backup Microsoft Word
    BASIC2   MOD  Patch to fix LOF bug in BASIC and BASICA 2.0
    ML28-30  UNP  How to backup MultiLink Ver 2.08,2.08c, and 3.00c
    --NOTICE ---  Information on copyright law and file extensions
    SYMPHONY UNP  Program to run Symphony Ver 1.0 without a key disk
    SYMPH    COM  Executable version of program given in SYMPHONY.UNP
    SYMPH    DOC  Explanation of the instructions for SYMPHONY.UNP
    TREE     BAS  Demonstrates building and searching a tree structure
    SARGON3  UNP  How to backup Sargon 3
    ZORK3    UNP  How to backup Zork III
    ZORK12   UNP  How to backup Zork I and Zork II
    FLGHTSIM UNP  How to backup Microsoft Flight Simulator Ver 1.00
    MLINK207 UNP  How to backup MultiLink Ver 2.07
    SK111A   UNP  How to backup Side Kick Ver 1.11A
    MULTILNK UNP  How to backup MultiLink Ver 2.06
    MLINK206 UNP  Notes to accompany MULTILNK.UNP
    TKNEW    UNP  How to backup TK Solver TK-1(2J)/PC-DOS/IBM5150
    SK       UNP  How to backup Side Kick Ver 1.00A
    XENOCOPY UNP  How to backup Xenocopy Plus Ver 1.09
    TIMEMGR  UNP  How to backup Time Manager Ver 1.00
    SK111C   UNP  How to backup Side Kick Ver 1.11C
    TANK     UNP  How to backup ThinkTank Ver 1.00 and Ver 1.001
    PFS-PROG UNP  How to backup PFS File/Report/Write
    HPMV116  UNP  How to backup Harvard Project Manager V1.16
    HARVARD  UNP  How to backup Harvard Project Manager V1.1
    PROBASIC UNP  Run a non-serialized program with Pro Basic by Morgan
    PCDRAW14 UNP  How to backup PC-Draw V1.4
    PCDRAW   UNP  How to backup PC-Draw V1.2
    MLINK    UNP  How to backup Multilink 2.07
    FLTSIM   UNP  How to backup Flight Simulator Ver 1.00
    EXECUVSN UNP  How to backup ExecuVision for Dos 1.1
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## GENPATCH.BAS

```bas
10 'GENPATCH - generates patches for PATCHER.BAS
20 'Copyright 1983 - Data Base Decisions, Atlanta, GA
90 'If offset is greater than 32,767, BAIC 2.00 must be used.
100 'DOS 2.00 should be used. If this is not possible, use RAM disk.
120 CLS
130 DEFINT A-Z
140 CLEAR
150 ON ERROR GOTO 510
160 INPUT "Old version of file";OFIL$
170 OPEN "i",#1,OFIL$   'check it is there
180 CLOSE 1
190 OPEN "r",#1,OFIL$,1 'open as random
200 FIELD 1,1 AS O$
210 INPUT "New version of file";NFIL$
220 OPEN "i",#2,NFIL$   'check it is there
230 CLOSE 2
240 OPEN "r",#2,NFIL$,1 'open as random
250 FIELD 2,1 AS N$
260 INPUT "File in which to save patches";DIF$
270 TMP$="GENPATCH.TMP"
280 OPEN "o",#3,TMP$    'write to temp file
290 FOR BYTE!=1 TO LOF(1)       'compare the bytes
300 GET 1,BYTE!
310 GET 2,BYTE!
320 IF O$=N$ THEN PRINT "*";: GOTO 380   'they are equal
330 OLDVAL=ASC(O$)      'convert to ascii
340 NEWVAL=ASC(N$)
350 PRINT #3, BYTE! "," OLDVAL "," NEWVAL
360 NEWSUM!=NEWSUM!+BYTE!+OLDVAL+NEWVAL  'keep checksum
365 PRINT: PRINT BYTE!, OLDVAL, NEWVAL,"Checksum ",NEWSUM!
370 IF NEWSUM! > 32767 THEN NEWSUM!=NEWSUM!-32767: GOTO 370
380 NEXT BYTE!
390 CLOSE
400 OPEN "i",#1,TMP$    'copy temp file to patch file
410 OPEN "o",#2,DIF$
420 PRINT "Comments to be put in " DIF$;: INPUT  ""; COMMENT$
430 PRINT #2,NFIL$ "," NEWSUM! "," CHR$(34) COMMENT$ CHR$(34)   'add record
440 IF EOF(1) THEN 480
450 LINE INPUT# 1, X$
460 PRINT #2, X$
470 GOTO 440    'copy another record across
480 CLOSE
490 KILL TMP$   'delete temp file
500 END
510 REM *** error handler ***
520 UNABLE$="Unable to "
530 IF ERL=170 OR ERL=190 OR ERL=300 THEN PRINT UNABLE$ "read " OFIL$
540 IF ERL=220 OR ERL=240 OR ERL=310 THEN PRINT UNABLE$ "read " NFIL$
550 IF ERL=280 OR ERL=350 THEN PRINT UNABLE$ "write " TMP$
560 IF ERL=400 OR ERL=450 THEN PRINT UNABLE$ "read " TMP$
570 IF ERL=410 OR ERL=460 THEN PRINT UNABLE$ "write " DIF$
580 IF ERL=490 THEN PRINT UNABLE$ "delete " TMP$
590 RESUME 130
```

## PATCHER.BAS

```bas
10 'PATCHER - file patching program - PROGRAMMERS JOURNAL Vol 1, No 6, Pg. 21
20 'Copyright 1983 - Data Base Decisions, Atlanta, GA
30 'This program is used to patch other programs or files. It requires
40 'a data file containing the patches. The first three items in the
50 'patch file are the name of the file to be patched, a check sum, and
60 'comments. For each byte to be patched, there is one record containing
70 'the offset of the byte to be patched, the old value of the byte,
80 'and the new (patch) value.
90 'Patches are generated using program  GENPATCH.BAS
100 'Note: If the offset is greater than 32,767, BASIC 2.00 must be used.
110 CLS
120 DEFINT A-Z
130 CLEAR
140 ON ERROR GOTO 500
150 CLOSE
160 PRINT : INPUT "Name of file containing patches";PAT$
170 IF PAT$="" THEN  END
180 OPEN "i",#1,PAT$
190 INPUT #1,FIL$,CKSUM!,COMMENT$
200 OPEN "i",#2,FIL$    'is it there
210 PRINT "Patching: " FIL$
220 PRINT "Comments: " COMMENT$
230 CLOSE 2
240 OPEN "r",#2,FIL$,1  'reopen as random file
250 FIELD 2,1 AS R$
260 FILE.LEN = LOF(2)
270 IF EOF(1) THEN 450
280 INPUT# 1,BYTE!,OLDVAL,NEWVAL	'get patch
290 NEWSUM!=(NEWSUM!+BYTE!+OLDVAL!+NEWVAL!)
300 PRINT BYTE!,OLDVAL,NEWVAL, "Checksum " NEWSUM!
310 IF NEWSUM! > 32767 THEN NEWSUM!=NEWSUM!-32767: GOTO 310
320 IF BYTE! > FILE.LEN THEN PRINT "Byte " BYTE! " is beyond end of file": GOTO 400
330 GET 2,BYTE!
340 R=ASC(R$)
350 IF R <> OLDVAL THEN PRINT "Old value for byte " BYTE! " is " R " not " OLDVAL: GOTO 400
360 LSET R$=CHR$(NEWVAL)
370 PUT 2,BYTE!
380 APPLIED=APPLIED+1
390 GOTO 270
400 REM *** invalid condition ***
410 BEEP:INPUT "Continue (y/n)";ANS$
420 IF ANS$="Y" OR ANS$="y" THEN 390
430 IF ANS$="N" OR ANS$="n" THEN 450
440 GOTO 400
450 REM *** wrap it up ***
460 IF CKSUM!=NEWSUM! THEN PRINT "Checksums match" ELSE PRINT "Checksums do not match -- input value is"CKSUM! " and calculated value is "NEWSUM!: BEEP
470 PRINT "Patches applied: " APPLIED
480 CLOSE
490 END
500 REM *** error handler ***
510 UNABLE$="Unable to "
520 IF ERL=180 OR ERL=280 THEN PRINT UNABLE$ "read " PAT$
530 IF ERL=200 OR ERL=240 OR ERL=330 THEN PRINT UNABLE$ "read " FIL$
540 IF ERL=370 THEN PRINT UNABLE$ "write " FIL$
550 RESUME 120
```

## RESCMD.BAS

```bas
100 '
200 ' COMMAND.COM   MODIFICATION TRANSFER PROGRAM
300 '               "RESCMD.BAS"                   Last Update 11/26/82
400 '
350 '                                              John Chapman
351 '                                              CIS 70205,1217
500 'This program will read in an unmodified COMMAND.COM (Release 1.1)
600 '     and produce an output file called COMMAND.CMD.. which can be
700 '     renamed to COMMAND.COM.. This output file will contain all of 
800 '     the modifications to COMMAND.COM currently available from the
900 '     author. See COMMAND.DOC for complete list and limitations.
910 '
950 DEFINT A-Z
1000 BFIL$ = "COMMAND.COM"
1100 CFIL$ = "COMMAND.CMD"
1200 INPUT "Enter Drive where COMMAND.COM resides",DRV$
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
5000 data  865, 70, 84, 868, 3, 79, 869, 1, 4
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

## TREE.BAS

```bas
5 DEFINT A-Z
10 DIM RKEY(125),RLINK(125),LLINK(125)
12 FALSE=0:TRUE=1:N=0:ROOT=1:NIL=0
14 EMPTY=FALSE
16 REM
22 REM *** GENERATE DATA ***
24 CLS:FOR N=1 TO 100
26 INPUT"ENTER KEY : ",RKEY(N):IF RKEY(N)<=0 THEN N=N-1:GOTO 34
27 LLINK(N)=NIL
28 RLINK(N)=NIL
29 Q=N
30 GOSUB 580
32 NEXT N
34 CLS:PRINT:PRINT"ELEMENTS AS GENERATED :":PRINT
36 FOR I=1 TO N:PRINT RKEY(I),:NEXT I
38 GOTO 10000
100 CLS:PRINT:PRINT"SELECT OPTION :"
110 PRINT" 1 = ADD NEW NODE"
120 PRINT" 2 = DELETE A NODE"
130 PRINT" 3 = LIST TREE"
132 PRINT" 4 = INITIALIZE TREE"
136 PRINT" 5 = FIND A NODE"
137 PRINT" 6 = DUMP"
138 PRINT" 7 = END"
140 INPUT"SELECTION -> ",X
150 IF X<1 OR X>7 THEN 140
155 ON X GOTO 160,200,300,850,200,11000,9999
160 N=N+1
162 IF EMPTY=TRUE THEN 164
163 GOTO 170
164 FOR I=1 TO N
165 LLINK(I)=NIL
166 RLINK(I)=NIL
167 NEXT I
168 N=1
169 ROOT=1
170 INPUT"ENTER RKEY : ",RKEY(N)
175 Q=N
180 GOSUB 580
190 GOTO 10000
200 INPUT"ENTER RKEY : ",P
205 ALPHA=P
210 GOSUB 1390
212 P=SEARCH
214 IF P>0 THEN PRINT"KEY FOUND AT NODE # ";P ELSE PRINT"KEY NOT FOUND"
220 IF X=2 THEN GOSUB 3000
230 GOTO 10000
300 PRINT:PRINT" TREE FOLLOWS :":PRINT
310 GOSUB 980
320 GOTO 10000
580 REM *** SUBROUTINE BILDER ***
582 EMPTY=FALSE
600 IF N=1 THEN 830
630 P=ROOT
640 INSERT=FALSE
650 IF RKEY(Q)<=RKEY(P) THEN 740
660 IF RLINK(P)<=NIL THEN 690
670 P=RLINK(P)
680 GOTO 810
690 RLINK(Q)=RLINK(P)
700 RLINK(P)=Q
710 LLINK(Q)=NIL
720 INSERT=TRUE
730 GOTO 810
740 IF LLINK(P)<>NIL THEN 800
750 LLINK(P)=Q
760 LLINK(Q)=NIL
770 RLINK(Q)=(-P)
780 INSERT=TRUE
790 GOTO 810
800 P=LLINK(P)
810 IF INSERT=FALSE THEN 650
830 RETURN
850 REM *** SUBROUTINE FIX ***
890 I=1
900 IF I<=N THEN 920
910 GOTO 960
920 LLINK(I)=NIL
921 RLINK(I)=NIL
940 I=I+1
950 GOTO 900
960 RETURN
980 REM *** SUBROUTINE LIST ***
1000 PRINT
1020 IF EMPTY=FALSE THEN 1030
1022 PRINT"TREE EMPTY"
1023 GOTO 1220
1030 RET=FALSE
1040 R=ROOT
1050 PRINT" ELEMENTS IN ORDER :"
1070 IF LLINK(R)=NIL THEN 1115
1100 R=LLINK(R)
1110 GOTO 1070
1115 B=R
1120 IF ((RLINK(B)<>NIL) AND (RET=FALSE)) THEN 1140
1130 GOTO 1200
1140 PRINT RKEY(B),
1145 P=B
1150 GOSUB 1240
1151 B=SUC
1160 IF B<>NIL THEN 1120
1170 RET=TRUE
1180 GOTO 1120
1200 IF RET=TRUE THEN 1220
1210 PRINT RKEY(B)
1220 RETURN
1240 REM *** SUBROUTINE SUCCESSOR ***
1280 Q=RLINK(P)
1290 IF RLINK(P)>NIL THEN 1320
1300 Q=(-Q)
1310 GOTO 1360
1320 IF LLINK(Q)=NIL THEN 1360
1340 Q=LLINK(Q)
1350 GOTO 1320
1360 SUC=Q
1370 RETURN
1390 REM *** SUBROUTINE SEARCH ***
1450 P=ROOT
1460 F1=FALSE
1470 IF ((P<>NIL) AND (F1=FALSE)) THEN 1490
1480 GOTO 1600
1490 IF ALPHA=RKEY(P) THEN 1580
1500 IF ALPHA<RKEY(P) THEN 1560
1510 IF RLINK(P)<=NIL THEN 1540
1520 P=RLINK(P)
1530 GOTO 1470
1540 P=NIL
1550 GOTO 1470
1560 P=LLINK(P)
1570 GOTO 1470
1580 F1=TRUE
1590 GOTO 1470
1600 SEARCH=P
1610 RETURN
2480 REM *** SUBROUTINE PAR ***
2530 F1=FALSE
2540 R=ROOT
2550 IF P<>ROOT THEN 2560
2555 F1=TRUE:R=NIL
2560 IF ((LLINK(R)=P) OR (RLINK(R)=P) OR (F1=TRUE)) THEN 2630
2570 IF RKEY(R)<RKEY(P) THEN 2600
2580 R=LLINK(R)
2590 GOTO 2610
2600 R=RLINK(R)
2610 IF R=NIL THEN F1=TRUE
2620 GOTO 2560
2630 PAR=R
2640 REM
2650 RETURN
3000 REM *** SUBROUTINE DEL ***
3010 IF P=ROOT THEN 7000
3020 REM ---CASE II---
3030 GOSUB 2480
3035 Q=PAR
3040 IF LLINK(Q)=P THEN 6000
3050 REM ---CASE II - GROUP B---
3060 IF RLINK(P)>NIL THEN 3200
3070 IF LLINK(P)<>NIL THEN 3110
3080 REM ---SUBCASE 1---
3090 RLINK(Q)=NIL
3100 RETURN
3110 REM ---SUBCASE 3---
3120 RLINK(Q)=LLINK(P)
3130 R=LLINK(P)
3140 IF RLINK(R)=(-P) THEN 3150
3145 R=RLINK(R)
3147 GOTO 3140
3150 RLINK(R)=RLINK(P)
3160 RETURN
3200 IF LLINK(P)<>NIL THEN 3240
3210 REM ---SUBCASE 2---
3220 RLINK(Q)=RLINK(P)
3230 RETURN
3240 REM ---SUBCASE 4---
3250 RLINK(Q)=RLINK(P)
3260 R=RLINK(P)
3270 IF LLINK(R)=NIL THEN 3280
3275 R=LLINK(R)
3277 GOTO 3270
3280 LLINK(R)=LLINK(P)
3320 R1=LLINK(P)
3330 IF RLINK(R1)=(-P) THEN 3340
3335 R1=RLINK(R1)
3337 GOTO 3330
3340 RLINK(R1)=(-R)
3350 RETURN
6000 REM ---CASE II - GROUP A---
6010 IF RLINK(P)>NIL THEN 6150
6020 IF LLINK(P)<>NIL THEN 6060
6030 REM ---SUBCASE 1---
6040 LLINK(Q)=NIL
6050 RETURN
6060 REM ---SUBCASE 3---
6070 LLINK(Q)=LLINK(P)
6080 R=LLINK(P)
6090 IF RLINK(R)=(-P) THEN 6100
6095 R=RLINK(R)
6097 GOTO 6090
6100 RLINK(R)=(-Q)
6110 RETURN
6150 IF LLINK(P)<>NIL THEN 6190
6160 REM ---SUBCASE 2---
6170 LLINK(Q)=RLINK(P)
6180 RETURN
6190 REM ---SUBCASE 4---
6200 LLINK(Q)=RLINK(P)
6210 R=RLINK(P)
6220 IF LLINK(R)=NIL THEN 6230
6225 R=LLINK(R)
6227 GOTO 6220
6230 LLINK(R)=LLINK(P)
6270 R1=LLINK(P)
6280 IF RLINK(R1)=(-P) THEN 6290
6285 R1=RLINK(R1)
6287 GOTO 6280
6290 RLINK(R1)=(-R)
6300 RETURN
7000 REM ---CASE I---
7010 IF RLINK(P)>NIL THEN 7150
7020 IF LLINK(P)>NIL THEN 7070
7030 REM ---SUBCASE A---
7040 EMPTY=TRUE
7050 N=0
7060 RETURN
7070 REM ---SUBCASE C---
7080 ROOT=LLINK(P)
7090 R=LLINK(P)
7100 IF RLINK(R)=(-P) THEN 7130
7110 R=RLINK(R)
7120 GOTO 7100
7130 RLINK(R)=NIL
7140 RETURN
7150 IF LLINK(P)>NIL THEN 7190
7160 REM ---SUBCASE B---
7170 ROOT=RLINK(P)
7180 RETURN
7190 REM ---SUBCASE D---
7200 ROOT=RLINK(P)
7210 R=ROOT
7220 IF LLINK(R)=NIL THEN 7250
7230 R=LLINK(R)
7240 GOTO 7220
7250 LLINK(R)=LLINK(P)
7260 R1=LLINK(P)
7270 IF RLINK(R1)=(-P) THEN 7300
7280 R1=RLINK(R1)
7290 GOTO 7270
7300 RLINK(R1)=(-R)
9000 RETURN
9999 END
10000 LOCATE 23,1,0:PRINT"HIT ANY KEY WHEN READY TO CONTINUE....."
10010 DEF SEG:Z$=INKEY$:IF Z$="" THEN 10010
10020 POKE 106,0:GOTO 100
11000 FOR I=1 TO N:LPRINT RKEY(I);LLINK(I);RLINK(I):NEXT:GOTO 100
```

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk 0376

     Volume in drive A has no label
     Directory of A:\

    123      UNP       706   7-11-83   8:35a
    123-LOGO PAT       896   5-15-84   9:50p
    123A     UNP       520   7-12-83   8:17a
    123STAR  UNP      1024  11-01-83   7:20a
    8088     TXT      2432  10-18-83   6:21a
    NEWCOLOR 123      1152  11-21-84   2:38p
    BASCOM   FIX     20495  10-07-83   8:49a
    BASCOM   PAT       470  12-29-83   5:46p
    BASLIB   PAT       996  12-29-83   7:21p
    BASRUN   PAT      1648  12-29-83   5:46p
    DB3ZAP   BAT       256  11-23-84  12:36a
    DB3ZAP   UNP       256  11-23-84  12:36a
    C86MOD   DOC      2680   6-11-83  12:42a
    FILECMD  PAT      1941   9-16-84   9:27a
    XTALK    PAT      2048   5-18-84   8:30a
    CLOCKFIX DOC       958  12-12-83   9:44a
    CLOCKFIX SYS       384  11-30-83   7:49a
    COMCOM20 PAT       641  12-30-83   8:58a
    COMMAND  MOD      9984  10-28-82   7:14p
    VCBACKUP DOC      8064   8-01-82
    COMMOD   TXT      7196  11-09-84   7:00a
    DB3-NEW  DOC       384  11-23-84  12:36a
    DOSBUG   MOD      1502   7-02-83  10:32a
    FRMWK1   DOC      1792  12-02-84  11:58a
    DOS_ERR  DOC      3456  10-25-83   6:32a
    DSKCPY20 MOD      7168   1-16-84   7:14a
    EWBACKUP UNP      2304   8-01-82
    FIND     MOD      1024   2-16-84   6:48a
    FLT-SIM  MOD      1834   9-30-83   8:03a
    FORMAT20 MOD       765   2-05-84  10:14a
    GENPATCH BAS      2013   2-04-84   8:08p
    JRAM123  MOD      2307   9-10-83  11:25a
    LAYOUT   UNP       339   4-28-84   5:34a
    MEMSHIFT UNP       459   9-10-83  11:11a
    NORTONS  MOD      2048   1-02-84   1:02a
    FRMWK1   BAT       256  12-02-84  11:58a
    PATCHER  BAS      2244   2-04-84   8:09p
    PCM      UNP       512   2-16-84   6:48a
    FRMWK1   UNP       256  12-02-84  11:58a
    PE-COLR  MOD      9936   6-11-83  12:46a
    PE-LOGO  PAT      1323   8-24-83   7:55a
    POOLCOPY DOC       896  11-30-82   6:31p
    PRINT20  DOC       649   5-29-83   9:48a
    PROKEY   UNP      1060   4-28-84   5:29a
    NEWCOLOR IN        256  11-21-84   2:38p
    RESCMD   BAS      3072   8-11-83   7:16a
    RESCMD   DOC      4180   8-11-83   8:58a
    SAMNA    UNP      2560   3-02-84   6:38a
    TIME-MGR UNP      1104   5-20-84   7:27p
    XTFORMAT DOC      3456  10-18-83   5:42a
    BASIC2   MOD      1583   5-28-84   8:29p
    MSWORD   UNP      2176   1-01-80   2:04a
    WS33-AT  PAT      1536  11-17-84   2:17p
    CLOUT256 UNP      3328   7-02-84   6:58a
    CLOUT384 UNP      3456   7-02-84   7:00a
    TKSOLVER UNP      7168   7-02-84   7:02a
    RB4000   UNP      3200   7-02-84   7:04a
    COPYWRIT UNP      2304   4-24-84   5:58a
    EXECUVSN UNP      3072   4-28-84   5:24a
    FLTSIM   UNP      1152   7-02-84   7:09a
    MLINK    UNP      2048   7-02-84   7:11a
    PCDRAW   UNP      3072   4-24-84   5:52a
    PCDRAW14 UNP      2688   7-02-84   7:13a
    PROBASIC UNP      2048   6-29-84   6:18a
    HARVARD  UNP     10014   4-28-84   6:19a
    HPMV116  UNP      8320   7-02-84   7:35a
    PFS-PROG UNP      3200   7-02-84   7:36a
    TANK     UNP      4096  12-24-84   3:27p
    SK111C   UNP      1536  12-24-84   3:27p
    TIMEMGR  UNP      1280   7-02-84   7:40a
    XENOCOPY UNP      4864   7-02-84   7:42a
    SK       UNP      2048   7-09-84   7:10a
    TKNEW    UNP      5760   7-11-84   6:25a
    MLINK206 UNP      1942   4-24-84   6:00a
    MULTILNK UNP      2432   4-24-84   6:01a
    SK111A   UNP      2304  12-24-84   3:27p
    MLINK207 UNP      2048   6-29-84   6:12a
    FLGHTSIM UNP       972   2-14-84  11:05p
    ZORK12   UNP      1019   2-14-84  11:10p
    ZORK3    UNP       715   2-14-84  11:05p
    SARGON3  UNP      1152   4-27-84   6:46a
    TREE     BAS      4608  10-09-83  10:48a
    SYMPH    DOC      1408   8-19-84   2:56p
    SYMPH    COM       128   8-19-84   2:56p
    SYMPHONY UNP      2560   8-19-84   2:56p
    --NOTICE ---      1177  10-21-84  10:04a
    ML28-30  UNP      3328  12-24-84   3:27p
    SK110A   UNP       623  12-22-84   9:55a
    SK100A   UNP       629  12-22-84  10:11a
    DB3      UNP      2089  12-11-84   8:01p
    FILES376 TXT      5637   7-08-85   2:38p
           91 file(s)     238622 bytes
                           40960 bytes free
