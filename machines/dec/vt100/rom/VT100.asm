;
;   DZ80 V3.4.1 8080 Disassembly of archive/VT100.bin
;   2016/08/03 14:55
;
;   Comments beginning with ";;" borrowed from Adam Mayer's (https://github.com/phooky)
;   work at https://github.com/phooky/VT100-Hax/blob/master/ROMs/haxrom.d80 and http://vt100romhax.tumblr.com
;
;   All other comments/annotations by Jeff Parsons (@jeffpar) <Jeff@pcjs.org>
;

;
;   Data area definitions
;
stack_top	equ	204eh
scratch_start	equ	204eh

;
;   The "Keys Flag Byte/Buffer" at 0x2068 contains the following bits:
;
;	0-1	Key counter
;	  2	Key counter overflow bit
;	  3	Setup
;	  4	Control
;	  5	Shift
;	  6	Caps Lock
;	  7	Last Key
;
key_flags	equ	2068h	; "Keys Flag Buffer"
key_buffer	equ	206ah	; start of the "three place New Key Address Buffer"

cursor_address	equ	20f6h
cursor_countdn	equ	212dh
cursor_visible	equ	21bah

;
; Reset vector
;
	org	0
	di
	lxi	sp,stack_top	; SP = 0x204e
	jmp	reset
;
; Interrupt vector 0x1 for Keyboard
;
	org	8
	call	X00fd
	ei
	ret
;
; Interrupt vector 0x2 for PUSART
;
	org	10h
	call	X03cc
	ei
	ret
;
; Interrupt vector 0x3 for Keyboard and PUSART
;
	org	18h
	call	X03cc
	call	X00fd
	ei
	ret
;
; Interrupt vector 0x4 for Video (vertical retrace)
;
	org	20h
	call	X04cf
	ret
;
; Interrupt vector 0x5 for Keyboard and Video
;
	org	28h
	call	X04cf
	ret
;
; Interrupt vector 0x6 for PUSART and Video
;
	org	30h
X0030:	call	X03cc
	call	X04cf
	ei
	ret
;
; Interrupt vector 0x7 for Keyboard and PUSART and Video
;
	org	38h
	jmp	X0030

;
; Beginning of power-up (reset) code at 0x003b
;
reset:	mvi	e,1
X003d:	di
	mvi	a,0fh
	out	62h		;; 0x0f to NVR latch
	cma			;; invert A (0xf0)
	out	42h		;; 0xf0 to brightness
;;
;;  Run checksum on each 2K ROM, indicating with
;;  the keyboard LEDs which is being scanned.
;;  The # of the chip being scanned is stored in B.
;;
	xra	a		;; zero A
	mov	d,a		;; zero D, L, H
	mov	l,a
	mov	h,a
X0049:	inr	a		;; next 2K ROM
	mov	b,a		;; store the current ROM # in B
	out	82h		;; show current ROM on LEDs
	mvi	c,8		;; Checksum over 8 256B blocks
X004f:	rlc			;;    Rotate A left
	xra	m		;;    A <- A ^ memory
	inr	l		;;    next memory address
	jnz	X004f		;;    ... repeat until end of block
	inr	h		;; next block
	dcr	c		;; decrement block count
	jnz	X004f		;; ... repeat until end of chip
	ora	a		;; Check the value of the accumulator
X005b:	jnz	X005b		;; If it's not zero, hang forever
	mov	a,b		;; Put the ROM # back in the accumulator
	cpi	4		;; If it's not 4...
	jnz	X0049		;; repeat for the next ROM

	inr	a
	out	82h		;; write 5 to LEDs (turns on L2 and L4)

	mvi	c,0aah		;; Test pattern: 0xaa
	mvi	b,2ch		;; 0x2c is the top of RAM on the basic board
	in	42h		;;
	ani	2		;; flags buffer &= 0x02 : is AVO installed?
	jnz	X0074		;; if bit 2 is not set, AVO is installed
	mvi	b,40h		;; 0x40 is the top of RAM on the AVO
X0074:	mov	h,b		;; load HL with top of RAM
	dcx	h		;; dec HL
X0076:	mvi	m,0		;; M <- 0
	dcx	h		;; dec HL
	mov	a,h		;; a <- h
	cpi	1fh		;; compare to 1f (top of ROM)
	jnz	X0076		;; continue to zero if not at ROM

	inx	h
;;
;;  Zero all RAM. C gets the high byte of the address of the top of
;;  RAM, HL is loaded with it, and it zeros memory all the way down,
;;  leaving the start of RAM in HL
;;
;;  From start of RAM, test that it's all zero
;;
X0080:	mov	a,m		;; read a byte of memory
	ora	a
	jz	X0090		;; if it's zero, skip ahead
	ani	0fh
	mov	a,h
	jnz	X00a1		;; err
	cpi	30h
	jc	X00a1		;; err
X0090:	mov	m,c		;; run test pattern through ram
	mov	a,m
	xra	c
	jz	X00a8		;; jump to 00a8 if ok
	ani	0fh
	mov	a,h
	jnz	X00a1		;; err
	cpi	30h
	jnc	X00a8		;; ok
X00a1:	mvi	d,1
	cpi	2ch
X00a5:	jc	X00a5		;; Hang if non-AVO memory
X00a8:	xra	a
	inx	h
	ora	l
	jnz	X0080
	ora	h
	cmp	b
	jnz	X0080
	mov	a,c		;; Repeat mem test with pattern 0x55
	rlc
	mov	c,a
	jc	X0074
;;
;;  Memory test is done
;;
	push	d
	call	X02a4		;; zero scratch and screen mem
	call	X02eb		;; Set a number of scratch values to fixed values
	call	X175b		;; .... more memory initialization
	pop	d
X00c4:	jz	X00cb
	mov	a,d
	ori	2
	mov	d,a
X00cb:	mvi	a,2fh
	sta	X21c9
	out	62h
;
; Prepare to enter the "beep" loop
;
X00d2:	lxi	b,X0fff
	ei
X00d6:	mvi	a,8
	ana	e
	mvi	a,7fh
	jnz	X00e0
	mvi	a,0ffh
X00e0:	out	82h
	dcx	b
	mov	a,b
	ora	c
	jnz	X00d6
;
; Done "beeping" now
;
X00e8:	out	82h		; A = 0, so all LEDs off now
	lda	key_flags
	ora	a
	jm	X00f5
	mov	a,d
	ori	4
	mov	d,a
X00f5:	push	d

;
; The next call issues the following:
;
;   03A2 CD8103     CALL    0381	;stack=204A
;   0B67 CDAD10     CALL    10AD        ;stack=2048
;   chipset.outPort(0x00A2,DC012,0x00) at 10BD
;   chipset.outPort(0x00A2,DC012,0x04) at 10C1
;
; and then:
;
;   03A2 CD8103     CALL    0381        ;stack=204A
;   0B67 CDAD10     CALL    10AD        ;stack=2048
;   10C9 CDAA0F     CALL    0FAA        ;stack=2046
;   0FB6 CC8814     CALLZ   1488        ;stack=2040
;   1488 CD9314     CALL    1493        ;stack=203E
;   chipset.inPort(0x0042,FLAGS.BUFFER): 0x60 at 1493
;
; Note that once we're inside 0FAA, that appears to be where we stay.
;
	call	X03a2

	pop	d
	jmp	X0875
;
;   Keyboard interrupt handler
;
X00fd:	push	psw
	in	82h		;; Read from keyboard port
	push	h
	push	b
	mov	b,a		;; copy b <- a
	sui	7ch		;; subtract 0x7c from a
	jm	X011a		;; jump to 011a if a is a normal key
	mov	h,a		;; otherwise h <- a
	inr	h		;; h++
	mvi	a,10h		;; a <- 0x10
	rrc
X010d:	rlc
	dcr	h
	jnz	X010d
	lxi	h,key_flags	;; load keys flag addresss
	ora	m		;; or in control bit
	mov	m,a		;; store again
	jmp	X012d		;; jump to end to interrupt

X011a:	lxi	h,key_flags	;; load keys flag address
	mvi	a,7
	ana	m		;; load key counter
	cpi	4		;; if overflow.. (>3 keys)
	jp	X012d		;; discard keypress and end interrupt
	inr	m		;; otherwise increment key counter
	lxi	h,key_buffer	;; load key address buffer
	call	X13de		;; add key counter to address buffer
	mov	m,b		;; save key to address buffer
X012d:	pop	b
	pop	h
	pop	psw
	ret
;;
;;  End of keyboard interrupt handler
;;
X0131:	ani	7fh
	mov	c,a
	lda	X207b
	ora	a
	jnz	X01ff
X013b:	mov	a,c
	cpi	1
	jz	X01c3
	lda	X21a7
	ani	20h
	jnz	X0175
	lda	X2178
	ora	a
	jnz	X015f
	mov	a,c
	cpi	41h
	jm	X015b
	mvi	a,1bh
	call	X0f18
X015b:	mov	a,c
	jmp	X080d

X015f:	mvi	a,1bh
	call	X0f18
	mov	a,c
	cpi	41h
	jp	X015b
	mvi	a,3fh
X016c:	call	X0f18
	mov	a,c
	adi	40h
	jmp	X080d

X0175:	lda	X2178
	ora	a
	jnz	X019e
	mov	a,c
	cpi	41h
	jm	X015b
	cpi	50h
	jm	X019e
X0187:	mvi	a,1bh
	call	X0f18
	mvi	a,4fh
X018e:	call	X0f18
	jmp	X015b

X0194:	mvi	a,1bh
	call	X0f18
	mvi	a,5bh
	jmp	X018e

X019e:	lda	X21bc
	ora	a
	jz	X01b5
	mov	a,c
	cpi	41h
	jp	X0187
X01ab:	mvi	a,1bh
	call	X0f18
	mvi	a,4fh
	jmp	X016c

X01b5:	mov	a,c
	cpi	41h
	jm	X01ab
	cpi	50h
	jm	X0194
	jmp	X0187

X01c3:	lxi	h,X0815
	push	h
	lda	X21a5
	ora	a
	rnz
	call	X0853
	lxi	b,X020e
	lxi	h,key_flags
	mov	a,m
	ani	10h
	jnz	X0900
	mov	a,m
	ani	20h
	jz	X01e4
	lxi	b,X00d2
X01e4:	mvi	a,25h
	ori	8
	ora	b
	out	1
	lda	X207f
	add	c
	mov	c,a
X01f0:	push	b
	call	X1493
	pop	b
	lda	X207f
	cmp	c
	jnz	X01f0
	jmp	X0394

X01ff:	lxi	h,X0812
	push	h
	xra	a
	sta	X2130
	sta	X21b8
	lxi	h,X21a3
	mov	a,c
X020e:	sui	41h
	mov	b,a
X0211:	mov	a,m
	jz	X0222
	dcr	b
	jz	X0226
	dcr	b
	jz	X1815
	dcr	b
	jz	X181e
	ret

X0222:	dcr	a
	rm
	mov	m,a
	ret

X0226:	inr	a
	cpi	20h
	rz
	mov	m,a
	ret

X022c:	lda	X21a7
	cma
	ani	10h
	lxi	h,X21a5
	ora	m
	jnz	X0841
	lda	X21bf
	lxi	b,X0211
	ana	b
	jnz	X0245
	mvi	c,13h
X0245:	mov	a,c
	sui	11h
	sta	X21c4
	call	X0f7e
	jmp	X0812

X0251:	di
	lxi	sp,stack_top		; SP = 0x204e
	lxi	h,2000h
	push	h
	mov	a,m
	rar
	jc	X0265
	in	42h
	ani	2
	jz	X0269
X0265:	inr	a
	sta	X21c8
X0269:	call	X03a2
	lda	X2050
	dcr	a
	sta	X2153
	pop	h
	mov	a,m
	mvi	m,7fh
	ora	a
	jz	X0298
	jp	X0285
	lxi	h,X21cb
	mvi	m,0ah
	ani	7fh
X0285:	sta	X21bd
	adi	30h
	lhld	cursor_address
	mov	m,a
	cpi	34h
	jz	X0298
	mvi	a,20h
	sta	X21a5
X0298:	call	X0bf2
	lxi	b,X0011
	call	X0f7e
	jmp	X03ae
;;
;;  Zero all scratch and screen RAM above stack
;;
X02a4:	lxi	h,scratch_start	;; HL = 0x204e (just above stack)
	lxi	d,0fb2h		;; DE = 0x0fb2 (every byte from 0x204e up to 0x3000)
	mvi	b,0		;; B = 0
	call	memset		;; memset(0x1083): set 0x0fb2 bytes to 0 starting at 0x204e
	cma			;; invert A
	sta	X2104		;; store A in 0x2104
	lxi	h,X2004		;; HL <- 0x2004
	shld	X2052		;; *(0x2052) = 0x2004
	lxi	h,X22d0		;; HL <- 0x22d0
	shld	cursor_address	;; *(20f6) = 0x22d0
	ret
;;
;;  Initialize start of screen RAM and wipe attribute RAM to 0xff
;;
X02c0:	call	X0a15		;; 0x2140 = 0xe605
	lxi	h,2000h		;; HL = 0x2000
	lxi	d,X02d9		;; DE = 0x02d9
	mvi	b,12h		;; B = 18
	call	memmove		;; copy 18 bytes from 0x02d9 to 0x2000
	lxi	h,3000h		;; HL = 0x3000
	lxi	d,1000h		;; DE = 0x1000
	mvi	b,0ffh		;; B = 0xFF
	jmp	memset		;; invoke memset(0x1083) to set all of attribute RAM to 0xFF and return
