---
layout: page
title: "PC-SIG Diskette Library (Disk #110)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0110/
machines:
  - id: ibm5160
    type: pcx86
    config: /machines/pcx86/ibm/5160/cga/256kb/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0110"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5160" %}

{% comment %}info_begin{% endcomment %}

## Information about "PRGMR UTILITIES #2"

    A Programmers Toolbag!  This disk holds lots of little tools,
    such as AUTOFILE, PRINTER, DEFINE, SCRN, and DOSCOLOR, which are
    all BASIC utilities.  HC, SIZER, UPPER, and WHEREIS are all tools
    which perform some function on files from the DOS prompt.  The
    rest are miscellaneous utilities.
    
    System Requirements:  A version of BASIC
    
    How to Start:  After loading DOS type DIR *.DOC for all the text
    files on this disk. Each one describes its own utility and are well
    documented that way.
    
    Suggested Registration:  Generally $3.00 to $15.00
    
    File Descriptions:
    
    AUTOFILE BAS  Free format filer/indexer with keyed lookup
    AUTOFILE BAT  Batch file for invoking AUTOFILE
    UPPER    ASM  Source for UPPER program
    UPPER    DOC  Documentation for UPPER program
    UPPER    COM  Filter program to convert file to upper case
    AUTOFILE DOC  Documentation for AUTOFILE
    DOSCOLOR BAT  Batch/documentation file for DOSCOLOR
    DOSCOLOR BAS  Program to set colors used by DOS 2.0
    DEFINE   DOC  Documentation for DEFINE
    DEFINE   BAS  Create pictures your BASIC programs can GET/PUT
    TABLET   BAS  Interactive graphics editor
    STEEPDES APL  Steepest descent equation solution in APL
    SIZER    ASM  Source for SIZER program
    SIZER    DOC  Documentation for SIZER program
    SIZER    COM  Checks the size of a file and sets ERRORLEVEL
    HC       COM  Fast, assembly coded hex-binary file converter
    PRINTER  COM  Menu-driven printer mode setup program
    HC       DOC  Documentation for the above
    SCRN     DOC  Documentation for the above
    SCRN     ASM  BASIC-callable routines for display windowing
    ROMBIOS  ASM  Source include file for ROM BIOS data areas
    RAMDISK  DOC  Documentation for RAM disk program
    RAMDISK  SYS  DOS 2.0 RAM disk sized by parameter in CONFIG.SYS
    PRINTER  ASM  Source for PRINTER program
    PRINTER  DOC  Documentation for PRINTER program
    PRINTER  DAT  File to customize the above for your printer
    WHEREIS  COM  Names all the subdirectories containing a given file
    WHEREIS  DOC  Documentation for WHEREIS
    XT370    DOC  Insider information on the new PC XT/370
    README        Listing of included files
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## AUTOFILE.BAS

{% raw %}
```bas
1 '*************************************
2 '*  A U T O F I L E  -  T D KOLOUCH  *
3 '*                                   *
4 '*  CUSTOM DATA SERVICES, INC.       *
5 '*  PO BOX 13                        *
6 '*  CROMWELL, CT  06416              *
7 '*  TEL# 203-635-1589                *
8 '*************************************
9 GOTO 100
10 'Fix to line 5100 has been merged in this copy.
11 ' *** Input routine ***
12 '
13 IN$ = STRING$(ABS(FL)," "):WD%=0:WS%=0:WL%=0:RC%=0:W$=" "
14 PRINT STRING$(ABS(FL),".");:LOCATE ,POS(0)-ABS(FL)
15 LOCATE ,,1:W$ = INKEY$:IF W$ = "" THEN 15 ELSE IF LEN(W$) = 2 THEN 22
16 IF ABS(FL) = WL% THEN 19 ELSE IF FL>0 AND W$>=" " AND W$<=CHR$(126) THEN 29 ELSE IF FL<0 AND W$>"/" AND W$<":" THEN 29
17 IF W$="." AND WD%=0 THEN WD%=1:GOTO 29
18 IF (W$="-" OR W$="+") AND WS%=0 AND WL%=0 THEN WS%=1:GOTO 29
19 IF W$ = CHR$(8) AND WL%>0 THEN GOSUB 30:MID$(IN$,WL%,1)=" ":WL%=WL%-1:PRINT CHR$(29);:PRINT ".";:PRINT CHR$(29);:GOTO 15
20 IF W$ = CHR$(27) THEN LOCATE ,POS(0)-WL%:GOTO 13
21 IF W$ = CHR$(13) THEN GOTO 28 ELSE GOTO 15
22 W$ = RIGHT$(W$,1)
23 IF W$ = CHR$(75) AND WL%>0 THEN GOSUB 30:MID$(IN$,WL%,1)=" ":WL%=WL%-1:PRINT CHR$(29);:PRINT ".";:PRINT CHR$(29);:GOTO 15
24 IF W$ >= CHR$(59) AND W$ <= CHR$(68) AND WL%=0 THEN RC% = ASC(W$)-58:GOTO 28
25 IF W$=CHR$(72) AND WL%=0 THEN RC%=11:GOTO 28
26 IF W$=CHR$(80) AND WL%=0 THEN RC%=12:GOTO 28
27 GOTO 15
28 PRINT STRING$(ABS(FL)-WL%," ");:IN$ = LEFT$(IN$,WL%):LOCATE ,,0:RETURN
29 PRINT W$;:WL%=WL%+1:MID$(IN$,WL%,1)=W$:IF ABS(FL) = 1 THEN 31 ELSE GOTO 15
30 IF MID$(IN$,WL%,1)="." THEN WD%=0 ELSE IF (MID$(IN$,WL%,1)="+" OR MID$(IN$,WL%,1)="-") THEN WS%=0
31 LOCATE ,,0:RETURN
35 '  ** End of input routine  **
100 KEY OFF:FOR X=1 TO 10:KEY X,"":NEXT:WIDTH "LPT1:",255:LOCATE ,,0,2,10
105 DEFINT A-Z:B$=SPACE$(80):B1$=SPACE$(40):ZZ=0:DF$="N"
110 DIM M$(20),KW$(42),NT$(42),KP(42),DL(100),JP$(127)
130 DATA 01,02,03,04,05,06,07,08,09,10,11,12,13,14,15,16,17,18,19,20,21
131 DATA 22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42
140 FOR X = 1 TO 42:READ NT$(X):NEXT
300 CLS:COLOR 15,0:LOCATE 4,25:PRINT STRING$(31,"*"):PRINT TAB(25)"*" TAB(55)"*":PRINT TAB(25)"*" TAB(55)"*":PRINT TAB(25)"*" TAB(55)"*":PRINT TAB(25)"*" TAB(55)"*"
305 PRINT TAB(25)"*" TAB(55)"*":PRINT TAB(25)"*" TAB(55)"*":PRINT TAB(25)"*" TAB(55)"*"
306 PRINT TAB(25)"*" TAB(55)"*":PRINT TAB(25)"*" TAB(55)"*":PRINT TAB(25)STRING$(31,"*")
310 LOCATE 6,31:PRINT "Welcome to AUTOFILE":LOCATE 8,38:PRINT "from":LOCATE 10,28:PRINT "CUSTOM DATA SERVICES, INC":LOCATE 12,37:PRINT "Ver 1.0":COLOR 7,0
320 GOSUB 6000
500 ON ERROR GOTO 6100
510 LOCATE 17,25:PRINT "> Enter filespec: ";:FL=8:GOSUB 10:IF IN$ = "" THEN CLS:SYSTEM
520 P=INSTR(IN$,".")
530 IF P>0 THEN E$="INVALID -- NO EXTENSION ALLOWED":GOSUB 6010:GOTO 510
540 FS$=IN$
550 OPEN"I",1,FS$+".KEY":ON ERROR GOTO 9000
560 FOR X=1 TO 42:INPUT#1,KW$(X),KP(X):NEXT
570 INPUT #1,KI,KD:CLOSE 1
580 OPEN"R",2,FS$+".IND",256
590 FOR X=1 TO 127:FIELD#2,(X-1)*2ASDU$,2ASJP$(X):NEXT
600 FIELD#2,254ASDU$,2ASJX$
610 OPEN"R",3,FS$+".DAT",256
620 FOR X=1 TO 3:FIELD#3,(X-1)*82ASDU$,80ASHD$(X),2ASHB$(X):NEXT
630 FIELD#3,246ASDU$,2ASHF$,2ASHN$
1000 'Menu
1010 CLS:F$="N"
1020 GOSUB 6070:LOCATE 24,1:PRINT "MAINTENANCE MENU:      " TAB(26)"- Keywords" TAB(42)"- Data" TAB(55)"- End program";:COLOR 0,7:LOCATE 24,24:PRINT "K";:LOCATE 24,40:PRINT "D";:LOCATE 24,53:PRINT "E";:COLOR 7,0
1030 GOSUB 6200
1040 IF IN$="K" OR IN$="k" THEN 2000 ELSE IF IN$="D" OR IN$="d" THEN 3000 ELSE IF IN$="E" OR IN$="e" THEN 4000
1050 GOTO 1030
2000 'Index
2010 CLS
2020 GOSUB 6070:GOSUB 6220
2030 LOCATE 24,1:PRINT "KEYWORD MAINTENANCE:       - Add      - Delete      - Return to menu";:COLOR 0,7:LOCATE 24,26:PRINT "A";:LOCATE 24,37:PRINT "D";:LOCATE 24,51:PRINT "R";:COLOR 7,0
2040 GOSUB 6200:IF IN$="R" OR IN$="r" THEN 1000
2050 IF IN$="D" OR IN$="d" THEN 2300
2055 GOSUB 6080
2060 IF IN$<>"A" AND IN$<>"a" THEN 2030
2070 'Add keys
2080 LOCATE 24,1:PRINT "- ADD -             Enter keyword: ";:FL=12:GOSUB 10:GOSUB 6080:IF IN$="" THEN 2030
2090 IF LEN(IN$)<2 THEN E$="KEYWORDS CANNOT BE ONE CHARACTER LONG":GOSUB 6010:GOTO 2080
2095 IF LEN(IN$)=2 THEN IF IN$>"00" AND IN$<"43" THEN E$="KEYWORD OF 01 TO 42 NOT ALLOWED":GOSUB 6010:GOTO 2080
2100 FOR X=1 TO 42
2110 IF KW$(X)=IN$ THEN E$="DUPLICATE KEYWORD":GOSUB 6010:GOTO 2080
2120 NEXT
2122 FOR X=1 TO 42:IF KP(X)=0 THEN 2130 ELSE NEXT
2125 E$="KEYWORD FILE FULL":GOSUB 6010:GOTO 2030
2130 KW$(X)=IN$:SK$="Y"
2140 IF X>28 THEN DX=X-25:DY=54 ELSE IF X>14 THEN DX=X-11:DY=30 ELSE DX=X+3:DY=6
2150 LOCATE DX,DY:PRINT KW$(X);:LOCATE 24,1:PRINT "Initializing index record";:GOSUB 6300:KP(X)=XI:GOSUB 7150:GOSUB 7160
2155 GOSUB 6080
2160 LOCATE 24,1:PRINT "Reindexing with new keyword";
2170 XD=1:SV$=KW$(X):C=0
2180 GOSUB 6350
2190 IF RK$="Y" THEN GOSUB 6400:C=C+1:LOCATE 24,75:PRINT C;:XD=XD+1:GOTO 2180
2200 GOSUB 6080:GOTO 2030
2300 'Del keys
2310 GOSUB 6080
2320 LOCATE 24,1:PRINT "- DELETE -          Enter keyword #: ";:FL=-2:GOSUB 10:GOSUB 6080:IF IN$="" THEN 2030
2340 N=VAL(IN$):IF N<1 OR N>42 THEN E$="NUMBER MUST BE FROM 1 TO 42":GOSUB 6010:GOTO 2320
2350 IF KP(N)=0 THEN E$="KEYWORD NUMBER NOT IN USE":GOSUB 6010:GOTO 2320
2360 XI=KP(N):LOCATE 24,1:PRINT "Deleting keyword chain";
2370 GOSUB 7100:IS=CVI(JX$):IX=KI:GOSUB 7150:GOSUB 7160
2380 KI=XI:SK$="Y"
2390 IF IS>0 THEN XI=IS:GOTO 2370
2400 KP(N)=0:KW$(N)="":IF N>28 THEN DX=N-25:DY=54 ELSE IF N>14 THEN DX=N-11:DY=30 ELSE DX=N+3:DY=6
2410 LOCATE DX,DY:PRINT SPC(12);
2420 GOSUB 6080:GOTO 2030
3000 'Data
3010 CLS:GOSUB 6070:F$="N"
3020 LOCATE 24,1:PRINT "DATA MAINT:     dd    dit    elete    rint    ext    ind    eturn";:COLOR 0,7:LOCATE 24,16:PRINT "A";:LOCATE 24,22:PRINT "E";:LOCATE 24,29:PRINT "D";:LOCATE 24,38:PRINT "P";
3025 LOCATE 24,46:PRINT "N";:LOCATE 24,53:PRINT "F";:LOCATE 24,60:PRINT "R";:COLOR 7,0
3030 GOSUB 6200:PP=INSTR("AaEeDdPpNnFfRr",IN$):GOSUB 6080
3040 ON PP GOTO 3060,3060,3200,3200,3300,3300,3400,3400,3700,3700,3500,3500,3760,3760
3050 GOTO 3020
3060 'Add
3065 IF DF$="Y" THEN GOSUB 8200
3070 CLS:GOSUB 6070:F$="N":LOCATE 24,1:PRINT "- ADD -";:GOSUB 6075
3080 GOSUB 6000:GOSUB 5000:GOSUB 6080
3090 FOR X=1 TO 20:IF M$(X)<>B$ THEN 3100 ELSE NEXT :GOTO 3000
3100 GOSUB 6780:FR=XD:GF=FR:GOSUB 6600:GOSUB 6880
3110 F$="Y":GOTO 3020
3200 'Edit
3205 IF DF$="Y" THEN GOSUB 8200
3210 IF F$<>"Y" THEN E$="EDIT WHAT?  --  DO <F>IND FIRST":GOSUB 6010:GOTO 3020
3220 LOCATE 24,1:PRINT "- EDIT -";:GOSUB 6075
3230 GOSUB 5000:GOSUB 6080
3240 FOR X=1 TO 20:IF M$(X)<>B$ THEN 3255 ELSE NEXT
3245 IF XD<>GF THEN XD=GF:GOSUB 7200
3250 GOSUB 6840:GOSUB 8000:GOTO 3000
3255 IF XD<>GF THEN XD=GF:GOSUB 7200
3260 GOSUB 6600:GOSUB 6880
3270 GOTO 3020
3300 'Del
3310 IF F$<>"Y" THEN E$="DELETE WHAT?  --  DO <F>IND FIRST":GOSUB 6010:GOTO 3020
3320 LOCATE 24,1:PRINT "- DELETE -            Confirm delete (Y or N) ";:GOSUB 6200:IF IN$="N" OR IN$="n" THEN 3000
3330 IF IN$<>"Y" AND IN$<>"y" THEN 3320
3335 IF XD<>FR THEN XD=FR:GOSUB 7200
3340 GOSUB 6080:GOSUB 6840:GOSUB 8000:F$="D":CLS:GOSUB 6070:GOTO 3020
3400 'Print
3410 IF F$<>"Y" THEN E$="PRINT WHAT?  --  DO <F>IND FIRST":GOSUB 6010:GOTO 3020
3420 LOCATE 24,1:PRINT "- PRINT -         Press 'P' to print or 'C' to cancel";:GOSUB 6200:IF IN$="C" OR IN$="c" THEN 3020 ELSE IF IN$<>"P" AND IN$<>"p" THEN 3420
3430 FOR X=1 TO 20:LPRINT M$(X):NEXT
3440 GOSUB 6080:GOTO 3020
3500 'Find
3510 CLS:GOSUB 6070:GOSUB 6220
3520 XD=1:XE=0:LOCATE 24,1:PRINT "- FIND -     Enter number of keyword or string to search for: ";:FL=15:GOSUB 10:IF IN$="" OR IN$=STRING$(LEN(IN$)," ") THEN 3000 ELSE GOSUB 6080
3530 IN=VAL(IN$)
3540 IF LEN(IN$)<3 AND IN<43 AND IN>0 AND KP(IN)<>0 THEN 3600
3545 'Find string
3550 SV$=IN$:F$="N"
3560 LOCATE 24,1:PRINT "Search on string = ";SV$;
3570 GOSUB 6350:GOSUB 6080:IF RK$="E" THEN E$="END OF FILE":GOSUB 6010:IF F$="N" THEN 3520 ELSE GOTO 3020
3590 XE=XD:XD=GF:GOSUB 7200:GOSUB 8050:GOTO 3020
3600 'Find key
3610 SV$="":XI=KP(IN):GOSUB 7100:GOSUB 7130:LP=0:F$="N"
3620 IF LP=127 THEN 3670
3630 FOR LX=LP+1 TO 127
3640 IP=CVI(JP$(LX)):IF IP=0 THEN 3670
3650 XD=IP:GOSUB 7200:IF GF<>0 THEN GOSUB 8050:LP=LX:GOTO 3020
3660 NEXT LX
3670 IF IX>0 THEN XI=IX:GOSUB 7100:GOSUB 7130:LP=0:GOTO 3630
3675 E$="END OF INDEX":GOSUB 6010:IF F$="N" THEN 3520 ELSE 3020
3700 'Next
3710 IF F$<>"Y" AND F$<>"D" THEN E$="NEXT WHAT?  --  DO <F>IND FIRST":GOSUB 6010:GOTO 3020
3720 IF SV$="" THEN 3620 ELSE XD=XE+1:GOTO 3560
3750 'Return
3760 GOTO 1000
4000 'End
4005 IF DF$="Y" THEN GOSUB 8200
4010 CLS
4020 IF SK$="Y" THEN GOSUB 7000
4030 CLOSE : SYSTEM
5000 ' ** Full screen editor **
5010 LOCATE 3,1,1
5020 WC%=1:WR%=1
5030 W$=INKEY$:IF W$="" THEN 5030
5040 IF W$>= CHR$(32) AND W$<= CHR$(126) THEN 5230 ELSE IF LEN(W$) = 2 THEN 5090
5050 IF W$=CHR$(8) THEN IF WC%>1 THEN WC%=WC%-1:PRINT CHR$(29);:GOTO 5030 ELSE IF WR%>0 THEN WR%=WR%-1:LOCATE WR%+2,80:WC%=80:GOTO 5030
5060 IF W$=CHR$(9) THEN LOCATE WR%+2,80:WC%=80:GOTO 5030
5070 IF W$=CHR$(13) THEN IF WR%<20 THEN WR%=WR%+1:LOCATE WR%+2,1:WC%=1:GOTO 5030
5080 GOTO 5030
5090 W$=RIGHT$(W$,1)
5100 IF W$=CHR$(75) THEN IF WC%>1 THEN WC%=WC%-1:PRINT CHR$(29);:GOTO 5030 ELSE IF WR%>1 THEN WR%=WR%-1:LOCATE WR%+2,80:WC%=80:GOTO 5030
5110 IF W$=CHR$(15) THEN LOCATE WR%+2,1:WC%=1:GOTO 5030
5120 IF W$=CHR$(77) THEN IF WC%<80 THEN PRINT CHR$(28);:WC%=WC%+1:GOTO 5030 ELSE IF WR%<20 THEN WR%=WR%+1:LOCATE WR%+2,1:WC%=1:GOTO 5030
5130 IF W$=CHR$(72) THEN IF WR%>1 THEN WR%=WR%-1:LOCATE WR%+2,WC%:GOTO 5030
5140 IF W$=CHR$(80) THEN IF WR%<20 THEN WR%=WR%+1:LOCATE WR%+2,WC%:GOTO 5030
5150 IF W$=CHR$(73) OR W$=CHR$(71) THEN 5010
5160 IF W$=CHR$(81) THEN LOCATE 22,1:WR%=20:WC%=1:GOTO 5030
5170 IF W$=CHR$(82) THEN IF WC%<80 THEN LOCATE,,0:W1$=" "+MID$(M$(WR%),WC%,80-WC%):MID$(M$(WR%),WC%,LEN(W1$))=W1$:PRINT W1$;:PRINT STRING$(LEN(W1$),29);:LOCATE,,1:GOTO 5030
5180 IF W$=CHR$(83) THEN IF WC%<80 THEN LOCATE,,0:W1$=+MID$(M$(WR%),WC%+1,81-WC%)+" ":MID$(M$(WR%),WC%,LEN(W1$))=W1$:PRINT W1$;:PRINT STRING$(LEN(W1$),29);:LOCATE,,1:GOTO 5030
5190 IF W$=CHR$(59) OR W$=CHR$(61) THEN GOSUB 5270:GOTO 5030
5200 IF W$=CHR$(60) THEN GOSUB 5350:GOTO 5030
5210 IF W$=CHR$(62) THEN 5260
5220 GOTO 5030
5230 PRINT W$;:MID$(M$(WR%),WC%,1)=W$:WC%=WC%+1
5240 IF WC%>80 THEN IF WR%<20 THEN WR%=WR%+1:WC%=1:LOCATE WR%+2,1 ELSE WC%=80:PRINT CHR$(29);
5250 GOTO 5030
5260 LOCATE ,,0:RETURN
5270 'OPEN/RPT RTN
5280 LOCATE,,0
5290 IF WR%=20 THEN 5330
5300 FOR W% = 20 TO WR%+1 STEP -1
5310 M$(W%)=M$(W%-1):LOCATE W%+2,1:PRINT M$(W%);
5320 NEXT
5330 IF W$=CHR$(59) THEN M$(WR%)=SPACE$(80)
5340 LOCATE WR%+2,1:PRINT M$(WR%);:PRINT STRING$(81-WC%,29);:LOCATE,,1:RETURN
5350 'CLOSE RTN
5360 LOCATE,,0
5370 IF WR%=20 THEN 5410
5380 FOR W% = WR% TO 19
5390 M$(W%)=M$(W%+1):LOCATE W%+2,1:PRINT M$(W%);
5400 NEXT
5410 M$(20)=SPACE$(80):LOCATE 22,1:PRINT M$(20);
5420 LOCATE WR%+2,WC%,1:RETURN
5430 ' ** End of full screen routine **
6000 FOR X=1 TO 20 :M$(X)=B$:NEXT :RETURN
6010 'Error
6015 BEEP
6020 COLOR 31:LOCATE 25,40-(LEN(E$)/2),0:PRINT E$;
6030 EKEY$=INKEY$:IF EKEY$<>CHR$(27) THEN 6030 ELSE COLOR 7:LOCATE 25,1:PRINT SPC(79);:LOCATE ,,1:RETURN
6070 PRINT FS$ " " STRING$(29-LEN(FS$),"-") " ";:COLOR 0,7:PRINT " A U T O F I L E ";:COLOR 7,0:PRINT " " STRING$(20,"-") " " DATE$;:LOCATE 23,1:PRINT STRING$(80,223);:RETURN
6075 LOCATE 24,22:PRINT "- Open       - Close       - Repeat       - End";:COLOR O,7:LOCATE 24,19:PRINT "F1";:LOCATE 24,32:PRINT "F2";:LOCATE 24,46:PRINT "F3";:LOCATE 24,61:PRINT "F4";:COLOR 7,0:RETURN
6080 LOCATE 24,1:PRINT SPC(79);:RETURN
6100 LOCATE 19,25:PRINT "> File not found. Create? (Y or N) ";:FL=1:GOSUB 10:IF IN$="" THEN 6100
6110 IF IN$<>"N" AND IN$<>"n" AND IN$<>"Y" AND IN$<>"y" THEN 6100
6120 LOCATE 19,25:PRINT B1$;:IF IN$= "N" OR IN$ ="n" THEN RESUME 510
6160 D=0
6170 OPEN "O",1,FS$+".KEY":GOSUB 7020
6180 OPEN "R",2,FS$+".IND":OPEN "R",3,FS$+".DAT"
6190 CLOSE:ON ERROR GOTO 9000:RESUME 580
6200 LOCATE 24,75:PRINT "==> ";:FL=1:GOSUB 10:IF IN$="" THEN 6200
6210 LOCATE 24,75:PRINT SPC(5);:RETURN
6220 'Paint keys
6230 D=0:DX=4:DY=2:FOR X = 1 TO 42:LOCATE DX,DY+D:PRINT NT$(X)+")" " " KW$(X);:DX=DX+1
6240 IF DX>17 THEN DX=4:D=D+24
6250 NEXT :RETURN
6300 'Next avail indx
6310 IF KI=0 THEN XI=(LOF(2)/256)+1:GOTO 6330
6320 XI=KI:GOSUB 7110:KI=CVI(JX$):SK$="Y"
6330 FOR Z=1 TO 127:LSET JP$(Z)=MKI$(ZZ):NEXT :IX=0
6340 RETURN
6350 'String search
6360 IF XD>LOF(3)/256 THEN RK$="E":GOTO 6395
6370 GOSUB 7210
6380 FOR Z=1 TO 4:P=INSTR(HD$(Z),SV$):IF P>0 THEN RK$="Y":GOTO 6395 ELSE NEXT
6390 XD=XD+1:GOTO 6360
6395 RETURN
6400 'Add to indx
6410 IF KP(X)=XI THEN 6440
6420 XI=KP(X)
6430 GOSUB 7100:GOSUB 7130
6440 FOR Z=1 TO 127
6445 IP=CVI(JP$(Z))
6450 IF IP=GF THEN 6560
6455 IF IP=0 THEN 6470
6460 NEXT Z
6470 IF IX>0 THEN XI=IX:GOTO 6430
6480 IF KP(X)=XI THEN 6510
6490 XI=KP(X)
6500 GOSUB 7100:GOSUB 7130
6510 FOR Z=1 TO 127
6515 IP=CVI(JP$(Z))
6520 IF IP=0 THEN LSET JP$(Z)=MKI$(GF):GOSUB 7150:GOSUB 7160:GOTO 6560
6530 NEXT Z
6540 IF IX>0 THEN XI=IX:GOTO 6500
6550 GOSUB 6300:GOTO 6500
6560 RETURN
6600 'Add/rew
6610 LOCATE 24,1:PRINT "Adding/rewriting page";
6620 Y=1:Z=0
6630 FOR X=1 TO 20
6640 IF X+Z+1=21 THEN 6670
6650 IF M$(X+Z+1)<>B$ THEN 6670
6660 Z=Z+1:GOTO 6640
6670 GOSUB 6730:X=X+Z:Z=0
6680 NEXT X
6690 X1=GN:GN=0:GOSUB 7220
6700 IF X1=0 THEN 6720
6710 XD=X1:GOSUB 7200:GOSUB 6840
6720 GOSUB 6080:RETURN
6730 'Load buf
6740 IF Y<>4 THEN 6770
6760 IF GN>0 THEN GOSUB 7220:XD=GN:GOSUB 7200:GOSUB 6810:GOTO 6765
6762 IF KD>0 THEN GN=KD ELSE GN=(LOF(3)/256)+1:IF GN=XD THEN GN=GN+1
6764 GOSUB 7220:GOSUB 6780
6765 Y=1
6770 LSET HD$(Y)=M$(X):LSET HB$(Y)=MKI$(Z):Y=Y+1:RETURN
6780 'Get next
6790 IF KD>0 THEN XD=KD:GOSUB 7200:KD=GN:SK$="Y" ELSE XD=(LOF(3)/256)+1
6800 GOSUB 6810:GF=FR:GN=0:RETURN
6810 'Init
6820 FOR X7=1 TO 3:LSET HD$(X7)=B1$:LSET HB$(X7)=MKI$(ZZ):NEXT
6830 RETURN
6840 'Del page
6850 X1=GN:GN=KD:KD=XD:GOSUB 6810:GF=0:GOSUB 7220:SK$="Y"
6860 IF X1>0 THEN XD=X1:GOSUB 7200:GOTO 6850
6870 RETURN
6880 'Indx page
6885 LOCATE 24,1:PRINT "Indexing file";
6890 FOR X = 1 TO 42
6900 IF KP(X)=0 THEN 6930
6905 FOR Y = 1 TO 20
6910 IF M$(Y)=B$ THEN 6925
6915 P=INSTR(M$(Y),KW$(X))
6920 IF P>0 THEN GOSUB 6400:GOTO 6930
6925 NEXT Y
6930 NEXT X
6935 GOSUB 6080:RETURN
7000 'Write keys
7010 OPEN "O",1,FS$+".KEY"
7020 FOR Z=1 TO 42:WRITE#1,KW$(Z),KP(Z):NEXT
7030 WRITE#1,KI,KD
7040 CLOSE 1:RETURN
7100 'Indx I/O
7110 GET 2,XI:RETURN
7130 IX=CVI(JX$):RETURN
7150 LSET JX$=MKI$(IX):RETURN
7160 PUT 2,XI:RETURN
7200 'Data I/O
7210 GET 3,XD:GF=CVI(HF$):GN=CVI(HN$):RETURN
7220 LSET HF$=MKI$(GF):LSET HN$=MKI$(GN):PUT 3,XD:RETURN
8000 'Add del list
8010 FOR Z=1 TO 100
8020 IF DL(Z)=0 THEN DL(Z)=FR:GOTO 8040
8030 NEXT
8040 DF$="Y":RETURN
8050 'Paint page
8060 FR=GF:CLS:GOSUB 6070:GOSUB 6000
8070 LY=1
8080 FOR LZ=1 TO 3
8085 IF LY>20 THEN 8130
8090 LOCATE LY+2,1:PRINT HD$(LZ);:M$(LY)=HD$(LZ)
8100 LY=LY+CVI(HB$(LZ))+1
8110 NEXT
8120 IF GN>0 THEN XD=GN:GOSUB 7200:GOTO 8080
8130 F$="Y":RETURN
8200 'Indx del maint
8205 GOSUB 6080:LOCATE 24,1:PRINT "Performing index file maintenance";
8210 FOR L=1 TO 42
8220 IF KP(L)=0 THEN 8340
8230 XI=KP(L)
8240 GOSUB 7100:GOSUB 7130
8250 FOR M=1 TO 127
8260 IP=CVI(JP$(M))
8270 IF IP=0 THEN 8320
8280 FOR N=1 TO 100
8290 IF DL(N)=0 THEN 8310
8300 IF IP=DL(N) THEN LSET JP$(M)=MKI$(ZZ):A$="Y" ELSE NEXT N
8310 NEXT M
8320 IF A$="Y" THEN GOSUB 8400:A$="N"
8330 IF IX>0 THEN XI=IX:GOTO 8240
8340 NEXT L
8350 DF$="N"
8360 FOR L=1 TO 100
8365 IF DL(L)=0 THEN 8390
8370 DL(L)=0
8380 NEXT
8390 RETURN
8400 'Shrink
8410 FOR M1=1 TO 126
8420 IP=CVI(JP$(M1))
8430 IF IP>0 THEN 8480
8440 FOR N1=M1+1 TO 127
8450 IQ=CVI(JP$(N1))
8460 IF IQ>0 THEN LSET JP$(M1)=MKI$(IQ):LSET JP$(N1)=MKI$(ZZ):GOTO 8480
8470 NEXT N1:GOTO 8490
8480 NEXT M1
8490 GOSUB 7160:RETURN
9000 RESUME
```
{% endraw %}

