---
layout: page
title: "PC-SIG Diskette Library (Disk #285)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0285/
machines:
  - id: ibm5160
    type: pcx86
    config: /machines/pcx86/ibm/5160/cga/256kb/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0285"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5160" %}

{% comment %}info_begin{% endcomment %}

## Information about "WIZARD SCREEN"

    The WHIZZARD Screen I/O Routines are designed to allow maximum
    performance on the IBM PC.  They can be called from BASIC to increase
    the speed at which text goes to the screen.  Some of the routines will
    NOT work properly on non-IBM PCs.  In particular, the pieces that
    increase print speed for the BASIC Interpreter (See Item 3, below)
    will not operate properly with non-IBM versions of BASIC.  Try the
    software.  If it works on your configuration, great.  If not, the
    source code is on the diskette.
    
    The software on this diskette can be divided:
    
    (1)  WHIZZARD Screen I/O Subroutines. These can be called from BASIC
    to increase the speed at which text gets to the screen.
    (2)  A rational approach to calling assembly routines in BASIC code.
    This approach allows one source version for both interpreter and
    compiler input. The example uses Whizzard Screen I/O Subroutines,
    but any useful assembly routines can be added.
    (3)  Software to accelerate the PRINT statement for interpreted BASIC
    WITHOUT changing the BASIC source code.
    (4)  Software to accelerate the PRINT statement for compiled BASIC
    that uses BASRUN.EXE.  Source code is NOT changed.
    (5)  Software to accelerate the PRINT statement for BASIC compiled /O.
    Source code is NOT changed.
    (6)  Software to demonstrate BASPRINT, COMPRINT, PRSLASHO and ASMBASIC
    (7)  Patch to DOS 2.0  DEBUG  TRACE command to prevent collision between
    external interrupts (like the timer) and the TRACE command
    (8)  Software to allow editing or printing of the source and text files
    shown above despite the presence of tab characters
    
    How to Start: Consult the .DOC and .TXT files for directions and
    documentation.  To run the BASIC programs, consult the directions in
    GETTING STARTED for your configuration.
    
    Suggested Registration:  $5.00
    
    File Descriptions:
    
    XREP     ASM  Repeat some character along the x axis
    YREP     ASM  Repeat some character down the y axis
    BASPRINT ASM  Source to primary module
    PRSLASHO ASM  Source to primary module
    COMPRINT ASM  Source to primary module
    ASMBASIC ASM  Source to primary module
    ZPRINT   ASM  Print a string using the color/attribute given
    SCRLUP   ASM  Scroll some portion of the screen up
    QPRINT   ASM  Quickly print a string at the current location
    CLREOS   ASM  Clear from the current position to the end of the screen
    CLREOL   ASM  Clear from the current position to the end of the line
    BANDDEMO BAS  Source to graphic demo program showing the enhancement
    TIMEDEMO BAS  Source to timing program demonstrating improvement
    DETAB    BAS  Interpreted BASIC program to remove tabs
    SCRLDN   ASM  Scroll some portion of the screen down
    LONGDEMO BAT  Demonstrates all three modules and QPRINT from ASM BAS
    SUBDEMO  BAS  Interpreted BASIC program demonstrating ASMBASIC
    PRSLASHO EXE  Module to be executed after booting the system
    EASYDEMO BAT  BAT file demonstrating compiled routines using PRSLOASHO
    SUBDEMO  EXE  Compiled program
    BANDDEMO EXE  BASIC graphic demo program compiled with the I/O option
    DEBUG20  FIX  PIPELINE input file which can be used to apply the
    ASMBASIC EXE  Sample executable linked with the I/O subroutines
    BASPRINT EXE  Module to be executed after booting the system
    COMPRINT EXE  Module to be executed after booting the system
    ???      OBJ  Object code for .BAS files of the same name (9 files)
    ASMBASIC TXT  How to call assembly routines in BASIC
    SCRNIO   TXT  Explanation of acceleratiing the PRINT statement
    DEBUGFIX TXT  Explanation of the patch to DOS 2.0 DEBUG  TRACE command
    README   TXT  Description of programs
    ??SLASHO BAT  Batch file to compile programs
    BANDNOO  EXE  Basic program
    TIMEPRIN FIL  Information on compiling times
    CLUBWARE DSC  Information on Clubware Software
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## BANDDEMO.BAS

