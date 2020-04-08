;
;   trace.nasm
;   Copyright © 2012-2018 Jeff Parsons <Jeff@pcjs.org>
;
;   This file is part of PCjs, a computer emulation software project at <https://www.pcjs.org>.
;
;   PCjs is free software: you can redistribute it and/or modify it under the terms of the
;   GNU General Public License as published by the Free Software Foundation, either version 3
;   of the License, or (at your option) any later version.
;
;   PCjs is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without
;   even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
;   GNU General Public License for more details.
;
;   You should have received a copy of the GNU General Public License along with PCjs.  If not,
;   see <http://www.gnu.org/licenses/gpl.html>.
;
;   You are required to include the above copyright notice in every source code file of every
;   copy or modified version of this work, and to display that copyright notice on every screen
;   that loads or runs any version of this software (see Computer.sCopyright).
;
;   Some PCjs files also attempt to load external resource files, such as character-image files,
;   ROM files, and disk image files. Those external resource files are not considered part of the
;   PCjs program for purposes of the GNU General Public License, and the author does not claim
;   any copyright as to their contents.
;
;   Overview
;   --------
;   Takes an instruction log, as recorded by the Debugger's traceLog() function, and
;   "plays" the instructions back on another machine DOS-compatible 8086 machine, verifying that:
;
;	1) results match the recorded results
;	2) any "modified" flags match the recorded flags
;	3) any "unmodified" flags remain unmodified
;
;   The format of an instruction log entry is a series of lines (ASCII characters terminated by an LF),
;   where each line looks like:
;
;	F000:EEFF SHL(0480,0002,F006) 1200,F006
;
;   ie, address, space, instruction, parenthesis, dst operand, comma, src operand, comma,
;   input flags, parenthesis, space, result, comma, and output flags.
;
;   WARNING: For the shift and rotate tests to pass on a real x86 CPU, we either have to distinguish
;   between single-bit shifts and multi-bit shifts (because the latter leaves PS_OF in an "undefined"
;   state), or we have to ignore PS_OF altogether.  For now, I'm specifying PS_ALL_BUT_OF for those
;   instructions, even though we'll be missing OVERFLOW validation for all single-bit shifts and rotates.
;
	CPU 8086
;
;   Bit masks for all the arithmetic flags we care about
;
PS_NONE equ	0x0000
PS_CF	equ	0x0001		; bit 0: Carry flag
PS_PF	equ	0x0004		; bit 2: Parity flag
PS_AF	equ	0x0010		; bit 4: Auxiliary Carry flag (aka Arithmetic flag)
PS_ZF	equ	0x0040		; bit 6: Zero flag
PS_SF	equ	0x0080		; bit 7: Sign flag
PS_OF	equ	0x0800		; bit 11: Overflow flag
PS_ALL		equ	PS_CF | PS_PF | PS_AF | PS_ZF | PS_SF | PS_OF
PS_ALL_BUT_AF	equ	PS_CF | PS_PF	      | PS_ZF | PS_SF | PS_OF
PS_ALL_BUT_OF	equ	PS_CF | PS_PF | PS_AF | PS_ZF | PS_SF

%macro	openF	1
	section .data
%%name: db	%1,0
	section .text
	mov	dx,%%name
	mov	ax,0x3D00
	int	0x21
%endmacro

%macro	readF	3
	%ifnidni %1,bx
	mov	bx,%1
	%endif
	%ifnidni %2,dx
	mov	dx,%2
	%endif
	%ifnidni %3,cx
	mov	cx,%3
	%endif
	mov	ah,0x3F
	int	0x21
%endmacro

%macro	print	1
	%ifidni %1,line
	push	ax
	push	cx
	push	dx
	push	si
	mov	dx,si
	dec	cx
	add	si,cx
	mov	byte [si],'$'
	mov	ah,0x09
	int	0x21
	mov	dx,strCRLF
	mov	ah,0x09
	int	0x21
	pop	si
	pop	dx
	pop	cx
	pop	ax
	%else
	%ifstr %1
	section .data
%%str:	db	%1,'$'
	section .text
	push	dx
	mov	dx,%%str
	%elifnidni %1,dx
	push	dx
	mov	dx,%1
	%endif
	push	ax
	mov	ah,0x09
	int	0x21
	pop	ax
	%ifnidni %1,dx
	pop	dx
	%endif
	%endif
%endmacro

%macro	exit	0-2
	%ifstr %1
	section .data
%%msg:	db	%1,'$'
	section .text
	%ifidni %2,oncarry
	jnc	%%ok
	%endif
	mov	dx,%%msg
	mov	ah,0x09
	int	0x21
	%endif
	int	0x20
