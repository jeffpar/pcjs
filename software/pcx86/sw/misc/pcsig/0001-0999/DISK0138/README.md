---
layout: page
title: "PC-SIG Diskette Library (Disk #138)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0138/
machines:
  - id: ibm5160
    type: pcx86
    config: /machines/pcx86/ibm/5160/cga/256kb/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0138"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5160" %}

{% comment %}info_begin{% endcomment %}

## Information about "PROGRAMERS UTILITIES #4"

    A hackers paradise!  Utilities let you set printer modes from DOS,
    diagnose parity errors and display interrupt vectors, and give you a
    100-line virtual screen.  There are instructions on accessing DOS
    enviornment variables from within batch files, and much, much, more!
    
    How to Start:  To run an EXE or COM program simply type it's name and
    press <enter>.  For instructions on ASM or 'C' listings, refer to your
    Assembler or 'C' language manuals.  For instructions on running
    BASIC programs, please refer to the "Getting Started" section in
    this catalog. To read DOC files simply enter TYPE filename.ext
    and press <enter>.
    
    Suggested Registration:   RE-VIEW $15.00
    
    File Descriptions:
    
    BLYPROGS DOC  General description of BLY programs
    CLA      COM  Part of RE-VIEW
    ANSIPCH  EXE  Part of RE-VIEW
    RE-VIEW  DOC  Documentation for above
    RE-VIEW  COM  BLY's color support for 100-line virtual screen in DOS!
    SETPRN   ASM  Source for above
    SETPRN   COM  BLY's printer setup program
    BRICKS   EXE  BLY's version of BREAKOUT
    UP       COM  Part of RE-VIEW
    CASE     COM  BLY's resident utility for auto case switch.
    SETPRN   DOC  Documentation for above
    VTYPE    EXE  BLY's replacement for DOS type command, many extensions
    CASE     ASM  Source for above
    VTYPE    DOC  Documentation for above
    VTYPE    C    Source for above
    ENVIRON  DOC  How to access DOS environment variables from batch files
    IOS1_20  ASM  DOS 2.0 version of level 1 I/O routines for Lattice c
    _MAIN    C    DOS 2.0 version of main routine for Lattice c
    C        ASM  DOS 2.0 version of entry point routine for Lattice c
    LIBRIAN  MRG  Merge file to upgrade IBM diskette librarian to DOS 2.0
    LIBRIAN  DOC  Documentation for above
    NORTPAT2 DOC  Patch to Norton Util 2.0 to support Teac 42 track drives
    RMSPC    ASM  Source for above
    RMSPC    COM  Interrupt handler for diagnosing parity errors
    VECTS    EXE  Program to display interrupt vectors
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## C.ASM

{% raw %}
```
PAGE 64,132
TITLE C -- DOS 2.0 version for Lattice 'C'  07/12/83
; name		XCMAIN -- initiate execution of C program
;
; description	This is the main module for a C program on the
;		MS-DOS implementation.	It initializes the segment
;		registers, sets up the stack, and calls the C main
;		function _main with a pointer to the remainder of
;		the command line.
;
;		Also defined in this module is the exit entry point
;		XCEXIT.
;
;			Ted Reuss     c/o South Texas Software, Inc.
;		  Home: 713/961-3926	  4544 Post Oak Place, Suite 176
;		  Offi: 713/877-8205	  Houston, Tx 77027
;
pgroup	group	base,prog
dgroup	group	data,stack
;
; The following segment serves only to force "pgroup" lower in
; memory.  It also contains the Lattice C revision number.
;
base	segment 'prog'
	db	"Lattice C 1.04"
base	ends
;
; The data segment defines locations which contain the offsets
; of the base and top of the stack.
;
data	segment byte public 'data'
	public	_top, _base
_top	dw	0
_base	dw	0
data	ends
;
; The stack segment is included to prevent the warning from the
; linker, and also to define the base (lowest address) of the stack.
;
stack	segment stack 'data'
sbase	dw	128 dup (?)
stack	ends
;
; The main program must set up the initial segment registers
; and the stack pointer, and free memory via function call(4A).
; The command line bytes from the program segment prefix are
; moved onto the stack, and a pointer to them supplied to the
; C main module _main (which calls main).
;
prog	segment byte public 'prog'
	public	XCMAIN, XCEXIT
	extrn	_main:near
	assume	cs:pgroup, ds:dgroup, ss:dgroup
XCMAIN	proc	far
	cli			;disable interrupts
	mov	ax,dgroup
	mov	ds,ax		;initialize ds and ss
	mov	ss,ax
	mov	bx,es:2 	;total memory size (paragraphs)
	sub	bx,ax
	test	bx,0f000h
	jnz	m1		;branch if more than 64K bytes
	mov	cl,4
	shl	bx,cl		;highest available byte
	jmp	short m2
m1:	mov	bx,0fff0h
m2:	mov	sp,bx		;set stack pointer
	sti			;enable interrupts
	mov	_top,bx 	;save top of stack
	mov	ax,offset dgroup:sbase
	mov	_base,ax	;store ptr to bottom of stack
	push	es		;push ptr to pgm segment prefix
	xor	ax,ax
	push	ax		;instr ptr for far return
	mov	bp,sp		;save in bp
	mov	si,80h		;ptr to command line bytes
	mov	cl,es:[si]	;get number of bytes
	inc	si
	xor	ch,ch		;clear high byte
	mov	bx,cx
	add	bx,4		;3 bytes additional, 1 for rounding
	and	bx,0fffeh	;force even number of bytes
	sub	sp,bx		;allocate space on stack
	mov	di,sp
	mov	byte ptr [di],'c'       ;store dummy program name
	inc	di
	jcxz	m4		;skip if no bytes to move
	mov	byte ptr [di],' '
	inc	di
m3:	mov	al,es:[si]	;move bytes to stack
	mov	[di],al
	inc	si
	inc	di
	loop	m3
m4:	xor	ax,ax
	mov	[di],al 	;store null byte
	mov	bx,ds		;set up es:bx with
	mov	ax,es		; the # paragraphs
	sub	bx,ax		; required and tell
	add	bx,1000h	; DOS.
	mov	ah,4ah		;DOS SETBLOCK
	int	21h
	mov	ax,ds
	mov	es,ax		;es, ds, and ss are all equal
	mov	ax,sp
	push	ax		;ptr to command line
	call	_main		;call C main
	xor	al,al
	jmp	short XCE10	;exit to DOS
XCMAIN	endp
;
; name		XCEXIT -- terminate execution of C program
;
; description	This function terminates execution of the current
;		program by returning to MS-DOS.  The error code
;		argument is passed to MS-DOS via function call(4C)
;
XCEXIT	proc	near
	mov	bp,sp
	mov	ax,[bp+2]	;get error code
XCE10:	mov	ah,4ch		;DOS exit
	int	21h
here:	jmp	short here	;should never get here
XCEXIT	endp
prog	ends
	end	XCMAIN
```
{% endraw %}

## CASE.ASM

