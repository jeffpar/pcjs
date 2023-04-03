---
layout: page
title: "PC-SIG Library Disk #353"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0353/
machines:
  - id: ibm5160
    type: pcx86
    config: /machines/pcx86/ibm/5160/cga/256kb/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk 0353"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5160" %}

{% comment %}info_begin{% endcomment %}

## Information about "TURBO PASCAL SET #3"

    This disk contains Turbo Pascal programs and other programs suited both
    to the novice and the advanced user alike.  Most of the files on this
    disk pertain more to visual routines.  For example, the file SHOWMOVI
    which is a text animation program.  There is an array of printer
    utilities, and a program that generates mazes.
    
    System Requirements: Two disk drives, Turbo Pascal
    
    How to Start: To read DOC files simply enter TYPE filename.ext and
    press <ENTER>.  For instructions on PAS listings, refer to your Pascal
    language manual.
    
    File Descriptions:
    
    AMAZING  COM  Produces a maze-like pattern (great with color)
    DECIHEX  COM  Enter a decimal integer, receive a hexadecimal number
    AMAZING  PAS  TURBO PASCAL source code
    FONTEDIT BAS  Create new fonts for OKIDATA 93, 92, and maybe 82
    DECIHEX  ASM  Source code from Waite Group book -- <Ctrl>C to exit
    NEWCHARS BAS  Program created by FONTEDIT.BAS (Okidata fonts)
    FONTEDIT DOC  Documentation guide
    MAKAMOVI COM  Create animation in text mode (needs 96K minimum)
    KEYDEMO  PAS  TURBO PASCAL source code
    KEYDEMO  COM  A demo program that reads all keystrokes
    NEWCHARS DOC  Documentation guide
    FILES    TXT  Disk documentation
    TURBO    DOC  Random comments about Borland's Turbo Pascal
    PIANO    TXT  Short text on PIANO.COM
    PIANO    PAS  TURBO PASCAL source code
    PIANO    COM  PC piano (version 1.00) with record and playback
    MAKAMOVI DOC  Documentation (user guide) version 1.0
    NOISE    ASM  Source code from Waite Group book on IBM Assembler
    MAKAMOVI PAS  TURBO PASCAL source code
    SHOWMOVI PAS  TURBO PASCAL source code
    SHOWMOVI DOC  Documentation (user guide)
    SHOWMOVI COM  Used to "show" the "movies" created by MAKAMOVI.COM
    INTRO    SCN  Used by MAKAMOVI.COM (must be on same disk)
    NOISE    COM  Makes a "machine-gun" noise
    DICT     OKI  File created by OKIGRAFX.COM
    ANAGRAM  OKI  File created by OKIGRAFX.COM
    OKIGRAFX PAS  TURBO PASCAL source code
    OKIGRAFX DOC  Documentation guide
    OKIGRAFX COM  Create all-points-addressable graphics up to 10" square
    SQUARE   SCN  File created by MAKAMOVI.COM (used by SHOWMOVI.COM)
    BOUNCY   SCN  File created by MAKAMOVI.COM (used by SHOWMOVI.COM)
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FONTEDIT.BAS

