---
layout: page
title: "PC-SIG Diskette Library (Disk #685)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0685/
machines:
  - id: ibm5170
    type: pcx86
    config: /machines/pcx86/ibm/5170/cga/1024kb/rev3/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0685"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5170" %}

{% comment %}info_begin{% endcomment %}

## Information about "NEW FIG FORTH"

    For fans of FORTH, here is the latest version of this unusual
    programming language.  This version of FIG-FORTH incorporates a number
    of significant changes to the FIG version.  The Following is a partial
    list:
    
    ~  Written for Microsoft's MACRO-86 assembler
    ~  Full MS-DOS file interaction, as well as usual FORTH disk access
    ~  All I/O is vectored and may be re-directed within FORTH
    ~  Command line interpretation
    
    The accompanying documentation includes a user's guide, a technical
    reference manual, and a FORTH glossary (a list and explanation of each
    FORTH word which has been changed or added to this version).
    
    Special Requirements:  2 disk drives and a printer is optional.
    
    How to Start:  Type GO (press enter).
    
    Suggested Registration:  None.
    
    File Descriptions:
    
    ARC      EXE  Archive utility
    CONTENTS      Text file listing contest of FORTH.ARC
    FORTH    ARC  Archived file
    README        Introductory text file
    UNPACK   BAT  Batch file to unpcak FORTH.ARC
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILES685.TXT

{% raw %}
```
Disk No  #685
Program Title: New Fig Forth
PC-SIG version 1.1
 
Usage: programming language
 
System Requirements: IBM PC or close compatible, 2 disk drives, printer, and Dos
                     2.0 or later.
 
How to Start: To unpack this disk to your B drive, type UNPACK B:. To unpack
              this disk to a hard drive, type UNPACK C:\[subdirectory if
              necessary].
 
File Descriptions:
 
ARC      EXE  Archive utility
CONTENTS      Text file listing contest of FORTH.ARC
FORTH    ARC  Archived file
README        Introductory text file
UNPACK   BAT  Batch file to unpcak FORTH.ARC
 
PC-SIG
1030D E Duane Avenue
Sunnyvale Ca. 94086
(408) 730-9291
(c) Copyright 1987 PC-SIG

```
{% endraw %}

## 4TH-DISK.ASM

{% raw %}
```
SUBTTL Disk interface code
PAGE


;FIG-FORTH disk interface: no file access

;This is SYSTEM-DEPENDENT code, and is normally INCLUDED by
;4TH-SYSD.ASM

; Disk parameters are set in the 4TH-OPT.H file.

IF	INCH EQ 8
TRKS		EQU	77		;Tracks on 8" disk
RPT		EQU	26*DENSITY	;8" sec/track

IF	DENSITY-2
RECSIZE		EQU	128		;Bytes/sector, SD
ELSE
RECSIZE		EQU	1024		;Bytes/sector, DD
ENDIF

ELSE

TRKS		EQU	40		;tracks on a 5" disk
RPT		EQU	8		;sectors/track
RECSIZE		EQU	512		;bytes/sector, dd only

ENDIF

RPBLOCK		EQU	BUFSIZE/RECSIZE		;disk records/1K block
RPDRIVE		EQU	TRKS*RPT*SIDES		;records/drive
WASTE		EQU	RPDRIVE MOD RPBLOCK	;rec's. left over
BLPDRIVE	EQU	(RPDRIVE-WASTE)/RPBLOCK	;whole blocks/drive

;=#+  REC/BLK	number of disk records to fill 1 buffer	-- n

		$CONST	87H,REC/BL,K,RPBLK	;Disk records per 1K
		DW	RPBLOCK

;=#+  BLK/DRIVE	number of 1K blocks per drive		-- n

		$CONST	89H,BLK/DRIV,E,BLPDRV	;1K blocks per drive
		DW	BLPDRIVE

;=#+  MAXDRIVE	highest valid drive number		-- n

		$CONST	88H,MAXDRIV,E,MXDRV	;highest legal drive #
		DW	DRIVES-1

;=#+  MAXBLOCK	highest valid block number		-- n

		$CONST	88H,MAXBLOC,K,MXBLK	;highest legal block #
		DW	BLPDRIVE*DRIVES-1

;=:   DR0	set offset for drive zero		--

		$COLON	83H,DR,0,DRZER
		DW	ZERO,	OFSET,	STORE
		DW	SEMIS

;=:   DR1	set offset for drive one		--

		$COLON	83H,DR,1,DRONE
		DW	BLPDRV
		DW	OFSET,	STORE,	SEMIS

;=:+  D&RCALC	set drive/record for block n		n --

		$COLON	87H,D&RCAL,C,DRCAL
		DW	DUPP,	ZLESS
		DW	OVER,	MXBLK,	GREAT,	ORR
		DW	LIT,	6,	QERR	;range error!
		DW	BLPDRV,	SLMOD
		DW	DRIVE,	STORE
		DW	RPBLK,	STAR
		DW	REC,	STORE,	SEMIS

;=:+  BLKRD	read one block from disk to addr	addr blk --

		$COLON	85H,BLKR,D,BLKRD
		DW	DRCAL		;set DRIVE and RECORD
		DW	DTA,	STORE	;set DTA
		DW	PBLKRD,	SEMIS	;read it

;=:+  BLKWRT	write one block to disk from addr	addr blk --

		$COLON	86H,BLKWR,T,BLKWRT
		DW	DRCAL		;set DRIVE and RECORD
		DW	DTA,	STORE	;set DTA
		DW	PBLKWRT,	SEMIS	;write it

;=C+  (BLKRD)	block read primitive			--

TRIED		DW	?		;retry flag

		$CODE	87H,(BLKRD,),PBLKRD
		PUSH	SI
		PUSH	BP
		MOV	[TRIED],0	;reset retry flag
RETRY:		MOV	2[DSKERR],0	;reset error flag
		MOV	AX,2[DRIVE]	;AL = drive no.
		MOV	BX,2[DTA]	;BX = transfer address
		MOV	CX,2[RPBLK]	;CX = no. records to transfer
		MOV	DX,2[REC]	;DX = logical record #
		INT	37		;BIOS disk read function
		JNC	READXIT		;carry set if error

		CALL	DCHECK		;force media check
		OR	AX,AX		;0 if hopeless
		JNZ	RETRY		;may be ok...

READXIT:	POPF
		POP	BP
		POP	SI
		JMP	NEXT

;=C+  (BLKWRT)	block write primitive			--

		$CODE	88H,(BLKWRT,),PBLKWRT
		PUSH	SI
		PUSH	BP
		MOV	[TRIED],0	;reset retry flag
WRETRY:		MOV	2[DSKERR],0	;reset error flag
		MOV	AX,2[DRIVE]
		MOV	BX,2[DTA]
		MOV	CX,2[RPBLK]
		MOV	DX,2[REC]
		INT	38		;BIOS disk write function
		JNC	WRTXIT

		XOR	AH,AH		;return negative error code
		NEG	AX
		MOV	2[DSKERR],AX	;AL has error code
		MOV	BYTE PTR 2[DSKERR],AL	;AL has error code
		CALL	DCHECK		;force media check
		OR	AX,AX		;0 if hopeless
		JNZ	WRETRY		;may be ok...

WRTXIT:		POPF
		POP	BP
		POP	SI
		JMP	NEXT

;This subroutine was added because the disk read/write interrupts
;under MS-DOS >2.0 don't handle different density disks.
;If the DOS version is 2.0 or greater, this function forces MS-DOS
;to check the disk format and returns AX=TRUE.
;If the version is less than 2.0, or DCHECK has already tried once,
;AX has 0 on exit.

DCHECK		PROC	NEAR

		MOV	AX,[TRIED]
		XOR	AX,AX
		JNZ	NOHOPE		;already tried once...

		MOV	[TRIED],TRUE	;set flag
		MOV	AH,30H
		INT	21H		;get DOS version
		CMP	AL,2		;less than 2.0?
		JL	NOHOPE		;must be hard error

		MOV	DX,2[DRIVE]
		INC	DX		;0=default, 1=A, 2=B!
		MOV	AH,36H		;force media check by calling
		INT	21H		;disk free space function
		MOV	AX,TRUE		;still hope, try again
		RET	2		;flags from first try
NOHOPE:
		MOV	AX,0
		RET
DCHECK		ENDP
```
{% endraw %}

## 4TH-FILE.ASM

{% raw %}
```
SUBTTL MS-DOS file interface words
PAGE


;FORTH - MSDOS file interface

;This is SYSTEM-DEPENDENT code and is normally INCLUDED by
;4TH-SYSD.ASM

REQUEST		EQU	33		;MSDOS function request intr.
FOPEN		EQU	15		;open file function no.
FCLOSE		EQU	16		;close file function no.
FREAD		EQU	20		;sequential read
FWRITE		EQU	21		;    "      write
FCREAT		EQU	22		;create file
SETDTA		EQU	26		;set disk transfer address
RANDRD		EQU	39		;random block read
RANDWRT		EQU	40		;random block write
FSIZE		EQU	35		;determine file size
PARSEFN		EQU	41		;parse file name function
SETVEC		EQU	37		;set interrupt vector
FATADDR		EQU	27		;get alloc. table info.

;=C+  (OPEN)	open FCB, f is TRUE if error		FCB -- f

	$CODE	86H,(OPEN,)
		POP	DX		;DX points to FCB
		MOV	AH,FOPEN
		INT	REQUEST
		SUB	AH,AH
		JMP	APUSH		;Leave 0FFH if not found

;=C+  (CLOSE)	close FCB, f is TRUE on error		FCB -- f

	$CODE	87H,(CLOSE,)
		POP	DX		;DX points to FCB
		MOV	AH,FCLOSE
		INT	REQUEST
		SUB	AH,AH
		JMP	APUSH		;leave 0FFH if not found

;=C+  (CREATE)	create file, f is TRUE on error		FCB -- f

	$CODE	88H,(CREATE,)
		POP	DX		;DX points to unopened FCB
		MOV	AH,FCREAT
		INT	REQUEST
		SUB	AH,AH
		JMP	APUSH		;leave 0FFH if no room

;=C+  (READ)	read next record from file to addr	FCB addr -- f

	$CODE	86H,(READ,)
		POP	DX		;DX has DTA
		MOV	AH,SETDTA
		INT	REQUEST
		POP	DX		;DX points to open FCB
		MOV	AH,FREAD
		INT	REQUEST
		SUB	AH,AH
		JMP	APUSH		;AL has condition code

;=C+  (WRITE)	write next record to file from addr	FCB addr -- f

	$CODE	87H,(WRITE,)
		POP	DX
		MOV	AH,SETDTA
		INT	REQUEST
		POP	DX		;DX points to open FCB
		MOV	AH,FWRITE
		INT	REQUEST
		SUB	AH,AH
		JMP	APUSH		;AL returns condition

;=C+  (FBLKRD)	read n blocks from file			FCB n -- f

	$CODE	88H,(FBLKRD,)
		MOV	DX,2[DTA]	;Set DTA
		MOV	AH,SETDTA
		INT	REQUEST
		POP	CX		;read this many records
		POP	DX		;DX has FCB address
		MOV	AX,2[REC]	;Read this record
		MOV	BX,DX
		MOV	33[BX],AX	;Set random record field
		MOV	AH,RANDRD
		INT	REQUEST
		SUB	AH,AH		;Return condition code
		JMP	APUSH

;=C+  (FBLKWRT)	write n blocks to file			FCB n -- f

	$CODE	89H,(FBLKWRT,)
		MOV	DX,2[DTA]	;Set DTA as for READ above
		MOV	AH,SETDTA
		INT	REQUEST
		POP	CX		;read this many records
		POP	DX		;FCB address
		MOV	AX,2[REC]
		MOV	BX,DX
		MOV	33[BX],AX
		MOV	AH,RANDWRT
		INT	REQUEST
		SUB	AH,AH
		JMP	APUSH

;=C+  B/SEC	get bytes/sector			-- n

	$CODE	86H,B/SEC,?
		PUSH	DS		;This fn. kills DS !
		MOV	AH,FATADDR
		INT	REQUEST
		POP	DS		;Don't lose it !
		PUSH	CX		;sector size
		JMP	NEXT

;=C+  (FNAME)	parse filename at addr using mode n	FCB addr1 n -- addr2 f

	$CODE	87H,(FNAME,)
		POP	AX		;mode in AL
		POP	BX		;pointer to string
		POP	DI		;pointer to FCB to fill in
		PUSH	SI		;save FORTH IP
		MOV	SI,BX
		MOV	AH,PARSEFN
		INT	REQUEST
		MOV	DX,SI		;return pointer to next char
		POP	SI
		SUB	AH,AH
		JMP	DPUSH		;...and flag for "*|?"

;=C+  DISK	set default drive to n, n2 is #drives	n -- n2

		$CODE	84H,DIS,K
		POP	DX
		SUB	DH,DH
		MOV	AH,14		;select disk function
		INT	REQUEST
		SUB	AH,AH
		JMP	APUSH		;return no. drives

;=C+  ?FIRST	search for first matching file		FCB addr -- f

		$CODE	86H,!!!?FIRS,T
		POP	DX		;destination addr.
		MOV	AH,SETDTA
		INT	REQUEST
		POP	DX		;search FCB addr.
		MOV	AH,17		;search for first entry
		INT	REQUEST
		SUB	AH,AH
		JMP	APUSH

;=C+  ?NEXT	search for next matching file		addr FCB -- f

		$CODE	85H,!!!?NEX,T
		POP	DX		;dest. addr.
		MOV	AH,SETDTA
		INT	REQUEST
		POP	DX		;search FCB addr.
		MOV	AH,18		;search for next entry
		INT	REQUEST
		SUB	AH,AH
		JMP	APUSH

;=C+  FDEL	delete file				FCB -- f

		$CODE	84H,FDE,L
		POP	DX		;unopened FCB
		MOV	AH,19		;delete file function
		INT	REQUEST
		SUB	AH,AH
		JMP	APUSH

;=C+  FREN	rename file				addr -- f

		$CODE	84H,FRE,N
		POP	DX		;special FCB
		MOV	AH,23		;rename file
		INT	REQUEST
		SUB	AH,AH
		JMP	APUSH

;=C+  DISK@	return default disk number		-- n

		$CODE	85H,DISK,@
		MOV	AH,25		;return default disk
		INT	REQUEST
		SUB	AH,AH
		JMP	APUSH

	$REPORT	<MS-DOS file interface included>
```
{% endraw %}

## 4TH-MAIN.ASM