{% raw %}
```

COMMENT^ *** CASE.COM *** Last Rev. 10/08/83 *** Vincent T. Bly ***
 -------------------------------------------------------------------
|                                                                   |
| PURPOSE:  Provide a resident utility to aid assembly language     |
|           programmers who wish to write their source code in      |
|           ALL CAPS and their comments in lower case.              |
|                                                                   |
| FUNCTION: Change the cursor shape to indicate the present state   |
|           of the "Caps Lock" key (block cursor for caps lock and  |
|           underline cursor for upper/lower case).                 |
|           Shift to upper/lower case for comments whenever the ";" |
|           key is pressed.                                         |
|           Shift to caps lock for source code whenever the "Enter" |
|           key is pressed.                                         |
|           Toggle the ";"/"Enter" case switching off or on when-   |
|           ever both shift keys are pressed simultaneously.        |
|								    |
| TO USE:   From DOS, type CASE and press the "Enter" key.	    |
|                                                                   |
| NOTES:    This version works with either the color graphics or    |
|	    monochrome card.  The DOS utilities (DIR, DEBUG, etc.)  | 
|           do not turn off the cursor during printing.  If you     |
|           find the effect with the block cursor objectionable,    |
|           you can temporarily turn off the case switching by      |
|           pressing both shift keys simultaneously or you can      |
|	    change the DWs defining the cursor shapes.		    |  	
|                                                                   |
 -------------------------------------------------------------------^

INTERRUPTS	SEGMENT	AT 00H	;*********** Interrupt vector table **
		ORG	09H*4
KB_INT		LABEL	DWORD		; keyboard hardware interrupt
	 	ORG	16H*4
KEYBRD_INT	LABEL	DWORD		; keyboard software interrupt
INTERRUPTS	ENDS

BIOS_DATA	SEGMENT	AT 40H	;*********** BIOS data segment *******
		ORG	10H
EQUIP_FLAG	LABEL	WORD		; bits 4 & 5 indicate CRT board type
		ORG	17H
KYBD_FLAG	LABEL	BYTE		; primary keyboard status flag
		ORG	63H
ADDR_6845	LABEL	WORD		; port address of 6845 index register
BIOS_DATA	ENDS

CSEG		SEGMENT	
		ORG	100H		; necessary for a .COM file
		ASSUME	CS:CSEG
START:		JMP	INITIALIZE	; jump to initilization routine
CAP_CURSOR_C	DW	0006H		; caps lock cursor type (color board)
CAP_CURSOR_M	DW	000BH		;     as above, for monochrome board
LOW_CURSOR_C	DW	0607H		; upper/lower case cursor type (color)
LOW_CURSOR_M	DW	0B0CH		;     as above, for monochrome board
ROM_KEY_INT	DD			; ROM keyb'rd hardware interrupt addr.
ROM_KYBD_IO	DD			; ROM keyb'rd software interrupt addr.
CASE_FLAG	DB	0FFH		; case switching flag (FF=on, 00=off)
OLD_KYF		DB	040H		; old value of KYBD_FLAG



;===========================================================================;
@HARD_KYBD_INT	PROC	FAR		    ; Keyboard hardware interrupts  ;
		ASSUME CS:CSEG,DS:BIOS_DATA ; (09H) are re-vectored to here ;
		STI			    ;-------------------------------;
		PUSHF			; set-up to call like an interrupt
		CALL	ROM_KEY_INT	; call ROM BIOS, but return here
		PUSH	AX		; save regs
		PUSH	DS
		MOV	AX,BIOS_DATA	; point DS to BIOS data seg
		MOV	DS,AX
		MOV	AL,[KYBD_FLAG]	; get BIOS keyboard status flag
		CMP	AL,CS:[OLD_KYF]	; has status flag changed?
		JE	GO_BACK		; if not, go back
		MOV	CS:[OLD_KYF],AL	; refresh old status flag value
		CALL	SET_CURSOR	; go set proper cursor type
		AND	AL,3		; mask all but shift keys
		CMP	AL,3		; check for both shift keys down
		JNE	GO_BACK		; if not both shifts, skip toggle
		MOV	AL,CS:[CASE_FLAG] ; get case switch flag
		NOT	AL		; toggle flag
		MOV	CS:[CASE_FLAG],AL ; replace flag
GO_BACK:	POP	DS
		POP	AX
		IRET			; back to program
@HARD_KYBD_INT	ENDP

;============================================================================;
SET_CURSOR	PROC	NEAR	; Set cursor for uppr/lowr case or caps lock ;
		ASSUME	CS:CSEG,DS:BIOS_DATA ;-------------------------------;
		PUSH	AX		; save regs
		PUSH	BX
		PUSH	DX
		LEA	BX,LOW_CURSOR_C	; load upper/lower case cursor
		TEST	AL,40H		; is caps lock on?
		JZ	CHK_BOARD	; if not, go check board type
		LEA	BX,CAP_CURSOR_C	; load caps lock cursor
CHK_BOARD:	MOV	AX,EQUIP_FLAG	; get equipment flag
		AND	AX,30H		; isolate CRT board type bits
		CMP	AX,30H		; is it monochrome board?
		JNE	CG_SET		; if not, skip ahead
		ADD	BX,2		; bump BX to mono cursor type
CG_SET:		MOV	BX,CS:[BX]	; get proper cursor into BX 
		MOV	DX,ADDR_6845	; point to 6845 index reg
		MOV	AL,10D		; point to cursor start reg
		OUT	DX,AL		; select cursor start reg 
		INC	DX		;     point to 6845 data reg
		MOV	AL,BH		;     data into AL
		OUT	DX,AL		;     data to cursor start reg
		DEC	DX		; point to 6845 index reg
		MOV	AL,11D		; point to cursor end reg
		OUT	DX,AL		; select cursor end reg
		INC	DX		;     point to 6845 data reg
		MOV	AL,BL		;     next data into AL
		OUT	DX,AL		;     data to cursor end reg
		POP	DX		; restore regs
		POP	BX
 		POP	AX
		RET
SET_CURSOR	ENDP


;============================================================================;
@SOFT_KYBD_INT	PROC	FAR		     ; Keyboard software interrupts  ;
		ASSUME	CS:CSEG,DS:BIOS_DATA ; (16H) are re-vectored to here ;
		STI			     ;-------------------------------;
		OR	AH,AH		; is it wait for keyboard input?
		JZ	THIS_ROUTINE	; if so, do this routine
		JMP	ROM_KYBD_IO	; else go to ROM & back to caller
THIS_ROUTINE:	PUSHF			; set-up to CALL like an interrupt
		CALL	ROM_KYBD_IO	; call ROM BIOS, but return here
		PUSH	AX		; save caller's registers
		PUSH	DS		; 	"
		TEST	CS:[CASE_FLAG],1 ; is case switching flag on?
		JZ	BACK_TO_CALLER	; if case flag off, skip the rest
		CMP	AL,";"		; is the character a semicolon?
		JE	CAPS_OFF	; if so, go turn caps lock off
		CMP	AL,0DH		; is the character a carriage return?
		JE	CAPS_ON		; if so, go turn caps lock on
BACK_TO_CALLER:	POP	DS		; restore caller's registers
		POP	AX		; 	"
		IRET			; return to the caller
;--- Toggle caps lock for ";" or "Enter" ----------------------------------
CAPS_ON:	STC			; set carry to indicate caps on
CAPS_OFF:	MOV	AX,BIOS_DATA	; point to BIOS data segment
		MOV	DS,AX
		MOV	AL,[KYBD_FLAG]	; get keyboard state flag
		JC	SET_ON		; if caps should be set on, skip ahead
		AND	AL,NOT 40H	; turn off caps lock
		JMP	REPLACE_FLAG
SET_ON:		OR	AL,40H		; turn caps lock on
REPLACE_FLAG:	MOV	[KYBD_FLAG],AL	; replace keyboard state flag
		CALL	SET_CURSOR	; go set proper cursor type
		JMP	BACK_TO_CALLER
@SOFT_KYBD_INT	ENDP

;============================================================================;
INITIALIZE	PROC	NEAR		      ; Re-vector keyb'rd interrupts ;
		ASSUME	CS:CSEG,DS:INTERRUPTS ;------------------------------;
		MOV	AX,INTERRUPTS	; point to interrupt vector segment
		MOV	DS,AX
;--- Set intercept for software keyboard interrupt -------------------------
		MOV	AX,KEYBRD_INT	; save old keyboard interrupt vector
		MOV	ROM_KYBD_IO,AX
		MOV	AX,KEYBRD_INT[2]
		MOV	ROM_KYBD_IO[2],AX
		MOV	AX,OFFSET @SOFT_KYBD_INT ; reset keyboard interrupt
		MOV	KEYBRD_INT,AX	; vector to point to this routine
		MOV	KEYBRD_INT[2],CS
;--- Set intercept for hardware keyboard interrupt -------------------------
		MOV	AX,KB_INT	; save old keyboard interrupt vector
		MOV	ROM_KEY_INT,AX
		MOV	AX,KB_INT[2]
		MOV	ROM_KEY_INT[2],AX
		MOV	AX,OFFSET @HARD_KYBD_INT ; reset keyboard interrupt
		MOV	KB_INT,AX	; vector to point to this routine
		MOV	KB_INT[2],CS
		MOV	DX,OFFSET INITIALIZE ; point to end of resident code
		INT	27H		; terminate but stay resident
INITIALIZE	ENDP

CSEG		ENDS
		END	START
```
{% endraw %}

## CRC.TXT

{% raw %}
```
PC-SIG Disk No. #138, version v1 

The following is a list of the file checksums which should be produced by
the CRCK4 program on disk #9 (and others).  If the CRC numbers do not match
you may have a bad file.  To use type:  CRCK4 <filespec>

CRCK4 output for this disk:


CRCK ver 4.2B (MS DOS VERSION )
CTL-S pauses, CTL-C aborts

--> FILE:  ANSIPCH .EXE         CRC = 47 07

--> FILE:  BLYPROGS.DOC         CRC = BD 78

--> FILE:  BRICKS  .EXE         CRC = D8 35

--> FILE:  C       .ASM         CRC = 24 4B

--> FILE:  CASE    .ASM         CRC = 3D 44

--> FILE:  CASE    .COM         CRC = 50 4D

--> FILE:  CLA     .COM         CRC = 78 FD

--> FILE:  ENVIRON .DOC         CRC = E5 DE

--> FILE:  IOS1_20 .ASM         CRC = 73 E3

--> FILE:  LIBRIAN .DOC         CRC = 2F 7A

--> FILE:  LIBRIAN .MRG         CRC = 24 D5

--> FILE:  NORTPAT2.DOC         CRC = 82 10

--> FILE:  RE-VIEW .COM         CRC = 35 30

--> FILE:  RE-VIEW .DOC         CRC = F6 8F

--> FILE:  SETPRN  .ASM         CRC = 14 96

--> FILE:  SETPRN  .COM         CRC = 1B A0

--> FILE:  SETPRN  .DOC         CRC = 27 D1

--> FILE:  UP      .COM         CRC = A3 12

--> FILE:  VECTS   .EXE         CRC = C2 8D

--> FILE:  VTYPE   .C           CRC = FE AF

--> FILE:  VTYPE   .DOC         CRC = 0A B6

--> FILE:  VTYPE   .EXE         CRC = 44 9F

--> FILE:  _MAIN   .C           CRC = 1D DB

--> FILE:  RMSPC   .ASM         CRC = 09 A8

--> FILE:  RMSPC   .COM         CRC = 4D 1D

--> FILE:  READ    .ME          CRC = 21 7C

 ---------------------> SUM OF CRCS = 05 32

DONE

These and other Public Domain and user-supported programs from:

PC Software Interest Group
1125 Stewart Ct  Suite G
Sunnyvale, CA 94086
(408) 730-9291
```
{% endraw %}

## IOS1_20.ASM

