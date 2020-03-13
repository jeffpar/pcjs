;
; (Reconstructed) IO.ASM for MSDOS
;
        ASSUME  SS:DOSGROUP,CS:DOSGROUP

	public	$STD_AUX_OUTPUT
	public	$STD_PRINTER_OUTPUT
	public	FunctionKeys
	public	FunctionHandlers
	public	Tab

	extrn	ESCCHAR:BYTE
	extrn	PFLAG:BYTE
	extrn	CARPOS:BYTE
	extrn	STARTPOS:BYTE
	extrn	INBUF:BYTE
	extrn	INSMODE:BYTE
	extrn	CHARCO:BYTE
	extrn	STATCHK:NEAR
	extrn	RAWOUT:NEAR
	extrn	RAWOUT2:NEAR
	extrn	SPOOLINT:NEAR
	extrn	IOFUNC:NEAR

.xlist
.xcref
INCLUDE DOSSYM.ASM
INCLUDE DEVSYM.ASM
.cref
.list

;
; Function keys for editing. Note that the FunctionKeys and FunctionHandlers
; tables are in the opposite order from each other -- the first entry in
; FunctionKeys corresponds to the last entry in FunctionHandlers.
;
FunctionKeys	label	WORD

		if	WANG
;
		db	000h, 0C1h, 0C7h,  8Ah,  88h,  9Ah
		db	0CBh,  8Bh, 0C3h, 0C6h, 0C6h, 0C6h
FunctionKeyCount	equ	$ - FunctionKeys

FunctionHandlers label WORD
		short_addr GETCH
		short_addr TwoEsc
		short_addr ENTERINS
		short_addr BACKSP
		short_addr REEDIT
		short_addr KILNEW
		short_addr COPYLIN
		short_addr SKIPSTR
		short_addr CopyStr
		short_addr SKIPONE
		short_addr CopyOne
		short_addr CTRLZ

		else
		if IBM
		db	40h	;F6    - insert Ctrl+Z
		db	4Dh	;Right - copy single character
		db	3Bh	;F1    - copy single character
		db	53h	;Del   - skip single character
		db	3Ch	;F2    - copy to a character
		db	3Eh	;F4    - skip to a character
		db	3Dh	;F3    - copy previous input
		db	3Dh	;F3    - clear line leaving template
		db	3Fh	;F5    - clear line
		db	4Bh	;Left  - backspace
		db	52h	;Ins   - Toggle insert mode
		db	41h	;F7    - insert literal ESC
		db	41h	;F7

FunctionKeyCount	equ	$ - FunctionKeys

FunctionHandlers label WORD
		short_addr GETCH
		short_addr TwoEsc	;F7    - insert literal ESC
		short_addr ENTERINS	;Ins   - toggle insert mode
		short_addr BACKSP	;Left  - backspace
		short_addr REEDIT	;F5    - clear line
		short_addr KILNEW	;F3    - clear line leaving template
		short_addr COPYLIN	;F3    - copy previous input
		short_addr SKIPSTR	;F4    - skip to a character
		short_addr CopyStr	;F2    - copy to a character
		short_addr SkipOne	;Del   - skip single character
		short_addr CopyOne	;F1    - copy single character
		short_addr CopyOne	;Right - copy single character
		short_addr CTRLZ	;F6    - insert literal ^Z


		else
;
; Generic has thirteen function handlers
;

		db	'Z'	;Esc+Z: Insert Ctrl+Z
		db	'S'	;Esc+S: Copy single character
		db	'V'	;Esc+V: Skip single character
		db	'T'	;Esc+T: Copy to a character
		db	'W'	;Esc+W: Skip to a character
		db	'U'	;Esc+U: Copy entire line
		db	'E'	;Esc+E: Clear line leaving template
		db	'J'	;Esc+J: Clear line
		db	'D'	;Esc+D: Backspace
		db	'P'	;Esc+P: Overwrite mode
		db	'Q'	;Esc+Q: Insert mode
		db	'R'	;Esc+R: Literal Esc
		db	'R'
FunctionKeyCount	equ	$ - FunctionKeys

FunctionHandlers label WORD
		short_addr GETCH
		short_addr TwoEsc	;Esc+R
		short_addr ENTERINS	;Esc+Q
		short_addr EXITINS	;Esc+P
		short_addr BACKSP	;Esc+D
		short_addr REEDIT	;Esc+J
		short_addr KILNEW	;Esc+E
		short_addr COPYLIN	;Esc+U
		short_addr SKIPSTR	;Esc+W
		short_addr CopyStr	;Esc+T
		short_addr SKIPONE	;Esc+V
		short_addr CopyOne	;Esc+S
		short_addr CTRLZ	;Esc+Z

		endif	;IBM
		endif	;WANG



	procedure	$STD_CON_INPUT, NEAR
	call	$STD_CON_INPUT_NO_ECHO
	push	ax
	call	OUT
	pop	ax
	return
