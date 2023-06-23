---
layout: page
title: "PC-SIG Diskette Library (Disk #255)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0255/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0255"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "DOS UTILITIES NO 14"

    This entry in our DOS utility series includes a comprehensive collection
    of tools for handling files, configuring some system options (NEWBELL,
    and SCRNCOLR), cleaning up directories (OLDER and PURGEDUP), and
    finding lost files (WHEREIS).  Some very nice BASIC routines are
    included.  For instance, SCREEN is an input-verify routine and DOCUFILE
    helps you generate custom help screens.
    
    How to Start: To run a COM program simply type its name and press
    <ENTER>.  For instructions on ASM or 'C' listings, refer to your
    Assembler or 'C' language manuals.  For instructions on running BASIC
    programs, please refer to the GETTING STARTED section in this catalog.
    To read DOC files simply enter TYPE filename.ext and press <ENTER>.
    
    Suggested Registration:  DOCUFILE  $10.00
    
    File Descriptions:
    
    NEWBELL  ASM  Source for NEWBELL.COM
    NEWBELL  COM  Run once to shorten DOS (not BASIC) bell tone
    BATQUES  COM  Prompts for character returned as error level
    HERMREAD ME   Notes on BATQUES, SCRNCOLR, Compaq video, and FORMAT
    BATQUES  ASM  Source for BATQUES.COM
    BATQUES  DOC  Documents BATQUES.COM  (2K)
    BAT-CD   ASM  Source for BATCD.COM
    KBD_FIX  ASM  Source for KEY_FIX.COM  (See Softalk PC, Nov 83-Jan 84)
    BAT-CD   DOC  Documents BATCD.COM
    BAT-CD   COM  Changes working directory based on standard input
    DOS-SIZE DOC  Reference table, size of various DOS versions
    SCRNCOLR COM  Intercepts screen writes to change colors
    SCRNCOLR ASM  Source for SCRNCOLR.COM
    SCRNCOLR DOC  Documents SCRNCOLR.COM  (2K)
    KBD_FIX  COM  Expands DOS typeahead buffer to 160 characters
    KBFIX    DOC  Documentation for KBFIX.COM
    KBFIX    ASM  Source for KBFIX.COM
    KBFIX    COM  CAPS, NUM & SCROLL flags plus a 127 byte kybd buffer
    L4       ASM  Source for L4.COM
    L4       DOC  Documentation for L4.COM  (4K)
    L4       COM  Displays file w/ up/down paging, horz scroll, find
    WHEREIS  COM  Searches subdirectories for filename
    WHEREIS  ASM  Source for WHEREIS.COM
    OLDER    ASM  Source for OLDER.COM
    OLDER    COM  Returns information on relative age of two files
    SCREEN   BAS  Utility for data input and verification
    LABEL    DOC  Documentation for LABEL.EXE
    LABEL    C    Source for LABEL.EXE
    LABEL    EXE  Change/Create Volume Labels - command line input
    SCREEN   DOC  Documentation for SCREEN.BAS  (3.6K)
    TIMER    EXE  Provides continuous time of day clock on screen
    MORSE    BAS  Morse code practice program
    PURGEDUP COM  Compares DIRs & erases = fnams with <= date/time
    DOSEDIT  COM  Provides re-executable history file of DOS commands
    PURGEDUP DOC  Documentation for PURGEDUP.COM
    DOCUFILE BAS  Generates BASIC program Help screens from text file
    DOSEDIT  DOC  Documentation for DOSEDIT.COM  (3.2K)
    DOCUFDOC BAS  Sample made using DOCUFILE.BAS and DOCUFILE.DOC
    DOCUFILE DOC  Documentation for DOCUFILE.BAS  (3.6K)
    SDIR     DOC  Documentation for SDIR.COM
    SDIR     COM  Sorted Directory with numerous options - best to date
    BYE      BAS  Protects screen, provides date & time on idle system
    CHN      PAS  Provides command line execution of Turbo .CHN files
    SPEED    ASM  Source for SPEED.COM, easily modified to your taste
    SPEED    COM  Modifies disk parameter table
    PX       DOC  Documentation for PX.COM  (14K)
    PX       COM  Procedure Cross Referencer for ASM and MASM
    CRYPTO   BAS  Aids in solving cryptograms
    LIST     DOC  Documentation for LIST.COM  (2.1K)
    LIST     COM  ASCII file lister, viable alternative to TYPE/MORE
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## BAT-CD.ASM

{% raw %}
```
	page 64,132
	title bat-cd -- Batch file Directory Changer
.RADIX 10
;
;
;
;*****************************************************************
; Public domain program by H. Fischer - HFischer@eclb 12/83
; Questions/problems to HFischer@eclb (213/902-5139).
;
; This program allows a batch file to change directories
; (just like the CD command), but to read the new directory
; from the "standard input file" instead of the command line.
; The command:
;
;	bat-cd		reads new directory from keyboard
;	bat-cd < file	reads new directory from "file"
;	bat-cd <file >nul  no display of new dir name when changing
;
; You can use the directory changer to change back to the
; directory a batch file started out with, such as when
; doing a spelling correction or fancy font printing.
;   .
;   .	(your batch file to do fancy font from any directory)
;   .
;   echo off
;   cd > \bin\bat\starting.dir		saves initial directory
;   copy %1 \fancyfnt\temp/v		make file local to pfont dir
;   cd \fancyfnt			go to pfont dir
;   pfont +fi temp +fi romn12 (etc.)	do printing
;   del temp				get rid of local file copy
;   bat-cd <\bin\bat\starting.dir >nul	return to user's directory
;   echo on
;
; If you were going to, for example, a speller directory, which
; made changes to the file, then you would copy the local file back
; before changing directories back:
;
;   echo off
;   cd >\bin\bat\starting.dir		save initial directory
;   copy %1 \speller\temp.txt/v		make your file local
;   cd \speller
;   spellit temp.txt
;   bat-cd <\bin\bat\starting.dir >nul	change back to user's dir
;   copy \speller\temp.txt %1/v		copy spelling corrected file
;   del \speller\temp.txt		  back & delete other copy
;
; Note that the new input is read as a single line, without
; any prompt, followed by a carriage return.  If the input
; is not a valid directory, then the message "path not found"
; is placed on the standard output file (console, but redirectable
; if one wishes).
;
; To build this program:
;	1) asm bat-cd
;	2) link bat-cd
;	3) exe2bin bat-cd.exe \bin\bat-cd.com (name your path dir!)
;	4) del bat-cd.exe
;
;********************************************************************
code	segment para
	assume	cs:code
	org	100h
CD	proc	far
START:
	mov	ax,cs		; make this mess addressable via ds
	mov	ds,ax
	assume	ds:code
	mov	dx,offset buffer
	mov	ax,0c0ah
	int	21h		; read the new directory name
	mov	bh,0		; stuff a zero at the end
	mov	bl,buflen	;   of the name just read
	mov	entry[bx],bh
	mov	dx,offset entry
	mov	ah,3bh
	int	21h		; change the directory
	cmp	ax,3		; error code?
	jne	done
	mov	dx,offset error ; display error if bad path
	mov	ah,9
	int	21h
done:	int	20h
buffer	db	64		; longest path is 63 chars & c/r
buflen	db	0		; dos-read length
entry	db	64 dup(0)	; the new directory name
error	db	'path not found',10,13,'$'
saveit	db	0
CD endp
code ends
end start
```
{% endraw %}

## BAT-CD.DOC

{% raw %}
```

This program allows a batch file to change directories (just
like the CD command), but to read the new directory from the
"standard input file" instead of the command line.

The command:

        bat-cd          reads new directory from keyboard
        bat-cd < file   reads new directory from "file"
        bat-cd <file >nul  no display of new dir name when changing

You can use the directory changer to change back to the directory a
batch file started out with, such as when doing a spelling correction
or fancy font printing.
   .
   .   (your batch file to do fancy font from any directory)
   .
   echo off
   cd > \bin\bat\starting.dir           saves initial directory
   copy %1 \fancyfnt\temp/v             make file local to pfont dir
   cd \fancyfnt                         go to pfont dir
   pfont +fi temp +fo romn12 (etc.)     do printing
   del temp                             get rid of local file copy
   bat-cd <\bin\bat\starting.dir >nul   return to user's directory
   echo on

If you were going to, for example, a speller directory, which made
changes to the file, then you would copy the local file back before
changing directories back:

   echo off
   cd >\bin\bat\starting.dir            save initial directory
   copy %1 \speller\temp.txt/v          make your file local
   cd \speller
   spellit temp.txt
   bat-cd <\bin\bat\starting.dir >nul   change back to user's dir
   copy \speller\temp.txt %1/v          copy spelling corrected file
   del \speller\temp.txt                   back & delete other copy
   echo on

Note that the new input is read as a single line, without any prompt,
followed by a carriage return.  If the input is not a valid directory,
then the message "path not found" is placed on the standard output
file (console, but redirectable if one wishes).

```
{% endraw %}

## BATQUES.ASM

{% raw %}
```
	page 64,132
	title bat-ques -- Batch file Question Asker, sets errorlevel
.RADIX 10
;
;
;
;*****************************************************************
; INFO-IBMPC libarary contribution by H. Fischer - HFischer@eclb 12/83
; If you like it, do not send me $10 (but I will accept amounts
; with many more zeros if your generosity is excessive).
; Questions/problems to HFischer@eclb (213/902-5139).
;
; This program allows a batch file to ask the user a question
; and return a one-character response which is testable
; by the IF subcommand of bat files, via the errorlevel.
;
; You use the question asker per following example:
;
;   .
;   .  (your batch file to ask if guy wants to edit with
;   .       mince/emacs or ibm's editor)
;   .
;   echo off
;   bat-ques WHICH EDITOR, m OR e FOR MINCE (EMACS), i FOR IBM's? $
;   if errorlevel 110 goto badresp
;   if errorlevel 109 goto minceed
;   if errorlevel 106 goto badresp
;   if errorlevel 105 goto ibmed
;   if errorlevel 102 goto badresp
;   if errorlevel 101 goto minceed
;   :badresp
;   echo Your response was invalid. Sorry
;   goto endit
;   :minceed
;   if not exist mincomm.sum copy \bin\mince.swp mince.swp
;   mince %1
;   if not exist mincomm.sum del mince.swp
;   goto endit
;   :ibmed
;   profed %1
;   :endit
;   echo on
;
; Note that the question prompt follows the bat-ques command and
; must end with a dollar sign.  The ascii value of the response is
; returned as the error level.  Since error level tests are always
; greater than or equal tests, you must check for highest value first
; and lowest value last.  Example above shows what you doto check for
; missing values.  Note example assumes lower case answer only for
; simplicity sake.
;
; Ascii values (e.g., A is 65, B is 66, a is 97) are found in back
; of your BASIC manual.  Only one character responses are accepted,
; and they are not followed by a carriage return.
;
; Extended ascii codes (function and alt keys) should work as per
; page G-6 of your BASIC manual;  the first call to bat-ques will
; return a zero and the next call (presumably "bat-ques $" without
; another prompt) will return the number shown on page G-7.
;
; To build this program:
;	1) asm bat-ques
;	2) link bat-ques
;	3) exe2bin bat-ques.exe \bin\bat-ques.com (name your path dir!)
;	4) del bat-ques.exe
;
; have fun
;********************************************************************
code	segment	para
	assume	cs:code
	org 	82h
PROMPT	label	byte		; here DOS places the prompt string
	org 	100h
KEY	proc	far
START:
	mov	ax,cs		; make this mess addressable via ds
	mov	ds,ax
	assume	ds:code
	mov	dx,offset PROMPT
	mov	ah,9
	int	21h		; display the prompt
	mov	ah,1
	int	21h             ; get the input into AL
	mov	saveit,al
	mov	dx,offset newlin  ; move display to new line
	mov	ah,9
	int	21h
	mov	al,saveit
	mov	ah,4ch		; return the errorlevel already in AL
	int	21h
newlin: db	10,13,'$'	; give user a new line before quitting
saveit	db	0
KEY endp
code ends
end start
```
{% endraw %}

## BATQUES.DOC

{% raw %}
```
Bat-Ques
--------

To ask a question:

   Bat-Ques tttttt$     where ttttttt is the text of the question

User then keys a single character response.

To check answer, use IF [not] errorlevel cc, where cc is the 
character code value of the response. Only single character responses 
are supported.

This program allows one to build decently friendly batch files. One 
no longer has only the ctrl-break response to a pause (which isn't 
very friendly).

Examples:

This program allows a batch file to ask the user a question and 
return a one-character response which is testable by the IF 
subcommand of bat files, via the errorlevel.

You use the question asker per following example:

   .
   .  (your batch file to ask if user wants to edit with
   .       mince/emacs or ibm's editor)
   .
   echo off
   bat-ques WHICH EDITOR, m OR e FOR MINCE (EMACS), i FOR IBM's? $
   if errorlevel 110 goto badresp
   if errorlevel 109 goto minceed
   if errorlevel 106 goto badresp
   if errorlevel 105 goto ibmed
   if errorlevel 102 goto badresp
   if errorlevel 101 goto minceed
   :badresp
   echo Your response was invalid. Sorry.
   goto endit
   :minceed
   if not exist mincomm.sum copy \bin\mince.swp mince.swp
   mince %1
   if not exist mincomm.sum del mince.swp
   goto endit
   :ibmed
   profed %1
   :endit
   echo on

Note that the question prompt follows the bat-ques command and must 
end with a dollar sign. The ascii value of the response is returned 
as the error level. Since error level tests are always greater than 
or equal tests, you must check for highest value first and lowest 
value last. Example above shows what you do to check for missing 
values. Note that the example assumes lower case answers only for 
simplicity sake.

Ascii values (e.g., A is 65, B is 66, a is 97) are found in back of 
your BASIC manual. Only one character responses are accepted, and 
they are not followed by a carriage return.

Extended ascii codes (function and alt keys) should work as per page
G-6 of your BASIC manual; the first call to bat-ques will return a 
zero and the next call (presumably "bat-ques $" without another 
prompt) will return the number shown on page G-7.



```
{% endraw %}

## BYE.BAS

{% raw %}
```bas
5 'BYE - DOESN'T BURN SCREEN IN ONE PLACE AND KEEP DATE ACCURATE
10 WHILE T$=TIME$:IF INKEY$<>"" THEN CLS:SYSTEM
15 WEND
20 KEY OFF:SCREEN 0,0,0:COLOR 7,0,0:CLS
30 LOCATE 1+VAL(MID$(TIME$,7,2)) MOD 25,1+VAL(MID$(TIME$,4,2)):PRINT TIME$;"  ";DATE$;
40 T$=TIME$
50 GOTO 10
```
{% endraw %}

## CRYPTO.BAS

{% raw %}
```bas
100 'crypto - aids in solving crytograms
200 ' (C) 1984  by Hal Sampson (408) 866-9472
250 TLF$=CHR$(&HA)+CHR$(&HA)+CHR$(&HA)
300 KEY OFF:CLS:DEFINT A-Z
400 DIM C(30)
500 PRINT "Type Cryptogram on the next three lines (using all editing keys)","Press ENTER when you are sure it's correct:"
600 LINE INPUT C$
700 C$=""
800 FOR R=3 TO 6
900 FOR C=1 TO 80
910 C$=C$+CHR$(SCREEN(R,C)):IF RIGHT$(C$,2)="  " THEN C$=LEFT$(C$,LEN(C$)-1)
920 NEXT C:NEXT R
1000 FOR K=79 TO LEN(C$) STEP 79
1100 M=K
1200 FOR M=K TO K-78 STEP -1
1300 IF MID$(C$,M,1)=" " THEN C$=LEFT$(C$,M-1)+TLF$+MID$(C$,M+1):GOTO 1500
1400 NEXT M
1500 NEXT K
1600 O$=C$
1700 FOR I=1 TO LEN(C$):M=ASC(MID$(C$,I,1))
1800 IF M >= 65 THEN P=M OR 96:MID$(C$,I,1)=CHR$(P):C(P-96)=C(P-96)+1:MID$(O$,I,1)=" "
1900 NEXT I
2000 CLS
2100 ' calculate letter frequency distribution
2200 ' sort
2300 DIM S(30)
2400 FOR I=1 TO 26:S(I)=I:NEXT I
2500 FOR I=1 TO 25
2600 FOR J=I+1 TO 26
2700 IF C(S(I))<C(S(J)) THEN SWAP S(J),S(I)
2800 NEXT J:NEXT I
2900 FOR I=1 TO 26
3000 IF C(S(I))>0 THEN PRINT"  ";CHR$(S(I)+96);
3100 NEXT I
3200 PRINT
3300 FOR I=1 TO 26
3400 IF C(S(I)) > 0 THEN PRINT USING "###";C(S(I));
3500 NEXT I
3600 LOCATE 4,1
3700 PRINT"  e  t  a  o  i  n  s  h  r  d  l  u  c  m  f  w  y  p"
3800 LOCATE 6,1:PRINT C$
3900 LOCATE 7,1:PRINT O$
4000 LOCATE 18,1:PRINT"Substitute for ";
4100 I=ASC(INKEY$+" "):IF I=32 THEN 4100
4200 S$=CHR$(I)
4300 PRINT S$;
4400 PRINT" with ";
4500 I=ASC(INKEY$+"@"):IF I=64 THEN 4500
4600 W$=CHR$(I)
4700 IF W$>= "a" THEN W$=CHR$(ASC(W$) AND &H5F)
4800 PRINTW$;
4900 S$=CHR$(ASC(S$) OR 96)
5000 L=1
5100 M=INSTR(L,O$,W$):IF M= 0 THEN 5400
5200   MID$(O$,M,1)=" ":L=M+1
5300 GOTO 5100
5400 '
5500 L=1
5600 M=INSTR(L,C$,S$):IF M= 0 THEN 5900
5700   MID$(O$,M,1)=W$:L=M+1
5800 GOTO 5600
5900 '
6000 LOCATE 3,1
6100 S=ASC(S$)-96
6200 FOR I= 1 TO 26
6400 IF SCREEN(3,I*3)=ASC(W$) THEN LOCATE 3,I*3:PRINT" ";
6600 IF S(I)=S THEN LOCATE 3, I*3:PRINT W$;
6650 IF SCREEN(4,I*3)=ASC(W$)+32 THEN LOCATE 4,I*3:PRINT W$;
6700 NEXT I
6800 GOTO 3900
```
{% endraw %}

## DOCUFDOC.BAS

{% raw %}
```bas
1000 PRINT "DocuFile - Help Screen Generator         	            General Information"
1002 PRINT "═══════════════════════════════════════════════════════════════════════════════"
1004 PRINT ""
1006 PRINT "DocuFile will take any standard text file and create a basic program to"
1008 PRINT "display the text file. This allows you to create help screens from your"
1010 PRINT "favorite text editor and then add all the PRINT statements automatically."
1012 PRINT "This is beneficial for two reasons. 1 - if you need to insert portions of text"
1014 PRINT "you do so with your text editor and then regenerate the help screens with  "
1016 PRINT "DocuFile. 2 - all the prompts for next page and previous page are added"
1018 PRINT "wherever you indicate a page break."
1020 PRINT ""
1022 PRINT "This program was developed by Global Technologies Corporation and has been "
1024 PRINT "placed in public domain for the benefit of all. If you feel this program is"
1026 PRINT "beneficial to your needs please send a check for $10.00 to Global Technologies"
1028 PRINT "P.O. Box 441000 Aurora Colorado 80044."
1030 PRINT ""
1032 PRINT "Please copy this program and give it to as many people as you want."
1034 PRINT
1036 PRINT "N)ext page, P)revious page, or C)ancel ";
1038 A$=INKEY$:IF A$="" THEN  1038
1040 IF A$="C" OR A$="c" THEN CLS:SYSTEM
1042 IF A$="P" OR A$="p" THEN CLS:GOTO  1000
1044 CLS
1046 PRINT "DocuFile - Help Screen Generator         	               Source Text File"
1048 PRINT "═══════════════════════════════════════════════════════════════════════════════"
1050 PRINT ""
1052 PRINT "The source text file is the word processing file that you are going to"
1054 PRINT "convert to Basic language file code for purposes of generating easy"
1056 PRINT "to use help screens that may be called from Basic applications.             "
1058 PRINT ""
1060 PRINT "Enter the file name with a disk drive letter if it does not reside on"
1062 PRINT "the drive you are currently defaulted to. For Example [B:TEXTFILE.EXT]."
1064 PRINT ""
1066 PRINT "The source text file must be a standard ASCII file and must not contain"
1068 PRINT "special control characters single or double quotation marks a semicolons"
1070 PRINT "or commas! If you must have commas or special punctuation in the help"
1072 PRINT "screen add it after DocuFile has created the help screen program."
1074 PRINT
1076 PRINT "N)ext page, P)revious page, or C)ancel ";
1078 A$=INKEY$:IF A$="" THEN  1078
1080 IF A$="C" OR A$="c" THEN CLS:SYSTEM
1082 IF A$="P" OR A$="p" THEN CLS:GOTO  1000
1084 CLS
1086 PRINT "Docufile - Help Screen Generator         		    Help Screen Program"
1088 PRINT "═══════════════════════════════════════════════════════════════════════════════"
1090 PRINT ""
1092 PRINT "The destination help screen is the Basic program file that will contain the "
1094 PRINT "text from your source file converted into Basic source code. This file "
1096 PRINT "should be named as the help program you will be running from your Basic"
1098 PRINT "application program."
1100 PRINT ""
1102 PRINT "Enter the file name with a disk drive letter if it will not reside on"
1104 PRINT "the drive you are currently defaulted to. For example [B:DESTFILE.BAS]."
1106 PRINT ""
1108 PRINT "The output code file will be generated with Basic PRINT statements and"
1110 PRINT "may be executed from any Basic application as a subroutine. The program        "
1112 PRINT "generated will contain RETURN statements on every page and at the end of"
1114 PRINT "the entire subroutine to facilitate use with other programs and appli-"
1116 PRINT "cations without modifications. If you need to run the help screen as a free"
1118 PRINT "standing program simply replace all RETURN statements with SYSTEM statements."
1120 PRINT
1122 PRINT "N)ext page, P)revious page, or C)ancel ";
1124 A$=INKEY$:IF A$="" THEN  1124
1126 IF A$="C" OR A$="c" THEN CLS:SYSTEM
1128 IF A$="P" OR A$="p" THEN CLS:GOTO  1046
1130 CLS
1132 PRINT "DocuFile - Help Screen Generator                                       AutoPage"
1134 PRINT "═══════════════════════════════════════════════════════════════════════════════"
1136 PRINT ""
1138 PRINT "The AutoPage function automatically places pause/continue prompts wherever"
1140 PRINT "an [*] is found in the document text file. The asterix [*] must be in the "
1142 PRINT "first column of any line in the text file. When used a prompt will appear"
1144 PRINT "when the listing reaches that point and three options will be offered. "
1146 PRINT ""
1148 PRINT "(N)ext page (P)revious Page or C)ancel"
1150 PRINT ""
1152 PRINT "If you choose not to have AutoPage enter these features for you may"
1154 PRINT "place such prompts as you desire using whatever text editor is available."
1156 PRINT "This may be necessary if you want to chain to other programs from a help"
1158 PRINT "screen."
1160 PRINT ""
1162 PRINT "AutoPage will RETURN program control to where it was called from with the"
1164 PRINT "RETURN statement."
1166 PRINT
1168 PRINT "N)ext page, P)revious page, or C)ancel ";
1170 A$=INKEY$:IF A$="" THEN  1170
1172 IF A$="C" OR A$="c" THEN CLS:SYSTEM
1174 IF A$="P" OR A$="p" THEN CLS:GOTO  1086
1176 CLS
1178 SYSTEM
```
{% endraw %}

