---
layout: page
title: "PC-SIG Library Disk #145"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0145/
machines:
  - id: ibm5160
    type: pcx86
    config: /machines/pcx86/ibm/5160/cga/256kb/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk 0145"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5160" %}

{% comment %}info_begin{% endcomment %}

## Information about "FABULA DISK 2 OF 2  (#144 FIRST DISK)"

    A fine collection of tools for communications users and others.  The
    SQIBM and USQIBM programs compress and expand files to save on costs
    when using modem transmission.  TALK450 shows how to add 450 baud
    capacity to your Hayes 300 modem.  There are other goodies like
    SCRNSAVE, which prevents phosphor burn on your monitor, and a series of
    batch files to give sorted directory listings.
    
    How to Start: To run a COM or BAT program simply type its name and
    press <ENTER>.  To read DOC files simply enter TYPE filename.ext and
    press <ENTER>.
    
    File Descriptions:
    
    The First Disk Contains:
    DNXSD    DOC  Documentation for .BAT files
    DN       BAT  Sorts Directory by fileName
    DXSAVE   BAT  Sorts Directory by eXtension and saves sorted
    DD       BAT  Sorts Directory by Date
    DS       BAT  Sorts Directory by Size
    DX       BAT  Sorts Directory by eXtension
    USQ      COM  Unsqueezes files
    SQ       DOC  Documentation for SQIBM
    SQ       COM  Squeezes files
    SCRNSAVE COM  Prevents screen "burn-in"
    SCROLLK  DOC  Documentation for SCROLLK
    TALK450  MRG  Adds 450 baud capacity to PC-TALK III
    SCROLLK  COM  Enables SCROLLLOCK key
    TALK450  DOC  Documentation for TALK450.MRG
    USQ      DOC  Documentation for USQIBM
    
    The Second Disk Contains:
    ASMGEN   COM  Converts EXE and COM to ASM files
    ASMGEN   DOC  Documentation for ASMGEN.COM
    BINSIX   DOC  Documentation for BINSIX.DOC
    COMP     BAS  Compares two tokenized BASIC files
    BINSIX   EXE  New squeeze program, 20% less then hex
    DIP-MEM  COM  Bypasses power-up memory test
    CROSSOPT      Data file for CROSSREF.EXE
    MAKEDATA BAS  Checksumed data files for COM/EXE
    DIP-MEM  DOC  Documentation for DIP-MEM.COM
    SQIBM    DOC  Documentation for SQIBM.DOC
    SQIBM    COM  Squeezes files for faster transfer
    RSVD     COM  Changes the size of VDISK
    WRT      DOC  DOC for WRTE.COM and WRTP.COM
    WRITECOM BAS  Converts data from MAKEDATA.BAS to EXE/COM
    UPNUM    COM  Shows if NumLock or CapsLock in use
    TABS     BAS  Puts tab codes in or removes them
    VDISK    COM  160k RAM disk program  (see RSVD.COM)
    USQIBM   DOC  Documentation for USQIBM.COM
    USQIBM   COM  Unsqueezes files squeezed by SQIBM
    UPNUM    DOC  Documentation for UPNUM.DOC
    WRTE     COM  Erases read-only attribute from a file
    WRTP     COM  Sets read-only attribute of a file
    XREF     BAS  BASIC program
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## COMP.BAS

