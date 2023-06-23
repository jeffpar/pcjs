---
layout: page
title: "PC-SIG Diskette Library (Disk #204)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0204/
machines:
  - id: ibm5160
    type: pcx86
    config: /machines/pcx86/ibm/5160/cga/256kb/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0204"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5160" %}

{% comment %}info_begin{% endcomment %}

## Information about "DOS UTILITIES NO 12"

    This disk holds many DOS system chore-handling programs: FCOPY copies
    and formats single-sided disks in 30 seconds; GCOPY copies files from
    one drive to another; GDEL can be used to delete files from current
    drive; MSPOOL2 allows up to 4 printer spoolers simultaneously; VDL is
    a file delete utility for DOS 2.0 only, VISIPROT converts VISICALC
    DISK to a disk that can be copied by DISKCOPY; WRTE sets and resets
    the read-only bit on a file to protect it from being deleted or
    updated; and FILECOPY paginates and prints test files.
    
    System Requirements: 256K RAM, two disk drives, BASIC
    
    How to Start: Check the .DOC files for each program.  To run
    a program with the suffix .COM or .EXE, just type its name, i.e.
    for GDEL.COM, type GDEL <ENTER>.
    
    File Descriptions:
    
    FCOPY    EXE  Copies & formats SS disk in 30 sec  (Peter Norton)
    FCOPY    OBJ  Object code
    FCOPY    PAS  Pascal source code
    FCMAGIC  ASM  Assembler routines for FCOPY.EXE
    READ     ME   FCOPY documentation
    FCOPY    LNK  Part of FCOPY
    MSPOOL2  COM  Up to 4 simultaneous printer spoolers  (Rich Winkel)
    GDEL     EXE  Enhanced DOS delete utility  (Gordon Waite)
    GDEL     DOC  Documentation
    GCOPY    EXE  Enhanced DOS copy utility  (Gordon Waite)
    GCOPY    DOC  Documentation
    FILEOUT  BAS  Epson printing utility  (Don Withrow)
    FILECOPY BAS  Paginates & prints text files
    FCMAGIC  OBJ  Object code
    MSPOOL2  DOC  Documentation
    VDL      DOC  Documentation
    VDL      COM  File delete utility for DOS 2.0  (Tom Roberts)
    WRTP     COM  Make a file read-only
    WRTE     COM  Make a read-only file copyable
    WRT      DOC  Documentation - WRTE.COM & WRTP.COM  (Kent Quirk)
    VISIPROT DOC  Unprotect VISICALC
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## CRC.TXT

{% raw %}
```
PC-SIG Disk No. #204, version v1 

The following is a list of the file checksums which should be produced by
the CRCK4 program on disk #9 (and others).  If the CRC numbers do not match
you may have a bad file.  To use type:  CRCK4 <filespec>

CRCK4 output for this disk:


CRCK ver 4.2B (MS DOS VERSION )
CTL-S pauses, CTL-C aborts

--> FILE:  READ    .ME          CRC = 64 5D

--> FILE:  XXX     .            CRC = 1A 50

--> FILE:  FCOPY   .EXE         CRC = 05 0B

--> FILE:  FCOPY   .PAS         CRC = 7D CC

--> FILE:  FCOPY   .OBJ         CRC = 32 28

--> FILE:  FCOPY   .LNK         CRC = 85 0E

--> FILE:  FCMAGIC .ASM         CRC = A7 BD

--> FILE:  FCMAGIC .OBJ         CRC = 1B 39

--> FILE:  FILECOPY.BAS         CRC = 88 08

--> FILE:  FILEOUT .BAS         CRC = C2 40

--> FILE:  GCOPY   .DOC         CRC = D5 15

--> FILE:  GCOPY   .EXE         CRC = 7B CE

--> FILE:  GDEL    .DOC         CRC = DB 49

--> FILE:  GDEL    .EXE         CRC = 3C 0D

--> FILE:  MSPOOL2 .COM         CRC = 57 F0

--> FILE:  MSPOOL2 .DOC         CRC = 7A 79

--> FILE:  VDL     .COM         CRC = 04 5C

--> FILE:  VDL     .DOC         CRC = E6 BB

--> FILE:  VISIPROT.DOC         CRC = 37 77

--> FILE:  WRT     .DOC         CRC = A9 E7

--> FILE:  WRTE    .COM         CRC = 2C 53

--> FILE:  WRTP    .COM         CRC = 64 F0

--> FILE:  CRC     .TXT         CRC = B4 AC

--> FILE:  CRCK4   .COM         CRC = BD 22

 ---------------------> SUM OF CRCS = D0 20

DONE

These and other Public Domain and user-supported programs from:

PC Software Interest Group
1125 Stewart Ct  Suite G
Sunnyvale, CA 94086
(408) 730-9291
```
{% endraw %}

## FCMAGIC.ASM

