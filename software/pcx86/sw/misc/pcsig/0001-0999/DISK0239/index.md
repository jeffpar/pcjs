---
layout: page
title: "PC-SIG Diskette Library (Disk #239)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0239/
machines:
  - id: ibm5150
    type: pcx86
    config: /machines/pcx86/ibm/5150/cga/256kb/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0239"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5150" %}

{% comment %}info_begin{% endcomment %}

## Information about "IPCO GRAPH PROGRAM"

    Most of this disk's mix of programs concern higher math functions and
    most supply graphics capabilities for plotting them out.  CURVE.BAS,
    for example, calculates linear, exponential and logorithmic output and
    offers multiple plot options for the Least Mean Fitting Sqaures Curve;
    it requires color graphics and the rest run with a monochrome display.
    4028-A.BAS, on the other hand, is a musical program that allows an
    interlude in a hard day of pounding simultaneous equations.
    
    System Requirements: Some programs require BASIC, color graphics,
    and two disk drives
    
    How to Start:  Enter TYPE CURVE.NFO and press <ENTER> for information
    on the CURVE program.  For instructions on running BASIC programs,
    please refer to the GETTING STARTED section in this catalog.
    
    File Descriptions:
    
    1004-B   BAS  Mini word processor/mail merge
    1005-A   BAS  Prints 3x5 recipe cards for address listing
    1009-A   BAS  Form generation, daily log sheet
    3012-A   BAS  Multiple linear regression coefficients
    3006-A   BAS  Matrix inversion & simultaneous equations
    3003-A   BAS  Plots probability curve
    3002-A   BAS  A neat non-graphics mini graph plot
    3014-A   BAS  Multiple regression analysis package
    CURVE    BAS  Linear, exponential, logorithmic & power equation
    CURVE    ABS  Introduction for CURVE.BAS
    CURVE    NFO  Documentation for CURVE.BAS  (14K)
    5006-A   BAS  Spelling bee exercisor
    4028-A   BAS  Musical change of pace
    LOGMENU  LOG  A BASIC program that records entry and exit times
    7013-A   BAS  Prints in italics on Epson printer
    LOGREV   LOG  Used by LOGMENU.LOG to keep times
    LOGON    LOG  Used by LOGMENU.LOG to log on
    7042-A   BAS  Mini data menu: directories, printer mode etc.
    7037-A   BAS  Changes printer mode
    LOGOFF   LOG  Used by LOGMENU.LOG to leave system
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## 1004-B.BAS

{% raw %}
```bas
100 ' WORDMERG.BAS                                           VERSION 2.0
110 '
120 ' ******************************************************************
130 ' ******************************************************************
140 '
150 ' MINI WORD PROCESSOR-MAIL MERGE
160 '
170 ' WILLIAM HT BAILEY                                      AUGUST 1982
180 '
190 ' ******************************************************************
200 '
210 '          ---------- LIST OF VARIABLES -----------
220 '
230 ' A$     : Operator's response to a cue.
235 ' B$     : Set of valid character responses.
250 ' BEGIN% : First line of a list operation.
260 ' E%     : Last line of a list operation.
265 ' F$     : Name of user's text file.
270 ' FLAG1$ : Indicator of cassette or disk storage.
280 ' FLAG2$ : Indicator of normal or enhanced printing.
290 ' FLAG3% : End of file flag.
310 ' I%     : Indexing variable.
320 ' J%     : Indexing variable.
330 ' K%     : Indexing variable.
340 ' L%     : Indexing variable.
345 ' M$     : Name of auxillary file.
347 ' MB$    : Modify line buffer.
350 ' NEWLN$ : File buffer. Holds the modified file during editing.
360 ' OLDLN$ : File buffer. Holds the original file during editing.
365 ' P%     : Cursor position
370 ' SEL%   : Operator's response to a cue.
380 '
390 ' *******************************************************************
400 ' *******************************************************************
410 '
420 '          ------------ INITIALIZATION ------------
430 '
440 OPTION BASE 1: DIM OLDLN$(108),NEWLN$(60): DEF SEG: POKE 106,0
445 CLS: CLOSE
450 KEY OFF: LOCATE 10,1,1: PRINT "Are you using cassette or disk?"
460 PRINT "Enter C for cassette or D for disk."
470 FLAG1$=INKEY$: IF FLAG1$="" THEN 470
480 IF FLAG1$="C" OR FLAG1$="c" OR FLAG1$="D" OR FLAG1$="d" THEN 500
490 PRINT: PRINT "INVALID ENTRY": GOTO 460
500 ON ERROR GOTO 5070
510 '
520 CLS: PRINT TAB(7) "*** MINI WORD PROCESSOR-MAIL MERGE ***": PRINT
530 PRINT TAB(23) "MENU": PRINT
535 PRINT "    0. EXIT"
540 PRINT "    1. DESCRIPTION"
550 PRINT "    2. CREATE/EDIT A TEXT FILE"
560 PRINT "    3. INITIALIZE THE AUXILLARY FILE"
570 PRINT "    4. EDIT AN AUXILLARY FILE"
580 PRINT "    5. OUTPUT A TEXT FILE"
590 PRINT "    6. OUTPUT AN AUXILLARY FILE"
600 PRINT "    7. OUTPUT A TEXT FILE WITH BLOCK MERGE"
610 PRINT "    8. LIST DISK FILES": PRINT
620 PRINT "       Enter selection";
625 A$=INKEY$: IF A$="" THEN 625 ELSE SEL%=VAL(A$)
630 IF SEL%>-1 AND SEL%<9 THEN 650
640 PRINT: PRINT "       INVALID ENTRY": GOTO 620
650 IF SEL%=0 THEN ON ERROR GOTO 0: END
660 ON SEL% GOSUB 10050,15050,20050,25050,30050,35050,40050,45050
670 GOTO 520
5000 '
5010 ' *****************************************************************
5020 '
5030 '         ------------- SUBROUTINES --------------
5040 '
5050 ' ERROR HANDLER
5060 '
5070 IF ERR=53 THEN PRINT: PRINT "*** FILE NON-EXISTENT ***": GOTO 5100
5080 IF ERR=27 THEN PRINT: PRINT "*** PRINTER NOT READY ***": GOTO 5100
5090 PRINT: PRINT "*** ERROR";ERR;" DETECTED ON LINE";ERL;" ***"
5100 PRINT "    Press space bar to return to menu.";
5110 A$=INKEY$: IF A$="" THEN 5110 ELSE RESUME 520
5120 '
5130 ' PREPARE CASSETTE
5140 '
5150 PRINT: PRINT "Prepare cassette for access."
5160 PRINT "Press space bar when ready."
5170 A$=INKEY$: IF A$="" THEN 5170 ELSE RETURN
5180 '
5190 ' PREPARE PRINTER
5200 '
5210 PRINT: PRINT "Do you want normal or emphasized print?(N/E)";
5220 FLAG2$=INKEY$: IF FLAG2$="" THEN 5220 ELSE PRINT FLAG2$
5230 IF FLAG2$="N" OR FLAG2$="n" OR FLAG2$="E" OR FLAG2$="e" THEN 5250
5240 PRINT "INVALID ENTRY": GOTO 5210
5250 PRINT "Prepare printer for output."
5260 PRINT "Press space bar when ready."
5270 A$=INKEY$: IF A$="" THEN 5270 ELSE RETURN
5280 '
5290 ' PRESS SPACE BAR
5300 '
5310 PRINT: PRINT "*** PRESS SPACE BAR TO CONTINUE ***"
5320 A$=INKEY$: IF A$="" THEN 5320 ELSE RETURN
5330 '
5340 ' OPERATOR INPUT. CHARACTER RESPONSE
5350 '
5360 A$=INKEY$: IF A$="" THEN 5360 ELSE I%=1: FLAG3%=0
5370 WHILE I%<=L% AND FLAG3%=0: IF A$=MID$(B$,I%,1) THEN FLAG3%=1
5380 I%=I%+1: WEND
5390 IF FLAG3%=1 THEN PRINT A$: RETURN
5400 PRINT: PRINT "INVALID ENTRY. RE-ENTER";: GOTO 5360
5410 '
5420 ' OPERATOR INPUT. INTEGER RESPONSE
5430 '
5440 INPUT SEL%: IF SEL%>=BEGIN% AND SEL%<=E% THEN RETURN
5450 PRINT: PRINT "INVALID ENTRY. RE-ENTER.";: GOTO 5440
5460 '
5470 ' OPERATOR INPUT. NUMBER OF LINES TO EDIT
5480 '
5490 INPUT L%: IF L%>=1 AND L%<=(61-SEL%) THEN RETURN
5500 PRINT: PRINT "INVALID ENTRY. RE-ENTER.";: GOTO 5490
10000 '
10010 ' ****************************************************************
10020 '
10030 '        ------------- DESCRIPTION --------------
10040 '
10050 CLS: PRINT "   --- DESCRIPTION ---": PRINT
10060 PRINT "This program allows the user to create any number of text"
10070 PRINT "files which are 74 characters wide, up to 60 lines long and"
10080 PRINT "are user named. These files can be edited and output to"
10090 PRINT "the printer. Thus this program serves as a rudimentary"
10100 PRINT "word processor.": PRINT
10110 PRINT "User named auxillary files can also be created. These"
10120 PRINT "auxillary files are divided into 18 blocks of 6 lines. A"
10130 PRINT "selected block can be inserted between lines 6 and 7 of a"
10140 PRINT "text file during output. Thus this program can also serve"
10150 PRINT "as a rudimentary mail merger.": PRINT
10160 PRINT "All files are created as sequential files, so that cassette"
10170 PRINT "users can be supported.": PRINT
10180 PRINT "SELECTION 2"
10190 PRINT "Under this selection the user can insert lines, delete"
10200 PRINT " lines, change lines and modify lines."
10210 PRINT "The INSERT request inserts before the selected line."
10220 GOSUB 5310: CLS: PRINT "   ---DESCRIPTION continued ---"
10230 PRINT "The user should write a XXXX line to designate the end of"
10240 PRINT " the text file, if it is less than 60 lines long."
10245 PRINT "The MODIFY request allows in-line editing."
10250 PRINT "The LIST request lists 20 lines at a time."
10260 PRINT "Lines longer than 74 characters are truncated. The"
10270 PRINT " computer will beep, if a truncation has occurred."
10280 PRINT "The END request writes the modified buffer to file."
10290 PRINT "The QUIT request restores the unmodified buffer.": PRINT
10300 PRINT "SELECTION 3"
10310 PRINT "This selection initializes an auxillary file.": PRINT
10320 PRINT "SELECTION 4"
10330 PRINT "This selection allows the user to fill in selected 6 line"
10340 PRINT " blocks. Lines longer than 74 characters are truncated."
10350 PRINT " The computer will beep, if a truncation has occurred."
10360 PRINT "If the first line of a block is a XXXX, then that block"
10370 PRINT " and those following are treated as null. If the first"
10380 PRINT " line of a block is a ZZZZ, then that block only is"
10390 PRINT " treated as null.": GOSUB 5310: CLS
10400 PRINT "   --- DESCRIPTION continued ---": PRINT
10410 PRINT "SELECTION 5"
10420 PRINT "Under this selection a text file can be output to the"
10430 PRINT " display or printer."
10440 PRINT "If output is to the display then 20 lines at a time are"
10450 PRINT " displayed."
10460 PRINT "If output is to the printer then the print can be either"
10470 PRINT " normal or emphasized."
10480 PRINT "The output terminates when either line 60 or a XXXX is"
10490 PRINT " encountered.": PRINT
10500 PRINT "SELECTION 6"
10510 PRINT "This selection allows the user to output the auxillary file"
10520 PRINT " to display or printer."
10530 PRINT "If output is to the display, then 18 lines at a time are"
10540 PRINT " displayed. A XXXX line encountered at the beginning of a"
10550 PRINT " block terminates output. A ZZZZ line encountered at the"
10560 PRINT " beginning of a block generates a space block in the"
10570 PRINT " display.": GOSUB 5310: CLS
10580 PRINT "   ---DESCRIPTION continued ---"
10590 PRINT "If output is to the printer, the print can be either"
10600 PRINT " normal or emphasized. A XXXX line encountered at the"
10610 PRINT " beginning of a block terminates output. A ZZZZ line"
10620 PRINT " encountered at the beginning of a block causes the"
10630 PRINT " printer to skip that block."
10640 PRINT "When outputting to printer, a 0 to 4 line space may be"
10650 PRINT " selected between blocks."
10660 PRINT
10670 PRINT "SELECTION 7"
10680 PRINT "Under this selection a text file is output to the display"
10690 PRINT " or printer with a selected block from the auxillary file"
10700 PRINT " merged between lines 6 and 7. The output terminates at"
10710 PRINT " line 60 or a XXXX line."
10720 PRINT "If output is to the display, then 22 lines at a time are"
10730 PRINT " displayed. If output is to the printer, the print can"
10740 PRINT " be either normal or emphasized.":PRINT
10743 PRINT "SELECTION 8"
10745 PRINT "This selection lists the files on a selected disk.": PRINT
10750 PRINT "WILLIAM HT BAILEY   Phone: 215-924-0771         August 1982";
10760 GOSUB 5310: RETURN
15000 '
15010 ' ****************************************************************
15020 '
15030 '         ------------ EDIT TEXT FILE ------------
15040 '
15050 CLS: PRINT "   --- EDIT TEXT FILE ---"
15060 PRINT: PRINT "Enter file name ";: INPUT F$
15070 PRINT: PRINT "Is this a New or Old file?(N/O)";
15080 B$="NnOo": L%=4: GOSUB 5360
15090 IF A$="O" OR A$="o" THEN 15110
15093 A$="XXXX 6789 1 34567890 2 45678901 3 56789012 4 67890123 5 78901234 6 8"
15095 FOR I%=1 TO 60: NEWLN$(I%)=A$: NEXT I%: GOTO 15160
15100 '
15110 IF FLAG1$="C" OR FLAG1$="c" THEN GOSUB 5150
15120 OPEN F$ FOR INPUT AS #1: I%=1
15130 WHILE I%<=60 AND NOT EOF(1) : LINE INPUT#1,OLDLN$(I%)
15140 NEWLN$(I%)=OLDLN$(I%): I%=I%+1: WEND: CLOSE#1
15150 '
15155 PRINT
15160 PRINT"Insert,Delete,Change,Modify,List,End or Quit? (I/D/C/M/L/E/Q)";
15170 B$="IiDdCcMmLlEeQq": L%=14: GOSUB 5360
15180 IF A$="E" OR A$="e" THEN 15540
15190 IF A$="Q" OR A$="q" THEN 15610
15200 PRINT "Line number";
15205 BEGIN%=1: E%=60: GOSUB 5440
15207 IF A$="L" OR A$="l" THEN 15270
15208 PRINT "Number of lines";: GOSUB 5490
15210 IF A$="I" OR A$="i" THEN 15340
15220 IF A$="D" OR A$="d" THEN 15420
15230 IF A$="C" OR A$="c" THEN 15465
15235 IF A$="M" OR A$="m" THEN 15660
15240 '
15250 ' LIST 20 LINES
15260 '
15270 PRINT: BEGIN%=SEL%-9: E%=SEL%+10
15280 IF BEGIN%<1 THEN BEGIN%=1: E%=20
15285 IF E%>60 THEN BEGIN%=41: E%=60
15290 FOR J%=BEGIN% TO E%
15300 PRINT USING "##";J%;: PRINT ">";NEWLN$(J%): NEXT J%: GOTO 15160
15310 '
15320 'INSERT LINE
15330 '
15340 FOR K%=SEL% TO (SEL%+L%-1): IF K%=60 THEN 15360
15350 FOR J%=59 TO K% STEP -1: NEWLN$(J%+1)=NEWLN$(J%): NEXT J%
15360 PRINT:PRINT USING "##";K%;:PRINT ">";: LINE INPUT;NEWLN$(K%)
15370 IF LEN(NEWLN$(K%))>76 THEN BEEP:NEWLN$(K%)=LEFT$(NEWLN$(K%),76)
15380 NEXT K%: PRINT: GOTO 15160
15390 '
15400 ' DELETE LINE
15410 '
15420 FOR J%=SEL% TO (60-L%): NEWLN$(J%)=NEWLN$(J%+L%): NEXT J%
15430 FOR J%=60 TO (61-L%) STEP -1: NEWLN$(J%)="XXXX":NEXT J%: GOTO 15160
15440 '
15450 ' CHANGE LINE
15460 '
15465 FOR K%=SEL% TO (SEL%+L%-1)
15470 PRINT: PRINT USING "##";K%;: PRINT ">";NEWLN$(K%)
15480 PRINT USING "##";K%;: PRINT ">";: LINE INPUT;NEWLN$(K%)
15490 IF LEN(NEWLN$(K%))>76 THEN BEEP:NEWLN$(K%)=LEFT$(NEWLN$(K%),76)
15500 NEXT K%: GOTO 15160
15510 '
15520 ' END EDITING
15530 '
15540 IF FLAG1$="C" OR FLAG1$="c" THEN GOSUB 5150
15550 OPEN F$ FOR OUTPUT AS #1
15560 FOR J%=1 TO 60: PRINT#1,NEWLN$(J%): NEXT J%
15570 CLOSE#1: RETURN
15580 '
15590 ' QUIT EDITING
15600 '
15610 PRINT "Abort Edit?(Y/N)";: B$="YyNn": L%=4: GOSUB 5360
15620 IF A$="N" OR A$="n" THEN 15160 ELSE RETURN
15630 '
15640 ' MODIFY LINE
15650 '
15660 FOR K%=SEL% TO (SEL%+L%-1)
15670 PRINT: PRINT USING "##";K%;: PRINT ">";NEWLN$(K%);: LOCATE ,4,1
15680 A$=INKEY$: IF A$="" THEN 15680 ELSE P%=POS(0)
15690 IF A$=CHR$(13) THEN 15920
15700 IF LEN(A$)=2 THEN B$=MID$(A$,2,1) ELSE GOTO 15880
15710 IF ASC(B$)<>77 THEN 15750
15720 IF POS(0)=79 THEN 15680
15730 IF POS(0)=LEN(NEWLN$(K%))+1 THEN NEWLN$(K%)=NEWLN$(K%)+" "
15735 IF LEN(NEWLN$(K%))>76 THEN BEEP: NEWLN$(K%)=LEFT$(NEWLN$(K%),76):               GOTO 15680
15740 LOCATE ,(POS(0)+1): GOTO 15680
15750 IF ASC(B$)<>75 THEN 15780
15760 IF POS(0)=4 THEN 15680
15770 LOCATE ,(POS(0)-1): GOTO 15680
15780 IF ASC(B$)<>83 THEN 15830
15785 IF P%>LEN(NEWLN$(K%))+3 THEN 15680
15790 IF P%=4 THEN NEWLN$(K%)=MID$(NEWLN$(K%),2): GOTO 15820
15800 IF P%=LEN(NEWLN$(K%))+3 THEN                                                    NEWLN$(K%)=LEFT$(NEWLN$(K%),LEN(NEWLN$(K%))-1): GOTO 15820
15810 NEWLN$(K%)=LEFT$(NEWLN$(K%),(P%-4))+MID$(NEWLN$(K%),(P%-2))
15820 LOCATE ,4,0:PRINT NEWLN$(K%);" ";: LOCATE ,P%,1: GOTO 15680
15830 IF ASC(B$)<>82 THEN 15680
15835 IF P%>LEN(NEWLN$(K%))+3 THEN 15680
15840 IF P%=4 THEN NEWLN$(K%)=" "+NEWLN$(K%): GOTO 15860
15850 NEWLN$(K%)=LEFT$(NEWLN$(K%),(P%-4))+" "+MID$(NEWLN$(K%),(P%-3))
15860 IF LEN(NEWLN$(K%))>76 THEN BEEP: NEWLN$(K%)=LEFT$(NEWLN$(K%),76)
15870 LOCATE ,4,0: PRINT NEWLN$(K%);: LOCATE ,P%,1: GOTO 15680
15880 IF ASC(A$)<32 OR ASC(A$)>126 THEN 15680
15890 NEWLN$(K%)=LEFT$(NEWLN$(K%),(P%-4))+A$+MID$(NEWLN$(K%),(P%-2))
15900 IF LEN(NEWLN$(K%))>76 THEN BEEP: NEWLN$(K%)=LEFT$(NEWLN$(K%),76)
15910 LOCATE ,4,0: PRINT NEWLN$(K%);: LOCATE ,P%+1,1: GOTO 15680
15920 NEXT K%: PRINT: GOTO 15160
20000 '
20010 ' *****************************************************************
20020 '
20030 '         ------ INITIALIZE AUXILLARY FILE -------
20040 '
20050 CLS: PRINT "   --- INITIALIZE AUXILLARY FILE ---"
20055 LOCATE 10,1:INPUT "Enter name of auxillary file ";M$:PRINT
20060 PRINT "CURRENT DATA WILL BE DESTROYED"
20070 PRINT "Continue or Return to menu?(C/R)";
20080 B$="CcRr": L%=4: GOSUB 5360
20090 IF A$<>"C" AND A$<>"c" THEN RETURN
20100 IF FLAG1$="C" OR FLAG1$="c" THEN GOSUB 5150
20110 PRINT: PRINT: PRINT "Initializing auxillary file"
20120 OPEN M$ FOR OUTPUT AS #2
20125 A$="XXXX 6789 1 34567890 2 45678901 3 56789012 4 67890123 5 78901234 6 8"
20130 FOR J%=1 TO 108: OLDLN$(J%)=A$: PRINT#2,OLDLN$(J%): NEXT J%
20140 CLOSE#2: RETURN
25000 '
25010 ' *****************************************************************
25020 '
25030 '         --------- EDIT AUXILLARY FILE ----------
25040 '
25050 CLS: PRINT "   --- EDIT AUXILLARY FILE ---"
25055 PRINT:INPUT "Enter name of auxillary file ";M$
25060 IF FLAG1$="C" OR FLAG1$="c" THEN GOSUB 5150
25070 OPEN M$ FOR INPUT AS #2: J%=1
25080 WHILE J%<=108 AND NOT EOF(2): LINE INPUT#2,OLDLN$(J%)
25090 J%=J%+1: WEND: CLOSE#2
25100 '
25110 PRINT: PRINT "Enter block number (1-18) or 0 to return to menu";
25120 BEGIN%=0: E%=18: GOSUB 5440: IF SEL%=0 THEN 25240
25130 PRINT: PRINT "Block";SEL%
25140 FOR J%=((SEL%-1)*6+1) TO ((SEL%-1)*6+6)
25150 PRINT USING "###";J%;: PRINT ">";OLDLN$(J%): NEXT J%
25160 '
25170 PRINT: PRINT "Overwrite? (Y/N)";: B$="YyNn": L%=4: GOSUB 5360
25180 IF A$="N" OR A$="n" THEN 25100
25190 FOR J%=((SEL%-1)*6+1) TO ((SEL%-1)*6+6)
25200 PRINT USING "###";J%;:PRINT ">";: LINE INPUT;OLDLN$(J%): PRINT
25210 IF LEN(OLDLN$(J%))>76 THEN BEEP:OLDLN$(J%)=LEFT$(OLDLN$(J%),76)
25220 NEXT J%: GOTO 25100
25230 '
25240 IF FLAG1$="C" OR FLAG1$="c" THEN GOSUB 5150
25250 OPEN M$ FOR OUTPUT AS #2
25260 FOR J%=1 TO 100: PRINT#2,OLDLN$(J%): NEXT J%: CLOSE#2: RETURN
30000 '
30010 ' *****************************************************************
30020 '
30030 '         ----------- OUTPUT TEXT FILE ------------
30040 '
30050 CLS: PRINT "   --- OUTPUT TEXT FILE ---"
30060 PRINT: INPUT "Enter file name";F$
30070 IF FLAG1$="C" OR FLAG1$="c" THEN GOSUB 5150
30080 OPEN F$ FOR INPUT AS #1: I%=1
30090 WHILE I%<=60 AND NOT EOF(1): LINE INPUT#1,OLDLN$(I%)
30100 I%=I%+1:WEND: CLOSE#1
30110 '
30120 PRINT: PRINT "Output to Display or Printer? (D/P)";
30130 B$="DdPp": L%=4: GOSUB 5360
30140 IF A$="P" OR A$="p" THEN 30270
30150 '
30160 ' OUTPUT TO DISPLAY
30170 '
30180 FLAG3%=0: I%=0
30190 WHILE I%<=2 AND FLAG3%=0: CLS: J%=I%*20: K%=1
30200 WHILE K%<=20 AND FLAG3%=0
30210 IF MID$(OLDLN$(J%+K%),1,4)="XXXX" THEN FLAG3%=1: GOTO 30230
30220 PRINT OLDLN$(J%+K%)
30230 K%=K%+1: WEND: GOSUB 5310: I%=I%+1: WEND
30231 PRINT: PRINT "Output to printer? (Y/N)";: B$="YyNn": L%=4
30232 GOSUB 5360: IF A$="N" OR A$="n" THEN RETURN
30240 '
30250 ' OUTPUT TO PRINTER
30260 '
30270 GOSUB 5210: IF FLAG2$="E" OR FLAG2$="e" THEN LPRINT CHR$(27);"E"
30280 I%=1: FLAG3%=0
30290 WHILE I%<=60 AND FLAG3%=0
30300 IF MID$(OLDLN$(I%),1,4)="XXXX" THEN FLAG3%=1 ELSE LPRINT OLDLN$(I%)
30310 I%=I%+1: WEND: IF FLAG2$="E" OR FLAG2$="e" THEN LPRINT CHR$(27);"F"
30320 PRINT: PRINT "Another printout? (Y/N)";: B$="YyNn": L%=4
30330 GOSUB 5360: IF A$="Y" OR A$="y" THEN LPRINT CHR$(12): GOTO 30270
30340 LPRINT CHR$(12): RETURN
35000 '
35010 ' *****************************************************************
35020 '
35030 '         -------- OUTPUT AUXILLARY FILE ----------
35040 '
35050 CLS: PRINT "   --- OUTPUT AUXILLARY FILE ---"
35055 PRINT: INPUT "Enter name of auxillary file ";M$
35060 IF FLAG1$="C" OR FLAG1$="c" THEN GOSUB 5150
35070 OPEN M$ FOR INPUT AS #2: J%=1
35080 WHILE J%<=108 AND NOT EOF(2): LINE INPUT#2,OLDLN$(J%)
35090 J%=J%+1: WEND: CLOSE#2
35100 '
35110 PRINT: PRINT "Output to Display or Printer? (D/P)";
35120 B$="DdPp": L%=4: GOSUB 5360
35130 IF A$="P" OR A$="p" THEN 35300
35140 '
35150 ' OUTPUT TO DISPLAY
35160 '
35170 FLAG3%=0: I%=0
35180 WHILE I%<=17 AND FLAG3%=0: CLS: J%=1
35190 WHILE J%<=3 AND FLAG3%=0:K%=I%*6:IF OLDLN$(K%+1)<>"ZZZZ" THEN 35210
35200 FOR L%=1 TO 6: PRINT "": NEXT L%: GOTO 35230
35210 IF MID$(OLDLN$(K%+1),1,4)="XXXX" THEN FLAG3%=1: GOTO 35230
35220 FOR L%=(K%+1) TO (K%+6): PRINT OLDLN$(L%): NEXT L%
35230 IF J%<>4 THEN PRINT
35235 J%=J%+1: I%=I%+1: WEND
35240 GOSUB 5310: WEND
35250 PRINT: PRINT "Output to printer? (Y/N)";: B$="YyNn": L%=4
35260 GOSUB 5360: IF A$="N" OR A$="n" THEN RETURN
35270 '
35280 ' OUTPUT TO PRINTER
35290 '
35300 PRINT: PRINT "Number of spaces between blocks? (0-4)";
35310 BEGIN%=0: E%=4: GOSUB 5440
35320 GOSUB 5210: IF FLAG2$="E" OR FLAG2$="e" THEN LPRINT  CHR$(27);"E"
35330 I%=0: FLAG3%=0
35340 WHILE I%<=17 AND FLAG3%=0: J%=I%*6
35350 IF OLDLN$(J%+1)="ZZZZ" THEN 35400
35360 IF MID$(OLDLN$(J%+1),1,4)="XXXX" THEN FLAG3%=1: GOTO 35400
35370 FOR L%=(J%+1) TO (J%+6): LPRINT OLDLN$(L%): NEXT L%
35380 IF SEL%=0 THEN 35400
35390 FOR L%=1 TO SEL%: LPRINT: NEXT L%
35400 I%=I%+1: WEND: IF FLAG2$="E" OR FLAG2$="e" THEN LPRINT CHR$(27); "F"
35410 PRINT: PRINT "Another printout? (Y/N)";: B$="YyNn": L%=4
35420 GOSUB 5360: IF A$="Y" OR A$="y" THEN LPRINT CHR$(12): GOTO 35300
35430 LPRINT CHR$(12): RETURN
40000 '
40010 ' *****************************************************************
40020 '
40030 '         -- OUTPUT TEXT FILE WITH BLOCK MERGE ----
40040 '
40050 CLS: PRINT "   --- OUTPUT TEXT FILE WITH BLOCK MERGE ---"
40060 PRINT: INPUT "Enter file name";F$
40070 IF FLAG1$="C" OR FLAG1$="c" THEN GOSUB 5150
40080 OPEN F$ FOR INPUT AS #1: I%=1
40090 WHILE I%<=60 AND NOT EOF(1): LINE INPUT#1,NEWLN$(I%)
40100 I%=I%+1:WEND: CLOSE#1
40110 PRINT: INPUT "Enter name of auxillary file ";M$
40120 IF FLAG1$="C" OR FLAG1$="c" THEN GOSUB 5150
40130 OPEN M$ FOR INPUT AS #2: J%=1
40140 WHILE J%<=108 AND NOT EOF(2): LINE INPUT#2,OLDLN$(J%)
40150 J%=J%+1: WEND: CLOSE#2
40160 '
40170 PRINT "Enter block number (1-18)";
40180 BEGIN%=1: E%=18: GOSUB 5440
40190 IF OLDLN$((SEL%-1)*6+1)="ZZZZ" THEN PRINT "Null entry": GOTO 40170
40200 IF MID$(OLDLN$((SEL%-1)*6+1),1,4)<>"XXXX" THEN 40210
40205 PRINT "Null entry": GOTO 40170
40210 PRINT: PRINT "Output to Display or Printer? (D/P)";
40220 B$="DdPp": L%=4: GOSUB 5360
40230 IF A$="P" OR A$="p" THEN 40420
40240 '
40250 ' OUTPUT TO DISPLAY
40260 '
40270 CLS: FOR I%=1 TO 6: PRINT NEWLN$(I%): NEXT I%
40280 FOR I%=1 TO 6: PRINT OLDLN$((SEL%-1)*6+I%): NEXT I%
40290 I%=7: FLAG3%=0
40300 WHILE I%<=16 AND FLAG3%=0
40310 IF MID$(NEWLN$(I%),1,4)="XXXX" THEN FLAG3%=1 ELSE PRINT NEWLN$(I%)
40320 I%=I%+1: WEND: GOSUB 5310: IF FLAG3%=1 THEN 40370 ELSE I%=0
40330 WHILE I%<=1 AND FLAG3%=0: CLS: J%=I%*22+16: K%=1
40340 WHILE K%<=22 AND FLAG3%=0
40350 IF MID$(NEWLN$(J%+K%),1,4)="XXXX" THEN FLAG3%=1 ELSE PRINT NEWLN$(J%+K%)
40360 K%=K%+1: WEND: GOSUB 5310: I%=I%+1: WEND
40370 PRINT: PRINT "Output to printer? (Y/N)";: B$="YyNn": L%=4
40380 GOSUB 5360: IF A$="N" OR A$="n" THEN RETURN
40390 '
40400 ' OUTPUT TO PRINTER
40410 '
40420 GOSUB 5210: IF FLAG2$="E" OR FLAG2$="e" THEN LPRINT CHR$(27);"E"
40430 FOR I%=1 TO 6: LPRINT NEWLN$(I%): NEXT I%
40440 FOR I%=1 TO 6: LPRINT OLDLN$((SEL%-1)*6+I%): NEXT I%
40450 I%=7: FLAG3%=0
40460 WHILE I%<=60 AND FLAG3%=0
40470 IF MID$(NEWLN$(I%),1,4)="XXXX" THEN FLAG3%=1 ELSE LPRINT NEWLN$(I%)
40480 I%=I%+1: WEND: IF FLAG2$="E" OR FLAG2$="e" THEN  LPRINT CHR$(27);"F"
40490 PRINT: PRINT "Another printout? (Y/N)";: B$="YyNn": L%=4
40500 GOSUB 5360: IF A$="Y" OR A$="y" THEN LPRINT CHR$(12): GOTO 40170
40510 LPRINT CHR$(12): RETURN
45000 '
45010 ' ****************************************************************
45020 '
45030 '            ------------ LIST DISK FILES -------------
45040 '
45050 CLS:PRINT "    --- LIST DISK FILES ---"
45060 PRINT: PRINT "Drive A, Drive B or Return? (A/B/R) ";:B$="AaBbRr":L%=6
45065 GOSUB 5360
45070 IF A$="R" OR A$="r" THEN RETURN
45080 PRINT: PRINT TAB(27);"*** Files On Drive ";A$;" ***":FILES A$+":*.*"
45090 PRINT: GOTO 45060
49996 '
49997 ' ****************************************************************
49998 ' ****************************************************************
49999 END
```
{% endraw %}

