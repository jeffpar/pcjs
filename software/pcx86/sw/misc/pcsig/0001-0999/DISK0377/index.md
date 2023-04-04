---
layout: page
title: "PC-SIG Library Disk #377"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0377/
machines:
  - id: ibm5160
    type: pcx86
    config: /machines/pcx86/ibm/5160/cga/256kb/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk 0377"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5160" %}

{% comment %}info_begin{% endcomment %}

## Information about "PRINTER UTILITIES #6"

    While this disk is packed with an amazing variety of printer utilities
    for printers from Gemini to Prowriter to NEC to LaserJets, the
    outstanding program is the PRINTER.COM, a program which allows you to
    use special print functions with ease on ANY make of printer.
    PRINTER.COM sets up your printer to make use of its special print
    functions (compressed print, double strike print, italics print, etc.).
    Whatever your printer has the capability to do, you can easily do it
    with PRINTER.COM.
    
    But don't overlook BANNERIFIC!  BANNERIFIC is a program which lets you
    produce large banners on your computer printer.  All IBM PC keyboard
    characters may be used.  The size of the characters produced on the
    printer is variable, and may be as large as the width of your computer
    paper.
    
    System Requirements: Printer
    
    How to Start: Consult the .TXT and .DOC files for directions and
    documentation; also, look for READ.ME files.  To run the BASIC
    programs, consult the directions in GETTING STARTED for your
    configuration.  To run any file marked .EXE or .COM, type its filename
    and press <ENTER>.
    
    Suggested Registration:  $15.00
    
    File Descriptions:
    
    BANNERIF EXE  Print any size characters on your printer
    BANNERIF DOC  Documentation for BANNERIF.EXE
    DIABLO   EXE  Support a serial printer with ETX/ACK handshaking
    DIABLO   DOC  Documentation for DIABLO.EXE
    COVER_TB COM  Doesn't work
    CITOHSET BAS  Sample file
    GEMSET   EXE  Set up program for Gemini printer
    GEMINI   EXE  Configuration program for Gemini printer
    GDUMP    EXE  Executable file of GDUMP.EXE
    GDUMP    BAS  Medium resolution graphic dump of C.ITOH 8510 & NEC 8023
    EW-PROWR TXT  Sample print file
    EW-PROWR EWF  Use Prowriter or NEC 8023 printer with Easy Writer 1.1
    EPSN-OKI DOC  Documentation for EPSN-OKI.COM
    EPSN-OKI COM  Convert "print" file from IBM/Epson format to Oki format
    OKIDATA  EXE  Executable version of OK84ASSET.BAS
    OK84ASET BAS  Okidata 82A configuration program
    NECSET   DOC  Documentation for NECSET.COM
    NECSET   COM  Set the C Itoh 8510A or NEC 8023A-C printer parameters
    NECSCRN  DOC  Documentation for NECSCRN.COM
    NECSCRN  COM  Graphics and text screen dump for NEC 8023A printer
    NECPRTSC DOC  Documentation for NECPRTSC.COM
    NECPRTSC COM  Driver for NEC 8023 for Shft-PrtSc screen print sequence
    NECPRINT TXT  Sample file for NECPRINT.BAS
    NECPRINT BAS  Text editor for NEC PC-8023A
    NECPLOT7 BAS  Demo plot for NEC 8023 printer
    NECGRAF  COM  Graphic screen dump for NEC printer
    LASERJET EXE  Configuration for Laserjet printer
    IDSPRISM BAS  Initialize IDS Prism Color Printer
    HP7470A  BAS  Example of function for generating HP7470A plots
    GRCITOH  COM  Graphics dump for C.ITOH printer
    OKIDUMP  COM  Allow graphic screens to be printed on the line printer
    OKIGRAF  COM  Graphic dump program for Okidata printers
    OKIDUMP  DOC  Documentation for OKIDUMP.COM
    PRINTER  DAT  Part of PRINTER.COM
    PRINTER  COM  Allows use of special print functions on any make printer
    OKISET   DOC  Documentation for OKISET.COM
    OKISET   COM  Send control characters to OkiData Microline 92 connected
    SETOKI   COM  Set up program for Okidata printers
    PROWRTER DOC  Switch settings for Prowriter/NEC 8023 printer
    PROWRITE EXE  Configuration set up for Prowriter printers
    PRINTER  DOC  Documentation for PRINTER.COM
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## CITOHSET.BAS

