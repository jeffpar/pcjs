---
layout: page
title: "PC-SIG Library Disk #363"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0363/
machines:
  - id: ibm5160
    type: pcx86
    config: /machines/pcx86/ibm/5160/cga/256kb/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk 0363"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5160" %}

{% comment %}info_begin{% endcomment %}

## Information about "PC-INPUT"

    The PCINPUT and PCIGEN programs here give you a straightforward and
    lean BASIC screen generation capacity.  With them you can design
    alphanumeric, numeric, selected character set and keyword screen input
    layouts for your software.  Study of these programs can also be
    instructive towards developing modifications, especially of BASIC
    programs.
    
    System Requirements: BASIC
    
    How to Start: Consult the INPUT.DOC and then run the DEMO to see how
    the PCINPUT program functions.  Check your BASIC setup for running
    these programs in the GETTING STARTED section.
    
    File Descriptions:
    
    DEMO     BAS  PCINPUT Demonstration
    PCIGEN   EXE  Compiled version of PCIGEN
    PCIGEN   BAS  Screen generator for BASIC programs
    PCINPUT  DOC  File listing for PCINPUT
    PCINPUT  BAS  Data entry generator for BASIC programs
    SKELETON BAS  Generated BASIC statements
    SKELETON MNU  Screen Generator skeleton names
    SKELETON DAT  Screen Generator data files
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## DEMO.BAS

