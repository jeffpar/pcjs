---
layout: page
title: "PC-SIG Diskette Library (Disk #111)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0111/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0111"
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

{% raw %}
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
{% endraw %}

## CAL.DOC

{% raw %}
```
This program shows the calendary for any month/year since 1900.  To
use say 

	CAL <CR>	-- Calendar for current month
	CAL <month>	-- Calendar for that month in current year.
			   Use month names ("December") or 3-letter
			   abbreviations ("Dec")
	CAL <mo><yr>    -- Calendary for that month/year.  Years are
			   2 or 4 digits (1983 or 83, for example).
```
{% endraw %}

## COENDP.ASM

{% raw %}
```
	TITLE	COENDP	- Diskette Contents List - Work	Area Definition
	SUBTTL	Version	1.1 - July 1984
	PAGE	81,132
;
CODE	SEGMENT	BYTE PUBLIC 'CODE'
	ASSUME	CS:CODE,DS:CODE
;
	PUBLIC	SRCE,PNTR
;
PNTR	DW	0			;Pointer list
SRCE	EQU	PNTR+456		;Start of entry	stack
;
CODE	ENDS
;
	END
```
{% endraw %}

## COFREE.ASM

{% raw %}
```
	TITLE	COFREE	- Diskette Contents List - Get Free Space
	SUBTTL	Version	1.1 - July 1984
	PAGE	81,132
;
CODE	SEGMENT	BYTE PUBLIC 'CODE'
	ASSUME	CS:CODE,DS:CODE
;
	EXTRN	VERS:BYTE,FREE:BYTE
X10000	DW	10000			;Conversion constants
X1000	DW	1000,100,10
;
	PUBLIC	GETFRE
GETFRE	PROC	NEAR
	TEST	VERS,-1
	JZ	VERS1
	XOR	DL,DL			;Set for default drive
	MOV	AH,36H
	INT	21H			;v2.0 -	get free space
	MUL	BX
	MUL	CX			;AX,DX contains	bytes free
	JMP	VCOM			;Enter common code
VERS1:	PUSH	DS
	MOV	AH,1BH
	INT	21H			;v1.x -	get FAT
	XOR	AH,AH
	XCHG	CX,DX			;CX has	number of units
	MUL	DX			;Bytes/allocation unit
	PUSH	AX			;Save
	XOR	AX,AX
	MOV	SI,2			;First FAT entry
FAT2:	MOV	DI,SI
	SHR	DI,1
	ADD	DI,SI			;Compute 1 1/2 bytes
	MOV	DI,WORD	PTR [BX+DI]	;Load FAT entry
	TEST	SI,1			;See if	odd or even
	JZ	FAT3
	SHR	DI,1
	SHR	DI,1
	SHR	DI,1			;Adjust	for 12 bits
	SHR	DI,1
FAT3:	AND	DI,0FFFH		;Three nibbles
	JNZ	FAT4			;In use, so don't count
	INC	AX
FAT4:	INC	SI			;Step to next entry
	LOOP	FAT2			;Loop through FAT
	POP	CX			;Restore bytes/allocation unit
	MUL	CX			;Compute total free bytes
	POP	DS			;Restore program seg reg
VCOM:	MOV	DI,OFFSET FREE		;Point to output area
	CALL	CONVRT			;Convert size to ASCII
	RET
GETFRE	ENDP
;
	PUBLIC	CONVRT
CONVRT	PROC	NEAR			;Converts 6 digits, zero surpressed
	PUSH	DI			;Save pointer for later	use
	DIV	X10000			;Result	range 0-999
	AAM
	CMP	AH,9
	JBE	SMALL			;Normal	sized file
	PUSH	AX			;Over 990K
	MOV	AL,AH
	AAM
	OR	AX,'00'
	XCHG	AH,AL
	STOSW				;Save high two digits
	POP	AX
	OR	AL,'0'
	STOSB				;Save next digit
	JMP	SHORT COMM		;  and rejoin common code
SMALL:	MOV	BYTE PTR [DI],'0'
	INC	DI
	OR	AX,'00'			;Make ASCII
	XCHG	AH,AL
	STOSW				;Place in image
COMM:	MOV	CX,3			;Convert last four digits
	MOV	SI,OFFSET X1000
DIVLP:	MOV	AX,DX			;Remainder becomes dividend
	XOR	DX,DX
	DIV	WORD PTR [SI]		;Power of 10 divide
	OR	AL,'0'			;Result	range 0-9
	STOSB
	ADD	SI,2
	LOOP	DIVLP
	OR	DL,'0'			;Last digit in remainder
	MOV	AL,DL
	STOSB
	MOV	CX,5			;Now zero surpress 5 digits
	POP	DI
	MOV	AL,' '
SUPLP:	CMP	BYTE PTR [DI],'0'
	JNZ	DNECVT			;Conversion complete
	STOSB				;Replace leading zero with blank
	LOOP	SUPLP
DNECVT:	RET
CONVRT	ENDP
;
CODE	ENDS
;
	END
```
{% endraw %}

## COPRNT.ASM

