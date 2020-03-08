	title	int14.asm
	page	,120

;	By Jeff Parsons (@jeffpar) 2018-03-06
;	Installs interrupt handlers for the specified COM port

DEBUG	equ	1

code	segment word public 'code'

	org	100h

	assume	cs:code, ds:code, es:code, ss:code

main	proc	near
	jmp	install
main	endp

	assume	cs:code, ds:nothing, es:nothing, ss:nothing

	even
prev14	dd	0			; previous INT 14h handler
rtsFlg	db	1			; internal RTS flag (0=off, 1=on)
pollFlg	db	0			; polling mode (0=off, 1=on); set by /P
echoFlg	db	0			; set if incoming Ctrl-E has turned echo on

	even
comID	dw	-1			; 0-based index of COM port in BIOS data area
comIRQ	dw	3
comAddr	dw	2F8h

MAXBUF	equ	32
inBuf	db	MAXBUF dup (?)
outBuf	db	MAXBUF dup (?)
inTot	dw	0			; counts the total number of input bytes buffered
inHead	dw	offset inBuf
inTail	dw	offset inBuf
outHead	dw	offset outBuf
outTail	dw	offset outBuf

MAXLOG	equ	1024
logBuff	db	MAXLOG dup (0)
logNext	dw	offset logBuff

log	macro	c,d
	local	log1
	push	bx
	mov	bx,logNext
	mov	byte ptr cs:[bx],c
	mov	byte ptr cs:[bx+1],d
	add	bx,2
	cmp	bx,offset logBuff + MAXLOG
	jb	log1
	mov	bx,offset logBuff
log1:	mov	byte ptr cs:[bx],'.'
	mov	byte ptr cs:[bx+1],'.'
	mov	logNext,bx
	pop	bx
	endm

int14	proc	far
	cmp	dx,comID		; request for our COM port?
	je	i14a			; yes
	jmp	i14x			; no

i14a:	test	ah,ah			; INIT function?
	jne	i14b			; no
	log	'N',al
	call	init
	iret

i14b:	cmp	ah,1			; WRITE function?
	jne	i14c			; no
;	log	'W',al
	call	write			; add the character in AL to outBuf
	iret

i14c:	cmp	ah,2			; READ function?
	jne	i14d			; no
	call	read			; remove next char from inBuf into AL
;	log	'R',al
;	log	'r',ah
	iret

i14d:	cmp	ah,3			; STATUS function?
	jne	i14e			; no, jump to previous handler
	call	status
;	log	'S',al			; these generate too much "noise"
;	log	's',ah
	iret

i14e:	cmp	ah,0AAh			; quick-and-dirty installation check
	jne	i14x
	not	ah
	iret

i14x:	jmp	dword ptr [prev14]

int14	endp

;
; fakeLSR
;
; Returns fake LSR in AL.
;
fakeLSR	proc	near
	assume	ds:code
	push	bx
	push	dx
	add	dx,5			; DX -> LSR
	in	al,dx
	;
	; See if inBuf contains data, and set the DR bit if it does.
	;
	and	al,not 01h
	mov	bx,inHead
	cmp	bx,inTail
	je	lsr1
	or	al,01h
	;
	; See if outBuf still has room, and set the THRE bit if it does.
	;
lsr1:	cmp	pollFlg,0
	jne	lsr9
	and	al,not 20h
	mov	bx,outHead
	call	incPtr
	cmp	bx,outTail
	je	lsr9
	or	al,20h

lsr9:	pop	dx
	pop	bx
	ret
fakeLSR	endp

;
; getLSR
;
; Returns LSR in AL.
;
getLSR	proc	near
	assume	ds:code
	push	dx
	add	dx,5			; DX -> LSR
	in	al,dx			; AL = LSR bits
	pop	dx
	ret
getLSR	endp

;
; getMSR
;
; Returns MSR in AL.
;
getMSR	proc	near
	assume	ds:code
	push	dx
	add	dx,6			; DX -> MSR
	in	al,dx			; AL = MSR bits
	pop	dx
	ret
getMSR	endp

;
; setIER
;
; Sets the physical IER bits.
;
setIER	proc	near
	assume	ds:code
	push	dx
	add	dx,3			; DX -> LCR
	in	al,dx
	jmp	$+2
	and	al,not 80h		; make sure the DLAB is not set, so that we can set IER
	out	dx,al
	dec	dx
	dec	dx			; DX -> IER
	mov	al,03h			; enable RBR (01h) and THR (02h) COM interrupts
	out	dx,al
	pop	dx
	ret
setIER	endp