;;
;;  0x02d9 through 0x02eb are the initial values for the screen RAM;
;;  it's copied into low RAM at 0x2000 during init.
;;
X02d9:
	db	07fh,070h,003h
	db	07fh,0f2h,0d0h
	db	07fh,070h,006h
	db	07fh,070h,00ch
	db	07fh,070h,00fh
	db	07fh,070h,003h
;;
;;  Initialize several scratch values. We don't know what all of these are for yet.
;;
X02eb:	lxi	h,212h		;; HL = 0x0212 (530.)
	shld	cursor_countdn	;; Store 0x0212 at cursor_countdn [0x212d]
	mvi	a,35h		;; A = 0x35
	sta	X212c		;; 0x212c = 0x35
	mvi	a,1		;; A = 1
	sta	X205b		;; 0x205b = 1
	sta	X2176		;; 0x2176 = 1
	lxi	h,X07ff		;; HL = 0x07ff
	shld	X2149		;; store 0xff07 at 0x2149
	mvi	a,2		;; A = 2
	sta	X2073		;; 0x2073 = 2
	mvi	a,0f7h		;; A = 0xf7
	sta	X20fa		;; 0x20fa = 0xf7
	in	42h		;; read flags buffer
	ani	4		;; And it with 0x04 (check graphics flag)
	mvi	a,1		;; A=1
	jnz	X031a		;; if no graphics skip
	sta	X2079		;; else store 1 in 0x2079
X031a:	mvi	a,0ffh		;; A = 0xff
	sta	X210e		;; 0x210e = 0xff
	sta	cursor_visible	;; set cursor_visible [0x21ba] to 0xff (initially visible)
	mvi	h,80h		;; H = 0x80
	mov	l,h		;; L = 0x80
	shld	X20c0		;; Store 0x8080 at 0x20c0
	ret

X0329:	mvi	a,40h
	out	1
	lda	X2158
	out	2
	lda	X21a4
	out	1
	call	X0394
	mvi	a,10h
	sta	X21c9
	out	62h
	ret

X0342:	lda	X21a2
	ora	a
	jz	X034b
	mvi	a,10h
X034b:	mov	b,a
	out	0c2h
	lda	X207c
	out	0c2h
	cpi	20h
	lxi	h,X0970
	jnz	X035e
	lxi	h,X0370
X035e:	shld	X2001
	lda	X21a8
	ani	10h
	rz
	mov	a,b
	out	0c2h
	ret

X036b:	lda	X21a6
	ani	20h
X0370:	jnz	X0375
	mvi	a,1
X0375:	ori	0ah
	out	0a2h
	lda	X215b
	ori	0ch
	out	0a2h
	ret

X0381:	lda	X21a2
	ora	a
	jz	X0b63
	jmp	X0b77
;;
;; memmove(0x038b): Move B bytes at DE to HL
;;
memmove:
	ldax	d		;; Load memory at DE into accumulator
	mov	m,a		;; Store it at HL
	inx	h		;; HL++
	inx	d		;; DE++
	dcr	b		;; B--
	jnz	memmove		;; until B is zero
	ret

X0394:	lda	X21a5
	ora	a
	mvi	a,1
	jnz	X039f
	mvi	a,5
X039f:	jmp	X1f7b

X03a2:	call	X0381
	call	X1ddb
	call	X036b
	jmp	X0342

X03ae:	call	X1488
	call	X0587
	lxi	h,X2177
	mov	a,m
	ora	a
	mvi	m,0
	cnz	X1a20
	lda	X21a5
	ora	a
	jz	X03ae
	xra	a
	sta	X2144
	jmp	X03ae
;;
;;  Receiver interrupt handler
;;
X03cc:	push	psw
	push	b
	push	h
	in	0		;; Read from PUSART data
	ani	7fh
	jz	X043a
	mov	c,a
	lda	X21a5
	ora	a
	jnz	X043a
	in	1		;; Read from PUSART ctrl
	ani	38h
	jz	X03ed
	mvi	c,1ah
	mvi	a,27h
	ori	10h
	out	1
X03ed:	mov	a,c
	cpi	7fh
	jz	X0437
	lda	X21a7
	ani	10h
	mov	a,c
	jz	X0409
	lxi	h,X21c2
	cpi	11h
	jz	X043e
	cpi	13h
	jz	X0444
X0409:	lxi	h,X20c0
	mov	c,m
	mov	b,h
	stax	b
	mov	a,c
	inr	a
	ani	0bfh
	mov	m,a
	mov	b,a
	lda	X20c1
	sub	b
	jnz	X0427
	mov	m,c
	mov	a,b
	inr	a
	ani	0bfh
	mov	l,a
	mvi	m,1ah
	jmp	X0431

X0427:	jp	X042c
	adi	40h
X042c:	cpi	20h
	jnz	X0437
X0431:	lxi	b,X0113
	call	X0f7e
X0437:	call	X0e47
X043a:	pop	h
	pop	b
	pop	psw
	ret
;;
;;  End of keyboard interrupt handler
;;
X043e:	mvi	a,0feh
	ana	m
	jmp	X0447

X0444:	mvi	a,1
	ora	m
X0447:	mov	m,a
	jmp	X0437

X044b:	db	30h
	dad	h
	lxi	sp,X3221
	mov	b,b
	inx	sp
	inx	h
	inr	m
	inr	h
	dcr	m
	dcr	h
	mvi	m,5eh
	stc
	mvi	h,38h
	lhld	X2839
	dcr	l
	mov	e,a
	dcr	a
	dcx	h
	mov	h,b
	mov	a,m
	mov	e,e
	mov	a,e
	mov	e,l
	mov	a,l
	dcx	sp
	lda	X3f2f
	daa
	shld	X3c2c
	mvi	l,3eh
	mov	e,h
	mov	a,h
	db	20h
X0476:
KBTab:	db	 20h,  7fh,  7fh,  7fh, 00h, 'p', 'o', 'y', 't', 'w', 'q'
	db	0c3h,  00h,  00h,  00h, ']', '[', 'i', 'u', 'r', 'e', '1'
	db	0c4h,  00h, 0c2h, 081h, '`', '-', '9', '7', '4', '3', 1bh
	db	0c1h, 0d2h, 0d0h,  08h, '=', '0', '8', '6', '5', '2', 09h
	db	0b7h, 0d3h, 0d1h, 0b0h, 0ah, '\', 'l', 'k', 'g', 'f', 'a'
	db	0b8h,  8dh, 0b2h, 0b1h, 00h, 27h, 3bh, 'j', 'h', 'd', 's'
	db	0aeh, 0ach, 0b5h, 0b4h, 0dh, '.', ',', 'n', 'b', 'x', 82h
	db	0b9h, 0b3h, 0b6h, 0adh, 00h, '/', 'm', ' ', 'v', 'c', 'z'
	rst	7
;;
;; Vertical interrupt handler
;;
X04cf:	push	psw
	push	h
	push	d
	call	X104e
	push	b
	mvi	a,9
	out	0a2h
	ei
	lda	X2065
	ora	a
	jnz	X050b
	lxi	h,X2051
	ora	m
	jz	X053e
	mvi	a,1
	sta	X2065
	ora	m
	mvi	m,0
	mvi	a,1
	sta	X205b
	lda	X2156
	jp	X0505
	mvi	a,99h
	sta	X205b
	lda	X2155
	dcr	a
X0505:	call	X122f
	sta	X207a
X050b:	lxi	b,X205b
	ldax	b
	lxi	h,X205a
	add	m
	daa
	ani	0fh
	mov	m,a
	mov	d,a
	ani	3
	out	0a2h
	mov	a,d
	rar
	ana	a
	rar
	ori	4
	out	0a2h
	mov	a,d
	ora	a
	jnz	X053e
	sta	X2065
	ldax	b
	ora	a
	lda	X2156
	jm	X0538
	lda	X2155
	dcr	a
X0538:	call	X11ce
	sta	X207a
X053e:	lxi	h,X2078
	mov	a,m
	ora	a
	jz	X054f
	dcr	m
	ani	4
	rrc
	rrc
	rrc
	sta	X2146
X054f:	lxi	h,X212c
	mov	a,m
	dcr	a
	jnz	X0569
	mvi	m,35h
	mvi	a,8
	out	0a2h
	lxi	h,X21cb
	mov	a,m
	ora	a
	jz	X056a
	out	0a2h
	xri	1
X0569:	mov	m,a
X056a:	mvi	a,40h
	sta	X2148
	lxi	h,X207f
	inr	m
	lda	X21a3
	out	42h
	lda	X2158
	out	2
	lda	X21c9
	out	62h
	pop	b
	pop	d
	pop	h
	pop	psw
	ret

X0587:	lda	X21a5
	lxi	h,X207b
	ora	m
	rnz
	call	X0675
	rz
X0593:	mov	b,a
	lda	X207b
	ora	a
	mov	a,b
	jnz	X05a9
	lda	X2079
	rlc
	mov	a,b
	jc	X05a9
	cpi	20h
	jc	X08b2
X05a9:	lhld	X2140
	pchl

X05ad:	cpi	1bh
	jnz	X05cc
	lxi	h,X05b8
	jmp	X0a18

X05b8:	cpi	32h
	jnz	X05c5
	mvi	a,1
	sta	X2079
	jmp	X0a15

X05c5:	mov	b,a
	mvi	a,1bh
	call	X05d2
	mov	a,b
X05cc:	call	X05d2
	jmp	X0c62

X05d2:	mov	c,a
X05d3:	push	b
	call	X1488
	pop	b
	in	42h
	ani	4
	jnz	X05d3
	mov	a,c
	out	0e2h
	ret

X05e3:	call	X0c46
X05e6:	push	psw
	cpi	7fh
	jz	X0673
	push	h
	push	d
	push	b
	mov	c,a
	lxi	h,X20fc
	mov	d,m
	inx	h
	mov	a,d
	add	l
	mov	l,a
	mov	a,d
	sui	2
	jp	X05ff
	mov	a,d
X05ff:	sta	X20fc
	mov	d,m
	lda	X20fa
	ora	d
	mov	b,a
	mov	a,d
	rlc
	mov	a,c
	jnc	X0616
	sui	5fh
	cpi	20h
	jnc	X0616
	mov	c,a
X0616:	mov	a,d
	ani	40h
	mov	a,c
	jz	X0624
	cpi	23h
	jnz	X0624
	mvi	c,1eh
X0624:	lda	X20fb
	ora	c
	mov	c,a
	lda	X2142
	ora	a
	jz	X0641
	lxi	h,X20f8
	lda	X2153
	cmp	m
	jnz	X0641
	mvi	m,0
	push	b
	call	X0955
	pop	b
X0641:	lhld	cursor_address
	mov	m,c
	mov	a,h
	adi	10h
	mov	h,a
	mov	m,b
	mov	a,b
	sta	X20f5
	lxi	h,X20f4
	mov	m,c
	lxi	h,X20f8
	lda	X2153
	cmp	m
	jnz	X0668
	mov	a,c
	sta	X20f4
	lda	X21a8
	ani	40h
	jmp	X066d

X0668:	inr	m
	call	X1636
	xra	a
X066d:	sta	X2142
X0670:	pop	b
	pop	d
	pop	h
X0673:	pop	psw
	ret

X0675:	lda	X21c4
	ora	a
	jnz	X0685
	lxi	h,X20c0
	mov	a,m
	inx	h
	sub	m
	jnz	X0687
X0685:	xra	a
	ret

X0687:	mov	l,m
	mvi	h,20h
	mov	d,m
	lxi	h,X20c1
	mov	a,m
	inr	a
	ani	0bfh
	ori	80h
	mov	m,a
	dcx	h
	sub	m
	jp	X069c
	adi	40h
X069c:	cpi	30h
	jnz	X06a7
	lxi	b,X0111
	call	X0f7e
X06a7:	mov	a,d
	ora	a
	ret

X06aa:	lda	key_flags	; A <- [Keys flag buffer]
	mov	e,a
	ani	80h		; bit 7 set?
	rz			; return if not
	lxi	h,X0841
	push	h
	mov	a,e
	ani	7
	cpi	4
	jm	X06c2
	xra	a
	sta	X2067
	ret

X06c2:	mov	d,a
	mvi	c,0
	mvi	b,4
	lxi	h,key_buffer+4
X06ca:	mov	a,m
	ora	a
	jz	X06e8
	push	h
	push	b
	mvi	b,3
	lxi	h,key_buffer
X06d6:	cmp	m
	jz	X06df
	inx	h
	dcr	b
	jp	X06d6
X06df:	pop	b
	pop	h
	jz	X06e7
	mvi	m,0
	dcr	c
X06e7:	inr	c
X06e8:	inx	h
	dcr	b
	jnz	X06ca
	mov	a,e
	ani	8
	rnz
	ora	d
	jnz	X06fb
	mvi	a,0e1h
	sta	X2072
	ret

X06fb:	lxi	h,X0747
	push	h
	lda	X2072
	inr	a
	jz	X0709
	sta	X2072
X0709:	lda	X21a6
	ani	40h
	rz
	mov	a,e
	ani	10h
	rnz
	lda	X2150
	lxi	h,X085f
	mvi	b,5
X071b:	cmp	m
	rz
	inx	h
	dcr	b
	jnz	X071b
	lxi	h,X2073
	dcr	m
	rnz
	mvi	m,2
	lda	X2072
	cpi	0ffh
	rnz
	mov	a,c
	cpi	1
	rnz
	mvi	b,4
	lxi	h,key_buffer+4