```bas
10  REM
20  REM BANDDEMO      date: June 16, 1984
30  REM
40  REM Demonstrate advantages of ASMBASIC versus standard BASICA print
50  REM statements.
60  REM
70  REM This program is written for running under BASICA version 2.0,
80  REM with Rayhawk Automation NW  ASMBASIC.EXE previously executed to
90  REM provide assembler interfaces to the IBM PC ROM screen drivers.
100 REM
110 REM Throughput is demonstrated to speed up by a factor of 5 by
120 REM bypassing the BASIC PRINT statement.  Using Rayhawk Automation
130 REM BASPRINT.EXE the same result can be accomplished for interpreted
131 REM BASIC programs.
132 REM
133 REM ****** The real program starts at 2000
135 REM
140 REM If your program just uses PRINT statements just execute
142 REM
144 REM BASPRINT.EXE for interpreted BASIC on the IBM
148 REM COMPRINT.EXE for compiled BASIC, compiled without the /O option
152 REM PRSLASHO.EXE for compiled BASIC, compiled with the /O option
160 REM
162 REM If your interpreted program uses the QPRINT subroutine from ASMBASIC
164 REM then lines 190 and 250 to 860 must be executed in your program.
166 REM ASMBASIC.EXE must be run once every time you boot, ( use AUTOEXEC.BAT),
168 REM the PC.  Then it will be in memory ready to be used by your program.
170 REM If your compiled program uses the QPRINT subroutine then link it using
172 REM QPRINT.OBJ.  This is supplied with the diskette so that you do not need
174 REM the assembler to process QPRINT.ASM.
178 REM
180    DIM A$(20),T$(20)
190    DEFINT S,I
192    DIM IIA(40)
200    KEY OFF
210	FOR I = 1 TO 10
220	   KEY I,""
230	NEXT I
240 REM
242 REM Determine whether we are running compiled or interpreted
244 REM 	     FLAG% = 0	 if interpreted
246 REM 	     FLAG% = 1	 if compiled without /O (needs BASRUN.EXE)
247 REM 	     FLAG% = 2	 if compiled with /O
248 REM 	     FLAG% = 3	 if business basic compiled
249 REM
250   DEF SEG
260   TEST$ = "K"
270   A% = VARPTR(TEST$)
280    B% = PEEK(A%+1) + 256*PEEK(A%+2)
290	 IF CHR$(PEEK(B%)) = "K" THEN FLAG% = 0 : GOTO 360
300    B% = PEEK(A%+2) + 256*PEEK(A%+3)
310	 IF CHR$(PEEK(B%)) <> "K" THEN FLAG% = 3 : GOTO 880
312	  WIDTH 80 : IF PEEK(&H7CC) = 80 THEN FLAG% = 1   ELSE FLAG% = 2
320	   GOTO 880
330 REM
340 REM If interpreted, check that ASMBASIC is resident below the interpreter
350 REM
360  DEF SEG = 0
370  A% = PEEK(&H19C) + 256*PEEK(&H19D) : B% = PEEK(&H19E) + 256*PEEK(&H19F)
380	DEF SEG = B%
390	IF (PEEK(A%-1) = &H52) AND (PEEK(A%-2) = &H52) THEN ASM%=1:GOTO 470
400	  CLS : PRINT TAB(85);"ASMBASIC must be executed once before starting"
410		PRINT TAB(15);"the Basic interpreter"
420	  ASM% = 0
430	  GOTO 880
440 REM
450 REM If interpreted, then get the segment and offset of the utility routines
460 REM
470    DEF SEG
480    DIM INIT%(3)	       ' setup subroutine containing  INT  67h
490    INIT%(1) = &H67CD       '                              RETF 2
500    INIT%(2) = &H2CA
510    INIT%(3) = 0
520    SUBINIT = 0
530 REM
540 REM 	    get the code segment of the utility subroutines
550  SEGVALUE% = 0
560    SUBINIT = VARPTR(INIT%(1)): CALL SUBINIT(SEGVALUE%)
570 REM
580 REM 	    get the offset of the utility subroutines
590  A% = 1
600    SUBINIT = VARPTR(INIT%(1)):CALL SUBINIT(A%)
610	 QPRINT = A%
620  A% = 2
630    SUBINIT = VARPTR(INIT%(1)):CALL SUBINIT(A%)
640	 SCRLDN = A%
650  A% = 3
660    SUBINIT = VARPTR(INIT%(1)):CALL SUBINIT(A%)
670	 SCRLUP = A%
680  A% = 4
690    SUBINIT = VARPTR(INIT%(1)):CALL SUBINIT(A%)
700	 XREP = A%
710  A% = 5
720    SUBINIT = VARPTR(INIT%(1)):CALL SUBINIT(A%)
730	 YREP = A%
740  A% = 6
750    SUBINIT = VARPTR(INIT%(1)):CALL SUBINIT(A%)
760	 CLREOL = A%
770  A% = 7
780    SUBINIT = VARPTR(INIT%(1)):CALL SUBINIT(A%)
790	 CLREOS = A%
800  A% = 8
810    SUBINIT = VARPTR(INIT%(1)):CALL SUBINIT(A%)
820	 ZPRINT = A%
830 REM
840 REM 	    set the segment value for interpreted basic
845 REM 	    this is used by BASIC for all interpreted CALLs to QPRINT,
848 REM 	    SCRLDN, etc. and must be valid prior to each such CALL.
850 REM
860	 DEF SEG = SEGVALUE%
870 REM
880 REM  define some attributes for use throughout the demo
890	 IF FLAG% = 0 THEN GOTO 930 ELSE DEF SEG
900	 ' check for comprint or prslasho, prslasho will be in the demo
910    '  if 40 lines take less than 2 seconds comprint or prslasho is here
915	 CLS   ' first initialize comprint or prslasho if compiled !!!!!!!
920	 STARTTIME$=TIME$
922	 FOR I = 1 TO 40:
923	   LOCATE 1,1:PRINT " TESTING IF COMPRINT OR PRSLASHO ARE PRESENT"
924	 NEXT I
927	 ENDTIME$ = TIME$
928	 GOSUB 2840: IF DIFTIME# < 2! THEN BASPRINT%=1 ELSE BASPRINT% = 0
929 GOTO 1000
930	 DEF SEG = 0  ' interpreted, check for basprint
940	 B02D0% = PEEK(&H2D0):B02D1%=PEEK(&H2D1):B02D2%=PEEK(&H2D2):B02D3%=PEEK(&H2D3)
950 '    PRINT " CHECKING FOR BASPRINT  0:02D0 = ";HEX$(B02D1%);" ";HEX$(B02D0%);" ";HEX$(B02D3%);" ";HEX$(B02D2%)
960	 IF B02D1% = 0 THEN BASPRINT% = 1 ELSE BASPRINT% = 0
962 ' if ASMBASIC has been run, then restore the DEF SEG value so ASMBASIC
964 ' routines can be used
970	 IF ASM% =1 THEN  DEF SEG = SEGVALUE% ELSE DEF SEG
980 REM
990 REM
1000	IF FLAG% = 0 THEN PRINT " INTERPRETED "
1010	IF FLAG% = 1 THEN PRINT " COMPILED WITHOUT /O, NEEDS BASRUN.EXE "
1012	IF FLAG% = 1 THEN PRINT " COMPILED WITH /O "
1020	IF FLAG% = 3 THEN PRINT " BUSINESS BASIC COMPILED "
1030	IF FLAG% = 0 AND ASM% = 0 THEN PRINT " ASMBASIC NOT PRESENT"
1040	IF FLAG% = 0 AND ASM% = 1 THEN PRINT " ASMBASIC PRESENT"
1050	IF FLAG% > 0 AND BASPRINT% = 0 THEN PRINT " COMPRINT OR PRSLASHO ARE NOT PRESENT "
1060	IF FLAG% > 0 AND BASPRINT% = 1 THEN PRINT " COMPRINT OR PRSLASHO ARE PRESENT"
1070	IF FLAG% = 0 AND BASPRINT% = 0 THEN PRINT " BASPRINT NOT PRESENT"
1080	IF FLAG% = 0 AND BASPRINT% = 1 THEN PRINT " BASPRINT PRESENT"
1095  ' while inkey$ <> "":wend
1100  ' input " enter to continue ";junk$
1110  ' CLS : LOCATE 4,4 : INPUT "Would you like the demonstration in color (Y/N)";AA$
1112	AA$="N"
1120	IF AA$ = "Y" OR AA$ = "y" THEN 1320
1130	IF AA$ <> "N" AND AA$ <> "n" THEN 1080
1140 REM
1150 REM	black and white attributes
1160 REM
1170	NORMAL%  = 7   ' normal intensity white on black
1180	BLUE%	 = 7
1190	GREEN%	 = 7
1200	CYAN%	 = 7
1210	RED%	 = 7
1220	MAGENTA% = 7
1230	BROWN%	 = 7
1240	YELLOW%  = 7
1250	WHITE%	 = 15  ' high intensity white on black
1260	LIGHTER% = 7
1270	BLINK%	 = 128
1280	    GOTO 1570
1290 REM
1300 REM	color attributes
1310 REM
1320	NORMAL%  = 7   ' normal intensity white on black
1330	BLUE%	 = 1
1340	GREEN%	 = 2
1350	CYAN%	 = 3
1360	RED%	 = 4
1370	MAGENTA% = 5
1380	BROWN%	 = 6
1390	YELLOW%  = 14
1400	WHITE%	 = 15  ' high intensity white on black
1410 REM
1420 REM  To make a color lighter, logically OR the LIGHTER% with
1430 REM    the color.
1440 REM	     Ex:      ATTRIBUTE% = RED% OR LIGHTER%
1450 REM    will give a light red color.
1460 REM
1470	       LIGHTER% = 8
1480 REM
1490 REM  To make a color blink, logically OR the BLINK% with
1500 REM    the color.
1510 REM	     Ex:      ATTRIBUTE% = RED% OR BLINK%
1520 REM    will give a blinking red color.
1530 REM
1540	       BLINK% = 128
1550 REM
1560 REM
1570 REM
1580 REM
1600 REM
2000 REM *************	The real program starts here
2010 REM
2015 REM Show how slow standard BASIC print statements are.
2020 REM Print A$(1) TO A$(5) in boxes, with origins in the array IIA(40)
2030 REM
2040 REM Then show how fast ASMBASIC routines QPRINT is.  This is also how
2050 REM fast BASPRINT makes the routines
2060 REM
2070 REM If BASPRINT is resident, then do not use A$(1) contents as STANDARD
2080 REM BASIC, use A$ to show how fast BASPRINT is.
2100 RESTORE 2110
2101 IWRITES = 11:IJ=0
2102 FOR I = 1 TO IWRITES:IJ=IJ+1:READ IIA(IJ):IJ=IJ+1:READ IIA(IJ):NEXT I
2110 DATA 7,27,1,1,1,27,1,55,7,55,13,55,19,55,19,27,19,1,13,1,7,1
2125 BLANKIT$=SPACE$(25)
2130 CLS
2135 AA$="HIT ANY KEY TO STOP THE DEMO"
2140 LOCATE 15,27:
2150 IF FLAG%>0 OR ASM% = 1 THEN CALL QPRINT (FLAG%, AA$)  ELSE PRINT AA$;
2190 IF FLAG% = 0 AND BASPRINT% = 0 THEN GOTO 2210
2200 IF FLAG% = 0 AND BASPRINT% = 1 THEN GOTO 3200
2205 IF FLAG% > 0 AND BASPRINT% = 1 THEN GOTO 4200
2206 IF FLAG% > 0 AND BASPRINT% = 0 THEN GOTO 5200
2210 '  interpreted with ASMBASIC present, but BASPRINT is not present
2220 '  this means slow slow BASIC print statements
2230 A$(1)="*************************"
2231 A$(2)="*   GET OFF THE SLOW    *"
2232 A$(3)="*    MERRY-GO-ROUND     *"
2233 A$(4)="* OF INTERPRETED BASIC  *"
2234 A$(5)="*   PRINT STATEMENTS    *"
2235 A$(6)="*************************"
2240 GOSUB 6000 ' use PRINT
2250 IF ASM% = 1 THEN GOSUB 2400 ' set up and use QPRINT if ASMBASIC has run
2255 IF INKEY$ <> "" THEN SYSTEM
2260 GOTO  2210 ' infinite loop
2400 ' SHOW HOW FAST ASMBASIC STATEMENTS ARE
2425 BLANKIT$=SPACE$(25)
2430 A$(1)="*************************"
2431 A$(2)="*      GET ON THE       *"
2432 A$(3)="*      BANDWAGON        *"
2433 A$(4)="* WITH CLUBware ASMBASIC*"
2434 A$(5)="*    QPRINT STATEMENTS  *"
2435 A$(6)="*************************"
2440 IF FLAG% = 0 THEN ILOOP = 5 ELSE ILOOP = 10
2450 FOR IB = 1 TO ILOOP
2460  GOSUB 6200
2470 NEXT IB
2480 RETURN
2840 REM TIMING SUBROUTINE
2850 REM  inputs:  STARTTIME$
2860 REM	    ENDTIME$
2870 REM  output:  DIFTIME#	 time in seconds
2880   SHH#=VAL(LEFT$(STARTTIME$,2))
2890   EHH#=VAL(LEFT$(ENDTIME$,2))
2900   SSS#=VAL(RIGHT$(STARTTIME$,2))
2910   ESS#=VAL(RIGHT$(ENDTIME$,2))
2920   SMM#=VAL(MID$(STARTTIME$,4,2))
2930   EMM#=VAL(MID$(ENDTIME$,4,2))
2940   STIME#=SHH#*3600!+SMM#*60!+SSS#
2950   ETIME#=EHH#*3600!+EMM#*60!+ESS#
2960   DIFTIME#=ETIME#-STIME#
2970   IF DIFTIME# < 0! THEN DIFTIME#= DIFTIME# + 3600! * 24!
2980 RETURN
2990 REM
3200 ' SHOW HOW FAST BASPRINT SPEEDS UP INTERPRETED BASIC PRINT STATEMENTS
3225   BLANKIT$=SPACE$(25)
3230   A$(1)="*************************"
3231   A$(2)="* CLUBware BASPRINT.EXE *"
3232   A$(3)="*       speeds up       *"
3233   A$(4)="*    Interpreted BASIC  *"
3234   A$(5)="*     PRINTs 6 times    *"
3235   A$(6)="*************************"
3250   FOR IB = 1 TO 5
3260	 GOSUB 6000  ' use print statements around the screen
3270   NEXT IB
3280   IF ASM%=1 THEN GOSUB 2400 ' use QPRINT calls around the screen
3300   GOTO 3200 ' infinite loop
3310 REM
4200 ' SHOW HOW FAST PRSLASHO or COMPRINT SPEEDS UP COMPILED BASIC PRINTS
4225   BLANKIT$=SPACE$(25)
4230   A$(1)="*************************"
4231   A$(2)="* CLUBware PRSLASHO.EXE *"
4232   A$(3)="*       speeds up       *"
4233   A$(4)="*     Compiled BASIC    *"
4234   A$(5)="*     PRINTs 6 times    *"
4235   A$(6)="*************************"
4236   IF FLAG% = 1 THEN A$(2)="* CLUBware COMPRINT.EXE *"
4250   FOR IB = 1 TO 5
4260	 GOSUB 6000 ' use print statements around the screen
4262   IF INKEY$ <> "" THEN SYSTEM
4270   NEXT IB
4275   GOSUB 2400   ' use QPRINT statements around the screen
4285   IF INKEY$ <> "" THEN SYSTEM
4300   GOTO 4200 ' infinite loop
4310 REM
5200 ' compiled BASIC, COMPRINT or PRSLASHO not present.
5220 ' this means slow slow BASIC print statements
5230   A$(1)="*************************"
5231   A$(2)="*   GET OFF THE SLOW    *"
5232   A$(3)="*     MERRYGOROUND      *"
5233   A$(4)="*   OF COMPILED BASIC   *"
5234   A$(5)="*   PRINT STATEMENTS    *"
5235   A$(6)="*************************"
5240   GOSUB 6000 ' use PRINT
5250   GOSUB 2400 ' set up and use QPRINT
5255   IF INKEY$ <> "" THEN SYSTEM
5260 GOTO  5200 ' infinite loop
5270 REM
6000 REM  ' use standard BASIC PRINT statements - slow, slower, slowest
6036   FOR I = 1 TO IWRITES
6040	 IROW = IIA(I+I-1)
6050	 ICOL = IIA(I+I)
6060	 FOR IJ = 1 TO 6:LOCATE IROW,ICOL:PRINT A$(IJ);:IROW = IROW+1:NEXT IJ
6080	 IK = I-1
6090	 IF I = 1 THEN IK = IWRITES
6092	 IF I = 2 THEN GOTO 6150 ' leave the center statement
6100	 IROW = IIA(IK+IK-1)
6110	 ICOL = IIA(IK+IK)
6120	 FOR IJ = 1 TO 6:LOCATE IROW,ICOL:PRINT BLANKIT$;:IROW = IROW+1:NEXT IJ
6142	 IF INKEY$ <> "" THEN SYSTEM
6150   NEXT I
6160 RETURN
6170 REM
6200 REM  ' use ASMBASIC QPRINT statements
6236   FOR I = 1 TO IWRITES
6240	 IROW = IIA(I+I-1)
6250	 ICOL = IIA(I+I)
6254	 FOR IJ = 1 TO 6:LOCATE IROW,ICOL:CALL QPRINT (FLAG%, A$(IJ)):IROW=IROW+1:NEXT IJ
6280	 IK = I-1
6290	 IF I = 1 THEN IK = IWRITES
6292	 IF I = 2 THEN GOTO 6350 ' leave the center statement
6300	 IROW = IIA(IK+IK-1)
6310	 ICOL = IIA(IK+IK)
6320	 FOR IJ = 1 TO 6:LOCATE IROW,ICOL:CALL QPRINT (FLAG%, BLANKIT$):IROW=IROW+1:NEXT IJ
6342	 IF INKEY$ <> "" THEN SYSTEM
6350   NEXT I
6360 RETURN
```

