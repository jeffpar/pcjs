; Seattle Computer Products 8086 Monitor version 1.6  X-XX-8X.			
;   by Tim Paterson			
; This software is not copyrighted.			
			
			
; To select a disk boot, set one of the following equates"			
; to 1, the rest to 0."			
			
SCP:		EQU	0	";1 for SCP, 0 for others."
CROMEMCO4FDC:	EQU	0	;Cromemco 4FDC?
CROMEMCO16FDC:	EQU	0	;Cromemco 16FDC?
NORTHSTARSD:	EQU	0	;North Star single density?
TARBELLSD:	EQU	0	;Tarbell SD controller or DD controller SD only
TARBELLDD:	EQU	1	;Tarbell DD controller SD or DD?
OTHER:		EQU	0	;User-defined disk
			
PUTBASE:	EQU	100H	
LOAD:		EQU	200H	
		ORG	7F0H		
		PUT	PUTBASE+7F0H		
		JMP	0,0FF80H	;Power-on jump to monitor	
			
		ORG	100H	;RAM area base address	
			
;System Equates			
			
BASE:		EQU	0F0H	;CPU Support base port address
STAT:		EQU	BASE+7	;UART status port
DATA:		EQU	BASE+6	;UART data port
DAV:		EQU	2	;UART data available bit
TBMT:		EQU	1	;UART transmitter ready bit
BUFLEN:		EQU	80	;Maximum length of line input buffer
BPMAX:		EQU	10	;Maximum number of breakpoints
BPLEN:		EQU	BPMAX+BPMAX	;Length of breakpoint table
REGTABLEN:	EQU	14	;Number of registers
SEGDIF:		EQU	800H	;-0FF800H (ROM address)
PROMPT:		EQU	">"	
CAN:		EQU	"@"	
			
;RAM area.			
			
BRKCNT:		DS	2	;Number of breakpoints
TCOUNT:		DS	2	;Number of steps to trace
BPTAB:		DS	BPLEN	;Breakpoint table
LINEBUF:	DS	BUFLEN+1	;Line input buffer
		ALIGN			
		DS	50	;Working stack area	
STACK:			
			
;Register save area			
			
AXSAVE:		DS	2	
BXSAVE:		DS	2	
CXSAVE:		DS	2	
DXSAVE:		DS	2	
SPSAVE:		DS	2	
BPSAVE:		DS	2	
SISAVE:		DS	2	
DISAVE:		DS	2	
DSSAVE:		DS	2	
ESSAVE:		DS	2	
RSTACK:					;Stack set here so registers can be saved by pushing		
SSSAVE:		DS	2	
CSSAVE:		DS	2	
IPSAVE:		DS	2	
FSAVE:		DS	2	
			
;Start of Monitor code			
			
		ORG	0		
		PUT	PUTBASE		
			
;One-time initialization			
			
start:			
		cld			; UP		
		xor	ax,ax		; Zero register	
		mov	ss,ax		
		mov	ds,ax		
		mov	es,ax		
		mov	sp,19Ch		
		mov	di,AXSAVE	; (0000:019C=0)	
		mov	cx,0Dh		
		rep	stosw		; Rep when cx >0 Store ax to es:[di]	
		mov	ah,2		
		stosw			; Store ax to es:[di]		
		mov	byte ptr ds:data_13e+1,10h	; (0000:01A5=1Bh)	
; Prepare 9513			
		mov	al,17h		
		out	BASE+5,al	; port 0F5h ??I/O Non-standard	
		mov	al,0F3h		
		out	BASE+4,al	; port 0F4h ??I/O Non-standard	
		mov	ax,584h		
		out	BASE+4,ax	; port 0F4h ??I/O Non-standard
;Master Mode now set to 84F3H:			
;	Scaler set to BCD division		
;	Enable data pointer increment		
;	8-bit data bus		
;	FOUT=100Hz, dividing F5 by 4 (F5=4MHz/10000)		
;	Both alarm comparators disabled		
;	Time-of-day enabled		
;Counter 5 selected			
			
;Initialize loop. Ports BASE through BASE+7 are initialized			
;from table. Each table entry has number of bytes followed by			
;data.			
		mov	si,offset INITTABLE	; (926B:074C=1)	
		mov	dx,BASE		
INITPORT:					;  xref 926B:003E		
		lods	byte ptr cs:[si]	; String [si] to al	
		mov	cl,al		
		jcxz	NEXTPORT		; Jump if cx=0	
			
INITBYTE:					;  xref 926B:0038		
		lods	byte ptr cs:[si]	; String [si] to al	
		out	dx,al			; port 0F0h ??I/O Non-standard	
		loop	INITBYTE		; Loop if cx > 0	
			
NEXTPORT:					;  xref 926B:0033		
		inc	dx		
		cmp	dl,BASE+8		
		jne	INITPORT		; Jump if not equal	
			
; not 100% sure what this does yet			
		in	al,BASE+0Fh		; port 0FFh ??I/O Non-standard	
		and	al,18h		
		jz	loc_4			; Jump if zero	
		cmp	al,8		
		je	loc_7			; Jump if equal	
		call	sub_1			; (006C)	
		in	al,BASE+0Fh		; port 0FFh ??I/O Non-standard	
		test	al,8		
		jz	loc_7			; Jump if zero	
		mov	ax,1A0h				
		out	BASE+4,al		; port 0F4h ??I/O Non-standard	
		mov	al,ah		
		out	BASE+4,al		; port 0F4h ??I/O Non-standard	
		jmp	short loc_7		; (008B)	
			
;Initialization complete except for determining baud rate.			
;Both 8259As are ready to accept interrupts, the 9513 is			
;providing 19.2k baud X 16 to the 8251A which is set for			
;16X clock and one stop bit.			
			
loc_4:						;  xref 926B:0044		
		call	CHECKB			; (0081)	
		call	INITBAUD		; (006C)	
loc_5:						;  xref 926B:006A		
		call	CHECKB			; (0081)	
		call	INITB			; (0078)	
		jmp	short loc_5		; (0064)	
			
;CHECKB does not return if baud rate is correct			
			
;Intial baud rate (19.2k) was wrong, so run auto-baud routine			
			
INITBAUD:			
		mov	si,offset BAUD		; (926B:07F5=0Dh)	
;First set up 9513 for slower baud rates (<=9600).			
;Counter 5 mode register has already been selected.			
		mov	ax,0E823h		;Output 23H to BASE+4	
		out	BASE+4,ax		; port 0F4h ??I/O Non-standard	
;23H to BASE+4 sets lower half of Counter 5 mode register.			
;Reload from Load, count down repetively in binary, 			
;toggle output.			
;0E8H to BASE+5 disables data pointer sequencing			
			
		mov	al,0Dh		
		out	BASE+5,al		; port 0F5h ??I/O Non-standard	
