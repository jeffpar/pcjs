---
layout: page
title: "PC-SIG Library Disk #204"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0204/
machines:
  - id: ibm5160
    type: pcx86
    config: /machines/pcx86/ibm/5160/cga/256kb/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk 0204"
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

## FILECOPY.BAS

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
 T$ = CHR$(32) THEN COLOR 7,0,0:CLS:          RETURN ELSE 287
293     IF ERR = 24 THEN
```

## FILEOUT.BAS

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
$(18) CHR$(20);:WIDTH "LPT1:",80:PFACTOR=.8250001
860 IF X=2 THEN LPRINT CHR$(15);:WIDTH "LPT1:",132
```

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk 0204

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