```bas
10 '**************************************************************************
20 '*                                                                        *
30 '*                 COMP.BAS BY ROBERT RELF (C)1984                        *
40 '*                                                                        *
50 '**************************************************************************
60 DIM C$(128),D$(128)
70 POINTER1=129:POINTER2=129
80 CLS:KEY OFF:PRINT"                BASIC PROGRAM FILE COMPARISON UTILITY":PRINT
90 INPUT "ENTER FIRST FILE NAME INCLUDING DRIVE AND EXTENSION: ",FILENAME1$:PRINT
100 INPUT "ENTER SECOND FILE NAME INCLUDING DRIVE AND EXTENSION: ",FILENAME2$:PRINT
110 LPRINT "BASIC PROGRAM FILE COMPARISON
120 LPRINT
130 LPRINT "COMPARING ";FILENAME1$;" AND ";FILENAME2$
140 LPRINT :LPRINT
150 OPEN FILENAME1$ AS #1 LEN=128
160 OPEN FILENAME2$ AS #2 LEN=128
170 FOR I=1 TO 128
180 FIELD #1,(I-1)AS X$,1 AS C$(I)
190 FIELD #2,(I-1)AS Y$,1 AS D$(I):NEXT
200 GOSUB 480:IF C<>255 THEN PRINT "NOT A TOKENIZED PROGRAM FILE":END
210 GOSUB 550:IF D<>255 THEN PRINT "NOT A TOKENIZED PROGRAM FILE":END
220 GOSUB 400
230 GOSUB 440
240 GOSUB 620
250 GOSUB 750
260 LOCATE 8,1:PRINT "PROCESSING #1 LINE ";LINE1
270 LOCATE 10,1:PRINT "PROCESSING #2 LINE ";LINE2
280 IF DONE1=1 AND DONE2=1 THEN IF ID=0 THEN LPRINT "FILES COMPARE OK":LPRINT CHR$(12):END ELSE LPRINT CHR$(12):END
290 IF DONE1=1 AND DONE2=0 THEN GOSUB 380:GOSUB 440:GOSUB 750:GOTO 260
300 IF DONE1=0 AND DONE2=1 THEN GOSUB 360:GOSUB 400:GOSUB 620:GOTO 260
310 IF LINE1=LINE2 THEN IF LINE1$=LINE2$ THEN GOTO 220 ELSE GOSUB 340:GOTO 220
320 IF LINE1<LINE2 THEN GOSUB 360:GOSUB 400:GOSUB 620:GOTO 260
330 IF LINE1>LINE2 THEN GOSUB 380:GOSUB 440:GOSUB 750:GOTO 260
340 LPRINT "LINES ";LINE1;" ARE NOT IDENTICAL":ID=1
350 RETURN
360 LPRINT "LINE NUMBER ";LINE1;" IN  ";FILENAME1$;"  DOES NOT EXIST IN  ";FILENAME2$:ID=1
370 RETURN
380 LPRINT "LINE NUMBER ";LINE2;" IN  ";FILENAME2$;"  DOES NOT EXIST IN  ";FILENAME1$:ID=1
390 RETURN
400 GOSUB 480:LOW.BYTE=C
410 GOSUB 480:HIGH.BYTE=C
420 ADR1=HIGH.BYTE+LOW.BYTE
430 RETURN
440 GOSUB 550:LOW.BYTE=D
450 GOSUB 550:HIGH.BYTE=D
460 ADR2=HIGH.BYTE+LOW.BYTE
470 RETURN
480 IF POINTER1<128 GOTO 510
490 GET #1
500 POINTER1=0
510 POINTER1=POINTER1+1
520 C=ASC(C$(POINTER1))
530 LINE1$=LINE1$+C$(POINTER1)
540 RETURN
550 IF POINTER2<128 GOTO 580
560 GET #2
570 POINTER2=0
580 POINTER2=POINTER2+1
590 D=ASC(D$(POINTER2))
600 LINE2$=LINE2$+D$(POINTER2)
610 RETURN
620 IF ADR1=0 THEN DONE1=1:RETURN
630 GOSUB 480:LOW.BYTE=C
640 GOSUB 480:HIGH.BYTE=C
650 LINE1=(HIGH.BYTE*256)+LOW.BYTE:LINE1$=STR$(LINE1)
660 GOSUB 480
670 WHILE C<>0
680 GOSUB 480
690 IF (C>10 AND C<15) OR C=28 THEN GOSUB 480:GOSUB 480:GOSUB 480:GOTO 730
700 IF C=15 THEN GOSUB 480:GOTO 730
710 IF C=29 THEN FOR I=1 TO 4:GOSUB 480:NEXT I:GOTO 730
720 IF C=31 THEN FOR I=1 TO 8:GOSUB 480:NEXT I:GOTO 730
730 WEND
740 RETURN
750 IF ADR2=0 THEN DONE2=1:RETURN
760 GOSUB 550:LOW.BYTE=D
770 GOSUB 550:HIGH.BYTE=D
780 LINE2=(HIGH.BYTE*256)+LOW.BYTE:LINE2$=STR$(LINE2)
790 GOSUB 550
800 WHILE D<>0
810 GOSUB 550
820 IF (D>10 AND D<15) OR D=28 THEN GOSUB 550:GOSUB 550:GOSUB 550:GOTO 860
830 IF D=15 THEN GOSUB 550:GOTO 860
840 IF D=29 THEN FOR I=1 TO 4:GOSUB 550:NEXT I:GOTO 860
850 IF D=31 THEN FOR I=1 TO 8:GOSUB 550:NEXT I:GOTO 860
860 WEND
870 RETURN

```