## CRC.TXT

{% raw %}
```
PC-SIG Disk No. #110, version v1 

The following is a list of the file checksums which should be produced by
the CRCK4 program on disk #9 (and others).  If the CRC numbers do not match
you may have a bad file.  To use type:  CRCK4 <filespec>

CRCK4 output for this disk:


CRCK ver 4.2B (MS DOS VERSION )
CTL-S pauses, CTL-C aborts

--> FILE:  RAMDISK .SYS         CRC = AA 21

--> FILE:  HC      .DOC         CRC = D1 9D

--> FILE:  PRINTER .COM         CRC = 92 E5

--> FILE:  PRINTER .DAT         CRC = CC C5

--> FILE:  PRINTER .DOC         CRC = F8 73

--> FILE:  DEFINE  .BAS         CRC = 81 20

--> FILE:  DEFINE  .DOC         CRC = E0 6A

--> FILE:  DOSCOLOR.BAS         CRC = F0 B3

--> FILE:  UPPER   .COM         CRC = 4E E5

--> FILE:  DOSCOLOR.BAT         CRC = D2 67

--> FILE:  PRINTER .ASM         CRC = 2A 7E

--> FILE:  RAMDISK .DOC         CRC = 4A C7

--> FILE:  READ    .ME          CRC = D3 F4

--> FILE:  ROMBIOS .ASM         CRC = 34 7C

--> FILE:  SIZER   .ASM         CRC = 25 C8

--> FILE:  STEEPDES.APL         CRC = 1F 66

--> FILE:  SCRN    .ASM         CRC = 73 88

--> FILE:  AUTOFILE.BAS         CRC = 1B 31

--> FILE:  AUTOFILE.BAT         CRC = 05 0D

--> FILE:  AUTOFILE.DOC         CRC = FE 18

--> FILE:  SCRN    .DOC         CRC = 90 8D

--> FILE:  TABLET  .BAS         CRC = CE 40

--> FILE:  UPPER   .ASM         CRC = 6D 0F

--> FILE:  SIZER   .COM         CRC = 65 9D

--> FILE:  SIZER   .DOC         CRC = 6E 0C

--> FILE:  UPPER   .DOC         CRC = BE 70

--> FILE:  WHEREIS .COM         CRC = DD CA

--> FILE:  WHEREIS .DOC         CRC = 0C 0E

--> FILE:  XT370   .DOC         CRC = DE 74

--> FILE:  HC      .COM         CRC = 21 3F

 ---------------------> SUM OF CRCS = E3 A5

DONE

These and other Public Domain and user-supported programs from:

PC Software Interest Group
1125 Stewart Ct  Suite G
Sunnyvale, CA 94086
(408) 730-9291
```
{% endraw %}

## DEFINE.BAS

