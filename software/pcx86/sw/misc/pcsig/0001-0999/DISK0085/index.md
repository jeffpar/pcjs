---
layout: page
title: "PC-SIG Diskette Library (Disk #85)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0085/
machines:
  - id: ibm5150
    type: pcx86
    config: /machines/pcx86/ibm/5150/cga/256kb/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0085"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5150" %}

{% comment %}info_begin{% endcomment %}

## Information about "VISICALC TEMPLATES"

    Visicalc Templates is a collection of handy financial templates and
    DIF file utilities (BASIC).  The utility assortment includes: DIF file
    sort, DIF screen print and many miscellaneous sorting programs.
    Documentation is included for each program and template.
    
    System Requirements:  Two disk drives, LOTUS 1-2-3 version 1A; BASIC
    
    How to Start:   Access the Visicalc templates through Visicalc.  To
    run the BASIC program consult the directions in GETTING STARTED for your
    configuration.
    
    File Descriptions:
    
    OPTMAR   GIN  Visicalc template for return on investment calculation
    *        VC   Visicalc templates (18 files)
    VC       DOC  General documentation for the files on this disk
    SORTS    DOC  Documentation file for sorts.bas
    SORTS    BAS  Basic program with all kinds of sorts
    SORTDIF  DOC  Documentation file for sortdif.bas file
    SORTDIF  BAS  DIF file sort program
    WRITEDIF BAS  Creates DIF file on disk from the console
    OPTMAR   DOC  Visicalc template documentation for optmar.gin
    PRINTDIF BAS  Prints DIF file as it appears on screen
    DUMPSDIF BAS  Prints DIF file as it was stored (cell by cell)
    DIFNOTES ASK  Doc for DUMPSDIF.BAS, PRINTDIF.BAS, and WRITEDIF .BAS
    PR       DOC  Documentation for PR.VC and BPR.VC Visicalc templates
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## DUMPSDIF.BAS

{% raw %}
```bas
100 ' **********************
110 ' *   INITIALIZATION   *
120 ' **********************
130 NUL$ = CHR$(34) + CHR$(34)
140 FALSE = 0
150 TRUE = -1
440 '
450 '
460 ' **********************
470 ' *    MAIN ROUTINE    *
480 ' **********************
490 '
500 GOSUB 1000'                         * PROMPT FOR ORDERS
510 GOSUB 1200'                         * PRINT HEADER
520 GOSUB 1400'                         * PRINT DATA RECORDS
530 GOSUB 1600'                         * END-OF-PROGRAM CLEANUP
540 END
940 '
950 '
960 ' **********************
970 ' * PROMPT FOR ORDERS: *
980 ' **********************
990 '
1000 CLS
1010 INPUT "File name: ",FILENAME$
1020 IF RIGHT$(FILENAME$,4) <> ".DIF" THEN FILENAME$ = FILENAME$ + ".DIF"
1030 INPUT "Print the file (Y or N): ",REPLY$
1040 IF REPLY$ = "Y" OR REPLY$ = "y" THEN HARDCOPY = TRUE
1050 OPEN FILENAME$ FOR INPUT AS #1
1060 IF NOT HARDCOPY THEN CLS
1070 IF HARDCOPY THEN LPRINT FILENAME$: LPRINT " ":LPRINT ELSE PRINT FILENAME$:PRINT:PRINT
1080 RETURN
1140 '
1150 '
1160 ' **********************
1170 ' *    PRINT HEADER    *
1180 ' **********************
1190 '
1200 INPUT #1, TITLE$
1210 INPUT #1, TYPE, NUMBER
1220 INPUT #1, STRNG$
1230 IF HARDCOPY THEN LPRINT TITLE$:LPRINT TYPE; ","; NUMBER ELSE PRINT TITLE$:PRINT TYPE; ","; NUMBER
1240 IF STRNG$ = "" THEN IF HARDCOPY THEN LPRINT NUL$ ELSE PRINT NUL$ ELSE IF HARDCOPY THEN LPRINT STRNG$ ELSE PRINT STRNG$
1250 IF TITLE$ <> "DATA" THEN 1200
1260 IF NOT HARDCOPY THEN GOSUB 2000
1270 RETURN
1340 '
1350 '
1360 ' **********************
1370 ' * PRINT DATA RECORDS *
1380 ' **********************
1390 '
1400 INPUT #1, TYPE, NUMBER
1410 INPUT #1, STRNG$
1420 IF CSRLIN > 20 AND NOT HARDCOPY THEN GOSUB 2000
1430 IF HARDCOPY THEN LPRINT TYPE; ","; NUMBER: LPRINT STRNG$ ELSE PRINT TYPE; ","; NUMBER: PRINT STRNG$
1440 IF STRNG$ <> "EOD" THEN 1400
1450 RETURN
1530 '
1540 '
1550 ' **********************
1560 ' *   END-OF-PROGRAM   *
1570 ' *      CLEAN-UP      *
1580 ' **********************
1590 '
1600 CLOSE 1
1610 RETURN
1920 '
1930 '
1940 ' *********************
1950 ' *       PRINT       *
1960 ' * "RETURN FOR MORE" *
1970 ' * MESSAGE AT BOTTOM *
1980 ' *********************
1990 '
2000 LOCATE 24,1
2010 PRINT "RETURN for more";
2020 REPLY$ = INPUT$(1)'                 * WAIT UNTIL ANY KEY IS PRESSED
2030 CLS
2040 RETURN
5000 'DIF (Data Interchange Format) is a trademark of Software Arts, Inc.
5001 'VisiCalc is (was) a trademark of VisiCorp (Personal Software, Inc.)
5002 'Expansion and update of DIF capabilities and techniques available by
5003 'subscription to SATN (Software Arts, 27 Mica Lane, Wellesley, MA 02181)
5004 'and inquiry to DIF Clearinghouse (POB 527, Cambridge, MA 02139)
5005 'REF: IBM VisiCalc Manual (Appendix B)...transcribed by Phillip Jacka AIA
```
{% endraw %}

