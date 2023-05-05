---
layout: page
title: "PC-SIG Diskette Library (Disk #33)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0033/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0033"
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

{% raw %}
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
{% endraw %}

## BATMAN.DOC

{% raw %}
```

Adding "MENU" Processing to DOS
    by William B. Malthouse

    The attached program, BATMAN.BAS, and the file
SHELL.BAT, show one possible way to enhance DOS to make it
appear that DOS 1.10 knows how to process a "MENU" to select
the next program to be executed, regardless of whether that
next "program" is a ".COM," ".EXE," ".BAS," or built in DOS
command. As the professors always tell us, "Suitable
extensions of this basic technique are left to the reader as
an exercise..."

    The key to the technique is that DOS processes a .BAT
file one line at a time, and while executing a program
invoked in LINE 1, DOS is completely unaware that that
program might change LINE 2 before DOS regains control! DOS
always re-reads the .BAT file after every  command, and does
not process the ORIGINAL version.

    Our sample program, BATMAN.BAS, invoked in line 1 of the
file "SHELL.BAT," will illustrate the technique. BATMAN
simply reads  the entire "SHELL.BAT" file, extracts the
"MENU" information from line 5 on, and presents the
(formatted) menu to the user.

    When the user completes his menu choice, BATMAN simply
rewrites the entire "SHELL.BAT" file, but REPLACES LINE 2
with the text of the command chosen by the user from the
menu! BATMAN then  simply closes up shop and returns to DOS.

    On return from BATMAN, DOS re-reads the (altered)
"SHELL.BAT," and continues executing at LINE 2, thereby
executing the program chosen by the user and placed there by
BATMAN. The process will then continue until line 4 (SHELL)
is reached, at which point DOS goes back to the top and
invokes BATMAN again for another choice, etc!
    NOTE: Since the file "SHELL.BAT" is read and re-written
every time through the cycle, it would be appropriate to
place it (and "BATMAN" on a "fast" electronic disk for
efficiency.

    *******************   SHELL.BAT   *********************

    BASICA BATMAN.BAS  %0 %1 %2 %3 %4 %5 %6 %7 %8 %9 /s:512
       beep
    PAUSE - About to Restart SHELL.BAT -
    SHELL
    01 beep - sound beeper
    02 cls  - clear screen
    03 sd   - directory for default drive
    04 sd a: - directory for drive A
    05 sd b: - directory for drive B
    06 sd c: - directory for drive C
    07 sd d: - directory for drive D
    08 sd e: - directory for electronic drive
    09 beep  - sound the beeper (again)
    10 basica mons - Run monitor switch program
    11 basica - Enter BASIC
    12 ff - clear the line printer


```
{% endraw %}

## BSR.BAS

{% raw %}
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
{% endraw %}

## CALLGRAF.BAS

{% raw %}
```bas
1 ' GRAFTRAX as a subroutine  9/21/84
10 DEFINT A-Z
20 GOSUB 300	' draw some graphics for demo. not needed in your program.
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
{% endraw %}

## CALLGRAF.TXT

{% raw %}
```
1 ' GRAFTRAX as a subroutine  9/21/84
10 DEFINT A-Z
20 GOSUB 300	' draw some graphics for demo. not needed in your program.
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
{% endraw %}

## DCPATCH.DOC

{% raw %}
```
If you are using a RAM disk you may want to copy your DOS disk to the
RAM disk on bootup.  The following patch will remove the keyboard input
waits from diskcopy.  This is for Ver. 2.0.
-
         A>COPY DISKCOPY.COM DC.COM
         A>DEBUG DC.COM
         -F 5D1 L 3 90
         -E 649
         XXXX:0649  01.6E   0C.00   CD.90   21.90
         -W
         Writing 098C bytes
         -Q
         A>
-
Good Luck,
Tom Hall - TCM644
           72155,1114

```
{% endraw %}

## DIR.BAS

{% raw %}
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
{% endraw %}

## DIR.DOC

{% raw %}
```
DIR.DOC   ---   This is the documentation for DIR.BAS (such as it is).


DIR.BAS is a BASIC program that helps the user keep track of all his/her
disk files. The program is menu driven and is easy to operate. The program
will compile without modification.

Entries to the programs may be made from the keyboard or the program can read
a disk's directory directly. Entries made be individually deleted or deleted
via deletion of the data for an entire disk.

The data can be displayed either on the CRT or the printer sorted alphabetically
or numerically by disk number. This sort routine takes a while if using the
program in BASIC, but really moves along in the compiled version.

An individual entry may be found (ie., it's disk #'s) and, if it has the .BAS
extension, may be run directly from DIR.BAS.Leave a note to me on the SIG board if you have any questions.
        Wes Meier 70215,1017

```
{% endraw %}

## DOTABLE.ASM

{% raw %}
```
; dot table
; xlat table first, then offsets

extable	label	word

	db	0,1,2,3,4,5,6,7
	db	0,0,0,8,9,0,0,0
	db	0,10,0,11,175,0,0,0
	db	0,0,12,0,0,0,0,0
	db	0,13,14,15,16,17,18,19
	db	20,0,0,0,0,0,0,0
	db	0,0,0,0,0,0,0,0
	db	0,0,0,0,0,0,0,0
	db	0,0,0,0,0,0,0,0
	db	0,0,0,0,0,0,0,0
	db	0,0,0,0,0,0,0,0
	db	0,0,0,0,0,0,0,0
	db	0,0,0,0,0,0,0,0
	db	0,0,0,0,0,0,0,0
	db	0,0,0,0,0,0,0,0
	db	0,0,0,0,0,0,0,0
	db	21,184,187,22,182,23,0,162
	db	24,25,189,26,27,28,177,0
	db	29,0,0,30,183,31,32,33
	db	34,178,179,180,163,176,0,191
	db	35,36,37,38,39,40,0,0
	db	41,42,43,174,172,44,45,46
	db	47,48,49,50,51,52,53,54
	db	55,56,57,58,59,60,61,62
	db	63,64,65,66,67,68,69,70
	db	71,72,73,74,75,76,77,78
	db	79,80,81,82,83,84,85,86
	db	87,88,89,90,91,92,93,94
	db	0,185,0,95,96,0,0,0
	db	0,97,0,0,0,0,0,0
	db	98,99,100,101,0,0,102,0
	db	0,0,0,0,0,0,0,0
extoffset	dw	0
	dw	L1
	dw	L2
	dw	L3
	dw	L4
	dw	L5
	dw	L6
	dw	L7
	dw	L11
	dw	L12
	dw	L17
	dw	L19
	dw	L26
	dw	L33
	dw	L34
	dw	L35
	dw	L36
	dw	L37
	dw	L38
	dw	L39
	dw	L40
	dw	L128
	dw	L131
	dw	L133
	dw	L136
	dw	L137
	dw	L139
	dw	L140
	dw	L141
	dw	L144
	dw	L147
	dw	L149
	dw	L150
	dw	L151
	dw	L152
	dw	L160
	dw	L161
	dw	L162
	dw	L163
	dw	L164
	dw	L165
	dw	L168
	dw	L169
	dw	L170
	dw	L173
	dw	L174
	dw	L175
	dw	L176
	dw	L177
	dw	L178
	dw	L179
	dw	L180
	dw	L181
	dw	L182
	dw	L183
	dw	L184
	dw	L185
	dw	L186
	dw	L187
	dw	L188
	dw	L189
	dw	L190
	dw	L191
	dw	L192
	dw	L193
	dw	L194
	dw	L195
	dw	L196
	dw	L197
	dw	L198
	dw	L199
	dw	L200
	dw	L201
	dw	L202
	dw	L203
	dw	L204
	dw	L205
	dw	L206
	dw	L207
	dw	L208
	dw	L209
	dw	L210
	dw	L211
	dw	L212
	dw	L213
	dw	L214
	dw	L215
	dw	L216
	dw	L217
	dw	L218
	dw	L219
	dw	L220
	dw	L221
	dw	L222
	dw	L223
	dw	L227
	dw	L228
	dw	L233
	dw	L240
	dw	L241
	dw	L242
	dw	L243
	dw	L246
```
{% endraw %}

## DOTDATA.ASM

{% raw %}
```
L246	db	72	; ÷
	db	0,0,0,0
	db	0,0,0,0
	db	0,2,0,0
	db	0,1,0,0
	db	0,2,0,0
	db	0,1,0,0
	db	0,34,2,0
	db	1,17,5,0
	db	2,34,10,0
	db	1,17,5,0
	db	2,34,10,0
	db	1,1,4,0
	db	0,2,0,0
	db	0,1,0,0
	db	0,2,0,0
	db	0,1,0,0
	db	0,0,0,0
	db	0,0,0,0
	db	0
L243	db	72	; ≤
	db	0,0,0,0
	db	0,0,0,32
	db	0,0,0,16
	db	0,4,0,32
	db	0,10,0,16
	db	0,21,0,32
	db	0,42,32,16
	db	1,17,16,32
	db	2,32,40,16
	db	5,0,20,32
	db	10,0,10,16
	db	20,0,4,32
	db	8,0,2,16
	db	0,0,0,32
	db	0,0,0,16
	db	0,0,0,32
	db	0,0,0,0
	db	0,0,0,0
	db	0
L242	db	72	; ≥
	db	0,0,0,0
	db	0,0,0,32
	db	0,0,0,16
	db	0,0,0,32
	db	0,0,0,16
	db	8,0,2,32
	db	20,0,4,16
	db	10,0,10,32
	db	5,0,20,16
	db	2,32,40,32
	db	1,17,16,16
	db	0,42,32,32
	db	0,21,0,16
	db	0,10,0,32
	db	0,4,0,16
	db	0,0,0,32
	db	0,0,0,0
	db	0,0,0,0
	db	0
L12	db	72	; 
	db	0,0,0,0
	db	0,0,0,0
	db	0,0,0,0
	db	0,0,1,0
	db	0,21,2,0
	db	0,42,33,0
	db	1,0,18,0
	db	2,0,9,20
	db	1,0,22,40
	db	2,0,9,0
	db	1,0,18,0
	db	2,32,33,0
	db	1,21,2,0
	db	0,42,1,0
	db	0,0,0,0
	db	0,0,0,0
	db	0,0,0,0
	db	0,0,0,0
	db	0
L11	db	72	; 
	db	0,0,0,0
	db	0,0,0,0
	db	0,0,0,0
	db	0,0,0,0
	db	0,0,10,32
	db	0,0,21,16
	db	0,0,32,32
	db	0,1,0,16
	db	0,2,0,32
	db	0,1,0,16
	db	2,6,0,32
	db	1,9,1,16
	db	2,22,42,32
	db	1,40,21,0
	db	2,16,0,0
	db	1,36,0,0
	db	2,26,0,0
	db	0,0,0,0
	db	0
L6	db	72	; 
	db	0,0,0,0
	db	0,0,0,0
	db	0,0,0,0
	db	0,12,0,0
	db	0,19,0,0
	db	0,44,48,0
	db	1,19,0,48
	db	2,44,51,0
	db	5,19,12,48
	db	2,44,51,0
	db	1,19,0,48
	db	0,44,48,0
	db	0,19,0,0
	db	0,12,0,0
	db	0,0,0,0
	db	0,0,0,0
	db	0,0,0,0
	db	0,0,0,0
	db	0
L5	db	72	; 
	db	0,0,0,0
	db	0,3,0,0
	db	0,12,48,0
	db	0,0,0,0
	db	0,15,48,0
	db	3,0,0,0
	db	12,60,48,48
	db	0,3,3,0
	db	15,48,12,48
	db	0,3,3,0
	db	12,60,48,48
	db	3,0,0,0
	db	0,15,48,0
	db	0,0,0,0
	db	0,12,48,0
	db	0,3,0,0
	db	0,0,0,0
	db	0,0,0,0
	db	0
L241	db	72	; ±
	db	0,0,0,0
	db	0,0,0,0
	db	0,8,0,32
	db	0,0,0,0
	db	0,8,0,32
	db	0,0,0,0
	db	0,8,0,32
	db	0,0,0,0
	db	15,63,60,32
	db	0,0,0,0
	db	0,8,0,32
	db	0,0,0,0
	db	0,8,0,32
	db	0,0,0,0
	db	0,8,0,32
	db	0,0,0,0
	db	0,0,0,0
	db	0,0,0,0
	db	0
L170	db	72	; ¬
	db	0,0,0,0
	db	0,0,0,0
	db	0,0,0,0
	db	0,0,0,0
	db	0,2,0,0
	db	0,0,0,0
	db	0,2,0,0
	db	0,0,0,0
	db	0,2,0,0
	db	0,0,0,0
	db	0,2,0,0
	db	0,0,0,0
	db	0,2,0,0
	db	0,0,0,0
	db	0,2,0,0
	db	0,0,0,0
	db	0,3,63,0
	db	0,0,0,0
	db	0
L169	db	72	; ⌐
	db	0,0,0,0
	db	0,0,0,0
	db	0,0,0,0
	db	0,0,0,0
	db	0,3,63,0
	db	0,2,0,0
	db	0,0,0,0
	db	0,2,0,0
	db	0,0,0,0
	db	0,2,0,0
	db	0,0,0,0
	db	0,2,0,0
	db	0,0,0,0
	db	0,2,0,0
	db	0,0,0,0
	db	0,2,0,0
	db	0,0,0,0
	db	0,0,0,0
	db	0
L175	db	72	; »
	db	0,0,0,0
	db	0,0,0,0
	db	2,0,0,8
	db	1,0,0,16
	db	0,32,0,32
	db	0,16,1,0
	db	2,8,2,8
	db	1,4,4,16
	db	0,34,8,32
	db	0,17,17,0
	db	0,8,34,0
	db	0,4,4,0
	db	0,2,8,0
	db	0,1,16,0
	db	0,0,32,0
	db	0,0,0,0
	db	0,0,0,0
	db	0,0,0,0
	db	0
L174	db	72	; «
	db	0,0,0,0
	db	0,0,0,0
	db	0,0,0,0
	db	0,0,32,0
	db	0,1,16,0
	db	0,2,8,0
	db	0,4,4,0
	db	0,8,34,0
	db	0,17,17,0
	db	0,34,8,32
	db	1,4,4,16
	db	2,8,2,8
	db	0,16,1,4
	db	0,32,0,32
	db	1,0,0,16
	db	2,0,0,8
	db	0,0,0,0
	db	0,0,0,0
	db	0
L168	db	72	; ¿
	db	0,0,0,0
	db	0,0,0,0
	db	0,0,0,16
	db	0,0,0,8
	db	0,0,0,4
	db	0,0,0,8
	db	4,0,0,4
	db	10,16,0,8
	db	4,8,0,4
	db	0,4,0,8
	db	0,4,0,4
	db	0,2,0,8
	db	0,1,32,24
	db	0,0,25,32
	db	0,0,6,0
	db	0,0,0,0
	db	0,0,0,0
	db	0,0,0,0
	db	0
L173	db	72	; ¡
	db	0,0,0,0
	db	0,0,0,0
	db	0,0,0,0
	db	0,0,0,0
	db	0,0,0,0
	db	0,0,0,0
	db	0,0,0,0
	db	10,21,21,16
	db	4,10,42,32
	db	0,0,0,0
	db	0,0,0,0
	db	0,0,0,0
	db	0,0,0,0
	db	0,0,0,0
	db	0,0,0,0
	db	0,0,0,0
	db	0,0,0,0
	db	0,0,0,0
	db	0
L19	db	72	; 
	db	0,0,0,0
	db	0,0,0,0
	db	0,0,0,0
	db	0,0,0,0
	db	0,0,0,0
	db	10,42,40,40
	db	5,21,20,16
	db	0,0,0,0
	db	0,0,0,0
	db	0,0,0,0
	db	5,21,20,40
	db	10,42,40,16
	db	0,0,0,0
	db	0,0,0,0
	db	0,0,0,0
	db	0,0,0,0
	db	0,0,0,0
	db	0,0,0,0
	db	0
L7	db	72	; 
	db	0,0,0,0
	db	0,0,0,0
	db	0,0,0,0
	db	0,0,0,0
	db	0,0,0,0
	db	0,0,0,0
	db	0,5,16,0
	db	0,10,32,0
	db	0,5,16,0
	db	0,10,32,0
	db	0,5,16,0
	db	0,10,32,0
	db	0,0,0,0
	db	0,0,0,0
	db	0,0,0,0
	db	0,0,0,0
	db	0,0,0,0
	db	0,0,0,0
	db	0
L4	db	72	; 
	db	0,0,0,0
	db	0,0,16,0
	db	0,0,40,0
	db	0,1,20,0
	db	0,2,42,0
	db	0,5,21,0
	db	0,10,42,32
	db	0,21,21,16
	db	0,42,42,40
	db	0,21,21,16
	db	0,10,42,32
	db	0,5,21,0
	db	0,2,42,0
	db	0,1,20,0
	db	0,0,40,0
	db	0,0,16,0
	db	0,0,0,0
	db	0,0,0,0
	db	0
L3	db	72	; 
	db	0,0,0,0
	db	0,0,0,0
	db	0,7,32,0
	db	0,10,48,0
	db	0,21,28,0
	db	0,42,46,0
	db	0,53,21,32
	db	0,26,42,48
	db	0,5,21,24
	db	0,10,42,44
	db	0,21,21,24
	db	0,58,42,48
	db	0,53,23,0
	db	0,26,44,0
	db	0,13,48,0
	db	0,7,32,0
	db	0,0,0,0
	db	0,0,0,0
	db	0
L128	db      3,'C',8,',',0 ; Ç
L131	db      3,'a',8,'^',0 ; â
L133	db      3,'a',8,164,0 ; à
L136	db      3,'e',8,'^',0 ; ê
L137	db      3,'e',8,190,0 ; ë
L139	db      3,'i',8,190,0 ; ï
L140	db      3,'i',8,'^',0 ; î
L141	db      3,'i',8,164,0 ; ì
L144	db      3,'E',8,160,0 ; É
L147	db      3,'o',8,'^',0 ; ô
L149	db      3,'o',8,164,0 ; ò
L150	db      3,'u',8,'^',0 ; û
L151	db      3,'u',8,164,0 ; ù
L152	db      3,'y',8,190,0 ; ÿ
L160	db      3,'a',8,160,0 ; á
L161	db      3,'i',8,160,0 ; í
L162	db      3,'o',8,160,0 ; ó
L163	db      3,'u',8,160,0 ; ú
L164	db      7,'n',8,27,'D',181,27,'U',0 ; ñ
L165	db      7,'N',8,27,'D',181,27,'U',0 ; Ñ
L233	db      3,'O',8,'-',0 ; Θ
L26	db	72	; arrow
	db	0,0,0,0
	db	0,0,0,0
	db	0,1,0,0
	db	0,1,0,0
	db	0,1,0,0
	db	0,1,0,0
	db	0,1,0,0
	db	0,1,0,0
	db	0,1,0,0
	db	0,1,0,0
	db	0,1,0,0
	db	0,17,4,0
	db	0,9,8,0
	db	0,5,16,0
	db	0,3,32,0
	db	0,1,0,0
	db	0,0,0,0
	db	0,0,0,0
	db	0
L228	db	72	; Σ
	db	0,0,0,0
	db	0,0,0,0
	db	0,0,0,0
	db	12,0,1,32
	db	10,0,2,32
	db	9,0,4,32
	db	8,32,8,32
	db	8,16,16,32
	db	8,8,32,32
	db	8,5,0,32
	db	8,2,0,32
	db	8,0,0,32
	db	8,0,0,32
	db	8,0,0,32
	db	12,0,1,32
	db	4,0,1,0
	db	0,0,0,0
	db	0,0,0,0
	db	0
L240	db	72	; ≡
	db	0,0,0,0
	db	0,0,0,0
	db	0,0,0,0
	db	0,34,2,0
	db	1,1,4,0
	db	0,34,2,0
	db	1,1,4,0
	db	0,34,2,0
	db	1,1,4,0
	db	0,34,2,0
	db	1,1,4,0
	db	0,34,2,0
	db	1,1,4,0
	db	0,34,2,0
	db	1,1,4,0
	db	0,34,2,0
	db	1,1,4,0
	db	0,0,0,0
	db	0
L227	db	72	; π
	db	0,0,0,0
	db	0,0,0,0
	db	2,0,0,0
	db	4,0,1,0
	db	10,42,42,0
	db	5,21,20,0
	db	8,0,0,0
	db	4,0,0,0
	db	8,0,0,0
	db	4,0,0,0
	db	8,0,0,0
	db	4,0,0,0
	db	10,42,42,0
	db	5,21,21,0
	db	8,0,0,0
	db	4,0,0,0
	db	8,0,0,0
	db	0,0,0,0
	db	0
L17	db	72	; 
	db	0,0,0,0
	db	0,0,0,0
	db	0,0,0,0
	db	0,1,0,0
	db	0,2,32,0
	db	0,5,16,0
	db	0,10,40,0
	db	0,21,20,0
	db	0,42,42,0
	db	1,21,21,0
	db	2,42,42,32
	db	5,21,21,16
	db	10,42,42,40
	db	21,21,21,20
	db	42,42,37,20
	db	26,42,42,40
	db	0,0,0,0
	db	0,0,0,0
	db	0
L2	db	72	; 
	db	0,0,0,0
	db	0,0,0,0
	db	1,42,42,32
	db	2,53,21,16
	db	5,26,42,40
	db	10,5,17,20
	db	5,6,40,40
	db	10,5,20,20
	db	5,42,8,40
	db	10,21,4,20
	db	5,42,8,40
	db	10,5,20,20
	db	5,6,40,40
	db	10,5,16,20
	db	5,29,17,40
	db	2,42,42,40
	db	1,21,21,16
	db	0,0,0,0
	db	0
L1	db	72	; 
	db	0,0,0,0
	db	0,0,0,0
	db	1,21,21,16
	db	2,42,42,40
	db	4,0,0,20
	db	8,0,0,8
	db	4,48,8,4
	db	8,48,4,8
	db	4,3,4,4
	db	8,3,4,8
	db	4,3,4,4
	db	8,48,4,8
	db	4,48,8,4
	db	8,0,0,8
	db	4,0,0,24
	db	2,42,42,32
	db	1,21,21,0
	db	0,0,0,0
	db	0
L40	db	72	; (
	db	0,2,40,0
	db	0,0,0,0
	db	0,5,20,0
	db	0,0,0,0
	db	0,2,40,0
	db	0,0,0,0
	db	0,5,20,0
	db	0,0,0,0
	db	0,2,40,0
	db	0,0,0,0
	db	0,5,20,0
	db	0,0,0,0
	db	0,2,40,0
	db	0,0,0,0
	db	0,5,20,0
	db	0,0,0,0
	db	0,2,40,0
	db	0,0,0,0
	db	0
L39	db	72	; '
	db	0,2,8,0
	db	0,0,0,0
	db	0,4,16,0
	db	0,1,4,0
	db	0,0,0,0
	db	0,0,32,0
	db	0,2,8,0
	db	0,0,0,0
	db	0,4,16,0
	db	0,1,4,0
	db	0,0,0,0
	db	0,0,32,0
	db	0,2,8,0
	db	0,0,0,0
	db	0,4,16,0
	db	0,1,4,0
	db	0,0,0,0
	db	0,0,32,0
	db	0
L38	db	72	; &
	db	0,2,0,0
	db	0,0,8,0
	db	0,0,0,0
	db	0,9,0,0
	db	0,0,4,0
	db	0,0,0,0
	db	0,2,0,0
	db	0,0,8,0
	db	0,0,0,0
	db	0,9,0,0
	db	0,0,4,0
	db	0,0,0,0
	db	0,2,0,0
	db	0,0,8,0
	db	0,0,0,0
	db	0,9,0,0
	db	0,0,4,0
	db	0,0,0,0
	db	0
L37	db	72	; %
	db	0,0,0,0
	db	0,0,0,0
	db	0,0,0,0
	db	0,0,0,0
	db	0,0,0,0
	db	0,0,0,0
	db	0,0,0,0
	db	0,0,0,0
	db	0,0,0,0
	db	0,2,40,0
	db	0,5,20,0
	db	0,2,40,0
	db	0,5,20,0
	db	0,2,40,0
	db	0,5,20,0
	db	0,2,40,0
	db	0,5,20,0
	db	0,2,40,0
	db	0
L36	db	72	; $
	db	0,2,40,0
	db	0,5,20,0
	db	0,2,40,0
	db	0,5,20,0
	db	0,2,40,0
	db	0,5,20,0
	db	0,2,40,0
	db	0,5,20,0
	db	0,2,40,0
	db	0,0,0,0
	db	0,0,0,0
	db	0,0,0,0
	db	0,0,0,0
	db	0,0,0,0
	db	0,0,0,0
	db	0,0,0,0
	db	0,0,0,0
	db	0,0,0,0
	db	0
L35	db	72	; #
	db	0,2,40,0
	db	0,5,20,0
	db	0,2,40,0
	db	0,5,20,0
	db	0,2,40,0
	db	0,5,20,0
	db	0,2,40,0
	db	0,5,20,0
	db	0,2,40,0
	db	0,5,20,0
	db	0,2,40,0
	db	0,5,20,0
	db	0,2,40,0
	db	0,5,20,0
	db	0,2,40,0
	db	0,5,20,0
	db	0,2,40,0
	db	0,5,20,0
	db	0
L34	db	72	; "
	db	0,0,0,0
	db	0,0,0,0
	db	0,0,0,0
	db	0,0,0,0
	db	0,0,0,0
	db	0,0,0,0
	db	0,2,40,0
	db	0,5,20,0
	db	0,0,0,0
	db	0,0,0,0
	db	0,2,40,0
	db	0,5,20,0
	db	0,0,0,0
	db	0,0,0,0
	db	0,0,0,0
	db	0,0,0,0
	db	0,0,0,0
	db	0,0,0,0
	db	0
L33	db	72	; !
	db	0,0,0,0
	db	0,0,0,0
	db	0,0,0,0
	db	0,0,0,0
	db	0,0,0,0
	db	0,0,0,0
	db	0,0,0,0
	db	0,0,0,0
	db	0,2,40,0
	db	0,5,20,0
	db	0,0,0,0
	db	0,0,0,0
	db	0,0,0,0
	db	0,0,0,0
	db	0,0,0,0
	db	0,0,0,0
	db	0,0,0,0
	db	0,0,0,0
	db	0
L176	db	72	; ░
	db	32,0,32,0
	db	2,0,2,0
	db	0,8,0,8
	db	16,0,16,0
	db	1,0,1,0
	db	0,4,0,4
	db	32,0,32,0
	db	2,0,2,0
	db	0,8,0,8
	db	16,0,16,0
	db	1,0,1,0
	db	0,4,0,4
	db	32,0,32,0
	db	2,0,2,0
	db	0,8,0,8
	db	16,0,16,0
	db	1,0,1,0
	db	0,4,0,4
	db	6
L177	db	72	; ▒
	db	34,8,34,8
	db	0,32,8,2
	db	4,1,0,16
	db	17,4,17,4
	db	0,16,4,1
	db	8,2,0,32
	db	34,8,34,8
	db	0,32,8,2
	db	4,1,0,16
	db	17,4,17,4
	db	0,16,4,1
	db	8,2,0,32
	db	34,8,34,8
	db	0,32,8,2
	db	4,1,0,16
	db	17,4,17,4
	db	0,16,4,1
	db	8,2,0,32
	db	7
L178	db	72	; ▓
	db	42,42,42,42
	db	0,0,0,0
	db	21,21,21,21
	db	0,0,0,0
	db	42,42,42,42
	db	0,0,0,0
	db	21,21,21,21
	db	0,0,0,0
	db	42,42,42,42
	db	0,0,0,0
	db	21,21,21,21
	db	0,0,0,0
	db	42,42,42,42
	db	0,0,0,0
	db	21,21,21,21
	db	0,0,0,0
	db	42,42,42,42
	db	0,0,0,0
	db	8
L223	db	72	; ▀
	db	42,42,32,0
	db	21,21,16,0
	db	42,42,32,0
	db	21,21,16,0
	db	42,42,32,0
	db	21,21,16,0
	db	42,42,32,0
	db	21,21,16,0
	db	42,42,32,0
	db	21,21,16,0
	db	42,42,32,0
	db	21,21,16,0
	db	42,42,32,0
	db	21,21,16,0
	db	42,42,32,0
	db	21,21,16,0
	db	42,42,32,0
	db	21,21,16,0
	db	0
L222	db	72	; ▐
	db	0,0,0,0
	db	0,0,0,0
	db	0,0,0,0
	db	0,0,0,0
	db	0,0,0,0
	db	0,0,0,0
	db	0,0,0,0
	db	0,0,0,0
	db	0,0,0,0
	db	21,21,21,21
	db	42,42,42,42
	db	21,21,21,21
	db	42,42,42,42
	db	21,21,21,21
	db	42,42,42,42
	db	21,21,21,21
	db	42,42,42,42
	db	21,21,21,21
	db	5
L221	db	72	; ▌
	db	42,42,42,42
	db	21,21,21,21
	db	42,42,42,42
	db	21,21,21,21
	db	42,42,42,42
	db	21,21,21,21
	db	42,42,42,42
	db	21,21,21,21
	db	42,42,42,42
	db	0,0,0,0
	db	0,0,0,0
	db	0,0,0,0
	db	0,0,0,0
	db	0,0,0,0
	db	0,0,0,0
	db	0,0,0,0
	db	0,0,0,0
	db	0,0,0,0
	db	4
L220	db	72	; ▄
	db	0,0,10,42
	db	0,0,5,21
	db	0,0,10,42
	db	0,0,5,21
	db	0,0,10,42
	db	0,0,5,21
	db	0,0,10,42
	db	0,0,5,21
	db	0,0,10,42
	db	0,0,5,21
	db	0,0,10,42
	db	0,0,5,21
	db	0,0,10,42
	db	0,0,5,21
	db	0,0,10,42
	db	0,0,5,21
	db	0,0,10,42
	db	0,0,5,21
	db	3
L219	db	72	; █
	db	42,42,42,42
	db	21,21,21,21
	db	42,42,42,42
	db	21,21,21,21
	db	42,42,42,42
	db	21,21,21,21
	db	42,42,42,42
	db	21,21,21,21
	db	42,42,42,42
	db	21,21,21,21
	db	42,42,42,42
	db	21,21,21,21
	db	42,42,42,42
	db	21,21,21,21
	db	42,42,42,42
	db	21,21,21,21
	db	42,42,42,42
	db	21,21,21,21
	db	3
L182	db	72	; ╢
	db	0,0,32,0
	db	0,0,16,0
	db	0,0,32,0
	db	0,0,16,0
	db	0,0,32,0
	db	0,0,16,0
	db	42,42,42,42
	db	21,21,21,21
	db	0,0,0,0
	db	0,0,0,0
	db	42,42,42,42
	db	21,21,21,21
	db	0,0,0,0
	db	0,0,0,0
	db	0,0,0,0
	db	0,0,0,0
	db	0,0,0,0
	db	0,0,0,0
	db	2
L181	db	72	; ╡
	db	0,2,8,0
	db	0,1,4,0
	db	0,2,8,0
	db	0,1,4,0
	db	0,2,8,0
	db	0,1,4,0
	db	0,2,8,0
	db	0,1,4,0
	db	42,42,42,42
	db	21,21,21,21
	db	0,0,0,0
	db	0,0,0,0
	db	0,0,0,0
	db	0,0,0,0
	db	0,0,0,0
	db	0,0,0,0
	db	0,0,0,0
	db	0,0,0,0
	db	1
L180	db	72	; ┤
	db	0,0,32,0
	db	0,0,16,0
	db	0,0,32,0
	db	0,0,16,0
	db	0,0,32,0
	db	0,0,16,0
	db	0,0,32,0
	db	0,0,16,0
	db	42,42,42,42
	db	21,21,21,21
	db	0,0,0,0
	db	0,0,0,0
	db	0,0,0,0
	db	0,0,0,0
	db	0,0,0,0
	db	0,0,0,0
	db	0,0,0,0
	db	0,0,0,0
	db	1
L179	db	72	; │
	db	0,0,0,0
	db	0,0,0,0
	db	0,0,0,0
	db	0,0,0,0
	db	0,0,0,0
	db	0,0,0,0
	db	0,0,0,0
	db	0,0,0,0
	db	42,42,42,42
	db	21,21,21,21
	db	0,0,0,0
	db	0,0,0,0
	db	0,0,0,0
	db	0,0,0,0
	db	0,0,0,0
	db	0,0,0,0
	db	0,0,0,0
	db	0,0,0,0
	db	1
L218	db	72	; ┌
	db	0,0,0,0
	db	0,0,0,0
	db	0,0,0,0
	db	0,0,0,0
	db	0,0,0,0
	db	0,0,0,0
	db	0,0,0,0
	db	0,0,0,0
	db	0,0,42,42
	db	0,0,21,21
	db	0,0,32,0
	db	0,0,16,0
	db	0,0,32,0
	db	0,0,16,0
	db	0,0,32,0
	db	0,0,16,0
	db	0,0,32,0
	db	0,0,16,0
	db	1
L217	db	72	; ┘
	db	0,0,32,0
	db	0,0,16,0
	db	0,0,32,0
	db	0,0,16,0
	db	0,0,32,0
	db	0,0,16,0
	db	0,0,32,0
	db	0,0,16,0
	db	42,42,32,0
	db	21,21,16,0
	db	0,0,0,0
	db	0,0,0,0
	db	0,0,0,0
	db	0,0,0,0
	db	0,0,0,0
	db	0,0,0,0
	db	0,0,0,0
	db	0,0,0,0
	db	0
L216	db	72	; ╪
	db	0,2,8,0
	db	0,1,4,0
	db	0,2,8,0
	db	0,1,4,0
	db	0,2,8,0
	db	0,1,4,0
	db	0,2,8,0
	db	0,1,4,0
	db	42,42,42,42
	db	21,21,21,21
	db	0,2,8,0
	db	0,1,4,0
	db	0,2,8,0
	db	0,1,4,0
	db	0,2,8,0
	db	0,1,4,0
	db	0,2,8,0
	db	0,1,4,0
	db	1
L215	db	72	; ╫
	db	0,0,32,0
	db	0,0,16,0
	db	0,0,32,0
	db	0,0,16,0
	db	0,0,32,0
	db	0,0,16,0
	db	42,42,42,42
	db	21,21,21,21
	db	0,0,32,0
	db	0,0,16,0
	db	42,42,42,42
	db	21,21,21,21
	db	0,0,32,0
	db	0,0,16,0
	db	0,0,32,0
	db	0,0,16,0
	db	0,0,32,0
	db	0,0,16,0
	db	2
L214	db	72	; ╓
	db	0,0,0,0
	db	0,0,0,0
	db	0,0,0,0
	db	0,0,0,0
	db	0,0,0,0
	db	0,0,0,0
	db	0,0,42,42
	db	0,0,21,21
	db	0,0,32,0
	db	0,0,16,0
	db	0,0,42,42
	db	0,0,21,21
	db	0,0,32,0
	db	0,0,16,0
	db	0,0,32,0
	db	0,0,16,0
	db	0,0,32,0
	db	0,0,16,0
	db	2
L213	db	72	; ╒
	db	0,0,0,0
	db	0,0,0,0
	db	0,0,0,0
	db	0,0,0,0
	db	0,0,0,0
	db	0,0,0,0
	db	0,0,0,0
	db	0,0,0,0
	db	0,2,42,42
	db	0,1,21,21
	db	0,2,8,0
	db	0,1,4,0
	db	0,2,8,0
	db	0,1,4,0
	db	0,2,8,0
	db	0,1,4,0
	db	0,2,8,0
	db	0,1,4,0
	db	1
L212	db	72	; ╘
	db	0,0,0,0
	db	0,0,0,0
	db	0,0,0,0
	db	0,0,0,0
	db	0,0,0,0
	db	0,0,0,0
	db	0,0,0,0
	db	0,0,0,0
	db	42,42,44,0
	db	21,21,20,0
	db	0,2,8,0
	db	0,1,4,0
	db	0,2,8,0
	db	0,1,4,0
	db	0,2,8,0
	db	0,1,4,0
	db	0,2,8,0
	db	0,1,4,0
	db	0
L211	db	72	; ╙
	db	0,0,0,0
	db	0,0,0,0
	db	0,0,0,0
	db	0,0,0,0
	db	0,0,0,0
	db	0,0,0,0
	db	42,42,48,0
	db	21,21,16,0
	db	0,0,32,0
	db	0,0,16,0
	db	42,42,32,0
	db	21,21,16,0
	db	0,0,32,0
	db	0,0,16,0
	db	0,0,32,0
	db	0,0,16,0
	db	0,0,32,0
	db	0,0,16,0
	db	0
L210	db	72	; ╥
	db	0,0,32,0
	db	0,0,16,0
	db	0,0,32,0
	db	0,0,16,0
	db	0,0,32,0
	db	0,0,16,0
	db	0,0,42,42
	db	0,0,21,21
	db	0,0,32,0
	db	0,0,16,0
	db	0,0,42,42
	db	0,0,21,21
	db	0,0,32,0
	db	0,0,16,0
	db	0,0,32,0
	db	0,0,16,0
	db	0,0,32,0
	db	0,0,16,0
	db	2
L209	db	72	; ╤
	db	0,2,8,0
	db	0,1,4,0
	db	0,2,8,0
	db	0,1,4,0
	db	0,2,8,0
	db	0,1,4,0
	db	0,2,8,0
	db	0,1,4,0
	db	0,2,10,42
	db	0,1,5,21
	db	0,2,8,0
	db	0,1,4,0
	db	0,2,8,0
	db	0,1,4,0
	db	0,2,8,0
	db	0,1,4,0
	db	0,2,8,0
	db	0,1,4,0
	db	1
L208	db	72	; ╨
	db	0,0,32,0
	db	0,0,16,0
	db	0,0,32,0
	db	0,0,16,0
	db	0,0,32,0
	db	0,0,16,0
	db	42,42,32,0
	db	21,21,16,0
	db	0,0,32,0
	db	0,0,16,0
	db	42,42,32,0
	db	21,21,16,0
	db	0,0,32,0
	db	0,0,16,0
	db	0,0,32,0
	db	0,0,16,0
	db	0,0,32,0
	db	0,0,16,0
	db	0
L207	db	72	; ╧
	db	0,2,8,0
	db	0,1,4,0
	db	0,2,8,0
	db	0,1,4,0
	db	0,2,8,0
	db	0,1,4,0
	db	0,2,8,0
	db	0,1,4,0
	db	42,42,8,0
	db	21,21,4,0
	db	0,2,8,0
	db	0,1,4,0
	db	0,2,8,0
	db	0,1,4,0
	db	0,2,8,0
	db	0,1,4,0
	db	0,2,8,0
	db	0,1,4,0
	db	0
L206	db	72	; ╬
	db	0,2,8,0
	db	0,1,4,0
	db	0,2,8,0
	db	0,1,4,0
	db	0,2,8,0
	db	0,1,4,0
	db	42,42,10,42
	db	21,21,13,21
	db	0,0,0,0
	db	0,0,0,0
	db	42,43,10,42
	db	21,21,5,21
	db	0,2,8,0
	db	0,1,4,0
	db	0,2,8,0
	db	0,1,4,0
	db	0,2,8,0
	db	0,1,4,0
	db	2
L205	db	72	; ═
	db	0,2,8,0
	db	0,1,4,0
	db	0,2,8,0
	db	0,1,4,0
	db	0,2,8,0
	db	0,1,4,0
	db	0,2,8,0
	db	0,1,4,0
	db	0,2,8,0
	db	0,1,4,0
	db	0,2,8,0
	db	0,1,4,0
	db	0,2,8,0
	db	0,1,4,0
	db	0,2,8,0
	db	0,1,4,0
	db	0,2,8,0
	db	0,1,4,0
	db	0
L204	db	72	; ╠
	db	0,0,0,0
	db	0,0,0,0
	db	0,0,0,0
	db	0,0,0,0
	db	0,0,0,0
	db	0,0,0,0
	db	42,42,42,42
	db	21,21,21,21
	db	0,0,0,0
	db	0,0,0,0
	db	42,43,10,42
	db	21,21,5,21
	db	0,2,8,0
	db	0,1,4,0
	db	0,2,8,0
	db	0,1,4,0
	db	0,2,8,0
	db	0,1,4,0
	db	2
L203	db	72	; ╦
	db	0,2,8,0
	db	0,1,4,0
	db	0,2,8,0
	db	0,1,4,0
	db	0,2,8,0
	db	0,1,4,0
	db	0,2,10,42
	db	0,1,13,21
	db	0,2,0,0
	db	0,1,0,0
	db	0,2,10,42
	db	0,1,5,21
	db	0,2,8,0
	db	0,1,4,0
	db	0,2,8,0
	db	0,1,4,0
	db	0,2,8,0
	db	0,1,4,0
	db	2
L202	db	72	; ╩
	db	0,2,8,0
	db	0,1,4,0
	db	0,2,8,0
	db	0,1,4,0
	db	0,2,8,0
	db	0,1,4,0
	db	42,42,8,0
	db	21,21,4,0
	db	0,0,8,0
	db	0,0,4,0
	db	42,43,8,0
	db	21,21,4,0
	db	0,2,8,0
	db	0,1,4,0
	db	0,2,8,0
	db	0,1,4,0
	db	0,2,8,0
	db	0,1,4,0
	db	0
L201	db	72	; ╔
	db	0,0,0,0
	db	0,0,0,0
	db	0,0,0,0
	db	0,0,0,0
	db	0,0,0,0
	db	0,0,0,0
	db	0,2,42,42
	db	0,1,21,21
	db	0,2,0,0
	db	0,1,0,0
	db	0,2,10,42
	db	0,1,5,21
	db	0,2,8,0
	db	0,1,4,0
	db	0,2,8,0
	db	0,1,4,0
	db	0,2,8,0
	db	0,1,4,0
	db	2
L200	db	72	; ╚
	db	0,0,0,0
	db	0,0,0,0
	db	0,0,0,0
	db	0,0,0,0
	db	0,0,0,0
	db	0,0,0,0
	db	42,42,44,0
	db	21,21,20,0
	db	0,0,8,0
	db	0,0,4,0
	db	42,43,8,0
	db	21,21,4,0
	db	0,2,8,0
	db	0,1,4,0
	db	0,2,8,0
	db	0,1,4,0
	db	0,2,8,0
	db	0,1,4,0
	db	0
L199	db	72	; ╟
	db	0,0,0,0
	db	0,0,0,0
	db	0,0,0,0
	db	0,0,0,0
	db	0,0,0,0
	db	0,0,0,0
	db	42,42,42,42
	db	21,21,21,21
	db	0,0,0,0
	db	0,0,0,0
	db	42,42,42,42
	db	21,21,21,21
	db	0,0,32,0
	db	0,0,16,0
	db	0,0,32,0
	db	0,0,16,0
	db	0,0,32,0
	db	0,0,16,0
	db	2
L198	db	72	; ╞
	db	0,0,0,0
	db	0,0,0,0
	db	0,0,0,0
	db	0,0,0,0
	db	0,0,0,0
	db	0,0,0,0
	db	0,0,0,0
	db	0,0,0,0
	db	42,42,42,42
	db	21,21,21,21
	db	0,2,8,0
	db	0,1,4,0
	db	0,2,8,0
	db	0,1,4,0
	db	0,2,8,0
	db	0,1,4,0
	db	0,2,8,0
	db	0,1,4,0
	db	1
L197	db	72	; ┼
	db	0,0,32,0
	db	0,0,16,0
	db	0,0,32,0
	db	0,0,16,0
	db	0,0,32,0
	db	0,0,16,0
	db	0,0,32,0
	db	0,0,16,0
	db	42,42,42,42
	db	21,21,21,21
	db	0,0,32,0
	db	0,0,16,0
	db	0,0,32,0
	db	0,0,16,0
	db	0,0,32,0
	db	0,0,16,0
	db	0,0,32,0
	db	0,0,16,0
	db	1
L196	db	72	; ─
	db	0,0,32,0
	db	0,0,16,0
	db	0,0,32,0
	db	0,0,16,0
	db	0,0,32,0
	db	0,0,16,0
	db	0,0,32,0
	db	0,0,16,0
	db	0,0,32,0
	db	0,0,16,0
	db	0,0,32,0
	db	0,0,16,0
	db	0,0,32,0
	db	0,0,16,0
	db	0,0,32,0
	db	0,0,16,0
	db	0,0,32,0
	db	0,0,16,0
	db	0
L195	db	72	; ├
	db	0,0,0,0
	db	0,0,0,0
	db	0,0,0,0
	db	0,0,0,0
	db	0,0,0,0
	db	0,0,0,0
	db	0,0,0,0
	db	0,0,0,0
	db	42,42,42,42
	db	21,21,21,21
	db	0,0,16,0
	db	0,0,32,0
	db	0,0,16,0
	db	0,0,32,0
	db	0,0,16,0
	db	0,0,32,0
	db	0,0,16,0
	db	0,0,32,0
	db	1
L194	db	72	; ┬
	db	0,0,32,0
	db	0,0,16,0
	db	0,0,32,0
	db	0,0,16,0
	db	0,0,32,0
	db	0,0,16,0
	db	0,0,32,0
	db	0,0,16,0
	db	0,0,42,42
	db	0,0,21,21
	db	0,0,32,0
	db	0,0,16,0
	db	0,0,32,0
	db	0,0,16,0
	db	0,0,32,0
	db	0,0,16,0
	db	0,0,32,0
	db	0,0,16,0
	db	1
L193	db	72	; ┴
	db	0,0,32,0
	db	0,0,16,0
	db	0,0,32,0
	db	0,0,16,0
	db	0,0,32,0
	db	0,0,16,0
	db	0,0,32,0
	db	0,0,16,0
	db	42,42,32,0
	db	21,21,16,0
	db	0,0,32,0
	db	0,0,16,0
	db	0,0,32,0
	db	0,0,16,0
	db	0,0,32,0
	db	0,0,16,0
	db	0,0,32,0
	db	0,0,16,0
	db	0
L192	db	72	; └
	db	0,0,0,0
	db	0,0,0,0
	db	0,0,0,0
	db	0,0,0,0
	db	0,0,0,0
	db	0,0,0,0
	db	0,0,0,0
	db	0,0,0,0
	db	42,42,48,0
	db	21,21,16,0
	db	0,0,32,0
	db	0,0,16,0
	db	0,0,32,0
	db	0,0,16,0
	db	0,0,32,0
	db	0,0,16,0
	db	0,0,32,0
	db	0,0,16,0
	db	0
L191	db	72	; ┐
	db	0,0,32,0
	db	0,0,16,0
	db	0,0,32,0
	db	0,0,16,0
	db	0,0,32,0
	db	0,0,16,0
	db	0,0,32,0
	db	0,0,16,0
	db	0,0,42,42
	db	0,0,53,21
	db	0,0,0,0
	db	0,0,0,0
	db	0,0,0,0
	db	0,0,0,0
	db	0,0,0,0
	db	0,0,0,0
	db	0,0,0,0
	db	0,0,0,0
	db	1
L190	db	72	; ╛
	db	0,2,8,0
	db	0,1,4,0
	db	0,2,8,0
	db	0,1,4,0
	db	0,2,8,0
	db	0,1,4,0
	db	0,2,8,0
	db	0,1,4,0
	db	42,42,40,0
	db	21,21,20,0
	db	0,0,0,0
	db	0,0,0,0
	db	0,0,0,0
	db	0,0,0,0
	db	0,0,0,0
	db	0,0,0,0
	db	0,0,0,0
	db	0,0,0,0
	db	0
L189	db	72	; ╜
	db	0,0,32,0
	db	0,0,16,0
	db	0,0,32,0
	db	0,0,16,0
	db	0,0,32,0
	db	0,0,16,0
	db	42,42,32,0
	db	21,21,16,0
	db	0,0,32,0
	db	0,0,16,0
	db	42,42,32,0
	db	21,21,16,0
	db	0,0,0,0
	db	0,0,0,0
	db	0,0,0,0
	db	0,0,0,0
	db	0,0,0,0
	db	0,0,0,0
	db	0
L188	db	72	; ╝
	db	0,2,8,0
	db	0,1,4,0
	db	0,2,8,0
	db	0,1,4,0
	db	0,2,8,0
	db	0,1,4,0
	db	42,42,8,0
	db	21,21,4,0
	db	0,0,8,0
	db	0,0,4,0
	db	42,42,40,0
	db	21,21,20,0
	db	0,0,0,0
	db	0,0,0,0
	db	0,0,0,0
	db	0,0,0,0
	db	0,0,0,0
	db	0,0,0,0
	db	0
L187	db	72	; ╗
	db	0,2,8,0
	db	0,1,4,0
	db	0,2,8,0
	db	0,1,4,0
	db	0,2,8,0
	db	0,1,4,0
	db	0,2,10,42
	db	0,1,13,21
	db	0,2,0,0
	db	0,1,0,0
	db	0,2,42,42
	db	0,3,21,21
	db	0,0,0,0
	db	0,0,0,0
	db	0,0,0,0
	db	0,0,0,0
	db	0,0,0,0
	db	0,0,0,0
	db	2
L186	db	72	; ║
	db	0,0,0,0
	db	0,0,0,0
	db	0,0,0,0
	db	0,0,0,0
	db	0,0,0,0
	db	0,0,0,0
	db	42,42,42,42
	db	21,21,21,21
	db	0,0,0,0
	db	0,0,0,0
	db	42,42,42,42
	db	21,21,21,21
	db	0,0,0,0
	db	0,0,0,0
	db	0,0,0,0
	db	0,0,0,0
	db	0,0,0,0
	db	0,0,0,0
	db	2
L185	db	72	; ╣
	db	0,2,8,0
	db	0,1,4,0
	db	0,2,8,0
	db	0,1,4,0
	db	0,2,8,0
	db	0,1,4,0
	db	42,42,10,42
	db	21,21,13,21
	db	0,0,0,0
	db	0,0,0,0
	db	42,42,42,42
	db	21,21,21,21
	db	0,0,0,0
	db	0,0,0,0
	db	0,0,0,0
	db	0,0,0,0
	db	0,0,0,0
	db	0,0,0,0
	db	2
L184	db	72	; ╕
	db	0,2,8,0
	db	0,1,4,0
	db	0,2,8,0
	db	0,1,4,0
	db	0,2,8,0
	db	0,1,4,0
	db	0,2,8,0
	db	0,1,4,0
	db	0,2,42,42
	db	0,3,21,21
	db	0,0,0,0
	db	0,0,0,0
	db	0,0,0,0
	db	0,0,0,0
	db	0,0,0,0
	db	0,0,0,0
	db	0,0,0,0
	db	0,0,0,0
	db	1
L183	db	72	; ╖
	db	0,0,32,0
	db	0,0,16,0
	db	0,0,32,0
	db	0,0,16,0
	db	0,0,32,0
	db	0,0,16,0
	db	0,0,42,42
	db	0,0,21,21
	db	0,0,32,0
	db	0,0,16,0
	db	0,0,42,42
	db	0,0,53,21
	db	0,0,0,0
	db	0,0,0,0
	db	0,0,0,0
	db	0,0,0,0
	db	0,0,0,0
	db	0,0,0,0
	db	2
```
{% endraw %}