{% raw %}
```bas
10 REM DSNAME=DEFINE.BAS
20 GOTO 40
30 GOSUB 50135:PUT(200,80),FI%:GOTO 250 'LINK IF LOADED DATA
40 REM ORIGINALLY WRITTEN 03/18/82 THIS PROGRAM ALLOWS YOU TO DEFINE SPECIAL CHARACTERS AND SUCH.
50 REM THIS VERSION COMPLETED ON 6/20/82.  FOR COMMENTS AND SUGGESTIONS,
60 REM PLEASE CONTACT BRUCE GUTHRIE BY MAIL AT
70 REM    P.O. BOX 710
80 REM    WASHINGTON, D.C. 20044
90 REM Copyright Bruce Guthrie 1982
100 'NOTE that program performs a GET function, moving figure into array FIGURE%
110 'PUT function is used to plot it somewhere
120 OPTION BASE 0:KEY OFF:SCREEN 1:COLOR 0,7:DEFINT A-Z
130 FOR I=1 TO 10:KEY I,"":NEXT I
140 DIM F(1350):WINDX1=240:WINDY1=120
150 CLS:PRINT TAB(15);"DEFINE"
160 PRINT TAB(8);"(c) Bruce Guthrie 1982"
170 INPUT "Need instructions [Y/N]? ",A$:IF A$="n" OR A$="N" THEN 210:ELSE IF A$<>"y" AND A$<>"Y" THEN 170
180 OPEN "DEFINE.INS" FOR INPUT AS #1:I=0:WIDTH 80
190 I=I+1:IF EOF(1) THEN INPUT "Press RETURN? ",A$:WIDTH 40:GOTO 210
200 INPUT #1,A$:PRINT A$:IF I<22 THEN 190:ELSE I=0:INPUT "Press RETURN? ",A$:GOTO 190
210 CLS:PRINT "Is file stored already [Y/N] caps only ? ";:STORED$="N"
220 A$=INKEY$:IF A$<>"Y" AND A$<>"N" THEN 220:ELSE PRINT A$:IF A$="N" THEN CLS:GOTO 250
230 STORED$="Y":INPUT "File name to load? ",A$:INPUT "Storage device [A/B]? ",B$:IF B$<>"A" AND B$<>"B" THEN 230
240 CLS:CHAIN MERGE B$+":"+A$+".PLT",30,ALL
250 FOR I=1 TO 21:LOCATE I,1:PRINT".....................";:NEXT I
260 FOR I=1 TO 21 STEP 5:LOCATE I,1:PRINT"---------------------";:NEXT I
270 FOR I=1 TO 21:FOR J=1 TO 21 STEP 5:LOCATE I,J:PRINT "|";:NEXT J,I
280 LINE(199,79)-(301,181),,B:FOR I=200 TO 300 STEP 20:LINE(I,75)-STEP(0,4):LINE(I,181)-STEP(0,4):NEXT I:FOR I=80 TO 180 STEP 20:LINE(195,I)-STEP(4,0):LINE(301,I)-STEP(4,0):NEXT I:C=3:GOSUB 550
290 GOSUB 640:PRINT "Checking grid."
300 A$="@":FOR X=WINDX1 TO WINDX2:FOR Y=WINDY1 TO WINDY2:IF POINT(X,Y)=3 THEN GOSUB 650
310 NEXT Y,X:GOSUB 640
320 X=WINDX1+10:Y=WINDY1+10:GOSUB 660:PREVX=X1:PREVY=X1:LET A$=CHR$(SCREEN(Y1,X1))
330 LOCATE 2,25:PRINT "USE DIREC-":LOCATE 3,25:PRINT "TION KEYS":LOCATE 4,25:PRINT "TO POSITION,":LOCATE 5,25:PRINT "PF'S TO USE.":LOCATE 6,25:PRINT "PF 1=CHOOSE/":LOCATE 7,25:PRINT " DE-CHOOSE":LOCATE 8,25:PRINT "PF 2=MEMORIZE IT"
340 REM START OF LOOP FOR MOVEMENT
350 LOCATE Y1,X1:PRINT " ";:LOCATE Y1,X1:PRINT A$;:X$=INKEY$:IF LEN(X$)<>2 THEN 350:ELSE IN=ASC(MID$(X$,2,1))
360 IF IN=59 GOTO 370 ELSE IF IN=60 GOTO 410 ELSE IF IN=72 GOTO 560 ELSE IF IN=75 GOTO 580 ELSE IF IN=77 GOTO 600 ELSE IF IN=80 GOTO 620:ELSE GOTO 350
370 IF POINT(X,Y)=3 THEN PRESET(X,Y):LOCATE Y1,X1:PRINT ".";:GOTO 390:ELSE PSET(X,Y)
380 LOCATE PREVY,PREVX:PRINT A$;
390 CHAR=SCREEN(Y1,X1):IF POINT(X,Y)=0 THEN LET A$=CHR$(CHAR) ELSE LET A$="@"
400 PREVX=X1:PREVY=Y1:GOSUB 660:GOTO 350
410 REM FIGURE DEFINED, ALLOWED NEW FOCUS OR NOT
420 GOSUB 640:PRINT "Define another":PRINT "window [Y/N]? ";
430 A$=INKEY$:IF A$="" THEN 430:ELSE PRINT A$:LET A$=MID$(A$,1,1):IF A$="y" THEN A$="Y" ELSE IF A$="n" THEN A$="N"
440 IF A$="N" THEN 670:ELSE IF A$<>"Y" THEN 420:ELSE GOSUB 640:PRINT "Cursor controls move.":PRINT "Use PF 2 to accept.";
450 X$=INKEY$:IF LEN(X$)<>2 THEN 450:ELSE IN=ASC(MID$(X$,2,1))
460 IF IN=60 THEN GOSUB 640:GOTO 250:ELSE C=0:GOSUB 550:IF IN=72 GOTO 470:ELSE IF IN=75 GOTO 490:ELSE IF IN=77 GOTO 510:ELSE IF IN=80 GOTO 530:ELSE GOTO 540
470 WINDY1=WINDY1-20:IF WINDY1<80 THEN WINDY1=80
480 GOTO 540
490 WINDX1=WINDX1-20:IF WINDX1<200 THEN WINDX1=200
500 GOTO 540
510 WINDX1=WINDX1+20:IF WINDX1>280 THEN WINDX1=280
520 GOTO 540
530 WINDY1=WINDY1+20:IF WINDY1>160 THEN WINDY1=160
540 C=3:GOSUB 550:GOTO 450
550 WINDX2=WINDX1+20:WINDY2=WINDY1+20:LINE(195,WINDY1)-(195,WINDY2),C:LINE(WINDX1,75)-(WINDX2,75),C:RETURN
560 Y1=Y1-1:IF Y1=0 THEN Y1=1
570 GOTO 630
580 X1=X1-1:IF X1=0 THEN X1=1
590 GOTO 630
600 X1=X1+1:IF X1=22 THEN X1=21
610 GOTO 630
620 Y1=Y1+1:IF Y1=22 THEN Y1=21
630 X=WINDX1+X1-1:Y=WINDY1+Y1-1:GOTO 380
640 FOR I=22 TO 24:LOCATE I,1:PRINT SPACE$(21);:NEXT I:LOCATE 22,1:RETURN
650 LOCATE Y-WINDY1+1,X-WINDX1+1:PRINT A$;:RETURN
660 X1=X-WINDX1+1:Y1=Y-WINDY1+1:RETURN
670 GOSUB 640:PRINT "Done";:LOCATE 1,1:PRINT SPACE$(160):LOCATE 1,1:PRINT "Use cursor keys to set area to be":PRINT "read.  Use 1, 3, 7, and 9 to show ":PRINT "which edge is being worked on.":PRINT "Use PF 2 to set."
680 XMIN=199:XMAX=301:YMIN=79:YMAX=181:CX=1:CY=1:GET(200,80)-(300,180),F
690 A$=INKEY$:IF A$="" THEN 690:ELSE IF LEN(A$)<2 THEN 690
700 A=ASC(MID$(A$,2,1)):IF A=60 THEN 760:ELSE IF A=71 THEN CX=1:CY=1:GOTO 690:ELSE IF A=73 THEN CX=2:CY=1:GOTO 690:ELSE IF A=79 THEN CX=1:CY=2:GOTO 690:ELSE IF A=81 THEN CX=2:CY=2:GOTO 690
710 IF A=72 THEN:IF CY=1 THEN YMIN=YMIN-1:GOTO 750:ELSE YMAX=YMAX-1:GOTO 750
720 IF A=75 THEN:IF CX=1 THEN XMIN=XMIN-1:GOTO 750:ELSE XMAX=XMAX-1:GOTO 750
730 IF A=77 THEN:IF CX=1 THEN XMIN=XMIN+1:GOTO 750:ELSE XMAX=XMAX+1:GOTO 750
740 IF A<>80 THEN 690:ELSE IF CY=1 THEN YMIN=YMIN+1:GOTO 750:ELSE YMAX=YMAX+1
750 PUT(200,80),F,PSET:LINE(XMIN,YMIN)-(XMAX,YMAX),1,B:LINE(XMIN-1,YMIN-1)-(XMAX+1,YMAX+1),1,B:GOTO 690
760 GET(XMIN+1,YMIN+1)-(XMAX-1,YMAX-1),F
770 CLS:PRINT "This figure is defined for you:":PUT (100,20),F:LOCATE 21,1:FOR I=1 TO 1000:NEXT I
780 CLS:PRINT "Store at DATA statements for ":INPUT "BASIC program [Y/N]? ",A$:A$=MID$(A$,1,1):IF A$="n" THEN A$="N":ELSE IF A$="y" THEN A$="Y"
790 IF A$="N" THEN 930
800 INPUT "File name to save under? ",A$
810 IF INSTR(A$,".") >0 THEN PRINT "File extension ignored.":PRINT "`PLT' assigned.":A$=MID$(A$,1,INSTR(A$,',')-1)
820 A$=A$+".PLT":IF INSTR(A$,":")=2 THEN A$=MID$(A$,3)
830 INPUT"Storage device [A/B]? ",B$:IF B$<>"A" AND B$<>"B" THEN 830
840 PRINT "Storing file..."
850 A$=B$+":"+A$:OPEN A$ FOR OUTPUT AS #1:LS=4+INT(((XMAX-XMIN-1)*2+7)/8)*(YMAX-YMIN-1):LS=INT((LS+1)/2):I=0
860 PRINT #1,50000.+I;" DATA ";F(I);",";F(I+1);",";F(I+2);",";F(I+3);",";F(I+4);",";F(I+5);",";F(I+6);",";F(I+7);",";F(I+8);",";F(I+9):I=I+10:IF I<LS THEN 860
870 PRINT #1,"50135 DIM FI%(";LS-1;"):RESTORE 50000:FOR I=0 TO ";LS-1;":READ FI%(I):NEXT I:RETURN"
880 CLOSE
890 PRINT "DATA statements are stored as lines":PRINT "50000-50135.":PRINT "You can add it to a program":PRINT "by CHAIN MERGE ";A$
900 PRINT "Print figure via PUT(),FI% graphics ":PRINT "statement."
910 FOR I=1 TO 1000:NEXT I
920 PRINT "File created for you.":FILES B$+":*.plt"
930 END
65399 '** DONE - PRESS ENTER TO RETURN TO MENU **
```
{% endraw %}

## DOSCOLOR.BAS

{% raw %}
```bas
10 REM
20 REM  AUTHOR - JIM BRACKING
30 REM  DATE   - 11/27/83
40 REM  DISCRIPTION  -  SELECT A FOREGROUND,BACKGROUNG AND BORDER COLOR
50 REM                  AND CREATE A DEBUG SCRIPT FOR MODIFING THE "CLS"
60 REM                  COMMAND IN COMMAND.COM TO USE THESE COLORS.
70 REM
80 FOR I=0 TO 3:SCREEN 0,,I,I:CLS:NEXT I
90 KEY OFF:FOR I=1 TO 10
100 KEY I,""
110 NEXT I
120 SCREEN 0,,2,2:COLOR 7,0,0:CLS:KEY OFF
130 COLOR 7,0,0
140 CLS
150 DIM CTBL$(16)
160 CTBL$(0)="BLACK "
170 CTBL$(1)="BLUE  "
180 CTBL$(2)="GREEN "
190 CTBL$(3)="CYAN  "
200 CTBL$(4)="RED   "
210 CTBL$(5)="PURPLE"
220 CTBL$(6)="BROWN "
230 CTBL$(7)="WHITE "
240 CTBL$(8)="GRAY  "
250 CTBL$(9)="LT BLU"
260 CTBL$(10)="LT GRN"
270 CTBL$(11)="L CYAN"
280 CTBL$(12)="LT RED"
290 CTBL$(13)="VIOLET"
300 CTBL$(14)="YELLOW"
310 CTBL$(15)="HI WTE"
320  TITLE$="C O L O R    S E L E C T I O N"
330 ROW=1:GOSUB 1630
340 TITLE$="BACKGROUND COLOR"
350 ROW=3:GOSUB 1630
360 COL=12
370 FOR BG=0 TO 7
380 LOCATE 4,COL+1
390 IF BG=0 THEN COLOR 15 ELSE COLOR BG
400 PRINT CTBL$(BG);
410 COL=COL+8
420 NEXT BG
430 ROW=6:COL=1:TITLE$="FOREGROUND COLOR"
440 GOSUB 1750
450 FOR FG=0 TO 15
460 ROW=FG+6:COL=4
470 LOCATE ROW,COL
480 C=FG:IF C=0 THEN C=15
490 COLOR C,0
500 PRINT CTBL$(FG);
510 COL=COL+8
520 FOR BG=0 TO 7
530 C=BG
540 LOCATE ROW,COL
550 COLOR FG,BG
560 PRINT CTBL$(FG);
570 COL=COL+8
580 NEXT BG
590 NEXT FG
600 COLOR ,,0
610 COLOR 7,0,0:LOCATE 23,27
620 PRINT "PRESS THE F1 KEY FOR HELP"
630 SCREEN 0,,1,2:COLOR 7,0,0:CLS:KEY OFF
640 LOCATE 2,10:PRINT "FROM THE MAIN SCREEN"
650 LOCATE 3,18:PRINT "      F1    -  HELP SCREEN"
660 LOCATE 4,18:PRINT "      F10   -  CREATE DEBUG UPDATE FILE USING THE"
670 LOCATE 5,18:PRINT "               CURRENT COLORS AND EXIT"
680 LOCATE 6,18:PRINT "      PGUP  -  INCREMENT THE BORDER COLOR"
690 LOCATE 7,18:PRINT "      PGDN  -  DECREMENT THE BORDER COLOR"
700 LOCATE 8,18:PRINT "      ENTER -  WILL DISPLAY A SAMPLE SCREEN WITH"
710 LOCATE 9,18:PRINT "               THE SELECTED COLORS"
720 LOCATE 11,10:PRINT "FROM THE TEXT SCREEN"
730 LOCATE 12,18:PRINT "      ESC   -  RETURN TO MAIN SCREEN"
740 LOCATE 13,18:PRINT "      PGDN  -  INCREMENT THE BORDER COLOR"
750 LOCATE 14,18:PRINT "      PGDN  -  DECREMENT THE BORDER COLOR"
760 LOCATE 16,10:PRINT "FROM THE HELP SCREEN"
770 LOCATE 17,18:PRINT "      ESC   -  RETURN TO MAIN SCREEN"
780 SCREEN 0,,2,2
790 RPOS=0:CPOS=0:LOCATE RPOS+6,(CPOS*8)+11,1:BD=0
800 LOCATE ,,1,6,8
810 GOTO 1070
820 XKEY$=INKEY$:IF XKEY$="" THEN GOTO 820
830 IF ASC(XKEY$)=13 THEN GOTO 1170
840 IF LEN(XKEY$)<>2 THEN GOTO 930  'BAD KEY
850 IF ASC(MID$(XKEY$,2,1))=59 THEN GOTO 940
860 IF ASC(MID$(XKEY$,2,1))=68 THEN GOTO 1500
870  IF ASC(MID$(XKEY$,2,1))=73 THEN GOTO 1030
880  IF ASC(MID$(XKEY$,2,1))=81 THEN GOTO 1050
890 IF ASC(MID$(XKEY$,2,1))=72 THEN GOTO 980
900 IF ASC(MID$(XKEY$,2,1))=80 THEN GOTO 990
910 IF ASC(MID$(XKEY$,2,1))=75 THEN GOTO 1000
920 IF ASC(MID$(XKEY$,2,1))=77 THEN GOTO 1010
930 SOUND 100,6:GOTO 820
940 LOCATE ,,0:SCREEN 0,,1,1
950 XKEY$=INKEY$:IF XKEY$="" THEN GOTO 950
960 IF ASC(XKEY$)<>27 THEN GOTO 950
970 SCREEN 0,,2,2:GOTO 1070
980 IF RPOS=0 THEN GOTO 930 ELSE RPOS=RPOS-1:GOTO 1070
990 IF RPOS=15   THEN GOTO 930 ELSE RPOS=RPOS+1:GOTO 1070
1000 IF CPOS=0 THEN GOTO 930 ELSE CPOS=CPOS-1:GOTO 1070
1010 IF CPOS=7 THEN GOTO 930 ELSE CPOS=CPOS+1:GOTO 1070
1020 LOCATE RPOS+6,(CPOS*8)+11,1:GOTO 820
1030 BD=BD+1:IF BD>15 THEN BD=0
1040 COLOR ,,BD:GOTO 1070
1050 BD=BD-1:IF BD<0 THEN BD=15
1060 COLOR ,,BD
1070 CBD=BD:CFG=RPOS:CBG=CPOS
1080 LOCATE 25,33:COLOR 15,0
1090 PRINT "COLOR ";
1100 IF CFG<10 THEN PRINT USING "#";CFG; ELSE PRINT USING "##";CFG;
1110 PRINT ",";
1120 IF CBG<10 THEN PRINT USING "#";CBG; ELSE PRINT USING "##";CBG;
1130 PRINT ",";
1140 IF CBD<10 THEN PRINT USING "#";CBD; ELSE PRINT USING "##";CBD;
1150 PRINT "  ";
1160 GOTO 1020
1170 SCREEN 0,,3,3
1180 COLOR CFG,CBG,CBD:CLS
1190 LOCATE 1,1
1200 PRINT "                   ABCDEFGHIJKLMNOPQRSTUVWXYZ"
1210 PRINT "                   abcdefghijklmnopqrstuvwxyz"
1220 PRINT "                   0123456789!@#$%^&*()_+}{:~"
1230 PRINT "                          \,./;'`[]-="
1240 PRINT "       NOW YOU CAN ENTER SOMETHING. PRESS THE ESCAPE KEY TO RETURN"
1250 LOCATE 25,33
1260 PRINT "COLOR ";
1270 IF CFG<10 THEN PRINT USING "#";CFG; ELSE PRINT USING "##";CFG;
1280 PRINT ",";
1290 IF CBG<10 THEN PRINT USING "#";CBG; ELSE PRINT USING "##";CBG;
1300 PRINT ",";
1310 IF CBD<10 THEN PRINT USING "#";CBD; ELSE PRINT USING "##";CBD;
1320 PRINT "  ";
1330 XXROW=7:XXCOL=1:LOCATE XXROW,XXCOL,1,6,7
1340 XKEY$=INKEY$:IF XKEY$="" THEN GOTO 1340
1350 IF LEN(XKEY$)<>2 THEN GOTO 1380
1360 IF ASC(MID$(XKEY$,2,1))=73 THEN GOTO 1460
1370 IF ASC(MID$(XKEY$,2,1))=81 THEN GOTO 1480
1380 IF ASC(XKEY$)=13 THEN XXCOL=1:GOTO 1430
1390 IF ASC(XKEY$)=27 THEN SCREEN 0,,2,2:LOCATE ,,1,6,8:GOTO 1020
1400 PRINT XKEY$;
1410 XXCOL=XXCOL+1
1420 IF XXCOL>80 THEN XXCOL=1 ELSE GOTO 1340
1430 XXROW=XXROW+1
1440 IF XXROW<24 THEN LOCATE XXROW,XXCOL,1:GOTO 1340
1450 PRINT " ":XXROW=24:XXCOL=1:GOTO 1340
1460 BD=BD+1:IF BD>15 THEN BD=0
1470 CBD=BD:COLOR ,,CBD:GOTO 1250
1480 BD=BD-1:IF BD<0 THEN BD=15
1490 CBD=BD:COLOR ,,CBD:GOTO 1250
1500 OPEN "DEBUG.TXT" FOR OUTPUT AS #1
1510 PRINT #1,"A 2331"
1520 PRINT #1,"MOV AL,";HEX$(CBD)
1530 PRINT #1,"MOV DX,03D9"
1540 PRINT #1,"OUT DX,AL"
1550 PRINT #1,""
1560 PRINT #1,"A 2345"
1570 PRINT #1,"MOV BH,";HEX$((CBG*16)+CFG)
1580 PRINT #1,""
1590 PRINT #1,"W"
1600 PRINT #1,"Q"
1610 CLOSE #1
1620 SCREEN 0,,0,0:COLOR 7,0,0:CLS:LOCATE ,,1,6,7:SYSTEM
1630 L=LEN(TITLE$)
1640 COL=(80-L)/2:C=1
1650 FOR II=1 TO L
1660 LOCATE ROW,COL
1670 IF MID$(TITLE$,II,1)=" " THEN GOTO 1720
1680 COLOR C
1690 PRINT MID$(TITLE$,II,1);
1700 C=C+1:IF C=16 THEN C=1
1710 IF C=8 THEN C=9
1720 COL=COL+1
1730 NEXT II
1740 RETURN
1750 L=LEN(TITLE$)
1760 FOR II=1 TO L
1770 LOCATE ROW,COL
1780 IF MID$(TITLE$,II,1)=" " THEN GOTO 1830
1790 COLOR C
1800 PRINT MID$(TITLE$,II,1);
1810 C=C+1:IF C=16 THEN C=1
1820 IF C=8 THEN C=9
1830 ROW=ROW+1
1840 NEXT II
1850 RETURN
```
{% endraw %}

## HC.DOC

{% raw %}
```