## 1005-A.BAS

{% raw %}
```bas
100 CLS
110 A$=STRING$(80,205)
120 PRINT A$
130 PRINT TAB(19)"CLUB ADDRESS 3X5 CARD GENERATOR 1005-A.BAS"
140 COLOR 23,0,0
150 PRINT :PRINT :PRINT TAB(38)"IPCO"
160 COLOR 7,0,0
170 PRINT :PRINT :PRINT TAB(29)"INTERNATIONAL PC OWNERS"
180 PRINT :PRINT :PRINT TAB(17)"p.o. box 10426, pittsburgh, pennsylvania 15234"
190 PRINT A$
200 PRINT :PRINT :PRINT :PRINT :PRINT
210 PRINT TAB(28)"PRESS ANY KEY TO CONTINUE"
220 A$=INKEY$:IF A$="" THEN 220
230 CLS
240 KEY OFF:CLS
250 '                Club Address Data Card Generator  ADDRFLCD
260 '                    Michael Csontos  7-30-82
270 PRINT " This program generates form filecards (3x5 index cards) for the collection and"
280 PRINT " filing of club membership or other name and address information.  They look"
290 PRINT " something like the following.":PRINT
300 PRINT
310 PRINT "              Name:______________________________________________
320 PRINT "               as you want it on address labels
330 PRINT "             Street Address______________________________________
340 PRINT "               for mailing purposes
350 PRINT "             City___________________________State________ZIP_____
360 PRINT
370 PRINT "             Company_______________________Mail Code_____________
380 PRINT "               may help in distributing meeting notices
390 PRINT "             Phone:Home___________________Work___________________
400 PRINT
410 PRINT "             Club Office_________________________________________
420 PRINT "               office or duties assumed during the current year
430 PRINT
440 PRINT " The program is set up for an Epson MX-80 with Graphtrack. Other printers may
450 PRINT " require modification of the printer commands.  The output is intended for
460 PRINT " continuous sprocket feed form index cards (one across) such as are available
470 PRINT " from Misco Inc., Box 399, Holmdel, NJ 07733, 800/631-2227 (Cat. # 8871)
480 PRINT
490 INPUT "How many cards do you want in this run"; NUMBER
500 IF NUMBER<1 OR INT(NUMBER)<>NUMBER THEN PRINT "Please enter an integer number from 1 to the number of blank cards you have":GOTO 490
510 INPUT "Is the printer ready to print the cards";Q$
520 IF Q$="y" OR Q$="Y" THEN GOTO 550
530 IF Q$="n" OR Q$="N" THEN GOTO 510
540 PRINT "Please enter Y, y, N, or n":GOTO 510
550 PRINTED=0
560 LPRINT CHR$(27)CHR$(64);'                           reset printer
570 LPRINT CHR$(27)CHR$(67)CHR$(0)CHR$(3);'             3 inch form
580 LPRINT CHR$(15)CHR$(27)CHR$(65)CHR$(10);'           10/72 inch lines
590 IF NUMBER>0 THEN GOSUB 620  ELSE GOTO 780
600 NUMBER=NUMBER-1:PRINTED=PRINTED+1
610 GOTO 590
620 LPRINT CHR$(27)CHR$(69) "Name:" CHR$(27)CHR$(45)CHR$(1) STRING$(40,"_") CHR$(27)CHR$(45)CHR$(0)'
630 LPRINT CHR$(27)CHR$(70)CHR$(27)CHR$(83)CHR$(0) "    AS YOU WANT IT ON ADDRESS LABLES" CHR$(27)CHR$(72)
640 LPRINT
650 LPRINT CHR$(27)CHR$(69) "Street Address:" CHR$(27)CHR$(45)CHR$(1) STRING$(30,"_") CHR$(27)CHR$(45)CHR$(0)
660 LPRINT CHR$(27)CHR$(70)CHR$(27)CHR$(83)CHR$(0) "    FOR MAILING PURPOSES" CHR$(27)CHR$(72)
670 LPRINT
680 LPRINT CHR$(27)CHR$(69) "City:" CHR$(27)CHR$(45)CHR$(1) STRING$(17,"_") CHR$(27)CHR$(45)CHR$(0) "State:" CHR$(27)CHR$(45)CHR$(1) STRING$(5,"_") CHR$(27)CHR$(45)CHR$(0) "ZIP:" CHR$(27)CHR$(45)CHR$(1) STRING$(8,"_") CHR$(27)CHR$(45)CHR$(0)
690 LPRINT :LPRINT
700 LPRINT CHR$(27)CHR$(69) "Company:" CHR$(27)CHR$(45)CHR$(1) STRING$(13,"_") CHR$(27)CHR$(45)CHR$(0) "Mail Code:" CHR$(27)CHR$(45)CHR$(1) STRING$(14,"_") CHR$(27)CHR$(45)CHR$(0)
710 LPRINT CHR$(27)CHR$(70)CHR$(27)CHR$(83)CHR$(0) "    MAY HELP IN DISTRIBUTING MEETING NOTICES" CHR$(27)CHR$(72)
720 LPRINT
730 LPRINT CHR$(27)CHR$(69) "Phone:Home:" CHR$(27)CHR$(45)CHR$(1) STRING$(14,"_") CHR$(27)CHR$(45)CHR$(0) "Work:" CHR$(27)CHR$(45)CHR$(1) STRING$(15,"_") CHR$(27)CHR$(45)CHR$(0)
740 LPRINT :LPRINT
750 LPRINT "Club Office:" CHR$(27)CHR$(45)CHR$(1) STRING$(33,"_") CHR$(27)CHR$(45)CHR$(0)'
760 LPRINT CHR$(27)CHR$(70)CHR$(27)CHR$(83)CHR$(0) "    OFFICE OR DUTIES ASSUMED BY YOU DURING THE CURRENT YEAR" CHR$(27)CHR$(72)
770 LPRINT CHR$(140);:RETURN
780 PRINT PRINTED " cards completed.":PRINT:PRINT:KEY ON
790 LPRINT CHR$(27)CHR$(64);:END
800 ' SAVE"addrflcd
```
{% endraw %}

## 1009-A.BAS