## FILES33.TXT

{% raw %}
```
Disk No  33
Program Title: DOS and PRINTER UTILITIES
PC-SIG version 1.2
 
    A host of useful system enhancements. Do a graphic dump to an Epson or
C.Itoh printer (in two sizes), turn off printer bell, change print pitch,
and others. This disk also contains some patches to existing DOS routines,
and simplify or speedup some operations. In addition to the DOS and printer
utilities, there are some simple (but useful) communication utilities.
 
Usage: Enhance Printer Functions and some DOS commands.
 
System Requirements: 128K memory, one disk drive, some programs require
color graphics.
 
How to Start: To run an EXE or COM program, simply type its name and press
<ENTER>.  To print a documentation file, type: COPY filename.ext PRN (press
enter) where filename is the name of the file, and ext is the extension
(TXT or DOC).
 
File Descriptions:
 
CALLGRAF BAS  Program to call GRAFTRAX from Basic
CALLGRAF TXT  ASCII version of CALLGRAF
COPYGRAF BAT  Batch file to copy GRAFTRAX files to disk
DOTABLE  ASM  Data file used by Graftrax
DOTDATA  ASM  Data file used by Graftrax
DOTS     DAT  Data file used by Graftrax
DOTS     PRO  Data file used by Graftrax
GDEMO    BAS  Graphics demo program
GRAFTRAX ASM  Source code for Graftrax
GRAFTRAX BAS  Basic code for Graftrax
GRAFTRAX COM  Compiled version of Graftrax
GRAFTRAX DOC  Documentation for Graftrax
GRCITOH  COM  C-ITOH version of Graftrax
MAKEDOTS BAS  Graphics display utility
NECGRAF  COM  NEC version of Graftrax
NEWT     ASM  Source code for enhanced Toshiba Graftrax version
NEWT     COM  Compiled Toshiba Graphtrax program
OKIGRAF  ASM  Source code for Okidata Graftrax program
OKIGRAF  COM  Compiled version of Okidata Graphtrax
READ     ME   Author's notes on Graftrax routines
TOSHIBA  ASM  Source code for original Toshiba Graftrax program
TOSHIBA  COM  Compiled version of Toshiba Graftrax
TOSHIBA  DOC  Documentation for Toshiba Graftrax programs
BATMAN   BAS  Sample menu/batch manager program; requires SHELL.BAT
BATMAN   DOC  Documentation file
BSR      BAS  Simple program to drive ABM/BSR controller
BSR      DAT  Data file for BSR.BAS
BUZOFF   COM  Turn off paper out buzzer on Epson
COMPRS   COM  Enables compressed print on Epson
CVTHEX   EXE  Binary/hex conversion for files larger than 32K
DCPATCH  DOC  Patch for DISKCOPY.COM 2.0
DIAL     COM  Dials Hayes Smartmodem
DIR      BAS+ Disk cataloging program - very colorful
DIR      DAT  Sample data file
DIR      DOC  Documentation file
FK203    ASM  Source code for FK203.EXE
FK203    EXE  Function key reassignment program for DOS 2.0
HANG     COM  Hangs up Hayes Smartmodem
HOST     BAS  Communication program for remote access
HOST     DOC  Documentation file for HOST.BAS
PEPATCH  DOC  Patch to IBM's Personal Editor
POSTER   BAS  Prints large character posters
PRTFIX   COM  Corrects "DEVICE TIMEOUT" errors with printer
PRTFIX   DOC  Documentation file
QD       COM  Quadram RAMDRIVE program - FOR QUADRAM BOARD ONLY
QD       DOC  Documentation file
SCROLL   ASM  Scrolls specified area of display screen
SCROLL   BLD  Program file to "BLOAD" from BASIC
SCROLL   DOC  Documentation file
SCROLL1  BAS  Sample program
SCROLL2  BAS  Sample program
SHELL    BAT  Bat file used with BATMAN.BAS
SOUNDS   BAS  Generates different sounds - contains documentation
 
PC-SIG
1030D E Duane Avenue
Sunnyvale Ca. 94086
(408) 730-9291
(c) Copyright 1987 PC-SIG Inc.

```
{% endraw %}

## FK203.ASM

{% raw %}
```
TITLE FK203 - ASSEMBLER PROGRAM TO SET FUNCTION KEYS IN DOS 2.0
;
;
;               Version 1.3 03/31/83
;        Version 1.3 moves the DOS 'copy previous' (F3) to the
;              'end' key on the numeric/cursor keypad
;
;
; Assemble with MASM
; Then LINK it with   LINK FK203; (or whatever you want to call it)
; Either include FK20x in an autoexec file or just type FK20x.
;
;**                 Important Note                  **
;  For this routine to work, you must create a file called
;
;                      Config.Sys
;
; with Edlin or from the console and put the statement DEVICE=ANSI in
; it. The DOS 2.0 file ANSI.SYS should be on your boot disk. This will
; cause the file ANSI.SYS to be loaded when the system is booted.
;
SUBTTL DESCRIPTION OF THE STACK SEGMENT
STACK   SEGMENT PARA STACK 'STACK'
        db      'foo'
        stack ends
        PAGE
SUBTTL DESCRIPTION OF THE DATA SEGMENT
;
subttl desciption of dos interfaces
cseg    segment para public 'CODE'
start   proc    far
        assume cs:cseg,ds:cseg,es:nothing
        push    ds                      ;set up starting linkage as per example
        sub     ax,ax                   ;zero this and place on stack
        push    ax                      ;so that when we do a RET we go to
        push    cs                      ;move the workarea address into DS
        pop     ds
; ******           Start screen display           ****
        mov     dx,offset clear
        mov     ah,9
        int     21h
        mov     dx,offset k1
        mov     ah,9                    ;function 9 is print string
        int     21h                     ;call dos to do it
        mov     dx,offset k2
        mov     ah,9                    ;function 9 is print string
        int     21h                     ;call dos to do it
        mov     dx,offset k3
        mov     ah,9                    ;function 9 is print string
        int     21h                     ;call dos to do it
        mov     dx,offset k4
        mov     ah,9                    ;function 9 is print string
        int     21h                     ;call dos to do it
        mov     dx,offset k5
        mov     ah,9                    ;function 9 is print string
        int     21h                     ;call dos to do it
        mov     dx,offset k6
        mov     ah,9                    ;function 9 is print string
        int     21h                     ;call dos to do it
        mov     dx,offset k7
        mov     ah,9                    ;function 9 is print string
        int     21h                     ;call dos to do it
        mov     dx,offset k8
        mov     ah,9                    ;function 9 is print string
        int     21h                     ;call dos to do it
        mov     dx,offset k9
        mov     ah,9                    ;funtion 9 is print string
        int     21h                     ;call dos to do it
        mov     dx,offset k10
        mov     ah,9                    ;function 9 is print string
        int     21h                     ;call dos to do it
; ***            Start key assignments                ***
        mov     dx,offset mvf3          ;move F3 to END key
        mov     ah,9                    ;function 9 is print string
        int     21h                     ;call dos to do it
        mov     dx,offset f1            ;Assign F1 - F10
        mov     ah,9                    ;function 9 is print string
        int     21h                     ;call dos to do it
        mov     dx,offset f2
        mov     ah,9                    ;function 9 is print string
        int     21h                     ;call dos to do it
        mov     dx,offset f3
        mov     ah,9                    ;function 9 is print string
        int     21h                     ;call dos to do it
        mov     dx,offset f4
        mov     ah,9                    ;function 9 is print string
        int     21h                     ;call dos to do it
        mov     dx,offset f5
        mov     ah,9                    ;function 9 is print string
        int     21h                     ;call dos to do it
        mov     dx,offset f6
        mov     ah,9                    ;function 9 is print string
        int     21h                     ;call dos to do it
        mov     dx,offset f7
        mov     ah,9                    ;function 9 is print string
        int     21h                     ;call dos to do it
        mov     dx,offset f8
        mov     ah,9                    ;function 9 is print string
        int     21h                     ;call dos to do it
        mov     dx,offset f9
        mov     ah,9                    ;funtion 9 is print string
        int     21h                     ;call dos to do it
        mov     dx,offset f10
        mov     ah,9                    ;function 9 is print string
        int     21h                     ;call dos to do it
; The next section of code set ups the parameters for each function
; key. To make a key 'hot' add the following after the string ending
; quote - ;13p$'  The 13 is decimal for a carrage return.
;
;
exit:   ret
clear   db      27,'[2J                   $'
mvf3    db      27,'[0;79;0;61p           $'
f1      db      27,'[0;59;" A:"p          $'
f2      db      27,'[0;60;" B:"p          $'
f3      db      27,'[0;61;" C:"p          $'
f4      db      27,'[0;62;"CHKDSK "p      $'
f5      db      27,'[0;63;"COPY "p        $'
f6      db      27,'[0;64;"*.* "p         $'
f7      db      27,'[0;65;"DISKCOPY "p    $'
f8      db      27,'[0;66;"BASICA "p      $'
f9      db      27,'[0;67;"DIR "p         $'
f10     db      27,'[0;68;"TYPE "p        $'
k1      db      'F1 = " A:"     $'
k2      db      'F2 = " B:"     $'
k3      db      'F3 = " C:"     $'
k4      db      'F4 = "CHKDSK " $'
k5      db      'F5 = "COPY "   $'
k6      db      'F6 = "*.* "    $'
k7      db      'F7 = "DISKCOPY "$'
k8      db      'F8 = "BASICA " $'
k9      db      'F9 = "DIR "    $'
k10     db      'F10= "TYPE "   $'
start   endp
;
;
cseg    ends
        end     start
```
{% endraw %}

## GDEMO.BAS

{% raw %}
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
{% endraw %}

## GO.TXT

{% raw %}
```
╔═════════════════════════════════════════════════════════════════════════╗
║            <<<<  Disk #33 Dos and printer utilities  >>>>               ║
╠═════════════════════════════════════════════════════════════════════════╣
║       To print the documentation for a program, type:                   ║
║                      COPY filename.ext PRN (press enter)                ║
║                                                                         ║
║        To display the documentation for a program type:                 ║
║                       TYPE filename.ext (press enter)                   ║
║                                                                         ║
║          where 'filename' is the name of the documentation file         ║
║            and 'ext' is the file extention (usually DOC or TXT)         ║
║                                                                         ║
║      To run a program with a .COM or .EXE extention just type the       ║
║            name of the file (i.e. NEWT) and then press enter.           ║
║                                                                         ║
╚═════════════════════════════════════════════════════════════════════════╝
```
{% endraw %}

## GRAFTRAX.ASM

