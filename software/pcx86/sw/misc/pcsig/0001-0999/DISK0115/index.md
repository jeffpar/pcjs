---
layout: page
title: "PC-SIG Library Disk #115"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0115/
machines:
  - id: ibm5150
    type: pcx86
    config: /machines/pcx86/ibm/5150/cga/256kb/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk 0115"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5150" %}

{% comment %}info_begin{% endcomment %}

## Information about "DOS UTILITIES NO 6"

    The programs on this disk include a very handy file-compression utility,
    another to suppress the color signal when using a mono monitor, a very
    interesting wave-form drawing utility (requires an 8087 chip),
    and other useful programs.
    
    System Requirements: Some programs require color graphics & BASIC.
    
    How to Start: To run a COM or EXE program simply type its name and
    press <ENTER>.  For instructions on running BASIC programs, please
    refer to the GETTING STARTED section in this catalog.  To read DOC
    files simply enter TYPE filename.ext and press <ENTER>.
    
    Suggested Registration:  Contact authors.
    
    File Descriptions:
    
    DSKHND   BAS  Disk handler program from October Softalk
    123KEY   DOC  Documentation file for 123KEY.PRO
    123KEY   BAT  Batch file to run LOTUS 123 with PROKEY
    123KEY   PRO  PROKEY file to enable numeric keypad with LOTUS 123
    DHDEMO   BAS  Demo program for DSKHND.BAS
    NOCOLOR  ASM  Suppress color for using mono monitor on C/G adapter
    FREE     DOC  Catalog of user-supported software
    SURF87   EXE  Produces wave forms on graphics printer  (Requires 8087)
    SURF87   DOC  Documentation file for SURF87.EXE
    SURFPR   BAS  Printer installation program for SURF87.EXE
    SQUEEZE  EXE  File compression program
    UNSQUEEZ EXE  Uncompress program
    SQUSQ    DOC  Documentation file for SQUEEZ.EXE and UNSQUZ.EXE
    NOCOLOR  COM  Executable program file
    SCROLL   BAS  Scroll window program from PC Magazine, Oct 83, page 650
    NOCOLOR  DOC  Documentation file for NOCOLOR.COM
    PINUP?   PIC  Pinup picture;  COPY to LPT1:  (4 files)
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## DHDEMO.BAS

```bas
10 'This program demonstrates Disk Handler
20 'from the October Issue of SofTalk, p. 72.
30 'Written by Howard Glosser
40 'Define SEGMENT and Load DISKHAND.BIN
50 'CLEAR,32768 ' This line is necessary only for 64K machines.
60 DEF SEG=&H1700 ' Use DEF SEG=&HF00 with machines with less then 96K.
70 BLOAD "DISKHAND.BIN",0
80 DISK%=0
90 CLS
100 LOCATE 1,5:PRINT" ** Disk Handler Demonstration **":PRINT
110 '
120 'Find Default Drive
130 '
140 FIND%=1:SET%=2:DISKPARM$=SPACE$(1)
150 PRINT"Find the Default Drive"
160 DISKOPT%=FIND%
170 PRINT"*** Subroutine Call"
180 CALL DISK% (DISKOPT%,DISKPARM$):SAVDRV$=DISKPARM$
190 PRINT"Got back and DEFAULT DRIVE is "CHR$(34)DISKPARM$ CHR$(34)
200 PRINT
210 '
220 'Set default drive
230 '
240 PRINT"Now let's set a new default drive":LOCATE ,,1:BEEP:PRINT
250 PRINT"Specify NEW default drive letter (A B C D:";:GOSUB 460
260 DISKPARM$=KY$:DISKOPT%=SET%
270 PRINT"*** Subroutine Call"
280 CALL DISK% (DISKOPT%,DISKPARM$)
290 PRINT"Return from subroutine and new default should be set"
300 '
310 ' ** Find out if it really changed
320 '
330 PRINT
340 PRINT"Find out if default drive really changed"
350 DISKOPT%=FIND%
360 PRINT"*** Subroutine Call"
370 CALL DISK% (DISKOPT%,DISKPARM$)
380 IF DISKPARM$<>SAVDRV$ THEN 420
390 SOUND 50,7:COLOR 0,7
400 PRINT"Default drive NOT changed. Invalid or same drive letter specified!"
410 COLOR 6,1:GOTO 440
420 PRINT"It's changed! The default drive is now "CHR$(34)DISKPARM$ CHR$(34)
430 SOUND 500,1:SOUND 400,1
440 END
450 '
460 '  **** Key-In Routine
470 '
480 KY$=INKEY$:IF KY$="" THEN 480
490 '
500 ' Check for small or capital letters
510 '
520 IF KY$<CHR$(97) OR KY$>CHR$(122) THEN 570
530 '
540 '  ** Change lowercase to uppercase
550 '
560 KY$=CHR$(ASC(KY$)-32)
570 '
580 PRINT KY$
590 RETURN
600 END' of program.
```

