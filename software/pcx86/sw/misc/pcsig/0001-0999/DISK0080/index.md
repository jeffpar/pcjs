---
layout: page
title: "PC-SIG Library Disk #80"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0080/
machines:
  - id: ibm5160
    type: pcx86
    config: /machines/pcx86/ibm/5160/cga/256kb/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk 0080"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5160" %}

{% comment %}info_begin{% endcomment %}

## Information about "DOS UTILITIES NO 3"

    Here's a little bit of everything for anyone looking to add some
    functionality to their system.  DOS UTILITIES No. 3 has some great
    routines; including two improved directory utilities, SD20 and XDIR,
    which let you alter file attributes EASILY!  (Keep someone from erasing
    those important files!)  Also of interest is MOVE, which can combine
    the functions of COPY and ERASE (much quicker, too).  There are also
    color-setting routines, an expanded ANSI.SYS driver, modification to
    let you use the ALT, CTRL, and SHIFT keys as toggles (on/off).  Toggle
    on/off functions can help people who have problems depressing multiple
    keys to more safely use their PC functions. There's much more--explore
    and enjoy!
    
    System Requirements: Some programs require color graphics; BASIC
    
    How to Start: To run an EXE or COM program, simply type its name and
    press <ENTER>.  For instructions on running BASIC programs, please
    refer to the GETTING STARTED section in this catalog.  For instructions
    on ASM listings, refer to your Assembler manual.  To read DOC files,
    simply enter TYPE filename.ext and press <ENTER>.
    
    File Descriptions:
    
    ALTER    DOC  Documentation file for ALTER.COM.
    ALTER    COM  Utility to change file attributes  (DOS 2.0).
    ASK      DOC  Documentation file for ASK.COM.
    ASK      COM  Allows interactive input to a batch file  (DOS 2.0).
    RENUM    BAS  BASIC source code for RENUM.
    RENUM    EXE  Renumbers a file that has been through NUMZAP.
    NUMZAP   BAS  BASIC source code for NUMZAP.
    NUMZAP   DOC  Documentation for NUMZAP.
    NUMZAP   EXE  Removes line numbers from BASIC programs.
    BIGANSI  SYS  Enlarged ANSI.SYS, allows for redefinition of 40 keys.
    LOAD-US  ABS  Documentation for LOAD-US.
    LOAD-US  COM  Enables you to use Lotus and Symphony on hard disk.
    XDIR     DOC  Documentation file for XDIR.COM.
    CISEXE   COM  Communications program that supports Compuserve protocol.
    XDIR     COM  Extended directory - shows file attributes.
    WMTELL   BAS  Plays William Tell Overture.
    SOLFE    BAS  Plays "Solfeggietto" by Carl Phillip Emanual Bach.
    CISEXE   DOC  Documentation file for CISEXE.COM.
    CL       ASM  Source for CL.COM.
    CL       DOC  Documentation file for CL.COM.
    CL       COM  Sets blue background.
    EDITNO   DOC  Documentation file for EDITNO.BAS.
    EDITNO   BAS  Formats numeric output in ways that PRINT USING cannot.
    COLOR    DOC  Documentation file for COLOR.COM.
    COLOR    COM  Machine language equivalent of BASIC's COLOR statement.
    SD20     DOC  Documentation file for SD20.COM.
    SD20     COM  Sort directory for DOS 2.0.  Includes several run options.
    OKIMOD   DOC  Doc on how to modify MODE.COM for different printers.
    ET4      BAS  BASIC text file line editor - an alternative to EDLIN.
    KEYLK3   EXE  KeyLock program for BIOS ROM..
    ET4      EXE  Compiled BASIC version.
    MEM640   ZAP  Modifies BIOS to handle memory greater than 544KB.
    MEM640   DOC  Documentation file for MEM640.ZAP.
    MOVE     COM  Utility to move files across directories without copying
    MOVE     DOC  Documentation file for MOVE.COM.
    FCBCRT   BAS  Create loadable program for reading directory from BASIC.
    FCBEXM   BAS  Demonstrates use of BLOADable file.
    FCBREAD  BSV  BLOADable file created by FCBCRT.BAS.
    FKREST   COM  Companion to FKSET.COM - resets keys to original functions
    FKREST   ASM  Source for FKREST.COM.
    FKSET    ASM  Source for FKSET.COM.
    KEYLK    DOC  Documentation for KEYLK and KEYLK3.
    HIQUE    BAS  Board game that supports light pen input.
    FLIGHT   NEW  How to modify Flight Simulator for color on a RGB monitor.
    FKSET    COM  Upgrade of function key definition routine for DOS 2.0.
    KEYLK3   ASM  Source code for KeyLock program for latest BIOS ROM.
    File Descriptions:
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## EDITNO.BAS

```bas
1000 ' Numeric Editing routines for PC Basic-Basica
1010 ' Michael Krieger, June 1983
1020 '
1030 ' The purpose of these three subroutines is to perform numeric editing
1040 ' especially for DATE and TIME fields, which CAN NOT be edited
1050 ' with "PRINT USING".  They are just string manipulation routines
1060 ' which run very fast, and will take your number and return a nice
1070 ' edited string of a FIXED LENGTH for you to use to make output
1080 ' more legible.
1090 '
1100 ' *** FIELD NAMES USED BY THESE ROUTINES
1105 '     NAME    SET BY       DESCRIPTION
1106 '
1110 '     A2      user         Field to be edited
1120 '     ISIG    user         Number of significant places desired
1130 '                          (left of decimal point)
1140 '     IDEC    user         No. of Decimal positions desired in result
1150 '                          (to RIGHT of decimal point)
1160 '     DLM$    user         DELIMITER desired ("/", ":", "-", etc)
1180 '     LPAD$   user         Left Pad Character (" ","0","$", etc.)
1190 '     O$      routine      THE EDITED STRING !!
1200 '
1210 '
1220 ' The length of the returned string will be the total of ISIG plus
1230 ' IDEC plus 1 for decimal point, plus 1 for trailing minus sign, which
1240 ' will be added if the field is negative.
1250 '
1260 ' ** TO USE THE ROUTINES **
1270 ' 1. first, if the number is to be rounded off, store your field into
1280 '    A2 and GOSUB 1670 (or whatever you renumber it to)
1290 '
1300 ' 2. Next, set ISIG, IDEC, DLM$, and LPAD$ to the values you want.
1310 '    for a normal DATE field, this would be:
1320 '    ISIG=6:IDEC=0:DLM$="/":LPAD$=" "
1330 ' 3. GOSUB to the JUSTIFICATION routine with GOSUB 1730.
1340 ' 4. To complete the DATE/TIME edit, GOSUB 1600 to insert the delimiter
1350 '    characters.
1360 '
1370 '  ***** END OF NARRATIVE==== BEGIN SUBROUTINE CODE==
1380 '  You may delete all lines up to here before using the code.
1390 '  HAPPY EDITING!!!!!
1600 ' ************* NUMERIC EDITING SUBROUTINE FOR DATE & TIME
1610 '
1620 B$=O$ ' SET UP THE WORK STRING
1630 O$=LEFT$(B$,2)+DLM$+MID$(B$,3,2):IF LEN(B$) > 5 THEN O$=O$+DLM$+MID$(B$,5,2) ' COMPLETE FOR DATE
1650 RETURN
1660 '
1670 ' ********* R O U N D O F F     S U B R O U T I N E *****************
1680 IRFCT=1:IF IDEC <=0 THEN RETURN ' NO ROUNDOFF FOR INTEGERS
1690 FOR IWXI=1 TO IDEC: IRFCT=IRFCT * 10: NEXT
1700 A2=INT((A2+ (.5*(1/IRFCT)))*IRFCT)/IRFCT : RETURN
1710 '
1720 '
1730 ' *********** NUMERIC LEFT & RIGHT JUSTIFICATION ********************
1735 '
1740 ID=1:IS1=0:ID1=0:B2$="":INEG=0:IF A2<=0 THEN INEG=-1:A2=ABS(A2) ' SET PARMS & SIGN
1750 B$=STR$(A2):B$=RIGHT$(B$,(LEN(B$)-1)) ' STRIP THE FIRST BLANK.
1760 FOR IWX1=1 TO LEN(B$): IF MID$(B$,IWX1,1)="." THEN ID=3 ' DEC POINT FOUND
1770 ON ID GOTO 1780,1790,1800
1780 IS1=IS1+1:GOTO 1810
1790 ID1=ID1+1:GOTO 1810
1800 ID=2
1810 NEXT
1830 IWX1=1:IWX2=2:IF IS1>=ISIG THEN 1870 ' PAD LEFT
1840 FOR IWX1=1 TO ISIG-IS1:B2$=B2$+LPAD$:IWX2=IWX2+1:NEXT ' BEGIN STRING WITH THE PADS.
1850 IF LPAD$<>"$" OR IWX2<2 THEN 1870 ' BYPASS DOLLAR SIGN BLANKOUT.
1860 FOR IWX1=1 TO IWX2-1:MID$(B2$,IWX1,1)=" ":NEXT ' BLANK OUT THE $ IN STRING
1870 B2$=B2$+B$: IF ID1>=IDEC THEN 1900 ' DECIMAL PLACES NEED PADDING ?
1880 IF ID1=0 THEN B2$=B2$+"." ' ADD THE DEC POINT
1890 FOR IWX1=LEN(B2$)+1 TO LEN(B2$)+(IDEC-ID1):B2$=B2$+"0":NEXT
1900 IF NEG THEN B2$=B2$+"-" ELSE B2$=B2$+" " ' TRAIL A BLANK OR A MINUS SIGN.
1910 O$=B2$: RETURN '       END OF *** JUSTIFY *** ROUTINE
1920 ' ********************** END OF EDITING ROUTINES ******************
1930 '  If you have any questions or are confused,
1940 '  leave EMAIL for me, Michael Krieger at 74065,1344
1950 '  or call at (212) 741 2828  or (516) 883 7016
```

## ET4.BAS

