	title	fakectty.asm
	page	,120

;	By Jeff Parsons (@jeffpar) 2018-03-15
;	Fake CTTY utility for debugging purposes

DEBUG	equ	1

code	segment word public 'code'

	org	100h

	assume	cs:code, ds:code, es:code, ss:code

;
; What does FAKECTTY do exactly?
;
; I'm glad you asked.  It displays a fake DOS prompt, and then polls a COM port,
; waiting for input, echoing that input, until ENTER is detected, at which point it
; displays "Bad command or file name", and starts over.
;
main	proc	near
	call	chkCOM			; verify that INT14.COM is installed
	jc	m9			; abort

m1:	mov	si,offset prompt
	call	print

m2:	mov	ah,1
	int	16h
	jz	m3
	mov	ah,0
	int	16h
	nop				; set a breakpoint here
	jmp	short m9

m3:	mov	ah,3			; poll the COM port
	mov	dx,comID
	int	14h
	test	ah,01h			; any COM data available?
	jz	m2			; no

	mov	ah,2			; read the COM port
	int	14h
	test	ah,ah			; success?
	jnz	m2			; no

	mov	ah,1			; write the COM port
	int	14h

	cmp	al,0Dh			; carriage return?
	jne	m2			; no

	mov	ax,010Ah		; echo a linefeed as well
	int	14h

	mov	si,offset badcmd	; display a fake response
	call	print
	jmp	m1			; and then display another fake prompt

m9:	int	20h
main	endp

print	proc	near
p1:	lodsb
	cmp	al,'$'
	je	p9
	mov	ah,1
	int	14h
	jmp	p1
p9:	ret
print	endp

;
; Check for a /1 or /2 to determine which adapter we should monitor.
;
chkCom	proc	near
	cld
	mov	si,80h			; DS:SI -> command line
	lodsb
	cbw
	xchg	cx,ax			; CX == line length (as a fail-safe)
chk1:	lodsb
	dec	cx
	cmp	al,0Dh			; end of command-line?
	je	chk3			; yes
	cmp	al,'/'
	jne	chk2
	lodsb
	dec	cx
	cmp	al,'1'			; /1?
	jne	chk2			; no
	add	comAddr,100h		; bump 2F8h to 3F8h
chk2:	test	cx,cx			; any more command-line characters?
	jg	chk1			; yes

chk3:	push	es
	sub	ax,ax
	mov	es,ax
	assume	es:nothing		; since ES is zero

	mov	ax,comAddr
	mov	bx,400h			; access RBDA @0:400 instead of 40:0
	sub	dx,dx
chk4:	cmp	word ptr es:[bx],ax	; matching port?
	je	chk5			; yes
	inc	bx
	inc	bx
	inc	dx
	cmp	dl,4
	jb	chk4
	mov	dx,offset errMsg	; no matching port was found; abort
	mov	ah,09h
	int	21h
	stc
	jmp	short chk9

chk5:	mov	comID,dx		; comID is 0 for COM1, 1 for COM2, etc.
	mov	ah,0AAh			; quick-and-dirty INT14.COM installation check
	int	14h
	not	ah
	cmp	ah,0AAh
	je	chk6
	mov	dx,offset chkMsg	; INT14.COM needs to be installed for that port first
	mov	ah,09h
	int	21h
	stc
	jmp	short chk9

chk6:	add	dl,'1'
	mov	comMsg+3,dl
	mov	dx,offset comMsg
	mov	ah,09h
	int	21h
	clc

chk9:	pop	es
	assume	es:code
	ret
chkCOM	endp

comID	dw	-1			; 0-based index of COM port in BIOS data area
comAddr	dw	2F8h

comMsg	db	"COM? monitored",13,10,'$'
chkMsg	db	"Run INT14 to install I/O handlers first",13,10,'$'
errMsg	db	"COM port not found",13,10,'$'

prompt	db	"C:\>",'$'
badcmd	db	"Bad command or file name",13,10,'$'

code	ends

	end	main