## PR.DOC

{% raw %}
```
        DOCUMENTATION FOR SOFTWARE EXCHANGE DISKETTE #12

   The payroll programs on this diskette are titled PR.VC and 
BPR.VC.  Both are "Visicalc" templates and run only on (or 
through) "Visicalc".  DO NOT try to run these programs unless you 
own and use "Visicalc".

  Now, just a word about warranties: NONE.  Yes, that's right.  
Capital PC, the software exchange group and I make no warranties 
nor do we stand behind the output.  You should test your data to 
assure yourself that the program is accurately computing the 
withholdings.  you should not use the program if the rates do not 
agree with your calculations or if the rates are changed by IRS 
or local government.

   PR and BPR use the "calculation" method of withholding 
determination.  They do not "look up" the amounts in the same 
table as you would by hand in the Circular E for instance.  
Therefore, all of the withholding amounts may be slightly 
different than the table amounts.  This is not cause for concern 
since both methods are estimation approaches and only 
attempt to estimate the amount of tax for the given wage.
Both methods are entirely proper and indeed this program uses the 
same calculating method as the more expensive and elaborate 
payroll packages.

  When the screen comes up on the spreadsheet some columns will 
show "ERROR".  You should re-calculate before doing anything 
else. The first time you use PR or BPR you must insert specific 
data such as EMPLOYEE NAME, RATE, STATE OF RESIDENCE, NUMBER OF 
EXEMPTIONS, MARRIED OR SINGLE, EXEMPT.  The program can only 
calculate state wages for Maryland, Virginia and the District of 
Columbia.  If you have employees who have wages withheld in other 
than these three locales,  DO NOT USE THIS PROGRAM.  When PR 
needs to know which of several selections applies, such as which 
state of residency, a "1" means yes and a "0" means no.  Thus an 
employee who resides in Maryland will have a "1" placed under the 
column for Maryland and a "0" under the other two state columns.
The same logic applies to questions of "yes or no".  For 
instance, when setting up an employee the program need to know if 
the employee is to be treated as exempt. "0" for yes and "1" for 
no means exactly what it says: if the employee is not to have 
wages withheld then "0" is the appropriate entry under the 
column, and "1" is the appropriate entry if the employee is not 
exempt.  Apply the same rationale with the remaining columns 
between AW to AZ,  and BD to BE.   Place the number of exemptions 
in column BF and ignore BG (PR will calculate this one).

   For payday to payday use (after the first time set-up) you 
should only have to enter the number of hours worked and 
recalculate.  You should always recalculate twice to eliminate 
any problems of forward reference due to changes in data.

   For hard copy, remember first to enter the appropriate date in 
the spreadsheet and then allign the screen to show Q as the left 
column and X as the right column.  This should be easy since the 
vertical lines in columns P and Y help you to visualize the 
hardcopy portion of the sheet.  At this point simply print the 
screen (SHIFT PrtSc) and you are finished with this week's
payroll.  

   Sorry, but PR does not write checks for you and it will not 
accumulate quarterly data for use in preparing the 941, MD and VA 
quarterly returns.  And obviously it will not do the W-2's at the 
end of the year!  But it does do an awfully nice job of working 
up the net payroll and withholding amounts for you which should 
be a help on payday.  Good luck and happy computing!
```
{% endraw %}

## PRINTDIF.BAS