## DOCUFILE.BAS

{% raw %}
```bas
10 ' docufile
20 ' (c) 1984 by Global Technologies Corporation
30 ' author: W. French
100 CLS
110 PRINT "DocuFile - (c) 1984 by Global Technologies"
120 PRINT "------------------------------------------"
130 PRINT
140 INPUT "Enter source text file name............ ",INFILE$
150 PRINT
160 INPUT "Enter help screen program file name.... ",OUTFILE$
170 PRINT
180 INPUT "Enter starting line number............. ",L
190 PRINT
192 CLS
194 PRINT "DocuFile - (c) 1984 by Global Technologies"
196 PRINT "------------------------------------------"
198 PRINT:PRINT "Creating help screen, please stand by..."
200 ' file i/o
210 GOSUB 800:' open source file for reading...
220 GOSUB 900:' open destination file for writting...
300 ' build help screen from source file...
301 TOP=L:PTOP=L
310 IF EOF(1) THEN 350
320 INPUT #1,TEXT$
322 IF LEFT$(TEXT$,1)="*" THEN GOSUB 400:GOTO 340
325 TEXT$=STR$(L)+" print "+CHR$(34)+TEXT$+CHR$(34)
330 PRINT #2,TEXT$
335 L=L+2
340 GOTO 310
350 TEXT$=STR$(L)+" return"
360 L=L+2
370 PRINT #2,TEXT$
380 CLS
390 SYSTEM
400 ' page break subr...
420 TEXT$=STR$(L)+" print "
422 L=L+2
430 PRINT #2,TEXT$
440 TEXT$=STR$(L)+" print "+CHR$(34)+"N)ext page, P)revious page, or C)ancel "+CHR$(34)+";"
442 L=L+2
450 PRINT #2,TEXT$
460 TEXT$=STR$(L)+" a$=inkey$:if a$="+CHR$(34)+CHR$(34)+" then "+STR$(L)
462 L=L+2
470 PRINT #2,TEXT$
480 TEXT$=STR$(L)+" if a$="+CHR$(34)+"C"+CHR$(34)+" or a$="+CHR$(34)+"c"+CHR$(34)+" then cls:return"
490 L=L+2
500 PRINT #2,TEXT$
510 TEXT$=STR$(L)+" if a$="+CHR$(34)+"P"+CHR$(34)+" or a$="+CHR$(34)+"p"+CHR$(34)+" then cls:goto "+STR$(PTOP)
512 L=L+2
520 PRINT #2,TEXT$
530 TEXT$=STR$(L)+" cls"
540 L=L+2
550 PRINT #2,TEXT$
555 PTOP=TOP
560 TOP=L
570 RETURN
800 ' open source file
810 OPEN INFILE$ FOR INPUT AS 1
820 RETURN
900 ' open destination file
910 OPEN OUTFILE$ FOR OUTPUT AS #2
920 RETURN
```
{% endraw %}

## DOS-SIZE.DOC

{% raw %}
```
------------------------------------------------------
             TABLE OF DOS PROGRAM SIZES
------------------------------------------------------
NAME         DOS 2.10   DOS 2.00   DOS 1.10   DOS 1.00
DATE         10-20-83    3-08-83    5-07-82    8-04-81
------------------------------------------------------
ANSI     SYS     1664       1664        n/a        n/a
ASSIGN   COM      896        896        n/a        n/a
BACKUP   COM     3687       3687        n/a        n/a
BASIC    COM    16256      16256      11392      10880
BASICA   COM    26112      25984      16768      16256
CHKDSK   COM     6400       6400       1720       1395
COMM     BAS     4352       4352       4352       4352
COMMAND  COM    17792      17664       4959       3231
COMP     COM     2534       2523       1649       1620
DEBUG    COM    11904      11904       5999       6049
DISKCOMP COM     2188       2074       1640       1124
DISKCOPY COM     2576       2444       2008       1216
EDLIN    COM     4608       4608       2392       2392
EXE2BIN  EXE     1664       1664       1280
FDISK    COM     6369       6177        n/a        n/a
FIND     EXE     5888       5888        n/a        n/a
FORMAT   COM     6912       6016       3816       2560
GRAPHICS COM      789        789        n/a        n/a
IBMBIO   COM     4736       4608       1920       1920
IBMDOS   COM    17024      17152       6400       6400
LINK     EXE    39936      39936      41856      43264
MODE     COM     3139       3139       2509        860
MORE     COM      384        384        n/a        n/a
PRINT    COM     4608       4608        n/a        n/a
RECOVER  COM     2304       2304        n/a        n/a
RESTORE  COM     4003       4003        n/a        n/a
SORT     EXE     1408       1280        n/a        n/a
SYS      COM     1680       1408        605        896
TREE     COM     1513       1513        n/a        n/a
------------------------------------------------------

```
{% endraw %}

## DOSEDIT.DOC

{% raw %}
```
                       - DOSEDIT.DOC - 4/12/84 -

DOSEDIT is a simple editor for DOS commands.  It can be used with DOS
1.1 and DOS 2.x.  DOSEDIT uses a special set of the keys on the IBM PC
keyboard to allow you to edit the DOS command you are entering or one
of the previous commands that you have entered.  It keeps a command
stack of the last 256 characters of commands that you have entered and
you can scroll back and forth through this stack.  It also allows you
to edit the current command being displayed.  NOTE:  1 or 2 character
commands are not saved.

UP arrow         Scrolls backward through the command stack.
DOWN arrow       Scrolls forward through the command stack.
ESC              Clears the command line.
LEFT arrow       Moves the cursor left one position.
RIGHT arrow      Moves the cursor right one position.
HOME             Moves the cursor to the beginning of the command line.
END              Moves the cursor to the end of the command line.
INS              Toggles the insert function.
DEL              Deletes the character under the cursor.
CTRL-left arrow  Moves the cursor left a word at a time.
CTRL-right arrow Moves the cursor right a word at a time.
CTRL-HOME        Erases from the beginning of the line to the cursor.
CTRL-END         Erases from the cursor to the end of the line.
CTRL-PGUP        Erases the command stack.
CTRL-PGDN        Erases the displayed entry from the command stack.
BACKSPACE        Remains unchanged.
CTRL-Z           Puts in an End-of-File (1AH - replaces the F6 key).

The function keys F1-F6 no longer have assigned functions.

Tutorial:

After power on, or <Alt><Ctrl><Del>, from the DOS prompt, enter
DOSEDIT (One time).  No message will be returned, only the DOS prompt.
To experiment with DOSEDIT, from the DOS prompt enter:

        A> REM ONE
        A> REM TWO
        A> REM THREE

Now use the up arrow key to see the last command (ECHO THREE).  Again
use the up arrow key to see the preceding command (ECHO TWO).  Now
press enter to execute that command.  Then press the down arrow key to
see the following command (ECHO THREE).  Press either the up or down
arrow key several times to see how the commands wrap around.  Use the
Esc key to clear the command line.  Enter new commands and use the
control keys defined above to become familiar with all the functions.

This program was found on the San Jose IBM Employee PC Club Bulletin
Board. This documentation was written by Brad Kidder, San Jose.
As a programmer, I have found this program to be one of the most
valuable programs that I have in my library.

SVCS Libarian comment:  DOSEDIT remains active for the responses
  to some programs, DEBUG and LINK for two.  If you use File Command
  load DOSEDIT first.  You won't have the square cursor but otherwise
  the two seem to be compatable.  Commands entered in File Command don't
  get entered into DOSEDIT's stack, sort of a separate but equal
  relationship.  The DOSEDIT+FC combination is greater than the sum of
  the parts, like losing your virginity on your first parachute jump.
**WARNING** The combination of DOSEDIT and KEY_FIX (SVCS #58) loaded
  in either order caused Norton's DiskLook F9 function to crash. hs:


```
{% endraw %}

## FILES255.TXT

{% raw %}
```
Disk No  255
Program Title: UTILITIES #5
PC-SIG version 1.1
 
A collection of useful utilities.
 
Usage: Utilities
 
System Requirements: 64K of memory.
 
How to Start: Type <filename> (press enter). Filename= the name of the file
you wish to access. Example, type: LIST (press enter)
 
Suggested Registration: From $5.00 to $15.00 depending on the program.
 
File Descriptions:
 
NEWBELL  COM  RUN ONCE TO SHORTEN DOS (NOT BASIC) BELL TONE
NEWBELL  ASM  SOURCE FOR NEWBELL.COM
HERMREAD ME   NOTES ON BATQUES, SCRNCOLR, COMPAQ VIDEO, AND FORMAT
BATQUES  COM  PROMPTS FOR CHARACTER RETURNED AS ERROR LEVEL
BATQUES  DOC  DOCUMENTS BATQUES.COM  (2K)
BATQUES  ASM  SOURCE FOR BATQUES.COM
SCRNCOLR COM  INTERCEPTS SCREEN WRITES TO CHANGE COLORS
SCRNCOLR DOC  DOCUMENTS SCRNCOLR.COM  (2K)
SCRNCOLR ASM  SOURCE FOR SCRNCOLR.COM
DOS-SIZE DOC  REFERENCE TABLE, SIZE OF VARIOUS DOS VERSIONS
WHEREIS  COM  SEARCHES SUBDIRECTORIES FOR FILENAME
WHEREIS  ASM  SOURCE FOR WHEREIS.COM
OLDER    COM  RETURNS INFORMATION ON RELATIVE AGE OF TWO FILES
OLDER    ASM  SOURCE FOR OLDER.COM
LABEL    EXE  CHANGE/CREATE VOLUME LABELS - COMMAND LINE INPUT
LABEL    C    SOURCE FOR LABEL.EXE
LABEL    DOC  DOCUMENTATION FOR LABEL.EXE
SCREEN   BAS  UTILITY FOR DATA INPUT AND VERIFICATION
SCREEN   DOC  DOCUMENTATION FOR SCREEN.BAS  (3.6K)
TIMER    EXE  PROVIDES CONTINUOUS TIME OF DAY CLOCK ON SCREEN
MORSE    BAS  MORSE CODE PRACTICE PROGRAM
PURGEDUP COM  COMPARES DIRS & ERASES = FNAMS WITH <= DATE/TIME
PURGEDUP DOC  DOCUMENTATION FOR PURGEDUP.COM
DOSEDIT  COM  PROVIDES RE-EXECUTABLE HISTORY FILE OF DOS COMMANDS
DOSEDIT  DOC  DOCUMENTATION FOR DOSEDIT.COM  (3.2K)
DOCUFILE BAS  GENERATES BASIC PROGRAM HELP SCREENS FROM TEXT FILE
DOCUFILE DOC  DOCUMENTATION FOR DOCUFILE.BAS  (3.6K)
DOCUFDOC BAS  SAMPLE MADE USING DOCUFILE.BAS AND DOCUFILE.DOC
BYE      BAS  PROTECTS SCREEN, PROVIDES DATE & TIME ON IDLE SYSTEM
SDIR     COM  SORTED DIRECTORY WITH NUMEROUS OPTIONS - BEST TO DATE
SDIR     DOC  DOCUMENTATION FOR SDIR.COM
LIST     COM  ASCII FILE LISTER, VIABLE ALTERNATIVE TO TYPE/MORE
LIST     DOC  DOCUMENTATION FOR LIST.COM  (2.1K)
CRYPTO   BAS  AIDS IN SOLVING CRYPTOGRAMS
PX       COM  PROCEDURE CROSS REFERENCER FOR ASM AND MASM
PX       DOC  DOCUMENTATION FOR PX.COM  (14K)
SPEED    COM  MODIFIES DISK PARAMETER TABLE
SPEED    ASM  SOURCE FOR SPEED.COM, EASILY MODIFIED TO YOUR TASTE
CHN      PAS  PROVIDES COMMAND LINE EXECUTION OF TURBO .CHN FILES
L4       COM  DISPLAYS FILE W/ UP/DOWN PAGING, HORZ SCROLL, FIND
L4       DOC  DOCUMENTATION FOR L4.COM  (4K)
L4       ASM  SOURCE FOR L4.COM
KBFIX    COM  CAPS, NUM & SCROLL FLAGS PLUS A 127 BYTE KYBD BUFFER
KBFIX    ASM  SOURCE FOR KBFIX.COM
KBFIX    DOC  DOCUMENTATION FOR KBFIX.COM
KBD_FIX  COM  EXPANDS DOS TYPEAHEAD BUFFER TO 160 CHARACTERS
KBD_FIX  ASM  SOURCE FOR KEY_FIX.COM  (SEE SOFTALK PC, NOVEMBER 83 & JANUARY 84)
BAT-CD   COM  CHANGES WORKING DIRECTORY BASED ON STANDARD INPUT
BAT-CD   DOC  DOCUMENTS BATCD.COM
BAT-CD   ASM  SOURCE FOR BATCD.COM
 
PC-SIG
1030D E Duane Avenue
Sunnyvale Ca. 94086
(408) 730-9291
(c) Copyright 1987 PC-SIG Inc.

```
{% endraw %}

## GO.TXT

{% raw %}
```
╔═════════════════════════════════════════════════════════════════════════╗
║                  <<<<  Disk #255 UTILITIES #5  >>>>                     ║
╠═════════════════════════════════════════════════════════════════════════╣
║ To access a program type the filename and press return.                 ║
║ Example, type: LIST (press enter)                                       ║
╚═════════════════════════════════════════════════════════════════════════╝
```
{% endraw %}

## KBD_FIX.ASM

{% raw %}
```
;------------------------------------------------------------------------------;
;  KBD_FIX.COM  from Socha's Toolbox by John Socha                             ;
;    Ref: Softalk PC Nov 83 pg 117                                             ;
;         Softalk PC Jan 84 pg 107  (corrections, incorporated below)          ;
;                                                                              ;
; Note that type ahead buffer can be cleared by pressing Alt and Ctrl together.;
;------------------------------------------------------------------------------;
VECTORS                 SEGMENT         AT 0H
        ORG             9H*4
KEYBOARD_INT_VECTOR                     LABEL           DWORD
        ORG             16H*4
KEYBOARD_IO_VECTOR                      LABEL           DWORD
VECTORS                 ENDS

ROM_BIOS_DATA           SEGMENT         AT 40H
        ORG             17H
KBD_FLG                 DB              ?
        ORG             1AH
ROM_BUFFER_HEAD         DW              ?
ROM_BUFFER_TAIL         DW              ?
KB_BUFFER               DW              16 DUP          (?)
KB_BUFFER_END           LABEL           WORD
ROM_BIOS_DATA           ENDS

CODE_SEG                SEGMENT
        ASSUME          CS:CODE_SEG
        ORG             100H
BEGIN:  JMP             INIT_VECTORS    ;Initialize vectors and attach to DOS

ROM_KEYBOARD_INT        DD              ;Address for ROM routine
ROM_KEYBOARD_IO         DD
BUFFER_HEAD             DW              OFFSET KEYBOARD_BUFFER
BUFFER_TAIL             DW              OFFSET KEYBOARD_BUFFER
KEYBOARD_BUFFER         DW              160 DUP (0)   ;159 character buffer
KEYBOARD_BUFFER_END     LABEL           WORD

;-----------------------------------------------------------------;
; This procedure sends a short beep when the buffer fills.        ;
;-----------------------------------------------------------------;

KB_CONTROL      EQU     61H     ;Control bits for keyboard (and speaker)
ERROR_BEEP      PROC    NEAR
                PUSH    AX
                PUSH    BX
                PUSH    CX
                PUSHF                   ;Save the old interrupt enable flag
                CLI                     ;Turn off beep during interrupt
                MOV     BX,30           ;Number of cycles for 1/8 second tone
                IN      AL,KB_CONTROL
                PUSH    AX
START_OF_ONE_CYCLE:
                AND     AL,0FCH
                OUT     KB_CONTROL,AL
                MOV     CX,60           ;Delay for one half cycle
OFF_LOOP:
                LOOP    OFF_LOOP
                OR      AL,2            ;Turn on the speaker
                OUT     KB_CONTROL,AL
                MOV     CX,60           ;Delay for second half cycle
ON_LOOP:
                LOOP    ON_LOOP
                DEC     BX              ;200 cycles yet
                JNZ     START_OF_ONE_CYCLE
                POP     AX              ;Recover old keyboard information
                OUT     KB_CONTROL,AL
                POPF                    ;Restore interrupt flag
                POP     CX
                POP     BX
                POP     AX
                RET
ERROR_BEEP      ENDP

;---------------------------------------------------------------------;
;This procedure checks the ROM keyboard buffer to see if some program ;
;tried to clear this buffer.  We know it's been cleared when the ROM  ;
;tail and header overlap.  Normally, the new procedure below keep the ;
;dummy character, word 0, in the buffer.                              ;
;                                                                     ;
;Uses BX,DS                                                           ;
;Writes:        BUFFER_HEAD, BUFFER_TAIL, ROM_BUFFER_HEAD             ;
;               ROM_BUFFER_TAIL                                       ;
;Reads:         KEYBOARD_BUFFER, KB_BUFFER                            ;
;---------------------------------------------------------------------;
CHECK_CLEAR_BUFFER    PROC     NEAR
                ASSUME  DS:ROM_BIOS_DATA
                MOV     BX,ROM_BIOS_DATA    ;Establish pointer to BIOS data
                MOV     DS,BX
                CLI                         ;Turn off interrupts during this check
                MOV     BX,ROM_BUFFER_HEAD  ;Check to see if buffer is cleared
                CMP     BX,ROM_BUFFER_TAIL  ;Is the buffer empty?
                JNE     BUFFER_OK           ;No, then everything is alright
                                            ;Yes, then clear the internal buffer
                MOV     BX,OFFSET KB_BUFFER ;Reset the buffer with word 0 in buffer
                MOV     ROM_BUFFER_HEAD,BX
                ADD     BX,2
                MOV     ROM_BUFFER_TAIL,BX
                ASSUME  DS:CODE_SEG
                MOV     BX,CS
                MOV     DS,BX
                MOV     BX,OFFSET KEYBOARD_BUFFER  ;Reset internal buffer
                MOV     BUFFER_HEAD,BX
                MOV     BUFFER_TAIL,BX
BUFFER_OK:
                ASSUME  DS:CODE_SEG
                STI                     ;Interrupts back on
                RET
CHECK_CLEAR_BUFFER   ENDP

;------------------------------------------------------------------------------;
;This procedure intercepts the keyboard interrupt and moves any new            ;
;charcters to the internal, 80 character, buffer.                              ;
;------------------------------------------------------------------------------;

INTERCEPT_KEYBOARD_INT PROC     NEAR
                ASSUME  DS:NOTHING
                PUSH    DS
                PUSH    SI
                PUSH    BX
                PUSH    AX
                CALL    CHECK_CLEAR_BUFFER   ;Check for buffer cleared
                PUSHF
                CALL    ROM_KEYBOARD_INT     ;Read scan code with BIOS routines.
;------         Transfer any charcters to internal buffer

                ASSUME  DS:ROM_BIOS_DATA
                MOV     BX,ROM_BIOS_DATA
                MOV     DS,BX
                MOV     SI,BUFFER_TAIL
                MOV     BX,ROM_BUFFER_HEAD    ;Check if real character in buffer
                ADD     BX,2                  ;Skip over dummy character
                CMP     BX,OFFSET KB_BUFFER_END
                JB      DONT_WRAP             ;No need to wrap the pointer
                MOV     BX,OFFSET KB_BUFFER   ;Wrap the pointer
DONT_WRAP:
                CMP     BX,ROM_BUFFER_TAIL    ;Is there a real character?
                JE      NO_NEW_CHARACTERS     ;No, then return to caller
                MOV     AX,[BX]          ;Yes, move character to internal buffer
                MOV     CS:[SI],AX
                ADD     SI,2                  ;Move to next position
                CMP     SI,OFFSET KEYBOARD_BUFFER_END
                JB      NOT_AT_END
                MOV     SI,OFFSET KEYBOARD_BUFFER
NOT_AT_END:
                CMP     SI,BUFFER_HEAD      ;Buffer overrun?
                JNE     WRITE_TO_BUFFER     ;Yes, beef and throw out character
                CALL    ERROR_BEEP
                JMP     SHORT NOT_AT_KB_END
WRITE_TO_BUFFER:
                MOV     BUFFER_TAIL,SI
NOT_AT_KB_END:
                MOV     ROM_BUFFER_HEAD,BX

NO_NEW_CHARACTERS:
;---------      See if CTRL + ALT pushed and clear buffer if so

                MOV     AL,KBD_FLG         ;Get status of shift keys into AL
                AND     AL,0CH             ;Isolate Alt and Ctrl shift flags
                CMP     AL,0CH             ;Are both the Ctrl and Alt keys down?
                JNE     DONT_CLEAR_BUFFER  ;No, then don't clear the buffer
                MOV     AX,BUFFER_TAIL     ;Yes, then clear the buffer
                MOV     BUFFER_HEAD,AX

DONT_CLEAR_BUFFER:
                POP     AX
                POP     BX
                POP     SI
                POP     DS
                IRET
INTERCEPT_KEYBOARD_INT  ENDP

;------------------------------------------------------------------------------;
;This procedure replaces the ROM BIOS routines for reading a character         ;
;------------------------------------------------------------------------------;

INTERCEPT_KEYBOARD_IO   PROC   FAR
        STI                          ;Interrupts back on
        PUSH    DS                   ;Save current DS
        PUSH    BX                   ;Save BX temporarily
        CALL    CHECK_CLEAR_BUFFER   ;Check for buffer cleared
        MOV     BX,CS                ;Establish pointer to data area
        MOV     DS,BX
        OR      AH,AH                ;AH=0?
        JZ      READ_CHARACTER       ;Yes, read a character
        CMP     AH,1                 ;AH=1?      **************
        JZ      READ_STATUS          ;Yes, return the status
        POP     BX                   ;Let the ROM BIOS handle other functions
        POP     DS
        ASSUME  DS:NOTHING
        JMP     ROM_KEYBOARD_IO      ;Call ROM BIOS for other functions
                                     ;Read the key
        ASSUME  DS:CODE_SEG
READ_CHARACTER:                      ;ASCII read
        STI                          ;Interrupts back on during loop
        NOP                          ;Allow an interrupt to occur
        CLI                          ;Interrupts back off
        MOV     BX,BUFFER_HEAD       ;Get pointer to head of buffer
        CMP     BX,BUFFER_TAIL       ;Test end of buffer
        JE      READ_CHARACTER       ;Loop until something in buffer
        MOV     AX,[BX]              ;Get scan code and ASCII code
        ADD     BX,2                 ;Move to next word in buffer
        CMP     BX,OFFSET KEYBOARD_BUFFER_END   ;At end of buffer?
        JNE     SAVE_POINTER         ;No, continue
        MOV     BX,OFFSET KEYBOARD_BUFFER  ;Yes, reset to buffer start
SAVE_POINTER:
        MOV     BUFFER_HEAD,BX       ;Store value in variable
        POP     BX
        POP     DS
        IRET                         ;Return to caller
;------------ASCII status

READ_STATUS:
        CLI                          ;Interrupts off
        MOV     BX,BUFFER_HEAD       ;Get head pointer
        CMP     BX,BUFFER_TAIL       ;If equal (ZF=1) then nothing there
        MOV     AX,[BX]
        STI                          ;Interrupts back on
        POP     BX                   ;Recover registers
        POP     DS
        RET     2                    ;Throw away flags
INTERCEPT_KEYBOARD_IO     ENDP

;------------------------------------------------------------------------------;
;This procedure initializes the interrupt vectors                              ;
;------------------------------------------------------------------------------;
INIT_VECTORS    PROC    NEAR
        ASSUME  DS:VECTORS
        PUSH    DS                      ;Save old Data Segment
        MOV     AX,VECTORS              ;Set up the data segment for vectors
        MOV     DS,AX
        CLI                             ;Don't allow interrupts
        MOV     AX,KEYBOARD_INT_VECTOR  ;Save addresses of BIOS routines
        MOV     ROM_KEYBOARD_INT,AX
        MOV     AX,KEYBOARD_INT_VECTOR[2]
        MOV     ROM_KEYBOARD_INT[2],AX
                                        ;Set up new KEYBOARD_INT vector
        MOV     KEYBOARD_INT_VECTOR,OFFSET INTERCEPT_KEYBOARD_INT
        MOV     KEYBOARD_INT_VECTOR[2],CS
        STI                             ;Allow interrupts again
                                        ;Set up keyboard IO vector
        MOV     AX,KEYBOARD_IO_VECTOR
        MOV     ROM_KEYBOARD_IO,AX
        MOV     AX,KEYBOARD_IO_VECTOR[2]
        MOV     ROM_KEYBOARD_IO[2],AX
        MOV     KEYBOARD_IO_VECTOR,OFFSET INTERCEPT_KEYBOARD_IO
        MOV     KEYBOARD_IO_VECTOR[2],CS
                                        ;Now set up the keyboard buffer, etc.

       ASSUME  DS:ROM_BIOS_DATA
        MOV     AX,ROM_BIOS_DATA
        MOV     DS,AX
        CLI                             ;Don't allow interrupts
        MOV     BX,OFFSET KB_BUFFER
        MOV     ROM_BUFFER_HEAD,BX
        MOV     WORD PTR [BX],0
        ADD     BX,2
        MOV     ROM_BUFFER_TAIL,BX
        STI                             ;Allow interrupts again

        MOV     DX,OFFSET INIT_VECTORS  ;End of resident portion
        INT     27H                     ;Terminate but stay resident
INIT_VECTORS    ENDP

CODE_SEG        ENDS
        END     BEGIN

```
{% endraw %}