## DETAB.BAS

```bas
10   KEY OFF
30   CLS
40   PRINT "This program removes tabs from files"
45 REM
50     INPUT; "What is the name of the input file containing tabs: ",NM$
60	 PRINT " "
70	  OPEN NM$ FOR INPUT AS 2
80     INPUT; "What is the name of the output file: ",OUTNM1$
90	 PRINT " "
100	  IF NM$ <> OUTNM1$ THEN 120
110	    PRINT "The output file must have a different filename" : GOTO 80
120	  OPEN OUTNM1$ FOR OUTPUT AS 1
290 REM
300	    WHILE ( NOT EOF(2) )
310	       LINE INPUT# 2,INPFILE$
320 REM
360		  HASTABS = INSTR(INPFILE$,CHR$(9))
370		  WHILE HASTABS
380		     BLANKFILL% = 9 - HASTABS MOD 8
390		     IF BLANKFILL% = 9 THEN BLANKFILL% = 1
400		     TEMP$ = MID$(INPFILE$,1,HASTABS-1)
410		     TEMP$ = TEMP$ + SPACE$(BLANKFILL%)
420		     INPFILE$ = TEMP$ + MID$(INPFILE$,HASTABS+1)
430		     HASTABS = INSTR(INPFILE$,CHR$(9))
440		  WEND
450 REM
470	       PRINT #1,INPFILE$
480	    WEND
485 REM
490	 PRINT "detab completed"
500	 CLOSE# 1,2
520 REM
```

## SUBDEMO.BAS