X0738:	mov	a,m
	ora	a
	jnz	X0743
	inx	h
	dcr	b
	jnz	X0738
	ret

X0743:	pop	h
	jmp	X0776

X0747:	mov	a,c
	cpi	4
	rp
	lxi	b,key_buffer
X074e:	lxi	h,key_buffer+4
X0751:	mov	a,m
	ora	a
	jz	X075b
	ldax	b
	cmp	m
	jz	X0766
X075b:	inx	h
	mov	a,l
	cpi	72h
	jnz	X0751
	ldax	b		; A = key (loaded from BC, typically 0x206a)
	jmp	X076c

X0766:	inx	b
	dcr	d
	jnz	X074e
	ret

X076c:	mov	b,a
	lda	X2067
	cmp	b
	mov	a,b
	sta	X2067
	rnz
X0776:	pop	h
	sta	X2150
	cpi	7bh
	jz	X1a1a
	cpi	6ah
	jz	X022c
	mov	b,e
	mov	e,a
	lda	X2144
	ora	a
	jnz	X0841
	mov	a,e
	ani	0f0h
	rrc
	rrc
	mov	d,a
	rrc
	rrc
	add	d
	mov	d,a
	mov	a,e
	sub	d
	lxi	h,X0476
	mov	e,a
	mvi	d,0
	dad	d
	mov	c,m
	mov	a,c
	ora	a
	jm	X0131
	cpi	20h
	jc	X07ff
	mov	a,b
	ani	70h
	jz	X07ff
	mov	a,c
	cpi	7bh
	jnc	X07c2
	cpi	61h
	jc	X07c2
	ani	0dfh
	mov	c,a
	jmp	X07d7

X07c2:	mov	a,b
	ani	30h
	jz	X07d7
	lxi	h,X044b
X07cb:	mov	a,m
	cmp	c
	jz	X07d5
	inx	h
	inx	h
	jmp	X07cb

X07d5:	inx	h
	mov	c,m
X07d7:	mov	a,b
	ani	10h
	jz	X07ff
	mov	a,c
	cpi	41h
	jc	X07e8
	cpi	5bh
	jc	X07fc
X07e8:	cpi	3fh
	jz	X07fc
	cpi	20h
	jz	X07fc
	cpi	7bh
	jc	X0841
	cpi	7fh
	jnc	X0841
X07fc:	ani	9fh
	mov	c,a
X07ff:	ora	c
	push	psw
	lda	X21a7
	ani	80h
	jz	X080c
	sta	X2154
X080c:	pop	psw
X080d:	ori	80h
	call	X0f18
X0812:	call	X0853
X0815:	lda	X2150
	mvi	d,4
	lxi	h,key_buffer+4
X081d:	cmp	m
	jz	X0841
	inx	h
	dcr	d
	jnz	X081d
	mvi	d,4
	lxi	h,key_buffer+4
X082b:	mov	a,m
	ora	a
	jz	X0838
	inx	h
	dcr	d
	jnz	X082b
	jmp	X0841

X0838:	lda	X2150
	mov	m,a
	mvi	a,0e1h
	sta	X2072
X0841:	xra	a
	lxi	h,key_flags
	mov	d,m
	mov	m,a
	inx	h
	mov	m,d
	inx	h
	mvi	d,4
X084c:	mov	m,a
	inx	h
	dcr	d
	jnz	X084c
	ret

X0853:	lda	X21a7
	ani	40h
	rz
	mvi	a,80h
	sta	X2147
	ret

X085f:	mov	a,e
	lhld	X3a6a
	mov	h,h
	lda	X2130
	sui	2
	rnz
	mov	d,a
	lda	X2131
	mov	e,a
X086f:	mvi	a,1
	ana	e
	jnz	X003d
X0875:	mov	a,d
	ora	a
	cnz	X08a7
	push	d
	call	X17be
	pop	d
	mvi	a,2
	ana	e
	cnz	X1f11
	mvi	a,8
	cc	X08a7
	mvi	a,4
	ana	e
	cnz	X1f62
	mvi	a,10h
	cc	X08a7
	mov	a,d
	ora	a
	jnz	X08a0
	mvi	a,8
	ana	e
	jnz	X086f
X08a0:	mov	a,d
	sta	2000h
	jmp	X0251

X08a7:	ora	d
	mov	d,a
	mvi	a,8
	ana	e
	rz
	mvi	a,80h
	ora	d
	mov	d,a
	ret

X08b2:	cpi	1bh
	jz	X099e
	cpi	10h
	jc	X08d4
	mov	e,a
	sui	18h
	ani	0fdh
	rnz
	mov	a,e
	cpi	1ah
	jz	X08cb
	cpi	18h
	rnz
X08cb:	call	X0a15
	mvi	a,2
X08d0:	jmp	X05e6

	ret

X08d4:	sui	5		;; subtract 5 from A and return if negative
	rm
	lxi	h,X08e5		;; load jump table at 8e5
	add	a		;; double a
	mov	e,a
	mvi	d,0
	dad	d		;; hl = X08e5 + 2A
	mov	e,m		;; load DE from (HL) little-endian
	inx	h
	mov	d,m
	xchg
	xra	a		;; zero A
	pchl			;; jump to address

X08e5:	dw	X0900
	dw	X0997		;; immediate return
	dw	X0938
	dw	X0941
	dw	0df9h		;; MYSTERY ADDRESS: this isn't even in AVO!!!
	dw	X0955
	dw	X0955
	dw	X0955
	dw	094bh
	dw	X08fb
	dw	X08fc

X08fb:	inr	a
X08fc:	sta	X20fc
	ret

X0900:	lda	X21a5
	ora	a
	rnz
	lhld	X217b
	mov	a,h
	cmp	l
	rz
	lxi	h,X2172
	mvi	a,10h
	ora	m
	mov	m,a
	ret

	lxi	h,X2172
	mov	a,m
	ani	0efh
	mov	m,a
	lxi	h,X217b
	mov	b,m
	inx	h
	mvi	c,14h
	lxi	d,X215c
X0924:	mov	a,m
	cmp	b
	jz	X0930
	stax	d
	inx	d
	inx	h
	dcr	c
	jnz	X0924
X0930:	dcx	d
	ldax	d
	ori	80h
	stax	d
	jmp	X0ef3

X0938:	lxi	h,X2078
	mov	a,m
	adi	8
	rc
	mov	m,a
	ret

X0941:	lxi	h,X20f8
	mov	a,m
	ora	a
	rz
	dcr	m
	jmp	X1636

X094b:	xra	a
	sta	X20f8
	jmp	X1636

	call	X094b
X0955:	lda	X21a8
	ani	20h
	cnz	X094b
	lxi	h,X20f9
	mov	d,m
	lda	X2156
	cmp	d
	jz	X0973
	call	X11bf
	mov	a,b
	cmp	d
	rz
	inr	d
	mov	m,d
X0970:	jmp	X1636

X0973:	lda	X21a6
	ani	80h
	jz	X0998
	mvi	c,1
	call	X108e
	mvi	a,0ffh
	sta	X21c3
	inr	m
	call	X0fe6
X0989:	lda	X21c3
	ora	a
	jnz	X0989
	sta	X20f4
	dcr	a
	sta	X20f5
X0997:	ret

X0998:	call	X101a
	jmp	X1012

X099e:	xra	a
	sta	X207d
	sta	X21b8
	lxi	h,X09ab
	jmp	X0a18

X09ab:	cpi	30h
	jnc	X09bd
	lxi	h,X207d
	mov	c,a
	mov	a,m
	ora	a
	jz	X09bb
	mvi	c,0ffh
X09bb:	mov	m,c
	ret

X09bd:	sta	X207e
	lxi	h,X0a15
	push	h
	lda	X207d
	ora	a
	jnz	X09dc
	lda	X21a7
	ani	20h
	lxi	h,X0a50
	jnz	X09d9
	lxi	h,X0a1c
X09d9:	jmp	X09f7

X09dc:	mov	b,a
	lda	X21a7
	ani	20h
	mov	a,b
	rz
	cpi	28h
	lxi	d,X20fd
	jz	X0c32
	cpi	29h
	jz	X0c31
	cpi	23h
	lxi	h,X0a7b
	rnz
X09f7:	lxi	d,X21b9
	xra	a
	stax	d
	lda	X207e
X09ff:	mov	c,a
X0a00:	xra	a
	add	m
	rz
	inx	h
	cmp	c
	jz	X0a0d
	inx	h
	inx	h
	jmp	X0a00

X0a0d:	stax	d
	mov	a,m
	inx	h
	mov	h,m
	mov	l,a
	xra	a
	pchl

X0a14:	pop	h
X0a15:	lxi	h,X05e6		;; HL = 0x05e6
X0a18:	shld	X2140		;; 0x2140 = 0xe605
	ret
;;
;;  This is a table of some sort.
;;
X0a1c:	mov	b,c
	sbb	e
	ldax	b
	mov	b,d
	sbb	e
	ldax	b
	mov	b,e
	sbb	e
	ldax	b
	mov	b,h
	sbb	e
	ldax	b
	mov	b,m
	ldax	b
	inr	c
	mov	b,a
	rrc
	inr	c
	mov	c,b
	sub	m
	ldax	b
	mov	c,c
	ana	e
	dcx	b
	mov	c,d
	sbb	e
	ldax	b
	mov	c,e
	sbb	e
	ldax	b
	mov	e,c
	lxi	d,X5a0b
	adi	0ch
	dcr	a
	rst	3
	dcx	b
	mvi	a,0e5h
	dcx	b
	lxi	sp,X0c57
	inr	a
	xchg
	dcx	b
	mov	e,l
	mov	h,b
	dcr	c
	nop
X0a50:	mov	h,e
	nop
	nop
	mov	b,l
	mov	d,d
	dad	b
	mov	c,l
	ana	e
	dcx	b
	lxi	sp,X0c57
	mov	e,e
	adc	m
	ldax	b
	mov	c,b
	rst	3
	dcr	c
	mov	b,h
	mov	d,l
	dad	b
	stc
	mov	l,b
	inr	c
	db	38h
	mov	m,c
	inr	c
	dcr	a
	rst	3
	dcx	b
	mvi	a,0e5h
	dcx	b
	mov	e,d
	adi	0ch
	mov	c,m
	mov	b,m
	inr	c
	mov	c,a
	mov	b,m
	inr	c
	nop
X0a7b:	inx	sp
	xra	b
	stax	d
	inr	m
	xra	h
	stax	d
	dcr	m
	mov	c,d
	inx	d
	mvi	m,0a4h
	stax	d
	stc
	mov	h,b
	dcr	c
	db	38h
	ana	a
	dcr	c
	nop
	lxi	h,X16c2
	shld	X2140
	pop	h
	ret

	mvi	a,48h
	sta	X207e
	lxi	h,0
	shld	X2130
	pop	h
X0aa2:	lxi	h,X0a15
	push	h
	lda	X207d
	ora	a
	rnz
	lxi	h,X0ad9
	call	X09f7
	lda	X21b9
	ora	a
	rnz
	lxi	h,X2130
	lda	X214b
	ora	a
	mov	e,a
	jnz	X0ac2
	inr	e
X0ac2:	mov	a,m
	push	h
	push	d
	lxi	h,X0af5
	mov	b,a
	call	X09f7
	pop	d
	pop	h
	lda	X21b9
	ora	a
	rz
	inx	h
	dcr	e
	jnz	X0ac2
	ret

X0ad9:	mov	b,h
	mvi	e,18h
	mov	b,d
	rlc
	db	18h
	mov	b,e
	dcr	d
	db	18h
	mov	c,b
	mov	d,e
	db	18h
	mov	b,c
	cpi	17h
	mov	m,d
	ana	m
	dcr	d
	mov	h,m
	mov	d,e
	db	18h
	mov	a,b
	rst	3
	stax	d
	mov	a,c
	mov	h,h
	db	8
	nop
X0af5:	mov	h,e
	pop	b
	inr	c
	mov	m,c
	mvi	d,0ch
	mov	l,m
	inx	b
	dcr	c
	mov	c,d
	mov	b,c
	dcr	d
	mov	c,e
	cm	X6c14
	db	0edh
	inx	d
	mov	l,l
	mov	a,a
	inr	c
	mov	l,b
	jp	X6713
	rst	1
	dcr	c
	nop
	lxi	h,X0b19
	shld	X2140
	pop	h
	ret

X0b19:	mov	b,a
	cpi	20h
	jc	X08b2
	cpi	1bh
	lxi	h,X2151
	jnz	X0b2e
	lxi	h,X09ab
	shld	X2140
	ret

X0b2e:	mov	a,m
	ora	a
	jnz	X0b42
	mvi	m,1
	mov	a,b
	sui	20h
	sta	X2152
	lxi	h,X0b19
	shld	X2140
	ret

X0b42:	mvi	m,0
	mov	a,b
	sui	20h
	cpi	50h
	jnc	X0b4f
	sta	X20f8
X0b4f:	call	X11bf
	lda	X2152
	inr	b
	cmp	b
	jnc	X0b5d
	sta	X20f9
X0b5d:	call	X0a15
	jmp	X1636

X0b63:	xra	a
	sta	X21a2
	call	X10ad
	mvi	c,50h
	call	X10f9
	call	X114c
	mvi	c,50h
	jmp	X0b89

X0b77:	mvi	a,1
	sta	X21a2
	call	X10ad
	mvi	c,84h
	call	X10f9
	call	X114c
	mvi	c,84h