;
; setDTR
;
; Sets the physical DTR bit.
;
setDTR	proc	near
	assume	ds:code
	push	dx
	add	dx,4			; DX -> MCR
	in	al,dx
	cmp	pollFlg,0
	jne	dtr1
	or	al,08h			; OUT2 == 08h (which apparently must ALSO be set enable interrupts)
dtr1:	or	al,01h			; DTR == 01h
	out	dx,al
	pop	dx
	ret
setDTR	endp

;
; setRTS
;
; Sets the physical RTS bit according to the internal rtsFlg.
;
setRTS	proc	near
	assume	ds:code
	push	ax
	push	dx
	add	dx,4			; DX -> MCR
	in	al,dx
	or	al,02h			; RTS == 02h
	cmp	rtsFlg,0
	jne	rts9
	and	al,not 02h
rts9:	out	dx,al
	log	'T',al
	pop	dx
	pop	ax
	ret
setRTS	endp

;
; incPtr
;
; Updates BX to next buffer position.
;
incPtr	proc	near
	assume	ds:code
	inc	bx
	cmp	bx,offset inBuf + MAXBUF
	jne	inc1
	mov	bx,offset inBuf
inc0:	ret
inc1:	cmp	bx,offset outBuf + MAXBUF
	jne	inc0
	mov	bx,offset outBuf
	ret
incPtr	endp

;
; tryIn
;
; If the DR bit is set, see if we can buffer the data.
;
; CARRY returns clear if any new data was read, otherwise it's set.
;
tryIn	proc	near
	assume	ds:code
	push	ax
	push	dx
	add	dx,5			; DX -> LSR
	in	al,dx
	pop	dx
	test	al,01h			; DR set?
	jnz	ti1			; yes
	stc
	jmp	ti9
ti1:	in	al,dx			; AL == new data
	log	'I',al
	push	bx
	mov	bx,inHead
	mov	[bx],al
	call	incPtr
	cmp	bx,inTail
	jne	ti7
	log	'F',al
	jmp	short ti8		; buffer full, dropping the data
ti7:	mov	inHead,bx
	inc	inTot
	cmp	pollFlg,0
	jne	ti8
	cmp	inTot,(MAXBUF/4)*3	; have we reached the 3/4 point?
	jne	ti8			; no
	cmp	rtsFlg,0		; is RTS already off?
	je	ti8			; yes
	dec	rtsFlg			; no, so let's try turning it off now
	call	setRTS			; and hope the sender give us some space
ti8:	pop	bx
	clc
ti9:	pop	ax
	ret
tryIn	endp

;
; tryOut
;
; If we have some buffered data, and the THRE bit is set, output more data.
;
tryOut	proc	near
	assume	ds:code
	push	bx
	mov	bx,outTail
	cmp	bx,outHead
	je	to9
	push	dx
	add	dx,5			; DX -> LSR
	in	al,dx
	pop	dx
	test	al,20h			; THRE set?
	jz	to9			; no
	mov	al,[bx]
	out	dx,al
;	log	'O',al
	call	incPtr
	mov	outTail,bx
to9:	pop	bx
	ret
tryOut	endp

;
; init
;
; Handles INIT requests from INT 14h.
;
init	proc	near
	push	bx
	push	dx
	push	ds
	push	cs
	pop	ds
	assume	ds:code
	pushf
	call	dword ptr [prev14]
	push	ax
	mov	dx,comAddr
	mov	inTot,0
	mov	inHead,offset inBuf
	mov	inTail,offset inBuf
	mov	outHead,offset outBuf
	mov	outTail,offset outBuf
	cmp	pollFlg,0
	jne	i1
	call	setIER
i1:	call	setDTR
	mov	rtsFlg,1
	call	setRTS
	pop	ax
	pop	ds
	assume	ds:nothing
	pop	dx
	pop	bx
	ret
init	endp

;
; write
;
; Handles WRITE requests from INT 14h.
;
; If AH == 1 (the normal INT 14h write scenario), mimicking the ROM BIOS
; requires that we wait for DSR, then CTS, and finally THRE.  I would prefer
; to do that by spin-waiting for MSR-based and LSR-based interrupt triggers,
; rather than adopting the ROM's totally arbitrary "let's loop 64K times" for
; each condition.  But, as I'm sure the ROM BIOS authors originally thought
; too, this approach is easier.
;
write	proc	near
	push	bx
	push	cx
	push	dx
	push	ds
	push	cs
	pop	ds
	assume	ds:code
	mov	dx,comAddr

	sti

	if	DEBUG
	cmp	echoFlg,0
	je	w0
	push	ax
	mov	ah,0Eh
	mov	bh,0
	int	10h
	pop	ax