## KBFIX.ASM

{% raw %}
```
page	,132
title  kbfix - 127 character buffer & screen display of ibm-pc shift status
;****************************************************************
;* module name = kbfix
;*
;* copyright(C) 1984	Skip Gilbrech
;*			90 Lexington Ave. #10-G
;*			New York, NY 10016
;*			212-685-0551
;*
;* This program may be freely copied/altered for any non-commercial
;* purpose but may not be sold or used in any way as part of any
;* profit-making venture without permission of the author.
;*
;* author = skip gilbrech
;* date written = 01/84
;*
;* environment:
;*  system = ibm pc (dos 2.0 - but should work on any version)
;*  processor = microsoft 8086 macro assembler
;*
;* This program will print out the status of the caps-, num-, and scroll-
;* lock keys on the upper right-hand corner of the ibm-pc screen in reverse-
;* video, and will beep from low to high when one of these keys is toggled on,
;* and from high to low when it is toggled off.  The display is updated after
;* every keystroke.  The program writes directly to the video ram to avoid the
;* overhead of rom-bios calls:	I found this approach resulted in a much
;* cleaner display.  The program should work with both monochrome and color 80
;* column monitors.
;*
;* The program is invoked only once and is installed through the dos
;* 'terminate but stay resident' function.
;*
;* I have incorporated an optional 127-character keyboard buffer to replace
;* the standard 15 provided by ibm.  The buffer is installed only if a '/b'
;* switch is encountered on the command line.
;*
;* Installation of the buffer also allows fixing a problem which I found
;* irritating:	control-s (pause output) and control-c (abort) only worked
;* if they were the only key in the buffer, i.e., if you typed ahead while
;* something else was happening, then changed your mind, you had to use
;* control-numlock or control-break to pause or abort.	This is understandable:
;* since bios doesn't treat control-s or control-c in any special way, dos
;* would have to scan the whole buffer to detect these keys in any but the
;* first position.  Now, if either of these keys is detected, the buffer
;* is cleared and the character is placed in the first buffer position.
;*
;* The program permanently occupies 1152 bytes when installed with the buffer;
;* without the buffer, it uses 672 bytes.
;*
;* The program should be independent of any particular rom-bios version, as
;* the keyboard interrupt routine gains control only after calling the vector
;* at the original int 9 (keyboard interrupt) location.  I have no idea about
;* this program's compatibility with other keyboard enhancement programs, as
;* I don't have any of them (although a friend tells me that Smartkey works
;* fine if it is installed AFTER this program).
;*
;* I have been using various versions of this program for several months,
;* now, and haven't run into any destructive bugs, but I can't accept
;* responsibility for any damage it may cause.	I would appreciate hearing
;* about any problems, however, at the number or address above, or on
;* Compuserve (71445,534).
;*
;* This ideas (and some of the code) for this program come from a variety
;* of public-domain sources, and the program evolved slowly over several
;* months, so if I miss giving credit to someone, please accept my apologies.
;*
;* The ideas of printing out the key status on the upper-right hand corner of
;* the screen and intercepting the interrupt routine after it has executed
;* come from Tony A. Rhea's KEYSTAT program.  His copyright notice is
;* reproduced below:
;*
;*	KEYSTAT -- Copyright (C) 1983 Tony A. Rhea
;*	This program may be copied for non-commercial use.
;*	Adapted from KEYFLAGS (PC-World, Oct. 83, page 266) by Morton Kaplon
;*
;* The bios beep routines were taken from the KEYLOC program by:
;*
;*	John Black
;*	5225 Pooks Hill Rd. #1715 N.
;*	Bethesda MD. 20814
;*
;* The basic idea for the enlarged keyboard buffer came from a program
;* on the Compuserve IBM-PC SIG called KEYBOARD.ASM.  There was no name
;* on the file I downloaded.
;*
;****************************************************************
	page
;****************************************************************
;*
;*	constants
;*
;****************************************************************

; general equates:

false		equ	0
true		equ	not false

cr		equ	0dh	; carriage return
lf		equ	0ah	; line feed
bell		equ	7	; ascii bell
ctrl_s		equ	13h	; control-s
ctrl_c		equ	3	; control-c
spc		equ	' '     ; space, blank
tab		equ	9	; tab

; program equates:

bytes_per_row	equ	160	; num. bytes per row in video ram
rowcaps 	equ	0	; row for cap symbol
colcaps 	equ	77	; column for cap symbol
rownums 	equ	0	; row for num symbol
colnums 	equ	78	; column for num symbol
rowscroll	equ	0	; row for scroll symbol
colscroll	equ	79	; column for scroll symbol
blank		equ	' '     ; display this if a mode is not active
capschar	equ	'C'     ; character to signify capslock state
numchar 	equ	'N'     ; character to signify numlock state
scrollchar	equ	'S'     ; character to signify scroll lock state
normal		equ	7	; display attribute (7=normal white on black)
reverse 	equ	112	; display attr. (112=reverse video - sg)
blankword	equ	((normal * 256) + blank)	; words for video ram
capsword	equ	((reverse * 256) + capschar)	;
numword 	equ	((reverse * 256) + numchar)	;
scrollword	equ	((reverse * 256) + scrollchar)	;

; dos and bios equates:

dosint		equ	21h	; interrupt number for dos functions
print_string	equ	9	; dos print console string function
get_vers	equ	30h	; dos get version number function
get_int_vec	equ	35h	; dos 2.0 get interrupt vector function
set_int_vec	equ	25h	; dos set interrupt vector function

kb_int_no	equ	9	; interrupt number for keyboard interrupt
kb_io_int_no	equ	16h	; interrupt number for keyboard i/o
capsmask	equ	40h	; mask for kb_flag - capslock on
nummask 	equ	20h	; mask for kb_flag - numlock on
scrollmask	equ	10h	; mask for kb_flag - scrolllock on

; hardware specific equates:

inta01		equ	21h	; port adr. for 8259 ocw 1 and icw's 2, 3 & 4
ena_irq1	equ	11111101b	; mask-enable irq1 (keyboard) interrupt
dis_irq1	equ	00000010b	; mask-disable irq1 interrupt
stat_6845	equ	03dah		; 6845 status register

; for beep routine:

h_cycles	equ	30
h_half		equ	300
l_cycles	equ	h_cycles / 3
l_half		equ	h_half * 3
kb_ctl		equ	61h

page

;**************************************************************************

int_vecs	segment at 0
int_vecs	ends

;**************************************************************************

bios_data segment at 40h

	org	17h
kb_flag 	db	?		; holds state of caps- and numlock, etc.

	org	1ah			; keyboard buffer data area
bios_buffer_head	dw	?	; ptr to next char to be gotten
bios_buffer_tail	dw	?	; ptr to last char entered in buffer
bios_kb_buffer	dw	16 dup (?)	; keyboard buffer
bios_kb_buffer_end	label word	; end of buffer

	org	49h
crt_mode	db	?		; crt mode - mono/color, etc.

	org	80h
bios_buffer_start	dw	?	; in new bios, ptr to beginning of buf
bios_buffer_end 	dw	?	; in new bios, ptr to end of buf

bios_data ends

;**************************************************************************

monoram segment at 0b000h		; monochrome ram
monoram ends

;**************************************************************************

colorram segment at 0b800h		; color/graphics ram
colorram ends

	page
;**************************************************************************

cseg	segment
	assume cs:cseg,ds:cseg,es:nothing

	org	80h			; command line parms
cmd_ct	label	byte			; number of chars. in command line

	org	100h			; for .COM file
entry:
	jmp	init			; ck for residency, init if not resident

last_kb_flag	db	?		; kb_flag when last entered routine
buf_flag	db	false		; set to true when/if new keyboard buffer
					; is installed
orig_kb_int_vec dd	?		; pointer to orig. kb_int service routine

;**************************************************************************
;* This is the start of the new keyboard interrupt handler code.
;*
;* The numlock and capslock keys tend to bounce when hit quickly, and
;* this can cause another keyboard interrupt before the beeping is done
;* (resulting in unpleasant beeps) since the bios has already sent out an
;* eoi to the 8259.
;* To solve the problem, and to simplify the keyboard buffer manipulations
;* (assuming the buffer is installed), interrupts will not be re-enabled
;* before pushing the flags and calling the original routine.  When we regain
;* control, interrupts will still be disabled, so we can mask off the keyboard
;* interrupt before re-enabling other interrupts.

kb_int_hdlr proc			; entry point of keyboard (hardware)
					;  interrupt handler

	pushf				; (IRET will pop 3 words off the stack)
	call	cs:orig_kb_int_vec	; kb_flag will be updated on return

; interrupts are disabled -- mask off just the keyboard interrupt and re-enable

	push	ax			; save AX before using
	in	al,inta01		; get ocw1 from 8259
	or	al,dis_irq1		; turn on the mask bit
	out	inta01,al		; write modified byte to 8259
	sti				; reenable ints

	push	bx			; save other regs. used
	push	cx			;
	push	dx			;
	push	si			;
	push	ds			;
	push	es			;

	mov	ax,cs			; now establish data addressability
	mov	ds,ax			;  off of DS
	mov	ax,bios_data		; and set ES to bios_data segment
	mov	es,ax			;

	cmp	buf_flag,false		; see if our keyboard buffer is in use
	je	kb_int1 		; if not, continue
	call	get_from_bios_buf	; else, check for char to move

kb_int1:
	mov	al,es:kb_flag		; get bios keyboard status flag

; check capslock state - if on, show reverse-video 'C' else show blank

	mov	dx,blankword		; assume blank to be sent
	push	dx			; save for later
	push	dx			;  and again..
	test	al,capsmask		; al contains <kb_flag>
	jz	cl1			; if bit not set, nothing to do
	mov	dx,capsword		; else send out the caps symbol
cl1:
	mov	bh,rowcaps		; row for cap symbol
	mov	bl,colcaps		; column for cap symbol
	call	dispchar		;

; check numlock state - if on, show reverse-video 'N' else show blank

	pop	dx			; restore blankword
	test	al,nummask		; check the flag
	jz	nl1			; if bit not set, nothing to do
	mov	dx,numword		; else, send out the numlock symbol
nl1:
	mov	bh,rownums		; row for num symbol
	mov	bl,colnums		; column for num symbol
	call	dispchar		;

; check scroll lock state - if on, show reverse-video 'S' else show blank

	pop	dx			; restore blankword
	test	al,scrollmask		; check the flag
	jz	sl1			; if bit not set, nothing to do
	mov	dx,scrollword		; else, send out the scroll lock symbol
sl1:
	mov	bh,rowscroll		; row for scroll symbol
	mov	bl,colscroll		; column for scroll symbol
	call	dispchar		;

	mov	bl,last_kb_flag 	; get last kb_flag
	cmp	al,bl			; see if anything's changed
	je	int_exit		; if not, go home

; else, check if caps-, num- or scroll-lock has changed state

	mov	dl,capsmask		; capslock state changed?
	call	chk_chg 		;
	jnz	got_diff		; if difference, check it out

	mov	dl,nummask		; numlock state changed?
	call	chk_chg 		;
	jnz	got_diff		; if difference, check it out

	mov	dl,scrollmask		; scroll lock state changed?
	call	chk_chg 		;
	jz	int_exit		; if not, return

got_diff:
	jc	beep_dn 		; carry set if transition was from on to off
	call	low_beep		; otherwise, beep low then high
	call	high_beep		;
	jmp short int_exit		;

beep_dn:
	call	high_beep		; beep high then low
	call	low_beep		;

int_exit:
	mov	last_kb_flag,al 	; al has current flag - store as last flag

	pop	es			; restore saved registers
	pop	ds			;
	pop	si			;
	pop	dx			;
	pop	cx			;
	pop	bx			;

; now disable ints and turn the keyboard back on -- interrupts will be
; re-enabled when the flags are popped during our IRET

	cli				;
	in	al,inta01		; get ocw1 from 8259
	and	al,ena_irq1		; shut off the mask bit
	out	inta01,al		; write modified byte to 8259

	pop	ax			;
	iret				;

kb_int_hdlr	endp

page
;**************************************************************************
;* compare current flag (in <al>) with last flag (in <bl>) using mask in <dl>
;* set zero flag if no change -- set carry flag if bit changed from 1 to 0

chk_chg proc near

	push	ax
	push	bx
	and	al,dl			; isolate bit in al
	and	bl,dl			; do same for bl
	cmp	al,bl			; carry will be set if curr. flag (al) is 0
					; while last flag (bl) was 1
	pop	bx
	pop	ax
	ret

chk_chg endp

;**************************************************************************
;* display char/attrib. in dl/dh at row/column in bh/bl of video ram page 0
;* supports b/w or color monitors, but row/column won't be right on 40
;* column displays
;* on entry, ES points to bios_data seg - all registers preserved

dispchar proc near

	push	ax			; save registers used
	push	bx			;
	push	di			;
	push	es			; save extra seg

	mov	ax,bytes_per_row	; num. bytes per row in video ram
	mul	bh			; calc. row offset
	sub	bh,bh			; make BH = 0
	shl	bl,1			; col * 2 = column offset
	add	ax,bx			; AX = offset into video ram
	mov	di,ax			; move offset into DI

	cmp	es:crt_mode,7		; 7 = mono. display
	jne	co_80			; no, then jump to color routine
	mov	ax,monoram		; set ES to mono. ram segment
	mov	es,ax			;
	mov	ax,dx			; get char/attrib in AX
	stosw				; place in video ram

dc_exit:
	pop	es			; restore extra segment
	pop	di			;
	pop	bx			;
	pop	ax			;
	ret

; -- display char. on color monitor.  DX has char/attrib., DI points to
;    offset in video ram.  Must wait for horizontal retrace to avoid screwing
;    up the display.

co_80:
	mov	ax,colorram		; set ES to color ram segment
	mov	es,ax			;
	mov	bx,dx			; save char/attrib. in BX
	mov	dx,stat_6845		; 6845 status reg port in DX

co_80_1:
	in	al,dx			; get 6845 status port
	test	al,1			; test bit 0 (on = horiz. retrace active)
	jnz	co_80_1 		; loop until inactive
	cli				; no ints while waiting or writing

co_80_2:
	in	al,dx			; get status again
	test	al,1			; test for retrace active
	jz	co_80_2 		; no? loop to wait until active

	mov	ax,bx			; get char/attrib. into AX
	stosw				; place in video ram
	sti				; re-enable interrupts

	mov	dx,bx			; restore entering value of DX
	jmp	dc_exit 		; and return

dispchar endp

;**************************************************************************
;* from KEYLOC

low_beep proc near

	push	dx
	push	bx
	mov	bx,l_cycles
	mov	dx,l_half
	call	beep
	pop	bx
	pop	dx
	ret

low_beep endp

high_beep proc near

	push	dx
	push	bx
	mov	bx,h_cycles
	mov	dx,h_half
	call	beep
	pop	bx
	pop	dx
	ret

high_beep endp

;**************************************************************************
;* Adapted from BIOS Beep routine
;
;  bx = # of cycles
;  dx = length of half cycle

beep proc near

	push	ax
	push	cx
	in	al,kb_ctl
	push	ax
k65:
	and	al,0FCh
	out	kb_ctl,al
	mov	cx,dx
k66:	loop	k66
	or	al,2
	out	kb_ctl,al
	mov	cx,dx
k67:	loop	k67
	dec	bx
	jnz	k65
	pop	ax
	out	kb_ctl,al
	pop	cx
	pop	ax
	ret

beep endp

;**************************************************************************
;* this is the end of the code which will be installed if the keyboard
;* buffer handler is NOT used -- kb_int_len will be used as the length
;* of code for the residency test in any case, since it is sufficient to
;* determine if the program has been installed in some form.

kb_int_end label near			; area after this usable by dos if
					;  buffer not installed

kb_int_len equ	(offset kb_int_end - offset kb_int_hdlr)

	page
;**************************************************************************
;* the following data locations will be used for our replacement keyboard
;* buffer if it is installed

our_buffer_head 	dw	?		; ptr to next char to be gotten
our_buffer_tail 	dw	?		; ptr to last char entered in buffer
our_kb_buffer		dw	128 dup (?)	; keyboard buffer
our_kb_buffer_end	label word		; end of buffer

; This is essentially a copy of the bios keyboard i/o interrupt handler
; modified to check our buffer for chars rather than the bios buffer
; As in the bios routine, only AX and flags are changed.

kb_io_int_hdlr	proc far

	sti					; reenable ints
	push	bx				;
	push	si				;
	push	ds				;
	push	es				;

	mov	bx,cs				; est. data addressability off of DS
	mov	ds,bx				;
	mov	bx,bios_data			; and set ES to bios_data segment
	mov	es,bx				;

	or	ah,ah				; ah=0
	jz	k1				; ascii read
	dec	ah				; ah=1
	jz	k2				; ascii status
	dec	ah				; ah=2
	jz	k3				; shift status
	jmp	short int10_end 		; invalid parameter, exit

;----- read the key to figure out what to do

k1:						; ascii read
	sti					; interrupts back on during loop
	nop					; allow an interrupt to occur
	cli					; interrupts back off
	call	ck_clr_bios_buf 		; buf cleared (by other than kb_int)?
	mov	bx,our_buffer_head		; get pointer to head of buffer
	cmp	bx,our_buffer_tail		; test end of buffer
	jz	k1				; loop until something in buffer
	mov	ax,[bx] 			; get scan code and ascii code
	inc	bx				; move pointer to next position
	inc	bx				;
	cmp	bx,offset our_kb_buffer_end	; at end of buffer?
	jne	k5				; no, continue
	mov	bx,offset our_kb_buffer 	; yes, reset to buf beginning
k5:
	mov	our_buffer_head,bx		; store value in variable
	jmp	short int10_end 		; return

;----- ascii status

k2:
	cli					; interrupts off
	call	ck_clr_bios_buf 		; buf cleared (by other than kb_int)?
	mov	bx,our_buffer_head		; get head pointer
	cmp	bx,our_buffer_tail		; if equal (z=1) then nothing there
	mov	ax,[bx] 			;
	sti					; interrupts back on
	pop	es				; recover registers
	pop	ds				;
	pop	si				;
	pop	bx				;
	ret	2				; throw away flags

;----- shift status

k3:
	mov	al,es:kb_flag			; get the shift status flags

int10_end:
	pop	es				;
	pop	ds				;
	pop	si				;
	pop	bx				;
	iret					;

kb_io_int_hdlr	endp

;**************************************************************************
;* Called from our keyboard interrupt handler after the keystroke has been
;* processed by the bios (or by whomever is handling keyboard input).
;*
;* At this point, the keyboard interrupt is disabled, so no need to disable
;* interrupts when manipulating keyboard data.
;*
;* If there is a new character available, it will be checked for control-s and
;* control-c, and if either is found, our buffer will be cleared and that char.
;* will become the 1st and only char in it.  Dos apparently checks only the
;* first position in the buffer for these two characters, and will not pause
;* or abort a command if anything else has been entered.  Of course, ctrl-break
;* and ctrl-numlock will still work, but for those who came from a cp/m
;* background, it's an annoying feature.
;*
;* On entry:  DS is set to our CS, ES points to the <bios_data> segment
;* AX,BX,SI changed.

get_from_bios_buf	proc near

	call	ck_clr_bios_buf 		;
	mov	bx,offset bios_kb_buffer + 2	; point past dummy entry
	cmp	bx,es:bios_buffer_tail		; is there a char?
	je	get_from_exit			; no, just exit
	mov	es:bios_buffer_tail,bx		; set tail = head
	mov	ax,es:[bx]			; get the char.
	cmp	al,ctrl_s			; see if control-s
	jne	get_from_0			; no, continue
	call	init_our_buf			; clear our buf
get_from_0:
	cmp	al,ctrl_c			; see if control-c
	jne	get_from_1			; no, continue
	call	init_our_buf			; clear our buf
get_from_1:
	mov	si,our_buffer_tail		; get ptr to next pos in buffer
	mov	bx,si				; save the value
	inc	si				; bump to next position
	inc	si				;
	cmp	si,offset our_kb_buffer_end	; wrapped?
	jne	get_from_2			; no, continue
	mov	si,offset our_kb_buffer 	; else, set ptr to beginning of buf

get_from_2:
	cmp	si,our_buffer_head		; see if there's room in the buf
	jne	get_from_3			; continue if so
	call	err_beep			; if not, beep, discard data
	ret					;

get_from_3:
	mov	[bx],ax 			; store the value
	mov	our_buffer_tail,si		; store ptr to next pos in buf

get_from_exit:
	ret

get_from_bios_buf	endp

;* Check if the bios buffer has been cleared by seeing if tail is set
;* to the beginning of the buffer.  Normally, tail is equal to either
;* beginning + 2 (if no data in buf) or beginning + 4 (if data).
;* If cleared, clear our buffer and reset the bios buffer to its normal
;* condition.  At this point, interrupts are either disabled entirely,
;* or the keyboard interrupt has been masked off.

ck_clr_bios_buf 	proc near

	cmp	es:bios_buffer_head,offset bios_kb_buffer  ; same?
	ja	ck_clr_exit			; if not, buf not cleared
	call	init_bios_buf			; else, reset bios buffer
	call	init_our_buf			; and reset our buffer
ck_clr_exit:
	ret

ck_clr_bios_buf 	endp

; set bios buffer to start 1 position higher than normal -- can then check
; for reset by seeing if head has been moved to normal starting point.

init_bios_buf proc near

	mov	bx,offset bios_kb_buffer + 2	;
	mov	es:bios_buffer_head,bx		;
	mov	es:bios_buffer_tail,bx		;
	ret

init_bios_buf endp

; initialize our keyboard buffer

init_our_buf	proc near

	mov	si,offset our_kb_buffer 	; and reset our buffer
	mov	our_buffer_head,si		;
	mov	our_buffer_tail,si		;
	ret

init_our_buf	endp

; buffer-full beep -- essentially the same as the bios routine

err_beep	proc near

	push	bx
	push	dx
	mov	bx,80h			; num. cycles for 1/12 second tone
	mov	dx,48h			; half cycle time for tone
	call	beep
	pop	dx
	pop	bx
	ret

err_beep	endp

kb_io_int_end label near	; area after this usable by dos if
				;  keyboard buffer installed
	page
;**************************************************************************

resident_msg		db	bell,'KBFIX already resident',cr,lf,'$'
buf_err_msg		db	bell,'Original buffer in unknown state...',cr,lf,'$'
kbfix_install_msg	db	'KBFIX installed with','$'
buf_not_install_msg	db	'out'
buf_install_msg 	db	cr,lf,'127-byte keyboard buffer',cr,lf,'$'
usage_msg		db	'Usage: kbfix /b (or) /n',cr,lf
			db	'/b = install 127 char keyboard buffer',cr,lf
			db	'/n = no buffer desired',cr,lf,'$'
buf_desired		db	false

;**************************************************************************
;* Initialization procedure:
;*
;*	1. Check whether the routine is already resident; if it is, then
;*	   just print message and exit.
;*	2. Check command line to see if enlarged buffer installation
;*	   desired.  If no parms or unknown parms, print usage message.
;*	2. Get current kb_int vector and store, then change vector to point
;*	   to new interrupt handler and print message.
;*	3. If buffer installation desired, check the status of the existing
;*	   keyboard buffer.
;*	4. If ok, install new keyboard i/o interrupt handler;
;*	   otherwise, do NOT change the vector.
;*	5. Print message showing status of keyboard buffer.
;*	6. Execute dos 'terminate but stay resident' interrupt, installing
;*	   only the code which will actually be used.

init	proc	near

	call	testresident		; see if we are already servicing kb_int
	jz	dont_install		; ZF set = already resident -- print msg and exit

	call	get_parms		; see if keyboard buffer desired
	jc	print_usage		; if parm error, print usage message

	; shut off the keyboard interrupt while initializing

	cli				; shut off interrupts while messing with 8259
	in	al,inta01		; get ocw1 from 8259
	or	al,dis_irq1		; turn on the mask bit
	out	inta01,al		; write modified byte to 8259
	sti				; reenable ints

	call	install_kb_int_hdlr	; install new keyboard interrupt handler

	cmp	buf_desired,true	; see if buffer installation desired
	je	install_buf		; if so, install it

	mov	dx,offset kbfix_install_msg	; print kbfix install message
	call	msg			;
	jmp	short buf_not_installed ;

install_buf:
	call	install_kb_io_int_hdlr	; install new buffer handler if ok
	pushf				; save result flags
	mov	dx,offset kbfix_install_msg	; print kbfix install message
	call	msg			;
	popf				; restore flags
	jc	buf_not_installed	; buffer not installed if carry set
	mov	dx,offset buf_install_msg ; else, show buffer installation
	call	msg			;
	mov	dx,offset kb_io_int_end ; set up to install everything...
	jmp	short make_res		; and install it

buf_not_installed:
	mov	dx,offset buf_not_install_msg	; else, print msg showing not installed
	call	msg			;
	mov	dx,offset kb_int_end	; install only kb_int_hdlr

make_res:
	cli				; re-enable keyboard interrupt
	in	al,inta01		; get ocw1 from 8259
	and	al,ena_irq1		; shut off the mask bit
	out	inta01,al		; write modified byte to 8259
	sti				;
	int	27h			; dos terminate but stay resident func.

dont_install:
	mov	dx,offset resident_msg	; print msg showing already installed
	call	msg			;
	int	20h			; return to dos (nothing made resident)

print_usage:
	mov	dx,offset usage_msg	;
	call	msg			;
	int	20h			; return to dos (nothing made resident)

init	endp

;**************************************************************************
;* see if KBFIX already servicing kb_int - AX,BX,CX,SI,DI changed

testresident proc near

	push	es			;
	mov	al,kb_int_no		; interrupt number in AL
	call	get_vec 		; interrupt vector returned in ES:BX
	mov	orig_kb_int_vec,bx	; store IP of current servicer
	mov	orig_kb_int_vec[2],es	; store CS of current servicer
	mov	cx,kb_int_len		; number of bytes to match
	mov	si,offset kb_int_hdlr	; point DS:SI to our code
	mov	di,bx			; make ES:DI point to current kb_int servicer
	cld				; auto increment
	repe	cmpsb			; compare while equal - zero flag set on exit
					; if all bytes matched (already resident)
	pop	es			;
	ret

testresident endp

;**************************************************************************
;* install new keyboard interrupt handler  - AX & DX changed

install_kb_int_hdlr	proc near

	push	es			;
	mov	ax,bios_data		;
	mov	es,ax			; getflag expects ES = bios_data seg
	mov	al,es:kb_flag		; get bios keyboard status flag
	mov	last_kb_flag,al 	; store for comparison

	mov	al,kb_int_no		; interrupt number in AL
	mov	ah,set_int_vec		; funct. number for set int. vector
	mov	dx,offset kb_int_hdlr	; offset of resident code
	int	dosint			; set the vector
	pop	es			;
	ret

install_kb_int_hdlr	endp

;**************************************************************************
;* check status of bios keyboard buffer, install new buffer handler if ok -
;* set carry and return if not.  AX,BX,DX,SI changed.
;*
;* Buffer_start & buffer_end were not used in the original pc rom bios --
;* the offsets of kb_buffer & kb_buffer_end were hard-coded, preventing
;* easy expansion of the buffer.  The newer tech-reference manual (v2.02),
;* however, shows these variables starting at offset 80h, and bios uses them
;* as pointers to the actual keyboard buffer area, making it rather easy
;* to expand.  In my system (original bios), these locations always (as far
;* as I know) contain 0, so I will use this fact to test for unknown
;* buffer conditions.  If the locations contain 0's, a standard (16 char)
;* buffer will be assumed; if they do not, their contents will be checked
;* against the offsets of kb_buffer & kb_buffer_end.  If the values don't match,
;* the buffer has been changed somehow, and this program will not mess with it.

install_kb_io_int_hdlr	proc near

	push	es
	mov	ax,bios_data			; set ES to bios_data segment
	mov	es,ax				;

	mov	ax,es:bios_buffer_start 	; check contents of pointer
	or	ax,ax				; zero?
	jz	inst_io_1			; if so, probably old rom -
						;  check next word
	cmp	ax,offset bios_kb_buffer	; if they match, ok so far
	jne	inst_io_err			; if not, who knows?

inst_io_1:
	mov	ax,es:bios_buffer_end		; check contents of next pointer
	or	ax,ax				; zero?
	jz	inst_io_2			; if so, definitely old rom -
						;  ok to install
	cmp	ax,offset bios_kb_buffer_end	; match?  ok to install
						;  (new rom but default buffer)
	jne	inst_io_err			; if not, who knows?

inst_io_2:					; initialize our keyboard buffer

	mov	si,offset our_kb_buffer 	; point SI & head to start
	mov	our_buffer_head,si		;  of new keyboard buffer

	call	movem				; get chars & setup bios buf

	mov	al,kb_io_int_no 		; int number for keyboard i/o
	mov	ah,set_int_vec			; dos set int. vector function
	mov	dx,offset kb_io_int_hdlr	; offset of new i/o handler
	int	dosint				; set the vector

	mov	buf_flag,true			; tell kb_int_hdlr it's ok to
						;  use the buffer now..
	clc					; clear CF to show no error
	jmp short inst_io_exit			; return

inst_io_err:					; unknown buffer condition found
						;  - don't install
	mov	dx,offset buf_err_msg		; print informational messages..
	call	msg				;
	stc					; set CF to show error

inst_io_exit:
	pop	es
	ret

; get existing chars into our buffer - SI points to beginning of our buffer

movem:
	mov	bx,es:bios_buffer_head		; get ptr to 1st char in buf
movem1:
	cmp	bx,es:bios_buffer_tail		; if tail = head,
	je	movem_exit			;  nothing there - setup buf
	mov	ax,es:[bx]			; else, get a word of data
	mov	[si],ax 			; put it in our buffer
	inc	bx				; bump both ptrs to next word
	inc	bx				;
	inc	si				;
	inc	si				;
	cmp	bx,offset bios_kb_buffer_end	; at end of bios buffer?
	jne	movem2				; no, continue
	mov	bx,offset bios_kb_buffer	; set to beginning of buffer
movem2:
	jmp	movem1				; loop while chars available

movem_exit:
	mov	our_buffer_tail,si		; store ptr to next pos. avail.
	call	init_bios_buf			; set keyboard buf to empty
	ret

install_kb_io_int_hdlr	endp


;**************************************************************************
;* print msg (offset in dx)

msg proc near

	push	ax				;
	mov	ah,print_string 		; dos function number
	int	dosint				;
	pop	ax				;
	ret

msg endp

;**************************************************************************
;*
;*	GET_VEC 	get interrupt vector
;*
;*	Entry:		AL = interrupt number
;*
;*	Exit:		ES:BX contain CS:IP for interrupt vector
;*
;*	(Only ES and BX changed)
;*
;**************************************************************************

get_vec proc near

	push	ax			; save entering value
	push	ax			; save interrupt number requested
	mov	ah,get_vers		; dos get version function
	int	dosint			; major version returned in AL, minor in AH
	pop	bx			; restore int. number requested
	cmp	al,2			; less than 2 = pre dos 2.0
	jb	gv_direct		; get vector directly

	mov	al,bl			; move requested interrupt vector into AL
	mov	ah,get_int_vec		; dos get int. vector function
	int	dosint			; CS:IP returned in ES:BX
	pop	ax			;
	ret

gv_direct:				; get vector directly
					; first, convert number in BL to offset in BX
	xor	bh,bh			; make sure BH = 0
	shl	bx,1			; multiply by 4
	shl	bx,1			;
	mov	ax,int_vecs		; point ES to segment for int. vectors
	mov	es,ax			;
	mov	ax,es:[bx+2]		; get CS value into AX
	mov	bx,es:[bx]		; get IP value into BX
	mov	es,ax			; mov CS value into ES
	pop	ax			;
	ret

get_vec endp

;****************************************************************
;*
;*	get_parms	scan command line for /b or /n parm
;*
;*	exit:	carry set on error
;*
;*	AX,BX,SI changed
;*
;****************************************************************

get_parms	proc near

	mov	bx,offset cmd_ct	; BX pts to number of cmd line chars
	mov	si,[bx] 		; get count
	inc	bx			; point BX to 1st char
	and	si,0ffh 		; max. 127 chars. - set flags
	jz	gp_err_exit		; no parms, skip the rest
	mov	byte ptr [bx][si],0	; make command line null terminated

gp_top_loop:
	mov	al,[bx] 		; get the char
	or	al,al			; null?
	je	gp_err_exit		; if so, return error
	cmp	al,spc			; space?
	je	gp_bot_loop		; yes, get another char
	cmp	al,tab			; tab?
	je	gp_bot_loop		; yes, get another char
	cmp	al,'/'                  ; see if possible /b or /n switch
	jne	gp_err_exit		; no, return error
	call	ck_switches		; check parm, carry set on error
	jc	gp_err_exit		; carry set, return error
	jmp	gp_exit 		;

gp_bot_loop:
	inc	bx			; point to next char
	jmp	gp_top_loop		; go get it

gp_err_exit:
	stc				; set carry to show error
gp_exit:				; if got here by jump, carry is reset
	ret

ck_switches:				; ck parms ( BX pts to '/' )
	inc	bx			; point to possible switch
	mov	al,[bx] 		; get char
	cmp	al,'Z'                  ; check if possibly upper-case
	jbe	ck_sw1			; no? continue
	sub	al, 'a' - 'A'           ; make upper-case
ck_sw1:
	cmp	al,'B'                  ; buffer desired ?
	jne	ck_sw2			; no? continue
	mov	buf_desired,true	; else, set flag
	jmp	ck_sw_exit		; and exit
ck_sw2:
	cmp	al,'N'                  ; no buffer desired ?
	je	ck_sw_exit		; yes, return ok
	stc				; set carry to show error
ck_sw_exit:
	ret

get_parms	endp

cseg	ends

end	entry
```
{% endraw %}