{% raw %}
```
	TITLE	COPRNT	- Diskette Contents List - Print Cover Sheet
	SUBTTL	Version	1.1 - June 1984
	PAGE	81,132
;
CODE	SEGMENT	BYTE PUBLIC 'CODE'
	ASSUME	CS:CODE,DS:CODE
;
	EXTRN	PNTR:WORD,STKCNT:WORD,TITLX:BYTE,RESTR:BYTE
;
	EXTRN	CONVRT:NEAR
;
	PUBLIC	PSX
PSX	DB	0			;Pass counter
DBUF	DB	8 DUP (0)		;Work buffer for file size
DBLK	DB	'  ',0			;Double	blank between columns
LFTB	DB	'|  ',0			;Left border
RGTB	DB	'  |'			;Right border (includes	CRLF)
CRLF	DB	13,10,0
DRCT	DB	'  <DIR>',0
BCNT	DB	0			;Body line counter
;
	PUBLIC	PRINT
PRINT	PROC	NEAR
	INC	PSX			;Count numbers of prints
	MOV	BCNT,33			;Set body line counter
	MOV	AX,STKCNT		;Load entry count
	MOV	DH,4			;Divide	by number of columns
	DIV	DH
	OR	AH,AH
	JZ	SETCNT			;Evenly	divisable
	INC	AL			;Ragged	edge
	CBW
SETCNT:	PUSH	AX			;Entries per column count
	CMP	AX,33
	JBE	NORM			;See if	too big	for standard
	TEST	PSX,1			;See if	a page restore needed
	JNZ	NORES
	CALL	DORES			;Do it
NORES:	MOV	PSX,0
NORM:	CALL	DOBRDR			;Do upper border
	CALL	DOBLNE			;  and a blank line
	CALL	DOLFTM			;Do left margin
	MOV	DX,OFFSET TITLX
	CALL	DOPRT			;Output	the title line
	CALL	DORGTM			;Do right margin
	CALL	DOBLNE			;  and another blank line
	POP	CX
	JCXZ	EMPTY
	MOV	BP,CX
	SHL	BP,1			;BP contains offset/column in ptr list
	MOV	SI,OFFSET PNTR		;Point to start	of ptr list
OTLP:	CALL	DOLFTM			;Do a left margin
	MOV	DL,4			;Set inner loop	count to columns
	XOR	BX,BX			;Clear column offset reg
INLP:	CALL	PRTENT			;Print stack entry
	ADD	BX,BP			;Step to next column entry
	DEC	DL
	JNZ	INLP			;End of	inner loop
	CALL	DORGTM			;Do a right margin
	ADD	SI,2			;Step to next ptr
	DEC	BCNT			;Decrement body	line count
	LOOP	OTLP			;End of	outer loop
EMPTY:	MOV	CL,BCNT			;Load remaining	body lines
	CMP	CL,0
	JL	NOFILL			;Over full
	XOR	CH,CH
	JCXZ	NOFILL			;All used
FILL:	CALL	DOBLNE			;Fill out body lines
	LOOP	FILL
NOFILL:	CALL	DOBRDR			;Do bottom border
DORES:	MOV	DX,OFFSET RESTR
	CALL	DOPRT			;Restore page
	RET
PRINT	ENDP
;
	PUBLIC	DOPRT
DOPRT	PROC	NEAR			;This subroutine simply	prints
	PUSH	DX			;the string pointed to by the
	PUSH	SI			;DX reg	on entry.  The string
	MOV	SI,DX			;is terminated by a nul	byte.
	MOV	AH,5
DPLP:	MOV	DL,BYTE	PTR [SI]
	OR	DL,DL
	JZ	PRTEND
	INT	21H
	INC	SI
	JMP	DPLP
PRTEND:	POP	SI
	POP	DX
	RET
DOPRT	ENDP
;
PRTENT	PROC	NEAR			;Print one stack entry
	PUSH	CX
	PUSH	DX
	MOV	CX,12
	MOV	DI,WORD	PTR [SI+BX]	;DI points to stack entry
	OR	DI,DI			;If entry is zero, blank space
	JZ	BLNK1
	MOV	AH,5
PELP:	MOV	DL,BYTE	PTR [DI]	;Print to the end of the
	OR	DL,DL			;  name/type entry
	JZ	BLNK2			;  blanking remainder of 12
	INT	21H			;  character field
	INC	DI
	LOOP	PELP
BACK:	INC	DI
	MOV	AX,WORD	PTR [DI]	;Load file size
	MOV	DX,WORD	PTR [DI+2]
	INC	DX
	JNZ	NODIR
	MOV	DX,OFFSET DRCT
	CALL	DOPRT
	JMP	SHORT GONE
NODIR:	DEC	DX
	PUSH	SI
	MOV	DI,OFFSET DBUF
	CALL	CONVRT			;Convert size to ASCII decimal
	POP	SI
	MOV	DX,OFFSET DBUF
	CALL	DOPRT			;Print size
GONE:	POP	DX
	PUSH	DX			;Reload	entry value
	DEC	DL
	JZ	PUNT			;If last column	don't space over
	MOV	DX,OFFSET DBLK
	CALL	DOPRT			;Two blanks between columns
PUNT:	POP	DX
	POP	CX
	RET
BLNK1:	MOV	CX,19			;No entry, so blank entire column
	CALL	CLER
	JMP	GONE
BLNK2:	CALL	CLER			;Blanks	remainder of name/type field
	JMP	BACK
PRTENT	ENDP
;
DOBLNE	PROC	NEAR
	PUSH	CX
	CALL	DOLFTM			;Output	a bordered blank line
	MOV	CX,82
	CALL	CLER
	CALL	DORGTM
	POP	CX
	RET
DOBLNE	ENDP
;
DOBRDR	PROC	NEAR
	MOV	CX,88
	MOV	DL,'-'
	CALL	DLFIL			;Output	a top or bottom	border
	MOV	DX,OFFSET CRLF
	CALL	DOPRT
	RET
DOBRDR	ENDP
;
DOLFTM	PROC	NEAR			;Outputs "|  "
	PUSH	DX
	MOV	DX,OFFSET LFTB
	CALL	DOPRT
	POP	DX
	RET
DOLFTM	ENDP
;
DORGTM	PROC	NEAR			;Outputs "  |CRLF"
	PUSH	DX
	MOV	DX,OFFSET RGTB
	CALL	DOPRT
	POP	DX
	RET
DORGTM	ENDP
;
CLER	PROC	NEAR			;Outputs CX blanks to the printer.
	MOV	DL,' '
DLFIL:	MOV	AH,5			;Outputs DL character CX times
CLRLP:	INT	21H
	LOOP	CLRLP
	RET
CLER	ENDP
;
CODE	ENDS
;
	END
```
{% endraw %}

## COSCAN.ASM