```bas
10 DIM M%(7)
20 'Fontedit.bas        A character editor for downloading character sets
30 '                    for the Okidata Microline 93
40 '                    modified by Neil J. Rubenking,  April 1984
50 GOSUB 890            'Initialize and set up function keys
60 GOSUB 530            'Clear screen and label character matrix
70 LINE INPUT ED$       'This statement is the character editor!
80 GOSUB 100            'When <return> is hit, get new menu
90 GOTO 70              'Return to editing
100 '--------------------------------------------------------------------------
110 'Subroutine to generate the options menu
120 '--------------------------------------------------------------------------
130 LOCATE 22,1: COLOR 0,7
140 PRINT"F1:  SAVE redefinition to file        F2:  CLEAR the matrix         "
150 PRINT"F3:  EXIT fontedit                    F4:  TEST character on printer"
160 PRINT"F5:  CONTINUE editing matrix          F6:  LOOK UP matrix in ROM    ";
170 COLOR 7,0
180 LOCATE 1,1:  INPUT"Press a function key:  ",F$
190 IF F$="SAVE"                THEN GOSUB 260 : GOTO 250
200 IF F$="CLEAR"               THEN GOSUB 530 : RETURN
210 IF F$="EXIT"                THEN GOTO 1680
220 IF F$="TEST"                THEN GOSUB 740 : GOTO 250
230 IF F$="CONTINUE"            THEN GOSUB 650 : RETURN
240 IF F$="LOOKUP"              THEN GOSUB 1410: RETURN
250 FOR R=1 TO 2: LOCATE R,1: PRINT SPACE$(70);:NEXT: GOTO 180
260 '--------------------------------------------------------------------------
270 'Subrouting to read the screen and write to file.  (SAVE option)
280 '--------------------------------------------------------------------------
290 LOCATE 1,1: PRINT SPACE$(70);:LOCATE 1,1
300 INPUT "Save redefinition for what character?:  ",C$
310 INPUT "Descender  (Y/N)?  ",DES$
320 DESC$ = "chr$(65)"
330 IF (DES$ = "Y") OR (DES$ = "y") THEN DESC$ = "chr$(68)"
340 OPEN FIL$ FOR APPEND AS #1
350 PRINT #1, LINENUM;" Rem--Redefines ";C$: LINENUM = LINENUM + 10
360 PRINT #1, LINENUM;
370 PRINT #1, "Lprint chr$(27);chr$(37);";DESC$;";chr$(";ASC(C$);");"
380 LINENUM = LINENUM + 10: PRINT #1, LINENUM;" Lprint ";
390 'Alternate entry point to read screen--used for TEST option.
400 FOR SCRNLOC=1668 TO 1668+((MATCOLS-1)*2) STEP 2
410     CODE = 0
420     N = -1
430             FOR OFFSET = 0 TO (MATROWS*160) STEP 160
440                     N = N + 1
450                     IF PEEK(SCRNLOC+OFFSET)=220 THEN CODE = CODE+(2^N)
460             NEXT OFFSET
470     IF TEST=TRUE THEN LPRINT CHR$(CODE);: GOTO 490
480     PRINT #1, "chr$(";RIGHT$(STR$(CODE),LEN(STR$(CODE))-1);");";
490 NEXT SCRNLOC
500 IF TEST = FALSE THEN PRINT #1,: LINENUM = LINENUM + 10
510 CLOSE #1
520 RETURN
530 '--------------------------------------------------------------------------
540 'Subroutine to clear screen and label rows and columns (CLEAR option)
550 '--------------------------------------------------------------------------
560 CLS: LOCATE 9,35: PRINT LEFT$("12345678901",MATCOLS)
570 LOCATE 10,34
580 PRINT CHR$(201);:FOR I=1 TO MATCOLS:PRINT CHR$(205);:NEXT:PRINT CHR$(187)
590 FOR I = 11 TO 11+MATROWS-1
600     LOCATE I,31
610     PRINT I-10;CHR$(186);SPACE$(MATCOLS);CHR$(186)
620 NEXT I
630 LOCATE I,34
640 PRINT CHR$(200);:FOR I=1 TO MATCOLS:PRINT CHR$(205);:NEXT:PRINT CHR$(188)
650 'Alternate entry point--used for CONTINUE option.
660 LOCATE 22,1:COLOR 0,7
670 PRINT"Use arrow keys to move to desired dot location                      "
680 PRINT"Press F10 to set a dot...Space Bar to remove a dot                  "
690 PRINT"Press <return> for options menu                                     ";
700 COLOR 7,0
710 LOCATE 1,1:PRINT SPACE$(70);
720 LOCATE 11,35
730 RETURN
740 '-------------------------------------------------------------------------
750 'Subroutine to test character on printer (TEST option).
760 '-------------------------------------------------------------------------
770 LOCATE 1,1:PRINT SPACE$(70);:LOCATE 1,1
775 INPUT "Replace what character for test? :",C$
780 LPRINT CHR$(27);CHR$(37);"A";C$;
790 TEST = TRUE
800 GOSUB 390
810 LPRINT CHR$(27);"0"
820 LPRINT"Here is a test of the new character."
830 LPRINT CHR$(27);"2";
840 FOR I = 1 TO 20: LPRINT C$;:NEXT I
850 LPRINT CHR$(27);"0";
860 LPRINT"That was a test of the new character."
870 TEST = FALSE
880 RETURN
890 '-------------------------------------------------------------------------
900 'Subroutine to initialize and set up function keys
910 '-------------------------------------------------------------------------
920 TRUE=1:FALSE=0
930 WIDTH "SCRN: ",80:CLS:KEY OFF:CR$ = CHR$(13)
940 FOR I = 1 TO 10: KEY I, "": NEXT I
950 KEY 1, "SAVE" + CR$ : KEY 2, "CLEAR" + CR$   : KEY 3, "EXIT" + CR$
960 KEY 4, "TEST" + CR$ : KEY 5, "CONTINUE" + CR$: KEY 6, "LOOKUP" + CR$
970 KEY 10, CHR$(220)
980 'Determine display adapter (B800 for color/graphics, B000 for Mono).
990 DEF SEG=0
1000 IF (PEEK(&H410) AND &H30) <> &H30 THEN DEF SEG=&HB800 ELSE DEF SEG=&HB000
1010 MATCOLS = 11       'Number of dot matrix columns
1020 MATROWS=7          'Number of dot matrix rows.
1030 LOCATE 3,35: PRINT "FONTEDIT.BAS"
1040 LOCATE 10,10
1050 PRINT"     Be sure that the filename you select for output is not in use."
1060 LOCATE 11,10
1070 PRINT"If you are going to add more character definitions to an existing"
1080 LOCATE 12,10
1090 PRINT"file, you must know its last line number."
1100 LOCATE 13,10
1110 PRINT"     When creating a character, remember that no two dots can be"
1120 LOCATE 14,10
1130 PRINT"directly adjacent horizontally.  The LOOKUP option gets the dot"
1140 LOCATE 15,10
1150 PRINT"patterns from the display screen ROM, which requires adjacent dots,"
1160 LOCATE 16,10
1170 PRINT"so you will have to edit any characters you LOOKUP.  Also, the ROM"
1180 LOCATE 17,10
1190 PRINT"character patterns are only 7 columns wide."
1200 LOCATE 18,10:COLOR 31,0:PRINT"     IMPORTANT:  ";:COLOR 7,0
1210 PRINT"If you look at the character files created by fontedit"
1220 LOCATE 19,10
1230 PRINT"by LOADing and LISTing them, be sure not to SAVE them--if you do,"
1240 LOCATE 20,10
1250 PRINT"you will not be able to append to them.  If you make changes"
1260 LOCATE 21,10
1270 PRINT"and must save them, use the `A` option (SAVE`<filename>.BAS`,A)."
1280 LOCATE 22,1: INPUT "File for output?  (1-8 characters) "; FIL$
1290 IF FIL$ = "" THEN BEEP: GOTO 1130
1300 FIL$ = FIL$ + ".BAS"
1310 INPUT "New file or append  (N/A)? ",TYPE$
1320 IF TYPE$ = "a" OR TYPE$ = "A" THEN INPUT "Line for 1st new statement?",                     LINENUM: GOTO 1370
1330 LINENUM = 10
1340 OPEN FIL$ FOR OUTPUT AS #1
1350 PRINT #1, LINENUM;" Rem--Select Download Character Set":LINENUM=LINENUM+10
1360 PRINT #1, LINENUM;" LPrint chr$(27);chr$(50);":LINENUM=LINENUM+10:CLOSE #1
1370 RETURN
1380 '-------------------------------------------------------------------------
1390 'Subroutine to access display screen dot pattern of a character from ROM
1400 '-------------------------------------------------------------------------
1410 CHAR$ = CHR$(220)
1420 LOCATE 1,1: PRINT SPACE$(70):
1430 LOCATE 1,1
1440 INPUT "Look up what character? ", C$
1450 J% = 0
1460 N% = ASC(C$)
1470 IF (N%=95) OR (N%=103) OR (N%=112) OR (N%=113) OR (N%=121) THEN J%=2
1480 'DRAW BLOCK LETTERS by Robert Metzger 4/83 (part of it, anyway)
1490 DEF SEG=&HFFA6: O%=14
1500 FOR I% = 0 TO 7: M%(I%)=2^(7-I%): NEXT
1510    A% = O% + 8*N%
1520    FOR K% = 0 TO 7: B% = PEEK(A%+K%)
1530            FOR L% = 0 TO 7
1540            IF B% AND M%(L%) THEN 1550 ELSE 1560
1550            LOCATE 11+K%-J%,37+L%: PRINT CHAR$
1560            NEXT L%
1570    NEXT K%
1580 LOCATE 1,1:  PRINT "Now hit <return>.              "
1590 '  Glossary of Internal Variables
1600 'A% = Addresss             B% = Byte
1610 'C$ = Character            I% = Counter
1620 'J% = Descender?           K% = Counter
1630 'L% = Counter              M% = Mask
1640 'O% = Offset
1650 DEF SEG = 0
1660 IF (PEEK(&H410) AND &H30) <> &H30 THEN DEF SEG=&HB800 ELSE DEF SEG=&HB000
1670 RETURN
1680 '-------------------------------------------------------------------------
1690 '  ROUTINE TO PUT THE KEYS BACK TO NORMAL AND EXIT
1700 '-------------------------------------------------------------------------
1710 CLOSE #1 : CLS
1720 KEY 1, "LIST " : KEY 2, "RUN" + CHR$(13) : KEY 3 , "LOAD" + CHR$(34)
1730 KEY 4, "SAVE" + CHR$(34) : KEY 5, "CONT" + CHR$(13) :
1740 KEY 6, CHR$(44) + CHR$(34) + "LPT1" : KEY 7 , "TRON" + CHR$(13)
1750 KEY 8, "TROFF" + CHR$(13) : KEY 9 , "KEY" : KEY 10 , "SCREEN"
1760 KEY ON
1770 END
```