## MAKEDATA.BAS

```bas
100 GOSUB 1000                            'Intialize variables,etc.
110 GOSUB 2000                          'Get name of input and output file
120 GOSUB 3000                          'Open files for input and output
130 CHECK.SUM.%=0
140 PRINT "Writing";
150 GOSUB 4000                          'Generate the data for program
160 GOSUB 5000                          'Write data for checksum
170 NUM.DATA.%=0:DATA.BASE.%=1000
180 NUM.%=LENGTH.%                      'Output number of bytes
190 GOSUB 6000                          'Write number of bytes
200 NUM.%=CHECK.SUM.%                   'Write the checksum
210 GOSUB 6000
220 PRINT#2,",";CHR$(9);CHR$(34);COM.FILE.$;CHR$(34)
230 END
1000 '------------------------------------------------------------------------'
1010 ' This subroutine is just for intializing variables, etc.                '
1020 '------------------------------------------------------------------------'
1030 TRUE.%=-1                          'Set the two Boolean values
1040 FALSE.%=0
1050 RETURN
2000 '------------------------------------------------------------------------'
2010 ' This subroutine gets the name for the input and output files.          '
2020 '              com.files.$              Name of the".com" file           '
2030 '              data.file.$              Where Makedata writes the data   '
2040 '------------------------------------------------------------------------'
2050 INPUT"Name of com file (without extension)";COM.FILE.$
2060 DATA.FILE.$=COM.FILE.$ + ".bas"    'Build name for basic data statements
2070 COM.FILE.$=COM.FILE.$ + ".com"     'Build name for ".com" file
2080 RETURN
3000 '------------------------------------------------------------------------'
3010 ' This subroutine opens the two files and sets some variables            '
3020 '              length.%               The # of bytes in the ".com" file  '
3030 '              #1                     File # of com.file.$               '
3040 '              #2                     File # of data.file.$
3050 '------------------------------------------------------------------------'
3060 OPEN COM.FILE.$ AS #1 LEN=1
3070 LENGTH.%=LOF(1)                    '# of bytes in '.com' file
3080 PRINT"length = ";LENGTH.%
3090 DIM CHECK.%(LENGTH.%)              'Reserve room for checksums
3100 OPEN DATA.FILE.$ FOR OUTPUT AS #2
3110 FIELD #1,1 AS BYTE.$
3120 RETURN
4000 '------------------------------------------------------------------------'
4010 ' This subroutine writes the data statments for each byte in the         '
4020 ' '.com' file.                                                           '
4030 '------------------------------------------------------------------------'
4040 NUM.BYTES.%=0:NUM.DATA.%=0:DO.CHECK.%=TRUE.%
4050 DATA.BASE.%=1010                   'Start data statements at 1010
4060 WHILE NUM.BYTES.% < LENGTH.%
4070    GET #1                          'Read next byte
4080    NUM.BYTES.%=NUM.BYTES.% + 1
4090    ZERO.COUNT.%=0
4100    WHILE (ASC(BYTE.$)=0) AND (NUM.BYTES.% < LENGTH.%)
4110       ZERO.COUNT.%=ZERO.COUNT.% + 1
4120       GET #1
4130       NUM.BYTES.%=NUM.BYTES.% +1
4140    WEND
4150    IF ZERO.COUNT.%=1 THEN NUM.%=0:GOSUB 6000
4160    IF ZERO.COUNT.% > 1 THEN IF.COND.%=TRUE.% ELSE IF.COND.%=FALSE.%
4170       WHILE IF.COND.%
4180          NUM.%=-1                  'Signal "repeat count for 0's follows"
4190          GOSUB 6000
4200          NUM.%=ZERO.COUNT.%        'Write the repeat count
4210          GOSUB 6000
4220          IF.COND.%=FALSE.%
4230       WEND
4240    NUM.%=ASC(BYTE.$)               'Now write the next byte
4250    GOSUB 6000
4260 WEND
4270 RETURN
5000 '------------------------------------------------------------------------'
5010 ' This subroutine writes the checksum for each line of data              '
5020 ' statements'                                                            '
5030 '------------------------------------------------------------------------'
5040 PRINT #2,"":PRINT #2,10000"";      'Leave a blank line at the start
5050 DO.CHECK.%=FALSE.%:CHECK.SUM.%=0
5060 LENGTH.%=NUM.DATA.%                'Number of data items written
5070 NUM.CHECK.%=(NUM.DATA.%+7)\8
5080 NUM.DATA.%=0:DATA.BASE.%=10010
5090 FOR I.%=1 TO NUM.CHECK.%
5100    NUM.%=CHECK.%(I.%)
5110    CHECK.SUM.%=CHECK.SUM.% >= NUM.%
5120    GOSUB 6000
5130 NEXT I.%
5140 RETURN
6000 '------------------------------------------------------------------------'
6010 ' This subroutine prints the number in num.% as a string                 '
6020 '------------------------------------------------------------------------'
6030 IF (NUM.DATA.% MOD 8)=0 THEN WRITE.IF.%=TRUE.% ELSE WRITE.IF.%=FALSE.%
6040    WRITE.ELSE.%=NOT WRITE.IF.%
6050 WHILE WRITE.IF.%
6060       CHECK.INDEX.%=1 + NUM.DATA.%\8
6070       PRINT #2,""                  'Go to the next line
6080       PRINT ".";
6090       PRINT #2,DATA.BASE.% + INT(10*(NUM.DATA.%\8));
6100       PRINT #2,"data";CHR$(9);
6110       WRITE.IF.%=FALSE.%
6120    WEND
6130    WHILE WRITE.ELSE.%
6140       PRINT #2,",";CHR$(9);
6150       WRITE.ELSE.%=FALSE.%
6160    WEND
6170 NUM.$=STR$(NUM.%)
6180 IF NUM.% > 0 THEN NUM.$=RIGHT$(NUM.$,LEN(NUM.$)-1)
6190 PRINT #2,NUM.$;
6200 IF DO.CHECK.% THEN CHECK.%(CHECK.INDEX.%)=CHECK.%(CHECK.INDEX.%) >= NUM.%
6210 NUM.DATA.%=NUM.DATA.% + 1
6220 RETURN
```

