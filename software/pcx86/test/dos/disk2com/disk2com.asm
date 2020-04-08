	cpu	8086

	org	100h
	section .text

begin:	jmp	main
;
; First, a subroutine to display a character in AL, preserving all registers.
; After the JMP is code to write the character to the screen, followed by code to
; write it to COM1; patch the JMP with NOPs to use the latter.
;
chrout:	jmp	tocom
toscr:	push	ax
	push	bx
	mov	ah,0Eh
	mov	bh,0
	int	10h
	pop	bx
	pop	ax
	ret
tocom:	push	ax
	push	dx
	mov	dx,0
	mov	ah,1
	int	14h
	pop	dx
	pop	ax
	ret
;
; Display CR/LF.
;
crlf:	mov	al,0Dh
	call	chrout
	mov	al,0Ah
	call	chrout
	ret
;
; A subroutine to display the byte in AL as a 2-digit hex value, preserving all registers.
;
hexout:	push	ax
	shr	al,1
	shr	al,1
	shr	al,1
	shr	al,1
	call	hex1
	pop	ax
	push	ax
	and	al,0fh
	call	hex1
	pop	ax
	ret
hex1:	add	al,30h
	cmp	al,39h
	jbe	hex2
	add	al,41h-3Ah
hex2:	call	chrout
	ret
;
; Read each track on the disk and dump its sectors.
;
main:	mov	dx,0		; DX == COM port
	mov	ax,00E3h	; AH == init function, AL == 9600 baud (111), no parity (00), 1 stop bit (0), 8 data bits (11)
	int	14h		; initialize port
	mov	ch,0		; CH == cylinder
	mov	dh,0		; DH == head
trck:	mov	cl,1		; CL == sector
	mov	dl,1		; DL == drive
	mov	bx,200h		; ES:BX -> track buffer (ES should already be set properly)
	mov	si,6		; SI == retry count
read:	mov	ax,0208h	; AH == read function, AL == # of sectors (sectors/track)
	int	13h		; read sectors
	mov	ah,8		; AH == number of sectors read (assumed)
;	xchg	al,ah		; AH == number of sectors read (if successful; ROM doesn't seem to honor this)
	jnc	dump		; success
	dec	si		; decrement retry count
	jnz	read		; try again
	jmp	next		; out of retries, give up and move on
;
; Dump each sector in the track, prefacing each with its C:H:S value.
;
dump:	mov	al,ch
	call	hexout
	mov	al,':'
	call	chrout
	mov	al,dh
	call	hexout
	mov	al,':'
	call	chrout
	mov	al,cl
	call	hexout
;	mov	al,':'
;	call	chrout
;	mov	al,ah
;	call	hexout
	call	crlf		; C:H:S line complete
	push	cx
	push	dx
	mov	dx,200h/16	; DL == number of lines, DH == checksum (initially zero)
sloop:	mov	cx,16		; number of bytes per line
lloop:	mov	al,[es:bx]
	add	dh,al
	inc	bx
	call	hexout
	mov	al,' '
	call	chrout
	loop	lloop
	call	crlf
	dec	dl
	jnz	sloop
	mov	al,dh
	call	hexout
	call	crlf
	pop	dx
	pop	cx
	inc	cl
	dec	ah
	jg	dump
next:	inc	ch
	cmp	ch,40
	jb	trck
	int	20h		; all done, exit to DOS