## NEWCHARS.BAS

```bas
10  REM--Select Download Character Set
20  LPRINT CHR$(27);CHR$(50);
30  REM--Redefines a
40 LPRINT CHR$(27);CHR$(37);CHR$(68);CHR$( 97 );
50  LPRINT CHR$(1);CHR$(2);CHR$(4);CHR$(8);CHR$(16);CHR$(32);CHR$(64);CHR$(0);CHR$(64);CHR$(32);CHR$(16);
60  REM--Redefines b
70 LPRINT CHR$(27);CHR$(37);CHR$(68);CHR$( 98 );
80  LPRINT CHR$(16);CHR$(32);CHR$(64);CHR$(0);CHR$(64);CHR$(32);CHR$(16);CHR$(8);CHR$(4);CHR$(2);CHR$(1);
90  REM--Redefines c
100 LPRINT CHR$(27);CHR$(37);CHR$(65);CHR$( 99 );
110  LPRINT CHR$(8);CHR$(0);CHR$(8);CHR$(0);CHR$(8);CHR$(0);CHR$(8);CHR$(0);CHR$(8);CHR$(0);CHR$(8);
 130  Rem--Redefines d
 140 Lprint chr$(27);chr$(37);chr$(65);chr$( 100 );
 150  Lprint chr$(0);chr$(0);chr$(0);chr$(0);chr$(0);chr$(127);chr$(0);chr$(0);chr$(0);chr$(0);chr$(0);
 160  Rem--Redefines e
 170 Lprint chr$(27);chr$(37);chr$(65);chr$( 101 );
 180  Lprint chr$(8);chr$(0);chr$(8);chr$(0);chr$(8);chr$(119);chr$(8);chr$(0);chr$(8);chr$(0);chr$(8);
 190  Rem--Redefines f
 200 Lprint chr$(27);chr$(37);chr$(65);chr$( 102 );
 210  Lprint chr$(8);chr$(0);chr$(8);chr$(0);chr$(8);chr$(112);chr$(8);chr$(0);chr$(8);chr$(0);chr$(8);
 220  Rem--Redefines g
 230 Lprint chr$(27);chr$(37);chr$(65);chr$( 103 );
 240  Lprint chr$(8);chr$(0);chr$(8);chr$(0);chr$(8);chr$(7);chr$(8);chr$(0);chr$(8);chr$(0);chr$(8);
 250  Rem--Redefines h
 260 Lprint chr$(27);chr$(37);chr$(65);chr$( 104 );
 270  Lprint chr$(8);chr$(0);chr$(8);chr$(0);chr$(8);chr$(119);chr$(0);chr$(0);chr$(0);chr$(0);chr$(0);
 280  Rem--Redefines i
 290 Lprint chr$(27);chr$(37);chr$(65);chr$( 105 );
 300  Lprint chr$(0);chr$(0);chr$(0);chr$(0);chr$(0);chr$(119);chr$(8);chr$(0);chr$(8);chr$(0);chr$(8);
 310  Rem--Redefines j
 320 Lprint chr$(27);chr$(37);chr$(65);chr$( 106 );
 330  Lprint chr$(0);chr$(0);chr$(0);chr$(0);chr$(0);chr$(7);chr$(8);chr$(0);chr$(8);chr$(0);chr$(8);
 340  Rem--Redefines k
 350 Lprint chr$(27);chr$(37);chr$(65);chr$( 107 );
 360  Lprint chr$(8);chr$(0);chr$(8);chr$(0);chr$(8);chr$(7);chr$(0);chr$(0);chr$(0);chr$(0);chr$(0);
 370  Rem--Redefines l
 380 Lprint chr$(27);chr$(37);chr$(65);chr$( 108 );
 390  Lprint chr$(8);chr$(0);chr$(8);chr$(0);chr$(8);chr$(112);chr$(0);chr$(0);chr$(0);chr$(0);chr$(0);
 400  Rem--Redefines m
 410 Lprint chr$(27);chr$(37);chr$(65);chr$( 109 );
 420  Lprint chr$(0);chr$(0);chr$(0);chr$(0);chr$(0);chr$(112);chr$(8);chr$(0);chr$(8);chr$(0);chr$(8);
 430  Rem--Redefines o
 440 Lprint chr$(27);chr$(37);chr$(65);chr$( 111 );
 450  Lprint chr$(127);chr$(0);chr$(127);chr$(0);chr$(127);chr$(0);chr$(127);chr$(0);chr$(127);chr$(0);chr$(127);
 460  Rem--Redefines p
 470 Lprint chr$(27);chr$(37);chr$(65);chr$( 112 );
 480  Lprint chr$(95);chr$(0);chr$(123);chr$(0);chr$(95);chr$(0);chr$(123);chr$(0);chr$(95);chr$(0);chr$(123);
 490  Rem--Redefines q
 500 Lprint chr$(27);chr$(37);chr$(65);chr$( 113 );
 510  Lprint chr$(64);chr$(32);chr$(80);chr$(40);chr$(84);chr$(43);chr$(84);chr$(40);chr$(80);chr$(32);chr$(64);
 520  Rem--Redefines r
 530 Lprint chr$(27);chr$(37);chr$(68);chr$( 114 );
 540  Lprint chr$(1);chr$(2);chr$(5);chr$(10);chr$(21);chr$(106);chr$(21);chr$(10);chr$(5);chr$(2);chr$(1);
 550  Rem--Redefines s
 560 Lprint chr$(27);chr$(37);chr$(65);chr$( 115 );
 570  Lprint chr$(65);chr$(34);chr$(0);chr$(20);chr$(0);chr$(127);chr$(0);chr$(20);chr$(0);chr$(34);chr$(65);
 580  Rem--Redefines t
 590 Lprint chr$(27);chr$(37);chr$(65);chr$( 116 );
 600  Lprint chr$(63);chr$(0);chr$(31);chr$(0);chr$(15);chr$(0);chr$(7);chr$(0);chr$(3);chr$(0);chr$(1);
 610  Rem--Redefines u
 620 Lprint chr$(27);chr$(37);chr$(65);chr$( 117 );
 630  Lprint chr$(64);chr$(0);chr$(96);chr$(0);chr$(112);chr$(0);chr$(120);chr$(0);chr$(124);chr$(0);chr$(126);
 640  Rem--Redefines v
 650 Lprint chr$(27);chr$(37);chr$(65);chr$( 118 );
 660  Lprint chr$(1);chr$(0);chr$(3);chr$(0);chr$(7);chr$(0);chr$(15);chr$(0);chr$(31);chr$(0);chr$(63);
 670  Rem--Redefines w
 680 Lprint chr$(27);chr$(37);chr$(65);chr$( 119 );
 690  Lprint chr$(126);chr$(0);chr$(124);chr$(0);chr$(120);chr$(0);chr$(112);chr$(0);chr$(96);chr$(0);chr$(64);
 700  Rem--Redefines x
 710 Lprint chr$(27);chr$(37);chr$(65);chr$( 120 );
 720  Lprint chr$(9);chr$(0);chr$(121);chr$(0);chr$(65);chr$(0);chr$(79);chr$(0);chr$(72);chr$(0);chr$(72);
 730  Rem--Redefines y
 740 Lprint chr$(27);chr$(37);chr$(65);chr$( 121 );
 750  Lprint chr$(125);chr$(0);chr$(125);chr$(0);chr$(1);chr$(0);chr$(127);chr$(0);chr$(85);chr$(42);chr$(0);
 760  Rem--Redefines z
 770 Lprint chr$(27);chr$(37);chr$(68);chr$( 122 );
 780  Lprint chr$(0);chr$(1);chr$(2);chr$(8);chr$(1);chr$(56);chr$(66);chr$(36);chr$(0);chr$(16);chr$(0);
 790  Rem--Redefines n
 800 Lprint chr$(27);chr$(37);chr$(65);chr$( 110 );
 810  Lprint chr$(65);chr$(62);chr$(65);chr$(32);chr$(16);chr$(12);chr$(2);chr$(65);chr$(62);chr$(65);chr$(0);
```

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk 0353

     Volume in drive A has no label
     Directory of A:\

    AMAZING  COM     16076   9-14-84   8:39p
    AMAZING  PAS      9335   9-14-84   8:39p
    ANAGRAM  OKI      1269   7-15-84   4:50p
    BOUNCY   SCN      2972   9-13-84   8:48p
    DECIHEX  ASM      3111   9-14-84   8:44p
    DECIHEX  COM        84   8-19-84   5:46p
    DICT     OKI      2218   7-17-84   8:06p
    FILES    TXT      1800   4-29-85  10:51a
    FILES353 TXT      2048   5-23-85   2:15p
    FONTEDIT BAS      7616   9-17-84   6:07a
    FONTEDIT DOC      2942  10-15-84   8:47a
    INTRO    SCN      2900   9-15-84  11:12a
    KEYDEMO  COM     12899   9-14-84   7:58p
    KEYDEMO  PAS      5769   9-14-84   7:57p
    MAKAMOVI COM     23259   9-15-84  12:21p
    MAKAMOVI DOC      5381  10-15-84   8:47a
    MAKAMOVI PAS     26495   9-15-84  12:20p
    NEWCHARS BAS      4858   9-13-84   4:46p
    NEWCHARS DOC      1039  10-15-84   8:48a
    NOISE    ASM      1912   9-14-84   8:43p
    NOISE    COM        59   9-14-84   8:11p
    OKIGRAFX COM     15767   9-17-84   6:39p
    OKIGRAFX DOC      3583  10-15-84   8:38a
    OKIGRAFX PAS     17080   9-17-84   6:33p
    PIANO    COM     16836   9-15-84   9:17a
    PIANO    PAS     14134   9-15-84   9:17a
    PIANO    TXT       401  10-15-84   8:55a
    SHOWMOVI COM     11981   9-14-84   3:17p
    SHOWMOVI DOC      2031  10-15-84   8:46a
    SHOWMOVI PAS      6228   9-14-84   3:17p
    SQUARE   SCN     17216   9-13-84   8:20p
    TURBO    DOC      1038  10-15-84   8:50a
           32 file(s)     240337 bytes
                           66560 bytes free
