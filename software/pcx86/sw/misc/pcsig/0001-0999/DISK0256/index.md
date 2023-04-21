---
layout: page
title: "PC-SIG Diskette Library (Disk #256)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0256/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0256"
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

## CAPSDEF.ASM

{% raw %}
```
	page	55,132

abs0	segment at 0000h
abs0	ends

data	segment at 40h
	org	17h
kb_flag db	?		; keyboard flags area in low memory
caps_state	equ	40h	; caps state toggle bit
alt_shift	equ	08h	; alt shift key depressed
right_shift	equ	01h	; right shift key depressed
data	ends


cseg	segment para public 'code'
	assume cs:cseg,ds:cseg,es:cseg,ss:nothing

	org	100h

start	proc	far

	call	throw_away	; call init routine

start	endp

switch	       db      0       ; zero: don't clobber cpas_lock; not zero: do it
ptr_int9       equ     4*9h    ; ptr to int 9h

our_int9       label   dword   ; save area for cs:ip for new int 9h
	       dd      ?
kb_int	       label   dword   ; save area for cs:ip for system's int 9
	       dd      ?

int9   proc    far

	sti			; set interrupts back on
	pushf			; save flags
	call	cs:kb_int	; call real int 9 as if an interrupt

	push	ax		; sav some regs
	push	ds		; '
	mov	ax,data 	; load segment address
	mov	ds,ax		; into ds
	assume	ds:data

	test	kb_flag,alt_shift+right_shift ; are both alt and right shift on?
	jz	int9_010	; jump zero - don't change switch value
	jpo	int9_010	; jump parity odd - only one bit set - don't change switch value

	xor	cs:switch,01h	; toggle switch

int9_010:
	test	cs:switch,0ffh	   ; test switch  truth
	jz	int9_090	   ; jmp - zero - not on

	and	kb_flag,0ffh-caps_state ; turn off caps state

int9_090:
	pop	ds		;
	pop	ax		;
	iret

int9	endp
pgm_end   equ	  $		; end of resident code and begining of printer bufer area


instld_msg	db	0dh,0ah,'-caps_lock defeat v1.0 installed ',0dh,0ah
		db	'press alt + right shift to disable/enable caps lock',0dh,0ah,00


throw_away proc near
;
;
	push	si		; save si
	push	di		; save di
	push	ds		; save ds
	push	es		; save es

	push	cs		; establish addressabliltiy in this segment
	push	cs		;
	pop	ds		;
	pop	es		;
	assume cs:cseg,ds:cseg,es:cseg,ss:nothing

	mov	di,offset our_int9 ; ptr to uninitialized save area
	mov	ax,offset int9	; get ptr to our int9
	stosw			; init ip in save area
	mov	ax,cs		; get ptr to our cs
	stosw			; init cs in save area

	push	ds		; save ds
	mov	ax,abs0 	; get abs0
	mov	di,offset kb_int ; get ptr to orig kb_int save area
	mov	ds,ax		; make ds segment base 0:0
	assume	ds:abs0 	; establish addressability to segment 0:0
	mov	si,ptr_int9	; load ptr to actual int 9h entry

; move from ds:si to es:di
	movsw			; move first word  ip
	movsw			; move second word  cs:
	pop	ds		; recover ds
	assume	ds:cseg 	; and it's addressabiltiy

	mov	si,offset our_int9  ; load ptr to our int 9's ip:cs
	mov	di,ptr_int9	; load ptr to actual int 9h entry
	push	es		; save es
	mov	es,ax		; make es segment base at 0:0
	assume	es:abs0 	; establish addressability to segment 0:0
	cli			; turn off interrupts for a sec - until moves

; move from ds:si to es:di
	movsw			; move first word  ip
	movsw			; move second word  cs:
	sti			; enable interrupts
	pop	es		; recover es
	assume	es:cseg 	; and it's addressabiltiy

	mov	si,offset instld_msg  ; message
	xor	bx,bx		; set foreground and display page
throw_away_100:
	lodsb			; get byte to print
	or	al,al		; test for zero byte
	jz	throw_away_200	; exit on zero
	mov	ah,0eh		; teletype video routine
	int	10h		; bios call
	jmp   short throw_away_100  ; loop
throw_away_200:
	lea	dx,pgm_end	; last byte of resident program

	pop	es		; recover orig es
	pop	ds		; recover orig ds
	pop	di		; recover di
	pop	si		; recover si
	pop	ax		; throw away first call from stack

	int	27h		; exit don't delete
throw_away endp
cseg	ends

	end	start
```
{% endraw %}

## CLOCK.ASM

{% raw %}
```
Page ,132
Title	Replacement system clock driver for clock boards using MM 58167 AN clock chip.


comment $
  This is an installable device driver to access the battery driven
clock on I/O port.
  Use with AST or TECMAR clock boards.	Specify which one you want in the
'MACROS' section.  If the choice is not specified you will have assembly error
messages.

  To use, assemble this cource file using MASM.EXE (Macro Assembler from
Microsoft) then link it using DOS LINK.EXE and finally convert it to a .BIN
file using DOS EXE2BIN.EXE.  Rename the final file CLOCK.SYS.  Use EDLIN.COM
to create a file named CONFIG.SYS with the statement 'DEVICE = CLOCK.SYS'.
It will then be loaded automatically at start-up time.
  Using the command file generated by this assembly code as a simple command
will hang up the computer.
  When the object code generated by the Macro assembler from this source code
is linked, a warning "No STACK segment" and a message "1 error detected" should
be ignored.

  Variable names and labels start with a capital letter followed
by italic characters.
  Macro assembler operators are in italics.
  8086 microprocessor registers are in capital letters.

  The MM 58167 AN clock chip has 8 clock counters and 8 data registers for
setting the alarm comparator.  It does not provides any facilities for
keeping track of the year or wether it is a leap year.	Hence the maximum
number of days in February is 28 (storing a 29 in the day of the month counter
while the month counter is 2 will set the corresponding clock counters to
March 1st).  The maximum number of days in the other months are 30 or 31
depending on the month.
  To provide for these deficiencies, the year, a copy of the month and
a leap year flag are stored in the data registers.  Their use is explained
in the subsequent program.

  Dr The Hung Luv, DMD.  Montreal, Mar 84.
  Reviewed and modified by Pierre Caouette. <71426,1561>
  References:
- Installable device drivers. p. 14-1 to 14-34.  (In Disk Operating System.
Ver. 2, (Boca Raton), Microsoft, 1983.	XXII + discontinuous pagings.)
- Broadwell, K. David.	Real-time clocks and PC-DOS 2.0.  Byte magazine,
9(1):442-450, Jan. 1984.
- Product specification : MM58167 AN clock chip. National Semiconductor.
End of comment $


;-----------------------------------------------------------------------;
;  Macros								;
;-----------------------------------------------------------------------;

Status	macro	State,Err,Rc
	ifidn	<State>,<Done>
		or	ES:word ptr Srh_sta_fld[BX],0100H
	endif
	ifidn	<State>,<Busy>
		or	ES:word ptr Srh_sta_fld[BX],0200H
	endif
	ifidn	<Err>,<Error>
		or	ES:word ptr Srh_sta_fld[BX],1000H
	endif
	ifnb	<Rc>
		or	ES:word ptr Srh_sta_fld[BX],Rc
	endif
	endm


;****************************************************************************
;  Write '<Tecmar>' after the statement 'ifnb' if you want the device driver
;installed for a Tecmar board.	Otherwise just write '<>'.
	ifnb	<>
;****************************************************************************
;	The following are macros to be used with a Tecmar clock board
Valid_code_mcr	macro
Valid_code	equ	0ABH	;Validate chip code.  Can be set to any
				;	arbitrary value.
		endm
Clk_base_port	macro
Clock_base_port equ	37DH	;Base port = clock board I/O address. Start
				;with clock latch of Tecmar Board's. This port
				;must be writen with the address of the data
				;to be read or writen at "037F" location.

				;To obtain the data I/O port address (this is
				;the location to read or write the data
				;specified at "037D") add 2 to the clock base
				;port.
		endm
Clock_access	macro
Tecmar_access	proc	near
;  Procedure to read/write clock IC. AH=0 is read, any other value in AH is
;write.
;  Data passed and returned in AL, DX=index register (clock latch).
		push	AX
		mov	AL,DL
		mov	DX,Clock_base_port
		out	DX,AL
		add	DX,2
		pop	AX
		or	AH,AH		;Read or Write? (Same as 'cmp AH,0')
		jnz	IO_write
		in	AL,DX
		jmp	Terminate
IO_write:	out	DX,AL
Terminate:	ret
Tecmar_access	endp
		endm
Read	macro
		mov	AH,0
		call	Tecmar_access
	endm
Write	macro
		mov	AH,1
		call	Tecmar_access
	endm
else

;****************************************************************************
;  Write '<AST>' after the statement 'ifnb' if you want the device driver
;installed for an AST board.  Otherwise just write '<>'.  If another choice
;has already been made before, then this option is not valid.
	ifnb	<AST>
;****************************************************************************
;	The following are macros to be used with an AST Tecmar clock board
Valid_code_mcr	macro
Valid_code	equ	0DEH	;Validate chip code.  Can be set to any
				;	arbitrary value.  0DEH is used by
				;	the AST support programs Ver 4.0
		endm
Clk_base_port	macro
Clock_base_port equ	2C0H	;Base port = clock-calendar chip first I/O
				;	address on AST board.
		endm
Clock_access	macro
Ast_access	proc	near
;  Procedure to read/write clock IC. AH=0 is read, any other value in AH is
;write.
;  Data passed and returned in AL, DX=index register (clock latch).
		add	DX,Clock_base_port
		or	AH,AH		;Read or Write? (Same as 'cmp AH,0')
		jnz	IO_write
		in	AL,DX
		jmp	Terminate
IO_write:	out	DX,AL
Terminate:	ret
Ast_access	endp
		endm
Read	macro
		mov	AH,0
		call	Ast_access
	endm
Write	macro
		mov	AH,1
		call	Ast_access
	endm

	endif
endif


;-----------------------------------------------------------------------;
;  Equates								;
;-----------------------------------------------------------------------;
Srh		equ	0	;Static request header start
Srh_len 	equ	13	;   "      "      "    length
Srh_len_fld	equ	Srh	;   "      "      "       "   field
Srh_ucd_fld	equ	Srh+1	;Srh unit code field
Srh_ccd_fld	equ	Srh+2	;Srh command code field
Srh_sta_fld	equ	Srh+3	;Srh Status field
Srh_res_fld	equ	Srh+5	;Srh reserved area field

;	Input/Output
Buf		equ	14	;Offset into the requested block of
				;	data (buffer) transfer address
Buf_len 	equ	4	;Buffer length

;	Initialization
Br_addr_0	equ	14	;Character device usually only sets ending
Br_addr_1	equ	Br_addr_0+2	;address and returns
Br_addr_len	equ	4

;	Offsets from clock base port
Ram_mo_ofst	equ	9H	;  "    of month checker in RAM
Ram_leap_ofst	equ	8H	;This clock register only store the
				;	upper nibble (4 bytes)
Ram_yr_ofst	equ	0AH	;  "    of year in RAM
Cntr_reset_ofst equ	12H	;  "    of reset (RAM reset is one up at 13H)
Status_bit_ofst equ	14H	;  "    to status byte. Unreliable read = 80,
				;	Ok = 00
Valid_ofst	equ	0BH	;  "    of validation code in RAM
;	Miscellaneous
Valid_code_mcr			;Defined in section 'macros'.
Leap_code	equ	10H	;Because only upper nibble is stored, 10H is
				;	would be retained
No_clock_cntr	equ	8H	;Number of clock counters on chip
No_clock_RAM	equ	2H	;Number of clock RAM stored in Clock_cntr
				;	Used in procedure Set_clock to
				;	calculate end address of Clock_cntr
Clk_base_port			;Defined in section 'macros'.


;-----------------------------------------------------------------------;
;  Structures								;
;-----------------------------------------------------------------------;
cseg	segment para public 'Code'

Clock_cntr_type struc
Ten_thous	db	?	;Counter - 1/10,000 of seconds	  BCD
Hunds		db	?	;Counter - 1/100 and 1/10 seconds BCD
Secs		db	?	;Counter - seconds		  BCD
Mins		db	?	;Counter - minutes		  BCD
Hrs		db	?	;Counter - hours		  BCD
Wek_day 	db	?	;Counter - days of the week	  BCD
Day		db	?	;Counter - days of the month	  BCD
Mo		db	?	;Counter - month		  BCD
Leap_adj	db	?	;RAM - leap year adjust flag
Yr		db	?	;RAM - year stored in RAM. Its offset is
				;	not continous with the counters.
				;	Care should be taken when writing it
				;	in RAM to use the Ram_yr_ofst.
				;AST clock support programs store it in HEX
				;	so we use the same format
Clock_cntr_type ends


Clk	proc	far
	assume	CS:cseg,ES:cseg,DS:cseg
Begin:
;-----------------------------------------------------------------------;
;  Special device header						;
;-----------------------------------------------------------------------;
Next_dev	dd	-1	;Pointer to next device header field.
				;	If no other device then Next_dev = -1
Attribute	dw	8008H	;Attribute of clock device (specification
				;	of type of device)
Strategy	dw	Dev_strategy	;Pointer to device strategy
Interrupt	dw	Dev_int 	;Pointer to interrupt handler
Dev_name	db	'CLOCK$'        ;Device name
		db	2 dup(?)	;Filler for an extra 2 bytes because
					;	"device name" has 8 bytes
Rh_off		dw	?	;Request header offset
Rh_seg		dw	?	;Request header segment
User_buf	dd	?	;User transfer address

;	Function table
Funtab		label	byte
		dw	Init	;Initialization -Used first time device is
				;		 called
		dw	Media_check	;(Block only)		- Not used
		dw	Build_bpb	;     "                 - Not used
		dw	Ioctl_in	;Ioctl input		- Not used
		dw	Input		;Input(read) = get the time/date
		dw	Nd_input	;Non-destructive input (char only)
					;			- Not used
		dw	In_stat 	;Char only		- Not used
		dw	In_flush	;    "                  - Not used
		dw	Output		;Output(write) = set time/date
		dw	Out_verify	;Output w/ verify	- Not used
		dw	Out_stat	;Char only		- Not used
		dw	Out_flush	;    "                  - Not used
		dw	Ioctl_out	;Ioctl ouput		- Not used

;	Local data block in DOS 2.0 format
Clk_tbl 	label	byte
		dw	?	;Days since 1-1-80 = 2 bytes
		db	?	;Minutes = 1 byte
		db	?	;Hours = 1 byte
		db	?	;1/100ths of seconds = 1 byte
		db	?	;Seconds = 1 byte


;	Table of current clock values
Clock_cntr	Clock_cntr_type <>	;Allocates according to predefined
					;	structure. Look under
					;	"Structures"


;-----------------------------------------------------------------------;
;  Local procedures							;
;-----------------------------------------------------------------------;

In_save 	proc	near	;Save caller's buffer address
		mov	AX,ES:word ptr Buf[BX]
		mov	CS:User_buf,AX
		mov	AX,ES:word ptr Buf+2[BX]
		mov	CS:User_buf+2,AX
		ret
In_save 	endp

Dec_hex 	proc	near
;  Converts small packed BCD to HEX.
;  Variable passed and returned in AL.
;  Registers BX, CL used.
		push	AX
		mov	CL,4
		shr	AL,CL
		pop	BX
		mov	BH,10
		mul	BH
		and	BL,0FH
		add	AL,BL
		ret
Dec_hex 	endp

Hex_dec 	proc	near
;  Converts HEX numbers up to 63H (99 dec) to BCD
;  Variable passed and returned in AL.
;  Registers BX, CL used.
		sub	AH,AH
		mov	BL,10
		div	BL
		mov	CL,04
		shl	AL,CL
		xchg	AL,AH
		or	AL,AH		;BCD in AL
		ret
Hex_dec 	endp

Daysconv	proc	near
;  Convert the date mm-dd-yy to its number of days since 1-1-80.
;  yy is passed in Clock_cntr.Yr
;  mm is passed in Clock_cntr.Mo
;  dd is passed in Clock_cntr.Day
;  number of days returned in first 2 bytes of Clock_tbl
;  AX, BX, CX, DX are used.  It is the responsibility of the caller to save
;them if they would be needed later.
;  CX = daysleft.
		mov	AX,365
		xor	BH,BH
		mov	BL,Clock_cntr.Yr	;BL = yy
		mul	BX			;DX + AX = 365 * yy
		mov	CX,AX			;CX = 365 * yy, ignoring
						;	DX. I.e. any value over
						;	65536. Calculations
						;	only valid for
						;	Clock_cntr.Yr < 179
		mov	AX,BX			;AL = yy
		or	AL,AL			;Same as 'cmp AL,0'
		jnz	Yr_not_nul
		dec	CX			;If yy = 0 then CX = CX - 1
		jmp	Yr_nul
Yr_not_nul:	dec	AX			;AL = yy - 1
Yr_nul: 	mov	BL,4
		div	BL			;AL = yy - 1 DIV 4
		xor	AH,AH			;Clear remainder
		add	CX,AX			;CX = daysleft + (yy - 1) DIV 4
		xor	AH,AH
		mov	AL,30
		mov	BL,Clock_cntr.Mo
		mul	BL			;AX = 30 * mm
		add	CX,AX			;CX = CX + (30 * mm)
		mov	AL,57
		mul	BL			;AX = 57 * mm
		mov	BL,100
		div	BL			;AL = (57 * mm) DIV 100
		xor	AH,AH
		add	CX,AX			;CX = CX + (57 * mm) DIV 100
		sub	CX,29			;CX = CX - 29
		mov	AL,Clock_cntr.Day
		add	CX,AX			;CX = CX + dd
		cmp	Clock_cntr.Mo,2 	;If mm > 2
		jbe	Save_result
		mov	AL,Clock_cntr.Yr	;  then ...
		test	AL,3			;Same as 'mov BL,4'
						;	 'div BL'
						;	 'cmp AH,0'
		jnz	Not_leap_yr		;If yy MOD 4 = 0
		dec	CX			;  then CX = CX - 1
		jmp	Save_result
Not_leap_yr:	sub	CX,2			;  else CX = CX - 2
Save_result:	dec	CX			;CX = CX - 1 (Adjust for DOS)
		mov	word ptr [Clk_tbl[0]],CX ;Save result
		ret
Daysconv	endp

Dateconv	proc	near
;  Convert the number of days since 1-1-80 to MM-DD-YY.
;  number of days is passedr in first 2 bytes of Clock_tbl
;  yy is returned in Clock_cntr.Yr
;  mm is returned in Clock_cntr.Mo
;  dd is returned in Clock_cntr.Day
;  AX, BX, CX, DX are used.  It is the responsibility of the caller to save
;them if they would be needed later.
;  CX = daysleft.
		mov	CX,word ptr [Clk_tbl[0]] ;CX = days - 1 (as passed
						;	by DOS)
		mov	BX,CX			;BX = days - 1
		inc	CX			;CX = days
		mov	AX,50
		mul	BX			;DX + AX = (days - 1) * 50
		mov	BX,18265
		div	BX			;AX = [(days - 1) * 50] DIV 18263
		mov	Clock_cntr.Yr,AL	;Save yy
		push	AX
		mov	BX,365
		mul	BX			;AX = yy * 365
		sub	CX,AX			;CX = days - (yy * 365)
		pop	AX			;AX = yy
		push	AX
		or	AL,AL			;Is yy = 0 ?
		jnz	Yy_not_nul		;  If yy = 0 then yy - 1 = 256.
						;  Not really what we want
		inc	CX			;CX = CX + 1
		jmp	Yy_nul
Yy_not_nul:	dec	AL			;AL = yy - 1
		mov	BL,4
		div	BL			;AL = (yy - 1) DIV 4
		xor	AH,AH
		sub	CX,AX			;CX = CX - [(yy - 1) DIV 4]
Yy_nul: 	add	CX,29			;CX = CX + 29
		pop	AX			;AX = yy
		test	AL,3			;If yy in AL is a leap year
		jnz	Yr_not_leap		;  BX = add_to_feb
		mov	BX,1			;  then BX = 1
		jmp	If_past_feb
Yr_not_leap:	mov	BX,2			;  else BX = 2
If_past_feb:	mov	AX,91
		sub	AX,BX			;AX = 91 - add_to_feb
		cmp	AX,CX			;If daysleft > 91 - add_to_feb
		jge	Cal_month
		add	CX,BX			;  then CX = CX + add_to_feb
Cal_month:	mov	AL,33
		mul	CX			;AX = 33 * CX
		mov	BX,AX			;BX = 33 * CX
		mov	AX,CX			;AX = daysleft
		mov	DL,3
		div	DL			;AL = daysleft DIV 3
		xor	AH,AH
		add	AX,BX			;AX = (33 * CX) +
						;  (daysleft DIV 3)
		xor	DX,DX
		mov	BX,1019
		div	BX			;AX = [(33 * CX) +
						;  daysleft DIV 3)] DIV 1019
		mov	Clock_cntr.Mo,AL	;Save mm
		push	AX
		mov	BL,30
		mul	BL			;AX = 30 * mm
		sub	CX,AX			;CX = CX - (30 * mm)
		pop	AX			;AL = mm
		mov	BL,57
		mul	BL			;AX = mm * 57
		mov	BL,100
		div	BL			;AL = (mm * 57) DIV 100
		sub	CL,AL			;CL = CL - (mm * 57) DIV 100
						;Daysleft should be small
						;  enough to fit in one byte
						;  i.e. CL
		mov	Clock_cntr.Day,CL	;Save dd
		mov	AL,Clock_cntr.Mo
		cmp	AL,12			;If mm > 12
		jle	Finished
		mov	Clock_cntr.Mo,1 	;  then mm = 1
		inc	Clock_cntr.Yr		;	yy = yy + 1
Finished:	ret
Dateconv	endp

Clock_access			;Defined in section 'macros'

New_year	proc	near
;  Check for a "new year" and/or update month stored in RAM.
;  The MM 58167 AN clock chip does not have a counter for the years nor does
;it provide for a way to know that a month reset to 1 has occured (after 12,
;the clock month counter resets to 1).	This subroutine corrects this
;deficiency by checking if the month stored in the clock RAM the last time
;the clock was accessed has changed.  If it has and month in counter is greater
;than month in RAM then it just updates the month.  If month in counter is less
;than month in RAM it assumes that it is a new year and increment year in RAM
;by one.
;  The AST clock programs store the month in RAM under HEX format.  For
;compatibility this subroutine assume the same format.
		mov	DX,Ram_mo_ofst
		Read			;AL = month in RAM
						;*** add 'call Dec_hex' if BCD
		mov	AH,Clock_cntr.Mo	;AH = month in clock counter
		cmp	AH,AL
		jl	New		;1 < 12 so it's a new year
		jg	Update		;It's a new month
		ret			;Same old month - go back
New:		inc	Clock_cntr.Yr	;((last year - 1980) + 1)
		mov	AL,Clock_cntr.Yr
					;Add 'call Hex_dec' if using BCD format
		mov	DX,Ram_yr_ofst
		Write
Update: 	mov	AL,Clock_cntr.Mo;Update Month_ck on RAM
					;Add 'call Hex_dec' if using BCD format
		mov	DX,Ram_mo_ofst
		Write
		ret
New_year	endp

Leap_adjust	proc	near
;  If Leap_adj is set then it is a leap year.  In a leap year 3-1-yy = 2-29-yy
;because the clock chip does not count over 28 for Feb.  If the clock counter
;date is 3-1-yy, set the corresponding clock counter arrays to 2-29-yy.  If
;the date is over 3-1-yy then decrement the number of days by 1.  If the number
;of days is over 0 then convert days into BCD, clear Leap_adj and save
;these	changes to clock.
;  This procedure assumes you will access your clock at least once in the next
;10 months after Feb, of a leap year.  If this is not the case then the day
;of the month, before Mar, of the following year will be late one day.
;  When the clock is accessed after Feb during a leap year then the day
;is decremented by 1.  If the resulting day is 0, the procedure Daysconv will
;still convert it correctly to the number of days but not saved on the clock
;chip.	If it is not 0 then the result is saved to the clock and the Leap_adj
;flag cleared.
;  The procedure is:
;  if Leap_adj = 10 then
;    if mm > 2 then
;      if (mm = 3 and dd = 1) then
;	 mm = 2
;	 dd = 29
;      else
;	 days = days - 1
;	 if days <> 0 then
;	   Leap_adj = 0
;	   Save days and Leap_adjust
;  endif

		cmp	Clock_cntr.Leap_adj,Leap_code
		jne	Leap_exit
		cmp	Clock_cntr.Mo,2
		jle	Leap_exit
		cmp	Clock_cntr.Mo,3
		jne	Back_up_1_day
		cmp	Clock_cntr.Day,1
		jne	Back_up_1_day
		mov	Clock_cntr.Mo,2
		mov	Clock_cntr.Day,29
		jmp	Leap_exit
Back_up_1_day:	dec	Clock_cntr.Day
		cmp	Clock_cntr.Day,0
		je	Leap_exit
		xor	AL,AL
		mov	DX,Ram_leap_ofst
		Write
		mov	AL,Clock_cntr.Day
		call	Hex_dec
		mov	DX,6H
		Write
Leap_exit:	ret
Leap_adjust	endp

Adjust_leap	proc	near
;  Reset Leap_adj to 0
;  If it is a leap year and the month < 3 then set the Leap_adj flag to 1
;  If it is the Feb 29th then set it to Mar 1st
		mov	Clock_cntr.Leap_adj,0
		cmp	Clock_cntr.Mo,2
		jg	Adjust_exit
		xor	AH,AH
		mov	AL,Clock_cntr.Yr
		mov	BL,4
		div	BL
		cmp	AH,0
		jne	Adjust_exit
		mov	Clock_cntr.Leap_adj,Leap_code
		cmp	Clock_cntr.Mo,2
		jne	Adjust_exit
		cmp	Clock_cntr.Day,29
		jne	Adjust_exit
		inc	Clock_cntr.Mo
		mov	Clock_cntr.Day,1
Adjust_exit:	ret
Adjust_leap	endp

Time_DOS	proc	near
;  Pass hours, minutes, seconds and 1/100ths secs to DOS Clk_tbl
		lea	DI,Clk_tbl[2]
		xor	AH,AH
		mov	AL,Clock_cntr.Mins
		stosb
		mov	AL,Clock_cntr.Hrs
		stosb
		mov	AL,Clock_cntr.Hunds
		stosb
		mov	AL,Clock_cntr.Secs
		stosb
		ret
Time_DOS	endp

Time_clock	proc	near
;  Load time from DOS Clk_tbl into Clock_cntr table
		lea	SI,Clk_tbl[2]
		xor	AH,AH
		lodsb
		mov	Clock_cntr.Mins,AL
		lodsb
		mov	Clock_cntr.Hrs,AL
		lodsb
		mov	Clock_cntr.Hunds,AL
		lodsb
		mov	Clock_cntr.Secs,AL
		ret
Time_clock	endp

Read_clock	proc	near
;  Set up registers to read clock chip and store it in Clock_cntr table.
;  Start reading from top of base address of chip (1/100,000 of seconds).
		push	CS
		pop	ES
		mov	DX,Status_bit_ofst	;Read status bit 1rst time
		Read				;  to clear it
Retry:		lea	DI,Clock_cntr
		cld
		mov	CX,No_clock_cntr
Loadit: 	mov	DX,No_clock_cntr
		sub	DX,CX
		Read
		push	CX
		call	Dec_hex 	;Convert from BCD to Hex
		stosb
		pop	CX		;Restore counter
		loop	Loadit
;  Check for counter rollover during read (Status byte = 80H)
		mov	DX,Status_bit_ofst
		Read
		test	AL,AL
		jnz	Retry
;  Store Leap_adj in RAM into Clock_cntr table
		mov	DX,Ram_leap_ofst
		Read
					;Add 'call Dec_hex' if using BCD format
		stosb
;  Store year in RAM into Clock_cntr table
		mov	DX,Ram_yr_ofst
		Read
					;Add 'call Dec_hex' if using BCD format
		stosb
;  Routines to prepare data for transfer to DOS
		call	New_year	;Check to see if it's a new year
		call	Leap_adjust
		call	Daysconv		;Number of days since 1/1/80
		call	Time_DOS		;Current time in Hex
		lea	SI,Clk_tbl
		mov	ES,CS:User_buf+2	;Set destination (ES:DI) to
		mov	DI,CS:User_buf		;caller's buffer
		push	CS
		pop	DS		;Establish source
		mov	CX,6		;6 bytes
	rep	movsb			;Send information to buffer for "read"
		ret
Read_clock	endp


Set_clock	proc near
;  Gets data from DOS, transform it into the corresponding date & sets chip.
		mov	DS,CS:User_buf+2	;Set source to caller's (DOS)
		mov	SI,CS:User_buf		;	buffer blk address
		lea	DI,Clk_tbl
		push	CS
		pop	ES
		mov	CX,6			;Set up to move data from
		cld				;	User_buf to Clk_tbl
	rep	movsb			;Do it
;  Calculate and load local clock chip table (structure)
		push	CS
		pop	DS		;Establish DS as this segment
		call	Time_clock	;Load time
		call	Dateconv	;Days to YY-MM-DD
		call	Adjust_leap
;  Writes data to chip starting from bottom of Clock_cntr table, i.e. from
;year,then leap_adj, then etc.
		lea	SI,Clock_cntr+No_clock_cntr+No_clock_RAM-1H
		std
		lodsb			;Same as 'mov AL,Clock_cntr.Yr'
					;Add 'call Hex_dec' if using BCD format
		mov	DX,Ram_yr_ofst
		Write			;Store Clock_cntr.Yr into RAM
		lodsb
					;Add 'call Hex_dec' if using BCD format
		mov	DX,Ram_leap_ofst
		Write			;Store Clock_cntr.Leap_adj into RAM
		lodsb
		mov	DX,Ram_mo_ofst
		Write			;Store Clock_cntr.Mo into RAM
		mov	CX,No_clock_cntr;Prepare registers to set counters
		xor	AH,AH
Write_cntr:	push	CX		;Next routine takes care of counters
		mov	DX,-1H
		add	DX,CX
		call	Hex_dec 	;Change to BCD
		Write			;"Write" to chip
		pop	CX
		lodsb			;Move next data to AL
		loop	Write_cntr	;Loop until done
		ret
Set_clock	endp


;-----------------------------------------------------------------------;
;  Device strategy							;
;-----------------------------------------------------------------------;
Dev_strategy:
		mov	CS:Rh_seg,ES	;Save segment of request header ptr
		mov	CS:Rh_off,BX	;Save offset of same
		ret


;-----------------------------------------------------------------------;
;  Device interrupt handler						;
;-----------------------------------------------------------------------;
Dev_int:	cld
;	Preserve machine stateM
		push	DS
		push	ES
		push	AX
		push	BX
		push	CX
		push	DX
		push	DI
		push	SI
;	Branch according to the function passed
		mov	BX,CS:Rh_off	;Get request block address from where
		mov	ES,CS:Rh_seg	;	device strategy put it
		mov	AL,ES:[BX]+2	;Get function byte
		rol	AL,1		;Get offset into table
		lea	DI,Funtab	;Get address of function table
		xor	AH,AH
		add	DI,AX
		jmp	word ptr[DI]
;	The following entries are not supported by this device
Ioctl_in:
Ioctl_out:
Nd_input:
In_stat:
In_flush:
Out_stat:
Out_flush:
Media_check:
Build_bpb:
Out_verify:
;	Set status byte as "error, incomprehensible command"
		Status	Done,Error,03
		jmp	Exit
;	Input = read clock chip
Input:		call	In_save 	;Call initial save routine
		call	Read_clock	;Read in that date/time
		mov	BX,CS:Rh_off	;Restore ES:BX as request hdr ptr
		mov	ES,CS:Rh_seg
		Status	Done,NoError,0
		jmp	Exit
;	Output = set time & date
Output: 	call	In_save 	;Call initial save routine
		call	Set_clock	;Set time & date
		mov	BX,CS:Rh_off	;Restore ES:BX as request hdr ptr
		mov	ES,CS:Rh_seg
		Status	Done,NoError,0
		jmp	Exit
;	Everybody's exit
Exit:		pop	SI
		pop	DI
		pop	DX
		pop	CX
		pop	BX
		pop	AX
		pop	ES
		pop	DS
		ret
;	Intialize
Init:		push	CS
		pop	AX			;Copy current CS to AX
		add	AX,offset Init
		mov	ES:word ptr Br_addr_0[BX],0
		mov	ES:Br_addr_1[BX],AX	;Make that the break address
;	Check verify Byte - Has some other software diddled the clock
		mov	DX,Valid_ofst		;Port for verify RAM
		Read
		cmp	AL,Valid_code		;Arbitrary validation code
		jz	Fine			;Jump on Ok
;	Reset chip, can't trust it
		mov	AL,0FFH 		;Reset all registers
		mov	DX,Cntr_reset_ofst
		Write				;Reset all counters
		inc	DX			;RAM (latch) reset address
		Write				;Now reset RAM
		mov	AL,Valid_code
		mov	DX,Valid_ofst
		Write				;Now validate RAM
;	Everything is correct
Fine:		Status	Done,NoError,0
		jmp	Exit
Clk	endp
cseg	ends
	end	Begin
```
{% endraw %}