{% raw %}
```
	TITLE	COSCAN	- Diskette Contents List - Scan	Directory
	SUBTTL	Version	1.1 - July 1984
	PAGE	81,132
;
CODE	SEGMENT	BYTE PUBLIC 'CODE'
	ASSUME	CS:CODE,DS:CODE
;
	EXTRN	PNTR:WORD,SRCE:BYTE
;
FCBE	DB	-1			;Extended FCB
	DB	5 DUP (?)
	DB	10H			;Search	for directory entries
NORM	DB	0,'???????????'		;Dummy FCB for "find/next"
	DB	24 DUP (?)
;
	PUBLIC	SCAN
SCAN	PROC	NEAR
	MOV	DI,OFFSET PNTR
	XOR	AX,AX
	MOV	CX,228
	REP	STOSW			;Clear pointer table
	MOV	BX,OFFSET PNTR		;BX points to start of pointer list
	MOV	DI,OFFSET SRCE		;DI points to start of entry stack
	XOR	CX,CX
	MOV	NORM,CL			;Set to	default	drive
	MOV	DX,OFFSET FCBE
	MOV	AH,11H
	INT	21H			;Get first search entry
	JMP	SHORT INNER
LOOP:	MOV	DX,OFFSET FCBE
	MOV	AH,12H
	INT	21H			;Get next entry
INNER:	OR	AL,AL
	JNZ	DONE
	CALL	SAVE			;Stack entry
	INC	CX			;Count entry
	JMP	LOOP
DONE:	RET				;Returns count in CX
SCAN	ENDP
;
SAVE	PROC	NEAR
	PUSH	CX
	MOV	WORD PTR [BX],DI	;Save pointer to start of entry
	ADD	BX,2			;  and step pointer table reg
	MOV	SI,88H			;Point to DTA -	file name
	MOV	CX,8
SVLP:	MOV	AL,BYTE	PTR [SI]
	CMP	AL,' '
	JZ	NMDNE			;End of	name
	MOV	BYTE PTR [DI],AL
	INC	SI
	INC	DI
	LOOP	SVLP
NMDNE:	TEST	BYTE PTR DS:[93H],10H
	JNZ	DIRECT
	MOV	SI,90H			;Point to DTA type field
	CMP	BYTE PTR [SI],' '
	JZ	ALLDNE			;No file type
	MOV	BYTE PTR [DI],'.'
	INC	DI
	MOV	CX,3
	REP	MOVSB			;Move type field to stack
ALLDNE:	MOV	BYTE PTR [DI],0		;Mark end of string
	INC	DI
	MOV	SI,0A4H			;Point to size of file
	MOV	CX,4
	REP	MOVSB			;  and save in stack
SAVOUT:	POP	CX
	RET
DIRECT:	XOR	AL,AL
	STOSB
	DEC	AL
	MOV	CX,4
	REP	STOSB
	JMP	SAVOUT
SAVE	ENDP
;
CODE	ENDS
;
	END
```
{% endraw %}

## COSORT.ASM

{% raw %}
```
	TITLE	COSORT	- Diskette Contents List - Sort	Entry Stack
	SUBTTL	Version	1.1 - July 1984
	PAGE	81,132
;
CODE	SEGMENT	BYTE PUBLIC 'CODE'
	ASSUME	CS:CODE,DS:CODE
;
	EXTRN	PNTR:WORD,SRCE:BYTE
	PUBLIC	STKCNT
STKCNT	DW	0			;Count of entries in stack
;
	PUBLIC	SORT
SORT	PROC	NEAR
	MOV	STKCNT,CX		;Save entry count
	JCXZ	DONE
	DEC	CX
	JCXZ	DONE
	MOV	SI,OFFSET PNTR		;Point to first	stack entry pntr
OUTER:	MOV	DI,SI
	ADD	DI,2			;Set to	"next" pntr
	MOV	DX,CX
INNER:	CALL	COMPAR			;Compare stack entries
	JBE	LEAVE			;Ascending sequence, so	no change
	MOV	AX,WORD	PTR [SI]
	XCHG	AX,WORD	PTR [DI]
	MOV	WORD PTR [SI],AX	;Exchange pointers
LEAVE:	ADD	DI,2
	DEC	DL
	JNZ	INNER			;Bubble	through	inner loop
	ADD	SI,2
	LOOP	OUTER			;Bubble	through	outer loop
DONE:	RET
SORT	ENDP
;
COMPAR	PROC	NEAR			;This compare always forces short
	PUSH	SI			;strings low, since strings are
	PUSH	DI			;terminated with nuls.
	PUSH	CX
	MOV	CX,12			;Max compare
	MOV	SI,WORD	PTR [SI]	;Point to entry
	MOV	DI,WORD	PTR [DI]	;Point to other	entry
	REP	CMPSB			;Compare strings
	POP	CX
	POP	DI
	POP	SI
	RET
COMPAR	ENDP
;
CODE	ENDS
;
	END
```
{% endraw %}

## COTITL.ASM

{% raw %}
```
	TITLE	COTITL	- Diskette Contents List - Get Title
	SUBTTL	Version	1.1 - July 1984
	PAGE	81,132
;
CODE	SEGMENT	BYTE PUBLIC 'CODE'
	ASSUME	CS:CODE,DS:CODE
;
	EXTRN	VERS:BYTE
;
	PUBLIC	TITLX,FREE
LSRCH	DB	'*.*',0
LB3	DB	'Label:'
TPRMT	DB	13,10,'Enter Title: $'
TBUF	DB	37,0			;Input buffer for user title
	DB	37 DUP (?)
TITLX	DB	39 DUP (' ')		;Title line
LB1	DB	7 DUP (' ')
LB2	DB	13 DUP (' ')		;Label field
	DB	'Free: '
FREE	DB	9 DUP (' ')		;Formatted free	space in title line
MONTH	DB	'  /'			;Date fields in	title line
DAY	DB	'  /'
YEAR	DB	'  ',0			;End of	title
;
	PUBLIC	GETTTL
GETTTL	PROC	NEAR
	MOV	DI,OFFSET TITLX
	MOV	CX,59
	MOV	AL,' '
	REP	STOSB			;Clear title line
	MOV	DX,OFFSET TPRMT
	MOV	AH,9
	INT	21H			;Prompt	for title
	MOV	DX,OFFSET TBUF
	MOV	AH,0AH
	INT	21H			;Get user title
	MOV	CL,TBUF+1		;Load length
	XOR	CH,CH
	MOV	SI,OFFSET TBUF+2
	MOV	DI,OFFSET TITLX
	REP	MOVSB			;Move user title to title line
	MOV	AH,2AH
	INT	21H			;Get date
	SUB	CX,1900			;Convert to two	digit year
	MOV	DI,OFFSET YEAR
	MOV	AL,CL
	CALL	DECMAL			;Fill in month/day/year
	MOV	DI,OFFSET MONTH
	MOV	AL,DH			;  for title line
	CALL	DECMAL
	MOV	DI,OFFSET DAY
	MOV	AL,DL
	CALL	DECMAL
	CMP	VERS,3			;See if	Version	3 or later
	JB	TDNE			;No, so	skip label
	MOV	DX,OFFSET LSRCH		;Check directory for label
	MOV	AH,4EH
	MOV	CX,8
	INT	21H
	JC	TDNE			;No label
	MOV	SI,OFFSET LB3		;Move in "Label:"
	MOV	DI,OFFSET LB1
	MOV	CX,6
	REP	MOVSB
	MOV	SI,9EH			;Move in diskette label
	MOV	DI,OFFSET LB2
	MOV	CX,11
LBLP:	LODSB
	OR	AL,AL
	JZ	TDNE			;Label terminates with null
	CMP	AL,'.'
	JE	LBLP			;DOS insists on	punctuation
	STOSB
	LOOP	LBLP
TDNE:	RET
GETTTL	ENDP
;
DECMAL	PROC	NEAR			;Converts AL to	two decimal
	AAM				;  digits and stores at	SI
	OR	AX,'00'
	XCHG	AL,AH
	STOSW				;Save in image
	RET
DECMAL	ENDP
;
CODE	ENDS
;
	END
```
{% endraw %}