## DSKHND.BAS

```bas
10 '***** Disk Handler *****  from the October, 1983 issue of SofTalk, p.71.
20 '
30 'FIND or SET the default drive in a BASIC program.
40 '
50 'Written by Howard Glosser
60 'DEF SEG=&H1700. Use DEF SEG &HF00 for machine with LESS then 96K.
70 '
80 'This builds and checks the subroutine.
90 '
100 CLS
110 DEF SEG=&H1700' Use DEF SEG &HF00 for machine with LESS then 96K.
120 FOR MEM%=0 TO 66
130 READ DT%
140 POKE MEM%,DT%
150 CHECKSUM%=CHECKSUM%+DT%
160 NEXT
170 READ DT%
180 IF CHECKSUM%=DT% THEN 230
190 PRINT"Error in DATA Statements - Check lines 290 - 370":END
200 '
210 '******* This Saves the routine
220 '
230 BSAVE"DISKHAND.BIN",0,&H43
240 PRINT"Diskhandler routine created."
250 END
260 '
270 '***** DATA Statements to build routine
280 '
290 DATA &H55,&H8B,&HEC,&H8B,&H76,&H8,&H8B,&H14
300 DATA &H83,&HFA,&H1,&H74,&H8,&H83,&HFA,&H2
310 DATA &H74,&H10,&H90,&HEB,&H2A,&H90,&HB4,&H19
320 DATA &HCD,&H21,&HFE,&HC0,&H32,&HE4,&HC,&H40
330 DATA &HEB,&H15,&H90,&H8B,&H76,&H6,&H8B,&H7C
340 DATA &H1,&H8B,&H15,&H80,&HF2,&H40,&HFE,&HCA
350 DATA &HB4,&HE,&HCD,&H21,&HEB,&H9,&H90,&H8B
360 DATA &H7E,&H6,&H8B,&H75,&H1,&H88,&H4,&H5D
370 DATA &HCA,&H4,&H0,&H1D35
380 END' of program.
```

## SCROLL.BAS