## CRC.TXT

{% raw %}
```
PC-SIG Disk No. #256, version V1 
 
The following is a list of the file checksums which should be produced by
the CRCK4 program on this disk.  If the CRC numbers do not match the following
list you may have a bad file.  To use type:  CRCK4 <filespec>
 
CRCK4 output for this disk:
 

CRCK ver 4.2B (MS DOS VERSION )
CTL-S pauses, CTL-C aborts

--> FILE:  SAVE    .COM         CRC = 7A 00

--> FILE:  DISPRE  .COM         CRC = 22 F7

--> FILE:  DISPRE  .EXE         CRC = 6F 50

--> FILE:  DISPRE  .ASM         CRC = E2 DF

--> FILE:  DISPRE  .DOC         CRC = 82 14

--> FILE:  MONOCLOK.COM         CRC = A0 E8

--> FILE:  LABEL   .EXE         CRC = CF BD

--> FILE:  LABEL   .ASM         CRC = 27 EE

--> FILE:  FREE    .COM         CRC = 40 4B

--> FILE:  FREE    .ASM         CRC = 87 01

--> FILE:  FREE    .DOC         CRC = 4B 6E

--> FILE:  WHEREIS .COM         CRC = D8 22

--> FILE:  WHEREIS .ASM         CRC = 6F 41

--> FILE:  DEFRAG  .BAS         CRC = 49 43

--> FILE:  DEFRAG  .DOC         CRC = 7C 34

--> FILE:  NUSQ    .COM         CRC = A2 2B

--> FILE:  NUSQ    .DOC         CRC = F7 3E

--> FILE:  DUMP    .EXE         CRC = B6 CA

--> FILE:  DUMP    .ASM         CRC = FB 29

--> FILE:  PARCHK  .COM         CRC = AE 37

--> FILE:  PARCHK  .ASM         CRC = 71 0A

--> FILE:  PARCHK  .DOC         CRC = 68 DE

--> FILE:  REFCD   .DOC         CRC = 19 0D

--> FILE:  TABS    .EXE         CRC = 57 69

--> FILE:  TABS    .DOC         CRC = 03 99

--> FILE:  LOOK    .COM         CRC = 10 FC

--> FILE:  LOOK    .ASM         CRC = 90 6F

--> FILE:  LOOK    .DOC         CRC = 73 BA

--> FILE:  ZAPDEB  .BAS         CRC = 4E 2F

--> FILE:  ZAPDEB  .DOC         CRC = 10 A2

--> FILE:  ZAPTRE  .BAS         CRC = 0F D1

--> FILE:  ZAPTRE  .DOC         CRC = 44 72

--> FILE:  QS      .RIO         CRC = 41 08

--> FILE:  QS      .TXT         CRC = FE FA

--> FILE:  CLOCK   .SYS         CRC = EF B7

--> FILE:  CLOCK   .ASM         CRC = AC 6D

--> FILE:  CAPSDEF .COM         CRC = B8 0E

--> FILE:  CAPSDEF .DOC         CRC = 0B 9E

--> FILE:  CAPSDEF .ASM         CRC = 5A FE

--> FILE:  BIGCAL  .BAS         CRC = 0B 2E

--> FILE:  BIGCAL  .DOC         CRC = 3D 28

--> FILE:  EXPAND  .BAS         CRC = 7C 09

--> FILE:  EXPAND  .DOC         CRC = 15 65

--> FILE:  DIRECT  .BAS         CRC = BB 9B

--> FILE:  DIRDEM  .BAS         CRC = 76 86

--> FILE:  WHEREIS .BAS         CRC = D6 FD

--> FILE:  DSKTYP  .EXE         CRC = 34 2B

--> FILE:  DSKTYP  .ASM         CRC = 1F 45

--> FILE:  FORMAT  .VOL         CRC = A6 1B

--> FILE:  COLOR   .PE          CRC = F9 38

--> FILE:  PE-NOTAB.DOC         CRC = 98 D4

--> FILE:  DCBA2   .HOW         CRC = 8C 85

--> FILE:  TABS    .ASM         CRC = B1 99

 ---------------------> SUM OF CRCS = E0 8B

DONE 
 
These and other Public Domain and user-supported programs from:
 
PC Software Interest Group (PC-SIG)
1125 Stewart Ct  Suite G
Sunnyvale, CA 94086
(408) 730-9291
```
{% endraw %}

## DEFRAG.BAS

{% raw %}
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
{% endraw %}

## DEFRAG.DOC

{% raw %}
```
                         === D E F R A G ===



SYSTEM REQUIREMENTS

DEFRAG requires BASICA and PC-DOS 2.0.  It may work on other IBM-PC lookalikes,
but other hardware/software combinations have not been tested.

OVERVIEW

DEFRAG was written to facilitate de-fragmenting PC-DOS diskettes.  If you are
continuously modifying the files on a diskette it does not take long for the
files on the diskette to become `fragmented', i. e., the files will consist of
several groups of non-contiguous tracks and/or sectors.  This `fragmentation'
of allocated space causes two problems: (1) Existing files take much longer to
load because of excessive disk drive head movement across multiple tracks, and
(2) New files get allocated in non-contiguous blocks because of `fragmented'
free space on the diskette.  Thus, the fragmentation problem tends to become
self propogating.

The DOS Manual recommends using COPY *.* to copy all the files on a fragmented
diskette to a new one.  Doing this will `collect' all the non-contiguous parts
of each file into one single block on the target (new) diskette.  However,
COPY *.* copies the files in the order they appear in the source diskette
directory -- and this may not be the order you want them in.  For instance,
it is best to have frequently used files first on the diskette so they can be
close to the diskette directory.  This way disk arm movement is minimized when
these frequently used files are accessed.

DEFRAG overcomes this problem by providing the following capabilities:
        1. Full screen display of all files in the directory sorted
           alphabetically.
        2. The ability to select, via the cursor control keys, any
           or all of the files on the diskette in any order.
        3. Automatic invocation of the DOS COPY utility to copy the
           files in the order selected.
In addition, DEFRAG allows:
        4. The ability to delete selected files.
        5. The ability to invoke any DOS command without leaving
           the program.

METHOD OF OPERATION

DEFRAG uses the SHELL command to read directories, sort their contents, copy
files, and invoke DOS commands.  It uses Function Key interrupt processing
to read the various Function Keys and Cursor Control Keys.  These are all
BASICA/DOS 2.0 capabilities.

When DEFRAG starts it requests input of three disk drive identifiers:
        Work (RAM) drive: this is where DEFRAG will place the sorted
                          directory contents.  If you have RAM drive
                          DEFRAG will copy COMMAND.COM and SORT.EXE
                          there; this greatly speeds up execution.
        Source drive: this is the drive containing the diskette that
                      DEFRAG is to copy from.  Nothing is written by
                      DEFRAG to this diskette.  Files selected for


Peninsula Software - 28510 Blythewood Drive - Rancho Palos Verdes CA - 90274



                         === D E F R A G ===


                      deletion are deleted from the source disk, not
                      the target disk.  Deletion normally takes place
                      after copying.
        Target drive: this is the drive containing the diskette DEFRAG
                      is to copy to; i. e., files will be copied from
                      the source disk to the target disk.

The Function Keys are used as follows:

F1: select a file for copy or delete
F2: restart DEFRAG allowing new source/target disk specifications
F3: copy all selected files from source disk to target disk
F7: delete all selected files from source disk
F9: allow input of any DOS command, then perform it
F10: end DEFRAG and return to BASIC (not DOS)
Arrow (cursor control) keys: move cursor around display of files to allow
                             individual files to be selected by F1

RESTRICTIONS/LIMITATIONS

1. DEFRAG does not handle sub-directories.
2. DEFRAG assumes SORT.EXE and COMMAND.COM are on Drive a:
3. If you respond other than a: to the location of the work (RAM) drive,
   DEFRAG copies SORT.EXE and COMMAND.COM there and then patches DOS to
   use those files instead of the ones on drive a:.  This occurs only if
   the work (RAM) drive is specified as being different from drive a:.
   Note that DEFRAG will reset DOS to use COMMAND.COM on drive a: when
   it ends, and it will delete all files it created from the work (RAM)
   drive.  DEFRAG must be allowed to end normally, i. e., by F10, if this
   `cleanup' is to occur.
4. F9 allows you to invoke any DOS command.  This can be dangerous.  You
   cannot execute BASIC however, since only one copy of BASIC (actually
   BASICA) can be functioning at one time.  Remember that any DOS command
   you invoke will end up returning to DEFRAG, not to DOS, so don't do
   things like deleting DEFRAG's work or PIPE files.
5. DEFRAG resets all 10 function keys when it ends.  These specifications
   can be easily changed if you prefer different assignments.

COMMENTS/SUGGESTIONS

Please direct comments and/or suggestions to the author via the U. S. Mail
or to the Compuserve user ID #72356,556.














Peninsula Software - 28510 Blythewood Drive - Rancho Palos Verdes CA - 90274

```
{% endraw %}

## DIRDEM.BAS

{% raw %}
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
{% endraw %}

## DIRECT.BAS

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

## DISPRE.ASM

{% raw %}
```
	page	,132
	title	dispregs - display registers as set by loader
	name	dispregs
;****************************************************************
;* module name = dispregs
;*
;* copyright(C) 1984	Skip Gilbrech
;*			90 Lexington Ave. #10-G
;*			New York, NY 10016
;*			212-685-0551
;*
;* author = skip gilbrech
;* date written = 01/13/84
;*
;* environment:
;*  system = ibm pc (dos 2.0 - should work on any version)
;*  processor = microsoft 8086 macro assembler
;*
;* This program may be freely copied/altered for any non-commercial
;* purpose but may not be sold or used in any way as part of any
;* profit-making venture without permission of the author.
;* (i.e., in the unlikely event that any money is made off this,
;* I want some of it...)
;*
;* This little program was inspired by some of the recent discussion
;* on the SIG concerning starting conditions (i.e. register & flag
;* settings) encountered by files loaded under DEBUG versus those
;* encountered by files loaded by COMMAND.COM.	It was noted that
;* certain programs worked under one but not under the other, and I
;* realized that I had always assumed things were the same either way...
;*
;* It seems, however, that although the differences aren't great, they
;* do exist.  It is, of course, foolish to rely on register and flag
;* settings made by someone else, but that doesn't mean it isn't done.
;*
;* The only assumptions made about register settings in this program
;* are that:
;*
;*   -- CS:IP points to the beginning of the code (hard to avoid
;*	that assumption...)
;*   -- DS:0 contains an INT 21H instruction (will run fine without
;*	it, but will have trouble exiting...)
;*
;* By the way, this can be made into a .COM or .EXE file by changing
;* the equate below.  It was necessary to make two versions as the
;* two types of files are loaded differently.  To make a .COM file,
;* use EXE2BIN after you get the obnoxious 'no stack segment' warning
;* from LINK.  Of course, the .EXE register settings for CS,IP,SS and
;* SP are peculiar to this file, as they are defined by the linker and
;* passed to dos in the .EXE header.
;*
;****************************************************************
	page
;****************************************************************
;*
;*	constants
;*
;****************************************************************

false		equ	0
true		equ	not false

make_com	equ	true		; if true, make .COM file

if not make_com 			; else make .EXE file
make_exe	equ	true
else
make_exe	equ	false
endif

lf	equ	10			; line feed
cr	equ	13			; carriage return

dosint		equ	21h		; int. number for dos functions
print_string	equ	9		; dos print string function

;****************************************************************
;*
;*	macro
;*
;****************************************************************

msg_mac macro	TEXT,FORMAT_ROUTINE
	mov	dx,offset TEXT
	mov	ah,print_string
	int	dosint
	pop	ax
	call	FORMAT_ROUTINE
	endm

;****************************************************************
;*
;*	stack segment if making .exe file
;*
;****************************************************************

if make_exe
stack	segment stack
dw	128 dup (?)
stack	ends
endif

	page
;****************************************************************
;*
;*	code (and data) segment
;*
;****************************************************************

code	segment
	assume	cs:code,ds:nothing,es:nothing,ss:nothing

if make_com
	org	100h		; for com file
endif

reg_disp proc far		; set up for far return to dos

	jmp	mainline	; jump to program code

; strings for formatting the register display:

msg_cs		db	cr,lf,'CS ==>$'
msg_ds		db	'  DS ==>$'
msg_es		db	'  ES ==>$'
msg_ss		db	'  SS ==>$'
msg_ax		db	cr,lf,'AX ==>$'
msg_bx		db	'  BX ==>$'
msg_cx		db	'  CX ==>$'
msg_dx		db	'  DX ==>$'
msg_si		db	cr,lf,'SI ==>$'
msg_di		db	'  DI ==>$'
msg_bp		db	'  BP ==>$'
msg_sp		db	'  SP ==>$'
msg_ip		db	cr,lf,'IP ==>$'

; buffers for outputting digits and printing flag settings:

digit_buf	db	'      $'
msg_flags	db	cr,lf,'FLAGS ==>  - - - - O D I T S Z - A - P - C'
		db	cr,lf,'           $'
flagbuf 	db	'                               ',cr,lf,'$'

save_ds 	dw	?
save_es 	dw	?
save_ss 	dw	?
save_sp 	dw	?
save_ax 	dw	?
save_fl 	dw	?

	page
;****************************************************************
;*
;*	reg_disp mainline
;*
;****************************************************************

mainline	label near

	mov	cs:save_ds,ds		; save DS & ES
	mov	cs:save_es,es		;
	mov	cs:save_ss,ss		; save SS:SP so we can get
	mov	cs:save_sp,sp		;  value of flags
	mov	cs:save_ax,ax		; save AX before using

; early 8088's might bomb here if interrupts aren't disabled, but I can't
; think of any way to save the initial flag settings without using the
; stack, and I'm not assuming the stack is valid, so....

	mov	ax,cs			; set SS to CS
	mov	ss,ax			;
	mov	sp,offset short_stack	; we can now use the stack

	pushf				; save flags before we change them
	pop	cs:save_fl		;

; set up for far return to dos:

	push	ds			; ptr to psp (either .com or .exe)
	sub	ax,ax			; offset 0
	push	ax			; push it

	mov	ax,cs			; set DS & ES to CS for addressing data
	mov	ds,ax			;
	mov	es,ax			;

	assume ds:code,es:code		; tell MASM

; save all original register values on the stack

	push	save_fl 		;
	mov	ax,offset reg_disp	; starting value of IP -- if this was
	push	ax			; wrong, we'll never get here
	push	save_sp 		;
	push	bp			; (not changed)
	push	di			; (not changed)
	push	si			; (not changed)
	push	dx			; (not changed)
	push	cx			; (not changed)
	push	bx			; (not changed)
	push	save_ax 		;
	push	save_ss 		;
	push	save_es 		;
	push	save_ds 		;
	push	cs			; (not changed)