{% raw %}
```
TITLE Forth Interest Group  8086 FORTH
NAME FORTH
PAGE 62,132
.SALL
.XCREF

COMMENT \
		Forth Interest Group  8086 FORTH 

		Version 1.0

		Original implementation by Thomas Newman
		made available by the
			FORTH INTEREST GROUP
			P.O. Box 1105
			San Carlos, CA  94070

		Modified by
			Joe Smith
			U. of Penn./Dept. of Chemistry
			34th & Spruce St.
			Philadelphia, PA  19104
			215 898-4797

		Available through
			SIG/86
			c/o Joseph Boykin
			47-4 Sheridan Drive
			Shrewsbury, MA  01545
			617 845-1074

		Latest revision: June, 1983

This is a revision of fig-FORTH which includes the following changes:

	Source compatible with Microsoft's 8086 Macro Assembler

	Macros for dictionary headers

	Complete interface to MS-DOS, including screen files

	Command line arguments are interpreted

	All i/o is redirectable through execution vectors

\
SUBTTL Assembly switches (TRUE/FALSE) and EQUATES
PAGE


INCLUDE	4TH-OPTS.H		;assembly options

; Version number:

FIGREL		EQU	1	;fig release number
FIGREV		EQU	0	;fig revision number
USRVER		EQU	0	;user version number,0-25,printed as A-Z

; Memory allocation parameters:

EM		EQU	0000		;64K top of memory + 1
NSCR		EQU	8		;No. of 1K block buffers
BUFSIZE		EQU	1024		;size of FORTH's disk buffers
US		EQU	80		;User area size ( in bytes )
RTS		EQU	160		;Return stack/TIB size

BUF1		EQU	EM-(NSCR*(BUFSIZE+4))	;first buffer addr.
INITR0		EQU	BUF1-US		;Start of return stack (R0)
INITS0		EQU	INITR0-RTS	;Start of param. stack (S0)

; ASCII characters used

ANUL		EQU	0		;ASCII NUL
BELL		EQU	7		;ASCII bell: ^G
BSOUT		EQU	8		;output backspace: ^H
LF		EQU	10		;ASCII linefeed
FF		EQU	12		;ASCII form feed
ACR		EQU	13		;ASCII carriage return
BSIN		EQU	127		;input delete char: DEL

SUBTTL Main entry points and COLD start data
PAGE +


INCLUDE	4TH-LIB.MAC		;Required support macros

; Note: FORTH only uses one segment, and runs as a .COM program

MAIN		SEGMENT
		ASSUME	CS:MAIN,DS:MAIN,SS:MAIN,ES:MAIN

		ORG	100H

ORIG: 		NOP
		JMP	CLD		;vector to COLD start
		NOP
		JMP	WRM		;vector to WARM start


		DB	FIGREL		;version # printed by COLD
		DB	FIGREV
		DB	USRVER
		DB	0EH		;version attributes
		DW	LASTNFA		;top word in FORTH vocabulary
		DW	BSIN		;backspace recognised by EXPECT
		DW	INITR0		;initial UP

; COLD start moves the following to USER var's. 3-10
; MUST BE IN SAME ORDER AS USER VARIABLES

		DW	INITS0		;  S0
		DW	INITR0		;  R0
		DW	INITS0		;  TIB
		DW	32		;  WIDTH
		DW	0		;  WARNING
		DW	INITDP		;  FENCE
		DW	INITDP		;  DP
		DW	FORTH+6		;  VOC-LINK

; CPU id printed by COLD

	IF	_ALIGN
		DD	0B3260005H	;"8086" ( in base 36 ! )
	ELSE
		DD	0B3280005H	;"8088" ( in base 36 ! )
	ENDIF

UP 		DW	INITR0		;user area pointer
RPP 		DW	INITR0		;return stack pointer

	$REPORT	<Boot parameters completed>
	$REPORT	<LIMIT	=>,%EM
	$REPORT	<FIRST	=>,%BUF1
	$REPORT	<R0	=>,%INITR0
	$REPORT	<S0	=>,%INITS0

SUBTTL FORTH register usage
PAGE +


COMMENT \

FORTH	8086	Preservation rules
------------------------------------------------------------------------
IP	SI	Interpreter pointer
		Must be preserved across words
		NOTE: Also preserve the direction flag (always UP)!

W	DX	Working register
		Jump to label DPUSH will push contents onto
		the parameter stack before falling into APUSH

SP	SP	Parameter stack pointer
		Must be preserved across words

RP	BP	Return stack pointer
		Must be preserved across words

	AX	General purpose register
		Jump to label APUSH pushes contents onto
		the parameter stack

	CS,DS,SS
		Must be preserved across words

		All other registers are available

\
SUBTTL Comment conventions
PAGE


COMMENT \

==	means	is equal to
:=	means	is assigned the value

name	==	address of name
(name)	==	contents at address name
((name))==	contents at address contained in name

NFA	==	Name Field Address
LFA	==	Link Field Address
CFA	==	Code Field Address
PFA	==	Parameter Field Address

S1,S2	==	parameter stack: top item, next item
R1,R2	==	return stack: top word, next word

LSB	==	Least Significant Bit
MSB	==	Most Significant Bit
LB,LW	==	Low Byte, Low Word
HB,HW	==	High Byte, High Word
\

	IF	_DEBUG
SUBTTL Debugging support
PAGE +

BIP 		DW	0	;breakpoint start address
BIPE 		DW	0	;breakpoint end address

COMMENT \

BIP	BIPE	effect
-----	-----	-------------------------------------------
0	?	trace off
-1	?	trace all NEXT calls
addr1	0	trace addr1 only
addr1	addr2	trace NEXT calls between addr1 and addr2

NOTE: addr1/addr2 can't be CFA's
\

; NEXT with code to trace FORTH word execution

TNEXT: 		PUSHF		;save executing word's data
		PUSH	AX
		MOV	AX,BIP	;addr1
		OR	AX,AX
		JZ	TNEXT2	;no trace if addr1==0
		CMP	AX,-1
		JZ	TNEXT1	;trace all
		CMP	AX,SI
		JZ	TNEXT1	;in range, so trace
		JA	TNEXT2	;not in range
		MOV	AX,BIPE
		OR	AX,AX
		JZ	TNEXT2	;trace addr1 only
		CMP	AX,SI
		JB	TNEXT2	;no longer in range

; Pause on address

TNEXT1: 	POP	AX	;restore executing word's reg's.
		POPF
		INT	3	;Break to DEBUG
BREAK: 		JMP	SHORT TNEXT3	;continue

; No pause, restore registers

TNEXT2: 	POP	AX
		POPF
TNEXT3: 	LODSW		;AX:=(IP)
		MOV	BX,AX
		JMP	SHORT NEXT1

	$REPORT	<Debug trace included>
	ENDIF
SUBTTL Inner interpreter, DPUSH, APUSH entry points
PAGE +


DPUSH: 		PUSH	DX	;common entry point; DX, AX to S2, S1
APUSH: 		PUSH	AX	;common entry point, AX to S1

NEXT:
	IF	_DEBUG
		JMP	TNEXT
	ELSE
		LODSW			; AX:=(IP), IP:=IP+1
		MOV	BX,AX
	ENDIF

NEXT1: 		MOV	DX,BX
		INC	DX		; W:=(IP)+1
		JMP	WORD PTR [BX]	;to CFA
SUBTTL FORTH dictionary 
PAGE +


;=C   LIT	push an inline literal			-- n

		$CODE	83H,LI,T,LIT
		LODSW
		JMP	APUSH

;=C   EXECUTE	executes the word at CFA		CFA -- ?

		$CODE	87H,EXECUT,E,EXEC
		POP	BX
		JMP	NEXT1

;=C   BRANCH	adds an inline offset to IP		--

		$CODE	86H,BRANC,H,BRAN
BRAN1:		ADD	SI,[SI]		; IP:=IP+(IP)
		JMP	NEXT

;=C   0BRANCH	branch if f is zero			f --

		$CODE	87H,0BRANC,H,ZBRAN
		POP	AX
		OR	AX,AX
		JZ	BRAN1		;f==0, so branch
		INC	SI		;point IP to next word
		INC	SI
		JMP	NEXT

;=C   (LOOP)	execution time loop code		--

		$CODE	86H,(LOOP,),XLOOP
		MOV	BX,1
XLOO1: 		ADD	[BP],BX		;R1:=R1+1
		MOV	AX,[BP]
		SUB	AX,2[BP]	;compare new index to limit
		XOR	AX,BX
		JS	BRAN1		;branch - keep looping

		ADD	BP,4		;end of loop, drop R1, R2
		INC	SI		;skip branch offset
		INC	SI
		JMP	NEXT

;=C   (+LOOP)	(LOOP) with increment on S1		n --

		$CODE	87H,(+LOOP,),XPLOO
		POP	BX
		JMP	XLOO1

;=C   (DO)	run-time loop initialization		n2 n1 --

		$CODE	84H,(DO,),XDO
		POP	DX		;index
		POP	AX		;limit
		XCHG	BP,SP		;put them on the return stack
		PUSH	AX		;R2:=S2
		PUSH	DX		;R1:=S2
		XCHG	BP,SP
		JMP	NEXT

;=C   I		leave index value			-- n

		$CODE	81H,,I,IDO
		MOV	AX,[BP]		;AX:=R1 (index)
		JMP	APUSH

;=C   DIGIT	convert c to binary using base n1	c n1 -- [n2] f

		$CODE	85H,DIGI,T,DIGIT
		POP	DX		;base
		POP	AX		;ASCII char
		SUB	AL,'0'
		JB	DIGI2		;error if c < '0'
		CMP	AL,9
		JBE	DIGI1		;number 0-9
		SUB	AL,7
		CMP	AL,10		;number A-Z?
		JB	DIGI2		;no, error
DIGI1: 		CMP	AL,DL
		JAE	DIGI2		;error if digit > base
		SUB	DX,DX
		MOV	DL,AL		;new binary number
		MOV	AL,1		;f==TRUE if OK
		JMP	DPUSH
DIGI2: 		SUB	AX,AX
		JMP	APUSH		;f==FALSE if error

PAGE


;=C*  (FIND)	dictionary search primtive		a1 NFA -- [PFA b] f

		$CODE	86H,(FIND,),PFIND
		MOV	AX,DS
		MOV	ES,AX		;DI defaults to ES
		POP	BX		;BX:=NFA
		POP	CX		;CX:=a1 ( search string )

PFIN1: 		MOV	DI,CX		;get addr
		MOV	AL,[BX]		;get word length
		MOV	DL,AL
		XOR	AL,[DI]
		AND	AL,3FH		;check lengths+smudge bit
		JNZ	PFIN5		;lengths differ

PFIN2: 		INC	BX		;length matches, check chars
		INC	DI
		MOV	AL,[BX]
		XOR	AL,[DI]
		ADD	AL,AL		;this checks bit 8
		JNZ	PFIN5		;chars differ
		JNB	PFIN2		;OK so far

	IF	_ALIGN
		ADD	BX,6		;Compute PFA ( could be 5 or 6)
		AND	BX,0FFFEH	;Clear LSB to align
	ELSE
		ADD	BX,5
	ENDIF
		;end of word (bit 8 set), a match

		PUSH	BX		;S3:=PFA
		MOV	AX,1		;f:=TRUE
		SUB	DH,DH		;DX:=length byte
		JMP	DPUSH		;S2:=f, S1:=l

		; No match, try the next dictionary entry

PFIN5: 		INC	BX		;advance BX to LFA
		JB	PFIN6		;bit 8 set - must be the end
		MOV	AL,[BX]
		ADD	AL,AL
		JMP	PFIN5
PFIN6:

	IF	_ALIGN
		INC	BX		;This could be one too many...
		AND	BX,0FFFEH	;Clear LSB to align
	ENDIF

		MOV	BX,[BX]		;BX:=(LFA)
		OR	BX,BX		;start of dictionary?
		JNZ	PFIN1		;no, keep looking
		MOV	AX,0		;no match, f:=FALSE
		JMP	APUSH		;S1:=f

PAGE


;=C   ENCLOSE	text scanning primitive			a1 c -- a1 n1 n2 n3

		$CODE	87H,ENCLOS,E,ENCL
		POP	AX		;delimiter c
		POP	BX		;text addr
		PUSH	BX		;S4:=text addr
		MOV	AH,0
		MOV	DX,-1		;DX is counter
		DEC	BX		;BX points to text

		; Scan to first non-delimiter

ENCL1: 		INC	BX		;next char
		INC	DX		;count it
		CMP	AL,[BX]		;delimiter found?
		JZ	ENCL1		;not yet, keep looking
		PUSH	DX		;yes, S3:=count
		CMP	AH,[BX]		;found NUL char?
		JNZ	ENCL2		;no...
		MOV	AX,DX		;yes, n2:=n3
		INC	DX		;n3:=n3+1
		JMP	DPUSH		;exit

		; Enclose text to first delimiter

ENCL2: 		INC	BX
		INC	DX
		CMP	AL,[BX]
		JZ	ENCL4		;found it...
		CMP	AH,[BX]		;NUL?
		JNZ	ENCL2		;no, keep looking

		; Found NUL at end of text

ENCL3: 		MOV	AX,DX
		JMP	DPUSH

		; Found delimiter

ENCL4: 		MOV	AX,DX		;count to delimiter
		INC	AX		;count to first > delimiter
		JMP	DPUSH		;S2, S1

SUBTTL Input/output primitives
PAGE


;=:*  EMIT	char output				c --

		$COLON	84H,EMI,T,EMIT
		DW	TICKEMIT,	AT,	EXEC
		DW	ONE,OUTT
		DW	PSTOR,SEMIS

;=:*  KEY	char input				-- c

		$COLON	83H,KE,Y,KEY
		DW	TICKEY,	AT,	EXEC,	SEMIS

;=C   ?TERMINAL	console status				-- f

		$CODE	89H,?TERMINA,L,QTERM
		JMP	PQTER

;=:*  CR	output carriage return/line feed	--

		$COLON 82H,C,R,CR
		DW	TICKCR,	AT,	EXEC,	SEMIS

SUBTTL
PAGE


;=C   CMOVE	byte block move				a1 a2 n --

		$CODE	85H,CMOV,E,CMOVE
		CLD			;count up
		MOV	BX,SI		;save IP
		POP	CX		;move count
		POP	DI		;a2 ( destination )
		POP	SI		;a1 ( source )
		MOV	AX,DS
		MOV	ES,AX		;intrasegment only
	REP	MOVSB			;all that for this?
		MOV	SI,BX
		JMP	NEXT

;=C   U*	unsigned mixed multiply			u1 u2 -- ud

		$CODE	82H,U,*,USTAR
		POP	AX
		POP	BX
		MUL	BX
		XCHG	AX,DX		;S1:=MSW, S2:=LSW
		JMP	DPUSH

;=C   U/	unsigned mixed divide			ud u -- urem uquot

		$CODE	82H,U,/,USLAS
		POP	BX		;BX:=divisor
		POP	DX		;DX:=MSW of dividend
		POP	AX		;AX:=LSW
		CMP	DX,BX		;0?
		JNB	DZERO
		DIV	BX
		JMP	DPUSH
DZERO: 		MOV	AX,-1		;divide by zero! leave -1
		MOV	DX,AX
		JMP	DPUSH

;=C   AND	bitwise AND				n n -- n

		$CODE	83H,AN,D,ANDD
		POP	AX
		POP	BX
		AND	AX,BX
		JMP	APUSH

;=C   OR	bitwise OR				n n -- n

		$CODE	82H,O,R,ORR
		POP	AX
		POP	BX
		OR	AX,BX
		JMP	APUSH

;=C   XOR	bitwise exclusive OR			n n -- n

		$CODE	83H,XO,R,XORR
		POP	AX
		POP	BX
		XOR	AX,BX
		JMP	APUSH

;=C   SP@	push current parameter stack pointer	-- SP

		$CODE	83H,SP,@,SPAT
		MOV	AX,SP
		JMP	APUSH

;=C   SP!	reset parameter stack			? --

		$CODE	83H,SP,!!!!,SPSTO
		MOV	BX,UP		;USER variable base addr
		MOV	SP,6[BX]	;S0 is 6 bytes above base
		JMP	NEXT

;=C   RP@	push current RP onto parameter stack	-- RP

		$CODE	83H,RP,@,RPAT
		MOV	AX,BP
		JMP	APUSH

;=C   RP!	reset return stack			? --

		$CODE	83H,RP,!!!!,RPSTO
		MOV	BX,UP		;USER variable base addr
		MOV	BP,8[BX]	;offset of R0 is 8
		JMP	NEXT

;=C   ;S	end of screen or run time colon word	--

		$CODE	82H,!!!;,S,SEMIS
		MOV	SI,[BP]		;IP:=R1 - pop return stack
		INC	BP		;adjust RP
		INC	BP
		JMP	NEXT

;=C   LEAVE	force loop exit				--

		$CODE	85H,LEAV,E,LEAVE
		MOV	AX,[BP]
		MOV	2[BP],AX	;limit:=index
		JMP	NEXT

;=C   >R	push parm. stack to return stack	n --

		_NFA	= $
		DB	82H,'>','R'+80H		;macro can't handle it!
		$LINKS	$+2,TOR

		POP	BX		;BX:=S1
		DEC	BP		;adjust RP
		DEC	BP
		MOV	[BP],BX		;push it
		JMP	NEXT

;=C   R>	pop return stack to parm. stack		-- n

		$CODE	82H,R,!!!>,FROMR
		MOV	AX,[BP]		;AX:=R1
		INC	BP		;adjust RP
		INC	BP
		JMP	APUSH

;=C   R		top of return stack to parm. stack	-- n

		$NAME	81H,,R
		$LINKS	IDO+2,RR	;synonym for I

;=C   0=	test top of stack for zero		n -- f

		$CODE	82H,0,=,ZEQU
		POP	AX
		OR	AX,AX
		MOV	AX,1
		JZ	ZEQU1
		DEC	AX
ZEQU1:		JMP	APUSH

;=C   0<	test top of stack for negative value	n -- f

		$CODE	82H,0,!!!<,ZLESS
		POP	AX
		OR	AX,AX
		MOV	AX,1
		JS	ZLESS1
		DEC	AX
ZLESS1:		JMP	APUSH

;=C   +		16-bit addition				n1 n2 -- nsum

		$CODE	81H,,+,PLUS
		POP	AX
		POP	BX
		ADD	AX,BX
		JMP	APUSH

;=C   D+	32-bit addition				d1 d2 -- dsum

		$CODE	82H,D,+,DPLUS
		POP	AX		;AX:=d2 MSW
		POP	DX		;DX:=d2 LSW
		POP	BX		;BX:=d1 MSW
		POP	CX		;CX:=d1 LSW
		ADD	DX,CX		;add low words
		ADC	AX,BX		;add high words with carry
		JMP	DPUSH

;=C   MINUS	16-bit two's complement			n -- -n

		$CODE	85H,MINU,S,MINUS
		POP	AX
		NEG	AX
		JMP	APUSH

;=C   DMINUS	32-bit two's complement			d -- -d

		$CODE	86H,DMINU,S,DMINU
		POP	BX		;MSW
		POP	CX		;LSW
		SUB	AX,AX
		MOV	DX,AX
		SUB	DX,CX		;subtract from 0
		SBB	AX,BX		;again for high word
		JMP	DPUSH

;=C   OVER	copy second stack item to top		n1 n2 -- n1 n2 n1

		$CODE	84H,OVE,R,OVER
		POP	DX
		POP	AX
		PUSH	AX
		JMP	DPUSH

;=C   DROP	throw out top stack item		n --

		$CODE	84H,DRO,P,DROP
		POP	AX
		JMP	NEXT

;=C   SWAP	exchange top two stack items		n1 n2 -- n2 n1

		$CODE	84H,SWA,P,SWAP
		POP	DX
		POP	AX
		JMP	DPUSH

;=C   DUP	duplicate the top stack item		n -- n n

		$CODE	83H,DU,P,DUPP
		POP	AX
		PUSH	AX
		JMP	APUSH

;=C   2DUP	duplicate the top two stack items	n1 n2 -- n1 n2 n1 n2

		$CODE	84H,2DU,P,TDUP
		POP	AX
		POP	DX
		PUSH	DX
		PUSH	AX
		JMP	DPUSH

;=C   +!	add to a memory location		n addr --

		$CODE	82H,+,!!!!,PSTOR
		POP	BX
		POP	AX
		ADD	[BX],AX
		JMP	NEXT

;=C   TOGGLE	toggle bits at a memory location	n addr --

		$CODE	86H,TOGGL,E,TOGGL
		POP	AX
		POP	BX
		XOR	[BX],AL
		JMP	NEXT

;=C   @		push memory location to stack		addr -- n

		$CODE	81H,,@,AT
		POP	BX
		MOV	AX,[BX]
		JMP	APUSH

;=C   C@	push byte location to stack		addr -- b

		$CODE	82H,C,@,CAT
		POP	BX
		MOV	AL,[BX]
		SUB	AH,AH
		JMP	APUSH

;=C   2@	fetch 32-bit number			addr -- d

		$CODE	82H,2,@,TAT
		POP	BX
		MOV	AX,[BX]		;LSW at addr
		MOV	DX,[BX+2]	;MSW at addr+2
		JMP	DPUSH

;=C   !		pop stack to memory - "store"		n addr --

		$CODE	81H,,!!!!,STORE
		POP	BX
		POP	AX
		MOV	[BX],AX
		JMP	NEXT

;=C   C!	byte store - "see-store"		b addr --

		$CODE	82H,C,!!!!,CSTOR
		POP	BX
		POP	AX
		MOV	[BX],AL
		JMP	NEXT

;=C   2!	32-bit store				d addr --

		$CODE	82H,2,!!!!,TSTOR
		POP	BX
		POP	AX
		MOV	[BX],AX		;move LSW to addr
		POP	AX
		MOV	2[BX],AX	;move MSW to addr+2
		JMP	NEXT
SUBTTL Defining words
PAGE


;=C   :		begin colon definition			--

		$COLON	0C1H,,:
		DW	QEXEC,	SCSP	;compile time code
		DW	CURR,	AT
		DW	CONT,	STORE
		DW	CREAT,	RBRAC
		DW	PSCOD
					;run time code
DOCOL: 		INC	DX		;W:=W+1
		DEC	BP
		DEC	BP		;RP:=RP-2
		MOV	[BP],SI		;push IP onto return stack
		MOV	SI,DX		;IP:=W
		JMP	NEXT

;=:   ;		end colon definition			--

		$COLON	0C1H,,!!!;
		DW	QCSP,	COMP
		DW	SEMIS,	SMUDG
		DW	LBRAC,	SEMIS

;=:   NOOP	do nothing - no operation		--

		$COLON	84H,NOO,P,NOOP
		DW	SEMIS

;=:   CONSTANT	define a symbolic constant		n --

		$COLON	88H,CONSTAN,T,CON
		DW	CREAT,	SMUDG	;compile time code
		DW	COMMA,	PSCOD
					;run time code
DOCON: 		INC	DX		;point W to PFA
		MOV	BX,DX
		MOV	AX,[BX]		;get data at PFA
		JMP	APUSH		;here it is!

;=:   VARIABLE	define a symbolic variable		n --

		$COLON	88H,VARIABL,E
		DW	CON,	PSCOD	;compile time code
					;run time code
DOVAR: 		INC	DX		;point W to PFA
		PUSH	DX		;return PFA
		JMP	NEXT

;=:   USER	define a user variable			n --

		$COLON	84H,USE,R
		DW	CON,	PSCOD	;compile time code
					;run time code
DOUSE: 		INC	DX		;point W to PFA
		MOV	BX,DX		;BX:=(PFA)   offset
		MOV	BL,[BX]		;BX:=(PFA)  offset<256
		SUB	BH,BH		;just to be safe...
		MOV	DI,UP		;DI:=UP  (user area base addr)
		LEA	AX,[BX+DI]	;load effective address
		JMP	APUSH		;push address to stack

	$REPORT	<Code-level kernel completed>

SUBTTL Constants and USER variables
PAGE +


;=#   0		zero					-- 0

		$CONST	81H,,0,ZERO
		DW	0

;=#   1		one					-- 1

		$CONST	81H,,1,ONE
		DW	1

;=#   2		two					-- 2

		$CONST	81H,,2,TWO
		DW	2

;=#   3		three					-- 3

		$CONST	81H,,3,THREE
		DW	3

;=#   BL	ASCII blank				-- 32

		$CONST	82H,B,L,BLS
		DW	20H

;=#   C/L	characters per line			-- 64

		$CONST	83H,C/,L,CSLL
		DW	64

;=#   FIRST	address of lowest disk buffer		-- addr

		$CONST	85H,FIRS,T,FIRST
		DW	BUF1

;=#   LIMIT	last available memory address + 1	-- addr

		$CONST	85H,LIMI,T,LIMIT
		DW	EM

;=#   B/BUF	size of disk buffers in bytes		-- 1024

		$CONST	85H,B/BU,F,BBUF
		DW	BUFSIZE

;=#   B/SCR	number of disk buffers per screen	-- 1

		$CONST	85H,B/SC,R,BSCR
		DW	1
SUBTTL
PAGE +


;=:   +ORIGIN	word for accessing data in low memory	n -- addr

		$COLON	87H,+ORIGI,N,PORIG
		DW	LIT,	ORIG
		DW	PLUS,	SEMIS

SUBTTL USER variables
PAGE +


;=U   S0	parameter stack base			-- addr

		$USER	82H,S,0,SZERO
		DW	6		;offset in user area

;=U   R0	return stack base			-- addr

		$USER	82H,R,0,RZERO
		DW	8

;=U   TIB	Terminal Input Buffer address		-- addr

		$USER	83H,TI,B,TIB
		DW	10

;=U   WIDTH	maximum length of word names		-- addr

		$USER	85H,WIDT,H,NWIDTH
		DW	12

;=U   WARNING	switch for error processing: 0, 1, -1	-- addr

		$USER	87H,WARNIN,G,WARN
		DW	14

;=U   FENCE	pointer to protected dictionary		-- addr

		$USER	85H,FENC,E,FENCE
		DW	16

;=U   DP	top address used in dictionary		-- addr

		$USER	82H,D,P,DP
		DW	18

;=U   VOC-LINK	pointer to top vocabulary		-- addr

		$USER	88H,VOC-LIN,K,VOCL
		DW	20

;The following user variables hold CFA's for their
;respective logical functions


;=U+  @KEY	CFA of function to do character input	-- addr

		$USER	84H,@KE,Y,TICKEY
		DW	22

;=U+  @EMIT	CFA of function to do character output	-- addr

		$USER	85H,@EMI,T,TICKEMIT
		DW	24

;=U+  @CR	CFA of function to output newline	-- addr

		$USER	83H,@C,R,TICKCR
		DW	58

;=U+  @BLKRD	CFA of function to read one block	-- addr

		$USER	86H,@BLKR,D,TICKBRD
		DW	26

;=U+  @BLKWRT	CFA of function to write one block	-- addr

		$USER	87H,@BLKWR,T,TICKBWRT
		DW	28

;=U   BLK	current block, 0 if terminal		-- addr

		$USER	83H,BL,K,BLK
		DW	30

;=U   IN	current character in input stream	-- addr

		$USER	82H,I,N,INN
		DW	32

;=U   OUT	count of characters output		-- addr

		$USER	83H,OU,T,OUTT
		DW	34

;=U   SCR	current screen				-- addr

		$USER	83H,SC,R,SCR
		DW	36

;=U   OFFSET	number of lowest block to be used	-- addr

		$USER	86H,OFFSE,T,OFSET
		DW	38

;=U   CONTEXT	current vocabulary for execution	-- addr

		$USER	87H,CONTEX,T,CONT
		DW	40

;=U   CURRENT	current vocabulary for definitions	-- addr

		$USER	87H,CURREN,T,CURR
		DW	42

;=U   STATE	current interpreter state		-- addr

		$USER	85H,STAT,E,STATE
		DW	44

;=U   BASE	current number base for i/o		-- addr

		$USER	84H,BAS,E,BASE
		DW	46

;=U   DPL	Decimal Point Locator 			-- addr

		$USER	83H,DP,L,DPL
		DW	48

;=U   CSP	temporary storage for Current SP	-- addr

		$USER	83H,CS,P,CSPP
		DW	52

;=U   R#	current editing cursor location		-- addr

		$USER	82H,R,#,RNUM
		DW	54

;=U   HLD	text pointer used in number formatting	-- addr

		$USER	83H,HL,D,HLD
		DW	56

	$REPORT	<Constants and user variables completed>

SUBTTL FORTH definitions
PAGE +


;=C   1+	increment the top stack item		n -- n+1

		$CODE	82H,1,+,ONEP
		POP	AX
		INC	AX
		JMP	APUSH

;=C   2+	add 2 to the top stack item		n -- n+2

		$CODE	82H,2,+,TWOP
		POP	AX
		INC	AX
		INC	AX
		JMP	APUSH

;=C+  1-	decrement the top stack item		n -- n-1

		$CODE	82H,1,-,ONEM
		POP	AX
		DEC	AX
		JMP	APUSH

;=C+  2-	subtract 2 from the top stack item	n -- n-2

		$CODE	82H,2,-,TWOM
		POP	AX
		DEC	AX
		DEC	AX
		JMP	APUSH

;=:   HERE	next available dictionary location	-- addr

		$COLON	84H,HER,E,HERE
		DW	DP,	AT,	SEMIS

;=:   ALLOT	reserve n bytes in the dictionary	n --

		$COLON	85H,ALLO,T,ALLOT
		DW	DP,	PSTOR,	SEMIS

;=:   ,		compile n into the dictionary		n --

		$COLON	81H,,!!!,,COMMA
		DW	HERE,	STORE
		DW	TWO,	ALLOT,	SEMIS

;=:   C,	compile a byte into the dictionary	b --

		$COLON	82H,C,!!!,,CCOMM
		DW	HERE,	CSTOR
		DW	ONE,	ALLOT,	SEMIS

;=C   -		16-bit subtraction			n1 n2 -- n1-n2

		$CODE	81H,,-,SUBB
		POP	DX
		POP	AX
		SUB	AX,DX
		JMP	APUSH

;=:   =		test top two items for equality		n1 n2 -- f

		$COLON	81H,,=,EQUAL
		DW	SUBB,	ZEQU,	SEMIS

;=C   <		test for top number > second number	n1 n2 -- f

		$CODE	81H,,!!!<,LESS
		POP	DX
		POP	AX
		MOV	BX,DX
		XOR	BX,AX
		JS	LES1		;signs different
		SUB	AX,DX
LES1: 		OR	AX,AX		;test sign bit
		MOV	AX,0		;assume false
		JNS	LES2		;not less than
		INC	AX		;return true (1)
LES2: 		JMP	APUSH

;=:   U<	unsigned test for top > next item	u1 u2 -- f

		$COLON	82H,U,!!!<,ULESS
		DW	TDUP,	XORR,	ZLESS
			$GO?0	ULES1
		DW	DROP,	ZLESS,	ZEQU
			$GOTO	ULES2
ULES1: 		DW	SUBB,	ZLESS
ULES2: 		DW	SEMIS

;=:   >		test for second item > top of stack	n1 n2 -- f

		$COLON	81H,,!!!>,GREAT
		DW	SWAP,	LESS,	SEMIS

;=C   ROT	bring the third stack item to top	n1 n2 n3 -- n2 n3 n1

		$CODE	83H,RO,T,ROT
		POP	DX
		POP	BX
		POP	AX
		PUSH	BX
		JMP	DPUSH

;=:   SPACE	output a blank				--

		$COLON	85H,SPAC,E,SPACE
		DW	BLS,	EMIT,	SEMIS

;=:   -DUP	duplicate the top number if it isn't 0	n -- n [n]

		$COLON	84H,-DU,P,DDUP
		DW	DUPP
			$GO?0	DDUP1
		DW	DUPP
DDUP1: 		DW	SEMIS

;=:   TRAVERSE	move across a fig-FORTH name field	addr1 n -- addr2

		$COLON	88H,TRAVERS,E,TRAV
		DW	SWAP
TRAV1: 		DW	OVER,	PLUS
		DW	LIT,	7FH
		DW	OVER,	CAT,	LESS
			$GO?0	TRAV1
		DW	SWAP,	DROP,	SEMIS

;=:   LATEST	return the top NFA in CURRENT		-- NFA

		$COLON	86H,LATES,T,LATES
		DW	CURR,	AT,	AT,	SEMIS

;=:   LFA	convert a PFA to LFA			PFA -- LFA

		$COLON	83H,LF,A,LFA
		DW	LIT,	4
		DW	SUBB,	SEMIS

;=:   CFA	convert a PFA to CFA			PFA -- CFA

		$COLON	83H,CF,A,CFA
		DW	TWO,	SUBB,	SEMIS

;=:*  NFA	convert a PFA to NFA			PFA -- NFA

		$COLON	83H,NF,A,NFA
		DW	LIT,	5
		DW	SUBB

	IF	_ALIGN
		DW	DUPP,	CAT
		DW	LIT,	90H,	EQUAL	;90H==NOP!
			$GO?0	NFA1
		DW	ONEM
NFA1:
	ENDIF

		DW	LIT,	-1
		DW	TRAV,	SEMIS

;=:*  PFA	convert a NFA to PFA			NFA -- PFA

		$COLON	83H,PF,A,PFA
		DW	ONE,	TRAV
	IF	_ALIGN
		DW	LIT,	6,	PLUS
		DW	LIT,	-2,	ANDD
	ELSE
		DW	LIT,	5,	PLUS
	ENDIF
		DW	SEMIS

;=:   !CSP	save SP at CSP				--

		$COLON	84H,!!!!CS,P,SCSP
		DW	SPAT,	CSPP
		DW	STORE,	SEMIS

;=:   ?ERROR	issue error message m if f is TRUE	f m --

		$COLON	86H,?ERRO,R,QERR
		DW	SWAP
			$GO?0	QERR1
		DW	ERROR
			$GOTO	QERR2
QERR1: 		DW	DROP
QERR2: 		DW	SEMIS

;=:   ?COMP	issue a message if not compiling	--

		$COLON	85H,?COM,P,QCOMP
		DW	STATE,	AT
		DW	ZEQU,	LIT,	17
		DW	QERR,	SEMIS

;=:   ?EXEC	issue a message if not executing	--

		$COLON	85H,?EXE,C,QEXEC
		DW	STATE,	AT
		DW	LIT,	18
		DW	QERR,	SEMIS

;=:   ?PAIRS	issue a message if n1 <> n2		n1 n2 --

		$COLON	86H,?PAIR,S,QPAIR
		DW	SUBB
		DW	LIT,	19
		DW	QERR,	SEMIS

;=:   ?CSP	issue a message if SP <> (CSP)		--

		$COLON	84H,?CS,P,QCSP
		DW	SPAT,	CSPP,	AT,	SUBB
		DW	LIT,	20
		DW	QERR,	SEMIS

;=:   ?LOADING	issue a message if not loading		--

		$COLON	88H,?LOADIN,G,QLOAD
		DW	BLK,	AT,	ZEQU
		DW	LIT,	22
		DW	QERR,	SEMIS

;=:   COMPILE	compile the following word at run time	--

		$COLON	87H,COMPIL,E,COMP
		DW	QCOMP
		DW	FROMR,	DUPP,	TWOP,	TOR
		DW	AT,	COMMA,	SEMIS

;=:   [		suspend compilation to do calculations	--

		$COLON	0C1H,,[,LBRAC
		DW	ZERO,	STATE,	STORE,	SEMIS

;=:   ]		resume compilation after [		--

		$COLON	81H,,],RBRAC
		DW	LIT,	0C0H
		DW	STATE,	STORE,	SEMIS

;=:   SMUDGE	make the latest definition unFINDable	--

		$COLON	86H,SMUDG,E,SMUDG
		DW	LATES
		DW	LIT,	20H
		DW	TOGGL,	SEMIS

;=:   HEX	set the current number base to 16	--

		$COLON	83H,HE,X
		DW	LIT,	16
		DW	BASE,	STORE,	SEMIS

;=:   DECIMAL	set the current number base to 10	--

		$COLON	87H,DECIMA,L,DECA
		DW	LIT,	10
		DW	BASE,	STORE,	SEMIS

;=:   (;CODE)	run time code for ;CODE			--

		$COLON	87H,(!!!;CODE,),PSCOD
		DW	FROMR,	LATES,	PFA
		DW	CFA,	STORE,	SEMIS

;=:   ;CODE	end colon compilation, start CODE	--

		$COLON	0C5H,!!!;COD,E,SEMIC
		DW	QCSP
		DW	COMP,	PSCOD,	LBRAC
SEMI1		DW	NOOP	; (ASSEMBLER)
		DW	SEMIS

;=:   <BUILDS	define compile time behavior		--

		$COLON	87H,!!!<BUILD,S,BUILD
		DW	ZERO,	CON,	SEMIS

;=:   DOES>	define run time behavior		--

		$COLON	85H,DOES,!!!>,DOES
		DW	FROMR,	LATES,	PFA,	STORE
		DW	PSCOD

DODOE: 		XCHG	BP,SP		;get RP
		PUSH	SI		;RP:=IP
		XCHG	BP,SP
		INC	DX		;point W to PFA
		MOV	BX,DX
		MOV	SI,[BX]		;IP:=(PFA)
		INC	DX
		INC	DX		;W points to PFA
		PUSH	DX
		JMP	NEXT

;=:   COUNT	prepare to type a string		addr -- addr+1 n

		$COLON	85H,COUN,T,COUNT
		DW	DUPP,	ONEP,	SWAP,	CAT,	SEMIS

;=:   TYPE	output n characters beginning at addr	addr n --

		$COLON	84H,TYP,E,TYPES
		DW	DDUP
			$GO?0	TYPE1
		DW	OVER,	PLUS
		DW	SWAP,	XDO
TYPE2: 		DW	IDO,	CAT,	EMIT
			$LOOP	TYPE2
			$GOTO	TYPE3
TYPE1: 		DW	DROP
TYPE3: 		DW	SEMIS

;=:   -TRAILING	adjust addr/n to avoid trailing blanks	addr n1 -- addr n2

		$COLON	89H,-TRAILIN,G,DTRAI
		DW	DUPP,	ZERO,	XDO
DTRA1: 		DW	OVER,	OVER,	PLUS
		DW	ONE,	SUBB,	CAT
		DW	BLS,	SUBB
			$GO?0	DTRA2
		DW	LEAVE
			$GOTO	DTRA3
DTRA2: 		DW	ONE,	SUBB
DTRA3: 			$LOOP	DTRA1
		DW	SEMIS

;=:   (.")	run time code for ."			--

		$COLON	84H,(.!!!",),PDOTQ
		DW	RR
		DW	COUNT,	DUPP,	ONEP
		DW	FROMR,	PLUS,	TOR
		DW	TYPES,	SEMIS

;=:   ."	print the following string		--

		$COLON	0C2H,.,!!!",DOTQ
		DW	LIT,	'"'
		DW	STATE,	AT
			$GO?0	DOTQ1
		DW	COMP
		DW	PDOTQ,	WORDS,	HERE
		DW	CAT,	ONEP,	ALLOT
			$GOTO	DOTQ2
DOTQ1: 		DW	WORDS,	HERE,	COUNT,	TYPES
DOTQ2: 		DW	SEMIS

;=:   EXPECT	input up to n characters to addr	addr n --

		$COLON	86H,EXPEC,T,EXPEC
		DW	OVER,	PLUS,	OVER
		DW	XDO
EXPE1: 		DW	KEY,	DUPP
		DW	LIT,	0EH
		DW	PORIG,	AT,	EQUAL
			$GO?0	EXPE2
		DW	DROP,	DUPP,	IDO
		DW	EQUAL,	DUPP,	FROMR
		DW	TWO,	SUBB,	PLUS
		DW	TOR
			$GO?0	EXPE6
		DW	LIT,	BELL
			$GOTO	EXPE7
EXPE6: 		DW	LIT,	BSOUT,	EMIT
		DW	BLS,	EMIT
		DW	LIT,	BSOUT
EXPE7: 			$GOTO	EXPE3
EXPE2: 		DW	DUPP,	LIT,	ACR
		DW	EQUAL
			$GO?0	EXPE4
		DW	LEAVE,	DROP,	BLS,	ZERO
			$GOTO	EXPE5
EXPE4: 		DW	DUPP
EXPE5: 		DW	IDO
		DW	CSTOR,	ZERO,	IDO,	ONEP
		DW	STORE
EXPE3: 		DW	EMIT
			$LOOP	EXPE1
		DW	DROP,	SEMIS

;=:   QUERY	EXPECT 80 characters to TIB		--

		$COLON	85H,QUER,Y,QUERY
		DW	TIB,	AT
		DW	LIT,	80,	EXPEC
		DW	ZERO,	INN,	STORE,	SEMIS

;=:   <nul>	0 in input: resets interpreter		--

		_NFA	= $
		DB	0C1H,80H	;zero header
		$LINKS	DOCOL

		DW	BLK,	AT
			$GO?0	NULL1
		DW	ONE,	BLK,	PSTOR
		DW	ZERO,	INN,	STORE
		DW	BLK,	AT
		DW	BSCR,	ONE,	SUBB,	ANDD
		DW	ZEQU
			$GO?0	NULL2
		DW	QEXEC,	FROMR,	DROP
NULL2: 			$GOTO	NULL3
NULL1: 		DW	FROMR,	DROP
NULL3: 		DW	SEMIS

;=C   FILL	fill n bytes at address with c		addr n c --

		$CODE	84H,FIL,L,FILL
		POP	AX		;fill char
		POP	CX		;fill count
		POP	DI		;destination address
		MOV	BX,DS
		MOV	ES,BX		;same segment
		CLD			;fill toward higher address
	REP	STOSB			;GO!
		JMP	NEXT

;=:   ERASE	fill n bytes at addr with 0's		addr n --

		$COLON	85H,ERAS,E,ERASEE
		DW	ZERO,	FILL,	SEMIS

;=:   BLANKS	fill n bytes at addr with blanks	addr n --

		$COLON	86H,BLANK,S,BLANK
		DW	BLS,	FILL,	SEMIS

;=:   HOLD	insert char in formatted output		c --

		$COLON	84H,HOL,D,HOLD
		DW	LIT,	-1
		DW	HLD,	PSTOR
		DW	HLD,	AT,	CSTOR,	SEMIS

;=:   PAD	returns addr of the text output buffer	-- addr

		$COLON	83H,PA,D,PAD
		DW	HERE,	LIT,	68,	PLUS,	SEMIS
		DW	PLUS,	SEMIS

;=:   WORD	get a word delimited by char to HERE	c --

		$COLON	84H,WOR,D,WORDS
		DW	BLK,	AT
			$GO?0	WORD1
		DW	BLK,	AT,	BLOCK
			$GOTO	WORD2
WORD1: 		DW	TIB,	AT
WORD2: 		DW	INN,	AT,	PLUS,	SWAP
		DW	ENCL,	HERE
		DW	LIT,	34
		DW	BLANK,	INN,	PSTOR
		DW	OVER,	SUBB,	TOR
		DW	RR,	HERE,	CSTOR
		DW	PLUS,	HERE,	ONEP
		DW	FROMR,	CMOVE,	SEMIS

;=:   (NUMBER)	ASCII to binary conversion primitive	d1 addr1 -- d2 addr2

		$COLON	88H,(NUMBER,),PNUMB
PNUM1: 		DW	ONEP
		DW	DUPP,	TOR
		DW	CAT,	BASE,	AT,	DIGIT
			$GO?0	PNUM2
		DW	SWAP,	BASE,	AT,	USTAR
		DW	DROP,	ROT,	BASE,	AT
		DW	USTAR,	DPLUS
		DW	DPL,	AT,	ONEP
			$GO?0	PNUM3
		DW	ONE,	DPL,	PSTOR
PNUM3: 		DW	FROMR
			$GOTO	PNUM1
PNUM2: 		DW	FROMR,	SEMIS

;=:   NUMBER	convert string at addr to 32-bit number	addr -- d

		$COLON	86H,NUMBE,R,NUMB
		DW	ZERO,	ZERO
		DW	ROT,	DUPP,	ONEP,	CAT
		DW	LIT,	"-",	EQUAL
		DW	DUPP,	TOR,	PLUS
		DW	LIT,	-1
NUMB1: 		DW	DPL,	STORE
		DW	PNUMB
		DW	DUPP,	CAT,	BLS,	SUBB
			$GO?0	NUMB2
		DW	DUPP,	CAT
		DW	LIT,	".",	SUBB
		DW	ZERO,	QERR,	ZERO
			$GOTO	NUMB1
NUMB2: 		DW	DROP,	FROMR
			$GO?0	NUMB3
		DW	DMINU
NUMB3: 		DW	SEMIS

;=:   -FIND	search dictionary for next input word	-- [PFA b] f

		$COLON	85H,-FIN,D,DFIND
		DW	BLS,	WORDS
		DW	HERE,	CONT,	AT,	AT
		DW	PFIND,	DUPP,	ZEQU
			$GO?0	DFIN1
		DW	DROP
		DW	HERE,	LATES,	PFIND
DFIN1: 		DW	SEMIS

;=:   (ABORT)	error function when WARNING is -1	--

		$COLON	87H,(ABORT,),PABOR
		DW	ABORT,	SEMIS

;=:   ERROR	system error handler - n is line no.	n -- [IN BLK]

		$COLON	85H,ERRO,R,ERROR
		DW	WARN,	AT,	ZLESS
			$GO?0	ERRO1
		DW	PABOR
ERRO1: 		DW	HERE,	COUNT,	TYPES
		DW	PDOTQ
		DB	2,"? "
		DW	MESS
		DW	SPSTO
		DW	BLK,	AT,	DDUP
			$GO?0	ERRO2
		DW	INN,	AT,	SWAP
ERRO2: 		DW	QUIT

;=:   ID.	print dictionary name field		NFA --

		$COLON	83H,ID,.,IDDOT
		DW	PAD
		DW	LIT,	32
		DW	LIT,	'_'
		DW	FILL
		DW	DUPP,	PFA,	LFA
		DW	OVER,	SUBB
		DW	PAD,	SWAP,	CMOVE
		DW	PAD,	COUNT
		DW	LIT,	1FH	;use low 5 bits of length
		;Last char of name must have MSB reset!
		DW	ANDD,	DUPP,	PAD,	PLUS
		DW	LIT,	80H,	TOGGL
		DW	TYPES,	SPACE,	SEMIS
		DW	ANDD,	TYPES,	SPACE,	SEMIS

;=:*  CREATE	create a dictionary header		--

		$COLON	86H,CREAT,E,CREAT
		DW	DFIND
			$GO?0	CREA1
		DW	DROP,	NFA,	IDDOT
		DW	LIT,	4,	MESS	;"not unique"
		DW	SPACE
CREA1: 		DW	HERE,	DUPP,	CAT
		DW	NWIDTH,	AT,	MIN
		DW	ONEP,	ALLOT
		DW	DUPP
		DW	LIT,	0A0H
		DW	TOGGL			;smudge it
		DW	HERE,	ONE,	SUBB
		DW	LIT,	80H
		DW	TOGGL			;last char has bit 8 set

	IF	_ALIGN
;This section of code forces the body of a compiled FORTH word to
;lie on even addresses.  This allows the threaded CFA's to be
;fetched by the inner interpreter in one bus cycle.  For the 8088
;this means nothing, and the extra space required for alignment
;should be saved by setting _ALIGN to FALSE.  The literal 90H is
;used because MASM uses NOP's to align words.  NFA expects
;90H to be used also.
		DW	LIT,	90H,	CCOMM
		DW	DP,	AT
		DW	LIT,	-2,	ANDD
		DW	DP,	STORE
	ENDIF
		DW	LATES,	COMMA		;compile LFA
		DW	CURR,	AT,	STORE	;update vocabulary
		DW	HERE,	TWOP,	COMMA,	SEMIS	;CFA:=PFA

;=:   [COMPILE]	compile an otherwise immediate word	--

		$COLON	0C9H,[COMPILE,]
		DW	DFIND
		DW	ZEQU,	ZERO,	QERR
		DW	DROP,	CFA,	COMMA,	SEMIS

;=:   LITERAL	compile n to be used at run time	n --

		$COLON	0C7H,LITERA,L,LITER
		DW	STATE,	AT
			$GO?0	LITE1
		DW	COMP,	LIT,	COMMA
LITE1: 		DW	SEMIS

;=:   DLITERAL	compile d to be used at run time	d --

		$COLON	0C8H,DLITERA,L,DLITE
		DW	STATE,	AT
			$GO?0	DLIT1
		DW	SWAP,	LITER,	LITER
DLIT1:		DW	SEMIS

;=:   ?STACK	check if the stack is out of bounds	--

		$COLON	86H,?STAC,K,QSTAC
		DW	SPAT,	SZERO,	AT
		DW	SWAP,	ULESS,	ONE,	QERR	;underflow
		DW	SPAT,	HERE
		DW	LIT,	80H
		DW	PLUS,	ULESS
		DW	LIT,	7
		DW	QERR				;overflow
		DW	SEMIS

;=:   INTERPRET	outer text interpreter			--

		$COLON	89H,INTERPRE,T,INTER
INTE1: 		DW	DFIND			;begin
			$GO?0	INTE2
		DW	STATE,	 AT,	LESS
			$GO?0	INTE3
		DW	CFA,	COMMA		;compile it
			$GOTO	INTE4
INTE3: 		DW	CFA,	EXEC		;execute it
INTE4: 		DW	QSTAC
			$GOTO	INTE5
INTE2: 		DW	HERE,	NUMB,	DPL,	AT,	ONEP
			$GO?0	INTE6
		DW	DLITE			;32-bit number
			$GOTO	INTE7
INTE6: 		DW	DROP,	LITER		;16-bit number
INTE7:		DW	QSTAC
INTE5:			$GOTO	INTE1		;repeat forever

;=:   IMMEDIATE	mark the latest word to be executed	--

		$COLON	89H,IMMEDIAT,E
		DW	LATES
		DW	LIT,	40H	;bit 7 is precedence
		DW	TOGGL,	SEMIS

;=:   VOCABULARY	define a new vocabulary		--

		$COLON	8AH,VOCABULAR,Y
		DW	BUILD
		DW	LIT,	0A081H
		DW	COMMA
		DW	CURR,	AT
		DW	CFA,	COMMA,	HERE,	VOCL
		DW	AT,	COMMA,	VOCL,	STORE
		DW	DOES
DOVOC: 		DW	TWOP,	CONT,	STORE,	SEMIS

;=:   FORTH	FORTH vocabulary header			--

		$DOES	0C5H,FORT,H,FORTH
		DW	DOVOC
		DW	0A081H		;fake a null name field!
		DW	LASTNFA		;link changes as def's are added
		DW	0		;end of voc list

;=:   DEFINITIONS	set CURRENT to CONTEXT		--

		$COLON	8BH,DEFINITION,S,DEFIN
		DW	CONT,	AT
		DW	CURR,	STORE,	SEMIS

;=:   (		begin a comment ended by ')'		--

		$COLON	0C1H,,(
		DW	LIT,	')',	WORDS,	SEMIS

;=:   QUIT	halt execution, reset interpreter	--

		$COLON	84H,QUI,T,QUIT
		DW	ZERO,	BLK,	STORE
		DW	LBRAC
QUIT1: 		DW	RPSTO,	CR,	QUERY
		DW	INTER
		DW	STATE,	AT,	ZEQU
			$GO?0	QUIT2
		DW	PDOTQ
		DB	2,"ok"
QUIT2: 			$GOTO	QUIT1

;=:   ABORT	clear stacks and begin execution	--

		$COLON	85H,ABOR,T,ABORT
		DW	SPSTO,	DECA,	QSTAC,	CR
		DW	DOTCPU,	PDOTQ
		DB	16H,'Fig-FORTH  Version '
		DB	FIGREL+30H, '.', FIGREV+30H
		DW	LIT,	10,	PORIG,	CAT
		DW	LIT,	41H,	PLUS,	EMIT
		DW	FORTH,	DEFIN
		DW	LIT,	0,	PRTER,	STORE	;Reset echo

; The following lines add command line interpretation.
; Any text at 80H is copied to the TIB and interpreted.
; This code should probably go somewhere else, but I never bothered
; to move it...

		DW	LIT,	80H,	COUNT,	DUPP	;anyone here?
			$GO?0	AB1			;no...
		DW	ZERO,	LIT,	80H,	CSTOR	;don't do twice
		DW	TIB,	AT,	DUPP
		DW	LIT,	64,	ERASEE		;ensure NUL end
		DW	SWAP,	CMOVE			;move it
		DW	ZERO,	INN,	STORE
		DW	ZERO,	BLK,	STORE,	LBRAC
		DW	CR,	CR,	INTER		;interpret it
			$GOTO AB2
AB1:		DW	DROP,	DROP			;nothing to do
AB2:		DW	QUIT				;back to normal

; Warm start vector comes here

WRM: 		MOV	SI,OFFSET WRM1
		JMP	NEXT
WRM1		DW	WARM

;=:   WARM	empty disk buffers and abort		--

		$COLON	84H,WAR,M,WARM
		DW	MTBUF,	ABORT

; Cold start vector comes here

CLD: 		MOV	SI,OFFSET CLD1		;initialize IP
		MOV	AX,CS
		MOV	DS,AX			;all in one segment
		MOV	SP,12H[ORIG]		;initialize SP
		MOV	SS,AX
		MOV	ES,AX
		CLD				;SI gets incremented
		MOV	BP,RPP			;init RP

		CALL NEAR PTR SYSINIT	;system dependent initialization

		JMP	NEXT

CLD1 		DW	COLD

;=:*  COLD	full initialization and restart		--

		$COLON	84H,COL,D,COLD
		DW	DRZER,	MTBUF
		DW	FIRST,	USE,	STORE
		DW	FIRST,	PREV,	STORE
		DW	LIT,	ORIG+12H
		DW	LIT,	UP,	AT
		DW	LIT,	6,	PLUS
		DW	LIT,	16,	CMOVE	;USER variables
		DW	LIT,	ORIG+12,AT
		DW	LIT,	FORTH+6,STORE	;vocabulary link

; Initialize i/o vectors

		DW	LIT,	PKEY,	TICKEY,		STORE
		DW	LIT,	PEMIT,	TICKEMIT,	STORE
		DW	LIT,	PCR,	TICKCR,		STORE
		DW	LIT,	BLKRD,	TICKBRD,	STORE
		DW	LIT,	BLKWRT,	TICKBWRT,	STORE

		DW	ABORT

;=C   S->D	convert a 16-bit number to 32-bits	n -- d

		_NFA	= $
		DB	84H,'S->','D'+80H
		$LINKS	$+2,STOD

		POP	DX		;n, becomes LSW of result
		SUB	AX,AX
		OR	DX,DX		;is n negative?
		JNS	STOD1		;no, MSW:=AX=0
		DEC	AX		;yes, MSW:=-1
STOD1: 		JMP	DPUSH		;S1=MSW, S2=LSW

;=:   +-	apply the sign of n2 to n1		n1 n2 -- n3

		$COLON	82H,+,-,PM
		DW	ZLESS
			$GO?0	PM1
		DW	MINUS
PM1: 		DW	SEMIS

;=:   D+-	apply the sign of n to d1		d1 n -- d2

		$COLON	83H,D+,-,DPM
		DW	ZLESS
			$GO?0	DPM1
		DW	DMINU
DPM1: 		DW	SEMIS

;=:   ABS	take the absolute value of n1		n1 -- n2

		$COLON	83H,AB,S,ABBS
		DW	DUPP,	PM,	SEMIS

;=:   DABS	take the absolute value of d1		d1 -- d2

		$COLON	84H,DAB,S,DABS
		DW	DUPP,	DPM,	SEMIS

;=:   MIN	return the smaller of n1 and n2		n1 n2 -- n

		$COLON	83H,MI,N,MIN
		DW	TDUP,	GREAT
			$GO?0	MIN1
		DW	SWAP
MIN1: 		DW	DROP,	SEMIS
;=:   MAX	return the larger of two numbers	n1 n2 -- n

		$COLON	83H,MA,X,MAX
		DW	TDUP,	LESS
			$GO?0	MAX1
		DW	SWAP
MAX1: 		DW	DROP,	SEMIS

;=:   M*	mixed multiplication			n1 n2 -- d

		$COLON	82H,M,*,MSTAR
		DW	TDUP,	XORR,	TOR
		DW	ABBS
		DW	SWAP,	ABBS,	USTAR
		DW	FROMR,	DPM,	SEMIS

;=:   M/	mixed division				d n1 -- nrem nquot

		$COLON	82H,M,/,MSLAS
		DW	OVER,	TOR,	TOR
		DW	DABS
		DW	RR,	ABBS,	USLAS
		DW	FROMR,	RR,	XORR
		DW	PM,	SWAP,	FROMR
		DW	PM,	SWAP,	SEMIS

;=:   *		16-bit signed multipication		n1 n2 -- n1*n2

		$COLON	81H,,*,STAR
		DW	MSTAR,	DROP,	SEMIS

;=:   /MOD	16-bit signed division with remainder	n1 n2 -- nrem nquot

		$COLON	84H,/MO,D,SLMOD
		DW	TOR,	STOD,	FROMR
		DW	MSLAS,	SEMIS

;=:   /		16-bit signed division			n1 n2 -- nquot

		$COLON	81H,,/,SLASH
		DW	SLMOD,	SWAP,	DROP,	SEMIS

;=:   MOD	16-bit modulo division			n1 n2 -- nrem

		$COLON	83H,MO,D,MODD
		DW	SLMOD,	DROP,	SEMIS

;=:   */MOD	scale n1 by the ratio of n2 to n3	n1 n2 n3 -- nrem nquot

		$COLON	85H,*/MO,D,SSMOD
		DW	TOR,	MSTAR,	FROMR
		DW	MSLAS,	SEMIS

;=:   */	scale n1 by the ratio of n2 to n3	n1 n2 n3 -- nquot

		$COLON	82H,*,/,SSLA
		DW	SSMOD,	SWAP,	DROP,	SEMIS

;=:   M/MOD	mixed unsigned scaler			ud1 u -- urem udquot

		$COLON	85H,M/MO,D,MSMOD
		DW	TOR,	ZERO,	RR,	USLAS
		DW	FROMR,	SWAP,	TOR
		DW	USLAS,	FROMR,	SEMIS

;=:   (LINE)	convert a line/screen to addr/count	l s -- addr count

		$COLON	86H,(LINE,),PLINE
		DW	TOR
		DW	LIT,	64
		DW	BBUF,	SSMOD
		DW	FROMR,	BSCR,	STAR
		DW	PLUS
		DW	BLOCK,	PLUS
		DW	LIT,	64,	SEMIS

;=:   .LINE	type line n1 in screen n2		n1 n2 --

		$COLON	85H,.LIN,E,DLINE
		DW	PLINE,	DTRAI,	TYPES,	SEMIS

;=:   MESSAGE	type error message n			n --

		$COLON	87H,MESSAG,E,MESS
		DW	WARN,	AT
			$GO?0	MESS1
		DW	DDUP
			$GO?0	MESS2
		DW	LIT,	4
		DW	OFSET,	AT,	BSCR,	SLASH
		DW	SUBB,	DLINE,	SPACE
MESS2: 			$GOTO	MESS3
MESS1: 		DW	PDOTQ
		DB	6,"MSG # "
		DW	DOT
MESS3: 		DW	SEMIS

	$REPORT	<FORTH kernel completed>

INCLUDE	4TH-SYSD.ASM			;System dependent code

SUBTTL Disk interface words
PAGE +

;=?   DRIVE	disk drive last accessed		-- addr

		$VAR	85H,DRIV,E,DRIVE
		DW	0

;=?+  RECORD	disk record last accessed		-- addr

		$VAR	86H,RECOR,D,REC
		DW	0

;=?+  DTA	disk transfer address last used		-- addr

		$VAR	83H,DT,A,DTA
		DW	FIRST

;=?   USE	pointer to disk buffer to use next	-- addr

		$VAR	83H,US,E,USE
		DW	BUF1

;=?   PREV	pointer to disk buffer last accessed	-- addr

		$VAR	84H,PRE,V,PREV
		DW	BUF1

;=#   #BUFF	total number of block buffers		-- n

		$CONST	85H,#BUF,F,NOBUF
		DW	NSCR

;=?   DISK-ERROR	status of last disk operation	-- addr

		$VAR	8AH,DISK-ERRO,R,DSKERR
		DW	0

;=?*  PRINTER	flag controlling printer		-- addr

		$VAR	87H,PRINTE,R,PRTER
		DW	0

;Block read/write words modified to use execution vectors.
;The functions called by BLOCK-READ/-WRITE have the following stack
;effect: ( addr blk -- ) and set DISK-ERROR accordingly.

;=:+  BLOCK-READ	read one block to addr		addr blk --

		$COLON	8AH,BLOCK-REA,D,BLOCKRD
		DW	TICKBRD,	AT,	EXEC,	SEMIS

;=:+  BLOCK-WRITE	write one block from addr	addr blk --

		$COLON	8BH,BLOCK-WRIT,E,BLOCKWRT
		DW	TICKBWRT,	AT,	EXEC,	SEMIS

;=:*  +BUF	advance addr to next buffer		addr1 -- addr2

		$COLON	84H,+BU,F,PBUF
		DW	BBUF,	TWOP,	TWOP	;B/BUF+4
		DW	PLUS,	DUPP,	LIMIT,	EQUAL
			$GO?0	PBUF1
		DW	DROP,	FIRST
PBUF1: 		DW	DUPP,	PREV,	AT
		DW	SUBB,	SEMIS

;=:   UPDATE	mark PREV buffer to be saved		--

		$COLON	86H,UPDAT,E,UPDAT
		DW	PREV,	AT,	AT
		DW	LIT,	8000H
		DW	ORR
		DW	PREV,	AT,	STORE,	SEMIS

;=:*  EMPTY-BUFFERS	wipe out disk buffers		--

		$COLON	8DH,EMPTY-BUFFER,S,MTBUF
		DW	FIRST,	LIMIT,	OVER
		DW	SUBB,	ERASEE
;Modified so that emptied buffers won't look like block 0:
;instead, they're all assigned to block 32767.  If you want to
;use FORTH on a disk that big - TOO BAD!
		DW	LIT,	7FFFH
		DW	NOBUF,	ONEP,	ZERO,	XDO
MTBUF1:		DW	DUPP,	BUFFE,	DROP
			$LOOP	MTBUF1
		DW	DROP,	SEMIS

;Words added to save buffers:

;=:+  SAVBUF	saves buffer at addr if updated		addr --

		$COLON	86H,SAVBU,F,SAVBUF
		DW	DUPP,	TOR,	AT,	ZLESS
			$GO?0	SVBF1		;not updated, return
		DW	RR,	TWOP,	RR,	AT
		DW	LIT,	7FFFH,	ANDD	;15-bits only!
		DW	ZERO,	RSLW		;write it
		DW	DSKERR,	AT,	ZEQU
			$GO?0	SVBF1		;don't un-update if error
		DW	RR,	ONEP		;high byte!
		DW	LIT,	80H,	TOGGL	;un-update buffer
SVBF1:		DW	FROMR,	DROP,	SEMIS

;=:+  SAVE-BUFFERS	flush buffers but don't empty	--

		$COLON	8CH,SAVE-BUFFER,S,SAVBUFS
		DW	PREV,	AT
SVBFS1:		DW	PBUF,	OVER,	SAVBUF,	ZEQU
			$GO?0	SVBFS1
		DW	DROP,	SEMIS

;=:*  BUFFER	assign an available buffer to block n	n -- addr

;BUFFER changed to write out ALL dirty buffers when one is found.

		$COLON	86H,BUFFE,R,BUFFE
		DW	USE,	AT,	DUPP,	TOR
BUFF1: 		DW	PBUF
			$GO?0	BUFF1		;dont use PREV
		DW	USE,	STORE		;use this one NEXT!
		DW	RR,	AT,	ZLESS	;found a dirty one?
			$GO?0	BUFF2		;no
		DW	SAVBUFS			;yes, save ALL
BUFF2:		DW	RR,	STORE		;set header to n
		DW	RR,	PREV,	STORE	;this is now PREV
		DW	FROMR,	TWOP,	SEMIS	;leave data addr

;=:*  BLOCK	get block n				n -- addr

		$COLON	85H,BLOC,K,BLOCK
		DW	OFSET,	AT,	PLUS,	TOR	;get n+offset
		DW	PREV,	AT,	DUPP		;look in PREV first
		DW	AT,	RR,	SUBB
		DW	DUPP,	PLUS			;throw out high bit
			$GO?0	BLOC1			;n is in PREV
BLOC2: 		DW	PBUF,	ZEQU			;check next buffer
			$GO?0	BLOC3			;found it
		DW	DROP,	RR			;not in buffer
		DW	BUFFE,	DUPP			;get a buffer
		DW	RR,	ONE,	RSLW		;read blk
		DW	TWO,	SUBB			;leave buffer addr
BLOC3: 		DW	DUPP,	AT,	RR,	SUBB	;check the buffer
		DW	DUPP,	PLUS,	ZEQU
			$GO?0	BLOC2
		DW	DUPP,	PREV,	STORE		;either found it or read it
BLOC1: 		DW	FROMR,	DROP			;return
		DW	TWOP,	SEMIS

;T&SCALC now done by D&RCALC in SYSD.ASM file...

;=:*  R/W	block read/write, f=1=write, f=2=read	addr blk f --

		$COLON	83H,R/,W,RSLW
;Modified to simply pass the address and blk to the R/W functions
			$GO?0	RSLW1
		DW	BLOCKRD
			$GOTO	RSLW2
RSLW1:		DW	BLOCKWRT
RSLW2:		DW	DSKERR,	AT,	DDUP
			$GO?0	RSLW5		;OK
		DW	ZLESS
			$GO?0	RSLW3
		DW	LIT,	9		;Write error
			$GOTO	RSLW4
RSLW3:		DW	LIT,	8		;Read error
RSLW4:		DW	LIT,	7FFFH		;Set buffer to 32767
		DW	PREV,	AT,	STORE	; to mark as bad
		DW	WARN,	AT,	ZLESS	;If WARNING<0 then
			$GO?0 RSLW6		;assume he can handle it
			$GOTO RSLW7		;otherwise,
RSLW6:		DW	ZERO,	WARN,	STORE	;don't try to read!
RSLW7:		DW	QERR
RSLW5:		DW	SEMIS

;=:*  FLUSH	empty buffers, saving changed ones	--

		$COLON	85H,FLUS,H,FLUSH
		DW	NOBUF,	ONEP
		DW	ZERO,	XDO
FLUS1: 		DW	LIT,	7FFFH,	BUFFE,	DROP
			$LOOP	FLUS1
		DW	SEMIS

;=:   LOAD	interpret screen n			n --

		$COLON	84H,LOA,D
		DW	BLK,	AT,	TOR
		DW	INN,	AT,	TOR
		DW	ZERO,	INN,	STORE
		DW	BSCR,	STAR,	BLK,	STORE
		DW	INTER
		DW	FROMR,	INN,	STORE
		DW	FROMR,	BLK,	STORE
		DW	SEMIS

;=:   -->	continue with next screen		--

		$COLON	0C3H,--,!!!>
		DW	QLOAD
		DW	ZERO,	INN,	STORE
		DW	BSCR,	BLK,	AT
		DW	OVER,	MODD,	SUBB
		DW	BLK,	PSTOR,	SEMIS
SUBTTL
PAGE +


;=:   '		find next input word in dictionary	-- PFA

		_NFA	= $
		DB	0C1H,"'"+80H
		$LINKS	DOCOL,TICK

		DW	DFIND,	ZEQU
		DW	ZERO,	QERR
		DW	DROP,	LITER,	SEMIS

;=:*  FORGET	chop off the top of the dictionary	--

		$COLON	86H,FORGE,T
		DW	CURR,	AT
		DW	CONT,	AT
		DW	SUBB
		DW	LIT,	24,	QERR	;"declare vocabulary"
		DW	TICK,	DUPP
		DW	FENCE,	AT,	ULESS	;note change from fig
		DW	LIT,	21,	QERR	;"in protected dictionary"
		DW	DUPP
		DW	NFA,	DP,	STORE
		DW	LFA,	AT
		DW	CONT,	AT,	STORE,	SEMIS
SUBTTL Control flow structures
PAGE

;=:   BACK	compile a backward branch offset	target --

		$COLON	84H,BAC,K,BACK
		DW	HERE,	SUBB
		DW	COMMA,	SEMIS

;=:   BEGIN	starting point of looping structures	-- HERE 1

		$COLON	0C5H,BEGI,N
		DW	QCOMP
		DW	HERE,	ONE,	SEMIS

;=:   ENDIF	end of IF..ELSE..THEN structure		addr 2 --

		$COLON	0C5H,ENDI,F,ENDIFF
		DW	QCOMP
		DW	TWO,	QPAIR
		DW	HERE,	OVER,	SUBB
		DW	SWAP,	STORE,	SEMIS

;=:   THEN	synonym for ENDIF			addr 2 --

		$COLON	0C4H,THE,N
		DW	ENDIFF,	SEMIS

;=:   DO	start of DO..LOOP structure		-- HERE 3

		$COLON	0C2H,D,O
		DW	COMP,	XDO
		DW	HERE,	THREE,	SEMIS

;=:   LOOP	end of DO..LOOP structure		addr 3 --

		$COLON	0C4H,LOO,P
		DW	THREE,	QPAIR
		DW	COMP,	XLOOP
		DW	BACK,	SEMIS

;=:   +LOOP	end of DO..+LOOP structure		addr 3 --

		$COLON	0C5H,+LOO,P
		DW	THREE,	QPAIR
		DW	COMP,	XPLOO
		DW	BACK,	SEMIS

;=:   UNTIL	end of BEGIN..UNTIL loop		addr 1 --

		$COLON	0C5H,UNTI,L,UNTIL
		DW	ONE,	QPAIR
		DW	COMP,	ZBRAN
		DW	BACK,	SEMIS

;=:   END	synonym for UNTIL			addr 1 --

		$COLON	0C3H,EN,D
		DW	UNTIL,	SEMIS

;=:   AGAIN	end of BEGIN..AGAIN infinite loop	addr 1 --

		$COLON	0C5H,AGAI,N,AGAIN
		DW	ONE,	QPAIR
		DW	COMP,	BRAN
		DW	BACK,	SEMIS

;=:   REPEAT	end of BEGIN..WHILE..REPEAT structure	addr 1 --

		$COLON	0C6H,REPEA,T
		DW	TOR,	TOR
		DW	AGAIN
		DW	FROMR,	FROMR
		DW	TWO,	SUBB
		DW	ENDIFF,	SEMIS

;=:   IF	conditional branch structure		-- 2

		$COLON	0C2H,I,F,IFF
		DW	COMP,	ZBRAN
		DW	HERE,	ZERO,	COMMA
		DW	TWO,	SEMIS

;=:   ELSE	optional part of IF..ELSE..THEN		addr 2 -- HERE 2

		$COLON	0C4H,ELS,E
		DW	TWO,	QPAIR
		DW	COMP,	BRAN
		DW	HERE,	ZERO,	COMMA
		DW	SWAP
		DW	TWO,	ENDIFF,	TWO
		DW	SEMIS

;=:   WHILE	conditional loop BEGIN..WHILE..REPEAT	addr 2 -- HERE 4

		$COLON	0C5H,WHIL,E
		DW	IFF,	TWOP,	SEMIS
SUBTTL Output formatting words
PAGE +


;=:   SPACES	type n spaces				n --

		$COLON	86H,SPACE,S,SPACS
		DW	ZERO,	MAX
		DW	DDUP
			$GO?0	SPAX1
		DW	ZERO,	XDO
SPAX2: 		DW	SPACE
			$LOOP	SPAX2
SPAX1: 		DW	SEMIS

;=:   <#	begin number formatting			--

		$COLON	82H,!!!<,#,BDIGS
		DW	PAD,	HLD,	STORE
		DW	SEMIS

;=:   #>	end number formatting			d -- addr count

		$COLON	82H,#,!!!>,EDIGS
		DW	DROP,	DROP
		DW	HLD,	AT
		DW	PAD
		DW	OVER,	SUBB,	SEMIS

;=:   SIGN	places a '-' in output if n < 0		n d -- d

		$COLON	84H,SIG,N,SIGN
		DW	ROT,	ZLESS
			$GO?0	SIGN1
		DW	LIT,	'-',	HOLD
SIGN1: 		DW	SEMIS

;=:   #		convert one digit of d1 to ASCII	d1 -- d2

		$COLON	81H,,#,DIG
		DW	BASE,	AT,	MSMOD
		DW	ROT
		DW	LIT,	9
		DW	OVER,	LESS
			$GO?0	DIG1
		DW	LIT,	7,	PLUS
DIG1: 		DW	LIT,	'0',	PLUS
		DW	HOLD,	SEMIS

;=:   #S	process all significant digits of d1	d1 -- 0.

		$COLON	82H,#,S,DIGS
DIGS1: 		DW	DIG
		DW	OVER,	OVER
		DW	ORR,	ZEQU
			$GO?0	DIGS1
		DW	SEMIS

;=:   D.R	print d right-aligned in n columns	d n --

		$COLON	83H,D.,R,DDOTR
		DW	TOR,	SWAP,	OVER
		DW	DABS
		DW	BDIGS
		DW	DIGS,	SIGN
		DW	EDIGS
		DW	FROMR,	OVER,	SUBB
		DW	SPACS,	TYPES,	SEMIS

;=:   .R	print n1 right-aligned in n2 columns	n1 n2 --

		$COLON	82H,.,R,DOTR
		DW	TOR
		DW	STOD,	FROMR,	DDOTR,	SEMIS

;=:   D.	print a 32-bit number			d --

		$COLON	82H,D,.,DDOT
		DW	ZERO
		DW	DDOTR,	SPACE,	SEMIS

;=:   .		print a 16-bit number			n --

		$COLON	81H,,.,DOT
		DW	STOD,	DDOT,	SEMIS

;=:   ?		print the value at addr			addr --

		$COLON	81H,,?,QUES
		DW	AT,	DOT,	SEMIS

;=:   U.	print an unsigned 16-bit number		u --

		$COLON	82H,U,.,UDOT
		DW	ZERO,	DDOT,	SEMIS

;=:   VLIST	print the words in CONTEXT vocabulary	--

		$COLON	85H,VLIS,T
		DW	LIT,	80H
		DW	OUTT,	STORE
		DW	CONT,	AT,	AT
VLIS1: 		DW	OUTT,	AT
		DW	CSLL,	GREAT
			$GO?0	VLIS2
		DW	CR
		DW	ZERO,	OUTT,	STORE
VLIS2: 		DW	DUPP
		DW	IDDOT
		DW	SPACE,	SPACE
		DW	PFA,	LFA,	AT
		DW	DUPP,	ZEQU
		DW	QTERM,	ORR
			$GO?0	VLIS1
		DW	DROP,	SEMIS

;=:   LIST	list screen n, as 16 lines of 64 chars	n --

		$COLON	84H,LIS,T,LISTC
		DW	DUPP,	BLOCK	,DROP	;added 7-9-83
		DW	DECA,	CR
		DW	DUPP,	SCR,	STORE
		DW	PDOTQ
		DB	6,"SCR # "
		DW	DOT
		DW	LIT,	16,	ZERO,	XDO
LIST1: 		DW	CR,	IDO
		DW	LIT,	3,	DOTR,	SPACE
		DW	IDO,	SCR,	AT,	DLINE
		DW	QTERM
			$GO?0	LIST2
		DW	LEAVE
LIST2: 			$LOOP	LIST1
		DW	CR,	SEMIS

;=:   INDEX	print line 0 of screens n1 thru n2	n1 n2 --

		$COLON	85H,INDE,X
		DW	LIT,	FF,	EMIT,	CR
		DW	ONEP,	SWAP,	XDO
INDE1: 		DW	CR,	IDO
		DW	LIT,	3,	DOTR,	SPACE
		DW	ZERO,	IDO,	DLINE
		DW	QTERM
			$GO?0	INDE2
		DW	LEAVE
INDE2: 			$LOOP	INDE1
		DW	SEMIS

;=:   TRIAD	list screens in groups of three		n1 n2 --

		$COLON	85H,TRIA,D
		DW	LIT,	FF,	EMIT
		DW	LIT,	3,	SLASH
		DW	LIT,	3,	STAR
		DW	LIT,	3,	OVER
		DW	PLUS,	SWAP,	XDO
TRIA1: 		DW	CR,	IDO,	LISTC
		DW	QTERM
			$GO?0	TRIA2
		DW	LEAVE
TRIA2: 			$LOOP	TRIA1
		DW	CR
		DW	LIT,	15,	MESS,	CR
		DW	SEMIS
;
		$COLON	84H,.CP,U,DOTCPU
		DW	BASE,	AT
		DW	LIT,	36,	BASE,	STORE
		DW	LIT,	22H,	PORIG,	TAT
		DW	DDOT
		DW	BASE,	STORE,	SEMIS

IF	_EXTEND
INCLUDE	4TH-XTNS.ASM
ENDIF

	$REPORT	<FORTH definitions completed>

SUBTTL End of FORTH dictionary
PAGE



;=:   TASK	word to mark the end of the dictionary	--

LASTNFA:
		$COLON	84H,TAS,K,TASK
		DW	SEMIS
;
INITDP		EQU	$
MAIN		ENDS

	$REPORT	<End of assembly source>

		END	ORIG
```
{% endraw %}