*************************************************************** 
*                         [[hc.com]]                          * 
*************************************************************** 
 
                (C) 1983 Martin Smith 
 
Hex File converter.  Converts to and from HEX format. Can 
automatically provide a COM or EXE extension. 
 
Format: 
          >hc [d:][path]infile [[d:][path]outfile] 
 
If TWO files are supplied, one of them MUST be HEX. 
 
o       First file = HEX, program does HEX -> COM, EXE or BIN. 
 
o       First file = COM, EXE or BIN, program does COM -> HEX. 
 
If ONE file is supplied, the following takes place: 
 
o       First file = no extension or anything other than HEX, 
 
                Second file is created in HEX format. 
 
o       First file = HEX extension, 
 
                Second file is created with COM or EXE extension, 
                        depending on file type. 
 
If NO files are supplied, a short documentation is printed. 
 
Ironically, you need a hexconverter to download HC.HEX. If you are 
on a board with XMODEM protocol, you can download HC.COM directly, 
but if not, use your present hexconverter to convert HC.HEX to HC.COM. 
 
There are a lot of hexconverters out there in BBSland for IBM(tm) 
and compatible computers, all following the same basic format. 
Being written entirely in assembler, HC.COM is only 3434 bytes(com), 
and 7104 bytes(hex). It is small, but it can convert files up to the 
MS-DOS(tm) limit with no problem, and total conversion time for a 
70K hex download on floppies is about 15 seconds. 
 
HC.COM uses only regular MS-DOS 2.x function calls, so compatibility 
should be no problem. PATH names are fully supported. Users of DOS 1.1 
and earlier should not attempt to use this program. 
 
A hexconverter is a tool for sending machine format files over the 
telephone.  When a BBS system is operating at seven data bits per 
byte, eight bit files cannot be sent. The hexconverter divides each 
byte into two bytes, so that all information is preserved. When it 
operates in reverse, the hex file is converted back to its original 
form, and checked for accuracy with a number placed at the end of 
the file called unsurprisingly a checksum. This is simply the number 
values of the bytes in the file added together modulo 2048 in this 
case. 
 
Program by: 
 
Marty Smith                  CompuServe   72155,1214 
310 Cinnamon Oak Lane        (713) 661-1241 [Office]
Houston, TX  77079           (713) 464-6737 [Home]
12/10/83


Press ENTER to continue: 

[72155,1214]
HC.DOC         12-Dec-83 2445         31

Disposition:

<R D T): 

[72155,1214]
HC.HEX         12-Dec-83 7210         30

    Keywords: IBM PC UTILITY HEX COM ASSEMBLER
    
    Convert this into HC.COM for a fast hexconverter. Written in assembler,
    this can convert an 80k hex download all on floppies in about 15 seconds. 
    Automatically recognizes EXE or COM files.  See HC.DOC.
    
    

Disposition:

<R D T): res in about 15 seconds. 
    Automatically recognizes EXE or COM files.  See HC.DOC.
    
    

Disposition:
```
{% endraw %}

## PRINTER.ASM

{% raw %}
```
TITLE Printer
PAGE 66,132
;* * * * * * * * * * * * * *   P R I N T E R   * * * * * * * * * * * * * * *  
;
;                             John C. Petrey
;                                (c) 1983
;
;
;
;
CSEG    segment para public 'CODE'
        org     100h    
;
;
PRINTER proc    far
        assume cs:cseg,ds:cseg,es:nothing
;
        jmp     set_up
;
;Data Area
;
        disk        db   00h                ;current default disk drive
        bytes_left  db   00h                ;bytes of code left to read
        sav_row     db   02h                ;start cursor at line 2 
        kbd_input   db   ' '                ;save keyboard input
        print_lit   db   'N'                ;flag to indicate if we were printing literal
        option_nbr  db   '0'                ;option number printed on the screen
        fcb         db   00h                ;1st byte of FCB (00h = default drive)
        fcb2        db   'printer '         ;file name in FCB   
        fcb3        db   'dat'              ;file extension in FCB
        fcb4        db    25  dup(00h)      ;remainder of FCB 
        dta         db   128  dup('d')      ;disk transfer area
        eof         db   '$'                ;end of disk transfer area
        codes       db   20  dup('c')       ;user codes
        line1       db   'Printer (1.1) - Special Print Functions$' 
        more        db   'Change another setting? $'      
        nomatch     db   'Please choose an option listed above $'
        quest       db   'Your Choice $'
        option      db   'Option $'
        done        db   ' done!$'
        escape      db   'Esc -  Exit$'
        dash        db   '   -  $'
        no_file     db   'PRINTER.DAT file not found or error in file$'
;
;Setup stuff
 set_up:
        push    ds                      ;Set return segment address and ...
        sub     ax,ax                   ;put zero on stack ...
        push    ax                      ;so a RET returns us to starting address.   
        push    cs                      ;Move work address into Data Segment ...
        pop     ds                      ;because this is a COM file.
                                        ;
;Save registers                         ;By saving register contents at program 
        push    ax                      ;entry we insure exit will correctly
        push    bx                      ;return to DOS.
        push    cx
        push    dx
        sti                             ;enable interrupts
                                        ;
;Set screen mode
        mov     al,2                    ;80 x 25 B&W alpha
        mov     ah,0                    ;BIOS interrupt 10 - set video mode
        int     10h                     ;call BIOS to do it
                                        ;
;Clear screen
        mov     ah,6                    ;clear screen with scroll active page up
        mov     al,0                    ;entire window
        mov     cx,0                    ;ch,cl = row,column of upper left corner
        mov     dh,24                   ;dh = row to scroll to
        mov     dl,79                   ;dl = column to scroll to
        mov     bh,7                    ;attribute to be used on blank line
        int     10h                     ;Call BIOS to scroll 
                                        ;
;Title
        mov     dx,offset line1         ;get address of program title
        call    print                   ;print it on the screen
                                        ;
;Save current default disk drive
        mov     ah,19h                  ;DOS function to get default drive
        int     21h                     ;Call DOS to do it - returned in AL
        mov     disk,al                 ;Save default disk returned in AL
                                        ;
;Get drive on which PRINTER.DAT file is located
        mov     si,80h                  ;point to command tail address
        mov     dh,[si]                 ;get length of command tail
        tail:
        cmp     dh,00h                  ;Is their a command tail? or any bytes of tail left?
        je      set_dta                 ;   no, go set DTA
        dec     dh                      ;   yes, update bytes of tail left
        inc     si                      ;        point to next byte in command tail
        mov     dl,[si]                 ;        get contents of command tail       
        cmp     dl,097                  ;Is drive spec upper case?
        jb      upper                   ;   yes, now go fold to a value   
        sub     dl,32                   ;   no, fold down to upper case
        upper:
        sub     dl,65                   ;fold to a value
                                        ;
;Select disk drive
        cmp     dl,5                    ;if value not valid (a - f) ...
        ja      tail                    ;   get next command tail byte
        cmp     dl,0                    ;if value not valid ...
        jb      tail                    ;   get next command tail byte
        mov     ah,0Eh                  ;DOS function to select disk
        int     21h                     ;call DOS to do it
                                        ;           
;Set Disk Transfer Address
        set_dta:
        mov     dx,offset dta           ;get address of Disk Transfer Area (DTA)
        mov     ah,1Ah                  ;DOS function to set Disk Transfer Area (DTA)
        int     21h                     ;call DOS to set DTA
                                        
;Open File Control Block  
        mov     dx,offset fcb           ;point to address of File Control Block (FCB)
        mov     ah,0fh                  ;DOS function to open file control block
        int     21h                     ;call DOS to open file control block
                                        
        mov     bp,00h                  ;initialize base pointer - used later
                                        ;as offset into user codes
;
;Sequential read
 read:
        mov     dx,offset fcb           ;get address of file control block
        mov     ah,14h                  ;DOS function to read a record
        int     21h                     ;call DOS to do it.  AL returns 00 if successful.
        cmp     al,00h                  ;Was read successful?
        je      success                 ;  Yes, continue with program
        cmp     al,03                   ;Was partial record read?
        je      success                 ;  Yes, continue with program
        file_not_found:
        mov     dx,offset no_file       ;  No, get address of error message
        call    cursor                  ;      print error message
        jmp     exit                    ;      exit
        success:
                                        ;
        mov     SI,00h                  ;initialize SI to zero - will use SI as offset
                                        ;within DTA (byte were currently working with)
                                        ;
        cmp     dta[si],'&'             ;Is this the end of the users file?
        jne     not_end                 ;  No, still more to read
        jmp     cont                    ;  Yes, we're done reading users file
        not_end:                        ;
                                        ;
        cmp     bytes_left,0            ;Were we reading codes when we reached end of DTA?
        je      not_reading             ;  No
        jmp     read_code               ;  Yes, go finsih reading codes
        not_reading:
                                        ;                                           
        cmp     dta[si],'$'             ;Did we just finish printing a literal when we
                                        ;reached the end of the DTA?
        je      end_of_literal          ;  Yes, now read codes
                                        ;
        cmp     print_lit,'Y'           ;Were we printing the literal when we reached the end of the DTA?
        je      finish_print            ;  Yes, go finish printing the literal      
