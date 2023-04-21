---
layout: page
title: "PC-SIG Diskette Library (Disk #607)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0607/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0607"
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

## CDIR.DOC

{% raw %}
```
                            RONALD E. FRANK
                             P. O. Box 989
                        Big Bear Lake, CA 92315

CDIR -> DB is yet another disk cataloging program.  Most of the disk
cataloging programs available impose size limitations, and dBASE II has
a lot of flexibility for changes.  CDIR is a program that will read the
directory of a disk (B: is the default as in "CDIR" reads B:, but "CDIR A:"
is also allowed.  It creates two files on the default disk, VOL.LIB and
DB.LIB, and keeps appending on to the end of these as long as you keep
shoving in disks.  The CDIR [D:] is terminated after each disk read to
permit you to do something else in the midst of doing all this cataloging.

   VOL.LIB is designed to print out on a 132 column printer, and lists
volume labels, free space, and then file information in three columns.

   DB.LIB is designed to be appended to the dBASE II file MAINLIB.DBF with
the "SDF" option.  Once you've gotten everything in to the DBF file, you can
use all of dBASE IIs features to manipulate the information.

   STDIO.H, C.OBJ, and MC.LIB come from the Microsoft V1.04 C compiler;
the Linker was V2.3, and the assembler was Microsoft V3.0.
```
{% endraw %}

## CDIRA.ASM

{% raw %}
```
comment *
..
---------!-------!-------!-------------!-------------------R
..
-----------------------------------------------------------!----!------------------------------------------------------------------!
.mt0
.mb2
.pl80
.fo cdira.asm page # of 1 160156 sep 84
.po0
0 *
PAGE 80,132
;----------------------------------------------------------;


PGROUP   GROUP   PROG
PROG     SEGMENT BYTE PUBLIC 'PROG'    ;macros + structures
         ASSUME  CS:PGROUP             ;go before this

GET_DIR  PROC    NEAR                  ;near from C
         PUBLIC  GET_DIR
         PUSH    BP                    ;
         MOV     BP,SP                 ;


         MOV     DX,[BP+6]             ;DS:DX to DTA dest
         PUSH    DX                    ;need addr later
         MOV     AH,1AH                ;set DTA to fcb
         INT     21H

         MOV     DX,[BP+4]             ;DS:DX to search dest
         MOV     AH,11H                ;search first dir
         INT     21H                   ;put dir into fcb
         CMP     AL,0FFH               ;@ [BP+6]
         JZ      OUT                   ;no matches

MORE:    MOV     CX,112                ;

         POP     DX                    ;previous DTA
         ADD     DX,[BP+8]             ;step DTA to next ntr
         PUSH    DX                    ;save for next time
         MOV     AH,1AH                ;and reset DTA to it
         INT     21H                   ;? efficiency ?
         MOV     DX,[BP+4]             ;next entry source
         MOV     AH,12H                ;search for next ntry
         INT     21H                   ;moves it to DTA
         CMP     AL,0FFH               ;
         JZ      OUT                   ;no matches
         add     dx,[bp+8]             ;hope it kept bp+4
         LOOP    MORE                  ;

OUT:     POP     DX                    ;clr stack
         POP     BP                    ;
         RET     6                     ;just parms; DX above

GET_DIR  ENDP                          ;close procedure



CDFREESP PROC    NEAR                  ;
         PUBLIC  CDFREESP              ;
         PUSH    BP                    ;
         MOV     BP,SP                 ;


         MOV     DL,[BP+4]             ;drive #
         XOR     AX,AX                 ;clear for safety
         MOV     AH,36H                ;get disk free space
         INT     21H                   ;DOSCALL see p D 33
         MOV     DI,[BP+6]
         MOV     [DI],BX               ;clusters avail.
         MOV     DI,[BP+8]
         MOV     [DI],DX               ;clusters on drive
         MOV     DI,[BP+10]
         MOV     [DI],CX               ;bytes per sector
         MOV     DI,[BP+12]
         MOV     [DI],AX               ;sectors/cluster


         POP     BP                    ;
         RET     10                    ;clear stack

CDFREESP ENDP                          ;close procedure
PROG     ENDS                          ;close segment
         END                           ;close assembly

```
{% endraw %}

## FILES607.TXT