```bas
10 REM MONITOR
15 ZTITLE$="Program Title Here"
20 GOTO 30
25 END:REM Put Program Exit Here
30 ZHELPSW%=1:ZCSW%=0:ZW%=78
35 SCREEN 0,0,0:WIDTH 80:CLS:OPTION BASE 1
40 KEY OFF
45 ZB1$=STRING$(3,219):ZB2$=STRING$(79,219)
75 ZTOF$=CHR$(12):ZENT$="("+CHR$(17)+ZSHL$+ZSLR$+")":ZTFAC=425
80 DIM ZMENU$(15),ZMLEN%(15)
85 ZE$=" Not Available at this Point":ZDT$=DATE$:ZDT$=LEFT$(ZDT$,2)+"/"+MID$(ZDT$,4,2)+"/"+RIGHT$(ZDT$,2)
90 Z=6:GOSUB 100:GOTO 10000
95 REM Branch Table
100 LOCATE ,,0:ON Z GOSUB 115,675,740,750,785,805,830,850,860,880,905,915,925,935,945,975,985,1000,1015,1040,1050,1060,1070,1085,1095,1105,1120,1125,1135
105 RETURN
110 REM  ZIN
115 ZD$="":ZN=0:GOSUB 1120:GOSUB 1125:ZR%=1:ZLEN%=VAL(ZFLD2$):ZTYPE%=VAL(MID$(Z$,ZPTR2%+1)):ZLEND%=LEN(ZFLD1$)
120 LOCATE 23,1:PRINT TAB(79);" ":LOCATE 23,1
125 PRINT ZFLD1$;" [";
130 IF ZPL$="" THEN 150
135 REM Pre-loaded input
140 PRINT ZPL$;STRING$(ZLEN%-LEN(ZPL$),".");"]":ZD$=ZPL$:ZCT%=LEN(ZPL$):LOCATE 23,ZLEND%+3+ZCT%,1:ZCPTR%=ZCT%+1:GOTO 170
145 REM No Preload
150 PRINT STRING$(ZLEN%,".");"]":LOCATE 23,ZLEND%+3,1
155 ZCT%=0:ZCPTR%=1
160 REM  ZIN Inkey
165 LOCATE ,,1
170 ZCH$=INKEY$:IF ZCH$="" THEN 170
175 Z%=ASC(ZCH$):ZL%=LEN(ZCH$):IF Z%>126 THEN 170
180 REM  Exten'd or Edit Char. Trap
185 IF ZL%>1 THEN 425
190 REM  Control Char. Trap
195 IF Z%<32 THEN 285
200 REM Test Overstrike
205 IF ZINS%=1 THEN 265
210 IF ZCPTR%-1<ZCT% THEN 640
215 REM  Test GT max
220 ZCT%=ZCT%+1:IF ZCT%>ZLEN% THEN ZCT%=ZCT%-1:GOTO 1140
225 ZCPTR%=ZCT%+1
230 IF ZCT%=1 THEN 240 ELSE 265
235 REM Special First Char.
240 IF (ZHELPSW%=1) AND (ZCH$="?") THEN ZR%=5:PRINT ZCH$;:GOTO 660
245 IF ZCH$="?" THEN PRINT ZCH$:Z=26:GOSUB 100:GOTO 115
250 IF ZCH$="+" THEN ZR%=2:PRINT ZCH$;:GOTO 660
255 GOTO 265
260 REM  Normal Process
265 IF (Z%>96) AND (Z%<123) AND (ZCSW%=1) THEN ZCH$=CHR$(Z%-32)
270 IF ZINS%=1 THEN 550
275 PRINT ZCH$;:ZD$=ZD$+ZCH$:GOTO 170
280 REM  Proc. Ctrl Char.
285 ZCTL%=Z%
290 REM ESC=abort
295 IF ZCTL%=27 THEN ZPL$="":GOTO 115
300 IF ZCTL%=3 THEN STOP:GOTO 115
305 IF ZCTL%=9 THEN 630
310 IF ZCTL%<>13 THEN 375
315 REM  Proc. c/r
320 IF ZCT%=0 THEN ZR%=3:GOTO 660
325 IF ZTYPE%=1 THEN 665
330 IF ZD$="0" THEN 665
335 IF ZTYPE%=2 THEN 340 ELSE 350
340 ZT=VAL(ZD$):IF ZT=0 THEN 355
345 ZN=VAL(ZD$):IF ZN<> INT(ZN) THEN 355 ELSE 665
350 ZN=VAL(ZD$):IF ZN=0 THEN 360 ELSE 665
355 Z=21:GOTO 365
360 Z=22
365 ZSAVE$=Z$:GOSUB 100:Z$=ZSAVE$:GOTO 115
370 REM  proc. B/U
375 IF ZCTL%=24 THEN ZR%=2:GOTO 660
380 REM  Proc. BS
385 IF ZCTL%=8 THEN 395 ELSE 415
390 REM  Short BS
395 IF ZCT%=0 THEN 1140
400 IF ZCPTR%-1<ZCT% THEN 575
405 ZCT%=ZCT%-1:ZCPTR%=ZCPTR%-1:LOCATE 23,ZLEND%+3+ZCT%:PRINT ".";:LOCATE 23,ZLEND%+3+ZCT%:ZD$=LEFT$(ZD$,LEN(ZD$)-1):GOTO 170
410 REM  Pass Control Character
415 ZR%=4:ZN=ZCTL%:ZD$=" ":GOTO 665
420 REM Proc Ext'd Char.
425 ZXT%=ASC(MID$(ZCH$,2)):IF ZXT%=72 THEN ZR%=2:GOTO 660
430 REM ZIN Inner-field Editing
435 LOCATE ,,0:ZBR%=ZXT%-74:IF ZBR%<=0 THEN 445
440 ON ZBR% GOTO 470,445,485,445,500,445,445,530,575
445 GOSUB 1165:IF ZXT%=15 THEN 600
450 IF ZXT%=117 THEN 610
455 IF (ZXT%>58) AND (ZXT%<69) THEN 620
460 GOTO 170
465 REM Curs left
470 IF ZCPTR%=1 THEN 1140
475 GOSUB 1165:ZCPTR%=ZCPTR%-1:GOTO 1145
480 REM Curs right
485 IF ZCPTR%=ZCT%+1 THEN 1140
490 GOSUB 1165:ZCPTR%=ZCPTR%+1:GOTO 1145
495 REM END Key
500 Z%=23:Z=11:GOSUB 100:LOCATE 23,1:PRINT "Press END key again to End, space bar to continue [.]":LOCATE 23,52
505 ZCH9$=INKEY$:IF ZCH9$="" THEN 505
510 ZL%=LEN(ZCH9$):IF ZL%<2 THEN 115
515 ZXT%=ASC(MID$(ZCH9$,2)):IF ZXT%=79 THEN Z=15:GOSUB 100
520 GOTO 115
525 REM INS Toggle
530 IF ZCT%=ZLEN%-1 THEN 1140
535 IF ZINS%=0 THEN GOSUB 1155 ELSE GOSUB 1165
540 GOTO 170
545 REM INS Char.
550 IF ZCT%=ZLEN% THEN 1140
555 ZDL$=LEFT$(ZD$,ZCPTR%-1):ZDR$=MID$(ZD$,ZCPTR%):ZDR$=ZCH$+ZDR$
560 ZD$=ZDL$+ZDR$:ZCT%=ZCT%+1:ZCPTR%=ZCPTR%+1
565 PRINT ZDR$;STRING$(ZLEN%-LEN(ZD$),".");"]":GOTO 1145
570 REM Delete Char
575 IF ZCT%=ZCPTR%-1 THEN 1140
580 GOSUB 1165:ZDL$=LEFT$(ZD$,ZCPTR%-1):ZDR$=MID$(ZD$,ZCPTR%+1)
585 ZD$=ZDL$+ZDR$:ZCT%=ZCT%-1:PRINT ZDR$;".":GOTO 1145
590 GOTO 170
595 REM Back Tab
600 GOSUB 1165:ZCPTR%=1:GOTO 1145
605 REM Ctrl-End
610 GOSUB 1165:ZCT%=ZCPTR%-1:ZD$=LEFT$(ZD$,ZCT%):LOCATE 23,ZLEND%+2+ZCPTR%:PRINT STRING$(ZLEN%-LEN(ZD$),".");"]":GOTO 1145
615 REM Pass Function Keys
620 ZCTL%=ZXT%:GOTO 415
625 REM Forw'd Tab
630 GOSUB 1165:ZCPTR%=ZCT%+1:GOTO 1145
635 REM Overstrike
640 ZDL$=LEFT$(ZD$,ZCPTR%-1):IF ZCPTR%-1=0 THEN ZDL$=""
645 ZDR$=MID$(ZD$,ZCPTR%+1):IF ZCPTR%-1=ZCT% THEN ZDR$=""
650 ZD$=ZDL$+ZCH$+ZDR$:PRINT ZCH$;:ZCPTR%=ZCPTR%+1:GOTO 170
655 REM Common End
660 ZD$=" ":ZN=0:ZINS%=0
665 GOSUB 1165:ZPL$="":RETURN
670 REM ZMENU
675 GOSUB 1120:ZROWX%=VAL(ZFLD1$):GOSUB 1125:ZCOL%=VAL(ZFLD2$):LOCATE ZROWX%,ZCOL%:ZLTST%=LEN(Z$)
680 FOR ZMNO%=1 TO 15:ZPTR1%=ZPTR2%:IF ZPTR2%=0 THEN 705
685 IF ZPTR2%>=ZLTST% THEN 705
690 GOSUB 1125
695 IF ZMNO%<10 THEN ZPD$=" " ELSE ZPD$=""
700 PRINT TAB(ZCOL%);ZPD$;ZMNO%;"- ";ZFLD2$:NEXT ZMNO%
705 PRINT:IF ZMNO%>9 THEN ZX$="2" ELSE ZX$="1"
710 ZSAVE$=Z$:Z$="     Enter Selection,"+ZX$+",2":Z=1:GOSUB 100:ON ZR% GOTO 715,730,730,730,730
715 ZL=1:ZH=ZMNO%-1:Z$=ZSAVE$:Z=10:GOSUB 100
720 ON ZV% GOTO 730,725,725
725 ZSAVE$=Z$:ZD$=STR$(ZN):Z=20:GOSUB 100:Z$=ZSAVE$:GOTO 675
730 RETURN
735 REM ZTCLR
740 FOR Z%=1 TO 15:ZMENU$(Z%)="":NEXT Z%:RETURN
745 REM ZTMENU
750 ZPTR2%=0:ZPDL$=STRING$(((78-ZW%)/2)," "):ZPR%=(78-ZW%)/2:LOCATE ZROW%,1:FOR ZMNO%=1 TO 15:ZFLD$=ZMENU$(ZMNO%):IF ZPTR2%=LEN(Z$) THEN 775
755 ZPTR1%=ZPTR2%:GOSUB 1125:ZMD$=ZFLD2$:ZPTR1%=ZPTR2%:GOSUB 1125
760 ZTYPE%=VAL(ZFLD2$):ZMLEN%(ZMNO%)=ZTYPE%:IF ZFLD$="" THEN ZFLD$="["+STRING$(ZTYPE%,".")+"]"
765 ZCOL%=LEN(ZFLD$):IF ZMNO%<10 THEN ZPD$=" " ELSE ZPD$=""
770 PRINT ZPDL$;ZPD$;STR$(ZMNO%)+". ";ZMD$;TAB(80-ZCOL%-2-ZPR%);ZFLD$:NEXT ZMNO%
775 RETURN
780 REM ZUPTMENU
785 ZPTR1%=ZMLEN%(ZY%):ZPR%=(78-ZW%)/2:LOCATE (ZROW%+ZY%-1),(80-ZPTR1%-4-ZPR%):PRINT TAB(79)
790 ZMENU$(ZY%)=ZD$
795 ZCOL%=LEN(ZMENU$(ZY%)):LOCATE (ZROW%+ZY%-1),(80-ZCOL%-2-ZPR%):PRINT ZMENU$(ZY%);TAB(79):RETURN
800 REM  ZBOX
805 PRINT ZB2$:PRINT ZB1$;CHR$(221);TAB(76);CHR$(222);ZB1$
810 PRINT ZB1$;CHR$(221);TAB(41-(LEN(ZTITLE$)/2));ZTITLE$;TAB(76);CHR$(222);ZB1$
815 PRINT ZB1$;CHR$(221);TAB(76);CHR$(222);ZB1$:PRINT ZB2$:PRINT
820 RETURN
825 REM  ZLINE
830 LOCATE 1,1:COLOR 1
835 PRINT ZTITLE$;TAB(72);ZDT$:COLOR 7
840 RETURN
845 REM ZAOK
850 Z=13:GOSUB 100:Z$="All ok? Y or N,1,1":Z=1:GOSUB 100:Z=9:GOSUB 100:Z=14:GOSUB 100:RETURN
855 REM ZTESTYN
860 ZV%=3:IF (ZD$="Y") OR (ZD$="y") THEN ZV%=1
865 IF (ZD$="N") OR (ZD$="n") THEN ZV%=2
870 RETURN
875 REM ZNLIMIT
880 ZV%=1:IF ZL>ZN THEN ZV%=2
885 IF ZH<ZN THEN ZV%=3
890 IF (ZCTL%<>0) AND (ZR%>3) THEN ZV%=4
895 RETURN
900 REM  ZSCREEN
905 FOR Z%=Z% TO 24:LOCATE Z%,1:PRINT TAB(80);:NEXT Z%:RETURN
910 REM  ZBEEP
915 SOUND 50,3:RETURN
920 REM ZUP
925 ZCSW%=1:RETURN
930 REM ZMIX
935 ZCSW%=0:RETURN
940 REM  ZEND
945 CLS:Z=6:GOSUB 100
950 LOCATE 10,32,0:PRINT "┌";STRING$(17,"─");"┐"
955 LOCATE ,32:PRINT "│";"   End Program   ";"│"
960 LOCATE ,32:PRINT "└";STRING$(17,"─");"┘"
965 LOCATE 21,1,0:GOTO 25
970 REM  ZCTR
975 GOSUB 1030:GOTO 1025
980 REM  ZCTRR
985 GOSUB 1030
990 COLOR 8,7:GOTO 1025
995 REM  ZCTRB
1000 GOSUB 1030
1005 COLOR 23:GOTO 1025
1010 REM  ZCTRU
1015 GOSUB 1030
1020 COLOR 1
1025 PRINT ZFLD2$;:COLOR 7:PRINT TAB(79);:RETURN
1030 LOCATE 23,1:PRINT:GOSUB 1120:ZFLD2$=MID$(Z$,ZPTR1%+1):Z%=VAL(ZFLD1$):LOCATE Z%,,0:PRINT TAB((80-LEN(ZFLD2$))/2);:RETURN
1035 REM ZERRINV
1040 Z$="24,"+ZD$+" Is Invalid":GOTO 1110
1045 REM ZERRINT
1050 Z$="24,"+ZD$+" Is Not an Integer Number":GOTO 1110
1055 REM ZERRNUM
1060 Z$="24,"+ZD$+" Is Not Numeric":GOTO 1110
1065 REM ZERRCTRL
1070 IF ZCTL%>26 THEN ZDS2%=ZCTL%-58:ZDS$="F"+MID$(STR$(ZDS2%),2) ELSE ZDS$="Control "+CHR$(ZCTL%+64)
1075 Z$="24,Function Key = "+ZDS$+ZE$:GOTO 1110
1080 REM ZERRENT
1085 Z$="24,ENTER-Only Entry "+ZE$:GOTO 1110
1090 REM ZERRBACK
1095 Z$="24,Field Backup Entry "+ZE$:GOTO 1110
1100 REM ZERRHELP
1105 Z$="24,HELP "+ZE$
1110 Z=17:GOSUB 100:Z=12:GOSUB 100:ZY=2:Z=29:GOSUB 100:Z%=24:Z=11:GOSUB 100:RETURN
1115 REM Routines
1120 ZPTR1%=INSTR(1,Z$,","):ZFLD1$=LEFT$(Z$,ZPTR1%-1):RETURN
1125 ZPTR2%=INSTR(ZPTR1%+1,Z$,","):ZFLD2$=MID$(Z$,ZPTR1%+1,ZPTR2%-ZPTR1%-1):RETURN
1130 REM ZDELAY
1135 FOR ZX=1 TO ZY*ZTFAC:NEXT ZX:RETURN
1140 Z=12:GOSUB 100:GOTO 165
1145 LOCATE 23,ZLEND%+2+ZCPTR%,1:GOTO 170
1150 REM INS On
1155 ZINS%=1:LOCATE ,,,4,12:RETURN
1160 REM INS Off
1165 ZINS%=0:LOCATE ,,,11,12:RETURN
9000 REM Save Program
9010 ZPROG$="program name"
9020 PRINT "Saving B:"+ZPROG$+".BAS"
9030 SAVE "B:"+ZPROG$
9040 PRINT "Saving B:"+ZPROG$+".S"
9050 SAVE "B:"+ZPROG$+".S",A
9060 RETURN
9090 REM Memory Display
9100 CLS:LOCATE 10,1,0:PRINT TAB(32);"Memory Statistics":PRINT:PRINT TAB(27);"Remaining Memory:  ";FRE(0):PRINT:PRINT TAB(27);"Program Length:    ";61529!-FRE(0):RETURN
10000 REM Begin Program Here
```

## GDUMP.BAS