```bas
100   ON ERROR GOTO 8020:DEFSTR A-D:DEFINT E-Z:DIM A(1000):DL=STRING$(79,205)
110   'Line 100 is a copy of line 4985 to satisfy the BASIC Compiler - T.Hall 7-20-83
120   '          D. MCCOY - 05/07/83
140   GOTO 4980
160   '-------------------- SUBROUTINES -----------------------
200   K$=INKEY$:IF K$="" THEN PRINT "      ";CHR$(221);BS;BS;BS;BS;BS;BS;BS;:GOTO 200
220   RETURN
230   K$=INKEY$:RETURN
240   '-------------------- INKEY$ AND CONVERT TO UPPER CASE----
260   PRINT " --> ";
280   K$=INKEY$:IF K$="" THEN 280
300   IF ASC(K$)>96 AND ASC(K$)<123 THEN K$=CHR$(ASC(K$)-32)
320   PRINT K$:RETURN
340   '-------------------- DISPLAY FULL LINE -----------------
360   PRINT USING B;NL;:PRINT A(NL):RETURN
380   '-------------------- DISPLAY INDENTED LINE ------------
400   LD=INT(LEN(A(NL))/73):FOR J=0 TO LD
420   IF J=0 THEN PRINT USING B4;NL,MID$(A(NL),1,72) ELSE PRINT USING B3;MID$(A(NL),J*72+1,72)
440   NEXT:RETURN
460   '------------------- EDIT SUBROUTINE --------------------
480   LA=LEN(A(NL)):PRINT "EDIT->";CHR$(221);
500   FOR I=1 TO LA
540     K1$=INKEY$:IF K1$="" THEN PRINT CHR$(95);BS;:GOTO 540
560     IF ASC(K1$)>96 AND ASC(K1$)<123 THEN K1$=CHR$(ASC(K1$)-32)
580     IF ASC(K1$)=8 AND I>1 THEN 1100        'BACKSPACE
600     IF ASC(K1$)=13 THEN 1560               'ENTER
620     IF K1$=" " THEN 1020     'space bar
640     IF K1$="I" THEN 1420     'insert mode
660     IF K1$="C" THEN 1240     'change char
680     IF K1$="D" THEN 1360     'delete char
700     IF K1$="X" THEN 1560     'list line & insert
720     IF K1$="H" THEN 1680     'hack & insert
740     IF K1$="S" THEN 1720     'search for char
760     IF K1$="Q" THEN 900      'abort changes & return
770     IF K1$="?" THEN 910      'abort changes, help & return
780     IF ASC(K1$)<48 OR ASC(K1$)>57 THEN 820     'number key
800     IF LEN(K5$)<3 THEN K5$=K5$+K1$:K5=VAL(K5$)
820     GOTO 540
840     K5$="":K5=0
860   NEXT I
880   A(NL)=AN
900   RETURN
908   '          HELP EDIT
910   PRINT:GOSUB 1924:AN="":GOSUB 400:GOTO 480
920   '          SET K5 PARAMETERS
940   IF K5>(LA-I+1) THEN K5=LA-I+1
960   IF K5<1 THEN K5=1
980   RETURN
1000   '          SPACEBAR
1020   GOSUB 940
1040   AN=AN+MID$(A(NL),I,K5):PRINT MID$(A(NL),I,K5);:I=I+K5-1
1060   FOR J=1 TO 80:NEXT J:GOTO 840
1080   '          BACKSPACE
1100   GOSUB 940:FOR J=1 TO K5
1160   IF LEN(AN)>0 THEN AN=LEFT$(AN,LEN(AN)-1)
1180   IF I>1 THEN I=I-1:PRINT BS;
1200   NEXT J:K5=0:K5$="":GOTO 540
1220   '           C EDIT
1240   GOSUB 940  :FOR J=1 TO K5
1260   K2$=INKEY$:IF K2$="" THEN PRINT CHR$(223);BS;:GOTO 1260
1280   AN=AN+K2$:PRINT K2$;:I=I+1
1300   NEXT J:I=I-1:K1$=""
1320   GOTO 840
1340   '          D EDIT
1360   GOSUB 940
1380   FOR J=1 TO K5:PRINT CHR$(219);:NEXT J:I=I+J-2:GOTO 840
1400   '          I EDIT
1420   K3$=INKEY$:IF K3$=""THEN PRINT CHR$(220);BS;:GOTO 1420
1440   IF ASC(K3$)=27 THEN I=I-1:GOTO 840
1460   IF ASC(K3$)=13 THEN 1560        'TO X EDIT
1480   IF ASC(K3$)= 8 THEN AN=LEFT$(AN,LEN(AN)-1):PRINT BS;:GOTO 1530
1500   AN=AN+K3$
1520   PRINT K3$;
1530   GOTO 1420
1540   '          X EDIT
1560   GOSUB 940
1562   IF I=1 THEN 1580
1564   IF I>LA THEN 1620
1566   IF I<1 THEN 1620
1568   IF I>255 THEN 1620
1580   K5=LA-I+1:IF K5<0 THEN 1620
1600   AM=MID$(A(NL),I,K5):AN=AN+AM:PRINT AM;:I=I+K5:K5=0:K5$=""
1620   IF ASC(K1$)=13 OR ASC(K3$)=13 THEN K1$=" ":K3$=" ":GOTO 880
1640   GOTO 1420
1660   '          H EDIT
1680   I=LA+1:GOTO 1420
1700   '          SEARCH FOR CHAR
1720   K4$=INKEY$:IF K4$="" THEN 1720
1740   K6=0:K7=I+1:GOSUB 940:FOR J=1 TO K5
1760   K6=INSTR(K7,A(NL),K4$)
1780   IF K6>0 THEN K7=K6+1
1800   NEXT J:K5=0:K5$=""
1820   IF K6<1 THEN K6=LA+1
1840   L3=K6-I:IF L3<0 THEN L3=0
1860   AM=MID$(A(NL),I,L3):AN=AN+AM:PRINT AM;:I=I+L3
1880   IF I<LA+1 THEN 540
1900   AN=AN+MID$(A(NL),I,1):PRINT MID$(A(NL),I,1);:GOTO 880
1920   '--------------------- HELP MENUS -----------------------
1922   '--------------------- EDIT MENU ------------------------
1924   PRINT DL:PRINT"    EDIT Subcommands:        nC=Change    n<Spacebar>=Copy Character(s)"
1926   PRINT"        H=Hack & Insert      nD=Delete    n(<--)=Backspace(s)"
1928   PRINT"        X=List & Insert      I=Insert     <Esc>=Insert OFF"
1929   PRINT"        Q=Quit No Changes    ?=Help       <Enter>=End Edit Save Changes"
1930   PRINT"        nSc=Search for Nth occurance of Character c"
1931   PRINT DL:RETURN
1932   PRINT B2;"EDIT:   n<C>  n<D>  <H>  <I>  <Q>  n<S>c  <X>  n< >  <Esc>  <?>":RETURN
1940   '--------------------- COMMANDS -------------------------
1960   PRINT DL
1980   PRINT"    Commands:       A=Add         F=Find      K=Memory      P=Print"
2000   PRINT"        R=Replace   S=Save        X=eXit      &=Merge       ?=Help"
2020   PRINT"        Cn=Copy n   Dn=Delete n   En=Edit n   In=Insert n   Ln=List n"
2040   PRINT DL:RETURN
2060   '-------------------- LIST SUBCOMMANDS ------------------
2100   PRINT DL:PRINT "    LIST Subcommands:"TAB(39)"/=Commands                 X=eXit"
2120   PRINT"<Up Arrow>=Scroll backward    <Left Arrow>=First line   ?=Help       <PgUp>"
2140   PRINT"<Down Arrow>=Scroll forward   <Right Arrow>=Last line   <Home>=CLS   <PgDn>"
2155   PRINT DL:RETURN
2160   '--------------------- MESSAGE DELAY -------------------
2180   FOR J=1 TO 1000:NEXT:RETURN
2200   '---------------------- COMMAND LINE PROCESSOR ---------
2240   GOSUB 1960       'HELP MENUS
2260   IF NL>LN THEN NL=LN
2270   PRINT B2;"Lines are numbered 1 to";LN;TAB(43)"Current line #";NL
2280   PRINT B2;"(A,F,K,P,R,S,X,&,? or Cn,Dn,En,In,Ln)  Command : ";
2300   LINE INPUT K3$:IF K3$="" OR LEN(K3$)>4 THEN 2260
2320   K$=LEFT$(K3$,1):IF ASC(K$)>96 AND ASC(K$)<123 THEN K$=CHR$(ASC(K$)-32)
2340   NM=NL:NL=VAL(MID$(K3$,2,3)):IF NL=0 THEN NL=NM
2360   IF LN<1 AND K3$<>"X" AND K3$<>"?" THEN 2920
2380   IF NL>LN THEN NL=LN
2400   KM$=K$:KN=INSTR("ACDEFKILPRSX&?",K$)
2420   ON KN GOTO 2920 ,4420 ,4560 ,4700 ,3080 ,7000,4760 ,2480 ,5500  ,3220 ,5780  ,5920  ,5240
2440   GOTO 2240
2460   '-------------------- LIST -----------------------------
2480   PRINT B2;"LIST: Arrw keys  /=Commnds  X=eXit  ?=Help  <Home>=CLS  <PgUp>  <PgDn>"
2500   GOSUB 400
2520   GOSUB 200
2560   IF K$="?" THEN GOSUB 2100 :GOSUB 400   '? HELP
2580   IF G3=128 AND G4=2 THEN GOSUB 2100 :GOSUB 400   '? HELP/R
2600   IF K$="X" OR K$="x" THEN GOSUB 230:GOTO 2240     'X EXIT
2620   IF K$="/" THEN GOSUB 230:GOTO 2260     '/ EXIT
2630   IF LEN(K$)=2 THEN K=ASC(RIGHT$(K$,1)) ELSE K=0
2640   IF K=71 THEN CLS:GOTO 2480
2660   IF K<>80 THEN 2680
2670   IF NL<LN THEN NL=NL+1:GOSUB 400 ELSE GOSUB 2100:NL=1:GOSUB 400
2680   IF K<>72 THEN 2700
2690   IF NL>1 THEN NL=NL-1:GOSUB 400 ELSE GOSUB 2100:NL=LN:GOSUB 400
2700   IF K=75 THEN NL=1:GOTO 2500
2720   IF K=77 THEN NL=LN:GOTO 2500
2730   IF K<>81 THEN 2790
2735   IF NL<LN THEN LO=NL+1
2740   HI=LO+19:IF HI>LN THEN HI=LN
2750   FOR NL=LO TO HI-1
2770     GOSUB 400
2780   NEXT NL:GOSUB 400
2790   IF K<>73 THEN 2880
2795   IF NL>1 THEN HI=NL-1
2800   LO=NL-19:IF LO<2 THEN LO=2
2810   FOR NL=HI TO LO STEP-1
2830     GOSUB 400
2840   NEXT NL:GOSUB 400
2880   GOTO 2520
2900   '---------------------- ADD NEW LINES ------------------
2920   IF LN>1 THEN NL=LN-1:GOSUB 400
2940   IF LN>0 THEN NL=LN:GOSUB 400 ELSE CLS:PRINT "To create a new file:"
2960   PRINT B2;"ADD new lines below (Blank Line to END)"
2980   IF LN>998 THEN PRINT B2;"*** LINES FULL ***":GOTO 2260
3000   LN=LN+1:PRINT USING B;LN;
3020   LINE INPUT A(LN):IF A(LN)="" THEN LN=LN-1:NL=LN:GOTO 2260
3040   GOTO 2980
3060   '-------------------- FIND/SEARCH ----------------------
3080   PRINT B2;:LINE INPUT"Enter search string to FIND : ";S2$:IK=0
3100   FOR NL=1 TO LN
3120     IJ=INSTR(A(NL),S2$)
3140     IF IJ>0 THEN GOSUB 400  :IK=IK+1
3160     IF IK=5 THEN IK=0:PRINT B2;"X=eXit.    Any key to continue ";:GOSUB 260  :IK=0:IF K$="X" THEN 2260
3180   NEXT:GOTO 2260
3200   '-------------------- REPLACE CHAR/STRING --------------
3220   PRINT DL:PRINT"REPLACE: A=ASCII Code #   S=String   V=View Current Line #";NL
3240   PRINT"         C=Convert UC to LC if in quotes          X=eXit":PRINT DL
3260   PRINT B2;"Selection";:GOSUB 260
3280   IF K$="S" THEN 3760
3300   IF K$="C" THEN 4140
3310   IF K$="V" THEN 4382
3320   IF K$<>"A" THEN 2260
3340   KN$=K$:CLS:FOR J=32 TO 255:PRINT USING "### = ! ";J,CHR$(J);:NEXT:PRINT
3360   INPUT"Enter ASCII code number to be REPLACED (0-255): ";S2
3380   IF S2<0 OR S2>255 THEN CLS:GOTO 2240
3400   INPUT "Enter ASCII code number of replacement character (0-255): ";S3
3420   IF S3<0 OR S3>255 THEN CLS:GOTO 2240
3440   S3$=CHR$(S3):S2$=CHR$(S2)
3460   PRINT"Prompt for each change (Y/N)? ";:GOSUB 260
3480   KM$=K$:IF KM$<>"Y" THEN KM$="N"
3500   CLS:FOR NL=1 TO LN:JJ=1
3520     IF LEN(A(NL))<1 THEN 3700
3540     IJ=INSTR(JJ,A(NL),S2$):JJ=IJ+1
3560     IF IJ<1 THEN 3700
3580     IF KM$="N" THEN 3680    'no prompting
3600     GOSUB 360  :PRINT TAB(IJ+7);CHR$(94)
3620     PRINT "Replace (Y/N or X=eXit) ? ";:GOSUB 260:CLS
3640     IF K$="X" THEN 3720
3660     IF K$<>"Y" THEN IF IJ<LEN(A(NL)) THEN 3540 ELSE 3700
3680     MID$(A(NL),IJ)=S3$
3685     IF KM$="N" THEN GOSUB 360
3688     GOTO 3540
3700   NEXT
3720   GOTO 2240
3740   '         REPLACE STRING
3760   PRINT B2;:LINE INPUT "Enter string to be REPLACED : ";B1:IF B1="" THEN 3760
3780   PRINT B2;:LINE INPUT "Enter new text of replacement string : ";C1$
3800   PRINT B2;"Prompt for each change (Y/N)?";:GOSUB 260
3820   IF K$="Y" THEN KM$="Y" ELSE KM$="N"
3840   CLS:P=0:FOR NL=1 TO LN
3860     P=INSTR(P+1,A(NL),B1) : IF P<1 THEN 4100
3880     IF KM$="N" THEN 3980
3900     GOSUB 360
3920     PRINT TAB(P+7) CHR$(94)
3940     PRINT "Replace (Y/N/X)?";:GOSUB 260:CLS:IF K$="X" THEN 2240
3960     IF K$<>"Y" THEN P=P+LEN(B1)-1:GOTO 3860
3980     A1$=LEFT$(A(NL),P-1)
4000     L1=LEN(A(NL))-LEN(A1$)-LEN(B1)
4020     A2$=RIGHT$(A(NL),L1)
4040     A(NL)=A1$+C1$+A2$
4060     IF KM$="N" THEN GOSUB 360
4080     GOTO 3860
4100   NEXT:GOTO 2240
4120   '-------------------- U/C TO L/C -----------------------
4140   CLS:FOR NL=1 TO LN:P=1
4160   IJ=INSTR(P,A(NL),CHR$(34)):IF IJ<1 THEN 4360
4180   IK=INSTR(IJ+1,A(NL),CHR$(34)):IF IK<1 THEN IK=LEN(A(NL))
4200   FOR I=IJ+2 TO IK
4220    X$=MID$(A(NL),I,1):IF X$="" THEN 4320
4240    Y$=MID$(A(NL),I-1,1):IF Y$="=" OR Y$=" "THEN 4320
4260    IF ASC(X$)<65 OR ASC(X$)>90 THEN 4320
4280    X$=CHR$(ASC(X$)+32)
4300    MID$(A(NL),I,1)=X$
4320   NEXT I:GOSUB 400
4340   P=I:GOTO 4160
4344   X$=MID$(A(NL),I,1):PRINT USING "! = ### ";X$,ASC(X$);
4360   NEXT NL
4380   GOTO 2240
4381   '-------------------- VERYIFY ASCII CODES -------------
4382   CLS:NA=LEN(A(NL)):IF NA<1 THEN 4398 ELSE N2=NA/20
4383   FOR J=0 TO N2:N3=J*20+1:N4=N3+19
4384   FOR I=N3 TO N4
4386   IF I<=NA THEN PRINT USING " !  ";MID$(A(NL),I,1);
4388   NEXT I:IF I=>NA THEN PRINT
4390   FOR I=N3 TO N4
4392   IF I<=NA THEN PRINT USING "### ";ASC(MID$(A(NL),I,1));
4394   NEXT I:IF I=>NA THEN PRINT
4395   IF (J+1)/4-INT((J+1)/4)=0 AND I<NA THEN PRINT"Press any key to continue";:GOSUB 260
4396   NEXT J:PRINT
4398   GOTO 2240
4400   '--------------------- COPY LINE -----------------------
4420   NI$="":GOSUB 400  :PRINT B2;:PRINT"COPY  (X=Exit)  Line # to INSERT AFTER:";LC+1;:INPUT NI$
4440   NI=VAL(NI$):IF NI$="X" OR NI$="x" OR NI<0 OR NI>LN THEN 2260  ELSE A(0)=A(NL)
4445   IF NI=0 THEN NI=LC+1
4460   LC=NI:IF LC>998 THEN PRINT B2;"*** LINES FULL ***":GOTO 2260
4480   PRINT B2;"Working...*** Any Higher Line # Increased by 1 ***"
4500   FOR J=LN TO LC+1 STEP -1:A(J+1)=A(J):NEXT J:LN=LN+1:A(LC+1)=A(0)
4520   IF LC+1>NL THEN NL=NL+1:IF NL>LN THEN NL=LN
4522   IF LC+1<NL THEN NL=NL+2:IF NL>LN THEN NL=LN
4525   NM=NL:NL=LC+1:GOSUB 400:NL=NM
4530   GOTO 2260
4540   '--------------------- DELETE --------------------------
4560   GOSUB 400  :PRINT B2;"DELETE...Are you sure (Y/N)? ";:GOSUB 260
4580   IF K$<>"Y" THEN NL=NL+1:GOTO 2260
4600   IF NL>999 THEN PRINT B2;"*** UNABLE TO DELETE ***":GOTO 2260
4620   PRINT B2;"Working...*** Any Higher Line # Decreased by 1 ***"
4640   FOR J=NL TO LN-1:A(J)=A(J+1):NEXT:LN=LN-1:IF NL>LN THEN NL=LN
4660   GOSUB 400:GOTO 2260
4680   '---------------------- EDIT ---------------------------
4700   GOSUB 1932:GOSUB 400  :AN="":GOSUB 480  :AN="":PRINT:GOSUB 400:NL=NL+1:GOTO 2260
4740   '-------------------- INSERT ---------------------------
4760   IF NL>0 THEN GOSUB 400
4780   PRINT USING B;NL+1;:LINE INPUT A(0)
4800   IF LN>998 THEN PRINT B2;"*** LINES FULL ***":GOTO 2260
4820   PRINT B2;"Working...*** Any Higher Line # Increased by 1 ***"
4840   FOR J=LN TO NL+1 STEP-1:A(J+1)=A(J):NEXT:LN=LN+1:A(NL+1)=A(0)
4860   NL=NL+1:IF NL>LN THEN NL=1
4880   GOSUB 400:GOTO 2260
4900   '-------------------------------------------------------
4920   ' D. MCCOY 03/25/83
4960   '-------------------- INITIALIZE -----------------------
4980   CLS:PRINT TAB(11)"ET - Edit Text - IBM PC File Editor"
4985   'ON ERROR GOTO 8020:DEFSTR A-D:DEFINT E-Z:DIM A(999+1):DL=STRING$(79,205
5000   PRINT TAB(11)"Vers. 3.4     D. McCoy      70040,1131":PRINT DL
5020   PRINT"      This program is designed to edit ASCII text files."
5040   PRINT"      BASIC programs must be saved in the ,A ASCII"
5060   PRINT"      format for editing."
5070   PRINT DL
5120   B=CHR$(91)+"###"+CHR$(93)+CHR$(32)+CHR$(221)
5130   B2="      "+CHR$(221)+CHR$(219)+" "
5140   B3="      "+CHR$(221)+"\                                                                      \"
5160   B4=B+"\                                                                      \"
5180   BS=CHR$(29)+CHR$(32)+CHR$(29)
5200   '---------------------- LOAD TEXT FILE -----------------
5240   IF K$="&" THEN PRINT B2;"To MERGE another file -"
5260   PRINT B2;"Enter the filespec of the file to be LOADED "
5280   IF KM$="&" THEN PRINT B2;"? = Dir or X to eXit : ";:ELSE PRINT B2;"? = Dir or <Enter> to create a NEW file : ";
5300   LINE INPUT FS$: IF FS$<>"?" THEN 5320
5310   IF FS$="?" THEN PRINT B2;"Which drive (A/B)";:GOSUB 260
5315   IF K$="A" THEN PRINT DL:FILES "A:*.*":PRINT DL:GOTO 5260
5318   IF K$="B" THEN PRINT DL:FILES "B:*.*":PRINT DL:GOTO 5260
5320   IF FS$="" AND KM$<>"&" THEN 2920
5340   IF FS$="" OR FS$="X" OR FS$="x" THEN FS$="":GOTO 5440
5360   OPEN "I",1,FS$
5380   IF EOF(1) THEN CLOSE:GOTO 5440
5400   LN=LN+1:IF LN>999 THEN LN=LN-1:CLOSE:GOTO 5440
5420   LINE INPUT #1,A(LN):LOCATE 6,40:PRINT"Index Line #";LN;:GOTO 5380
5440   NL=1:CLS:GOTO 2240
5480   '--------------------- PRINT ---------------------------
5500   PRINT B2;"Ready printer...":PRINT B2;"X=eXit.  PRINT index line numbers (Y/N)?";:GOSUB 260
5520   IF K$="X" THEN 2260  ELSE IF K$<>"Y" AND K$<>"N" THEN 5500
5540   LO=1:PRINT B2;"Enter LOWEST  line # to print ( 1 to";LN;")";:INPUT LO
5560   IF LO<1 THEN LO=1
5565   IF LO>LN THEN LO=LN
5580   HI=LN:PRINT B2;"Enter HIGHEST line # to print (";LO;"to";LN;")";:INPUT HI
5600   IF HI>LN THEN HI=LN
5610   IF HI<1 THEN HI=LN
5615   IF HI<LO THEN HI=LO
5620   C="<###>  ":PRINT B2;"Printing index lines"LO"to"HI"..."
5640   LPRINT "       "; FS$;TAB(40)LEFT$(TIME$,8):LPRINT
5660   FOR J=LO TO HI
5680     IF K$="Y" THEN LPRINT USING C;J; ELSE LPRINT "       ";
5700     LPRINT A(J)
5720   NEXT
5740   FOR J=1 TO 6 : LPRINT : NEXT:GOTO 2260
5760   '--------------------- SAVE TEXT FILE ------------------
5780   PRINT B2;"Current filespec is: ";FS$
5800   PRINT B2;:LINE INPUT "X=eXit.  New Filespec to SAVE or <Enter>: ";F2$
5820   IF F2$="X" OR F2$="x" THEN 2260
5840   IF F2$<>"" THEN FS$=F2$
5860   OPEN "O",1,FS$
5880   FOR J=1 TO LN:PRINT#1,A(J):NEXT:CLOSE:GOTO 2260
5900   '-------------------- END ------------------------------
5920   PRINT B2; "EXIT...Was text file saved (Y/N)?";:GOSUB 260
5940   IF K$="Y" THEN 5960   ELSE 2260
5960   PRINT B2;"Run again (Y/N)?";:GOSUB 260
5980   IF K$="N" THEN CLEAR 50:END
6000   RUN
6980   '-------------------- MEMORY --------------------------
7000   PRINT B2;"Bytes free space =";FRE(X)
7060   GOTO 2260
8000   '-------------------- ERROR TRAP ------------------------
8020   IF  ERR=53 THEN PRINT B2;"*** File not found ***":GOSUB 2180 :IF ERL=5360  THEN RESUME 5240  ELSE RESUME 5800
8040   IF  ERR=64 THEN PRINT B2; "*** Bad file name ***" :GOSUB 2180 :IF ERL=5360  THEN RESUME 5240  ELSE RESUME 5800
8060   IF  ERR=15 AND ERL=1500 THEN PRINT B2;"*** Line too long ***":GOSUB 2180 :RESUME 880
8080   CLOSE:PRINT B2;"*** Error"; ERR;"in line"ERL" ***":GOSUB 1960 :GOTO 2260
8100   '-------------------- END ------------------------------
```