## KBFIX.DOC

{% raw %}
```
KBFIX.ASM      16-Feb-84 32935        Accesses: 68

    Keywords: KEYBOARD BUFFER CAPSLOCK NUMLOCK SCROLLLOCK

    Assembler source for KBFIX.COM, a resident program which provides a 127
    character keyboard buffer, on-screen display of the status of the caps-,
    num- and scroll-lock keys, and some fixes for minor but annoying dos
    features.  See the beginning of the file for more information.

```
{% endraw %}

## L4.ASM

{% raw %}
```
Title	LIST --- Display contents of ASCII file
	Page	80,132

	Comment |	Version 1.4, April 26, 1984.	|


Bios	Segment At 40h			;DOS data area
	Db	16 Dup (?)
Flag	Dw	?			;Hardware features
	Db	56 Dup (?)
Cols	Dw	?			;Columns on screen
	Db	23 Dup (?)
A6845	Dw	?			;Base addr for active card
Bios	Ends


Cseg	Segment Para Public 'CODE'
	Assume	CS:Cseg,DS:Cseg,ES:Nothing
	Org	100h
List	Proc	Far
	Mov	DX,Offset Stackx	;Local stack
	Mov	SP,DX
	Push	DS			;Standard linkage
	Xor	AX,AX			; for DOS return
	Push	AX
	Mov	AH,30h			;Check for
	Int	21h			; DOS 2.0 or later
	Cmp	AL,2
	Jb	TooBad
	Jmp	Start

TooBad: Mov	DX,Offset Sorry 	;Say Version 2 required
	Mov	AH,9
	Int	21h
	Ret
	Page
;	Constants and work areas

Special Db	09h			;Attribute for attention
Normal	Db	02h			;Normal display attribute
Foregrd Db	07h			;Fill attribute

CR	Equ	0Dh
LF	Equ	0Ah
EOF	Equ	1Ah
Eor	Equ	1			;End-of-record
Nodata	Equ	2			;null record

Crt_Col Dw	0			;Columns for display monitor
Crt_Buf Dw	0			;Addr of display buffer
Crt_Prt Dw	0			;Addr of display port

Index	Dw	0			;Current record address
Reclen	Dw	0			; length
Row	Db	2			; display row
Col	Db	1			; display column
Attr	Db	02h			; screen attribute
Blknum	Db	0			; block number
Scroll	Dw	0			;Scroll left/right amount
First	Dw	0			;Ptr to top line on screen
Current Dw	0			;Ptr to top after UP one
Last	Dw	0			;Ptr to last record

Recaddr Dw	0			;addr of i/o buffer
Handle	Dw	0			;File handle from open
Psize	Dw	16			;Size of a paragraph
Blksize Dw	0			;File read size

Switch1 Db	0
Switch2 Db	0
Numlf	Db	1			;line feed count
Numcr	Db	0			;C/R count

TextMax Db	32			;Keyboard buffer
TextLen Db	0
TextBuf Db	32 Dup (0)		;Scan text

Prompt	Db	'Command:'
Spaces	Db	32 Dup (32)		;Scan text entered
	Db	'Keys: PgUp PgDn Arrows ESC=exit ?=Help '
Pr_Len	Equ	This Byte - Prompt

TextMsg Db	'*** Text not found ***'
EofMsg	Db	'   *** End-of-file ***'
EofLen	Equ	This Byte - EofMsg

Work	Db	'LIST'                  ;current logical record
Keyin	Db	64			;keyboard buffer size
Keyout	Db	0			; and length read
Filenm	Db	74 Dup (0)		;d:path\filename.ext
FilDate Db	'xx-xx-xx '             ;file creation date, later

Askfile Db	13,10,'Enter filename: $'
Openmsg Db	'  Open failed, return code='
Opencod Dw	'00'
	Db	'$'
Code2	Db	'File not found $'
Code3	Db	'Path not found $'
Code4	Db	'Too many files $'
Code5	Db	'Access denied  $'
Sorry	Db	Cr,Lf,'Sorry, DOS 2.0 or later required',Cr,Lf,'$'
	Org	Offset Work+256
Workx	Equ	$-Work
Stack	Db	64 Dup (0)		;may overlay above constants
Stackx	Equ	$

	Page
; Command letters and keys

What1	Db	13,32,27,81	;Cr,Sp,Esc,Q
	Db	68,85,63,72	;D,U,?,H
	Db	47,82,76,84	;/,R,L,T
	Db	80,65,78,88	;P,A,N,X
	Db	66		;B
Num1	Equ	$-What1 		;Number of letters

What2	Db	77,75,73,81	;->,<-,PgUp,PgDn
	Db	71,72,61,80	;HOME,^,F3,v
	Db	59,68,79,119	;F1,F10,END,^HOME
	Db	115,132,118	;^<-,^PgUp,^PgDn
Num2	Db	$-What2 		;Number of control keys

Where1	Dw	Offset NxtPage,Offset NxtPage,Offset Close, Offset Close
	Dw	Offset NxtPage,Offset Back,   Offset Got_H, Offset Got_H
	Dw	Offset Got_S,  Offset Right,  Offset Left,  Offset Top
	Dw	Offset Up1,    Offset Got_Rs, Offset Down1, Offset Close
	Dw	Offset Bottom

Where2	Dw	Offset Right,  Offset Left,   Offset Back,  Offset NxtPage
	Dw	Offset Top,    Offset Up1,    Offset Got_Rs,Offset Down1
	Dw	Offset Got_H,  Offset Close,  Offset Bottom,Offset Home
	Dw	Offset Scroll0,Offset Top,    Offset Bottom
	Page
HelpMsg Db	CR,LF,LF
	Db	9,'LIST 1.4 by Vern Buerg',CR,LF,LF
	Db	9,'Commands and keys:',CR,LF
	Db	CR,LF,9,'Enter        ',9,9,'continue to next page'
	Db	CR,LF,9,'ESCape or F10',9,9,'terminate'
	Db	CR,LF,9,'HOME or T    ',9,9,'restart from Top of file'
	Db	CR,LF,9,'END or B     ',9,9,'skip to Bottom of block'
	Db	CR,LF,9,'PgDn or D    ',9,9,'scroll Down one page'
	Db	CR,LF,9,'PgUp or U    ',9,9,'scroll Up one page'
	Db	CR,LF,9,'H or ?       ',9,9,'list Help for keys'
	Db	CR,LF
	Db	CR,LF,9,'left-arrow   ',9,9,'scroll Left 20 columns'
	Db	CR,LF,9,'right-arrow  ',9,9,'scroll Right 20 columns'
	Db	CR,LF,9,'up-arrow     ',9,9,'Previous, up one line'
	Db	CR,LF,9,'down-arrow   ',9,9,'Next, down one line'
	Db	CR,LF
	Db	CR,LF,9,'/text        ',9,9,'find text'
	Db	CR,LF,9,'A or F3      ',9,9,'find text Again'
	Db	'$'

	Page
;	Initialization

Start:	Mov	BX,PgmSize		;Length of Cseg and Stack
	Mov	AH,4Ah			;Modify allocated memory
	Int	21h			; using ES from entry

	Call	GetParm 		;Get filename from command line
Openit: Call	Open
	Jz	Init
	Ret

Close:	Mov	BX,Handle		;End of job
	Mov	AH,3Eh			;Close a file handle
	Int	21h

	Mov	AX,0600h		;Clear the screen
	Sub	BL,BL
	Mov	BH,Foregrd
	Sub	CX,CX			;Screen begin
	Mov	DX,184Fh		; and end
	Int	10h
	Ret				;Return to DOS

	Page
; Allocate memory for file buffer
Init:	Mov	BX,1000h		;Try for 64K more
GetMem: Mov	AH,48h			;Allocate memory
	Int	21h
	Jc	GetMem			;Get what there is

	Mov	RecAddr,AX		;Save segment addr
	Mov	AX,BX			;Paragraphs available
	Sub	AX,32			; less one sector
	Mul	Psize			; as bytes available
	Mov	Blksize,AX		; and as file read size

	Call	InitCrt 		;Get CRT buffer constants

	Call	Set1			;Display title line

	Call	Set25			;Display prompt line


	Page
; Extract next logical record for display

Read1:	Call	ReadBlk 		;Load next block
	Mov	BL,Normal
	Mov	Attr,BL
	Jnz	Read2
	Jmp	AtEnd

Read2:	Dec	Row			;Spot for incomplete record
	Cmp	Numlf,0 		;record ended in LF?
	Je	GetNext 		;no, have col/row
	Inc	Row			;yes, row stays where it is
	Mov	Col,1			; and in column 1

GetNext:
	Mov	AX,Index		;Is record in buffer?
	Cmp	AX,Last
	Jb	GotNext
	Jmp	AtEnd
GotNext:
	Call	ListOne 		;Display next logical record
	Mov	CX,Reclen
	Add	Col,CL			;For end-of-block
	Mov	DH,Row
	Cmp	DH,25			;Exceeded screen?
	Jne	TestEor 		; no, read next record
	Cmp	NumLF,0 		;Ended in LF?
	Jne	Wait

TestEor:Test	Switch1,Eor		;End-of-records?
;	Jz	Read2			; no, get next logical record
;	Jmp	Read1			; yes, read next block
 Jmp Read2

Wait:	Mov	AH,0			;Wait and read console
	Int	16h

	Mov	SI,Offset Spaces	;Clear prompt line
	Call	Msg25
	Page
; Process keyboard (command) input

	Cmp	AL,27			;ESCape to exit?
	Jne	Chk00
	Jmp	Close

Chk00:	Cmp	AL,0			;Control char?
	Jne	Chk_97			; no, a letter
	Xchg	AL,AH			; yes, get extended code
	Mov	DI,Offset What2
	Mov	BP,Offset Where2
	Mov	CL,Num2
	Jmp	Short Control

Chk_97: Cmp	AL,97			;Lower case?
	Jl	Upper
	Sub	AL,32			;Yes, make upper

Upper:	Mov	DI,Offset What1 	;Letter table
	Mov	BP,Offset Where1	;Where-to-go list
	Mov	CL,Num1 		;Number of entries

Control:Mov	SI,DI			;Find letter/code
	Mov	CH,0			;Number in list
	Push	DS
	Pop	ES
	Repnz	Scasb
	Jne	Wait			; if not found
	Dec	DI			;Point to letter/code
	Sub	DI,SI			;Offset into list
	Shl	DI,1			; times word size
	Mov	BX,Word Ptr DS:[DI][BP]
	Jmp	BX			;Go to routine

Right:	Cmp	Scroll,220		;right arrow
	Jb	Got77
	Jmp	Wait
Got77:	Add	Scroll,20
	Jmp	BackUp

Scroll0:Mov	Scroll,0		;ctrl-left-arrow
	Jmp	BackUp

Left:	Cmp	Scroll,0		;left arrow
	Jne	Got75
	Jmp	Wait
Got75:	Sub	Scroll,20
	Jmp	BackUp

Got_Rs: Call	ReScan			;F3 for re-scan
	Jmp	NxtPage

Got_H:	Call	Help			;List key functions
	Call	Back1
	Jmp	Wait

Got_S:	Call	Scan			;Find text
	Jmp	NxtPage

	Page
NxtPage:				;Advance to next "page"
	Mov	AX,Index
	Cmp	AX,Last 		;At end of file?
	Jae	BWait
	Mov Current,AX
	Mov	DH,2			;Restart at row 2
	Mov	Row,DH
	Call	Clear			;Clear screen
	Jmp	TestEor
	Page
; Scroll up one line

Up1:	Cmp	First,0 		;Already at top?
	Jne	Up12			; no, scroll up one more
Bwait:	Jmp	AtEnd			; yes, ignore it

Up12:	Call	Scroll_Up		;Display down one line
	Mov	AX,Index		; to empty top line
	Mov	Current,AX		;Save bottom line ptr
	Mov	AX,First
	Mov	Index,AX
	Call	UpOne
	Mov	Row,2
	Mov	Col,1
	Call	ListOne
	Mov	AX,Current
	Mov	Index,AX
	Call	UpOne
	Jmp	Wait

Home:	Mov	Index,0 		;Restart from top of block
	Jmp	NxtPage


AtEnd:	Mov	SI,Offset EofMsg	;say End-of-file
	Call	Msg25
;	Call	Back1
	Jmp	Wait

Bottom: Mov	AX,Last 		;Position to last record
	Mov	Index,AX
	Jmp	BackUp

Top:	Sub	CX,CX			;Restart
	Mov	AL,0			; from beginning
	Sub	DX,DX
	Mov	AH,42h			;Reposition file
	Mov	BX,Handle
	Int	21h
	Call	Clear
	Mov	Row,2
	Mov	Col,1
	Mov	First,0
	Mov	Blknum,0
	Jmp	Read1

; Scroll Up one page

Back:	Call	Back1			;Back up to top of page
BackUp: Call	Back1			; or to previous page
	Jmp	Nxtpage

; Scroll down one line

Down1:	Mov	AX,Index		;Current line
	Cmp	AX,Last 		;At end of file?
	Jb	Down2
	Jmp	AtEnd

Down2:	Mov	Current,AX
	Mov	AX,First
	Mov	Index,AX
	Call	GetRec			;Set new first ptr
	Mov	AX,Index

Down3:	Call	Scroll_Dn		;Move display up one line
	Mov	AX,Index
	Mov	First,AX
	Mov	AX,Current
	Mov	Index,AX
	Mov	Row,24
	Mov	Col,1
	Jmp	GetNext

; Scroll Up one page

Back1	Proc	Near
	Mov	CX,23			;Back to current page
Back0:	Call	UpOne
	Loop	Back0
	Mov	Col,1
	Ret
Back1	Endp

; Scroll up one line

UpOne	Proc	Near			;Position to previous line
	Push	CX
	Mov	CX,2
	Cmp	Index,0 		;Already at top?
	Je	Up1d			; yes, no change
Up1a:	Mov	ES,Recaddr		;Buffer start
Up1b:	Mov	DI,Index		;Offset into buffer
	Cmp	ES:Byte Ptr[DI],LF	;A line feed?
	Je	Up1c
	Dec	Index
	Jnz	Up1b			;Out of buffer?
Up1e:	Mov	Index,0 		; yes, stop at top
	Jmp	Up1d

Up1c:	Dec	Index			;Passed CR
	Jz	Up1d
	Loop	Up1b
	Inc	Index			;Skip over LF
Up1d:	Pop	CX
	Ret
UpOne	Endp
	Page
;	Place Records into Screen Buffer

	Assume	CS:Cseg,DS:Cseg,ES:Nothing
Display Proc	Near
	Push	AX
	Push	BX
	Push	CX			;Line length
	Push	DX			;Row,col
	Push	DI
	Push	ES
	Push	SI			;Addr of record

	Sub	AX,AX
	Mov	AL,DH			;get row
	Sub	DH,DH
	Mov	DI,DX			; and column
	Dec	DI			;adjust for zero offset
	Dec	AX
	Cmp	CX,0			;Skip null strings
	Jng	Dsp9
	Cmp	CX,80			;Can only display 80
	Jbe	Dsp1			; cols at a time
	Mov	CX,80

Dsp1:	Mul	Crt_Col 		;AX = row * chars per line
	Add	DI,AX			;DI = chars from start of screen
	Shl	DI,1			;adjust for attribute bytes

	Mov	DX,Crt_Prt		;Addr of card status port
	Mov	ES,Crt_Buf		;Addr of display buffer

	Mov	BH,Attr 		;Display attribute
Dsp2:	Lodsb				;Next character
	Cmp	AL,' '                  ;Don't bother with blanks
	Jae	Dsp3			; or control chars
	Add	DI,2
	Jmp	Dsp4

Dsp3:	Mov	BL,AL			;Char and attr
	Call	Displa
Dsp4:	Loop	Dsp2

Dsp9:	Pop	SI
	Pop	ES
	Pop	DI
	Pop	DX
	Pop	CX
	Pop	BX
	Pop	AX
	Ret

;  Wait for horzontal retrace

Displa: In	AL,DX			;Port status
	Test	AL,1			;Is it low?
	Jnz	Displa			; no, keep checking
	Cli				; yes, turn off interrupts
Disphi: In	AL,DX			;Get status
	Test	AL,1			;Is it high?
	Jz	Disphi			; no, keep checking

	Mov	AX,BX			;Attrib and char
	Stosw				; to display buffer
	Sti
	Ret

Display Endp
	Page
	; Display next logical record

ListOne Proc	Near
	Cmp	Row,2
	Jne	List1
	Mov	AX,Index
	Mov	First,AX		;Ptr to current top line
List1:	Call	GetRec			;Return logical record
	Mov	CX,Reclen		;Record size
	Sub	CL,Numlf		; less LF
	Sub	CL,Numcr		; less CR
	Mov	Reclen,CX
	Or	CX,CX			;blank line?
	Jz	List9			;yes, increment row only

	Mov	SI,Offset Work		;Addr of record
	Cmp	Row,2			;Is row valid?
	Jae	List2
	Mov	Row,2
List2:	Mov	DH,Row			;destination row
	Mov	DL,Col			; and column
	Add	SI,Scroll
	Sub	CX,Scroll
	Call	Display 		;put into screen buffer

List9:	Inc	Row			;Bump to next row
	Mov	BL,Normal		; restore attribute
	Mov	Attr,BL
	Ret
ListOne Endp
	Page

;	GetRec - Extract next logical record
;
; Scan the buffer for special characters and copy wanted
; data to field WORK. A logical record ends in an LF and/or CR.
; Tabs are expanded and x'0F' is deleted.
;

GetRec	Proc	Near
	Push	ES
	Push	CX
	Push	SI
	Push	DI

GetR:	Test	Switch1,Eor		;Found end of file?
	Jz	GetR0
	Mov	AX,Last 		; yes, set ptr to EOF
	Mov	Index,AX
	Call	ReadBlk 		;Try for next block
	Jnz	GetR0
	Jmp	GetRd

GetR0:	Sub	DI,DI			;Record size/output offset
	Mov	Word Ptr NumLF,DI	;zero NUMLF and NUMCR
	And	Switch2,0FFh-Nodata
	Mov	ES,RecAddr		;Set buffer segment addr

GetR2:	Mov	SI,Index		;Current input offset
	Mov	AL,ES:[SI]		;Copy a char
	Cmp	AL,Eof			;End of file?
	Jne	GetR3
	Mov	Reclen,DI
	Or	Switch1,Eor		;Indicate end-of-file
	Jmp	GetR	;;;;;

GetR3:	Cmp	AL,09h			;Is it TAB?
	Jne	GetR4
	Mov	CX,DI			;Current work size
	Add	CX,8			;Round to 8-bytes
	And	CX,0FFF8h
	Sub	CX,DI			;Number of blanks
GetR3b: Mov	Work[DI],' '            ; to insert
	Inc	DI
	Loop	GetR3b
	Inc	Index			;Bump input offset
	Jmp	GetR2			; and get next char

GetR4:	And	AL,7Fh			;Assure readable
	Mov	Work[DI],AL		;Copy character
	Inc	DI			;Incr output offset
	Inc	Index			; and input offset
	Cmp	AL,Cr			;Is it a CR?
	Jne	GetR5
	Inc	NumCR			;Yes, incr count

GetR5:	Cmp	AL,' '
	Je	GetR7
	Cmp	AL,Lf			;Is it line feed?
	Jne	GetR6
	Inc	NumLF			;Yes, incr count
	Jmp	GetR8

GetR6:	Or	Switch2,Nodata		;Non-space found

GetR7:	Cmp	DI,255			;Record too big?
	Je	GetR8			;Chop record at 255 bytes
	Jmp	GetR2

GetR8:	Mov	Reclen,DI
	Cmp	Work,0Fh		;If record begins with "sun"
	Jne	GetR9			; symbol, skip it
	Jmp	GetR0

GetR9:	Test	Switch2,Nodata		;If all blank
	Jnz	GetRd
	Jmp	GetR0			; read another one

GetRd:	Pop	DI
	Pop	SI
	Pop	CX
	Pop	ES
	Ret
GetRec Endp

	Page
; Read a block

ReadBlk Proc	Near
	Mov	Switch1,0		;reset EOR flag
	Mov	BX,Handle		;get file handle from open
	Mov	CX,Blksize		;bytes to read
	Push	DS
	Mov	DS,RecAddr		;addr of gotten memory
	Sub	DX,DX			; with zero offset
	Mov	AH,3Fh
	Int	21H			;read a block
	Pop	DS

	Or	AX,AX			;Any bytes read?
	Jz	ReadB2			; no, return with ZF
	Mov	Last,AX 		; yes, set record pointers
	Mov	Index,0
	Mov	First,0
	Mov	Current,0
	Inc	Blknum
	Mov	DI,Last 		;Append EOF to buffer
	Mov	ES,RecAddr
	Mov	Byte Ptr ES:[DI],1Ah
ReadB2: Ret
Readblk Endp

	Page
	; Scan for text entered after slash (/)
ReScan	Proc
	Push	DI
	Push	SI
	Push	DS
	Pop	ES
	Jmp	Scan1

Scan:	Push	DI
	Push	SI
	Push	DS
	Pop	ES
	Mov	TextMax,32		;Max string length
	Mov	DX,Offset TextMax
	Mov	AH,0Ah			;Read console
	Int	21h

Scan1:	Sub	CX,CX
	Or	CL,TextLen		;Get and test length
	Jz	NoMatch 		; none, return as is
	Mov	AX,First		;Start with current screen
	Mov	Index,AX
	Call	GetRec			;Skip top line

Scan3:	Call	GetRec			;Read next logical record
	Test	Switch1,Eor		;End of data?
	Jnz	NoMatch 		; yes, NOT FOUND
	Mov	AX,Index		;Current record ptr
	Cmp	AX,Last 		;Beyond buffer?
	Jae	NoMatch 		; yes, NOT FOUND
	Mov	CX,RecLen
	Sub	CL,TextLen		;Columns to search
	Jle	Scan3

	Mov	AL,TextBuf		;Scan for first char in record
	Mov	DI,Offset Work		;Current record data
	Repnz	Scasb
	Jne	Scan3			; not found
	Cmp	TextLen,1		;Whole thing done?
	Je	Match
	Sub	CH,CH
	Mov	CL,TextLen		;Search for rest of it
	Dec	CL
	Mov	SI,Offset TextBuf+1
	Repe	Cmpsb
	Jne	Scan3
	Or	CX,CX			;Found it?
	Jnz	Scan3			; no, try next record

Match:	Call	Set25			;Restore prompt line
	Mov	Attr,143		; and blink
	Call	UpOne
	Jmp	Scaned

NoMatch:Mov	AX,First		;Not found,
	Mov	Index,AX		; restart at last page
	Call	Set25			;Restore prompt line

	Mov	SI,Offset TextMsg	;Say TEXT NOT FOUND
	Add	Special,128		;Make it blink
	Call	Msg25
	Sub	Special,128
	Mov	Switch1,0
	Mov	Col,1

Scaned: Pop	SI
	Pop	DI
	Ret
ReScan	Endp
	Page
	; Clear screen or records window

Clear	Proc	Near			;Clear entire screen
	Push	AX
	Push	BX
	Push	CX
	Push	DX

	Mov	AX,0600h
	Mov	BH,Foregrd
	Jmp	Scroller

Scroll_Dn:				;Scroll list window down
	Push	AX
	Push	BX
	Push	CX
	Push	DX

	Mov	AX,0601h
	Mov	BH,Foregrd
	Jmp	Scroller

Scroll_Up:				;Scroll list window up
	Push	AX
	Push	BX
	Push	CX
	Push	DX

	Mov	AX,0701h
	Mov	BH,Foregrd
Scroller:
	Mov	CX,0100h		;Screen begin
	Mov	DX,174Fh		; and end
	Int	10h

	Pop	DX
	Pop	CX
	Pop	BX
	Pop	AX
	Ret
Clear	Endp
	Page
; Set top title line
Set1	Proc	Near
	Mov	AX,0600h		;Clear the screen
	Sub	BL,BL
	Mov	BH,Foregrd
	Sub	CX,CX			;Screen begin
	Mov	DX,184Fh		; and end
	Int	10h

	Mov	Word Ptr Work+4,0000h	;Title in work area
	Mov	DH,1			;Row 1
	Mov	DL,DH			;Column 1
	Mov	SI,Offset Work
	Mov	CX,79			;Length
	Mov	BL,Special		;Hi-intensity or yellow
	Mov	Attr,BL
	Call	Display
	Ret
Set1	Endp

; Set prompt line
Set25	Proc	Near
	Push	DI
	Push	SI
	Mov	DH,25			;set row
	Mov	DL,1			; and column
	Mov	CX,Pr_Len		; length
	Mov	BL,Special
	Mov	Attr,BL
	Mov	SI,Offset Prompt
	Call	Display

	Mov	AH,2			;Set cursor position
	Mov	DX,1808h		; to row 25, col 9
	Mov	BX,0			; page zero
	Int	10H
	Pop	SI
	Pop	DI
	Ret
Set25	Endp

; Display message on prompt line
Msg25	Proc	Near
;	Push	SI			;Ptr to msg text
	Mov	DH,25			;Clear message area
	Mov	DL,10			; its column
	Mov	CX,EofLen		; length
	Mov	BL,Special		;Hi-intensity or yellow
	Mov	Attr,BL
	Call	Display
	Mov	BL,Normal
	Mov	Attr,BL
	Ret
Msg25	Endp

; Initialize display constants
InitCrt Proc	Near
	Push	ES
	Mov	AX,Bios 		;Point to BIOS data
	Mov	ES,AX
	Mov	CX,ES:Cols		;Save display columns
	Mov	Crt_Col,CX
	Mov	DX,ES:A6845		;Save card base addr
	Add	DX,6			; point to status port
	Mov	Crt_Prt,DX
	Mov	Crt_Buf,0B800h		;Default to color card
	Mov	BX,ES:Flag
	And	BX,30h
	Cmp	BX,30h			;Is it mono card?
	Jne	CrtSet			; no, set for color
	Mov	Crt_Buf,0B000h		; yes, point to mono buffer
CrtSet: Pop	ES
	Ret
InitCrt Endp
	Page
; HELP - Display command key usage

Help	Proc	Near			;Describe the commands
	Call	Clear
	Mov	DX,0200h		;Position cursor
	Mov	AH,2
	Sub	BH,BH
	Mov	BL,Foregrd
	Int	10h
	Mov	DX,Offset HelpMsg	;List the text lines
	Mov	AH,9
	Int	21h
	Mov	AH,2			;restore position
	Mov	DX,1808h		; to row 25, col 9
	Sub	BX,BX
	Int	10H
	Ret
Help	Endp
	Page
; Get file name from command line

GetParm Proc	Near
	Xor	AX,AX			;For COM, CS=DS=ES
	Xor	CX,CX
	Mov	AL,Byte Ptr DS:[80h]	;Gather file name from command line
	Or	CX,AX			;Any supplied?
	Jz	GetFile 		;No, ask for it
	Mov	DI,Offset Filenm	;Target file name
	Mov	SI,81h			;Offset to parm in PSP
Blanks: Lodsb
	Cmp	AL,' '                  ;Skip any blanks
	Je	Skipit
	Stosb				;Copy parm to FileNm
Skipit: Loop	Blanks
	Ret

GetFile:
	Mov	DX,Offset AskFile	;Prompt for file name
	Mov	AH,9
	Int	21H
	Mov	AH,0AH			;Buffered kybd input DOS req
	Mov	DX,Offset Keyin
	Int	21h

	Sub	BL,BL
	Or	BL,Keyout		;Number of chars read
	Jz	GetFile 		; none, ask for name
	Mov	Filenm[BX],0		;overlay CR to make ASCIIZ name
	Ret
GetParm Endp

;  Open the file to list

Open	Proc	Near
	Mov	OpenCod,0		;Reset open return code
	Mov	DX,Offset Filenm	;OPEN file
	Mov	AL,0			; for read only
	Mov	AH,3DH
	Int	21H
	Mov	Handle,AX		;save file handle
	Jnc	Opened			;if OPEN okay

	Mov	OpenCod,AX
	Cmp	AL,2			;Check code to be
	Jl	Error			; within our messages
	Cmp	AL,5
	Ja	Error
	Sub	BX,BX			;For message index
	Mov	BL,AL
	Mov	CL,4
	Shl	BX,CL
	Lea	DX,Code2-32[BX] 	;Point to msg text
	Jmp	Error2

Error:	Aam				;Other return codes
	Xchg	AL,AH
	Or	OpenCod,AX
	Mov	DX,Offset OpenMsg

Error2: Mov	AH,9
	Int	21H			;say OPEN FAILED
Opened: Cmp	OpenCod,0
	Ret
Open	Endp

List	Endp

PgmSize Equ	($-Cseg+16)/16		;Program size

Cseg	Ends

	End	List
```
{% endraw %}