```bas
0 REM prog = GDUMP
1 VERSION$= "V1.2"  'COMPILE open-print time delay bug sidestepped.
2 REM Author:  Herb Shear, 1590 Vineyard Dr. Los Altos, Ca 94022
3 'PUBLIC DOMAIN SOFTWARE
4 REM Medium Resolution Graphic Screen dump to C.ITOH 8510 or NEC 8023
5 REM  --If you want to dump a graphics screen to disk all that takes is:
6 '
7 '     DEF SEG=&HB800: BSAVE "filname.ext",0,&H4000
8 '         (BASIC immediate mode instruction).
9 '
10 '      This PEEK version has some advantages over a similiar
11 'POINT version. It's a little faster, it doesn't care whether you
12 'are running mono or color, text or graphics modes.  If you have the
13 'graphics on disk but don't have a color card change the DEF SEG to
14 'any hunk of memory laying around doing nothing useful.
15 'Compiled this thing runs in under 30 secs vs interpreter's 5+ minutes.
100 KEY OFF:CLS:DEFINT A-Z: DEF SEG = &HB800
110 OPEN "LPT1:" AS #1:WIDTH #1,255
120 PRINT "GDUMP  ";VERSION$
130 PRINT:PRINT "Enter FILENAME.EXT of graphics binary file. NO QUOTES!"
140 PRINT
150 PRINT "Pressing Enter defaults to current graphics screen display"
160 PRINT
170 GOSUB 790
180 LINE INPUT "?"; N$
190 IF LEN(N$)=0 THEN 240
200 PRINT "If Color Graphics board is in text mode -"
210 PRINT "  BE YEA OF GOOD FAITH"
220 BLOAD N$,0
230 REM       16/144 feed    unidir      elongated compressed pitch
240 PRINT #1,CHR$(27)+"T16"+CHR$(27)+">"+CHR$(14)+CHR$(27)+"Q";
250 P1$=CHR$(27)+"S0320" '320 bytes of graphics mode
260 FOR J=0 TO 7680 STEP 320
270 P$=P1$                  :PP$=""
280 FOR X = 0 TO 79         :Z=J+X
290 P=0
300 IF PEEK(Z   ) AND &HC0 THEN P=P OR &H1
310 IF PEEK(Z+&H2000) AND &HC0 THEN P=P OR &H2
320 IF PEEK(Z+&H50) AND &HC0 THEN P=P OR &H4
330 IF PEEK(Z+&H2050) AND &HC0 THEN P=P OR &H8
340 IF PEEK(Z+&HA0) AND &HC0 THEN P=P OR &H10
350 IF PEEK(Z+&H20A0) AND &HC0 THEN P=P OR &H20
360 IF PEEK(Z+&HF0) AND &HC0 THEN P=P OR &H40
370 IF PEEK(Z+&H20F0) AND &HC0 THEN P=P OR &H80
380 PP$=PP$+CHR$(P) : P=0
390 IF PEEK(Z   ) AND &H30 THEN P=P OR &H1
400 IF PEEK(Z+&H2000) AND &H30 THEN P=P OR &H2
410 IF PEEK(Z+&H50) AND &H30 THEN P=P OR &H4
420 IF PEEK(Z+&H2050) AND &H30 THEN P=P OR &H8
430 IF PEEK(Z+&HA0) AND &H30 THEN P=P OR &H10
440 IF PEEK(Z+&H20A0) AND &H30 THEN P=P OR &H20
450 IF PEEK(Z+&HF0) AND &H30 THEN P=P OR &H40
460 IF PEEK(Z+&H20F0) AND &H30 THEN P=P OR &H80
470 PP$=PP$+CHR$(P) : P=0
480 IF PEEK(Z   ) AND &HC THEN P=P OR &H1
490 IF PEEK(Z+&H2000) AND &HC THEN P=P OR &H2
500 IF PEEK(Z+&H50) AND &HC THEN P=P OR &H4
510 IF PEEK(Z+&H2050) AND &HC THEN P=P OR &H8
520 IF PEEK(Z+&HA0) AND &HC THEN P=P OR &H10
530 IF PEEK(Z+&H20A0) AND &HC THEN P=P OR &H20
540 IF PEEK(Z+&HF0) AND &HC THEN P=P OR &H40
550 IF PEEK(Z+&H20F0) AND &HC THEN P=P OR &H80
560 PP$=PP$+CHR$(P) : P=0
570 IF PEEK(Z   ) AND &H3 THEN P=P OR &H1
580 IF PEEK(Z+&H2000) AND &H3 THEN P=P OR &H2
590 IF PEEK(Z+&H50) AND &H3 THEN P=P OR &H4
600 IF PEEK(Z+&H2050) AND &H3 THEN P=P OR &H8
610 IF PEEK(Z+&HA0) AND &H3 THEN P=P OR &H10
620 IF PEEK(Z+&H20A0) AND &H3 THEN P=P OR &H20
630 IF PEEK(Z+&HF0) AND &H3 THEN P=P OR &H40
640 IF PEEK(Z+&H20F0) AND &H3 THEN P=P OR &H80
650 PP$=PP$+CHR$(P)
660 IF X=39 THEN P$=P$+PP$: PP$=""
670 NEXT  'x
680 PRINT #1,P$;    :PRINT #1,PP$+CHR$(10)  :    NEXT 'j
690 PRINT TAB(20);"M)  More of the same."
700 PRINT TAB(20);"N)  New file."
710 PRINT TAB(20);"X)  Exit (Wait for printer to finish).":PRINT :PRINT
720 PRINT:PRINT:PRINT TAB(20);"?  "+CHR$(29);
730 WHILE INKEY$<>"":WEND
740 IN$=INKEY$: IF IN$="" THEN 740
750 ON INSTR(" MmNnXx",IN$)\2 + 1 GOTO 720,260,130
760 GOSUB 790
770 CLOSE
780 END
790 PRINT #1,CHR$(27)+"\"+CHR$(0)+CHR$(0);:RETURN
```

## HP7470A.BAS

```bas
1 ' ********  Example of function use for generating HP7470A plots ********
2 '                       Peter Wohlmut  Feb. 17, 1983
3 ' functions should be loaded first, and program should start at line 1000
4 ' ***********************************************************************
10 DEF FNINITIAL$(DUMMY)="com1:2400,s,7,1,cs65535,ds65535,cd"
20 DEF FNRS232$(DUMMY)="in"+CHR$(27)+".@;13:ss"
30 DEF FNSCALE$(MINX,MAXX,MINY,MAXY)="sc"+STR$(MINX)+","+STR$(MAXX)+","+STR$(MINY)+","+STR$(MAXY)
40 DEF FNGETPEN$(ACTION)="sp"+STR$(ACTION)
50 DEF FNPENS$(D$)="p"+D$
60 DEF FNPLOT$(A$,X,Y)="p"+A$+STR$(X)+","+STR$(Y)
70 DEF FNFIDUCIALS$(XF1,YF1,XF2,YF2)="ip"+STR$(XF1)+","+STR$(YF1)+","+STR$(XF2)+","+STR$(YF2)
80 DEF FNTICK$(A$,TP,TN)="tl"+STR$(TP)+","+STR$(TN)+A$+"T"
90 DEF FNCHARSET$(NUMBER)="ca"+STR$(NUMBER)+"sa"
100 DEF FNLABEL$(LAB$,SX,SY,H,V)="sr"+STR$(SX)+","+STR$(SY)+",di"+STR$(H)+","+STR$(V)+"lb"+LAB$+CHR$(3)
110 DEF FNDASHES$(DOTS)="lt"+STR$(DOTS)
120 DEF FNWINDOW$(XF1,YF1,XF2,YF2)="iw"+"str$(xf1)+","+str$(yf1)+","+str$(xf2)+","+str$(yf2)
130 DEF FNC(DIL,SIZ,VMIN,VMAX)=DIL*SIZ*(VMAX-VMIN)/100+VMIN:DEF FNL(LONG,SIZ,VMIN,VMAX)=((VMAX-VMIN)*(1-LONG*SIZ/100))/2+VMIN ' calculate character offset (fnc) and label centering on axix (fnl)
135 GOTO 1000
140 LGT=LEN(LABEL$):IF VER=0 THEN XP=FNL(LGT,1.5*SX,XMIN,XMAX):YP=FNC(DEL,2*SY,YMIN,YMAX) ELSE IF HOR = 0 THEN XP=FNC(DEL,1.5*SX,XMIN,XMAX):YP=FNL(LGT,2*SY,YMIN,YMAX):RETURN ' subroutine to center   label on axis
150 XP=10300*XINCH/10.2:YP=7560*YINCH/7.5:RETURN ' convert inches to plotter units
180 CLS:LOCATE 15,10:PRINT "Chose pen 1 or 2 ";
181 Z$=INKEY$:IF Z$="" THEN 181 ELSE PENO=VAL(Z$):IF PENO <0 THEN 181 ELSE PRINT Z$:RETURN 'select pen
185 ' ******      Examples of use     ******
190 ' PRINT #2,FNSCALE$(XMIN,XMAX,YMIN,YMAX)
200 ' PRINT #2,FNGETPEN$(0) ' 0 to put back, # to get pen#
210 ' PRINT #2,FNPEN$("d") ' "d" for down, "u" for up
220 ' PRINT #2,FNPLOT$("a",XP,YP) '"a" for absolute, "r" for relative
230 ' XP=10300*XINCH/10.2:YP=7560*YINCH/7.5:RETURN ' convert inches to plotter units
240 ' PRINT #2,FNFIDUCIALS$(XFID1,XFID2,YFID2)
250  'PRINT #2,FNTICK$("x",.5,.5) '"x" on x axis, "y" on y axis, % total scale for above, below axis
260 ' PRINT #2,FNCHARSET$(0) ' character set 0 to 4
270 ' PRINT #2,FNLABEL$(LABEL$,SX,SY,HOR,VER) 'write label
280 ' PRINT #2,FNDASHES$(DOTS) ' line type routine (0 to 6)
290 ' ******                         ******
1000 DIM X(1000),Y(1000)
1005 REM initialize plotter file
1010 OPEN FNINITIAL$(2) AS #2:PRINT #2,FNRS232$(2)
1015 REM set up plotting border in inches and draw box
1020 XINCH=.4:YINCH=.5:GOSUB 150:GOSUB 1* 8 PRINT #2,FNGETPEN$(PENO):PRINT #2,FNPENS$("u"):XP1=XP:YP1=YP:PRINT #2,FNPLOT$("a",XP1,YP1):PRINT #2,FNPENS$("d"):XINCH=9.399999:YINCH=7.3:GOSUB 150:XP2=XP:YP2=YP:PRINT #2,FNPLOT$("a",XP2,YP1)
1030 PRINT #2,FNPLOT$("a",XP2,YP2):PRINT #2,FNPLOT$("a",XP1,YP2):PRINT #2,FNPLOT$("a",XP1,YP1);FNPENS$("U")
1040 KEY OFF:CLS
1045 XMIN=-10:XMAX=10:YMIN=50:YMAX=100:XINCH=2:YINCH=2:GOSUB 150:X1=XP:Y1=YP:XINCH=8:YINCH=6:GOSUB 150:X2=XP:Y2=YP:PRINT #2,FNFIDUCIALS$(X1,Y1,X2,Y2);FNSCALE$(XMIN,XMAX,YMIN,YMAX)
1050 PRINT #2,FNPENS$("u");FNPLOT$("a",-10,100);FNPENS$("d"):FOR X=-10 TO 10 STEP .1:Y=.5*X*X+50
1060 PRINT #2,FNPLOT$("a",X,Y):NEXT X:PRINT #2,FNPENS$("u")
1070 PRINT #2,FNPLOT$("a",10,50);FNPENS$("d");FNPLOT$("a",-10,50);FNPENS$("u");FNPLOT$("a",0,50);FNPENS$("d");FNPLOT$("a",0,100);FNPENS$("u")
1080 PRINT #2,FNPLOT$("a",10,50)
1090 FOR X= 10 TO - 10 STEP -1:PRINT #2,FNPLOT$("a",X,50);FNTICK$("x",.5,.5):NEXT X
1100 PRINT #2,FNPLOT$("a",0,50):FOR Y=50 TO 100 STEP 5:PRINT #2,FNPLOT$("a",0,Y);FNTICK$("y",.5,.5):NEXT Y
1110 LABEL$="X-Axis":VER=0:HOR=1:SX=3:SY=3:DEL=-4:GOSUB 140:PRINT #2,FNPLOT$("a",XP,YP);FNLABEL$(LABEL$,SX,SY,HOR,VER)
9000 CLOSE #2:END
```

## IDSPRISM.BAS

