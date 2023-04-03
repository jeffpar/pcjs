---
layout: page
title: "PC-SIG Library Disk #33"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0033/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk 0033"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "DOS AND PRINTER UTILITIES"

    For anyone with an older Epson printer, this series of programs could
    enhance your printing capabilities. While many of the current breed of
    printers have graphics capabilities built in, someof the older Epsons
    did not.
    
    The programs on this disk allows the user to "grab" pictures or
    graphics off the computer screen and print them out on your Epson,
    Toshiba, or C. Itoh (in two sizes).
    
    This disk also contains some patches to existing DOS routines, and
    simplify or speedup some operations.  In addition to the DOS and
    printer utilities, there are some simple (but useful) communication
    utilities.
    
    System Requirements: Some programs require color graphics.
    
    How to Start: To run an EXE or COM program, simply type its name and
    press <ENTER>.  To print a documentation file, type: COPY filename.ext
    PRN (press enter) where filename is the name of the file, and ext is
    the extension (TXT or DOC).
    
    File Descriptions:
    
    CALLGRAF BAS  Program to call GRAFTRAX from Basic
    COPYGRAF BAT  Batch file to copy GRAFTRAX files to disk
    CALLGRAF TXT  ASCII version of CALLGRAF
    SOUNDS   BAS  Generates different sounds - contains documentation
    DOTABLE  ASM  Data file used by Graftrax
    DOTS     DAT  Data file used by Graftrax
    DOTDATA  ASM  Data file used by Graftrax
    DOTS     PRO  Data file used by Graftrax
    GRAFTRAX ASM  Source code for Graftrax
    GDEMO    BAS  Graphics demo program
    GRAFTRAX COM  Compiled version of Graftrax
    GRAFTRAX BAS  Basic code for Graftrax
    NECGRAF  COM  NEC version of Graftrax
    MAKEDOTS BAS  Graphics display utility
    GRCITOH  COM  C-ITOH version of Graftrax
    GRAFTRAX DOC  Documentation for Graftrax
    NEWT     ASM  Source code for enhanced Toshiba Graftrax version
    OKIGRAF  ASM  Source code for Okidata Graftrax program
    NEWT     COM  Compiled Toshiba Graphtrax program
    PRTFIX   DOC  Documentation file
    PRTFIX   COM  Corrects "DEVICE TIMEOUT" errors with printer
    POSTER   BAS  Prints large character posters
    PEPATCH  DOC  Patch to IBM's Personal Editor
    SHELL    BAT  Bat file used with BATMAN.BAS
    SCROLL2  BAS  Sample program
    SCROLL1  BAS  Sample program
    SCROLL   DOC  Documentation file
    SCROLL   BLD  Program file to "BLOAD" from BASIC
    SCROLL   ASM  Scrolls specified area of display screen
    QD       DOC  Documentation file
    QD       COM  Quadram RAMDRIVE program - FOR QUADRAM BOARD ONLY
    TOSHIBA  COM  Compiled version of Toshiba Graftrax
    TOSHIBA  DOC  Documentation for Toshiba Graftrax programs
    BATMAN   BAS  Sample menu/batch manager program; requires SHELL.BAT
    FK203    ASM  Source code for FK203.EXE
    HANG     COM  Hangs up Hayes Smartmodem
    FK203    EXE  Function key reassignment program for DOS 2.0
    HOST     DOC  Documentation file for HOST.BAS
    HOST     BAS  Communication program for remote access
    TOSHIBA  ASM  Source code for original Toshiba Graftrax program
    OKIGRAF  COM  Compiled version of Okidata Graphtrax
    READ     ME   Author's notes on Graftrax routines
    BSR      DAT  Data file for BSR.BAS
    BUZOFF   COM  Turn off paper out buzzer on Epson
    CVTHEX   EXE  Binary/hex conversion for files larger than 32K
    COMPRS   COM  Enables compressed print on Epson
    DIR      DAT  Sample data file
    DIR      BAS  Disk cataloging program - very colorful
    DIAL     COM  Dials Hayes Smartmodem
    DCPATCH  DOC  Patch for DISKCOPY.COM 2.0
    DIR      DOC  Documentation file
    BATMAN   DOC  Documentation file
    BSR      BAS  Simple program to drive ABM/BSR controller
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## BATMAN.BAS

```bas
10 'BATMAN.BAS -- Copyright M-SQUARED SYSTEMS, Inc. -1982
20 '
30 'This routine illustrates a method of adding MENU processing to DOS.
40 '
50 'Any user is hereby granted a free, non-exclusive license to use this
60 'program and to copy, modify or distribute it, so long as no charge is
70 'made for such copies, and the original author is acknowledged.
80 '
90 'W.B. Malthouse, V.P. - 5918 Veranda Dr.,Springfield, Va. 22152
100 '(703) 451-2934
110 '
120 'NOTE: Replace all references to "SHELL.BAT" by any desired file name,
130 'or obtain the calling file name from the command line image.
140 '
150 CLEAR: CLOSE:DEFINT A-Z:KEY OFF:SCREEN 0,0,0:WIDTH 80:COLOR 7:CLS
160 ON ERROR GOTO 640
170 DIM L$(22)
180 COLOR 15
190 PRINT"Please select the desired function:":COLOR 7
200 OPEN "SHELL.BAT" FOR INPUT AS #1
210 NL=0
220 LINE INPUT #1,BATPROGRAM$
230 LINE INPUT #1,DOIT$
240 LINE INPUT #1,PAUSE$
250 LINE INPUT #1,RESTART$
260 PRINT
270 FOR I=1 TO 22
280 LINE INPUT#1,L$(I)
290 IJ=INSTR(L$(I),"-")
300 IF IJ=0 THEN T$="*NO EXPLANATION PROVIDED*" ELSE T$=MID$(L$(I),IJ+1)
310 IF IJ=0 THEN IJ=LEN(L$(I))-4 ELSE IJ=IJ-5
320 COLOR 15: PRINT MID$(L$(I),1,3);: COLOR 7: PRINT TAB(4) MID$(L$(I),4,IJ) TAB(21) T$
330 IF EOF(1) THEN GOTO 350
340 NEXT
350 'we now have the whole menu in core
360 NL=I+1
370 L$(NL)=STR$(NL)+" GOTO End - Exit to Batch Monitor":L$(NL)=MID$(L$(NL),2)
380 COLOR 15: PRINT MID$(L$(NL),1,3);: COLOR 7:PRINT TAB(4);MID$(L$(NL),9,4);
390 PRINT TAB(21) MID$(L$(NL),INSTR(L$(NL),"-")+1);
400 NL=NL-1
410 CLOSE #1
420 LOCATE 23,1,1,0,13:INPUT"===>";N
425 IF(N < 1) OR (N > NL+1) THEN LOCATE 23,7:PRINT SPACE$(2);:GOTO 420
440 'here we go
450 DOITX$=MID$(L$(N),4)
460 I=INSTR(DOITX$,"-")
470 IF I<>0 THEN DOITX$=MID$(DOITX$,1,I-1)
480 DOIT$=DOITX$
490 LOCATE 25,1,0:COLOR 31:PRINT"Selection:  ";
500 PRINT DOIT$;:LOCATE 25,79,0
510 ON ERROR GOTO 0:LOCATE 25,1,0:PRINT SPACE$(79);:LOCATE 25,1,0:COLOR 15
520 PRINT"REWRITING ";RESTART$;"          ";
530 OPEN "SHELL.BAT" FOR OUTPUT AS #1
540 ON ERROR GOTO 0
550 PRINT #1,BATPROGRAM$
560 PRINT #1,DOIT$
570 PRINT #1,PAUSE$
580 PRINT #1,RESTART$
590 FOR I=1 TO NL
600 PRINT #1,L$(I)
610 NEXT I
620 CLOSE #1
630 SYSTEM
640 'ERROR HANDLING SECTION
650 LOCATE 22,1:PRINT"Basic Error Code:" ERR " in line:" ERL;
660 SOUND 40,18: SOUND 40,18: SOUND 40,18: SOUND 40,2
670 IF ERL<>280 THEN ON ERROR GOTO 0: STOP
680 RESUME 280
```

## BSR.BAS

```bas
10 CLEAR ,27848
20 CLS:BSR%=0:THREE%=3:Z%=1:KEY OFF
30 LOCATE 25,1:PRINT "Frame Unit Command Steps Time  Wait - (Com 1=on,2=off,3=clr,4=all,5=br,6=dim)"
40 LOCATE 6,12:PRINT "AudioKrafters IBM PC/BSR interface"
50 DEF SEG=&HFF2
60 BLOAD "bsrcode.bin",0
70 OPEN "bsr.dat" FOR INPUT AS #1:TIME$="00:00:00"
80 FOR I=0 TO 10:INPUT#1,D%(I),F%(I),G%(I),T$(I),W%(I):NEXT I
90 FOR I=0 TO 10:IF F%(I)=-1 THEN CLOSE:END
100 E%(I)=F%(I)+16:C%(I)=G%(I)*2+1:IF E%(I)<21 THEN C%(I)=3
110 D%=D%(I):E%=E%(I):C%=C%(I):T$=T$(I)
120 TIM$=RIGHT$(TIME$,5):IF T$>TIM$ THEN GOTO 120
130 CALL BSR%(Z%,D%,THREE%)
140 CALL BSR%(Z%,E%,C%)
150 K=K+1:PRINT K TAB(8) D%(I) TAB(14) F%(I) TAB(21) G%(I) TAB(26) T$(I) TAB(33) W%(I) TAB(50) TIME$
160 FOR J=1 TO W%(I):NEXT J
170 NEXT I
180 GOTO 80
```

## CALLGRAF.BAS

```bas
1 ' GRAFTRAX as a subroutine  9/21/84
10 DEFINT A-Z
20 GOSUB 300' draw some graphics for demo. not needed in your program.
30 ' Make sure variables used in this routine are defined BEFORE they are used,
32 '    in other words, put lines 60-110 in early in your program.
34 ' Integer variable descriptors, i.e. variable% should be used
36 ' if a DEFINT statement is not present.
38 '
40 ' ****************** SETUP **** use lines 60-120 in your program.
42 '
60 DATA &h55,&H8b,&Hec,&H8b,&H76,&H06,&H8b,&H1c,&H8b
70 DATA &He3,&Hcd,&H05,&H8b,&He5,&H5d,&Hca,&H02,&H00
80 X%=0 : Y%=0 : Z%=0 : GRAFTRAX%=0 : GRSEG!=0 : A$=""
90 DIM STACK%(50),CG%(10)
100 DEF SEG : Y% = VARPTR(CG%(0))
110 FOR X% = 0 TO 17 : READ Z% : POKE X% + Y% ,Z% : NEXT ' poke into an array
120 DEF SEG=0 : X%=PEEK(&H16) : Y%=PEEK(&H17) : DEF SEG : GRSEG!=X%+(256*Y%)
121 '
122 '     GRSEG is the segment where DOS put GRAFTRAX.COM
123 '
124 ' ***************** END of SETUP ********************************
125 '
130 INPUT "(s)mall or (L)ARGE or (e)nd";A$ : A$=LEFT$(A$,1) : IF A$="" THEN END
135 IF A$="e" OR A$="E" THEN COLOR 7,0 : END
140 IF A$="l" OR A$="L" OR A$="2" THEN X% = 2 ELSE X% = 1
145 GOSUB 160 : GOTO 130
147 '
150 ' ******** ACTUAL ROUTINE - use in your program. **********
151 '
152 '    This is the code to use GRAFTRAX as a subroutine.
153 '
154 '   The POKE in 170 sets which routine to do, can be POKEd once and
155 '   left alone until a different size picture is needed.
156 '
160 DEF SEG = GRSEG!
170  POKE &H10D,X%     ' X%=1 for small, 2 for LARGE.
175 ' %H10d is a variable in GRAFTRAX.COM
180 DEF SEG
190 GRAFTRAX% = VARPTR(CG%(0)) : Y% = VARPTR(STACK%(50)) ' stack builds DOWN.
200 CALL GRAFTRAX%(Y%) ' y% is a pointer to a temporary stack,
205 '                    since BASIC only leaves 16 bytes.
210 RETURN
222 '
224 ' *************************************************************
226 '
300 ' Get some graphics going for demo.
305 '
310 KEY OFF
320 SCREEN 1,0
330 COLOR 1,0 : CLS
340 CIRCLE (160,100),50,3 : CIRCLE (160,100),75,3 : PAINT (160,100),1,3 : PAINT(160,40),2,3 ' draw some graphics
350 RETURN
```