## L4.DOC

{% raw %}
```
Command LIST
----------------

 Purpose:  To display the contents of an ASCII file, line by
           line, with operator positioning commands.

 Format:   LIST [d:][path]filename[.ext]

 Remarks:  An ASCII file of any size may be listed.

        On the COMMAND line, enter a letter or control key:-

        Letter(s)       Control key     Function
        -----------     ------------    ------------------------
                        Enter           continue to next page
        Q, X            ESCape          terminate and exit to DOS
        T               HOME            restart from first block (top)
        B               END             skip to end of file (bottom)
        D               PgDn            scroll down one page
        U               PgUp            scroll up one page
        H or ?          F1              list commands (HELP)
        L               left arrow      scroll left 20 columns
        R               right arrow     scroll right 20 columns
        P               up arrow        up one (previous) line
        N               down arrow      down one (next) line

        /text                           find 'text'
        A               F3              find next occurance of 'text'

                        ctl-HOME        restart from CURRENT block
                        ctl-PgUp        restart from first block (TOP)
                        ctl-PgDn        skip to end of file (BOTTOM)
                        ctl-left-arrow  reset scroll to column 1

                        F1              Help
                        F3              Find next
                        F10             Exit

 Restrictions:
        All positioning is relative to the current block in
        storage. The size of the block depends on the amount of
        memory available, up to 64K.

        The maximum record length currently allowed is 255.

        Logical records (ending in LF and/or CR) are placed
        into the DOS screen buffer - mono or color display.

        PC-DOS Version 2.0 or later is required.

        ANSI.SYS is NOT required.

 Scanning for text:
        To scan for a character string, type a slash (/)
        followed by one or more (up to 32) characters. The
        scan text, but not the slash, is displayed on the
        command line. Only the current block is scanned.

        If the text is found, the line containing it is displayed
        as a blinking line.

        If the text is NOT found, an error message is displayed
        and the display remains unchanged. To scan the next block,
        "page" into it with PgDn or Down, and use F3 to re-scan.

 Screen attributes:
        There are three classes of attributes used. One for
        normal display lines - lines 2 to 24, another for
        special lines - lines 1 and 25, and a third for the
        background color.

        These attributes may be changed by using DEBUG:

         at offset 11C = 09     ;special lines, hi-lighted or lt.blue
         at offset 11D = 02     ;normal lines, green
         at offset 11E = 07     ;background, black - foreground, white

        If these values don't match, you have a different version.
        ----------------------------------------------------------

        Written by Vernon Buerg, April, 1984, for the IBM PC
        using DOS 2.0 and is supplied for public domain use.
        Not for sale or hire.

        Version 1.4, April 27, 1984.

SVSC Librarian comment:  This version strips the high bit from all
  characters.  This provides a normal display of a WordStar file.  If
  you desire to see extended ASCII characters in their true representation
  then either:
        Use DEBUG to NOP the bit mask with:   -E8d1 90 90
  or
        Comment out the And AL,07h after the GetR4 label in the source.


  If you desire to show control characters such as form feeds then either:

       Use DEBUG to make the JAE a JMP with: -E7fc EB
  or

       Comment out the CMP, JAE, ADD & JMP instructions following the
       Dsp2: label.
                                                hs



```
{% endraw %}

