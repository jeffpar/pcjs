	PAGE	,132
;
; PCjs Master Boot Record
;
; @author Jeff Parsons <Jeff@pcjs.org>
; @copyright (c) 2020-2023 Jeff Parsons
; @license MIT <https://www.pcjs.org/LICENSE.txt>
;
; This file is part of PCjs, a computer emulation software project at pcjs.org
;

ACTIVE		equ	80h	; no coincidence this is also INT 13h drive #
INACTIVE	equ	00h

VEC_DRIVE0	equ	41h
VEC_DRIVE1	equ	46h

TBL_DRIVE0	equ	0C0h*4	; room for 1 drv_parms spanning vectors C0h-C3h
TBL_DRIVE1	equ	0C4h*4	; room for 1 drv_parms spanning vectors C4h-C7h

par_record	struc
par_status	db	?
par_chs_beg	db	3 dup(?)
par_type	db	?
par_chs_end	db	3 dup(?)
par_lba_beg	dd	?
par_lba_end	dd	?
par_record	ends

drv_parms	struc
drv_cyls	dw	?	; 0x19E, 0x1AE
drv_heads	db	?	; 0x1A0, 0x1B0
drv_unused1	dw	?
drv_wprecomp	dw	?	; 0x1A3, 0x1B3
drv_unused2	db	?
drv_control	db	?	; 0x1A6, 0x1B6
drv_unused3	db	3 dup(?)
drv_landing	dw	?	; 0x1AA, 0x1BA
drv_sectors	db	?	; 0x1AC, 0x1BC
drv_reserved	db	?
drv_parms	ends

RELOC		equ	7E00h

BOOTSEG	segment word public 'CODE'

	org	RELOC
        ASSUME	CS:BOOTSEG, DS:NOTHING, ES:NOTHING, SS:NOTHING
;
; All we should assume on entry is:
;
;	CS = 0
;	IP = 7C00h
;	DL = drive # (eg, 00h or 80h)
;
; The original IBM PC had these additional inputs:
;
;	DS = ES = 0
;	SS:SP = 30h:100h
;
; which apparently didn't become a standard, because if we rely on those
; other assumptions, we can run into boot failures.
;
start:	cli
	xor	ax,ax
	mov	ss,ax
	mov	sp,7C00h
	mov	ds,ax
	mov	es,ax
	ASSUME	DS:BOOTSEG, ES:BOOTSEG
	sti
	cld
	mov	si,sp
	mov	di,offset start
	mov	cx,100h
	rep	movsw
	mov	bx,offset main
	jmp	bx

main:	mov	si,offset par0tbl
	mov	al,4
next:	cmp	[si].par_status,ACTIVE
	je	load
	cmp	[si].par_status,INACTIVE
	jne	inv
	add	si,size par_record
	dec	ax
	jnz	next
	int	18h

load:	mov	dx,word ptr [si].par_status
	mov	cx,word ptr [si].par_chs_beg+1
cont:	add	si,size par_record
	dec	ax
	jz	read
	cmp	[si].par_status,INACTIVE
	je	cont
inv:	mov	si,offset inv_msg
print:	lodsb
	test	al,al
hang:	jz	hang
	mov	ah,0Eh
	int	10h
	jmp	print

read:	mov	di,5		; retries
	mov	bx,sp		; BX = 7C00h (we haven't pushed anything)
retry:	mov	ax,0201h	; AH = 02h, AL = 01h
	int	13h
	jnc	verify
	xor	ax,ax
	int	13h
	dec	di
	jnz	retry
	mov	si,offset err_msg
	jmp	print

verify:	mov	si,offset mis_msg
	cmp	word ptr [bx+1FEh],0AA55h
	jne	print
;
; Now we can finally get down to the whole reason for this MBR's existence:
; checking for internal drive parameter table(s), and if they exist, copying
; them to low memory and updating the corresponding interrupt vector.
;
	push	dx		; save original boot drive #
	xor	ax,ax
	mov	bx,VEC_DRIVE0 * 4
	mov	si,offset drv0tbl
	mov	di,TBL_DRIVE0
	cmp	[si].drv_cyls,ax
	je	chk1
	mov	dl,80h
	call	inittbl
chk1:	mov	bx,VEC_DRIVE1 * 4
	mov	si,offset drv1tbl
	mov	di,TBL_DRIVE1
	cmp	[si].drv_cyls,ax
	je	boot
	mov	dl,81h
	call	inittbl
;
; NOTE: Before transferring control to the DOS boot record, the DOS MBR
; carefully restored SI to the offset of the active partition record, but
; I am unaware of any reliance on that value (and it would presumably only
; be meaningful if the boot record ALSO knew where the MBR had relocated
; itself, which is also not documented....)
;
boot:	pop	dx		; restore original boot drive #
	jmp	sp

inittbl	proc	near
	mov	[bx],di		; update drive parms vector with AX:DI
	mov	[bx+2],ax
	mov	cx,size drv_parms
	rep	movsb
	mov	ah,09h		; tell the BIOS about the new parameters
	int	13h
	ret
inittbl	endp

inv_msg	db	"Invalid partition table",0
err_msg	db	"Error loading operating system",0
mis_msg	db	"Missing operating system",0

	db	"PCJS",0

	org	RELOC + 019Eh
drv0tbl	drv_parms	<>	; drive 0 parameter table
drv1tbl	drv_parms	<>	; drive 1 parameter table

	.errnz	offset $ - (RELOC + 01BEh)
par0tbl	par_record	<>
par1tbl	par_record	<>
par2tbl	par_record	<>
par3tbl	par_record	<>

	.errnz	offset $ - (RELOC + 01FEh)
	dw	0AA55h

BOOTSEG	ends

	end