%%ok:
%endmacro

%macro	break	0
;
;   "int3" generates the 1-byte breakpoint instruction; "int 3" generates a 2-byte software interrupt
;
	int3
%endmacro

	org	0x100
	section .text

	openF	"TRACE.TXT"
	exit	"unable to open file",oncarry

	mov	di,file_buffer
	readF	ax,di,file_buffer_len

m1:	exit	"unable to read file",oncarry

	test	ax,ax		; AX contains how many bytes were actually read
	jnz	m2
	exit	"processing complete"

m2:	cld
	mov	si,file_buffer
	add	di,ax
;
;   At this point, DS:SI is the current line pointer, and DI is the end-of-buffer
;   position.  getLine() will update CX to the length of the current line (including
;   the terminating LF).
;
m3:	call	getLine
	jnc	m4
;
;   Oops, carry is set, so we're missing part or all of the next line.  Move the
;   partial line to the top of the file buffer and then fill the rest of the buffer.
;
	mov	di,file_buffer
	rep	movsb
	mov	cx,file_buffer_end
	sub	cx,di
	readF	bx,di,cx
	jmp	m1
;
;   OK, we now have a complete line at DS:SI, guaranteed to end with an LF, with a
;   length of CX (although CX will soon be overwritten by calls to getHex).
;
m4:
;	print	line

	mov	ah,' '
	call	skipTo
m4err:	exit	"missing space",oncarry
	inc	si
	push	di
	mov	di,ins_name
m5:	lodsb
	cmp	al,'('
	je	m6
	stosb
	jmp	m5
m6:	mov	al,'$'
	stosb
	pop	di

	print	ins_name
	print	strColon

	call	getHex
	mov	[dst_operand],ax
	mov	[dst_operand+2],dx
	mov	[dst_size],cx
	call	printHex
	print	strComma

	inc	si
	call	getHex
	mov	[src_operand],ax
	mov	[src_operand+2],dx
	mov	[src_size],cx
	call	printHex

	inc	si
	call	getHex
	and	ax,PS_ALL
	mov	[operand_flags],ax
	jcxz	m6b
	print	strComma
	call	printHex

m6b:	mov	ah,' '
	call	skipTo
	jc	m4err
	inc	si
	call	getHex
	mov	[result_operand],ax
	mov	[result_operand+2],dx
	mov	[result_size],cx
	print	strEquals
	call	printHex
	print	strComma

	inc	si
	call	getHex
	and	ax,PS_ALL
	mov	[result_flags],ax
	call	printHex
	print	strCRLF
;
;   Now that we know operand sizes, it's time to look up the instruction function
;
	push	si
	mov	si,ins_table
	push	di
m7a:	mov	di,ins_name
m7b:	lodsb
	test	al,al
	jz	m8
	mov	ah,[es:di]
	inc	di
	cmp	al,ah
	je	m7b
m7c:	lodsb
	test	al,al
	jnz	m7c
	add	si,8		; after then name, each ins_table entry is 4 words long
	cmp	byte [si],0
	jne	m7a
	print	"missing function: "
	print	ins_name
	exit

m8:	mov	ax,[si]
	mov	cx,[result_size]
	mov	dx,compare8
	cmp	cl,4
	jb	m8a
	mov	ax,[si+2]
	mov	dx,compare16
	cmp	cl,8
	jb	m8a
	mov	ax,[si+4]
	mov	dx,compare32
m8a:	test	ax,ax
	jnz	m8b
	print	"missing "
	print	ins_name
	xchg	ax,cx
	call	printHex
	exit
m8b:	mov	[ins_function],ax
	mov	[ins_compare],dx
	mov	ax,[si+6]
	mov	[relevant_flags],ax
;
;   Let's call the instruction function now, loading the PS_ALL flags with the same values
;   that the emulator recorded (operand_flags).
;
	pushf
	pop	cx		; CX == current flags
	mov	ax,PS_ALL
	not	ax
	and	cx,ax		; CX == current flags, with PS_ALL flags cleared
	or	cx,[operand_flags]
	push	cx		; CX == current flags, with PS_ALL flags from operand_flags included
	popf
	call	[ins_function]
	pushf
	pop	cx
	call	[ins_compare]
;
;   If we're still here, the instruction passed, so restore the line pointer and move to the next line
;
	pop	di
	pop	si
;
;   When we finished reading the current line, DS:SI should have been left pointing at the terminating LF;
;   however, if we used "print" to display it, that LF would have replaced with a '$'.  In any case, we don't
;   really need to call skipTo, if we know we're at the end of the current line.
;
;	mov	ah,0x0A
;	call	skipTo
	inc	si		; step over the LF (or '$', in case we printed the line before processing it)
	jmp	m3