{% raw %}
```
title	Level 1 I/O Functions for Lattice 'c' Version 1.04
page	64,132
name	IOS1_20 ;DOS function calls 3DH, 3EH, 3FH, 40H, AND 42H.
comment |
   These functions take advantage of DOS 2.0 and will directly
replace the original level 1 I/O except that 'text mode' is
not supported.	DOS error numbers are saved at ERRNO and may be
checked by including: "extern short errno;" in your source files.
Note that the pmode parameter in creat is forced to zero, due to
a problem with Lattice's freopen which passes a 1A4H to creat.

			Ted Reuss     c/o South Texas Software, Inc.
		  Home: 713/961-3926	  4544 Post Oak Place, Suite 176
		  Offi: 713/877-8205	  Houston, Tx 77027
	|
	public	CREAT, OPEN, CLOSE, READ, WRITE, LSEEK
dgroup	group	data
data	segment word public 'data'
	assume	ds:dgroup

	public	ERRNO
ERRNO	dw	0	; DOS error number (DOS Manual page D-14)
data	ends

pgroup	group	prog
prog	segment byte public 'prog'
	assume	cs:pgroup

	subttl	CREAT -- create a new file
	page
;
; NAME
;	creat -- create a new file
;
; SYNOPSIS
;
;	file = creat(name, pmode);
;	int file;	file number or error code
;	char *name;	file name (valid drive\path\filespec)
;	int pmode;	access privilege mode bits, DOS attribute
;			NOTE: forced to zero in current version.
;
; DESCRIPTION
;
;	Creates a new file with the specified name and prepares is
;	for access via the level 1 I/O functions.  The file name
;	may consist of a valid drive and path name.  All I/O is
;	done via DOS calls 3fh (READ) and 40h (WRITE).	If the file
;	already exists, it's contents are discarded.  The current file
;	position and the end of file are both zero. (indicating an
;	empty file) if the function is successful. ERRNO is set to
;	the error number returned by DOS in the event of an error.
;
; RETURNS
;	file = file number to access file, if successful
;	     = -1 if error  (ERRNO get DOS error number)
;

	public	CREAT
CREAT	proc	near
	push	bp
	mov	bp,sp
	mov	dx,[bp+4]	;get ptr to drive\path\filespec
	xor	cx,cx
	mov	ah,3CH		;DOS create function
	int	21H
	jnc	cre10
	mov	dgroup:errno,ax
	mov	ax,-1
cre10:	mov	sp,bp
	pop	bp
	ret
CREAT	endp

	subttl	OPEN -- open a file
	page
;
; NAME
;	open -- open a file
;
; SYNOPSIS
;
;	file = open(name, rwmode);
;	int file;	file number or error code
;	char *name;	file name (valid drive\path\filespec)
;	int rwmode;	read/write mode, where 0=read, 1=write,
;			2=read/write
;
; DESCRIPTION
;
;	Opens a file for access using the level 1 I/O functions.
;	The file name may contain a valid drive and path name.	All
;	I/O is done via DOS functions 3fh (READ) and 40h (WRITE).
;	The mode word determines the type of I/O which will be
;	performed on the file.	The low order bits specify whether
;	read or write operations (or both) are to be allowed.
;	In the event of an error the error code passed by DOS is
;	saved at ERRNO.
;
; RETURNS
;
;	file = file number to access file, if successful
;	     = -1 if error  (ERRNO get DOS error number)
;

	public	OPEN
OPEN	proc	near
	push	bp
	mov	bp,sp
	mov	dx,[bp+4]	;get ptr to drive\path\filespec
	mov	ax,[bp+6]	;get mode
	mov	ah,3DH		;DOS open function
	int	21H
	jnc	opn10
	mov	dgroup:errno,ax
	mov	ax,-1
opn10:	mov	sp,bp
	pop	bp
	ret
OPEN	endp

	subttl	CLOSE -- close a file
	page
;
; NAME
;
;	close -- close a file
;
; SYNOPSIS
;
;	status = close(file);
;	int status;	status code: 0 if successful
;	int file;	file number for file
;
; DESCRIPTION
;
;	Close a file and frees the file number for use in accessing
;	another file.  Any buffers allocated when the file was
;	opened are released.
;
; RETURNS
;
;	status = 0 if successful
;	       = -1 if error  (ERRNO get DOS error number)
;

	public	CLOSE
CLOSE	proc	near
	push	bp
	mov	bp,sp
	mov	bx,[bp+4]	;get file handle
	mov	ah,3EH		;DOS close function
	int	21H
	jc     clo10
	xor	ax,ax
	jmp	short clo20
clo10:	mov	dgroup:errno,ax
	mov	ax,-1
clo20:	mov	sp,bp
	pop	bp
	ret
CLOSE	endp

	subttl	READ -- read data from file
	page
;
; NAME
;
;	read -- read data from file
;
; SYNOPSIS
;
;	status = read(file, buffer, length);
;	int status;	status code or actual length
;	int file;	file number for file
;	char *buffer;	input buffer
;	int length;	number of bytes requested
;
; DESCRIPTION
;
;	Reads the next set of bytes from a file.  The return count
;	is always equal to the number of bytes placed in the buffer
;	and will never exceed the "length" parameter, except in the
;	case of an error, where -1 is returned.  The file position
;	is advanced accordingly.
;
; RETURNS
;
;	status = 0 if end of file
;	       = -1 if error  (ERRNO get DOS error number)
;	       = number of bytes actually read, otherwise
;

	public	READ
READ	proc	near
	push	bp
	mov	bp,sp
	mov	bx,[bp+4]	;get file handle
	mov	dx,[bp+6]	;get buffer address
	mov	cx,[bp+8]	;get byte count
	mov	ah,3FH		;DOS read function
	int	21H
	jnc	red10
	mov	dgroup:errno,ax
	mov	ax,-1
red10:	mov	sp,bp
	pop	bp
	ret
READ	endp

	subttl	WRITE -- write data to file
	page
;
; NAME
;
;	write -- write data to file
;
; SYNOPSIS
;
;	status = write(file, buffer, length);
;	int status;	status code or actual length
;	int file;	file number for file
;	char *buffer;	output buffer
;	int length;	number of bytes in buffer
;
; DESCRIPTION
;
;	Writes the next set of bytes to a file.  The return count is
;	equal to the number of bytes written, unless an error
;	occurred.  The file position is advanced accordingly.
;
; RETURNS
;
;	status = -1 if error  (ERRNO get DOS error number)
;	       = number of bytes actually written otherwise
;

	public	WRITE
WRITE	proc	near
	push	bp
	mov	bp,sp
	mov	bx,[bp+4]	;get file handle
	mov	dx,[bp+6]	;get buffer address
	mov	cx,[bp+8]	;get byte count
	mov	ah,40H		;DOS write function
	int	21H
	jnc	wrt10
	mov	dgroup:errno,ax
	mov	ax,-1
wrt10:	mov	sp,bp
	pop	bp
	ret
WRITE	endp

	subttl	LSEEK -- seek to specified file position
	page
;
; NAME
;
;	lseek -- seek to specified file position
;
; SYNOPSIS
;
;	pos = lseek(file, offset, mode);
;	long pos;	returned file position or error code
;	int file;	file number for file
;	long offset;	desired position
;	int mode;	offset mode relative to:
;			0 = beginning of file	    BOFM
;			1 = current file position   CURM
;			2 = end of file 	    EOFM
;
; DESCRIPTION
;
;	Changes the current file position to a new position in the
;	file.  The offset is specified as a long int and is added to
;	the current position (mode 1) or to the logical end of file
;	(mode 2).  Use DOS function 42h (LSEEK).
;
; RETURNS
;
;	pos = -1L if error occurred (ERRNO get DOS error number)
;	= new file position if successful
;

	public	LSEEK
LSEEK	proc	near
	push	bp
	mov	bp,sp
	mov	bx,[bp+4]	;get file handle
	mov	dx,[bp+6]	;get low word of pos
	mov	cx,[bp+8]	;get high word of pos
	mov	ax,[bp+10]	;get seek mode
	mov	ah,42H		;DOS lseek function
	int	21H
	jnc	lsk10
	mov	dgroup:errno,ax
	mov	ax,-1
	mov	dx,ax
lsk10:	mov	bx,ax
	mov	ax,dx
	mov	sp,bp
	pop	bp
	ret
LSEEK	endp

prog	ends
	end
```
{% endraw %}

## RE-VIEW.DOC

