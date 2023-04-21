---
layout: page
title: "PC-SIG Diskette Library (Disk #156)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0156/
machines:
  - id: ibm5160
    type: pcx86
    config: /machines/pcx86/ibm/5160/cga/256kb/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0156"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5160" %}

{% comment %}info_begin{% endcomment %}

## Information about "IBM USERS GROUP #1"

    File Descriptions:
    
    ???????  NL   Data files (24 files).
    MASTHEAD      Information file.
    NEWS     EXE  Main viewing program.
    PCKEY    BAS  Basic program to reassign function keys.
    PCUGNEWS TOC  Information file.
    READ     ME   Information file.
    SCREEN   BAS  Program used by NEWS.EXE
    ???????  PIC  Picture data files (10 files).
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## CRC.TXT

{% raw %}
```
PC-SIG Disk No. #156, version v1 

The following is a list of the file checksums which should be produced by
the CRCK4 program on disk #9 (and others).  If the CRC numbers do not match
you may have a bad file.  To use type:  CRCK4 <filespec>

CRCK4 output for this disk:


CRCK ver 4.2B (MS DOS VERSION )
CTL-S pauses, CTL-C aborts

--> FILE:  MASTHEAD.            CRC = FE 8E

--> FILE:  SCREEN  .BAS         CRC = B2 9C

--> FILE:  PCKEY   .BAS         CRC = AF DB

--> FILE:  NEWS    .EXE         CRC = 35 A8

--> FILE:  GERTRUD .NL          CRC = DB 9B

--> FILE:  CLUSTADP.NL          CRC = 26 FA

--> FILE:  KRUGGEL .NL          CRC = 4A 99

--> FILE:  HARRIS  .NL          CRC = E6 39

--> FILE:  NISLEY  .NL          CRC = 70 EA

--> FILE:  CLUSTATT.NL          CRC = 33 30

--> FILE:  CLUSTKIT.NL          CRC = A4 2B

--> FILE:  SLIMLINE.NL          CRC = D7 63

--> FILE:  TODD    .NL          CRC = DE 72

--> FILE:  PORTABLE.NL          CRC = 1B 4B

--> FILE:  WHITHEAD.NL          CRC = 54 22

--> FILE:  SCRIPT  .NL          CRC = C0 E3

--> FILE:  EDTORIAL.NL          CRC = CE E4

--> FILE:  HAMMOND .NL          CRC = 29 2B

--> FILE:  CREBS   .NL          CRC = A2 04

--> FILE:  PRNTSCRN.NL          CRC = 08 40

--> FILE:  RICHTER .NL          CRC = 2B 06

--> FILE:  ADDRESS .NL          CRC = C7 C9

--> FILE:  MACK    .NL          CRC = 9F EA

--> FILE:  GYNN    .NL          CRC = 17 C7

--> FILE:  SUPPORT .NL          CRC = 11 03

--> FILE:  CLUSTPG .NL          CRC = B7 A2

--> FILE:  HOSKINS .NL          CRC = 77 55

--> FILE:  ALBERT  .NL          CRC = 7E D3

--> FILE:  SEC4    .PIC         CRC = 12 D1

--> FILE:  SEC6    .PIC         CRC = F8 8C

--> FILE:  SEC5    .PIC         CRC = 29 20

--> FILE:  SEC7    .PIC         CRC = E7 D1

--> FILE:  SEC9    .PIC         CRC = 32 BD

--> FILE:  SEC1    .PIC         CRC = D3 AA

--> FILE:  SEC0    .PIC         CRC = 03 C4

--> FILE:  SEC3    .PIC         CRC = A3 14

--> FILE:  SEC8    .PIC         CRC = CC 49

--> FILE:  NEWSLOGO.PIC         CRC = B4 A6

--> FILE:  PCUGNEWS.TOC         CRC = 6F C2

--> FILE:  READ    .ME          CRC = 73 FB

--> FILE:  CRC     .TXT         CRC = 39 43

--> FILE:  CRCK4   .COM         CRC = BD 22

 ---------------------> SUM OF CRCS = 28 BC

DONE

These and other Public Domain and user-supported programs from:

PC Software Interest Group
1125 Stewart Ct  Suite G
Sunnyvale, CA 94086
(408) 730-9291
```
{% endraw %}

## PCKEY.BAS

