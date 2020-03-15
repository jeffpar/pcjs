	title	'Preliminary Z80 tests'

; prelim.z80 - Preliminary Z80 tests
; Copyright (C) 1994  Frank D. Cringle
;
; This program is free software; you can redistribute it and/or
; modify it under the terms of the GNU General Public License
; as published by the Free Software Foundation; either version 2
; of the License, or (at your option) any later version.
;
; This program is distributed in the hope that it will be useful,
; but WITHOUT ANY WARRANTY; without even the implied warranty of
; MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
; GNU General Public License for more details.
;
; You should have received a copy of the GNU General Public License
; along with this program; if not, write to the Free Software
; Foundation, Inc., 675 Mass Ave, Cambridge, MA 02139, USA.


; These tests have two goals.  To start with, we assume the worst and
; successively test the instructions needed to continue testing.
; Then we try to test all instructions which cannot be handled by
; zexlax - the crc-based instruction exerciser.

; Initially errors are 'reported' by jumping to 0.  This should reboot
; cp/m, so if the program terminates without any output one of the
; early tests failed.  Later errors are reported by outputting an
; address via the bdos conout routine.  The address can be located in
; a listing of this program.

; If the program runs to completion it displays a suitable message.

;******************************************************************************
;
; Modified by Ian Bartholomew to run a preliminary test on an 8080 CPU
;
; Assemble using M80
;
;******************************************************************************

	.8080
	aseg
	org	100h

start:	mvi	a,1		; test simple compares and z/nz jumps
	cpi	2
	jz	0
	cpi	1
	jnz	0
	jmp	lab0
	hlt			; emergency exit
	db	0ffh
	
lab0:	call	lab2		; does a simple call work?
lab1:	jmp	0		; fail
	
lab2:	pop	h		; check return address
	mov	a,h
	cpi	high lab1
	jz	lab3
	jmp	0
lab3:	mov	a,l
	cpi	low lab1
	jz	lab4
	jmp	0

; test presence and uniqueness of all machine registers
; (except ir)
lab4:	lxi	sp,regs1
	pop	psw
	pop	b
	pop	d
	pop	h
	lxi	sp,regs2+8
	push	h
	push	d
	push	b
	push	psw

v	defl	0
	rept	8
	lda	regs2+v/2
v	defl	v+2
	cpi	v
	jnz	0
	endm

; test access to memory via (hl)
	lxi	h,hlval
	mov	a,m
	cpi	0a5h
	jnz	0
	lxi	h,hlval+1
	mov	a,m
	cpi	03ch
	jnz	0

; test unconditional return
	lxi	sp,stack
	lxi	h,reta
	push	h
	ret
	jmp	0

; test instructions needed for hex output
reta:	mvi	a,0ffh
	ani	0fh
	cpi	0fh
	jnz	0
	mvi	a,05ah
	ani	0fh
	cpi	0ah
	jnz	0
	rrc
	cpi	05h
	jnz	0
	rrc
	cpi	82h
	jnz	0
	rrc
	cpi	41h
	jnz	0
	rrc
	cpi	0a0h
	jnz	0
	lxi	h,01234h
	push	h
	pop	b
	mov	a,b
	cpi	12h
	jnz	0
	mov	a,c
	cpi	34h
	jnz	0
	
; from now on we can report errors by displaying an address

; test conditional call, ret, jp, jr
tcond	macro	flag,pcond,ncond,rel
	lxi	h,&flag
	push	h
	pop	psw
	c&pcond	lab1&pcond
	jmp	error
lab1&pcond:	pop	h
	lxi	h,0d7h xor &flag
	push	h
	pop	psw
	c&ncond	lab2&pcond
	jmp	error
lab2&pcond:	pop	h
	lxi	h,lab3&pcond
	push	h
	lxi	h,&flag
	push	h
	pop	psw
	r&pcond
	call	error
lab3&pcond:	lxi	h,lab4&pcond
	push	h
	lxi	h,0d7h xor &flag
	push	h
	pop	psw
	r&ncond
	call	error
lab4&pcond:	lxi	h,&flag
	push	h
	pop	psw
	j&pcond	lab5&pcond
	call	error
lab5&pcond:	lxi	h,0d7h xor &flag
	push	h
	pop	psw
	j&ncond	lab6&pcond
	call	error
lab6&pcond:	
	endm

	tcond	1,c,nc,1
	tcond	4,pe,po,0
	tcond	040h,z,nz,1
	tcond	080h,m,p,0

; test indirect jumps
	lxi	h,lab7
	pchl
	call	error

; djnz (and (partially) inc a, inc hl)
lab7:	mvi	a,0a5h
	mvi	b,4
lab8:	rrc
	dcr	b
	jnz	lab8
	cpi	05ah
	cnz	error
	mvi	b,16
lab9:	inr	a
	dcr	b
	jnz	lab9
	cpi	06ah
	cnz	error
	mvi	b,0
	lxi	h,0
lab10:	inx	h
	dcr	b
	jnz	lab10
	mov	a,h
	cpi	1
	cnz	error
	mov	a,l
	cpi	0
	cnz	error
	
allok:	lxi	d,okmsg
	mvi	c,9
	call	5
	jmp	0

okmsg:	db	'8080 Preliminary tests complete$'
	
; display address at top of stack and exit
error:	pop	b
	mvi	h,high hextab
	mov	a,b
	rrc
	rrc
	rrc
	rrc
	ani	15
	mov	l,a
	mov	a,m
	call	conout
	mov	a,b
	ani	15
	mov	l,a
	mov	a,m
	call	conout
	mov	a,c
	rrc
	rrc
	rrc
	rrc
	ani	15
	mov	l,a
	mov	a,m
	call	conout
	mov	a,c
	ani	15
	mov	l,a
	mov	a,m
	call	conout
	mvi	a,13
	call	conout
	mvi	a,10
	call	conout
	jmp	0

conout:	push	psw
	push	b
	push	d
	push	h
	mvi	c,2
	mov	e,a
	call	5
	pop	h
	pop	d
	pop	b
	pop	psw
	ret
	
v	defl	0
regs1:	rept	8
v	defl	v+2
	db	v
	endm

regs2:	ds	8,0

hlval:	db	0a5h,03ch

; skip to next page boundary
	org	(($+255)/256)*256
hextab:	db	'0123456789abcdef'
	ds	240

stack	equ	$

	end	start