{% raw %}
```
;  Assembly language routines for FCOPY

;  (C) Copyright, Peter Norton 1983-4

;  01 Jun  84 -- minor changes made for free distribution

;  28 Oct  83 -- change disk functions to report error codes

;  25 oct  83 -- chrget added (from prod-200/magic83d)
;                ifchr  added (returns 0 if no character)
;                lobeep added

;  28 july 83 -- written

; full track (8-sector) read, write, format, verify

; function readt (drive,track,segment,offset) : word 
;          writt
;          formt           return 0 if ok, error code in hi byte 
;          verit

magic  segment 'code'
       assume  cs:magic

  public ifchr 
  public chrget
  public readt
  public writt
  public formt
  public verit

; --------------------------------------------------------------------

; Copyright notice
 
cright proc  far
       db    ' (C) Copyright 1983-4, Peter Norton '
cright endp

; --------------------------------------------------------------------

; IFCHR like chrget, but doesn't wait for keystroke
;
;   procedure ifchr  (var x: word);
;     external;
 
ifchr  proc  far
       push  bp
       mov   bp,sp
       mov   ah,1
       int   16h
       mov   ax,0         ; set zero
       jz    ifchr_ret    ; if no code, skip
       mov   ah,0         ; else read the code
       int   16h
ifchr_ret:
       mov   bp,[bp+06]
       mov   [bp],ax
       pop   bp
       ret   2
ifchr  endp

; --------------------------------------------------------------------

; CHRGET gets a keyboard character, with special indication
;
;   tested 6/20/82 (both assembly and Pascal)
;
;   procedure chrget (var x: word);
;     external;
 
chrget proc  far
       push  bp
       mov   bp,sp
       mov   ah,0
       int   16h
       mov   bp,[bp+06]
       mov   [bp],ax
       pop   bp
       ret   2
chrget endp


; --------------------------------------------------------------------

readt  proc  far
       push bp
       mov  bp,sp
       mov  dl,[bp+12]   ; drive
       mov  dh,0         ; head (always zero)
       mov  ch,[bp+10]   ; track
       mov  cl,1         ; sector number
       mov  ax,[bp+08]   ; segment
       mov  es,ax
       mov  bx,[bp+06]   ; offset
       mov  ah,2         ; service number 2 = read
       mov  al,8         ; number of sectors
       int  13h
       mov  al,1               ; assume bad (true)
       jc   readt_return       ; test carry (is set, bad)
       mov  ax,0               ; set good (false)
readt_return:    
       pop  bp
       ret  8 

readt  endp

; --------------------------------------------------------------------

writt  proc  far
       push bp
       mov  bp,sp
       mov  dl,[bp+12]   ; drive
       mov  dh,0         ; head (always zero)
       mov  ch,[bp+10]   ; track
       mov  cl,1         ; sector number
       mov  ax,[bp+08]   ; segment
       mov  es,ax
       mov  bx,[bp+06]   ; offset
       mov  ah,3         ; service number 3 = write
       mov  al,8         ; number of sectors
       int  13h
       mov  al,1               ; assume bad (true)
       jc   writt_return       ; test carry (is set, bad)
       mov  ax,0               ; set good (false)
writt_return:    
       pop  bp
       ret  8 

writt  endp

; --------------------------------------------------------------------

formt  proc  far
       push bp
       mov  bp,sp
       mov  dl,[bp+12]   ; drive
       mov  dh,0         ; head (always zero)
       mov  ch,[bp+10]   ; track
       mov  cl,1         ; sector number
       mov  ax,[bp+08]   ; segment
       mov  es,ax
       mov  bx,[bp+06]   ; offset
       mov  ah,5         ; service number 5 = format
       mov  al,8         ; number of sectors
       int  13h
       mov  al,1               ; assume bad (true)
       jc   formt_return       ; test carry (is set, bad)
       mov  ax,0               ; set good (false)
formt_return:    
       pop  bp
       ret  8 

formt  endp

; --------------------------------------------------------------------

verit  proc  far
       push bp
       mov  bp,sp
       mov  dl,[bp+12]   ; drive
       mov  dh,0         ; head (always zero)
       mov  ch,[bp+10]   ; track
       mov  cl,1         ; sector number
       mov  ax,[bp+08]   ; segment
       mov  es,ax
       mov  bx,[bp+06]   ; offset
       mov  ah,4         ; service number 4 = verify
       mov  al,8         ; number of sectors
       int  13h
       mov  al,1               ; assume bad (true)
       jc   verit_return       ; test carry (is set, bad)
       mov  ax,0               ; set good (false)
verit_return:    
       pop  bp
       ret  8 

verit  endp

; --------------------------------------------------------------------


magic  ends

       end

```
{% endraw %}

## FILECOPY.BAS

