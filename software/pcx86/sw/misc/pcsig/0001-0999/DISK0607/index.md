---
layout: page
title: "PC-SIG Library Disk #607"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0607/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk 0607"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "TEXT UTILITIES"

    A special collection of text-processing utilities:
    
    HEBREW uses a downloaded character set on an Epson FX series printer to
    print in Hebrew, after preparing the file with WordStar.  The source
    code is provided for those who might want to change the mapping
    of English to Hebrew letters.
    
    TEXT CHECKER checks a WordStar text file for two kinds of errors:
    certain control characters, quotes, parentheses, and brackets,
    that are not in pairs; extra spaces between words and
    inconsistent numbers of spaces between sentences.
    
    CDIR -> DB is a cataloging program.  Most of the disk cataloging
    programs available impose size limitations but this one creates two
    files on the 64K, one disk drive and monochrome display disk, VOL.LIB
    and DB.LIB, and keeps appending to these as long as you keep shoving in
    disks.  CDIR is terminated after each disk read to permit you to do
    something else in the midst of doing all this cataloging.
    
    SMX is a printer utility designed for an EPSON MX80 (SFX is for the
    FX185).  It accepts a parameter (or asks for one) and then sends the
    translated codes to the printer.
    
    INDEXER creates an index file, with page numbers, from a formatted text
    file.
    
    System Requirements:  96K, one disk drive and a monochrome display;
    however, many are printer-related, so verify substitutions!
    
    How to Start:  Consult the files ending in .DOC for instructions; all
    can be printed out by entering "COPY filename.DOC prn" from the DOS
    prompt.  To run, type the filename at the DOS level and press <ENTER>.
    
    Suggested Registration:  TEXTCHECK: $15.00;  HEBREW: $15.00.
    
    File Descriptions:
    
    TC       BAK  Backup file
    CDCONCAT BAT  Batch file to collect CDIR source into one file
    CD?????? FNC  CDIR function files (9 files)
    INDEXER  EXE  Program to genereate indexex
    HEBREW   EXE  HEBREW characters for and EPSON printer
    HEBREW   DOC  Documentation for HEBREW.EXE
    HEBREW   BAS  Source code for HEBREW.EXE
    CDIRA    OBJ  Assembler directory and freespace routines
    CDIRA    ASM  Assembly source code to get directory and freespace
    CDIR     H    Constants and declaration for CDIR
    CDIR     DOC  Documentation for CDIR
    CDIR     C    C source code for CDIR.EXE
    CDIR     EXE  Disk cataloging program
    MAINLIB  DBF  Sample dBASE II file from CDIR
    LNK      BAT  Batch file to link CDIR
    INDEXER  DOC  Documentation for INDEXER.EXE
    INDEXER  C    C source code for INDEXER.EXE
    *        LIB  Sample output files (2 files)
    TC       EXE  Text checker program
    TC       DOC  Documentation for TC.EXE
    SMX      DOC  Documentation for SMX.COM
    SMX      COM  Printer initialization for MX 80, run file
    SMX      ASM  Assembly source code to set up an MX 80 printer
    SFX      ASM  Assembly source code to set up an FX 185 printer
    READ     ME   Letter about HEBREW and Text Checker
    MC       BAT  Batch file to compide CDIR
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## HEBREW.BAS

