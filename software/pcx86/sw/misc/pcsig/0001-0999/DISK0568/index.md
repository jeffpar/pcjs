---
layout: page
title: "PC-SIG Diskette Library (Disk #568)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0568/
machines:
  - id: ibm5160
    type: pcx86
    config: /machines/pcx86/ibm/5160/cga/256kb/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0568"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5160" %}

{% comment %}info_begin{% endcomment %}

## Information about "LOTUS UTILITIES"

    Lotus Utilities (not affiliated with LOTUS Corp.) is a mixed-bag
    selection of worksheets and utilities.  OPTIONZ.WKS is a useful
    stock option program, with tables for calculating profit by option,
    buying/selling long or short, and more.  NEWCOLOR.IN is a utility
    to enhance the color performance of LOTUS 1-2-3.  Also included
    are utilities for archiving and unarchiving 1-2-3 worksheets, a
    program that sets up a 640k RAM disk, and a program for adding
    text to numeric cells.  Another utility (123DOC.WKS) prints out
    worksheets with readable formulas.  Finally, there is a 1985 Federal
    Tax template, complete with documentation.
    
    System Requirements:  256K, two disk drives, monochrome display,
    LOTUS 1-2-3 v2.0
    
    How to Start:   Access through LOTUS 1-2-3
    
    File Descriptions:
    
    123DOC   ARC  Archived file - Documentation Utility
    ARC      EXE  Archive Utility Program
    123RANGE EXE  Spreadssheet file print Utility Program
    123PREP  ARC  Archived file - Text file to Lotus Prep Utility
    123EGA   ARC  Archived file - Extended Graphics Adapter Utility
    TRYVM123 COM  Virtual memory system for 1-2-3 Release 2.0
    UNARC    TXT  Directions on expanding archived files on disk
    OPTIONZ  WKS  LOTUS worksheet - Stock Options
    NEWCOLOR IN   Program to change display colors for LOTUS 1-2-3
    NEWCOLOR DOC  Text file - Documentation for NEWCOLOR.IN
    FEDTAX85 WKS  LOTUS worksheet - Federal Income Tax for 1985
    FEDTAX85 DOC  Text file - Documentation for FEDTAX85.WKS
    CLRJET   ARC  Archived file - IBM Color Jet Printer Drivers
    TRYVM123 DOC  Documentation for  TRYVM123
    WKS-FRMT TXT  Worksheet files format
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

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0568

     Volume in drive A has no label
     Directory of A:\

    123DOC   ARC     28124   4-03-85   9:23p
    123EGA   ARC      9021  10-20-85   9:12a
    123PREP  ARC     36752   4-11-85   7:32p
    123RANGE EXE     25088   6-08-84   4:02p
    ARC      EXE     29824   8-22-85  12:50a
    CLRJET   ARC     39510   8-18-85   3:46p
    FEDTAX85 DOC      2739  10-06-85   8:20a
    FEDTAX85 WKS     82048  10-06-85   7:42a
    NEWCOLOR DOC      1152   5-17-85   7:37p
    NEWCOLOR IN        256   5-17-85   7:38p
    OPTIONZ  WKS     21376   7-29-84   8:55a
    TRYVM123 COM     23229  10-16-85   9:38a
    TRYVM123 DOC     10250  12-11-85   4:36p
    UNARC    TXT       363   6-20-86   1:08p
    WKS-FRMT TXT     36830  10-29-85   4:05p
    GO       BAT      1131   6-20-86   1:12p
    NOTES568 TXT      1280   6-20-86   1:08p
    FILES568 TXT      1701   6-20-86   1:08p
           18 file(s)     350674 bytes
                            2048 bytes free