{% raw %}
```
	PAGE  60,132
	TITLE	EPSON MX-GRAFTRAX PrtSc, V 3.3
; GRAF.COM  2/10/85
; Interrupt replacement for print screen function on ibmpc(tm)
;	Please send problem reports and suggestions to:
;		Marty Smith
;		310 Cinnamon Oak Lane
;		Houston, Texas	77079
;		Compuserve 72155,1214
;		(713) 464-6737
;
;    Create GRAF.COM with MASM*, LINK* and EXE2BIN* as follows:
;
;	masm graf,graf,graf;
;
;	link graf;    (ignor the error message about no stack segment,
;			  that's taken care of in the next step.)
;	exe2bin graf.exe graf.com
;
;  *  MASM is the MicroSoft(tm) Macro Assembler v. 3.0
;	or IBM(tm) Macro Assembler v. 1.0
;     LINK and EXE2BIN are PC-DOS(tm) utilities.
;
;  This program originally designed for Epson-MX(tm) series printers
;  with Graftrax80(tm) and Graftrax+(tm) bit-plot graphic capabilites.
;  ======> Now modified with conditional compilation and macros for
;  ======> c.itoh(tm) model 8510a and other printers.
;
;	CHANGE HISTORY:
;	9/18/82 - Buffer in routine for a line of bit-plot bytes to allow for
;  checking for blank lines replaced by pre-scan routine, saving space.
;	1/24/83 - Modifications for conditional assembly with other printers
;  and C.ITOH 8510a.
;	1/24/83 - Improved error checking for out-of-paper and I/O errors
;  involving printer.
;	1/24/83 - Bug in error check corrected, occuring when routine does
;  error exit and is then called again, resulting in bit-plot data sent in
;  regular mode.
;	3/12/83 - Allow calling as a subroutine. i.e. no shift key depressed.
;  Defaults to small print mode. Can be set to LARGE.
;	2/4/84	- Allow correct printing of 640x200 mode.
;	3/18/84 - Use int 31h for dos 2.+ terminate process.
;	3/24/84 - Use BIOS for keyboard scan, in case screen is printed
;		from DOS.
;	4/21/84 - -OTHER- section complete for changes from 640 mode.
;	9/22/84 - Add code to set lines back in 6/inch order, so CR's
;		can advance to TOF.
;	9/22/84 - Jump to other print screen routine instead of reassigning
;		it to int f1h. Only luck has kept this vector from being used
;		by someone else.
;	10/20/84- Add check for already installed, don't reinstall.
;	10/20/84- Compatibility with MASM 1.0 reestablished, FAR call to old
;		routine caused 'fixup error' from EXE2BIN. 
;	10/20/84- CALLGRAF now points to common address variable for default
;		mode, is now the same for all versions of program.  Demo now
;		works!
;
;	Features:
;  Accepts ESC key exit, prescans to test for blank line
;  left shift prtsc = small graphics, right shift prtsc = big
;  Runs as a .COM type program under dos
;     resident until power down or reset.
;   1 = screen sent horiz. 320 bits in 480 mode
;   2 = screen sent vert. 400 bits double printed in 480 mode
; **************  1 mode **********************
;	DL = masking character
;	DH = count of 25 (physical lines)
;	CX = counter for each line (80)
;	DS = used to index screen at 'b8000'
;   These regs must be preserved during routine
;	  (increment each line by adding '14' hex to ds: for paragraph
;		boundary of 320 bytes 0x'140')
; **************  2 mode *********************
;	DH = count of 40 (physical lines)
;	CX = counter for each line (100)
;	SI = index to screen via ds:
;   These regs must be preserved during routine
;	all output to printer is done from routine -send2-, which uses
;	bios routine int 17h, and provides safe error exit.
;
;  GRAF.COM is designed with the idea that the user's main program is the
;  primary function and GRAF.COM should not cause problems of its own.
;
; =======================================================
; =		USER MODIFICATION SECTION.		=
; =	If your printer can treat a byte of data to	=
; =	control the wires on the dot-matrix head you	=
; =	can probably get this working with your printer =
; =	unless it is an IDS type, which treats bit plot =
; =	a lot differently than the EPSON.		=
; =	If you have Epson Graftrax or a C.Itoh 8510a,	=
; =	just set the two equates indicated to -true-	=
; =	and compile. Otherwise get out your manual	=
; =	and put the code indicated in one of the printer=
; =	sections.					=
; =	**>	The title message starts at label	=
; =	**>	-buffer-. If you set for another	=
; =	**>	printer you should change the		=
; =	**>	greeting to indicate which printer	=
; =	===> ONLY SET *ONE* CONDITION TO -TRUE- or you	=
; =	will have a real mess!		marty smith	=
; =======================================================

TRUE	equ	1	; DON'T CHANGE THESE!
FALSE	equ	0

escape	equ	27	; for printer
CR	equ	13
LF	equ	10

; ===============>  A L L  U S E R S  <===================
; ====> SET ONE AND ONLY ONE OF THE FOLLOWING THREE <=====

EPSON	EQU	TRUE
CITOH	EQU	FALSE	; citoh and nec 8023 use similar codes.
NEC	EQU	FALSE
OTHER	EQU	FALSE

; Each bit of a byte is mapped to the wire head of the printer.
; If the Epson MX is sent 80h (bit 7), the TOP wire makes a dot.
; If the C.ITOH is sent   01h (bit 0), the TOP wire makes a dot.
; ===============>  A L L  U S E R S  <===================
; =====> SET ONE AND ONLY ONE OF THE FOLLOWING TWO <======

BIT7	EQU	TRUE
BIT0	EQU	FALSE

; BIT7 is TRUE for EPSON
; BIT0 is TRUE for CITOH,NEC8023

print	macro	char
	mov	al,char
	call	SEND2
	endm

; *****************************
; *  START of -OTHER- SECTION *
; *****************************
;
; ALL routines must set either BIT7 or BIT0.
;   above. If your printer can't see bit 7 or 0 as the top wire, you
;   will probably have quite a time getting this routine to work.
;
; OLINE Resets line spacing so that the print head
; will make a continuous line DOWN the page.
; This is the sequence to set the EPSON for this. (ESC A 8)
; SEND2 sends the byte in AL to the printer for ALL routines.
; It uses the INT 17h routine in order to avoid DOS's extra line
; feeds and CR's. Set for LPT1: Change SEND2 to redirect. DX=0=LPT1,1=LPT2
OLINE	MACRO
	print	escape
	print	'A'
	print	 8
	ENDM

; ORLINE restores the printer to normal line spacing
; Example is for EPSON (ESC 2)
ORLINE	MACRO
	print	escape
	print	'2'
	ENDM

; ORESET reinitializes the printer to default settings, spacings,
; current line becomes Top of Form.
; Is used by LARGE print to allow a series to be printed
; on separate pages. It can be modified by getting rid of label
; TOF: up to but not including	 JMP DONE, which is the exit from
; the whole routine. Example is for EPSON. (ESC @)
ORESET	MACRO
	print	escape
	print	'@'
	ENDM

; BP1 initiates bit-plot graphics. It tells the printer
; that the next xxx bytes are to be considered bit-plots and not
; regular characters. The small print routine sends 320 bit plot bytes
; to the printer. On the EPSON this is:
;	  ESC K 64 1   hex 1b 4b 40 1  > 1*256+64=320
; --> the first part indents the page with ordinary spaces
; --> to find spaces take TOTAL_DOTS_PER_LINE - 320. Then / BITS_PER_CHARACTER
; --> Divide this by two and you have the spaces to indent
; BP1 also needs to be able to handle the case of 640 mode, which will
; double the output of dots.
;    The example below is the code to do this on the EPSON/IBM.
BP1	MACRO
	mov	cx,13	; PICTURE ( we've got 320 dots and 480 to work with
inlop:	print	20H	; 480-320=160 / 6 dots per char. = 26.67 extra
	loop	inlop

; ESC K 64 1  = 256+64=320 bit plot type bytes on the way

	cmp	cs:mode640,TRUE
	jz	ind10
	print	escape 	; SEQUENCE TO SET UP 320
		   	; BIT PLOTS IN 480 MODE
	print	'K' 	; OF MX-80
		   	; This is the set-up for the small print
	print	64
	print	 1
	jmp short indend

ind10:
	print	escape
	print	'L'  	; 640 dots in 960 mode
	print	128
	print	2

indend:
	ENDM

; BP2.
; The LARGE print sends 400 bit plot bytes to the printer. On the EPSON:
; ESC K 144 1  hex 1b 4b 90 1  > 1*256+144=400
; FIND YOUR INDENT FOR 400 BITS
BP2	MACRO
	mov	cx,6	; EPSON ( we've got 400 dots and 480 to work with
inlop2: print	20H	; 480-400=80 / 6 dots per char. = 13.33 extra
			; so indent the picture 6 spaces to center
	loop	inlop2
	print	escape
	print	'K'
	print	144
	print	1
	ENDM

; ****************************
; *   END OF -OTHER- SECTION *
; ****************************

;  ***************> START OF ACTUAL CODE <*****************

cseg	segment 'code'
	assume cs:cseg
	org	100h		; set up for .com conversion
init	proc
	jmp	initial 	; so we have to set up first
init	endp
gowait	dw	0
wheresi dw	0
ptflag	db	0
oneor2	db	0
dstor	dw	0
mode640 dw	0

; **** the 1 below is the POKE to use in CALLing from another program. ****
;
default_routine dw	1	;  1 for small, 2 for LARGE.		  *
;
; *************************************************************************

old_print_routine  dd	0	; address of former print screen routine.

do_old	proc	near
; jump to old routine
	pop	bp
	pop	si
	pop	di
	pop	dx
	pop	cx
	pop	bx
	pop	ax
	pop	ds
	jmp	cs:old_print_routine

do_old	endp

; --->	ACTUAL INTERRUPT ROUTINE STARTS HERE  <---
start	proc	far	; Start of main routine--Shift Prt.Sc hit.
	assume cs:cseg
	sti		; This follows ROM routine real close
	push	ds
	push	ax	;SAVE REGS
	push	bx
	push	cx
	push	dx
	push	di
	push	si
	push	bp
	mov	bp,sp		; Save in case of error for reset
	mov	ax,50h		; Check here first to see if
	mov	ds,ax		; routine is already in progress
	mov	si,0		; otherwise it will be a mess.
	mov	al,01h		; if [si]=1 then there is a 
	cmp	[si],al		; print screen already in progress.
	jnz	nxts		; if not we're go for routine
	jmp	exit		; otherwise go back home.
nxts:	mov	[si],al 	; 
	mov	ah,15		; Get the current video state.
	int	10h		; from the ROM routine,
	mov	cs:mode640,FALSE
	cmp	al,4		; AL=4-6 are all graphics so we're OK
	jz	graphic
	cmp	al,5
	jz	graphic
	cmp	al,6
	jnz	nxts10
	mov	cs:mode640,TRUE ; special case
	jmp	short graphic
nxts10:
	mov	al,0	; else reset and go to ROM routine.
	mov	[si],al
	jmp	do_old	; this is where we stored the ROM routine entry.
;	jmp	exit	; Do the ROM routine but come back here to leave.
graphic:
	mov	ax,40h	; Get the keyboard shift flag
	mov	ds,ax	; segment
	mov	si,17h	; and address
	mov	ax,[si] ; pick it up
	and	ax,3	; get rid of other stuff
	or	ax,ax	; Mod. to create default small
	jnz	gr1	; for case where routine is called as a subroutine.
	mov	ax,cs:default_routine
gr1:	mov	cs:oneor2,al	; store for later
	push	ax	; also here
	xor	al,al	; make sure this starts out as NO print.
	mov	cs:ptflag,al
	xor	dl,dl	; These bits indicate whether R or L Shift is down
	mov	dh,19h	; 25 lines of graphic dots at 8 dots per line
	mov	ax,0b800h ; stored in DX
	mov	ds,ax	;SET UP FOR SCREEN PEEK
; Printer setup section to change line spacing to 8/72" for continuous dots

; line spacing routine - All Epson Graftrax and IBM Graphics should
; accept esc 'A' 8  or  esc '3' 24 for line spacing, but IBM Graphics only
; recognizes esc '3' 24
	IF	EPSON
	print	escape
	print	'3'     ; A
	print	24	; 8
	ENDIF

	IF	CITOH	; ESC T 16
	print	escape
	print	'T'     ; T
	print	'1'     ; 1
	print	'6'     ; 6
	print	escape

	IF	NEC
	print	'['     ; Set printer to unidirectional for dot alignment
	ELSE
	print	'>'
	ENDIF

	ENDIF

	IF	OTHER
	OLINE
	ENDIF
	pop	ax	; get back which routine
	cmp	al,2	; Left Shift Prt Sc means LARGE graphic print
	jnz	gr2
	jmp	main2	; so hop over there if so.
gr2:
	cmp	cs:mode640,TRUE
	jnz	MAIN
	jmp	m640

; START OF small GRAPHICS PRINT ROUTINE.
; This routine scans across the screen from left to right,
; building an EPSON bit plot byte out of IBM screen dots.
; EPSON wire head		IBM screen color dots
; TOP	 o  128  80h bit 7	| 00 | 01 | 10 | 11 | = 4 dots, one byte
;	 o   64  40h  "  6
; one	 o   32  20h  "  5      ibm dots go one raster line then the next
; bit	 o   16  10h  "  4      EVEN line, ie 0, 2, 4 etc.
; plot	 o    8  08h  "  3
; byte	 o    4  04h  "  2      then you go back and do 1, 3, 5 etc.
;	 o    2  02h  "  1
; BOTTOM o    1  01h  "  0      At loc. 0000h are 4 dots, 0,0|0,1|0,2|0,3
;				At loc. 2000h are 4 dots, 1,0|1,1|1,2|1,3
;
main:	mov	cx,80	; 80 x 4 = 320 dots.
mloop:	mov	dl,0c0h ; 11000000b
	call	tst4	; see if this comes back <> 0
	mov	al,ah	; we are testing bit patterns for one screen byte
	call	send	; don't send to printer unless something to send
	mov	dl,30h	; 00110000b
	call	tst4	; each byte is 4 dots
	mov	al,ah	; so we test for each dot in a byte
	call	send	; send sets PTFLAG if there is a dot on the line
	mov	dl,0ch	; 00001100b
	call	tst4	; then resets to start of line and starts printing
	mov	al,ah	; AL is the bit plot byte being built
	call	send	; This keeps us from printing a line of '0's.
	mov	dl,03h	; 00000011b
	call	tst4	; TST4 scans down 8 screen dot lines each time called
	mov	al,ah
	call	send
	loop	mloop	; 80 bytes make 320 dots
	call	lfcr	; this is a good old regular line feed/carriage return
	call	break?	; someone hit ESC key? so take early exit
	or	al,al
	dec	dh	; DL is line counter
	cmp	dh,0	; when it goes 0 we're through
	jz	done	; reset everything and do an IRET
	mov	ax,ds	; otherwise bump the SEGMENT reg so that location
	add	ax,14h	; 0 is the start of the next line
	mov	ds,ax	; X'140' = 320
	jmp	main	; and do this 80 times (80x4=320)
done:	mov	ax,0
; This is the common exit for both routines, Printer is restored.
done1:	push	ax	; save AX cause it has error exit flag
; EPSON command to reset printer to 6 lines/in. = ESC 2 (1b 32)
	IF	EPSON
	print	escape
	print	'3'
	print	12	; add 12/216 to reset line spacing
	print	CR
	print	LF
	print	escape ; RESET PRINTER, RESTORE REGS
	print	'2'
	ENDIF
; FOR CITOH MAKE SURE BIDIRECTIONAL PRINTING IS RESTORED
	IF	CITOH
	print	escape
	print	'A'
	print	escape

	IF	NEC
	print	']'
	ELSE
	print	'<'
	ENDIF

	ENDIF

	IF	OTHER
	ORLINE
	ENDIF
edone:	mov	ax,50h	; Set end of PrtSc indication
	mov	ds,ax	; OK to come back and do again
	mov	si,0
	pop	ax
	mov	[si],al
exit:	pop	bp
	pop	si	; restore regs and return to caller
	pop	di
	pop	dx
	pop	cx
	pop	bx
	pop	ax
	pop	ds
	iret		; were an interrupt routine so we IRET

; START OF LARGE PRINT ROUTINE
; +-------------+
; | ^ ^ 	|  This time we scan from 199,0 to 0,0
; | ^ ^ 	|  and go across
; | ^ ^ 	|  o  o    x  x    o  x    x  x   These are representations
; | | | 	|  o  o    o  o    x  o    x  x   of one color dot.
; +-------------+    0	     1	     2	     3	   Palettes

main2:	mov	dh,80	; we have 80 colunms x 25 lines here
	mov	cs:wheresi,3ef0h ; si is our index
	mov	si,cs:wheresi
main2a: mov	cx,64h	; 100
mloop2: mov	al,[si] ; idea is to get a byte starting at screen BOTTOM
	IF	BIT0
	call	reverse ; Bits have to be reversed on wire 0 type
	ENDIF
	call	send	; send it since these resemble bit plot bytes
	cmp	cs:mode640,TRUE
	jz	ml10
	call	flipflop ; then reverse(sort of) this byte and send it
ml10:
	call	send	; again.
	mov	cs:gowait,si ; store SI for next EVEN raster line
	sub	si,2000h ; subtract 2000h for the next ODD raster line
	mov	al,[si] ; and do the same here
	IF	BIT0
	call	reverse
	ENDIF
	call	send
	cmp	cs:mode640,TRUE
	jz	ml20
	call	flipflop
ml20:
	call	send
	mov	si,cs:gowait ; get back the EVEN line
	sub	si,80	; advance UP the screen one line (say 199,0 to 197,0)
	loop	mloop2	; and do this 100 times
	call	lfcr	; finished with one line we send normal line-end
	call	break?	; check for an ESC if we want to abort
	or	al,al	; clear flags
	dec	dh	; DH is our line counter,
	cmp	dh,0	; when it goes 0 we're done.
	jz	tof	; so we'll try to reset Top of Form and exit
	inc	cs:wheresi	; else go to the next byte location
	mov	si,cs:wheresi	; store
	jmp	main2a		; and do again
tof:	mov	cx,19	; tof restores page to 11 inches from where it started
tofl:	print	13	; send a bunch of cr's and lf's
	print	10
	call	break?	; check for early exit
	loop	tofl	; on and on.
; This restores the EPSON to 6 lines per inch
; ESC @ = Restore all settings to default
	IF	EPSON
	print	escape
	print	'@'
	ENDIF
;	IF	CITOH	; No equivalent to Epson ESC @
;	MOV	AL,escape ; for CITOH
;	CALL	SEND2	; so just reset line feed pitch
;	MOV	AL,'A'  ; this is done by DONE anyway
;	CALL	SEND2	; so leave open if someone wants to patch
;	ENDIF
	IF	OTHER
	ORESET
	ENDIF
	jmp	done	; clean up and back to caller.
start	endp
send2	proc	near	; BIOS routine to print the character in AL
	push	ax
	mov	ah,00h	; 0=print, 1=initialize port, 2=read status to AH
	push	dx
	mov	dx,0	; DX specifies printer 0 (LPT1:)
	int	17h	; BIOS used instead of DOS because DOS sends
	pop	dx	; CR/LF's in the middle of the bit-plots
	test	ah,29h	; check for timeout or errors or out-of-paper
	pop	ax
	jnz	erret
	ret
erret:	mov	ax,00ffh ; Flag for printer foulup
	mov	sp,bp
	push	ax
	jmp	edone	; special abort
send2	endp

; EPSON bit plots operate at 480 or 960 dots across the page
; called by ESC K 'low byte';'high byte'
;  i.e.  300 dots would be 256+44 or 012CH
;  This is sent to the EPSON as --> 1b 4b 2c 01
;		or in decimal	--> 27 75 44 1

indent	proc	near
	push	cx	; 13 spaces in to center
	IF	EPSON
	mov	cx,13	; PICTURE ( we've got 320 dots and 480 to work with
inlop:	print	20h	; 480-320=160 / 6 dots per char. = 26.67 extra
			; so indent the picture 13 spaces to center
	loop	inlop
; ESC K 64 1  = 256+64=320 bit plot type bytes on the way
	cmp	cs:mode640,TRUE
	jz	ind10
	print	escape	; SEQUENCE TO SET UP 320
			; BIT PLOTS IN 480 MODE
	print	'K'	; OF MX-80
			; This is the set-up for the small print
	print	64
	print	1
	jmp	short indend

ind10:
	print	escape
	print	'L'     ; 640 dots in 960 mode
	print	128
	print	2

indend:
	ENDIF
	IF	CITOH
	print	escape	; ESC N = Pica pitch
	print	'N'
	cmp	cs:mode640,TRUE
	jz	ind10
	mov	cx,20	; PICTURE ( we've got 320 dots and 640 to work with )
inlop:	print	20h	; 640-320=320 / 8 dots per char. = 40 extra
			; so indent the picture 13 spaces to center
	loop	inlop
	jmp	ind20

ind10:
	print	escape
	print	'S'
	print	'0'
	print	'6'
	print	'4'
	print	'0'
	jmp	ind30
ind20:
; ESC S 0320 = 320 bit plot type bytes on the way
	print	escape	; SEQUENCE TO SET UP 320 BIT PLOTS IN 640 MODE
	print	'S'     ; OF CITOH  This is the set-up for the small print
	print	'0'     ; Would love to try to use all 640 bits here
	print	'3'
	print	'2'
	print	'0'

ind30:
	ENDIF
	IF	OTHER
	BP1
	ENDIF
	pop	cx
	ret
indent	endp
; This is indent for LARGE print
; This time we have 400 bit plots to send (200 lines x 2)
; 480-400=80 / 6 = 13.3 extra
indent2 proc	near
	push	cx
	IF	EPSON
	mov	cx,6	; so indent 6 character type spaces
inlop2: print	20h
	loop	inlop2
; ESC 27 K 144 1 = 256+144=400 bit-plots
	print	escape
	print	'K'
	print	144
	print	1
	ENDIF
; 640-400=240 / 8 = 30 EXTRA characters
	IF	CITOH
	print	escape ; ESC N = Pica pitch
	print	'N'
	mov	cx,15	; PICTURE ( we've got 400 dots and 640 to work with
inlop2: print	20h	; 640-400 / 8 dots per char. = 30 extra so indent
			; the picture 15 spaces to center
	loop	inlop2
; ESC S 0400 = 400 bit plot type bytes on the way
	print	escape	; SEQUENCE TO SET UP 400 BIT PLOTS IN 640 MODE
	print	'S'     ; OF CITOH
	print	'0'
	print	'4'
	print	'0'
	print	'0'
	ENDIF
	IF	OTHER
	BP2
	ENDIF
	pop	cx
	ret
indent2 endp

m640	proc	near
m6ain:	mov	cx,80	; 80 x 4 = 320 dots.
m6loop: mov	dl,80h ; 10000000b
	call	tst4	; see if this comes back <> 0
	mov	al,ah	; we are testing bit patterns for one screen byte
	call	send	; don't send to printer unless something to send
	mov	dl,40h	; 01000000b
	call	tst4	; each byte is 4 dots
	mov	al,ah	; so we test for each dot in a byte
	call	send	; send sets PTFLAG if there is a dot on the line
	mov	dl,20h	; 00100000b
	call	tst4	; then resets to start of line and starts printing
	mov	al,ah	; AL is the bit plot byte being built
	call	send
	mov	dl,10h	; 00010000b
	call	tst4	; TST4 scans down 8 screen dot lines each time called
	mov	al,ah
	call	send
	mov	dl,08h ; 00001000b
	call	tst4	; see if this comes back <> 0
	mov	al,ah	; we are testing bit patterns for one screen byte
	call	send	; don't send to printer unless something to send
	mov	dl,04h	; 00000100b
	call	tst4	; each byte is 4 dots
	mov	al,ah	; so we test for each dot in a byte
	call	send	; send sets PTFLAG if there is a dot on the line
	mov	dl,02h	; 00000010b
	call	tst4	; then resets to start of line and starts printing
	mov	al,ah	; AL is the bit plot byte being built
	call	send
	mov	dl,01h	; 00000001b
	call	tst4	; TST4 scans down 8 screen dot lines each time called
	mov	al,ah
	call	send
	loop	m6loop	; 80 bytes make 320 dots
	call	lfcr	; this is a good old regular line feed/carriage return
	call	break?	; see if someone hit ESC key. If so take early exit
	or	al,al
	dec	dh	; DL is line counter
	cmp	dh,0	; when it goes 0 we're through
	jz	d6one	; reset everything and do an IRET
	mov	ax,ds	; otherwise bump the SEGMENT reg so that location
	add	ax,14h	; 0 is the start of the next line
	mov	ds,ax	; X'140' = 320
	jmp	m6ain	; and do this 80 times (80x4=320)
d6one:	mov	ax,0
	jmp	done1

m640	endp

tst4	proc	near	;  This routine builds ONE bit plot byte
	mov	ax,80	;  by testing a dot with the mask sent
	sub	ax,cx	;  from MLOOP.
	mov	si,ax	;  First it does the ODD row then the EVEN
	mov	ah,0	;  since alternate lines are offset 2000h
	mov	al,[si] ;  from each other in memory.
	and	al,dl	;  DL has the mask
	cmp	al,0	;  SI the location
	jz	no7	;  AL the memory byte
	call	set7	;  AH is the byte being built
no7:	add	si,80	; +80 gets us from say 0,0 to 2,0
	mov	al,[si] ; get the memory byte ( 4 dots )
	and	al,dl	; get rid of dots we aren't testing now
	cmp	al,0	; see if its COLOR 0
	jz	no5	; if yes, go on
	call	set5	; otherwise set that bit
no5:	add	si,80	; continue 7 5 3 1
	mov	al,[si]
	and	al,dl
	cmp	al,0
	jz	no3
	call	set3
no3:	add	si,80
	mov	al,[si]
	and	al,dl
	cmp	al,0
	jz	no1
	call	set1
no1:	push	ax
	mov	ax,80
	sub	ax,cx	; CX counts our screen position
	add	ax,2000h ; add 2000h for the EVEN rows
	mov	si,ax	; with seg set to B800h we can use SI like an
	pop	ax	; array pointer ( AH has our byte so don't lose )
	mov	al,[si] ; and continue with the same idea for 6 4 2 0
	and	al,dl
	cmp	al,0
	jz	no6
	call	set6
no6:	add	si,80
	mov	al,[si]
	and	al,dl
	cmp	al,0
	jz	no4
	call	set4
no4:	add	si,80
	mov	al,[si]
	and	al,dl
	cmp	al,0
	jz	no2
	call	set2
no2:	add	si,80
	mov	al,[si]
	and	al,dl
	cmp	al,0
	jz	no0
	call	set0
no0:	ret
; where's my Z80 now
; reverse this table if your bit plots use bit 0 for the top wire
	IF	BIT7
set7:	or	ah,80h	; top wire - bit 7
	ret
set6:	or	ah,40h	; bit 6
	ret
set5:	or	ah,20h	; bit 5
	ret
set4:	or	ah,10h	; bit 4
	ret
set3:	or	ah,08h	; bit 3
	ret
set2:	or	ah,04h	; bit 2
	ret
set1:	or	ah,02h	; bit 1
	ret
set0:	or	ah,01h	; bit 0
	ret
	ENDIF
	IF	BIT0
set7:	or	ah,01h	; top wire - bit 0
	ret
set6:	or	ah,02h	; bit 1
	ret
set5:	or	ah,04h	; bit 2
	ret
set4:	or	ah,08h	; bit 3
	ret
set3:	or	ah,10h	; bit 4
	ret
set2:	or	ah,20h	; bit 5
	ret
set1:	or	ah,40h	; bit 6
	ret
set0:	or	ah,80h	; bit 7
	ret
	ENDIF
tst4	endp
; This routine pre-scans a line to see if in fact there are any bit
; plots to send. The main routine will keep sending bytes here
; If a whole line of 0's are sent we avoid going through the
; set-up for bit-plot (i.e. slower movement) graphics when a CR/LF
; would take care of everything.
; If there IS something to send, PTFLAG is set, the current line
; position is set to 0, bit-plot is init., and bits are really sent to printer.
send	proc	near
	push	ax	; save the character
	push	ds	; DS saved cause it points to lines
	mov	ax,cs	; set seg for here
	mov	ds,ax	; This was some of my first stuff with the 8088
	pop	ax	; and I see some needless complexity here now
	mov	cs:dstor,ax	; but it works and if I mess with it
	cmp	cs:ptflag,0ffh	; its back to DEBUG.
	jnz	nosend	; if PTFLAG isn't FFh we are still scanning
	pop	ax	; else get the char. in AL and print it
	call	send2	; this is the real out to printer routine
	jmp	short noset ; restore DS and return
nosend: pop	ax	; This is the SCAN routine
	cmp	al,0	; get the char. > test for 0 > if so reset and go back
	jz	noset
	mov	al,0ffh ; if <> 0
	mov	cs:ptflag,al ; set PTFLAG to go
	pop	ax	;DISCARD RETURN
	cmp	cs:oneor2,1 ; check which (small or LARGE)
	jnz	two	; indent 6 or 13 depending on which routine
	cmp	cs:mode640,TRUE
	jz	nos10
	call	indent	; indent also sets up bit-plot mode
	call	noset	; NOSET will restore DS to right pos.
	jmp	main	; and do the line for real.
nos10:
	call	indent
	call	noset
	jmp	m6ain
two:	call	indent2 ; init. for LARGE
	mov	si,cs:wheresi	; SI set back to start of line
	call	noset	; get right DS
	jmp	main2a	; back to beginning
noset:	push	ax	; routine to restore DS
	mov	ax,cs:dstor
	mov	ds,ax
	pop	ax
	ret
send	endp
lfcr	proc	near	; send a regular CR/LF combo
	print	13
	print	10
	mov	ax,0
	mov	cs:ptflag,al ; reset PTFLAG for next line
	mov	ax,cs:dstor  ; restore DS
	mov	ds,ax
	ret		; onward
lfcr	endp
break?	proc	near	; Test for early exit
	push	ax	; don't lose any regs. here
	push	dx
	mov	ah,01h	; call direct keyboard io (constat) by BIOS
	int	16h
	jnz	goback? ; if zero flag clear we have a character
bcont:	pop	dx	; no char. return
	pop	ax
	ret
goback?:
	mov	ah,0
	int	16h
	cmp	al,1bh	; ESC
	jz	back	; so go back, else return
	jmp	short bcont	; no ESC exit
back:	pop	dx	; ESC exit This doesn't check for Ctrl-Break
	pop	ax	; so if it is hit we save it for the caller to handle
	pop	ax	;DISCARD RETURN
	jmp	done	; and go back to orig. caller
break?	endp
flipflop	proc near	; This creates different combinations
	push	cx	; of a box of four bit-plot dots for one color dot.
	push	bx	; Don't lose any variables or loop counters
	push	ax
	mov	cl,2	; AL has present bit-plot finished byte
	mov	bx,0
	and	al,3	; 00000011b
	call	flip
	ror	bl,cl	; 11000000b
	pop	ax	; basically rotate bits around for
	push	ax	; o x
	call	r2	; x o	color 1
	and	al,3	; and
	call	flip	; o x
	ror	bl,cl	; o x	color 2
	pop	ax	; instead of
	push	ax	; x o
	call	r4	; x o	color 1
	and	al,3	; and
	call	flip	; o x
	ror	bl,cl	; o x	color 2
	pop	ax	; which aren't to convincing as
	call	r6	; two different patterns
	and	al,3
	call	flip
	ror	bl,cl
	mov	al,bl
	pop	bx
	pop	cx
	ret
r6:	ror	al,cl
r4:	ror	al,cl
r2:	ror	al,cl
	ret
flip:	cmp	al,3	; make sure there are two dots for color 1 and 2
	jnz	flip2
	or	bl,3
flip2:	cmp	al,2
	jnz	flip3
	or	bl,1
flip3:	cmp	al,1
	jnz	flip4
	or	bl,1
flip4:	ret
flipflop	endp
reverse proc	near	; take AL and make bit 0 bit 7 , 1 - 6, etc
	push	dx	; Save our counters and masks
	push	cx
	mov	dl,01h	; 00000001B
	mov	dh,80h	; 10000000B
	mov	ah,00h	; start out blank
	mov	cx,8	; set counter for 8 times through
rev1:	test	al,dl	; see if bit is set
	jz	rev2	; if not skip next step
	or	ah,dh	; else set bit in AH
rev2:	shl	dl,1	; shift left test bit
	shr	dh,1	; shift right mask bit (pad other bits with 0)
	loop	rev1	; do this 8 times
	mov	al,ah	; and we have a reversed character.
	pop	cx	; get back these
	pop	dx
	ret		; and back to caller
reverse endp
last	dw	0
buffer	db	'          GRAFTRAX.COM v3.4',10,13
	if	EPSON
	db	'EPSON/IBM GRAFTRAX(tm) Screen Printer.',13,10
	else
	db	'       Graphics Screen Printer',13,10
	endif
	db	'   Left Shift PrtSc = LARGE GRAPHICS',13,10
	db	'  Right Shift PrtSc = small graphics',13,10
	db	' Text mode uses regular print routine.',13,10
	db	'   ESCape will exit GRAPHICS print.',13,10,'$'
werehere db	' ** GRAF.COM is already resident **',13,10,10
	db	' There is no need to reinstall.',13,10,'$'
initr	proc	far
initial:
	mov	ax,0	; get addr of
	mov	ds,ax	; print screen routine
	mov	si,14h	; in rom
	mov	ax,[si] ; from interrupt table in ram
	inc	si
	inc	si
	mov	dx,[si]

	mov	word ptr cs:old_print_routine,ax
	mov	word ptr cs:old_print_routine+2,dx
	mov	cx,offset last-offset start
	mov	di,ax
	mov	si,offset start
	cmp	dx,0efffh	; if routine points to ROM, ours is not it.
	ja	initok
	cmp	si,di
	jne	initok		; if start location not same, it can't be ours.

	; otherwise check to see if this routine is

	mov	es,dx		; already in memory, and don't reinstall if so.
	mov	ax,cs
	mov	ds,ax
	repe	cmpsb


	or	cx,cx		; cx=0 means there is a copy of this at the
	jnz	initok		; other address.
	mov	dx,offset werehere
	mov	ah,9		; so we print a message and
	int	21h		; abort.
	int	20h
initok:

;	 mov	 ds,ax
;	 mov	 al,0f1h ; move it to
;	 mov	 ah,25h
;	 int	 21h	 ; int f1h described in tech. manual as unused vector
	mov	ax,cs	; reset int 5
	mov	ds,ax	; to point to
	mov	ax,offset start ; this routine
	mov	dx,ax
	mov	al,5
	mov	ah,25h	; dos routine to reset int. vector
	int	21h
	mov	ax,offset buffer
	mov	dx,ax
	mov	ah,9
	int	21h	; print greeting
	mov	ax,3000h  ; get dos version
	int	21h
	or	al,al
	jz	dos1
	mov	ax,offset last
	mov	cx,16
	xor	dx,dx
	div	cx
	inc	ax	; make number of paragraphs
	mov	dx,ax
	mov	al,0	; exit code
	mov	ah,31h	; terminate process, keep resident
	int	21h

dos1:
	mov	dx,offset last	; last address here
	inc	dx
	int	27h	; terminate but stay resident
initr	endp
cseg	ends
	end	init

```
{% endraw %}