## DIR.BAS

```bas
10 '     *** DIR.BAS *** IBM Version 2.0 ***
20 '     *** March                  1983 ***
30 '
40 '     *** Written by Wes Meier (70215,1017) ***
50 '     *** 230 B Park Lake Circle            ***
60 '     *** Walnut Creek, CA 94598            ***
70 '
80 '  ****************************************************************
90 '  * *** For Public Domain....Private Sales Rights Reserved ! *** *
100 ' ****************************************************************
110 '
120 '    REMark...This program was written for an IBM PC with 128K RAM,
130 '    Two disk drives, Color Adapter Card, Electrohome Color
140 '    Monitor (80 Column), and an Epson MX-80 printer equipped
150 '    with the GRAFTRAX ROMS.
160 '
170 DEFINT B-Z:DEFSTR A
180 AV=CHR$(34):AL=STRING$(80,196):AQ="("+AV+"*"+AV+" to QUIT) "
190 DIM A(1000)
200 KEY OFF:WIDTH 40:SCREEN 0,1:COLOR 4,3,3:CLS
210 LOCATE 9,7,0,0,7:PRINT CHR$(201)STRING$(28,205)CHR$(187)
220 PRINT TAB(7) CHR$(186)SPC(3)"*** Disk Directory ***   "CHR$(186)
230 PRINT TAB(7) CHR$(186)SPC(3)" *** Version 2.00 ***    "CHR$(186)
240 PRINT TAB(7) CHR$(186)SPC(3)" *** March , 1983 ***    "CHR$(186)
250 PRINT TAB(7) CHR$(186)SPC(3)" *** By Wes Meier ***    "CHR$(186)
260 PRINT TAB(7)CHR$(204)STRING$(28,205)CHR$(185)
270 PRINT TAB(7)CHR$(186)SPC(2)"Reading: "AV SPC(15)AV CHR$(186)
280 PRINT TAB(7)CHR$(200)STRING$(28,205)CHR$(188)
290 ADRV="A:":ON ERROR GOTO 310
300 GOTO 350
310 IF ERR=53 THEN RESUME 320 ELSE ON ERROR GOTO 0
320 MID$(ADRV,1,1)=CHR$(ASC(ADRV)+1)
330 IF ASC(ADRV)>66 THEN ON ERROR GOTO 0 ELSE 350
340 CLOSE:ADRV="A:":OPEN "O",1,ADRV+"DIR.DAT":CLOSE
350 OPEN "I",1,ADRV+"DIR.DAT":ON ERROR GOTO 0
360 ENTRIES=0
370 WHILE NOT EOF(1)
380      ENTRIES=ENTRIES+1
390      INPUT #1,A(ENTRIES)
400      LOCATE 15,20,0
410      PRINT A(ENTRIES);
420 WEND
430 CLOSE
440 'Check for Color Card
450 SCRSEG=&HB800
460 DEF SEG=SCRSEG
470 POKE 0,95:IF PEEK(0)<>95 THEN SCRSEG=&HB000:DEF SEG=SCRSEG
480 GOTO 970
490 '********************** SUBROUTINES **********************
500 '
510 '**********************************
520 '*** Blinking Cursor Subroutine ***
530 '**********************************
540 T=POS(0):L=CSRLIN
550 LOCATE L,T,0:PRINT "?";:FOR O=1 TO 30:ANSWER$=INKEY$
560 IF ANSWER$<>""THEN IF ANSWER$="*"THEN RETURN 970 ELSE RETURN ELSE NEXT
570 LOCATE L,T,0:PRINT CHR$(220);:FOR O=1 TO 30:ANSWER$=INKEY$
580 IF ANSWER$<>""THEN IF ANSWER$="*"THEN RETURN 970 ELSE RETURN ELSE NEXT
590 GOTO 550
600 ' ********************************
610 ' *** Yes/No Answer Subroutine ***
620 ' ********************************
630 GOSUB 510:LOCATE L,T
640 IF ANSWER$="Y" OR ANSWER$="y" OR ANSWER$=CHR$(13) THEN 670
650 IF ANSWER$="0" OR ANSWER$="n" OR ANSWER$="N" THEN 680
660 SOUND 250,4:GOTO 630
670 ANSWER$="Y":PRINT "? Yes":RETURN
680 ANSWER$="N":PRINT "? No":RETURN
690 '
700 '******* SUBROUTINE TO DUMP DATA TO DISK ********
710 'DRIVE=0 IF DRIVE "A" OR 1 IF DRIVE "B"
720 SCREEN ,,0,0:COLOR 31,4,4:CLS
730 LOCATE 12,14,0:PRINT"Saving Data to Disk.....";
740 IF DRIVE=0 THEN OPEN"O",1,"DIR.DAT":GOTO 760
750 OPEN"O",1,"B:DIR.DAT"
760 FOR X=1 TO ENTRIES:IF A(X)="" THEN 770 ELSE WRITE #1,A(X)
770 NEXT:CLOSE:RETURN
780 '*****************************************************
790 '*   SUBROUTINE TO SORT THE DATA ARRAY BY FILESPEC   *
800 '*****************************************************
810 PRINT"Sorting Data.........."
820 M=ENTRIES:N=M:C=0
830 M=INT(M/2):IF M=0 THEN SORTFLAG=0:RETURN ELSE J=1:K=N-M
840 I=J
850 L=I+M:C=C+1
860 IF A(I)<A(L)THEN 870 ELSE SWAP A(I),A(L):I=I-M:IF I<1 THEN 870 ELSE 850
870 J=J+1:IF J>K THEN 830 ELSE 840
880 '*****************************************************
890 '*   SUBROUTINE TO SORT THE DATA ARRAY BY DISK NO.   *
900 '*****************************************************
910 PRINT"Sorting Data.........."
920 FOR X=1 TO ENTRIES:A(X)=RIGHT$(A(X),3)+LEFT$(A(X),12):NEXT
930 GOSUB 820
940 SORTFLAG=1
950 FOR X=1 TO ENTRIES:A(X)=RIGHT$(A(X),12)+LEFT$(A(X),3):NEXT
960 RETURN
970 '                           ************
980 '                         ****  MENU  ****
990 '                           ************
1000 IF SORTFLAG=1 THEN GOSUB 810
1010 IF PAGE=1 THEN COLOR ,,1:SCREEN ,,1,1:GOTO 1570
1020 WIDTH 80:SCREEN 0,1,1,1:COLOR ,1,1:PAGE=1
1030 CLS
1040 COLOR 6
1050 LOCATE 5,1,0
1060 PRINT CHR$(201)STRING$(78,205)CHR$(187);
1070 PRINT CHR$(186);
1080 COLOR 13
1090 PRINT TAB(13)"*** DISK DIRECTORY *** MENU ****";
1100 PRINT ENTRIES"ENTRIES ON RECORD ***";
1110 COLOR 6
1120 PRINT TAB(80)CHR$(186);
1130 PRINT CHR$(204)STRING$(78,205)CHR$(185);
1140 PRINT CHR$(186)TAB(13);
1150 COLOR 3:PRINT"Enter:"TAB(80):COLOR 6:PRINT CHR$(186);
1160 PRINT CHR$(186)TAB(19);
1170 COLOR 27:PRINT"1. ";:COLOR 3
1180 PRINT"To FIND an item."TAB(80);
1190 COLOR 6:PRINT CHR$(186);
1200 PRINT CHR$(186)TAB(19);
1210 COLOR 27:PRINT"2. ";:COLOR 3
1220 PRINT"To ENTER an item or an entire disk."TAB(80);
1230 COLOR 6:PRINT CHR$(186);
1240 PRINT CHR$(186)TAB(19);
1250 COLOR 27:PRINT"3. ";:COLOR 3
1260 PRINT"To DELETE an item or an entire disk."TAB(80);
1270 COLOR 6:PRINT CHR$(186);
1280 PRINT CHR$(186)TAB(19);
1290 COLOR 27:PRINT"4. ";:COLOR 3
1300 PRINT"To LIST the file to the CRT or the PRINTER."TAB(80);
1310 COLOR 6:PRINT CHR$(186);
1320 PRINT CHR$(186)TAB(19);
1330 COLOR 27:PRINT"5. ";:COLOR 3
1340 PRINT"To LIST the directory of a disk."TAB(80);
1350 COLOR 6:PRINT CHR$(186);
1360 PRINT CHR$(186)TAB(19);
1370 COLOR 27:PRINT"6. ";:COLOR 3
1380 PRINT"To BACKUP the data file or this program."TAB(80);
1390 COLOR 6:PRINT CHR$(186);
1400 PRINT CHR$(186)TAB(19);
1410 COLOR 27:PRINT"   ";:COLOR 3
1420 PRINT TAB(80);
1430 COLOR 6:PRINT CHR$(186);
1440 PRINT CHR$(186)TAB(19);
1450 COLOR 27:PRINT"   ";:COLOR 3
1460 PRINT TAB(80);
1470 COLOR 6:PRINT CHR$(186);
1480 PRINT CHR$(186)TAB(19);
1490 COLOR 27:PRINT"9. ";:COLOR 3
1500 PRINT"To RETURN to DOS."TAB(80);
1510 COLOR 6:PRINT CHR$(186);
1520 PRINT CHR$(204)STRING$(78,205)CHR$(185);
1530 PRINT CHR$(186)TAB(27);
1540 COLOR 20,7:PRINT" *** ENTER YOUR CHOICE *** ";
1550 COLOR 6,1:PRINT TAB(80)CHR$(186);
1560 PRINT CHR$(200)STRING$(78,205)CHR$(188);
1570 BEEP
1580 CHOICE$=INKEY$:IF CHOICE$="" THEN 1580
1590 X=INSTR("123456789",CHOICE$):IF X=0 THEN 1570
1600 SCREEN ,,0,0:COLOR 6,1,1:CLS
1610 ON X GOTO 1620,2040,2850,3280,10010,10410,1570,1570,11130
1620 '****************************************
1630 '*     ***  Find an ITEM routine ***    *
1640 '****************************************
1650 COLOR ,3,3:CLS
1660 COLOR 16:PRINT AL;:COLOR 1
1670 PRINT TAB(26)"*** FIND AN ITEM ROUTINE ***"
1680 COLOR 16:PRINT AL
1690 COLOR 4:PRINT"Enter complete or partial ";
1700 PRINT"filespec of ITEM to be found "AQ"........"
1710 COLOR 1:INPUT AT:IF AT="*" THEN 970' Return to menu.
1720 FOR X=1 TO LEN(AT)
1730 IF ASC(MID$(AT,X,1))>96 THEN MID$(AT,X,1)=CHR$(ASC(MID$(AT,X,1))-32)
1740 NEXT
1750 FOR X=1 TO ENTRIES
1760 IF INSTR(A(X),AT)=0 OR LEFT$(A(X),12)=LEFT$(AX,12) THEN 1850
1770 AX=A(X)
1780 PRINT AV;LEFT$(A(X),12);AV" can be found on disks: ";
1790 FOR Y=X TO ENTRIES
1800 IF LEFT$(AX,12)=LEFT$(A(Y),12) THEN PRINT RIGHT$(A(Y),3)", ";:GOTO 1820
1810 Y=ENTRIES
1820 NEXT
1830 PRINT:PRINT:PRINT"Is this the ITEM you wanted to find ";
1840 GOSUB 610:IF ANSWER="Y"THEN 1870
1850 NEXT:PRINT:PRINT"I cannot locate any incidence of "AV;AT;AV". Try again."
1860 PRINT:GOTO 1690
1870 PRINT:PRINT"Do you want to RUN "AV;AX;AV" ";
1880 GOSUB 610:IF ANSWER="N" THEN 970
1890 ON ERROR GOTO 1910
1900 GOTO 1920
1910 IF ERR=53 THEN RESUME 1930 ELSE ON ERROR GOTO 0
1920 IF MID$(AX,10,3)="BAS" THEN RUN LEFT$(AX,12) ELSE 2000
1930 ON ERROR GOTO 1940:RUN "B:"+LEFT$(AX,12)
1940 IF ERR=53 THEN RESUME 1950 ELSE ON ERROR GOTO 0
1950 ON ERROR GOTO 0:COLOR 4:PRINT:BEEP:BEEP:PRINT"I cannot locate "AV;AX;AV;
1960 PRINT" on either drive "AV"A"AV" or drive "AV"B"AV"!!!"
1970 PRINT"Please check to see that Disk #";
1980 PRINT RIGHT$(AX,3)" is mounted and press any"
1990 PRINT"key to continue ";:COLOR 1:GOSUB 540:PRINT:GOTO 1870
2000 PRINT:PRINT"Since "AV;AX;AV" doesn't have the "AV".BAS"AV" extension,";
2010 PRINT "I can't RUN it!"
2020 PRINT"Press any key to return to the menu...("AV"*"AV" to jump to DOS) ";
2030 GOSUB 510:IF ANSWER<>"*"THEN 970 ELSE SYSTEM
2040 '****************************
2050 '**** ITEM ENTRY ROUTINE ****
2060 '****************************
2070 COLOR 4,7,7:CLS
2080 COLOR 1:PRINT AL;:COLOR 4
2090 PRINT TAB(27)"*** Item Entry Routine ***"
2100 COLOR 1:PRINT AL:COLOR 4
2110 LOCATE 12,1
2120 PRINT"Do you want to enter from the ";:COLOR 17:PRINT"K";:COLOR 4
2130 PRINT "eyboard or read a ";:COLOR 17:PRINT "D";:COLOR 4:PRINT "isk "AQ;
2140 COLOR 1
2150 GOSUB 510:COLOR 4
2160 IF ANSWER="*"THEN 970 ELSE IF ANSWER="k" OR ANSWER="K" THEN 2190
2170 IF ANSWER="D" OR ANSWER="d" THEN 2420
2180 LOCATE L,T:BEEP:GOTO 2150
2190 ' Keyboard item entry routine
2200 LOCATE 12,1:PRINT SPACE$(79)
2210 LOCATE 4,1
2220 PRINT AV".BAS"AV" is the default extension."
2230 PRINT "Enter filespec "AQ;:INPUT A:IF A="*"THEN 970
2240 IF LEN(A)>12 THEN BEEP:PRINT A" is too long !":GOTO 2230
2250 INPUT "Enter disk # ";AD
2260 IF VAL(AD)<1 OR VAL(AD)>999 THEN BEEP:GOTO 2250
2270 AD=RIGHT$("00"+AD,3)
2280 K=INSTR(A,".")
2290 IF K=0 THEN A=LEFT$(A+"       ",8)+".BAS":GOTO 2280
2300 A=LEFT$(MID$(A,1,K-1)+"       ",8)+RIGHT$(A,LEN(A)-(K-1))
2310 A=LEFT$(A+"   ",12)+AD
2320 FOR X=1 TO LEN(A)
2330 IF MID$(A,X,1)<"a" OR MID$(A,X,1)>"z" THEN 2350
2340 MID$(A,X,1)=CHR$(ASC(MID$(A,X,10))-32)
2350 NEXT
2360 PRINT"Is "AV;A;AV" correct ";
2370 GOSUB 610:IF ANSWER$="N"THEN 2230
2380 ENTRIES=ENTRIES+1
2390 A(ENTRIES)=A:A="":PRINT"Entered. Do you have any more entries ";
2400 IF ADRV="A:" THEN DRIVE=0 ELSE DRIVE=1
2410 GOSUB 610:IF ANSWER="N"THEN GOSUB 780:GOSUB 720:RUN ELSE 2220
2420 'Read disk entry routine
2430 LOCATE 12,1:PRINT SPACE$(79)
2440 LOCATE 4,1
2450 PRINT "Enter disk number to be read "AQ;
2460 INPUT ADISK:IF ADISK="*"THEN 970 ELSE DISK=VAL (ADISK)
2470 IF DISK<0 OR DISK>999 THEN BEEP:GOTO 2450
2480 ADISK=STR$(DISK):MID$(ADISK,1)="0":ADISK=RIGHT$("00"+ADISK,3)
2490 PRINT "Enter drive (A or B) (B is the default) ";
2500 GOSUB 510:ADRIVE=ANSWER$:IF ADRIVE=CHR$(13) THEN ADRIVE="B":GOTO 2550
2510 IF ADRIVE="A" OR ADRIVE="a" THEN 2540
2520 IF ADRIVE="B" OR ADRIVE="b" THEN 2540
2530 LOCATE L,T:BEEP:GOTO 2500
2540 IF ADRIVE="a" THEN ADRIVE="A" ELSE IF ADRIVE="b" THEN ADRIVE="B"
2550 LOCATE L,T:PRINT "? "ADRIVE
2560 PRINT:PRINT"Read disk #"ADISK" on drive "AV;ADRIVE;AV". Is this correct ";
2570 GOSUB 610:IF ANSWER$="N"THEN 2450
2580 PRINT"Deleting references to disk #"ADISK"......"
2590 FOR X=1 TO ENTRIES
2600 IF RIGHT$(A(X),3)=ADISK THEN A(X)=""
2610 NEXT
2620 '              ******************************************
2630 '            ***** Routine to Read a Disk's Directory *****
2640 '              ******************************************
2650 CLS
2660 PRINT AL;
2670 IF ADRIVE="A"THEN FILES ELSE FILES "B:*.*"
2680 PRINT:PRINT AL;
2690 FOR LN=2 TO 20
2700   FOR PT=1 TO 78 STEP 13
2710     K=(PT-1)*2+(LN-1)*160
2720     A=""
2730     IF PEEK(K)=32 THEN 2820
2740     FOR P=K TO K+23 STEP 2
2750       A=A+CHR$(PEEK(P))
2760       POKE P+1,14
2770     NEXT
2780   ENTRIES=ENTRIES+1
2790   A(ENTRIES)=A+ADISK
2800   NEXT
2810 NEXT
2820 PRINT:PRINT"Do you have another disk to read ";
2830 IF ADRV="A:" THEN DRIVE=0 ELSE DRIVE=1
2840 GOSUB 610:IF ANSWER$="N" THEN GOSUB 780:GOSUB 720:RUN ELSE CLS:GOTO 2440
2850 '          *****************************************************
2860 '          *   *** DELETE AN ITEM OR ENTIRE DISK ROUTINE ***   *
2870 '          *****************************************************
2880 COLOR 2,0,0:CLS
2890 PRINT AL;
2900 PRINT TAB(22)"*** DELETE AN ITEM OR DISK ROUTINE ***"
2910 PRINT AL;
2920 LOCATE 12,1
2930 PRINT"Delete an ";
2940 COLOR 20,7:PRINT"I";
2950 COLOR 2,0:PRINT"tem or an entire ";
2960 COLOR 20,7:PRINT"D";
2970 COLOR 2,0:PRINT"isk "AQ;
2980 COLOR 4,7:GOSUB 520:COLOR 2,0
2990 IF ANSWER$="*"THEN 970 ELSE IF ANSWER$="I" THEN 3050
3000 IF ANSWER$="i" THEN 3050
3010 IF ANSWER$="D" THEN 3190
3020 IF ANSWER$="d" THEN 3190
3030 SOUND 350,4:LOCATE L,T
3040 GOTO 2980
3050 '*** Item Delete ***
3060 LOCATE L,T:PRINT"? Item":PRINT
3070 PRINT"Enter complete or partial filespec of item to be deleted "AQ;
3080 INPUT AT:IF AT="*"THEN 970
3090 FOR X=1 TO ENTRIES
3100 IF INSTR(A(X),AT)<>0 THEN 3130
3110 NEXT
3120 PRINT"I can't locate "AV;AT;AV". Try again.":GOTO 3070
3130 PRINT"Is "AV;A(X);AV" the item you want to delete ";
3140 GOSUB 610:IF ANSWER$="N"THEN 3110
3150 A(X)="":PRINT"Deleted. Do you have any other items to delete ";
3160 GOSUB 610:IF ANSWER$="Y"THEN 3070
3170 IF ADRV="A:" THEN DRIVE=0 ELSE DRIVE=1
3180 GOSUB 700:RUN
3190 '*** Disk Delete ***
3200 PRINT"Enter number of disk to be deleted ";:INPUT D
3210 PRINT"Searching.......";
3220 FOR X=1 TO ENTRIES
3230 IF VAL(RIGHT$(A(X),3))=D THEN A(X)=""
3240 NEXT
3250 PRINT"Done."
3260 PRINT"Do you have any other disks to delete ";
3270 GOSUB 610:IF ANSWER$="Y"THEN 3200 ELSE 3170
3280 '**************************
3290 '*  *** LIST ROUTINE ***  *
3300 '**************************
3310 COLOR 4,3,3:CLS
3320 LOCATE 11,1:PRINT"Do you want the list Sorted by Disk number ";
3330 GOSUB 610:IF ANSWER$="Y"THEN GOSUB 910
3340 PRINT"List to ";
3350 COLOR 30,0:PRINT"C";
3360 COLOR 4,3:PRINT"RT or ";
3370 COLOR 30,0:PRINT"P";
3380 COLOR 4,3:PRINT"rinter ";
3390 GOSUB 520:IF ANSWER$="*"THEN 970
3400 IF ANSWER$="c" OR ANSWER$="C"THEN 3450
3410 IF ANSWER$="p" OR ANSWER$="P"THEN 3600
3420 SOUND 200,5
3430 LOCATE L,T
3440 GOTO 3390
3450 '*** List to CRT Routine ***
3460 WIDTH 40:COLOR 4,3,3:CLS:PAGE=0:BACK=0
3470 FOR X=1 TO ENTRIES
3480 IF X/22=INT(X/22) THEN 3570
3490 PRINT USING "###  ";X;
3500 COLOR 1
3510 PRINT LEFT$(A(X),12);:COLOR 4
3520 PRINT"  Disk # ";:COLOR 1:PRINT RIGHT$(A(X),3):COLOR 4
3530 NEXT
3540 LOCATE 25,1:COLOR 20,7
3550 PRINT"End of listing. Press any key ";
3560 GOSUB 520:GOTO 970
3570 COLOR 20,7
3580 LOCATE 25,1:PRINT"Press any key to continue ";
3590 GOSUB 520:COLOR 4,3:CLS:GOTO 3490
3600 '*** List to Printer ***
3601 PRINT:PRINT"Printing Directory .... Press any key to abort ....
3610 PAGES=INT(ENTRIES/162)+1
3620 AFMT="Disk: ### - \          \  "
3630 FOR PAGE=1 TO PAGES
3640   LPRINT:LPRINT
3650   LPRINT"Disk Directory        "DATE$",  "TIME$;TAB(65)"Page"PAGE"of"PAGES
3660   LPRINT STRING$(79,"-")
3670   FOR X=(PAGE-1)*162+1 TO (PAGE-1)*162+54
3680     FOR Y=0 TO 2
3690       IF A(X+Y*54)="" THEN 3710
3700       LPRINT USING AFMT;VAL(RIGHT$(A(X+Y*54),3)),LEFT$(A(X+Y*54),12);
3702       IF INKEY$<>"" THEN LPRINT CHR$(12):GOTO 970
3710     NEXT
3720     LPRINT
3730   NEXT
3740   LPRINT STRING$(79,"-")
3750   LPRINT CHR$(12)
3760 NEXT
10000 GOTO 970
10010 '******************************************************
10020 '*   *** Routine to list the Directory of a Disk ***  *
10030 '******************************************************
10040 CLS
10050 PRINT AL;
10060 PRINT TAB(20)"*** Display Disk Directory Routine ***"
10070 PRINT AL
10080 PRINT"Do you want an ";
10090 COLOR 31,0:PRINT"A";
10100 COLOR 6,1:PRINT"ctual Disk Directory or the ";
10110 COLOR 31,0:PRINT"D";
10120 COLOR 6,1:PRINT "ata of a Disk as stored by "AV"DIR"AV"."
10130 PRINT AQ;
10140 GOSUB 520:IF ANSWER$="*"THEN 970
10150 IF ANSWER$="A" OR ANSWER$="a" THEN 10180
10160 IF ANSWER$="D" OR ANSWER$="d" THEN 10290
10170 SOUND 234,5:LOCATE L,T:GOTO 10140
10180 '*** List Actual Directory ***
10190 LOCATE L,T:PRINT "? Actual Directory"
10200 PRINT"Enter drive "AV"A"AV" or "AV"B"AV" ";
10210 GOSUB 520:IF ANSWER$="*"THEN 970
10220 IF ANSWER$="a" OR ANSWER$="A"THEN ANSWER$="A":GOTO 10250
10230 IF ANSWER$="b" OR ANSWER$="B"THEN ANSWER$="B":GOTO 10250
10240 SOUND 231,5:LOCATE L,T:GOTO 10210
10250 LOCATE L,T:PRINT "? "ANSWER$
10260 PRINT AL:COLOR 0,2
10270 FILES ANSWER$+":*.*"
10280 COLOR 6,1:GOTO 10070
10290 LOCATE L,T:PRINT"? Data":PRINT "Enter disk number "AQ;
10300 INPUT AD:IF AD="*"THEN 970
10310 D=VAL(AD):C=0
10320 PRINT AL:COLOR 0,2
10330 FOR X=1 TO ENTRIES
10340 IF D<>VAL(RIGHT$(A(X),3))THEN 10380
10350 IF POS(0)>=78 THEN PRINT
10360 PRINT LEFT$(A(X),12)" ";
10370 C=C+1
10380 NEXT
10390 IF C=0 THEN PRINT"Disk number"D"isn't listed."
10400 GOTO 10280
10410 '********************************************************************
10420 '*          *** Backup Data File and/or Program Routine ***         *
10430 '********************************************************************
10440 IF BACK=1 THEN SCREEN ,,2,2:COLOR 6,1,1:GOTO 11000
10450 WIDTH 80:SCREEN 0,1,2,2:COLOR ,1,1:BACK=1
10460 CLS
10470 COLOR 6
10480 LOCATE 5,1,0
10490 PRINT CHR$(201)STRING$(78,205)CHR$(187);
10500 PRINT CHR$(186);
10510 COLOR 13
10520 PRINT TAB(13)"     *** Backup Data File and/or Program Routine ***";
10530 COLOR 6
10540 PRINT TAB(80)CHR$(186);
10550 PRINT CHR$(204)STRING$(78,205)CHR$(185);
10560 PRINT CHR$(186)TAB(13);
10570 COLOR 3:PRINT"Enter:"TAB(80):COLOR 6:PRINT CHR$(186);
10580 PRINT CHR$(186)TAB(19);
10590 COLOR 27:PRINT"1. ";:COLOR 3
10600 PRINT"To BACKUP the Data File to drive "AV"A"AV"."TAB(80);
10610 COLOR 6:PRINT CHR$(186);
10620 PRINT CHR$(186)TAB(19);
10630 COLOR 27:PRINT"2. ";:COLOR 3
10640 PRINT"To BACKUP the Data File to drive "AV"B"AV"."TAB(80);
10650 COLOR 6:PRINT CHR$(186);
10660 PRINT CHR$(186)TAB(19);
10670 COLOR 27:PRINT"3. ";:COLOR 3
10680 PRINT"To BACKUP the Data File to both drives."TAB(80);
10690 COLOR 6:PRINT CHR$(186);
10700 PRINT CHR$(186)TAB(19);
10710 COLOR 27:PRINT"4. ";:COLOR 3
10720 PRINT"To BACKUP this PROGRAM to drive "AV"A"AV"."TAB(80);
10730 COLOR 6:PRINT CHR$(186);
10740 PRINT CHR$(186)TAB(19);
10750 COLOR 27:PRINT"5. ";:COLOR 3
10760 PRINT"To BACKUP this PROGRAM to drive "AV"B"AV"."TAB(80);
10770 COLOR 6:PRINT CHR$(186);
10780 PRINT CHR$(186)TAB(19);
10790 COLOR 27:PRINT"6. ";:COLOR 3
10800 PRINT"To BACKUP this PROGRAM to both drives."TAB(80);
10810 COLOR 6:PRINT CHR$(186);
10820 PRINT CHR$(186)TAB(19);
10830 COLOR 27:PRINT"7. ";:COLOR 3
10840 PRINT"To BACKUP the Data file and this ";
10850 PRINT"PROGRAM to drive "AV"B"AV"."TAB(80);
10860 COLOR 6:PRINT CHR$(186);
10870 PRINT CHR$(186)TAB(19);
10880 COLOR 27:PRINT"8. ";:COLOR 3
10890 PRINT"To BACKUP the Data file and this PROGRAM to both drives."TAB(80);
10900 COLOR 6:PRINT CHR$(186);
10910 PRINT CHR$(186)TAB(19);
10920 COLOR 27:PRINT"9. ";:COLOR 3
10930 PRINT"To RETURN to the main MENU."TAB(80);
10940 COLOR 6:PRINT CHR$(186);
10950 PRINT CHR$(204)STRING$(78,205)CHR$(185);
10960 PRINT CHR$(186)TAB(27);
10970 COLOR 20,7:PRINT" *** ENTER YOUR CHOICE *** ";
10980 COLOR 6,1:PRINT TAB(80)CHR$(186);
10990 PRINT CHR$(200)STRING$(78,205)CHR$(188);
11000 BEEP
11010 CHOICE$=INKEY$:IF CHOICE$="" THEN 11010
11020 X=INSTR("123456789",CHOICE$):IF X=0 THEN 11000
11030 ON X GOSUB 11050,11060,11070,11080,11090,11100,11110,11120,970
11040 GOTO 10410
11050 DRIVE=0:GOSUB 700:RETURN
11060 DRIVE=1:GOSUB 700:DRIVE=0:RETURN
11070 GOSUB 11050:GOSUB 11060:RETURN
11080 SAVE"DIR":RETURN
11090 SAVE"B:DIR":RETURN
11100 GOSUB 11080:GOSUB 11090:RETURN
11110 GOSUB 11090:GOSUB 11060:RETURN
11120 GOSUB 11110:GOSUB 11080:GOSUB 11050:RETURN
11130 '******* RETURN TO DOS ROUTINE *******
11140 CLS
11150 SYSTEM
```

