---
layout: page
title: "PC-SIG Diskette Library (Disk #906)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0906/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0906"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "MISC. UTILITIES"

    This disk contains about twenty different utilities for your PC or
    compatible computer.  For example, the selective print screen utility
    will select the number of rows on the screen that you want to printout
    using the ``PrtSc'' option on your keyboard.  An ``unprotect'' guide
    helps you run ``Managing Your Money'' from a hard disk without
    inserting the original disk in drive A.
    
    Also included are communication utilities for Qmodem and other
    utilities for Microsoft Word; DOS command utilities within windows;
    some C language utilities; how to unprotect Chessmaster 2000; a
    multi-level window in Turbo BASIC; and more.  See File Descriptions for
    explanations of individual programs.
    File Descriptions
    
    DBRELATE ARC  Extensions of dBase, Clipper relations.
    CORDFORM ARC  AIA change order for Microsoft Word with style sheet.
    CM2PTCH  ARC  Patch for Chessmaster 2000.
    99       DIR  Telecommunication service library directory.
    MIRRORDD ARC  Dialing directory from Mirror.
    LOCKIT   DOC  Documentation for LOCKIT.COM.
    DR       ARC  Better than DIR from ``PC Magazine.''
    DC1      ARC  PC Junior DOS color program from CIS.
    LOCKIT   COM  Lock/Unlock keyboard -- turn screen on/off.
    FACE     COM  Lots of faces on your screen.
    LINE26   DOC  Documentation for LINE26.COM.
    LINE26   COM  Memory resident program that displays status info.
    MYMENU   ARC  Menu maker for hard disk.
    NEWDEX   ARC  Great floppy disk cataloger.
    MYMUNP   ARC  Managing Your Money patches with version 3.0.
    TYPEHEAD ARC  Clipper/dBase3-type ahead quash and why.  With demo progra
    TCSEARCH ARC  Search for files - Turbo C source code.
    TC-EQUIP ARC  Display PC equipment - Turbo C with source code.
    TBWINDOW ARC  Turbo BASIC window routines with source code.
    SLEEVE2  ARC  Print DIR on disk sleeve.
    SLEEVE1  ARC  Make disk sleeve with DIR on it.
    QUICKCHA ARC  Change color on any programs.
    PRNTSCR- ARC  Print any part of screen with PrtSc key.
    PKFIND11 EXE  Locate files on hard disk.
    PCKWKPAT ARC  Patch for shareware PC-Kwik.
    PKXARC   COM  Archiving utility.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## QUICKCHA.BAS

```bas
1 ' Program to create SETCOLOR.COM
2 'COPYRIGHT 1987 COMPUTE! PUBLICATIONS, INC.
3 'ALL RIGHTS RESERVED.
4 CLS:PRINT "COPYRIGHT 1987":PRINT"COMPUTE! PUBLICATIONS, INC.":PRINT ALL RIGHTS RESERVED."
5 FOR ZZ=1 TO 1500:NEXT:CLS
6 PRINT "CREATING SETCOLOR.COM ....... PLEASE WAIT."
10 OPEN "SETCOLOR.COM" FOR OUTPUT AS 1
20 PRINT#1,CHR$(&HE9);CHR$(&H32);CHR$(&H4);
30 PRINT#1,CHR$(34);
40 FOR N=1 TO 146:PRINT#1,CHR$(0);:NEXT
50 T=0:FOR J=1 TO 963:READ A$:N=VAL("&H"+A$)
60 T=T+N:PRINT#1,CHR$(N);:NEXT:CLOSE 1
70 IF T=88099! THEN PRINT"SETCOLOR.COM SUCCESSFULLY CREATED!":END
80 DATA 00,00,00,00,00,00,C9,07,CD,07
90 DATA CD,07,CD,07,CD,07,CD,07,CD,07
100 DATA CD,07,CD,07,CD,07,CD,07,CD,07
110 DATA CD,07,BB,07,BA,07,20,07,42,07
120 DATA 4F,07,52,07,44,07,45,07,52,07
130 DATA 20,07,20,07,20,07,20,07,20,07
140 DATA BA,07,BA,07,20,07,42,07,41,07
150 DATA 43,07,4B,07,47,07,52,07,4F,07
160 DATA 55,07,4E,07,44,07,20,07,BA,07
170 DATA BA,07,20,07,46,07,4F,07,52,07
180 DATA 45,07,47,07,52,07,4F,07,55,07
190 DATA 4E,07,44,07,20,07,BA,07,C8,07
200 DATA CD,07,CD,07,CD,07,CD,07,CD,07
210 DATA CD,07,CD,07,CD,07,CD,07,CD,07
220 DATA CD,07,CD,07,BC,07,00,00,00,00
230 DATA 2E,80,3E,04,01,00,75,22,FB,50
240 DATA 53,51,52,56,57,1E,06,E4,60,2E
250 DATA 3A,06,03,01,75,08,B4,02,CD,16
260 DATA A8,08,75,0D,07,1F,5F,5E,5A,59
270 DATA 5B,58,2E,FF,2E,28,02,E8,C4,02
280 DATA 0E,1F,0E,07,B4,0F,CD,10,3C,01
290 DATA 74,0D,3C,03,74,09,07,1F,5F,5E
300 DATA 5A,59,5B,58,CF,A2,05,01,C6,06
310 DATA 9A,01,01,C6,06,9B,01,01,C6,06
320 DATA 95,01,00,C6,06,96,01,00,C6,06
330 DATA 97,01,00,88,3E,06,01,C6,06,04
340 DATA 01,01,B4,03,CD,10,89,0E,07,01
350 DATA B4,01,E8,51,02,E8,1E,01,E8,96
360 DATA 01,E8,DE,01,E8,5D,02,B4,00,CD
370 DATA 16,3C,1B,75,03,E9,95,00,80,FC
380 DATA 48,75,10,80,3E,9A,01,01,74,E9
390 DATA FE,0E,9A,01,E8,BD,01,EB,E0,80
400 DATA FC,50,75,10,80,3E,9A,01,03,74
410 DATA D4,FE,06,9A,01,E8,A8,01,EB,CB
420 DATA 80,FC,4D,75,C6,80,3E,9A,01,01
430 DATA 75,1C,FE,06,95,01,80,26,95,01
440 DATA 07,E8,F8,01,B8,00,0B,B7,00,8A
450 DATA 1E,95,01,CD,10,E8,02,02,EB,A3
460 DATA 80,3E,9A,01,02,75,20,FE,06,96
470 DATA 01,80,26,96,01,07,8A,16,96,01
480 DATA B1,04,D2,E2,88,16,99,01,C6,06
490 DATA 98,01,8F,E8,38,00,E9,7C,FF,FE
500 DATA 06,97,01,80,26,97,01,0F,8A,16
510 DATA 97,01,88,16,99,01,C6,06,98,01
520 DATA F0,E8,1C,00,E9,60,FF,E8,A2,01
530 DATA E8,BE,00,E8,B4,01,B4,01,8B,0E
540 DATA 07,01,CD,10,C6,06,04,01,00,E9
550 DATA 00,FF,E8,89,01,06,B8,00,B8,8E
560 DATA C0,B9,D0,07,B8,00,10,80,3E,05
570 DATA 01,03,74,06,B9,E8,03,B8,00,05
580 DATA 8A,1E,06,01,32,FF,F7,E3,8B,F8
590 DATA 47,8A,36,98,01,8A,16,99,01,26
600 DATA 8A,05,22,C6,0A,C2,26,88,05,47
610 DATA 47,E2,F2,07,8D,3E,09,01,47,B9
620 DATA 46,00,8A,05,22,C6,0A,C2,88,05
630 DATA 47,47,E2,F4,E8,82,00,E8,CA,00
640 DATA E8,49,01,C3,06,0E,07,BE,82,06
650 DATA B8,00,10,80,3E,05,01,03,74,06
660 DATA BE,3A,03,B8,00,05,8A,1E,06,01
670 DATA 32,FF,F7,E3,03,F0,8D,3E,09,01
680 DATA 1E,B8,00,B8,8E,D8,E8,03,00,1F
690 DATA 07,C3,BB,05,00,B8,84,00,2E,80
700 DATA 3E,05,01,03,74,03,B8,34,00,B9
710 DATA 1C,00,F3,A4,03,F0,4B,83,FB,00
720 DATA 75,F3,C3,06,8D,36,09,01,BF,82
730 DATA 06,B8,00,10,80,3E,05,01,03,74
740 DATA 06,BF,3A,03,B8,00,05,8A,1E,06
750 DATA 01,32,FF,F7,E3,03,F8,B8,00,B8
760 DATA 8E,C0,E8,2F,00,07,C3,06,8D,36
770 DATA 9C,01,BF,82,06,B8,00,10,80,3E
780 DATA 05,01,03,74,06,BF,3A,03,B8,00
790 DATA 05,8A,1E,06,01,32,FF,F7,E3,03
800 DATA F8,B8,00,B8,8E,C0,E8,03,00,07
810 DATA C3,C3,BB,05,00,B8,84,00,80,3E
820 DATA 05,01,03,74,03,B8,34,00,B9,1C
830 DATA 00,F3,A4,03,F8,4B,83,FB,00,75
840 DATA F3,C3,E8,67,00,06,B8,00,B8,8E
850 DATA C0,BF,87,06,B8,00,10,80,3E,05
860 DATA 01,03,74,06,BF,3F,03,B8,00,05
870 DATA 8A,1E,06,01,32,FF,F7,E3,03,F8
880 DATA 8B,F7,8A,0E,9B,01,BB,A0,00,80
890 DATA 3E,05,01,03,74,03,BB,50,00,03
900 DATA FB,E2,FC,B0,07,B9,0A,00,26,88
910 DATA 05,47,47,E2,F9,8B,FE,8A,0E,9A
920 DATA 01,03,FB,E2,FC,B0,70,B9,0A,00
930 DATA 26,88,05,47,47,E2,F9,A0,9A,01
940 DATA A2,9B,01,07,E8,19,00,C3,BA,DA
950 DATA 03,EC,A8,08,74,FB,83,EA,02,B0
960 DATA 25,80,3E,05,01,03,74,02,FE,C8
970 DATA EE,C3,B0,29,80,3E,05,01,03,74
980 DATA 02,FE,C8,BA,D8,03,EE,C3,E4,61
990 DATA 8A,E0,0C,80,E6,61,8A,C4,E6,61
1000 DATA FA,B0,20,E6,20,FB,C3,B9,07,06
1010 DATA B4,01,CD,10,B4,35,B0,09,CD,21
1020 DATA 89,1E,28,02,8C,06,2A,02,B4,25
1030 DATA B0,09,8D,16,2C,02,CD,21,BA,36
1040 DATA 05,CD,27
```

