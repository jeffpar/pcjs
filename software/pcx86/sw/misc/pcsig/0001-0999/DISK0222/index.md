---
layout: page
title: "PC-SIG Library Disk #222"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0222/
machines:
  - id: ibm5160
    type: pcx86
    config: /machines/pcx86/ibm/5160/cga/256kb/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk 0222"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5160" %}

{% comment %}info_begin{% endcomment %}

## Information about "TRANSTAR UTILITIES"

    This disk contains a copy of the SOFT and EASY UTILITIES for the
    TranStar printers.  In addition to the three main program procedures,
    there are ASCII files which contain copies of both the user's manual
    and the appendicies for that manual (together totaling 60+ pages!)
    Each of these ASCII files will produce a formatted manual, (or
    appendix), on your TranStar 315 printer. DO NOT ATTEMPT TO PRINT THESE
    FILES ON ANY OTHER PRINTERS.  JUST WON'T WORK...
    
    System Requirements: TranStar printer, some programs require BASIC
    
    How to Start: Consult the MANUAL.DOC and APPENDIX.DOC files for
    directions and documentation.  To run the BASIC programs, consult the
    directions in GETTING STARTED for your configuration.  To run a
    program with the suffix .COM, or .EXE, just type its name, i.e., for
    PRNT-CHR.COM, type PRNT-CHR and hit <ENTER>.
    
    Suggested Registration:  $10.00
    
    File Descriptions:
    
    PRNT-CHR COM  Allows italics and extended ASCII characters to be printed
    PRNT-SCN COM  Print screen utility
    PRN-MAN  BAT  Batch file to print manual
    USMAP    PIC  Graphic test image of USA for use with SCN-DEMO
    CHR-DEMO BAS  Demonstration program for PRNT-CHR
    SCN-DEMO BAS  Demonstration program for PRNT-SCN
    MANUAL   DOC  Documentation (Use TranStar 315 only-takes 50 minutes)
    APPENDIX DOC  Appendix  (Use TranStar 315 - takes 30 minutes - 36K)
    PRN-APX  BAT  Batch file to print appendix
    README        Instruction for printing documentation
    NOTICE        Message to those who print manual and/or appendix
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## CHR-DEMO.BAS