## FCBCRT.BAS

```bas
 10 CLS:PRINT"This basic program was created by CONVERT.BAS":KEY OFF:DEFINT A-Z:FALSE=0:TRUE=NOT FALSE
 20 PRINT"Copyright 1983 ,Rich Schinnell Rockville,MD. Not for Sale."
 30 PRINT "This program will create  you a program named FCBREAD.BSV":PRINT
 40 ON ERROR GOTO 5000
 50 INPUT "PLACE the disk to write the file TO in Drive A: Press <ENTER> "; CAPITAL$
 90 CLS:LOCATE 12,5:PRINT "Now writing file named FCBREAD.BSV standby please  "
100 RESTORE
110 OPEN "R", #1,"FCBREAD.BSV",1
120 FIELD #1, 1 AS N$
130 READ N:LL=(N/28)+1
140 FOR I = 1 TO N
150 READ X$,CHECK:FOR C=1 TO LEN(X$) STEP 2:CC$="&H"+MID$(X$,C,2):IF CHECK=9999 THEN 170
155 LSET N$=CHR$(VAL(CC$)):PUT #1:CHECK=CHECK-VAL(CC$):NEXT C:IF CHECK<>0 THEN 5000
160 LOCATE 14,5:PRINT TIME$;" Reading data line #";(1000+I);" lines left=";LL-I;:NEXT I:CLOSE
170 LOCATE 16,5:PRINT "FCBREAD.BSV CREATED * *":GOTO 5010
1000 DATA  292
1001 DATA FD001700001C012401EB3590EB6490FF00000000003F000000000000,1571
1002 DATA 00000000000000000000000000000000000000000000000000000000,0
1003 DATA 0000000000000000558BEC1E8CC88ED833F6268B5E06268B5F01268A,2211
1004 DATA 00888410004683FE0B7CF38B7608268B04A20F0032C0A238001F5DCA,2526
1005 DATA 0400558BEC1E8CC88ED8FA892636008C1634008ED0BCCC01FBBA1D01,3095
1006 DATA B41ACD21BA0800803E3800007508FE063800B411EB02B412CD213C00,2255
1007 DATA 7560268B5E0826803F0E7551268B5F0133FF8BF78BCFB06002062401,2561
1008 DATA 2688014726C6013A478A8425013C20740626880147EB0C80F9007507,2128
1009 DATA FEC126C6012E474683FE08750C80F9007507FEC126C6012E4783FE0B,3091
1010 DATA 7CCFA0300132E4EB03B8FFFFEB03B8FEFF268B5E06268907FA8E1634,3606
1011 DATA 008B263600FB1F5DCA04001A,838
1012 DATA 000000,9999
5000 PRINT "* * ERROR VERIFY FOLLOWING DATA * * * "
5005 PRINT X$;",";CHECK
5010 KEY ON:CLOSE:END
```