{% raw %}
```bas
60 ' **********************
70 ' *   INITIALIZATION   *
80 ' **********************
90 '
100 DIM WORKSHEET$(254,63)
110 FALSE = 0
120 TRUE = -1
130 BYROWS = FALSE
440 '
450 '
460 ' **********************
470 ' *    MAIN ROUTINE    *
480 ' **********************
490 '
500 GOSUB 1000'                         * PROMPT FOR ORDERS
510 GOSUB 1200'                         * READ HEADER
520 GOSUB 1400'                         * READ DATA RECORDS
530 IF NOT FILEBAD THEN GOSUB 1600'     * PRINT THE WORKSHEET
540 GOSUB 1800'                         * END-OF-PROGRAM CLEANUP
550 END
940 '
950 '
960 ' **********************
970 ' * PROMPT FOR ORDERS: *
980 ' **********************
990 '
1000 CLS
1010 INPUT "File name: ", FILENAME$
1020 IF RIGHT$(FILENAME$,4) <> ".DIF" THEN FILENAME$ = FILENAME$ + ".DIF"
1030 INPUT "Column width: ",COLUMNWIDTH
1040 INPUT "Save by row or column (R or C): ",REPLY$
1050 IF REPLY$ = "R" OR REPLY$ = "r" THEN BYROWS = TRUE
1060 INPUT "Print the worksheet (Y or N): ",REPLY$
1070 IF REPLY$ = "Y" OR REPLY$ = "y" THEN HARDCOPY = TRUE
1080 OPEN FILENAME$ FOR INPUT AS #1
1090 RETURN
1140 '
1150 '
1160 ' **********************
1170 ' *    READ HEADER:    *
1180 ' **********************
1190 '
1200 INPUT #1, TITLE$
1210 INPUT #1, TYPE, NUMBER
1220 INPUT #1, STRNG$
1230 IF TITLE$ = "VECTORS" OR TITLE$ = "vectors" THEN VECTORS = NUMBER
1240 IF TITLE$ = "TUPLES" OR TITLE$ = "tuples" THEN TUPLES = NUMBER
1250 IF TITLE$ = "DATA" OR TITLE$ = "data" THEN RETURN
1260 GOTO 1200
1340 '
1350 '
1360 ' **********************
1370 ' * READ DATA RECORDS: *
1380 ' **********************
1390 '
1400 FOR ROW = 1 TO TUPLES
1410     INPUT #1, TYPE, NUMBER
1420     INPUT #1, STRNG$
1430     IF TYPE <> -1 OR STRNG$ <> "BOT" THEN                                              GOSUB 2000:                                                                     RETURN
1440     FOR COL = 1 TO VECTORS
1450        INPUT #1, TYPE, NUMBER
1460        INPUT #1, STRNG$
1470        IF TYPE <> 0 AND TYPE <> 1 THEN                                                    GOSUB 2000: RETURN
1480         IF BYROWS THEN IF TYPE = 0 THEN WORKSHEET$(COL,ROW) = STR$(NUMBER) ELSE WORKSHEET$(COL,ROW) = STRNG$ ELSE IF TYPE = 0 THEN WORKSHEET$(ROW,COL) = STR$(NUMBER) ELSE WORKSHEET$(ROW,COL) = STRNG$
1490        NEXT COL
1500     NEXT ROW
1510 RETURN
1540 '
1550 '
1560 ' **********************
1570 ' *  PRINT WORKSHEET:  *
1580 ' **********************
1590 '
1600 IF BYROWS THEN WDTH = TUPLES: DEPTH = VECTORS ELSE WDTH = VECTORS: DEPTH = TUPLES
1610 FOR ROW = 1 TO DEPTH
1620     FOR COL = 1 TO WDTH
1630          IF HARDCOPY THEN LPRINT WORKSHEET$(ROW,COL); TAB(COL*COLUMNWIDTH); ELSE PRINT WORKSHEET$(ROW,COL); TAB (COL*COLUMNWIDTH);
1640         NEXT COL
1650     IF HARDCOPY THEN LPRINT " " ELSE PRINT
1660     NEXT ROW
1670 RETURN
1730 '
1740 '
1750 ' **********************
1760 ' *   END-OF-PROGRAM   *
1770 ' *      CLEAN-UP      *
1780 ' **********************
1790 '
1800 CLOSE 1
1810 RETURN
1940 '
1950 '
1960 ' **********************
1970 ' *  ERROR IN FILE(S)  *
1980 ' **********************
1990 '
2000 PRINT
2010 BEEP: PRINT "ERROR IN FILE..."
2020 PRINT TAB(5); "TYPE ="; TYPE
2030 PRINT TAB(5); "NUMBER ="; NUMBER
2040 PRINT TAB(5); "STRING ="; STRNG$
2050 FILEBAD = TRUE
2060 RETURN
5000 'DIF (Data Interchange Format) is a trademark of Software Arts, Inc.
5001 'VisiCalc is (was) a trademark of VisiCorp (Personal Software, Inc.)
5002 'Expansion and update of DIF capabilities and techniques available by
5003 'subscription to SATN (Software Arts, 27 Mica Lane, Wellesley, MA 02181)
5004 'and inquiry to DIF Clearinghouse (POB 527, Cambridge, MA 02139)
5005 'REF: IBM VisiCalc Manual (Appendix B)...transcribed by Phillip Jacka AIA
```
{% endraw %}

## SORTDIF.BAS