{% raw %}
```bas


5       '**File Copy by Webb B. Blackman,Jr. --28 March 1982 **
7       CLS:KEY OFF: GOTO 63
9       REM**SUBROUTINE FOR STRINGS**
11      A% = 1:GOTO 17
13      REM**SUBROUTINE FOR NUMBERS**
15      A%=0
17      Y% = CSRLIN:X%=1+POS(0):TT$="":TTA$="":I%=0
19      T$ = INKEY$:IF T$="" THEN 19
21      IF T$ =CHR$(13) THEN IF A%=0 THEN 41 ELSE 39
23      IF T$ =CHR$(8) THEN 33
25      IF T$ =CHR$(0)+CHR$(75) THEN 33
27      IF T$=CHR$(44) THEN TTA$=TTA$+T$:TT$=TT$+CHR$(32):GOTO 31
29      TT$ =TT$ + T$:TTA$=TTA$ + T$
31      I%=I%+1:LOCATE Y%,X%:PRINT TTA$:GOTO 19
33      I% = I% -1:IF I% < 0 THEN I%=1
35      TTA$ = MID$(TTA$,1,I%):TT$ = MID$(TT$,1,I%)
37      LOCATE Y%,(X%+I%):PRINT " ":GOTO 19
39      DAT0$ = TTA$:RETURN
41      DAT0# = VAL(TT$):RETURN
43     '**BOX SUB**
45     CLS:LOCATE 2,2,0:PRINT CHR$(201)+STRING$(75,205)+CHR$(187);
47     FOR I%=1 TO 20:LOCATE 2+I%,2:PRINT CHR$(186):LOCATE 2+I%,78:PRINT CHR$(         186);:NEXT
49     LOCATE 23,2,0:PRINT CHR$(200)+STRING$(75,205)+CHR$(188);
51     LOCATE 24,70:PRINT "WBB-82-" P%;:P%=P%+1:IF P%=99 THEN P%=1
53     RETURN
63      '**TITLE BOX**
65      GOSUB 43
79      LOCATE 5,31:PRINT "<<< File Copy >>>"
81      LOCATE 12,30:PRINT "Webb B. Blackman,Jr."
83      LOCATE 17,32:PRINT "March 28, 1982"
85      LOCATE 20,34:PRINT "Version 1.0"
87      LOCATE 23,25,0:COLOR 16,7:PRINT "Press Control Bar To Continue";
89      T$=INKEY$:IF T$="" THEN 89 ELSE IF T$=CHR$(32) THEN COLOR 7,0:CLS               ELSE 87
91      GOTO 111
93      '**Page Heading***
95      IF PAGENUM <> 0 THEN LPRINT CHR$(12);
99      ON ERROR GOTO 293
100     PAGENUM = PAGENUM + 1
101     LPRINT
103     LPRINT:LPRINT TAB(5);CHR$(14);FIL$;".";EXT$;CHR$(20);
105     LPRINT "--printed on ";DATE$;" at ";TIME$;"--Page";PAGENUM
107     LPRINT:LPRINT
109     RETURN
111     '****  Filecopy  ******
113     '
115     '****************************************************
117     '**  A program to provide a paginated listing of   **
119     '**  Text Files using the IBM 80 CPS Printer.      **
121     '****************************************************
123     GOSUB 43:LOCATE 3,27,0:COLOR 16,7,0:PRINT "<<< Filecopy Selection >>>"          :COLOR 7,0,0
125     LOCATE 6,5,0:PRINT "Selection:"
127     LOCATE 8,10,0:COLOR 16,7,0:PRINT "S";:COLOR 7,0,0:PRINT "elect File,";:         COLOR 16,7,0:PRINT "R";:COLOR 7,0,0:PRINT "eset Printer,";:COLOR 16,7,0         :PRINT "P";:COLOR 7,0,0:PRINT "rint File,";:COLOR 16,7,0:PRINT "E";
129     COLOR 7,0,0:PRINT "nd :  ";:COLOR 0,7,0:PRINT "   ";:LOCATE 8,54,0:             GOSUB 9:SELECT$=DAT0$:COLOR 7,0,0
131     SL$ = MID$(SELECT$,1,1)
133     IF SL$<>"S" AND SL$<>"s" AND SL$<>"R" AND SL$<>"r" AND SL$<>"P" AND SL$         <>"p" AND SL$<>"E" AND SL$<>"e" THEN 125
135     IF SL$="S" OR SL$="s" THEN GOSUB 217:GOTO 123
137     IF SL$="R" OR SL$="r" THEN GOSUB 249:GOTO 123
139     IF SL$="E" OR SL$="e" THEN CLS:END
141     '**Printing of File
143     '*****************************************************
145     '** This section of program sets the printer speci- **
147     '** fications and prints a listing of the desired   **
149     '** Text File.                                      **
151     '*****************************************************
153     GOSUB 43:LOCATE 3,27,0:COLOR 16,7,0:PRINT "<<< Filecopy Printing >>>":          COLOR 7,0,0
155     LOCATE 6,10,0:PRINT "1. Adjust the paper in the printer so that"
157     LOCATE 7,10,0:PRINT "   the perforations are at the paper bail."
159     LOCATE 9,10,0:PRINT "2. Put the printer ONLINE at this time."
161     LOCATE 11,10,0:PRINT "3. Press the ESC key to abort printing of file."
165     LOCATE 23,25,0:COLOR 16,7:PRINT "Press Control Bar To Continue";
167     T$=INKEY$:IF T$=""THEN 167 ELSE IF T$ = CHR$(32) THEN COLOR 7,0,0:CLS           ELSE 165
169     GOSUB 43:LOCATE 3,28,0:COLOR 16,7,0:PRINT "<<< Filecopy Listing >>>"            :COLOR 7,0,0
171     LOCATE 8,10,0:COLOR 23,0,0:PRINT " Press the ESC key to abort printing.
173     LPRINT CHR$(18);
175     LPRINT CHR$(20);
177     LPRINT CHR$(27)+"F";
179     LPRINT CHR$(27)+"H";
181     IF TYP$="C" OR TYP$="c" THEN LPRINT CHR$(15);
183     IF DWP$="Y" OR DYP$="y" THEN LPRINT CHR$(14);
185     IF EMP$="Y" OR EMP$="y" THEN LPRINT CHR$(27)+"E";
187     IF DSP$="Y" OR DSP$="y" THEN LPRINT CHR$(27)+"G";
189     WIDTH "LPT1:",PWIDTH
191     PAGENUM = 0
193     LINENUM = 1
195     IF EOF(1) THEN 211
197     LINE INPUT #1,L$
199     IF LINENUM = 1 THEN GOSUB 93
201     LPRINT L$
203     IF INKEY$ = CHR$(27) THEN CLOSE #1:COLOR 7,0,0:GOTO 111
205     LINENUM = LINENUM + INT((LEN(L$)+79)/80)
207     IF LINENUM > 54 THEN LINENUM = 1
209     GOTO 195
211     CLOSE #1
213     LPRINT CHR$(12)
215     GOTO 111
217     'Select File
219     '***********************************************
221     '** This routine obtains the necessary infor- **
223     '** mation needed to open the Text File for   **
225     '** obtaining a listing.                      **
227     '***********************************************
229     GOSUB 43:LOCATE 3,28,0:COLOR 16,7,0:PRINT "<<< File Entry Mode >>>":            COLOR 7,0,0
231     LOCATE 6,5,0:PRINT "Drive (A or B)       :";:COLOR 0,7,0:PRINT "   "            ;:LOCATE 6,27,0:GOSUB 9:COLOR 7,0,0:DRV$=MID$(DAT0$,1,1)
233     IF DRV$ <> "A" AND DRV$ <>"B" AND DRV$<>"b" AND DRV$<>"a" THEN 231
235     LOCATE 8,5,0:PRINT "Enter File Name      :";:COLOR 0,7,0:PRINT                  "        ";:LOCATE 8,27,0:GOSUB 9:COLOR 7,0,0:FIL$ = DAT0$
237     LOCATE 10,5,0:PRINT "Enter File Extension :";:COLOR 0,7,0:PRINT "    "          ;:LOCATE 10,27,0:GOSUB 9:COLOR 7,0,0:EXT$ = DAT0$
239     OPEN "I",1,DRV$+":"+FIL$+"."+EXT$
243     LOCATE 23,25:COLOR 16,7:PRINT "Press Control Bar To Continue"
245     T$=INKEY$:IF T$=""THEN 245 ELSE IF T$ = CHR$(32) THEN COLOR 7,0,0:CLS:          RETURN ELSE 243
247     '************************************************
249     'Reset IBM Printer
251     '***********************************************
253     '** This routine obtains the necessary infor- **
255     '** mation needed to set up the IBM Printer  **
257     '** with the desired enhancements.            **
259     '***********************************************
261     GOSUB 43:LOCATE 3,27,0:COLOR 16,7,0:PRINT "<<< Reset IBM Printer >>>":          COLOR 7,0,0
263     LOCATE 6,5,0:PRINT "IBM Printer Enhancements are:"
265     LOCATE 7,10,0:COLOR 16,7,0:PRINT "N";:COLOR 7,0,0:PRINT "ormal or ";:           COLOR 16,7,0:PRINT "C";:COLOR 7,0,0:PRINT "ompressed Print ?  ";:COLOR          0,7,0:PRINT "   ";:LOCATE 7,40,0:GOSUB 9:TYP$=DAT0$:COLOR 7,0,0
267     IF TYP$ <>"N" AND TYP$<>"n" AND TYP$<>"C" AND TYP$<>"c" THEN 265
269     IF TYP$="C" OR TYP$="c" THEN 275
271     LOCATE 9,10,0:PRINT "Emphasized Print    ?  Y/N ";:COLOR 0,7,0:PRINT            "   ";:LOCATE 9,37,0:GOSUB 9:EMP$=DAT0$:COLOR 7,0,0
273     IF EMP$<>"N" AND EMP$<>"n" AND EMP$<>"Y" AND EMP$<>"y" THEN 271
275     LOCATE 11,10,0:PRINT "Double Width Print  ?  Y/N ";:COLOR 0,7,0:PRINT           "   ";:LOCATE 11,37,0:GOSUB 9:DWP$=DAT0$:COLOR 7,0,0
277     IF DWP$<>"N" AND DWP$<>"n" AND DWP$<>"Y" AND DWP$<>"y" THEN 275
279     LOCATE 13,10,0:PRINT "Double Strike Print ?  Y/N ";:COLOR 0,7,0:PRINT           "   ";:LOCATE 13,37,0:GOSUB 9:DSP$=DAT0$:COLOR 7,0,0
281     IF DSP$<>"N" AND DSP$<>"n" AND DSP$<>"Y" AND DSP$<>"y" THEN 279
283     LOCATE 15,5,0:PRINT "Enter the desired line width:  ";:COLOR 0,7,0:             PRINT "    ";:LOCATE 15,36,0:GOSUB 13:PWIDTH=DAT0#:COLOR 7,0,0
285     IF PWIDTH < 1 OR PWIDTH > 132 THEN 283
287     DEF SEG: POKE 106,0
289     LOCATE 23,25:COLOR 16,7:PRINT "Press Control Bar To Continue"
291     T$=INKEY$:IF T$=""THEN 291 ELSE IF T$ = CHR$(32) THEN COLOR 7,0,0:CLS:          RETURN ELSE 287
293     IF ERR = 24 THEN FOR TM%=1 TO 20000:NEXT:RESUME NEXT

```
{% endraw %}