{% raw %}
```bas
1 '     IPCO Software Exchange
2 '
3 '     Program - DAYLOG - submitted by:
4 '
5 '     Michael Csontos, 3228 Livonia Center Road, Lima, New York 14485
6 '
7 '     August 28, 1982
8 '
9 '
110 PRINT "This program generates a form for recording data on a day by day basis with
120 PRINT "      each line labeled with the day and date.  Columns are set up and labeled
130 PRINT "      by the user.":PRINT
140 PRINT "The form will look something like the following:":PRINT
150 PRINT "             Date____|_Title_1_|_Title_2_|_Title 3_|_Title_4_|_Title 5_|
160 PRINT "             Mon.    |         |         |         |         |         |
170 PRINT "             Jan. 1  |         |         |         |         |         |
180 PRINT "             2001____|_________|_________|_________|_________|_________|
190 PRINT "             Tue.    |         |         |         |         |         |":PRINT
200 PRINT "The dates will run consecutively between starting and ending dates that you
210 PRINT "     enter, but you may select days of the week to be skipped.  This program
220 PRINT "     was written for a Epson MX-80 printer with Graphtrack.  Although no
230 PRINT "     special graphics features were used, some printer commands may have to be
240 PRINT "     changed for other printers.":PRINT
250 PRINT "You may have a set of titles and other format data filed on the disk.
260 DIM MTHNAME$(12):MTHNAME$(1)="JAN.":MTHNAME$(2)="FEB.":MTHNAME$(3)="MAR.":MTHNAME$(4)="APR.":MTHNAME$(5)="MAY.":MTHNAME$(6)="JUN.":MTHNAME$(7)="JUL.":MTHNAME$(8)="AUG.":MTHNAME$(9)="SEP.":MTHNAME$(10)="OCT.":MTHNAME$(11)="NOV.":MTHNAME$(12)="DEC."
270 KEY OFF:PRINT:PRINT "Do you have a format on file";:GOSUB 12000:ON A GOTO 310,280,270'YESORNOA
280 GOSUB 11000'retrieve file GETFILE
290 IF NOFILE=1 THEN GOTO 310 ELSE GOSUB 14000'modify? CHNGFORM
300 GOTO 520
310 PRINT "Please enter the date at which you want the form to start.":PRINT
320 GOSUB 1000' enter date  DATCHECK
330 STARTDATE$ = DAT$
340 PRINT "Please enter the date at which you want the form to end.":PRINT
350 GOSUB 1000' enter date  DATCHECK
360 ENDDATE$ = DAT$
370 PRINT "Do you want to skip any days of the week";:GOSUB 12000:ON A GOTO 390,380,370'YESORNOA
380 GOSUB 10000' input days to be skipped  SKIPDAY
390 GOSUB 8000' enter titles  TITLEIN
400 LINES=0:PRINT "This program is set up for 11 inch pages. You have four options for paging.":PRINT
410 PRINT "     1  30 lines per page regardless of content.
420 PRINT "     2  Start a new page for each new month.
430 PRINT "     3  Continuous chart with no paging.
440 PRINT "     4  The number of lines you choose (greater than 3 lines).
450 PRINT:INPUT "Please enter the number of the option you choose";LINES
460 IF LINES<1 OR INT(LINES)<>LINES OR LINES>4 THEN PRINT "Please enter a number corresponding to one of the options listed.":GOTO 400
470 IF LINES=4 THEN INPUT "Enter the number of lines you want per page";LINES
480 PRINT:PRINT "You may have a heading at the top of each page. Please enter the heading."
490 INPUT "Heading";HEADING$
500 PRINT "Do you want to save the format for this form";:GOSUB 12000:ON A GOTO 520,510,500'YESORNOA
510 GOSUB 13000'file the format variables  MAKEFILE
520 HOLD=0:TITLE$(0)="date    ":BADTITLE=0
530 WIDE=0:FOR W=0 TO 10:WIDE=WIDE+LEN(TITLE$(W))+1:NEXT W
540 LEFTMAR=132-WIDE:IF LEFTMAR<0 THEN 550 ELSE 570
550 Z=ABS(LEFTMAR)+1:PRINT "The chart is " Z " characters too wide. You should make your titles shorter.":BADTITLE=1:GOSUB 14000'modify? CHNGFORM
560 IF MODIFIED=1 THEN GOTO 520 ELSE LEFTMAR=0:BADTITLE=0
570 LEFTMAR$=STRING$(LEFTMAR," ")
580 BADHEAD=0:HEADGAP=8.5*(8-(LEFTMAR/17.16+LEN(HEADING$)/8.5+9/8.5))-1:IF HEADGAP<1 THEN 590 ELSE HEADMAR$=LEFTMAR$:GOTO 620
590 HEADGAP=2:HEADMAR=8.5*(8-(LEN(HEADING$)/8.5+9/8.5))-1:IF HEADMAR<1 THEN 600 ELSE HEADMAR$=STRING$(HEADMAR," "):GOTO 620
600 ZZ=INT(ABS(HEADMAR))+2:PRINT "The heading is " ZZ " characters too wide. You should make your heading shorter.":BADHEAD=1:GOSUB 14000'modify? CHNGFORM
610 IF MODIFIED=1  THEN GOTO 580 ELSE HEADGAP=1:HEADMAR$="":BADHEAD=0
620 PRINT "Is the printer ready to print the form";:GOSUB 12000:ON A GOTO 620,630,620'YESORNOA
630 PRINT "Pressing <H> will cause the printer to pause at the end of each page to allow ":PRINT "single sheet feeding.
640 PRINT "Pressing <Esc> will cause the printing to stop at the end of the date line being printed.":GOSUB 9000' set up printer  CHRTPRNT
650 DAT$=STARTDATE$:PAGENUM=0:GOSUB 2000'convert date to numbers DATTONUM
660 D=D-1:LINENUM=0:PAGENUM=PAGENUM+1
670 PRINTIME=0:ON ERROR GOTO 15000' printer error subroutine PRTERROR
680 LPRINT HEADMAR$ CHR$(14) HEADING$ SPC(HEADGAP) "Page" PAGENUM:LPRINT
690 LPRINT LEFTMAR$ CHR$(27)CHR$(45)CHR$(1);
700 FOR T=0 TO 10:LPRINT TITLE$(T);CHR$(156);:NEXT T:LPRINT
710 LPRINT CHR$(27)CHR$(45)CHR$(0);:ON ERROR GOTO 0
720 D=D+1:GOSUB 4000' check new date  DATGEN
730 IF DATINC=1 THEN GOTO 910
740 GOSUB 3000' find day of week  DAYNAME
750 FOR WKDY=1 TO 7:IF DAYNAME$ = DAYSKIP$(WKDY) THEN GOTO 780
760 NEXT WKDY
770 LINENUM=LINENUM+1:GOSUB 7000' print a form line  LINEFORM
780 IF ATE$ = ENDDATE$ THEN GOTO 850
790 ESC$=INKEY$:IF ESC$="H" OR ESC$="h" THEN HOLD=1
800 IF ESC$=CHR$(27) THEN PRINT "Form terminated. ";:FOR N=0 TO 15:DUMP$=INKEY$:NEXT:GOTO 860 ELSE IF ESC$<>"" THEN GOTO 790
810 IF LINES=1 AND LINENUM>=30 THEN GOTO 830
820 IF LINES>=4 AND LINENUM>=LINES THEN GOTO 830 ELSE GOTO 720
830 LPRINT CHR$(140):IF HOLD=1 THEN PRINT "Page " PAGENUM " finished. Press <Esc> to exit, any other key to continue.":FOR N=0 TO 15:DUMP$=INKEY$:NEXT:GOTO 840 ELSE GOTO 660
840 RESTART$=INKEY$:IF RESTART$=CHR$(27) THEN GOTO 860 ELSE IF RESTART$<>"" THEN GOTO 660 ELSE GOTO 840
850 PRINT "Form completed. ";:IF LINES=3 THEN GOTO 860 ELSE LPRINT CHR$(140)
860 GOSUB 14000:IF MODIFY=0 THEN GOTO 880'modify CHNGFORM
870 PRINT "Do you want to run this modification";:GOSUB 12000:ON A GOTO 890,520,870'YESORNOA
880 PRINT "Do want to run another copy of this form";:GOSUB 12000:ON A GOTO 900,620,880'YESORNOA
890 PRINT "Are you sure";:GOSUB 12000:ON A GOTO 870,900,890
900 PRINT "GOOD BYE":KEY ON:END
910 GOSUB 5000' increment to next month  NEXTDAY
920 GOSUB 4000' check incremented date  DATGEN
930 IF LINES=2 THEN GOTO 830 ELSE GOTO 740
1000 Z1000$=DATE$'                                           --
1010 INPUT "date";DAT$'                                       | subroutine
1020 ON ERROR GOTO 1070'        Converts input                |    to
1030 DATE$=DAT$'                to standard                   |   enter
1040 ON ERROR GOTO 0'           date format (mm-dd-yyyy)      |    and
1050 DAT$=DATE$:DATE$=Z1000$'   and returns it as DAT$        |   check
1060 RETURN'                                                  |    the
1070 IF ERR=5 THEN 1080 ELSE PRINT "DATCHECK TROUBLE":STOP'   |   date
1080 PRINT "Not a valid date. Try again.":RESUME 1010'       --
2000 Y=VAL(RIGHT$(DAT$,4))'                        --
2010 D=VAL(MID$(DAT$,4,2))'   dat$ as mm-dd-yyyy     |  subroutine
2020 M=VAL(LEFT$(DAT$, 2))'    to  M,D,Y,M$,D$,Y$    |     to
2030 M2030=M+100:D2030=D+100'                        |  decompose
2040 M$=STR$(M2030):D$=STR$(D2030):Y$=STR$(Y)'       |    dates
2050 M$=RIGHT$(M$,2):D$=RIGHT$(D$,2):Y$=RIGHT$(Y$,4)'|    into
2060 RETURN'                                       --  strings & numbers
3000 M3000=M:Y3000=Y'
3010 IF M3000>2 THEN 3030'
3020 M3000=M3000+12:Y3000=Y3000-1'
3030 N=2+D+M3000*2+Y3000+INT(Y3000/4)-INT(Y3000/100)+INT(Y3000/400)+INT(.6*(M3000+1))'
3040 ON 1+INT(1/2+(N/7-INT(N/7))*7) GOTO 3050,3060,3070,3080,3090,3100,3110'
3050 DAYNAME$="SAT.":RETURN'
3060 DAYNAME$="SUN.":RETURN'         Subroutine to give day of week
3070 DAYNAME$="MON.":RETURN'
3080 DAYNAME$="TUE.":RETURN'                     from
3090 DAYNAME$="WED.":RETURN'
3100 DAYNAME$="THU.":RETURN'            integers M, D, & Y.
3110 DAYNAME$="FRI.":RETURN'
4000 DATINC=0:Z4000$=DATE$'                                  --
4010 M$=STR$(M+100):D$=STR$(D+100):Y$=STR$(Y+10000)'           | subroutine
4020 M$=RIGHT$(M$,2):D$=RIGHT$(D$,2):Y$=RIGHT$(Y$,4)'          |    to
4030 ATE$=M$+"-"+D$+"-"+Y$'                                    |   form
4040 ON ERROR GOTO 4080'   Converts M,D, & Y integers          |    and
4050 DATE$=ATE$'           into ATE$ in form mm-dd-yyyy        |   check
4060 ON ERROR GOTO 0'      and M$,D$, & Y$ as mm, dd, & yyyy.  |     a
4070 DATE$=Z4000$:RETURN'  If invalid date, returns DATINC = 1.| standard
4080 IF ERR=5 THEN DATINC=1 ELSE PRINT "DATGEN TROUBLE":STOP'  |date format
4090 RESUME 4060'                                            --
5000 D=1:M=M+1:YEARLIM=0'                                 --
5010 IF M=13 THEN 5030'     Uses M, D, & Y.                 | subroutine
5020 RETURN'                Assumes end of old month.       |    for
5030 M=1:Y=Y+1'             Returns D=1,M+1,Y+1 as needed.  | incrementing
5040 IF Y>=2099 THEN 5060'  If Y exceeds 2099,              |    a
5050 RETURN'                      returns: YEARLIM = 1      |   date
5060 PRINT "Cannot go beyond year 2099"'                    |    by
5070 YEARLIM=1:RETURN'                                    --   one month
7000 ON ERROR GOTO 15000:COL0DL = LEN(TITLE$(0))-LEN(DAYNAME$)'
7010 IF D<10 THEN DD=3 ELSE DD=4'                                    |
7020 COL0ML = LEN(TITLE$(0))-(LEN(MTHNAME$(M))+DD)'                  |subrtn.
7030 COL0YL = LEN(TITLE$(0))-LEN(Y$)'                                |to
7040 COL0D$ = STRING$(COL0DL," ")'        needs TITLE$(t)            |print
7050 COL0M$ = STRING$(COL0ML," ")'              MTHNAME$(m)          |a
7060 COL0Y$ = STRING$(COL0YL," ")'              DAYNAME$             |three
7070 FOR C=1 TO 10'                             Y$                   |line
7080 COL$(C) = STRING$(LEN(TITLE$(C))," ")'     D                    |form
7090 NEXT C'                                    COL$(C) array must be|with
7100 LPRINT LEFTMAR$ DAYNAME$ COL0D$ CHR$(156);'dimensioned if C>10  |up
7110 FOR C=1 TO 10:LPRINT COL$(C) CHR$(156);:NEXT C:LPRINT'          |to
7120 LPRINT LEFTMAR$ MTHNAME$(M) D COL0M$ CHR$(156);'                |ten
7130 FOR C=1 TO 10:LPRINT COL$(C) CHR$(156);:NEXT C:LPRINT'          |columns
7140 LPRINT LEFTMAR$ CHR$(27) "-" CHR$(1);Y$;COL0Y$ CHR$(156);'      |defined
7150 FOR C=1 TO 10:LPRINT COL$(C) CHR$(156);:NEXT C'                 |by their
7160 LPRINT CHR$(27) "-" CHR$(0)'                                    |title
7170 ON ERROR GOTO 0:RETURN
8000 PRINT:PRINT "You may have up to ten titles. The maximum width is 132 characters but ten are"
8010 PRINT "taken up by dividing lines and ten by the date (0) column, leaving 112.  By"
8020 PRINT "skipping a title you will have a double vertical dividing line. Extra dividing"
8030 PRINT "lines appear as a right-hand border.  The width of the column is determined by"
8040 PRINT "the title. To extend the width of the title beyond the title word use a period"
8050 PRINT "or other character eg. [. Title 1    .].  You can't use commas (,) in a title.":PRINT
8060 TITLELENGTH=20
8070 FOR T=1 TO 10
8080 PRINT "Title for data column number";T;:INPUT TITLE$(T)
8090 TITLELENGTH=TITLELENGTH+LEN(TITLE$(T))
8100 PRINT "You have used " TITLELENGTH "characters. You have room for " 132-TITLELENGTH "more.":PRINT
8110 NEXT T
8120 RETURN
9000 ON ERROR GOTO 15000:LPRINT CHR$(27) "@";
9010 WIDTH "LPT1:",255
9020 LPRINT CHR$(27);CHR$(67);CHR$(0);CHR$(11);'ESC,FORM LENGTH,ELEVEN INCHES
9030 LPRINT CHR$(15);CHR$(27);CHR$(65);CHR$(8);'COMPRESSED,ESC,LINEFEED,8/72 ON
9040 LPRINT CHR$(27)+CHR$(85)+CHR$(1);         'ESC,UNIDIRECTIONAL PRINTING,ON
9050 ON ERROR GOTO 0:RETURN'
10000 DAY$(1)="Saturday":DAY$(2)="Sunday":DAY$(3)="Monday":DAY$(4)="Tuesday":DAY$(5)="Wednesday":DAY$(6)="Thursday":DAY$(7)="Friday"
10010 SKIPDAY$(1)="SAT.":SKIPDAY$(2)="SUN.":SKIPDAY$(3)="MON.":SKIPDAY$(4)="TUE.":SKIPDAY$(5)="WED.":SKIPDAY$(6)="THU.":SKIPDAY$(7)="FRI."
10020 FOR SKN=1 TO 7'                                          subroutine to
10030 PRINT "Do you want to skip "DAY$(SKN);:INPUT SKIP$'      return an array
10040 IF SKIP$="Y" THEN DAYSKIP$(SKN)=SKIPDAY$(SKN):GOTO 10090'of day and null
10050 IF SKIP$="y" THEN DAYSKIP$(SKN)=SKIPDAY$(SKN):GOTO 10090'strings as the
10060 IF SKIP$="N" THEN DAYSKIP$(SKN)="":GOTO 10090'           var. DAYSKIP$
10070 IF SKIP$="n" THEN DAYSKIP$(SKN)="":GOTO 10090'
10080 PRINT "Please answer y or n.":GOTO 10030'   requires no common variables
10090 NEXT'                                       uses SKN,DAYS$(1-7),SKIP$
10100 RETURN'                                     SKIPDAY$(1-7)
11000 ON ERROR GOTO 11130:NOFILE=0
11010 PRINT:PRINT "The following files are available.":FILES "*.frm"
11020 ON ERROR GOTO 0
11030 PRINT:PRINT "What is the filename of the one you want to use":INPUT "(if none type NONE)";FILENAME$
11040 IF FILENAME$="NONE" OR FILENAME$="none" OR FILENAME$="None" THEN NOFILE=1:RETURN
11050 FILENAME$=FILENAME$+".frm"
11060 ON ERROR GOTO 11150:OPEN FILENAME$ FOR INPUT AS #1
11070 INPUT #1,STARTDATE$,ENDDATE$
11080 FOR N=1 TO 7:INPUT #1,DAYSKIP$(N):NEXT
11090 FOR N=1 TO 10:INPUT #1,TITLE$(N):NEXT
11100 INPUT #1,LINES,HEADING$
11110 CLOSE #1:ON ERROR GOTO 0
11120 RETURN
11130 IF ERR=53 THEN 11140 ELSE PRINT "GETFILE TROUBLE":STOP
11140 PRINT "There are no files for this program on this disk.":NOFILE=1:RESUME 11120
11150 IF ERR = 52 THEN PRINT "That is not a correct filespec, try again":RESUME 11020
11160 IF ERR = 62 THEN PRINT "Bad file data. You are trying to read from the wrong file. Try again.":RESUME 11000
11170 IF ERR = 53 THEN 11180 ELSE PRINT "GETFILE TROUBLE":STOP
11180 PRINT "That isn't one of the files available, try again.":RESUME 11020
12000 INPUT Q$'                         subroutine which returns    --
12010 IF Q$="n" THEN A=1:RETURN'         A = 1, 2, or 3 in response    |
12020 IF Q$="N" THEN A=1:RETURN'         to a yes or no question.      |
12030 IF Q$="y" THEN A=2:RETURN'                                       |
12040 IF Q$="Y" THEN A=2 ELSE A=3:PRINT "Please answer Y, y, N, or n."'|
12050 RETURN'                                                       --
13000 ON ERROR GOTO 13160
13010 PRINT:FILES "*.frm"
13020 PRINT:PRINT "The above file names have been used."
13030 ON ERROR GOTO 0
13040 PRINT "What filename do you want to use? (Up to 8 characters, no extension;Type NONE
13050 INPUT "to return to printing without saving modifications.):  FILENAME";FILENAME$
13060 IF FILENAME$="none" OR FILENAME$="None" OR FILENAME$="NONE" THEN RETURN
13070 IF LEN(FILENAME$)>8 THEN PRINT "Filename too long. Try again. Do not use extension. Extension {.FRM} is added.":GOTO 13040
13080 FILENAME$=FILENAME$+".frm"
13090 ON ERROR GOTO 16000' disk error subroutine DSKERROR
13100 OPEN FILENAME$ FOR OUTPUT AS #1
13110 WRITE #1,STARTDATE$,ENDDATE$
13120 FOR N=1 TO 7:WRITE #1,DAYSKIP$(N):NEXT
13130 FOR N=1 TO 10:WRITE #1,TITLE$(N):NEXT
13140 WRITE #1,LINES,HEADING$
13150 CLOSE #1:ON ERROR GOTO 0:RETURN
13160 IF ERR = 53 THEN 13170 ELSE PRINT "MAKEFILE TROUBLE":STOP
13170 PRINT "There are no format files on this disk":RESUME 13030
14000 PRINT "Do you want to modify this form";:GOSUB 12000:ON A GOTO 14010,14020,14000'YESORNOA
14010 MODIFIED=0:RETURN
14020 MODIFIED=1:IF BADTITLE=1 THEN GOTO 14150
14030 IF BADHEAD=1 THEN GOTO 14280
14040 PRINT "The current starting date is "STARTDATE$". Do you want to change it";:GOSUB 12000:ON A GOTO 14080,14050,14040'YESORNOA
14050 PRINT "New ";:GOSUB 1000' enter date DATCHECK
14060 GOSUB 2000' generate numerical date constants  DATTONUM
14070 STARTDATE$=DAT$
14080 PRINT "The current ending date is " ENDDATE$ ". Do you want to change it";:GOSUB 12000:ON A GOTO 14110,14090,14080'YESORNOA
14090 PRINT "New ";:GOSUB 1000' enter date DATCHECK
14100 ENDDATE$=DAT$:GOTO 14110
14110 PRINT "Presntly the days to be skipped are: ";:FOR N=1 TO 7:PRINT DAYSKIP$(N) ", ";:NEXT:PRINT
14120 PRINT "Do you want to change these";:GOSUB 12000'YESORNOA
14130 ON A GOTO 14150,14140,14110
14140 GOSUB 10000' reenter skip days SKIPDAY
14150 PRINT "The present set of column titles is:"
14160 FOR N=1 TO 10:PRINT TITLE$(N):NEXT:PRINT
14170 PRINT "Do you want to change these";:GOSUB 12000:ON A GOTO 14220,14180,14150'YESORNOA
14180 FOR CHG = 1 TO 10
14190 PRINT USING "The title for column ## is:   "; CHG :PRINT SPC(29) TITLE$(CHG) :PRINT "Do you want to change it";:GOSUB 12000:ON A GOTO 14210,14200,14190'YESORNOA
14200 GOSUB 14330:INPUT "New title";TITLE$(CHG):GOSUB 14350
14210 NEXT CHG
14220 IF BADTITLE=1 THEN GOTO 14300
14230 PRINT "The form length options are 1. 31 lines; 2. months; 3. continuous; 4. specified."
14240 PRINT "The current option is " LINES ". Do you want to change it";:GOSUB 12000:ON A GOTO 14280,14250,14230'YESORNOA
14250 INPUT "New option number";LINES
14260 IF LINES<1 OR INT(LINES)<>LINES OR LINES>4 THEN PRINT "Please enter  1, 2, 3, or 4.":GOTO 14230
14270 IF LINES=4 THEN INPUT "Number of lines";LINES
14280 PRINT "The present heading for the chart is:":PRINT:PRINT HEADING$:PRINT "Do you want to change it";:GOSUB 12000:ON A GOTO 14300,14290,14280'YESORNOA
14290 GOSUB 14340:INPUT "New heading";HEADING$:GOSUB 14350:PRINT:PRINT
14300 PRINT "Do you want to save these modifications";:GOSUB 12000:ON A GOTO 14320,14310,14300'YESORNOA
14310 GOSUB 13000'file the new variables MAKEFILE
14320 RETURN
14330 X=CSRLIN:LOCATE 25,1:PRINT "Note: You may edit and enter an isolated line above instead of retyping it!":LOCATE X-4,30:PRINT "12345678901234567890123456789012345678901234567890":LOCATE X,1:RETURN
14340 X=CSRLIN:LOCATE 25,1:PRINT "Note: You may edit and enter an isolated line above instead of retyping it!":LOCATE X-4,1:PRINT "1234567890123456789012345678901234567890123456789012345678901234567890123456789":LOCATE X,1:RETURN
14350 X=CSRLIN:LOCATE 25,1:BLANK$=STRING$(79," "):PRINT BLANK$;:LOCATE X,1:RETURN
15000 IF ERR = 27 THEN PRINT "Printer off or out of paper. Program will continue when problem is corrected.":RESUME
15010 IF ERR = 68 THEN PRINT "Printer unavailable or disabled. Program will continue when problem is corrected.":RESUME
15020 IF ERR = 25 THEN PRINT "Printer fault. Program will continue when problem is corrected.":RESUME
15030 IF ERR = 24 THEN PRINTIME=PRINTIME+1 ELSE PRINT "PRTERROR problem:on error GOTO 0:stop
15040 IF PRINTIME < 2 THEN RESUME ELSE PRINT "Printer off line. Program will continue when problem is corrected.":PRINTIME=0:RESUME
16000 IF ERR=24 THEN PRINT "No disk in drive? Device timeout.":GOTO 16090
16010 IF ERR=57 THEN PRINT "I/O error. Try another disk.":GOTO 16090
16020 IF ERR=61 THEN PRINT "Disk full. Try another disk.":GOTO 16090
16030 IF ERR=64 THEN PRINT "Bad file name. ";:INPUT "Try entering the complete filespec (with extension).";FILENAME$:RESUME
16040 IF ERR=67 THEN PRINT "Too many files in directory. Try another disk to temoroarily save your data.":GOTO 16090
16050 IF ERR=68 THEN PRINT "Disk drive unavailable.":GOTO 16090
16060 IF ERR=70 THEN PRINT "You have write protected this disk!":GOTO 16090
16070 IF ERR=71 THEN PRINT "No disk in drive or door not closed.":GOTO 16090
16080 IF ERR=72 THEN PRINT "Disk Media Error. Try another disk.":GOTO 16090
16090 PRINT "Program will continue when problem is corrected.":RESUME
65000 ' SAVE"DAYLOG.bas",a
```
{% endraw %}

## 3002-A.BAS

{% raw %}
```bas
10 CLS
20 A$=STRING$(80,205)
30 PRINT A$
40 PRINT TAB(34)"GRAPH  #3002"
50 COLOR 23,0,0
60 PRINT :PRINT :PRINT TAB(39)"IPCO"
70 COLOR 7,0,0
80 PRINT :PRINT :PRINT TAB(25)"PERSONAL COMPUTER OWNERS GROUP"
90 PRINT :PRINT :PRINT TAB(19)"p.o. box 10426, pittsburgh, pennsylvania 15234"
100 PRINT A$
110 PRINT :PRINT :PRINT :PRINT :PRINT
120 PRINT TAB(28)"PRESS ANY KEY TO CONTINUE"
130 A$=INKEY$:IF A$="" THEN 130
140 CLS
1000 REM: GRAPH
1010 KEY OFF
1020 REM: *************************
1030 A$=CHR$(248):B$=CHR$(196):C$=CHR$(179):D$=CHR$(218):E$=CHR$(192)
1040 F$=CHR$(191):G$=CHR$(217):H$=CHR$(195):I$=CHR$(180):J$=CHR$(194)
1050 K$=CHR$(193):YPLUS$=CHR$(24):YMINUS$=CHR$(25)
1060 REM: *************************
1070 CLS:PRINT TAB(35) "G R A P H":PRINT
1080 GOSUB 2200
1090 GOSUB 1800:GOSUB 1200:GOSUB 1400:GOSUB 1600
1100 GOSUB 2000:KEY ON:CLS:END
1200 REM ***********************
1210 REM ***   PRINT GRAPH   ***
1220 REM ***********************
1230 CLS:FOR J=3 TO 21 :LOCATE J,15:PRINT H$:LOCATE J,75:PRINT I$:NEXT
1240 FOR J=16 TO 74 :LOCATE 2,J: PRINT J$:LOCATE 22,J:PRINT K$:NEXT
1250 LOCATE 2,15:PRINT D$:LOCATE 2,75:PRINT F$
1260 LOCATE 22,15:PRINT E$:LOCATE 22,75:PRINT G$
1270 FOR J=7 TO 17 STEP 5 :LOCATE J,16:PRINT B$:LOCATE J,74:PRINT B$:NEXT
1280 FOR J=20 TO 70 STEP 5 :LOCATE 3,J:PRINT C$:LOCATE 21,J:PRINT C$:NEXT
1290 LOCATE 12,17:PRINT B$:LOCATE 12,73:PRINT B$
1300 LOCATE 4,45:PRINT C$:LOCATE 20,45:PRINT C$
1310 RETURN
1400 REM ***********************
1410 REM ***   PLOT Y=F(X)   ***
1420 REM ***********************
1430 DX=(XU-XL)/60:DY=(YU-YL)/20:FOR J=0 TO 60
1440 X=XL+DX*(J):XP=15+J:GOSUB 1500
1450 IF F=1 THEN LOCATE 22,15+J:PRINT YMINUS$:GOTO 1480
1460 IF F=2 THEN LOCATE 2,15+J:PRINT YPLUS$:GOTO 1480
1470 LOCATE YP,XP:PRINT A$
1480 NEXT
1490 RETURN
1500 GOSUB 5000:V=(Y-YL)/DY:D=CINT(V)
1510 IF Y<YL THEN F=1:RETURN
1520 IF Y>YU THEN F=2:RETURN
1530 F=0:YP=22-D:RETURN
1600 REM ***********************
1610 REM ***   LABLE GRAPH   ***
1620 REM ***********************
1630 LOCATE 1,15:PRINT "Y"
1640 LOCATE 22,76:PRINT "X"
1650 FOR J=2 TO 22 STEP 5
1660 Y=YU-DY*(J-2)
1670 L=LEN(STR$(Y))
1680 LOCATE J,13-L:PRINT Y
1690 NEXT
1700 FOR J=15 TO 75 STEP 10
1710 X=XL+DX*(J-15)
1720 L=(LEN(STR$(X)))/2
1730 LOCATE 23,J-L:PRINT X
1740 NEXT
1750 LOCATE 25,27:PRINT "HIT ANY KEY TO CONTINUE. ?";
1760 Q$=INKEY$:IF Q$="" THEN 1760
1770 RETURN
1800 REM ************************************
1810 REM ***   SELECT RANGE FOR X AND Y   ***
1820 REM ************************************
1830 PRINT :INPUT"LOWEST VALUE OF X";XL
1840 INPUT "HIGHEST VALUE OF X";XU
1850 IF XU<=XL THEN PRINT :PRINT "   -- BAD X RANGE --":GOTO 1830
1860 DX=(XU-XL)/60:X=XL:XM=(XU+XL)/2:GOSUB 5000:MN=Y:MX=Y
1870 FOR J=1 TO 60
1880 X=XL+DX*J:GOSUB 5000:IF Y>MX THEN MX=Y
1890 IF Y<MN THEN MN=Y
1900 NEXT:YM=(MN+MX)/2
1910 PRINT:PRINT"OVER THIS RANGE OF X":                                              PRINT"  MINIMUM Y =";MN
1920 PRINT"  MAXIMUM Y=";MX:                                                         PRINT"NOW CHOOSE THE SCALE FOR Y"
1930 PRINT:INPUT"MINIMUM Y SCALE VALUE";YL
1940 INPUT"MAXIMUM Y SCALE VALUE";YU:                                                IF YU>YL THEN RETURN
1950 PRINT:PRINT"  -- BAD Y SCALE VALUE --":GOTO  1910
2000 REM ************************************
2010 REM ***   PRINT VALUES FOR X AND Y   ***
2020 REM ************************************
2030 CLS:PRINT "X VALUES":                                                           PRINT"  MINIMUM - ";XL
2040 PRINT"  MID     - ";XM:PRINT"  MAXIMUM - ";XU:                                  PRINT
2050 PRINT"Y VALUES":PRINT"  MINIMUM - ";MN
2060 PRINT"  MID     - ";YM:PRINT"  MAXIMUM - ";MX:
2070 LOCATE 25,27:PRINT "HIT ANY KEY TO CONTINUE. ?";
2080 Q$=INKEY$:IF Q$="" THEN 2080
2090 GOSUB 2400
2100 LOCATE 25,11:PRINT "HIT 'G' TO SEE THE GRAPH AGAIN OR ANY OTHER KEY TO QUIT . ?";
2110 Q$=INKEY$:IF Q$="" THEN 2110
2120 IF Q$="G" THEN GOSUB 1200 :GOSUB 1400:GOSUB 1600
2130 RETURN
2200 REM *************************
2210 REM ***   PRINT WARNING   ***
2220 REM *************************
2230 LOCATE 3,11:PRINT D$:FOR J=12 TO 28:LOCATE 3,J:PRINT B$:NEXT
2240 LOCATE 3,32:PRINT "W A R N I N G !":FOR J=50 TO 68:LOCATE 3,J:PRINT B$:         NEXT
2250 LOCATE 3,69:PRINT F$:LOCATE 4,24:PRINT "REVISE THE SUBROUTINE AT LINES "
2260 LOCATE 5,23:PRINT "5000-5999 TO DEFINE YOUR FUCTION"
2270 LOCATE 6,26:PRINT "DEFINE Y AS A FUNCTION OF X"
2280 FOR J=4 TO 6 :LOCATE J,11:PRINT C$:LOCATE J,69:PRINT C$:NEXT
2290 LOCATE 7,11:PRINT E$:LOCATE 7,69:PRINT G$
2300 FOR J=12 TO 68:LOCATE 7,J:PRINT B$:NEXT
2310 RETURN
2400 REM ***********************
2410 REM ***   PRINT TABLE   ***
2420 REM ***********************
2430 CLS
2440 LOCATE 1,3:PRINT "X":LOCATE 1,16:PRINT "Y"
2450 LOCATE 1,29:PRINT "X":LOCATE 1,42:PRINT "Y"
2460 LOCATE 1,55:PRINT "X":LOCATE 1,68:PRINT "Y"
2470 FOR J=2 TO 21
2480 X=XL+(J-2)*DX
2490 GOSUB 5000
2500 LOCATE J,2:PRINT X
2510 LOCATE J,15:PRINT Y
2520 NEXT
2530 FOR J=22 TO 41
2540 X=XL+(J-2)*DX
2550 GOSUB 5000
2560 LOCATE J-20,28:PRINT X
2570 LOCATE J-20,41:PRINT Y
2580 NEXT
2590 FOR J=42 TO 62
2600 X=XL+(J-2)*DX
2610 GOSUB 5000
2620 LOCATE J-40,54:PRINT X
2630 LOCATE J-40,67:PRINT Y
2640 NEXT
2650 RETURN
4997 REM ************************************************
4998 REM ***   SUBROUTINE AT LINE 5000 MUST BE SET    ***
4999 REM ************************************************
5000 REM ***   Y=F(X) GOES HERE   ***
5010 RETURN
```
{% endraw %}