```bas
500 'PRISM.BAS Vers 1.1. This program is the property of J.A. McKee, 1300 W
510 'Rahn Road, Dayton, Ohio 45459, 513-434-3893.  Permission to copy is granted
520 'providing this notice is retained and no costs except media are charged.
530 'This program is used to initialize the IDS Prism color printer. Speed is
535 'increased 10-fold by compiling. Requires > 64 kb. Not maintained.
540 'Initialization parameters include:
550 '-Select/Deselect
560 '-Mode: Normal, Expanded, Graphics
570 '-Ribbon Type: Black, Primary, Process
580 '-Justify on/off
590 '-Font selection, including international fonts
600 '-Style: Correspondence/Draft
610 '-Spacing: Fixed/Proportional
620 '-Left/Right Margins
630 '-Characters/inch
640 '-Horizontal and vertical tabs.  Spaced equally or unequally
650 '-Form length. Print length
660 '-Lines/inch
670 '-Superscript/subscript advance
680 'with two displays.
690 'Parameter files can be saved and reused in subsequent runs.
700 'The Prism initialization file can be written directly to the printer or
710 'saved for later use (use COPY to initialize printer with a saved disk file)
2000 '
2010 DIM E%(20),F%(20),O%(20),O1%(20),O(20)
2020 GOSUB 16400:GOSUB 15800
2030 COLOR C0%,B0%,B0%
2040 KEY OFF
6000 '
6010 GOSUB 15200:COLOR C2%,B2%:LOCATE 1,26:PRINT " PRISM PRINTER INITIALIZATION ":COLOR C0%,B0%
6020 LOCATE 2,3:PRINT "This program provides initialization for a Prism printer.";
6030 LOCATE 3,6:PRINT "- The Prism Parameter File (default extension .DAT) contains values shown";
6040 LOCATE 4,6:PRINT "  in the Prism Parameter Menu. An old file can be used to initialize this";
6050 LOCATE 5,6:PRINT "  menu (Option A) or a new file of current menu values can be saved for";
6060 LOCATE 6,6:PRINT "  later use (Option B).";
6070 LOCATE 7,6:PRINT "- The Prism Initialization File (default extension .PRS) uses values in";
6080 LOCATE 8,6:PRINT "  the current Prism Parameter Menu to initialize the printer (Option C).";
6090 LOCATE 9,6:PRINT "  This file can be saved to initialize the printer without running this";
6100 LOCATE 10,6:PRINT "  program (Option D). To initialize the printer without running this";
6110 LOCATE 11,6:PRINT "  program, use the saved file with COPY filnam LPTn:";
6120 LOCATE 12,6:PRINT "- The default printer device is LPT1.";
6130 O8$="A Read old Parameter File   C Write Init File to Printer  E Modify Init values"
6140 O9$="B Write new Parameter File  D Write Init File to Disk     X EXIT this program "
6150 O7$="Select option:":GOSUB 30000:
6180 IF O$<"A" OR O$>"E" AND O$<>"X" THEN GOSUB 30200:GOTO 6180
6190 IF O$="X" THEN CLOSE:END
6210 IF O$="E" THEN GOSUB 20000:GOTO 6000
6220 O9$="":LOCATE 14,2:PRINT SPACE$(78);:LOCATE 15,2:PRINT SPACE$(78);
6230 G%=ASC(O$):ON G%-64 GOSUB 6800,6400,7200,7400
6240 GOSUB 30220:GOTO 6130
6250 STOP
6400 '
6410 O1$=DEV2$:O2$=FILNAM2$:O3$=EXT2$:O8$="Write new Parameter File":O7$="Enter output file name ["+O1$+":"+O2$+"."+O3$+"]:":GOSUB 30000
6420 O1$=DEV2$:GOSUB 32000:FILE2$=O$
6430 ON ERROR GOTO 6640
6440 OPEN FILE2$ AS #U2% LEN=16
6450 FIELD #U2%,16 AS U116$:FIELD #U2%,8 AS U18$,8 AS U28$:FIELD #U2%,4 AS U14$,4 AS U24$,4 AS U34$,4 AS U44$
6460 FIELD #U2%,2 AS U12$,2 AS U22$,2 AS U32$,2 AS U42$,2 AS U52$,2 AS U62$,2 AS U72$,2 AS U82$:FIELD #U2%,1 AS U11$,1 AS U21$,1 AS U31$,1 AS U41$
6470 O1%=VAL(B$):O2%=VAL(C$):O3%=VAL(D$):O4%=VAL(JL$):O5%=VAL(JR$):O6%=VAL(L1$):O7%=VAL(L2$):O8%=VAL(P$):O9%=VAL(R$)
6480 LSET U12$=MKI$(O1%):LSET U22$=MKI$(O2%):LSET U32$=MKI$(O3%):LSET U42$=MKI$(O4%):LSET U52$=MKI$(O5%):LSET U62$=MKI$(O6%):LSET U72$=MKI$(O7%):LSET U82$=MKI$(O8%):PUT #U2%,1
6490 LSET U12$=MKI$(O9%):LSET U22$=MKI$(LR%):LSET U24$=LSEL$:LSET U34$=MKS$(LCPI):LSET U44$=MKS$(E1):PUT #U2%,2
6500 LSET U14$=LJUST$:LSET U24$=MKS$(LB):LSET U34$=MKS$(LC):LSET U44$=MKS$(LD):PUT #U2%,3
6510 LSET U14$=LE$:LSET U24$=LF$:LSET U34$=MKS$(LJL):LSET U44$=MKS$(LJR):PUT #U2%,4
6520 LSET U11$=SEL$:LSET U21$=MODE$:LSET U31$=CPI$:LSET U41$=SP$:LSET U24$=MKS$(LL1):LSET U34$=MKS$(LL2):LSET U44$=MKS$(LP):PUT #U2%,5
6530 LSET U11$=JUST$:LSET U21$=Q$:LSET U31$=Q2$:LSET U28$=LMODE$:PUT #U2%,6
6540 LSET U18$=LE1$:LSET U28$=LF1$:PUT #U2%,7
6550 LSET U18$=LQ$:LSET U28$=LQ1$:PUT #U2%,8
6560 LSET U116$=LSP$:PUT #U2%,9
6570 LSET U116$=LR$:PUT #U2%,10
6580 LSET U12$=MKI$(E%(0)):LSET U22$=MKI$(E%(1)):LSET U32$=MKI$(E%(2)):LSET U42$=MKI$(E%(3)):LSET U52$=MKI$(E%(4)):LSET U62$=MKI$(E%(5)):LSET U72$=MKI$(E%(6)):LSET U82$=MKI$(E%(7)):PUT #U2%,11
6590 LSET U12$=MKI$(F%(0)):LSET U22$=MKI$(F%(1)):LSET U32$=MKI$(F%(2)):LSET U42$=MKI$(F%(3)):LSET U52$=MKI$(F%(4)):LSET U62$=MKI$(F%(5)):LSET U72$=MKI$(F%(6)):LSET U82$=MKI$(F%(7)):PUT #U2%,12
6600 LSET U12$=MKI$(F%(8)):LSET U22$=MKI$(F%(9)):LSET U32$=MKI$(F%(10)):LSET U42$=MKI$(F%(11)):LSET U52$=MKI$(F%(12)):LSET U62$=MKI$(F%(13)):LSET U72$=MKI$(F%(14)):LSET U82$=MKI$(F%(15)):PUT #U2%,13
6610 LSET U12$=MKI$(F%(16)):LSET U22$=MKI$(F%(17)):LSET U32$=MKI$(F%(18)):LSET U42$=MKI$(F%(19)):LSET U52$=MKI$(F%(20)):LSET U44$=MKS$(F1):PUT #U2%,14
6620 ON ERROR GOTO 0
6630 CLOSE #U2%:RETURN
6640 O6$="Output device full or illegal file name or device."
6650 GOSUB 30200:RESUME 6620
6800 '
6810 O1$=DEV2$:O2$=FILNAM2$:O3$=EXT2$:O8$="Read old Parameter File":O7$="Enter input file name ["+O1$+":"+O2$+"."+O3$+"]:":GOSUB 30000
6820 O1$=DEV2$:GOSUB 32000:FILE2$=O$
6830 ON ERROR GOTO 7070
6840 OPEN FILE2$ FOR INPUT AS #U2%:CLOSE #U2%
6850 OPEN FILE2$ AS #U2% LEN=16
6860 FIELD #U2%,16 AS U116$:FIELD #U2%,8 AS U18$,8 AS U28$:FIELD #U2%,4 AS U14$,4 AS U24$,4 AS U34$,4 AS U44$
6870 FIELD #U2%,2 AS U12$,2 AS U22$,2 AS U32$,2 AS U42$,2 AS U52$,2 AS U62$,2 AS U72$,2 AS U82$:FIELD #U2%,1 AS U11$,1 AS U21$,1 AS U31$,1 AS U41$
6880 GET #U2%,1:O1%=CVI(U12$):O2%=CVI(U22$):O3%=CVI(U32$):O4%=CVI(U42$):O5%=CVI(U52$):O6%=CVI(U62$):O7%=CVI(U72$):O8%=CVI(U82$)
6890 B$=MID$(STR$(O1%),2,LEN(STR$(O1%))):C$=MID$(STR$(O2%),2,LEN(STR$(O2%))):JL$=MID$(STR$(O4%),2,LEN(STR$(O4%))):D$=STR$(O3%):IF O3%>=0 THEN D$=MID$(D$,2,LEN(D$))
6900 JR$=MID$(STR$(O5%),2,LEN(STR$(O5%))):L1$=MID$(STR$(O6%),2,LEN(STR$(O6%))):L2$=MID$(STR$(O7%),2,LEN(STR$(O7%))):P$=MID$(STR$(O8%),2,LEN(STR$(O8%)))
6910 GET #U2%,2:O9%=CVI(U12$):LR%=CVI(U22$):LSEL$=MID$(U24$,1,3):LCPI=CVS(U34$):R$=MID$(STR$(O9%),2,LEN(STR$(O9%))):E1=CVS(U44$)
6920 GET #U2%,3:LJUST$=MID$(U14$,1,3):LB=CVS(U24$):LC=CVS(U34$):LD=CVS(U44$)
6930 GET #U2%,4:LE$=MID$(U14$,1,3):LF$=MID$(U24$,1,3):LJL=CVS(U34$):LJR=CVS(U44$)
6940 GET #U2%,5:SEL$=U11$:MODE$=U21$:CPI$=U31$:SP$=U41$:LL1=CVS(U24$):LL2=CVS(U34$):LP=CVS(U44$)
6950 GET #U2%,6:JUST$=U11$:Q$=U21$:Q2$=U31$:LMODE$=U28$
6960 GET #U2%,7:LE1$=MID$(U18$,1,6):LF1$=MID$(U28$,1,6)
6970 GET #U2%,8:LQ$=MID$(U18$,1,7):LQ1$=MID$(U28$,1,7)
6980 GET #U2%,9:LSP$=MID$(U116$,1,12)
6990 GET #U2%,10:LR$=MID$(U116$,1,14)
7000 GET #U2%,11:E%(0)=CVI(U12$):E%(1)=CVI(U22$):E%(2)=CVI(U32$):E%(3)=CVI(U42$):E%(4)=CVI(U52$):E%(5)=CVI(U62$):E%(6)=CVI(U72$):E%(7)=CVI(U82$)
7010 GET #U2%,12:F%(0)=CVI(U12$):F%(1)=CVI(U22$):F%(2)=CVI(U32$):F%(3)=CVI(U42$):F%(4)=CVI(U52$):F%(5)=CVI(U62$):F%(6)=CVI(U72$):F%(7)=CVI(U82$)
7020 GET #U2%,13:F%(8)=CVI(U12$):F%(9)=CVI(U22$):F%(10)=CVI(U32$):F%(11)=CVI(U42$):F%(12)=CVI(U52$):F%(13)=CVI(U62$):F%(14)=CVI(U72$):F%(15)=CVI(U82$)
7030 GET #U2%,14:F%(16)=CVI(U12$):F%(17)=CVI(U22$):F%(18)=CVI(U32$):F%(19)=CVI(U42$):F%(20)=CVI(U52$):F1=CVS(U44$)
7040 GOSUB 25600:GOSUB 25800
7050 ON ERROR GOTO 0
7060 CLOSE #U2%:RETURN
7070 O6$="Input File not found or illegal filename or device. Strike ENTER to continue"
7080 GOSUB 30200:RESUME 7050
7200 '
7210 O1$=DEV0$:O8$="Write Initialization File to Printer":O7$="Enter printer device name ["+O1$+":] :":GOSUB 30000
7220 IF LEN(O$)>0 AND LEN(O$)<4 THEN GOSUB 30200:GOTO 7220
7230 IF LEN(O$)=0 THEN O$=DEV0$
7240 O1$=O$:O%=INSTR(O1$,":"):IF O%<>0 THEN O1$=MID$(O1$,1,4)
7250 O1$=O1$+":"
7260 ON ERROR GOTO 7310
7270 OPEN O1$ AS #U1%:WIDTH #U1%,255
7280 GOSUB 11000
7290 ON ERROR GOTO 0
7300 CLOSE #U1%:RETURN
7310 O6$="Printer fault or illegal device. Strike ENTER to continue."
7320 GOSUB 30200:RESUME 7290
7400 '
7410 O1$=DEV2$:O2$=FILNAM1$:O3$=EXT1$:O8$="Write Initialization File to disk":O7$="Enter output Initialization File name ["+O1$+":"+O2$+"."+O3$+"]:":GOSUB 30000
7420 O1$=DEV1$:GOSUB 32000:FILE2$=O$
7430 ON ERROR GOTO 7480
7440 OPEN FILE2$ FOR OUTPUT AS #U1%
7450 GOSUB 11000
7460 ON ERROR GOTO 0
7470 CLOSE #U1%:RETURN
7480 GOSUB 30200:RESUME 7460
11000 '
11010 ON ERROR GOTO 11160
11020 PRINT #U1%,SEL$;MODE$;CPI$;SP$;JUST$;
11030 PRINT #U1%,ESC$;X$;"J";X$;JL$;X$;JR$;X$;Z$;
11040 PRINT #U1%,ESC$;X$;"L";X$;L1$;X$;L2$;X$;Z$;
11050 PRINT #U1%,ESC$;X$;"B";X$;B$;X$;Z$;
11060 PRINT #U1%,ESC$;X$;"C";X$;C$;X$;Z$;
11070 PRINT #U1%,ESC$;X$;"D";X$;D$;X$;Z$;
11080 PRINT #U1%,ESC$;X$;"E";X$;E$;X$;Z$;
11090 PRINT #U1%,ESC$;X$;"F";X$;F$;X$;Z$;
11100 PRINT #U1%,ESC$;X$;"P";X$;P$;X$;Z$;
11110 PRINT #U1%,ESC$;X$;"Q";X$;Q$;X$;Z$;
11130 PRINT #U1%,ESC$;X$;"R";X$;R$;X$;Z$;
11140 ON ERROR GOTO 0
11150 RETURN
11160 O6$="Printer or device fault. Strike ENTER to exit"
11170 GOSUB 30200:RESUME 11140
15000 '
15010 GOSUB 15200
15020 COLOR C0%,B0%:LOCATE 2,2:PRINT L1A$;:LOCATE 3,2:PRINT L2A$;:LOCATE 4,2:PRINT L3$;:LOCATE 5,2:PRINT L4$;:LOCATE 6,2:PRINT L5$;
15030 LOCATE 7,2:PRINT L6$;:LOCATE 8,2:PRINT L7$;:LOCATE 9,2:PRINT L8$;:LOCATE 10,2:PRINT L9$;:LOCATE 11,2:PRINT L10$;:LOCATE 12,2:PRINT L11$;
15040 COLOR C3%,B3%:GOSUB 15410:GOSUB 15550:GOSUB 15630:GOSUB 15420:GOSUB 15560:GOSUB 15640:GOSUB 15430:GOSUB 15570:GOSUB 15650
15050 GOSUB 15440:GOSUB 15580:GOSUB 15660:GOSUB 15450:GOSUB 15590:GOSUB 15670:GOSUB 15460:GOSUB 15600:GOSUB 15680
15060 GOSUB 15470:GOSUB 15610:GOSUB 15690:GOSUB 15480:GOSUB 15490:GOSUB 15510
15070 COLOR C11%,B11%:GOSUB 15700:RETURN
15200 '
15210 COLOR C10%,B10%:CLS:LOCATE 1,1:PRINT CHR$(218)+STRING$(78,196)+CHR$(191)
15220 FOR O%=2 TO 15:LOCATE O%,1:PRINT CHR$(179):LOCATE O%,80:PRINT CHR$(179):NEXT O%
15230 LOCATE 13,1:PRINT CHR$(195)+STRING$(78,196)+CHR$(180)
15240 LOCATE 16,1:PRINT CHR$(192)+STRING$(78,196)+CHR$(217):RETURN
15400 '
15410 LOCATE 2,11:PRINT LSEL$;:RETURN
15420 LOCATE 3,9:PRINT LMODE$;:RETURN
15430 LOCATE 4,11:PRINT LQ1$;:RETURN
15440 LOCATE 5,10:PRINT LQ$;:RETURN
15450 LOCATE 6,12:PRINT LJUST$;:RETURN
15460 LOCATE 7,13:PRINT USING "##";LR%;:RETURN
15470 LOCATE 8,10:PRINT LR$;:RETURN
15480 LOCATE 9,12:PRINT LSP$;:RETURN
15490 FOR O%=0 TO 7:O(O%)=E%(O%)/48:NEXT O%
15500 LOCATE 10,19:PRINT USING L13$;O(0),O(1),O(2),O(3),O(4),O(5),O(6),O(7):RETURN
15510 FOR O%=0 TO 20:O%(O%)=CINT(LCPI*((F%(O%)-VAL(JL$))/120)):IF O%(O%)<0 THEN O%(O%)=0
15520 NEXT O%
15530 LOCATE 11,19:PRINT USING L14$;O%(0),O%(1),O%(2),O%(3),O%(4),O%(5),O%(6),O%(7),O%(8),O%(9),O%(10)
15540 LOCATE 12,19:PRINT USING L14$;O%(11),O%(12),O%(13),O%(14),O%(15),O%(16),O%(17),O%(18),O%(19),O%(20):RETURN
15550 LOCATE 2,39:PRINT USING L12$;LJL;:RETURN
15560 LOCATE 3,40:PRINT USING L12$;LJR;:RETURN
15570 LOCATE 4,37:PRINT USING L12$;LCPI;:RETURN
15580 RETURN
15590 LOCATE 6,44:PRINT USING "###";LP%;:RETURN
15600 LOCATE 7,36:PRINT LF$;:RETURN
15610 LOCATE 8,38:PRINT LF1$;:RETURN
15630 LOCATE 2,67:PRINT USING L12$;LL1;:RETURN
15640 LOCATE 3,68:PRINT USING L12$;LL2;:RETURN
15650 LOCATE 4,66:PRINT USING L12$;LB;:RETURN
15660 LOCATE 5,67:PRINT USING L12$;LD;:RETURN
15670 LOCATE 6,65:PRINT USING L12$;LC;:RETURN
15680 LOCATE 7,64:PRINT LE$;:RETURN
15690 LOCATE 8,66:PRINT LE1$;:RETURN
15700 LOCATE 9,53:PRINT "X EXIT to main menu";:RETURN
15800 '
15810 SEL$=CHR$(17):LSEL$="On"
15820 MODE$=CHR$(2):LMODE$="Normal"
15830 CPI$=CHR$(30):LCPI=12
15840 SP$=CHR$(6):LSP$="Fixed"
15850 JUST$=CHR$(5):LJUST$="Off"
15860 B$="8":LB=6
15870 O$=STR$(CINT(VAL(B$)/2))
15880 C$=MID$(O$,2,LEN(O$)):LC=.5
15890 D$="-"+C$:LD=.5
15910 E1=0:LE1$="N/A   "
15920 E$="0":LE$="Off":
15940 F1=8:LF1$="Even"
15950 F$="0":LF$="On"
15960 JL$="120":LJL=1
15970 JR$="920":LJR=7.67
15980 LJR1=80
15990 L1$="528":LL1=11
16000 L2$="504":LL2=10.5
16010 P$="0":LP%=0
16020 Q$="4":LQ$="Black":LQ1$="Process"
16030 Q2$="0"
16040 R$="1":LR$="Correspondence":LR%=1
16050 GOSUB 25400:GOSUB 25600
16060 L1A$="A Select=              I Left Margin=      inches  Q Form Length=      inches"
16070 L2A$="B Mode=                J Right Margin=      inches R Print Length=      inches"
16080 L3$="C Ribbon=              K Char/inch=      chars     S Lines/inch=      lines"
16090 L4$="D Color=               L (Reserved)                T Superscript=      lines"
16100 L5$="E Justify=             M Inter-Ch Spacing=         U Subscript=      lines"
16110 L6$="F Font No.=            N Hor Tabs=                 V Ver Tabs="
16120 L7$="G Style=               O HT Spacing=               W VT Spacing="
16130 L8$="H Spacing=             P Toggle Dual Displays"
16140 L9$="Ver Tb in inches:                                                    (Up to 8)"
16150 L10$="Hor Tb in chars:"
16160 L11$="                                                                    (Up to 21)"
16170 L12$="##.##"
16180 L13$="##.##;##.##;##.##;##.##;##.##;##.##;##.##;##.##"
16190 L14$="####;####;####;####;####;####;####;####;####;####;####;####;"
16200 RETURN
16400 '
16410 T%=0:DEF SEG=0:IF (PEEK(&H410) AND &H30)<>&H30 THEN T%=1
16420 DEF SEG:DEV0$="L
```