{% raw %}
```
                 ----------------------------------------
                |         *** RE-VIEW  1.8 ***           |
                |                                        |
                |  Copyright (C) 1983 by Vincent T. Bly  |
                |                                        |
                |   RE-VIEW is a user supported program. |
                | If you find RE-VIEW useful, send $15   |
                | to:         Vincent Bly                |
                |             P. O. Box 409              |
                |             Ft. Belvoir, VA  22060     |
                |                                        |
                |   You are encouraged to give copies of |
                | this software and documentation to your|
                | friends.  Please make sure it includes |
                | the notice above.  Anyone who wishes to|
		| get RE-VIEW directly from the author	 |
		| can send $22 which covers the software,|
		| diskette, mailer, and postage.	 |
                |                                        |
                |   Support will be provided to users who|
                | have paid for the program.  Send your  |
                | clearly worded questions to the above  |
                | address.  A stamped, self-addressed    |
                | envelope will speed replies.           |
                 ----------------------------------------
 
   GENERAL DESCRIPTION
   -------------------
       RE-VIEW provides enhanced text display capabilities for the IBM PC
   or PC-XT equipped with the standard Color/Graphics Adapter.  It is also
   compatible with the COMPAQ portable computer.  RE-VIEW can be used with
   MS-DOS 1.0, 1.1, or 2.0.  Its main features include:
       a) A 75 line screen buffer which saves text as it scrolls off the
   top of the active display page.
       b) The ability to review the 75 line screen buffer and the active
   display page together as one virtual screen of 100 text lines.
       c) The ability to scroll rapidly up and down the 100 line virtual
   screen, a line at a time or a page (25 lines) at a time.
       d) The ability to quickly pause normal screen display by tapping
   the [Scroll Lock] key.  During the pause, you can review any text in
   the 100 line virtual screen.
       e) The ability to temporarily stop saving new scrolled text, so
   that text already in the buffer is preserved for future reference.
       f) An improved scrolling routine with substantually reduced flicker.

   PAGING KEYS
   -----------
       RE-VIEW uses the extreme right-hand [-] and [+] keys for page up and
   page down functions, respectively (the normal [-] and [+] keys are not
   affected).  These keys are used by RE-VIEW to avoid incompatibility with
   other programs which use the [Pg Up] and [Pg Dn] keys for their own
   purposes.
       In the text below, "rgt[-]" and "rgt[+]" signify the extreme right-
   hand [-] and [+] keys, respectively.  "<shft>rgt[-]" and "<shft>rgt[+]"
   signify the shifted right-hand [-] and [+] keys.

   LIMITATIONS
   -----------
       RE-VIEW only operates with the Color/Graphics Adapter.  It is NOT
   compatible with the Monochrome Display Adapter.  RE-VIEW's main features
   operate in the 80 column text mode only (although the quick pause feature
   can be used from any display mode).  Also, the DOS 2.0 ANSI.SYS device
   driver is not compatible with RE-VIEW; however, a patching program is
   provided with RE-VIEW which will create a compatible version of ANSI.SYS.
 
   INSTALLING RE-VIEW
   ------------------
       RE-VIEW can be installed from DOS by typing the command: RE-VIEW
   and pressing return.  Normally, you would include this command in your
   AUTOEXEC.BAT file.  Once RE-VIEW has been installed, it will remain in
   your system--ready to provide the capabilities listed below--until you
   turn your system off or reboot with <Ctrl><Alt>[Del].

   USING RE-VIEW
   -------------
       RE-VIEWs features can be used any time your computer is waiting for
   keyboard input.  The function of the keys used by RE-VIEW are as follows:
 
   rgt[-] or rgt[+] ... These keys allow you to quickly scroll up or down
                        through the 100 line virtual screen, a line at a time.
 
   <shft>rgt[-] or <shft>rgt[+] ... These keys allow you to move up or down
                        through the 100 line virtual screen, a page at a time
                        (there are a total of 4 pages).
 
   <Alt>[Scroll Lock] ... This key combination allows you to toggle saving of
                        scrolled text into the 75 line buffer.  In order to
                        help you keep track of the current state--an audible
                        signal will be sounded as follows:
                                   2 BEEPS - scrolled text will be saved,
                                   1 BEEP  - scrolled text will not be saved.
                           This feature can be used to save text created by
                        one program for later review by another.  For example,
                        you could use TYPE to display up to 75 lines of your
                        program source code.  Next, you would scroll the lines
                        off the screen to save them in the 75 line buffer.*
                        Next, you would press <Alt>[Scroll Lock] to prevent
                        future scrolled lines from disturbing the contents of
                        the buffer.  Now, you could enter DEBUG to analyze
                        your program, while--at any time--being able to review
                        your commented source code using RE-VIEW's paging keys
                        (rgt[-], etc.).
                        *  The UP.COM program, included with RE-VIEW, makes
                        scrolling the text into the buffer easier--see the
                        description near the end of this documentation.

       RE-VIEW's features can also be used while your computer is displaying
   text on the screen.  First--you must pause the screen display by pressing
   the [Scroll Lock] key.  During the pause you may use the keys listed below:
 
   rgt[-] or rgt[+] ... Scroll up or down through the 100 line virtual
                        screen, a line at a time.
 
   <shft>rgt[-] or <shft>rgt[+] ... Move through the (4 page) virtual screen,
                        a page at a time.
 
   <Alt>[Scroll Lock] ... Toggle between saving and not saving scrolled text.
 
   <Ctrl>[Scroll Lock] = "Break" ... Perform a Break immediately.  Unlike the
                        <Ctrl>[Num Lock] pause, the [Scroll Lock] pause does
                        not throw away the key used to restart.  Therefore you
                        do not need to hit the "Break" key twice.

   Any Other Key (including [Scroll Lock]) ... Restart normal screen display.
 
   COMPATIBLE PROGRAMS
   -------------------
       RE-VIEW is compatible with most text producing programs which print
   to the screen using the standard DOS or ROM routines.  Known compatible
   programs include:
               DIR, TYPE, <MORE, TREE, COMP, DEBUG, EDLIN, and BASIC.

   DEACTIVATING RE-VIEW
   --------------------
       Some programs will not be compatible with RE-VIEW.  These include:
                        a) programs which access screen memory directly;
                        b) programs which use screen pages other than page 0;
                        c) and, programs which use the same keys as RE-VIEW.
   When you use one of these programs or need to use the right-hand [-] and
   [+] keys for data entry, you can--temporarily--deactivate RE-VIEW by
   pressing <Ctrl><Alt>[Scroll Lock].  When deactivated, RE-VIEW will have
   no effect on system processing except for a small routine which will wait
   for the next press of <Ctrl><Alt>[Scroll Lock], which you can use to
   reactivate RE-VIEW.  NOTE: you should use this feature from DOS, not from
   an application program (for example, you can deactivate RE-VIEW from BASIC,
   but must return to DOS to reactivate it).

   USING RE-VIEW WITH BASIC
   ------------------------
       RE-VIEW's features can be very helpful in BASIC, especially when list-
   ing long programs.  It is also compatible with SofTool Systems' BASIC
   Development System (BDS).  However, you should be aware that many BASIC
   programs will destroy the contents of RE-VIEW's screen buffer when they
   are run.  Most WIDTH and SCREEN commands will clear the buffer, some other
   commands may also.  However, this does not affect RE-VIEW's assistance in
   reviewing listing of large BASIC programs or the output of utilities such
   as SofTool's BDS.

   AUXILIARY PROGRAMS
   -------------------
       Three auxiliary programs are included with RE-VIEW:
            CLA.COM ....... This program provides the DOS command CLA, which
                            operates like DOS 2.0's CLS command, except that
                            all 100 lines of the virtual screen are cleared.
            UP.EXE ........ This program provides the DOS command UP, which
                            scrolls the text above the cursor just off the
                            top of the screen into the 75 line save buffer.
                            (Use it with <Alt>[Scroll Lock] to save text pro-
                            duced by one program for later review by another.)
            ANSIPCH.EXE ... This program patches DOS 2.0's ANSI.SYS program
                            to provide compatibility with RE-VIEW (see below).

   USING RE-VIEW WITH ANSI.SYS
   ---------------------------
       If you are using the DOS 2.0 ANSI.SYS device driver, you will need to
   patch it for compatibility with RE-VIEW.  The original ANSI.SYS does not
   use the standard ROM routines for scrolling.  Therefore, RE-VIEW will be
   ineffective on systems using the original ANSI.SYS driver.  The program,
   ANSIPCH.EXE, creates a patched version of ANSI.SYS which is compatible
   with RE-VIEW and provides all the features of the original ANSI.SYS.
       You can patch ANSI.SYS as follows:
                1 ... Make sure the disk you are using has a copy of the
                      files "ANSI.SYS" and "ANSIPCH.EXE".
                2 ... Type ANSIPCH and press return.  In a few seconds, you
                      should see the message -
                      "*** Patch complete. Patched version = ANSIR.SYS ***".
                3 ... Edit your CONFIG.SYS file, changing the line -
                      "DEVICE = ANSI.SYS" to
                      "DEVICE = ANSIR.SYS".
                4 ... Re-boot your system to install the patched version of
                      ANSI.SYS.  Now install RE-VIEW by typing RE-VIEW and
                      pressing return; everything should work properly now.
                Note: ANSIPCH.EXE presumes the original version of ANSI.SYS
                      (dated 03/08/83) is on the default disk drive.  If it
                      is not found, ANSIPCH will abort after displaying the
                      message -
                      "* Cannot open ANSI.SYS *".
                      If ANSI.SYS is found, but does not compare with the
                      original version, ANSIPCH will abort after displaying
                      the message -
                      "* Unfamiliar version of ANSI.SYS, patching aborted. *"

   CREDITS
   -------
       IBM is a registered trademark of International Business Machines Corp.
       COMPAQ is a trademark of COMPAQ Computer Corporation.
       BASIC Development System (BDS), copyright (C) SofTool Systems 1982.
```
{% endraw %}

## RMSPC.ASM