X0b89:	xra	a
	sta	X2155
	call	X11bf
	mov	a,b
	sta	X2156
	mov	a,c
	sta	X2050
	call	X0342
	call	X1848
	mvi	a,1
	jmp	X0faa

	lxi	h,X20f9
	lda	X2155
	mov	b,a
	mov	a,m
	cmp	b
	jz	X0bb8
	ora	a
	rz
	lxi	h,X20f9
	dcr	m
	jmp	X1636

X0bb8:	lda	X21a6
	ani	80h
	jz	X0bd9
	mvi	c,1
	call	X108e
	mvi	a,0ffh
	sta	X21c3
	dcr	m
	call	X0feb
X0bce:	lda	X21c3
	ora	a
	jnz	X0bce
	sta	X20f4
	ret

X0bd9:	call	X102d
	jmp	X1012

	lxi	h,X2178
	mvi	m,1
	ret

	lxi	h,X2178
	mvi	m,0
	ret

	lxi	h,X21a7
	mov	a,m
	ori	20h
	mov	m,a
X0bf2:	lda	X21a8
	ani	80h
	mvi	h,8
	jz	X0bfe
	mvi	h,48h
X0bfe:	mov	l,h
	shld	X20fd
	shld	X20ff
	xra	a
	sta	X20fc
	ret

	mvi	h,88h
	jmp	X0c11

	mvi	h,8
X0c11:	mov	l,h
	shld	X20fd
	ret

	lxi	h,X2145
	mov	a,b
	ora	a
	jnz	X0c23
	mov	a,m
	ani	0f0h
	mov	m,a
	ret

X0c23:	sui	5
	rp
	mov	b,a
	xra	a
	stc
X0c29:	ral
	inr	b
	jnz	X0c29
	ora	m
	mov	m,a
	ret

X0c31:	inx	d
X0c32:	lda	X207e
	mov	b,a
	lxi	h,X0c4a
X0c39:	inx	h
	inx	h
	mov	a,m
	ora	a
	rz
	cmp	b
	jnz	X0c39
	inx	h
	mov	a,m
	stax	d
	ret

X0c46:	lxi	h,X20fc
	inr	m
X0c4a:	inr	m
	ret

	mov	b,c
	mov	c,b
	mov	b,d
	db	8
	db	30h
	adc	b
	lxi	sp,X3200
	add	b
	nop
X0c57:	lxi	h,X2079
	mov	a,m
	ora	a
	jz	X0a14
	mvi	m,81h
	pop	h
X0c62:	lxi	h,X05ad
	jmp	X0a18

	lxi	h,X2102
	lxi	d,X20f8
	jmp	X0c77

	lxi	h,X20f8
	lxi	d,X2102
X0c77:	mvi	b,0bh
	call	memmove
	jmp	X1636

	lxi	h,X0c8a
	mov	a,b
	ora	a
	jz	X0c97
	jmp	X09ff

X0c8a:	lxi	b,X0ca2
	inr	b
	ana	a
	inr	c
	dcr	b
	ora	e
	inr	c
	rlc
	cmp	e
	inr	c
	nop
X0c97:	sta	X20fb
	lxi	h,X20fa
	mov	a,m
	ori	0f7h
	mov	m,a
	ret

X0ca2:	mvi	a,0fbh
	jmp	X0cb5

	lda	X21c8
	ora	a
	jnz	X0cbb
	mvi	a,0fdh
	jmp	X0cb5

	mvi	a,0feh
X0cb5:	lxi	h,X20fa
	ana	m
	mov	m,a
	ret

X0cbb:	mvi	a,80h
	sta	X20fb
	ret

	lda	X2130
	ora	a
	rnz
	lxi	h,X2172
	mov	a,m
	ori	4
	mov	m,a
	ret

	mvi	a,0fbh
	call	X0dbf
	lda	X21a7
	ani	20h
	jnz	X0ce3
	mvi	m,0dah
	dcx	h
	mvi	m,2fh
	jmp	X0ef3

X0ce3:	mvi	m,3fh
	inx	h
	mvi	a,31h
	call	X0db9
	in	42h
	mov	b,a
	cma
	ani	6
	mov	c,a
	mov	a,b
	ani	8
	jz	X0cf9
	inr	c
X0cf9:	mov	a,c
	ori	30h
	mov	m,a
	inx	h
	mvi	m,0e3h
	jmp	X0ef3

	lda	X21b8
	ora	a
	rnz
	mov	a,b
	lxi	h,X2172
	cpi	6
	jz	X0d32
	cpi	5
	rnz
	mov	a,m
	ori	8
	mov	m,a
	ret

	mvi	a,0f7h
	call	X0dbf
	mvi	b,3
	lda	X21bd
	ora	a
	mov	a,b
	jnz	X0d29
	xra	a
X0d29:	ori	30h
	mov	m,a
	inx	h
	mvi	m,0eeh
X0d2f:	jmp	X0ef3

X0d32:	mov	a,m
	ori	1
	mov	m,a
	ret

	mvi	a,0feh
	call	X0dbf
	lda	X20f9
	mov	b,a
	lda	X2101
	ora	a
	jz	X0d4a
	lda	X2155
X0d4a:	mov	c,a
	mov	a,b
	sub	c
	inr	a
	call	X0d7a
	call	X0dbb
	lda	X20f8
	inr	a
	call	X0d7a
	mvi	m,0d2h
	jmp	X0ef3

	in	42h
	ani	4
	rnz
	mvi	c,81h
	call	X108e
	mvi	a,0ffh
	out	0e2h
	nop
X0d6f:	call	X1488
	in	42h
	ani	4
	jnz	X0d6f
	ret

X0d7a:	mov	e,a
	mvi	d,30h
	mvi	c,64h
	call	X0d99
	jz	X0d88
	mov	m,a
	inx	h
	dcr	d
X0d88:	mvi	c,0ah
	call	X0d99
	jz	X0d93
	dcr	d
	mov	m,a
	inx	h
X0d93:	mov	a,e
	ori	30h
	mov	m,a
	inx	h
	ret

X0d99:	mov	a,e
	mvi	b,30h
X0d9c:	inr	b
	sub	c
	jp	X0d9c
	add	c
	dcr	b
	mov	e,a
	mov	a,b
	cmp	d
	ret

	mvi	a,45h
	sta	X21c7
	call	X0381
	mvi	a,45h
	sta	X20f4
	xra	a
	sta	X21c7
	ret

X0db9:	mov	m,a
	inx	h
X0dbb:	mvi	m,3bh
	inx	h
	ret

X0dbf:	lxi	h,X2172
	ana	m
	mov	m,a
	lxi	h,X215c
	mvi	m,1bh
	inx	h
	mvi	m,5bh
	inx	h
	ret

	mov	b,d
	mov	a,b
	ora	a
	jnz	X0dd8
	call	X0de5
	ret

X0dd8:	cpi	3
	rnz
	call	X0dec
	ret

	call	X0e23
	ora	m
	mov	m,a
	ret

X0de5:	call	X0e23
	cma
	ana	m
	mov	m,a
	ret

X0dec:	lxi	h,X2191
X0def:	xra	a
	mov	m,a
	inx	h
	mov	a,l
	cpi	0a2h
	jnz	X0def
	ret

X0df9:	call	X0e23
X0dfc:	inr	c
	ora	a
	rar
	jc	X0e0b
X0e02:	mov	d,a
	ana	m
	mov	a,d
	jz	X0dfc
	jmp	X0e15

X0e0b:	inx	h
	mov	a,l
	cpi	0a2h
	mvi	a,80h
	jnz	X0e02
	dcr	c
X0e15:	lda	X2153
	cmp	c
	jc	X0e1d
	mov	a,c
X0e1d:	sta	X20f8
	jmp	X1636

X0e23:	lda	X20f8
	mov	c,a
X0e27:	mov	d,a
	lxi	h,X2191
X0e2b:	rrc
	rrc
	rrc
	ani	1fh
	add	l
	mov	l,a
	mov	a,d
	ani	7
	mov	d,a
	mvi	a,80h
X0e38:	dcr	d
	rm
	rrc
	jmp	X0e38

X0e3e:	lda	X21a5
	lxi	h,X207b
	ora	m
	mov	b,a
	rnz
X0e47:	in	42h
	ani	1
	rz
	lxi	h,X21c1
	mov	a,m
	ora	a
	mvi	m,0
	dcx	h
	rz
	mov	a,m
	out	0
	ret

X0e59:	di
	call	X0e3e
	ei
	mov	a,b
	ora	a
	jnz	X0e6d
	in	42h
	ani	1
	rz
	lda	X21c2
	ora	a
	rnz
X0e6d:	lxi	h,X2173
	mov	a,m
	ora	a
	jz	X0e79
	lhld	X2174
	pchl

X0e79:	lda	X2172
	ora	a
	rz
	mvi	e,0
X0e80:	rar
	jc	X0e89
	inr	e
	inr	e
	jmp	X0e80

X0e89:	mvi	d,0
	lxi	h,X0e94
	dad	d
	mov	a,m
	inx	h
	mov	h,m
	mov	l,a
	pchl

X0e94:	stc
	dcr	c
	rp
	stax	d
	aci	0ch
	dad	d
	dcr	c
	inx	d
	dad	b
	ana	b
	mvi	c,21h
	mov	e,h
	db	20h
	mov	b,m
	mov	d,h
	mov	e,l
	inx	d
	mvi	c,8
X0ea9:	ldax	d
	mov	m,a
	inx	h
	inx	d
	dcr	c
	jnz	X0ea9
	lxi	h,X2143
	dcr	m
	mov	a,m
	mov	c,a
	jnz	X0ec1
	lxi	h,X2172
	mov	a,m
	ani	0dfh
	mov	m,a
X0ec1:	lda	X21a5
	ora	a
	jnz	X0ecf
	mov	a,c
	cpi	5
	jnc	X0ed2
	xra	a
X0ecf:	sta	X2144
X0ed2:	mov	a,b
	ani	80h
	ral
	cmc
	rar
	sta	X2173
	lxi	h,X0ea0
	shld	X2174
X0ee1:	mov	a,b
	ani	7fh
	mov	b,a
	lda	X21a5
	lxi	h,X207b
	ora	m
	mov	a,b
	jnz	X0593
	out	0
	ret

X0ef3:	lxi	h,X0f01
	shld	X2174
	xra	a
	sta	X2171
	inr	a
	sta	X2173
X0f01:	lxi	h,X2171
	mov	a,m
	inr	m
	lxi	h,X215c
	add	l
	mov	l,a
	mov	b,m
	mov	a,b
	ora	a
	jp	X0ee1
	xra	a
	sta	X2173
	jmp	X0ee1

X0f18:	push	h
	push	d
	mov	d,a
	lda	X21a7
	ani	10h
	jz	X0f2b
	mov	a,d
	sui	91h
	ani	0fdh
	jz	X0f61
X0f2b:	lxi	h,X2172
	mov	a,m
	ori	20h
	mov	m,a
X0f32:	lxi	h,X2143
	mov	a,m
	inr	m
	lxi	h,X205c
	mov	e,a
	add	l
	mov	l,a
	mov	m,d
	mvi	a,8dh
	cmp	d
	jnz	X0f4e
	lda	X21a8
	ani	20h
	mvi	d,8ah
	jnz	X0f32
X0f4e:	lda	X21a5
	ora	a
	jnz	X0f5b
	mvi	a,5
	cmp	e
	mvi	a,0
	rar
X0f5b:	sta	X2144
X0f5e:	pop	d
	pop	h
	ret

X0f61:	mov	a,d
	ani	7fh
	mov	d,a
	lxi	h,X21c1
	mov	a,m
	ora	a
	jnz	X0f75
	dcx	h
	mov	a,m
	cmp	d
	jnz	X0f75
	inx	h
	mov	m,d
X0f75:	mov	c,d
	mvi	b,2
	call	X0f7e
	jmp	X0f5e

X0f7e:	lda	X21a7
	ani	10h
	rz
	lda	X21a5
	ora	a
	rnz
	mov	a,c
	lxi	h,X21bf
	cpi	13h
	mov	a,b
	jz	X0f9e
	cma
	ana	m
	mov	m,a
	push	psw
	ani	2
	sta	X21c4
	pop	psw
	rnz
X0f9e:	ora	m
	mov	m,a
	mov	a,c
	lxi	h,X21c0
	cmp	m
	rz
	mov	m,a
	inx	h
	mov	m,a
	ret

;
; Main loop?
;
; Absent any interrupts, execution gravitates here:
;
;    0FAA:
;	...
;	call    1488
;	  call	  1493		; read port 0x42 (check flags buffer)
;	  call    06aa		; check byte at [2068]
;	  cli
;	  call    0e3e		; fetch byte at [21A5], OR byte at [207B]
;	  sti
;	  ; return byte at [2172] in A
;	jmp	0FAE
;
X0faa:	lxi	h,X207f
	add	m
X0fae:	cmp	m
	rz
	push	h
	push	psw
	lda	X207b
	ora	a
	cz	X1488
	pop	psw
	pop	h
	jmp	X0fae
;
; End of main loop?
;

X0fbe:	lhld	scratch_start	; HL = [0x204e]
	mov	a,h
	ori	0f0h
	mov	h,a
	shld	scratch_start	; update [0x204e]
X0fc8:	lda	X2050
X0fcb:	mov	b,a
	mov	a,h
	ani	0fh
	ori	20h
	mov	h,a
	adi	10h
	mov	d,a
	mov	e,l
	mvi	a,0ffh
X0fd8:	mvi	m,0
	stax	d
	inx	d
	inx	h
	dcr	b
	jnz	X0fd8
	inr	a
	sta	X21c3
	ret