$STD_CON_INPUT	endp
;
	procedure	$STD_CON_OUTPUT, NEAR
	mov	al, dl
	entry	OUT
	cmp	al, ' '
	jc	out_controlch
	cmp	al, c_DEL	;DEL does not increase CARPOS
	jz	out_notprint
	inc	ss:CARPOS
out_notprint:
	push	ds
	push	si
	inc	ss:charco
	and	ss:charco, 3
	jnz	out_nobreak
	push	ax
	call	STATCHK
	pop	ax
out_nobreak:
	call	RAWOUT
	pop	si
	pop	ds
	test	ss:PFLAG, 0FFH		;Echoing to printer?
	retz
	push	bx
	push	ds
	push	si
	mov	bx, 1			;STDOUT
	invoke	GET_IO_FCB
	jc	j_out_finish
	test	[SI.fcb_DEVID],080H	;If STDOUT is redirected to a file,
	jz	j_out_finish		;don't echo to printer.
	mov	bx, 4
	jmp	short out_rawout2	;Otherwise echo to stdlpt
	ret

j_out_finish:
	jmp	short out_finish

out_controlch:
	cmp	al, c_CR	;CR resets console X to 0
	jz	out_cr
	cmp	al, c_BS	;BS decreases console X
	jz	out_bs
	cmp	al, c_HT	;HT moves to next tabstop
	jnz	out_notprint
	mov	al, ss:CARPOS
	or	al, 0F8h
	neg	al		;Spaces to next tabstop

TAB:
	push	cx
	mov	cl, al
	mov	ch, 0
	jcxz	TAB_end
TAB1:
	mov	al, ' '
	call	OUT
	loop	TAB1
TAB_end:
	pop	cx
	ret
;
out_cr:
	mov	ss:CARPOS, 0
	jmp	short out_notprint
;
j_OUT:	jmp	short OUT
;
out_bs:
	dec	ss:CARPOS
	jmp	short out_notprint

$STD_CON_OUTPUT	endp

	procedure BUFOUT, NEAR
	cmp	al, ' '		;Render printable characters
	jnc	j_OUT
	cmp	al, c_HT	;and tabs
	jz	j_OUT
	push	ax
	mov	al, '^'
	call	OUT
	pop	ax
	or	al, 40h
	call	OUT
	return
BUFOUT	endp

	procedure   $STD_AUX_INPUT,NEAR   ;System call 3
	call	STATCHK
	mov	bx, 3	;stdaux file handle
	call	GET_IO_FCB
	retc
	jmp	short auxin2
;
auxin1:	call	SPOOLINT
auxin2:	mov	ah, 1	;Get input status
	call	IOFUNC
	jz	auxin1	;Spin until there's something there
	xor	ah, ah
	call	IOFUNC	;Get the byte
	ret

$STD_AUX_INPUT	endp

	procedure   $STD_AUX_OUTPUT,NEAR	;System call 4
	push	bx
	mov	bx, 3	;stdaux file handle
	jmp	short aux_lpt_out
;
	entry $STD_PRINTER_OUTPUT
	push	bx
	mov	bx, 4	;stdlpt file handle
aux_lpt_out:
	mov	al, dl
	push	ax
	call	STATCHK
	pop	ax
	push	ds
	push	si
out_rawout2:
	call	RAWOUT2
out_finish:
	pop	si
	pop	ds
	pop	bx
	ret
$STD_AUX_OUTPUT	endp



	public	$STD_CON_INPUT_NO_ECHO
	public	$STD_CON_STRING_OUTPUT

        procedure   $STD_CON_INPUT_NO_ECHO,NEAR   ;System call 8
	push	ds
	push	si
conin1:	call	STATCHK	;Wait for input ready
	jz	conin1
	xor	ah, ah
	call	IOFUNC
	pop	si
	pop	ds
	return

$STD_CON_INPUT_NO_ECHO	endp

        procedure   $STD_CON_STRING_OUTPUT,NEAR   ;System call 9
ASSUME  DS:NOTHING,ES:NOTHING

	mov	si, dx
output1:
	lodsb
	cmp	al,'$'
	retz
	call	OUT
	jmp	short output1


$STD_CON_STRING_OUTPUT endp