## GRAFTRAX.BAS

{% raw %}
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
{% endraw %}

## GRAFTRAX.DOC

{% raw %}
```
****************************************************************************
*		         -- GRAFTRAX.COM v3.4 --			   *
****************************************************************************

GRAFTRAX.COM is for printing IBM-PC graphics on bit-plot printers.  
The program as delivered works with EPSON GRAFTRAX (tm) and IBM GRAPHICS(tm) 
printers, but can be modified to work with others, such as the C.ITOH 8510a,
and NEC 8023a.  OKIGRAF.(ASM, COM) is a special version for 7-bit graphics
printers and works with the Okidata 84, 92 and 93.

GRAFTRAX represents the latest version of the program.  It does everthing
the old one does and now does high-res. graphics much more clearly.
This version has some small changes, including some to insure compatibility 
with future versions of DOS, but the main improvement is correct handling 
of the high-resolution 640x200 graphics mode.	GRAFTRAX originally was 
created to reproduce medium resolution color graphics.

If you have other memory resident programs you load when you start up your
system you know that sometimes they must be loaded in a certain order to 
work properly.  This is not the case with GRAFTRAX, the only time you 
should not load it for the first time is from another program.  

GRAFTRAX.COM is created by running the program from DOS. GRAFTRAX
announces itself and will remain a part of your system until reset or
power down.  Once run, the Shift+PrtSc keys will work as always with text
on the screen, sending it to the printer.  If you have graphics running 
on the screen and GRAFTRAX in your printer, the screen can be sent to the 
printer in two ways.  A small (5 1/4 x 3 1/4) print with the 
RIGHT-Shift+PrtSc keys, and LARGE (almost a full 8 1/2 x 11 page) print 
with the LEFT- Shift+PrtSc keys.

CALLGRAF.BAS is a demo program showing how to call GRAFTRAX.COM from a
BASIC program.

GRAFTRAX.ASM is the source code for GRAFTRAX.COM.  With the IBM MACRO-
ASSEMBLER(tm) it will produce GRAFTRAX.EXE.  Use the EXE2BIN command to
create GRAFTRAX.COM.  Conditional compilation allows easy assembly for 
the C.ITOH 8510a or other printers with bit-plot capabilties.  The first 
part of the listing explains the history of the program and explains how 
to assemble for other printers.

     Program by:
Marty Smith       COMPUSERVE 72155,1214
310 Cinnamon Oak Lane
Houston, Texas	77079
(713) 464-6737 (Home)
3/18/85

```
{% endraw %}

## HOST.BAS

{% raw %}
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
{% endraw %}

## HOST.DOC

{% raw %}
```
PROGRAM NAME: HOST.BAS
ABSTRACT: This program allows you to access an IBM PC from a remote location
for the purpose of transmitting or receiving an ASCII file. Upon receiving
a carrier from the remote location, the program requests a password for file
protection.
REQUIRES: IBM PC, ASYNC Communication board, Hayes Smartmodem
Instructions: Contained in the program body.

```
{% endraw %}

## MAKEDOTS.BAS

{% raw %}
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
{% endraw %}

## NEWT.ASM