## NECPLOT7.BAS

```bas
100 'PC demo program to plot squiggle-var on NEC 8023 printer.
120 DEFINT I-N:DIM IT(1200),M(7):TUPI=6.283186:E$=CHR$(27)'(escape)
140 'Defeat automatic Cr/Lf's, set 1280 dots/line, 14/144 in. line feed.
160 WIDTH "LPT1:",255:LPRINT E$;"P";E$;"T07";  '(or T14, sometimes).
180 'Define trace plot mode - S/V, shade level 4 and down.
200    FOR I=1 TO 7:M(I)=2^(I-1):IF I>4 THEN M(I)=M(I)+M(I-1)
220    NEXT I
240    FOR JF=14 TO 33  'Plot 20 traces with JF dots/cycle.
260    'Compute 1 cycle of trace, amplitude range = 1 to 7.
280       FOR I=1 TO JF:J=(SIN(I*TUPI/JF)+1)*3.+1:IT(I)=M(J):NEXT I
300       FOR I=JF+1 TO 1200:IT(I)=IT(I-JF):NEXT I  'Propagate sine-wave.
320    LPRINT E$;"S1200";  'Set-up NEC to plot 1200 graphic samples.
360       FOR I=1 TO 1200:LPRINT CHR$(IT(I));:NEXT I  'Plot a trace.
380    LPRINT JF*10000:NEXT JF  'Make dummy SSP number and loop back.
400 'List the program in proportional mode, then reset printer back to normal.
420 LPRINT E$;"A":LLIST:LPRINT E$;"N":END
```

## NECPRINT.BAS