```bas
10 REM ==>  PCINPUT DEMONSTRATION PROGRAM - CARL R. STATON
20 CLS:CLEAR:GOSUB 10000
30 II%=80:DIM IA$(30):IA$(1)="0123456789.- ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%&*()+=:;{}[]<>,/?'":IA$(2)="0123456789.-":IA$(3)="YN":I0$=STRING$(II%,255):I6$="  ":I7$="    ":I8$="        "
40 DEF FNIE$=LEFT$(I0$,IQ%):DEF FNIG%=IA%-1<1:DEF FNIP%(A%,B%)=(I9%=>A% AND I9%<=B%):DEF FNIU%=I9%=27:DIM IB#(30,2),IC$(30),IM$(30),IO$(30),ID$(80),I%(10),I6%(10):I6%(7)=8  '  ASCII CODE FOR CURSOR CHARACTER
49 GOSUB 2810
50 I1$="24014008OwE":GOSUB 2300
52 GOSUB 10260:I1$="24010101OwBPE":GOSUB 2300
60 CLS:GOSUB 2050
70 I1$="24010101OwBP":GOSUB 2300
80 CLS:GOSUB 490                  '  Alphanumeric Demo
90 I1$="12650601AwHM":GOSUB 2300:GOSUB 482
100 I1$="14650901Ab":GOSUB 2300:GOSUB 482
110 I1$="16650201AwMDB":GOSUB 2300:GOSUB 482
120 I1$="18651201AwB":GOSUB 2300:GOSUB 482
130 I1$="20651301AgB":GOSUB 2300:GOSUB 482
140 I1$="24010107OwBP":GOSUB 2300
150 CLS:GOSUB 750                  '  Numeric Demo
160 I1$="11700302Nw":GOSUB 2300:GOSUB 482
170 I1$="13700601Nb":GOSUB 2300:GOSUB 482
180 I1$="15700604NR":GOSUB 2300:GOSUB 482
190 I1$="17700303NwM":GOSUB 2300:GOSUB 482
200 I1$="19700201NwMDB":GOSUB 2300:GOSUB 482
210 I1$="24010107OwBP":GOSUB 2300
220 CLS:GOSUB 1010                  '  Selected Character Set
230 I1$="11650204Sw":GOSUB 2300:GOSUB 482
240 I1$="13651005Sw":GOSUB 2300:GOSUB 482
250 I1$="15650106Sw":GOSUB 2300:GOSUB 482
260 I1$="17650207Sw":GOSUB 2300:GOSUB 482
270 I1$="19650408Sw":GOSUB 2300:GOSUB 482
280 I1$="24010107OwBP":GOSUB 2300
290 CLS:GOSUB 1270                  '  Keyword Demo
300 I1$="12670201Kw":GOSUB 2300:GOSUB 482
310 I1$="14670703KwH":GOSUB 2300:GOSUB 482
320 I1$="16671104KwD":GOSUB 2300:GOSUB 482
330 I1$="18670502KbB":GOSUB 2300:GOSUB 482
340 I1$="20670505KwM":GOSUB 2300:GOSUB 482
350 I1$="24010107OwBP":GOSUB 2300
360 CLS:GOSUB 1530                  '  Formatted Demo
370 I1$="14400101Fw":GOSUB 2300:GOSUB 482
380 I1$="16400102Fw":GOSUB 2300:GOSUB 482
390 I1$="19650103Fw":GOSUB 2300:GOSUB 482
400 I1$="24010107OwBP":GOSUB 2300
410 CLS:GOSUB 1790                  '  Operator Messages Demo
420 I1$="10050102ObBP":GOSUB 2300
430 I1$="12052503Ow":GOSUB 2300
440 I1$="14052504OwE":GOSUB 2300
450 I1$="16050105Og":GOSUB 2300
460 I1$="18050106OR":GOSUB 2300
470 I1$="24010107OwBP":GOSUB 2300
480 CLS:PRINT"PCINPUT Demonstration is Ended.":END
482 LOCATE 24,1:COLOR 7,0:PRINT STRING$(60," ");:LOCATE 24,1
484 IF FNIU% THEN PRINT "ESCAPE Key was pressed.  No data returned.";:RETURN
486 IF FNIG% THEN PRINT "ENTER was pressed, data was not typed.";:RETURN
487 PRINT "Typed Data: >";FNIE$;"<";:RETURN
490 COLOR  7,0,0
500 PRINT "╔══════════════════════════════════════════════════════════════════════════════╗";
510 PRINT "║                                                                              ║";
520 PRINT "║    Alphanumeric Field Demonstration                                          ║";
530 PRINT "║    ▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀                                          ║";
540 PRINT "║                                                                              ║";
550 PRINT "║    There are five (5) fields below.  They have been defined as Alphanumeric  ║";
560 PRINT "║    (that is, ANY Letters, Numbers or Special Characters may be typed).  Any  ║";
570 PRINT "║    additional options such as Color or Disabled Escape Key are shown before  ║";
580 PRINT "║    the field.  Type anything you want - PCINPUT will allow any characters.   ║";
590 PRINT "║                                                                              ║";
600 PRINT "║                                                                              ║";
610 PRINT "║    * High-Intensity, Mandatory, Maximum 6 characters        :                ║";
620 PRINT "║                                                                              ║";
630 PRINT "║    * Blue color (Underline for Monochrome), 9 characters    :                ║";
640 PRINT "║                                                                              ║";
650 PRINT "║    * Mandatory, Disabled Escape Key, Blink, 2 characters    :                ║";
660 PRINT "║                                                                              ║";
670 PRINT "║    * Blinking, Maximum 12 characters                        :                ║";
680 PRINT "║                                                                              ║";
690 PRINT "║    * Blinking, Green color, Maximum 13 characters           :                ║";
700 PRINT "║                                                                              ║";
710 PRINT "╚══════════════════════════════════════════════════════════════════════════════╝";
720 PRINT "                                                                                ";
730 PRINT "                                                                               ";
740 RETURN
750 COLOR  7,0,0
760 PRINT "╔══════════════════════════════════════════════════════════════════════════════╗";
770 PRINT "║                                                                              ║";
780 PRINT "║    Numeric Field Demonstration                                               ║";
790 PRINT "║    ▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀                                               ║";
800 PRINT "║                                                                              ║";
810 PRINT "║    This demonstration shows how PCINPUT can be used to RANGE-CHECK a Numeric ║";
820 PRINT "║    field.  Try to type numeric values not within the shown range - of course ║";
830 PRINT "║    PCINPUT will not let you.                                                 ║";
840 PRINT "║                                                                              ║";
850 PRINT "║                                                                              ║";
860 PRINT "║    * Value must be between -.5 and +.5                            :          ║";
870 PRINT "║                                                                              ║";
880 PRINT "║    * Blue color (Underline for monochrome), any 6 digits          :          ║";
890 PRINT "║                                                                              ║";
900 PRINT "║    * Reverse-image, value must be bewtween 1 and 999999           :          ║";
910 PRINT "║                                                                              ║";
920 PRINT "║    * Mandatory, value must be between 1 and 100                   :          ║";
930 PRINT "║                                                                              ║";
940 PRINT "║    * Mandatory, Disabled Escape Key, Blink, any 2-digit value     :          ║";
950 PRINT "║                                                                              ║";
960 PRINT "║                                                                              ║";
970 PRINT "╚══════════════════════════════════════════════════════════════════════════════╝";
980 PRINT "                                                                                ";
990 PRINT "                                                                               ";
1000 RETURN
1010 COLOR  7,0,0
1020 PRINT "╔══════════════════════════════════════════════════════════════════════════════╗";
1030 PRINT "║                                                                              ║";
1040 PRINT "║    Selected Character Set Demonstration                                      ║";
1050 PRINT "║    ▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀                                      ║";
1060 PRINT "║                                                                              ║";
1070 PRINT "║    This demonstration shows how you can be Selective as to what characters   ║";
1080 PRINT "║    may be typed from the keyboard.  Try to type characters that are not      ║";
1090 PRINT "║    shown - of course PCINPUT will not let you.                               ║";
1100 PRINT "║                                                                              ║";
1110 PRINT "║                                                                              ║";
1120 PRINT "║    * Character set:  2468           -Maximum  2 characters  :                ║";
1130 PRINT "║                                                                              ║";
1140 PRINT "║    * Character set:  AaBbCcDdEeFfGg -Maximum 10 characters  :                ║";
1150 PRINT "║                                                                              ║";
1160 PRINT "║    * Character set:  YN123          -Maximum  1 character   :                ║";
1170 PRINT "║                                                                              ║";
1180 PRINT "║    * Character set:  aeiouy,        -Maximum  2 characters  :                ║";
1190 PRINT "║                                                                              ║";
1200 PRINT "║    * Character set:  12345\<>@#     -Maximum  4 characters  :                ║";
1210 PRINT "║                                                                              ║";
1220 PRINT "║                                                                              ║";
1230 PRINT "╚══════════════════════════════════════════════════════════════════════════════╝";
1240 PRINT "                                                                                ";
1250 PRINT "                                                                               ";
1260 RETURN
1270 COLOR  7,0,0
1280 PRINT "╔══════════════════════════════════════════════════════════════════════════════╗";
1290 PRINT "║                                                                              ║";
1300 PRINT "║     Keyword Field Demonstration                                              ║";
1310 PRINT "║     ▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀                                              ║";
1320 PRINT "║                                                                              ║";
1330 PRINT "║     This demonstration shows how you can use PCINPUT to force not only       ║";
1340 PRINT "║     what characters are typed, but also the COMBINATION in which the         ║";
1350 PRINT "║     characters are typed.  Try to type character combinations or key-        ║";
1360 PRINT "║     words not shown - PCINPUT will not accept them.                          ║";
1370 PRINT "║                                                                              ║";
1380 PRINT "║                                                                              ║";
1390 PRINT "║     * Keywords: OH, MA, WI, AZ, DE, WA, AK   -                :              ║";
1400 PRINT "║                                                                              ║";
1410 PRINT "║     * Keywords: Basic, CP/M, DOS, Fortran    - Highlighted    :              ║";
1420 PRINT "║                                                                              ║";
1430 PRINT "║     * Keywords: HELLO, GOOD-BYE, SALUTATIONS - Disabled Escape:              ║";
1440 PRINT "║                                                                              ║";
1450 PRINT "║     * Keywords: 1000, 2000, 5000, 10000      - Blink, Blue    :              ║";
1460 PRINT "║                                                                              ║";
1470 PRINT "║     * Keywords: all, none, first, last, done - Mandatory      :              ║";
1480 PRINT "║                                                                              ║";
1490 PRINT "╚══════════════════════════════════════════════════════════════════════════════╝";
1500 PRINT "                                                                                ";
1510 PRINT "                                                                               ";
1520 RETURN
1530 COLOR  7,0,0
1540 PRINT "╔══════════════════════════════════════════════════════════════════════════════╗";
1550 PRINT "║                                                                              ║";
1560 PRINT "║    Formatted Field Demonstration                                             ║";
1570 PRINT "║    ▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀                                             ║";
1580 PRINT "║                                                                              ║";
1590 PRINT "║    This demonstration shows how you can FORCE the data to be typed in a      ║";
1600 PRINT "║    very SPECIFIC format such as a Social Security Number or a Telephone      ║";
1610 PRINT "║    Number.  PCINPUT can be used to automatically type a character and        ║";
1620 PRINT "║    force Alphanumeric and Numeric characters in all other positions.         ║";
1630 PRINT "║    Try to type letters where numeric characters must be - PCINPUT will       ║";
1640 PRINT "║    automatically type forced characters.                                     ║";
1650 PRINT "║                                                                              ║";
1660 PRINT "║                                                                              ║";
1670 PRINT "║    * Telephone Number      :                                                 ║";
1680 PRINT "║                                                                              ║";
1690 PRINT "║    * Social Security Number:                                                 ║";
1700 PRINT "║                                                                              ║";
1710 PRINT "║    * 1st character must be numeric, 2nd & 3rd characters must be  AZ ,       ║";
1720 PRINT "║      Last 4 characters can be anything              :                        ║";
1730 PRINT "║                                                                              ║";
1740 PRINT "╚══════════════════════════════════════════════════════════════════════════════╝";
1750 PRINT "                                                                                ";
1760 PRINT "                                                                                ";
1770 PRINT "                                                                               ";
1780 RETURN
1790 COLOR  7,0,0
1800 PRINT "╔══════════════════════════════════════════════════════════════════════════════╗";
1810 PRINT "║                                                                              ║";
1820 PRINT "║    Operator Messages Demonstration                                           ║";
1830 PRINT "║    ▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀                                           ║";
1840 PRINT "║                                                                              ║";
1850 PRINT "║    This demonstration shows how PCINPUT can be used to to display any kind   ║";
1860 PRINT "║    message.  Go ahead and press the ENTER key if a message tells you to.     ║";
1870 PRINT "║                                                                              ║";
1880 PRINT "║                                                                              ║";
1890 PRINT "║                                                                              ║";
1900 PRINT "║                                                                              ║";
1910 PRINT "║                                                                              ║";
1920 PRINT "║                                                                              ║";
1930 PRINT "║                                                                              ║";
1940 PRINT "║                                                                              ║";
1950 PRINT "║                                                                              ║";
1960 PRINT "║                                                                              ║";
1970 PRINT "║                                                                              ║";
1980 PRINT "║                                                                              ║";
1990 PRINT "║                                                                              ║";
2000 PRINT "║                                                                              ║";
2010 PRINT "╚══════════════════════════════════════════════════════════════════════════════╝";
2020 PRINT "                                                                                ";
2030 PRINT "                                                                               ";
2040 RETURN
2050 COLOR  7,0,0
2060 PRINT "╔══════════════════════════════════════════════════════════════════════════════╗";
2070 PRINT "║                                                                              ║";
2080 PRINT "║    ████████   ███████    ███    ███    ██    █████████   ██   ██   ████████  ║";
2090 PRINT "║    ██    ██   ██         ███    ██ █   ██    ██     ██   ██   ██      ██     ║";
2100 PRINT "║    ████████   ██         ███    ██  █  ██    █████████   ██   ██      ██     ║";
2110 PRINT "║    ██         ██         ███    ██   █ ██    ██          ██   ██      ██     ║";
2120 PRINT "║    ██         ███████    ███    ██    ███    ██          ███████      ██     ║";
2130 PRINT "║                                                                              ║";
2140 PRINT "║  ▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀  ║";
2150 PRINT "║                                                                              ║";
2160 PRINT "║             *  SIMPLIFIES and Reduces the BASIC Statements needed            ║";
2170 PRINT "║                to DISPLAY, INPUT and VALIDATE Typed Data.                    ║";
2180 PRINT "║             *  Alphanumeric, Numeric, Keyword, Selected Character            ║";
2190 PRINT "║                Sets, Mandatory, Formatted, Range-Checking and more!          ║";
2200 PRINT "║             *  Automatically converts Numeric data into MKI$, MKS$           ║";
2210 PRINT "║                and MKD$ formats.                                             ║";
2220 PRINT "║             *  Use Red, Green, Blue, Blink, Reverse-image options.           ║";
2228 PRINT "║             *  Completely written in BASIC - runs on IBM PC, IBM PC/XT       ║";
2229 PRINT "║                IBM PC jr. & IBM Portable PC (DOS 1.1, 2.0 & 2.1).            ║";
2230 PRINT "║                                                                              ║";
2231 PRINT "╚══════════════════════════════════════════════════════════════════════════════╝";
2260 PRINT "                                                                               ";
2270 RETURN
2280 REM PCINPUT (IBM PC VERSION 1.8) COPYRIGHT 1983 BY CARL R. STATON
2290 REM (419) 347-3209          17 FRANKLIN AVENUE   SHELBY  OH  44875
2300 ON ERROR GOTO 2380:IF LEN(ID$)<1 AND I%>0 AND I%<II% AND INSTR(I1$,"O")<1 THEN ID$=ID$(I%)
2310 I1%=VAL(LEFT$(I1$,2)):I2%=VAL(MID$(I1$,3,2)):I3%=VAL(MID$(I1$,5,2)):I5%=VAL(MID$(I1$,7,2))
2320 I4%=((INSTR(I1$,"A")>0)*-1) + ((INSTR(I1$,"N")>0)*-2) + ((INSTR(I1$,"S")>0)*-4) + ((INSTR(I1$,"K")>0)*-8) + ((INSTR(I1$,"F")>0)*-32) + ((INSTR(I1$,"M")>0)*-64) + ((INSTR(I1$,"D")>0)*-128) + ((INSTR(I1$,"O")>0)*-16)
2330 I4%=I4% + ((INSTR(I1$,"P")>0)*-256) + ((INSTR(I1$,"E")>0)*-512):I6%(5)=I6%(1):I6%(6)=I6%(2):I6%(1)=0:I6%(2)=0:I6%(3)=0:I6%(4)=0:I6%(2)=((INSTR(I1$,"R")>0)*-7)
2340 I6%(3)=(-1*(INSTR(I1$,"H")>0)) + (-1*(INSTR(I1$,"R")>0)) + (-1*(INSTR(I1$,"I")>0))
2350 I6%(4)=(-1*(INSTR(I1$,"U")>0)) + (-1*(INSTR(I1$,"b")>0)) + (-2*(INSTR(I1$,"g")>0)) + (-4*(INSTR(I1$,"r")>0)) + (-7*(INSTR(I1$,"w")>0))
2360 IF ((-1*(I4% AND 1)) + (-1*(I4% AND 2)) + (-1*(I4% AND 4)) + (-1*(I4% AND 8)) + (-1*(I4% AND 16)) + (-1*(I4% AND 32))) > 1 OR (I6%(3)<>0 AND I6%(3)<>1) OR INSTR(CHR$(0)+CHR$(1)+CHR$(2)+CHR$(4)+CHR$(7)+CHR$(8),CHR$(I6%(4)))=0 THEN 2380
2370 IF I1%>0 AND I1%<26 AND I2%>0 AND I2%<II%+1 AND I3%>0 AND I3%<II%+1 AND I5%>0 AND I5%<31 THEN IF I4% AND 32 THEN I3%=LEN(IM$(I5%)):GOTO 2390 ELSE 2390
2380 IF ERL=2680 THEN RESUME 2430 ELSE CLS:PRINT "PCINPUT ERROR: ROW="I1%"COLUMN="I2%"LENGTH="I3%"ATTRIBUTE="RIGHT$(I1$,LEN(I1$)-6)"  EDIT="I5%"  LINE="ERL:STOP
2390 REM
2400 I6%(1)=I6%(4) + ((INSTR(I1$,"B")>0)*-16) + ((INSTR(I1$,"H")>0)*-8):IF I4% AND 16 THEN 2720
2410 COLOR I6%(1),I6%(2):LOCATE I1%,I2%:PRINT STRING$(I3%,"-");:LOCATE I1%,I2%
2420 I6%=0:I7!=0:I8#=0:MID$(I6$,1,2)=CHR$(0)+CHR$(0):MID$(I7$,1,4)=I6$+I6$:MID$(I8$,1,8)=I7$+I7$:ID%=0:MID$(I0$,1,II%)=STRING$(II%,255):IA%=0:IF LEN(ID$)<=I3% THEN MID$(I0$,1)=ID$:ID%=0:GOTO 2670
2430 IZ$=" ":IF (ID%<I3%) AND (I4% AND 32) THEN IZ$=MID$(IM$(I5%),ID%+1,1):IF IZ$<>"#" AND IZ$<>"%" THEN I9$=IZ$:I9%=ASC(I9$):GOTO 2480
2440 I9$=INKEY$:IF I9$="" THEN 2690 ELSE IQ%=INSTR(I0$,CHR$(255))-1:IF LEN(I9$)=1 THEN I9%=ASC(I9$) ELSE I9%=ASC(RIGHT$(I9$,1))
2450 IF I9%=13 THEN 2520 ELSE IF I9%=27 AND (I4% AND 128) THEN 2430 ELSE IF I9%=27 THEN 2660 ELSE IF I9%=8 THEN 2600
2460 IF ASC(I9$)<>0 THEN 2480 ELSE IF I9%=71 THEN ID%=0:GOTO 2670 ELSE IF I9%=79 THEN ID%=IA%-1:GOTO 2670 ELSE IF I9%=75 THEN ID%=ID%-1:GOTO 2670 ELSE IF I9%=77 THEN ID%=ID%+1:GOTO 2670 ELSE IF I9%=82 AND IQ%<I3% THEN 2620
2470 IF I9%=83 AND ID%>-1 THEN 2630 ELSE IF I9%=116 THEN ID%=ID%+2:GOTO 2670 ELSE IF I9%=115 THEN ID%=ID%-2:GOTO 2670 ELSE IF FNIP%(84,93) THEN 2760 ELSE IF FNIP%(94,103) THEN GOSUB 2780:GOTO 2430 ELSE BEEP:GOTO 2440
2480 IF (I4% AND 32) AND ((IZ$="%" AND INSTR(IA$(1),I9$)>0) OR (IZ$="#" AND INSTR(IA$(2),I9$)>0) OR (IZ$<>"%" AND IZ$<>"#")) THEN 2500
2490 IF ((I4% AND 1) AND INSTR(IA$(1),CHR$(I9%))>0) OR ((I4% AND 2) AND INSTR(IA$(2),CHR$(I9%))>0) OR ((I4% AND 4) AND INSTR(IA$(I5%),CHR$(I9%))>0) OR ((I4% AND 8) AND INSTR(IC$(I5%),CHR$(I9%))>0) THEN 2500 ELSE BEEP:GOTO 2430
2500 IF IQ%=I3% AND ID%=I3% THEN BEEP:GOTO 2430 ELSE LOCATE I1%,I2%+ID%:PRINT CHR$(I9%);
2510 ID%=ID%+1:MID$(I0$,ID%,1)=I9$:IA%=INSTR(I0$,CHR$(255)):IQ%=IA%-1+(-1*(IA%-1=-1)):GOTO 2430
2520 IF ((I4% AND 64) AND IQ%=0) OR ((I4% AND 32) AND IQ%<>I3%) THEN 2410 ELSE IF IQ%=0 THEN 2660
2530 IK%=INSTR(IC$(I5%),"."+FNIE$+"."):IF (I4% AND 8) AND IK%<1 THEN 2410 ELSE IF I4% AND 8 THEN GOSUB 2640:GOTO 2660
2540 IF I4% AND 2 THEN 2550 ELSE 2660
2550 I8#=VAL(FNIE$):I8$=MKD$(I8#):IF IB#(I5%,1)=0 AND IB#(I5%,2)=0 THEN 2570
2560 IF I8#<IB#(I5%,1) OR I8#>IB#(I5%,2) THEN 2410
2570 IF I8#<1 AND I8#>-1 THEN I7!=I8#:I7$=MKS$(I8#)
2580 IF I8#<32767 AND I8#>-32765 THEN I6%=I8#:I6$=MKI$(I8#)
2590 GOTO 2660
2600 LOCATE I1%,I2%:ID%=ID%-1:IF ID%<0 THEN ID%=0
2610 MID$(I0$,ID%+1)=MID$(I0$,ID%+2,IA%-(ID%+1))+CHR$(255):GOTO 2670
2620 LOCATE I1%,I2%:MID$(I0$,ID%+1)=" "+MID$(I0$,ID%+1,IA%-ID%):GOTO 2670
2630 LOCATE I1%,I2%:MID$(I0$,ID%+1)=MID$(I0$,ID%+2,IA%-(ID%+1))+CHR$(255):GOTO 2670
2640 IL%=0:FOR IZ%=1 TO IK%:IF MID$(IC$(I5%),IZ%,1)="." THEN IL%=IL%+1
2650 NEXT IZ%:RETURN
2660 IA%=INSTR(I0$,CHR$(255)):IQ%=IA%-1+(-1*(IA%-1=-1)):LOCATE I1%,I2%:PRINT FNIE$+STRING$(I3%-IQ%,32);CHR$(0);:ID$="":ON ERROR GOTO 0:IF I%>0 AND I%<II% THEN ID$(I%)=FNIE$:RETURN ELSE RETURN
2670 IA%=INSTR(I0$,CHR$(255)):IQ%=IA%-1+(-1*(IA%-1=-1)):IF ID%>IA%-1 THEN ID%=IA%-1 ELSE IF ID%<0 THEN ID%=0
2680 LOCATE I1%,I2%:PRINT FNIE$+STRING$(I3%-IQ%,"-");:LOCATE I1%,I2%+ID%:GOTO 2430
2690 I6%(4)=I6%(4)+1:IF I6%(4)>3 AND I6%(4)<7 THEN IQ$=CHR$(I6%(7)):GOTO 2710 ELSE IF I6%(4)>9 THEN I6%(4)=0
2700 IF IA%-1<1 OR INSTR(I1$,"I") > 0 THEN IQ$="-" ELSE IQ$=MID$(I0$,ID%+1,1)
2710 LOCATE I1%,I2%+ID%:PRINT IQ$;:GOTO 2430
2720 LOCATE I1%,I2%:COLOR I6%(1),I6%(2):PRINT IO$(I5%);:I6%(1)=I6%(5):I6%(2)=I6%(6):COLOR I6%(1),I6%(2):LOCATE I1%,I2%:FOR IZ%=1 TO I3%*100:NEXT IZ%:GOSUB 2730:GOSUB 2740:ON ERROR GOTO 0:RETURN
2730 IF I4% AND 256 THEN I9$=INKEY$:IF I9$="" THEN 2730 ELSE RETURN ELSE RETURN
2740 IF I4% AND 512 THEN PRINT STRING$(LEN(IO$(I5%))," ");:RETURN ELSE RETURN
2750 REM   CHANGE NEXT LINE FOR ON KEY GOTO FEATURE
2760 ON I9%-83 GOTO 60,80,150,220,290,360,410,480,2440,2440,2440
2770 REM   CHANGE NEXT LINE FOR ON KEY GOSUB FEATURE
2780 ON I9%-93 GOSUB 2790,2790,2790,2790,2790,2790,2790,2790,2790,2790,2790
2790 RETURN
2800 REM   END OF PCINPUT 1.8 COPYRIGHT 1984 BY CARL R. STATON
2810 REM EDITTING TABLES
2820 IB#(1,1)=0:IB#(1,2)=0:IB#(2,1)=-0.5:IB#(2,2)=0.5:IB#(3,1)=1:IB#(3,2)=100
2830 IB#(4,1)=1:IB#(4,2)=999999.
2840 IC$(1)=".OH.MA.WI.AZ.DE.WA.AK.":IC$(2)=".1000.2000.5000.10000."
2850 IC$(3)=".Basic.CP/M.DOS.Fortran.":IC$(4)=".HELLO.GOOD-BYE.SALUTATIONS."
2860 IC$(5)=".all.none.first.last.done."
2870 IA$(4)="2468":IA$(5)="AaBbCcDdEeFfGg":IA$(6)="YN123":IA$(7)="aeiouy,"
2880 IA$(8)="12345\<>@#"
2890 IM$(1)="(###) ###-####":IM$(2)="###-##-####":IM$(3)="#AZ%%%%"
2900 IO$(1)="Please press the ENTER key"
2910 IO$(2)="This message is BLUE (UNDERLINED) and BLINKING.  Press ENTER. "
2920 IO$(3)="This message will DELAY about 3 seconds.                      "
2930 IO$(4)="This message will DELAY 3 seconds and ERASE itself.           "
2940 IO$(5)="This message is Green in color.                               "
2950 IO$(6)="This message is in REVERSE-IMAGE.                             "
2960 IO$(7)="This Demonstration is done.  Press ENTER to continue.         "
2961 IO$(8)="one moment please ...            "
2970 RETURN
10000 COLOR  7,0,0
10010 PRINT "╔══════════════════════════════════════════════════════════════════════════════╗";
10020 PRINT "║                                                                              ║";
10030 PRINT "║    ████████   ███████    ███    ███    ██    █████████   ██   ██   ████████  ║";
10040 PRINT "║    ██    ██   ██         ███    ██ █   ██    ██     ██   ██   ██      ██     ║";
10050 PRINT "║    ████████   ██         ███    ██  █  ██    █████████   ██   ██      ██     ║";
10060 PRINT "║    ██         ██         ███    ██   █ ██    ██          ██   ██      ██     ║";
10070 PRINT "║    ██         ███████    ███    ██    ███    ██          ███████      ██     ║";
10080 PRINT "║                                                                              ║";
10090 PRINT "║  ▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀  ║";
10100 PRINT "║                                    by                                        ║";
10110 PRINT "║                              Carl R. Staton                                  ║";
10120 PRINT "║                            17 Franklin Avenue                                ║";
10130 PRINT "║                             Shelby OH  44875                                 ║";
10140 PRINT "║                              (419) 347-3209                                  ║";
10150 PRINT "║                                                                              ║";
10160 PRINT "║  ▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀  ║";
10170 PRINT "║    ████████   ███████    ███    █████████    █████████   ███    ██           ║";
10180 PRINT "║    ██    ██   ██         ███    ██           ██          ██ █   ██           ║";
10190 PRINT "║    ████████   ██         ███    ██  ▄▄▄▄▄    ██████      ██  █  ██           ║";
10200 PRINT "║    ██         ██         ███    ██     ██    ██          ██   █ ██           ║";
10210 PRINT "║    ██         ███████    ███    █████████    █████████   ██    ███           ║";
10220 PRINT "║                                                                              ║";
10230 PRINT "╚══════════════════════════════════════════════════════════════════════════════╝";
10240 PRINT "                                                                               ";
10250 RETURN
10260 COLOR  7, 0, 0
10270 PRINT "▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ ║ » » »  A T T E N T I O N  « « « ║ ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓";
10280 PRINT "▓▓                    ╚═════════════════════════════════╝                     ▓▓";
10290 PRINT "▓▓                             BASIC PROGRAMMERS                              ▓▓";
10300 PRINT "▓▓                             ═════════════════                              ▓▓";
10310 PRINT "▓▓                                                                            ▓▓";
10320 PRINT "▓▓          PCINPUT & PCIGEN is FREE to everyone.  We sincerely hope          ▓▓";
10330 PRINT "▓▓                                                                            ▓▓";
10340 PRINT "▓▓          you will use this software to make your BASIC programming         ▓▓";
10350 PRINT "▓▓                                                                            ▓▓";
10360 PRINT "▓▓          more profitable, flexible and enjoyable.  Simply use the          ▓▓";
10370 PRINT "▓▓                                                                            ▓▓";
10380 PRINT "▓▓          COPY *.* command to copy the programs and files to your own       ▓▓";
10390 PRINT "▓▓                                                                            ▓▓";
10400 PRINT "▓▓          diskette.  If you like PCINPUT and/or PCIGEN, please send a       ▓▓";
10410 PRINT "▓▓                                                                            ▓▓";
10420 PRINT "▓▓          contribution and we will register your name and address.          ▓▓";
10430 PRINT "▓▓                                                                            ▓▓";
10440 PRINT "▓▓          All registered users may call for assistance and will be          ▓▓";
10450 PRINT "▓▓                                                                            ▓▓";
10460 PRINT "▓▓          sent the 40-page User's Manual and all future upgrades.           ▓▓";
10470 PRINT "▓▓                                                                            ▓▓";
10480 PRINT "▓▓                                                                            ▓▓";
10490 PRINT "▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓";
10500 PRINT "                                                                               ";
10510 RETURN
```

