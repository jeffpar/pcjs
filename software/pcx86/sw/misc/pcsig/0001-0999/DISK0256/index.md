---
layout: page
title: "PC-SIG Library Disk #256"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0256/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk 0256"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "DOS AND PROGRAMERS UTILITIES"

    A fine collection of handy tools for almost anyone are on this disk.
    The special emphasis is on file handling and management.  With some of
    these programs, you can find free space on a floppy disk, find files
    lost in your subdirectories, de-fragment floppies, etc.  A
    particularly handy tool traps the infamous "parity error" and thereby
    saves your work from being destroyed.  For those of you who need a
    high-precision mathematics tool, there's BIGCALC, with 100-place or
    better precision.
    
    System Requirements:  Some programs require BASIC
    
    How to Start: To run a COM or EXE program simply type its name and
    press <ENTER>.  For instructions on ASM listings, refer to your
    Assembler manual.  For instructions on running BASIC programs, please
    refer to the GETTING STARTED section in this catalog.  To read DOC
    files simply enter TYPE filename.ext and press <ENTER>.
    
    File Descriptions:
    
    BIGCALC  EXE  Compiled version of BIGCALC.BAS
    BIGCALC  BAS  High precision calculator, 100 digits or better.
    BIGCALC  DOC  Documentation for BIGCALC
    EXPAND   BAS  Replaces tabs with appropiate number of spaces
    EXPAND   DOC  Documentation for EXPAND.BAS
    DIRECT   BAS  Creates BLOADable file to directly read disk directory
    WHEREIS  COM  Searches all directories for specified file
    DIRDEM   BAS  Demonstrates DIRECTORY function created by DIRECT.BAS
    WHEREIS  BAS  Generates WHEREIS.COM
    DSKTYP   EXE  Reports the format of the selected diskette
    DSKTYP   ASM  Source for DSKTYP.EXE
    DCBA2    HOW  Modify DISKCOPY.COM (Version 2.10) for production copying
    PE-NOTAB DOC  Fixes Personal Editor to save without those #@%& TABS
    COLOR    PE   Passionate shades for the Personal Editor
    FORMAT   VOL  Patch to DOS 2.0 FORMAT to always request VOL label
    DISPRE   COM  Displays the 8088 registers after being loaded
    SAVE     COM  Copy current screen to alternate monitor
    DISPRE   ASM  Source for DISPRE.COM/EXE
    DISPRE   EXE  by different programs, ie: DEBUG vs COMMAND.COM
    MONOCLOK COM  Time in UR corner of mono display, graphics unaffected
    DISPRE   DOC  Documentation for DISPRE.COM/EXE
    FREE     ASM  Source for FREE.COM
    LABEL    EXE  Diskette label program  (Softalk March 84)
    FREE     COM  Reports free space on one or all drives
    LABEL    ASM  Source for LABEL.EXE
    FREE     DOC  Documentation for FREE.COM
    WHEREIS  ASM  Source for WHEREIS.COM
    DEFRAG   BAS  Defragments diskette space
    NUSQ     COM  New UnSQueeze program, small, fast, improved
    DEFRAG   DOC  Documentation for DEFRAG.BAS
    TABS     EXE  Converts spaces to tabs  (Shrinks files )
    REFCD    DOC  INT 21 reference card, DOS 2.1 version
    DUMP     EXE  Displays a file in hex and ASCII  (From May Softalk)
    NUSQ     DOC  Documentation on NUSQ.COM
    PARCHK   DOC  Documentation for PARCHK.COM
    PARCHK   ASM  Source for PARCHK.COM
    PARCHK   COM  Replaces std parity routine, errors don't stop machine
    DUMP     ASM  Source for DUMP.EXE
    CAPSDEF  ASM  Source for CAPSDEF.COM
    CAPSDEF  DOC  Documentation for CAPSDEF.COM
    CAPSDEF  COM  Defeats the CapsLock key
    CLOCK    ASM  Source for CLOCK.ASM
    CLOCK    SYS  Device driver for AST and TECMAR boards with clock
    QS       TXT  Documentation for QS.RIO
    QS       RIO  Quick Startup patch for BIOS
    ZAPTRE   DOC  Documentation for ZAPTRE.BAS
    ZAPTRE   BAS  Patches TREE.COM to support a filename operand
    TABS     ASM  Source for TABS.EXE
    ZAPDEB   DOC  Documentation for ZAPDEB.BAS
    TABS     DOC  Documentation for TABS.EXE
    ZAPDEB   BAS  Patch DEBUG.COM to fix timer interrupt bug
    LOOK     DOC  Documentation for LOOK.COM
    LOOK     ASM  Source for LOOK.COM
    LOOK     COM  Memory display program
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

## DEFRAG.BAS