X0fe6:	mvi	b,0ffh
	jmp	X0fed

X0feb:	mvi	b,1
X0fed:	lxi	h,X2155
	mov	d,m
	inx	h
	mov	e,m
	mov	a,b
	ora	a
	mov	a,d
	jp	X0ffa
	mov	a,e
X0ffa:	call	X13e6
	mov	a,e
	sub	d
X0fff:	mov	c,a
	lda	X212b
X1003:	mov	d,m
	mov	m,a
	mov	a,b
	add	l
	mov	l,a
	dcr	c
	mov	a,d
	jp	X1003
	ani	7fh
	sta	X212b
X1012:	mvi	a,0ffh
	sta	X210e
	jmp	X1636

X101a:	call	X1191
	lda	X2156
	call	X122f
	call	X0fe6
	lda	X2155
	dcr	a
	jmp	X103e

X102d:	call	X1191
	lda	X2155
	dcr	a
	call	X122f
	call	X0feb
	lda	X2156
	dcr	a
X103e:	call	X11ce
	ei
	sta	X207a
	lxi	h,X2156
	mov	a,m
	dcx	h
	sub	m
	cpi	17h
	rnz
X104e:	lxi	h,X207a
	mov	a,m
	mvi	m,0
	ora	a
	rz
	lhld	X2056
	xchg
	lhld	X2058
	mov	m,d
	inx	h
	mov	m,e
	lhld	X2179
	xchg
	lhld	X2075
	mov	m,d
	inx	h
	mov	m,e
X106a:	lxi	h,X2056
	shld	X2058
	shld	X2075
	ret

X1074:	call	X13e3
	ani	80h
	sta	X2157
	call	X138d
	shld	X214e
	ret
;;
;; memset(0x1083): Set DE bytes at address HL to B
;;
memset:	mov	m,b		;; M <- B
	inx	h		;; HL++
	dcx	d		;; DE--
	mov	a,d		;;
	ora	e		;; A = D | E
	jnz	memset		;; repeat if A != 0
	ret

	mvi	c,0
X108e:	lxi	h,X2051
	di
	lda	X2065
	ora	m
	ei
	jz	X10a7
	mov	a,c
	rar
	push	b
	cc	X1488
	call	X1493
	pop	b
	jmp	X108e

X10a7:	mov	a,c
	ral
	rnc
	jmp	X1191

X10ad:	lxi	h,X0670
	shld	X2004
	xra	a
	sta	X2051
	sta	X2065
	sta	X205a
	out	0a2h
	mvi	a,4
	out	0a2h
	call	X106a
	ei
	mvi	a,1
	call	X0faa
	lxi	h,X22d0
	mov	a,h
	adi	10h
	mov	d,a
	mov	e,l
	lxi	b,X0d2f
X10d7:	lda	X21c7
	mov	m,a
	inx	h
	mvi	a,0ffh
	stax	d
	inx	d
	dcx	b
	mov	a,b
	ora	c
	jnz	X10d7
	lda	X21c7
	sta	X20f4
	xra	a
	sta	X20f9
	sta	X20f8
	mvi	a,0ffh
	sta	X20f5
	ret

X10f9:	xra	a
	sta	X2051
X10fd:	lda	X2065
	ora	a
	jnz	X10fd
	lxi	h,X22d0
	mvi	b,0
	dad	b
	call	X11bf
	inr	c
	call	X1136
	push	h
	mvi	b,1
	call	X1136
	pop	h
	mvi	m,7fh
	inx	h
	shld	X2054
	mvi	m,70h
	inx	h
	mvi	m,6
	mov	a,c
	call	X13de
	mvi	m,7fh
	dcr	c
	mvi	a,3
	sta	X2002
	lxi	h,Xd0f2
	shld	X2004
	ret

X1136:	mvi	m,7fh
	inx	h
	mov	d,h
	mov	e,l
	inx	d
	inx	d
	mov	a,d
	ori	0f0h
	mov	m,a
	inx	h
	mov	m,e
	mov	a,c
	call	X13de
	dcr	b
	jnz	X1136
	ret

X114c:	lxi	h,X20c2
	inr	c
	inr	c
	inr	c
	lxi	d,X22d0
	mvi	b,0
	mvi	a,19h
X1159:	mov	m,e
	inx	h
	mov	m,d
	inx	h
	xchg
	dad	b
	xchg
	dcr	a
	jnz	X1159
	sta	X2155
	call	X11bf
	mov	a,b
	sta	X2156
	inr	a
	sta	X212b
	lhld	X20f2
	mvi	a,17h
	cmp	b
	jz	X117e
	lhld	X20de
X117e:	mov	a,h
	ori	0f0h
	mov	h,a
	shld	scratch_start	; update [0x204e]
	lxi	h,X2113
	xra	a
X1189:	mov	m,a
	inr	l
	inr	a
	dcr	b
	jp	X1189
	ret

X1191:	di
	lda	X207a
	ora	a
	jz	X11a0
X1199:	ei
	call	X1488
	jmp	X1191

X11a0:	lda	X2065
	ora	a
	jnz	X11b0
	lda	X2051
	ora	a
	ei
	rz
	jmp	X1199

X11b0:	lda	X205b
	lxi	h,X205a
	add	m
	daa
	ani	0fh
	jz	X1199
	ei
	ret

X11bf:	push	h
	mvi	b,17h
	lda	X21a2
	lxi	h,X21c8
	ana	m
	pop	h
	rz
	mvi	b,0dh
	ret

X11ce:	ora	a
	jp	X11e8
	lxi	h,X2004
	push	h
	mov	a,m
	inx	h
	mov	l,m
	ori	0f0h
	mov	h,a
	shld	scratch_start	; update [0x204e]
	call	X1290
	pop	h
	mov	b,d
	mov	c,e
	jmp	X120a

X11e8:	call	X127f
	call	X1290
	push	h
	push	d
	xchg
	call	X1290
	mov	b,d
	mov	c,e
	pop	d
	mov	a,d
	ori	0f0h
	mov	h,a
	mov	l,e
	shld	scratch_start	; update [0x204e]
	pop	h
	mov	a,h
	ori	9fh
	inr	a
	jnz	X1211
	call	X1299
X120a:	di
	shld	X2075
	jmp	X1228

X1211:	call	X129d
	lda	X2050
	rrc
	mov	d,a
	call	X13de
	inx	h
	di
	shld	X2075
	mov	a,d
	call	X13de
	mov	m,b
	inx	h
	mov	m,c
X1228:	mov	h,b
	mov	l,c
	shld	X2179
	ei
	ret

X122f:	push	psw
	call	X0fbe
	pop	psw
	ora	a
	lxi	h,X2004
	jm	X1248
	call	X127f
	mov	a,h
	ori	9fh
	inr	a
	jnz	X1252
	call	X1299
X1248:	di
	shld	X2058
	mov	b,m
	inx	h
	mov	c,m
	jmp	X1271

X1252:	call	X129d
	lda	X2050
	rrc
	mov	b,a
	call	X13de
	inx	h
	di
	shld	X2058
	mov	a,b
	mov	b,m
	inx	h
	mov	c,m
	call	X13de
	xchg
	lhld	scratch_start	; load [0x204e]
	xchg
	mov	m,e
	dcx	h
	mov	m,d
X1271:	lhld	scratch_start	; load [0x204e]
	shld	X2056
	call	X1299
	mov	m,b
	inx	h
	mov	m,c
	ei
	ret

X127f:	inr	a
	mov	b,a
	lxi	h,X2004
X1284:	mov	a,m
	inx	h
	mov	l,m
	mov	h,a
	dcr	b
	rz
	call	X1299
	jmp	X1284

X1290:	push	h
	call	X1299
	mov	d,m
	inx	h
	mov	e,m
	pop	h
	ret

X1299:	call	X13db
	inx	h
X129d:	mov	a,h
	ani	0fh
	ori	20h
	mov	h,a
	ret

	call	X12b0
	mov	d,b
	call	X12b0
	db	30h
	call	X12b0
	db	10h
X12b0:	call	X1191
	lxi	h,X2113
	lda	X20f9
	add	l
	mov	l,a
	mov	a,m
	ori	80h
	mov	m,a
	call	X138d
	call	X13c3
	pop	h
	mov	a,m
	call	X1395
	lda	X2153
	lxi	h,X20f8
	ora	a
	rar
	cmp	m
	jnc	X1012
	lxi	h,X20f4
	shld	cursor_address
	jmp	X1012

	lda	X2130
	cpi	2
	rnc
	sta	X2176
X12e8:	lxi	h,X2172
	mov	a,m
	ori	2
	mov	m,a
	ret

	mvi	a,0fdh
	call	X0dbf
	lda	X2176
	ori	32h
	call	X0db9
	lda	X21a9
	push	psw
	ani	0c0h
	ori	18h
	add	a
	inr	a
	jp	X1310
	rar
	rlc
	ori	4
	ani	7fh
X1310:	call	X0db9
	mvi	b,31h
	pop	psw
	ani	20h
	jnz	X131c
	inr	b
X131c:	mov	a,b
	call	X0db9
	lda	X21ab
	rrc
	call	X0d7a
	call	X0dbb
	lda	X21ac
	rrc
	call	X0d7a
	call	X0dbb
	mvi	a,31h
	call	X0db9
	lda	X21aa
	ani	0f0h
	rrc
	rrc
	rrc
	rrc
	call	X0d7a
	mvi	m,0f8h
	jmp	X0ef3

X134a:	lxi	h,X2157
	mov	a,m
	ora	a
	rz
	call	X1191
	lxi	h,X2113
	lda	X20f9
	add	l
	mov	l,a
	mov	a,m
	ani	7fh
	mov	m,a
	call	X138d
	lda	X2050
	rrc
	mov	b,a
	call	X13de
	xra	a
X136b:	mov	m,a
	inx	h
	dcr	b
	jnz	X136b
	mvi	a,0f0h
	sta	X210e
	call	X1395
	xra	a
	sta	X2157
	jmp	X1636

X1380:	lda	X20f9
	call	X13e6
X1386:	lxi	h,X20c2
	add	a
	add	l
	mov	l,a
	ret

X138d:	call	X1380
X1390:	mov	a,m
	inx	h
	mov	h,m
	mov	l,a
	ret

X1395:	ani	70h
	mov	b,a
	lda	X20f9
	dcr	a
	lxi	h,X2004
	jm	X13bd
	call	X13e6
	mov	d,a
	ani	7fh
	call	X1386
	call	X1390
	lda	X2050
	rrc
	mov	e,a
	inx	h
	inr	d
	dcr	d
	mvi	d,0
	dad	d
	cm	X13bd
	dad	d
X13bd:	mov	a,m
	ani	8fh
	ora	b
	mov	m,a
	ret

X13c3:	lda	X2050
	rrc
	mov	d,h
	mov	e,l
	call	X13de
	xchg
	call	X13db
	mvi	b,3
X13d2:	mov	a,m
	stax	d
	inx	d
	inx	h
	dcr	b
	jnz	X13d2
	ret

X13db:	lda	X2050
X13de:	add	l
	mov	l,a
	rnc
	inr	h
	ret

X13e3:	lda	X20f9
X13e6:	lxi	h,X2113
	add	l
	mov	l,a
	mov	a,m
	ret

	mvi	c,0
	jmp	X13f4

	mvi	c,0ffh
X13f4:	lda	X21b8
	ora	a
	lxi	h,X1426
	jz	X1404
	cpi	3fh
	rnz
	lxi	h,X140a
X1404:	mov	a,b
	mov	b,c
	call	X09ff
	ret

X140a:	lxi	b,X142a
	stax	b
	cma
	inr	d
	inx	b
	mov	d,a
	inr	d
	inr	b
	mov	b,a
	inr	d
	dcr	b
	mov	c,m
	inr	d
	mvi	b,3fh
	inr	d
	rlc
	mov	h,m
	inr	d
	db	8
	mov	e,a
	inr	d
	dad	b
	mov	l,l
	inr	d
	nop
X1426:	inr	d
	db	38h
	inr	d
	nop
X142a:	lxi	h,X21bc
	mov	m,b
	ret

	call	X1476
	ana	a
	lxi	h,Xc320
	jp	Xcd0b
	hlt

	inr	d
	xra	b
	lxi	h,Xc920
	lxi	h,X2101
	mov	m,b
	call	X1848
	ret

	call	X1476
	ana	m
	lxi	h,Xc980
	call	X1476
	ana	m
	lxi	h,Xc320
	mov	l,e
	inx	b
	lxi	h,X21a2
	mov	m,b
	call	X0381
	ret

	call	X1476
	ana	m
	lxi	h,Xc940
	call	X1476
	xra	b
	lxi	h,Xc940
	call	X1476
	xra	b
	lxi	h,Xc310
	mov	b,d
	inx	b
X1476:	pop	h
	mov	e,m
	inx	h
	mov	d,m
	inx	h
	mov	a,m
	inx	h
	xchg
	mov	c,a
	cma
	ana	m
	mov	m,a
	mov	a,b
	ana	c
	ora	m
	mov	m,a
	xchg
	pchl

X1488:	call	X1493
	ani	10h
	cz	X06aa
	jmp	X0e59
;;
;; SUBROUTINE A
;;
X1493:	in	42h		;; Read flags buffer
	ani	80h		;; check if transmit buffer is empty
	rz			;; if zero, return
	lxi	h,X2144		;; HL = 0x2144
	mov	a,m		;; Load from 2144
	ora	a		;; Check if zero
	jz	X14a2		;;
	mvi	a,10h		;; If not, A = 10 (else A is zero)
