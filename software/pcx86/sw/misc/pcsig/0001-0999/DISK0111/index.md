---
layout: page
title: "PC-SIG Library Disk #111"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0111/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk 0111"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "BBS UTILITIES NO 3"

    Here's a big package of some handy file and text utilities. ST--for
    SuperTyper--is an improvement over the DOS "TYPE" command.  It features
    a paged display, with page numbers if desired.  Another program prints
    your disk directories onto labels.  Use it to track of your software.
    Several other routines aid in file management.  There are a few text
    utilities, a Wordstar utility (blanks to tabs, and tabs to blanks).
    DOS utilities include a file comparator (improved over the DOS "COMP")
    and The Shell.  The SHELL program was written to fix a DOS 2.0
    COMMAND.COM bug, nice if you need it.  Finally, for those with special
    needs, BIGCALC is an 8100-digit precision calculator.
    
    System Requirements:  A version of BASIC
    
    How to Start: To run an EXE or COM program simply type its name and
    press <ENTER>.  For instructions on ASM or 'C' listings, refer to your
    Assembler or 'C' language manuals.  For instructions on running BASIC
    programs, please refer to the GETTING STARTED section in this catalog.
    To read DOC files simply enter TYPE filename.ext and press <ENTER>.
    
    File Descriptions:
    
    (README)      Intro to COVER.COM
    COVER    TXT  Documentation for COVER.COM
    C??      OBJ  Part of COVER.COM
    C??      ASM  Part of COVER.COM
    BIGCALC  EXE  Compiled version of BIGCALC.EXE
    COLINK        Part of COVER.COM
    DIRECTRY BIN  Part of DIRECTRY.BAS
    BIGCALC  BAS  100 digit precision calculator!
    CAL      COM  Prints calendar for any month/year after 1900
    BIGCALC  DOC  Documentation for above
    FIXTEXT  BAS  DOS-to-WORDSTAR converter, better than UNWS
    ENTAB    EXE  Executable file for above
    COVER    COM  Prints floppy directory to fit inside diskette sleeve
    CAL      DOC  Documentation for above
    ENTAB    C    Convert blanks in file to tabs  (Source program)
    DIRECTRY BAS  Creates machine program to read disk directory
    DETAB    EXE  Executable file for above
    DETAB    C    Convert tabs in file to blanks  (Source program)
    GETMEM   ASM  Program to reserve memory areas  (Source program)
    GETMEM   COM  Executable file for above
    LABELPRT BAS  Print diskette directory as a diskette label
    LAR      DOC  Program to manage file libraries  (Documentation)
    MEMDRV   ASM  DOS 2.0 device driver to allow 640K RAM  (Source program)
    LAR      EXE  Executable file for above
    PI-COMP  COM  Replacement for DOS COMP command - better!
    MEMDRV   SYS  Executable file for above
    PRINT    C    Print text files on printer  (Source program)
    PI-COMP  DOC  Documentation for above
    SHELL    DOC  Documentation for above
    SHELL    COM  Fix for DOS SHELL command bug
    PRINT    EXE  Executable file for above
    ST       DOC  Documentation for above
    ST       COM  Type files to full screen with PgUp/PgDn
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## BIGCALC.BAS