## FCBEXM.BAS

```bas
100 DEF SEG=&H1F94  'Dependent upon your memory
110 '   This sample program serves as both an example and the documentation
120 '   for the FCBREAD.BSV routine that will read the directory of a
130 '   disk and present the matching file name back to the BASIC program.
140 '   Also available to the program is the directory information that
150 '   contains the size and time/date information. This routine is
160 '   faster than OPENing the file since it does not incur that overhead.
170 '   Also the user can present an arbitrary string to match on.
180 '
190 '   To use, BLOAD the routine into any available free memory. It
200 '   has 2 entry points (INIT and GETNEXT). INIT (offset 2) is used
210 '   to define the disk drive (0=default, 1=A, 2=B, ....) and the
220 '   pattern to be used to match on. The pattern MUST BE a string of
230 '   length 11; the first 8 are the filename and the last 3 are the
240 '   extension. A "?" is used to match any character. For example to
250 '   get all the BASIC files on the disk, "????????BAS" would be used
260 '   as the input parameter. After INIT has been called, calls to
270 '   GETNEXT (offset 5) are made to retrieve matching file names.
280 '   The two parameters are the string in which the match is returned
290 '   (which must be of length 14) and an INTEGER (..%) return value.
300 '   If the status return is <0, no more matched have been found. If
310 '   status >=0, it is the FILE ATTRIBUTE (as defined in the DOS Disk
320 '   Directory).
330 '
340 '   The INTEGER value at offsets 0,1 in the routine are the offset
350 '   to the directory entry for the file. For example, to obtain the
360 '   DATE information of the file, use the following statements:
370 '        B% = PEEK(0)+PEEK(1)*256   ' Get offset value
380 '        FDATE = PEEK(B%+26)*256 + PEEK(B%+25)
390 '
400 '   The offsets into the directory entry (25, 26 in this case) are
410 '   defined in the DOS manual.
420 '
430 '   The example program will print all the file names on the current
440 '   Directory plus their attributes.
450 BLOAD "fcbread.bsv",0
460 INIT%=2:GETNEXT%=5
470 FILENAME$="???????????"
480 DISK%=0:CALL INIT%(DISK%,FILENAME$)
490 FILENAME$=SPACE$(14):CALL GETNEXT%(FILENAME$,STATUS%)
500 PRINT FILENAME$,STATUS%
510 IF STATUS%>=0 THEN GOTO 490
```

## HIQUE.BAS

```bas
1 '             *** HIQUE ***
2 '             by Wes Meier (70215,1017)
3 '
4 '             Written for IBM PC with 80 Column Color.
5 '             Requires BASICA.
6 '             Supports Light Pen Operation.
7 '
8 SCREEN 0,1:KEY OFF:LOCATE ,,0,0,7:COLOR 6,1,1:CLS
9 DEFINT B-Z:DEFSTR A:DIM P(33),L(33),T(33),L2T(33)
10 DEF SEG=0:POKE &H417,96:DEF SEG
11 A=STRING$(4,219)+STRING$(4,29)+CHR$(31)+STRING$(4,219)+CHR$(30)+"  "
12 AB=CHR$(218)+STRING$(2,196)+CHR$(191)+STRING$(4,29)+CHR$(31)
13 AB=AB+CHR$(192)+STRING$(2,196)+CHR$(217)+CHR$(30)+"  "
14 MOVE=0:PEGS=32
15 A(1)="       1  2  3"
16 A(2)="       4  5  6"
17 A(3)=" 7  8  9 10 11 12 13"
18 A(4)="14 15 16 17 18 19 20"
19 A(5)="21 22 23 24 25 26 27"
20 A(6)="      28 29 30"
21 A(7)="      31 32 33"
22 A(8)="  Board Numbering"
23 FULL=-1:EMPTY=NOT FULL
24 GOSUB 25:GOTO 26
25 FOR X=1 TO 33:P(X)=FULL:NEXT:P(17)=EMPTY:RETURN
26 DATA 1,1,1,4,4,4,7,7,7,7,7,7,7,10,10,10,10,10,10,10,13,13,13,13,13,13,13
27 DATA 16,16,16,19,19,19
28 DATA 32,38,44,32,38,44,20,26,32,38,44,50,56,20,26,32,38,44,50,56,20,26,32
29 DATA 38,44,50,56,32,38,44,32,38,44
30 FOR X=1 TO 33:READ L(X):NEXT
31 FOR X=1 TO 33:READ T(X):L2T(X)=L(X)^2-T(X):NEXT
32 PEN ON
33 ON PEN GOSUB 63
34 USE.PEN=-1
35 PRINT TAB(30);:COLOR 20,7:PRINT" *** HIQUE *** ":COLOR 6,1:PRINT
36 PRINT"HIQUE is a puzzle that has 32 pegs or blocks arranged in a cross shape with the"
37 PRINT"center position of the cross empty. Your task is to is to remove as many pegs"
38 PRINT"as you can. A fantastic solution is one that has only one peg remaining."
39 PRINT"The PERFECT game ends with the one peg remaining in the center position!"
40 PRINT
41 PRINT"Rules:"
42 PRINT"     - Pegs are removed ONLY when they are JUMPED by another peg."
43 PRINT"     - You may jump ONLY One peg at a time."
44 PRINT"     - You may jump ONLY vertically or horizontally...NOT diagonally."
45 PRINT"     - You may jump ONLY into an EMPTY space."
46 PRINT
47 PRINT"Don't worry about making a mistake, HIQUE won't let you!"
48 PRINT:PRINT"Now, press any key to start the puzzle or, if you have a light pen,"
49 PRINT"touch the screen........";:COLOR 20,7:PRINT"   GOOD LUCK !!   ";
50 PENFLAG=-1
51 AX=INKEY$:IF AX="" THEN 51
52 USE.PEN=0:PEN OFF
53 GOTO 75
54 'Draw the Cross Subroutine
55 FOR X=1 TO 33
56 LOCATE L(X),T(X)
57 IF P(X)=FULL THEN PRINT A; ELSE PRINT AB;
58 NEXT
59 IF USE.PEN THEN RETURN
60 LOCATE 1,1
61 FOR X=1 TO 8:PRINT A(X);:PRINT:NEXT
62 RETURN
63 'Light Pen Subroutine
64 IF PENFLAG THEN PENFLAG=0:RETURN 75
65 IF PEN(8)=24 THEN MOVE=0:PEGS=32:GOSUB 25:CLS:RETURN 75
66 L=0:FOR X=1 TO 33:IF PEN(8)=L(X) OR PEN(8)=L(X)+1 THEN L=L(X):X=34
67 NEXT:IF L=0 THEN RETURN
68 T=0:FOR X=1 TO 33
69 IF PEN(9)>=T(X) AND PEN(9)<=T(X)+3 THEN T=T(X):X=34
70 NEXT:IF T=0 THEN RETURN
71 L2T=L^2-T
72 FOR X=1 TO 33
73 IF L2T=L2T(X) THEN PEN.MOVE=X:X=34
74 NEXT:RETURN
75 COLOR 6,1:CLS:GOSUB 55
76 IF USE.PEN THEN 77 ELSE 80
77 LOCATE 24,20:COLOR 4,7
78 PRINT"     Touch This Area To Re-Start       ";
79 GOTO 81
80 LOCATE 24,32:PRINT"Enter 99 to Re-Start";
81 LOCATE 16,50:COLOR 4,7
82 MOVE=MOVE+1
83 PRINT" Move #"MOVE;
84 LOCATE 17,50:PRINT" Pegs Remaining ="PEGS;
85 COLOR 6,1
86 LOCATE 22,32:PRINT STRING$(25,32);
87 LOCATE 22,32:PRINT"Move from ";
88 IF NOT USE.PEN THEN 92
89 PRINT"(Touch Pen)";:PEN.MOVE=0
90 IF PEN.MOVE=0 THEN 90
91 MOVE.FROM=PEN.MOVE:GOTO 95
92 INPUT MOVE.FROM:IF MOVE.FROM<>99 THEN 95
93 MOVE=0:PEGS=32:GOSUB 25:GOTO 75
94 SOUND 37,5:GOTO 86
95 IF MOVE.FROM<1 OR MOVE.FROM>33 THEN 94
96 IF P(MOVE.FROM)=EMPTY THEN 94
97 COLOR 22:LOCATE L(MOVE.FROM),T(MOVE.FROM):PRINT A;:COLOR 6
98 LOCATE 22,32:PRINT STRING$(25,32);
99 LOCATE 22,32:PRINT"Move to ";
100 IF NOT USE.PEN THEN 104
101 PRINT"(Touch Pen)";:PEN.MOVE=0
102 IF PEN.MOVE=0 THEN 102
103 MOVE.TO=PEN.MOVE:GOTO 105
104 INPUT MOVE.TO:IF MOVE.TO=99 THEN 93
105 IF MOVE.TO>=1 AND MOVE.TO<=33 THEN 108
106 COLOR 6:LOCATE L(MOVE.FROM),T(MOVE.FROM):PRINT A;
107 GOTO 94
108 IF P(MOVE.TO)=FULL THEN 106
109 IF MOVE.FROM<4 THEN MF=MOVE.FROM-6:GOTO 114
110 IF MOVE.FROM<7 THEN MF=MOVE.FROM-2:GOTO 114
111 IF MOVE.FROM>30 THEN MF=MOVE.FROM+6:GOTO 114
112 IF MOVE.FROM>27 THEN MF=MOVE.FROM+2:GOTO 114
113 MF=MOVE.FROM
114 IF MOVE.TO<4 THEN MT=MOVE.TO-6:GOTO 119
115 IF MOVE.TO<7 THEN MT=MOVE.TO-2:GOTO 119
116 IF MOVE.TO>30 THEN MT=MOVE.TO+6:GOTO 119
117 IF MOVE.TO>27 THEN MT=MOVE.TO+2:GOTO 119
118 MT=MOVE.TO
119 IF ABS(MT-MF)<>2 AND ABS(MT-MF)<>14 THEN 106
120 OP=(MF+MT)/2
121 IF OP<2 THEN OP=OP+6:GOTO 125
122 IF OP<7 THEN OP=OP+2:GOTO 125
123 IF OP>32 THEN OP=OP-6:GOTO 125
124 IF OP>27 THEN OP=OP-2
125 IF P(OP)=EMPTY THEN 106
126 P(MOVE.FROM)=EMPTY
127 P(OP)=EMPTY
128 P(MOVE.TO)=FULL
129 PEGS=PEGS-1
130 LOCATE L(MOVE.FROM),T(MOVE.FROM):PRINT AB;
131 LOCATE L(OP),T(OP):PRINT AB;
132 LOCATE L(MOVE.TO),T(MOVE.TO):PRINT A;
133 IF PEGS>1 THEN 81
134 LOCATE 22,30:PRINT STRING$(25,32);
135 LOCATE 22,26:COLOR 20,7
136 PRINT" **** You DID it !!! **** ";
137 IF P(17)=EMPTY THEN 139
138 LOCATE 23,24:PRINT" **** A PERFECT Game !!! **** ";
139 COLOR 6,1
140 FOR X=1 TO 3:FOR Y=20 TO 70:PLAY"MBT255L48N=Y;":NEXT:NEXT
141 LOCATE 23,1
142 END'of program.
```

## NUMZAP.BAS