## 3003-A.BAS

{% raw %}
```bas
100 CLS
110 A$=STRING$(80,205)
120 PRINT A$
130 PRINT TAB(24)"NORMAL DISTRIBUTION  #3003-A"
140 COLOR 23,0,0
150 PRINT :PRINT :PRINT TAB(39)"IPCO"
160 COLOR 7,0,0
170 PRINT :PRINT :PRINT TAB(25)"PERSONAL COMPUTER OWNERS GROUP"
180 PRINT :PRINT :PRINT TAB(19)"p.o. box 10426, pittsburgh, pennsylvania 15234"
190 PRINT A$
200 PRINT :PRINT :PRINT :PRINT :PRINT
210 PRINT TAB(28)"PRESS ANY KEY TO CONTINUE"
220 A$=INKEY$:IF A$="" THEN 220
230 CLS
240 'MASTER-CONTROL ROUTINE
250 CLS
260 PRINT "THIS PROGRAM COMPUTES AREAS UNDER THE NORMAL DISTRIBUTION"
270 PRINT "PROBABILITY CURVE FROM THE MEAN TO A DESIGNATED `Z' VALUE."
280 PRINT "THIS PROGRAM ALSO CAN COMPUTE `Z' VALUES FROM A GIVEN AREA."
290 PRINT
300 PRINT "JUST AS IN MOST STATISTICAL TABLES, ONLY HALF THE CURVE IS "
310 PRINT "CONSIDERED.  Z VALUES MUST BE BETWEEN -4 AND +4 (THESE"
320 PRINT "LIMITS ARE SOMEWHAT ARBITRARY) AND AREA FIGURES MUST BE"
330 PRINT "BETWEEN 0 AND 0.5 (ACTUALLY .49997).  IF OUT-OF-RANGE"
340 PRINT "FIGURES ARE INPUT, THE NEAREST RANGE LIMIT IS ASSUMED"
350 PRINT "INSTEAD."
360 PRINT
370 PRINT "HIT ANY KEY TO START"
380 SELECTION$ = INKEY$ : IF SELECTION$ = "" THEN GOTO 380 `SAME LINE
390 'AREA RESULTS (GIVEN Z) ARE ACCURATE TO THE 5 DISPLAYED DIGITS.
400 'Z VALUES ARE ACCURATE TO 2 DIGITS BASED ON AN INPUT AREA,
410 'OR THE 3 DISPLAYED DIGITS BASED ON THE PROGRAM'S APPROXIMATION
420 'OF THE AREA.
430 '
440 'THIS PRECISION CAN BE CHANGED BY CHANGING THE PRECISION
450 'CONSTANTS IN THE PROGRAM FROM THEIR 0.000001 SETTING.
460 'FOR HIGHER PRECISION, YOU MUGHT ALSO WANT TO CHANGE THE
470 'VARIABLES TO DOUBLE, INSTEAD OF SINGLE, PRECISION FORM.
480 'WITH HIGHER PRECISION, YOU MAY WISH TO CHANGE THE NUMBER
490 'OF DIGITS DISPLAYED, TOO.
500 '
510 'OUT OF RESPECT, PLEASE DO NOT MUTILATE THE STRUCTURED
520 'PROGRAMMING APPROACH THAT MAKES CHANGES SO EASY AND
530 'MAKES THE PROGRAM ALMOST READABLE.  OF COURSE YOU CAN
540 'EASILY USE THE SUBROUTINES IN MORE ELABORATE PROGRAMS.
550 'THIS PROGRAM IS FAIRLY INSIGNIFICANT BY ITSELF.
560 '
570 SELECTION$ = "1" 'INITIALIZATION
580 WHILE (SELECTION$ = "1" OR SELECTION$ = "2")
590 CLS : PRINT STRING$(60,42)
600 PRINT :PRINT  "MENU:"
610 PRINT :PRINT "     <1>  .  .  .  .  .  .  COMPUTE AREA FROM Z"
620 PRINT :PRINT "     <2>  .  .  .  .  .  .  COMPUTE Z VALUE FROM AREA"
630 PRINT :PRINT "     <ANY OTHER KEY>  .  .  EXIT PROGRAM"
640 PRINT :PRINT STRING$(60,45)
650 PRINT :PRINT "HIT ANY KEY IN INDICATED RANGE TO MAKE SELECTION:"
660 SELECTION$ = INKEY$ : IF SELECTION$ = "" THEN GOTO 660 `SAME LINE
670 CLS : PRINT  "THANK YOU"
680 IF 0 = INSTR("12" ,SELECTION$)                                                      THEN : PRINT "I HOPE THE PROGRAM WAS USEFUL TO YOU.  BYE."                             : GOTO 720 'WEND
690 ON INSTR("12",SELECTION$) GOSUB 1020,760
700     'IE:  IF 1, GOSUB COMPUTE-Z-FROM-AREA ROUTINE
710     '     IF 2, GOSUB COMPUTE-AREA-FROM-Z ROUTINE
720 WEND
730 END
740 '
750 '
760 'COMPUTE-Z-FROM-AREA-ROUTINE
770   PRINT  : PRINT  STRING$(80,42) : PRINT
780 QUIT% = 0
790 WHILE NOT QUIT%
800 PRINT "INPUT AREA VALUE FROM WHICH TO COMPUTE FREQUENCY."
810 PRINT "(ENTRIES OVER 5.0 CAUSE RETURN TO MENU.)"
820 INPUT "INPUT AREA VALUE (0 TO 0.49997): ",AREA
830 IF AREA > 5 THEN QUIT% = -1 : GOTO 990 `WEND
840 HI.CALCULATED.AREA = .49997 : HI.Z = 4  '*** AREA < .49997
850 LO.CALCULATED.AREA = 0      : LO.Z = 0  '*** AREA > 0
860 IF AREA >= .49997 THEN CALCULATED.AREA = .49997 : Z = 4                                                  : GOTO 930
870 IF AREA <= 0 THEN CALCULATED.AREA = 0 : Z = 0 : GOTO 930 `PRNT
880 WHILE ABS(CALCULATED.AREA - AREA) > .000001
890         IF AREA > CALCULATED.AREA                                                          THEN LO.CALCULATED.AREA = CALCULATED.AREA : LO.Z = Z                            ELSE HI.CALCULATED.AREA = CALCULATED.AREA : HI.Z = Z
900 Z = (LO.Z +HI.Z) / 2
910 GOSUB 1200 `MCLAUREN-METHOD-AREA-CALCULATION ROUTINE
920 WEND
930 PRINT :PRINT "THE NORMAL-DISTRIBUTION Z-VALUE CORRESPONDING"
940        PRINT "TO A MEAN-TO-Z AREA OF  ";
950        PRINT USING "#.#####"; CALCULATED.AREA;
960        PRINT " IS:   ";
970        PRINT USING "#.###"; Z
980 PRINT :PRINT STRING$(80,42) : PRINT
990 WEND
1000 RETURN
1010 '
1020 'COMPUTE-AREA-FROM-Z ROUTINE
1030 PRINT :PRINT STRING$(80,42) : PRINT
1040 QUIT% = 0
1050 WHILE NOT QUIT%
1060        PRINT "INPUT Z VALUE FROM WHICH TO COMPUTE FREQUENCY."
1070        PRINT "(ENTRIES OVER 5.0 CAUSE RETURN TO MENU.)"
1080 INPUT "INPUT Z VALUE (-4.0 TO +4.0):  ", Z
1090 IF Z >=5 THEN QUIT% = -1 : GOTO 1170  'WEND
1100 IF ABS(Z) >=4 THEN CALCULATED.AREA = .49997 : Z.SGN% = SGN(Z)                                  : Z = 4 :GOTO 1120  'PRINT OUTPUT
1110 GOSUB 1200 'MCLAUREN-METHOD-AREA-CALCULATION ROUTINE
1120 PRINT :PRINT  "THE AREA UNDER THE NORMAL DISTRIBUTION CURVE"
1130         PRINT "FROM THE MEAN TO Z = " Z.SGN%*Z " IS :  ";
1140 PRINT USING "#.#####" ; CALCULATED.AREA
1150 PRINT
1160 PRINT :PRINT STRING$(80,42) :PRINT
1170 WEND
1180 RETURN
1190 '
1200 'MCLAUREN-METHOD-AREA-CALCULATION ROUTINE
1210 '
1220 Z.SGN% = SGN(Z) : Z = ABS(Z) : Z.SQR = Z*Z
1230 CALCULATED.AREA = Z * (1/SQR(2*3.141592654#))
1240 Z.CONSTANT = CALCULATED.AREA
1250 PRECISION.ERROR = 1 : INTERMEDIATE.TERM = 1 : I% = 1
1260 '
1270 WHILE ABS(PRECISION.ERROR) > .000001
1280 INTERMEDIATE.TERM = -(INTERMEDIATE.TERM * Z.SQR) / (2*I%)
1290 PRECISION.ERROR = Z.CONSTANT * (INTERMEDIATE.TERM / (2*I% + 1))
1300 CALCULATED.AREA = CALCULATED.AREA + PRECISION.ERROR
1310 I% =I% +1
1320 WEND
1330 CALCULATED.AREA = CALCULATED.AREA -PRECISION.ERROR
1340 RETURN
```
{% endraw %}

## 3006-A.BAS

{% raw %}
```bas
100 CLS
110 A$=STRING$(80,205)
120 PRINT A$
130 PRINT TAB(5)"MATRIX INVERSION AND SOLUTION OF SIMULTANEOUS EQUATIONS 3006-A.BAS "
140 COLOR 23,0,0
150 PRINT :PRINT :PRINT TAB(38)"IPCO"
160 COLOR 7,0,0
170 PRINT :PRINT :PRINT TAB(29)"INTERNATIONAL PC OWNERS"
180 PRINT :PRINT :PRINT TAB(17)"p.o. box 10426, pittsburgh, pennsylvania 15234"
190 PRINT A$
200 PRINT :PRINT :PRINT :PRINT :PRINT
210 PRINT TAB(28)"PRESS ANY KEY TO CONTINUE"
220 A$=INKEY$:IF A$="" THEN 220
230 CLS
240 'TITLE: Matrix Inversion and Solution of Simultaneous Equations, Version 1.00        By: Steven A. Ruzinsky  23 June 82
250 'THE DEFINING EQUATION IS AB=C WHERE A IS AN NTH ORDER SQUARE MATRIX AND B AND C ARE COLUMN VECTORS.  GIVEN A AND C, THIS PROGRAM FINDS B AND/OR THE INVERSE OF A.
260 CLS
270 PRINT "(1) Matrix Inversion":PRINT "(2) Simultaneous Equations":PRINT "(3) Both":PRINT "Choose from Above, 1/2/3 ???   ";
280 I$=INKEY$:IF I$="" THEN 280 ELSE PRINT I$
290 IF I$<>"1" AND I$<>"2" AND I$<>"3" THEN PRINT "Bad Entry, Try Again!":GOTO 270
300 J$="":PRINT "Results Printed, Y/N ???  ";
310 J$=INKEY$:IF J$="" THEN 310 ELSE PRINT J$
320 IF J$<>"Y" AND J$<>"y" AND J$<>"N" AND J$<>"n" THEN PRINT "Bad Entry, Try Again!":GOTO 290
330 K$="":PRINT "Double or Single Precision, D/S ???  ";
340 K$= INKEY$:IF K$="" THEN 340 ELSE PRINT K$
350 IF K$<>"d" AND K$<>"D" AND K$<>"s" AND K$<>"S" THEN PRINT "Bas Entry; Try Again!:GOTO 170
360 IF K$="d" OR K$="D" THEN DEFDBL A-Z
370 DEFINT I,J,K,N,M:INPUT "Enter Matrix Order, N= ???";N:N2=2*N:N1=N-1:DIM A(N,N2),B(N),C(N)
380 PRINT "Enter Matrix, A(N,N) :":FOR I=1 TO N:PRINT "Row";I:A(I,I+N)=1:FOR J=1 TO N:PRINT "A(";I;",";J;") =";:INPUT A(I,J):NEXT J,I
390 IF I$="1" THEN 410
400 PRINT "Enter Vector, C(N)":FOR I=1 TO N:PRINT "C(";I;") =";:INPUT C(I):NEXT
410 FOR K=1 TO N:M=K:K1=K+1:K2=K-1:IF K=N THEN 440 ELSE:FOR I=K1 TO N:IF ABS(A(I,K))>ABS(A(M,K)) THEN M=I
420 NEXT:IF M=K THEN 440
430 FOR J=K TO N2:SWAP A(K,J),A(M,J):NEXT
440 AK=A(K,K):FOR J=K1 TO N2:A(K,J)=A(K,J)/AK:NEXT
450 IF K=1 THEN 460 ELSE FOR I=1 TO K2:FOR J=K1 TO N2:A(I,J)=A(I,J)-A(I,K)*A(K,J):NEXT J,I:IF K=N THEN 470
460 FOR I=K1 TO N:FOR J=K1 TO N2:A(I,J)=A(I,J)-A(I,K)*A(K,J):NEXT J,I,K
470 FOR J=1 TO N:JN=J+N:FOR I=1 TO N:A(I,J)=A(I,JN):NEXT I,J:BEEP
480 IF I$="1" THEN 510
490 FOR I=1 TO N:FOR J=1 TO N:B(I)=B(I)+A(I,J)*C(J):NEXT J,I
500 IF I$="2" THEN 550
510 IF J$="N" OR J$="n" THEN 530
520 LPRINT "Inverse of Matrix, Ainv(N,N) :":FOR I=1 TO N:FOR J=1 TO N:LPRINT "Ainv(";I;",";J;") = ";A(I,J): NEXT J,I
530 PRINT "Inverse of Matrix, Ainv(N,N) :":FOR I=1 TO N:FOR J=1 TO N:PRINT "Ainv(";I;",";J;") = ";A(I,J):NEXT J,I
540 IF I$="1" THEN END
550 IF J$="N" OR J$="n" THEN 570
560 LPRINT "Coefficient Vector, B(N) :":FOR I=1 TO N:LPRINT "B(";I;") = ";B(I):NEXT
570 PRINT "Coefficient Vector, B(N) :":FOR I=1 TO N:PRINT "B(";I;") = ";B(I):NEXT:END
```
{% endraw %}

## 3012-A.BAS

{% raw %}
```bas
10 REM*************************************************************************
20 REM******--  Multiple Linear Regression                             --******
30 REM*****--                                                          --******
40 REM******--  From:                                                  --******
50 REM*****--     Alonso,J.R.F.                                        --******
60 REM******--    BASIC Programs for Business Applications             --******
70 REM*****--     Prentice-Hall, Inc.                                  --******
80 REM*****--                                                          --******
90 REM******--  Programmed by:                                         --******
100 REM******--   David Hopper                                          --*****
110 REM*****--    SENES Consultants Limited                             --*****
120 REM*****--    499 McNicoll Avenue                                   --*****
130 REM*****--    Willowdale, Ontario                                   --*****
140 REM*****--    M2H 2C9                                               --*****
150 REM*****--    (416) 499 5030                                        --*****
160 REM************************************************************************
170 REM******-- This program calculates multiple linear regression      --*****
180 REM*****-- coefficients, Bj, that fit the equation "                --*****
190 REM*****--  Y=B0 + B1*X1 + B2*X2 + ... + BJ*XJ + ... + BP*XP        --*****
200 REM*****--   to a set of N values of a dependent variable Y         --*****
210 REM*****-- each of the N values corresponding to P known values of  --*****
220 REM*****-- the P independent variables Xj, where 1<J<P              --*****
230 REM*****-- The design matrix is                                     --*****
240 REM*****--                                                          --*****
250 REM*****-- X(1,1) X(1,2) ... X(1,J) ...X(1,P) = Y(1)                --*****
260 REM*****-- X(2,1) X(2,2) ... X(2,J) ... X(2,P) = Y(2)               --*****
270 REM*****--  :      :           :          :       :                 --*****
280 REM*****-- X(I,1) X(I,2) ... X(I,J) ... X(I,P) = Y(I)               --*****
290 REM*****--  :      :           :          :       :                 --*****
300 REM*****-- X(N,1) X(N,2) ... X(N,J) ... X(N,P) = Y(N)              --*****
310 REM*****--                                                         --*****
320 REM*****-- The maximum number of Y values permitted is 50          --*****
330 REM*****-- The maximum number of X values permitted is 500(10 X 50)--*****
340 REM***********************************************************************
350 OPTION BASE 1
360 DEFINT I-P
370 DEFDBL A-H,Q-Z
380 ON ERROR GOTO 2730
390 DIM X(50,10),Y(50),X1(10),C(10,10),D(10),X5(10)
400 CLS:KEY OFF:WIDTH 80
410 PRINT :PRINT
420 T$=STRING$(79,205)
430 PRINT T$
440 PRINT
450 PRINT " This program calculates multiple linear regression coefficients Bj"
460 PRINT "  that fit the equation "
470 PRINT "    Y=B0 + B1*X1 + B2*X2 + ... + BJ*XJ + ... + BP*XP"
480 PRINT " to a set of N values of a dependent variable Y"
490 PRINT " each of the N values corresponding to P known values of the "
500 PRINT " P independent variables XJ, where 1<J<P"
510 PRINT " The design matrix is"
520 PRINT
530 PRINT "X(1,1) X(1,2) ... X(1,J) ...X(1,P) = Y(1)"
540 PRINT "X(2,1) X(2,2) ... X(2,J) ... X(2,P) = Y(2)"
550 PRINT "  :      :           :          :       :
560 PRINT "X(I,1) X(I,2) ... X(I,J) ... X(I,P) = Y(I)"
570 PRINT "  :      :           :          :       :
580 PRINT "X(N,1) X(N,2) ... X(N,J) ... X(N,P) = Y(N)"
590 PRINT
600 PRINT " The maximum number of Y values permitted is 50"
610 PRINT " The maximum number of X values permitted is 500(10 X 50)"
620 PRINT
630 PRINT T$
640 PRINT "   Press any key to continue "
650 A$=INKEY$:IF A$="" THEN 650
660 CLS
670 PRINT :PRINT :PRINT
680 INPUT " Enter the number of Y values            ";N
690 IF N<=50 GOTO 730
700 IF N>50 THEN PRINT " Maximum number of Y values allowed is 50"
710 PRINT " Press any key to return to the start"
720 C$=INKEY$:IF C$="" THEN 720 ELSE 400
730 INPUT " Enter the number of independent variables";P
740 IF P<=10 GOTO 780
750 IF P>10 THEN PRINT " Maximum number of X values is exceeded"
760 PRINT " Press any key to return to the start"
770 D$=INKEY$:IF D$="" THEN 770 ELSE 400
780 FOR I=1 TO P
790   FOR J=1 TO P
800     C(I,J)=0.#
810   NEXT J
820   D(I)=0.#
830 NEXT I
840 FOR I=1 TO N
850   FOR J=1 TO P
860     X(I,J)=0.#
870     PRINT "Enter X(";I",";J")=";:INPUT X(I,J)
880   NEXT J
890   PRINT USING "Enter Y(##)     =";I;:
900   INPUT Y(I)
910 NEXT I
920 REM************************************************************************
930 REM******--  Calculate moments                                     --******
940 REM************************************************************************
950 FOR I=1 TO P
960  X1(I)=0.#
970  FOR I1=1 TO N
980   X1(I)=X1(I)+X(I1,I)
990  NEXT I1
1000  X1(I)=X1(I)/N
1010 NEXT I
1020 Y1=0
1030 FOR I1=1 TO N
1040  Y1=Y1+Y(I1)
1050 NEXT I1
1060 Y1=Y1/N
1070 REM************************************************************************
1080 REM*****--  Compute coefficients                                   --******
1090 REM***********************************************************************
1100 FOR J=1 TO P
1110 REM*****--  Calculate D(J)  --******
1120   S1=0
1130   FOR I=1 TO N
1140     S1=S1+(Y(I)-Y1)*(X(I,J)-X1(J))
1150   NEXT I
1160   D(J)=S1
1170   S1=0
1180   FOR K=J TO P
1190     IF J>K GOTO 1270
1200     REM*****--  Calculate C(J,K)  --*****
1210     S1=0
1220     FOR I=1 TO N
1230       S1=S1+(X(I,J)-X1(J))*(X(I,K)-X1(K))
1240     NEXT I
1250     C(J,K)=S1
1260     C(K,J)=C(J,K)
1270   NEXT K
1280 NEXT J
1290 CLS:SCREEN 0,0,0
1300 PRINT " Correlation matrices follow, C X B = D, to be solved for vector B"
1310 PRINT " where C is a P X P matrix and B and D are P X 1 vectors "
1320 FOR I= 1 TO P
1330   PRINT " Correlation matrix C(";I;",J) elements "
1340     FOR J =1 TO P
1350     PRINT "C(";I;",";J;")=";C(I,J)
1360     NEXT J
1370 NEXT I
1380 PRINT " Coefficient matrix D(J) vector elements "
1390 FOR I= 1 TO P
1400  PRINT "D(";I;")=";D(I)
1410 NEXT I
1420 FOR I= 1 TO P
1430   D1(I)=D(I)
1440 NEXT I
1450 PRINT "   Press any key to continue "
1460 B$=INKEY$:IF B$ = "" THEN 1460
1470 REM***********************************************************************
1480 REM*****--  Solve system C X B = D for B                           --*****
1490 REM*****--  where C is the correlation matrix and                  --*****
1500 REM*****--  D is the right hand vector                             --*****
1510 REM*****--  Matrix routines are in subroutines                     --*****
1520 REM***********************************************************************
1530 GOSUB 2300 `MATRIX INVERSION
1540 GOSUB 2560  `MATRIX MULTIPLICATION
1550 H1 = 0.#
1560 FOR I=1 TO P
1570   H1=H1+X5(I)*X1(I)
1580 NEXT I
1590 Q0=Y1-H1
1600 CLS:SCREEN 0,0,0
1610 PRINT :PRINT :PRINT
1620 PRINT "  Calculated multiple linear regression coefficients "
1630 PRINT
1640 PRINT USING " B  0 = #.###^^^^ ";Q0
1650 FOR I=1 TO P
1660   PRINT USING " B ## = #.###^^^^";I, X5(I)
1670 NEXT I
1680 REM*****--  Write ANOVA table
1690 PRINT :PRINT :PRINT
1700 Y9=0
1710 FOR I=1 TO N
1720 Y9=Y9+(Y(I)-Y1)^2
1730 NEXT I
1740 C9=Y9
1750 C1=0
1760 FOR I=1 TO P
1770   C1=C1+X5(I)*D1(I)
1780 NEXT I
1790 C2=C9-C1
1800 L=N-1
1810 K=L-P
1820 C8=C1/P
1830 C7=C2/K
1840 C6=C9/L
1850 PRINT "  |                        |   SUM OF SQ  |DEG OF FR |  MEAN SQ   |
1860 PRINT "  |~~~~~~~~~~~~~~~~~~~~~~~~|~~~~~~~~~~~~~~|~~~~~~~~~~|~~~~~~~~~~~~|
1870 PRINT USING "  | Due to regression      |   #.###^^^^  |   ###    | #.###^^^^  |";C1,P,C8
1880 PRINT USING "  | About regression       |   #.###^^^^  |   ###    | #.###^^^^  |";C2,K,C7
1890 PRINT USING "  |  Total                 |   #.###^^^^  |   ###    | #.###^^^^  |";C9,L,C6
1900 PRINT "  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"
1910 Z1=SQR(1.#-(C2/C9))
1920 PRINT :PRINT
1930 PRINT USING "  Coefficient of multiple regression R  = ##.### ";Z1
1940 PRINT USING "                                    R^2 = ##.### ";Z1^2
1950 F=(Z1^2)*(N-P-1)/((1-Z1^2)*P)
1960 PRINT USING " The F-statistic is                   F = ##.### ";F
1970 REM***********************************************************************
1980 REM*****--  Statistical routines directly from:                    --*****
1990 REM*****--          Madron,D.W.                                    --*****
2000 REM***********************************************************************
2010 RP=1.#
2020 P2=N-P-1
2030 IF P*P2*F = 0.# THEN 2250
2040 IF F<1.# THEN 2090
2050 A=P
2060 B=P2
2070 F1=F
2080 GOTO 2120
2090 A=P2
2100 B=P
2110 F1=1.#/F
2120 A1=2.#/(9.#*A)
2130 B1=2.#/(9.#*B)
2140 X=((1.#-B1)*F1^0.3333333#-1.#+A1)
2150 Y=SQR(B1*F1^0.666666667#+A1)
2160 Z=ABS(X/Y)
2170 IF B<4.# THEN 2190
2180 GOTO 2200
2190 Z=Z*(1.#+0.08#*Z^4.#/B^3.#)
2200 Z1=(0.115194#+Z*(0.000344#+Z*0.019527#))
2210 RP=0.5#/(1.#+Z*(0.196854#+Z*Z1))^4.#
2220 IF F<1.# THEN 2240
2230 GOTO 2250
2240 RP=1.#-RP
2250 RP=RP
2260 PRINT USING " The P statistic is                   P = ##.#### ";RP
2270 PRINT USING " For ## observations of ## independent variables";N,P
2280 KEY ON
2290 END
2300 REM**********************************************************************
2310 REM*****--  Subroutine MATINV                                     --*****
2320 REM*****--   Extracted from :                                     --*****
2330 REM*****--    Madron, Douglas William                             --*****
2340 REM*****--    "Multiple Regression for the TRS-80"                --*****
2350 REM*****--     BYTE ,October 1981, pp. 430-447                    --*****
2360 REM*****--                                                        --*****
2370 REM*****--  Adapted by:                                           --*****
2380 REM*****--   David Hopper                                         --*****
2390 REM*****--                                                       --*****
2400 REM*****--  Note that this inversion routine writes the          --*****
2410 REM*****--  inverted matrix over the original matrix             --*****
2420 REM**********************************************************************
2430 FOR K= 1 TO P:D=-1/C(K,K)
2440 FOR J = 1 TO P:IF J=K THEN 2460
2450 C(K,J)=C(K,J)*D
2460 NEXT J
2470 D=-D
2480 FOR I= 1 TO P:IF I=K THEN 2540
2490 E=C(I,K)
2500 FOR J = 1 TO P:IF J=K THEN 2520
2510 C(I,J)=C(I,J)+C(K,J)*E:GOTO 2530
2520 C(I,K)=C(I,K)*D
2530 NEXT J
2540 NEXT I
2550 C(K,K)=D:NEXT K:RETURN
2560 REM**********************************************************************
2570 REM*****--  Subroutine MATMUL                                    --******
2580 REM*****--   To multiply a P X P matrix by a P X 1 matrix        --******
2590 REM*****--   and return a P X 1 matrix                           --******
2600 REM*****--   In this case the multiplication is                  --******
2610 REM*****--   C X D = B                                           --******
2620 REM**********************************************************************
2630  B(I)=0.#
2640 FOR I = 1 TO P
2650   FOR J= 1 TO P
2660    X5(I)=X5(I)+C(I,J)*D(J)
2670   NEXT J
2680 NEXT I
2690 RETURN
2700 REM**********************************************************************
2710 REM******--   Error trapping routine                             --******
2720 REM**********************************************************************
2730 IF ERR<> 6 THEN 2760
2740   CLS:BEEP:LOCATE 5,28
2750   PRINT " Overflow error. Data set is not compatible with this program":                  STOP
2760 IF ERR<>11 THEN 2810
2770   CLS:BEEP:LOCATE 5,28
2780   PRINT " Division by zero error. Caused by either an ill-conditioned"
2790   LOCATE 6,28
2800   PRINT " matrix of data or a perfect data set. Check your data":STOP
2810 ON ERROR GOTO 0
2820 RESUME
```
{% endraw %}