## TABS.BAS

```bas
10 '  "TABS"
20 '
30 '    J.R. Pulliam   4/01/84  Public Domain
40 '
50 TAB$ = CHR$(9) : TS = 8
60 IFILE$ = "B:INFILE.ASM"
70 OFILE$ = "B:OUTFILE.ASM"
80 CLS
90 PRINT  TAB(38);"TABS":PRINT
100 PRINT "     This program converts spaces in a file into TAB codes ";
110 PRINT "or converts TAB codes"
120 PRINT"into spaces."
130 PRINT:PRINT "     The TAB spacing is selectable by the user.";
140 PRINT "  The default is every eighth"
150 PRINT "character position with the TABS in positions 8, 16, 24, etc.,";
160 PRINT " making the";
170 PRINT "TAB STOPS at positions 9, 17, 25, etc."
180 PRINT:PRINT "     All TABS or spaces in the file are converted. ";
190 PRINT "If there are some portions of"
200 PRINT "the file, such as DB statements, that you do not want converted,";
210 PRINT " they should be"
220 PRINT "separated into a temporary file before conversion";
230 PRINT " and then reattached later."
240 PRINT:PRINT "The input and output files must be ASCII files."
250 '
260 PRINT:PRINT:PRINT TAB(24);"ENTER SELECTION (1-4)"
270 PRINT:PRINT TAB(17);"1  Replace spaces with TABS where possible."
280 PRINT TAB(17);"2  Replace TABS with spaces."
290 PRINT TAB(17);"3  Change TAB spacing of";TS"."
300 PRINT TAB(17);"4  Quit and return to DOS.
310 PRINT
320 INPUT "                       Selection = ",A$
330 IF A$ < "1" OR A$ > "4" THEN PRINT:PRINT TAB(24);"ILLEGAL INPUT":GOTO 260
340 SEL = VAL(A$)
350 '
360 IF SEL <> 3 THEN 400
370 GOSUB 970
380 GOTO 260
390 '
400 IF SEL = 4 THEN CLOSE : SYSTEM
410 '
420 PRINT:PRINT "ENTER THE NAME OF THE INPUT FILE TO CONVERT [";IFILE$;"]  ";
430 INPUT "",A$
440 IF LEN(A$) > 0 THEN IFILE$ = A$
450 PRINT:PRINT "ENTER THE NAME OF THE CONVERTED OUTPUT FILE [";OFILE$;"]  ";
460 INPUT "",A$
470 IF LEN(A$) > 0 THEN OFILE$ = A$
480 '
490 '  OPEN THE FILE AND BEGIN THE SEARCH
500 '
510 OPEN "I",1,IFILE$
520 OPEN "O",2,OFILE$
530 '
540 '  READ EACH LINE AND SEARCH IT
550 '
560 LLEN = 0
570 IF EOF(1) THEN 920
580 LINE INPUT #1,D$                    ' READ ONE LINE FROM FILE INTO D$
590 IF LEN(D$) > 0 THEN LLEN = LEN(D$) ELSE 910
600 IF SEL = 2 THEN 820
610 '
620 '  REPLACE SPACES WITH TABS
630 '
640 IF LLEN => TS THEN 660
650 E$ = D$ : GOTO 880
660 GOSUB 1050                          ' GET RID OFF ALL EXISTING TABS FIRST
670 '
680 D$ = E$ : LLEN = LEN(D$) : E$ = ""
690 FOR TP = TS TO LLEN STEP TS         ' NOW REPLACE SPACES WITH TABS
700 IF (MID$(D$,TP,1) <> " ") THEN E$ = E$ + MID$(D$,TP-TS+1,TS) : GOTO 780
710 J = 0
720 FOR L = TP-1 TO TP-TS+1 STEP -1
730 IF (MID$(D$,L,1) <> " ") THEN 760
740 J = J + 1
750 NEXT L
760 E$ = E$ + MID$(D$,TP-TS+1,TS-1-J)
770 IF J = 0 THEN E$ = E$ + " " ELSE E$ = E$ + TAB$
780 NEXT TP
790 IF (TP-TS) < LLEN THEN E$ = E$ + RIGHT$(D$,LLEN-TP+TS)
800 GOTO 860
810 '
820 '  REPLACE TABS WITH SPACES
830 '
840 GOSUB 1050
850 '
860 '  WRITE THE LINE OUT
870 '
880 PRINT E$
890 PRINT#2,E$
900 '
910 GOTO 560                            ' LOOP TO READ NEXT LINE
920 '
930 CLOSE
940 PRINT:PRINT:PRINT "FINISHED CONVERSION"
950 PRINT:PRINT:PRINT:PRINT:PRINT
960 GOTO 260
970 '
980 '  CHANGE TAB SPACING SUBROUTINE
990 '
1000 PRINT:PRINT:PRINT TAB(20);"CURRENT TAB SPACING IS";TS
1010 PRINT:INPUT "                   Enter new spacing (5-10) ",T
1020 IF T < 5 OR T > 10 THEN PRINT:PRINT TAB(26);"ILLEGAL INPUT":GOTO 1000
1030 TS = T
1040 RETURN
1050 '
1060 '  REPLACE TABS WITH SPACES SUBROUTINE
1070 '
1080 E$ = "" : J = 0
1090 FOR I = 1 TO LLEN
1100 J = J + 1 : IF J > TS THEN J = 1
1110 IF MID$(D$,I,1) <> TAB$ THEN E$ = E$ + MID$(D$,I,1) : GOTO 1160
1120 FOR K = 1 TO TS+1-J
1130 E$ = E$ + " "
1140 NEXT K
1150 J = 0
1160 NEXT I
1170 RETURN

```