; now display everything

	msg_mac 	msg_cs, hexdig_out
	msg_mac 	msg_ds, hexdig_out
	msg_mac 	msg_es, hexdig_out
	msg_mac 	msg_ss, hexdig_out
	msg_mac 	msg_ax, hexdig_out
	msg_mac 	msg_bx, hexdig_out
	msg_mac 	msg_cx, hexdig_out
	msg_mac 	msg_dx, hexdig_out
	msg_mac 	msg_si, hexdig_out
	msg_mac 	msg_di, hexdig_out
	msg_mac 	msg_bp, hexdig_out
	msg_mac 	msg_sp, hexdig_out
	msg_mac 	msg_ip, hexdig_out
	msg_mac 	msg_flags, prt_flags

	ret		; far return to offset 0 in psp

reg_disp	endp

	page
;****************************************************************
;*
;*	hexdig_out	output value in AX in hex to console
;*
;****************************************************************

hexdig_out	proc	near

	push	ax
	push	dx
	push	di

	mov	di,offset digit_buf	; string buffer address
	push	di			; save for later
	add	di,5			; point to last digit
	std				; set for auto decrement
	push	ax			; save value in AH
	call	hexdig_out0		; store two least significant digits
	pop	ax			; restore value in AH
	mov	al,ah			; get two most sig. digits
	call	hexdig_out0		; store them
	pop	dx			; pt DX to beginning of string
	mov	ah,print_string 	; dos function number
	int	dosint			;

	pop	di
	pop	dx
	pop	ax
	ret

hexdig_out0:
	push	ax			; save al for other half of digit
	and	al,0fh			; strip off high digit
	call	hexdig_out1		; store lower digit
	pop	ax			; get al back for high digit
	shr	al,1			; shift into lower digit
	shr	al,1			;
	shr	al,1			;
	shr	al,1			;
					; then store lower digit
hexdig_out1:
	or	al,30h			; convert 0-9 to ASCII
	cmp	al,3ah			;
	jb	hexdig_out2		;
	add	al,7			; convert 10-15 to A-F

hexdig_out2:
	stosb				; store digit in buffer & pt to next
	ret				; most significant digit

hexdig_out	endp

	page
;****************************************************************
;*
;*	prt_flags	print flag settings (in AX) as 1 or 0
;*
;****************************************************************

prt_flags	proc near

	push	ax
	push	cx
	push	dx
	push	di
	mov	dx,ax			; save flag settings in DX
	mov	cx,16			; repeat for each bit
	mov	di,offset flagbuf	; set DI to buffer for flags
	push	di			; save for dos call
	cld				; auto-increment
pf_loop:
	rol	dx,1			; get flag bit in bit 0
	mov	al,dl			; move bit to AL
	and	al,1			; isolate it
	add	al,'0'                  ; make ascii
	stosb				; store char. in buf, bump ptr
	inc	di			; bump again past space
	loop	pf_loop 		; repeat while bits remain

	pop	dx			; restore address of buffer
	mov	ah,print_string 	;
	int	dosint			;

	pop	di
	pop	dx
	pop	cx
	pop	ax
	ret

prt_flags	endp

	even		; put stack on word boundary

short_stack	equ	$ + 100h

code	ends

end	reg_disp
```
{% endraw %}

## DISPRE.DOC

{% raw %}
```
DISPRE.ASM     16-Feb-84 8620         Accesses: 42

    Keywords: ASSEMBLER MASM REGISTERS DEBUG LOADER

    A short assembler program to display 8088 registers as they are set by the
    loader (dos, debug, or whoever) on program entry.  Inspired by reading some
    of the comments in recent SIG assembler seminars.

```
{% endraw %}

## DSKTYP.ASM

{% raw %}
```
         name      disktype
         page      55,132
         title     'DISKTYPE --- display diskette type'
;
; DISKTYPE utility to display the
; format type of selected diskette
;
; Ray Duncan,  Uncopyright (u) September 1983
; This program may be freely copied,
; mangled, enhanced, and redistributed.
;
input    equ       080h      ;command line tail buffer
cr       equ       0dh       ;ASCII carriage return
lf       equ       0ah       ;ASCII line feed
;
cseg     segment   para public 'CODE'
         assume    cs:cseg,ds:cseg,ss:stack
;
; This program becomes an EXE file.  On entry
; from PC-DOS, CS = address of entry point, IP = 0,
; SS = segment address of stack segment, DS and
; ES = segment address of Program Segment Prefix area.
;
disktype proc      far       ;entry point from PC-DOS
                             ;
         push      ds        ;put final return address
         xor       ax,ax     ;on stack (DS:0000)
         push      ax        ;for "Far Return" later.
                             ;DS=segment of program
                             ;prefix with command tail,
                             ;set SI=offset of command
                             ;tail's length byte,
         mov       si,offset input
         cld                 ;clear the Direction Flag
                             ;for "LODS" string instruction.
         lodsb               ;check length byte to see if
         or        al,al     ;there's any command tail.
         jz        disk2     ;no, use default drive.
                             ;
disk1:   lodsb               ;check the next byte of
                             ;the command tail,
         cmp       al,cr     ;if carriage return,
         je        disk2     ;use "default" disk drive.
         cmp       al,' '    ;if blank, keep scanning
         je        disk1     ;for another character.
         or        al,20h    ;fold the character to
                             ;lower case.
         cmp       al,'a'    ;make sure it's in range A-D
         jb        disk8     ;no, print error message
         cmp       al,'d'
         ja        disk8     ;no, print error message
         sub       al,'a'    ;make drive code 0-3
         jmp       short disk3
                             ;
disk2:                       ;if operator didn't specify
                             ;disk drive, get the "default
                             ;disk" from PC-DOS, returns
         mov       ah,19h    ;drive code in AL
         int       21h       ;(0=A, 1=B, etc.)
                             ;
disk3:   mov       bx,cs     ;now make DS and ES the
         mov       ds,bx     ;same as CS at entry
         mov       es,bx
         mov       dl,al     ;now put drive code in DL
         add       al,'a'    ;form ASCII character for
                             ;drive code and store it
         mov       diskc,al  ;into the output string.
         mov       dh,0      ;set head = 0 in DH,
         mov       ch,0      ;set track = 0 in CH,
         mov       cl,2      ;set sector = 2 in CL,
         mov       al,1      ;set number of sectors
                             ;to read into AL,
                             ;put address of data
                             ;buffer into BX,
         mov       bx,offset buffer
         mov       ah,2      ;AH=2 is read command,
                             ;now call ROM BIOS
         int       13H       ;to read first block of
                             ;File Allocation Table.
                             ;
         mov       bl,buffer ;pick up the first byte
                             ;of FAT (contains code for
                             ;disk format type) and
                             ;set SI = start of disk
                             ;type and message table.
         mov       si,offset diskk
disk4:   lodsb               ;get next type from table.
         or        al,al     ;if zero we didn't match
                             ;any valid type,
         jz        disk5     ;so go print "unknown".
         cmp       al,bl     ;check byte from table against
                             ;byte from diskette FAT sector.
         jz        disk5     ;got a match,jump.
         add       si,2      ;bump the table pointer
                             ;past the message address,
                             ;and check next table entry.
         jmp       short disk4
disk5:   mov       ah,9      ;print first part of message,
         mov       dx,offset diskb
         int       21h
         lodsw               ;pick up the message address
         mov       dx,ax     ;for this disk type, put into
         mov       ah,9      ;register DX, and print it.
         int       21h
                             ;print final carriage return
                             ;and line feed...
         mov       dx,offset diskj
         jmp       short disk9
                             ;come here if letter other
                             ;than A-D or a-d in command
disk8:                       ;line, print "invalid disk".
         push      cs        ;make DS = CS  so error
         pop       ds        ;message is addressable.
         mov       dx,offset diska
                             ;
disk9:   mov       ah,9      ;print message whose address
         int       21h       ;is in register DX, then
         ret                 ;"Far Return" to PC-DOS
;
disktype endp                ;end of procedure DISKTYPE
;
diska    db        cr,lf
         db        'Invalid disk code.  Use A, B, C or D.'
         db        cr,lf,'$'
diskb    db        cr,lf
         db        'The diskette in drive '
diskc    db        'x: is',cr,lf,'$'
diskd    db        '2 sided, 8 sectors per track.$'
diske    db        '1 sided, 8 sectors per track.$'
diskf    db        '2 sided, 9 sectors per track.$'
diskg    db        '1 sided, 9 sectors per track.$'
diskh    db        'fixed disk.$'
diski    db        'unknown to this program.$'
diskj    db        cr,lf,'$'
;
; "diskk" is a table in which the byte
; signifying a disk format is followed
; by the address of a descriptive message
;
diskk    db        0ffh      ;2 sides 8 sectors
         dw        diskd
         db        0feh      ;1 side 8 sectors
         dw        diske
         db        0fdh      ;2 sides 9 sectors
         dw        diskf
         db        0fch      ;1 side 9 sectors
         dw        diskg
         db        0f8h      ;fixed disk
         dw        diskh
         db        0         ;unknown,end of table
         dw        diski
;
buffer   db        512 dup (?)
;
cseg     ends
;
stack    segment   para stack 'STACK'
         db        64 dup (?)
stack    ends
;
         end       disktype
```
{% endraw %}

## DUMP.ASM

{% raw %}
```
	name	dump
	page	55,132
	title	'DUMP --- Display File Contents'

; DUMP --- a utility to display the contents of a file in hex
; and ASCII format.  Requires PC-DOS 2.0 or MS-DOS 2.0.

; Used in the form:
; A>dump path\filename.ext  [ >device ]
; (item in square brackets is optional)

; version 1.0	March 25, 1984
; Copyright (c) 1984 by Ray Duncan
; May be freely reproduced for non-commercial use.

cr	equ	0dh		;ASCII carriage return
lf	equ	0ah		;ASCII line feed
blank	equ	20h		;ASCII space code

command equ	80h		;buffer for command tail

blksize equ	128		;size of input file records

output_handle equ 1		;handle of standard output device
				;(can be redirected)
error_handle equ 2		;handle of standard error device
				;(not redirectable)

cseg	segment para public 'CODE'

	assume	cs:cseg,ds:data,es:data,ss:stack


dump	proc	far		;entry point from PC-DOS

	push	ds		;save DS:0000 for final
	xor	ax,ax		;return to PC-DOS
	push	ax
	mov	ax,data 	;make our data segment
	mov	es,ax		;addressable via ES register.
	mov	ah,30h		;check version of PC-DOS.
	int	21h
	cmp	al,2
	jae	dump1		;proceed, DOS 2.0 or greater.
	mov	dx,offset msg3	;DOS 1.x --- print error message;
	mov	ax,es		;we must use the old PC-DOS
	mov	ds,ax		;string output function since
	mov	ah,9		;handles are not available in
	int	21h		;this version of PC-DOS.
	ret

dump1:	call	get_filename	;get path and file spec. for
				;input file from command line tail.
	mov	ax,es		;set DS=ES for remainder
	mov	ds,ax		;of program.
	jnc	dump2		;jump, got acceptable name.
	mov	dx,offset msg2	;missing or illegal filespec,
	mov	cx,msg2_length
	jmp	dump9		;print error message and exit.

dump2:	call	open_input	;now try to open input file
	jnc	dump3		;jump,opened input ok
	mov	dx,offset msg1	;open of input file failed,
	mov	cx,msg1_length
	jmp	dump9		;print error msg and exit.

dump3:	call	read_block	;initialize input file buffer
	jnc	dump4		;jump,got a block
	mov	dx,offset msg4	;empty file,print error
	mov	cx,msg4_length
	jmp	dump9		;message and exit

				;file successfully opened,
dump4:				;now convert and display it!
	call	get_char	;read 1 character from input.
	jc	dump8		;jump, end of file
	inc	input_addr	;update relative file position
	or	bx,bx		;is this 1st char of block?
	jnz	dump5		;no
	call	print_heading
dump5:	and	bx,0fh		;is this first byte of 16?
	jnz	dump6		;no,jump
	push	ax		;save the byte
	mov	di,offset output;convert relative file addr.
	mov	ax,input_addr	;for output string
	call	conv_word
	pop	ax
dump6:				;store ASCII version of character,
				;if it is alphanumeric,
	mov	di,offset outputb
	add	di,bx		;calculate output string address
	mov	byte ptr [di],'.' ;if it is control character,
	cmp	al,blank	;just print a dot.
	jb	dump7		;jump, not alphanumeric.
	cmp	al,7eh
	ja	dump7		;jump, not alphanumeric.
	mov	[di],al 	;store ASCII character.
dump7:				;now convert binary byte
				;to hex  ASCII equivalent.
	push	bx		;save offset 0-15 of this byte.
				;calc. its position in
				;output string.
	mov	di,offset outputa
	add	di,bx		;base addr + (offset*3)
	add	di,bx
	add	di,bx
	call	conv_byte	;convert data byte to hex
	pop	bx		;restore byte offset
	cmp	bx,0fh		;16 bytes converted yet?
	jne	dump4		;no,get another byte
	mov	dx,offset output
	mov	cx,output_length
	call	write_std	;yes, print the line
	jmp	dump4		;get next char. from input file.

dump8:				;end of file detected,
	call	close_input	;close input file.
	ret			;now return to PC-DOS.

dump9:				;come here to print message
				;on standard error device,
	call	write_error	;and return control to PC-DOS
	ret

dump	endp


get_filename proc near		;process name of input file
				;return Carry = 0 if successful
				;return Carry = 1 if no filename
				;DS:SI <- addr command line
	mov	si,offset command
				;ES:DI <- addr filespec buffer
	mov	di,offset input_name
	cld
	lodsb			;any command line present?
	or	al,al		;return error status if not.
	jz	get_filename4
get_filename1:			;scan over leading blanks
	lodsb			;to file name.
	cmp	al,cr		;if we hit carriage return...
	je	get_filename4	;jump, name is missing
	cmp	al,20h		;is this a blank?
	jz	get_filename1	;if so keep scanning.
get_filename2:			;found first char of name,
	stosb			;move last char. to output
				;file name buffer.
	lodsb			;check next character, found
	cmp	al,cr		;carriage return yet?
	je	get_filename3	;yes,exit with success code.
	cmp	al,20h		;is this a blank?
	jne	get_filename2	;if not keep moving chars.
get_filename3:			;exit with carry =0
	clc			;for success flag
	ret
get_filename4:			;exit with carry =1
	stc			;for error flag
	ret
get_filename endp

open_input proc near		;open input file
				;DS:DX=addr filename
	mov	dx,offset input_name
	mov	al,0		;AL=0 for read only
	mov	ah,3dh		;function 3dh=open
	int	21h		;handle returned in AX,
	mov	input_handle,ax ;save it for later.
	ret			;CY is set if error
open_input endp

close_input proc near		;close input file
	mov	bx,input_handle ;BX=handle
	mov	ah,3eh
	int	21h
	ret
close_input endp

get_char proc	near		;get one character from input buffer
				;return AL = char, BX = buffer offset
				;return CY flag = 1 if end of file
	mov	bx,input_ptr	;is pointer at end of buffer?
	cmp	bx,blksize
	jne	get_char1	;no,jump
				;yes, buffer is exhausted,
	mov	input_ptr,0
	call	read_block	;new block must be read from disk.
	jnc	get_char	;got block, start routine over.
	ret			;end of file detected
				;so return CY flag = True.
get_char1:			;get data byte into AL,
	mov	al,[input_buffer+bx]
	inc	input_ptr	;bump input buffer pointer.
	clc			;return CY flag =0 since
	ret			;not end of file.
get_char endp


read_block proc near		;read block of data from input file.
				;return CY flag = 0 if read ok.
				;	CY flag = 1 if end of file.
	mov	bx,input_handle ;request read from PC-DOS.
	mov	cx,blksize
	mov	dx,offset input_buffer
	mov	ah,3fh
	int	21h
				;initialize pointers
	inc	input_block
	mov	input_ptr,0
	or	ax,ax		;was anything read in? (the OR
				; incidentally turns off the CY flag)
	jnz	read_block1	;yes,jump
	stc			;no,end of file so return CY=True
read_block1:
	ret
read_block endp

write_std proc	near		;write string to standard output.
				;call DX = addr of output string
				;     CX = length of string
	mov	bx,output_handle;BX=handle for standard list device.
	mov	ah,40h		;function 40h=write to device.
	int	21h		;request service from DOS.
	ret
write_std endp

write_error proc near		;write string to standard error device.
				;call DX = addr of output string
				;     CX = length of string
	mov	bx,error_handle ;BX=handle for standard error device.
	mov	ah,40h		;function 40h=write to device.
	int	21h		;request service from DOS.
	ret
write_error endp

print_heading proc near 	;print record number and heading
	push	ax		;for a block of data
	push	bx		;first save registers
	mov	di,offset headinga
	mov	ax,input_block
	call	conv_word	;convert record number to ASCII
	mov	dx,offset heading
	mov	cx,heading_length
	call	write_std	;now print heading
	pop	bx		;restore registers
	pop	ax
	ret			;and exit
print_heading endp

conv_word proc near		;convert 16-bit binary word
				; to hex ASCII
				;call with AX=binary value
				;	   DI=addr to store string
				;returns AX, DI, CX destroyed
	push	ax
	mov	al,ah
	call	conv_byte	;convert upper byte
	pop	ax
	call	conv_byte	;convert lower byte
	ret
conv_word endp

conv_byte proc	  near		;convert binary byte to hex ASCII
				;call with AL=binary value
				;	   DI=addr to store string
				;returns   AX, DI, CX modified

	sub	ah,ah		;clear upper byte
	mov	cl,16
	div	cl		;divide binary data by 16
	call	ascii		;the quotient becomes the first
	stosb			;ASCII character
	mov	al,ah
	call	ascii		;the remainder becomes the
	stosb			;second ASCII character
	ret
conv_byte endp

ascii	proc	near		;convert bottom 4 bits in AL
	add	al,'0'          ;into the hex ASCII character
	cmp	al,'9'
	jle	ascii2		;jump if in range 0-9,
	add	al,'A'-'9'-1    ;offset it to range A-F,
ascii2: ret			;return ASCII char. in AL.
ascii	endp

cseg	ends


data	segment para public 'DATA'

input_name	db	64 dup (0)	;buffer for input filespec

input_handle	dw	0		;token from PCDOS for input file.

input_ptr	dw	0		;pointer to input deblocking buffer

input_addr	dw	-1		;relative address in file
input_block	dw	0		;current 128 byte block number

output		db	'nnnn',blank,blank
outputa 	db	16 dup ('00',blank)
		db	blank
outputb 	db	'0123456789ABCDEF',cr,lf
output_length	equ	$-output

heading 	db	cr,lf,'Record',blank
headinga	db	'nnnn',blank,blank,cr,lf
		db	7 dup (blank)
		db	'0  1  2  3  4  5  6  7  '
		db	'8  9  A  B  C  D  E  F',cr,lf
heading_length	equ	$-heading

input_buffer	db	blksize dup (?) ;deblocking buffer for input file

msg1		db	cr,lf
		db	'Cannot find input file.'
		db	cr,lf
msg1_length	equ	$-msg1

msg2		db	cr,lf
		db	'Missing file name.'
		db	cr,lf
msg2_length	equ	$-msg2

msg3		db	cr,lf
		db	'Requires PC-DOS version 2 or greater.'
		db	cr,lf,'$'

msg4		db	cr,lf,'Empty file.',cr,lf
msg4_length	equ	$-msg4

data	ends


stack	segment para stack 'STACK'
	db	64 dup (?)
stack	ends

	end	dump
```
{% endraw %}

## EXPAND.BAS

{% raw %}
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
{% endraw %}

## EXPAND.DOC

{% raw %}
```