## 3014-A.BAS

{% raw %}
```bas
10 KEY OFF:CLS
20 SCREEN 0
30 WIDTH 40
40 PRINT"░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░"
50 PRINT"░┌───────────────────────────────────┐░"
60 PRINT"░│                                   │░"
70 PRINT"░│            3014-A.BAS             │░"
80 PRINT"░│             MULTREG               │░"
90 PRINT"░│CORRELATION AND MULTIPLE REGRESSION│░"
100 PRINT"░│                                   │░"
110 PRINT"░│ BROUGHT TO YOU BY THE MEMBERS OF  │░"
120 PRINT"░│      ▄▄▄▄▄ ▄▄▄▄▄ ▄▄▄▄▄ ▄▄▄▄▄      │░"
130 PRINT"░│        █   █   █ █     █   █      │░"
140 PRINT"░│        █   █▄▄▄█ █     █   █      │░"
150 PRINT"░│        █   █     █     █   █      │░"
160 PRINT"░│      ▄▄█▄▄ █     █▄▄▄▄ █▄▄▄█      │░"
170 PRINT"░│                                   │░"
180 PRINT"░│      International PC Owners      │░"
190 PRINT"░│                                   │░"
200 PRINT"░│P.O. Box 10426, Pittsburgh PA 15234│░"
210 PRINT"░│                                   │░"
220 PRINT"░└───────────────────────────────────┘░"
230 PRINT"░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░"
240 PRINT
250 PRINT "       PRESS ANY KEY TO CONTINUE
260 A$=INKEY$: IF A$="" THEN 260
270 WIDTH 80
280 CLS
1000 REM MULTREG -- MULTIPLE REGRESSION PROGRAM -- J. SLOAN -- MAY 1983
1010 REM ADDRESS:302-2323 HAMILTON ST. REGINA,SASK. CANADA S4P 3Y5
1020 KEY OFF:SCREEN 0:WIDTH 80:COLOR 7,0:CLS
1030 REM FUNCTIONS FOR SIGN OF COEFFICIENT AND DETERMINANT OF MATRIX COFACTOR
1040 DEF FNS$(X)=MID$("-++",SGN(X)+2,1)
1050 DEF FNDET(A,B,C,D,E,F,G,H,I)=A*(E*I-F*H)-B*(D*I-F*G)+C*(D*H-E*G)
1060 LOCATE 5,25:COLOR 0,7:PRINT "MULTIPLE REGRESSION ANALYSIS PACKAGE"
1070 LOCATE 10,33:COLOR 17,0:PRINT "AUTHOR: J. SLOAN"
1080 LOCATE 23,27:COLOR 0,7:PRINT "Press space bar to continue"
1090 CMD$=INKEY$:IF CMD$="" THEN 1090
1100 COLOR 7,0:CLS:COLOR 0,7:LOCATE 2,29:PRINT "DATASET SPECIFICATION"
1110 LOCATE 4,2:INPUT "DOES THE DATA REST ON A FILE(Y/N)? ",F$
1120 IF F$="Y" OR F$="y" THEN GOSUB 1660:GOTO 1490
1130 LOCATE 6,2:INPUT "DO YOU WISH THE DATA STORED ON A FILE(Y/N)? ",S$
1140 LOCATE 8,2:INPUT "ENTER THE NUMBER OF INDEPENDENT X VARIABLES ===> ",VAR
1150 LOCATE 10,2:INPUT "ENTER THE NUMBER OF OBSERVATIONS ===> ",OBS
1160 LOCATE 12,2:INPUT "ENTER A LABEL FOR THE Y VARIABLE ===> ",YLBL$
1170 DIM Y(OBS),X(VAR,OBS),R(VAR,VAR),SX(VAR),SYX(VAR),SXX(VAR+(VAR*(VAR+1)/2))
1180 REM Y=DEPENDENT VARIABLE,X=INDEPENDENT VARIABLES,R=CORRELATION COEFFICIENTS
1190 REM SX=SUMS OF INDIVIDUAL X VARIABLES, SYX=SUMS OF Y AND X PRODUCTS
1200 REM SXX=CROSS PRODUCT MATRIX FOR X VARIABLE COMBINATIONS
1210 REM SY=SUM OF Y'S,SSY=SUM OF SQUARES FOR Y
1220 REM SSR=SUM OF SQUARES (REGRESSION),SSE=SUM OF SQUARES(ERROR)
1230 REM B0,B1,B2,...=REGRESSION COEFFICIENTS FOR INTERCEPT,VARIABLE 1,VAR 2,...
1240 REM RSQR=R-SQUARE STATISTIC,SST=SUM OF SQUARES(TOTAL),D=MATRIX DETERMINANT
1250 REM MSE=MEAN SQUARE(ERROR),MSR=MEAN SQUARE(REGRESSION)
1260 REM M## AND IM## ARE THE ELEMENTS OF THE REGRESSION MATRIX AND ITS INVERSE
1270 FOR I=1 TO VAR
1280  LOCATE 13+I,2:PRINT "ENTER A LABEL FOR DEPENDENT X VARIABLE #";I
1290  LOCATE 13+I,48:INPUT "===> ",XLBL$(I)
1300 NEXT I
1310 LOCATE 23,2:PRINT "DATA SPECIFICATION COMPLETE....PRESS SPACE BAR TO CONTINUE "
1320 CMD$=INKEY$:IF CMD$="" THEN 1320
1330 COLOR 7,0:CLS:LOCATE 2,30:COLOR 0,7:PRINT "DATA ENTRY PROCEDURE"
1340 COLOR 7,0:LOCATE 4,2:PRINT "ENTER THE DATA BY PROVIDING VALUES FOR THE INPUT FIELDS AS FOLLOWS:"
1350 FOR I=1 TO OBS
1360  L=1:LOCATE 7,2:PRINT "OBSERVATION #";I
1370  LOCATE 9,2:PRINT YLBL$;:INPUT " VALUE ===> ",Y(I)
1380  SY=SY+Y(I):SSY=SSY+Y(I)^2
1390  FOR J=1 TO VAR
1400   LOCATE 10+J,2:PRINT XLBL$(J);:INPUT " VALUE ===> ",X(J,I)
1410   SX(J)=SX(J)+X(J,I):SYX(J)=SYX(J)+Y(I)*X(J,I)
1420   FOR K=1 TO J:SXX(L)=SXX(L)+X(K,I)*X(J,I):L=L+1:NEXT K
1430  NEXT J
1440  LOCATE 9,9+LEN(YLBL$):PRINT STRING$(20,32)
1450  FOR J=1 TO VAR
1460   LOCATE 10+J,9+LEN(XLBL$(J)):PRINT STRING$(20,32)
1470  NEXT J
1480 NEXT I
1490 LOCATE 23,2:COLOR 0,7:PRINT "*** DATA ACCEPTED ***  PRESS SPACE BAR TO CONTINUE"
1500 CMD$=INKEY$:IF CMD$="" THEN 1500
1510 REM CORRELATION PROCEDURE
1520 COLOR 7,0:CLS:LOCATE 1,29:COLOR 0,7:PRINT "CORRELATION PROCEDURE"
1530 LOCATE 3,2:PRINT "THE FOLLOWING IS A REPRESENTATION OF THE CORRELATION MATRIX FOR THE GIVEN DATA:"
1540 GOSUB 1930
1550 FOR P=1 TO VAR:LOCATE 5,11+10*(P-1):PRINT XLBL$(P):NEXT P:LOCATE 7,2
1560 PRINT YLBL$:FOR I=1 TO VAR:LOCATE 7,10*I:PRINT USING "#.####";R(I,1):NEXT I
1570 FOR P=1 TO VAR-1:FOR J=P+1 TO VAR
1580   LOCATE 7+2*P,2:PRINT XLBL$(P):LOCATE 7+2*P,10*J:PRINT USING "#.####";R(P,J)
1590  NEXT J
1600 NEXT P
1610 LOCATE 23,27:COLOR 0,7:PRINT "Press space bar to continue "
1620 CMD$=INKEY$:IF CMD$="" THEN 1620
1630 COLOR 7,0:SST=SSY-(SY^2)/OBS:CLS:GOSUB 2010
1640 IF S$="Y" OR S$="y" THEN GOSUB 1800
1650 COLOR 7,0:CLS:CLOSE:KEY ON:END
1660 REM FILE INPUT SUBROUTINE
1670 LOCATE 6,2:INPUT "ENTER THE NAME OF THE DATA FILE ===> ",NM$
1680 OPEN NM$ FOR INPUT AS #1
1690 INPUT#1,VAR,OBS,L,YLBL$
1700 DIM Y(OBS),X(VAR,OBS),R(VAR,VAR),SX(VAR),SYX(VAR),SXX(VAR+(VAR*(VAR+1)/2))
1710 FOR J=1 TO VAR:INPUT#1,XLBL$(J):NEXT J
1720 INPUT#1,SY,SSY:FOR J=1 TO VAR:INPUT#1,SX(J),SYX(J):NEXT J
1730 FOR K=1 TO L:INPUT#1,SXX(K):NEXT K
1740 FOR J=1 TO VAR
1750  FOR K=1 TO VAR
1760   INPUT#1,R(J,K)
1770  NEXT K
1780 NEXT J
1790 RETURN
1800 REM DATA FILE STORAGE SUBROUTINE
1810 LOCATE 6,2:COLOR 0,7:INPUT "ENTER A NAME FOR THE FILE IN WHICH THE DATA WILL BE STORED ===> ",NM$
1820 OPEN NM$ FOR OUTPUT AS #1
1830 WRITE#1,VAR,OBS,L,YLBL$
1840 FOR J=1 TO VAR:WRITE#1,XLBL$(J):NEXT J
1850 WRITE#1,SY,SSY:FOR J=1 TO VAR:WRITE#1,SX(J),SYX(J):NEXT J
1860 FOR K=1 TO L:WRITE#1,SXX(K):NEXT K
1870 FOR J=1 TO VAR
1880  FOR K=1 TO VAR
1890   WRITE#1,R(J,K)
1900  NEXT K
1910 NEXT J
1920 RETURN
1930 REM CORRELATION COEFFICIENT CALCULATION SUBROUTINE
1940 FOR J=1 TO VAR
1950  R(J,1)=(SYX(J)-SX(J)*SY/OBS)/SQR((SXX(J*(J+1)/2)-(SX(J)^2)/OBS)*(SSY-(SY^2)/OBS))
1960  FOR K=1 TO J
1970   IF J<>K THEN R(K,J)=(SXX(K+J*(J-1)/2)-SX(J)*SX(K)/OBS)/SQR((SXX(J*(J+1)/2)-(SX(J)^2)/OBS)*(SXX(K*(K+1)/2)-(SX(K)^2)/OBS))
1980  NEXT K
1990 NEXT J
2000 RETURN
2010 REM ALL POSSIBLE SUBSETS REGRESSION SUBROUTINE
2020 LOCATE 1,18:COLOR 0,7:PRINT "MULTIPLE REGRESSION: ALL POSSIBLE SUBSETS OPTION"
2030 LOCATE 3,21:PRINT "INSTRUCTIONS: ALL POSSIBLE SUBSETS"
2040 COLOR 7,0:LOCATE 5,10:PRINT "THIS PROCEDURE WILL CALCULATE THE LEAST SQUARES REGRESSION LINE"
2050 LOCATE 6,10:PRINT "FOR EACH SET OF INDEPENDENT VARIABLES OF THE SIZE YOU SPECIFY."
2060 PRINT TAB(10);"THE SIZE MAY VARY FROM 1 TO 3 VARIBLES IN THE EQUATION."
2070 PRINT TAB(10);"FOR EXAMPLE, IF THERE ARE 4 INDEPENDENT VARIBLES IN THE DATA"
2080 PRINT TAB(10);"AND YOU SPECIFY A SIZE=3 THEN THE PROCEDURE WILL CALCULATE"
2090 PRINT TAB(10);"THE FOLLOWING LEAST SQUARES REGRESSION LINES:"
2100 PRINT:PRINT TAB(30);"1) Y=aX1+bX2+cX3"
2110 PRINT:PRINT TAB(30);"2) Y=aX1+bX2+dX4"
2120 PRINT:PRINT TAB(30);"3) Y=aX1+cX3+dX4"
2130 PRINT:PRINT TAB(30);"4) Y=bX2+cX3+dX4":PRINT:PRINT
2140 LOCATE 23,20:INPUT "SPECIFY THE SIZE DESIRED ===> ",SIZE
2150 IF SIZE<1 OR SIZE>3 THEN BEEP:BEEP:GOTO 2140
2160 LOCATE 23:PRINT STRING$(70,32)
2170 COLOR 0,7:LOCATE 23,27:PRINT "Press space bar to continue"
2180 CMD$=INKEY$:IF CMD$="" THEN 2180
2190 COLOR 7,0:CLS:ON SIZE GOSUB 2230,2360,2670
2200 LOCATE 23,14:INPUT "DO YOU WISH OTHER SUBSET SIZE REGRESSION EQUATIONS (Y/N)?",C$
2210 IF C$="Y" OR C$="y" THEN COLOR 7,0:CLS:GOTO 2020
2220 GOTO 2350
2230 LOCATE 1,3:COLOR 0,7:PRINT "SINGULAR DEPENDENT VARIABLE REGRESSION MODELS FOR DEPENDENT VARIABLE: ";YLBL$:COLOR 7,0:PRINT
2240 COLOR 1,0:PRINT "VARIABLE   INTERCEPT    SLOPE      SS(REG)     SS(ERROR)   SS(TOT)    RSQUARE":COLOR 7,0
2250 FOR J=1 TO VAR
2260  D=SXX(J*(J+1)/2)-(SX(J)^2)/OBS
2270  B1=R(J,1)*SQR((SSY-(SY^2)/OBS)/D):BO=(SSY-B1*SX(J))/OBS
2280  SSR=D*B1^2
2290  SSE=SST-SSR
2300  RSQR=SSR/SST
2310  PRINT XLBL$(J);TAB(12);BO;TAB(24);B1;TAB(35);SSR;TAB(47);SSE;TAB(59);SST;TAB(71);USING "#.####";RSQR
2320 NEXT J
2330 COLOR 0,7:LOCATE 23,27:PRINT "Press space bar to continue"
2340 CMD$=INKEY$:IF CMD$="" THEN 2340
2350 RETURN
2360 REM TWO INDPT VAR REGRESSION
2370 CLS:LOCATE 13,30:COLOR 17,0:PRINT "THINK....THINK....THINK....":COLOR 7,0
2380 FOR I=1 TO VAR-1
2390  FOR J=I+1 TO VAR
2400   YM1=SY:YM2=SYX(I):YM3=SYX(J)
2410   M11=OBS:M12=SX(I):M13=SX(J):M21=M12:M22=SXX(I*(I+1)/2):M31=M13
2420   M23=SXX(I+J*(J-1)/2):M32=M23:M33=SXX(J*(J+1)/2)
2430   D=FNDET(M11,M12,M13,M21,M22,M23,M31,M32,M33)
2440   IM11=(M22*M33-M23^2)/D:IM22=(M11*M33-M13*M31)/D
2450   IM33=(M11*M22-M12*M21)/D:IM12=-(M12*M33-M13*M32)/D
2460   IM21=-(M21*M33-M23*M31)/D:IM32=-(M11*M32-M12*M31)/D
2470   IM23=-(M11*M23-M13*M21)/D:IM13=(M12*M23-M13*M22)/D
2480   IM31=(M21*M32-M22*M31)/D
2490   B0=IM11*YM1+IM12*YM2+IM13*YM3
2500   B1=IM21*YM1+IM22*YM2+IM23*YM3
2510   B2=IM31*YM1+IM32*YM2+IM33*YM3
2520   SSR=B0*YM1+B1*YM2+B2*YM3-(SY^2)/OBS
2530   SSE=SST-SSR:RSQR=SSR/SST:MSR=SSR/2:MSE=SSE/(OBS-3)
2540   CLS:COLOR 7,0:LOCATE 2,17:PRINT "MULTIPLE REGRESSION ANALYSIS OF VARIANCE TABLE":PRINT TAB(17);STRING$(46,45):COLOR 15,0:LOCATE 5
2550   PRINT "FOR THE EQUATION: ":PRINT:PRINT YLBL$;" =";B0;FNS$(B1);ABS(B1);XLBL$(I)+" ";FNS$(B2);ABS(B2);XLBL$(J):COLOR 7,0
2560   LOCATE 10,5:PRINT "SOURCE";TAB(17);"D.F.";TAB(28);"SUM SQUARES";TAB(46);"MEAN SQUARE     R-SQUARE"
2570   PRINT TAB(5);STRING$(65,45):PRINT
2580   PRINT TAB(5);"REGRESSION  ";SIZE;TAB(27);SSR;TAB(45);MSR;TAB(63);USING "#.####";RSQR
2590   PRINT:PRINT "    ERROR";TAB(17);OBS-3;TAB(27);SSE;TAB(45);MSE
2600   PRINT:PRINT TAB(5);STRING$(65,45)
2610   PRINT:PRINT "    TOTAL";TAB(17);OBS-1;TAB(27);SST
2620   LOCATE 23,27:COLOR 0,7:PRINT "Press space bar to continue":COLOR 7,0
2630   CMD$=INKEY$:IF CMD$="" THEN 2630
2640   NEXT J
2650  NEXT I
2660 RETURN
2670 REM THREE INDPT VAR REGRESSION
2680 CLS:LOCATE 13,30:COLOR 17,0:PRINT "THINK....THINK....THINK....":COLOR 7,0
2690 FOR I=1 TO VAR-2
2700  FOR J=I+1 TO VAR-1
2710   FOR K=J+1 TO VAR
2720    YM1=SY:YM2=SYX(I):YM3=SYX(J):YM4=SYX(K)
2730    M11=OBS:M12=SX(I):M13=SX(J):M14=SX(K)
2740    M21=M12:M31=M13:M41=M14
2750    M22=SXX(I*(I+1)/2):M33=SXX(J*(J+1)/2)
2760    M44=SXX(K*(K+1)/2)
2770    M23=SXX(I+J*(J-1)/2):M32=M23
2780    M24=SXX(I+K*(K-1)/2):M42=M24
2790    M34=SXX(J+K*(K-1)/2):M43=M34
2800    T1=FNDET(M22,M23,M24,M32,M33,M34,M42,M43,M44)
2810    T2=FNDET(M21,M23,M24,M31,M33,M34,M41,M43,M44)
2820    T3=FNDET(M21,M22,M24,M31,M32,M34,M41,M42,M44)
2830    T4=FNDET(M21,M22,M23,M31,M32,M33,M41,M42,M43)
2840    D=M11*T1-M12*T2+M13*T3-M14*T4
2850    IM11=T1/D:IM21=-T2/D:IM31=T3/D:IM41=-T4/D
2860    IM12=-FNDET(M12,M13,M14,M32,M33,M34,M42,M43,M44)/D
2870    IM13=FNDET(M12,M13,M14,M22,M23,M24,M42,M43,M44)/D
2880    IM14=-FNDET(M12,M13,M14,M22,M23,M24,M32,M33,M34)/D
2890    IM22=FNDET(M11,M13,M14,M31,M33,M34,M41,M43,M44)/D
2900    IM23=-FNDET(M11,M13,M14,M21,M23,M24,M41,M43,M44)/D
2910    IM24=FNDET(M11,M13,M14,M21,M23,M24,M31,M33,M34)/D
2920    IM32=-FNDET(M11,M12,M14,M31,M32,M34,M41,M42,M44)/D
2930    IM33=FNDET(M11,M12,M14,M21,M22,M24,M41,M42,M44)/D
2940    IM34=-FNDET(M11,M12,M14,M21,M22,M24,M31,M32,M34)/D
2950    IM42=FNDET(M11,M12,M13,M31,M32,M33,M41,M42,M43)/D
2960    IM43=-FNDET(M11,M12,M13,M21,M22,M23,M41,M42,M43)/D
2970    IM44=FNDET(M11,M12,M13,M21,M22,M23,M31,M32,M33)/D
2980    B0=IM11*YM1+IM12*YM2+IM13*YM3+IM14*YM4
2990    B1=IM21*YM1+IM22*YM2+IM23*YM3+IM24*YM4
3000    B2=IM31*YM1+IM32*YM2+IM33*YM3+IM34*YM4
3010    B3=IM41*YM1+IM42*YM2+IM43*YM3+IM44*YM4
3020    SSR=B0*YM1+B1*YM2+B2*YM3+B3*YM4-(SY^2)/OBS
3030    SSE=SST-SSR:RSQR=SSR/SST:MSR=SSR/3:MSE=SSE/(OBS-4):CLS:COLOR 7,0
3040   LOCATE 2,17:PRINT "MULTIPLE REGRESSION ANALYSIS OF VARIANCE TABLE"
3050    PRINT TAB(17);STRING$(46,45):COLOR 15,0:LOCATE 5
3060   PRINT "FOR THE EQUATION: ":PRINT:PRINT YLBL$;" =";B0;FNS$(B1);ABS(B1);XLBL$(I)+" ";FNS$(B2);ABS(B2);XLBL$(J)+" ";FNS$(B3);ABS(B3);XLBL$(K):COLOR 7,0
3070   LOCATE 10,5:PRINT "SOURCE";TAB(17);"D.F.";TAB(28);"SUM SQUARE";TAB(46);"MEAN SQUARE     R-SQUARE"
3080   PRINT TAB(5);STRING$(65,45):PRINT
3090   PRINT TAB(5);"REGRESSION  ";SIZE;TAB(27);SSR;TAB(45);MSR;TAB(63);USING "#.####";RSQR
3100   PRINT:PRINT "    ERROR";TAB(17);OBS-4;TAB(27);SSE;TAB(45);MSE
3110   PRINT:PRINT TAB(5);STRING$(65,45)
3120   PRINT:PRINT "    TOTAL";TAB(17);OBS-1;TAB(27);SST
3130   LOCATE 23,27:COLOR 0,7:PRINT "Press space bar to continue":COLOR 7,0
3140   CMD$=INKEY$:IF CMD$="" THEN 3140
3150   NEXT K
3160  NEXT J
3170 NEXT I
3180 RETURN
```
{% endraw %}