{% raw %}
```
	PAGE  60,132
	TITLE	TOSHIBA P1351 Graphics, v 1.0

	comment #

 tgraf.COM  7/4/85
Interrupt replacement for print screen function on ibmpc(tm)
	Please send problem reports and suggestions to:
		Marty Smith
		310 Cinnamon Oak Lane
		Houston, Texas	77079
		Compuserve 72155,1214
		(713) 464-6737

    Create tgraf.COM with MASM*, LINK* and EXE2BIN* as follows:

	masm tgraf,tgraf,tgraf;

	link tgraf;    (ignor the error message about no stack segment,
			  that's taken care of in the next step.)
	exe2bin tgraf.exe tgraf.com

  *  MASM is the MicroSoft(tm) Macro Assembler v. 3.0
	or IBM(tm) Macro Assembler v. 1.0
     LINK and EXE2BIN are PC-DOS(tm) utilities.

  This program originally designed for Epson-MX(tm) series printers
  with Graftrax80(tm) and Graftrax+(tm) bit-plot graphic capabilites.
  ======> Now modified with conditional compilation and macros for
  ======> c.itoh(tm) model 8510a and other printers.

	CHANGE HISTORY:
	9/18/82 - Buffer in routine for a line of bit-plot bytes to allow for
  checking for blank lines replaced by pre-scan routine, saving space.
	1/24/83 - Modifications for conditional assembly with other printers
  and C.ITOH 8510a.
	1/24/83 - Improved error checking for out-of-paper and I/O errors
  involving printer.
	1/24/83 - Bug in error check corrected, occuring when routine does
  error exit and is then called again, resulting in bit-plot data sent in
  regular mode.
	3/12/83 - Allow calling as a subroutine. i.e. no shift key depressed.
  Defaults to small print mode. Can be set to LARGE.
	2/4/84	- Allow correct printing of 640x200 mode.
	3/18/84 - Use int 31h for dos 2.+ terminate process.
	3/24/84 - Use BIOS for keyboard scan, in case screen is printed
		from DOS.
	4/21/84 - -OTHER- section complete for changes from 640 mode.
	9/22/84 - Add code to set lines back in 6/inch order, so CR's
		can advance to TOF.
	9/22/84 - Jump to other print screen routine instead of reassigning
		it to int f1h. Only luck has kept this vector from being used
		by someone else.
	10/20/84- Add check for already installed, don't reinstall.
	10/20/84- Compatibility with MASM 1.0 reestablished, FAR call to old
		routine caused 'fixup error' from EXE2BIN.
	10/20/84- CALLGRAF now points to common address variable for default
		mode, is now the same for all versions of program.  Demo now
		works!
	4/15/84 - Toshiba P1351 added to list.	This is a higher resolution
		printer with a 24 pin dot head, and is another special edition
		of the program, like the Okidata with its 7 dot graphics.

	Features:
  Accepts ESC key exit, prescans to test for blank line
  left shift prtsc = small graphics, right shift prtsc = big
  Runs as a .COM type program under dos
     resident until power down or reset.
   1 = screen sent horiz. 320 bits in 480 mode
   2 = screen sent vert. 400 bits double printed in 480 mode
 **************  1 mode **********************
	DL = masking character
	DH = count of 25 (physical lines)
	CX = counter for each line (80)
	DS = used to index screen at 'b8000'
   These regs must be preserved during routine
	  (increment each line by adding '14' hex to ds: for paragraph
		boundary of 320 bytes 0x'140')
 **************  2 mode *********************
	DH = count of 40 (physical lines)
	CX = counter for each line (100)
	SI = index to screen via ds:
   These regs must be preserved during routine
	all output to printer is done from routine -send2-, which uses
	bios routine int 17h, and provides safe error exit.

  GRAF.COM is designed with the idea that the user's main program is the
  primary function and GRAF.COM should not cause problems of its own.


	#

TRUE	equ	-1	; DON'T CHANGE THESE!
FALSE	equ	0

escape	equ	27	; for printer
CR	equ	13
LF	equ	10

; ===============>  A L L  U S E R S  <===================
; ====> SET ONE AND ONLY ONE OF THE FOLLOWING THREE <=====
; don't set citoh to true! not operable with this version.

TOSHIBA EQU	TRUE
; citoh and nec are left in here to allow for other 24 pin printers, and
; should NOT be set true at present.
CITOH	EQU	FALSE	; citoh and nec 8023 use similar codes.
NEC	EQU	FALSE

DEBUG	equ	FALSE


NO_EXT	equ	1	; print extended chars as dots

; Each bit of a byte is mapped to the wire head of the printer.
; If the Epson MX is sent 80h (bit 7), the TOP wire makes a dot.
; If the C.ITOH is sent   01h (bit 0), the TOP wire makes a dot.
; ===============>  A L L  U S E R S  <===================
; =====> SET ONE AND ONLY ONE OF THE FOLLOWING TWO <======

BIT7	EQU	TRUE
BIT0	EQU	FALSE

; BIT7 is TRUE for TOSHIBA
; BIT0 is TRUE for CITOH,NEC8023

print	macro	char
	mov	al,char
	call	SEND2
	endm


;  ***************> START OF ACTUAL CODE <*****************

cseg	segment 'code'
	assume cs:cseg
	org	100h		; set up for .com conversion
; publics here for debugging.

	comment #
	public	BCONT,BIT0,BIT7,BREAK?,BUFFER,D6ONE
	public	DEFAULT_ROUTINE
	public	DONE,DONE1,DOS1,DO_OLD,DSTOR,EDONE,ERRET,ESCAPE,EXIT
	public	GOBACK?,GOWAIT,GR1,GR2,GRAPHIC,IND10,INDEND
	public	INDENT,INDENT2,INIT,INITIAL,INITOK,INITR,INL640,INLOP
	public	INLOP2,LAST,LFCR,LOOP_COUNT,M640,M6AIN,M6LOOP,MAIN
	public	MAIN2,MAIN2A,ML10,ML10A,ML10B,ML20,MLOOP,MLOOP2,MODE640
	public	NO0,NO1,NO2,NO3,NO4,NO5,NO6,NO7,NOS10,NOSEND
	public	NOSET,NXTS,NXTS10,OLD_PRINT_ROUTINE,ONEOR2,PTFLAG,S310
	public	S320,S330,S340,S350,S360,S370,S380,S390,SEB10,SEB20,SEB30
	public	SEBLOOP1,SEBLOOP2,SEC10,SEC20,SEC25,SEC30,SECLOOP1
	public	SECLOOP2,SEND,SEND2,SEND3,SENDTWO,SEND_BIG_BW
	public	SEND_BIG_COLOR,SEND_LOOP1,SEND_LOOP2,SEND_LOOP3,SEND_ONE
	public	SEND_THREE,SEND_TWO,START,STWO1,STWO10,STWO2,STWO20
	public	STWO30,STWO40,TO0,TO1,TO2,TO3,TO4,TO5,TO6,TO7
	public	TOF,TOFL,TS0A,TS1A,TS2A,TS3A,TS4A,TS5A
	public	TS6A,TS7A,TST4,TST8,TWO,WEREHERE,WHERESI
	#

init	proc
	jmp	initial 	; so we have to set up first
init	endp
;	debugvar dw	0
gowait	dw	0
wheresi dw	0
ptflag	db	0
oneor2	db	0
dstor	dw	0
mode640 dw	0

; **** the 1 below is the POKE to use in CALLing from another program. ****
;
default_routine dw	1	;  1 for small, 2 for LARGE.		  *
;
; ****	 WARNING * add any new variables AFTER this to preserve POKE ******

bigc1	db	001000b,100000b,000010b,001000b,100000b,000010b
bigc2	db	100010b,010101b,101010b,010100b,0,0  ; patterns for big color
bigc3	db	101010b,010101b,101010b,010101b,101010b,010101b

data_byte db	0,0

loop_count	db	0,0

old_print_routine  dd	0	; address of former print screen routine.

crt_cols	db	0
video_page	db	0
cursor_pos	dw	0
tmode_flag	db	0
max_lns 	db	25
MAX_LINES equ	byte ptr cs:max_lns

dot18		db	6,escape,';0018' ; string to send 18 dot lines
half_crlf	db	3,escape,'U',13  ; half line feed, carriage return

deline		db	0	; flag for extended line like │

.xlist

include dotdata.asm	; font data for extended characters

include dotable.asm	; xlat table and offsets

.list

do_old	proc	near
; jump to old routine
	pop	bp
	pop	si
	pop	di
	pop	dx
	pop	cx
	pop	bx
	pop	ds
	pop	es
	pop	ax
	jmp	cs:old_print_routine

do_old	endp

; --->	ACTUAL INTERRUPT ROUTINE STARTS HERE  <---
start	proc	far	; Start of main routine--Shift Prt.Sc hit.
	assume cs:cseg
	sti		; This follows ROM routine real close
	push	ax	;SAVE REGS
	push	es
	push	ds
	push	bx
	push	cx
	push	dx
	push	di
	push	si
	push	bp
	mov	bp,sp		; Save in case of error for reset
	mov	ax,50h		; Check here first to see if
	mov	ds,ax		; routine is already in progress
	mov	si,0		; otherwise it will be a mess.
	mov	al,01h		; if [si]=1 then there is a
	cmp	[si],al 	; print screen already in progress.
	jnz	nxts		; if not we're go for routine
	jmp	exit		; otherwise go back home.
nxts:	mov	[si],al 	;
	mov	ah,15		; Get the current video state.
	int	10h		; from the ROM routine,
	mov	cs:mode640,FALSE
	cmp	al,4		; AL=4-6 are all graphics so we're OK
	jz	graphic
	cmp	al,5
	jz	graphic
	cmp	al,6
	jnz	nxts10
	mov	cs:mode640,TRUE ; special case
	jmp	short graphic
nxts10:
	jmp	do_text_mode

	mov	al,0	; else reset and go to ROM routine.
	mov	[si],al
	jmp	do_old	; this is where we stored the ROM routine entry.
;	jmp	exit	; Do the ROM routine but come back here to leave.
graphic:
	mov	ax,40h	; Get the keyboard shift flag
	mov	ds,ax	; segment
	mov	si,17h	; and address
	mov	ax,[si] ; pick it up
	and	ax,3	; get rid of other stuff
	or	ax,ax	; Mod. to create default small
	jnz	gr1	; for case where routine is called as a subroutine.
	mov	ax,cs:default_routine
gr1:	mov	cs:oneor2,al	; store for later
	push	ax	; also here
	xor	al,al	; make sure this starts out as NO print.
	mov	cs:ptflag,al
	xor	dl,dl	; These bits indicate whether R or L Shift is down
	mov	dh,19h	; 25 lines of graphic dots at 8 dots per line
	mov	cs:loop_count,dh
	mov	ax,0b800h ; stored in DX
	mov	ds,ax	;SET UP FOR SCREEN PEEK
; Printer setup section to change line spacing to 8/72" for continuous dots

; line spacing routine - All Epson Graftrax and IBM Graphics should
; accept esc 'A' 8  or  esc '3' 24 for line spacing, but IBM Graphics only
; recognizes esc '3' 24
	IF	TOSHIBA
	print	escape
	print	'L'     ; A
	print	'0'     ; 8
	print	'7'
	ENDIF

	IF	CITOH	; ESC T 16
	print	escape
	print	'T'     ; T
	print	'1'     ; 1
	print	'6'     ; 6
	print	escape

	IF	NEC
	print	'['     ; Set printer to unidirectional for dot alignment
	ELSE
	print	'>'
	ENDIF

	ENDIF

	pop	ax	; get back which routine
	cmp	al,2	; Left Shift Prt Sc means LARGE graphic print
	jnz	gr2
	jmp	main2	; so hop over there if so.
gr2:
	cmp	cs:mode640,TRUE
	jnz	MAIN
	jmp	m640

; START OF small GRAPHICS PRINT ROUTINE.
; This routine scans across the screen from left to right,
; building an TOSHIBA bit plot byte out of IBM screen dots.
; TOSHIBA wire head		IBM screen color dots
; TOP	 o  128  80h bit 7	| 00 | 01 | 10 | 11 | = 4 dots, one byte
;	 o   64  40h  "  6
; one	 o   32  20h  "  5      ibm dots go one raster line then the next
; bit	 o   16  10h  "  4      EVEN line, ie 0, 2, 4 etc.
; plot	 o    8  08h  "  3
; byte	 o    4  04h  "  2      then you go back and do 1, 3, 5 etc.
;	 o    2  02h  "  1
; BOTTOM o    1  01h  "  0      At loc. 0000h are 4 dots, 0,0|0,1|0,2|0,3
;				At loc. 2000h are 4 dots, 1,0|1,1|1,2|1,3
;
main:	mov	cx,80	; 80 x 4 = 320 dots.
	mov	di,sp	; this is not very structured, but its 11:30pm

	comment #

ok, heres the idea, bp is already set for printer foulup abort.
This printer has much finer resolution than the epson, humble beginning
of this program.  all color modes do color translation here, b+w is yet
another situation, carp, carp. The scan routine is set so that when material
is found to be printed, the print line loop is reset to the top and only
then is data actually sent. This allows for quicker printing of blank space.
 A cr/lf is much faster than control codes and 2000 bytes.  A more
complicated translation routine means more call nesting, and so register
DI is used to allow movement without stack trouble (famous last words).
If you make modifications to the program, please understand that changing
register DI may make for some interesting side effects.

	#

mloop:	mov	dl,0c0h ; 11000000b
	call	tst4	; see if this comes back <> 0
;	mov	al,ah	; we are testing bit patterns for one screen byte
	call	send3	; don't send to printer unless something to send
	mov	dl,30h	; 00110000b
	call	tst4	; each byte is 4 dots
;	mov	al,ah	; so we test for each dot in a byte
	call	send3	; send sets PTFLAG if there is a dot on the line
	mov	dl,0ch	; 00001100b
	call	tst4	; then resets to start of line and starts printing
;	mov	al,ah	; AL is the bit plot byte being built
	call	send3	; This keeps us from printing a line of '0's.
	mov	dl,03h	; 00000011b
	call	tst4	; TST4 scans down 8 screen dot lines each time called
;	mov	al,ah
	call	send3
	loop	mloop	; 80 bytes make 320 dots
	call	lfcr	; this is a good old regular line feed/carriage return
	call	break?	; someone hit ESC key? so take early exit
	mov	dh,cs:loop_count
	dec	dh	; DL is line counter
	or	dh,dh	; when it goes 0 we're through
	jz	done	; reset everything and do an IRET
	mov	cs:loop_count,dh
	mov	ax,ds	; otherwise bump the SEGMENT reg so that location
	add	ax,14h	; 0 is the start of the next line
	mov	ds,ax	; X'140' = 320
	jmp	main	; and do this 80 times (80x4=320)
done:	mov	ax,0
; This is the common exit for both routines, Printer is restored.
done1:	push	ax	; save AX cause it has error exit flag
; TOSHIBA command to reset printer to 6 lines/in. = ESC 2 (1b 32)
	IF	TOSHIBA
	print	escape
	print	'L'
	print	'0'     ; add 12/216 to reset line spacing
	print	'8'
	print	CR
	print	LF
	ENDIF
; FOR CITOH MAKE SURE BIDIRECTIONAL PRINTING IS RESTORED
	IF	CITOH
	print	escape
	print	'A'
	print	escape

	IF	NEC
	print	']'
	ELSE
	print	'<'
	ENDIF

	ENDIF

edone:	mov	ax,50h	; Set end of PrtSc indication
	mov	ds,ax	; OK to come back and do again
	mov	si,0
	pop	ax
	mov	[si],al
exit:	pop	bp
	pop	si	; restore regs and return to caller
	pop	di
	pop	dx
	pop	cx
	pop	bx
	pop	ds
	pop	es
	pop	ax
	iret		; were an interrupt routine so we IRET

	comment #
 START OF LARGE PRINT ROUTINE
+-------------+
| ^ ^	      |  This time we scan from 199,0 to 0,0
| ^ ^	      |   and go across
| ^ ^	      |  These are representations
| | |	      |   of one color dot.
+-------------+    0	     1	     2	     3	   Palettes
		x x x x x x	x x x x x x
     all o's    o o o o o o     x x x x x x     all x's
		x x x x x x	x x x x x x
		o o o o o o	o o o o o o	These patterns may be
		x x x x x x	o o o o o o	changed if they don't
		o o o o o o	o o o o o o	look convincing.
color	00	     01 	     10 	11
	 0	      1 	      2 	 3

		for b+w:

	dot on :  xxxxxx	oooooo	: dot off
		  xxxxxx	oooooo
		  xxxxxx	oooooo


	#

main2:	mov	dh,80	; we have 80 colunms x 25 lines here
	mov	cs:loop_count,dh
	mov	cs:wheresi,3ef0h ; si is our index
	mov	si,cs:wheresi
	mov	di,sp
main2a: mov	cx,100
mloop2: mov	al,[si] ; idea is to get a byte starting at screen BOTTOM
	cmp	cs:mode640,TRUE
	je	ml10

	call	send_big_color

	jmp	short ml10a
ml10:
	call	send_big_bw
ml10a:
	mov	cs:gowait,si ; store SI for next EVEN raster line
	sub	si,2000h ; subtract 2000h for the next ODD raster line
	mov	al,[si] ; and do the same here
	cmp	cs:mode640,TRUE
	je	ml10b

	call	send_big_color

	jmp	short ml20
ml10b:
	call	send_big_bw
ml20:
	mov	si,cs:gowait ; get back the EVEN line
	sub	si,80	; advance UP the screen one line (say 199,0 to 197,0)
	loop	mloop2	; and do this 100 times
	call	lfcr	; finished with one line we send normal line-end
	call	break?	; check for an ESC if we want to abort
	or	al,al	; clear flags
	dec	cs:loop_count
	mov	dh,cs:loop_count ; DH is our line counter,
	or	dh,dh	; when it goes 0 we're done.
	jz	tof	; so we'll try to reset Top of Form and exit

	inc	cs:wheresi	; else go to the next byte location
	mov	si,cs:wheresi	; store
	jmp	main2a		; and do again

tof:
	print	12	; send a form feed

	jmp	done	; clean up and back to caller.

start	endp

send2	proc	near	; BIOS routine to print the character in AL

IF	DEBUG
	inc	cs:debugvar
	ret
	ELSE
	push	ax
	mov	ah,00h	; 0=print, 1=initialize port, 2=read status to AH
	push	dx
	mov	dx,0	; DX specifies printer 0 (LPT1:)
	int	17h	; BIOS used instead of DOS because DOS sends
	pop	dx	; CR/LF's in the middle of the bit-plots
	test	ah,29h	; check for timeout or errors or out-of-paper
	pop	ax
	jnz	erret
	ret

erret:
	cmp	cs:tmode_flag,TRUE
	jne	erret10
	call	reset_cursor
erret10:
	mov	ax,00ffh ; Flag for printer foulup
	mov	sp,bp
	push	ax
	jmp	edone	; special abort
	ENDIF
send2	endp

send_string	proc	near
; send a string of chars to printer
;	format	len,0,1,...,len-1
; si points to first byte

	push	cx

	mov	cl,cs:[si]
	or	cl,cl
	jz	sstret
	xor	ch,ch
	cld
sst_loop:
	inc	si
	mov	al,cs:[si]
	call	send2
	loop	sst_loop

sstret:
	pop	cx
	ret

send_string	endp

; TOSHIBA bit plots operate at 180 dots per inch, or 1440 for an 8 inch line.
; called by ESC ; 'xxxx' where xxxx is an ASCII number like '0010' or '1440'
;  i.e.  300 dots would be ESC ; 0300
;  This is sent to the TOSHIBA as --> 27 ';' '0300'

indent	proc	near
	push	cx	; 13 spaces in to center
	IF	TOSHIBA
	cmp	cs:mode640,TRUE
	jz	ind10
	mov	cx,13	; PICTURE ( we've got 960 dots and 1440 to work with
inlop:	print	' '     ; 1440-960=480/18 spaces/char pica = 26.67 extra
			; so indent the picture 13 spaces to center )
	loop	inlop
	print	escape	; SEQUENCE TO SET UP 960
			; BIT PLOTS IN GRAPHIC MODE.
	print	';'     ; OF P1351
			; This is the set-up for the small print
	print	'0'
	print	'9'     ; 320*3=960 dots
	print	'6'
	print	'0'
	jmp	short indend

ind10:
	mov	cx,5
inl640: 		; 640x200 mode, 1440-1280=160/18 per char pica=8.89
			; so indent 5
	print	' '
	loop	inl640
	print	escape
	print	';'     ; 640 dots * 2 = 1280
	print	'1'
	print	'2'
	print	'8'
	print	'0'

indend:
	ENDIF
	IF	CITOH
	print	escape	; ESC N = Pica pitch
	print	'N'
	cmp	cs:mode640,TRUE
	jz	ind10
	mov	cx,20	; PICTURE ( we've got 320 dots and 640 to work with )
inlop:	print	20h	; 640-320=320 / 8 dots per char. = 40 extra
			; so indent the picture 13 spaces to center
	loop	inlop
	jmp	ind20

ind10:
	print	escape
	print	'S'
	print	'0'
	print	'6'
	print	'4'
	print	'0'
	jmp	ind30
ind20:
; ESC S 0320 = 320 bit plot type bytes on the way
	print	escape	; SEQUENCE TO SET UP 320 BIT PLOTS IN 640 MODE
	print	'S'     ; OF CITOH  This is the set-up for the small print
	print	'0'     ; Would love to try to use all 640 bits here
	print	'3'
	print	'2'
	print	'0'

ind30:
	ENDIF
	pop	cx
	ret
indent	endp
; This is indent for LARGE print
; This time we have 200*6=1200 bit plots to send
; 1440-1200=240/18 =13.33 extra, so indent 6
indent2 proc	near
	push	cx
	IF	TOSHIBA
	mov	cx,6	; so indent 6 character type spaces
inlop2: print	20h
	loop	inlop2
	print	escape	; 200*6=1200
	print	';'
	print	'1'
	print	'2'
	print	'0'
	print	'0'
	ENDIF
; 640-400=240 / 8 = 30 EXTRA characters
	IF	CITOH
	print	escape ; ESC N = Pica pitch
	print	'N'
	mov	cx,15	; PICTURE ( we've got 400 dots and 640 to work with
inlop2: print	20h	; 640-400 / 8 dots per char. = 30 extra so indent
			; the picture 15 spaces to center
	loop	inlop2
; ESC S 0400 = 400 bit plot type bytes on the way
	print	escape	; SEQUENCE TO SET UP 400 BIT PLOTS IN 640 MODE
	print	'S'     ; OF CITOH
	print	'0'
	print	'4'
	print	'0'
	print	'0'
	ENDIF
	pop	cx
	ret
indent2 endp

m640	proc	near
m6ain:	mov	cx,80	; 80 x 4 = 320 dots.
	mov	di,sp
m6loop: mov	dl,80h ; 10000000b
	call	tst8	; see if this comes back <> 0
	mov	al,ah	; we are testing bit patterns for one screen byte
	call	sendtwo ; don't send to printer unless something to send
	mov	dl,40h	; 01000000b
	call	tst8	; each byte is 4 dots
	mov	al,ah	; so we test for each dot in a byte
	call	sendtwo ; send sets PTFLAG if there is a dot on the line
	mov	dl,20h	; 00100000b
	call	tst8	; then resets to start of line and starts printing
	mov	al,ah	; AL is the bit plot byte being built
	call	sendtwo
	mov	dl,10h	; 00010000b
	call	tst8	; TST4 scans down 8 screen dot lines each time called
	mov	al,ah
	call	sendtwo
	mov	dl,08h ; 00001000b
	call	tst8	; see if this comes back <> 0
	mov	al,ah	; we are testing bit patterns for one screen byte
	call	sendtwo ; don't send to printer unless something to send
	mov	dl,04h	; 00000100b
	call	tst8	; each byte is 4 dots
	mov	al,ah	; so we test for each dot in a byte
	call	sendtwo ; send sets PTFLAG if there is a dot on the line
	mov	dl,02h	; 00000010b
	call	tst8	; then resets to start of line and starts printing
	mov	al,ah	; AL is the bit plot byte being built
	call	sendtwo
	mov	dl,01h	; 00000001b
	call	tst8	; TST4 scans down 8 screen dot lines each time called
	mov	al,ah
	call	sendtwo
	loop	m6loop	; 80 bytes make 320 dots
	call	lfcr	; this is a good old regular line feed/carriage return
	call	break?	; see if someone hit ESC key. If so take early exit
	or	al,al
	mov	dh,cs:loop_count
	dec	dh	; DL is line counter
	cmp	dh,0	; when it goes 0 we're through
	jz	d6one	; reset everything and do an IRET
	mov	cs:loop_count,dh
	mov	ax,ds	; otherwise bump the SEGMENT reg so that location
	add	ax,14h	; 0 is the start of the next line
	mov	ds,ax	; X'140' = 320
	jmp	m6ain	; and do this 80 times (80x4=320)
d6one:	mov	ax,0
	jmp	done1

m640	endp

tst4	proc	near	;  This routine builds ONE bit plot byte
	mov	bx,80	;  by testing a dot with the mask sent
	sub	bx,cx	;  from MLOOP.
	mov	si,bx	;  First it does the ODD rows then the EVEN,
	xor	ax,ax	;  alternate lines are offset 2000h
	mov	bl,[si] ;  from each other in memory.
	and	bl,dl	;  DL has the mask
	or	bl,bl	;  SI the location
	jz	no7	;  BL the memory byte
	mov	bh,bl
	and	bx,1010101001010101b ; separate components of two bits/pixel
	test	bh,dl	; even bit
	jz	ts7a
	or	ah,80h	; if set, set on data word
ts7a:
	test	bl,dl	; odd bit
	jz	no7
	or	ah,40h
no7:	add	si,80	; +80 gets us from say 0,0 to 2,0
	mov	bl,[si] ; get the memory byte ( 4 dots )
	and	bl,dl	; get rid of dots we aren't testing now
	or	bl,bl	; see if its COLOR 0
	jz	no5	; if yes, go on
	mov	bh,bl
	and	bx,1010101001010101b ; separate components of two bits/pixel
	test	bh,dl	; even bit
	jz	ts5a
	or	ah,8	; if set, set on data word
ts5a:
	test	bl,dl	; odd bit
	jz	no5
	or	ah,4
no5:	add	si,80	; continue 7 5 3 1
	mov	bl,[si] ;  xxxxxx
	and	bl,dl	;
	or	bl,bl	;  xxxxxx
	jz	no3	;  xxxxxx
	mov	bh,bl
	and	bx,1010101001010101b ; separate components of two bits/pixel
	test	bh,dl	; even bit
	jz	ts3a
	or	al,80h	; if set, set on data word
ts3a:
	test	bl,dl	; odd bit
	jz	no3
	or	al,40h
no3:	add	si,80	;  xxxxxx
	mov	bl,[si] ;
	and	bl,dl
	or	bl,bl
	jz	no1
	mov	bh,bl
	and	bx,1010101001010101b ; separate components of two bits/pixel
	test	bh,dl	; even bit
	jz	ts1a
	or	al,8	; if set, set on data word
ts1a:
	test	bl,dl	; odd bit
	jz	no1
	or	al,4
no1:	push	ax
	mov	ax,80
	sub	ax,cx	; CX counts our screen position
	add	ax,2000h ; add 2000h for the EVEN rows
	mov	si,ax	; with seg set to B800h we can use SI like an
	pop	ax	; array pointer ( AH has our byte so don't lose )
	mov	bl,[si] ; and continue with the same idea for 6 4 2 0
	and	bl,dl
	or	bl,bl
	jz	no6
	mov	bh,bl
	and	bx,1010101001010101b ; separate components of two bits/pixel
	test	bh,dl	; even bit
	jz	ts6a
	or	ah,20h	; if set, set on data word
ts6a:
	test	bl,dl	; odd bit
	jz	no6
	or	ah,10h
;	call	set6
no6:	add	si,80
	mov	bl,[si]
	and	bl,dl
	or	bl,bl
	jz	no4
	mov	bh,bl
	and	bx,1010101001010101b ; separate components of two bits/pixel
	test	bh,dl	; even bit
	jz	ts4a
	or	ah,2	; if set, set on data word
ts4a:
	test	bl,dl	; odd bit
	jz	no4
	or	ah,1
;	call	set4
no4:	add	si,80
	mov	bl,[si]
	and	bl,dl
	or	bl,bl
	jz	no2
	mov	bh,bl
	and	bx,1010101001010101b ; separate components of two bits/pixel
	test	bh,dl	; even bit
	jz	ts2a
	or	al,20h	; if set, set on data word
ts2a:
	test	bl,dl	; odd bit
	jz	no2
	or	al,10h
;	call	set2
no2:	add	si,80
	mov	bl,[si]
	and	bl,dl
	or	bl,bl
	jz	no0
	mov	bh,bl
	and	bx,1010101001010101b ; separate components of two bits/pixel
	test	bh,dl	; even bit
	jz	ts0a
	or	al,2	; if set, set on data word
ts0a:
	test	bl,dl	; odd bit
	jz	no0
	or	al,1
;	call	set0

no0:	ret

	comment #
; hopefully this can be left out, it all depends on the LQ1500
; where's my Z80 now
; reverse this table if your bit plots use bit 0 for the top wire
	IF	BIT7
set15:	or	ah,80h	; top wire - bit 7
	ret
set14:	or	ah,40h	; bit 6
	ret
set13:	or	ah,20h	; bit 5
	ret
set12:	or	ah,10h	; bit 4
	ret
set11:	or	ah,08h	; bit 3
	ret
set10:	or	ah,04h	; bit 2
	ret
set9:	or	ah,02h	; bit 1
	ret
set8:	or	ah,01h	; bit 0
	ret
set7:	or	al,80h	; top wire - bit 7
	ret
set6:	or	al,40h	; bit 6
	ret
set5:	or	al,20h	; bit 5
	ret
set4:	or	al,10h	; bit 4
	ret
set3:	or	al,08h	; bit 3
	ret
set2:	or	al,04h	; bit 2
	ret
set1:	or	al,02h	; bit 1
	ret
set0:	or	al,01h	; bit 0
	ret
	ENDIF
	IF	BIT0
set7:	or	ah,01h	; top wire - bit 0
	ret
set6:	or	ah,02h	; bit 1
	ret
set5:	or	ah,04h	; bit 2
	ret
set4:	or	ah,08h	; bit 3
	ret
set3:	or	ah,10h	; bit 4
	ret
set2:	or	ah,20h	; bit 5
	ret
set1:	or	ah,40h	; bit 6
	ret
set0:	or	ah,80h	; bit 7
	ret
	ENDIF

	#

tst4	endp

; 640 mode is single bits, no color, so result is in AL.
;
tst8	proc	near	;  This routine builds ONE bit plot byte
	mov	ax,80	;  by testing a dot with the mask sent
	sub	ax,cx	;  from M6LOOP.  Used by 640 mode
	mov	si,ax	;  First it does the ODD row then the EVEN
	mov	ah,0	;  since alternate lines are offset 2000h
	mov	al,[si] ;  from each other in memory.
	and	al,dl	;  DL has the mask
	cmp	al,0	;  SI the location
	jz	to7	;  AL the memory byte
	or	ah,80h	;  AH is the byte being built
to7:	add	si,80	; +80 gets us from say 0,0 to 2,0
	mov	al,[si] ; get the memory byte ( 4 dots )
	and	al,dl	; get rid of dots we aren't testing now
	cmp	al,0	; see if its COLOR 0
	jz	to5	; if yes, go on
	or	ah,20h
;	call	set5	; otherwise set that bit
to5:	add	si,80	; continue 7 5 3 1
	mov	al,[si]
	and	al,dl
	cmp	al,0
	jz	to3
	or	ah,8
;	call	set3
to3:	add	si,80
	mov	al,[si]
	and	al,dl
	cmp	al,0
	jz	to1
	or	ah,2
;	call	set1
to1:	push	ax
	mov	ax,80
	sub	ax,cx	; CX counts our screen position
	add	ax,2000h ; add 2000h for the EVEN rows
	mov	si,ax	; with seg set to B800h we can use SI like an
	pop	ax	; array pointer ( AH has our byte so don't lose )
	mov	al,[si] ; and continue with the same idea for 6 4 2 0
	and	al,dl
	cmp	al,0
	jz	to6
	or	ah,40h
;	call	set6
to6:	add	si,80
	mov	al,[si]
	and	al,dl
	cmp	al,0
	jz	to4
	or	ah,10h
;	call	set4
to4:	add	si,80
	mov	al,[si]
	and	al,dl
	cmp	al,0
	jz	to2
	or	ah,4
;	call	set2
to2:	add	si,80
	mov	al,[si]
	and	al,dl
	cmp	al,0
	jz	to0
	or	ah,1
;	call	set0
to0:	ret

tst8	endp

; This routine pre-scans a line to see if in fact there are any bit
; plots to send. The main routine will keep sending bytes here
; If a whole line of 0's are sent we avoid going through the
; set-up for bit-plot (i.e. slower movement) graphics when a CR/LF
; would take care of everything.
; If there IS something to send, PTFLAG is set, the current line
; position is set to 0, bit-plot is init., and bits are really sent to printer.
send	proc	near
;	push	ax	; save the character
;	push	ds	; DS saved cause it points to lines
;	pop	ax	; points to DS
;	mov	cs:dstor,ax	; save
	cmp	cs:ptflag,TRUE	; check for printing
	jne	nosend	; if PTFLAG isn't TRUE we are still scanning
;	pop	ax	; else get the char. in AL and print it
	call	send2	; this is the real out to printer routine
	ret
;	jmp	short noset ; restore DS and return
nosend:
;	pop	ax	; This is the SCAN routine
	or	al,al	; get the char. > test for 0 > if so reset and go back
	jz	noset
	mov	al,TRUE ; if <> 0
	mov	cs:ptflag,al ; set PTFLAG to go
	mov	sp,di	;DISCARD RETURN
	cmp	cs:oneor2,1 ; check which (small or LARGE)
	jnz	two	; indent 6 or 13 depending on which routine
	cmp	cs:mode640,TRUE
	jz	nos10
	call	indent	; indent also sets up bit-plot mode
;	call	noset	; NOSET will restore DS to right pos.
	jmp	main	; and do the line for real.
nos10:
	call	indent
;	call	noset
	jmp	m6ain
two:	call	indent2 ; init. for LARGE
	mov	si,cs:wheresi	; SI set back to start of line
;	call	noset	; get right DS
	jmp	main2a	; back to beginning
noset:
;	push	ax	; routine to restore DS
;	mov	ax,cs:dstor
;	mov	ds,ax
;	pop	ax
	ret
send	endp

send3	proc	near
; takes word length data and sends to printer
;
;  word reads left to right and has actual color values of eight
;  vertical pixels
;
;  these will be sent to the printer as three sets of four bytes each,
;  each set of four bytes controlling the 24 pins on the print head.
;
;  pixel box is 3x3.  colors represented:
;
;  color 0:  color 1:  color 2:  color 3:
;   o o o     o o o	o x o	  x o x
;   o o o     o x o	o x o	  o x o
;   o o o     o o o	o x o	  x o x
;    00        01	 10	   11
;
	push	bx
	push	cx
	push	dx
	mov	dx,ax
	mov	bx,ax
	mov	cx,4

send_loop1:			; first pattern

	xor	al,al		; first column
	mov	ah,dh
	and	ah,11110000b	; just top two pixels
	or	ah,ah		; check for zero
	jz	send_one
	test	ah,10000000b	; twos place
	jz	s320
;	or	al,00101000b	; 0-5 significant
s310:
	test	ah,01000000b	; ones place
	jz	s320
	or	al,00101000b
s320:
	test	ah,00100000b	; twos
	jz	send_one
;	or	al,00000101b
s330:
	test	ah,00010000b
	jz	send_one
	or	al,000101b
send_one:
	call	send
	shl	dx,1
	shl	dx,1
	shl	dx,1
	shl	dx,1
	loop	send_loop1

	mov	dx,bx		; restore char for next pattern
	mov	cx,4
send_loop2:
	xor	al,al		; first column
	mov	ah,dh
	and	ah,11110000b	; just top two pixels
	or	ah,ah		; check for zero
	jz	send_two
	test	ah,01000000b	; ones place
	jz	s340
	or	al,00010000b	; 0-5 significant
s340:
	test	ah,10000000b
	jz	s350
	or	al,00101000b	; only other
s350:
	test	ah,00010000b
	jz	s360
	or	al,00000010b
s360:
	test	ah,00100000b
	jz	send_two
	or	al,00000101b
send_two:
	call	send
	shl	dx,1
	shl	dx,1
	shl	dx,1
	shl	dx,1
	loop	send_loop2

	mov	dx,bx
	mov	cx,4

send_loop3:		; first pattern

	xor	al,al	; first column
	mov	ah,dh
	and	ah,11110000b	; just top two pixels
	or	ah,ah	; check for zero
	jz	send_three
	test	ah,10000000b	; twos place
	jz	s380
;	or	al,00101000b	; 0-5 significant
s370:
	test	ah,01000000b	; ones place
	jz	s380
	or	al,00101000b
s380:
	test	ah,00100000b
	jz	send_three
;	or	al,00000101b
s390:
	test	ah,00010000b
	jz	send_three
	or	al,00000101b
send_three:
	call	send
	shl	dx,1
	shl	dx,1
	shl	dx,1
	shl	dx,1
	loop	send_loop3

	pop	dx
	pop	cx
	pop	bx
	ret

send3	endp

sendtwo proc	near
; expands 640x200 mode byte in small mode
;  bit is sent twice for 1280  3.56 x 3.33  7.11 x 6.66
;
;	byte is in AL.
;
;	on =  x o   off = o o
;	      o x	  o o
;	      x o	  o o

	push	bx		; save some regs
	push	cx
	push	dx

	mov	dx,ax		; copy data byte in al to dl,bl
	mov	bx,ax

	mov	cx,4		; do it with a loop

stwo1:
	xor	al,al		; start out blank
	test	dl,10000000b	; check top bit
	jz	stwo10		; not set, skip to next
	mov	al,00101000b	; if set reflect in data
stwo10:
	test	dl,01000000b	; check next
	jz	stwo20		; do again.
	or	al,00000101b	; each byte is two verticle screen pixels
stwo20:
	call	send		; out to routine which prints or doesn't
	shl	dl,1		; depending on line.
	shl	dl,1		; now move data left

	loop	stwo1		; and do it four times.

	mov	dx,bx		; get back copy
	mov	cx,4		; and send again
stwo2:
	xor	al,al
	test	dl,10000000b
	jz	stwo30
	mov	al,00010000b
stwo30:
	test	dl,01000000b
	jz	stwo40
	or	al,00000010b
stwo40:
	call	send
	shl	dl,1
	shl	dl,1

	loop	stwo2

	pop	dx
	pop	cx
	pop	bx

	ret

sendtwo endp

send_big_color	proc	near
; take four pixel byte in al and expand to 24 x 6 to printer

	push	bx
	push	cx
	push	dx

	mov	dx,ax		; copy data byte
	mov	cs:data_byte,al
	xor	bx,bx
	mov	cx,6		; basically send for six vertical dot firings

secloop1:
	push	cx		; two loops, save first counter

	mov	dl,cs:data_byte ; get original data
	xor	dh,dh		; blank top half
	mov	cx,4		; set up inner loop
secloop2:

	xor	al,al		; clear printer byte
	test	dl,11000000b	; see if its zero
	jz	sec25

	shl	dx,1		; move bits in question into lower dh
	shl	dx,1
	and	dh,3		; discard others    11 binary

	cmp	dh,1		; is it a one?
	jnz	sec10		; no, try another
	mov	al,cs:bigc1[bx] ; else use pattern 1
	jmp	short sec30	; and go print

sec10:
	cmp	dh,2		; is it a two?
	jnz	sec20		; no, then must be 3
	mov	al,cs:bigc2[bx] ; else use pattern 2
	jmp	short sec30	; off to print.

sec20:
	mov	al,cs:bigc3[bx] ; determined to be 3
	jmp	short sec30
sec25:
	shl	dx,1		; keep track of bits for zero case
	shl	dx,1

sec30:
	call	send		; out to send routine

	loop	secloop2	; do for each pixel

	pop	cx		; get back other counter
	inc	bx

	loop	secloop1	; do six times

	pop	dx		; and we are done.
	pop	cx
	pop	bx
	ret

send_big_color	endp


send_big_bw	proc	near
; take four pixel byte in al and expand to 24 x 6 to printer

	push	bx
	push	cx
	push	dx

	mov	dx,ax		; copy data byte
	mov	cs:data_byte,al
	mov	bl,010000b
	mov	bh,000010b	; pattern
	mov	cx,6		; basically send for six vertical dot firings

sebloop1:
	push	cx		; two loops, save first counter
	xor	bx,11100111000b ; reverse pattern

	mov	dl,cs:data_byte ; bl won't be changed
	mov	cx,4		; set up inner loop
sebloop2:

	xor	al,al		; clear printer byte
	test	dl,10000000b	; check top
	jz	seb10

	mov	al,bl		; else use pattern 1
seb10:

	test	dl,01000000b
	jz	seb20
	or	al,bh

seb20:
	shl	dl,1		; set up for next
	shl	dl,1

seb30:
	call	send		; out to send routine

	loop	sebloop2	; do for each pixel

	pop	cx		; get back other counter

	loop	sebloop1	; do six times

	pop	dx		; and we are done.
	pop	cx
	pop	bx
	ret

send_big_bw	endp


lfcr	proc	near	; send a regular CR/LF combo
	print	13
	print	10
	mov	ax,0
	mov	cs:ptflag,al ; reset PTFLAG for next line
;	mov	ax,cs:dstor  ; restore DS
;	mov	ds,ax
	ret		; onward
lfcr	endp

break?	proc	near	; Test for early exit
	push	ax	; don't lose any regs. here
	push	dx
	mov	ah,01h	; call direct keyboard io (constat) by BIOS
	int	16h
	jnz	goback? ; if zero flag clear we have a character
bcont:	pop	dx	; no char. return
	pop	ax
	ret
goback?:
	mov	ah,0
	int	16h
	cmp	al,1bh	; ESC
	jz	back	; so go back, else return
	jmp	short bcont	; no ESC exit
back:	pop	dx	; ESC exit This doesn't check for Ctrl-Break
	pop	ax	; so if it is hit we save it for the caller to handle
	pop	ax	;DISCARD RETURN
	cmp	cs:tmode_flag,TRUE
	jne	GB10
	call	reset_cursor
GB10:
	jmp	done	; and go back to orig. caller
break?	endp

; text_mode

; routines for text mode dump
; 7/4/85
; right shift will print with control chars and extended replaced by dots '.'
; left shift will print graphics chars.


read_line	proc	near
; read line from screen into buffer, calculate length and put in first pos.

	push	bp
	mov	di,80h	; use default dta from original load
	inc	di

	mov	dh,loop_count
	xor	dl,dl
	mov	bh,video_page
	mov	bl,crt_cols
	cld		; set auto-increment

rloop:
	mov	ah,2	; set cursor
	int	10h

	mov	ah,8	; read att/char
	int	10h

	or	al,al	; replace 0 with space
	jz	rtl20
	cmp	al,0ffh ; and 255
	je	rtl20
rtl10:
	stosb

	inc	dl
	cmp	dl,bl
	jne	rloop

	jmp	rtl_scan

rtl20:
	mov	al,' '  ; replace space type chars with spaces
	jmp	rtl10

rtl_scan:
	dec	di	; set to last char
	mov	si,80h	; length store
	mov	cl,bl	; loop for length
	xor	ch,ch
	mov	al,' '  ; search for spaces
	std		; set auto_decrement

	repe	scasb	; search backwards until 0 or non-space

	je	rtl30

	inc	cl	; adjust for count of characters, else cl is zero
rtl30:
	mov	[si],cl
	cld

rtlret:
	pop	bp
	ret


read_line	endp


do_extended	proc	near

	cmp	oneor2,NO_EXT	; do we want extended chars printed?
	jne	do_ext_chars
do_ext_dot:
	mov	al,'.'
do_ext_print:
	call	send2
	ret

do_ext_chars:
	mov	bx,offset extable
	xlat
	cmp	al,160		; 160 or above is printer character
	jae	do_ext_print
	or	al,al		; a zero means char not defined
	jz	do_ext_dot

	push	cx		; otherwise there is a character
	push	si
	xor	ah,ah		; xlat has position in offset table
	shl	ax,1		; two bytes per offset
	mov	si,offset extoffset
	add	si,ax		; add to start
	mov	ax,[si] 	; get offset to data table
	mov	si,ax		; si now points to start of data
	cld

	lodsb			; first char in data is length
	mov	cl,al
	xor	ch,ch		; clear high
	or	cx,cx		; if zero here we're in trouble
	jnz	do_ext100
	pop	cx
	pop	si
	jmp	do_ext_dot	; so just print a dot

do_ext100:
	cmp	cl,72		; this is an image print
	jne	do_ext_loop	; else its a strategy print
	push	si		; for image we need setup
	mov	si,offset dot18 ; for 18 dot type lines
	call	send_string
	pop	si

do_ext_loop:
	lodsb
	call	send2
	loop	do_ext_loop

	lodsb			; this char has possible continuation
				; like box chars with extenders
	; 0 = no ext
	; 1 = single line ext
	; 2 = double line
	; 3 = fill box
	; 4 = fill left side
	; 5 = fill right side
	; 6 = fill 1/4 of dots
	; 7 = fill 1/2	  "
	; 8 = fill 3/4	  "

	or	al,al		; zero means done
	jnz	de_more

deret:
	pop	si
	pop	cx
	ret

de_more:
	push	ax
	cmp	deline,TRUE
	je	de_200

; fill line to store extenders for box drawing characters with spaces
; this is set only when there is one to do.

	xor	di,di
	mov	al,[di+80h]	; get previously set length value
	cld
	stosb			; copy to this buffer.
	mov	al,' '
	mov	cx,80
	rep	stosb
	mov	deline,TRUE

de_200:
	pop	ax		; get back which method
	pop	di		; this has character position +1
	push	di
	sub	di,81h		; main buffer at 80h, ext. at 0h
	cld			; put character at same relative position.
	add	al,' '          ; these patterns are stored in order starting
	stosb			; after where a space would be stored.

	jmp	deret

do_extended	endp

do_control	proc	near

	mov	al,'.'
	call	send2
	ret

do_control	endp


print_line	proc	near
; use info in buffer to print

	mov	si,80h
	lodsb		; get length
	or	al,al
	jnz	pl10
plret:
	ret
pl10:
	mov	cl,al
	xor	ch,ch
	cld
ploop:
	lodsb
	cmp	al,127
	ja	pl_extended
	cmp	al,32
	jb	pl_extended

	call	send2
plnext:
	loop	ploop

	jmp	plret

pl_extended:
	call	do_extended
	jmp	plnext
; pl_control:
;	call	do_control
;	jmp	plnext

print_line	endp

make_ext_line	proc	near
; make the extended line characters

	mov	si,offset half_crlf
	call	send_string	; move down half line
	xor	si,si		; buffer is at zero
	cld
	lodsb			; get length
	or	al,al		; abort for no length
	jz	mel_ret
	mov	cl,al
	xor	ch,ch
meloop:
	lodsb
	cmp	al,' '
	jne	mel100
	call	send2
mel10:
	loop	meloop


mel_ret:
	mov	si,offset half_crlf
	call	send_string
	mov	deline,FALSE	; reset flag
	ret

mel100:
	call	do_extended
	jmp	mel10


make_ext_line	endp


do_text_mode	proc	near
; comes in just after test for mode, but before shift key check

	mov	cs:crt_cols,ah
	mov	cs:video_page,bh
	mov	cs:tmode_flag,TRUE
	mov	cs:deline,FALSE
	mov	ax,1130h	; get EGA info
	mov	bh,0		; get int 1f pointer (not used here)
	int	10h
	inc	dx
	mov	MAX_LINES,dl

	mov	ax,40h	; Get the keyboard shift flag
	mov	ds,ax	; segment
	mov	si,17h	; and address
	mov	ax,[si] ; pick it up
	and	ax,3	; get rid of other stuff
	or	ax,ax	; Mod. to create default small
	jnz	tr1	; for case where routine is called as a subroutine.
	mov	ax,cs:default_routine
tr1:	mov	cs:oneor2,al	; store for later

	mov	ax,cs
	mov	ds,ax	; set data to here
	mov	es,ax

	mov	ah,3
	int	10h	; read cursor pos.
	mov	cursor_pos,dx ; save

	mov	byte ptr loop_count,0
tmode_loop:

	call	read_line ; read in entire line
	call	print_line ; send to printer
	cmp	oneor2,NO_EXT
	jne	dtm100

dtm10:
	call	lfcr
dtm20:
	call	break?

	mov	al,loop_count
	inc	al
	mov	loop_count,al
	cmp	al,MAX_LINES
	jnz	tmode_loop

	call	reset_cursor
	jmp	done
dtm100:
	cmp	deline,TRUE ; if we are doing extended, are there any?
	jne	dtm10
	call	make_ext_line
	jmp	dtm20

reset_cursor:
	mov	dx,cursor_pos	; restore cursor
	mov	bh,video_page	; set as CALL so it can be used by
	mov	ah,2		; the abort routines.
	int	10h

	mov	tmode_flag,FALSE

	ret

do_text_mode	endp


last	dw	0	; this marks end of resident code.
			; DON'T put anything below here you expect to use
			; after initialization.

buffer	db	'        TOSHIBA(tm) P1340, P1351, P351',13,10
	db	'            Screen Printer  v 1.1',13,10,10
	db	' ==>            Graphics Mode:',13,10
	db	'      Right Shift PrtSc = small graphics',13,10
	db	'      Left Shift PrtSc = LARGE GRAPHICS',13,10
	db	' ==>              Text Mode:',13,10
	db	'    Right Shift PrtSc = quick screen print',13,10
	db	'Left Shift PrtSc = extended characters printed',13,10,10
	db	'Hitting ESCape will stop print at end of line.',13,10,'$'
werehere db	' ** TOSHIBA.COM is already resident **',13,10,10
	db	' There is no need to reinstall.',13,10,'$'
initr	proc	far
initial:
	mov	ax,0	; get addr of
	mov	ds,ax	; print screen routine
	mov	si,14h	; in rom
	mov	ax,[si] ; from interrupt table in ram
	inc	si
	inc	si
	mov	dx,[si]

	mov	word ptr cs:old_print_routine,ax
	mov	word ptr cs:old_print_routine+2,dx
	mov	cx,offset last-offset start
	mov	di,ax
	mov	si,offset start
	cmp	dx,0efffh	; if routine points to ROM, ours is not it.
	ja	initok
	cmp	si,di
	jne	initok		; if start location not same, it can't be ours.

	; otherwise check to see if this routine is

	mov	es,dx		; already in memory, and don't reinstall if so.
	mov	ax,cs
	mov	ds,ax
	repe	cmpsb


	or	cx,cx		; cx=0 means there is a copy of this at the
	jnz	initok		; other address.
	mov	dx,offset werehere
	mov	ah,9		; so we print a message and
	int	21h		; abort.
	int	20h
initok:

;	 mov	 ds,ax
;	 mov	 al,0f1h ; move it to
;	 mov	 ah,25h
;	 int	 21h	 ; int f1h described in tech. manual as unused vector
	mov	ax,cs	; reset int 5
	mov	ds,ax	; to point to
	mov	ax,offset start ; this routine
	mov	dx,ax
	mov	al,5
	mov	ah,25h	; dos routine to reset int. vector
	int	21h
	mov	ax,offset buffer
	mov	dx,ax
	mov	ah,9
	int	21h	; print greeting
	mov	ax,3000h  ; get dos version
	int	21h
	or	al,al
	jz	dos1
	mov	ax,offset last
	mov	cx,16
	xor	dx,dx
	div	cx
	inc	ax	; make number of paragraphs
	mov	dx,ax
	mov	al,0	; exit code
	mov	ah,31h	; terminate process, keep resident
	int	21h

dos1:
	mov	dx,offset last	; last address here
	inc	dx
	int	27h	; terminate but stay resident
initr	endp
cseg	ends
	end	init

```
{% endraw %}

## OKIGRAF.ASM