INITB:			
		lods	word ptr cs:[si]	; String [si] to ax	
		out	BASE+4,al		; port 0F4h ??I/O Non-standard	
		mov	al,ah		
		out	BASE+4,al		; port 0F4h ??I/O Non-standard	
loc_ret_6:					;  xref 926B:0089		
		retn			
CHECKB:			
		call	IN			; (011B)	
		call	IN			; (011B)	
		cmp	al,0Dh		
		jne	loc_ret_6		; Jump if not equal	
			
; Initialization complete, including baud rate.			
			
MONITOR:					;  xref 926B:0048, 0051, 005C		
; Do auto boot if sense switch 0 is on.			
		mov	di,LINEBUF		;118h	
		mov	byte ptr [di],0Dh		
		in	al,BASE+0Fh		; port 0FFh ??I/O Non-standard	
		test	al,1		
		jz	DOMON			; Jump if zero	
		jmp	BOOT			; (078F)	
DOMON:						;  xref 926B:0095		
		mov	si,HEADER		;76Ah	
		call	PRINTMES		; (012B)	
COMMAND:					;  xref 926B:00BF, 00D5, 0119, 0391		
		cld		
		xor	ax,ax			; Zero register	
		mov	ds,ax		
		mov	es,ax		
		mov	sp,STACK		
		mov	word ptr ds:[64H],INT	; (0000:0064=1755h)	
		mov	ds:[66H],cs		; (0000:0066=4D9h)	
		mov	al,PROMPT		; '>'	
		call	OUT			; (0181)	
		call	INBUF			; (00DA)	
;From now and throughout command line processing, DI points			
;to next character in command line to be processed.			
		call	SCANB			; (013E)	
		jz	COMMAND			; Jump if zero	
		mov	al,[di]	
;Prepare commend letter for table lookup			
		sub	al,'B'			; 'B'	
		jc	ERR1			; Jump if carry Set	
		cmp	al,'T'+1-'B'	;13h	
		jae	ERR1			; Jump if above or =	
		inc	di		
		shl	al,1			; Shift w/zeros fill	
		cbw		
		xchg	bx,ax		
		call	word ptr cs:COMTAB[bx]	;*(926B:0196=78Fh)   19 entries	
		jmp	short COMMAND		; (00A0)	
ERR1:						;  xref 926B:00C5, 00C9		
		jmp	ERROR	; (0382)	
			
;Get input line			
			
INBUF:			
		mov	di,LINEBUF		
		xor	cx,cx			; Zero register	
GETCH:						;  xref 926B:00F6, 00F8, 00FF, 0107		
		call	IN			; (011B)	
		cmp	al,20h			; ' '	
		jb	CONTROL			; Jump if below	
		cmp	al,7Fh		
		je	BACKSP			; Jump if equal	
		call	OUT			; (0181)	
		cmp	al,CAN			; '@'	
		je	KILL			; Jump if equal	
		stosb				; Store al to es:[di]		
		inc	cx		
		cmp	cx,BUFLEN		
		jbe	GETCH			; Jump if below or =	
BACKSP:						;  xref 926B:00E8, 0103		
		jcxz	GETCH			; Jump if cx=0	
		dec	di		
		dec	cx		
		call	sub_7			; (0128)	
		jmp	short GETCH		; (00DF)	
CONTROL:					;  xref 926B:00E4		
		cmp	al,8		
		je	BACKSP			; Jump if equal	
		cmp	al,0Dh		
		jne	GETCH			; Jump if not equal	
		stosb				; Store al to es:[di]		
		mov	di,LINEBUF		
			
;Output CR/LF sequence			
			
CRLF:						;  xref 926B:0280, 042A, 04CA, 066F		
		mov	al,0Dh		
		call	OUT			; (0181)	
		mov	al,0Ah		
		jmp	short OUT		; (0181)	
			
;Cancel input line
		
KILL:						;  xref 926B:00EF		
		call	CRLF	; (010D)	
		jmp	short COMMAND		; (00A0)	
			
;Character input routine			

IN:			
		cli				; Disable interrupts		
		in	al,STAT			; port 0F7h ??I/O Non-standard	
		test	al,DAV		
		jz	IN			; Jump if zero	
		in	al,DATA			; port 0F6h ??I/O Non-standard	
		and	al,7Fh		
		sti				; Enable interrupts		
		retn			
			
;Physical backspace - blank, backspace, blank			
BACKUP:			
		mov	si,offset BACMES	; (926B:078C=8)	
			
;Print ASCII message. Last char has bit 7 set
			
PRINTMES:			
		lods	byte ptr cs:[si]	; String [si] to al	
		call	OUT			; (0181)	
		shl	al,1			; Shift w/zeros fill	
		jnc	PRINTMES		; Jump if carry=0	
		retn			
			
;Scan for parameters of a command	
		
SCANP:			
		call	SCANB			; (013E)	
		cmp	byte ptr [di],2Ch	; ','	
		jne	EOLCHK			; Jump if not equal	
		inc	di		
			
;Scan command line for next non-blank character			
			
SCANB:			
		mov	al,20h			; ' '	
		push	cx		
		mov	cl,0FFh		
		repe	scasb			; Rep zf=1+cx >0 Scan es:[di] for al	
		dec	di		
		pop	cx		
EOLCHK:						;  xref 926B:013B		
		cmp	byte ptr [di],0Dh		
		retn			
			
;Print 5-digit hex address of SI and DS			
OUTSI:			
		mov	dx,ds		
		mov	ah,0		
		call	SHIFT4			; (01CA)	
		add	dx,si		
		jmp	short OUTADD			; (015F)	
			
;Print 5-digit hex address of DI and ES			
;Same as OUTSI above			
OUTDI:			
		mov	dx,es		
		mov	ah,0		
		call	SHIFT4			; (01CA)	
		add	dx,di		
;Finish OUTSI here too			
OUTADD:						;  xref 926B:0154		
		adc	ah,0		
		call	HIDIG			; (0177)	
			
;Print out 16-bit value in DX in hex			
			
OUT16:			
		mov	al,dh		
		call	HEX			; (016C)	
		mov	al,dl		
			
;Output byte in AL as two hex digits	
		
HEX:			
		mov	ah,al			
;Shift high digit into low 4 bits			
		push	cx		
		mov	cl,4		
		shr	al,cl			; Shift w/zeros fill	
		pop	cx		
			
		call	DIGIT			; (0179)	
HIDIG:			
		mov	al,ah		
DIGIT:			
		and	al,0Fh		
;Trick 6-byte hex conversion works on 8086 too.			
		add	al,90h		
		daa		
		adc	al,40h	; '@'	
		daa		
			