## COVER.ASM

{% raw %}
```
	TITLE	COVER	- Diskette Contents List - Main	Module
	SUBTTL	Version	1.1 - July 1984
	PAGE	81,132
;
;	****************************************************************
;	*  D. W. Daetwyler - Route 5, Box 518A - Springdale, AR	72764  *
;	****************************************************************
;
CODE	SEGMENT	PARA PUBLIC 'CODE'
	ASSUME	CS:CODE,DS:CODE
;
	EXTRN	DOPRT:NEAR
;
	ORG	100H
BEGIN:	JMP	START
;
	PUBLIC	VERS,RESTR
;
SETPRT	DB	27,'0',27,'C',44,15,0,0,0,0,0,0	;Set 1/8" 132 character
RESPRT	DB	27,64,0,0,0,0,0,0,0,0,0,0 ;Restore to power up status
RESTR	DB	12,0,0,0,0,0		;Do a form feed
VERS	DB	0			;DOS Version flag
DDRV	DB	0			;Default drive at entry
NDRV	DB	0			;Number	of drives in system
LOGO	DB	'D',0FDH,' Cover$'
PRMT	DB	13,10,'Enter drive to list (Esc to quit): $'
ERMSG1	DB	13,10,'Invalid drive$'
;
	EXTRN	GETTTL:NEAR,GETFRE:NEAR,SCAN:NEAR
	EXTRN	SORT:NEAR,PRINT:NEAR
	EXTRN	PSX:BYTE
;
START	PROC	NEAR
	MOV	DX,OFFSET LOGO
	MOV	AH,9
	INT	21H
	MOV	DX,OFFSET SETPRT
	CALL	DOPRT			;Set printer
	MOV	AH,30H
	INT	21H			;Check DOS Version
	OR	AL,AL
	JZ	NOTTWO			;V1.x
NOTTWO:	MOV	VERS,AL			;Save DOS flag
	MOV	AH,19H
	INT	21H			;Get default drive
	MOV	DDRV,AL			;  and save
	MOV	DL,AL
	MOV	AH,0EH
	INT	21H			;Get number of drives
	MOV	NDRV,AL			;  and save
;
;	Start of main loop
;
MLOOP:	MOV	DX,OFFSET PRMT		;Prompt	for drive
	MOV	AH,9
	INT	21H
	MOV	AH,1
	INT	21H			;Get user response
	CMP	AL,1BH			;Check for exit
	JE	QUIT			;He's done, so get off
	OR	AL,' '			;Force lower case
	SUB	AL,'a'-1		;Compute drive number
	JNC	DRVOK			;May be	valid drive
ERR1:	MOV	DX,OFFSET ERMSG1	;Invalid drive message
	MOV	AH,9
	INT	21H			;Error message out
	JMP	MLOOP
DRVOK:	CMP	AL,NDRV			;Check for installed drive
	JA	ERR1			;Drive not installed
	DEC	AL
	MOV	DL,AL
	MOV	AH,0EH
	INT	21H			;Make selected drive default
	CALL	GETTTL			;Get title
	CALL	GETFRE			;Get free space
	CALL	SCAN			;Load directory	entries
	CALL	SORT			;Sequence directory entries
	CALL	PRINT			;Produce listing
	JMP	MLOOP
;
QUIT:	MOV	DL,DDRV			;Load entry default drive
	MOV	AH,0EH
	INT	21H			;Restore default
	TEST	PSX,1
	JZ	NOREST
	MOV	DX,OFFSET RESTR
	CALL	DOPRT			;Restore page
NOREST:	MOV	DX,OFFSET RESPRT
	CALL	DOPRT			;Reset printer
	INT	20H			;  and exit
START	ENDP
;
CODE	ENDS
;
	END	BEGIN
```
{% endraw %}

## CRC.TXT

{% raw %}
```
PC-SIG Disk No. #111, version v1 

The following is a list of the file checksums which should be produced by
the CRCK4 program on disk #9 (and others).  If the CRC numbers do not match
you may have a bad file.  To use type:  CRCK4 <filespec>

CRCK4 output for this disk:


CRCK ver 4.2B (MS DOS VERSION )
CTL-S pauses, CTL-C aborts

--> FILE:  LAR     .EXE         CRC = 46 D1

--> FILE:  LAR     .DOC         CRC = 37 D1

--> FILE:  PRINT   .EXE         CRC = 9E EE

--> FILE:  PRINT   .C           CRC = 53 E1

--> FILE:  COVER   .COM         CRC = DE ED

--> FILE:  DIRECTRY.BAS         CRC = 16 AA

--> FILE:  DIRECTRY.BIN         CRC = F5 B4

--> FILE:  BIGCALC .BAS         CRC = CC 9F

--> FILE:  ST      .DOC         CRC = FC 59

--> FILE:  ST      .COM         CRC = FD 69

--> FILE:  PI-COMP .DOC         CRC = DF A8

--> FILE:  PI-COMP .COM         CRC = CE 65

--> FILE:  SHELL   .DOC         CRC = 22 33

--> FILE:  SHELL   .COM         CRC = 49 25

--> FILE:  ENTAB   .C           CRC = 7C DE

--> FILE:  MEMDRV  .SYS         CRC = 4F 2C

--> FILE:  MEMDRV  .ASM         CRC = D4 42

--> FILE:  LABELPRT.BAS         CRC = A0 32

--> FILE:  GETMEM  .COM         CRC = A2 EC

--> FILE:  GETMEM  .ASM         CRC = E9 7B

--> FILE:  FIXTEXT .BAS         CRC = 0C 03

--> FILE:  BIGCALC .DOC         CRC = 11 F5

--> FILE:  ENTAB   .EXE         CRC = BC 69

--> FILE:  DETAB   .C           CRC = 97 90

--> FILE:  DETAB   .EXE         CRC = 82 29

--> FILE:  READ    .ME          CRC = CE F3

--> FILE:  CAL     .DOC         CRC = 24 A2

--> FILE:  CAL     .COM         CRC = 72 DF

 ---------------------> SUM OF CRCS = 63 F5

DONE

These and other Public Domain and user-supported programs from:

PC Software Interest Group
1125 Stewart Ct  Suite G
Sunnyvale, CA 94086
(408) 730-9291
```
{% endraw %}

## DIRECTRY.BAS

{% raw %}
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
{% endraw %}