## 4TH-OPTS.ASM

{% raw %}
```
;Assembly options and equates for FIG-FORTH

TRUE		EQU	-1
FALSE		EQU	0

_ALIGN		EQU	TRUE	;definitions begin on even addresses
_DEBUG		EQU	FALSE	;include breakpoint/trace code
_FILES		EQU	TRUE	;include DOS file interface
_REPORT		EQU	TRUE	;assembly progress reports
_EXTEND		EQU	TRUE	;CODE extensions in "4TH-XTNS.ASM"
_DIRECTCON	EQU	FALSE	;console functions disable/enable
_TIMEANDDATE	EQU	TRUE	;include time and date functions

IOBITS		EQU	7	;number of bits to send/recieve

DRIVES		EQU	2	;How many drives?
INCH		EQU	8	;size of disks (8 or 5)
SIDES		EQU	1	;Number of sides/disk (1 or 2)
DENSITY		EQU	1	;1=single, 2=double density
				;5.25" is always double density
```
{% endraw %}

## 4TH-SYSD.ASM

{% raw %}
```
SUBTTL System dependent code
PAGE


;Operating system dependent functions for FIG-FORTH

; This is the ^C interrupt handler code fragment.  The FORTH IP
; (SI) is loaded with the address of a pointer to the FORTH word
; (ABORT).  The jump to NEXT starts execution of the interpreter.

CTRLC:		PUSH	SI
		MOV	SI,2[BRK]	;Note: should be CS:2[BRK]
		CMP	SI,0		;check @BREAK
		JNZ	CC1		;not zero, (ABORT)
		POP	SI
		IRET			;zero, don't break
CC1:
		POP	AX		;adjust stack
		MOV	SI,OFFSET BRK+2
		JMP	NEXT

; This is code to perform system dependent initialization
; SYSINIT is called just prior to COLD

SYSINIT		PROC	NEAR
		MOV	AL,23H		;^C interrupt no.
		MOV	DX,OFFSET CTRLC
		MOV	AH,25H		;set ^C addr.
		INT	21H
		RET
SYSINIT		ENDP

;=?+  @BREAK	CFA of function to get control on ^C	-- addr

	$VAR	86H,@BREA,K,BRK
	DW	PABOR			;normal ABORT

;=C*  BYE	exit FORTH				? -- ?

	$CODE	83H,BY,E,BYE
	INT	20H

	INCLUDE	4TH-DISK.ASM	;FIG disk interface

	IF	_FILES
	INCLUDE	4TH-FILE.ASM	;MSDOS file interface
	ENDIF

	$REPORT	<MS-DOS disk interface completed>
	$REPORT	<B/BUF	=>,%BUFSIZE
	$REPORT	<B/REC	=>,%RECSIZE
	$REPORT	<BLK/DSK	=>,%BLPDRIVE

;****************************************
;*					*
;*	i/o primitives :		*
;*					*
;*	PQTER, PKEY, PEMIT, PCR,	*
;*	CONOUT, LSTOUT			*
;*					*
;****************************************
;
	IF	_DIRECTCON
CONIN		EQU	7
CONOUT		EQU	6
	ELSE
CONIN		EQU	8		;MSDOS console i/o fctn, no echo
CONOUT		EQU	2		;MSDOS console output function
	ENDIF
CONSTAT		EQU	11		;MSDOS console status check fctn

LSTOUT		EQU	5		;MSDOS printer output function
	IF	IOBITS EQ 8
CMASK		EQU	0FFH		;Use all 8 bits
	ELSE
CMASK		EQU	07FH		;Use only low 7 bits
	ENDIF
;
PQTER:
	IF	_DIRECTCON
		MOV	DX,00FFH	;read keyboard instead
		MOV	AH,CONOUT	;direct keyboard i/o, no wait
		INT	21H
		SUB	AH,AH		;AL has char or 0
		JMP	APUSH
	ELSE
		MOV	AH,CONSTAT
		INT	21H
		SUB	AH,AH		;AL=0FFh if character avail.
		JMP	APUSH
	ENDIF

;=C*  (KEY)	read console primitive			-- c

		$CODE	85H,(KEY,),PKEY
		MOV	AH,CONIN
		INT	21H
		AND	AX,CMASK	;strip unwanted bits
		JMP	APUSH

;=C*  (EMIT)	console char. output primitive		c --

		$CODE	86H,(EMIT,),PEMIT
		POP	DX		;char to send
		CALL	POUT
		JMP	NEXT

;=C*  (CR)	console newline primitive		--

		$CODE	84H,(CR,),PCR
		MOV	DX,ACR		;send carriage return
		CALL	POUT
		MOV	DX,LF		;and a linefeed
		CALL	POUT
		JMP	NEXT

;Code called by i/o functions above to do console and list output
;If the variable PRINTER contains 0, the character is sent to the
;console only.  If PRINTER is positive, the character is sent to the
;LST device only.  If PRINTER is negative, the character is sent to
;both the printer and the console.

POUT:
		AND	DX,CMASK	;strip off undesired bits
		MOV	BX,2[PRTER]	;check PRINTER
		OR	BX,BX		;zero?
		JZ	CONS		;console output only
		MOV	AH,LSTOUT	;non-zero, send to LST
		INT	21H
		JS	PRONLY		;negative, printer output only
CONS:
	IF	_DIRECTCON AND (IOBITS EQ 8)
		CMP	DL,0FFH		;try to send 0FF via fn. 6
		JNE	CONS1		;would wreak havoc, so
		MOV	AH,2		;do normal console output
		INT	21H
		RET
	ENDIF
CONS1:		MOV	AH,CONOUT	;send it to the console
		INT	21H
PRONLY:		RET

	$REPORT	<MS-DOS i/o primitives completed>

	IF	_TIMEANDDATE
;********************************************************
;*							*
;*		TIME@, TIME!, DATE@, DATE!		*
;*							*
;********************************************************

;=C+  TIME@	fetch system time			-- n1 n2

		$CODE	85H,TIME,@
		MOV	AH,2CH		;Get time
		INT	21H
		PUSH	DX		;[sec sec/100]
		PUSH	CX		;[hr min]
		JMP	NEXT

;=C+  TIME!	set system time				n1 n2 --

		$CODE	85H,TIME,!!!!
		POP	CX		;[hr min]
		POP	DX		;[sec sec/100]
		MOV	AH,2DH		;set time
		INT	21H
		JMP	NEXT

;=C+  DATE@	fetch system date			-- n1 n2 n3

		$CODE	85H,DATE,@
		MOV	AH,2AH		;get date in CX&DX
		INT	21H
		PUSH	CX		;year
		MOV	AL,DH		;month is in DH
		XOR	AH,AH		;clear high bytes
		XOR	DH,DH
		JMP	DPUSH		;DL=day
		$CODE	85H,DATE,!!!!

;=C+  DATE!	set system date				n1 n2 n3 --

		POP	CX		;year
		POP	DX		;DL=day
		POP	AX
		MOV	DH,AL		;DH=month
		MOV	AH,2BH		;set date
		INT	21H
		JMP	NEXT

	$REPORT	<MS-DOS time and date functions included>
	ENDIF
```
{% endraw %}

