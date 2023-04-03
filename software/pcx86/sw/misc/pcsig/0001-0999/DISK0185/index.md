---
layout: page
title: "PC-SIG Library Disk #185"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0185/
machines:
  - id: ibm5160
    type: pcx86
    config: /machines/pcx86/ibm/5160/cga/256kb/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk 0185"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5160" %}

{% comment %}info_begin{% endcomment %}

## Information about "DOS UTILITIES NO 10"

    A variety of handy utilities to help manage your files.  Two different
    squeeze/unsqueeze programs, SQIBM/USQIBM, and ZSQ/ZUSQ save time when
    transmitting files by modem, and save disk space when archiving files.
    Several directory managers let you view/save your file listings the way
    you want, including hidden files.
    
    Special Requirements:  BASIC for some version.
    
    How to Start:  Type GO (press enter).
    
    Suggested Registration:  Various amounts.
    
    File Descriptions:
    
    CATALOG  COM  Sorted directory.
    DD       BAT  Directory sorted by date  (Part of DNXSD.BAT).
    SDIR     DOC  Documentation.
    SDIR     COM  Sorted directory by Ted Reuss.
    DXSAVE   BAT  Sample change in BAT to save sorted directory on disk.
    DX       BAT  Directory sorted by file extension  (Part of DNXSD.BAT).
    DS       BAT  Directory sorted by file size  (Part of DNXSD.BAT).
    DNXSD    DOC  Series of batch sorted directory utilities.
    DN       BAT  Directory sorted by filename  (Part of DNXSD.BAT).
    DIR2     BAS  Diskette sorted directory by Wes Meier, Version 2.0.
    SDIR24C  ASM  Assembler source.
    SDIR24C  DOC  Documentation.
    SDIR24C  COM  Sorted directory Version 2.4 by John Ratti.
    USQIBM   DOC  Documentation.
    USQIBM   COM  Unsquishes a squished file.
    SQIBM    DOC  Documentation.
    SQIBM    COM  Squishes a file.
    ZUSQ     EXE  Unsquishes a squished file.
    ZSQ-ZUSQ DOC  Documentation.
    ZSQ      EXE  Squishes a file.
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## DIR2.BAS