## 4028-A.BAS

{% raw %}
```bas
10 KEY OFF:CLS
20 SCREEN 0
30 WIDTH 40
40 PRINT"░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░"
50 PRINT"░┌───────────────────────────────────┐░"
60 PRINT"░│                                   │░"
70 PRINT"░│            4028-A.BAS             │░"
80 PRINT"░│       PRELUDE 1 IN C MAJOR        │░"
90 PRINT"░│            J.S. BACH              │░"
100 PRINT"░│                                   │░"
110 PRINT"░│ BROUGHT TO YOU BY THE MEMBERS OF  │░"
120 PRINT"░│      ▄▄▄▄▄ ▄▄▄▄▄ ▄▄▄▄▄ ▄▄▄▄▄      │░"
130 PRINT"░│        █   █   █ █     █   █      │░"
140 PRINT"░│        █   █▄▄▄█ █     █   █      │░"
150 PRINT"░│        █   █     █     █   █      │░"
160 PRINT"░│      ▄▄█▄▄ █     █▄▄▄▄ █▄▄▄█      │░"
170 PRINT"░│                                   │░"
180 PRINT"░│      International PC Owners      │░"
190 PRINT"░│                                   │░"
200 PRINT"░│P.O. Box 10426, Pittsburgh PA 15234│░"
210 PRINT"░│                                   │░"
220 PRINT"░└───────────────────────────────────┘░"
230 PRINT"░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░"
240 PRINT
250 PRINT "       PRESS ANY KEY TO CONTINUE
260 A$=INKEY$: IF A$="" THEN 260
270 WIDTH 80
280 CLS
1000 '*************************************************************************       *             BACH'S WELL-TEMPERED CLAVIER, BOOK 1, PRELUDE 1           *       *                                                                       *
1010 '*                        programmed for the IBM-PC                      *       *                             by Jason Vollmer                          *       *************************************************************************
1020 '
1030 'This prelude is well-suited for the single voice of the PC. Every note of    the original piece is played. The tempo gradually slows in the last 2 meas-     ures, as a keyboardist might play it, and ends with the PC's approximation      of a chord.
1040 '
1050 'The user is given the option to change the tempo from the standard tempo       for this piece of 112 beats per minute.
1060 '
1070 ON ERROR GOTO 1990                        'Checks for advanced BASIC
1080 '
1090 '*************************************************************************       *                              LOAD THE NOTES                           *       *************************************************************************
1100 '
1110 ' The elements of the M$ array each contain the first 8 notes of the             prelude's  corresponding measure. For these 32 measures, line 1800 plays        each series of 8 notes twice, producing 16 sixteenth notes per measure.
1120 '
1130 ' Note: The PC does not require notes to be organized into measures.
1140 '
1150 DIM M$(32)
1160  M$(1) = "O3 CEG O4 CE O3 G O4 CE"
1170  M$(2) = "O3 CDA O4 DF O3 A O4 DF"
1180  M$(3) = "O2 B O3 DG O4 DF O3 G O4 DF"
1190  M$(4) =  M$(1)
1200  M$(5) = "O3 CEA O4 EA O3 A O4 EA"
1210  M$(6) = "O3 CDF#A O4 D O3 F#A O4 D"
1220  M$(7) = "O2 B O3 DG O4 DG O3 G O4 DG"
1230  M$(8) = "O2 B O3 CEG O4 C O3 EG O4 C"
1240  M$(9) = "O2 A O3 CEG O4 C O3 EG O4 C"
1250 M$(10) = "O2 DA O3 DF# O4 C O3 DF# O4 C"
1260 M$(11) = "O2 GB O3 DGBDGB"
1270 M$(12) = "O2 GB- O3 EG O4 C# O3 EG O4 C#"
1280 M$(13) = "O2 FA O3 DA O4 D O3 DA O4 D"
1290 M$(14) = "O2 FA- O3 DFBDFB"
1300 M$(15) = "O2 EG O3 CG O4 C O3 CG O4 C"
1310 M$(16) = "O2 EFA O3 CF O2 A O3 CF"
1320 M$(17) = "O2 DFA O3 CF O2 A O3 CF"
1330 M$(18) = "O1 G O2 DGB O3 F O2 GB O3 F"
1340 M$(19) = "O2 CEG O3 CE O2 G O3 CE"
1350 M$(20) = "O2 CGB- O3 CE O2 B- O3 CE"
1360 M$(21) = "O1 F O2 FA O3 CE O2 A O3 CE"
1370 M$(22) = "O1 F# O2 CA O3 CE- O2 A O3 CE-"
1380 M$(23) = "O1 A- O2 FB O3 CD O2 B O3 CD"
1390 M$(24) = "O1 G O2 FGB O3 D O2 GB O3 D"
1400 M$(25) = "O1 G O2 EG O3 CE O2 G O3 CE"
1410 M$(26) = "O1 G O2 DG O3 CF O2 G O3 CF"
1420 M$(27) =  M$(18)
1430 M$(28) = "O1 G O2 E-A O3 CF# O2 A O3 CF#"
1440 M$(29) = "O1 G O2 EG O3 CG O2 G O3 CG"
1450 M$(30) =  M$(26)
1460 M$(31) =  M$(18)
1470 M$(32) = "O1 C O2 CGB- O3 E O2 GB- O3 E"
1480 M33$   = "O1 C O2 CFA O3 CFC O2 A O3 C O2 AFAFDFD"
1490 M34A$  = "O1 CB O3 GB O4 DFD O3 B O4 D O3 BGB"
1500 M34B$  = "O3 DFED P32"
1510 ENDING.CHORD$ = "T255 L64 O1 C O2 C O3 EG O4 C1"
1520 '
1530 '*************************************************************************       *                     ALLOW THE USER TO CHANGE TEMPO                    *       *************************************************************************
1540 '
1550 SCREEN 0:WIDTH 80:CLS:PRINT "PRELUDE 1 - J.S. BACH":PRINT
1560 PRINT "Is standard tempo for this piece of 112 ok?"
1570 INPUT "  (Enter Y or N):  ",T$
1580 IF T$="Y" OR T$="y" THEN 1630
1590     INPUT "  Tempo desired (54-255): ";TEMPO
1600     IF TEMPO >=54 AND TEMPO<=255 THEN 1670
1610         PRINT "Invalid response"
1620         INPUT "Please enter a tempo between 54 and 255: ",TEMPO:GOTO 1600
1630 TEMPO=112
1640 '
1650 ' ************************************************************************        *                        SET THE SCREEN DISPLAY                        *        ************************************************************************
1660 '
1670 CLS:KEY OFF:PRINT "Now playing..."
1680 LOCATE 2,31:PRINT "P R E L U D E    1"
1690 LOCATE 4,30:PRINT "i n    C    M a j o r"
1700 LOCATE 8,37:PRINT "f r o m"
1710 LOCATE 12,15:PRINT "T H E    W E L L - T E M P E R E D    C L A V I E R"
1720 LOCATE 14,35:PRINT "B o o k    1"
1730 LOCATE 17,39:PRINT "b y"
1740 LOCATE 20,33:PRINT "J. S.   B A C H"
1750 '
1760 '*************************************************************************       *                             PLAY THE NOTES                            *       *************************************************************************
1770 '
1780 PLAY "ML T=TEMPO; L16"
1790 FOR I=1 TO 32
1800     PLAY "XM$(I); XM$(I);"
1810 NEXT
1820 TEMPO2=TEMPO*.9
1830 PLAY "T=TEMPO2; XM33$;"
1840 TEMPO3=TEMPO*.75
1850 PLAY "T=TEMPO3; XM34A$;"
1860 TEMPO4=TEMPO*.6
1870 PLAY "T=TEMPO4; XM34B$;"
1880 PLAY "T=TEMPO; XENDING.CHORD$;"
1890 '
1900 '*************************************************************************       *                         ALLOW REPLAY AND FINISH                       *       *************************************************************************
1910 '
1920 LOCATE 1,1:PRINT SPC(14)
1930 FOR I=1 TO 1500:NEXT           'Delay loop
1940 LOCATE 21,1:INPUT "Play again (Enter Y or N): ";A$
1950 IF A$="Y" OR A$="y" THEN 1550
1960 PRINT "End of music program"
1970 END
1980 '
1990 IF ERR=73 THEN CLS:                                                          PRINT "THIS PROGRAM USES THE 'PLAY' STATEMENT WHICH REQUIRES ADVANCED BASIC.":  PRINT "LOAD 'BASICA' AND RE-RUN.":END
2000 ON ERROR GOTO 0
```
{% endraw %}

## 5006-A.BAS

{% raw %}
```bas
10 CLS
20 A$=STRING$(80,205)
30 PRINT A$
40 PRINT TAB(28)"5006-A.BAS     SPELLER-1"
50 COLOR 23,0,0
60 PRINT :PRINT :PRINT TAB(38)"IPCO"
70 COLOR 7,0,0
80 PRINT :PRINT :PRINT TAB(29)"INTERNATIONAL PC OWNERS"
90 PRINT :PRINT :PRINT TAB(17)"p.o. box 10426, pittsburgh, pennsylvania 15234"
100 PRINT A$
110 PRINT :PRINT :PRINT :PRINT :PRINT
120 PRINT TAB(28)"PRESS ANY KEY TO CONTINUE"
130 A$=INKEY$:IF A$="" THEN 130
140 CLS
1000 REM *** SPELLING PROGRAM ****
1010 REM *** PROGRAM WRITTEN BY RAYMOND H. SCHILLING ***
1020 REM                        6065 REDFORD ROAD N.W.
1030 REM                        NORTH CANTON, OHIO 44720
1040 REM                        (216) 494-3289
1050 REM *** DATE WRITTEN 03/01/82 ***
1060 REM ************************************************************************
1070 REM ---- THIS PROGRAM ALLOWS YOU TO ENTER A LIST OF SPELLING WORDS
1080 REM      AND THEN DISPLAYS EACH WORD FOR 2 SECONDS
1090 REM      AND THEN THE STUDENT MUST TYPE THE WORD CORRECTLY ----
1100 REM ---- THE PROGRAM KEEPS TRACK OF THE NUMBER OF WORDS ANSWERED CORRECTLY
1110 REM      AND REPEATS THE WORDS MISSED FOR THE STUDENT TO REDO ----
1120 REM ************************************************************************
1130 CLS
1140 KEY OFF
1150 DIM WORDS$(100)
1160 LET I=1
1170 PRINT "ENTER YOUR LIST OF SPELLING WORDS -- ONE WORD AFTER EACH QUESTION MARK"
1180 PRINT "ENTER THE WORD 'done' WHEN YOU HAVE FINISHED ENTERING ALL YOUR SPELLING WORDS"
1190 PRINT
1200 INPUT WORDS$(I)
1210 IF WORDS$(I)="DONE" THEN 1250
1220 IF WORDS$(I)="done" THEN 1250
1230 I=I+1
1240 GOTO 1200
1250 CLS
1260 PRINT
1270 PRINT "HIT ANY KEY WHEN YOU ARE READY TO BEGIN."
1280 A$=INKEY$
1290 IF A$="" THEN 1280
1300 I=I-1
1310 J=0:K=0
1320 CLS
1330 J=J+1
1340 TIME$="00:00:00"
1350 WHILE TIME$<"00:00:02"
1360 COLOR 15,0
1370 LOCATE 10,(39-LEN(WORDS$(J))/2)
1380 PRINT WORDS$(J)
1390 WEND
1400 CLS
1410 LOCATE 11,31
1420 FOR M=1 TO 18:PRINT CHR$(223);:NEXT M
1430 LOCATE 11,30:PRINT CHR$(221):LOCATE 11,50:PRINT CHR$(221)
1440 LOCATE 12,30:PRINT CHR$(221):LOCATE 12,50:PRINT CHR$(221)
1450 LOCATE 14,30:PRINT CHR$(221):LOCATE 14,50:PRINT CHR$(221)
1460 LOCATE 15,30:PRINT CHR$(221):LOCATE 15,50:PRINT CHR$(221)
1470 LOCATE 15,31
1480 FOR M=1 TO 18:PRINT CHR$(220);:NEXT M
1490 COLOR 15,0
1500 LOCATE 13,31
1510 INPUT R$
1520 COLOR 7,0
1530 IF R$=WORDS$(J) THEN C=C+1:GOTO 1560
1540 K=K+1
1550 LET WRONG$(K)=WORDS$(J)
1560 IF J<>I THEN 1320
1570 CLS
1580 BEEP:BEEP:BEEP
1590 PRINT "YOU SPELLED ";C;" WORDS CORRECTLY OUT OF A LIST OF ";I;" WORDS."
1600 PRINT
1610 IF C=I THEN 1790
1620 PRINT "HERE ARE THE WORDS YOU MISSED."
1630 PRINT "TYPE THE WORD CORRECTLY AFTER THE QUESTION MARK!"
1640 PRINT
1650 LET J=0
1660 LET J=J+1
1670 PRINT WRONG$(J)
1680 PRINT
1690 INPUT R$
1700 IF R$=WRONG$(J) THEN 1720
1710 PRINT "WRONG! TRY AGAIN.":GOTO 1680
1720 BEEP
1730 PRINT "GOOD! THAT'S CORRECT."
1740 PRINT
1750 IF K=J THEN 1810
1760 PRINT "HERE'S THE NEXT WORD."
1770 PRINT
1780 GOTO 1660
1790 PRINT
1800 BEEP:PRINT "CONGRATULATIONS! YOU SPELLED THEM ALL CORRECTLY"
1810 PRINT
1820 BEEP
1830 PRINT "THAT'S ALL FOR NOW!"
1840 KEY ON
```
{% endraw %}

## 7013-A.BAS

{% raw %}
```bas
10 CLS
20 A$=STRING$(80,205)
30 PRINT A$
40 PRINT TAB(26)"7013-A.BAS     ITALICS PRINTER"
50 COLOR 23,0,0
60 PRINT :PRINT :PRINT TAB(38)"IPCO"
70 COLOR 7,0,0
80 PRINT :PRINT :PRINT TAB(29)"INTERNATIONAL PC OWNERS"
90 PRINT :PRINT :PRINT TAB(17)"p.o. box 10426, pittsburgh, pennsylvania 15234"
100 PRINT A$
110 PRINT :PRINT :PRINT :PRINT :PRINT
120 PRINT TAB(28)"PRESS ANY KEY TO CONTINUE"
130 A$=INKEY$:IF A$="" THEN 130
140 CLS
1000 ' IPCO  Software Exchange Submission PRTITAL2 authored on November 15, 1982
1010 '
1020 '  by Michael Csontos, 3228 Livonia Center Road, Lima, New York 14485
1030 '
1040 PRINT "Do you have a  1.) high resolution":PRINT
1050 PRINT "                   80 character width":PRINT
1060 PRINT "         or a  2.) low resolution":PRINT
1070 PRINT "                   40 character width":PRINT
1080 PRINT "display?":PRINT
1090 INPUT "(1 or 2)";DISP
1100 IF DISP<1 OR DISP>2 OR INT(DISP)<>DISP THEN 1090
1110 ON DISP GOTO 1120,1520
1120 WIDTH 80:WIDTH "LPT1:",255:SCREEN 0,0,0:KEY OFF:CLS
1130 PRINT "This little program will print your ASCII text files in italics on an":PRINT
1140 PRINT "EPSON MX-80 printer.  It was inspired by the program MORSECOD on the":PRINT
1150 PRINT "CAPITOL PC VOL 2.32 disk from the (PC)^3 library after discovering how":PRINT
1160 PRINT "the correct code was produced for both upper and lower case characters.":PRINT
1170 PRINT "The conversion process {using (CHR$(ASC$(x$) OR 32) or 128 in this case}":PRINT
1180 PRINT "should be very useful for other applications such as generating a graphics":PRINT
1190 PRINT "keyboard.":PRINT
1200 INPUT "Enter the filespec of the file to be typed. (nnnnnnnn.eee) "; FILESPEC$
1210 CLS:LOCATE 25,1:PRINT "FILESPEC is " FILESPEC$:LOCATE 1,1:
1220 ON ERROR GOTO 1390
1230 PRINT "You have the choice of several print typefaces. They are:":PRINT
1240 PRINT "      1: double width emphasized  40 characters/line  40 lines/page
1250 PRINT "      2: double width compressed  66 characters/line  50 lines/page
1260 PRINT "      3: normal emphasized        80 characters/line  60 lines/page
1270 PRINT "      4: compressed              132 characters/line  80 lines/page
1280 PRINT "      5: tiny (script)           132 characters/line 120 lines/page
1290 PRINT:PRINT "Please select your choice (1-5) or press <Esc> to quit.";
1300 TYPEFACE$=INKEY$:IF TYPEFACE$=CHR$(27) THEN KEY ON:END ELSE IF TYPEFACE$="" THEN 1300 ELSE TYPEFACE=VAL(TYPEFACE$):IF TYPEFACE<1 OR TYPEFACE>5 OR INT(TYPEFACE)<>TYPEFACE THEN PRINT "Please press a number from 1 - 5 or press <Esc> to quit.":GOTO 1290
1310 PRINT TYPEFACE:PRINT
1320 LPRINT CHR$(27)"@"
1330 ON TYPEFACE GOTO 1340,1350,1360,1370,1380
1340 LPRINT CHR$(27)CHR$(69)CHR$(27)CHR$(87)CHR$(1)CHR$(27)CHR$(65)CHR$(18);:GOTO 1430'double width
1350 LPRINT CHR$(15)CHR$(27)CHR$(87)CHR$(1)CHR$(27)CHR$(65)CHR$(14);:GOTO 1430'double width compressed
1360 LPRINT CHR$(27)CHR$(69);:GOTO 1430'normal emphasized
1370 LPRINT CHR$(15)CHR$(27)CHR$(65)CHR$(9);:GOTO 1430' compressed
1380 LPRINT CHR$(15)CHR$(27)"S"CHR$(INT(RND*2))CHR$(27)"A"CHR$(6);:GOTO 1430'TINYPRNT
1390 IF ERR=27 THEN PRINT "Your printer is off or empty. Program will continue when problem is fixed.":RESUME
1400 IF ERR=24 THEN PRINT "Waiting for printer.":RESUME
1410 IF ERR=25 THEN PRINT "Printer off line or something. Waiting!":RESUME
1420 ON ERROR GOTO 0
1430 OPEN FILESPEC$ FOR INPUT AS #1
1440 IF EOF(1) THEN CLOSE:PRINT:PRINT "File finished!":PRINT:KEY ON:END
1450 LINE INPUT #1, TEXT$
1460 FOR N=1 TO LEN(TEXT$):LTR$=MID$(TEXT$,N,1)
1470 ITL$=CHR$(ASC(LTR$) OR 128)
1480 LPRINT ITL$;
1490 NEXT N
1500 LPRINT
1510 GOTO 1440
1520 WIDTH 40:WIDTH "LPT1:",255:SCREEN 0,0,0:KEY OFF:CLS
1530 PRINT "This little program will print your      ASCII text files in italics on an"
1540 PRINT "EPSON MX-80 printer.  It was inspired   by the program MORSECOD on the"
1550 PRINT "CAPITOL PC VOL 2.32 disk from the       (PC)^3 library after discovering how"
1560 PRINT "the correct code was produced for both  upper and lower case characters.":PRINT
1570 PRINT "The conversion process {using           (CHR$(ASC$(x$) OR 32) or 128 in this    case} should be very useful for other   applications such as generating a       graphics keyboard.":PRINT
1580 PRINT "Enter the filespec of the file          to be typed (nnnnnnnn.eee).":PRINT
1590 INPUT "FILESPEC";FILESPEC$
1600 CLS:LOCATE 25,1:PRINT "FILESPEC is " FILESPEC$:LOCATE 1,1:
1610 ON ERROR GOTO 1780
1620 PRINT "You have the choice of several print    typefaces. They are:":PRINT
1630 PRINT "1: double width emphasized                 40 characters/line  40 lines/page":PRINT
1640 PRINT "2: double width compressed                 66 characters/line  50 lines/page":PRINT
1650 PRINT "3: normal emphasized                       80 characters/line  60 lines/page":PRINT
1660 PRINT "4: compressed                              132 characters/line  80 lines/page":PRINT
1670 PRINT "5: tiny (script)                           132 characters/line 120 lines/page":PRINT
1680 PRINT:PRINT "Please select your choice (1-5)         or press <Esc> to quit.";
1690 TYPEFACE$=INKEY$:IF TYPEFACE$=CHR$(27) THEN KEY ON:END ELSE IF TYPEFACE$="" THEN 1690 ELSE TYPEFACE=VAL(TYPEFACE$):IF TYPEFACE<1 OR TYPEFACE>5 OR INT(TYPEFACE)<>TYPEFACE THEN PRINT "Please press a number from 1 - 5 or press <Esc> to quit.":GOTO 1680
1700 PRINT TYPEFACE:PRINT
1710 LPRINT CHR$(27)"@"
1720 ON TYPEFACE GOTO 1730,1740,1750,1760,1770
1730 LPRINT CHR$(27)CHR$(69)CHR$(27)CHR$(87)CHR$(1)CHR$(27)CHR$(65)CHR$(18);:GOTO 1820'double width
1740 LPRINT CHR$(15)CHR$(27)CHR$(87)CHR$(1)CHR$(27)CHR$(65)CHR$(14);:GOTO 1820'double width compressed
1750 LPRINT CHR$(27)CHR$(69);:GOTO 1820'normal emphasized
1760 LPRINT CHR$(15)CHR$(27)CHR$(65)CHR$(9);:GOTO 1820' compressed
1770 LPRINT CHR$(15)CHR$(27)"S"CHR$(INT(RND*2))CHR$(27)"A"CHR$(6);:GOTO 1820'TINYPRNT
1780 IF ERR=27 THEN PRINT "Your printer is off or empty. Program will continue when problem is fixed.":RESUME
1790 IF ERR=24 THEN PRINT "Waiting for printer.":RESUME
1800 IF ERR=25 THEN PRINT "Printer off line or something. Waiting!":RESUME
1810 ON ERROR GOTO 0
1820 OPEN FILESPEC$ FOR INPUT AS #1
1830 IF EOF(1) THEN CLOSE:PRINT:PRINT "File finished!":PRINT:KEY ON:END
1840 LINE INPUT #1, TEXT$
1850 FOR N=1 TO LEN(TEXT$):LTR$=MID$(TEXT$,N,1)
1860 ITL$=CHR$(ASC(LTR$) OR 128)
1870 LPRINT ITL$;
1880 NEXT N
1890 LPRINT
1900 GOTO 1830
1910 ' SAVE"prtital2",a
```
{% endraw %}

## 7037-A.BAS

