---
layout: page
title: "PC-SIG Library Disk #141"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0141/
machines:
  - id: ibm5160
    type: pcx86
    config: /machines/pcx86/ibm/5160/cga/256kb/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk 0141"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5160" %}

{% comment %}info_begin{% endcomment %}

## Information about "PROGRAMERS UTILITIES #5"

    This disk contains 2 BASIC utilities, a LOTUS 1-2-3 utility, and a DOS
    tool. 123PREP allows you to quickly create a properly formatted input
    file for 1-2-3's IMPORT feature.  AID will reduce or eliminate
    repetitive steps which are usually required in the creating, editing,
    and using of BASIC programs.  SCREENIN provides the BASIC programmer
    with a customizable, generalized screen input program which will
    reduce duplication of BASIC code from program to program (very useful
    if all your programs require some input from the user).  W20 is a
    mini-DOS manager which presents the user with a menu of standard DOS
    file functions (copy, delete, print, etc.) and each file in the
    directory (sorted alphabetically).
    
    System Requirements: BASIC;  Lotus 1-2-3 or clone.
    
    How to Start: Consult the .DOC and README files for directions
    and documentation. To run the BASIC programs, consult the
    directions in GETTING STARTED for your configuration. To run a
    program with the suffix .COM or .EXE, just type its name, i.e.,
    for 123PREP.EXE, type 123PREP <ENTER>.
    
    File Descriptions:
    
    123PREP  DOC  Documentation for 123PREP.EXE
    123PREP  EXE  Converts a simple text file to a 1-2-3 form
    AID      DOC  Documentation for the AID system
    AID      BAT  Batch file for invoking AID
    AID      EXE  Compiled version of AID.BAS
    AID      BAS  A BASIC programming development aid
    SCREENIN BAS  Full-screen formatted input subroutine for BASIC
    SCREENIN DOC  Documentation for SCREENIN.BAS
    W20      COM  Directory "wash" program-list/copy/view/delete files
    READ     ME   Listing of included files
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## AID.BAS

