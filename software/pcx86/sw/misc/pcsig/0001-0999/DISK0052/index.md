---
layout: page
title: "PC-SIG Library Disk #52"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0052/
machines:
  - id: ibm5150
    type: pcx86
    config: /machines/pcx86/ibm/5150/cga/256kb/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk 0052"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5150" %}

{% comment %}info_begin{% endcomment %}

## Information about "DOS UTILITIES NO 1"

    An updated version of the FREE1 RAM-disk package for electronic disk
    fans.  Use this collection of file handling utilities to insert
    carriage returns, strip high-order characters from a text file, and to
    hide a file from prying eyes.  Also included is a text-search routine,
    and a binary to hex converter.
    
    System Requirements:  Some programs run under DOS 1.x ONLY; BASIC
    
    How to Start: To run a COM or EXE program simply type its name and
    press <ENTER>.  For instructions on running BASIC programs, please
    refer to the GETTING STARTED section in this catalog.  To read DOC
    files simply enter TYPE filename.ext and press <ENTER>.
    
    Suggested Registration:  FREE4 $15.00; FREE5 $10.00
    
    File Descriptions:
    
    BEEP     COM  Generates beep sound - useful for match files
    CRETURN  BAS  Adds carriage returns to downloaded files
    FILTER   BAS  Removes control and non-ASCII characters from disk files
    DISRTN   EXE  File directory utility
    FIXDEL   EXE  Disk file utility
    DSKPGM2  BAS  Creates batch file for copying files
    FIXIT    BAS  Creates PRINTFIX.COM
    FREE4    COM  160K electronic disk drive - update to FREE1
    FREE5    COM  New reset program - update to FREE3
    FREE4    DOC  Documentation for FREE4.COM
    FREE5    DOC  Documentation for FREE5.COM
    HIDEFILE BAS  Modifies a file's directory status
    HEX      BAS  Convert binary files to and from hex format for download
    PR256    ASM  Printer patch
    POKEPEEK DOC  Memory locations in ROM BIOS accessible from BASIC
    PATCH256 ASC  Patches various printers into PR256
    PARTCOPY EXE  Copies files from a double-sided to 2 single-sided disks
    UTSCAN   BAS  Scans text files for specified string and prints
    TUNE     COM  Plays tune
    SHIFTIBM COM  Converts backslash key back to IBM standard configuration
    SHIFTBS  COM  Converts backslash key into left shift key
    FILEMOD  ASC  Part of DISRTN.EXE program
    ABSTRACT DOC  Documentation for utilities
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## CRETURN.BAS

```bas
2 INPUT"INPUT THE FILENAME THAT WAS DOWNLOADED WITHOUT CR (d:filename)  ",A$
4 INPUT"INPUT THE NEW NAME FOR THE DOWNLOADED FILE (d:filename)  ",B$
5 ' CHANGE THE INPUT AND OUTPUT NAMES TO THE NAMES OF THE FILES YOU WANT AS
6 ' INPUT AND OUTPUT  PRIMARILY USED TO COPY FILES WITH NO CARRIAGE RETURNS
7 ' IN THEM SO THAT YOU CAN EDLIN THEM   CONTRIBUTED BY DON WITHROW
10 OPEN A$ FOR INPUT AS #1
20 OPEN B$ FOR OUTPUT AS #2
30 IF EOF(1) THEN 100 ELSE LINE INPUT #1, THELIN$
40 PRINT #2, THELIN$
50 GOTO 30
100 CLOSE:END
120 'This program will add Carriage Returns to a downloaded file that does
130 'not appear to have them when you try to list it using the DOS TYPE
140 'command. The file has to be a basic program, patch or subroutine.
150 'After adding CRs to the file you can then use EDLIN to remove direct
160 'statements from the file.
```

## DSKPGM2.BAS

```bas
10 ' *DISKPGM2.BAS     PROGRAM TO SORT ALL FILES ON A DISK AND CREATE A FILE
20 ' CALLED COPYHHMM.BAT FOR EXECUTION AND COPY IN ALPHABETICAL SEQUENCE
30 CLS
40 PRINT "(C) Copyright 1982,, Richard Schinnell,Rockville, MD. 20853 (301) 949-8848
50 PRINT:LOCATE 10,1,1
60 COLOR 7,0:PRINT" WHICH DISK DRIVE DO YOU WANT TO CHECK> A OR B :":COLOR 7,0
70 RICH$=INKEY$:IF LEN(RICH$)<>1 THEN 70
80 IF LEFT$(RICH$,1)="A" OR LEFT$(RICH$,1) ="B" THEN DRIV$=LEFT$(RICH$,1)+":" ELSE 60
90 ON ERROR GOTO 630
100 KEY OFF
110 FALSE=0:TRUE=NOT FALSE:DEFINT A-Z:L=0:CLS:CODE=43:DIM F$(75)
120 DIM F1$(75)
130 X=0:O=1
140 FILES DRIV$+"*.*"
150 CLINE1 = CSRLIN
160 D=0
170 LOCATE 1,1,1
180 FOR I = 1 TO CLINE1
190 FOR B = 1 TO 66 STEP 13
200 D=D+1
210 FOR N = 0 TO 11
220 T = SCREEN(I,(B+N)):F$(D)=F$(D)+CHR$(T)
230 NEXT N
240 IF LEFT$(F$(D),1)=" " THEN D=D-1 :GOTO 270
250 NEXT B
260 NEXT I
270 G$= DRIV$+"COPY"+MID$(TIME$,1,2)+MID$(TIME$,4,2)+".BAT"
280 LOCATE 15,1:COLOR 26,0:PRINT "ALPHABETIZING THE FILE NAMES ":COLOR 7,0
290 ' THIS ALPHABETIZES THE ARRAY
300 FOR X=1 TO D-1:FOR Y=X+1 TO D:IF F$(Y)<F$(X) THEN SWAP F$(X),F$(Y)
310 NEXT Y:NEXT X
320 FOR I=1 TO D
330 FOR E = 1 TO LEN(F$(I))
340 L$= MID$(F$(I),E,1)
350 IF ASC(L$)<>32 THEN U$=U$+L$
360 NEXT E
370 F$(I)=U$
380 U$=""
390 NEXT I
400 CLS:LOCATE 12,25:COLOR 28,0:PRINT " WRITING FILE  ";G$:COLOR 7,0
410 OPEN  G$ FOR APPEND AS #1
420 PRINT #1,"REM  THIS PGM WILL AUTOMATICALLY COPY A TO B SORTED
430 PRINT #1, "PAUSE
440 FOR I = 1 TO D
450 PRINT #1,"COPY ";F$(I);" B:"
460 NEXT I
470 CLOSE #1
480 CLS:X=1:O=1
490 OPEN G$ FOR INPUT AS #1
500 FOR I = 1 TO D
510 IF I > 23 THEN X = I-23:O=30
520 IF I > 46 THEN X = I-46:O=60
530 X = X +1
540 LOCATE X,O,1
550 LINE INPUT #1,F$(I)
560 PRINT F$(I);
570 NEXT I
580 CLOSE #1
590 LOCATE 25,1,1:COLOR 28,0:PRINT" HIT ANY KEY TO CLEAR SCREEN AND CONTINUE":COLOR 7,0
600 RICHA$=INKEY$:IF RICHA$="" THEN 600
610 CLS
620 END
630 PRINT "ERROR ";ERR;" HAS OCCURED IN LINE # ";ERL
640 END
```