X14a2:	lxi	h,X21a5		;;
	ora	m		;; or bits from 0x21a5
	lxi	h,X2145		;;
	ora	m		;; or bits from 0x2145
	inx	h		;;
	ora	m		;; ... and 0x2146
	inx	h		;;
	ora	m		;; ... and 0x2147
	mvi	m,0		;; zero 0x2147
	inx	h		;;
	ora	m		;; ... and 0x2148
	mvi	m,0		;; zero 0x2148
	out	82h		;; Write to keyboard buffer
	lxi	h,X2074		;;
	inr	m		;; Increment what's at 0x2074
	lda	X2077		;; load what's at 0x2077
	ora	a		;; return if it's not zero
	rnz			;;
	lda	X2065		;; A = [0x2065]
	lxi	h,X2051		;;
	ora	m		;; return if [0x2065] | [0x2051] != 0
	rnz

	lhld	cursor_countdn	; HL = cursor countdown from [0x212d]
	dcx	h
	mov	a,h
	ora	l
	jz	X14d4
	shld	cursor_countdn	; update cursor countdown with decremented value
	ret
;
; Cursor countdown reached zero, time to invert the cursor;
; note that the cursor is on (visible) twice as long as it's off
;
X14d4:	lda	cursor_visible	; A = 0xff (visible) or 0x00 (invisible)
	xri	0ffh		; invert
	sta	cursor_visible	;
	lxi	h,212h		; new initial count; start with 0x0212
	jnz	X14e5		; and stick with that if cursor still visible
	lxi	h,109h		; otherwise, use half that value (0x0109) if invisible
X14e5:	shld	cursor_countdn	; store new cursor countdown
	lhld	cursor_address
	mov	b,m		; B = current cursor
	lda	X2159		; A = cursor inversion mask (typically 0x80)
	xra	b		; B = new (inverted) cursor
	mov	m,a		; store new cursor
;
; Guessing this is AVO-only code, because it's monkeying with cursor_address + 0x1000, which doesn't exist without AVO
;
	lxi	d,1000h
	dad	d
	lda	X215a
	xra	m
	mov	m,a
	ret

	mov	m,h
	mov	a,b
	ora	a
	jz	X1515
	dcr	a
	jz	X150a
	dcr	a
	rnz
	call	X1515
X150a:	lda	X20f8
	mov	b,a
	inr	b
	lhld	X214e
	jmp	X1529

X1515:	lda	X20f8
	mov	b,a
	lda	X2157
	ora	a
	lda	X2050
	jz	X1524
	rrc
X1524:	sub	b
	mov	b,a
	lhld	cursor_address
X1529:	mov	a,h
	adi	10h
	mov	d,a
	mov	e,l
	mvi	a,0ffh
X1530:	stax	d
	mvi	m,0
	inx	h
	inx	d
	dcr	b
	jnz	X1530
	sta	X20f5
	xra	a
	sta	X20f4
	ret

	mov	a,b
	ora	a
	jz	X156a
	dcr	a
	jz	X1555
	dcr	a
	rnz
	call	X1555
	call	X156a
	jmp	X134a

X1555:	lxi	h,X20f9
	mov	a,m
	push	psw
	mov	b,a
	xra	a
	mov	m,a
	mvi	c,0ffh
	call	X1586
	pop	psw
	mov	m,a
	call	X1074
	jmp	X150a

X156a:	lda	X20f8
	ora	a
	cz	X134a
	call	X1515
	lxi	h,X20f9
	mov	a,m
	push	psw
	mov	c,a
	mvi	a,17h
	sub	c
	mov	b,a
	call	X1586
	pop	psw
	mov	m,a
	jmp	X1074

X1586:	dcr	b
	rm
	inr	c
	mov	m,c
	push	b
	push	h
	call	X13e3
	ani	7fh
	mov	m,a
	mvi	a,70h
	call	X1395
	call	X1074
	lda	X2050
	mov	b,a
	call	X1529
	pop	h
	pop	b
	jmp	X1586

	mvi	c,81h
	call	X108e
	call	X11bf
	lda	X2130
	ora	a
	jz	X15b6
	dcr	a
X15b6:	mov	d,a
	lda	X2131
	ora	a
	jnz	X15c0
	mov	a,b
	inr	a
X15c0:	dcr	a
	mov	e,a
	mov	a,b
	cmp	e
	rc
	mov	a,d
	cmp	e
	rnc
	lxi	h,X2155
	mov	m,d
	inx	h
	mov	m,e
	mov	c,e
	mov	b,d
	mov	a,c
	sub	b
	inr	a
	mov	e,a
	lxi	h,X2004
	mov	a,b
	ora	a
	jz	X15e8
	mov	d,b
X15dd:	mov	a,m
	ani	7fh
	mov	m,a
	call	X162b
	dcr	d
	jnz	X15dd
X15e8:	mov	a,m
	ori	80h
	mov	m,a
	call	X162b
	dcr	e
	jnz	X15e8
	mvi	a,17h
	sub	c
	jz	X1605
	mov	d,a
X15fa:	mov	a,m
	ani	7fh
	mov	m,a
	call	X162b
	dcr	d
	jnz	X15fa
X1605:	mov	a,b
	sta	X2155
	mov	a,c
	sta	X2156
	lxi	h,X2113
	mvi	c,18h
X1612:	mov	a,m
	ora	a
	jp	X1623
	push	h
	call	X1386
	mov	a,m
	inx	h
	mov	h,m
	mov	l,a
	call	X13c3
	pop	h
X1623:	inx	h
	dcr	c
	jnz	X1612
	jmp	X1848

X162b:	inx	h
	mov	l,m
	ani	0fh
	ori	20h
	mov	h,a
	inx	h
	jmp	X13db

X1636:	lxi	h,13
	shld	cursor_countdn		; reset cursor countdown to 13 (0x000d)
	xra	a
	sta	cursor_visible		; reset cursor visibility
	lhld	cursor_address
	lda	X20f4
	mov	b,a
	mov	m,a
	mov	a,h
	adi	10h
	mov	h,a
	lda	X20f5
	mov	m,a
	lda	X2050
	dcr	a
	mov	e,a
	lda	X207b
	ora	a
	jnz	X167b
	lda	X20f9
	lxi	h,X210e
	cmp	m
	jz	X167f
	mov	m,a
	call	X1074
	xra	a
	sta	X2154
	lxi	h,X2157
	mov	a,m
	ora	a
	jz	X167b
	mov	a,e
	dcr	a
	ora	a
	rar
	mov	e,a
X167b:	mov	a,e
	sta	X2153
X167f:	lxi	h,X2153
	lxi	d,X20f8
	ldax	d
	cmp	m
	jc	X168c
	mov	a,m
	stax	d
X168c:	lda	X21bb
	adi	8
	sub	m
	jnz	X16a1
	inx	h
	ora	m
	jz	X16a1
	call	X0938
	xra	a
	sta	X2154
X16a1:	lda	X20f8
	sta	X21bb
	lhld	X214e
	call	X13de
	shld	cursor_address
	mov	a,m
	sta	X20f4
	mov	b,a
	mov	a,h
	adi	10h
	mov	h,a
	mov	a,m
	sta	X20f5
	lhld	cursor_address
	mov	m,b
	ret

X16c2:	mov	b,a
	lxi	h,X16f1
	shld	X2140
	xra	a
	sta	X212f
	sta	X214b
	sta	X207d
	lxi	h,X2130
	mvi	c,0fh
	xra	a
X16d9:	mov	m,a
	inx	h
	dcr	c
	jnz	X16d9
	lxi	h,X21b8
	mvi	m,0
	mov	a,b
	cpi	40h
	jnc	X16f2
	cpi	3ch
	jc	X16f2
	mov	m,a
	ret

X16f1:	mov	b,a
X16f2:	mov	a,b
	cpi	3ah
	jnc	X1717
	sui	30h
	jm	X1717
	mov	c,a
	lxi	h,X212f
	mov	a,m
	cpi	1ah
	jnc	X1713
	rlc
	mov	b,a
	rlc
	rlc
	add	b
	jc	X1713
	add	c
	jnc	X1715
X1713:	mvi	a,0ffh
X1715:	mov	m,a
	ret

X1717:	lxi	d,X2130
	push	psw
	lxi	h,X214b
	mov	c,m
	mvi	b,0
	xchg
	dad	b
	lxi	b,X212f
	ldax	b
	mov	m,a
	xra	a
	stax	b
	ldax	d
	cpi	0fh
	jz	X1732
	inr	a
	stax	d
X1732:	pop	psw
X1733:	mov	b,a
	cpi	3bh
	rz
	ani	0c0h
	mov	a,b
	jz	X1743
	sta	X207e
	jmp	X0aa2

X1743:	lxi	h,X207d
	add	m
	jnc	X174c
	mvi	a,0ffh
X174c:	mov	m,a
	lxi	h,X1733
	shld	X2140
	ret

X1754:	mvi	d,0
	mvi	b,1
	jmp	X1762
;;
;;  Third initialization call?
;;
X175b:	call	X02c0		;; Initialize start of screen RAM and wipe attribute RAM to 0xff
	mvi	b,0ah		;; B = 0x0a
	mvi	d,1		;; D = 1
X1762:	push	b		;; push B, D
	push	d		;;
	call	X17be		;; Display wait message
	pop	d		;; pop D
	di			;; disable interrupts(???)
	lxi	h,X217b		;; HL = 0x217b
	mvi	e,33h		;; E = 0x33
	mvi	c,1		;; C = 1
	xra	a		;; A = 0
X1771:	sta	X21ae		;; 0x21ae = A
	mov	a,c		;; A = C
	sta	X21ad		;; 0x21ad = A
	push	d		;; push D,H
	push	h		;;
	mov	a,d		;; A=D
	ora	a		;; or A
	mov	a,m		;; load A from HL
	sta	X21af		;; store it in 0x21af
	cz	X18ae		;; if A is 0 call X18ae
	call	X18a3		;; call X18a3
	pop	h		;; pop H,D
	pop	d
	lda	X21af
	dcr	e
	jz	X179e
	mov	m,a
	lda	X21ad
	rlc
	xra	m
	mov	c,a
	inx	h
	lda	X21ae
	inr	a
	jmp	X1771

X179e:	cmp	m
	pop	b
	mvi	c,0
	jz	X17ac
	dcr	b
	jnz	X1762
	call	X17d0
X17ac:	mov	a,c
	ora	a
	push	psw
	mvi	c,40h
	mvi	a,63h
	call	X192b
	lxi	h,Xd0f2
	shld	X2004
	pop	psw
	ret
;;
;;  Show wait message
;;
X17be:	lxi	d,X17ec		;; DE = 0x17ec
	mvi	b,7		;; B = 7
	lxi	h,X21cc		;; HL = 0x21cc
	call	memmove		;; Initialize 0x21cc to Wait message
	lxi	h,Xcc71		;; HL = 0xcc71
	shld	X2004		;; retarget screen ram to display wait message
	ret

X17d0:	lxi	h,X217b
	mvi	b,27h
X17d5:	mvi	m,80h
	inx	h
	dcr	b
	jnz	X17d5
	lxi	d,X17f3		;; DE = 0x17f3
	mvi	b,0bh		;; B = 11
	call	memmove		;; store
	mvi	c,1
	mvi	a,30h
	sta	X2078
	ret
X17ec:
	db	'Wait'
	db	07fh,070h,06h
X17f3:
	db	0,8,06eh,020h
	db	0d0h,050h,0,020h
	db	0,0e0h,0e0h
X17fe:
	lda	X2155
	lxi	b,X00ff
	jmp	X180f

	call	X11bf
	lda	X2156
	mvi	c,1
X180f:	lxi	h,X20f9
	jmp	X1825

X1815:	lda	X2153
	lxi	b,Xff01
	jmp	X1822

X181e:	xra	a
	lxi	b,X00ff
X1822:	lxi	h,X20f8
X1825:	mov	d,a
	lda	X21b8
	ora	a
	jnz	X0a15
	lda	X2130
	ora	a
	jnz	X1835
	inr	a
X1835:	mov	e,a
	mov	a,m
X1837:	cmp	d
	jz	X1844
	cmp	b
	jz	X1844
	add	c
	dcr	e
	jnz	X1837
X1844:	mov	m,a
	jmp	X1636

X1848:	lxi	h,0
	shld	X2130
	mvi	a,0ffh
	sta	X210e
	lda	X2101
	mov	c,a
	lxi	h,X2130
	mov	a,m
	ora	a
	jz	X1860
	dcr	a
X1860:	mov	b,a
	mov	a,c
	ora	a
	jz	X1869
	lda	X2155
X1869:	add	b
	mov	b,a
	mov	a,c
	ora	a
	lda	X2156
	jnz	X1879
	mov	c,b
	call	X11bf
	mov	a,b
	mov	b,c
X1879:	cmp	b
	jc	X187e
	mov	a,b
X187e:	sta	X20f9
	inx	h
	mov	a,m
	ora	a
	jz	X1888
	dcr	a
X1888:	mov	b,a
	mov	a,c
	ora	a
	jnz	X1895
	lda	X2050
	dcr	a
	jmp	X1898

X1895:	lda	X2153
X1898:	cmp	b
	jc	X189d
	mov	a,b
X189d:	sta	X20f8
	jmp	X1636

X18a3:	mvi	c,40h
	call	X1928
	call	X18c1
	jmp	X18bc