Some text files use tabs at the standard columns.  Use EXPAND.BAS to expand
the tab code (X'09) to the number of spaces required to reach the next tab
position.  If the vertical bars don't line up on the following two lines
when you display or print this file then EXPAND.BAS should correct the
problem.


Tabs:   |       |       |       |
Spaces: |.......|.......|.......|

The program expands tabs based on tab positions at (n*8)+1  n=0,1,2,3...
This if a fairly standard tab setting but by no means holy.  Tabs are
settable as desired, by an escape sequence to your printer, by shoving
clips into the notched bar at the back of your trusty though obsolete
typewriter, or analogous diddling with your word processor.

Because tab settings are not well standardized and many printers powerup
with all tabs cleared it really isn't very good practice to have tabs in a
so called DOS ASCII file, particularily one that is distributed to others.
Note that the IBM Personal Editor's default save creates documents with
tabs in order to save a little disk space.  It can also be used to clear a
document of tabs by saving the file with the NOTABS option.  The latter
feature is far more valuable than the former.  (Since the problem files
were like as not generated by the PE - if it weren't for the former would
we need the latter?) At any rate if you encounter the problem and don't
have the PE then EXPAND can make your day.

Note that the TYPE, MORE and PRINT commands expand tabs but of course, do
not fix the original file.

  ps.  This file must be saved with tabs so the tab test will work.



```
{% endraw %}

## FILES256.TXT

{% raw %}
```
--------------------------------------------------------------------------
Disk No 256   Utilities #6                                           v1.1
--------------------------------------------------------------------------
SAVE     COM  Copy current screen to alternate monitor
DISPRE   COM  Displays the 8088 registers after being loaded
DISPRE   EXE  by different programs, ie: DEBUG vs COMMAND.COM
DISPRE   ASM  Source for DISPRE.COM/EXE
DISPRE   DOC  Documentation for DISPRE.COM/EXE
MONOCLOK COM  Time in UR corner of mono display, graphics unaffected
LABEL    EXE  Diskette label program  (Softalk March 84)
LABEL    ASM  Source for LABEL.EXE
FREE     COM  Reports free space on one or all drives
FREE     ASM  Source for FREE.COM
FREE     DOC  Documentation for FREE.COM
WHEREIS  COM  File searcher, upgraded with 23 line pause feature
WHEREIS  ASM  Source for WHEREIS.COM
DEFRAG   BAS  Defragments diskette space
DEFRAG   DOC  Documentation for DEFRAG.BAS
NUSQ     COM  New UnSQueeze program, small, fast, improved
NUSQ     DOC  Documentation on NUSQ.COM
DUMP     EXE  Displays a file in hex and ASCII  (From May Softalk)
DUMP     ASM  Source for DUMP.EXE
PARCHK   COM  Replaces std parity routine, errors don't stop machine
PARCHK   ASM  Source for PARCHK.COM
PARCHK   DOC  Documentation for PARCHK.COM
REFCD    DOC  INT 21 reference card, DOS 2.1 version
TABS     EXE  Converts spaces to tabs  (Shrinks files )
TABS     ASM  Source for TABS.EXE
TABS     DOC  Documentation for TABS.EXE
LOOK     COM  Memory display program
LOOK     ASM  Source for LOOK.COM
LOOK     DOC  Documentation for LOOK.COM
ZAPDEB   BAS  Patch DEBUG.COM to fix timer interrupt bug
ZAPDEB   DOC  Documentation for ZAPDEB.BAS
ZAPTRE   BAS  Patches TREE.COM to support a filename operand     WHATWHATWHAT
ZAPTRE   DOC  Documentation for ZAPTRE.BAS
QS       RIO  Quick Startup patch for BIOS
QS       TXT  Documentation for QS.RIO
CLOCK    SYS  Device driver for AST and TECMAR boards with clock
CLOCK    ASM  Source for CLOCK.ASM
CAPSDEF  COM  Defeats the CapsLock key
CAPSDEF  DOC  Documentation for CAPSDEF.COM
CAPSDEF  ASM  Source for CAPSDEF.COM
BIGCAL   BAS  High precision calculator; default is 100 digits
BIGCAL   DOC  Documentation for BIGCAL.DOC
EXPAND   BAS  Replaces tabs with appropiate number of spaces
EXPAND   DOC  Documentation for EXPAND.BAS
DIRECT   BAS  Creates BLOADable file to directly read disk directory
DIRDEM   BAS  Demonstrates DIRECTORY function created by DIRECT.BAS
WHEREIS  COM  Searches all directories for specified file
WHEREIS  BAS  Generates WHEREIS.COM
DSKTYP   EXE  Reports the format of the selected diskette
DSKTYP   ASM  Source for DSKTYP.EXE
FORMAT   VOL  Patch to DOS 2.0 FORMAT to always request VOL label
COLOR    PE   Passionate shades for the Personal Editor
PE-NOTAB DOC  Fixes Personal Editor to save without those #@%& TABS
DCBA2    HOW  Modify DISKCOPY.COM (Version 2.10) for production copying
 
PC-SIG
1030D E Duane Avenue
Sunnyvale Ca. 94086
(408) 730-9291
(c) Copyright 1987 PC-SIG
```
{% endraw %}

## FREE.ASM

{% raw %}
```
cseg	segment
	org 100h
	assume cs:cseg,ds:cseg
start	proc near
	call lfeed
	mov si,offset buff
	call parse
	cmp byte ptr [si],255
	jnz here
	mov ah,19h
	int 21h
	inc al
	mov ah,al
	mov al,0
	mov [si],ax
	mov byte ptr [si+2],255
here:	cmp byte ptr [si],0
	jnz other
	inc si
	mov dl,[si]
	inc si
	call space
	cmp ah,1
	jnz here2
	call pntdrv
	mov dx,offset errmess
	mov ah,9
	int 21h
	jmp here
here2:	mov dx,offset bytes
	mov ah,9
	int 21h
	jmp here
leave:	int 20h
other:	cmp byte ptr [si],2
	jnz badpar
	inc si
	cmp byte ptr [si],1
	jnz badpar
	inc si
	mov cl,1
	call upper
	cmp byte ptr [si],65
	jz other2
	cmp byte ptr [si],88
	jnz badpar
	jmp pauth
other2: inc si
	mov dl,1
othlp:	call space
	inc dl
	cmp ah,1
	jz here
	push dx
	push ax
	mov dx,offset bytes
	mov ah,9
	int 21h
	pop ax
	pop dx
	jmp othlp
badpar: cmp byte ptr [si],255
	jz leave
	mov dx,offset badmes
	mov ah,9
	int 21h
	jmp leave
pauth:	mov dx,offset author
	mov ah,9
	int 21h
	inc si
	jmp here

space:	push si
	push dx
	mov ah,36h
	push dx
	int 21h
	pop dx
	cmp ax,0ffffh
	jnz conts
	mov ah,1
	jmp lvspa
conts:	call pntdrv
	mul bx
	mul cx
	mov si,offset buffer
	call condw
	call ascdw
	mov byte ptr [si+10],'$'
	mov cx,9
	call zapzer
	mov dx,si
here3:	mov ah,9
	int 21h
	mov ah,0
lvspa:	pop dx
	pop si
	ret
lfeed:	mov dx,offset lfee
	mov ah,9
	int 21h
	ret
pntdrv: push dx
	push ax
	add dl,64
	mov [drive],dl
	mov dx,offset message
	mov ah,9
	int 21h
	pop ax
	pop dx
	ret
start	endp

;PARSE COMMAND LINE

;Places parsed list at DS:SI - format
; 0/#		     Drive number #
; 1/#/filespec.ext   Filename of length #
; 2/#/parameter      /parameter of length #
; 255		     End of list
;everthing but SI, BP, segment registers, and stack messed up

parse	proc near
	push si
	mov di,80h
	mov cl,[di]
	inc di
	cmp cl,0
	jnz paraaa
	jmp paraar
paraaa: mov al,[di]			;main loop - jump here to
	cmp al,32			;process new sections
	jnz paraab
	jmp paraal
paraab: cmp al,'/'    ;47
	jnz paraac
	jmp paraam
paraac: cmp al,64
	jle paraal
	mov bx,offset paraat		;either filename or drivespec
	mov [paraas],0
paraad: mov [bx],al			;main loop for moving characters
	inc bx				;to the temporary buffer with
	inc di				;either filename or drivespec
	dec cl
	jz paraaf
paraae: mov al,[di]
	inc di
	dec cl
	cmp al,32
	jnz paraah
paraaf: cmp byte ptr [paraas],1 	;end of current string by end of
	jz paraak			;buffer or delimeter
	mov byte ptr [si],1
	mov dx,bx
	sub dx,offset paraat
	inc si
	mov [si],dl
	inc si
	mov bx,offset paraat
paraag: mov al,[bx]			;loop for moving filespec to return
	mov [si],al			;buffer
	inc si
	inc bx
	dec dl
	jnz paraag
	cmp cl,0
	jz paraar
	jmp paraaa
paraah: cmp al,':'                      ;check to see if char is a colon
	jnz paraai
	mov [paraas],1			;set colon=last character
	jmp paraaj
paraai: mov [paraas],0			;set colon<>last character
paraaj: mov [bx],al			;put in buffer
	inc bx
	cmp cl,0
	jz paraaf
	jmp paraae
paraak: mov byte ptr [si],0		;end of buffer, drivespec found
	inc si
	dec bx
	dec bx
	mov al,[bx]
	and al,95
	sub al,64
	mov byte ptr [si],al
	inc si
	cmp cl,0
	jz paraar
	jmp paraaa
paraal: inc di				;ignore character
	dec cl
	jz paraar
	jmp paraaa
paraam: inc di				;/parameter found
	dec cl
	jz paraao
	mov bx,offset paraat
paraan: mov al,[di]			;loop for placing characters
	cmp al,32			;into the temporary buffer
	jz paraao
	cmp al,'/'
	jz paraao
	mov [bx],al
	inc di
	inc bx
	dec cl
	jnz paraan
paraao: mov byte ptr [si],2		;end of parameter
	inc si
	mov dx,bx
	sub dx,offset paraat
	mov [si],dl
	inc si
	cmp dl,0
	jz paraaq
	mov bx,offset paraat
paraap: mov al,[bx]			;move characters from temporary
	mov [si],al			;buffer
	inc si
	inc bx
	dec dl
	jnz paraap
paraaq: cmp cl,0			;jump back to normal routine
	jz paraar
	jmp paraaa
paraar: mov byte ptr [si],255		;end of buffer code
	pop si
	ret				;leave
paraas	db ?				;colon=last character?
paraat	db 128 dup(?)			;temporary storage area
parse	endp

;CONVERT STRING TO UPPERCASE

;Changes string at DS:SI of length CL to uppercase
;CX and flags messed up

upper	proc near
	cmp cl,0
	jz uppaac
	push si
	mov ch,0
uppaaa: cmp byte ptr [si],96
	jle uppaab
	cmp byte ptr [si],123
	jge uppaab
	and byte ptr [si],223
uppaab: inc si
	loop uppaaa
	pop si
uppaac: ret
upper	endp

;CONVERT WORD TO DECIMAL

;Takes a number in AX and places the ascii value at DS:SI
;AX, BX, CX, and flags are messed up

conw	proc near
	mov cx,5
	mov bx,10
	add si,4
conaaa: mov dx,0
	div bx
	mov [si],dl
	dec si
	loop conaaa
	inc si
	ret
conw	endp

;CONVERT DOUBLEWORD TO DECIMAL

;Handles numbers 0-655,350,000 - pass it others and it INT 0s
;Takes a number in DX-AX and places the ascii value at DS:SI
;AX, BX, CX, DX, and flags are messed up

condw	proc near
	mov bx,10000
	div bx
	push dx
	call conw
	add si,4
	pop ax
	mov dl,[si]
	push dx
	call conw
	pop dx
	mov [si],dl
	sub si,4
	ret
condw	endp

;CONVERT DECIMAL WORD TO ASCII

;Takes number at DS:SI and leaves it in ASCII
;CX and flags messed up

ascw	proc near
	mov cx,5
ascaaa: add byte ptr [si],48
	inc si
	loop ascaaa
	sub si,5
	ret
ascw	endp

;CONVERT DECIMAL DOUBLEWORD TO ASCII

;Takes number at DS:SI and leaves it in ASCII
;CX, DX, and flags messed up

ascdw	proc near
	call ascw
	add si,4
	mov dl,[si]
	call ascw
	mov [si],dl
	sub si,4
	ret
ascdw	endp

;ZAP LEADING ZEROS IN A STRING

;Zaps leading zeros in a string of length CX at address DS:SI
;Returns with SI pointing to first nonzero byte
;CX and flags messed up

zapzer	proc near
	cmp cx,0
	jz zapaaa
	cmp byte ptr [si],48
	jnz zapaaa
	mov byte ptr [si],32
	inc si
	loop zapzer
zapaaa: ret
zapzer	endp

buffer	db 10 dup(?)
buff	db 170 dup(?)
message db 'Drive '
drive	db ?,': $'
errmess db 'invalid',13,10,'$'
bytes	db 'bytes free',13,10,'$'
badmes	db 'Invalid parameter',13,10,'$'
lfee	db 13,10,'$'
author	db 13,10,'FREE Version 1.3 By Alan Bishop',13,10
	db 'Please send all comments/bugs to',13,10
	db 'CIS 72405,647',13,10,10,'$'
cseg	ends
	end start

;program by Alan Bishop - CIS 72405,647 Version 1.3
```
{% endraw %}

## FREE.DOC

{% raw %}
```
FREE version 1.3

FREE.COM is a small machine language routine that
reports the free space on a given disk.  Without
any parameters it displays the space on the default
disk, and with parameters it displays the space on
the disks specified.  A non-drivspec parameter will
cause FREE to exit, ignoring the rest of the command
line.  Also, the /A option produces the free space on
all the disks on your system, and the /X option shows
the current version number.  All of these parameters
and drivespecs may be combined if you feel that there
is some reason to do so.

Examples:

A>free

Drive A: xxxxx bytes free

A>free a: b:

Drive A: xxxxx bytes free
Drive B: xxxxx bytes free

A>free a: b: c:

Drive A: xxxxx bytes free
Drive B: xxxxx bytes free
Drive C: invalid            (unless you happen to have a drive c:)

A>free a: hi! b:

Drive A: xxxxx bytes free
Invalid parameter

A>free foobar

Invalid parameter

A>free/a

Drive A: xxxxx bytes free
Drive B: xxxxx bytes free    (unless you have more than two drives)

A>free/x


FREE Version 1.3 By Alan Bishop
Please send all comments/bugs to
CIS 72405,647


A>

This routine is useful in checking the disk space on multiple drives
or when you don't feel like sitting through a DIR or CHKDSK.  When
put on a RAMDISK, this utility is very helpful as it will act almost
as fast as an internal command.

There are a few useful routines in the assembler listing such as convert
doubleword to decimal and parse DOS command line.

Please report any bugs to Alan Bishop - CIS 72405,647

```
{% endraw %}

## LABEL.ASM

{% raw %}
```
	name	labl
	page	55,132
	title	'LABEL --- display or change volume label'
;
; LABEL --- display or change volume label
;
; Copyright (c) 1984 by Ray Duncan
; May be freely reproduced and modified
; for non-commercial use.

cr	equ	0dh		;ASCII carriage return
lf	equ	0ah		;ASCII line feed
eom	equ	'$'             ;end of message flag

				;Program Segment Prefix:
command equ	80h		;command line buffer
default_fcb equ 05ch		;default file control block

rd_only equ	01h		;file attributes
hidden	equ	02h
system	equ	04h
volume	equ	08h
subdir	equ	10h
archive equ	20h


cseg	segment para public 'CODE'

	assume	cs:cseg,ds:data,es:data,ss:stack

labl	proc	far		;entry point from PC-DOS

	push	ds		;save DS:0000 for final
	xor	ax,ax		;return to PC-DOS
	push	ax
	mov	ah,48		;make sure this is DOS
	int	21h		;version 2.0 or greater
	cmp	al,2
	jae	labl1		;version is ok,jump
	mov	ax,data
	mov	ds,ax
	mov	dx,offset msg6	;version too low, print error
	mov	ah,9		;message and exit
	int	21h
	ret
labl1:	mov	ax,data 	;make our data segment addressable
	mov	es,ax		;via the ES register
	call	vol_name	;get name for new volume label
				;if any was given by user
	mov	ax,es		;now set DS=ES for remainder
	mov	ds,ax		;of the program.
	call	show_label	;display the current volume label
				;on the selected diskette. subroutine
				;returns AX=0 if no label on
				;disk, AX=-1 if label exists.
				;was new label supplied by user?
	cmp	byte ptr fcb+1,' '
	jne	labl2		;yes,change or add volume label
	ret			;no, display only, exit to PC-DOS

labl2:				;new name supplied by user.
	or	ax,ax		;was previous label present?
				;(flag in AX from SHOW_LABEL)
	jz	labl3		;no,jump
	mov	cx,11		;yes,change it
	mov	di,offset buffer+24
	mov	si,offset fcb+1 ;set up new name starting at
	rep movsb		; 6 bytes after old name
	mov	dx,offset buffer
	mov	ah,23		;request alteration of volume name
	int	21h		;by PC-DOS function 23=RENAME
	jmp	labl4		;go check if function was successful,
				;if it was display new volume name.

labl3:				;come here to add new label, if
				;diskette previously had no label.
	mov	dx,offset xfcb	;DX=addr of extended fcb
				;containing "volume" attribute byte.
	mov	ah,22		;Use PC-DOS function 22 to create
	int	21h		;a new directory entry.
labl4:	cmp	al,0ffh 	;was function successful?
	jne	labl5		;yes,jump to display new name.
	mov	dx,offset msg2	;no,print error message
	mov	ah,9		;and exit
	int	21h
	ret

labl5:				;label successfully created.
	mov	dx,offset msg3	;print first part of message.
	mov	ah,9
	int	21h
	mov	bx,offset fcb+1 ;print actual volume name
	call	print_vol	;in upper case.
	ret			;exit to PC-DOS.
labl	endp


show_label proc near		;Display the label for the
				;disk in the selected drive and
				;return AX=-1, or display message
				;and return AX=0 if no label exists.
	mov	dx,offset buffer
	mov	ah,26		;set disk transfer address
	int	21h		;for use in directory search
	mov	dx,offset sfcb	;now look for the first directory
				;entry with "volume" attribute,
	mov	ah,17		;using PC-DOS function 17
	int	21h		;"search for first matching filename"
	cmp	al,0ffh 	;any volume label found?
	je	show_label2	;no,jump
	mov	dx,offset msg4	;yes print message and
	mov	ah,9		;volume name
	int	21h
	mov	bx,offset buffer+8
	call	print_vol
	mov	ax,-1		;return AX=-1, label exists
	ret
show_label2:			;disk was not labeled,
	mov	dx,offset msg5	;so print message and
	mov	ah,9		;return AX=0 as signal that
	int	21h		;there is no previous label
	xor	ax,ax
	ret
show_label endp


print_vol proc	near		;print the volume name
				;whose offset is in BX on
				;the standard output device.
				;Regs AX, BX, DX destroyed.
	mov	cx,11		;name is max of 11 characters
pvol2:
	mov	dl,[bx] 	;get next char from string
     ;	cmp	dl,' '            ;prevented display of any imbedded
     ;	je	pvol2		  ;blanks actually in vol label  ???
	cmp	dl,'a'          ;if it is an lower-case alpha
	jb	pvol3		;character,fold to upper case
	cmp	dl,'z'
	ja	pvol3
	xor	dl,20h
pvol3:
	mov	ah,2		;function 2=output char.
	int	21h		;request output by PC-DOS
pvol4:	inc	bx		;advance to next string position
	loop	pvol2		;until 11 chars. processed.
pvol9:				;done with string output,
	mov	dx,offset msg1	;send final carriage return
	mov	ah,9		;and line feed,
	int	21h
	ret			;then return to caller
print_vol endp

vol_name proc	near		;Transfer the new volume name
				;from the Program Segment Prefix
				;into the local File Control Block

				;let DS:SI=command tail address
	mov	si,offset command
	lodsb			;check string length byte,
	or	al,al		;any name present?
	jz	vol_name4	;no,go get drive
vol_name1:			;scan for start of name
	lodsb			;get next char
	cmp	al,cr		;if carriage return,name is missing
	je	vol_name4	;so jump to get drive
	cmp	al,' '          ;if blank, keep looking
	je	vol_name1
				;now found none-blank char
				;let ES:DI = addr of name field
	mov	di,offset fcb+1 ;in local file control block
	mov	cx,11		;CX will be counter, 11 chars max.
				;did DOS's parser find legal drive?
	mov	ah,ds:default_fcb
	or	ah,ah
	jz	vol_name2	;no,jump.
	lodsb			;yes,then next char ought to
	cmp	al,':'          ;be a colon.
	jne	vol_name4	;not colon, some kind of error.
	lodsb			;fetch next character after colon.
	cmp	al,' '          ;make sure name is also there.
	jna	vol_name4	;no name,jump to get drive.
vol_name2:			;now we transfer bytes from
				;command tail into the fcb
				;for the new volume name.
	stosb
	lodsb			;check next char from input.
	cmp	al,' '          ;if xxxxx or any control char [xxx was blank]
	jb	vol_name4	;found end of name.	      [jb was jna]
			      ;[changed to permit imbedded blanks in new label
			      ;rather than truncating label at blank]
	loop	vol_name2	;otherwise, keep looking until
				;11 characters have been processed.
vol_name4:
	mov	al,ds:default_fcb
	or	al,al		;was disk drive specified?
	jnz	vol_name5	;yes,use it.
	mov	ah,25		;no, get identity of default drive.
	int	21h
	inc	al
vol_name5:			;put drive into file control blocks
	mov	es:fcb,al	;for search and new volume name.
	mov	es:sfcb+7,al
	add	al,'a'-1        ;also form ASCII letter for
	mov	es:msg2a,al	;drive, and put into
	mov	es:msg3a,al	;output messages.
	mov	es:msg4a,al
	mov	es:msg5a,al
	ret
vol_name endp

cseg	ends


				;data segment for
				;miscellaneous messages,
				;constants, and variables
data	segment para public 'DATA'
				;extended file control block
xfcb	db	0ffh		;flag for special fcb
	db	5 dup (0)	;reserved
	db	volume		;volume label attribute byte
				;remainder is "normal" fcb
fcb	db	0		;drive (set by VOL_NAME)
	db	11 dup (' ')    ;blank name field
	db	25 dup (0)

sfcb	db	0ffh		;extended file control block used
	db	5 dup (0)	;to search for current label
	db	volume
	db	0		;drive (set by VOL_NAME)
	db	11 dup ('?')    ;wildcard name
	db	25 dup (0)

buffer	db	128 dup (?)	;buffer for disk directory search

msg1	db	cr,lf,eom

msg2	db	cr,lf
	db	'Unable to write new label on disk '
msg2a	db	'x: ',cr,lf,eom

msg3	db	cr,lf
	db	'Label of disk in drive '
msg3a	db	'x: has been changed to ',eom

msg4	db	cr,lf,'Label of disk in drive '
msg4a	db	'x: is ',eom

msg5	db	cr,lf,'Disk in drive '
msg5a	db	'x: has no label.',cr,lf,eom

msg6	db	cr,lf
	db	'LABEL program requires DOS '
	db	'version 2.0 or greater.'
	db	cr,lf,eom

data	ends


stack	segment para stack 'STACK'
	db	64 dup (?)
stack	ends

	end	labl
```
{% endraw %}

## LOOK.ASM

{% raw %}
```
	PAGE	,132
	TITLE	LOOK - LOOK AT MEMORY
	SUBTTL	Look At Memory In Any Segment
;									      ;
;*****************************************************************************;
;									      ;
;		      John R. Pulliam	 Version 2/21/84		      ;
;									      ;
;	       For Columbia Data Product Computers and Compatibles	      ;
;			  Released to Public Domain			      ;
;									      ;
;*****************************************************************************;
;									      ;
;
;  DOS CALL INT 21H FUNCTIONS USED
;
;
;	AH = 01H => Input One Character From Keyboard
;		    AL = Ascii Character Received
;
;	AH = 02H => Display One Character On CRT
;		    DL = Ascii Character to Display
;
;	AH = 09H => Display Message on CRT
;		    DS = Segment of Message
;		    DX = Offset Address of Message
;
;	AH = 0CH &
;	AL = 0AH => Clear Then Fetch Keyboard Buffer
;		    DI	   = Buffer First Word Address
;		    [DI]   = Number Of Characters Wanted To Input
;		    [DI+1] = Number Of Characters Actually Received
;		    [DI+2] = First Character Received
;
;
;  DOS INT 20H = Terminate Program And Return To DOS
;
;  To Assemble This Program:
;
;	1. Place the source file, LOOK.ASM, in Drive B
;
;	2. MASM B:LOOK,B:LOOK,B:LOOK,NUL.CRF
;
;	3. LINK B:LOOK,B:LOOK,NUL.MAP,NUL.LIB
;	   (There should be 1 warning error message after linking)
;
;	4. EXE2BIN B:LOOK,B:LOOK.COM
;
;	5. B:LOOK.OBJ and B:LOOK.LST may be deleted if desired.
;
;*****************************************************************************;
;
	CSEG	SEGMENT PARA PUBLIC
	ASSUME	CS:CSEG,DS:CSEG,ES:CSEG

	ORG	100H

;  DEFINE THE CONSTANTS

CR	EQU	13		; CARRIAGE RETURN CODE
LF	EQU	10		; LINE FEED CODE
QT	EQU	34		; QUOTE MARK
BYT	EQU	16		; NUMBER OF BYTES PER LINE
LINES	EQU	8		; NUMBER OF LINES TO DISPLAY

;  SET UP THE SEGMENT REGISTERS

LOOK:	MOV	AX,CS		; GET CURRENT SEGMENT
	MOV	DS,AX		; SET DS TO THIS SEG
	MOV	ES,AX		; SET ES TO THIS SEG
	MOV	WORD PTR SEGADD,AX ; INITIALIZE DISPLAY SEGMENT

;  ASK IF ANOTHER SEGMENT IS DESIRED

ASKSEG: MOV	DX,OFFSET SEGMSG ;ADDRESS OF MESSAGE
	MOV	AH,9		; DISPLAY STRING FUNCTION
	INT	21H		; CALL DOS

;  READ REPLY

	MOV	AH,1		; REQUEST "Y" OR "N"
	INT	21H		; GET KEY INPUT
	AND	AL,0DFH 	; ALLOW EITHER UPPER OR LOWER CASE
	CMP	AL,'N'          ; BRANCH TO GET STARTING ADD IF "N"
	JE	DISPSEG
	CMP	AL,'Y'          ; REPEAT QUERY IF NOT "Y"
	JNE	ASKSEG

;  GET THE SEGMENT TO DISPLAY MEMORY FROM

GETSEG: MOV	DX,OFFSET SEGMSG2 ; ADDRESS OF MESSAGE
	MOV	AH,9		; DISPLAY STRING FUNCTION
	INT	21H		; CALL DOS

;  READ DESIRED SEGMENT

	MOV	AH,4		; MAX NUMBER OF CHARACTERS WANTED
	MOV	DI,OFFSET KBUFSZ ; KEYBOARD BUFFER
	CALL	KYBD		; INPUT REPLY

	CMP	AH,4		; WANT 4 CHARS EXCLUDING THE CR
	JE	CV1		; SKIP IF NO LEADING ZEROS
	CALL	INSERT		; INSERT LEADING ZEROS

CV1:	CALL	CRLF		; OUTPUT CR AND LF

;  CONVERT FOUR ASCII CODES INTO TWO HEX BYTES (FOUR HEX DIGITS)

	MOV	AX,WORD PTR KBUF ; FIRST TWO ASCII CODES
	CALL	ASC_HEX 	; RETURNS ONE HEX BYTE
	JC	GETSEG		; REPEAT QUERY IF ILLEGAL INPUT
	MOV	SEGADD+1,AL	; STORE HIGH SEGMENT BYTE
	MOV	AX,WORD PTR KBUF+2 ; THIRD AND FOURTH ASCII CODES
	CALL	ASC_HEX 	; RETURNS ONE HEX BYTE
	JC	GETSEG		; REPEAT QUERY IF ILLEGAL INPUT
	MOV	SEGADD,AL	; STORE LOW SEGMENT BYTE

;  DISPLAY THE SEGMENT FROM WHICH DATA IS TO BE DISPLAYED

DISPSEG:
	MOV	AL,SEGADD+1	; GET THE FIRST SEGMENT BYTE
	CALL	HEX_ASC 	; CONVERT TO ASCII
	MOV	ASCSEG,AX	; SAVE FOR OUTPUT TO CRT
	MOV	AL,SEGADD	; GET THE SECOND SEGMENT BYTE
	CALL	HEX_ASC 	; CONVERT IT TO ASCII TOO
	MOV	ASCSEG+2,AX	; AND SAVE IT ALSO

	MOV	DX,OFFSET SEGMSG3 ; ADDRESS OF MESSAGE
	MOV	AH,9		; DISPLAY STRING FUNCTION
	INT	21H		; CALL DOS

	MOV	DX,OFFSET ASCSEG ; ADDRESS OF MESSAGE
	MOV	AH,9		; DISPLAY STRING FUNCTION
	INT	21H		; CALL DOS

;  ASK FOR THE STARTING ADDRESS

ASKADD: MOV	DX,OFFSET STMSG ; ADDRESS OF MESSAGE
	MOV	AH,9		; DISPLAY STRING FUNCTION
	INT	21H		; CALL DOS

;  READ REPLY

	MOV	AH,4		; MAX NUMBER OF CHARACTERS WANTED
	MOV	DI,OFFSET KBUFSZ ; KEYBOARD BUFFER
	CALL	KYBD		; INPUT REPLY

	CMP	AH,4		; WANT 4 CHARS EXCLUDING THE CR
	JE	CV2		; SKIP IF NO LEADING ZEROS
	CALL	INSERT		; INSERT LEADING ZEROS

CV2:	CALL	CRLF		; OUTPUT CR AND LF
	CALL	CRLF		; OUTPUT CR AND LF

;  CONVERT FOUR ASCII CODES INTO TWO HEX BYTES (FOUR HEX DIGITS)

	MOV	AX,WORD PTR KBUF ; FIRST AND SECOND ASCII CODES
	CALL	ASC_HEX 	; RETURNS ONE HEX BYTE
	JC	ASKADD		; REPEAT QUERY IF ILLEGAL INPUT
	MOV	STADD+1,AL	; STORE HIGH ADDRESS BYTE
	MOV	AX,WORD PTR KBUF+2 ; THIRD AND FOURTH ASCII CODES
	CALL	ASC_HEX 	; RETURNS ONE HEX BYTE
	JC	ASKADD		; REPEAT QUERY IF ILLEGAL INPUT
	MOV	STADD,AL	; STORE LOW ADDRESS BYTE

	MOV	AX,WORD PTR STADD ; GET STARTING ADDRESS
	MOV	SI,AX		; STARTING ADDRESS IN SI REGISTER

	CALL	DISPLA		; DISPLAY MEMORY (AT LAST)

;  ASK IF WE SHOULD REPEAT

EMSG:	MOV	DX,OFFSET ENDMSG ; ADDRESS OF MESSAGE
	MOV	AH,9		; DISPLAY STRING FUNCTION
	INT	21H		; CALL DOS

	MOV	AH,1		; REQUEST "Y" OR "N"
	INT	21H		; GET KEY INPUT
	AND	AL,0DFH 	; ALLOW EITHER UPPER OR LOWER CASE
	CMP	AL,'N'          ; EXIT IF "N"
	JE	EXIT
	CMP	AL,'Y'          ; REPEAT QUERY IF NOT "Y"
	JNE	EMSG
	JMP	ASKSEG		; LOOP TO START OVER

EXIT:	INT	20H		; Return to DOS
	.XLIST
	SUBTTL	Miscellaneous Callable Routines
	PAGE	+
	.LIST
;
;
;  INSERT LEADING ZEROS INTO KEYBOARD INPUT BUFFER
;
INSERT: MOV	AL,4		; NUMBER OF DIGITS IN NUMBER
	SUB	AL,AH		; NUMBER OF LEADING ZEROS
INS1:	MOV	DI,OFFSET KBUF+3 ; DESTINATION ADDRESS
	MOV	SI,OFFSET KBUF+2 ; SOURCE ADDRESS
	MOV	CX,3		; LOOP COUNT
INS2:	MOV	AH,[SI] 	; MOVE ONE
	MOV	[DI],AH 	;    CHARACTER
	DEC	DI		; DEC POINTERS
	DEC	SI
	LOOP	INS2		; SHIFT ALL DIGITS
	MOV	AH,'0'          ; ASCII ZERO
	MOV	[DI],AH 	; ADD LEADING ZERO
	DEC	AL
	JNZ	INS1		; LOOP FOR EACH ZERO TO ADD
;
;  WRITE CR LF TO CRT
;
CRLF:	MOV	DX,OFFSET CRLFM ; ADDRESS OF 'CR,LF'
	MOV	AH,9
	INT	21H		; WRITE CR LF
	RET			; RETURN TO CONTINUE
CRLFM	DB	CR,LF,'$'
;
;
;  DISPLAY MEMORY
;
;	SI REG = STARTING ADDRESS TO DISPLAY
;	SEGADD = SEGMENT TO DISPLAY FROM
;	STADD  = OFFSET TO DISPLAY FROM
;	ASCSEG = ASCII CODE OF SEGMENT
;	ASCADD = ASCII CODE OF OFFSET
;	ALL REGISTERS ARE ALTERED
;
DISPLA: MOV	DX,OFFSET SPACE ; SPACE CODES
	MOV	AH,9		; DISPLAY STRING FUNCTION
	INT	21H		; OUTPUT SPACES
;
;  OUTPUT THE TOP LINE
;
	MOV	CX,BYT		; NUMBER OF BYTES PER LINE
	MOV	AL,STADD	; GET THE LOW ADDRESS BYTE
LUP1:	PUSH	AX		; SAVE FOR NEXT OUTPUT
	CALL	HEX_ASC 	; CONVERT TO ASCII
	MOV	ASCTOP,AH	; SAVE FOR OUTPUT
	MOV	AH,9		; OUTPUT STRING FUNCTION
	MOV	DX,OFFSET ASCTOP ; ADDRESS OF STRING
	INT	21H		; OUTPUT ONE DIGIT ON TOP LINE
	POP	AX		; GET PREVIOUS DIGIT
	INC	AL		; INCREMENT FOR NEXT DIGIT
	LOOP	LUP1		; REPEAT FOR THE REST
	CALL	CRLF		; CR AND LF
;
	MOV	BX,LINES	; NUMBER OF LINES TO DISPLAY
	MOV	AX,WORD PTR SEGADD ; FETCH SEGMENT TO DISPLAY
	MOV	ES,AX		; PUT DESIRED SEGMENT IN ES REGISTER
;
;  OUTPUT ADDRESS AT START OF LINE
;
LUP3:	PUSH	BX		; SAVE LINE COUNTER
	MOV	AL,STADD+1	; GET THE FIRST ADDRESS BYTE
	CALL	HEX_ASC 	; CONVERT TO ASCII
	MOV	ASCADD,AX	; SAVE FOR OUTPUT TO CRT
	MOV	AL,STADD	; GET THE SECOND ADDRESS BYTE
	CALL	HEX_ASC 	; CONVERT IT TO ASCII TOO
	MOV	ASCADD+2,AX	; AND SAVE IT ALSO
;
	MOV	AH,9		; DISPLAY STRING FUNCTION
	MOV	DX,OFFSET ASCADD ; ADDRESS OF MESSAGE
	INT	21H		; CALL DOS
	MOV	AL,STADD	; INCREMENT STARTING ADDRESS
	ADD	AL,BYT		; BY NUMBER OF BYTES IN A LINE
	MOV	STADD,AL
	JNC	DLINES
	INC	STADD+1 	; INCREMENT HIGH BYTE IF NECESSARY
;
;  OUTPUT ONE LINE
;
DLINES: MOV	CX,BYT		; NUMBER OF BYTES TO DISPLAY IN A LINE
	MOV	DI,OFFSET ASCCHAR ; ADDRESS OF ASCII BUFFER
;
LUP4:	MOV	AL,ES:[SI]	; PICK UP NEXT MEMORY BYTE
	PUSH	AX		; SAVE IT
	CMP	AL,7FH		; SEE IF IT CAN BE DISPLAYED ON CRT
	JGE	DASC1		; BRANCH IF NOT
	CMP	AL,20H
	JGE	DASC2		; BRANCH IF YES
DASC1:	MOV	AL,'.'          ; SUBSTITUTE PERIOD
DASC2:	MOV	[DI],AL 	; STORE FOR LATER DISPLAY
	INC	DI		; INCREMENT BUFFER POINTER
	POP	AX		; RETRIEVE MEMORY BYTE
	CALL	HEX_ASC 	; CONVERT IT TO TWO ASCII CODES
	MOV	CHARS,AX	; STORE THEM
	PUSH	SI		; SAVE POINTER
	PUSH	CX		; SAVE BYTE COUNTER
	MOV	DX,OFFSET CHARS ; ADDRESS OF STRING
	MOV	AH,9		; DISPLAY STRING FUNCTION
	INT	21H		; CALL DOS TO DISPLAY THIS BYTE
	POP	CX		; RESTORE BYTE COUNTER
	POP	SI		; RESTORE POINTER
	INC	SI		; INCREMENT SOURCE POINTER
	LOOP	LUP4		; REPEAT UNTIL DONE
;
	MOV	CX,BYT+2	; NUMBER OF TOTAL SYMBOLS
	MOV	DI,OFFSET ASCSYM ; ADDRESS OF STRING
LUP5:	MOV	DL,[DI] 	; NEXT CHARACTER TO DISPLAY
	PUSH	DI		; SAVE REGISTERS
	PUSH	CX
	MOV	AH,2		; DISPLAY CHARACTER FUNCTION
	INT	21H		; CALL DOS TO DISPLAY SYMBOLS
	POP	CX		; RESTORE REGISTERS
	POP	DI
	INC	DI		; INCREMENT SYMBOL ADDRESS
	LOOP	LUP5		; REPEAT UNTIL FINISHED
;
	CALL	CRLF		; OUTPUT CR AND LF
	POP	BX		; RESTORE LINE COUNTER
	DEC	BX		; DECREMENT LINE COUNTER
	JNZ	LUP3		; REPEAT FOR ALL LINES
;
	MOV	AX,DS
	MOV	ES,AX		; RESTORE ES REGISTER
	RET			; RETURN TO CALLING ROUTINE
	PAGE
;									      ;
;*****************************************************************************;
;									      ;
;	KEYBOARD INPUT SUBROUTINE     VERSION 2/19/84			      ;
;									      ;
;	THIS ROUTINE READS ASCII CODES FROM THE KEYBOARD INTO A BUFFER	      ;
;									      ;
;	ENTRY:	AH = MAX NUMBER OF CHARACTERS TO READ EXCLUDING ANY CR CODE   ;
;		DI = FWA OF THE BUFFER IN WHICH TO STORE THE CHARACTERS       ;
;									      ;
;	EXIT:	AL = THE LAST CHARACTER READ EXCLUDING ANY CR CODE	      ;
;		AH = THE NUMBER OF CHARACTERS READ EXCLUDING BS OR CR CODES   ;
;		DI = ADDRESS OF THE LAST CHARACTER READ 		      ;
;		     ONE LESS THAN BUFFER FWA IF ONLY CR IS RECEIVED	      ;
;									      ;
;	BACKSPACE AND CARRIAGE RETURN CODES ARE PROCESSED BY DOS	      ;
;									      ;
;	THE BUFFER MUST HAVE THE FIRST TWO BYTES AVAILABLE FOR STORAGE OF     ;
;	THE MAX NUMBER OF CHARACTERS TO READ AND NUMBER OF CHARACTERS READ    ;
;	INCLUDING THE CARRAIGE RETURN CODE				      ;
;									      ;
;	ALTERS: ALL REGISTERS EXCEPT BX ARE ALTERED			      ;
;									      ;
;*****************************************************************************;
;									      ;
KYBD:	PUSH	BX		; SAVE REGISTER
	PUSH	DI		; SAVE BUFFER ADDRESS
	INC	AH		; ALLOW FOR THE CR CODE
	MOV	[DI],AH 	; STORE MAX NUMBER OF WORDS TO READ
	MOV	AX,0C0AH	; CLEAR AND READ KEYBOARD BUFFER
	MOV	DX,DI		; BUFFER ADDRESS IN DX
	INT	21H		; CALL DOS
	POP	DI		; GET BUFFER ADDRESS
	INC	DI
	MOV	AH,[DI] 	; GET NUMBER OF CHARACTERS READ
	MOV	BL,AH		; PUT IN BASE REGISTER
	XOR	BH,BH
	ADD	DI,BX		; SET DI TO LAST CHARACTER POSITION
	MOV	AL,[DI] 	; GET LAST CHARACTER READ
	POP	BX		; RESTORE REGISTER
	RET			; RETURN TO CALLING ROUTINE
	PAGE
;									      ;
;*****************************************************************************;
;									      ;
;	CONVERT ASCII TO HEX		    VERSION 2/21/84		      ;
;									      ;
;	CONVERT TWO ASCII CODES IN AX TO ONE HEX NUMBER IN AL		      ;
;									      ;
;	ENTRY:	AL = UPPER ASCII CODE					      ;
;		AH = LOWER ASCII CODE					      ;
;									      ;
;	EXIT:	AL = ONE HEX NUMBER  (TWO HEX DIGITS)			      ;
;		CARRY FLAG IS SET IF AN ILLEGAL HEX DIGIT IS IN THE INPUT     ;
;									      ;
;	ALTERS: REGISTERS AL AND AH ARE ALTERED 			      ;
;									      ;
;	NOTE:	VALID FOR ALL HEX NUMBERS 00 TO FF			      ;
;									      ;
;*****************************************************************************;
;									      ;
ASC_HEX:PUSH	BX		; SAVE REGISTERS
	MOV	BX,AX		; SAVE THE ASCII CODES
	CALL	CNVRT1		; RETURNS UPPER DIGIT IN LOWER AL
	SHL	AL,1		; PUT IT IN UPPER AL
	SHL	AL,1
	SHL	AL,1
	SHL	AL,1
	XCHG	AL,BH		; SAVE IN BH & GET LOWER DIGIT
	CALL	CNVRT1		; RETURNS LOWER DIGIT IN LOWER AL
	OR	AL,BH		; COMBINE BOTH HEX DIGITS INTO AL
	POP	BX		; RESTORE REGISTERS
	CLC			; CLEAR CARRY/ERROR FLAG
	RET			; RETURN TO CALLING ROUTINE
;
CNVRT1: SUB	AL,30H		; PARTIAL CONVERSION
	JL	CERR		; AL < 0 => ILLEGAL HEX CODE
	CMP	AL,9		; CHECK FOR 0 - 9
	JLE	CEND		; AL <= 9 => 0 - 9
	CMP	AL,11H		; CHECK FOR A - F
	JL	CERR		; AL < 11H => ILLEGAL (between '9' and 'A')
	SUB	AL,7		; CONVERT A - F
	CMP	AL,0FH		; AL > 0FH => ILLEGAL
	JG	CERR		; ERROR EXIT
CEND:	RET			; RETURN TO CONTINUE
;
CERR:	POP	AX		; ERASE FIRST RETURN ADDRESS
	SUB	AX,AX		; SET RESULT TO ZERO
	POP	BX		; ADJUST STACK
	STC			; SET CARRY/ERROR FLAG
	RET			; RETURN TO CALLING ROUTINE
	PAGE
;									      ;
;*****************************************************************************;
;									      ;
;	CONVERT HEX TO ASCII						      ;
;									      ;
;	CONVERT FROM TWO HEX DIGITS IN AL TO TWO ASCII CODES IN AX	      ;
;									      ;
;	ENTRY:	AL = HEX NUMBER 00H TO FFH				      ;
;									      ;
;	EXIT:	AL = UPPER ASCII CODE					      ;
;		AH = LOWER ASCII CODE					      ;
;									      ;
;	ALTERS: REGISTERS AL AND AH ARE ALTERED 			      ;
;									      ;
;	NOTE:	THIS CONVERSION IS VALID FOR ALL HEX CODES		      ;
;									      ;
;*****************************************************************************;
;									      ;
HEX_ASC:
	MOV	AH,AL		; Save upper hex digit
	CALL	CVRT2		; Convert hex lower digit
	XCHG	AH,AL		; Save it in AH / get upper digit to convert
	SHR	AL,1		; Shift into low nibble
	SHR	AL,1
	SHR	AL,1
	SHR	AL,1
	CALL	CVRT2		; Convert upper hex digit
	RET			; Return to calling routine
;
;  CONVERT ONE HEX DIGIT IN LOWER NIBBLE OF AL INTO ONE ASCII CODE IN AL
;
CVRT2:	AND	AL,0FH		; Separate out one hex digit
	OR	AL,30H		; Convert 0 - 9
	CMP	AL,'9'          ; Check for A - F
	JLE	CVRT4		; Skip if 0 - 9
	ADD	AL,07H		; Convert A - F
CVRT4:	RET			; Return to calling routine
	.XLIST
	SUBTTL	Messages and Data Storage
	PAGE	+
	.LIST
;
;  MESSAGES and DATA STORAGE
;
SEGMSG	DB	CR,LF,LF,'DO YOU WANT TO DISPLAY A DIFFERENT SEGMENT ? (Y/N) $'
;
SEGMSG2 DB	CR,LF,LF,'ENTER THE SEGMENT IN HEX $'
;
SEGMSG3 DB	CR,LF,LF,'DISPLAYING FROM SEGMENT NUMBER  $'
;
STMSG	DB	CR,LF,LF,'ENTER THE HEX STARTING ADDRESS $'
;
ENDMSG	DB	CR,LF,'REPEAT TO LOOK AT MORE ? (Y/N) $'
;
CHARS	DW	'  '
	DB	' $'
;
SPACE	DB	'       $'
ASCTOP	DB	'   $'
;
ASCSYM	DB	'  '
ASCCHAR DB	16 DUP(' ')
;
SEGADD	DB	0,0,0,0
ASCSEG	DW	0,0
	DB	'  $'
;
STADD	DB	0,0,0,0
ASCADD	DW	0,0
	DB	'  $'
KBUFSZ	DB	0,0
KBUF	DB	'    $'
;
	CSEG	ENDS
	END	LOOK
```
{% endraw %}

## LOOK.DOC

{% raw %}
```
LOOK.ASM       24-Feb-84 17585        Accesses: 17

    Keywords: LOOK MEMORY VIEW MASM ASSEMBLER UTILITY

    This is a simple MACRO-86 program for looking through the computer's
    memory. It is faster and simpler than DEBUG for trying to find where DOS
    stores things in RAM, etc.

```
{% endraw %}

## NUSQ.DOC

{% raw %}
```
                  NUSQ - File unsqueeze utility

          Documentation for CP/M-86 and MS-DOS versions
                   Cliff Sharp  April 12, 1984



     NUSQ  is  a utility for expanding squeezed  files  to  their
original  uncompressed state.  Two separate versions of NUSQ  are
available,  one  for  CP/M-86  and one for the  MS-DOS  operating
system.

     NUSQ has two operating modes.  In the command mode, a single
instruction to NUSQ is passed from the command line which invokes
NUSQ.  The command mode requires less effort to use when you have
only  one file to unsqueeze,  or when the names of the files  you
wish  to unsqueeze can all be specified by one  "wildcard"  name.
However,  when  you  have more than one file to unsqueeze  and  a
"wildcard" won't do the job right,  or when the files you want to
unsqueeze are on more than one disk,  the interactive mode allows
you to specify only those files which you want processed, without
reloading the program every time.   In the interactive mode, NUSQ
executes one command, then waits for another.

                          COMMAND MODE

     To  unsqueeze  only one file,  the command  mode  invocation

                        A>nusq nerts.aqm

will unsqueeze the file NERTS.AQM.  You don't need to specify the
name of the output file (in fact, you can't); the name was stored
within the file at the time it was squeezed,  and that name  will
be  used  to  create  the new file.   (If you  want  to  name  it
differently after you have unsqueezed it,  use the REName command
when NUSQ is finished.)

     You  can  unsqueeze all squeezed files on a single  disk  by
issuing the command

                          A>nusq *.?q?

Theoretically at least,  all file squeezers create an output file
whose name is the same as that of the original file,  except that
the  filename extension field is modified by changing the  middle
letter to a "Q".  (If a file has no filetype, a 'QQQ' is appended
for  the  file type for the encoded file.  When a file  has  been
renamed after being squeezed, this cannot be the case; hopefully,
the  person  who renamed it remembered the "Q".)  The  "wildcard"
file  specification shown above tells NUSQ to unsqueeze any  file
it  finds (on the default disk) which has a "Q" in  the  filename
extension;  that should get NUSQ to unsqueeze every squeezed file
on  the disk.   NUSQ will display the name of each file it finds,
and the name of the output file it produces, as it proceeds:

                  NERTS.AQM -> NERTS.ASM
                  ORGPLOTZ.DQC -> ORGPLOTZ.DOC

     Because  NUSQ checks the first two bytes of each input  file
for a valid Squeeze Signature (0FF76 hex), it is possible to say:

                            nusq *.*

and get the same results as nusq *.?q?.   It is faster,  however,
to  use  the  *.?q?  method,  as  that will  preclude  a  lot  of
unnecessary  file openings.

    NUSQ  will also accept more than one filename on the  command
line:

              A>nusq nerts.aqm orgplotz.dqc frop.cq

     To  use a different disk for output than for input,  end the
command line with just the drive designation. Example:

                      A>nusq giggle.tqt b:

will write the output file (ostensibly GIGGLE.TXT) on drive B:.
You will find that NUSQ is very forgiving, as:

                      A>nusq b: giggle.tqt

will accomplish the same thing.

     Let's  suppose now that you have a large number of  squeezed
files on your disk,  and you only want to unsqueeze some of them.
Unless  you  can specify only those files by using  a  "wildcard"
name,  you'll  probably  find it easier to achieve your  goal  by
using  the interactive mode of NUSQ.   Another instance where  it
would  be easier to use interactive mode is one where  the  files
you wish to unsqueeze are on more than one disk, in more than one
drive.  The command

                             A>nusq

displays the startup message, then prompts for command input with
an asterisk ("*").

NUSQ  Version x.xx
Dave Rand, Paul Homchick and Cliff Sharp  xx/xx/xx
Use: NUSQ afn [afn afn ...] [destination drive:]
*_

(The underline shows the cursor position; my name appears only in
the  MS-DOS  version.)   At the asterisk,  you  type  a  filename
("wildcards"  are allowed here,  too).   NUSQ will unsqueeze  the
file,  then  print  the asterisk prompt again and wait  for  more
commands.   When you're finished and want to exit NUSQ,  a  blank
line or ^C will return you to the operating system.

     As  distributed,  NUSQ  won't  write over an  existing  file
without the user confirming the operation.   Something very  like
the following will happen:

          A>nusq foo.bqr

          nusq: FOO.BQR -> FOO.BAR already exists,
                Overwrite <Y>es, <N>o? overwriting...

In this case the user answered "Y" at the question mark, and NUSQ
went  ahead  with the operation.   If "N" is  the  response,  the
unsqueeze  operation is aborted,  and the program goes on to  the
next item in the list (or exits, if the list is empty).

If  you  would  rather have NUSQ write over existing  files  with
wanton abandon,  without pausing and asking for confirmation, use
DEBUG.COM to patch location 0103H to be 00H instead of 0FFH.   An
example of this patch:

                  A>debug b:nusq.com
                  -e103
                  xxxx:0103 FF.00
                  -w
                  Writing XXXX bytes
                  -q

                  A>

                       IN CASE OF TROUBLE


     First,  no  matter HOW sure you are that you're doing things
correctly,  try  another  method of using  NUSQ.   If  you  tried
command mode without luck,  try the interactive mode; if you were
in the interactive mode when it bombed,  try command mode.   Make
sure  you try at least one command that is just like one shown in
this document (but,  of course, use the name of your file instead
of NERTS or ORGPLOTZ) before you conclude that things are awry.

     Occasionally,  for one reason or another,  it's possible  to
get a bad copy of a program or file; transmission errors and disk
errors  have  been  known to cause many problems.   (If  you  can
successfully unsqueeze at least one squeezed file,  you  probably
have  a good copy of the program;  if so,  your copy of the  file
you're  trying to unsqueeze may be the culprit.)  The best way to
tell  if  this is the case is to use a utility like CRCK  on  the
original copy of the offending file/program, and on your copy; if
the numbers you get don't match,  you most likely have a bad copy
of the file/program you checked and should obtain another copy of
it.  (Check the new copy, too, when you get it.)

     This  may sound silly,  but do you have the correct  version
for your operating system?  If you try to run the CP/M-86 version
under  MS-DOS,  strange things may happen;  same for  the  MS-DOS
version  under  CP/M-86.   The MS-DOS version has an "M"  in  the
version  number.   Also,  try  using  TYPE to actually  type  the
executable  file  on  your screen;  you'll most  likely  see  the
author's  name.   (See the history later in this document to  see
who wrote what.)

     If all that checks out,  the logical next step is to compare
notes with someone locally to see if anyone else is  experiencing
problems.  The system operator ("sysop") of the system from which
you  obtained the software can usually be of help if you tell him
which  program you're using (CP/M-86 or MS-DOS) and the  name  of
the    file   you're   trying   unsuccessfully   to    unsqueeze.
Alternatively,  you  can leave a message addressed to "ALL" on  a
local  bulletin board;  usually some helpful person will jump  in
with suggestions.

     If  you've tried all this,  and you're still sure you have a
problem,  then it's last-resort time.  Contact the author of your
version of the program.   His name,  and a way to contact him, is
in the very beginning of the NUSQ.COM file; TYPE NUSQ.COM and you
should see it.   (If that doesn't work,  use DDT,  SID or DEBUG.)
This  is  by far the slowest method of  resolving  problems,  and
people  who  contact  program authors  with  problems  caused  by
operator  error are usually looked upon unfavorably,  so do  this
only  if  all  else fails.   Be sure to include the name  of  the
system  where you got your copy of the program,  the name of  the
file  you're trying to unsqueeze and the place where you got  the
file,  and  a description of what went wrong.   It might also  be
nice  to know the names of any people who have tried to help  you
with your problem so far.

                          ANNOUNCEMENT

     A look at the signon messgae in interactive mode will reveal
that NUSQ is the result of committee action.   Said committee was
unable  to agree on whether the source code should be distributed
as public domain code.   Consequently,  source code is not avail-
able.

                             HISTORY


     NUSQ  is  a  file unsqueezer  utility  written  entirely  in
assembly language.  The first file squeezer and unsqueezer in the
public  domain  were  written  by  Richard  Greenlaw,  in  the  C
programming language.   A Z80 assembly language version was  done
by Gail Zacharias at MIT in the Spring of 1983.  In late '83 Dave
Rand wrote an 8080 version,  which went through several versions,
culminating  in  USQ120.COM.  Paul Homchick assumed the  task  of
converting  Dave's  efforts to 8086/8088  assembly  language  for
execution  under  CP/M-86 in early 1984,  and I converted  Paul's
version to run under MS-DOS a bit later.


                          CP/M VERSIONS

        1.08    January  28,  1984.   First released version
                uploaded to Compuserve.

        1.09c   March  24,  1984.   Carriage Return on empty
                line exits program.   Optimized  tree-walker
                adapted  from   MS-DOS  version resulting in
                15%  speed  increase.

                         MS-DOS VERSIONS

        1.00M   March 21, 1984.   Original version uploaded
                to  Compuserve.   Had serious bug that some-
                times resulted in short files with no  warn-
                ing.

        1.01M   March 31,  1984.   Carriage Return on  empty
                line at Command prompt ("*"), now returns to
                DOS  instead of giving another prompt  line.
                Short File BUG still in this version!

        1.02M   April  12,  1984.   Fixed Random Block Write
                DOS  calls.   Files  now unsqueeze to  exact
                length,  instead of 128-byte multiples as in
                prior versions.   Buffer flush code fixed to
                eliminate short file bug.

CP/M and CP/M-86 are trademarks of Digital Research, Inc.
MS (as in MS-DOS) is a trademark of Microsoft, Inc.

```
{% endraw %}

## PARCHK.ASM

{% raw %}
```
    page	,132
    title  PARCHK.ASM -- Replacement for IBM-PC ROM BIOS parity error routines
;*****************************************************************************
;*
;* copyright(C) 1984	Skip Gilbrech (CIS 71445,534)
;*			90 Lexington Ave. #10-G
;*			New York, NY 10016
;*			212-685-0551
;*
;* This program may be freely copied/altered for any non-commercial
;* purpose but may not be sold or used in any way as part of any
;* profit-making venture without permission of the author.
;*
;* author = skip gilbrech
;* date written = 02/19/84
;*
;* environment:
;*  system = ibm pc (dos 2.0 - but should work on any version)
;*  processor = microsoft 8086 macro assembler
;*
;* USAGE: PARCHK /R (or) /D
;* /R = Report all errors which occur
;* /D = Disable reporting after an error
;*
;* PARCHK is a resident program which replaces the ibm pc rom-bios NMI
;* (non-maskable interrupt) handler.
;*
;* It will report any memory parity errors to the operator, but will allow
;* the system to continue running.  An installation option lets you choose
;* whether or not to receive continued reports after the first error for
;* a particular channel (system memory or i/o channel).  Regardless of the
;* option chosen, however, the first error for each channel will always be
;* reported.
;*
;* I wrote PARCHK mostly because of the frustration I felt a few days ago
;* when the message 'PARITY CHECK 2' appeared suddenly on my pc's screen.
;* I had seen the message a couple of times before, but never at a time
;* like this:  The machine contained over 3 hours of unsaved work, and I
;* knew there was not a thing I could do about it, since the parity error
;* handler in the rom-bios simply disables interrupts and issues a HLT
;* instruction to the cpu.
;*
;* I have also read a number of messages on the Compuserve IBM-PC SIG
;* which indicate that I'm not the only one to have had this experience.
;*
;* IBM's approach in the rom-bios makes some sense.  The condition of
;* system ram is unknown following a parity error, and continued operation
;* MIGHT result in all sorts of horrible consequences, i.e., hopelessly
;* corrupted data on disk, etc.
;*
;* On my system, though, memory parity errors have been extremely rare,
;* and have probably resulted from a slight glitch on the power line,
;* static, etc.  I really have no idea what would have happened if I
;* had been able to continue operation in those cases.	However, I have
;* crashed the system often enough (most of the time probably executing
;* random data or instructions somewhere) to have some confidence that the
;* most likely, if not the only possible, outcome of a processor gone wild
;* is simply a dead machine, i.e. interrupt vectors wiped out, etc., which
;* must be powered-down and up.
;*
;* So, for me, the risks of continued operation -- at least until important
;* data in ram are saved -- seem relatively small when balanced against
;* the CERTAINTY of lost data when the rom-bios routine gets control:  If
;* data HAS been corrupted, at least there remains the chance of later
;* being able to examine and possibly fix it.
;*
;* Continued operation still DOES represent a risk, however, especially
;* if parity errors occur often, since that probably indicates a serious
;* hardware problem somewhere in the system.
;*
;* If you don't want to take that risk, please don't use this program,
;* as I can't, of course, take responsibility for any damage, real or
;* otherwise, it may cause.
;*
;* On the other hand, if PARCHK is ever responsible for saving a multi-
;* million dollar oil deal which would otherwise have fallen victim to
;* an unruly parity bit......  (suffice it to say that I would deem it
;* an honor to allow you to express your gratitude)
;*
;* The resident part of this code, by the way, uses up a little over 1K
;* of ram.  Most of that space is taken up by routines which save the
;* current screen, write the error message, and then restore the screen.
;* I made no particular effort to make that code as compact as possible,
;* so, if space is at a premium, and/or you like doing such things, please
;* feel free to squeeze and optimize to your heart's content...  As an
;* alternative, if you don't mind junk on your screen, it would be fairly
;* easy to replace most of the error message code with a short routine which
;* uses the rom-bios 'write teletype' function to print a message, but
;* doesn't waste any memory by saving the screen.  It's probably best not
;* to use dos functions here, since a parity error can be reported at any
;* time, even with interrupts disabled and/or while in the middle of a dos
;* routine -- and pc/ms-dos is notoriously non-reentrant.
;*
;**************************************************************************
    page
;**************************************************************************
;*
;*	constants
;*
;**************************************************************************

; general equates:

false		equ	0
true		equ	not false

cr		equ	0dh	; carriage return
lf		equ	0ah	; line feed
bell		equ	7	; ascii bell
spc		equ	' '     ; ascii space, blank
tab		equ	9	; ascii horizontal tab

; program equates:

dosint		equ	21h	; interrupt number for dos functions
prt_str 	equ	9	; dos print string function
get_vers	equ	30h	; dos get version number function
get_int_vec	equ	35h	; dos 2.0 get interrupt vector function
set_int_vec	equ	25h	; dos set interrupt vector function

vidint		equ	10h	; bios video interrupt number
vid_state	equ	15	; bios - get video state
read_curs_pos	equ	3	; bios - read cursor position
set_curs_pos	equ	2	; bios - set cursor position
set_curs_type	equ	1	; bios - set cursor type
write_teletype	equ	14	; bios - write teletype to display
read_ac 	equ	8	; bios - read att/char at curs. position
write_ac	equ	9	; bios - write att/char at curs. position

disp_row	equ	10	; row to display error msg
disp_col	equ	25	; col to display error msg
num_lines	equ	3	; number of text lines to display
normal		equ	7	; normal (white on black) vid. attrib.
reverse_blink	equ	0f0h	; reverse-video blinking vid. attrib.
reverse 	equ	70h	; reverse-video (no blink)

; hardware specific equates:

port_a		equ	60h	; system board 8255 port a address
port_b		equ	61h	; system board 8255 port b address
port_c		equ	62h	; system board 8255 port c address
par_err_mask	equ	0c0h	; mask to test for any parity error
par_ch1_mask	equ	10000000b ; mask to test for system board parity error
par_ch2_mask	equ	01000000b ; mask to test for i/o channel parity error
disa_ch1_mask	equ	00010000b ; mask to disable system board parity checking
enab_ch1_mask	equ	11101111b ; mask to enable system board parity checking
disa_ch2_mask	equ	00100000b ; mask to disable i/o channel parity checking
enab_ch2_mask	equ	11011111b ; mask to enable i/o channel parity checking

nmi_int_no	equ	2	; NMI interrupt number
nmi_port	equ	0a0h	; NMI control port
enable_nmi	equ	80h	; value to output to enable NMI
disable_nmi	equ	0	; value to output to disable NMI

;**************************************************************************

int_vecs	segment at 0
int_vecs	ends

    page
;**************************************************************************

cseg	segment
	assume cs:cseg,ds:cseg

	org	80h			; for processing command line parms.
cmd_ct	label	byte			; number of chars. in command line

	org	100h			; for .COM file
entry:
	jmp	init			; ck for residency, init if not resident

reenable_flag	db	false		; enable continued checking after error?
active_page	db	?		; current active page
curs_pos	dw	?		; current cursor position
orig_nmi_int_vec dd	?		; pointer to orig. NMI service routine

start_row_1	equ	$
par_ch1_msg	db	" PARITY CHECK 1 (System Board) "
length_row	equ	$ - offset start_row_1
par_ch2_msg	db	" PARITY CHECK 2  (I/O channel) "
msg_1		db	"  Parity error reporting for   "
msg_1a		db	" this channel will be disabled "
msg_1b		db	"  this channel will continue   "

scn_storage	dw	(length_row * 5) dup (?) ; storage for current screen
						 ; display

    page
;**************************************************************************
;* This is the start of the new NMI interrupt handler code.
;*
;* 1. Check system board 8255 to determine if a parity error has occurred.
;* 2. If not, pass control to the original NMI vector.
;* 3. If a parity error has occurred:
;*    a. Disable the NMI temporarily.
;*    b. Determine which channel was affected and disable parity reporting.
;*    c. Determine whether error reporting will continue, depending on
;*	 which installation option was selected.
;*    d. Print appropriate message and loop for about 10 seconds.
;*    e. Re-enable reporting on the error channel if the /R option was selected.
;*    f. Re-enable the NMI.

nmi_int_hdlr proc

	pushf		; if we jump to orig. vector, arrive in same condition
	push	ax			;
	in	al,port_c		; read 8255 port
	test	al,par_err_mask 	; has a parity error occurred?
	jnz	nmi_1			; yes, jump to error routine

	pop	ax			; else, restore entering machine state
	popf				;
	jmp	cs:orig_nmi_int_vec	; and pass control to original vector

nmi_1:
	push	ax			; save value read from port c
	mov	al,disable_nmi		; disable NMI
	out	nmi_port,al		;
	pop	ax			; restore port c value

	sti				; allow further interrupts
	push	bx			; save possibly affected registers
	push	cx			;
	push	dx			;
	push	si			;
	push	di			;
	push	bp			;
	push	ds			;
	push	es			;

	push	ax			; save port value again
	mov	ax,cs			; set DS and ES to CS
	mov	ds,ax			;
	mov	es,ax			;

	call	save_screen		; save contents of current display

	pop	ax			; restore port value
	test	al,par_ch2_mask 	; test for i/o channel error
	in	al,port_b		; get value at 8255 port b
	jnz	nmi_2			; jump if i/o channel error

	mov	ah,disa_ch1_mask	; else, put planar disabling mask in AH
	mov	si,offset par_ch1_msg	; put adr of system board msg in SI
	jmp	short nmi_3		; and continue
nmi_2:
	mov	ah,disa_ch2_mask	; put i/o channel disabling mask in AH
	mov	si,offset par_ch2_msg	; put adr of i/o channel msg in SI
nmi_3:
	or	al,ah			; turn on proper bit
	out	port_b,al		; disable appropriate channel to reset
	push	ax			; save mask value in AH

	mov	ax,offset msg_1 	; put adr of 2nd line of message in AX
	mov	bx,offset msg_1a	; put adr of 'remain disabled' msg in BX
	cmp	reenable_flag,false	; is continued checking desired?
	pushf				; save result of comparison
	je	nmi_4			; no, continue
	mov	bx,offset msg_1b	; else, put 'reenable' msg adr in BX
nmi_4:
	call	print_msg		; display our message

; -- loop allow reading the message

	mov	cx,15			; trying to hit 10 seconds...
nmi_5:
	mov	bx,cx			; save outer loop count
	sub	cx,cx			; do each inner loop 65536 times
nmi_6:
	loop	nmi_6			; spin wheels...
nmi_7:
	loop	nmi_7			; ...
	mov	cx,bx			; restore outer loop count
	loop	nmi_5			; and spin some more until done...

	call	restore_screen		; restore original display

	popf				; flags show if reenabling desired
	pop	ax			; restore mask value in AH
	je	nmi_8			; continue if reenabling not wanted

	not	ah			; else, flip bits in AH
	in	al,port_b		; get 8255 port b value
	and	al,ah			; turn masked bit off again
	out	port_b,al		; and reenable the channel
nmi_8:
	pop	es			; restore machine state
	pop	ds			;
	pop	bp			;
	pop	di			;
	pop	si			;
	pop	dx			;
	pop	cx			;
	pop	bx			;
	mov	al,enable_nmi		; reenable NMI
	out	nmi_port,al		;
	pop	ax			;
	popf				;
	iret

nmi_int_hdlr endp

    page
;**************************************************************************
; Save current contents of the portion of the screen we will overwrite.
; Also save the current active page and cursor position.
; Registers not preserved.

save_screen	proc near

	mov	ah,vid_state		; get active page
	int	vidint			; bios video interrupt
	mov	active_page,bh		; store it for others..
	mov	ah,read_curs_pos	; get cursor position and type
	int	vidint			;
	mov	curs_pos,dx		; store data

	mov	dx,(disp_row * 256 + disp_col)	; cursor at start of our msg
	mov	cx,num_lines + 2	; save enough for top & bot. blank
					;  lines, and our message
	mov	di,offset scn_storage	; point DI to buffer
ss_1:
	push	dx			; save cursor position
	push	cx			; save outer loop count
	mov	cx,length_row		; get number of chars. per row
ss_2:
	push	di			; save buffer ptr
	mov	ah,set_curs_pos 	; set cursor pos.
	int	vidint			;
	mov	ah,read_ac		; get attr/char at curs. pos
	int	vidint			;
	pop	di			; restore buffer ptr.
	stosw				; store attr/char in buffer
	inc	dl			; bump DL to next column
	loop	ss_2			; do for the entire row

	pop	cx			; restore outer loop count
	pop	dx			; restore cursor position
	inc	dh			; bump DH to next row
	loop	ss_1			; do for required number of rows
	ret

save_screen	endp

    page
;**************************************************************************
; Restore original contents of the screen.
; Also restore the current cursor position.

restore_screen	proc near

	mov	bh,active_page		; get active page in BH
	mov	dx,(disp_row * 256 + disp_col)	; cursor at start of our msg
	mov	cx,num_lines + 2	; restore amount saved...
	mov	si,offset scn_storage	; point DI to buffer
rs_1:
	push	dx			; save cursor pos.
	push	cx			; save outer loop count
	mov	cx,length_row		; get number of chars. per row
	push	si			; save buffer ptr
rs_2:
	mov	ah,set_curs_pos 	; set cursor pos.
	int	vidint			;
	pop	si			; restore buffer ptr
	lodsw				; get the attr/char in AX, bump SI
	push	si			; save it...
	mov	bl,ah			; put attr. where bios wants it
	mov	ah,write_ac		; write attr/char at curs. pos
	push	cx			; save row chars remaining
	mov	cx,1			; tell bios to write 1 char.
	int	vidint			;
	pop	cx			; restore row chars remaining
	inc	dl			; bump DL to next column
	loop	rs_2			; do for the entire row

	pop	si			; keep stack in order....
	pop	cx			; restore outer loop count
	pop	dx
	inc	dh			; bump DH to next row
	loop	rs_1			; do for required number of rows

	mov	dx,curs_pos		; restore original cursor pos
	mov	ah,set_curs_pos 	;
	int	vidint			;
	ret

restore_screen	endp

    page
;**************************************************************************
; Print message to console
; 1st and last line blanks - start at current curs. pos.
; SI has adr. of 1st string, AX has second, and BX has third.

print_msg	proc near

	push	bx		; push string addresses
	push	ax		;
	push	si		;

	mov	al,bell 	; first put out a beep
	mov	ah,write_teletype ;
	int	vidint		;

	mov	bl,reverse_blink ; reverse-video blinking vid. attrib.
	mov	bh,active_page	; get active page in BH
	mov	cx,length_row	; length of a row
	mov	dx,(disp_row * 256 + disp_col)	; cursor at start of our msg

	call	blank_line	; put out the first blank line
	pop	si		; address of 1st line
	call	char_line	;
	pop	si		; ...2nd line
	mov	bl,reverse	; don't blink for the rest of msg
	call	char_line	;
	pop	si		; ...3rd line
	call	char_line	;
	call	blank_line	; ... and last blank line
	mov	dx,curs_pos	; restore original cursor pos
	mov	ah,set_curs_pos ;
	int	vidint		;
	ret

blank_line:			; write CX blanks, bump row position
	mov	ah,set_curs_pos ; set cursor pos.
	int	vidint		;
	mov	ah,write_ac	; write attr/char at curs. pos
	mov	al,' '          ; write blanks
	int	vidint		;
	inc	dh		; bump row position
	ret

char_line:

; -- attrib. in BL, active page in BH, count in CX, starting pos. in DX
;    get chars. starting at DS:SI

	push	cx			; save count of chars. in line
	push	dx			; save starting curs. pos.
	push	si			; save buffer ptr
cl_1:
	mov	ah,set_curs_pos 	; set cursor pos.
	int	vidint			;
	pop	si			; restore buffer ptr
	lodsb				; get char. from message string in AL
	push	si			; save bumped string ptr.
	push	cx			; save chars. remaining in line
	mov	cx,1			; so bios will write one char.
	mov	ah,write_ac		; write attr/char at curs. pos
	int	vidint			;
	pop	cx			; restore chars. remaining in line
	inc	dl			; bump DL to next column
	loop	cl_1			; do for the entire row

	pop	si			; keep stack in order....
	pop	dx			; restore starting curs. pos.
	inc	dh			; bump DH to next row
	pop	cx			; restore count of chars. in line
	ret

print_msg	endp

; -- This is the end of the code which will be made permanently resident.

end_nmi_int_hdlr	equ	$
len_nmi_int_hdlr	equ	(end_nmi_int_hdlr - nmi_int_hdlr)

    page
;**************************************************************************

install_msg	db cr,lf,"PARCHK (v 1.0) installed -- Copyright (C) 1984 Skip Gilbrech",cr,lf,'$'
resident_msg	db cr,lf,bell,"PARCHK (v 1.0) already resident",cr,lf,'$'

usage_msg	db cr,lf

db "PARCHK (v 1.0) -- Copyright (C) 1984 Skip Gilbrech",cr,lf,cr,lf

db "USAGE: PARCHK /R (or) /D",cr,lf
db "/R = Report all errors which occur",cr,lf
db "/D = Disable reporting after an error",cr,lf,cr,lf

db "PARCHK replaces the ibm pc rom-bios NMI (non-maskable interrupt) handler.",cr,lf
db "It will report any memory parity errors to the operator, but will allow",cr,lf
db "the system to continue running.  An installation option lets you choose",cr,lf
db "whether or not to receive continued reports after the first error for",cr,lf
db "a particular channel (system memory or i/o channel).  Regardless of the",cr,lf
db "option chosen, however, the first error for each channel will always be",cr,lf
db "reported.  The source file, PARCHK.ASM, contains some cautions which",cr,lf
db "you should read before using this program.",cr,lf,cr,lf,'$'

    page
;**************************************************************************
;* Initialization procedure:
;*
;*	1. Check whether the routine is already resident by getting the current
;*	   interrupt vector and checking whether our code is servicing it.
;*	   If so, just print message and exit without installing
;*	2. Check command line to see if continued checking is wanted after
;*	   error and set flag accordingly.  If no parms or unknown parms,
;*	   print informational message and exit without installing.
;*	3. Otherwise, change vector to point to our handler, print installation
;*	   message, and execute dos 'terminate but stay resident' interrupt,
;*	   installing only the code which will actually be used.
;*
;* The idea, and much of the code, for the 'testresident' routine, came
;* from Tony A. Rhea's KEYSTAT program.  His copyright notice is reproduced
;* below:
;*
;*	KEYSTAT -- Copyright (C) 1983 Tony A. Rhea
;*	This program may be copied for non-commercial use.
;*	Adapted from KEYFLAGS (PC-World, Oct. 83, page 266) by Morton Kaplon
;*

init	proc	near

	call	testresident		; see if handler already resident,
	jz	init_1			; ZF set = already resident -- print msg and exit

	call	get_parms		; see if reenabling NMI desired, set flag
	jc	init_2			; if parm error, print usage message
					; else, install the handler
	mov	al,nmi_int_no		; interrupt number in AL
	mov	ah,set_int_vec		; funct. number for set int. vector
	mov	dx,offset nmi_int_hdlr	; offset of resident code
	int	dosint			; set the vector

	mov	dx,offset install_msg	; print install message
	mov	ah,prt_str		;
	int	dosint			;
	mov	dx,offset end_nmi_int_hdlr ; set DX to end of resident code
	int	27h			; dos terminate but stay resident func.

init_1:
	mov	dx,offset resident_msg	; msg showing already installed
	jmp	short init_3		; print it and exit
init_2:
	mov	dx,offset usage_msg	; general info. msg.
init_3:
	mov	ah,prt_str		;
	int	dosint			;
	int	20h			; return to dos (nothing made resident)

init	endp

    page
;**************************************************************************
;* see if our handler is already resident -- zero flag set if it is.
;*
;* AX, BX, CX, SI, DI changed, ES preserved

testresident proc near

	push	es			;
	mov	al,nmi_int_no		; interrupt number in AL
	call	get_vec 		; interrupt vector returned in ES:BX
	mov	orig_nmi_int_vec,bx	; store IP of current servicer
	mov	orig_nmi_int_vec[2],es	; store CS of current servicer
	mov	cx,len_nmi_int_hdlr	; number of bytes to match
	mov	si,offset nmi_int_hdlr	; point DS:SI to our code
	mov	di,bx			; make ES:DI point to current handler
	cld				; auto increment
	repe	cmpsb			; compare while equal - zero flag set on exit
					; if all bytes matched (already resident)
	pop	es			;
	ret

testresident endp

    page
;**************************************************************************
;* Get interrupt vector for interrupt number in AL.  On exit, ES:BX contain
;* CS:IP for vector.
;*
;* Only ES and BX changed

get_vec proc near

	push	ax			; save entering value
	push	ax			; save interrupt number requested
	mov	ah,get_vers		; dos get version function
	int	dosint			; major version returned in AL, minor in AH
	pop	bx			; restore int. number requested
	cmp	al,2			; less than 2 = pre dos 2.0
	jb	gv_direct		; get vector directly

	mov	al,bl			; move requested interrupt vector into AL
	mov	ah,get_int_vec		; dos get int. vector function
	int	dosint			; CS:IP returned in ES:BX
	pop	ax			;
	ret

gv_direct:				; get vector directly
					; first, convert number in BL to offset in BX
	xor	bh,bh			; make sure BH = 0
	shl	bx,1			; multiply by 4
	shl	bx,1			;
	mov	ax,int_vecs		; point ES to segment for int. vectors
	mov	es,ax			;
	mov	ax,es:[bx+2]		; get CS value into AX
	mov	bx,es:[bx]		; get IP value into BX
	mov	es,ax			; mov CS value into ES
	pop	ax			;
	ret

get_vec endp

    page
;**************************************************************************
;* Scan command line for /R or /D installation option -- carry set
;* on exit if no valid parm.
;*
;* AX,BX,SI changed

get_parms	proc near

	mov	bx,offset cmd_ct	; BX pts to number of cmd line chars
	mov	si,[bx] 		; get count
	inc	bx			; point BX to 1st char
	and	si,0ffh 		; max. 127 chars. - set flags
	jz	gp_err_exit		; no parms, skip the rest
	mov	byte ptr [bx][si],0	; make command line null terminated

gp_top_loop:
	mov	al,[bx] 		; get the char
	or	al,al			; null?
	je	gp_err_exit		; if so, return error
	cmp	al,spc			; space?
	je	gp_bot_loop		; yes, get another char
	cmp	al,tab			; tab?
	je	gp_bot_loop		; yes, get another char
	cmp	al,'/'                  ; see if possible /R or /D switch
	jne	gp_err_exit		; no, return error
	call	ck_switches		; check parm, carry set on error
	jc	gp_err_exit		; carry set, return error
	jmp	gp_exit 		;

gp_bot_loop:
	inc	bx			; point to next char
	jmp	gp_top_loop		; go get it

gp_err_exit:
	stc				; set carry to show error
gp_exit:				; if got here by jump, carry is reset
	ret

ck_switches:				; ck parms ( BX pts to '/' )
	inc	bx			; point to possible switch
	mov	al,[bx] 		; get char
	cmp	al,'Z'                  ; check if possibly upper-case
	jbe	ck_sw1			; no? continue
	sub	al, 'a' - 'A'           ; make upper-case
ck_sw1:
	cmp	al,'R'                  ; reenable checking after parity error?
	jne	ck_sw2			; no? continue
	mov	reenable_flag,true	; else, set flag
	ret				; and return
ck_sw2:
	cmp	al,'D'                  ; disable checking after error?
	je	ck_sw_exit		; yes, return ok
	stc				; else, set carry to show error

ck_sw_exit:
	ret

get_parms	endp

cseg	ends

end	entry
```
{% endraw %}

## PARCHK.DOC

{% raw %}
```
PARCHK.DOC (description of the PARCHK program)

03/20/84

Skip Gilbrech (71445,534)
90 Lexington Ave. #10-G
New York, NY 10016
(212) 685-0551

USAGE: PARCHK /R (or) /D
/R = Report all errors which occur
/D = Disable reporting after an error

PARCHK is a resident program which replaces the ibm pc rom-bios NMI
(non-maskable interrupt) handler.

It will report any memory parity errors to the operator, but will allow
the system to continue running (or CTRL-ALT-DEL can be pressed during the
printing of the error message, if desired).  An installation option lets
you choose whether or not to receive continued reports after the first error
for a particular channel (system memory or i/o channel).  Regardless of the
option chosen, however, the first error for each channel will always be
reported.

I wrote PARCHK mostly because of the frustration I felt a few days ago
when the message 'PARITY CHECK 2' appeared suddenly on my pc's screen.
I had seen the message a couple of times before, but never at a time
like this:  The machine contained over 3 hours of unsaved work, and I
knew there was not a thing I could do about it, since the parity error
handler in the rom-bios simply disables interrupts and issues a HLT
instruction to the cpu.

I have also read a number of messages on the Compuserve IBM-PC SIG
which indicate that I'm not the only one to have had this experience.

IBM's approach in the rom-bios makes some sense.  The condition of
system ram is unknown following a parity error, and continued operation
MIGHT result in all sorts of horrible consequences, i.e., hopelessly
corrupted data on disk, etc.

On my system, though, memory parity errors have been extremely rare,
and have probably resulted from a slight glitch on the power line,
static, etc.  I really have no idea what would have happened if I
had been able to continue operation in those cases.  However, I have
crashed the system often enough (most of the time probably executing
random data or instructions somewhere) to have some confidence that the
most likely, if not the only possible, outcome of a processor gone wild
is simply a dead machine, i.e. interrupt vectors wiped out, etc., which
must be powered-down and up.

So, for me, the risks of continued operation -- at least until important
data in ram are saved -- seem relatively small when balanced against
the CERTAINTY of lost data when the rom-bios routine gets control:  If
data HAS been corrupted, at least there remains the chance of later
being able to examine and possibly fix it.

Continued operation still DOES represent a risk, however, especially
if parity errors occur often, since that probably indicates a serious
hardware problem somewhere in the system.

If you don't want to take that risk, please don't use this program,
as I can't, of course, take responsibility for any damage, real or
otherwise, it may cause.

On the other hand, if PARCHK is ever responsible for saving a multi-
million dollar oil deal which would otherwise have fallen victim to
an unruly parity bit......  (suffice it to say that I would deem it
an honor to allow you to express your gratitude)

The resident part of this code, by the way, uses up a little over 1K
of ram.  Most of that space is taken up by routines which save the
current screen, write the error message, and then restore the screen.
I made no particular effort to make that code as compact as possible,
so, if space is at a premium, and/or you like doing such things, please
feel free to squeeze and optimize to your heart's content...  As an
alternative, if you don't mind junk on your screen, it would be fairly
easy to replace most of the error message code with a short routine which
uses the rom-bios 'write teletype' function to print a message, but
doesn't waste any memory by saving the screen.  It's probably best not
to use dos functions here, since a parity error can be reported at any
time, even with interrupts disabled and/or while in the middle of a dos
routine -- and pc/ms-dos is notoriously non-reentrant.

```
{% endraw %}

## PE-NOTAB.DOC

{% raw %}
```
                       Personal Editor Aids

                          Patti Anderson
                   Central Texas IBM PC User Group

Defaulting to "NOTABS" Option in Personal Editor

This is a patch that may be applied to PE.EXE to permanently disable compressing
runs of blanks to tabs.  The syntax of the File and Save commands is not
changed; but effectively "notabs" will always be enabled when writing files.
The notabs option of the Edit command remains unchanged.

Do this to a Backup copy of PE.EXE!!!

1.  Rename 'PE.EXE' to 'xx'. (DEBUG doesn't like .EXE files)

2.  Enter 'DEBUG xx'.

3.  Enter 'u 70f2'. DEBUG should reply as follows:

    MOV W,[BP-12],0009
    JMP  70FE
    MOV W,[BP-12],3FFF
    MOV DX,[F05C]
    If the output you get is different, do not continue.

4.  Enter 'e 70f5'.
    When DEBUG replies '09.', type 'ff '. Don't forget the space after ff.
    DEBUG will output '00.'.   Type '3f' and enter.

5.  Enter 'u 70f2'. DEBUG should reply:

    MOV W,[BP-12],3FFF
    JMP  70FE
    MOV W,[BP-12],3FFF
    MOV DX,[F05C]
    If the output you get is different, do not continue.

6.  Enter 'w'.

7.  Enter 'q' to exit DEBUG.

8.  Rename 'xx' to 'PE.EXE'.

```
{% endraw %}

## QS.TXT

{% raw %}
```
QUICK START FOR THE IBM PC AND DOS 2.0

If you are using an IBMPC, DOS 2.0, more then 64k of memory, and are tired
of waiting for the BIOS ram check the following will cure the blues.

First Create a copy of your DOS 2.0 disk.  Anytime you transfer the system use
this modified disk.

At the DOS prompt type 'DEBUG'.  The DEBUG prompt '-' will appear.
Then type, ommitting the comments:

   L 100 0 0 1     <enter> ;load the boot record from disk in drive A:
   A 100           <enter> ;start debug's assemble mode
   JMP 282         <enter> ;jump to the modified portion of the boot record
                   <enter> ;end debug's assemble mode
   A 282           <enter> ;start assemble mode at beginning of new code)
   XOR  AX,AX      <enter> ;zero AX
   OUT  A0,AL      <enter> ;disable NMI
   MOV  BX,1000    <enter> ;Set ES at beginning
   MOV  ES,BX      <enter> ;       of 2nd 64KB block
   XOR  DI,DI      <enter> ;zero DI
   MOV  CX,8000    <enter> ;set counter for 32K writes
   REPZ            <enter> ;write zero's to
   STOSW           <enter> ;        64KB block)
   ES:             <enter>
   CMP  [0000],AX  <enter> ;compare 1st word
   JNZ  2A3        <enter> ;exit if read <> write
   ADD  BX,1000    <enter> ;increment by  64KB)
   CMP  BX,A000    <enter> ;check for 640KB max memory
   JNZ  289        <enter> ;loop if not finished)
   MOV  CL,06      <enter> ;prepare for bit shift
   SHR  BX,CL      <enter> ;do the shift
   MOV  DS,AX      <enter> ;DS=zero
   MOV  [413],BX   <enter> ;store the total amount of memory in BIOS's address
   MOV  AL,80      <enter> ;prepare to enable NMI
   OUT  A0,AL      <enter> ;enable NMI
   JMP  12E        <enter> ;continue on as if nothing happened
                   <enter>
   W 100 0 0 1     <enter> ;write out the modified boot record
   Q                       ;goodbye to debug