{% raw %}
```bas
10 REM SORTDIF.BAS 4/1/82   REV 7/24/82 (NEW SORT)
20 REM PROPERTY OF TOM SPRINGALL -- NOT FOR GENERAL DISTRIBUTION
30 REM FOR SORTING DIF FILES
40 '
50  ' **********************
60  ' *   INITIALIZATION   *
70  ' **********************
80  '
90 DEFINT A-M,O-V
100 NUL$=CHR$(34)+CHR$(34)
110 CLOSE
120 CLS
130 PRINT TAB(15) "SORTDIF -- Sort DIF File by Rows or Columns"
140 PRINT
150  PRINT "If the DIF file was saved with option R (or just ENTER), the rows will be"
160 PRINT "reordered based on the contents of the column(s) you specify. If the file"
170 PRINT "was saved with option C, the columns will be sorted on the elements in the"
180 PRINT "row(s) specified.":PRINT:PRINT
190 '
200 '
210 ' **********************
220 ' *    MAIN ROUTINE    *
230 ' **********************
240 '
250 GOSUB 400 '                     OPEN INPUT FILE
260 GOSUB 630 '                     READ HEADER
270 GOSUB 830 '                     READ DATA RECORDS
280 GOSUB 1050 '                    SELECT SORT FIELDS
290 GOSUB 1370 '                    SORT THE RECORDS
300 GOSUB 1640 '                    GET OUTPUT FILE NAME
310 GOSUB 1840 '                    WRITE THE SORTED RECORDS
320 PRINT:PRINT "***************DONE******************"
330 END
340 '
350 '
360 ' ********************
370 ' * OPEN INPUT FILE  *
380 ' ********************
390 '
400 ON ERROR GOTO 0
410 INPUT "Input file name [.DIF] or C/R to quit: ",FILENAME$
420 IF FILENAME$="" THEN END
430 IF RIGHT$(FILENAME$,4)<>".DIF" THEN FILENAME$=FILENAME$+".DIF"
440 ON ERROR GOTO 490
450 OPEN FILENAME$ FOR INPUT AS #1
460 ON ERROR GOTO 0
470 RETURN
480 ' INPUT FILE ERROR
490 BEEP:PRINT
500 IF ERR = 53 THEN PRINT "File not found.":PRINT :RESUME 400
510 IF ERR = 71 THEN PRINT "Disk not ready." ELSE PRINT "Error on OPEN: ";ERR
520 PRINT:INPUT "Retry (R), New name (N), or Quit (Q)";A$
530 IF A$="R" OR A$="r" THEN RESUME 450
540 IF A$="N" OR A$="n" THEN RESUME 400
550 IF A$="Q" OR A$="q" THEN RESUME 560 ELSE 520
560 ON ERROR GOTO 0:END
570 '
580 '
590 ' **********************
600 ' *    READ HEADER     *
610 ' **********************
620 '
630 PRINT:COLOR 23:PRINT "**** Loading file ****";:COLOR 7
640 ON ERROR GOTO 2230
650 INPUT #1, TITLE$
660 INPUT #1, TYPE, NUMBER
670 INPUT #1, STRNG$
680 IF TITLE$="TUPLES" THEN TUPLES=NUMBER
690 IF TITLE$="VECTORS" THEN VECTORS = NUMBER
700 IF TITLE$="DATA" THEN 720
710 GOTO 650
720 ON ERROR GOTO 0
730 DIM TYPES(VECTORS,TUPLES),SV(VECTORS)
740 ' W IS NUM PART OF WORKSHEET; W$ IS CHAR PART
750 DIM W$(VECTORS,TUPLES),W(VECTORS,TUPLES),SC(TUPLES),SEQ(TUPLES)
760 RETURN
770 '
780 '
790 ' **********************
800 ' * READ DATA RECORDS  *
810 ' **********************
820 '
830 ON ERROR GOTO 2230
840 FOR COL = 1 TO TUPLES
850  INPUT #1,TYPE,NUMBER
860  INPUT #1, STRNG$
870  IF TYPE <> -1 OR STRNG$ <> "BOT" THEN GOTO 2170
880  FOR ROW=1 TO VECTORS
890   INPUT #1, TYPE, NUMBER
900   INPUT #1, STRNG$
910   IF TYPE <> 0 AND TYPE <> 1 THEN GOTO 2170
920   IF TYPE = 0 THEN W(ROW,COL)=NUMBER ELSE W$(ROW,COL)=STRNG$:TYPES(ROW,COL)=1
930   NEXT ROW
940  NEXT COL
950 CLOSE 1
960 LOCATE ,1:PRINT "  Loading complete     ":PRINT
970 ON ERROR GOTO 0
980 RETURN
990 '
1000 '
1010 ' **********************
1020 ' * SELECT SORT FIELDS *
1030 ' **********************
1040 '
1050 PRINT:IF TUPLES=1 THEN 1240
1060 PRINT "You may sort on multiple rows/columns by entering a string of row/column"
1070 PRINT "numbers in the desired high-to-low sort sequence. Be sure to separate"
1080 PRINT "the numbers with commas(,) if you enter multiple row/column numbers.":PRINT
1090 PRINT "The default on each row/column is ascending sort sequence.  However,"
1100 PRINT "you can get descending sequence for any (or all) row/column by putting"
1110 PRINT "a minus sign(-) in front of the row/column number."
1120 PRINT:PRINT "There are";TUPLES;"rows/columns ( 1 -";TUPLES;").":PRINT
1130 LINE INPUT "Enter the row/column number(s): ",SC$
1140 SCI=0
1150 IF SC$="" THEN IF SCI=0 THEN BEEP:GOTO 1130 ELSE RETURN
1160 IF LEFT$(SC$,1)=" " THEN SC$=MID$(SC$,2):GOTO 1150
1170 A=INSTR(SC$,",")
1180 IF A=0 THEN SCI$=SC$:SC$="" ELSE SCI$=LEFT$(SC$,A-1):SC$=MID$(SC$,A+1)
1190 SCI=SCI+1:SC(SCI)=VAL(SCI$)
1200 IF SC(SCI)<0 THEN SEQ(SCI)=2:SC(SCI)=ABS(SC(SCI)) ELSE SEQ(SCI)=0
1210 IF SC(SCI)<1 OR SC(SCI)>TUPLES THEN BEEP:PRINT "Invalid entry. Enter number(s) from 1 to";TUPLES:GOTO 1130
1220 IF TYPES(1,SC(SCI)) THEN SEQ(SCI)=SEQ(SCI)+1
1230 GOTO 1150
1240 PRINT "There is only one row/column.":SCI=1:SC(1)=1
1250 PRINT "Press A for ascending sort, D for descending: ";
1260 SC$=INPUT$(1):PRINT SC$
1270 IF SC$="A" OR SC$="a" THEN IF TYPES(1,1) THEN SEQ(1)=1:RETURN ELSE SEQ(1)=0:RETURN
1280 IF SC$="D" OR SC$="d" THEN IF TYPES(1,1) THEN SEQ(1)=3:RETURN ELSE SEQ(1)=2:RETURN
1290 BEEP:GOTO 1250
1300 '
1310 '
1320 ' **********************
1330 ' *  SORT THE RECORDS  *
1340 ' **********************
1350 '
1360 ' SEQ: 0-ASC,NUM; 1-ASC,CHAR; 2-DESC,NUM; 3-DESC,CHAR
1370 FOR I=1 TO VECTORS:SV(I)=I:NEXT I     ' SET UP SORT INDEX VECTOR
1380 PRINT:COLOR 23:PRINT "**** Sorting ****";:COLOR 7
1390 L=(2^INT(LOG(VECTORS)/LOG(2)))-1
1400 L=INT(L/2):IF L<1 THEN 1560
1410 FOR J=1 TO L
1420 FOR K=J+L TO VECTORS STEP L:I=K:M=1
1430 ON SEQ(M) GOTO 1460,1480,1500
1440 IF W(SV(I-L),SC(M))<W(SV(I),SC(M)) THEN 1540
1450 IF W(SV(I-L),SC(M))=W(SV(I),SC(M)) THEN 1550 ELSE 1520
1460 IF W$(SV(I-L),SC(M))<W$(SV(I),SC(M)) THEN 1540
1470 IF W$(SV(I-L),SC(M))=W$(SV(I),SC(M)) THEN 1550 ELSE 1520
1480 IF W(SV(I-L),SC(M))>W(SV(I),SC(M)) THEN 1540
1490 IF W(SV(I-L),SC(M))=W(SV(I),SC(M)) THEN 1550 ELSE 1520
1500 IF W$(SV(I-L),SC(M))>W$(SV(I),SC(M)) THEN 1540
1510 IF W$(SV(I-L),SC(M))=W$(SV(I),SC(M)) THEN 1550 ELSE 1520
1520 SWAP SV(I),SV(I-L)
1530 I=I-L:IF I>L THEN M=1:GOTO 1430
1540 NEXT K,J:GOTO 1400
1550 IF M<SCI THEN M=M+1:GOTO 1430 ELSE 1540    ' EQUAL CONDITION
1560 LOCATE ,1:PRINT "  Sorting complete     ":PRINT
1570 RETURN
1580 '
1590 '
1600 ' **************************
1610 ' * GET OUTPUT FILE NAME *
1620 ' ************************
1630 '
1640 ON ERROR GOTO 0
1650 PRINT:INPUT "Enter the output file name [.DIF] or C/R if same as input file: ",OFILENAME$
1660 IF OFILENAME$="" THEN OFILENAME$=FILENAME$
1670 IF RIGHT$(OFILENAME$,4)<>".DIF" THEN OFILENAME$=OFILENAME$+".DIF"
1680 ON ERROR GOTO 1720
1690 OPEN OFILENAME$ FOR OUTPUT AS #1
1700 ON ERROR GOTO 0
1710 RETURN
1720 BEEP:PRINT
1730 IF ERR = 71 THEN PRINT "Disk not ready." ELSE PRINT "Error on OPEN: ";ERR
1740 PRINT:INPUT "Retry (R), New name (N), or Quit (Q)";A$
1750 IF A$="R" OR A$="r" THEN RESUME 1690
1760 IF A$="N" OR A$="n" THEN RESUME 1640
1770 IF A$="Q" OR A$="q" THEN RESUME 560 ELSE 1740
1780 '
1790 '
1800 ' **********************
1810 ' * WRITE THE RECORDS  *
1820 ' **********************
1830 '
1840 ON ERROR GOTO 2260
1850 PRINT:COLOR 23:PRINT "**** Writing file ****";:COLOR 7
1860 PRINT #1, "TABLE"
1870 PRINT #1, "0,1"
1880 PRINT #1, NUL$
1890 PRINT #1, "TUPLES"
1900 PRINT #1, "0,";TUPLES
1910 PRINT #1, NUL$
1920 PRINT #1, "VECTORS"
1930 PRINT #1, "0,";VECTORS
1940 PRINT #1, NUL$
1950 PRINT #1, "DATA"
1960 PRINT #1, "0,0"
1970 PRINT #1, NUL$
1980 FOR COL = 1 TO TUPLES
1990  PRINT #1, "-1,0"
2000  PRINT #1, "BOT"
2010  FOR I = 1 TO VECTORS:ROW=SV(I)
2020   IF TYPES(ROW,COL) THEN PRINT #1, "1,0":PRINT #1, CHR$(34);W$(ROW,COL);CHR$(34) ELSE PRINT #1, 0;",";W(ROW,COL): PRINT #1, "V"
2030   NEXT I
2040  NEXT COL
2050 PRINT #1, -1;",";0
2060 PRINT #1, "EOD"
2070 CLOSE 1
2080 ON ERROR GOTO 0
2090 LOCATE ,1:PRINT "  Writing complete     ":PRINT
2100 RETURN
2110 '
2120 '
2130 ' **********************
2140 ' *   ERROR IN FILE    *
2150 ' **********************
2160 '
2170 '
2180 BEEP:LOCATE ,1:PRINT "Irrecoverable error in DIF file . . ."
2190 PRINT TAB(5); "Type ="; TYPE
2200 PRINT TAB(5); "Number =";NUMBER
2210 PRINT TAB(5); "String = ";STRNG$
2220 END
2230 BEEP:LOCATE ,1:PRINT "Error";ERR;"reading input file. Rerun from start."
2240 IF ERR=62 THEN PRINT "DIF file is defective.":END
2250 PRINT:ON ERROR GOTO 0
2260 BEEP:LOCATE ,1:PRINT "Error";ERR;"writing output file. Rerun from start."
2270 PRINT:ON ERROR GOTO 0
```
{% endraw %}