## 4TH-UG.DOC

{% raw %}
```










                                     User's Guide for


                                   8086/8088 FIG-FORTH






                                       Release 1.0

                                  With Compiler Security
                                           and
                                  Variable Length Words


                                        March 1981



                             ================================


                           MS-DOS File Interface and Revisions

                                        July 1983






               This program and documentation are released  to  the  public
               domain.  The FIG-FORTH listing  is  made  available  by  the
               FORTH Interest Group, P.O. Box 8231, San Jose, CA 95155.

               Modified for MS-DOS and documented by J.E.   Smith,  U.   of
               Penn./Dept.of  Chem,  Philadelphia,  PA   19104   (to   whom
               inquiries should be directed). 

               Any  further  distribution  of  this  software  is  strictly
               encouraged, as long as you don't get rich and  keep  it  all
               for yourself. 

               If you modify this revised version  and  re-distribute  your
               own version, it would be polite  to  notify  the  author  of
               these  revisions,  and  to  take  responsibility  for   your
               modifications. 

          8086/8088 FIG-FORTH User's Guide                      Page 2





          2.0  Quick Reference

          This is a summary of information necessary to use  FIG-FORTH
          and its documentation. 


          2.1  System Requirements

          FORTH requires the following system resources:

                * an 8086 or 8088 CPU running MS-DOS version  1.10  or
                  1.25

                * 64K of available RAM, or about 100K total

                * one or two disk drives



          2.2  Invocation

          FORTH is started by typing the following in response to  the
          COMMAND prompt. 

                   FORTH <commands>

          Where <commands> is an optional list of FORTH  words  to  be
          executed. 

          FORTH normally uses a special disk.  To  use  MS-DOS  files,
          the following commands are available:

                   A:                      selects drive A
                   B:                      selects drive B
                   DIR" <filename>"        lists matching file information
                   FILES" <filename>"      lists matching file names
                   USING" <filename>"      selects <filename> for screen access
                   EOF                     closes current screen file
                   LOAD" <filename>"       loads the screens in <filename>
                   ERASE" <filename>"      erases any matching files


          Note:   NEVER change any disk while  FORTH  is  using  a
                  file on that  disk!   Study  the  section  below
                  regarding disk operations. 

          8086/8088 FIG-FORTH User's Guide                      Page 3





          2.3  Provided Documentation

          This document contains three main sections:

                * FORTH user's guide
                  The user's guide tells you how to  use  the  special
                  features in this version of FORTH. 

                * FORTH technical reference
                  The   technical   reference   contains   information
                  regarding modifications and additions to  the  FORTH
                  interpreter/compiler    relative    to    the    FIG
                  implementation. 

                * FORTH glossary
                  This is a list and explanation of  each  FORTH  word
                  which has been changed or added to this  version  of
                  FORTH. 

          8086/8088 FIG-FORTH User's Guide                      Page 4





          3.0  Introduction

          This document describes changes and additions  to  FIG-FORTH
          v1.0 which is distributed by the

                   FORTH Interest Group
                   P.O. Box 8231
                   San Jose, CA  95155

          as modified to run under MS-DOS by

                   Joe Smith
                   University of Pennsylvania
                   Dept. of Chemistry
                   250 S. 33rd St. 
                   Philadelphia, PA  19104

          This  software  and  the   accompanying   documentation   is
          available from

                   SIG/86
                   c/o Joseph Boykin
                   47-4 Sheridan Dr. 
                   Shrewsbury, MA  01545

          This  version  of  FIG-FORTH  incorporates   a   number   of
          significant changes to the FIG version.  The following is  a
          partial list:

                * written for Microsoft's MACRO-86 assembler

                * full MS-DOS file interaction, as well as usual FORTH
                  disk access

                * all i/o is vectored and may  be  re-directed  within
                  FORTH

                * command line interpretation


          Modifications   to   the   FIG-FORTH   implementation   were
          undertaken to alleviate several problems.   First,  the  FIG
          version is  for  CP/M-86.   Once  FORTH  was  running  under
          MS-DOS,  the  lack  of  a   file   interface   soon   became
          intolerable.   Also,  the  assembly   source   for   Seattle
          Computer's assembler was not transportable to  other  MS-DOS
          systems.  The translation to Microsoft's MACRO-86 was  begun
          in January  of  1983  and  the  file  system  interface  was
          completed the following June. 

          My original goal was to install a language for my  own  use.
          That is still my primary concern.  Accordingly, this version
          of the language is recommended for people who  are  familiar

          8086/8088 FIG-FORTH User's Guide                      Page 5



          with  their  computer,  and  (somewhat   less   importantly)
          familiar with FORTH.  If you are new to FORTH, you will have
          to dig for some of the  basic  information.   (some  helpful
          references are listed at the end of this guide).  If you are
          a person who enjoys understanding  and  tinkering  with  the
          mechanisms (read 'hacker') you should feel  right  at  home.
          If you are an experienced FORTH wizard, you can tell me  all
          the things I did wrong! 

          The  author (J.E.S.) gratefully acknowledges the efforts  of 
          the  FORTH  Interest Group (FIG) in providing  FORTH  source  
          code.   FORTH  owes much of its popularity  to the  work  of  
          this organization, it was the first significant software  to 
          run  on my system (even before I had disks) and without them 
          this implementation would certainly not exist. 

          Also, special  thanks  to  Joseph  Boykin,  whose  TOP  text
          processor formatted this document.

          8086/8088 FIG-FORTH User's Guide                      Page 6





          4.0  User's Guide

          This documentation presents specific  details  necessary  to
          use this version of FORTH under MS-DOS.  It is not a  user's
          guide to FORTH in general.  Several introductory  references
          are given at the end of this guide


          4.1  System Requirements

          The FORTH interpreter/compiler as distributed requires:

                * an 8086/8088 computer running MS-DOS version 1.10 or
                  1.25

                * 64K of RAM, or 96K total,  including  the  operating
                  system

                * one or more disk drives

          These  requirements   may   be   changed   to   almost   any
          configuration by changing options in the assembly source and
          re-assembling.  This process requires:

                * All of the above requirements, plus another  64K  of
                  RAM, or 128K total (for MACRO-86)

                * the MACRO-86 macro assembler, or its equivalent

                * the LINK-86 linker, or its equivalent

                * the EXE2BIN program to convert the linker output  to
                  a .COM file

          See the section below, "Modifying FORTH", and the  technical
          reference for further information.

          8086/8088 FIG-FORTH User's Guide                      Page 7





          4.2  FORTH, Calculator Style

          The simplest mode of interaction with FORTH is  through  the
          system console.  You type commands,  FORTH  interprets  them
          and carries out your  orders;  much  the  same  as  using  a
          powerful, programmable calculator. 


          4.2.1  Getting Started

          FORTH is invoked from MS-DOS by typing:

                   FORTH <optional command list>

          in response to COMMAND's prompt.  This will load and execute
          the FORTH interpreter.  FORTH  will  initialize  itself  and
          print a banner something like

                   8086 FIG-FORTH Version 1.1A

          Then, FORTH begins executing any commands you give  it.   If
          there  was  anything  else  on  the   command   line,   i.e.
          <command list> was present, FORTH attempts to interpret  it.
          Thus, if you wanted to find out what 8086  is  in  hex,  you
          could type:

                   A:FORTH 8086 HEX . BYE

          and FORTH would reply:

                   8086 FIG-FORTH Version 1.1A

                   1F96
                   A:

          If nothing was passed on  the  command  line,  FORTH  simply
          types a carriage return and waits for you.  The command list
          is limited to a total of  80  characters.   If  you  type  a
          carriage return at this point, FORTH should  respond:  "ok".
          If it doesn't, you have a problem. 


          4.2.2  Communicating With FORTH

          Keyboard entries are  handled  by  the  FORTH  word  EXPECT.
          EXPECT only recognizes two special keys: <DELETE> and  <CR>.
          Any other key is presumed  to  be  a  valid  character.   No
          MS-DOS editing functions are available.  The exact key which
          FORTH recognizes as <DELETE> defaults to  ASCII  DEL.   This
          may be easily changed to any other key.  The  section  below
          on  modifying  FORTH  tells  how  to  change  the  backspace
          character.  If you type <DELETE>,  EXPECT  will  delete  the
          last character entered.  If you try to go past the beginning

          8086/8088 FIG-FORTH User's Guide                      Page 8



          of the line, the terminal should beep and leave  the  cursor
          in the first column. 


          4.2.3  Special Functions

          While no editing functions are provided, MS-DOS does respond
          to some other special  keys.   Any  console  output  may  be
          paused by typing ^S.  Printer output is toggled using ^P/^N.
          Because MS-DOS intercepts these keys, FORTH will  never  see
          them.  Another function, the interrupt key ^C, has  variable
          effects.   Normally,  pressing  ^C  causes   the   currently
          executing FORTH word to be interrupted.  Control  is  passed
          to the FORTH word (ABORT) which usually aborts  the  current
          word and  resets  the  interpreter.   This  process  may  be
          changed to  provide  more  intelligent  interrupt  handling.
          Refer to the last part of the technical reference section on
          "Modifying FORTH" for more information. 

          There are a number of assembly options which may affect  the
          exact  way  these  keys  are  handled.   See  the  technical
          reference section entitled "installation dependent code" for
          further information. 


          4.2.4  New Definitions

          One command FORTH accepts is the  colon  ":".   Colon  is  a
          command to begin compiling  the  following  text  as  a  new
          definition.  No "ok" will appear until you have successfully
          completed your definition and ended it with a semicolon ";".
          The definition may be spread out over as many lines  as  you
          need, up to 80 characters on each line.   Until  you  end  a
          line by typing <CR>, you may back up and  change  it.   Once
          you go on to the next line, no editing is  possible.   FORTH
          will make you aware of any errors in the definition.  If you
          make a mistake, the whole definition must be entered again. 

          Try the following definition:

               : STAR 42 EMIT ;

          FORTH should respond "ok" after you hit  return.   Now  test
          STAR by typing: STAR<CR>.  FORTH  should  print  "*ok".   If
          that worked, try this one:

               : MILKY-WAY
                 BEGIN
                    STAR SPACE SPACE
                    ?TERMINAL
                 UNTIL ;

          Remember, no "ok" will  be  printed  until  you  finish  the
          definition with  the  semicolon.   Any  leading  spaces  are
          ignored.  Test MILKY-WAY as with STAR.  When you  get  tired

          8086/8088 FIG-FORTH User's Guide                      Page 9



          of star-gazing, stop the program by hitting  any  key.   The
          stars  should  stop,  and  FORTH  should  inform  you   that
          everything is "ok".  You can also  pause  the  execution  of
          MILKY-WAY using ^S, or abort it using ^C. 

          You can experiment with other definitions, but having no way
          of modifying  the  functions  without  re-typing  them  soon
          becomes a serious problem.  The next section  tells  how  to
          edit and load definitions stored on your  disk.   Don't  try
          any disk operations until you have read the next section. 


          4.2.5  Exiting FORTH

          To return to MS-DOS, say "BYE" to FORTH.

          8086/8088 FIG-FORTH User's Guide                     Page 10





          4.3  Using the Disk

          Standard FORTH supports only  the  most  primitive  of  file
          structures.  FORTH views the  disk  as  a  linear  array  of
          blocks which may be accessed in any  order.   A  disk  block
          formatted as 16 lines of 64 characters is called  a  screen.
          In  the  standard  configuration,  FIG-FORTH  bypasses   the
          operating system file structure.  This means that FORTH must
          have a disk all to itself.  While there  are  advantages  to
          this  arrangement  (no  directory  overhead,   simple   disk
          interface,  portability  across   operating   systems,   for
          instance),  it  is  often  inconvenient  that  FORTH  should
          totally ignore its host operating system's files. 

          To deal with this conflict, and yet  maintain  compatibility
          with standard FORTH disk access,  the  FIG-FORTH  model  was
          changed.  The words which do all disk access, BLOCK-READ and
          BLOCK-WRITE, can now be assigned to any function.  Thus,  by
          telling BLOCK-READ/WRITE to use a file instead of  the  disk
          directly, all of the standard FORTH disk words will refer to
          blocks of that file.  The user can easily switch between the
          two modes, or use one exclusively.  Also, all of  the  usual
          disk words will work on a file as  well  as  the  old  FORTH
          disk. 


          4.3.1  Creating and Editing Definitions

          There  are  three  editors  distributed  with  the  package.
          Unfortunately, there isn't time or space to  describe  their
          use  here.   All  are  described  elsewhere,  however.   The
          editors provided include:

                * two line-oriented editors: the  FORTH  Inc.   editor
                  described in Leo Brodie's "STARTING FORTH"  and  the
                  FIG   portable   editor   described   in   the   FIG
                  installation manual. 

                * a screen editor described  in  Dr.   Dobb's  Journal
                  No. 59.  This editor is configured for the Televideo
                  950 terminal, and must be  modified  for  any  other
                  terminal. 

          Any of these may be used with either screen files  or  FORTH
          disks.  All examples in this guide will refer to the  editor
          described by Brodie, which has been compiled and included in
          the FORTH.COM file. 

          8086/8088 FIG-FORTH User's Guide                     Page 11



          4.3.2  FORTH Disk Access

          After a COLD start, any disk words will access a FORTH disk.
          If you start FORTH and type "4 LIST",  it  assumes  you  are
          asking to see the fourth disk block.  In this mode, all disk
          transfers bypass the file system.  The user  has  access  to
          all blocks on the  disk,  and  if  more  than  one  disk  is
          available, FORTH will treat them as one disk  of  twice  the
          capacity. 

          Once you use a screen file, you must execute SWITCH  to  get
          back to the FORTH disk.  This should remind you to  "switch"
          your FIG-FORTH disk for the MS-DOS disk. 

          The disk interface allows you to use only one  format  at  a
          time.   That  is,  FORTH  cannot  automatically   adapt   to
          different  FORTH  disk  formats  the  way  MS-DOS  can.   By
          changing the constants  that  describe  the  disk,  you  can
          manually change formats to any supported by your i/o system. 

          To find what format FORTH expects, type

                   B/BUF REC/BLK / . 

          This gives the sector  size  in  bytes.   To  determine  the
          capacity of the disk FORTH expects,  display  the  constants
          BLK/DRIVE, MAXDRIVE, and MAXBLOCK. 

          The 8-inch format is 128 bytes/sector, 52 sectors/track,  77
          tracks per disk.  The 5-inch disks are 512  bytes/sector,  8
          sectors/track, 40 tracks per disk. 



          4.3.3  Screen File Access

          This version of FORTH includes an interface  to  the  MS-DOS
          file system.  The assembly source includes a low level  file
          interface, but the higher level functions must  be  compiled
          from a  FORTH  disk.   See  the  following  section  in  the
          technical reference on "Modifying FORTH"  for  details.   In
          order to switch from the FORTH disk to a screen file, type

                   USING" <filename>"

          where <filename> is any legal, unambiguous MS-DOS  filename.
          FORTH will attempt to open the file and determine if it is a
          file of FORTH screens.  If all goes well,  FORTH  will  tell
          you how many blocks are available in that  file.   The  file
          will look just like the disk to FORTH,  except its  capacity
          will be smaller.  Screen files may not span disks.   If  the
          specified file doesn't exist, FORTH will create it but  will
          not  allocate  any  space  to  it.   The  following  example
          demonstrates the screen file access words. 

          8086/8088 FIG-FORTH User's Guide                     Page 12



          Start FORTH, and type

                   USING" TRYIT"

          FORTH will create a file named TRYIT.SCR and tell  you  that
          the file is empty.  To use the file, you must allocate  some
          space to it.  This is done by entering

                   2 EXTEND

          EXTEND takes the number on the  stack  and  adds  that  many
          blocks to the end of the screen file.   In  this  case,  the
          file is now 0+2 or 2 screens long (screens 0 and 1).  If you
          were to try and list screen 2, you would get an error.  Note
          that EXTEND does not put anything in the screens  allocated;
          they contain whatever the disk held previously, but now they
          belong to your current screen file.  Clear a working  screen
          by entering the editor and filling screen one with blanks:

                   1 SCR ! 
                   EDITOR
                   WIPE

          List the screen, select line 0, and enter some text:

                   L
                   0 T
                   P ( this is screen 0 line 1 in file TRYIT.SCR )
                   L

          Use FLUSH to save the changes, then  type  "L"  again.   The
          screen should be just as  you  left  it.   Try  editing  the
          definitions for STAR and MILKY-WAY onto this  screen.   When
          you finish editing, save it by typing

                   EOF

          (End Of File) to close the file.  EOF displays the directory
          entry of your file to verify that  everything  is  allright.
          If the file is empty, EOF will notify you and then erase the
          file. 

          You are now in limbo as far as the disk  is  concerned.   If
          you try to access the disk, FORTH will remind you to specify
          which kind of disk access you want  to  do:  file  or  FORTH
          disk.  To list the screen again, tell FORTH to use TRYIT.SCR
          (USING" TRYIT").  Now FORTH should find a file with 2 blocks
          in it.  And  if  you  list  screen  1,  you  will  see  your
          definitions, just as  you  left  them.   If  you  need  more
          screens, use  EXTEND  as  before  to  allocate  more  space.
          Remember to WIPE the screen as it will probably be  full  of
          nasty control characters for your terminal to choke on! 

          Why not use screen 0?  Well, FORTH can list  screen  0,  and
          you can edit text there, but if you try "0 LOAD", FORTH will

          8086/8088 FIG-FORTH User's Guide                     Page 13



          get very confused.  When FORTH compiles block 0, it actually
          compiles input from the console.   Thus,  block  0  of  each
          screen file cannot be loaded (but, see the following section
          for one use for screen 0). 



          4.3.4  Compiling Definitions


          As with editing, once you have opened a screen file, you can
          proceed exactly as you would with a FORTH disk.  If you have 
          edited  some  definitions  onto Screen 1,  compile  them  by 
          typing 1 LOAD.  If FORTH says "ok", test them as before.  If 
          there is an error, edit the definitions and try again.

          There is only one new word with  regard  to  loading  screen
          files.  To make the process of selecting a screen  file  and
          loading it more convenient, use. 

                   LOAD" <filename>"

          LOAD" opens  the  specified  file,  and  loads  the  screens
          starting with screen one.  Since screen zero is just sitting
          there with nothing to do, LOAD" lists  it  before  beginning
          the load with screen one.  This is  a  good  place  for  any
          special  messages,  advertisements,  secret  messages,  etc.
          LOAD" is defined as simply:

                   : LOAD"
                        USING"
                        ( code to list screen 0 )
                        1 LOAD
                        EOF ;

          If an error is encountered during the LOAD, that  file  will
          be the current screen file.

          8086/8088 FIG-FORTH User's Guide                     Page 14





          4.3.5  Other Functions

          There are several utility functions defined which make FORTH
          more convenient to use with the file  system.   These  words
          apply only to MS-DOS disks and not to FORTH disks. 


          4.3.5.1  Changing the Default Drive

          As in COMMAND, typing

                   A:
          or
                   B:

          will change the default drive for all file access. 


          4.3.5.2  Directory Information

          Several utilities are available for using MS-DOS disks.  Two
          words which list the disk directory are defined:

                   DIR"   <filename>"
                   FILES" <filename>"

          DIR" gives a complete directory  listing  of  each  matching
          filename, similar to the MS-DOS DIR command.   FILES"  lists
          only filenames, five  per  line,  much  as  the  MS-DOS  DIR
          command with the "/W" option.  The exact  interpretation  of
          ambiguous filenames differs from  COMMAND's.   The  filename
          must not be blank,  and  any  part  of  the  name  left  out
          defaults to "*".  Thus,

                   DIR" .SCR"     = DIR *.SCR
                   DIR" *"        = DIR *
                   DIR" ALL."     = DIR ALL.*

          The trailing quote may be replaced with the carriage return,
          and in fact, must be replaced to list  files  with  a  blank
          extension:

                   DIR" .<CR>     =DIR *. 
                   DIR" INDEX.<CR>=DIR INDEX. 


          4.3.5.3  Erasing Files

          A function is provided to erase files:

                   ERASE" <filename>"

          The use of this command is similar to  the  directory  words

          8086/8088 FIG-FORTH User's Guide                     Page 15



          above, except that no  part  of  <filename>  has  a  default
          value.  ERASE"  will  accept  ambiguous  filenames,  and  it
          displays the name of each file it  erases.   No  warning  is
          issued when the filename is "*.*", so beware! 


          4.3.5.4  Screen Transfer

          To assist in copying screens between FORTH disks and  MS-DOS
          files, two utilities are provided: COPY>FILE  and  COPY>SCR.
          These function very simply.   COPY>FILE  directs  all  block
          reads to the FIG-FORTH disk, and  all  disk  writes  to  the
          current screen file.  COPY>SCR does the reverse.   Then  all
          you need is the usual words for moving screens  around,  and
          magically they appear at the destination.  The  actual  copy
          operation is provided by the word #SCRCOPY, which takes  the
          starting source screen, the starting destination screen  and
          the number of screens to copy off the stack.  Thus,

                   USING" NEW"
                   COPY>FILE ... 
                   100 1 14 #SCRCOPY
                   EOF

          would copy screens 100-113 on the FORTH disk to screens 1-14
          in the file NEW.SCR.  Note that after you type  COPY>SCR  or
          COPY>FILE, you can still LIST or INDEX the  source  disk  if
          you forget which screens you want to copy. 


          4.3.5.5  Screen File Status

          To check on the status of the current screen file,  you  can
          use

                   SCREENS /? 

          If the screen file is in use, a display similar to the  DIR"
          information is printed; for example,

                   A:FORTH   .SCR r w s     10240  06-28-1983  19:59

          If the EOF command is given and then /?   is  repeated,  the
          following would be printed:

                   A:FORTH   .SCR r w s

          showing that the file is not in use.  The  "r w s"  indicate
          that this is a screen or random access file (s),  which  may
          be both read from (r) and written to (w). 

          An interesting discrepancy may arise between the DIR" report
          and the /?  information.

          8086/8088 FIG-FORTH User's Guide                     Page 16



          Examine the following session:

                   USING" NEW" empty file
                   5 EXTEND ok
                   DIR" NEW.SCR" 
                   B:NEW     .SCR          0  06-29-1983   0:26   1 file ok
                   SCREENS /? 
                   B:NEW     .SCR r w s       5120  06-29-1983   0:27    ok
                   EOF ok
                   B:NEW     .SCR       5120  06-29-1983   0:27   1 file ok
                   SCREENS /? 
                   B:NEW     .SCR r w s   ok

          The differences in the file size and time fields reflect the
          operating system buffering the physical disk output.  The /?
          display is taken from the  file  control  block  in  memory,
          which is immediately updated,  while  the  DIR"  display  is
          taken from the directory and is not updated  until  data  is
          written to the disk when the file is closed by EOF.

          8086/8088 FIG-FORTH User's Guide                     Page 17





          4.3.5.6  Notes

          A  few  features  of  the  above  discussion  bear   further
          emphasis. 

                * NEVER change the disk FORTH  is  using  for  screens
                  while the file is open.  Changing disks  haphazardly
                  is a bad practice in almost all cases, not just  for
                  FORTH.  As can be seen above, the  information  kept
                  on the disk is not always accurate.  If the disk  is
                  changed, the file parameters kept in memory will  be
                  separated from the directory entry for the file, and
                  disaster is almost certain to result. 

                * In light of the above comments, note  that  you  may
                  FLUSH FORTH's disk buffers, but  not  MS-DOS's  disk
                  buffers.  Thus your disk buffers are not  guaranteed
                  to be on the disk until you  close  the  file  using
                  EOF.  If  the  file  interface  is  loaded,  BYE  is
                  redefined to execute EOF before  exiting,  to  force
                  any updated buffers to be saved. 

                * Only one screen file may be active at  once.   FORTH
                  checks this and will not allow another USING"  while
                  the SCREENS file is in use.  This  restriction  only
                  applies to screen files. 

                * The FORTH disk is the default state after COLD,  but
                  before an EOF.  You must specifically request access
                  to a screen file.  Once you use a screen file, FORTH
                  blocks any FORTH disk access until  you  request  it
                  using SWITCH.  Accessing an MS-DOS disk as  a  FORTH
                  disk probably won't destroy it, however, FORTH  will
                  probably get upset and quit talking to  you.   FORTH
                  tries to remind you to pay attention, but it doesn't
                  try to protect you: the burden is  on  YOU  to  keep
                  track of what you are doing! 

                * There is a convention for  the  names  of  the  disk
                  functions.  Since there are two names for each  file
                  (see below) there are two ways to refer to  a  file.
                  Names which begin with a "/" expect  an  address  on
                  the stack.  Names which end in a double-quote expect
                  a  filename,  delimited  by  a  trailing  quote,  to
                  follow.  The  function  that  assigns  filenames  to
                  files, therefore, has both: /IS". 

          8086/8088 FIG-FORTH User's Guide                     Page 18



          4.4  Modifying FORTH

          FORTH is an extremely  flexible  language.   With  a  little
          effort you can make it your own  personal  environment.   In
          addition, since you have the assembly source you can  change
          the inner workings, making it more efficient.  The following
          discussion  is  not  complete,  but  serves   only   as   an
          introduction.  Exploring the territory is half the fun! 


          4.4.1  FORTH Extensions


          One of the nice things about FORTH is the ability to  extend
          the language.  To complement  this  extensibility,  you  can
          save the new FORTH in an executable file and the  extensions
          become immediately available.  Only two things are necessary
          to accomplish this: first,  FORTH's  cold  start  parameters
          must be  updated;  and  second,  the  memory  image  of  the
          modified FORTH must be saved in a file.   This  is  how  the
          FORTH.COM file was constructed for distribution. 

          Updating the cold start parameters is  accomplished  by  the
          FORTH word NEW.  Saving the new version can be done  in  two
          ways:  first,  using  DEBUG  and  second,  the  FORTH   word
          SAVE-FORTH" <filename>".  The FORTH word  SIZE?   will  tell
          you the size of the FORTH kernel for writing from DEBUG.  To
          use SAVE-FORTH, first execute NEW to lock the changes.  Make
          sure no files are open before executing NEW, otherwise  they
          will appear to be open when the new  FORTH  executes.   Then
          define an output file and use SAVE-FORTH to write itself  to
          the file.  Since the file was defined after NEW, it will not
          appear in the new version.  Study the following hypothetical
          example:

                   9 LOAD 100 LOAD 108 LOAD ok
                   NEW ok
                   current version is A
                   new version (A-Z)? Bok
                   >FILE S4 ok
                   S4 /SAVE-FORTH" X4TH.COM"
                   B:X4TH    .COM      12521  06-29-1983   0:27 ok

          Note that because the FIG-FORTH disk is the  default  state,
          you must always modify and load the file definitions from  a
          FORTH disk.  If you FORGET the file words, you can only  use
          the FORTH disk! 


          4.4.2  Patching

          Many of the parameters which affect the operation  of  FORTH
          are placed in the boot parameter area  at  the  low  end  of
          FORTH.  These may be freely modified using  DEBUG,  or  from
          within FORTH.  On execution of COLD, these  parameters  will

          8086/8088 FIG-FORTH User's Guide                     Page 19



          be used to initialize the interpreter.  The patches can then
          be made permanent as  described  above.   For  example,  the
          following will change the FORTH backspace key:

                   KEY 14 +ORIGIN ! 

          After you type this and hit return, FORTH will wait for  you
          to hit a key.  The key you type will be placed in  the  boot
          parameters and will be recognized as  your  backspace.   The
          other parameters in this area are clearly commented  in  the
          assembly source, should you want to patch any of them. 


          4.4.3  Assembly Source Modifications

          Re-assembly  of  FORTH  is  the  least  desirable  form   of
          modification.  It is slow and can  be  difficult  to  debug.
          However, there are modifications which are only possible  in
          this way.  A  great  deal  of  time  has  gone  into  adding
          comments to the assembly source so that you  can  understand
          the way FORTH works.  Almost all of the  comments  appearing
          in the FIG listing are in the new listing, along  with  some
          additional comments.   There  is  more  information  on  the
          assembly source in the technical reference portion  of  this
          documentation. 

          Be aware of two problems here: first, it  is  very  easy  to
          lose track of the changes you make.  so document and comment
          each modification.  Second, more changes make  your  version
          of FORTH  more  unique  (or  maybe  just  strange)  and  any
          definitions using that feature  less  portable.   Don't  add
          bells and whistles just to be different.

          8086/8088 FIG-FORTH User's Guide                     Page 20





          5.0  Technical Reference

          This section describes  changes  and  modifications  to  the
          FIG-FORTH model.  It is not an explanation of the FIG model,
          nor of how FORTH works.  The user should refer  to  the  FIG
          installation manual for further information. 


          5.1  Assembly Source

          The FIG assembly listing on which this version is based  was
          written for the CPM/86 8086 assembler.  For MS-DOS, the  FIG
          listing was translated  into  source  for  Seattle  Computer
          Products 8086 assembler.   Since  the  latter  assembler  is
          peculiar to SCP systems, the code was translated again  into
          source for  Microsoft's  MACRO-86  macro  assembler,  to  be
          portable to any MS-DOS environment. 

          Several features of MACRO-86 were used  to  provide  greater
          flexibility.  First, macros were written to build dictionary
          headers for each definition.  These macros make  setting  up
          the dictionary entries  convenient,  but  more  importantly,
          they calculate the link fields.  Because the  links  are  no
          longer  based  on  specific  labels  in  the   source,   the
          dictionary can be split into several files  which  are  then
          INCLUDED at  the  appropriate  points.   This  allows  great
          flexibility and modularity in assembling FORTH. 


          5.1.1  Source File Organization

          The source is now broken into several separate files:

                * 4TH-MAIN.ASM
                  This is the primary file which INCLUDES  the  others
                  during assembly.  It contains the inner interpreter,
                  code-level kernel, and most of the FORTH vocabulary. 

                * 4TH-SYSD.ASM
                  This file contains (almost) all of the code which is
                  operating system  or  hardware  dependent.   If  you
                  wanted to transport FORTH  to  a  different  system,
                  most of the changes would be in this file. 

                * 4TH-DISK.ASM
                  This file is INCLUDED by 4TH-SYSD and  contains  the
                  actual  disk  interface  for  reading/writing   disk
                  sectors. 

                * 4TH-FILE.ASM
                  Also (optionally) INCLUDED by SYSD,  this  file  has
                  all of  the  words  that  deal  with  files  at  the
                  operating system level.  This code is only assembled

          8086/8088 FIG-FORTH User's Guide                     Page 21



                  if the FILES option is set to TRUE. 

                * 4TH-XTNS.ASM
                  These definitions are code-level extensions  of  the
                  FORTH dictionary.  These  include  array  addressing
                  primitives, long fetch and store operators  and  the
                  port i/o words.  MATCH is also in this  file.   This
                  file is only assembled if the EXTEND option is TRUE. 

                * 4TH-OPTS.H
                  The assembly options  are  located  in  this  header
                  file,  and  are  symbols  which   begin   with   the
                  underscore character.  These are  global  parameters
                  and are used by other modules.   All  other  equates
                  and variables should be local to  the  module  where
                  they are defined. 

                  It  is  unfortunate  that  the  modules  cannot   be
                  separately assembled and linked.  The present system
                  requires a lot of memory  and  about  5  minutes  to
                  assemble (on an 8MHz  8086  using  8"  ssdd  disks).
                  This is really tedious for making small changes! 


          5.1.2  Macros

                  The macros necessary to assemble FORTH  are  in  the
                  file 4TH-LIB.MAC.  Comments in this file explain the
                  function  of  each  macro.   Beside  the  dictionary
                  macros, there are two macros to do branches  in  the
                  threaded definitions.  The  actions  of  the  macros
                  should be clear after studying their definitions and
                  the manner in which they are used in the code. 


          5.1.3  Comments

                  The  SCP  assembler  source  was   rather   sparsely
                  commented.  This  omission  has  been  rectified  by
                  copying all of the FIG listing comments,  plus  some
                  additional comments, into  the  MACRO-86  code.   In
                  addition, each entry in the dictionary has a comment
                  in the following form:

                  ;=AB  <name>   <description>   <stack effects>

                  where  A  is  a  letter  indicating  the   type   of
                  dictionary entry, and B is  a  character  indicating
                  whether the function has  been  added  or  modified.
                  This scheme  allows  automatic  glossary  generation
                  using a text editor or search utility.

          8086/8088 FIG-FORTH User's Guide                     Page 22



                  The dictionary entry types are:

                           C = code-level definition
                           : = colon definition
                           # = constant
                           ? = variable
                           U = user variable

                  The B character is either a blank,  a  plus,  or  an
                  asterisk;  indicating   that   the   definition   is
                  unmodified, added, or modified, respectively. 


          5.2  Modifications

                  The changes to the FIG listing fall  basically  into
                  two  categories:  changes  to  clean  up  the   disk
                  interface and manage buffers more  efficiently,  and
                  changes to route the i/o functions through execution
                  vectors.   The  sections  below  describe   specific
                  changes to the FIG model.  Each section  corresponds
                  to one in the FIG-FORTH  installation  manual.   Any
                  changes to that part of the model are listed there. 


          5.2.1  Boot Parameters

                       BSIN was changed to 127 - ASCII DEL. 


          5.2.2  Machine Code Definitions

                       Code added to  (FIND)  to  handle  word-aligned
                  definitions.  May be disabled by setting the  option
                  ALIGN to FALSE. 


          5.2.3  High-Level Utility Definitions

                       1+ and 2+ were changed to code definitions. 
                       TRAVERSE was modified  to  handle  word-aligned
                  LFA's. 
                       PFA was changed to handle word-aligned PFA's. 
                       EXPECT backspace was made destructive. 
                       ID.   was  modified  to  reset  MSB   of   last
                  character. 
                       CREATE  can  compile  dictionary  headers  with
                  word-aligned LFA's.  If DP is  odd  after  compiling
                  the name field, DP is incremented so that  the  rest
                  of the definition lies is word addressable.  If byte
                  values such as character  strings  are  subsequently
                  compiled into the definition, the alignment  may  be
                  lost.  Note that the length byte at NFA still  gives
                  the exact length of the name,  but  not  necessarily
                  the displacement to the LFA.  The alignment  may  be

          8086/8088 FIG-FORTH User's Guide                     Page 23



                  disabled by setting the ALIGN  option  to  FALSE  at
                  assembly time to save space. 
                       QUIT prints lower case "ok". 
                       ABORT prints the user version as well. 
                       COLD sets execution vectors. 
                       All system dependent  initialization  is  in  a
                  subroutine called SYSINIT, located in  4TH-SYSD.ASM,
                  which is called just prior  to  starting  the  inner
                  interpreter. 


          5.2.4  Installation Dependent Code



          5.2.4.1  Console I/O

                       KEY, EMIT, and  CR  were  changed  to  use  the
                  execution vectors @KEY, @EMIT, and @CR respectively.
                  These vectors are initialized to the CFA's of (KEY),
                  (EMIT) and (CR); but may be changed by  storing  new
                  CFA's in the vectors. 
                       Two options in 4TH-OPTS.H affect  console  i/o:
                  DIRECTCON and IOBITS.  If DIRECTCON is TRUE, console
                  i/o is performed by MS-DOS function six  and  seven,
                  which ignore all special characters.  Thus,  if  you
                  have an application which has to respond to ^P,  for
                  example, you should re-assemble with  DIRECTCON  set
                  to TRUE.  IOBITS is an equate which  determines  how
                  many bits to send/receive.  Normal  ASCII  terminals
                  don't use  the  MSB,  so  IOBITS  should  be  seven.
                  However, the IBM-PC uses all eight bits,  so  IOBITS
                  should  be  eight.   DIRECTCON  also   disables   ^C
                  interrupts, except during printer output. 


          5.2.4.2  Printer I/O

                       The variable  controlling  printer  output  was
                  changed to PRINTER.  If PRINTER is zero, no  printer
                  output occurs.  If PRINTER is positive, all  console
                  output also goes to  the  printer.   If  PRINTER  is
                  negative, output normally going to  the  console  is
                  sent only to the printer. 


          5.2.4.3  Disk I/O

                       The code to interface to the disk was  factored
                  into two parts.  All functions that  know  something
                  about the physical characteristics of the  disk  are
                  in the  4TH-DISK.ASM  file.   Every  other  function
                  knows only that disk blocks  are  1024  bytes  long.
                  This means that BLOCK-READ/WRITE must always deliver
                  1024 bytes and not one physical sector. 

          8086/8088 FIG-FORTH User's Guide                     Page 24



                       The  disk  read/write   routines   (BLOCK-READ,
                  BLOCK-WRITE)  were  changed  to  use  the  execution
                  vectors @BLKRD and @BLKWRT.  For normal  FORTH  disk
                  i/o, @BLKRD and @BLKWRT point to BLKRD  and  BLKWRT.
                  For screen file access, these  vectors  are  set  to
                  /BLOCK-READ and /BLOCK-WRITE. 
                       The variables DRIVE, RECORD,  REC/BLK  and  DTA
                  are set to the parameters used for each disk  access
                  and  may  be  examined  if  an  error  occurs.   The
                  variable DISK-ERROR is set to indicate  the  success
                  or failure of each disk operation.  If DISK-ERROR is
                  zero,  the  operation  was  successful.    Otherwise
                  DISK-ERROR has the MS-DOS error code as described in
                  its documentation,  except  that  write  errors  are
                  converted to negative numbers. 
                       The  buffer   management   was   also   changed
                  slightly.  When BUFFER has to flush a dirty block to
                  the disk, it checks and flushes ALL  dirty  buffers.
                  This requires very little additional  overhead,  and
                  it is  much  more  efficient  for  copying  multiple
                  blocks. 

          5.2.5  High-Level Definitions

          5.2.6  System Tools

          5.2.7  RAM Workspace


          5.2.8  Memory Map

                       The memory map was  extended  to  use  all  64K
                  (LIMIT=0), and 8 1K byte block buffers. 


          5.2.9  Other

                       COLD  sets  the  ^C  interrupt  vector  to  the
                  address of  a  code  fragment  which,  on  receiving
                  control after you  hit  ^C,  examines  the  variable
                  @BREAK.  If @BREAK is zero,  the  interrupt  handler
                  simply returns  from  the  interrupt  and  execution
                  continues.  Unfortunately, a "^C" is always sent  to
                  the console, and the key is not passed to FORTH.  If
                  @BREAK is non-zero, the  interrupt  handler  vectors
                  the inner interpreter to the (presumed CFA)  address
                  in @BREAK.  @BREAK is set at assembly  time  to  the
                  CFA of (ABORT), it is not initialized by  COLD.   If
                  the DIRECTCON option  is  selected,  almost  all  ^C
                  processing  is  disabled.   The  only  time   a   ^C
                  interrupt can occur is during printer output. 
                       BYE exits via INT 20H

          8086/8088 FIG-FORTH User's Guide                     Page 25



          5.3  Additions

                  Two new features have been added in this version  of
                  FIG FORTH.   Command  line  argument  interpretation
                  allows  you  to  pass  instructions  to  FORTH  from
                  COMMAND.  Thus, you can run FORTH from a batch  file
                  if the program doesn't require any  terminal  input.
                  The file interface allows FORTH to share information
                  with other MS-DOS programs and utilities. 


          5.3.1  Command Line Interpretation

                  When FORTH starts execution, it copys any string  of
                  text on the  command  line  to  the  terminal  input
                  buffer, and interprets it just as if you  had  typed
                  it. 


          5.3.2  File Interface

                  The goal in developing the  file  interface  was  to
                  allow FORTH  useful  access  to  MS-DOS  files,  not
                  simply the random access  screens.   The  constraint
                  was that it had to be accomplished with a minimum of
                  change to the FIG model.  This discussion is not  as
                  complete as it could be.  The  reason  for  this  is
                  that the details will probably  change.   While  the
                  overall design is (hopefully) sound, the fine points
                  are not completely worked out.  As they are applied,
                  they will certainly be improved. 

                  There are two parts to the file interface:  the  low
                  level functions defined in 4TH-FILE.ASM and the high
                  level words in FILES.SCR.  The  low-level  functions
                  are little more  than  MS-DOS  function  calls  with
                  FORTH headers.  The high-level definitions  do  most
                  of  the  work,  making  it  easier  to  modify   the
                  interface. 

                  The words defined in FILES.SCR allow you  to  define
                  files in much the same  way  you  define  variables.
                  After a file has been defined, the name is  used  to
                  refer to it.  The name acts just  like  a  variable,
                  returning an address.  The  address  returned  is  a
                  pointer to the file header and file  control  block,
                  or FCB.  The header is a  word  of  data  where  the
                  file's attributes are kept, this header  address  is
                  referred to as the file descriptor,  or  FD.   These
                  attributes are only used by FORTH, MS-DOS never sees
                  them.  At present, the only  attributes  are:  read,
                  write, sequential/random access and open.  Following
                  the header is the FCB which MS-DOS  uses  while  the
                  file is open. 

          8086/8088 FIG-FORTH User's Guide                     Page 26



                  The first part of the FCB is the filespec.  This  is
                  the drive, filename and extension for the file,  and
                  is the name by which  MS-DOS  refers  to  the  file.
                  Before opening a file, these fields must  be  filled
                  in.  Assigning the filename is accomplished  by  two
                  methods, one for interactive use  and  one  for  use
                  inside definitions.  The word FNAME takes  a  target
                  address and a mode number on  the  stack.   It  then
                  parses the string at PAD (actually PAD+1, PAD  holds
                  the count byte), and returns a flag which is true if
                  the filename was ambiguous.  If FNAME finds that the
                  given filename is illegal (or  null)  it  prints  an
                  error and aborts. 

                  To assign a filename to a file  from  the  terminal,
                  the word /IS" is provided.  This function  takes  an
                  fd off the stack and assigns the following  word  in
                  the input stream as the filename.  The /IS" function
                  can be used in a definition, but it can't be used to
                  assign a filename to a file without console input. 

                  Once the file has been defined, and has a  name,  it
                  can be opened or created using  /OPEN,  or  /CREATE.
                  The file can be closed using /CLOSE. 

                  For character files, /GETC and /PUTC are provided to
                  read/write  one  character;  and  /READ  and  /WRITE
                  transfer a number of bytes at  once.   Screen  files
                  use /BLOCK-READ and /BLOCK-WRITE.   These  functions
                  are  called   indirectly   through   BLOCK-READ   or
                  BLOCK-WRITE. 

                  This  reference  is  admittedly   incomplete.    For
                  further information, study the glossary for 4TH-FILE
                  and the FORTH code for the file interface.

          8086/8088 FIG-FORTH User's Guide                     Page 27





          6.0  Glossary

                  This  section  is  a  glossary  of  words  added  or
                  changed, relative to FIG-FORTH v1.0.   The  name  of
                  the word is given,  then its stack effects, then the
                  type of definition, where the letter  indicates  the
                  type of definition:

                           C = code-level definition
                           : = colon definition
                           # = constant
                           ? = variable
                           U = user variable

                  and  the  second  letter   indicates   whether   the
                  definition was added  (+)  or  modified  (*).   And,
                  finally, the file where the word is defined. 

          8086/8088 FIG-FORTH User's Guide                     Page 28





          6.1  Assembly Listing Definitions

                  (2ARR)           n1 n2 PFA -- addr               C+ XTNS
                                  Two dimensional word array primitive
                  compiled  by  2ARRAY.   The  address  of  the  array
                  element at row n1, column n2, of an array  beginning
                  at addr+4 is left on the stack.  It is assumed  that
                  the number  of  columns  is  stored  at  addr.   The
                  contents of addr+2 could hold  the  number  of  rows
                  (perhaps for error checking), but it isn't  used  in
                  the calculation. 

                  (2CARR)          n1 n2 PFA -- addr2              C+ XTNS
                                  Two dimensional byte array primitive
                  compiled by  STRINGS.   The  address  of  the  array
                  element at row n1, column n2 of an  array  beginning
                  at PFA+4 is left on the stack.  It is  assumed  that
                  the row size is at PFA.  The contents of PFA+2 could
                  hold the number of rows, but it isn't  used  in  the
                  calculations. 

                  (ARRAY)          n PFA -- addr                   C+ XTNS
                                  Integer  array  primitive  used   by
                  ARRAY.  The address of the nth element of the  array
                  beginning at PFA+2 is calculated  and  left  on  the
                  stack.  The length of the array is stored at PFA. 

                  (BLKRD)          --                              C+ DISK
                                  Block  read  primitive   called   by
                  BLKRD.  This function calls the absolute  disk  read
                  function (INT 25) to access the disk.  This function
                  transfers REC/BLK records,  starting  at  RECORD  on
                  DRIVE to DTA.  The code returned by the interrupt is
                  placed in DISK-ERROR, zero indicating success. 

                  (BLKWRT)         --                              C+ DISK
                                  Block  write  primitive  called   by
                  BLKWRT.  This function transfers REC/BLK records  on
                  DRIVE starting at RECORD to DTA.   The  return  code
                  from INT 26H is negated and  placed  in  DISK-ERROR,
                  zero means success. 

                  (CARR)           n PFA -- addr                   C+ XTNS
                                  Byte  array  primitive  compiled  by
                  CARRAY.  The address of the  nth  character  in  the
                  array beginning at PFA+2 is calculated and  left  on
                  the stack.  The length of the array or  the  current
                  length of the string may be left at PFA.

          8086/8088 FIG-FORTH User's Guide                     Page 29



                  (CLOSE)          FCB -- f                        C+ FILE
                                  Primitive  function  to  close   FCB
                  using  DOS  function  10H.   The  flag  is  zero  if
                  successful, 0FFH if not. 

                  (CREATE)         FCB -- f                        C+ FILE
                                  Create and open a file as  specified
                  in FCB using DOS function 16H.  The flag returned is
                  zero if successful, 0FFH if not. 

                  (FBLKRD)         FCB n -- f                      C+ FILE
                                  File  block  read  primitive.   This
                  function reads n  blocks  from  an  open  FCB.   The
                  blocks read are the size  specified  in  the  record
                  size field of the FCB.  For normal screen  files,  n
                  is always 1 and the  record  size  is  set  to  1024
                  bytes. 

                  (FBLKWRT)        FCB n -- f                      C+ FILE
                                  Write n blocks to the file specified
                  by FCB.  See (FBLKRD) above. 

                  (FIND)           a1 NFA -- [PFA b] f             C* MAIN
                                  (FIND)  was   modified   to   handle
                  aligned  dictionary  headers  (only  when  ALIGN  is
                  true).  The address list  following  the  header  is
                  aligned by inserting a  NOP  (90H)  after  the  last
                  character of the name field.  (FIND) must take  this
                  into account when looking up a name. 

                  (FNAME)          FCB addr1 n -- addr2 f          C+ FILE
                                  Parse  the  string  at  addr1  as  a
                  filename using mode n, and assign it  to  FCB.   The
                  first character not parsed and an ambiguous filename
                  are left on  the  stack.   This  function  uses  DOS
                  function 29H, which defines the modes. 

                  (OPEN)           FCB -- f                        C+ FILE
                                  Open the specified  FCB.   The  flag
                  returns the success or  failure  of  the  operation:
                  zero if successful, 0FFH otherwise. 

                  (READ)           FCB addr -- f                   C+ FILE
                                  Sequential      read      primitive.
                  Transfers the next record in the file  specified  by
                  FCB  to  addr.   The  status  of  the  operation  is
                  returned in  the  flag  f.   The  flag  is  zero  if
                  successful, 0FF if not. 

                  (WRITE)          FCB addr -- f                   C+ FILE
                                  Sequential write primitive.   Writes
                  the next record of the file specified  by  FCB  from
                  addr.  The flag returned by DOS function 15H is left
                  on the stack. 

          8086/8088 FIG-FORTH User's Guide                     Page 30



                  (XOF)                    n1 n2 -- [n1]           C+ XTNS
                                  Control structure primitive compiled
                  by OF.  If the case being scanned for  (n1)  matches
                  the current case (n2), the tag n1 is dropped and the
                  FORTH words following the branch compiled by OF  are
                  executed.  If the case tags don't match, n1 is  left
                  on the stack and the branch is executed to check the
                  next case. 

                  +BUF             addr1 -- addr2                  :* MAIN
                                  Advance the buffer pointer addr1  to
                  the next buffer at addr2. 

                  1-               n -- n-1                        C+ MAIN
                                  Subtract one from the item on top of
                  the stack. 

                  2-               n -- n-2                        C+ MAIN
                                  Subtract two from the item on top of
                  the stack. 

                  ?FIRST           FCB addr -- f                   C+ FILE
                                  Search the disk  directory  for  the
                  first occurance of FCB.  The flag returned  is  zero
                  if none are found, 0FF otherwise.   If  a  match  is
                  found, its directory entry is placed at addr. 

                  ?NEXT            addr FCB -- f                   C+ FILE
                                  Search for  the  next  occurance  of
                  FCB.  The search FCB must previously have  been  set
                  up by ?FIRST.  If a match is found, f will  be  0FFH
                  and the matching directory entry  will  be  left  at
                  addr. 

                  @BLKRD           - addr                          U+ MAIN
                                  Execution vector holding the CFA  of
                  a function to read one block from  the  disk.   This
                  vector is either BLKRD  for  FORTH  disk  access  or
                  FBLKRD for screen file access.  BLOCK-READ uses this
                  vector. 

                  @BLKWRT          - addr                          U+ MAIN
                                  Execution vector holding the CFA  of
                  a function to write one block  to  the  disk.   This
                  vector is either BLKWRT for  FORTH  disk  access  or
                  FBLKWRT for screen file  access.   BLOCK-WRITE  uses
                  this vector. 

                  @BREAK           -- addr                                 ?+ SYSD
                                  Execution vector holding the CFA  of
                  the function to be executed on input if  a  ^C.   If
                  @BREAK  is  zero,  the  interrupt   handler   simply
                  returns, effectively ignoring the interrupt.

          8086/8088 FIG-FORTH User's Guide                     Page 31



                  @CR              -- addr                                 U+ MAIN
                                  Execution   vector   to   output   a
                  newline,  usually  carriage  return/linefeed.   COLD
                  initializes @CR to the CFA of (CR). 

                  @EMIT            -- addr                                 U+ MAIN
                                  Execution  vector  to  do  character
                  output.  Initialized by COLD to the CFA of (EMIT). 

                  @KEY             -- addr                                 U+ MAIN
                                  Execution  vector  to  do  character
                  input.  Initialized by COLD to the CFA of (KEY). 

                  B/SEC            -- n                            C+ FILE
                                  Calls DOS function 1BH  and  returns
                  the number of bytes per physical disk sector. 

                  BLK/DRIVE        -- n                            #+ DISK
                                  Constant returning the number of  1K
                  disk blocks per drive. 

                  BLKRD            addr blk --                     :+ DISK
                                  This function  reads  block  blk  to
                  addr.  This is basically an  interface  between  the
                  BLOCK-READ function and the (BLKRD) functions. 

                  BLKWRT           addr blk --                     :+ DISK
                                  This function writes block blk  from
                  addr.  This is basically an  interface  between  the
                  BLOCK-WRITE function and the (BLKWRT) functions. 

                  BLOCK            n -- addr                       :* MAIN
                                  BLOCK was modified to  check  for  a
                  disk error. 

                  BLOCK-READ       addr blk --                     :+ MAIN
                                  Read one block to addr.   Calls  the
                  function whose CFA is in @BLKRD  to  do  the  actual
                  transfer. 

                  BLOCK-WRITE      addr blk --                     :+ MAIN
                                  Write one block  from  addr.   Calls
                  the function whose CFA  is  in  @BLKWRT  to  do  the
                  actual transfer. 

                  BUFFER           n -- addr                       :* MAIN
                                  This function was modified to  flush
                  all dirty buffers when one is found. 

                  COLD             --                              :* MAIN
                                  Added code to  initialize  execution
                  vectors.

          8086/8088 FIG-FORTH User's Guide                     Page 32



                  CR               --                              :* MAIN
                                  Output a carriage return/linefeed by
                  calling the function whose CFA is in @CR. 

                  CREATE           --                              :* MAIN
                                  Create a dictionary header  for  the
                  next word in the input stream.  CREATE was  modified
                  to align the address list.  The ALIGN option must be
                  selected for this to occur. 

                  D&RCALC          n --                            :+ DISK
                                  Set DRIVE and RECORD  for  block  n.
                  This function is called by BLKRD/BLKWRT  to  set  up
                  for (BLKRD)/(BLKWRT). 

                  DATE!            n1 n2 n3 --                     C+ XTNS
                                  Date set operator.   The  parameters
                  are  n1=month,  n2=day,  n3=year.   If  any  of  the
                  parameters are out of range, no change is made. 

                  DATE@            -- n1 n2 n3                     C+ XTNS
                                  Date fetch operator.  The parameters
                  are  n1=month,  n2=day,  n3=year.   If  any  of  the
                  parameters are out of range, no change is made. 

                  DISK             n -- n2                                 C+ FILE
                                  Set the current default drive to  n.
                  Drive A is zero, B is one.  The  number  of  drives,
                  n2, is left on the stack. 

                  DISK@            -- n                            C+ FILE
                                  Return  the  current  default  drive
                  number. 

                  DTA              -- addr                                 ?+ MAIN
                                  Variable holding the address of  the
                  last disk transfer operation.  This variable is  set
                  by R/W for use by the transfer functions. 

                  EMIT             c --                            :* MAIN
                                  Function  to  do  character  output.
                  Calls the function whose CFA is in @EMIT to  do  the
                  actual output. 

                  EMPTY-BUFFERS    --                              :* MAIN
                                  This function was  modified  to  set
                  emptied buffers to block 32767.  FIG-FORTH set  them
                  to zero. 

                  FLUSH            --                              :* MAIN
                                  FLUSH  was  also  modified  so  that
                  empty buffers are assigned to block 32767.

          8086/8088 FIG-FORTH User's Guide                     Page 33



                  FDEL             FCB -- f                        C+ FILE
                                  Delete the file  specified  by  FCB.
                  The  flag  returned  is  zero  if  successful,  0FFH
                  otherwise. 

                  FREN             addr -- f                       C+ FILE
                                  Rename the  file  according  to  the
                  special FCB at addr.  See the DOS function  17H  for
                  details on how this is set up. 

                  KEY              -- c                            :+ MAIN
                                  Character input function.  KEY calls
                  the function  whose  CFA  is  in  @KEY  to  get  the
                  character. 

                  L!               n seg off --                    C+ XTNS
                  L@               seg off -- n                    C+ XTNS
                  LC!              n seg off --                    C+ XTNS
                  LC@              seg off -- b                    C+ XTNS
                                  Intersegment fetch/store  operators.
                  These are similar to  the  usual  FORTH  fetch/store
                  words, except they use a double-word address.   Note
                  that   the    absolute    location    accessed    is
                  seg*16+offset. 

                  MAXBLOCK         -- n                            #+ DISK
                                  Constant returning the highest legal
                  block number.  That is, BLK/DRIVE*(MAXDRIVE+1)-1. 

                  MAXDRIVE         -- n                            #+ DISK
                                  Constant returning the highest legal
                  drive number. 

                  MYSEG            -- seg                          C+ MYSEG
                                  This  word  returns  the  value   of
                  FORTH's  current  segment.   This  allows  the  long
                  fetch/store operators  to  access  locations  inside
                  FORTH easily. 

                  NFA              PFA -- NFA                      :* MAIN
                  PFA              NFA -- PFA                      :* MAIN
                                  These  functions  can   adjust   for
                  aligned definitions, if  ALIGN  is  selected  during
                  assembly. 

                  PRINTER          -- addr                                 ?+ MAIN
                                  Flag controlling printer output.  If
                  PRINTER is zero, nothing is sent to the printer.  If
                  PRINTER is positive, output to the console also goes
                  to the printer.   If  PRINTER  is  negative,  output
                  normally going to the console will be  sent  to  the
                  printer only.  Note that this is independent of  the
                  ^P/^N printer echo!

          8086/8088 FIG-FORTH User's Guide                     Page 34



                  R/W              addr blk f --                   :* MAIN
                                  This function was modified to simply
                  pass the addr  and  blk  on  to  the  BLOCK-READ  or
                  BLOCK-WRITE functions. 

                  REC/BLK          -- n                            #+ DISK
                                  Constant  returning  the  number  of
                  disk records required to fill one 1024 byte  buffer.
                  All disk accesses look to FORTH like  they  transfer
                  1K of data. 

                  RECORD           -- addr                                 ?+ MAIN
                                  Variable  holding  the  disk  record
                  number where the last block  accessed  began.   That
                  is, if the last block accessed was  2,  then  record
                  would contain 2*REC/BLK.  This variable  is  set  by
                  D&RCALC for use by (BLKRD)/(BLKWRT). 

                  SAVBUF           addr --                                 :+ MAIN
                                  This function saves  the  buffer  at
                  addr if it has been updated.  The buffer is  flushed
                  but not emptied. 

                  SAVE-BUFFERS     --                              :+ MAIN
                                  This  function   flushes   all   the
                  buffers but doesn't  empty  them.   SAVE-BUFFERS  is
                  called by BUFFER when it finds a dirty buffer. 

                  TIME!            n1 n2 --                        C+ XTNS
                  TIME@            -- n1 n2                        C+ XTNS
                                  Set/fetch  the  system  time.    The
                  parameters  are  n1=[sec/csec],  n2=[hr/min];   each
                  quantity is a byte, but the four are packed  into  2
                  words.  Note that the low byte of the top stack item
                  has the minutes, the high byte holds the hours,  and
                  so on.  If any of the parameters are out  of  range,
                  there is no effect.

          8086/8088 FIG-FORTH User's Guide                     Page 35





          6.2  Deleted Definitions

                  The  following  words  were  deleted  from  the  FIG
                  listing:

                           EPRINT
                           SEC
                           SECRD
                           SECWT
                           SET-DRIVE
                           SET-IO
                           T&SCALC
                           TRACK

          8086/8088 FIG-FORTH User's Guide                     Page 36





          6.3  High-level Extensions

                  The following words were added  by  compiling  FORTH
                  screens and saving the new version  of  FORTH.   The
                  FORTH source is included in the screen files. 

                  ARRAY            n --                            :+ ARRAYS.SCR
                  2ARRAY           n1 n2 --                        :+ ARRAYS.SCR
                                  One  and  two  dimensional   integer
                  array defining words.  Used as:

                           3 10 ARRAY WEIGHTS

                  to define a 3 by 10 array of integers which  can  be
                  accessed by:

                           0 0 WEIGHTS @  2 9 WEIGHTS ! 

                  Which would replace the last element by the first. 

                  STRING           n --                            :+ ARRAYS.SCR
                  STRINGS          n1 n2 --                        :+ ARRAYS.SCR
                                  One and two dimensional  byte  array
                  defining words.  Similar to  the  array  definitions
                  above, but are accessed by C@ and C!. 

                  CASE     OF ENDOF        ENDCASE                         :+ CASE.SCR
                                  These words add a case construct  to
                  FORTH.   They  have  been  documented   in   several
                  different places.  Quite a few examples are found in
                  the ASSEMBLER screens. 

                  DUMP             addr1 -- addr2                  :+ UTIL.SCR
                                  This word displays the  contents  of
                  memory from addr1 to addr2-1.  The address  left  on
                  the stack can be used to  continue  dumping  without
                  having to keep track of the address.   The  dump  is
                  given in the current number base.  A variable  named
                  SEGMENT is used as the base, with addr1  then  being
                  an offset in that segment.  SEGMENT  is  initialized
                  to MYSEG. 

                  NEW              --                              :+ UTIL.SCR
                                  NEW updates the start-up  parameters
                  to reflect the current state of FORTH.  This  allows
                  compiled definitions to be  retained  when  COLD  is
                  executed.  Note that if you FORGET the  added  words
                  after executing NEW, the start-up parameters will be
                  wrong, and NEW must  be  run  again  before  a  cold
                  start.
          8086/8088 FIG-FORTH User's Guide                     Page 37



                  SIZE?            --                              :+ UTIL.SCR
                                  Shows the current size of the  FORTH
                  dictionary, and the free space remaining.   This  is
                  primarily useful for saving modified FORTHs.
          8086/8088 FIG-FORTH User's Guide                     Page 38





          7.0  Future Extensions

                  This version includes almost all of the extensions I
                  had planned to implement in the "immediate  future".
                  It will be work enough fixing bugs  and  tuning  the
                  revisions in  this  package,  without  shooting  for
                  major revisions. 

                  But, my list for  the  questionable  future  remains
                  intact:

                           Cross/target compiler
                           Code level floating point/8087 support
                           Multisegmented > 64K
                           Multitasking
                           Tree structured vocabularies/file system
                           High-level interrupt handling

                  Should any of  these  interest  you,  or  spark  any
                  comments,  I  would  be  happy  to  talk  or  trade.
                  Specifically, I would really love to have some  kind
                  of floating point package: this is  my  last  excuse
                  for writing ANYTHING in BASIC! 

                  The MACRO-86 assembler is really cumbersome at  this
                  kind of work, and FORTH is ideally suited to writing
                  new FORTHs.  If I  can  get  metaFORTH  going,  that
                  would make a nice project.
          8086/8088 FIG-FORTH User's Guide                     Page 39




          8.0  FORTH Sources

                  The following are sources of  information  regarding
                  the implementation and use of FORTH. 


                * STARTING FORTH, by Leo Brodie.  Prentice Hall 1981
                  This is  probably  the  best  introductory  book  on
                  FORTH. 


                * Byte, vol.  5 no.  8, August 1980
                  This issue was devoted to FORTH, and  contains  good
                  discussions of defining words and FORTH internals. 

                * Dr.  Dobb's Journal, vol.  6 no.  9, September 1980
                  Dr.  Dobb's Journal, vol.  7 no.  9, September 1981
                  These issues were both devoted to FORTH topics. 

                * Various publications of the Forth Interest Group:
                  Fig  FORTH  Installation  Guide,  FORTH   DIMENSIONS
                  bi-monthly journal. 

                * Mountain View Press
                  P.O.  Box 4656, Mountain View, CA 94040
                  (415) 961-4103
                  This company has a large selection of  software  and
                  publications for sale.

          8086/8088 FIG-FORTH User's Guide                     Page 40





                      Appendix A - Using Execution Vectors



          The i/o functions in this version of FORTH have been changed
          to use execution vectors.  An execution vector is  a  simple
          way to allow the user to substitute a different function for
          the function which is vectored in this way. 


          A.1  Concepts

          The way an execution vector works is quite simple.   If  you
          are familiar with the concept of pointers to data,  this  is
          nothing new, for execution  vectors  are  only  pointers  to
          functions.  The pointer may be changed to hold  the  address
          of any function, and  as  long  as  the  specified  function
          expects and returns the same parameters and result,  no  one
          knows the difference. 

          The FORTH interpreter functions on this principle: it inputs
          a word, looks it up in the dictionary, and executes it.  The
          interpreter can totally ignore the action taken by the words
          it executes.  In standard FORTH, the function which executes
          a word is called EXEC.  The address that EXEC expects on the
          stack differs between FORTHs.   In  FIG-FORTH,  the  address
          must be a Code Field Address, or CFA.  The address  returned
          by the dictionary search words ( ' and -FIND) is a Parameter
          Field Address (PFA).   Thus,  to  look  up  a  word  in  the
          dictionary, you can type

                   ' MY-WORD

          but to find and execute MY-WORD, you would type

                   ' MY-WORD CFA EXEC

          This is totally equivalent to just typing MY-WORD. 

          In  this  way,  any  function  can  be  vectored  through  a
          variable: the variable holds the CFA of the function  to  be
          executed.  Instead of executing the function  directly,  the
          variable is fetched and the CFA stored  there  is  executed.
          Now, instead of jumping  directly  to  code  which  sends  a
          character to the console, KEY fetches the variable @KEY, and
          does whatever is at that CFA.  The definition of KEY is thus

                   : KEY @KEY @ EXEC ;

          To change the function of KEY, you just  store  a  different
          CFA in @KEY.  The new function can be defined after KEY, and
          any function which uses KEY will now call the new  function.
          The  danger  here  should  be  obvious:  if  the  substitute
          8086/8088 FIG-FORTH User's Guide                     Page 41
          Appendix A - Using Execution Vectors



          function doesn't have the same stack effects as the standard
          function, FORTH is going to get really confused. 


          A.2  An Example

          Although this arrangement  is  slightly  more  complex,  the
          power and flexibility make it well worth the  extra  effort.
          The following example should make this clear. 

          Suppose you want to do all input in  capital  letters  only.
          You could write  your  own  specialized  input  routine,  or
          simply define an upper-case-only version of KEY and redirect
          KEY to that function.  Here is the definition  for  the  new
          KEY:

                   : UC-KEY
                        (KEY) DUP 96 > OVER 123 < AND
                        IF ( a-z )
                           32 -
                        THEN ;

          Now all you have  to  do  is  set  @KEY  to  point  to  your
          function:

                   ' UC-KEY CFA @KEY ! 

          and any lower case letter will be converted automatically to
          upper case.  To restore KEY to the original action,  restore
          @KEY to (KEY):

                   ' (KEY) CFA @KEY ! 

          Note that UC-KEY still calls (KEY)  to  get  the  character.
          While this is usually the case, it  is  not  necessary:  you
          could change KEY to get characters from any  source.   Also,
          be careful that you don't call the  vectored  function  from
          within your replacement.  If KEY had been  used  instead  of
          (KEY)  in  the  definition  above,  once   @KEY   had   been
          re-assigned you  would  have  a  good  example  of  infinite
          recursion!  Actually it isn't infinite - FORTH  dies  rather
          quickly... 

          This discussion applies to all  of  the  i/o  words,  except
          ?TERMINAL.  The block i/o functions are re-assigned in  this
          way to use the screen files.  There are more elegant ways of
          implementing execution vectors, which bypass  the  need  for
          separate variables, but  they  require  new  defining  words
          which  would  have  been  inconvenient  to  define  in   the
          assembler source.
          8086/8088 FIG-FORTH User's Guide                     Page 42





                        Appendix B - Building FORTH.COM



          The following example serves several  functions.   It  is  a
          real session with FORTH, it shows how the FORTH.COM file was
          constructed, and, it demonstrates how to modify and save new
          versions of FORTH. 

          After assembling the FORTH source, you are left with a  bare
          kernel.  To add the  utilities,  editor  and  file  handling
          functions, several things have to be done:

               1) The file interface screens must be transferred to  a
                  FORTH disk.  This process involves  using  DEBUG  to
                  load the file and write it to the FORTH disk. 

               2) The file interface is LOADed from the FORTH disk. 

               3) The utilities and editor  are  /LOAD"ed  from  their
                  files. 

               4) FORTH is reset to make the additions permanent,  and
                  the version number is changed. 

               5) The utilities for saving FORTH are loaded  and  used
                  to write the new FORTH to a .COM file. 

          The following session was  copied  from  a  listing  of  the
          commands to build FORTH.COM.   An  ellipsis  indicates  that
          part of the listing has been left out. 

          This example assumes that you have a FORTH disk in drive  A,
          and your FORTH system disk with  FORTH.COM  and  the  screen
          files in drive B. 





                   B:DEBUG FILES.SCR
                   -W 100 0 64 20
                   -Q
                   B:

          Here, DEBUG has loaded the MS-DOS file interface screens  in
          FILES.SCR and then written the screens to disk A starting at
          screen 100.  This assumes that one record holds one  screen.
          You will have to adjust the record numbers if  this  is  not
          the case.
          8086/8088 FIG-FORTH User's Guide                     Page 43
          Appendix B - Building FORTH.COM



                   B:4TH

                   8086 FIG-FORTH Version 1.0A
                   100 LOAD 102 LOAD BYE MSG # 4 ok
                   LATEST ID.  LOAD" ok

          After assembling FORTH and grabbing a snack while MASM chugs
          along, the resulting 4TH.COM is started.  The  newly  copied
          screens residing on disk A are loaded,  the  last  word  now
          being LOAD". 





                   USING" FUTIL" last block in B:FUTIL.SCR is 10 ok
                   1 LOAD ok
                   2 LOAD ok
                   3 LOAD .DIR MSG # 4 ok
                   7 LOAD ok
                   LATEST ID.  COPY>SCR ok
                   EOF B:FUTIL .SCR 11264 07-19-1983 2:37 ok

          The file interface allows FORTH to  use  the  screen  files.
          The utilities for listing the directory  and  erasing  files
          are loaded.  Also, the words for copying screens to and from
          FORTH disks are loaded from screen 7. 





                   USING" UTIL" last block in B:UTIL.SCR is 8 ok
                   8 LOAD ok
                   3 LOAD 4 LOAD 6 LOAD ok
                   WORDS

                   CURRENT and CONTEXT are FORTH
                   WORDS   TAB     TABSTOP         MORE?   DLIST   NEW     SIZE? 
                   BASE?   VOC?    VOC.    S?      DEPTH   ENDCASE         ENDOF
                   OF      CASE    #SCRCOPY        SCRCOPY         ASSIGN-BUF
                   COPY>SCR        COPY>FILE       PAUSE   ERASE"
                   . 
                   . 
                   . 
                   EOF B:UTIL .SCR 9216 07-20-1983 19:18 ok

          More utilities, including  NEW  to  update  the  COLD  start
          parameters, are loaded  from  the  UTIL  screen  file.   The
          vocabulary listing word WORDS is tested, and then  the  file
          is closed.
          8086/8088 FIG-FORTH User's Guide                     Page 44
          Appendix B - Building FORTH.COM



                   LOAD" EDITOR" last block in B:EDITOR.SCR is 6

                           FORTH, Inc.  editor
                   . 
                   . 
                   . 
                           editor loading, please wait... 

                   I MSG # 4 R MSG # 4

                   Current screen is 8 B:EDITOR .SCR 7168 07-19-83 2:53 ok

          The editor described in STARTING FORTH is loaded.  Note that
          LOAD" first lists screen 0, then begins loading at screen 1,
          and finally closes the file when the load is complete. 





                   NEW
                   current version is A
                   new version (A-Z)?  Bok
                   USING" FUTIL" last block in B:FUTIL.SCR is 10 ok
                   4 LOAD ok
                   EOF B:FUTIL .SCR 11264 07-20-1983 19:32 ok

          Here, the utilities to save FORTH are loaded.  Note that any
          words defined after executing NEW will not  be  saved,  and,
          that the file is closed before writing the new version. 

                   >FILE S4
                   S4 /SAVE-FORTH" FORTH.COM"
                   B:FORTH .COM - w c 13687 07-20-1983 19:41 ok
                    ok
                   BYE
                   B:FORTH

                   8086 FIG-FORTH Version 1.0B
                   WORDS

                   WHERE   EDITOR  LINE    TEXT    WORDS... 

                   EDITOR WORDS

                   r       u       i       s       f... 

                   BYE





          END OF DOCUMENTATION

```
{% endraw %}