X18ae:	mvi	c,40h
	call	X1928
	call	X19a8
	call	X1977
	call	X19d6
X18bc:	mvi	a,30h
	out	62h
	ret
;;
;;  On h pulse, write 0x2d to NVR... this looks like it's doing a read
;;
X18c1:	in	42h
	ana	c
	jz	X18c1
X18c7:	in	42h
	ana	c
	jnz	X18c7
	mvi	a,2dh		;; Write READ command to NVR latch
	out	62h
X18d1:	in	42h
	ana	c
	jz	X18d1
X18d7:	in	42h
	ana	c
	jnz	X18d7
	mvi	a,2fh		;; Write 0x2fh (standby) to nvr latch
	out	62h
	lxi	h,X21d3		;; HL = X21d3
	mvi	b,0eh		;; B = 14 -- we're reading 14 bits
X18e6:	in	42h
	ana	c
	jz	X18e6
X18ec:	in	42h
	ana	c
	jnz	X18ec		;; wait for NVR clock L
	mvi	a,25h		;; shft bit out of nvr
	out	62h
X18f6:	in	42h
	ana	c
	jz	X18f6		;; wait for NVR clock H
	in	42h		;; read bit and store it in memory
	mov	m,a
	inx	h
X1900:	in	42h
	ana	c
	jnz	X1900		;; wait for NVR clock L
	dcr	b
	jnz	X18f6		;; read next bit
	mvi	a,2fh		;; send standby
	out	62h
	lxi	d,X21d3		;; DE = 0x21d3
	mvi	b,0eh		;; B = 14
	lxi	h,0		;; HL = 0
X1916:	dad	h		;;
	ldax	d		;; load next char
	ani	20h		;; and with NVR data bit
	rlc			;; rotate NVR bit to high bit
	rlc
	rlc
	ora	l
	mov	l,a
	inx	d
	dcr	b
	jnz	X1916
	shld	X21af		;; Store the finished data in 21af and 21ae
	ret
;;
;;  Loads address A into NVR address register
;;
X1928:	lda	X21ae		;; Load accumulator from 0x21ae -- (0x42)
X192b:	mvi	b,0ffh		;; B = 0xff
X192d:	inr	b		;; increment B
	sui	0ah		;; subtract 0x0a from accumulator
	jp	X192d		;; repeat while accumulator is positive
	adi	0ah		;; add 0x0a to accumulator

	;;  B = A/10, A = A%10 -- this is almost certainly related to NVR!
	;;  First, fill the buffer at 21d3 with 20 bytes of 0x23 (accept address 1)

	lxi	h,X21d3		;; HL = 0x21d3
	mvi	e,23h		;; E = 0x23
	mvi	d,14h		;; D = 0x14
X193c:	mov	m,e		;;
	inx	h		;; HL++
	dcr	d		;; D--
	jnz	X193c		;; repeat until D is zero

	;;  End buffer with 0x2f -- put in standby

	mvi	m,2fh		;; Store 0x2f in 21e7

	;;  Set 21d3 + a to 0x22 (accept address 0)

	lxi	h,X21d3		;; HL = 0x21d3
	mov	e,a		;; copy A to E
	mvi	d,0		;; clear D
	dad	d		;; add DE to HL -- calculate address of bit A
	mvi	m,22h		;; Store 0x22 in M

	;;  Set 21d3 + 10 + b to 0x22 (accept address 0)

	lxi	h,X21d3		;; HL = 0x21d3
	mvi	a,0ah		;; A = 0x0a
	add	b		;; A = 0x0a + B
	mov	e,a
	dad	d
	mvi	m,22h

	;; Wait for horiz latch

X1957:	in	42h
	ana	c
	jnz	X1957

	;; Now copy from 21d3 to nvr latch, one per edge, 21 bytes

	lxi	h,X21d3
	mvi	b,15h		;;
X1962:	in	42h
	ana	c		;; Flags Buffer & C
	jz	X1962
	dcr	b
	rm			;; Return if B is negative
X196a:	in	42h
	ana	c
	jnz	X196a
	mov	a,m
	out	62h
	inx	h
	jmp	X1962

X1977:	lhld	X21af
	dad	h
	dad	h
	lxi	d,X21d3
	mvi	b,0eh
X1981:	mvi	a,20h
	dad	h
	ral
	stax	d
	inx	d
	dcr	b
	jnz	X1981
	mvi	a,2fh
	stax	d
	lxi	h,X21d3
	mvi	b,0fh
X1993:	in	42h
	ana	c
	jz	X1993
X1999:	in	42h
	ana	c
	jnz	X1999
	mov	a,m
	out	62h
	inx	h
	dcr	b
	jnz	X1993
	ret

X19a8:	in	42h
	ana	c
	jz	X19a8
X19ae:	in	42h
	ana	c
	jnz	X19ae
	mvi	a,2bh
	out	62h
	call	X19c0
	mvi	a,2fh
	out	62h
	ret

X19c0:	lxi	h,X013b
X19c3:	in	42h
	ana	c
	jz	X19c3
X19c9:	in	42h
	ana	c
	jnz	X19c9
	dcx	h
	mov	a,h
	ora	l
	jnz	X19c3
	ret

X19d6:	in	42h
	ana	c
	jz	X19d6
X19dc:	in	42h
	ana	c
	jnz	X19dc
	mvi	a,29h
	out	62h
	call	X19c0
	mvi	a,2fh
	out	62h
	ret

X19ee:	cpi	20h
	mvi	c,43h
	jz	X01ff
	lxi	h,X1bb0
	push	h
	cpi	0dh
	jz	X094b
	cpi	9
	jz	X0df9
	cpi	3ah
	jnc	X1b60
	sui	30h
	rm
	add	a
	lxi	h,X1aa2
	call	X13de
	call	X1390
	mov	a,b
	lxi	d,X21ac
	pchl

X1a1a:	sta	X2177
	jmp	X0812

X1a20:	lda	X207b
	xri	0ffh
	sta	X207b
	jz	X1a61
X1a2b:	mvi	c,80h
	call	X108e
	lhld	X2140
	shld	X2111
	lxi	h,X19ee
	shld	X2140
	lxi	h,0
	shld	X2143
	shld	X2172
X1a45:	lhld	X2004
	shld	X21c5
	lhld	X20f8
	shld	X210d
	call	X1bba
	shld	X214e
	xra	a
	sta	X20f8
	call	X1bf9
	jmp	X1636

X1a61:	lhld	X2111
	shld	X2140
	call	X1bba
	lxi	d,1000h
	dad	d
	lda	X2050
X1a71:	mvi	m,0ffh
	inx	h
	dcr	a
	jnz	X1a71
	lxi	h,X210d
	mov	a,m
	sta	X20f8
	mvi	a,0ffh
	inx	h
	mov	m,a
	call	X1636
	lhld	X21c5
	shld	X2004
	xra	a
	sta	X21c4
	sta	X21c2
	in	42h
	ani	8
	jz	X1aa1
	lda	X2176
	ora	a
	cz	X12e8
X1aa1:	ret

X1aa2:	rst	1
	ldax	d
	dad	b
	dcx	d
	rnc
	ldax	d
	jp	Xfe1a
	ldax	d
	ldax	b
	dcx	d
	shld	X401b
	dcx	d
	mov	b,c
	dcx	d
	ora	m
	ldax	d
	call	X1b52
	xra	a
	sta	X210e
	sta	X210d
	lda	X21a2
	ora	a
	push	psw
	cz	X0b77
	pop	psw
	cnz	X0b63
	jmp	X1a45

	rst	0
	call	X1b52
	lda	X20f8
	ora	a
	rz
	call	X0e23
	xra	m
	mov	m,a
	call	X0e23
	ana	m
	mvi	b,54h
	jnz	X1ae8
X1ae6:	mvi	b,0
X1ae8:	mov	a,b
	sta	X20f4
	lda	X20f8
	jmp	X1eea
;;
;;  Below is what appears to be a bunch of dead code-- unreferenced functions (meant for use
;;  by an expansion rom or patch, perhaps?).
;;
	call	X1b52
	call	X0dec
	call	X1ccd
	jmp	X1ae6

	lxi	h,X21a5
	mov	a,m
	xri	20h
	mov	m,a
	xra	a
	sta	X2144
	ret

	call	X094b
	lxi	h,X225a
	mov	a,m
	xri	3
	mov	m,a
	sta	X2265
	ani	1
	sta	X21be
	jz	X1cd3
	jmp	X1c35

	call	X1b59
	lxi	h,X21a6
	lda	X20f8
	sui	2
	cpi	28h
	rnc
	nop

	org	1b34h

	mov	d,a
	call	X0e2b
	xra	m
	mov	m,a
	call	X1ddb
	jmp	X1cd3

	dcx	d
	xchg
	call	X1b59
	sta	X20f8
	mov	a,m
	adi	10h
	mov	m,a
	call	X1ddb
	jmp	X1cd3

X1b52:	lda	X21be
	ora	a
	rnz
	pop	h
	ret

X1b59:	lda	X21be
	ora	a
	rz
	pop	h
	ret

X1b60:	lda	X2069
	ani	20h
	rz
	mov	a,b
	cpi	53h
	jnz	X1b72
	call	X1754
	jmp	X1b81

X1b72:	cpi	52h
	jnz	X1b86
	call	X175b
	ei
	call	X03a2
	call	X1a2b
X1b81:	ei
	call	X1bf9
	ret

X1b86:	cpi	41h
	rnz
	call	X1b59
	call	X094b
	mvi	a,41h
	call	X05e6
	mvi	a,3dh
	call	X05e6
	mvi	a,20h
	call	X05e6
	lxi	h,X1e9f
	shld	X2140
	pop	h
	ret

	sbb	b
	cpi	61h
	rm
	cpi	7bh
	rp
	ani	0dfh
	ret

X1bb0:	call	X0394
	lxi	h,X19ee
	shld	X2140
	ret

X1bba:	lhld	scratch_start	; load [0x204e]
	jmp	X1bc3

X1bc0:	lxi	h,X21cc
X1bc3:	mov	a,h
	ani	0fh
	ori	20h
	mov	h,a
	ret

X1bca:	call	X1bba
	call	X0fc8
	push	h
	mvi	m,7fh
	inx	h
	xchg
	call	X1bc0
	mov	a,h
	ani	0fh
	ori	70h
	stax	d
	inx	d
	mov	a,l
	stax	d
	pop	h
	lda	X2050
	mov	e,a
	mvi	b,54h
X1be8:	mov	a,e
	call	X0e27
	ana	m
	jz	X1bf4
	mov	a,e
	call	X1eea
X1bf4:	dcr	e
	jnz	X1be8
	ret

X1bf9:	lxi	b,X1cad
	lxi	h,X2253
	mvi	a,0fah
	call	X1c71
	mvi	c,1
	mvi	b,10h
	call	X1c8a
	lxi	b,X1cad
	mvi	a,0fah
	call	X1c71
	mvi	c,1
	mvi	b,50h
	call	X1c8a
	lxi	b,X1cb6
	mvi	a,0fdh
	call	X1c71
	mvi	c,13h
	call	X1c88
	mvi	m,7fh
	inx	h
	xchg
	call	X1bba
	mov	a,h
	ori	70h
	stax	d
	inx	d
	mov	a,l
	stax	d
X1c35:	call	X1bc0
	lda	X2050
	mov	b,a
	mvi	a,31h
X1c3e:	mov	m,a
	inx	h
	mov	c,a
	ani	0fh
	mov	a,c
	jnz	X1c49
	xri	80h
X1c49:	inr	a
	daa
	jnc	X1c50
	ori	80h
X1c50:	ani	8fh
	ori	30h
	dcr	b
	jnz	X1c3e
	call	X1c9f
	call	X1bca
	mvi	a,1
X1c60:	sta	X21be
	lxi	h,X2253
	mov	a,h
	mov	h,l
	ani	0fh
	ori	30h
	mov	l,a
	shld	X2004
	ret

X1c71:	push	h
	lxi	d,1000h
	dad	d
	pop	d
X1c77:	push	psw
	ldax	b
	ora	a
	jz	X1c86
	stax	d
	pop	psw
	mov	m,a
	inx	h
	inx	d
	inx	b
	jmp	X1c77

X1c86:	pop	psw
	ret

X1c88:	mvi	b,70h
X1c8a:	xchg
X1c8b:	mvi	m,7fh
	inx	h
	mov	d,h
	mov	e,l
	inx	d
	inx	d
	mov	a,d
	ani	0fh
	ora	b
	mov	m,a
	inx	h
	mov	m,e
	inx	h
	dcr	c
	jnz	X1c8b
	ret

X1c9f:	mvi	m,7fh
	mov	d,h
	mov	e,l
	inx	h
	mov	a,d
	ani	0fh
	ori	70h
	mov	m,a
	inx	h
	mov	m,e
	ret
X1cad:
	db	'SET-UP A',0
X1cb6:
	db	'TO EXIT PRESS ',022h,'SET-UP',022h,0
	call	X1bba
	jmp	X0fc8

X1cd3:	call	X1ccd
	call	X1bc0
	push	h
	mvi	a,4eh
	call	X0fcb
	pop	h
	push	h
	inx	h
	inx	h
	mvi	e,0
	mvi	b,4
	in	42h
	ani	8
	push	psw
	jz	X1cf0
	inr	b
X1cf0:	mvi	c,4
X1cf2:	call	X1dcc
	ori	0b0h
	mov	m,a
	inr	e
	inx	h
	dcr	c
	jnz	X1cf2
	mvi	c,4