;
;Parse DTA -  Print user literals & save user codes in opt0 - opt9
; 
;               User's file must be in the following format:
;                 1)  Literal of unspecified lengthed ending with "$"
;                     followed by exactly 2 control codes of which
;                     each must be 3 digits in decimal notation.
;
;                 2)  Last digit of last code in file should be followed
;                     by an ampersand "&"           
;
;               Reister uses: 
;                 SI = on entry is address of start of DTA, subsequently
;                      it is the offset into the DTA (points to byte we
;                      are currently looking at.
;                 BP = offset within CODES
;
;
print_literal:
        inc     sav_row                 ;will print literal on next row down
        mov     dh,sav_row              ;set new cursor position
        call    loc                     ;call locate cursor procedure to do it
        mov     dl,option_nbr           ;get number of option (0 to 9)
        mov     ah,2                    ;DOS function to print character in DL
        int     21h                     ;let DOS print option number
        inc     option_nbr              ;increment option nbr for next time
        ;
        mov     dx,offset dash          ;get address of dash literal
        call    print                   ;print dash literal
        ;
finish_print:
        mov     dx,offset dta           ;get address of start of DTA
        add     dx,si                   ;add SI to DX to get address of literal
                                        ;
        mov     di,dx                   ;set DI to address of literal
        cmp     byte ptr [di],0Dh       ;Are we looking at a carriage return?
        jne     not_CR                  ;  No, look at next byte
        inc     dx                      ;  Yes, point to next byte
        not_CR:
        mov     di,dx
        cmp     byte ptr [di],0Ah       ;Are we looking at a Line Feed?
        jne     not_LF                  ;  No, we can now print the literal
        inc     dx                      ;  Yes, point to next byte
        not_LF:
                                        ;
        mov     print_lit,'Y'           ;Set flag to indicate we were printing literal
        mov     ah,9                    ;DOS function to print literal pointed to in DX
        int     21h                     ;call DOS to print literal
        ;
    next_byte:                          ;This loop updates DX to point
                                        ;to the location in the DTA where
                                        ;the codes begin.
                                        ;
        inc     si                      ;Point to next byte in DTA.
                                        ;
        cmp     si,128d                 ;If we are at the end of the DTA,
        jae     read                    ;go get next sector of user's file.
                                        ;
        cmp     si,127d                 ;Are we at next to last byte in the DTA?
        jne     not_127                 ;  No, continue
        cmp     dta[si],'$'             ;  Yes, and is this a end of literal mark?
        jne     not_127                 ;    No, continue
        mov     bytes_left,6            ;    Yes, will read 6 bytes of code
        mov     print_lit,'N'           ;         turn off printing literal flag
        jmp     read                    ;         and get next sector
        not_127:
                                        ;
        cmp     dta[si],'$'             ;If DX pointing to end of literal,
        je      end_of_literal          ;go read the codes following the literal.
                                        ;
        jmp     next_byte               ;Otherwise, get next byte in DTA.
                                        ;
                                        ;
    end_of_literal:                                                      
        mov     print_lit,'N'           ;Set flag to indicate we are not printing the literal
        mov     bytes_left,6            ;Will read 6 bytes of code.
        inc     si                      ;Point to first byte of code.
        cmp     si,128d                 ;Are we are pointing to end of the DTA?
        jbe     first_byte              ;  No, read first byte of code.       
        jmp     read                    ;  Yes, go read next sector of users code.
                                        ;
    read_code:
        cmp     bytes_left,6            ;If we reached the end of the DTA 
        je      first_byte              ;reading the codes this jump table
        cmp     bytes_left,5            ;will return us to the place where
        je      five_left               ;we left off.  The value in CL is
        cmp     bytes_left,4            ;the number of bytes we have left 
        je      four_left               ;to read.
        cmp     bytes_left,3
        je      three_left
        cmp     bytes_left,2
        je      two_left   
        cmp     bytes_left,1
        je      last_byte_jmp           ;This jump arround stuff is required only
        jmp     exit                    ;becasue it's to far for a conditional jump
        last_byte_jmp:  jmp last_byte
                                        ;
    first_byte:
        call    byte1
        mov     dl,100d                 ;1st byte of code is 100's place
        mov     bl,0                    ;initialize sum to zero - will use BL to
                                        ;accumulate hex value of users code
        call    byte2   
        cmp     si,128                  ;Are we at end of DTA?
        jb      five_left               ;  No, continue.
        jmp     read                    ;  Yes, get next sector
                                        ;
    five_left:
        call    byte1
        mov     dl,10d                  ;2nd byte of user's code is 10's place
        call    byte2
        cmp     si,128                  ;Are we at end of DTA?
        jb      four_left               ;  No, continue.
        jmp     read                    ;  Yes, get next sector.    
                                        ;   
    four_left:
        call    byte1
        add     bl,al                   ;add one's place to sum in BL
        call    byte3
        cmp     si,128                  ;Are we at end of DTA?
        jb      three_left              ;No, continue.
        jmp     read                    ;Yes, get next sector.
                                        ;
    three_left:
        call    byte1
        mov     dl,100d                 ;1st byte is 100's place
        mov     bl,0                    ;initialize sum to zero - will use BL to 
                                        ;accumulate hex value of users code
        call    byte2
        cmp     si,128                  ;Are we at end of DTA?
        jb      two_left                ;  No, continue.
        jmp     read                    ;  Yes, get next sector
                                        ;
    two_left:
        call    byte1
        mov     dl,10d                  ;2nd byte is 10's place
        call    byte2
        cmp     si,128                  ;Are we at end of DTA?
        jb      last_byte               ;  No, continue.
        jmp     read                    ;  Yes, get next sector.
                                        ;
    last_byte:
        call    byte1
        add     bl,al                   ;add one's place to sum in BL
        call    byte3
        cmp     si,128                  ;Are we at end of DTA?
        jb      end_codes               ;  No, continue.
        jmp     read                    ;  Yes, get next sector.
                                        ;
    end_codes:
        cmp     dta[si],'&'             ;Is next byte and end of file marker?
        je      cont                    ;  Yes, we're done.
        cmp     bp,20d                  ;Have we written all 10 codes (20 bytes)
        je      cont                    ;  Yes, we're done.
        jmp     print_literal           ;  No, print the next literal
;
;
cont:
        inc     sav_row                 ;set cursor to next row
        mov     dh,sav_row              ;set new cursor position
        call    loc                     ;call locate procedure to set cursor at next row
        mov     dx,offset escape        ;get address of "ESC - Exit" literal
        call    print                   ;print escape literal 
                                        ;
        mov     sav_row,10h             ;set cursor to be at line 16 (message line) 
        call    msgs                    ;locate cursor at messages line
        mov     dx,offset quest         ;print question "your choise"
        call    print  
;
;
kboard: call    kbd
        mov     [kbd_input],al          ;save user's input in kbd_input
        cmp     al,1Bh                  ;Check to see if input was escape key
        je      escp                    ;  Yes, go print message & exit
                                        ;
        cmp     al,'0'                  ;Check to see if input was less than zero
        jl      none                    ;  Yes, print error message
                                        ;
        cmp     al,option_nbr           ;Check to see if input was greater than nbr options
        jae     none                    ;  Yes, print error message
                                        ;
        sub     al,30h                  ;fold user's ASCII character to a quantity
        mov     dl,2                    ;get offset into codes by multiplying users
        mul     dl                      ;input in AL times 2 (2 bytes per option)
        mov     di,ax                   ;move result to DI (offset into CODES pointing 
                                        ;to option user wants to execute                                ;
                                        ;
;First byte of code
        mov     dl,offset codes[di]     ;get users code into DL
        cmp     dl,0                    ;Is code zero?
        je      next_code               ;  Yes, get next code
                                        ;
        call    sendit                  ;send code in DL to printer
                                        ;
        inc     di                      ;point to next code
                                        ;
;Second byte of code
next_code:
        mov     dl,offset codes[di]     ;get users code into DL
        cmp     dl,0                    ;Is code zero?
        je      finished                ;  Yes, we're done - go print Done!
                                        ;
        call    sendit                  ;send code in DL to printer
                                        ;
finished:
        mov     dx,offset option        ;get address of Option literal
        call    cursor                  ;call procedure to print literal
        mov     dl,[kbd_input]          ;move user's keyboard input to DL
        mov     ah,2                    ;DOS function to print character in DL
        int     21h                     ;call DOS to print users keyboard input
        mov     dx,offset done          ;get address of done! literal
        call    print                   ;call print procedure to print the literal
        jmp     again                   ;go ask user if he wants to play again
                                        ;
none:
        call    msgs                    ;clear the message line
        mov     dx,offset nomatch       ;get address of nomatch literal
        call    print                   ;call print procedure to print literal
        jmp     kboard                  ;go wait for user input
;
escp:
        call    msgs                    ;blank-out message line
        mov     dh,23                   ;position cursor at ...
        call    loc                     ;line 23        
        jmp     exit                    ;We're DONE!!!!
;
again:  call    msgs                    ;blank-out message line line
        mov     dx,offset more          ;print more literal
        call    print                   ;call print procedure to print more literal
        jmp     kboard                  ;go wait for user input
;
exit:
        mov     dl,disk                 ;get original default disk drive
        mov     ah,0Eh                  ;DOS function to set default disk drive
        int     21h                     ;Call DOS to do it
                                        ;
        pop     dx                      ;restore registers so the
        pop     cx                      ;exit to DOS works OK.
        pop     bx
        pop     ax
        int 20h                         ;Program terminate & return to DOS
;
PRINTER endp
;
;
;
BYTE1   proc
;   
        mov     al,dta[si]              ;get 1st byte of user's code     
        sub     al,30h                  ;convert to hex quantity (from ASCII)
        ret
BYTE1   endp
;
;
BYTE2   proc
;
        mul     dl                      ;Multiply times value in AL - result in AX
        add     bl,al                   ;Add low byte of result to BL
        inc     si                      ;point to next code in DTA
        dec     bytes_left              ;first byte is done
        ret
BYTE2   endp
;
;
BYTE3   proc
;
        mov     codes[bp],bl            ;put user's code (converted to hex quantity) into CODE
        inc     bp                      ;point to next byte in CODE
        inc     si                      ;point to next byte in DTA
        dec     bytes_left              ;now there are three bytes left
        ret
BYTE3   endp
;
;
KBD     proc                            ;This proc reads input from the keyboard
;                                   
        mov     ah,1                    ;  DOS function to read char from keyboard
        int     21h                     ;  call DOS to do it
        ret
KBD     endp
;
;
;
CURSOR  proc                            ;This proc restores the cursor to
                                        ;the position last saved, moves the
                                        ;cursor to down one line and lastly
                                        ;saves the new cursor position
                                        ;
        push    dx                      ;save address of display message
                                        ;
        mov     dh,sav_row              ;get row last saved
        inc     dh                      ;add one to row
        cmp     dh,22                   ;test to see if row is at 22 yet
        jb      no                      ;  no, continue
        mov     dh,21                   ;  yes, set row to 21
    no:
        mov     sav_row,dh              ;save current row
        call    loc                     ;set cursor at new location
        pop     dx                      ;restore address of display message
        call    print                   ;call print procedure to print message
        ret                             ;return
CURSOR  endp                        
;
;
;
PGE     proc                            ;This proc gets the active display
        mov     ah,15                   ;page returning it in bh
        int     10H
        ret
PGE     endp
;
;
;
LOC     proc                            ;This proc sets the cursor at the
                                        ;row number set in dh
;
        call    pge                     ;get active page number
        mov     dl,0                    ;column 0
        mov     ah,2
        int     10H
        ret
LOC     endp
;
;
;
PRINT   proc                            ;This proc sends the data pointed
                                        ;to by register DX to the screen 
                                        ;for display
                                        ;
        mov     ah,9
        int     21h
        ret
PRINT   endp                                    
;
;   
SENDIT  proc                            ;This proc sends the contents of
                                        ;register DL to the printer
                                        ;
        mov     ah,5
        int     21H
        ret
SENDIT  endp                    
;
;
MSGS    proc                            ;This proc locates the cursor at
                                        ;the message line (line 15)
                                        ;
        mov     dh,15                   ;locate cursor at line 15
        call    loc                     ;call locate procedure
        mov     cx,75                   ;75 times we will ...
        mov     dl,' '                  ;print spaces
        print_space:
        mov     ah,2                    ;DOS function to print character in DL
        int     21h                     ;call DOS to print the space
        loop    print_space             ;If CX is not zero, jump to print_space         
        mov     dh,15                   ;locate cursor at line 15
        call    loc                     ;call locate procedure
        ret
MSGS    endp
;
CSEG    ends
        end     PRINTER
```
{% endraw %}

## PRINTER.DOC

{% raw %}
```


                                 PRINTER.DOC                    Ver 1.1

                                 John Petrey
                                  (c) 1983                                  

        This  is  the documentation file for the PRINTER.COM  program,  a 
        program that allows one to easily use the special print functions 
        for  their printer (any make).   PRINTER.COM is run by typing  in 
        PRINTER at the DOS prompt or directly from Wordstar using the "R" 
        (run a program) command.

        PRINTER.COM  is  used to set up your printer to make use of  it's 
        special print functions (compressed print,  double strike  print, 
        italics print,  etc.)  For example,   you may have a printer that 
        normally only prints 80 characters on a line,  which is fine most 
        of  the  time.   However,  you may find times when you'd like  to 
        print more than 80 characters on a line.  You can use PRINTER.COM 
        to tell your printer to use compressed print.    Likewise, if you  
        normally use continuous form paper,  then you want the printer to 
        stop printing  when it runs out of paper.   But when you want  to 
        use  single sheet paper,  the printer stops because it thinks  it 
        doesn't have any paper in the printer.   PRINTER.COM can tell the 
        printer to temporarily ignore the paper out sensor so you can use 
        single sheet paper.   Whatever your printer has the capability to 
        do, you can easily do it with PRINTER.COM.

        To use PRINTER.COM you must set up a data file for PRINTER.COM to 
        read  so it knows what special print functions you want  to  use. 
        You  can enter up to ten different special print features in  the 
        data  file.   The  data file must be named PRINTER.DAT  and  must 
        conform  to  a specific format so PRINTER.COM can understand  it.  

        When you run  PRINTER.COM,  it looks for the  PRINTER.DAT file on 
        the default disk drive unless you tell  PRINTER.COM  that the DAT
        file is located on some other disk drive.    You tell PRINTER.COM
        the drive the  DAT file is located on by typing in the disk drive
        letter after you type in PRINTER at the DOS prompt.  For example,
        if the  default  drive is  A  and  PRINTER.COM  is on drive B and   
        PRINTER.DAT is on drive C, you would type in  B:PRINTER C  at the
        DOS A> prompt so DOS would know to look on drive B for PRINTER.COM
        and so PRINTER.COM would know to look on drive C for PRINTER.DAT.

        The  data file (PRINTER.DAT) must contain a description (literal) 
        of  the special print features you want to be available  and  the 
        printer  control  codes  for each  special  print  feature.   The 
        control  codes  are listed in your printer's user manual and  are 
        likely found in the back of the manual as an appendix.  A control 
        code  is  nothing  more  than  a unique  code  that  the  printer 
        recognizes as a command to change to a special print mode.
         
        Let's assume you have an Epson MX printer and want to be able  to 
        set up the printer for compressed print.   According to the Epson 
        manual  (appendix B in my Epson manual) the control code to  turn 
        on  compressed print is 15 (the ASCII character 15).  To  set  up 
        your  PRINTER.DAT  file for compressed print on an Epson  printer 
        you would need an entry like the following:

             Compressed Print$015000


                                  Page 1






        The  first  part  of the entry is what you want  printed  on  the 
        screen,  Compressed Print in this case.  Following the literal is 
        a  dollar sign ($) which tells PRINTER.COM where the end of  your 
        literal is and where the beginning of the codes are that you want 
        sent  to  the  printer to turn on  that  special  print  feature.  
        Following the dollar sign are six digits which to PRINTER.COM are 
        really  two three-digit numbers.   The first three digits in this 
        case  are  015  which  will be sent to the  printer  to  turn  on 
        compressed print.   The last three digits (000 in this case) will 
        not  be  sent  to the printer because  it  is  000.   PRINTER.COM 
        expects two three-digit numbers,  so in this case we had to enter 
        000   as   one  of  the  two  three-digit  numbers   to   satisfy 
        PRINTER.COM's  requirement  for two  three-digit  numbers.   Many 
        special print functions require two control codes be sent to  the 
        printer  in order to set up a special print function,  so that is 
        why PRINTER.COM wants two-three digit numbers.   For example,  on 
        the Epson Printer,  to set up Italics print you need to send  the 
        printer  a  ESC (escape) and a 53 (according to my Epson  Printer 
        manual,  Appendix  B).   You would enter  your  literal,  Italics 
        Print,  followed by a dollar sign followed by 027053.  027 is the 
        ASCII code for Escape  and  053 is the code  for  Italics.  Thus,  
        the entry in the PRINTER.DAT file would look like:
              
              Italics Print$027053

        Up  to  ten different special print functions can be  entered  in 
        the PRINTER.DAT file and each should be on separate  lines.   The 
        last  entry  should be followed by an ampersand  (&)  immediately 
        after  the last digit of the last code.  The ampersand (&)  tells 
        PRINTER.COM  when  it has  reached the end of your  special print
        features.   For  example,  if you only  had two  entries  in your 
        PRINTER.DAT file it might look like:

              Compressed Print$015000
              Italics Print$027053&

        Remember,  1) you can have up to 10 entries in PRINTER.DAT
         
                   2) each entry is comprized of:

                        a. literal followed by dollar sign
                        b. followed  by two three-digit codes  (decimal
                           ASCII value - not hex)  that  are to be sent   
                           to the printer   (Refer  to  your  printer's
                           manual for the  control codes  to set up the 
                           special print features you want to use.)  If
                           your  printer  manual says to  send a  alpha 
                           character to the  printer,  you can find out
                           what  ASCII  code should be sent by refering 
                           to the IBM-PC BASIC manual appendix G.		         

                   3) The last  digit  of last code is followed  by  an 
                      ampersand  (&)  so  PRINTER.COM knows when it has 
                      reached the last of your special print features.  
                                                                        



                                Page 2








        The  PRINTER.DAT  file  can be created with  any  editor  (Edlin, 
        Wordstar,  directly from the console, etc.).  Just be sure if you 
        use  Wordstar  that you create/edit the PRINTER.DAT file  in  the 
        non-document  mode.   A  sample PRINTER.DAT file  (for  an  Epson 
        printer) is provided as an example.


        PRINTER.COM  can  be  run  from Wordstar by using the  R  (run  a 
        program) command from the Wordstar Menu.  For example, assume you 
        just finished editing a document and have saved it.   You  should 
        now  be at the Opening Menu where you normally would strike P  to 
        begin printing the document.   Before printing the document,  you 
        can  strike  R for run a program at which time Wordstar will  ask 
        you for the name of the program you wish to run.  Type in PRINTER 
        and  strike the enter key.   Note:  if PRINTER.COM is not on  the 
        logged  (default) disk drive you'll need to prefix  PRINTER  with 
        the  drive  specification  of the drive where Wordstar  can  find 
        PRINTER.COM  (such as A:  for drive A).  If PRINTER.DAT is not on
        the default disk drive, you'll need to specify the drive where it
        can be found after entering PRINTER.  For example, if the default
        drive is B: and both PRINTER.COM and PRINTER.DAT are on drive A:,
        then you'll need to enter   A:PRINTER A   so  Wordstar  will know
        where to look for PRINTER.COM  and PRINTER.COM will know where to
        look for  PRINTER.DAT.   After you've entered this, Wordstar will
        run the PRINTER.COM program which will prompt you for the special
        print  functions  you  set  up in your  PRINTER.DAT  file.   Upon
        exiting  PRINTER.COM,   you will automatically return to Wordstar
        where  you  can now strike P to begin printing your document with
        the special print function(s) you selected in effect.      


        Listed below is a sample PRINTER.DAT file for an EPSON printer.

        Set Printer to Power Up Mode$027064
        Compressed Print$027015
        Italics Print$027052
        Emphasized Print$027069
        Double Strike Print$027071 
        1/8th Inch Spacing$027048
        Turn on Paper Out Sensor$027057
        Turn off Paper Out Sensor$027056
        Double Width Print #1$027087
        Double Width Print #2$001000&

        Note: To use Double Width Print,  both Double Width options 
              in the above sample must be entered.  This is because
              the Epson printer needs three control codes to set up
              Doulbe Width print.   Since PRINTER.COM can only have
              two control codes per entry in the  PRINTER.DAT file,
              two entries in  PRINTER.DAT  are required to send the 
              three control codes the Epson printer wants.  





                               Page 3






```
{% endraw %}

## RAMDISK.DOC

{% raw %}
```

This program is a device driver that creates a RAM disk under DOS 2.0.
The size of the RAM disk is determined by a parameter in the CONFIG.SYS
file.  To use this program, add the following line to your CONFIG.SYS file:

DEVICE=[d:][path]RAMDISK.SYS n

Where [d:][path] specify the drive and pathname where RAMDISK.SYS can be
found when the system boots, and n is the size of the RAMDISK in kilobytes.
The [d:][path] specification need not be supplied if RAMDISK.SYS is located
in the root directory of your default (system) drive.

For example, on a floppy based system with the file RAMDISK.SYS in the root
directory of your DOS disk, you could create an 80K RAM disk with the following
statement in CONFIG.SYS:

DEVICE=RAMDISK.SYS 80



```
{% endraw %}

## ROMBIOS.ASM

{% raw %}
```
                SUBTTL ROM BIOS DATA AREAS AND EQUATES
;--------------------------------
;   EQUATES
;--------------------------------
PORT_A          EQU     60H              ; 8255 PORT A ADDR
PORT_B          EQU     61H              ; 8255 PORT B ADDR
PORT_C          EQU     62H              ; 8255 PORT C ADDR
CMD_PORT        EQU     63H
INTA00          EQU     20H              ; 8259 PORT
INTA01          EQU     21H              ; 8259 PORT
EOI             EQU     20H
TIMER           EQU     40H
TIM_CTL         EQU     43H              ; 8253 TIMER CONTROL PORT ADDR
TIMER0          EQU     40H              ; 8253 TIMER/CNTER 0 PORT ADDR
TMINT           EQU     01               ; TIMER 0 INTR RECVD MASK
DMA08           EQU     08               ; DMA STATUS REG PORT ADDR
DMA             EQU     00               ; DMA CHANNEL 0 ADDRESS REG PORT ADDR
MAX_PERIOD      EQU     540H
MIN_PERIOD      EQU     410H
KBD_IN          EQU     60H              ; KEYBOARD DATA IN ADDR PORT
KBDINT          EQU     02               ; KEYBOARD INTR MASK
KB_DATA         EQU     60H              ; KEYBOARD SCAN CODE PORT
KB_CTL          EQU     61H              ; CONTROL BITS FOR KEYBOARD SENSE DATA
;--------------------------------
;  8088 INTERRUPT LOCATIONS
;--------------------------------
ABS0            SEGMENT AT 0
STG_LOC0        LABEL   BYTE
                ORG     2*4
NMI_PTR         LABEL   WORD
                ORG     5*4
INTS_PTR        LABEL   WORD
                ORG     8*4
INT_ADDR        LABEL   WORD
INT_PTR         LABEL   DWORD
                ORG     10H*4
VIDEO_INT       LABEL   WORD
                ORG     1DH*4
PARM_PTR        LABEL   DWORD            ; POINTER TO VIDEO PARMS
                ORG     01EH*4           ; INTERRUPT 1EH
DISK_PTR        LABEL   DWORD
                ORG     01FH*4           ; LOCATION OF POINTER
EXT_PTR         LABEL   DWORD            ; POINTER TO EXTENSION
                ORG     7C00H
BOOT_LOCN       LABEL   FAR
ABS0            ENDS
		PAGE
;--------------------------------
;  STACK -- USED DURING INITIALIZATION ONLY
;--------------------------------
STACK           SEGMENT AT 30H
                DW      128 DUP(?)
TOS             LABEL   WORD
STACK           ENDS
;--------------------------------
;  ROM BIOS DATA AREAS
;--------------------------------
DATA            SEGMENT AT 40H
RS232_BASE      DW      4 DUP(?)         ; ADDRESSES OF RS232 ADAPTERS
PRINTER_BASE    DW      4 DUP(?)         ; ADDRESSES OF PRINTERS
EQUIP_FLAG      DW      ?                ; INSTALLED HARDWARE
MFG_TST         DB      ?                ; INITIALIZATION FLAG
MEMORY_SIZE     DW      ?                ; MEMORY SIZE IN K BYTES
IO_RAM_SIZE     DW      ?                ; MEMORY IN I/O CHANNEL
		PAGE