## GDEMO.BAS

```bas
1 ' test pattern.bas
2 ' marty smith
10 DEFINT A-Z
20 KEY OFF : SCREEN 1,0 : COLOR 1
30 CIRCLE(160,100),50,3 : CIRCLE(160,100),70,3 : CIRCLE(160,100),90,3
40 PAINT(160,100),1,3 : PAINT(100,100),2,3 : PAINT(80,100),3,3
50 J=1 :FOR I=0 TO 300 STEP 20
60   LINE(I,180)-(I+19,199),J,BF
70   J=((J+1) MOD 3)+1
80 NEXT
90 GOSUB 1000
100 SCREEN 2
110 FOR I=40 TO 600 STEP 80 : FOR J=40 TO 160 STEP 40
120   CIRCLE(I,J),39
130 NEXT :NEXT : LINE(0,0)-(639,199),1,B
140 GOSUB 1000
150 SCREEN 0,1 : WIDTH 80 : KEY ON
160 END
1000 LOCATE 1,1 : PRINT "Hit a key to continue . . .";
1010 WHILE INKEY$="" : WEND
1020 RETURN
```

## GRAFTRAX.BAS

```bas
1 ' GRAFTRAX as a subroutine  3/12/83
9 ' *********** Get some graphics going for this demo *******************
10 DEFINT A-Z
15 KEY OFF : KEY 7,"gosub 65000"+CHR$(13)
20 TOG=2 : GOSUB 65010 ' use color for this demo
30 SCREEN 1,0 :OUT 980,2:OUT 981,45 ' 45 is standard. 43 shifts 2 chars. right
40 COLOR 0,0 : CLS
50 CIRCLE (160,100),50,3 : CIRCLE (160,100),75,3 : PAINT (160,100),1,3 : PAINT(160,40),2,3 ' draw some graphics
55 ' make sure variables used in this routine are defined BEFORE they are used.
56 ' integer variable descriptors, i.e. variable% should be used in this routine if a DEFINT statement is not present. They are here as a r
59 ' ****************** SETUP ***************************
60 X%=0 : Y%=0 : Z%=0 : GRAFTRAX%=0 : GRSEG%=0 : A$="" : DIM STACK%(50),CG%(10)
70 DEF SEG : Y% = VARPTR(CG%(0))
80 FOR X% = 0 TO 17 : READ Z% : POKE X% + Y% ,Z% : NEXT ' poke routine into an  array
85 DEF SEG=0 : X%=PEEK(&H16) : Y%=PEEK(&H17) : DEF SEG : GRSEG%=X%+(256*Y%) '     GRSEG is the location where DOS put GRAFTRAX.COM
90 INPUT "small or LARGE";A$ : A$=LEFT$(A$,1) : IF A$="l" OR A$="L" OR A$="2" THEN X% = 2 ELSE X% = 1
100 ' ******** ACTUAL ROUTINE - use GOSUB, with RETURN at END **********
110 DEF SEG = GRSEG% : POKE &H273,X% : DEF SEG ' &h273 is the location in        GRAFTRAX.COM that sets a default of 1 = small, 2 = LARGE i
120 GRAFTRAX% = VARPTR(CG%(0)) : Y% = VARPTR(STACK%(50)) ' stack builds DOWN.
130 CALL GRAFTRAX%(Y%) : ' y% is actually a temporary stack passed to the CALL,  since BASIC only leaves 16 bytes. INT routines use lots of
140 ' At some times, GRAFTRAX.COM is 34 words deep in the stack!
150 END
1000 DATA &h55,&H8b,&Hec,&H8b,&H76,&H06,&H8b,&H1c,&H8b,&He3,&Hcd,&H05,&H8b,&He5,&H5d,&Hca,&H02,&H00
65000 IF TOG=1 THEN TOG=2 ELSE TOG=1
65010 ON TOG GOSUB 65080, 65030
65020 RETURN
65030 REM toggle color graphics
65040 DEF SEG=0
65050 POKE &H410, (PEEK(&H410) AND &HCF) OR &H10
65060 SCREEN 1,0,0,0: SCREEN 0:WIDTH 40:LOCATE ,,1,6,7
65070 RETURN
65080 REM toggle monochrome display
65090 DEF SEG=0
65100 POKE &H410, (PEEK(&H410) OR &H30)
65110 SCREEN 0:WIDTH 40:WIDTH 80:LOCATE ,,1,12,13
65120 RETURN
```

