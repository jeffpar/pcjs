---
layout: page
title: "PC-SIG Diskette Library (Disk #1368)"
permalink: /software/pcx86/sw/misc/pcsig/1000-1999/DISK1368/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #1368"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "RGB^TECHWRITER"

    RGB^TECHWRITER is a wordprocessor specifically designed to fulfill the
    technical writing needs of engineers, scientists and students.
    Scientific notations, equations, and symbols not present on your
    keyboard are quickly available without the need for an extensive
    background in wordprocessing.  Instead of displaying various arcane
    notes, it uses color to identify such things as superscripts,
    subscripts, and other symbolic information.  This keeps your display
    relatively uncluttered and insures exact correspondence between screen
    and printer while allowing you to print complex equations and
    formulas.
    
    The easy-to-use menu gives you access to all of the standard
    wordprocessing functions such as: headers and footers, page numbering,
    search and replace, line centering and justification, underlining and
    bold print, text-block movement, page-break control, and fractional
    line spacing.  Written in assembly language, it's fast -- able to
    handle typing speeds of up to 120 WPM.  Individual files are limited
    to 62.8K characters, approximately 20 pages of printed material.
    
    File Descriptions:
    
    ATT473        Printer configuration file.
    DECLN03       Printer configuration file.
    DIABLO        Printer configuration file.
    EPSON80  RX   Printer configuration file.
    GUIDE*   PRN  Documentation file (6 files).
    GUIDE7   TWF  Documentation file.
    HPLJ          Printer configuration file.
    HPLJ     ME   Printer configuration file.
    HPTJ          Printer configuration file.
    IBMGP         Printer configuration file.
    IBMPRO        Printer configuration file.
    OKIDLCG  BAS  Printer configuration file.
    LASERJET BAS  Printer configuration file.
    OKI192   IBM  Printer configuration file.
    OKI92    OKI  Printer configuration file.
    READ     ME   Small text file.
    TI855         Printer configuration file.
    TI855    GM   Printer configuration file.
    TOSH341       Printer configuration file.
    TW       EXE  Main program
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILE1368.TXT

{% raw %}
```
Disk No: 1368
Disk Title: RGB^Techwriter
PC-SIG Version: 1.1

Program Title: RGB^Techwriter
Author Version: 2.23
Author Registration: $20.00
Special Requirements: CGA, EGA, MCGA, or VGA.

RGB^TECHWRITER is a wordprocessor specifically designed to fulfill the
technical writing needs of engineers, scientists and students.
Scientific notations, equations, and symbols not present on your
keyboard are quickly available without the need for an extensive
background in wordprocessing.  Instead of displaying various arcane
notes, it uses color to identify such things as superscripts,
subscripts, and other symbolic information.  This keeps your display
relatively uncluttered and insures exact correspondence between screen
and printer while allowing you to print complex equations and
formulas.

The easy-to-use menu gives you access to all of the standard
wordprocessing functions such as: headers and footers, page numbering,
search and replace, line centering and justification, underlining and
bold print, text-block movement, page-break control, and fractional
line spacing.  Written in assembly language, it's fast -- able to
handle typing speeds of up to 120 WPM.  Individual files are limited
to 62.8K characters, approximately 20 pages of printed material.

File Descriptions:

ATT473        Printer configuration file.
DECLN03       Printer configuration file.
DIABLO        Printer configuration file.
EPSON80  RX   Printer configuration file.
GUIDE??  PRN  Documentation file (6 files).
GUIDE7   TWF  Documentation file.
HPLJ          Printer configuration file.
HPLJ     ME   Printer configuration file.
HPTJ          Printer configuration file.
IBMGP         Printer configuration file.
IBMPRO        Printer configuration file.
OKIDLCG  BAS  Printer configuration file.
LASERJET BAS  Printer configuration file.
OKI192   IBM  Printer configuration file.
OKI92    OKI  Printer configuration file.
READ     ME   Small text file.
TI855         Printer configuration file.
TI855    GM   Printer configuration file.
TOSH341       Printer configuration file.
TW       EXE  Main program

PC-SIG
1030D East Duane Avenue
Sunnyvale  Ca. 94086
(408) 730-9291
(c) Copyright 1988,89 PC-SIG, Inc.

```
{% endraw %}

## LASERJET.BAS

