---
layout: page
title: "PC-SIG Library Disk #301"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0301/
machines:
  - id: ibm5160
    type: pcx86
    config: /machines/pcx86/ibm/5160/cga/256kb/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk 0301"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5160" %}

{% comment %}info_begin{% endcomment %}

## Information about "LOTUS WORKSHEETS #2"

    A broad-ranging collection of Lotus 1-2-3 technical notes, utility
    programs, operation hints and templates for both the power user and the
    novice.
    
    Features:
    ~ Create address labels
    
    ~ A for-next loop
    
    ~ Make menu macros
    
    ~ Learn to document formulas
    
    ~ Import files
    
    ~ Build a table for range names
    
    ~ Learn about /XI macros
    
    ~ Understand the /datafill Function
    
    ~ Construct a macro library
    
    ~ Tech notes on many Lotus capabilities
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## 123DOC.BAS

```bas
 105    ' ********* BASIC version of RatBas program ********** 
 110     DefInt i-n 
 115   'basica defs
 120   defint a-z
 125   dim cols$(110),rows$(60),table(60,100),cells$(1010)
 130   dim cols.w(110)
 135   '
 140   '
 145    GO TO 25000 ' jump to program 
 200    '----------------------- PROCEDURE SET.SCREEN
 205   cls
 210   locate 25,5:print "Press [esc] to terminate run"
 215   locate 1,1: print "Documentation of ";infile$
 220   locate 05,5:print "cells present for rows";rp*ipc+1;" to";rp*ipc+rp
 225   pset (33,49): draw "r530d110l530u110"
 230    RETURN ' ------------------------------------------
 235   '
 240   '
 300    '----------------------- PROCEDURE FILLER
 305   '
 310   'fills in the column letters A thru CZ
 315   for i=1 to 26: cols$(i	 )=  chr$(64+i): next i
 320   for i=1 to 26: cols$(i+26)="A"+cols$(i): next i
 325   for i=1 to 26: cols$(i+52)="B"+cols$(i): next i
 330   for i=1 to 26: cols$(i+78)="C"+cols$(i): next i
 335   nc=4*26
 340    RETURN ' ------------------------------------------
 345   '
 350   '
 355   '
 360   '
 400    '----------------------- PROCEDURE READ.LINE
 405   '
 410   'this procedure reads one lin from the lotus doc file and decodes
 415   'it to address and contents
 420   '
 425   IF NR=0 AND LIN<>0  THEN ELSE GO TO  445
 430       lin$=old.lin$			    'restore last line from old page
 435       lin=lin-1
 440    GO TO   465
 445    ' ELSE] 
 450       input #1, lin$			    'get new line
 455       old.lin$=lin$			    'save last line for next page
 460       lin=lin+1
 465    ' IFEnd] 
 470   '
 475   ic=instr(lin$,":")
 480   IF IC<>0  THEN ELSE GO TO  550
 485   				       'remove row/col chars and store
 490       row$="": col$=""
 495       for i=1 to ic-1
 500   	c$=mid$(lin$,i,1): ichar=asc(c$)
 505   	IF ICHAR>64 AND ICHAR<91  THEN ELSE GO TO  520
 510   	    col$=col$+c$		'alphabetic
 515    GO TO   530
 520    ' ELSE] 
 525   	    row$=row$+c$		'numeric
 530   	 ' IFEnd] 
 535       next i
 540   				       'remove cell contents always getting at least a :
 545       cell$=mid$(lin$,ic)
 550    ' IFEnd] 
 555    RETURN ' ------------------------------------------
 560   '
 565   '
 570   '
 575   '
 600    '----------------------- PROCEDURE STORE.CELL
 605   '
 610   'this procedure stores the row/col/cell info in table/list
 615   'constructing a row/col index as it goes to fill a 55 by 100 matrix
 620   '
 625   'find the row and col
 630   '
 635   ir=0
 640   for i=1 to nr
 645       if row$=rows$(i) then ir=i
 650   next i
 655   if ir=0 then nr=nr+1:rows$(nr)=row$:ir=nr
 660   jc=0
 665   for j=1 to nc				'fixed column letters
 670       if col$=cols$(j) then jc=j
 675   next j
 680   '
 685   'store the cell
 690   if max.cols<jc then max.cols=jc
 695   ncell=ncell+1
 700   table(ir,jc)=ncell
 705   cells$(ncell)=cell$
 710   colw=len(cell$): if colw>cols.w(jc) then cols.w(jc)=colw
 715   '
 720   pset(33+5*jc,49+2*ir)
 725   locate 1,35: print "Page..";ipc+1;" Rows..";ir;" Cols..";Max.cols;" cells..";ncell
 730   '
 735    RETURN ' ------------------------------------------
 740   '
 745   '
 750   '
 755   '
 760   '
 800    '----------------------- PROCEDURE PRINT.TABLE
 805   '
 810   '
 815   'this procedure prints the table in pages accross the table 100 cols/page
 820   ' with ncell.colw cols/cell, overlapping
 825   '
 830   'compute np the # of pages accross the table, and ncols/page
 835   ncols=int(max.chars/ncell.colw)-1      '# of columns this page
 840   if ncols=0 then ncols=1
 845   np=int(max.cols/ncols+1)
 850   '
 855   nr=nr-1 			       'drop last line for next page
 860   				       'page loop
 865   ipc=ipc+1			       'overall page count
 870   for ip=1 to np			       'slice count
 875   '
 880       lprint chr$(12),chr$(15)	       'compressed characters
 885   '
 890       lprint tab(15);"Date: ";date$;tab(max.chars-15);"Page:";ipc;"/";ip
 895       lprint chr$(14),tab(5+max.chars/8);"Documentation for ";infile$
 900       lprint tab(15);string$(max.chars,"-")
 905   					    'col headers
 910       lin$=string$(max.chars," ")
 915       for jj=1 to ncols
 920   	j=(ip-1)*ncols+jj
 925   	mid$(lin$,jj*ncell.colw)=cols$(j)+"["+str$(cols.w(j))+"]"
 930   	cols.w(j)=0
 935       next jj
 940       mid$(lin$,1)="Col[width]"
 945       lprint tab(15);lin$
 950       lprint tab(15);string$(max.chars,"-")
 955   				       'row loop
 960       for i=1 to nr
 965   	multiple.row=true
 970   	while multiple.row
 975   	    multiple.row=false
 980   	    lin$=string$(max.chars," ")
 985   	    mid$(lin$,4)="&"+rows$(i)
 990   	    ib=1		       'normal no. of blank cells
 995   	    for jj=ncols to 1 step -1
 1000   		j=(ip-1)*ncols+jj
 1005   		k=table(i,j)
 1010   		IF K<>0  THEN ELSE GO TO  1035
 1015   		    mid$(lin$,jj*ncell.colw,ib*ncell.colw)=cells$(k)
 1020   		    cells$(k)="&  "+mid$(cells$(k),ib*ncell.colw+1)
 1025   		    ib=1
 1030    GO TO   1045
 1035    ' ELSE] 
 1040   		    ib=ib+1	       'multiple cell possible
 1045   		 ' IFEnd] 
 1050   		if len(cells$(k))<4 then table(i,j)=0 else multiple.row=true
 1055   	    next jj
 1060   	    if not multiple.row then mid$(lin$,4)=" "
 1065   	    lprint tab(15);lin$
 1070   	wend
 1075       next i
 1080       lprint
 1085       status$=inkey$
 1090       IF STATUS$=CHR$(27)  THEN ELSE GO TO  1100
 1095       end
 1100        ' IFEnd] 
 1105   next ip
 1110    RETURN ' ------------------------------------------
 1115   '
 1120   '
 1125   '
 1130   '
 1135   '
 25000    ' =================== PROCEDURE LOCATIONS ===========
 25005    '  200 SET.SCREEN
 25010    '  300 FILLER
 25015    '  400 READ.LINE
 25020    '  600 STORE.CELL
 25025    '  800 PRINT.TABLE
 25030    ' ================== PROGRAM ======================== 
 25035    false = 0: true = not false 
 25040   '
 25045   cls: width "lpt1:",255
 25050   screen 2				'use hi res graphics 200 x 640
 25055   locate 2,1
 25060   '
 25065   print tab(5);"123-DOC: version 1.0"
 25070   print tab(5);"A program to list a 123 documentation file as cells"
 25075   '
 25080   pset(1,1):draw "R500D30L500U30"
 25085   pset(9,1):draw "R500D30L500U30"
 25090   '
 25095   locate 6,1
 25100   print tab(5);"Cell width for print-out 5-100 (15)....";:input ncell.colw
 25105   if ncell.colw=0 then ncell.colw=15
 25110   if ncell.colw<5 then ncell.colw= 5
 25115   if ncell.colw>100 then ncell.colw=100
 25120   print tab(5);"Page width for print-out (132).........";:input max.chars
 25125   if max.chars=0 then max.chars=132
 25130   print tab(5);"Rows per page for printout (40)........";:input rp
 25135   if rp=0 then rp=40
 25140   '
 25145   locate 20,1:files "b:*.prn"
 25150   infile$=""
 25155   while infile$=""
 25160       locate 15,5
 25165       input "Name of lotus file (b:........prn).....";infile$
 25170   wend
 25175   '
 25180   if instr(infile$,":")=0 then infile$=left$("b:"+infile$,11)
 25185   if instr(infile$,".")=0 then infile$=left$(infile$+".prn",14)
 25190   '
 25195   close
 25200   open infile$ for input as #1
 25205   lin=0: ipc=0: nr=0: nc=104: max.cols=0:ncell=0
 25210   '
 25215   					'load column tags
 25220   GOSUB  300 ' FILLER
 25225   					'set up the screen display
 25230   GOSUB  200 ' SET.SCREEN
 25235   '
 25240   while not eof(1)
 25245    GOSUB  400 ' READ.LINE
 25250       status$=inkey$
 25255       if status$=chr$(27) then end
 25260   					'ic=0 implies blank line
 25265   IF IC<>0 THEN GOSUB  600 ' STORE.CELL
 25270   					'assume 50 lines/page+1
 25275       IF NR=RP+1 OR NCELL>1000  THEN ELSE GO TO  25295
 25280   	GOSUB  800 ' PRINT.TABLE
 25285   	nr=0:ncell=0			'clear table
 25290   	GOSUB  200 ' SET.SCREEN
 25295        ' IFEnd] 
 25300   wend
 25305       beep
 25310       print"end of file found"
 25315    GOSUB  800 ' PRINT.TABLE
 25320   close
 25325   '
 25330   end
```