{% raw %}
```
         .XLIST
         PAGE  80,132             ; SET PAGE SIZE
         TITLE RMS_PC -4 RECOVERY MANAGEMENT SUPPORT FOR IBM/PC5
         SUBTTL 4PARITY CHECK INTERRUPT HANDLER5
         .LIST
         PAGE
         NAME  RMS_PC             ; PROGRAM NAME
         COMMENT *

         RMS_PC VERSION 1.00  [BETA TEST VERSION]

         THIS PROGRAM IS DESIGNED TO TRY AND PERFORM SOME ANALYSIS
         WHEN A PARITY ERROR OCCOURS. IN THIS VERSION [1.00] NOT
         MUCH RECOVERY IS BEING DONE, BUT WE WILL TRY TO AT LEAST
         TELL THE OPERATOR IF THE ERROR WAS IN THE CHANNEL RAM
         [EXPANSION BOARDS] OR PLANAR RAM [MOTHER BOARD] AND GIVE
         HIM THE OPTION TO CONTINUE OR IPL [BOOT]. IF THE OPERATOR
         ELECTS TO IPL, A SOFT POWER ON RESET IS DONE SO MEMORY
         WILL BE CLEANED UP. A POWER OFF/ON IS NOT REQUIRED.

         WHEN WE ISSUE THE MESSAGES, WE DON'T KNOW IF THE DISPLAY
         IS IN GRAPHICS MODE, 80 CHARACTER MODE, OR 40 CHARACTER
         MODE. WE WILL PUT THE MONITOR IN 80 CHAR MODE FOR SAFETY
         AND WRITE TO THE DISPLAY.

         THIS IS A BETA TEST VERSION ! I'M SURE THERE ARE BUGS
         AND BETTER WAYS TO DO THINGS. PLEASE GIVE ME SOME
         FEED BACK IF YOU FIND A PROBLEM OR HAVE A SUGGESTION.

         IF I CAN, I WILL SUPPLY FIXES TO THOSE WHO FIND PROBLEMS
         AND MAKE SUGGESTIONS. NO WARRANTY - JUST MY BEST EFFORTS !

         I HOPE YOU WILL FIND THIS USEFUL AND CONTRIBUTE.

         FUTURE PLANS ARE TO DISPLAY ALL THE REGS WHEN THE PARITY
         CHECK OCCURS, OPTIONAL DIAGNOSTICS WHEN THE ERROR OCCURS
         TO LOCATE THE FAILING 16K OR 64K BLOCK, AND MORE.

         ASSEMBLE AND MAKE INTO A .COM FILE

         COPYRIGHT (C) 1984 Don Gentry

         A limited license is granted to all users of this program,
         to make copies of this program, and distribute them to
         other users, on the following conditions:

         1. The notice on this page is not to be removed or altered

         2. No fee is to be charged for copying or distributing
            the program.

         3. This program is not to be used for any commercial
            purpose without express written permission from
            the author.

         3. No warranty of any kind is offered. This program is
            offered on an "AS IS" basis. Each user should verify
            that it meets his needs and verify correct operation
            in his environment.

         FOR HELP OR SUGGESTIONS WRITE:

         DON GENTRY
         209 REDBUD TRAIL
         BRANDON, MS  39042

         OR CALL (601) 992-2250 [6PM-11PM CST]

         COMPUSERVE ID 74166,1704

         ANYONE FINDING ERRORS IS REQUESTED TO CONTACT ME. WHILE
         THERE IS NO GUARANTEE THAT ANY BUGS WILL BE FIXED, I
         WILL GIVE ANY ASSISTANCE I CAN.

                                                                *
         PAGE
         COMMENT *
         PROGRAM LOGIC SUMMARY

         WHEN THIS PROGRAM IS INVOKED, USUALLY FROM AN AUTOEXEC
         FILE WHEN YOU IPL, A PORTION IS MADE RESIDENT AND
         INTERCEPTS INTERRUPT 2, THE NON-MASKABLE PARITY CHECK
         INTERRUPT. WHEN AN INTERRUPT OCCURS THE INTERRUPT
         HANDLER (STARTING AT RUPT_GO) GETS CONTROL AND TELLS YOU
         IF THE PARITY CHECK WAS ON THE MOTHER BOARD OR EXPANSION
         RAM. YOU MAY THEN CONTINUE OPERATION OR RE IPL WITH OUT
         A POWER OFF/ON (THE EFFECT IS THE SAME AS IF YOU DID).
         TO SOFT RESET WE JUMP TO FFFF:0 IN THE ROM WHICH BEGINS
         THE POWER ON DIAGNOSTICS. IF YOU CONTINUE OPERATION YOU
         MAY DISALLOW FUTURE PARITY CHECK INTERRUPTS (NOTE: YOU
         MAY DISALLOW FUTURE INTERRUPTS BUT THE DATA WILL STILL
         BE OUT OF PARITY AND INVALID !).

         I WROTE THIS BECAUSE I WAS DOWN LOADING A LARGE FILE
         FROM A HOST COMPUTER (AMDAHL V8) AND WAS 30 MINUTES INTO
         A 40 MINUTE DOWN LOAD. I WALKED ACROSS THE CARPET TO GET
         A COLORADO KOOL AID AND RETURNED TO THE MONITOR. WHEN I
         TOUCHED THE KEYBOARD, STATIC CAUSED A PARITY CHECK. IBM'S
         ROM (IN ALL ITS WISDOM) SAID "PARITY 2" AND DID A HALT.
         I THEN HAD TO POWER OFF/ON TO CONTINUE. I LOST ALL 30
         MINUTES WORK. I'D RATHER CONTINUE AND SEE IF I COULD
         RECOVER. ANYWAY NEXT TIME I'LL TRY THIS AND SEE.
                                                         *
         PAGE
;***********************************************************************
;* * *                                                             * * *
;* * *   DEFINE MACROS FOR EASE OF CODING & CLARITY                * * *
;* * *                                                             * * *
;***********************************************************************
;
PUSHA    MACRO                    ; SAVE REGISTERS
         PUSH  BP                 ; SAVE BP
         PUSH  AX                 ; SAVE AX
         PUSH  CX                 ; SAVE CX
         PUSH  DX                 ; SAVE DX
         PUSH  BX                 ; SAVE BX
         PUSH  SI                 ; SAVE SI
         PUSH  DI                 ; SAVE DI
         PUSH  DS                 ; SAVE DS
         PUSH  ES                 ; SAVE ES
         ENDM                     ; END OF MACRO DEFINITION
;
POPA     MACRO                    ; RESTORE REGISTERS
         POP   ES                 ; RESTORE ES
         POP   DS                 ; RESTORE DS
         POP   DI                 ; RESTORE DI
         POP   SI                 ; RESTORE SI
         POP   BX                 ; RESTORE BX
         POP   DX                 ; RESTORE DX
         POP   CX                 ; RESTORE CX
         POP   AX                 ; RESTORE AX
         POP   BP                 ; RESTORE BP
         ENDM                     ; END OF MACRO DEFINITION
;
WTO      MACRO MSG
;*       WRITE MESSAGE ON SCREEN TO OPERATOR
         MOV   AH,09H             ; SET DOS FUNCTION CODE
         LEA   DX,MSG             ; GET @ OF MESSAGE
         INT   21H                ; ISSUE DOS SUPERVISOR CALL
         ENDM
         PAGE
;
;***********************************************************************
;* * *                                                             * * *
;* * *   DEFINE EQUATES FOR EASE OF CODING & CLARITY               * * *
;* * *                                                             * * *
;***********************************************************************
;
; -----  PORT ADDRESSES FROM I/O ADDRESS MAP, SEE TECH REF
;
PORT_PA0 EQU   060H               ; PORT 60H
PORT_PB0 EQU   061H               ; PORT 61H
PORT_PC0 EQU   062H               ; PORT 62H
;
PORT_NMI EQU   0A0H               ; NMI PORT A0H
NMI_OFF  EQU   080H               ; MASK OFF NMI RUPTS
NMI_ON   EQU   000H               ; NMI RUPTS ON
;
IOM_CHEK EQU   040H               ; I/O CHANNEL CHECK
RAM_CHEK EQU   080H               ; PLANAR RAM CHECK
;
LF       EQU   00AH               ; LINE FEED
CR       EQU   00DH               ; CARRIAGE RETURN
EOM      EQU   '$'                ; END OF MESSAGE
;
MAKE_CAP EQU   11011111B          ; AND TO CAPS
;
; -----  VIDEO DISPLAY MODE EQUATES
;
; -----  TEXT MODES
;
M_4025BW EQU   0                  ; 40 x 25 BW
M_4025CO EQU   1                  ; 40 X 25 COLOR
M_8025BW EQU   2                  ; 80 X 25 BW
M_8025CO EQU   3                  ; 80 X 25 COLOR
;
; -----  GRAPHICS MODES
;
M_320CO  EQU   4                  ; 320 X 200 COLOR
M_320BW  EQU   5                  ; 320 X 200 BW
M_640    EQU   6                  ; 640 X 200 BW
;***********************************************************************
;* * *                                                             * * *
;* * *   DEFINE LOW STORAGE INTERRUPT VECTOR TABLE                 * * *
;* * *                                                             * * *
;***********************************************************************
;
ABS0     SEGMENT AT 00H           ; DEFINE A SEGMENT
DIVIDE_0 DD    ?                  ; DIVIDE BY ZERO RUPT
ONE_STEP DD    ?                  ; SINGLE STEP RUPT
NMI_RUPT DD    ?                  ; NON-MASKABLE RUPT
BREAK_PT DD    ?                  ; BREAK POINT RUPT
OVR_FLOW DD    ?                  ; OVERFLOW RUPT
PRT_SCRN DD    ?                  ; PRINT SCREEN RUPT
         DD    ?                  ; ...RESERVED RUPT
         DD    ?                  ; ...RESERVED RUPT
TOD_RUPT DD    ?                  ; TIME OF DAY RUPT
KEYBOARD DD    ?                  ; KEYBOARD RUPT
         DD    ?                  ; ...RESERVED RUPT
COMM_1   DD    ?                  ; COMMUNICATIONS RUPT 1
COMM_2   DD    ?                  ; COMMUNICATIONS RUPT 2
DISK_INT DD    ?                  ; DISK INTERRUPT
ABS0     ENDS
;***********************************************************************
;* * *                                                             * * *
;* * *   DEFINE LOW STORAGE BIOS DATA AREAS                        * * *
;* * *                                                             * * *
;***********************************************************************
;
DATA     SEGMENT AT 40H           ; DEFINE A SEGMENT
;-----------------------------------------------------------------------
; ROM BIOS DATA AREAS
;-----------------------------------------------------------------------
RS232_BASE       DW 4 DUP(?)      ; ADDRESSES OF RS232 ADAPTERS
PRINTER_BASE     DW 4 DUP(?)      ; ADDRESSES OF PRINTERS
EQUIP_FLAG       DW ?             ; INSTALLED HARDWARE
MFG_TST          DB ?             ; INITIALIZATION FLAG
MEMORY_SIZE      DW ?             ; MEMORY SIZE IN K BYTES
IO_RAM_SIZE      DW ?             ; MEMORY IN IO CHANNEL
;-----------------------------------------------------------------------
; KEYBOARD DATA AREAS
;-----------------------------------------------------------------------
KB_FLAG          DB ?
;
; ----- SHIFT FLAG EQUATES WITHIN KB_FLAG
;
INS_STATE        EQU 80H          ; INSERT SATE IS ACTIVE
CAPS_STATE       EQU 40H          ; CAPS LOCK STATE HAS BEEN TOGGLED
NUM_STATE        EQU 20H          ; NUM LOCK STATE HAS BEEN TOGGLED
SCROLL_STATE     EQU 10H          ; SCROLL LOCK STATE HAS BEEN TOGGLED
ALT_SHIFT        EQU 08H          ; ALTERNATE SHIFT KEY DEPRESSED
                 ORG 0049H        ; ORG TO START OF DISPLAY DATA
;-----------------------------------------------------------------------
; VIDEO DISPLAY DATA AREA
;-----------------------------------------------------------------------
CRT_MODE         DB  ?            ; CURRENT CRT MODE
CRT_COLS         DW  ?            ; NUMBER OF COLS ON SCREEN
CRT_LEN          DW  ?            ; LENGTH OF REGEN IN BYTES
CRT_START        DW  ?            ; STARTING ADDRESS IN REGEN BUFFER
CURSOR_POSN      DW  8 DUP(?)     ; CURSOR FOR EACH OF UP TO 8 PAGES
CURSOR_MODE      DW  ?            ; CURRENT CURSOR MODE SETTING
ACTIVE_PAGE      DW  ?            ; CURRENT PAGE BEING DISPLAYED
ADDR_6845        DW  ?            ; BASE ADDRESS FOR ACTIVE DISPLAY CARD
CRT_MODE_SET     DB  ?            ; CURRENT SETTING OF THE 3X8 REGISTER
CRT_PALETTE      DB  ?            ; CURRENT PALETTE SETTING COLOR CARD
CRTDATAL         EQU $-OFFSET CRT_MODE ; LENGTH OF CRT AREA
DATA     ENDS                     ; END OF SEGMENT
         PAGE
;
CODE_SEG SEGMENT PARA PUBLIC 'CODE' ; IDENTIFY THIS SEGMENT
         ASSUME CS:CODE_SEG,DS:NOTHING,ES:NOTHING
RMS_PC   PROC  FAR                ; IDENTIFY PROCEDURE
         ORG   100H               ; SKIP PROGRAM PREFIX
INIT_NTRY:                        ; INITIALIZATION ENTRY POINT
         JMP   INIT_001           ; GO TO INITIALIZATION CODE
;***********************************************************************
;* * *                                                             * * *
;* * *        NON_MASKABLE INTERRUPT ENTRY POINT                   * * *
;* * *                                                             * * *
;***********************************************************************
;
RUPT_NTRY:                        ; INTERRUPT ENTRY POINT
         JMP   RUPT_GO            ; GO HANDLE RUPT
         DB    6                  ; LENGTH OF ID
         DB    'RMS_PC '          ; PROGRAM ID
         DB    '(C) COPYRIGHT 1984 DON GENTRY'
CHK_SAVE DB    0                  ; SAVE CHECK TYPE
SAVE_CRT DB    CRTDATAL DUP (0)   ; SAVE AREA FOR CRT MODE ON ENTRY
SAV_MODE EQU   OFFSET CRT_MODE-0  ; OFFSET OF SAVED MODE
SAV_PAGE EQU   OFFSET ACTIVE_PAGE-OFFSET CRT_MODE
         EVEN                     ; GET TO WORD BOUNDARY
NUM_RUPT DW    0                  ; NUMBER OF RUPTS
NUM_CHEK DW    0                  ; NUMBER OF CHECKS
;
SAVE_SS  DW    0                  ; SAVE STACK SEG
SAVE_SP  DW    0                  ; SAVE STAK POINTER
         EVEN                     ; STACK ON WORD BOUNDARY
         DW    80 DUP(88H)        ; DEFINE LOCAL STACK
LOCLSTAK:                         ; DEFINE LOCAL STACK
;
; -----  MESSAGE TEXT AREA
;
FATALMSG DB    LF,CR              ; FATAL ERROR MESSAGE
         DB    ' *** UNRECOVERABLE PARITY ERROR ***'
         DB    LF,LF,CR
         DB    ' UNKNOWN SYSTEM DAMAGE - IPL REQD'
         DB    LF,CR
         DB    ' PLACE SYSTEM DISK IN DRIVE A: AND'
         DB    LF,CR
         DB    ' PRESS A KEY TO RESTART [IPL] SYSTEM'
         DB    EOM
;
IORAM_MS DB    LF,CR              ; ERROR IN CHANNEL RAM MESSAGE
         DB    '*** PARITY CHECK IN I/O CHANNEL RAM ***'
         DB    LF,LF,CR
         DB    'DO YOU WANT TO CONTINUE SYSTEM OPERATION ?'
         DB    LF,LF
Y_OR_N   DB    CR,CR
         DB    'ENTER Y/N :'
         DB    EOM
;
MBRAM_MS DB    LF,CR              ; ERROR IN PLANAR RAM MESSAGE
         DB    '*** PARITY CHECK IN PLANAR RAM ***'
         DB    LF,LF,CR
         DB    'DO YOU WISH TO CONTINUE SYSTEM OPERATION ?'
         DB    LF,LF,CR
         DB    'ENTER Y/N :'
         DB    EOM
;
RUPT_MSG DB    LF,CR
         DB    'DO YOU WISH TO DISABLE PARITY CHECKS ? (Y/N) '
         DB    EOM
;***********************************************************************
;* * *                                                             * * *
;* * *        INTERRUPT HANDLER CODE                               * * *
;* * *                                                             * * *
;***********************************************************************
;
RUPT_GO:                          ; HANDLE RUPT
         CLI                      ; INSURE RUPTS OFF
         PUSH  AX                 ; SAVE AX REGISTER
         MOV   AL,NMI_OFF         ; GET NMI OFF MASK IN AL
         OUT   PORT_NMI,AL        ; MASK NMI RUPTS
;
; -----  GET OUR OWN LOCAL STACK
;
         MOV   SAVE_SS,SS         ; SAVE THE STACK SEGMRNT
         MOV   SAVE_SP,SP         ; SAVE THE STACK POINTER
         MOV   AX,CS              ; GET CODE SEG ADDRESS
         MOV   SS,AX              ; PUT IN STACK SEG
         LEA   SP,LOCLSTAK        ; GET OFFSET OF STACK
         PUSHA                    ; SAVE THE REGS
;
; -----  SET UP DS,ES REGISTERS
;
         MOV   AX,CS              ; CS VALUE TO AX
         MOV   DS,AX              ; CS VALUE TO DS
         MOV   ES,AX              ; CS VALUE TO ES
;
         ASSUME CS:CODE_SEG,DS:CODE_SEG,ES:CODE_SEG
;
         INC   NUM_RUPT           ; ADD ONE TO NUMBER OF RUPTS
;
; -----  FIND IF WE HAVE HAD A PARITY CHECK
;
         IN    AL,PORT_PC0        ; READ PORT 62H
         MOV   CHK_SAVE,AL        ; SAVE THE CHECK TYPE
         TEST  AL,IOM_CHEK+RAM_CHEK ; GET A PARITY ERROR ?
         JNZ   HNDL_PC            ; ...YES - HANDLE A PC
         MOV   AL,NMI_ON          ; ENABLE FOR PARITY CHECKS
         OUT   PORT_NMI,AL        ; NMI RUPTS BACK ON
         JMP   EXIT_002           ; ...NO - EXIT THIS ROUTINE
HNDL_PC:
         INC   NUM_CHEK           ; INCREMENT NUMBER OF CHECKS
;
; -----  IF WE'VE HAD AN ERROR, TRY & SET VIDEO GRAPHICS BOARD
; -----  TO PRESERVE AS MUCH OF THE CURRENT ENVIRONMENT AS WE
; -----  CAN AND STILL COMMUNICATE WITH THE OPERATOR
;
; -----  FIRST LET'S SAVE THE CURRENT ENVIRONMENT
;
         PUSH  CS                 ; CS TO STACK
         POP   ES                 ; ES OFF THE STACK
         MOV   AX,0040H           ; DATA SEGMENT BASE ADDRESS
         MOV   DS,AX              ; TO SEG REG
         ASSUME DS:DATA,ES:CODE_SEG ; TELL THE ASSEMBLER
         MOV   CX,CRTDATAL        ; GET LENGTH OF MOVE
         LEA   SI,CRT_MODE        ; GET @ SOURCE DATA
         LEA   DI,SAVE_CRT        ; GET WHERE TO SAVE IT
    REP  MOVSB                    ; MOVE IT NOW
;
; -----  NOW LET'S ANALYZE THE CURRENT MODE
;
         PUSH  CS                 ; CS TO STACK
         PUSH  CS                 ; CS TO STACK
         POP   ES                 ; CS TO ES
         POP   DS                 ; CS TO DS
         ASSUME DS:CODE_SEG,ES:CODE_SEG ; TELL ASSEMBLER
         CMP   BYTE PTR SAVE_CRT+17,M_320CO   ; GRAPH MODE
         JL    NOT_GRPH           ; ...NO - CONTINUE
;
; -----  IF WE ARE IN GRAPHICS MODE, I'M GOING TO CHANGE US TO
; -----  TEXT MODE USING PAGE 3. THIS MAY DESTROY WHAT THE USER
; -----  WAS DOING, BUT HE WAS GOING TO DIE ANY WAY.
;
         MOV   AX,0002            ; SET MODE TO 80 X 25 BW
         INT   10                 ; CALL BIOS
         MOV   AX,0503            ; SELECT PAGE 3
         INT   10                 ; CALL BIOS
         JMP   CHEK_TYP           ; GO SEE WHERE THE CHEK WAS
NOT_GRPH:
;
; -----  IF IN TEXT MODE, FIND OUT WHAT PAGE IS USE & SELECT ANOTHER
;
         MOV   AX,0002            ; LET'S SET MODE TO 80 X 25 BW
         INT   10H                ; BIOS CALL
         MOV   AX,0003            ; SET OUR DEFAULT PAGE
         CMP   WORD PTR SAVE_CRT+SAV_PAGE,03 ; IS PAGE 3 IN USE ?
         JNE   SET_PAGE           ; ...NO - USE THE DEFAULT
         MOV   AL,02              ; ...YES - USE PAGE 2
SET_PAGE:                         ; SET ACTIVE PAGE
         MOV   AH,05              ; SET PAGE FUNCTION
         INT   10H                ; BIOS CALL
;
; -----  FIND OUT WHAT KIND OF PARITY CHECK
;
CHEK_TYP:
         MOV   AL,CHK_SAVE        ; GET THE CHECK CODE
         TEST  AL,RAM_CHEK        ; ON PLANAR RAM ?
         JNZ   MB_CHECK           ; ...YES - GO TO MOTHER BOARD RTN
         TEST  AL,IOM_CHEK        ; IN I/O CHANNEL ?
         JNZ   IO_CHECK           ; ...YES GO HANDLE IO CHECK
;
; -----  IF WE GET HERE, I DON'T KNOW HOW TO HANDLE THE ERROR
;        SO, I'LL INFORM THE OPERATOR & TELL HIM WE ARE IPL'ING
;
         STI                      ; RUPTS BACK ON
;
         WTO   FATALMSG           ; WRITE FATAL ERROR MESSAGE
;
         MOV   AX,0700H           ; WAIT ON CONSOLE I/O
         INT   21H                ; DOS CALL RUPT
;
         JMP   RS_SYS             ; JUMP TO BIOS RESET
;***********************************************************************
;* * *                                                             * * *
;* * *        BRANCH HERE FOR I/O CHANNEL PARITY CHECK             * * *
;* * *                                                             * * *
;***********************************************************************
;
IO_CHECK:                         ; PARITY CHECK IN I/O CHANNEL RAM
         WTO   IORAM_MS           ; WRITE I/O RAM MESSAGE
         JMP   ANS_RTRY           ; GO TRY RECOVERY OPTIONS
;
;***********************************************************************
;* * *                                                             * * *
;* * *        BRANCH HERE FOR PLANAR RAM PARITY CHECK              * * *
;* * *                                                             * * *
;***********************************************************************
;
MB_CHECK:                         ; PARITY CHECK IN PLANAR RAM
         WTO   MBRAM_MS           ; WRITE I/O RAM MESSAGE
;
ANS_RTRY:
         MOV   AX,0C01H           ; CLEAR BUFR & READ KYBD
         STI                      ; RUPTS ON
         INT   21H                ; RUPT TO DOS
         CLI                      ; RUPTS BACK OFF
;
         AND   AL,MAKE_CAP        ; ALLOW FOR LC/CAPS
         CMP   AL,'Y'             ; ANSWER YES ?
         JNE   TRY_NO             ; ...YES - GO TO RUPT EXIT
         JMP   INT_EXIT           ; ...YES - GO TO RUPT END
TRY_NO:
         CMP   AL,'N'             ; ANSWER NO ?
         JE    RS_SYS             ; ...YES - RESET SYSTEM
         WTO   Y_OR_N             ; YES OR NO DUMMY !!!!
         JMP   ANS_RTRY           ; TRY FOR ANSWER AGAIN
;***********************************************************************
;* * *                                                             * * *
;* * *        BRANCH HERE TO RESET THE SYSTEM & IPL                * * *
;* * *                                                             * * *
;***********************************************************************
;
RS_SYS:
         MOV   AL,NMI_ON          ; ENABLE FOR PARITY CHECKS
         OUT   PORT_NMI,AL        ; NMI RUPTS BACK ON
         STI                      ; RUPTS BACK ON
         JMP   CS:RESET_AD        ; SIMULATE POWER ON RESET
RESET_AD DD    0                  ; POWER ON RESET ADDRESS
         ORG   $-4                ; REDEFINE ADDRESS
POWER_IP DW    0000H              ; INSTRUCTION POINTER
POWER_SG DW    0FFFFH             ; SEGMENT POINTER
;
;***********************************************************************
;* * *                                                             * * *
;* * *        BRANCH HERE TO EXIT & CONTINUE OPERATION             * * *
;* * *                                                             * * *
;***********************************************************************
;
INT_EXIT:
         WTO   RUPT_MSG           ; WRITE ENABLE RUPTS MSG
;
RUPT_001:                         ; OPERATOR RESPONSE LOOP
         MOV   AX,0C01H           ; CLEAR BUFR & READ KYBD
         STI                      ; RUPTS ON
         INT   21H                ; RUPT TO DOS
         CLI                      ; RUPTS BACK OFF
;
         AND   AL,MAKE_CAP        ; UC/LC
         CMP   AL,'Y'             ; ANSWER YES ?
         JE    NO_RUPTS           ; ...YES - EXIT DISABLED FOR PC
         CMP   AL,'N'             ; ANSWER NO ?
         JE    YES_RUPT           ; ...YES - ENABLE PC
         WTO   Y_OR_N             ; YES OR NO DUMMY !!!!
         JMP   RUPT_001           ; TRY FOR ANSWER AGAIN
;
; -----  CLEAN UP THE STACK
;
;
YES_RUPT:                         ; ALLOW PARITY CHECKS
         MOV   AL,NMI_ON          ; ENABLE FOR PARITY CHECKS
         OUT   PORT_NMI,AL        ; NMI RUPTS BACK ON
NO_RUPTS:                         ; COME HERE TO EXIT DISABLED
;
; -----  NOW LET'S TRY AND GET HIS CRT BACK
;
         LEA   DI,SAVE_CRT        ; ADDRESS OF PARMS
         MOV   AH,00              ; FUNCTION = SET MODE
         MOV   AL,BYTE PTR [DI]   ; GET OLD MODE
         INT   10H                ; BIOS CALL
         MOV   AH,05              ; FUNCTION = SET PAGE
         ADD   DI,SAV_PAGE        ; GET ACTIVE PAGE ADDRESS
         MOV   AL,BYTE PTR [DI]   ; GET ACTIVE PAGE
         INT   10H                ; BIOS CALL
;
; -----  I HOPE THIS IS ENOUGH TO KEEP RUNNING, I'LL PRETTY IT
; -----  UP AND ADD FUNCTION LATER
;
; -----  FOR NOW, LETS GET THE HECK OUT
;
EXIT_002:
         CLI                      ; INSURE RUPTS OFF
         POPA                     ; RESTORE THE REGS
         ASSUME DS:NOTHING,ES:NOTHING ; RESET OBSOLETE ASSUMPTIONS
         MOV   AX,SAVE_SS         ; GET OLD STACK SEG
         MOV   SS,AX              ; BACK TO STACK SEG
         MOV   SP,SAVE_SP         ; STACK POINTER
         STI                      ; RUPTS BACK ON
         POP   AX                 ; RESTORE AX REG
         IRET                     ; INTERRUPT RETURN
         DW    0FFFFH             ; END OF INTERRUPT HANDLER
RUPT_END EQU   $                  ; END OF RESIDENT CODE
;***********************************************************************
;* * *                                                             * * *
;* * *        BRANCH HERE TO INITIALIZE INTERRUPT HANDLER          * * *
;* * *                                                             * * *
;***********************************************************************
;
         ASSUME CS:CODE_SEG,DS:CODE_SEG,ES:CODE_SEG
INIT_001:                         ; INITIALIZATION ENTRY
         WTO   I_MSG01            ; WRITE INITIALIZATION MESSAGE
;
         PUSH  CS                 ; GET CODE SEG ON STACK
         POP   DS                 ; & POP INTO DS
         LEA   DX,RUPT_NTRY       ; GET @ RUPT ENTRY POINT
         MOV   AL,02              ; SET RUPT TYPE
         MOV   AH,25H             ; DOS SET RUPT VECTOR FUNCTION
         INT   21H                ; RUPT TO DOS
;
         WTO   I_MSG02            ; WRITE INITIALIZATION MESSAGE
         LEA   DX,RUPT_END        ; GET @END OF RUPT CODE
         INT   27H                ; TERMINATE/STAY RESIDENT
;***********************************************************************
;* * *                                                             * * *
;* * *        INITIALIZATION MESSAGES                              * * *
;* * *                                                             * * *
;***********************************************************************
;
I_MSG01  DB    LF,LF,LF,LF,CR     ; INITIALIZATION MESSAGE 01
         DB    ' **************************************************'
         DB    LF,CR
         DB    ' * * *  RMS_PC - RECOVERY MANAGEMENT SUPPORT  * * *'
         DB    LF,CR
         DB    ' * * *    PARITY CHECK RECOVERY FOR IBM/PC    * * *'
         DB    LF,CR
         DB    ' * * *    VERSION 1 MODIFICATION LEVEL 00     * * *'
         DB    LF,CR
         DB    ' * * *             [ BETA TEST ]              * * *'
         DB    LF,CR
         DB    ' * * *     (C) COPYRIGHT 1984 DON GENTRY      * * *'
         DB    LF,CR
         DB    ' **************************************************'
         DB    EOM
;
I_MSG02  DB    LF,CR
         DB    ' * * *          RMS_PC NOW RESIDENT           * * *'
         DB    LF,CR
         DB    ' **************************************************'
         DB    EOM
;
RMS_PC   ENDP                     ; END OF PROCEDURE
         CODE_SEG ENDS            ; END OF SEGMENT
         END   INIT_NTRY
```
{% endraw %}