```bas
10000 '======================================
10010 ' PROGRAM NUMZAP  Version 1.00
10020 ' Removes non-referenced line numbers
10030 ' from a BASIC program, to allow BASCOM
10040 ' to optimize over large blocks.
10050 '======================================
10060 '
10070 KEY OFF: WIDTH 80: CLS: locate ,,0
10080 DEFINT A-Z
10090 'arrays:
10100  DIM REFTABLE!(500)
10110 '
10120 'constants:
10130  TABLESIZE = 500: TRUE = -1: FALSE = NOT TRUE: FG = 7: BG = 0
10140  DELIM$ = " ,"
10150 '
10160 'main program
10170  GOSUB 11330    'initialize
10180  GOSUB 10220    'pass one: build reference table
10190  GOSUB 10420    'pass two: build output file
10200  GOSUB 12140    'clean up
10210  END
10220 '=======================
10230 ' SUBROUTINE PASS ONE
10240 ' Builds reference table
10250 '=======================
10260 '
10270 PASS = 1: LINENUM = 0: NUMREF = 0
10280 WHILE NOT EOF(1)
10290   GOSUB 13240  'abort?
10300   GOSUB 10620  'get line, init
10310   GOSUB 10690  'move lineptr to first non-digit
10320   GOSUB 10800  'move lineptr to next digit
10330   WHILE LINEPTR < LEN(INPLINE$)
10340     GOSUB 10910 'grab number
10350     GOSUB 11020 'and enter it in reftable
10360     GOSUB 10800 'move lineptr to next digit
10370     WEND
10380   LINENUM = LINENUM + 1: GOSUB 12270 'progress report
10390   WEND
10400 TOTALINES = LINENUM
10410 RETURN
10420 '========================
10430 ' SUBROUTINE PASS TWO
10440 ' Builds output file
10450 '========================
10460 '
10470 PASS = 2: LINENUM = 0
10480 CLOSE 1: OPEN SC$ FOR INPUT AS 1   'reset file
10490 '
10500 WHILE NOT EOF(1)
10510   GOSUB 13240   'abort?
10520   GOSUB 10620   'get line, init
10530   IF INSTR("1234567890", LEFT$(INPLINE$,1)) = 0 THEN 10580
10540   GOSUB 10910  'grab number
10550   GOSUB 11220 'is it in table?
10560   'if so, wipe out line number
10570      IF NOT FOUND THEN MID$(INPLINE$, 1, LINEPTR-1) = SPACE$(LINEPTR-1)
10580   PRINT#2, INPLINE$
10590   LINENUM = LINENUM + 1: GOSUB 12270  'progress report
10600   WEND
10610 RETURN
10620 '========================
10630 ' SUBROUTINE GET LINE
10640 '========================
10650 '
10660 LINE INPUT#1, INPLINE$
10670 LINEPTR = 1
10680 RETURN
10690 '========================
10700 ' SUBROUTINE NON-DIGIT
10710 ' Moves LINEPTR to first nondigit, or past end of line
10720 '========================
10730 '
10740 WHILE LINEPTR <= LEN(INPLINE$)
10750   C$ = MID$(INPLINE$, LINEPTR, 1)
10760   IF INSTR("1234567890", C$) = 0 THEN 10790
10770   LINEPTR = LINEPTR + 1
10780   WEND
10790 RETURN
10800 '=======================
10810 ' SUBROUTINE DIGIT
10820 ' Moves LINEPTR to next digit, or past EOL
10830 '=======================
10840 '
10850 WHILE LINEPTR <= LEN(INPLINE$)
10860   C$ = MID$(INPLINE$, LINEPTR, 1)
10870   IF INSTR("1234567890", C$) <> 0 THEN 10900
10880   LINEPTR = LINEPTR + 1
10890   WEND
10900 RETURN
10910 '========================
10920 ' SUBROUTINE GRAB NUMBER
10930 '========================
10940 '
10950 NUM$ = MID$(INPLINE$, LINEPTR, 1): LINEPTR = LINEPTR + 1
10960 WHILE LINEPTR <= LEN(INPLINE$) AND                                                INSTR("1234567890", MID$(INPLINE$, LINEPTR, 1)) <> 0
10970   NUM$ = NUM$ + MID$(INPLINE$, LINEPTR, 1)
10980   LINEPTR = LINEPTR + 1
10990   WEND
11000 NUMBER! = VAL(NUM$)
11010 RETURN
11020 '=========================
11030 ' SUBROUTINE ENTER_NUMBER
11040 ' Checks if NUMBER is already in
11050 ' REFTABLE, if not, enters it.
11060 '==========================
11070 'in table?
11080  GOSUB 11220
11090  IF FOUND THEN RETURN
11100 '
11110 'table full?
11120 IF NUMREF < TABLESIZE THEN 11170
11130    LOCATE 24,20: PRINT "Reference table full! NUMZAP aborted!"
11140    LOCATE 25,20: PRINT "Hit any key to exit"
11150    I$ = INKEY$: IF I$ = "" THEN 11150
11160    SYSTEM
11170 '
11180 'enter in table
11190 NUMREF = NUMREF + 1
11200 REFTABLE!(NUMREF) = NUMBER!
11210 RETURN
11220 '=======================
11230 ' SUBROUTINE SEARCH_TABLE
11240 ' Attempts to find NUMBER in REFTABLE.
11250 ' Sets FOUND if sucessful.
11260 '========================
11270 '
11280 FOUND = FALSE
11290 FOR I = 1 TO NUMREF
11300   IF REFTABLE!(I) = NUMBER! THEN FOUND = TRUE: RETURN
11310   NEXT I
11320 RETURN
11330 '================
11340 'SUBROUTINE INIT
11350 'Initialization
11360 '================
11370 '
11380  GOSUB 11430          'print title page
11390  GOSUB 12640          'try expert mode
11400  IF FOUND THEN 11420
11410  GOSUB 11650          'get i/o files
11420  RETURN
11430 '==================
11440 'SUBROUTINE TITLE
11450 'Prints title page
11460 '==================
11470 '
11480 CLS: LOCATE 2
11490 PRINT TAB(14) "╔═══════════════════════════════════════════════════════╗"
11500 PRINT TAB(14) "║                                                       ║"
11510 PRINT TAB(14) "║                 NUMZAP Version 1.00                   ║"
11520 PRINT TAB(14) "║        Selective Line Number Removing Utility         ║"
11530 PRINT TAB(14) "║                                                       ║"
11540 PRINT TAB(14) "║     If you have used this program and found it of     ║"
11550 PRINT TAB(14) "║   value, your $15 contribution would be appreciated.  ║"
11560 PRINT TAB(14) "║                                                       ║"
11570 PRINT TAB(14) "║               David Whitman                           ║"
11580 PRINT TAB(14) "║               136 Wellington Terrace                  ║"
11590 PRINT TAB(14) "║               Lansdale, PA 19446                      ║"
11600 PRINT TAB(14) "║                                                       ║"
11610 PRINT TAB(14) "║   You are encouraged to copy and share this program.  ║"
11620 PRINT TAB(14) "╚═══════════════════════════════════════════════════════╝
11630 PRINT
11640 RETURN
11650 '=========================
11660 'SUBROUTINE GETFILES
11670 'Prompts for i/o filenames
11680 '=========================
11690 '
11700  ON ERROR GOTO 12030
11710 '
11720 'input file
11730 LOCATE 19,1: GOSUB 12260: INPUT "Input file name? [.bas] ", S$
11740 IF S$ = "" THEN BEEP: GOTO 11730
11750 'no ext., add default
11760  IF INSTR(S$,".") = 0 THEN SC$ = S$ + ".bas"                                         ELSE SC$ = S$: S$ = LEFT$(S$, INSTR(S$, ".")-1)
11770 '
11780 'test for 1) file availability 2) ascii mode
11790 OPEN SC$ FOR INPUT AS #1: CLOSE #1
11800  OPEN SC$ AS #1 LEN=1: FIELD #1,1 AS BYTE$
11810  GET 1: IF BYTE$ <> CHR$(&HFF) THEN 11900
11820    BEEP: LOCATE 20,1: COLOR BG,FG
11830    PRINT"File in non-ascii format.  ";
11840    PRINT"Hit Esc to exit, anything else to continue...";: COLOR FG,BG
11850    I$ = INKEY$: IF I$ = "" THEN 11850
11860    IF I$ = CHR$(27) THEN CLS: END
11870    LOCATE ,1: PRINT TAB(80): LOCATE 19,25: PRINT TAB(80)
11880    CLOSE 1: GOTO 11730
11890 '
11900 CLOSE 1
11910 OPEN SC$ FOR INPUT AS #1
11920 '
11930 'output file
11940  LOCATE 21,1: GOSUB 12260: PRINT "Output file name? ["; S$; ".zap]";
11950  INPUT "", O$
11960  'default:
11970   IF O$ = "" THEN O$ = S$ + ".zap"
11980   OPEN O$ FOR OUTPUT AS #2
11990 '
12000 ON ERROR GOTO 0
12010 '
12020 RETURN
12030 'getfile error handler
12040 IF ERL <> 11790 AND ERL <> 13020 THEN 12130
12050   LOCATE 20,1: COLOR BG,FG: BEEP
12060   PRINT SC$; " not found.  Press Esc to exit, anything else to continue.";
12070   SC$ = INKEY$: IF SC$ = "" THEN 12070
12080   IF SC$ = CHR$(27) THEN COLOR FG,BG: CLS: END
12090   LOCATE ,1: COLOR FG,BG: PRINT TAB(80)
12100   LOCATE 19,25: PRINT TAB(80); : LOCATE ,1
12110   IF ERL = 11790 THEN RESUME 11730 ELSE FOUND = FALSE: RESUME 13230
12120 '
12130 ON ERROR GOTO 0
12140 '===================
12150 ' SUBROUTINE CLEANUP
12160 '===================
12170 '
12180 GOSUB 12250
12190 CLS
12200 RETURN
12210 '========================
12220 ' NOISE LIBRARY
12230 ' One line noise subroutines
12240 '========================
12250 FOR I = 1 TO 3: SOUND 500*I,3: NEXT: SOUND 550,5: SOUND 800,3:RETURN
12260 FOR I = 1 TO 3: SOUND 1000*I,1: NEXT I: RETURN
12270 '=========================
12280 'SUBROUTINE PROGESS REPORT
12290 '=========================
12300 X = POS(0): Y = CSRLIN: LOCATE 25,1: COLOR BG,FG
12310 PRINT "Pass ";
12320 IF PASS = 1 THEN PRINT "ONE"; ELSE PRINT "TWO";
12330 PRINT " in progress.";
12340 PRINT TAB(26) "<<Hit Esc to abort>>";
12350 IF PASS = 1 THEN PRINT TAB(58) "Lines processed:"; LINENUM;                        ELSE PRINT TAB(50) "Lines processed:"; LINENUM; "of"; TOTALINES;
12360 PRINT TAB(80);: COLOR FG,BG: LOCATE Y,X
12370 RETURN
12380 '===================================================
12390 'SUBROUTINE GETFIELD
12400 'Starting at lineptr, trys to get next field in FLD$
12410 'Sets found if sucessful. Moves lineptr past field
12420 '====================================================
12430 'find next non-delim or run off end
12440  WHILE LINEPTR <= ENDPTR
12450    IF INSTR(DELIM$,MID$(INPLINE$,LINEPTR,1)) = 0 THEN 12480
12460    LINEPTR = LINEPTR + 1
12470    WEND
12480 'past end?
12490  IF LINEPTR <= ENDPTR  THEN 12520
12500    FOUND = FALSE
12510    RETURN
12520 'find delim or go 1 past end
12530  LINEPTR2 = LINEPTR
12540  WHILE LINEPTR2 <= ENDPTR
12550    IF INSTR(DELIM$,MID$(INPLINE$,LINEPTR2,1)) > 0 THEN 12580
12560    LINEPTR2 = LINEPTR2 + 1
12570    WEND
12580 'copy field
12590  FLD$ = MID$(INPLINE$,LINEPTR,LINEPTR2-LINEPTR)
12600 'lineptr past field, set found
12610  LINEPTR = LINEPTR2
12620  FOUND = TRUE
12630  RETURN
12640 '========================
12650 'SUBROUTINE COMMAND_LINE
12660 'Reads command line to try expert mode
12670 '========================
12680 FOUND = FALSE: ON ERROR GOTO 12030
12690 'set up psp seg
12700  DEF SEG: DIM SUBR(3)
12710  DEF USR = VARPTR(SUBR(0))
12720     'pop  cx      ;pc for return
12730     'pop  bx      ;cs for return: jackpot!
12740     'push bx      ;restore stack
12750     'push cx      ;ditto
12760     'sub  bx, 10  ;beginning of segment, pass to basic in bx
12770     'ret          ;back to basic
12780  SUBR(0) = &H5B59
12790  SUBR(1) = &H5153
12800  SUBR(2) = &HEB83
12810  SUBR(3) = &HCB10
12820  PSPSEG = USR(I)
12830  DEF SEG = PSPSEG
12840 '
12850 'now get command line
12860 ENDPTR = PEEK(&H80)
12870 IF ENDPTR = 0 THEN RETURN
12880 INPLINE$ = ""
12890 FOR I = 1 TO ENDPTR
12900   INPLINE$ = INPLINE$ + CHR$(PEEK(&H80+I))
12910   NEXT I
12920 '
12930 'set up to parse
12940  LINEPTR = 1: LINEPTR2 = 1
12950 '
12960 'get input file, open
12970  GOSUB 12380
12980  IF NOT FOUND THEN RETURN
12990  IF INSTR(FLD$,".") = 0 THEN SC$ = FLD$ + ".bas": S$ = FLD$                         ELSE SC$ = FLD$: S$ = LEFT$(FLD$, INSTR(FLD$,".")-1)
13000 '
13010 'test for 1)file availability 2)ascii mode
13020  OPEN SC$ FOR INPUT AS 1: CLOSE 1
13030  OPEN SC$ AS #1 LEN=1: FIELD #1,1 AS BYTE$
13040  GET 1: IF BYTE$ <> CHR$(&HFF) THEN 13130
13050    BEEP: COLOR BG,FG: LOCATE 20,1
13060    PRINT"File in non-ascii format.  ";
13070    PRINT"Hit Esc to exit, anything else to continue...";: COLOR FG,BG
13080    I$ = INKEY$: IF I$ = "" THEN 13080
13090    IF I$ = CHR$(27) THEN CLS: END
13100    LOCATE ,1: PRINT TAB(80)
13110    CLOSE 1: FOUND = FALSE: RETURN
13120 '
13130 CLOSE 1: OPEN SC$ FOR INPUT AS #1
13140 '
13150 '
13160 'object file
13170  GOSUB 12380
13180  IF FOUND THEN O$ = FLD$ ELSE O$ = S$ + ".zap"
13190  OPEN O$ FOR OUTPUT AS 2
13200 '
13210 ON ERROR GOTO 0
13220 FOUND = TRUE
13230 RETURN
13240 '============================
13250 ' SUBROUTINE ABORT
13260 ' Tests for Esc, exits if so.
13270 '============================
13280 C$ = INKEY$: IF C$ <> CHR$(27) THEN RETURN
13290 SOUND 100,5: CLS: PRINT "====NUMZAP aborted from keyboard===="
13300 END
```