```bas
10 REM
20 REM	Determine whether we are running compiled or interpreted
30 REM		    FLAG% = 0	if interpreted
40 REM		    FLAG% = 1	if compiled without /O (needs BASRUN.EXE)
45 REM		    FLAG% = 2	if compiled with /O
50 REM		    FLAG% = 3	if business basic compiled
60 REM
65 DEFINT I	  '   *****  this ISUBINIT will be an integer
70    KEY OFF
80	FOR I% = 1 TO 10
90	   KEY I%,""
100	NEXT I%
110 REM
120   DEF SEG
130   TEST$ = "K"
140   A% = VARPTR(TEST$)
150    B% = PEEK(A%+1) + 256*PEEK(A%+2)
160	 IF CHR$(PEEK(B%)) = "K" THEN FLAG% = 0 : GOTO 230
170    B% = PEEK(A%+2) + 256*PEEK(A%+3)
180	 IF CHR$(PEEK(B%)) <> "K" THEN FLAG% = 3 : GOTO 740
182	  WIDTH 80 : IF PEEK(&H7CC) = 80 THEN FLAG% = 1   ELSE FLAG% = 2
188	   GOTO 740
200 REM
210 REM If interpreted, check that ASMBASIC is resident below the interpreter
220 REM
230  DEF SEG = 0
240  A% = PEEK(&H19C) + 256*PEEK(&H19D) : B% = PEEK(&H19E) + 256*PEEK(&H19F)
250	DEF SEG = B%
260	IF (PEEK(A%-1) = &H52) AND (PEEK(A%-2) = &H52) THEN 330
270	  CLS : PRINT TAB(85);"ASMBASIC must be executed once before starting"
280		PRINT TAB(15);"the Basic interpreter"
290	  SYSTEM
300 REM
310 REM If interpreted, then get the segment and offset of the utility routines
320 REM
330    DEF SEG
340    DIM INIT%(3)	       ' setup subroutine containing  INT  67h
350    INIT%(1) = &H67CD       '                              RETF 2
360    INIT%(2) = &H2CA
370    INIT%(3) = 0
380    ISUBINIT = 0
390 REM
400 REM 	    get the code segment of the utility subroutines
410  SEGVALUE% = 0
420    ISUBINIT = VARPTR(INIT%(1)): CALL ISUBINIT(SEGVALUE%)
430 REM
440 REM 	    get the offset of the utility subroutines
450  A% = 1
460    ISUBINIT = VARPTR(INIT%(1)):CALL ISUBINIT(A%)
470	 QPRINT = A%
480  A% = 2
490    ISUBINIT = VARPTR(INIT%(1)):CALL ISUBINIT(A%)
500	 SCRLDN = A%
510  A% = 3
520    ISUBINIT = VARPTR(INIT%(1)):CALL ISUBINIT(A%)
530	 SCRLUP = A%
540  A% = 4
550    ISUBINIT = VARPTR(INIT%(1)):CALL ISUBINIT(A%)
560	 XREP = A%
570  A% = 5
580    ISUBINIT = VARPTR(INIT%(1)):CALL ISUBINIT(A%)
590	 YREP = A%
600  A% = 6
610    ISUBINIT = VARPTR(INIT%(1)):CALL ISUBINIT(A%)
620	 CLREOL = A%
630  A% = 7
640    ISUBINIT = VARPTR(INIT%(1)):CALL ISUBINIT(A%)
650	 CLREOS = A%
660  A% = 8
670    ISUBINIT = VARPTR(INIT%(1)):CALL ISUBINIT(A%)
680	 ZPRINT = A%
690 REM
700 REM 	    set the segment value for interpreted basic
710 REM
720	 DEF SEG = SEGVALUE%
730 REM
740 REM  define some attributes for use throughout the demo
750 REM
760    CLS : LOCATE 4,4 : INPUT "Would you like the demonstration in color (Y/N)";A$
770    IF A$ = "Y" OR A$ = "y" THEN 970
780    IF A$ <> "N" AND A$ <> "n" THEN 760
790 REM
800 REM 	black and white attributes
810 REM
820	NORMAL%  = 7   ' normal intensity white on black
830	BLUE%	 = 7
840	GREEN%	 = 7
850	CYAN%	 = 7
860	RED%	 = 7
870	MAGENTA% = 7
880	BROWN%	 = 7
890	YELLOW%  = 7
900	WHITE%	 = 15  ' high intensity white on black
910	LIGHTER% = 7
920	BLINK%	 = 128
930	    GOTO 1240
940 REM
950 REM 	color attributes
960 REM
970	NORMAL%  = 7   ' normal intensity white on black
980	BLUE%	 = 1
990	GREEN%	 = 2
1000	CYAN%	 = 3
1010	RED%	 = 4
1020	MAGENTA% = 5
1030	BROWN%	 = 6
1040	YELLOW%  = 14
1050	WHITE%	 = 15  ' high intensity white on black
1060 REM
1070 REM  To make a color lighter, logically OR the LIGHTER% with
1080 REM    the color.
1090 REM	     Ex:      ATTRIBUTE% = RED% OR LIGHTER%
1100 REM    will give a light red color.
1110 REM
1120	       LIGHTER% = 8
1130 REM
1140 REM  To make a color blink, logically OR the BLINK% with
1150 REM    the color.
1160 REM	     Ex:      ATTRIBUTE% = RED% OR BLINK%
1170 REM    will give a blinking red color.
1180 REM
1190	       BLINK% = 128
1200 REM
1210 REM
1220 REM  start by demonstrating XREP --------------------------------------
1230 REM
1240	CLS : INPUT "Type a carriage return for a countdown by subroutine XREP",A$
1250	 FOR I% = 9 TO 0 STEP -1
1260	       LOCATE 1,1
1270	       COUNT% = 2000	    ' write 2000 characters (full screen
1280	       LETTER$ = RIGHT$(STR$(I%),1)   ' letter to write is loop counter
1290 REM	  if user asks for a color display then use I% to set color
1300		  IF BLUE% = 1 THEN ATTRIBUTE% = I% + 1 ELSE ATTRIBUTE% = NORMAL%
1310	       CALL XREP( FLAG% , LETTER$ , COUNT% , ATTRIBUTE% )
1320	 NEXT I%
1330 REM
1340	CLS : LOCATE 2,1
1350	PRINT TAB(3);"XREP repeats a given character along the x axis"
1360	PRINT TAB(9);"The argument list for XREP includes the repetition count"
1370	PRINT TAB(9);"and color you want for the character.  The demonstration"
1380	PRINT TAB(9);"countdown is generated by a LOCATE 1,1 followed by a call"
1390	PRINT TAB(9);"to XREP with a repeat count of 2000 (25 lines times 80"
1400	PRINT TAB(9);"columns = 2000)."
1410	  LOCATE 10,20 : A$ = "A" : COUNT% = 40
1420	       CALL XREP( FLAG% , A$ , COUNT% , NORMAL% )
1430	  LOCATE 11,25 : A$ = "B" : COUNT% = 30
1440	       CALL XREP( FLAG% , A$ , COUNT% , NORMAL% )
1450	  LOCATE 12,30 : A$ = "C" : COUNT% = 20
1460	       CALL XREP( FLAG% , A$ , COUNT% , NORMAL% )
1470	  LOCATE 13,35 : A$ = "D" : COUNT% = 10
1480	       CALL XREP( FLAG% , A$ , COUNT% , NORMAL% )
1490	  LOCATE 14,39 : A$ = "E" : COUNT% = 2
1500	       CALL XREP( FLAG% , A$ , COUNT% , NORMAL% )
1510	  LOCATE 15,35 : A$ = "F" : COUNT% = 10
1520	       CALL XREP( FLAG% , A$ , COUNT% , NORMAL% )
1530	  LOCATE 16,30 : A$ = "G" : COUNT% = 20
1540	       CALL XREP( FLAG% , A$ , COUNT% , NORMAL% )
1550	  LOCATE 17,25 : A$ = "H" : COUNT% = 30
1560	       CALL XREP( FLAG% , A$ , COUNT% , NORMAL% )
1570	  LOCATE 18,20 : A$ = "I" : COUNT% = 40
1580	       CALL XREP( FLAG% , A$ , COUNT% , NORMAL% )
1590 REM
1600	LOCATE 20,5
1610	PRINT TAB(3);"Press ESC to repeat the XREP countdown.  Enter a carriage"
1620	PRINT TAB(3);"return to proceed to the next demonstration."
1630	X$ = INKEY$ : IF LEN(X$) = 0 THEN 1630
1640	IF X$ = CHR$(13) THEN 1700
1650	IF X$ = CHR$(27) THEN 1250 ELSE 1630
1660 REM
1670 REM
1680 REM  next demonstrate	YREP --------------------------------------
1690 REM
1700	CLS : LOCATE 2,2
1710	PRINT "Just as XREP repeats a character along the X axis"
1720	PRINT "YREP repeats a character down the Y axis.  For applications"
1730	PRINT "with vertical elements, this beats the tar out of a series"
1740	PRINT "of LOCATE:PRINT statment pairs."
1750	PRINT
1760	INPUT "Type a carriage return for a demonstration of subroutine YREP",A$
1770 REM
1780	CLS
1790	LOCATE 1,1 : LETTER$ = "A" : COUNT% = 25 : ATTRIBUTE% = NORMAL%
1800		     GOSUB 2310
1810	LOCATE 2,2 : LETTER$ = "B" : COUNT% = 23 : ATTRIBUTE% = BLUE%
1820		     GOSUB 2310
1830	LOCATE 3,3 : LETTER$ = "C" : COUNT% = 21 : ATTRIBUTE% = GREEN%
1840		     GOSUB 2310
1850	LOCATE 4,4 : LETTER$ = "D" : COUNT% = 19 : ATTRIBUTE% = CYAN%
1860		     GOSUB 2310
1870	LOCATE 5,5 : LETTER$ = "E" : COUNT% = 17 : ATTRIBUTE% = RED%
1880		     GOSUB 2310
1890   LOCATE 6,6 : LETTER$ = "F" : COUNT% = 15 : ATTRIBUTE% = MAGENTA%
1900		     GOSUB 2310
1910   LOCATE 7,7 : LETTER$ = "G" : COUNT% = 13 : ATTRIBUTE% = BROWN%
1920		     GOSUB 2310
1930   LOCATE 8,8 : LETTER$ = "H" : COUNT% = 11
1940		     ATTRIBUTE% = BLUE% OR LIGHTER%
1950		     GOSUB 2310
1960   LOCATE 9,9 : LETTER$ = "I" : COUNT% = 9
1970		     ATTRIBUTE% = GREEN% OR LIGHTER%
1980		     GOSUB 2310
1990   LOCATE 10,10 : LETTER$ = "J" : COUNT% = 7
2000		      ATTRIBUTE% = CYAN% OR LIGHTER%
2010		      GOSUB 2310
2020   LOCATE 11,11 : LETTER$ = "K" : COUNT% = 5
2030		      ATTRIBUTE% = RED% OR LIGHTER%
2040		      GOSUB 2310
2050   LOCATE 12,12 : LETTER$ = "L" : COUNT% = 3
2060		      ATTRIBUTE% = MAGENTA% OR LIGHTER%
2070		      GOSUB 2310
2080   LOCATE 13,13 : LETTER$ = "M" : COUNT% = 1
2090		      ATTRIBUTE% = BROWN% OR LIGHTER%
2100		      GOSUB 2310
2110   LOCATE 14,14 : LETTER$ = "N" : COUNT% = 24
2120		      ATTRIBUTE% = BLUE% OR BLINK%
2130		      GOSUB 2310
2140   LOCATE 15,15 : LETTER$ = "O" : COUNT% = 22
2150		      ATTRIBUTE% = GREEN%
2160		      GOSUB 2310
2170   LOCATE 16,16 : LETTER$ = "P" : COUNT% = 20
2180		      ATTRIBUTE% = CYAN%
2190		      GOSUB 2310
2200   LOCATE 17,17 : LETTER$ = "Q" : COUNT% = 18
2210		      ATTRIBUTE% = RED%
2220		      GOSUB 2310
2230   LOCATE 18,18 : LETTER$ = "R" : COUNT% = 16
2240		      ATTRIBUTE% = MAGENTA%
2250		      GOSUB 2310
2260   LOCATE 19,19 : LETTER$ = "S" : COUNT% = 14
2270		      ATTRIBUTE% = BROWN%
2280		      GOSUB 2310
2290   GOTO 2330
2300 REM
2310	 CALL YREP( FLAG% , LETTER$ , COUNT% , ATTRIBUTE% ) : RETURN
2320 REM
2330   LOCATE 2,30 : PRINT "Like XREP, the argument list for YREP includes the"
2340   LOCATE 3,30 : PRINT "repeat count and the color of the character."
2350   LOCATE 4,30 : PRINT "When a repeat count carries a character off the"
2360   LOCATE 5,30 : PRINT "bottom of the screen it wraps around to the top."
2370 REM
2380   LOCATE 7,30 : PRINT "Press ESC to repeat the YREP screen."
2390   LOCATE 8,30 : PRINT "  Enter a carriage return to proceed to"
2400   LOCATE 9,30 : PRINT "  the next demonstration."
2410   X$ = INKEY$ : IF LEN(X$) = 0 THEN 2410
2420   IF X$ = CHR$(13) THEN 2450
2430   IF X$ = CHR$(27) THEN 1780 ELSE 2410
2440 REM
2450 REM
2460 REM  next demonstrate     QPRINT --------------------------------------
2470 REM
2480   CLS : LOCATE 2,1
2490   PRINT TAB(3);"QPRINT will quickly print any string on the screen"
2500   PRINT TAB(9);"starting at the current location.  The cursor is then"
2510   PRINT TAB(9);"moved to just after the string.  Whatever color has been"
2520   PRINT TAB(9);"set by the BASIC COLOR statement will be used by QPRINT"
2530   PRINT TAB(9);"to print the string passed to it."
2540	PRINT
2550	INPUT "Type a carriage return to display a screen using subroutine QPRINT",A$
2560 REM
2562   CLS : LOCATE 2,20
2564	A$ = "This screen has been printed using QPRINT"
2566	CALL QPRINT( FLAG% , A$ )
2570   LOCATE 5,5
2580	A$ = "There are eight subroutines in the Basic Support Clubware Package"
2590	CALL QPRINT( FLAG% , A$ )
2600   LOCATE 7,10
2610	A$ = "XREP     - repeat a character along the X axis some number of times"
2620	CALL QPRINT( FLAG% , A$ )
2630   LOCATE 9,10
2640	A$ = "YREP     - repeat a character down the y axis some number of times"
2650	CALL QPRINT( FLAG% , A$ )
2660   LOCATE 11,10
2670	A$ = "QPRINT   - quickly print a string on the screen"
2680	CALL QPRINT( FLAG% , A$ )
2690   LOCATE 13,10
2700	A$ = "ZPRINT   - write a string to the screen using a special color attribute"
2710	CALL QPRINT( FLAG% , A$ )
2720   LOCATE 15,10
2730	A$ = "SCRLDN   - scroll some portion of the screen down"
2740	CALL QPRINT( FLAG% , A$ )
2750   LOCATE 17,10
2760	A$ = "SCRLUP   - scroll some portion of the screen up"
2770	CALL QPRINT( FLAG% , A$ )
2780   LOCATE 19,10
2790	A$ = "CLREOS   - clear screen from current position to end of page"
2800	CALL QPRINT( FLAG% , A$ )
2810   LOCATE 21,10
2820	A$ = "CLREOL   - clear screen from current position to end of line"
2830	CALL QPRINT( FLAG% , A$ )
2840 REM
2850   LOCATE 24,5
2860	A$ = "Press ESC to rewrite the screen using QPRINT.  Enter a carriage"
2870	CALL QPRINT( FLAG% , A$ )
2880   LOCATE 25,5
2890	A$ = "return to proceed to the next demonstration."
2900	CALL QPRINT( FLAG% , A$ )
2910	X$ = INKEY$ : IF LEN(X$) = 0 THEN 2910
2920	IF X$ = CHR$(13) THEN 2940
2930	IF X$ = CHR$(27) THEN 2570 ELSE 2910
2940 REM
2950 REM
2960 REM  next demonstrate     CLREOL and CLREOS ---------------------------
2970 REM
2980   CLS : LOCATE 2,1
2990   PRINT TAB(3);"CLREOL will clear from the current position to the"
3000   PRINT TAB(9);"end of the line and CLREOS will clear from the current"
3010   PRINT TAB(9);"position to the end of the screen.  Move the cursor using"
3020   PRINT TAB(9);"the cursor control keys (up ";CHR$(24);", down ";CHR$(25);
3030	      PRINT ", left ";CHR$(27);", right ";CHR$(26);") then"
3040   PRINT TAB(12);"press F1 to demonstrate CLREOL"
3050   PRINT TAB(12);"press F2 to demonstrate CLREOS"
3060 REM
3070   A$ = "ABCDEFGHIJ----------KLMNOPQRST----------"
3080   B$ = "----------1234567890----------1234567890"
3090	LOCATE 9,1
3100 REM
3110 REM       Use qprint to prevent unwanted scrolls when writing line 24, 25
3120 REM
3130	 FOR I% = 1 TO 8
3140	    PRINT A$; :  CALL QPRINT( FLAG% , B$ )
3150	    PRINT B$; :  CALL QPRINT( FLAG% , A$ )
3160	 NEXT I%
3170	    PRINT A$; :  CALL QPRINT( FLAG% , B$ )
3180 REM
3190	Y% = 15 : X% = 40
3200	LOCATE Y%,X%,1
3210	X$ = INKEY$ : IF LEN(X$) < 2 THEN 3210
3220	X$ = RIGHT$(X$,1)
3230	IF X$ = CHR$(59) THEN CALL CLREOL( FLAG% ) : GOTO 3370	'F1
3240	IF X$ = CHR$(60) THEN CALL CLREOS( FLAG% ) : GOTO 3370	'F2
3250	IF X$ = CHR$(72) THEN Y% = Y% - 1	   : GOTO 3320	'up
3260	IF X$ = CHR$(80) THEN Y% = Y% + 1	   : GOTO 3320	'down
3270	IF X$ = CHR$(75) THEN X% = X% - 1	   : GOTO 3300	'left
3280	IF X$ = CHR$(77) THEN X% = X% + 1	   : GOTO 3300	'right
3290	GOTO 3210
3300	IF X% < 1 THEN X% = 80 : ELSE IF X% > 80 THEN X% = 1
3310	GOTO 3200
3320	IF Y% < 9 THEN Y% = 25 : ELSE IF Y% > 25 THEN Y% = 9
3330	GOTO 3200
3340 REM
3350 REM  use xrep to clear the top 8 lines
3360 REM
3370   A$ = " " : COUNT% = 8 * 80  : ATTRIBUTE% = NORMAL%
3380	    LOCATE 1,1 : CALL XREP( FLAG% , A$ , COUNT% , ATTRIBUTE% )
3390   LOCATE 2,20 : PRINT "After clearing the requested portion of the screen"
3400   LOCATE 3,20 : PRINT "CLREOL and CLREOS will leave the cursor in its original"
3410   LOCATE 4,20 : PRINT "location."
3420   LOCATE 5,30 : PRINT "Press ESC to repeat the CLREOL/CLREOS demo."
3430   LOCATE 6,30 : PRINT "  Enter a carriage return to proceed to"
3440   LOCATE 7,30 : PRINT "  the next demonstration."
3450   X$ = INKEY$ : IF LEN(X$) = 0 THEN 3450
3460   IF X$ = CHR$(27) THEN 2980
3470   IF X$ = CHR$(13) THEN 3530 ELSE 3450
3480 REM
3490 REM
3500 REM
3510 REM  next demonstrate     ZPRINT, SCRLDN, SCRLUP  ---------------------
3520 REM
3530   CLS : LOCATE 2,1
3540   PRINT TAB(3);"ZPRINT will print a character string starting at the"
3550   PRINT TAB(9);"current location using the special color/attribute"
3560   PRINT TAB(9);"passed in."
3570   PRINT TAB(3);"This screen will also demonstrate SCRLUP/SCRLDN which"
3580   PRINT TAB(9);"allow any portion of the page to be scrolled up or"
3585   PRINT TAB(9);"down."
3590   PRINT
3600   INPUT "Type a carriage return to display a screen using subroutine ZPRINT",A$
3601   CLS
3602   GOSUB 5690  ' write instructions at bottom of screen
3603	A1$ = "1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1"
3604	A2$ = "2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2"
3605	A3$ = "3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3"
3606	A4$ = "4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4"
3607	A5$ = "5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5"
3608	A6$ = "6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6"
3609	A7$ = "7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7"
3610	A8$ = "8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8"
3611	A9$ = "9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9"
3612	AA$ = "A A A A A A A A A A A A A A A A A A A"
3613	AB$ = "B B B B B B B B B B B B B B B B B B"
3614	AC$ = "C C C C C C C C C C C C C C C C C"
3615	AD$ = "D D D D D D D D D D D D D D D D"
3616	AE$ = "E E E E E E E E E E E E E E E"
3619 REM
3620	GOSUB 5030   'clear the screen
3630	GOSUB 5390   'generate page1 on top half of screen
3650	GOTO  4000
3660 REM
3670	GOSUB 5030   'clear the screen
3680	GOSUB 5090   'generate page2 on bottom half of screen
3700	GOTO  4000
3710 REM
4000	X$ = INKEY$ : IF LEN(X$) = 0 THEN 4000
4005	IF LEN(X$) = 1 THEN IF X$ = CHR$(13) THEN 6000 : ELSE 4000
4010	X$ = RIGHT$(X$,1)
4020	IF X$ = CHR$(59) THEN		     GOTO 3620	'F1 page 1
4030	IF X$ = CHR$(60) THEN		     GOTO 3670	'F2 page 2
4040	IF X$ = CHR$(72) THEN  GOSUB 5830  : GOTO 4000	'scroll up
4050	IF X$ = CHR$(80) THEN  GOSUB 5890  : GOTO 4000	'scroll down
4060	GOTO 4000
4997 REM
4998 REM --start of subroutines used for ZPRINT demo-----
4999 REM
5000	REM
5010	REM  clear the top 19 lines using SCRLDN
5020	REM
5030	 X1% = 1 : Y1% = 1 : X2% = 80 : Y2% = 19 : COUNT% = 0
5040	     CALL SCRLDN( Y1% , X1% , Y2% , X2% , COUNT%)
5050	  RETURN
5060	REM
5070	REM  generate page2 in the bottom half of the screen
5080	REM
5090	PAGE% = 2
5095	A$ = "/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\"
5100	  LOCATE 11,10 : CALL ZPRINT ( FLAG% , A$ , BLUE% )
5110	A$ = CHR$(179) : COUNT% = 7
5120	  LOCATE 12,9  : CALL YREP ( FLAG% , A$ , COUNT% , BLUE% )
5130	A$ = CHR$(192) : COUNT% = 1
5140	  LOCATE 19,9  : CALL XREP ( FLAG% , A$ , COUNT% , BLUE% )
5150	A$ = CHR$(196) : COUNT% = 60
5160			 CALL XREP ( FLAG% , A$ , COUNT% , BLUE% )
5170	A$ = CHR$(217) : COUNT% = 1
5180			 CALL XREP ( FLAG% , A$ , COUNT% , BLUE% )
5190	A$ = CHR$(179) : COUNT% = 7
5200	  LOCATE 12,70 : CALL YREP ( FLAG% , A$ , COUNT% , BLUE% )
5220	  LOCATE 12,18 : CALL ZPRINT ( FLAG% , A7$ , YELLOW% )
5240	  LOCATE 13,17 : CALL ZPRINT ( FLAG% , A6$ , YELLOW% )
5260	  LOCATE 14,16 : CALL ZPRINT ( FLAG% , A5$ , YELLOW% )
5280	  LOCATE 15,15 : CALL ZPRINT ( FLAG% , A4$ , YELLOW% )
5300	  LOCATE 16,14 : CALL ZPRINT ( FLAG% , A3$ , YELLOW% )
5320	  LOCATE 17,13 : CALL ZPRINT ( FLAG% , A2$ , YELLOW% )
5340	  LOCATE 18,12 : CALL ZPRINT ( FLAG% , A1$ , YELLOW% )
5350	 RETURN
5360   REM
5370   REM  generate page1 in the top half of the screen
5380   REM
5390	PAGE% = 1
5395	A$ = "\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/"
5400	  LOCATE 10,10 : CALL ZPRINT ( FLAG% , A$ , RED% )
5410	A$ = CHR$(179) : COUNT% = 7
5420	  LOCATE  3,9  : CALL YREP ( FLAG% , A$ , COUNT% , RED% )
5430	A$ = CHR$(218) : COUNT% = 1
5440	  LOCATE  2,9  : CALL XREP ( FLAG% , A$ , COUNT% , RED% )
5450	A$ = CHR$(196) : COUNT% = 60
5460			 CALL XREP ( FLAG% , A$ , COUNT% , RED% )
5470	A$ = CHR$(191) : COUNT% = 1
5480			 CALL XREP ( FLAG% , A$ , COUNT% , RED% )
5490	A$ = CHR$(179) : COUNT% = 7
5500	  LOCATE  3,70 : CALL YREP ( FLAG% , A$ , COUNT% , RED% )
5520	  LOCATE  3,26 : CALL ZPRINT ( FLAG% , AE$ , YELLOW% )
5540	  LOCATE  4,25 : CALL ZPRINT ( FLAG% , AD$ , YELLOW% )
5560	  LOCATE  5,24 : CALL ZPRINT ( FLAG% , AC$ , YELLOW% )
5580	  LOCATE  6,23 : CALL ZPRINT ( FLAG% , AB$ , YELLOW% )
5600	  LOCATE  7,22 : CALL ZPRINT ( FLAG% , AA$ , YELLOW% )
5620	  LOCATE  8,21 : CALL ZPRINT ( FLAG% , A9$ , YELLOW% )
5640	  LOCATE  9,20 : CALL ZPRINT ( FLAG% , A8$ , YELLOW% )
5650	 RETURN
5660 REM
5670 REM   print instructions at the bottom of the screen
5680 REM
5690	A$ = "Type F1 to display page 1"
5700	  LOCATE  20,6 : CALL ZPRINT ( FLAG% , A$ , GREEN% )
5710	A$ = "Type F2 to display page 2"
5720	  LOCATE  21,6 : CALL ZPRINT ( FLAG% , A$ , GREEN% )
5730	A$ = "Type "+CHR$(24)+" to scroll the page up"
5740	  LOCATE  22,6 : CALL ZPRINT ( FLAG% , A$ , GREEN% )
5750	A$ = "Type "+CHR$(25)+" to scroll the page down"
5760	  LOCATE  23,6 : CALL ZPRINT ( FLAG% , A$ , GREEN% )
5770	A$ = "Type a carriage return to leave this demonstration screen"
5780	  LOCATE  24,6 : CALL ZPRINT ( FLAG% , A$ , GREEN% )
5790   RETURN
5800 REM
5810 REM  scroll page up a line
5820 REM
5830	 IF PAGE% = 2 THEN X1% = 10 : Y1% = 12 : X2% = 69 : Y2% = 18				      ELSE X1% = 10 : Y1% = 3 : X2% = 69 : Y2% = 9
5840	    COUNT% = 1 : CALL SCRLUP( Y1% , X1% , Y2% , X2% , COUNT%)
5850	RETURN
5860 REM
5870 REM  scroll page down a line
5880 REM
5890	 IF PAGE% = 2 THEN X1% = 10 : Y1% = 12 : X2% = 69 : Y2% = 18				      ELSE X1% = 10 : Y1% = 3 : X2% = 69 : Y2% = 9
5900	    COUNT% = 1 : CALL SCRLDN( Y1% , X1% , Y2% , X2% , COUNT%)
5910	RETURN
5997 REM
5998 REM ----end of subroutines used for ZPRINT demo-----
5999 REM
6000 REM
6010   CLS : LOCATE 2,1
6020   PRINT TAB(3);"This concludes the ASMBASIC demonstration program."
6025   PRINT
6030   PRINT TAB(9);"The program is stored on diskette in file SUBDEMO.BAS"
6040   PRINT TAB(9);"as a printable text file.  Some versions will however"
6050   PRINT TAB(9);"contain tab characters.  Refer to files DETAB.BAS and"
6060   PRINT TAB(9);"SETABS.EPS for help in eliminating the embedded tabs."
6063 REM
6064   IF FLAG% = 3 THEN SYSTEM 'nothing more to do for business basic
6065 REM
6066   PRINT
6070   IF FLAG% > 0 THEN GOTO 6200
6080   PRINT "You may use this program to demonstrate the BASPRINT module."
6090   PRINT "Execute BASPRINT.EXE, then use the BASIC interpreter to rerun"
6100   PRINT "BASDEMO.BAS .  Those portions of the demonstration screens"
6110   PRINT "generated by PRINT statements will then execute several times"
6120   PRINT "faster."
6130	SYSTEM
6140 REM
6200   IF FLAG% = 1 THEN GOTO 6240 ' already compiled without /O
6202   PRINT "You may use this program to demonstrate the PRSLASHO module."
6210   PRINT "Execute PRSLASHO.EXE, then rerun this compiled BASIC program."
6220   PRINT "Those portions of the demonstration screens generated by"
6230   PRINT "PRINT statements will then execute several times faster."
6240   PRINT
6250   PRINT "If you use the BASIC runtime module BASRUN.EXE, you "
6260   PRINT "can compile and link SUBDEMO.BAS without the /O option."
6270   PRINT "Then execute COMPRINT.EXE to speed up those portions of"
6280   PRINT "the demonstration screens generated by PRINT statements."
6340	SYSTEM
```