## PCIGEN.BAS

```bas
10 REM *******************************************************************
20 REM ****                                                           ****
30 REM ****              PCIGEN  - Skeleton Generator                 ****
40 REM ****                                                           ****
50 REM ****              COPYRIGHT 1984 CARL R. STATON                ****
60 REM ****                                                           ****
70 REM ****                                                           ****
80 REM *******************************************************************
90 CLS:CLEAR:KEY OFF:WIDTH 80:SCREEN 0:COLOR 7,0:LOCATE ,,,14,1:GOSUB 3460
100 KEY 1,"╔":KEY 2,"╗":KEY 3,"╚":KEY 4,"╝":KEY 5,"═":KEY 6,"║":KEY 7,"«"
110 KEY 8,"»":KEY 9,"▀":KEY 10,"▄":W$=STRING$(80,32)
120 II%=80:DIM IA$(30):IA$(1)="0123456789.- ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%&*()+=:;{}[]<>,/?'":IA$(2)="0123456789.-":IA$(3)="YN":I0$=STRING$(II%,255):I6$="  ":I7$="    ":I8$="        "
130 DEF FNIE$=LEFT$(I0$,IQ%):DEF FNIG%=IA%-1<1:DEF FNIP%(A%,B%)=(I9%=>A% AND I9%<=B%):DEF FNIU%=I9%=27:DIM IB#(30,2),IC$(30),IM$(30),IO$(30),ID$(80),I%(10),I6%(10):I6%(7)=8  '  ASCII CODE FOR CURSOR CHARACTER
140 DIM ST$(25),MN$(20):GOSUB 2050:Q$=CHR$(34)
144 I1$="24054020OwE":GOSUB 1540
145 GOSUB 3720:I1$="24050101OwBP":GOSUB 1540
146 GOSUB 2340:I1$="24050101OwBP":GOSUB 1540
150 FOR X=1 TO 20:MN$(X)=STRING$(30,32):NEXT X
160 FOR X=1 TO 25:ST$(X)=STRING$(80,32):NEXT X
180 GOSUB 2600
190 I1$="24010107Ow":GOSUB 1540
200 OPEN "SKELETON.MNU" FOR INPUT AS #1
210 FOR X=1 TO 20:LINE INPUT #1,MN$(X):NEXT X:CLOSE 1
220 CLS:COLOR 7,0:GOSUB 1350:I1$="23600108Ow":GOSUB 1540
230 I1$="24110105KwMD":GOSUB 1540:ON IL% GOTO 240,310,1050
240 X=0:I1$="23010115Ow":GOSUB 1540:I1$="24010113Ow":GOSUB 1540
250 X=X+1:IF X>20 THEN GOSUB 290:GOTO 220
260 X1%=12+X-(-10*(X>10)):X2%=((X>10)*-1)*41+6
270 I1$=RIGHT$(STR$(X1%),2)+RIGHT$(STR$(X2%),2)+"2001Aw":ID$=MN$(X):GOSUB 1540
280 IF FNIU% THEN X=20:GOTO 250 ELSE IF FNIG% THEN 250 ELSE MN$(X)=FNIE$:GOTO 250
290 OPEN "SKELETON.MNU" FOR OUTPUT AS #1
300 FOR X=1 TO 20:PRINT #1,MN$(X):NEXT X:CLOSE 1:RETURN
310 I1$="24010103Ow":GOSUB 1540:I1$="24700204NwMD":GOSUB 1540:S=I7!:Y=S
320 RS=((S-1)*25)+1:RE=RS+24:I1$="24010109Ow":GOSUB 1540
330 OPEN "R",1,"SKELETON.DAT",80:FIELD 1,80 AS A$
340 FOR X=RS TO RE
350  GET 1,X:MID$(ST$(X-RS+1),1)=A$
360 NEXT X:CLOSE 1:IM%=80
370 C1%=VAL(MID$(ST$(25),1,2)):C2%=VAL(MID$(ST$(25),3,2)):C3%=VAL(MID$(ST$(25),5,2))
380 CLS:GOSUB 2700:I1$="24010117Ow":GOSUB 1540
390 I1$="24600102KwMD":GOSUB 1540:ON IL% GOTO 400,560,840,940,950,960,480,1000
400 CLS:C=1:GOSUB 1060:KEY ON
410 I1$="24010105Ow":GOSUB 1540
420 I1$="24700202NwM":GOSUB 1540:IF FNIU% THEN 470 ELSE F=I7!
430 I1$="24010106Ow":GOSUB 1540
440 I1$="24700203NwM":GOSUB 1540:IF FNIU% THEN 470 ELSE S=I7!
450 KEY F,CHR$(168+S)
460 GOTO 410
470 KEY OFF:GOTO 380
480 CLS:COLOR 7,0,0:GOSUB 2950
490 ID$=RIGHT$(STR$(C1%+1),2):I1$="14500206NwM":GOSUB 1540:C1%=I6%-1:IF FNIU% THEN 380
500 ID$=RIGHT$(STR$(C2%+1),2):I1$="15500207NwM":GOSUB 1540:C2%=I6%-1:IF FNIU% THEN 380 ELSE IF C1%=C2% THEN I1$="24010118Ow":GOSUB 1540:GOTO 490
510 ID$=RIGHT$(STR$(C3%+1),2):I1$="16500206NwM":GOSUB 1540:C3%=I6%-1:IF FNIU% THEN 380
520 MID$(ST$(25),1)=RIGHT$(STR$(C1%),2)+RIGHT$(STR$(C2%),2)+RIGHT$(STR$(C3%),2)
530 COLOR C1%,C2%,C3%:CLS:FOR X=1 TO 23:PRINT ST$(X);:NEXT X:PRINT LEFT$(ST$(X),IM%-1);
540 I1$="25010119OBwP":GOSUB 1540:COLOR 7,0,0:GOTO 480
550 '
560 CLS:GOSUB 3200:I1$="24010101OwBP":GOSUB 1540:GOSUB 820:GOTO 590
570 C1%=VAL(MID$(ST$(25),1,2)):C2%=VAL(MID$(ST$(25),3,2)):C3%=VAL(MID$(ST$(25),5,2)):COLOR C1%,C2%,C3%:CLS
580 FOR X=1 TO 23:LOCATE X,1:PRINT LEFT$(ST$(X),IM%);:NEXT X:PRINT LEFT$(ST$(X),IM%-1);
590 CR%=1:CC%=1:IF IO%>0 THEN KEY OFF ELSE KEY ON
600 I2%=0:I$=INKEY$:IF I$="" THEN 730 ELSE IF I$=CHR$(27) THEN KEY OFF:COLOR 7,0:GOTO 380 ELSE IF I$=CHR$(13) THEN 640 ELSE IF I$=CHR$(34) THEN 730
610 I%=ASC(I$):IF LEN(I$)=2 THEN I2%=ASC(RIGHT$(I$,1))
620 IF I2%=31 THEN GOSUB 770:GOTO 600 ELSE IF I2%=32 THEN GOSUB 780:GOTO 600 ELSE IF I2%=19 THEN GOSUB 790:GOTO 600 ELSE IF I2%=23 THEN GOSUB 800:GOTO 600 ELSE IF I2%=18 THEN GOSUB 810:GOTO 600
630 IF I%<>0 THEN MID$(ST$(CR%),CC%,1)=I$:I2%=77:LOCATE CR%,CC%:PRINT I$;:GOTO 670
640 LOCATE CR%,CC%:PRINT MID$(ST$(CR%),CC%,1);:IF I$=CHR$(13) THEN I2%=80:CC%=1
650 IF I2%=71 THEN CR%=1:CC%=1:GOTO 730
660 CR%=CR%+(1*(I2%=72))+(-1*(I2%=80))
670 CC%=CC%+(1*(I2%=75))+(-1*(I2%=77))
680 IF CC%<1 THEN CR%=CR%-1:CC%=IM%
690 IF (CC%>IM%) THEN CR%=CR%+1:CC%=1 ELSE IF (CC%>IM%-1 AND CR%=24) THEN CC%=IM%-1
700 IF CR%>24 THEN CR%=1 ELSE IF CR%<1 THEN CR%=24
710 IF (CC%>IM%-1 AND CR%=24) THEN CC%=IM%-1
720 IF I%<>0 THEN 740
730 CD%=CD%+1:IF CD%<3 OR CD%>6 THEN IQ$=CHR$(8) ELSE IQ$=MID$(ST$(CR%),CC%,1)
740 LOCATE CR%,CC%:PRINT IQ$;:IF CD%>10 THEN CD%=0
750 IF IO%>0 THEN KEY OFF:LOCATE 25,1:PRINT USING "CURSOR ROW: ##  CURSOR COLUMN: ##       Skeleton Name: \                   \";CR%;CC%;MN$(Y);:LOCATE CR%,CC%
760 GOTO 600
770 MID$(W$,1)=STRING$(IM%," "):MID$(W$,1)=ST$(CR%):RETURN
780 FOR X%=CR% TO 23:MID$(ST$(X%),1)=ST$(X%+1):NEXT X%:MID$(ST$(24),1)=STRING$(IM%-1,32):GOSUB 820:RETURN
790 IF CR%=24 THEN MID$(ST$(CR%),1)=LEFT$(W$,IM%-1):GOSUB 820:RETURN ELSE MID$(ST$(CR%),1)=W$:GOSUB 820:RETURN
800 IF CR%=24 THEN MID$(ST$(CR%),1)=STRING$(IM%,32):GOSUB 820:RETURN ELSE FOR X%=24 TO CR% STEP -1:MID$(ST$(X%),1)=ST$(X%-1):NEXT X%:MID$(ST$(CR%),1)=STRING$(IM%,32):GOSUB 820:RETURN
810 MID$(ST$(CR%),1)=STRING$(IM%," "):GOSUB 820:RETURN
820 C1%=VAL(MID$(ST$(25),1,2)):C2%=VAL(MID$(ST$(25),3,2)):C3%=VAL(MID$(ST$(25),5,2)):COLOR C1%,C2%,C3%:CLS
830 FOR X=1 TO 23:LOCATE X,1:PRINT LEFT$(ST$(X),IM%);:NEXT X:PRINT LEFT$(ST$(X),IM%-1);:RETURN
840 I1$="23010110Ow":GOSUB 1540
850 OPEN "SKELETON.BAS" FOR OUTPUT AS #1
860 I1$="24010111Ow":GOSUB 1540
870 I1$="24650505NwM":ID$="10000":GOSUB 1540:SL=I7!
880 ST$(24)=LEFT$(ST$(24),79)
890 PRINT #1,MID$(STR$(SL),2)+"COLOR "+MID$(ST$(25),1,2)+","+MID$(ST$(25),3,2)+","+MID$(ST$(25),5,2)
900 FOR X=1 TO 24
910 LOCATE 23,58:PRINT "Writing: ";X;
920 PRINT #1,MID$(STR$(X+SL),2)+"PRINT "+Q$+ST$(X)+Q$+";"
930 NEXT X:PRINT #1,MID$(STR$(X+SL),2)+"RETURN":CLOSE:GOTO 380
940 IO%=1:GOTO 380
950 IO%=0:GOTO 380
960 I1$="24010114Ow":GOSUB 1540:ST$(24)=LEFT$(ST$(24),IM%-1)
970 FOR X=1 TO 24:MID$(ST$(X),1)=STRING$(80," "):NEXT X
980 ST$(24)=LEFT$(ST$(24),IM%-1)
990 MID$(ST$(25),1)=" 70000":GOTO 380
1000 I1$="24010112Ow":GOSUB 1540
1010 OPEN "R",1,"SKELETON.DAT",80:FIELD 1,80 AS A$
1020 FOR X=RS TO RE
1030  GET 1,X:LSET A$=ST$(X-RS+1):PUT 1,X
1040 NEXT X:CLOSE 1:GOTO 220
1050 CLOSE:CLS:PRINT "Skeleton Generator Program Ended":LOCATE ,,,1,9:END
1060 PRINT"╔═══════════════════════════════════════════════════════════════╗"
1070 PRINT"║    SPECIAL CHARACTER ASSIGNMENTS                              ║"
1080 PRINT"║                                                               ║"
1090 PRINT"║        Each of the 10 FUNCTION KEYs may be assigned to type   ║"
1100 PRINT"║    a Special character that can not normally be typed from    ║"
1110 PRINT"║    the keyboard.                                              ║"
1120 PRINT"║        To assign a Special Character, select the Function     ║"
1130 PRINT"║    Key and then select 1 of the SPECIAL CHARACTERS. Line 25   ║"
1140 PRINT"║    shows what character has been assigned to which Function   ║"
1150 PRINT"║    key.  Press ESCAPE to quit.                                ║"
1160 PRINT"║                                                               ║"
1170 PRINT"╚═══════════════════════════════════════════════════════════════╝"
1180 PRINT
1190 PRINT"   1:    10:    19:    28:    37:    46:    55:    64:    73:   "
1200 PRINT"   2:    11:    20:    29:    38:    47:    56:    65:    74:   "
1210 PRINT"   3:    12:    21:    30:    39:    48:    57:    66:    75:   "
1220 PRINT"   4:    13:    22:    31:    40:    49:    58:    67:    76:   "
1230 PRINT"   5:    14:    23:    32:    41:    50:    59:    68:    77:   "
1240 PRINT"   6:    15:    24:    33:    42:    51:    60:    69:    78:   "
1250 PRINT"   7:    16:    25:    34:    43:    52:    61:    70:    79:   "
1260 PRINT"   8:    17:    26:    35:    44:    53:    62:    71:    80:   "
1270 PRINT"   9:    18:    27:    36:    45:    54:    63:    72:    81:   "
1280 FOR X=1 TO 9
1290 COLOR 7+(8*ABS(C=1)),1:C=C*-1
1300  FOR X1=1 TO 9
1310   LOCATE 13+X,X1*7:PRINT CHR$(168+((X1-1)*9)+X);
1320  NEXT X1
1330 NEXT X
1340 RETURN
1350 PRINT"╔═══════════════════════════════════════════════════════════════╗"
1360 PRINT"║    Menu of SKELETONS                                          ║"
1370 PRINT"║                                                               ║"
1380 PRINT"║    There are 20 Skeletons listed below.  You may:             ║"
1390 PRINT"║                                                               ║"
1400 PRINT"║    1. Change the Skeleton Names (type 1 and press ENTER)      ║"
1410 PRINT"║                                                               ║"
1420 PRINT"║    2. Select a Skeleton to be processed (type 2 and press     ║"
1430 PRINT"║       ENTER).                                                 ║"
1440 PRINT"║                                                               ║"
1450 PRINT"╚═══════════════════════════════════════════════════════════════╝"
1460 PRINT
1470 FOR X=1 TO 10
1480   PRINT USING " ##  \                            \      ";X,MN$(X);
1490   PRINT USING " ##  \                            \";X+10,MN$(X+10)
1500 NEXT X
1510 RETURN
1520 REM PCINPUT (IBM PC VERSION 1.8) COPYRIGHT 1983 BY CARL R. STATON
1530 REM (419) 347-3209          17 FRANKLIN AVENUE   SHELBY  OH  44875
1540 ON ERROR GOTO 0:IF LEN(ID$)<1 AND I%>0 AND I%<II% AND INSTR(I1$,"O")<1 THEN ID$=ID$(I%)
1550 I1%=VAL(LEFT$(I1$,2)):I2%=VAL(MID$(I1$,3,2)):I3%=VAL(MID$(I1$,5,2)):I5%=VAL(MID$(I1$,7,2))
1560 I4%=((INSTR(I1$,"A")>0)*-1) + ((INSTR(I1$,"N")>0)*-2) + ((INSTR(I1$,"S")>0)*-4) + ((INSTR(I1$,"K")>0)*-8) + ((INSTR(I1$,"F")>0)*-32) + ((INSTR(I1$,"M")>0)*-64) + ((INSTR(I1$,"D")>0)*-128) + ((INSTR(I1$,"O")>0)*-16)
1570 I4%=I4% + ((INSTR(I1$,"P")>0)*-256) + ((INSTR(I1$,"E")>0)*-512):I6%(5)=I6%(1):I6%(6)=I6%(2):I6%(1)=0:I6%(2)=0:I6%(3)=0:I6%(4)=0:I6%(2)=((INSTR(I1$,"R")>0)*-7)
1580 I6%(3)=(-1*(INSTR(I1$,"H")>0)) + (-1*(INSTR(I1$,"R")>0)) + (-1*(INSTR(I1$,"I")>0))
1590 I6%(4)=(-1*(INSTR(I1$,"U")>0)) + (-1*(INSTR(I1$,"b")>0)) + (-2*(INSTR(I1$,"g")>0)) + (-4*(INSTR(I1$,"r")>0)) + (-7*(INSTR(I1$,"w")>0))
1600 IF ((-1*(I4% AND 1)) + (-1*(I4% AND 2)) + (-1*(I4% AND 4)) + (-1*(I4% AND 8)) + (-1*(I4% AND 16)) + (-1*(I4% AND 32))) > 1 OR (I6%(3)<>0 AND I6%(3)<>1) OR INSTR(CHR$(0)+CHR$(1)+CHR$(2)+CHR$(4)+CHR$(7)+CHR$(8),CHR$(I6%(4)))=0 THEN 1620
1610 IF I1%>0 AND I1%<26 AND I2%>0 AND I2%<II%+1 AND I3%>0 AND I3%<II%+1 AND I5%>0 AND I5%<31 THEN IF I4% AND 32 THEN I3%=LEN(IM$(I5%)):GOTO 1630 ELSE 1630
1620 IF ERL=1920 THEN RESUME 1670 ELSE CLS:PRINT "PCINPUT ERROR: ROW="I1%"COLUMN="I2%"LENGTH="I3%"ATTRIBUTE="RIGHT$(I1$,LEN(I1$)-6)"  EDIT="I5%"  LINE="ERL:STOP
1630 REM
1640 I6%(1)=I6%(4) + ((INSTR(I1$,"B")>0)*-16) + ((INSTR(I1$,"H")>0)*-8):IF I4% AND 16 THEN 1960
1650 COLOR I6%(1),I6%(2):LOCATE I1%,I2%:PRINT STRING$(I3%,"-");:LOCATE I1%,I2%
1660 I6%=0:I7!=0:I8#=0:MID$(I6$,1,2)=CHR$(0)+CHR$(0):MID$(I7$,1,4)=I6$+I6$:MID$(I8$,1,8)=I7$+I7$:ID%=0:MID$(I0$,1,II%)=STRING$(II%,255):IA%=0:IF LEN(ID$)<=I3% AND LEN(ID$)>0 THEN MID$(I0$,1)=ID$:ID%=0:GOTO 1910
1670 IZ$=" ":IF (ID%<I3%) AND (I4% AND 32) THEN IZ$=MID$(IM$(I5%),ID%+1,1):IF IZ$<>"#" AND IZ$<>"%" THEN I9$=IZ$:I9%=ASC(I9$):GOTO 1720
1680 I9$=INKEY$:IF I9$="" THEN 1930 ELSE IQ%=INSTR(I0$,CHR$(255))-1:IF LEN(I9$)=1 THEN I9%=ASC(I9$) ELSE I9%=ASC(RIGHT$(I9$,1))
1690 IF I9%=13 THEN 1760 ELSE IF I9%=27 AND (I4% AND 128) THEN 1670 ELSE IF I9%=27 THEN 1900 ELSE IF I9%=8 THEN 1840
1700 IF ASC(I9$)<>0 THEN 1720 ELSE IF I9%=71 THEN ID%=0:GOTO 1910 ELSE IF I9%=79 THEN ID%=IA%-1:GOTO 1910 ELSE IF I9%=75 THEN ID%=ID%-1:GOTO 1910 ELSE IF I9%=77 THEN ID%=ID%+1:GOTO 1910 ELSE IF I9%=82 AND IQ%<I3% THEN 1860
1710 IF I9%=83 AND ID%>-1 THEN 1870 ELSE IF I9%=116 THEN ID%=ID%+2:GOTO 1910 ELSE IF I9%=115 THEN ID%=ID%-2:GOTO 1910 ELSE IF FNIP%(84,93) THEN 2000 ELSE IF FNIP%(94,103) THEN GOSUB 2020:GOTO 1670 ELSE BEEP:GOTO 1680
1720 IF (I4% AND 32) AND ((IZ$="%" AND INSTR(IA$(1),I9$)>0) OR (IZ$="#" AND INSTR(IA$(2),I9$)>0) OR (IZ$<>"%" AND IZ$<>"#")) THEN 1740
1730 IF ((I4% AND 1) AND INSTR(IA$(1),CHR$(I9%))>0) OR ((I4% AND 2) AND INSTR(IA$(2),CHR$(I9%))>0) OR ((I4% AND 4) AND INSTR(IA$(I5%),CHR$(I9%))>0) OR ((I4% AND 8) AND INSTR(IC$(I5%),CHR$(I9%))>0) THEN 1740 ELSE BEEP:GOTO 1670
1740 IF IQ%=I3% AND ID%=I3% THEN BEEP:GOTO 1670 ELSE LOCATE I1%,I2%+ID%:PRINT CHR$(I9%);
1750 ID%=ID%+1:MID$(I0$,ID%,1)=I9$:IA%=INSTR(I0$,CHR$(255)):IQ%=IA%-1+(-1*(IA%-1=-1)):GOTO 1670
1760 IF ((I4% AND 64) AND IQ%=0) OR ((I4% AND 32) AND IQ%<>I3%) THEN 1650 ELSE IF IQ%=0 THEN 1900
1770 IK%=INSTR(IC$(I5%),"."+FNIE$+"."):IF (I4% AND 8) AND IK%<1 THEN 1650 ELSE IF I4% AND 8 THEN GOSUB 1880:GOTO 1900
1780 IF I4% AND 2 THEN 1790 ELSE 1900
1790 I8#=VAL(FNIE$):I8$=MKD$(I8#):IF IB#(I5%,1)=0 AND IB#(I5%,2)=0 THEN 1810
1800 IF I8#<IB#(I5%,1) OR I8#>IB#(I5%,2) THEN 1650
1810 IF I8#<1 AND I8#>-1 THEN I7!=I8#:I7$=MKS$(I8#)
1820 IF I8#<32767 AND I8#>-32765 THEN I6%=I8#:I6$=MKI$(I8#)
1830 GOTO 1900
1840 LOCATE I1%,I2%:ID%=ID%-1:IF ID%<0 THEN ID%=0
1850 MID$(I0$,ID%+1)=MID$(I0$,ID%+2,IA%-(ID%+1))+CHR$(255):GOTO 1910
1860 LOCATE I1%,I2%:MID$(I0$,ID%+1)=" "+MID$(I0$,ID%+1,IA%-ID%):GOTO 1910
1870 LOCATE I1%,I2%:MID$(I0$,ID%+1)=MID$(I0$,ID%+2,IA%-(ID%+1))+CHR$(255):GOTO 1910
1880 IL%=0:FOR IZ%=1 TO IK%:IF MID$(IC$(I5%),IZ%,1)="." THEN IL%=IL%+1
1890 NEXT IZ%:RETURN
1900 IA%=INSTR(I0$,CHR$(255)):IQ%=IA%-1+(-1*(IA%-1=-1)):LOCATE I1%,I2%:PRINT FNIE$+STRING$(I3%-IQ%,32);CHR$(0);:ON ERROR GOTO 0:ID$="":IF I%>0 AND I%<II% THEN ID$(I%)=FNIE$:RETURN ELSE RETURN
1910 IA%=INSTR(I0$,CHR$(255)):IQ%=IA%-1+(-1*(IA%-1=-1)):IF ID%>IA%-1 THEN ID%=IA%-1 ELSE IF ID%<0 THEN ID%=0
1920 LOCATE I1%,I2%:PRINT FNIE$+STRING$(I3%-IQ%,"-");:LOCATE I1%,I2%+ID%:GOTO 1670
1930 I6%(4)=I6%(4)+1:IF I6%(4)>3 AND I6%(4)<7 THEN IQ$=CHR$(I6%(7)):GOTO 1950 ELSE IF I6%(4)>9 THEN I6%(4)=0
1940 IF IA%-1<1 OR INSTR(I1$,"I") > 0 THEN IQ$="-" ELSE IQ$=MID$(I0$,ID%+1,1)
1950 LOCATE I1%,I2%+ID%:PRINT IQ$;:GOTO 1670
1960 LOCATE I1%,I2%:COLOR I6%(1),I6%(2):PRINT IO$(I5%);:I6%(1)=I6%(5):I6%(2)=I6%(6):COLOR I6%(1),I6%(2):LOCATE I1%,I2%:FOR IZ%=1 TO I3%*100:NEXT IZ%:GOSUB 1970:GOSUB 1980:ON ERROR GOTO 0:RETURN
1970 IF I4% AND 256 THEN I9$=INKEY$:IF I9$="" THEN 1970 ELSE RETURN ELSE RETURN
1980 IF I4% AND 512 THEN PRINT STRING$(LEN(IO$(I5%))," ");:RETURN ELSE RETURN
1990 REM   ON KEY GOTO ENTRIES GO HERE
2000 ON I9%-83 GOTO 1680,1680,1680,1680,1680,1680,1680,1680,1680,1680,1680
2010 REM   ON KEY GOSUB ENTRIES GO HERE
2020 ON I9%-93 GOSUB 2030,2030,2030,2030,2030,2030,2030,2030,2030,2030,2030
2030 RETURN
2040 REM   END OF PCINPUT 1.8 COPYRIGHT 1984 BY CARL R. STATON
2050 REM EDITTING TABLES
2060 REM   RANGE CHECK ENTRIES GO HERE
2070 IB#(1,1)=0:IB#(1,2)=0:IB#(2,1)=1:IB#(2,2)=10:IB#(3,1)=1:IB#(3,2)=81
2080 IB#(4,1)=1:IB#(4,2)=20:IB#(5,1)=2:IB#(5,2)=64400.
2090 IB#(6,1)=1:IB#(6,2)=16:IB#(7,1)=1:IB#(7,2)=8
2100 IC$(1)=".Y.N.":IC$(2)=".1.2.3.4.5.6.7.8.":IC$(5)=".1.2.3."
2110 IC$(3)=".1000.2000.5000.7000.10000.":IC$(4)=".YES.NO.MAYBE."
2120 IA$(4)="YN":IA$(5)="ABCDE":IA$(6)="12346890":IA$(7)="abcghixz"
2130 IM$(1)="(###) ###-####":IM$(2)="###-##-####":IM$(3)="SA###-%#%-###"
2140 IO$(1)="Please press the ENTER key"
2150 IO$(2)="Type 1, 2, 3 or 4 and press ENTER                             "
2160 IO$(3)="Type the 2-digit number of the SKELETON you want to see:      "
2170 IO$(4)="Loading skeleton ...                                          "
2180 IO$(5)="Which FUNCTION KEY do you want to assign? (01-10)             "
2190 IO$(6)="Which SPECIAL CHARACTER do you want assigned? (01-81)         "
2200 IO$(7)="Reading Skeleton Menu ...                                     "
2210 IO$(8)="Function:   1-Change Skeleton Names  2-Select Skeleton  3-Exit"
2220 IO$(9)="Reading Skeleton from disk ...                                "
2230 IO$(10)="Creating BASIC Program Lines ...                              "
2240 IO$(11)="What is the starting Program Line Number ? (2-64400)          "
2250 IO$(12)="Saving Skeleton to disk ...                                   "
2260 IO$(13)="unchanged, just press ENTER.  Press ESCAPE to quit.           "
2270 IO$(14)="Filling Skeleton with Blanks ...                              "
2280 IO$(15)="To change Name, type new name and press ENTER.  To leave Name "
2290 IO$(16)="Initializing Files ...                                        "
2300 IO$(17)="Type your selection and press ENTER                           "
2310 IO$(18)="Foreground and Background Colors can not be the SAME!         "
2320 IO$(19)="Your Skeleton with Color options.  Please press ENTER.        "
2321 IO$(20)="one moment please ...                          "
2330 RETURN
2340 COLOR  7, 0, 0
2341 PRINT "▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓";
2350 PRINT "▓▓                                                                            ▓▓";
2360 PRINT "▓▓                                                                            ▓▓";
2370 PRINT "▓▓                          ╔═════════════════════╗                           ▓▓";
2380 PRINT "▓▓                          ║  P C I N P U T      ║                           ▓▓";
2390 PRINT "▓▓                          ║  S K E L E T O N    ║                           ▓▓";
2400 PRINT "▓▓                          ║  G E N E R A T O R  ║                           ▓▓";
2410 PRINT "▓▓                          ╚═════════════════════╝                           ▓▓";
2420 PRINT "▓▓                                                                            ▓▓";
2430 PRINT "▓▓          This utility allows BASIC Programmers to Design and Change        ▓▓";
2440 PRINT "▓▓                                                                            ▓▓";
2450 PRINT "▓▓          SKELETON Screens in a Fast, Easy and Flexible way.  Created       ▓▓";
2460 PRINT "▓▓                                                                            ▓▓";
2470 PRINT "▓▓          screens are transformed into actual BASIC program STATEMENTS      ▓▓";
2480 PRINT "▓▓                                                                            ▓▓";
2490 PRINT "▓▓          that are MERGED into your BASIC program (the screen you are       ▓▓";
2500 PRINT "▓▓                                                                            ▓▓";
2510 PRINT "▓▓          looking at now was created using this utility).                   ▓▓";
2520 PRINT "▓▓                                                                            ▓▓";
2530 PRINT "▓▓                                                                            ▓▓";
2540 PRINT "▓▓                                                                            ▓▓";
2550 PRINT "▓▓                                                                            ▓▓";
2560 PRINT "▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓";
2570 PRINT "                                                                               ";
2580 RETURN
2590 CLOSE:END
2600 ON ERROR GOTO 2620:OPEN "SKELETON.MNU" FOR INPUT AS #1:CLOSE
2610 OPEN "SKELETON.DAT" FOR INPUT AS #1:CLOSE:GOTO 2690
2620 RESUME 2630
2630 ON ERROR GOTO 0:I1$="24010116Ow":GOSUB 1540
2640 OPEN "O",1,"SKELETON.MNU":FOR X=1 TO 20:PRINT #1,"MENU ENTRY "+STR$(X):NEXT X:CLOSE
2650 OPEN "R",1,"SKELETON.DAT",80:FIELD 1,80 AS A$
2660 FOR X=1 TO (25*20)
2670  LOCATE 10,1:PRINT X;:LSET A$=STRING$(80," "):PUT 1,X
2680 NEXT X:CLOSE:RETURN
2690 RETURN
2700 PRINT "╔══════════════════════════════════════════════════════════════════════════════╗";
2710 PRINT "║                                                                              ║";
2720 PRINT "║           ╔════════════════════════════════════════════════════╗             ║";
2730 PRINT "║           ║       Change Skeleton - Menu of Functions          ║             ║";
2740 PRINT "║           ╚════════════════════════════════════════════════════╝             ║";
2750 PRINT "║                                                                              ║";
2760 PRINT "║               1.  Change Function Key values                                 ║";
2770 PRINT "║                                                                              ║";
2780 PRINT "║               2.  Design/Change the Skeleton                                 ║";
2790 PRINT "║                                                                              ║";
2800 PRINT "║               3.  Create BASIC program lines (creates file: SKELETON.BAS)    ║";
2810 PRINT "║                                                                              ║";
2820 PRINT "║               4.  Turn on Cursor Position Display                            ║";
2830 PRINT "║                                                                              ║";
2840 PRINT "║               5.  Turn on Function Key Display                               ║";
2850 PRINT "║                                                                              ║";
2860 PRINT "║               6.  Fill Skeleton with Blanks                                  ║";
2870 PRINT "║                                                                              ║";
2880 PRINT "║               7.  Change Skeleton Colors                                     ║";
2890 PRINT "║                                                                              ║";
2900 PRINT "║               8.  Return to Menu of Skeletons                                ║";
2910 PRINT "╚══════════════════════════════════════════════════════════════════════════════╝";
2920 PRINT "                                                                                ";
2930 PRINT "                                                                               ";
2940 RETURN
2950 PRINT "╔══════════════════════════╗  ╔═════════════════════╗  ╔═══════════════════════╗";
2960 PRINT "║     Foreground Colors    ║  ║  Background Colors  ║  ║     Border Colors     ║";
2970 PRINT "║     «««««««« »»»»»»»»    ║  ║  «««««««« »»»»»»»»  ║  ║     «««««« »»»»»»     ║";
2980 PRINT "║  1. Black                ║  ║  1. Black           ║  ║  1. Black             ║";
2990 PRINT "║  2. Blue                 ║  ║  2. Blue            ║  ║  2. Blue              ║";
3000 PRINT "║  3. Green                ║  ║  3. Green           ║  ║  3. Green             ║";
3010 PRINT "║  4. Cyan                 ║  ║  4. Cyan            ║  ║  4. Cyan              ║";
3020 PRINT "║  5. Red                  ║  ║  5. Red             ║  ║  5. Red               ║";
3030 PRINT "║  6. Magenta              ║  ║  6. Magenta         ║  ║  6. Magenta           ║";
3040 PRINT "║  7. Brown                ║  ║  7. Brown           ║  ║  7. Brown             ║";
3050 PRINT "║  8. Normal White         ║  ║  8. Normal White    ║  ║  8. Normal White      ║";
3060 PRINT "║  9. Gray                 ║  ╚═════════════════════╝  ║  9. Gray              ║";
3070 PRINT "║ 10. Light Blue           ║                           ║ 10. Light Blue        ║";
3080 PRINT "║ 11. Light Green          ║  Select Foreground:       ║ 11. Light Green       ║";
3090 PRINT "║ 12. Light Cyan           ║  Select Background:       ║ 12. Light Cyan        ║";
3100 PRINT "║ 13. Light Red            ║  Select Border    :       ║ 13. Light Red         ║";
3110 PRINT "║ 14. Light Magenta        ║                           ║ 14. Light Magenta     ║";
3120 PRINT "║ 15. Yellow               ║                           ║ 15. Yellow            ║";
3130 PRINT "║ 16. Highlighted White    ║  Press ESCAPE to Quit     ║ 16. Highlighted White ║";
3140 PRINT "╚══════════════════════════╝                           ╚═══════════════════════╝";
3150 PRINT "                                                                                ";
3160 PRINT "Note:  Most Colors (other than White) show as White on Monochrome Monitors,     ";
3170 PRINT "       except BLUE, which will show as UNDERLINED WHITE.                        ";
3180 PRINT "                                                                               ";
3190 RETURN
3200 COLOR  7, 0, 0
3210 PRINT "                                                                                ";
3220 PRINT "╔═════════╗  1.  Use CURSOR CONTROL Keys on numeric keypad to move cursor       ";
3230 PRINT "║ SOME    ║      to any ROW and/or COLUMN (except Row 24, Column 80).           ";
3240 PRINT "║         ║                                                                     ";
3250 PRINT "║ SPECIAL ║  2.  Use ENTER key to position cursor at Column 1 of NEXT ROW.      ";
3260 PRINT "║         ║                                                                     ";
3270 PRINT "║ THINGS  ║  3.  DOUBLE QUOTE character can not be typed.                       ";
3280 PRINT "║         ║                                                                     ";
3290 PRINT "║ YOU     ║  4.  Press the ESCAPE key when you want to Quit typing and          ";
3300 PRINT "║         ║      return to the Menu of Functions.                               ";
3310 PRINT "║ NEED    ║                                                                     ";
3320 PRINT "║         ║  5.  Press ALT & S to SAVE line that cursor is currently on.        ";
3330 PRINT "║ TO      ║                                                                     ";
3340 PRINT "║         ║  6.  Press ALT & D to DELETE line that cursor is currently on.      ";
3350 PRINT "║ KNOW !  ║                                                                     ";
3360 PRINT "║         ║  7.  Press ALT & R to REPLACE line that cursor is currently on,     ";
3370 PRINT "║═════════║      with the line previously Saved (with ALT & S).                 ";
3380 PRINT "║ Press   ║                                                                     ";
3390 PRINT "║ ENTER   ║  8.  Press ALT & I to INSERT a Blank line IN FRONT of line that     ";
3400 PRINT "║ to      ║      cursor is currently on.                                        ";
3410 PRINT "║ Begin   ║                                                                     ";
3420 PRINT "║ ! ! ! ! ║  9.  Press ALT & E to ERASE line that cursor is currently on.       ";
3430 PRINT "╚═════════╝                                                                     ";
3440 PRINT "                                                                               ";
3450 RETURN
3460 COLOR  7,0,0
3470 PRINT "╔══════════════════════════════════════════════════════════════════════════════╗";
3480 PRINT "║                                                                              ║";
3490 PRINT "║    ████████   ███████    ███    ███    ██    █████████   ██   ██   ████████  ║";
3500 PRINT "║    ██    ██   ██         ███    ██ █   ██    ██     ██   ██   ██      ██     ║";
3510 PRINT "║    ████████   ██         ███    ██  █  ██    █████████   ██   ██      ██     ║";
3520 PRINT "║    ██         ██         ███    ██   █ ██    ██          ██   ██      ██     ║";
3530 PRINT "║    ██         ███████    ███    ██    ███    ██          ███████      ██     ║";
3540 PRINT "║                                                                              ║";
3550 PRINT "║  ▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀  ║";
3560 PRINT "║                                    by                                        ║";
3570 PRINT "║                              Carl R. Staton                                  ║";
3580 PRINT "║                            17 Franklin Avenue                                ║";
3590 PRINT "║                             Shelby OH  44875                                 ║";
3600 PRINT "║                              (419) 347-3209                                  ║";
3610 PRINT "║                                                                              ║";
3620 PRINT "║  ▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀  ║";
3630 PRINT "║    ████████   ███████    ███    █████████    █████████   ███    ██           ║";
3640 PRINT "║    ██    ██   ██         ███    ██           ██          ██ █   ██           ║";
3650 PRINT "║    ████████   ██         ███    ██  ▄▄▄▄▄    ██████      ██  █  ██           ║";
3660 PRINT "║    ██         ██         ███    ██     ██    ██          ██   █ ██           ║";
3670 PRINT "║    ██         ███████    ███    █████████    █████████   ██    ███           ║";
3680 PRINT "║                                                                              ║";
3690 PRINT "╚══════════════════════════════════════════════════════════════════════════════╝";
3700 PRINT "                                                                               ";
3710 RETURN
3720 COLOR  7, 0, 0
3730 PRINT "▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ ║ » » »  A T T E N T I O N  « « « ║ ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓";
3740 PRINT "▓▓                    ╚═════════════════════════════════╝                     ▓▓";
3750 PRINT "▓▓                             BASIC PROGRAMMERS                              ▓▓";
3760 PRINT "▓▓                             ═════════════════                              ▓▓";
3770 PRINT "▓▓                                                                            ▓▓";
3780 PRINT "▓▓          PCINPUT & PCIGEN is FREE to everyone.  We sincerely hope          ▓▓";
3790 PRINT "▓▓                                                                            ▓▓";
3800 PRINT "▓▓          you will use this software to make your BASIC programming         ▓▓";
3810 PRINT "▓▓                                                                            ▓▓";
3820 PRINT "▓▓          more profitable, flexible and enjoyable.  Simply use the          ▓▓";
3830 PRINT "▓▓                                                                            ▓▓";
3840 PRINT "▓▓          COPY *.* command to copy the programs and files to your own       ▓▓";
3850 PRINT "▓▓                                                                            ▓▓";
3860 PRINT "▓▓          diskette.  If you like PCINPUT and/or PCIGEN, please send a       ▓▓";
3870 PRINT "▓▓                                                                            ▓▓";
3880 PRINT "▓▓          contribution and we will register your name and address.          ▓▓";
3890 PRINT "▓▓                                                                            ▓▓";
3900 PRINT "▓▓          All registered users may call for assistance and will be          ▓▓";
3910 PRINT "▓▓                                                                            ▓▓";
3920 PRINT "▓▓          sent the 40-page User's Manual and all future upgrades.           ▓▓";
3930 PRINT "▓▓                                                                            ▓▓";
3940 PRINT "▓▓                                                                            ▓▓";
3950 PRINT "▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓";
3960 PRINT "                                                                               ";
3970 RETURN
```