## RENUM.BAS

```bas
10000 '==================================
10010 ' PROGRAM RENUM  Version 1.00
10020 ' Renumbers a file which has been
10030 ' passed through NUMZAP.
10040 '==================================
10050 '
10060 KEY OFF: WIDTH 80: CLS: LOCATE ,,0
10070 DEFINT A-Z
10080 '
10090 'constants:
10100  TRUE = -1: FALSE = NOT TRUE: FG = 7: BG = 0
10110  DELIM$ = " ,"
10120 '
10130 'main program
10140  GOSUB 11370    'initialize
10150  GOSUB 10180    'filter data
10160  GOSUB 12060    'clean up
10170  END
10180 '===========================================================
10190 ' SUBROUTINE FILTER
10200 ' Reads a line, adds a number if appropriate, and outputs it
10210 '===========================================================
10220 '
10230 LINENUM = 0            'counts lines processed for progress report
10240 LOCTR!  = 1            'BASIC linenumber for current line
10250 WHILE NOT EOF(1)
10260   GOSUB 13020                                 'abort?
10270   GOSUB 10490                                 'get line, init
10280   GOSUB 10350                                 'test for line number
10290   IF FOUND THEN GOSUB 10560 ELSE GOSUB 10900  'set up output line
10300   PRINT#2, OUTLINE$                           'output
10310   LOCTR! = LOCTR! + 1                         'update loctr
10320   LINENUM = LINENUM + 1: GOSUB 12200          'progress report
10330   WEND                                        'and do it again
10340 RETURN
10350 '============================================================
10360 ' SUBROUTINE TEST_LINE_NUMBER
10370 ' Looks for a line number at the beginning of the input line.
10380 ' If found, sets NUMBER to its value, and sets FOUND true.
10390 '============================================================
10400 '
10405   IF INPLINE$ = "" THEN 10460    'blank line, failed
10410   IF INSTR("1234567890", LEFT$(INPLINE$,1)) = 0 THEN 10460  'failed
10420   GOSUB 11260  'grab number
10430   FOUND = TRUE
10440   RETURN
10450 '
10460 ' failure exit
10470   FOUND = FALSE
10480   RETURN
10490 '========================
10500 ' SUBROUTINE GET LINE
10510 '========================
10520 '
10530 LINE INPUT#1, INPLINE$
10540 LINEPTR = 1
10550 RETURN
10560 '===============================================
10570 ' SUBROUTINE NUMBERED_LINE
10580 ' Processes input line which is already numbered
10590 '===============================================
10600 '
10610 IF NUMBER! < LOCTR! THEN 10660  'fatal error
10620 '
10630 LOCTR! = NUMBER!
10640 OUTLINE$ = INPLINE$
10650 RETURN
10660 '====================================
10670 ' SUBROUTINE FATAL_ERROR
10680 ' Prints error message and aborts
10690 ' when too many lines have been added
10700 ' between numbered lines.
10710 '====================================
10720 '
10730 CLS
10740 GOSUB 12190  'make awful noise
10750 LOCATE 6
10760 PRINT TAB(22) "╔═════════════════════════════════════════════╗"
10770 PRINT TAB(22) "║                                             ║"
10780 PRINT TAB(22) "║              FATAL ERROR!!!                 ║"
10790 PRINT TAB(22) "║                                             ║"
10800 PRINT TAB(22) "║         Too many lines inserted             ║"
10810 PRINT TAB(22) "║         before line"; NUMBER!;  TAB(68)    "║"
10820 PRINT TAB(22) "║                                             ║"
10830 PRINT TAB(22) "║   This file is unsuitable for renumbering.  ║"
10840 PRINT TAB(22) "║                                             ║"
10850 PRINT TAB(22) "╚═════════════════════════════════════════════╝"
10860 LOCATE 25,1: COLOR BG,FG
10870 PRINT TAB(27) "Hit any key to exit..." TAB(80);
10880 I$ = INKEY$: IF I$ = "" THEN 10880
10890 COLOR FG,BG: CLS: END
10900 '==============================
10910 ' SUBROUTINE UN-NUMBERED LINE
10920 ' Adds a line number.
10930 '==============================
10940 '
10950 LN$ = STR$(LOCTR!): LN$ = RIGHT$(LN$,LEN(LN$)-1)
10960 '
10970 'decide how to handle this
10980  GOSUB 11150  'point to first non-space
10990 '
11000 'blank line
11010  IF LINEPTR <= LEN(INPLINE$) THEN 11050
11020     OUTLINE$ = LN$ + " '"
11030     RETURN
11040 '
11050 'text exists, but not enough room for line number
11060  IF LINEPTR > (LEN(LN$) + 1) THEN 11110
11070    'nope, so make room
11080     OUTLINE$ = LN$ + INPLINE$
11090     RETURN
11100 '
11110 'already enough room for line number
11120  OUTLINE$ = INPLINE$
11130  MID$(OUTLINE$,1) = LN$
11140  RETURN
11150 '============================================
11160 ' SUBROUTINE FIND_TEXT
11170 ' Moves LINEPTR to next non-space or past EOL
11180 '============================================
11190 '
11200 WHILE LINEPTR <= LEN(INPLINE$)
11210   IF MID$(INPLINE$,LINEPTR,1) <> " " THEN RETURN
11220   LINEPTR = LINEPTR + 1
11230   WEND
11240 '
11250 RETURN
11260 '========================
11270 ' SUBROUTINE GRAB NUMBER
11280 '========================
11290 '
11300 NUM$ = MID$(INPLINE$, LINEPTR, 1): LINEPTR = LINEPTR + 1
11310 WHILE LINEPTR <= LEN(INPLINE$) AND INSTR("1234567890", MID$(INPLINE$, LINEPTR, 1)) <> 0
11320   NUM$ = NUM$ + MID$(INPLINE$, LINEPTR, 1)
11330   LINEPTR = LINEPTR + 1
11340   WEND
11350 NUMBER! = VAL(NUM$)
11360 RETURN
11370 '================
11380 'SUBROUTINE INIT
11390 'Initialization
11400 '================
11410 '
11420  GOSUB 11470          'print title page
11430  GOSUB 12540          'try expert mode
11440  IF FOUND THEN 11460
11450  GOSUB 11690          'get i/o files
11460  RETURN
11470 '==================
11480 'SUBROUTINE TITLE
11490 'Prints title page
11500 '==================
11510 '
11520 CLS: LOCATE 2
11530 PRINT TAB(14) "╔═══════════════════════════════════════════════════════╗"
11540 PRINT TAB(14) "║                                                       ║"
11550 PRINT TAB(14) "║                 RENUM  Version 1.00                   ║"
11560 PRINT TAB(14) "║        Renumbering Utility for use with NUMZAP        ║"
11570 PRINT TAB(14) "║                                                       ║"
11580 PRINT TAB(14) "║     If you have used this program and found it of     ║"
11590 PRINT TAB(14) "║   value, your $15 contribution would be appreciated.  ║"
11600 PRINT TAB(14) "║                                                       ║"
11610 PRINT TAB(14) "║               David Whitman                           ║"
11620 PRINT TAB(14) "║               136 Wellington Terrace                  ║"
11630 PRINT TAB(14) "║               Lansdale, PA 19446                      ║"
11640 PRINT TAB(14) "║                                                       ║"
11650 PRINT TAB(14) "║   You are encouraged to copy and share this program.  ║"
11660 PRINT TAB(14) "╚═══════════════════════════════════════════════════════╝
11670 PRINT
11680 RETURN
11690 '=========================
11700 'SUBROUTINE GETFILES
11710 'Prompts for i/o filenames
11720 '=========================
11730 '
11740  ON ERROR GOTO 11950
11750 '
11760 'input file
11770 LOCATE 19,1: GOSUB 12180: INPUT "Input file name? [.zap] ", S$
11780 IF S$ = "" THEN BEEP: GOTO 11770
11790 'no ext., add default
11800  IF INSTR(S$,".") = 0 THEN SC$ = S$ + ".zap"                                         ELSE SC$ = S$: S$ = LEFT$(S$, INSTR(S$, ".")-1)
11810 '
11820 'open file, error trap if not there
11830  OPEN SC$ FOR INPUT AS #1
11840 '
11850 'output file
11860  LOCATE 21,1: GOSUB 12180: PRINT "Output file name? ["; S$; ".ren]";
11870  INPUT "", O$
11880  'default:
11890   IF O$ = "" THEN O$ = S$ + ".ren"
11900   OPEN O$ FOR OUTPUT AS #2
11910 '
11920 ON ERROR GOTO 0
11930 '
11940 RETURN
11950 'getfile error handler
11960 IF ERL <> 11830 AND ERL <> 12920 THEN 12050
11970   LOCATE 20,1: COLOR BG,FG: BEEP
11980   PRINT SC$; " not found.  Press Esc to exit, anything else to continue.";
11990   SC$ = INKEY$: IF SC$ = "" THEN 11990
12000   IF SC$ = CHR$(27) THEN COLOR FG,BG: CLS: END
12010   LOCATE ,1: COLOR FG,BG: PRINT TAB(80)
12020   LOCATE 19,25: PRINT TAB(80); : LOCATE ,1
12030   IF ERL = 11830 THEN RESUME 11770 ELSE FOUND = FALSE: RESUME 13010
12040 '
12050 ON ERROR GOTO 0
12060 '===================
12070 ' SUBROUTINE CLEANUP
12080 '===================
12090 '
12100 GOSUB 12170
12110 CLS
12120 RETURN
12130 '========================
12140 ' NOISE LIBRARY
12150 ' One line noise subroutines
12160 '========================
12170 FOR I = 1 TO 3: SOUND 500*I,3: NEXT: SOUND 550,5: SOUND 800,3:RETURN
12180 FOR I = 1 TO 3: SOUND 1000*I,1: NEXT I: RETURN
12190 FOR I = 1 TO 3: SOUND 200,2: SOUND 37,1: SOUND 100,2: NEXT I: SOUND 200,2:          RETURN
12200 '=========================
12210 'SUBROUTINE PROGESS REPORT
12220 '=========================
12230 X = POS(0): Y = CSRLIN: LOCATE 25,1: COLOR BG,FG
12240 PRINT TAB(26) "<<Hit Esc to abort>>";
12250 PRINT TAB(58) "Lines processed:"; LINENUM;
12260 PRINT TAB(80);: COLOR FG,BG: LOCATE Y,X
12270 RETURN
12280 '===================================================
12290 'SUBROUTINE GETFIELD
12300 'Starting at lineptr, trys to get next field in FLD$
12310 'Sets found if sucessful. Moves lineptr past field
12320 '====================================================
12330 'find next non-delim or run off end
12340  WHILE LINEPTR <= ENDPTR
12350    IF INSTR(DELIM$,MID$(INPLINE$,LINEPTR,1)) = 0 THEN 12380
12360    LINEPTR = LINEPTR + 1
12370    WEND
12380 'past end?
12390  IF LINEPTR <= ENDPTR  THEN 12420
12400    FOUND = FALSE
12410    RETURN
12420 'find delim or go 1 past end
12430  LINEPTR2 = LINEPTR
12440  WHILE LINEPTR2 <= ENDPTR
12450    IF INSTR(DELIM$,MID$(INPLINE$,LINEPTR2,1)) > 0 THEN 12480
12460    LINEPTR2 = LINEPTR2 + 1
12470    WEND
12480 'copy field
12490  FLD$ = MID$(INPLINE$,LINEPTR,LINEPTR2-LINEPTR)
12500 'lineptr past field, set found
12510  LINEPTR = LINEPTR2
12520  FOUND = TRUE
12530  RETURN
12540 '========================
12550 'SUBROUTINE COMMAND_LINE
12560 'Reads command line to try expert mode
12570 '========================
12580 FOUND = FALSE: ON ERROR GOTO 11950
12590 'set up psp seg
12600  DEF SEG: DIM SUBR(3)
12610  DEF USR = VARPTR(SUBR(0))
12620     'pop  cx      ;pc for return
12630     'pop  bx      ;cs for return: jackpot!
12640     'push bx      ;restore stack
12650     'push cx      ;ditto
12660     'sub  bx, 10  ;beginning of segment, pass to basic in bx
12670     'ret          ;back to basic
12680  SUBR(0) = &H5B59
12690  SUBR(1) = &H5153
12700  SUBR(2) = &HEB83
12710  SUBR(3) = &HCB10
12720  PSPSEG = USR(I)
12730  DEF SEG = PSPSEG
12740 '
12750 'now get command line
12760 ENDPTR = PEEK(&H80)
12770 IF ENDPTR = 0 THEN RETURN
12780 INPLINE$ = ""
12790 FOR I = 1 TO ENDPTR
12800   INPLINE$ = INPLINE$ + CHR$(PEEK(&H80+I))
12810   NEXT I
12820 '
12830 'set up to parse
12840  LINEPTR = 1: LINEPTR2 = 1
12850 '
12860 'get input file, open
12870  GOSUB 12280
12880  IF NOT FOUND THEN RETURN
12890  IF INSTR(FLD$,".") = 0 THEN SC$ = FLD$ + ".zap": S$ = FLD$                         ELSE SC$ = FLD$: S$ = LEFT$(FLD$, INSTR(FLD$,".")-1)
12900 '
12910 'open file (error trap if not available)
12920  OPEN SC$ FOR INPUT AS 1
12930 '
12940 'output file
12950  GOSUB 12280
12960  IF FOUND THEN O$ = FLD$ ELSE O$ = S$ + ".ren"
12970  OPEN O$ FOR OUTPUT AS 2
12980 '
12990 ON ERROR GOTO 0
13000 FOUND = TRUE
13010 RETURN
13020 '============================
13030 ' SUBROUTINE ABORT
13040 ' Tests for Esc, exits if so.
13050 '============================
13060 C$ = INKEY$: IF C$ <> CHR$(27) THEN RETURN
13070 SOUND 100,5: CLS: PRINT "====RENUM aborted from keyboard===="
13080 END
```