These changes modify the boot record.  It should be used only on disks where
the 'system' exists as it overlays the DOS message 'Non-system disk error
replace and strike any key when ready'. Next open up your computer and set the
memory switches to 64k.  Then insert your modified DOS disk and boot up.

Notice the short wait!

To copy the modified boot record on existing disks which contain the system
simply insert your modified DOS disk and type:

    L 100 0 0 1 <enter>    ;load the modified boot record

Now insert the disk you wish to add the modified boot record to and type:

    W 100 0 0 1 <enter>    ;write out the modified boot record

and the disk will be modified.


 By Mike Cumming
 94 Aldershot Blvd
 Winnipeg, Manitoba
 CANADA  R3P 0E1

***SVCS Librarian comment:  This technique is not compatable with some
software.  In particular, attempting to install a QuadRAM drive will crash.
In general, any program which employs an INT 19  (reboot) is a potential
problem.  QUIKUP and QUIKUPQD (SVCS disk No. 043) will get you up nearly
as fast without modification of system software.  Boot sector patches by
the hard disk folk tend to suffer from INT 19 hangups also.

To facilitate installation of the above modifications file QS.RIO has been
supplied for redirected I/O input to DEBUG.  It modifies the boot sector of
the disk in drive A:.  Think first because is doesn't allow for brain lag.
Use the form `DEBUG <QS.RIO'.   Indicate drives as required.   hs
```
{% endraw %}