{% raw %}
```
--------------------------------------------------------------------------
Disk No  607  Text Utilities                                       v1 DS2
---------------------------------------------------------------------------
HEBREW uses a downloaded character set on an Epson FX series printer to print
in Hebrew, after preparing the file with WordStar.  The source code is provided
for those who might want to change the mapping of English to Hebrew letters.
 
TEXT CHECKER checks a WordStar text file for two kinds of errors:  certain
control characters, quotes, parentheses, and brackets, that are not in pairs;
extra spaces between words and inconsistent numbers of spaces between
sentences.
 
CDIR -> DB is a cataloging program.  Most of the disk cataloging programs
available impose size limitations but this one creates two files on the default
disk, VOL.LIB and DB.LIB, and keeps appending to these as long as you keep
shoving in disks.  CDIR is terminated after each disk read to permit you to do
something else in the midst of doing all this cataloging.
 
SMX is a printer utility designed for an EPSON MX80 (SFX is for the FX185).  It
accepts a parameter (or asks for one) and then sends the translated codes to
the printer.
 
INDEXER creates an index file, with page numbers, from a formatted text file.
 
---------------
 
HEBREW   BAS  Source code for HEBREW
READ     ME   Letter about HEBREW and Text Checker
HEBREW   EXE  HEBREW program
HEBREW   DOC  Documentation for HEBREW
 
TC       DOC  Documentation for Text Checker
TC       EXE  Text Checker program
ABBREVS       Part of Text Checker
 
CDIRA    ASM  ASM source to get directory and freespace
CDCONCAT BAT  Batch file to collect CDIR source into one file
CDIR     C    CDIR main source file
CDATE    FNC  CDIR function
CDDBPRNT FNC  "
CDDEBUG  FNC  "
CDDSKPRT FNC  "
CDGETDRV FNC  "
CDIROUTP FNC  "
CDSCRPRT FNC  "
CDTIME   FNC  "
CDWDEPRT FNC  "
CDIR     H    Constants and declaration for CDIR
CDIRA    OBJ  Assembler directory and freespace routines
MC       BAT  Batch file to compile CDIR
CDIR     DOC  Documentation for CDIR
MAINLIB  DBF  Sample dBASE II file from CDIR
SMX      ASM  ASM source to set up an MX 80 printer
SFX      ASM  ASM source to set up an FX 185 printer
LNK      BAT  Batch file to link CDIR
SMX      DOC  Documentation for SMX
CDIR     EXE  Disk catalogue program
VOL      LIB  Sample output file
DB       LIB  "
SMX      COM  Printer initialization for MX 80, run file
 
INDEXER  C    C source code for INDEXER
INDEXER  EXE  INDEXER program
INDEXER  DOC  Documentation for INDEXER
 
PC Software Interest Group (PC-SIG)
1030D E. Duane Ave.
Sunnyvale, CA  94086
(408) 730-9291
(c) Copyright 1987
```
{% endraw %}

## HEBREW.BAS

{% raw %}
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
{% endraw %}

## INDEXER.DOC