```bas
10 '  *** DIR.BAS *** IBM Version 2.00 *** 
20 '      August 1983 
30 ' 
40 '      Written by Wes Meier (70215,1017) 
50 '      230 B Park Lake Circle 
60 '      Walnut Creek, CA 94598 
70 ' 
80 '      Will work with DOS 1.10 or 2.00 
90 ' 
100 '     Notes on Version 2.00: 
110 '     ---------------------- 
120 ' 1 - Version 2.00 requires BASICA but does NOT use any of its 
130 '     new commands, so DIR 2.00 should compile satifactorily. 
140 ' 
150 ' 2 - The List File to Lineprinter routine has been implemented. This 
160 '     routine uses only "plain vanilla" printer statements. Prints at 
170 '     10 cpi and 6 lpi. 150 files per page. Pages are numbered. 
180 ' 
190 ' 3 - Version 2.00  does NOT support paths or alternate directories. 
200 ' 
210 ' 4 - Version 2.00 will NOT allow you to "read" the directory of drive C: 
220 '     into the list file. This is due to the way I execute the FILES 
230 '     statement and then read the screen into memory. If drive C: is a 
240 '     hard disk (which it usually is) there would be too many files for 
250 '     the screen to handle without scrolling. 
260 ' 
270 ' 5 - Version 2.00 will now function on either type of monitor. 80 column 
280 '     is still required. 
290 ' 
300 ' 6 - Version 2.00 will directly compile with the /E option. 
310 ' 
320 '  **************************************************************** 
330 '  * *** For Public Domain....Private Sales Rights Reserved ! *** * 
340 '  **************************************************************** 
350 ' 
360 DEFINT B-Z:DEFSTR A 
370 AV=CHR$(34):AL=STRING$(80,196):AQ="("+AV+"*"+AV+" to QUIT) " 
380 TRUE=-1:FALSE=NOT TRUE:AFORMAT="\ \  \          \    " 
390 ' Check for monochrome monitor. 
400 DEF SEG=0 
410 IF (PEEK(&H410) AND &H30)=&H30 THEN MONOCHROME=TRUE ELSE MONOCHROME=FALSE 
420 DEF SEG 
430 DIM A(1000) 
440 KEY OFF:WIDTH 40:SCREEN 0,1:COLOR 4,3,3:CLS 
450 LOCATE 9,7,0,0,7:PRINT CHR$(201)STRING$(28,205)CHR$(187) 
460 PRINT TAB(7) CHR$(186)SPC(3)"*** Disk Directory ***   "CHR$(186) 
470 PRINT TAB(7) CHR$(186)SPC(3)" *** Version 2.00 ***    "CHR$(186) 
480 PRINT TAB(7) CHR$(186)SPC(3)" *** August  1983 ***    "CHR$(186) 
490 PRINT TAB(7) CHR$(186)SPC(3)" *** By Wes Meier ***    "CHR$(186) 
500 PRINT TAB(7)CHR$(204)STRING$(28,205)CHR$(185) 
510 PRINT TAB(7)CHR$(186)SPC(2)"Reading: "AV SPC(15)AV CHR$(186) 
520 PRINT TAB(7)CHR$(200)STRING$(28,205)CHR$(188) 
530 ' 
540 ' Check for DOS 1.10. "WINDOW=0" will cause error if 2.00. 
550 ' When compiled, version 2.00 "thinks" its under DOS 1.10. 
560 ' 
570 ON ERROR GOTO 600 
580 WINDOW=0:DOS1.1=TRUE 
590 GOTO 610 
600 IF ERL=580 THEN DOS1.1=FALSE:RESUME 610 
610 ON ERROR GOTO 630 
620 GOTO 660 
630 IF ERR=53 THEN RESUME 640 ELSE ON ERROR GOTO 0 
640 CLOSE:OPEN "O",1,"DIR.DAT":CLOSE 
650 ON ERROR GOTO 0 
660 OPEN "I",1,"DIR.DAT" 
670 FOR X=1 TO 1000 
680   IF EOF(1)THEN CLOSE:GOTO 720 ELSE INPUT #1,A(X):ENTRIES=ENTRIES+1 
690   LOCATE 15,20,0:PRINT A(X); 
700 NEXT 
710 CLOSE 
720 '                           ************ 
730 '                         ****  MENU  **** 
740 '                           ************ 
750 IF SORTFLAG THEN GOSUB 5040 
760 IF MONOCHROME THEN COLOR 7 ELSE IF PAGE THEN COLOR ,,1:SCREEN ,,1,1:GOTO 1320 
770 WIDTH 80:SCREEN 0,1,1,1:COLOR ,1,1:PAGE=TRUE 
780 CLS 
790 COLOR 6 
800 LOCATE 5,1,0 
810 PRINT CHR$(201)STRING$(78,205)CHR$(187); 
820 PRINT CHR$(186); 
830 COLOR 13 
840 PRINT TAB(13)"*** DISK DIRECTORY *** MENU ****"; 
850 PRINT ENTRIES"ENTRIES ON RECORD ***"; 
860 COLOR 6 
870 PRINT TAB(80)CHR$(186); 
880 PRINT CHR$(204)STRING$(78,205)CHR$(185); 
890 PRINT CHR$(186)TAB(13); 
900 COLOR 3:PRINT"Enter:"TAB(80):COLOR 6:PRINT CHR$(186); 
910 PRINT CHR$(186)TAB(19); 
920 COLOR 27:PRINT"1. ";:COLOR 3 
930 PRINT"To FIND an item."TAB(80); 
940 COLOR 6:PRINT CHR$(186); 
950 PRINT CHR$(186)TAB(19); 
960 COLOR 27:PRINT"2. ";:COLOR 3 
970 PRINT"To ENTER an item or an entire disk."TAB(80); 
980 COLOR 6:PRINT CHR$(186); 
990 PRINT CHR$(186)TAB(19); 
1000 COLOR 27:PRINT"3. ";:COLOR 3 
1010 PRINT"To DELETE an item or an entire disk."TAB(80); 
1020 COLOR 6:PRINT CHR$(186); 
1030 PRINT CHR$(186)TAB(19); 
1040 COLOR 27:PRINT"4. ";:COLOR 3 
1050 PRINT"To LIST the file to the CRT or the PRINTER."TAB(80); 
1060 COLOR 6:PRINT CHR$(186); 
1070 PRINT CHR$(186)TAB(19); 
1080 COLOR 27:PRINT"5. ";:COLOR 3 
1090 PRINT"To LIST the directory of a disk."TAB(80); 
1100 COLOR 6:PRINT CHR$(186); 
1110 PRINT CHR$(186)TAB(19); 
1120 COLOR 27:PRINT"6. ";:COLOR 3 
1130 PRINT"To BACKUP the data file."TAB(80); 
1140 COLOR 6:PRINT CHR$(186); 
1150 PRINT CHR$(186)TAB(19); 
1160 COLOR 27:PRINT"";:COLOR 3 
1170 PRINT""TAB(80); 
1180 COLOR 6:PRINT CHR$(186); 
1190 PRINT CHR$(186)TAB(19); 
1200 COLOR 27:PRINT"";:COLOR 3 
1210 PRINT""TAB(80); 
1220 COLOR 6:PRINT CHR$(186); 
1230 PRINT CHR$(186)TAB(19); 
1240 COLOR 27:PRINT"9. ";:COLOR 3 
1250 PRINT"To RETURN to DOS."TAB(80); 
1260 COLOR 6:PRINT CHR$(186); 
1270 PRINT CHR$(204)STRING$(78,205)CHR$(185); 
1280 PRINT CHR$(186)TAB(27); 
1290 COLOR 20,7:PRINT" *** ENTER YOUR CHOICE *** "; 
1300 COLOR 6,1:PRINT TAB(80)CHR$(186); 
1310 PRINT CHR$(200)STRING$(78,205)CHR$(188); 
1320 BEEP 
1330 CHOICE$="":WHILE CHOICE$="":CHOICE$=INKEY$:WEND 
1340 CHOICE=INSTR("123456789",CHOICE$) 
1350 IF CHOICE=0 THEN 1320 
1360 SCREEN ,,0,0:COLOR 6,1,1:CLS 
1370 '               1    2    3    4    5    6    7    8    9 
1380 ON CHOICE GOTO 1390,1790,2590,3020,3650,4050,750,750,4620 
1390 '**************************************** 
1400 '*     ***  Find an ITEM routine ***    * 
1410 '**************************************** 
1420 COLOR ,3,3:CLS 
1430 COLOR 16:PRINT AL;:COLOR 1 
1440 PRINT TAB(26)"*** FIND AN ITEM ROUTINE ***" 
1450 COLOR 16:PRINT AL 
1460 COLOR 4:PRINT"Enter complete or partial "; 
1470 PRINT"filespec of ITEM to be found "AQ"........" 
1480 COLOR 1:INPUT AT:IF AT="*" THEN 720' Return to menu. 
1490 ACAP=AT:GOSUB 5230:AT=ACAP 
1500 FOR X=1 TO ENTRIES 
1510 IF INSTR(A(X),AT)=0 OR LEFT$(A(X),12)=LEFT$(AX,12) THEN 1600 
1520 AX=A(X) 
1530 PRINT AV;LEFT$(A(X),12);AV" can be found on disks: "; 
1540 FOR Y=X TO ENTRIES 
1550   IF LEFT$(AX,12)=LEFT$(A(Y),12) THEN PRINT RIGHT$(A(Y),3)", ";:GOTO 1570 
1560   Y=ENTRIES 
1570 NEXT 
1580 PRINT:PRINT:PRINT"Is this the ITEM you wanted to find "; 
1590 GOSUB 4770:IF ANSWER="Y"THEN 1620 
1600 NEXT:PRINT:PRINT"I cannot locate any incidence of "AV;AT;AV". Try again." 
1610 PRINT:GOTO 1460 
1620 PRINT:PRINT"Do you want to RUN "AV;AX;AV" "; 
1630 GOSUB 4770:IF ANSWER="N" THEN 720 
1640 ON ERROR GOTO 1660 
1650 GOTO 1670 
1660 IF ERR=53 THEN RESUME 1680 ELSE ON ERROR GOTO 0 
1670 IF MID$(AX,10,3)="BAS" THEN RUN "A:"+LEFT$(AX,12) ELSE 1750 
1680 ON ERROR GOTO 1690:RUN "B:"+LEFT$(AX,12) 
1690 IF ERR=53 THEN RESUME 1700 ELSE ON ERROR GOTO 0 
1700 COLOR 4:PRINT:BEEP:BEEP:PRINT"I cannot locate "AV;AX;AV; 
1710 PRINT" on either drive "AV"A"AV" or drive "AV"B"AV"!!!" 
1720 PRINT"Please check to see that Disk #"; 
1730 PRINT RIGHT$(AX,3)" is mounted and press any" 
1740 PRINT"key to continue ";:COLOR 1:GOSUB 4700:PRINT:GOTO 1620 
1750 PRINT:PRINT"Since "AV;AX;AV" doesn't have the "AV".BAS"AV" extension,"; 
1760 PRINT "I can't RUN it!" 
1770 PRINT"Press any key to return to the menu...("AV"*"AV" to jump to DOS) "; 
1780 GOSUB 4670:IF ANSWER<>"*"THEN 720 ELSE CLS:SYSTEM 
1790 '**************************** 
1800 '**** ITEM ENTRY ROUTINE **** 
1810 '**************************** 
1820 COLOR 4,7,7:CLS 
1830 COLOR 1:PRINT AL;:COLOR 4 
1840 PRINT TAB(27)"*** Item Entry Routine ***" 
1850 COLOR 1:PRINT AL:COLOR 4 
1860 LOCATE 12,1 
1870 PRINT"Do you want to enter from the ";:COLOR 17:PRINT"K";:COLOR 4 
1880 PRINT "eyboard or read a ";:COLOR 17:PRINT "D";:COLOR 4:PRINT "isk "AQ; 
1890 COLOR 1 
1900 GOSUB 4670:COLOR 4 
1910 IF ANSWER="*"THEN 720 ELSE IF ANSWER="k" OR ANSWER="K" THEN 1940 
1920 IF ANSWER="D" OR ANSWER="d" THEN 2130 
1930 LOCATE L,T:BEEP:GOTO 1900 
1940 ' Keyboard item entry routine 
1950 LOCATE 12,1:PRINT SPACE$(79) 
1960 LOCATE 4,1 
1970 PRINT AV".BAS"AV" is the default extension." 
1980 PRINT "Enter filespec "AQ;:INPUT A:IF A="*"THEN 720 
1990 ACAP=A:GOSUB 5230:A=ACAP 
2000 IF LEN(A)>12 THEN BEEP:PRINT A" is too long !":GOTO 1980 
2010 INPUT "Enter disk # ";AD 
2020 IF VAL(AD)<1 OR VAL(AD)>999 THEN BEEP:GOTO 2010 
2030 AD=RIGHT$("00"+AD,3) 
2040 K=INSTR(A,".") 
2050 IF K=0 THEN A=LEFT$(A+"       ",8)+".BAS":GOTO 2040 
2060 A=LEFT$(MID$(A,1,K-1)+"       ",8)+RIGHT$(A,LEN(A)-(K-1)) 
2070 A=LEFT$(A+"   ",12)+AD 
2080 PRINT"Is "AV;A;AV" correct "; 
2090 GOSUB 4770:IF ANSWER$="N"THEN 1980 
2100 ENTRIES=ENTRIES+1 
2110 A(ENTRIES)=A:A="":PRINT"Entered. Do you have any more entries "; 
2120 GOSUB 4770:IF ANSWER="N"THEN GOSUB 5010:GOSUB 4960:RUN ELSE 1970 
2130 'Read disk entry routine 
2140 LOCATE 12,1:PRINT SPACE$(79) 
2150 LOCATE 4,1 
2160 PRINT "Enter disk number to be read "AQ; 
2170 INPUT ADISK:IF ADISK="*"THEN 720 ELSE DISK=VAL (ADISK) 
2180 IF DISK<0 OR DISK>999 THEN BEEP:GOTO 2160 
2190 ADISK=STR$(DISK):MID$(ADISK,1)="0":ADISK=RIGHT$("00"+ADISK,3) 
2200 PRINT "Enter drive (A or B) (B is the default) "; 
2210 GOSUB 4670:ADRIVE=ANSWER$:IF ADRIVE=CHR$(13) THEN ADRIVE="B":GOTO 2240 
2220 ACAP=ADRIVE:GOSUB 5230:ADRIVE=ACAP 
2230 IF ADRIVE<>"A" AND ADRIVE<>"B" THEN LOCATE L,T:BEEP:GOTO 2210 
2240 LOCATE L,T:PRINT "? "ADRIVE 
2250 PRINT:PRINT"Read disk #"ADISK" on drive "AV;ADRIVE;AV". Is this correct "; 
2260 GOSUB 4770:IF ANSWER="N"THEN 2160 
2270 PRINT"Deleting references to disk #"ADISK"......" 
2280 FOR X=1 TO ENTRIES 
2290   IF RIGHT$(A(X),3)=ADISK THEN A(X)="" 
2300 NEXT 
2310 '              ****************************************** 
2320 '            ***** Routine to Read a Disk's Directory **DIR2    BASC4      112783 21376.                            
****** 
2340 CLS 
2350 PRINT AL; 
2360 IF ADRIVE="A"THEN FILES"A:*.*" ELSE FILES "B:*.*" 
2370 PRINT:PRINT AL; 
2380 ROW=CSRLIN:COL=POS(0):COLOR 6,1 
2390 IF DOS1.1 THEN STLIN=2 ELSE STLIN=3 
2400 IF DOS1.1 THEN ENDPT=78:STEPPT=13 ELSE ENDPT=69:STEPPT=18 
C2          C3          {  &  B:C2                  �>      ����������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������60 GOSUB 5010 
2570 GOSUB 4960 
2580 RUN 
2590 '          ***************************************************** 
2600 '          *   *** DELETE AN ITEM OR ENTIRE DISK ROUTINE ***   * 
2610 '          ***************************************************** 
2620 COLOR 2,0,0:CLS 
2630 PRINT AL; 
2640 PRINT TAB(22)"*** DELETE AN ITEM OR DISK ROUTINE ***" 
2650 PRINT AL; 
2660 LOCATE 12,1 
2670 PRINT"Delete an "; 
2680 COLOR 20,7:PRINT"I"; 
2690 COLOR 2,0:PRINT"tem or an entire "; 
2700 COLOR 20,7:PRINT"D"; 
2710 COLOR 2,0:PRINT"isk "AQ; 
2720 COLOR 4,7:GOSUB 4680:COLOR 2,0 
2730 IF ANSWER="*"THEN 720 ELSE IF ANSWER="I" THEN 2790 
2740 IF ANSWER="i" THEN 2790 
2750 IF ANSWER="D" THEN 2930 
2760 IF ANSWER="d" THEN 2930 
2770 SOUND 350,4:LOCATE L,T 
2780 GOTO 2720 
2790 '*** Item Delete *** 
2800 LOCATE L,T:PRINT"? Item":PRINT 
2810 PRINT"Enter complete or partial filespec of item to be deleted "AQ; 
2820 INPUT AT:IF AT="*"THEN 720 
2830 ACAP=AT:GOSUB 5230:AT=ACAP 
2840 FOR X=1 TO ENTRIES 
2850   IF INSTR(A(X),AT)<>0 THEN 2880 
2860 NEXT 
2870 PRINT"I can't locate "AV;AT;AV". Try again.":GOTO 2810 
2880 PRINT"Is "AV;A(X);AV" the item you want to delete "; 
2890 GOSUB 4770:IF ANSWER$="N"THEN 2860 
2900 A(X)="":PRINT"Deleted. Do you have any other items to delete "; 
2910 GOSUB 4770:IF ANSWER$="Y"THEN 2810 
2920 GOSUB 4960:RUN 
2930 '*** Disk Delete *** 
2940 PRINT"Enter number of disk to be deleted ";:INPUT D 
2950 PRINT"Searching......."; 
2960 FOR X=1 TO ENTRIES 
2970   IF VAL(RIGHT$(A(X),3))=D THEN A(X)="" 
2980 NEXT 
2990 PRINT"Done." 
3000 PRINT"Do you have any other disks to delete "; 
3010 GOSUB 4770:IF ANSWER$="Y"THEN 2940 ELSE 2920 
3020 '************************** 
3030 '*  *** LIST ROUTINE ***  * 
3040 '************************** 
3050 COLOR 4,3,3:CLS 
3060 LOCATE 11,1:PRINT"Do you want the list Sorted by Disk number "; 
3070 GOSUB 4770:IF ANSWER$="Y"THEN GOSUB 5140 
3080 PRINT"List to "; 
3090 COLOR 30,0:PRINT"C"; 
3100 COLOR 4,3:PRINT"RT or "; 
3110 COLOR 30,0:PRINT"P"; 
3120 COLOR 4,3:PRINT"rinter "; 
3130 GOSUB 4680:IF ANSWER$="*"THEN 720 
3140 IF ANSWER$="c" OR ANSWER$="C"THEN 3190 
3150 IF ANSWER$="p" OR ANSWER$="P"THEN 3380 
3160 SOUND 200,5 
3170 LOCATE L,T 
3180 GOTO 3130 
3190 '*** List to CRT Routine *** 
3200 WIDTH 40:COLOR 4,3,3:PAGE=FALSE:BACK=FALSE 
3210 SCREEN 0,1,0,0:CLS 
3220 FOR X=1 TO ENTRIES 
3230   IF X/22=INT(X/22) THEN 3330 
3240   PRINT USING "###  ";X; 
3250   COLOR 1 
3260   PRINT LEFT$(A(X),12);:COLOR 4 
3270   PRINT"  Disk # ";:COLOR 1:PRINT RIGHT$(A(X),3):COLOR 4 
3280 NEXT 
3290 LOCATE 25,1:COLOR 20,7 
3300 PRINT"End of listing. Press any key "; 
3310 GOSUB 4680 
3320 GOTO 720 
3330 COLOR 20,7 
3340 LOCATE 25,1:PRINT"Press any key to continue "; 
3350 GOSUB 4680 
3360 COLOR 4,3:CLS:GOTO 3280 
3370 '*********************** 
3380 '*** List to Printer *** 
3390 '*********************** 
3400 CLS:LOCATE 12,1 
3410 PRINT"Printing List. Press any key to abort printout....." 
3420 PAGES=ENTRIES\150+1 
3430 FOR PAGE.NUM=1 TO PAGES 
3440   LPRINT 
3450   LPRINT TAB(12)DATE$;TAB(52)"Page"PAGE.NUM"of"PAGES"Pages." 
3460   LPRINT 
3470   LPRINT TAB(12); 
3480   FOR X=1 TO 3 
3490     LPRINT USING AFORMAT;"Dsk","Filespec"; 
3500   NEXT 
3510   LPRINT 
3520   LPRINT TAB(12)STRING$(59,"-") 
3530   FOR X=(PAGE.NUM-1)*150 TO (PAGE.NUM-1)*150+50 
3540     LPRINT TAB(12); 
3550     FOR Y=1 TO 150 STEP 50 
3560       IF INKEY$<>"" THEN Y=3:X=ENTRIES+150:PAGE.NUM=PAGES:GOTO 3590 
3570       IF (X+Y)>ENTRIES THEN Y=151:GOTO 3590 
3580       LPRINT USING AFORMAT;RIGHT$(A(X+Y),3);LEFT$(A(X+Y),12); 
3590     NEXT 
3600     LPRINT 
3610   NEXT 
3620   LPRINT TAB(12)STRING$(59,"-");CHR$(12); 
3630 NEXT 
3640 GOTO 720 
3650 '****************************************************** 
3660 '*   *** Routine to list the Directory of a Disk ***  * 
3670 '****************************************************** 
3680 CLS 
3690 PRINT AL; 
3700 PRINT TAB(20)"*** Display Disk Directory Routine ***" 
3710 PRINT AL 
3720 PRINT"Do you want an "; 
3730 COLOR 31,0:PRINT"A"; 
3740 COLOR 6,1:PRINT"ctual Disk Directory or the "; 
3750 COLOR 31,0:PRINT"D"; 
3760 COLOR 6,1:PRINT "ata of a Disk as stored by "AV"DIR"AV"." 
3770 PRINT AQ; 
3780 GOSUB 4680:IF ANSWER$="*"THEN 720 
3790 IF ANSWER="A" OR ANSWER="a" THEN 3820 
3800 IF ANSWER="D" OR ANSWER="d" THEN 3930 
3810 SOUND 234,5:LOCATE L,T:GOTO 3780 
3820 '*** List actual directory *** 
3830 LOCATE L,T:PRINT "? Actual Directory" 
3840 PRINT"Enter drive "AV"A"AV", "AV"B"AV", or "AV"C"AV" "; 
3850 GOSUB 4680:IF ANSWER="*"THEN 720 
3860 ACAP=ANSWER:GOSUB 5230 
3870 IF ACAP="A" OR ACAP="B" OR ACAP="C" THEN ANSWER=ACAP:GOTO 3890 
3880 SOUND 231,5:LOCATE L,T:GOTO 3850 
3890 LOCATE L,T:PRINT "? "ANSWER 
3900 PRINT AL:COLOR 0,2 
3910 FILES ANSWER+":*.*" 
3920 COLOR 6,1:GOTO 3710 
3930 LOCATE L,T:PRINT"? Data":PRINT "Enter disk number "AQ; 
3940 INPUT AD:IF AD="*"THEN 720 
3950 D=VAL(AD):C=0 
3960 PRINT AL:COLOR 0,2 
3970 FOR X=1 TO ENTRIES 
3980   IF D<>VAL(RIGHT$(A(X),3))THEN 4020 
3990   IF POS(0)>=78 THEN PRINT 
4000   PRINT LEFT$(A(X),12)" "; 
4010   C=C+1 
4020 NEXT 
4030 IF C=0 THEN PRINT"Disk number"D"isn't listed." 
4040 GOTO 3920 
4050 '****************************************************** 
4060 '*          *** Backup Data File  Routine ***         * 
4070 '****************************************************** 
4080 IF BACK AND NOT MONOCHROME THEN SCREEN ,,2,2:COLOR 6,1,1:GOTO 4530 
4090 WIDTH 80:IF MONOCHROME THEN CLS:COLOR 7,0 ELSE SCREEN 0,1,2,2:COLOR ,1,1:BACK=TRUE 
4100 BACK=TRUE:CLS 
4110 COLOR 6 
4120 LOCATE 5,1,0 
4130 PRINT CHR$(201)STRING$(78,205)CHR$(187); 
4140 PRINT CHR$(186); 
4150 COLOR 13 
4160 PRINT TAB(18)"     *** Backup Data File Routine ***"; 
4170 COLOR 6 
4180 PRINT TAB(80)CHR$(186); 
4190 PRINT CHR$(204)STRING$(78,205)CHR$(185); 
4200 PRINT CHR$(186)TAB(13); 
4210 COLOR 3:PRINT"Enter:"TAB(80):COLOR 6:PRINT CHR$(186); 
4220 PRINT CHR$(186)TAB(19); 
4230 COLOR 27:PRINT"1. ";:COLOR 3 
4240 PRINT"To BACKUP the Data File to drive "AV"A"AV"."TAB(80); 
4250 COLOR 6:PRINT CHR$(186); 
4260 PRINT CHR$(186)TAB(19); 
4270 COLOR 27:PRINT"2. ";:COLOR 3 
4280 PRINT"To BACKUP the Data File to drive "AV"B"AV"."TAB(80); 
4290 COLOR 6:PRINT CHR$(186); 
4300 PRINT CHR$(186)TAB(19); 
4310 COLOR 27:PRINT"3. ";:COLOR 3 
4320 PRINT"To BACKUP the Data File to drive "AV"C"AV"."TAB(80); 
4330 COLOR 6:PRINT CHR$(186); 
4340 PRINT CHR$(186)TAB(19); 
4350 COLOR 6:PRINT TAB(80) CHR$(186); 
4360 PRINT CHR$(186)TAB(19); 
4370 COLOR 6:PRINT TAB(80) CHR$(186); 
4380 PRINT CHR$(186)TAB(19); 
4390 COLOR 6:PRINT TAB(80) CHR$(186); 
4400 PRINT CHR$(186)TAB(19); 
4410 COLOR 6:PRINT TAB(80) CHR$(186); 
4420 PRINT CHR$(186)TAB(19); 
4430 COLOR 6:PRINT TAB(80) CHR$(186); 
4440 PRINT CHR$(186)TAB(19); 
4450 COLOR 27:PRINT"9. ";:COLOR 3 
4460 PRINT"To RETURN to the main MENU."TAB(80); 
4470 COLOR 6:PRINT CHR$(186); 
4480 PRINT CHR$(204)STRING$(78,205)CHR$(185); 
4490 PRINT CHR$(186)TAB(27); 
4500 COLOR 20,7:PRINT" *** ENTER YOUR CHOICE *** "; 
4510 COLOR 6,1:PRINT TAB(80)CHR$(186); 
4520 PRINT CHR$(200)STRING$(78,205)CHR$(188); 
4530 BEEP 
4540 CHOICE$="":WHILE CHOICE$="":CHOICE$=INKEY$:WEND 
4550 CHOICE=INSTR("123456789",CHOICE$):IF CHOICE=0 THEN 4530 
4560 '                1    2    3    4    5    6    7    8    9 
4570 ON CHOICE GOSUB 4590,4600,4610,4080,4080,4080,4080,4080,720 
4580 GOTO 4080 
4590 DRIVE=0:GOSUB 4860:RETURN 
4600 DRIVE=1:GOSUB 4860:DRIVE=0:RETURN 
4610 DRIVE=2:GOSUB 4860:DRIVE=0:RETURN 
4620 '******* RETURN TO DOS ROUTINE ******* 
4630 CLS 
4640 SYSTEM 
4650 '********************** SUBROUTINES ********************** 
4660 ' 
4670 '********************************** 
4680 '*** Blinking Cursor Subroutine *** 
4690 '********************************** 
4700 T=POS(0):L=CSRLIN 
4710 LOCATE L,T,0:PRINT "?";:SOUND 32767,3:ANSWER$=INKEY$ 
4720 IF ANSWER$<>""THEN IF ANSWER$="*"THEN RETURN 720 ELSE RETURN 
4730 LOCATE L,T,0:PRINT CHR$(219);:SOUND 32767,3:ANSWER$=INKEY$ 
4740 IF ANSWER$<>""THEN IF ANSWER$="*"THEN RETURN 720 ELSE RETURN 
4750 GOTO 4710 
4760 ' ******************************** 
4770 ' *** Yes/No Answer Subroutine *** 
4780 ' ******************************** 
4790 GOSUB 4670:LOCATE L,T 
4800 IF ANSWER$="Y" OR ANSWER$="y" OR ANSWER$=CHR$(13) THEN 4830 
4810 IF ANSWER$="0" OR ANSWER$="n" OR ANSWER$="N" THEN 4840 
4820 SOUND 250,4:GOTO 4790 
4830 ANSWER$="Y":PRINT "? Yes":RETURN 
4840 ANSWER$="N":PRINT "? No":RETURN 
4850 ' 
4860 '******* SUBROUTINE TO DUMP DATA TO A SPECIFIC DISK ******** 
4870 'DRIVE=0 IF DRIVE "A" OR 1 IF DRIVE "B" or 2 if "C" 
4880 SCREEN ,,0,0:COLOR 31,4,4:CLS 
4890 LOCATE 12,14,0:PRINT"Saving Data to Disk....."; 
4900 IF DRIVE=0 THEN OPEN"O",1,"A:DIR.DAT":GOTO 4930 
4910 IF DRIVE=1 THEN OPEN"O",1,"B:DIR.DAT":GOTO 4930 
4920 OPEN"O",1,"C:DIR.DAT":GOTO 4930 
4930 FOR X=1 TO ENTRIES:IF A(X)="" THEN 4940 ELSE WRITE #1,A(X) 
4940 NEXT:CLOSE:RETURN 
4950 '******* SUBROUTINE TO DUMP DATA TO DEFAULT DISK ******** 
4960 SCREEN ,,0,0:COLOR 31,4,4:CLS 
4970 LOCATE 12,14,0:PRINT"Saving Data to Disk....."; 
4980 OPEN"O",1,"DIR.DAT" 
4990 FOR X=1 TO ENTRIES:IF A(X)="" THEN 5000 ELSE WRITE #1,A(X) 
5000 NEXT:CLOSE:RETURN 
5010 '***************************************************** 
5020 '*   SUBROUTINE TO SORT THE DATA ARRAY BY FILESPEC   * 
5030 '***************************************************** 
5040 PRINT"Sorting Data.........." 
5050 M=ENTRIES:N=M:C=0 
5060 M=INT(M/2):IF M=0 THEN SORTFLAG=FALSE:RETURN ELSE J=1:K=N-M 
5070 I=J 
5080 L=I+M:C=C+1 
5090 IF A(I)<A(L)THEN 5100 ELSE SWAP A(I),A(L):I=I-M:IF I<1 THEN 5100 ELSE 5080 
5100 J=J+1:IF J>K THEN 5060 ELSE 5070 
5110 '***************************************************** 
5120 '*   SUBROUTINE TO SORT THE DATA ARRAY BY DISK NO.   * 
5130 '***************************************************** 
5140 PRINT"Sorting Data.........." 
5150 FOR X=1 TO ENTRIES:A(X)=RIGHT$(A(X),3)+LEFT$(A(X),12):NEXT 
5160 GOSUB 5050 
5170 SORTFLAG=TRUE 
5180 FOR X=1 TO ENTRIES:A(X)=RIGHT$(A(X),12)+LEFT$(A(X),3):NEXT 
5190 RETURN 
5200 '********************************************** 
5210 '*   SUBROUTINE TO CAPITALIZE VARIABLE ACAP   * 
5220 '********************************************** 
5230 FOR XACAP=1 TO LEN(ACAP) 
5240 A1=MID$(ACAP,XACAP,1) 
5250 IF A1>="a" AND A1<="z" THEN MID$(ACAP,XACAP,1)=CHR$(ASC(A1)-32)
5260 NEXT:RETURN
5270 END ' of DIR2.BAS

```

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk 0185

     Volume in drive A has no label
     Directory of A:\

    CATALOG  COM      1280   2-05-83
    DD       BAT        26   4-14-84   2:44p
    DIR2     BAS     21376  11-27-83   6:00p
    DN       BAT        22   4-14-84   2:41p
    DNXSD    DOC       752   4-16-84   3:55p
    DS       BAT        26   4-14-84   2:43p
    ZSQ      EXE     19840  11-23-83   3:08a
    DX       BAT        25   4-14-84   2:43p
    DXSAVE   BAT        34   4-16-84   3:48p
    SDIR     COM      1408   5-16-83  12:40a
    SDIR     DOC       896   5-19-83   8:38a
    SDIR24C  ASM     46848   2-07-84   1:59a
    SDIR24C  COM      2304  12-11-83   4:23a
    SDIR24C  DOC      1536  12-11-83   4:22a
    SQIBM    COM     14336   3-28-84   4:11a
    SQIBM    DOC       768   3-28-84   4:12a
    USQIBM   COM     22016   3-17-84  10:02p
    USQIBM   DOC       637   3-28-84   4:38a
    ZSQ-ZUSQ DOC      1792  11-23-83   3:12a
    ZUSQ     EXE     13696  11-23-83   3:11a
    FILES185 TXT      1648  12-15-88  10:11a
    GO       BAT        38  10-19-87   3:56p
    GO       TXT       848  12-02-88   9:28a
           23 file(s)     152152 bytes
                            2048 bytes free