## WRITECOM.BAS

```bas
100 READ LENGTH.%,CHECK.SUM.%,FILE.NAME.$
110 NUM.LINES.%=LENGTH.% + 7)\8
120 DIM CHECK.%(NUM.LINES.%)
130 FOR I.%= 1 TO NUM.LINES.%:CHECK.%(I.%)=0:NEXT I.%
140 PRINT "checking";
150 FOR I.%= 1 TO LENGTH.%
160    READ BYTE.!
170   IF BYE.! > 255 THE 220
180    BYTE.% = BYTE.!
190    CHECK.%(1+(I.% - 1)\8)=CHECK.%(1+(I.% - 1)\8) >= BYTE.%:GOTO 230
200 '
210    PRINT:PRINT "Line";1010 + 10 *((I.% - 1)\8)0.;"may have a missing comma."
220    PRINT"Writing stopped.":GOTO 480
230    IF(I.% MOD 8 =1) THEN PRINT".";
240 NEXT I.%
250 PRINT
260 ERROR.%=0
270 FOR I.%= 1 TO NUM.LINES.%
280   READ CHECK.%:LINE.CHECK.%=LINE.CHECK.% >= CHECK.%
290 IF CHECK.%(I.%) <> CHECK.% THEN PRINT"Line";1000+10*I.%;"may be bad":ERROR.%=-1
300 NEXT I.%
310 IF LINE.CHECK.%=CHECK.SUM.% THEN 330
320 PRINT"Data may be bad in the data starting at line 10000":ERROR.%=-1
330 IF ERROR.% THEN 480
340 OPEN FILE.NAME.$ AS #1 LEN=1
350 FIELD #1,1 AS BYTE.$:PRINT"Writing";
360 RESTORE 1010
370 FOR I.%= 1 TO LENGTH.%
380   READ BYTE.%
390   IF BYTE.% <> -1 THEN 430
400     READ COUNT.%:LSET BYTE.$=CHR$(0):I.%=I.% + 2
410     FOR J.%= 1 TO COUNT.%:PUT #1:NEXT J.%
420     READ BYTE.%
430   LSET BYTES.$=CHR$(BYTE.%):PUT #1
440   IF(I.% MOD 8 = 1) THEN PRINT".";
450 NEXT I.%
460 CLOSE
470 PRINT:PRINT FILE.NAME.$;" created"
480 END
```