{% raw %}
```
	PAGE  60,132
	TITLE	GRAFTRAX SCREEN PRINTER, V 3.4
; OKIGRAF.COM  10/29/84
; ****!****!****!****!****!****!****!****!****!****!
; Special version for Okidata ML93,92 printers,    !
; and others with 7-bit graphics.		   !
; ****!****!****!****!****!****!****!****!****!****!
; Interrupt replacement for print screen function on ibmpc(tm)
;	Please send problem reports and suggestions to:
;		Marty Smith
;		310 Cinnamon Oak Lane
;		Houston, Texas	77079
;		Compuserve 72155,1214
;		(713) 661-1241 office, (713) 464-6737, home.
;
;    Create GRAF.COM with MASM*, LINK* and EXE2BIN* as follows:
;
;	masm graf,graf,graf;
;
;	link graf;    (ignor the error message about no stack segment,
;			  that's taken care of in the next step.)
;	exe2bin graf.exe graf.com
;
;  *  MASM is the IBM(tm) MacroAssembler(tm),
;     LINK and EXE2BIN are PC-DOS(tm) utilities.
;
;  This program originally designed for Epson-MX(tm) series printers
;  with Graftrax80(tm) and Graftrax+(tm) bit-plot graphic capabilites.
;  ======> Now modified with conditional compilation and macros for
;  ======> c.itoh(tm) model 8510a and other printers.
;
;	CHANGE HISTORY:
;	9/18/82 - Buffer in routine for a line of bit-plot bytes to allow for
;  checking for blank lines replaced by pre-scan routine, saving space.
;	1/24/83 - Modifications for conditional assembly with other printers
;  and C.ITOH 8510a.
;	1/24/83 - Improved error checking for out-of-paper and I/O errors
;  involving printer.
;	1/24/83 - Bug in error check corrected, occuring when routine does
;  error exit and is then called again, resulting in bit-plot data sent in
;  regular mode.
;	3/12/83 - Allow calling as a subroutine. i.e. no shift key depressed.
;  Defaults to small print mode. Can be set to LARGE.
;	2/4/84	- Allow correct printing of 640x200 mode.
;	3/18/84 - Use int 31h for dos 2.+ terminate process.
;	3/24/84 - Use BIOS for keyboard scan, in case screen is printed
;		from DOS.
;	4/21/84 - -OTHER- section complete for changes from 640 mode.
;	9/22/84 - Add code to set lines back in 6/inch order, so CR's
;		can advance to TOF.
;	9/22/84 - Jump to other print screen routine instead of reassigning
;		it to int f1h. Only luck has kept this vector from being used
;		by someone else.
;      10/29/84 - Program goes to, god forgive me, two separate versions
;		to cope with printers like the Oki and IDS with their 7-bit
;		graphics and alternate calling conventions.
;      11/07/84 - Routine added to prevent reinstalling routine if already
;		resident.
;
;	Features:
;  Accepts ESC key exit, prescans to test for blank line
;  left shift prtsc = small graphics, right shift prtsc = big
;  Runs as a .COM type program under dos
;     resident until power down or reset.
;   1 = screen sent horiz. 320 bits in 480 mode
;   2 = screen sent vert. 400 bits double printed in 480 mode
; **************  1 mode **********************
;	DL = masking character
;	DH = count of 25 (physical lines)
;	CX = counter for each line (80)
;	DS = used to index screen at 'b8000'
;   These regs must be preserved during routine
;	  (increment each line by adding '14' hex to ds for para
;		boundary of 320 bytes '140')
; **************  2 mode *********************
;	DH = count of 40 (physical lines)
;	CX = counter for each line (100)
;	SI = index to screen via ds
;   These regs must be preserved during routine
;	all output to printer is done from routine -send2-, which uses
;	bios routine int 17h, and provides safe error exit.
;
;  GRAF.COM is designed with the idea that the user's main program is the
;  primary function and GRAF.COM should not cause problems of its own.
;
; =======================================================
; =		USER MODIFICATION SECTION.		=
; =	If your printer can treat a byte of data to	=
; =	control the wires on the dot-matrix head you	=
; =	can probably get this working with your printer =
; =	unless it is an IDS type, which treats bit plot =
; =	a lot differently than the EPSON.		=
; =	If you have Epson Graftrax or a C.Itoh 8510a,	=
; =	just set the two equates indicated to -true-	=
; =	and compile. Otherwise get out your manual	=
; =	and put the code indicated in one of the printer=
; =	sections.					=
; =	**>	The title message starts at label	=
; =	**>	-buffer-. If you set for another	=
; =	**>	printer you should change the		=
; =	**>	greeting to indicate which printer	=
; =	===> ONLY SET *ONE* CONDITION TO -TRUE- or you	=
; =	will have a real mess!		marty smith	=
; =======================================================

TRUE	equ	1	; DON'T CHANGE THESE!
FALSE	equ	0

escape	equ	27	; for printer
CR	equ	13
LF	equ	10

; ===============>  A L L  U S E R S  <===================
; ====> SET ONE AND ONLY ONE OF THE FOLLOWING THREE <=====

EPSON	EQU	FALSE
OKI	EQU	TRUE

; Each bit of a byte is mapped to the wire head of the printer.
; If the Epson MX is sent 80h (bit 7), the TOP wire makes a dot.
; If the C.ITOH is sent   01h (bit 0), the TOP wire makes a dot.
; ===============>  A L L  U S E R S  <===================
; =====> SET ONE AND ONLY ONE OF THE FOLLOWING TWO <======

BIT7	EQU	FALSE
BIT0	EQU	TRUE

	; BIT7 is TRUE for EPSON
	; BIT0 is TRUE for OKI

print	macro	char
	mov	al,char
	call	SEND2
	endm

; **NOTE** This section applies to the 8bit versions, NOT implemented for
; 7bit (Oki).  Use this as a reference to modify for other 7bit, like IDS
; *****************************
; *  START of -OTHER- SECTION *
; *****************************
;
; ALL routines must set either BIT7 or BIT0.
;   above. If your printer can't see bit 7 or 0 as the top wire, you
;   will probably have quite a time getting this routine to work.
;
; OLINE Resets line spacing so that the print head
; will make a continuous line DOWN the page.
; This is the sequence to set the EPSON for this. (ESC A 8)
; SEND2 sends the byte in AL to the printer for ALL routines.
; It uses the INT 17h routine in order to avoid DOS's extra line
; feeds and CR's. Set for LPT1: Change SEND2 to redirect. DX=0=LPT1,1=LPT2
OLINE	MACRO
	print	escape
	print	65
	print	 8
	ENDM

; ORLINE restores the printer to normal line spacing
; Example is for EPSON (ESC 2)
ORLINE	MACRO
	print	escape
	print	'2'
	ENDM

; ORESET reinitializes the printer to default settings, spacings,
; current line becomes Top of Form.
; Is used by LARGE print to allow a series to be printed
; on separate pages. It can be modified by getting rid of label
; TOF: up to but not including	 JMP DONE, which is the exit from
; the whole routine. Example is for EPSON. (ESC @)
ORESET	MACRO
	print	escape
	print	'@'
	ENDM

; BP1 initiates bit-plot graphics. It tells the printer
; that the next xxx bytes are to be considered bit-plots and not
; regular characters. The small print routine sends 320 bit plot bytes
; to the printer. On the EPSON this is:
;	  ESC K 64 1   hex 1b 4b 40 1  > 1*256+64=320
; --> the first part indents the page with ordinary spaces
; --> to find spaces take TOTAL_DOTS_PER_LINE - 320. Then / BITS_PER_CHARACTER
; --> Divide this by two and you have the spaces to indent
; BP1 also needs to be able to handle the case of 640 mode, which will
; double the output of dots.
;    The example below is the code to do this on the EPSON/IBM.
BP1	MACRO
	mov	cx,13	; PICTURE ( we've got 320 dots and 480 to work with
inlop:	print	20H	; 480-320=160 / 6 dots per char. = 26.67 extra
	loop	inlop
; ESC K 64 1  = 256+64=320 bit plot type bytes on the way
	cmp	cs:mode640,TRUE
	jz	ind10
	print	escape ; SEQUENCE TO SET UP 320
		   ; BIT PLOTS IN 480 MODE
	print	75 ; OF MX-80
		   ; This is the set-up for the small print
	print	64
	print	 1
	jmp short indend

ind10:
	print	escape
	print	'L'  ; 640 dots in 960 mode
	print	128
	print	2

indend:
	ENDM

; BP2.
; The LARGE print sends 400 bit plot bytes to the printer. On the EPSON:
; ESC K 144 1  hex 1b 4b 90 1  > 1*256+144=400
; FIND YOUR INDENT FOR 400 BITS
BP2	MACRO
	mov	cx,6	; EPSON ( we've got 400 dots and 480 to work with
inlop2: print	20H	; 480-400=80 / 6 dots per char. = 13.33 extra
			; so indent the picture 6 spaces to center
	loop	inlop2
	print	escape
	print	75
	print	144
	print	1
	ENDM

; ****************************
; *   END OF -OTHER- SECTION *
; ****************************

;  ***************> START OF ACTUAL CODE <*****************

cseg	segment 'code'
	assume cs:cseg
	org	100h		; set up for .com conversion
init	proc
	jmp	initial 	; so we have to set up first
init	endp
gowait	dw	0		; variables during routine
wheresi dw	0
ptflag	db	0
oneor2	db	0
dstor	dw	0
mode640 dw	0
; **** the 1 below is the POKE to use in CALLing from another program. ****
default_routine dw	1	;  1 for small, 2 for LARGE.

old_print_routine  dd	0	; address of former print screen routine.

do_old	proc	near
; jump to old routine
	pop	bp
	pop	si
	pop	di
	pop	dx
	pop	cx
	pop	bx
	pop	ax
	pop	ds
	jmp	cs:old_print_routine

do_old	endp

; --->	ACTUAL INTERRUPT ROUTINE STARTS HERE  <---
start	proc	far	; Start of main routine--Shift Prt.Sc hit.
	assume cs:cseg
	sti		; This follows ROM routine real close
	push	ds	; runs with interrupts enabled.
	push	ax	;SAVE REGS
	push	bx
	push	cx
	push	dx
	push	di
	push	si
	push	bp
	mov	bp,sp	; Save in case of error for reset
	mov	ax,50h	; Check here first to see if
	mov	ds,ax	; routine is already in progress
	mov	si,0	; otherwise it will be a mess.
	mov	al,01h
	cmp	[si],al
	jnz	nxts	; if not we're go for routine
	jmp	exit	; otherwise go back home.
nxts:	mov	[si],al ; if we're go don't let us start again until done.
	mov	ah,15	; Get the current video state.
	int	10h	; from the ROM routine,
	mov	cs:mode640,FALSE
	cmp	al,4	; AL=4-6 are all graphics so we're OK
	jz	graphic
	cmp	al,5
	jz	graphic
	cmp	al,6
	jnz	nxts10
	mov	cs:mode640,TRUE ; special case
	jmp	short graphic
nxts10:
	mov	al,0	; else reset and go to ROM routine.
	mov	[si],al
	jmp	do_old	; this is where we stored the ROM routine entry.
			; used to use  int f1h.
graphic:
	mov	ax,40h	; Get the keyboard shift flag
	mov	ds,ax	; segment
	mov	si,17h	; and address
	mov	ax,[si] ; pick it up
	and	ax,3	; get rid of other stuff
	or	ax,ax	; Mod. to create default small
	jnz	gr1	; for case where routine is called as a subroutine.
	mov	ax,cs:default_routine
gr1:	mov	cs:oneor2,al	; store for later
	push	ax	; also here
	xor	al,al	; make sure this starts out as NO print.
	mov	cs:ptflag,al
	xor	dl,dl	; These bits indicate whether R or L Shift is down
	mov	dh,29	; 29 lines of graphic dots at 7 dots per line
	mov	ax,0b800h ; stored in DX, last line has 4 extra dots
	mov	ds,ax	;SET UP FOR SCREEN PEEK
	xor	bx,bx	; segment indexing dropped in 7bit version, bx instead
; Printer setup section to change line spacing to 7/72" for continuous dots
; ** 7 bit **

	IF	EPSON
	print	escape
	print	'3'     ; A
	print	21	; 7
	ENDIF

	IF	OKI
	print	30	; set to 10 cpi
	print	3	; set to graphics mode
	ENDIF

	pop	ax	; get back which routine
	cmp	al,2	; Left Shift Prt Sc means LARGE graphic print
	jnz	gr2
	jmp	main2	; so hop over there if so.
gr2:
	cmp	cs:mode640,TRUE
	jnz	MAIN

	IF	OKI
	print	3	; for 640x200, get out of graphics,
	print	2
	print	28	; set up for 12 cpi
	print	3	; back to graphics
	ENDIF

	jmp	m640

; START OF small GRAPHICS PRINT ROUTINE.
; This routine scans across the screen from left to right,
; building an EPSON bit plot byte out of IBM screen dots.
; EPSON wire head		IBM screen color dots
; TOP	 o  128  80h bit 7	| 00 | 01 | 10 | 11 | = 4 dots, one byte
;	 o   64  40h  "  6
; one	 o   32  20h  "  5      ibm dots go one raster line then the next
; bit	 o   16  10h  "  4      EVEN line, ie 0, 2, 4 etc.
; plot	 o    8  08h  "  3
; byte	 o    4  04h  "  2      then you go back and do 1, 3, 5 etc.
;	 o    2  02h  "  1
; BOTTOM o    1  01h  "  0      At loc. 0000h are 4 dots, 0,0|0,1|0,2|0,3
;				At loc. 2000h are 4 dots, 1,0|1,1|1,2|1,3
;
main:	mov	cx,80	; 80 x 4 = 320 dots.
mloop:	mov	dl,0c0h ; 11000000b
	call	tst4	; see if this comes back <> 0
	mov	al,ah	; we are testing bit patterns for one screen byte
	call	send	; don't send to printer unless something to send
	mov	dl,30h	; 00110000b
	call	tst4	; each byte is 4 dots
	mov	al,ah	; so we test for each dot in a byte
	call	send	; send sets PTFLAG if there is a dot on the line
	mov	dl,0ch	; 00001100b
	call	tst4	; then resets to start of line and starts printing
	mov	al,ah	; AL is the bit plot byte being built
	call	send
	mov	dl,03h	; 00000011b
	call	tst4	; TST4 scans down 8 screen dot lines each time called
	mov	al,ah
	call	send
	loop	mloop	; 80 bytes make 320 dots
	IF	EPSON
	call	lfcr	; this is a good old regular line feed/carriage return
	ENDIF
	IF	OKI
	call	lfcroki
	ENDIF
	call	break?	; someone hit ESC key? so take early exit
	dec	dh	; DL is line counter
	or	dh,dh	; when it goes 0 we're through
	jz	done	; reset everything and do an IRET
	test	dh,1	; otherwise check counter for odd/even
	jz	mloop10 ; and adjust index (bx) accordingly
	sub	bx,7872
	jmp	short mloop20
mloop10:
	add	bx,8432
mloop20:
	jmp	main	; and do this 80 times (80x4=320)
done:	mov	ax,0
; This is the common exit for both routines, Printer is restored.
done1:	push	ax	; save AX cause it has error exit flag
; EPSON command to reset printer to 6 lines/in. = ESC 2 (1b 32)

	IF	EPSON
	print	escape
	print	'3'
	print	12	; add 12/216 to reset line spacing
	print	CR
	print	LF
	print	escape ; RESET PRINTER, RESTORE REGS
	print	'2'
	ENDIF

	IF	OKI
	print	3	; graphics escape code
	print	2	; exit graphics mode
	ENDIF

edone:	mov	ax,50h	; Set end of PrtSc indication
	mov	ds,ax	; OK to come back and do again
	mov	si,0
	pop	ax
	mov	[si],al
exit:	pop	bp
	pop	si	; restore regs and return to caller
	pop	di
	pop	dx
	pop	cx
	pop	bx
	pop	ax
	pop	ds
	iret		; were an interrupt routine so we IRET

; START OF LARGE PRINT ROUTINE
; +-------------+
; | ^ ^ 	|  This time we scan from 199,0 to 0,0
; | ^ ^ 	|  and go across
; | ^ ^ 	|  o  o    x  x    o  x    x  x   These are representations
; | | | 	|  o  o    o  o    x  o    x  x   of one color dot.
; +-------------+    0	     1	     2	     3	   Palettes

main2:	mov	dh,92	; we have 80 colunms x 25 lines here
	mov	dl,0
	mov	cs:wheresi,3ef0h ; si is our index
	mov	si,cs:wheresi
main2a: mov	cx,64h	; 100
mloop2:
	call	m2_calc_send

	mov	cs:gowait,si ; store SI for next EVEN raster line
	sub	si,2000h ; subtract 2000h for the next ODD raster line

	call	m2_calc_send

	mov	si,cs:gowait ; get back the EVEN line
	sub	si,80	; advance UP the screen one line (say 199,0 to 197,0)
	loop	mloop2	; and do this 100 times

	IF	EPSON
	call	lfcr
	ENDIF
	IF	OKI
	call	lfcroki ; finished with one line we send normal line-end
	ENDIF
	call	break?	; check for an ESC if we want to abort
	dec	dh	; DH is our line counter,
	or	dh,dh	; when it goes 0 we're done.
	jz	tof	; so we'll try to reset Top of Form and exit
	inc	dl
	cmp	dl,7
	je	ml_no_inc

	inc	cs:wheresi	; else go to the next byte location
				; except if at last circuit
ml_no_inc:
	and	dl,7		; 0-7 only, 8 byte circuit
	mov	si,cs:wheresi	; store
	jmp	main2a		; and do again
tof:
	mov	cx,19	; tof restores page to 11 inches from where it started
	IF	OKI
	print	3	; exit graphics mode
	print	2
	call	break?	; check for no do.
	print	12	; form feed if ok.
	jmp	short tofl_end
	ENDIF
tofl:
	print	CR	; send a bunch of cr's and lf's
	print	LF
	call	break?	; check for early exit
	loop	tofl	; and so on.
; This restores the EPSON to 6 lines per inch
; ESC @ = Restore all settings to default
	IF	EPSON
	print	escape
	print	64   ; '@'
	ENDIF
tofl_end:
	jmp	done	; clean up and back to caller.
start	endp

m2_calc_send	proc	near
	mov	al,[si] ; idea is to get a byte starting at screen BOTTOM
	mov	ah,[si-1] ; can't use a mov word instruction, since
	or	dl,dl	; bits are read by least,most significant
	jz	m2on	; which would be backwards in this case.
	cmp	dl,7	; This down to m2on basically aligns the screen
	je	m2on	; dots in a register depending on where we are in
	cmp	dl,4	; an 8 step cycle.  With 7 bit graphics and an 8 bit
	ja	m2o50	; byte width, it takes 8 steps for things to repeat.
	shr	ax,1	; This involves lots of shifts and conditionals
	shr	ax,1	; and this routine attemps to do this as efficiently
	cmp	dl,3	; as possible.
	jb	m2on	; ** one screen byte looks like this:
	shr	ax,1	; | 7 6 | 5 4 | 3 2 | 1 0 |  #'s are bits, two make up
	shr	ax,1	;			     a color pixel 00 01 10 11
	jmp	short m2on ; this is sent twice for 620x200, or twice with some
			; twidling to simulate color, and reversing of the
m2o50:			; bits for wire 0 type printers, (Oki)
	shl	ax,1	; This results in an image formed sideways with the
	shl	ax,1	; bottom left corner of the screen in the top left
	mov	al,ah	; corner on a page of paper.

m2on:
	mov	bh,al	; copy pattern for second
	test	dl,1	; check for odd
	jz	m2on10
	shl	al,1	; if so, bump bit7

m2on10:
	call	reverse ; Bits have to be reversed on wire 0 type
	and	al,7fh	; turn off bit7
	cmp	dh,1	; last byte only 2 bits
	jnz	m2on15
	and	al,3	; so erase any extras.

m2on15:
	call	send	; send it since these resemble bit plot bytes
	cmp	cs:mode640,TRUE
	jz	ml10
	mov	al,bh
	call	flipflop ; then reverse(sort of) this byte and send it
	test	dl,1	; check odd
	jz	m2on20
	shl	al,1	;  align if so

m2on20:
	call	reverse ; bit 7 becomes bit 0, etc.
	and	al,7fh
	cmp	dh,1
	jnz	ml10
	and	al,3
ml10:
	call	send	; again.

	ret

m2_calc_send	endp

send2	proc	near	; BIOS routine to print the character in AL
	push	ax
	mov	ah,00h	; 0=print, 1=initialize port, 2=read status to AH
	push	dx
	mov	dx,0	; DX specifies printer 0 (LPT1:)
	int	17h	; BIOS used instead of DOS because DOS sends
	pop	dx	; CR/LF's in the middle of the bit-plots
	test	ah,29h	; check for timeout or errors or out-of-paper
	pop	ax
	jnz	erret
	ret
erret:	mov	ax,00ffh ; Flag for printer foulup
	mov	sp,bp
	push	ax
	jmp	edone	; special abort
send2	endp

; EPSON bit plots operate at 480 or 960 dots across the page
; called by ESC K 'low byte';'high byte'
;  i.e.  300 dots would be 256+44 or 012CH
;  This is sent to the EPSON as --> 1b 4b 2c 01
;		or in decimal	--> 27 75 44 1
indent	proc	near
	push	cx	; 13 spaces in to center
	IF	EPSON
	mov	cx,13	; PICTURE ( we've got 320 dots and 480 to work with
inlop:	print	20h	; 480-320=160 / 6 dots per char. = 26.67 extra
			; so indent the picture 13 spaces to center
	loop	inlop
; ESC K 64 1  = 256+64=320 bit plot type bytes on the way
	cmp	cs:mode640,TRUE
	jz	ind10
	print	escape	; SEQUENCE TO SET UP 320
			; BIT PLOTS IN 480 MODE
	print	75	; OF MX-80
			; This is the set-up for the small print
	print	64
	print	1
	jmp	short indend

ind10:
	print	escape
	print	'L'     ; 640 dots in 960 mode
	print	128
	print	2

indend:
	ENDIF
	IF	OKI
	cmp	cs:mode640,TRUE
	jz	ind10
	mov	cx,80	; PICTURE ( we've got 320 dots and 480 to work with
inlop:	print	0	; 480-320=160
			; 80 graphics spaces to center
	loop	inlop

ind10:			; oki doesn't have the resolution for 640 dots on 8x11
	ENDIF

	pop	cx
	ret

indent	endp

; This is indent for LARGE print
; This time we have 400 bit plots to send (200 lines x 2)
; 480-400=80 / 6 = 13.3 extra

indent2 proc	near
	push	cx

	IF	EPSON
	mov	cx,6	; so indent 6 character type spaces
inlop2: print	20h
	loop	inlop2
; ESC 27 K 144 1 = 256+144=400 bit-plots
	print	escape
	print	75
	print	144
	print	1
	ENDIF


	IF	OKI
	mov	cx,40	; PICTURE ( we've got 400 dots and 480 to work with
inlop2: print	0	; 480-400 = 80 so print 40 graphics spaces to center
	loop	inlop2

; ESC S 0400 = 400 bit plot type bytes on the way
	ENDIF

	pop	cx
	ret

indent2 endp

m640	proc	near
m6ain:	mov	cx,72	; 72 x 8 = 576 dots. OKI will lose last 10%
m6loop: mov	dl,80h	; 10000000b
	call	tst4	; see if this comes back <> 0
	mov	al,ah	; we are testing bit patterns for one screen byte
	call	send	; don't send to printer unless something to send
	mov	dl,40h	; 01000000b
	call	tst4	; each byte is 4 dots
	mov	al,ah	; so we test for each dot in a byte
	call	send	; send sets PTFLAG if there is a dot on the line
	mov	dl,20h	; 00100000b
	call	tst4	; then resets to start of line and starts printing
	mov	al,ah	; AL is the bit plot byte being built
	call	send
	mov	dl,10h	; 00010000b
	call	tst4	; TST4 scans down 8 screen dot lines each time called
	mov	al,ah
	call	send
	mov	dl,08h	; 00001000b
	call	tst4	; see if this comes back <> 0
	mov	al,ah	; we are testing bit patterns for one screen byte
	call	send	; don't send to printer unless something to send
	mov	dl,04h	; 00000100b
	call	tst4	; each byte is 4 dots
	mov	al,ah	; so we test for each dot in a byte
	call	send	; send sets PTFLAG if there is a dot on the line
	mov	dl,02h	; 00000010b
	call	tst4	; then resets to start of line and starts printing
	mov	al,ah	; AL is the bit plot byte being built
	call	send
	mov	dl,01h	; 00000001b
	call	tst4	; TST4 scans down 8 screen dot lines each time called
	mov	al,ah
	call	send
	loop	m6loop	; 80 bytes make 320 dots
	IF	EPSON
	call	lfcr	; this is a good old regular line feed/carriage return
	ENDIF
	IF	OKI
	call	lfcroki
	ENDIF
	call	break?	; see if someone hit ESC key. If so take early exit
	dec	dh	; DL is line counter
	or	dh,dh	; when it goes 0 we're through
	jz	d6one	; reset everything and do an IRET
	test	dh,1	; otherwise check counter for odd/even
	jz	m6oop10 ; and adjust index (bx) accordingly
	sub	bx,7872
	jmp	short m6oop20
m6oop10:
	add	bx,8432
m6oop20:
	jmp	m6ain	; and do this 80 times (80x4=320)
d6one:	mov	ax,0
	jmp	done1

m640	endp

tst4	proc	near	;  This routine builds ONE bit plot byte
	mov	ax,80	;  by testing a dot with the mask sent
	cmp	cs:mode640,TRUE
	jne	tst10
	mov	ax,72
tst10:
	sub	ax,cx	;  from MLOOP.
	mov	si,ax	;  si is added to an index value stored in
	add	si,bx	;  bx, and then moved down the screen line by line.
	xor	ah,ah	;  Alternate lines are offset 2000h in segment b800h
	cmp	si,8192
	jb	test_even ; if the current address is over 8192, the line
	jmp	test_odd  ; start location is odd
test_even:
	mov	al,[si] ;  from each other in memory. |-----------------|screen
	and	al,dl	;  DL has the mask	      | 0,0 0,1 0,2 etc |addr.
	or	al,al	;  SI the location	      | 2,0 2,1 2,2	|0
	jz	no7	;  AL the memory byte	      |-----------------|
	IF	BIT7	;			      |-----------------|
	or	ah,80h	;  AH is the byte being built | 1,0 1,1 1,2 etc |addr.
	ELSE		;			      | 3,0 3,1 3,2	|8192
	or	ah,01h	;  AH is the byte being built |-----------------|2000h
	ENDIF
no7:	add	si,8192 ;  get to next line down (odd lines are offset 2000h)
	mov	al,[si] ; get the memory byte ( 4 dots )
	and	al,dl	; get rid of dots we aren't testing now
	or	al,al	; see if its COLOR 0
	jz	no6	; if yes, go on
	IF	BIT7
	or	ah,40h
	ELSE
	or	ah,02h
	ENDIF
no6:	sub	si,8112
	mov	al,[si]
	and	al,dl
	or	al,al
	jz	no5
	IF	BIT7
	or	ah,20h
	ELSE
	or	ah,04h
	ENDIF
no5:
	cmp	dh,1	; if dh=1 we are on the last line and don't need
	jne	no5a	; the bottom four bits, so take early exit
	ret		;
no5a:
	add	si,8192
	mov	al,[si]
	and	al,dl
	or	al,al
	jz	no4
	IF	BIT7
	or	ah,10h
	ELSE
	or	ah,08h
	ENDIF
no4:
	sub	si,8112
	mov	al,[si]
	and	al,dl
	or	al,al
	jz	no3
	IF	BIT7
	or	ah,08h
	ELSE
	or	ah,10h
	ENDIF
no3:	add	si,8192
	mov	al,[si]
	and	al,dl
	or	al,al
	jz	no2
	IF	BIT7
	or	ah,04h
	ELSE
	or	ah,20h
	ENDIF
no2:	sub	si,8112
	mov	al,[si]
	and	al,dl
	or	al,al
	jz	no1
	IF	BIT7
	or	ah,02h
	ELSE
	or	ah,40h
	ENDIF
no1:

no0:	ret

test_odd:
	mov	al,[si] ;  from each other in memory. |-----------------|screen
	and	al,dl	;  DL has the mask	      | 0,0 0,1 0,2 etc |addr.
	or	al,al	;  SI the location	      | 2,0 2,1 2,2	|0
	jz	od7	;  AL the memory byte	      |-----------------|
	IF	BIT7	;			      |-----------------|
	or	ah,80h	;  AH is the byte being built | 1,0 1,1 1,2 etc |addr.
	ELSE		;			      | 3,0 3,1 3,2	|8192
	or	ah,01h	;  AH is the byte being built |-----------------|2000h
	ENDIF
od7:	sub	si,8112 ;  get to next line down (odd lines are offset 2000h)
	mov	al,[si] ; get the memory byte ( 4 dots )
	and	al,dl	; get rid of dots we aren't testing now
	or	al,al	; see if its COLOR 0
	jz	od6	; if yes, go on
	IF	BIT7
	or	ah,40h
	ELSE
	or	ah,02h
	ENDIF
od6:	add	si,8192
	mov	al,[si]
	and	al,dl
	or	al,al
	jz	od5
	IF	BIT7
	or	ah,20h
	ELSE
	or	ah,04h
	ENDIF
od5:
	cmp	dh,1	; if dh=1 we are on the last line and don't need
	jne	od5a	; the bottom four bits, so take early exit
	ret		;
od5a:
	sub	si,8112
	mov	al,[si]
	and	al,dl
	or	al,al
	jz	od4
	IF	BIT7
	or	ah,10h
	ELSE
	or	ah,08h
	ENDIF
od4:
	add	si,8192
	mov	al,[si]
	and	al,dl
	or	al,al
	jz	od3
	IF	BIT7
	or	ah,08h
	ELSE
	or	ah,10h
	ENDIF
od3:	sub	si,8112
	mov	al,[si]
	and	al,dl
	or	al,al
	jz	od2
	IF	BIT7
	or	ah,04h
	ELSE
	or	ah,20h
	ENDIF
od2:	add	si,8192
	mov	al,[si]
	and	al,dl
	or	al,al
	jz	od1
	IF	BIT7
	or	ah,02h
	ELSE
	or	ah,40h
	ENDIF
od1:
od0:	ret

tst4	endp

; This routine pre-scans a line to see if in fact there are any bit
; plots to send. The main routine will keep sending bytes here
; If a whole line of 0's are sent we avoid going through the
; set-up for bit-plot (i.e. slower movement) graphics when a CR/LF
; would take care of everything.
; If there IS something to send, PTFLAG is set, the current line
; position is set to 0, bit-plot is init., and bits are really sent to printer.
send	proc	near
	push	ax	; save the character
	push	ds	; DS saved cause it points to lines
	mov	ax,cs	; set seg for here
	mov	ds,ax	; This was some of my first stuff with the 8088
	pop	ax	; and I see some needless complexity here now
	mov	cs:dstor,ax	; but it works and if I mess with it
	cmp	cs:ptflag,0ffh	; its back to DEBUG.
	jnz	nosend	; if PTFLAG isn't FFh we are still scanning
	pop	ax	; else get the char. in AL and print it
	IF	OKI
	cmp	al,3	; a 3 is the OKI graphics escape code, so to send
	jnz	not_esc ; a graphics 3 you send it twice.
	push	ax
	call	send2
	pop	ax
not_esc:
	ENDIF
	call	send2	; this is the real out to printer routine
	jmp	short noset ; restore DS and return
nosend: pop	ax	; This is the SCAN routine
	cmp	al,0	; get the char. > test for 0 > if so reset and go back
	jz	noset
	mov	al,0ffh ; if <> 0
	mov	cs:ptflag,al ; set PTFLAG to go
	pop	ax	;DISCARD RETURN
	cmp	cs:oneor2,1 ; check which (small or LARGE)
	jnz	two	; indent 6 or 13 depending on which routine
	cmp	cs:mode640,TRUE
	jz	nos10
	call	indent	; indent also sets up bit-plot mode
	call	noset	; NOSET will restore DS to right pos.
	jmp	main	; and do the line for real.
nos10:
	call	indent
	call	noset
	jmp	m6ain
two:	call	indent2 ; init. for LARGE
	mov	si,cs:wheresi	; SI set back to start of line
	call	noset	; get right DS
	pop	ax	; discard return again (ml_calc_send)
	jmp	main2a	; back to beginning
noset:	push	ax	; routine to restore DS
	mov	ax,cs:dstor
	mov	ds,ax
	pop	ax
	ret
send	endp

lfcr	proc	near	; send a regular CR/LF combo
	print	13
	print	10
	mov	ax,0
	mov	cs:ptflag,al ; reset PTFLAG for next line
	mov	ax,cs:dstor  ; restore DS
	mov	ds,ax
	ret		; onward
lfcr	endp

lfcroki proc	near
	print	3	; graphics escape code
	print	14	; advance one graphics line, return carriage
	xor	al,al
	mov	cs:ptflag,al	; restore ds no longer needed.
	ret

;	print	3
;	print	14	; oki graphics cr/lf

lfcroki endp

break?	proc	near	; Test for early exit
	push	ax	; don't lose any regs. here
	push	dx
	mov	ah,01h	; call direct keyboard io (constat) by BIOS
	int	16h
	jnz	goback? ; if zero flag clear we have a character
bcont:	pop	dx	; no char. return
	pop	ax
	ret
goback?:
	mov	ah,0
	int	16h
	cmp	al,1bh	; ESC
	jz	back	; so go back, else return
	jmp	short bcont	; no ESC exit
back:	pop	dx	; ESC exit This doesn't check for Ctrl-Break
	pop	ax	; so if it is hit we save it for the caller to handle
	pop	ax	;DISCARD RETURN
	jmp	done	; and go back to orig. caller
break?	endp
flipflop	proc near	; This creates different combinations
	push	cx	; of a box of four bit-plot dots for one color dot.
	push	bx	; Don't lose any variables or loop counters
	push	ax
	mov	cl,2	; AL has present bit-plot finished byte
	mov	bx,0
	and	al,3	; 00000011b
	call	flip
	ror	bl,cl	; 11000000b
	pop	ax	; basically rotate bits around for
	push	ax	; o x
	call	r2	; x o	color 1
	and	al,3	; and
	call	flip	; o x
	ror	bl,cl	; o x	color 2
	pop	ax	; instead of
	push	ax	; x o
	call	r4	; x o	color 1
	and	al,3	; and
	call	flip	; o x
	ror	bl,cl	; o x	color 2
	pop	ax	; which aren't to convincing as
	call	r6	; two different patterns
	and	al,3
	call	flip
	ror	bl,cl
	mov	al,bl
	pop	bx
	pop	cx
	ret
r6:	ror	al,cl
r4:	ror	al,cl
r2:	ror	al,cl
	ret
flip:	cmp	al,3	; make sure there are two dots for color 1 and 2
	jnz	flip2
	or	bl,3
flip2:	cmp	al,2
	jnz	flip3
	or	bl,1
flip3:	cmp	al,1
	jnz	flip4
	or	bl,1
flip4:	ret
flipflop	endp
reverse proc	near	; take AL and make bit 0 bit 7 , 1 - 6, etc
	push	dx	; Save our counters and masks
	push	cx
	mov	dl,01h	; 00000001B
	mov	dh,80h	; 10000000B
	mov	ah,00h	; start out blank
	mov	cx,8	; set counter for 8 times through
rev1:	test	al,dl	; see if bit is set
	jz	rev2	; if not skip next step
	or	ah,dh	; else set bit in AH
rev2:	shl	dl,1	; shift left test bit
	shr	dh,1	; shift right mask bit (pad other bits with 0)
	loop	rev1	; do this 8 times
	mov	al,ah	; and we have a reversed character.
	pop	cx	; get back these
	pop	dx
	ret		; and back to caller
reverse endp
last	dw	0
buffer	db	'         GRAF.COM v3.4',10,13
	if	OKI
	db	'OKIDATA ML92 ML93 (tm) Screen Printer.',13,10
	else
	db	'     Graphics Screen Printer v3.2',13,10
	endif
	db	'   Left Sh. PrtSc. = LARGE GRAPHICS',13,10
	db	'  Right Sh. PrtSc. = small graphics',13,10
	db	' Text screen uses regular ROM routine.',13,10
	db	'   ESCape will exit GRAPHICS print.',13,10,'$'
werehere db	' ** GRAF.COM is already resident **',13,10,10
	db	' There is no need to reinstall.',13,10,'$'
initr	proc	far
initial:
	mov	ax,0	; get addr of
	mov	ds,ax	; print screen routine
	mov	si,14h	; in rom
	mov	ax,[si] ; from interrupt table in ram
	inc	si
	inc	si
	mov	dx,[si]

	mov	word ptr cs:old_print_routine,ax
	mov	word ptr cs:old_print_routine+2,dx
	mov	cx,offset last-offset start
	mov	di,ax
	mov	si,offset start
	cmp	dx,0efffh	; if routine points to ROM, ours is not it.
	ja	initok
	cmp	si,di
	jne	initok		; if start location not same, it can't be ours.

	; otherwise check to see if this routine is

	mov	es,dx		; already in memory, and don't reinstall if so.
	mov	ax,cs
	mov	ds,ax
	repe	cmpsb


	or	cx,cx		; cx=0 means there is a copy of this at the
	jnz	initok		; other address.
	mov	dx,offset werehere
	mov	ah,9		; so we print a message and
	int	21h		; abort.
	int	20h
initok:

;	 mov	 ds,ax
;	 mov	 al,0f1h ; move it to
;	 mov	 ah,25h
;	 int	 21h	 ; int f1h described in tech. manual as unused vector
	mov	ax,cs	; reset int 5
	mov	ds,ax	; to point to
	mov	ax,offset start ; this routine
	mov	dx,ax
	mov	al,5
	mov	ah,25h	; dos routine to reset int. vector
	int	21h
	mov	ax,offset buffer
	mov	dx,ax
	mov	ah,9
	int	21h	; print greeting
	mov	ax,3000h  ; get dos version
	int	21h
	or	al,al
	jz	dos1
	mov	ax,offset last
	mov	cx,16
	xor	dx,dx
	div	cx
	inc	ax	; make number of paragraphs
	mov	dx,ax
	mov	al,0	; exit code
	mov	ah,31h	; terminate process, keep resident
	int	21h

dos1:
	mov	dx,offset last	; last address here
	inc	dx
	int	27h	; terminate but stay resident
initr	endp
cseg	ends
	end	init

```
{% endraw %}

