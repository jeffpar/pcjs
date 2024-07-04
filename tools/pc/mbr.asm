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

ACTIVE		equ	80h	; no coincidence this is also the drive #
INACTIVE	equ	00h

VEC_DRIVE0	equ	41h
VEC_DRIVE1	equ	46h

;
; While I had considered shaving 1K off available RAM so that I could safely
; stash a copy of the drive tables, that seemed rather wasteful, so I wondered
; if I could just use some unused interrupt vector space.  And while browsing
; Ralf Brown's Interrupt List, I noticed that AMI BIOS authors had apparently
; come to the same conclusion and used vectors C0h-C7h for a similar purpose.
;
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
drv_precomp	dw	?	; 0x1A3, 0x1B3
drv_unused2	db	?
drv_control	db	?	; 0x1A6, 0x1B6
drv_unused3	db	3 dup(?)
drv_landing	dw	?	; 0x1AA, 0x1BA
drv_sectors	db	?	; 0x1AC, 0x1BC
drv_reserved	db	?
drv_parms	ends

;
; Why do we ORG at RELOC (7E00h) when this code is always loaded at 7C00h?
; Because 7E00h is where the code immediately relocates itself (see rep movsw
; below) so that the memory at 7C00h is free for loading the next boot sector.
; Note that since we only relocate 512 bytes, 1024-byte boot sectors are not
; supported.
;
; Also, note that an ORG of 7E00h with a size of 200h bytes will result
; in the binary being 32K bytes long, so after linking and running EXE2BIN,
; you must also chop off the first 7E00h bytes, which you can do with DEBUG:
;
;   DEBUG MBR.BIN
;   -M 7F00 80FF 100
;   -RCX
;   :200
;   -N PCJS.MBR
;   -W
;   Writing 0200 bytes
;   -Q
;
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
	mov	sp,7C00h	; put the stack below 7C00h
	mov	ds,ax
	mov	es,ax
	ASSUME	DS:BOOTSEG, ES:BOOTSEG, SS:BOOTSEG
	sti
	cld
	mov	si,sp		; src = 7C00h
	mov	di,offset start	; dst = 7E00h
	mov	cx,100h
	rep	movsw		; move 200h bytes
;
; The above code doesn't care that it's running at 7C00h yet ORG'ed at 7E00h.
; Unfortunately, that ORG means the assembler will assume that "JMP CHK0" can
; be encoded with a relative 8-bit displacement instead of a 16-bit address.
; Rather than trying to trick the assembler, we jump through a register instead.
;
	mov	bx,offset chk0
	jmp	bx		; jump to where the rest of the code now lives
;
; The rest of the MBR is now running at the ORG'ed address.
;
; Now let's get to the whole reason for this MBR's existence: checking
; for internal drive parameter table(s), and if they exist, copying them
; to low memory and updating the corresponding interrupt vector.
;
chk0:	mov	bx,VEC_DRIVE0 * 4
	mov	si,offset drv0tbl
	mov	di,TBL_DRIVE0
	cmp	[si].drv_cyls,cx
	je	chk1		; jump if drv_cyls is zero (drv0tbl is unused)
	mov	dl,80h
	call	copy		; (on return, CX is still zero)
chk1:	mov	bx,VEC_DRIVE1 * 4
	mov	si,offset drv1tbl
	mov	di,TBL_DRIVE1
	cmp	[si].drv_cyls,cx
	je	scan		; jump if drv_cyls is zero (drv1tbl is unused)
	mov	dl,81h
	call	copy		; (on return, CX is still zero)
;
; Now back to our regularly scheduled Master Boot Record: scan the partition
; table, find the ACTIVE partition, ensure the rest are INACTIVE, then boot it.
;
scan:	mov	cl,4		; CX = count (CH is already zero)
	xor	di,di
	mov	si,offset par0tbl
next:	cmp	[si].par_status,ACTIVE
	je	load
	cmp	[si].par_status,INACTIVE
	jne	inv
skip:	add	si,size par_record
	loop	next
	test	di,di		; did we find an ACTIVE partition?
	jnz	read		; yes
	int	18h		; no, so start ROM BASIC
load:	test	di,di		; did we already find an ACTIVE partition?
	jnz	inv		; yes
	mov	dx,word ptr [si].par_status
	mov	ax,word ptr [si].par_chs_beg+1
	mov	di,si		; DI -> partition record
	jmp	skip

read:	mov	bp,5		; BP = retries
	mov	bx,sp		; BX = 7C00h (nothing has been pushed)
	xchg	cx,ax		; CX and DX contain cylinder/head/sector
retry:	mov	ax,0201h	; AH = 2 (read), AL = 1 (# sectors)
	int	13h		; read 1 sector
	jnc	verify
	xor	ax,ax		; AH = 0 (drive reset)
	int	13h		; perform drive reset and then retry
	dec	bp
	jnz	retry
	mov	si,offset err_msg
;
; Print the null-terminated error message at DS:SI and then stop.
; NOTE: BIOS INT 10h function 0Eh was changed in the IBM PC XT (Model 5160)
; to ignore BX (at least in text modes), but just in case you're somehow
; running this code on a PC (Model 5150), we set BX to a sane value.
;
print:	lodsb
	test	al,al
hang:	jz	hang
	mov	ah,0Eh
	mov	bx,0007h	; BH = page 0, BL = attr 07h
	int	10h
	jmp	print

inv:	mov	si,offset inv_msg
	jmp	print

verify:	mov	si,offset mis_msg
	cmp	word ptr [bx+1FEh],0AA55h
	jne	print
;
; NOTE: Before transferring control to the DOS boot record, the DOS MBR
; carefully restores SI to the offset of the active partition record.  I
; was unaware of any reliance on that value or any documentation to that
; effect, but then I discovered that COMPAQ boot records depend on it....
;
	mov	si,di		; SI -> partition record
boot:	jmp	sp		; jump to 7C00h

;
; Using the vector space at 0:DI, update the drive vector at 0:BX,
; copy the drive parameters from DS:SI to ES:DI, then notify the BIOS.
;
copy	proc	near
	mov	[bx],di		; update drive parms vector with AX:DI
	mov	[bx+2],cx	; (CX is zero)
	mov	cx,size drv_parms
	rep	movsb
	mov	ah,09h		; tell the BIOS about the new parameters
	int	13h		; DL = drive #
	ret
copy	endp

inv_msg	db	"Invalid partition table",0
err_msg	db	"Error loading operating system",0
mis_msg	db	"Missing operating system",0

	org	RELOC + 0199h	; put "PCJS" signature here
	db	"PCJS",0	; to signal that drive tables follow
;
; When PCjs writes the MBR, if any drives are using a custom drive
; geometry instead of a pre-configured drive type, then it will fill in
; these drive tables at build time.  We just need to reserve the space.
;
	.errnz	offset $ - (RELOC + 019Eh)
drv0tbl	drv_parms	<>	; drive 0 parameter table
drv1tbl	drv_parms	<>	; drive 1 parameter table
;
; Ditto for the partition tables; we just need to reserve space for them.
;
	.errnz	offset $ - (RELOC + 01BEh)
par0tbl	par_record	<>
par1tbl	par_record	<>
par2tbl	par_record	<>
par3tbl	par_record	<>

	.errnz	offset $ - (RELOC + 01FEh)
	dw	0AA55h		; required signature word

BOOTSEG	ends

	end