w0:
	endif

	xchg	ah,al			; stash the output data in AH
	sub	cx,cx
w1:	call	getMSR
	and	al,30h			; we're "cheating" and checking for both
	cmp	al,30h			; DSR and CTS at once, instead of the ROM's
	je	w2			; "one after the other" approach
	loop	w1
	call	getLSR
	or	al,80h			; signal a time-out error
	xchg	ah,al
	jmp	short w9

w2:	cmp	pollFlg,0		; in polling mode, we take
	je	w3			; every opportunity to check for input
	call	tryIn

w3:	sub	cx,cx
w4:	call	getLSR
	test	al,20h			; checking THRE
	jnz	w5
	loop	w4
	or	al,80h			; signal a time-out error
	xchg	ah,al
	jmp	short w9

w5:	cli
	sub	al,al
	xchg	al,ah			; recover the output data in AL and zero AH
	mov	bx,outHead
	mov	[bx],al
	call	incPtr
	cmp	bx,outTail
	jne	w8
	or	ah,80h			; buffer full, so we pretend it's a time-out
	jmp	short w9

w8:	mov	outHead,bx		; there was room, so update the head ptr
	call	tryOut			; and since THRE was set, call tryOut

w9:	pop	ds
	assume	ds:nothing
	pop	dx
	pop	cx
	pop	bx
	ret
write	endp

;
; read
;
; Handles READ requests from INT 14h.
;
read	proc	near
	push	bx
	push	dx
	push	ds
	push	cs
	pop	ds
	assume	ds:code
	mov	dx,comAddr

	cmp	pollFlg,0		; in polling mode, we take
	je	r1			; every opportunity to check for input
	call	tryIn
	;
	; If CARRY is set, nothing was read, so let's turn RTS on.
	; If CARRY is clear, then something was read, so let's turn RTS off.
	;
	mov	al,0
	adc	al,al
	cmp	rtsFlg,al
	je	r1
	mov	rtsFlg,al
	call	setRTS

r1:	sub	ax,ax
	call	fakeLSR
	and	al,1Eh			; READ requests only return "error" bits
	mov	ah,al

	mov	bx,inTail
	cmp	bx,inHead
	jne	r3
	or	ah,80h
	jmp	short r9

r3:	mov	al,[bx]
	cmp	al,05h			; Ctrl-E?
	jne	r4			; no
	xor	echoFlg,1		; toggle echo flag
r4:	call	incPtr
	mov	inTail,bx

	cmp	pollFlg,0
	jne	r8
	cmp	inTot,MAXBUF/4		; are we down to 1/4 full now?
	jne	r8			; no
	cmp	rtsFlg,0		; is RTS already on?
	jne	r8			; yes
	inc	rtsFlg			; no, so let's turn RTS back on
	call	setRTS

r8:	dec	inTot

r9:	pop	ds
	assume	ds:nothing
	pop	dx
	pop	bx
	ret
read	endp