{% raw %}
```bas
10 KEY OFF:CLS
20 SCREEN 0
30 WIDTH 40
40 PRINT"░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░"
50 PRINT"░┌───────────────────────────────────┐░"
60 PRINT"░│                                   │░"
70 PRINT"░│            7037-A.BAS             │░"
80 PRINT"░│      EPSON PRINTER OPTIONS        │░"
90 PRINT"░│                                   │░"
100 PRINT"░│                                   │░"
110 PRINT"░│ BROUGHT TO YOU BY THE MEMBERS OF  │░"
120 PRINT"░│      ▄▄▄▄▄ ▄▄▄▄▄ ▄▄▄▄▄ ▄▄▄▄▄      │░"
130 PRINT"░│        █   █   █ █     █   █      │░"
140 PRINT"░│        █   █▄▄▄█ █     █   █      │░"
150 PRINT"░│        █   █     █     █   █      │░"
160 PRINT"░│      ▄▄█▄▄ █     █▄▄▄▄ █▄▄▄█      │░"
170 PRINT"░│                                   │░"
180 PRINT"░│      International PC Owners      │░"
190 PRINT"░│                                   │░"
200 PRINT"░│P.O. Box 10426, Pittsburgh PA 15234│░"
210 PRINT"░│                                   │░"
220 PRINT"░└───────────────────────────────────┘░"
230 PRINT"░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░"
240 PRINT
250 PRINT "       PRESS ANY KEY TO CONTINUE
260 A$=INKEY$: IF A$="" THEN 260
270 WIDTH 80
280 CLS
1000 CLS
1010 PRINT"IBM/EPSON PRINTER OPTION MENU"
1020 PRINT:PRINT"Choose from the following options:"
1030 PRINT
1040 PRINT"0)END PROGRAM
1050 PRINT"1)REGULAR CHARACTERS(default)
1060 PRINT"2)COMPRESSED CHARACTERS
1070 PRINT"3)REGULAR MODE(default)
1080 PRINT"4)EMPHASIZED MODE-REGULAR CHARACTERS ONLY"
1090 PRINT"5)DOUBLE-STRIKE MODE"
1100 PRINT"6)EMPHASIZED DOUBLE-STRIKE MODE"
1110 PRINT"7)NORMAL LINE SPACING (DEFAULT)"
1120 PRINT"8)COMPRESSED LINE SPACING"
1130 PRINT"9)SILENCE PAPER-OUT BUZZER"
1140 PRINT
1150 INPUT"WHICH OPTION DO YOU WISH?";ANS
1160 IF ANS<0 OR ANS>9 THEN BEEP:GOTO 1150
1170 IF ANS=0 THEN 1310
1180 ON ANS GOSUB 1220,1230,1240,1250,1260,1270,1280,1290,1300
1190 PRINT"DONE..."
1200 FOR DELAY=1 TO 1000:NEXT
1210 GOTO 1000
1220 LPRINT CHR$(18);:RETURN
1230 LPRINT CHR$(15);:RETURN
1240 LPRINT CHR$(27);"F";CHR$(27);"H";:RETURN
1250 LPRINT CHR$(27);"E";:RETURN
1260 LPRINT CHR$(27);"G";:RETURN
1270 LPRINT CHR$(27);"E";CHR$(27);"G";:RETURN
1280 LPRINT CHR$(27);"2";:RETURN
1290 LPRINT CHR$(27);"0";:RETURN
1300 LPRINT CHR$(27);"8";:RETURN
1310 END
```
{% endraw %}

## 7042-A.BAS

{% raw %}
```bas
10 KEY OFF:CLS
20 SCREEN 0
30 WIDTH 40
40 PRINT"░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░"
50 PRINT"░┌───────────────────────────────────┐░"
60 PRINT"░│                                   │░"
70 PRINT"░│            7042-A.BAS             │░"
80 PRINT"░│          OKIDATA LISTER           │░"
90 PRINT"░│                                   │░"
100 PRINT"░│                                   │░"
110 PRINT"░│ BROUGHT TO YOU BY THE MEMBERS OF  │░"
120 PRINT"░│      ▄▄▄▄▄ ▄▄▄▄▄ ▄▄▄▄▄ ▄▄▄▄▄      │░"
130 PRINT"░│        █   █   █ █     █   █      │░"
140 PRINT"░│        █   █▄▄▄█ █     █   █      │░"
150 PRINT"░│        █   █     █     █   █      │░"
160 PRINT"░│      ▄▄█▄▄ █     █▄▄▄▄ █▄▄▄█      │░"
170 PRINT"░│                                   │░"
180 PRINT"░│      International PC Owners      │░"
190 PRINT"░│                                   │░"
200 PRINT"░│P.O. Box 10426, Pittsburgh PA 15234│░"
210 PRINT"░│                                   │░"
220 PRINT"░└───────────────────────────────────┘░"
230 PRINT"░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░"
240 PRINT
250 PRINT "       PRESS ANY KEY TO CONTINUE
260 A$=INKEY$: IF A$="" THEN 260
270 WIDTH 80
280 CLS
1000 '==> SAVE "OKILISTR"
1001 '
1002 '===> Basic Program Listing Utility set up for OKIDATA 92A/93A
1003 '
1004 '     Note that Program is set up for an 80 column printer
1005 '     but may be changed to a 132 column printer by revising lines...
1006 '     1050-1060...1600-1610...2300-2321
1007 '
1008 '     This program "grew" from an idea found in the May, 1982 Creative
1009 '      Computing in Will Fastie's IBM Column on Page 194.
1010 '     The print routine was "borrowed" from IPCO Program #7001
1011 '
1012 '     Questions ???  Drop me a line with SASE.
1013 '
1014 '     Ray Fallen
1015 '     3130 Hummingbird Hill Drive
1016 '     Poland, Ohio 44514
1017 '     (216) 757-0638
1018 '
1019 ON ERROR GOTO 3560
1020 KEY OFF
1030 '======> default printer width ... un-remark line 1050 for wide carriage printer
1040  PWIDTH=80
1050 'PWIDTH=132
1060 '======> default program file diskette drive
1070 'DDRIVE$="a:"
1080 DDRIVE$="b:"
1090 '
1100 '
1110 '
1120 ESC$=CHR$(27)
1130 CLRLPT$=CHR$(24)    '<=== clears print buffer
1140 '==> check for printer power on
1150 ON ERROR GOTO 1180
1160 LPRINT CHR$(24);
1170 GOTO 1220
1180 CLS:GOSUB 3810:GOSUB 3570
1190 COLOR 31:PRINT "====> ";:COLOR 15:PRINT "Please Turn on the Printer and Align Paper at Perforation ";:COLOR 30:PRINT " <====":COLOR 7
1200 X$=INKEY$:IF X$="" THEN 1200
1210 RESUME
1220 '======> Menu
1230 KEY OFF:CLS
1240 ON ERROR GOTO 0
1250 GOSUB 3570
1260 PRINT "Available Functions:  P - print a ASCII program file"
1270 PRINT TAB(23);"A - directory of diskette in drive A"
1280 PRINT TAB(23);"B - directory of diskette in drive B"
1290 PRINT TAB(23);"M - modify printer attributes"
1300 PRINT TAB(23);"D - display current printer attributes"
1310 PRINT TAB(23);"R - reset printer to default attribute"
1320 PRINT TAB(23);"T - advance forms to top of page"
1330 PRINT TAB(23);"Q - exit program and return to PC/DOS"
1340 PRINT TAB(23);"X - exit program and return to BASIC"
1350 PRINT:PRINT "Press Letter for Option Desired ===>"
1360 X$=INKEY$:IF X$="" THEN 1360
1370 GOSUB 3370
1380 X=INSTR("PABMDRTQX",X$):IF X=0 THEN GOSUB 3810:GOTO 1220
1390 ON X GOSUB 1410,3630,3720,2860,3840,3220,3270,3300,3330
1400 GOTO 1220
1410 '=====> Print paginated listing of program file
1420 '
1430 GOSUB 3570
1440 PRINT "File ";:COLOR 15:PRINT "MUST";:COLOR 7:PRINT" be an";:COLOR 15:PRINT " ASCII ";:COLOR 7:PRINT"text file.  The file name and extension must be entered."
1450 PRINT
1460 INPUT "Enter file name to print OR press enter to go to menu ===> ",X$
1470 NOW$=MID$(TIME$,1,5)
1480 IF LEN(X$)>18 GOTO 1410
1490 IF LEN(X$)=0 THEN RETURN
1500 GOSUB 1650
1510 CLS
1520 GOSUB 3570
1530 PRINT "To single space list, press Enter.  Or press ";:COLOR 31:PRINT "===>";:COLOR 15:PRINT " Y ";:COLOR 31:PRINT "<===";:COLOR 7:PRINT " for double spaced list."
1540 SPAC$=INKEY$:IF SPAC$="" THEN 1540
1550 GOSUB 3570
1560 PRINT "For regular printing, press Enter.  Or press ";:COLOR 31:PRINT "===> ";:COLOR 15:PRINT "Y";:COLOR 31:PRINT " <===";:COLOR 7:PRINT " for compressed printing"
1570 COMP$=INKEY$:IF COMP$="" THEN 1570
1580 IF COMP$ = "Y" GOTO 1590
1582 IF COMP$ = "y" GOTO 1590
1585 GOTO 1620
1590 LPRINT CHR$(28);   '<=== set compress print on
1595 '===> un-remark line 1610 for wide carriage printer
1600  PWIDTH=132
1610 'PWIDTH=216
1620 CLS
1630 GOSUB 3370
1640 GOTO 1730
1650 'file drive selection
1660 GOSUB 3570
1670 PRINT "Which diskette drive (a or b) has Program to Be Listed?  Default ";:COLOR 31:PRINT "===> ";:COLOR 15:PRINT DDRIVE$;:COLOR 31:PRINT " <===":COLOR 7
1680 DRIVE$=DDRIVE$
1690 DR$=INKEY$:IF DR$="" THEN 1690
1700 IF DR$ <> "a" AND  DR$ <> "b" THEN GOSUB 3810:GOTO 1650
1710 MID$(DRIVE$,1,1)=MID$(DR$,1,1)
1720 RETURN
1730 '===> file open routine and no file trap
1740 WIDTH "lpt1:",PWIDTH
1750 ON ERROR GOTO 1800
1760 Y$=DRIVE$+X$
1770 '======> file open
1780 OPEN Y$ FOR INPUT AS 1
1790 GOTO 2060
1800 IF ERR=53 OR ERR=52 GOTO 1840
1810 IF ERR=64 GOTO 1840
1820 IF ERR=71 GOTO 1840
1830 ON ERROR GOTO 0
1840 GOSUB 3810
1850 GOSUB 3570
1860 IF ERR=71 GOTO 2000
1870 PRINT "File ";X$;" is not on diskette in Drive ";DRIVE$
1880 PRINT:PRINT "Enter 1 to select another file":PRINT:PRINT "OR load the right diskette in drive ";DRIVE$;" and enter / to retry file ";X$
1890 PRINT:PRINT:COLOR 0,7:PRINT "===> Directory of Disk in Drive ";DRIVE$;" <===":COLOR 7:PRINT
1900 IF DRIVE$="b:" GOTO 1930
1910 FILES
1920 GOTO 1940
1930 FILES "B:*.*"
1940 AR$=INKEY$:IF AR$="" THEN 1940
1950 IF AR$ = "/" THEN 1980
1960 IF AR$ = "1" THEN RESUME 1420
1970 GOTO 1850
1980 CLS
1990 RESUME 1750
2000 PRINT "Diskette Drive ";:COLOR 31:PRINT "===> ";:COLOR 15:PRINT DRIVE$;:COLOR 31:PRINT " <===";:COLOR 7:PRINT " not ready !!  CLOSE THE DOOR and press Enter."
2010 AR$=INKEY$:IF AR$="" THEN 2010
2020 CLS
2030 RESUME 1750
2040 '===>start print routine...cancel on esc
2050 COUNTER=0
2060 ON ERROR GOTO 0
2070 CLS:FOR X=1 TO 2:PRINT:NEXT X:GOSUB 3570:PRINT
2080 PRINT "Program file ";X$;" is now printing.  Press Esc Key to cancel printing."
2090 PRINT:PRINT:PRINT "If output is garbled...Program File is NOT in ASCII format !!!"
2100 PRINT:PRINT "1. Cancel PC/LISTER by Pressing Control (Ctrl) and Break Keys Simultaneously."
2110 PRINT "2. Type in NEW...then press Enter.  This will clear memory"
2120 PRINT "3. Load the Program you were trying to List.
2130 A$="4. Save the program in ASCII format...Example:  SAVE "+CHR$(34)+X$+CHR$(34)+",A"
2140 PRINT A$
2150 PRINT "5. Then restart PC/LISTER and list program.":PRINT
2160 PRINT:PRINT "Program will beep and return to Menu when Printing is Complete."
2170 PAGENR=0
2180 LINENR=1
2190 IF EOF (1) THEN 2560
2200 LINE INPUT #1,L$
2210 COUNTER = COUNTER + 1
2220 IF LINENR=1 THEN GOSUB 2700
2230 '
2240 '===> print routine snitched from IPCO Program Lister #7001
2250 '
2260 '     Author - Colin Jamison ... 5114 Lenore Street ... Torrance, CA
2270 '
2280 '     Imitation is the sincerest form of flattery !!!
2290 '
2295 '===> for wide carriage printer...un-remark 2301,2311,2321
2296 '     then remark 2300,2310,2320
2297 '
2300  IF LEN (L$) > 74 THEN L1$=RIGHT$(L$,LEN(L$)-74) : L$=LEFT$(L$,74)
2301 'IF LEN (L$) > 121 THEN L1$=RIGHT$(L$,LEN(L$)-121) : L$=LEFT$(L$,121)
2310  IF LEN(L1$) > 69 THEN L2$=RIGHT$(L1$,LEN(L1$)-69) : L1$=LEFT$(L1$,69)
2311 'IF LEN(L1$) > 121 THEN L2$=RIGHT$(L1$,LEN(L1$)-121) : L1$=LEFT$(L1$,121)
2320  IF LEN(L2$) > 69 THEN L3$=RIGHT$(L2$,LEN(L2$)-69) : L2$=LEFT$(L2$,69)
2321 'IF LEN(L2$) > 121 THEN L3$=RIGHT$(L2$,LEN(L2$)-121) : L2$=LEFT$(L2$,121)
2330 LPRINT L$:LINENR=LINENR+1
2340 IF L1$ <> "" THEN LPRINT SPACE$(5)+L1$:LINENR=LINENR+1:L1$=""
2350 IF L2$ <> "" THEN LPRINT SPACE$(5)+L2$:LINENR=LINENR+1:L2$=""
2360 IF L3$ <> "" THEN LPRINT SPACE$(5)+L3$:LINENR=LINENR+1:L3$=""
2370 IF ERR=24 THEN RESUME:ELSE ON ERROR GOTO 0
2380 IF SPAC$ ="Y" OR SPAC$ = "y" THEN 2400
2390 GOTO 2420
2400 LPRINT
2410 LINENR=LINENR+1
2420 '
2430 IF INKEY$=ESC$ THEN 2560
2440 IF COMP$="Y" OR COMP$="y" THEN 2530
2450 'if comp$="Y" or comp$="y" then 1150
2460 'handle LEN(L$) greater than one line width...
2470 'if len(L$) > 80 then linenr=linenr+1
2480 'if len(L$) > 160 then linenr=linenr+1
2490 'if len(L$) > 240 then linenr=linenr+1
2500 'GOTO 1420
2510  IF LEN(L$) > 132 THEN LINENR=LINENR+1
2520  GOTO 2540
2530  IF LEN(L$) > 216 THEN LINENR=LINENR+1
2540 IF LINENR > 53 THEN LINENR=1
2550 GOTO 2190
2560 '===> end of job processing...
2570 CLOSE
2580 LPRINT:LPRINT:LPRINT "*** End of ";Y$;" Listing ... Program Contains ";COUNTER;" Statements ***":LPRINT
2590 LINENR=LINENR+5
2600 FOR X=1 TO 54-LINENR:LPRINT:NEXT
2610 'LPRINT CHR$(14);:LPRINT ESC$;"E";:LPRINT TAB(18) "--";PAGENR;"--";:LPRINT CHR$(20);:LPRINT ESC$;"F";
2611 LPRINT CHR$(31);:LPRINT TAB(18) "--";PAGENR;"--";:LPRINT CHR$(24);
2620 LPRINT CHR$(12)
2630 IF COMP$ =  "" THEN 2670
2640 PWIDTH=132
2650 'PWIDTH=80
2660 LPRINT CHR$(30)
2670 '
2680 FOR X=1 TO 5:SOUND 200,2:SOUND 600,2:SOUND 800,2:NEXT X
2690 RETURN
2700 REM *** Subroutine to print page heading
2710 LP=43+INT(LEN(X$) * 1.65)
2720 IF PAGENR = 0 THEN 2770
2730 IF COMP$="" GOTO 2750
2740 LPRINT:LPRINT
2750 'LPRINT CHR$(14);:LPRINT ESC$;"E";:LPRINT TAB(18) "--";PAGENR;"--";:LPRINT CHR$(20);:LPRINT ESC$;"F";
2751 LPRINT CHR$(31);:LPRINT TAB(18) "--";PAGENR;"--";:LPRINT CHR$(24);
2760 LPRINT CHR$(12)
2770 PAGENR=PAGENR+1
2780 LPRINT STRING$(LP,61)
2790 'LPRINT CHR$(14);X$;CHR$(20);
2791 LPRINT CHR$(31);X$;CHR$(28);
2800 'LPRINT " --> printed on ";DATE$;" at ";NOW$; " <-- Page ";PAGENR
2810  LPRINT " --- printed on ";DATE$;" at ";NOW$; " ---"
2820 LP=43+INT(LEN(X$) * 1.65)
2830 LPRINT STRING$(LP,61)
2840 LPRINT:LPRINT
2850 RETURN
2860 REM ***** setup printer
2870 CLS:PRINT:PRINT "Printer enhancements are:"
2880 PRINT
2890 REM
2900 GOSUB 3570
2910 PRINT "   DW - Double Width .....  5 CPI"
2920 PRINT "   C  - Compressed Print . 17 CPI"
2930 PRINT "   E  - Emphasized Print"
2940 PRINT "   DS - Double Strike"
2950 PRINT
2960 PRINT "=====>  Enter enhancements separated by spaces."
2970 PRINT
2980 PRINT "=====>  Examples:"
2990  PRINT
3000 PRINT " C E  - Illegal"
3010 PRINT "      - 10 CPI, normal printing"
3020 PRINT "   E  - 10 CPI, bold printing"
3030 PRINT "DS E  - 17 CPI, double strike"
3040 PRINT
3050 INPUT "======> Enter enhancements:  ",O$
3060 X$=O$:GOSUB 3370:O$=X$
3070 LPRINT CLRLPR$;
3080 IF INSTR(O$,"DW") THEN LPRINT CHR$(31);
3090 IF INSTR(O$,"C") THEN LPRINT CHR$(28);
3100 IF INSTR(O$,"E")THEN LPRINT ESC$;CHR$(84);
3110 IF INSTR(O$,"DS") THEN LPRINT ESC$;CHR$(72);
3120 PRINT
3130 PLOC=CSRLIN
3140 GOSUB 3430
3150 'INPUT "======> Enter desired line width (1-80) or press enter to keep the same ",IWIDTH
3160 INPUT "======> Enter desired line width (1-132) or press enter to keep the same ",IWIDTH
3170 IF IWIDTH=0 GOTO 3210
3180 'if iwidth < 1 or iwidth > 132 then 1780
3190 IF IWIDTH < 1 OR IWIDTH > 255 THEN 3130
3200 PWIDTH=IWIDTH
3210 RETURN
3220 REM *** reset printer to defaults
3230 LPRINT CLRLPT$;
3240 'PWIDTH=80
3250 PWIDTH=132
3260 RETURN
3270 REM *** form feed to printer
3280 LPRINT CHR$(12)
3290 RETURN
3300 REM *** return to DOS
3310 CLS
3320 SYSTEM
3330 REM *** exit to BASIC
3340 CLS
3350 KEY ON
3360 NEW
3370 REM *** SUBROUTINE TO UPPERFY A STRING IN (X$)
3380 FOR X=1 TO LEN(X$)
3390  XC$=MID$(X$,X,1)
3400 IF "a" <= XC$ AND XC$<="z" THEN MID$(X$,X,1)=CHR$(ASC(XC$)-32)
3410 NEXT X
3420 RETURN
3430 '===> Subroutine to position at specified line and clear it
3440 LOCATE PLOC,1
3450 PRINT STRING$(80," ");
3460 LOCATE PLOC,1
3470 RETURN
3480 '===> Subroutine to wait for any keystroke...inkey$ function
3490 PRINT "Depress any key to continue...";
3500 GOSUB 3520
3510 RETURN
3520 '===> Subroutine to get a key stroke into x$
3530 X$=INKEY$
3540 IF X$="" THEN 3530
3550 RETURN
3560 IF ERR=24 THEN RESUME
3570 '===> heading subroutine
3580 CLS:FOR X=1 TO 5:PRINT:NEXT X
3590 COLOR 0,7
3600 PRINT " PC/LISTER == Program Listing Utility ":COLOR 7
3610 FOR X=1 TO 2:PRINT:NEXT X
3620 RETURN
3630 '===> print directory a:
3640 ON ERROR GOTO 3700
3650 GOSUB 3570
3660 COLOR 0,7:PRINT "===> Directory of Disk in Drive a: <===":COLOR 7:PRINT
3670 FILES
3680 PRINT:PRINT:PRINT "Press Enter to return to Main Menu"
3690 AR$=INKEY$:IF AR$=""THEN 3690
3700 IF ERR=71 THEN GOSUB 3810:PRINT"Close Diskette Drive ";:COLOR 31:PRINT "=== > a: <===";:COLOR 7:PRINT " door !!!":FOR X=1 TO 1500:NEXT X:RESUME 3650
3710 RETURN
3720 '===> print directory b:
3730 ON ERROR GOTO 3790
3740 GOSUB 3570
3750 COLOR 0,7:PRINT "===> Directory of Disk in Drive b: <===":COLOR 7:PRINT
3760 FILES "B:*.*"
3770 PRINT:PRINT:PRINT "Press Enter to return to Main Menu"
3780 AR$=INKEY$:IF AR$=""THEN 3690
3790 IF ERR=71 THEN GOSUB 3810:PRINT"Close Diskette Drive ";:COLOR 31:PRINT "=== > b: <===";:COLOR 7:PRINT " door !!!":FOR X=1 TO 3500:NEXT X:RESUME 3740
3800 RETURN
3810 '===> BEEPER SUBROUTINE
3820 FOR X=1 TO 5:SOUND 500,1:SOUND 2000,1:NEXT X
3830 RETURN
3840 '===> display printer attributes
3850 GOSUB 3570
3860 IF O$="" THEN ENHANCE$="None (default)":GOTO 3880
3870 ENHANCE$=O$
3880 PRINT "Current Printer Enhancements are: ";ENHANCE$;"
3890 PRINT
3900 PRINT "Where:  DW = Double Width"
3910 PRINT "   C  - Compressed Print . 17 CPI"
3920 PRINT "        E  = Emphasized Print"
3930 PRINT "        DS = Double Strike"
3940 PRINT
3950 PRINT
3960 PRINT "Current width for the printer is: ";PWIDTH;" characters."
3970 PRINT:PRINT
3980 PRINT "Press Enter to return to the Main Menu"
3990 AR$=INKEY$:IF AR$="" THEN 3990
4000 RETURN
```
{% endraw %}

## CRC.TXT

{% raw %}
```
PC-SIG Disk No. #239, version V1 
 
The following is a list of the file checksums which should be produced by
the CRCK4 program on this disk.  If the CRC numbers do not match the following
list you may have a bad file.  To use type:  CRCK4 <filespec>
 
CRCK4 output for this disk:
 

CRCK ver 4.2B (MS DOS VERSION )
CTL-S pauses, CTL-C aborts

--> FILE:  1004-B  .BAS         CRC = D9 E1

--> FILE:  1005-A  .BAS         CRC = 28 59

--> FILE:  1009-A  .BAS         CRC = F9 3B

--> FILE:  3002-A  .BAS         CRC = BD 64

--> FILE:  3003-A  .BAS         CRC = CA 2B

--> FILE:  3006-A  .BAS         CRC = A5 D4

--> FILE:  3012-A  .BAS         CRC = 97 35

--> FILE:  3014-A  .BAS         CRC = 0D 11

--> FILE:  CURVE   .BAS         CRC = B8 41

--> FILE:  CURVE   .ABS         CRC = 1C 04

--> FILE:  CURVE   .NFO         CRC = CD 80

--> FILE:  4028-A  .BAS         CRC = 5C BF

--> FILE:  5006-A  .BAS         CRC = 1A A3

--> FILE:  7013-A  .BAS         CRC = F9 58

--> FILE:  LOGMENU .LOG         CRC = 97 EB

--> FILE:  LOGON   .LOG         CRC = 33 76

--> FILE:  LOGREV  .LOG         CRC = 92 64

--> FILE:  LOGOFF  .LOG         CRC = 2D F2

--> FILE:  7037-A  .BAS         CRC = EE 2F

--> FILE:  7042-A  .BAS         CRC = 3C 52

 ---------------------> SUM OF CRCS = 95 D5

DONE 
 
These and other Public Domain and user-supported programs from:
 
PC Software Interest Group (PC-SIG)
1125 Stewart Ct  Suite G
Sunnyvale, CA 94086
(408) 730-9291
```
{% endraw %}