```bas
100 PRINT:PRINT "EXTENDED PRECISION CALCULATOR"
110 '
120 '  By: Judson D. McClendon
130 '      844 Sun Valley Road
140 '      Birmingham, AL 35215
150 '
200 ' *** Initialize Variables ***
210 DEFINT A-Z : I=0:J=0:K=0:L=0
220 SIZE=100                 ' SIZE = Maximum digits precision
230 EDA=0:EDB=0:EDC=0:EDH=0  ' Digits to left of decimal point
240 ELA=0:ELB=0:ELC=0:ELH=0  ' Actual number length (significant digits)
250 DIM EA(SIZE),EB(SIZE),EC(SIZE),EH(SIZE) ' Array EH is temp hold
300 GOSUB 10000
1000 ' *** Command Loop ***
1010 PRINT :INPUT "ENTER COMMAND: ",CO$
1030 FOR I=1 TO LEN(CO$)
1040   C=ASC(MID$(CO$,I,1)) :IF C>96 AND C<123 THEN MID$(CO$,I,1)=CHR$(C-32)
1050 NEXT
1100 IF CO$="END" THEN END
1110 IF CO$="ADD" THEN GOSUB 3000:GOTO 1000
1120 IF CO$="SUB" THEN GOSUB 4000:GOTO 1000
1130 IF CO$="MUL" THEN GOSUB 5000:GOTO 1000
1140 IF CO$="DIV" THEN GOSUB 6000:GOTO 1000
1200 IF CO$="DMP" THEN GOSUB 8000:GOTO 1000
1210 IF CO$="EA"  THEN GOSUB 8100:GOTO 1000
1220 IF CO$="PA"  THEN GOSUB 8200:GOTO 1000
1230 IF CO$="EB"  THEN GOSUB 8300:GOTO 1000
1240 IF CO$="PB"  THEN GOSUB 8400:GOTO 1000
1250 IF CO$="EC"  THEN GOSUB 8500:GOTO 1000
1260 IF CO$="PC"  THEN GOSUB 8600:GOTO 1000
1270 IF CO$="XAB" THEN GOSUB 8700:GOTO 1000
1280 IF CO$="XAC" THEN GOSUB 8800:GOTO 1000
1290 IF CO$="XBC" THEN GOSUB 8900:GOTO 1000
1300 IF CO$="ZAP" THEN GOSUB 9000:GOTO 1000
1310 IF CO$="MAB" THEN GOSUB 9100:GOTO 1000
1320 IF CO$="MAC" THEN GOSUB 9200:GOTO 1000
1330 IF CO$="CA"  THEN GOSUB 9300:GOTO 1000
1340 IF CO$="MBA" THEN GOSUB 9400:GOTO 1000
1350 IF CO$="MBC" THEN GOSUB 9500:GOTO 1000
1360 IF CO$="CB"  THEN GOSUB 9600:GOTO 1000
1370 IF CO$="MCA" THEN GOSUB 9700:GOTO 1000
1380 IF CO$="MCB" THEN GOSUB 9800:GOTO 1000
1390 IF CO$="CC"  THEN GOSUB 9900:GOTO 1000
1900 GOSUB 10000 ' Invalid Command - Print Instructions
1910 GOTO 1000
3000 ' *** ADD: B = B + A ***
3010 IF EDA<EDB THEN SC=EDB-EDA:GOSUB 7200
3020 IF EDB<EDA THEN SC=EDA-EDB:GOSUB 7400
3030 IF ELB<ELA THEN ELB=ELA
3100 FOR I=ELA TO 1 STEP -1
3110   EB(I)=EB(I)+EA(I)
3120   IF EB(I)>9 THEN EB(I-1)=EB(I-1)+1:EB(I)=EB(I)-10
3130 NEXT
3140 GOSUB 7700
3150 GOSUB 7800
3160 GOSUB 8400
3190 RETURN
4000 ' *** SUB: B = B - A ***
4010 IF EDA<EDB THEN SC=EDB-EDA:GOSUB 7200
4020 IF EDB<EDA THEN SC=EDA-EDB:GOSUB 7400
4030 IF ELB<ELA THEN ELB=ELA
4100 FOR I=ELA TO 1 STEP -1
4110   EB(I)=EB(I)-EA(I)
4120   IF EB(I)<0 THEN EB(I-1)=EB(I-1)-1:EB(I)=EB(I)+10
4130 NEXT
4140 GOSUB 7700
4150 GOSUB 7800
4160 GOSUB 8400
4190 RETURN
5000 ' *** MUL: C = B * A ***
5010 GOSUB 9900
5020 ELC=ELB
5030 FOR I=ELA TO 1 STEP -1
5040   FOR K=ELB TO 0 STEP -1
5050     EC(K)=EC(K)+EB(K)*EA(I)
5060     IF K>=SIZE THEN 5100
5070     WHILE EC(K+1)>9
5080       EC(K)=EC(K)+1:EC(K+1)=EC(K+1)-10
5090     WEND
5100   NEXT
5110   FOR L=ELC TO 0 STEP -1
5120     EC(L+1)=EC(L)
5130   NEXT :EC(0)=0
5140   ELC=ELC+1
5150 NEXT
5160 ELC=ELA+ELB:EDC=EDA+EDB
5170 GOSUB 7900
5180 GOSUB 8600
5190 RETURN
6000 ' *** DIV: C = B / A ***
6010 IF ELA=0 THEN PRINT "Divide by Zero":RETURN
6020 GOSUB 9900
6030 ELH=ELB:EDH=EDB:FOR I=0 TO ELB:EH(I)=EB(I):NEXT
6040 IF EDB<EDA THEN SC=EDA-EDB:GOSUB 7400
6050 IF ELB<ELA THEN ELB=ELA
6060 EDC=EDB-EDA+1 :ELC=1
6090 ZF=0
6100 WHILE ZF=0
6110   I=0:WHILE ((I<=ELA) AND (EA(I)=EB(I))):I=I+1:WEND
6120   IF I<=ELA AND EB(I)<EA(I) THEN GOSUB 6500:GOTO 6190
6130   EC(ELC)=EC(ELC)+1
6140   FOR I=ELA TO 1 STEP -1
6150     EB(I)=EB(I)-EA(I)
6160     IF EB(I)<0 THEN EB(I-1)=EB(I-1)-1:EB(I)=EB(I)+10
6170   NEXT
6190 WEND
6200 IF ELC<EDC THEN ELC=EDC
6210 ELB=ELH:EDB=EDH:FOR I=0 TO ELB:EB(I)=EH(I):NEXT
6270 GOSUB 7900
6280 GOSUB 8600
6290 RETURN
6500 ZF=1
6510 FOR I=1 TO ELB+1
6520   IF EB(I)<>0 THEN ZF=0
6530   EB(I-1)=EB(I)
6540 NEXT
6560 IF ELC<SIZE THEN ELC=ELC+1 ELSE ZF=1
6590 RETURN
7100 ' *** Shift A left (SC digits) ***
7110 FOR I=0 TO ELA-SC
7120   EA(I)=EA(I+SC)
7130 NEXT
7140 FOR I=ELA-SC+1 TO ELA
7150   EA(I)=0
7160 NEXT
7170 ELA=ELA-SC:EDA=EDA-SC
7190 RETURN
7200 ' *** Shift A right (SC digits) ***
7210 FOR I=ELA TO 0 STEP -1
7220   EA(I+SC)=EA(I)
7230 NEXT
7240 FOR I=0 TO SC-1
7250   EA(I)=0
7260 NEXT
7270 ELA=ELA+SC:EDA=EDA+SC
7290 RETURN
7300 ' *** Shift B left (SC digits) ***
7310 FOR I=0 TO ELB-SC
7320   EB(I)=EB(I+SC)
7330 NEXT
7340 FOR I=ELB-SC+1 TO ELB
7350   EB(I)=0
7360 NEXT
7370 ELB=ELB-SC:EDB=EDB-SC
7390 RETURN
7400 ' *** Shift B right (SC digits) ***
7410 FOR I=ELB TO 0 STEP -1
7420   EB(I+SC)=EB(I)
7430 NEXT
7440 FOR I=0 TO SC-1
7450   EB(I)=0
7460 NEXT
7470 ELB=ELB+SC:EDB=EDB+SC
7490 RETURN
7500 ' *** Shift C left (SC digits) ***
7510 FOR I=0 TO ELC-SC
7520   EC(I)=EC(I+SC)
7530 NEXT
7540 FOR I=ELC-SC+1 TO ELC
7550   EC(I)=0
7560 NEXT
7570 ELC=ELC-SC:EDC=EDC-SC
7590 RETURN
7600 ' *** Shift C right (SC digits) ***
7610 FOR I=ELC TO 0 STEP -1
7620   EC(I+SC)=EC(I)
7630 NEXT
7640 FOR I=0 TO SC-1
7650   EC(I)=0
7660 NEXT
7670 ELC=ELC+SC:EDC=EDC+SC
7690 RETURN
7700 ' *** Normalize A ***
7710 WHILE (ELA>EDA) AND (EA(ELA)=0):ELA=ELA-1:WEND
7720 IF ELA=0 THEN EDA=0:GOTO 7790
7730 IF EA(0)<>0 THEN SC=1:GOSUB 7200:GOTO 7790
7740 I=1:WHILE (I<EDA) AND (EA(I)=0):I=I+1:WEND
7750 IF I>1 THEN SC=I-1:GOSUB 7100
7790 RETURN
7800 ' *** Normalize B ***
7810 WHILE (ELB>EDB) AND (EB(ELB)=0):ELB=ELB-1:WEND
7820 IF ELB=0 THEN EDB=0:GOTO 7890
7830 IF EB(0)<>0 THEN SC=1:GOSUB 7400:GOTO 7890
7840 I=1:WHILE (I<EDB) AND (EB(I)=0):I=I+1:WEND
7850 IF I>1 THEN SC=I-1:GOSUB 7300
7890 RETURN
7900 ' *** Normalize C ***
7910 WHILE (ELC>EDC) AND (EC(ELC)=0):ELC=ELC-1:WEND
7920 IF ELC=0 THEN EDC=0:GOTO 7990
7930 IF EC(0)<>0 THEN SC=1:GOSUB 7600:GOTO 7990
7940 I=1:WHILE (I<EDC) AND (EC(I)=0):I=I+1:WEND
7950 IF I>1 THEN SC=I-1:GOSUB 7500
7990 RETURN
8000 ' *** DMP: Dump Registers ***
8010 GOSUB 8200
8020 GOSUB 8400
8030 GOSUB 8600
8090 RETURN
8100 ' *** EA: Enter A from keyboard ***
8110 GOSUB 9300 :INPUT "Enter A: ",EN$ :EDA=LEN(EN$)
8120 FOR I=1 TO LEN(EN$)
8130   X$=MID$(EN$,I,1)
8140   IF X$="." THEN EDA=ELA:GOTO 8180
8150   IF X$<"0" OR X$>"9" THEN PRINT "Error in A, char:";I
8160   ELA=ELA+1
8170   EA(ELA)=VAL(X$)
8180 NEXT :GOSUB 7700
8190 RETURN
8200 ' *** PA: Print A ***
8210 PRINT "A: "; :CC=3
8220 IF EDA=0 THEN PRINT "0"; :CC=4
8230 FOR I=1 TO ELA
8240   IF I=EDA+1 THEN PRINT "."; :CC=CC+1
8250   PRINT USING "#";EA(I); :CC=CC+1
8260   IF I<>EDA THEN IF ABS(I-EDA)MOD 5=0 THEN PRINT " ";:CC=CC+1:IF CC>70 THEN PRINT:PRINT "   ";:CC=3:IF EDA=0 THEN PRINT "  ";:CC=4
8270 NEXT:PRINT
8290 RETURN
8300 ' *** EB: Enter B from keyboard ***
8310 GOSUB 9600 :INPUT "Enter B: ",EN$ :EDB=LEN(EN$)
8320 FOR I=1 TO LEN(EN$)
8330   X$=MID$(EN$,I,1)
8340   IF X$="." THEN EDB=ELB:GOTO 8380
8350   IF X$<"0" OR X$>"9" THEN PRINT "Error in B, char:";I
8360   ELB=ELB+1
8370   EB(ELB)=VAL(X$)
8380 NEXT :GOSUB 7800
8390 RETURN
8400 ' *** PB: Print B ***
8410 PRINT "B: "; :CC=3
8420 IF EDB=0 THEN PRINT "0"; :CC=4
8430 FOR I=1 TO ELB
8440   IF I=EDB+1 THEN PRINT "."; :CC=CC+1
8450   PRINT USING "#";EB(I); :CC=CC+1
8460   IF I<>EDB THEN IF ABS(I-EDB)MOD 5=0 THEN PRINT " ";:CC=CC+1:IF CC>70 THEN PRINT:PRINT "   ";:CC=3:IF EDB=0 THEN PRINT "  ";:CC=4
8470 NEXT:PRINT
8490 RETURN
8500 ' *** EC: Enter C from keyboard ***
8510 GOSUB 9900 :INPUT "Enter C: ",EN$ :EDC=LEN(EN$)
8520 FOR I=1 TO LEN(EN$)
8530   X$=MID$(EN$,I,1)
8540   IF X$="." THEN EDC=ELC:GOTO 8580
8550   IF X$<"0" OR X$>"9" THEN PRINT "Error in C, char";I
8560   ELC=ELC+1
8570   EC(ELC)=VAL(X$)
8580 NEXT :GOSUB 7900
8590 RETURN
8600 ' *** PC: Print C ***
8610 PRINT "C: "; :CC=3
8620 IF EDC=0 THEN PRINT "0"; :CC=4
8630 FOR I=1 TO ELC
8640   IF I=EDC+1 THEN PRINT "."; :CC=CC+1
8650   PRINT USING "#";EC(I); :CC=CC+1
8660   IF I<>EDC THEN IF ABS(I-EDC)MOD 5=0 THEN PRINT " ";:CC=CC+1:IF CC>70 THEN PRINT:PRINT "   ";:CC=3:IF EDC=0 THEN PRINT "  ";:CC=4
8670 NEXT:PRINT
8690 RETURN
8700 ' *** XAB: Exchange A B ***
8710 IF ELA>ELB THEN J=ELA ELSE J=ELB
8720 FOR I=0 TO J:SWAP EA(I),EB(I):NEXT
8730 SWAP ELA,ELB:SWAP EDA,EDB
8790 RETURN
8800 ' *** XAC: Exchange A C ***
8810 IF ELA>ELC THEN J=ELA ELSE J=ELC
8820 FOR I=0 TO J:SWAP EA(I),EC(I):NEXT
8830 SWAP ELA,ELC:SWAP EDA,EDC
8890 RETURN
8900 ' *** XBC: Exchange B C ***
8910 IF ELB>ELC THEN J=ELB ELSE J=ELC
8920 FOR I=0 TO J:SWAP EB(I),EC(I):NEXT
8930 SWAP ELB,ELC:SWAP EDB,EDC
8990 RETURN
9000 ' *** ZAP: Clear all regs ***
9010 GOSUB 9300
9020 GOSUB 9600
9030 GOSUB 9900
9090 RETURN
9100 ' *** MAB: Move A B ***
9110 IF ELA>ELB THEN J=ELA ELSE J=ELB
9120 FOR I=0 TO J:EB(I)=EA(I):NEXT
9130 ELB=ELA:EDB=EDA
9190 RETURN
9200 ' *** MAC: Move A C ***
9210 IF ELA>ELC THEN J=ELA ELSE J=ELC
9220 FOR I=0 TO J:EC(I)=EA(I):NEXT
9230 ELC=ELA:EDC=EDA
9290 RETURN
9300 ' *** CA: Clear A ***
9320 FOR I=0 TO ELA:EA(I)=0:NEXT
9330 ELA=0:EDA=0
9390 RETURN
9400 ' *** MBA: Move B A ***
9410 IF ELA>ELB THEN J=ELA ELSE J=ELB
9420 FOR I=0 TO J:EA(I)=EB(I):NEXT
9430 ELA=ELB:EDA=EDB
9490 RETURN
9500 ' *** MBC: Move B C ***
9510 IF ELB>ELC THEN J=ELB ELSE J=ELC
9520 FOR I=0 TO J:EC(I)=EB(I):NEXT
9530 ELC=ELB:EDC=EDB
9590 RETURN
9600 ' *** CB: Clear B ***
9620 FOR I=0 TO ELB:EB(I)=0:NEXT
9630 ELB=0:EDB=0
9690 RETURN
9700 ' *** MCA: Move C A ***
9710 IF ELA>ELC THEN J=ELA ELSE J=ELC
9720 FOR I=0 TO J:EA(I)=EC(I):NEXT
9730 ELA=ELC:EDA=EDC
9790 RETURN
9800 ' *** MCB: Move C B ***
9810 IF ELB>ELC THEN J=ELB ELSE J=ELC
9820 FOR I=0 TO J:EB(I)=EC(I):NEXT
9830 ELB=ELC:EDB=EDC
9890 RETURN
9900 ' *** CC: Clear C ***
9920 FOR I=0 TO ELC:EC(I)=0:NEXT
9930 ELC=0:EDC=0
9990 RETURN
10000 ' *** Print Instructions ***
10010 PRINT
10020 PRINT "               I N S T R U C T I O N S :"
10030 PRINT "There are 3 registers: A, B & C.  Each register can contain"
10040 PRINT "a number up to";SIZE;"digits in length.  The numbers may be"
10050 PRINT "in any of these forms:  25  13.46  .341"
10060 PRINT
10070 PRINT "    CMD: RESULT:                CMD: RESULT:"
10080 PRINT "    ADD  B = B + A              MBC  Move B to C"
10090 PRINT "    CA   Clear A to zero        MCA  Move C to A"
10100 PRINT "    CB   Clear B to zero        MCB  Move C to B"
10110 PRINT "    CC   Clear C to zero        MUL  C = B * A"
10120 PRINT "    DIV  C = B / A              PA   Print A"
10130 PRINT "    DMP  Print registers        PB   Print B"
10140 PRINT "    EA   Enter number in A      PC   Print C"
10150 PRINT "    EB   Enter number in B      SUB  B = B - A"
10160 PRINT "    EC   Enter number in C      XAB  Exchange A & B"
10170 PRINT "    END  End program            XAC  Exchange A & C"
10180 PRINT "    MAB  Move A to B            XBC  Exchange B & C"
10190 PRINT "    MAC  Move A to C            ZAP  Zero registers"
10200 PRINT "    MBA  Move B to A            ???  Instructions"
10210 RETURN
```