```bas
1000 ' Birk Binnard receives EMAIL at COMPUSERVE #72356,556
1010 '                                RBBS at (213) 410-0714
1020 ' ++++DEFRAG V 1.0 ++++          RBBS at (213) 973-2374
1030 '                                RBBS at (213) 973-4497
1040 DEFINT A-Z:DIM N1$(128),COPY(128,2)
1050 KEY OFF:CLOSE:CLS:BLANKS$=STRING$(60," "):RESTART=0:L$=STRING$(20,205)
1060 ON KEY(1) GOSUB 1200'pick file
1070 ON KEY(2) GOSUB 1400'restart
1080 ON KEY(3) GOSUB 1270'copy files
1090 ON KEY(7) GOSUB 1420'delete files
1100 ON KEY(9) GOSUB 1520'DOS command
1110 ON KEY (10) GOSUB 1380'end
1120 ON KEY (11) GOSUB 1580'up
1130 ON KEY (12) GOSUB 1600'left
1140 ON KEY (13) GOSUB 1620'right
1150 ON KEY (14) GOSUB 1640'down
1160 FOR I=1 TO 10:KEY I,"":NEXT
1170 KEY 1,"PICK":KEY 2,"RESTRT":KEY 3,"COPY":KEY 7,"DELETE":KEY 9,"COMAND"
1180 KEY 10,"END":GOTO 1670
1190 '
1200 NOW=NOW+1:IF INDEX>=0 AND NOW<=NFIL THEN 1210 ELSE 1220'pick file
1210 IF COPY(INDEX,2)<0 THEN 1230
1220 NOW=NOW-1:BEEP:RETURN 2090
1230 COPY(NOW,1)=INDEX:COPY(INDEX,2)=NOW:SCOL=POS(0)-2
1240 LOCATE ROW,SCOL:COLOR 12:PRINT USING "###";NOW;:COLOR 7:COL=SCOL
1250 LOCATE ROW,COL:RETURN 2090
1260 '
1270 LOCATE MAXROW+4,1:PRINT"You have selected ";NOW;"of";NFIL;"files."
1280 LOCATE MAXROW+6,1:PRINT "Do you want to do the Copy operation? (y/n) -->";
1290 X$=INPUT$(1):PRINT X$:IF INSTR("Yy",X$)>0 THEN 1310
1300 LOCATE MAXROW+3,1:PRINT BLANKS$:LOCATE MAXROW+5,1:PRINT BLANKS$:GOTO 1360
1310 KEY OFF:GOSUB 2260:FOR I=1 TO NOW
1320    LOCATE 3,10
1330    PRINT"Copying file "+N1$(COPY(I,1))+" from "+SD$+" to "+TD$+"      "
1340    CMD$="copy "+SD$+N1$(COPY(I,1))+" "+TD$:GOSUB 2210
1350 NEXT
1360 N=0:ROW=MINROW:COL=1:RETURN 2010
1370 '
1380 RETURN 2130'end program
1390 '
1400 CLS:RESTART=-1:CLOSE:KILL DIRFIL$:RETURN 1740'restart
1410 '
1420 LOCATE MAXROW+4,1:PRINT "You have selected";NOW;"files to DELETE."
1430 LOCATE MAXROW+6,1:PRINT"Do you want to do the Delete operation (y/n)?-->";
1440 X$=INPUT$(1):PRINT X$:IF INSTR("Yy",X$)>0 THEN 1460
1450 LOCATE MAXROW+3,1:PRINT BLANKS$:LOCATE MAXROW+5,1:PRINT BLANKS$:GOTO 1500
1460 KEY OFF:GOSUB 2260:FOR I=1 TO NOW'delete files
1470    LOCATE 3,10:PRINT"Deleting file "+N1$(COPY(I,1))+" from "+SD$+"      "
1480    KILL SD$+N1$(COPY(I,1))
1490 NEXT
1500 CLOSE:KILL DIRFIL$:RETURN 1880
1510 '
1520 GOSUB 2260:LOCATE 3,10'DOS command
1530 INPUT "Enter DOS command -->",CMD$
1540 CLS:KEY OFF:GOSUB 2210:COLOR 12
1550 LOCATE 25,1,1,0,13:PRINT"Press any key to continue -->";:X$=INPUT$(1)
1560 COLOR 7:GOSUB 2260:CLOSE:KILL DIRFIL$:RETURN 1880
1570 '
1580 ROW=ROW-1:IF ROW<MINROW THEN ROW=MAXROW
1590 RETURN 2090
1600 COL=COL-16:IF COL<1 THEN COL=65
1610 RETURN 2090
1620 COL=COL+16:IF COL>80 THEN COL=1
1630 RETURN 2090
1640 ROW=ROW+1:IF ROW>MAXROW THEN ROW=MINROW
1650 RETURN 2090
1660 '
1670 KEY(1) ON:KEY(2) ON:KEY(3) ON:KEY(7) ON:FOR I=9 TO 14:KEY(I) ON:NEXT
1680 GOSUB 2260:MINROW=4
1690 LOCATE 4,10:PRINT"Enter work (RAM) Drive letter (no colon)-->";:LOCATE ,,1
1700 RD$="a:":D$=INPUT$(1):PRINT D$;:D=ASC(D$):IF D=13 THEN 1740
1710 IF D<97 THEN D=D+32
1720 IF D<97 OR D>100 THEN BEEP: GOTO 1690
1730 RD$=D$+":"'   RAM disk
1740 LOCATE 6,10:PRINT"Enter Source Drive letter (no colon)-->";:LOCATE ,,1
1750 D$=INPUT$(1):PRINT D$;:D=ASC(D$):IF D<97 THEN D=D+3
1760 IF D<97 OR D>100 THEN BEEP: GOTO 1740
1770 SD$=D$+":"'   source drive
1780 LOCATE 8,10:PRINT"Enter Target Drive letter (no colon)-->";:LOCATE ,,1
1790 D$=INPUT$(1):PRINT D$;:D=ASC(D$):IF D<97 THEN D=D+32
1800 IF D<97 OR D>100 THEN BEEP: GOTO 1780
1810 TD$=D$+":"'   target drive
1820 IF RESTART OR RD$="a:" THEN 1880
1830 PRINT:PRINT:PRINT TAB(10);
1840 PRINT"Copying COMMAND.COM and SORT.EXE to work (RAM) disk."
1850 CMD$="copy a:command.com "+RD$:GOSUB 2210
1860 ENVIRON "COMSPEC="+RD$+"\COMMAND.COM"'  use command.com on ram disk
1870 CMD$="copy a:sort.exe "+RD$:GOSUB 2210
1880 DIRFIL$=RD$+"dir.dat":NOW=0
1890 FOR I=1 TO 128:COPY(I,1)=-1:COPY(I,2)=-1:NEXT
1900 PRINT:PRINT TAB(10);
1910 PRINT"Reading and sorting directory entries for disk in drive "+SD$
1920 CMD$="dir "+SD$+"|"+RD$+"sort|"+RD$+"sort/+10>"+DIRFIL$:GOSUB 2210
1930 OPEN DIRFIL$ FOR INPUT AS #1
1940 PRINT:FOR I=1 TO 4:INPUT#1,A$:NEXT:NFIL=0' discard header lines
1950 IF EOF(1) THEN 1990 ELSE INPUT#1,A$:NFIL=NFIL+1:MID$(A$,9)="."
1960 N=INSTR(9,A$," "):IF N=10 THEN MID$(A$,9)=" "
1970 N=INSTR(1,A$," "):IF N>8 THEN 1980 ELSE A$=LEFT$(A$,N-1)+MID$(A$,9,4)
1980 N1$(NFIL)=LEFT$(A$,12):GOTO 1950
1990 NFIL=NFIL-2:N=0:COL=1:ROW=MINROW:IF NFIL>0 THEN 2010
2000 CLS:PRINT"The disk in drive "+SD$+" has no standard files.":GOTO 2100
2010 GOSUB 2260:PRINT "The files on drive "+SD$+" are:"
2020 N=N+1:LOCATE ROW,COL
2030 COLOR 12:IF COPY(N,2)<0 THEN PRINT "   "; ELSE PRINT USING"###";COPY(N,2);
2040 COLOR 7:PRINT CHR$(27)+N1$(N);
2050 COL=COL+16:IF COL>80 THEN ROW=ROW+1:COL=1
2060 IF N<NFIL THEN 2020 ELSE IF COL=1 THEN ROW=ROW-1
2070 MAXROW=ROW:ROW=MINROW:COL=1
2080 PRINT:PRINT:PRINT"There are";NFIL;"files on the disk in drive ";SD$;
2090 INDEX=(ROW-MINROW)*5+(COL+15)/16:IF INDEX>NFIL THEN INDEX=-1
2100 KEY ON:LOCATE ROW,COL+2,1,0,13
2110 GOTO 2110'loop waiting for fkey interrupt
2120 '
2130 CLOSE #1:KILL DIRFIL$:IF RD$="a:" THEN 2190
2140 KILL RD$+"sort.exe":KILL RD$+"command.com"
2150 ENVIRON "COMSPEC=A:\COMMAND.COM"'  use command.com on drive a
2160 KEY OFF:KEY 1,"LIST ":KEY 2,"RUN"+CHR$(13):KEY 3,"LOAD"+CHR$(34)
2170 KEY 4,"SAVE"+CHR$(34):KEY 5,"FILES":KEY 6,"SYSTEM":KEY 7,"EDIT "
2180 KEY 8,"CLS"+CHR$(13):KEY 9,"KEY ":KEY 10,"RENUM "
2190 GOSUB 2260:LOCATE 3,1,1,11,12:PRINT"DEFRAG ended.":KEY ON:PRINT:END
2200 '
2210 T1=PEEK(&H30):T2=PEEK(&H31)'execute shell for cmd$
2220 SHELL CMD$
2230 POKE &H30,T1:POKE &H31,T2
2240 RETURN
2250 '
2260 CLS:COLOR 14:PRINT TAB(10);L$;" D E F R A G ";L$:COLOR 7:RETURN
```