```bas
10 '***************************************************************************
20 '*                                                                         *
30 '*                A PROGRAM TO DEMONSTRATE PRINT_CHARACTERS                *
40 '*                                                                         *
50 '*                           (C) COPYRIGHT 1984                            *
60 '*                                   by                                    *
70 '*                             Michael L Hoyt                              *
80 '*                                                                         *
90 '***************************************************************************
100 '
110 '************************ CHECK DISPLAY CARDS *****************************
120 '
130 DEF SEG=&H40                        'segment address of display information
140 MODE=PEEK(&H49)                     'offset of current mode
150 DEF SEG                             're-establish BASIC'S data segment
160 IF MODE=0 OR MODE=1 OR MODE=4 OR MODE=5 THEN W=0 ELSE W=20  'place display
170 '
180 '***************************** INITIALIZE *********************************
190 '
200 IF W=0 THEN WIDTH 40 ELSE WIDTH 80  'set display width
210 SCREEN 0,1,0,0: KEY OFF: COLOR 7,0,0: CLS
220 GOSUB 1410                          'load interface to PRINT_SCREEN
230 '
240 '*************************** OPENING SCREEN *******************************
250 '
260 LOCATE 3,W+11,0                     'cursor off
270 PRINT "DEMONSTRATION PROGRAM"
280 LOCATE 4,W+20: PRINT "for"
290 COLOR 15: PRINT
300 LOCATE ,W+13: PRINT "PRINT_CHARACTERS"
310 COLOR 7
320 LOCATE ,W+19: PRINT "with"
330 COLOR 15: PRINT
340 LOCATE ,W+15: PRINT "TRANSTAR 315"
350 COLOR 7
360 LOCATE ,W+12: PRINT "dot matrix printer"
370 LOCATE 18,1
380 PRINT "(c) Copyright 1984"
390 PRINT "        by"
400 PRINT "  Michael L Hoyt"
410 LOCATE 24,W+8: COLOR 23
420 PRINT "Press any key to continue";
430 COLOR 15
440 A$=INKEY$: IF A$="" THEN 440
450 '
460 '******************* SET DISPLAY OF ASCII CHARACTERS **********************
470 '
480 CLS
490 COLOR 4
500 LOCATE 1,W+2
510 PRINT "HEX  0 1 2 3 4 5 6 7 8 9 A B C D E F"
520 LOCATE ,W+2
525 COLOR 6
530 PRINT "   ╔═════════════════════════════════╗"
535 COLOR 4
540 LOCATE ,W+2
550 PRINT " 2 ";:COLOR 6:PRINT "║ ";:COLOR 7:PRINT "  ! " CHR$(34) " # $ % & ' ( ) * + , - . / ";:COLOR 6:PRINT "║":COLOR 4
560 LOCATE ,W+2
570 PRINT " 3 ";:COLOR 6:PRINT "║ ";:COLOR 7:PRINT "0 1 2 3 4 5 6 7 8 9 : ; < = > ? ";:COLOR 6:PRINT "║":COLOR 4
580 LOCATE ,W+2
590 PRINT " 4 ";:COLOR 6:PRINT "║ ";:COLOR 7:PRINT "@ A B C D E F G H I J K L M N O ";:COLOR 6:PRINT "║":COLOR 4
600 LOCATE ,W+2
610 PRINT " 5 ";:COLOR 6:PRINT "║ ";:COLOR 7:PRINT "P Q R S T U V W X Y Z [ \ ] ^ _ ";:COLOR 6:PRINT "║":COLOR 4
620 LOCATE ,W+2
630 PRINT " 6 ";:COLOR 6:PRINT "║ ";:COLOR 7:PRINT "` a b c d e f g h i j k l m n o ";:COLOR 6:PRINT "║":COLOR 4
640 LOCATE ,W+2
650 PRINT " 7 ";:COLOR 6:PRINT "║ ";:COLOR 7:PRINT "p q r s t u v w x y z { | } ~ ";:COLOR 2:PRINT CHR$(127);:COLOR 6:PRINT " ║"
660 LOCATE ,W+2
670 PRINT "   ╟─────────────────────────────────╢":COLOR 4
680 LOCATE ,W+2
690 PRINT " 8 ";:COLOR 6:PRINT "║ ";:COLOR 2:PRINT "Ç ü é â ä à å ç ê ë è ï î ì Ä Å ";:COLOR 6:PRINT "║":COLOR 4
700 LOCATE ,W+2
710 PRINT " 9 ";:COLOR 6:PRINT "║ ";:COLOR 2:PRINT "É æ Æ ô ö ò û ù ÿ Ö Ü ¢ £ ¥ ₧ ƒ ";:COLOR 6:PRINT "║":COLOR 4
720 LOCATE ,W+2
730 PRINT " A ";:COLOR 6:PRINT "║ ";:COLOR 2:PRINT "á í ó ú ñ Ñ ª º ¿ ⌐ ¬ ½ ¼ ¡ « » ";:COLOR 6:PRINT "║"
740 LOCATE ,W+2
750 PRINT "   ╟─────────────────────────────────╢":COLOR 4
760 LOCATE ,W+2
770 PRINT " B ";:COLOR 6:PRINT "║ ";:COLOR 1:PRINT "░ ▒ ▓ ";:COLOR 4:PRINT "│ ┤ ";:COLOR 3:PRINT "╡ ";:COLOR 5:PRINT "╢ ╖ ";:COLOR 3:PRINT "╕ ";:COLOR 2:PRINT "╣ ║ ╗ ╝ ";:COLOR 5:PRINT "╜ ";:COLOR 3:PRINT "╛ ";:COLOR 4:PRINT "┐ ";:COLOR 6:PRINT "║"
780 LOCATE ,W+2
790 PRINT "   ║                                 ║":COLOR 4
800 LOCATE ,W+2
810 PRINT " C ";:COLOR 6:PRINT "║ ";:COLOR 4:PRINT "└ ┴ ┬ ├ ─ ┼ ";:COLOR 3:PRINT "╞ ";:COLOR 5:PRINT "╟ ";:COLOR 2:PRINT "╚ ╔ ╩ ╦ ╠ ═ ╬ ";:COLOR 3:PRINT "╧ ";:COLOR 6:PRINT "║"
820 LOCATE ,W+2
830 PRINT "   ║                                 ║":COLOR 4
840 LOCATE ,W+2
850 PRINT " D ";:COLOR 6:PRINT "║ ";:COLOR 5:PRINT "╨ ";:COLOR 3:PRINT "╤ ";:COLOR 5:PRINT "╥ ╙ ";:COLOR 3:PRINT "╘ ╒ ";:COLOR 5:PRINT "╓ ╫ ";:COLOR 3:PRINT "╪ ";:COLOR 4:PRINT "┘ ┌ ";:COLOR 1:PRINT "█ ▄ ▌ ▐ ▀ ";:COLOR 6:PRINT "║"
860 LOCATE ,W+2
870 PRINT "   ║                                 ║"
880 LOCATE ,W+2
890 PRINT "   ╟─────────────────────────────────╢":COLOR 4
900 LOCATE ,W+2
910 PRINT " E ";:COLOR 6:PRINT "║ ";:COLOR 2:PRINT "α ß Γ π Σ σ µ τ Φ Θ Ω δ ∞ φ ε ∩ ";:COLOR 6:PRINT "║":COLOR 4
920 LOCATE ,W+2
930 PRINT " F ";:COLOR 6:PRINT "║ ";:COLOR 2:PRINT "≡ ± ≥ ≤ ⌠ ⌡ ÷ ≈ ° • · √ ⁿ ";:COLOR 6:PRINT "║"
940 LOCATE ,W+2
950 PRINT "   ╚═════════════════════════════════╝";
960 '
970 '************************** DISPLAY PROMPT ********************************
980 '
990 COLOR 7:LOCATE 25,W+9: PRINT "Normal  -  Italics  -  Quit";
1000 COLOR 15: LOCATE 25,W+9: PRINT "N";
1010 LOCATE 25,W+20: PRINT "I";
1020 LOCATE 25,W+32: PRINT "Q";
1030 COLOR 7
1040 LOCATE 24,W+15: PRINT "To print, PRESS";
1050 '
1060 '*************************** GET USER RESPONSE ****************************
1070 '
1080 LOCATE 1,1,0                       'cursor off
1090 A$=INKEY$: IF A$="" THEN 1090      'wait for response
1100 IF A$="i" OR A$="I" THEN 1240      'do italics print-screen
1110 IF A$="n" OR A$="N" THEN 1170      'do normal print-screen
1120 IF A$="q" OR A$="Q" THEN 1330      'end up
1130 BEEP: GOTO 1090
1140 '
1150 '********************** NORMAL TEXT SCREEN PRINT *************************
1160 '
1170 LPRINT CHR$(27) CHR$(62)           'set printer to unidirectional
1180 GOSUB 1510                         'call interface to PRINT_SCREEN
1190 LPRINT CHR$(12)                    'form feed to eject an 11" sheet
1200 GOTO 990                           'done, so return
1210 '
1220 '********************** ITALICS TEXT SCREEN PRINT ************************
1230 '
1240 LPRINT CHR$(27) CHR$(62)           'set printer to unidirectional
1250 LPRINT CHR$(18)                    'set printer (PRNT-CHR) to italics
1260 GOSUB 1510                         'call interface to PRINT_SCREEN
1270 LPRINT CHR$(18)                    'reset printer(PRT-CHR) to normal
1280 LPRINT CHR$(12)                    'form feed to eject an 11" sheet
1290 GOTO 990                           'done, so return
1300 '
1310 '********************************* END ***********************************
1320 '
1330 CLS
1340 LOCATE 3,10
1350 PRINT "End of PRINT_CHARACTERS demonstration..."
1360 LOCATE 10,1,1                      'cursor back on
1370 SYSTEM
1380 '
1390 '********************* INTERFACE TO PRINT_SCREEN ************************
1400 '
1410 DEF SEG                            'establish BASIC'S data segment
1420 DIM PRTSC%(3)                      'define variable to hold code string
1430 FOR X=0 TO 3                       'load the code into the string
1440 READ PRTSC%(X)                     'read data statement
1450 NEXT X                             'loop until done
1460 RETURN                             'done, so return
1470 DATA &H8955,&HCDE5,&H5D05,&H00CB:  'interface code
1480 '
1490 '****************** CALL INTERFACE TO PRINT_SCREEN **********************
1500 '
1510 LOCATE 25,W+7: PRINT "                              ";
1520 LOCATE 24,W+15: PRINT "               ";
1530 DEF SEG                            'set BASIC'S data segment
1540 SUBRT%=VARPTR(PRTSC%(0))           'point to code string(variable)
1550 CALL SUBRT%                        'call the code interface
1560 RETURN                             'done, so return
```

## SCN-DEMO.BAS

```bas
10 '***************************************************************************
20 '*                                                                         *
30 '*                   A PROGRAM TO DEMOSTRATE PRINT_SCREEN                  *
40 '*                                                                         *
50 '*                            (C) COPYRIGHT 1984                           *
60 '*                                    by                                   *
70 '*                              Michael L Hoyt                             *
80 '*                                                                         *
90 '***************************************************************************
100 '
110 '*************************** CHECK FOR COLOR CARD *************************
120 '
130 DEF SEG=&H40                                'address of display information
140 MODE=PEEK(&H49)                             'offset of current mode
150 DEF SEG                                     're-establish BASIC'S data seg
160 IF MODE=7 GOTO 610                          'see if color card is in use
170 '
180 '******************************* INITIALIZE *******************************
190 '
200 DEF SEG                                     'establish BASIC'S data segment
210 GOSUB 840                                   'load interface to PRINT_SCREEN
220 SCREEN 0,1,0,0: WIDTH 40: COLOR 7,0,0: CLS
230 '
240 '***************************** OPENING SCREEN *****************************
250 '
260 LOCATE 3,11,0:                              'cursor off
270 PRINT "DEMONSTRATION PROGRAM"
280 PRINT "                   for"
290 COLOR 15: PRINT
300 PRINT "              PRINT_SCREEN"
310 COLOR 7: PRINT "                  with"
320 COLOR 15: PRINT
330 PRINT "              TRANSTAR 315"
340 COLOR 7: PRINT "           dot matrix printer"
350 LOCATE 18,1
360 PRINT "(c) Copyright 1984"
370 PRINT "        by"
380 PRINT "  Michael L Hoyt"
390 LOCATE 24,8: COLOR 23
400 PRINT "Press any key to continue";          'prompt user to begin
410 A$=INKEY$: IF A$="" THEN 410                'wait for response
420 '
430 '**************************** LOAD GRAPHICS SCREEN ************************
440 '
450 SCREEN 1,0: COLOR 0,1: CLS                  'set medium graphics screen
460 DEF SEG=&HB800                              'address of graphics board
470 BLOAD"USMAP.PIC",0
480 DEF SEG                                     're-establish BASIC'S data seg
490 '
500 '***************************** GET USER RESPONSE **************************
510 '
520 LOCATE 1,17
530 PRINT "Press P)rint or E)nd";               'print prompt
540 A$=INKEY$: IF A$="" THEN 540                'wait for response
550 IF A$="E" OR A$="e" GOTO 740
560 IF A$="P" OR A$="p" THEN GOSUB 940: GOTO 740
570 BEEP: GOTO 540
580 GOTO 740
590 '******************************* ERROR ************************************
600 '
610 COLOR 23,0,0: WIDTH 80: CLS
620 LOCATE 2,36,0                               'cursor off
630 PRINT "HOLD IT!"
640 COLOR 7: PRINT
650 PRINT :PRINT "  You must have the color/graphics monitor adapter installed and in operation"
660 PRINT "  to run this demonstration program."
670 COLOR 15: LOCATE 5,21
680 PRINT "COLOR/GRAPHICS MONITOR ADAPTER";
690 LOCATE 10,1,1: COLOR 7,0,0
700 SYSTEM
710 '
720 '******************************* END **************************************
730 '
740 SCREEN 0,1,0,0
750 IF MODE=0 OR MODE=1 OR MODE=4 OR MODE=5 THEN WIDTH 40 ELSE WIDTH 80
760 COLOR 7,0,0: CLS
770 LOCATE 3,10:
780 PRINT "End of PRINT_SCREEN demonstration..."
790 LOCATE 5,1,1:                               'cursor back on
800 SYSTEM
810 '
820 '********************** INTERFACE TO PRINT_SCREEN *************************
830 '
840 DEF SEG
850 DIM PRTSC%(3)                               'define variable to hold code
860 FOR X=0 TO 3                                'load the code into the string
870 READ PRTSC%(X)                              'read data statement
880 NEXT X                                      'loop until odne
890 RETURN                                      'done. so return
900 DATA &H8955,&HCDE5,&H5D05,&H00CB:           'interface code
910 '
920 '********************* CALL PRINT_SCREEN INTERFACE ************************
930 '
940 LOCATE 1,17
950 PRINT "                     ";
960 DEF SEG                                     'set BASIC'S data segment
970 SUBRT%=VARPTR(PRTSC%(0))                    'point to code string (variable
980 CALL SUBRT%                                 'call the code interface
990 LPRINT CHR$(12)                             'eject graphics print
1000 RETURN                                      'done, so retINPUTENDn
```

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk 0222

     Volume in drive A has no label
     Directory of A:\

    PRNT-SCN COM      1408   4-07-84  12:21p
    PRNT-CHR COM      3328   4-07-84   9:32a
    SCN-DEMO BAS      4444   4-01-84   4:38p
    CHR-DEMO BAS      6717   6-01-84   6:25a
    USMAP    PIC     16392   2-02-84  10:31a
    PRN-MAN  BAT       169   5-02-84   6:06a
    MANUAL   DOC     48721   4-30-84   3:45p
    PRN-APX  BAT       158   5-02-84   6:07a
    APPENDIX DOC     36289   4-30-84   4:03p
    NOTICE            1295   5-02-84   6:15a
    README            1131   5-05-84  10:26p
    CRC      TXT      1170  11-15-84  10:12a
    CRCK4    COM      1536  10-21-82   7:54p
           13 file(s)     122758 bytes
                           33792 bytes free