## FILTER.BAS

```bas
10 '    FILTERS  NON-ASCII CHARACTERS FROM A FILE
20 '    USEFUL FOR CLEANING UP NULLS AND CONTROL CHARACTERS FROM A
30 '    TRANSMITTED FILE.
40 '                                       RICHARD STECK  820511
50 '
60 '
70 CLOSE
80 DEFINT A-Z
90 ON ERR GOTO 470
100 KEY OFF
110 CLS:WIDTH 80: LOCATE 12,,1
120 INPUT "   ENTER NAME OF FILE TO BE FILTERED  "; F1$
130 PRINT
140 INPUT "   ENTER DESTINATION FILE NAME        "; F2$
150 IF F1$ = F2$ THEN GOTO 110
160 PRINT: PRINT
170 PRINT TAB(10), "Source file name is: "; TAB(33); F1$
180 PRINT
190 PRINT TAB(10), "Destination file name is: ";TAB(33); F2$
200 PRINT
210 INPUT " Is that correct(Y/N/Q)?  "; ANS$
220 IF (LEFT$(ANS$,1) = "Q") OR (LEFT$(ANS$,1) = "q" )  THEN STOP
230 IF NOT ((LEFT$(ANS$,1) = "Y") OR (LEFT$(ANS$,1) = "y") ) THEN GOTO 160
240 OPEN F1$ FOR INPUT AS #1
250 OPEN F2$ FOR OUTPUT AS #2
260 '
270 WHILE NOT EOF(1)
280    LINE INPUT #1,A$
290 '
300 PRINT  A$ :  '  DISPLAY STRING
310    GOSUB 370
320    PRINT #2,A$
330 WEND
340 CLOSE 1,2
350 STOP
360 '
370 '  FILTER OUT NULLS FROM A$
380 AA$= STRING$(255," ")
390 J = 1
400 FOR I = 1 TO LEN(A$)
410 TEST = ASC(MID$(A$,I,1))
420 IF TEST < 32 AND (TEST < 7 OR TEST > 13) THEN GOTO 430 ELSE MID$(AA$,J,1) =  MID$(A$,I,1) : J = J + 1
430 NEXT I
440 A$ = LEFT$(AA$,J-1)
450 RETURN
460 '
470 PRINT : PRINT "ERROR CONDITION  "; ERR; "  IN LINE NO. "; ERL: PRINT : STOP
```

## FIXIT.BAS

```bas
10 CHECK=0
20 FOR I=1 TO 112
30 READ BYTE
40 CHECK=CHECK >= BYTE
50 NEXT I
60 IF CHECK=242 THEN 100
70 PRINT "ONE OF THE DATA STATEMENTS MAY BE WRONG"
80 PRINT "CHECK LINES 1000-1130, THEN RUN AGAIN"
90 STOP
100 OPEN "PRINTFIX.COM" AS #1 LEN=1
110 FIELD #1,1 AS BYTE$
120 RESTORE
130 FOR I=1 TO 112
140 READ BYTE : LSET BYTE$=CHR$(BYTE) : PUT #1
150 NEXT I
160 CLOSE
170 PRINT "PRINTFIX.COM CREATED"
180 END
1000 DATA 186,112,1,184,0,0,142,216
1010 DATA 184,21,1,163,92,0,140,200
1020 DATA 163,94,0,205,39,251,30,82
1030 DATA 86,190,64,0,142,222,139,242
1040 DATA 209,230,139,148,8,0,11,210
1050 DATA 116,12,10,228,116,12,254,204
1060 DATA 116,44,254,204,116,20,94,90
1070 DATA 31,207,80,238,66,236,168,128
1080 DATA 116,251,176,13,66,238,176,12
1090 DATA 238,88,80,139,148,8,0,66
1100 DATA 236,138,224,128,228,248,90,138
1110 DATA 194,128,244,72,235,216,80,131
1120 DATA 194,2,176,8,238,184,232,3
1130 DATA 72,117,253,176,12,238,235,219
```