## DIRDEM.BAS

```bas
10 '     **** This program demonstrates DIRECTRY ****
11 '     ** Written by Howard Glosser
12 '     ** from Jan. 1984 issue of SOFTALK magazine. pp 124-128.
20 '
30 '     **** Store DIRECTORY subbroutine in string ****
40 '
50 KEY OFF
60 DEF SEG
70 SUBRT$=STRING$(159,32)
80 SUBLC%=VARPTR(SUBRT$)
90 GOSUB 550
100 BLOAD"DIRECTRY.BIN",DIRECT
110 '
120 '    ** Define constants necessary in program **
130 '
140 DIM DIRLST$(111)
150 FCB$=STRING$(33,32)
160 DTA$=STRING$(33,32)
170 FILLER$=STRING$(12,32)
180 COUNT%=0
190 '
200 '    ** Set DIRLST$(0) to blanks **
210 '
220 FOR LOOP%=0 TO 111:DIRLST$(LOOP%)=FILLER$:NEXT
230 '
240 CLS
250 '
260 '    ** Select drive for reading directory **
270 '
280 LOCATE 1,20
290 PRINT"* * * DEMONSTRATION DIRECTRY SUBROUTINE * * *"
300 LOCATE 3,10,1
310 PRINT"Specify drive letter for directory (A B C D): ";
320 GOSUB 610:DRV$=KY$
330 '
340 '    ** Find out if drive letter is valid **
350 '
360 HIT%=INSTR("ABCD",DRV$)
370 IF HIT%=0 THEN SOUND 50,7:GOTO 300 ELSE PRINT DRV$
380 '
390 '    ** Call to DIRECTRY subroutine **
400 '
410 LOCATE ,,0:GOSUB 550
420 CALL DIRECT(DRV$,FCB$,DTA$,DIRLST$(0),COUNT%)
430 '
440 '    ** List results of DIRECTRY call **
450 '
460 LOCATE 5,10
470 PRINT"Directory on drive "DRV$" contains"COUNT%"entries."
480 PRINT
490 FOR LOOP%=0 TO COUNT%-1:PRINT DIRLST$(LOOP%)SPC(6);:NEXT :PRINT
500 PRINT:PRINT"Press SPACE BAR to continue or (S) to stop."
510 BEEP
520 GOSUB 610:CN$=KY$
530 IF CN$="S" THEN END
540 GOTO 180
550 '
560 '    ** Retrieve location of subroutine **
570 '
580 DIRECT=PEEK(SUBLC%+1)+PEEK(SUBLC%+2)*256
590 RETURN
600 '
610 '    ** KEYIN subroutine **
620 '
630 KY$=INKEY$:IF KY$="" THEN 630
640 '
650 '    ** Check for small or capital letters **
660 '
670 IF KY$<CHR$(97) OR KY$>CHR$(122) THEN 730
680 '
690 '    ** Change lowercase to uppercase **
700 '
710 KY$=CHR$(ASC(KY$)-32)
720 '
730 RETURN
```