## SLEEVE.BAS

```bas
10  '***********************************
20  '**                               **
30  '**       SLEEVE / DIRECTORY      **
40  '**                               **
50  '**   (C) Copyright 1984, 1987    **
60  '**              by               **
70  '**       Glenn M. Dickson        **
80  '**        654 Gilpin St.         **
90  '**        Houston, Texas         **
100 '**             77034             **
110 '**        (713) 944-3937         **
120 '**  (Replies only if S.A.S.E.)   **
130 '***********************************
140 '  >>> IBM Proprinter Version  <<<
150 '***********************************
160 '*    This program will print the  *
170 '* disk directory and the outline  *
180 '* of a disk sleeve (jacket) on a  *
190 '* sheet of paper. Cut it out,     *
200 '* fold and glue. You have a disk  *
210 '* sleeve with the directory       *
220 '* printed on it. No more pieces   *
230 '* of paper to loose.              *
240 '***********************************
250 DEF SEG=0:POKE 1047,PEEK(1047) OR 64:DEF SEG
260 CLEAR:WIDTH 80:KEY OFF:CLS:WIDTH "LPT1:",255
270 DIM TB$(144),AB$(144),TT$(24)
280 INFO$=SPACE$(44)
290 FOR X=1 TO 44
300 READ BYTE$
310 MID$(INFO$,X,1)=CHR$(VAL("&H"+BYTE$))
320 NEXT X
330 '
340 HC=45:   'Horizontal printed character
350 VC=124:  'Vertical printed character
360 '
370 LOCATE 11,31:PRINT "DO YOU WANT COLOR?"
380 LOCATE 14,31:PRINT "( Yes ) or ( No )"
390 IN$=INKEY$:IF IN$=CHR$(13) THEN IN$="Y"
400 IF (IN$="Y") OR (IN$="y") THEN CLR=1 ELSE IF (IN$="N") OR (IN$="n") THEN CLR=0 ELSE 390
410 CLR=1
420 IF CLR THEN COLOR 2,0,0
430 CLS
440 T=16
450 R=6
460 LOCATE R,1
470 PRINT TAB(T)"▒▒▒▒▒▒▄ ▒▒▄     ▒▒▒▒▒▒▄ ▒▒▒▒▒▒▄ ▒▒▄   ▒▒▄ ▒▒▒▒▒▒▄"
480 PRINT TAB(T)"▒▒█▀▀▀▀ ▒▒█     ▒▒█▀▀▀▀ ▒▒█▀▀▀▀ ▒▒█   ▒▒█ ▒▒█▀▀▀▀"
490 PRINT TAB(T)"▒▒▒▒▒▒▄ ▒▒█     ▒▒▒▒▒▄  ▒▒▒▒▒▄  ▒▒█   ▒▒█ ▒▒▒▒▒▄ "
500 PRINT TAB(T)" ▀▀▀▒▒█ ▒▒█     ▒▒█▀▀▀  ▒▒█▀▀▀   ▒▒▄ ▒▒█▀ ▒▒█▀▀▀ "
510 PRINT TAB(T)"▒▒▒▒▒▒█ ▒▒▒▒▒▒▄ ▒▒▒▒▒▒▄ ▒▒▒▒▒▒▄    ▒▒█▀▀  ▒▒▒▒▒▒▄"
520 PRINT TAB(T)" ▀▀▀▀▀▀  ▀▀▀▀▀▀  ▀▀▀▀▀▀  ▀▀▀▀▀▀     ▀▀     ▀▀▀▀▀▀"
530 LOCATE R+7,25:PRINT"Version 1.0 for IBM Proprinter"
540 IF CLR THEN COLOR 6
550 LOCATE 21,24:PRINT "Press 'P' for Program Information"
560 IF CLR THEN COLOR 2
570 LOCATE 23,8:PRINT "(c) Copyright 1984, 1987 by Glenn M. Dickson, All Rights Reserved"
580 IF CLR THEN COLOR 6
590 LOCATE 25,28:PRINT "Press any key to continue";
600 IN$=INKEY$:IF IN$="" THEN 600
610 LOCATE ,28:PRINT "                         ";
620 IF IN$="P" OR IN$="p" THEN GOSUB 1830
630 '**************************** ENTER DATE ****************************
640 IF CLR THEN COLOR 14,1,1
650 CLS:LOCATE 2,10:PRINT "Enter the date:"
660 IF CLR THEN COLOR 7
670 LOCATE 3,25:PRINT "Type 'B' to leave blank":LOCATE 4,25:PRINT "Press 'ENTER' to use the system date"
680 IN$=INKEY$:IF IN$="" THEN 680
690 IF CLR THEN COLOR 15
700 IF IN$=CHR$(13) THEN FDATE$=LEFT$(DATE$,6)+RIGHT$(DATE$,2):LOCATE 2,27:PRINT FDATE$;:GOTO 730
710 IF (IN$="B") OR (IN$="b") THEN FDATE$="        ":LOCATE 2,27:PRINT "(blank)";
720 '**************************** SELECT DRIVE **************************
730 IF CLR THEN COLOR 14
740 LOCATE 6,10:PRINT "Drive A or B:"
750 IF CLR THEN COLOR 7
760 LOCATE 7,25:PRINT "Enter drive to read from, A or B"
770 IF CLR THEN COLOR 15
780 LOCATE 6,27
790 DR$=INKEY$:IF DR$="" THEN 790
800 IF DR$="A" OR DR$="a" THEN PRINT "A":DR=65:GOTO 830
810 IF DR$="B" OR DR$="b" THEN PRINT "B":DR=66 ELSE 780
820 '**************************** ENTER DISK NAME ***********************
830 IF CLR THEN COLOR 14
840 LOCATE 9,10:PRINT "Name of disk:"
850 IF CLR THEN COLOR 7
860 LOCATE 10,25:PRINT "19 characters maximum"
870 IF CLR THEN COLOR 15
880 LOCATE 9,27
890 LINE INPUT;"";DNAME$
900 IF LEN(DNAME$) > 19 THEN DNAME$=LEFT$(DNAME$,19):LOCATE 9,27:PRINT STRING$(53," ");:LOCATE ,27:PRINT DNAME$
910 IF LEN(DNAME$)=0 THEN LOCATE 9,27:PRINT "(blank)"
920 '**************************** ENTER DISK NUMBER *********************
930 IF CLR THEN COLOR 14
940 LOCATE 12,10:PRINT "Disk Number:"
950 IF CLR THEN COLOR 7
960 LOCATE 13,25:PRINT "8 characters maximum"
970 LOCATE 14,25:PRINT "Press 'ENTER' for blank"
980 IF CLR THEN COLOR 15
990 LOCATE 12,27
1000 LINE INPUT;"";DNUM$
1010 IF LEN(DNUM$)=0 THEN LOCATE 12,27:PRINT "(blank)"
1020 IF LEN(DNUM$) > 8 THEN DNUM$=LEFT$(DNUM$,8):LOCATE 12,27:PRINT STRING$(53," ");:LOCATE ,27:PRINT DNUM$
1030 IF LEN(DNUM$) < 8 THEN DNUM$=" "+DNUM$:GOTO 1030
1040 GOSUB 1680:DEF SEG=0
1050 '*************************** GET DISK DIRECTORY ********************
1060 IF CLR THEN COLOR 15,1,1
1070 CLS
1080 PRINT "READING DIRECTORY....."
1090 FSPEC$=DR$+":*.*"
1100 HEAD=1050:TAIL=1052:BUFFER=1054:C=0
1110 ON ERROR GOTO 1130
1120 FILES FSPEC$:ON ERROR GOTO 0:GOTO 1150
1130 IF CLR THEN COLOR 4,0,0
1140 BEEP:CLS:LOCATE 12,24:PRINT "Cannot read directory on drive "DR$:ON ERROR GOTO 0:END
1150 LOCATE 3,1:ROWS=0
1160 POKE HEAD,30:POKE TAIL,34:POKE BUFFER,0:POKE BUFFER+1,79:POKE BUFFER+2,13:POKE BUFFER+3,28
1170 LINE INPUT TT$(ROWS):IF TT$(ROWS)<>"" THEN ROWS=ROWS+1:GOTO 1160
1180 ROWS=ROWS-1:FOR I=0 TO ROWS:FOR J=0 TO 3
1190 T$=MID$(TT$(I),J*18+1,12)
1200 IF T$<>"" THEN TB$(C)=T$:C=C+1
1210 NEXT J:NEXT I:ERASE TT$:DEF SEG
1220 IF C>135 THEN GOSUB 1770:' Too many files
1230 '*************************** SORT ROUTINE **************************
1240 IF CLR THEN COLOR 14
1250 LOCATE 24,22:PRINT "Do you want a sorted listing ? [Y/N]";
1260 AN$=INKEY$:IF AN$="" THEN 1260
1270 IF AN$="N" OR AN$="n" THEN 1340
1280 CLS:PRINT "Sorting Directory....."
1290 Z$=CHR$(255):E=1
1300 FOR A=0 TO C-1:C$=Z$:FOR B=0 TO C-1:IF C$<TB$(B) THEN 1320
1310 C$=TB$(B):D=B
1320 NEXT:AB$(E)=C$:E=E+1:TB$(D)=Z$:NEXT
1330 '*************************** PRINT ROUTINE *************************
1340 CLS:PRINT "Printing Sleeve.....":KT=0:SK=1:Z=21:Y=0
1350 LPRINT CHR$(27)"0";CHR$(15);CHR$(27)"U""1":'Set 8 LPI & Condensed (17.1 CPI)
1360 LPRINT TAB(15);"F";TAB(110);"F":LPRINT "C";TAB(15);"O";TAB(110);"O";TAB(124);"C":LPRINT "U"; TAB(15);"L";TAB(110);"L";TAB(124);"U":LPRINT "T";TAB(15);"D";TAB(110);"D";TAB(124);"T"
1370 LPRINT CHR$(VC);STRING$(122,CHR$(HC));CHR$(VC);"CUT":KT=KT+1
1380 LPRINT CHR$(VC);TAB(15);CHR$(VC);TAB(20);DNAME$;TAB(60);FDATE$;TAB(97);DNUM$;TAB(110);CHR$(VC);TAB(124);CHR$(VC):KT=KT+1
1390 LPRINT CHR$(VC);TAB(15);CHR$(VC);STRING$(94,CHR$(HC));CHR$(VC);TAB(124);CHR$(VC):KT=KT+1
1400 LPRINT CHR$(VC);TAB(15);CHR$(VC);TAB(19);C;"Files";TAB(85);
1410 LPRINT USING "#,###,### bytes free";BYTES%*SECTORS%*CLUSTERS%;
1420 LPRINT TAB(110);CHR$(VC);TAB(124);CHR$(VC):KT=KT+1
1430 LPRINT CHR$(VC);TAB(15);CHR$(VC);STRING$(94,CHR$(HC));CHR$(VC);TAB(124);CHR$(VC):KT=KT+1
1440 FOR W=1 TO C
1450 IF Y=0 THEN LPRINT CHR$(VC);TAB(15);CHR$(VC);TAB(Z);AB$(W); ELSE IF Y=1 THEN LPRINT TAB(Z);AB$(W);
1460 Y=1:Z=Z+18:IF Z>100 THEN Y=0:LPRINT TAB(110);CHR$(VC);TAB(124);CHR$(VC):Z=21:KT=KT+1
1470 NEXT W
1480 IF Z>22 THEN LPRINT TAB(110);CHR$(VC);TAB(124);CHR$(VC):KT=KT+1
1490 FOR L=KT TO 30
1500 LPRINT CHR$(VC);TAB(15);CHR$(VC);TAB(110);CHR$(VC);TAB(124);CHR$(VC)
1510 NEXT L
1520 LPRINT CHR$(VC);STRING$(13,CHR$(HC));CHR$(VC);TAB(110);CHR$(VC);STRING$(13,CHR$(HC));CHR$(VC);"CUT"
1530 LPRINT TAB(11);"FOLD";CHR$(VC);STRING$(94,CHR$(HC));CHR$(VC);"FOLD"
1540 FOR L=1 TO 37
1550 LPRINT TAB(15);CHR$(VC);TAB(110);CHR$(VC)
1560 NEXT L
1570 LPRINT TAB(12);"CUT";CHR$(VC);STRING$(94,CHR$(HC));CHR$(VC);"CUT"
1580 LPRINT TAB(15);"C";TAB(110);"C":LPRINT TAB(15);"U";TAB(110);"U":LPRINT TAB(15);"T";TAB(110);"T"
1590 FOR L=1 TO 9:LPRINT:NEXT L
1600 IF CLR THEN COLOR 14
1610 CLS
1620 LOCATE 11,25:PRINT"MAKE ANOTHER SLEEVE OR QUIT ?"
1630 LOCATE 13,30:PRINT "[A]nother or [Q]uit"
1640 AN$=INKEY$:IF AN$="" THEN 1640
1650 IF AN$="a" OR AN$="A" THEN CLS:GOTO 830
1660 IF AN$="q" OR AN$="Q" THEN CLS:END ELSE 1640
1670 '*************************** FREESPACE ROUTINE *********************
1680 DRIVE%=DR:BYTES%=0:SECTORS%=0:CLUSTERS%=0:TOTAL%=0
1690 XX=VARPTR(INFO$)
1700 DISKINFO=PEEK(XX+1) + 256 * PEEK(XX+2)
1710 CALL DISKINFO(DRIVE%,BYTES%,SECTORS%,CLUSTERS%,TOTAL%)
1720 RETURN
1730 DATA 55,89,E5,8B,76,0E,8B,14,80,FA,00
1740 DATA 74,03,80,EA,40,B4,36,CD,21,8B,76
1750 DATA 0C,89,0C,8B,76,0A,89,04,8B,76,08
1760 DATA 89,1C,8B,76,06,89,14,5D,CA,0A,00
1770 IF CLR THEN COLOR 12,0,0
1780 CLS:LOCATE 12,19:PRINT "You have"C"files.  I will print 135 of them."
1790 LOCATE 25,28:PRINT "Press any key to continue";
1800 IF INKEY$="" THEN 1800 ELSE LOCATE ,28:PRINT "                         ";
1810 RETURN
1820 '*************************** PROGRAM INFO **************************
1830 IF CLR THEN COLOR 15,1,1
1840 CLS
1850 LOCATE 1,30:PRINT " SLEEVE / DIRECTORY "
1860 PRINT:PRINT TAB(29)"IBM Proprinter version"
1870 PRINT:PRINT "   This program will print the outline of a disk sleeve and then print the disk directory in the outline.  All you have to do is cut it out, fold, and glue or"
1880 PRINT "tape the flaps.  You will have a disk sleeve (jacket) with the directory printedon it.  No more pieces of paper to loose or get mixed up."
1890 PRINT:PRINT "   This program is hereby entered into the PUBLIC DOMAIN.  No one may charge    anything for the use or distribution of this program."
1900 PRINT:PRINT "Share this program with others.  If you modify and improve this program I would appreciate a copy of the modified version."
1910 PRINT:PRINT "   Since this program is being distributed via freeware and modifications to    the code will certainly result, I can make no claims as to the suitability of"
1920 PRINT "this program for use on any particular computer or printer.  There are no       warranties or claims, express or implied.  While I have made every effort to    insure that there are no bugs in this program, you use it entirely at your own"
1930 PRINT "risk.  This program is furnished 'AS IS'."
1940 GOSUB 2030
1950 CLS
1960 PRINT "   I originally wrote this program back in 1983 for use on the Radio Shack      Color Computer.  I decided it was time to rework it for use on IBM types."
1970 PRINT:PRINT"   The print routines are from the original program.  The disk free bytes       routine is from PC Magazine, December 23, 1986, page 264.  The routine to read  the disk directory is by Gregory Jackmond, address unknown."
1980 PRINT:PRINT "   Live long and prosper."
1990 PRINT:PRINT TAB(30)"Glenn M. Dickson"
2000 PRINT TAB(31)"654 Gilpin St."
2010 PRINT TAB(29)"Houston, TX, 77034"
2020 GOSUB 2030:RETURN
2030 IF CLR THEN COLOR 12
2040 LOCATE 25,27:PRINT "Press any key to continue";
2050 IN$=INKEY$:IF IN$="" THEN 2050 ELSE LOCATE 25,27:PRINT "                         ";
2060 IF CLR THEN COLOR 15
2070 RETURN
```