## REFCD.DOC

{% raw %}
```
+------------------------------------------------------------------------------------+
|    D O S   2 . 1        I N T E R R U P T    2 1       F U N C T I O N   C O D E S |
+------------------------------------------------------------------------------------+
+----+--------------------------+-----------------------+----------------------------+
| AH |    F U N C T I O N       | Entry / Register Use  |        N O T E S           |
+----+--------------------------+-----------------------+----------------------------+
| 00 | Program terminate        | CS=PSP seg. addr.     | Exit vectors are restored  |
| 01 | Keyboard input           | N/A: returns AL       | waits for a char;echoes it |
| 02 | Display output           | puts DL               | break checked for          |
| 03 | AUX (Asynch) input       | N/A: returns AL       | Unbuffered, non-interrupt  |
| 04 | AUX (Asynch) output      | puts DL               |     "        "     "       |
| 05 | Printer output           | puts DL               |                            |
| 06 | Direct CON: I/O          | DL=FF input           | ZF set for no input        |
| 07 | Direct CON: input Noecho | N/A: returns AL       |                            |
| 08 | Console input     Noecho | N/A: returns AL       | Same as Fctn 1 except echo |
| 09 | Print string             | DS:DX ==>string       | string terminated w. $     |
| 0A | Buffered keyboard input  | DS:DX ==>buffer       | first byte is length       |
| 0B | Check std. input status  | AL=FF if input        | AL=00 if no input          |
| 0C | Clear kybd buf. + other  | AL = function no.     | fctns 1,6,7,8,A allowed    |
+----+--------------------------+-----------------------+----------------------------+
| 0D | Disk reset               | N/A                   | Flushes all file buffers   |
| 0E | Select disk              | DL=drive no.          | AL=no drives on system     |
| 0F | Open file                | DS:DX ==> FCB         | AL=FF for error            |
| 10 | Close file               | DS:DX ==> FCB         | AL=FF for error            |
| 11 | Search for first entry   | DS:DX ==> FCB         | AL=FF for no match         |
| 12 | Search for next entry    | DS:DX ==> FCB         | must follow fctn 11        |
| 13 | Delete file              | DS:DX ==> FCB         | AL=FF for error            |
| 14 | Sequential read          | DS:DX ==> FCB         | EOF = 01 or 03 (data)      |
| 15 | Sequential write         | DS:DX ==> FCB         | AL=01(full) 02(bad buffer) |
| 16 | Create file              | DS:DX ==> FCB         | AL=FF for full directory   |
| 17 | Rename file              | DS:DX ==> FCB         | AL=FF for error            |
| 18 | DOS: [internal]          |                       |                            |
| 19 | Current disk             | N/A: returns AL       |                            |
| 1A | Set DTA                  | DS:DX ==> new DTA     |                            |
| 1B | Get FAT (default drive)  | N/A: returns DS:BX    | FAT id byte for dflt drive |
| 1C | Get FAT (select drive)   | N/A: returns DS:BX    | FAT id byte for DL         |
| 1D | DOS: [internal]          |                       |                            |
| 1E | DOS: [internal]          |                       |                            |
| 1F | DOS: [internal]          | Get Drive parm block  | DS:DX ==> DPB              |
| 20 | DOS: [internal]          |                       |                            |
| 21 | Random read              | DS:DX ==> FCB         | AL=00 good read            |
| 22 | Random write             | DS:DX ==> FCB         | AL=00 good write           |
| 23 | File size                | DS:DX ==> FCB         | AL=00 rrf=no.records       |
| 24 | Set random record field  | DS:DX ==> FCB         |                            |
+----+--------------------------+-----------------------+----------------------------+
| 25 | Set interrupt vector     | DS:DX = vector        | Int specified in AL        |
| 26 | Create new PSP           | DX = segment no.      | Use 4B instead             |
+----+--------------------------+-----------------------+----------------------------+
| 27 | Random block read        | DS:DX ==> FCB         | CX = record count          |
| 28 | Random block write       | DS:DX ==> FCB         | CX = record count          |
| 29 | Parse filename           | DS:SI ==> command     | AL = parse service         |
+----+--------------------------+-----------------------+----------------------------+
| 2A | Get date                 | N/A: returns CX:DX    | CX=yr DH=mo DL=day         |
| 2B | Set date                 | CX:DX = new date      |                            |
| 2C | Get time                 | N/A: returns CX:DX    | CH=hrs CL=min DH=secs      |
| 2D | Set time                 | CX:DX = new time      |                            |
| 2E | Set / reset VERIFY       | DL=0, AL=1/0 (on/off  | See 54                     |
+----+--------------------------+-----------------------+----------------------------+
| AH |    F U N C T I O N       | Entry / Register Use  |        N O T E S           |
+----+--------------------------+-----------------------+----------------------------+



+------------------------------------------------------------------------------------+
|    D O S   2 . 1        I N T E R R U P T    2 1       F U N C T I O N   C O D E S |
+------------------------------------------------------------------------------------+
+----+--------------------------+-----------------------+----------------------------+
| AH |    F U N C T I O N       | Entry / Register Use  |        N O T E S           |
+----+--------------------------+-----------------------+----------------------------
| 2F | Get DTA                  | N/A: ES:BX ==>DTA     |                            |
| 30 | Get DOS version number   | N/A: returns AX       | BX=0 CX=0 AL=maj AH=minor  |
| 31 | Stay res. terminate      | AL=retcode DX=size    |                            |
| 32 | DOS: [internal] GETDPB   | DL=Drive number       | DS:DX ==> DPB              |
| 33 | Ctrl-Break check         | AL=00/01 (get/set)    |                            |
|    |                          | DL=00/01 (off/on)     |                            |
| 34 | DOS: [internal] Qcrit    | ES:BX ==> byte        | FF=DOS NOT INTERRUPTABLE   |
| 35 | Get interrupt vector     | N/A: returns ES:BX    | See 25                     |
| 36 | Get disk free space      | DL=drive; returns BX  | DX=tot CX=bytes AX=sectors |
| 37 | DOS: [internal]          | Get/set SWITCHAR      | AL=0/1 DL=char             |
| 38 | Get natl dependent info  | DS:DX ==> memory      | country dependent block    |
+----+--------------------------+-----------------------+----------------------------+
| 39 | MKDIR - Create subdir.   | DS:DX ==> ASCIIZ      | Errors 3,5                 |
| 3A | RMDIR - Remove subdir.   | DS:DX ==> ASCIIZ      | Errors 3,5                 |
| 3B | CHDIR - Change subdir.   | DS:DX ==> ASCIIZ      | Error  3                   |
+----+--------------------------+-----------------------+----------------------------+
| 3C | Create a file  (handle)  | DS:DX ==> ASCIIZ      | CX=attr BX returns handle  |
| 3D | Open a file    (handle)  | DS:DX ==> ASCIIZ      | AL=access code             |
| 3E | Close a file   (handle)  | BX = handle no.       | Error 6 only               |
| 3F | Read           (handle)  | BX = handle no.       | CX=read length             |
| 40 | Write          (handle)  | BX = handle no.       | CX=write length            |
| 41 | Unlink - Dir. delete     | DS:DX ==> ASCIIZ      | Errors 2,5ength            |
| 42 | LSEEK - Move r/w pointer | BX = handle no.       | AX=method CX:DX=offset     |
| 43 | CHMOD - Change file mode | DS:DX ==> ASCIIZ      | AL=function                |
| 44 | IOCTL - I/O control      | BX = handle no.       | AL=function value          |
| 45 | DUP - Dup file handle    | BX = handle no.       | AX returns new handle      |
| 46 | FDUP - Force dup handle  | BX = handle no.       | CX contains second handle  |
+----+--------------------------+-----------------------+----------------------------+
| 47 | Get current directory    | DL = drive            | DS:SI==> 64byte area       |
+----+--------------------------+-----------------------+----------------------------+
| 48 | Allocate memory          | BX = no. para.        | AX returns block start     |
| 49 | Free memory              | ES ==> block          | Errors 7,9                 |
| 4A | Modify allocated memory  | ES = block BX = size  | Errors 7,8,9               |
| 4B | EXEC - load a program    | DS:DX ==>ASCIIZ       | AL=function; 0 or 3        |
+----+--------------------------+-----------------------+----------------------------+
| 4C | EXIT - Terminate         | AL = retcode          | See FC 0                   |
| 4D | WAIT - return code       | N/A: returns AX       |                            |
| 4E | Find first match (ASCIIZ)| DS:DX ==> ASCIIZ      | CX = attrib                |
| 4F | Find next match  (ASCIIZ)| DTA ==> 4E call       | same as 4E                 |
| 50 | DOS: [internal] SET DTA  | set current DTA       |                            |
| 51 | DOS: [internal] GET DTA  | query current DTA     |                            |
| 52 | DOS: [internal] IN-VARS  | acquire variable data |                            |
| 53 | DOS: [internal] SETOWNER | Define DTA owner level|                            |
| 54 | Get VERIFY state         | N/A: AL=0/1 (on/off)  | See FC 2E                  |
| 55 | DOS: [internal] COPYDTA  |                       |                            |
| 56 | Rename a file    (ASCIIZ)| DS:DX ==> ASCIIZ      | same drive only            |
| 57 | Get/Set file date stamp  | BX = handle no.       | DX=date CX=time AL=0/1     |
|    |                          |                       |                            |
| F8 | SET Shell Interrupt (OEM)| DS:DX ==> HANDLER for | Functions F9 thru FF       |
| F9 | First of 8 SHELL service | codes, reserved for   | OEM shell (WINDOW) use     |
+----+--------------------------+-----------------------+----------------------------+
| AH |    F U N C T I O N       | Entry / Register Use  |        N O T E S           |
+----+--------------------------+-----------------------+----------------------------+

                    W A R N I N G                 W A R N I N G

THE MATERIAL PROVIDED IN THIS REFERENCE CARD IS SUBJECT TO CHANGE BY THE VENDOR

OF THE OPERATING SYSTEM AT ANY TIME.

As of PC-DOS Release 2.1 (February, 1984) the above reference card is as complete
as possible. NOTE that the interrupts marked DOS:[internal] are NOT DOCUMENTED in
the DOS manual, and as such are provided FOR INFORMATION ONLY.  Use of these function
codes may cause a program to fail in future releases of the operating system.


If you discover any further information concerning any of these "undocumented"
DOS function codes and interrupts, please leave me EMAIL about it, so that this
summary can be updated.

                                                        John Chapman

```
{% endraw %}