;Console output of character in AL
			
OUT:						;  xref 926B:0114, 018E		
		push	ax		
OUT1:						;  xref 926B:0186		
		in	al,STAT			; port 0F7h ??I/O Non-standard	
		and	al,TBMT		
		jz	OUT1			; Jump if zero	
		pop	ax		
		out	DATA,al			; port 0F6h ??I/O Non-standard	
		retn			
			
;Output one space	
		
BLANK:			
		mov	al,20h			; ' '	
		jmp	short OUT		; (0181)	
			
;Output the number of blanks in CX			
			
TAB:			
		call	BLANK			; (018C)	
		loop	TAB			; Loop if cx > 0	
		retn			
			
;Command Table. Command letter indexes into table to get			
;address of command. PERR prints error for no such command.

			
COMTAB:			
		dw	offset BOOT	; B (078F)	
data_27		dw	offset PERR	; C (0381)
data_28		dw	offset DUMP	; D (0226)
data_29		dw	offset ENTER	; E (03A1)
data_30		dw	offset FILL	; F (02B0)
data_31		dw	offset GO	; G (0683)
data_32		dw	offset PERR	; H (0381)
data_33		dw	offset INPUT	; I (0665)
data_34		dw	offset PERR	; J (0381)
data_35		dw	offset PERR	; K (0381)
data_36		dw	offset PERR	; L (0381)
data_37		dw	offset MOVE	; M (0283)
data_38		dw	offset PERR	; N (0381)
data_39		dw	offset OUTPUT	; O (0672)
data_40		dw	offset PERR	; P (0381)
data_41		dw	offset PERR	; Q (0381)
data_42		dw	offset REG	; R (0448)
data_44		dw	offset SEARCH	; S (02D3)
data_45		dw	offset TRACE	; T (0583)
			
;Given 20-bit address in AH:DX, breaks it down to a segment			
;number in AX and a displacement in DX. Displacement is 			
;always zero except for least significant 4 bits.			
			
GETSEG:			
		mov	al,dl		
		and	al,0Fh		
		call	SHIFT4			; (01CA)	
		mov	dl,al		
		mov	al,dh		
		xor	dh,dh			; Zero register	
		retn			
			
;Shift AH:DX left 4 bits			
			
SHIFT4:			
		shl	dx,1	
		rcl	ah,1	
		shl	dx,1	
		rcl	ah,1	
		shl	dx,1	
		rcl	ah,1	
		shl	dx,1	
		rcl	ah,1	
RET2:		retn		
			
;RANGE - Looks for parameters defining an address range.			
;The first parameter is a hex number of 5 or less digits			
;which specifies the starting address. The second parameter			
;may specify the ending address, or it may be preceded by			
;"L" and specify a length (4 digits max), or it may be			
;omitted and a length of 128 bytes is assumed. Returns with			
;segment no. in AX and displacement (0-F) in DX.			
			
RANGE:			
		mov	cx,5		
		call	GETHEX			; (0303)	
		push	ax		
		push	dx		
		call	SCANP			; (0135)	
		cmp	byte ptr [di],'L'		
		je	GETLEN			; Jump if equal	
		mov	dx,80h		
		call	HEXIN			; (0321)	
		jc	RNGRET			; Jump if carry Set	
		mov	cx,5		
		call	GETHEX			; (0303)	
		mov	cx,dx		
		pop	dx		
		pop	bx		
		sub	cx,dx		
		sbb	ah,bh		
		jnz	loc_28			; Jump if not zero	
		xchg	bx,ax		
		inc	cx		
		jmp	short RNGCHK		; (0212)	
GETLEN:						;  xref 926B:01E9		
		inc	di		
		mov	cx,4		
		call	GETHEX			; (0303)	
RNGRET:						;  xref 926B:01F1		
		mov	cx,dx		
		pop	dx		
		pop	ax		
			
;RNGCHK verifies that the range lies entirely within one segment.			
;CX=0 means count=10000H. Range is within one segment only if			
;adding the low 4 bits of the starting address to the count is			
;<=10000H, because segments can start only on 16-byte boundaries.			
			
RNGCHK:						;  xref 926B:0205		
		mov	bx,dx		
		and	bx,0Fh		
		jcxz	MAXRNG			; Jump if cx=0	
		add	bx,cx		
		jnc	GETSEG			; Jump if carry=0	
MAXRNG:						;  xref 926B:0218		
;If here because of JCXZ MAXRNG, we are testing if low 4 bits			
;(in BX) are zero. If we dropped straight in, we are testing			
;for BX+CX=10000H (=0). Either way, zero flag set means 			
;withing range.			
		jz	GETSEG			; Jump if zero	
loc_28:						;  xref 926B:0201		
		mov	ax,4700+'R'		
		jmp	ERR			; (0545)	
			
;Dump area of memory in both hex and ASCII
			
DUMP:			
		call	RANGE			; (01DB)	
		push	ax		
		call	GETEOL			; (037B)	
		pop	ds		
		mov	si,dx		
ROW:						;  xref 926B:0254		
		call	OUTSI			; (014B)	
		push	si		
BYTE:						;  xref 926B:0248		
		call	BLANK			; (018C)	
BYTE1:						;  xref 926B:024F		
		lodsb				; String [si] to al		
		call	HEX			; (016C)	
		pop	dx		
		dec	cx		
		jz	ASCII			; Jump if zero	
		mov	ax,si		
		test	al,0Fh		
		jz	ENDROW			; Jump if zero	
		push	dx		
		test	al,7		
		jnz	loc_30			; Jump if not zero	
		mov	al,'-'		
		call	OUT			; (0181)	
		jmp	short BYTE1		; (0237)	
ENDROW:						;  xref 926B:0243		
		call	ASCII			; (0256)	
		jmp	short ROW		; (0230)	
ASCII:			
		push	cx		
		mov	ax,si		
		mov	si,dx		
		sub	ax,dx		
;Compute tab length. ASCII dump always appears on right side			
;screen regardless of how many bytes were dumped. Figure 3			
;characters for each byte dumped and subtract from 51, which			
;allows a minimum of 3 blanks after the last byte dumped.			
		mov	bx,ax		
		shl	ax,1			; Shift w/zeros fill	
		add	ax,bx		
		mov	cx,33h		
		sub	cx,ax		
		call	TAB			; (0190)	
		mov	cx,bx		
ASCDMP:						;  xref 926B:027D		
		lodsb				; String [si] to al		
		and	al,7Fh		
		cmp	al,7Fh		
		je	NOPRT			; Jump if equal	
		cmp	al,' '		
		jae	PRIN			; Jump if above or =	
NOPRT:						;  xref 926B:0272		
		mov	al,'.'		