## DIRECT.BAS

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

## EXPAND.BAS

```bas
400 DEFINT A-Z
500 INPUT "Input file";INF$
505 OPEN INF$ FOR INPUT AS #1
510 INPUT "Output file";OUTF$
515 OPEN OUTF$ FOR OUTPUT AS #2
520 TB$ = CHR$(9): CR$ = CHR$(13): LF$ = CHR$(10): FF$ = CHR$(12)
525 INCOL = 0
530 WHILE NOT EOF(1)
540	C$ = INPUT$(1,1)
550	IF C$=CR$ THEN 600 ELSE IF C$=LF$ THEN 600 ELSE IF C$=FF$ THEN 600
560	IF C$<>TB$ THEN INCOL=INCOL+1: GOTO 620
570	TOCOL = (INCOL AND &HFFF8) + 8: C$ = SPACE$(TOCOL-INCOL)
580	INCOL = TOCOL: GOTO 620
600	INCOL = 0
620	PRINT #2, C$;
630 WEND
650 CLOSE
999 END
```

## WHEREIS.BAS

```bas
1' This program generates a command WHEREIS.COM. WHEREIS.COM permits you
2 ' to determine the directory path(s) that lead to a given file name. 
3 ' To make this command part of your system, run this BASIC program once. 
4 ' Thereafter simply type WHEREIS xxxxx.xxx (where xxxxx.xxx is a file name, 
5 ' wild cards permitted).  The result will be lines displayed of the form 
6 ' /ddddd[/sssss]/xxxxx.xxx    (where ddddd and sssss are directory and 
7 ' sub-directory names defining the path to a file named xxxxx.xxx.) 
8 ' 
9 ' 
10 ' Credit for this very useful tool goes to John Socha.  It appeared in 
11 ' the January, 1984 issue of SOFTALK on page 101. 
12 ' 
15  DIM CHECK(39) 
20 FOR I=1 TO 39: CHECK(I)=0: NEXT I 
30 PRINT "CHECKING"; 
40 FOR I=1 TO 39 
50   FOR J=1 TO 8 
60     READ BYTE 
70     CHECK(I)=CHECK(I) XOR BYTE 
80   NEXT J 
90   PRINT "."; 
100 NEXT I 
110 PRINT 
120 LINECHECK=0 
130 FOR I=1 TO 39 
140   READ CHECK 
150   LINECHECK = LINECHECK XOR CHECK 
160 IF CHECK(I) <> CHECK THEN PRINT "DATA IN LINE"; 1000+10*(I-1);"MAY BE BAD." 
170 NEXT I 
180 IF LINECHECK <> 230 THEN PRINT "DATA BAD IN LINES 2010-2050." 
190 OPEN "WHEREIS.COM" AS #1 LEN=1 
200 PRINT "WRITING..." 
210 FIELD #1,1 AS BYTE$ 
220 RESTORE 
230 FOR I=1 TO 312    'READ THE CODE 
240   READ BYTE: LSET BYTE$=CHR$(BYTE): PUT #1 
250 NEXT I 
260 LSET BYTE$=CHR$(0) 
270 FOR I=1 TO 91     '91 BYTES OF 0 FROM DATA AREA 
280   PUT #1 
290 NEXT I 
300 CLOSE 
310 PRINT "WHEREIS.COM CREATED" 
320 END 
1000 DATA 190, 130, 000, 191, 134, 002, 172, 060 
1010 DATA 013, 116, 003, 170, 235, 248, 050, 192 
1020 DATA 170, 191, 052, 002, 050, 192, 252, 185 
1030 DATA 064, 000, 242, 174, 139, 223, 075, 186 
1040 DATA 000, 000, 232, 002, 000, 205, 032, 086 
1050 DATA 082, 232, 132, 000, 232, 161, 000, 114 
1060 DATA 013, 232, 095, 000, 232, 183, 000, 114 
1070 DATA 005, 232, 087, 000, 235, 246, 090, 082 
1080 DATA 232, 118, 000, 232, 138, 000, 114, 036 
1090 DATA 139, 242, 246, 068, 021, 016, 117, 011 
1100 DATA 232, 155, 000, 114, 023, 246, 068, 021 
1110 DATA 016, 116, 245, 128, 124, 030, 046, 116 
1120 DATA 239, 232, 011, 000, 080, 180, 026, 205 
1130 DATA 033, 088, 235, 228, 090, 094, 195, 087 
1140 DATA 086, 080, 083, 252, 139, 242, 131, 198 
1150 DATA 030, 139, 251, 172, 170, 010, 192, 117 
1160 DATA 250, 139, 223, 253, 170, 176, 092, 170 
1170 DATA 232, 156, 255, 091, 198, 007, 000, 088 
1180 DATA 094, 095, 195, 080, 082, 186, 052, 002 
1190 DATA 138, 007, 198, 007, 000, 232, 108, 000 
1200 DATA 136, 007, 090, 082, 131, 194, 030, 232 
1210 DATA 098, 000, 232, 080, 000, 090, 088, 195 
1220 DATA 086, 190, 134, 002, 232, 011, 000, 094 
1230 DATA 195, 086, 190, 048, 002, 232, 002, 000 
1240 DATA 094, 195, 080, 087, 139, 251, 252, 172 
1250 DATA 170, 010, 192, 117, 250, 095, 088, 195 
1260 DATA 081, 131, 250, 000, 119, 003, 186, 104 
1270 DATA 002, 131, 194, 043, 185, 016, 000, 180 
1280 DATA 026, 205, 033, 082, 186, 052, 002, 180 
1290 DATA 078, 205, 033, 090, 089, 195, 081, 082 
1300 DATA 186, 052, 002, 185, 016, 000, 180, 079 
1310 DATA 205, 033, 090, 089, 195, 080, 082, 180 
1320 DATA 002, 178, 010, 205, 033, 178, 013, 205 
1330 DATA 033, 090, 088, 195, 080, 082, 086, 252 
1340 DATA 139, 242, 180, 002, 172, 138, 208, 205 
1350 DATA 033, 172, 010, 192, 117, 247, 094, 090 
1360 DATA 088, 195, 000, 000, 000, 000, 000, 000 
1370 DATA 000, 000, 000, 000, 000, 000, 000, 000 
1380 DATA 042, 046, 042, 000, 092, 000, 000, 000 
1390 '91 BYTES OF 0s 
2000 ' 
2010 DATA 151, 049, 148, 185, 081, 005, 151, 175 
2020 DATA 170, 176, 177, 041, 063, 230, 149, 215 
2030 DATA 191, 073, 076, 200, 048, 027, 209, 243 
2040 DATA 186, 043, 142, 117, 156, 097, 222, 154 
2050 DATA 036, 072, 244, 193, 155, 000, 114
       
```