## DIRECTRY.BAS

```bas
10 '     ***** Build DIRECTRY *****
20 '
30 '     Retrieve a diskette's directory
40 '       from within a BASIC program
50 '
60 '     Written by Howard Glosser
61 '     SOFTALK Magazine. January 1984. pp 124-128.
70 '
80 CLS
90 PRINT"Creating DIRECTRY subroutine....":PRINT
100 '
110 '    ** This sets up string location for subroutine **
120 '
130 DEF SEG
140 SUBRT$=STRING$(160,32)
150 SUBLC%=VARPTR(SUBRT$)
160 DRCT=PEEK(SUBLC%+1)+PEEK(SUBLC%+2)*256
170 LCN=DRCT
180 '
190 '    ** This builds the subroutine **
200 '
210 LINENO%=450
220 FOR STMT=1 TO 20
230   FOR MEM=1 TO 8
240     READ DT%
250     POKE LCN,DT%
260     CHECKSUM%=CHECKSUM%+DT%
270     LCN=LCN+1
280   NEXT
290   READ DT%
300   IF CHECKSUM%<>DT% THEN 410
310   LINENO%=LINENO%+10
320   CHECKSUM%=0
330 NEXT
340 '
350 '    ** This save the subroutine **
360 '
370 BSAVE"DIRECTRY.BIN",DRCT,&H9F
380 PRINT"DIRECTRY sunbroutine created."
390 END
400 '
410 PRINT"ERROR in DATA STATEMENT - Check line"LINENO%:END
420 '
430     ** DATA statements to build subroutine **
440 '
450 DATA &HEB,&H07,&H90,&H00,&H00,&H00,&H00,&H00,&H0182
460 DATA &H00,&H55,&H8B,&HEC,&H8B,&H5E,&H0E,&H8B,&H034E
470 DATA &H77,&H01,&H8B,&H04,&H35,&H40,&H00,&H8B,&H0207
480 DATA &H5E,&H0C,&H8B,&H7F,&H01,&H88,&H05,&H57,&H0259
490 DATA &H47,&HB0,&H3F,&HB9,&H0B,&H00,&HF3,&HAA,&H0397
500 DATA &H2E,&HC7,&H06,&H05,&H01,&H00,&H00,&H8B,&H018C
510 DATA &H5E,&H0A,&H8B,&H57,&H01,&H2E,&H89,&H16,&H0218
520 DATA &H03,&H01,&HB4,&H1A,&HCD,&H21,&H8B,&H5E,&H02A9
530 DATA &H08,&H2E,&H89,&H1E,&H07,&H01,&H2E,&HFF,&H0212
540 DATA &H06,&H07,&H01,&H5A,&HB4,&H11,&HCD,&H21,&H021B
550 DATA &H3C,&HFF,&H74,&H1A,&H2E,&HFF,&H06,&H05,&H0301
560 DATA &H01,&HE8,&H1F,&H00,&HB4,&H12,&HCD,&H21,&H02BC
570 DATA &H3C,&HFF,&H74,&H0A,&H2E,&HFF,&H06,&H05,&H02F1
580 DATA &H01,&HE8,&H0F,&H00,&HE2,&HEE,&H2E,&HA1,&H0397
590 DATA &H05,&H01,&H8B,&H7E,&H06,&H89,&H05,&H5D,&H0200
600 DATA &HCA,&H0A,&H00,&H2E,&H8B,&H1E,&H07,&H01,&H01B3
610 DATA &H8B,&H3F,&H83,&HC3,&H03,&H2E,&H89,&H1E,&H02E8
620 DATA &H07,&H01,&H2E,&H8B,&H36,&H03,&H01,&H46,&H0141
630 DATA &HB9,&H08,&H00,&HF3,&HA4,&HC6,&H05,&H2E,&H0351
640 DATA &H47,&HB9,&H03,&H00,&HF3,&HA4,&HC3,&H00,&H035D
```