PRIN:						;  xref 926B:0276		
		call	OUT			; (0181)	
		loop	ASCDMP			; Loop if cx > 0	
		pop	cx		
		jmp	CRLF			; (010D)	
			
;Block move one area of memory to another. Overlapping moves			
;are performed correctly, i.e., so that a source byte is not			
;overwritten until after it has been moved.			
			
MOVE:			
		call	RANGE			; (01DB)	
		push	cx		
		push	ax		
		mov	si,dx		
		mov	cx,5		
		call	GETHEX			; (0303)	
		call	GETEOL			; (037B)	
		call	GETSEG			; (01BC)	
		mov	di,dx		
		pop	bx		
		mov	ds,bx		
		mov	es,ax		
		pop	cx		
		cmp	di,si		
		sbb	ax,bx		
		jc	COPYLIST		; Jump if carry Set	
;Otherwise, move backward. Figure end of source and destination			
;areas and flip direction flag.			
		dec	cx		
		add	si,cx		
		add	di,cx		
		std				; Set direction flag		
		inc	cx		
COPYLIST:					;  xref 926B:02A2, 02C3, 02D1		
		movsb				; Mov [si] to es:[di]		
		dec	cx		
		rep	movsb			; Rep when cx >0 Mov [si] to es:[di]	
		retn			
			
;Fill an area of memory with a list values. If the list			
;is bigger than the area, don't use the whole list. If the			
;list is smaller, repeat it as many times as necessary.			
			
FILL:			
		call	RANGE			; (01DB)	
		push	cx		
		push	ax		
		push	dx		
		call	LIST			; (036D)	
		pop	di		
		pop	es		
		pop	cx		
		cmp	bx,cx		
		mov	si,LINEBUF		; (0000:0118=0D0h)	
		jcxz	BIGRNG			; Jump if cx=0	
		jnc	COPYLIST		; Jump if carry=0	
BIGRNG:						;  xref 926B:02C1		
		sub	cx,bx		
		xchg	bx,cx		
		push	di		
		rep	movsb			; Rep when cx >0 Mov [si] to es:[di]	
		pop	si		
;The list has been copied into the beginning of the 			
;specified area of memory. SI is the first address			
;of that area, DI is the end of the copy of the list			
;plus one, which is where the list will begin to repeat.			
;All we need to do now is copy [SI] to [DI] until the			
;end of the memory area is reached. This will cause the			
;list to repeat as many times as necessary.			
		mov	cx,bx		
		push	es		
		pop	ds		
		jmp	short COPYLIST			; (02AB)	
			
;Search a specified area of memory for given list of bytes.			
;Print address of first byte of each match.			
			
SEARCH:			
		call	RANGE			; (01DB)	
		push	cx		
		push	ax		
		push	dx		
		call	LIST			; (036D)	
		dec	bx		
		pop	di		
		pop	es		
		pop	cx		
		sub	cx,bx		
SCAN:						;  xref 926B:0301		
		mov	si,LINEBUF		; (0000:0118=0D0h)	
		lodsb				; String [si] to al		
DOSCAN:						;  xref 926B:02E7		
		scasb				; Scan es:[di] for al		
		loopnz	DOSCAN			; Loop if zf=0, cx>0	
		jnz	RET			; Jump if not zero	
		push	bx		
		xchg	cx,bx		
		push	di		
		repe	cmpsb			; Rep zf=1+cx >0 Cmp [si] to es:[di]	
		mov	cx,bx		
		pop	di		
		pop	bx		
		jnz	TEST			; Jump if not zero	
		dec	di		
		call	OUTDI			; (0156)	
		inc	di		
		call	CRLF			; (010D)	
TEST:						;  xref 926B:02F5		
		jcxz	RET			; Jump if cx=0	
		jmp	short SCAN		; (02E2)	
			
;Get the next parameter, which must be a hex number.			
;CX is maximum number of digits the number may have.			
			
GETHEX:			
		call	SCANP			; (0135)	
GETHEX1:			
		xor	dx,dx			; Zero register	
		mov	ah,dh		
		call	HEXIN			; (0321)	
		jc	ERROR			; Jump if carry Set	
		mov	dl,al		
GETLP:						;  xref 926B:031F		
		inc	di		
		dec	cx		
		call	HEXIN			; (0321)	
		jc	RET			; Jump if carry Set	
		jcxz	ERROR			; Jump if cx=0	
		call	SHIFT4			; (01CA)	
		or	dl,al		
		jmp	short GETLP		; (0311)	
			
;Check if next character in the input buffer is a hex digit			
;and convert it to binary if it is. Carry set if not.			
			
HEXIN:			
		mov	al,[di]		
			
;Check if AL has a hex digit and convert it to binary if it			
;is. Carry set if not.			
			
HEXCHK:			
		sub	al,'0'		
		jc	RET			; Jump if carry Set	
		cmp	al,0Ah		
		cmc				; Complement carry		
		jnc	RET			; Jump if carry=0	
		sub	al,7		
		cmp	al,0Ah		
		jb	RET			; Jump if below	
		cmp	al,10h		
		cmc				; Complement carry		
RET:		retn		
			
;Process one parameter when a list of bytes is			
;required. Carry set if parameter bad. Called by LIST			
			
LISTITEM:			
		call	SCANP			; (0135)	
		call	HEXIN			; (0321)	
		jc	STRINGCHK		; Jump if carry Set	
		mov	cx,2		
		call	GETHEX			; (0303)	
		mov	[bx],dl		
		inc	bx		
GRET:		clc				; Clear carry flag	
		retn			
