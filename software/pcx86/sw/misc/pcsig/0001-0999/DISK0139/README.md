---
layout: page
title: "PC-SIG Diskette Library (Disk #139)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0139/
machines:
  - id: ibm5160
    type: pcx86
    config: /machines/pcx86/ibm/5160/cga/256kb/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0139"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5160" %}

{% comment %}info_begin{% endcomment %}

## Information about "SCREEN UTILITIES #2"

    Some nice routines for handling screen output, as well as other
    utilities.  The LORES program lets you design screens using the 160x100
    16-color mode of the CGA card.  Fun and colorful, there are both BASIC
    and compiled versions.  The PRINTXT1 routines are for Dbase II
    programmers (allows you to display long (>80 chars)text lines on
    screen.  Also included, the BAT200D program, and associated .BAT files,
    allow you to explore the many possibilities of batch files.
    
    How to Start: To run an EXE program simply type its name and
    press <ENTER>.  For instructions on ASM or 'C' listings, refer to
    your Assembler or 'C' language manuals.  For instructions on
    running BASIC programs, please refer to the GETTING STARTED
    section in this catalog.  CMD files are for use with dBASE II. To
    read DOC files simply enter TYPE filename.ext and press <ENTER>.
    
    Suggested Registration:   LORES $10.00 or $5.00 and a formatted
    diskette. This gets you the latest version of the program and demos, as
    well as printed documentation.
    
    File Descriptions:
    
    DIR201   EXE  Compiled version of above
    DIR201   BAS  Diskette cataloging program.  Very friendly!
    CHAROP   ASM  Used by DOSPATH.C.  Reads/sets switch char and device
    DOSPATH  C    Lattice c functions for DOS 2.0 command lines and paths
    LORES    DOC  Documentation for 160x100 graphics support package
    LORES    BAS  Does 160x100 16-color graphics
    PRINTXT1 DOC  Documentation for above
    PRINTXT1 CMD  dbase II command to print multiple text lines on screen
    NUSQ     COM  Assembly-coded version of unsqueeze program,super fast!
    LORES    USR  BASIC-callable 160x100 graphics functions
    LORES    EXE  Another 160x100 demo program
    LODEMO   BAS  Demo of 160x100 16-color graphics on IBM PC
    LORES    OBJ  Assembled version of LORES.ASM
    LORES    ASM  Assembly language routines for 160x100 16-color graphics
    PRINTXT1 INC  Include routines for PRINTXT1.CMD
    READ     ME   Listing of included files
    ???      BAT  Screen and general purpose batch file utilities
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## CHAROP.ASM

{% raw %}
```
title MSDOS 2.00 Function Library for Lattice C
subttl -
;;
;;FUNCTION:	Sets and returns switch char-
;;	acter and device availability.
;;
;;
;;CALL:
;;
;;	ret= _charop(al,dl)
;;	int ret;	DL return value, 
;;	int al;		charoper function
;;	int dl;		charoper data
;;
;;RETURN:
;;	See the DOS docs for details. 
;;_charop(0,0) returns the ASCII switch char,
;;_charop(1,'-') sets the switch to -,
;;_charop(2,0) returns device availability,
;;_charop(3,i) sets device availability.
;;
;;
;;DESCRIPTION:
;;
;;EXAMPLE:
;;
;;
;;CAUTIONS:
;;
;;
;;ASSUMPTIONS:
;;
;;LONG	32 bits (4 bytes)
;;INT	16 bits (2 bytes)
;;CHAR	 8 bits (1 byte)
;;
page
pgroup group prog
prog segment byte public 'prog'
assume cs:pgroup,ds:pgroup

public 	_charop

_charop proc near
	push	bp
	mov	bp,sp
	mov	al,[bp+4]
	mov	dl,[bp+6]
	mov	ah,55
	int	33
	mov	al,dl
	mov	ah,0
	pop	bp
	ret
_charop endp

prog ends

	end
```
{% endraw %}

## CRC.TXT

{% raw %}
```
PC-SIG Disk No. #139, version v1 

The following is a list of the file checksums which should be produced by
the CRCK4 program on disk #9 (and others).  If the CRC numbers do not match
you may have a bad file.  To use type:  CRCK4 <filespec>

CRCK4 output for this disk:


CRCK ver 4.2B (MS DOS VERSION )
CTL-S pauses, CTL-C aborts

--> FILE:  DOSPATH .C           CRC = 31 47

--> FILE:  CHAROP  .ASM         CRC = 74 40

--> FILE:  LORES   .EXE         CRC = 08 F5

--> FILE:  LODEMO  .BAS         CRC = 8D ED

--> FILE:  NUSQ    .COM         CRC = 8A 04

--> FILE:  LORES   .OBJ         CRC = 98 EF

--> FILE:  LORES   .USR         CRC = 56 3F

--> FILE:  LORES   .ASM         CRC = 5E 33

--> FILE:  LORES   .BAS         CRC = 22 F0

--> FILE:  LORES   .DOC         CRC = 49 5A

--> FILE:  TELE    .BAT         CRC = E0 51

--> FILE:  DIAL    .BAT         CRC = AF FD

--> FILE:  EDIT    .BAT         CRC = C8 71

--> FILE:  VCOPY   .BAT         CRC = 81 B6

--> FILE:  ANSI    .BAT         CRC = 1E 7F

--> FILE:  FORMAT  .BAT         CRC = 5D A1

--> FILE:  FSKEL   .BAT         CRC = DC EC

--> FILE:  MENU    .BAT         CRC = 8E C9

--> FILE:  UTILITY .BAT         CRC = 91 28

--> FILE:  DIR201  .BAS         CRC = 21 6F

--> FILE:  DIR201  .EXE         CRC = BC 6B

--> FILE:  PRINTXT1.INC         CRC = E7 8C

--> FILE:  PRINTXT1.DOC         CRC = F5 C9

--> FILE:  PRINTXT1.CMD         CRC = 70 BD

--> FILE:  BAT200D .COM         CRC = 9C C7

--> FILE:  READ    .ME          CRC = 9A 05

 ---------------------> SUM OF CRCS = 36 42

DONE

These and other Public Domain and user-supported programs from:

PC Software Interest Group
1125 Stewart Ct  Suite G
Sunnyvale, CA 94086
(408) 730-9291
```
{% endraw %}

## DIR201.BAS

{% raw %}
```bas
10 '
20 '      DIR201.BAS - - - - - - *** IBM Version 2.01 ***
30 '      March 1984
40 '
50 '      Written by Wes Meier (70215,1017)
60 '      230 B Park Lake Circle
70 '      Walnut Creek, CA 94598
80 '
90 '      Voice Line:    (415)-944-5265
100 '     Data Line:     (415)-937-0156 (The Walnut Creek RBBS)
110 '
120 '     Notes on Version 2.01:
130 '     ----------------------
140 ' 1 - Several bugs have been corrected. Notably, the one which would
150 '     kill your existing datafile if you tried to read a diskette which
160 '     contained no files! Thanks to Rick Hemming for pointing out this
170 '     bug to me.
180 '
190 ' 2 - The source code has been worked over by the BDS "I" command to make
200 '     it a little more readable. If you like the way it looks, I strongly
210 '     recommend you purchase the BDS system: Basic Developement System,
220 '     SofTool Systems, Suite 179, 8972 E. Hampden Avenue, Denver, CO 80231.
230 '
240 ' 3 - The error checking logic has been completely re-worked.
250 '
260 ' 4 - The "blinking cursor" routine has been completely re-worked.
270 '
280 ' 5 - A "Monitor Configuration" system has been implemented.
290 '
300 ' 6 - If you want to Compile DIR2.BAS, Version 2.01, I suggest that you use
310 '     the /E/S/N switches.
320 '
330 '--------------------------------------------------------------------------
340 '
350 '     DIR2.BAS - - - - - - *** IBM Version 2.00 ***
360 '     August 1983
370 '
380 '     Version 2.00+ will work with DOS 1.10 or 2.00
390 '
400 '     Notes on Version 2.00:
410 '     ----------------------
420 ' 1 - Version 2.00 requires BASICA but does NOT use any of its
430 '     new commands, so DIR 2.00 should compile satifactorily.
440 '
450 ' 2 - The List File to Lineprinter routine has been implemented. This
460 '     routine uses only "plain vanilla" printer statements. Prints at
470 '     10 cpi and 6 lpi. 150 files per page. Pages are numbered.
480 '
490 ' 3 - Version 2.00  does NOT support paths or alternate directories.
500 '
510 ' 4 - Version 2.00 will NOT allow you to "read" the directory of drive C:
520 '     into the list file. This is due to the way I execute the FILES
530 '     statement and then read the screen into memory. If drive C: is a
540 '     hard disk (which it usually is) there would be too many files for
550 '     the screen to handle without scrolling.
560 '
570 ' 5 - Version 2.00 will now function on either type of monitor. 80 column
580 '     is still required.
590 '
600 ' 6 - Version 2.00 will directly compile with the /E option.
610 '
620 '  ********************************************************
630 '  * For Public Domain....Private Sales Rights Reserved ! *
640 '  ********************************************************
650 '
660 DEFINTB-Z
670 DEFSTRA
680 ON ERROR GOTO 8650
690 AV = CHR$(34)
700 DEF FN ACENTER(X$) = SPACE$((80 - LEN(X$)) / 2) + X$
710 AL = STRING$(80,196)
720 AQ = "(" + AV + "*" + AV + " to QUIT) "
730 TRUE = - 1
740 FALSE = NOT TRUE
750 AFORMAT = "\ \  \          \    "
760 DATA-1
770 DATA7
780 DATA0
790 DATA0
800 DATA15
810 READ MONOCHROME,FG1,BG1,BORDER,FG2
820 GOTO 870
830 CLOSE
840 OPEN"O",1,"DIR2.CFG"
850 PRINT #1,MONOCHROME,FG1,BG1,BORDER,FG2
860 CLOSE
870 OPEN"I",1,"DIR2.CFG"
880 INPUT #1,MONOCHROME,FG1,BG1,BORDER,FG2
890 CLOSE
900 DIM A(1000)
910 KEY OFF
920 WIDTH 40
930 SCREEN 0,1
940 COLOR FG2,BG1,BORDER
950 CLS
960 LOCATE 9,7,0,0,7
970 PRINT CHR$(201) STRING$(28,205) CHR$(187)
980 PRINT TAB(7) CHR$(186) SPC(3)" *** Disk Directory ***  " CHR$(186)
990 PRINT TAB(7) CHR$(186) SPC(3)" *** Version   2.01 ***  " CHR$(186)
1000 PRINT TAB(7) CHR$(186) SPC(3)" *** March     1984 ***  " CHR$(186)
1010 PRINT TAB(7) CHR$(186) SPC(3)" *** By   Wes Meier ***  " CHR$(186)
1020 PRINT TAB(7) CHR$(204) STRING$(28,205) CHR$(185)
1030 PRINT TAB(7) CHR$(186) SPC(2)"Reading: "AV SPC(15)AV CHR$(186)
1040 PRINT TAB(7) CHR$(200) STRING$(28,205) CHR$(188)
1050 ' *************************************************************
1060 ' * Check for DOS 1.10. "WINDOW=0" will cause error if 2.00.  *
1070 ' * When compiled, version 2.00 "thinks" it's under DOS 1.10. *
1080 ' *************************************************************
1090 WINDOW = 0
1100 DOS1.1 = TRUE
1110 GOTO 1150
1120 CLOSE
1130 OPEN "O",1,"DIR.DAT"
1140 CLOSE
1150 OPEN "I",1,"DIR.DAT"
1160 ENTRIES = 0
1170 WHILE NOT EOF(1)
1180   ENTRIES = ENTRIES + 1
1190   INPUT #1,A(ENTRIES)
1200   LOCATE 15,20,0
1210   PRINT A(ENTRIES);
1220 WEND
1230 CLOSE
1240 '                          *************
1250 '                          * Main Menu *
1260 '                          *************
1270 IF SORTFLAG THEN GOSUB 8300
1280 IF MONOCHROME THEN COLOR FG1 ELSE IF PAGE THEN COLOR ,,1 : SCREEN ,,1,1 : GOTO 2100
1290 WIDTH 80
1300 SCREEN 0,1,1,1
1310 COLOR ,BG1,BORDER
1320 PAGE = TRUE
1330 CLS
1340 COLOR FG2
1350 LOCATE 5,1,0
1360 PRINT CHR$(201) STRING$(78,205) CHR$(187);
1370 PRINT CHR$(186);
1380 COLOR FG1
1390 PRINT TAB(13)"**** DISK DIRECTORY *** MENU ****";
1400 PRINT ENTRIES"ENTRIES ON RECORD ***";
1410 COLOR FG2
1420 PRINT TAB(80) CHR$(186);
1430 PRINT CHR$(204) STRING$(78,205) CHR$(185);
1440 PRINT CHR$(186) TAB(13);
1450 COLOR FG1
1460 PRINT "Enter:" TAB(80)
1470 COLOR FG2
1480 PRINT CHR$(186);
1490 PRINT CHR$(186) TAB(19);
1500 PRINT "1. ";
1510 COLOR FG1
1520 PRINT "To FIND an item." TAB(80);
1530 COLOR FG2
1540 PRINT CHR$(186);
1550 PRINT CHR$(186) TAB(19);
1560 PRINT "2. ";
1570 COLOR FG1
1580 PRINT "To ENTER an item or an entire disk." TAB(80);
1590 COLOR FG2
1600 PRINT CHR$(186);
1610 PRINT CHR$(186) TAB(19);
1620 PRINT "3. ";
1630 COLOR FG1
1640 PRINT "To DELETE an item or an entire disk." TAB(80);
1650 COLOR FG2
1660 PRINT CHR$(186);
1670 PRINT CHR$(186) TAB(19);
1680 PRINT "4. ";
1690 COLOR FG1
1700 PRINT "To LIST the file to the CRT or the PRINTER." TAB(80);
1710 COLOR FG2
1720 PRINT CHR$(186);
1730 PRINT CHR$(186) TAB(19);
1740 PRINT "5. ";
1750 COLOR FG1
1760 PRINT "To LIST the directory of a disk." TAB(80);
1770 COLOR FG2
1780 PRINT CHR$(186);
1790 PRINT CHR$(186) TAB(19);
1800 PRINT "6. ";
1810 COLOR FG1
1820 PRINT "To BACKUP the data file." TAB(80);
1830 COLOR FG2
1840 PRINT CHR$(186);
1850 PRINT CHR$(186) TAB(19);
1860 PRINT "7. ";
1870 COLOR FG1
1880 PRINT "To Change the MONITOR Configuration File." TAB(80);
1890 COLOR FG2
1900 PRINT CHR$(186);
1910 PRINT CHR$(186) TAB(19);
1920 PRINT "";
1930 COLOR FG1
1940 PRINT "" TAB(80);
1950 COLOR FG2
1960 PRINT CHR$(186);
1970 PRINT CHR$(186) TAB(19);
1980 PRINT "9. ";
1990 COLOR FG1
2000 PRINT "To RETURN to DOS." TAB(80);
2010 COLOR FG2
2020 PRINT CHR$(186);
2030 PRINT CHR$(204) STRING$(78,205) CHR$(185);
2040 PRINT CHR$(186) TAB(27);
2050 COLOR BG1,FG1
2060 PRINT " *** ENTER YOUR CHOICE *** ";
2070 COLOR FG2,BG1
2080 PRINT TAB(80) CHR$(186);
2090 PRINT CHR$(200) STRING$(78,205) CHR$(188);
2100 BEEP
2110 COLOR FG1
2120 CHOICE$ = ""
2130 WHILE CHOICE$ = ""
2140   CHOICE$ = INKEY$
2150 WEND
2160 CHOICE = INSTR("123456789",CHOICE$)
2170 IF CHOICE = 0 THEN 2100
2180 SCREEN ,,0,0
2190 COLOR FG1,BG1,BORDER
2200 CLS
2210 '                1    2    3    4    5    6    7    8    9
2220 ON CHOICE GOTO 2260,2850,4060,4680,5480,6080,7000,1270,7530
2230 '************************
2240 '* Find an ITEM routine *
2250 '************************
2260 CLS
2270 COLOR FG2
2280 PRINT AL;
2290 COLOR FG1
2300 PRINT FN ACENTER("*** Find an Item Routine ***")
2310 COLOR FG2
2320 PRINT AL
2330 COLOR FG1
2340 PRINT "Enter complete or partial ";
2350 PRINT "filespec of ITEM to be found "AQ"........"
2360 INPUT AT
2370 IF AT = "*" THEN 1270
2380 ' ******************
2390 ' * Return to menu *
2400 ' ******************
2410 ACAP = AT
2420 GOSUB 8570
2430 AT = ACAP
2440 FOR X = 1 TO ENTRIES
2450   IF INSTR(A(X),AT) = 0 OR LEFT$(A(X),12) = LEFT$(AX,12) THEN 2570
2460   AX = A(X)
2470   PRINT AV; LEFT$(A(X),12);AV" can be found on disks: ";
2480   FOR Y = X TO ENTRIES
2490     IF LEFT$(AX,12) = LEFT$(A(Y),12) THEN PRINT RIGHT$(A(Y),3)", "; : GOTO 2510
2500     Y = ENTRIES
2510   NEXT
2520   PRINT
2530   PRINT
2540   PRINT "Is this the ITEM you wanted to find ";
2550   GOSUB 7830
2560   IF XANSWER THEN 2620
2570 NEXT
2580 PRINT
2590 PRINT "I cannot locate any incidence of "AV;AT;AV". Try again."
2600 PRINT
2610 GOTO 2330
2620 PRINT
2630 PRINT "Do you want to RUN "AV;AX;AV" ";
2640 GOSUB 7830
2650 IF NOT XANSWER THEN 1270
2660 IF MID$(AX,10,3) = "BAS" THEN RUN "A:" + LEFT$(AX,12) ELSE 2790
2670 RUN "B:" + LEFT$(AX,12)
2680 PRINT
2690 BEEP
2700 BEEP
2710 PRINT "I cannot locate "AV;AX;AV;
2720 PRINT " on either drive "AV"A"AV" or drive "AV"B"AV"!!!"
2730 PRINT "Please check to see that Disk #";
2740 PRINT RIGHT$(AX,3)" is mounted and press any"
2750 PRINT "key to continue ";
2760 GOSUB 7630
2770 PRINT
2780 GOTO 2620
2790 PRINT
2800 PRINT "Since "AV;AX;AV" doesn't have the "AV".BAS"AV" extension,";
2810 PRINT "I can't RUN it!"
2820 PRINT "Press any key to return to the menu...("AV"*"AV" to jump to DOS) ";
2830 GOSUB 7630
2840 IF ANSWER < > "*" THEN 1270 ELSE CLS : SYSTEM
2850 '**********************
2860 '* Item Entry Routine *
2870 '**********************
2880 CLS
2890 COLOR FG2
2900 PRINT AL;
2910 COLOR FG1
2920 PRINT FN ACENTER("*** Item Entry Routine ***")
2930 COLOR FG2
2940 PRINT AL
2950 COLOR FG1
2960 LOCATE 12,1
2970 PRINT "Do you want to enter from the ";
2980 COLOR FG2 + 16
2990 PRINT "K";
3000 COLOR FG1
3010 PRINT "eyboard or read a ";
3020 COLOR FG2 + 16
3030 PRINT "D";
3040 COLOR FG1
3050 PRINT "isk "AQ;
3060 GOSUB 7630
3070 IF ANSWER = "*" THEN 1270 ELSE IF ANSWER = "K" THEN 3130
3080 IF ANSWER = "D" THEN 3430
3090 LOCATE L,T
3100 BEEP
3110 GOTO 3060
3120 ' *********************************
3130 ' *  Keyboard item entry routine  *
3140 ' *********************************
3150 LOCATE 12,1
3160 PRINT SPACE$(79)
3170 LOCATE 4,1
3180 PRINT AV".BAS"AV" is the default extension."
3190 PRINT "Enter filespec "AQ;
3200 INPUT A
3210 IF A = "*" THEN 1270
3220 ACAP = A
3230 GOSUB 8570
3240 A = ACAP
3250 IF LEN(A) > 12 THEN BEEP : PRINT A" is too long !" : GOTO 3190
3260 INPUT "Enter disk # ";AD
3270 IF VAL(AD) < 1 OR VAL(AD) > 999 THEN BEEP : GOTO 3260
3280 AD = RIGHT$("00" + AD,3)
3290 K = INSTR(A,".")
3300 IF K = 0 THEN A = LEFT$(A + "       ",8) + ".BAS" : GOTO 3290
3310 A = LEFT$(MID$(A,1,K - 1) + "       ",8) + RIGHT$(A, LEN(A) - (K - 1))
3320 A = LEFT$(A + "   ",12) + AD
3330 PRINT "Is "AV;A;AV" correct ";
3340 GOSUB 7830
3350 IF NOT XANSWER THEN 3190
3360 ENTRIES = ENTRIES + 1
3370 A(ENTRIES) = A
3380 A = ""
3390 PRINT "Entered. Do you have any more entries ";
3400 GOSUB 7830
3410 IF NOT XANSWER THEN GOSUB 8300 : GOSUB 8160 : RUN ELSE 3180
3420 '**********************************
3430 '*    Read disk entry routine     *
3440 '**********************************
3450 LOCATE 12,1
3460 PRINT SPACE$(79)
3470 LOCATE 4,1
3480 PRINT "Enter disk number to be read "AQ;
3490 INPUT ADISK
3500 IF ADISK = "*" THEN 1270 ELSE DISK = VAL(ADISK)
3510 IF DISK < 0 OR DISK > 999 THEN BEEP : GOTO 3480
3520 ADISK = STR$(DISK)
3530 MID$(ADISK,1) = "0"
3540 ADISK = RIGHT$("00" + ADISK,3)
3550 PRINT "Enter drive (A or B) (B is the default) ";
3560 GOSUB 7630
3570 ADRIVE = ANSWER
3580 IF ADRIVE = CHR$(13) THEN ADRIVE = "B" : GOTO 3600
3590 IF ADRIVE < > "A" AND ADRIVE < > "B" THEN LOCATE L,T : BEEP : GOTO 3560
3600 LOCATE L,T
3610 PRINT "? "ADRIVE
3620 PRINT
3630 PRINT "Read disk #"ADISK" on drive "AV;ADRIVE;AV". Is this correct ";
3640 GOSUB 7830
3650 IF NOT XANSWER THEN 3480
3660 PRINT "Deleting references to disk #"ADISK"......"
3670 FOR X = 1 TO ENTRIES
3680   IF RIGHT$(A(X),3) = ADISK THEN A(X) = ""
3690 NEXT
3700 ' **************************************
3710 ' * Routine to Read a Disk's Directory *
3720 ' **************************************
3730 CLS
3740 PRINT AL;
3750 IF ADRIVE = "A" THEN FILES "A:*.*" ELSE FILES "B:*.*"
3760 PRINT
3770 PRINT AL;
3780 ROW = CSRLIN
3790 COL = POS(0)
3800 COLOR BG1,FG1
3810 IF DOS1.1 THEN STLIN = 2 ELSE STLIN = 3
3820 IF DOS1.1 THEN ENDPT = 78 : STEPPT = 13 ELSE ENDPT = 69 : STEPPT = 18
3830 FOR LN = STLIN TO 24
3840   FOR PT = 1 TO ENDPT STEP STEPPT
3850     A = ""
3860     IF SCREEN (LN,PT) = 32 THEN LN = 24 : PT = 78 : GOTO 3950
3870     FOR P = PT TO PT + 11
3880       AT = CHR$(SCREEN (LN,P))
3890       LOCATE LN,P
3900       PRINT AT;
3910       A = A + AT
3920     NEXT
3930     ENTRIES = ENTRIES + 1
3940     A(ENTRIES) = LEFT$(A + SPACE$(14),12) + ADISK
3950   NEXT
3960 NEXT
3970 COLOR FG1,BG1
3980 LOCATE ROW,COL
3990 PRINT
4000 PRINT "Do you have another disk to read ";
4010 GOSUB 7830
4020 IF XANSWER THEN CLS : GOTO 3470
4030 GOSUB 8300
4040 GOSUB 8160
4050 RUN
4060 ' *****************************************
4070 ' * DELETE AN ITEM OR ENTIRE DISK ROUTINE *
4080 ' *****************************************
4090 CLS
4100 PRINT AL;
4110 PRINT FN ACENTER("*** DELETE AN ITEM OR DISK ROUTINE ***")
4120 PRINT AL;
4130 LOCATE 12,1
4140 PRINT "Delete an ";
4150 COLOR FG2 + 16
4160 PRINT "I";
4170 COLOR FG1
4180 PRINT "tem or an entire ";
4190 COLOR FG2 + 16
4200 PRINT "D";
4210 COLOR FG1
4220 PRINT "isk "AQ;
4230 GOSUB 7630
4240 IF ANSWER = "*" THEN 1270 ELSE IF ANSWER = "I" THEN 4300
4250 IF ANSWER = "D" THEN 4560
4260 SOUND 350,4
4270 LOCATE L,T
4280 GOTO 4230
4290 '***********************
4300 '* Item Delete Routine *
4310 '***********************
4320 LOCATE L,T
4330 PRINT "? Item"
4340 PRINT
4350 PRINT "Enter complete or partial filespec of item to be deleted "AQ;
4360 INPUT AT
4370 IF AT = "*" THEN 1270
4380 ACAP = AT
4390 GOSUB 8570
4400 AT = ACAP
4410 FOR X = 1 TO ENTRIES
4420   IF INSTR(A(X),AT) < > 0 THEN 4460
4430 NEXT
4440 PRINT "I can't locate "AV;AT;AV". Try again."
4450 GOTO 4350
4460 PRINT "Is "AV;A(X);AV" the item you want to delete ";
4470 GOSUB 7830
4480 IF NOT XANSWER THEN 4430
4490 A(X) = ""
4500 PRINT "Deleted. Do you have any other items to delete ";
4510 GOSUB 7830
4520 IF XANSWER THEN 4350
4530 GOSUB 8160
4540 RUN
4550 '***********************
4560 '* Disk Delete Routine *
4570 '***********************
4580 PRINT "Enter number of disk to be deleted ";
4590 INPUT D
4600 PRINT "Searching.......";
4610 FOR X = 1 TO ENTRIES
4620   IF VAL(RIGHT$(A(X),3)) = D THEN A(X) = ""
4630 NEXT
4640 PRINT "Done."
4650 PRINT "Do you have any other disks to delete ";
4660 GOSUB 7830
4670 IF XANSWER THEN 4580 ELSE 4530
4680 '****************
4690 '* LIST ROUTINE *
4700 '****************
4710 CLS
4720 LOCATE 11,1
4730 PRINT "Do you want the list Sorted by Disk number ";
4740 GOSUB 7830
4750 IF XANSWER THEN GOSUB 8440
4760 PRINT "List to ";
4770 COLOR FG2 + 16
4780 PRINT "C";
4790 COLOR FG1
4800 PRINT "RT or ";
4810 COLOR FG2 + 16
4820 PRINT "P";
4830 COLOR FG1
4840 PRINT "rinter ";
4850 GOSUB 7630
4860 IF ANSWER = "*" THEN 1270
4870 IF ANSWER = "C" THEN 4930
4880 IF ANSWER = "P" THEN 5200
4890 SOUND 200,5
4900 LOCATE L,T
4910 GOTO 4850
4920 '***********************
4930 '* List to CRT Routine *
4940 '***********************
4950 WIDTH 40
4960 PAGE = FALSE
4970 BACK = FALSE
4980 SCREEN 0,1,0,0
4990 CLS
5000 FOR X = 1 TO ENTRIES
5010   IF X / 22 = INT(X / 22) THEN 5120
5020   PRINT USING "###  ";X;
5030   PRINT LEFT$(A(X),12);
5040   PRINT "  Disk # ";
5050   PRINT RIGHT$(A(X),3)
5060 NEXT
5070 LOCATE 25,1
5080 COLOR BG1 + 16,FG1
5090 PRINT "End of listing. Press any key ";
5100 GOSUB 7630
5110 GOTO 1270
5120 COLOR BG1 + 16,FG1
5130 LOCATE 25,1
5140 PRINT "Press any key to continue ";
5150 GOSUB 7630
5160 COLOR FG1,BG1
5170 CLS
5180 GOTO 5020
5190 '***************************
5200 '* List to Printer Routine *
5210 '***************************
5220 CLS
5230 LOCATE 12,1
5240 PRINT "Printing List. Press any key to abort printout....."
5250 PAGES = ENTRIES \ 150 + 1
5260 FOR PAGE.NUM = 1 TO PAGES
5270   LPRINT
5280   LPRINT TAB(12) DATE$ ; TAB(52)"Page"PAGE.NUM"of"PAGES"Pages."
5290   LPRINT
5300   LPRINT TAB(12);
5310   FOR X = 1 TO 3
5320     LPRINT USING AFORMAT;"Dsk","Filespec";
5330   NEXT
5340   LPRINT
5350   LPRINT TAB(12) STRING$(59,"-")
5360   FOR X = (PAGE.NUM - 1) * 150 TO (PAGE.NUM - 1) * 150 + 49
5370     LPRINT TAB(12);
5380     FOR Y = 1 TO 150 STEP 50
5390       IF INKEY$ < > "" THEN Y = 3 : X = ENTRIES + 150 : PAGE.NUM = PAGES : GOTO 5420
5400       IF (X + Y) > ENTRIES THEN Y = 151 : GOTO 5420
5410       LPRINT USING AFORMAT; RIGHT$(A(X + Y),3); LEFT$(A(X + Y),12);
5420     NEXT
5430     LPRINT
5440   NEXT
5450   LPRINT TAB(12) STRING$(59,"-"); CHR$(12);
5460 NEXT
5470 GOTO 1270
5480 '*******************************************
5490 '* Routine to list the Directory of a Disk *
5500 '*******************************************
5510 CLS
5520 PRINT AL;
5530 PRINT FN ACENTER("*** Display Disk Directory Routine ***")
5540 PRINT AL
5550 PRINT "Do you want an ";
5560 COLOR FG2 + 16
5570 PRINT "A";
5580 COLOR FG1
5590 PRINT "ctual Disk Directory or the ";
5600 COLOR FG2 + 16
5610 PRINT "D";
5620 COLOR FG1
5630 PRINT "ata of a Disk as stored by "AV"DIR"AV"."
5640 PRINT AQ;
5650 GOSUB 7630
5660 IF ANSWER = "*" THEN 1270
5670 IF ANSWER = "A" THEN 5730
5680 IF ANSWER = "D" THEN 5910
5690 SOUND 234,5
5700 LOCATE L,T
5710 GOTO 5650
5720 '*********************************
5730 '* List Actual Directory Routine *
5740 '*********************************
5750 LOCATE L,T
5760 PRINT "? Actual Directory"
5770 PRINT "Enter drive "AV"A"AV", "AV"B"AV", or "AV"C"AV" ";
5780 GOSUB 7630
5790 IF ANSWER = "*" THEN 1270
5800 IF ANSWER = "A" OR ANSWER = "B" OR ANSWER = "C" THEN 5840
5810 SOUND 231,5
5820 LOCATE L,T
5830 GOTO 5780
5840 LOCATE L,T
5850 PRINT "? "ANSWER
5860 PRINT AL
5870 COLOR BG1,FG1
5880 FILES ANSWER + ":*.*"
5890 COLOR FG1,BG1
5900 GOTO 5540
5910 LOCATE L,T
5920 PRINT "? Data"
5930 PRINT "Enter disk number "AQ;
5940 INPUT AD
5950 IF AD = "*" THEN 1270
5960 D = VAL(AD)
5970 C = 0
5980 PRINT AL
5990 COLOR BG1,FG1
6000 FOR X = 1 TO ENTRIES
6010   IF D < > VAL(RIGHT$(A(X),3)) THEN 6050
6020   IF POS(0) > = 78 THEN PRINT
6030   PRINT LEFT$(A(X),12)" ";
6040   C = C + 1
6050 NEXT
6060 IF C = 0 THEN PRINT "Disk number"D"isn't listed."
6070 GOTO 5890
6080 '****************************
6090 '* Backup Data File Routine *
6100 '****************************
6110 IF BACK AND NOT MONOCHROME THEN SCREEN ,,2,2 : COLOR FG1,BG1,BORDER : GOTO 6760
6120 WIDTH 80
6130 IF MONOCHROME THEN CLS : COLOR FG1,BG1 ELSE SCREEN 0,1,2,2 : COLOR ,BG1,BORDER : BACK = TRUE
6140 BACK = TRUE
6150 CLS
6160 COLOR FG2
6170 LOCATE 5,1,0
6180 PRINT CHR$(201) STRING$(78,205) CHR$(187);
6190 PRINT CHR$(186);
6200 COLOR FG1
6210 PRINT TAB(18)"     *** Backup Data File Routine ***";
6220 COLOR FG2
6230 PRINT TAB(80) CHR$(186);
6240 PRINT CHR$(204) STRING$(78,205) CHR$(185);
6250 PRINT CHR$(186) TAB(13);
6260 COLOR FG1
6270 PRINT "Enter:" TAB(80)
6280 COLOR FG2
6290 PRINT CHR$(186);
6300 PRINT CHR$(186) TAB(19);
6310 PRINT "1. ";
6320 COLOR FG1
6330 PRINT "To BACKUP the Data File to drive "AV"A"AV"." TAB(80);
6340 COLOR FG2
6350 PRINT CHR$(186);
6360 PRINT CHR$(186) TAB(19);
6370 PRINT "2. ";
6380 COLOR FG1
6390 PRINT "To BACKUP the Data File to drive "AV"B"AV"." TAB(80);
6400 COLOR FG2
6410 PRINT CHR$(186);
6420 PRINT CHR$(186) TAB(19);
6430 PRINT "3. ";
6440 COLOR FG1
6450 PRINT "To BACKUP the Data File to drive "AV"C"AV"." TAB(80);
6460 COLOR FG2
6470 PRINT CHR$(186);
6480 PRINT CHR$(186) TAB(19);
6490 COLOR FG2
6500 PRINT TAB(80) CHR$(186);
6510 PRINT CHR$(186) TAB(19);
6520 COLOR FG2
6530 PRINT TAB(80) CHR$(186);
6540 PRINT CHR$(186) TAB(19);
6550 COLOR FG2
6560 PRINT TAB(80) CHR$(186);
6570 PRINT CHR$(186) TAB(19);
6580 COLOR FG2
6590 PRINT TAB(80) CHR$(186);
6600 PRINT CHR$(186) TAB(19);
6610 COLOR FG2
6620 PRINT TAB(80) CHR$(186);
6630 PRINT CHR$(186) TAB(19);
6640 PRINT "9. ";
6650 COLOR FG1
6660 PRINT "To RETURN to the main MENU." TAB(80);
6670 COLOR FG2
6680 PRINT CHR$(186);
6690 PRINT CHR$(204) STRING$(78,205) CHR$(185);
6700 PRINT CHR$(186) TAB(27);
6710 COLOR BG1,FG1
6720 PRINT " *** ENTER YOUR CHOICE *** ";
6730 COLOR FG2,BG1
6740 PRINT TAB(80) CHR$(186);
6750 PRINT CHR$(200) STRING$(78,205) CHR$(188);
6760 BEEP
6770 CHOICE$ = ""
6780 WHILE CHOICE$ = ""
6790   CHOICE$ = INKEY$
6800 WEND
6810 CHOICE = INSTR("123456789",CHOICE$)
6820 IF CHOICE = 0 THEN 6760
6830 '                 1    2    3    4    5    6    7    8    9
6840 ON CHOICE GOSUB 6860,6890,6930,6110,6110,6110,6110,6110,1270
6850 GOTO 6110
6860 DRIVE = 0
6870 GOSUB 7990
6880 RETURN
6890 DRIVE = 1
6900 GOSUB 7990
6910 DRIVE = 0
6920 RETURN
6930 DRIVE = 2
6940 GOSUB 7990
6950 DRIVE = 0
6960 RETURN
6970 ' ****************************************
6980 ' * Change MONITOR Configuration Routine *
6990 ' ****************************************
7000 COLOR FG2,BG1,BORDER
7010 CLS
7020 PRINT AL;
7030 PRINT FN ACENTER("*** MONITOR Configuration Routine ***")
7040 PRINT AL;
7050 COLOR FG1
7060 PRINT
7070 PRINT TAB(10)"The Current Configuration is:"
7080 PRINT
7090 PRINT TAB(10)"1  -  You ";
7100 IF MONOCHROME THEN PRINT "do not ";
7110 PRINT "have the Color/Graphics Adapter."
7120 PRINT TAB(10)"2  -  The primary foreground color is"FG1
7130 PRINT TAB(10)"3  -  The background color is"BG1
7140 PRINT TAB(10)"4  -  The border color is"BORDER
7150 PRINT TAB(10)"5  -  The secondary forground color is"FG2
7160 PRINT TAB(10)"6  -  To Save the Configuration"
7170 PRINT AL;
7180 PRINT
7190 PRINT "Enter the line number to change "AV"*"AV" to Quit ";
7200 GOSUB 7630
7210 CH = INSTR("123456",ANSWER)
7220 IF CH = 0 THEN BEEP : GOTO 7000
7230 PRINT
7240 IF CH = 1 THEN MONOCHROME = NOT MONOCHROME : GOTO 7000
7250 IF CH = 6 THEN 7480
7260 PRINT "Enter the new ";
7270 ON CH - 1 GOTO 7280,7300,7320,7340
7280 PRINT "primary foreground color (0-31) ";
7290 GOTO 7350
7300 PRINT "background color (0-15) ";
7310 GOTO 7350
7320 PRINT "border color (0-7) ";
7330 GOTO 7350
7340 PRINT "secondary foreground color (0-31) ";
7350 INPUT NC
7360 IF NC < 0 OR NC > 31 THEN 7000
7370 IF CH = 3 AND NC > 15 THEN 7000
7380 IF CH = 4 AND NC > 7 THEN 7000
7390 ON CH - 1 GOTO 7400,7420,7440,7460
7400 FG1 = NC
7410 GOTO 7000
7420 BG1 = NC
7430 GOTO 7000
7440 BORDER = NC
7450 GOTO 7000
7460 FG2 = NC
7470 GOTO 7000
7480 OPEN"O",1,"DIR2.CFG"
7490 PRINT #1,MONOCHROME,FG1,BG1,BORDER,FG2
7500 CLOSE
7510 RUN
7520 '*************************
7530 '* Return to DOS Routine *
7540 '*************************
7550 CLS
7560 SYSTEM
7570 '
7580 '********************** SUBROUTINES **********************
7590 '
7600 '******************************
7610 '* Blinking Cursor Subroutine *
7620 '******************************
7630 T = POS(0)
7640 L = CSRLIN
7650 LOCATE L,T,0
7660 PRINT "?";
7670 SOUND 32767,3
7680 ANSWER = INKEY$
7690 IF ANSWER < > "" THEN IF ANSWER = "*" THEN RETURN 1270 ELSE 7760
7700 LOCATE L,T,0
7710 PRINT CHR$(219);
7720 SOUND 32767,3
7730 ANSWER = INKEY$
7740 IF ANSWER < > "" THEN IF ANSWER = "*" THEN RETURN 1270 ELSE 7760
7750 GOTO 7650
7760 ACAP = ANSWER
7770 GOSUB 8570
7780 ANSWER = ACAP
7790 RETURN
7800 ' ****************************
7810 ' * Yes/No Answer Subroutine *
7820 ' ****************************
7830 GOSUB 7630
7840 LOCATE L,T
7850 IF ANSWER = "Y" OR ANSWER = "+" OR ANSWER = CHR$(13) THEN 7890
7860 IF ANSWER = "0" OR ANSWER = "-" OR ANSWER = "N" THEN 7920
7870 SOUND 250,4
7880 GOTO 7830
7890 XANSWER = TRUE
7900 PRINT "? Yes"
7910 RETURN
7920 XANSWER = FALSE
7930 PRINT "? No"
7940 RETURN
7950 '******************************************************
7960 '* Subroutine to Dump Data to a Specific Disk         *
7970 '* Drive=0 if Drive "A" or 1 if Drive "B" or 2 if "C" *
7980 '******************************************************
7990 SCREEN ,,0,0
8000 COLOR FG2 + 16,BG1,BORDER
8010 CLS
8020 LOCATE 12,14,0
8030 PRINT "Saving Data to Disk.....";
8040 IF DRIVE = 0 THEN OPEN"O",1,"A:DIR.DAT"          : GOTO 8080
8050 IF DRIVE = 1 THEN OPEN"O",1,"B:DIR.DAT"          : GOTO 8080
8060 OPEN"O",1,"C:DIR.DAT"
8070 GOTO 8080
8080 FOR X = 1 TO ENTRIES
8090   IF A(X) = "" THEN 8100 ELSE WRITE #1,A(X)
8100 NEXT
8110 CLOSE
8120 RETURN
8130 '***********************************************
8140 '* Subroutine to Dump Data to the Default Disk *
8150 '***********************************************
8160 SCREEN ,,0,0
8170 COLOR FG1 + 16,BG1,BORDER
8180 CLS
8190 LOCATE 12,14,0
8200 PRINT "Saving Data to Disk.....";
8210 OPEN"O",1,"DIR.DAT"
8220 FOR X = 1 TO ENTRIES
8230   IF A(X) = "" THEN 8240 ELSE WRITE #1,A(X)
8240 NEXT
8250 CLOSE
8260 RETURN
8270 '*************************************************
8280 '* Subroutine to Sort the Data Array by Filespec *
8290 '*************************************************
8300 PRINT "Sorting Data.........."
8310 M = ENTRIES
8320 N = M
8330 C = 0
8340 M = INT(M / 2)
8350 IF M = 0 THEN SORTFLAG = FALSE : RETURN ELSE J = 1 : K = N - M
8360 I = J
8370 L = I + M
8380 IF A(I) < A(L) THEN 8390 ELSE SWAP A(I),A(L) : I = I - M : IF I < 1 THEN 8390 ELSE 8370
8390 J = J + 1
8400 IF J > K THEN 8340 ELSE 8360
8410 '****************************************************
8420 '* Subroutine to Sort the Data Array by Disk Number *
8430 '****************************************************
8440 PRINT "Sorting Data.........."
8450 FOR X = 1 TO ENTRIES
8460   A(X) = RIGHT$(A(X),3) + LEFT$(A(X),12)
8470 NEXT
8480 GOSUB 8310
8490 SORTFLAG = TRUE
8500 FOR X = 1 TO ENTRIES
8510   A(X) = RIGHT$(A(X),12) + LEFT$(A(X),3)
8520 NEXT
8530 RETURN
8540 '**********************************************
8550 '* Subroutine to Capitalize the Variable ACAP *
8560 '**********************************************
8570 FOR XACAP = 1 TO LEN(ACAP)
8580   A1 = MID$(ACAP,XACAP,1)
8590   IF A1 > = "a" AND A1 < = "z" THEN MID$(ACAP,XACAP,1) = CHR$(ASC(A1) - 32)
8600 NEXT
8610 RETURN
8620 ' ***************
8630 ' * Error Traps *
8640 ' ***************
8650 IF ERL = 1090 THEN DOS1.1 = FALSE : RESUME 1150
8660 IF ERR = 53 AND ERL = 1150 THEN RESUME 1120
8670 IF ERR = 53 AND ERL = 870 THEN RESUME 830
8680 IF ERR = 53 AND ERL = 2660 THEN RESUME 2670
8690 IF ERR = 53 AND ERL = 2670 THEN RESUME 2680
8700 IF ERR = 53 AND ERL = 3750 THEN BEEP : PRINT "Disk has no files!" : PRINT : PRINT "Press enter to continue" : RESUME 1270
8710 ON ERROR GOTO 0
8720 'End of DIR2_01.BAS, Version 2.01.
```
{% endraw %}

## LODEMO.BAS

{% raw %}
```bas
1 ' LODEMO.BAS
2 ' 3/10/84
3 ' by Marty Smith, 310 Cinnamon Oak Lane, Houston, TX  77079
4 ' (713) 661-1241 Day, (713) 464-6737 Night.
5 KEY OFF : SCREEN 0,1,0,0 : WIDTH 80
6 '  ****************************************************
7 '  *    This program requires the machine module      *
8 '  *    LORES.USR for interpreted BASIC, or           *
9 '  *    LORES.OBJ for compiled BASIC.                 *
10 ' *                                                  *
11 ' *    To compile this demo, delete or comment out   *
12 ' *    lines 52-86 below. Then remove the ' on lines *
13 ' *    90 and 100. You don't need the USR to compile.*
14 ' *                                                  *
15 ' *    This demo assumes a color graphics adaptor,   *
16 ' *    and a PC with at least 2400 bytes on top of   *
17 ' *    BASIC for the machine routine. If you go to   *
18 ' *    BASIC and get less than 61k free, see the     *
19 ' *    section in LORES.DOC on clearing memory.      *
20 ' *                                                  *
21 ' ****************************************************
22 '
23 ' All routines in LORES.USR(OBJ) are in the form:
24 '
25 '   CALL LORES(ROUTINE%,PARAMETERS%(0))
26 '
27 ' where ROUTINE% is an integer and PARAMETER%(0) is the
28 ' first byte of an array of at least six elements.
29 ' X, X1, X2, col are integers from 0 to 159
30 ' Y, Y1, Y2, row are integers from 0 to 99
31 ' CX is and integer from 0 to 11
32 ' CY is and integer from 0 to 19
50 ' general routine to load LORES, accounts for low memory.
52 DEF SEG=0 : X=PEEK(&H510) + 256*PEEK(&H511) ' BASIC segment
54 Y = PEEK(&H413) + 256*PEEK(&H414)  ' memory size in k's.
56 Y = Y*64    ' adjust memory size to segment paragraphs.
58 Z = Y - X   ' top of memory - BASIC segment = total available.
60 Z = Z - 152 ' LORES is about 151 paragraphs long. 2406 bytes.
62 Z = Z*16    ' memory available for BASIC in bytes.
64 IF Z < 65536! THEN CLEAR ,Z,4096 ELSE CLEAR ,,4096
66 DEFINT A-Z ' after CLEAR X,Y,Z are zero
68 DEF SEG=0 : X = PEEK(&H510) + 256*PEEK(&H511)
70 Y=(PEEK(&H413) + 256*PEEK(&H414)) * 64
72 Z = Y - X : FS$="lores.usr"
74 IF Z < 4096 THEN LOSEG = X + Z - 151 ELSE LOSEG= X + 4097
80 ON ERROR GOTO 84
82 DEF SEG=LOSEG :BLOAD FS$,0 :DEF SEG :ON ERROR GOTO 0 :GOTO 90
84 PRINT "This demo requires the file LORES.USR to work."
86 LINE INPUT "Please enter the full filename of this file ==>";FS$
88 IF FS$="" THEN END ELSE RESUME 82
90 'CLEAR ,,4096  ' use this and 100 instead of 50-76 above if compiling.
100 'DEFINT A-Z   ' ALL VARIABLE NAMES ARE INTEGER UNLESS SPECIFIED OTHERWISE.
120 I=0 :J=0 :K=0 :PI!=3.141593 :LOCOLOR=0 :X1=0 :Y1=0 :X2=0 :Y2=0:LO$="LO-RES":A$="X": I$=""
130 FS$="lores.usr" :CX=0 :CY=0 :WHICH=0 :ICH=0 :PLX=0 :PLY=0:PLROUTINE=2
140 INS$=CHR$(0)+CHR$(82): DEL$=CHR$(0)+CHR$(83): ALTP$=CHR$(0)+CHR$(25)
150 ALTX$=CHR$(0)+CHR$(45)
160 BLACK=0 :BLUE=1 :GREEN=2 :CYAN=3 :RED=4 :MAGENTA=5 :BROWN=6 :WHITE=7
170 GRAY=8 :LBLUE=9 :LGREEN=10 :LCYAN=11 :LRED=12 :LMAGENTA=13 :YELLOW=14 :BRIGHT=15
200 DIM TFK$(10) : TFK$(1)="LIST " : TFK$(2)="RUN"+CHR$(13)
205 TFK$(3)="LOAD"+CHR$(34) : TFK$(4)="SAVE"+CHR$(34)
210 TFK$(5)="CONT"+CHR$(13) : TFK$(6)=","+CHR$(34)+"LPT1:"+CHR$(13)
215 TFK$(7)="TRON"+CHR$(13) : TFK$(8)="TROFF"+CHR$(13)
220 TFK$(9)="KEY " : TFK$(10)="SCREEN 0,0,0"+CHR$(13)
230 KEY OFF :FOR I=0 TO 9 : KEY I+1,"" : NEXT
240 GOTO 300
250 ROUTINE=LOUNDO : GOSUB 700 ' restore screen if color
260 FOR I=1 TO 10 :KEY I,TFK$(I) : NEXT : KEY ON
270 RETURN
300 ' variables
310 RANDOMIZE VAL(RIGHT$(TIME$,2))*VAL(MID$(TIME$,4,2))
330 LORES =   0 ' must be zero for CALL to work properly.
340 ROUTINE = 0 ' PARAMETERS% as p(0),p(1),p(2),p(3),p(4),p(5).
350 LOINIT =  0 ' none
360 LOCLS =   1 ' color (0 to 15)
370 LOPLOT =  2 ' row, col, color
380 LOPOINT = 3 ' row, col, p(2) returns color
390 LOLINE =  4 ' X1, Y1, X2, Y2, color, length( 0 is draw whole line)
400 LOBOX =   5 ' X1, Y1, X2, Y2, color, length( value <> 0 fills box)
410 LOCIRCLE =6 ' X, Y, radius, aspect numerator, denominator, color
420 LOLETTER1=7 ' CX, CY, character%, color
430 LOLETTER2=8 ' CX, CY, character%, foreground, background
440 LOPRINT  =9 ' CX, CY, VARPTR(message$), color -- x,y, come back at next.
450 LOPRINT2 =10 ' unused at this time, see doc.
460 LOSINE   =11 ' angle in degrees -- sine * 10000 returned in p(1)
470 LOCOSINE =12 ' angle in degrees -- cosine * 10000 returned in p(1)
480 LORND    =13 ' if p(0)=0, randomize - return -1, in p(0)
490 '                 else return random number from 1 to p(0) in p(1).
500 LOUNDO   =14 ' restore mode at LOINIT, if from mono screen, nothing.
510 LOMODE   =15 ' return -1 in p(0) if LORES is on, else IBM video mode.
520 LOPAINT  =16 ' X, Y, fill color, boundary color.
590 DIM LOP(6),PL(6)  :' storage for lores paramters
650 '
690 GOTO 800 ' branch around machine routine
700 ' lores machine routine
710 DEF SEG=LOSEG
720 CALL LORES(ROUTINE,LOP(0))
730 DEF SEG
740 RETURN
800 ROUTINE=LOINIT : GOSUB 700 ' initialize
810 ROUTINE=LOCLS : LOP(0)=BLUE : GOSUB 700 ' color 1: cls
812 LOP(5)=0 ' use whole lines
813 ROUTINE=LOLINE
820 FOR T!=0 TO 2*PI! STEP PI!/75
830   R!=COS(2*T!)*50
840   X1=COS(T!)*R!+79 : Y1=SIN(T!)*R!+49
850   A!=T!+PI!/3
860   R2!=COS(2*A!)*50
870   X2=COS(A!)*R2!+79 : Y2=SIN(A!)*R2!+49
880   GOSUB 920
885 I$=INKEY$ : IF I$<>"" THEN T!=2*PI!
890 NEXT
900 IF I$="p" THEN 1470 ELSE IF I$<>"" THEN 1000 ELSE 820
920 LOP(0)=X1 :LOP(1)=Y1 :LOP(2)=X2 :LOP(3)=Y2 :LOP(4)=RND*16
930 GOSUB 700 ' call lores
940 RETURN
1000 ROUTINE=LOCLS : LOP(0)=BLACK : GOSUB 700
1005 LOP(0)=80 : LOP(1)=50 : LOP(3)=5 : LOP(4)=6 : ROUTINE=LOCIRCLE : X=0
1010 FOR I=2 TO 52 STEP 2
1020   LOP(2)=I : X=X+1 : LOP(5)=X MOD 16
1030   GOSUB 700
1040 NEXT
1050 A$="LO-RES" : ROUTINE=LOPRINT : LOP(2)=VARPTR(A$)
1060 FOR I=2 TO 9 : LOP(3)=I OR &H10 : LOP(0)=I : LOP(1)=3+I
1065   IF I=9 THEN LOP(3)=14 OR &H10
1070   GOSUB 700
1080 NEXT
1100 ROUTINE=LOCIRCLE
1110 LOP(0)=80 : LOP(1)=50 : LOP(3)=5 : LOP(4)=6
1115 LOP(5)=(RND*16) OR &H80
1120 FOR I=2 TO 60 STEP 2
1130 	 LOP(2)=I
1150 	 GOSUB 700
1160 I$=INKEY$ : IF I$<>"" THEN I=60
1170 NEXT
1180 IF I$="" THEN 1115
1200 ROUTINE=LOCLS : LOP(0)=BLACK : GOSUB 700 ' color 0 cls
1210 A$="HI!"+CHR$(13)+"Welcome to LO-RES"+CHR$(13)
1220 ROUTINE=LOPRINT : LOP(0)=0 : LOP(1)=0 : LOP(2)=VARPTR(A$) : LOP(3)=CYAN
1230 GOSUB 700
1240 A$="Type something,"+CHR$(13)+"Hit <Esc> to stop!"+CHR$(13)
1250 ROUTINE=LOPRINT : LOP(2)=VARPTR(A$) : LOP(3)=BLUE : GOSUB 700
1260 LOP(3)=RED :GOSUB 1300
1270 GOTO 1400
1300 ' entry from keyboard
1310 ROUTINE=LOPRINT : TEMP$=""
1320 I$="" : WHILE I$<>CHR$(27) : I$="" : WHILE I$="" : I$=INKEY$ : WEND
1330 IF LEN(I$)>1 THEN 1380
1340 IF I$=CHR$(8) THEN IF LEN(TEMP$) > 0 THEN TEMP$=MID$(TEMP$,1,LEN(TEMP$)-1)
1350 IF I$<>CHR$(8) THEN TEMP$=TEMP$+I$
1360 LOP(2)=VARPTR(I$) : GOSUB 700
1380 WEND : TEMP$=MID$(TEMP$,1,LEN(TEMP$)-1)
1390 RETURN
1400 ROUTINE=LOCLS :LOP(0)=BLUE :GOSUB 700
1410 ROUTINE=LOPRINT :LOP(0)=0 :LOP(1)=0 :LOP(2)=VARPTR(TEMP$) :LOP(3)=LRED :GOSUB 700
1420 A$=CHR$(13)+"Looks like a $5000"+CHR$(13)+"TIMEX 2000."
1430 LOP(3)=YELLOW :LOP(2)=VARPTR(A$) :GOSUB 700
1440 A$=CHR$(13)+"Hit any key for"+CHR$(13)+"PLAYTIME!"
1450 LOP(3)=LCYAN :LOP(2)=VARPTR(A$) :GOSUB 700
1460 I$=INKEY$ : IF I$="" THEN 1460
1470 ROUTINE=LOCLS : LOP(0)=BLACK : GOSUB 700
1500 ' playtime
1540 GOTO 1600
1550 DEF SEG=LOSEG ' call for playtime cursor dot
1560  CALL LORES(PLROUTINE,PL(0))
1570 DEF SEG
1580 RETURN
1600 PLROUTINE=LOPLOT
1610 PL(0)=80 : PL(1)=50 : PL(2)=BLUE
1620 A$="PLAYTIME"+CHR$(13) : K=3 ' k is speed of cursor movement
1630 ROUTINE=LOPRINT : LOP(0)=0 : LOP(1)=0 : LOP(2)=VARPTR(A$) : LOP(3)=RED
1640 GOSUB 700
1650 A$="F1-F7 and Alt F1-F7"+CHR$(13) : LOP(3)=LRED : LOP(2)=VARPTR(A$) : GOSUB 700
1660 A$="=colors, F10 =black"+CHR$(13) : LOP(2)=VARPTR(A$) : GOSUB 700
1670 A$="  Alt-D = Dots."+CHR$(13) : LOP(3)=WHITE : LOP(2)=VARPTR(A$) : GOSUB 700
1680 A$="  Alt-L = Lines."+CHR$(13) : LOP(2)=VARPTR(A$) : GOSUB 700
1690 A$="  Alt-B = Boxes."+CHR$(13) : LOP(2)=VARPTR(A$) : GOSUB 700
1700 A$="  Alt-C = Circles."+CHR$(13) : LOP(2)=VARPTR(A$) : GOSUB 700
1710 A$=" Ins/Del= (Un)Mark."+CHR$(13) : LOP(2)=VARPTR(A$) : GOSUB 700
1715 A$="   <CR> = Set fig."+CHR$(13) : LOP(2)=VARPTR(A$) : GOSUB 700
1717 A$="   + -  = Dot move. " : LOP(2)=VARPTR(A$) : GOSUB 700
1720 A$=" AltP Ff Fb= Paint."+CHR$(13) : LOP(3)=CYAN : LOP(2)=VARPTR(A$) : GOSUB 700
1730 A$=" Hit <Esc> to quit,"+CHR$(13) : LOP(3)=LBLUE : LOP(2)=VARPTR(A$) : GOSUB 700
1740 A$="  F(x) to begin." : LOP(3)=YELLOW : LOP(2)=VARPTR(A$) : GOSUB 700
1750 I$="" : WHILE I$="" : I$=INKEY$ : WEND
1760 IF I$=CHR$(27) THEN GOTO 5000
1770 IF LEN(I$)<>2 THEN 1750
1780 X=ASC(RIGHT$(I$,1))
1790 GOSUB 1800 : IF LOCOLOR=-1 THEN 1750 ELSE BGCOLOR=LOCOLOR : GOTO 1900
1800 IF X>58 AND X<66 THEN LOCOLOR=X-58 : GOTO 1890 ' F1-F7
1810 IF X>103 AND X<111 THEN LOCOLOR=X-95: GOTO 1890 ' AltF1-AltF7
1820 IF X=68 THEN LOCOLOR=0 : GOTO 1890 ' F10
1830 IF X=113 THEN LOCOLOR=8 : GOTO 1890 ' AltF10
1840 LOCOLOR=-1
1890 RETURN
1900 ROUTINE=LOCLS :LOP(0)=LOCOLOR : GOSUB 700 ' clear screen to f(x)
1910 PL(2)=((LOCOLOR +1) MOD 8) OR &H80 : PL(0)=80 : PL(1)=50 : WHICH=2 : ICH=0
1920 PLROUTINE=LOPLOT : GOSUB 1550 ' playtime cursor
1930 ROUTINE=LOLINE : LOP(0)=80 : LOP(1)=50 : LOP(2)=80 : LOP(3)=50
1935 LOP(4)=(LOCOLOR +1) MOD 8 OR &H80 : LOP(5)=0
1940 LOCOLOR=PL(2)
2000 ' playtime get key
2010 I$="" : WHILE I$="" : I$=INKEY$ : WEND
2020   IF I$=INS$ THEN GOSUB 2200 : GOTO 2000
2030   IF I$=DEL$ THEN GOSUB 2300 : GOTO 2000
2035   IF I$=ALTP$ THEN GOSUB 4400 : GOTO 2000
2040   IF I$=ALTX$ THEN GOSUB 4600 : GOTO 2000
2050   X=ASC(RIGHT$(I$,1)) : IF LEN(I$)=2 THEN GOSUB 3000 : GOTO 2000
2060   IF I$="+" THEN K=K+1 : IF K>10 THEN K=10 : BEEP
2070   IF I$="-" THEN K=K-1 : IF K<1 THEN K=1 : BEEP
2075   IF I$>"0" AND I$<":" THEN K=VAL(I$) : GOTO 2000
2080   IF I$=CHR$(27) THEN GOTO 5000
2090   IF I$=CHR$(13) THEN ICH=0 : GOSUB 2400 : GOSUB 1550 : GOTO 2000
2100   GOTO 2000
2200 IF ICH=0 THEN ICH=-1: LOP(0)=PL(0) : LOP(1)=PL(1) ELSE 2240
2210 IF WHICH=1 THEN LOP(2)=LOP(2) AND 127 : LOP(0)=PL(0) : LOP(1)=PL(1)
2220 IF WHICH=2 OR WHICH=3 THEN LOP(2)=PL(0) : LOP(3)=PL(1)
2230 IF WHICH=4 THEN CX=LOP(0) : CY=LOP(1) : GOSUB 1550 : LOP(2)=1
2240 RETURN
2300 IF ICH=-1 THEN ICH=0 : GOSUB 700  ELSE 2390
2310 IF WHICH=1 THEN LOP(2)=LOP(2) OR &H80 : PL(0)=LOP(0) : PL(1)=LOP(1)
2320 IF WHICH=3 THEN PL(0)=LOP(0) : PL(1)=LOP(1) : GOSUB 1550
2330 IF WHICH=2 OR WHICH=3 THEN PL(0)=LOP(2) : PL(1)=LOP(3)
2340 GOSUB 1550
2390 RETURN
2400 ' set figure
2410 IF WHICH=1 THEN LOP(2)=LOP(2) AND 127 : GOSUB 700 : LOP(2)=LOP(2) OR &H80
2420 IF WHICH=2 OR WHICH=3 THEN LOP(4)=LOP(4) AND 127 : GOSUB 700 : LOP(4)=LOP(4) OR &H80
2430 IF WHICH=4 THEN LOP(5)=LOP(5) AND 127 : GOSUB 700 : LOP(5)=LOP(5) OR &H80
2450 IF WHICH=2 OR WHICH=3 THEN LOP(0)=LOP(2) : LOP(1)=LOP(3) : PL(0)=LOP(0)
2455 IF WHICH=2 OR WHICH=3 THEN PL(1)=LOP(1) : LOP(2)=PL(0) : LOP(3)=PL(1)
2460 IF WHICH=4 THEN LOP(2)=2 ' PL(0)=LOP(0) : PL(1)=LOP(1)
2490 RETURN
2500 ' set plot
2510 IF ICH THEN GOSUB 700 ' clear current drawing
2520 GOSUB 2900
2530 ROUTINE=LOPLOT : WHICH=1 : ICH=0 : LOP(2)=LOCOLOR
2590 RETURN
2600 ' set line
2610 IF ICH THEN GOSUB 700 ' clear current drawing
2620 GOSUB 2900
2630 ROUTINE=LOLINE : WHICH=2 : ICH=0 : LOP(4)=LOCOLOR : LOP(5)=0
2640 LOP(2)=LOP(0) : LOP(3)=LOP(1)
2690 RETURN
2700 ' set box
2710 IF ICH THEN GOSUB 700 ' clear current drawing
2720 GOSUB 2900
2730 ROUTINE=LOBOX : WHICH=3 : ICH=0 : LOP(4)=LOCOLOR : LOP(5)=0
2740 LOP(2)=LOP(0) : LOP(3)=LOP(1)
2790 RETURN
2800 ' set circle
2810 IF ICH THEN GOSUB 700 ' clear current drawing
2820 GOSUB 2900
2830 ROUTINE=LOCIRCLE : WHICH=4 : ICH=0 : LOP(2)=2 : LOP(3)=5
2840 LOP(4)=6 : LOP(5)=LOCOLOR
2890 RETURN
2900 ' set pl(x) for next routine
2910 IF ICH=0 THEN 2990 ' skip if not printing
2920 IF WHICH=1 THEN PL(0)=LOP(0) : PL(1)=LOP(1) : GOTO 2990
2930 IF WHICH=2 OR WHICH=3 THEN PL(0)=LOP(2) : PL(1)=LOP(3)
2990 RETURN
3000 ' playtime ext keys
3010 IF X>70 AND X<82 THEN 3400 ' motion
3020 IF X=68 THEN X=0 : GOTO 3200 ' color
3025 IF X=113 THEN X=8 : GOTO 3200 ' color
3030 IF X>58 AND X<66 THEN X=X-58 : GOTO 3200 ' more color
3040 IF X>103 AND X<111 THEN X=X-103 :GOTO 3200 ' more
3050 IF X=32 THEN GOSUB 2500 : GOTO 3100
3060 IF X=38 THEN GOSUB 2600 : GOTO 3100
3070 IF X=48 THEN GOSUB 2700 : GOTO 3100
3080 IF X=46 THEN GOSUB 2800 : GOTO 3100
3100 RETURN
3200 ' color
3210 LOCOLOR=X OR &H80 : IF ICH THEN GOSUB 700 ELSE GOSUB 1550
3220 IF WHICH=1 THEN IF ICH THEN LOP(2)=X ELSE LOP(2)=LOCOLOR
3230 IF WHICH=2 OR WHICH=3 THEN LOP(4)=LOCOLOR
3240 IF WHICH=4 THEN LOP(5)=LOCOLOR
3250 PL(2)=LOCOLOR
3260 IF (PL(2) AND 127 )=BGCOLOR THEN PL(2)=(PL(2)+1) MOD 8 OR &H80
3270 IF PL(2)=&H80 THEN PL(2)=(RND*8) OR &H80 : GOTO 3260
3280 IF ICH THEN GOSUB 700 ELSE GOSUB 1550
3290 RETURN
3400 ' this moves the dot around when no drawing is going on
3410 IF ICH THEN 3600 ELSE GOSUB 1550
3420 IF X=71 THEN PL(0)=PL(0)-K : PL(1)=PL(1)-K : GOTO 3500
3430 IF X=72 THEN PL(1)=PL(1)-K : GOTO 3500
3440 IF X=73 THEN PL(0)=PL(0)+K : PL(1)=PL(1)-K : GOTO 3500
3450 IF X=75 THEN PL(0)=PL(0)-K : GOTO 3500
3460 IF X=77 THEN PL(0)=PL(0)+K : GOTO 3500
3470 IF X=79 THEN PL(0)=PL(0)-K :PL(1)=PL(1)+K : GOTO 3500
3480 IF X=80 THEN PL(1)=PL(1)+K : GOTO 3500
3490 IF X=81 THEN PL(0)=PL(0)+K : PL(1)=PL(1)+K
3500 IF PL(0)<0 THEN PL(0)=0
3510 IF PL(0)>159 THEN PL(0)=159
3520 IF PL(1)<0 THEN PL(1)=0
3530 IF PL(1)>99 THEN PL(1)=99
3550 GOSUB 1550
3590 RETURN
3600 ' if we are drawing, this will branch to the right routine
3610 GOSUB 700 ' draw second for xor
3615 ON WHICH GOTO 3620,3800,3800,4200
3617 ' draw dots
3620 IF X=71 THEN LOP(0)=LOP(0)-K : LOP(1)=LOP(1)-K : GOTO 3700
3630 IF X=72 THEN LOP(1)=LOP(1)-K : GOTO 3700
3640 IF X=73 THEN LOP(0)=LOP(0)+K : LOP(1)=LOP(1)-K : GOTO 3700
3650 IF X=75 THEN LOP(0)=LOP(0)-K : GOTO 3700
3660 IF X=77 THEN LOP(0)=LOP(0)+K : GOTO 3700
3670 IF X=79 THEN LOP(0)=LOP(0)-K :LOP(1)=LOP(1)+1 : GOTO 3700
3680 IF X=80 THEN LOP(1)=LOP(1)+K : GOTO 3700
3690 IF X=81 THEN LOP(0)=LOP(0)+K : LOP(1)=LOP(1)+K
3700 IF LOP(0)<0 THEN LOP(0)=0
3710 IF LOP(0)>159 THEN LOP(0)=159
3720 IF LOP(1)<0 THEN LOP(1)=0
3730 IF LOP(1)>99 THEN LOP(1)=99
3740 PL(0)=LOP(0) :PL(1)=LOP(1)
3750 GOSUB 700
3790 RETURN
3800 ' do lines or boxes.
3820 IF X=71 THEN LOP(2)=LOP(2)-K : LOP(3)=LOP(3)-K : GOTO 3900
3830 IF X=72 THEN LOP(3)=LOP(3)-K : GOTO 3900
3840 IF X=73 THEN LOP(2)=LOP(2)+K : LOP(3)=LOP(3)-K : GOTO 3900
3850 IF X=75 THEN LOP(2)=LOP(2)-K : GOTO 3900
3860 IF X=77 THEN LOP(2)=LOP(2)+K : GOTO 3900
3870 IF X=79 THEN LOP(2)=LOP(2)-K :LOP(3)=LOP(3)+K : GOTO 3900
3880 IF X=80 THEN LOP(3)=LOP(3)+K : GOTO 3900
3890 IF X=81 THEN LOP(2)=LOP(2)+K : LOP(3)=LOP(3)+K
3900 IF LOP(2)<0 THEN LOP(2)=0
3910 IF LOP(2)>159 THEN LOP(2)=159
3920 IF LOP(3)<0 THEN LOP(3)=0
3930 IF LOP(3)>99 THEN LOP(3)=99
3950 GOSUB 700
3990 RETURN
4000 ' draw appropriate figure at current position
4010 IF ICH THEN GOSUB 700
4020 RETURN
4200 ' do circles
4210 IF X=71 THEN PL(0)=PL(0)-K : PL(1)=PL(1)-K : GOTO 4300
4220 IF X=72 THEN PL(1)=PL(1)-K : GOTO 4300
4230 IF X=73 THEN PL(0)=PL(0)+K : PL(1)=PL(1)-K : GOTO 4300
4240 IF X=75 THEN PL(0)=PL(0)-K : GOTO 4300
4250 IF X=77 THEN PL(0)=PL(0)+K : GOTO 4300
4260 IF X=79 THEN PL(0)=PL(0)-K :PL(1)=PL(1)+K : GOTO 4300
4270 IF X=80 THEN PL(1)=PL(1)+K : GOTO 4300
4280 IF X=81 THEN PL(0)=PL(0)+K : PL(1)=PL(1)+K
4300 IF PL(0)<0 THEN PL(0)=0
4310 IF PL(0)>159 THEN PL(0)=159
4320 IF PL(1)<0 THEN PL(1)=0
4330 IF PL(1)>99 THEN PL(1)=99
4340 PLX=ABS(CX-PL(0)) : PLY=ABS(CY-PL(1)) : LOP(2)=SQR(PLX*PLX+PLY*PLY)
4350 IF LOP(2)<2 THEN LOP(2)=1 ELSE IF LOP(2)>159 THEN LOP(2)=159
4360 GOSUB 700
4370 RETURN
4400 ' paint
4410 BEEP : Y=LOCOLOR : GOSUB 1550 ' turn off dot
4420 I$=INKEY$ : IF I$="" THEN 4420
4430 IF LEN(I$)<>2 THEN 4580
4440 X=ASC(RIGHT$(I$,1)) : GOSUB 1800 ' get color or -1 for bogus
4450 IF LOCOLOR=-1 THEN 4540
4460 PL(2)=LOCOLOR
4470 I$=INKEY$ : IF I$="" THEN 4470
4480 IF LEN(I$)<>2 THEN 4540
4490 X=ASC(RIGHT$(I$,1)) : GOSUB 1800
4500 IF LOCOLOR=-1 THEN 4540
4510 PL(3)=LOCOLOR
4520 PLROUTINE=LOPAINT : IF ICH THEN PL(0)=LOP(0) : PL(1)=LOP(1)
4530 GOSUB 1550
4540 LOCOLOR=Y : PLROUTINE=LOPLOT : PL(2)=LOCOLOR
4580 GOSUB 1550
4590 RETURN
4600 ' xor screen
4610 Y=LOCOLOR :Z=PL(0)
4620 I$=INKEY$ : IF I$="" THEN 4620
4630 IF LEN(I$)<>2 THEN 4690
4640 X=ASC(RIGHT$(I$,1)) : GOSUB 1800
4650 IF LOCOLOR=-1 THEN 4680
4660 PLROUTINE=LOCLS :PL(0)=LOCOLOR OR &H80 :GOSUB 1550
4680 PLROUTINE=LOPLOT :PL(0)=Z :LOCOLOR=Y
4690 RETURN
5000 I$="" : ROUTINE=LOCLS : LOP(0)=0 : GOSUB 700 ' clear to black
5010 X=80 : Y=10 : ROUTINE=LOLINE : LOP(4)=BLUE :LOP(5)=0 ' blue, whole line
5020 FOR I=Y TO 90 STEP 8
5030   X=X-4
5040   LOP(0)=X : LOP(1)=I :LOP(2)=0 :LOP(3)=I : GOSUB 700
5050   LOP(1)=I : LOP(2)=X : LOP(3)=99 : GOSUB 700
5060   LOP(0)=160-X : LOP(1)=I : LOP(2)=159 : LOP(3)=I : GOSUB 700
5070   LOP(1)=I : LOP(2)=LOP(0) : LOP(3)=99 : GOSUB 700
5100 NEXT
5110 ROUTINE=LOPAINT : LOP(1)=92 : LOP(3)=BLUE
5120 X=X-2 :Y=1
5130 FOR I=X TO 135 STEP 4
5140   LOP(0)=I : LOP(2)=Y MOD 16 : GOSUB 700 : Y=Y+1
5145   I$=INKEY$ : IF I$<>"" THEN I=135
5150 NEXT : IF I$<>"" THEN 5210
5160 ROUTINE=LOCLS : LOP(0)=(RND*15) OR &H80 : GOSUB 700
5170 I$=INKEY$ : IF I$<>"" THEN 5210
5180 GOTO 5160
5210 GOSUB 250 ' cleanup - restore video mode if on color, restore F-keys
5220 'END
5300 ' menu
5310 CLS
5320 PRINT "That was LO-RES!"
5330 PRINT
5340 PRINT "Hit:"
5350 PRINT "   (1) for the rotating line demo"
5360 PRINT "   (2) for the typing demo"
5370 PRINT "   (3) for the PLAYTIME free-form demo"
5380 PRINT "   (4) for the symmetric lines demo"
5390 PRINT "or,"
5400 PRINT "Hit the <Escape> key to quit."
5410 PRINT
5420 PRINT "Good luck with the LO-RES interface routines,"
5430 PRINT "Please read the descriptions in LORES.DOC,"
5440 PRINT "or follow the BASIC listing to get a feel of"
5450 PRINT "how everything works. Call or send problems to:"
5460 PRINT
5470 PRINT "Marty Smith       CompuServe 72155,1214"
5480 PRINT "310 Cinnamon Oak Lane"
5490 PRINT "Houston, TX  77079"
5500 PRINT "(713) 661-1241 [Days], (713) 464-6737 [Nights]"
5510 LOCATE 9,32,1
5520 I$=INKEY$ : IF I$="" THEN 5510 ELSE PRINT I$;
5530 IF I$>"0" AND I$<"5" THEN X=ASC(I$)-&H30 : GOTO 5600
5540 IF I$=CHR$(27) THEN LOCATE 20,1,1 : END
5550 GOTO 5510
5600 KEY OFF : FOR I=1 TO 10 : KEY I,"" : NEXT
5610 ROUTINE=LOINIT : GOSUB 700
5620 ON X GOTO 810,1200,1500,5000
5630 GOTO 5300
```
{% endraw %}

## LORES.ASM

{% raw %}
```
; lores.asm	3/12/84
; interface routines to use 160x100 mode of color graphics
title	LORES 160x100 Graphics Primitives.
	page	62,100

	public	lores

;	public	first_init,cls,plotdot,getdot
;	public	drawline,box,circle
;	public	random,randomize
;	public	letter,loprint,slowletter
;	public	sin,cos,lopaint

;
;	GENERAL FORM OF ALL ROUTINES FROM BASIC:
;
;	CALL LORES%(ROUTINE%,PARMS%(0))
;
;	Where ROUTINE% is what is to be done,
;	  and PARMS%(0) is an integer array of 6 elements with specs for action.
;
;	Unless the routine returns a value, all elements of PARMS%(x)
;	  are returned unchanged.
;

TRUE	equ	-1
FALSE	equ	0

COMPILER	EQU	FALSE	; set to TRUE for compiler .obj file

REGISTER	equ	3d4h
CRT		equ	3d5h
MODE		equ	3d8h
COLORPORT	equ	3d9h
STATUS		equ	3dah

ROM_TABLE_ADDRESS	equ	0fa6eh	; character patterns in ROM
COLOR_CARD_SEGMENT	equ	0b800h	; where the action is

MULT		equ	261	; for random number generator
MODULUS 	equ	32749

abs0	segment at 0
	org	1dh*4
parm_ptr	label	dword	; for video horizontal sync.
				; LORES respects DOS MODE co80,r
abs0	ends


; Equates for drawline
;
;  stack has address of start of parms.
;	V(0)	= X1	= start col. (0-159)
;	V(1)	= Y1	= start row  (0-99)
;	V(2)	= X2	= end column
;	V(3)	= Y2	= end row
;	V(4)	= color = ( 0-15 )
;	V(5)	= length= 0 for draw whole line, else sub-set
;

ARG1	equ	word ptr [BP+4] 	; 4 for near call, 6 for far

X1	equ	word ptr [si]
Y1	equ	word ptr [si+2]
X2	equ	word ptr [si+4]
Y2	equ	word ptr [si+6]
COLOR	equ	byte ptr [si+8]
LEN	equ	word ptr [si+10]

; these are values that will be inserted in the code for DRAWLINE
	INC_X	equ	41H
	DEC_X	equ	49H
	INC_Y	equ	42H
	DEC_Y	equ	4AH

; these are addresses where new code is overlayed for line
ADJ_LONG_AXIS	equ	byte ptr cs:[di]
ADJ_MASTER	equ	word ptr cs:[di+3]
TEST_MASTER	equ	word ptr cs:[di+7]
ALT_ADJ_MASTER	equ	word ptr cs:[di+13]
ADJ_SHRT_AXIS	equ	byte ptr cs:[di+15]


;cgroup  group	 cseg
cseg	segment para public 'code'
	assume	CS:cseg

lores	proc	far		; entry for all lobio routines
	push	bp
	mov	bp,sp
	mov	ax,COLOR_CARD_SEGMENT
	mov	es,ax		; all routines assume es: for video work
	mov	si,[bp+8]	; routine number
	mov	ax,[si]
	sub	ah,ah
	shl	ax,1
	mov	si,[bp+6]	; array(0)
	mov	bx,ax
	cmp	bx,OUT_OF_RANGE
	jae	loret
	jmp	word ptr cs:[bx+offset jump_table]

loret:
	push	ds
	pop	es
	pop	bp
	ret	4

jump_table	label	word
	dw	offset first	; 0 - array values unused, dummy address needed
	dw	offset cls	; 1 - v(0) = color to clear screen
	dw	offset plot	; 2 - x, y, color
	dw	offset get	; 3 - x, y, color returned in v(2)
	dw	offset line	; 4 - x1,y1,x2,y2,color,length(0 for whole line)
	dw	offset box	; 5 - x1,y1,x2,y2,color,length(set to 0 by lores)
	dw	offset circle_setup ; 6 - x,y,radius,aspect num,aspect den,color
	dw	offset letter1	; 7 - x(0-11),y(0-19),ASC(letter$),color
	dw	offset letter2	; 8 - x,y,letter,foreground,background
	dw	offset print	; 9 - x,y,VARPTR(message$),color
	dw	offset print2	; 10 - does nothing for now
	dw	offset sine	; 11 - x(in degrees),v(1) returns sin*10000
	dw	offset cosine	; 12 - x(in degrees),v(1) returns cos*10000
	dw	offset rnd	; 13 - if v(0)=0 randomize else v(1) rnd 1 to x
	dw	offset switch	; 14 - turn OFF lores, use mode at time of entry
	dw	offset lomode	; 15 - v(0)=IBM video mode else -1 for LORES.
	dw	offset lopaint	; 16 - x,y,fill,boundary

OUT_OF_RANGE	EQU	$-jump_table

;		 0   1	 2   3	 4   5	 6   7	 8   9	out 3d4h
video	db	71h,50h,5ah,0ah,7fh,06h,64h,70h,02h,01h ; out 3d5h
; this is the setup for LORES mode to the 6845 video controller.

seed	dw	41	; random number seed

boxed	dw	6 dup (0)  ; storage for BOX routine

vidmode db	0	; save ibm video mode on initialization
lostat	db	0	; is LORES active?
locolor db	0	; init=0, cls sets to value-used by print for scroll

first:
	call	first_init
	jmp	loret

plot:
	mov	dx,Y1
	mov	cx,X1
	mov	ax,X2
	sub	ah,ah
	call	plotdot
	jmp	loret

get:
	mov	dx,Y1
	mov	cx,X1
	call	getdot
	mov	X2,ax
	jmp	loret

line:
	push	si
	call	drawline
	jmp	loret

circle_setup:
	mov	ax,X1	   ; x
	push	ax
	mov	ax,Y1	   ; y
	push	ax
	mov	ax,X2	   ; radius
	or	ax,ax
	jz	cir_abort1 ; zero for radius leads to divide by zero error
	push	ax
	mov	ax,Y2	   ; aspect numerator
	or	ax,ax
	jz	cir_abort2 ; zero in aspect ratio is bogus too
	push	ax
	mov	ax,[si+8]  ; aspect denominator
	or	ax,ax
	jz	cir_abort3 ; so abort routine for safety.
	push	ax
	mov	ax,LEN	   ; color
	push	ax

	call	circle
	jmp	loret

cir_abort3:
	pop	ax	   ; safe circle exit for error conditions.
cir_abort2:
	pop	ax
cir_abort1:
	pop	ax
	pop	ax
	jmp	loret

letter1:
	mov	ax,Y2	; color
	mov	ah,al
	mov	bx,X2	; ascii value of letter
	mov	al,bl
	mov	dx,X1	; row (0-11)
	mov	dh,dl
	mov	bx,Y1	; col (0-19)
	mov	dl,bl

	call	letter	; print letter at pos. Ignor background
	jmp	loret

letter2:
	mov	ax,Y2	; color
	mov	ah,al
	mov	al,COLOR
	mov	cl,4
	shl	al,cl
	or	ah,al	; background
	mov	bx,X2	; letter
	mov	al,bl
	mov	dx,X1	; row
	mov	dh,dl
	mov	bx,Y1	; col
	mov	dl,bl

	call	slowletter  ; print letter in color,background - fill all dots.
	jmp	loret

print:
	mov	ax,Y2    ; color. if bit 7 set, print as xor
	mov	ah,al
	mov	dx,X1	; row (0-11)
	mov	dh,dl
	mov	bx,Y1	; col (0-19)
	mov	dl,bl
	mov	bx,X2	; varptr of string
	push	si
IF COMPILER
	mov	cx,[bx] ; compiler uses two bytes for string - max len=32767
	inc	bx
	inc	bx
	mov	si,[bx]

ELSE
	mov	cl,[bx] ; interpreter uses one byte.
	sub	ch,ch
	inc	bx
	mov	si,[bx]

ENDIF
	call	loprint ; this will figure out which way to print.
	pop	si	; get back v(0)
	sub	ax,ax
	mov	al,dh	; x
	mov	X1,ax
	mov	al,dl	; y
	mov	Y1,ax
	jmp	loret

print2:
	jmp	loret

lopaint:
	mov	cx,X1	; col
	mov	dx,Y1	; row
	mov	bx,X2	; fill color
	and	bl,7fh	; xor in paint leads to problems
	mov	ax,Y2	; boundary color
	mov	bh,al	; bh=bound,bl=fill
	mov	al,cl	; make one word since
	mov	ah,dl	; row=0-99,col=0-159. Save stack space.
	push	ax	; save on stack for first.

	call	lopaintr ; solve recursively
	jmp	loret	; back I hope.

sine:
	mov	ax,X1	; sin/cos use DEGREES, not radians
			; return result in v(1) as value*10000
sine1:
	cmp	ax,360	; scale to 0-319 range.
	jb	sine2
	sub	ax,360
	jmp	sine1

sine2:
	call	sin
	mov	Y1,ax	; return in v(1)
	jmp	loret

cosine:
	mov	ax,X1

cosine1:
	cmp	ax,360
	jb	cosine2
	sub	ax,360
	jmp	cosine1

cosine2:
	call	cos
	mov	Y1,ax
	jmp	loret

rnd:
	mov	ax,X1	; get number
	or	ax,ax
	jz	rnd1	; if its 0 then reseed generator
	call	random
	mov	Y1,ax	; else return rnd from 1 to x in array(1)
	jmp	loret

rnd1:
	call	randomize
	mov	ax,0ffffh  ; put -1 in array(0) to indicate done
	mov	X1,ax
	jmp	loret

lomode:
	call	lomo		; check for LORES active,
	jmp	loret		; else return IBM video mode.

lores	endp

lomo	proc	near
	mov	al,cs:lostat	; lostat set to -1 if lores active
	or	al,al
	jz	lomo1
	mov	ax,-1
	mov	X1,ax
	ret

lomo1:
	mov	ah,15		; if not active, return actual video state
	int	10h
	mov	cs:vidmode,al
	sub	ah,ah
	mov	X1,ax
	ret
lomo	endp

switch	proc	near
; turn off lores mode, restoring original screen mode. If on mono, do nothing.

	sub	al,al
	mov	cs:lostat,al	; indicate off
	mov	al,cs:vidmode
	cmp	al,7		; mono screen?
	jz	swit1		; don't do anything,
	sub	ah,ah		; else restore mode on init.
	push	bp
	push	si
	int	10h
	pop	si
	pop	bp
swit1:
	jmp	loret

switch	endp

first_init    proc    near
; set up screen
; no regs changed
	push	si
	push	dx
	push	cx
	push	bx
	push	ax
	mov	ah,15		; store current mode for later
	int	10h
	mov	cs:vidmode,al
	mov	dx,MODE
	mov	al,1		; turn off video for setup
	out	dx,al

	push	ds		; save to get horiz. sync from table
	mov	ax,abs0
	mov	ds,ax		; parm_ptr at 0:74h

	assume	ds:abs0
	lds	bx,parm_ptr
	add	bx,12h		; points to 80x25 synch
	mov	al,[bx] 	; get value
	pop	ds		; back to start value.
	assume	ds:nothing

	mov	si,offset cs:video
	mov	cs:[si+2],al	; store in our table

	mov	dx,REGISTER	; 6845 out 3d4 then out 3d5
	mov	cx,10		; set ten regs

finit_loop:
	mov	al,10
	sub	al,cl
	out	dx,al
	inc	dx
	mov	al,cs:[si]
	out	dx,al
	inc	si
	dec	dx

	loop	finit_loop


	mov	cx,1fffh
	mov	di,0
	mov	ax,00deh	; set to black
	cld
	rep	stosw

	mov	dx,MODE
	mov	al,9
	out	dx,al		; re-enable video, disable blink

	mov	al,0ffh
	mov	cs:lostat,al	; indicate on
	sub	al,al
	mov	cs:locolor,al	; color 0 (black)

	pop	ax
	pop	bx
	pop	cx
	pop	dx
	pop	si		; restore-return
	ret

first_init    endp

cls	proc	near
; CLS to color in AL
; AX changed, others preserved

	mov	ax,[si] 	; color
	mov	cs:locolor,al	; store for later
	and	cs:locolor,7fh	; strip off xor bit
	push	di
	push	dx
	push	cx		; save regs

	test	al,80h		; want an xor?
	jz	cls10
	call	cls_xor
	jmp	cls20

cls10:
	push	ax		; save color
	mov	dx,MODE
	mov	al,1		; turn off video for setup
	out	dx,al

	mov	cx,1fffh
	mov	di,0
	pop	ax		; get color spec
	and	al,0fh		; only 0-15
	mov	ah,al		; copy
	shl	al,1		; mov lo 4 bits to high
	shl	al,1
	shl	al,1
	shl	al,1
	or	ah,al		; same color to each dot

	mov	al,0deh        ; character for setup
	cld
	rep	stosw

	mov	dx,MODE
	mov	al,9
	out	dx,al		; re-enable video, disable blink

cls20:
	pop	cx		; restore regs
	pop	dx
	pop	di
	jmp	loret		; back to caller

cls_xor:
	push	ds
	push	es
	pop	ds		; use ds to avoid seg override.
	push	bx
	and	al,0fh		; only 0-15
	mov	di,1		; first attribute pos.
	mov	bl,al		; copy color to bl
	mov	cl,4
	shl	bl,cl		; shift lo4 bits to hi
	or	bl,al		; get back orig. bl makes two dots.
	mov	cx,8000 	; attributes
	mov	dx,STATUS

clxr10:
	in	al,dx		; wait for horiz. retrace
	test	al,1		; for action
	jnz	clxr10
	cli

clxr20:
	in	al,dx
	test	al,1
	jz	clxr20
				; xor to memory takes too long for
	mov	ah,[di] 	; horiz. retrace window.
	sti			; interrupts ok.
	xor	ah,bl
clxr30:
	in	al,dx		; wait for horiz. retrace
	test	al,1		; for action
	jnz	clxr30
	cli

clxr40: 			; this takes longer, but makes no snow
	in	al,dx
	test	al,1
	jz	clxr40

	mov	[di],ah 	; back to screen
	sti
	inc	di		; get to next
	inc	di
	loop	clxr10		; do till done.

	pop	bx		; keep it neat
	pop	ds
	ret			; back to caller

cls	endp

plotdot proc	near
; set a dot to color
;    DX = row	( 0-99 )
;    CX = col	( 0-159 )
;    AL = color
; assumes ES points to video memory
; all regs preserved.
; plotdot mimics int 10h write dot, including xor dot
	push	dx
	push	si		; save regs
	push	cx
	push	bx
	push	ax
	cmp	dx,99		; don't do for out of range
	ja	pdbridge	; no jump takes less time
	cmp	cx,159
	ja	pdbridge
	push	ax		; save color
	mov	ax,dx		; copy row to ax
	shl	ax,1		; *2   row*160=
	shl	ax,1		; *4   row*128
	shl	ax,1		; *8
	shl	ax,1		; *16
	shl	ax,1		; *32
	shl	ax,1		; *64
	shl	ax,1		; *128
	shl	dx,1		; *2   + row*32
	shl	dx,1		; *4
	shl	dx,1		; *8   in 27 clocks
	shl	dx,1		; *16  instead of ~80
	shl	dx,1		; *32
	add	ax,dx		; row*128 + row*32
	mov	si,ax		; move to si
	add	si,cx		; + col
	or	si,1		; adjust for attribute
	pop	bx		; get back color

	mov	dx,STATUS

pdw1:
	in	al,dx
	test	al,1
	jnz	pdw1		; wait for horiz. retrace
	cli			; no more interrupts

pdw2:
	in	al,dx		; get status
	test	al,1		; is it high
	jz	pdw2		; wait till it is

	mov	bh,es:[si]	; get current byte
	sti			; interrupts ok
	test	cx,1		; check odd/even
	jz	pd1
	test	bl,80h		; check for xor
	jz	pdw2a		; no, jump
	mov	ch,bh		; save orig
	xor	bh,bl		; xor both
	and	bh,0fh		; mask out other dot
	and	ch,0f0h 	; mask our dot
	or	bh,ch		; combine
	jmp	short pdw3	; onward

pdbridge:
	jmp	pdret		; hop skip and a jump
pdw2a:
	and	bh,0f0h 	; its odd - set foreground
	and	bl,0fh		; filter bogus color
	or	bh,bl		; combine

pdw3:
	in	al,dx		; wait for horiz. retrace
	test	al,1
	jnz	pdw3
	cli

pdw4:
	in	al,dx
	test	al,1
	jz	pdw4

	mov	es:[si],bh	; back to screen
	sti
	jmp	short pdret

pd1:
	test	bl,80h		; check for xor
	jz	pd1a		; no-go on
	shl	bl,1		; shift to background
	shl	bl,1
	shl	bl,1
	shl	bl,1

	mov	ch,bh		; save orig
	xor	bh,bl		; xor both
	and	bh,0f0h 	; mask out other dot
	and	ch,0fh		; mask our dot
	or	bh,ch		; combine
	jmp	short pdw5	; onward

pd1a:
	and	bh,0fh		; save foreground
	shl	bl,1		; shift to background
	shl	bl,1
	shl	bl,1
	shl	bl,1
	or	bh,bl		; combine

pdw5:
	in	al,dx		; wait retrace to store on screen
	test	al,1
	jnz	pdw5
	cli

pdw6:
	in	al,dx
	test	al,1
	jz	pdw6
	mov	es:[si],bh
	sti

pdret:
	pop	ax
	pop	bx
	pop	cx
	pop	si
	pop	dx
	ret			; back to caller

plotdot endp

getdot	proc	near
; get a dot, return color
;    DX = row	( 0-99 )
;    CX = col	( 0-159 )
;    returns AX = color, or -1 if request out of range
; assumes ES points to video memory
	push	dx
	push	si		; save regs
	push	cx
	push	bx
	cmp	dx,99		; don't do for out of range
	ja	gdret_bad
	cmp	cx,159
	ja	gdret_bad
	mov	ax,dx
	mov	bl,160
	mul	bl		; 160 * row
	mov	si,ax
	add	si,cx		; + col
	or	si,1		; adjust for attribute

	mov	dx,STATUS

gdw1:
	in	al,dx
	test	al,1
	jnz	gdw1		; wait for horiz. retrace
	cli			; no more interrupts

gdw2:
	in	al,dx		; get status
	test	al,1		; is it high
	jz	gdw2		; wait till it is

	mov	al,es:[si]	; get current byte
	sti			; interrupts ok

	test	cl,1		; odd?
	jz	gd1
	and	al,0fh		; filter other dot
	sub	ah,ah
	jmp	short gdret	;back

gd1:
	mov	cl,4
	shr	al,cl		; hi dot to low
	sub	ah,ah
	jmp	short gdret

gdret_bad:
	mov	ax,0ffffh	; -1 = out of range

gdret:
	pop	bx
	pop	cx
	pop	si
	pop	dx
	ret


getdot	endp


;	DRAWLINE.ASM  - - as a near call
;	from Dr. Dobbs -- June 1983, p.75
;	Uses fast-line drawing technique from BYTE, Aug. 81
;
;	args in array parms
;	X1	Y1	X2	Y2	COLOR	LEN
;	push parms offset on stack, discarded on return
;	i.e. push address_of_first_array_element
;	don't expect it to be there on return
;	segments, bp preserved, others changed.

drawline proc	near
	push	bp
	mov	bp,sp
	mov	si,ARG1   ; i.e. V%(0)
	mov	bl,INC_X
	mov	ax,X2
	sub	ax,X1
	jge	dl1
	mov	bl,DEC_X
	neg	ax
dl1:
	mov	cx,ax
	mov	bh,INC_Y
	mov	ax,Y2
	sub	ax,Y1
	jge	dl2
	mov	bh,DEC_Y
	neg	ax
dl2:
	mov	dx,ax
	mov	di,offset cs:modify_base
	cmp	dx,cx
	jge	dl3
	xchg	cx,dx
	xchg	bl,bh
dl3:
	mov	ADJ_LONG_AXIS,bh
	mov	ADJ_MASTER,cx
	shr	cx,1
	mov	TEST_MASTER,cx
	mov	ALT_ADJ_MASTER,dx
	mov	ADJ_SHRT_AXIS,bl
	mov	di,dx
	cmp	LEN,0
	jle	dl4
	mov	di,LEN
dl4:
	mov	cx,X1
	mov	dx,Y1
	mov	al,COLOR
	sub	bx,bx
dl5:
	call	plotdot

modify_base	label	byte

	inc	cx
	add	bx,1111H
	cmp	bx,1111H
	jle	dl6
	sub	bx,1111H
	inc	dx
dl6:
	dec	di
	jge	dl5

	pop	bp
	ret	2
drawline endp

box	proc	near
; parms set up in boxed
; segments, bp preserved, others changed

	mov	di,offset boxed
	push	di
	push	si		; save for us
	push	es
	push	cs
	pop	es
	mov	cx,12		; get args to temp area
	cld
	rep	movsb
	pop	es
	pop	si
	pop	di
	mov	ax,cs:boxed	; bx1
	mov	X1,ax
	mov	ax,cs:boxed+2	; by1
	mov	Y1,ax
	mov	Y2,ax		; y2=y1
	mov	ax,cs:boxed+4	; bx2
	mov	X2,ax
	sub	ax,ax
	mov	LEN,ax		; length = whole

	push	si
	push	si		; store for drawline
	call	drawline

	pop	si
	push	si
	mov	ax,cs:boxed+4	; bx2
	mov	X1,ax
	mov	ax,cs:boxed+6	; by2
	mov	Y2,ax		; y2 (y1 ok from last)

	push	si
	call	drawline

	pop	si
	push	si
	mov	ax,cs:boxed+6	; by2
	mov	Y1,ax		; y1
	mov	ax,cs:boxed	; bx1
	mov	X2,ax		; x2

	push	si
	call	drawline

	pop	si
	push	si

	mov	ax,cs:boxed	; bx1
	mov	X1,ax		; x1
	mov	ax,cs:boxed+2	; by1
	mov	Y2,ax		; y2

	push	si
	call	drawline

	pop	di

	mov	si,offset boxed
	push	cs
	push	ds
	pop	es
	pop	ds

	mov	cx,12		; put args back in array
	cld
	rep	movsb

	mov	ax,es
	mov	ds,ax

	jmp	loret

box	endp

;-----------------------------------
; procedure
; circle(x,y,radius,number,denom,color:integer)
;
; Dan Lee  July 1, 1982
; SourceWare
;
; draws a circle at center (x,y) with aspect
; ratio numer/denom; radius in column units
;
; assumes entry via inter-segment call,
;	modified here as intra-segment
; frame:	value x 	: bp+16
;		value y 	: bp+14
;		value radius	: bp+12
;		value numer	: bp+10
;		value denom	: bp+8
;		value color	: bp+6
; segments, bp preserved, others changed
;--------------------------------------

circle	proc	near
	push	bp
	push	bp		; as substitute for near
	mov	bp,sp
	mov	ax,[bp+10]
	mov	bx,1024
	imul	bx
	mov	cx,[bp+8]
	idiv	cx
	push	ax
	xchg	ax,cx
	mov	cx,[bp+10]
	imul	bx
	idiv	cx
	mov	[bp+8],ax
	pop	ax
	mov	[bp+10],ax

; start by incrementing Y by one unit and
; decrementing X by TAN units*inv aspect
; start at (RADIUS,Y) and plot to 45 degrees

	mov	ax,[bp+12]
	mov	bx,1024
	imul	bx
	sub	di,di

cr5:
	push	ax
	push	dx
	sub	bx,bx
	add	ax,512
	adc	dx,bx
	mov	bx,1024
	idiv	bx
	mov	bx,ax
	add	ax,[bp+16]
	mov	dx,[bp+14]
	sub	dx,di
	mov	cx,ax
	mov	al,[bp+6]
	mov	ah,12
	call	plotdot
	sub	cx,bx
	sub	cx,bx
	call	plotdot
	add	dx,di
	add	dx,di
	call	plotdot
	add	cx,bx
	add	cx,bx
	call	plotdot

; cx now at original point

	xchg	cx,bx
	inc	di
	mov	ax,di
	mov	bx,[bp+8]
	imul	bx
	idiv	cx
	sub	dx,dx
	mov	si,ax
	idiv	bx
	cmp	ax,1
	pop	dx
	pop	ax
	jae	cr7
	neg	si
	mov	bx,-1
	add	ax,si
	adc	dx,bx
	jmp	short cr5

; plot 45 to 90 degrees
; now decrease X by one unit and
; increase Y by COT units*aspect ratio

cr7:
	mov	ax,di
	mov	bx,1024
	imul	bx
	mov	di,cx
	dec	di

cr8:
	push	ax
	push	dx
	sub	bx,bx
	add	ax,512
	adc	dx,bx
	mov	bx,1024
	idiv	bx
	mov	bx,ax
	add	ax,[bp+14]
	mov	cx,[bp+16]
	add	cx,di
	mov	dx,ax
	mov	al,[bp+6]
	mov	ah,12
	call	plotdot

	sub	cx,di
	sub	cx,di
	call	plotdot
	sub	dx,bx
	sub	dx,bx
	call	plotdot
	add	cx,di
	add	cx,di
	call	plotdot
	sub	dx,[bp+14]
	neg	dx
	xchg	cx,dx
	or	di,di
	js	cr11
	dec	di
	mov	ax,di
	mov	bx,[bp+10]
	imul	bx
	idiv	cx
	mov	si,ax

	pop	dx
	pop	ax
	sub	bx,bx
	or	si,si
	jns	cr10
	mov	bx,-1

cr10:
	add	ax,si
	adc	dx,bx
	jmp	short cr8

; exit

cr11:
	add	sp,4
	pop	bp
	pop	bp
	ret	12

circle	endp

lopaintr proc	 near
; using boundary fill recursive algorithm
; from Fundamentals of Interactive Computer Graphics
; by J.D. Foley and A. Van Dam
; Addison-Wesley 1982, p. 450
; has one stack data as hi=row,lo=col
; BX has been set with color as BH=boundary,BL=fill color

	push	bp
	mov	bp,sp
	mov	cl,[bp+4]	; lo byte=col
	sub	ch,ch		; 0-159
	mov	dl,[bp+5]	; hi byte=row
	sub	dh,dh
	mov	si,cx		; save for left scan

scan_write_right:
	mov	al,bl		; fill color
	call	plotdot
	inc	cx
	call	getdot
	cmp	al,bl		; is it fill color?
	jz	lpr10
	cmp	al,bh		; is it boundary color?
	jz	lpr10
	cmp	al,0ffh 	; is it out of range?
	jz	lpr10
	jmp	scan_write_right ; no, keep going

lpr10:
	dec	cx
	xchg	si,cx		; save rightmost for later

scan_write_left:
	mov	al,bl
	call	plotdot
	dec	cx
	call	getdot
	cmp	al,bl		; is it fill color?
	jz	lpr20
	cmp	al,bh		; is it boundary color?
	jz	lpr20
	cmp	al,0ffh 	; is it out of range?
	jz	lpr20
	jmp	scan_write_left ; no, keep going

lpr20:
	inc	cx
	mov	di,cx		; save leftmost

	dec	dx		; up one line
	cmp	dx,0		; is less than 0?
	jl	find_down_right
	mov	cx,si		; recover right

find_up_right:
	cmp	cx,di		; end of scan?
	jl	find_down_right
	call	getdot
	cmp	al,bl		; fill color?
	jz	lpr40		; scan for start
	cmp	al,bh		; boundary color?
	jz	lpr40
lpr25:				; if not fill/bound, stack it
	mov	ah,dl		; row to hi
	mov	al,cl		; col to lo
	push	ax		; its a start, save on stack

lpr30:				; scan for boundary/fill
	dec	cx
	cmp	cx,di		; end of scan?
	jl	find_down_right
	call	getdot
	cmp	al,bl		; is it fill?
	jz	lpr40
	cmp	al,bh		; or boundary?
	jz	lpr40		; if so, look for start
	jmp	lpr30		; else continue

lpr40:
	dec	cx
	cmp	cx,di
	jl	find_down_right
	call	getdot
	cmp	al,bl		; is it fill?
	jz	lpr40
	cmp	al,bh		; or boundary?
	jz	lpr40		; if so continue scan
	jmp	lpr25		; its a start

find_down_right:
	mov	cx,si		; recover right
	inc	dx
	inc	dx		; scan row below
	cmp	dx,99
	ja	do_while

	cmp	cx,di		; end of scan?
	jl	do_while
	call	getdot
	cmp	al,bl		; fill color?
	jz	lpr60		; scan for start
	cmp	al,bh		; boundary color?
	jz	lpr60
lpr45:
	mov	ah,dl		; row to hi
	mov	al,cl		; col to lo
	push	ax		; its a start, save on stack

lpr50:				; scan for boundary/fill
	dec	cx
	cmp	cx,di		; end of scan?
	jl	do_while
	call	getdot
	cmp	al,bl		; is it fill?
	jz	lpr60
	cmp	al,bh		; or boundary?
	jz	lpr60		; if so, look for start
	jmp	lpr50		; else continue

lpr60:
	dec	cx
	cmp	cx,di
	jl	do_while
	call	getdot
	cmp	al,bl		; is it fill?
	jz	lpr60
	cmp	al,bh		; or boundary?
	jz	lpr60		; if so continue scan
	jmp	lpr45		; its a start

do_while:
	cmp	sp,bp		; any pushed addresses?
	jae	lprret		; sp=bp means no work pending
				; sp>bp means trouble
	call	lopaintr	; resolve stacked right addresses
	jmp	do_while	; then check again

lprret:
	pop	bp		; recover last frame
	ret	2		; discard data

lopaintr	endp

random	proc	near
; return random number from 1 to ax
; AX changed to random, other regs. preserved

	push	dx
	push	cx
	push	bx
	push	ax		; rnd request

	call	rn1		; AX has seed
	pop	cx		; get back request
	mov	dx,0		; only 16 bit
	idiv	cx		; divide
	xchg	ax,dx		; just want remainder
	inc	ax		; 1 to AX
	pop	bx
	pop	cx
	pop	dx

	ret			; back to caller

rn1:
	mov	ax,cs:seed	; seed @
	mov	cx,MULT 	; MULT
	mov	dx,0		; clear out msw
	imul	cx		; M*
	mov	cx,MODULUS	; MODULUS
	idiv	cx		; M/MOD

	mov	cs:seed,dx	; seed !
	xchg	ax,dx		; set up for MOD

	ret

randomize:
; reseed random number generator
; no regs changed
	push	ax
	push	cx
	push	dx

	sub	ah,ah
	int	1ah		; time of day
	sub	dh,dh		; DX has low word
	xchg	ax,dx
	mov	cx,100
	div	cl		; only 8 bits needed
	mov	cl,ah		; get remainder
	inc	cx

rn2:
	push	cx
	call	rn1
	pop	cx

	loop	rn2

	pop	dx
	pop	cx
	pop	ax

	ret

random	endp

letter	proc	near
; prints letter in al with color in ah
; at location specied in dl,dh
; There are 12 lines of 20 characters,
; DH = row = 0-11, DL = col = 0-19.

; first calculate screen position for top left dot.
; translate DX to screen coordinates.

; This is fast version, only sets dots that are on.
; use slowletter for background other than current.

	push	ds	; only AX lost
	push	si
	push	dx
	push	cx
	push	bx

	push	ax	; save letter and color
	mov	al,dh	; row
	cbw
	shl	ax,1
	shl	ax,1	; 8 dots verticle and horizontal
	shl	ax,1	; times rows
	mov	dh,al	; store screen pos. in dh - 8 bits ok
	mov	al,dl	; col
	cbw
	shl	ax,1
	shl	ax,1
	shl	ax,1	; for columns
	mov	dl,al	; store screen pos. in dl
	mov	ax,0f000h
	mov	ds,ax	; rom table
	mov	si,ROM_TABLE_ADDRESS
	pop	cx	; get back letter and color
	mov	al,cl	; 8 bytes per character
	cbw
	shl	ax,1
	shl	ax,1
	shl	ax,1	; times character
	add	si,ax	; offset into table
	mov	al,ch	; color
	mov	bl,ch	; store here too
	mov	cx,8	; eight shows up a lot

let1:
	push	dx	; save screen pos.
	mov	ah,[si] ; get bit-pattern
	mov	bh,80h	; mask


let2:
	test	ah,bh	; check for dot
	jz	let4	; if no dot skip

let3:
	push	dx
	push	cx
	mov	cl,dl	; col
	mov	ch,0
	mov	dl,dh	; row
	mov	dh,0
	call	plotdot
	pop	cx
	pop	dx

let4:
	shr	bh,1	; mask
	jc	let5	; when bit drops out we're done
	inc	dl	; set to next dot to right
	jmp	let2

let5:
	pop	dx	; get back orig.
	inc	dh	; set to next row.
	inc	si	; set to next byte.

	loop	let1	; do for whole matrix (8x8)

	pop	bx	; restore regs.
	pop	cx
	pop	dx
	pop	si
	pop	ds

	ret		; back to caller

letter	endp


slowletter  proc    near
; prints letter in al with color in ah
; at location specied in dl,dh
; There are 12 lines of 20 characters,
; DH = row = 0-11, DL = col = 0-19.

; first calculate screen position for top left dot.
; translate DX to screen coordinates.

	push	ds	; only AX lost
	push	si
	push	dx
	push	cx
	push	bx

	push	ax	; save letter and color
	mov	al,dh	; row
	cbw
	shl	ax,1
	shl	ax,1	; 8 dots verticle and horizontal
	shl	ax,1	; times rows
	mov	dh,al	; store screen pos. in dh - 8 bits ok
	mov	al,dl	; col
	cbw
	shl	ax,1
	shl	ax,1
	shl	ax,1	; for columns
	mov	dl,al	; store screen pos. in dl
	mov	ax,0f000h
	mov	ds,ax	; rom table
	mov	si,ROM_TABLE_ADDRESS
	pop	cx	; get back letter and color
	mov	al,cl	; 8 bytes per character
	cbw
	shl	ax,1
	shl	ax,1
	shl	ax,1	; times character
	add	si,ax	; offset into table
	mov	al,ch	; color
	mov	bl,ch	; store here too
	mov	cx,8	; eight shows up a lot

slet1:
	push	dx	; save screen pos.
	mov	ah,[si] ; get bit-pattern
	mov	bh,80h	; mask


slet2:
	test	ah,bh	; check for dot
	jnz	slet3	; if dot skip
	push	dx	; code here will set black dots
	push	cx	; in space where there should be no dots.
	call	bgrnd	; get background color for plotdot
	mov	cl,dl	; col
	sub	ch,ch
	mov	dl,dh	; row
	sub	dh,dh
	call	plotdot ; set to black
	pop	cx
	pop	dx
	mov	al,bl	; get back color
	jmp	slet4

slet3:
	push	dx
	push	cx
	mov	cl,dl	; col
	sub	ch,ch
	mov	dl,dh	; row
	sub	dh,dh
	call	plotdot
	pop	cx
	pop	dx

slet4:
	shr	bh,1	; mask
	jc	slet5	; when bit drops out we're done
	inc	dl	; set to next dot to right
	jmp	slet2

slet5:
	pop	dx	; get back orig.
	inc	dh	; set to next row.
	inc	si	; set to next byte.

	loop	slet1	; do for whole matrix (8x8)

	pop	bx	; restore regs.
	pop	cx
	pop	dx
	pop	si
	pop	ds

	ret		; back to caller

bgrnd:
; make a background out of al, account for xor
	test	al,80h
	jnz	bgrnd1
	shr	al,1
	shr	al,1
	shr	al,1
	shr	al,1	; move to foreground dot

	ret

bgrnd1:
	shr	al,1
	shr	al,1
	shr	al,1
	shr	al,1
	or	al,80h

	ret

slowletter  endp

loprint proc	near
; print a BASIC string - CX has length.
; at DH=row, DL=col, AH=color, DS:SI point to string
; returns with DH,DL containing next locate position
; AX, SI, CX, DX changed. Others OK.

	cmp	dh,11
	ja	lopret	; reject out of range
	cmp	dl,19
	ja	lopret
	or	cx,cx	; EOS?
	jz	lopret
	test	ah,0f0h ; using backgrounds?
	jnz	lop3

lop1:
	mov	al,[si] ; get char
	cmp	al,13	; CR?
	jz	lop1c
	cmp	al,8	; BS?
	jnz	lop1b
	call	back_space
	jmp	short lop2
lop1b:
	push	ax	; color save
	call	letter
	pop	ax

	inc	dl
	cmp	dl,20	; too far over?
	jnz	lop2
lop1c:
	inc	dh
	cmp	dh,12	; too far down?
	jnz	lop1a	; scroll screen
	call	loscroll
	mov	dh,11
lop1a:
	mov	dl,0	; set to start of next line

lop2:
	inc	si

	loop	lop1

lopret:
	ret

lop3:
	mov	al,[si] ; get char
	cmp	al,13	; CR?
	jz	lop3c
	cmp	al,8	; BS?
	jnz	lop3b
	call	back_space
	jmp	short lop4
lop3b:

	push	ax	; color save
	call	slowletter
	pop	ax

	inc	dl
	cmp	dl,20	; too far over?
	jnz	lop4
lop3c:
	inc	dh
	cmp	dh,12	; too far down?
	jnz	lop3a	; scroll screen
	call	loscroll
	mov	dh,11
lop3a:
	mov	dl,0	; set to start of next line

lop4:
	inc	si
	loop	lop3
	jmp	lopret

loprint endp

back_space	proc	near
	push	ax
	push	cx
	or	dl,dl	; at first col?
	jnz	bs1
	or	dh,dh	; at first row?
	jz	bsret	; nothing to do.
	dec	dh	; else set to one row up
	mov	dl,20	; and last col+1

bs1:
	dec	dl	; one space back
	mov	al,' '  ; make a space
	mov	ah,cs:locolor	; background color
	mov	cl,4	; move to bkgrnd
	shl	ah,cl
	call	slowletter	; make it

bsret:
	pop	cx
	pop	ax
	ret

back_space	endp

loscroll	proc	near
; scroll lores screen 1 row, use value in locolor for blank row
	push	ax
	push	bx
	push	cx
	push	dx
	push	si

	push	ds
	push	es
	pop	ds	; es,ds point to video
	mov	si,1280 ; row 1, col 0
	mov	di,0	; row 0, col 0
	mov	cx,14720 ; 160 bytes/row * 92 rows

	mov	dx,MODE
	mov	al,1
	out	dx,al	; turn off video or it will start snowing

	cld
	rep	movsb	; do scroll
	mov	ah,cs:locolor	; use last cls or init for blank line
	and	ah,0fh	;
	mov	bl,ah
	mov	cl,4
	shl	bl,cl	; move color into both halves of attribute
	or	ah,bl	; combine
	mov	al,0deh ; char 222
	mov	di,14080 ; row 88, col 0
	mov	cx,960
	cld
	rep	stosw	; store ax in screen[di]

	mov	dx,MODE
	mov	al,9
	out	dx,al	; turn on video

	pop	ds	; get back BASIC info

	pop	si
	pop	dx
	pop	cx
	pop	bx
	pop	ax
	ret

loscroll	endp

; trig lookup functions
; from Dr. Dobbs - Oct. 82 p.53
; by Ray Duncan from public domain FORTH
; program by John James

trig_lookup	proc	near

trig:
	mov	bx,ax
	cmp	bx,90
	jle	trig1
	sub	bx,180
	neg	bx

trig1:
	sal	bx,1
	mov	ax,cs:sintbl[bx]
	ret

cos:
	add	ax,90

sin:
	push	dx
	push	bx
	cwd
	mov	bx,360
	idiv	bx
	mov	ax,dx
	or	ax,ax
	jns	sin2
	add	ax,360

sin2:
	cmp	ax,180
	jle	sin3
	sub	ax,180
	call	trig

	neg	ax
	jmp	sin4

sin3:
	call	trig

sin4:
	pop	bx
	pop	dx
	ret		; to caller

sintbl	dw	0	; 0 degrees
	dw	175
	dw	349
	dw	523
	dw	698
	dw	872
	dw	1045
	dw	1219
	dw	1392
	dw	1564
	dw	1736	; 10
	dw	1908
	dw	2079
	dw	2250
	dw	2419
	dw	2588
	dw	2756
	dw	2924
	dw	3090
	dw	3256
	dw	3420	; 20
	dw	3584
	dw	3746
	dw	3907
	dw	4067
	dw	4226
	dw	4384
	dw	4540
	dw	4695
	dw	4848
	dw	5000	; 30
	dw	5150
	dw	5299
	dw	5446
	dw	5592
	dw	5736
	dw	5878
	dw	6018
	dw	6157
	dw	6293
	dw	6428	; 40
	dw	6561
	dw	6691
	dw	6820
	dw	6947
	dw	7071
	dw	7193
	dw	7314
	dw	7431
	dw	7547
	dw	7660	; 50
	dw	7771
	dw	7880
	dw	7986
	dw	8090
	dw	8192
	dw	8290
	dw	8387
	dw	8480
	dw	8572
	dw	8660	; 60
	dw	8746
	dw	8829
	dw	8910
	dw	8988
	dw	9063
	dw	9135
	dw	9205
	dw	9272
	dw	9336
	dw	9397	; 70
	dw	9455
	dw	9511
	dw	9563
	dw	9613
	dw	9659
	dw	9703
	dw	9744
	dw	9781
	dw	9816
	dw	9848	; 80
	dw	9877
	dw	9903
	dw	9925
	dw	9945
	dw	9962
	dw	9976
	dw	9986
	dw	9994
	dw	9998
	dw	10000	; 90

trig_lookup	endp

lastword	db	0

cseg	ends
	end
```
{% endraw %}

## LORES.BAS

{% raw %}
```bas
1 ' LODEMO.BAS
2 ' 3/25/84
3 ' by Marty Smith, 310 Cinnamon Oak Lane, Houston, TX  77079
4 ' (713) 661-1241 Day, (713) 464-6737 Night.
5 KEY OFF : SCREEN 0,1,0,0 : WIDTH 80
6 '  ****************************************************
7 '  *    This program requires the machine module      *
8 '  *    LORES.USR for interpreted BASIC, or           *
9 '  *    LORES.OBJ for compiled BASIC.                 *
10 ' *                                                  *
11 ' *    To compile this demo, delete or comment out   *
12 ' *    lines 52-86 below. Then remove the ' on lines *
13 ' *    90 and 100. You don't need the USR to compile.*
14 ' *                                                  *
15 ' *    This demo assumes a color graphics adaptor,   *
16 ' *    and a PC with at least 2400 bytes on top of   *
17 ' *    BASIC for the machine routine. If you go to   *
18 ' *    BASIC and get less than 61k free, see the     *
19 ' *    section in LORES.DOC on clearing memory.      *
20 ' *                                                  *
21 ' ****************************************************
22 '
23 ' All routines in LORES.USR(OBJ) are in the form:
24 '
25 '   CALL LORES(ROUTINE%,PARAMETERS%(0))
26 '
27 ' where ROUTINE% is an integer and PARAMETER%(0) is the
28 ' first byte of an array of at least six elements.
29 ' X, X1, X2, col are integers from 0 to 159
30 ' Y, Y1, Y2, row are integers from 0 to 99
31 ' CX is and integer from 0 to 11
32 ' CY is and integer from 0 to 19
50 ' general routine to load LORES, accounts for low memory.
52 DEF SEG=0 : X=PEEK(&H510) + 256*PEEK(&H511) ' BASIC segment
54 Y = PEEK(&H413) + 256*PEEK(&H414)  ' memory size in k's.
56 Y = Y*64    ' adjust memory size to segment paragraphs.
58 Z = Y - X   ' top of memory - BASIC segment = total available.
60 Z = Z - 152 ' LORES is about 151 paragraphs long.
62 Z = Z*16    ' memory available for BASIC in bytes.
64 IF Z < 65536! THEN CLEAR ,Z,4096 ELSE CLEAR ,,4096
66 DEFINT A-Z ' after CLEAR and DEFINT X,Y,Z are definitely zero
68 DEF SEG=0 : X! = PEEK(&H510) + 256*PEEK(&H511)
70 Y!=(PEEK(&H413) + 256*PEEK(&H414)) * 64 ' now have to specify single
72 Z! = Y! - X! : FS$="lores.usr"
76 IF Z! < 4096 THEN L! = X! + Z! - 151 ELSE L! = X! + 4097
78 IF L! > 32767! THEN LOSEG = L! - 65536! ELSE LOSEG = L!
80 ON ERROR GOTO 84
82 DEF SEG=LOSEG :BLOAD FS$,0 :DEF SEG :ON ERROR GOTO 0 :GOTO 90
84 PRINT "This demo requires the file LORES.USR to work."
86 LINE INPUT "Please enter the full filename of this file ==>";FS$ : IF FS$="" THEN END ELSE RESUME 82
90 'CLEAR ,,4096  ' use this and 100 instead of 50-76 above if compiling.
100 'DEFINT A-Z   ' ALL VARIABLE NAMES ARE INTEGER UNLESS SPECIFIED OTHERWISE.
120 I=0 :J=0 :K=0 :PI!=3.141593 :LOCOLOR=0 :X1=0 :Y1=0 :X2=0 :Y2=0:LO$="LO-RES":A$="X": I$=""
130 FS$="lores.usr" :CX=0 :CY=0 :WHICH=0 :ICH=0 :PLX=0 :PLY=0:PLROUTINE=2
140 INS$=CHR$(0)+CHR$(82): DEL$=CHR$(0)+CHR$(83): ALTP$=CHR$(0)+CHR$(25)
150 ALTX$=CHR$(0)+CHR$(45)
160 BLACK=0 :BLUE=1 :GREEN=2 :CYAN=3 :RED=4 :MAGENTA=5 :BROWN=6 :WHITE=7
170 GRAY=8 :LBLUE=9 :LGREEN=10 :LCYAN=11 :LRED=12 :LMAGENTA=13 :YELLOW=14 :BRIGHT=15
200 DIM TFK$(10) : TFK$(1)="LIST " : TFK$(2)="RUN"+CHR$(13) : TFK$(3)="LOAD"+CHR$(34) : TFK$(4)="SAVE"+CHR$(34)
210 TFK$(5)="CONT"+CHR$(13) : TFK$(6)=","+CHR$(34)+"LPT1:"+CHR$(13) :TFK$(7)="TRON"+CHR$(13) : TFK$(8)="TROFF"+CHR$(13)
220 TFK$(9)="KEY " : TFK$(10)="SCREEN 0,0,0"+CHR$(13)
230 KEY OFF :FOR I=0 TO 9 : KEY I+1,"" : NEXT
240 GOTO 300
250 ROUTINE=LOUNDO : GOSUB 700 ' restore screen if color
260 FOR I=1 TO 10 :KEY I,TFK$(I) : NEXT : KEY ON
270 RETURN
300 ' variables
310 RANDOMIZE VAL(RIGHT$(TIME$,2))*VAL(MID$(TIME$,4,2))
330 LORES =   0 ' must be zero for CALL to work properly.
340 ROUTINE = 0 ' PARAMETERS% as p(0),p(1),p(2),p(3),p(4),p(5).
350 LOINIT =  0 ' none
360 LOCLS =   1 ' color (0 to 15)
370 LOPLOT =  2 ' row, col, color
380 LOPOINT = 3 ' row, col, p(2) returns color
390 LOLINE =  4 ' X1, Y1, X2, Y2, color, length( 0 is draw whole line)
400 LOBOX =   5 ' X1, Y1, X2, Y2, color, length( value <> 0 fills box)
410 LOCIRCLE =6 ' X, Y, radius, aspect numerator, denominator, color
420 LOLETTER1=7 ' CX, CY, character%, color
430 LOLETTER2=8 ' CX, CY, character%, foreground, background
440 LOPRINT  =9 ' CX, CY, VARPTR(message$), color -- x,y, come back at next.
450 LOPRINT2 =10 ' unused at this time, see doc.
460 LOSINE   =11 ' angle in degrees -- sine * 10000 returned in p(1)
470 LOCOSINE =12 ' angle in degrees -- cosine * 10000 returned in p(1)
480 LORND    =13 ' if p(0)=0, randomize - return -1, in p(0)
490 '                 else return random number from 1 to p(0) in p(1).
500 LOUNDO   =14 ' restore mode at LOINIT, if from mono screen, nothing.
510 LOMODE   =15 ' return -1 in p(0) if LORES is on, else IBM video mode.
520 LOPAINT  =16 ' X, Y, fill color, boundary color.
590 DIM LOP(6),PL(6)  :' storage for lores paramters
650 '
690 GOTO 800 ' branch around machine routine
700 ' lores machine routine
710 DEF SEG=LOSEG
720 CALL LORES(ROUTINE,LOP(0))
730 DEF SEG
740 RETURN
800 ROUTINE=LOINIT : GOSUB 700 ' initialize
810 ROUTINE=LOCLS : LOP(0)=BLUE : GOSUB 700 ' color 1: cls
812 LOP(5)=0 ' use whole lines
813 ROUTINE=LOLINE
820 FOR T!=0 TO 2*PI! STEP PI!/75
830   R!=COS(2*T!)*50
840   X1=COS(T!)*R!+79 : Y1=SIN(T!)*R!+49
850   A!=T!+PI!/3
860   R2!=COS(2*A!)*50
870   X2=COS(A!)*R2!+79 : Y2=SIN(A!)*R2!+49
880   GOSUB 920
885 I$=INKEY$ : IF I$<>"" THEN T!=2*PI!
890 NEXT
900 IF I$="p" THEN 1470 ELSE IF I$<>"" THEN 1000 ELSE 820
920 LOP(0)=X1 :LOP(1)=Y1 :LOP(2)=X2 :LOP(3)=Y2 :LOP(4)=RND*16
930 GOSUB 700 ' call lores
940 RETURN
1000 ROUTINE=LOCLS : LOP(0)=BLACK : GOSUB 700
1005 LOP(0)=80 : LOP(1)=50 : LOP(3)=5 : LOP(4)=6 : ROUTINE=LOCIRCLE : X=0
1010 FOR I=2 TO 52 STEP 2
1020   LOP(2)=I : X=X+1 : LOP(5)=X MOD 16
1030   GOSUB 700
1040 NEXT
1050 A$="LO-RES" : ROUTINE=LOPRINT : LOP(2)=VARPTR(A$)
1060 FOR I=2 TO 9 : LOP(3)=I OR &H10 : LOP(0)=I : LOP(1)=3+I
1065   IF I=9 THEN LOP(3)=14 OR &H10
1070   GOSUB 700
1080 NEXT
1100 ROUTINE=LOCIRCLE
1110 LOP(0)=80 : LOP(1)=50 : LOP(3)=5 : LOP(4)=6
1115 LOP(5)=(RND*16) OR &H80
1120 FOR I=2 TO 60 STEP 2
1130     LOP(2)=I
1150     GOSUB 700
1160 I$=INKEY$ : IF I$<>"" THEN I=60
1170 NEXT
1180 IF I$="" THEN 1115
1200 ROUTINE=LOCLS : LOP(0)=BLACK : GOSUB 700 ' color 0 cls
1210 A$="HI!"+CHR$(13)+"Welcome to LO-RES"+CHR$(13)
1220 ROUTINE=LOPRINT : LOP(0)=0 : LOP(1)=0 : LOP(2)=VARPTR(A$) : LOP(3)=CYAN
1230 GOSUB 700
1240 A$="Type something,"+CHR$(13)+"Hit <Esc> to stop!"+CHR$(13)
1250 ROUTINE=LOPRINT : LOP(2)=VARPTR(A$) : LOP(3)=BLUE : GOSUB 700
1260 LOP(3)=RED :GOSUB 1300
1270 GOTO 1400
1300 ' entry from keyboard
1310 ROUTINE=LOPRINT : TEMP$=""
1320 I$="" : WHILE I$<>CHR$(27) : I$="" : WHILE I$="" : I$=INKEY$ : WEND
1330 IF LEN(I$)>1 THEN 1380
1340 IF I$=CHR$(8) THEN IF LEN(TEMP$) > 0 THEN TEMP$=MID$(TEMP$,1,LEN(TEMP$)-1)
1350 IF I$<>CHR$(8) THEN TEMP$=TEMP$+I$
1360 LOP(2)=VARPTR(I$) : GOSUB 700
1380 WEND : TEMP$=MID$(TEMP$,1,LEN(TEMP$)-1)
1390 RETURN
1400 ROUTINE=LOCLS :LOP(0)=BLUE :GOSUB 700
1410 ROUTINE=LOPRINT :LOP(0)=0 :LOP(1)=0 :LOP(2)=VARPTR(TEMP$) :LOP(3)=LRED :GOSUB 700
1420 A$=CHR$(13)+"Looks like a $5000"+CHR$(13)+"TIMEX 2000."
1430 LOP(3)=YELLOW :LOP(2)=VARPTR(A$) :GOSUB 700
1440 A$=CHR$(13)+"Hit any key for"+CHR$(13)+"PLAYTIME!"
1450 LOP(3)=LCYAN :LOP(2)=VARPTR(A$) :GOSUB 700
1460 I$=INKEY$ : IF I$="" THEN 1460
1470 ROUTINE=LOCLS : LOP(0)=BLACK : GOSUB 700
1500 ' playtime
1540 GOTO 1600
1550 DEF SEG=LOSEG ' call for playtime cursor dot
1560  CALL LORES(PLROUTINE,PL(0))
1570 DEF SEG
1580 RETURN
1600 PLROUTINE=LOPLOT
1610 PL(0)=80 : PL(1)=50 : PL(2)=BLUE
1620 A$="PLAYTIME"+CHR$(13) : K=3 ' k is speed of cursor movement
1630 ROUTINE=LOPRINT : LOP(0)=0 : LOP(1)=0 : LOP(2)=VARPTR(A$) : LOP(3)=RED
1640 GOSUB 700
1650 A$="F1-F7 and Alt F1-F7"+CHR$(13) : LOP(3)=LRED : LOP(2)=VARPTR(A$) : GOSUB 700
1660 A$="=colors, F10 =black"+CHR$(13) : LOP(2)=VARPTR(A$) : GOSUB 700
1670 A$="  Alt-D = Dots."+CHR$(13) : LOP(3)=WHITE : LOP(2)=VARPTR(A$) : GOSUB 700
1680 A$="  Alt-L = Lines."+CHR$(13) : LOP(2)=VARPTR(A$) : GOSUB 700
1690 A$="  Alt-B = Boxes."+CHR$(13) : LOP(2)=VARPTR(A$) : GOSUB 700
1700 A$="  Alt-C = Circles."+CHR$(13) : LOP(2)=VARPTR(A$) : GOSUB 700
1710 A$=" Ins/Del= (Un)Mark."+CHR$(13) : LOP(2)=VARPTR(A$) : GOSUB 700
1715 A$="   <CR> = Set fig."+CHR$(13) : LOP(2)=VARPTR(A$) : GOSUB 700
1717 A$="   + -  = Dot move. " : LOP(2)=VARPTR(A$) : GOSUB 700
1720 A$=" AltP Ff Fb= Paint."+CHR$(13) : LOP(3)=CYAN : LOP(2)=VARPTR(A$) : GOSUB 700
1730 A$=" Hit <Esc> to quit,"+CHR$(13) : LOP(3)=LBLUE : LOP(2)=VARPTR(A$) : GOSUB 700
1740 A$="  F(x) to begin." : LOP(3)=YELLOW : LOP(2)=VARPTR(A$) : GOSUB 700
1750 I$="" : WHILE I$="" : I$=INKEY$ : WEND
1760 IF I$=CHR$(27) THEN GOTO 5000
1770 IF LEN(I$)<>2 THEN 1750
1780 X=ASC(RIGHT$(I$,1))
1790 GOSUB 1800 : IF LOCOLOR=-1 THEN 1750 ELSE BGCOLOR=LOCOLOR : GOTO 1900
1800 IF X>58 AND X<66 THEN LOCOLOR=X-58 : GOTO 1890 ' F1-F7
1810 IF X>103 AND X<111 THEN LOCOLOR=X-95: GOTO 1890 ' AltF1-AltF7
1820 IF X=68 THEN LOCOLOR=0 : GOTO 1890 ' F10
1830 IF X=113 THEN LOCOLOR=8 : GOTO 1890 ' AltF10
1840 LOCOLOR=-1
1890 RETURN
1900 ROUTINE=LOCLS :LOP(0)=LOCOLOR : GOSUB 700 ' clear screen to f(x)
1910 PL(2)=((LOCOLOR +1) MOD 8) OR &H80 : PL(0)=80 : PL(1)=50 : WHICH=2 : ICH=0
1920 PLROUTINE=LOPLOT : GOSUB 1550 ' playtime cursor
1930 ROUTINE=LOLINE : LOP(0)=80 : LOP(1)=50 : LOP(2)=80 : LOP(3)=50 : LOP(4)=(LOCOLOR +1) MOD 8 OR &H80 : LOP(5)=0
1940 LOCOLOR=PL(2)
2000 ' playtime get key
2010 I$="" : WHILE I$="" : I$=INKEY$ : WEND
2020   IF I$=INS$ THEN GOSUB 2200 : GOTO 2000
2030   IF I$=DEL$ THEN GOSUB 2300 : GOTO 2000
2035   IF I$=ALTP$ THEN GOSUB 4400 : GOTO 2000
2040   IF I$=ALTX$ THEN GOSUB 4600 : GOTO 2000
2050   X=ASC(RIGHT$(I$,1)) : IF LEN(I$)=2 THEN GOSUB 3000 : GOTO 2000
2060   IF I$="+" THEN K=K+1 : IF K>10 THEN K=10 : BEEP
2070   IF I$="-" THEN K=K-1 : IF K<1 THEN K=1 : BEEP
2075   IF I$>"0" AND I$<":" THEN K=VAL(I$) : GOTO 2000
2080   IF I$=CHR$(27) THEN GOTO 5000
2090   IF I$=CHR$(13) THEN ICH=0 : GOSUB 2400 : GOSUB 1550 : GOTO 2000
2100   GOTO 2000
2200 IF ICH=0 THEN ICH=-1: LOP(0)=PL(0) : LOP(1)=PL(1) ELSE 2240
2210 IF WHICH=1 THEN LOP(2)=LOP(2) AND 127 : LOP(0)=PL(0) : LOP(1)=PL(1)
2220 IF WHICH=2 OR WHICH=3 THEN LOP(2)=PL(0) : LOP(3)=PL(1)
2230 IF WHICH=4 THEN CX=LOP(0) : CY=LOP(1) : GOSUB 1550 : LOP(2)=1
2240 RETURN
2300 IF ICH=-1 THEN ICH=0 : GOSUB 700  ELSE 2390
2310 IF WHICH=1 THEN LOP(2)=LOP(2) OR &H80 : PL(0)=LOP(0) : PL(1)=LOP(1)
2320 IF WHICH=3 THEN PL(0)=LOP(0) : PL(1)=LOP(1) : GOSUB 1550
2330 IF WHICH=2 OR WHICH=3 THEN PL(0)=LOP(2) : PL(1)=LOP(3)
2340 GOSUB 1550
2390 RETURN
2400 ' set figure
2410 IF WHICH=1 THEN LOP(2)=LOP(2) AND 127 : GOSUB 700 : LOP(2)=LOP(2) OR &H80
2420 IF WHICH=2 OR WHICH=3 THEN LOP(4)=LOP(4) AND 127 : GOSUB 700 : LOP(4)=LOP(4) OR &H80
2430 IF WHICH=4 THEN LOP(5)=LOP(5) AND 127 : GOSUB 700 : LOP(5)=LOP(5) OR &H80
2450 IF WHICH=2 OR WHICH=3 THEN LOP(0)=LOP(2) : LOP(1)=LOP(3) : PL(0)=LOP(0) : PL(1)=LOP(1) : LOP(2)=PL(0) : LOP(3)=PL(1)
2460 IF WHICH=4 THEN LOP(2)=2 ' PL(0)=LOP(0) : PL(1)=LOP(1)
2490 RETURN
2500 ' set plot
2510 IF ICH THEN GOSUB 700 ' clear current drawing
2520 GOSUB 2900
2530 ROUTINE=LOPLOT : WHICH=1 : ICH=0 : LOP(2)=LOCOLOR
2590 RETURN
2600 ' set line
2610 IF ICH THEN GOSUB 700 ' clear current drawing
2620 GOSUB 2900
2630 ROUTINE=LOLINE : WHICH=2 : ICH=0 : LOP(4)=LOCOLOR : LOP(5)=0
2640 LOP(2)=LOP(0) : LOP(3)=LOP(1)
2690 RETURN
2700 ' set box
2710 IF ICH THEN GOSUB 700 ' clear current drawing
2720 GOSUB 2900
2730 ROUTINE=LOBOX : WHICH=3 : ICH=0 : LOP(4)=LOCOLOR : LOP(5)=0
2740 LOP(2)=LOP(0) : LOP(3)=LOP(1)
2790 RETURN
2800 ' set circle
2810 IF ICH THEN GOSUB 700 ' clear current drawing
2820 GOSUB 2900
2830 ROUTINE=LOCIRCLE : WHICH=4 : ICH=0 : LOP(2)=2 : LOP(3)=5
2840 LOP(4)=6 : LOP(5)=LOCOLOR
2890 RETURN
2900 ' set pl(x) for next routine
2910 IF ICH=0 THEN 2990 ' skip if not printing
2920 IF WHICH=1 THEN PL(0)=LOP(0) : PL(1)=LOP(1) : GOTO 2990
2930 IF WHICH=2 OR WHICH=3 THEN PL(0)=LOP(2) : PL(1)=LOP(3)
2990 RETURN
3000 ' playtime ext keys
3010 IF X>70 AND X<82 THEN 3400 ' motion
3020 IF X=68 THEN X=0 : GOTO 3200 ' color
3025 IF X=113 THEN X=8 : GOTO 3200 ' color
3030 IF X>58 AND X<66 THEN X=X-58 : GOTO 3200 ' more color
3040 IF X>103 AND X<111 THEN X=X-103 :GOTO 3200 ' more
3050 IF X=32 THEN GOSUB 2500 : GOTO 3100
3060 IF X=38 THEN GOSUB 2600 : GOTO 3100
3070 IF X=48 THEN GOSUB 2700 : GOTO 3100
3080 IF X=46 THEN GOSUB 2800 : GOTO 3100
3100 RETURN
3200 ' color
3210 LOCOLOR=X OR &H80 : IF ICH THEN GOSUB 700 ELSE GOSUB 1550
3220 IF WHICH=1 THEN IF ICH THEN LOP(2)=X ELSE LOP(2)=LOCOLOR
3230 IF WHICH=2 OR WHICH=3 THEN LOP(4)=LOCOLOR
3240 IF WHICH=4 THEN LOP(5)=LOCOLOR
3250 PL(2)=LOCOLOR
3260 IF (PL(2) AND 127 )=BGCOLOR THEN PL(2)=(PL(2)+1) MOD 8 OR &H80
3270 IF PL(2)=&H80 THEN PL(2)=(RND*8) OR &H80 : GOTO 3260
3280 IF ICH THEN GOSUB 700 ELSE GOSUB 1550
3290 RETURN
3400 ' this moves the dot around when no drawing is going on
3410 IF ICH THEN 3600 ELSE GOSUB 1550
3420 IF X=71 THEN PL(0)=PL(0)-K : PL(1)=PL(1)-K : GOTO 3500
3430 IF X=72 THEN PL(1)=PL(1)-K : GOTO 3500
3440 IF X=73 THEN PL(0)=PL(0)+K : PL(1)=PL(1)-K : GOTO 3500
3450 IF X=75 THEN PL(0)=PL(0)-K : GOTO 3500
3460 IF X=77 THEN PL(0)=PL(0)+K : GOTO 3500
3470 IF X=79 THEN PL(0)=PL(0)-K :PL(1)=PL(1)+K : GOTO 3500
3480 IF X=80 THEN PL(1)=PL(1)+K : GOTO 3500
3490 IF X=81 THEN PL(0)=PL(0)+K : PL(1)=PL(1)+K
3500 IF PL(0)<0 THEN PL(0)=0
3510 IF PL(0)>159 THEN PL(0)=159
3520 IF PL(1)<0 THEN PL(1)=0
3530 IF PL(1)>99 THEN PL(1)=99
3550 GOSUB 1550
3590 RETURN
3600 ' if we are drawing, this will branch to the right routine
3610 GOSUB 700 ' draw second for xor
3615 ON WHICH GOTO 3620,3800,3800,4200
3617 ' draw dots
3620 IF X=71 THEN LOP(0)=LOP(0)-K : LOP(1)=LOP(1)-K : GOTO 3700
3630 IF X=72 THEN LOP(1)=LOP(1)-K : GOTO 3700
3640 IF X=73 THEN LOP(0)=LOP(0)+K : LOP(1)=LOP(1)-K : GOTO 3700
3650 IF X=75 THEN LOP(0)=LOP(0)-K : GOTO 3700
3660 IF X=77 THEN LOP(0)=LOP(0)+K : GOTO 3700
3670 IF X=79 THEN LOP(0)=LOP(0)-K :LOP(1)=LOP(1)+1 : GOTO 3700
3680 IF X=80 THEN LOP(1)=LOP(1)+K : GOTO 3700
3690 IF X=81 THEN LOP(0)=LOP(0)+K : LOP(1)=LOP(1)+K
3700 IF LOP(0)<0 THEN LOP(0)=0
3710 IF LOP(0)>159 THEN LOP(0)=159
3720 IF LOP(1)<0 THEN LOP(1)=0
3730 IF LOP(1)>99 THEN LOP(1)=99
3740 PL(0)=LOP(0) :PL(1)=LOP(1)
3750 GOSUB 700
3790 RETURN
3800 ' do lines or boxes.
3820 IF X=71 THEN LOP(2)=LOP(2)-K : LOP(3)=LOP(3)-K : GOTO 3900
3830 IF X=72 THEN LOP(3)=LOP(3)-K : GOTO 3900
3840 IF X=73 THEN LOP(2)=LOP(2)+K : LOP(3)=LOP(3)-K : GOTO 3900
3850 IF X=75 THEN LOP(2)=LOP(2)-K : GOTO 3900
3860 IF X=77 THEN LOP(2)=LOP(2)+K : GOTO 3900
3870 IF X=79 THEN LOP(2)=LOP(2)-K :LOP(3)=LOP(3)+K : GOTO 3900
3880 IF X=80 THEN LOP(3)=LOP(3)+K : GOTO 3900
3890 IF X=81 THEN LOP(2)=LOP(2)+K : LOP(3)=LOP(3)+K
3900 IF LOP(2)<0 THEN LOP(2)=0
3910 IF LOP(2)>159 THEN LOP(2)=159
3920 IF LOP(3)<0 THEN LOP(3)=0
3930 IF LOP(3)>99 THEN LOP(3)=99
3950 GOSUB 700
3990 RETURN
4000 ' draw appropriate figure at current position
4010 IF ICH THEN GOSUB 700
4020 RETURN
4200 ' do circles
4210 IF X=71 THEN PL(0)=PL(0)-K : PL(1)=PL(1)-K : GOTO 4300
4220 IF X=72 THEN PL(1)=PL(1)-K : GOTO 4300
4230 IF X=73 THEN PL(0)=PL(0)+K : PL(1)=PL(1)-K : GOTO 4300
4240 IF X=75 THEN PL(0)=PL(0)-K : GOTO 4300
4250 IF X=77 THEN PL(0)=PL(0)+K : GOTO 4300
4260 IF X=79 THEN PL(0)=PL(0)-K :PL(1)=PL(1)+K : GOTO 4300
4270 IF X=80 THEN PL(1)=PL(1)+K : GOTO 4300
4280 IF X=81 THEN PL(0)=PL(0)+K : PL(1)=PL(1)+K
4300 IF PL(0)<0 THEN PL(0)=0
4310 IF PL(0)>159 THEN PL(0)=159
4320 IF PL(1)<0 THEN PL(1)=0
4330 IF PL(1)>99 THEN PL(1)=99
4340 PLX=ABS(CX-PL(0)) : PLY=ABS(CY-PL(1)) : LOP(2)=SQR(PLX*PLX+PLY*PLY)
4350 IF LOP(2)<2 THEN LOP(2)=1 ELSE IF LOP(2)>159 THEN LOP(2)=159
4360 GOSUB 700
4370 RETURN
4400 ' paint
4410 BEEP : Y=LOCOLOR : GOSUB 1550 ' turn off dot
4420 I$=INKEY$ : IF I$="" THEN 4420
4430 IF LEN(I$)<>2 THEN 4580
4440 X=ASC(RIGHT$(I$,1)) : GOSUB 1800 ' get color or -1 for bogus
4450 IF LOCOLOR=-1 THEN 4540
4460 PL(2)=LOCOLOR
4470 I$=INKEY$ : IF I$="" THEN 4470
4480 IF LEN(I$)<>2 THEN 4540
4490 X=ASC(RIGHT$(I$,1)) : GOSUB 1800
4500 IF LOCOLOR=-1 THEN 4540
4510 PL(3)=LOCOLOR
4520 PLROUTINE=LOPAINT : IF ICH THEN PL(0)=LOP(0) : PL(1)=LOP(1)
4530 GOSUB 1550
4540 LOCOLOR=Y : PLROUTINE=LOPLOT : PL(2)=LOCOLOR
4580 GOSUB 1550
4590 RETURN
4600 ' xor screen
4610 Y=LOCOLOR :Z=PL(0)
4620 I$=INKEY$ : IF I$="" THEN 4620
4630 IF LEN(I$)<>2 THEN 4690
4640 X=ASC(RIGHT$(I$,1)) : GOSUB 1800
4650 IF LOCOLOR=-1 THEN 4680
4660 PLROUTINE=LOCLS :PL(0)=LOCOLOR OR &H80 :GOSUB 1550
4680 PLROUTINE=LOPLOT :PL(0)=Z :LOCOLOR=Y
4690 RETURN
5000 I$="" : ROUTINE=LOCLS : LOP(0)=0 : GOSUB 700 ' clear to black
5010 X=80 : Y=10 : ROUTINE=LOLINE : LOP(4)=BLUE :LOP(5)=0 ' blue, whole line
5020 FOR I=Y TO 90 STEP 8
5030   X=X-4
5040   LOP(0)=X : LOP(1)=I :LOP(2)=0 :LOP(3)=I : GOSUB 700
5050   LOP(1)=I : LOP(2)=X : LOP(3)=99 : GOSUB 700
5060   LOP(0)=160-X : LOP(1)=I : LOP(2)=159 : LOP(3)=I : GOSUB 700
5070   LOP(1)=I : LOP(2)=LOP(0) : LOP(3)=99 : GOSUB 700
5100 NEXT
5110 ROUTINE=LOPAINT : LOP(1)=92 : LOP(3)=BLUE
5120 X=X-2 :Y=1
5130 FOR I=X TO 135 STEP 4
5140   LOP(0)=I : LOP(2)=Y MOD 16 : GOSUB 700 : Y=Y+1
5145   I$=INKEY$ : IF I$<>"" THEN I=135
5150 NEXT : IF I$<>"" THEN 5210
5160 ROUTINE=LOCLS : LOP(0)=(RND*15) OR &H80 : GOSUB 700
5170 I$=INKEY$ : IF I$<>"" THEN 5210
5180 GOTO 5160
5210 GOSUB 250 ' cleanup - restore video mode if on color, restore F-keys
5220 'END
5300 ' menu
5310 CLS
5320 PRINT "That was LO-RES!"
5330 PRINT
5340 PRINT "Hit:"
5350 PRINT "   (1) for the rotating line demo"
5360 PRINT "   (2) for the typing demo"
5370 PRINT "   (3) for the PLAYTIME free-form demo"
5380 PRINT "   (4) for the symmetric lines demo"
5390 PRINT "or,"
5400 PRINT "Hit the <Escape> key to quit."
5410 PRINT
5420 PRINT "Good luck with the LO-RES interface routines,"
5430 PRINT "Please read the descriptions in LORES.DOC,"
5440 PRINT "or follow the BASIC listing to get a feel of"
5450 PRINT "how everything works. Call or send problems to:"
5460 PRINT
5470 PRINT "Marty Smith       CompuServe 72155,1214"
5480 PRINT "310 Cinnamon Oak Lane"
5490 PRINT "Houston, TX  77079"
5500 PRINT "(713) 661-1241 [Days], (713) 464-6737 [Nights]"
5510 LOCATE 9,32,1
5520 I$=INKEY$ : IF I$="" THEN 5510 ELSE PRINT I$;
5530 IF I$>"0" AND I$<"5" THEN X=ASC(I$)-&H30 : GOTO 5600
5540 IF I$=CHR$(27) THEN LOCATE 20,1,1 : END
5550 GOTO 5510
5600 KEY OFF : FOR I=1 TO 10 : KEY I,"" : NEXT
5610 ROUTINE=LOINIT : GOSUB 700
5620 ON X GOTO 810,1200,1500,5000
5630 GOTO 5300
```
{% endraw %}

## LORES.DOC

{% raw %}
```




         * IBM PC LOW RESOLUTION COLOR MODE INTERFACE ROUTINES *


The 'unsupported' 160x100x16 color mode of the IBM color graphics card 
may be low resolution, but it is quite colorful. In order to use this 
mode from interpreted and compiled BASIC you need a core of graphics 
primitives that will enable you to draw dots, lines, boxes and circles 
in sixteen colors. Printing text on this screen would also be nice.

The series of files described below will allow you to do this, and more.

If you would like to get current copy of all the LORES routines, demos 
and printed documentation, send $5.00 and a disk or just $10.00 to:

                              Marty Smith
                         310 Cinnamon Oak Lane
                           Houston, TX 77079

GETTING STARTED:

In addition to this documentation, LORES consists of the several files
listed below.

         (1) LORES.USR   - The BLOADable module for interpreted BASIC.

         (2) LORES.OBJ   - An object module for compiled BASIC.

         (3) LODEMO.BAS - A BASIC program using all the LORES features.

         (4) LORES.ASM   - The assembler source for the routines.
                         The two modules both come from this file.

         (5) LODEMO.EXE - The compiled version of LODEMO.BAS

         (6) LORES.EXE   - The original assembler demo of LORES mode.

         (7) READ.ME     - This file.

To run the BASIC program, you need LORES.USR in addition to LODEMO.BAS, 
preferably both on the default drive. If this is not so, the program 
will ask for the filename. The best way to get started is to run 
LODEMO.BAS. This file is loaded with comments describing what it is 
doing, and LISTing it shows the routines in action.

LODEMO.BAS is a PC-BASIC program that uses the LORES routines.  It draws 
lines and lets you enter text in LORES big letters, and has a free form 
drawing section. It is not a good example of structured programming, but 
I think it's lots of fun.








         LORES Interface Routines  3/22/84   --   Page 1








MEMORY, and LOADING .USR MODULES:

If you know all about reserving memory for BASIC assembler routines you 
don't need to read this section, just keep in mind that the LORES module 
is about 2414 bytes in size and is totally self-contained. It uses the 
BASIC stack, and data segment, and addresses memory directly on the 
color card. LORES.USR is a module you BLOAD on top of BASIC, with all 
routines CALLed at location 0 in the LORES segment. For compiled BASIC, 
you LINK LORES.OBJ to your program. The difference in your program for 
compiled BASIC is that you don't need the code for BLOADing the other 
module, and your strings can be 32767 bytes long.

With DOS 2.+ allocating memory for machine routines becomes a little 
more complicated. With device drivers for RAM disks and the like, BASIC 
may be loaded anywhere. Luckily there is hope. At location &H510 in 
segment 0 BASIC stores the segment address where it is located. If you 
have plenty of memory, i.e. more than 110,000 bytes free after DOS and 
device drivers, all you need to do for a value for LORES's segment is:

10       ' setup to BLOAD LORES.USR - plenty of memory, any DOS.
         DEF SEG=0 : X!=PEEK(&H510) + 256*PEEK(&H511) ' BASIC segment
         X! = X! + 4097       ' segment on top of BASIC 
         IF X! > 32767! THEN X! = X! - 65536! ' compensate for integers
         LOSEG% = X! : DEF SEG = LOSEG%  ' tell BASIC about it
         BLOAD "LORES.USR",0 : DEF SEG   ' reestablish BASIC's segment

LOSEG% now has the segment value right on top of BASIC, wherever BASIC 
is. LORES has a few internal variables stored at relative offsets to 
zero. This prevents LORES from being stored in an array. 2414 bytes is a 
lot to stash in an array anyway. Convenience gained with this technique 
is quickly lost when you go to compile your application and find you 
need to use two different types of CALL and have to ask BASIC if it has 
moved your array each and every time you want to do a CALL.

If you have less than 110,000 bytes free, BASIC will have set its stack 
and top of string space to the top of memory in your machine. This 
requires that you tell BASIC not to use all this memory in order to 
leave space for LORES.  The following routine works for any memory setup 
and *MUST* be done before anything but REM statements in your program:

10       ' general routine to load LORES, accounts for low memory.
         DEF SEG=0 : X!=PEEK(&H510) + 256*PEEK(&H511) ' same as above
         Y! = PEEK(&H413) + 256*PEEK(&H414) ' memory size in k's.
         Y! = Y!*64    ' adjust memory size to segment paragraphs.
         Z! = Y! - X!  ' top of memory - BASIC segment = total available.
         Z! = Z! - 152 ' LORES is about 151 paragraphs long.
         Z! = Z!*16    ' memory available for BASIC in bytes.
         IF Z! < 65536! THEN CLEAR ,Z!,2048 ELSE CLEAR ,,2048
         ' after this X!, Y! and Z! have been CLEARed to zero, so:
         DEF SEG=0 : X! = PEEK(&H510) + 256*PEEK(&H511)
         Y!=(PEEK(&H413) + 256*PEEK(&H414)) * 64 : Z! = Y! - X!
         IF X! > 32767! THEN X! = X! - 65536! ' compensate for integers
         IF Z! < 4096 THEN LOSEG% = X! + Z! - 151 ELSE X! = X! + 4097
          : IF X! > 32767! THEN LOSEG% = X! - 65536! ELSE LOSEG% = X!
         DEF SEG=LOSEG% : BLOAD "LORES.USR",0 : DEF SEG


         LORES Interface Routines  3/22/84   --   Page 2








LOADING THE .OBJ FILE INTO COMPILED BASIC:

It is much easier to compile LORES programs than to BLOAD a module. The 
only change from interpreted versions to compiled is to delete or com-
ment out the lines that load the USR module, such as those described 
above.  The DEF SEG's in the CALL's can be left in since they won't 
affect CALL. After you do this, compiling a LORES program is done with,

         BASCOM YOURPROG/whatever;
         LINK YOURPROG+LORES;

FORMAT OF COMMANDS:

All the LORES routines are called from BASIC the same way. This format
is:

         DEF SEG=LOSEG%
         CALL LORES%(ROUTINE%,LO%(0))
         DEF SEG

The routine may be simply to clear the screen, but the two elements are 
always expected. LO%() is a six element integer array where values for 
the CALL are stored. LOSEG% is the segment where the LORES module has 
been BLOADed, ROUTINE% is the number of the desired function (see be-
low), and LORES% is an integer whose value is *always* zero.  This 
simplifies CALL, since all of them will be to location 0 in the 
module.The LORES module figures out what you want to do from the value 
of ROUTINE%.

The first thing to do when you want to use LORES graphics in your 
program is to initialize LORES. You do this by:

90       ROUTINE%= 0 : DEF SEG= LOSEG% ' intitialize LORES
         CALL LORES%(ROUTINE%,LO%(0))
         DEF SEG

Getting back to a normal screen later on is done by:

400      ROUTINE%= 14: DEF SEG= LOSEG% ' get screen back to normal
         CALL LORES%(ROUTINE%,LO%(0))
         DEF SEG

Now that LORES is active, say you want to draw a line from (10,20)-
(120,60) in red. To do this you would say,

100      ' draw a line. a(0)-a(3) are screen coordinates,
         ' a(4) is the color, for XOR color use THECOLOR OR &h80
         LO%(0)=10: LO%(1)=20: LO%(2)=120: LO%(3)=60: LO%(4)=4: LO%(5)=0
         ROUTINE%= 4
         DEF SEG= LOSEG% : CALL LORES%(ROUTINE%,LO%(0)) : DEF SEG

LO%(5) should be zero to draw the whole line, or some other number to 
draw part of the line.  If you want to XOR a line, set the color to 
THECOLOR OR &H80, to set the seventh bit. If you do this and draw the 
line twice, it will disappear without overwriting previous material.


         LORES Interface Routines  3/22/84   --   Page 3





COMMANDS, cont.



To draw a circle in the middle of the screen with a radius of 40 in 
yellow, and an aspect ratio for a normal circle,

200     ' draw a circle.
         LO%(0)= 80: LO%(1)= 50: LO%(2)= 40 ' x,y,radius
         LO%(3)= 5: LO%(4)= 6               ' aspect ratio. numer/denom
         LO%(5)= 14 : ROUTINE%= 6           ' color yellow, 6=circle
         GOSUB 1000
         GOTO 300
         ...

1000     DEF SEG= LOSEG% : CALL LORES%(ROUTINE%,LO(0)) : DEF SEG
1010     RETURN

Changing aspect ratios will make an ellipse instead of a circle. Now 
lets PAINT this circle in light red,

300      ' paint an area

         ROUTINE%= 16: LO%(2)= 12: LO%(3)= 14 : GOSUB 1000

LO%(2) is the fill color, LO%(3) is the boundary color. What happened to 
LO%(0) and LO%(1)? In this case these were not needed. LORES does not 
change array values unless it returns a value. We just got through 
drawing a circle, so the screen coordinates are still x=160, y=80.

Ordinarily you would set these values.  Paint with sixteen colors can 
turn into a clear screen function pretty easily.




























         LORES Interface Routines  3/22/84   --   Page 4








LORES ROUTINES:

These are the LORES routines, unneeded array values can be any value.

Routine:

   LO%(0),  LO%(1),  LO%(2),  LO%(3),  LO%(4),  LO%(5)

----------------------------------------------------------------------

0 = INITIALIZE.
   No values are needed, just a dummy value. Video mode stored.
1 = CLEAR SCREEN.
   Color (0-15).
2 = PLOT A DOT.
   x(0-159), y (0-99), color.
3 = GET A DOT.
   x(0-159), y (0-99), returns color value or -1 for out of range, in v(2).
4 = DRAW A LINE.
   X1,   Y1,   X2,   Y2,  Color,  0=whole line,
                                         other for partial line.
5 = DRAW A BOX.
   X1,   Y1,   X2,   Y2,  Color.
6 = DRAW A CIRCLE.
   X,    Y,    Radius, Aspect numer., denom., Color.
7 = PRINT A LETTER 1.
   Row (0-11), Col (0-19), Ascii char., Color.
8 = PRINT A LETTER 2.
   Row (0-11), Col (0-19), Ascii char., Color Fgnd, Color Bkgrnd.
9 = PRINT A STRING.
   Row (0-11), Col (0-19), VARPTR(MESSAGE$), Color.
   Row and Col come back pointing to the next screen position.
   Carriage return and backspace handled correctly.
   Screen will scroll at bottom line.
10 = NOT USED at this time. Simply returns.

11 = SINE FUNCTION.
   Angle in degrees, SIN*10000 returned.(in v(1))
12 = COSINE FUNCTION.
   Angle in degrees, COS*10000 returned.(in v(1))
13 = RANDOM NUMBER FUNCTION.
   0 to randomize, other returns 1 to x in v(1).
14 = RESTORE SCREEN.
   No values needed. Returns color screen to mode at initialization
   if current screen was color. If on monochrome monitor, nothing.
15 = MODE FUNCTION.
   Returns -1 in v(0) if LORES is active, otherwise IBM video mode.
16 = PAINT.
   X (0-159), Y (0-99), Fill color, Boundary color.

-----------------------------------------------------------------------






         LORES Interface Routines  3/22/84   --   Page 5








ROUTINES, cont.

You are encouraged to experiment with these routines. The core of LORES 
is the plot a dot function, which is range checked and won't do anything 
bad if it is passed a value that is out of range. Circles, lines and 
boxes larger than screen size can be created without worrying that 
oddball values are being stashed in memory somewhere.

Remember that the array passed to LORES is an integer array. You can 
make sure of this by specifying DEF INT A-Z early in your program, as 
the LODEMO program does, or attach a percent sign (%) to all values in 
the CALL LORES%(ROUTINE%,LO%(0)). Using default single precision values 
will not do anything worthwhile with LORES and will produce results you 
probably didn't have in mind.

EQUIPMENT REQUIRED:

LORES of course needs a color graphics adaptor. A further need is an RGB 
monitor. LORES is a variation on 80 column color, and has the same 
problem this mode has with TV's and most monitors, i.e. gray scale or 
worse instead of color.

There is no real need for extensive memory, but for convenience at least 
128k is required. A compiled program using LORES.OBJ could certainly run 
in 64k. If you don't get the full 60k of workspace when you enter BASIC, 
you need to reserve memory for LORES. See the routine in LOADING, etc. 
above for details.

MONITORS:

If you have both a monochrome monitor and color board, you can develop 
your programs entirely on the monochrome monitor, displaying on color.

This is an advantage of being a non-standard set-up. Since there is no 
'official' set-up, the color card and its memory are accessed directly.

If you are working on a color monitor alone it's handy to set up a 
subroutine using the RESTORE SCREEN function, number 14. Do this by:

500      ' restore color screen.

         DEF SEG=LOSEG% ' LOSEG% is the segment set aside for LORES
         CALL LORES%(14,DUMMYARRAYVALUE%) ' LORES% is always zero
         DEF SEG        ' get back to BASIC's segment
         RETURN

Then use a Function Key to "GOSUB 400"+CHR$(13) while you are working
and you will be able to see what you are typing again.









         LORES Interface Routines  3/22/84   --   Page 6








PAINTING:

One of the nifty features of LORES is the paint routine. This works 
virtually identically to the PAINT function in BASICA, except with many 
more color choices. It also has the same appetite for stack space as the 
BASIC function. Unless you intend to do no painting at all, or will only 
fill small evenly defined shapes, or will never make a mistake and 
specify the wrong color you should set aside some extra stack space.

You do this in BASIC with the CLEAR command. The format of CLEAR is:

         CLEAR <,WORKSPACE,STACKSPACE>

I had convinced myself that 2048 bytes stack was plenty until I made a 
design that overran even this.  I still think 2048 bytes is a good 
amount to reserve, especially if you are pretty sure in advance of what 
will be painted. The free form drawing routine in LODEMO allows you to 
create some fairly elaborate designs relatively quickly, and this is why 
4096 bytes is set aside for stack. No design I have come up with since 
has come close to overrunning this amount of stack. so:

         CLEAR ,,4096 ' will set aside 4096 bytes for BASIC's stack.

If you are running LODEMO and don't hear the BEEP when you hit Alt-P in 
the free form section you have overflowed the stack. The program is 
still alive, though. What happens is the stack overwrites the top string 
values, which in this case is the string for Alt-P and some of the saved 
function key strings. Hitting <Escape> will allow you to continue, but 
don't try to SAVE the program.

COMMENTS, THANKS, AND OFFICIAL STUFF.

LORES color mode routines resulted from a curiosity on my part to see 
what could be done with this mode of operation on my IBM PC. Medium 
resolution color is nice, but I was always frustrated at having sixteen 
colors in the machine and only those two palettes of three colors to 
work with. I doubt if LORES color will catch on, since the ideal appli-
cation is games, and game programs have to work on TV's and NTSC 
monitors, which are LORES's shortcomings.

LORES assembler routines are fairly well optimized for speed, but all 
suffer a penalty due to the color-graphics adaptor. Since LORES graphics 
are in fact a text-mode to the card, each time you write a dot on the 
screen you are forced to wait for the horizontal retrace interval of the 
monitor. This is the only moment you can write to the screen without 
creating the infamous 'snow' effect. The alternative is actually turning 
off the video signal, then turning it back on, resulting in an annoying 
flicker. To give you an idea of how short a 'window' you have to write 
without snow, a single byte can be written, but a word of two bytes 
cannot. The flexible Intel 8088 micro-processor can perform arithmetic 
operations directly to memory, like--XOR [screen-byte], register value--
which takes twice as long as simply writing, or about five millionths of 
a second, but this is TOO LONG to prevent the beginnings of the snow 
effect!



         LORES Interface Routines  3/22/84   --   Page 7





COMMENTS, THANKS cont.


LORES is fun to play with, and the free form drawing routine in the 
LODEMO program is the demo I enjoy the most. Originally LODEMO was just 
a feature by feature demonstration of the LORES routines. Then I thought 
a good way to test the various assembler routines to see how they 
responded to a wide range of values would be an interactive use of them. 
The PAINT routine is a direct result of this program; I just had to have 
it in there. Here's a hint: to go direct to the PLAYTIME free form 
routine in LODEMO, hit a lowercase 'p' during the first drawing.

Its hard to cram a lot of stuff into a LORES screen, so here are some 
additional features of the PLAYTIME routine. Alt-X and then a function 
key will XOR the screen to the color of the 'F' key. If you lose the 
cursor dot, which can happen after a PAINT, change the dot color by 
hitting an 'F' key. Alt-F10 is gray, though it is not mentioned.

If you are having trouble using the free form drawing section, here is a 
brief overview:

o    The routine is based on the Koala Pad drawing program, using the 
     arrow keys on the numeric keypad instead of the stylus and pad.

o    The Function Keys F(1) to F(7) and Alt F(1) to Alt F(7) will make 
     the colors corresponding to the BASIC COLOR X command become the 
     current color.     F(10) and Alt F(10) make black or grey. If your 
     screen is not black this color may not appear to be right, but when 
     the drawing is set (keep reading) the current color will prevail.

o    The idea is that the dot you have moves around until you want to 
     draw a figure.

o    The possible modes of operation are dots, lines, boxes, circles. 
     You tell the program which by holding down the 'Alt' key on the 
     left side of the keyboard and then pressing (D)ots,(L)ines,(B)oxes, 
     or (C)ircles.

o    When you press the 'Ins' key on the numeric keypad, the dot becomes 
     the first end or corner or center of a temporary drawing.

o    Now cursor movements will result in dots, or a connected line, or a 
     larger/smaller box or circle. To set this figure on the screen and 
     go on to draw another, hit the <Enter> key. If the temporary figure 
     is in the wrong place or is not what you really want, hit the 'Del' 
     key on the numeric keypad. The figure will disappear and you will 
     be back to roving dot mode.

o    If the cursor dot is moving too slow or jumping too much, use the + 
     and - keys on the cursor pad to change it. Alternatively, hit a 
     number key and the number of dots the cursor jumps will now be the 
     value of that key.

o    In order to paint in an area, move the dot to inside the figure, 
     then hit Alt-P. You will hear a beep indicating the program is 
     waiting for first a fill color, and second a boundary color. You 
     specify this by using the Function Keys which correspond to colors 
     as explained above.


         LORES Interface Routines  3/22/84   --   Page 8





COMMENTS, THANKS cont.



o    If either the fill or boundary color is not a function or alt-
     function key, the program returns to where it was before.

This explanation is presented in lieu of elaborate menus on LODEMO since 
LODEMO is meant to be a program to show how to use the assembler module 
and not an end result in itself.

I have to thank Dr. Dobbs magazine for some of the graphics routines, 
and especially Ray Duncan's column. This is the first place I saw a 
description of how to implement LORES graphics, and the LINE, CIRCLE and 
trig. functions also come from there.

IBM is a registered trademark of International Business Machines
Corporation.

BASIC, BASICA, LINK, BASCOM and DOS refer to copyrighted programs
belonging to IBM and MicroSoft Corporation.

The Intel 8088 is a micro-processor produced by the Intel Corporation.

LORES interface routines are a compilation/creation by:

Marty Smith              CompuServe 72155,1214
310 Cinnamon Oak Lane
Houston, Texas 77079
(713) 661-1241 <Days>
(713) 464-6737 <Nights>

If you have problems getting LORES to work for you, send or call these
problems to me at the address/number above. I will try to help.


























         LORES Interface Routines  3/22/84   --   Page 9





elp.














```
{% endraw %}

## PRINTXT1.DOC

{% raw %}
```
     *********** PRINTXT COMMAND FILE DOCUMENTATION ***********

*+========================== PROGRAM ABSTRACT ==========================+
*|                                                                      |
*|TITLE: PRINTXT1.CMD - dBASE II PROCEDURE TO PRINT TEXT ON MULTIPLE    |
*|                      LINES.                                          |
*|DATE: 06/06/83        VERSION:  1.1         LANGUAGE: dBASE II (2.3B) |
*|SQUEEZED NAME: PRINTXT1.CQD         LIBRARY NAME: PRINTXT1.LBR        |
*|RELATED FILES: PRINTXT1.DQC->PRINTXT1.DOC, PRINTXT1.ABS               |
*|               PRINTXT1.IQC->PRINTXT1.INC (.CMD without comments)     |
*|SYSTEM: Any system running dBASE II version 2.3B or equivalent        |
*|                                                                      |
*|PURPOSE: To provide a callable Procedure for printing or displaying   |
*|          a dBASE II text string (field or memory variable) that      |
*|          exceeds one line and have the line break at a space or      |
*|          other special break character [currently - ; , \ = ]        |
*|                                                                      |
*|SUMMARIZE REVISION: Corrected bug in documentation for MFieldText;    |
*|         corrected bug in length of title line; added capability for  |
*|         multiple line break characters (in addition to dash)         |
*|                                                                      |
*|SUBMITTED BY: Melissa Gray, Mountain View, CA  (415)965-3267          |
*|ORIGINAL AUTHOR: Melissa Gray                                         |
*|OTHER CONTRIBUTORS:                                                   |
*|                                                                      |
*|REFERENCE: none                                                       |
*|                                                                      |
*|DOCUMENTATION: Fairly extensive documentation both in the code and in |
*|                a separate .DOC file.  However, with the number of    |
*|                options available, the documentation is not all-      |
*|                together clear.                                       |
*|                                                                      |
*|PROGRAM USAGE: Since dBASE II does not seem to be able to print out   |
*|                text that exceeds the capacity of a line and break    |
*|                it at a reasonable place, this procedure should allow |
*|                more use of dBASE for long text fields.               |
*|                                                                      |
*|RATING: *** [slow when called from DO, beginning effort of programmer]|
*|                                                                      |
*+======================================================================+

*  This dBase II Command File is designed to provide a callable Procedure
*  for printing or displaying a dBase II Text String Field that exceeds
*  one line.  This Procedure will break lines at a Blank character
*  immediately following the amount of text that will fit on a line OR
*1 at the Blank or other allowable line break character [currently - ; , = \ ]
*  preceeding the last non-blank text in the line.  All Blank characters at
*  the beginning of a line will be ignored (not printed or displayed).  
*1
*1 The character string of allowable line break characters is initialized
*1 in the first statement of PRINTXT1.CMD using memory variable BREAKLIST.
*1 To add or delete allowable characters, simply edit that statement.  To
*1 provide more flexibility within your command file, delete that statement
*1 from PRINTXT1.CMD (along with the RELEASE at the end) and set BREAKLIST
*1 as desired in your command file prior to calling PRINTXT1.
*  
*  This Procedure will print/display only the TRIMmed text.  Therefore,
*  a blank record will print/display only one Blank character.  This
*  Procedure will not print/display more than the total number of lines
*  required to output the text, regardless of Field size.
*
*  To use this procedure, the following Memory Variables MUST be set
*  prior to your DO PRINTXT1:
*
*  MLineNo	The line number on the printer page or CRT to which the
*		first line of output is to be sent.  Subsequent lines of
*		output will be single spaced.  The final value of MLineNo
*		will point to the line immediately following the last
*		line of actual text output.
*
*		EXAMPLE:  STORE  12  TO  MLineNo
*
*  MCPL		This is the maximum # of characters per line of output.
*		This number includes the MIndent amounts specified below
*		and does not include the preset left margin amount.  This
*		number is superceded by MCPL1 for the 1st line only if
*		MTitleFlag = True.
*
*		EXAMPLE:  STORE  77  TO  MCPL ...where you want to output
*                         through column 80 and the left margin is set to 3.
*
*  MTitleFlag	MTitleFlag = True if there is MTitleText (see below)
*		MTitleFlag = False if there is no MTitleText, MIndent1, 
*			     MCPL1, or MTControl
*
*		EXAMPLE:  STORE  T  TO MTitleFlag
*
*  MTitleText	If MTitleFlag = True,  MTitleText is the Character String to
*		be printed/displayed on the first line of output, followed
*		by one space and the start of the actual Field Text .
*		If MTitleFlag = False,  MTitleText is not required.
*
*		EXAMPLE:
*		STORE "PURPOSE:" TO MTitleText  ...will produce the following
*
*		PURPOSE: (&MFieldText........................................
*		........................ etc.)
*
*  MIndent1	If MTitleFlag = True,  MIndent1 = the number of spaces to
*		indent the MTitleText from the preset left margin.
*		If MTitleFlag = False,  MIndent1 is not required.
*
*		EXAMPLE:  STORE  0  TO MIndent1
*
*  MCPL1	If MTitleFlag = True,  MCPL1 = the number of characters
*		allowed on the first line of output.  (This allows for
*		enlarged characters in the title or other special formatting.)
*		If MTitleFlag = False,  MCPL1 is not required;
*
*		EXAMPLE:  STORE  66  TO  MCPL1
*
*  MTControl	If MTitleFlag = True
*		   MTControl = True if there is a MPreTitle & MPostTitle
*			       (see below)
*		   MTControl = False if there is no MPreTitle & MPostTitle
*		If MTitleFlag = False
*		   MTControl, MPreTitle, and MPostTitle are not required
*
*		EXAMPLE:  STORE  T  TO MTControl
*
*  MPreTitle	If MTitleFlag = True AND MTControl = True,  MPreTitle is
*		a string of control characters to be output prior to the
*		MTitleText string for control of special characteristics
*		of the printer or CRT, such as underlining.
*		If MTitleFlag = False OR MTControl = False,  MPreTitle
*		is not required
*
*		EXAMPLE:  STORE  CHR(27) + 'X'  TO  MPreTitle
*
*  MPostTitle	If MTitleFlag = True AND MTControl = True,  MPostTitle is a
*		string of control characters to be output at the completion
*		of the MTitleText string to reset the special characteristics
*		set by MPreTitle.
*		If MTitleFlag = False OR MTControl = False,  MPostTitle is
*			        not required
*
*		EXAMPLE:  STORE  CHR(27) + 'Y'  TO  MPostTitle
*
*1 MFieldText	This is the ASCII name of the DBF Field or Memory Variable 
*1		character string (Text) to be output.  Only the TRIMmed
*1		length of the specified text will be output. NOTE: The TRIM
*		function will always put at least one Blank in the string.
*
*		EXAMPLE:  STORE  TRIM(fieldname) TO MFieldText
*
*  MIndntRest	If MTitleFlag = True,  MIndntRest is the number of characters
*		to indent all lines of text, except the first line, from
*		the preset left margin.
*		If MTitleFlag = False,  MIndntRest if the number of characters
*		to indent all lines of text from the preset left margin.
*
*		EXAMPLE:  STORE  9  TO  MIndntRest
*  
*  TxControl	TxControl = True if there is a MPreText & MPostText
*			    (see below)
*		TxControl = False if there is no MPreText & MPostText
*
*		EXAMPLE:  STORE  T  TO  TxControl
*
*  MPreText	If TxControl = True,  MPreText is a string of control
*		characters to be output prior to the MFieldText string for
*		control of special characteristics of the printer or CRT,
*		such as italics.
*		If TxControl = False,  Pretext is not required.
*
*		EXAMPLE: STORE CHR(27) + 'T' + CHR(50)+CHR(49)  TO  MPreText
*
*  MPostText	If TxControl = True,  MPostText is a string of control
*		characters to be output at the completion of the
*		MFieldText string to reset the special characteristics
*		set by MPreText.
*		If TxControl = False,  MPostText is not required
*
*		EXAMPLE:  STORE  CHR(27) + 'A'  TO  MPostText
*
*  NOTE:  The preceding memory variables will not be RELEASEd by this
*	  Procedure, nor will any but MLineNo be changed.  Therefore, they
*	  can be reused for subsequent calls to this Procedure from one
*	  initial setup.  Also note, all memory variables initiated by this
*	  Procedure will be RELEASEd at its completion.
*
*	  When using this Procedure from a DO PRINTXT1, it runs verrrrry
*	  slow.  It would be wise to use dUtil to INCLUDE the command
*	  file, WITHOUT COMMENTS, in the calling command file.

```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0139

     Volume in drive A has no label
     Directory of A:\

    ANSI     BAT       768   3-26-84   1:40p
    BAT200D  COM      9728   3-26-84   1:30p
    CHAROP   ASM      1024   3-28-84  12:39p
    CRC      TXT      1781  11-13-84   2:27p
    CRCK4    COM      1536  10-21-82   7:54p
    DIAL     BAT      1664   3-26-84   1:44p
    DIR201   BAS     21760   3-28-84  11:53a
    DIR201   EXE     45568   3-28-84  12:02p
    DOSPATH  C        8320   3-28-84  12:41p
    EDIT     BAT       896   3-26-84   1:43p
    FORMAT   BAT      3712   3-26-84   1:39p
    FSKEL    BAT      2048   3-26-84   1:38p
    LODEMO   BAS     16384   3-28-84  12:09p
    LORES    ASM     30208   3-28-84  11:36a
    LORES    BAS     16384   3-28-84  11:30a
    LORES    DOC     20864   3-28-84  11:26a
    LORES    EXE      7552   3-28-84  12:21p
    LORES    OBJ      3456   3-28-84  11:38a
    LORES    USR      2432   3-28-84  11:37a
    MENU     BAT      6528   3-26-84   1:37p
    NUSQ     COM      3584   3-28-84  12:06p
    PRINTXT1 CMD      6016   3-22-84   4:03p
    PRINTXT1 DOC      9344   3-22-84   4:03p
    PRINTXT1 INC      3584   3-22-84   4:03p
    READ     ME       1868   3-28-84   1:36p
    TELE     BAT       896   3-26-84   1:46p
    UTILITY  BAT     10112   3-26-84   1:35p
    VCOPY    BAT      2688   3-26-84   1:43p
           28 file(s)     240705 bytes
                           70656 bytes free