## FIXTEXT.BAS

```bas
40   '***    FIXTEXT.BAS (version 2.1), by Phil Johnson                  ***
50   '***                                  5700 Etiwanda #105            ***
60   '***                                  Tarzana, CA  91356            ***
70   '***                                  (213) 881 8492                ***
80   '***                                                                ***
90   '***              Copyright 1983, by Phillip R. Johnson             ***
100  '***                                                                ***
110  '***       This program is not to be distributed in revised form.   ***
120  '***    It may be otherwise be distributed freely, but may not be   ***
130  '***    sold or incorporated into other programs without permission ***
140  '***    in writing from the author.                                 ***
150  '***                                                                ***
160  '***       Lines 40-200 are not to be removed from this program     ***
170  '***    under any circumstances without permission in writing from  ***
180  '***    the author. All other remarks may be removed from the       ***
190  '***    program before running.                                     ***
200  '***                                                                ***
690 COLOR 0,7:CLS:KEY OFF:LOCATE 10,8:PRINT "Do you wish to see the revised file displayed on the screen?":PRINT:PRINT
700 JO$=INKEY$:IF JO$="" THEN 700
710 PRINT "                 Which disk has the unrevised file?"
720 D$=INKEY$:IF D$="" THEN 720
730 GOSUB 1550
740 ON ERROR GOTO 1630
750 PRINT:PRINT TAB(25);:COLOR 7,0:PRINT "Directory of disk ";:PRINT D$;CHR$(58):COLOR 0,7:PRINT:FILES MID$(D$,1)+CHR$(58)+"*.*":PRINT:PRINT:INPUT "                    Name of file to revise";A$
760 IF A$="" THEN INPUT A$:GOTO 760
770 PRINT:PRINT TAB(26);:COLOR 7,0:PRINT "Revising file ";:COLOR 0,7:PRINT MID$(D$,1);CHR$(58);:FILES MID$(D$,1)+CHR$(58)+A$
780 OPEN "R",#1,MID$(D$,1)+CHR$(58)+A$,128
790 PRINT:PRINT "                Which disk does the revised fil(D$,↕);CHR$(☼:);:■ü MID$(D$,↕)ΘCHR$(☼:)ΘA$
780 OPEN "R",#1,MID$(D$,1)+CHR$(58)+A$,128
790 PRINT:PRINT "                Which disk does the revised file go on?"
800 D$=INKEY$:IF D$="" THEN 800
810 GOSUB 1550:PRINT:PRINT TAB(30);:COLOR 7,0:PRINT " Writing to ";D$;CHR$(58);:COLOR 0,7:PRINT:PRINT
820 ON ERROR GOTO 1640
830 PRINT:PRINT:INPUT "                        Name of new file";B$
840 IF B$="" THEN INPUT B$:GOTO 840
850 PRINT:PRINT TAB(33):FILES MID$(D$,1)+CHR$(58)+B$:PRINT TAB(21); "exists. Do you want to destroy it?":BEEP
860 ON ERROR GOTO 0
870 DE$=INKEY$:IF DE$="" THEN 860
880 IF DE$="Y" OR DE$="y" THEN 910
900 CLS:LOCATE 10,12:GOTO 790
910 CLS:LOCATE 10,12:COLOR 7,0:PRINT "Opening ";CHR$(34);D$;CHR$(58);B$;CHR$(34);:COLOR 0,7:OPEN "R",#2,MID$(D$,1)+CHR$(58)+B$,128:GOSUB 1660:LOCATE 12,18:PRINT "working....";:L=1
920 FIELD #1,128 AS C$
930 FIELD #2,128 AS PN$
950 GET #1
960 FOR BC=1 TO LEN(C$)
970 PJ$=MID$(C$,BC,1):GOSUB 1080
980 GOSUB 1180
990 GOSUB 1480
1000 NEXT
1010 GOTO 950
1020 GOSUB 1100:GOSUB 1230
1040 CLOSE:PRINT:PRINT:PRINT "               Hit any key to return to DOS"
1050 BEEP:IF INKEY$=""THEN 1050
1060 SYSTEM
1080 IF LEN(PJ$)=1 AND ASC(PJ$)>128 THEN PJ$=CHR$(ASC(PJ$)-128):
1090 IF PJ$=CHR$(0) THEN PJ$=CHR$(26):RETURN
1100 IF PJ$=CHR$(12) THEN PJ$="":RETURN
1110 IF PJ$=" " AND LEN(PP$)>1 THEN PJ$="":RETURN
1120 IF PJ$=" " AND PP$=" " THEN PJ$="":RETURN
1130 IF PJ$=" " AND PP$=CHR$(&HA) THEN PJ$="":RETURN
1140 IF PJ$=CHR$(&HA) THEN PJ$="":RETURN
1150 IF PJ$=CHR$(&HD) OR PJ$=CHR$(&H8D) THEN GOSUB 1330
1160 RETURN
1180 IF PJ$=""THEN RETURN
1190 N$=N$+PJ$:PP$=PJ$:PJ$="":CR=CR+1
1200 RETURN
1230 IF LEN(N$)>128 THEN NN$=RIGHT$(N$,(LEN(N$)-128)) ELSE NN$=""
1250 IF JO$="Y" OR JO$="y" AND INKEY$="" THEN GOSUB 1380:GOTO 1280
1270 IF JO$<>"Y" AND JO$<>"y" AND INKEY$<>"" THEN GOSUB 1380 ELSE GOSUB 1520
1280 L=L+1
1290 LSET PN$=N$:N$=NN$
1300 PUT #2
1310 RETURN
1330 IF LEN(PP$)>1 THEN PJ$="":RETURN
1340 IF PP$="." OR PP$="?" OR PP$=")" OR PP$="!" OR CR<45 THEN PJ$=CHR$(&HD)+CHR$(&HA)+CHR$(&HD)+CHR$(&HA):CR=0:RETURN
1360 PJ$=CHR$(&H8D)+CHR$(&HA):CR=0:RETURN
1380 SP$=N$
1390 FOR Z=1 TO LEN(SP$)
1400 L$=MID$(SP$,Z,1):GOSUB 1430
1410 PRINT L$;:NEXT Z:RETURN
1430 IF L$=CHR$(&HA) THEN L$="":RETURN
1440 IF L$=CHR$(&H8D) THEN L$=CHR$(13):RETURN
1450 IF L$=CHR$(&HD) THEN RETURN
1460 RETURN
1480 IF LEN(N$)=>128 THEN GOSUB 1230
1490 IF PP$=CHR$(26) THEN GOTO 1020
1500 RETURN
1520 PRINT CHR$(13):PRINT TAB(15):COLOR 7,0:PRINT " Writing block ";L;" of file ";CHR$(34);D$;CHR$(58);B$;CHR$(34);" to disk.";:COLOR 0,7:PRINT CHR$(13)
1530 RETURN
1550 IF ASC(D$)>73 THEN D$=CHR$(ASC(D$)-32)
1560 IF ASC(D$)<65 OR ASC(D$)>74 THEN GOTO 1580
1570 RETURN
1580 CLS:LOCATE 10,20:COLOR 7,0:PRINT "Illegal drive name. Try again.":COLOR 0,7
1590 LOCATE 12,30:PRINT "What drive?"
1600 D$=INKEY$:IF D$="" THEN 1600
1620 GOTO 1550
1630 IF (ERR=53) THEN CLS:LOCATE 10,1:PRINT "                    ";MID$(D$,1)+CHR$(58)+A$;" Does not exist.":PRINT:PRINT:PRINT:RESUME 710:ELSE PRINT ERR; ERL
1640 IF (ERR=53) THEN RESUME 910 ELSE PRINT ERR; ERL:END
1660 LOCATE 25,22:COLOR 7,0:IF JO$="Y" OR JO$="y" THEN PRINT " PUSH SPACE BAR TO SEE RECORD NUMBER ";ELSE PRINT " PUSH SPACE BAR TO SEE TEXT ";
1670 COLOR 0,7:PRINT:RETURN
```