STRINGCHK:					;  xref 926B:033C		
		mov	al,[di]		
		cmp	al,'''		
		je	STRING			; Jump if equal	
		cmp	al,'"'		
		je	STRING			; Jump if equal	
		stc				; Set carry flag		
		retn			
STRING:						;  xref 926B:034D, 0351		
		mov	ah,al		
		inc	di		
STRINGLP:					;  xref 926B:036B		
		mov	al,[di]		
		inc	di		
		cmp	al,0Dh		
		je	ERROR			; Jump if equal	
		cmp	al,ah		
		jne	STOSTRG			; Jump if not equal	
		cmp	ah,[di]		
		jne	loc_45			; Jump if not equal	
		inc	di		
STOSTRG:					;  xref 926B:0361		
		mov	[bx],al		
		inc	bx		
		jmp	short STRINGLP		; (0358)	
			
;Get a byte list for ENTER, FILL or SEARCH. Accepts any number			
;of 2-digit hex values or character strings in either single			
;(') or double (") quotes.			
			
LIST:			
		mov	bx,LINEBUF		
LISTLP:						;  xref 926B:0373		
		call	LISTITEM		; (0336)	
		jnc	LISTLP			; Jump if carry=0	
		sub	bx,LINEBUF		
		jz	ERROR			; Jump if zero	
			
;Make sure there is nothing more on the line except for			
;blanks and carriage return. If there is, it is an			
;unrecognized parameter and an error.			
			
GETEOL:			
		call	SCANB			; (013E)	
		jnz	ERROR			; Jump if not zero	
		retn			
			
;Command error. DI has been incremented beyond the			
;command letter so it must decremented for the			
;error pointer to work.			
			
PERR:			
		dec	di		
			
;Syntax error. DI points to character in the input buffer			
;which caused error. By subtracting from start of buffer,			
;we will know how far to tab over to appear directly below			
;it on the terminal. Then print ^ Error.			
			
ERROR:						;  xref 926B:00D7, 030D, 0318, 035D		
						;            0379, 037E			
		sub	di,LINEBUF-1		; 117h	
		mov	cx,di		
		call	TAB			; (0190)	
		mov	si,SYNERR		
			
;Print error message and abort to command level			
			
PRINT:						;  xref 926B:0550		
		call	PRINTMES		; (012B)	
		jmp	COMMAND			; (00A0)	
			
;Short form of ENTER command. A list of values from the			
;command line are put into memory without using normal			
;ENTER mode.			
			
GETLIST:			
		call	LIST			; (036D)	
		pop	di		
		pop	es		
		mov	si,LINEBUF		; (926B:0118=0FFh)	
		mov	cx,bx		
		rep	movsb			; Rep when cx >0 Mov [si] to es:[di]	
		retn			
			
;Enter values into memory at a specified address. If the			
;line contains nothing but the address we go into "enter			
;mode", where the address and its current value are printed			
;and the user may change it if desired. To change, type in			
;new value in hex. Backspace works to correct errors. If			
;an illegal hex digit or too many digits are typed, the			
;bell is sounded but it is otherwise ignored. To go to the			
;next byte (with or without change), hit space bar. To			
;back up to a previous address, type "-". On			
;every 8-byte boundary a new line is started and the address			
;is printed. To terminate command, type carriage return.			
;   Alternatively, the list of bytes to be entered may be			
;included on the original command line immediately following			
;the address. This is in regular LIST format so any number			
;of hex values or strings in quotes may be entered.			
			
ENTER:			
		mov	cx,5		
		call	GETHEX			; (0303)	
		call	GETSEG			; (01BC)	
;Adjust segment and displacement so we are in the middle			
;of the segment instead of the very bottom. This allows			
;backing up a long way.			
		sub	ah,8		
		add	dh,80h		
		push	ax		
		push	dx		
		call	SCANB			; (013E)	
		jnz	GETLIST			; Jump if not zero	
		pop	di		
		pop	es		
GETROW:						;  xref 926B:043E		
		call	OUTDI			; (0156)	
		call	BLANK			; (018C)	
GETBYTE:					;  xref 926B:0439		
		mov	al,es:[di]		
		call	HEX			; (016C)	
		mov	al,'.'		
		call	OUT			; (0181)	
		mov	cx,2		
		mov	dx,0		
GETDIG:						;  xref 926B:03E3, 0403, 0408, 0413		
		call	IN			; (011B)	
		mov	ah,al		
		call	HEXCHK			; (0323)	
		xchg	ah,al		
		jc	NONEX			; Jump if carry Set	
		call	OUT			; (0181)	
		mov	dh,dl		
		mov	dl,ah		
		loop	GETDIG			; Loop if cx > 0	
;We have two digits, so all we will accept now is a command.			
WAIT:			
		call	IN			; (011B)	
NOHEX:						;  xref 926B:03DA		
		cmp	al,8		
		je	BS			; Jump if equal	
		cmp	al,7Fh		
		je	BS			; Jump if equal	
		cmp	al,'-'		
		je	PREV			; Jump if equal	
		cmp	al,0Dh		
		je	EOL			; Jump if equal	
		cmp	al,' '		
		je	NEXT			; Jump if equal	
;If we got here, character was invalid. Sound bell			
		mov	al,7		
		call	OUT			; (0181)	
		jcxz	WAIT			; Jump if cx=0	
		jmp	short GETDIG		; (03D0)	
BS:						;  xref 926B:03EA, 03EE		
		cmp	cl,2		
		je	GETDIG			; Jump if equal	
		inc	cl		
		mov	dl,dh		
		mov	dh,ch		
		call	BACKUP			; (0128)	
		jmp	short GETDIG		; (03D0)	
			
;If new value has been entered, convert it to binary and			
;put into memory. Always bump pointer to next location			
			
STORE:			
		cmp	cl,2		
		je	NOSTO			; Jump if equal	
;Rotate DH left 4 bits to combine with DL and make a byte value			
		push	cx		
		mov	cl,4		
		shl	dh,cl			; Shift w/zeros fill	
		pop	cx		
		or	dl,dh		
		mov	es:[di],dl		
NOSTO:						;  xref 926B:0418		
		inc	di		
		retn			
EOL:						;  xref 926B:03F6		
		call	STORE			; (0415)	
		jmp	CRLF			; (010D)	
NEXT:						;  xref 926B:03FA		
		call	STORE			; (0415)	
		inc	cx		
		inc	cx		
		call	TAB			; (0190)	
		mov	ax,di		
		and	al,7		
		jnz	GETBYTE			; Jump if not zero	
NEWROW:						;  xref 926B:0446		
		call	CRLF			; (010D)	
		jmp	GETROW			; (03B9)	
PREV:						;  xref 926B:03F2		
		call	STORE			; (0415)	
;DI has been bumped to next byte. Drop it 2 to go to previous addr			
		dec	di		
		dec	di		
		jmp	short NEWROW		; (043B)	
			
;Perform register dump if no parameters or set register if a			
;register designation is a parameter.			
			
REG:			
		call	SCANP			; (0135)	
		jz	DISPREG			; Jump if zero	
		mov	dl,[di]		
		inc	di		
		mov	dh,[di]		
		cmp	dh,0Dh		
		je	FLAG			; Jump if equal	
		inc	di		
		call	GETEOL			; (037B)	
		cmp	dh,20h			; ' '	
		je	FLAG			; Jump if equal	
		mov	di,offset REGTAB	; (926B:06F0='AXBXCXDXSPBPSIDI')	
		xchg	dx,ax		
		push	cs		
		pop	es		
		mov	cx,REGTABLEN		;0Eh	
		repne	scasw			; Rep zf=0+cx >0 Scan es:[di] for ax	
		jnz	BADREG			; Jump if not zero	
		or	cx,cx			; Zero ?	
		jnz	NOTPC			; Jump if not zero	
		dec	di		
		dec	di		
		mov	ax,cs:[di-2]		
NOTPC:						;  xref 926B:046F		
		call	OUT			; (0181)	
		mov	al,ah		
		call	OUT			; (0181)	
		call	BLANK			; (018C)	
		push	ds		
		pop	es		
		lea	bx,ds:REGDIF-2[di]	; (0000:FAAA=3Bh) Load effective addr	
		mov	dx,[bx]		
		call	OUT16			; (0165)	
		call	CRLF			; (010D)	
		mov	al,':'		
		call	OUT			; (0181)	
		call	INBUF			; (00DA)	
		call	SCANB			; (013E)	
		jz	RET3			; Jump if zero	
		mov	cx,4		
		call	GETHEX1			; (0306)	
		call	GETEOL			; (037B)	
		mov	[bx],dx		
			
RET3:		retn		
BADREG:						;  xref 926B:046B, 04D0		
		mov	ax,5200+'B'		
		jmp	ERR			; (0545)	
DISPREG:					;  xref 926B:044B		
		mov	si,offset REGTAB	; (926B:06F0='AXBXCXDXSPBPSIDI')	
		mov	bx,AXSAVE		
		mov	cx,8		
		call	DISPREGLINE		; (0520)	
		call	CRLF			; (010D)	
		mov	cx,5		
		call	DISPREGLINE		; (0520)	
		call	BLANK			; (018C)	
		call	DISPFLAGS		; (055D)	
		jmp	CRLF			; (010D)	
FLAG:						;  xref 926B:0455, 045E		
		cmp	dl,'F'		
		jne	BADREG			; Jump if not equal	
		call	DISPFLAGS		; (055D)	
		mov	al,'-'		
		call	OUT			; (0181)	
		call	INBUF			; (00DA)	
		call	SCANB			; (013E)	
		xor	bx,bx			; Zero register	
		mov	dx,word ptr FSAVE	; (926B:01B6=448h)	
GETFLG:						;  xref 926B:051E		
		mov	si,di		
		lodsw				; String [si] to ax		
		cmp	al,0Dh		
		je	SAVCHG			; Jump if equal	
		cmp	ah,0Dh		
		je	FLGERR			; Jump if equal	
		mov	di,offset FLAGTAB	; (926B:070C=0)	
		mov	cx,20h		
		push	cs		
		pop	es		
		repne	scasw			; Rep zf=0+cx >0 Scan es:[di] for ax	
		jnz	FLGERR			; Jump if not zero	
		mov	ch,cl		
		and	cl,0Fh		
		mov	ax,1		
		rol	ax,cl			; Rotate	
		test	ax,bx		
		jnz	REPFLG			; Jump if not zero	
		or	bx,ax		
		or	dx,ax		
		test	ch,10h		
		jnz	NEXTFLG			; Jump if not zero	
		xor	dx,ax		
NEXTFLG:					;  xref 926B:0513		
		mov	di,si		
		push	ds		
		pop	es		
		call	SCANP			; (0135)	
		jmp	short GETFLG		; (04E6)	
DISPREGLINE:			
		lods	word ptr cs:[si]	; String [si] to ax	
		call	OUT			; (0181)	
		mov	al,ah		
		call	OUT			; (0181)	
		mov	al,'='		
		call	OUT			; (0181)	
		mov	dx,[bx]		
		inc	bx		
		inc	bx		
		call	OUT16			; (0165)	
		call	BLANK			; (018C)	
		call	BLANK			; (018C)	
		loop	DISPREGLINE		; Loop if cx > 0	
		retn			
REPFLG:						;  xref 926B:050A		
		mov	ax,4600+'D'		;44h	
FERR:						;  xref 926B:055B		
		call	SAVCHG			; (0553)	
ERR:						;  xref 926B:0223, 04AC, 06A3		
		call	OUT			; (0181)	
		mov	al,ah
		call	OUT			; (0181)	
		mov	si,ERRMES		
		jmp	PRINT			; (038E)	
SAVCHG:			
		mov	word ptr [FSAVE],dx	; (926B:01B6=448h)	
		retn			
FLGERR:						;  xref 926B:04F0, 04FC		
		mov	ax,4600+'B'		
		jmp	short FERR		; (0542)	
DISPFLAGS:			
		mov	si,offset FLAGTAB	; (926B:070C=0)	
		mov	cx,10h		
		mov	dx,word ptr [FSAVE]	; (926B:01B6=448h)	
			
DFLAGS:						;  xref 926B:0580		
		lods	word ptr cs:[si]	; String [si] to ax	
		shl	dx,1			; Shift w/zeros fill	
		jc	FLAGSET			; Jump if carry Set	
		mov	ax,cs:[si+1Eh]		
FLAGSET:					;  xref 926B:056B		
		or	ax,ax			; Zero ?	
		jz	NEXTFLG			; Jump if zero	
		call	OUT			; (0181)	
		mov	al,ah		
		call	OUT			; (0181)	
		call	BLANK			; (018C)	
NEXTFLG:					;  xref 926B:0573		
		loop	DFLAGS			; Loop if cx > 0	
		retn			
			
;Trace 1 instruction or the number of instruction specified			
;by the parameter using 8086 trace mode. Registers are all			
;set according to values in save area			
			
TRACE:			
		call	SCANP			; (0135)	
		call	HEXIN			; (0321)	
		mov	dx,1		
		jc	STOCNT			; Jump if carry Set	
		mov	cx,4		
		call	GETHEX			; (0303)	
STOCNT:						;  xref 926B:058C		
		mov	ds:[TCOUNT],dx		; (0000:0102=0F000h)	
		call	GETEOL			; (037B)	
STEP:						;  xref 926B:05E8		
		mov	word ptr ds:[BRKCNT],0	; (926B:0100=3CDEh)	
		or	byte ptr [FSAVE+1],1	; (926B:01B7=4)	
EXIT:						;  xref 926B:06D1		
		mov	word ptr ds:[12],BREAKFIX	; (0000:000C=6F4h)	
		mov	ds:[14],cs		; (0000:000E=70h)	
		mov	word ptr ds:[4],REENTER	; (0000:0004=6F4h)	
		mov	ds:[6],cs		; (0000:0006=70h)	
		cli				; Disable interrupts		
		mov	word ptr ds:[64],REENTER	; (0000:0064=1755h)	
		mov	ds:[66],cs		; (0000:0066=4D9h)	
		mov	sp,STACK		
		pop	ax		
		pop	bx		
		pop	cx		
		pop	dx		
		pop	bp		
		pop	bp		
		pop	si		
		pop	di		
		pop	es		
		pop	es		
		pop	ss		
		mov	sp,ds:[SPSAVE]		; (0000:01A4=1BD0h)	
		push	word ptr ds:[FSAVE]	; (0000:01B6=0C000h)	
		push	word ptr ds:[CSSAVE]	; (0000:01B2=0F000h)	
		push	word ptr ds:[IPSAVE]	; (0000:01B4=2607h)	
		mov	ds,ds:[DSSAVE]		; (0000:01AC=1BD0h)	
		iret				; Interrupt return		
STEP1:		jmp	short STEP		; (059B)
			
			
		xchg	bp,sp		
		dec	word ptr [bp]		
		xchg	bp,sp		
			
;Re-entry point from trace mode or interrupt during			
;execution. All registers are saved so they can be			
;displayed or modified.			
			
REENTER:			
		mov	cs:[SPSAVE+SEGDIF],sp	; (926B:09A4=0)	
		mov	cs:[SSSAVE+SEGDIF],ss	; (926B:09B0=0B76h)	
		xor	sp,sp			; Zero register	
		mov	ss,sp		
		mov	sp,RSTACK		
		push	es		
		push	ds		
		push	di		
		push	si		
		push	bp		
		dec	sp		
		dec	sp		
		push	dx		
		push	cx		
		push	bx		
		push	ax		
		push	ss		
		pop	ds		
		mov	sp,word ptr [SPSAVE]	; (926B:01A4=665h)	
		mov	ss,word ptr [SSSAVE]	; (926B:01B0=672h)	
		pop	word ptr [IPSAVE]	; (926B:01B4=381h)	
		pop	word ptr [CSSAVE]	; (926B:01B2=381h)	
		pop	ax		
		and	ah,0FEh		
		mov	word ptr [FSAVE],ax	; (926B:01B6=448h)	
		mov	word ptr [SPSAVE],sp	; (926B:01A4=665h)	
		push	ds		
		pop	es		
		push	ds		
		pop	ss		
		mov	sp,STACK		
		mov	word ptr ds:[64h],INT	; (926B:0064=1AE8h)	
		mov	al,' '		
		out	BASE+2,al		; port 0F2h ??I/O Non-standard	
		sti				; Enable interrupts		
		cld				; Clear direction		
		call	CRLF			; (010D)	
		call	DISPREG			; (04AF)	
		dec	word ptr ds:[TCOUNT]	; (926B:0102=7408h)	
		jnz	STEP1			; Jump if not zero	
ENDGO:			
		mov	si,BPTAB		; (926B:0104=0F3h)	
		mov	cx,word ptr ds:[BRKCNT]	; (926B:0100=3CDEh)	
		jcxz	COMJMP			; Jump if cx=0	
			
CLEARBP:					;  xref 926B:0660		
		mov	dx,[si+BPLEN]		
		lodsw				; String [si] to ax		
		push	ax		
		call	GETSEG			; (01BC)	
		mov	es,ax		
		mov	di,dx		
		pop	ax		
		stosb				; Store al to es:[di]		
		loop	CLEARBP			; Loop if cx > 0	
COMJMP:		jmp	COMMAND			; (00A0)
			
;Input from the specified port and display result			
INPUT:			
		mov	cx,4		
		call	GETHEX			; (0303)	
		in	al,dx			; port 0F1h ??I/O Non-standard	
		call	HEX			; (016C)	
		jmp	CRLF			; (010D)	
			
;Output a value to specified port.
			
OUTPUT:			
		mov	cx,4		
		call	GETHEX			; (0303)	
		push	dx		
		mov	cx,2		
		call	GETHEX			; (0303)	
		xchg	dx,ax		
		pop	dx		
		out	dx,al			; port 0F1h ??I/O Non-standard	
		retn			
			
;Jump to a program, setting up registers according to the			
;save area. Up to 10 breakpoint addresses may be specified.
			
GO:			
		mov	bx,LINEBUF		
		xor	si,si			; Zero register	
GO1:						;  xref 926B:069E		
		call	SCANP			; (0135)	
		jz	EXEC			; Jump if zero	
		mov	cx,5		
		call	GETHEX			; (0303)	
		mov	[bx],dx		
		mov	[bx-BPLEN+1],ah		; 13h	
		inc	bx		
		inc	bx		
		inc	si		
		cmp	si,BPMAX+1		; 0bh	
		jne	GO1			; Jump if not equal	
		mov	ax,5000H+'B'		
		jmp	ERR			; (0545)	
EXEC:						;  xref 926B:068B		
		mov	ds:[BRKCNT],si		; (0000:0100=0EC59h)	
		call	GETEOL			; (037B)	
		mov	cx,si		
		jcxz	NOBP			; Jump if cx=0	
		mov	si,BPTAB		; (0000:0104=0D0h)	
			
SETBP:						;  xref 926B:06C9		
		mov	dx,[si+BPLEN]		; 14h	
		lodsw	; String [si] to ax		
		call	GETSEG			; (01BC)	
		mov	ds,ax		
		mov	di,dx		
		mov	al,[di]		
		mov	byte ptr [di],0CCh		
		push	es		
		pop	ds		
		mov	[si-2],al		
		loop	SETBP			; Loop if cx > 0	
			
NOBP:						;  xref 926B:06AF		
		mov	word ptr ds:[TCOUNT],1	; (0000:0102=0F000h)	
		jmp	EXIT			; (05A6)	
			
;Console input interrupt handler. Used to interrupt commands			
;or programs under execution (if they have interrupts			
;enabled). Control-S causes a loop which waits for any other			
;character to be typed. Control-C causes abort to command			
;mode. All other characters are ignored.			
			
INT:			
		push	ax		
		mov	al,' '		
		out	BASE+2,al		; port 0F2h ??I/O Non-standard	
		in	al,DATA			; port 0F6h ??I/O Non-standard	
		and	al,7Fh		
		cmp	al,'S'-'@'		;13h	
		jne	NOSTOP			; Jump if not equal	
		call	IN			; (011B)	
NOSTOP:						;  xref 926B:06DF		
		cmp	al,'C'-'@'		;3	
		je	BREAK			; Jump if equal	
;Just ignore interrupt - restore AX and return			
		pop	ax		
		iret				; Interrupt return		
BREAK:						;  xref 926B:06E6		
		call	CRLF			; (010D)	
		jmp	COMMAND			; (00A0)	
REGTAB:			
		db	'AXBXCXDXSPBPSIDIDSESSSCSIPPC'	;  xref 926B:0460	
REGDIF:		EQU	AXSAVE-REGTAB	
			
;Flags are ordered to correspond with the bits of the flag			
;register, most significant bit first, zero if bit is not			
;a flag. First 16 entries are for bit set, second 16 for			
;bit reset.			
			
FLAGTAB:			
		DW	0		
		DW	0		
		DW	0		
		DW	0		
		DB	"OV"		
		DB	"DN"		
		DB	"EI"		
		DW	0		
		DB	"NG"		
		DB	"ZR"		
		DW	0		
		DB	"AC"		
		DW	0		
		DB	"PE"		
		DW	0		
		DB	"CY"		
		DW	0		
		DW	0		
		DW	0		
		DW	0		
		DB	"NV"		
		DB	"UP"		
		DB	"DI"		
		DW	0		
		DB	"PL"		
		DB	"NZ"		
		DW	0		
		DB	"NA"		
		DW	0		
		DB	"PO"		
		DW	0		
		DB	"NC"		
			
;Initialization table. First byte of each entry is no.			
;of bytes to output to the corresponding port. That			
;many initialization bytes follow.			
			
INITTABLE:			
;Port BASE+0 - Master 8259A. Intialization Command Word (ICW)			
;One sets level-triggered mode, multiple 8259As, require			
;ICW4.			
		DB	1		
		DB	19H		
;Port BASE+1 - Master 8259A. ICW2 sets vector base to 10H			
;ICW3 sets a slave on interrupt input 1; ICW4 sets buffered			
;mode, as a master, with Automatic End of Interrupt, 8086			
;vector; Operation Command Word (OCW) One sets interrupt			
;mask to enable line 1 (slave 8259A) only.			
		DB	4		
		DB	10H,2,0FH,0FDH		
;Port BASE+2 - Slave 8259A. ICW1 sets level-triggered mode,			
;multiple 8259As, require ICW4.			
		DB	1		
		DB	19H		
;Port BASE+3 - Slave 8259A. ICW2 sets vector base to 18H			
;ICW3 sets slave address as 1; ICW4 sets buffered mode,			
;as slave, with Automatic End of Interrupt (which doesn't			
;work in slaves), 8086 vector; OCW1 sets interrupt mask			
;to enable line 1 (serial receive) only.			
		DB	4		
		DB	18H,1,0BH,0FDH		
;Port Base+4 - 9513 Data. 9513 has previously been set			
;up for Counter 5 mode register with auto increment. Thus			
;mode is set to 0B63H, which is no gating, count source is			
;F1 (4 MHz), reload from load or hold, count down repetitively			
;in binary, with output toggle. Load register is set to			
;0007H, and Hold register is set to 0006H. Thus we			
;alternately divide by 7 and 6, which is divided by 2 by			
;the output toggle, thus providing a square wave of			
;4 MHz/13 = 307.7 kHz, which divided by 16 in the 8251A			
;provides 19,230 baud (0.16% high).			
		DB	6		
		DB	63H,0BH,7,0,6,0		
;Port BASE+5 - 9513 Control. Load and arm counter 5,			
;enabling baud rate generation. Then select counter			
;5 mode register, in case baud rate wasn't right.			
		DB	2		
		DB	70H,5		
;Port BASE+6 - 8251A Data. No initialization to this port.			
		DB	0		
;Port BASE+7 - 8251A Control. Since it is not possible to			
;know whether the 8251A next expects a Mode Instruction or			
;a Command Instruction, a dummy byte is sent which could			
;safely be interpreted as either but guarantees it is now			
;expecting a Command. The command sent is Internal Reset			
;which causes it to start expecting a mode. The mode sent			
;is for 2 stop bits, no parity, 8 data bits, 16X clock.			
;This is followed by the command to error reset, enable			
;transmitter and receiver, set RTS and DTR to +12V.			
		DB	4		
		DB	0B7H,77H,0CEH,37H		
HEADER:		db	0Dh, 0Ah, 0Ah, 'SCP 8086 Monitor 1.6',0Dh,8Ah	
SYNERR:		db	'^'	
ERRMES:		db	'Error',0Dh,8Ah	
BACMES:		db	8,32,8			;  xref 926B:0128
			
;Disk boot. Select one of the following routines by			
;setting the equates at the start of this program.			
			
BOOT:						;  xref 926B:0097		
		push	di		
DISK:		equ	78H	
			
; looks like this copies code below to low RAM			
		mov	si,DCOM			; (0000:079F=0B8h)	
		mov	di,80H			; (0000:0080=94h)	
		mov	cx,24h			; move 24h bytes	
		rep	movs word ptr es:[di],word ptr cs:[si]	; Rep when cx >0 Mov [si] to es:[di]	
		jmp	$+0E4h		
			
DCOM:			
		xor	bh,bh			; drive select	
		mov	al,0D0h		
		out	DISK,al			; port 78h ??I/O Non-standard	
HOLD:			
		mov	cx,5		
DCOM0:						;  xref 926B:07AA		
		aam				; Ascii adjust		
		loop	DCOM0			; Loop if cx > 0	
			
READY:						;  xref 926B:07D5		
		xor	bh,8		
		mov	al,bh		
		out	DISK+4,al		; port 7Ch ??I/O Non-standard	
		mov	al,8		
		out	DISK,al			; port 78h ??I/O Non-standard	
		in	al,DISK+4		; port 7Ch ??I/O Non-standard	
		mov	di,LOAD			; 200h (926B:0200=0E7h)	
		mov	al,1		
		out	DISK+2,al		; port 7Ah ??I/O Non-standard	
		mov	dx,7Bh		
		mov	al,8Ch		
		out	DISK,al			; port 78h ??I/O Non-standard	
		jmp	short READ		; (07CA)	
			
READLOOP:					;  xref 926B:07CF		
		stosb				; Store al to es:[di]		
READ:						;  xref 926B:07C7		
		in	al,DISK+4		; port 7Ch ??I/O Non-standard	
		rcl	al,1			; Rotate thru carry	
		in	al,dx			; port 7Bh ??I/O Non-standard	
		jc	READLOOP		; Jump if carry Set	
		in	al,DISK			; port 78h ??I/O Non-standard	
		and	al,9Ch		
		jnz	READY			; Jump if not zero	
		mov	word ptr [CSSAVE],0	; (926B:01B2=381h)	
		mov	word ptr [IPSAVE],LOAD	; (926B:01B4=381h)	
		pop	di		
		jmp	GO			;*(05A2)	
			
		db	0E9h,0BBh,0FDh		
			
		db	9 dup (0FFh)		
			
ENTRY:			
		db	0EAh, 00h, 00h, 80h,0FFh	;FF80:0000	
			
;Baud Rate Table. The 9513 divides 2MHz by these values.			
;They are for 9600, 1200, 300, 150, 110 baud			
; dw 13,104,416,832,1144			
BAUD:		db	0Dh			;  xref 926B:006C
		db	00h, 68h, 00h,0A0h, 01h, 40h		
		db	03h, 78h, 04h		
		db	0FFh		
