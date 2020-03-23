	title	download.asm
	page	,120
;
;	By Jeff Parsons (@jeffpar) 2018-03-15
;	Monitors INT 14h for file download requests
;
;	This very tiny and simplistic file downloader relies on having our
;	INT 14h	extensions TSR (INT14.COM) loaded first.  You may load INT14.COM
;	in "polled mode" (/P), but if you do, it's probably best to use the COM port
;	at its default speed of 2400 baud.  Also, if you loaded it for a non-default
;	port (/1), then make sure you run DOWNLOAD.COM with the same option (/1).
;
;	The 'protocol" is currently very fragile, and if unusual things happen
;	(eg, a block is interrupted or comes up short), we may wait indefinitely;
;	fortunately, you should always be able to press a key (eg, ESC) to abort
;	the operation and try again.
;
;	Currently, the only component that knows how to send files to DOWNLOAD.COM
;	is our Node test utility: https://www.pcjs.org/software/pcx86/test/testmon/testmon.js:
;
;		node testmon.js [--baud=xxxx]
;
;	After running DOWNLOAD.COM, run testmon.js and press Ctrl-F to initiate a
;	file transfer.  You can use the DOS MODE command before running DOWNLOAD.COM
;	to specify a baud rate other than 2400, eg:
;
;		MODE COM2:9600,N,8,1
;
;	but make sure you pass the same baud rate (eg, --baud=9600) to testmon.js.
;
MAXBLK	equ	1024
MAXNAM	equ	12

code	segment word public 'code'

	org	100h

	assume	cs:code, ds:code, es:code, ss:code

main	proc	near
	call	chkCOM			; verify that INT14.COM is installed
	jc	m1a			; abort

m1:	call	readB			; read a COM byte
	jnc	m2			; got one

m1a:	int	20h			; abort

m2:	cmp	al,06h			; Ctrl-F?
	jne	m1			; no

	mov	dx,offset begXFR	; DX -> beginning transfer message
	mov	ah,09h
	int	21h

	call	readBlk			; read initial block (with file info)
	jc	m4a			; on error, just start over

	;
	; First up: the 8.3 filename (after the first '|' separator)
	;
	lodsb				; get next character
	cmp	al,'|'			; there IS a separator, right?
	jne	m4x			; um, no, error
	mov	di,offset fName		; DI -> filename buffer
	mov	cx,MAXNAM		; CX == maximum filename size
m3:	cmp	bx,si			; passed the end of buffer?
	jb	m4a			; yes, error
	lodsb				; get next character
	cmp	al,'|'			; reached the next separator?
	je	m4			; yes
	dec	cx			; reached the 8.3 limit?
	jl	m3			; yes, just keep looking for the separator
	stosb				; no, save the next filename character
	jmp	m3			; get more
m4:	mov	byte ptr [di],0		; filename complete

	;
	; Next up: the file's size, as 8 hex digits
	;
	mov	cx,8			; CX == # digits
	call	getHex			; DS:SI -> hex digits, BX is still buffer limit
m4a:	jc	m4x
	mov	fSize,ax		; AX == file size (low)
	mov	fSize+2,dx		; DX == file size (high)

	lodsb				; get next character
	cmp	al,'|'			; hopefully it's a separator
	jne	m4x			; no, error

	;
	; Next up: the file's date and time, also as 8 hex digits
	;
	mov	cx,8			; CX == # digits
	call	getHex			; DS:SI -> hex digits, BX is still buffer limit
	jnc	m5
m4x:	jmp	m8err

m5:	mov	fTime,ax		; AX == file time
	mov	fDate,dx		; DX == file date

	mov	al,[si]			; get the FINAL character in the first block
	cmp	al,'|'			; which should be another separator
	jne	m4x			; but it's not :-(

	cmp	bx,si			; are we at the end of the block now?
	jne	m4x			; no, something's wrong

	;
	; Display the filename we're about to download
	;
	mov	dx,offset doXFR		; we have enough info to begin
	mov	ah,09h			; so let the user know
	int	21h

	mov	dx,offset fName		; DX -> filename
	mov	cx,di			; DI still points to the end of filename
	sub	cx,dx			; CX == length of filename
	mov	bx,1			; BX == STDOUT
	mov	ah,40h			; display the filename
	int	21h

	push	dx			; lot of work just to display a CR/LF...
	mov	dx,offset crLF
	mov	ah,09h
	int	21h
	pop	dx

	;
	; Create the file
	;
	sub	cx,cx			; CX == no special attributes
	mov	ah,3Ch			; create the file
	int	21h
	jc	m7err

	mov	fHandle,ax
	xchg	bx,ax

	;
	; Start reading and writing blocks
	;
m6:	mov	di,3			; DI == retries + 1
	mov	ax,010Dh		; send a Ctrl-M accepting the last block
m6r:	mov	dx,comID		; and requesting the next block
	int	14h			; write to COM port
	test	ah,80h			; error?
	jnz	m8err			; yes (weird)
	cmp	fSize,0			; any more blocks expected?
	jne	m7			; yes
	cmp	fSize+2,0		; well?
	je	m7end			; no, all done
m7:	call	readBlk			; read next block
	jnc	m7a			; no error
	mov	ax,0112h		; preload AX with Ctrl-R retry command
	dec	di			; any retries left?
	jnz	m6r			; yes
	jmp	short m8err		; no, report an error
m7a:	mov	cx,bx			; calculate block size
	sub	cx,si			;
	inc	cx			; CX == total bytes (BX-SI+1)
	sub	fSize,cx		; subtract from total size
	sbb	fSize+2,0		;
	jc	m8err			; file size error (too MUCH data?)
	mov	bx,fHandle		; BX == handle
	mov	dx,si			; DS:DX -> block buffer
	mov	ah,40h			; write to file
	int	21h			;
	jc	m7err			; file write failed
	jmp	m6			; read next block

	;
	; Download complete; close the file and print message
	;