## LABEL.DOC

{% raw %}
```
LABEL(1)                MS-DOS PROGRAMMER'S MANUAL                     LABEL(1)


NAME
        label - alter the volume label of a disk

SYNOPSIS
        label newlabel [d]

DESCRIPTION
        Changes the label on the specified drive "d", or on the
        default drive if d is not specified, to "newlabel". If the disk
        already had a label, the time and date of that label are retained.

        Note that volume labels are always exactly eleven characters long.
        Longer labels are truncated; shorter ones are padded with blanks.

MESSAGES

        There are three error messages:

                label: newlabel [d]

        is issued when no arguments, or too many, are supplied.

                label: illegal drive specifier

        is issued when the second argument is not in (A-Z, a-z).

                label: cannot create new label

        is issued when the "create file" bdos function returns an
        error code.

BUGS
        Because the label is created as a file with the "label"
        attribute ON, the name is converted (by MS-DOS) to upper case.

        Only the first character of the "drive" argument is
        used/checked.  This precludes the use of embedded blanks in the
        label altho such labels are OK once written.  VOLSER.COM (SVCS
        017) can create imbedded blank labels but cannot modify an
        existing label.

        As noted, the time/date stamp on the label is NOT updated if
        the volume had a label before. This may not be a bug, actually:
        it tells you when this disk was last checked for bad sectors.

LABEL(1)                MS-DOS PROGRAMMER'S MANUAL                     LABEL(1)


```
{% endraw %}

## LIST.DOC

{% raw %}
```
LIST.COM version 6.0h provides either a screen print or printer listing of
an ASCII file.  To start, use command "LIST" plus the path/name of the
file for display.  Example:  LIST C:\WORK\LETTER when WORK is the path on
drive C and LETTER is the file name.  Press either "H" or "?" to receive
the help screen of available options.

Features include FIND options, window freeze, and screen movement.        

LIST.COM displays one screen at a time of the document viewed.
```
{% endraw %}

## MORSE.BAS

{% raw %}
```bas
10    ' Morse Code Practice Program. Elwood Downey, WB0OEW, August, 1983.
20    ' Written for the IBM PC in Microsoft Basica, V1.1, for PC-DOS V1.1.
30    ' Revised November, 1983, to allow typing in responses.
40    '
50    CLS
60    KEY OFF
70    TYPEWAIT = 200     ' time to wait if user typing in responses
80    F = 600            ' initial tone frequency
90    '
100   GOSUB 1400         ' give directions and ask setup questions
110   '
120   ' initialize code strings.
130   ' to add more characters, such as apostrophe, increase numcodes,
140   ' add code string and character at end of current lists and add case
150   ' to main loop, below.
160   NUMCODES = 41  ' . , / ? - plus 26 + 10
170   DIM CODES$(NUMCODES-1)
180   DIM CHARS$(NUMCODES-1)
190   FOR I=0 TO NUMCODES-1
200     READ CODES$(I)
210   NEXT
220  FOR I=0 TO NUMCODES-1
230    READ CHARS$(I)
240  NEXT
250  ' code strings. in one-to-one correspondence with characters, below.
260  DATA ".-", "-...", "-.-.", "-..", ".", "..-.", "--.", "...."
270  DATA "..", ".---", "-.-", ".-..", "--"
280  DATA "-.", "---", ".--.", "--.-", ".-.", "...", "-"
290  DATA "..-", "...-", ".--", "-..-", "-.--", "--.."
300  DATA "-----", ".----", "..---", "...--", "....-", "....."
310  DATA "-....", "--...", "---..", "----."
320  DATA ".-.-.-", "--..--", "-..-.", "..--..", "-...-"
330  ' characters.
340  DATA "A", "B", "C", "D", "E", "F", "G", "H"
350  DATA "I", "J", "K", "L", "M"
360  DATA "N", "O", "P", "Q", "R", "S", "T"
370  DATA "U", "V", "W", "X", "Y", "Z"
380  DATA "0", "1", "2", "3", "4", "5"
390  DATA "6", "7", "8", "9"
400  DATA ".", ",", "/", "?", "-"
410 '
420 ' set up arrow keys to change speed and frequency.
430 PRINT CHR$(24); " "; CHR$(25); " to raise or lower tone,   ";
440 PRINT CHR$(27); " "; CHR$(26); " for slower or faster code."
450 PRINT "Ctrl-Break to quit, F9 to pause."
460 PRINT
470 ON KEY(11) GOSUB 940: KEY(11) ON
480 ON KEY(14) GOSUB 950: KEY(14) ON
490 ON KEY(12) GOSUB 990: KEY(12) ON
500 ON KEY(13) GOSUB 980: KEY(13) ON
510 ON KEY(9) GOSUB 1140: KEY(9) ON
520 '
530 ' init constants and screen.
540 SIL = 32767         ' special code for no tone
550 GOSUB 1020          ' calculate dit, dah and space lengths.
560 GOSUB 1080          ' display wpm and freq
570 '
580 ' define character type checking functions
590  DEF FNLOWER(C$) = "a"<=C$ AND C$<="z"
600  DEF FNUPPER(C$) = "A"<=C$ AND C$<="Z"
610  DEF FNDIGIT(C$) = "0"<=C$ AND C$<="9"
615  DEF FNTOUPPER$(C$) = CHR$(ASC(C$)-32)
620 '
630 ' main loop. read (or generate) each character, sound it and print it.
640  IF RANFILE THEN GOSUB 1210: ELSE C$ = INPUT$(1,#1)
650  IF " "=C$ OR C$=CHR$(13) THEN GOSUB 890: GOTO 760
660  IF "."=C$ THEN MORSE=36: GOTO 750  ' set morse to codes$ array index
670  IF ","=C$ THEN MORSE=37: GOTO 750
680  IF "/"=C$ THEN MORSE=38: GOTO 750
690  IF "?"=C$ THEN MORSE=39: GOTO 750
700  IF "-"=C$ THEN MORSE=40: GOTO 750
710  IF FNLOWER(C$) THEN C$ = FNTOUPPER$(C$)
720  IF FNUPPER(C$) THEN MORSE=ASC(C$)-ASC("A"):  GOTO 750
730  IF FNDIGIT(C$) THEN MORSE=ASC(C$)-ASC("0")+26: GOTO 750
740  GOTO 770   ' non-morse character so skip it
750  IF TYPE>0 THEN GOSUB 1260: ELSE GOSUB 800  ' wait for type in or sound now
760  PRINT C$;
770  GOTO 640
780 '
790 ' sound dit for each ".", dah for each "-" in string codes$(morse)
800 FOR I=1 TO LEN(CODES$(MORSE))
810   IF MID$(CODES$(MORSE),I,1) = "." THEN GOSUB 900 ELSE GOSUB 910
820 NEXT
830 GOSUB 880
840 RETURN
850 '
860 ' produce elemental sounds, or silences.
870  SOUND SIL,DIT: RETURN      ' element space
880 SOUND SIL,ELE*2: RETURN     ' character space, allow for previous trailing
890 SOUND SIL,ELE*6: RETURN   ' word space, allow for trailing.
900 SOUND F,DIT: GOSUB 870: RETURN        ' dit
910 SOUND F,DAH: GOSUB 870: RETURN        ' dah
920 '
930 ' change frequency of tone
940 F = F*1.104: GOSUB 1080: RETURN
950 F = F/1.104: GOSUB 1080: RETURN
960 '
970 ' change speed; update element timings.
980 WPM = WPM+1: GOSUB 1020: GOSUB 1080: RETURN
990 WPM = WPM-1: GOSUB 1020: GOSUB 1080: RETURN
1000 '
1010 ' calculate element timings. units are clock ticks, which are at 18.2hz.
1020 IF WPM<13 THEN CWPM=13 ELSE CWPM=WPM
1030 DIT = 21.84/CWPM: DAH = 3*DIT
1040 IF WPM>=13 THEN ELE=DIT ELSE ELE=DIT*((CWPM/WPM-1)*13+2)/2
1050 RETURN
1060 '
1070 ' display current speed and frequency. return cursor where it was.
1080 COL=POS(0): ROW=CSRLIN: LOCATE 1,64
1090 PRINT "wpm: "; WPM: LOCATE 2,63: PRINT "freq: "; F; "     "
1100 LOCATE ROW,COL
1110 RETURN
1120 '
1130 ' handle F9, the pause control.
1140 COL9=POS(0): ROW9=CSRLIN
1150 LOCATE 24,30: COLOR 16,7: PRINT " Press any key to continue ";
1160 X$=INKEY$: IF X$="" THEN 1160
1170 LOCATE 24,30: COLOR 2,0:  PRINT "                           ";
1180 LOCATE ROW9,COL9: RETURN
1190 '
1200 ' set c$ to random supported character.
1210 ' force a space every fifth time and a newline every 13 groups.
1220 IF NCHRS=5 THEN C$=" ": NCHRS=0: NGRPS=NGRPS+1: RETURN
1230 IF NGRPS=13 THEN C$=CHR$(13): NGRPS=0: NCHRS=0: RETURN
1240 C$ = CHARS$(RND*(NUMCODES-1)): NCHRS=NCHRS+1: RETURN
1250 '
1260 ' sound character in codes$(morse) and let user type in response.
1270 ' repeat until get it right.
1280 RIGHT=0
1290 WHILE RIGHT=0
1300   GOSUB 800       ' sound out character
1310   N=0
1320   N=N+1: X$=INKEY$: IF X$="" AND N<TYPEWAIT GOTO 1320
1330   IF FNLOWER(X$) THEN X$=FNTOUPPER$(X$)
1340   IF C$<>X$ AND X$<>"" THEN SOUND 2000,2: SOUND SIL,5
1350   IF C$=X$ THEN RIGHT=1
1360 WEND
1370 RETURN
1380  '
1390  ' give info and ask setup questions.
1400  PRINT "              Morse Code Practice Program."
1410  PRINT
1420  PRINT "This program sounds out morse code characters. The characters"
1430  PRINT "may come from a file, from the keyboard, or be generated randomly.
1440  PRINT
1450  PRINT "The program may be used in two ways."
1460  PRINT
1470  PRINT "Characters may be continuously sounded and printed on the screen."
1480  PRINT "This form is good practice for copying code by hand."
1490  PRINT
1500  PRINT "The program may also be used to sound one character at a time,"
1510  PRINT "repeating until the correct character is typed on the keyboard."
1520  PRINT "A high tone indicates an incorrect response. This form is good"
1530  PRINT "practice for typing code."
1540  PRINT
1550  PRINT "At any time while the program is running, the left and right"
1560  PRINT "arrow keys change the code speed and the up and down arrows"
1570  PRINT "change the pitch of the tone."
1580  PRINT
1590  PRINT "Type any key to continue ";
1600  X$=INKEY$: IF X$="" GOTO 1600
1610  CLS
1620  '
1630  ' select input source: either from a file, the keyboard or random.
1640  ' if input is not from keyboard, also ask if want to type in responses.
1650  PRINT "Select source of practice characters. Type:
1660  PRINT "      random    for random characters,"
1670  PRINT "      keyboard  to sound characters typed from keyboard,"
1680  PRINT "      or type a file name from which to read characters: "
1690  INPUT F$
1700  IF F$="keyboard" THEN F$="kybd:"
1710  IF F$="kybd:" THEN TYPE=0: GOTO 1750
1720    INPUT "type in each character in response to sound? (y or n) ", X$
1730    IF LEFT$(X$,1)="y" THEN TYPE=1
1740  IF F$="random" GOTO 1770
1750    RANFILE=0: OPEN F$ FOR INPUT AS #1
1760    GOTO 1780
1770    RANFILE=1: RANDOMIZE VAL(RIGHT$(TIME$,2)): NCHRS=0: NGRPS=0
1780  '
1790  ' select speed
1800  INPUT "words per minute? ", WPM
1810  '
1820  CLS
1830  RETURN
```
{% endraw %}

## NEWBELL.ASM

{% raw %}
```
	page	,132
;NEWBELL 2-24-83 by Jim Keesey, 2945 Sandra Pl., Palo Alto, CA  94303
;	changes 2-25-83 by J. R. Celoni, S.J.
;
;Run after boot to change DOS (not Basic) bell tone and length.

note_length	equ	1311	;length (ms) * 131.072
note		equ	0a98h	;2712 = 1193180. / 440Hz

cseg	segment public 'code'
	assume	cs:cseg,ds:cseg
	org	100h
start	proc	far
	jmp	initial
start	endp

		even
video_io	dd	0

new_bell	proc	near
	sti			;enable
	cmp	ah,0eh		;tty mode?
	jz	nb1		;yes
vid:	jmp	cs:video_io	;goto rom
nb1:	cmp	al,7		;bell?
	jnz	vid		;no, let rom do it

;see IBM Tech. Ref. Man. p. A-18:  BEEP & ERR_BEEP
;
	cli			;MUST disable
	mov	al,0b6h		;sel tim 2,lsb,msb,binary
	out	43h,al		;set up timer chip
	mov	ax,note		;get note
	out	42h,al		;write timer 2 count:  lsb...
	mov	al,ah
	out	42h,al		;...and msb
	in	al,61h
	mov	ah,al		;save current port setting
	or	al,3
	out	61h,al		;turn spkr on
	mov	cx,note_length	;64K = 500 ms
here:	loop	here		;delay
	mov	al,ah
	out	61h,al		;restore port setting
	sti			;enable
	iret
new_bell	endp

initial	proc	near
	cli
	xor	ax,ax
	mov	ds,ax		;address interrupts
	mov	si,40h		;int 10h:  video_io
	lea	di,video_io
	mov	cx,2
	rep movsw		;save old trap loc
	mov	si,40h		;int 10h
	lea	ax,new_bell
	mov	word ptr [si],ax	;store new trap loc...
	mov	word ptr [si+2],cs	;...& code seg
	lea	dx,initial
	inc	dx		;one past last byte needed
	int	27h		;terminate & stay resident
initial	endp

cseg	ends
	end	start
```
{% endraw %}

## OLDER.ASM

{% raw %}
```
;
; Program to compare the ages of two files.
; 	
; Dan Tappan, BBN, 2/22/84
;
; To build
; MASM OLDER;
; LINK OLDER;
; EXE2BIN OLDER.EXE OLDER.COM
;
; Usage
;	OLDER <file1> <file2>
; Return value is 1 if <file1> is older than <file2>,
; 0 if <file1> is newer (or if <file2> doesn't exist)
;
	TITLE OLDER

SPACE	EQU	32			; SPACE CHARACTER

CODE	SEGMENT PARA
ASSUME	CS:CODE
	ORG	80H			; COMMAND LINE
CMDLINE	LABEL	BYTE	

	ORG	100H
OLDER	PROC	FAR

	MOV	AX,CS			; MAKE SURE DS SETUP
	MOV	DS,AX
	ASSUME	DS:CODE

	MOV	SI,OFFSET CMDLINE+1	; POINT TO START OF BUFFER
	MOV	CX,0
	MOV	CL,CMDLINE		; GET THE STRING LENGTH
	
	CALL	GETWORD			; GET A PARAMTER
	PUSH	DI			; SAVE IT
	CALL	GETWORD			; GET ANOTHER
	CALL	GETDATE			; GET THE FILE DATE
	POP	DI			; GET NEXT STRING
	PUSH	CX			; SAVE TIME
	PUSH	DX			; AND DATE
	CALL	GETDATE			; GET DATES FOR OTHER
	POP	AX			; DATE FROM SECOND FILE
	POP	BX			; TIME FROM SECOND
	CMP	AX,DX			; COMPARE TO FIRST
	JB	OLD0			; FIRST IS NEWER
	JA	OLD1			; FIRST IS OLDER
	CMP	BX,CX			; COMPARE TIMES
	JB	OLD0			; FIRST IS NEWER
; FIRST FILE IS OLDER, RETURN 1
OLD1:	MOV	AL,1
	JMP	OLDX			; LEAVE
; FIRST FILE IS NEWER, RETURN 0
OLD0:	MOV	AL,0			
OLDX:	MOV	AH,4CH			; RETURN WITH STATUS
	INT	21H
OLDER	ENDP

;
; GETDATE - GET A FILES DATE
; CALLED
;	DI/	POINTER TO NAME STRING
; RETURNS
;	DX/	DATE
;	CX/	TIME
;
GETDATE	PROC	NEAR
	MOV	DX,DI			; POINT TO STRING
	MOV	AH,3DH			; OPEN A FILE
	MOV	AL,0			; FOR READING
	INT	21H			; GET HANDLE
	JC	NOFILE			; ERROR RETURN
	MOV	BX,AX			; HANDLE
	MOV	AL,0			; GET DATE
	MOV	AH,57H			; FUNCTION CODE
	INT	21H			; DO IT
	JMP	GOTDATE			; RETURN THE VALUE
; HERE IF FILE DOES NOT EXIST
NOFILE:	MOV	CX,0			; RETURN VALUE OF 0
	MOV	DX,CX			; ..
GOTDATE:
	RET
GETDATE	ENDP

;
; GETWORD - GET A PARMETER FROM THE COMMAND LINE
; CALLED 
;	SI/	START OF LINE (MAY HAVE LEADING SPACES)
;	CX/	SIZE OF STRING
; RETURN
;	DI/	START OF WORD (NULL TERMINATED)
;	SI,CX/	UPDATED
;
GETWORD	PROC	NEAR
	CLD				; DIRECTION IS FORWARD

	PUSH	SI			; SAVE START OF STRING
	PUSH	CX			; AND INITIAL COUNT

	MOV	BX,CX			; MAKE SURE PROPERLY TERMINATED
	MOV	AL,SPACE		; CODE TO SCAN FOR
	MOV	BYTE PTR [BX+SI],AL	; WITH A SPACE

	MOV	DI,SI			; START OF STRING
	CMP	CX,0			; ANY STRING LEFT?
	JLE	GETWX			; RETURN NULL STRING

	REPE	SCASB			; SKIP SPACES
	CMP	CX,0			; FOUND?
	JLE	GETWX			; AGAIN NULL STRING
	NOT	CX			; PREVENT STOPPING
	DEC	DI			; BACKUP TO START OF STRING
	PUSH	DI			; SAVE THE START
	REPNE	SCASB			; SCAN FOR END OF WORD
	DEC	DI			; POINT TO THE SPACE
	MOV	SI,DI			; UPDATE SI
	POP	DI			; REMEMBER START OF STRING

GETWX:	MOV	BYTE PTR [SI],0		; NULL TERMINATE STRING
	INC	SI			; POINT TO NEXT
	POP	CX			; GET INITIAL COUNT
	POP	BX			; INITIAL SI
	SUB	BX,SI			; GET DIFFERENCE
	ADD	CX,BX			; UPDATE COUNT
	RET
GETWORD	ENDP
CODE	ENDS
	
	END OLDER
```
{% endraw %}