## TIMEDEMO.BAS

```bas
1  REM	TIMEDEMO.BAS	Measure time to print 10 long strings on a screen
2  REM			under varying conditions below
3  REM
4  REM	***** NOTE:  USE SUBDEMO.BAS for examples of how to use the routines
5  REM		     Because extra convoluted logic is used here.
6  REM
10 REM	Time QPRINT, PRINT under conditions below
20 REM	Interpreted Standard PRINT
30 REM	Interpreted PRINT with BASPRINT
40 REM	Interpreted QPRINT with ASMBASIC
50 REM	Compiled PRINT
60 REM	Compiled PRINT with COMPRINT or PRSLASHO
70 REM	Compiled QPRINT
80 REM	Compiled CLS versus CLREOS
90 REM	Make a random access file with	time to write the screen.
100 REM For each time cycle, read in the RA file, and display the times for
110 REM   each type of print, and display the number of times the screen has
120 REM   been written.
130 REM Determine whether we are running compiled or interpreted
140 REM 	     FLAG% = 0	 if interpreted
144 REM 	     FLAG% = 1	 if compiled without /O (needs BASRUN.EXE)
145 REM 	     FLAG% = 2	 if compiled with /O
150 REM 	     FLAG% = 3	 if business basic compiled
170 REM
180    DIM A$(20),T$(20)
190    DEFINT S,I
200    KEY OFF
210	FOR I = 1 TO 10
220	   KEY I,""
230	NEXT I
240 REM
250   DEF SEG
260   TEST$ = "K"
270   A% = VARPTR(TEST$)
280    B% = PEEK(A%+1) + 256*PEEK(A%+2)
290	 IF CHR$(PEEK(B%)) = "K" THEN FLAG% = 0 : GOTO 360
300    B% = PEEK(A%+2) + 256*PEEK(A%+3)
310	 IF CHR$(PEEK(B%)) <> "K" THEN FLAG% = 3 : GOTO 788
312	  WIDTH 80 : IF PEEK(&H7CC) = 80 THEN FLAG% = 1   ELSE FLAG% = 2
320	   GOTO 880
330 REM
340 REM If interpreted, check that ASMBASIC is resident below the interpreter
350 REM
360  DEF SEG = 0
370  A% = PEEK(&H19C) + 256*PEEK(&H19D) : B% = PEEK(&H19E) + 256*PEEK(&H19F)
380	DEF SEG = B%
390	IF (PEEK(A%-1) = &H52) AND (PEEK(A%-2) = &H52) THEN ASM%=1:GOTO 470
400	  CLS : PRINT TAB(85);"ASMBASIC must be executed once before starting"
410		PRINT TAB(15);"the Basic interpreter"
420	  ASM% = 0
430	  GOTO 880
440 REM
450 REM If interpreted, then get the segment and offset of the utility routines
460 REM
470    DEF SEG
480    DIM INIT%(3)	       ' setup subroutine containing  INT  67h
490    INIT%(1) = &H67CD       '                              RETF 2
500    INIT%(2) = &H2CA
510    INIT%(3) = 0
520    SUBINIT = 0
530 REM
540 REM 	    get the code segment of the utility subroutines
550  SEGVALUE% = 0
560    SUBINIT = VARPTR(INIT%(1)): CALL SUBINIT(SEGVALUE%)
570 REM
580 REM 	    get the offset of the utility subroutines
590  A% = 1
600    SUBINIT = VARPTR(INIT%(1)):CALL SUBINIT(A%)
610	 QPRINT = A%
620  A% = 2
630    SUBINIT = VARPTR(INIT%(1)):CALL SUBINIT(A%)
640	 SCRLDN = A%
650  A% = 3
660    SUBINIT = VARPTR(INIT%(1)):CALL SUBINIT(A%)
670	 SCRLUP = A%
680  A% = 4
690    SUBINIT = VARPTR(INIT%(1)):CALL SUBINIT(A%)
700	 XREP = A%
710  A% = 5
720    SUBINIT = VARPTR(INIT%(1)):CALL SUBINIT(A%)
730	 YREP = A%
740  A% = 6
750    SUBINIT = VARPTR(INIT%(1)):CALL SUBINIT(A%)
760	 CLREOL = A%
770  A% = 7
780    SUBINIT = VARPTR(INIT%(1)):CALL SUBINIT(A%)
790	 CLREOS = A%
800  A% = 8
810    SUBINIT = VARPTR(INIT%(1)):CALL SUBINIT(A%)
820	 ZPRINT = A%
830 REM
840 REM 	    set the segment value for interpreted basic
850 REM
860	 DEF SEG = SEGVALUE%
870 REM
880 REM  define some attributes for use throughout the demo
890    IF FLAG% = 0 THEN GOTO 930 ELSE DEF SEG
900	 ' check for comprint or prslasho, prslasho will be in the demo
910    '  if 100 lines take less than 3 seconds comprint is here
911    CLS ' initialize PRSLASHO or COMPRINT !!!!!!!!!!
920    STARTTIME$=TIME$
922    FOR I = 1 TO 100:
923	LOCATE 1,1:PRINT " TESTING IF COMPRINT OR PRSLASHO ARE PRESENT"
924    NEXT I
927    ENDTIME$ = TIME$
928    GOSUB 2840: IF DIFTIME# < 3! THEN BASPRINT%=1 ELSE BASPRINT% = 0
929 GOTO 1000
930    DEF SEG = 0  ' interpreted, check for basprint
940	 B02D0% = PEEK(&H2D0):B02D1%=PEEK(&H2D1):B02D2%=PEEK(&H2D2):B02D3%=PEEK(&H2D3)
950	 PRINT " CHECKING FOR BASPRINT  0:02D0 = ";HEX$(B02D1%);" ";HEX$(B02D0%);" ";HEX$(B02D3%);" ";HEX$(B02D2%)
960	 IF B02D1% = 0 THEN BASPRINT% = 1 ELSE BASPRINT% = 0
980    DEF SEG
990 REM
1000	IF FLAG% = 0 THEN PRINT " INTERPRETED, ASMBASIC.EXE SPEEDS UP PRINTS "
1010	IF FLAG% = 1 THEN PRINT " COMPILED WITHOUT /O, BASRUN.EXE NEEDED, COMPRINT.EXE SPEEDS UP PRINTS"
1015	IF FLAG% = 2 THEN PRINT " COMPILED WITH /O, BASRUN.EXE NOT NEEDED, PRSLASHO.EXE SPEEDS UP PRINTS"
1020	IF FLAG% = 3 THEN PRINT " BUSINESS BASIC COMPILED "
1030	IF FLAG% = 0 AND ASM% = 0 THEN PRINT " ASMBASIC NOT PRESENT"
1040	IF FLAG% = 0 AND ASM% = 1 THEN PRINT " ASMBASIC PRESENT"
1050	IF FLAG% = 1 AND BASPRINT% = 0 THEN PRINT " COMPRINT IS NOT PRESENT "
1052	IF FLAG% = 1 AND BASPRINT% = 1 THEN PRINT " COMPRINT IS PRESENT"
1054	IF FLAG% = 2 AND BASPRINT% = 0 THEN PRINT " PRSLASHO IS NOT PRESENT "
1060	IF FLAG% = 2 AND BASPRINT% = 1 THEN PRINT " PRSLASHO IS PRESENT"
1070	IF FLAG% = 0 AND BASPRINT% = 0 THEN PRINT " BASPRINT NOT PRESENT"
1080	IF FLAG% = 0 AND BASPRINT% = 1 THEN PRINT " BASPRINT PRESENT"
1090	IF ASM% =1 THEN  DEF SEG = SEGVALUE%
1095	INPUT " ENTER HOW MANY SECONDS YOU WANT THE DEMO TO LAST ";JUNK$
1096	IF JUNK$="" THEN SECDIV# = 1!:GOTO 1110
1100	NU$=""
1101	FOR I = 1 TO LEN(JUNK$)
1102	  TE$ = MID$(JUNK$,I,1)
1103	IF INSTR("0123456789",TE$) > 0 THEN NU$=NU$+TE$ ELSE NU$="":I=LEN(JUNK$)
1104	NEXT I
1105	IF LEN(NU$) > 0 THEN SECS#=VAL(RIGHT$(NU$,8)) ELSE BEEP:GOTO 1095
1106	SECDIV# = SECS#/100!
1107	IF SECDIV# < .05 THEN SECDIV# = .05   ' keep for loop indices in bounds
1108	IF SECDIV# > 100! THEN SECDIV# = 100!
1110	CLS : LOCATE 4,4 : INPUT "Would you like the demonstration in color (Y/N)";A$
1120	IF A$ = "Y" OR A$ = "y" THEN 1320
1130	IF A$ <> "N" AND A$ <> "n" THEN 1080
1140 REM
1150 REM	black and white attributes
1160 REM
1170	NORMAL%  = 7   ' normal intensity white on black
1180	BLUE%	 = 7
1190	GREEN%	 = 7
1200	CYAN%	 = 7
1210	RED%	 = 7
1220	MAGENTA% = 7
1230	BROWN%	 = 7
1240	YELLOW%  = 7
1250	WHITE%	 = 15  ' high intensity white on black
1260	LIGHTER% = 7
1270	BLINK%	 = 128
1280	    GOTO 1570
1290 REM
1300 REM	color attributes
1310 REM
1320	NORMAL%  = 7   ' normal intensity white on black
1330	BLUE%	 = 1
1340	GREEN%	 = 2
1350	CYAN%	 = 3
1360	RED%	 = 4
1370	MAGENTA% = 5
1380	BROWN%	 = 6
1390	YELLOW%  = 14
1400	WHITE%	 = 15  ' high intensity white on black
1410 REM
1420 REM  To make a color lighter, logically OR the LIGHTER% with
1430 REM    the color.
1440 REM	     Ex:      ATTRIBUTE% = RED% OR LIGHTER%
1450 REM    will give a light red color.
1460 REM
1470	       LIGHTER% = 8
1480 REM
1490 REM  To make a color blink, logically OR the BLINK% with
1500 REM    the color.
1510 REM	     Ex:      ATTRIBUTE% = RED% OR BLINK%
1520 REM    will give a blinking red color.
1530 REM
1540	       BLINK% = 128
1550 REM
1560 REM
1570 REM
1580 REM
1590 REM If interpreted, check that ASMBASIC is resident below the interpreter
1600 REM
1610 ' DEF SEG = 0
1620 ' A% = PEEK(&H19C) + 256*PEEK(&H19D) : B% = PEEK(&H19E) + 256*PEEK(&H19F)
1630 '    DEF SEG = B%
1640 '    IF (PEEK(A%-1) = &H52) AND (PEEK(A%-2) = &H52)  THEN PRINT " ASMBASIC PRESENT " :ASM% = 1:ELSE PRINT " ASMBASIC NOT PRESENT ":ASM%=0
1650 'GOTO 1500
1660 '      CLS : PRINT TAB(85);"ASMBASIC must be executed once before starting"
1670 'REM OR comprint  should be executed when testing accelerated technique
1680 '            PRINT TAB(15);"the Basic interpreter"
1690 '      SYSTEM
1700 REM   ***************************************************************
1710 REM   Read in or Initialize as necessary a printable file of data
1712 GOSUB 1950  ' initialize the timing string arrays
1720 OPEN "R",1,"TIMEPRIN.FIL",81
1730 FIELD #1, 1 AS CHECKI$, 49 AS AA$, 10 AS TT$, 21 AS SS$
1740 REM    initialize the time per screen variable strings to spaces
1750 FOR I = 1 TO 10:T$(I)=SPACE$(10):NEXT I
1760 S$  =  " Seconds per screen"
1770 FIELD #1, 79 AS OURNAME$, 2 AS ENDFILE$
1772 TEMP$= " RAYHAWK AUTOMATION, P.O. BOX 1427, BEAVERTON OR, 97075"
1774 LSET OURNAME$=SPACE$(79)
1776 LSET ENDFILE$=CHR$(13)+CHR$(10)
1778 PUT #1,10	 ' if the file was not there before, it will be now,
1779 REM	   disk space permitting
1790 FOR I = 1 TO 9
1800   GET #1,I:IF LEFT$(A$(I),49)=AA$ THEN T$(I) = TT$:GOTO 1810
1802 REM     uninitialized record, lets initialize it so it can be printed
1804   LSET CHECKI$=RIGHT$(STR$(I),1)
1805   LSET AA$ = A$(I)
1806   LSET TT$ = T$(I)
1807   IF I = 1 THEN LSET SS$=SPACE$(19)+CHR$(13)+CHR$(10)
1808   IF I > 1 THEN LSET SS$=S$+CHR$(13)+CHR$(10) ' carriage return, line feed
1809   PUT #1,I
1810 NEXT I
1820 ON ERROR GOTO 0
1830 GOSUB 1950
1840 REM
1850 IF FLAG% > 0 AND BASPRINT% = 0 THEN TINDEX%=5:GOSUB 2150 ' no comprint
1860 IF FLAG% > 0 AND BASPRINT% = 1 THEN TINDEX%=6:GOSUB 2150 '  comprint
1870 IF FLAG% = 0 AND BASPRINT% = 0 THEN TINDEX%=2:GOSUB 2150 ' no comprint
1880 IF FLAG% = 0 AND BASPRINT% = 1 THEN TINDEX%=3:GOSUB 2150 '  comprint
1890 IF FLAG% > 0 THEN GOSUB 2350 ' compiled, show off QPRINT
1900 IF FLAG% = 0 AND ASM% = 1 THEN GOSUB 2490	' interpreted, ASMBASIC present
1901					       '   show off QPRINT
1910 IF FLAG% > 0 THEN GOSUB 2630  'compiled, time CLS
1920 IF FLAG% > 0 THEN GOSUB 2710  'compiled, time CLREOS
1930 LOCATE 25,1:INPUT	" ENTER TO STOP THE PROGRAM ";JUNK$
1940 SYSTEM
1942 REM
1944 REM ****************************************************************
1946 REM
1950 REM   Initialize the timing arrays
1960 REM
1970 A$(1) =  " Time QPRINT, PRINT under conditions below       "
1980 A$(2) =  " Interpreted Standard PRINT                      " + T$(2)+ S$
1990 A$(3) =  " Interpreted PRINT with BASPRINT                 " + T$(3)+ S$
2000 A$(4) =  " Interpreted QPRINT with ASMBASIC                " + T$(4)+ S$
2010 A$(5) =  " Compiled PRINT                                  " + T$(5)+ S$
2020 A$(6) =  " Compiled PRINT with COMPRINT or PRSLASHO        " + T$(6)+ S$
2030 A$(7) =  " Compiled QPRINT                                 " + T$(7)+ S$
2040 A$(8) =  " Compiled CLS                                    " + T$(8)+ S$
2050 A$(9) =  " Compiled CLREOS performing CLS function         " + T$(9)+ S$
2060 RETURN
2070 REM
2080 REM   print out the latest results
2090 GOSUB 1950
2100 FOR I = 0 TO 9
2110   LOCATE I+I+6,1:PRINT A$(I);
2120 NEXT I
2130 RETURN
2140 REM
2150 REM   TEST PRINT  compiled or interpreted
2160 IF TINDEX%=5 AND FLAG% = 1 THEN A$(0) = " Testing  Compiled PRINT statements without COMPRINT "
2162 IF TINDEX%=6 AND FLAG% = 1 THEN A$(0) = " Testing  Compiled PRINT statements with    COMPRINT "
2164 IF TINDEX%=5 AND FLAG% = 2 THEN A$(0) = " Testing  Compiled PRINT statements without PRSLASHO "
2166 IF TINDEX%=6 AND FLAG% = 2 THEN A$(0) = " Testing  Compiled PRINT statements with    PRSLASHO "
2180 IF TINDEX%=2 THEN A$(0) = " Testing  Interpreted PRINT statements without BASPRINT "
2190 IF TINDEX%=3 THEN A$(0) = " Testing  Interpreted PRINT statements with    BASPRINT "
2200   ASPACE$=SPACE$(79)
2205   NOSCREENS = 50 * SECDIV#
2206   IF TINDEX% < 5 THEN NOSCREENS = 20 * SECDIV#
2210   STARTTIME$=TIME$
2240   FOR ISCREEN = 1 TO NOSCREENS
2250	 CLS
2260	 FOR I = 0 TO 9
2270	    LOCATE I+I+6,1:PRINT A$(I);
2280	  NEXT I
2290 ' SCNO$= " SCREEN NUMBER "+RIGHT$("     "+STR$(ISCREEN) ,5)
2300 ' LOCATE 20,10:PRINT SCNO$
2310   NEXT ISCREEN
2320   GOSUB 3000
2330 RETURN
2340 REM  next demonstrate     QPRINT --------------------------------------
2350 REM   TEST COMPILED QPRINT
2360   A$(0) = " Testing  Compiled QPRINT statements "
2365   NOSCREENS = 100 * SECDIV#
2370   STARTTIME$=TIME$
2390   FOR ISCREEN = 1 TO NOSCREENS
2400	CLS
2410	FOR I = 0 TO 9
2420	   LOCATE I+I+6,1:CALL QPRINT (FLAG%,A$(I))
2430	 NEXT I
2440 ' SCNO$= " SCREEN NUMBER "+RIGHT$("     "+STR$(ISCREEN) ,5)
2450 ' LOCATE 20,10:PRINT SCNO$
2460   NEXT ISCREEN
2470   TINDEX%=7:GOSUB 3000
2480 RETURN
2490 REM   TEST INTERPRETED QPRINT
2500   A$(0) = " Testing  Interpreted QPRINT statements "
2505   NOSCREENS = 20 * SECDIV#
2510   STARTTIME$=TIME$
2530   FOR ISCREEN = 1 TO NOSCREENS
2540	 CLS
2550	 FOR I = 0 TO 9
2560	   LOCATE I+I+6,1:CALL QPRINT (FLAG%,A$(I))
2570	 NEXT I
2580  ' SCNO$= " SCREEN NUMBER "+RIGHT$("     "+STR$(ISCREEN) ,5)
2590  ' LOCATE 20,10:PRINT SCNO$
2600   NEXT ISCREEN
2610   TINDEX%=4:GOSUB 3000
2620 RETURN
2630 ' time CLS routine
2632	PRINT " READY TO DO BASIC  'CLS' 500 TIMES "
2634	INPUT " ENTER TO CONTINUE ";JUNK$
2640   NOSCREENS=200 * SECDIV#
2650   STARTTIME$=TIME$
2660   FOR ISCREEN = 1 TO NOSCREENS
2670	 CLS
2680   NEXT ISCREEN
2690   TINDEX%=8:GOSUB 3000
2700 RETURN
2710 ' time xrep routine
2720   ATTRIBUTE% = NORMAL%
2730   BLANK$=" "
2732	PRINT " READY TO DO STAN'S CLREOS SUBROUTINE TO CLEAR THE SCREEN 500 TIMES "
2734	INPUT " ENTER TO CONTINUE ";JUNK$
2740   COUNT%=2000
2750   NOSCREENS=200  * SECDIV#
2760   STARTTIME$=TIME$
2770   FOR ISCREEN = 1 TO NOSCREENS
2780	 LOCATE 1,1:CALL CLREOS(FLAG%)
2790   NEXT ISCREEN
2800   TINDEX%=9:GOSUB 3000
2810 RETURN
2820 INPUT  " ENTER TO STOP THE PROGRAM ";JUNK$
2830 END
2840 REM TIMING SUBROUTINE
2850 REM  inputs:  STARTTIME$
2860 REM	    ENDTIME$
2870 REM  output:  DIFTIME#	 time in seconds
2880 SHH#=VAL(LEFT$(STARTTIME$,2))
2890 EHH#=VAL(LEFT$(ENDTIME$,2))
2900 SSS#=VAL(RIGHT$(STARTTIME$,2))
2910 ESS#=VAL(RIGHT$(ENDTIME$,2))
2920 SMM#=VAL(MID$(STARTTIME$,4,2))
2930 EMM#=VAL(MID$(ENDTIME$,4,2))
2940 STIME#=SHH#*3600!+SMM#*60!+SSS#
2950 ETIME#=EHH#*3600!+EMM#*60!+ESS#
2960 DIFTIME#=ETIME#-STIME#
2970 IF DIFTIME# < 0! THEN DIFTIME#= DIFTIME# + 3600! * 24!
2980 RETURN
2990 REM
3000 REM  compute the end time for TINDEX%
3010	ENDTIME$ = TIME$
3020	GOSUB 2840
3060	T$(TINDEX%) = STR$( DIFTIME# / NOSCREENS )
3070	T$(TINDEX%) = LEFT$(T$(TINDEX%)+SPACE$(10),10)
3080 ' display the end time on the screen and on the TIMEPRIN.FIL
3090	LSET TT$=T$(TINDEX%)
3100	LSET AA$=A$(TINDEX%)
3102   LSET CHECKI$=RIGHT$(STR$(TINDEX%),1)
3104   IF I = 1 THEN LSET SS$=SPACE$(19)+CHR$(13)+CHR$(10)
3108   IF I > 1 THEN LSET SS$=S$+CHR$(13)+CHR$(10) ' carriage return, line feed
3110	PUT 1,TINDEX%
3120 GOSUB 2080
3130 RETURN
```

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0285

     Volume in drive A has no label
     Directory of A:\

    ASMBASIC ASM      8104   6-18-84   1:21p
    ASMBASIC EXE      2432   7-12-84   6:00p
    ASMBASIC TXT      7647   7-11-84   9:12a
    BANDDEMO BAS     12682   7-06-84  10:06a
    BANDDEMO EXE     26981   7-12-84   5:27p
    BANDNOO  EXE      7965   7-12-84   5:35p
    BASPRINT ASM     19481   6-18-84   1:17p
    BASPRINT EXE      1920   6-18-84   1:23p
    CLREOL   ASM      2672   6-27-83   3:35a
    CLREOL   OBJ       111   6-27-83   3:40a
    CLREOS   ASM      3940   6-27-83   3:36a
    CLREOS   OBJ       169   6-27-83   3:40a
    CLUBWARE DSC      3757   7-07-84   3:11p
    COMPRINT ASM     19856   6-16-84  11:31a
    COMPRINT EXE      1920   6-16-84  11:41a
    DEBUG20  FIX       555   3-31-84  12:44a
    DEBUGFIX TXT     10885   7-11-84   9:10a
    DETAB    BAS       986   3-31-84   1:07a
    EASYDEMO BAT      1524   7-12-84   3:58p
    LONGDEMO BAT      2081   7-12-84   3:55p
    NOSLASHO BAT       580   6-29-84   9:07a
    PRSLASHO ASM     23440   6-26-84   9:08a
    PRSLASHO EXE      2176   6-26-84   9:10a
    QPRINT   ASM      6555   7-12-84   5:22p
    QPRINT   OBJ       304   7-12-84   5:22p
    README   TXT      5109   7-11-84  11:47a
    SCRLDN   ASM      1989   6-27-83   3:38a
    SCRLDN   OBJ       108   6-27-83   3:42a
    SCRLUP   ASM      1981   6-27-83   3:39a
    SCRLUP   OBJ       108   6-27-83   3:42a
    SCRNIO   TXT     10938   7-11-84   3:46p
    SLASHO   BAT       580   6-29-84   9:08a
    SUBDEMO  BAS     21504   6-26-84   4:50p
    SUBDEMO  EXE     37402   7-12-84   5:33p
    TIMEDEMO BAS     14295   6-26-84   5:47p
    TIMEPRIN FIL       896   6-26-84   5:58p
    XREP     ASM      6818   7-12-84   5:49p
    XREP     OBJ       303   7-12-84   5:53p
    YREP     ASM      6960   7-12-84   5:50p
    YREP     OBJ       310   7-12-84   5:53p
    ZPRINT   ASM      7060   7-12-84   5:50p
    ZPRINT   OBJ       307   7-12-84   5:52p
           42 file(s)     285391 bytes
                           18432 bytes free
