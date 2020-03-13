;
; (Reconstructed) IO.ASM for MSDOS
;
        ASSUME  SS:DOSGROUP,CS:DOSGROUP

	public	$STD_CON_INPUT_STATUS
	public	$STD_CON_INPUT_FLUSH

	extrn 	REDISP:NEAR

	procedure $STD_CON_INPUT_STATUS, NEAR	;System call 11
	call	STATCHK
	mov	al, 0
	retz
	or	al, 0FFH
	ret

$STD_CON_INPUT_STATUS	endp

	procedure $STD_CON_INPUT_FLUSH, NEAR	;System call 12
	push	ax
	push	dx
	xor	bx, bx
	call	GET_IO_FCB
	jc	flush1
	mov	ah, 4
	call	IOFUNC
flush1:	pop	dx
	pop	ax
	mov	ah, al
	cmp	al, STD_CON_INPUT
	jz	flush2
	cmp	al, RAW_CON_IO
	jz	flush2
	cmp	al, RAW_CON_INPUT
	jz	flush2
	cmp	al, STD_CON_INPUT_NO_ECHO
	jz	flush2
	cmp	al, STD_CON_STRING_INPUT
	jz	flush2
	mov	al, 0	
	ret
;
flush2:	cli	
	jmp	REDISP
$STD_CON_INPUT_FLUSH	endp