## SORTDIF.DOC

{% raw %}
```
                           SORTDIF.DOC

   Sortdif is a basic program that comes to us by way of ?????? !
Please recognize that it involves DIF and if you don't know  what 
I mean by that,  the program is not for you.  If you do know what 
a DIF is, then you may be able to make Sortdif sort some Visicalc
spreadsheet data for you, provided you have properly saved in the 
DIF  format.   You are on your own,  just read the REMs and  good 
luck.

```
{% endraw %}

## SORTS.BAS

{% raw %}
```bas
10 REM SORTS.BAS 4/24/82 TLS
20 ' ****************
30 '  INITIALIZATION
40 ' ****************
50 DIM LT(20),RT(20)
60 DEF SEG:POKE 106,0
70 INPUT "Sample size";R                        ' R = SAMPLE SIZE
80 DIM Y(R),Z(R)
90 FOR I=1 TO R                                 ' SETUP RANDOM SAMPLE
100  Z(I)=RND
110  NEXT I
120 PRINT "Screen or Printer (S/P)? "
130  I$=INPUT$(1)
140  IF I$="S" OR I$="s" THEN OPEN "SCRN:" FOR OUTPUT AS #1:GOTO 170
150  IF I$="P" OR I$="p" THEN OPEN "LPT1:" FOR OUTPUT AS #1:GOTO 170
160  BEEP:GOTO 120
170 PRINT #1, :PRINT #1,
180 ' ****************
190 '  MAIN PROGRAM
200 ' ****************
210 FOR C=1 TO 4                                 ' LOOP ON CASES
220  FOR S=3 TO 7                                ' LOOP ON SORTS
230   PRINT #1, "R =";STR$(R);".  ";
240   ON C GOSUB 470,630,710,800                ' SET UP CASE
250   T1$=TIME$
260   ON S GOSUB 890,990,1100,1220,1350,1570,1730   ' SORT
270   T2$=TIME$
280   GOSUB 550                                 ' CALCULATE TIME
290   GOSUB 380                                 ' CHECK SORT SEQUENCE
300   NEXT S
310  PRINT #1,
320  NEXT C
330 CLOSE 1
340 END
350 ' ***********************
360 '  CHECK SORTED SEQUENCE
370 ' ***********************
380 FOR I=1 TO R-1
390  IF Y(I+1)<Y(I) GOTO 420
400  NEXT I
410 RETURN
420 PRINT #1, "Not sorted correctly."
430 RETURN
440 ' ******************
450 '  REVERSE SEQUENCE
460 ' ******************
470 FOR I=0 TO R
480  Y(I)=1+R-I
490  NEXT I
500 PRINT #1, "Worst case.  ";
510 RETURN
520 ' *********************************
530 '  PRINT ELAPSED TIME (T2$-T1$)
540 ' *********************************
550 T=3600*(VAL(LEFT$(T2$,2))-VAL(LEFT$(T1$,2)))
560 T=T+60*(VAL(MID$(T2$,4,2))-VAL(MID$(T1$,4,2)))
570 T=T+(VAL(MID$(T2$,7,2))-VAL(MID$(T1$,7,2)))
580 PRINT #1, "Elapsed time is";T;"seconds."
590 RETURN
600 ' *************************
610 '  ALREADY SORTED SEQUENCE
620 ' *************************
630 FOR I=1 TO R
640  Y(I)=I
650  NEXT I
660 PRINT #1, "Already sorted case.  ";
670 RETURN
680 ' *********************************
690 '  ALMOST SORTED CASE
700 ' *********************************
710 FOR I=1 TO R-1
720  Y(I)=I
730  NEXT I
740 Y(R)=INT(R/2)
750 PRINT #1, "Almost sorted case.  ";
760 RETURN
770 ' *********************************
780 '  RANDOM SEQUENCE
790 ' *********************************
800 FOR I=1 TO R
810  Y(I)=Z(I)
820  NEXT I
830 PRINT #1, "Random case.  ";
840 RETURN
850 ' **********************
860 '  BUBBLE SORT V.1
870 ' **********************
880 ' VECTOR TO BE SORTED IN Y(1)-Y(R)
890 PRINT #1, "Bubble Sort V1.  ";
900 FOR J=R-1 TO 1 STEP -1
910 FOR I=1 TO J
920 IF Y(I)>Y(I+1) THEN SWAP Y(I),Y(I+1)
930 NEXT I,J
940 RETURN
950 ' **********************
960 '  BUBBLE SORT V.2
970 ' **********************
980 ' VECTOR TO BE SORTED IN Y(1)-Y(R)
990 PRINT #1, "Bubble Sort V2.  ";
1000 FOR J=R-1 TO 1 STEP -1
1010 F=0:FOR I=1 TO J
1020 IF Y(I)>Y(I+1) THEN SWAP Y(I),Y(I+1):F=-1
1030 NEXT I
1040 IF F THEN NEXT J
1050 RETURN
1060 ' **********************
1070 '  INSERT SORT
1080 ' **********************
1090 ' VECTOR TO BE SORTED IN Y(1)-Y(R)
1100 PRINT #1, "Insert Sort   ";
1110 FOR J=2 TO R
1120 FOR I=J TO 2 STEP -1
1130 IF Y(I)>=Y(I-1) THEN 1160
1140 SWAP Y(I),Y(I-1)
1150 NEXT I
1160 NEXT J
1170 RETURN
1180 ' **********************
1190 '  SHELL SORT
1200 ' **********************
1210 ' VECTOR TO BE SORTED IN Y(1)-Y(R)
1220 PRINT #1, "Shell Sort.  ";
1230 L=(2^INT(LOG(R)/LOG(2)))-1
1240 L=INT(L/2):IF L<1 THEN RETURN
1250 FOR J=1 TO L
1260 FOR K=J+L TO R STEP L:I=K
1270 IF Y(I-L)<=Y(I) THEN 1300
1280 SWAP Y(I),Y(I-L)
1290 I=I-L:IF I>L THEN 1270
1300 NEXT K,J:GOTO 1240
1310 ' **********************
1320 '  HEAP SORT
1330 ' **********************
1340 ' VECTOR TO BE SORTED IN Y(1)-Y(R)
1350 PRINT #1, "Heap Sort.  ";
1360 M=R
1370 FOR I=INT(R/2) TO 1 STEP -1
1380 R0=I:GOSUB 1480
1390 NEXT I
1400 FOR M=R-1 TO 1 STEP -1
1410 SWAP Y(M+1),Y(1):R0=1:GOSUB 1480
1420 NEXT M
1430 RETURN
1440 ' **********************
1450 '  HEAP SORT SUBROUTINE
1460 ' **********************
1470 ' CHASE AN ELEMENT TO THE BOTTOM OF THE HEAP
1480 R1=R0+R0:IF R1>M THEN RETURN
1490 IF R1<>M THEN IF Y(R1)<Y(R1+1) THEN R1=R1+1
1500 IF Y(R0)<Y(R1) THEN SWAP Y(R0),Y(R1):R0=R1:GOTO 1480
1510 RETURN
1520 ' **********************
1530 '  QUICKSORT V.1
1540 ' **********************
1550 ' VECTOR TO BE SORTED IN Y(1)-Y(R)
1560 ' USES ARRAYS LT AND RT
1570 PRINT #1, "Quicksort V1.  ";
1580 S1=1:LT(1)=1:RT(1)=R
1590 L1=LT(S1):R1=RT(S1):S1=S1-1:L2=L1:R2=R1:F=-1
1600 IF L2>=R2 THEN 1640
1610 IF Y(L2)>Y(R2) THEN SWAP Y(L2),Y(R2):F=-F
1620 IF F<0 THEN R2=R2-1 ELSE L2=L2+1
1630 IF L2<R2 THEN 1610
1640 IF (L2-L1)>1 THEN S1=S1+1:LT(S1)=L1:RT(S1)=L2-1
1650 IF (R1-R2)>1 THEN S1=S1+1:LT(S1)=R2+1:RT(S1)=R1
1660 IF S1>0 THEN 1590
1670 RETURN
1680 ' **********************
1690 '  QUICKSORT V.2
1700 ' **********************
1710 ' VECTOR TO BE SORTED IN Y(1)-Y(R)
1720 ' USES ARRAYS LT AND RT
1730 PRINT #1, "Quicksort V2.  ";
1740 S1=1:LT(1)=1:RT(1)=R
1750 L1=LT(S1):R1=RT(S1):S1=S1-1
1760 L2=L1:R2=R1:X=Y(INT((L1+R1)/2))
1770 IF Y(L2)<X THEN L2=L2+1:GOTO 1770
1780 IF X<Y(R2) THEN R2=R2-1:GOTO 1780
1790 IF L2>R2 THEN 1820
1800 SWAP Y(L2),Y(R2):L2=L2+1:R2=R2-1
1810 IF L2<=R2 THEN 1770
1820 IF L2<R1 THEN S1=S1+1:LT(S1)=L2:RT(S1)=R1
1830 R1=R2:IF L1<R1 THEN 1760 ELSE IF S1>0 THEN 1750
1840 RETURN
```
{% endraw %}