## PURGEDUP.DOC

{% raw %}
```
Instructions for PURGEDUP.COM                24 MAR 84

(C) 1984 by Hal Sampson


PURGEDUP is used to reclaim diskette or hard disk space taken
up by obsolete backup copies of files.  It deletes all files
on the first drive or directory (directory_to_Purge) which
also appear in the second drive or directory (Master_directory):

        purgedup a: b:
        purgedup \purged \master

Only copies of files with date and time less than or equal to
those of the Master version will be removed.  Thus the use of
PURGEDUP is quite safe if you have a clock board or use DDATE.COM
in your AUTOEXEC.BAT files.  (Beware, however, that WASH.COM uses
the present date when copying files.)

PURGEDUP will not remove the system files IBMBIOS.COM, IBMDOS.COM,
and COMMAND.COM unless you specifically request it to with the
/s switch:

       purgedup a: b: /s

This causes hidden, read-only, and system files to be included in
the search for duplicate or older versions of files also on drive b:
to be purged from drive a:.

For a quick reminder of the syntax, type PURGEDUP with no parameters.

PURGEDUP requires DOS version 2.0 or later.
```
{% endraw %}

## PX.DOC

{% raw %}
```
                   PX Procedure Cross Referencer
                    User's Guide for Ver. 1.00
                          April 27, 1984

 PURPOSE

 In the process of writing large assembler programs, it sometimes
 becomes difficult to keep track of where procedures (subroutines)
 are located and of where they are referenced (called).  Typically,
 the programmer will include a prologue for each procedure, listing
 the procedures it calls and the procedures from which it is
 called.  Unfortunately, this practice requires the programmer
 to update the procedure prologue every time a new call to it
 is added; this can get pretty tedious for a large program, and
 (also typically) the programmer's good intentions fall by the
 wayside as the program gets larger.

 PX is a procedure documenter.  It allows you to print out all
 of the procedure prologues in a "dictionary" and to then print
 a cross reference of all procedural calls;  i.e., a listing
 of which procs call which procs.  It just makes life a little
 easier.


 WHAT YOU NEED

 You need one or more disk drives, at least 128K of memory, and
 DOS 2.00 or later.  A printer would be nice, but it's not a
 requirement.  PX is designed to understand files written for
 the Microsoft Assembler: IBM's ASM or MASM, or Microsoft Version
 1.25.  With some restrictions, PX will also work with files
 written for Digital Research's RASM-86.


 OUTPUT FORMAT

 PX's output (which can be sent to disk, screen, printer, or
 any other device) is in two parts.  The first part is the procedure
 dictionary; it is simply the text of your procedure prologues,
 preceded by the name of the procedure and the file/line where
 the prologue was found.  The dictionary looks like this:

   PX 1.00 Procedure Dictionary           Date  Time  Page 1

   MYPROC [File THISFILE.ASM at 50]
   ; This is the procedure prologue for MyProc...
   ; It contains whatever you put in it

   VERYSLICK [File THISFILE.ASM at 70]
   ; And this is the prologue for proc VerySlick...
   ; And so on...


                                                                      2
                     ==== PX User's Guide ===

 The second part is the procedure cross reference.  It is formatted
 like this:

   PX 1.00 Procedure Cross Reference      Date  Time  Page x

   Proc MYPROC                 Near in THISFILE.ASM at 56 [1]
   DUMB_PROC GREAT_PROC PROC1 PROC2 VERYSLICK

   Proc VERYSLICK              Far  in THISFILE.ASM at 75 [1]
   PROC6

 The first line of each entry names the procedure, and specifies
 its near/far attribute and the file and line where it was found.
 The number in brackets is the dictionary page where the procedure's
 prologue is printed.  The second and subsequent lines of each
 procedure entry comprise an alphabetical list of procedures
 which contain calls to the named proc.  For example, procedure
 MYPROC is called by DUMB_PROC, GREAT_PROC, PROC1, PROC2, and
 VERYSLICK.

 Note that the line numbers in the dictionary and cross reference
 sections may differ.  In the dictionary, the line number is
 the line where the prologue was found; in the cross reference,
 it is the line where the PROC statement was found.

 At the end of each report, PX will print a line like:

      UnDef: 2   UnRef: 6   Use Factor: 12.1%

 This indicates that PX found calls to 2 procedures that it knew
 nothing about (Undefined), and 6 procedures were defined but
 unreferenced (nobody CALLed them [uncalled for procedures?]). PX
 used about 12.1% of its available table space.


 INCLUDE FILES

 PX processes include files as it encounters them in the source
 files.  However, it will read a given include file only once.
 For example, if you are processing multiple source files, and
 they each INCLUDE the file "MACLIB.ASM", PX will read MACLIB
 only the first time.


 DEFINING PROCEDURE PROLOGUES

 If PX is to be able to print a "dictionary" of procedure prologues,
 it must be able to find the prologues in the source code.  For
 this purpose, PX understands two keywords in your file:  "DICT"
 and "ENDD". You need to bracket your prologues with this pair
 (in comments of course):


                                                                      3
                     ==== PX User's Guide ===

      ;Dict MyProc

      ; --------------------------
      ; Procedure MyProc
      ; Entry conditions:
      ;   ...
      ; Exit conditions:
      ;   ...
      ; --------------------------
      ;EndD
      MyProc proc near
      ...

 When PX reads the file containing the above "code", it will
 print out everything between "Dict MyProc" and "EndD".  It doesn't
 make any difference how you capitalize the two keywords, but
 they MUST begin in the first column after the semicolon.  That
 is, this won't work:

      ;  dict myproc

 The procedure name must follow the DICT keyword;  this enables
 PX to match up procedure CALLs with the dictionary page where
 the prologue appears.


 RUNNING PX

 The basic syntax for invoking PX is as follows:

      PX {infile} {/command}

 The infile(s) specify which assembler source files you want
 PX to read.  For example,

      PX thisfile thatfile

 would read the files "thisfile" and "thatfile", prepare a procedure
 dictionary and cross reference (hereinafter Xref), and display
 the results.  If PX cannot find a file called "thisfile" it
 will search for "thisfile.asm" before it gives up.  You can
 specify up to twenty parameters (input files and commands) on
 one command line.

 The commands are as follows:

      /o=filename    Specifies an output file
      /i=filename    Specifies a command file
      /s=filename    Specifies a "skip" file
      /p=nn:nn       Set output page length:width
      /x             Prepare Xref only
      /d             Prepare dictionary only


                                                                      4
                     ==== PX User's Guide ===

 The commands are entered on the DOS command line and are always
 preceded by a slash (/); PX assumes that anything without a
 slash is an assembler source file to be processed.  Here is
 an example of a command line with options:

      PX thisfile thatfile /x /p=66:132 /o=prn

 This PX run will process the files "thisfile" and "thatfile";
 it will produce only an Xref (no dictionary); it will format
 output for pages with 66 lines of 132 characters each; and the
 output will go to the system printer.  We'll now cover each
 of the commands in turn.  (Commands and files may be specified
 on the command line in any order, by the way.)


 OUTPUT FILE SELECTION (/O)

 The /o command tells PX where to send its report.  Any valid
 device that is defined for output to DOS is OK:

      /o=prn    /o=lpt1   /o=com1   /o=con    /o=nul

 You may also send output to a file:

      /o=a:zapdict.txt    /o=crossref

 Due to a compiler restriction, path names cannot currently be
 used in ANY file specifications (input, output, or command).

 Output defaults to console if no /o command is given.


 COMMAND FILE SELECTION (/I)

 PX command lines can be quite long if they contain multiple
 source files and options; it is quite easy to exceed the maximum
 length of a DOS command line (about 160 or so characters).
 It would also be nice to avoid repetitive typing if you are
 going to be using PX a number of times on the same assembler
 project.  Fortunately, PX can obtain its commands from a standard
 DOS text file known as a command file.

 The /i command tells PX to look in a text file for further commands.
 For example, the command "/i=zap.px" tells the program to look
 for additional commands in a file called "zap.px".  (The format
 of command files is detailed later.) If there is no extension
 on the specified command file name and PX cannot find a file
 with that name, it will append ".px" and try again.  For example,
 "/i=zap" would find the file "zap.px" if "zap" did not exist.

 The "i" in "/i", by the way, stands for "input commands".  The
 more logical "/c" is reserved for a future command.

                                                                      5
                     ==== PX User's Guide ===



 SKIP FILES (/S)

 PX is interested only in procedures, their prologues, and their
 calls.  It is not interested in macros, data definitions, or
 long files full of equates.  If such files are INCLUDEd in your
 source, you can instruct PX to ignore them with a /s command.
 For example, the command "/s=equates.asm" tells PX to ignore
 the statement "include equates.asm" in the source.  This can
 save you considerable processing time in large projects.


 PAGE SPECS (/P)

 You can specify the length and width of the output medium with
 the /p option.  The format is

      /p=length:width

 Either parameter may be missing. Examples:

      /p=66:132      Set length=66 lines, width=132 cols
      /p=:40         Set width=40
      /p=120         Set length=120

 PX defaults to a page of length 66 and width 80.  It skips about
 6 lines at the end of each page.  Limits: 20 <= length <= 200;
 40 <= width <= 240.


 XREF/DICT ONLY (/X and /D)

 In some cases you may wish to skip either the dictionary or
 the Xref portion of the report.  A "/x" command tells PX to
 print ONLY the Xref; "/d" prints ONLY the dictionary.  Specifying
 BOTH /x and /d is silly, and PX will tell you so.


 COMMAND FILE FORMAT

 Command files are simply DOS text files containing lists of
 PX commands and input files.  You can put as many files/commands
 as you want on each line, separated by commas, space, or tabs.
 The semicolon specifies a comment, just as in MASM; anything
 after a semicolon will be ignored.  Here is an example of a
 command file:



                                                                      6
                     ==== PX User's Guide ===

      ; ----- PX command file for ZAP program
      /p=66:132                     ; Pagesize = 66x132
      zap, edit, display, diskio    ; Input files
      /s=equates, /s=maclib.mac     ; Skip file
      /o=zap.ref                    ; Output to "zap.ref"

 There is one restriction on command files: they cannot be nested.
 That is, a command file cannot contain a "/i" command.

 When PX has completed processing a command file, it returns
 to the command line if there are more parameters.  For example,

      PX  /x  /i=cmdfile.px  /i=cmdfile2.px  /s=xtrafile

 is perfectly OK.


 QUICK PRINCIPLES OF OPERATION

 PX works by scanning for two assembler reserved words: PROC
 and CALL.  When it encounters a PROC statement, it sets up a
 table entry for the named procedure; when it encounters a CALL
 statement, it looks for the CALLed label in the procedure table.
 If no entry is found, a new entry is created and PX waits for
 a later definition.

 A few situations will cause problems for PX:

      o Table-driven calls.  If you set up a table of routines
           to be called and execute the call via CALL [BX] or
           some such, PX can't know what's being called.  The
           call is ignored.

      o Calls to labels not defined via PROC statements (e.g.,
           CALL LABEL, where LABEL is defined "LABEL:" rather
           than "LABEL PROC NEAR").  PX creates a table entry
           for the label, but cannot find a definition.  This
           results in an undefined procedure.

      o Jumps to procedures. If a procedure is JuMPed to rather
           than CALLed, PX will not find the reference.

 Note, however, that PX will create a table entry when it encounters
 a ";DICT procname" directive.  You may be able to use this to
 overcome the second problem above.  (This also allows you to
 use PX with RASM-86, which has no PROC statement or equivalent.)
 When a table entry is defined only by a DICT directive, PX will
 not know whether it is NEAR or FAR.



                                                                      7
                     ==== PX User's Guide ===

 LIMITS, RESTRICTIONS, AND QUIRKS

 On a 128K machine, PX has about 63K available for storage of
 the procedure and reference tables.  This is plenty for all
 but the largest projects.  For example, I have used PX on a
 program consisting of 16 files totaling more than 110K of source;
 only about 11% of the available memory was used.  PX is compiled
 using the small memory model (for execution speed), so larger
 amounts of RAM do not increase the available storage.

 PX allows for a maximum of 40 files of any type that it keeps
 track of: source files, include files, and skip files.

 Regrettably, PX does not, at this point, understand the COMMENT
 directive in assembler source.  It will scan anything between
 COMMENT delimiters; if the keywords PROC or CALL appear in the
 comments, you may find some strange results in the cross refer-
 ence. (PROCs or CALLs in procedure prologues are OK.)

 The current version of the C compiler used does not permit path
 names in file specifications.  This should be corrected shortly.

 Due to a compiler oddity, commas cannot be used as command line
 parameter separators; use spaces or tabs.  Commas are OK in
 command files, however.


              ---------------------------------------

                          The PX program
                       and this document are
                       Copyright (C) 1984 by

                      Christopher J. Dunford
                     10057-2 Windstream Drive
                     Columbia, Maryland 21044

 -- who hereby authorizes you to use PX for your own private,
 noncommercial use.  You may copy PX for others, but you may
 not charge for the copies or for the use of the program or for
 anything else connected with the PX program, in any manner,
 whatsoever.  Please do not alter or bypass the notice displayed
 at program startup.  You will find it to be unobtrusive and
 in good taste.

 -- and who welcomes your comments, criticisms, suggestions,
 or bug reports (provided they are also unobtrusive and in good
 taste), directed to the above address or to CompuServe 71076,1115.
 He will also accept phone calls, as long as West Coast people
 exercise restraint and recognize that 11PM PST is not a good
 time to call the East Coast.

```
{% endraw %}

## SCREEN.BAS

{% raw %}
```bas
10 ' DEMONSTRATION PROGRAM TO CALL SUBROUTINE GENIN
14 ' *********************************************************************
20 KROW%=10:KCOL%=3
30 KLEN%=30
40 KTYP$="A"
45 CLS:LOCATE KROW%,1,1:PRINT ">";
50 GOSUB 10020
60 PRINT
70 PRINT
80 PRINT ":"+INP.STR$+":";" RTRN%:";RTRN%
90 STOP:GOTO 45
95 ' AT THIS POINT YOU CAN CHANGE THE VALUES OF KROW, KLEN, KCLO, OR KTYP AND
96 ' TYPE "CONT"
99 '
10000 ' Subroutine: GENIN                 Author: Kenneth D. Crebs
10001 '
10002 ' ========== Generalized Screen Input Subroutine ===========
10005 '
10006 '  Inputs:                                 DEFAULTS
10007 '         KROW%  = Row Input Starts    -  Current Row
10008 '         KCOL%  = Column Input Starts -  Current Column
10009 '         KLEN%  = Length of Input     -  80-KCOL%
10010 '         KTYP%  = Data Type of Input  -  (A)lphanumeric
10011 '         KSIGN% = Allow Minus Sign    -  Not allowed (=0)
10012 '  Outputs:
10013 '         INP.STR$ =  Holds Data Entered (In String Format)
10014 '         INP.INT% =  If KTYP$=I,Holds Data Entered (In Integer Format)
10015 '         INP.REL! =  If KTYP$=R,Holds Data Entered (In Real Format)
10016 '         RTRN%    =  0 - Nothing Entered, <Enter> Pressed
10017 '                  =  1 - Data Entered, <Enter> Pressed
10018 '                  =  9 - <Esc> Pressed
10019 '
10020 IF KROW%<1 OR KROW%>25 THEN KROW%=CSRLIN
10030 IF KCOL%<1 OR KCOL%>80 THEN KCOL%=POS(0)
10040 IF KLEN%<1 OR KLEN%>(80-KCOL%) THEN KLEN%=80-KCOL%+1
10050 DE%=-1:SE%=1:INP.STR$=SPACE$(KLEN%):GOTO 10070
10060 ' SOUND 400,4   'BEEP when past end
10070 COLOR 15,0,0:LOCATE KROW%,KCOL%,1,0,7
10080 CS$=INKEY$:IF CS$= "" THEN 10080
10090 KPTR%=POS(0)   ' Current Cursor POSition
10095 IF KPTR%<KCOL% THEN KPTR%=KCOL%  ' This line needed in case of      <Ctrl><Break>
10100 IF CS$>CHR$(31) THEN 10160
10110 IF CS$=CHR$(13) THEN LOCATE ,,0:IF DE% THEN RTRN%=0:RETURN ELSE       RTRN%=1:GOTO 10300
10120 IF CS$=CHR$(27) THEN LOCATE ,,0:RTRN%=9:RETURN  'Esc
10130 IF CS$=CHR$(8) THEN 10250  'Backspace (Destructive)
10140 IF CS$=CHR$(0)+CHR$(75) THEN GOTO 10270  'Left Arrow (Non-Destructive)
10150 IF CS$=CHR$(0)+CHR$(77) THEN GOTO 10290  'Right Arrow (Non-Destructive)
10155 BEEP:GOTO 10080
10160 ACODE%=ASC(CS$)
10170 IF KTYP$="R" THEN IF (ACODE%<48) OR (ACODE%>57) THEN IF KSIGN% THEN IF ACODE%<45 OR ACODE%>46) THEN BEEP:GOTO 10080 ELSE GOTO 10200 ELSE IF ACODE%<>46 THEN BEEP:GOTO 10080 ELSE GOTO 10200 ELSE GOTO 10200
10180 IF KTYP$="I" THEN IF (ACODE%<48) OR (CODE%>57) THEN IF KSIGN% THEN IF ACODE%<>45 THEN BEEP:GOTO 10080 ELSE GOTO 10200 ELSE BEEP:GOTO 10080 ELSE GOTO 10200
10190 IF (ACODE%<32 OR ACODE%>122) THEN BEEP:GOTO 10080
10200 IF DE% THEN PRINT SPACE$(KLEN%);:LOCATE KROW%,KPTR%:DE%=0
10210 PRINT CS$;:SE%=KPTR%-KCOL%+1  ' Calculate Position in INP.STR$ (SE%)
10220 MID$(INP.STR$,SE%,1)=CS$
10230 IF KPTR%>=KCOL%+KLEN%-1 THEN GOTO 10060 ELSE GOTO 10080
10240 ' Backspace (Destructive)
10250 IF KPTR%<KCOL%+1 THEN GOTO 10080 ELSE KPTR%=KPTR%-1:LOCATE , KPTR%:PRINT      " ";:SE%=KPTR%-KCOL%+1:MID$(INP.STR$,SE%,1)=" ":LOCATE  ,KPTR%:IF SE%=1 THEN       DE%=-1:GOTO 10080 ELSE GOTO 10080
10260 ' Backspace (Non-Destructive)
10270 IF KPTR%<KCOL%+1 THEN GOTO 10080 ELSE KPTR%=KPTR%-1:LOCATE      ,KPTR%:SE%=KPTR%-KCOL%+1:GOTO 10080
10280 ' Forwardspace (Non-Destructive)
10290 IF KPTR%>=KCOL%+KLEN%-1 THEN GOTO 10060 ELSE KPTR%=KPTR%+1:LOCATE ,      KPTR%:SE%=KPTR%-KCOL%+1:GOTO 10080
10300 IF KTYP$<>"I" AND KTYP$<>"R" THEN RETURN
10310 IF KTYP$="I" THEN INP.INT%=VAL(INP.STR$):RETURN
10320 INP.REL!=VAL(INP.STR$):IF INP.REL!=0 THEN INP.REL!-0
10330 RETURN
```
{% endraw %}

## SCRNCOLR.ASM