## FILES111.TXT

{% raw %}
```
--------------------------------------------------------------------------
Disk No 111   BBS Utilities #3                                       v1.2
--------------------------------------------------------------------------
BIGCALC  BAS  100 digit precision calculator!
BIGCALC  DOC  Documentation for above
CAL      COM  Prints calendar for any month/year after 1900
CAL      DOC  Documentation for above
COVER    COM  Prints file directory on Epson
DETAB    C    Convert tabs in file to blanks  (Source program)
DETAB    EXE  Executable file for above
DIRECTRY BAS  Creates machine program to read disk directory
ENTAB    C    Convert blanks in file to tabs  (Source program)
ENTAB    EXE  Executable file for above
FIXTEXT  BAS  DOS-to-WORDSTAR converter, better than UNWS
GETMEM   ASM  Program to reserve memory areas  (Source program)
GETMEM   COM  Executable file for above
LABELPRT BAS  Print diskette directory as a diskette label
LAR      DOC  Program to manage file libraries  (Documentation)
LAR      EXE  Executable file for above
MEMDRV   ASM  DOS 2.0 device driver to allow 640K RAM  (Source program)
MEMDRV   SYS  Executable file for above
PI-COMP  COM  Replacement for DOS COMP command - better!
PI-COMP  DOC  Documentation for above
PRINT    C    Print text files on printer  (Source program)
PRINT    EXE  Executable file for above
SHELL    COM  Fix for DOS SHELL command bug
SHELL    DOC  Documentation for above
ST       COM  Type files to full screen with PgUp/PgDn
ST       DOC  Documentation for above
 
PC-SIG
1030D E Duane Avenue
Sunnyvale Ca. 94086
(408) 730-9291
(c) Copyright 1987 PC-SIG
```
{% endraw %}

## FIXTEXT.BAS

{% raw %}
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
{% endraw %}

## GETMEM.ASM

{% raw %}
```
cseg	segment para public 'code'
org	100h
getmem	proc far

intaddr equ 60h*4		; interrupt address - int 60 hex

; Memory-resident program to get and hold a block of memory.
; To reserve a block of memory, enter 'GETMEM nn', where nn is the
; number of KB to be allocated. For example, 'GETMEM 32' reserves 32KB.
; NN can be from 1 to 63. The address of the block is saved at interrupt
; 60h (0:180h - 0:183h), with the length in the  first word, and the segment
; in the second word.
; A '/x' option can be used to keep the program from allocating memory if
; a block of memory is already allocated.

	assume cs:cseg,ds:cseg,ss:nothing,es:nothing

p000:				; read command line
	mov dx,offset copyr
	call p100		; print copyright
	mov si,80h		; point to start of command line
	mov ch,0
	mov cl,[si]		; get length
	mov ax,0
	mov bx,0
p010:	inc si			; point to next character
	mov bl,[si]		; get the character
	cmp bl,'/'              ; is it a slash?
	jnz p015		; no
	mov bh,[si+1]		; get next character
	cmp bh,'x'              ; is it 'x'?
	jz p012 		; yes
	cmp bh,'X'              ; is it 'X'?
	jz p012 		; yes
	mov bh,0
	jmp p015

p012:	mov norerun,bh		; set rerun flag
	mov bh,0

p015:	cmp bl,'0'              ; is it less than zero?
	jb p020 		; yes
	cmp bl,'9'              ; is it greater than nine?
	ja p020 		; yes
	sub bl,'0'              ; convert to binary
	push cx 		; save cx
	mov cx,10
	mul cx			; multiply current ax by 10
	pop cx
	add ax,bx		; add latest digit
p020:	loop p010		; all done?

	cmp ax,1		; is memory less than 1?
	jb p090 		; yes
	cmp ax,63		; is memory greater than 63?
	ja p090 		; yes
	push ax 		; save ax

	aam			; set up message
	xchg ah,al
	add ax,3030h		; make it ascii
	cmp al,30h		; leading zero?
	jnz p030		; no
	mov al,20h		; make it a space

p030:	mov msg1mem,ax		; move to message area

	pop ax			; restore ax
	mov cl,10
	sal ax,cl		; convert to KB
	mov memsize,ax		; save memory size

	push es 		; set interrupt 60h
	mov ax,0
	mov es,ax
	mov di,intaddr		; interrupt address
	mov al,norerun		; is /x option present?
	cmp al,0
	jz p050 		; no

	mov ax,es:[di]
	cmp ax,0		; any memory reserved?
	jz p050 		; no
	pop es
	int 20h 		; yes - terminate

p050:	mov ax,memsize		; length of block
	push cs
	pop bx			; code segment
	mov es:[di],ax		; modify interrupt
	mov es:[di+2],bx
	pop es
	mov dx,offset msg1	; print message
	call p100
	mov dx,memsize		; set block size
	int 27h 		; terminate and stay resident

p090:				; print error message
	mov dx,offset msg2
	call p100
	int 20h 		; terminate

p100	proc near		; print message
	push ax
	mov ah,9
	int 21h
	pop ax
	ret
p100	endp

memsize dw 0			; requested memory size
norerun db 0			; rerun flag - non-zero if /x option
copyr	db 'GETMEM - Copyright 1983 Data Base Decisions',10,13,'$'
msg1	db 'Reserving '
msg1mem dw '..'
	db ' KB of memory.',10,13,'$'
msg2	db 'Missing/invalid memory specification',7,10,13,'$'

getmem	endp
cseg	ends
end	getmem




```
{% endraw %}

## LABELPRT.BAS

{% raw %}
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
{% endraw %}

## LAR.DOC

{% raw %}
```
Lar - LU format library file maintainer
by Stephen C. Hemminger
linus!sch or sch @Mitre-Bedford MA
Lattice version T. Jennings 1 Dec 83

Bugs fixed 12 Jan 84:
No longer puts drive letters in the index
R command now works. (I think)
Revision date in signon
No more occasional garbage in files with Update
        Missing function GETSTRING added to source file

DESCRIPTION
Lar  is a program to manipulate CP/M LU format libraries. 
The  original CP/M library program LU is the product of  Gary  P. 
Novosielski.  The  primary use of lar is to combine several files 
together for upload/download to a personal computer. 

Usage: lar key library [files] ...

Key functions are:
u - Update, add files to library(also creates new libraries)
t - Table of contents
e - Extract files from library
p - Print files in library
d - Delete files in library
r - Reorganize library

EXAMPLES:
lar t foo.lbrlist all files in FOO.LBR
lar e foo.lbr 1.c 2.cextract files 1.c, 2.c from FOO.LBR
lar p foo.lbr 1.cdisplay 1.c from FOO.LBR
lar u foo.lbr 1.c 2.c 3.c add or replace files in FOO.LBR

When creating a new library, you will be prompted for the 
maximum number of entries it can contain. Assuming NEW.LBR doen't 
exist ... 

lar u new.lbrcreate an empty library
lar u new.lbr a.c,b.c,d.ccreate NEW.LBR, add files.

The Reorganize option causes <lbrfile>.tmp to be created, 
and the contents of the old library to be copied into it. 

PECULIARITIES:

When  accessing  filenames without  extentions,  such  as 
"FOO", enter them as "FOO." The dot is necessary.


This  program  is public  domain  software,  no  warranty 
intended or implied.

 them as "FOO." The dot is necessary.


This  program  is public  domain  software,  no  warranty 
inte
```
{% endraw %}