## TABS.ASM

{% raw %}
```
Title	TABS - Align ASCII File
	Page	82,132
	Comment | Version 1.2, April 27, 1984

TABS Command
-----------------

Purpose:   Replace blanks with TAB character(s).

Format:    TABS  d:input.ext  d:output.ext

Remarks:   Any TAB characters found are first expanded. Thus, if TABS
	appear within quoted strings - out of context - they will
	be expanded incorrectly.

	In replacing blanks with tabs, quoted strings are ignored.
	The maximum logical record size is 255, see MAXREC equate.
	Defacto tab columns are 9,17,25,...

	V. Buerg, March, 1984. For public domain use.

-----------------					|

Cseg	Segment Public Para 'CODE'
	Assume	CS:Cseg,DS:Cseg,ES:Nothing

Tabs	Proc	Far
	Push	DS			;DOS convention
	Sub	AX,AX
	Push	AX
	Mov	CS:Stk_Top,SP		;Save stack ptr to insure return
	Mov	AH,30h
	Int	21h			;Verify DOS 2.0 or later
	Mov	DX,Offset Sorry
	Cmp	AL,2
	Jb	Error

	Call	GetFile 		;Get file names

	Call	OpenIn			;Open input

	Call	OpenOut 		;Open output

	Call	Inform			;Display "cooking" message

	Call	GenTab			;Generate tabs

	Call	Flush			;Empty the output buffer

	Mov	DX,Offset EofMsg	;Say END-OF-FILE
Error:	Mov	SP,Stk_Top		;Insure proper return
	Mov	AH,9			;Print any message
	Int	21h

	Call	Close			;Close files

	Ret				;Return to DOS
	Page

Buflen	Equ	16*1024 		;I/O buffer size
Maxrec	Equ	255			;Longest logical record

S_Quote Equ	34			;Single quote
D_Quote Equ	39			;Double quote
Tab	Equ	9
Lf	Equ	10
Cr	Equ	13
Eof	Equ	1Ah

Rec	Db	Maxrec Dup (0)		;Current record
Rlen	Dw	0			;Current record length
Sw	Db	0			;Number of blanks skipped
Qsw	Db	0			;Quote switch
Stk_Top Dw	0			;SP at entry

MsgIn	Db	Cr,Lf,'Enter INPUT file name>  $'
Msg1	Db	Cr,Lf,'Input failed to open>'
InKey	Db	32,32			;Keyboard buffer
Input	Db	64 Dup (0),0,'$'        ;Drive:path\name.ext
IHandle Dw	0			;Input file handle
Ilen	Dw	0			;Input block length
Iptr	Dw	0			;Offset to next char

MsgOut	Db	Cr,Lf,'Enter OUTPUT file name> $'
Msg2	Db	Cr,Lf,'Output failed to open>'
OutKey	Db	32,32
Output	Db	64 Dup (0),0,'$'
OHandle Dw	0			;Output file handle
Olen	Dw	0			;Output block size
Optr	Dw	0			;Offset to next char

Sorry	Db	Cr,Lf,'Sorry, PC DOS Version 2 required',Cr,Lf,'$'
Msg3	Db	Cr,Lf,'I/O error reading',Cr,Lf,'$'
Msg4	Db	Cr,Lf,'I/O error writing',Cr,Lf,'$'
Cooking Db	Cr,Lf,'TABBING:  $'
Mark	Db	' => $'
EofMsg	Db	Cr,Lf,'End of File',Cr,Lf,'$'
NewLine Db	CR,LF,'-$'

Code2	Db	'File not found $'
Code3	Db	'Path not found $'
Code4	Db	'Too many files $'
Code5	Db	'Access denied  $'
	Page

	;	Replace blanks with tabs

GenTab	Proc	Near
Loop:	Call	GetRec			;Get a record
	Mov	CX,Rlen 		; its length
	Sub	BX,BX			;Output column
	Mov	Sw,0			;No blanks yet
	Mov	Qsw,0			;No quotes yet
	Or	CX,CX			;Any data in record?
	Jnz	Set1
	Jmp	Null			; no, just CR-LF

Set1:	Mov	SI,Offset Rec		;Look for blanks and
Wloop:	Lodsb				; replace strings of blanks
	Inc	BX			; with tab characters
	Cmp	AL,D_Quote		;Don't count blanks
	Jne	Chk1			; within single or double
	Xor	Qsw,2			; quoted strings
	Jmp	Chk2

Chk1:	Cmp	AL,S_Quote		;Insert TABs for any
	Jne	Chk3			; blanks skipped before
	Xor	Qsw,1			; a quote
Chk2:	Cmp	Sw,0			;Must re-insert
	Je	Check			; any blanks skipped
	Jmp	Insert			; if not enough for a TAB

Chk3:	Cmp	AL,' '                  ;Tis a blank?
;	Jmp	Check			;for DETAB
	Jne	Check			; no, see if eof
	Test	Qsw,3			;Within quotes?
	Jnz	Check
	Inc	Sw
	Test	BL,07h			;Ready for a tab?
	Jnz	Tloop			; no, keep going
	Mov	AL,Tab			; yes, send one
	Jmp	Copy

Check:	Cmp	AL,Eof			;End of file?
	Je	Done			; yes, all done
;	Jmp	Copy			;for DETAB
	Test	Qsw,3			;When a non-blank is
	Jnz	Copy			; encountered, insert a TAB
	Cmp	Sw,0			; if there were blanks
	Je	Copy			; before it
	Mov	DX,BX
	Dec	DL
	Test	DL,07h			;If the non-blank is not
	Jnz	Insert			; in a TAB column, then
	Push	AX			; keeps all the blanks
	Mov	AL,Tab
	Call	PutChar
	Pop	AX
	Jmp	Copy

Insert: Push	AX			;Insert any blanks that
	Mov	DL,Sw			; didn't line up on
Blanks: Cmp	DL,1			; a TAB column
	Jb	None
	Mov	AL,' '
	Call	PutChar
	Dec	DL			;Decr insert count
	Jmp	Blanks			; and continue

None:	Pop	AX			;Get char back
Copy:	Call	PutChar 		; and write it
	Mov	Sw,0			;Ind not blank
Tloop:	Loop	Wloop
Null:	Mov	AL,Cr			;Append CR
	Call	PutChar
	Mov	AL,Lf			; and LF
	Call	PutChar
	Jmp	Loop
Done:	Ret
GenTab	Endp
	Page

	;	Build a logical record

GetRec	Proc	Near
	Push	DI
	Sub	DI,DI			;Target record offset
	Mov	Rlen,0			; and length
	Mov	Qsw,0			;Quote indicator

Get1:	Call	GetChar 		;Build up a logical record
	Cmp	AL,Cr			; by looking for a CR or LF
	Je	Get1			; as end-of-record
	Cmp	AL,Lf
	Je	Get7
	Cmp	AL,S_Quote		;Don't expand tabs
	Jne	Get2			; found within a
	Xor	Qsw,1			; quoted string
Get2:	Cmp	AL,D_Quote
	Jne	Get3
	Xor	Qsw,2
Get3:	Cmp	AL,Tab			;Is it TAB?
	Jne	Get5			; no, pass it
	Test	Qsw,3			;Within quotes?
	Jnz	Get5			; yes, pass it
Get4:	Mov	Rec[DI],' '             ;Expand embedded tabs
	Inc	DI			; with blanks
	Test	DI,0007h
	Jz	Get1
	Jmp	Get4

Get5:	Mov	Rec[DI],AL		;Build the record by
	Inc	DI			; copying each character
	Cmp	DI,Maxrec		; or TABs expanded to blanks
	Jae	Get6
	Cmp	AL,Eof			;Is it EOF?
	Je	Get6			; yes, all done
	Jmp	Get1			; no, continue
Get6:	Mov	Rlen,DI 		;Final record length
	Pop	DI
	Ret

Get7:	Cmp	Rec-1[DI],' '           ;Strip trailing blanks
	Jne	Get6
	Dec	DI
	Jz	Get6
	Jmp	Get7

GetRec	Endp
	Page
	;	Extract one char from record

GetChar Proc	Near			;Read char into AL
	Push	CX
	Push	SI
Read1:	Cmp	Ilen,0			;Any in buffer?
	Je	Read			; no, read next block
	Mov	SI,Iptr 		; yes, get offset in buf
	Push	DS
	Mov	AX,Seg InBuf		;Copy a char from the
	Mov	DS,AX			; input (segment) buffer
	Lodsb
	Pop	DS
	Mov	Iptr,SI 		;Offset for next one
	Dec	Ilen			;Decr buffer size left
	Jmp	Read4			; and return with AL

Read:	Mov	BX,IHandle		;Read a block of data
	Mov	CX,BufLen		; into Input (segment) buffer
	Sub	DX,DX
	Push	DS
	Mov	AX,Seg InBuf
	Mov	DS,AX
	Mov	AH,3Fh
	Int	21h
	Pop	DS
	Mov	Iptr,0			;Reset buffer ptr
	Mov	Ilen,AX 		; and length
	Jc	Read2
	Or	AX,AX			;Anything read?
	Jnz	Read1			; yes, pick it up
	Mov	AL,Eof			; no, return EOF
	Jmp	Read4

Read2:	Mov	DX,Offset Msg3		;Say I/O ERROR
	Jmp	Error

Read4:	Pop	SI
	Pop	CX
	Ret
GetChar Endp
	Page

	;	Block output records

PutChar Proc	Near			;Write from AL
	Push	AX
	Push	BP
	Push	BX
	Push	CX
	Push	DI
	Push	DX
	Mov	DI,Optr 		;Offset in buffer
	Mov	DX,Seg OutBuf
	Push	ES			;Get buffer segment
	Mov	ES,DX
	Stosb				;Place into buffer
	Pop	ES
	Inc	Olen			;Incr the length
	Mov	Optr,DI 		; and buffer ptr
	Cmp	Olen,Buflen		;Full block?
	Jb	Write2			; no, return
	Mov	CX,Buflen		; yes,write it
	Jmp	Write3

Flush:	Push	AX			;Write data left over
	Push	BP			; in output buffer
	Push	BX
	Push	CX
	Push	DI
	Push	DX
	Mov	CX,Olen 		;Any left in output?
	Or	CX,CX
	Jz	Write2

Write3: Mov	BX,OHandle		;Get file handle
	Mov	BP,CX			;Save size requested
	Sub	DX,DX
	Push	DS			;Set up DS:DX
	Mov	AX,Seg OutBuf		; in buffer segment
	Mov	DS,AX
	Mov	AH,40h			;Write the block
	Int	21h
	Pop	DS
	Mov	Optr,0			;Reset buffer ptr
	Mov	Olen,0			; and size used
	Jc	Writer			;Write OK?
	Cmp	BP,AX			;Wrote all data?
	Je	Write2			; yes, good
Writer: Mov	DX,Offset Msg4		; no, say I/O error
	Jmp	Error

Write2: Pop	DX
	Pop	DI
	Pop	CX
	Pop	BX
	Pop	BP
	Pop	AX
	Ret
PutChar Endp
	Page

	;	Open input file

OpenIn	Proc	Near
	Mov	DX,Offset Input
	Mov	AL,0			;For input
	Mov	AH,3Dh			;Open a file
	Int	21h
	Jnc	Openi
	Mov	DX,Offset Msg1
	Jmp	OpenErr

Openi:	Mov	IHandle,AX
	Ret
OpenIn	Endp

	;	Open output file

OpenOut Proc	Near
	Mov	DX,Offset Output
	Sub	CX,CX			;Normal file attribute
	Mov	AH,3Ch			;Create a file
	Int	21h
	Jnc	Openo
	Mov	DX,Offset Msg2
	Jmp	OpenErr

Openo:	Mov	OHandle,AX
	Ret
OpenOut Endp

	;	Determine why OPEN failed

OpenErr:Cmp	AL,2			;AL has reason code
	Jb	Opene
	Cmp	AL,5
	Ja	Opene
	Sub	BX,BX			;Get offset to reason
	Mov	BL,AL			; text for open failure
	Mov	CL,4
	Shl	BX,CL
	Mov	AH,9			;Say OPEN FAILED
	Int	21h
	Mov	DX,Offset NewLine
	Mov	AH,9
	Int	21h
	Lea	DX,Code2-32[BX]
Opene:	Jmp	Error

	;	Close input/output

Close	Proc	Near			;Close files
	Mov	BX,IHandle		; input
	Mov	AH,3Eh
	Int	21h
	Mov	BX,OHandle		; output
	Mov	AH,3Eh
	Int	21h
	Ret
Close	Endp
	Page

	;	Get file names from command line

GetFile Proc	Near			;Get file name(s)
	Push	CS			;DS points to PSB
	Pop	ES			;Now ES points to data
	Mov	SI,80h			;Point to command line
	Sub	BP,BP			;Indicates first or second name
	Sub	CH,CH			;The PSP may contain one or two
	Or	CL,Byte Ptr DS:[SI]	; filenames separated by blanks
	Jz	GetF5
	Lea	DI,ES:Input
	Inc	SI

GetF1:	Lodsb				;Copy command line to file names
	Cmp	AL,' '                  ; by skipping leading blanks
	Jne	GetF2			; until a CR is found
	Or	BP,BP			; or until the length is zero
	Jz	GetF4			;If a second blank is found,
	Mov	AX,2400h		; append zero and dollar sign
	Stosw
	Lea	DI,ES:Output		; and it starts the second file name
	Jmp	GetF4

GetF2:	Cmp	AL,Cr			;Is it CR, end of line?
	Je	GetF5			; yes, end of command
	Stosb				; no, save in name
	Mov	BP,DI			; and indicate data copied
GetF4:	Loop	GetF1

GetF5:	Mov	AX,2400h		;Append zero and dollar sign
	Stosw
	Mov	AX,CS			;When done, set up
	Mov	DS,AX			; segment registers

GetF7:	Cmp	Input,0 		;Any input name?
	Jne	GetF8			; yes, try output name
	Mov	DI,Offset MsgIn 	; no, ask for one
	Mov	SI,Offset InKey
	Call	AskName 		;Get the input file name

GetF8:	Cmp	Output,0		;Any output name?
	Jne	GetF9			; yes, that was easy
	Mov	DI,Offset MsgOut	; no, ask for it
	Mov	SI,Offset OutKey
	Call	AskName 		;Get the output name

GetF9:	Cmp	Word Ptr Output+1,003Ah ;If just a drive is given
	Jne	GetFend 		; for the output,
	Mov	CX,64			; use the input filename
	Mov	DI,Offset Output+2
	Mov	SI,Offset Input
	Cmp	Input+1,':'             ;If drive was given for
	Jne	GetF10			; input, must skip over it
	Dec	CL
	Dec	CL			;Adjust pointers passed drive
	Dec	SI
	Dec	SI
GetF10: Rep	Movsb

GetFend:Ret
GetFile Endp
	Page

	;	Ask for file name(s)

AskName Proc	Near			;Ask for input file name
	Push	DI			;Ptr to prompt msg
	Push	SI			;Ptr to reply buffer
	Mov	Byte Ptr [SI],64	;Reply length
Ask1:	Mov	DX,DI
	Mov	AH,9			;Print the prompt msg
	Int	21h
	Mov	DX,SI			;Read console reply
	Mov	AH,10
	Int	21h
	Sub	BX,BX			;If a reply is given,
	Add	BL,1[SI]		; append a zero as the
	Jz	Ask1			; ASCIIZ name stopper
	Mov	Word Ptr 2[SI][BX],2400h
	Mov	Word Ptr 0[SI],'  '     ;Clear error message part
	Pop	SI
	Pop	DI
	Ret
AskName Endp

	;	Display "cooking" message

Inform	Proc	Near
	Mov	AH,9
	Mov	DX,Offset Cooking
	Int	21h
	Mov	AH,9
	Mov	DX,Offset Input
	Int	21h
	Mov	AH,9
	Mov	DX,Offset Mark
	Int	21h
	Mov	AH,9
	Mov	DX,Offset Output
	Int	21h
	Ret
Inform	Endp

Tabs	Endp


Cseg	Ends

Stk	Segment Byte Stack 'STACK'
	Db	128 Dup (?)
Stk	Ends

InBuf	Segment Public Byte 'DATA'
	Db	Buflen Dup (?)
InBuf	Ends

OutBuf	Segment Public Byte 'DATA'
	Db	Buflen Dup (?)
OutBuf	Ends

	End	Tabs
```
{% endraw %}