## HOST.BAS

```bas
100 ' HOST.BAS                                                    VERSION 1.00
110 '
120 ' ************************************************************************
130 ' ************************************************************************
140 '
150 ' HOST COMPUTER
160 '
170 ' This program provides the capability to access an IBM Personal
180 ' Computer for the purpose of transmitting or receiving an ASCII
190 ' file from a remote location. It assumes the use of a Hayes
200 ' Smartmodem.
210 '
220 ' Upon receiving a carrier from the remote location, the program
230 ' requests the password. It signs off if the correct password is not
240 ' given in three tries.
250 '
260 ' The program recognizes 7 commands from the user at the remote
270 ' location. They are:
280 '     A - List the files on drive A.
290 '     B - List the files on drive B.
300 '     G - Signoff (GOODBYE).
310 '     M - Send message.
320 '     R - Receive a file from the remote location.
330 '     T - Transmit a file to the remote location.
340 '     ? - Summarize the commands.
350 '
360 ' Received files are opened for APPEND so that data is attached to the
370 ' end of a previously used file. Also, if in the RECEIVE FILE mode, 15
380 ' seconds passes with no activity, the user at the remote location is
390 ' asked if the end of file has been reached. If the answer is in the
400 ' affirmative or if there is no response within 1 minute, the file is
410 ' closed and the RECEIVE FILE mode is deactivated.
420 '
430 ' The program recognizes 3 commands from the system operator at the IBM
440 ' PC's location. They are:
450 '     ALT E      - Echo on / Echo off.
460 '     CTRL Prtsc - Printout on/ Printout off.
470 '     ALT M      - Send message to remote location or to Smartmodem.
480 '
490 ' An active communications link times out after 5 minutes of inactivity.
500 '
510 ' ************************************************************************
520 ' WILLIAM HT BAILEY          PHONE: 215-924-0771                 JUNE 1982
522 '
525 '               DEBUGGED WITH THE HELP OF HOWARD CARTER
530 ' ************************************************************************
540 ' ************************************************************************
1000 '
1010 '              ------------ INITIALIZATION ------------
1020 '
1030 OPTION BASE 1: DIM MSG$(32): DEF SEG: POKE 106,0: CLOSE: CLS: KEY OFF
1040 DEFINT A-Z: XOFF$=CHR$(19): XON$=CHR$(17): CNT=0: FALSE=0: TRUE=NOT FALSE
1050 PAUSE=FALSE: PRNT=FALSE: ECHO=FALSE: RECV=FALSE: TRANS=FALSE: MESG=FALSE
1060 TIMER=FALSE: BYE=FALSE: ACTIVE=FALSE: AA=FALSE: CONNECT=FALSE: LF=FALSE
1065 OPMSG=FALSE: C$=""
1070 '
1080 MSG$(1)=CHR$(13)+CHR$(10)
1090 MSG$(2)="PASSWORD? "
1100 MSG$(3)="TRY AGAIN"+MSG$(1)
1110 MSG$(4)="*** ENTER ? FOR SUMMARY OF COMMANDS ***"+MSG$(1)
1120 MSG$(5)=">"
1130 MSG$(6)=MSG$(1)+"FILES A"+MSG$(1)
1140 MSG$(7)=MSG$(1)+"FILES B"+MSG$(1)
1150 MSG$(8)="*** GOODBYE ***"+MSG$(1)
1160 MSG$(9)="ENTER FILENAME IN THE FORMAT   (DRIVE):(FILESPEC) "
1170 MSG$(10)=MSG$(1)+"*** READY TO RECEIVE FILE ***"+MSG$(1)
1180 MSG$(11)="RECEPTION SUSPENDED. END OF FILE? (Y/N) "+MSG$(1)+CHR$(7)
1190 MSG$(12)="*** RECEPTION TERMINATED ***"+MSG$(1)+CHR$(7)
1200 MSG$(13)=MSG$(1)+"*** TRANSMISSION BEGINNING IN 15 SECONDS ***"+MSG$(1)
1210 MSG$(14)="    TYPE X TO ABORT TRANSMISSION"+MSG$(1)
1220 MSG$(15)="*** TRANSMISSION COMPLETE ***"+MSG$(1)+CHR$(7)
1230 MSG$(16)=MSG$(1)+"      --- SUMMARY OF COMMANDS ---"+MSG$(1)
1240 MSG$(17)="A - LIST THE FILES ON DRIVE A"+MSG$(1)
1250 MSG$(18)="B - LIST THE FILES ON DRIVE B"+MSG$(1)
1260 MSG$(19)="G - SIGNOFF (GOODBYE)"+MSG$(1)
1270 MSG$(20)="M - SEND MESSAGE"+MSG$(1)
1280 MSG$(21)="R - RECEIVE A FILE FROM YOUR LOCATION"+MSG$(1)
1290 MSG$(22)="T - TRANSMIT A FILE TO YOUR LOCATION"+MSG$(1)
1300 MSG$(23)="? - PRINT THE SUMMARY OF COMMANDS"+MSG$(1)+MSG$(1)
1310 MSG$(24)="--- FILE NOT FOUND ---"+MSG$(1)
1320 MSG$(25)="--- DISK IS FULL ---"+MSG$(1)
1330 MSG$(26)="--- BAD FILE NAME ---"+MSG$(1)
1340 MSG$(27)="--- TOO MANY FILES ---"+MSG$(1)
1350 MSG$(28)="--- DISK WRITE PROTECTED ---"+MSG$(1)
1360 MSG$(29)="--- DISK NOT READY ---"+MSG$(1)
1370 MSG$(30)="--- ERROR CONDITION ENCOUNTERED ---"+MSG$(1)
1380 MSG$(31)="ENTER 1 LINE MESSAGE"+MSG$(1)
1390 MSG$(32)="*** SYSTEM OPERATOR MESSAGE ***"+MSG$(1)+CHR$(7)
1400 '
1410 ON ERROR GOTO 2070
1420 OPEN "COM1:300,E,7,1" AS #1
1430 '
1440 LOCATE ,,1: PRINT #1,"********** HOST COMPUTER program active **********"
1450 PRINT #1,SPACE$(80);
1460 PRINT #1,"   WILLIAM HT BAILEY    PHONE: 215-924-0771        JUNE 1982"
1700 '
1710 ' ***********************************************************************
1720 '
1730 '              --------- MAIN PROCESSING LOOP ---------
1740 '
1750 B$=INKEY$: IF LEN(B$)>1 THEN  GOSUB 2240
1760 '
1770 IF LOF(1)<128 THEN PAUSE=TRUE: PRINT #1,XOFF$;
1780 IF EOF(1) THEN IF NOT AA THEN PRINT #1,"ATS0=1": AA=TRUE: GOTO 1895             ELSE GOTO 1895
1790 A$=INPUT$(LOC(1),#1)
1795 IF LF THEN LF=FALSE: C$=""
1797 IF LEN(C$)<254 THEN C$=C$+A$
1800 '
1810 FOR I=1 TO LEN(A$)
1820 D$=MID$(A$,I,1)
1825 IF D$=CHR$(13) OR D$=CHR$(10) THEN LF=TRUE
1830 IF D$=CHR$(10) THEN GOTO 1870
1840 IF PRNT AND NOT OPMSG THEN LPRINT D$;
1850 IF D$=CHR$(8) THEN IF POS(0)>1 THEN LOCATE ,POS(0)-1: PRINT " ";:               LOCATE ,POS(0)-1: GOTO 1870
1860 PRINT D$;
1870 NEXT I: IF NOT LF THEN 1895
1875 '
1880 GOTO 3050
1890 '
1895 IF BYE THEN CNT2=CNT2+1: IF CNT2=1000 THEN 4550
1900 IF LOC(1)>0 OR BYE THEN 1750
1910 IF PAUSE THEN PAUSE=FALSE: PRINT #1,XON$;
1920 IF NOT CONNECT THEN 1750
1930 IF T1>VAL(MID$(TIME$,4,2))+(VAL(LEFT$(TIME$,2))*60) THEN 1750
1940 GOTO 4550
2000 '
2010 ' ***********************************************************************
2020 '
2030 '             ------------- SUBROUTINES --------------
2040 '
2050 ' ERROR HANDLER
2060 '
2070 M=30
2080 IF ERR=24 THEN PRINT "*** MODEM NOT READY ***": BEEP: STOP
2090 IF ERR=69 THEN RESUME
2100 IF ERR=27 THEN PRINT "PRINTER NOT READY ***": BEEP: RESUME NEXT
2110 IF ERR=53 THEN M=24
2120 IF ERR=61 THEN M=25
2130 IF ERR=64 THEN M=26
2140 IF ERR=67 THEN M=27
2150 IF ERR=70 THEN M=28
2160 IF ERR=71 THEN M=29
2170 IF M<>30 THEN PRINT MSG$(M): BEEP: GOTO 2190
2180 PRINT "--- ERROR";ERR;" ENCOUNTERED ON LINE";ERL;" ---": BEEP
2190 PRINT #1,MSG$(M);: IF PRNT THEN LPRINT MSG$(M);
2200 RECV=FALSE: TRANS=FALSE: CLOSE #2: RESUME 4160
2210 '
2220 ' SYSTEM OPERATOR COMMAND
2230 '
2240 CODE=ASC(MID$(B$,2,1))
2250 '
2260 IF CODE<>18 THEN 2300
2270 IF ECHO=FALSE THEN ECHO=TRUE: BEEP: PRINT "--- ECHO ON ---": RETURN
2280 ECHO=FALSE: BEEP: PRINT "--- ECHO OFF ---": RETURN
2290 '
2300 IF CODE<>114 THEN 2340
2310 IF PRNT=FALSE THEN PRNT=TRUE: BEEP: PRINT "--- PRINTOUT ON ---": RETURN
2320 PRNT=FALSE: BEEP: PRINT "--- PRINTOUT OFF ---": RETURN
2330 '
2340 IF CODE<>50 THEN RETURN
2350 PRINT #1,MSG$(32);: IF PRNT THEN LPRINT MSG$(32);
2355 IF ECHO THEN PRINT MSG$(32);
2360 IF NOT PAUSE THEN PRINT #1,XOFF$;
2370 B$=INKEY$
2380 IF LEN(B$)>1 THEN 2370
2390 IF B$="" THEN 2370 ELSE PRINT #1,B$;
2400 IF ECHO THEN PRINT B$;
2410 IF PRNT THEN LPRINT B$;
2420 IF B$<>CHR$(10) AND B$<>CHR$(13) THEN 2370
2430 IF NOT PAUSE THEN PRINT #1,XON$;
2435 OPMSG=TRUE
2440 RETURN
3000 '
3010 ' ***********************************************************************
3020 '
3030 '             ------------ COMMAND DECODE ------------
3040 '
3050 IF MESG THEN MESG=FALSE: GOTO 4160
3060 IF ACTIVE THEN 3130
3070 IF CONNECT THEN 3100
3080 '
3090 IF INSTR(C$,"NECT")<>0 THEN CONNECT=TRUE: GOTO 4050 ELSE GOTO 1900
3100 IF INSTR(C$,"WORD")<>0 OR INSTR(C$,"word")<>0 THEN VALID=TRUE: GOTO 4080
3110 VALID=FALSE: GOTO 4080
3120 '
3130 IF RECV OR TRANS THEN 3280
3140 IF BYE THEN 4550
3150 '
3160 IF OPMSG THEN OPMSG=FALSE: GOTO 4160
3165 IF INSTR(C$,"CARRIER")<>0 THEN BYE=TRUE: GOTO 4550
3170 IF INSTR(C$,"M")<>0 OR INSTR(C$,"m")<>0 THEN 5150
3180 IF INSTR(C$,"?")<>0 THEN 5200
3190 IF INSTR(C$,"A")<>0 OR INSTR(C$,"a")<>0 THEN C$="A": M=6: GOTO 5070
3200 IF INSTR(C$,"B")<>0 OR INSTR(C$,"b")<>0 THEN C$="B": M=7: GOTO 5070
3210 IF INSTR(C$,"R")<>0 OR INSTR(C$,"r")<>0 THEN 6050
3220 IF INSTR(C$,"T")<>0 OR INSTR(C$,"t")<>0 THEN 7050
3230 IF INSTR(C$,"G")<>0 OR INSTR(C$,"g")<>0 THEN 4550
3240 PRINT #1,MSG$(3);: IF PRNT THEN LPRINT MSG$(3);
3250 IF ECHO THEN PRINT MSG$(3);
3260 GOTO 4160
3270 '
3280 M=INSTR(C$,"A:"): IF M<>0 THEN 3330
3290 M=INSTR(C$,"a:"): IF M<>0 THEN 3330
3300 M=INSTR(C$,"B:"): IF M<>0 THEN 3330
3310 M=INSTR(C$,"b:"): IF M=0 THEN 3240
3320 '
3330 F$=MID$(C$,M,14)
3340 IF RIGHT$(F$,1)=CHR$(10) OR RIGHT$(F$,1)=CHR$(13) THEN F$=                      LEFT$(F$,LEN(F$)-1): GOTO 3340
3350 IF RECV THEN 6080 ELSE GOTO 7080
4000 '
4010 ' ***********************************************************************
4020 '
4030 '              --------------- SIGN ON ----------------
4040 '
4050 PRINT #1,MSG$(2);: IF PRNT THEN LPRINT MSG$(2);
4055 IF ECHO THEN PRINT MSG$(2);
4060 T1=VAL(MID$(TIME$,4,2))+(VAL(LEFT$(TIME$,2))*60)+2: GOTO 1900
4070 '
4080 IF VALID THEN 4130
4085 IF INSTR(C$,"CARRIER")<>0 THEN 4655
4090 CNT=CNT+1: IF CNT>=3 THEN 4550
4100 PRINT #1,MSG$(3);: IF PRNT THEN LPRINT MSG$(3);
4105 IF ECHO THEN PRINT MSG$(3);
4110 GOTO 1900
4120 '
4130 ACTIVE=TRUE
4140 PRINT #1,MSG$(4);: IF PRNT THEN  LPRINT MSG$(4);
4145 IF ECHO THEN PRINT MSG$(4);
4150 '
4151 ' COME HERE AFTER PROCESSING A COMMAND
4152 '
4160 PRINT #1,MSG$(5);: IF PRNT THEN LPRINT MSG$(5);
4165 IF ECHO THEN PRINT MSG$(5);
4170 '
4180 ' SET TIMEOUT CLOCK
4190 '
4200 T1=VAL(MID$(TIME$,4,2))+(VAL(LEFT$(TIME$,2))*60)+5: GOTO 1900
4500 '
4510 ' ***********************************************************************
4520 '
4530 '              --------------- SIGN OFF ---------------
4540 '
4550 IF BYE THEN 4635
4560 PRINT #1,MSG$(8);: IF PRNT THEN LPRINT MSG$(8);
4565 IF ECHO THEN PRINT MSG$(8);
4570 '
4580 FOR I=1 TO 2000: NEXT I
4590 PRINT #1,"+++";: IF ECHO THEN PRINT "+++"
4600 FOR I=1 TO 2000: NEXT I
4610 '
4620 CNT2=0: BYE=TRUE: GOTO 1900
4630 '
4635 IF INSTR(C$,"CARRIER")<>0 THEN 4655
4640 IF INSTR(C$,"OK")=0 THEN 4580
4655 BYE=FALSE: CONNECT=FALSE: ACTIVE=FALSE: CNT=0
4660 CLS: PRINT "********** HOST COMPUTER program active **********"
4665 PRINT #1,"ATH"
4670 GOTO 1750
5000 '
5010 ' ***********************************************************************
5020 '
5030 '              ----------- COMMANDS A,B,M,? -----------
5040 '
5050 ' LIST FILES (Modifications necessary if using graphics display.)
5060 '
5070 CLS: PRINT #1,MSG$(M);
5080 FILES C$+":*.*": PRINT: DEF SEG=&HB000: FOR I=0 TO (80*(CSRLIN-1)-1)
5090 B$=CHR$(PEEK(2*I)): PRINT #1,B$;: IF PRNT THEN LPRINT B$;
5095 NEXT I
5100 PRINT #1,MSG$(1);: IF PRNT THEN LPRINT MSG$(1);
5105 IF ECHO THEN PRINT MSG$(1);
5110 GOTO 4160
5120 '
5130 ' USER MESSAGE
5140 '
5150 PRINT "*** USER MESSAGE ***": BEEP: PRINT #1,MSG$(31);
5160 IF PRNT THEN LPRINT "*** USER MESSAGE ***"
5165 MESG=TRUE: GOTO 4160
5170 '
5180 ' LIST SUMMARY OF COMMANDS
5190 '
5200 FOR M=16 TO 23
5210 PRINT #1,MSG$(M);: IF PRNT THEN LPRINT MSG$(M);
5215 IF ECHO THEN PRINT MSG$(M);
5220 NEXT M: GOTO 4160
6000 '
6010 ' ***********************************************************************
6020 '
6030 '              ------------- RECEIVE FILE -------------
6040 '
6050 PRINT #1,MSG$(9);: IF PRNT THEN LPRINT MSG$(9);
6055 IF ECHO THEN PRINT MSG$(9);
6060 RECV=TRUE: GOTO 1900
6070 '
6080 OPEN F$ FOR APPEND AS #2
6090 PRINT #1,MSG$(10);: IF PRNT THEN LPRINT MSG$(10);
6095 IF ECHO THEN PRINT MSG$(10);
6100 '
6110 B$=INKEY$: IF LEN(B$)>1 THEN GOSUB 2240
6115 IF OPMSG THEN OPMSG=FALSE
6120 '
6130 IF LOF(1)<128 THEN PAUSE=TRUE: PRINT #1,XOFF$;
6140 IF EOF(1) THEN IF TIMER THEN 6270 ELSE GOTO 6220
6145 IF TIMER THEN TIMER=FALSE
6150 A$=INPUT$(LOC(1),#1): PRINT #2,A$;
6152 FOR I=1 TO LEN(A$): D$=MID$(A$,I,1)
6154 IF D$=CHR$(10) THEN 6158
6156 IF ECHO THEN PRINT D$;
6158 NEXT I
6160 IF LOC(1)>0 THEN 6130
6170 IF PAUSE THEN PAUSE=FALSE: PRINT #1,XON$;
6180 GOTO 6110
6190 '
6200 ' SET TIMEOUT CLOCK
6210 '
6220 T2=VAL(RIGHT$(TIME$,2))+(VAL(MID$(TIME$,4,2))*60)+15
6230 TIMER=TRUE: GOTO 6110
6240 '
6250 ' CHECK TIMEOUT CLOCK
6260 '
6270 IF T2>VAL(RIGHT$(TIME$,2))+(VAL(MID$(TIME$,4,2))*60) THEN 6110
6280 '
6290 ' END OF FILE?
6300 '
6310 PRINT #1,MSG$(11);: IF PRNT THEN LPRINT MSG$(11);
6315 IF ECHO THEN PRINT MSG$(11);
6320 T3=VAL(MID$(TIME$,4,2))+(VAL(LEFT$(TIME$,2))*60)+1
6330 IF T3<VAL(MID$(TIME$,4,2))+(VAL(LEFT$(TIME$,2))*60) THEN 6370
6340 IF EOF(1) THEN 6330
6350 B$=INPUT$(LOC(1),#1): IF INSTR(B$,"Y")=0 AND INSTR(B$,"y")=0 THEN               TIMER=FALSE: GOTO 6110
6360 '
6370 PRINT #1,MSG$(12);: IF PRNT THEN LPRINT MSG$(12);
6375 IF ECHO THEN PRINT MSG$(12);
6380 CLOSE #2: RECV=FALSE: TIMER=FALSE: GOTO 4160
7000 '
7010 ' ***********************************************************************
7020 '
7030 '              ------------- TRANSMIT FILE -------------
7040 '
7050 PRINT #1,MSG$(9);: IF PRNT THEN LPRINT MSG$(9);
7055 IF ECHO THEN PRINT MSG$(9);
7060 TRANS=TRUE: GOTO 1900
7070 '
7080 OPEN F$ FOR INPUT AS #2: FOR M=13 TO 14
7090 PRINT #1,MSG$(M);: IF PRNT THEN LPRINT MSG$(M);
7095 IF ECHO THEN PRINT MSG$(M);
7100 NEXT M: FOR I=1 TO 14000: NEXT I
7110 '
7120 B$=INKEY$: IF LEN(B$)>1 THEN GOSUB 2240
7125 IF OPMSG THEN OPMSG=FALSE
7130 '
7140 IF EOF(2) THEN 7210
7150 A$=INPUT$(1,#2): PRINT #1,A$;
7160 IF A$<>CHR$(10) AND ECHO THEN PRINT A$;
7170 '
7180 IF EOF(1) THEN 7120
7190 B$=INPUT$(LOC(1),#1): IF INSTR(B$,"X")<>0 OR INSTR(B$,"x")<>0 THEN 7210
7195 IF INSTR(B$,"CARRIER")<>0 THEN CLOSE #2: TRANS=FALSE: GOTO 4655
7200 '
7210 PRINT #1,MSG$(15);: IF PRNT THEN LPRINT MSG$(15);
7215 IF ECHO THEN PRINT MSG$(15);
7220 CLOSE #2: TRANS=FALSE: GOTO 4160
9996 '
9997 ' **********************************************************************
9998 ' **********************************************************************
9999 END
```