## SORTS.DOC

{% raw %}
```

                            SORTS.BAS

   Sorts  is  a BASIC program that looks like it has  just  about 
every  type of sort,  i.e.:  bubble,  heap,  etc.,  and it  comes 
without much in the way of handholding.   Please do not expect it 
to be the cat's meow, just look it over, read the REMs and see if 
you can use it. 

```
{% endraw %}

## VC.DOC

{% raw %}
```
                           VISICALC.VC

   There  are  several Visicalc template files on  this  diskette 
besides  PR.VC and BPR.VC (which are documented in PR.DOC).   All 
of  these  other visicalc templates are simply  various  Visicalc 
spreadsheet   applications   that  someone  among  us   uses   as 
demonstration  programs  in an introduction to Visicalc  type  of 
course.   You may be able to use them as well.   None of them are 
terribly   complex   and  they  certainly  do  not  require   any 
instructions.  Just  load Visicalc,  load the programs (one at  a 
time,  of course!) and have a look.   I like the breakeven  sheet 
myself.   Change  a few of the fixed and variable costs and  then 
recalculate (!). WOW, quite a nice little demonstration. 

  Before you get too awfully bored,  take a look at the breakeven 
template.   I'll  bet  some of you never knew that  Visicalc  had 
graphics  output!   See page 2-101 in your trusty Visicalc manual 
for the lowdown on "Transcendental Functions and Graphing".
```
{% endraw %}