compare8:
	mov	ah,[result_operand]
	cmp	al,ah
	jne	c8err
	jmp	compareFlags
c8err:	print	"byte mismatch:"
	print	strActual
	mov	cx,2
	call	printHex
	print	strRecorded
	mov	al,ah
	call	printHex
	print	strCRLF
	exit

compare16:
	mov	dx,[result_operand]
	cmp	ax,dx
	jne	c16err
	jmp	compareFlags
c16err: print	"word mismatch:"
	print	strActual
	mov	cx,4
	call	printHex
	print	strRecorded
	xchg	ax,dx
	call	printHex
	print	strCRLF
	exit

compare32:
	cmp	ax,[result_operand]
	jne	c32err
	cmp	dx,[result_operand+2]
	je	compareFlags
c32err: print	"dword mismatch:"
	print	strActual
	mov	cx,8
	call	printHex
	print	strRecorded
	mov	ax,[result_operand]
	mov	dx,[result_operand+2]
	call	printHex
	print	strCRLF
	exit

compareFlags:
	mov	dx,[result_flags]
	and	cx,[relevant_flags]
	and	dx,[relevant_flags]
	cmp	cx,dx
	je	cfret
	print	"flag mismatch:"
	print	strActual
	xchg	ax,cx
	mov	cx,4
	call	printHex
	print	strRecorded
	xchg	ax,dx
	call	printHex
	print	strCRLF
	exit
cfret:	ret

testROL8:
	mov	al,[dst_operand]
	mov	cl,[src_operand]
	rol	al,cl
	ret

testROL16:
	mov	ax,[dst_operand]
	mov	cl,[src_operand]
	rol	ax,cl
	ret

testROR8:
	mov	al,[dst_operand]
	mov	cl,[src_operand]
	ror	al,cl
	ret

testROR16:
	mov	ax,[dst_operand]
	mov	cl,[src_operand]
	ror	ax,cl
	ret

testRCL8:
	mov	al,[dst_operand]
	mov	cl,[src_operand]
	rcl	al,cl
	ret

testRCL16:
	mov	ax,[dst_operand]
	mov	cl,[src_operand]
	rcl	ax,cl
	ret

testRCR8:
	mov	al,[dst_operand]
	mov	cl,[src_operand]
	rcr	al,cl
	ret

testRCR16:
	mov	ax,[dst_operand]
	mov	cl,[src_operand]
	rcr	ax,cl
	ret

testSHL8:
	mov	al,[dst_operand]
	mov	cl,[src_operand]
	shl	al,cl
	ret

testSHL16:
	mov	ax,[dst_operand]
	mov	cl,[src_operand]
	shl	ax,cl
	ret

testMUL16:
	mov	al,[dst_operand]
	mov	cl,[src_operand]
	mul	cl
	ret

testMUL32:
	mov	ax,[dst_operand]
	mov	cx,[src_operand]
	mul	cx
	ret

testIMUL16:
	mov	al,[dst_operand]
	mov	cl,[src_operand]
	imul	cl
	ret

testIMUL32:
	mov	ax,[dst_operand]
	mov	cx,[src_operand]
	imul	cx
	ret

testDIV16:
	mov	ax,[dst_operand]
	mov	cl,[src_operand]
	div	cl
	ret

testDIV32:
	mov	ax,[dst_operand]
	mov	dx,[dst_operand+2]
	mov	cx,[src_operand]
	div	cx
	ret

testIDIV16:
	mov	ax,[dst_operand]
	mov	cl,[src_operand]
	idiv	cl
	ret

testIDIV32:
	mov	ax,[dst_operand]
	mov	dx,[dst_operand+2]
	mov	cx,[src_operand]
	idiv	cx
	ret

;
;   getHex: get value of hex string
;
;   Inputs
;	DS:SI -> hex string
;
;   Outputs
;	CX == number of characters
;	DX:AX == corresponding value
;	DS:SI -> next non-hex character
;
;   Uses
;	AX, CX, DX, SI, Flags
;
;   Notes
;	Supports upper-case alpha chars only, with no prefixes (eg, "0x") or suffixes (eg, "h");
;	if there are more than 8 hex characters, the value will represent only the last 8 characters.
;
getHex:
	push	bx
	sub	bx,bx		; BX holds the low 16 bits
	sub	dx,dx		; DX holds the high 16 bits
	sub	cx,cx		; CX holds the character count