## 123RANGE.BAS

```bas
10    ' 123RANGE.BAS    List Lotus Range Names used in a spreadsheet file (.wks)20    '
20    ' Charles H. Greene dba ISM                           April 23, 1983
30    ' 150 West First Street                        Rev.1  May   20, 1983
40    ' New Richmond, Wi   54017     <715> 246-6690
50    '
60    ' Lotus v1.0 does not provide for listing Range Names that have been
70    ' assigned..this program provides a modest solution to that problem.
90    '
100   ' Range Name           FLD.CNT()
110   '  Specification       1...5...10....5...20....5.28
120   '                      AAAAAAAAAAAAAAABCCDDEEFFGGGG
130   '   where
140   '    A=range name            00h is used in place of space 20h
150   '    B=unknown               00h
160   '    C=begining column       low/high byte format value is 1 less
170   '    D=         row          than actual value ie.2048=FF07h
180   '    E=ending column
190   '    F=       row
200   '    G=seperators            0B 00 18 00h
210   '
220   '
1000   DEFINT A-Z
1010   DIM RANGE$(500)
1020   RCNT=0: RMAX=500
1030   BLACK=0: WHITE=7: BRIGHT=16: FG=WHITE: BG=BLACK
1040   FALSE=0: TRUE=NOT FALSE
1050   END.OF.FILE=FALSE
1060   FF$=CHR$(12)
1070   X=0: Y=0: Z=0
1080   X$=""
1090                                     'characters seperating range names
1100   LOTUS.CTL$(1)=CHR$(11)            'Range Name fields begin with this
1110   LOTUS.CTL$(2)=CHR$(0)             '  sequence of characters (1)-(4)
1120   LOTUS.CTL$(3)=CHR$(24)            'any break in this sequence ends
1130   LOTUS.CTL$(4)=CHR$(0)             '  the range names
5000  '
5010  ' Load table of column codes
5020  '
5030  DIM COL$(256)
5040  FOR X = 0 TO 255
5050     READ COL$(X)
5060  NEXT
5070  '
5080  ' Print Headings
5090  '
5100  PRINT
5110  KEY OFF: CLS: LOCATE ,,0
5120  HEAD1$="List Lotus(tm) Range Names                             123RANGE <ISM>": PRINT HEAD1$
5130  PRINT
5140  '
5150  ' Get Lotus filespec
5160  '
5170  ON ERROR GOTO 15000
5180  PRINT "Enter LOTUS spreadsheet filespec : ";
5190  INPUT "",FILE$
5200  Z=INSTR(FILE$,".")                'make sure it has .wks extension
5210  IF Z=0 THEN FILE$=FILE$+".WKS"
5220  OPEN FILE$ AS #1 LEN=1
5230  FIELD #1,1 AS X$
5240  FCB=VARPTR(#1)                    'address FCB
5250  Z=PEEK(FCB)                       'file type must be random
5260  IF Z<>4 THEN CLOSE #1: GOTO 5140
5270  RCDLIMIT!=((PEEK(FCB+19)*256)*256)+PEEK(FCB+17)+(256*PEEK(FCB+18))
5280  IF RCDLIMIT!=0 THEN CLOSE #1: PRINT: PRINT "**** File not found ****": GOTO 5140
5290  PRINT: PRINT: PRINT "File contains "RCDLIMIT!"bytes.": PRINT: PRINT
5300  HEAD2$="File: "+FILE$+SPACE$(49-LEN(FILE$))+DATE$+"  "+LEFT$(TIME$,5)
6000  '
6010  ' Process
6020  '
6030  GOSUB 8000                        'get byte
6040  FLD.CNT=1: RANGE.NAME$=""
6050  WHILE NOT END.OF.FILE
6060      ON MATCH.CNT+1 GOSUB 10000, 10060, 10100, 10140, 11000
6070      GOSUB 8000
6080  WEND
7000  '
7010  ' End of Input
7020  '
7030  PRINT: PRINT: PRINT "< END OF LIST >"
7040  PRINT: PRINT
7050  INPUT "Output to Printer (Y/N) ";ANS$
7060  IF ANS$="Y" OR ANS$="y" THEN GOSUB 16000
7070  END                               'done
8000  '
8010  ' Read file
8020  '
8030  RCDNO!=RCDNO!+1                   'set next random record(byte) no.
8040                                    'check for end of file
8050  IF RCDNO!>RCDLIMIT! THEN END.OF.FILE=TRUE: X$="": GOTO 8070
8060  GET #1,RCDNO!
8070  RETURN
10000 '
10010 ' Look for start of range names 0Bh 00h 18h 00h
10020 '
10030 IF X$<>CHR$(11) THEN MATCH.CNT = 0:RETURN
10040 MATCH.CNT=1
10050 RETURN
10060 '
10070 IF X$<>CHR$(0)  THEN MATCH.CNT = 0: GOTO 10000
10080 MATCH.CNT=2
10090 RETURN
10100 '
10110 IF X$<>CHR$(24) THEN MATCH.CNT = 0: GOTO 10000
10120 MATCH.CNT=3
10130 RETURN
10140 '
10150 IF X$<>CHR$(0)  THEN MATCH.CNT = 0: GOTO 10000
10160 MATCH.CNT=4
10170 RETURN
11000 '
11010 ' Range name fields found
11020 '
11030 IF FLD.CNT > 15 GOTO 11070
11040 IF X$<>CHR$(0) THEN RANGE.NAME$=RANGE.NAME$+X$
11050 FLD.CNT=FLD.CNT+1
11060 RETURN
11070 IF FLD.CNT > 18 GOTO 11110
11080 IF FLD.CNT = 17 THEN RANGE.BEG.COL=ASC(X$)
11090 FLD.CNT=FLD.CNT+1
11100 RETURN
11110 IF FLD.CNT > 20 GOTO 11170
11120 IF FLD.CNT = 19 THEN RANGE.BEG.ROW=ASC(X$): GOTO 11150
11130 R=ASC(X$): IF R>8 THEN R=8
11140 RANGE.BEG.ROW=RANGE.BEG.ROW+(R*256)
11150 FLD.CNT=FLD.CNT+1
11160 RETURN
11170 IF FLD.CNT > 22 GOTO 11210
11180 IF FLD.CNT = 21 THEN RANGE.END.COL=ASC(X$)
11190 FLD.CNT=FLD.CNT+1
11200 RETURN
11210 IF FLD.CNT > 24 GOTO 11400
11220 IF FLD.CNT = 23 THEN RANGE.END.ROW=ASC(X$): FLD.CNT=FLD.CNT+1: RETURN
11230 '       row must be 1-2048
11240 R=ASC(X$): IF R>8 THEN R=8
11250 RANGE.END.ROW=RANGE.END.ROW+(R*256)
11260 '
11270 ' Print range entry
11280 '
11290 IF RCNT=RMAX THEN PRINT "*** RANGE$ ARRAY EXCEEDED ***": END
11300 RCNT=RCNT+1
11310 PRINT USING "\              \";RANGE.NAME$;
11320 RANGE.BEG$=COL$(RANGE.BEG.COL)+MID$(STR$(RANGE.BEG.ROW+1),2)
11330 RANGE.END$=COL$(RANGE.END.COL)+MID$(STR$(RANGE.END.ROW+1),2)
11340 PRINT "   "RANGE.BEG$".."RANGE.END$"   ";
11350 IF RANGE.BEG.ROW>2047 OR RANGE.END.ROW>2047 THEN PRINT "*** Out of bounds ***" ELSE PRINT
11360 RANGE.NAME$=RANGE.NAME$+SPACE$(17-LEN(RANGE.NAME$))
11370 RANGE$(RCNT)=RANGE.NAME$+"  "+RANGE.BEG$+".."+RANGE.END$
11380 FLD.CNT=FLD.CNT+1: RANGE.NAME$=""
11390 RETURN
11400 IF X$<>LOTUS.CTL$(FLD.CNT-24) THEN END.OF.FILE=TRUE
11410 IF FLD.CNT < 28 THEN FLD.CNT=FLD.CNT+1 ELSE FLD.CNT=1
11420 RETURN
15000 '
15010 ' Error traps
15020 '
15030 IF ERR=57 THEN PRINT: PRINT "**** I/O Error         ****": END
15040 IF ERR<24 OR ERR>25 GOTO 15090
15050 IF ERL = 5210 THEN 15110
15060 IF ERL<>8060 GOTO 15140
15070 PRINT:PRINT "**** Check disk drive -- press any key to continue ****"
15080 CHAR$=INKEY$: IF CHAR$="" THEN 15070 ELSE RESUME
15090 '   Disk file open errors
15100 GOTO 15170
15110 '   Disk I/O errors
15120 IF ERR=62 OR ERR=63 THEN END.OF.FILE=TRUE: X$="": RESUME 8070
15130 GOTO 15170
15140 '
15150 PRINT:PRINT "**** Check printer -- press any key to continue ****"
15160 CHAR$=INKEY$: IF CHAR$="" THEN 15160 ELSE RESUME
15170 '
15180 IF ERR=6 THEN RESUME NEXT
15190 PRINT "ERROR #"ERR" IN LINE "ERL
15200 ON ERROR GOTO 0
16000 '
16010 ' List ranges to printer in columns
16020 '
16030 C1=1: C2=(RCNT+1)/2: RMAX=C2-1: LINE.CNT=99: PAGE.CNT=0
16040 IF LINE.CNT>56 THEN GOSUB 16150           ' Page heading
16050 LPRINT RANGE$(C1);
16060 X=LEN(RANGE$(C1)): LPRINT SPC(40-X);
16070 LPRINT RANGE$(C2)
16080 LINE.CNT=LINE.CNT+1
16090 IF C1<RMAX THEN C1=C1+1: C2=C2+1: GOTO 16040
16100 '                                           Finish report
16110 LPRINT:LPRINT
16120 LPRINT "< END OF LIST >"
16130 LPRINT CHR$(12)
16140 RETURN
16150 '
16160 ' Page overflow
16170 '
16180 LPRINT CHR$(12)                           ' top of form
16190 LINE.CNT=4: PAGE.CNT=PAGE.CNT+1
16200 LPRINT HEAD1$"  Page ";
16210 LPRINT USING "###";PAGE.CNT
16220 LPRINT HEAD2$
16230 LPRINT:LPRINT
16240 RETURN
60000 '
60010 ' Col Subscript
60020 '
60030 DATA A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z
60040 DATA AA,AB,AC,AD,AE,AF,AG,AH,AI,AJ,AK,AL,AM,AN,AO,AP,AQ,AR,AS,AT,AU,AV,AW,AX,AY,AZ
60050 DATA BA,BB,BC,BD,BE,BF,BG,BH,BI,BJ,BK,BL,BM,BN,BO,BP,BQ,BR,BS,BT,BU,BV,BW,BX,BY,BZ
60060 DATA CA,CB,CC,CD,CE,CF,CG,CH,CI,CJ,CK,CL,CM,CN,CO,CP,CQ,CR,CS,CT,CU,CV,CW,CX,CY,CZ
60070 DATA DA,DB,DC,DD,DE,DF,DG,DH,DI,DJ,DK,DL,DM,DN,DO,DP,DQ,DR,DS,DT,DU,DV,DW,DX,DY,DZ
60080 DATA EA,EB,EC,ED,EE,EF,EG,EH,EI,EJ,EK,EL,EM,EN,EO,EP,EQ,ER,ES,ET,EU,EV,EW,EX,EY,EZ
60090 DATA FA,FB,FC,FD,FE,FF,FG,FH,FI,FJ,FK,FL,FM,FN,FO,FP,FQ,FR,FS,FT,FU,FV,FW,FX,FY,FZ
60100 DATA GA,GB,GC,GD,GE,GF,GG,GH,GI,GJ,GK,GL,GM,GN,GO,GP,GQ,GR,GS,GT,GU,GV,GW,GX,GY,GZ
60110 DATA HA,HB,HC,HD,HE,HF,HG,HH,HI,HJ,HK,HL,HM,HN,HO,HP,HQ,HR,HS,HT,HU,HV,HW,HX,HY,HZ
60120 DATA IA,IB,IC,ID,IE,IF,IG,IH,II,IJ,IK,IL,IM,IN,IO,IP,IQ,IR,IS,IT,IU,IV
```

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0301

     Volume in drive A has no label
     Directory of A:\

    123PREP  DOC     14317   8-26-84  11:06a
    FOR_NEXT WKS      2560   1-01-80  12:03a
    MENU     WKS      8832   7-29-84   8:55a
    TEXTDEMO WKS      6016   1-01-80  12:02a
    123Q&A   TXT     14999  11-25-84   5:41p
    123DOC   DOC      3456  12-07-84   1:56p
    123DOC   EXE     24704  12-07-84   2:01p
    123DOC   BAS      8192  12-07-84   2:03p
    ADDLABEL DOC      1062   1-15-87   6:24p
    ADDLABL2 WKS      7808   1-25-85  11:18a
    PHOTOEST WKS      9984   7-04-84   5:51a
    123RANGE BAS      6912   7-17-83  11:24a
    PHOTOEST DOC      1408   7-04-84   5:52a
    123PREP  EXE     33792   8-26-84  11:06a
    PICFIL   TXT      4108   3-19-84  10:11p
    LOT102   TXT     11136  11-04-84  11:14p
    LOT103   TXT     15744  11-04-84  11:18p
    LOT101   TXT      8489  11-24-84   8:25p
    RATIO    WKS     24064   5-26-84   8:22p
    123XIMAC TXT      8608  11-24-84   8:04p
    123MAIL  TXT     21545  11-24-84   7:49p
    LOT105   TXT     13058  11-24-84   8:21p
    DATAFILL TXT      8067  11-24-84   8:14p
    MACROLIB TXT     23984  11-24-84   7:24p
    LOOPMAC  TXT      8015  11-24-84   8:09p
    FILES301 TXT      1572   1-29-87   8:34p
    ADDLABL3 WK1      8413   1-15-87   6:17p
           27 file(s)     300845 bytes
                            9216 bytes free