## TABS.DOC

{% raw %}
```
TABS Command
-----------------

Purpose:   Replace blanks with TAB character(s).

Format:    TABS  d:input.ext  d:output.ext

Remarks:   Any TAB characters found are first expanded unless
           they appear within quoted strings - out of context.

           If the input or output filename is not supplied on the
           command line, the user will be prompted for it. Each file
           name may contain drive and path specifications. Wild cards
           are not allowed.

           In replacing blanks with tabs, quoted strings are ignored.
           The maximum logical record size is 255, see MAXREC equate.
           Defacto tab columns are 9,17,25,...

           Written for the IBM PC using DOS 2.0, by Vernon Buerg.
           Version 1.2, April 27, 1984. For public domain use.

Examples:
        A>TABS A:\SOURCE\PGM1.ASM B:\TEST\PGM.ASM

        A>TABS MEMO.TXT MEMO2.TXT

        A>TABS C:TEST.ASM B:

        A>TABS
        Enter INPUT file name> b:lut.asm
        Enter OUTPUT file name> a:lut2.asm
        TABBING: b:lut.asm => a:lut2.asm
        End of file
        A>

-----------------

```
{% endraw %}

## WHEREIS.ASM

{% raw %}
```
;********************************************************
;*							*
;*	WHEREIS.ASM			24FEB84 	*
;*							*
;********************************************************
title WHEREIS
page	62,132

whereis segment public
	assume cs:whereis,ds:whereis

;equates

COMMAND_LINE	EQU	80H + 2
NULL		EQU	00H
CR		EQU	0DH
LF		EQU	0AH
MAX_SCAN_LEN	EQU	64
TERMINATE	EQU	20H
DIRECTORY	EQU	10H
DOT		EQU	'.'
PRINT_CHAR	EQU	02H
SET_DTA 	EQU	1AH
SEARCH_FIRST	EQU	4EH
SEARCH_NEXT	EQU	4FH
DOS_CALL	EQU	21H
PATH_SEPARATOR	EQU	'\'

;macros

CLEAR	macro	reg
	xor	reg,reg
	endm

;this is the format for the dos data transfer area used when dos 2.0
;searches for file match in directories

dta	struc
	reserved	db	21 dup (?)
	attribute	db
	time		dw
	date		dw
	size		dd
	name_found	db	13 dup (?)
dta	ends

	org	100h
main	proc	far

;  this is the main program that sets up the initial conditions for
;  search_directory which in turn, does a recursive search.
;	reads:	path_name
;	writes: file_name
;	calls:	search_directory
;

mainline proc	near

start:
	mov	si, COMMAND_LINE		;start of command line
	mov	di, offset file_name

get_search_name:
	lodsb				;get first char
	cmp	al, CR
	je	done_reading_name	;if carriage return
	stosb
	jmp	get_search_name 	;Loop --
done_reading_name:
	CLEAR	al			;store zero at end
	stosb
	mov	di, offset path_name
	CLEAR	al
	cld
	mov	cx, MAX_SCAN_LEN
	repnz	scasb
	mov	bx,di
	dec	bx			;ds:bx points to end of path_name
	mov	dx,NULL
	call search_directory
	int	TERMINATE
mainline endp

; this procedure searches all the files in the current directory
; looking for a match.	It also prints the full name for each match
;
;	ds:bx	pointer to end of current path name
;	ds:dx	old disk transfer area (dta)
;
; reads:	disk transfer area (dta)
; writes:	disk transfer area (dta)
; calls 	build_name, get_first_Match
;		write_matched_name, get_next_match
;		build_star_name, search_sub_directory
;
search_directory proc	near

	push	si
	push	dx
	call	build_name
	call	get_first_match
	jc	no_match				;If no match --
	call	write_matched_name
find_next_file:
	call	get_next_match
	jc	no_match
	call	write_matched_name
	jmp	find_next_file				;Loop --

no_match:
	pop	dx
	push	dx
	call	build_star_name
	call	get_first_match
	jc	no_more_matches 		;If no match --
	mov	si,dx
	test	[si].attribute,DIRECTORY
	jnz	is_directory			;If directory entry --
find_next_directory:
	call	get_next_match
	jc	no_more_matches 		;If no more entries --
	test	[si].attribute,DIRECTORY
	jz	find_next_directory		;If not a directory --
is_directory:
	cmp	[si].name_found,DOT
	je	find_next_directory		;If it's . or ..
	call	search_sub_directory		;search sub directory
	push	ax
	mov	ah,SET_DTA
	int	DOS_CALL
	pop	ax
	jmp	find_next_directory
no_more_matches:
	pop	dx
	pop	si
	ret

search_directory  endp
page
; This procedure searches the sub directory who's name is in dta
;
;	ds:bx	end of the current pathname
;	ds:[dx].name_found	name of subdirectory for search
;
; reads:	path_name
; writes:	path_name
; calls:	search_directory
;

search_sub_directory  proc  near

	push	di
	push	si
	push	ax
	push	bx
	cld
	mov	si, dx
	add	si, offset name_found
	mov	di,bx
copy_loop:
	lodsb
	stosb
	or	al,al
	jnz	copy_loop
	mov	bx,di
	std
	stosb
	mov	al,PATH_SEPARATOR
	stosb
	call	search_directory
	pop	bx
	mov	byte ptr [bx],NULL
	pop	ax
	pop	si
	pop	di
	ret

search_sub_directory  endp
page

; This procedure prints the matched name after the path name
;
;  ds:dx	pointer to current disk transfer area
;
; reads:	path_name, name_found (in dta)
; writes:	write_string, send_crlf
;

write_matched_name	proc	near

	push	ax
	push	dx
	mov	dx,offset path_name
	mov	al,[bx]
	mov	byte ptr [bx],NULL
	call	write_string
	mov	[bx],al
	pop	dx
	push	dx
	add	dx, offset name_found
	call	write_string
	call	send_crlf
	inc	line_ctr
	mov	al,23
	cmp	al,line_ctr
	jne	write_exit
	call	send_crlf
	mov	al,0
	mov	line_ctr,al
	mov	dx,offset message
	mov	ah,9
	int	DOS_CALL
	mov	ah,7
	int	DOS_CALL
	call	send_crlf
write_exit:
	pop	dx
	pop	ax
	ret
write_matched_name endp


;  This procedure builds an absolute search name from path_name
;  followed by file_name
;
;  reads:	file_name
;  calls:	build	(to build the name)
;

build_name	proc	near

	push	si
	mov	si, offset file_name
	call	build
	pop	si
	ret
build_name	endp

build_star_name proc	near
	push	si
	mov	si, offset star_name
	call	build
	pop	si
	ret
build_star_name endp

page
; This procedure appends the string at ds:si to path_name in
; path_name.  It knows where the path name ends from knowing
; how long path_name is.
;
;	ds:si	name of file
;	ds:bx	end of path_name
;
; reads:	ds:si
; writes:	path_name
;

build	proc	near
	push	ax
	push	di
	mov	di,bx
	cld
copy_name:
	lodsb
	stosb
	or	al,al
	jnz	copy_name			;If not end of string yet --
	pop	di
	pop	ax
	ret
build	endp

; This procedure find the first match between the name given by
; ds:dx and the directory entries found in the directory path_name
;
;	ds:dx	pointer to current disk transfer area
;
;  returns:
;	cf	0	a match was found
;		1	no match found
;	ax		error code returned
;		2	file not found
;		18	no more files
;	ds:dx		pointer to new disk transfer area
;
; reads:	path_name
; writes:	disk_transfer_areas
;

get_first_match proc	near

	push	cx
	cmp	dx,NULL
	ja	allocate		;go allocate space --
	mov	dx, offset disk_transfer_areas-type dta
allocate:
	add	dx,type dta
	mov	cx,DIRECTORY
	mov	ah,SET_DTA
	int	DOS_CALL
	push	dx
	mov	dx, offset path_name
	mov	ah,SEARCH_FIRST 		;call for find first match
	int	DOS_CALL
	pop	dx
	pop	cx
	ret
get_first_match endp


; This procedure is much like get_first_match
;
; returns:
;	cf	0	a match was found
;		1	no match found
;	ax		error code returned
;		2	file not found
;		18	no more files
;
; reads:	path_name
; writes:	disk_transfer_areas
;

get_next_match	proc	near
	push	cx
	push	dx
	mov	dx, offset path_name
	mov	cx,DIRECTORY
	mov	ah,SEARCH_NEXT
	int	DOS_CALL
	pop	dx
	pop	cx
	ret
get_next_match	endp

; This procedure sends a crlf pair of characters to the screen
;

send_crlf	proc	near

	push	ax
	push	dx
	mov	ah,PRINT_CHAR
	mov	dl,LF
	int	DOS_CALL
	mov	dl,CR
	int	DOS_CALL
	pop	dx
	pop	ax
	ret
send_crlf	endp

; This procedure writes the asciiz string at
;  ds:dx	address of asciiz string
;

write_string	proc	near

	push	ax
	push	dx
	push	si
	cld
	mov	si,dx
	mov	ah,PRINT_CHAR
	lodsb
write_string_loop:
	mov	dl,al
	int	DOS_CALL
	lodsb
	or	al,al
	jnz	write_string_loop
	pop	si
	pop	dx
	pop	ax
	ret
write_string	endp

; This is the data storage area and must be the last thing
; in the program.
;

line_ctr	db	0
message 	db	'Press any key to continue $'
star_name	db	'*.*',NULL
path_name	db	PATH_SEPARATOR,NULL
		db	80 dup (0)	;space for 64 char pathname and
					;13 char filename
file_name	db	13 dup (0)	;save room for full dos filename

disk_transfer_areas label byte		;this must start at the end of whereis

main	endp

whereis ends

	end	start
```
{% endraw %}

## WHEREIS.BAS

{% raw %}
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
{% endraw %}

## ZAPDEB.BAS

{% raw %}
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
{% endraw %}

## ZAPDEB.DOC

{% raw %}
```
ZAPDEB.BAS     22-Jan-84 3135         Accesses: 71

    Keywords: DEBUG ZAP MOD UTILITY FIXES

    This basic program, when run against DEBUG.COM (Dos 2.0/2.1) will produce a
    modified DEBUG that will not hang the system when a timer interrupt occurs
    while in the Trace subcommand. This fix also makes DEBUG insensitive to
    storage sizes above 512K, and repairs two other minor problems..

```
{% endraw %}

## ZAPTRE.BAS

{% raw %}
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
{% endraw %}

## ZAPTRE.DOC

{% raw %}
```
ZAPTRE.BAS     22-Jan-84 3405         Accesses: 66

    Keywords: TREE WHEREIS FIND PATH UTILITY

    This basic program, run against the TREE.COM (Dos 2.0/2.1) command will add
    support for a filename operand. This will permit TREE *.BAS to display a
    tree-like list of all .BAS on any directory.  It also provides a more
    readable format for the "normal" tree command outputs.

```
{% endraw %}

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