## PCINPUT.BAS

```bas
1 REM ==>  LINES 10 & 11 MUST BE ONE OF FIRST LINES EXECUTED
10 II%=80:DIM IA$(30):IA$(1)="0123456789.- ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%&*()+=:;{}[]<>,/?'":IA$(2)="0123456789.-":IA$(3)="YN":I0$=STRING$(II%,255):I6$="  ":I7$="    ":I8$="        "
11 DEF FNIE$=LEFT$(I0$,IQ%):DEF FNIG%=IA%-1<1:DEF FNIP%(A%,B%)=(I9%=>A% AND I9%<=B%):DEF FNIU%=I9%=27:DIM IB#(30,2),IC$(30),IM$(30),IO$(30),ID$(80),I%(10),I6%(10):I6%(7)=8  '  ASCII CODE FOR CURSOR CHARACTER
10998 REM PCINPUT (IBM PC VERSION 1.8) COPYRIGHT 1983 BY CARL R. STATON
10999 REM (419) 347-3209          17 FRANKLIN AVENUE   SHELBY  OH  44875
11000 ON ERROR GOTO 11008:IF LEN(ID$)<1 AND I%>0 AND I%<II% AND INSTR(I1$,"O")<1 THEN ID$=ID$(I%)
11001 I1%=VAL(LEFT$(I1$,2)):I2%=VAL(MID$(I1$,3,2)):I3%=VAL(MID$(I1$,5,2)):I5%=VAL(MID$(I1$,7,2))
11002 I4%=((INSTR(I1$,"A")>0)*-1) + ((INSTR(I1$,"N")>0)*-2) + ((INSTR(I1$,"S")>0)*-4) + ((INSTR(I1$,"K")>0)*-8) + ((INSTR(I1$,"F")>0)*-32) + ((INSTR(I1$,"M")>0)*-64) + ((INSTR(I1$,"D")>0)*-128) + ((INSTR(I1$,"O")>0)*-16)
11003 I4%=I4% + ((INSTR(I1$,"P")>0)*-256) + ((INSTR(I1$,"E")>0)*-512):I6%(5)=I6%(1):I6%(6)=I6%(2):I6%(1)=0:I6%(2)=0:I6%(3)=0:I6%(4)=0:I6%(2)=((INSTR(I1$,"R")>0)*-7)
11004 I6%(3)=(-1*(INSTR(I1$,"H")>0)) + (-1*(INSTR(I1$,"R")>0)) + (-1*(INSTR(I1$,"I")>0))
11005 I6%(4)=(-1*(INSTR(I1$,"U")>0)) + (-1*(INSTR(I1$,"b")>0)) + (-2*(INSTR(I1$,"g")>0)) + (-4*(INSTR(I1$,"r")>0)) + (-7*(INSTR(I1$,"w")>0))
11006 IF ((-1*(I4% AND 1)) + (-1*(I4% AND 2)) + (-1*(I4% AND 4)) + (-1*(I4% AND 8)) + (-1*(I4% AND 16)) + (-1*(I4% AND 32))) > 1 OR (I6%(3)<>0 AND I6%(3)<>1) OR INSTR(CHR$(0)+CHR$(1)+CHR$(2)+CHR$(4)+CHR$(7)+CHR$(8),CHR$(I6%(4)))=0 THEN 11008
11007 IF I1%>0 AND I1%<26 AND I2%>0 AND I2%<II%+1 AND I3%>0 AND I3%<II%+1 AND I5%>0 AND I5%<31 THEN IF I4% AND 32 THEN I3%=LEN(IM$(I5%)):GOTO 11009 ELSE 11009
11008 IF ERL=11038 THEN RESUME 11013 ELSE CLS:PRINT "PCINPUT ERROR: ROW="I1%"COLUMN="I2%"LENGTH="I3%"ATTRIBUTE="RIGHT$(I1$,LEN(I1$)-6)"  EDIT="I5%"  LINE="ERL:STOP
11009 REM
11010 I6%(1)=I6%(4) + ((INSTR(I1$,"B")>0)*-16) + ((INSTR(I1$,"H")>0)*-8):IF I4% AND 16 THEN 11042
11011 COLOR I6%(1),I6%(2):LOCATE I1%,I2%:PRINT STRING$(I3%,"-");:LOCATE I1%,I2%
11012 I6%=0:I7!=0:I8#=0:MID$(I6$,1,2)=CHR$(0)+CHR$(0):MID$(I7$,1,4)=I6$+I6$:MID$(I8$,1,8)=I7$+I7$:ID%=0:MID$(I0$,1,II%)=STRING$(II%,255):IA%=0:IF LEN(ID$)<=I3% THEN MID$(I0$,1)=ID$:ID%=0:GOTO 11037
11013 IZ$=" ":IF (ID%<I3%) AND (I4% AND 32) THEN IZ$=MID$(IM$(I5%),ID%+1,1):IF IZ$<>"#" AND IZ$<>"%" THEN I9$=IZ$:I9%=ASC(I9$):GOTO 11018
11014 I9$=INKEY$:IF I9$="" THEN 11039 ELSE IQ%=INSTR(I0$,CHR$(255))-1:IF LEN(I9$)=1 THEN I9%=ASC(I9$) ELSE I9%=ASC(RIGHT$(I9$,1))
11015 IF I9%=13 THEN 11022 ELSE IF I9%=27 AND (I4% AND 128) THEN 11013 ELSE IF I9%=27 THEN 11036 ELSE IF I9%=8 THEN 11030
11016 IF ASC(I9$)<>0 THEN 11018 ELSE IF I9%=71 THEN ID%=0:GOTO 11037 ELSE IF I9%=79 THEN ID%=IA%-1:GOTO 11037 ELSE IF I9%=75 THEN ID%=ID%-1:GOTO 11037 ELSE IF I9%=77 THEN ID%=ID%+1:GOTO 11037 ELSE IF I9%=82 AND IQ%<I3% THEN 11032
11017 IF I9%=83 AND ID%>-1 THEN 11033 ELSE IF I9%=116 THEN ID%=ID%+2:GOTO 11037 ELSE IF I9%=115 THEN ID%=ID%-2:GOTO 11037 ELSE IF FNIP%(84,93) THEN 11048 ELSE IF FNIP%(94,103) THEN GOSUB 11050:GOTO 11013 ELSE BEEP:GOTO 11014
11018 IF (I4% AND 32) AND ((IZ$="%" AND INSTR(IA$(1),I9$)>0) OR (IZ$="#" AND INSTR(IA$(2),I9$)>0) OR (IZ$<>"%" AND IZ$<>"#")) THEN 11020
11019 IF ((I4% AND 1) AND INSTR(IA$(1),CHR$(I9%))>0) OR ((I4% AND 2) AND INSTR(IA$(2),CHR$(I9%))>0) OR ((I4% AND 4) AND INSTR(IA$(I5%),CHR$(I9%))>0) OR ((I4% AND 8) AND INSTR(IC$(I5%),CHR$(I9%))>0) THEN 11020 ELSE BEEP:GOTO 11013
11020 IF IQ%=I3% AND ID%=I3% THEN BEEP:GOTO 11013 ELSE LOCATE I1%,I2%+ID%:PRINT CHR$(I9%);
11021 ID%=ID%+1:MID$(I0$,ID%,1)=I9$:IA%=INSTR(I0$,CHR$(255)):IQ%=IA%-1+(-1*(IA%-1=-1)):GOTO 11013
11022 IF ((I4% AND 64) AND IQ%=0) OR ((I4% AND 32) AND IQ%<>I3%) THEN 11011 ELSE IF IQ%=0 THEN 11036
11023 IK%=INSTR(IC$(I5%),"."+FNIE$+"."):IF (I4% AND 8) AND IK%<1 THEN 11011 ELSE IF I4% AND 8 THEN GOSUB 11034:GOTO 11036
11024 IF I4% AND 2 THEN 11025 ELSE 11036
11025 I8#=VAL(FNIE$):I8$=MKD$(I8#):IF IB#(I5%,1)=0 AND IB#(I5%,2)=0 THEN 11027
11026 IF I8#<IB#(I5%,1) OR I8#>IB#(I5%,2) THEN 11011
11027 IF I8#<1000000! AND I8#>-1000000! THEN I7!=I8#:I7$=MKS$(I8#)
11028 IF I8#<32767 AND I8#>-32765 THEN I6%=I8#:I6$=MKI$(I8#)
11029 GOTO 11036
11030 LOCATE I1%,I2%:ID%=ID%-1:IF ID%<0 THEN ID%=0
11031 MID$(I0$,ID%+1)=MID$(I0$,ID%+2,IA%-(ID%+1))+CHR$(255):GOTO 11037
11032 LOCATE I1%,I2%:MID$(I0$,ID%+1)=" "+MID$(I0$,ID%+1,IA%-ID%):GOTO 11037
11033 LOCATE I1%,I2%:MID$(I0$,ID%+1)=MID$(I0$,ID%+2,IA%-(ID%+1))+CHR$(255):GOTO 11037
11034 IL%=0:FOR IZ%=1 TO IK%:IF MID$(IC$(I5%),IZ%,1)="." THEN IL%=IL%+1
11035 NEXT IZ%:RETURN
11036 IA%=INSTR(I0$,CHR$(255)):IQ%=IA%-1+(-1*(IA%-1=-1)):LOCATE I1%,I2%:PRINT FNIE$+STRING$(I3%-IQ%,32);CHR$(0);:ID$="":ON ERROR GOTO 0:IF I%>0 AND I%<II% THEN ID$(I%)=FNIE$:RETURN ELSE RETURN
11037 IA%=INSTR(I0$,CHR$(255)):IQ%=IA%-1+(-1*(IA%-1=-1)):IF ID%>IA%-1 THEN ID%=IA%-1 ELSE IF ID%<0 THEN ID%=0
11038 LOCATE I1%,I2%:PRINT FNIE$+STRING$(I3%-IQ%,"-");:LOCATE I1%,I2%+ID%:GOTO 11013
11039 I6%(4)=I6%(4)+1:IF I6%(4)>3 AND I6%(4)<7 THEN IQ$=CHR$(I6%(7)):GOTO 11041 ELSE IF I6%(4)>9 THEN I6%(4)=0
11040 IF IA%-1<1 OR INSTR(I1$,"I") > 0 THEN IQ$="-" ELSE IQ$=MID$(I0$,ID%+1,1)
11041 LOCATE I1%,I2%+ID%:PRINT IQ$;:GOTO 11013
11042 LOCATE I1%,I2%:COLOR I6%(1),I6%(2):PRINT IO$(I5%);:I6%(1)=I6%(5):I6%(2)=I6%(6):COLOR I6%(1),I6%(2):LOCATE I1%,I2%:FOR IZ%=1 TO I3%*100:NEXT IZ%:GOSUB 11043:GOSUB 11044:ON ERROR GOTO 0:RETURN
11043 IF I4% AND 256 THEN I9$=INKEY$:IF I9$="" THEN 11043 ELSE RETURN ELSE RETURN
11044 IF I4% AND 512 THEN PRINT STRING$(LEN(IO$(I5%))," ");:RETURN ELSE RETURN
11047 REM   CHANGE NEXT LINE FOR ON KEY GOTO FEATURE
11048 ON I9%-83 GOTO 11014,11014,11014,11014,11014,11014,11014,11014,11014,11014,11014
11049 REM   CHANGE NEXT LINE FOR ON KEY GOSUB FEATURE
11050 ON I9%-93 GOSUB 11051,11051,11051,11051,11051,11051,11051,11051,11051,11051,11051
11051 RETURN
11999 REM   END OF PCINPUT 1.8 COPYRIGHT 1984 BY CARL R. STATON
```