## HEX.BAS

```bas
100 '
101 ' Binary-to-hex-and-back-again conversion program for the IBM PC
102 '
103 ' Copyright (C) 1982 J. P. Garbers.  All rights reserved.
104 '
105 '
110 LN$="\"+SPACE$(78)+"\"
120 DEF SEG = 64 : KSTATE = PEEK(23) : POKE 23,32 : DEF SEG  ' set NUM LOCK state, saving current state for later
130 TROFF : ON ERROR GOTO 10000
140 DEF FNA(X$) = 40 - LEN(X$)/2
150 DIM PRO$(6)
170 EXPERT = 0 ' rem expert 1 needs no CR after menu choice, expert 0 wants CR
200 GOSUB 2000 ' do the ego module
210 WHILE NOT DONE : GOSUB 3000 : WEND  ' process menu requests
220 GOTO 9900 ' end stuff
2000 ' ego module
2010 COLOR 7,0 : KEY OFF : CLS : LOCATE 12,1 : COLOR 0,7
2020 PRINT " The following program is brought to you by a grant from Userview Corporation.  ";
2025 COLOR 7,0
2030 FOR TIME = 1 TO 1500 : IF INKEY$<>"" THEN TIME = 1500
2040 NEXT TIME : IF EXPERT THEN RETURN ELSE GOSUB 2300 ' title line and cls
2050 INPUT "Would you like instructions";INST$: IF INST$="" THEN INST$="N"
2060 IF LEFT$(INST$,1)<>"Y" AND LEFT$(INST$,1)<>"y" THEN RETURN
2070 LOCATE 8,1
2080 PRINT "This program allows you to convert binary files from one format to"
2085 PRINT "another.   HEX format files may be easily  transmitted over  phone"
2090 PRINT "lines  and  information  services since  they consist  entirely of"
2095 PRINT "readable characters, but they cannot be used directly as commands."
2100 PRINT "COM  and EXE files may be used  directly as DOS commands,  but are"
2105 PRINT "difficult to send and receive without special software."
2110 PRINT
2115 PRINT "    You can use this program  to convert COM and EXE files to HEX"
2120 PRINT "format files to send your files to someone else, and also use"
2125 PRINT "it to convert HEX files you've received to executable format."
2130 PRINT : CV = CSRLIN : GOSUB 2200 : LOCATE CV, 1
2135 PRINT "You'll tell this program what you want to do by selecting choices"
2140 PRINT "from menus.  To make a selection, press the numbered key corres-"
2145 PRINT "ponding to your choice and it will light up.  You may change your"
2150 PRINT "mind by pressing a different number, and the new choice will light"
2155 PRINT "up.  When the correct choice is lit up, press ENTER.  You may also"
2160 PRINT "press ESC to return to the previous menu."
2165 PRINT
2170 PRINT "As you get used to the program, you may wish to use 'expert mode'."
2175 PRINT "In expert mode you don't have to press ENTER after making your"
2180 PRINT "numbered choice, so make sure you press the right key the first"
2185 PRINT "time.":PRINT
2190 GOSUB 2200 : RETURN
2200 ' wait for keypress
2210 LOCATE 24,4:COLOR 0,7
2220 PRINT "Press the SPACE BAR to continue, or ESC to stop using this program.";
2225 PAUSE$=""
2230 WHILE PAUSE$="": PAUSE$=INKEY$: WEND: COLOR 7,0
2235 IF ASC(PAUSE$)=27 THEN 9900 ' stopped in the middle
2240 LOCATE 24,1:PRINT SPACE$(79);: RETURN
2300 ' title line
2310 CLS : IF QUIET THEN RETURN ELSE COLOR 0,7 : PRINT
2320 PRINT USING LN$; "      Binary-to-hex-and-back-again conversion program for the IBM PC";
2330 PRINT USING LN$; "          Copyright (C) 1982 J. P. Garbers.  All rights reserved.";
2340 PRINT: COLOR 7,0 : RETURN
2400 ' convert cap$ to caps
2410 FOR I = 1 TO LEN(CAP$):E$=MID$(CAP$,I,1):IF E$>="a" AND E$<="z" THEN MID$(CAP$,I,1) = CHR$(ASC(E$)-32)
2420 NEXT I : RETURN
3000 '
3001 ' Main menu
3002 '
3020 NC = 5 : TITLE$="Main Menu"
3030 PRO$(1) = "Convert to COM or EXE format (make command file)"
3035 PRO$(2) = "Convert to HEX format (make transmittable file)"
3040 PRO$(3) = "List the files on your diskette"
3045 IF EXPERT THEN PRO$(4)="Turn expert mode OFF" ELSE PRO$(4) = "Turn expert mode ON"
3047 PRO$(5) = "Stop using this program"
3050 GOSUB 8000 : IF CHOICE = 69 THEN 9900
3060 ON CHOICE GOSUB 4000, 5000, 6000, 7000, 7500
3070 RETURN
4000 '
4001 ' Convert to binary format
4002 '
4010 GOSUB 2300
4020 PRINT : PRINT "Enter name of file to convert to executable format.  If you do not specify an"
4025 PRINT "extension, .HEX will be assumed."
4030 PRINT "-> "; : LINE INPUT INFILE$
4040 IF INSTR(INFILE$,".")=0 THEN INFILE$=INFILE$+".HEX"
4050 OPEN "I", 1, INFILE$ ' open it up
4060 CAP$=LEFT$(INFILE$, INSTR(INFILE$,".")-1)+".COM":GOSUB 2400:OUTFILE$=CAP$
4070 PRINT "Enter full name of output file (press ENTER alone to use "; OUTFILE$;")"
4080 PRINT "-> "; : LINE INPUT FAME$ : IF LEN(FAME$) THEN OUTFILE$=FAME$
4085 CAP$=OUTFILE$:GOSUB 2400:OUTFILE$=CAP$
4090 LOCATE CSRLIN-1,4 : PRINT OUTFILE$
4100 OPEN "R", 2, OUTFILE$, 1 : FIELD 2, 1 AS O$
4110 NBYTES = 0 : CKSUM = 0 : PRINT : PRINT "Working";
4120 WHILE NOT EOF(1)
4125 LINE INPUT #1, IN$ : IF LEN(IN$)=0 THEN 4180
4130 IF ASC(IN$)=59 THEN GOSUB 4250: GOTO 4180 ' remark handler
4140 FOR I = 1 TO LEN(IN$) STEP 2 : BT = VAL("&H"+MID$(IN$,I,2))
4150 NBYTES = NBYTES + 1 : CKSUM = (CKSUM + BT) MOD 2048 : IF NBYTES MOD 32 = 0 THEN PRINT ".";
4160 LSET O$= CHR$(BT) : PUT 2 : NEXT I
4180 WEND
4190 CLOSE : PRINT : PRINT : PRINT OUTFILE$; " created,"; NBYTES; "bytes recorded."
4200 GOSUB 2200 : RETURN
4250 ' handle imbedded remarks
4255 IF LEFT$(IN$, 9) <> ";checksum" THEN 4270
4258 PRINT:PRINT :PRINT "Checksum mark found... ";
4260 CK = VAL(RIGHT$(IN$,LEN(IN$)-9))
4265 IF CK = CKSUM THEN PRINT "Checksum verified." ELSE PRINT "Checksum incorrect."
4270 RETURN
4290 RETURN ' go back to the wend
5000 '
5001 ' Convert to hex format
5002 '
5010 GOSUB 2300
5020 PRINT : PRINT "Enter full name of file to convert to .HEX format, including the extension."
5030 PRINT "-> "; : LINE INPUT INFILE$
5040 OPEN "I", 1, INFILE$ : CLOSE 1 ' test to see if it's there
5045 OPEN "R", 1, INFILE$, 1 : FIELD 1, 1 AS I$
5050 NBYTES = 0 : CKSUM = 0
5060 IF INSTR(INFILE$,".")=0 THEN INFILE$=INFILE$+"."
5070 CAP$=LEFT$(INFILE$,INSTR(INFILE$,".")-1)+".HEX":GOSUB 2400:OUTFILE$=CAP$
5080 PRINT "Enter full name of output HEX file (press ENTER alone to use "; OUTFILE$;")"
5090 PRINT "-> "; : LINE INPUT FAME$ : IF LEN(FAME$) THEN OUTFILE$=FAME$
5095 LOCATE CSRLIN-1, 4 : PRINT OUTFILE$
5100 OPEN "O", 2, OUTFILE$
5105 PRINT : PRINT "Working";
5110 GET 1
5120 WHILE NOT EOF(1)
5130 PRINT #2, RIGHT$("0"+HEX$(ASC(I$)), 2);
5135 CKSUM = (CKSUM + ASC(I$)) MOD 2048 ' keep checksum running
5140 NBYTES = NBYTES + 1 : IF NBYTES MOD 32 = 0 THEN PRINT #2,:PRINT ".";
5150 GET 1 : WEND  : PRINT #2,
5155 PRINT #2, ";checksum "; CKSUM
5160 CLOSE : PRINT :PRINT: PRINT OUTFILE$; " created,"; NBYTES; "bytes recorded."
5990 GOSUB 2200 : RETURN
6000 '
6001 ' files listing
6002 '
6020 NC = 3 : TITLE$="Diskette file listing"
6030 PRO$(1) = "List files on drive A" : PRO$(2) = "List files on drive B"
6035 PRO$(3) = "Return to main menu"
6040 GOSUB 8000 : IF CHOICE = 69 OR CHOICE = 3 THEN RETURN
6050 GOSUB 2300 : PRINT
6060 INPUT "What sort of files (i.e. COM, EXE, HEX)?  Press ENTER alone for all files"; EXT$
6065 IF LEN(EXT$)=0 THEN EXT$="*" ELSE IF LEN(EXT$)>3 THEN EXT$=LEFT$(EXT$,3)
6070 CAP$=EXT$ : GOSUB 2400 : EXT$=CAP$
6075 PRINT: IF EXT$="*" THEN PRINT "Files"; ELSE PRINT ".";EXT$;" files:";
6080 PRINT " on drive "; CHR$(64+CHOICE); ":" : PRINT
6190 FILES CHR$(64+CHOICE)+":*."+EXT$
6200 GOSUB 2200 : GOTO 6000
7000 '
7001 ' swap expert mode
7002 '
7010 EXPERT = 1 - EXPERT
7020 LOCATE 23, 10:PRINT "Expert mode is now "; : IF EXPERT THEN PRINT "on." ELSE PRINT "off."
7030 FOR I = 1 TO 1000: NEXT I : RETURN
7500 '
7501 ' end of program
7502 '
7510 CLOSE : DONE = -1: RETURN
8000 '
8001 ' menu processor
8010 GOSUB 2300 : LOCATE 7, FNA(TITLE$) : COLOR 1,7 : PRINT TITLE$ : COLOR 7,0
8020 LONGEST = 0 : FOR I = 1 TO NC : IF LEN(PRO$(I))>LONGEST THEN LONGEST = LEN(PRO$(I))
8030 NEXT I : CHOICE = 0 : XP = 38-LONGEST/2
8040 FOR I = 1 TO NC : LOCATE 8+I*2, XP :IF CHOICE = I THEN COLOR 8,1 ELSE COLOR 7,0
8050 PRINT CHR$(48+I);". "; PRO$(I) : NEXT I : COLOR 7,0
8085 LOCATE 21, 5: IF EXPERT THEN PRINT "EXPERT MODE: Press "; ELSE PRINT "Press ";
8090 IF NC = 2 THEN PRINT "1 or 2 "; ELSE FOR I = 1 TO NC-1 : PRINT CHR$(48+I);", "; : NEXT I : PRINT "or"; NC;
8095 IF EXPERT THEN PRINT "to make your choice." ELSE PRINT "to light up your choice, then press ENTER."
8100 COLOR 7,0: CM$="" : WHILE CM$="" : CM$=INKEY$ : WEND
8105 IF ASC(CM$)=27 THEN CHOICE = 69 : RETURN
8110 CM = ASC(CM$) - ASC("0") :IF CM >=1 AND CM <=NC THEN CHOICE = CM
8115 IF (EXPERT OR CM$=CHR$(13)) AND (CHOICE>0) THEN RETURN ELSE 8040
9900 '
9901 ' closing frame
9902 '
9910 CLS
9920 LOCATE 12,8:PRINT "End of program.  Press the key marked 'F2' to run it again."
9925 KEY 2, "RUN"+CHR$(13) : KEY ON ' make sure that boast holds
9930 LOCATE 22,1 : DEF SEG = 64 : POKE 23, KSTATE 'recover former KB state
9940 END
10000 '
10001 ' error handling stuff
10002 '
10010 IF ERL = 6190 THEN LOCATE CSRLIN-2, 1 : PRINT "No ."; EXT$; " files on this diskette.": RESUME NEXT
10020 IF ERL = 5040 OR ERL = 4050 THEN PRINT : PRINT "Unable to open input file." : CLOSE : RESUME 2200
10030 IF ERL = 5100 OR ERL = 4100 THEN PRINT : PRINT "Unable to open output file." : CLOSE : RESUME 2200
10999 CLS : LOCATE 12, 10: PRINT "Unexpected error #"; ERR; "at line"; ERL: ON ERROR GOTO : END
```