{% raw %}
```
        

                                INDEXER
                                -------

                Public Domain Text file indexing program

                         Author: COMV
                      C compiler: MicroSoft V 3.00


        INDEXER creates an index file, with page numbers, from 
        a formatted text file.

        There are 3 INDEXER files:

                1) INDEXER.C    - C language source
                2) INDEXER.EXE  - Compiled source
                3) INDEXER.DOC  - Documentation

        To use INDEXER, first create a file of keywords. The 
        keywords do not have to be in upper or lower case and do 
        not have to be in alphabetical order. The only restric-
        tion is that each keyword has to be on a separate line. A 
        keyword can be preceded by spaces, tabs, line feeds, 
        carriage returns and commas because all of these 
        characters are considered white space when reading the 
        keyword file.  

        When you run INDEXER, you will have to answer some 
        prompts: 

            Name of text file?  

                - Enter the name of the text file you wish to 
                  index. This file must have already been 
                  formatted by your text processor into a form 
                  that is ready for printing.  

            Name of keyword file?  

                - Enter the name of the keyword file you typed 
                  in.  

            Page breaks at 1) fixed line count or 2) form feeds?

                - If your word processor moves to the top of the 
                  next page by padding the current page with 
                  blank lines (a la PC-Write), then enter "1". 
                  You will be then asked "How many lines per 
                  page?" Standard eleven inch paper has 66 lines 
                  per page (at 6 lines per inch), so most people 
                  will enter "66".  

                  If your word processor uses the form feed 
                  character (decimal 12, hex 0C) to move to the 
                  top of the next page, then enter "2".

            What text page is 'page 1'?

                - Enter the page number where indexing is to 
                  begin. For example, if you have 1 title page 
                  and 1 page of contents in front of what you 
                  call page 1, then you should enter "3".  


            What column should keywords start at in index output 
            file?

                - Enter the number of spaces that you want in 
                  front of every keyword entry in the index 
                  output file. This allows the index to have the 
                  same left margin as the rest of the document.


        After the keywords are read in from the keyword file they 
        are sorted and redundant keywords are eliminated. Upper 
        case is equivalent to lower case while sorting. For 
        example, "ONEWORD" = "oneWord".
                
        INDEXER then reads the text file, searching for matches 
        to the keywords. Case is not important. The keyword may 
        be entirely contained in another word. For example, the 
        keyword "struct" matches "STRUCT" and "restructure".  
        
        INDEXER always writes the index information to a file 
        called "INDEX." When INDEXER asks for the keyword file 
        name, you can specify the INDEX file created by a 
        previous run of INDEXER.

        INDEXER, as distributed, is limited to about 1000 
        keywords. If you re-compile the C source after altering 
        some "#define"s, you can increase this amount.  

        INDEXER is not very sophisticated, but I can't spend any 
        more time on it. If you improve INDEXER (e.g.  matching 
        keywords with hyphenated words that extend to the next 
        line, etc.), feel free to send me a copy. I'll send the 
        improved version, with enhancement credits, to the major 
        public domain software suppliers so everyone can benefit.  

        *********************************************************

        ADVERTISEMENT

        Let me briefly tell you about User-Supported software my 
        company sells.  
        
        IMAGEPRINT

        ImagePrint allows your IBM Graphics Printer or IBM 
        Proprinter or Epson printer or compatible printer to 
        produce print quality comparable to that of a daisy wheel 
        printer.  

        Most print quality enhancing programs and so-called 
        letter quality printers only make two print-head passes 
        per line to form characters, and the results show it. Our 
        sophisticated font design process, combined with three 
        print-head passes, gives a print quality nothing else 
        matches.  

        Text can be formatted and individual characters can be 
        bold, italic, double width, half-high, 17.1 or 12 or 10 
        cpi, proportionally spaced, superscripted or subscripted, 
        and underlined. Fonts can be dynamically switched during 
        printing and each font contains an entire IBM Graphics 
        Printer's character set, so you don't need an IBM 
        Graphics Printer to print the upper half of an IBM PC's 
        character set. Both 80 and 136 column versions of 
        ImagePrint are available.  

        B_WINDOW

        B_WINDOW is a collection of functions that give windowing 
        capability to a BASIC programmer using an IBM Personal 
        Computer or true compatible. With B_WINDOW you can write 
        BASIC programs that look much more visually exciting and 
        professional. A window can be opened over a section of 
        the screen (including another window) and when the window 
        is closed, the original contents of the screen reappears. 
        Special windowing cursor control, string and character 
        display and border drawing are included. And everything 
        happens at top speed because B_WINDOW is written entirely 
        in assembler.  
        
        Both standard interpreted BASIC and compiled BASIC are 
        supported by either BLOADing a windowing support file or 
        linking to it if you are using an IBM or MicroSoft BASIC 
        compiler.

        PRICES

        The distribution version of ImagePrint, with 1 font 
        (Cubic) and support for 80 column printers only, costs 
        $10. The registered version of ImagePrint, with a total 
        of 5 fonts and support for both 80 and 136 column 
        printers, costs $20.  

        The full B_WINDOW package costs $15.

        The above prices include postage. Connecticut residents 
        must include 7 1/2% sales tax. We accept MasterCard and 
        Visa.  

        Our address is:

                Image Computer Systems
                P. O. Box 647
                Avon, CT 06001
                Ph: (203) 678-8771

        *********************************************************
```
{% endraw %}

## NOTES607.TXT