{% raw %}
```
page	64,132
title	scrncolr - Change display screen from white to color attrib
.radix 10
;***************************************************************
; Adapted from "SCREEN.ASM" by H. Fischer - HFischer@eclb 12/83
; SCREEN was Typed in by Glass - gjg@cmu-cs-cad from Byte Nov. 1983
;
; NOTE: only meaningful with color card, and does not look at
;	keyboard (which makes it easywriter, etc. compatible)
;
;   To build this program:
;	1>  masm scrncolr;	/* assemble the code */
;	2>  link scrncolr;	/* link it - will get no stack seg. message */
;	3>  exe2bin scrncolr.exe scrncolr.com  /* make executable */
;	4>  del scrncolr.exe	/* don't need this anymore */
;
;  To use program:  run it or place in autoexec.bat as follows:
;
;		scrncolr nn rr
;
;			where nn are screen attributes to replace
;			normal white (attr=07h) video, and rr are
;			attributes for reversed white (attr=70h)
;			(intensity and blink are preserved).
;
;	for example, to change calls for white to white on blue
;	and to change calls for reverse white to magenta on white,
; 	issue the call:  "scrncolr 17 75"
;
;  Only 80x25 screen calls are affected and only in text mode,
;	(this makes it LOGO and APL compatible)
;
;  COMMANDS:
;	none -- you reassemble to change the color assignment

;***************************************************************
;
;  Define interrupt vectors for
;	screen interrupt 10H, in segment 0.
;
;***************************************************************

scrvect	segment	at 0		; define screen interrupt vector
	org	10h*4
SCRINT	label	dword
scrvect	ends

;***************************************************************
;
;	define constants
;
;***************************************************************

bw_val	   equ	07h		; standard b&w attibute sent to monitor

;***************************************************************
;
;	start code area
;
;***************************************************************

code	segment para
	assume	cs:code
	org	82h		; parameters
PARM	label	word		;    normal & rev attribs "nn rr"
	org	100h		; start code offset 100h from starting segment
				; (this leaves room for DOS's work areas)

KEY	proc	far
START:
	; Initialization code...used only once, on system startup

	jmp	init_code	; call initialization routine
even
	validchk db 'FCP!'	; used by INSTALL to check for valid SCREEN
				; program


;***************************************************************
;
;	SCR_RTNE - Replaces SCREEN interrupt so that it can intercept
;		B&W character writes and change attributes
;
;***************************************************************

SCR_RTNE:
	assume	ds:code
	sti
	push	ds		; get cs into ds  the funny way
	push	cs
	pop 	ds
	cmp	ah,0		; Spot mode change call
	jne	NOT_MODE
	mov	savemod,al	; Save mode input
NOT_MODE:
	cmp	ah,6		; Spot SCROLL UP and SCROLL DOWN calls
	jl	NORMAL_SCR	;
 	push	ax		; check if in 80x25 modes
 	mov	al,savemod
 	cmp	al,2
 	pop	ax
 	jl	NORMAL_SCR	; no-ignore attribs (keep LOGO straight)
 	push	ax		; check if in 80x25 modes
 	mov	al,savemod
 	cmp	al,3
 	pop	ax
 	jg	NORMAL_SCR	; no-ignore attribs (keep LOGO straight)

	cmp	ah,6
	jg	NOT_SCROLL	;

SCROLL:
	call	GET_CH		; for scrolling, update attribute
	jmp	NORMAL_SCR	; now, execute scroll

NOT_SCROLL:
	cmp	ah,9		; check for "WRITE ATTRIBUTE/CHAR" cmd
	jne	NORMAL_SCR	; send out any other command as normal
	xchg	bh,bl		; get attribute for command
	call	GET_CH		; update attribute for command
	xchg	bh,bl		; move attribute back to bh for cmd

NORMAL_SCR:
	pop	ds		; restore ds reg

	;
	; NOTE:	We are now ready to invoke the BIOS screen interrupt.
	;	Since the ROM code includes an IRET interrupt return call,
	;	all we need to do is to jump to the start of the ROM code
	;	and all will be well.  Since the initialization code set
	;	up the address to the screen interrupt code below, we can
	;	set up a forced jump to that address.

JMP_SCR:			; Address to SCREEN interrupt
	db	0EAh		; force a FAR JMP but do not set up dest-
	dw	0,0		;   ination address at assembly time.
				;   (INIT routine will set this address)

savemod db	3		;   default to 80x24 color mode

KEY endp                        ;done with main routine

;***************************************************************
;
;	GET_CH - subroutine replaces B&W character with current replacement
;			attributes and allows for intensity bit setting
;
;		Inputs : bh contains attribute to be modified
;
;***************************************************************

GET_CH	proc	near
	mov	savech,bh	; save character
	and	bh,77h		; Remove intensity and blink bits
	cmp	bh,07h    	; see if currently defined B&W value
	jne	ISITREV		; exit if not
	mov	bh,savech	; otherwise, modify to current attribute
	and	bh,88h		; get rid of B&W part
	or	bh,normvid	; move in current attribute part
	jmp	OUT

ISITREV:
	cmp	bh,70h		; see if currently defined W&B value
	mov	bh,savech	; otherwise, modify to current attribute
	jne	OUT
	and	bh,88h
	or	bh,revrvid

OUT:
	ret			; done

savech	db      0		; temporary character store
normvid	db	05h		; replacement for white norml video
revrvid	db	50h             ; replacement for reverse white video
GET_CH	endp

LASTONE:	; all code after this label is freed to DOS use after
		; initialization of the program.


;***************************************************************
;
;	INIT_CODE - Code to load and initialize the SCREEN program..
;		sets up DOS to keep all code before "LASTONE" label
;		safe from overlaying during system operation.
;
;***************************************************************

INIT_CODE proc  near

	; initialize SCREEN intercept code
	assume	es:scrvect		;'vectors' is interrupt segment 0

	mov	ax,scrvect		; get address to interrupt vector
	mov	es,ax			; save in es
	mov	ax,es:scrint		; get address to interrupt
	mov	bx,offset jmp_scr+1	; address to place to save vector
	mov	[bx],ax			; save interrupt address
	mov	ax,es:scrint[2]		; get interrupt segment for rtne
	mov	[bx+2],ax		; save it too
	mov	es:scrint,offset scr_rtne ; now replace with own address
	mov	ax,cs			; save segment in interrupt vector
	mov	es:scrint[2],ax		;

	mov	ax,cs			; make parameters for color
	mov	ds,ax			;   addressable
	mov	dx,PARM
	test	dx,0040h		; fix hex a-f
	jz	IT2
	sub	dx,0007h
IT2:	test	dx,4000h
	jz	IT3
	sub	dx,0700h
IT3:
	and	dx,0f0fh		; strip and jamb nibbles
	mov	cl,4
	shl	dl,cl
	or	dh,dl
	mov	normvid,dh		; save parameter
	mov	dx,PARM+3
	test	dx,0040h		; fix hex a-f
	jz	IT4
	sub	dx,0007h
IT4:	test	dx,4000h
	jz	IT5
	sub	dx,0700h
IT5:
	and	dx,0f0fh
	mov	cl,4
	shl	dl,cl
	or	dh,dl
	mov	revrvid,dh


	mov	dx,offset lastone	; save all code up to "LASTONE" label
	int	27h			; no return needed

INIT_CODE endp
code ends
end start
```
{% endraw %}

## SCRNCOLR.DOC

{% raw %}
```
ScrnColr
--------

This program is an adaptation of the program SCREEN, which is in 
the INFO-IBMPC library.  SCREEN traps keyboard entries, using 
alt-function key combinations. I found these incompatible many 
popular text editors. It was also incompatible with LOGO.  

ScrnColr only reads command line parameters, and does not inter-
cept keyboard entries.  I have been using it with ScrnSave, DVED,
Mince, Blue, Prof. Editor, ASM, LOGO, APL, Kermit, and many
others.  It seems compatible with all.

To  change color assignments for the 80 wide text mode only, run:

   ScrnColr nn rr

where nn are attributes to replace normal white on black and rr 
replace reverse video black on white. (nn and rr are standard HEX 
video codes) Examples:

   ScrnColr 06 60    for brown (amber) colors
   ScrnColr 17 71    for white on blue & opposite
   ScrnColr 1e 5c    for yellow on blue and lt. cyan on red

Acknowledgements are, of course, due to the authors and maintainers 
of SCREEN.ASM, from whence this program is derived.



```
{% endraw %}

## SDIR.DOC

{% raw %}
```
    X [d:][path][filename[.ext]] [options]
     [filespec] same as for DIR command
 
     [options] Each option must be preceeded with a slash.
	* /A - List hidden files.
        * /C - Clear screen.
        * /P - Pause when screen full.
          /X - Sort by extension.
          /S - Sort by size.
          /D - Sort by date/time.
          /N - Do not sort, original order.
	* /W - Write output to the printer.
		Do not have Shift PrtSc on.
		You do not have to enter /W if entering
		either /I or /T.  All write commands restore
		the printer to non line compression mode.
		All write commands disables Pause.
	* /I - No line compression to printer.
	* /T - Switch printer to non-compressed character
		mode after printing.
	 {/2 - Two columns on the screen.
	*{/4 - Four columns on the screen.
	 {/6 - Six columns on the screen.
 
       Default = current drive and path *.*,
	         sorted into 4 columns,
		 by name.ext,
		 without screen erase.

       * - Option may be combined with other options.

       Example  --  X/6/W/X  will print to the screen and printer
                             a six column directory sorted by extension.

```
{% endraw %}

## SPEED.ASM

{% raw %}
```
         TITLE   'SPEED - Adjust Diskette Parameters'
; Adapted from SPEED411 and from "Inside the IBM PC",
; by Peter Norton, pages 138-139.
;
; At location x'78' is a pointer to the diskette
; parameter table. This program changes the first
; value, the Step Rate Time, which results in a
; quieter and somewhat faster running drive.
;
; The third byte of the table specifies the motor
; turn off delay time. It is changed from 37 msec
; to 200 msec, which results in fewer start-up
; operations.
;
; To install:
;     MASM SPEED;
;     LINK SPEED;
;     EXE2BIN SPEED.EXE SPEED.COM
;     DEL SPEED.EXE
;     SPEED
; The program can be run again without harm.
;
CSEG     SEGMENT PARA PUBLIC 'CODE'
         ASSUME  CS:CSEG,DS:CSEG,ES:CSEG
         ORG     100H
SPEED    PROC    FAR
         PUSH    DS                      ;save for linkage
         XOR     AX,AX                   ;clear for return
         PUSH    AX                      ;put in stack
;
         PUSH    DS                      ;Modify diskette parameters
         MOV     DS,AX                   ;Offset into disk table
         LDS     DI,DWORD PTR DS:78H     ;Addr of disk table
         MOV     BYTE PTR [DI],239       ;Modify step rate
         MOV     BYTE PTR [DI+2],200     ;And motor stop delay
         INT     13H                     ;Reset diskette system
         POP     DS
;
         INT     20H
;
SPEED    ENDP
CSEG     ENDS
         END     SPEED
```
{% endraw %}

## WHEREIS.ASM

{% raw %}
```
;********************************************************
;*							*
;*	WHEREIS.ASM			24FEB84 	*
;*							*
;********************************************************
title WHEREIS
page	62,132

whereis segment public
	assume cs:whereis,ds:whereis

;equates

COMMAND_LINE	EQU	80H + 2
NULL		EQU	00H
CR		EQU	0DH
LF		EQU	0AH
MAX_SCAN_LEN	EQU	64
TERMINATE	EQU	20H
DIRECTORY	EQU	10H
DOT		EQU	'.'
PRINT_CHAR	EQU	02H
SET_DTA 	EQU	1AH
SEARCH_FIRST	EQU	4EH
SEARCH_NEXT	EQU	4FH
DOS_CALL	EQU	21H
PATH_SEPARATOR	EQU	'\'

;macros

CLEAR	macro	reg
	xor	reg,reg
	endm

;this is the format for the dos data transfer area used when dos 2.0
;searches for file match in directories

dta	struc
	reserved	db	21 dup (?)
	attribute	db
	time		dw
	date		dw
	size		dd
	name_found	db	13 dup (?)
dta	ends

	org	100h
main	proc	far

;  this is the main program that sets up the initial conditions for
;  search_directory which in turn, does a recursive search.
;	reads:	path_name
;	writes: file_name
;	calls:	search_directory
;

mainline proc	near

start:
	mov	si, COMMAND_LINE		;start of command line
	mov	di, offset file_name

get_search_name:
	lodsb				;get first char
	cmp	al, CR
	je	done_reading_name	;if carriage return
	stosb
	jmp	get_search_name 	;Loop --
done_reading_name:
	CLEAR	al			;store zero at end
	stosb
	mov	di, offset path_name
	CLEAR	al
	cld
	mov	cx, MAX_SCAN_LEN
	repnz	scasb
	mov	bx,di
	dec	bx			;ds:bx points to end of path_name
	mov	dx,NULL
	call search_directory
	int	TERMINATE
mainline endp

; this procedure searches all the files in the current directory
; looking for a match.	It also prints the full name for each match
;
;	ds:bx	pointer to end of current path name
;	ds:dx	old disk transfer area (dta)
;
; reads:	disk transfer area (dta)
; writes:	disk transfer area (dta)
; calls 	build_name, get_first_Match
;		write_matched_name, get_next_match
;		build_star_name, search_sub_directory
;
search_directory proc	near

	push	si
	push	dx
	call	build_name
	call	get_first_match
	jc	no_match				;If no match --
	call	write_matched_name
find_next_file:
	call	get_next_match
	jc	no_match
	call	write_matched_name
	jmp	find_next_file				;Loop --

no_match:
	pop	dx
	push	dx
	call	build_star_name
	call	get_first_match
	jc	no_more_matches 		;If no match --
	mov	si,dx
	test	[si].attribute,DIRECTORY
	jnz	is_directory			;If directory entry --
find_next_directory:
	call	get_next_match
	jc	no_more_matches 		;If no more entries --
	test	[si].attribute,DIRECTORY
	jz	find_next_directory		;If not a directory --
is_directory:
	cmp	[si].name_found,DOT
	je	find_next_directory		;If it's . or ..
	call	search_sub_directory		;search sub directory
	push	ax
	mov	ah,SET_DTA
	int	DOS_CALL
	pop	ax
	jmp	find_next_directory
no_more_matches:
	pop	dx
	pop	si
	ret

search_directory  endp
page
; This procedure searches the sub directory who's name is in dta
;
;	ds:bx	end of the current pathname
;	ds:[dx].name_found	name of subdirectory for search
;
; reads:	path_name
; writes:	path_name
; calls:	search_directory
;

search_sub_directory  proc  near

	push	di
	push	si
	push	ax
	push	bx
	cld
	mov	si, dx
	add	si, offset name_found
	mov	di,bx
copy_loop:
	lodsb
	stosb
	or	al,al
	jnz	copy_loop
	mov	bx,di
	std
	stosb
	mov	al,PATH_SEPARATOR
	stosb
	call	search_directory
	pop	bx
	mov	byte ptr [bx],NULL
	pop	ax
	pop	si
	pop	di
	ret

search_sub_directory  endp
page

; This procedure prints the matched name after the path name
;
;  ds:dx	pointer to current disk transfer area
;
; reads:	path_name, name_found (in dta)
; writes:	write_string, send_crlf
;

write_matched_name	proc	near

	push	ax
	push	dx
	mov	dx,offset path_name
	mov	al,[bx]
	mov	byte ptr [bx],NULL
	call	write_string
	mov	[bx],al
	pop	dx
	push	dx
	add	dx, offset name_found
	call	write_string
	call	send_crlf
	inc	line_ctr
	mov	al,23
	cmp	al,line_ctr
	jne	write_exit
	call	send_crlf
	mov	al,0
	mov	line_ctr,al
	mov	dx,offset message
	mov	ah,9
	int	DOS_CALL
	mov	ah,7
	int	DOS_CALL
	call	send_crlf
write_exit:
	pop	dx
	pop	ax
	ret
write_matched_name endp


;  This procedure builds an absolute search name from path_name
;  followed by file_name
;
;  reads:	file_name
;  calls:	build	(to build the name)
;

build_name	proc	near

	push	si
	mov	si, offset file_name
	call	build
	pop	si
	ret
build_name	endp

build_star_name proc	near
	push	si
	mov	si, offset star_name
	call	build
	pop	si
	ret
build_star_name endp

page
; This procedure appends the string at ds:si to path_name in
; path_name.  It knows where the path name ends from knowing
; how long path_name is.
;
;	ds:si	name of file
;	ds:bx	end of path_name
;
; reads:	ds:si
; writes:	path_name
;

build	proc	near
	push	ax
	push	di
	mov	di,bx
	cld
copy_name:
	lodsb
	stosb
	or	al,al
	jnz	copy_name			;If not end of string yet --
	pop	di
	pop	ax
	ret
build	endp

; This procedure find the first match between the name given by
; ds:dx and the directory entries found in the directory path_name
;
;	ds:dx	pointer to current disk transfer area
;
;  returns:
;	cf	0	a match was found
;		1	no match found
;	ax		error code returned
;		2	file not found
;		18	no more files
;	ds:dx		pointer to new disk transfer area
;
; reads:	path_name
; writes:	disk_transfer_areas
;

get_first_match proc	near

	push	cx
	cmp	dx,NULL
	ja	allocate		;go allocate space --
	mov	dx, offset disk_transfer_areas-type dta
allocate:
	add	dx,type dta
	mov	cx,DIRECTORY
	mov	ah,SET_DTA
	int	DOS_CALL
	push	dx
	mov	dx, offset path_name
	mov	ah,SEARCH_FIRST 		;call for find first match
	int	DOS_CALL
	pop	dx
	pop	cx
	ret
get_first_match endp


; This procedure is much like get_first_match
;
; returns:
;	cf	0	a match was found
;		1	no match found
;	ax		error code returned
;		2	file not found
;		18	no more files
;
; reads:	path_name
; writes:	disk_transfer_areas
;

get_next_match	proc	near
	push	cx
	push	dx
	mov	dx, offset path_name
	mov	cx,DIRECTORY
	mov	ah,SEARCH_NEXT
	int	DOS_CALL
	pop	dx
	pop	cx
	ret
get_next_match	endp

; This procedure sends a crlf pair of characters to the screen
;

send_crlf	proc	near

	push	ax
	push	dx
	mov	ah,PRINT_CHAR
	mov	dl,LF
	int	DOS_CALL
	mov	dl,CR
	int	DOS_CALL
	pop	dx
	pop	ax
	ret
send_crlf	endp

; This procedure writes the asciiz string at
;  ds:dx	address of asciiz string
;

write_string	proc	near

	push	ax
	push	dx
	push	si
	cld
	mov	si,dx
	mov	ah,PRINT_CHAR
	lodsb
write_string_loop:
	mov	dl,al
	int	DOS_CALL
	lodsb
	or	al,al
	jnz	write_string_loop
	pop	si
	pop	dx
	pop	ax
	ret
write_string	endp

; This is the data storage area and must be the last thing
; in the program.
;

line_ctr	db	0
message 	db	'Press any key to continue $'
star_name	db	'*.*',NULL
path_name	db	PATH_SEPARATOR,NULL
		db	80 dup (0)	;space for 64 char pathname and
					;13 char filename
file_name	db	13 dup (0)	;save room for full dos filename

disk_transfer_areas label byte		;this must start at the end of whereis

main	endp

whereis ends

	end	start
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0255

     Volume in drive A has no label
     Directory of A:\

    NEWBELL  COM        92   8-14-87   9:49a
    NEWBELL  ASM      1499   8-14-87   9:49a
    HERMREAD ME       7121   8-14-87   9:49a
    BATQUES  COM        36   8-14-87   9:49a
    BATQUES  DOC      2256   8-14-87   9:49a
    BATQUES  ASM      3086   8-14-87   9:49a
    SCRNCOLR COM       236   8-14-87   9:49a
    SCRNCOLR DOC      1056   8-14-87   9:49a
    SCRNCOLR ASM      6945   8-14-87   9:49a
    DOS-SIZE DOC      1991   8-14-87   9:49a
    WHEREIS  COM       451   8-14-87   9:49a
    WHEREIS  ASM      7242   8-14-87   9:49a
    OLDER    COM       124   8-14-87   9:50a
    OLDER    ASM      2928   8-14-87   9:50a
    LABEL    EXE      1232   8-14-87   9:50a
    LABEL    C        2531   8-14-87   9:50a
    LABEL    DOC      1730   8-14-87   9:50a
    SCREEN   BAS      3669   8-14-87   9:50a
    SCREEN   DOC      3628   8-14-87   9:50a
    TIMER    EXE      1408   8-14-87   9:50a
    MORSE    BAS      6784   8-14-87   9:50a
    PURGEDUP COM     10313   8-14-87   9:50a
    PURGEDUP DOC      1160   8-14-87   9:50a
    DOSEDIT  COM      1920   8-14-87   9:50a
    DOSEDIT  DOC      3280   8-14-87   9:50a
    DOCUFILE BAS      1690   8-14-87   9:50a
    DOCUFILE DOC      3643   8-14-87   9:51a
    DOCUFDOC BAS      4692   8-14-87   9:51a
    BYE      BAS       212   8-14-87   9:51a
    SDIR     COM      3221   8-14-87   9:51a
    SDIR     DOC      1280   8-14-87   9:51a
    CRYPTO   BAS      1612   8-14-87   9:51a
    PX       COM     22912   8-14-87   9:51a
    PX       DOC     14588   8-14-87   9:51a
    SPEED    COM        23   8-14-87   9:51a
    SPEED    ASM      1480   8-14-87   9:51a
    CHN      PAS       716   8-14-87   9:51a
    L4       COM      2668   8-14-87   9:52a
    L4       DOC      4195   8-14-87   9:52a
    L4       ASM     19409   8-14-87   9:52a
    KBFIX    COM      1360   8-14-87   9:52a
    KBFIX    ASM     32991   8-14-87   9:52a
    KBFIX    DOC       413   8-14-87   9:52a
    KBD_FIX  COM       689   8-14-87   9:52a
    KBD_FIX  ASM     12594   8-14-87   9:52a
    BAT-CD   COM       127   8-14-87   9:53a
    BAT-CD   DOC      1854   8-14-87   9:53a
    BAT-CD   ASM      2959   8-14-87   9:53a
    LIST     COM      6619   9-17-86   4:48a
    LIST     ~DO       136   7-03-87  11:10a
    LIST     DOC       479   7-03-87  11:23a
    FILES255 TXT      3169   8-14-87  10:06a
    GO       BAT        38   8-14-87  10:07a
    GO       TXT       463   8-14-87  10:10a
           54 file(s)     218950 bytes
                           70656 bytes free