## MAKEDOTS.BAS

```bas
10 DEFINT A-W : DEFSTR X-Z
20 XON=CHR$(2) : XOFF=CHR$(1)                                             
50 DIM ARRAY(31,31)
60 FOR I=0 TO 23:FOR J=0 TO 17:ARRAY(I,J)=0:NEXT :NEXT
100 FOR I=0 TO 23
110 LOCATE I+1,40
120   FOR J=0 TO 17
130   IF ARRAY(I,J) THEN PRINT XON+" "; ELSE PRINT XOFF+" ";
140   NEXT
150 NEXT
160 LOCATE 1,1
```

## POSTER.BAS

```bas
10 CLS
20 A$=" ":X=2:Y=3:L$="YES":M$="CHAR":SCREEN 0,0,0:CLS:DEF SEG:WIDTH 80:KEY OFF
30 CLS:PRINT STRING$(81,"*")+"                                Poster Printer                                "+STRING$(81,"*")
40 LOCATE 5,10:PRINT"1 - Horizontal =";X;"      "
50 LOCATE 7,10:PRINT"2 - Vertical   =";Y;"      "
60 LOCATE 9,10:PRINT"3 - Centered   = ";L$
70 LOCATE 11,10:PRINT"4 - Character  = ";M$;"      ";
80 FOR Z=1 TO LEN(A$):IF MID$(A$,Z,1)>="a" AND MID$(A$,Z,1)<="z" THEN MID$(A$,Z,1)=CHR$(ASC(MID$(A$,Z,1))-32)
90 NEXT Z
100 LOCATE 13,10:PRINT"5 - Message    = ";A$;SPACE$(80-28-LEN(A$))
102 LOCATE 15,10:PRINT"6 - Terminate"
110 BEEP:LOCATE 17,5:PRINT"Press number of item to change or 'P' to start printing->";:B$=INPUT$(1)
120 IF B$="1" THEN LOCATE 5,27:INPUT "",X:GOTO 40
130 IF B$="2" THEN LOCATE 7,27:INPUT "",Y:GOTO 40
140 IF B$="3" THEN LOCATE 9,27:IF L$="YES" THEN L$="NO" ELSE L$="YES"
150 IF B$="3" THEN PRINT L$;"  ";:GOTO 40
160 IF B$="4" THEN LOCATE 11,27:INPUT "",M$:IF M$="char" THEN M$="CHAR":GOTO 40
170 IF B$="4" THEN 40
180 IF B$="5" THEN LOCATE 13,27:INPUT "",A$:IF A$="" THEN A$=" ":GOTO 40:ELSE GOTO 40
182 IF B$="6" THEN END
190 IF B$<>"p" AND B$<>"P" THEN 110
200 G1=0:IF LEFT$(L$,1)="y" OR LEFT$(L$,1)="Y" THEN G1=1
210 A=ASC(LEFT$(A$,1))
220 FOR T=1 TO LEN(A$)
230 P$=MID$(A$,T,1)
240 FOR O=1 TO 50
250 READ S$:FOR Z=1 TO 7:READ S(Z):NEXT Z
260 IF P$=" " THEN 580
270 IF P$=S$ THEN 290
280 NEXT O
290 RESTORE
300 X$=M$
310 IF M$="CHAR" THEN X$=S$
320 FOR U=1 TO 7
330 FOR K=8 TO 0 STEP-1
340 IF 2^K<S(U) THEN 370
350 J(9-K)=0
360 GOTO 390
370 J(9-K)=1:S(U)=S(U)-2^K
380 IF S(U)=1 THEN 600
390 NEXT K
400 FOR T1=1 TO X
410 LPRINT TAB((37-4.5*Y)*G1/(LEN(X$))+1);
420 FOR B=1 TO F(U)
430 IF J(B)=0 THEN 460
440 FOR I=1 TO Y:LPRINT X$;:NEXT I
450 GOTO 500
460 FOR I=1 TO Y
470 FOR I1=1 TO LEN(X$)
480 LPRINT" ";:NEXT I1
490 NEXT I
500 NEXT B
510 LPRINT" "
520 NEXT T1
530 NEXT U
540 FOR H=1 TO 2*X:LPRINT" ":NEXT H
550 NEXT T
560 FOR H=1 TO 10:LPRINT" ":NEXT H
570 GOTO 10
580 FOR H=1 TO 7*X:LPRINT" ":NEXT H
590 GOTO 550
600 F(U)=9-K:GOTO 400
610 DATA " ",000,000,000,000,000,000,000
620 DATA A,505,037,035,034,035,037,505
630 DATA B,512,274,274,274,274,274,239
640 DATA C,125,131,258,258,258,131,069
650 DATA D,512,258,258,258,258,131,125
660 DATA E,512,274,274,274,274,258,258
670 DATA F,512,018,018,018,018,002,002
680 DATA G,125,131,258,258,290,163,101
690 DATA H,512,017,017,017,017,017,512
700 DATA I,258,258,258,512,258,258,258
710 DATA J,065,129,257,257,257,129,128
720 DATA K,512,017,017,041,069,131,258
730 DATA L,512,257,257,257,257,257,257
740 DATA M,512,007,013,025,013,007,512
750 DATA N,512,007,009,017,033,193,512
760 DATA O,125,131,258,258,258,131,125
770 DATA P,512,018,018,018,018,018,015
780 DATA Q,125,131,258,258,322,131,381
790 DATA R,512,018,018,050,082,146,271
800 DATA S,069,139,274,274,274,163,069
810 DATA T,002,002,002,512,002,002,002
820 DATA U,128,129,257,257,257,129,128
830 DATA V,064,065,129,257,129,065,064
840 DATA W,256,257,129,065,129,257,256
850 DATA X,388,069,041,017,041,069,388
860 DATA Y,008,009,017,481,017,009,008
870 DATA Z,386,322,290,274,266,262,260
880 DATA 0,125,131,262,274,322,131,125
890 DATA 1,000,261,259,512,257,257,000
900 DATA 2,261,387,322,290,274,267,261
910 DATA 3,066,130,258,274,266,150,100
920 DATA 4,033,049,041,037,035,512,033
930 DATA 5,160,274,274,274,274,274,226
940 DATA 6,193,289,305,297,293,291,194
950 DATA 7,258,130,066,034,018,010,008
960 DATA 8,069,171,274,274,274,171,069
970 DATA 9,263,138,074,042,026,010,007
980 DATA ?,005,003,002,354,018,001,005
990 DATA *,069,041,017,512,017,041,069
1000 DATA =,041,041,041,041,041,041,041
1010 DATA !,001,001,001,384,001,001,001
1020 DATA .,001,001,129,449,129,001,001
1030 END
```