{% raw %}
```
Program name:          HEBREW
 
Author name: Arnold M. Kuzmack
 
Address:     3912 Montrose Dr.
             Chevy Chase, MD  20815
 
Telephone Number:  (202) 382-5508
                   (301) 986-0274
 
Suggested Donation:  Small contribution
 
Program Description:  HEBREW uses a downloaded character set on an Epson FX
series printer to print in Hebrew, after preparing the file with WordStar.  The
source code is provided for those who might want to change the mapping of
English to Hebrew letters.
 
 
Program name:  TC  (Text Checker)
 
Author name: Arnold M. Kuzmack
 
Address:     3912 Montrose Dr.
             Chevy Chase, MD  20815
 
Telephone Number:  (202) 382-5508
                   (301) 986-0274
 
Suggested Donation:  Small contribution
 
Program Description:  TEXT CHECKER checks a WordStar text file for two kinds of
errors:  certain control characters, quotes, parentheses, and brackets, that
are not in pairs; extra spaces between words and inconsistent numbers of spaces
between sentences.
 
 
Program name:  CDIR
 
Author name:         RONALD E. FRANK
 
Address:              P. O. Box 989
                 Big Bear Lake, CA 92315
 
Telephone Number:
 
Suggested Donation:
 
Program Description:  CDIR -> DB is yet another disk cataloging program.  Most
of the disk cataloging programs available impose size limitations but this one
creates two files on the default disk, VOL.LIB and DB.LIB, and keeps appending
to these as long as you keep shoving in disks.  CDIR is terminated after each
disk read to permit you to do something else in the midst of doing all this
cataloging.
 
 
Program name:  SMX
 
Author name:        RONALD E. FRANK
 
Address:             P. O. Box 989
                Big Bear Lake, CA 92315
 
Telephone Number:  SMX
 
Suggested Donation:
 
Program Description:  SMX is a printer utility designed for an EPSON MX80 (SFX
is for the FX185).  It accepts a parameter (or asks for one) and then sends the
translated codes to the printer.
 
 
Program name: INDEXER
 
Author name:           Image Computer Systems
 
Address:               P. O. Box 647
                       Avon, CT 06001
 
Telephone number:      Ph: (203) 678-8771
 
Suggested donation:
 
Program description:  INDEXER creates an index file, with page numbers, from a
formatted text file.
 
PC Software Interest Group (PC-SIG)
1030D E. Duane Ave.
Sunnyvale, CA  94086
(408) 730-9291
(c) Copyright 1987
```
{% endraw %}

## SFX.ASM