## FILEOUT.BAS

{% raw %}
```bas


10 '***************************************************************************
20 '* The File Output Program        |    FILEOUT.BAS           Version 1.2   *
30 '*--------------------------------+----------------------------------------*
40 '*  (C) Copyright 1982            | CREATED 02/28/82     UPDATED 04/12/82  *
50 '*   Janadon Consumer Software    | Written for the IBM Personal Computer  *
60 '*   P.O.Box 2462                 |   with one disk drive/48K RAM/IBM PC   *
70 '*   Fairfax, VA  22031           |   DOS/IBM PC Printer or Epson MX-80 or *
80 '*   (703) 978-0866 (Voice)       |   MX-80F/T                             *
85 '*   (703) 978-9592 (Data)        | Author:  Don Withrow                   *
90 '***************************************************************************
100 CLEAR:CLS:LINES=0:LINUMBER=1
110 INPUT"Enter the Filename:  ",FILE$
120 IF FILE$="quit" OR FILE$="QUIT" THEN END
130 GOSUB 590
140 INPUT"Enter `1' for NORMAL print or `2' for COMPRESSED print:  ",X:GOSUB 850
150 INPUT"Do you want DOUBLESTRIKE letters (Y/N)";Y$
160 IF LEFT$(Y$,1)="Y" OR LEFT$(Y$,1)="y" THEN DOUBLE=1 ELSE DOUBLE=2
170 INPUT"How many blanks do you want to pad the left margin with";N
180 IF LINLEN<1 THEN INPUT"Enter the file line length";LINLEN
190 INPUT"How many lines per page";PAGLEN
200 INPUT"Do you want the pages numbered (Y/N)";Y$
210 IF LEFT$(Y$,1)="Y" OR LEFT$(Y$,1)="y" THEN PAGING=1:INPUT"What is the starting page number";PAGE:ELSE PAGING=2:PAGE=1
220 INPUT"What page do you wish to start printing";STARTPAGE
230 INPUT"What page do you wish to end printing";ENDPAGE
240 INPUT"Do you want line numbers? (Y/N) ",Y$
250 IF LEFT$(Y$,1)="Y" OR LEFT$(Y$,1)="y" THEN NUMLIN=1:FORMAT$="##### \"+STRING$(LINLEN-2," "):ELSE NUMLIN=2:FORMAT$="\"+STRING$(LINLEN-2," ")
260 FORMAT1$=FORMAT$+STRING$(LINLEN," ")+"\":FORMAT$=FORMAT$+"\"
270 INPUT"Do you require pauses to change the paper? (Y/N) ",Y$:IF LEFT$(Y$,1)="Y" OR LEFT$(Y$,1)="y" THEN SHEETS=2 ELSE SHEETS=1
280 OPEN "I", #1, FILE$
290 LINE INPUT#1, THELIN$:IF EOF(1) THEN FLAG=1:GOTO 560
300 IF LEFT$(THELIN$,1)="\" THEN GOTO 440
310 ON DOUBLE GOTO 320,330
320 LPRINT CHR$(27) CHR$(71);:GOTO 340
330 LPRINT CHR$(27) CHR$(72);
340 IF PAGE=>STARTPAGE AND PAGE <=ENDPAGE THEN LPRINT TAB(N); ELSE 370
342 IF RIGHT$(THELIN$,1)=CHR$(13) OR RIGHT$(THELIN$,1)=CHR$(10) THEN THELIN$=LEFT$(THELIN$,LEN(THELIN$)-1)
345 ON NUMLIN GOTO 350,360
350 LPRINT USING FORMAT$; LINUMBER,THELIN$;:GOTO 370
360 LPRINT USING FORMAT$; THELIN$;
370 LINUMBER=LINUMBER+1:LINES=LINES+1:IF LINES=>PAGLEN THEN 380 ELSE 420
380 LINES=0:ON PAGING GOTO 390,400
390 IF PAGE=>STARTPAGE AND PAGE <=ENDPAGE THEN LPRINT:LPRINT TAB(INT((LINLEN+N)/2+4)) PAGE:PAGE=PAGE+1:LPRINT CHR$(12):GOTO 410:ELSE PAGE=PAGE+1:GOTO 410
400 IF PAGE=>STARTPAGE AND PAGE <=ENDPAGE THEN LPRINT CHR$(12):ELSE 420
410 IF SHEETS=2 THEN COLOR 18:LOCATE 14:INPUT"Change the Paper - - - Then Hit <ENTER> ",X$:COLOR 7:LOCATE 14:PRINT STRING$(50," "):GOSUB 850
420 IF FLAG=1 THEN END
430 GOTO 290
440 IF PAGE=>STARTPAGE AND PAGE <=ENDPAGE THEN 450 ELSE 370
450 IF MID$(THELIN$,2,1)="%" THEN LPRINT TAB(INT(N*PFACTOR));:THISLIN$=CHR$(27)+CHR$(71)+CHR$(27) CHR$(69)+MID$(THELIN$,3,LEN(THELIN$)-2):ON NUMLIN GOTO 460,470:ELSE 500
460 LPRINT USING FORMAT$;LINUMBER;THISLIN$:GOTO 480
470 LPRINT USING FORMAT$;THISLIN$
480 LPRINT CHR$(27) CHR$(70) CHR$(27) CHR$(72);:IF X=2 THEN LPRINT CHR$(15);
490 GOTO 370
500 IF MID$(THELIN$,2,1)="@" THEN LPRINT TAB(INT(N*PFACTOR));:THISLIN$=CHR$(27)+CHR$(71)+CHR$(15)+CHR$(14) + MID$(THELIN$,3,LEN(THELIN$)-2) + CHR$(20):ON NUMLIN GOTO 510,520:ELSE 550
510 LPRINT USING FORMAT$;LINUMBER,THISLIN$:GOTO 530
520 LPRINT USING FORMAT$;THISLIN$
530 LPRINT CHR$(18) CHR$(27) CHR$(72);:IF X=2 THEN LPRINT CHR$(15);
540 GOTO 370
550 IF MID$(THELIN$,2,1)="#" THEN 560 ELSE 580
560 IF PAGE=>STARTPAGE AND PAGE<=ENDPAGE THEN FOR I=LINES+1 TO PAGLEN:LPRINT:NEXT I
570 LINUMBER=LINUMBER+1:GOTO 380
580 IF MID$(THELIN$,2,1)="*" THEN THELIN$=MID$(THELIN$,3,LEN(THELIN$)-2):GOTO 310:ELSE GOTO 310
590 INPUT"Do you want to reformat the file (Y/N)";Y$
600 IF LEFT$(Y$,1)="Y" OR LEFT$(Y$,1)="y" THEN 610 ELSE RETURN
610 PRINT:INPUT"How many characters do you want on each line";LINLEN
620 PRINT:INPUT"Enter the FILESPEC of the new file: ",FS$
630 OPEN "I", #1, FILE$:OPEN "O", #2, FS$:OLDLIN$=""
640 LINE INPUT #1, THELIN$:IF EOF(1) THEN 820
650 IF LEFT$(THELIN$,1)="\" THEN 690
660 IF THELIN$=" " THEN 690
670 IF THELIN$=CHR$(13) THEN 690
680 GOTO 710
690 IF OLDLIN$<>"" THEN NEWLIN$=OLDLIN$:OLDLIN$="":GOSUB 800
700 NEWLIN$=THELIN$:GOSUB 800:GOTO 640
710 IF OLDLIN$<>"" AND RIGHT$(OLDLIN$,1)<>" " THEN OLDLIN$=OLDLIN$+" "
720 NEWLIN$=OLDLIN$+THELIN$:OLDLIN$=""
730 IF LEN(NEWLIN$)<LINLEN THEN OLDLIN$=NEWLIN$:GOTO 640
740 IF LEN(NEWLIN$)=LINLEN THEN OLDLIN$="":GOSUB 800:GOTO 640
750 FOR INDEX=LINLEN TO 1 STEP -1
760 IF MID$(NEWLIN$,INDEX,1)=" " THEN OLDLIN$=MID$(NEWLIN$,INDEX+1,LEN(NEWLIN$)-INDEX) ELSE 790
770 NEWLIN$=MID$(NEWLIN$,1,INDEX):GOSUB 800
780 IF LEN(OLDLIN$)<LINLEN THEN GOTO 640 ELSE NEWLIN$=OLDLIN$:OLDLIN$="":GOTO 740
790 NEXT INDEX
800 PRINT #2, NEWLIN$:PRINT NEWLIN$
810 RETURN
820 GOSUB 800:CLOSE:FILE$=FS$
830 PRINT:INPUT"Do you want to print the new file now? (Y/N) ",X$
840 IF LEFT$(X$,1)="Y" OR LEFT$(X$,1)="y" THEN RETURN 140 ELSE END
850 IF X=1 THEN LPRINT CHR$(18) CHR$(20);:WIDTH "LPT1:",80:PFACTOR=.8250001
860 IF X=2 THEN LPRINT CHR$(15);:WIDTH "LPT1:",132:PFACTOR=.5
870 RETURN