;-------------------------------
;  KEYBOARD DATA AREAS
;-------------------------------
KB_FLAG         DB      ?
;------ SHIFT FLAG EQUATES WITHIN KB_FLAG
INS_STATE       EQU     80H              ; INSERT STATE IS ACTIVE
CAPS_STATE      EQU     40H              ; CAPS LOCK STATE HAS BEEN TOGGLED
NUM_STATE       EQU     20H              ; NUM LOCK STATE HAS BEEN TOGGLED
SCROLL_STATE    EQU     10H              ; SCROLL LOCK STATE HAS BEEN TOGGLED
ALT_STATE       EQU     08H              ; ALTERNATE SHIFT KEY DEPRESSED
CTL_SHIFT       EQU     04H              ; CONTROL SHIFT KEY DEPRESSED
LEFT_SHIFT      EQU     02H              ; LEFT SHIFT KEY DEPRESSED
RIGHT_SHIFT     EQU     01H              ; RIGHT SHIFT KEY DEPRESSED
;-------------------------------
KB_FLAG_1       DB      ?                ; SECOND BYTE OF KEYBOARD STATUS
INS_SHIFT       EQU     80H              ; INSERT KEY IS DEPRESSED
CAPS_SHIFT      EQU     40H              ; CAPS LOCK KEY IS DEPRESSED      
NUM_SHIFT       EQU     20H              ; NUM LOCK KEY IS DEPRESSED      
SCROLL_SHIFT    EQU     10H              ; SCROLL LOCK KEY IS DEPRESSED       
HOLD_STATE      EQU     08H              ; SUSPEND KEY HAS BEEN TOGGLED
;-------------------------------
ALT_INPUT       DB      ?                ; STORAGE FOR ALTERNATE KEYPAD ENTRY
BUFFER_HEAD     DW      ?                ; POINTER TO HEAD OF KEYBOARD BUFFER
BUFFER_TAIL     DW      ?                ; POINTER TO TAIL OF KEYBOARD BUFFER
KB_BUFFER       DW      16 DUP(?)        ; ROOM FOR 15 ENTRIES
KB_BUFFER_END   LABEL   WORD        
;------ HEAD = TAIL INDICATES THAT THE BUFFER IS EMPTY
NUM_KEY         EQU     69               ; SCAN CODE FOR NUMBER LOCK
SCROLL_KEY      EQU     70               ; SCROLL LOCK KEY
ALT_KEY         EQU     56               ; ALTERNATE SHIFT KEY SCAN CODE
CTL_KEY         EQU     29               ; SCAN CODE FOR CONTROL KEY
CAPS_KEY        EQU     58               ; SCAN CODE FOR SHIFT LOCK
LEFT_KEY        EQU     42               ; SCAN CODE FOR LEFT SHIFT 
RIGHT_KEY       EQU     54               ; SCAN CODE FOR RIGHT SHIFT
INS_KEY         EQU     82               ; SCAN CODE FOR INSERT KEY 
DEL_KEY         EQU     83               ; SCAN CODE FOR DELETE KEY 
		PAGE
;-------------------------------
;   DISKETTE DATA AREAS
;-------------------------------
SEEK_STATUS     DB      ?                ; DRIVE RECALIBRATION STATUS
;                                        BIT 3-0 = DRIVE 3-0 NEEDS RECAL BEFORE
;                                        NEXT SEEK IF BIT IS = 0
INT_FLAG        EQU     080H             ; INTERRUPT OCCURRENCE FLAG
MOTOR_STATUS    DB      ?                ; MOTOR STATUS
;                        BIT 3-0 = DRIVE 3-0 IS CURRENTLY RUNNING
;                        BIT 7   = CURRENT OPERATION IS A WRITE, REQUIRES DELAY
MOTOR_COUNT     DB      ?                ; TIME OUT COUNTER FOR DRIVE TURN OFF
MOTOR_WAIT      EQU     37         ; TWO SECONDS OF COUNTS FOR MOTOR TURN OFF
;
DISKETTE_STATUS DB      ?          ; SINGLE BYTE OF RETURN CODE INFO FOR STATUS
TIME_OUT        EQU     80H        ; ATTACHMENT FAILED TO RESPOND
BAD_SEEK        EQU     40H        ; SEEK OPERATION FAILED
BAD_NEC         EQU     20H        ; NEC CONTROLLER HAS FAILED
BAD_CRC         EQU     10H        ; BAD CRC ON DISKETTE READ
DMA_BOUNDARY    EQU     09H        ; ATTEMPT TO DMA ACROSS 64K BOUNDARY
BAD_DMA         EQU     08H        ; DMA OVERRUN ON OPERATION
RECORD_NOT_FND  EQU     04H        ; REQUESTED SECTOR NOT FOUND
WRITE_PROTECT   EQU     03H        ; WRITE ATTEMPTED ON WRITE PROT DISK
BAD_ADDR_MARK   EQU     02H        ; ADDRESS MARK NOT FOUND
BAD_CMD         EQU     01H        ; BAD COMMAND PASSED TO DISKETTE I/O
;
NEC_STATUS      DB      7 DUP(?)   ; STATUS BYTES FROM NEC
;--------------------------------
;   VIDEO DISPLAY DATA AREA
;--------------------------------
CRT_MODE        DB      ?          ; CURRENT CRT MODE
CRT_COLS        DW      ?          ; NUMBER OF COLUMNS ON SCREEN
CRT_LEN         DW      ?          ; LENGTH OF REGEN IN BYTES
CRT_START       DW      ?          ; STARTING ADDRESS IN REGEN BUFFER
CURSOR_POSN     DW      8 DUP(?)   ; CURSOR FOR EACH OF UP TO 8 PAGES
CURSOR_MODE     DW      ?          ; CURRENT CURSOR MODE SETTING
ACTIVE_PAGE     DB      ?          ; CURRENT PAGE BEING DISPLAYED
ADDR_6845       DW      ?          ; BASE ADDRESS FOR ACTIVE DISPLAY CARD
CRT_MODE_SET    DB      ?          ; CURRENT SETTING OF THE 3X8 REGISTER
CRT_PALLETTE    DB      ?          ; CURRENT PALLETTE SETTING COLOR CARD
		PAGE
;--------------------------------
;   CASSETTE DATA AREA
;--------------------------------
EDGE_CNT        DW      ?          ; TIME COUNT AT DATA EDGE
CRC_REG         DW      ?          ; CRC REGISTER
LAST_VAL        DB      ?          ; LAST INPUT VALUE
;--------------------------------
;   TIMER DATA AREA
;--------------------------------
TIMER_LOW       DW      ?          ; LOW WORD OF TIMER COUNT
TIMER_HIGH      DW      ?          ; HIGH WORD OF TIMER COUNT
TIMER_OFL       DB      ?          ; TIMER HAS ROLLED OVER SINCE LAST READ
;COUNTS_SEC     EQU     18
;COUNTS_MIN     EQU     1092
;COUNTS_HOUR    EQU     65543
;COUNTS_DAY     EQU     1573040 = 1800B0H
;-------------------------------
;   SYSTEM DATA AREA
;-------------------------------
BIOS_BREAK      DB      ?          ; BIT 7 = 1 IF BREAK KEY HAS BEEN DEPRESSED
RESET_FLAG      DW      ?          ; WORD = 1234H IF KEYBOARD RESET UNDERWAY
DATA            ENDS
;
;--------------------------------
;   EXTRA DATA AREA
;--------------------------------
XXDATA          SEGMENT AT 50H
STATUS_BYTE     DB      ?
XXDATA          ENDS
;
;--------------------------------
;   VIDEO DISPLAY BUFFER
;--------------------------------
VIDEO_RAM       SEGMENT AT 0B800H
REGEN           LABEL   BYTE
REGENW          LABEL   WORD
                DB      16384 DUP(?)
VIDEO_RAM       ENDS
;
;--------------------------------
;   ROM RESIDENT CODE
;--------------------------------
ROMCODE         SEGMENT AT 0F000H
                DB      57344 DUP(?)             ; FILL LOWEST 56K
                DB      '5700051 CORP. IBM 1981' ; COPYRIGHT NOTICE
ROMCODE         ENDS
;
;--------------------------------
;   PROGRAM SEGMENT PREFIX 
;--------------------------------
;
PROGRAM    	SEGMENT          
INT20		DW                      ;INT 20 for DOS return
MEMORYSIZE	DW			;TOTAL MEMORY SIZE
CALLDOS_FAR	DB	5 DUP(?)	; LONG CALL DOS DISPATCHER
TERMADDR	DB	4 DUP(?)	; TERMINATE ADDRESS (ip,cs)
CTRLBREAK  	DB	4 DUP(?)	; ctrl_break EXIT ADDRESS
RESERVED	DB	4ah DUP(?)	; RESERVED AREA
FCB_ONE		DB	10H DUP(?)	; unopened fcb #1
FCB_TWO		DB	10H DUP(?)	; unopened fcb #2
PARM_LENGTH	DB			; LENGTH OF PARAMETERS
PARM_FIELD	DB	19 DUP(?)	; PARAMETER STRING DATA
;
 		SUBTTL
                PAGE
                ORG	100H		; DEFAULT ENTRY ADDRESS
PROGRAM_ENTRY	EQU	$

```
{% endraw %}

## SCRN.ASM

{% raw %}
```
	PAGE	66,132		;Setup page as 66 lines, 132 columns
TITLE	SCRN - Subroutines for BASIC to control text windowing
;
;
SUBTTL	Code
CSEG	SEGMENT PARA PUBLIC 'CODE'
START	PROC	FAR	;Routine
	ASSUME	CS:CSEG,DS:CSEG,SS:NOTHING,ES:NOTHING
;
;
; The following define the bytes for each screen control entry at the
; end of the code of this bank.  The order of these entries correspond
; to that on the call to DEFW routine to define a window.
;
ULC	EQU	0	; Word entry containing next two bytes
LCOL	EQU	0	; Left column for window (0 - 79)
TROW	EQU	1	; Top row for window (0 - 24)
LRC	EQU	2	; Word entry containing next two bytes
RCOL	EQU	2	; Right column for window (0 - 79)
BROW	EQU	3	; Bottom row for window (0-24)
ATTR	EQU	4	; Window text attribute
LENWIN	EQU	5	; Window length in bytes
;
;
	RET	0		;Dummy return for zero callers
	DB	?		;Fill in case we expand entry zero
;
WINUM	DB	1		;Window number (default window 1)
LENT	DB	LENWIN		;Window size
;
	JMP	SHORT	SCU	;Scroll up
	JMP	SHORT	SCD	;Scroll down
	JMP	SHORT	CEOL	;Clear to end of line
	JMP	SHORT	CEOS	;Clear to end of window
	JMP	SHORT	ATRB	;Change window attribute
	JMP	SHORT	DEFW	;Define a window
;
;
SCU	LABEL	NEAR		;Scroll up window
	MOV	DH,6		;Function scroll up
	JMP	SHORT	SCROLL	;
;
SCD	LABEL	NEAR		;Scroll down window
	MOV	DH,7		;Function scroll down
SCROLL	LABEL	NEAR		;Entry for SCU
	PUSH	BP		;Common code
	MOV	BP,SP		;
	MOV	SI,[BP+6]	;Get argument address
	MOV	AX,[SI]		;Get value
	MOV	AH,DH		;Function
	CALL	BASE		;Get data area base
	MOV	CX,ULC[DI]	;Upper left corner
	MOV	DX,LRC[DI]	;Lower right corner
	MOV	BH,ATTR[DI]	;Attribute
	INT	10H		;Enter BIOS
RET2:	POP	BP		;
	RET	2		;Return
;
;
CEOL	LABEL	NEAR		;Clear to end of line in window
	PUSH	BP
	CALL	GETP		;Get position
	CALL	CLRLIN		;Clear to end
	POP	BP		;
	RET	0		;And go home
;
;
CEOS	LABEL	NEAR		;Clear to end of screen window
	PUSH	BP		;
	CALL	GETP		;Get position
	PUSH	DX		;Remember that
	CALL	CLRLIN		;Clear rest of this line
	POP	DX		;Recall what that was
	CMP	DH,BROW[DI]	;Close to bottom?
	JZ	CEOSX		;Yes, exactly
	MOV	CH,DH		;No, scroll rest of lines
	INC	CH		;
	MOV	CL,LCOL[DI]	;Left column
	MOV	DX,LRC[DI]	;Lower right corner
	MOV	BH,ATTR[DI]	;Attribute to fill
	MOV	AX,0700H	;Function 7 and 0 to clear
	INT	10H		;Call BIOS
CEOSX	LABEL	NEAR
	POP	BP		;
	RET	0		;And go home
;
;
ATRB	LABEL	NEAR		;Change attribute for current window
	PUSH	BP
	MOV	BP,SP
	CALL	BASE
	MOV	SI,[BP+6]
	MOV	AL,[SI]
	MOV	ATTR[DI],AL	;New attribute for window
	JMP	SHORT	RET2	;Return to caller offset 2
;
;
DEFW	LABEL	NEAR		;Define a window
	PUSH	BP
	MOV	BP,SP
	MOV	SI,[BP+16]	;1st agrgument is screen number
	MOV	AX,[SI]		;Get value
	CALL	SHORT	NEXT1	;
NEXT1:	POP	DI		;Get Pregister
	SUB	DI,OFFSET(NEXT1-START) ;Okay
	MOV	WINUM[DI],AL	;And store it
	CALL	BASE2		;Base window area
	PUSH	ES
	PUSH	DS
	POP	ES
	MOV	SI,[BP+12]	;Left column
	MOVSB
	DEC	BYTE PTR [DI-1]	;All coordinates need to be based (0,0)
	MOV	SI,[BP+14]	;Top row
	MOVSB
	DEC	BYTE PTR [DI-1]
	MOV	SI,[BP+8]	;Right column
	MOVSB
	DEC	BYTE PTR [DI-1]
	MOV	SI,[BP+10]	;Bottom row
	MOVSB
	DEC	BYTE PTR [DI-1]
	MOV	SI,[BP+6]	;Attribute
	MOVSB
	POP	ES
	POP	BP
	RET	12
;
;
GETP	PROC	NEAR
	MOV	BX,0		;
	MOV	AH,3		;Read current position
	INT	10H		;
	RET			;
GETP	ENDP
;
;
CLRLIN	PROC	NEAR
	CALL	BASE		;Get data area base
	MOV	CL,RCOL[DI]	;Right window limit
	MOV	CH,0		;Clear top end
	SUB	CL,DL		;Subtract columns done
	ADD	CL,1		;Add one till we figure out whats wrong
	MOV	AX,0920H	;Write blanks
	MOV	BL,ATTR[DI]	;Attribute
	INT	10H		;
	RET			;
CLRLIN	ENDP
;
;
BASE	PROC	NEAR
	CALL	SHORT	NEXT	;To capture P address
NEXT:	POP	DI		;Get that for index
	SUB	DI,OFFSET (NEXT-START)	;For code relative offset
BASE2	LABEL	NEAR		;Alternate entry
	PUSH	AX
	MOV	AL,WINUM[DI]	;Get window number
	DEC	AL		;Make zero relative
	MUL	LENT[DI]	;Multiply by lenth of window
	ADD	AX,OFFSET DATA	;Move to data area
	ADD	DI,AX		;Add into segment offset
	POP	AX
	RET
BASE	ENDP			;That is all
;
;
DATA	DB	0,0,79,23,7	; Window 1 default data
;
;
START	ENDP
CSEG	ENDS
	END

```
{% endraw %}

## SCRN.DOC

{% raw %}
```

			   DESCRIPTION

		Copyright (c) 1983 by Bradley H. Hanson.

   Permission is granted for private, non-profit use.  This program
   may NOT be used for trade or sale.  Comments or corrections should
   be directed to:

          Brad Hanson,  3685 Eastwood Court, Bettendorf, IA  52722
                   319/332-4984, CompuServe 72115,22

  This contains a series of screen service routines for access
  from a BASIC program.  They can be loaded into a string array
  or unused file buffer in the program and then directly CALLed
  after defining entry variables to the routines.

  The following is a summary of the routines defined.  An expanded
  description can be found in the file SCRN.DOC.

  First the routine must be loaded into memory and a variable defined to
  point to the first byte of the code.  In this example the variable Z
  will point to the first byte and then the following entry variables 
  are then defined to enter the actual routines:

  SCRN=Z+2:  SCU=Z+4:  SCD=Z+6:  CEOL=Z+8:  CEOS=Z+10
  ATRB=Z+12: DEFW=Z+14

  The actual variables used in the program can named different than those
  listed above but the relative offset into the code must remain the same.

  Routine and location definitions using the variables defined above:

  SCRN  - POKE location to define the current window

          POKE SCRN,value  ' value is a number from 1 to 6 initial value=1

  SCU - Scroll the window up function

         I%=value:  CALL SCU(I%) ' Scroll <value> lines up.  Clear window if
                                    value=0.  Argument must be an integer.

  SCD - Scroll the window down function

          I%=value:  CALL SCD(I%) ' Scroll <value> lines down.  Clear window
                                 if value=0.  Argument must be an integer.

  CEOL - Clear from cursor to end of line with spaces

          CALL CEOL  ' No arguments allowed.  Cursor must be positioned within
                       the current window.

  CEOS - Clear from cursor to end of window with spaces

          CALL CEOS  ' No arguments allowed.  Cursor must be positioned within
                       the current window.

  ATRB - Change the default attribute in the window

          I%=value:  CALL ATRB(I%) ' Change space fill attribute to <value>

  DEFW - Define a window.  Up to six windows can be defined.  The current
         window will be changed to the window number defined.  Six arguments
         are required as follows:

         A1% - Screen number to define.  Value from 1 to 6.
         A2% - Upper left corner row position (1 to 24).
         A3% - Upper left corner column position (1 to 80).
         A4% - Lower right corner row position (1 to 24, >= A2).
         A5% - Lower right corner column position (1 to 80, >= A4).
         A6% - Attribute byte for space fill characters.
    Call:
         CALL DEFW(A1%,A2%,A3%,A4%,A5%,A6%)

    When initially loaded window 1 is defined with the following values:

         A1=1: A2=1: A3=1: A4=24: A5=80: A6=7


```
{% endraw %}

## SIZER.ASM

{% raw %}
```

       page    64,132
       title   SIZER - test the size of a file for PASCAL batch files
       subttl  by Tony Alan Rhea 11/14/83
;
;
comment *

This program tests the size of a file and sets an errorlevel
based on it's findings.  Currently, it is set up for the file
ERRLOG and expects it to be 115 bytes long.  If it does not find
the file or it is not 115 bytes big, an errorlevel 1 is returned
(the file is assumed to be in the current working directory).
Otherwise, errorlevel 0 is returned.  This program requires DOS
2.0.

This program is currently set up for the PASCAL compiler.  If PAS1
goes OK, the following output is generated:

  IBM Personal Computer Pascal Compiler
  Version 1.00 (C)Copyright IBM Corp 1981
   Pass One    No Errors Detected.

which is exactly 115 bytes big when redirected to a disk file.  To use
this program with the other compilers/assemblers, follow these steps.
   1. Run the compiler/assembler on a known good program and redirect
      the output to the disk file ERRLOG.
   2. Do a "DIR ERRLOG" and look at the size of the file.
   3. Put the file size in the EQUATE section below in SIZELO (SIZEHI
      should always be zero unless your compiler generates more than
      64k of messages!).
   4. If you like, change the FILENAME DB statement near the end of
      this program to a filename of your liking.
   5. Assemble and link as follows:
         MASM SIZER,,;
         LINK SIZER;                   (Ignore "NO STACK" message)
         EXE2BIN SIZER.EXE SIZER.COM
   6. Have fun!