## WRITEDIF.BAS

{% raw %}
```bas
60 ' **********************
70 ' *   INITIALIZATION   *
80 ' **********************
90 '
100 ESC$ = CHR$(27)
110 LASTINROW$ = ESC$
120 LASTONSHEET$ = ESC$ + ESC$
130 QUOTE$ = CHR$(34)
140 NUL$ = QUOTE$ + QUOTE$
150 CLSCREEN$ = CHR$(12)
160 ROW = 1
170 COL = 1
180 FALSE = 0
190 TRUE = -1
200 DIM WORKSHEET$(50,50)
440 '
450 '
460 ' **********************
470 ' *    MAIN ROUTINE    *
480 ' **********************
490 '
500 GOSUB 1000'                         * PROMPT FOR ORDERS
510 GOSUB 1200'                         * PROMPT FOR ENTRIES
520 GOSUB 1400'                         * WRITE FILE
530 GOSUB 2000'                         * END-OF-PROGRAM CLEANUP
540 END
940 '
950 '
960 ' **********************
970 ' * PROMPT FOR ORDERS: *
980 ' **********************
990 '
1000 PRINT CLSCREEN$
1010 INPUT "Write the file (Y or N): ",REPLY$
1020 IF REPLY$ = "Y" OR REPLY$ = "y" THEN DISKCOPY = TRUE
1030 IF DISKCOPY                                                                        THEN INPUT "File name: ",FILENAME$:                                                  IF RIGHT$(FILENAME$,4) <> ".DIF" THEN FILENAME$ = FILENAME$ + ".DIF"
1040 RETURN
1140 '
1150 '
1160 ' **********************
1170 ' * PROMPT FOR ENTRIES *
1180 ' **********************
1190 '
1200 PRINT CLSCREEN$
1210 WORKSHEET$(ROW,COL) = ""
1220 PRINT "Row"; ROW; ", Column ";CHR$(64+COL); ": ";
1230 REPLY$ = INPUT$(1)
1232 IF REPLY$ = CHR$(8) THEN IF LEN(WORKSHEET$(ROW,COL)) > 0 THEN PRINT CHR$(29);" ";CHR$(29);:WORKSHEET$(ROW,COL) = LEFT$(WORKSHEET$(ROW,COL),LEN(WORKSHEET$(ROW,COL))-1):GOTO 1230: ELSE GOTO 1230
1240 IF REPLY$ <> CHR$(13)                                                              THEN PRINT REPLY$;: WORKSHEET$(ROW,COL) = WORKSHEET$(ROW,COL) + REPLY$: GOTO 1230
1250 PRINT
1260 IF WORKSHEET$(ROW,COL) = LASTONSHEET$                                              THEN WDTH = COL - 1: DEPTH = ROW: RETURN
1270 IF WORKSHEET$(ROW,COL) = LASTINROW$                                                THEN ROW = ROW + 1: COL = 1: PRINT:GOTO 1210
1280 COL = COL + 1
1290 GOTO 1210
1310 '
1320 '
1330 ' **********************
1340 ' *     WRITE FILE     *
1350 ' **********************
1360 '
1370 ' ----------------------
1380 '         HEADER
1390 ' ----------------------
1400 IF NOT DISKCOPY THEN RETURN
1404 OPEN "O", 1, FILENAME$
1410 PRINT #1, "TABLE"
1420 PRINT #1, 0; ","; 1
1430 PRINT #1, NUL$
1440 PRINT #1, "VECTORS"
1450 PRINT #1, 0; ","; DEPTH
1460 PRINT #1, NUL$
1470 PRINT #1, "TUPLES"
1480 PRINT #1, 0; ","; WDTH
1490 PRINT #1, NUL$
1500 PRINT #1, "DATA"
1510 PRINT #1, 0; ","; 0
1520 PRINT #1, NUL$
1540 '
1550 ' ----------------------
1560 '      DATA RECORDS
1570 ' ----------------------
1580 FOR COL = 1 TO WDTH
1590     PRINT #1, -1; ","; 0
1600     PRINT #1, "BOT"
1610     FOR ROW = 1 TO DEPTH
1620         IF VAL(WORKSHEET$(ROW,COL)) > 0 THEN                                               PRINT #1, 0; ","; VAL(WORKSHEET$(ROW,COL)): PRINT #1, "V":GOTO 1660
1630         IF LEFT$(WORKSHEET$(ROW,COL),1) = QUOTE$ THEN                                      WORKSHEET$(ROW,COL) = MID$(WORKSHEET$(ROW,COL),2)
1640         PRINT #1, 1; ","; 0
1650         PRINT #1, QUOTE$; WORKSHEET$(ROW,COL); QUOTE$
1660         NEXT ROW
1670     NEXT COL
1680 '
1690 ' ----------------------
1700 '      END-OF-DATA
1710 ' ----------------------
1720 PRINT #1, -1; ","; 0
1730 PRINT #1, "EOD"
1740 RETURN
1930 '
1940 '
1950 ' **********************
1960 ' *   END-OF-PROGRAM   *
1970 ' *      CLEAN-UP      *
1980 ' **********************
1990 '
2000 CLOSE 1
2010 RETURN
5000 'DIF (Data Interchange Format) is a trademark of Software Arts, Inc.
5001 'VisiCalc is (was) a trademark of VisiCorp (Personal Software, Inc.)
5002 'Expansion and update of DIF capabilities and techniques available by
5003 'subscription to SATN (Software Arts, 27 Mica Lane, Wellesley, MA 02181)
5004 'and inquiry to DIF Clearinghouse (POB 527, Cambridge, MA 02139)
5005 'REF: IBM VisiCalc Manual (Appendix B)...transcribed by Phillip Jacka AIA
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0085

     Volume in drive A has no label
     Directory of A:\

    BPR      VC      24064   1-01-80
    DIFNOTES ASK      2335  11-07-83   4:47p
    DUMPSDIF BAS      2560   5-11-83   6:37p
    F1040    VC      19968   1-01-80  12:25a
    F104064K VC      16384   1-01-80  12:28a
    F1040A   VC       5504   4-11-83   7:42p
    F1040B   VC       4864   2-26-83   5:58p
    F1040D   VC      25856   2-27-83   8:40p
    F1040DOC VC      20736   2-20-83   8:20p
    F1040INS VC       8832   2-25-83   7:40p
    F1040SIM VC        256   3-05-83   5:11p
    OPT123   VC       6272   1-01-80   3:10a
    OPTCASH  VC       6272   1-01-80   2:11a
    OPTMAR   DOC      3456   1-01-80   3:21a
    OPTMAR   GIN      6272   1-01-80   1:43a
    OPTTEST  VC       6144   1-01-80   2:37a
    PR       DOC      3712   5-10-83  10:05p
    PR       VC      23936   1-01-80  12:10a
    PRINTDIF BAS      3584   5-11-83   6:48p
    SORTDIF  BAS      7040   7-31-82  12:35a
    SORTDIF  DOC       512   5-10-83  10:08p
    SORTS    BAS      4864   4-24-82
    SORTS    DOC       384   5-10-83  10:07p
    VBARCHRT VC       1152   1-01-80
    VBREAKEV VC       5248   1-01-80
    VC       DOC      1152   5-10-83  10:09p
    VCHKBK1  VC       2176   1-01-80
    VSPREAD  VC       3072   1-01-80
    VSPREAD1 VC       1536   1-01-80
    WRITEDIF BAS      3840   5-11-83   9:12p
           30 file(s)     221983 bytes
                           83968 bytes free