## SCROLL1.BAS

```bas
10 'TEST PROGRAM FOR SCROLL ROUTINE
20 'USING STRING SPACE IN BASIC PROGRAM
25 ' PROGRAM BY: LEE M. BUCK   --  3/17/83
30 CLEAR
40 CLS: KEY OFF
50 '
60 SCROLLPGM$=STRING$(&H39,"0")         'SET UP STRING SPACE TO HOLD PGM
70                                      '&H39 IS SIZE OF MACHINE CODE PGM
80 DEF SEG=VARPTR(SCROLLPGM$)           'GET THE SEGMENT LOCATION
90 BLOAD "SCROLL.BLD",0       'LOAD INTO STRING (BE SURE TO INCLUDE 0 OFFSET)
100 '
110 ' FILL THE SCREEN WITH SOMETHING
120 FOR ROW=1 TO 22
130 FOR COL=1 TO 79
140 PRINT CHR$(ROW+64);
150 NEXT COL
160 PRINT
170 NEXT ROW
180 'PROMPT FOR SUBROUTINE ARGUMENTS
190 BEEP
200 LOCATE 23,1
210 INPUT "ULR,ULC,LRR,LRC,ATR,LEN";ULR%,ULC%,LRR%,LRC%,ATTR%,LNGTH%
220 '
230 DEF SEG=VARPTR(SCROLLPGM$)  'BE SURE SEGMENT IS SET TO STRING SPACE
240 SCROLL=0    'SET THE OFFSET TO ZERO AND CALL THE PGM
250 CALL SCROLL(ULR%,ULC%,LRR%,LRC%,ATTR%,LNGTH%)
260 '
270 SOUND 500,5: SOUND 700,5: SOUND 1000,5
280 LOCATE 13,25: PRINT "SUCCESS !!"
290 'PRESS 'ENTER' TO DO IT AGAIN; 'Esc' TO QUIT
300 DEF SEG : POKE 106,0
310 Q$=INKEY$ : IF Q$="" GOTO 310
320 IF Q$=CHR$(13) THEN 190     'DO IT AGAIN WITH 'CARRIAGE RETURN' KEY PRESS
330 IF Q$<>CHR$(27) THEN 300    'KEEP WAITING UNTILL 'Esc' KEY PRESS
340 END
```