m7end:	mov	dx,offset endXFR
	jmp	short m9

	;
	; Assorted error paths (make sure any open file gets closed)
	;
m7err:	mov	dx,offset filErr
	jmp	short m9

m8err:	mov	dx,offset reqErr

	;
	; TODO: If the message isn't endXFR, perhaps we should delete the file
	;
m9:	mov	bx,fHandle
	test	bx,bx
	jz	m9msg
	push	dx
	mov	cx,fTime		; before we close the file
	mov	dx,fDate		; set the date/time we were given
	mov	ax,5701h
	int	21h
	mov	ah,3Eh			; now go ahead and close
	int	21h
	mov	fHandle,0
	pop	dx

m9msg:	mov	ah,09h
	int	21h
	jmp	m1
main	endp

;
; Read a block of data into our block buffer.
;
; If successful, CARRY is clear and SI and BX contain the block boundaries.
;
readBlk	proc	near
	push	cx
	push	di

	call	readBB			; read block byte
	jc	rblk9			; error, pass it on to caller
	mov	cl,al
	call	readBB
	jc	rblk9
	mov	ch,al			; CX now has 16-bit block length
	cmp	cx,MAXBLK+1		; too large?
	cmc
	jc	rblk9			; yes
	mov	si,cx			; save block length in SI
	mov	ah,0			; AH == CRC
	cld
	mov	di,offset block		; DI -> block buffer
rblk1:	call	readBB			; read a byte
	jc	rblk9			; exit on error
	stosb				; save the byte
	add	ah,al			; update the CRC
	loop	rblk1			; loop for more
	call	readBB			; read one more byte: the CRC byte
	jc	rblk9
	cmp	al,ah			; CRC match?
	stc
	jne	rblk9			; no

	mov	bx,si
	mov	si,offset block		; SI is starting block address
	add	bx,si
	dec	bx			; and BX is the maximum block address
	clc

rblk9:	pop	di
	pop	cx
	ret
readBlk	endp

;
; Read a character from the COM port.
;
; If CARRY is clear, AL has the character.  No other registers modified.
;
readB	proc	near
	push	cx
	push	dx
	xchg	cx,ax			; save AH (in CH)

rb1:	mov	dx,comID		; DX == adapter #
	mov	ah,2			; AH == read request
	int	14h			; do INT 14h
	test	ah,ah			; anything (valid) available yet?
	jz	rb9			; yes (and CARRY is clear)

	mov	ah,1			; peek the keyboard
	int	16h			; anything?
	jz	rb1			; no
	mov	ah,0			; read it
	int	16h			;
	cmp	al,1Bh			; ESC?
	jne	rb1			; no
	stc				; set CARRY to indicate error/abort

rb9:	mov	ah,ch			; restore AH
	pop	dx
	pop	cx
	ret
readB	endp

;
; Read a block byte from the COM port.
;
; If CARRY is clear, AL has the character.  No other registers modified.
;
readBB	proc	near
	call	readB			; read a byte
	jc	rbb9			; abort
	cmp	al,'^'			; control character lead byte?
	clc				;
	jne	rbb9			; no, return as-is
	call	readB			; read another byte
	jc	rbb9			; abort
	cmp	al,'^'			; special double lead byte sequence?
	je	rbb9			; yes, pass through
	sub	al,'@'
	jb	rbb9			; invalid sequence
	cmp	al,28			; in the control-character range?
	cmc				; set carry if not
rbb9:	ret
readBB	endp

;
; Get CX hex characters from the block buffer at SI (up to BX) and convert to a number in DX:AX.
;
getHex	proc	near
	push	di
	sub	ax,ax
	sub	di,di
	sub	dx,dx			; DX:DI will accumulate the result

	cld
gh1:	cmp	bx,si			; still in bounds?
	jb	gh9			; no
	lodsb
	sub	al,'0'
	jb	gh9			; error, invalid digit
	cmp	al,10			; was the digit 0-9?
	jb	gh2			; yes
	sub	al,'A'-'0'-10		; assuming it was A-F, subtract a bit more
	cmp	al,10			; did we get 10-15 as a result?
	jb	gh9			; no
	cmp	al,16
	cmc
	jb	gh9
gh2:	or	di,ax
	dec	cx
	jle	gh8
	shl	di,1			; shift DX:DI left 4 bits for next digit
	rcl	dx,1
	shl	di,1
	rcl	dx,1
	shl	di,1
	rcl	dx,1
	shl	di,1
	rcl	dx,1
	jmp	gh1

gh8:	xchg	ax,di			; result is now in DX:AX

gh9:	pop	di
	ret
getHex	endp

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

block	db	MAXBLK dup (?)
fName	db	MAXNAM+1 dup (0)	; enough space for an 8.3 name plus terminating NUL
fSize	dw	0,0
fDate	dw	0
fTime	dw	0
fHandle	dw	0

comMsg	db	"COM? monitored",13,10,'$'
chkMsg	db	"Run INT14 to install I/O handlers first",13,10,'$'
errMsg	db	"COM port not found",13,10,'$'

begXFR	db	"Receiving transfer request..."
crLF	db	13,10,'$'
doXFR	db	"Downloading file: $"
endXFR	db	"File transfer complete",13,10,'$'

filErr	db	"Unable to create file",13,10,'$'
reqErr	db	"Invalid transfer request",13,10,'$'

code	ends

	end	main