## MEMDRV.ASM

{% raw %}
```
title   ramdvr 01-01-84        [01-01-84] 
;------------------------------------------------------------------------------- 
; RAMDVR.SYS -- Modification to Dan O'Brien's excellent program by 
;               Tom Perry, CIS 70455,751 or FORUM ][ 305/772-4444. 
; 
;               This modified version performs the same function described 
;               below.  The only difference is that it runs as a "device 
;               driver" on DOS 2.0 and up.  This means not only that it gets 
;               control earlier and thus works faster, but also that it will 
;               not cripple the system if you want to install a device that 
;               takes a fair amount of memory.  For instance, I had a virtual 
;               disk driver that uses 180K.  With switches set for 64K, it 
;               could not be installed.  To get around this with MORRAM.COM, 
;               you have to put logic in AUTOEXEC.BAT to switch between two 
;               CONFIG.SYS files; it can be done (I did it for a while), but 
;               it's messy and takes more disk space -- a LOT more if you're 
;               working with a hard file with its large allocation unit. 
; 
;               To use this version, simply create a file on your boot disk 
;               named CONFIG.SYS containing the line DEVICE=RAMDVR.SYS 
;               and copy RAMDVR.SYS onto the boot disk.  If you already have 
;               a CONFIG file, enter DEVICE=RAMDVR.SYS as its first line. 
;               Set your switches for 64K, turn on the machine, and notice 
;               the difference.  To learn how it works, read Dan's description 
;               below. 
; 
;               There IS a penalty for doing it this way: Part of the program 
;               remains permanently installed in the system as a device driver, 
;               eating up a few bytes of precious RAM.  I have left enough to 
;               keep the system from crashing if the device driver is driven 
;               again (for instance, by a MODE RAMCHECK command).  More bytes 
;               could be saved if you're willing to take that slight risk; 
;               probably the minimum you'd need to keep is the four bytes 
;               constituting the device driver chain at label "next_dev"; 
;               uncomment the indicated line if you want to try this. 
 
 
; MORERAM.COM - by Daniel M. O'Brien (v 1.0) 21 Dec 1983 
; 
;             - freely adapted from a PC-WORLD User-to-User column program 
;               of the same name (object disassembled using ASMGEN) and from 
;               a program shown in a DR. DOBBS Journal article 
;               (16 bit Toolkit) called MEMSIZE. 
; 
; This program has two (or three) purposes. 
; 
;       1) Allow a PC to use more memory than is allowed via the motherboard 
;       memory switches (544 K bytes for the 64K motherboard and 640 K bytes 
;       for the newer 256K motherboard). And because of 1)... 
; 
;       2) Allow faster power-up sequence by setting the motherboard memory 
;       switch settings to 64 K bytes installed. 
; 
;       And as long as we are in the neighborhood... 
; 
;       3) Patch the ROM BIOS data area to indicate that this PC has four 
;       floppy diskettes installed (instead of the normal two). This is for 
;       ram disk emulation programs that require the motherboard equipment 
;       options switch to be set to include the number of ram disks. 
;       This is most notably required by the AST RESEARCH ramdisk program 
;       called SUPERDRV. This code is commented out. To use it you must 
;       uncomment out the code and reassemble. Search for the string: 
; 
;                       ;stub*** 
; 
; Using MORERAM. 
; 
;       First, copy MORERAM.COM to your boot device (floppy or fixed). 
;       Next, create or edit your AUTOEXEC.BAT file found on your 
;       boot device to include MORERAM as the **FIRST** program that 
;       will be executed. This is important as results are not guaranteed 
;       if MORERAM is not the first command executed at boot time. 
;       Next, open the covers of your PC and set the memory switches 
;       to indicate that your PC only has 64K. 
; 
;       Now try rebooting your PC using the Alt-Ctrl-Del sequence. 
; 
;       MORERAM will first display a hello banner and the amount of 
;       memory DOS thinks your PC has (should be 64K). Next, MORERAM 
;       will pause a second or two while it determines how much memory 
;       your PC really has. (It also clears this memory in the process 
;       to eliminate PARITY 2 errors later). 
;       Once the physical memory limit is determined, MORERAM will display 
;       that amount and then automatically re-boot. (Don't get excited, 
;       this won't loop indefinitely, because...) The next time MORERAM 
;       is again executed from your AUTOEXEC.BAT it will find that the amount 
;       of memory DOS thinks you have will be the same as that installed, and 
;       a reboot will be avoided! 
; 
; I use this program on my PC that has 576K (64K + 512K) worth of memory. 
; Also, I have successfully tested it with 704K (64K + 512K + 128K) of memory, 
; but this requires placing memory into the semi-forbidden zone (segment A000) 
; designated by IBM as "reserved". But that's ok, as long as you don't install 
; memory beyond this into the B000 segment where monochrome and graphics display 
; memory live! 
; 
; Questions or comments should be left for me (DAN OBRIEN) on Gene Plantz' 
; BBS in Chicago, IL (312-882-4227). I will attempt to fix bugs that may 
; crop up, but I make no guarantees. You use this at your own risk (just like 
; I do!). If you break something valuable, it's your own fault. 
; 
;------------------------------------------------------------------------------- 
 
 
lf      equ     0ah 
cr      equ     0dh 
; 
;initial values :       cs:ip   0000:0100 
;                       ss:sp   0000:ffff 
 
s0000   segment 
        assume ds:s0000, ss:s0000 ,cs:s0000 ,es:s0000 
        org     $+0000h 
; 
;       device driver header and logic added 1-1-84 by Tom Perry. 
; 
next_dev        dd      -1 
                dw      8000h          ;char device 
strategy        dw      dstrategy 
interrupt       dw      dinterrupt 
whatcall        db      'RAMCHECK'      ;name 
 
dstrategy       proc    far 
 
        mov     cs:rh_seg,es 
        mov     cs:rh_off,bx            ;save ptr to request header 
        ret 
 
dstrategy       endp 
 
rh_off  dw      0 
rh_seg  dw      0 
 
dinterrupt      proc    far 
 
        cld 
        push    ds 
        push    es 
        push    ax 
        push    bx 
        push    cx 
        push    dx 
        push    di 
        push    si 
 
        mov     al,switch 
        cmp     al,0ffh 
        je      continue 
        mov     al,0ffh 
        mov     switch,al 
 
        call    memdrvr 
 
        mov     bx,rh_off 
        mov     ax,rh_seg 
        mov     es,ax           ;pt to req hdr 
        mov     ds,ax 
        mov     ax,offset last_place 
;*risk  mov     ax,offset strategy ;USE THIS LINE TO SAVE RAM AT SOME RISK! 
        mov     14[bx],ax       ;set ending address 
        mov     ax,cs 
        mov     16[bx],ax       ; including segment 
continue: 
        mov     ax,0100h 
        or      3[bx],ax        ;set device status as DONE with NO ERROR 
 
        pop     si 
        pop     di 
        pop     dx 
        pop     cx 
        pop     bx 
        pop     ax 
        pop     es 
        pop     ds 
 
        ret 
 
switch  db      0,0,0           ;one time switch & bug protection 
last_place db   'LAST PLACE' 
 
dinterrupt      endp 
 
 
memdrvr proc    near 
 
;       end of device driver modifications by Tom Perry 
;       (except as noted below). 
 
start:  jmp     begin 
 
hello   db      "Device driver to use MORE RAM than switches (v 1.1) ",cr,lf 
        db      "by Daniel M. O'Brien and Tom Perry (1 Jan 1984)",cr,lf,lf,'$' 
inmem   db      " Current memory is $" 
kbytes  db      " K bytes. $" 
findmem db      cr,lf," Physical memory is $" 
analyze db      " Analyzing & Clearing...$" 
reboot  db      " Re-Booting...",cr,lf,'$' 
done    db      cr,lf," Memory size is set correctly.",cr,lf,'$' 
 
begin: 
        mov     dx,offset hello         ; say hello 
        mov     ah,9 
        int     21h 
 
        mov     dx,offset inmem         ; how much memory? 
        mov     ah,9 
        int     21h 
 
; next 3 lines of code added 1-1-84 by Tom Perry for device driver environment. 
 
        int     12h             ; ask bios how much memory 
        mov     cl,6 
        shl     ax,cl           ;shift left 6 times to look like PSP+2 
 
;       mov     ax,ds:2         ; get top segment number from program prefix 
 
        push    ds              ; save ds for later 
 
        push    ax              ; save top segment number for later 
        mov     cl,6            ; convert to K bytes 
        shr     ax,cl 
        call    decout          ; and display 
 
        mov     dx,offset kbytes        ; display "K bytes" 
        mov     ah,9 
        int     21h 
 
        mov     dx,offset analyze       ; display analyzing message 
        mov     ah,9 
        int     21h 
 
        xor     ax,ax           ; stop parity errors while we poke around 
        out     0a0h,al 
 
        pop     ax              ; recover top segment number 
 
loop:   mov     bx,0            ; look into this 16 byte "segment" 
;       cmp     ax,0a000h       ; is ax = beginning of "reserved" addrs? 
                                ; stop at display memory instead! 
        cmp     ax,0b000h       ; is ax = beginning of "reserved" addrs? 
        je      ramend          ; yes, so end of ram 
        mov     ds,ax           ; no, so use this as segment 
        mov     [bx],ax         ; write contents of ax to ds:bx... 
        mov     cx,[bx]         ;... and read it back to cx 
        cmp     ax,cx           ; does data read = data written? 
        jne     ramend          ; if it not, then ran out of ram! 
 
        mov     cx,8            ;    else - reset this 16 byte area 
        mov     es,ax 
        xor     ax,ax           ;      reset means 0000h 
        xor     di,di 
        rep     stosw           ;    to prevent parity errors when used 
 
        mov     ax,ds           ; copy ds to ax... 
        inc     ax              ;... increment it... 
        jmp     loop            ;... and loop 
 
ramend: 
        mov     bx,ax           ; found real end of ram - save it 
 
        mov     al,80h          ; enable parity errors for the future 
        out     0a0h,al 
 
        mov     ax,bx           ; convert segments to K bytes 
        mov     cl,6 
        shr     ax,cl 
 
        mov     bx,40h          ; point to bios data area 
        mov     ds,bx 
        mov     bx,13h          ; and to memory size word in particular 
 
        cmp     [bx],ax         ; same size? 
        je      exit            ; yes-then we must have done this before 
 
        mov     [bx],ax         ; else - update and 
        push    ax 
 
; remove comments to patch equipment flag to indicate 4 floppies attached. 
; especially useful for AST RESEARCH's SUPERDRV. 
 
;stub** mov     bx,10h          ; point to equipment flag 
;stub** mov     ax,[bx]         ; get equipment flag 
;stub** or      ax,00c0h        ; set installed floppy count to 4 
;stub** mov     [bx],ax         ; and restore to proper spot 
 
        pop     ax              ; get ds back but save ax on stack 
        pop     ds 
        push    ax 
 
        mov     dx,offset findmem       ; tell how much memory we found 
        mov     ah,9 
        int     21h 
 
        pop     ax              ; get K byte count 
        call    decout 
 
        mov     dx,offset kbytes 
        mov     ah,9 
        int     21h 
 
        mov     dx,offset reboot        ; tell them about reboot 
        mov     ah,9 
        int     21h 
 
        int     19h             ; re-boot 
 
exit: 
        pop     ds 
        mov     dx,offset done 
        mov     ah,9 
        int     21h 
 
; exit via return to caller instead of int 20h exit to DOS. 
; changed 1-1-84 by Tom Perry for device driver environment. 
 
        ret 
 
 
; quick and probably dirty - display decimal in ax routine 
 
decout: 
        push    ax 
        push    bx 
        push    cx 
        push    dx 
 
        xor     cx,cx           ;counter of digits 
        mov     bx,10           ;divide by 10 for conversion 
 
decimal$loop: 
        xor     dx,dx           ;clear for divide 
        div     bx              ;get remainder and quotient 
        add     dx,'00'         ;make remainder ascii 
        push    dx              ;save it 
        inc     cx              ;and count it 
        or      ax,ax           ;out of digits? 
        jnz     decimal$loop    ;no-loop on the decimal 
 
decimal$out: 
        pop     dx              ;get digit 
        mov     ah,2            ;print digit 
        int     21h 
        loop    decimal$out     ;and loop

        pop     dx
        pop     cx
        pop     bx
        pop     ax
        ret

memdrvr endp

s0000   ends

        end
```
{% endraw %}