```
{% endraw %}

## MSPOOL2.DOC

{% raw %}
```
                      Multi Spooler Ver. 2
                         for the IBM PC
                         by Rich Winkel
                          Columbia, Mo.

                   For free distribution only

                        Mspool2 Features

     Allows spooling up to 4 printers simultaneously.
     Supports both parallel and serial printers in any 
          combination.
     Has a user selectable buffer size up to 63K bytes.
     Sensitive to competing demands for CPU time.  Won't 
          slow down foreground jobs.
     Allows cancellation of an on-going print operation.
     Can be 'disabled' for use with programs which are 
          incompatible with it's operation.


Usage:    

To install the spooler, at the DOS prompt type:

          MSPOOL a b c
where:

a (= 1 - 4) represents the four possible printers on the PC.
            (1, 2 & 3 correspond to LPT1, LPT2 & LPT3)

b (= 1 - 9) represents the number of 7K chunks of memory to set 
            aside for the spooler buffer.

c (= 1 - 4) is an optional parameter used when you wish the
            output to be directed to a serial port.
            (1 and 2 correspond to COM1 and COM2)

     Once the spooler is installed, the user need not worry about 
it further; it will begin intercepting all print operations and 
buffering them.  However, the operation of the spooler can be 
modified after it has been installed, if the need arises.  After 
the spooler has been installed, if you type:

          MSPOOL a

     where 'a' is the same 'a' you used to install it, you are 