## LABELPRT.BAS

```bas
10 '                    MAKE SURE DIRECTRY.BIN IS ON THE DEFAULT DRIVE!
20 '
30 '     ** Written by Howard Glosser
40 '     ** from Jan. 1984 issue of SOFTALK magazine. pp 124-128.
50 '
60 '     ** MODIFIED FOR LABEL PRINTING (ON EPSON MX w/GT & FX) **
70 '     ** by Steven Maller (70436,7145) 1-19-84 **
80 '
90 '     **** Store DIRECTORY subroutine in string ****
100 CLS
110 LOCATE 13,20 : COLOR 25 : PRINT "TURN ON YOUR PRINTER!"
120 LPRINT CHR$(27);"@";
130 COLOR 7
140 CLS
150 KEY OFF
160 DEF SEG
170 SUBRT$=STRING$(159,32)
180 SUBLC%=VARPTR(SUBRT$)
190 GOSUB 610
200 BLOAD"DIRECTRY.BIN",DIRECT
210 '    ** Define constants necessary in program **
220 DIM DIRLST$(111)
230 FCB$=STRING$(33,32)
240 DTA$=STRING$(33,32)
250 FILLER$=STRING$(12,32)
260 MARK$ = STRING$(10,205)
270 COUNT%=0
280 '    ** Set DIRLST$(0) to blanks **
290 FOR LOOP%=0 TO 111:DIRLST$(LOOP%)=FILLER$:NEXT
300 CLS
310 '          ** Select drive for reading directory **
320     LOCATE 1,10 : PRINT MARK$; : PRINT " * * * ";
330     COLOR 10:PRINT "DISK-LABEL PRINTING PROGRAM";
340     COLOR 7 : PRINT " * * * " MARK$
350     LOCATE 10,10 : FOR Q = 1 TO 6 : PRINT MARK$; : NEXT
360     LOCATE 12,20 : COLOR 18 : PRINT "Make sure your printer is ready...";
370     COLOR 7
380     LOCATE 3,10,1
390     PRINT"Specify drive letter for directory (A B C D): ";
400 '
410 GOSUB 630:DRV$=KY$
420 '    ** Find out if drive letter is valid **
430 HIT%=INSTR("ABCD",DRV$)
440 IF HIT%=0 THEN SOUND 50,7:GOTO 380 ELSE PRINT DRV$
450 '    ** Call to DIRECTRY subroutine **
460 LOCATE ,,0:GOSUB 610
470 CALL DIRECT(DRV$,FCB$,DTA$,DIRLST$(0),COUNT%)
480 '    ** List results of DIRECTRY call **
490 GOSUB 730
500 LOCATE 5,10
510 PRINT"Directory on drive "DRV$" contains"COUNT%"entries."
520 PRINT
530 FOR LOOP%=0 TO COUNT%-1:LPRINT DIRLST$(LOOP%)SPC(1);:NEXT :LPRINT
540 LPRINT CHR$(12);
550 PLAY "MBMLL8O4CDG"
560 PRINT:PRINT TAB(10) "Press ESCAPE to QUIT or any other key to continue"
570 GOSUB 630:CN$=KY$
580 IF ASC(CN$)=27 THEN 780
590 GOTO 270
600 '    ** Retrieve location of subroutine **
610 DIRECT=PEEK(SUBLC%+1)+PEEK(SUBLC%+2)*256
620 RETURN
630 '    ** KEYIN subroutine **
640 KY$=INKEY$: IF KY$="" THEN 640
650 '   ** Check for Escape key **
660 IF ASC(KY$) = 27 THEN 780
670 '    ** Check for small or capital letters **
680 IF KY$<CHR$(97) OR KY$>CHR$(122) THEN 710
690 '    ** Change lowercase to uppercase **
700 KY$=CHR$(ASC(KY$)-32)
710 RETURN
720 '    ** Printer instructions for Tiny Print **
730 WIDTH "LPT1:",63
740 LPRINT CHR$(15);CHR$(27);"S1";CHR$(27);"A";CHR$(4);CHR$(27);"Q";CHR$(77);
750 LPRINT CHR$(27);"l";CHR$(12);CHR$(27);"C";CHR$(18);CHR$(27);"N";CHR$(2);
760 RETURN
770 '
780 LPRINT CHR$(27);"@" ;: WIDTH"lpt1:",80
790 CLS : SYSTEM
```

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk 0111

     Volume in drive A has no label
     Directory of A:\

    COLINK              68   6-15-83  11:56p
    COENDP   ASM       289  11-01-84   9:35a
    COFREE   ASM      2300  11-01-84  10:42a
    COPRNT   ASM      4110  11-01-84  12:09p
    COSCAN   ASM      1718  11-01-84  12:25p
    COSORT   ASM      1157   8-21-84  11:49a
    COTITL   ASM      1900  11-01-84  10:22a
    COVER    ASM      2367  11-01-84  12:42p
    COFIX    BAT        74   6-14-83   1:30p
    COVER    COM      1152   2-03-84   2:16a
    COENDP   OBJ        73  11-01-84   9:38a
    COFREE   OBJ       292  11-01-84  10:42a
    COPRNT   OBJ       765  11-01-84  12:03p
    COSCAN   OBJ       267  11-01-84  12:26p
    COSORT   OBJ       171   8-21-84  11:52a
    COTITL   OBJ       473  11-01-84  10:22a
    COVER    OBJ       482  11-01-84  12:42p
    COVER    TXT     18560   2-13-85  12:26p
    (READ    ME)      1525   2-13-85  11:46a
    LAR      EXE     26112   2-03-84   3:07a
    LAR      DOC      1792   2-03-84   3:01a
    PRINT    EXE     10880   2-03-84   2:57a
    PRINT    C        6272   2-03-84   2:54a
    DIRECTRY BAS      2176   2-03-84   2:18a
    DIRECTRY BIN       256   2-03-84   2:18a
    BIGCALC  BAS      8686   8-26-85   6:18a
    ST       DOC      1152   2-03-84   2:44a
    ST       COM     14336   2-03-84   2:43a
    PI-COMP  DOC      5760   2-03-84   2:40a
    PI-COMP  COM      6656   2-03-84   2:38a
    SHELL    DOC      4224   2-03-84   2:36a
    SHELL    COM       256   2-03-84   2:35a
    ENTAB    C        2816   2-03-84   2:48a
    MEMDRV   SYS       640   2-03-84   2:29a
    MEMDRV   ASM     13824   2-03-84   2:28a
    LABELPRT BAS      2816   2-03-84   2:25a
    GETMEM   COM       384   2-03-84   2:21a
    GETMEM   ASM      3072   2-03-84   2:20a
    FIXTEXT  BAS      4608   2-03-84   2:19a
    BIGCALC  DOC      4531   8-26-85   6:18a
    ENTAB    EXE      9344   2-03-84   2:50a
    DETAB    C        2688   2-03-84   2:45a
    DETAB    EXE      9216   2-03-84   2:47a
    CAL      DOC       368   2-03-84  12:06a
    CAL      COM      1024  11-27-83   2:42a
    CRC      TXT      1875  11-09-84   2:24p
    CRCK4    COM      1536  10-21-82   7:54p
    BIGCALC  EXE     40110   1-11-87   4:56p
    FILES111 TXT      1652   1-31-87   3:30p
           49 file(s)     226805 bytes
                           67584 bytes free