## SOLFE.BAS

```bas
10 CLS:KEY OFF:WIDTH 80:LOCATE 10
15 FOR I = 1 TO 35:A$=A$+CHR$(205):NEXT I
20 PRINT TAB(24) CHR$(201)+A$+CHR$(187)
30 PRINT TAB(24) CHR$(186)+"            SOLFEGGIETTO           "+CHR$(186)
40 PRINT TAB(24) CHR$(186)+"                                   "+CHR$(186)
50 PRINT TAB(24) CHR$(186)+"     Carl Phillipp Emanuel Bach    "+CHR$(186)
60 PRINT TAB(24) CHR$(200)+A$+CHR$(188)
70 REM Transcription by Stephanie George, 4 July 1983.
80 REM C.P.E. Bach was one of J.S. Bach's 22 children!
90 REM This plays at the proper tempo, Allegro vivace.
100 REM Please send comments via Compuserve [70116,1065] c/o Jack.
110 PLAY"ML"
120 PLAY"O2 e-16 c16 e-16 g16 O3 c16 e-16 d16 c16 O2 b16 g16 b16 O3 d16 g16 f16 e-16 d16"
130 PLAY "O3 e-16 c16 e-16 g16 O4 c16 e-16 d16 c16 d16 c16 O3 b16 a16 g16 f16 e-16 d16"
140 PLAY "O3 e-16 c16 e-16 g16 O4 c16 e-16 d16 c16 O3 b16 g16 b16 O4 d16 g16 f16 e-16 d16"
150 PLAY "O4 e-16 c16 e-16 g16 O5 c16 e-16 d16 c16 d16 c16 O4 b16 a16 g16 f16 e-16 d16"
160 PLAY "O4 e-16 c16 O3 g16 e-16 c16 O5 c16 O4 g16 e-16 a-16 O2 f16 a16 O3 c16 f16 a-16 O4 c16 e-16"
170 PLAY "O4 d16 O3 b-16 f16 d16 O2 b-16 O4 b-16 f16 d16 g16 O2 e-16 g16 b-16 O3 e-16 g16 b-16 O4 d16"
180 PLAY "O4 c16 O3 a16 g+16 a16 O4 c16 O3 a16 g+16 a16 O4 e-16 c16 O3 g16 a16 O4 e-16 c16 O3 g16 a16"
190 PLAY "O4 d16 c16 O3 f+16 a16 O4 a16 c16 O3 f+16 a16 O4 f+16 c16 O3 d16 a16 O4 c16 O3 a16 f+16 d16"
200 PLAY "O3 b-16 O1 g16 b-16 O2 d16 g16 b-16 a16 g16 f+16 d16 f+16 a16 O3 d16 c16 O2 b-16 a16"
210 PLAY "O2 b-16 g16 b-16 O3 d16 g16 b-16 a16 g16 a16 g16 f+16 e16 d16 c16 O2 b-16 a16"
220 PLAY "O2 b-16 g16 b-16 O3 d16 g16 b-16 a16 g16 f+16 d16 f+16 a16 O4 d16 c16 O3 b-16 a16"
230 PLAY "O3 b-16 g16 b-16 O4 d16 g16 b-16 a16 g16 a16 g16 f+16 e16 d16 c16 O3 b-16 a16"
240 PLAY "O3 b-16 g16 b-16 O4 d16 g16 d16 O3 b-16 g16 O2 f16 O4 g16 d16 O3 b16 g16 b16 O4 d16 g16"
250 PLAY"o4 c16 o3 g16 o4 g16 o3 g16 o4 c16 o3 g16 o4 g16 o3 g16 b16 g16 o4 f16 o3 g16 b16 g16 o4 f16 o3 g16
260 PLAY "o4 e-16 c16 e-16 g16 o5 c16 o4 g16 e-16 c16 o2 b-16 o5 c16 o4 g16 e16 c16 e16 g16 o5 c16"
270 PLAY "o4 f16 c16 o5 c16 o4 c16 f16 c16 o5 c16 o4 c16 e16 c16 b-16 c16 e16 c16 b-16 c16"
280 PLAY "o4 a-16 o1 f16 a-16 o2 c16 f16 a-16 g16 f16 e16 c16 e16 g16 o3 c16 o2 b-16 a-16 g16"
290 PLAY "o2 a-16 f16 a-16 o3 c16 f16 a-16 g16 f16 g16 f16 e16 d16 c16 o2 b-16 a-16 g16"
300 PLAY "o2 a-16 f16 a-16 o3 c16 f16 a-16 g16 f16 e16 c16 e16 g16 o4 c16 o3 b-16 a-16 g16"
310 PLAY "o3 a-16 f16 a-16 o4 c16 f16 a-16 g16 f16 g16 f16 e16 d16 c16 o3 b-16 a-16 g16"
320 PLAY "o3 a-16 o4 f16 c16 o3 a-16 f16 o4 c16 o3 a-16 f16 c16 a-16 f16 c16 o2 a-16 o3 f16 c16 o2 a-16"
330 PLAY "o2 d-2 o4 a-16 f16 e16 f16 g16 f16 e16 f16"
340 PLAY "o2 c2 o3 a-16 f16 e16 f16 g16 f16 e16 f16"
350 PLAY "o1 b2 o5 d16 o4 f16 g16 a-16 g16 f16 e-16 d16"
360 PLAY "o4 e-16 g16 o5 c16 o4 g16 b-16 a-16 g16 f16 e-4 d4"
370 PLAY "o4 c16 o3 g16 o4 g16 o3 g16 o4 c16 o3 g16 o4 g16 o3 g16 b16 g16 o4 f16 o3 g16 b16 g16 o4 g16 o3 g16"
380 PLAY "o3 b-16 g16 o4 e16 o3 g16 b-16 g16 o4 e16 o3 g16 a16 o4 e-16 o5 c16 o4 e-16 o3 a16 o4 e-16 o5 c16 o4 e-16"
390 PLAY "o3 a-16 f16 o4 d16 o3 f16 a-16 f16 o4 d16 o3 f16 g16 o4 d-16 b-16 d-16 o3 g16 o4 d-16 b-16 d-16"
400 PLAY "o3 f+16 e-16 o4 c16 o3 e-16 f+16 e-16 o4 c16 o3 e-16 e-16 o4 c16 o5 c16 o4 c16 o3 e-16 o4 c16 o5 c16 o4 c16"
410 PLAY "o3 e-16 o4 c16 e-16 g16 o5 c16 g16 e-16 c16 g16 e-16 c16 o3 g16 o4 f16 d16 o3 b16 f16"
420 PLAY "o3 e-16 o2 c16 e-16 g16 o3 c16 e-16 d16 c16 o2 b16 g16 b16 o3 d16 g16 f16 e-16 d16"
430 PLAY "o3 e-16 c16 e-16 g16 o4 c16 e-16 d16 c16 d16 c16 o3 b16 a16 g16 f16 e-16 d16"
440 PLAY "o3 e-16 c16 e-16 g16 o4 c16 e-16 d16 c16 o3 b16 g16 b16 o4 d16 g16 f16 e-16 d16"
450 PLAY "o4 e-16 c16 e-16 g16 o5 c16 e-16 d16 o4 b16 o5 c16 o4 g16 e-16 d16 c16 o3 g16 e-16 d16"
460 PLAY "o3 c16. p16 p8 p4 p2 "
470 END
```

## WMTELL.BAS