```bas
10 ' SCROLL.BAS  -  Modified from the listing of DEMO.BAS on page 650 of
20 ' the October 1983 issue of "PC-Magazine"
30 '
40 CLEAR ,16000
50 DEFINT A-Z
60 FOR I = 1 TO 6
70   FOR J = 1 TO 10
80     READ X
90     TOT = TOT + X
100   NEXT
110   READ Y
120   IF TOT = Y THEN TOT = 0 : GOTO 160
130   BEEP
140   PRINT "Error in data statement #";1000 + 10 * (I - 1)
150   STOP
160 NEXT
170 RESTORE
180 DEF SEG = 16000 / 16
190 LOCAT = 0
200 FOR I = 1 TO 6
210   FOR J = 1 TO 10
220     READ X
230     POKE LOCAT,X
240     LOCAT = LOCAT + 1
250   NEXT
260   READ X
270 NEXT
280 BSAVE "SCROLL.BIN",0,60
290 CLS
300 PRINT "Subroutine file SCROLL.BIN created"
310 PRINT
320 PRINT "Hit ENTER for demo."
330 K$ = INKEY$
340 IF K$ < > CHR$(13) THEN 330
350 CLS
360 DEF SEG = 16000 / 16
370 BLOAD "SCROLL.BIN",0
380 FOR I = 1 TO 10
390   FOR J = 1 TO 16:PRINT "DEMO ";
400   NEXT
410 NEXT
420 OFFSET = 0
430 A = 7
440 B = 1
450 C = 0
460 D = 19
470 E = 22
480 F = 59
490 G = 32
500 FOR I = 1 TO 11
510   CALL OFFSET(A,B,C,D,E,F,G)
520   SOUND 32767,18
530 NEXT
540 IF A = 7 THEN A = 6 : GOTO 500
550 SOUND 32767,18
560 B = 0
570 C = 0
580 D = 19
590 E = 4
600 F = 59
610 CALL OFFSET(A,B,C,D,E,F,G)
620 SOUND 32767,18
630 B = 0
640 C = 5
650 D = 19
660 E = 9
670 F = 59
680 CALL OFFSET(A,B,C,D,E,F,G)
690 FOR I = 1 TO 5
700   B = 0
710   C = 5
720   D = 70 - (2 * I)
730   E = 4 + I
740   F = 68 + (2 * I)
750   CALL OFFSET(A,B,C,D,E,F,G)
760   SOUND 32767,18
770 NEXT
780 END
790 '
800 ' Note: Parameter requirements for SCROLL.BIN subroutine.
810 '
820 ' (All must be integer - explicitly or via DEFINT statement.)
830 '
840 ' OFFSET = Offset (from last DEF SEG) to beginning of routine
850 '          (wherever routine was loaded)
860 ' A      = "6" = "scroll up"
870 '        = "7" = "scroll down"
880 ' B      = number of lines to scroll
890 ' C,D    = row and column of upper left corner of "scroll window"
900 ' E,F    =  "   "    "    "  lower right corner of   "      "
910 ' G      = Attribute to be used on "blanked" lines
920 '
930 ' NOTES:
940 '  (1)   (C,D) and (E,F) are relative to (0,0)
950 '  (2)   None of the parameters are value checked by the subroutine,
960 '        so results of invalid parameters are unpredictable.
970 '  (3)   If B=0 then the entire window is "blanked"
980 '
1000 DATA 85,139,236,139,118,18,139,28,138,227,1267
1010 DATA 139,118,16,139,28,138,195,139,118,14,1044
1020 DATA 139,28,138,235,139,118,12,139,28,138,1114
1030 DATA 203,139,118,10,139,28,138,243,139,118,1275
1040 DATA 8,139,28,138,211,139,118,6,139,28,954
1050 DATA 138,251,179,0,205,16,93,202,14,0,1098
1060 END ' of program.
```

## SURFPR.BAS