;
; status
;
; Handles STATUS requests from INT 14h.
;
; We could pass STATUS requests on to the previous handler, but that would
; return the port's "raw" state, whereas we need to return our own simulated
; "buffered" state: LSR (reg #5) bits in AH, MSR (reg #6) bits in AL.
;
; It's worth noting what DOS really cares about from this call.  Prior to
; reading serial input, DOS calls the STATUS function and then requires that
; both AH bit 0 (LSR Data Ready: 0x01) and AL bit 5 (MSR Data Set Ready: 0x20)
; be set before it will call READ.
;
; Also, in some cases (eg, the CTTY case), DOS requires that both AH bit 5
; (LSR Transmitter Holding Register Empty: 0x20) and AL bit 5 (MSR Data Set
; Ready: 0x20) be set before it calls WRITE, while in other cases (eg, output
; redirection), DOS simply calls WRITE and hopes for the best.
;
status	proc	near
	push	bx
	push	dx
	push	ds
	push	cs
	pop	ds
	assume	ds:code
	mov	dx,comAddr

	cmp	pollFlg,0		; in polling mode, we take
	je	s1			; every opportunity to check for input
	call	tryIn

s1:	call	fakeLSR
	mov	ah,al			; AH = LSR bits
	call	getMSR			; AL = MSR bits

	cmp	pollFlg,0
	je	s9
	cmp	rtsFlg,0		; in polling mode, if RTS isn't already on
	jne	s9			; turn it on
	inc	rtsFlg
	call	setRTS

s9:	pop	ds
	assume	ds:nothing
	pop	dx
	pop	bx
	ret
status	endp

intHW	proc	far
	sti
	push	ax
	push	bx
	push	dx
	push	ds
	push	cs
	pop	ds
	assume	ds:code
	mov	dx,comAddr

hw0:	push	dx
	inc	dx
	inc	dx			; DX -> IIR
	in	al,dx
	pop	dx
	log	'H',al

	cmp	al,04h			; DR condition?
	jne	hw1			; no
	call	tryIn			; read data
	jnc	hw0			; assuming we read data, check IIR again
	jmp	short hw9

hw1:	cmp	al,02h			; THRE condition?
	jne	hw9			; no
	call	tryOut			; yes, so see if we have something to write

hw9:	cli
	mov	al,20h			; EOI command
	out	20h,al

	pop	ds
	assume	ds:nothing
	pop	dx
	pop	bx
	pop	ax
	iret
intHW	endp

	even
endRes	label	byte			; end of resident code/data

comMsg	db	"COM? handlers installed$"
pollMsg	db	" in polled mode$"
endMsg	db	13,10,'$'
insMsg	db	"Handlers already installed",13,10,'$'
errMsg	db	"COM port not found",13,10,'$'

install	proc	near
	assume	ds:code, es:code, ss:code
	;
	; Let's look for a /P switch to determine polled mode,
	; along with /1 to select adapter #1 at port 3F8h instead of 2F8h.
	;
	cld
	mov	si,80h			; DS:SI -> command line
	lodsb
	cbw
	xchg	cx,ax			; CX == line length (as a fail-safe)
ins0:	lodsb
	dec	cx
	cmp	al,0Dh			; end of command-line?
	je	ins3			; yes
	cmp	al,'/'
	jne	ins2
	lodsb
	dec	cx
	cmp	al,'1'			; /1?
	jne	ins1			; no
	add	comAddr,100h		; bump 2F8h to 3F8h
	inc	comIRQ			; bump IRQ3 to IRQ4
ins1:	and	al,not 20h
	cmp	al,'P'			; /P?
	jne	ins2			; no
	inc	pollFlg			; yes, set pollFlg to non-zero
ins2:	test	cx,cx			; any more command-line characters?
	jg	ins0			; yes

ins3:	sub	ax,ax
	mov	es,ax
	assume	es:nothing		; since ES is zero

	mov	ax,comAddr
	mov	bx,400h			; access RBDA @0:400 instead of 40:0
	sub	dx,dx
ins4:	cmp	word ptr es:[bx],ax	; matching port?
	je	ins5			; yes
	inc	bx
	inc	bx
	inc	dx
	cmp	dl,4
	jb	ins4
	mov	dx,offset errMsg	; no matching port was found; abort
	mov	ah,09h
	int	21h
	int	20h

ins5:	mov	comID,dx		; comID is 0 for COM1, 1 for COM2, etc.
	mov	ah,0AAh			; quick-and-dirty INT14.COM installation check
	int	14h
	not	ah
	cmp	ah,0AAh
	jne	ins6
	mov	dx,offset insMsg	; already installed for that port
	mov	ah,09h
	int	21h
	int	20h			; abort

ins6:	mov	ax,offset int14
	xchg	ax,es:[14h*4]
	mov	word ptr prev14,ax
	mov	ax,cs
	xchg	ax,es:[14h*4+2]
	mov	word ptr prev14+2,ax

	mov	dx,es:[bx]		; DX is port (eg, 3F8h or 2F8h)
	mov	bx,offset intHW
	cmp	pollFlg,0
	jne	ins7
	mov	di,comIRQ		; convert IRQ...
	add	di,8			; ...to vector
	add	di,di			; and multiply vector by 4
	add	di,di
	mov	word ptr es:[di],bx
	mov	es:[di+2],cs
	call	setIER
	in	al,21h
	mov	cl,byte ptr comIRQ
	mov	ah,1
	shl	ah,cl
	not	ah			; AH == NOT (1 SHL comIRQ)
	and	al,ah
	out	21h,al			; unmask the appropriate COM IRQ
	mov	bx,offset endRes

ins7:	call	setDTR			; set DTR (and OUT2 as needed for interrupts)
	call	setRTS			; rtsFlg is initially 1

	mov	dx,comID
	add	dl,'1'
	mov	comMsg+3,dl
	mov	dx,offset comMsg
	mov	ah,09h
	int	21h
	cmp	pollFlg,0
	je	ins9
	mov	dx,offset pollMsg
	mov	ah,09h
	int	21h
ins9:	mov	dx,offset endMsg
	mov	ah,09h
	int	21h

	mov	dx,bx			; DX -> end of resident code/data
	int	27h
install	endp

code	ends

	end	main