## SETPRN.ASM

{% raw %}
```

  COMMENT^ ** SETPRN.COM ** Last Rev. 12/11/83 ** Vincent T. Bly **
 -------------------------------------------------------------------
|                                                                   |
| PURPOSE:  Provide a easy method of setting printer parameters     |
|           from the DOS command level or from a batch file.	    |
|                                                                   |
| FUNCTION: Send a user specified text string to the printer.       |
|           The string may contain control characters consisting    |
|           of decimal numbers enclosed in brackets ("[" and "]").  |
|	    The normal ending carriage return/line feed may be	    |
|	    suppressed by a trailing semicolon (";") or comma (",") |
| 	    in the same manner as the BASIC LPRINT command.	    |
|								    |
| TO USE:   From DOS, type SETPRN followed by a space and the text  |
|           string, then press <enter>.  For examples, see the file |
|	    SETPRN.DOC						    |
|                                                                   |
 -------------------------------------------------------------------^

CSEG		SEGMENT
		ASSUME	CS:CSEG,DS:CSEG

		ORG	80H ;----------- in Program Segment Prefix
NUM_CHARS	LABEL	BYTE		;number of characters in argument
		ORG	82H
ARGTX		LABEL	BYTE		;start of text (after leading blank)

		ORG	100H ;---------- start of actual program

;~~ Check argument & set-up to read it ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
START:		MOV	BX,OFFSET ARGTX	;point to start of text argument
		MOV	CL,[NUM_CHARS]	;set CX to number of chars in argument
		MOV	CH,0		;	"
		CMP	CX,2		;is there at least 1 char after blank?
		JB	CR_LF1		;if not, print CR/LF & exit
		SUB	CX,2		;discount char count for leading blank
					;and possible trailing "," or ";"
		CMP	CX,0		;is there only one character?
		JE	TERM		;if so, handle w/termination routine

;~~~ Parse argument & convert control codes ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
CHAR_2_PRN:	MOV	DL,[BX]		;get character
		CMP	DL,'['		;is it the control prefix char?
		JNE	SEND_IT		;if not, go print char
		MOV	AL,0		;initialize char value to 0
		MOV	DH,10D		;digit multiplier
CONVERT_DIGIT:	INC	BX		;skip to next char
		DEC	CX		;	"
		MOV	DL,[BX]		;get char code into DL
		JZ	EXIT2		;exit if at end of text (CX = 0)
		CMP	DL,']'		;is it the control code suffix?
		JE	PRE_SEND_IT	;if so, go prepare to print code
		SUB	DL,'0'		;convert digit code to value
		MUL	DH		;mult. char value (in AL) by 10
		ADD	AL,DL		;add digit value to char value
		JMP	CONVERT_DIGIT	;loop back to convert next digit
PRE_SEND_IT:	MOV	DL,AL		;put converted code into DL

;~~~ Send character to printer & loop back for next ~~~~~~~~~~~~~~~~~~~~~~~~~
SEND_IT:	CALL	PRNT_CHR	;go print character in DL
		INC	BX		;point to next character
		LOOP	CHAR_2_PRN	;repeat until done
		
;~~~ Handle termination with ";" or "," ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
TERM:		MOV	DL,[BX]		;get last character
		CMP	DL,';'		;is it a semicolon?
		JE	COMPLETE	;if so, skip to completion routine
		CMP	DL,','		;is it a comma?
		JNE	CR_LF		;if not, go print CR & LF
		MOV	DL,09		;set DL to tab character
		CALL	PRNT_CHR	;go print tab
		JMP	COMPLETE	;skip to completion routine
CR_LF:		CALL	PRNT_CHR	;go print last character
CR_LF1:		MOV	DL,0DH		;set DL to carriage return
		CALL	PRNT_CHR	;go print CR
		MOV	DL,0AH		;set DL to line feed
		CALL 	PRNT_CHR	;go print LF

;~~~ Display termination message & return to DOS ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
COMPLETE:	MOV	DX,OFFSET MESSAGE ;point to completion message
		MOV	AH,9		;code for DOS display string function
		INT	21H		;display message via DOS function call
EXIT1:		INT	20H		;terminate via DOS function call
MESSAGE:	DB	'* Done *$'

;~~~ Send one character to printer via DOS function call ~~~~~~~~~~~~~~~~~~~~~
PRNT_CHR:	MOV	AH,5		;code for DOS printer output function
		INT	21H		;send to printer via DOS function call
		RET			;back to calling routine

;~~~ Handle case where end of text encountered while parsing control code ~~~~
EXIT2:		CMP	DL,']'		;is it the control code suffix?
		JNE	TERM		;if not, go do normal completion
					;(w/o printing control code)
		MOV	DL,AL		;put control code in DL
		CALL	PRNT_CHR	;go print control code
		JMP	CR_LF		;go print CR & LF & complete
		
CSEG		ENDS
		
		END	START
```
{% endraw %}