## 4TH-XTNS.ASM

{% raw %}
```
SUBTTL Code-level extensions
PAGE


;This file contains extensions to the FORTH kernel.
;These extensions are in assembly language either for speed, or
;to access specific processor functions.
;These are NOT system-dependent functions!

;=C+  (XOF)	primitive compiled by CASE..OF		n1 n2 -- [n1]

;	Code added for Dr. Eaker's CASE construct
;	After John Cassady's 8080 code in FD 3:187 1982
;	(jes ver1.2C,1982)
;
		$CODE	85H,(XOF,)
		POP	BX		;BX := case tag
		POP	AX		;AX := search tag
		CMP	AX,BX		;This one ?
		JE	XOF1		;Yes...
		PUSH	AX		;No, save search tag,
		JMP	BRAN1		;   and check the next case.
XOF1:		INC	SI		;...skip the branch offset,
		INC	SI		;   and
		JMP	NEXT		;   don't save the search tag.

;********************************************************
;*							*
;*	long fetch/store operators:	L@, L!		*
;*					LC@, LC!	*
;*					MYSEG		*
;*							*
;********************************************************

;=C+  L@	intersegment fetch operator		seg off -- n

		$CODE	82H,L,@
		POP	BX		;Offset
		MOV	DX,DS		;Save current segment
		POP	DS		;Segment
		MOV	AX,[BX]		;Fetch word at DS:BX
		MOV	DS,DX		;Restore segment register
		JMP	APUSH		;Return

;=C+  L!	intersegment store operator		n seg off --

		$CODE	82H,L,!!!!
		MOV	DX,DS
		POP	BX		;Offset
		POP	DS		;Segment
		POP	AX		;Data
		MOV	[BX],AX
		MOV	DS,DX
		JMP	NEXT

;=C+  LC@	intersegment byte fetch			seg off -- b

		$CODE	83H,LC,@
		MOV	DX,DS		;put DS in a safe place
		POP	BX		;offset
		POP	DS		;segment
		MOV	AL,BYTE PTR [BX]	;get it
		XOR	AH,AH		;make sure AH is clear
		MOV	DS,DX		;restore data segment
		JMP	APUSH

;=C+  LC!	intersegment byte store			b seg off --

		$CODE	83H,LC,!!!!
		MOV	DX,DS		;save DS
		POP	BX		;offset
		POP	DS		;segment
		POP	AX		;data
		MOV	BYTE PTR [BX],AL	;move it
		MOV	DS,DX		;back to old data segment
		JMP	NEXT

;=C+  MYSEG	get FORTH's segment			-- seg

		$CODE	85H,MYSE,G
		MOV	AX,DS		;could just as well be CS or SS
		JMP	APUSH

;=C+  (ARRAY)	1d array addressing primitive		n1 addr1 -- addr2

;
;	Code added to support array references.
;	Used by ARRAY to calculate the address of the
;	nth element of the array.
;	(jes ver1.2c,1982)
;
		$CODE	87H,(ARRAY,)
		POP	BX		;BX -> SIZE
		POP	AX		;AX := n
		ADD	AX,AX		;AX := AX*2
		ADD	AX,BX		;AX -> ARRAY[n]
		ADD	AX,2		;Offset to ARRAY[0]
		JMP	APUSH

;=C+  (2ARR)	2d array addressing primitive		n1 n2 addr1 -- addr2

		$CODE	86H,(2ARR,)
		POP	BX		;BX -> rowsize
		POP	CX		;CX := column
		POP	AX		;AX := row
		MUL	[BX]		;AX := row*row dim.
		ADD	AX,CX		;AX := AX + col
		ADD	AX,AX		;2 bytes per element
		ADD	AX,BX		;AX := AX+PFA
		ADD	AX,4		;Offset to ARRAY[0]
		JMP	APUSH

;=C+  (CARR)	1d byte array addressing primitive	n addr1 -- addr2

		$CODE	86H,(CARR,)
		POP	BX
		POP	AX
		ADD	AX,BX
		ADD	AX,2
		JMP	APUSH

;=C+  (2CARR)	2d byte array addressing primitive	n1 n2 addr1 -- addr2

		$CODE	87H,(2CARR,)
		POP	BX
		POP	CX
		POP	AX
		MUL	[BX]
		ADD	AX,CX
		ADD	AX,BX
		ADD	AX,4
		JMP	APUSH

;	Port fetch/store operators
;	FIG-listing, pp. 76,77

;=C   PC@	fetch byte from a port			port# --

		$CODE	83H,PC,@
		POP	DX
		IN	AL,DX
		SUB	AH,AH		;make sure high byte is zero
		JMP	APUSH

;=C   PC!	send byte to port			b port# --

		$CODE	83H,PC,!!!!
		POP	DX		;port
		POP	AX		;data
		OUT	DX,AL
		JMP	NEXT

;=C   P@	16-bit port fetch			port# -- n

		$CODE	82H,P,@
		POP	DX
		IN	AX,DX
		JMP	APUSH

;=C   P!	16-bit port output			n port# --

		$CODE	82H,P,!!!!
		POP	DX
		POP	AX
		OUT	DX,AX
		JMP	NEXT

;=C   MATCH	string search primtive			addr1 n addr2 n -- f addr3

		$CODE	85H,MATC,H
		MOV	DI,SI
		POP	CX
		POP	BX
		POP	DX
		POP	SI
		PUSH	SI
MATCH1:		LODSB
		CMP	AL,BYTE PTR [BX]
		JNZ	MATCH3
		PUSH	BX
		PUSH	CX
		PUSH	SI
MATCH2:		DEC	CX
		JZ	MATCHOK
		DEC	DX
		JZ	NOMATCH
		INC	BX
		LODSB
		CMP	AL,BYTE PTR [BX]
		JZ	MATCH2
		POP	SI
		POP	CX
		POP	BX
MATCH3:		DEC	DX
		JNZ	MATCH1
		JMP	SHORT MATCH4
MATCHOK:
NOMATCH: 	POP	CX
		POP	CX
		POP	CX
MATCH4:		MOV	AX,SI
		POP	SI
		SUB	AX,SI
		MOV	SI,DI
		JMP	DPUSH

	$REPORT	<CODE-level extensions>

```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0685

     Volume in drive A has no label
     Directory of A:\

    ARC      EXE     32429   2-05-86  10:26p
    CONTENTS          2201   5-18-87  12:40a
    FILES685 TXT       725   6-11-87   9:14a
    FORTH    ARC    139896   5-17-87  11:58a
    GO       BAT        38   6-11-87   9:15a
    GO       TXT       540   6-11-87   9:18a
    README            2000   1-12-87   8:31p
    UNPACK   BAT       861   1-12-87   8:17p
            8 file(s)     178690 bytes
                          140288 bytes free