{% raw %}
```
COMMENT|  SETFX.COM  Copyright (C) Ronald E. Frank 29 Sep 85
This program accepts a parameter or asks for one with a
menu, converts it with a translation table to a series of
printer codes, and sends those codes to the printer.  The
printer beeps to acknowledge receipt.

Line 6 is as follows:
Compr // Elite // 8 Lpi // Skip 8 on Perf // Left Marg 20
 0F      1B,4D    1B,30       1B,4E,08        1B,6C,20      Hex codes
 I-5      I-7     I-14          I-13            I-12        Epson Reference

END COMMENT |

PUBLIC   BEGIN,GO,GETPARM,GOTPARM,PRINTIT

CODE     SEGMENT PARA PUBLIC 'CODE'
         ASSUME CS:CODE,DS:CODE,ES:CODE
         ORG     100H

BEGIN:   JMP     GO

MENU     DB      16 DUP (' '),201,44 DUP (205),187,10,13
         DB      16 DUP (' '),186,'   0 - Reset [Epson]  1B,40                 ',186,10,13
         DB      16 DUP (' '),186,'   1 - NLQ [Epson]    1B,78,1               ',186,10,13
         DB      16 DUP (' '),186,'   2 - Set LF to 1/8" 1B,30                 ',186,10,13
         DB      16 DUP (' '),186,'   3 - Compressed     0F                    ',186,10,13
         DB      16 DUP (' '),186,'   4 - Elite [Epson]  1B,4D                 ',186,10,13
         DB      16 DUP (' '),186,'   5 - Skip on Perf   1B,4E,8               ',186,10,13
         DB      16 DUP (' '),186,'   6 - Compr Elite 8 lpi skip LM 10         ',186,10,13
         DB      16 DUP (' '),186,'           0F,1B,4D,1B,30,1B,4E,8,1B,6C,20. ',186,10,13
         DB      16 DUP (' '),186,'   7 - Underline ON   1B,2D,1               ',186,10,13
         DB      16 DUP (' '),186,'   8 - Emphasize ON   1B,45                 ',186,10,13
         DB      16 DUP (' '),186,'   9 - 11 Inch Page   1B,43,0,11            ',186,10,13
         DB      16 DUP (' '),200,44 DUP (205),189
         DB      10,10,10,10,13,'$'
ASK1     DB      16 DUP (' '),'Enter Your Selection ->','$'
INPTPARM DB      '*'
NTRY_LEN DB      12
PRNTCODE DB      1BH,40H,00H,00H,00H,00H,00H,00H,00H,00H,00H,07H
         DB      1BH,78H,01H,00H,00H,00H,00H,00H,00H,00H,00H,07H
         DB      1BH,30H,00H,00H,00H,00H,00H,00H,00H,00H,00H,07H
         DB      0FH,00H,00H,00H,00H,00H,00H,00H,00H,00H,00H,07H
         DB      1BH,4DH,00H,00H,00H,00H,00H,00H,00H,00H,00H,07H
         DB      1BH,4EH,08H,00H,00H,00H,00H,00H,00H,00H,00H,07H
         DB      0FH,1BH,4DH,1BH,30H,1BH,4EH,08H,1BH,6CH,20,07H
         DB      1BH,2DH,01H,00H,00H,00H,00H,00H,00H,00H,00H,07H
         DB      1BH,45H,00H,00H,00H,00H,00H,00H,00H,00H,00H,07H
         DB      1BH,43H,88H,00H,00H,00H,00H,00H,00H,00H,00H,07H

SETMX    PROC    FAR

GO:      PUSH    DS      ;save psp segment address
         MOV     AX,0    ;word for far return
         PUSH    AX

         MOV     SI,80H  ;80H is where the input parameter
         MOV     DL,[SI] ;count is left by opening procedure
         CMP     DL,0    ;if there's a parm, move on
         JE      GETPARM
         MOV     SI,82H
         MOV     AL,[SI] ;mov immediate won't work
         JMP     GOTPARM

GETPARM: MOV     CX,0    ;Gene Plantz's screen scroll cls
         MOV     DX,2479H
         MOV     BH,7
         MOV     AX,0600H	
         INT     10H

         MOV     DH,3    ;row
         MOV     DL,0    ;column
         MOV     BH,0    ;active page
         MOV     AH,2    ;locate cursor
         INT     10H     
         LEA     DX,MENU
         MOV     AH,9    ;print string
         INT     21H

         LEA     DX,ASK1 ;point to query and print it 
         MOV     AH,9    ;with DOS
         INT     21H

         MOV     AH,1    ;keyboard input DOS p D-17
         INT     21H     ;char returned in AL

GOTPARM: SUB     AL,'0'  ;conv ASCII to byte
         MUL     NTRY_LEN ;find offset in table
         LEA     BX,PRNTCODE

         MOV     CX,12   ;output standard 12 chrs
PRINTIT: PUSH    AX      ;save for reuse (need AL)
         XLAT
         MOV     DL,AL   ;from table to DL
         MOV     AH,5    ;printer output
         INT     21H      
         POP     AX      ;get original back, increment it,
         INC     AL      ;save this, + xlat + send to print
         LOOP    PRINTIT

         RET     ;return to DOS
SETMX    ENDP    ;close procedure
CODE     ENDS    ;close segment
END      BEGIN   ;close assembly

```
{% endraw %}

## SMX.ASM

