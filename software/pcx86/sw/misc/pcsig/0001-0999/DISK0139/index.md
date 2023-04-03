---
layout: page
title: "PC-SIG Library Disk #139"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0139/
machines:
  - id: ibm5160
    type: pcx86
    config: /machines/pcx86/ibm/5160/cga/256kb/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk 0139"
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

## DIR201.BAS

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

## LODEMO.BAS

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
64 IF Z < 65536. THEN CLEAR ,Z,4096 ELSE CLEAR ,,4096
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
1130  LOP(2)=I
1150  GOSUB 700
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

## LORES.BAS

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
64 IF Z < 65536. THEN CLEAR ,Z,4096 ELSE CLEAR ,,4096
66 DEFINT A-Z ' after CLEAR and DEFINT X,Y,Z are definitely zero
68 DEF SEG=0 : X! = PEEK(&H510) + 256*PEEK(&H511)
70 Y!=(PEEK(&H413) + 256*PEEK(&H414)) * 64 ' now have to specify single
72 Z! = Y! - X! : FS$="lores.usr"
76 IF Z! < 4096 THEN L! = X! + Z! - 151 ELSE L! = X! + 4097
78 IF L! > 32767. THEN LOSEG = L! - 65536. ELSE LOSEG = L!
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

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk 0139

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