```bas
10 SCREEN 0,1:WIDTH 80
20 COLOR 6,1,1
30 CLS:KEY OFF
40 DEFINT I:DEFSTR M
50 LOCATE 11,28,0,0,6:PRINT CHR$(201)STRING$(26,205)CHR$(187)
60 PRINT TAB(28)CHR$(186)" The William Tell Ovature "CHR$(186)
70 PRINT TAB(28):PRINT CHR$(200)STRING$(26,205)CHR$(188)
80 PLAY"MBL16T155"
90 FOR I=1 TO 100
100  READ M
110  PLAY M
120 NEXT
130 END
140 DATA "o2mnb4p8msbbmnb4p8msbbb8g#8
150 DATA "e8g#8b8g#8b8o3e8o2b8g#8e8g#8
160 DATA "b8g#8b8o3e8o2mnb4p8msbbmnb4
170 DATA "p8msbbmnb4p8msbbmnb4p8msbb
180 DATA "b8bbb8b8b8bbb8b8b8bb
190 DATA "b8b8b8bbb8b8mlb2
200 DATA "b2b8p8p4p4
210 DATA "p8mso1bbb8bbb8bbo2e8f#8g#8o1bb
220 DATA "b8bbo2e8g#g#f#8d#8o1b8bbb8bb
230 DATA "b8bbo2e8f#8g#8eg#mlb4bmsag#f#
240 DATA "e8g#8e8o3bbb8bbb8bbo4e8f#8
250 DATA "g#8o3bbb8bbo4e8g#g#f#8d#8o3b8bb
260 DATA "b8bbb8bbo4e8f#8g#8mleg#b4
270 DATA "bag#f#mse8g#8e8o3g#g#g#8g#g#g#8g#g#
280 DATA "g#8o4c#8o3g#8o4c#8o3g#8o4c#8o3g#8f#8e8d#8
290 DATA "c#8g#g#g#8g#g#g#8g#g#g#8o4c#8o3g#8o4c#8
300 DATA "o3g#8o4c#8o3b8a#8b8a#8b8g#g#g#8g#g#
310 DATA "g#8g#g#g#8o4c#8o3g#8o4c#8o3g#8o4c#8o3g#8f#8
320 DATA "e8d#8c#8g#g#g#8g#g#g#8g#g#g#8o4c#8
330 DATA "o3g#8o4c#8o3g#8o4c#8o3b8a#8b8o2bbb8f#f#
340 DATA "f#8f#f#f#8g#8a8f#4mna8msg#8mne4
350 DATA "msg#8f#8f#8f#8o3f#f#f#8f#f#f#8g#8
360 DATA "a8mnf#4msa8g#8mne4msg#8f#8o2bb
370 DATA "b8o1bbb8bbb8bbo2mne8f#8g#8o1bb
380 DATA "b8bbo2e8g#g#f#8d#8o1b8bbb8bb
390 DATA "b8bbo2e8f#8g#8eg#mlb4mnbag#f#
400 DATA "e8g#8e8o3bbb8bbb8bbo4e8f#8
410 DATA "g#8o3bbb8bbo4e8g#g#f#8d#8o3b8bb
420 DATA "b8bbb8bbo4e8f#8g#8mleg#mlb4
430 DATA "mnbag#f#mne8g#8e8o3mle56f56g56a56b56o4c56d56mne8eee8e8g#4.
440 DATA "f#8e8d#8e8c#8mso3bo4c#o3bo4c#o3b
450 DATA "o4c#d#eo3abababo4c#d#o3g#ag#ag#abo4c#o3f#
460 DATA "g#f#g#f#g#f#g#f#g#f#d#o2bo3mlbo4c#d#e8d#8e8
470 DATA "c#8o3msbo4c#o3bo4c#o3bo4c#d#eo3abababo4c#d#o3g#
480 DATA "ag#ag#abo4c#o3f#g#f#g#f#af#emne8p8mlc#4
490 DATA "mnc#o2cmso3c#o2co3d#c#o2baag#ec#c#c#c#c#e
500 DATA "d#o1cg#g#g#g#g#g#o2c#eg#o3c#c#c#c#c#o2co3c#o2co3d#
510 DATA "c#o2baag#ec#c#c#c#c#ed#o1cg#g#g#g#g#mng#
520 DATA "o2c#eg#o3msc#ed#c#d#o2cg#g#g#o3g#ec#d#o2cg#g#g#
530 DATA "o3g#ec#d#o2bg#g#a#gd#d#g#gg#gg#ag#f#e
540 DATA "o1ba#bo2eo1bo2f#o1bo2g#ed#eg#eaf#bo3g#f#ed#
550 DATA "f#ec#o2bo3c#o2bo3c#d#ef#g#o2ababo3c#d#ef#o2g#
560 DATA "ag#aco3c#d#eo2f#g#f#g#f#g#f#g#f#g#f#d#o1b
570 DATA "co2c#d#eo1ba#bo2eo1bo2f#o1bo2g#ed#eg#eaf#b
580 DATA "o3g#f#ed#f#ec#o2bo3c#o2bo3c#d#ef#g#o2ababo3c#
590 DATA "d#ef#o2g#ag#abo3c#d#eo2f#o3c#o2co3c#d#c#o2af#mne
600 DATA "o3mlef#g#abo4c#d#mne8mseee8e8g#4.
610 DATA "msf8mse8d#8e8c#8o3bo4c#o3bo4c#o3bo4c#d#eo3a
620 DATA "bababo4c#d#o3g#ag#ag#abo4c#o3f#g#f#g#f#
630 DATA "g#f#g#f#g#f#d#o2bo3mlbo4c#d#mne8eee8e8g#4.
640 DATA "msf#8e8d#8e8c#8o3bo4c#o3bo4c#o3b
650 DATA "o4c#d#eo3abababo4c#d#o3g#ag#ag#abo4c#o3f#
660 DATA "g#f#g#f#ag#f#e8o2b8o3e8g#g#g#8mng#g#g#8
670 DATA "g#g#g#8o4c#8o3g#8o4c#8o3g#8o4c#8o3g#8f#8e8
680 DATA "d#8c#8g#g#g#8g#g#g#8g#g#g#8o4c#8o3g#8
690 DATA "o4c#8o3g#8o4c#8o3b8a#8b8a#8b8g#g#g#8
700 DATA "g#g#g#8g#g#g#8o4c#8o3g#8o4c#8o3g#8o4c#8o3g#8
710 DATA "f#8e8d#8c#8g#g#g#8g#g#g#8g#g#g#8
720 DATA "o4c#8o3g#8o4c#8o3g#8o4c#8o3b8a#8b8a#8b8
730 DATA "o2f#f#f#8f#f#f#8g#8a8f#4a8g#8
740 DATA "e4g#8f#8o0b8o1b8o2f#f#f#8f#f#f#8
750 DATA "g#8a8f#4a8g#8e4g#8f#8
760 DATA "bbb8o1bbb8bbb8bbo2e8f#8g#8
770 DATA "o1bbb8bbo2e8g#g#f#8d#8o1b8bbb8
780 DATA "bbb8bbo2e8f#8g#8eg#mlb4mnb
790 DATA "ag#f#e8o1b8o2e8o3bbb8bbb8bbo4e8
800 DATA "f#8g#8o3bbb8bbo4e8g#g#f#8d#8o3b8
810 DATA "bbb8bbb8bbo4e8f#8g#8o3eg#mlb4
820 DATA "mnbag#f#mlef#g#mnamlg#abo4mnc#mlo3bo4c#d#mnemld#
830 DATA "ef#mng#ao3bo4ao3bo4ao3bo4ao3bo4ao3bo4ao3bo4ao3bo4ao3bmle
840 DATA "f#g#mnamlg#abmno4c#mlo3bo4c#d#mnemld#ef#mng#ao3bo4ao3bo4a
850 DATA "o3bo4ao3bo4ao3bo4ao3bo4ao3bo4ao3bp16mlg#o4g#o3mng#p16mld#o4d#o3mnd#p16
860 DATA "mleo4eo3mnep16mlao4ao3mnap16mlg#o4g#o3mng#p16mld#o4d#o3mnd#p16mleo4eo3mnep16
870 DATA "mlao4ao3mnao4go3go4go3go4go3go4go3go4msg8e8c8e8o4mng#
880 DATA "o3g#o4g#o3g#o4g#o3g#o4g#o3g#o4msg#8e8o3b8o4e8mng#o3g#o4g#o3g#o4g#
890 DATA "o3g#o4g#o3g#o4msg#8f8c#8f8mna#o3a#o4a#o3a#o4a#o3a#o4a#o3a#o4msa#8
900 DATA "g8e8g8b8p16mna#p16ap16g#p16f#p16ep16
910 DATA "d#p16c#p16o3bp16a#p16ap16g#p16f#p16ep16d#p16f#mle
920 DATA "f#g#mnamlg#abmno4c#o3mlbo4c#d#mnemld#ef#mng#ao3bo4ao3bo4a
930 DATA "o3bo4ao3bo4ao3bo4ao3bo4ao3bo4ao3bmlef#g#mnamlg#abmno4c#o3mlb
940 DATA "o4c#d#mnemld#ef#mng#ao3bo4ao3bo4ao3bo4ao3bo4ao3bo4ao3bo4a
950 DATA "o3bo4ao3bp16mlg#o4g#o3mng#p16mld#o4d#o3mnd#p16mleo4eo3mnep16mlao4ao3mnap16
960 DATA "mlg#o4g#o3mng#p16mld#o4d#o3mnd#p16mleo4eo3mnep16mlao4ao3mnao4go3go4go3go4g
970 DATA "o3go4go3go4g8e8c8e8g#o3g#o4g#o3g#o4g#o3g#o4g#o3g#o4g#8
980 DATA "e8o3b8o4e8g#o3g#o4g#o3g#o4g#o3g#o4g#o3g#o4msg#8mnf8c#8
990 DATA "f8a#o3a#o4a#o3a#o4a#o3a#o4a#o3a#o4a#8g8e8g8b8
1000 DATA "p16a#p16ap16g#p16f#p16ep16d#p16c#p16o3bp16a#p16
1010 DATA "ap16g#p16f#p16ep16d#p16fmled#ed#mne8bbb8
1020 DATA "bbb8bbo4e8f#8g#8o3bbb8bbb8
1030 DATA "bbo4g#8a8b8p8e8f#8g#8p8o3g#8
1040 DATA "a8b8p8p2o2bco3c#dd#
1050 DATA "eff#gg#aa#bco4c#d#ed#f#d#ed#f#d#e
1060 DATA "d#f#d#ed#f#d#ed#f#d#ed#f#d#ed#f#d#e
1070 DATA "d#f#d#e8eo3eo4eo3eo4eo3eo4e8o3bo2bo3bo2bo3bo2bo3b8
1080 DATA "g#o2g#o3g#o2g#o3g#o2g#o3g8eo2eo3eo2eo3eo2eo3e8eee8
1090 DATA "e8e8o2bbb8b8b8g#g#g#8g#8g#8
1100 DATA "eee8e8e8o1b8o2e8o1b8o2g#8e8b8
1110 DATA "g#8o3e8o2b8o3e8o2b8o3g#8e8b8g#8o4e4
1120 DATA "p8eee8e8e8e8e4p8.
1130 DATA "ee4p8.o2ee2
1140 'Last Line of File: WMTELL.BAS
```

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0080

     Volume in drive A has no label
     Directory of A:\

    ALTER    COM      1024   7-31-83   4:07p
    ALTER    DOC      3840   7-25-83  10:45p
    ASK      COM       256   7-31-83   4:07p
    ASK      DOC      1507   8-01-83  10:21p
    MOVE     COM       384   7-31-83   4:08p
    MOVE     DOC       795   8-01-83  10:23p
    BIGANSI  SYS      2176   7-20-83   7:23a
    CISEXE   COM      3584   7-20-83   8:10a
    CISEXE   DOC      1552   7-20-83   8:08a
    CL       ASM       323   7-20-83   7:27a
    CL       COM        44   7-20-83   7:29a
    CL       DOC       415   7-20-83   7:36a
    COLOR    COM       512   7-20-83   9:09a
    COLOR    DOC       839   7-20-83   9:42a
    EDITNO   BAS      3790   7-20-83   7:56a
    EDITNO   DOC      2111   7-20-83   8:01a
    ET4      BAS     16761   7-20-83   7:14a
    ET4      EXE     37248   7-20-83   7:10a
    FCBCRT   BAS      1794   7-20-83   8:15a
    FCBEXM   BAS      2341   7-20-83   8:35a
    FCBREAD  BSV       292   7-20-83   8:18a
    FKREST   ASM      4100   7-20-83   7:38a
    FKREST   COM       327   7-20-83   7:44a
    FKSET    ASM      7155   7-20-83   7:39a
    FKSET    COM       693   7-20-83   7:40a
    FLIGHT   NEW      1967   7-20-83   9:39a
    HIQUE    BAS      5258   7-20-83   9:36a
    KEYLK    DOC      2952   7-20-83   8:40a
    KEYLK3   ASM     13634   7-20-83   8:40a
    KEYLK3   EXE      1536   7-20-83   8:47a
    MEM640   DOC      7312   7-20-83   7:50a
    MEM640   ZAP       813   7-20-83   7:52a
    OKIMOD   DOC      1201   7-20-83   9:25a
    SD20     COM      1408   7-20-83   8:53a
    SD20     DOC       419   7-20-83   8:50a
    SOLFE    BAS      3869   7-20-83   9:36a
    WMTELL   BAS      5444   7-20-83   9:37a
    XDIR     COM      1920   7-20-83   9:18a
    XDIR     DOC      1844   7-20-83   9:15a
    LOAD-US  ABS      2299  12-14-84   8:49a
    LOAD-US  COM      8897  12-18-84   3:07p
    NUMZAP   BAS     11904   6-07-84   7:43p
    NUMZAP   DOC     20352   6-07-84   8:14p
    NUMZAP   EXE     25216   1-26-84   9:37p
    RENUM    BAS     10009   1-18-85   7:58p
    RENUM    EXE     25472   3-03-84  12:18a
    FILES80  TXT      4339  10-06-87  11:12a
           47 file(s)     251928 bytes
                           47104 bytes free