## PEPATCH.DOC

{% raw %}
```
The following patch to the Personal Editor will eleminate the need
to input a RETURN on start-up.
-
         A>RENAME PE.EXE PE.XXX
         A>DEBUG PE.XXX
         -U D95
         XXXX:0D95 FF3604F4     PUSH      [F404]
         XXXX:0D99 FF3606F4     PUSH      [F406]
         -E D95
         XXXX:0D95 FF.EB   36.61   04.90
         XXXX:0D98 F4.90
         -U D95
         XXXX:0D95 3B61         JMPS      0DF8
         XXXX:0D97 90           NOP
         XXXX:0D98 90           NOP
         XXXX:0D99 FF3606F4     PUSH      [F406]
         -W
         Writing B280 bytes
         -q
         A>RENAME PE.XXX PE.EXE
Good Luck,
Tom Hall - TCM644; 72115,1114

```
{% endraw %}

## POSTER.BAS

{% raw %}
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
{% endraw %}

## PRTFIX.DOC

{% raw %}
```
This program was copied from the March issue of Softalk magazine. It
corrects "DEVICE TIMEOUT" errors from the printer.

```
{% endraw %}

## QD.DOC

{% raw %}
```
typ qd.doc
  
          QuadRAM Drive Electronic Disk Software

   This diskette includes a machine language program from the Quadram
Corporation that is designed to create an ``electronic disk'', using
the additional memory provided on the company's Quadboard expansion boards.

   The program is designed for use with the Quadboard and cannot safely
be used with other memory expansion boards, the company advises. Quadram
Corporation has given the Capital PC group permission to reproduce the
program for Quadboard purchasers who did not receive it with their boards.
Note that this software is copyrighted by Quadram Corp. It is NOT public
domain software and may not be further distributed without the company's
permission.

   The QuadRAM Drive is a simple, ``plain vanilla'' electronic drive. It
creates a simulated disk drive in system RAM which can be used, in most
respects just like a normal disk drive. You can copy files to it and run
programs from it. The advantages of electronic drives are that:
   
   1. They run fast. Programs that involve frequent disk access will be
speeded up when run from the RAM disk. Try copying your Volkswriter disk
to the RAM drive and notice the improvement. Try booting BASIC from the
RAM drive. Zip!

   2. They run quietly. Disk access to the RAM disk occurs noiselessly,
and with no wear and tear on your drives and diskettes.

   The main disadvantages are that a RAM drive ties up quite a bit of
system memory and disappears when the system is turned off. You have
to copy files to the RAM disk to work with them and then recopy them
to floppy disks to preserve any changes you have made.

   The QuadRAM drive is designed to look as much like a normal disk
drive as possible. This has the advantage of being compatible with most
software. You can do a diskcopy to the QuadRAM drive, for example, which
is not possible with some other electronic drives.

   A disadvantage is that the program will only establish the RAM disk
as one of the four drives (A: B: C: D:) that the IBM PC is configured
for. This means that if you already have four floppy drives connected
to your system, you will have to sacrifice the use of your D: drive when
you are using the RAM disk.

                   HOW TO MAKE IT GO. . . .

   To use the QuadRAM Drive, you copy the program (QD.EXE) to your DOS
or other program disk. After you boot DOS, you type in the command:
 ``QD N''   . . . where N is a number from 1 to 10, representing the 
number of 32k blocks of memory tobe assigned to the RAM disk. If you type
``QD 5'', for example, the RAM disk will come up as a single-sided drive
with 160k of available space. If you type in ``QD 10'' you will get a
320k RAM disk in 2-sided format, provided you have that much extra
system memory.

   If you specify a number other than 5 or 10, the program will allocate
some of the sectors in the electronic disk as ``bad sectors.'' For example,
if you type ``QD 4'', the RAM disk will be a single-sided 160k disk with
32k of bad sectors and 128k of available space.

   Note that when using the DISKCOPY command you cannot copy a double
sided floppy disk onto a RAM disk that is established in single-sided
format.

   When you run the QD program, the program creates and formats the
RAM disk in high memory. If you only have one floppy drive, the RAM
disk will be your B: drive. If you already have A: and B: drives, it will
be the C: drive. If you have A:, B:, C:, and D: drives, the RAM disk
will be the D: drive, and you will not be able to use your floppy D:
drive.

   You must have at least 96k of RAM in your system to use the QD program,
since it will not use the 64k of memory on your main system board, but
only works with expansion memory. 

   The program updates the BIOS and DOS flags so that DOS (and programs
run under DOS) will not try to use the memory space assigned to the RAM 
disk. The program reboots the system to force DOS to recognize the changes.

   Your first impulse, of course will be to include the QD command in an
AUTOEXEC.BAT file, so that the electronic disk is created automatically
when you boot DOS. Note, however, that, when the QD program reboots DOS,
the AUTOEXEC file will also run again, creating a loop.

   The program provides a solution to this problem. If you include the
parameter ``/A'' with the QD command, the program will check to see if
the RAM drive already has been installed. If the RAM drive is already
present, the program will not run again, but will skip to the next item
in the AUTOEXEC file.

   For example, you could put the command ``QD 5/A'' as the first item
in an AUTOEXEC file. The program will create the RAM disk, boot DOS again,
and skip to the next AUTOEXEC command.

                             -- END --

will create the

SIG/Access: 
```
{% endraw %}

## SCROLL.ASM

{% raw %}
```
NAME SCROLL
PAGE ,132
COMMENT*
        THIS IS A FAR PROCEDURE TO BE USED WITH A BASIC PROGRAM TO PERFORM
        SCROLLING OF THE SCREEN IN A SPECIFIED WINDOW.  THE ARGUMENTS FOR
        THE CALL TO THE ROUTINE ARE:
                ULR% - ROW NUMBER (1-25) OF UPPER LEFT CORNER OF WINDOW
                ULC% - COL NUMBER (1-80) OF UPPER LEFT CORNER OF WINDOW
                LRR% - ROW NUMBER (1-25) OF LOWER RIGHT CORNER
                LRC% - COL NUMBER (1-80) OF LOWER RIGHT CORNER
                ATTR% - ATTRIBUTE OF BLANKED LINE: &H07=NORMAL, &H70=REVERSE
                        SEE TECH. REF. MANUAL PG. 2-51 FOR OTHERS
                LNGTH% - NUMBER OF LINES TO SCROLL (0 BLANKS ENTIRE WINDOW)
                         USE + NUMBER TO SCROLL UP
                         USE - NUMBER TO SCROLL DOWN
        NOTE !! -  THE ARGUMENTS ARE NOT VALUE CHECKED.

        FROM BASIC: CALL SCROLL(ULR%,ULC%,LRR%,LRC%,ATTR%,LNGHT%)

        PROGRAM BY: LEE M. BUCK
        DATE: 3-16-83

*

CSEG SEGMENT PUBLIC 'CODE'
                ASSUME CS:CSEG
SCROLL PROC FAR
                PUSH BP                 ;SAVE BP
                MOV BP,SP               ;SET FRAME POINTER FOR ADDRESSING STACK
                                        ;  PARAMETERS
                MOV AH,6                ;SET DEFAULT TO SCROLL ACTIVE PAGE UP
                                        ;  SWITCH TO 7 FOR DOWN
                MOV SI,[BP+6]           ;GET ADDR OF LNGTH% OF SCROLL
                MOV AL,[SI]             ;GET VALUE OF LNGTH% OF SCROLL
                CMP AL,0                ;CHECK FOR LENGTH .GE. ZERO
                JGE NO_CHANGE           ;MAKE NO CHANGE TO AH IF LNGHT% .GE. 0
                MOV AH,7                ;RESET AH TO SCROLL DOWN
                NEG AL                  ;USE POS. VALUE OF SCROLL LNGTH%
NO_CHANGE:      MOV SI,[BP+8]           ;GET ADDR OF ATTR% FOR BLANKED LINE
                MOV BH,[SI]             ;GET VALUE OF ATTR%
                MOV SI,[BP+10]          ;GET ADDR OF LRC% OF WINDOW
                MOV DL,[SI]             ;GET VALUE OF LRC%
                MOV SI,[BP+12]          ;GET ADDR OF LRR% OF WINDOW
                MOV DH,[SI]             ;GET VALUE OF LRR%
                MOV SI,[BP+14]          ;GET ADDR OF URC% OF WINDOW
                MOV CL,[SI]             ;GET VALUE OF URC%
                MOV SI,[BP+16]          ;GET ADDR OF URR% OF WINDOW
                MOV CH,[SI]             ;GET VALUE OF URR%
                DEC CH                  ;DECREMENT WINDOW COORDINATES BY ONE
                                        ;  TO ACCOUNT FOR FACT SYSTEM DEFINES
                                        ;  SCREEN FROM 0-24 AND 0-79
                DEC CL
                DEC DH
                DEC DL
                INT 10H                 ;CALL BIOS VIDEO_IO
                POP BP                  ;RESTORE ORIGINAL BP
                RET 12                  ;RETURN AND INC SP BY 12 FOR 6 ARGS
SCROLL ENDP
CSEG ENDS
END
```
{% endraw %}

## SCROLL.DOC

{% raw %}
```
SCROLL.BLD (CONVERT FROM SCROLL.HEX TO SCROLL.BLD)

THIS  IS  AN  ASSY. LANG. SUBROUTINE TO BE USED WITH A BASIC PROGRAM TO
PERFORM  SCROLLING  OF THE SCREEN IN A SPECIFIED WINDOW. THE SUBROUTINE
WILL  SCROLL  THE  CONTENTS  OF THE WINDOW UP OR DOWN FILLING IN WITH A
BLANK LINE OF SPECIFIED ATTRIBUTE (I.E., BLACK, WHITE, RED, ETC...) THE
ROUTINE CAN ALSO BE USED TO CLEAR THE WINDOW

THE ARGUMENTS FOR THE CALL TO THE ROUTINE ARE:
        ULR% - ROW NUMBER (1-25) OF UPPER LEFT CORNER OF WINDOW
        ULC% - COL NUMBER (1-80) OF UPPER LEFT CORNER OF WINDOW
        LRR% - ROW NUMBER (1-25) OF LOWER RIGHT CORNER
        LRC% - COL NUMBER (1-80) OF LOWER RIGHT CORNER
        ATTR% - ATTRIBUTE OF BLANKED LINE: &H07=NORMAL, &H70=REVERSE
                SEE TECH. REF. MANUAL PG. 2-51 FOR OTHERS
                 NOTE  -  YOU  CAN  USE  0  (INSTEAD OF 7) AS THE
                       ATTRIBUTE  FOR  TEXT  AND  GRAPHICS  MODE TO GET
                       BLACK  BACKGROUND.  TRY  7  IN  HI-RES  GRAPHICS
                       (SCREEN 2)...EVER SEE THAT WHEN YOU WENT BACK TO
                       DOS FROM GRAPHICS MODE?
        LNGTH% - NUMBER OF LINES TO SCROLL (0 BLANKS ENTIRE WINDOW)
                 USE + NUMBER TO SCROLL UP
                 USE - NUMBER TO SCROLL DOWN
        NOTE !! -  THE ARGUMENTS ARE NOT VALUE CHECKED.

FROM BASIC: CALL SCROLL(ULR%,ULC%,LRR%,LRC%,ATTR%,LNGHT%)

PROGRAM BY: LEE M. BUCK
DATE: 3-16-83


THE  PROGRAM  IS  LOADED  USING THE BLOAD COMMAND. BELOW ARE TWO SAMPLE
PROGRAMS  THAT  USE  THE ROUTINE. ONE USES A STRING VARIABLE WITHIN THE
BASIC  PROGRAM  TO HOLD THE PROGRAM. THE OTHER RESERVES A FIXED SECTION
OF MEMORY AT THE HIGH MEMORY AREA OF YOUR MACHINE.


SAMPLE PROGRAM 1


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


SAMPLE PROGRAM 2


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

```
{% endraw %}

## SCROLL1.BAS

{% raw %}
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
{% endraw %}

## SCROLL2.BAS

{% raw %}
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
{% endraw %}

## SOUNDS.BAS

{% raw %}
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
{% endraw %}

## TOSHIBA.ASM