## CURVE.BAS

{% raw %}
```bas
1 'LEAST MEAN SQUARES CURVE FITTING by Don McDade
10 KEY 1,"LIST"+CHR$(13)
20 KEY 2,"DONE"+CHR$(13)
30 KEY 3,"RESET"
40 KEY 4,"DEL"+CHR$(13)
50 KEY 5,"PLOT"+CHR$(13)
60 KEY 6,"LIN"+CHR$(13)
70 KEY 7,"EXP"+CHR$(13)
80 KEY 8,"POW"+CHR$(13)
90 KEY 9,"LOG"+CHR$(13)
100 KEY 10,"PRINT"+CHR$(13)
105 DEFINT I,J,K,M,N
135 SCREEN 0:WIDTH 80:CLS
140 PRINT"LEAST MEAN SQUARES CURVE FITTING":PRINT "by Don McDade":PRINT
145 PRINT "Note that BASIC must be started with /D in DOS 2.0 for double precision."
147 INPUT "Enter DBL for double precision or SNG for single precision: ",A$
148 IF INSTR(A$,"sng") OR INSTR(A$,"SNG") THEN 150 ELSE DEFDBL A-H,L,O-Z:PRINT"Double precision"
150 INPUT "Maximum number of data points and trend line points (Defaults to 25)";MAXDP
160 IF MAXDP<2 THEN MAXDP=25
170 DIM X(MAXDP),Y(MAXDP)
175 PRINT SPACE$(39):LINE INPUT "Title: ";TITLE$
177 N=0
180 PRINT"Enter all new data points X,Y"
185 KEY ON
190 PRINT SPC(39);:LOCATE CSRLIN,1:LINE INPUT;"? ";A$:LOCATE CSRLIN,1
192 IF INSTR(A$,"PUT") OR INSTR(A$,"put") THEN GOSUB 6300
193 IF INSTR(A$,"GET") OR INSTR(A$,"get") THEN 6400
195 IF INSTR(A$,"dbl") OR INSTR(A$,"DBL") THEN ERASE X,Y:DEFDBL A-H,L,O-Z:PRINT "Double precision":GOTO 150
197 IF INSTR(A$,"sng") OR INSTR(A$,"SNG") THEN ERASE X,Y:DEFSNG A-H,L,O-Z:PRINT "Single precision":GOTO 150
200 IF INSTR(A$,"list") OR INSTR(A$,"LIST") THEN 1000 ELSE 1020
1000 IF N<1 THEN 190 ELSE PRINT SPACE$(39):FOR I=1 TO N:PRINT"X("I")="X(I),"Y("I")="Y(I):NEXT
1010 GOTO 190
1020 IF N>1 AND (INSTR(A$,"done") OR INSTR(A$,"DONE")) THEN 3000
1025 IF INSTR(A$,"dim") OR INSTR(A$,"DIM") THEN ERASE X,Y:GOTO 150
1030 IF INSTR(A$,"reset") OR INSTR(A$,"RESET") THEN 175
1035 I=INSTR(A$,"del"):J=INSTR(A$,"DEL"):K=INSTR(A$,"delete"):M=INSTR(A$,"DELETE")
1040 IF I OR J OR K OR M THEN 2000
1780 M=INSTR(A$,",")
1790 IF M AND N>=MAXDP THEN PRINT "Maximum data points":GOTO 190
1800 IF M THEN N=N+1 ELSE 190
1810 X(N)=VAL(LEFT$(A$,M-1)):Y(N)=VAL(RIGHT$(A$,LEN(A$)-M))
1820 PRINT"X("N")="X(N),"Y("N")="Y(N)
1830 GOTO 190
2000 IF I OR J THEN D$=RIGHT$(A$,LEN(A$)-I-J-2):IF K OR M THEN D$=RIGHT$(A$,LEN(A$)-K-M-5)
2010 M=INSTR(D$,",")
2020 IF M=0 THEN 2050
2030 DX=VAL(LEFT$(D$,M-1)):DY=VAL(RIGHT$(D$,LEN(D$)-M))
2035 I=1
2040 IF X(I)=DX AND Y(I)=DY AND I<=N THEN 2070
2045 I=I+1:IF I<=N THEN 2040 ELSE PRINT"Data not found":GOTO 190
2050 I=VAL(D$):IF I<1 OR I>N THEN LINE INPUT "Enter data point to be deleted as subscript or as X,Y: ",D$
2060 M=INSTR(D$,",")
2065 IF M THEN 2030 ELSE I=VAL(D$):IF I>N THEN PRINT I"> N":GOTO 190 ELSE IF I<1 THEN 190
2070 N=N-1:FOR J=I TO N:SWAP X(J),X(J+1):SWAP Y(J),Y(J+1):NEXT
2075 PRINT X(N+1)","Y(N+1)"deleted":GOTO 190
3000 REM Calculate curves
3010 SX=0:SY=0:SXY=0:SXSQ=0:SYSQ=0:SXJ=0:SYJ=0:SXYJ=0:SXJSQ=0:SYJSQ=0:SXK=0:SYK=0:SXYK=0:SXKSQ=0:SYKSQ=0:SXM=0:SYM=0:SXYM=0:SXMSQ=0:SYMSQ=0:J=0:K=0:M=0
3015 ON ERROR GOTO 4000
3020 FOR I=1 TO N
3030 SX=SX+X(I):SY=SY+Y(I):SXY=SXY+X(I)*Y(I):SXSQ=SXSQ+X(I)*X(I):SYSQ=SYSQ+Y(I)*Y(I)   'linear
3040 IF Y(I)>0 THEN J=J+1:LY=LOG(Y(I)):SXJ=SXJ+X(I):SYJ=SYJ+LY:SXYJ=SXYJ+X(I)*LY:SXJSQ=SXJSQ+X(I)*X(I):SYJSQ=SYJSQ+LY*LY   'exponential
3050 IF X(I)>0 THEN K=K+1:LX=LOG(X(I)):SXK=SXK+LX:SYK=SYK+Y(I):SXYK=SXYK+LX*Y(I):SXKSQ=SXKSQ+LX*LX:SYKSQ=SYKSQ+Y(I)*Y(I)   'logarithmic
3060 IF X(I)>0 AND Y(I)>0 THEN M=M+1:SXM=SXM+LX:SYM=SYM+LY:SXYM=SXYM+LX*LY:SXMSQ=SXMSQ+LX*LX:SYMSQ=SYMSQ+LY*LY   'power
3170 NEXT
3180 ALIN=(SY*SXSQ-SX*SXY)/(N*SXSQ-SX*SX)
3190 BLIN=(N*SXY-SX*SY)/(N*SXSQ-SX*SX)
3200 RLIN=(N*SXY-SX*SY)/SQR((N*SXSQ-SX*SX)*(N*SYSQ-SY*SY))
3210 PRINT SPACE$(39):IF BLIN >=0 THEN PRINT "y="ALIN"+"BLIN"x"; ELSE PRINT "y="ALIN BLIN"x";
3215 LOCATE CSRLIN,56:PRINT "R="RLIN
3218 IF J<2 THEN AEXP=0:BEXP=0:REXP=0:GOTO 3265
3220 AEXP=EXP((SYJ*SXJSQ-SXJ*SXYJ)/(J*SXJSQ-SXJ*SXJ))
3230 BEXP=(J*SXYJ-SXJ*SYJ)/(J*SXJSQ-SXJ*SXJ)
3240 REXP=(J*SXYJ-SXJ*SYJ)/SQR((J*SXJSQ-SXJ*SXJ)*(J*SYJSQ-SYJ*SYJ))
3260 PRINT "y="AEXP"e^("BEXP"x)";:LOCATE CSRLIN,56:PRINT "R="REXP
3265 IF M<2 THEN APOW=0:BPOW=0:RPOW=0:GOTO 3305
3270 APOW=EXP((SYM*SXMSQ-SXM*SXYM)/(M*SXMSQ-SXM*SXM))
3280 BPOW=(M*SXYM-SXM*SYM)/(M*SXMSQ-SXM*SXM)
3290 RPOW=(M*SXYM-SXM*SYM)/SQR((M*SXMSQ-SXM*SXM)*(M*SYMSQ-SYM*SYM))
3300 PRINT "y="APOW"x^("BPOW")";:LOCATE CSRLIN,56:PRINT "R="RPOW
3305 IF K<2 THEN ALOG=0:BLOG=0:RLOG=0:GOTO 3345
3310 ALOG=(SYK*SXKSQ-SXK*SXYK)/(K*SXKSQ-SXK*SXK)
3320 BLOG=(K*SXYK-SXK*SYK)/(K*SXKSQ-SXK*SXK)
3330 RLOG=(K*SXYK-SXK*SYK)/SQR((K*SXKSQ-SXK*SXK)*(K*SYKSQ-SYK*SYK))
3335 IF BLOG>=0 THEN PRINT "y="ALOG"+"BLOG"ln x"; ELSE PRINT "y="ALOG BLOG"ln x";
3340 LOCATE CSRLIN,56:PRINT "R="RLOG
3345 PRINT
3347 JJ=N
3350 ON ERROR GOTO 0
3354 PRINT SPC(39);:ROW%=CSRLIN:LOCATE ROW%,1:LINE INPUT;"? ";A$:LOCATE ROW%,1
3356 ON ERROR GOTO 4000
3358 IF INSTR(A$,"put") OR INSTR(A$,"PUT") THEN GOSUB 6300:GOTO 3350
3360 IF INSTR(A$,"list") OR INSTR(A$,"LIST") THEN GOSUB 3900:GOTO 3800
3361 IF INSTR(A$,"lin") OR INSTR(A$,"LIN") THEN GOSUB 5290:GOSUB 5710:GOSUB 5905:GOTO 6277
3362 IF INSTR(A$,"exp") OR INSTR(A$,"EXP") THEN GOSUB 5290:GOSUB 5760:GOSUB 5905:GOTO 6277
3363 IF INSTR(A$,"pow") OR INSTR(A$,"POW") THEN GOSUB 5290:GOSUB 5810:GOSUB 5905:GOTO 6277
3364 IF INSTR(A$,"log") OR INSTR(A$,"LOG") THEN GOSUB 5290:GOSUB 5860:GOSUB 5905:GOTO 6277
3365 IF INSTR(A$,",") OR A$="" GOTO 195
3367 IF INSTR(A$,"print") OR INSTR(A$,"PRINT") GOTO 5000
3368 IF INSTR(A$,"PLOT") OR INSTR(A$,"plot") GOTO 6000
3369 X(0)=VAL(A$)
3370 IF A$="0" THEN 3380 ELSE IF X(0)>=0 AND X(0)<1.00000000000000e-16# THEN 3450
3380 IF JJ<MAXDP THEN JJ=JJ+1:X(JJ)=X(0) ELSE PRINT "Maximum trend line points":GOTO 3350
3385 LOCATE ROW%-1,1:PRINT X(JJ) TAB(24) CSNG(ALIN+BLIN*X(JJ));
3390 PRINT TAB(38) CSNG(AEXP*EXP(BEXP*X(JJ))) TAB(52);
3400 PRINT CSNG(APOW*X(JJ)^BPOW) TAB(66);
3410 PRINT CSNG(ALOG+BLOG*LOG(X(JJ)))
3415 GOSUB 3920
3420 GOTO 3350
3450 ON ERROR GOTO 0
3790 GOTO 195
3800 LOCATE ROW%-1,1:PRINT SPACE$(39):GOSUB 3920
3810 FOR I=1 TO JJ
3820 PRINT X(I);: IF I<=N THEN PRINT TAB(12) Y(I);
3830 PRINT TAB(24) CSNG(ALIN+BLIN*X(I));
3840 PRINT TAB(38) CSNG(AEXP*EXP(BEXP*X(I))) TAB(52);
3850 PRINT CSNG(APOW*X(I)^BPOW) TAB(66);
3870 PRINT CSNG(ALOG+BLOG*LOG(X(I)))
3880 NEXT
3885 GOSUB 3920:KEY ON
3890 GOTO 3350
3900 KEY OFF
3910 LOCATE 25,1
3920 PRINT "  X(I)" TAB(14) "Y(I)" TAB(26) "a+bX";
3930 PRINT TAB(40) "ae^(bX)" TAB(54) "aX^b" TAB(67) "a+b ln X"
3940 RETURN
4000 IF ERL=3215 OR ERL=3260 OR ERL=3300 OR ERL=3340 THEN PRINT ,:RESUME NEXT:ELSE IF ERL=3930 THEN RESUME NEXT ELSE PRINT "Error code"ERR:RESUME NEXT
4010 RESUME 6290
4020 LPRINT "Error code"ERR:RESUME NEXT
5000 LPRINT TITLE$:LPRINT
5005 ON ERROR GOTO 4020
5010 IF BLIN>=0 THEN LPRINT "y="ALIN"+"BLIN"x"; ELSE LPRINT "y="ALIN BLIN"x";
5020 LPRINT TAB(56) "R="RLIN
5030 LPRINT "y="AEXP"e^("BEXP"x)"TAB(56)"R="REXP
5040 LPRINT "y="APOW"x^("BPOW")"TAB(56)"R="RPOW
5050 IF BLOG>=0 THEN LPRINT "y="ALOG"+"BLOG"ln x"; ELSE LPRINT "y="ALOG BLOG"ln x";
5060 LPRINT TAB(56) "R="RLOG:LPRINT
5070 LPRINT "  X(I)"TAB(14)"Y(I)"TAB(26)"a+bX"TAB(40)"ae^(bX)"TAB(54)"aX^b"TAB(67)"a+b ln X"
5080 FOR I=1 TO JJ
5090 LPRINT X(I);
5094 IF I<=N THEN LPRINT TAB(12) Y(I);
5096 LPRINT TAB(24) CSNG(ALIN+BLIN*X(I)) TAB(38) CSNG(AEXP*EXP(BEXP*X(I))) TAB(52) CSNG(APOW*X(I)^BPOW) TAB(66) CSNG(ALOG+BLOG*LOG(X(I)))
5100 NEXT:LPRINT:LPRINT
5200 GOTO 3350
5290 HPTS=639:J=1:K=1:PRINT SPACE$(39)
5300 INPUT "Specify plot limits (Y)"; B$
5305 ON ERROR GOTO 4010
5310 IF B$="y" OR B$="Y" THEN 5350 ELSE 5400
5350 INPUT "Enter XMAX: ",XMAX
5360 INPUT "Enter XMIN: ",XMIN
5370 INPUT "Enter YMAX: ",YMAX
5380 INPUT "Enter YMIN: ",YMIN
5390 GOTO 5600
5400 XMAX=X(1):XMIN=X(1):YMAX=Y(1):YMIN=Y(1)
5410 FOR I=2 TO N
5420 IF X(I)>XMAX THEN XMAX=X(I)
5430 IF X(I)<XMIN THEN XMIN=X(I)
5440 IF Y(I)>YMAX THEN YMAX=Y(I)
5450 IF Y(I)<YMIN THEN YMIN=Y(I)
5460 NEXT
5470 XMARGIN=0.03*(XMAX-XMIN):YMARGIN=0.03*(YMAX-YMIN)
5480 XMAX=XMAX+XMARGIN:XMIN=XMIN-XMARGIN
5490 YMAX=YMAX+YMARGIN:YMIN=YMIN-YMARGIN
5600 SFX=HPTS/(XMAX-XMIN):SFY=191/(YMAX-YMIN)
5610 X0!=-XMIN*SFX:Y0=YMAX*SFY
5615 KEY OFF:IF HPTS=639 THEN SCREEN 2 ELSE SCREEN 1,0:COLOR 0,0
5620 IF X0!>-0.5 AND X0!<HPTS+0.5 THEN LINE(X0!,0)-(X0!,191):IF X0!<16 THEN LOCATE 1,2 ELSE LOCATE 1,X0!/8
5630 PRINT "Y"
5640 IF Y0>-0.5 AND Y0<191.5 THEN LINE(0,Y0)-(HPTS,Y0):LOCATE (Y0+4)/8,HPTS/8-1:PRINT "X";
5660 LOCATE 25,2:PRINT CHR$(27);:PRINT USING "####^^^^";XMIN;
5670 LOCATE 25,HPTS/8-9:PRINT USING "####^^^^"+CHR$(26);XMAX;
5680 LOCATE 23,1:PRINT USING "####^^^^";YMIN:PRINT CHR$(25);
5690 LOCATE 1,1:PRINT CHR$(24):PRINT USING "####^^^^";YMAX
5700 RETURN
5710 FOR I=0 TO HPTS
5720 Y(0)=Y0-SFY*(ALIN+BLIN*(I-X0!)/SFX)
5730 IF Y(0)<192 THEN PSET(I,Y(0)),K
5740 NEXT
5750 RETURN
5760 FOR I=0 TO HPTS
5770 Y(0)=Y0-SFY*(AEXP*EXP(BEXP*(I-X0!)/SFX))
5780 IF Y(0)<192 THEN PSET(I,Y(0)),1
5790 NEXT
5800 RETURN
5810 FOR I=0 TO HPTS
5820 IF I>=X0! THEN Y(0)=Y0-SFY*APOW*((I-X0!)/SFX)^BPOW ELSE GOTO 5840
5830 IF Y(0)<192 THEN PSET(I,Y(0)),J
5840 NEXT
5850 RETURN
5860 FOR I=0 TO HPTS
5870 IF I>X0! THEN Y(0)=Y0-SFY*(ALOG+BLOG*LOG((I-X0!)/SFX)) ELSE GOTO 5890
5880 IF Y(0)<192 THEN PSET(I,Y(0)),3
5890 NEXT
5900 RETURN
5905 LOCATE 25,25:PRINT TITLE$+" ("+A$+")";
5910 FOR I=1 TO N
5920 X(0)=X0!+SFX*X(I):Y(0)=Y0-SFY*Y(I)
5930 IF X(0)>=2.5 AND X(0)<(HPTS-1.5) AND Y(0)>=2.5 AND Y(0)<190.5 THEN LINE (X(0)-2,Y(0)-2)-(X(0)+2,Y(0)+2),K,B
5940 NEXT
5950 RETURN
6000 PRINT SPACE$(39):PRINT "Select multiple plot option:"
6010 PRINT "1 - linear, exponential, power"
6020 PRINT "2 - linear, exponential, logarithmic"
6030 PRINT "3 - linear, power, logarithmic"
6040 PRINT "4 - exponential, power, logarithmic"
6050 PRINT "5 - Exit plot routine"
6060 INPUT M
6070 ON M GOTO 6080,6100,6120,6130,3345
6080 RED$="lin":GRN$="exp":BRN$="pow":J=3:GOTO 6150
6100 RED$="lin":GRN$="exp":BRN$="log":J=0:GOTO 6150
6120 RED$="lin":GRN$="pow":BRN$="log":J=1:GOTO 6150
6130 RED$="pow":GRN$="exp":BRN$="log":J=2
6150 HPTS=319:K=2
6170 GOSUB 5300
6180 FOR I=88 TO 104:PSET(I,196),2:NEXT
6190 LOCATE 25,14:PRINT RED$;
6200 FOR I=144 TO 160:PSET(I,196),1:NEXT
6210 LOCATE 25,21:PRINT GRN$;
6220 FOR I=200 TO 216:PSET(I,196),3:NEXT
6230 LOCATE 25,28:PRINT BRN$;
6235 LOCATE 3,1
6240 IF J=0 THEN GOSUB 5710:GOSUB 5760:GOSUB 5860
6250 IF J=1 THEN GOSUB 5710:GOSUB 5810:GOSUB 5860
6260 IF J=2 THEN GOSUB 5810:GOSUB 5760:GOSUB 5860
6270 IF J=3 THEN GOSUB 5710:GOSUB 5760:GOSUB 5810
6275 GOSUB 5910
6277 A$=""
6280 B$=INKEY$:IF B$=CHR$(13) THEN 6290 ELSE A$=A$+B$:GOTO 6280
6290 KEY ON:ROW%=2:SCREEN 0:WIDTH 80:CLS:LOCATE 2,1:IF A$="" THEN 3350 ELSE 3356
6300 IF N<1 THEN 6350
6310 PRINT SPACE$(39):LINE INPUT "Save input data to filespec: ";A$
6320 OPEN A$ FOR OUTPUT AS #1
6330 FOR I=1 TO N:PRINT #1,X(I);Y(I):NEXT
6340 CLOSE #1
6350 RETURN
6400 PRINT SPACE$(39):LINE INPUT "Get input data from filespec: ";A$
6403 ON ERROR GOTO 6480
6405 OPEN A$ FOR INPUT AS #1
6420 WHILE NOT EOF(1)
6430 N=N+1
6440 INPUT #1,X(N),Y(N)
6450 WEND
6460 CLOSE #1
6465 ON ERROR GOTO 0
6470 GOTO 1000
6480 IF ERR=53 THEN PRINT "Filespec not found."
6490 RESUME 6465
```
{% endraw %}

## FILES239.TXT

{% raw %}
```
------------------------------------------------------------------------
Disk No 239   IPCO Graph and Higher Math Mix                         v1.1
------------------------------------------------------------------------
This disk has an interesting mix of programs with the majority dealing
with higher math functions and graph capabilities.  CURVE.BAS requires
color graphics and the rest run well on momochrome.  4028-A.BAS is a
musical program that allows an interlude in a hard day of pounding
simultaneous equations.
 
1004-B   BAS  Mini word processor/mail merge
1005-A   BAS  Prints 3x5 recipe cards for address listing
1009-A   BAS  Form generation, daily log sheet
3002-A   BAS  A neat non-graphics mini graph plot
3003-A   BAS  Plots probability curve
3006-A   BAS  Matrix inversion & simultaneous equations
3012-A   BAS  Multiple linear regression coefficients
3014-A   BAS  Multiple regression analysis package
CURVE    BAS  Linear exponential logorithmic & power equation
CURVE    ABS  Introduction for CURVE.BAS
CURVE    NFO  Documentation for CURVE.BAS  (12K)
4028-A   BAS  Musical change of pace
5006-A   BAS  Spelling bee exercisor
7013-A   BAS  Prints in italics on Epson printer
LOGMENU  LOG  A BASIC program that records entry and exit times
LOGON    LOG  Used by LOGMENU.LOG to log on
LOGREV   LOG  Used by LOGMENU.LOG to keep times
LOGOFF   LOG  Used by LOGMENU.LOG to leave system
7037-A   BAS  Changes printer mode
7042-A   BAS  Mini data menu: directories, printer mode etc.
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0239

     Volume in drive A has no label
     Directory of A:\

    1004-B   BAS     18048  11-28-84   9:52p
    1005-A   BAS      4352  11-28-84   9:53p
    1009-A   BAS     19456  11-28-84   9:53p
    3002-A   BAS      5632  11-28-84   9:53p
    3003-A   BAS      5760  11-28-84   9:53p
    3006-A   BAS      2944  11-28-84   9:53p
    3012-A   BAS     11136  11-28-84   9:53p
    3014-A   BAS     12672  11-28-84   9:53p
    CURVE    BAS      8560  10-30-85   3:47p
    CURVE    ABS      1484   1-19-87  10:47a
    CURVE    NFO     14265   1-19-87  10:15a
    4028-A   BAS      6912  11-28-84   9:54p
    5006-A   BAS      3328  11-28-84   9:54p
    7013-A   BAS      6528  11-28-84   9:54p
    LOGMENU  LOG      2942  11-28-84   9:55p
    LOGON    LOG      1024  11-28-84   9:55p
    LOGREV   LOG     10368  11-28-84   9:55p
    LOGOFF   LOG      5248  11-28-84   9:55p
    7037-A   BAS      2304  11-28-84   9:55p
    7042-A   BAS     13952  11-28-84   9:55p
    CRC      TXT      1522  12-17-84   3:57p
    CRCK4    COM      1536  10-21-82   5:50p
    FILES239 TXT      1530   1-04-80   8:22p
           23 file(s)     161503 bytes
                          150528 bytes free