## SETPRN.DOC

{% raw %}
```

 ---------------------------------------------------------------------------- 
| * SETPRN *  A printer utility for the IBM PC & PC-XT.  V. T. Bly  12/11/83 |
 ----------------------------------------------------------------------------

SUMMARY
-------
      SETPRN provides an easy method of setting printer parameters from the
  DOS command level or a batch file.  SETPRN is similar to the BASIC LPRINT
  command, except that control codes are enclosed in square brackets ("[]")
  instead of the "CHR$()" used in BASIC.  Also, text strings should not be
  enclosed in quotes.  Like LPRINT, the normal carriage return/line feed can
  be suppressed by a trailing semicolon (";") or comma (",").  A trailing
  semicolon will leave the print head at the end of the just printed text,
  while a comma will advance the print head to the next tab stop.


EXAMPLES
--------
      The following examples assume that the file SETPRN.COM is on the
  default disk drive.  Note that "<enter>" means that you should press
  the enter/return key after typing the command. 
 
 SETPRN Testing 0123456789 <enter>
	This command will simply print the string "Testing 0123456789" on
	the printer and drop down to the next line.
 
 SETPRN Merry Christmas; <enter>
	This command will print the string "Merry Christmas" on the printer,
	but NOT drop down to the next line.  Notice the trailing ";" which
	suppresses the carriage return/line feed.  On some printers, "Merry
	Christmas" may not actually be printed until an output is sent to
	the printer which contains a carriage return.
 
 SETPRN [27]E; <enter>
	This command will send Escape E to the printer.  This sequence turns
	on emphasized printing on the IBM and Epson dot matrix printers.
 
 SETPRN [27]!Boldface Title[27]" <enter>
	This command will print the string "Boldface Title" in boldface on
	the C. Itoh and NEC dot matrix printers and drop down to the next
	line.  With these printers, Escape ! starts boldface printing and
	Escape " stops boldface printing.  Note that the quote symbol (") may
	be included in the SETPRN command line, just like any other character.


NOTES
-----
      Any printable character may be included in the SETPRN command line
  except the left square bracket ("["), which is used as the prefix to a
  control code.  This character may be included by enclosing its ASCII code
  (91) between square brackets; that is "[91]".

      SETPRN should work correctly on any IBM compatible computer operating
  under MS-DOS.  It should work with any version of MS-DOS, including 1.0,
  1.05, 1.1, 2.0, and 2.1.

      Please send your comments to:  Vincent Bly
				     Post Office Box 409
				     Ft. Belvoir, VA  22060
```
{% endraw %}