## XREF.BAS

```bas
100 REM***************** INITIALIAZATION AND DEINITIONS *********************
110 DIM LABEL$(500),LINE.REF%(500),C$(128)
120 LABEL.NUMBER = 0 : FALSE=0: TRUE = NOT FALSE : POINTER=129
130 REM
200 REM *****************GET FILE NAME OF BASIC PROGRAM **********************
210 INPUT "Enter File Name ", FILENAME$ : PRINT
230 OPEN FILENAME$ AS #1 LEN=128
240 REM
300 REM************* INITIALIZE INPUT FILE **********************************
310 FOR I = 1 TO 128
320     FIELD #1, (I-1) AS X$, 1 AS C$(I)
330 NEXT I
340 REM
400 REM ******************* READ FIRST THREE CHARACTERS OF BASIC PROGRAM FILE
420 GOSUB 7000 : IF C <> 255 THEN PRINT "NOT A TOKENIZED FILE" : END
430 GOSUB 4000
440 REM
500 REM ***********CONTINUE READING THE FILE: FILL ARRAYS LABEL$ AND LINE%
510 REM ************* WITH VARIABLE NAMES AND LINE NUBERS *******************
520 WHILE ADR <> 0
530     REM ******* GET LINE NUMBER (A 2 BYTE INTEGER VALUE) ****************
540     GOSUB 7000 : LOW.BYTE = C
550     GOSUB 7000 : HIGH.BYTE = C
560     LINE.NO% = (HIGH.BYTE * 256) + LOW.BYTE
570     LOCATE 10,1 :CLS : PRINT "Processing Line Number ";LINE.NO%
580     GOSUB 7000      'get first character after line number
590     REM ********* NOW READ THE REST OF THE LINE *************************
600     WHILE C<>0      'C=0 indicates the end of the line
610             IF C=143 OR C=132 THEN WHILE C<>0 : GOSUB 7000 : WEND : GOTO 720                        'remark or data statement--skip to end of line
620             IF C=209 THEN LABEL.NUMBER=LABEL.NUMBER + 1 : LABEL$(LABEL.NUMBE                        R) = "FN" : GOSUB 5030 : GOTO 720 'get user defined fun
630             IF C>127 GOTO 710       'SKIP OVER ANY OTHE TOKENS
640             IF (C>64 AND C<91) THEN GOSUB 5000 : GOTO 720
650             IF C=14 THEN GOSUB 6000 : GOTO 720      'get line # ref
660 IF C=34 THEN GOSUB 7000 : WHILE C<>34 AND C<>0 : GOSUB 7000 : WEND : IF C=0 GOTO 720 : GOTO 710
670 IF C=15 THEN GOSUB 7000 : GOTO 710
680             IF (C>10 AND C<14) OR C=28 THEN GOSUB 7000 : GOSUB 7000 : GOTO 710
690             IF C=29 THEN FOR I=1 TO 4 : GOSUB 7000 : NEXT I : GOTO 710
700             IF C=31 THEN FOR I=1 TO 8 : GOSUB 7000 : NEXT I : GOTO 710
710             GOSUB 7000
720     WEND
730     GOSUB 4000      'begin new line; get next value for offset address
740 WEND
750 REM
800 REM ********************** sort labels and line numbers
810 LOCATE 12,1 : PRINT "Processing Complete . . "
820 PASS=0
830 G%=LABEL.NUMBER
840 PASSES=INT(LOG(G%)/LOG(2))
850 WHILE G%>1
860     PASS=PASS+1
870     LOCATE 14,1 : PRINT "Sorting: Pass ";PASS;" OF ";PASSES;" Passes";
880     SORTED=FALSE
890     G%=G%\2
900     WHILE NOT SORTED
910             SORTED=TRUE
920             FOR I%=1 TO LABEL.NUMBER-G%
930                     IG%=I%+G%
940                     IF LABEL$(I%)<LABEL$(IG%) GOTO 1030
950                     IF LABEL$(I%)=LABEL$(IG%) GOTO 1000
960                             SWAP LABEL$(I%),LABEL$(IG%)
970                             SWAP LINE.REF%(I%),LINE.REF%(IG%)
980                             SORTED=FALSE
990                             GOTO 1030
1000                    IF LINE.REF%(I%)=<LINE.REF%(IG%) GOTO 1030
1010                            SWAP LINE.REF%(I%),LINE.REF%(IG%)
1020                            SORTED=FALSE
1030            NEXT I%
1040    WEND
1050 WEND
1060 LOCATE 16,1 : PRINT "Sort Complete . . . Writing File" : PRINT
1070 REM
2000 REM *************** CREATE FILE NAME FOR LISTING ***********************
2010 PERPOS = INSTR(FILENAME$,".")
2020 IF PERPOS=0 THEN PERPOS=LEN(FILENAME$) + 1
2030 LISTFILE$ = LEFT$(FILENAME$,PERPOS-1) + ".CRF"
2040 OPEN LISTFILE$ FOR OUTPUT AS #2
2050 PRINT #2,"Cross Reference Listing For Program File: ";FILENAME$
2060 PRINT #2,"Created At ";TIME$;" On ";DATE$
2070 REM
3000 REM ********** WRITE CROSS REFERENCE TABLE TO FILE *********************
3010 I = 1 : PRINT #2,                          '*NOTE FOR LINE 3070
3020 WHILE I =< LABEL.NUMBER                    '* N>3 GIVES 40 COL
3030    PRINT #2, : PRINT #2, LABEL$(I);TAB(18);'* N>8 GIVES 80 COL
3040    CURRENT.LABEL$ = LABEL$(I) : N = 1      '* N>16 GIVES 132 COL
3050    WHILE LABEL$(I) = CURRENT.LABEL$        '****************************
3060            PRINT #2, USING "#####  ";LINE.REF%(I);
3070            I = I+1 : N=N+1 : IF N>8 THEN PRINT #2, : PRINT #2, TAB(18); : N=1
3080    WEND
3090    PRINT #2,       'begin new line
3100 WEND
3110 PRINT #2, : KEY ON : BEEP : END
3120 REM
4000 REM *************** SUBROUTINE TO OBTAIN BASIC'S OFFSET ADDRESS FOR THIS LINE
4010 GOSUB 7000 : LOW.BYTE = C
4020 GOSUB 7000 : HIGH.BYTE = C
4030 ADR = HIGH.BYTE + LOW.BYTE
4040 RETURN
4050 REM
5000 REM ****** SUBROUTINE TO GET VARIABLE NAME ******************
5010 LABEL.NUMBER = LABEL.NUMBER + 1
5020 LABEL$(LABEL.NUMBER) = CHR$(C)             'PUT FIRST CHARACTER IN LABEL
5030 GOSUB 7000
5040 WHILE (C>47 AND C<58) OR (C>64 AND C<91) OR C=46 'add legal characters
5050    LABEL$(LABEL.NUMBER) = LABEL$(LABEL.NUMBER) + CHR$(C)
5060    GOSUB 7000
5070 WEND
5080 IF (C>34 AND C<38) OR C=33 THEN LABEL$(LABEL.NUMBER)=LABEL$(LABEL.NUMBER)+CHR$(C) : GOSUB 7000             'get variable type symbol if any
5090 WHILE C=32 : GOSUB 7000 : WEND             'skip blanks
5100 IF C=40 THEN LABEL$(LABEL.NUMBER)=LABEL$(LABEL.NUMBER)+"(SUB):GOSUB 7000
5110 LINE.REF%(LABEL.NUMBER) = LINE.NO%
5120 RETURN
5130 REM
6000 REM ************ SUBROUTINE TO GET LINE NUMBER REFERENCE ****************
6010 LABEL.NUMBER = LABEL.NUMBER + 1
6020 LINE.REF%(LABEL.NUMBER) = LINE.NO%
6030 GOSUB 7000 : LOW.BYTE = C
6040 GOSUB 7000 : HIGH.BYTE = C
6050 LABEL$(LABEL.NUMBER) = SPACE$(5)
6060 RSET LABEL$(LABEL.NUMBER) = STR$((HIGH.BYTE*256)+LOW.BYTE)
6070 GOSUB 7000
6080 RETURN
6090 REM
7000 REM ********* SUBROUTINE TO GET ASCII VALUE FOR NEXT CHARACTER (C) *******
7010 IF POINTER < 128 GOTO 7040
7020 GET #1             'refill buffer
7030 POINTER=0          'and reset pointer
7040 POINTER = POINTER + 1
7050 C = ASC(C$(POINTER))       'get next character ASCII value
7060 RETURN
```

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk 0145

     Volume in drive A has no label
     Directory of A:\

    UPNUM    DOC       512   3-07-84   1:26p
    SQIBM    COM     14336   3-28-84   4:11a
    XREF     BAS      5504   4-24-84   5:17p
    SQIBM    DOC       768   3-28-84   4:12a
    BINSIX   EXE     15744   4-24-84   5:21p
    USQIBM   COM     22016   3-17-84  10:02p
    USQIBM   DOC       637   3-28-84   4:38a
    BINSIX   DOC      4736   4-24-84   5:23p
    ASMGEN   COM     11264   4-24-84   5:26p
    ASMGEN   DOC     27904   4-24-84   5:31p
    DIP-MEM  COM      1536   4-24-84   5:33p
    DIP-MEM  DOC      2688   4-24-84   5:34p
    WRITECOM BAS      1152   4-24-84   5:36p
    WRT      DOC      1152   4-24-84   5:37p
    WRTP     COM       512   4-24-84   5:38p
    WRTE     COM       512   4-24-84   5:39p
    VDISK    COM       768   4-24-84   5:40p
    RSVD     COM     19328   4-24-84   5:46p
    MAKEDATA BAS      5120   4-24-84   5:48p
    TABS     BAS      3840   4-24-84   5:50p
    CROSSOPT           128   4-24-84   5:52p
    COMP     BAS      3456   4-24-84   5:54p
    UPNUM    COM       256   3-07-84   1:24p
    CRC      TXT      1640  11-13-84   3:12p
    CRCK4    COM      1536  10-21-82   7:54p
           25 file(s)     147045 bytes
                            8704 bytes free