presented with three options: Purge, Disable or Enable.  These 
are as follows:

Purge:    Drops any characters remaining in the spooler buffer.  
          This has the effect of canceling any printing operation 
          currently taking place.

Disable:  A few programs for the PC operate in a way which 
          interferes with MSPOOL's ability to send characters to 
          the printer.  The result is that MSPOOL captures the 
          characters, but doesn't actually begin printing them 
          until it's buffer is full or you exit your program.  
          'Disabling' the spooler (prior to running your program) 
          keeps the number of characters in it's buffer from 
          growing.  That is, every time the spooler intercepts a 
          character, it prints a character.  If it's buffer is 
          empty, it's as if it wasn't there at all.  It simply 
          prints the character it gets when it gets it.  If there 
          are characters in the buffer at the time the offending 
          program is invoked, then when it gets a character to 
          print, it fetches the next character in line and prints 
          it, and puts the new character at the end of the queue.
          
Enable:   Re-enables spooling.

     Hitting any key other than P, D or E has no effect.

Notes:    

     To spool to a serial printer, first initialize the COM port 
with the MODE command: MODE COMc:baud,parity,databits,stopbits 
etc.  DO NOT use the P (continuous retry) option.  Then install 
MSPOOL: MSPOOL a b c.  This will route all output for LPTa 
through the spooler to the COMc port.  DO NOT use the MODE 
redirect command. (i.e. don't use MODE LPT#:=COMn)

     To spool to more than one printer, just run the spooler 
repeatedly, specifying each printer in turn.  

     When spooling to more than one printer, in certain 
circumstances (see tech hype below) the last spooler loaded will 
have priority, then the second to last.

     In order for the Purge, Disable, Enable routine to work, you 
should load the spooler(s) last among the 'resident' routine(s) 
which affect the operation of any printer.  For instance, if you 
use GRAPHICS.COM, you should run it before running MSPOOL.

     Once the spooler is installed, it's output cannot be re-
directed to another port, so programs written for this purpose 
(such as QSWAP) will not work.

     The ability to redirect to a COM port could be put to good
use when uploading a large file to another computer when no 
handshaking (XON/XOFF or XMODEM) protocol is required. 
(Especially if you are limited to 300 baud)

     More DOS Bugs!  Apparently, FORMAT & DISKCOPY will not work
properly if they do not reside low enough in memory, so if you have
trouble with either of these commands and you have a large spooler
buffer or a lot of resident routines installed, try rebooting
without the resident routines or reduce the spooler buffer size and
try again.  (This problem appears to be similar to the one which
arises if you have too much memory.)

Technical hype:

     This spooler intercepts 2 interrupts: Printer I/O (INT 17H), 
and Keyboard I/O (INT 16H).  At installation, it stores the old 
vectors for these interrupts internally and substitutes it's own 
addresses in the interrupt vector table.  
     Any call to print is checked as to whether it references the 
spooler's printer.  If not, it is passed on to the the old 
printer I/O handler. (could be another spooler, GRAPHICS.COM, the 
ROM routine etc.)  If it does reference the spooler's printer, 
the character is put in the spooler's buffer, and the buffer is 
checked to see if it's full.  If not, the spooler returns
to the calling program.  Otherwise, the spooler prints the
next character waiting in the buffer, then returns.  If the 
spooler has been 'disabled', it always prints the next character 
in the buffer, regardless of whether the buffer is full.
     Whenever a program makes a keyboard I/O call (INT 16H), the 
spooler checks whether it has a character to print in it's 
buffer.  If not, it passes control to the old keyboard I/O 
routine (could be another spooler, the ROM routine etc.).  
Otherwise, it makes one attempt to print a character.  It then 
checks to see if the keyboard call will require the keyboard I/O 
routine to wait for a character to be entered from the keyboard 
if no character is already in the keyboard buffer.  If not, it 
passes control to the old keyboard I/O handler.  Otherwise, it 
looks at the BUFFER_HEAD and BUFFER_TAIL words in the ROM BIOS 
data area to determine if there is a character in the keyboard 
buffer.  If there is, it passes control.  Otherwise, it begins 
looping, repeatedly attempting to print and checking the keyboard 
buffer until it either runs out of characters or a character is 
entered at the keyboard.  It is during this looping process that 
the most recently installed spooler will get the highest 
priority.  
     Whenever mspool is run, it checks where the printer I/O 
interrupt vector is pointing to determine whether it has already 
been installed.  If it doesn't find a copy of itself there, it 
assumes it is not installed and continues with installation.  If 
there is a copy of itself, it checks to see whether the copy is 
configured to intercept calls to the same printer as was 
specified in it's own parameter list (parm 1). If not, it gets 
the segment for the next printer I/O handler up the line from the 
copy and repeats the same procedure until it either lands in 
unfamiliar territory or finds a spooler configured for it's 
printer.  If it finds one with the proper configuration, it 
presents you with the 'Purge, Disable, Enable' option.  
Otherwise, it continues with installation.
     During installation, the spooler is patched in accordance 
with the parameters passed to it by DOS, to customize for 
parallel or serial printing, buffer size, LPT number and the 
addresses of the old interrupt routines gotten from the interrupt 
vector table.
     The legal ranges for the printer number and serial port number
are due to the fact that there is space for 4 ports in both the
printer and RS-232 tables.

```
{% endraw %}

## VISIPROT.DOC

{% raw %}
```


     [[This patch was extracted from the PHOENIX IBM-PC Software 
Library newsletter. They received it from the HAL-PC users group of
Houston, TX.   Many thanks to them.]]


     ****      HOW TO BACK-UP YOUR PC VISICALC DISK   ****

     The following technique will convet your VISICALC disk to a disk
that may be copied by "diskcopy". Diskcopy must be used because there
are four programs on the disk which do not appear in the directory.
DO NOT TRY TO ADD OTHER FILES TO THE NEW DISK.  Use of this procedure
does not relieve you of your responsibilities under copyright laws or
licensing agreements. 

     Boot your DOS disk up on drive A: format drive b without copying
the dos system. (FORMAT B: (ENTER)). Then enter the following DEBUG
Commands:

[FOR SYSTEMS 96K OR OVER]

-L 100 0 0 80           (READS FIRST 16 TRACKS FROM A:)
-W 100 1 0 80           (WRITES 16 TRACKS TO B:)
-L 100 0 80 80          (READS NEXT 16 TRACKS FROM A:)
-W 100 1 80 80          (WRITES SAME ON B:)
-L 100 0 100 3E         (COPIES THE LAST 8 TRACKS EXCEPT
-W 100 1 100 3E          FOR THE UNCOPYABLE SECTOR 13F)

[FOR SYSTEMS WITH LESS THAN 96K]

-L 100 0 0 40
-W 100 1 0 40
-L 100 0 40 40
-W 100 1 40 40
-L 100 0 80 40
-W 100 1 80 40
-L 100 0 C0 40
-W 100 1 C0 40
-L 100 0 100 3E
-W 100 1 100 3E

NOW YOU HAVE COPIED THE DISK: NOW PATCH THE 80-COLUMN PROGRAM LOADER/
DECRYPTER SO THAT IT WILL RUN CORRECTLY WITH SECTOR 13F FORMATTED
NORMALLY.

-L 100 1 138 3            (LOAD THE INVISIBLE LOADER-DECRYPTER)
-E 150 90 90
-E 156 B0
-E 158 90 90
-E 168 90 04 40 90 90
-E 16E C6 06
-E 173 90 90
-E 179 90 04 20 90 90
-E 17F C6 06
-E 184 90 90
-E 18A 90 04 00 90 90
-E 190 C6 06
-E 195 EB
-E 1B0 90 05 00 00 90     (LAST PATCH DISABLES TIMER CHECK)
-W 100 1 138 3            (SAVE IT BACK ON NEW DISK)

LASTLY, YOU MUST PATCH 'VCONFIG' IS YOU NEED THE 40 COLUMN DISPLAY.
(WITH THE NEW VISICALC DISK IN DRIVE B:)

-L 100 1 13B 3             (LOAD 40-COL LOADER-DECRYPTER)
-E 14D 90 90 B4 10 90 90 90
-E 169 C6 06
-E 16E 90 90
-E 174 90 2C 20 90 90
-E 17A C6 06
-E 17F 90 90
-E 185 90 2C 00 90 90
-E 18B C6 06
-E 190 EB
-E 1AB 90 04 00 90 90       (DISABLE TIMER CHECK HERE TOO)
-W 100 1 13B 3              (SAVE ON BACK ON NEW DISK)
-Q                          (QUIT DEBUG)

     All copies of the new disk should function exactly as the original
"copy-protected" disk. The serial number is unchanged. You may not legally
sell; give or load either the original disks, copies or documentation


e serial number is unchanged. You may not legally
sell; give or load either the original disks, copies or documentation
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0204

     Volume in drive A has no label
     Directory of A:\

    CRC      TXT      1687  11-15-84   9:11a
    CRCK4    COM      1536  10-21-82   7:54p
    FCMAGIC  ASM      4992   6-01-84   8:28a
    FCMAGIC  OBJ       366   6-01-84   8:29a
    FCOPY    EXE     26820   6-01-84   8:30a
    FCOPY    LNK       128   6-01-84   8:25a
    FCOPY    OBJ      4963   6-01-84   8:19a
    FCOPY    PAS      7552   6-01-84   8:17a
    FILECOPY BAS      8064   1-01-80   1:03a
    FILEOUT  BAS      5632   2-21-83   5:54p
    GCOPY    DOC      1024   1-01-80  12:25a
    GCOPY    EXE     14336   1-01-80  12:25a
    GDEL     DOC      1024   3-26-84   9:09p
    GDEL     EXE     13312   3-26-84   9:09p
    MSPOOL2  COM      1020   9-30-83   4:15p
    MSPOOL2  DOC      7914   9-30-83   2:57p
    READ     ME       2102   6-06-84  11:29a
    VDL      COM      1024   4-10-84   5:29p
    VDL      DOC      2048   4-10-84   5:31p
    VISIPROT DOC      2688   3-18-83  12:49a
    WRT      DOC      1536   4-10-84   5:42p
    WRTE     COM       512   4-10-84   5:40p
    WRTP     COM       512   4-10-84   5:39p
    XXX               1152   6-19-84  12:44a
           24 file(s)     111944 bytes
                           45056 bytes free