## SKELETON.BAS

```bas
10000COLOR  7, 0, 0
10001PRINT "«««««««««««««««««««««  ███████████████████████████████  ««««««««««««««««««««««««";
10002PRINT "║║║║║║║║║║║║║║║║║║║║║  ██                           ██  ║║║║║║║║║║║║║║║║║║║║║║║║";
10003PRINT "▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  ██  █▀▀▀   █▀▀▀█   █▀▀▀▀     ██  ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒";
10004PRINT "▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄  ██  █      █▄▄▄█   █▄▄▄▄     ██  ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄";
10005PRINT "░░░░░░░░░░░░░░░░░░░░░  ██  █▄▄▄   █  ▀▄   ▄▄▄▄█ ▄   ██  ░░░░░░░░░░░░░░░░░░░░░░░░";
10006PRINT "▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  ██                           ██  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓";
10007PRINT "▐▐▐▐▐▐▐▐▐▐▐▐▐▐▐▐▐▐▐▐▐  ███████████████████████████████  ▐▐▐▐▐▐▐▐▐▐▐▐▐▐▐▐▐▐▐▐▐▐▐▐";
10008PRINT "                                                                                ";
10009PRINT "                                                                                ";
10010PRINT "                                                                                ";
10011PRINT "                                                                                ";
10012PRINT "                                                                                ";
10013PRINT "                                                                                ";
10014PRINT "                                                                                ";
10015PRINT "                                                                                ";
10016PRINT "«««««««««««««««««««««  ███████████████████████████████  ««««««««««««««««««««««««";
10017PRINT "║║║║║║║║║║║║║║║║║║║║║  ██                           ██  ║║║║║║║║║║║║║║║║║║║║║║║║";
10018PRINT "▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  ██  █▀▀▀   █▀▀▀█   █▀▀▀▀     ██  ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒";
10019PRINT "▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄  ██  █      █▄▄▄█   █▄▄▄▄     ██  ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄";
10020PRINT "░░░░░░░░░░░░░░░░░░░░░  ██  █▄▄▄   █  ▀▄   ▄▄▄▄█ ▄   ██  ░░░░░░░░░░░░░░░░░░░░░░░░";
10021PRINT "▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  ██                           ██  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓";
10022PRINT "▐▐▐▐▐▐▐▐▐▐▐▐▐▐▐▐▐▐▐▐▐  ███████████████████████████████  ▐▐▐▐▐▐▐▐▐▐▐▐▐▐▐▐▐▐▐▐▐▐▐▐";
10023PRINT "                                                                                ";
10024PRINT "                                                                               ";
10025RETURN
```

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk 0363

     Volume in drive A has no label
     Directory of A:\

    DEMO     BAS     26983   5-30-84  12:19a
    FILES    TXT       469   4-29-85  10:50a
    FILES363 TXT       768   5-23-85   2:25p
    PCIGEN   BAS     27738   5-30-84  12:59a
    PCIGEN   EXE     52608   5-30-84  12:46a
    PCINPUT  BAS      6105   5-30-84  12:41a
    PCINPUT  DOC       929   5-30-84  12:36a
    SKELETON BAS      2432   5-30-84  12:52a
    SKELETON DAT     40064   7-28-84  11:43a
    SKELETON MNU       384   7-28-84  11:43a
           10 file(s)     158480 bytes
                               0 bytes free