```bas

10 REM NECPRINT - - A texteditor for the NEC PC-8023A printer
20 REM written by Hal R. Varian, 1114 Woodlawn Avenue, Ann Arbor, MI 48104
30 REM  Copyright (c) 1982 by Hal R. Varian
40 DEFINT A-Z
50 REM greek characters and other special symbols
60 ALPHA$ = CHR$(192)
70 BETA$ = CHR$(195)
80 DELTA$ = CHR$(189)
90 PI$ = CHR$(202)
100 CAPSIGMA$ = CHR$(191)
110 PART$ = CHR$(159)
120 LAMBDA$ = CHR$(222)
130 TAU$ = CHR$(207)
140 APPROX$ = CHR$(210)
150 RHO$ = CHR$(183)
160 ETA$ = CHR$(197)
170 INFINITY$ = CHR$(176)
180 IOTA$ = CHR$(215)
190 GAMMA$ = CHR$(178)
200 EPSILON$ = CHR$(182)
210 RHO$ = CHR$(183)
220 PHI$ = CHR$(216)
230 SIGMA$ = CHR$(184)
240 NU$ = CHR$(193)
250 OMEGA$ = CHR$(209)
260 MU$ = CHR$(223)
270 KAPPA$ = CHR$(190)
280 XI$ = CHR$(196)
290 UPSILON$ = CHR$(201)
300 CAPLAMBDA$ = CHR$(203)
310 RADICAL$ = CHR$(211)
320 IOTA$ = CHR$(215)
330 CHI$ = CHR$(218)
340 ZETA$ = CHR$(221)
350 CAPDELTA$ = CHR$(194)
360 INTEGRAL$ = CHR$(242)
370 RTARROW$ = CHR$(171)
380 PSI$ = CHR$(185)
390 CAPOMEGA$ = CHR$(186)
400 CAPGAMMA$ = CHR$(187)
410 REM  printer control strings
420 FORMFEED$ = CHR$(&H1F)+CHR$(1)
430 PROG$="NECPRINT v. 2.0 June, 1982"
440 ESC$ = CHR$(27)
450 CONDENSEON$ = ESC$+CHR$(&H51)
460 ENHANCEOFF$ = ESC$+CHR$(&H22)
470 ENHANCEON$ = ESC$+"!"
480 ELITEON$ = ESC$+CHR$(&H45)
490 PROPORTION$ = ESC$+CHR$(&H50)
500 LARGEON$ = CHR$(&HE)
510 LARGEOFF$ = CHR$(&HF)
520 UNDERLINEON$ = ESC$+CHR$(&H58)
530 UNDERLINEOFF$ = ESC$+CHR$(&H59)
540 PICAON$ = ESC$+CHR$(&H4E)
550 FORWARD$=ESC$+"f"
560 REVERSE$=ESC$+"r"
570 INCREM$ = ESC$+CHR$(&H5B)
580 SEEK$ = ESC$+CHR$(&H5D)
590 SINGLE$ = ESC$+"A"
600 CLRLPT$=ENHANCEOFF$+LARGEOFF$+UNDERLINEOFF$+PICAON$+ESC$+"L"+"005"+SINGLE$+SEEK$+FORWARD$
610 REM  begin main program execution
620 REM clear printer
630 GOSUB 1800
640 REM
650 REM
660 REM *** Initial Menu ***
670 KEY OFF: CLS: SCREEN 0,0,0
680 PRINT PROG$: PRINT "Copyright (C) 1982 by Hal R. Varian":PRINT:PRINT
690 PRINT "Functions"
700 PRINT TAB(13);"P - Print a text file"
710 PRINT TAB(13);"Q - Quit and return to DOS"
720 PRINT TAB(13);"R - Reset printer"
730 PRINT TAB(13);"S - Set up printer"
740 PRINT TAB(13);"T - Advance paper to top"
750 PRINT TAB(13);"X - Exit to BASIC"
760 NEXTLN = CSRLIN+1
770 PLOC = NEXTLN: GOSUB 2110 'clear next line
780 INPUT "Enter function:  ", X$: IF X$="" THEN BEEP: GOTO 770
790 GOSUB 2040  'capitalize x$
800 X = INSTR("PSRTQX",X$): IF X = 0 THEN BEEP: GOTO 770
810 ON X GOSUB 840,1370,1800,1920,1960,2000
820 GOTO 660  'present menu again
830 REM
840 REM print a text file
850 CLS
860 PRINT PROG$: PRINT
870 PRINT "Adjust the paper in the printer so that"
880 PRINT "the perforation is at the top of the print head."
890 PRINT
900 PRINT "Enter the exact filename.":PRINT
910 PRINT "Depress the RETURN key to begin printing."
920 PRINT "Enter a blank line to return to menu."
930 PRINT "Depress ESC key to abort printing."
940 PRINT
950 INPUT "Name of file to print:   ",X$
960 IF LEN(X$) = 0 THEN RETURN
970 GOSUB 2040 ' capitalize x$
980 WIDTH "lpt1:", PWIDTH
990 OPEN X$ FOR INPUT AS 1
1000 PAGENR = STPAGE
1010 LINENR = 1
1020 IF EOF (1) THEN 1210
1030 LINE INPUT #1, L$
1040 REM see if this is correct place to start if sflg is set
1050 IF SFLG = 1 THEN SPLC=INSTR(L$,SLINE$): IF SPLC = 0 THEN GOTO 1020              ELSE SFLG = 0
1060 REM check for Greek characters,super and subscripts, and underlines
1070 GOSUB 2530 : GOSUB 3020: GOSUB 3570
1080 REM check if this string is a page control string
1090 IF LEFT$(L$,1)="#" THEN GOSUB 2240: GOTO 1020
1100 IF LINENR = 1 THEN GOSUB 1250 'print page heading
1110 LPRINT L$; 'print line
1120 REM print superscripts and subscripts if necessary
1130 IF SUPFLG = 1 THEN GOSUB 3320
1140 IF SUBFLG = 1 THEN GOSUB 3440
1150 IF INKEY$=ESC$ THEN 1210  'abort print if <esc> key is pressed
1160 LPRINT:IF SPACING = 2 THEN LPRINT
1170 LINENR = LINENR + SPACING
1180 IF LINENR > PLENGTH THEN LINENR = 1
1190 GOTO 1020
1200 REM
1210 REM  Close file and return
1220 CLOSE
1230 GOTO 950
1240 REM
1250 REM Print page heading
1260 IF PAGENR <> STPAGE THEN LPRINT FORMFEED$;
1270 PAGENR = PAGENR + 1
1280 LPRINT:LPRINT
1290 LPRINT UNDERLINEOFF$; 'turn off underline
1300 IF HEADFLG = 1 AND PAGENR <> 1 THEN LPRINT X$; TAB(33);"-";PAGENR;"-";TAB(60);DATE$
1310 IF HEADFLG = 0 AND PAGENR <> 1 THEN LPRINT TAB(34);"-";PAGENR;"-"
1320 IF UNDERLINE = 1 THEN LPRINT UNDERLINEON$;
1330 LPRINT: LPRINT
1340 LINENR = 1
1350 RETURN
1360 REM
1370 REM Set printer controls
1380 CLS: PRINT PROG$
1390 PRINT: PRINT "Printer options available: "
1400 PRINT
1410 PRINT "    A  - Line spacing of 1/6 inch"
1420 PRINT "    B  - Line spacing of 1/8 inch"
1430 PRINT "    C  - Condensed Print"
1440 PRINT "    D  - Double Spaced"
1450 PRINT "    E  - Enhanced Print"
1460 PRINT "    G  - Set Page Length"
1470 PRINT "    H  - Print header on each page"
1480 PRINT "    I  - Incremental Mode"
1490 PRINT "    L  - Large Print"
1500 PRINT "    M  - Set Left Margin"
1510 PRINT "    P  - Pica Print"
1520 PRINT "    R  - Proportional Print"
1530 PRINT "    S  - Start at line other than first"
1540 PRINT "    T  - Elite Print"
1550 PRINT
1560 PRINT
1570 INPUT "   Enter desired options:   ",O$
1580 X$=O$: GOSUB 2040: O$=X$  'capitalize
1590 LPRINT CLRLPT$; 'clear line printer
1600 IF INSTR(O$,"A") THEN LPRINT ESC$+"A";
1610 IF INSTR(O$,"B") THEN LPRINT ESC$+"B";
1620 IF INSTR(O$,"R") THEN LPRINT PROPORTION$;
1630 IF INSTR(O$,"C") THEN LPRINT CONDENSEON$; CHR$(&H1B);"B";: PWIDTH = 132
1640 IF INSTR(O$,"E") THEN LPRINT ENHANCEON$;
1650 IF INSTR(O$,"L") THEN LPRINT LARGEON$;
1660 IF INSTR(O$,"P") THEN LPRINT PICAON$;
1670 IF INSTR(O$,"M") THEN GOSUB 2170
1680 IF INSTR(O$,"D") THEN SPACING = 2
1690 IF INSTR(O$,"I") THEN LPRINT INCREM$;
1700 IF INSTR(O$,"T") THEN LPRINT ELITEON$;
1710 IF INSTR(O$,"G") THEN GOSUB 3930
1720 IF INSTR(O$,"F") THEN FEEDFLG = 1
1730 IF INSTR(O$,"S") THEN GOSUB 3960
1740 IF INSTR(O$,"H") THEN HEADFLG = 1
1750 PRINT
1760 PLOC=CSRLIN
1770 GOSUB 2110
1780 RETURN
1790 REM
1800 REM  set printer to defaults
1810 PWIDTH = 80
1820 PLENGTH = 53
1830 PAGENR = 0
1840 UNDERLINE = 0
1850 HEADFLG = 0
1860 SFLG=0
1870 SPACING = 1
1880 LPRINT CLRLPT$;
1890 STPAGE = 0
1900 RETURN
1910 REM
1920 REM Form feed to printer
1930 LPRINT FORMFEED$
1940 RETURN
1950 REM
1960 REM  Quit and return to DOS
1970 CLS
1980 SYSTEM
1990 REM
2000 REM *** Exit to BASIC
2010 CLS
2020 END
2030 REM
2040 REM Capitalize string in X$
2050 FOR X = 1 TO LEN(X$)
2060 XC$ = MID$(X$,X,1)
2070 IF "a" <=XC$ AND XC$ <= "z" THEN MID$(X$,X,1)=CHR$(ASC(XC$) - 32)
2080 NEXT X
2090 RETURN
2100 REM
2110 REM position at line number ploc and clear it
2120 LOCATE PLOC,1
2130 PRINT STRING$(40," ")
2140 LOCATE PLOC,1
2150 RETURN
2160 REM
2170 REM Set left margin
2180 PRINT: PRINT "Margin width is entered in 3 digits"
2190 PRINT "Example: 005"
2200 INPUT "Desired margin width";MARGIN$
2210 LPRINT ESC$+"L"+MARGIN$;
2220 RETURN
2230 REM
2240 REM page control subroutine
2250 REM is this a formfeed record?2260 PSN = INSTR(L$,"#F")
2270 IF PSN <> 1 GOTO 2300
2280 L$ = MID$(L$,3): GOSUB 1250:LINENR = 2:RETURN
2290 REM is this a header record?2300 PSN = INSTR(L$,"#*")
2310 IF PSN = 0 GOTO 2360
2320 PSN = PSN+2
2330 X$=MID$(L$,PSN)
2340 GOSUB 1250:RETURN
2350 REM is this a center/title record?2360 PSN = INSTR(L$,"#=")
2370 IF PSN= 0 GOTO 2440
2380 REM find the | marks which indicate <cr>
2390 BEGIN=3
2400 PSN=INSTR(BEGIN,L$,"|")
2410 IF PSN=0 THEN TITLE$=MID$(L$,BEGIN): GOSUB 2460: RETURN
2420 LNG = PSN-BEGIN:TITLE$=MID$(L$,BEGIN,LNG):GOSUB 2460: BEGIN=PSN+1
2430 GOTO 2400
2440 RETURN 'more page control commands can be added here
2450 REM
2460 REM center title and print it out
2470 LNG=LEN(TITLE$)
2480 SKIP = (PWIDTH - LNG)/2  - 2
2490 LPRINT TAB(SKIP);TITLE$
2500 LINENR=LINENR+1
2510 RETURN
2520 REM
2530 REM See if there are special characters in string
2540 STRT = 1
2550 PSN = INSTR(STRT,L$,"&")
2560 IF PSN = 0 THEN RETURN
2570 IF PSN = 1 THEN GOTO 2590 'can't be literal
2580 IF MID$(L$,PSN-1,1) = "!" THEN L$=MID$(L$,1,PSN-2)+MID$(L$,PSN): STRT = PSN + 1: GOTO 2550 'if preceded by ! take no action
2590 L$ = MID$(L$,1,PSN-1)+MID$(L$,PSN+1) 'eliminate &
2600 REM find the Greek character in list
2610 CHAR$ = MID$(L$,PSN,1)
2620 IF CHAR$ = "a" THEN CHAR$ = ALPHA$
2630 IF CHAR$ = "b" THEN CHAR$ = BETA$
2640 IF CHAR$ = "p" THEN CHAR$ = PI$
2650 IF CHAR$ = "d" THEN CHAR$ = DELTA$
2660 IF CHAR$ = "S" THEN CHAR$ = CAPSIGMA$
2670 IF CHAR$ = "`" THEN CHAR$ = PART$
2680 IF CHAR$ = "l" THEN CHAR$ = LAMBDA$
2690 IF CHAR$ = "i" THEN CHAR$ = IOTA$
2700 IF CHAR$ = "t" THEN CHAR$ = TAU$
2710 IF CHAR$ = "r" THEN CHAR$ = RHO$
2720 IF CHAR$ = "h" THEN CHAR$ = ETA$
2730 IF CHAR$ = "~" THEN CHAR$ = APPROX$
2740 IF CHAR$ = "-" THEN CHAR$ = INFINITY$
2750 IF CHAR$ = "g" THEN CHAR$ = GAMMA$
2760 IF CHAR$ = "e" THEN CHAR$ = EPSILON$
2770 IF CHAR$ = "r" THEN CHAR$ = RHO$
2780 IF CHAR$ = "s" THEN CHAR$ = SIGMA$
2790 IF CHAR$ = "n" THEN CHAR$ = NU$
2800 IF CHAR$ = "m" THEN CHAR$ = MU$
2810 IF CHAR$ = "D" THEN CHAR$ = CAPDELTA$
2820 IF CHAR$ = "w" THEN CHAR$ = OMEGA$
2830 IF CHAR$ = "k" THEN CHAR$ = KAPPA$
2840 IF CHAR$ = "x" THEN CHAR$ = XI$
2850 IF CHAR$ = "u" THEN CHAR$ = UPSILON$
2860 IF CHAR$ = "L" THEN CHAR$ = CAPLAMBDA$
2870 IF CHAR$ = "f" THEN CHAR$ = PHI$
2880 IF CHAR$ = "j" THEN CHAR$ = INTEGRAL$
2890 IF CHAR$ = "/" THEN CHAR$ = RTARROW$
2900 IF CHAR$ = "y" THEN CHAR$ = PSI$
2910 IF CHAR$ = "W" THEN CHAR$ = CAPOMEGA$
2920 IF CHAR$ = "z" THEN CHAR$ = ZETA$
2930 IF CHAR$ = "J" THEN CHAR$ = RADICAL$
2940 IF CHAR$ = "i" THEN CHAR$ = IOTA$
2950 IF CHAR$ = "c" THEN CHAR$ = CHI$
2960 IF CHAR$ = "G" THEN CHAR$ = CAPGAMMA$
2970 REM More character's can be added here
2980 MID$(L$,PSN,1) = CHAR$ 'substitute Greek character
2990 GOTO 2550  'check for more Greek characters
3000 RETURN
3010 REM
3020 REM check for superscripts
3030 SUPFLG = 0
3040 SUPER$ = SPACE$(PWIDTH) ' this will contain the superscripts
3050 STRT = 1
3060 PSN = INSTR(STRT,L$,"$")
3070 IF PSN = 0 GOTO 3160
3080 IF PSN=1 GOTO 3100
3090 IF MID$(L$,PSN-1,1) = "!" THEN L$=MID$(L$,1,PSN-2)+MID$(L$,PSN): STRT = PSN + 1: GOTO 3060 ' ignore if preceded by !
3100 IF MID$(L$,PSN+1,1) = "(" THEN GOSUB 3710: GOTO 3060 'if more than one superscript goto subroutine 3790
3110 MID$(SUPER$,PSN,1) = MID$(L$,PSN+1,1)
3120 L$ = MID$(L$,1,PSN-1) + SPACE$(1) + MID$(L$,PSN+2)
3130 SUPFLG = 1
3140 GOTO 3060
3150 REM
3160 REM check for subscripts
3170 SUBFLG = 0
3180 SUB$ = SPACE$(PWIDTH)
3190 STRT = 1
3200 PSN = INSTR(STRT,L$,"@")
3210 IF PSN = 0 THEN RETURN
3220 IF PSN = 1 THEN 3240
3230 IF MID$(L$,PSN-1,1) = "!" THEN L$=MID$(L$,1,PSN-2)+MID$(L$,PSN): STRT = PSN + 1: GOTO 3200
3240 IF MID$(L$,PSN+1,1) = "(" THEN GOSUB 3770: GOTO 3200
3250 MID$(SUB$,PSN,1) = MID$(L$,PSN+1,1)
3260 L$ = MID$(L$,1,PSN-1) + SPACE$(1) + MID$(L$,PSN+2)
3270 SUPER$ = MID$(SUPER$,1,PSN-1) + SPACE$(1) + MID$(SUPER$,PSN+2)
3280 SUBFLG = 1
3290 GOTO 3200
3300 REM
3310 REM
3320 REM print superscripts
3330 SCRIPT$ = SUPER$:GOSUB 4020:SUPER$ = SCRIPT$ 'truncate trailing blanks
3340 LPRINT INCREM$; 'switch into incremental mode
3350 LPRINT ESC$;"T";"18"; 'set line spacing
3360 LPRINT REVERSE$
3370 LPRINT SUPER$;
3380 LPRINT FORWARD$
3390 LPRINT ESC$+"A"; 'return to standard spacing
3400 SUPFLG = 0
3410 LPRINT SEEK$; 'return to logic seeking mode
3420 RETURN
3430 REM
3440 REM print subscripts
3450 SCRIPT$ = SUB$:GOSUB 4020:SUB$ = SCRIPT$ 'truncate trailing blanks
3460 LPRINT INCREM$; 'switch to incremental mode
3470 LPRINT ESC$;"T";"13";  'set line spacing
3480 LPRINT FORWARD$
3490 LPRINT SUB$;
3500 LPRINT REVERSE$
3510 LPRINT FORWARD$;
3520 LPRINT ESC$+"A"; 'return to standard spacing
3530 SUBFLG = 0
3540 LPRINT SEEK$;  'return to logic seeking mode
3550 RETURN
3560 REM
3570 REM underline routine
3580 STRT = 1
3590 PSN = INSTR(STRT,L$,"_")
3600 IF PSN = 0 THEN RETURN
3610 IF PSN = 1 THEN 3630  ' cannot be literal if in position 1
3620 IF MID$(L$,PSN-1,1) = "!" THEN L$=MID$(L$,1,PSN-2)+MID$(L$,PSN): STRT = PSN+1: GOTO 3590
3630 IF UNDERLINE = 0 THEN L$=MID$(L$,1,PSN-1)+UNDERLINEON$+MID$(L$,PSN+1):UNDERLINE=1:GOSUB 3660:GOTO 3590
3640 IF UNDERLINE = 1 THEN L$=MID$(L$,1,PSN-1)+UNDERLINEOFF$+MID$(L$,PSN+1):UNDERLINE = 0: GOSUB 3660: GOTO 3590
3650 REM
3660 REM fix the spacing in super$ and sub$
3670 SUPER$ = MID$(SUPER$,1,PSN-1)+MID$(SUPER$,PSN+1)
3680 SUB$ = MID$(SUB$,1,PSN-1)+MID$(SUB$,PSN+1)
3690 RETURN
3700 REM
3710 REM handle more than one superscript
3720 GOSUB 3840
3730 MID$(SUPER$,PSN,NCHAR) = MID$(L$,PSN+2,NCHAR)
3740 L$ = MID$(L$,1,PSN-1) + SPACE$(NCHAR) + MID$(L$,PSN+NCHAR+3)
3750 SUPFLG = 1
3760 RETURN
3770 REM handle more than one subscript
3780 GOSUB 3840
3790 MID$(SUB$,PSN,NCHAR) = MID$(L$,PSN+2,NCHAR)
3800 L$ = MID$(L$,1,PSN-1) + SPACE$(NCHAR) + MID$(L$,PSN+NCHAR+3)
3810 SUPER$ = MID$(SUPER$,1,PSN-1) + SPACE$(NCHAR) + MID$(SUPER$,PSN+NCHAR+3)
3820 SUBFLG = 1
3830 RETURN
3840 REM count characters between two parentheses
3850 PAR% = 1
3860 PLACE = PSN + 2
3870 IF PLACE > 80 THEN NCHAR = 2:RETURN  'error
3880 IF MID$(L$,PLACE,1) = ")" THEN PAR% = PAR% - 1
3890 IF MID$(L$,PLACE,1) = "(" THEN PAR% = PAR% + 1
3900 IF PAR% <> 0 THEN PLACE = PLACE + 1: GOTO 3870
3910 NCHAR = PLACE - PSN - 2
3920 RETURN
3930 REM set page length
3940 PRINT: INPUT "Page length in lines"; PLENGTH
3950 RETURN
3960 REM setup for starting place other than line 1, page 1
3970 SFLG = 1
3980 CLS
3990 INPUT "Starting page number";STPAGE: STPAGE = STPAGE - 1
4000 INPUT "Starting string";SLINE$
4010 RETURN
4020 REM truncate blanks at end of script$
4030 LENGTH = LEN(SCRIPT$) - 1
4040 IF RIGHT$(SCRIPT$,1) = " " THEN SCRIPT$ = LEFT$(SCRIPT$,LENGTH): GOTO 4030
4050 RETURN
4060 REM end of program
65399 '** DONE - PRESS ENTER TO RETURN TO MENU **
```

## OK84ASET.BAS

```bas
1000 ' OKIDATA 82A PRINTER CONFIGURATION PROGRAM (FOR IBM PC)
1010 ' (REQUIRES MS BASIC. )  05/26/83  T.E.M. TAILORED FOR PC.
1020 '
1030 ' SKIP GILBRECH, (212)685-0551
1040 ' NOVEMBER 9, 1981
1050 '
1060 ' FOR THE OKIDATA 82A
1070 ' ADAPTED (FREELY) FROM AN MX80 PROGRAM
1080 ' (MX80FORM.BAS) COPYRIGHT (c)
1090 ' RODERICK WAYNE HART WA3MEZ
1100 ' JUNE 21, 1981
1110 '
1120 ' THIS PROGRAM IS NOT TO BE USED IN A COMMERCIAL ENVIRONMENT
1130 ' WITHOUT PROPER AUTHORIZATION.
1140 '
1150 '                                        ********** Define variables
1160 ESC$ = CHR$(27)    'escape command
1170 BEL$ = CHR$(7)     'bell command
1180 'CS$  = ESC$+"E"    'clear screen command
1190 EL$  = ESC$+"l"    'erase entire line command
1200 CU$  = ESC$+"A"    'cursor up one line command
1210 DC4$ = CHR$(20)    'loads vertical tab positions
1220 QU$  = CHR$(63)    'question mark - ends vert. tab loading
1230 RS$  = CHR$(30)    'designates 10 c.p.i.
1240 GS$  = CHR$(29)    'designates 16.5 c.p.i.
1250 US$  = CHR$(31)    'designates wider characters (x2)
1260 PL$  = ESC$+"F"    'designates page length
1270 TOF$ = ESC$+"5"    'sets top of form
1280 LL$  = ESC$+"A"    'designates long line (80 @ 10 c.p.i.)
1290 SL$  = ESC$+"B"    'designates short line (64 @ 10 c.p.i.)
1300 '
1310 '                                   ********** Print sign-on message
1320 CLS
1330 PRINT TAB(12) "OKIDATA 82A PRINTER CONFIGURATION PROGRAM"
1340 PRINT TAB(12) "*****************************************"
1350 PRINT : PRINT
1360 PRINT TAB(7) "When the printer is first turned on, it is set to 1/6 inch"
1370 PRINT TAB(7) "vertical spacing and 10 characters per inch horizontal."
1380 PRINT TAB(7) "If these values are OK, just leave things alone."
1390 PRINT TAB(7) "Make sure to turn the printer off and on to initialize it"
1400 PRINT TAB(7) "if you are setting, or have already set, vertical tabs."
1410 PRINT
1420 PRINT TAB(7); : INPUT "Press RETURN when you are ready. ",CR$
1430 '                                              ********** Print menu
1440 GOSUB 3610
1450 PRINT TAB(26) "MAIN MENU"
1460 PRINT TAB(26) "---------"
1470 PRINT : PRINT
1480 PRINT TAB(10) "1.  Set line spacing"
1490 PRINT TAB(10) "2.  Set vertical tabs"
1500 PRINT TAB(10) "3.  Set page length"
1510 PRINT TAB(10) "4.  Set top of form"
1520 PRINT TAB(10) "5.  Set characters per inch"
1530 PRINT TAB(10) "6.  Set line length"
1540 PRINT TAB(10) "7.  Execute printer test"
1550 PRINT TAB(10) "8.  Return to BASIC command level"
1560 PRINT TAB(10) "9.  Exit this program."
1570 GOSUB 3660
1580 IF S% < 1 OR S% > 9 THEN GOSUB 3500 : GOTO 1440
1590 ON S% GOTO 1630,1820,2490,2740,2870,3070,3230
1600 IF S% = 8 THEN CLS: END
1610 IF S% = 9 THEN CLS: SYSTEM
1620 '                                            ********** Line spacing
1630 GOSUB 3610
1640 PRINT TAB(26) "LINE SPACING"
1650 PRINT TAB(26) "------------"
1660 PRINT : PRINT
1670 PRINT TAB(10) "1.  1/6 inch"
1680 PRINT TAB(10) "2.  1/8 inch"
1690 PRINT TAB(10) "3.  Return to main menu"
1700 GOSUB 3660
1710 IF S% < 1 OR S% > 3 THEN GOSUB 3500 : GOTO 1630
1720 ON S% GOTO 1740,1780,1440
1730 '                                   ********** 1/6 inch line spacing
1740 LPRINT ESC$+"6" : PRINT
1750 PRINT TAB(10) "Line spacing set to 1/6 inch"
1760 GOTO 3460
1770 '                                   ********** 1/8 inch line spacing
1780 LPRINT ESC$+"8" : PRINT
1790 PRINT TAB(10) "Line spacing set to 1/8 inch"
1800 GOTO 3460
1810 '                                       ********** Set vertical tabs
1820 CLS
1830 PRINT TAB(26) "VERTICAL TABS"
1840 PRINT TAB(26) "-------------"
1850 TSP% = 0
1860 PRINT : PRINT
1870 PRINT TAB(10) "How many vertical tabs do you wish to set? (27 max.)"
1880 PRINT TAB(10); : INPUT "(Enter '0' to return to main menu) ",VTAB$
1890 IF VTAB$ = "0" THEN 1440
1900 IF LEN(VTAB$) > 2 THEN GOSUB 3500 : GOTO 1820
1910 VTAB% = VAL(VTAB$)
1920 IF VTAB% > 27 OR VTAB% < 1 THEN GOSUB 3500 : GOTO 1820
1930 PRINT
1940 PRINT TAB(10) "When prompted, enter:"
1950 PRINT TAB(13) "1) Number of spaces to the first tab, then"
1960 PRINT TAB(13) "2) The channel number of the tab, then"
1970 PRINT TAB(13) "3) The number of spaces to the next tab, etc."
1980 PRINT
1990 PRINT TAB(10) "Channel numbers can be reused, but cannot have"
2000 PRINT TAB(10) "a value greater than 12."
2010 PRINT TAB(10) "Total number of spaces cannot exceed 128."
2020 PRINT
2030 PRINT TAB(10) "Note: To access these tabs after they are set, you"
2040 PRINT TAB(16) "must send CHR$(11) or (^K) plus the channel number"
2050 PRINT TAB(16) "of the desired tab location to the printer."
2060 PRINT TAB(16) "Code for channel #10 = ':',#11 = ';',#12 = '<'"
2070 PRINT
2080 PRINT TAB(10); : INPUT "Press RETURN when you are ready. ",CR$
2090 '                                   ********** Begin tab sequence
2100 GOSUB 3610
2110 LPRINT DC4$
2120 FOR X% = 1 TO VTAB%
2130 PRINT
2140 PRINT TAB(10); : INPUT "Number of spaces to tab:  ",SP$
2150 IF SP$ = "0" THEN 2180
2160 IF LEN(SP$) > 3 OR VAL(SP$) > 128 THEN GOSUB 3560 : GOTO 2140
2170 IF VAL(SP$) < 1 THEN GOSUB 3560 : GOTO 2140
2180 SP% = VAL(SP$)
2190 TSP% = TSP% + SP% : IF TSP% <= 128 THEN 2320
2200 PRINT : PRINT TAB(10) "Sorry, you entered";SP%;
2210 IF SP%=1 THEN PRINT "space, and the printer has no more room." : GOTO 2240
2220 PRINT "spaces, and the printer"
2230 PRINT TAB(10) "only has room left for";128+SP%-TSP%;"."
2240 PRINT TAB(10) "You can re-enter the number of spaces or start over."
2250 TSP% = TSP% - SP% : PRINT
2260 PRINT TAB(10) "Do you want to start over? <Y/N>"
2270 YN$ = INKEY$ : IF YN$ = "" THEN 2270
2280 IF YN$ = "Y" OR YN$ = "y" THEN 2300
2290 IF YN$ = "N" OR YN$ = "n" THEN PRINT:GOTO 2140:ELSE GOSUB 3560:GOTO 2260
2300 PRINT : PRINT TAB(10) "OK -- Turn the printer off and on and press RETURN"
2310 PRINT TAB(10); : INPUT "when you are ready ",CR$ : GOTO 1820
2320 PRINT
2330 PRINT TAB(10); : INPUT "Channel number of tab:    ",CH$
2340 IF LEN(CH$) > 2 THEN GOSUB 3560 : GOTO 2330
2350 IF VAL(CH$) > 12 OR VAL(CH$) < 1 THEN GOSUB 3560 : GOTO 2330
2360 IF CH$ = "10" THEN CH$ = ":"
2370 IF CH$ = "11" THEN CH$ = ";"
2380 IF CH$ = "12" THEN CH$ = "<"
2390 '                                     ********** Send tab to printer
2400 LPRINT SPC(SP%);CH$
2410 NEXT X%
2420 LPRINT QU$
2430 '                                            ********** End sequence
2440 PRINT
2450 IF VTAB% = 1 THEN PRINT TAB(9) VTAB%;"vertical tab set." : GOTO 3460
2460 PRINT TAB(9) VTAB%;"vertical tabs set."
2470 GOTO 3460
2480 '                                         ********** Set page length
2490 GOSUB 3610
2500 PRINT TAB(27) "PAGE LENGTH"
2510 PRINT TAB(27) "-----------"
2520 PRINT : PRINT
2530 PRINT TAB(10) "1.  Set page length"
2540 PRINT TAB(10) "2.  Return control to front panel switch"
2550 PRINT TAB(10) "3.  Return to main menu"
2560 GOSUB 3660
2570 IF S% < 1 OR S% > 3 THEN GOSUB 3500 : GOTO 2490
2580 ON S% GOTO 2590,2700,1440
2590 PRINT
2600 PRINT TAB(10); : INPUT "Enter page length desired (0-99 lines): ",L$
2610 IF L$ = "0" THEN 2640
2620 IF LEN(L$) > 2 THEN GOSUB 3560 : GOTO 2600
2630 IF VAL(L$) < 1 THEN GOSUB 3560 : GOTO 2600
2640 IF VAL(L$) < 10 THEN LPRINT PL$;"0";L$ : GOTO 2670
2650 LFTL$ = LEFT$(L$,1) : RTL$ = RIGHT$(L$,1)
2660 LPRINT PL$;LFTL$;RTL$
2670 PRINT : PRINT TAB(10) "Page length set to ";L$;
2680 IF L$ = "1" THEN PRINT " line" : GOTO 3460
2690 PRINT " lines" : GOTO 3460
2700 PRINT
2710 LPRINT PL$;"0";"0" : PRINT TAB(10) "Control returned to switch" : GOTO 3460
2720 '
2730 '                                         ********** Set top of form
2740 GOSUB 3610
2750 PRINT TAB(27) "TOP OF FORM"
2760 PRINT TAB(27) "-----------"
2770 PRINT : PRINT
2780 PRINT TAB(10) "1.  Set top of form (check the paper position)"
2790 PRINT TAB(10) "2.  Return to main menu"
2800 GOSUB 3660
2810 IF S% < 1 OR S% > 2 THEN GOSUB 3500 : GOTO 2740
2820 ON S% GOTO 2830,1440
2830 LPRINT TOF$ : PRINT
2840 PRINT TAB(10) "Top of form set to present position"
2850 GOTO 3460
2860 '                                 ********** Set characters per inch
2870 GOSUB 3610
2880 PRINT TAB(23) "CHARACTERS PER INCH"
2890 PRINT TAB(23) "-------------------"
2900 PRINT : PRINT
2910 PRINT TAB(10) "1.  5 characters per inch"
2920 PRINT TAB(10) "2.  8.3 characters per inch"
2930 PRINT TAB(10) "3.  10 characters per inch"
2940 PRINT TAB(10) "4.  16.5 characters per inch"
2950 PRINT TAB(10) "5.  Return to main menu"
2960 GOSUB 3660
2970 IF S% < 1 OR S% > 5 THEN GOSUB 3500 : GOTO 2870
2980 ON S% GOTO 2990,3000,3010,3020,1440
2990 LPRINT RS$;US$ : GOTO 3030
3000 LPRINT GS$;US$ : GOTO 3030
3010 LPRINT RS$ : GOTO 3030
3020 LPRINT GS$
3030 A(1) = 5 : A(2) = 8.3 : A(3) = 10 : A(4) = 16.5
3040 PRINT : PRINT TAB(10) "Printer set to";A(S%);"characters per inch"
3050 GOTO 3460
3060 '                                         ********** Line length set
3070 GOSUB 3610
3080 PRINT TAB(23) "LINE LENGTH"
3090 PRINT TAB(23) "-----------"
3100 PRINT : PRINT
3110 PRINT TAB(10) "1.  Set long line (80 char. @ 10 c.p.i.)"
3120 PRINT TAB(10) "2.  Set short line (64 char. @ 10 c.p.i.)"
3130 PRINT TAB(10) "3.  Return to main menu"
3140 GOSUB 3660
3150 IF S% < 1 OR S% > 3 THEN GOSUB 3500 : GOTO 3070
3160 ON S% GOTO 3170,3180,1440
3170 LPRINT LL$ : GOTO 3190
3180 LPRINT SL$
3190 PRINT : PRINT TAB(10) "Printer set to";
3200 IF S% = 1 THEN PRINT " long line" ELSE PRINT " short line"
3210 GOTO 3460
3220 '                                    ********** Printer test routine
3230 GOSUB 3610
3240 PRINT TAB(23) "PRINTER TEST"
3250 PRINT TAB(23) "------------"
3260 PRINT : PRINT
3270 PRINT TAB(10) "1.  Execute printer test"
3280 PRINT TAB(10) "2.  Return to main menu"
3290 GOSUB 3660
3300 IF S% < 1 OR S% > 2 THEN GOSUB 3500 : GOTO 3230
3310 ON S% GOTO 3320,1440
3320 PRINT
3330 PRINT TAB(10) "Do you want a form feed before the test? <Y/N>"
3340 YN$ = INKEY$ : IF YN$ = "" THEN 3340
3350 IF YN$ = "Y" OR YN$ = "y" THEN 3380
3360 IF YN$ = "N" OR YN$ = "n" THEN 3390
3370 GOSUB 3560 : GOTO 3330
3380 LPRINT CHR$(12)
3390 PRINT : PRINT TAB(10) "Type any character to stop printer test"
3400 FOR X% = 32 TO 126
3410 IF INKEY$ <> "" THEN 3460
3420 LPRINT CHR$(X%);
3430 NEXT X%
3440 GOTO 3400
3450 '                           ********* Routine to return to main menu
3460 PRINT : PRINT
3470 PRINT TAB(10); : INPUT "Press RETURN for main menu ",CR$
3480 GOTO 1440
3490 '                                     ********** Error subroutine # 1
3500 CLS
3510 PRINT BEL$ : FOR Z% = 1 TO 6 : PRINT : NEXT
3520 PRINT TAB(13) "Impossible selection; please try again!"
3530 FOR Z% = 1 TO 1000 : NEXT
3540 RETURN
3550 '                                     ********** Error subroutine # 2
3560 PRINT CU$;EL$;BEL$;TAB(12) "Impossible selection; please try again!";
3570 FOR Z% = 1 TO 1000 : NEXT
3580 PRINT EL$;CU$
3590 RETURN
3600 '                                 ********** Clear screen subroutine
3610 CLS
3620 PRINT:PRINT
3630 RETURN
3640 '                     ********** Wait for character entry subroutine
3650 '
3660 PRINT : PRINT
3670 PRINT TAB(10) "Please enter the number of your choice:"
3680 S$ = INKEY$ : IF S$ = "" THEN 3680
3690 S% = VAL(S$) : RETURN
3700 END
```

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk 0377

     Volume in drive A has no label
     Directory of A:\

    CITOHSET BAS     14720  11-01-82   7:22p
    DIABLO   DOC       345   6-24-83   9:06a
    DIABLO   EXE       896   6-24-83   8:59a
    EPSN-OKI COM      1352   9-09-84   1:13p
    EPSN-OKI DOC       700   9-09-84   2:58p
    EW-PROWR EWF      4096   6-25-83  10:29a
    EW-PROWR TXT      4096   6-25-83  10:39a
    GDUMP    BAS      3200  12-30-82   3:59p
    GDUMP    EXE     23040  12-30-82   4:08p
    HP7470A  BAS      3968   9-20-83   7:14a
    NECPLOT7 BAS      1024   3-02-83   7:42p
    NECPRINT BAS     14208   1-30-83   7:38a
    NECPRINT TXT      5376   1-30-83   7:28a
    NECPRTSC COM      1024   7-03-83   1:36a
    NECPRTSC DOC      1862   6-30-83   7:37p
    NECSCRN  COM      1168   6-24-83   8:02p
    NECSCRN  DOC      1954   6-24-83   7:43p
    OKIDUMP  COM      1024   3-02-84   6:44a
    OKISET   COM      3968   4-16-84  12:45a
    OKISET   DOC       964   9-14-84   3:22p
    OKIDATA  EXE     31488   2-26-84   3:11p
    PRINTER  COM      1102   1-10-84  11:10a
    PRINTER  DAT       384   1-10-84   8:03a
    PRINTER  DOC     10660   1-10-84   7:06p
    OKIDUMP  DOC       512  10-28-83   6:27a
    SETOKI   COM      1280   3-01-84   6:33a
    LASERJET EXE     18560  12-28-84   1:56p
    GRCITOH  COM      1546  12-08-84  12:18a
    NECGRAF  COM      1546  11-14-84  10:28p
    GEMINI   EXE     29056   2-26-84   4:12p
    OK84ASET BAS     11392   8-26-83   7:40a
    PROWRTER DOC      1124   2-26-84  12:23p
    PROWRITE EXE     31172   6-17-84   9:09p
    IDSPRISM BAS     13312   1-23-83   2:44p
    OKIGRAF  COM      1640  11-08-84  12:00a
    NECSET   COM     11904  11-26-84  10:19p
    NECSET   DOC      1280  11-26-84  10:16p
    COVER_TB COM      1280   1-01-80   3:21a
    BANNERIF EXE     36224  12-19-85   3:19p
    BANNERIF DOC      4608   1-15-87   9:39a
    GEMSET   EXE      2560   2-03-85   8:05a
    FILES377 TXT      2676   1-04-80   1:27a
           42 file(s)     304291 bytes
                           38912 bytes free