```bas
10 ON ERROR GOTO 2000
20 DEFINT A-Z
30 DIM DEFN.BYTE(12)
40 ESC$ = CHR$(27)
50 RAM.ON$ = ESC$ + "%" + CHR$(1) + CHR$(0)
60 ROM.ON$ = ESC$ + "%" + CHR$(0) + CHR$(0)
70 CR$ = CHR$(13)
80 CLS
90 PRINT  "FX-series pre-processor for Hebrew and Yiddish output": PRINT
100 PRINT "Copyright (C) 1985 by Arnold M. Kuzmack"
101 PRINT "                      3912 Montrose Dr."
102 PRINT "                      Chevy Chase, MD  20815"
103 PRINT
104 PRINT "                      (301) 986-0274"
105 PRINT: PRINT
110 PRINT "This program may be copied and distributed free of charge,"
120 PRINT "but MAY NOT BE SOLD except by permission of the author.": PRINT
121 PRINT "If you find it useful, a contribution of $15.00"
122 PRINT "would be appreciated.": PRINT: PRINT
130 INPUT "File to be printed"; FILE$
140 LENGTH = LEN(FILE$)
150 FOR I = 1 TO LENGTH
160 LTR.VAL = ASC(MID$(FILE$,I,1))
170 IF LTR.VAL >= 97 THEN MID$(FILE$,I) = CHR$(LTR.VAL - 32)
180 NEXT I
190 OPEN "I", #1, FILE$
200 PRINT
210 GOSUB 4000
270 INPUT "Double-strike output"; A$
280 DBL.STRK = (A$ = "Y") OR (A$ = "y")
290 INPUT "Total length of printer line (e. g., 80)"; LINE.LEN
300 INPUT "Desired right margin"; RMAR
310 PRINT: INPUT "Be sure printer is ON, then press RETURN", A$: PRINT
320 GOSUB 1000
325 PRINT "Press ESC to abort, any other key to pause.": PRINT
330 WHILE NOT END.TXT
335 GOSUB 4500
340 GOSUB 3000
350 A$ = A.W1$
360 LENGTH = LEN(A$)
370 IF LENGTH = 0 THEN LPRINT: GOTO 680
380 B$ = "": C$ = "": COUNT = 0: SPC.ON = -1
390 FOR I = 1 TO LENGTH
400 LTR$ = MID$(A$,I,1)
410 IF ASC(LTR$) > 128 THEN LTR$ = CHR$(ASC(LTR$) - 128)
420 IF LTR$ <> "\" GOTO 460
430 IF ENG = 0 THEN 

	ENG = 1:

	B$ = RAM.ON$ + B$:

	GOTO 550
440 IF ENG = 1 THEN 

	ENG = 0:

	B$ = ROM.ON$ + C$ + B$:

	C$ = ""
450 GOTO 550
460 '
470 IF LTR$ = "_" THEN

	B$ = ESC$ + "-1" + B$:

	GOTO 550 ' Underline
480 IF LTR$ = "@" THEN

	B$ = ESC$ + "!" + FONT$ + ESC$ + "-0" + B$:

	GOTO 550
490 IF LTR$ = "^" THEN

	B$ = ESC$ + "!!" + B$:

	SPC.ON = 0:

	GOTO 550 ' 6 cpi
500 IF LTR$ = "#" THEN

	B$ = ESC$ + "!$" + B$:

	SPC.ON = 0:

	GOTO 550 ' 8.3 cpi
510 IF LTR$ = "|" THEN

	B$ = ESC$ + "!8" + B$:

	SPC.ON = 0:

	GOTO 550 ' 5 cpi
520 IF ENG = 0 THEN B$ = LTR$ + B$
530 IF ENG = 1 THEN C$ = C$ + LTR$
540 IF ASC(LTR$) >= 32 

	THEN COUNT = COUNT + 1 

	ELSE COUNT = COUNT - 1
550 NEXT I
560 B$ = C$ + B$
570 '
580 '	Chop off leading spaces.
590 '
600 WHILE ASC(B$) = 32
610 B$ = RIGHT$(B$, LEN(B$) - 1)
620 COUNT = COUNT - 1
630 WEND
640 SP = LINE.LEN - RMAR - COUNT
650 IF NOT SPC.ON GOTO 670
660 IF SP >= 0 

	THEN B$ = SPACE$(SP) + B$ 

	ELSE PRINT "Warning -- line too long."
670 IF DBL.STRK 

	THEN LPRINT B$; CR$; B$ 

	ELSE LPRINT B$
680 WEND
690 PRINT "Printing complete.": PRINT
700 END
1000 '
1010 '
1020 '	Subroutine to load characters into printer RAM.
1030 '
1040 LPRINT ESC$ + "!" + FONT$
1050 L$ = CHR$(0): LPRINT ESC$ + ":" + L$ + L$ + L$;:  '  Download ROM chars
1060 L$ = ESC$ + "&" + L$
1070 READ ASCII
1080 WHILE ASCII >= 0
1090 LPRINT L$ + CHR$(ASCII) + CHR$(ASCII);
1100 FOR I = 1 TO 12
1110 READ DEFN.BYTE(I)
1120 LPRINT CHR$(DEFN.BYTE(I));
1130 NEXT
1140 READ ASCII
1150 WEND
1160 LPRINT ESC$ + "%" + CHR$(1) + CHR$(0);
1170 LPRINT ESC$ + "jH";  '  Reverse feed two lines
1180 RETURN
2000 '
2010 '
2020 '	Error-trapping subroutine for missing file.
2030 '
2040 IF ERR <> 53 OR ERL <> 190 THEN 

	ON ERROR GOTO 0
2045 CLOSE #1
2050 PRINT
2060 PRINT "Can't find "; FILE$
2070 PRINT "May be misspelled or on different drive."
2080 PRINT "Try again."
2090 PRINT
2100 RESUME 130
3000 '
3010 '
3020 '	Library subroutine, category WORD PROCESSING, number 1
3030 '
3040 '	Subroutine to return next line from #1 as A.W1$.
3050 '	Reads until SOFT or HARD CR is encountered.
3060 '	A.W1$ = "" for blank line.
3070 '	Sets END.TXT = -1 when last line is returned
3080 '
3090 '	All internal variable names end in .W1
3100 '	BUFF.W1$ is buffer to hold text read but not yet returned
3110 '	BLANK.LN.W1 = -1 if blank line encountered in last execution
3120 '
3130 '	To insure correct operation, paragraphs should be separated
3140 '	by blank lines.
3150 '
3160 SCR.W1$ = CHR$(141)
3170 A.W1$ = ""
3180 IF BLANK.LN.W1 THEN BLANK.LN.W1 = 0: GOTO 3680
3190 '
3200 '	Set SKIP.W1 true if BUFF.W1$ is not empty,
3210 '	i.e., not first time through after reading so
3220 '	want to skip line 3340
3230 '
3240 IF BUFF.W1$ = "" THEN LINE INPUT #1, BUFF.W1$ ELSE SKIP.W1 = -1
3250 '
3260 '	If blank line is read, return A.W1$ = ""
3270 '
3280 IF BUFF.W1$ = "" GOTO 3680
3290 '
3300 '	Eliminates soft LF (ASCII 138) and returns blank line
3310 '
3320 IF ASC(BUFF.W1$) = 138 AND LEN(BUFF.W1$) = 1 THEN 

	BUFF.W1$ = "": GOTO 3680
3330 '
3340 '	Chop off initial LF
3350 '
3360 IF ASC(BUFF.W1$) = 10 OR ASC(BUFF.W1$) = 138 THEN

	BUFF.W1$ = RIGHT$(BUFF.W1$, LEN(BUFF.W1$) - 1):

	FLAG.W1 = -1
3370 '
3380 '	End-of-paragraph encountered if length <= 254
3390 '
3400 IF SKIP.W1 THEN SKIP.W1 = 0: GOTO 3420
3410 IF (NOT FLAG.W1 AND LEN(BUFF.W1$) <= 254) OR 

	(FLAG.W1 AND LEN(BUFF.W1$) <= 253) 

	THEN PAR.W1 = -1
3420 FLAG.W1 = 0
3430 '
3440 '	Search for soft CR
3450 '
3460 I.W1 = INSTR(BUFF.W1$, SCR.W1$)
3470 '
3480 '	Last line of paragraph
3490 '
3500 IF I.W1 = 0 AND PAR.W1 THEN 

	A.W1$ = A.W1$ + BUFF.W1$:

	BUFF.W1$ = "":

	PAR.W1 = 0:

	GOTO 3680
3510 '
3520 '	Soft CR found BEFORE end of BUFF.W1$
3530 '
3540 IF I.W1 > 0 AND I.W1 < LEN(BUFF.W1$) THEN

	A.W1$ = A.W1$ + LEFT$(BUFF.W1$, I.W1 - 1):

	BUFF.W1$ = RIGHT$(BUFF.W1$, LEN(BUFF.W1$) - I.W1 - 1):

	GOTO 3680
3550 '
3560 '	Soft CR is last character in BUFF.W1$
3570 '
3580 IF I.W1 > 0 AND I.W1 = LEN(BUFF.W1$) THEN

	A.W1$ = A.W1$ + LEFT$(BUFF.W1$, I.W1 - 1):

	BUFF.W1$ = "":

	GOTO 3680
3590 '
3600 '	To reach this point, must have I.W1 = 0 and PAR.W1 = 0
3610 '	Need to read more to reach end of line
3620 '
3630 A.W1$ = A.W1$ + BUFF.W1$
3640 BUFF.W1$ = ""
3650 IF NOT EOF(1) THEN LINE INPUT #1, BUFF.W1$
3660 IF LEN(BUFF.W1$) = 1 THEN IF ASC(BUFF.W1$) = 138 THEN 

	BLANK.LN.W1 = -1:

	GOTO 3680
3670 IF BUFF.W1$ <> ""         

	THEN 3410

	ELSE BLANK.LN.W1 = -1
3680 IF EOF(1) AND BUFF.W1$ = "" THEN END.TXT = -1
3690 RETURN
4000 '
4010 '
4020 '	Subroutine to display menu of fonts and
4030 '	return appropriate value of Master Select 
4040 '	Code as FONT$
4050 '
4060 PRINT: PRINT "Menu of available type fonts:"
4070 PRINT
4080 PRINT "1.  Pica"; TAB(30); "9.  Double-strike pica"
4090 PRINT "2.  Elite"; TAB(30); "10.  Double-strike elite"
4100 PRINT "3.  Compressed"; TAB(30); "11.  Double-strike compressed"
4110 PRINT "4.  Expanded pica"; TAB(30); "12.  Double-strike expanded pica"
4120 PRINT "5.  Expanded elite"; TAB(30); "13.  Double-strike expanded elite"
4130 PRINT "6.  Expanded compressed"; TAB(30); "14.  Double-strike expanded compressed"
4140 PRINT
4150 PRINT "7.  Emphasized pica"; TAB(30); "15.  Double-strike emphasized pica"
4160 PRINT "8.  Emphasized expanded pica"; TAB(30); "16.  Double-strike emphasized expanded pica"
4170 PRINT
4180 FONT$ = ""
4190 INPUT "Enter your choice of font (RETURN for emphasized pica) ", FONTNUM
4200 IF FONTNUM = 1 THEN FONT$ = "@"
4210 IF FONTNUM = 2 THEN FONT$ = "A"
4220 IF FONTNUM = 3 THEN FONT$ = "D"
4230 IF FONTNUM = 4 THEN FONT$ = " "
4240 IF FONTNUM = 5 THEN FONT$ = "!"
4250 IF FONTNUM = 6 THEN FONT$ = "$"
4260 IF FONTNUM = 7 THEN FONT$ = "H"
4270 IF FONTNUM = 8 THEN FONT$ = "*"
4280 IF FONTNUM = 9 THEN FONT$ = "P"
4290 IF FONTNUM = 10 THEN FONT$ = "Q"
4300 IF FONTNUM = 11 THEN FONT$ = "T"
4310 IF FONTNUM = 12 THEN FONT$ = "0"
4320 IF FONTNUM = 13 THEN FONT$ = "1"
4330 IF FONTNUM = 14 THEN FONT$ = "4"
4340 IF FONTNUM = 15 THEN FONT$ = "X"
4350 IF FONTNUM = 16 THEN FONT$ = "8"
4360 PRINT
4370 IF FONTNUM = 0 THEN FONT$ = "H"
4380 IF FONT$ <> "" THEN RETURN
4390 PRINT "You must enter 1-16 or RETURN.  Try again."
4400 GOTO 4060
4500 '
4510 '
4520 '	Subroutine to monitor for ABORT or PAUSE commands.
4530 '
4540 AA$ = INKEY$
4550 IF LEN(AA$) = 0 THEN RETURN
4560 IF ASC(AA$) = 27 THEN 

	 PRINT: PRINT: PRINT "Aborted.": PRINT:

	 END
4570 PRINT: PRINT
4580 INPUT "Press RETURN to resume.", AA$
4590 PRINT: PRINT "Press ESC to abort, any other key to pause.": PRINT
4600 RETURN
5000 '
5010 '
5020 DATA 97,128,38,8,16,0,8,0,4,8,50,0,0 '      a = aleph
5030 DATA 65,1,76,16,34,0,18,0,10,16,100,0,0 '   A = patah-aleph
5040 DATA 111,1,76,16,34,0,19,0,10,16,100,0,0 '  o = kamatz-aleph
5050 DATA 98,128,34,0,34,0,34,0,34,28,2,0,0 '    b = bet
5060 DATA 103,128,0,0,34,0,36,0,30,0,0,0,0 '     g = gimel
5070 DATA 100,128,32,0,32,0,32,0,32,30,32,0,0 '  d = dalet
5080 DATA 104,128,38,0,32,0,32,0,32,16,14,0,0 '  h = he'
5090 DATA 117,128,0,0,0,32,30,0,0,0,0,0,0 '      u = vav
5100 DATA 122,128,0,0,32,0,46,16,32,0,0,0,0 '    z = zayin
5110 DATA 72,128,62,0,32,0,32,0,32,16,14,0,0 '   H = het
5120 DATA 116,128,60,2,0,2,0,34,0,34,28,0,0 '    t = tet
5130 DATA 105,128,0,0,0,32,24,0,0,0,0,0,0 '      i = yod
5140 DATA 107,128,34,0,34,0,34,0,20,8,0,0,0 '    k = kaph
5150 DATA 75,1,64,0,64,0,64,0,32,31,0,0,0 '      K = final kaph
5160 DATA 108,128,224,0,32,0,32,2,36,8,48,0,0 '  l = lamed
5170 DATA 109,128,38,24,0,16,32,2,32,18,12,0,0 ' m = mem
5180 DATA 77,128,46,16,34,0,34,0,34,0,30,0,0 '   M = final mem
5190 DATA 110,128,0,2,32,2,32,30,0,0,0,0,0 '     n = nun
5200 DATA 78,1,0,0,0,64,63,0,0,0,0,0,0 '         N = final nun
5210 DATA 115,128,40,20,34,0,34,0,34,20,8,0,0 '  s = samekh
5220 DATA 101,128,34,16,10,4,2,0,2,4,56,0,0 '    e = ayin
5230 DATA 112,128,50,8,34,0,42,0,34,28,0,0,0 '   p = pe'
5240 DATA 102,128,50,8,34,0,34,0,34,28,0,0,0 '   f = fe'
5250 DATA 70,1,96,16,64,0,64,0,64,63,0,0,0 '     F = final fe'
5260 DATA 99,128,34,0,18,0,10,10,14,16,34,0,0 '  c = tsadi
5270 DATA 67,1,64,32,16,8,4,10,17,96,0,0,0 '     C = final tsadi
5280 DATA 113,1,95,0,64,0,68,8,80,32,0,0,0 '     q = kuf
5290 DATA 114,128,32,0,32,0,32,0,32,30,0,0,0 '   r = resh
5300 DATA 83,128,56,4,2,4,58,0,2,4,56,0,0 '      S = shin
5310 DATA 84,128,34,28,32,0,32,0,32,16,14,0,0 '  T = tav
5320 DATA 83,128,56,4,2,4,58,0,2,4,56,0,0 '      S = shin
5330 DATA 108,128,224,0,32,0,32,2,36,8,48,0,0 '  l = lamed
5340 DATA 69,128,0,32,24,0,0,32,24,0,0,0,0'      E = 2 yuds
5350 DATA 73,1,0,64,50,0,2,64,50,0,0,0,0'        I = patah 2 yuds
5360 DATA 118,128,0,32,30,0,0,32,30,0,0,0,0'     v = 2 vavs
5370 DATA 69,128,0,32,24,0,0,32,24,0,0,0,0'      E = 2 yuds
5380 DATA -1
```

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk 0607

     Volume in drive A has no label
     Directory of A:\

    ABBREVS            384   1-01-80
    CDATE    FNC       313   9-11-84   8:10a
    CDCONCAT BAT       156  10-21-85  12:24p
    CDDBPRNT FNC       560   9-16-84  10:16p
    CDDEBUG  FNC       981   9-16-84  10:14p
    CDDSKPRT FNC       673   9-16-84  10:17p
    CDGETDRV FNC       615   9-16-84  10:14p
    CDIR     C         991   9-16-84   1:57a
    CDIR     DOC      1224   1-07-86  11:00p
    CDIR     EXE     18824   1-07-86  10:25p
    CDIR     H        2931   9-16-84  10:13p
    CDIRA    ASM      3102   9-16-84  10:12p
    CDIRA    OBJ       178   9-16-84   2:05a
    CDIROUTP FNC      2349   9-17-84   2:10a
    CDSCRPRT FNC       554   9-16-84  10:15p
    CDTIME   FNC       542   9-16-84  10:14p
    CDWDEPRT FNC       751   9-16-84   1:42a
    DB       LIB       468   1-07-86  10:25p
    FILES607 TXT      2768   1-22-86   4:37p
    GO       BAT       533   1-22-86   4:55p
    HEBREW   BAS     10624  12-03-85  11:38a
    HEBREW   DOC     16512   1-01-80
    HEBREW   EXE     28672   1-01-80
    INDEXER  C       10652   5-14-86   5:39p
    INDEXER  DOC      7203   5-14-86   5:37p
    INDEXER  EXE     11992   4-21-86  10:32a
    LNK      BAT        31   1-07-86  10:21p
    MAINLIB  DBF      1024   1-07-86  10:35p
    MC       BAT        20   1-07-86  10:20p
    NOTES607 TXT      2504   1-22-86   4:35p
    READ     ME       2176   1-01-80
    SFX      ASM      4362   9-29-85   4:51p
    SMX      ASM      4103   8-11-85   4:40p
    SMX      COM       990   1-07-86  10:32p
    SMX      DOC       529   1-07-86  11:06p
    TC       BAK     16512   1-01-80
    TC       DOC     16512  10-01-86   4:08p
    TC       EXE     37888   1-16-86  12:11p
    VOL      LIB       515   1-07-86  10:25p
           39 file(s)     211718 bytes
                           89088 bytes free