```bas
10 DEFINT A-Z
20 I=0:J=0:BOX=0:X=0:Y=0:Z=0:REC=0:A$="":X$="":FS$="SURF87.EXE"
30 TRUE=-1:FALSE=0:B1=0:B2=0:B3=0:B4=0:ROW=0:COL=0:SURF$=SPACE$(32)+"SURFACE87"
40 DIM WORD(64),BYTE(128),FILE$(64),PCODE(20),PCODE$(32)
50 DEF SEG : POKE 106,0 : KEY OFF : KEY 10,""
60 FOR I=1 TO 32 : READ PCODE$(I) : NEXT
70 DATA soh,stx,etx,eot,enq,ack,bel,bs,ht,lf,vt,ff,cr,so,si,dle
80 DATA dc1,dc2,dc3,dc4,nak,syn,etb,can,em,sub,esc,fs,gs,rs,us,sp
90 GOTO 1000
100 ' open
110 ON ERROR GOTO 200
120 OPEN FS$ FOR INPUT AS #1
130 CLOSE #1
140 OPEN FS$ AS #1 LEN=128
150 FOR I=0 TO 63:FIELD #1,I*2 AS DUMMY$,2 AS FILE$(I) : NEXT
160 ON ERROR GOTO 0
170 RETURN
200 ' file error stuff
210 CLOSE
220 IF ERR=71 THEN PRINT "Disk not ready. Please try again." : RESUME
230 IF ERR=70 THEN PRINT "Disk is write protected. Please remove tab to write mods to disk." : RESUME
240 IF ERR=53 THEN PRINT "I can't find "+FS$+"." : GOSUB 250 : RESUME
245 GOTO 260
250 LINE INPUT "Please re-enter filename -->";FS$ : RETURN
260 IF ERR=75 OR ERR=76 THEN PRINT FS$+" has a PATH problem." : GOSUB 250 : RESUME
270 IF ERR=72 OR ERR=57 THEN PRINT "Sorry, can't seem to work with this disk" : ON ERROR GOTO 0 : END
280 ON ERROR GOTO 0
290 GOTO 500
300 'get record
310 ON ERROR GOTO 200
320 GET #1,REC
330 FOR I=0 TO 63 : WORD(I)=CVI(FILE$(I)) : NEXT
340 ON ERROR GOTO 0
350 RETURN
400 ' box b1,b2-b3,b4  --> top.row,top.col-bot.row,bot.col
405 ROW=CSRLIN:COL=POS(0)
410 LOCATE B1,B2,0 : PRINT CHR$(201); : PRINT STRING$(B4-B2-1,205);CHR$(187);
420 FOR BOX=B1+1 TO B3-1 : LOCATE BOX,B2 : PRINT CHR$(186);:LOCATE BOX,B4:PRINT CHR$(186); :NEXT
430 LOCATE B3,B2 : PRINT CHR$(200); : PRINT STRING$(B4-B2-1,205);CHR$(188);
440 LOCATE ROW,COL
450 RETURN
500 ' end
510 KEY 10,"SCREEN 0,0,0"+CHR$(13)
520 KEY ON
530 END
600 ' enter printer codes from keyboard.
610 LOCATE ,,1 : X=0 : ROW=CSRLIN : COL=POS(0)
620 I$="" : WHILE I$="" : I$=INKEY$ : WEND
630 IF I$=CHR$(0)+CHR$(68) THEN 700 ' finished
640 IF I$<>CHR$(0)+CHR$(83) THEN 650
645 X=X-1 : IF X<1 THEN X=0 : BEEP : LOCATE ROW,COL,1 : PRINT SPACE$(20); : LOCATE ROW,COL,1 : GOTO 620 ELSE 660
650 PCODE(X)=ASC(I$) : X=X+1 : IF X>15 THEN PRINT : PRINT "Only 16 allowed." : GOTO 700
660 LOCATE ROW,COL,1 : PRINT SPACE$(X*3+10); : LOCATE ROW,COL,1
670 FOR I=0 TO X-1 : IF PCODE(I)<33 THEN PRINT PCODE$(PCODE(I));" "; ELSE PRINT CHR$(PCODE(I));" ";
680 NEXT
690 GOTO 620
700 PRINT : PRINT "Is this correct (y/n)?"
710 I$=INKEY$ : IF I$="n" OR I$="N" THEN LOCATE ROW,COL : PRINT SPACE$(X*3+10);
720 IF I$="n" OR I$="N" THEN LOCATE ROW+1,COL : PRINT SPACE$(24); : LOCATE ROW,COL : GOTO 610
730 IF I$<>"y" AND I$<>"Y" THEN 710
740 RETURN
800 ' write a record
810 ON ERROR GOTO 200
820 FOR I=0 TO 63 : LSET FILE$(I)=MKI$(WORD(I)) : NEXT
830 PUT #1,REC
840 ON ERROR GOTO 0
850 RETURN
900 ' print codes in hex -- x=bytes,z=word(z)
910 A$=HEX$(WORD(Z)) : IF LEN(A$)=3 THEN B$="0"+LEFT$(A$,1) ELSE B$=LEFT$(A$,2)
920 PRINT B$+CHR$(32);
930 Y=X\2
940 FOR I=1 TO Y
950   A$=HEX$(WORD(I+Z))
960   IF LEN(A$)=1 THEN A$="000"+A$ ELSE IF LEN(A$)=2 THEN A$="00"+A$ ELSE IF LEN(A$)=3 THEN A$="0"+A$
970   PRINT RIGHT$(A$,2)+CHR$(32); : PRINT LEFT$(A$,2)+CHR$(32);
980 NEXT
990 Y=X MOD 2
995 IF Y=0 THEN ROW=CSRLIN : COL=POS(0) : LOCATE ROW,COL-3 : PRINT SPACE$(3);
996 PRINT
997 RETURN
1000 ' main
1010 CLS
1020 PRINT SURF$
1030 PRINT
1040 PRINT "                       Printer installation program"
1050 PRINT
1060 PRINT "                      (c) 1983 Martin R. Smith, Jr."
1070 PRINT
1080 PRINT "                        Press <enter> to continue.";
1090 LOCATE ,,1
1100 I$=INKEY$ : IF I$="" THEN 1100
1110 PRINT : PRINT : PRINT
1120 PRINT "Surface87 should work with most dot-matrix printers that have a bit-plot"
1130 PRINT "mode. It is set up to send 960 bytes to the EPSON(tm) series of printers"
1140 PRINT "with GRAFTRAX(tm) firmware."
1150 PRINT
1160 PRINT "In order to make it work with other printers, I need to know:"
1180 PRINT
1190 PRINT "         (1) The filename you have given SURF87."
1200 PRINT "         (2) The way your printer treats bit-plot bytes."
1210 PRINT "         (3) How to set the printer line-spacing to 8/72 inch."
1220 PRINT "         (4) How to make the printer treat the next 960 bytes as bit-plots."
1225 PRINT "         (5) How to return the line-spacing to normal."
1230 PRINT :PRINT "In order to begin, get your printer manual out and hit <enter>,"
1240 PRINT "or hit <x> to quit.";
1250 I$=INKEY$ : IF I$=CHR$(13) THEN 1300 ELSE IF I$="x" OR I$="X" THEN 500 ELSE 1250
1300 ' enter data
1310 CLS
1320 PRINT SURF$
1330 PRINT
1340 PRINT "Please enter the name you have given SURFACE87"
1350 LINE INPUT "<enter> alone will assume SURF87.EXE. -->";A$
1360 IF A$="" THEN 1380
1370 FS$=A$
1380 GOSUB 100
1400 REC=1 : GOSUB 300
1410 IF WORD(0)=&H5A4D THEN 1500
1420 PRINT "This is not an .EXE type file."
1430 PRINT "Please make sure you have HEX-CONVERTED your download and try again."
1440 GOTO 500
1500 REC=5 : GOSUB 300
1510 IF WORD(7)=&HFB4 AND WORD(56)=&H303C THEN 1600
1520 PRINT "I don't think this is SURFACE87."
1530 PRINT "This program modifies an existing file, and might cause problems"
1540 PRINT "with "+FS$+", so please check that you have specified the right"
1550 PRINT "file and try again."
1560 GOTO 500
1600 CLS
1610 PRINT SURF$ : PRINT SPACE$(32)+FS$ : PRINT
1620 PRINT "Dot matrix printers in bit-plot mode represent dots in two ways:"
1630 PRINT
1640 PRINT "      METHOD 1       PRINT HEAD WIRES         METHOD 2"
1650 PRINT "                           TOP"
1660 PRINT "       80h 128              o                  01h   1"
1670 PRINT "       40h  64              o                  02h   2"
1680 PRINT "       20h  32              o                  04h   4"
1690 PRINT "       10h  16              o                  08h   8"
1700 PRINT "       08h   8              o                  10h  16"
1710 PRINT "       04h   4              o                  20h  32"
1720 PRINT "       02h   2              o                  40h  64"
1730 PRINT "       01h   1              o                  80h 128"
1740 PRINT "                          BOTTOM"
1750 B1= 5:B2=45:B3= 7:B4=57:GOSUB 400
1760 B1= 5:B2= 5:B3= 7:B4=17:GOSUB 400
1770 B1= 5:B2= 5:B3=16:B4=17:GOSUB 400
1780 B1= 5:B2=45:B3=16:B4=57:GOSUB 400
1800 PRINT "Please enter the number of the method your printer uses. (1 or 2) ";
1810 LOCATE ,,1
1820 I$=INKEY$ : IF I$<>"1" AND I$<>"2" AND I$<>CHR$(27) THEN 1820
1830 IF I$=CHR$(27) THEN 500
1840 IF I$="1" THEN DOTHEAD=TRUE : DH$="TOP DOT = 128" ELSE DOTHEAD=FALSE : DH$="TOP DOT = 1"
1850 REC=61 : GOSUB 300
1860 IF DOTHEAD THEN WORD(0)=&H201:WORD(1)=&H804:WORD(2)=&H2010:WORD(3)=&H8040: GOTO 1900
1870 WORD(0)=&H4080:WORD(1)=&H1020:WORD(2)=&H408:WORD(3)=&H102
1900 CLS : PRINT SURF$ : PRINT SPACE$(32)+FS$ : PRINT SPACE$(32)+DH$ : PRINT
1910 PRINT "The next three items involve sending codes to the printer."
1920 PRINT
1930 PRINT "In order to make this as easy as possible, your keyboard will"
1940 PRINT "become a code generator.  Each key will be treated literally."
1950 PRINT
1970 PRINT "For example, say you need to send and ESCape to the printer."
1980 PRINT "Just hit the ESCape key, and I'll know what you mean."
1990 PRINT "If you need to send a number, hold down the ALT key, type"
2000 PRINT "the number on the numeric keypad, and then release the ALT key."
2010 PRINT "To send the letter 'A' or the letter '8', just type it in."
2020 PRINT
2030 PRINT "If you make a mistake, use the DEL key on the numeric keypad as a backspace."
2040 PRINT "When you are done, press the F10 - Function Key 10."
2050 PRINT
2060 PRINT "A table of ASCII codes for below 33 will be at the top of the"
2070 PRINT "screen to help."
2080 PRINT : PRINT "    Press <enter> when you are ready to begin."
2090 I$=INKEY$ : IF I$="" THEN 2090
2100 CLS : PRINT
2110 PRINT "   1 = soh    2 = stx    3 = etx    4 = eot    5 = enq    6 = ack    7 = bel "
2120 PRINT "   8 =  bs    9 =  ht   10 =  lf   11 =  vt   12 =  ff   13 =  cr   14 =  so "
2130 PRINT "  15 =  si   16 = dle   17 = dc1   18 = dc2   19 = dc3   20 = dc4   21 = nak "
2140 PRINT "  22 = syn   23 = etb   24 = can   25 =  em   26 = sub   27 = esc   28 =  fs "
2150 PRINT "  29 =  gs   30 =  rs   31 =  us   32 =  sp"
2160 B1=1:B2=1:B3=7:B4=78 : GOSUB 400
2170 PRINT
2180 PRINT "Enter your codes, using the DEL key as a backspace, the F10 key when done." : PRINT
2190 PRINT "First, I need the codes to set your printer to 8/72 inch."
2200 PRINT "Any other initial set-up code should go here."
2210 GOSUB 600
2220 IF X = 0 THEN 2310
2230 A$=HEX$(X) : IF LEN(A$)=1 THEN A$="0"+A$
2240 B$=HEX$(PCODE(0)) : CODE$="&H"+B$+A$
2250 WORD(8)=VAL(CODE$)
2260 FOR I=1 TO X STEP 2
2270   A$=HEX$(PCODE(I)) : IF LEN(A$)=1 THEN A$="0"+A$
2280   B$=HEX$(PCODE(I+1)) : CODE$="&h"+B$+A$
2290   WORD((I+1)\2+8)=VAL(CODE$)
2300 NEXT
2310 PRINT
2320 PRINT "Second, I need codes to print the next 960 bytes as bit plots."
2330 GOSUB 600
2340 IF X = 0 THEN 2430
2350 A$=HEX$(X) : IF LEN(A$)=1 THEN A$="0"+A$
2360 B$=HEX$(PCODE(0)) : CODE$="&H"+B$+A$
2370 WORD(24)=VAL(CODE$)
2380 FOR I=1 TO X STEP 2
2390   A$=HEX$(PCODE(I)) : IF LEN(A$)=1 THEN A$="0"+A$
2400   B$=HEX$(PCODE(I+1)) : CODE$="&h"+B$+A$
2410   WORD((I+1)\2+24)=VAL(CODE$)
2420 NEXT
2430 PRINT
2440 PRINT "Last, I need printer codes to reset things back to normal."
2445 PRINT "Then send two line feeds (chr$(10) or ^J) to advance paper to top of form."
2450 GOSUB 600
2460 IF X = 0 THEN 2550
2470 A$=HEX$(X) : IF LEN(A$)=1 THEN A$="0"+A$
2480 B$=HEX$(PCODE(0)) : CODE$="&H"+B$+A$
2490 WORD(16)=VAL(CODE$)
2500 FOR I=1 TO X STEP 2
2510   A$=HEX$(PCODE(I)) : IF LEN(A$)=1 THEN A$="0"+A$
2520   B$=HEX$(PCODE(I+1)) : CODE$="&h"+B$+A$
2530   WORD((I+1)\2+16)=VAL(CODE$)
2540 NEXT
2550 PRINT
2600 CLS
2610 PRINT SURF$
2620 PRINT : PRINT FS$
2630 PRINT : PRINT DH$
2640 PRINT : PRINT "Codes to set line space to 8/72 inch (in hex):"
2650 X=WORD(8) AND 255 : Z=8
2660 GOSUB 900
2670 PRINT : PRINT "Codes to set up 960 bit-plot bytes:"
2680 X=WORD(24) AND 255 : Z=24
2685 GOSUB 900
2690 PRINT : PRINT "Codes to reset printer:"
2700 X=WORD(16) AND 255 : Z=16
2710 GOSUB 900
2720 PRINT : PRINT "Does everything look correct (y/n)?"
2730 LOCATE ,,1
2740 I$=INKEY$ : IF I$="n" OR I$="N" THEN 1600
2750 IF I$<>"y" AND I$<>"Y" THEN 2740
2760 GOSUB 800
2770 CLOSE #1
2780 PRINT : PRINT FS$+" has been installed with new printer codes!"
2790 GOTO 500
```

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk 0115

     Volume in drive A has no label
     Directory of A:\

    123KEY   BAT        31  12-11-83   4:09p
    123KEY   DOC      4166  12-11-83   4:09p
    123KEY   PRO       602  12-11-83   4:10p
    CRC      TXT      1499  11-09-84   2:37p
    CRCK4    COM      1536  10-21-82   7:54p
    DHDEMO   BAS      1859  12-11-83   4:01p
    DSKHND   BAS      1220  12-11-83   4:02p
    FREE     DOC     25694  12-11-83   3:23p
    NOCOLOR  ASM      3370  12-11-83   4:15p
    NOCOLOR  COM       256  12-11-83   4:17p
    NOCOLOR  DOC       506  12-11-83   4:16p
    PINUP1   PIC      6464  12-11-83   4:38p
    PINUP2   PIC     10489  12-11-83   4:39p
    PINUP3   PIC      7171  12-11-83   4:42p
    PINUP4   PIC      8285  12-11-83   4:40p
    SCROLL   BAS      2464   1-07-84   7:30p
    SQUEEZE  EXE     18432  12-11-83   3:43p
    SQUSQ    DOC      3162  12-13-83   8:27p
    SURF87   DOC      4358  12-13-83   8:31p
    SURF87   EXE      8576  12-11-83   2:50p
    SURFPR   BAS     10615  12-11-83   3:25p
    UNSQUEEZ EXE     15744  12-11-83   3:49p
           22 file(s)     136499 bytes
                           18432 bytes free