## HIDEFILE.BAS

```bas
10 REM ********************************************************************
20 REM *       HideFile 	    by		  John Vandegrift	  *
30 REM *								  *
40 REM *  This program allows the user to modify diskette files in the	  *
50 REM *  following ways.  First, the user can change a file to a normal  *
60 REM *  file, hidden file, system file or hidden/system file.  The file *
70 REM *  to be changed can be any of the above.  The second function of  *
80 REM *  this program is to allow the user to undelete files.	Although  *
90 REM *  this will undelete files, it is limited in its ability to do so.*
100 REM *  If a file is bigger than 512 bytes (1 sector), then the file    *
110 REM *  will have to be in on contiguous set of sectors, as this program*
120 REM *  doesn't know where else the sectors belonging to deleted file   *
130 REM *  were.  What this program does if a file is bigger than 512 bytes*
140 REM *  is check the sectors following the first sector of the program  *
150 REM *  to see if they are allocated.  If not, it assumes that those    *
160 REM *  sectors belong to that file and uses them.  If they are in use  *
170 REM *  then this program cannot undelete that file.  A user can also   *
180 REM *  use this to scan through the directory of a file.		   *
190 REM *								   *
200 REM *  Limitations:  If the diskette is double-sided, then this reads  *
210 REM *		 the first 64 directory entries. The diskette in   *
220 REM *		 drive A is the diskette to be read, although	   *
230 REM *		 provision is made for reading drive B if the user *
240 REM *		 wants to add the user i/o for the drive. The	   *
245 REM *		 user must have 64k memory and 1 disk drive,	   *
246 REM *		 minimum configuration. 			   *
250 REM ********************************************************************
260 CLEAR ,&H4000:KEY OFF
270 DEF SEG=0
275 GOSUB 1880
280 REM 	 Assembler Routine
290 REM
300 REM  This routine pokes a machine language subroutine into high memory.
310 REM  This subroutine reads and writes the diskette directory and FAT
320 REM  from/to the diskette to/from upper memory.
330 REM  The diskette buffer area starts at &hcc00 and is 3072 bytes.
340 REM  The subroutine is loaded at &hE000 and is 36 bytes.
350 REM
360 DATA &h55,&h06,&hb8,&h00,&h00
370 DATA &h8e,&hc0,&h8b,&hec,&h8b
380 DATA &h76,&h0a,&h8b,&h04,&h8a
390 DATA &he0,&hb0,&h06,&hbb,&h00
400 DATA &hcc,&hb9,&h02,&h00,&h8b
410 DATA &h76,&h08,&h8b,&h14,&hcd
420 DATA &h13,&h07,&h5d,&hca,&h04
430 DATA &h00
440 FOR I=1 TO 36:READ J:SUM=SUM+J:NEXT I
450 IF SUM<>3470 THEN CLS:PRINT "Sum = ";SUM;". Data Error!":STOP
460 RESTORE
470 FOR I=0 TO 35:READ J:POKE &HE000+I,J:NEXT I
480 SUBRT=&HE000
490 REM
500 REM 	Call the routine to read FAT and Directory from diskette
510 REM 	and check for single-sided format.
520 REM
530 A%=2    '2 for read or 3 for write
540 B%=0    '0 for drive A or 1 for drive B
550 CALL SUBRT (A%, B%)
560 IF PEEK(&HCC00)=&HFE THEN NOSIDES=1 ELSE NOSIDES=2
590 REM
600 REM 	Master Menu
610 REM
620 REM  The user may want to follow the options in order of occurance,
630 REM  first reading the directory, then altering it and finally
640 REM  writing it back to the diskette.
650 REM
655 GOSUB 2130
660 CLS:LOCATE 2,37:PRINT "HideFile"
662 LOCATE 23,30:IF NOSIDES=1 THEN PRINT "Single-sided diskette":GOTO 670
665 PRINT "Double-sided diskette"
670 LOCATE 10,30:PRINT "1. File Directory"
680 LOCATE 11,30:PRINT "2. Alter Directory"
690 LOCATE 12,30:PRINT "3. Update Diskette"
700 LOCATE 13,30:PRINT "4. Help"
705 LOCATE 14,30:PRINT "5. Exit"
710 LOCATE 16,30:INPUT "Choice";IANS
730 ON IANS GOSUB 790,1030,750,2210,1880
735 IF IANS=5 THEN KEY ON:END
740 GOTO 660
745 REM
750 REM 	Put Directory on diskette
751 REM
752 REM    This routine takes the diskette directory and FAT images
753 REM    in upper memory and writes them to the diskette.  Here
754 REM    drive A is assumed, just as it is when data is read from
755 REM    the diskette.
756 REM
760 A%=3:B%=0
770 CALL SUBRT (A%, B%)
780 RETURN
785 REM
790 REM 	Display Files Routine
791 REM
792 REM    This is a simple directory function that reads the directory
793 REM    information from upper memory and displays to the user.  The
794 REM    user can use this to look at all of the directory entries.
795 REM    It will show what type of file is there, whether it has been
796 REM    deleted, or if the entry has never been used.
797 REM
800 CLS
810 FOR I=0 TO 2016 STEP 32
820 IF PEEK(I+&HD000)=&HE5 AND PEEK(I+&HD001)=246 THEN 1010
830 IF PEEK(I+&HD000)=&HE5 THEN DEL$="*del*" ELSE DEL$="     "
840 LOCATE ,15
850 FOR J=0 TO 7:PRINT CHR$(PEEK(J+I+&HD000));:NEXT J
860 PRINT ".";
870 FOR J=8 TO 10:PRINT CHR$(PEEK(J+I+&HD000));:NEXT J
880 A=PEEK(I+&HD00B)
890 IF A=0 THEN PRINT " Normal File       ";
900 IF A=2 THEN PRINT " Hidden File       ";
910 IF A=4 THEN PRINT " System File       ";
920 IF A=6 THEN PRINT " Hidden/System File";
930 MONTH$ = STR$((PEEK(I+&HD019) AND 1)*8 + ((PEEK(I+&HD018) AND 224)/32))
940 IF LEN(MONTH$)>2 THEN MONTH$=RIGHT$(MONTH$,2)
950 DAY$ = STR$(PEEK(I+&HD018) AND 31):IF LEN(DAY$)>2 THEN DAY$=RIGHT$(DAY$,2)
960 YEAR$ = RIGHT$(STR$((INT(PEEK(I+&HD019)/2))+1980),4)
970 THEDATE$=MONTH$+"/"+DAY$+"/"+YEAR$
980 SIZE=PEEK(I+&HD01C)+(PEEK(I+&HD01D)*256)+(PEEK(I+&HD01E)*65536.)
990 PRINT THEDATE$;" ";DEL$;" ";SIZE
995 IF ((I/32)+1) MOD 20 = 0 THEN GOSUB 1010:CLS
1000 NEXT I
1010 LOCATE 23,28:INPUT "Press return to continue",IANS
1020 RETURN
1025 REM
1030 REM	 Alter Directory Entries Routine
1031 REM
1032 REM   Allows the user to page through the entries of the diskette
1033 REM   directory.  The user can change the file attribute from
1034 REM   Normal, Hidden, System, or Hidden/System to any of the same.
1035 REM   The user can also undelete deleted files.
1036 REM   This function does not save these changes to diskette!
1037 REM
1040 I=0
1050 CLS
1060 TITLE$=""
1070 LOCATE 2,30:PRINT "Directory Entry ";I/32+1
1080 IF PEEK(I+&HD000)=&HE5 THEN IF PEEK(I+&HD001)=246 THEN TITLE$="Unused":DEL$="":GOTO 1120 ELSE DEL$="*deleted*" ELSE DEL$=""
1090 FOR J=0 TO 7:TITLE$=TITLE$+CHR$(PEEK(J+I+&HD000)):NEXT J
1100 TITLE$=TITLE$+"."
1110 FOR J=8 TO 10:TITLE$=TITLE$+CHR$(PEEK(J+I+&HD000)):NEXT J
1120 LOCATE 10,20:PRINT TITLE$;
1130 A=PEEK(I+&HD00B)
1140 IF A=0 THEN PRINT " Normal File       ";
1150 IF A=2 THEN PRINT " Hidden File       ";
1160 IF A=4 THEN PRINT " System File       ";
1170 IF A=6 THEN PRINT " Hidden/System File";
1180 PRINT " "+DEL$
1190 LOCATE 23,10:PRINT "D - Delete toggle  F - File toggle  X - eXit  ";CHR$(27);" ";CHR$(26);" - Paging"
1200 A$=INKEY$:IF A$="" THEN 1200
1210 IF A$="X" OR A$="x" THEN RETURN
1220 IF A$="f" OR A$="F" THEN GOSUB 1280:POKE (I+&HD00B),ATTRIBUTE
1230 IF A$="d" OR A$="D" THEN GOSUB 1400:POKE (I+&HD000),LETTER1
1240 IF LEN(A$)=2 THEN A$=RIGHT$(A$,1)
1250 IF A$=CHR$(75) THEN IF I>31 THEN I=I-32
1260 IF A$=CHR$(77) THEN IF I<1985 THEN I=I+32
1270 GOTO 1050
1280 REM	Get New File Attribute
1290 LOCATE 23,10:PRINT STRING$(65,32)
1300 LOCATE 14,30:PRINT "File Attribute:"
1310 LOCATE 16,30:PRINT "1. Normal file"
1320 LOCATE 17,30:PRINT "2. Hidden file"
1330 LOCATE 18,30:PRINT "3. System file"
1340 LOCATE 19,30:PRINT "4. Hidden/System file"
1350 LOCATE 20,30:PRINT "5. Exit"
1355 LOCATE 22,30:INPUT "Choice   ";IANS
1356 IF IANS=5 THEN ATTRIBUTE=PEEK(I+&HD00B):GOTO 1380
1360 IF IANS<1 OR IANS>4 THEN LOCATE 20,35:PRINT STRING$(30,32):GOTO 1280
1370 ATTRIBUTE=(IANS-1)*2
1380 FOR K=14 TO 22:LOCATE K,30:PRINT STRING$(45,32):NEXT K
1390 RETURN
1395 REM
1400 REM	Undelete File
1401 REM
1402 REM   This routine allows the user to undelete a deleted file.
1403 REM   The size of the file is obtained from the directory and the
1404 REM   necessary number of sectors are checked following the first
1405 REM   sector of the file.	If none of the sectors following the
1406 REM   the first sector are allocated, the program assumes those
1407 REM   are the sectors belonging to the deleted program.  Otherwise,
1408 REM   it will not undelete the file!
1409 REM
1410 LOCATE 23,10:PRINT STRING$(65,32)
1420 LETTER1=PEEK(I+&HD000):IF LETTER1=&HE5 THEN 1460
1430 LOCATE 15,25:INPUT "This is not a deleted file. Press return";IANS$
1450 LOCATE 15,25:PRINT STRING$(53,32):RETURN
1460 SIZE=PEEK(I+&HD01C)+(PEEK(I+&HD01D)*256)+(PEEK(I+&HD01E)*65536.)
1470 SECTORS=INT((SIZE-1)/512)+1
1480 LOCATE 20,21:PRINT "File Size is ";SIZE;" bytes,";SECTORS;" sectors."
1490 CLUSTER = PEEK(I+&HD01A)+PEEK(I+&HD01B)*256
1500 LOCATE 21,21:PRINT "Starting Cluster is ";CLUSTER
1510 GOSUB 1600
1520 IF FLAG$="yes" THEN 1530 ELSE PRINT "There are sectors allocated after cluster ";CLUSTER;"!! Press return.";:INPUT IANS:GOTO 1580
1530 LOCATE 15,25:INPUT "Do you want to undelete this file?";IANS$
1540 IF LEFT$(IANS$,1)<>"Y" AND LEFT$(IANS$,1)<>"y" THEN 1580
1550 LOCATE 16,23:INPUT "Enter first letter for filename";IANS$
1560 LETTER1=ASC(IANS$)
1562 IF LETTER1<123 AND LETTER1>96 THEN LETTER1=LETTER1-31
1565 IF LETTER1<65 OR LETTER1>90 THEN 1530
1570 GOSUB 1680
1580 LOCATE 15,25:PRINT STRING$(53,32)
1590 LOCATE 16,25:PRINT STRING$(53,32):RETURN
1595 REM
1600 REM		Cluster's Last Stand(checks clusters)
1601 REM
1602 REM   This is the routine that checks the needed number of sectors
1603 REM   immediatly following the first sector of the file being
1604 REM   undeleted!  FLAG$ contains the indicator as to the outcome
1605 REM   of the check.
1606 REM
1608 IF NOSIDES=1 THEN RANGE=SECTORS ELSE RANGE=INT((SECTORS+1)/2)
1610 FOR INC=1 TO RANGE
1620 TEMP=INT((CLUSTER+INC-1)*1.5)
1630 IF CLUSTER MOD 2 = 1 THEN NEWCLUS=((PEEK(&HCC00+TEMP) AND 240)/16)+PEEK(&HCC00+TEMP+1)*256  ELSE NEWCLUS=PEEK(&HCC00+TEMP)+((PEEK(&HCC00+TEMP+1) AND 15)*256)
1640 IF NEWCLUS<>0 THEN FLAG$="no":GOTO 1670
1650 NEXT INC
1660 FLAG$="yes"
1670 RETURN
1675 REM
1680 REM		Cluster's Last Stand(updates clusters)
1681 REM
1682 REM   This routine reallocates the sectors following the first sector.
1683 REM   Appendix C of the DOS Manual gives the technique for accessing
1684 REM   this information.
1685 REM
1688 IF NOSIDES=1 THEN RANGE=SECTORS-1 ELSE RANGE=INT((SECTORS+1)/2)-1
1690 FOR INC=1 TO RANGE
1700 TEMP=INT((CLUSTER+INC-1)*1.5)
1710 IF (CLUSTER+INC-1) MOD 2 = 1 THEN BYTE1=(PEEK(&HCC00+TEMP) AND 15) + (((CLUSTER + INC) AND 15)*16):BYTE2=INT((CLUSTER+INC)/16):GOTO 1730
1720 BYTE1=(CLUSTER+INC) AND 255:BYTE2=(PEEK(&HCC00+TEMP+1) AND 240) + INT((CLUSTER+INC)/256)
1730 POKE (&HCC00+TEMP),BYTE1:POKE (&HCE00+TEMP),BYTE1
1740 POKE (&HCC00+TEMP+1),BYTE2:POKE (&HCE00+TEMP+1),BYTE2
1750 NEXT INC
1760 REM		poke end of file
1770 TEMP=INT((CLUSTER+RANGE)*1.5)
1780 IF (CLUSTER+RANGE) MOD 2 = 1 THEN BYTE1=(PEEK(&HCC00+TEMP) AND 15) + 240:BYTE2=255:GOTO 1800
1790 BYTE1=255:BYTE2=(PEEK(&HCC00+TEMP+1) AND 240) + 15
1800 POKE (&HCC00+TEMP),BYTE1:POKE (&HCE00+TEMP),BYTE1
1810 POKE (&HCC00+TEMP+1),BYTE2:POKE (&HCE00+TEMP+1),BYTE2
1820 RETURN
1880 REM
1890 REM		Ending Routine
1895 REM
2000 CLS
2010 A$="HideFile":B$="b":C$="y":D$="John Vandegrift":COUNT=10
2020 GOSUB 2060
2030 A$="        ":B$=" ":C$=" ":D$="               ":COUNT=9
2040 GOSUB 2060
2050 LOCATE 23,1:RETURN
2060 FOR I=1 TO COUNT
2070 LOCATE I,37:PRINT A$;
2080 LOCATE 12,4*I:PRINT B$;
2090 LOCATE 12,81-(4*I):PRINT C$;
2100 LOCATE 24-I,33:PRINT D$;
2110 NEXT I
2120 RETURN
2130 REM
2140 REM		Move Header back to top
2150 REM
2160 FOR I=14 TO 13 STEP -1:LOCATE I,33:PRINT SPACE$(15);:NEXT I
2170 A$="HideFile":FOR I=12 TO 3 STEP -1
2180 LOCATE I-1,37:PRINT A$;
2190 LOCATE I,37:PRINT SPACE$(8);
2195 NEXT I
2200 RETURN
2210 REM
2220 REM		Help Routine
2230 REM
2240 CLS:LOCATE 4,10:PRINT "(1)  File Directory lists the directory of the diskette."
2250 LOCATE 7,10:PRINT "(2)  Alter Directory allows the user to change directory attributes."
2260 LOCATE 10,10:PRINT "(3)  Save Changes is the only way to write changes (2) to the diskette."
2270 LOCATE 13,10:PRINT "(4)  EXIT ALLOWS THE USER TO EXIT THE PROGRAM."
2280 LOCATE 16,10:PRINT "(5)  Help is this screen."
2290 LOCATE 19,10:INPUT "Pre
```