## SLEEVE.BAS

```bas
10  '***********************************
20  '**                               **
30  '**       SLEEVE / DIRECTORY      **
40  '**                               **
50  '**          Version 2.0          **
60  '**                               **
70  '**   (C) Copyright 1984, 1987    **
80  '**              by               **
90  '**       Glenn M. Dickson        **
100 '**        654 Gilpin St.         **
110 '**        Houston, Texas         **
120 '**             77034             **
130 '**        (713) 944-3937         **
140 '**  (Replies only if S.A.S.E.)   **
150 '***********************************
160 '
170 '***********************************
180 '*    This program will print the  *
190 '* disk directory and the outline  *
200 '* of a disk sleeve (jacket) on a  *
210 '* sheet of paper. Cut it out,     *
220 '* fold and glue. You have a disk  *
230 '* sleeve with the directory       *
240 '* printed on it. No more pieces   *
250 '* of paper to loose.              *
260 '* This version is for 17.1 CPI    *
270 '* and 8 LPI.                      *
280 '***********************************
290 CLEAR:WIDTH 80:KEY OFF:CLS:WIDTH "LPT1:",255
300 DIM TB$(144),AB$(144),TT$(24),FILE.NAME$(200),DTA%(22)
310 LOCATE 11,31:PRINT "DO YOU WANT COLOR?"
320 LOCATE 14,31:PRINT "( Yes ) or ( No )"
330 IN$=INKEY$:IF IN$=CHR$(13) THEN IN$="Y"
340 IF (IN$="Y") OR (IN$="y") THEN CLR=1 ELSE IF (IN$="N") OR (IN$="n") THEN CLR=0 ELSE 330
350 IF CLR THEN COLOR 14,0,0
360 CLS
370 LOCATE 12,29:PRINT"ONE MOMENT PLEASE....."
380 INFO$=SPACE$(44)
390 FOR X=1 TO 44
400 READ BYTE$
410 MID$(INFO$,X,1)=CHR$(VAL("&H"+BYTE$))
420 NEXT X
430 BASDIR$=SPACE$(76)
440 FOR X=1 TO 76
450 READ X$
460 MID$(BASDIR$,X,1)=CHR$(VAL("&H"+X$))
470 NEXT X
480 '
490 HC=45:   'Horizontal printed character
500 VC=124:  'Vertical printed character
510 '
520 IF CLR THEN COLOR 2,0,0
530 CLS
540 T=16
550 R=6
560 LOCATE R,1
570 PRINT TAB(T)"▒▒▒▒▒▒▄ ▒▒▄     ▒▒▒▒▒▒▄ ▒▒▒▒▒▒▄ ▒▒▄   ▒▒▄ ▒▒▒▒▒▒▄"
580 PRINT TAB(T)"▒▒█▀▀▀▀ ▒▒█     ▒▒█▀▀▀▀ ▒▒█▀▀▀▀ ▒▒█   ▒▒█ ▒▒█▀▀▀▀"
590 PRINT TAB(T)"▒▒▒▒▒▒▄ ▒▒█     ▒▒▒▒▒▄  ▒▒▒▒▒▄  ▒▒█   ▒▒█ ▒▒▒▒▒▄ "
600 PRINT TAB(T)" ▀▀▀▒▒█ ▒▒█     ▒▒█▀▀▀  ▒▒█▀▀▀   ▒▒▄ ▒▒█▀ ▒▒█▀▀▀ "
610 PRINT TAB(T)"▒▒▒▒▒▒█ ▒▒▒▒▒▒▄ ▒▒▒▒▒▒▄ ▒▒▒▒▒▒▄    ▒▒█▀▀  ▒▒▒▒▒▒▄"
620 PRINT TAB(T)" ▀▀▀▀▀▀  ▀▀▀▀▀▀  ▀▀▀▀▀▀  ▀▀▀▀▀▀     ▀▀     ▀▀▀▀▀▀"
630 LOCATE R+7,34:PRINT"Version 2.0"
640 IF CLR THEN COLOR 6
650 LOCATE 21,24:PRINT "Press 'P' for Program Information"
660 IF CLR THEN COLOR 2
670 LOCATE 23,8:PRINT "(c) Copyright 1984, 1987 by Glenn M. Dickson, All Rights Reserved"
680 IF CLR THEN COLOR 6
690 LOCATE 25,28:PRINT "Press any key to continue";
700 IN$=INKEY$:IF IN$="" THEN 700
710 LOCATE ,28:PRINT "                         ";
720 IF IN$="P" OR IN$="p" THEN GOSUB 2150
730 '**************************** ENTER DATE ****************************
740 IF CLR THEN COLOR 14,1,1
750 CLS:LOCATE 2,10:PRINT "Enter the date:"
760 IF CLR THEN COLOR 7
770 LOCATE 3,30:PRINT "Type 'B' to leave blank":LOCATE 4,30:PRINT "Press 'ENTER' to use the system date"
780 IN$=INKEY$:IF IN$="" THEN 780
790 IF CLR THEN COLOR 15
800 IF IN$=CHR$(13) THEN FDATE$=LEFT$(DATE$,6)+RIGHT$(DATE$,2):LOCATE 2,27:PRINT FDATE$;:GOTO 830
810 IF (IN$="B") OR (IN$="b") THEN FDATE$="        ":LOCATE 2,27:PRINT "(blank)";
820 '**************************** SELECT DRIVE **************************
830 IF CLR THEN COLOR 14
840 LOCATE 6,10:PRINT "Drive A or B:"
850 IF CLR THEN COLOR 7
860 LOCATE 7,30:PRINT "Enter drive to read from, A or B"
870 IF CLR THEN COLOR 15
880 LOCATE 6,27
890 DR$=INKEY$:IF DR$="" THEN 890
900 IF DR$="A" OR DR$="a" THEN PRINT "A":DR=65:GOTO 930
910 IF DR$="B" OR DR$="b" THEN PRINT "B":DR=66 ELSE 880
920 '**************************** ENTER DISK NAME ***********************
930 IF CLR THEN COLOR 14
940 LOCATE 9,10:PRINT "Name of disk:"
950 IF CLR THEN COLOR 7
960 LOCATE 10,30:PRINT "19 characters maximum"
970 IF CLR THEN COLOR 15
980 LOCATE 9,27
990 LINE INPUT;"";DNAME$
1000 IF LEN(DNAME$) > 19 THEN DNAME$=LEFT$(DNAME$,19):LOCATE 9,27:PRINT STRING$(53," ");:LOCATE ,27:PRINT DNAME$
1010 IF LEN(DNAME$)=0 THEN LOCATE 9,27:PRINT "(blank)"
1020 '**************************** ENTER DISK NUMBER *********************
1030 IF CLR THEN COLOR 14
1040 LOCATE 12,10:PRINT "Disk Number:"
1050 IF CLR THEN COLOR 7
1060 LOCATE 13,30:PRINT "8 characters maximum"
1070 LOCATE 14,30:PRINT "Press 'ENTER' for blank"
1080 IF CLR THEN COLOR 15
1090 LOCATE 12,27
1100 LINE INPUT;"";DNUM$
1110 IF LEN(DNUM$)=0 THEN LOCATE 12,27:PRINT "(blank)"
1120 IF LEN(DNUM$) > 8 THEN DNUM$=LEFT$(DNUM$,8):LOCATE 12,27:PRINT STRING$(53," ");:LOCATE ,27:PRINT DNUM$
1130 IF LEN(DNUM$) < 8 THEN DNUM$=" "+DNUM$:GOTO 1130
1140 GOSUB 1750
1150 '*************************** GET DISK DIRECTORY ********************
1160 IF CLR THEN COLOR 15,1,1
1170 CLS
1180 LOCATE 12,29:PRINT "READING DIRECTORY....."
1190 GOSUB 1850
1200 IF C>135 THEN GOSUB 2090:' Too many files
1210 '******************* PC MAG SORT ROUTINE **************************
1220 IF CLR THEN COLOR 14
1230 LOCATE 24,22:PRINT "Do you want a sorted listing ? [Y/N]";
1240 AN$=INKEY$:IF AN$="" THEN 1240
1250 IF AN$="N" OR AN$="n" THEN 1410
1260 CLS:LOCATE 12,29:PRINT "Sorting Directory....."
1270 AX=COUNT:AY=COUNT
1280 AY=AY\2
1290 IF AY=0 THEN 1410
1300 AZ=AX-AY
1310 FOR CNT=1 TO AZ
1320 PTR1=CNT
1330 PTR2=PTR1+AY
1340 IF FILE.NAME$(PTR1) <= FILE.NAME$(PTR2) THEN 1380
1350 SWAP FILE.NAME$(PTR1),FILE.NAME$(PTR2)
1360 PTR1=PTR1-AY
1370 IF PTR1 > 0 THEN 1330
1380 NEXT
1390 GOTO 1280
1400 '*************************** PRINT ROUTINE *************************
1410 CLS:LOCATE 12,30:PRINT "Printing Sleeve.....":KT=0:SK=1:Z=21:Y=0
1420 LPRINT CHR$(27)"0";CHR$(15);CHR$(27)"U""1":'Set 8 LPI & Condensed (17.1 CPI)
1430 LPRINT TAB(15);"F";TAB(110);"F":LPRINT "C";TAB(15);"O";TAB(110);"O";TAB(124);"C":LPRINT "U"; TAB(15);"L";TAB(110);"L";TAB(124);"U":LPRINT "T";TAB(15);"D";TAB(110);"D";TAB(124);"T"
1440 LPRINT CHR$(VC);STRING$(122,CHR$(HC));CHR$(VC);"CUT":KT=KT+1
1450 LPRINT CHR$(VC);TAB(15);CHR$(VC);TAB(20);DNAME$;TAB(60);FDATE$;TAB(97);DNUM$;TAB(110);CHR$(VC);TAB(124);CHR$(VC):KT=KT+1
1460 LPRINT CHR$(VC);TAB(15);CHR$(VC);STRING$(94,CHR$(HC));CHR$(VC);TAB(124);CHR$(VC):KT=KT+1
1470 LPRINT CHR$(VC);TAB(15);CHR$(VC);TAB(19);COUNT;"Files";TAB(85);
1480 LPRINT USING "#,###,### bytes free";BYTES%*SECTORS%*CLUSTERS%;
1490 LPRINT TAB(110);CHR$(VC);TAB(124);CHR$(VC):KT=KT+1
1500 LPRINT CHR$(VC);TAB(15);CHR$(VC);STRING$(94,CHR$(HC));CHR$(VC);TAB(124);CHR$(VC):KT=KT+1
1510 FOR W=1 TO COUNT
1520 IF Y=0 THEN LPRINT CHR$(VC);TAB(15);CHR$(VC);TAB(Z);FILE.NAME$(W); ELSE IF Y=1 THEN LPRINT TAB(Z);FILE.NAME$(W);
1530 Y=1:Z=Z+18:IF Z>100 THEN Y=0:LPRINT TAB(110);CHR$(VC);TAB(124);CHR$(VC):Z=21:KT=KT+1
1540 NEXT W
1550 IF Z>22 THEN LPRINT TAB(110);CHR$(VC);TAB(124);CHR$(VC):KT=KT+1
1560 FOR L=KT TO 30
1570 LPRINT CHR$(VC);TAB(15);CHR$(VC);TAB(110);CHR$(VC);TAB(124);CHR$(VC)
1580 NEXT L
1590 LPRINT CHR$(VC);STRING$(13,CHR$(HC));CHR$(VC);TAB(110);CHR$(VC);STRING$(13,CHR$(HC));CHR$(VC);"CUT"
1600 LPRINT TAB(11);"FOLD";CHR$(VC);STRING$(94,CHR$(HC));CHR$(VC);"FOLD"
1610 FOR L=1 TO 37
1620 LPRINT TAB(15);CHR$(VC);TAB(110);CHR$(VC)
1630 NEXT L
1640 LPRINT TAB(12);"CUT";CHR$(VC);STRING$(94,CHR$(HC));CHR$(VC);"CUT"
1650 LPRINT TAB(15);"C";TAB(110);"C":LPRINT TAB(15);"U";TAB(110);"U":LPRINT TAB(15);"T";TAB(110);"T"
1660 FOR L=1 TO 9:LPRINT:NEXT L
1670 IF CLR THEN COLOR 14
1680 CLS
1690 LOCATE 11,25:PRINT"MAKE ANOTHER SLEEVE OR QUIT ?"
1700 LOCATE 13,30:PRINT "[A]nother or [Q]uit"
1710 AN$=INKEY$:IF AN$="" THEN 1710
1720 IF AN$="a" OR AN$="A" THEN CLS:GOTO 930
1730 IF AN$="q" OR AN$="Q" THEN CLS:END:SYSTEM ELSE 1710
1740 '******************* PC MAG FREESPACE SUB-ROUTINE *****************
1750 DRIVE%=DR:BYTES%=0:SECTORS%=0:CLUSTERS%=0:TOTAL%=0
1760 XX=VARPTR(INFO$)
1770 DISKINFO=PEEK(XX+1) + 256 * PEEK(XX+2)
1780 CALL DISKINFO(DRIVE%,BYTES%,SECTORS%,CLUSTERS%,TOTAL%)
1790 RETURN
1800 DATA 55,89,E5,8B,76,0E,8B,14,80,FA,00
1810 DATA 74,03,80,EA,40,B4,36,CD,21,8B,76
1820 DATA 0C,89,0C,8B,76,0A,89,04,8B,76,08
1830 DATA 89,1C,8B,76,06,89,14,5D,CA,0A,00
1840 '******************* PC MAG GET DIRECTORY SUB-ROUTINE *************
1850 FOR XY=1 TO 200
1860 FILE.NAME$(XY)=SPACE$(12)
1870 NEXT XY
1880 IF DR=65 THEN FILE.NAME$(0)="A:*.*"+CHR$(0)
1890 IF DR=66 THEN FILE.NAME$(0)="B:*.*"+CHR$(0)
1900 XY=VARPTR(BASDIR$)
1910 BASDIR=PEEK(XY+1) + 256 * PEEK(XY+2)
1920 CALL BASDIR(DTA%(0),FILE.NAME$(0))
1930 COUNT=0
1940 WHILE ASC(FILE.NAME$(COUNT+1))
1950 COUNT=COUNT+1
1960 PRINT FILE.NAME$(COUNT)
1970 WEND
1980 PRINT COUNT "files found"
1990 RETURN
2000 DATA 55,8B,EC,8B,56,08,8B,DA,83,C3,1E,B4
2010 DATA 1A,CD,21,8B,EC,8B,6E,06,8B,56,01,B4
2020 DATA 4E,B9,00,00,CD,21,3D,12,00,74,1C,83
2030 DATA C5,03,8B,7E,01,8B,F3,B9,0C,00,AC,84
2040 DATA C0,74,04,AA,49,EB,F7,B0,20,F3,AA,B4
2050 DATA 4F,EB,DA,83,C5,03,8B,7E,01,C6,05,00
2060 DATA 5D,CA,04,00
2070 '******************* PC MAG SHELL SORT SUB-ROUTINE ****************
2080 '************************** TOO MANY FILES ************************
2090 IF CLR THEN COLOR 12,0,0
2100 CLS:LOCATE 12,19:PRINT "You have"C"files.  I will print 135 of them.":C=135
2110 LOCATE 25,28:PRINT "Press any key to continue";
2120 IF INKEY$="" THEN 2120 ELSE LOCATE ,28:PRINT "                         ";
2130 RETURN
2140 '*************************** PROGRAM INFO **************************
2150 IF CLR THEN COLOR 15,1,1
2160 CLS
2170 LOCATE 1,30:PRINT " SLEEVE / DIRECTORY "
2180 PRINT:PRINT "   This program will print the outline of a disk sleeve and then print the disk directory in the outline.  All you have to do is cut it out, fold, and glue or"
2190 PRINT "tape the flaps.  You will have a disk sleeve (jacket) with the directory printedon it.  No more pieces of paper to loose or get mixed up."
2200 PRINT:PRINT "   This program is hereby entered into the PUBLIC DOMAIN.  No one may charge    anything for the use or distribution of this program."
2210 PRINT:PRINT "Share this program with others.  If you modify and improve this program I would appreciate a copy of the modified version."
2220 PRINT:PRINT "   Since this program is being distributed via freeware and modifications to    the code will certainly result, I can make no claims as to the suitability of"
2230 PRINT "this program for use on any particular computer or printer.  There are no       warranties or claims, express or implied.  While I have made every effort to    insure that there are no bugs in this program, you use it entirely at your own"
2240 PRINT "risk.  This program is furnished 'AS IS'."
2250 GOSUB 2350
2260 CLS
2270 PRINT "   I originally wrote this program back in 1983 for use on the Radio Shack      Color Computer.  I decided it was time to rework it for use on IBM types."
2280 PRINT:PRINT"   The print routines are from my original program.  The disk free-bytes        routine, the directory read routine, and the directory sort routine are from    PC Magazine, December 23, 1986."
2290 PRINT:PRINT"   These are solid routines and I couldn't see re-inventing the wheel when threeperfectly good ones were already available."
2300 PRINT:PRINT "   Live long and prosper."
2310 PRINT:PRINT TAB(30)"Glenn M. Dickson"
2320 PRINT TAB(31)"654 Gilpin St."
2330 PRINT TAB(29)"Houston, TX, 77034"
2340 GOSUB 2350:RETURN
2350 IF CLR THEN COLOR 12
2360 LOCATE 25,27:PRINT "Press any key to continue";
2370 IN$=INKEY$:IF IN$="" THEN 2370 ELSE LOCATE 25,27:PRINT "                         ";
2380 IF CLR THEN COLOR 15
2390 RETURN
```