## ZAPDEB.BAS

```bas
100 '
200 ' Executable File   MODIFICATION TRANSFER PROGRAM
300 '                                                 Last Update 01/23/84
400 '
401 '                                       Author:   John Chapman
402 '                                                 844 S. Madison St.
403 '                                                 Hinsdale, Illinois
404 '                                                 Compuserv [70205,1217]
405 '
500 'This program will read in an unmodified Executable File
550 '     [filename].COM or [filename].EXE, of 12500 bytes or less,
600 '     and produce an output file called [filename].CMD which can be
700 '     renamed to [filename].COM.. This output file will contain all of
800 '     the modifications to [filename] currently available from the
900 '     author. See [filename].DOC for complete list and limitations.
910 '
950 DEFINT A-Z
960 READ FIL$
970 READ EXT$
1000 BFIL$ = FIL$+"."+EXT$
1100 CFIL$ = FIL$+".CMD"
1150 PRINT "Ready to update ";BFIL$
1200 INPUT "Enter Drive where original file resides",DRV$
1210 BFIL$=DRV$+BFIL$
1220 CFIL$=DRV$+CFIL$
1230 PRINT CFIL$;" will be created"
1240 OPEN BFIL$ FOR INPUT AS #1:CLOSE #1
1250 OPEN BFIL$ AS #1 LEN=1
1260 V= VARPTR(#1)
1270 L0=PEEK(V)
1280 IF L0 <>4 THEN GOTO 5000
1290 L1=PEEK(V+17) + 256 * PEEK(V+18) 'FILESIZE IN BYTES
1300 LIMIT = L1: IF LIMIT>12500 THEN PRINT "file too large":GOTO 5000 :
2000 'check base and change files for random, size and
2100 ' equal length .. abort if not correct conditions
2200 PRINT "BASE    FILE SIZE = ",LIMIT
2300 READ T:PRINT "TARGET  FILE SIZE = ",T
3000 DIM BB%(12500)
3100 FOR I=1 TO T:BB%(I)=0:NEXT
3200 FIELD #1,1 AS INB$
3300 '
3400 FOR I = 1 TO LIMIT
3410 GET #1,I
3420 BB%(I) = ASC(INB$)
3430 NEXT I
3431 CLOSE #1
3432 '
3440 READ BYTES:
3500 FOR I = 1 TO BYTES
3600 READ IKJ%,XOLD%,XNEW%
3700 IF BB%(IKJ%) <> XOLD% THEN GOTO 3950
3800 BB%(IKJ%) = XNEW%
3900 GOTO 4300
3950 PRINT "VERIFY REJECT AT ";IKJ%," (";XOLD%;" / ";XNEW%;") ":
4100 PRINT "TARGET FILE ";CFIL$;" UNUSABLE":
4200 END
4300 NEXT I
4500 '
4501 PRINT "last byte = ";IKJ%;" was ";XOLD%;" now ";XNEW%
4600 '
4610 OPEN CFIL$ FOR OUTPUT AS #2:CLOSE #2
4620 OPEN CFIL$ AS #2 LEN=1
4630 FIELD #2,1 AS INC$
4700 '
4710 FOR I = 1 TO T
4712 IF BB%(I)>255 THEN PRINT "FORMAT ERROR AT";I;" = ";BB%(I):
4720 LSET INC$ = CHR$(BB%(I))
4730 PUT #2,I
4740 NEXT I
4741 PRINT I;" Bytes Written to ";CFIL$
4750 CLOSE #2
4760 '
4800 PRINT "File ";CFIL$;" Created .. Rename to Use"
4900 END
4990 ' ** DATA STATEMENT WRITE SUBROUTINE
4991 ' filename,  LENGTH, # BYTES
4995 ' ** DATA STATEMENTS FOLLOW  THIS LINE **
4999 DATA debug, com,  11904,  21
5000 DATA  58, 23, 55, 133, 23, 55, 1251, 189, 166
5010 DATA  1959, 140, 232, 1960, 14, 110, 1961, 6, 38
5020 DATA  1962, 0, 144, 11800, 6, 140, 11801, 80, 14
5030 DATA  11802, 154, 6, 11803, 51, 0, 11804, 0, 161
5040 DATA  11805, 112, 108, 11806, 8, 4, 11807, 154, 59
5050 DATA  11808, 46, 6, 11809, 1, 108, 11810, 164, 4
5060 DATA  11811, 8, 116, 11812, 154, 250, 11813, 54, 195
```