```bas
10 'SAVE"AIDb
11 '**** save"aidadd",a   Use to merge with aidbnew.  If that works ok, then merge with aidb and aide.  Then compile aide. *****
15 ON ERROR GOTO 2950
20 CLS:FALSE = 0:TRUE = NOT FALSE:D$ = "A" :ROW = 20: KEY OFF    'set defaults
30 ' (C) Copyright 1983  Judith R. Epstein
40 ' All Rights Reserved
50 ' ******* AID ******* 4-22-83 ******************************************
60 '==========================================================================
61 DEF SEG = 0: LINEWIDTH = PEEK(&H44A)         'determine screen width
62   DEF SEG: IF LINEWIDTH = 40 THEN TVSET = TRUE ELSE TVSET = FALSE
63 T1$=" AUTOMATIC INDIVIDUALIZED DIRECTORY ":T2$=" by Judith R. Epstein ":T3$=" (C) Copyright 1983 ":T3A$ =" All Rights Reserved "
64 T4$ = " Press any key to continue "
65 GOSUB 2670: GOSUB 2760               'produce box, get opening screen
70  DEF SEG = &H1700        'reserve 4k bytes for subroutine. page C-3,BASIC
80  DATA &h55,&h06,&HB8,&h00,&h17,&h8E,&hC0,&h8B,&hEC,&h8B
90  DATA &h76,&h0C,&h8B,&h04,&h8A,&hE0,&hB0,&h01,&hBB,&h80
100  DATA &h00,&h8B,&h76,&h08,&h8B,&h0C,&h8B,&h76,&h0A,&h8B
110  DATA &h14,&hCD,&h13,&h07,&h5D,&hCA,&h06,&h00
120  RESTORE:FOR I% = 0 TO 37:READ ASM:POKE I%,ASM:NEXT I%
130  SUBNUMVAR%= 0
140  '=========================================================================
160 DIM FKEY$(10)
170 LOCATE ,,0                  'turn off cursor
200 VFIL80 = 1: VDIR= 2:  V = VDIR       'set which path to take-- I'll decide which program to use after it works
205  KEYWORD1$ = "BAS": KEYWORD2$ = "EXE" :KEYWORD$ = KEYWORD1$   '@@@@@@@@@@@
210 K8%=0:I8%=0:A8%=0:B8%=0:U8%=0:L8%=0: Z8$ = ""  'for quicksort
220 DEF FNUP$(X$) = CHR$( ASC(X$) + 32* ( ASC(X$) > 96 AND ASC(X$) < 123 ) )  'mask 1st character of x$ to upper case
250  '-------------------------------------------------------------------------
260  ' set up arrays
270  M%= 112                'maximum # files for double sided. @@@@@@@@@@@@@@@@
280  DIM INFO$(112 ,4) ,STACK%(112)         '@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
290  FOR I%=0 TO M%:FOR J%=0 TO 2:INFO$(I%,J%) = "":NEXT J%:NEXT I%  'initialize JUST USING INFO$ OF 0,1,2 SO DON'T DO 3,4 NOW
300  INFO$(0,0) = " Sorted File Directory  Dos 1.1  Drive "
310  INFO$(0,1) = " Name ": INFO$(0,2) = " Ext ": INFO$(0,3) = " Date ": INFO$(0,4) = " Size "
320  ' use INFO$(I%,0) for flags or storing selected items to be sorted
330  ENTRY = 0
340 '==========================================================================
350  ON V GOSUB 870,3440     'START FILES RIGHT AWAY, BUT GIVE OPTION TO RETURN TO MENU
360 'gosub 2670: gosub 2760     produce box, get opening screen  not here
370  '-------------------------------------------------------------------------
380 ' ++++++++++++++ MENU +++++++++++++++++
390 CLS: KEY OFF:COLOR 0,7:PRINT T1$;:COLOR 7,0:PRINT :PRINT
400           PRINT T2$:PRINT T3$
410 LOCATE  7:PRINT "1.  Description of Program"
420           PRINT "2.  Set the Date and Time"
430           PRINT "3.  Select Drive  [Default A]"
440           PRINT "4.  Describe and Set Function Keys"
450           PRINT "5.  List BASIC Programs on Diskette"
460           PRINT "6.  Exit this Program"
470 LOCATE 20:COLOR 16,7:PRINT " Select the number of your choice ";:COLOR 7,0:PRINT :BEEP
480 N$ = INKEY$:IF N$="" THEN GOTO 480
490 ON INSTR( "123456",N$ ) GOSUB 2230, 560,720,1500,510,540
500 GOTO 390                            ' otherwise go to here
510 'subroutine to decide which part to use to get directory
520 ON V GOSUB 870,3440
530 RETURN
540 :SYSTEM:END:RETURN                     ' subroutine to end the program
550 '==========================================================================
560 ' subroutine to set date and time
570 CLS:COLOR 0,7:PRINT "     Date and Time     ";:COLOR 7,0:PRINT
571 DATECHECK = FALSE: TIMECHECK = FALSE        'reset flags
580 LOCATE 3:PRINT "   DATE","  TIME": PRINT DATE$,TIME$:PRINT:PRINT
590 LOCATE 6:PRINT "Is this today's date ?  (Y or N)  " :N$= INKEY$:IF N$="" THEN GOTO 590 ELSE N$ = FNUP$(N$)
600   IF N$ = "Y"  THEN DA$ = DATE$: GOTO 630
610   IF N$ = "N"  THEN GOTO 620     ELSE GOTO 590
620 LOCATE 8:PRINT STRING$(39," "):LOCATE 7:BEEP: PRINT "Enter the date :    ( mm-dd-yy )":INPUT DA$
621    VALUE$ = DA$:DATECHECK = TRUE: GOSUB 10110
622    IF VALGOOD THEN GOTO 630   ELSE GOTO  620
630 LOCATE 10 :PRINT "Is this the time ?      (Y or N)  " :N$= INKEY$:IF N$="" THEN GOTO 630 ELSE N$ = FNUP$(N$)
640   IF N$ = "Y"  THEN T$ = TIME$: GOTO 670
650   IF N$ = "N"  THEN GOTO 660    ELSE GOTO 630
660 LOCATE 12:PRINT STRING$(39," "):LOCATE 11:BEEP:PRINT "Enter the time :    ( hh:mm:ss )":INPUT T$
661   VALUE$ = T$:TIMECHECK = TRUE: GOSUB 10110
662    IF VALGOOD THEN GOTO 670   ELSE GOTO  660
667 '
668 '
670 DATE$ = DA$: TIME$=T$
680 LOCATE 15: COLOR 0,7:PRINT  "    DATE ","  TIME   ":LOCATE 17:PRINT " ";DATE$,TIME$;" ":COLOR 7,0:PRINT :PRINT
690 LOCATE 19:PRINT "Is this correct ?       (Y or N)":N$ = INKEY$:IF N$=""THEN GOTO 690 ELSE N$ = FNUP$(N$)
700   IF N$ = "Y"  THEN  RETURN ELSE IF N$ = "N" THEN BEEP:GOTO 570 ELSE 690
710 '==========================================================================
720 ' subroutine to set drive
730 CLS:COLOR 0,7:PRINT "    Drive selection    ";:COLOR 7,0:PRINT
740 LOCATE 3:PRINT "The selected drive is now ";:COLOR 0,7:PRINT " ";D$;" "
750 COLOR 7,0:LOCATE 5:PRINT "Do you wish to change it?     (Y or N)"
760 N$ = INKEY$: IF N$ = "" THEN 760 ELSE N$ = FNUP$(N$)
770 IF N$ = "Y" THEN 780    ELSE IF N$ = "N" THEN RETURN ELSE 760
780 LOCATE 7 :PRINT "Select drive  A, B, C or D" :N$=INKEY$:IF N$="" THEN GOTO 780
790 IF N$ = CHR$(13) THEN N$ = "A"
800 N$ = FNUP$(N$): D$ = N$
810 IF D$ <> "A" THEN IF D$ <> "B" THEN IF D$ <> "C" THEN IF D$ <> "D" GOTO 780
820 LOCATE 10:PRINT "The diskette is in drive  ";:COLOR 0,7:PRINT " ";D$ ;" "
830 LOCATE 12:COLOR 7,0:PRINT "Is this correct?              (Y or N)"
840 N$ = INKEY$: IF N$ = "" THEN 840 ELSE N$ = FNUP$(N$)
850 IF N$ = "Y" THEN RETURN ELSE IF N$ = "N" THEN 730 ELSE 840
860 '==========================================================================
870 ' subroutine to list BASIC  programs     @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
880 CLS:WIDTH 80
890      PRINT  "The BASIC programs on this diskette in drive  ";:COLOR 0,7:PRINT " ";D$;" ";:COLOR 7,0:PRINT  " are"  ' .BAS @@@@@
900   '  PRINT  ".EXE BASIC programs on this diskette in drive  ";:COLOR 0,7:PRINT " ";D$;" ";:COLOR 7,0:PRINT  " are" ' .EXE @@@@@
910 '
920  Q$=D$:Q$ = Q$ + ":*.BAS"          ' .BAS @@@@@
930 'Q$=D$:Q$ = Q$ + ":*.EXE"          ' .EXE @@@@@
940 '..........................................................................
950 PLACE = 3:LOCATE PLACE:FILES Q$       'FILE DIRECTORY FOR 80 COLUMNS
960 ROW = PLACE + 19: LOCATE ROW:COLOR 0,7:PRINT " Please stand by ";:COLOR 7,0
970 BEEP:NUM% =0                          'Set up for proper number
980 FOR R%= PLACE  TO PLACE  + 18         'ROW
990 FOR I%= 0 TO 5:FOR J%= 0 TO 3
1000 C%= ( 9 + J%) + I%*13                 'EXTENSIONS HERE
1010 LOCATE R%,C%:PRINT CHR$(32)           'BLANK THEM OUT
1020  IF J%=1 THEN NUM%=NUM%+1:NUMPLACE=C% 'Set a number
1030 NEXT J%: GOSUB 1920:IF NONUM THEN I%=5:R%=PLACE +18:GOTO 1050     'If no program listed, no number
1040 GOSUB 1980                             'Print a number
1050 NEXT I%:NEXT R%:PRINT:BEEP             'ROOM FOR 112 FILES, done
1060 LOCATE ROW :PRINT STRING$(50," ") :GOSUB 1080:RETURN
1070 '==========================================================================
1080 ' subroutine to decide to run,load,new,or return to menu @@@@@@@@@@@@@@@@@@
1090 LOCATE ROW   :PRINT STRING$(39," ")
1100 LOCATE ROW   :COLOR 31,0:PRINT "R";:COLOR 7,0:PRINT "un   ";
1110               COLOR 31,0:PRINT "L";:COLOR 7,0:PRINT "oad   ";    '.BAS @@@@@
1120               COLOR 31,0:PRINT "N";:COLOR 7,0:PRINT "ew   ";     '.BAS @@@@@
1130 '             COLOR 31,0:PRINT "C";:COLOR 7,0:PRINT "ontinue   ";'.EXE @@@@@
1140               COLOR 7,0 :PRINT "e";:COLOR 31,0:PRINT "X";:COLOR 7,0:PRINT "it to menu "
1150 N$ = INKEY$: IF N$ = "" THEN GOTO 1150 ELSE N$ = FNUP$(N$)
1160  ON INSTR("RLNX", N$) GOTO 1240,1440,1390,1190       '.BAS @@@@@@@@@@@@@@@@@@
1170 'ON INSTR("RCX", N$) GOTO 1240,1210,1190          '.EXE @@@@@@@@@@@@@@@@@@
1180 GOTO 1100
1190 RETURN
1200 '=========================================================================
1210 'routine to return to system, DOS for .EXE  @@@@@@@@@@@@@@@@@@@@@@@@@@@
1220 SYSTEM
1230 '=========================================================================
1240 ' routine to run a program
1250 ON V GOSUB 2050,4940                          'get name of program
1260 CLS: COLOR 0,7:PRINT " ";SPEC$;" will be run ":COLOR 7,0
1270 PRINT :PRINT "Press F2 to return to this program"
1271 PRINT "after running selected program"
1280 KEY 2,"run "+ CHR$(34) + "aid" +CHR$(13)
1290 PRINT : PRINT "Which monitor do you want?  ":PRINT "Monochrome or Color (M or C)"
1300 N$ = INKEY$: IF N$ = "" THEN 1300 ELSE N$ = FNUP$(N$)
1310 IF N$ = "C" THEN 1320    ELSE IF N$ = "M" THEN 1350 ELSE 1300
1320 KEY OFF:CLS:LOCATE ,,0:DEF SEG = 0:POKE &H410,(PEEK(&H410) AND &HCF) OR &H10       '40 col color graphics screen
1330 DEF SEG:SCREEN 1:SCREEN 0:WIDTH 80:WIDTH 40:LOCATE ,,1,6,7
1340 OUT 980,2:OUT 981,43: GOTO 1370        'move screen
1350 KEY OFF:CLS:LOCATE ,,0:DEF SEG = 0:POKE &H410,(PEEK(&H410)         ) OR &H30       '80 col monochrome     screen
1360 DEF SEG:SCREEN 1:SCREEN 0:WIDTH 40:WIDTH 80:LOCATE ,,1,12,13
1361 GOTO 1370
1370 RUN SPEC$: END
1380 '=========================================================================
1390 ' routine to create a new program            '.BAS @@@@@@@@@@@@@@@@@@@@@@@
1400 GOSUB 560: GOSUB 1500                        'set time,date,function keys
1410 CLS:COLOR 0,7:PRINT " The computer is ready for a new program " :COLOR 7,0:PRINT
1420  NEW: END                                   '.BAS @@@@@@@@@@@@@@@@@@@@@@@
1430 '=========================================================================
1440 ' routine to load and modify a program      '.BAS @@@@@@@@@@@@@@@@@@@@@@@
1450 ON V GOSUB 2050,4940                          'get name of program
1460 GOSUB 560: GOSUB 1500                        'set time,date,function keys
1470 CLS: COLOR 0,7:PRINT " " ;SPEC$;" will be loaded ":COLOR 7,0:PRINT
1480  LOAD SPEC$: END                             '.BAS @@@@@@@@@@@@@@@@@@@@@@
1490 '=========================================================================
1500 ' subroutine to set soft keys
1510 CLS:COLOR 0,7:PRINT "             Function keys             ":COLOR 7,0:PRINT :PRINT
1520 FOR K%= 1 TO 10: FKEY$(K%) = "F" + MID$( STR$(K%), 2): NEXT K%
1530 K%= 0
1540 '                 6789012345678901234567890123456789
1550 GOSUB 1880:PRINT " Blanks line, then types LIST "
1560 GOSUB 1880:PRINT " Blanks line, then types RUN +<CR>"
1570 GOSUB 1880:PRINT " Blanks line, then types LOAD" ;CHR$(34)
1580 GOSUB 1880:PRINT " Blanks screen, then saves program"
1590 COLOR 0,7 :PRINT STRING$(5," ");
1600 COLOR 7,0 :PRINT "        in the remark statement 10"
1610 COLOR 0,7 :PRINT STRING$(5," ");
1620 COLOR 7,0 :PRINT "        i.e., 10 'SAVE";CHR$(34);"PROGRAMNAME"
1630 GOSUB 1880:PRINT " Types CONT   + <CR>"
1640 GOSUB 1880:PRINT " Types ,";CHR$(34);"LPT1 + <CR>"
1650 GOSUB 1880:PRINT " Types TRON   + <CR>""
1660 GOSUB 1880:PRINT " Types TROFF  + <CR>"
1670 GOSUB 1880:PRINT " Blanks line, then renumbers"
1680 COLOR 0,7:PRINT STRING$(5," ");
1690 COLOR 7,0:PRINT  "       the program in memory"
1700 GOSUB 1880:PRINT " Blanks line, then types EDIT":PRINT :PRINT
1710 KEY 1, CHR$(27)+"list "                             'blank line,then list
1720 KEY 2, CHR$(27) +"run"+ CHR$(13)                    'automatic run
1730 KEY 3, CHR$(27) + "load"   + CHR$(34)               'blank line, then load
1740 KE1$ =CHR$(27)+CHR$(31)+CHR$(27)+CHR$(30)           'move cursor [too many characters to use]
1750 KE2$ =CHR$(12)+"edit 10"+CHR$(13)+STRING$(4,8)+CHR$(13) 'save program in remark at 10   [10 'SAVE"programname]
1760 KEY 4, KE2$
1770 KEY 5, "CONT"   + CHR$(13)                          'as originally
1780 KEY 6, ","+CHR$(34)+"LPT1:"+CHR$(34) + CHR$(13)     'as originally
1790 KEY 7, "TRON"   + CHR$(13)                          'as originally
1800 KEY 8, "TROFF"  + CHR$(13)                          'as originally
1810 KEY 9, CHR$(27)+"renum" + CHR$(13)                  'automatic renumber
1820 KEY 10,CHR$(27) + "EDIT "                           'edit
1821 DEF SEG = 0:POKE &H417,(PEEK (&H417) AND &HDF)         'set cursor keys on for editing
1830 KEY ON:PRINT :COLOR 16,7:PRINT T4$;STRING$(11," ");:COLOR 7,0:PRINT
1840 N$ = INKEY$: IF N$ = "" THEN 1840 ELSE  RETURN
1850 'key 8,chr$(13) +chr$(14) + chr$(9) +"'"            'edit whole program, line by line, to add remarks [alternate use of F8]
1860                                                     '<R>+end of next line + tab + '
1870 '-------------------------------------------------------------------------
1880 'subroutine to reverse field on function keys
1890 K%= K%+1:FK$ = FKEY$(K%):IF K% < 10 THEN FK$ = FK$ + STRING$(2," ") ELSE IF K% = 10 THEN FK$ = FK$ + STRING$(1," ")
1900 COLOR 0,7:PRINT " ";FK$;:COLOR 7,0:RETURN
1910 '=========================================================================
1920 ' Subroutine to see if a file name exists at this location
1930 ' If not, then first character is blank and no need to print a number.
1940 ISFILE = SCREEN(R%,NUMPLACE-9)
1950 IF (ISFILE =32) THEN NONUM = TRUE ELSE NONUM = FALSE
1960 RETURN
1970 '=========================================================================
1980 'subroutine to print numbers after program name
1990 LOCATE R%,NUMPLACE  : COLOR 0,7
2000 PRONUM$=MID$(STR$(NUM%),2):IF VAL(PRONUM$) <10 THEN PRONUM$ = " "+PRONUM$
2010   IF VAL(PRONUM$) <100 THEN PRONUM$ =PRONUM$ + " "
2020 PRINT  PRONUM$ ;:COLOR 7,0:PRINT        'Print number with sign stripped
2030 RETURN
2040 '=========================================================================
2050 'subroutine to get name of program from number N$ on screen
2060 'NUMROWS = (PLACE +18) -(PLACE +0) +1: NUMCOLS = 6
2070 LOCATE ROW+1:PRINT "Enter number of program ==>";:LOCATE ROW+1,30:INPUT " ",N$
2080 IF LEN(N$) >  6 THEN BEEP: GOSUB 2200:GOTO 2070      'too much space
2090 IF VAL(N$) >32767 THEN BEEP: GOSUB 2200:GOTO 2070    'integers <=32767
2100 NN%  = VAL(N$): IF NN% <1 OR NN% >= NUM% THEN BEEP: GOSUB 2200: GOTO 2070 'NUM% is already at a blank position
2110 R% = PLACE +INT((NN%-1) /6): I% = (NN% -1) MOD 6: C% =1 +( I%*13 )
2120 PROGNAME$="":FOR J% = 0 TO 7:PROGNAME$= PROGNAME$+CHR$(SCREEN(R%,C% +J%)):NEXT J%
2130 LOCATE ROW+1,35 :PRINT " ";:COLOR 0,7:PRINT " "+PROGNAME$+" ";:COLOR 7,0:PRINT "  Is this correct?  (Y or N)"
2140 N$=INKEY$:IF N$="" THEN GOTO 2140 ELSE N$ = FNUP$(N$)
2150  IF N$ = "N"  THEN GOSUB 2200:GOTO 2070
2160  IF N$ = "Y"  THEN GOTO 2170   ELSE GOTO 2140
2170 SPEC$ = D$ + ":" + PROGNAME$
2180  RETURN
2190 '.........................................................................
2200 'subroutine to blank out row
2210  LOCATE ROW+1,28:PRINT STRING$(50," "):RETURN
2220 '=========================================================================
2230 ' subroutine to describe program
2240 CLS:COLOR 0,7:PRINT "        PROGRAM DESCRIPTION         ":COLOR 7,0:PRINT
2250  PRINT "  This program  will be run whenever  "
2260  PRINT "the  computer is  turned  on  or the  "
2270  PRINT "system reset. The AUTOEXEC file must  "
2280  PRINT "contain  the  lines  AID  for   .EXE  "
2290  PRINT "programs  and  BASICA  AID  for .BAS  "
2300  PRINT "programs.                             " :PRINT
2310  PRINT "  The file directory on drive A will  "
2320  PRINT "be listed.  You may decide to Run  a  "
2330  PRINT "program,  Load and modify a program,  "
2340  PRINT "create a New program, or eXit to the  "
2350  PRINT "menu.  By  picking  a   number,  the  "
2360  PRINT "proper program to be  Run or  Loaded  "
2361  PRINT "will  be  selected.                   ":PRINT
2370 COLOR 16,7:PRINT T4$;STRING$(9," ");:COLOR 7,0:PRINT
2380 N$ = INKEY$:IF N$ = "" THEN 2380
2390 CLS
2400  PRINT "  If a program is to be Run, it  will "
2410  PRINT "be selected from the  disk  and  Run. "
2420  PRINT "You  have  the option  to switch to a "
2430  PRINT "color monitor first.                  ":PRINT
2440  PRINT "  If a program  is  to be  Loaded, it "
2450  PRINT "will be selected from the disk.   The "
2460  PRINT "current date, time, and function keys "
2470  PRINT "will be set, and the program  Loaded. ":PRINT
2480  PRINT "  If a New program is to be  created, "
2490  PRINT "the current date, time and  function  "
2500  PRINT "keys will be set, and memory cleared. ":PRINT
2510  PRINT "  If eXit  is selected,  you will be  "
2520  PRINT "returned to the main menu  where the  "
2530  PRINT "same options  are available, as well  "
2540  PRINT "as  the  option  to  select  another  "
2550  PRINT "drive.  The diskette may  be changed  "
2560  PRINT "at this point also.                   ":PRINT
2570                    'The diskette may be changed at this point also
2580 COLOR 16,7:PRINT T4$;STRING$(9," ");:COLOR 7,0:PRINT
2590 N$ = INKEY$:IF N$ = "" THEN 2590 ELSE RETURN
2600 '=========================================================================
2610 ' The way the files are formatted on the screen:  [for 80 columns]
2620 ' PLACE = 3: R = PLACE +0 TO PLACE +18   [ these are the rows ]
2630 ' I = 0 TO 5:  J = 0 TO 3  [ I for 6 columns across, J for .ext ]
2640 ' C = (9+J) + (I*13)       [ this is where extension is ]
2650 ' C = 1 + (I*13)  TO 8 + (I*13)  [ this is where name is ]
2660 '=========================================================================
2670 'subroutine to produce a box around the screen----- row,column   1,1   23,1    23,39    1,39
2671   RETURN                           'never mind the box
2672 '   instead of 39 and 38, use LINEWIDTH -1 and LINEWIDTH - 2
2680 CLS:LOCATE  1,1  :PRINT "╔":FOR R = 2 TO 22 :      LOCATE R,1 :PRINT "║":NEXT R
2690     LOCATE 23,1  :PRINT "╚":FOR C = 2 TO 38 :      LOCATE 23,C:PRINT "═":NEXT C
2700     LOCATE 23,39:PRINT "╝":FOR R = 22 TO 2 STEP -1:LOCATE R,39:PRINT "║":NEXT R
2710     LOCATE  1,39:PRINT "╗":FOR C = 38 TO 2 STEP -1:LOCATE 1,C :PRINT "═":NEXT C
2720  '  LOCATE 20,(39-LEN(T4$)     )/2:    COLOR 16,7:PRINT T4$;:COLOR 7,0:PRINT
2730  '  N$ = INKEY$: IF N$ = "" THEN GOTO 2109 ELSE RETURN
2740 RETURN
2750 '=========================================================================
2760 'subroutine to print opening screen
2770  COL = 3:LOCATE 3,COL
2780 LOCATE,COL:PRINT " ▀▀▀▀▀▀▀   ▀▀▀▀▀▀▀   ▀▀▀▀▀▀▀▀▀▀
2790 LOCATE,COL:PRINT " ▀▀▀▀▀▀▀   ▀▀▀▀▀▀▀   ▀▀▀▀▀▀▀▀▀▀▀
2800 LOCATE,COL:PRINT " ▀▀   ▀▀     ▀▀▀       ▀▀▀   ▀▀▀▀
2810 LOCATE,COL:PRINT " ▀▀   ▀▀     ▀▀▀       ▀▀▀    ▀▀▀▀
2820 LOCATE,COL:PRINT " ▀▀▀▀▀▀▀     ▀▀▀       ▀▀▀     ▀▀▀▀
2830 LOCATE,COL:PRINT " ▀▀   ▀▀     ▀▀▀       ▀▀▀     ▀▀▀▀
2840 LOCATE,COL:PRINT " ▀▀   ▀▀     ▀▀▀       ▀▀▀    ▀▀▀▀
2850 LOCATE,COL:PRINT " ▀▀   ▀▀     ▀▀▀       ▀▀▀   ▀▀▀▀
2860 LOCATE,COL:PRINT " ▀▀   ▀▀   ▀▀▀▀▀▀▀   ▀▀▀▀▀▀▀▀▀▀▀
2870 LOCATE,COL:PRINT " ▀▀   ▀▀   ▀▀▀▀▀▀▀   ▀▀▀▀▀▀▀▀▀▀
2880  LOCATE 15,(39-LEN(T1$) )/2:COLOR 0,7:PRINT T1$;:COLOR 7,0:PRINT :PRINT
2890  LOCATE 17,(39-LEN(T2$)    )/2:    PRINT T2$
2900  LOCATE 19,(39-LEN(T3$)    )/2:    PRINT T3$
2910  LOCATE 20,(39-LEN(T3A$)   )/2:    PRINT T3A$
2920 '
2930 FOR PAUZ = 1 TO 1500: NEXT :RETURN         'leave screen on,then continue
2940 '=========================================================================
2950 'routine for errors
2960 IF (ERR=71) THEN GOTO  3080
2970 IF (ERR=72) THEN GOTO  3140
2980 IF (ERR=64) THEN GOTO  3230
2990 IF (ERR=53) THEN GOTO  3310
3000 COLOR 0,7:PRINT " ERROR NUMBER = ";ERR; STRING$(13," "):PRINT " ERROR OCCURRED AT LINE = ";ERL;" "
3010 PRINT " Please notify me ! "; STRING$(12," "):COLOR  7,0:PRINT:BEEP ' error not specified in program yet
3020 PRINT " Note well the conditions under which "
3030 PRINT " the error occurred and its number     "
3040 PRINT " Judy Epstein, 312-432-4973 "
3050 PRINT " 3303 Dato Ave. "
3060 PRINT " Highland Park, Ill. 60035"
3070 END  ' 123456789012345678901234567890123456789
3080 '------ error routine  if disk not ready ---------
3090 COLOR 0,7:PRINT " The disk drive door is open or a      "
3100 PRINT " diskette is not in the drive.  Place  "
3110 PRINT " a diskette in the drive and shut door ";:COLOR 7,0:PRINT
3120 PRINT :COLOR 16,7:PRINT T4$;:COLOR 7,0:PRINT :BEEP
3130 N$ = INKEY$: IF N$ = "" THEN GOTO 3130 ELSE RESUME 390
3140 '------ error routine  if disk media error --------
3150 COLOR 0,7:PRINT " The diskette is probably bad.         "
3160 PRINT " Insert another diskette in the drive. ": PRINT
3170 PRINT " (Copy any existing files on the bad   "
3180 PRINT " diskette to a new diskette. Re-format "
3190 PRINT " the  bad  diskette.  If formatting    "
3200 PRINT " fails, discard it.)                   ";:COLOR 7,0:PRINT
3210 PRINT :COLOR 16,7:PRINT T4$;:COLOR 7,0:PRINT :BEEP
3220 N$ = INKEY$: IF N$ = "" THEN GOTO 3220 ELSE RESUME 390
3230 '------ error routine  if bad file name -----------
3240 COLOR 0,7:PRINT " An invalid name is used on  this      "
3250 PRINT " diskette. Insert another diskette     "
3260 PRINT " in the drive and shut the door.       " :PRINT
3270 PRINT " (Check the names later with a DIR     "
3280 PRINT " command under DOS or FILES in BASIC.  ";:COLOR 7,0:PRINT
3290 PRINT :COLOR 16,7:PRINT T4$;:COLOR 7,0:PRINT :BEEP
3300 N$ = INKEY$: IF N$ = "" THEN GOTO 3300 ELSE RESUME 390
3310 '------ error routine  if file not found ----------
3320 'There are no .EXE or .BAS files on disk
3330 'If no .EXE , go to SYSTEM, then from there go to .BAS version @@@@@@@@@@
3340 ' system                                               ' @@@@@@@@@@@@@@@@
3350 COLOR 0,7:PRINT " There are no program files with .BAS  "
3360 PRINT " or .EXE extensions on drive ";D$;STRING$( 9," ")     '.BAS @@@@@@@@@@@@@@@@
3370 PRINT " Insert a diskette containing program  "
3380 PRINT " files with .BAS or .EXE extensions.   "    '.BAS @@@@@@@@@@@@@@@@
3390 PRINT :COLOR 16,7:PRINT T4$;:COLOR 7,0:PRINT :BEEP '.BAS @@@@@@@@@@@@@@@@
3400 N$ = INKEY$: IF N$ = "" THEN GOTO 3400 ELSE RESUME 390 '.BAS @@@@@@@@@@@@
3410 '=========================================================================
3420 '=========================================================================
3430 '=========================================================================
3440 ' subroutine to get directory, sort, display, select
3450 '
3460 GOSUB 3570                 'get directory, store entries
3470 GOSUB 4150                 'sort it
3480 GOSUB 4550                 'display it
3490 ' don't need these subs here.  Want to go back
3500 'GOSUB 6700                'decide what to do, called from sub 6030
3510 'GOSUB 6340                'select #,called from run and load subs
3520 RETURN
3530 '=========================================================================
3540   ' subroutine to print a message
3550   CLS:LOCATE 2  :COLOR 0,7:PRINT MESSAGE$;:COLOR 7,0:PRINT " " : RETURN
3560 '=========================================================================
3570 'subroutine to read FAT and directory entries.  Needs 96K
3580 ' D$ is drive from main routine
3590  ENTRY% = 0:  DEF SEG = &H1700             'reset to area of subroutine for peeks and pokes
3600 ON INSTR("ABCD",D$) GOTO 3620,3630,3640,3650
3610 PRINT "Drive is "; D$: BEEP:BEEP:GOTO 3010   'else come here.  Drive should have been set before to A,B,C,D
3620 DR = 0:GOTO 3660      ' B%
3630 DR = 1:GOTO 3660
3640 DR = 2:GOTO 3660
3650 DR = 3:GOTO 3660
3660 'message$ = " The directory is now being read ": gosub 3540  'no,leave opening screen
3670 A% = 2: B% = DR: C% = 2            'A% = 2 for read, 3 for write
3680 CALL SUBNUMVAR%(A%,B%,C%)   'change to CALL ABSOLUTE (A%,B%,C%,SUBNUMVAR%) FOR COMPILER
3690 ' return from machine language program
3700 ' check status of drive
3710 IF PEEK(&H80) = &HFF THEN DOUBLESIDED = TRUE ELSE IF PEEK(&H80) = &HFE THEN DOUBLESIDED = FALSE ELSE GOTO 3730
3720 GOTO 3830
3730 ' routine for error message
3740 CLS:COLOR 0,7:PRINT "    One of the following has occurred: "
3750               PRINT " 1. The  diskette  is  not  formatted. "
3760               PRINT " 2. The  disk  drive  door  is   open. "
3770               PRINT " 3. The   drive   does   not    exist. "
3780 PRINT :       PRINT "    Please get another diskette, shut  "
3790               PRINT "    the door, or select another drive  "
3800  BEEP:PRINT :PRINT :PRINT T4$: COLOR 7,0
3810  N$=INKEY$:IF N$ = "" THEN 3810 ELSE GOTO 390
3820 '-------------------------------------------------------------------------
3830 ' now get info from tracks about directory
3840 HEAD = 0:TRACK = 0: FOR SECTOR = 4 TO 7: GOSUB 3910:NEXT SECTOR   'single
3850 IF NOT DOUBLESIDED THEN 3880
3860 HEAD = 0:TRACK = 0:     SECTOR = 8: GOSUB 3910                    'double
3870 HEAD = 1:TRACK = 0: FOR SECTOR = 1 TO 2: GOSUB 3910:NEXT SECTOR   'double
3880 RETURN
3890 GOSUB 4550              'display
3900 '=========================================================================
3910 ' subroutine to read the info from directory
3920 B% = (HEAD*256) + DR: C% = (TRACK*256) + SECTOR
3930 CALL SUBNUMVAR%(A%,B%,C%)   'change to CALL ABSOLUTE (A%,B%,C%,SUBNUMVAR%) FOR COMPILER
3940 GOSUB 3960:RETURN
3950 '=========================================================================
3960 ' subroutine to get info from sectors
3970 FOR X% = 0 TO 511 STEP 32: GOSUB 3990:NEXT X% :RETURN
3980 '
3990 F$ = "":IF PEEK(&H80 +X%) = &HE5 THEN 4120 ELSE ENTRY% = ENTRY% + 1   'erased
4000          FOR Y% = 0 TO 7: P = PEEK(&H80 +X%+Y%): F$ = F$ + CHR$(P):NEXT Y%
4010     INFO$(ENTRY%,1) = F$             'name
4020 F$ = "":FOR Y% = 8 TO 10: P = PEEK(&H80 +X%+Y%): F$ = F$ + CHR$(P):NEXT Y%
4030     INFO$(ENTRY%,2) = F$             'extension
4040 'MONTH = (PEEK(&H99+X%) AND 1 )*8 + ((PEEK(&H98+X%) AND 224)/32)
4050 'IF MONTH < 10 THEN MONTH$ = "0"+ RIGHT$(STR$(MONTH),1) ELSE MONTH$ = RIGHT$(STR$(MONTH),2)
4060 'DAY = (PEEK(&H98+X%) AND 31)
4070 'IF DAY   < 10 THEN DAY$   = "0"+ RIGHT$(STR$(DAY  ),1) ELSE DAY$   = RIGHT$(STR$(DAY  ),2)
4080 'YEAR$ = RIGHT$(STR$(INT(PEEK(&H99+X%)/2) + 1980),4)
4090 'INFO$(ENTRY%,3) = MONTH$ + "/" + DAY$ + "/" + YEAR$
4100 'FILESIZE# = 0:  FOR Y% = 0 TO 3:FILESIZE# = FILESIZE# + (PEEK(&H9C+X%+Y%)*256^Y%): NEXT Y%
4110 'INFO$(ENTRY%,4) = STR$(FILESIZE#)
4120 RETURN
4130 '=========================================================================
4140 '========================================================================
4150 ' sort subroutine
4160 ' table arrangement of INFO$
4170 '          0       1       2       3       4
4180 '   0    title    name     ext    date     size
4190 '   1    flag   xxxxxxxx   xxx   mm/dd/yy  ########
4200 '   2    flag   xxxxxxxx   xxx   mm/dd/yy  ########
4210 '   etc
4230 NUMBER% = 0
4250 'set up flagged entries
4260 FOR I% = 1 TO ENTRY%: IF INFO$(I%,2) = KEYWORD$ THEN NUMBER% = NUMBER% +1: INFO$(NUMBER%,0) =INFO$(I%,1) ELSE 4270  '@@@@0@
4270  NEXT I%
4280            ' have files with extension of KEYWORD$ flagged in INFO$(I%,0).  Just sort them. NUMBER% is how many of them
4290 IF NUMBER%  = 0 THEN BASPROGS = FALSE:RETURN
4300 IF NUMBER% >= 1 THEN BASPROGS = TRUE
4310 IF NUMBER%  = 1 THEN RETURN              'only one. No need to sort.
4320 GOSUB 4350 :RETURN
4330 '------------------------------------------------------------------------
4340 ' entries to be sorted are in INFO$(number%,0).   Stack holds pointers.
4350 ' quicksort        quite fast !!!
4355 'message$ = " The programs are now being sorted ": gosub 3540  'no, leave opening screen
4360 K8%=0: I8%=0
4370   STACK%(I8%+1) = 1: STACK%(I8%+2) = NUMBER%
4380 K8% = K8% +1
4390     IF K8% = 0 THEN RETURN         'sorted
4400 K8% = K8% -1: I8% = K8% + K8%
4410   A8% = STACK%(I8%+1): B8% = STACK%(I8%+2)
4420   Z8$ = INFO$(A8%,0): U8% = A8%:L8% = B8% +1
4430 L8% = L8% -1
4440    IF L8% = U8% THEN  4490
4450    IF Z8$ <= INFO$(L8%,0) THEN 4430   ELSE INFO$(U8%,0) = INFO$(L8%,0)
4460 U8% = U8% +1
4470    IF L8% = U8% THEN 4490
4480   IF Z8$ >=INFO$(U8%,0) THEN 4460 ELSE INFO$(L8%,0)=INFO$(U8%,0):GOTO 4430
4490 INFO$(U8%,0) = Z8$
4500    IF B8%-U8%>=2 THEN I8%=K8%+K8%:STACK%(I8%+1)=U8%+1:STACK%(I8%+2)=B8%  :K8%= K8%+1
4510    IF L8%-A8%>=2 THEN I8%=K8%+K8%:STACK%(I8%+1)=A8%  :STACK%(I8%+2)=L8%-1:K8%= K8%+1
4520 GOTO 4390
4530 '========================================================================
4540 '========================================================================
4550 ' display subroutine
4560 IF NOT BASPROGS THEN IF KEYWORD$ = KEYWORD2$ THEN GOTO 1210  'no .EXE progs
4570 IF  NOT BASPROGS THEN CLS: COLOR 0,7:PRINT " There are no BASIC programs on disk. ":PRINT " Select another diskette ";STRING$(13," "):PRINT
4580 IF NOT BASPROGS THEN COLOR 16,7: PRINT T4$;:COLOR 7,0:PRINT
4590 IF NOT BASPROGS THEN N$ =INKEY$: IF N$ = "" THEN 4590 ELSE GOTO 390
4600 '
4610 ' there are NUMBER BASIC programs on this diskettte
4620 GOSUB 4880                 'clear screen, print title
4630 NPG  = 32: NUMPAGES% = INT ((NUMBER%-1)/NPG ) +1
4640 FORM1$ = "########   ":FORM2$ = "&"
4650 PAGE% = 0 : L% = 2: C1% = 1:C2% = 20
4660 FOR I% = 1 TO NUMBER%
4670 PAGE% = INT ( (I% -1)/ NPG) +1
4680 N1% =INT((NPG/2)* (2*PAGE%-1)):  N2% = INT((NPG/2)* (2* PAGE%) )  'bottom of each column
4690 IF I% = N1% +1 THEN L% = 2                         'to start second column
4700 L% = L% +1
4710 IF I% < = N1% THEN C% = C1% ELSE C% = C2%          'which column
4720 LOCATE L%,C%: PRINT USING FORM1$; I%; :PRINT USING FORM2$;INFO$(I%,0)
4730 IF I% = N2% THEN 4750                              'allow a pause
4740 GOTO 4800
4750 IF NUMPAGES%= 1 THEN 4800                          'don't need to scroll
4760   GOSUB 4920
4770 N$ = INKEY$: IF N$ = "" THEN 4770
4780 IF N$ = CHR$(13) THEN  GOSUB 4880: L%= 2:GOTO 4800        '   <==|
4790 IF N$ = CHR$(27) THEN  GOSUB 5090:RETURN  ELSE GOTO 4770  '   <ESC>
4800 NEXT I%
4810 ' do you want to scroll again
4820 IF NUMPAGES% = 1 THEN GOSUB 5090 :RETURN            'don't need to scroll
4830   GOSUB 4920
4840 N$ = INKEY$: IF N$ = "" THEN 4840
4850 IF N$ =CHR$(13) THEN  GOTO 4620
4860 IF N$ =CHR$(27) THEN GOSUB 5090:RETURN   ELSE GOTO 4840
4870 '------------------------------------------------------------------------
4880 ' subroutine to clear screen,print title
4890 CLS: PRINT " The BASIC programs on drive ";:COLOR 0,7:PRINT " ";D$;" ";:COLOR 7,0: PRINT " are ": RETURN
4900 '------------------------------------------------------------------------
4910 'subroutine to print options
4920 LOCATE 20:COLOR 0,7:PRINT " press ESC to select or <──┘ to scroll ";:COLOR 7,0:PRINT: RETURN       'alt 196,217
4930 '========================================================================
4940 ' subroutine to get name of program from info$(I%,0)
4950 ROW = 20
4960 LOCATE ROW+1:PRINT "Enter number of program ==>";:LOCATE ROW+1,30:INPUT " ",N$
4970 IF LEN(N$) >  6 THEN BEEP: GOTO 5010                 'too much space
4980 IF VAL(N$) >32767 THEN BEEP:          :GOTO 5010     'integers <=32767
4990 IF LEN(N$) = 0  THEN BEEP: GOSUB 4550: GOTO 4960
5000 NN% = VAL(N$):IF NN% <1 OR NN% >  NUMBER% THEN BEEP: GOTO 5010 ELSE GOTO 5020
5010 LOCATE ROW+ 1,28:PRINT STRING$(13," ") :LOCATE ROW +2:PRINT STRING$(40," "):GOTO 4960  'use only valid numbers
5020 PROGNAME$=INFO$(NN%, 0 )
5030 LOCATE ROW+2,1:COLOR 0,7:PRINT " "+PROGNAME$+" ";:COLOR 7,0:PRINT " Is this correct?  (Y or N)"
5040 N$=INKEY$:IF N$="" THEN GOTO 5040 ELSE N$ = FNUP$(N$)
5050 IF N$ = "N" THEN LOCATE ROW+ 2, 1:PRINT STRING$(40," ") :LOCATE ROW +1,28:PRINT STRING$(13," "):GOTO 4960  'use only desired names
5060  IF N$ = "Y"  THEN GOTO 5070   ELSE GOTO 5040
5070 SPEC$ = D$ + ":" + PROGNAME$ : RETURN
5080 '=========================================================================
5090 ' subroutine to decide what to do-- R,L,N,X
5100  GOSUB 1080: IF N$ = "X" THEN GOTO 360 ELSE RETURN
5110 '=========================================================================
10100 ' ====================================================================================================================
10110 ' subroutine to check for valid time and date entries
10120 VALGOOD = FALSE: SLASHF = FALSE: DASHF = FALSE: COLONF = FALSE
10130 LVALUE = LEN (VALUE$): IF LVALUE = 0 OR LVALUE > 10 THEN VALGOOD = FALSE:RETURN      'no entry or too long
10140 FOR INDEX = 1 TO LVALUE :VL = ASC (MID$ (VALUE$,INDEX,1) )
10150 IF ( VL >=47 AND VL <=58 )  OR VL = 45 THEN GOTO  10170 ELSE VALGOOD = FALSE:RETURN  'entries are numbers,/,-,or :
10160 ' --------------------------------------------------------------------------------------------------------------------
10170 NEXT
10180 ' GOOD. All characters are valid.  Now check for proper characters.
10190 IF DATECHECK THEN GOSUB 10230: DATECHECK = FALSE: RETURN
10200 IF TIMECHECK THEN GOSUB 10480: TIMECHECK = FALSE: RETURN
10210 RETURN
10220 ' ====================================================================================================================
10230 ' subroutine to check the date entries
10240 BEGP = 1: SEL = INSTR(BEGP,VALUE$,"/")
10250 IF SEL = 0 THEN SLASHF = FALSE ELSE SLASHF = TRUE
10260 IF SLASHF THEN SS$ = "/": GOTO  10310
10270           SEL = INSTR(BEGP,VALUE$,"-")
10280 IF SEL = 0 THEN DASHF  = FALSE ELSE DASHF  = TRUE
10290 IF DASHF  THEN SS$ = "-": GOTO 10310 ELSE VALGOOD = FALSE: RETURN
10300 ' --------------------------------------------------------------------------------------------------------------------
10310 '  GET DATE.  If here, then sel is first position of / or -
10320 IF SLASHF AND DASHF THEN VALGOOD = FALSE: RETURN
10330 BEGP = BEGP: ENDP = SEL -1: UPLIM = 12: LOLIM = 1    'months
10340 GOSUB 10650 :IF VALGOOD = FALSE THEN RETURN
10350 BEGP = SEL +1 : SEL = INSTR(BEGP,VALUE$,SS$)
10360 IF SEL = 0 THEN VALGOOD = FALSE:RETURN     'did not find another /  or - ,so no good
10370 BEGP = BEGP: ENDP = SEL -1: UPLIM = 31: LOLIM = 1    'days
10380 GOSUB 10650 :IF VALGOOD = FALSE THEN RETURN
10390 BEGP = SEL +1 : ENDP = LVALUE
10400 LVALYY = ENDP -BEGP +1
10410 IF LVALYY = 4 THEN UPLIM = 2099 :LOLIM = 1980 : GOTO 10450
10420 IF LVALYY = 1 THEN VALUE$ = VALUE$ + "0": LVALUE = LVALUE +1: GOTO 10390
10430 IF LVALYY = 2 THEN UPLIM =   99: LOLIM =   80 : GOTO 10450
10440 VALGOOD = FALSE: RETURN
10450 GOSUB 10650 : IF VALGOOD = FALSE THEN RETURN
10460 VALGOOD = TRUE: RETURN            'date ok
10470 ' ====================================================================================================================
10480 ' subroutine to check the time entry
10490 BEGP = 1: SS$ = ":" :SEL = INSTR(BEGP,VALUE$,":")
10500 IF SEL = 0 THEN COLONF = FALSE ELSE COLONF = TRUE    'could be just digit for hours, no :
10510 IF     COLONF THEN BEGP = BEGP: ENDP = SEL -1 : UPLIM = 23: LOLIM = 0
10520 IF NOT COLONF THEN BEGP = BEGP: ENDP = LVALUE : UPLIM = 23: LOLIM = 0  'just hours here
10530 GOSUB 10650: IF VALGOOD = FALSE THEN RETURN
10540 IF NOT COLONF THEN VALGOOD = TRUE :RETURN         'hour OK
10550 BEGP = SEL +1
10560 SEL = INSTR(BEGP,VALUE$,SS$):  IF SEL = 0 THEN COLONF = FALSE ELSE COLONF = TRUE    'could be just digit for hours, no :
10570 IF     COLONF THEN BEGP = BEGP: ENDP = SEL -1 : UPLIM = 59: LOLIM = 0
10580 IF NOT COLONF THEN BEGP = BEGP: ENDP = LVALUE : UPLIM = 59: LOLIM = 0  'just minutes,no secs
10590 GOSUB 10650: IF VALGOOD = FALSE THEN RETURN
10600 IF NOT COLONF THEN VALGOOD = TRUE :RETURN         'minutes OK
10610                    BEGP = SEL +1:ENDP = LVALUE :UPLIM = 59: LOLIM = 0
10620 GOSUB 10650:  IF VALGOOD = FALSE THEN RETURN
10630 VALGOOD = TRUE: RETURN                            'time OK
10640 ' --------------------------------------------------------------------------------------------------------------------
10650 ' subroutine to check if the part of value is within proper limits
10660 '        PRINT DATECHECK;TIMECHECK;VALGOOD;SLASHF;DASHF;COLONF,SEL;BEGP;ENDP;ENDP-BEGP+1,PART$;VAL(PART$),UPLIM;LOLIM
10670 '        COLOR 0,7:PRINT VALUE$;:COLOR 7,0:PRINT;
10680 LENGTH = ENDP -BEGP +1 : IF LENGTH <= 0 THEN VALGOOD = FALSE:RETURN
10690 PART$ = MID$ (VALUE$, BEGP,LENGTH   )
10700 '        PRINT DATECHECK;TIMECHECK;VALGOOD;SLASHF;DASHF;COLONF,SEL;BEGP;ENDP;ENDP-BEGP+1,PART$;VAL(PART$),UPLIM;LOLIM
10710 FOR INDEX = 1 TO LENGTH      :VL = ASC (MID$ (PART$,INDEX,1) )
10720 IF NOT ( VL >=48 AND VL <=57 ) THEN VALGOOD = FALSE:RETURN  'entries are not numbers
10730 NEXT
10740 IF (VAL(PART$) > UPLIM OR VAL(PART$) < LOLIM) THEN VALGOOD = FALSE:RETURN
10750  VALGOOD = TRUE:  RETURN
10760 ' ==============================
```

## SCREENIN.BAS

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

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0141

     Volume in drive A has no label
     Directory of A:\

    123PREP  DOC      8704   3-25-84   1:58a
    123PREP  EXE     30208   3-25-84   1:56a
    AID      BAS     32519   4-01-84   6:41p
    AID      BAT       512   3-25-84   1:22a
    AID      DOC     10752   3-25-84   1:21a
    AID      EXE     53760   3-25-84   1:19a
    CRC      TXT      1029  11-13-84   2:36p
    CRCK4    COM      1536  10-21-82   7:54p
    READ     ME        666   4-02-84   5:35p
    SCREENIN BAS      3712   4-01-84   6:01p
    SCREENIN DOC      3772   4-01-84   7:19p
    W20      COM      3456   3-25-84   2:59a
           12 file(s)     150626 bytes
                            7680 bytes free