X1d00:	mvi	m,0
	inr	e
	inx	h
	dcr	c
	jnz	X1d00
	dcr	b
	jnz	X1cf0
	mvi	c,4
	pop	psw
	push	psw
	jnz	X1d17
	mov	a,c
	adi	8
	mov	c,a
X1d17:	mvi	m,0
	inx	h
	dcr	c
	jnz	X1d17
	lxi	d,X1d4b
	lda	X21ab
	call	X1d61
	lxi	d,X1d56
	lda	X21ac
	call	X1d61
	call	X1c9f
	lxi	d,8
	mvi	c,4
	pop	psw
	jz	X1d3d
	inr	c
X1d3d:	mvi	a,31h
	pop	h
X1d40:	mov	m,a
	inr	a
	dad	d
	dcr	c
	jnz	X1d40
	xra	a
	jmp	X1c60

X1d4b:	db	20h
	db	20h
	db	20h
	mov	d,h
	db	20h
	mov	d,e
	mov	d,b
	mov	b,l
	mov	b,l
	mov	b,h
	db	20h
X1d56:	db	20h
	db	20h
	db	20h
	mov	d,d
	db	20h
	mov	d,e
	mov	d,b
	mov	b,l
	mov	b,l
	mov	b,h
	db	20h
X1d61:	mov	c,a
	mvi	b,0bh
	call	memmove
	mov	a,c
	rrc
	rrc
	mov	c,a
	rrc
	rrc
	add	c
	mov	c,a
	mvi	b,0
	lxi	d,X1d7c
	xchg
	dad	b
	xchg
	mvi	b,5
	jmp	memmove

X1d7c:	db	20h
	db	20h
	db	20h
	dcr	m
	db	30h
	db	20h
	db	20h
	db	20h
	stc
	dcr	m
	db	20h
	db	20h
	lxi	sp,X3031
	db	20h
	db	20h
	lxi	sp,X3433
	db	20h
	db	20h
	lxi	sp,X3035
	db	20h
	db	20h
	sta	X3030
	db	20h
	db	20h
	inx	sp
	db	30h
	db	30h
	db	20h
	db	20h
	mvi	m,30h
	db	30h
	db	20h
	lxi	sp,X3032
	db	30h
	db	20h
	lxi	sp,X3038
	db	30h
	db	20h
	sta	X3030
	db	30h
	db	20h
	sta	X3034
	db	30h
	db	20h
	inx	sp
	mvi	m,30h
	db	30h
	db	20h
	inr	m
	db	38h
	db	30h
	db	30h
	db	20h
	dad	sp
	mvi	m,30h
	db	30h
	lxi	sp,X3239
	db	30h
	db	30h
X1dcc:	push	h
	lxi	h,X21a6
	mov	d,e
	mov	a,e
	call	X0e2b
	ana	m
	pop	h
	rz
	mvi	a,1
	ret

X1ddb:	lda	X21ac
	ani	0f0h
	rrc
	rrc
	rrc
	rrc
	mov	b,a
	lda	X21ab
	ani	0f0h
	ora	b
	sta	X2158
	ani	0f0h
	cpi	20h
	lda	X21a4
	jz	X1dff
	ani	3fh
	ori	80h
	jmp	X1e03

X1dff:	ani	3fh
	ori	0c0h
X1e03:	sta	X21a4
	in	42h
	ani	8
	jz	X1e19
	lxi	h,X21a7
	mov	a,m
	ori	10h
	mov	m,a
	mvi	a,6eh
	jmp	X1e31

X1e19:	lda	X21a9
	ani	0c0h
	mov	b,a
	lda	X21a9
	ani	20h
	rrc
	ori	20h
	ora	b
	rrc
	rrc
	mov	b,a
	lda	X21a4
	ani	0c3h
	ora	b
X1e31:	sta	X21a4
	lda	X21a9
	ani	10h
	jz	X1e3e
	mvi	a,10h
X1e3e:	adi	20h
	sta	X207c
	lda	X21a6
	ani	10h
	jz	X1e4d
	mvi	a,1
X1e4d:	call	X1e6e
	call	X0329
	lda	X20f8
	cpi	15h
	cz	X0342
	cpi	1dh
	cz	X0342
	cpi	0ch
	cz	X0bf2
	cpi	12h
	cz	X0bf2
	call	X1636
	ret

X1e6e:	ora	a
	jz	X1e79
	sta	X215b
	xra	a
	jmp	X1e94

X1e79:	in	42h
	ani	2
	jnz	X1e90
	sta	X2159
	mvi	a,1
	sta	X215b
	mvi	a,2
	sta	X215a
	jmp	X036b

X1e90:	xra	a
	sta	X215b
X1e94:	sta	X215a
	mvi	a,80h
	sta	X2159
	jmp	X036b

X1e9f:	call	X1edd
	lxi	h,X217b
	mov	m,a
	inx	h
	shld	X21b4
	mov	b,a
	lxi	d,20		; DE = 20(0x0014)
	call	memset		; call memset(0x1083)
	lxi	h,X1eb8
	shld	X2140
	ret

X1eb8:	call	X1edd
	lhld	X21b4
	mov	b,a
	lda	X217b
	mov	c,a
	cmp	b
	jz	X1ed3
	mov	a,l
	cpi	90h
	jz	X1ed3
	mov	m,b
	inx	h
	shld	X21b4
	ret

X1ed3:	mov	m,c
	call	X1ccd
	call	X094b
	jmp	X1bb0

X1edd:	push	psw
	cpi	20h
	jnc	X1ee5
	mvi	a,1
X1ee5:	call	X05e3
	pop	psw
	ret

X1eea:	push	h
	lxi	h,scratch_start	; HL -> 0x204e
	mov	c,a
	lda	X21a2
	ora	a
	jnz	X1efc
	mov	a,c
	cpi	50h
	jp	X1f0f
X1efc:	mov	a,m
	inx	h
	mov	h,m
	mov	l,a
	mov	a,h
	ani	0fh
	ori	20h
	mov	h,a
	mov	a,c
	add	l
	mov	l,a
	jnc	X1f0d
	inr	h
X1f0d:	mov	m,b
	mov	a,b
X1f0f:	pop	h
	ret

X1f11:	push	d
	xra	a
	sta	X21a5
	mvi	b,0
X1f18:	mov	a,b
	sta	X2158
	out	2
	mvi	c,1
X1f20:	mov	a,c
	out	0
	lxi	h,Xc000
X1f26:	push	b
	push	h
	call	X0675
	pop	h
	pop	b
	jnz	X1f48
	inx	h
	mov	a,h
	ora	l
	jnz	X1f26
X1f36:	mvi	a,5
	out	1
	lda	X2158
	out	2
	mvi	a,25h
	sta	X21a5
	xra	a
	stc
	pop	d
	ret

X1f48:	ani	7fh
	cmp	c
	jnz	X1f36
	mov	a,c
	rlc
	cpi	80h
	mov	c,a
	jnz	X1f20
	mov	a,b
	adi	11h
	mov	b,a
	cpi	10h
	jnz	X1f18
	xra	a
	pop	d
	ret

X1f62:	push	d
	mvi	d,7
X1f65:	mov	a,d
	call	X1f7b
	call	X1fa1
	cmp	d
	jnz	X1f36
	dcr	d
	jnz	X1f65
	mvi	a,5
	out	1
	xra	a
	pop	d
	ret

X1f7b:	mov	b,a
	ani	2
	rrc
	rrc
	rrc
	rrc
	ori	10h
	sta	X21c9
	out	62h
	mvi	c,5
	mov	a,b
	ani	1
	jz	X1f93
	mvi	c,25h
X1f93:	mov	a,b
	ani	4
	jz	X1f9d
	mov	a,c
	ori	2
	mov	c,a
X1f9d:	mov	a,c
	out	1
	ret

X1fa1:	in	22h
	mov	b,a
	mvi	c,1
	mov	a,b
	ani	90h
	jz	X1fb3
	cpi	90h
	mvi	a,0ffh
	rnz
	mvi	c,0
X1fb3:	mov	a,b
	ani	40h
	jz	X1fbd
	mov	a,c
	ori	2
	mov	c,a
X1fbd:	in	1
	rrc
	rrc
	cma
	ani	20h
	xra	b
	ani	20h
	mvi	a,0ffh
	rnz
	mov	a,b
	ani	20h
	jnz	X1fd4
	mov	a,c
	ori	4
	mov	c,a
X1fd4:	ora	a
	mov	a,c
	ret

; Last but not least, pad out to 8K (8192) bytes

	org	1fffh
	nop

;	Miscellaneous equates

;  These are addresses referenced in the code but
;  which are in the middle of a multibyte instruction
;  or are addresses outside the initialized space

X0011	equ	11h
X00ff	equ	0ffh
X0111	equ	111h
X0113	equ	113h
X0ea0	equ	0ea0h
X1ccd	equ	1ccdh
X2001	equ	2001h
X2002	equ	2002h
X2004	equ	2004h
X2050	equ	2050h
X2051	equ	2051h
X2052	equ	2052h
X2054	equ	2054h
X2056	equ	2056h
X2058	equ	2058h
X205a	equ	205ah
X205b	equ	205bh
X205c	equ	205ch
X2065	equ	2065h
X2067	equ	2067h
X2069	equ	2069h
X2072	equ	2072h
X2073	equ	2073h
X2074	equ	2074h
X2075	equ	2075h
X2077	equ	2077h
X2078	equ	2078h
X2079	equ	2079h
X207a	equ	207ah
X207b	equ	207bh
X207c	equ	207ch
X207d	equ	207dh
X207e	equ	207eh
X207f	equ	207fh
X20c0	equ	20c0h
X20c1	equ	20c1h
X20c2	equ	20c2h
X20de	equ	20deh
X20f2	equ	20f2h
X20f4	equ	20f4h
X20f5	equ	20f5h
X20f8	equ	20f8h
X20f9	equ	20f9h
X20fa	equ	20fah
X20fb	equ	20fbh
X20fc	equ	20fch
X20fd	equ	20fdh
X20ff	equ	20ffh
X2101	equ	2101h
X2102	equ	2102h
X2104	equ	2104h
X210d	equ	210dh
X210e	equ	210eh
X2111	equ	2111h
X2113	equ	2113h
X212b	equ	212bh
X212c	equ	212ch
X212f	equ	212fh
X2130	equ	2130h
X2131	equ	2131h
X2140	equ	2140h
X2142	equ	2142h
X2143	equ	2143h
X2144	equ	2144h
X2145	equ	2145h
X2146	equ	2146h
X2147	equ	2147h
X2148	equ	2148h
X2149	equ	2149h
X214b	equ	214bh
X214e	equ	214eh
X2150	equ	2150h
X2151	equ	2151h
X2152	equ	2152h
X2153	equ	2153h
X2154	equ	2154h
X2155	equ	2155h
X2156	equ	2156h
X2157	equ	2157h
X2158	equ	2158h
X2159	equ	2159h
X215a	equ	215ah
X215b	equ	215bh
X215c	equ	215ch
X2171	equ	2171h
X2172	equ	2172h
X2173	equ	2173h
X2174	equ	2174h
X2176	equ	2176h
X2177	equ	2177h
X2178	equ	2178h
X2179	equ	2179h
X217b	equ	217bh
X2191	equ	2191h
X21a2	equ	21a2h
X21a3	equ	21a3h
X21a4	equ	21a4h
X21a5	equ	21a5h
X21a6	equ	21a6h
X21a7	equ	21a7h
X21a8	equ	21a8h
X21a9	equ	21a9h
X21aa	equ	21aah
X21ab	equ	21abh
X21ac	equ	21ach
X21ad	equ	21adh
X21ae	equ	21aeh
X21af	equ	21afh
X21b4	equ	21b4h
X21b8	equ	21b8h
X21b9	equ	21b9h
X21bb	equ	21bbh
X21bc	equ	21bch
X21bd	equ	21bdh
X21be	equ	21beh
X21bf	equ	21bfh
X21c0	equ	21c0h
X21c1	equ	21c1h
X21c2	equ	21c2h
X21c3	equ	21c3h
X21c4	equ	21c4h
X21c5	equ	21c5h
X21c7	equ	21c7h
X21c8	equ	21c8h
X21c9	equ	21c9h
X21cb	equ	21cbh
X21cc	equ	21cch
X21d3	equ	21d3h
X2253	equ	2253h
X225a	equ	225ah
X2265	equ	2265h
X22d0	equ	22d0h
X2839	equ	2839h
X3030	equ	3030h
X3031	equ	3031h
X3032	equ	3032h
X3034	equ	3034h
X3035	equ	3035h
X3038	equ	3038h
X3200	equ	3200h
X3221	equ	3221h
X3239	equ	3239h
X3433	equ	3433h
X3a6a	equ	3a6ah
X3c08	equ	3c08h
X3c2c	equ	3c2ch
X3f2f	equ	3f2fh
X401b	equ	401bh
X4553	equ	4553h
X5a0b	equ	5a0bh
X6081	equ	6081h
X6713	equ	6713h
X6c14	equ	6c14h
X7fd0	equ	7fd0h
Xb709	equ	0b709h
Xc000	equ	0c000h
Xc310	equ	0c310h
Xc320	equ	0c320h
Xc920	equ	0c920h
Xc940	equ	0c940h
Xc980	equ	0c980h
Xcc71	equ	0cc71h
Xcd00	equ	0cd00h
Xcd0b	equ	0cd0bh
Xd0f2	equ	0d0f2h
Xfe1a	equ	0fe1ah
Xff01	equ	0ff01h

	end