## ZAPTRE.BAS

```bas
100 '
200 ' Executable File   MODIFICATION TRANSFER PROGRAM
300 '                                                 Last Update 01/23/84
400 '
401 '                                       Author:   John Chapman
402 '                                                 844 S. Madison St.
403 '                                                 Hinsdale, Illinois
404 '                                                 Compuserv [70205,1217]
405 '
500 'This program will read in an unmodified Executable File
550 '     [filename].COM or [filename].EXE, of 12500 bytes or less,
600 '     and produce an output file called [filename].CMD which can be
700 '     renamed to [filename].COM.. This output file will contain all of
800 '     the modifications to [filename] currently available from the
900 '     author. See [filename].DOC for complete list and limitations.
910 '
950 DEFINT A-Z
960 READ FIL$
970 READ EXT$
1000 BFIL$ = FIL$+"."+EXT$
1100 CFIL$ = FIL$+".CMD"
1150 PRINT "Ready to update ";BFIL$
1200 INPUT "Enter Drive where original file resides",DRV$
1210 BFIL$=DRV$+BFIL$
1220 CFIL$=DRV$+CFIL$
1230 PRINT CFIL$;" will be created"
1240 OPEN BFIL$ FOR INPUT AS #1:CLOSE #1
1250 OPEN BFIL$ AS #1 LEN=1
1260 V= VARPTR(#1)
1270 L0=PEEK(V)
1280 IF L0 <>4 THEN GOTO 5000
1290 L1=PEEK(V+17) + 256 * PEEK(V+18) 'FILESIZE IN BYTES
1300 LIMIT = L1: IF LIMIT>12500 THEN PRINT "file too large":GOTO 5000 :
2000 'check base and change files for random, size and
2100 ' equal length .. abort if not correct conditions
2200 PRINT "BASE    FILE SIZE = ",LIMIT
2300 READ T:PRINT "TARGET  FILE SIZE = ",T
3000 DIM BB%(12500)
3100 FOR I=1 TO T:BB%(I)=0:NEXT
3200 FIELD #1,1 AS INB$
3300 '
3400 FOR I = 1 TO LIMIT
3410 GET #1,I
3420 BB%(I) = ASC(INB$)
3430 NEXT I
3431 CLOSE #1
3432 '
3440 READ BYTES:
3500 FOR I = 1 TO BYTES
3600 READ IKJ%,XOLD%,XNEW%
3700 IF BB%(IKJ%) <> XOLD% THEN GOTO 3950
3800 BB%(IKJ%) = XNEW%
3900 GOTO 4300
3950 PRINT "VERIFY REJECT AT ";IKJ%," (";XOLD%;" / ";XNEW%;") ":
4100 PRINT "TARGET FILE ";CFIL$;" UNUSABLE":
4200 END
4300 NEXT I
4500 '
4501 PRINT "last byte = ";IKJ%;" was ";XOLD%;" now ";XNEW%
4600 '
4610 OPEN CFIL$ FOR OUTPUT AS #2:CLOSE #2
4620 OPEN CFIL$ AS #2 LEN=1
4630 FIELD #2,1 AS INC$
4700 '
4710 FOR I = 1 TO T
4712 IF BB%(I)>255 THEN PRINT "FORMAT ERROR AT";I;" = ";BB%(I):
4720 LSET INC$ = CHR$(BB%(I))
4730 PUT #2,I
4740 NEXT I
4741 PRINT I;" Bytes Written to ";CFIL$
4750 CLOSE #2
4760 '
4800 PRINT "File ";CFIL$;" Created .. Rename to Use"
4900 END
4990 ' ** DATA STATEMENT WRITE SUBROUTINE
4991 ' filename,  LENGTH, # BYTES
4995 ' ** DATA STATEMENTS FOLLOW  THIS LINE **
4999 DATA tree, com,  1540,  38
5000 DATA  85, 51, 49, 303, 242, 240, 306, 6, 8
5010 DATA  327, 3, 2, 377, 11, 20, 404, 20, 29
5020 DATA  411, 13, 22, 520, 224, 222, 991, 10, 32
5030 DATA  992, 10, 32, 1009, 32, 13, 1010, 32, 10
5040 DATA  1267, 205, 233, 1268, 33, 244, 1269, 195, 0
5050 DATA  1514, 0, 205, 1515, 0, 33, 1516, 0, 128
5060 DATA  1517, 0, 62, 1518, 0, 93, 1520, 0, 32
5070 DATA  1521, 0, 116, 1522, 0, 16, 1523, 0, 190
5080 DATA  1524, 0, 93, 1526, 0, 191, 1527, 0, 90
5090 DATA  1528, 0, 4, 1529, 0, 185, 1530, 0, 11
5100 DATA  1532, 0, 243, 1533, 0, 164, 1534, 0, 128
5110 DATA  1535, 0, 14, 1536, 0, 248, 1537, 0, 3
5120 DATA  1538, 0, 16, 1539, 0, 195
```

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0256

     Volume in drive A has no label
     Directory of A:\

    SAVE     COM       512   5-20-84   8:28a
    DISPRE   COM       560   5-01-84   9:36p
    DISPRE   EXE      1072   6-26-84   2:39a
    DISPRE   ASM      8617   6-26-84   3:45a
    DISPRE   DOC       326   5-01-84  10:52p
    MONOCLOK COM       384   2-13-83  11:52a
    LABEL    EXE      1232   6-07-84  12:37a
    LABEL    ASM      7595   6-26-84   3:49a
    FREE     COM      1034   5-20-84   9:24a
    FREE     ASM      6325   6-26-84   3:46a
    FREE     DOC      1595   5-20-84   8:48a
    WHEREIS  COM       451   6-04-84  10:48p
    WHEREIS  ASM      7242   6-26-84   3:50a
    DEFRAG   BAS      4699   5-01-84  10:55p
    DEFRAG   DOC      5331   5-19-84   2:41p
    NUSQ     COM      2176   5-19-84   5:31p
    NUSQ     DOC     11077   5-19-84   6:30p
    DUMP     EXE      1408   5-19-84   5:21p
    DUMP     ASM      9365   6-26-84   3:46a
    PARCHK   COM      1806   5-20-84   9:35a
    PARCHK   ASM     23533   6-26-84   3:50a
    PARCHK   DOC      4111   5-19-84   2:51p
    REFCD    DOC     11266   5-22-84  12:07p
    TABS     EXE      2048   5-19-84   4:56p
    TABS     DOC      1158   5-19-84   3:41p
    LOOK     COM       752   5-01-84   9:32p
    LOOK     ASM     14554   6-26-84   3:43a
    LOOK     DOC       296   5-01-84  10:48p
    ZAPDEB   BAS      3105   5-01-84   9:27p
    ZAPDEB   DOC       408   6-26-84   3:02a
    ZAPTRE   BAS      3025   5-01-84  10:54p
    ZAPTRE   DOC       397   5-01-84  10:43p
    QS       RIO       270   5-01-84   2:01a
    QS       TXT      3403   5-01-84   3:49p
    CLOCK    SYS       980   5-19-84   5:11p
    CLOCK    ASM     24109   6-26-84   4:00a
    CAPSDEF  COM       222   9-23-84   6:48p
    CAPSDEF  DOC      4096   8-01-84   2:32p
    CAPSDEF  ASM      3712   7-10-84   8:26a
    BIGCALC  BAS      8686   8-26-85   6:18a
    BIGCALC  DOC      4531   8-26-85   6:18a
    EXPAND   BAS       640  12-03-82   9:41p
    EXPAND   DOC      1632   3-14-84   1:02p
    DIRECT   BAS      2226   2-20-84  10:41p
    DIRDEM   BAS      1775   2-20-84  10:45p
    WHEREIS  BAS      3817   1-01-80  12:02a
    DSKTYP   EXE      1408   2-26-84  10:55a
    DSKTYP   ASM      6883   2-26-84  10:53a
    FORMAT   VOL       609   3-11-84  11:00p
    COLOR    PE       9452   3-12-84  12:13a
    PE-NOTAB DOC      1233   9-23-84   9:42p
    DCBA2    HOW      2739   7-06-84  12:19p
    TABS     ASM     11307   6-26-84   3:50a
    CRC      TXT      3073  12-26-84  12:20p
    CRCK4    COM      1536  10-21-82   5:50p
    BIGCALC  EXE     40110   1-11-87   4:56p
    FILES256 TXT      3084   1-30-87   8:57a
           57 file(s)     278993 bytes
                            9216 bytes free