{% raw %}
```
	PAGE  60,132
	TITLE	TOSHIBA P1351 Graphics, v 1.0
	
	comment #

 tgraf.COM  7/4/85
Interrupt replacement for print screen function on ibmpc(tm)
	Please send problem reports and suggestions to:
		Marty Smith
		310 Cinnamon Oak Lane
		Houston, Texas	77079
		Compuserve 72155,1214
		(713) 464-6737

    Create tgraf.COM with MASM*, LINK* and EXE2BIN* as follows:

	masm tgraf,tgraf,tgraf;

	link tgraf;    (ignor the error message about no stack segment,
			  that's taken care of in the next step.)
	exe2bin tgraf.exe tgraf.com

  *  MASM is the MicroSoft(tm) Macro Assembler v. 3.0
	or IBM(tm) Macro Assembler v. 1.0
     LINK and EXE2BIN are PC-DOS(tm) utilities.

  This program originally designed for Epson-MX(tm) series printers
  with Graftrax80(tm) and Graftrax+(tm) bit-plot graphic capabilites.
  ======> Now modified with conditional compilation and macros for
  ======> c.itoh(tm) model 8510a and other printers.

	CHANGE HISTORY:
	9/18/82 - Buffer in routine for a line of bit-plot bytes to allow for
  checking for blank lines replaced by pre-scan routine, saving space.
	1/24/83 - Modifications for conditional assembly with other printers
  and C.ITOH 8510a.
	1/24/83 - Improved error checking for out-of-paper and I/O errors
  involving printer.
	1/24/83 - Bug in error check corrected, occuring when routine does
  error exit and is then called again, resulting in bit-plot data sent in
  regular mode.
	3/12/83 - Allow calling as a subroutine. i.e. no shift key depressed.
  Defaults to small print mode. Can be set to LARGE.
	2/4/84	- Allow correct printing of 640x200 mode.
	3/18/84 - Use int 31h for dos 2.+ terminate process.
	3/24/84 - Use BIOS for keyboard scan, in case screen is printed
		from DOS.
	4/21/84 - -OTHER- section complete for changes from 640 mode.
	9/22/84 - Add code to set lines back in 6/inch order, so CR's
		can advance to TOF.
	9/22/84 - Jump to other print screen routine instead of reassigning
		it to int f1h. Only luck has kept this vector from being used
		by someone else.
	10/20/84- Add check for already installed, don't reinstall.
	10/20/84- Compatibility with MASM 1.0 reestablished, FAR call to old
		routine caused 'fixup error' from EXE2BIN. 
	10/20/84- CALLGRAF now points to common address variable for default
		mode, is now the same for all versions of program.  Demo now
		works!
	4/15/84 - Toshiba P1351 added to list.  This is a higher resolution
		printer with a 24 pin dot head, and is another special edition
		of the program, like the Okidata with its 7 dot graphics.

	Features:
  Accepts ESC key exit, prescans to test for blank line
  left shift prtsc = small graphics, right shift prtsc = big
  Runs as a .COM type program under dos
     resident until power down or reset.
   1 = screen sent horiz. 320 bits in 480 mode
   2 = screen sent vert. 400 bits double printed in 480 mode
 **************  1 mode **********************
	DL = masking character
	DH = count of 25 (physical lines)
	CX = counter for each line (80)
	DS = used to index screen at 'b8000'
   These regs must be preserved during routine
	  (increment each line by adding '14' hex to ds: for paragraph
		boundary of 320 bytes 0x'140')
 **************  2 mode *********************
	DH = count of 40 (physical lines)
	CX = counter for each line (100)
	SI = index to screen via ds:
   These regs must be preserved during routine
	all output to printer is done from routine -send2-, which uses
	bios routine int 17h, and provides safe error exit.

  GRAF.COM is designed with the idea that the user's main program is the
  primary function and GRAF.COM should not cause problems of its own.


	#

TRUE	equ	-1	; DON'T CHANGE THESE!
FALSE	equ	0

escape	equ	27	; for printer
CR	equ	13
LF	equ	10

; ===============>  A L L  U S E R S  <===================
; ====> SET ONE AND ONLY ONE OF THE FOLLOWING THREE <=====
; don't set citoh to true! not operable with this version.

TOSHIBA	EQU	TRUE
; citoh and nec are left in here to allow for other 24 pin printers, and
; should NOT be set true at present.
CITOH	EQU	FALSE	; citoh and nec 8023 use similar codes.
NEC	EQU	FALSE

DEBUG	equ	FALSE
	
MAX_LINES equ	25	; lines in a screen

; Each bit of a byte is mapped to the wire head of the printer.
; If the Epson MX is sent 80h (bit 7), the TOP wire makes a dot.
; If the C.ITOH is sent   01h (bit 0), the TOP wire makes a dot.
; ===============>  A L L  U S E R S  <===================
; =====> SET ONE AND ONLY ONE OF THE FOLLOWING TWO <======

BIT7	EQU	TRUE
BIT0	EQU	FALSE

; BIT7 is TRUE for TOSHIBA
; BIT0 is TRUE for CITOH,NEC8023

print	macro	char
	mov	al,char
	call	SEND2
	endm


;  ***************> START OF ACTUAL CODE <*****************

cseg	segment 'code'
	assume cs:cseg
	org	100h		; set up for .com conversion
; publics here for debugging.

	comment #
	public	BCONT,BIT0,BIT7,BREAK?,BUFFER,D6ONE
	public	DEFAULT_ROUTINE
	public	DONE,DONE1,DOS1,DO_OLD,DSTOR,EDONE,ERRET,ESCAPE,EXIT
	public	GOBACK?,GOWAIT,GR1,GR2,GRAPHIC,IND10,INDEND
	public	INDENT,INDENT2,INIT,INITIAL,INITOK,INITR,INL640,INLOP
	public	INLOP2,LAST,LFCR,LOOP_COUNT,M640,M6AIN,M6LOOP,MAIN
	public	MAIN2,MAIN2A,ML10,ML10A,ML10B,ML20,MLOOP,MLOOP2,MODE640
	public	NO0,NO1,NO2,NO3,NO4,NO5,NO6,NO7,NOS10,NOSEND
	public	NOSET,NXTS,NXTS10,OLD_PRINT_ROUTINE,ONEOR2,PTFLAG,S310
	public	S320,S330,S340,S350,S360,S370,S380,S390,SEB10,SEB20,SEB30
	public	SEBLOOP1,SEBLOOP2,SEC10,SEC20,SEC25,SEC30,SECLOOP1
	public	SECLOOP2,SEND,SEND2,SEND3,SENDTWO,SEND_BIG_BW
	public	SEND_BIG_COLOR,SEND_LOOP1,SEND_LOOP2,SEND_LOOP3,SEND_ONE
	public	SEND_THREE,SEND_TWO,START,STWO1,STWO10,STWO2,STWO20
	public	STWO30,STWO40,TO0,TO1,TO2,TO3,TO4,TO5,TO6,TO7
	public	TOF,TOFL,TS0A,TS1A,TS2A,TS3A,TS4A,TS5A
	public	TS6A,TS7A,TST4,TST8,TWO,WEREHERE,WHERESI
	#

init	proc
	jmp	initial 	; so we have to set up first
init	endp
;	debugvar dw	0
gowait	dw	0
wheresi dw	0
ptflag	db	0
oneor2	db	0
dstor	dw	0
mode640 dw	0

; **** the 1 below is the POKE to use in CALLing from another program. ****
;
default_routine dw	1	;  1 for small, 2 for LARGE.		  *
;
; ****   WARNING * add any new variables AFTER this to preserve POKE ******

bigc1	db	001000b,100000b,000010b,001000b,100000b,000010b
bigc2	db	100010b,010101b,101010b,010100b,0,0  ; patterns for big color
bigc3	db	101010b,010101b,101010b,010101b,101010b,010101b

data_byte db	0,0
	
loop_count	db	0,0

old_print_routine  dd	0	; address of former print screen routine.

crt_cols	db	0
video_page	db	0
cursor_pos	dw	0
tmode_flag	db	0

do_old	proc	near
; jump to old routine
	pop	bp
	pop	si
	pop	di
	pop	dx
	pop	cx
	pop	bx
	pop	ds
	pop	es
	pop	ax
	jmp	cs:old_print_routine

do_old	endp

; --->	ACTUAL INTERRUPT ROUTINE STARTS HERE  <---
start	proc	far	; Start of main routine--Shift Prt.Sc hit.
	assume cs:cseg
	sti		; This follows ROM routine real close
	push	ax	;SAVE REGS
	push	es
	push	ds
	push	bx
	push	cx
	push	dx
	push	di
	push	si
	push	bp
	mov	bp,sp		; Save in case of error for reset
	mov	ax,50h		; Check here first to see if
	mov	ds,ax		; routine is already in progress
	mov	si,0		; otherwise it will be a mess.
	mov	al,01h		; if [si]=1 then there is a 
	cmp	[si],al		; print screen already in progress.
	jnz	nxts		; if not we're go for routine
	jmp	exit		; otherwise go back home.
nxts:	mov	[si],al 	; 
	mov	ah,15		; Get the current video state.
	int	10h		; from the ROM routine,
	mov	cs:mode640,FALSE
	cmp	al,4		; AL=4-6 are all graphics so we're OK
	jz	graphic
	cmp	al,5
	jz	graphic
	cmp	al,6
	jnz	nxts10
	mov	cs:mode640,TRUE ; special case
	jmp	short graphic
nxts10:
	jmp	do_text_mode

	mov	al,0	; else reset and go to ROM routine.
	mov	[si],al
	jmp	do_old	; this is where we stored the ROM routine entry.
;	jmp	exit	; Do the ROM routine but come back here to leave.
graphic:
	mov	ax,40h	; Get the keyboard shift flag
	mov	ds,ax	; segment
	mov	si,17h	; and address
	mov	ax,[si] ; pick it up
	and	ax,3	; get rid of other stuff
	or	ax,ax	; Mod. to create default small
	jnz	gr1	; for case where routine is called as a subroutine.
	mov	ax,cs:default_routine
gr1:	mov	cs:oneor2,al	; store for later
	push	ax	; also here
	xor	al,al	; make sure this starts out as NO print.
	mov	cs:ptflag,al
	xor	dl,dl	; These bits indicate whether R or L Shift is down
	mov	dh,19h	; 25 lines of graphic dots at 8 dots per line
	mov	cs:loop_count,dh
	mov	ax,0b800h ; stored in DX
	mov	ds,ax	;SET UP FOR SCREEN PEEK
; Printer setup section to change line spacing to 8/72" for continuous dots

; line spacing routine - All Epson Graftrax and IBM Graphics should
; accept esc 'A' 8  or  esc '3' 24 for line spacing, but IBM Graphics only
; recognizes esc '3' 24
	IF	TOSHIBA
	print	escape
	print	'L'     ; A
	print	'0'	; 8
	print	'7'
	ENDIF

	IF	CITOH	; ESC T 16
	print	escape
	print	'T'     ; T
	print	'1'     ; 1
	print	'6'     ; 6
	print	escape

	IF	NEC
	print	'['     ; Set printer to unidirectional for dot alignment
	ELSE
	print	'>'
	ENDIF

	ENDIF

	pop	ax	; get back which routine
	cmp	al,2	; Left Shift Prt Sc means LARGE graphic print
	jnz	gr2
	jmp	main2	; so hop over there if so.
gr2:
	cmp	cs:mode640,TRUE
	jnz	MAIN
	jmp	m640

; START OF small GRAPHICS PRINT ROUTINE.
; This routine scans across the screen from left to right,
; building an TOSHIBA bit plot byte out of IBM screen dots.
; TOSHIBA wire head		IBM screen color dots
; TOP	 o  128  80h bit 7	| 00 | 01 | 10 | 11 | = 4 dots, one byte
;	 o   64  40h  "  6
; one	 o   32  20h  "  5      ibm dots go one raster line then the next
; bit	 o   16  10h  "  4      EVEN line, ie 0, 2, 4 etc.
; plot	 o    8  08h  "  3
; byte	 o    4  04h  "  2      then you go back and do 1, 3, 5 etc.
;	 o    2  02h  "  1
; BOTTOM o    1  01h  "  0      At loc. 0000h are 4 dots, 0,0|0,1|0,2|0,3
;				At loc. 2000h are 4 dots, 1,0|1,1|1,2|1,3
;
main:	mov	cx,80	; 80 x 4 = 320 dots.
	mov	di,sp	; this is not very structured, but its 11:30pm

	comment #

ok, heres the idea, bp is already set for printer foulup abort.
This printer has much finer resolution than the epson, humble beginning
of this program.  all color modes do color translation here, b+w is yet
another situation, carp, carp. The scan routine is set so that when material
is found to be printed, the print line loop is reset to the top and only 
then is data actually sent. This allows for quicker printing of blank space.
 A cr/lf is much faster than control codes and 2000 bytes.  A more 
complicated translation routine means more call nesting, and so register 
DI is used to allow movement without stack trouble (famous last words).
If you make modifications to the program, please understand that changing
register DI may make for some interesting side effects.

	#

mloop:	mov	dl,0c0h ; 11000000b
	call	tst4	; see if this comes back <> 0
;	mov	al,ah	; we are testing bit patterns for one screen byte
	call	send3	; don't send to printer unless something to send
	mov	dl,30h	; 00110000b
	call	tst4	; each byte is 4 dots
;	mov	al,ah	; so we test for each dot in a byte
	call	send3	; send sets PTFLAG if there is a dot on the line
	mov	dl,0ch	; 00001100b
	call	tst4	; then resets to start of line and starts printing
;	mov	al,ah	; AL is the bit plot byte being built
	call	send3	; This keeps us from printing a line of '0's.
	mov	dl,03h	; 00000011b
	call	tst4	; TST4 scans down 8 screen dot lines each time called
;	mov	al,ah
	call	send3
	loop	mloop	; 80 bytes make 320 dots
	call	lfcr	; this is a good old regular line feed/carriage return
	call	break?	; someone hit ESC key? so take early exit
	mov	dh,cs:loop_count
	dec	dh	; DL is line counter
	or	dh,dh	; when it goes 0 we're through
	jz	done	; reset everything and do an IRET
	mov	cs:loop_count,dh
	mov	ax,ds	; otherwise bump the SEGMENT reg so that location
	add	ax,14h	; 0 is the start of the next line
	mov	ds,ax	; X'140' = 320
	jmp	main	; and do this 80 times (80x4=320)
done:	mov	ax,0
; This is the common exit for both routines, Printer is restored.
done1:	push	ax	; save AX cause it has error exit flag
; TOSHIBA command to reset printer to 6 lines/in. = ESC 2 (1b 32)
	IF	TOSHIBA
	print	escape
	print	'L'
	print	'0'	; add 12/216 to reset line spacing
	print	'8'
	print	CR
	print	LF
	ENDIF
; FOR CITOH MAKE SURE BIDIRECTIONAL PRINTING IS RESTORED
	IF	CITOH
	print	escape
	print	'A'
	print	escape

	IF	NEC
	print	']'
	ELSE
	print	'<'
	ENDIF

	ENDIF

edone:	mov	ax,50h	; Set end of PrtSc indication
	mov	ds,ax	; OK to come back and do again
	mov	si,0
	pop	ax
	mov	[si],al
exit:	pop	bp
	pop	si	; restore regs and return to caller
	pop	di
	pop	dx
	pop	cx
	pop	bx
	pop	ds
	pop	es
	pop	ax
	iret		; were an interrupt routine so we IRET

	comment	#
 START OF LARGE PRINT ROUTINE
+-------------+
| ^ ^ 	      |  This time we scan from 199,0 to 0,0
| ^ ^ 	      |   and go across
| ^ ^ 	      |  These are representations
| | | 	      |   of one color dot.
+-------------+    0	     1	     2	     3	   Palettes
		x x x x x x 	x x x x x x
     all o's	o o o o o o	x x x x x x	all x's
		x x x x x x	x x x x x x
		o o o o o o	o o o o o o	These patterns may be
		x x x x x x	o o o o o o	changed if they don't 
		o o o o o o	o o o o o o	look convincing.
color   00	     01		     10		11
	 0	      1		      2		 3

		for b+w:

     	dot on :  xxxxxx	oooooo  : dot off
		  xxxxxx	oooooo
		  xxxxxx	oooooo			


	#

main2:	mov	dh,80	; we have 80 colunms x 25 lines here
	mov	cs:loop_count,dh
	mov	cs:wheresi,3ef0h ; si is our index
	mov	si,cs:wheresi
	mov	di,sp
main2a: mov	cx,100
mloop2: mov	al,[si] ; idea is to get a byte starting at screen BOTTOM
	cmp	cs:mode640,TRUE
	je	ml10
	  
	call	send_big_color

	jmp	short ml10a
ml10:
	call	send_big_bw
ml10a:
	mov	cs:gowait,si ; store SI for next EVEN raster line
	sub	si,2000h ; subtract 2000h for the next ODD raster line
	mov	al,[si] ; and do the same here
	cmp	cs:mode640,TRUE
	je	ml10b

	call	send_big_color

	jmp	short ml20
ml10b:
	call	send_big_bw
ml20:
	mov	si,cs:gowait ; get back the EVEN line
	sub	si,80	; advance UP the screen one line (say 199,0 to 197,0)
	loop	mloop2	; and do this 100 times
	call	lfcr	; finished with one line we send normal line-end
	call	break?	; check for an ESC if we want to abort
	or	al,al	; clear flags
	dec	cs:loop_count
	mov	dh,cs:loop_count ; DH is our line counter,
	or	dh,dh	; when it goes 0 we're done.
	jz	tof	; so we'll try to reset Top of Form and exit

	inc	cs:wheresi	; else go to the next byte location
	mov	si,cs:wheresi	; store
	jmp	main2a		; and do again

tof:
	print	12	; send a form feed

	jmp	done	; clean up and back to caller.

start	endp

send2	proc	near	; BIOS routine to print the character in AL

IF	DEBUG
	inc	cs:debugvar
	ret
	ELSE
	push	ax
	mov	ah,00h	; 0=print, 1=initialize port, 2=read status to AH
	push	dx
	mov	dx,0	; DX specifies printer 0 (LPT1:)
	int	17h	; BIOS used instead of DOS because DOS sends
	pop	dx	; CR/LF's in the middle of the bit-plots
	test	ah,29h	; check for timeout or errors or out-of-paper
	pop	ax
	jnz	erret
	ret

erret:
	cmp	cs:tmode_flag,TRUE
	jne	erret10
	call	reset_cursor
erret10:
	mov	ax,00ffh ; Flag for printer foulup
	mov	sp,bp
	push	ax
	jmp	edone	; special abort
	ENDIF
send2	endp

; TOSHIBA bit plots operate at 180 dots per inch, or 1440 for an 8 inch line.
; called by ESC ; 'xxxx' where xxxx is an ASCII number like '0010' or '1440'
;  i.e.  300 dots would be ESC ; 0300
;  This is sent to the TOSHIBA as --> 27 ';' '0300'

indent	proc	near
	push	cx	; 13 spaces in to center
	IF	TOSHIBA
	cmp	cs:mode640,TRUE
	jz	ind10
	mov	cx,13	; PICTURE ( we've got 960 dots and 1440 to work with
inlop:	print	' '	; 1440-960=480/18 spaces/char pica = 26.67 extra
			; so indent the picture 13 spaces to center )
	loop	inlop
	print	escape	; SEQUENCE TO SET UP 960
			; BIT PLOTS IN GRAPHIC MODE.
	print	';'	; OF P1351
			; This is the set-up for the small print
	print	'0'	
	print	'9'	; 320*3=960 dots	
	print	'6'
	print	'0'
	jmp	short indend

ind10:		   
	mov	cx,5
inl640:		      	; 640x200 mode, 1440-1280=160/18 per char pica=8.89
			; so indent 5
	print	' '
	loop	inl640
	print	escape
	print	';'     ; 640 dots * 2 = 1280
	print	'1'
	print	'2'
	print	'8'
	print	'0'

indend:
	ENDIF
	IF	CITOH
	print	escape	; ESC N = Pica pitch
	print	'N'
	cmp	cs:mode640,TRUE
	jz	ind10
	mov	cx,20	; PICTURE ( we've got 320 dots and 640 to work with )
inlop:	print	20h	; 640-320=320 / 8 dots per char. = 40 extra
			; so indent the picture 13 spaces to center
	loop	inlop
	jmp	ind20

ind10:
	print	escape
	print	'S'
	print	'0'
	print	'6'
	print	'4'
	print	'0'
	jmp	ind30
ind20:
; ESC S 0320 = 320 bit plot type bytes on the way
	print	escape	; SEQUENCE TO SET UP 320 BIT PLOTS IN 640 MODE
	print	'S'     ; OF CITOH  This is the set-up for the small print
	print	'0'     ; Would love to try to use all 640 bits here
	print	'3'
	print	'2'
	print	'0'

ind30:
	ENDIF
	pop	cx
	ret
indent	endp
; This is indent for LARGE print
; This time we have 200*6=1200 bit plots to send 
; 1440-1200=240/18 =13.33 extra, so indent 6
indent2 proc	near
	push	cx
	IF	TOSHIBA
	mov	cx,6	; so indent 6 character type spaces
inlop2: print	20h
	loop	inlop2
	print	escape	; 200*6=1200
	print	';'
	print	'1'
	print	'2'
	print	'0'
	print	'0'
	ENDIF
; 640-400=240 / 8 = 30 EXTRA characters
	IF	CITOH
	print	escape ; ESC N = Pica pitch
	print	'N'
	mov	cx,15	; PICTURE ( we've got 400 dots and 640 to work with
inlop2: print	20h	; 640-400 / 8 dots per char. = 30 extra so indent
			; the picture 15 spaces to center
	loop	inlop2
; ESC S 0400 = 400 bit plot type bytes on the way
	print	escape	; SEQUENCE TO SET UP 400 BIT PLOTS IN 640 MODE
	print	'S'     ; OF CITOH
	print	'0'
	print	'4'
	print	'0'
	print	'0'
	ENDIF
	pop	cx
	ret
indent2 endp

m640	proc	near
m6ain:	mov	cx,80	; 80 x 4 = 320 dots.
	mov	di,sp
m6loop: mov	dl,80h ; 10000000b
	call	tst8	; see if this comes back <> 0
	mov	al,ah	; we are testing bit patterns for one screen byte
	call	sendtwo	; don't send to printer unless something to send
	mov	dl,40h	; 01000000b
	call	tst8	; each byte is 4 dots
	mov	al,ah	; so we test for each dot in a byte
	call	sendtwo	; send sets PTFLAG if there is a dot on the line
	mov	dl,20h	; 00100000b
	call	tst8	; then resets to start of line and starts printing
	mov	al,ah	; AL is the bit plot byte being built
	call	sendtwo
	mov	dl,10h	; 00010000b
	call	tst8	; TST4 scans down 8 screen dot lines each time called
	mov	al,ah
	call	sendtwo
	mov	dl,08h ; 00001000b
	call	tst8	; see if this comes back <> 0
	mov	al,ah	; we are testing bit patterns for one screen byte
	call	sendtwo	; don't send to printer unless something to send
	mov	dl,04h	; 00000100b
	call	tst8	; each byte is 4 dots
	mov	al,ah	; so we test for each dot in a byte
	call	sendtwo	; send sets PTFLAG if there is a dot on the line
	mov	dl,02h	; 00000010b
	call	tst8	; then resets to start of line and starts printing
	mov	al,ah	; AL is the bit plot byte being built
	call	sendtwo
	mov	dl,01h	; 00000001b
	call	tst8	; TST4 scans down 8 screen dot lines each time called
	mov	al,ah
	call	sendtwo
	loop	m6loop	; 80 bytes make 320 dots
	call	lfcr	; this is a good old regular line feed/carriage return
	call	break?	; see if someone hit ESC key. If so take early exit
	or	al,al
	mov	dh,cs:loop_count
	dec	dh	; DL is line counter
	cmp	dh,0	; when it goes 0 we're through
	jz	d6one	; reset everything and do an IRET
	mov	cs:loop_count,dh
	mov	ax,ds	; otherwise bump the SEGMENT reg so that location
	add	ax,14h	; 0 is the start of the next line
	mov	ds,ax	; X'140' = 320
	jmp	m6ain	; and do this 80 times (80x4=320)
d6one:	mov	ax,0
	jmp	done1

m640	endp

tst4	proc	near	;  This routine builds ONE bit plot byte
	mov	bx,80	;  by testing a dot with the mask sent
	sub	bx,cx	;  from MLOOP.
	mov	si,bx	;  First it does the ODD rows then the EVEN,
	xor	ax,ax	;  alternate lines are offset 2000h
	mov	bl,[si] ;  from each other in memory.
	and	bl,dl	;  DL has the mask
	or	bl,bl	;  SI the location
	jz	no7	;  BL the memory byte
	mov	bh,bl
	and	bx,1010101001010101b ; separate components of two bits/pixel
	test	bh,dl	; even bit
	jz	ts7a
	or	ah,80h	; if set, set on data word
ts7a:
	test	bl,dl	; odd bit
	jz	no7
	or	ah,40h
no7:	add	si,80	; +80 gets us from say 0,0 to 2,0
	mov	bl,[si] ; get the memory byte ( 4 dots )
	and	bl,dl	; get rid of dots we aren't testing now
	or	bl,bl	; see if its COLOR 0
	jz	no5	; if yes, go on
	mov	bh,bl
	and	bx,1010101001010101b ; separate components of two bits/pixel
	test	bh,dl	; even bit
	jz	ts5a
	or	ah,8	; if set, set on data word
ts5a:
	test	bl,dl	; odd bit
	jz	no5
	or	ah,4
no5:	add	si,80	; continue 7 5 3 1
	mov	bl,[si]	;  xxxxxx
	and	bl,dl	;        
	or	bl,bl	;  xxxxxx
	jz	no3	;  xxxxxx
	mov	bh,bl
	and	bx,1010101001010101b ; separate components of two bits/pixel
	test	bh,dl	; even bit
	jz	ts3a
	or	al,80h	; if set, set on data word
ts3a:
	test	bl,dl	; odd bit
	jz	no3
	or	al,40h
no3:	add	si,80	;  xxxxxx
	mov	bl,[si]	;
	and	bl,dl
	or	bl,bl
	jz	no1
	mov	bh,bl
	and	bx,1010101001010101b ; separate components of two bits/pixel
	test	bh,dl	; even bit
	jz	ts1a
	or	al,8	; if set, set on data word
ts1a:
	test	bl,dl	; odd bit
	jz	no1
	or	al,4
no1:	push	ax
	mov	ax,80
	sub	ax,cx	; CX counts our screen position
	add	ax,2000h ; add 2000h for the EVEN rows
	mov	si,ax	; with seg set to B800h we can use SI like an
	pop	ax	; array pointer ( AH has our byte so don't lose )
	mov	bl,[si] ; and continue with the same idea for 6 4 2 0
	and	bl,dl
	or	bl,bl
	jz	no6
	mov	bh,bl
	and	bx,1010101001010101b ; separate components of two bits/pixel
	test	bh,dl	; even bit
	jz	ts6a
	or	ah,20h	; if set, set on data word
ts6a:
	test	bl,dl	; odd bit
	jz	no6
	or	ah,10h
;	call	set6
no6:	add	si,80
	mov	bl,[si]
	and	bl,dl
	or	bl,bl
	jz	no4
	mov	bh,bl
	and	bx,1010101001010101b ; separate components of two bits/pixel
	test	bh,dl	; even bit
	jz	ts4a
	or	ah,2	; if set, set on data word
ts4a:
	test	bl,dl	; odd bit
	jz	no4
	or	ah,1
;	call	set4
no4:	add	si,80
	mov	bl,[si]
	and	bl,dl
	or	bl,bl
	jz	no2
	mov	bh,bl
	and	bx,1010101001010101b ; separate components of two bits/pixel
	test	bh,dl	; even bit
	jz	ts2a
	or	al,20h	; if set, set on data word
ts2a:
	test	bl,dl	; odd bit
	jz	no2
	or	al,10h
;	call	set2
no2:	add	si,80
	mov	bl,[si]
	and	bl,dl
	or	bl,bl
	jz	no0
	mov	bh,bl
	and	bx,1010101001010101b ; separate components of two bits/pixel
	test	bh,dl	; even bit
	jz	ts0a
	or	al,2	; if set, set on data word
ts0a:
	test	bl,dl	; odd bit
	jz	no0
	or	al,1
;	call	set0

no0:	ret

	comment #
; hopefully this can be left out, it all depends on the LQ1500
; where's my Z80 now
; reverse this table if your bit plots use bit 0 for the top wire
	IF	BIT7
set15:	or	ah,80h	; top wire - bit 7
	ret
set14:	or	ah,40h	; bit 6
	ret
set13:	or	ah,20h	; bit 5
     	ret
set12:	or	ah,10h	; bit 4
	ret
set11:	or	ah,08h	; bit 3
	ret
set10:	or	ah,04h	; bit 2
	ret
set9:	or	ah,02h	; bit 1
	ret
set8:	or	ah,01h	; bit 0
	ret
set7:	or	al,80h	; top wire - bit 7
	ret
set6:	or	al,40h	; bit 6
	ret
set5:	or	al,20h	; bit 5
	ret
set4:	or	al,10h	; bit 4
	ret
set3:	or	al,08h	; bit 3
	ret
set2:	or	al,04h	; bit 2
	ret
set1:	or	al,02h	; bit 1
	ret
set0:	or	al,01h	; bit 0
	ret
	ENDIF
	IF	BIT0
set7:	or	ah,01h	; top wire - bit 0
	ret
set6:	or	ah,02h	; bit 1
	ret
set5:	or	ah,04h	; bit 2
	ret
set4:	or	ah,08h	; bit 3
	ret
set3:	or	ah,10h	; bit 4
	ret
set2:	or	ah,20h	; bit 5
	ret
set1:	or	ah,40h	; bit 6
	ret
set0:	or	ah,80h	; bit 7
	ret
	ENDIF

	#

tst4	endp

; 640 mode is single bits, no color, so result is in AL.
;
tst8	proc	near	;  This routine builds ONE bit plot byte
	mov	ax,80	;  by testing a dot with the mask sent
	sub	ax,cx	;  from M6LOOP.  Used by 640 mode
	mov	si,ax	;  First it does the ODD row then the EVEN
	mov	ah,0	;  since alternate lines are offset 2000h
	mov	al,[si] ;  from each other in memory.
	and	al,dl	;  DL has the mask
	cmp	al,0	;  SI the location
	jz	to7	;  AL the memory byte
	or	ah,80h	;  AH is the byte being built
to7:	add	si,80	; +80 gets us from say 0,0 to 2,0
	mov	al,[si] ; get the memory byte ( 4 dots )
	and	al,dl	; get rid of dots we aren't testing now
	cmp	al,0	; see if its COLOR 0
	jz	to5	; if yes, go on
	or	ah,20h
;	call	set5	; otherwise set that bit
to5:	add	si,80	; continue 7 5 3 1
	mov	al,[si]
	and	al,dl
	cmp	al,0
	jz	to3
	or	ah,8
;	call	set3
to3:	add	si,80
	mov	al,[si]
	and	al,dl
	cmp	al,0
	jz	to1
	or	ah,2
;	call	set1
to1:	push	ax
	mov	ax,80
	sub	ax,cx	; CX counts our screen position
	add	ax,2000h ; add 2000h for the EVEN rows
	mov	si,ax	; with seg set to B800h we can use SI like an
	pop	ax	; array pointer ( AH has our byte so don't lose )
	mov	al,[si] ; and continue with the same idea for 6 4 2 0
	and	al,dl
	cmp	al,0
	jz	to6
	or	ah,40h
;	call	set6
to6:	add	si,80
	mov	al,[si]
	and	al,dl
	cmp	al,0
	jz	to4
	or	ah,10h
;	call	set4
to4:	add	si,80
	mov	al,[si]
	and	al,dl
	cmp	al,0
	jz	to2
	or	ah,4
;	call	set2
to2:	add	si,80
	mov	al,[si]
	and	al,dl
	cmp	al,0
	jz	to0
	or	ah,1
;	call	set0
to0:	ret

tst8	endp

; This routine pre-scans a line to see if in fact there are any bit
; plots to send. The main routine will keep sending bytes here
; If a whole line of 0's are sent we avoid going through the
; set-up for bit-plot (i.e. slower movement) graphics when a CR/LF
; would take care of everything.
; If there IS something to send, PTFLAG is set, the current line
; position is set to 0, bit-plot is init., and bits are really sent to printer.
send	proc	near
;	push	ax	; save the character
;	push	ds	; DS saved cause it points to lines
;	pop	ax	; points to DS
;	mov	cs:dstor,ax	; save
	cmp	cs:ptflag,TRUE	; check for printing
	jne	nosend	; if PTFLAG isn't TRUE we are still scanning
;	pop	ax	; else get the char. in AL and print it
	call	send2	; this is the real out to printer routine
	ret
;	jmp	short noset ; restore DS and return
nosend:
;	pop	ax	; This is the SCAN routine
	or	al,al	; get the char. > test for 0 > if so reset and go back
	jz	noset
	mov	al,TRUE ; if <> 0
	mov	cs:ptflag,al ; set PTFLAG to go
	mov	sp,di	;DISCARD RETURN
	cmp	cs:oneor2,1 ; check which (small or LARGE)
	jnz	two	; indent 6 or 13 depending on which routine
	cmp	cs:mode640,TRUE
	jz	nos10
	call	indent	; indent also sets up bit-plot mode
;	call	noset	; NOSET will restore DS to right pos.
	jmp	main	; and do the line for real.
nos10:
	call	indent
;	call	noset
	jmp	m6ain
two:	call	indent2 ; init. for LARGE
	mov	si,cs:wheresi	; SI set back to start of line
;	call	noset	; get right DS
	jmp	main2a	; back to beginning
noset:
;	push	ax	; routine to restore DS
;	mov	ax,cs:dstor
;	mov	ds,ax
;	pop	ax
	ret
send	endp
	
send3	proc	near
; takes word length data and sends to printer
;
;  word reads left to right and has actual color values of eight
;  vertical pixels
;
;  these will be sent to the printer as three sets of four bytes each, 
;  each set of four bytes controlling the 24 pins on the print head.
;
;  pixel box is 3x3.  colors represented:
;  
;  color 0:  color 1:  color 2:  color 3:
;   o o o     o	o o	o x o     x o x
;   o o	o     o x o	o x o     o x o
;   o o	o     o o o	o x o     x o x
;    00	       01	 10	   11
;		  
	push	bx
	push	cx
	push	dx
	mov	dx,ax
	mov	bx,ax
	mov	cx,4

send_loop1:			; first pattern

	xor	al,al		; first column
	mov	ah,dh
	and	ah,11110000b	; just top two pixels
	or	ah,ah		; check for zero
	jz	send_one
	test	ah,10000000b	; twos place
	jz	s320
;	or	al,00101000b	; 0-5 significant
s310:
	test	ah,01000000b	; ones place
	jz	s320
	or	al,00101000b
s320:
 	test	ah,00100000b	; twos
 	jz	send_one
; 	or	al,00000101b
s330:
	test	ah,00010000b
	jz	send_one
	or	al,000101b
send_one:
	call	send
	shl	dx,1
	shl	dx,1
	shl	dx,1
	shl	dx,1
	loop	send_loop1

	mov	dx,bx		; restore char for next pattern
	mov	cx,4
send_loop2:
	xor	al,al		; first column
	mov	ah,dh
	and	ah,11110000b	; just top two pixels
	or	ah,ah		; check for zero
	jz	send_two
	test	ah,01000000b	; ones place
	jz	s340
	or	al,00010000b	; 0-5 significant
s340:		   
	test	ah,10000000b
	jz	s350
	or	al,00101000b	; only other
s350:
	test	ah,00010000b
	jz	s360
	or	al,00000010b
s360:
	test	ah,00100000b
	jz	send_two
	or	al,00000101b
send_two:
	call	send
	shl	dx,1
	shl	dx,1
	shl	dx,1
	shl	dx,1
	loop	send_loop2
	
	mov	dx,bx
	mov	cx,4

send_loop3:		; first pattern

	xor	al,al	; first column
	mov	ah,dh
	and	ah,11110000b	; just top two pixels
	or	ah,ah	; check for zero
	jz	send_three
	test	ah,10000000b	; twos place
	jz	s380
;	or	al,00101000b	; 0-5 significant
s370:
	test	ah,01000000b	; ones place
	jz	s380
	or	al,00101000b
s380:
	test	ah,00100000b
	jz	send_three
;	or	al,00000101b
s390:
	test	ah,00010000b
	jz	send_three
	or	al,00000101b
send_three:
	call	send
	shl	dx,1
	shl	dx,1
	shl	dx,1
	shl	dx,1
	loop	send_loop3

	pop	dx
	pop	cx
	pop	bx
	ret

send3	endp

sendtwo	proc	near
; expands 640x200 mode byte in small mode
;  bit is sent twice for 1280  3.56 x 3.33  7.11 x 6.66
;	
;	byte is in AL.
;
;	on =  x o   off = o o
;	      o	x	  o o
;	      x o	  o o

	push	bx		; save some regs
	push	cx
	push	dx
	
	mov	dx,ax		; copy data byte in al to dl,bl
	mov	bx,ax
	
	mov	cx,4		; do it with a loop
	
stwo1:
	xor	al,al		; start out blank
	test	dl,10000000b	; check top bit
	jz	stwo10		; not set, skip to next
	mov	al,00101000b	; if set reflect in data
stwo10:
	test	dl,01000000b	; check next
	jz	stwo20		; do again. 
	or	al,00000101b	; each byte is two verticle screen pixels
stwo20:
	call	send		; out to routine which prints or doesn't
	shl	dl,1		; depending on line.
	shl	dl,1		; now move data left 
	
	loop	stwo1		; and do it four times.
	
	mov	dx,bx		; get back copy
	mov	cx,4		; and send again
stwo2:
	xor	al,al
	test	dl,10000000b
	jz	stwo30
	mov	al,00010000b
stwo30:
	test	dl,01000000b
	jz	stwo40
	or	al,00000010b
stwo40:
	call	send
	shl	dl,1
	shl	dl,1
	
	loop	stwo2
	
	pop	dx
	pop	cx
	pop	bx

	ret

sendtwo	endp

send_big_color	proc	near
; take four pixel byte in al and expand to 24 x 6 to printer

	push	bx
	push	cx
	push	dx
		
	mov	dx,ax		; copy data byte
	mov	cs:data_byte,al
	xor	bx,bx
	mov	cx,6		; basically send for six vertical dot firings

secloop1:
	push	cx		; two loops, save first counter

	mov	dl,cs:data_byte	; get original data
	xor	dh,dh		; blank top half
	mov	cx,4		; set up inner loop 
secloop2:

	xor	al,al		; clear printer byte
	test	dl,11000000b	; see if its zero
	jz	sec25
	
	shl	dx,1		; move bits in question into lower dh
	shl	dx,1
	and	dh,3		; discard others    11 binary
	
	cmp	dh,1 		; is it a one?
	jnz	sec10		; no, try another
	mov	al,cs:bigc1[bx]	; else use pattern 1
	jmp	short sec30	; and go print
	
sec10:
	cmp	dh,2		; is it a two?
	jnz	sec20 		; no, then must be 3
	mov	al,cs:bigc2[bx]	; else use pattern 2
	jmp	short sec30	; off to print.
	
sec20:
	mov	al,cs:bigc3[bx]	; determined to be 3
	jmp	short sec30
sec25:
	shl	dx,1		; keep track of bits for zero case
	shl	dx,1
	
sec30:	
	call	send		; out to send routine
						     
	loop	secloop2	; do for each pixel
	
	pop	cx		; get back other counter
	inc	bx
	
	loop	secloop1	; do six times
	
	pop	dx		; and we are done.
	pop	cx
	pop	bx
	ret

send_big_color	endp
	
	
send_big_bw	proc	near
; take four pixel byte in al and expand to 24 x 6 to printer

	push	bx
	push	cx
	push	dx
		
	mov	dx,ax		; copy data byte
	mov	cs:data_byte,al
	mov	bl,010000b
	mov	bh,000010b	; pattern
	mov	cx,6		; basically send for six vertical dot firings

sebloop1:
	push	cx		; two loops, save first counter
	xor	bx,11100111000b	; reverse pattern

	mov	dl,cs:data_byte	; bl won't be changed
	mov	cx,4		; set up inner loop 
sebloop2:

	xor	al,al		; clear printer byte
	test	dl,10000000b	; check top
	jz	seb10
	
	mov	al,bl		; else use pattern 1
seb10:	
			 
	test	dl,01000000b
	jz	seb20
	or	al,bh
	
seb20:
	shl	dl,1		; set up for next
	shl	dl,1
	
seb30:	
	call	send		; out to send routine
						     
	loop	sebloop2	; do for each pixel
	
	pop	cx		; get back other counter
	
	loop	sebloop1	; do six times
	
	pop	dx		; and we are done.
	pop	cx
	pop	bx
	ret

send_big_bw	endp


lfcr	proc	near	; send a regular CR/LF combo
	print	13
	print	10
	mov	ax,0
	mov	cs:ptflag,al ; reset PTFLAG for next line
;	mov	ax,cs:dstor  ; restore DS
;	mov	ds,ax
	ret		; onward
lfcr	endp

break?	proc	near	; Test for early exit
	push	ax	; don't lose any regs. here
	push	dx
	mov	ah,01h	; call direct keyboard io (constat) by BIOS
	int	16h
	jnz	goback? ; if zero flag clear we have a character
bcont:	pop	dx	; no char. return
	pop	ax
	ret
goback?:
	mov	ah,0
	int	16h
	cmp	al,1bh	; ESC
	jz	back	; so go back, else return
	jmp	short bcont	; no ESC exit
back:	pop	dx	; ESC exit This doesn't check for Ctrl-Break
	pop	ax	; so if it is hit we save it for the caller to handle
	pop	ax	;DISCARD RETURN
	cmp	cs:tmode_flag,TRUE
	jne	GB10
	call	reset_cursor
GB10:
	jmp	done	; and go back to orig. caller
break?	endp

; text_mode
	
; routines for text mode dump
; 7/4/85
; right shift will print with control chars and extended replaced by dots '.'
; left shift will print graphics chars.

	
read_line	proc	near
; read line from screen into buffer, calculate length and put in first pos.
	
	push	bp
	mov	di,80h	; use default dta from original load
	inc	di
	
	mov	dh,loop_count
	xor	dl,dl
	mov	bh,video_page
	mov	bl,crt_cols
	cld		; set auto-increment
	
rloop:
	mov	ah,2	; set cursor
	int	10h

	mov	ah,8	; read att/char
	int	10h
	
	or	al,al	; replace 0 with space
	jz	rtl20
	cmp	al,0ffh ; and 255
	je	rtl20
rtl10:	
	stosb
	
	inc	dl
	cmp	dl,bl
	jne	rloop
	
	jmp	rtl_scan

rtl20:
	mov	al,' '	; replace space type chars with spaces
	jmp	rtl10
	
rtl_scan:
	dec	di	; set to last char
	mov	si,80h	; length store
	mov	cl,bl	; loop for length
	xor	ch,ch
	mov	al,' '	; search for spaces
	std		; set auto_decrement
	
	repe	scasb	; search backwards until 0 or non-space

	je	rtl30

	inc	cl	; adjust for count of characters, else cl is zero
rtl30:	
	mov	[si],cl
	cld

rtlret:		    
	pop	bp
	ret
	
	
read_line	endp

do_extended	proc	near

	mov	al,'.'
	call	send2
	ret
	
do_extended	endp
	
do_control	proc	near
	
	mov	al,'.'
	call	send2
	ret
	
do_control	endp


print_line	proc	near
; use info in buffer to print

	mov	si,80h
	lodsb		; get length
	or	al,al
	jnz	pl10
plret:	
	ret
pl10:
	mov	cl,al
	xor	ch,ch
	cld
ploop:
	lodsb
	cmp	al,127
	ja	pl_extended
	cmp	al,32
	jb	pl_control

	call	send2
plnext:	
	loop	ploop
	
	jmp	plret
       
pl_extended:
	call	do_extended
	jmp	plnext
pl_control:
	call	do_control
	jmp	plnext

print_line	endp
	

do_text_mode	proc	near
; comes in just after test for mode, but before shift key check

	mov	cs:crt_cols,ah
	mov	cs:video_page,bh
	mov	cs:tmode_flag,TRUE

	mov	ax,40h	; Get the keyboard shift flag
	mov	ds,ax	; segment
	mov	si,17h	; and address
	mov	ax,[si] ; pick it up
	and	ax,3	; get rid of other stuff
	or	ax,ax	; Mod. to create default small
	jnz	tr1	; for case where routine is called as a subroutine.
	mov	ax,cs:default_routine
tr1:	mov	cs:oneor2,al	; store for later

	mov	ax,cs
	mov	ds,ax	; set data to here
	mov	es,ax
			 
	mov	ah,3
	int	10h	; read cursor pos.
	mov	cursor_pos,dx ; save

	mov	byte ptr loop_count,0	
tmode_loop:
	
	call	read_line ; read in entire line
	call	print_line ; send to printer
	call	lfcr
	call	break?
			 
	mov	al,loop_count
	inc	al
	mov	loop_count,al
	cmp	al,MAX_LINES
	jnz	tmode_loop

	call	reset_cursor
	jmp	done

reset_cursor:	
	mov	dx,cursor_pos	; restore cursor
	mov	bh,video_page
	mov	ah,2
	int	10h
	
	mov	tmode_flag,FALSE

	ret

do_text_mode	endp


last	dw	0	; this marks end of resident code.
			; DON'T put anything below here you expect to use
			; after initialization.

buffer	db	'        TOSHIBA(tm) P1340, P1351, P351',13,10
	db	'            Screen Printer  v 1.1',13,10,10
	db	' ==>            Graphics Mode:',13,10
	db	'      Right Shift PrtSc = small graphics',13,10
	db	'      Left Shift PrtSc = LARGE GRAPHICS',13,10
	db	' ==>              Text Mode:',13,10
	db	'    Right Shift PrtSc = quick screen print',13,10
	db	'Left Shift PrtSc = extended characters printed',13,10,10
	db	'    ESCape will exit at the end of a line.',13,10,'$'
werehere db	' ** TOSHIBA.COM is already resident **',13,10,10
	db	' There is no need to reinstall.',13,10,'$'
initr	proc	far
initial:
	mov	ax,0	; get addr of
	mov	ds,ax	; print screen routine
	mov	si,14h	; in rom
	mov	ax,[si] ; from interrupt table in ram
	inc	si
	inc	si
	mov	dx,[si]

	mov	word ptr cs:old_print_routine,ax
	mov	word ptr cs:old_print_routine+2,dx
	mov	cx,offset last-offset start
	mov	di,ax
	mov	si,offset start
	cmp	dx,0efffh	; if routine points to ROM, ours is not it.
	ja	initok
	cmp	si,di
	jne	initok		; if start location not same, it can't be ours.

	; otherwise check to see if this routine is

	mov	es,dx		; already in memory, and don't reinstall if so.
	mov	ax,cs
	mov	ds,ax
	repe	cmpsb


	or	cx,cx		; cx=0 means there is a copy of this at the
	jnz	initok		; other address.
	mov	dx,offset werehere
	mov	ah,9		; so we print a message and
	int	21h		; abort.
	int	20h
initok:

;	 mov	 ds,ax
;	 mov	 al,0f1h ; move it to
;	 mov	 ah,25h
;	 int	 21h	 ; int f1h described in tech. manual as unused vector
	mov	ax,cs	; reset int 5
	mov	ds,ax	; to point to
	mov	ax,offset start ; this routine
	mov	dx,ax
	mov	al,5
	mov	ah,25h	; dos routine to reset int. vector
	int	21h
	mov	ax,offset buffer
	mov	dx,ax
	mov	ah,9
	int	21h	; print greeting
	mov	ax,3000h  ; get dos version
	int	21h
	or	al,al
	jz	dos1
	mov	ax,offset last
	mov	cx,16
	xor	dx,dx
	div	cx
	inc	ax	; make number of paragraphs
	mov	dx,ax
	mov	al,0	; exit code
	mov	ah,31h	; terminate process, keep resident
	int	21h

dos1:
	mov	dx,offset last	; last address here
	inc	dx
	int	27h	; terminate but stay resident
initr	endp
cseg	ends
	end	init

```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0033

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