## SCROLL2.BAS

```bas
10 'TEST PROGRAM FOR SCROLL ROUTINE
20 'PROGRAM BY: LEE M. BUCK    --   3/17/83
30 'PUT THE ROUTINE AS HIGH AS POSSIBLE IN MEMORY
40 'IF TOTAL MEMORY IS 64K OR LESS SPACE MUST BE RESERVED WITHIN BASIC WORK
50 'AREA.  RESERVE SPACE USING THE 'CLEAR' COMMAND AT THE BEGINNING OF PGM.
60 'OR USE THE /M OPTION WHEN STARTING BASIC(A). (SEE THE BASIC MANUAL)
70 CLS: KEY OFF
80 ' PUT SOMETHING ON THE SCREEN
90 FOR ROW=1 TO 22
100 FOR COL=1 TO 79
110 PRINT CHR$(ROW+64);
120 NEXT COL
130 PRINT
140 NEXT ROW
150 '
160 'CALCULATE THE SEGMENT REQUIRED TO PUT ROUTINE AT HIGH MEMORY LOCATION
170 '
180 PGM.SIZE=&H39        'SIZE OF MACHINE LANGUAGE PROGRAM
190 MEM.SIZE=160         'TOTAL K's OF MACHINE MEMORY (LESS RAMDISK MEMORY)
200 SEGMENT=MEM.SIZE*64-CINT(PGM.SIZE/16)
210 '
220 DEF SEG=SEGMENT    'SET SEGMENT AT HIGH MEMORY LOCATION
230 '
240 'LOAD THE SUBROUTINE INTO MEMORY.  IT ONLY NEEDS TO BE DONE ONCE.
250 BLOAD "SCROLL.BLD",0   'BE SURE TO SET THE OFFSET TO ZERO
260 '
270 'GET THE SUBROUTINE PARAMETERS
280 BEEP
290 LOCATE 23,1
300 INPUT "ULR,ULC,LRR,LRC,ATR,LEN";ULR%,ULC%,LRR%,LRC%,ATTR%,LNGTH%
310 '
320 ' CALL THE SUBROUTINE
330 DEF SEG=SEGMENT     'MAKE SURE SEGMENT IS SET
340 SCROLL=0            'SET THE OFFSET
350 CALL SCROLL(ULR%,ULC%,LRR%,LRC%,ATTR%,LNGTH%)
360 '
370 SOUND 500,5: SOUND 700,5: SOUND 1000,5
380 LOCATE 12,25: PRINT " SUCCESS !! "
390 'PRESS 'ENTER' TO DO IT AGAIN; 'Esc' TO QUIT
400 DEF SEG : POKE 106,0
410 Q$=INKEY$ : IF Q$="" GOTO 410
420 IF Q$=CHR$(13) THEN 280     'DO IT AGAIN WITH 'CARRIAGE RETURN' KEY PRESS
430 IF Q$<>CHR$(27) THEN 400    'KEEP WAITING UNTILL 'Esc' KEY PRESS
440 END
```