## UTSCAN.BAS

```bas
1010 PROG$="UTSCAN.BAS":VERS$="82/08/03/2100"
1020 '
1030 ' Scans lines of an ASCII file for a given character string
1040 '
1050 DEFINT A-Z:CLS:PRINT"             U T S C A N . B A S":PRINT:PRINT
1060 PRINT "ENTER FILE NAME (MUST BE AN ASCII FILE) ";:INPUT "",N$
1070 OPEN N$ FOR INPUT AS #1
1080 PRINT:PRINT "ENTER STRING TO SEARCH FOR ";
1090 LINE INPUT ;"",A$:IF A$="" THEN 1080
1100 LA=LEN(A$)
1110 PRINT:PRINT:PRINT:PRINT "          L  O  O  K  I  N  G   .  .  .  ."
1120 LPRINT CHR$(27);"E";CHR$(27);"G  STATEMENT SCAN OF "N$" FOR '"A$;
1130 LPRINT "'";CHR$(27);"F";CHR$(27);"H":LPRINT
1140 IF EOF(1) THEN 1180 ' End the program
1150 LINE INPUT #1,F$:IF INSTR(F$,A$)>0 THEN 1160 ELSE 1140
1160 LPRINT F$ ' Found the string, so print it
1170 GOTO 1140 ' Loop back to try next line, if any
1180 LPRINT:LPRINT "   E N D   O F   F I L E"
1190 PRINT:PRINT:PRINT "  J O B   F I N I S H E D":END
```

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0052

     Volume in drive A has no label
     Directory of A:\

    ABSTRACT DOC      4096   7-09-83   1:20p
    BEEP     COM        89   9-01-82   1:10p
    CRC      TXT      1639  11-09-84  10:50a
    CRCK4    COM      1536  10-21-82   7:54p
    CRETURN  BAS       858   1-01-80   2:07a
    DISRTN   EXE      9728   6-06-82
    DSKPGM2  BAS      2031   1-01-80   2:23a
    FILEMOD  ASC      8633   3-29-83   6:45p
    FILTER   BAS      1430   1-01-80   2:10a
    FIXDEL   EXE      9728   6-06-82
    FIXIT    BAS       896   3-06-83   5:31p
    FREE4    COM      6024   1-01-80  12:15a
    FREE4    DOC      2892   3-29-83   6:37p
    FREE5    COM      1792   3-30-83   7:59a
    FREE5    DOC      3033   3-30-83   7:53a
    HEX      BAS      9344   1-01-80  12:02a
    HIDEFILE BAS     10240   3-29-83   9:53p
    PARTCOPY EXE     20480   1-01-80  12:03a
    PATCH256 ASC      2422   3-29-83   6:46p
    POKEPEEK DOC      4352   3-30-83   7:33a
    PR256    ASM     26752   3-29-83   3:45p
    SHIFTBS  COM        96   7-20-82   2:56p
    SHIFTIBM COM        16   7-20-82   4:34p
    TUNE     COM       384  10-16-82   1:54a
    UTSCAN   BAS      1024   8-22-82   8:39a
           25 file(s)     129515 bytes
                           26624 bytes free