{% raw %}
```bas

10 rem  The HP LaserJet printer requires special codes in order to start 
15 rem  printing at the very top of the page.  The codes necessary to 
20 rem  accomplish this, and also set the printer for 10 characters per inch,
25 rem  are given below.  To send these codes to your printer, load BASIC and
30 rem  type:

35 rem  RUN "A:LASERJET"

40 rem  assuming that you have the RGB^TechWriter disk in drive A:


45 LPRINT CHR$(27)+"E"+CHR$(27)+"&l0E"+CHR$(27)+"&l66F"+CHR$(27)+"(s10H";
50 SYSTEM: END

55 rem  At the DOS prompt you can proceed to copy the documentation files to
60 rem  the printer as described in the file READ.ME.
```
{% endraw %}

## OKIDLCG.BAS

{% raw %}
```bas
10 REM OKI-DLCG: ALTERNATE CHARACTER SET LOADER FOR OKIDATA PRINTERS
20 REM
30 ON ERROR GOTO 130
40 PRINT "Loading Alternate Character Set to Printer"
50 DEFINT A-Z
60 WIDTH "LPT1:",255
70 FOR N=1 TO 94       'SET THIS RANGE TO EQUAL THE NUMBER OF SYMBOLS DEFINED
80 READ Q$: LPRINT CHR$(27);Q$;
90 READ Q$: IF Q$="?" THEN READ Q: Q$=CHR$(Q)  'NONSTANDARD CHARACTERS
95 LPRINT Q$;
100 FOR I=1 TO 11: READ Q: LPRINT CHR$(Q);: NEXT I   'EVERY LINE HAS 11 VALUES
110 NEXT N
120 SYSTEM: END
130 PRINT "PRINTER IS NOT TURNED ON. LOADING ABORTED.": SYSTEM: END
200 REM script l
205 DATA %A,&,0,64,64,47,17,47,64,64,32,16,0
210 REM sm sigma
215 DATA %A,s,0,60,66,66,66,66,68,60,4,2,0
220 REM sm rho
225 DATA %D,r,0,64,0,64,62,0,17,0,17,10,4
230 REM cap omega
235 DATA %A,W,64,76,82,97,1,1,1,97,82,76,64
240 REM sm omega
245 DATA %A,w,0,48,72,68,64,48,64,68,72,48,0
250 REM sm xi
255 DATA %A,x,0,8,22,21,21,21,17,81,81,33,0
260 REM small theta
265 DATA %A,j,0,28,42,73,73,73,73,73,42,28,0
270 REM dot
275 DATA %A,*,0,0,0,0,12,12,12,0,0,0,0
280 REM sm del
285 DATA %A,@,0,50,73,73,73,73,73,73,50,28,0
290 REM cap del
295 DATA %A,^,2,6,10,18,34,66,34,18,10,6,2
300 REM cap delta
305 DATA %A,D,64,96,80,72,68,66,68,72,80,96,64
310 REM sm pi
315 DATA %A,p,0,8,4,124,4,4,4,124,4,2,0
320 REM square
325 DATA %A,#,0,127,0,65,0,65,0,65,0,127,0
330 REM sm mu
335 DATA %D,m,64,48,8,15,16,16,24,14,17,16,0
340 REM Angstrom
345 DATA %A,A,96,16,32,11,32,11,32,16,96,0,0
350 REM sm tau
355 DATA %A,t,8,0,4,0,4,56,68,0,68,0,2
360 REM sm epsilon
365 DATA %A,e,0,0,56,0,84,0,84,0,68,0,0
370 REM plus-or-minus
375 DATA %A,+,0,68,0,68,0,95,0,68,0,68,0
380 REM sm lambda
385 DATA %A,l,1,0,66,32,20,8,16,32,0,64,0
390 REM sm psi
395 DATA %A,y,2,0,2,4,8,0,127,0,8,4,3
400 REM sm phi
405 DATA %A,o,8,20,0,20,0,127,0,20,0,20,8
410 REM cap phi
415 DATA %A,O,8,20,0,85,0,127,0,85,0,20,8
420 REM sm delta
425 DATA %A,d,0,48,72,0,72,2,61,0,1,2,0
430 REM sm alpha
435 DATA %A,a,0,24,36,0,36,8,16,32,8,68,0
440 REM sm beta
445 DATA %D,b,0,126,1,20,1,20,1,20,10,0,0
450 REM integral center
455 DATA %A,!,0,0,0,0,0,127,0,0,0,0,0
460 REM integral top
465 DATA %A,(,0,0,0,0,0,126,1,2,1,2,0
470 REM integral bottom
475 DATA %A,),0,32,64,32,64,63,0,0,0,0,0
480 REM divisor line
485 DATA %A,-,8,0,8,0,8,0,8,0,8,0,8
490 REM script f
495 DATA %A,f,0,0,64,8,64,62,1,8,1,2,0
500 REM capital sigma
505 DATA %A,S,0,99,99,85,93,73,65,65,65,99,99
510 REM tilda
515 DATA %D,_,0,32,16,16,16,32,64,64,64,32,0
520 REM small gamma
525 DATA %A,g,0,0,0,49,74,4,74,49,0,0,0
530 REM capital gamma
535 DATA %A,G,0,127,1,1,1,1,1,1,1,3,0
540 REM infinity
545 DATA %A,I,16,40,0,40,0,16,0,40,0,40,16
550 REM small chi
555 DATA %A,c,1,0,65,34,20,8,20,34,65,0,0
560 REM small eta
565 DATA %D,h,0,0,1,30,0,2,0,2,60,64,0
570 REM small iota
575 DATA %A,i,0,0,0,4,0,124,0,64,0,0,0
580 REM small kappa
585 DATA %A,k,0,124,0,16,40,0,68,0,4,0,0
590 REM small nu
595 DATA %A,n,4,0,4,8,16,32,64,32,4,24,0
600 REM proportional
605 DATA %A,q,16,40,0,40,0,16,0,40,0,40,0
610 REM small upsilon
615 DATA %A,u,4,0,28,32,64,0,64,0,32,28,0
620 REM degrees
625 DATA %A,v,0,0,0,2,5,0,5,2,0,0,0
630 REM small zeta
635 DATA %A,z,0,56,5,32,3,32,1,32,64,32,0
640 REM upper-left curved bracket
645 DATA %A,1,0,0,0,0,0,124,2,0,1,0,0
650 REM left-center curved bracket
655 DATA %A,2,0,0,8,0,20,99,0,0,0,0,0
660 REM lower-left curved bracket
665 DATA %A,3,0,0,0,0,0,31,32,0,64,0,0
670 REM upper-right curved bracket
675 DATA %A,4,0,0,1,0,2,124,0,0,0,0,0
680 REM right-center curved bracket
685 DATA %A,5,0,0,0,0,0,99,20,0,8,0,0
690 REM lower-right curved bracket
695 DATA %A,6,0,0,64,0,32,31,0,0,0,0,0
700 REM upper-left bracket
705 DATA %A,7,0,0,0,0,0,127,0,1,0,1,0
710 REM lower-left bracket
715 DATA %A,8,0,0,0,0,0,127,0,64,0,64,0
720 REM upper-right bracket
725 DATA %A,9,0,1,0,1,0,127,0,0,0,0,0
730 REM lower-right bracket
735 DATA %A,0,0,64,0,64,0,127,0,0,0,0,0
740 REM implication
745 DATA %A,B,20,0,20,0,20,0,34,0,20,0,8
750 REM cross
755 DATA %A,C,0,34,0,20,0,8,0,20,0,34,0
760 REM square-root top left
765 DATA %D,F,0,0,0,0,0,126,0,2,0,2,0
770 REM square-root top right
775 DATA %A,H,0,8,0,8,0,120,0,0,0,0,0
780 REM cap theta
785 DATA %A,J,28,34,93,0,73,0,73,0,93,34,28
790 REM identical equality
795 DATA %A,=,0,42,0,42,0,42,0,42,0,42,0
800 REM cap lambda
805 DATA %A,L,64,0,96,24,6,1,6,24,96,0,64
810 REM less than or equal to
815 DATA %A,<,0,68,0,74,0,74,0,81,0,81,0
820 REM greater than or equal to
825 DATA %A,>,0,81,0,81,0,74,0,74,0,68,0
830 REM cap pi
835 DATA %A,P,0,1,0,127,0,1,0,127,0,1,0
840 REM bullet
845 DATA %A,Q,0,0,0,8,20,8,20,8,0,0,0
850 REM low carrat
855 DATA %D,?,34,0,64,0,32,0,16,0,32,0,64,0
860 REM therefore
865 DATA %A,T,0,0,64,0,0,8,0,0,64,0,0
870 REM cap upsilon
875 DATA %A,U,2,1,0,1,0,126,0,1,0,1,2
880 REM square-root bottom
885 DATA %A,V,16,0,16,32,0,127,0,0,0,0,0
890 REM cap chi
895 DATA %A,X,0,99,0,73,0,73,0,73,0,99,0
900 REM cap psi
905 DATA %A,Y,1,2,4,8,1,126,1,8,4,2,1
910 REM approximately equal
915 DATA %A,Z,0,20,2,16,2,16,4,16,4,18,0
920 REM not equal
925 DATA %A,E,0,20,0,52,0,28,0,22,0,20,0
930 REM division
935 DATA %A,?,58,0,8,0,8,0,42,0,8,0,8,0
940 REM closed-integral center
945 DATA %A,|,8,20,0,20,0,127,0,20,0,20,8
950 REM bracket center
955 DATA %A,$,0,0,0,0,0,127,0,0,0,0,0
960 REM slash zero
965 DATA %A,K,104,4,50,0,89,0,77,0,38,16,11
970 REM minutes of arc
975 DATA %A,M,0,0,0,0,0,0,4,2,1,0,0
980 REM seconds of arc
985 DATA %A,N,0,0,0,0,4,2,1,4,2,1,0
990 REM barred-R
995 DATA %A,R,1,0,127,0,1,126,1,16,33,10,68
1000 REM minus-or-plus
1005 DATA %A,%,0,0,17,0,17,125,17,0,17,0,0
1010 REM script zeta
1015 DATA %A,{,0,0,38,1,72,1,80,33,0,1,2
1020 REM summation top-right
1025 DATA %A,[,1,0,1,0,1,0,1,0,1,0,7
1030 REM summation bottom-right
1035 DATA %A,],64,0,64,0,64,0,64,0,64,0,112
1040 REM summation bottom-left
1045 DATA %A,/,0,0,0,0,64,32,80,8,68,2,65
1050 REM summation top-left
1055 DATA %A,\,0,0,0,0,1,2,5,8,17,32,65
1060 REM summation center
1065 DATA %A,},65,34,20,8,0,0,0,0,0,0,0
1070 REM script phi
1075 DATA %A,?,63,0,8,20,64,32,16,40,4,34,20,8
1080 REM roughly equal
1085 DATA %A,~,0,36,18,0,18,0,36,0,36,18,0
1090 REM parallel
1095 DATA %A,`,0,0,0,127,0,0,0,127,0,0,0
1100 REM dagger
1105 DATA %A,',0,0,0,4,0,127,0,4,0,0,0
1110 REM script epsilon
1115 DATA %A,;,0,0,0,40,84,0,84,0,68,0,0
1120 REM script omega
1125 DATA %A,?,44,4,0,20,40,68,32,16,32,68,40,16
1130 REM script nu
1135 DATA %A,?,46,8,0,56,64,0,68,42,16,10,4,8
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #1368

     Volume in drive A has no label
     Directory of A:\

    ATT473            1573   8-15-87   5:01p
    DECLN03           2518   8-15-87   5:01p
    DIABLO            1896   8-17-87  11:30a
    EPSON80  RX       5969   8-15-87   5:01p
    FILE1368 TXT      2257   9-15-89   8:37a
    GO       BAT        38   4-24-89   4:39p
    GO       TXT       540   9-07-89   8:13a
    GUIDE1   PRN     13831   8-22-89   8:37p
    GUIDE2   PRN     27833   6-14-89   8:35p
    GUIDE3   PRN     10754   3-19-89  12:45a
    GUIDE4   PRN     33156   3-19-89  12:46a
    GUIDE5   PRN     24498   3-19-89  12:47a
    GUIDE6   PRN     32330   3-19-89  12:49a
    GUIDE7   TWF      8576   3-13-89   9:42p
    HPLJ              1478   8-15-87   5:01p
    HPLJ     ME       3114   8-15-87   5:02p
    HPTJ              1308   8-15-87   5:02p
    IBMGP             1293   8-15-87   5:02p
    IBMPRO            1572   8-15-87   5:02p
    LASERJET BAS       653   8-15-87   5:03p
    OKI192   IBM      1577   8-15-87   5:02p
    OKI92    OKI      1303   8-15-87   5:02p
    OKIDLCG  BAS      6613  12-14-87   5:45p
    PAGE     COM       325   1-06-87   4:21p
    READ     ME       1069   3-13-89  10:20p
    TI855             1292   8-15-87   5:02p
    TI855    GM       3872   8-15-87   5:03p
    TOSH341           1356   8-15-87   5:03p
    TW       EXE    130340   8-22-89   8:25p
    VIEW     BAT        59   5-01-89  10:42a
           30 file(s)     322993 bytes
                           21504 bytes free