{% raw %}
```
COMMENT|
..							
---------!-------!-------!-------------!-------------------R
..
------------------------------------------------------------!---!------------------------------------------------------------------!
.mt0
.mb2
.pl80
.fo SMX.ASM page # of 1 231114 FEB 85
.po0
0
This program accepts a parameter or asks for one with a
menu, converts it with a translation table to a series of
printer codes, and sends those codes to the printer.  The
printer beeps to acknowledge receipt.
END COMMENT |

PUBLIC   BEGIN,GO,GETPARM,GOTPARM,PRINTIT

CODE     SEGMENT PARA PUBLIC 'CODE'
         ASSUME CS:CODE,DS:CODE,ES:CODE
         ORG     100H

BEGIN:   JMP     GO

MENU     DB      16 DUP (' '),201,44 DUP (205),187,10,13
         DB      16 DUP (' '),186,'   0 - Reset          1B,40                 ',186,10,13
         DB      16 DUP (' '),186,'   1 - Double Strike  1B,47                 ',186,10,13
         DB      16 DUP (' '),186,'   2 - Set LF to 1/8" 1B,30                 ',186,10,13
         DB      16 DUP (' '),186,'   3 - Compressed     0F                    ',186,10,13
         DB      16 DUP (' '),186,'   4 - Comp 8 LPI     0F,1B,30              ',186,10,13
         DB      16 DUP (' '),186,'   5 - Squished       9B,53,80,0F,9B,33,12  ',186,10,13
         DB      16 DUP (' '),186,'   6 - Italics ON     1B,34                 ',186,10,13
         DB      16 DUP (' '),186,'   7 - Underline ON   1B,2D,1               ',186,10,13
         DB      16 DUP (' '),186,'   8 - Emphasize ON   1B,45                 ',186,10,13
         DB      16 DUP (' '),186,'   9 - Wide ON        0E                    ',186,10,13
         DB      16 DUP (' '),200,44 DUP (205),189
         DB      10,10,10,10,13,'$'
ASK1     DB      16 DUP (' '),'Enter Your Selection ->','$'
INPTPARM DB      '*'
NTRY_LEN DB      8
PRNTCODE DB      1BH,40H,00H,00H,00H,00H,00H,07H
         DB      1BH,47H,00H,00H,00H,00H,00H,07H
         DB      1BH,30H,00H,00H,00H,00H,00H,07H
         DB      0FH,00H,00H,00H,00H,00H,00H,07H
         DB      0FH,1BH,30H,00H,00H,00H,00H,07H
         DB      9BH,53H,80H,0FH,9BH,33H,12H,07H
         DB      1BH,34H,00H,00H,00H,00H,00H,07H
         DB      1BH,2DH,01H,00H,00H,00H,00H,07H
         DB      1BH,45H,00H,00H,00H,00H,00H,07H
         DB      0EH,00H,00H,00H,00H,00H,00H,07H 

SETMX    PROC    FAR

GO:      PUSH    DS      ;save psp segment address
         MOV     AX,0    ;word for far return
         PUSH    AX

         MOV     SI,80H  ;80H is where the input parameter
         MOV     DL,[SI] ;count is left by opening procedure
         CMP     DL,0    ;if there's a parm, move on
         JE      GETPARM
         MOV     SI,82H
         MOV     AL,[SI] ;mov immediate won't work
         JMP     GOTPARM

GETPARM: MOV     CX,0    ;Gene Plantz's screen scroll cls
         MOV     DX,2479H
         MOV     BH,7
         MOV     AX,0600H	
         INT     10H

         MOV     DH,3    ;row
         MOV     DL,0    ;column
         MOV     BH,0    ;active page
         MOV     AH,2    ;locate cursor
         INT     10H     
         LEA     DX,MENU
         MOV     AH,9    ;print string
         INT     21H

         LEA     DX,ASK1 ;point to query and print it 
         MOV     AH,9    ;with DOS
         INT     21H

         MOV     AH,1    ;keyboard input DOS p D-17
         INT     21H     ;char returned in AL

GOTPARM: SUB     AL,'0'  ;conv ASCII to byte
         MUL     NTRY_LEN ;find offset in table
         LEA     BX,PRNTCODE

         MOV     CX,8    ;output standard 8 chrs
PRINTIT: PUSH    AX      ;save for reuse (need AL)
         XLAT
         MOV     DL,AL   ;from table to DL
         MOV     AH,5    ;printer output
         INT     21H      
         POP     AX      ;get original back, increment it,
         INC     AL      ;save this, + xlat + send to print
         LOOP    PRINTIT

         RET     ;return to DOS
SETMX    ENDP    ;close procedure
CODE     ENDS    ;close segment
END      BEGIN   ;close assembly

```
{% endraw %}

## SMX.DOC

{% raw %}
```
                            RONALD E. FRANK
                             P. O. Box 989
                        Big Bear Lake, CA 92315


     SMX.COM is a printer utility designed for an EPSON MX80 (SFX is for
the FX185).  It accepts a parameter (or asks for one) and then sends the
translated codes to the printer.

     Invoke by typing SMX, or if you remember the appropriate code,
SMX <code>.  SMX 0 <enter>, for example, clears the printer.

     The provided source will permit the user to customize as needed.
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0607

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