## DEMO20.BAS

```bas
'Demonstration of TBWINDO
$INCLUDE "TBWINDO.INC"
key off
':color 7,1:cls

'Dimension array for screen saving
dim scrn%(6000)
'Tell TBWINDO whether to check for snow or not
SNOCHK%=1  '0=YES 1=NO
'Put up opening screen
'4 windows of different colors and a Title Window
call qfill(1,1,25,80,asc(" "),snochk%,fnattr%(7,1))
call makewindow(4,15,10,30,fnattr%(4,3),4,1,0)
call makewindow(3,36,13,40,fnattr%(15,2),3,1,0)
call makewindow(9,10,13,40,fnattr%(0,5),2,1,0)
call makewindow(12,42,11,36,fnattr%(3,4),1,1,0)

call makewindow(8,20,7,40,fnattr%(0,7),2,1,0)

color 0,7:locate 11,35:print"Presenting...";
delay 4

call makewindow(8,20,7,40,fnattr%(0,7),2,1,0)
locate  9,26:print"      T B W I N D O"
locate 10,26:print"           2.0
locate 12,26:print" Windowing Routines for the"
locate 13,26:print"Borland Turbo BASIC Compiler"

delay 3

call makewindow(17,55,7,24,fnattr%(0,6),1,1,0)
color 0,6
locate 18,57:print "By:"
locate 20,57:print "  Rick Fothergill"
locate 21,57:print " 141 Oak Hill Road"
locate 22,57:print "Pittsfield, MA 01201"


delay 4

call makewindow(8,25,10,32,fnattr%(7,1),2,0,1)

color 15,1
locate 9,35:print "Including ..."
locate 11,30:print "*** Window Tools ***"
locate 13,28:print "A collection of routines"
locate 14,28:print "for integration into your"
locate 15,28:print "own programs.

delay 4

call makewindow(8,25,10,32,fnattr%(7,1),2,0,0)

locate 9,28:print  " * * * * * * * * * * * * * "
locate 11,28:print "Stand by for a guided tour"
locate 13,28:print "through the many facets of"
locate 15,28:print "this exciting program."
call recolor(fnattr%(15,1),fnattr%(13,1),snochk%)
for a% = 0 to 14
for b% = 0 to 7
call recolor(fnattr%(a%,b%),fnattr%(a%+1,b%),snochk%)
next b%
next a%



delay 3

'cls
call qfill(1,1,25,80,asc(" "),snochk%,fnattr%(7,1))
call makewindow(9,16,8,52,fnattr%(0,7),2,0,1)

color 0,7

locate 10,18:print "The basic  purpose of TBWINDO is to provide"
locate 11,18:print "the  fundamental  routines for  implementing"
locate 12,18:print "simple 'windowing' into your Turbo BASIC pro-"
locate 13,18:print "grams.   With  just a few simple statements,"
locate 14,18:print "you can 'pop-up'  a colored  window onto the"
locate 15,18:print "screen; just like this ..."

delay 3

call makewindow(1,47,7,30,fnattr%(15,4),1,0,0)

delay 3

call makewindow(9,16,8,52,fnattr%(0,7),2,0,1)

locate 12,18:print"The window can be a solid panel of any of
locate 14,18:print"the BASIC background colors; such as ..."

delay 4

call makewindow(1,2,7,35,fnattr%(1,2),0,0,0)

delay 3

call makewindow(9,16,8,52,fnattr%(0,7),2,0,1)

locate 12,18:print"or it can be surrounded by a 'frame' in any"
locate 13,18:print"of four styles..."

delay 3

call makewindow(5,5,8,35,fnattr%(9,5),1,0,0)
call titlewindow(1,"[ Frame Style 1 ]")
call makewindow(8,8,8,35,fnattr%(12,3),2,0,0)
call titlewindow(2,"[ Frame Style 2 ]")
call makewindow(11,11,8,35,fnattr%(15,4),3,0,0)
call titlewindow(3,"[ Frame Style 3 ]")
call makewindow(14,14,8,35,fnattr%(0,6),4,0,0)
call titlewindow(1,"[ Frame Style 4 ]")

delay 4

color 7,1
'cls
call qfill(1,1,25,80,asc(" "),snochk%,fnattr%(7,1))
call makewindow(9,16,8,52,fnattr%(0,7),2,0,1)

color 0,7
locate 10,18:print "The frame itself can be in any one of the"
locate 11,18:print "BASIC foreground colors. It can even blink"
locate 12,18:print "if you want..."

delay 3
for i=0 to 15
  clr%=i
  label$="[ Color:"+str$(i)+" ]"

  call makewindow(14,10,11,35,fnattr%(clr%,5),4,0,0)
  call titlewindow(2,label$)
  delay 1
next i
call makewindow(14,10,11,35,fnattr%(31,5),4,0,0)
call titlewindow(2,"[ Color: 31 ]")

delay 4

color 7,1
'cls
call qfill(1,1,25,80,asc(" "),snochk%,fnattr%(7,1))
call makewindow(9,16,8,52,fnattr%(0,7),2,0,1)
color 0,7
locate 14,18:print "The window itself can be presented in many"
locate 15,18:print "different ways. It can be flat..."

delay 3

call makewindow(1,2,11,30,fnattr%(15,4),1,0,0)

delay 3

call makewindow(9,16,8,52,fnattr%(0,7),2,0,0)
locate 14,17:print "or it can have a black shadow underneath; giving"
locate 15,17:print "a three-dimensional effect..."
delay 3
call makewindow(1,38,11,30,fnattr%(15,5),2,1,0)

delay 3

color 7,1
'cls
call qfill(1,1,25,80,asc(" "),snochk%,fnattr%(7,1))
color 0,7

call makewindow(9,16,8,52,fnattr%(0,7),2,0,1)
locate 12,18:print "For a particularly dramatic effect, the window"
locate 13,18:print "can 'grow' onto the screen..."

delay 3
call makewindow(7,10,12,63,fnattr%(15,4),2,1,1)
color 15,4
locate 12,37:print "W O W !!!
delay 3

color 0,7
call makewindow(9,16,8,52,fnattr%(0,7),2,0,1)
locate 10,18:print "Once you have your window on the screen, simply"
locate 11,18:print "use LOCATE, COLOR,  and PRINT statements to put"
locate 12,18:print "text in them. Another call with the same param-"
locate 13,18:print "eters as the first ...
delay 3

call makewindow(9,16,8,52,fnattr%(0,7),2,0,0)
locate 10,18:print "will erase the window for new text. But suppose"
locate 11,18:print "that instead of clearing the window,  you would"
locate 12,18:print "rather SCROLL the data inside either up or down,"
locate 13,18:print "and put a new line of text on either the top or"
locate 14,18:print "bottom line; as the case might be..."
delay 3

call scroll(10,17,14,66,1,6)
locate 14,18:print"   NEVER FEAR . . .  "
delay 1
call scroll(10,17,14,66,1,6)
delay 1
call scroll(10,17,14,66,1,6)
locate 14,18:print"   The SCROLL routine will do just that!  You can"
delay 1
call scroll(10,17,14,66,1,6)
locate 14,18:print"   scroll lines of text  -  "
delay 1
call scroll(10,17,14,66,1,6)
locate 14,18:print"                            UP"
delay 1
call scroll(10,17,14,66,1,6)
locate 14,18:print"                            UP"
delay 1
call scroll(10,17,14,66,1,6)
locate 14,18:print"                            UP"
delay 1
call scroll(10,17,14,66,1,7)
delay 1
call scroll(10,17,14,66,1,7)
delay 1
call scroll(10,17,14,66,1,7)
delay 1
call scroll(10,17,14,66,1,7)
locate 10,18:print"                      or  DOWN"
delay 1
call scroll(10,17,14,66,1,7)
locate 10,18:print"                          DOWN"
delay 1
call scroll(10,17,14,66,1,7)
locate 10,18:print"                          DOWN"
delay 1

call makewindow(9,16,8,52,fnattr%(0,7),2,0,1)
locate 10,18:print "Just as easily as you can create the window!"
locate 11,18:print "In fact, all of the commands of TBWINDO are"
locate 12,18:print "very  easy to use.  Here is a call to create"
locate 13,18:print "this window ..."
locate 15,18:print "   CALL MAKEWINDOW(8,14,8,52,fnattr%(0,7),2,0,1)"
delay 5

call makewindow(9,16,8,52,fnattr%(0,7),2,0,0)
locate 11,18:print "And this is the call used to perform the SCROLL"
locate 12,18:print "operation ..."
locate 14,18:print "       CALL SCROLL(9,15,16,65,1,6)
delay 3

call makewindow(9,16,8,52,fnattr%(0,7),2,0,0)
locate 10,18:print "An even simpler command allows you to save the"
locate 11,18:print "contents of the screen  into an integer array;"
locate 12,18:print "so that  you can place a window  on the screen"
locate 13,18:print "and then quickly remove it; leaving the under-"
locate 14,18:print "lying  information as it was.  Here is  a good"
locate 15,18:print "example . . ."
call savescrn(SNOCHK%,scrn%(0))
delay 5
call makewindow(3,5,15,45,fnattr%(0,2),4,1,1)
locate 9,10:color 0,2:print "This is the first level ..."
delay 2
call savescrn(SNOCHK%,scrn%(2000))
call makewindow(6,29,17,50,fnattr%(15,4),4,1,1)
locate 12,40:color 15,4:print "This is the second level ..."
delay 2
call savescrn(SNOCHK%,scrn%(4000))
call  makewindow(9,22,15,35,fnattr%(12,3),4,1,1)
locate 16,24:color 12,0:print "This is the third level ..."
delay 2
locate 16,24:print "Now to go back ...           "
delay 1
call restscrn(SNOCHK%,scrn%(4000))
delay 1
call restscrn(SNOCHK%,scrn%(2000))
delay 1
call restscrn(SNOCHK%,scrn%(0))
delay 2
'cls
call qfill(1,1,25,80,asc(" "),snochk%,fnattr%(7,1))
call makewindow(4,15,10,30,fnattr%(4,3),4,0,1)
call makewindow(3,36,13,40,fnattr%(15,2),3,0,1)
call makewindow(9,10,13,40,fnattr%(0,5),2,0,1)
call makewindow(12,42,11,36,fnattr%(3,4),1,0,1)

call makewindow(9,16,8,52,fnattr%(0,7),2,0,1)
color 0,7
locate 10,21:print"This was the original opening screen."
locate 11,21:print"You can selectively change the color"
locate 12,21:print"of an area simply by changing the"
locate 13,21:print"attribute."
delay 1

call recolor(fnattr%(4,3),fnattr%(6,2),snochk%)
delay 2

call recolor(fnattr%(0,5),fnattr%(14,5),snochk%)
delay 2

call recolor(fnattr%(15,2),fnattr%(14,6),snochk%)
delay 2

call recolor(fnattr%(0,7),fnattr%(15,1),snochk%)
delay 2
call recolor(fnattr%(15,1),fnattr%(0,7),snochk%)
delay 2
call makewindow(9,16,8,52,fnattr%(0,7),2,0,0)
locate 10,21:print "These are the commands required:"
locate 11,21:print"      call calcattr(0,7,x%)  'old"
locate 12,21:print"      call calcattr(15,1,y%) 'new"
locate 13,21:print"      call recolor(x%,y%,snochk%)"
delay 4
color 7,1
'cls
call qfill(1,1,25,80,asc(" "),snochk%,fnattr%(7,1))
call makewindow(9,16,8,52,fnattr%(0,7),2,2,0)
locate 10,18:color 0,7:print "The basic routines in the  TBWINDO  package"
locate 11,18:          print "give you all you  need to create some power-"
locate 12,18:          print "ful 'toolbox' modules to integrate into your"
locate 13,18:          print "programs. But if you would rather not do all"
locate 14,18:          print "the work yourselves, please see the accomp- "
locate 15,18:          print "anying demo program DEMO.EXE ...           "
delay 5
end
```

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0906

     Volume in drive A has no label
     Directory of A:\

    99       DIR     11870   8-09-87   2:50a
    FACE     COM      3840   8-09-87   2:49a
    PKFIND11 EXE     20480   8-08-87   9:42p
    TCSEARCH ARC      2176   8-08-87   9:38p
    TC-EQUIP ARC      5632   8-08-87   9:36p
    PRNTSCR- ARC      4352   8-08-87   9:18p
    MYMUNP   ARC     11136   8-07-87   3:24p
    PCKWKPAT ARC      1408   8-06-87  11:47p
    MIRRORDD ARC     12672   8-06-87  10:21p
    CORDFORM ARC      5120   8-06-87   4:33p
    DR       ARC      3328   8-06-87  12:16p
    QUICKCHA ARC      3200   8-06-87  10:37a
    SLEEVE2  ARC      6144   8-05-87   6:47p
    NEWDEX   ARC     30848   8-05-87   5:20p
    TYPEHEAD ARC       768   8-05-87   3:43p
    SLEEVE1  ARC      5632   8-03-87   8:09p
    CM2PTCH  ARC      2048   8-03-87   4:19a
    MYMENU   ARC     34944   7-29-87   1:06p
    DBRELATE ARC      4224   7-29-87  10:20a
    TBWINDOW ARC     61184   7-28-87   6:27p
    DC1      ARC      4224   6-28-87   2:26p
    LINE26   COM      1964  11-11-86  12:00p
    LINE26   DOC      4913  11-11-86  12:00p
    LOCKIT   COM       743  12-11-86  12:00p
    LOCKIT   DOC      3446  12-11-86  12:00p
    FILES906 TXT      2567  12-08-87   1:36p
    PKXARC   COM     11482  12-15-86
    GO       BAT        38  10-19-87   3:56p
    GO       TXT       771  12-07-87   2:27p
           29 file(s)     261154 bytes
                           47104 bytes free