{% raw %}
```bas
10 REM ***** PC - KEY *****
20 KEY OFF : CLS
30 LOCATE 5,21 : PRINT CHR$(201)+ STRING$(38,205)+CHR$(187) : LOCATE 6,21 : PRINT CHR$(186)+STRING$(38," ")+CHR$(186)
40 LOCATE 7,21 : PRINT CHR$(186)+ STRING$(15," ")+"PC - KEY"+ STRING$(15," ")+CHR$(186) : LOCATE 8,21
50 PRINT CHR$(186)+STRING$(38," ") +CHR$(186) : LOCATE 9,21 :   PRINT CHR$(186)+" Key   Definition Program For DOS 2.0 "+CHR$(186)
60 LOCATE 10,21 : PRINT CHR$(186)+ STRING$(38," ")+CHR$(186) : LOCATE 11,21
70 PRINT CHR$(186)+"              Version 1.00            "+   CHR$(186) : LOCATE 12,21 : PRINT   CHR$(186)+STRING$(38," ")+   CHR$(186)
80 LOCATE 13,21: PRINT CHR$(200)+   STRING$(38,205)+CHR$(188) :   LOCATE 17,36 : PRINT "Written   By"
90 LOCATE 19,30: PRINT "Josiah   Collier Hoskins" : LOCATE 23,26   : PRINT "Press space bar to   continue..."
100 A$=INKEY$ : IF A$="" THEN 100
110 CLS : DIM K$(20),KN$(20)
120 FOR I=1 TO 10 : KEY I,"" :    NEXT I  'kill softkeys defined    in Basic
130 FOR I=1 TO 20 : K$(I)="" :    NEXT I
140 PRINT "Key definitions:"
150 FOR I=1 TO 20 : IF I>10    THEN 170
160 LOCATE 2+I,10 : PRINT "F"+    STRING$(68," "); : LOCATE 2+I,    11 : PRINT RIGHT$(STR$(I),2)+    "="; : GOTO 180
170 LOCATE 2+I,8 : PRINT "s-F"+STRING$(68," "); : LOCATE 2+I,11 : PRINT RIGHT$(STR$(I-10),2)    +"=";
180 PRINT K$(I) : NEXT I
190 LOCATE 23,1 : PRINT STRING$    (79," ") : LOCATE 23,1 : PRINT    "Press key to be defined    or<End> to stop"
200 R$=INKEY$ : IF R$ ="" THEN 200    ELSE IF LEN(R$)<>2 THEN 200
210 IF ASC(LEFT$(R$,1))<>0 THEN 200    ELSE R=ASC(RIGHT$(R$,1))
220 IF R >= 59 AND R <= 68 THEN 250    'base function keys
230 IF R> = 84 AND R <= 93 THEN 270    'shift function keys
240 IF R = 79 THEN 300 ELSE GOTO    190                'end key
250 R = R - 58 : LOCATE 23,1 :    PRINT STRING$(79," ") : LOCATE    23,1
260 PRINT "Enter string to be    assigned to F";R; : GOTO 290
270 R = R-83 : LOCATE 23,1 : PRINT    STRING$(79," ") : LOCATE 23,1
280 ENTER "String to be assigned to s-F";R; : R = R + 10
290 R$="" : INPUT R$ : K$(R)=R$ :    GOTO 150
300 KEYDEF$ = "KEYON" :    OPEN KEYDEF$ FOR OUTPUT AS #1    'create file to turn on keys
310 CR$ = "<CR>" : CR2$ = "<cr>" :    FOR I=1 TO 20 : IF K$(I)=""    THEN 390
320 IF CR$ = RIGHT$(K$(I),4) OR    CR2$ = RIGHT$(K$(I),4) THEN    360
330 IF I > 10 THEN 350
340 PRINT #1,CHR$(27)+"[0;"+RIGHT$(STR$(I+58),2)+";"+CHR$(34)+K$(I)+CHR$(34)+";"+"32p" : GOTO    410
350 PRINT #1,CHR$(27)+"[0;"+RIGHT$    (STR$(I-10+83),2)+";"+CHR$(34)+    K$(I)+CHR$(34)+";"+"32p" : GOTO    410
360 NOL = LEN(K$(I)) :N = NOL - 4 :    KN$(I) = LEFT$(K$(I),N) : IF I    > 10 THEN 380
370 PRINT #1,CHR$(27)+"[0;"+RIGHT$    (STR$(I+58),2)+";"+CHR$(34)+    KN$(I)+CHR$(34)+";+"13P" : GOTO    410
380 PRINT #1,CHR$(27)+"[0;"+RIGHT$    (STR$(I-10+83),2)+";"+CHR$(34)+    KN$(I)+CHR$(34)+";"+13P" : GOTO    410
390 IF I>10 THEN 400 : PRINT #1,    CHR$(27)+"[0;"+RIGHT$(STR$    (I+58),2)+";0;"+RIGHT$(STR$    (I+58),2)+"p" "GOTO 410
400 PRINT #1,CHR$(27)+"[0;"+RIGHT$    (STR$(I-10+83),2)+";0;"+RIGHT$    (STR$(I-10+83),2)+"p"
410 NEXT I : CLOSE #1
420 KEYNOT$ = "KEYOFF" : OPEN    KEYNOT$ FOR OUTPUT AS #2 :    FOR I=1 TO 20 : IF I>10 THEN
430 PRINT #2,CHR$(27)+"[0;"+RIGHT$    (STR$(I+58),2)+";0;"+RIGHT$    (STR$(I+58),2)+"p" :GOTO 450
440 PRINT #2,CHR$(27)+"[0;"+RIGHT$    (STR$(I-10+83),2)+";0;"+"RIGHT$    (STR$(I-10+83),2)+"P"
450 NEXT I : CLOSE #2
460 HELPER$ = "KEYHELP" : OPEN    HELPER$ FOR OUTPUT AS #3    'create help file
470 PRINT #3, "PC - KEY  HELPER =>    Present Key Definitions are:"
480 FOR I=1 TO 20 : IF I>10 THEN    500
490 PRINT #3,"          F"+RIGHT$    (STR$(I),2)+K$(I) : GOTO 510
500 PRINT #3,"        s-F"+RIGHT$    (STR$(I-10),2)+"="+K$(I)
510 NEXT I : CLOSE #3
520 KEY 1,"LIST"+CHR$(32) : KEY 2,    "RUN"+CHR$(13) : KEY 3,"LOAD"+     CHR$(34) : KEY 4,"SAVE"+     CHR$(34) : KEY 5,"CONT"+     CHR$(13)
530 KEY 6,","+CHR$(32)+"LPT1"+    CHR$(13) : KEY 7,"TRON"+    CHR$(13) : KEY 8,"TROFF"+    CHR$(13) : KEY 9,"KEY"+CHR$(32)
540 KEY 10,"SCREEN 0,0,0"+CHR$(13)    'normal basic softkeys turned    back on
550 END
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

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0156

     Volume in drive A has no label
     Directory of A:\

    ADDRESS  NL       5120   4-09-84   2:03a
    ALBERT   NL      11264   4-09-84   2:04a
    CLUSTADP NL       2048   4-09-84   2:03a
    CLUSTATT NL       2048   4-09-84   2:03a
    CLUSTKIT NL       2048   4-09-84   2:03a
    CLUSTPG  NL       9216   4-09-84   2:03a
    CRC      TXT      2533  11-14-84  11:19a
    CRCK4    COM      1536  10-21-82   7:54p
    CREBS    NL       4096   4-09-84   2:03a
    EDTORIAL NL       3072   4-09-84   2:03a
    GERTRUD  NL       2048   4-09-84   2:03a
    GYNN     NL       6144   4-09-84   2:03a
    HAMMOND  NL       3072   4-09-84   2:03a
    HARRIS   NL       2048   4-09-84   2:03a
    HOSKINS  NL       9216   4-09-84   2:04a
    KRUGGEL  NL       2048   4-09-84   2:03a
    MACK     NL       6144   4-09-84   2:03a
    MASTHEAD          1536   4-09-84   2:02a
    NEWS     EXE     55296   4-09-84   2:03a
    NEWSLOGO PIC     16512   4-09-84   2:04a
    NISLEY   NL       2048   4-09-84   2:03a
    PCKEY    BAS      4224   4-09-84   2:03a
    PCUGNEWS TOC      1792   4-09-84   2:04a
    PORTABLE NL       3072   4-09-84   2:03a
    PRNTSCRN NL       4096   4-09-84   2:03a
    READ     ME        316   4-09-84  10:26a
    RICHTER  NL       5120   4-09-84   2:03a
    SCREEN   BAS      3712   4-09-84   2:03a
    SCRIPT   NL       3072   4-09-84   2:03a
    SEC0     PIC      3200   4-09-84   2:04a
    SEC1     PIC      3072   4-09-84   2:04a
    SEC3     PIC      3584   4-09-84   2:04a
    SEC4     PIC      2304   4-09-84   2:04a
    SEC5     PIC      2688   4-09-84   2:04a
    SEC6     PIC      2432   4-09-84   2:04a
    SEC7     PIC      2944   4-09-84   2:04a
    SEC8     PIC      4608   4-09-84   2:04a
    SEC9     PIC      2944   4-09-84   2:04a
    SLIMLINE NL       2048   4-09-84   2:03a
    SUPPORT  NL       8192   4-09-84   2:03a
    TODD     NL       3072   4-09-84   2:03a
    WHITHEAD NL       3072   4-09-84   2:03a
           42 file(s)     218657 bytes
                           95232 bytes free