## VTYPE.DOC

{% raw %}
```

 ----------------------------------------------------------------------------
| * VTYPE * An improved TYPE command for the IBM PC & PC-XT. V. Bly 12/12/83 |
 ----------------------------------------------------------------------------

SUMMARY
-------
      VTYPE is an improved version of the MS-DOS TYPE command.  It provides
  the new features listed below.
     1 ... The ability to quickly pause the display by pressing a key.
	   The display may be restarted by pressing a key again.
     2 ... The ability to cancel the displayed output at the end of the
	   current line by pressing the [Esc] key.
     3 ... The ability to specify the number of spaces per tab in the
	   displayed output by following the filespec by a number between
	   1 and 20.  If you do not specify a number, the default value
	   of 8 spaces per tab stop will be used.
     4 ... The ability, when using MS-DOS 2.0, of copying a text file
	   containing tabs to a new file with all tabs expanded to spaces.

      The format for the VTYPE command is:
					   VTYPE filespec [tab expansion]

EXAMPLES
--------
      The following examples assume that the file VTYPE.EXE is on the
  default disk drive.  Note that "<enter>" means that you should press
  the enter/return key after typing the command.

  VTYPE MY.TXT <enter>
	This command will simply display the text file "MY.TXT".  You can
	pause the output by pressing a key (such as the <space> bar).  You
	can then restart the display by pressing a key (such as the <space>
	bar) again, or cancel the output by pressing the [Esc] key.

  VTYPE MYPROG.C 4 <enter>
	This command will display the text file "MYPROG.C".  However, any
	tabs in the file will be expanded to 4 spaces per tab stop rather
	than the normal 8 spaces per tab.

  VTYPE MYPROGA.C 6>MYPROGB.C <enter>
	This command will copy the text file "MYPROGA.C" to the new file
	"MYPROGB.C".  Any tabs in the file "MYPROGA.C" will be expanded
	to 6 spaces per tab stop in the new file "MYPROGB.C".  Of course,
	this command can only be used with MS-DOS 2.0 or later, since it
	uses redirection.

NOTES
-----
      When redirecting the output of VTYPE to a disk file under MS-DOS 2.0,
 the End-OF-File termination will be slightly different than normal.  This
 will not usually be a problem; however, some text handling programs, such
 as the VEDIT editor, may display a string of "^@"s at the end of the file.
 If you encounter this, simply delete the string of "^@"s and re-save the
 file.

      Please send your comments to:  Vincent Bly
				     Post Office Box 409
				     Ft. Belvoir, VA  22060
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0138

     Volume in drive A has no label
     Directory of A:\

    ANSIPCH  EXE      6144   3-17-84   1:28a
    BLYPROGS DOC      4224   3-17-84   1:28a
    BRICKS   EXE     18432   3-17-84   1:29a
    C        ASM      3584   3-17-84   1:10a
    CASE     ASM      7936   3-17-84   1:28a
    CASE     COM       256   3-17-84   1:28a
    CLA      COM       128   3-17-84   1:28a
    ENVIRON  DOC      2560   3-17-84   1:11a
    IOS1_20  ASM      7680   3-17-84   1:08a
    LIBRIAN  DOC      1536   3-17-84   1:14a
    LIBRIAN  MRG      1024   3-17-84   1:13a
    NORTPAT2 DOC      1024   3-17-84   1:15a
    RE-VIEW  COM      1280   3-17-84   1:28a
    RE-VIEW  DOC     12160   3-17-84   1:28a
    SETPRN   ASM      4480   3-17-84   1:28a
    SETPRN   COM       256   3-17-84   1:28a
    SETPRN   DOC      2816   3-17-84   1:28a
    UP       COM       128   3-17-84   1:28a
    VECTS    EXE     12288   3-17-84   1:21a
    VTYPE    C        3968   3-17-84   1:28a
    VTYPE    DOC      2688   3-17-84   1:28a
    VTYPE    EXE     11776   3-17-84   1:28a
    _MAIN    C        1536   3-17-84   1:06a
    RMSPC    ASM     26880   2-29-84  12:29a
    RMSPC    COM      1458   3-17-84   1:52a
    READ     ME       1373   3-17-84   2:06a
    CRC      TXT      1781  11-13-84   1:34p
    CRCK4    COM      1536  10-21-82   7:54p
           28 file(s)     140932 bytes
                           15360 bytes free