One note for you PASCAL fans: PAS2 does not like to have his output
redirected -- it hangs the system.  I haven't investigated it so I
don't know the reason why.  If someone figures out why, please pass
it along.

Usage:
      echo off
      cls
      echo Compiling %1 .....
      pas1 %1,,; > errlog
      SIZER
      if errorlevel 1 goto error
      echo PAS1 ok.  Starting PAS2....
      pas2
      goto end
      :error
      edit %1.pas
      :end
      echo on

Copyright (C) 1983  Tony Alan Rhea
This program may be copied and distributed for personal use
but not for profit provided this notice is included.  Author makes
no warranty, expressed or implied, as to the correct nature and
operation of this software.


You may make and distribute as many copies of this program as you wish
for your PERSONAL use only ( NOT for business purposes, please! ).
Feel free to modify, mutilate, or adulterate this program.  If you come
up with an bug or improvement, please let me know by writing me at this
address:
        Tony A. Rhea
        1030 Ivy Lane
        Cary, NC  27511
If you do modify it, please give me credit in the program.  This helps
to preserve my ego and increase my fame (but, unfortunately, NOT my
financial status).  Also, I would appreciate a copy of the modified
version, preferably on disk (I'll be happy to return your diskette).

If you like this program ( or HATE it ), please let me know.  Drop me
a line at the address given above.

This program has been submitted for publication in PC-WORLD magazine.


  Revision history:
     rev 1.0  11/14/83                         { original release }


       *
;
;
; Equates
;
;
one    equ     '1'
zero   equ     '0'
cr     equ     0dh
lf     equ     0ah
dollar equ     '$'
sizelo equ    115d             ;expected file size in bytes -- low portion
sizehi equ    0                ;expected file size in bytes -- hi  portion
       page
;
;
; Program entry point
;
;
cseg   segment para 'code'
       assume  cs:cseg, ds:cseg, ss:nothing, es:cseg
       org     100h            ;for .COM file
entry  proc    near
       mov     ah,30h          ;set function code -- get DOS version number
       int     21h             ;and request DOS service
       cmp     al,0            ;is it pre-DOS 2.0?
       jne     entry10         ;if not, continue
       jmp     dosexit         ;else tell user & quit
;
;
; At this point we have DOS 2.0 or better.  Try to open the file.
;
;
entry10 label  near
       push    cs              ;save CS and
       pop     ds              ;get into DS for addressability
       lea     dx,filename     ;point DS:DX to filename
       mov     ax,3d00h        ;function = open file for read-only
       int     21h             ;request DOS service
       jnc     entry20         ;if no carry flag, continue
       jmp     fileerror10     ;else cannot open file -- error ID in AX
;
;
; At this point we have opened the file.  Now let's get it's size.
; The file handle is in AX.
;
;
entry20 label  near
       mov     bx,ax           ;put file handle in BX
       mov     ax,4202h        ;function code -- LSEEK to EOF
       xor     cx,cx           ;set CX and
       xor     dx,dx           ;DX to zero -- no offset desired
       int     21h             ;request DOS service
       jnc     entry30         ;if no carry flag then continue
       jmp     fileerror10     ;else access error -- ID in AX, handle in BX
;
;
; Now the read/write pointer is at the end-of-file.  DX:AX contains the
; new location of the pointer (DX contains the most significant part).
;
;
entry30 label  near
       cmp     dx,sizehi       ;is high portion of file size same?
       je      entry40         ;if so, continue
       jmp     sizediff        ;else file is a different size
entry40 label  near
       cmp     ax,sizelo       ;is low portion of file size same?
       je      entry50         ;if so, continue
       jmp     sizediff        ;else file is a different size
       page
;
;
; At this point we have determined that the file exists and is the desired
; size.  Set errorlevel 0 and exit, closing the file.
;
;
entry50 label  near
       mov     ah,3eh          ;set function code = close file -- handle in BX
       int     21h             ;request DOS service
       jnc     entry60         ;if no carry flag, continue
       jmp     fileerror       ;else error closing file
entry60 label  near
       mov     ax,4c00h        ;set DOS function -- terminate with errorlevel 0
       int     21h             ;and request DOS service -- end of program
;
;
; If we get here we don't have DOS 2.0.  Tell user about it and terminate via
; function 0 (which works for all DOS versions).
;
;
dosexit label near
       lea     dx,errmsg1      ;point DX to DOS error msg
       mov     ah,9            ;set function code -- print string
       int     21h             ;and request DOS service
       xor     ax,ax           ;set function code to zero -- program terminate
       int     21h             ;and request DOS service (no errorlevel returned)
;
;
; If we get here we encountered a file error after we successfully opened the
; file.  We must close it in order to release the handle for other programs to
; use.
;
;
fileerror label near
       push    ax              ;save the error code for a moment
       mov     ah,3eh          ;set function code = close file -- handle in BX
       int     21h             ;request DOS service
       pop     ax              ;get error code back -- ignore errors in closing file
;
;
; If we get here we encountered a file error of some sort.  Display the error.
; The error code is in AX.
;
;
fileerror10 label near
       push    ax              ;save error code for a moment
       lea     dx,errmsg2      ;point DX to syntax error msg
       mov     ah,9            ;set function code -- print string
       int     21h             ;and request DOS service
       pop     dx              ;get error code into DX
       cmp     dl,9            ;is it greater than nine?
       jle     fileerror20     ;if so, then only a one digit error code
       push    dx              ;else save a copy of error code
       mov     dl,one          ;and put a '1' in DL -- tens digit
       mov     ah,02           ;set function code -- display char in DL
       int     21h             ;and request DOS service
       pop     dx              ;restore old error code and
       sub     dl,10d          ;subtract ten -- tens digit now displayed
fileerror20 label near
       add     dl,zero         ;convert from binary to ASCII code
       mov     ah,02           ;set function code -- display char in DL
       int     21h             ;and request DOS service
       mov     dl,cr           ;send
       mov     ah,02           ;    a
       int     21h             ;    carriage return
       mov     dl,lf           ;and a
       mov     ah,02           ;    line feed
       int     21h             ;to the console to keep things pretty
sizediff label near
       mov     ax,4c01h        ;set DOS function -- terminate with errorlevel 1
       int     21h             ;and request DOS service -- end of program
entry  endp
       page
;
;
; Messages/other stuff
;
;
filename db    'ERRLOG', 0                     ;filename to look for - ASCIIZ string
errmsg1 db     'SIZER requires DOS 2.0 or greater.', cr, lf, dollar
errmsg2 db     'File access error -- status: ', dollar
copyright db   'SIZER -- Copyright (C) 1983 Tony Alan Rhea'
;
;
cseg   ends
       end     entry
```
{% endraw %}

## TABLET.BAS

{% raw %}
```bas
1 ' This program was uploaded to the Capital PC Users Group Software Exchange
2 ' Host system by  Alex Hobbs of Raleigh NC on 11-12-82 at 17:20
50 KEY OFF
1000 GOTO 5000
1010 C$=INKEY$:IF C$="" THEN GOTO 1010
1020 C=ASC(RIGHT$(C$,1)):IF LEN(C$)=1 AND (C<48 OR C>57) AND C <> 32 AND C <> 13 THEN GOTO 1010
1030 RETURN     
1040 GET (CX-10,CY-8)-(CX+10,CY+8),UCUR:PUT(CX-10,CY-8),CUR,XOR:RETURN
1050 PUT (CX-10,CY-8),UCUR,PSET:ECOL=POINT(CX,CY):RETURN
1060 GOSUB 1050:T=C-71
1070 CX=CX+RX*DX(T)
1080 IF CX<10 THEN CX=10:BEEP ELSE IF CX>299 THEN CX=299:BEEP
1090 CY=CY+RY*DY(T)
1100 IF CY<8 THEN CY=8:BEEP ELSE IF CY>183 THEN CY=183:BEEP
1110 ON SKETCH GOTO 1345, 1390,1355, 1365, 1415, 1375, 1040, 1040, 1480, 1040
1120 T=C-48:IF T=0 THEN RX=PIC(0)/2:RY=PIC(1):RETURN
1130 RX=(8*(T)-4)/3:RY=2*(T)-1:RETURN
1140 COLOR BACK:GOSUB 1010:IF C<>32 THEN RETURN 5020
1150 BACK=BACK+1:IF BACK>15 THEN BACK=0
1160 GOTO 1140
1170 GET (124,90)-(195,107),HOLD
1180 COLOR,PAL
1190 LINE (124,90)-(147,107),1,BF:LINE(148,90)-(171,107),2,BF:LINE(172,90)-(195,107),3,BF
1200 GOSUB 1010:IF C<>32 THEN PUT (124,90),HOLD,PSET:RETURN 5020
1210 PAL=1-PAL:GOTO 1180
1220 GET (124,90)-(195,107),HOLD
1230 LINE (124,90)-(195,107),COL,BF
1240 GOSUB 1010:IF C<>32 THEN PUT (124,90),HOLD,PSET:RETURN 5020
1250 COL=COL+1:IF COL>3 THEN COL=0
1260 GOTO 1230
1270 GET (124,90)-(195,107),PIC
1280 LINE(124,90)-(195,107),BND,BF
1290 GOSUB 1010:IF C<>32 THEN PUT (124,90),PIC,PSET:RETURN 5020
1300 BND=BND+1:IF BND>3 THEN BND=0
1310 GOTO 1280
1320 COL=BND:RETURN
1330 ON C-58 GOTO 1340, 1380,1350,1362,1410,1370,1220,1270,1470,1560
1340 GOSUB 1050
1345 LX=CX:LY=CY:PSET(CX,CY),BND:GOSUB 1040:RETURN
1350 GOSUB 1050
1355 LINE (LX,LY)-(CX,CY),BND:GOSUB 1040       
1360 OX=LX:OY=LY:LX=CX:LY=CY:RETURN
1362 GOSUB 1050
1365 LINE (LX,LY)-(CX,CY),BND:GOTO 1040
1370 GOSUB 1050
1375 LINE (LX,LY)-(CX,CY),BND,B:GOSUB 1040:RETURN
1380 GOSUB 1050
1390 TX=ABS(CX-LX):TY=6*ABS(CY-LY)/5:CIRCLE(LX,LY),SQR(TX*TX+TY*TY),BND:GOTO 1040
1410 GOSUB 1050
1415 PAINT (CX,CY),COL,BND:GOSUB 1040:RETURN
1430 ON C-103 GOTO 1670,1630,8000,1820,1440,1440,1140,1170,1570,1850
1440 BEEP:RETURN
1470 GOSUB 1050
1480 IF CX+PIC(0)/2>320 THEN BEEP:GOTO 1040
1490 TY=PIC(1):IF CY+PIC(1)>200 THEN PIC(1)=200-CY
1500 ON PMODE GOSUB 1520,1530,1540,1550
1510 PIC(1)=TY:GOTO 1040
1520 PUT(CX,CY),PIC,PSET:RETURN
1530 PUT(CX,CY),PIC,XOR:RETURN
1540 PUT(CX,CY),PIC,OR:RETURN
1550 PUT(CX,CY),PIC,AND:RETURN
1560 GOSUB 1050:GET(LX,LY)-(CX,CY),PIC:GOSUB 1040:RETURN
1570 GET(124,90)-(195,107),HOLD
1580 T$="PSETXOR  OR AND "
1590 LOCATE 13,19:PRINT " ";MID$(T$,4*PMODE-3,4);" ";
1600 GOSUB 1010:IF C<>32 THEN PUT (124,90),HOLD,PSET:RETURN 5020
1610 PMODE=PMODE+1:IF PMODE>4 THEN PMODE=1
1620 GOTO 1590
1621 SKETCH=C-83:RETURN
1630 TYPE$="loaded":GOSUB 1710
1640 IF NAMEF$="" THEN RETURN
1650 DEF SEG=&HB800:BLOAD DRIVE$+":"+NAMEF$+".PIC",0                  
1660 GOTO 1040
1670 TYPE$="saved":GOSUB 1710
1680 IF NAMEF$="" THEN RETURN ELSE ON ERROR GOTO 1700
1690 GOSUB 1050:DEF SEG=&HB800:BSAVE DRIVE$+":"+NAMEF$+".PIC",0,&H4000:GOTO 1040
1700 LOCATE 1,1:PRINT "Unable to save picture ";:GOSUB 1010:PUT(0,0),HOLD,PSET:GOSUB 1040:RETURN 5020
1710 GET (0,0)-(319,7),HOLD
1720 LOCATE 1,1:PRINT SPACE$(39);:LOCATE 1,1
1730 PRINT"name of picture to be ";TYPE$;
1740 LINE INPUT": ";NAMEF$
1750 IF NAMEF$="" GOTO 1810
1760 NAMEF$=LEFT$(NAMEF$,8)
1770 LOCATE 1,1:PRINT SPACE$(39);:LOCATE 1,1
1780 LINE INPUT;" Drive picture is on (default=A): ";DRIVE$
1790 IF DRIVE$="" THEN DRIVE$="A"
1800 IF DRIVE$="a" OR DRIVE$="A" OR DRIVE$="B" OR DRIVE$="b" OR  DRIVE$="D" OR DRIVE$= "d" GOTO 1810 ELSE GOTO 1770
1810 PUT (0,0),HOLD,PSET:RETURN
1820 GET (0,0)-(319,31),HOLD:GOSUB 1770
1825 ON ERROR GOTO 1835
1830 LOCATE 1,1:FILES DRIVE$+":*.PIC":GOTO 1840
1835 LOCATE 1,1:PRINT "Picture not found ";
1840 GOSUB 1010:PUT(0,0),HOLD,PSET:RETURN 5020
1850 GOSUB 1050:LOCATE (CY+4)/8,(CX+4)/8:LINE INPUT "";T$:GOTO 1040
2000 ON C-93 GOTO 2100,2200,2300,2400,1440,2500,1440,2600,1440,2700
2100 T=BND:BND=ECOL:GOSUB 1340:BND=T:RETURN
2200 T=BND:BND=ECOL:GOSUB 1380:BND=T:RETURN
2300 T=BND:BND=ECOL:LX=OX:LY=OY:GOSUB 1362:BND=T:RETURN
2400 T=BND:BND=ECOL:GOSUB 1362:BND=T:RETURN
2500 T=BND:BND=ECOL:GOSUB 1370:BND=T:RETURN
2600 GOSUB 1050:LINE (LX,LY)-(CX,CY),COL,BF:GOSUB 1040:RETURN
2700 CLS:GOSUB 1040:RETURN
5000 GOSUB 5070
5010 GOSUB 1010
5020 IF C>=48 AND C<=57 THEN GOSUB 1120
5030 IF C>=59 AND C<=68 THEN GOSUB 1330
5040 IF C>=71 AND C<=81 THEN GOSUB 1060
5045 IF C>=84 AND C<=93 THEN GOSUB 1621
5047 IF C>=94 AND C<=103 THEN GOSUB 2000
5050 IF C>=104 AND C<=113 THEN GOSUB 1430
5060 GOTO 5010
5070 DEFINT A-Z
5080 DIM HLPD(8001),PIC(8001),CUR(52),UCUR(52),DX(10),DY(10),HOLD(1281)
5100 BACK=0:PAL=1:COL=3:BND=3:PMODE=2:SKETCH=10
5105 GOSUB 6000
5110 KEY OFF:SCREEN 1,0:COLOR BACK,PAL
5130 CLS:GET (0,0)-(0,0),PIC
5140 LINE (0,8)-(6,8):LINE(14,8)-(20,8)
5150 LINE(10,0)-(10,4):LINE(10,12)-(10,16)
5160 GET (0,0)-(20,16),CUR
5180 CLS:CX=159:CY=99:GOSUB 1040:GOSUB 1340:C=57:GOSUB 1120
5190 DATA -1,-1,0,-1,1,-1,0,0,-1,0,0,0,1,0,0,0,-1,1,0,1,1,1
5200 FOR I=0 TO 10:READ DX(I),DY(I):NEXT
5210 FOR I=1 TO 10:KEY I,"":NEXT
5220 RETURN
6000 CLS:PRINT "                    TABLET"
6001 PRINT
6002 PRINT
6003 PRINT "This program can be used with the IBM Color Graphics Adapter"
6004 PRINT "and Advanced Basic, to produce picture (.PIC) files, in color"
6005 PRINT
6006 PRINT "To get instructions, press ALT-F3 any time"
6007 LOCATE 25,1:PRINT "(Press any key) to start the program";
6008 GOTO 1010
7000 CLS:WIDTH 80:PRINT "                TABLET:    INSTRUCTIONS:":PRINT:PRINT"- Use numeric keypad to move graphics cursor."
7001 PRINT :PRINT"- Press number to set distance of cursor move."
7002 PRINT :PRINT "- Use 'F' Keys to perform graphics functions."
7003 PRINT
7004 PRINT:PRINT "    F KEYS MAY BE USED IN 4 MODES:":PRINT
7005 PRINT "        - Alone:  perform basic graphics functions."
7006 PRINT "        - Shift:  causes basic function to perform each"
7007 PRINT "                  time cursor is moved."
7008 PRINT "        - Ctrl :  same as basic function, but erase."
7009 PRINT "        - Alt  :  perform over-all screen and system"
7010 PRINT "                  functions."
7020 LOCATE 25,1:PRINT "press any key to see next page.";
7021 C$=INKEY$:IF C$="" THEN 7021
7030 CLS:PRINT "           TABLET:    ";
7031 PRINT "  BASIC GRAPHICS FUNCTIONS:  (F key functions)"
7033 PRINT:PRINT "    1    POINT  - etches a point and sets the reference point"
7034 PRINT       "    2    CIRCLE - draws a circle around the reference point"
7035 PRINT       "    3    CONNECT - draws a line to reference point,"
7036 PRINT       "                  and resets the reference point."
7037 PRINT       "    4    LINE   - draws a line to reference point."
7038 PRINT       "    5    PAINT  - paints the area at cursor with color"
7039 PRINT       "                  defined in F7.  Boundaries of paint "
7040 PRINT       "                  are defined by the color from F8."
7041 PRINT       "    6    BOX    - draws a box from reference point corner"
7042 PRINT       "                  to cursor point corner."
7043 PRINT       "    7    PCOLOR - color to use for paint in F5."
7044 PRINT       "    8    LCOLOR - color of lines and points drawn."
7045 PRINT       "                  Also, color of boundary for F5."
7046 PRINT       "    9    FIGURE - Place copy from F10 in space whose"
7047 PRINT       "                  upper left corner is cursor position."
7048 PRINT       "   10    COPY   - Take a copy of screen portion whose "
7049 PRINT       "                  upper left corner is reference point"
7050 PRINT       "                  and lower left corner is cursor point."
7051 PRINT       "                  This copy may be placed anywhere on "
7052 PRINT       "                  screen with F9."
7053 LOCATE 25,1:PRINT "press any key to see next page...";
7054 C$=INKEY$:IF C$="" THEN 7054
7060 CLS:PRINT "        TABLET:  SCREEN AND SYSTEM FUNCTIONS:  (ALT Fkeys)"
7061 PRINT:PRINT "   1     SAVE - saves the screen on disk (.PIC file)"
7062 PRINT:PRINT "   2     LOAD - loads a .PIC file from disk to screen."
7063 PRINT:PRINT "   3     HELP - displays this explanation"
7064 PRINT:PRINT "   4     FILES- displays all .PIC file names on a given disk."
7065 PRINT:PRINT "   7  BACKGRND- select screen background color"
7066 PRINT:PRINT "   8  PALETTE - select color choice."
7067 PRINT:PRINT "   9    PMODE - select action to use with 'PUT' for F9"
7068 PRINT       "                (see page 4-200 of BASIC manual)."
7069 PRINT:PRINT "  10    TEXT  - print text on screen in color from F8"
7070 PRINT:PRINT:PRINT"(For 7,8, and 9 - present setting is displayed"
7071 PRINT            " on screen. Roll past choices by pressing     "
7072 PRINT            " space bar, then ENTER to set new choice.)"
7079 LOCATE 25,1:PRINT "press any key to go back to graphics...";
7080 C$=INKEY$:IF C$="" THEN 7080
7090 CLS:SCREEN 1,0:COLOR BACK,PAL
7100 PUT (0,0),HLPD:RETURN
8000 GET (0,0)-(319,199),HLPD
8001 GOTO 7000
```
{% endraw %}

## UPPER.ASM

{% raw %}
```


		title	upper - filter
;
;		author: Gary R. Cantrell
;
;		This filter reads data from the standard input
;		device, converts to upper case and writes to the
;		standard output device.
;
;		usage:	upper < [d:][path]filename[.ext]
;				-or-
;			[filter |] upper [| filter]
;
;		requires: DOS 2.0 & runs as COM module
;
cseg		segment para public 'code'
		assume	cs:cseg,ds:cseg,es:cseg,ss:cseg
		org	100h			;offset for com module
upper		proc	far
		mov	ah,30h			;get DOS version
		int	21h
		cmp	ax,0002h
		jnb	version_ok
		mov	dx,offset ver_err	;bomb out on lesser version
		mov	ah,9
		int	21h
		int	20h
version_ok:	xor	bx,bx			;zero is stdin
		mov	ah,45h			;duplicate stdin handle
		int	21h
		mov	bp,ax			;save the handle returned
		mov	ah,3eh			;close the old handle
		int	21h
		mov	bx,2			;two is stderr
		mov	ah,45h			;duplicate stderr handle
		int	21h
read_block:	cld				;set scan direction
		mov	dx,offset buffer	;set input buffer
		mov	ax,length buffer	; and length
		mov	cx,ax
		mov	bx,bp			;point to stdin
		mov	ah,3fh			;read stdin for CX length
		int	21h			;read input
		or	ax,ax			;test return code
		jnz	$+4
		int	20h			;return to DOS
		mov	cx,ax			;number of bytes read
		mov	si,dx			;start of buffer
getc:		lodsb
		cmp	al,97			;skip conversion
		jb	putc			;  if not
		cmp	al,122			;    lower case
		ja	putc
		and	al,11011111b		;convert to upper case
putc:		mov	dl,al			;put character to stdout
		mov	ah,2
		int	21h
		dec	cx			;decrement block count
		jcxz	read_block		;at end, read next block
		jmp	getc
;
ver_err 	db	'upper: incorrect dos version'
buffer		db	512 dup(0)		;buffer area
		db	0
upper		endp
cseg		ends
		end	upper

13 minutes remaining.
Enter command (with leading period):

>
```
{% endraw %}

## XT370.DOC

{% raw %}
```
From: JDS5.TYM@OFFICE-2

                 The XT/370 Professional Workstation

The XT/370 is a PC/XT to which a 370 processor on three boards has
been added.  These boards provide an emulated 370 processor, 512k of
RAM, an emulation of IBM's 3277 model 2 display, and a connection to
an IBM S/370 mainframe.  To complement these hardware enhancements,
IBM also announced VM/PC (Virtual Machine/Personal Computer), which in
conjunction with PC-DOS 2.0, functions as the control program for the
XT/370 when it is running in 370 mode.

Under VM/PC, the XT/370 supports one  of three sessions selected by a
"hot key":

  - a local CMS session (i.e., a CMS session running on the XT/370),
  - a remote 3277 model 2 emulation session (a session displayed on
    the XT/370's display but run on a remote S/370), or
  - a remote 3101 emulation session via an optional asynchronous
    connection.

When running in PC/XT mode, the  XT/370  is  compatible  with current
PC/XT capabilities including use of "foreign" expansion boards. 

The Hardware

The XT/370 consists of a standard PC/XT chassis with eight expansion
slots.  Three of these slots are populated with special S/370
emulation cards.

PC/370-P card    The P card implements an emulation of the 370
                 instruction set.  The card contains three
                 microprocessors.

                   1.  One of the  processors  is  a heavily modified
                       Motorola  68000  produced  by  Motorola  under
                       license  to  IBM.  This  chip  implements  the
                       general   purpose    registers,    the    PSW,
                       instruction  fetch and decode  logic,  and  72
                       commonly  used S/370 instructions.  Since  the
                       chip is  manufactured under license to IBM, it
                       is doubtful that it will appear as a  Motorola
                       product. 

                   2.   A  second  processor  is a slightly  modified
                       Motorola  68000  which  will   be   listed  in
                       Motorola's  catalog.  This chip  emulates  the
                       remaining  non-floating   point  instructions,
                       manipulates the page  table, handles exception
                       conditions,     and     performs      hardware
                       housekeeping. 

                   3.  The third microprocessor  is  a modified Intel
                       8087  which   executes  S/370  floating  point
                       instructions.   This  chip is interfaced as  a
                       peripheral rather  than  via  the  normal 8087
                       co-processor linkage.

PC370-M card     The M card contains  512KB  of  parity  checked RAM.
                 This memory may be accessed from the P  card or from
                 the XT's native 8088 processor.  Concurrent requests
                 are arbitrated in favor of the  8088.  While  the  M
                 card does live in an XT expansion slot,  it  is also
                 connected  to  the  P  card  via   a   special  edge
                 connector.   16-bit wide transfers  between  M  card
                 memory  and  the  P  card are effected through  this
                 connector  (normal  XT  memory transfers operate  in
                 8-bit wide chunks). 

                 When  operating  in  native  PC  mode, the M  card's
                 memory  is addressed as contiguous memory  beginning
                 at  the  end  of  the 256KB memory of  the  system's
                 motherboard.  In  native  PC  mode,  the  XT/370 has
                 640KB of usable RAM - some of the M card's memory is
                 not used. 

                 When  operating  in  370 mode, only the 512KB RAM of
                 the  M  card  is  usable (i.e.,  the  256KB  on  the
                 system's motherboard is not available for the VM/CMS
                 system).  The first 480KB of  this memory implements
                 480KB  of  real S/370 space.  The remaining 32KB  on
                 the M card functions  as a microcode control storage
                 area for the second P card microprocessor. 

                 Of the 480KB of  S/370  memory,  the  first 64KB are
                 consumed by VM/PC leaving  416KB  of real memory for
                 user  programs.   User programs larger than this are
                 handled via paging. 

PC/3277-EM  card  This card attaches the XT/370 to a S/370  mainframe
                 via a local or remote 3274 control unit  (connection
                 via  coaxial cable).  When VM/PC is running, the  EM
                 card enables the XT/370 to  emulate  a  3277 model 2
                 using the IBM monochrome or color display (since the
                 3277 does not  support  color, if a color display is
                 used, then  default  colors  are  utilized).   Under
                 VM/PC, the EM card is also  used  in  uploading  and
                 downloading of data between a host VM system and the
                 XT/370. A  3274 coaxial connection can transfer data
                 about  as  fast  as  today's  small winchester disks
                 (over 600,000 bytes/second).

Software

The XT/370 can run in native PC/XT mode or in S/370 mode under VM/PC.
Under VM/PC, the user can alternate via a "hot key"  between  a local
CMS  session  and  a  remote  3277  session (or  optionally,  a  3101
emulation session).   VM/PC  on  the  XT/370  will support all VM/CMS
software conforming to the following requirements. 

  -  Uses no more than one virtual address space. 
  -  Runs in a virtual machine of up to 4 MB.
  -  Supports 3277 model 2.
  -  Does not rely on protection exceptions. 
  -  Does not depend on S/370 DOS emulation. 
  -  Does not exceed fixed disk capacity. 
  -  Does not require more than 416KB of real memory. 
  -  Does not rely on internal VM/SP and/or HPQ structure and
     formats. 
  -  Does not rely on time dependent operations.

In effect, this means that most S/370 CMS software will run on the
XT/370.  Some notable exceptions:

  -  PROFS does not run because it utilizes multiple virtual
     machines,
  -  ISPF does not run because it depends on CP internals,
  -  any program using VSAM will not operate  properly  because  VSAM
     uses non-standard disk formats (S/370 DOS emulation); this means
     that PL/I software using  indexed  files  will  not  run  on the
     XT/370.

VM/PC does not offer a true VM-like environment.  Rather, it provides
an environment in which CMS applications can run.  Non-CMS VM
applications will not run on the XT/370.

Within the supported CMS environment, each CMS minidisk (simulated
disk-pack on which a CMS user stores many files) is implemented as a
PC-DOS file.  This is very nice since it enables the use of PC-DOS
commands to backup CMS data and to move this data between XT/370
workstations.

IBM will license IBM S/370 software for use on the XT/370.  Licensing
agreements are made in conjunction with the original mainframe S/370
license (i.e., for now, you must be a S/370 licensee to license IBM
S/370 software for the XT/370) and the corresponding software must be
downloaded from a S/370. License fees run a few dollars per month per
XT/370 workstation for each licensed software unit.  IBM has announced
the following software to be available for licensing.
 
             Product                    Monthly Charge
    ----------------------             ----------------
    OS/VS COBOL Compiler and Library         $19
    OS/VS COBOL Library                        6
    COBOL Interactive Debug                   21
    VS FORTRAN Compiler and Library           17
    VS FORTRAN Library                         4
    IBM BASIC Processor and Library           21
    PL/I Optimizing Compiler and Library      21
    PL/I Transient Library                     4
    PL/I Resident Library                      4
    Pascal/VS                                 11
    Assembler H                                9
    Document Composition Facility (SCRIPT/VS) 18

License fees for IBM CMS software are charged to the mainframe
licensee rather than to the XT/370 proprietor.  But how can IBM
enforce these fees?  When this question was posed at a recent
professional meeting, IBM representatives responded that IBM would
continue to trust its customers.  In corporate environments, where the
XT/370 will be sold, this is probably quite reasonable.

The VM/PC system must also be licensed.  It is provided on six floppy
diskettes and includes the VM/PC Control Program, CMS, XEDIT, EXEC2,
local and remote file transfer utilities, and the 370 Processor
Control package.

370 Processor Control is a general purpose debug facility similar to
the debug facilities found on the operator consoles of S/370
processors.  It runs on the XT/370 under VM/PC as one of several
concurrent sessions (including a local and a remote CMS session).  It
can be entered from any other session and can exit to any session.
370 Processor Control enables the user to:

  -  stop and start the processor,
  -  stop the processor by real instruction compare,
  -  generate an external interrupt to the processor,
  -  edit (full screen mode) the following:
       *  370 general purpose registers,
       *  370 floating point registers,
       *  370 control registers,
       *  370 PSW,
       *  370 storage, both real and virtual,
       *  370 page address table.

The user interface to the 370 Processor Control session relies heavily
on function keys whose usage is displayed on the screen.

XT/370 VM/PC CMS and CP commands are similar to S/370 VM/SP release 2
commands.  From the looks of the list given in the VM/PC announcement
notice, most CMS and CP commands are supported.  VM/PC XEDIT and EXEC2
are compatible with the corresponding software of VM/SP release 2.

Included on the distribution diskettes with VM/PC is a remote server
program which may be used on a S/370 host to support communications
between the host and the XT/370. This program affords the following
functions:

  -  Spool, disk, and file services,
  -  VM/PC service request processing,
  -  Logical and physical communications management.

We aren't quite sure how you would upload this program to a host
without the services of the program itself.

Performance

The XT/370 has been in the field at a number of locations for several
months.  First rumors on performance of the XT/370 CPU indicate that
it is approximately half of a 4331 when running a commercial
instruction mix.  When running scientific codes, twice the performance
of the 4331 is expected.  In general, the CPU is categorized as a .1
MIPS processor.  This may not sound terribly impressive in times when
we are used to multi-MIPS single chip micros.  Remember however, that
.1 million S/370 instructions are likely to produce substantially more
computing than .1 million instructions of your standard micro chip.

The XT/370 running in S/370 mode can access the 512KB on the M-card.
Of this 512KB, 32KB are reserved for microcode control storage; 64KB
is used up by the VM/PC Control Program. This leaves 416KB for user
programs.  Should a user program require more memory than this, then
VM/PC will use a paging area on the XT/370's hard disk swap pieces of
the program in and out of memory according to usage.

Swapping on the little 10MB hard disks is going to be considerably
slower than on the large disks used with mainframes.  Thus, programs
larger than 416KB will probably run very slowly.  Field test users
report long delays in loading large programs into memory even when
these programs are well under the maximum for non-paged operation
(e.g. XEDIT). Again, this is directly attributable to the relatively
slow operation of the XT/370 hard disks.

While 10MB sounds like a great deal of disk space to those of us who
have been using floppies, in the mainframe world 10MB is just a drop
in the bucket.  In its XT/370 product announcement, IBM cites the
following example of disk utilization.

                                      bytes(MB)
     System storage (VM/PC, DOS)         1.6
     OS/VS COBOL Compiler and Libraries  1.0
     Document Composition Facility       0.6
     Page file (1 MB virtual)            1.0
     User A disk for CMS data/programs   3.0
     Spooling for printing               0.5
     User area for PC data/programs      2.3
                                       -------
                             total      10.0

Here we have but 1MB as a paging area (reduces the maximum VM/CP
virtual job size from 4MB to 1MB) and .5MB for spooling.  The 20MB
XT/370 option (see below) will undoubtedly be quite popular.

Configurations and Prices

XT/370 (IBM machine number 5160) is announced in two configurations:
model 588 and model 568.

[5160 is also the model number of regular XTs. -Ed.]

The 5160 Model 588 is the XT-like system we have been describing.  It
includes one floppy and one 10MB hard disk drive (or as IBM calls it,
a "fixed" disk drive).  The price for this configuration is $8995.
VM/PC is available for an additional one time license fee of $1000.

Model 568 is the same as the 588 but without the hard disk and the
hard disk controller board.  To augment this configuration, you may
purchase a new IBM PC option, the 5161 expansion unit model 3. This
unit comes with two 10MB hard disk units, a hard disk controller, and
eight system expansion slots (six full-feature and two short slots).
The XT/370 model 568 is priced at $6720 and the expansion unit price
is $4970. Thus a 20MB XT/370 costs $11690.  Add $1000 for VM/PC and
you're all set to go for about $13K (tax included).

The three XT/370 boards are available as an upgrade for the IBM PC/XT.
The upgrade kit contains the boards, installation instructions, and a
logo kit to change the name plate to read "IBM XT/370".  Thank heaven
for IBM!  The price of the XT upgrade is $3790.

iiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0110

     Volume in drive A has no label
     Directory of A:\

    AUTOFILE BAS     12050  10-17-83   1:17a
    AUTOFILE BAT       512   9-26-83   1:04a
    AUTOFILE DOC      9216   9-26-83   1:04a
    CRC      TXT      1969  11-09-84   2:21p
    CRCK4    COM      1536  10-21-82   7:54p
    DEFINE   BAS      5217   1-08-84   5:23a
    DEFINE   DOC       896   1-08-84   4:38a
    DOSCOLOR BAS      4864   1-08-84   3:28a
    DOSCOLOR BAT       896   1-08-84   3:29a
    HC       COM      3456  12-25-83   3:30a
    HC       DOC      3200  12-25-83   3:31a
    PRINTER  ASM     25964   1-08-84   5:39a
    PRINTER  COM      1152  12-30-83  12:15a
    PRINTER  DAT       384  12-30-83  12:16a
    PRINTER  DOC     10240  12-30-83  12:18a
    RAMDISK  DOC       759   1-12-84   1:04a
    RAMDISK  SYS       768  12-25-83   4:37a
    READ     ME       2091   1-13-84   9:49p
    ROMBIOS  ASM      9856  11-27-83   3:31a
    SCRN     ASM      4224   1-08-84   4:39a
    SCRN     DOC      3078   1-08-84   5:17a
    SIZER    ASM      9287  12-04-83   5:37a
    SIZER    COM       257  12-04-83   2:02a
    SIZER    DOC      3200  12-03-83  11:23p
    STEEPDES APL      9856  12-25-83   4:03a
    TABLET   BAS      9216   1-08-84   2:23a
    UPPER    ASM      1792   1-08-84   4:32a
    UPPER    COM       625   1-08-84   8:22a
    UPPER    DOC       384   1-08-84   4:36a
    WHEREIS  COM       512   1-08-84   4:55a
    WHEREIS  DOC      1024   1-08-84   4:56a
    XT370    DOC     14534   1-08-84   5:11a
           32 file(s)     153015 bytes
                               0 bytes free