## SOUNDS.BAS

```bas
10 '            SOUNDS.BAS
20 '
30 '            By: Andrew Tuline
40 '
50 ' The sound generation on the IBM PC is performed mostly by the 8253 timer
60 'chip. This IC has 3 - 16 bit counters, each serving a different purpose
70 'on the system board.
80 '
90 '    Timer 0 is used for Dynamic Memory refresh.
100 '   Timer 1 is used for the time of day function.
110 '   Timer 2 is used for the speaker cassette interface.
120 '
130 '   The 8253 Timer is highly versatile and can be programmed for many
140 'different functions. These include a programmable rate generator, an
150 'event counter, a binary rate multiplier, real time clock, and others.
160 'The programmer may optinally change the mode of operation by addressing
170 'the control register. There are 2 registers for each counter, one for
180 'storing data to the timer and the other to read data from the timer.
190 'There are 6 modes of operation. Mode 3, the square wave generator will
200 'be discussed here. The control register is setup as follows:
210 '
220 '        -------------------------------------------------------------
230 'bit:    !  D7     D6   !  D5     D4   !  D3     D2     D1   !  D0   !
240 '        -------------------------------------------------------------
250 'def:    !  SC1    SC0  !  RL1    RL0  !  M2     M1     M0   !  BCD  !
260 '        -------------------------------------------------------------
270 '
280 'SC1,SC0 - Select the timer and must be 10 binary to select counter 2.
290 '
300 'RL1,RL0 - Read/Load
310 ' 0   0    Counter latching. When loaded, causes the present count to be
320 '          latched into a storage register for later reading.
330 ' 0   1    Read/Load LSB of counter only.
340 ' 1   0    Read/Load MSB of counter only.
350 ' 1   1    Read/Load LSB first then MSB.
360 '
370 'M2,M1,M0 - Select different modes. Must be 011 binary to select mode 3.
380 '
390 '  BCD   - Binary or Decimal counter.
400 '   0    - Sets counter to binary mode.
410 '   1    - Sets counter to decimal mode.
420 '
430 'Note: The larger the value loaded into the counter, the lower will be
440 'the resultant frequency. The number loaded sets the period of the
450 'tone which is the inverse of the frequency.
460 '
470 'Finally, the user must enable the speaker by setting a bit at I/O address
480 '61H (hexadecimal).
490 '
500 'Addresses
510 '
520 '42H - Counter 2 data register
530 '43H - Control register
540 '61H - Bit 1 enables disables the speaker.
550 '      Value of 4DH disables, 4FH enables.
560 '
570 'Examples
580 '
590 'Single Tone
600 OUT &H43,&HA6:'Binary 1010 0110
610 '              Read/Load MSB only
620 '              Mode 3
630 '              Counter 2
640 '              Binary Counter
650 OUT &H42,&H10:'Loads counter with 1000H
660 OUT &H61,&H4F
670 FOR I=1 TO 1000:NEXT
680 OUT &H61,&H4D:'disable speaker
690 '
700 'Increasing Frequency
710 OUT &H43,&HB7:'R/L LSB then MSB, Mode 3, BCD, Counter 2
720 OUT &H61,&H4F:'Enable speaker
730 FOR I=1000 TO 10 STEP -1:'Note: Decreasing value to be output
740 OUT &H42,I MOD 256:'LSB of I
750 OUT &H42,INT(I/256):'MSB of I
760 NEXT
770 '
780 'Weird Sounds
790 OUT &H43,&HA6:'R/L MSB, mode 3, counter 2, binary
800 FOR J=1 TO 20
810 FOR I=25 TO 5 STEP -1
820 OUT &H42,I
830 NEXT I
840 NEXT J
850 '
860 'Random Sounds
870 OUT &H43,&H96:'R/L LSB only, mode 3, counter 2, binary
880 FOR I=1 TO 200
890 OUT &H42,RND*255
900 NEXT I
910 OUT &H61,&H4D
920 '
930 'Assembly Language Random Number Generator
940 '
950 '1) Initialize
960 '1) Initialize      MOV     AL,0B6H        ;Mode 3, counter 2, binary
970 '                   OUT     43H,AL         ;R/L LSB then MSB
980 '                   MOV     AX,0FFFFH      ;store large number in counter
990 '                   OUT     42H,AX
1000 '
1010 '2) Read random #
1020 '                  MOV     AL,80H        ;counter 2,latch,rest don't care
1030 '                  OUT     43H,AL
1040 '                  IN      AX,42H
1050 '
1060 'I haven't tried the above in a program, but it should work reasonably.
1070 'And there you have it folks. A complete introductory to better sound
1080 'generation on your handy little PC. Last, but not least is a little
1090 'program to strobe your cassette port and output the data to the speaker,
1100 'written in assembly language. I have run this, and it works (sorta).
1110 '
1120 'TOP:      IN      AL,62H
1130 '          AND     AL,10H
1140 '          SHR     AL,1
1150 '          SHR     AL,1
1160 '          SHR     AL,1
1170 '          OR      AL,45H
1180 '          OUT     61H,AL
1190 '          JMP     TOP
1200 '
```

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk 0033

     Volume in drive A has no label
     Directory of A:\

    BATMAN   BAS      2032   4-06-83  11:58a
    BATMAN   DOC      2506   4-06-83   7:02a
    BSR      BAS       783   4-17-83   6:01p
    BSR      DAT       409   4-24-83   8:14a
    BUZOFF   COM       128   4-24-83   8:36a
    CALLGRAF BAS      2039   1-12-85   5:08p
    CALLGRAF TXT      2158   1-12-85   5:03p
    COMPRS   COM       128   4-24-83   8:37a
    COPYGRAF BAT       173   3-03-85   6:18p
    CVTHEX   EXE     25472   3-22-83  11:57p
    DCPATCH  DOC       472   4-06-83  10:05p
    DIAL     COM       384   4-24-83   8:35a
    DIR      BAS     15104   4-03-83  11:55a
    DIR      DAT       384   4-03-83  12:06p
    DIR      DOC       915   4-03-83  11:05a
    DOTABLE  ASM      1883   7-16-85  12:32a
    DOTDATA  ASM     22771   7-16-85  12:32a
    DOTS     DAT     24726   7-16-85  12:02a
    DOTS     PRO      2717   7-10-85  11:23p
    FILES33  TXT      3478  10-01-87   9:32a
    FK203    ASM      6177   4-24-83   8:23a
    FK203    EXE      1152   4-24-83   8:39a
    GDEMO    BAS       480   5-06-85  11:38p
    GO       BAT        38   7-08-87  12:19a
    GO       TXT      1233   9-29-07   8:12a
    GRAFTRAX ASM     29427   3-19-85  11:34a
    GRAFTRAX BAS      2180   4-17-83   3:46p
    GRAFTRAX COM      1506  12-16-85  11:17p
    GRAFTRAX DOC      2444  11-26-85  10:55p
    GRCITOH  COM      1546  12-08-84  12:18a
    HANG     COM       384   4-24-83   8:35a
    HOST     BAS     12160  12-16-82   2:42p
    HOST     DOC       379   1-01-80   2:41a
    MAKEDOTS BAS       273   6-30-85  11:13p
    NECGRAF  COM      1546  11-14-84  10:28p
    NEWT     ASM     42182   8-17-86   2:10p
    NEWT     COM      9261   7-20-86  12:02a
    OKIGRAF  ASM     32019  12-20-84   9:59p
    OKIGRAF  COM      1640  11-08-84  12:00a
    PEPATCH  DOC       684   4-17-83   1:52p
    POSTER   BAS      3173   4-24-83   1:52p
    PRTFIX   COM       128   4-24-83   8:34a
    PRTFIX   DOC       123   4-24-83   8:18a
    QD       COM      2176   3-23-83  12:02a
    QD       DOC      4992   3-22-83  11:26p
    READ     ME       4697   1-26-87   8:23p
    SCROLL   ASM      3038   4-17-83   4:49p
    SCROLL   BLD       128   4-17-83   5:30p
    SCROLL   DOC      4752   4-17-83   6:00p
    SCROLL1  BAS      1284   4-17-83   4:54p
    SCROLL2  BAS      1673   4-17-83   4:55p
    SHELL    BAT       509   4-06-83  12:07p
    SOUNDS   BAS      4736   3-20-83   8:54a
    TOSHIBA  ASM     38753   7-05-85   2:00a
    TOSHIBA  COM      2306   7-05-85   1:13a
    TOSHIBA  DOC      1522   1-26-87   8:24p
           56 file(s)     329363 bytes
                            1024 bytes free