gh1:	lodsb
	cmp	al,'0'
	jb	gh9
	cmp	al,'9'
	ja	gh3
	sub	al,'0'
gh2:	shl	bx,1
	rcl	dx,1
	shl	bx,1
	rcl	dx,1
	shl	bx,1
	rcl	dx,1
	shl	bx,1
	rcl	dx,1
	or	bl,al
	inc	cx
	jmp	gh1
gh3:	cmp	al,'A'
	jb	gh9
	cmp	al,'F'
	ja	gh9
	sub	al,'A'-10
	jmp	gh2
gh9:	dec	si
	xchg	ax,bx		; DX:AX now holds the final 32-bit result
	pop	bx
	ret

;
;   printHex: print value in hex
;
;   Inputs
;	DX:AX == value
;	CX == # of characters
;
;   Outputs
;	None
;
;   Uses
;	Flags
;
printHex:
	push	ax
	push	bx
	push	cx
	push	dx
	push	di
	mov	bx,ax		; DX:BX now holds the value to print
	mov	di,hex_buffer_end - 1
	mov	al,'$'
	std
	stosb
ph1:	jcxz	ph3
	mov	al,bl
	and	al,0x0F
	add	al,'0'
	cmp	al,'9'
	jbe	ph2
	add	al,'A'-'0'-10
ph2:	stosb
	dec	cx
	shr	dx,1
	rcr	bx,1
	shr	dx,1
	rcr	bx,1
	shr	dx,1
	rcr	bx,1
	shr	dx,1
	rcr	bx,1
	jmp	ph1
ph3:	cld
	inc	di
	print	di
	pop	di
	pop	dx
	pop	cx
	pop	bx
	pop	ax
	ret

;
;   getLine: find the length of the current line
;
;   Inputs
;	DS:SI -> start of line
;	DS:DI -> first byte past end of line buffer
;
;   Outputs
;	CX == length of line, including the terminating LF (or partial length)
;	Carry clear if line complete, carry set if line incomplete (SI reached DI)
;
;   Uses
;	AL, CX, Flags
;
getLine:
	push	si
	sub	cx,cx
gl1:	cmp	si,di
	jb	gl2
	stc
	jmp	gl9
gl2:	lodsb
	inc	cx
	cmp	al,0x0A
	jne	gl1
gl9:	pop	si
	ret

;
;   skipTo: skip to the character in AH
;
;   Inputs
;	AH == specified character
;	DS:SI -> LF-terminated line
;
;   Outputs
;	DS:SI -> specified character if carry clear, or LF if carry set
;
;   Uses
;	AL, SI, Flags
;
skipTo:
	lodsb
	cmp	al,ah
	je	st9
	cmp	al,0x0A
	jne	skipTo
	stc
st9:	dec	si
	ret

;
;   The following is "const" (read-only) data...
;
	section .data
ins_table	db	"ROL",0
		dw	testROL8, testROL16, 0, PS_ALL_BUT_OF
		db	"ROR",0
		dw	testROR8, testROR16, 0, PS_ALL_BUT_OF
		db	"RCL",0
		dw	testRCL8, testRCL16, 0, PS_ALL_BUT_OF
		db	"RCR",0
		dw	testRCR8, testRCR16, 0, PS_ALL_BUT_OF
		db	"SHL",0
		dw	testSHL8, testSHL16, 0, PS_ALL_BUT_AF
		db	"MUL",0
		dw	0, testMUL16, testMUL32, PS_CF | PS_OF
		db	"IMUL",0
		dw	0, testIMUL16, testIMUL32, PS_CF | PS_OF
		db	"DIV",0
		dw	0, testDIV16, testDIV32, PS_NONE
		db	"IMUL",0
		dw	0, testIDIV16, testIDIV32, PS_NONE
		db	0		; end of instruction table

strCRLF		db	0x0D,0x0A,'$'
strColon	db	":$"
strEquals	db	"=$"
strComma	db	",$"
strActual	db	" actual=$"
strRecorded	db	" recorded=$"

;
;   We end with all the unitialized data (ie, data that doesn't need to be stored in the binary)
;
	section .bss
ins_name	resb	6
ins_function	resw	1
ins_compare	resw	1
dst_operand	resw	2
dst_size	resw	1
src_operand	resw	2
src_size	resw	1
operand_flags	resw	1
relevant_flags	resw	1
result_operand	resw	2
result_size	resw	1
result_flags	resw	1

hex_buffer	resb	9
hex_buffer_end	equ	$
hex_buffer_len	equ	hex_buffer_end - hex_buffer

file_buffer	resb	0x1000
file_buffer_end equ	$
file_buffer_len equ	file_buffer_end - file_buffer