## PI-COMP.DOC

{% raw %}
```






  PI-COMP_______PI-COMPPI-COMPPI-COMP_COMMAND_______COMMANDCOMMANDCOMMAND



  Function________FunctionFunctionFunction

               The PI-COMP command is a  replacement for the DOS COMP
               command which compares the  contents of files. PI-COMP
               differs from COMP in the following:

               o   COMP only select those file  names which match the
                   first command operand, while  PI-COMP selects file
                   names which match  the either the first  or second
                   operand. This eliminates the need  to run the COMP
                   command  a  second  time with  the  same  operands
                   reversed if you want to check for missing files.

               o   PI-COMP displays all information one line per file
                   name.  File  names are  displayed  in  alpabetical
                   order.

               o   PI-COMP always  compares files based on  file size
                   rather than  stopping at the  first EOF  mark (hex
                   1A).

               o   PI-COMP includes  hidden and  system files  in its
                   comparisons.

               o   PI-COMP not  only checks  for differences  in file
                   sizes and  data contents (as  COMP does)  but also
                   for differences in file  date, time and attributes
                   (such as the archive bit).

               o   PI-COMP stops comparing the  contents of two files
                   on the  first mismatch (rather  than the  tenth as
                   COMP does).


  BACKGROUND__________BACKGROUNDBACKGROUNDBACKGROUND

               The COMP  command is a  very handy utility  to compare
               files.   Unfortunately,  its  display   of  output  is
               extremely poor.  The PI-COMP  output is  very easy  to
               read and can  provide the user with  a usable overview
               of the status of the files being compared.


  Syntax______SyntaxSyntaxSyntax


  +-----------------------------------------------------------------+
  |                                                                 |
  |         PI-COMP [d:][path]file1 [d:][path]file2                 |
  |                                                                 |
  +-----------------------------------------------------------------+


                                                                    1









               The order  of the file  names is irrelevant.  The file
               name part of each operand must be explicitly specified
               (use *.*  to compare  all files.   Wild card  question
               marks or asterisks may be included in either operand.

               If you specify the PI-COMP  command with less than two
               operands, a message will be displayed showing the cor-
               rect command syntax.


  Sample______SampleSampleSample_Output______OutputOutputOutput



    Pi-COMP The IBM Personal File Compare Utility
    Version 1.0 (C)Copyright Markus Pelt 1984

    A:*.*                           B:*.*

    ADDRESS      07/18/83 02:38:28  ADDRESS      07/18/83 02:38:28
    ADDRESS.WKS  01/29/84 19:28:02  ADDRESS.WKS  11/03/83 21:31:12 Different size
    ATARI.WKS    12/19/83 17:39:42                                 Missing file
    AVIS         03/10/83 11:12:34  AVIS         03/10/83 11:12:34
    CHECKS.FIL   11/27/83 00:15:08                                 Missing file
    CHECKS.Y83   03/12/83 21:49:52  CHECKS.Y83   03/12/83 21:49:52
    CHECKSX.FIL  05/30/83 14:27:30                                 Missing file
    COLECO.WKS   12/19/83 17:49:22                                 Missing file
    COMMAND.COM  03/08/83 12:00:00  COMMAND.COM  05/07/82 12:00:00 Different size
    COMMODOR.WKS 12/19/83 17:44:04                                 Missing file
    DEPREC.Y82   04/03/83 20:45:18  DEPREC.Y82   04/03/83 20:45:18
    FEDTAX83.WKS 01/24/84 18:29:38                                 Missing file
    FTB3885.TAX  04/05/83 21:27:24  FTB3885.TAX  04/07/83 10:27:24 Different date
    FTB3885.Y82  04/07/83 00:00:00  FTB3885.Y82  04/07/83 00:00:00
    GROCERY.WK2  05/17/83 00:02:04  GROCERY.WK2  05/17/83 00:02:04 Different attr
    IBM3101.XMT  01/01/80 06:21:52  IBM3101.XMT  01/01/80 06:21:52
    IBMBIO.COM   03/08/83 12:00:00                                 Missing file
    IBMDOS.COM   03/08/83 12:00:00                                 Missing file
    IBMPRICE.WKS 11/14/83 03:34:46  IBMPRICE.WKS 11/14/83 03:34:46
    MORTGAGE     01/01/80 03:38:40  MORTGAGE     01/01/80 03:38:40
    PROCMAN.MP   06/16/83 00:11:24  PROCMAN.MP   06/16/83 00:11:24
    SCHEDG.Y82   03/12/83 01:13:46  SCHEDG.Y82   03/12/83 01:13:46
                                    TI.WKS       12/19/83 17:37:42 Missing file
    TODO3101     03/05/83 00:17:46  TODO3101     03/05/83 00:17:46
    TODOLIST     07/18/83 01:59:16  TODOLIST     07/18/83 01:59:16
    UCC7.MP      06/13/83 23:01:42  UCC7.MP      06/13/83 23:01:42
    VISTA.WKS    11/29/83 21:40:14                                 Missing file










                                                                    2



O APF FOUND FOR '*' TAG.
'TEMP' LINE 49: A:*.*                           B:*.*
NO APF FOUND FOR '*' TAG.
'TEMP' LINE 49: A:*.*                           B:*.*
READY 
*.*                           B:*.*
NO APF FOUND FOR '*' TAG.
'TEMP' LINE 49: A:*.*             
```
{% endraw %}

## ST.DOC

{% raw %}
```

ST -- the SuperTyper program -- an improved version of the DOS type command.

This program provides three significant enhancements to the type command:

 1) the display is paged, not scrolled, and thus is much easier to read.

 2) Previously displayed pages are saved and can be accessed by use of the 
    PgUp and PgDn keys.

 3) Wordstar's 'funny' characters are converted to normal display characters.
    (as all WordStar users know, 'type'ing a WordStar file creates a strange
     display)

Directions:
Type ST for directions and to be prompted for a filename to be listed.
Type ST <filename> to list a file.
PgUp and PgDn move through the display pages in the file.
The '+' toggles the display of page number in each page.  This display 
is convenient for keeping your place in big files -- especially files 
that are bigger than memory and only part of the file can be kept in memory.
This display is normally off, it is toggled on when "buffer wrap-around"
occurs.  If it bugs you, hit the '+' key and turn it off.

```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0111

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
