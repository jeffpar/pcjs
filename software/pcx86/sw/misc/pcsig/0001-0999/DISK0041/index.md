---
layout: page
title: "PC-SIG Diskette Library (Disk #41)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0041/
machines:
  - id: ibm5150
    type: pcx86
    config: /machines/pcx86/ibm/5150/cga/256kb/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0041"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5150" %}
{% comment %}samples_begin{% endcomment %}

## FILES41.TXT

{% raw %}
```
---------------------------------------------------------------------------
Disk No 41    Kermit Communication System  Version 2.29              v2.3
---------------------------------------------------------------------------
MSCMD    ASM  Kermit assembly language source code
MSCOMM   ASM  "
MSFILE   ASM  "
MSKERM   ASM  "
MSRECV   ASM  "
MSSEND   ASM  "
MSSERV   ASM  "
MSSET    ASM  "
MSTERM   ASM  "
MSXDMB   ASM  "
MSXIBM   ASM  "
MSYIBM   ASM  "
MSDEFS   H    "
MSKERMIT INI  "
MSXDMB   HLP  Help file
MSBUILD  HLP  "
```
{% endraw %}

## MSCMD.ASM

{% raw %}
```
	public comnd, cmcfrm, prserr, repars, cmgtch, drives, comand, fcbcpy
	include msdefs.h

datas 	segment	public 'datas'
	extrn	flags:byte, trans:byte, fcb:byte, buff:byte
	extrn	taklev:byte, takadr:word, dosnum:byte

comand	cmdinfo	<>
cmer00  db      cr,lf,'?Program error   Invalid COMND call$'
cmer01  db      cr,lf,'?Ambiguous$'
cmer02  db      cr,lf,'?Illegal input file spec$'
cmer03	db	cr,lf,'?Invalid command$'		 ; [19e]
cmer04	db	cr,lf,'?Invalid command or operand$'     ; [1]
cmer06	db	cr,lf,'?Wildcard not allowed$'		 ; [21a]
cmer07	db	cr,lf,'?Invalid drive specificaton$'	 ; [21a]
cmin00  db      ' Confirm with carriage return$'
cmin01	db	' One of the following:',cr,lf,'$'

cmthlp	dw	0		; Text of help message for random input.
drives	db	0		; How many drives we have. [21a]
crlf    db      cr,lf,'$'
ctcmsg	db	'^C$'
prsp	db	' $'			; Print a space.
hlpmsg	dw	0			; Address of help message.
spchar	db	24H,26H,23H,40H,21H,25H,27H,28H,29H,2DH
	db	3CH,3EH,7BH,7DH,5FH,5CH,5EH,7EH,7CH,60H
spclen	equ	$-spchar
spchar2	db	24H,26H,23H,40H,21H,25H,27H,28H,29H,2DH
	db	7BH,7DH,5FH,5EH,7EH,60H
spc2len	equ	$-spchar2
escspc	db	10O,' ',10O,'$'		; Clear escape.
clrspc  db      ' ',10O,'$'             ; Clear space.
filbuf  db	60H DUP(?)		; Character buffer.
tbuff	db	80  DUP(?)
cmdstk	dw	?
datas	ends

code	segment	public
	extrn	dodel:near, ctlu:near, cmblnk:near, locate:near, takrd:near
	extrn	clearl:near
	assume	cs:code,ds:datas,es:datas

;       This routine parses the specified function in AH. Any additional
;       information is in DX and BX.
;       Returns +1 on success
;               +4 on failure (assumes a JMP follows the call)
 
CMND	PROC NEAR
comnd:  mov comand.cmstat,ah    ; Save what we are presently parsing.
	mov cmdstk,sp		; save stack ptr locally.
        call cminbf             ; Get chars until an action or a erase char.
	mov ah,comand.cmstat	; Restore 'ah' for upcoming checks.
        cmp ah,cmcfm            ; Parse a confirm?
        jz cmcfrm               ; Go get one.
        cmp ah,cmkey            ; Parse a keyword?
	jnz cm1
        jmp cmkeyw               ; Try and get one.
cm1:    cmp ah,cmifi		; Parse an input file spec?
	jnz cm2
	jmp cmifil		; Go get one.
cm2:	cmp ah,cmofi		; Output file spec?
	jnz cm3
	jmp cmofil		; Go get one.
cm3:	cmp ah,cmtxt		; Parse arbitrary text.   [8]
	jnz cm4
	jmp cmtext
cm4:	mov ah,prstr		; Else give error.
	mov dx,offset cmer00	; "?Unrecognized COMND call"
	int dos
	ret

; This routine gets a confirm.

cmcfrm: call cmgtch		; Get a char.
	cmp ah,0		; Is it negative (a terminator; a space or
				; a tab will not be returned here as they
				; will be seen as leading white space.)
        js cmcfr0
        ret                     ; If not, return failure.
cmcfr0: and ah,7FH                      ; Turn off the minus bit.
        cmp ah,esc                      ; Is it an escape?
        jne cmcfr2
        mov ah,conout
        mov dl,bell             ; Get a bell.
        int dos
        mov ah,0
        mov comand.cmaflg,ah    ; Turn off the action flag.
        mov bx,comand.cmcptr    ; Move the pointer to before thee scape.
        dec bx
        mov comand.cmcptr,bx
        mov comand.cmdptr,bx
        dec comand.cmccnt       ; Decremrnt the char count.
        jmp cmcfrm              ; Try again.
cmcfr2: cmp ah,'?'              ; Curious?
        jne cmcfr3
        mov ah,prstr            ; Print something useful.
        mov dx,offset cmin00
        int dos
        mov ah,prstr
        mov dx,offset crlf      ; Print a crlf.
        int dos
        mov ah,prstr
        mov dx,comand.cmprmp    ; Reprint the prompt.
        int dos
        mov bx,comand.cmdptr    ; Get the pointer into the buffer.
        mov ah,'$'              ; Put a $ there for printing.
        mov [bx],ah
        mov bx,comand.cmcptr
        dec bx                  ; Decrement & save the buffer pointer.
        mov comand.cmcptr,bx
        mov ah,prstr
        mov dx,offset comand.cmdbuf
        int dos
        mov ah,0                        ; Turn off the action flag.
        mov comand.cmaflg,ah
        jmp repars              ; Reparse everything.
 
cmcfr3: cmp ah,ff                       ; Is it a form feed?
        jne cmcfr4
        call cmblnk             ; If so blank the screen.
cmcfr4: jmp rskp
 
;       This routine parses a keyword from the table pointed
;       to in DX.  The format of the table is as follows:
;
;       addr:   db      n       ; Where n is the # of entries in the table.
;               db      m       ; M is the size of the keyword.
;               db      'string$' ; Where string is the keyword.
;               dw      ab      ; Where ab is data to be returned.
;
;       The keywords must be in alphabetical order.


cmkeyw: mov comand.cmhlp,bx     ; Save the help.
        mov comand.cmptab,dx    ; Save the beginning of keyword table.
        mov bx,dx
        mov ch,[bx]             ; Get number of entries in table.
        inc bx
	mov dx,comand.cmdptr    ; Save command pointer.
	mov comand.cmsptr,dx	; Save pointer's here.
cmky1:  cmp ch,0                ; Any commands left to check?
        jne cmky2
	jmp cmky41		; no, go complain
cmky2:  dec ch
	mov cl,0		; Keep track of how many chars read in so far.
        call cmgtch             ; Get a char.
        cmp ah,0                ; Do we have a terminator?
        jns cmky2x 
	jmp cmky4               ; Negative number means we do.
cmky2x: inc bx                  ; Point to first letter of keyword.
	inc cl			; Read in another char.
        mov al,[bx]                   
        cmp ah,'a'              ; Less than a?
        jl cmky21               ; If so, don't capitalize.
        cmp ah,'z'+1            ; More than z?
        jns cmky21
        and ah,137O             ; Capitalize the letter.
cmky21: cmp ah,al
	je cmky3
	jg cmky2y
        jmp cmky41              ; Fail if ah preceeds al alphabetically.
cmky2y: jmp cmky6               ; Not this keyword - try the next.
cmky3:  inc bx                  ; We match here, how 'bout next char?
        mov al,[bx]
        cmp al,'$'               ; End of keyword?
	jne cmky3x
        jmp cmky7                ; Succeed.
cmky3x:	mov dl,al		; Save al's char here.
        call cmgtch
	inc cl			; Read in another char.
	mov al,dl
	cmp ah,'a'
	jl cmky31
	cmp ah,'z'+1
	jns cmky31
	and ah,137O
cmky31: cmp ah,esc+80H		; Escape Recognition (escape w/minus bit on)?
	je cmky3y
	cmp ah,'?'+80H		; A question mark?    [3]
	je cmky3y
	cmp ah,' '+80H		; A space?
	je cmky3y
	cmp ah,cr+80H		; Carriage return?
	je cmky3y
	jmp cmky38
cmky3y:	mov comand.cmkptr,bx	; Save bx here.
	mov comand.cmsiz,cx	; Save size info.
	mov comand.cmchr,ah	; Save char for latter.
	call cmambg		; See if input is ambiguous or not.
	 jmp cmky32		; Succeeded (not ambiguous).
	mov ah,comand.cmchr
	cmp ah,esc+80H		; Escape?
	je cmky3z
	cmp ah,'?'+80H		; maybe question mark?
	je cmkyj1		; yes, go handle
	jmp cmky41		; Else fail.
cmky3z:	mov ah,conout		; Ring a bell.
	mov dl,bell
	int dos
	mov bx,comand.cmcptr	; Move pointer to before the escape.
	dec bx
	mov comand.cmcptr,bx
	mov comand.cmdptr,bx
	dec comand.cmccnt	; Decrement char count.
	mov bx,comand.cmkptr	; Failed - pretend user never typed ....
	mov cx,comand.cmsiz	; ... in a char.
	dec cl			; Don't count the escape.
	dec bx
	mov comand.cmaflg,0	; Reset the action flag.
	jmp cmky3		; Keep checking.
; ambiguous.  Print out all the keywords that match
cmkyj1:	mov dx,offset cmin01
	mov ah,prstr
	int dos
	mov bx,comand.cmkptr	; this is current keyword
	mov cx,comand.cmsiz	; we are cl chars into it
	mov ch,0
	sub bx,cx		; back up to beginning
	inc bx			; not counting ?
	mov comand.cmkptr,bx	; save beginning of kw
cmkyj2:	mov dl,tab		; put a tab before each keyword
	mov ah,conout
	int dos
	mov dx,comand.cmkptr	; get current keyword
	mov ah,prstr
	int dos			; print it
	mov bx,comand.cmkptr	; get keyword back
	dec bx
	mov al,[bx]		; get length
	mov ah,0
	add ax,5		; skip length, $, value, next length
	add bx,ax		; this is next keyword
	mov si,bx
	mov di,comand.cmkptr	; compare with last keyword
	mov comand.cmkptr,bx	; update this
	mov cx,comand.cmsiz
	dec ch			; are we at end of table?
	jl cmkyj3		; yes, don't go on
	mov comand.cmsiz,cx	; else update count
	mov ch,0
	dec cl			; this includes ?
	jcxz cmkyj2		; empty, just print it
	repe cmpsb		; compare to previous string
	je cmkyj2		; same, go print this one
cmkyj3:	jmp cmky50		; else go finish up

cmky32: mov cx,comand.cmsiz	; Restore info.
	mov bx,comand.cmkptr	; Our place in the keyword table.
	cmp comand.cmchr,0A0H	; Space?
	je cmky35
	cmp comand.cmchr,0BFH	; Question mark?     [3]
	je cmky35
	cmp comand.cmchr,8DH	; Carriage return?
	je cmky35
	dec comand.cmcptr	; Pointer into buffer of input.
	mov dx,comand.cmcptr
cmky33:	mov ah,[bx]		; Get next char in keyword.
	cmp ah,'$'		; Are we done yet?
	jz cmky34
	mov di,dx
	mov [di],ah
	inc bx
	inc dx
	inc comand.cmccnt
	jmp cmky33
cmky34:	mov ah,' '
	mov di,dx
	mov [di],ah		; Put a blank in the buffer.
	inc dx
	mov cx,comand.cmcptr	; Remember where we were.
	mov comand.cmcptr,dx	; Update our pointers.
	mov comand.cmdptr,dx
	mov ah,'$'
	mov di,dx
	mov [di],ah		; Add '$' for printing.
	mov ah,prstr
	mov dx,cx		; Point to beginning of filled in data.
	int dos
	inc bx			; Point to address we'll need.
	mov bx,[bx]
	mov comand.cmaflg,0	; Turn off action flag.
	jmp rskp

cmky35:	inc bx
	mov ah,[bx]		; Find end of keyword. 
	cmp ah,'$'
	jne cmky35	
	inc bx
	mov bx,[bx]		; Address of next routine to call.
;	mov comand.cmaflg,0	; Zero the action flag.
	jmp rskp

cmky38:	cmp ah,al
	je cmky39
        jmp cmky6               ; Go to end of keyword and try next.
cmky39:	jmp cmky3		; Check next letter.
           
cmky4:  and ah,7FH              ; Turn off minus bit.
        cmp ah,'?'              ; Need help?
        je cmky5
	cmp ah,' '		; Just a space - no error.
	je cmky51
	cmp ah,cr
	je cmky51
	cmp ah,tab
	je cmky51 
	cmp ah,esc		; Ignore escape?
	je cmky43
cmky41: mov ah,prstr
        mov dx,offset cmer03
        int dos
        jmp prserr              ; Parse error - give up.

cmky43:	mov ah,conout		; Ring a bell.
	mov dl,bell
	int dos
	dec comand.cmcptr	;[ESC] don't trash BX here.
	dec comand.cmdptr	;[ESC] ditto
	dec comand.cmccnt	; Don't count the escape.
	mov comand.cmaflg,0	; Reset action flag.
	inc ch			; Account for a previous 'dec'.
	jmp cmky1		; Start over.

cmky5:	inc bx			; point to actual keyword
	mov comand.cmkptr,bx	; remember current kw
	mov cl,1		; code above expects to count ?
	mov comand.cmsiz,cx	; and size
	mov dx,comand.cmhlp
	or dx,dx		; was any help given?
	jnz cmky5a		; yes, use it
	jmp cmkyj1		; else make our own message
cmky5a:	mov ah,prstr
        int dos
cmky50:	mov ah,prstr
	mov dx,offset crlf
	int dos
	mov dx,comand.cmprmp	; Address of prompt.
	int dos
	mov bx,comand.cmdptr	; Get pointer into buffer.
	mov al,'$'
	mov [bx],al		; Add dollar sign for printing.
	mov dx,offset comand.cmdbuf
	int dos
	dec comand.cmcptr	; Don't keep it in the buffer.
	dec comand.cmccnt	; Don't conut it.
	mov comand.cmaflg,0     ; Turn off the action flag.
        jmp repars

cmky51:	cmp comand.cmcr,1	; Are bare CR's allowed?
	je cmky52		; Yes.
	mov ah,prstr
	mov dx,offset cmer04	; Complain.
	int dos
cmky52:	jmp prserr

cmky6:  inc bx                  ; Find end of keyword.
        mov al,[bx]
        cmp al,'$'
        jne cmky6             
        inc bx                  ; Beginning of next command.
        inc bx
        inc bx
	mov dx,comand.cmsptr	; Get old cmdptr.
	mov comand.cmdptr,dx	; Restore.
	mov comand.cmsflg,0FFH
        jmp cmky1               ; Keep trying.

cmky7:  call cmgtch             ; Get char.
	cmp ah,0
	js cmky71		; Ok if a terminator.
        dec bx
        jmp cmky6               ; No match - try next keyword.
cmky71: inc bx                  ; Get necessary data.
        mov bx,[bx]
	cmp ah,9BH		; An escape?
	jne cmky72
	mov ah,prstr
	mov dx,offset prsp      ; Print a space.
	int dos
	mov di,comand.cmcptr
	dec di
	mov ah,20H
	mov [di],ah		; Replace escape char with space.
	mov comand.cmaflg,0
	mov comand.cmsflg,0FFH	; Pretend they typed a space.
cmky72: jmp rskp

; See if keyword is unambiguous or not from what the user has typed in.

cmambg:	cmp ch,0		; Any keywords left to check?
	jne cmamb0
	ret			; If not then not ambiguous.
cmamb0:	inc bx			; Go to end of keyword ...
	mov al,[bx]		; So we can check the next one.
	cmp al,'$'
	jne cmamb0
	add bx,4		; Point to start of next keyword.
	dec cl			; Don't count escape.
	mov dx,comand.cmsptr	; Buffer with input typed by user.
cmamb1:	mov ah,[bx]		; Keyword char.	
	mov di,dx
	mov al,[di]		; Input char.
	cmp al,'a'		; Do capitalizing.
	jl cmam11
	cmp al,'z'+1
	jns cmam11
	and al,137O
cmam11:	cmp ah,al		; Keyword bigger than input (alphabetically)?
	jle cmamb2		; No - keep checking.
	ret			; Yes - not ambiguous.
cmamb2:	inc bx			; Advance one char.
	inc dx
	dec cl
	jnz cmamb1
	jmp rskp		; Fail - it's ambiguous.

cmifil:	mov hlpmsg,bx		; Address of help message.
	mov bx,dx               ; Get the fcb address in bx.
        mov comand.cmfcb,bx     ; Save it.
        mov ch,0                ; Initialize char count.
        mov ah,0
        mov [bx],ah		; Set the drive to default to current.
	inc bx
        mov comand.cmfcb2,bx
        mov cl,' '
cmifi0: mov [bx],cl		; Blank the FCB.
        inc bx
        inc ah
        cmp ah,0BH		; Twelve?
        jl cmifi0
cmifi1: call cmgtch             ; Get another char.
        cmp ah,0                ; Is it an action character.
	js cmif1x		; Jump out of range. [21a]
        jmp cmifi2		; Ditto. [21a]
cmif1x: and ah,7FH              ; Turn off the action bit. [21a]
        cmp ah,'?'              ; A question mark?
        jne cmif12
        mov al,0
        mov comand.cmaflg,al    ; Blank the action flag.
        dec comand.cmcptr       ; Decrement the buffer pointer.
	dec comand.cmccnt	; Decrement count.
	mov ah,prstr
	mov dx,hlpmsg		; Help  message.
	int dos
	mov dx,offset crlf
	int dos
	mov dx,comand.cmprmp
	int dos
	mov bx,comand.cmdptr
	mov al,'$'
	mov [bx],al		; Put in dollar sign for printing.
	mov dx,offset comand.cmdbuf
	int dos
	jmp repars
cmif12: cmp ah,esc		; An escape?
	je cm12x
        jmp cmif13
cm12x:	mov comand.cmaflg,0	; Turn off the action flag.
	dec comand.cmcptr	; Move pointers to before the escape.
	dec comand.cmdptr
	dec comand.cmccnt	; Decrement char count.
	mov comand.cmchr,ch	; Save current character count.
	cmp ch,9		; Past '.'?
         jl cmf120		; No.
	dec ch			; Yes, don't count point.
cmf120:	mov di,comand.cmfcb2    ; Fill the rest with CP/M wildcards.
	mov ah,'?'

cmf121:	cmp ch,11		; Done?
	 jge cmf122		; Yes.
	mov [di],ah
	inc di
	inc ch
	jmp cmf121

cmf122: mov ah,sfirst		; Find first matching file?
	mov dx,comand.cmfcb	;[jd] use pointer to PASSED fcb
	int dos
	cmp al,0FFH		; Any found?
	jne cmf123		; Yes.
	 jmp cmf12b		; No, lose.
cmf123:	mov di,offset filbuf    ; Copy first file spec from DTA to buffer.
	mov bx,offset buff+1
	mov cl,11
	call fcbcpy
	mov di,offset filbuf+10H ; Get another copy (if not ambiguous).
	mov bx,offset buff+1
	mov cl,11
	call fcbcpy
	mov ah,snext		; More matching specs?
	mov dx,comand.cmfcb	;[jd] use PASSED fcb...
	int dos
	cmp al,0FFH
	 je cmf124		; Only one.
	mov di,offset filbuf+10H ; Copy second file spec.
	mov bx,offset buff+1
	mov cl,11
	call fcbcpy

cmf124:	mov si,offset filbuf	; Start comparing file names.
	mov bx,offset filbuf+10H
	mov di,comand.cmcptr	; Command buffer pointer
	mov cl,comand.cmchr	; Bypass characters typed.
	cmp cl,9		; Past '.'?
	 jl cmf125		; No.
	dec cl			; Yes, don't count point.
cmf125:	mov ch,0		; Adjust pointers.
	add si,cx
	add bx,cx
	mov ch,cl		; Update character count

cmf126:	cmp ch,11		; All done?
	jne cmf127		; No.
	 jmp cmf12a		; Yes.
cmf127:	cmp ch,8		; End of file name?
	 jne cmf128		; No.
	cmp comand.cmchr,9	; Exactly at point?
	 je cmf128		; Yes, don't output a second point.
	mov ah,'.'		; Output separator.
	mov [di],ah
	inc di
	inc comand.cmccnt
cmf128:	mov ah,[si]		; Get a character from first file spec.
	inc si
	mov al,[bx]		; Get another from second spec.
	inc bx
	cmp ah,al		; Compare.
	 jne cmf12a		; Ambiguous.
	inc ch			; Same, count.
	cmp ah,' '		; Blank?
	 je cmf129		; Yes, don't output.
	mov [di],ah
	inc di
	inc comand.cmccnt
cmf129:	jmp cmf126		; Repeat.

cmf12a:	mov comand.cmchr,ch	; Save count of characters processed.
	mov ah,'$'		; Put terminator into buffer.
	mov [di],ah
	mov comand.cmcptr,di    ; Save pointer for recognized characters.
	mov ah,prstr
	mov dx,comand.cmdptr
	int dos
	mov ch,comand.cmchr	; Characters processed.
	cmp ch,11		; Complete file name.
	 je cmf12c		; Yes, don't beep.

cmf12b:	mov ah,conout		; Beep, if not recognized.
	mov dl,bell
	int dos			; Ring the bell.
cmf12c:	jmp repars

cmif13: mov ah,ch               ; It must be a terminator.
        cmp ah,0                ; Test the length of the file name.
	jnz cmf3x
	cmp comand.cmcr,1	; Is zero length OK? [21a]
	je cmf3z		; Return successfully. [21a]
        jmp cmifi9              ; If zero complain.
cmf3x:  cmp ah,0DH
        js cmf3y
	jmp cmifi9              ; If too long complain.
cmf3y:  jmp rskp                ; Otherwise we have succeeded.
cmf3z:	push es
	mov ax,ds
	mov es,ax
	mov di,comand.cmfcb
	inc di
	mov cx,11
	mov al,'?'
	repne stosb
	pop es
	mov flags.wldflg,0FFH	; Remember we had a wildcard.
	jmp rskp
cmifi2: cmp ah,'.'
        jne cmifi3
        inc ch
        mov ah,ch
        cmp ah,1H		; Any chars yet?
      	jnz cmf2x
	jmp cmifi9		; No, give error.
cmf2x:  cmp ah,0AH		; Tenth char?
      	js cmf2y
	jmp cmifi9              ; Past it, give an error.
cmf2y:  mov dl,9H
        mov dh,0
        mov bx,comand.cmfcb
        add bx,dx               ; Point to file type field.
        mov comand.cmfcb2,bx
        mov ch,9H               ; Say we've gotten nine.
        jmp cmifi1              ; Get the next char.
cmifi3: cmp ah,':'
        jne cmifi4
        inc ch
        cmp ch,2H		; Is it in right place for a drive?
	je cmif3x
        jmp cmifi9              ; If not, complain.
cmif3x: mov ch,0		; Reset char count.
	mov flags.droflg,1	; Override default drive. [21a]
	mov flags.nmoflg,0	; Not so fast. [21a]
	mov bx,comand.cmfcb2
	mov al,':'		; Use for parsing drive name.
	mov [bx],al
	dec bx			; Point to drive spec.
	mov si,bx
	push es
	mov ax,ds
	mov es,ax
	mov di,offset tbuff	; Borrow this buffer.
	mov ah,prsfcb
	int dos
	pop es
	cmp al,0		; OK return code?
	je cmif3y		; Yes, keep going.
;        mov ah,[bx]		; Get the drive name.
;        sub ah,'@'              ; Get the drive number.
;	cmp ah,drives		; Did user specify a non-existant drive? [21a]
;	jle cmif3y		; Nope, so continue. [21a]
	mov dx,offset cmer07	; Fail with this error message. [21a]
	jmp cmif9x		; [21a]
cmif3y:	mov comand.cmfcb2,bx	; Put rest of filename starting here. [21a]
	mov ah,[bx]		; Pick up drive specified.
	sub ah,'@'		; Get real value.
 	mov bx,comand.cmfcb
        mov [bx],ah		; Put it in the fcb.
	push bx
	mov al,' '		; Overwrite the drive and ":".
	inc bx
	mov [bx],al
	inc bx
	mov [bx],al
	pop bx
        jmp cmifi1
cmifi4: cmp ah,'*'
        jne cmifi7
	cmp comand.cmrflg,1	; In receive mode?  [21a]
	jne cmif4x		; Jump out of range. [21a]
	mov dx,offset cmer06	; Set the error message. [21a]
	jmp cmif9x	        ; Fail - no wildcard allowed. [21a]
cmif4x: mov ah,ch		; [21a]
        cmp ah,8H		; Is this in the name or type field?
        jns cmifi5              ; Type.
        mov cl,8H               ; Say we have eight chars.
        js cmifi6		; Name field.
        jmp cmifi9		; If its where the dot should be give up.
cmifi5: mov cl,0CH              ; Three chars.
cmifi6: mov flags.wldflg,0FFH	; Remember we had a wildcard.
	mov bx,comand.cmfcb2    ; Get a pointer into the FCB.
        mov ah,'?'
        mov [bx],ah		; Put a question mark in.
        inc bx
        mov comand.cmfcb2,bx
        inc ch
        mov ah,ch
        cmp ah,cl
        jl cmifi6               ; Go fill in another.
        jmp cmifi1              ; Get the next char.
cmifi7: cmp ah,03DH		; Equals sign (wildcard)?
	jne cmif7x
	cmp comand.cmrflg,1	; In receive mode?  [21a]
	jne cmif7y		; No, so it's ok. [21a]
	mov dx,offset cmer06	; Set the error message. [21a]
	jmp cmif9x		; Fail - no wildcard allowed. [21a]
cmif7y:	mov ah,'?'		; New label. [21a]
	mov flags.wldflg,0FFH	; Say we have a wildcard.
	jmp cmifi8		; Put into FCB.
cmif7x:	cmp ah,'0'
        jl cmif8x
        cmp ah,'z'+1
        jns cmif8x
        cmp ah,'A'		; Don't capitalize non-alphabetics.
        jl cmifi8
        and ah,137O             ; Capitalize.
cmifi8: mov bx,comand.cmfcb2    ; Get the pointer into the FCB.
        mov [bx],ah             ; Put the char there.
        inc bx
        mov comand.cmfcb2,bx
	mov flags.nmoflg,1	; Overriding name from host. [21a]
        inc ch
        jmp cmifi1

cmif8x:	push es
	mov cx,ds
	mov es,cx		; Scan uses ES register.
	mov di,offset spchar    ; Special chars.
	mov cx,spclen		; How many of them.
	cmp dosnum,0		; Under version 2.0
	je cmif8y
	mov di,offset spchar2
	mov cx,spc2len
cmif8y:	mov al,ah		; Char is in al.
	repnz scasb		; Search string for input char.
	cmp cx,0		; Was it there?
	pop es
	jnz cmifi8
 
cmifi9: mov dx,offset cmer02
cmif9x:	mov ah,prstr
        int dos
	mov flags.droflg,0	; Not overriding drive. [21a] 
	mov flags.nmoflg,0	; Or name to save file under. [21a]
	mov comand.cmrflg,0	; Reset this flag too. [21a]
        ret

cmofil: jmp cmifil              ; For now, the same as CMIFI.

; Parse arbitrary text up to a CR.  Put chars into data buffer sent to
; the host (pointed to by BX).   Called with text of help message in DX.
; Return updated pointer in BX and input size in AH.

cmtext:	mov comand.cmptab,bx	; Save pointer to data buffer.   [8 start]
	mov cmthlp,dx		; Save the help message.
	mov cl,0		; Init the char count.
cmtxt1:	mov comand.cmsflg,0	; Get all spaces. [25]
	call cmgtch		; Get a char.
	test ah,80H		; is high-order bit on?
	jz cmtxt5		; Nope, put into the buffer.
	and ah,07FH
	cmp ah,' '
	je cmtxt5
	cmp ah,esc		; An escape?
	jne cmtxt2
	mov ah,conout
	mov dl,bell		; Ring a bell.
	int dos
	mov comand.cmaflg,0	; Reset action flag.
	dec comand.cmcptr	; Move pointer to before the escape.
	dec comand.cmdptr
	dec comand.cmccnt	; Decrement count.
	jmp cmtxt1		; Try again.
cmtxt2:	cmp ah,'?'		; Asking a question?
	jz cmtx30
	cmp ah,ff		; Formfeed?
	jne cmtx2x
	call cmblnk
cmtx2x: mov ah,cl		; Return count in AH.
	mov bx,comand.cmptab	; Return updated pointer.
	jmp rskp
cmtx30:	mov comand.cmaflg,0	; Reset action flag to zero.
	inc comand.cmdptr	; count the ?
	cmp cl,0		; Is "?" first char?
	jne cmtxt5		; No, just add to buffer.
	dec comand.cmcptr	;[ESC] (moved 3 lines) Don't keep in buffer.
	dec comand.cmccnt	;[ESC] Don't conut it.
	dec comand.cmdptr	;[ESC] don't count if printing help.
	mov ah,prstr		; Else, give some help.
	mov dx,cmthlp		; Address of help message.
	int dos
        mov ah,prstr
        mov dx,offset crlf      ; Print a crlf.
        int dos
        mov ah,prstr
        mov dx,comand.cmprmp    ; Reprint the prompt.
	int dos
	mov bx,comand.cmdptr	; Get the pointer into the buffer.
	mov byte ptr [bx],'$'
	mov ah,prstr
	mov dx,offset comand.cmdbuf
	int dos
	jmp cmtxt1		; And keep going.
cmtxt5: inc cl			; Increment the count.
	mov bx,comand.cmptab	; Pointer into destination array.
	mov [bx],ah		; Put char into the buffer.
	inc bx
	mov comand.cmptab,bx
	jmp cmtxt1					; [8 end]

cmgetc:	cmp taklev,0
	jne cmget1
	jmp cmge10			; no take file, get from keyboard
cmget1:	push bx
	push si
	mov bx,takadr
	mov ax,[bx].takcnt
	or ax,[bx].takcnt+2
	jnz cmget5
cmget2:	mov al,byte ptr [bx].takfcb	; get first byte of fcb
	cmp al,0ffh			; is it really a macro?
	je cmget4			; yes, better not try to close it
	cmp al,0feh			; or maybe a file handle?
	je cmget3			; yes, close w/2.0 call
	mov ah,closf
	lea dx,[bx].takfcb
	int dos
	jmp short cmget4			; skip over alternate close
cmget3:	mov bx,word ptr [bx].takfcb+1	; this is where file handle is stored
	mov ah,close2			; use 2.0 close
	int dos
cmget4:	dec taklev
	sub takadr,size takinfo
	pop si
	pop bx
	mov al,cr		; end with carriage return...
	ret
	
cmget5:	cmp [bx].takchl,0	; Any chars left in buffer?
	jne cmget6
	call takrd
cmget6:	dec [bx].takchl
	sub [bx].takcnt,1	; DEC doesn't set carry!!
	sbb [bx].takcnt+2,0
	mov si,[bx].takptr
	lodsb
	mov [bx].takptr,si
	cmp al,ctlz		; maybe control-z?
	je cmget2		; yes, close take file (has to be before pops)
	pop si
	pop bx
	cmp al,lf		; linefeed?
	jne cmget7
	cmp flags.takflg,0
	je cmgetc		; yes, ignore it
cmget7:	cmp al,';'		; maybe a semicolon?
	je cmget9
	cmp flags.takflg,0	; Echo contents of take file?
	je cmget8
	push dx
	mov dl,al
	mov ah,conout
	int dos
	pop dx
cmget8:	ret			; else just return...
; semicolon seen, ignore chars until cr
cmget9:	call cmgetc		; get a character?
	cmp al,cr		; carriage return?
	jne cmget9		; no, keep reading
	ret			; else return it

cmge10:	mov ah,coninq		; Get a char.
	cmp flags.debug,0	; in debug mode?
	je cmge11		; yes, go on
	mov ah,8		; else use read that recognizes ^C
cmge11:	int dos
	and al,7fh		; only allow 7-bit characters.
	push ax			; save the char
	cmp al,bs		; backspace?
	je cmge13		; yes, skip echo
	cmp al,' '		; printable?
	jae cmge12		; yes, no translation needed
	cmp al,cr		; this is printable
	je cmge12
	cmp al,lf
	je cmge12
	cmp al,tab
	je cmge12
	mov al,' '		; else echo a space
cmge12:	mov dl,al		; put char here
	mov ah,conout
	int dos			; echo it ourselves...
cmge13:	pop ax			; and return it
	cmp al,'C'-40H		; control-C?
	je cmge15		; yes, go handle
	cmp al,tab
	jne cmge14
	mov al,' '
cmge14:	ret
cmge15:	mov dx,offset ctcmsg
	mov ah,prstr
	int dos
	mov flags.cxzflg,'C'	; remember ^C'd
	mov sp,cmdstk		; restore command stack ptr
	ret			; and fail

; Come here is user types ^W when during input.
cntrlw:	mov ah,prstr
	mov dx,offset escspc
	int dos
	dec comand.cmccnt	; Don't include it in the count.
	dec comand.cmcptr	; Back up past the ^W.
	mov cl,comand.cmccnt
	mov ch,0
	jcxz ctlw2
	pushf 
	push es
	std			; Scan backwards.
	mov ax,ds
	mov es,ax		; Point to the data area.
	mov di,comand.cmcptr	; Looking from here.
	dec di
	mov al,' '
	repe scasb		; Look for non-space.
	je ctlw1		; All spaces, nothing else to do
	inc di			; move back to non-space
	inc cx
	repne scasb		; look for a space
	jne ctlw1		; no space, leave ptrs alone
	inc di
	inc cx			; skip back over space
ctlw1:	inc di
	mov comand.cmccnt,cl	; update count
	mov cx,comand.cmcptr	; remember old ptr
	mov comand.cmcptr,di	; update pointer
	sub cx,di		; this is characters moved
	mov al,bs		; backspace
	cld
	mov di,offset tbuff	; temporary buffer
	rep stosb		; put enough spaces in
	mov byte ptr [di],'$'	; end buffer
	mov dx,offset tbuff
	mov ah,prstr
	int dos			; back up cursor
	call clearl		; clear line
	pop es
	popf
	ret			; and return
ctlw2:	mov ah,conout
	mov dl,bell
	int dos
	ret

cminbf:	push dx
	push bx
	mov cx,dx		; Save value here too.
	mov ah,comand.cmaflg	; Is the action char flag set?
	cmp ah,0
	je cminb1
	jmp cminb9		; If so get no more chars.
cminb1: inc comand.cmccnt	; Increment the char count.
	call cmgetc
	mov ah,al		; Keep char in 'ah'.
	mov bx,comand.cmcptr	; Get the pointer into the buffer.
	mov [bx],ah		; Put it in the buffer.
	inc bx
	mov comand.cmcptr,bx
	cmp ah,'W'-64		; Is it a ^W?
	jne cmnb11
	call cntrlw		; Kill the previous word.
	jmp repars
cmnb11:	cmp ah,25O		; Is it a ^U?
	jne cminb2
cmnb12: call ctlu		; Clear out the line.
	mov ah,prstr
	mov dx,comand.cmprmp	; Print the prompt.
	int dos
	mov bx,offset comand.cmdbuf
	mov comand.cmcptr,bx	; Reset the point to the start.
	mov comand.cmccnt,0	; Zero the count.
	mov dx,cx		; Preserve original value of dx.
	jmp repars		; Go start over.
cminb2: cmp ah,bs	       ; Or backspace?
	jz cminb3
	cmp ah,del		; Delete?
	jne cminb4
cminb3:	call dodel		; Delete a character.
	mov ah,comand.cmccnt	; Decrement the char count by two.
	dec ah
	dec ah
	cmp ah,0			; Have we gone too far?
	jns cmnb32		; If not proceed.
	mov ah,conout		; Ring the bell.
	mov dl,bell
	int dos
	jmp cmnb12		; Go reprint prompt and reparse.
cmnb32: mov comand.cmccnt,ah	; Save the new char count.
	mov ah,prstr		; Erase the character.
	mov dx,offset clrspc
	int dos
	mov bx,comand.cmcptr	; Get the pointer into the buffer.
	dec bx			; Back up in the buffer.
	dec bx
	mov comand.cmcptr,bx
	jmp repars		; Go reparse everything.
cminb4: cmp ah,'?'		; Is it a question mark.
	jz cminb6
	cmp ah,esc		; Is it an escape?
	jz cminb8
	cmp ah,cr		; Is it a carriage return?
	jz cminb5
	cmp ah,lf		; Is it a line feed?
	jz cminb5
	cmp ah,ff		; Is it a formfeed?
	jne cminb7
	call cmblnk
	call locate
cminb5: mov ah,comand.cmccnt	; Have we parsed any chars yet?
	cmp ah,1
	jnz cminb6
	jmp prserr		; If not, just start over.
cminb6: mov ah,0FFH		; Set the action flag.
	mov comand.cmaflg,ah
	jmp cminb9
cminb7: jmp cminb1		; Get another char.

cminb8: mov ah,prstr		; Don't print the escape char.
	mov dx,offset escspc
	int dos
	jmp cminb6
 
cminb9: pop bx
	pop dx
	ret
 
cmgtch: push cx
	push bx
	push dx
cmgtc1: mov ah,comand.cmaflg
	cmp ah,0			; Is it set.
	jne cmgt10
	call cminbf		; If the action char flag is not set get more.
cmgt10: mov bx,comand.cmdptr	; Get a pointer into the buffer.
	mov ah,[bx]		; Get the next char.
	inc bx
	mov comand.cmdptr,bx
	cmp ah,' '		; Is it a space?
	jz cmgtc2
	cmp ah,tab		; Or a tab?
	jne cmgtc3
cmgtc2: mov ah,comand.cmsflg	; Get the space flag.
	cmp ah,0		; Was the last char a space?
	jne cmgtc1		; Yes, get another char.
	mov ah,0FFH		; Set the space flag.
	mov comand.cmsflg,ah
	mov ah,' '
	pop dx
	pop bx
	jmp cmgtc5
cmgtc3: mov al,0
	mov comand.cmsflg,al	; Zero the space flag.
	pop dx
	pop bx
	cmp ah,esc
	jz cmgtc5
	cmp ah,'?'		; Is the user curious?
	jz cmgtc4
	cmp ah,cr
	jz cmgtc4
	cmp ah,lf
	jz cmgtc4
	cmp ah,ff
	je cmgtc4
	pop cx
	ret			; Not an action char, just return.
cmgtc4: dec comand.cmdptr
cmgtc5: or ah,80H		; Make the char negative to indicate
	pop cx
	ret			; it is a terminator.
CMND	ENDP

;	This address is jumped to on reparse.

PARSE	PROC NEAR 
repars: mov sp,comand.cmostp   ; new sp <-- old sp
	mov bx,offset comand.cmdbuf
	mov comand.cmdptr,bx
	mov ah,0FFH
	mov comand.cmsflg,ah
	jmp comand.cmrprs	; go back to reparse address 
 
;	This address can be jumped to on a parsing error.
 
prserr: mov sp,comand.cmostp	; Set new sp to old one.
	mov bx,offset comand.cmdbuf
	mov comand.cmcptr,bx	; Initialize the command pointer.
	mov comand.cmdptr,bx
	mov ah,0
	mov comand.cmaflg,ah	; Zero the flags.
	mov comand.cmccnt,ah
	mov comand.cmsflg,0FFH
	cmp taklev,0		; in take cmd?
	jne prser1		; yes, don't print prompt
	mov ah,prstr
	mov dx,offset crlf
	int dos
	mov ah,prstr		; Print the prompt.
	mov dx,comand.cmprmp	; Get the prompt.
	int dos
; Instead return to before the prompt call.
prser1:	jmp comand.cmrprs
PARSE	ENDP
 
;	FCB must be remembered if found "*" in filename.      [7 start]
; 	Copy from place addressed by BX to place addressed by DI.
;	Also use to get the filename to the FCB from the DTA.

FCBCPY	PROC	NEAR
	push	es
	push	si
	mov	ax,ds
	mov	es,ax		; make sure destination segment is correct
	mov	ch,0		; high-order part of length
	jcxz	fcbcp1		; zero argument (is this necessary???)
	mov	si,bx		; this is source
	rep	movsb		; copy the whole thing
fcbcp1:	pop	si
	pop	es
	ret			; and return
FCBCPY	ENDP	

; Jumping to this location is like retskp.  It assumes the instruction
;   after the call is a jmp addr.
 
RSKP	PROC	NEAR
	pop bp
	add bp,3
	push bp
	ret
RSKP	ENDP

; Jumping here is the same as a ret.
 
R	PROC	NEAR
	ret
R	ENDP

code	ends
	end
```
{% endraw %}

## MSCOMM.ASM

{% raw %}
```
	public	data, spack, rpack, rpack5, portval, port1, port2, hierr
	public	prtbase, nports, port3, port4
	include msdefs.h

gettim	equ	2CH		; Get the time of day. 
maxlp	equ	100		; Use as number of times to loop (in inchr).
true	equ	1
false	equ	0
mntrgl	equ	bufsiz/4	; Low point = 1/4 of the way full.
maxpack	equ	78H		; largest packet we can handle

datas	segment	public 'datas'
	extrn	flags:byte, trans:byte, pack:byte, count:word, xofsnt:byte

prtbase	label	byte
port1	prtinfo	<0FFFH,0,defpar,1,0,defhand,floxon>
port2	prtinfo	<0FFFH,0,defpar,1,0,defhand,floxon>
port3 	prtinfo	<0FFFH,0,defpar,1,0,defhand,floxon>
port4	prtinfo	<0FFFH,0,defpar,1,0,defhand,floxon>
	rept	portmax-4
	prtinfo	<0FFFH,0,defpar,1,0,defhand,floxon>
	endm

;; systems with two ports can set portval to port1 or port2.
;; systems with more than two ports can set nports higher,
;; then set portval to the address prtbase+(#-1)*size prtinfo
;; where # is the desired port.

portval	dw	port1		; Default is to use port 1.
nports	db	2		; # of known ports
hierr	db	0		; Non-ascii char (non-zero if yes).
spmes	db	'Spack:  $'
rpmes 	db	'Rpack:  $'
crlf    db      cr,lf,'$'
infms0  db	'Waiting .....$'
hibit	db	'Warning - Non Ascii char$'
cemsg	db	'User intervention$'
temp	dw	0
tmp	db	?,'$'
prvtyp  db      0               ; Type of last packet sent. [27e]
pktptr  dw	?		; Position in receive packet.
incnt	dw	?		; Number of chars read in from port.
loopct	db	?		; Loop counter.
time 	dw	?		; When we should timeout. 
	dw	?		; Want a double word.
packet  db	?,?,?,?		; Packet (data is part of it).
data	db	5AH DUP(?)	; Data and checksum field of packet.
recpkt  db	maxpack DUP(?)	; Receive packet storage (use the following).
        db      ?,?,?,?         ; Space for '$' and other stuff.  
crctab	dw	00000H
	dw	01081H
	dw	02102H
	dw	03183H
	dw	04204H
	dw	05285H
	dw	06306H
	dw	07387H
	dw	08408H
	dw	09489H
	dw	0A50AH
	dw	0B58BH
	dw	0C60CH
	dw	0D68DH
	dw	0E70EH
	dw	0F78FH

crctb2	dw	00000H
	dw	01189H
	dw	02312H
	dw	0329BH
	dw	04624H
	dw	057ADH
	dw	06536H
	dw	074BFH
	dw	08C48H
	dw	09DC1H
	dw	0AF5AH
	dw	0BED3H
	dw	0CA6CH
	dw	0DBE5H
	dw	0E97EH
	dw	0F8F7H
datas	ends

code	segment	public
	extrn	prtchr:near, clrbuf:near, outchr:near
	extrn	sppos:near, stpos:near, biterr:near, intmsg:near
	extrn	clearl:near, rppos:near, errpack:near
	assume 	cs:code, ds:datas

;	Packet routines
 
; Send_Packet
; This routine assembles a packet from the arguments given and sends it
; to the host.
;
; Expects the following:
;	AH     - Type of packet (D,Y,N,S,R,E,F,Z,T)
;	ARGBLK - Packet sequence number
;	ARGBK1 - Number of data characters
; Returns: +1 always
 
SPKT	PROC	NEAR

spack: 	push ax			; Save the packet type.
        mov prvtyp,ah           ; Remember packet type. [27e]
	call clrbuf		; Clear the input buffer. [20e]
	mov bx,offset packet	; Get address of the send packet.
	mov ah,trans.ssoh	; Get the start of header char.
	mov [bx],ah		; Put in the packet.
	inc bx			; Point to next char.
	mov ax,pack.argbk1	; Get the number of data chars.
	xchg ah,al
	mov al,trans.chklen	; Length of checksum.
	dec al			; Extra length of checksum.
	add ah,' '+3		; Real packet character count made printable.
	add ah,al		; Account for checksum length in count.
	mov [bx],ah		; Put in the packet.
	inc bx			; Point to next char.
	mov ch,0		; For the 16 bit checksum.
	mov cl,ah		; Start the checksum.
	mov ax,pack.argblk	; Get the packet number.
	add al,' '		; Add a space so the number is printable.
	mov [bx],al		; Put in the packet.
	inc bx			; Point to next char.
	add cx,ax		; Add the packet number to the checksum.
	pop ax			; Get the packet type.
	mov [bx],ah		; Put in the packet.
	inc bx			; Point to next char.
	mov al,0
	xchg ah,al
	add cx,ax		; Add the type to the checksum.
	mov dx,pack.argbk1	; Get the packet size.
spack2: cmp dx,0		; Are there any chars of data?
	 jz spack3		;  No, finish up.
	dec dx			; Decrement the char count.
	mov al,[bx]		; Get the next char.
	inc bx			; Point to next char.
	mov ah,0
	add cx,ax		; Add the char to the checksum.
	cmp al,0
	jns spack2
	cmp hierr,0ffH		; Printed message already?
	je spack2		; Yes, then that's it.
	push bx
	push cx
	push dx
	call biterr
	pop dx
	pop cx
	pop bx
	mov hierr,0FFH		; set err flag. 
	jmp spack2		; Go try again.
spack3:	cmp trans.chklen,2	; What kind of checksum are we using.
	je spackx		; 2 characters.
	jg spacky		; 3 characters.
	mov ah,cl		; 1 char: get the character total.
	mov ch,cl		; Save here too (need 'cl' for shift).
	and ah,0C0H		; Turn off all but the two high order bits.
	mov cl,6
	shr ah,cl		; Shift them into the low order position.
	mov cl,ch
	add ah,cl		; Add it to the old bits.
	and ah,3FH		; Turn off the two high order bits.  (MOD 64)
	add ah,' '		; Add a space so the number is printable.
	mov [bx],ah		; Put in the packet.
	inc bx			; Point to next char.
	jmp spackz		; Add EOL char.
spacky:	mov al,0		; Get a null.
	mov [bx],al		; To determine end of buffer.
	push bx			; Don't lose our place.
	mov bx,offset packet+1	; First checksummed character.
	call crcclc		; Calculate the CRC.
	pop bx
	push cx
	mov ax,cx		; Manipulate it here.
	and ax,0F000H		; Get 4 highest bits.
	mov cl,4
	shr ah,cl		; Shift them over 4 bits.
	add ah,' '		; Make printable.
	mov [bx],ah		; Add to buffer.
	inc bx
	pop cx			; Get back checksum value.
spackx:	push cx			; Save it for now.
	and cx,0FC0H		; Get bits 6-11.
	mov ax,cx
	mov cl,6
	shr ax,cl		; Shift them bits over.
	add al,' '		; Make printable.
	mov [bx],al		; Add to buffer.
	inc bx
	pop cx			; Get back the original.
	and cx,003FH		; Get bits 0-5.
	add cl,' '		; Make printable.
	mov [bx],cl		; Add to buffer.
	inc bx
spackz:	mov ah,trans.seol	; Get the EOL the other host wants.
	mov [bx],ah		; Put in the packet.
	inc bx			; Point to next char.
	mov ah,0		; Get a null.
	mov [bx],ah		; Put in the packet.
	cmp flags.debug,0	; debug mode.
	je spack4
	inc bx
	mov ah,'$'
	mov [bx],ah
	call sppos
	call clearl		; Clear to end of line.
	mov dx,offset crlf
	mov ah,prstr
	int dos
	call clearl		; Next line too.
	call sppos		; Reposition cursor.
	mov ah,prstr
	mov dx,offset spmes
	int dos
	mov dx,offset packet
	mov ah,prstr
	int dos			; debug end.
spack4: call outpkt		; Call the system dependent routine.
	 jmp r
	jmp rskp
SPKT	ENDP 

;	Write out a packet.
 
OUTPKT  PROC	NEAR
	mov dh,trans.spad	; Get the number of padding chars.
outpk2: dec dh
	cmp dh,0
	jl outpk3		; If none left proceed.
	mov ah,trans.spadch	; Get the padding char.
	call outchr		; Output it.
	 jmp r			; Say we failed. [25]
	jmp outpk2
outpk3: mov bx,offset packet	; Point to the packet.
outlup: mov ah,[bx]		; Get the next character.
	cmp ah,0		; Is it a null?
	jnz outlp2
	jmp rskp
outlp2: call outchr		; Output the character.
	 jmp r
	inc bx			; Increment the char pointer.
	jmp outlup
OUTPKT  ENDP
 
; Calculate the CRC.  Returns the CRC in CX.  Destroys: BX, AX.
crcclc:	push dx
	push si
	mov dx,0		; Initial CRC value is 0.
crc0:	mov al,[bx]		; Get the first char of the string.
	cmp al,0		; If null, then we're done.
	je crc1
	inc bx
	xor al,dl		; Xor input with lo order byte of CRC.
	mov ah,al		; Get a copy.
	and ah,0F0H		; Get hi 4 bits.
	mov cl,4
	shr ah,cl		; Right justify.
	and al,0FH		; Get lo 4 bits.
	push bx
	mov si,offset crctb2	; Low portion of CRC factor.
	mov bh,0
	mov bl,al
	add bl,al		; Get word index.
	mov cx,[si+bx]		; Low portion.
	mov si,offset crctab	; High portion of CRC factor.
	mov bh,0
	mov bl,ah
	add bl,ah		; Get word index.
	mov bx,[si+bx]
	xor bx,cx		; Add the two.
	mov cl,8
	shr dx,cl		; Shift CRC 8 bits to the right.
	xor dx,bx		; XOR table value and CRC.
	pop bx			; Retrieve index.
	jmp crc0
crc1:	mov cx,dx		; Return it in CX.
	pop si
	pop dx
	ret

; Receive_Packet
; This routine waits for a packet arrive from the host.  It reads
; chars until it finds a SOH.

RPACK	PROC	NEAR
rpack5: call inpkt		; Read up to a carriage return.
	 jmp r			;  Return bad.
rpack0: call getchr		; Get a character.
	 jmp r			;  Hit the carriage return, return bad.
	cmp al,trans.rsoh	; Is the char the start of header char?
	 jne rpack0		;  No, go until it is.
rpack1: call getchr		; Get a character.
	 jmp r			;  Hit the carriage return, return bad.
	cmp al,trans.rsoh	; Is the char the start of header char?
	 jz rpack1		;  Yes, then go start over.
	mov ch,0		; For 16-bit checksum.
	mov cl,al		; Start the checksum.
	mov ah,0
	mov pack.argbk1,ax	; Save the data count.
	call getchr		; Get a character.
	 jmp r			;  Hit the carriage return, return bad.
	cmp al,trans.rsoh	; Is the char the start of header char?
	 jz rpack1		;  Yes, then go start over.
	mov ah,0
	add cx,ax		; Add it to the checksum.
	sub al,' '		; Get the real packet number.
	mov ah,0
	mov pack.argblk,ax	; Save the packet number.
	call getchr		; Get a character.
	 jmp r			;  Hit the carriage return, return bad.
	cmp al,trans.rsoh	; Is the char the start of header char?
	 jz rpack1		;  Yes, then go start over.
	mov ah,0
	mov temp,ax		; Save the message type. [11]
        mov bp,portval          ; Point to current port structure. [27e]
        cmp ds:[bp].ecoflg,0    ; Is the host echoing? [27e]
        jne rpak11              ; No, packets not echoed. [27e]
        cmp al,prvtyp           ; Packet type same as last sent? [27e]
        je rpack5               ; Yes, chuck echoed packet. [27e]
rpak11:	add cx,ax		; Add it to the checksum.
; Start of change.
; Now determine block check type for this packet.  Here we violate the layered
; nature of the protocol by inspecting the packet type in order to detect when
; the two sides get out of sync.  Two heuristics allow us to resync here:
;   a. An S packet always has a type 1 checksum.
;   b. A NAK never contains data, so its block check type is LEN-2. 
	push cx
	mov cl,al
	mov ax,pack.argbk1	; Get back the size.
	sub al,34		; unchar(len) - 2, for SEQ & TYPE fields.
	mov ah,trans.chklen	; Checksum length we expect.
	cmp cl,'S'		; Is this an "S" packet?
	jne rpk0		; Nope.
	mov ah,1		; Yes, use 1 char checksum.
rpk0:	cmp cl,'N'		; Is this a NAK?
	jne rpk1		; Nope.
	mov ah,al		; So, len - 2 is checksum type.
rpk1:	mov trans.chklen,ah	; Then, this is the chksum length.
	sub al,ah		; Real size of data.
	mov dh,al		; Need it here.
	mov ah,0
	mov pack.argbk1,ax	; And here.
	pop cx	
; End of change.
	mov bx,offset data	; Point to the data buffer.
rpack2: dec dh			; Any data characters?
	 js rpack3		;  If not go get the checksum.
	call getchr		; Get a character.
	 jmp r			;  Hit the carriage return, return bad.
	cmp al,trans.rsoh	; Is the char the start of header char?
	 jnz rpak2a
	jmp rpack1		;  Yes, then go start over.
rpak2a:	mov [bx],al		; Put the char into the packet.
	inc bx			; Point to the next character.
	mov ah,0
	add cx,ax		; Add it to the checksum.
	jmp rpack2		; Go get another.
rpack3: call getchr		; Get a character.
	 jmp r			;  Hit the carriage return, return bad.
	cmp al,trans.rsoh	; Is the char the start of header char?
	 jnz rpk3x
	 jmp rpack1		;  Yes, then go start over.
rpk3x:	sub al,' '		; Turn the char back into a number.
	cmp trans.chklen,2	; What checksum length is in use.
	je rpackx		; Two character checksum.
	jg rpacky		; Three character CRC.
	mov dh,cl		; 1 char - get the character total.
	and dh,0C0H		; Turn off all but the two high order bits.
	mov ch,cl
	mov cl,6
	shr dh,cl		; Shift them into the low order position.
	mov cl,ch
	add dh,cl		; Add it to the old bits.
	and dh,3FH		; Turn off the two high order bits.  (MOD 64)
	cmp dh,al		; Are they equal?
	 jz rpack4		; If so finish up.
	jmp rpack6		; No, we fail.
rpacky:	mov tmp,al		; Save value from packet here.
	mov ah,0		; Three character CRC.
	push bx
	mov bx,pktptr		; Where we are in the packet.
	dec bx
	mov [bx],ah		; Add null to signify end of buffer.
	mov bx,offset recpkt+1	; Where data for CRC is.
	call crcclc		; Calculate the CRC and put into CX.
	pop bx
	push cx
	mov ax,cx		; Manipulate it here.
	and ax,0F000H		; Get 4 highest bits.
	mov cl,4
	shr ah,cl		; Shift them over 4 bits.
	pop cx			; Get back checksum value.
	cmp ah,tmp		; Is what we got == what we calculated?
	jne rpack6
	call getchr		; Get next character of checsum.
	 jmp r			; Failed.	
	cmp al,trans.rsoh	; Restarting?
	 jz rpack7
	sub al,' '		; Get back real value.
rpackx:	mov tmp,al		; Save here for now.
	push cx			; Two character checksum.
	and cx,0FC0H		; Get bits 6-11.
	mov ax,cx
	mov cl,6
	shr ax,cl		; Shift them bits over.
	pop cx			; Get back the original.
	cmp al,tmp		; Are they equal?
	 jne rpack6		; No, we fail.
	call getchr		; Get last character of checsum.
	 jmp r			; Failed.	
	cmp al,trans.rsoh	; Restarting?
	 jz rpack7
	sub al,' '		; Get back real value.	
	and cx,003FH		; Get bits 0-5.
	cmp al,cl		; Do the last chars match?
	jne rpack6
rpack4: mov ah,0
	mov [bx],ah		; Put a null at the end of the data.
	mov ax,temp		; Get the type.   [11]
	xchg al,ah		; Packet type should be in AH.
	jmp rskp
rpack6:	ret
rpack7:	jmp rpack1		; For the jump out of range.
RPACK	ENDP
 
 
INPKT	PROC	NEAR
	mov bl,flags.cxzflg	; Remember original value. [20b]
	mov tmp,bl		; Store it here. [20b]
inpkt0:	call inchr		; Get a character. [27a]
	 jmp inpkt8		;  Return failure. [27a]
	 nop			;  Make it three bytes long. [27a]
	cmp ah,trans.rsoh	; Is it SOH char? [27a]
	jne inpkt0		; No hold out for SOH. [27a]
inpkt1:	mov bx,offset recpkt	; Point to the beginning of the packet.
	mov incnt,0
	mov [bx],ah		; Add SOH to buffer. [27a]
	inc bx			; Increment pointer. [27a]
	inc incnt		; Increment counter. [27a]
inpkt2:	call inchr		; Get a character.
	 jmp inpkt8		;  Return failure. [20b]
	 nop			;  Make it three bytes long. [20b] 
	cmp ah,trans.rsoh	; Starting over again? [27a]
	je inpkt1
	mov [bx],ah		; Put the char in the packet.
	inc bx
	inc incnt
	cmp ah,trans.reol	; Is it the EOL char?
	je inpkt3		; ended by eol, keep going
	cmp incnt,maxpack	; is it too big?
	jbe inpkt2		; no, keep going
	jmp inpkt1		; else just start over
inpkt3:	cmp incnt,1		; Ignore bare CR.   [2 start]
	je inpkt1
	mov bp,portval
	cmp ds:[bp].hndflg,0	; Waiting for handshake?
	jz inpkt5		; If not then proceed.
inpkt4: call inchr		; Wait for the turn around char.
	 jmp inpkt8		;  Return failure. [20b]
	 nop			;  Make it three bytes long.  [20b]
	cmp ah,trans.rsoh	; Start of packet? [27a]
	je inpkt1		; Yes go start over. [27a]
	mov bp,portval
	cmp ah,ds:[bp].hands	; Is it the IBM turn around character?
	jne inpkt4		; If not, go until it is.
inpkt5:	cmp flags.debug,0	; In debug mode?
	je inpkt6
	mov ah,'$'
	mov [bx],ah
	call rppos
	call clearl		; Clear to end of line.
	mov dx,offset crlf
	mov ah,prstr
	int dos
	call clearl		; Next line too.
	call rppos		; Reposition cursor.
	mov ah,prstr
	mov dx,offset rpmes
	int dos
	mov dx,offset recpkt
	mov ah,prstr
	int dos			; debug end.
inpkt6:	mov bx,offset recpkt
	mov pktptr,bx		; Save the packet pointer.
	mov bl,tmp		; Get the original value. [20b]
	cmp bl,flags.cxzflg	; Did ^X/^Z flag change? [20b]
	je inpkt7		; If not, just return.  [20b]
	cmp flags.cxzflg,'E'	; Error packet?
	je inpkt9
	call intmsg 		; Else, say we saw the interrupt. [20b]
inpkt7: jmp rskp		; If so we are done.
inpkt8:	cmp flags.cxzflg,'C'	; Did the user type a ^C? [25]
	jne inpkt9
	mov pack.state,'A'
	ret
inpkt9:	cmp flags.cxzflg,'E'	; How about ^E?
	jne inpk10		; No just go on.
	mov bx,offset cemsg	; Null message for error packet.
	call errpack
	mov pack.state,'A'
	ret
inpk10:	mov bl,tmp		; Get the original value. [20b]
	cmp bl,flags.cxzflg	; Did ^X/^Z flag change? [20b]
	je inpk11		; If not, just return failure.  [20b]
	call intmsg 		; Else, say we saw the interrupt. [20b]
inpk11:	jmp r
INPKT	ENDP

inchr:	cmp flags.timflg,0	; Are timeouts turned off.
	je inchr1		; Yes, so skip this stuff.
	cmp trans.stime,0	; Don't time out?
	je inchr1		; Yes, so skip this stuff.
	mov loopct,0		; Use to check for timeout.
	mov ah,gettim		; Get the time.
	int dos
	mov time,cx
	mov time+2,dx
	mov ah,0
	mov al,trans.stime	; Timeout when getting data.
	mov cl,8
	shl ax,cl		; Move timeout to seconds field.
	add time+2,ax		; If get to this time, then timeout.
	jnc inchr1
	inc time
inchr1:	call prtchr		; Is there a character to read?
	 jmp inchr6		; Got one.
	mov dl,0FFH		; To read in a char.
	mov ah,dconio		; Is a char on the console?
	int dos
	jz inchr2		; If not go look for another char.
	mov ah,al 
	cmp ah,cr		; Is it a carriage return?
	je inchr5		; If yes, then leave.
	cmp ah,'Z'-100O		; Control-Z? [20b]
	je inchr4		; Yes - flag it. [20b]
	cmp ah,'X'-100O		; Control-X? [20b]
	je inchr4		; Yes - flag it. [20b]
	cmp ah,'E'-100O		; Control-E?
	je inchr4		; Flag it and get rest of packet.
	cmp ah,'C'-100O		; Control-C? [25]
	jne inchr2		; No, then wait for input. [25]
	add ah,100O		; Make it printable. [25]
	mov flags.cxzflg,ah	; Save it. [25]
	ret			; Return right away. [25]
inchr2:	cmp flags.timflg,0	; Are timeouts turned off?
	je inchr1		; Yes, just check for more input.
	cmp trans.stime,0	; Doing time outs?
	je inchr1		; No, just go check for more input.
	inc loopct
	cmp loopct,maxlp	; Times to go without checking time.
	jne inchr1		; Don't check yet.
	mov ah,gettim		; Get the current time.
	int dos
	mov ax,time
	sub ax,cx		; Check hours and minutes.
	jl inchr5		; Over the limit so fail.
	jg inchr3		; Under the limit, keep going.
	mov ax,time+2
	sub ax,dx		; Else, check seconds and hundreds of seconds.
	jle inchr5		; Return failure.
inchr3:	mov loopct,0		; Reset counter.
	jmp inchr1
inchr4: add ah,100O		; Make it printable. [20b]
	mov flags.cxzflg,ah	; Remember what we saw. [20b]
	jmp inchr2		; Continue getting input. [20b]
inchr5:	ret
inchr6: mov ah,al
	mov bp,portval		; Point to current port structure.
	cmp ds:[bp].parflg,parnon	; Is the parity none?	[10]
	je inchr7		; We're done.		[10]
	and ah,7FH		; Turn off the parity bit.
inchr7:	cmp ds:[bp].floflg,0	; Doing any flow control?
	jne inchr8		; Yes, check it out.
	jmp rskp		; No, just return the data.
inchr8:	cmp xofsnt,true		; Have we sent flow char (XOFF)?
	je inchr9		; Yes.
	jmp rskp		; No, just return.
inchr9:	cmp count,mntrgl	; Under the low trigger point?
	jb inchra		; Yes.
	jmp rskp		; No, just return.
inchra:	push ax
	mov bp,portval
	mov ax,ds:[bp].flowc	; Get flow control char (AH = XON, AL = XOFF).
	call outchr		; Send it (XON).
	mov xofsnt,false	; Turn off the flag.
	pop ax
	jmp rskp		; Return the character.

; Return next character in AL.
GETCHR  PROC	NEAR
	push bx
	mov bx,pktptr		; Get the packet pointer.
	mov al,[bx]		; Get the char.
	inc bx
	mov pktptr,bx
	pop bx			; Restore BX.
	cmp al,trans.reol	; Is it the EOL char?
	jne getcr2		; If not return retskp.
	ret			; If so return failure.
getcr2: jmp rskp
GETCHR  ENDP

; Jumping to this location is like retskp.  It assumes the instruction
;   after the call is a jmp addr.
 
RSKP	PROC	NEAR
	pop bp
	add bp,3
	push bp
	ret
RSKP	ENDP
 
; Jumping here is the same as a ret.
 
R	PROC	NEAR
	ret
R	ENDP

code	ends
	end
```
{% endraw %}

## MSFILE.ASM

{% raw %}
```
	public	bufpnt, buff, fcb, cpfcb, chrcnt, fixfcb, init, init1,
	public	gofil, outbuf, ptchr, gtchr, gtnfil, getfil, filbuf,
	public	encode, decode, nulref, nulr, decbuf, errpack, rptq,
	public	origr, rptct, rptval, clrfln, cxmsg, biterr, intmsg,
	public	rtpos, erpos,rppos, stpos,nppos,rprpos,nrtpos,sppos,
	public	kbpos,perpos,frpos, prtscr
	include msdefs.h

rptmin	equ	3		; At least 3 of same char in a row.

; equates for screen positioning
scrfln	equ	0316H		; Place for file name.
scrkb	equ	0416H		; Place for percent transferred.
scrper	equ	0516H		; Place for Kbytes transferred.
scrst	equ	0616H		; Place for status.
scrnp	equ	0816H		; Place for number of packets.
scrnrt  equ	0916H		; Place for number of retries.
screrr  equ	0A16H		; Place for error msgs. 
scrhi	equ	0B16H		; Err when 8th bit is on.
scrfr	equ	0B16H		; Rename file.
scrint	equ	0B16H		; Acknowledge interrupt. [20b]
scrsp	equ	0C00H		; Place for send packet.
scrrp	equ	0E00H		; Place for receive packet.
scrrpr	equ	1100H		; Prompt when Kermit ends.



datas	segment	public 'datas'
	extrn	data:byte, flags:byte, trans:byte, pack:byte, hierr:byte
	extrn	dosnum:byte

outlin  db	cr,lf,cr,lf
        db      cr,lf,'           File name:'
        db      cr,lf,'  KBytes transferred:'
        db      cr,lf
        db      cr,lf
        db      cr,lf
        db      cr,lf,'   Number of packets:'
        db      cr,lf,'   Number of retries:'
        db      cr,lf,'          Last error: None'
        db      cr,lf,'        Last warning: None'
        db      '$'

ermes4  db	'Unable to rename file$'
erms10  db	'?Unable to receive data$'
erms11  db	'?Disk full$'
erms12	db	'?Unable to create file$'
erms17  db	'Record length exceeds size of buffer$'
infms5  db	'Renaming file to $'
infms7	db	'File interrupt$'
infms8	db	'File group interrupt$'
hibit	db	'Warning - Non Ascii char$'
crlf	db	cr,lf,'$'
printer	db	0,'PRN        '
spchar	db	24H,26H,23H,40H,21H,25H,27H,28H,29H,2DH
	db	3CH,3EH,7BH,7DH,5FH,5CH,5EH,7EH,7CH,60H
spclen	equ	$-spchar	; Number of special chars.
spchar2	db	24H,26H,23H,40H,21H,25H,27H,28H,29H,2DH
	db	7BH,7DH,5FH,5EH,7EH,60H
spc2len	equ	$-spchar2
next	db	0FFH		; No next character just yet.
rptval	db	0		; Repeated character.
rptct	db	1		; Number of times it's repeated.
rptq	db	drpt		; Repeat prefix.
origr	db	drpt		; Original repeat prefix.
temp1	dw	?		; Temporary storage.
temp2	dw	?
oloc	dw	0		; Original buffer location. [21c]
osiz	dw	0		; Original buffer size. [21c]
chrcnt  dw	?		; Number of chars in the file buffer.
outpnt  dw	?		; Position in packet.
bufpnt  dw	?		; Position in file buffer.
fdtpnt	dw	?		; Pointer to within our file. 
fcbptr  dw	?		; Position in FCB.
cbfptr  dw	?		; Position in character buffer.
filsiz	dw	0		; Double word for filesize (in bytes.)
	dw	0
ofilsz	dw	0		; Original file size percent adjusted (/100).
tfilsz	dw	0		; Bytes transferred.
	dw	0
oldper	dw	?		; old percentage
oldkbt	dw	?		; old KB transferred.
wrpmsg	db	?		; non-zero if we wrote percent message
percnt	dw	100		; Number to divide by for a percent.
bufhex	dw	80H
permsg	db	cr,' Percent transferred:$'
cxzhlp	db	'^X cancels file, ^Z cancels batch'
	db	', ^E aborts protocol'
	db	', ^C quits'
	db	', Return retries'
	db	'$'
asmsg	db	' AS '
asmln	equ	$-asmsg
filbuf  db	60H DUP(?)	; Character buffer.
buff	db	dmasiz DUP(?)	; Use as our DTA.
fcb	db	fcbsiz DUP(?)	; Use as our FCB.
cpfcb	db	fcbsiz DUP(?)	; Save FCB in case of "*".   [7]
decbuf	db	dmasiz DUP(?)	; For decoding incoming data.
datas	ends

code	segment	public
	extrn	spack:near, cmblnk:near, locate:near, nout:near
	extrn	putmod:near, poscur:near, clearl:near, fcbcpy:near
	assume  cs:code,ds:datas

; Position cursor for an error message.

ERPOS	PROC 	NEAR
	cmp flags.xflg,1	; Packet header seen? [21c start] 
	jne erp0		; No, do as normal. 
	mov dx,offset crlf
	mov ah,prstr
	int dos
	ret
erp0:	mov dx,screrr
	jmp poscur
ERPOS	ENDP

; Position cursor for number of retries message.

RTPOS	PROC 	NEAR
	cmp flags.xflg,1	; Packet header seen? [21c]
	jne rtp0		; No, do as normal.
	ret
rtp0:	mov dx,scrnrt
	jmp poscur
RTPOS	ENDP

; Reassure user that we acknowledge his ^X/^Z.

INTMSG	PROC	NEAR
	cmp flags.xflg,0	; Writing to screen?
	jne int1		; Yes. Don't do anything.
	mov dx,scrint
	call poscur
	call clearl
	mov dx,offset infms7    ; File interrupted?
	cmp flags.cxzflg,'X'	; Yes. 
	je int0
	mov dx,offset infms8	; File group interrupted.
int0:   mov ah,prstr
        int dos
int1:	ret
INTMSG	ENDP

; Print err message that found a non-standard-Ascii char in the file.

BITERR	PROC	NEAR
	cmp flags.remflg,0	; remote mode?
	jne biter1		; yes, no printing.
	push bx
	mov dx,scrhi
	call poscur
	call clearl
	mov ah,prstr
	mov dx,offset hibit
	int dos
	pop bx
biter1:	ret
BITERR	ENDP		

;  Clear out message about interrupted file.

CXMSG	PROC	NEAR
	cmp flags.xflg,0	; Writing to screen?
	jne cxm0		; Yes. Don't do anything.
	mov dx,scrint
	call poscur
	call clearl
cxm0:	ret
CXMSG	ENDP

;  Clear out the old filename on the screen. 

CLRFLN	PROC	NEAR
	mov dx,scrfln
	call poscur
	call clearl		; Clear to end of line. [19a]
	ret
CLRFLN	ENDP

; some random screen positioning functions
kbpos:	mov dx,scrkb		; KBytes transferred.
	call poscur
	jmp clearl
perpos:	mov dx,scrper		; Percent transferred.
	call poscur
	jmp clearl
frpos:	mov dx,scrfr		; Say renamed file.
	call poscur
	jmp clearl
stpos:	mov dx,scrst		; Print status of file transfer.
	call poscur
	jmp clearl
nppos:	mov dx,scrnp		; Number of packets sent.
	jmp poscur
rprpos:	mov dx,scrrpr		; Reprompt position.
	jmp poscur
nrtpos:	mov dx,scrnrt		; Number of retries.
	jmp poscur
sppos:	mov dx,scrsp		; Send packet location.
	jmp poscur
rppos:	mov dx,scrrp		; Receive packet location.
	jmp poscur



;	Initialize buffers and clear line.
 
INIT	PROC	NEAR
	call cmblnk
	call locate
	mov ah,prstr		; Put statistics headers on the screen.
	mov dx,offset outlin
	int dos
	mov dx,offset cxzhlp
	call putmod		; write mode line
	mov wrpmsg,0		; haven't printed the messsage yet.
	call init1
	ret
INIT	ENDP
 
INIT1	PROC	NEAR
	mov chrcnt,dmasiz	       ; Number of chars left.
	mov bufpnt,offset buff	       ; Addr for beginning.
	mov hierr,0
	ret
INIT1	ENDP

;	Output the chars in a packet.

; Called with AX = size of the data, BX = address of source.

FILEIO	PROC	NEAR 	
ptchr:  mov cx,ax
	mov ax,offset outbuf	;Where to put data when buffer gets full.
	jmp decode

; CX = Size of data, BX = Address of data, AX = Routine to call to
; dump data.

decode: push si
	push di
	push es
	push dx
	push ax
	mov ax,ds
	mov es,ax
	pop ax
	mov si,bx		; Source of data.
	mov bx,ax		; Coroutine to call.
	mov di,bufpnt		; Destination of data.
	mov dh,0		; assume no quote char
	cmp trans.ebquot,'N'	; no quoting?
	je decod1		; yes, keep going
	cmp trans.ebquot,'Y'	; or not doing it?
	je decod1		; yes, keep going
	mov dh,trans.ebquot	; otherwise use quote char

decod1:	mov rptct,0		; Reset.
	mov rptval,0		; Ditto.
	dec cx
	jge dcod11		; More data.
	jmp decod6		; Else, we're through.
dcod11:	dec chrcnt		; Decrement number of chars in dta.
	jns decod2		; Continue if space left.
	push cx
	push dx
	push bx
	call bx			; Output it if full.
	 jmp decod5		;  Error return if disk is full.
	 nop
	pop bx
	pop dx
	pop cx
	mov di,bufpnt
decod2:	cmp rptct,0		; Doing a repeat?
	je dcod20		; No, so go get a character.
	mov ah,0
	mov al,rptval		; Get the character we're repeating.
	jmp decod4		; And write it out to the file.
dcod20:	lodsb			; Pick up a char.
	cmp rptq,0		; Doing repeat quoting?
	je dcod21		; Nope, skip this part.
	cmp al,rptq		; Did we pick up the repeat quote char?	
	jne dcod21		; No, continue processing it.
	lodsb			; Get the size.
	dec cx			; Modify buffer count.
	sub al,20H		; Was made printable.
	mov rptct,al		; Remember how many repetitions.
	lodsb			; Get the char to repeat.
	dec cx			; Modify buffer count.
dcod21:	mov ah,00H		; Assume no 8-bit quote char. [21b start]
	cmp al,dh		; This the 8-bit quot char?
	jne decod3
	lodsb			; Get the real character.
	dec cx			; Decrement # chars in packet
	mov ah,80H		; Turn on 8-bit quot char flag. [21b end] 
decod3: cmp al,trans.squote	; Is it the quote char? [21b] [21c]
	jne decod4		; If not proceed.
	lodsb			; Get the quoted character
	dec cx			; Decrement # of chars in packet.
	or ah,al		; save parity (combine with prefix)
	and ah,80h		; only parity
	and al,7FH		; Turn off the parity bit.
	cmp al,trans.squote	; Is it the quote char? [21c]
	je decod4		; If so just go write it out.
	cmp al,dh		; This the 8-bit quot char?
	je  decod4		; If so, just go write it out
	cmp al,rptq		; Is is the repeat quote character?
	je decod4		; If so, just write it out.
	add al,40H		; Make it a control char again.
	and al,7FH		; Modulo 128.
decod4: or al,ah		; or in parity
	stosb			; store the character
	dec rptct		; Repeat counter.
	cmp rptct,0		; Write out char again?
	jg dcod41
	jmp decod1		; No, get next char.
dcod41:	mov rptval,al		; Save the char.
	jmp dcod11		; and loop to next char.
decod5:	pop bx
	pop dx			; dx is pushed twice (really)
	pop cx
	pop dx
	pop es
	pop di
	pop si
	ret
decod6:	mov bufpnt,di
	pop dx
	pop es
	pop di
	pop si
	jmp rskp		; Return successfully if done.



	; output the buffer, reset bufpnt and chrcnt
 
outbuf: cmp flags.xflg,1	; Writing to screen? [21c] 
	je outbf2		; Yes, handle specially. [21c] 
	push bx
	mov ah,writef		; The write code.
	mov dx,offset fcb
	int dos			; Write the record.
	pop bx
	cmp al,0		; Successful.
	jz outbf1
	push ax			; Remember the return code. [20d]
	call abfil		; Fix things up before aborting. [20d]
	pop ax			; Retrive return code. [20d]
	cmp al,01
	jz outbf0
	call erpos
	mov ah,prstr
	mov dx,offset erms17	; Record length exceeds dta.
	int dos
	ret
outbf0: call erpos
	mov ah,prstr		; Tell about it.
	mov dx,offset erms11	; Disk full error.
	int dos
	ret
outbf1:	add tfilsz+2,80H	; Say 128 more characters received.
	adc tfilsz,0
	call kbpr		; Print the kilobytes received.
	call perpr		; Print the percent ('?' for now).
outb11:	mov bufpnt,offset buff	; Addr for beginning.
	mov chrcnt,dmasiz-1	; Buffer size.
	jmp rskp
outbf2:	mov cx,dmasiz-1		; Number of chars to write. [21c]
	sub cx,chrcnt		; minus # of unused in buffer
	jle outb11		; none to print, don't try
	mov di,offset buff	; Where they are. [21c]
	call prtscr		; Output buffer to screen. [21c]
	jmp outb11		; Reset counter & pointer. [21c]

;  Tidy up before aborting.	[20d]
ABFIL	PROC	NEAR
	mov flags.xflg,1	; Writing to screen?
	je abfil0		; Yes don't delete "file".
	mov ah,closf		; Close the file.
	mov dx,offset fcb
	int dos
	cmp flags.abfflg,1	; Delete what got across or keep it?
	jne abfil0		; Nope, keep it.
	mov ah,delf		; Delete it.
	mov dx,offset fcb
	int dos
abfil0:	mov bx,offset erms10	; Text of message to send.
	call errpack		; Send an error packet.
	ret
ABFIL	ENDP

; General routine for sending an error packet.  Register BX should
; point to the text of the message being sent in the packet. [20f]

ERRPACK	PROC	NEAR
	mov di,offset data	; Where to put the message.
	mov al,0
errp1:	mov ah,[bx]
	cmp ah,'$'		; At end of message?
	je errp2
	inc al			; Remember number of chars in msg.
	mov [di],ah
	inc bx
	inc di
	jmp errp1
errp2:	mov ah,0
	mov pack.argbk1,ax
	mov ah,'E'		; And send an error packet.
	call spack
	 ret			; Return if succeed or fail.
	nop
	nop
	ret
ERRPACK	ENDP

;	Get the chars from the file.
 
gtchr:  cmp flags.filflg,0	; Is there anything in the DMA?
	jz gtchr0		; Yup, proceed.
	mov ah,rptq
	mov origr,ah		; Save repeat prefix here.
	mov rptct,1		; Number of times char is repeated.
	mov rptval,0		; Value of repeated char.
	call inbuf
	 jmp gtchr1		; No more chars, go return EOF.
	 nop			; Make three bytes long.
gtchr0:	mov bx,offset inbuf
	jmp encode
gtchr1:	mov ax,0ffffh
	ret

; encode - writes data portion of kermit packet into filbuf.
; expects BX to contain the address of a routine to refill the buffer,
; chrcnt to be the # of chars in the buffer, trans.maxdat to contain
; the maximum size of the data packet, bufpnt to contain a pointer to
; the source of the characters.
; Returns: AX/ the number of characters actually written to the buffer.

encode:	mov cl,trans.maxdat	; Maximum packet size. [21b]
	mov ch,0
	mov di,offset filbuf	; Where to put the data.
	mov si,bufpnt		; pointer into source buffer
	mov dl,trans.rquote	; send quote char
	mov dh,0		; assume no 8-bit quoting
	cmp trans.ebquot,'N'	; not doing 8-bit quoting
	je encod1
	cmp trans.ebquot,'Y'	; or can but won't?
	je encod1
	mov dh,0ffh		; remember we have to do it
encod1: dec cx			; Decrement output buffer counter.
	jge encod2		; Go on if there is more than one left.
	sub di,offset filbuf
	mov ax,di
	mov bufpnt,si		; update pointer into DMA.
	jmp rskp
encod2: cmp chrcnt,0		; Any data in buffer?
	jg encod3		; yes, skip over buffer refill.
	call bx			; Get another buffer full.
	 jmp encod8
	mov si,bufpnt		; update position in DMA.
	cmp chrcnt,0 		; no characters returned?
	jne encod3		; Got some, keep going.
	jmp encod8		; none, assume eof.
encod3: dec chrcnt		; Decrement input count.
	lodsb
        cmp flags.eofcz,0       ; Is a control-z an end of file? [27b]
        je encd30               ; No, don't have to look for one. [27b]
        cmp al,'Z'-40H          ; Is this a control-Z? [27b]
        jne encd30              ; No, skip eof-processing. [27b]
        mov flags.eoflag,0FFH   ; Yes, set eof flag. [27b]
        jmp encod8              ; Go set character count and return. [27b]
encd30: cmp rptq,0		; Are we doing repeat prefixing? 
	je encd3x		; Nope, skip next part.
	cmp chrcnt,0		; Are we on the last character?
	jle encd31		; Yes, so there's no next character.
	cmp rptct,94		; Max number that we can put in a byte.
	je encd31		; Then that's it.
	mov ah,[si]		; Get the next character.
	cmp al,ah		; Is current char == next char?
	jne encd31
	inc rptct		; Number of times char appears.
	mov rptval,al		; Remember the character.
	inc cx			; Repeats don't take up so much buffer space.
	jmp encod1		; Keep checking for more.
encd31:	cmp rptct,1		; Were previous characters repeats?
	je encd3x		; No, so just add this char.
	cmp rptct,rptmin	; Are we within bounds for repeat prefixing?
	jge encd32		; Yes, use repeat prefixing.
	mov al,rptct
	mov ah,0
	sub si,ax		; Not enough characters to warrant it.
	mov rptval,0		; Clear out this value.
	inc cx			; Adjust output buffer pointer.
	mov al,rptq
	mov origr,al		; Save original repeat prefix.
	mov rptq,0		; Pretend we're not doing the prefixing.
	mov al,rptct
	mov ah,0
	add chrcnt,ax		; Adjust input buffer pointer.
	jmp encod1		; Reprocess those characters.
encd32:	push ax			; Do repeat prefixing - save data.
	mov al,rptq		; Add repeat prefix char.
	stosb
	dec cx			; Account for it in buffer size.
	mov al,rptct		; Get the repeat count.
	add al,20H		; Make it printable.
	stosb			; Add to buffer.
	dec cx
	pop ax			; Get back the actual character.
	mov rptct,1		; Reset repeat count.
	mov rptval,0		; And this.
encd3x:	cmp dh,0		; are we doing 8-bit quoting?
	je encod4		; no, forget this.
	test al,80h		; parity on?
	je encod4		; no, don't bother with this
	and al,7fh		; turn off parity
	push ax			; save original char for a bit
	dec cx			; decrement # of chars left
	mov al,trans.ebquot	; get quote char
	stosb			; save in buffer
	pop ax			; restore character
encod4:	mov ah,al		; save character
	and ah,80h		; only parity
	and al,7fh		; turn off parity in character
	cmp al,' '		; Compare to a space.
	jl encod5		; If less then its a control char.
	cmp al,del		; Is the char a delete?
	jz encod5		; Go quote it.
	cmp al,dl		; Is it the quote char?
	je encod6		; Yes - go add it. [21b start]
	cmp dh,0		; are we doing 8-bit quoting?
	je encd41		; no, don't translate it
	cmp al,trans.ebquot	; Is it the 8-bit quote char?
	je encod6		; Yes, just output with quote
encd41:	cmp origr,0		; Doing repeat prefixing?
	je encod7		; No, don't check for quote char.
	cmp al,origr		; Is this the repeat quote character.
	je encod6		; Yes, then quote it.
	jmp short encod7	; else don't quote it.
encod5:	add al,40h		; control char, uncontrollify
	and al,7fh
encod6:	push ax			; save the char
	dec cx
	mov al,dl
	stosb
	pop ax
encod7:	or al,ah		; put parity back
	stosb
	cmp rptct,1		; One occurence of this char?
	jne encd7x
	mov al,origr
	mov rptq,al		; Restore repeat quote char.
	jmp encod1		; Yes, so loop around for some more.
encd7x:	dec rptct		; Add another entry of this char.
	jmp encod1		; With quoting and all.
 
encod8: sub di,offset filbuf
	or di,di
	je encod9		; Nope.
	mov ax,di
	jmp rskp
encod9: mov ax,0FFFFH		; Get a minus one.
	ret


inbuf:  mov ah,flags.eoflag	; Have we reached the end?
	cmp ah,0
	jz inbuf0
	ret			; Return if set.
inbuf0:	push si
	push di
	push dx
	push bx			
	push cx
	mov bx,offset buff	; Set the r/w buffer pointer.
	mov bufpnt,bx
	mov ah,readf		; Read a record.
	mov dx,offset fcb
	int dos
	mov cx,filsiz
	cmp cx,0		; Check for 128 chars or less left.
	jne inbuf1		; Still have data left.
	mov ax,ds
	mov es,ax
	mov si,offset filsiz+2
	mov di,offset bufhex
	cmps filsiz+2,es:bufhex
	ja inbuf1		; More than 128 chars.
	mov flags.eoflag,0FFH	; Set End-of-file.
	mov cx,filsiz+2
	mov chrcnt,cx		; Return proper number of chars.
	mov flags.filflg,0	; Buffer not empty.
	pop cx
	pop bx
	pop dx
	pop di
	pop si
	jmp rskp
inbuf1:	sub filsiz+2,80H	; Sent another 128 chars.
	sbb filsiz,0		; Account for the doubleword.
	add tfilsz+2,80H	; Book keeping for the same.
	adc tfilsz,0
	push ax
	call kbpr		; Print the kilobytes sent.
	call perpr		; Print the percent sent.
	pop ax
	mov al,80H		; Use as counter for number of chars read.
	pop cx
	pop bx
	pop dx
	pop di
	pop si
	mov ah,0		; Zero the flag (buffer not empty).
	mov chrcnt,ax		; Number of chars read from file.
	mov flags.filflg,0	; Buffer not empty.
	jmp rskp

nulref:	mov chrcnt,0		; No data to return.
	jmp rskp

nulr:	ret

; Print the number of Kilobytes transferred.

kbpr:	cmp flags.remflg,0	; remote mode?
	jne kbpr1		; yes, no printing.
	mov ax,tfilsz+2
	mov bx,tfilsz
	mov cl,10
	shr ax,cl		; divide by 1024
	mov cl,6		; high order moves 16-10 = 6 bits
	shl bx,cl
	or ax,bx
	cmp ax,oldkbt		; is it the same?
	je kbpr1		; yes, skip printing
	mov oldkbt,ax		; save new # of kb
	push ax
	call kbpos		; Postion the cursor.
	pop ax
	call nout		; Print the number of KBytes transferred.
kbpr1:	ret

; Print the percent transferred.

perpr:	cmp flags.remflg,0	; remote mode?
	jne perpr5		; yes, no printing.
	mov ax,tfilsz
	or ax,tfilsz+2
	cmp ax,oldper		; same as it was before?
	je perpr5		; yes, don't bother printing.
	mov oldper,ax		; remember this for next time
	cmp ofilsz,0		; No divide by zeroes.
	je perpr5		; If not proceed.
	cmp wrpmsg,0		; did we write the percentage message?
	jne perpr1		; yes, skip this part
	call perpos		; position cursor
	mov dx,offset permsg
	mov ah,prstr
	int dos			; write out message
	mov wrpmsg,1		; init flag so we don't do it again
perpr1:	call perpos		; Position the cursor.
perpr2:	mov dx,tfilsz		; Get the high order word.
	mov ax,tfilsz+2		; Get the low order word.
	div ofilsz		; Div by percent adjusted original file size.
	cmp ax,100		; > 100% ?
	jle perpr3		; no, accept it
	mov ax,100		; else just use 100
perpr3:	call nout
	mov dl,'%'		; Load a percent sign.
perpr4:	mov ah,conout		; Print the character.
	int dos
perpr5:	ret

getfil: mov ah,0FFH
	mov flags.filflg,ah	; Nothing in the DMA.
	mov ax,0
	mov flags.eoflag,ah	; Not the end of file.
	mov bx,offset fcb+0CH
	mov [bx],ax		; Zero the current block number.
	mov bx,offset fcb+0EH
	mov [bx],ax		; Ditto for Lrecl.
	mov bx,offset fcb+20H
	mov [bx],ah		; Zero the current record (of block).
	inc bx
	mov [bx],ax		; Same for record (of file). 
	mov bx,offset fcb+23H
	mov [bx],ax
	mov ah,openf		; Open the file.
	mov dx,offset fcb
	int dos
	mov dx,word ptr fcb+18	; get file size (hi order word)
	mov filsiz,dx
	mov ax,word ptr fcb+16	; lo order word
	mov filsiz+2,ax
	div percnt		; Divide by 100.
	mov ofilsz,ax
	mov tfilsz,0		; Set bytes sent to zero.
	mov tfilsz+2,0
	mov oldkbt,-1
	mov oldper,-1
	cmp filsiz,0		; Null file?
	jne getfl0		; Nope.
	cmp filsiz+2,0		; Null file?
	jne getfl0		; Nope.
	mov flags.eoflag,0FFH	; Set EOF.
getfl0:	jmp rskp


gtnfil: cmp flags.cxzflg,'Z'	; Did we have a ^Z? [20b]
	je gtn5			; If yes, we're done sending files. [20b]
	cmp flags.wldflg,0	; Was there a "*"?		[7 start]
	je gtn5			; Nope.
	mov bx,offset cpfcb	; Get FCB from last check for file.  
	mov di,offset fcb	; Copy to FCB.
	mov cl,37		; Size of FCB.
	call fcbcpy
gtn2:	mov ah,snext
	mov dx,offset fcb	; More files?
	int dos
	cmp al,0FFH
	je gtn5
	mov bx,offset fcb
	mov di,offset cpfcb
	mov cl,37
	call fcbcpy		; Copy from FCB.
	mov di,offset fcb+1	; Get name of next file to send.
	mov bx,offset buff+1
	mov cl,11
	call fcbcpy
	call getfil		; Initialize
	 jmp r
	jmp rskp			
gtn5:	mov flags.wldflg,0	; Reset wild card flag.
	ret			 			;  [7 end]


;	Get the file name (including host to micro translation)
 
gofil:  cmp flags.xflg,1	; Remote command? [21c]
	jne goflx		; No.... [21c]
	jmp gofla		; Yes so skip this stuff. [21c]
goflx:	cmp flags.nmoflg,1	; Overriding name from other side? [21a]
	jne gofil0		; No - get the filename. [21a]
	jmp gofil7		; Yes, so ignore packet contents. [21a]
gofil0:	mov bx,offset data	; Get the address of the file name. [21a]
	mov fdtpnt,bx		; Store the address.
	mov bx,offset fcb+1	; Address of the FCB.
	mov fcbptr,bx		; Save it.
	mov ax,0
	mov temp1,ax		; Initialize the char count.
	mov temp2,ax
	cmp flags.droflg,1	; Default drive? [21a]
	je gofil1		; No - don't blank out value in FCB. [21a]
	mov si,offset fcb
	mov [si],ah		; Set the drive to default to current.
gofil1: mov ch,' '		; Moved the label. [21a]
	mov [bx],ch		; Blank the FCB.
	inc bx
	inc ah
	cmp ah,0BH		; Twelve?
	jl gofil1
gofil2: mov bx,fdtpnt		; Get the NAME field.
	mov ah,[bx]
	inc bx
	mov fdtpnt,bx
	cmp ah,'.'		; Seperator?
	jne gofil3
	mov bx,offset fcb+9H
	mov fcbptr,bx
	mov ax,temp1
	mov temp2,ax
	mov temp1,9H
	jmp gofil6
gofil3: cmp ah,0		; Trailing null?
	jz gofil7		; Then we're done.
	call verlet		; Verify that the char is legal. 
	mov bx,fcbptr
	mov [bx],ah
	inc bx
	mov fcbptr,bx
	mov ax,temp1		; Get the char count.
	inc ax
	mov temp1,ax
	cmp ax,8H		; Are we finished with this field?
	jl gofil2
gofil4: mov temp2,ax
	mov bx,fdtpnt
	mov ah,[bx]
	inc bx
	mov fdtpnt,bx
	cmp ah,0
	jz gofil7
	cmp ah,'.'		; Is this the terminator?
	jne gofil4		; Go until we find it.
gofil6: mov bx,fdtpnt		; Get the TYPE field.
	mov ah,[bx]
	inc bx
	mov fdtpnt,bx
	cmp ah,0		; Trailing null?
	jz gofil7		; Then we're done.
	call verlet		; Verify that the char is legal. 
	mov bx,fcbptr
	mov [bx],ah
	inc bx
	mov fcbptr,bx
	inc temp1		; Increment char count.
	cmp temp1,0CH		; Are we finished with this field?
	jl gofil6
gofil7:	cmp flags.remflg,0	; remote mode?
	jne gofil7a		; yes, don't print it.
	call prtfn		; Print the file name. [21a]
gofil7a:cmp flags.destflg,0	; Writing to the printer?
	jne gf7y
	push es
	mov ax,ds
	mov es,ax		; Set this up.
	mov cx,11
	mov si,offset printer
	mov di,offset fcb
	repne movsb		; Change name in FCB to be printer.
	pop es
	jmp gofil9
gf7y:	mov ah,flags.flwflg	; Is file warning on?
	cmp ah,0
	jnz gf7x
	jmp gofil9		; If not, just proceed.
gf7x:	mov ah,openf		; See if the file exists.
	mov dx,offset fcb
	int dos
	cmp al,0FFH		; Does it exist?
	jnz gf8x
	jmp gofil9		; If not create it.
gf8x:	cmp flags.remflg,0	; remote mode?
	jne gf8xa		; yes, skip printing
	call frpos		; Position cursor. 
	mov ah,prstr		; Inform the user we are renaming the file.
	mov dx,offset infms5
	int dos
gf8xa:	mov ax,temp2		; Get the number of chars in the file name.
	cmp ax,0
	jne gofil8
	mov ax,temp1
	mov temp2,ax
gofil8: mov ch,0
	mov cl,al
	mov al,0		; Says if first field is full.
	cmp cl,9H		; Is the first field full?
	jne gofl81
	mov al,0FFH		; Set a flag saying so.
	dec cl
gofl81: mov bx,offset fcb	; Get the FCB.
	add bx,cx		; Add in the character number.
	mov ah,'&'
	mov [bx],ah		; Replace the char with an ampersand.
	push ax
	push bx
	mov ah,openf		; See if the file exists.
	mov dx,offset fcb
	int dos
	pop bx
	cmp al,0FFH		; Does it exist?
	pop ax
	jz gofl89		; If not create it.
	cmp al,0		; Get the flag.
	jz gofl83
	dec cl			; Decrement the number of chars.
	cmp cl,0
	jz gofl88		; If no more, die.
	jmp gofl81
gofl83: inc cl			; Increment the number of chars.
	cmp cl,9H		; Are we to the end?
	jl gofl81		; If not try again ; else fail. 
 
gofl88:	cmp flags.remflg,0	; remote mode?
	jne gofl88a		; yes, no printing
	call erpos		; Position cursor.
	mov ah,prstr		; Tell the user that we can't rename it.
	mov dx,offset ermes4
	int dos
gofl88a:mov bx,dx		; Tell host can't rename.  [20f]
	call errpack		; Send error packet before abort. [20f]
	ret
 
gofl89:	cmp flags.remflg,0	; remote mode
	jne gofil9		; yes, don't have to print it
	mov bx,offset fcb+0CH	; Point past the end of the file name.
	mov dh,[bx]		; Save the present contents.
	mov ah,'$'
	mov [bx],ah		; Put in a dollar sign.
	push dx
	mov ah,prstr		; Print the file name.
	mov dx,offset fcb+1
	int dos
	pop dx
	mov bx,offset fcb+0CH	; Restore over the dollar sign.
	mov [bx],dh
gofil9: mov ah,delf		; Delete the file if it exists.
	mov dx,offset fcb
	int dos
	mov ax,0
	mov si,offset fcb+0CH
	mov [si],ax		; Zero current block.
	mov si,offset fcb+0EH
	mov [si],ax		; Same for Lrecl.
	mov si,offset fcb+20H
	mov [si],ah		; Zero the current record (within block).
	inc si
	mov [si],ax		; Zero record (within file).
	mov si,offset fcb+23H
	mov [si],ax
	mov ofilsz,0		; File size unknown.
	mov tfilsz,0		; Set bytes received to zero.
	mov tfilsz+2,0
	mov oldkbt,-1
	mov oldper,-1
	mov ah,makef		; Now create it.
	mov dx,offset fcb
	int dos
	cmp al,0FFH		; Is the disk full?
	je gf9x
	jmp rskp
gf9x:	cmp flags.remflg,0	; remote mode?
	jne gf9xa		; yes, don't try printing
	call erpos		; Position cursor.
	mov ah,prstr		; If so tell the user.
	mov dx,offset erms12
	int dos
	mov bx,dx
gf9xa:	call errpack		; Send an error packet.
	ret
gofla:  cmp pack.argbk1,0	; Any data in "X" packet? [21c start]
	je gofla1		; Nothing to print. 
	mov ah,prstr
	mov dx,offset crlf
	int dos	
	int dos			; Print another crlf.
	mov di,offset data	; Where data is.
	mov cx,pack.argbk1	; How much data we have.
	call prtscr		; Print it on the screen.
gofla1:	mov ah,prstr
	mov dx,offset crlf
	int dos
	jmp rskp		; And done. [21c end]
FILEIO	ENDP

; Passed char of incoming filename in AH.  Verify that it is legal
; and if not change it to an "X".
verlet:	cmp ah,'0'
	jl ver2			; See if it's a legal weird char.
	cmp ah,'z'+1
	jns ver2
	cmp ah,'9'
	jle ver1		; It's between 0-9 so it's OK.
	cmp ah,'A'
	jl ver2			; Coud be a weird char.
	cmp ah,'Z'
	jle ver1		; It's A-Z so it's OK.
	cmp ah,'a'
	jl ver2
	and ah,137O		; It's a-z, capitalize.
ver1:	ret

ver2:	push es
	mov cx,ds
	mov es,cx		; Scan uses ES register.
	mov di,offset spchar	; Special chars.
	mov cx,spclen		; How many of them.
	cmp dosnum,0		; Under version 2.0
	je ver3
	mov di,offset spchar2
	mov cx,spc2len
ver3:	mov al,ah		; Char is in al.
	repnz scasb		; Search string for input char.
	pop es
	mov ah,al		; Return it in AH.
	cmp cx,0		; Was it there?
	jnz ver1		; Yes, return it.
	mov ah,'X'		; If illegal, replace with "X".
	mov flags.nmoflg,1
	ret

; Print incoming filename(s). [21a]
PRTFN	PROC	NEAR
	call clrfln		; Position cursor & blank out the line.
	mov di,offset data	; Where to put the name.
	mov bx,offset fcb	; Where it is now.
	cmp flags.droflg,0	; Drive specified?
	je prtfn1
	mov dl,[bx]		; Which one did they say?
	add dl,'@'		; Make it readable.
	mov ah,dconio		; Print the drive name. 
	int dos
	mov dl,':'
	int dos
prtfn1:	inc bx			; Point to start of filename.
	cmp flags.nmoflg,0	; Is filename in packet?
	je prtfn2		; no, keep going
	add di,pack.argbk1	; bump by length of remote name
	mov si,offset asmsg	; something to put after it
	mov cx,asmln		; length of it
	rep movsb		; add this to the buffer
prtfn2:	mov cx,8		; At most 8 letters in file name.
	mov si,bx		; this is source now
prtfn3:	lodsb			; get a letter
	cmp al,' '		; Done with name?
	je prtfn4		; yes, continue
	stosb			; else store
	loop prtfn3		; and loop thru rest
prtfn4: mov si,offset fcb+9	; Point to file type. 
	cmp byte ptr [si],' '	; is there a type?
	je prtfn5		; Nope so we're done.
	mov al,'.'		; Add the dot.
	stosb
	mov cx,3		; At most 3 letters in file type.
	rep movsb		; copy type (incl trailing spaces)
prtfn5:	mov byte ptr [di],'$'	; end the string
	mov ah,prstr		; Print the file name.
	mov dx,offset data
	int dos
	mov flags.droflg,0	; Reset flag once have the full name.
	mov flags.nmoflg,0
	ret
PRTFN	ENDP

; Print data onto the screen.  If text has no "$" in it, just print
; it.  Else, do special output for the "$".  
; Routine expects: DI = Start of buffer we are to print.
;		   CX = Number of characters to print.	 [21c]

PRTSCR	PROC	NEAR
	mov al,'$'		; This is what we're looking for.
	mov oloc,di		; Remember original buffer address. 
	mov osiz,cx		; And original size. 
	push es
	mov bx,ds
	mov es,bx		; Have ES point to data area.
prts0:	repnz scasb		; Search for "$" in the buffer.
	cmp cx,0		; Found one?
	je prts1		; No, do a regular DOS call.
	mov ah,prstr
	mov dx,oloc		; Print up to the "$". 
	int dos
	mov ah,dconio
	mov dl,'$'
	int dos			; Print the "$"
	mov oloc,di		; New starting location.
	mov osiz,cx		; New size.
	jmp prts0
prts1:	mov bx,oloc		; The buffer location.
	add bx,osiz		; Point past the data.
	mov [bx],al		; Add "$" for printing.
	mov ah,prstr
	mov dx,oloc
	int dos
	pop es
	ret
PRTSCR	ENDP

FIXFCB  PROC	NEAR	
	push ax			; Don't forget this.  [22]
	mov bx,offset fcb+18
	mov di,offset filsiz
	mov ax,[bx]
	mov [di],ax
	mov bx,offset fcb+16
	mov ax,[bx]
	mov 2[di],ax
	pop ax			; Get number of chars in last buffer full. [22]
	sub filsiz+2,ax		; Get real file size.
	sbb filsiz,0
	mov bx,offset fcb+18
	mov di,offset filsiz
	mov ax,[di]
	mov [bx],ax
	mov bx,offset fcb+16
	mov ax,2[di]
	mov [bx],ax
	ret
FIXFCB	ENDP

; Jumping to this location is like retskp.  It assumes the instruction
;   after the call is a jmp addr.
 
RSKP	PROC	NEAR
	pop bp
	add bp,3
	push bp
	ret
RSKP	ENDP
 
; Jumping here is the same as a ret.
 
R	PROC	NEAR
	ret
R	ENDP

code	ends
	end
```
{% endraw %}

## MSKERM.ASM

{% raw %}
```
	public	prompt, dosnum, curdsk, fpush
	include msdefs.h
;******************** Version 2.27 ********************************** 
; KERMIT, Celtic for "free" 
;
; The name "Kermit" is a registered trade mark of Henson Associates, Inc.,
; used by permission.
; 
;       Kermit-MS Program Version 2.27, December 6,1984
; 
;       Based on the Columbia University KERMIT Protocol.
; 
;       Copyright (C) 1982,1983,1984 Trustees of Columbia University
;
;       Daphne Tzoar, Jeff Damens
;       Columbia University Center for Computing Activities
;       612 West 115th Street
;       New York, NY  10025
; 
; Special thanks to Frank da Cruz, Bill Catchings, Steve Jensen, Herm Fischer,
; Vace Kundakci, and Bernie Eiben for their help and contributions.

makseg	equ	26H
deffcb	equ	5cH
setblk	equ	4AH
exec	equ	4BH
env	equ	2CH		; environment address in psp
terma	equ	10		; termination address in psp
cline	equ	80H		; offset in psp of command line
namsiz	equ	20		; Bytes for file name and size.
maxnam	equ	10
chmod	equ	43H		; chmod call (used to test for file existence)

STACK   SEGMENT PARA STACK 'STACK'
        DW      100 DUP(0)      ; Initialize stack to all zeros.
STK	EQU	THIS WORD
STACK   ENDS
 
datas   segment public 'datas'
	extrn	buff:byte, comand:byte, flags:byte, pack:byte, trans:byte
	extrn	fcb:byte, cpfcb:byte, prmptr:word, inichk:byte
	extrn	machnam:byte
	public	takadr,taklev

versio	label	byte
	verdef
	db	cr,lf
	db	'Type ? for help',cr,lf
	db	'$'
tmp	db	?,'$'
crlf    db      cr,lf,'$'
ermes1  db      cr,lf,'?Unrecognized command$'
ermes3  db      cr,lf,'?Not confirmed$'
erms30	db	cr,lf,'Passed maximum nesting level for TAKE command$'
erms31	db	cr,lf,'Take file not found$'
erms32	db	cr,lf,'File(s) not found$'
erms33	db	cr,lf,'CHKDSK program not found on current disk$'
erms34	db	cr,lf,'This command works only for DOS 2.0 and above$'
erms35	db	cr,lf,'Must specify program name$'
erms36	db	cr,lf,'Could not free memory$'
erms37	db	cr,lf,'Unable to execute program$'
infms1	db	'Really erase *.*? $'
infms8	db	cr,lf,'File(s) erased$'
tmsg5	db	cr,lf,'[closing log file]',cr,lf,'$' ; [jd]
filhlp1 db      ' Command file specification $'
filhlp2 db      ' File specification (possibly wild) $'
filhlp3	db	' File spec (possibly wild) or confirm with carriage return$'
filmsg	db	' File specification with optional path name $'
filwmsg	db	' File specification (possibly wild) with optional path name $'
chkfil	db	0,'CHKDSK  COM'
chkflen	equ	$-chkfil

tophlp  db	cr,lf
	db	'BYE',tab,tab
	db	'CLOSE',tab,tab
	db      'CONNECT',tab,tab
	db	'DEFINE',tab,tab
	db	cr,lf
	db	'DELETE',tab,tab
	db	'DIRECTORY',tab
	db	'DO',tab,tab
        db      'EXIT',tab,tab
	db	cr,lf
	db	'FINISH',tab,tab
	db	'GET',tab,tab
        db      'HELP',tab,tab
	db	'LOCAL',tab,tab
	db	cr,lf
	db	'LOG',tab,tab
	db	'LOGOUT',tab,tab
	db	'PUSH',tab,tab
        db      'QUIT',tab,tab
	db	cr,lf
        db      'RECEIVE',tab,tab
	db	'REMOTE',tab,tab
	db	'RUN',tab,tab
        db      'SEND',tab,tab
	db	cr,lf
	db	'SERVER',tab,tab
        db      'SET',tab,tab
	db	'SHOW',tab,tab
	db	'SPACE',tab,tab
	db	cr,lf
        db      'STATUS',tab,tab
	db	'TAKE'
	db	'$'

lochlp	db	cr,lf,'DELETE file'
	db	cr,lf,'DIRECTORY [filespec]'
	db	cr,lf,'SPACE remaining on current disk'
	db	cr,lf,'RUN program'
	db	cr,lf,'PUSH to command interpreter'
	db	'$'

        ; COMND tables

yestab	db	2
	mkeyw	'NO',0
	mkeyw	'YES',1

comtab  db	27
	mkeyw	'BYE',bye
	mkeyw	'C',telnet
	mkeyw	'CLOSE',clscpt
	mkeyw	'CONNECT',telnet
	mkeyw	'DEFINE',dodef
	mkeyw	'DELETE',delete
	mkeyw	'DIRECTORY',direct
	mkeyw	'DO',docom
	mkeyw	'EXIT',exit
	mkeyw	'FINISH',finish
	mkeyw	'GET',get
	mkeyw	'HELP',help
	mkeyw	'LOCAL',lclcmd
	mkeyw	'LOG',setcpt
	mkeyw	'LOGOUT',logout
	mkeyw	'PUSH',dopush
	mkeyw	'QUIT',exit
	mkeyw	'RECEIVE',read
	mkeyw	'REMOTE',remote
	mkeyw	'RUN',run
	mkeyw	'SEND',send
	mkeyw	'SERVER',server
	mkeyw	'SET',setcom
	mkeyw	'SHOW',showcmd
	mkeyw	'SPACE',chkdsk
	mkeyw	'STATUS',status
	mkeyw	'TAKE',take

loctab	db	5
	mkeyw	'DELETE',delete
	mkeyw	'DIRECTORY',direct
	mkeyw	'PUSH',dopush
	mkeyw	'RUN',run
	mkeyw	'SPACE',chkdsk

shotab	db	2
	mkeyw	'KEY',shokey
	mkeyw	'MACROS',shomac

; Program storage.
 
oldstk  dw      ?               ; Storage for system stack.
oldsts  dw      ?               ; System stack segment.
ssave	dw	?		; Original SS when doing CHKDSK.
siz	dw	?		; Memory size.
in3ad	dd	0		; Original break interrupt addresses. [25]
curdsk	db	0		; Current disk. 
origd	db	0		; Original disk.
fildat	db	0		; Manipulate file data/time creation.
	db	0
taklev	db	0		; Take levels. [25t]
takadr	dw	takstr-(size takinfo) ; Pointer into structure. [25t]
temp	dw	0
temp1   dw      ?               ; Temporary storage.
temp2   dw      ?
temp3   dw      ?
temp4   dw      ?
psp	dw	?
divst	dw	0	
takstr	db	(size takinfo) * maxtak dup(?)
ininam	db	0,'MSKERMITINI'	; init file name, on default disk, 12 chars
ininm2	db	'MSKERMIT.INI',0 ; init file name for 2.0
nambuf	db	maxnam * namsiz dup (?)
cmdnam	db	namsiz dup (?)
exefcb	db	fcbsiz dup (?)
exefcb2	db	fcbsiz dup (?)
exearg	dw	?		; segment addr of environment (filled in below)
	dd	0		; ptr to cmd line (filled in below)
	dd	exefcb		; default fcb
	dd	exefcb2		; second default fcb
dircmd	db	' /c dir '
dirclen	equ	$-dircmd
dirnam	db	50h dup (?)
chkdcmd	db	'chkdsk.com'
chkdlen	equ	$-chkdcmd
dosnum	db	?		; dos version number
pthnam	db	'PATH='
pthlen	equ	$-pthnam
pthbuf	db	100 dup (?)	; buffer for path definition.
defpth	db	'\', 70 dup (?)	; buffer for default path
cmspnam	db	'COMSPEC='
cmsplen	equ	$-cmspnam
cmspbuf	db	'\command.com',0 ; default name
	db	30 dup (?)	; some additional space
tfile	db	100 dup (?)	; temp space for file names.
eexit	db	cr,'exit',cr
leexit	equ	$-eexit
datas   ends                    ; End data segment
 
code	segment	public 
	public	takrd
start   proc  far
	extrn	cmblnk:near, locate:near, logout:near
	extrn	bye:near, telnet:near, finish:near, comnd:near
	extrn	read:near, remote:near, send:near, status:near, get:near
	extrn	dodisk:near, serrst:near, setcom:near
	extrn	clscpi:near, clscpt:near, getbaud:near
	extrn	dodef:near, setcpt:near, docom:near
	extrn	server:near, lclini:near, shokey:near, shomac:near
	extrn	packlen:near
        assume  cs:code,ds:datas,ss:stack,es:nothing
 
        push ds                 ; Save system data area.
        sub ax,ax               ; Get a zero.
        push ax                 ; Put zero return addr on stack.

	mov ax,datas           ; Initialize DS.
        mov ds,ax
	sub ax,ax

        mov oldstk,sp           ; Save old stack pointer.

	mov ax,es:[2]		; In program segment prefix
	mov siz,ax		; Pick up memory size
	mov psp,es	

	mov ah,prstr
	mov dx,offset machnam	; print machine name
	int dos
        mov ah,prstr            ; Print the version header.
        mov dx,offset versio
        int dos

	mov ah,setdma		; Set disk transfer address.
	mov dx,offset buff
	int dos

	call getbaud		; Get the baud rate. [25]
	call dodisk		; See how many disk drives we have. [21a]
	call setint
	mov ah,gcurdsk		; Get current disk.
	int dos
	inc al			; We want 1 == A (not zero).
	mov curdsk,al
	mov origd,al		; Remember original disk we started on.
	mov ah,dosver
	int dos
	mov dosnum,al		; remember dos version
	cmp al,0
	je start1		; 1.1, keep going
	mov es,psp
	mov ax,es:[env]		; pick up environment address
	push ax
	call getpath		; get the path from the environment
	pop ax			; get environment back
	call getcsp		; get comspec from environment as well
start1:	call lclini		; do local initialization
	call gcmdlin		; read command line
	call rdinit		; read kermit init file
	call packlen		; Packet length in case do server comand.
; This is the main KERMIT loop.  It prompts for and gets the users commands.

kermit:	mov ax,ds
	mov es,ax		; make sure this addresses data segment
	mov dx,prmptr		; get prompt
	call prompt             ; Prompt the user.
	mov pack.state,0	; Clear the state.
	mov flags.cxzflg,0	; Reset each itme.
	mov ah,inichk		; Original or set checksum length.
	mov trans.chklen,ah	; Reset just in case.
        mov dx,offset comtab
        mov bx,offset tophlp
	mov comand.cmcr,1	; Allow bare CR's.
        mov ah,cmkey
        call comnd
         jmp kermt2
	mov comand.cmcr,0	; Not anymore.
        call bx                 ; Call the routine returned.
         jmp kermt3
	cmp flags.extflg,0	;  Check if the exit flag is set.
	jne krmend		;  If so jump to KRMEND.
	jmp kermit		; Do it again.
 
kermt2:	mov dx,offset ermes1	;  Give an error.
	jmp short kermt4

kermt3:	mov dx,offset ermes3	;  Give an error.
kermt4:	cmp flags.cxzflg,'C'	; some sort of abort?
	je kermit		; yes, don't print error message.
	mov ah,prstr
	int dos
	mov flags.droflg,0	; Reset drive override flag.
	mov flags.nmoflg,0	; Reset filename override flag.
	mov flags.getflg,0	; May as well do this one.
	mov flags.cmrflg,0	; This one too.
	jmp kermit
 
krmend: call serrst		; Just in case the port wasn't reset. [21c] 
	mov dl,origd		; Original disk drive.
	dec dl			; Want A == 0.
	mov ah,seldsk		; Reset original disk just in case.
	int dos
	mov sp,oldstk
	ret
 
START	ENDP

; This is the 'exit' command.  It leaves KERMIT and returns to DOS.
 
EXIT	PROC	NEAR
	mov ah,cmcfm
	call comnd		; Get a confirm.
	 jmp r
	test	flags.capflg,0FFH	; capturing?
	jz	exit1			; no, keep going
	mov	dx,offset tmsg5
	mov	ah,prstr
	int	dos
	call	clscpi
	 nop				; this skip returns...
	 nop
	 nop
exit1:
	mov flags.extflg,1	;  Set the exit flag.
	jmp rskp		; Then return to system.
EXIT	ENDP
 
 
; This is the 'help' command.  It gives a list of the commands.
 
HELP	PROC	NEAR
	mov ah,cmcfm
	call comnd		; Get a confirm.
	 jmp r
	mov ah,prstr		; Print a string to the console.
	mov dx,offset tophlp	; The address of the help message.
	int dos
	jmp rskp
HELP	ENDP
 
lclcmd	proc	near
	mov ah,cmkey
	mov dx,offset loctab
	mov bx,offset lochlp
	call comnd
	 jmp r
	call bx
	nop
	nop
	nop
	jmp rskp
lclcmd	endp

; Don't ignore ^C when in debug mode.
SETINT	PROC	NEAR
	push ds			; Don't forget this. [25]
	mov ax,ds
	mov es,ax		; So can access our data area.
	mov ax,0
	mov ds,ax		; Access low core.
	mov ax,ds:[23H * 4]	; Address for interrupt 23H.
	mov cx,ds:[23H * 4 +2]	; CS value for it.
	mov word ptr es:in3ad,ax ; Remember original values.
	mov word ptr es:in3ad+2,cx
	mov ax,cs
	mov ds,ax		; Access code are.
	mov dx,offset intbrk
	mov al,23H		; On ^C, goto above address.
	mov ah,25H
	int dos
	pop ds
	ret
SETINT	ENDP

; take commands from a file, but allow a path name
PTAKE	PROC	NEAR
	cmp taklev,maxtak		; Hit our limit?
	jl ptake1			; Continue if still OK.
	mov ah,prstr
	mov dx,offset erms30		; Complain.
	int dos 
	ret
ptake1:	mov di,takadr
	add di,size takinfo
	push di
	mov ah,cmtxt
	lea bx,[di].takbuf		; convenient place to parse name into
	mov dx,offset filmsg		; Help in case user types "?".
	call comnd
	 pop di
	 ret
	 nop
	pop di				; restore frame address
	cmp ah,0
	je ptake2			; empty, complain.
	push di				; keep it on stack.
	lea si,[di].takbuf		; get buffer back
	mov bl,ah			; length of thing parsed
	mov bh,0
	mov byte ptr [bx+si],0		; make it asciz
	mov ax,si			; point to name again
	call spath			; is it around?
	pop di				; need this back
	jc ptake2			; no, go complain
	mov dx,ax			; point to name from spath
	mov ah,open2			; 2.0 open call
	mov al,0			; open for reading
	int dos
	jnc ptake3			; open ok, keep going
ptake2:	mov ah,prstr
	mov dx,offset erms31
	int dos
	ret
ptake3:	inc taklev
	mov takadr,di
	mov word ptr [di].takfcb+1,ax	; save file descriptor
	mov byte ptr [di].takfcb,0feh	; mark as 2.0 file descriptor
	mov bx,ax			; need descriptor here
	mov ah,lseek
	mov al,2
	mov cx,0
	mov dx,cx			; seek 0 bytes from end
	int dos
	mov [di].takcnt,ax
	mov [di].takcnt+2,dx		; store length
	mov ah,lseek
	mov al,0
	mov cx,0
	mov dx,cx			; now seek back to beginning
	int dos
	cmp flags.takflg,0
	je ptake4
	mov ah,prstr
	mov dx,offset crlf
	int dos
ptake4:	call takrd		; Get a buffer full of data.
	jmp rskp
PTAKE	ENDP


; 	TAKE commands from a file.  [25t]

TAKE	PROC	NEAR
	cmp dosnum,0
	je take1
	jmp ptake			; use this for 2.0
take1:	cmp taklev,maxtak		; Hit our limit?
	jl take2				; Continue if still OK.
	mov ah,prstr
	mov dx,offset erms30		; Complain.
	int dos 
	ret
take2:	mov bx,takadr
	add bx,size takinfo
	push bx
	lea dx,[bx].takfcb
 	mov comand.cmcr,0		; Filename must be specified.
	mov ah,cmifi
	mov bx,offset filhlp1
	call comnd
	 pop bx
	 ret				; Make sure this is three bytes long.
	 nop
	pop bx
	mov byte ptr [bx].takfcb+32,0	; have to clear current record in fcb
	mov ah,openf
	lea dx,[bx].takfcb
	int dos
	cmp al,0FFH			; File not found?
	jne take3
	mov ah,prstr
	mov dx,offset erms31
	int dos
take3:	inc taklev
	mov takadr,bx
	mov ax,word ptr [bx+16].takfcb
	mov [bx].takcnt,ax
	mov ax,word ptr [bx+18].takfcb
	mov [bx].takcnt+2,ax		; copy size into takinfo
	cmp flags.takflg,0
	je take4
	mov ah,prstr
	mov dx,offset crlf
	int dos
take4:	call takrd			; Get a buffer full of data.
	jmp rskp
TAKE 	ENDP

TAKRD	PROC	NEAR
	push bx
	push cx	
	push dx
	mov bx,takadr
	cmp byte ptr [bx].takfcb,0feh	; is it a 2.0 file handle?
	jne takrd1			; no, handle differently
	push bx				; save frame address
	lea dx,[bx].takbuf		; buffer to read into
	mov cx,dmasiz			; # of bytes to read
	mov ah,readf2			; 2.0 read call
	mov bx,word ptr [bx].takfcb+1	; file handle is stored here
	int dos
	pop bx				; restore frame address
	jmp takrd2			; rejoin common exit

takrd1:	mov ah,setdma
	lea dx,[bx].takbuf
	int dos
	mov ah,readf
	lea dx,[bx].takfcb
	int dos
	mov ah,setdma
	lea dx,buff
	int dos
takrd2:	mov [bx].takchl,dmasiz
	lea ax,[bx].takbuf
	mov [bx].takptr,ax
	pop dx
	pop cx
	pop bx
	ret

TAKRD	ENDP

; copy the path into pthbuf
; enter with ax/ environment segment address
; works in 2.0 only.
getpath	proc	near
	push	es
	mov	bx,ds
	mov	es,bx			; address data segment
	mov	bx,offset pthnam	; thing to find
	mov	cx,pthlen		; length of it
	mov	dx,offset pthbuf	; place to put it
	mov	byte ptr pthbuf,0	; initialize to null...
	call	getenv			; get environment value
	pop	es
	ret				; and return
getpath	endp

; copy the comspec into cmspbuf
; enter with ax/ environment segment address
; works in 2.0 only.
getcsp	proc	near
	push	es
	mov	bx,ds
	mov	es,bx			; address data segment
	mov	bx,offset cmspnam	; thing to find
	mov	cx,cmsplen		; length of it
	mov	dx,offset cmspbuf	; place to put it
	call	getenv			; get environment value
	pop	es
	ret				; and return
getcsp	endp

; find a path variable.  Enter with ax/ environment segment,
; bx/ variable to find (incl =), cx/ length of variable name,
; dx/ address to store value at.
; The buffer given in dx is unchanged if the variable isn't found
getenv	proc	near
	push	ds
	push	es
	mov	es,ax			; address segment
	mov	di,0			; offset in segment
geten1:	cmp	es:byte ptr [di],0	; end?
	je	geten4			; yes, forget it
	push	cx			; save counter
	push	di			; and offset
	mov	si,bx
	repe	cmpsb			; is it the one?
	pop	di
	pop	cx			; restore these
	je	geten2			; found it, break loop
	push	cx			; preserve again
	mov	cx,0ffffh		; bogus length
	mov	al,0			; marker to look for
	repne	scasb			; search for it
	pop	cx			; restore length
	jmp	geten1			; loop thru rest of environment
geten2:	add	di,cx			; skip to definition
	mov	si,di			; this is source
	mov	di,dx			; destination as given
	mov	ax,ds
	mov	bx,es
	mov	ds,bx
	mov	es,ax			; exchange segment regs for copy
geten3:	lodsb				; get a byte
	stosb				; drop it off
	cmp	al,0			; end of string
	jne	geten3			; no, go on
geten4:	pop	es
	pop	ds			; restore registers
	ret				; and return
getenv	endp

; put kermit.ini onto take stack if it exists.  Just like
; the take command, except it doesn't read a filename.

rdinit	proc	near		; read kermit init file...
	mov al,dosnum		; get dos version
	or al,al
	jne rdini4		; post 2.0, use file handle instead...
	mov bx,takadr
	add bx,size takinfo	; bump take ptr, point to current take frame
	lea di,[bx].takfcb	; destination is fcb
	mov ax,ds
	mov es,ax		; destination segment = source segment
	mov si,offset ininam	; name of init file
	mov cx,12		; 8 char name + 3 char ext + 1 char drive...
	rep movsb		; copy it in
	mov byte ptr [bx].takfcb+32,0 ; have to clear current record in fcb
	mov ah,openf
	lea dx,[bx].takfcb
	int dos
	cmp al,0FFH		; File not found?
	jne rdini1		; no, keep going
	ret			; else just return, no init file
rdini1:	inc taklev		; bump take level
	mov takadr,bx		; save current take frame ptr
	mov ax,word ptr [bx+16].takfcb
	mov [bx].takcnt,ax
	mov ax,word ptr [bx+18].takfcb
	mov [bx].takcnt+2,ax	; copy size into takinfo
rdini2:	cmp flags.takflg,0
	je rdini3
	mov ah,prstr
	mov dx,offset crlf
	int dos
rdini3:	call takrd		; Get a buffer full of data.
	ret

rdini4:	mov ax,offset ininm2	; name to try
	push bx
	call spath		; can we find it?
	pop di
	jc rdini6		; no, forget it, go use it
	mov dx,ax		; point to name
	mov ah,open2		; 2.0 open function
	mov al,0		; for reading...
	int dos
	jc rdini6		; can't open, forget it

rdini5:	inc taklev		; bump take level
	add takadr,size takinfo
	mov di,takadr		; get current frame ptr
	mov word ptr [di].takfcb+1,ax	; save file handle
	mov byte ptr [di].takfcb,0feh	; mark as a handle
	mov bx,ax			; move file ptr
	mov ah,lseek
	mov al,2
	mov cx,0
	mov dx,0			; seek to end of file
	int dos
	mov [di].takcnt,ax		; copy file size
	mov [di].takcnt+2,dx		; into structure
	mov al,0
	mov ah,lseek
	mov cx,0
	mov dx,0
	int dos				; seek back to beginning
	jmp rdini2			; go rejoin common exit
rdini6:	ret				; no init file, just return
rdinit	endp

; get command line into a macro buffer.

gcmdlin	proc	near
	push	ds
	push	es
	cld
	mov	es,psp			; address psp
	mov	ch,0
	mov	cl,es:[cline]		; length of cmd line
	mov	di,cline+1		; point to actual line
	mov	al,' '
	jcxz	gcmdl3			; no command line, forget it.
	repe	scasb			; skip over spaces
	je	gcmdl3			; all spaces, forget it
	mov	si,di			; this is first non-space
	dec	si			; pre-incremented...
	inc	cx
	inc	taklev			; bump take level
	add	takadr,size takinfo	; address new take frame
	mov	bx,takadr
	mov	byte ptr [bx].takfcb,0ffh ; mark as a macro
	push	cx			; save length
	push	ds			; and segment
	lea	di,[bx].takbuf		; into take buffer
	mov	ax,ds
	mov	ds,psp
	mov	es,ax			; switch segments for copy
gcmdl1:	lodsb				; get a byte
	cmp	al,','			; comma?
	jne	gcmdl2			; no, keep going
	mov	al,cr			; convert to cr
gcmdl2:	stosb				; deposit it
	loop	gcmdl1			; copy whole cmd
	pop	ds			; restore segment
	mov	si,offset eexit		; something to tack onto end
	mov	cx,leexit		; length of it
	rep	movsb			; copy it in
	pop	cx			; restore len
	add	cx,leexit		; count wnat we added
	
	lea	ax,[bx].takbuf
	mov	[bx].takptr,ax		; init buffer ptr
	mov	[bx].takchl,cl		; chars remaining
	mov	[bx].takcnt,cx		; and all chars
	mov	[bx].takcnt+2,0		; clear high order
gcmdl3:	pop	es
	pop	ds
	ret
gcmdlin	endp

;	This routine prints the prompt and specifies the reparse address.
 
PROMPT	PROC  NEAR
	mov comand.cmprmp,dx	; save the prompt
	pop bx			; Get the return address.
	mov comand.cmrprs,bx	; Save as addr to go to on reparse.
	mov comand.cmostp,sp	; Save for later restoral.
	push bx			; Put it on the stack again.
	mov bx,offset comand.cmdbuf
	mov comand.cmcptr,bx	; Initialize the command pointer.
	mov comand.cmdptr,bx
	mov ah,0
	mov comand.cmaflg,ah	; Zero the flags.
	mov comand.cmccnt,ah
	mov comand.cmsflg,0FFH
	cmp flags.takflg,0	; look at take flag
	jne promp1		; supposed to echo, skip this check...
	cmp taklev,0		; inside a take file?
	je promp1		; no, keep going
	ret			; yes, return
promp1:	mov ah,prstr
	mov dx,offset crlf
	int dos
	mov ah,prstr		; Print the prompt.
	mov dx,comand.cmprmp
	int dos
	ret
PROMPT	ENDP
 
; Erase specified file(s).
DELETE	PROC	NEAR
 	mov comand.cmcr,0	; Filename must be specified.
	mov ah,cmifi		; Parse an input filespec.
	mov dx,offset fcb
	mov bx,offset filhlp2	; Text of help message.
	call comnd
	 jmp r			; Bad filename.
	mov ah,cmcfm		; Parse a confirm.
	call comnd
	 jmp r
	cld
	mov di,offset fcb+1
	mov al,'?'
	mov cx,11		; # of chars in a name
	repe scasb		; are they all ?'s?
	jne del1		; no, skip message
	mov dx,offset infms1
	call prompt
	mov ah,cmkey
	mov dx,offset yestab
	mov bx,0
	call comnd
	 jmp r
	push bx
	mov ah,cmcfm
	call comnd
	 pop bx
	 ret
	 nop
	pop bx
	cmp bx,0
	jne del1
	jmp rskp
del1:	mov dx,offset fcb
	mov ah,sfirst		; See if any files match this specification.
	int dos	
	cmp al,0FFH		; No matches?
	jne del2
	mov ah,prstr
	mov dx,offset erms32
	int dos
	jmp rskp
del2:	mov dx,offset fcb
	mov ah,delf		; Erase the file(s).
	int dos
	mov dx,offset infms8
	mov ah,prstr		; Say we did so.
	int dos
	jmp rskp
DELETE	ENDP	

CHKDSK	PROC	NEAR
	mov ah,cmcfm
	call comnd
	 jmp r
	cmp dosnum,0
	je chkds1			; yes, have to do it the hard way
	mov si,offset chkdcmd		; point to cmd
	mov cx,chkdlen			; and length
	jmp crun			; and go execute it nicely
chkds1:	push es
	mov ax,ds
	mov es,ax
	mov di,offset fcb
	mov si,offset chkfil
	mov cx,chkflen
	rep movsb
	mov dx,offset stk + 15		; End of stack plus roundoff.
	mov cl,4
	shr dx,cl			; Divide to get segment.
	add dx,seg stack		; Get past the stack.
	mov es,dx			; remember where segment is.
	mov ah,makseg			; Create new PSP.
	int dos
	mov ax,siz			; Update machine size.
	mov es:2,ax
	mov es: byte ptr [deffcb],0	; Blank default fcb.
	mov di,deffcb+1
	mov al,' '			; Blank out fcb.
	mov cx,fcbsiz
	rep stosb
	mov word ptr es:[terma],offset term	; Termination address.
	mov es:[terma+2],cs
	mov ah,openf
	mov dx,offset fcb
	int dos
	inc al
	jnz chkok
	mov dx,offset erms33
	mov ah,prstr
	int dos
	jmp chkend

chkok:	mov byte ptr fcb+32,0		; set current record field
	mov di,100h			; offset to copy into
lp:	mov dx,offset fcb
	mov ah,readf
	int dos
	push ax				; save status
	mov si,offset buff
	mov cx,dmasiz/2			; Word size of DMA
	rep movsw			; copy into new segment...
	pop ax
	cmp al,1			; End of file
	je dun
	cmp al,3			; Done here too
	jne lp
dun:	mov ssave,sp			; Save stack pointer.
	mov ax,es
	mov word ptr cs:[doit+2],ax 	; Set segment for CHKDSK.
	mov ds,ax
	mov ss,ax
	mov ax,0
	jmp cs: dword ptr [doit]	; Call CHKDSK.
term:	mov ax,seg datas		; Reset data area.
	mov ds,ax
	mov sp,ssave
	mov ax,seg stack
	mov ss,ax
	mov ah,setdma
	mov dx,offset buff
	int dos				; restore dma address!!
chkend:	pop es
	jmp rskp
doit	dd 100h
CHKDSK	ENDP

; Get directory listing.
DIRECT	PROC	NEAR
	mov ah,dosver		; See what level of DOS we're at.
	int dos
	cmp al,0		; Level 2.0 or above?
	jne dir4		; Yes - get directory the easy way.
	mov comand.cmcr,1	; Allow plain CR (so DIR == DIR *.*).
	mov ah,cmifi		; Get input file spec.
	mov dx,offset fcb	; Give the address for the FCB.
	mov bx,offset filhlp3
	call comnd
	 jmp r
	mov ah,cmcfm		; Parse a confirm.
	call comnd
	 jmp r
	mov comand.cmcr,0	; Reset this. 
	push es
	mov ax,ds
	mov es,ax
	mov temp1,0FFH
	mov di,offset nambuf
dir0:	call getfn		; Get a matching file name.
	cmp al,0FFH		; Retcode -- are we done?
	je dir1			; Yes, just leave.
	call dumpit		; Print it or dump to buffer.
	jmp dir0
dir1:	pop es
	jmp rskp

dir4:	mov si,offset cmspbuf	; command processor
	mov di,offset dirnam
dir5:	lodsb			; get a byte
	or al,al
	jz dir6			; stop on the null
	stosb			; otherwise copy it in
	jmp dir5		; and keep going
dir6:	mov si,offset dircmd	; add directory command to it
	mov cx,dirclen
	rep movsb
	mov ah,cmtxt		; parse with cmtxt so we can have paths...
	mov bx,di		; next available byte
	mov dx,offset filwmsg	; In case user wants help. 
	call comnd
	 jmp r
	mov cl,ah
	mov ch,0		; length of name
	sub di,offset dirnam	; compute # of bytes used
	add cx,di
	mov si,offset dirnam	; dir cmd
	jmp crun		; join run cmd from there.
DIRECT	ENDP

getfn:	cmp temp1,0FFH
	jne gtfn1
	mov ah,sfirst		; Any matches?
	mov dx,offset fcb
	int dos
	cmp al,0FFH		; Means no matches.
	je gtfn5
	call savfcb
	mov temp1,0
	jmp gtfn4
gtfn1:	cmp flags.wldflg,0FFH	; Wilcard seen?
	je gtfn2		; Yes, get next file.
	mov al,0FFH		; No, set retcode.
	ret
gtfn2:	call rstfcb
	mov ah,snext
	mov dx,offset fcb
	int dos
	cmp al,0		; Any more matches?
	je gtfn3		; Yes keep going.
	mov al,0FFH		; OK return code.
	ret
gtfn3:	call savfcb
gtfn4:	push di
	mov si,offset buff	; Data is here.
	mov di,offset fcb	; Copy to here.
	mov cx,37
	repne movsb
	pop di
	call nicnam		; Make name nice for printing.
	mov al,0
	ret
gtfn5:	mov ah,prstr		; Don't print if a server. 
	mov dx,offset erms32	; Say no matches.
	int dos
	mov al,0FFH		; Failure return code.
	ret

savfcb:	push di
	mov si,offset fcb	; Data is here.
	mov di,offset cpfcb	; Copy to here.
	mov cx,37
	repne movsb
	pop di
	ret

rstfcb:	push di
	mov si,offset cpfcb	; Data is here.
	mov di,offset fcb	; Copy to here.
	mov cx,37
	repne movsb
	pop di	
	ret

nicnam:	mov al,CR		; Add CRLF before print names
	stosb
	mov al,LF
	stosb
	mov cx,8
	mov si,offset fcb+1
	repne movsb		; Get the file name.
	mov al,' '
	stosb
	mov cx,3
	repne movsb
	mov al,tab
	stosb
	mov al,' '
	stosb
	mov ah,openf
	mov dx,offset fcb
	int dos	
	mov bx,offset fcb+18	; Get hi order word of file size.
	mov ax,[bx]
	mov dx,ax
	mov bx,offset fcb+16	; Get lo order word.
	mov ax,[bx]
	call nout2x		; Get it in decimal. 
	mov al,tab
	stosb
	mov al,' '
	stosb
	mov ah,0
	mov si,offset fcb+20
	lodsb
	mov fildat+1,al
	lodsb
	mov fildat,al		; Date field of fcb.
	mov cl,5
	shr fildat+1,cl
	and fildat,1
	mov cl,3
	shl fildat,cl
	mov al,fildat
	or al,fildat+1		; Get the month field.
	cmp al,9
	jg nic0
	push ax
	mov al,' '
	stosb
	pop ax
nic0:	call nout2		; Make it decimal.
	mov al,'-'
	stosb
	mov si,offset fcb+20	; Get date field.
	lodsb
	and al,1FH
	cmp al,10		; Only one digit?
	jge nic0x
	push ax
	mov al,'0'		; Make it two digits.
	stosb
	pop ax
nic0x:	call nout2		; Make it decimal.
	mov al,'-'
	stosb
	mov si,offset fcb+21	; Get the year field.
	lodsb
	shr al,1
	add al,80
	cmp al,100		; At the year 2000 or above?
	js nic0y		; No, just go on.
	sub al,100		; Go back to two digits.
nic0y:	cmp al,10		; Only one digit?
	jge nic0z
	push ax
	mov al,'0'		; Make it two digits.
	stosb
	pop ax
nic0z:	call nout2		; Make it decimal.
	mov al,tab
	stosb
	mov si,offset fcb+23	; Get time field of fcb.
	lodsb
	mov cl,3		; Get the hour field.
	shr al,cl
	mov tmp,'a'		; For AM.
	cmp al,12		; Before noon?
	jl nic1
	mov tmp,'p'		; It's PM.
	je nic1			; Don't change "12" to "0".
	sub al,12		; Use a 12 hr. clock.
nic1:	cmp al,0		; Just after midnight?
	jne nic1x
	add al,12		; Make it "12" instead of "0".
nic1x:	cmp al,10		; Pad with a space?
	jge nic2
	push ax
	mov al,' '
	stosb
	pop ax
nic2:	call nout2		; Make it decimal.
	mov al,':'		; Separate hours and minutes.
	stosb
	mov si,offset fcb+23	; Get the minutes field.
	lodsb
	and al,07
	mov cl,3
	shl al,cl
	mov ah,al
	mov si,offset fcb+22
	lodsb
	mov cl,5
	shr al,cl
	or al,ah
	mov ah,0
	cmp al,10		; Would there be a leading zero.
	jge nic3
	push ax
	mov al,'0'
	stosb
	pop ax
nic3:	call nout2		; Make it decimal.
	mov al,tmp		; Add 'a' (AM) or 'p' (PM).
	stosb
	mov ah,closf
	mov dx,offset fcb
	int dos
	ret

; For now, just print it.
dumpit:	mov al,'$'
	stosb
	mov ah,prstr
	mov dx,offset nambuf
	int dos
	mov di,offset nambuf
	ret

; push to an inferior command parser
; entry fpush (fast push...) pushes without waiting for a confirm.
; returns rskp.
dopush	proc	near
	cmp	dosnum,0		; < 2.0 ?
	jne	dopus1			; no, go on
	mov	dx,offset erms34
	mov	ah,prstr
	int	dos
	jmp	rskp
dopus1:	mov	ah,cmcfm
	call	comnd
	 jmp	r
fpush:	mov	si,offset cmspbuf	; name of parser
	push	si			; save beginning
	sub	cx,cx			; initial length
dopus2:	lodsb
	inc	cx			; count this
	or	al,al			; at end?
	jnz	dopus2			; no, keep going
	pop	si			; restore cmd
	dec	cx			; this is incremented one over
	jmp	short crun		; go run it
dopush	endp

; crun - run an arbitrary program.  Enter with si/address of whole
; cmd, cx/length of cmd.
CRUN	proc	near
	push cx			; save length of cmd
	mov ax,ds
	mov es,ax		; address dest segment
	mov di,offset nambuf
	rep movsb		; copy command so we can mess with it
	pop cx
	mov si,offset nambuf	; point to command
	jmp short run3		; and join run code
CRUN	ENDP

RUN	PROC	NEAR
	cmp dosnum,0
	jne run1
	mov ah,prstr
	mov dx,offset erms34	; Complain.
	int dos
	jmp rskp
run1:	mov ah,cmtxt		; Get program name.
	mov bx,offset nambuf	; Convenient buffer.
	mov dx,offset filmsg	; In case user wants help.
	call comnd
	 nop
	 nop
	 nop
	cmp ah,0
	jne run2
	mov ah,prstr
	mov dx,offset erms35
	int dos
	jmp rskp
run2:	mov cl,ah
	mov ch,0
	mov si,offset nambuf

; alternate entry if cmd is already known.  Source cmd ptr in si
; is trashed.
run3:	mov bx,cx
	mov byte ptr [si+bx],cr	; end string with a cr for dos.
	mov di,offset cmdnam
	mov ax,ds
	mov es,ax
run4:	lodsb
	cmp al,' '
	jne run5
	dec si			; back up over space
	jmp short run6		; and exit loop
run5:	stosb
	loop run4
run6:	mov byte ptr [di],0	; terminate string
	dec si			; point back a byte into argument
	mov [si],cl		; put length of argument here
	mov exearg+2,si		; pointer to argument string
	mov exearg+4,ds		; segment of same
	inc si			; pass length over
	mov al,1		; scan leading separators
	mov di,offset exefcb	; parse into this fcb
	mov ah,prsfcb
	int dos			; go parse the fcb
	mov al,1		; scan leading separators
	mov di,offset exefcb2	; second fcb to fill
	mov ah,prsfcb
	int dos			; parse the fcb
	mov es,psp		; point to psp again
	mov ax,es:[env]		; get environment ptr
	mov exearg,ax		; put into argument block
	mov bx,offset stk + 15	; end of pgm
	mov cl,4
	shr bx,cl		; compute # of paragraphs in last segment
	mov ax,seg stack	; end of kermit
	sub ax,psp		; minus beginning...
	add bx,ax		; # of paragraphs occupied
	mov ah,setblk
	int dos
	jc run7			; nope...
	mov ax,ds
	mov es,ax		; put es segment back
	mov ax,offset cmdnam	; point to cmd name again
	call spath		; look for it
	jc run8			; not found, go complain
	mov dx,ax		; point to command name
	mov al,0		; load and execute...
	mov ah,exec
	mov bx,offset exearg	; and to arguments
	mov ssave,sp		; save stack ptr
	int dos			; go run the program
	mov ax,seg datas
	mov ds,ax		; reset data segment
	mov ax,seg stack
	mov ss,ax		; and stack segment
	mov sp,ssave		; restore stack ptr
	mov ah,setdma
	mov dx,offset buff
	pushf			; save flags
	int dos			; restore dma address!!
	popf			; recover flags
	jc run8			; error, handle.
	jmp rskp		; ok, return
run7:	mov ah,prstr
	mov dx,offset erms36
	int dos
	jmp rskp
run8:	mov ah,prstr
	mov dx,offset erms37
	int dos
	jmp rskp
RUN	ENDP

; the show command
showcmd	proc	near
	mov	ah,cmkey
	mov	dx,offset shotab
	xor	bx,bx			; no canned help
	call	comnd
	 jmp	r
	call	bx			; call the handler
	 jmp	r
	jmp	rskp			; and return
showcmd	endp

intbrk:	cmp flags.debug,1	; Debug mode?
	je intb1		; Yes, then don't ignore the ^C.
	push ax
	push ds
	mov ax,seg datas
	mov ds,ax
	mov flags.cxzflg,'C'	; Say we saw a ^C.
	mov pack.state,'A'	; Set the state to abort.
	pop ds
	pop ax
	iret
intb1:	jmp in3ad		; Original break interrupt address.

NOUT2 	PROC	NEAR
	push ax
	push dx
	mov temp,10		; Divide quotient by 10.
	cwd			; Convert word to doubleword.
	div temp		; AX <-- Quo, DX <-- Rem.
	cmp ax,0		; Are we done?	
	jz nout0		; Yes.
	call nout2		; If not, then recurse.
nout0:	add dl,'0'		; Make it printable.
	mov temp,ax
	mov al,dl
	stosb
	mov ax,temp
	pop dx
	pop ax
	ret			; We're done. [21c]
NOUT2	ENDP

NOUT2X 	PROC	NEAR
	push ax
	push dx
	push cx
	mov temp,10		; Divide quotient by 10.
	div temp		; AX <-- Quo, DX <-- Rem.
	mov cx,dx		; Remember the remainder.
	cmp ax,0		; Are we done?	
	jz nout0x		; Yes.
	mov dx,0
	call nout2		; If not, then recurse.
nout0x:	add cl,'0'		; Make it printable.
	mov temp,ax
	mov al,cl
	stosb
	mov ax,temp
	pop cx
	pop dx
	pop ax
	ret			; We're done. [21c]
NOUT2X	ENDP

SPATH	proc	near
; enter with ax/ ptr to file name.  Searches path for given file,
; returns with ax/ ptr to whole name, or carry on if file isn't
; to be found.
	push	es
	mov	bx,ds
	mov	es,bx			; address data segment
	mov	bx,ax			; convenient place to keep this
	call	isfile			; does it exist as it is?
	mov	ax,bx			; ifso, just return original name
	jc	spath0			; nope...
	pop	es
	ret
spath0:	mov	si,ax
	mov	di,offset tfile		; place to copy to
	mov	dl,0			; no '\' seen yet
spath1:	lodsb
	stosb
	cmp	al,'/'			; contain path characters?
	je	spath1a
	cmp	al,'\'
	jne	spath2			; no, keep going
spath1a:mov	dl,1			; remember we've seen them
spath2:	or	al,al
	jnz	spath1			; copy name in
	or	dl,dl			; look at flag
	jnz	spath3			; path embedded, file not there, fail
; no path, keep going
spath3:	mov	si,offset pthbuf	; path definition
	cmp	byte ptr [si],0		; empty path?
	jne	spath4			; no, keep going
	mov	ah,gcd			; get current dir
	mov	dl,0			; for default drive
	mov	si,offset defpth+1	; place to put it
	int	dos
	mov	si,offset defpth	; point to the path
spath4:	cmp	byte ptr [si],0		; null, exit loop
	je	spath9
	mov	di,offset tfile		; place to put name
spath5:	lodsb				; get a byte
	cmp	al,';'			; end of this part?
	je	spath7			; yes, break loop
	cmp	al,0			; maybe end of string?
	jne	spath6			; no, keep going
	dec	si			; back up over it
	jmp	short spath7		; and break loop
spath6:	stosb				; else stick in dest string
	jmp	spath5			; and continue
spath7:	push	si			; save this ptr
	mov	si,bx			; this is user's file name
	cmp	byte ptr [di-1],'/'	; does it end with switch char?
	je	spath8			; yes, don't put one in
	mov	al,'\'			; how about this one?
	cmp	byte ptr [di-1],al
	je	spath8			; yes, don't put it in.
	stosb				; else add one
spath8:	lodsb
	stosb
	or	al,al
	jnz	spath8			; copy rest of name
	pop	si			; restore pos in path def
	mov	ax,offset tfile
	call	isfile			; is it a file?
	jc	spath4			; no, keep looking
	mov	ax,offset tfile
	pop	es
	ret				; return success (carry off)
spath9:	pop	es			; restore this
	stc				; no file found
	ret
spath	endp


isfile	proc	near
; returns carry off if the file pointed to by ax exists
	mov	dx,ax			; copy ptr
	mov	al,0			; don't change anything
	mov	ah,chmod
	int	dos
	ret				; dos sets carry
isfile	endp

; Jumping to this location is like retskp.  It assumes the instruction
;   after the call is a jmp addr.
 
RSKP	PROC	NEAR
	pop bp
	add bp,3
	push bp
	ret

RSKP	ENDP
 
; Jumping here is the same as a ret.
 
R	PROC	NEAR
	ret
R	ENDP
 
code 	ends			; End of code section.
	end	start
```
{% endraw %}

## MSRECV.ASM

{% raw %}
```
	public	read12, read2, rin21, rfile3, read, updrtr, nak, rrinit
	include msdefs.h	

datas 	segment	public 'datas'
	extrn	fcb:byte, data:byte, bufpnt:word, chrcnt:word, curchk:byte
	extrn	comand:byte, flags:byte, pack:byte, trans:byte

ermes7  db      '?Unable to receive initiate$'
ermes8  db      '?Unable to receive file name$'
ermes9  db      '?Unable to receive end of file$'
erms10  db      '?Unable to receive data$'
infms1  db	cr,'           Receiving: In progress$'
infms3  db      'Completed$'
infms4  db      'Failed$'
infms6  db      'Interrupted$'
remmsg1	db	'Kermit-MS: Invalid filename'
filhlp2 db      ' Confirm with carriage return or specify name '
	db	' to use for incoming file $'
ender	db	bell,bell,'$'
crlf	db	cr,lf,'$'
temp	dw	0
filopn	db	0		; Says if disk file is open.
datas	ends

code	segment	public
	extrn	gofil:near, outbuf:near, fixfcb:near, comnd:near
	extrn	spack:near, rpack:near, serini:near, serrst:near
	extrn	spar:near, rpar:near, init:near, init1:near, cxmsg:near
	extrn	error:near, ptchr:near, erpos:near, rtpos:near
	extrn	stpos:near, rprpos:near, nppos:near, nout:near
	extrn	dodec:near, doenc:near, errpack:near
	extrn	send11:near, clrmod:near
	assume  cs:code, ds:datas

 
; Update retry count and fall through to send a NAK.
nak0:	call updrtr		; Update retry count.

nak:	mov ax,pack.pktnum     ; Get the packet number we're waiting for.
        mov pack.argblk,ax
        mov pack.argbk1,0
	mov cx,0		; No data, but this may change.
	call doenc		; So call encode.
        mov ah,'N'              ; NAK that packet.
        call spack
	 jmp abort
	 nop			; So 'jmp rskp' in SPACK comes here. [19a]
        ret                     ; Go around again.

updrtr:	cmp pack.state,'A'	; Supposed to abort?
	je upd0			; Yes, don't bother with retry count.
	inc pack.numrtr		; Increment the number of retries.
	cmp flags.xflg,1	; Writing to screen?
	je upd0
	call rtpos		; Position cursor.
	mov ax,pack.numrtr
	call nout		; Write the number of retries.
upd0:	ret

;       Abort
ABORT   PROC    NEAR
	cmp filopn,0		; Disk file open?
	je abort0		; No so don't close.
	cmp flags.xflg,1	; Writing to the screen?
	je abort0		; Yes, don't close "file".
	mov ah,closf		; Close the file and ignore errors.
	mov dx,offset fcb
	int dos
abort0:	mov pack.state,'A'      ; Otherwise abort.
        ret
ABORT   ENDP

; init variables for read...
rrinit	proc	near
	mov pack.numpkt,0	; Set the number of packets to zero.
	mov pack.numrtr,0	; Set the number of retries to zero.
	mov pack.pktnum,0	; Set the packet number to zero.
	mov pack.numtry,0	; Set the number of tries to zero.
	ret
rrinit	endp

;	RECEIVE command  --  Some code moved to the GET routine. [21a] 
 
READ	PROC	NEAR		
	mov comand.cmrflg,1	; Say we're receiving a file. [21a start]
	mov comand.cmcr,1	; Allow bare CR after RECEIVE.
	mov flags.droflg,0	; Override default drive flag.
	mov flags.nmoflg,0	; Override file name from other host?
	mov dx,offset fcb	; Put filename here. 
	mov bx,offset filhlp2	; Text of help message.
	mov ah,cmifi		; Read in the filename.
	call comnd		
	 jmp r				
	mov comand.cmrflg,0	; Reset flag.
	mov comand.cmcr,0
	mov flags.wldflg,0	; Just in case
	mov ah,cmcfm		; Get a confirm.
	call comnd
	 jmp r
read1:	cmp flags.remflg,0	; remote mode?
	jne read12		; yes, no printing
	cmp flags.destflg,2	; Receiving to the screen? [27c]
	je read12		; Yes no printing [27c]
	call init
read12:	mov flags.cxzflg,0	; Reset ^X/^Z flag. [20c] 
	call rrinit		; init variables for read
	call serini		; Initialize serial port. [14]
	cmp flags.remflg,0	; in remote mode?
	jne read12a		; yes, no printing
	call init1		; Clear the line and initialize the buffers.
	cmp flags.destflg,2	; Receiving to the screen? [27c]
	je read12a		; Yes no printing [27c]
	call stpos
	mov ah,prstr		; Be informative.
	mov dx,offset infms1
	int dos
	call rtpos		; Position cursor.
	mov ax,pack.numrtr
	call nout		; Write the number of retries.
read12a:mov pack.state,'R'	; Set the state to receive initiate.
read2: 	cmp flags.xflg,1	; Are we receiving to the screen. [21c]
	je read21		; Skip the screen stuff. [21c]
	cmp flags.remflg,0	; maybe remote mode?
	jne read21		; yup, skip the screen stuff
	call nppos		; Position cursor for number of packets msg.
	mov ax,pack.numpkt
	call nout		; Write the number of packets.
read21: mov ah,pack.state	; Get the state. [21c]
	cmp ah,'D'		; Are we in the data send state?
	jne read3
	call rdata
	jmp read2
read3:  cmp ah,'F'		; Are we in the file receive state?
	jne read4
	call rfile		; Call receive file.
	jmp read2
read4:  cmp ah,'R'		; Are we in the receive initiate state?
	jne read5
	call rinit
	jmp read2
read5:  cmp ah,'C'		; Are we in the receive complete state?
	jne read6
	call serrst		; Reset serial port. [14]
	cmp flags.xflg,0	; Did we write to the screen? [21c]
	je read51		; No so print status. [21c]
	cmp flags.destflg,2	; Receiving to screen? [27c]
	je read51a		; Yes don't reset. [27c]
	mov flags.xflg,0	; Reset it. [21c]
	jmp rskp		; Yes, so just return. [21c]	
read51:	cmp flags.remflg,0	; remote mode?
	jne read51a		; yes, keep going
	call stpos		; Position cursor. [21c]
	mov ah,prstr
	mov dx,offset infms3	; Plus a little cuteness.
	cmp flags.cxzflg,0	; Completed or interrupted? [20c]
	je read13		; Ended normally. [20c]
	mov dx,offset infms6	; Say was interrupted. [20c]
read13: int dos
	cmp flags.belflg,0	; Bell desired?  [17a]
	je readnb		; No.  [17a]
	mov dx,offset ender	; Ring them bells.    [4]
	int dos			; [4]
readnb:	call clrmod		; clear 25th line
	call rprpos		; Put prompt here.
read51a:jmp rskp
read6: 	call serrst		; Reset serial port. [14]
	cmp flags.xflg,0	; Did we write out to screen? [21c]
	je read61		; No so print status. [21c]
	cmp flags.destflg,2	; Receiving to screen? [27c]
	je read7a		; Yes don't reset. [27c]
	mov flags.xflg,0	; Reset it. [21c]
	jmp rskp		; Print onto screen. [21c]
read61:	cmp flags.remflg,0	; remote mode?
	jne read7a		; yes, no printing.
	call stpos		; Position cursor.  [21c]
	mov ah,prstr
	mov dx,offset infms4	; Plus a little cuteness.
	int dos
	cmp flags.belflg,0	; Bell desired?  [17a]
	je read7		; No.  [17a]
	mov dx,offset ender	; Ring them bells.   [4]
	int dos			;  [4]
read7:	call clrmod		; clear mode line
	call rprpos		; Put prompt here.
read7a:	jmp rskp
READ	ENDP
 
 
;	Receive routines
 
;	Receive init
 
RINIT	PROC	NEAR
	mov ah,pack.numtry	; Get the number of tries.
	cmp ah,imxtry		; Have we reached the maximum number of tries?
	jl rinit2
	call erpos		; Position cursor.
	mov dx,offset ermes7
	mov ah,prstr
	int dos			; Print an error message.
	mov bx,dx
	call errpack		; Send error packet just in case.
	jmp abort		; Change the state to abort.
rinit2: inc ah			; Increment it.
	mov pack.numtry,ah	; Save the updated number of tries.
	mov ax,pack.argbk2	; get packet type if here from get
	cmp flags.getflg,1	; Have we already read in the packet? [21a] 
	je rin21a		; Yes, so don't call RPACK. [21a]
	mov ah,trans.chklen
	mov curchk,ah		; Save checksum length we want to use.
	mov trans.chklen,1	; Use 1 char for init packet.
	call rpack		; Get a packet.
	 jmp rin22		; Trashed packet: nak, retry.
	push ax
	mov ah,curchk
	mov trans.chklen,ah	; Reset to desired value.
	pop ax
rin21a:	cmp ah,'S'		; Is it a send initiate packet?
	jne rinit3		; If not see if its an error.
rin21:	mov flags.getflg,0	; Reset flag. [21a]
	mov ah,pack.numtry	; Get the number of tries.
	mov pack.oldtry,ah	; Save it.
	mov pack.numtry,0	; Reset the number of tries.
	mov ax,pack.argblk	; Returned packet number.  (Synchronize them.)
	inc ax			; Increment it.
	and ax,3FH		; Turn off the two high order bits.
	mov pack.pktnum,ax	; Save modulo 64 of the number.
	mov bx,pack.numpkt
	inc bx			; Increment the number of packets.
	mov pack.numpkt,bx
	mov ax,pack.argbk1	; Get the number of arguments received.
	mov bx,offset data	; Get a pointer to the data.
	call spar		; Get the data into the proper variables.
	mov bx,offset data	; Get a pointer to our data block.
	call rpar		; Set up the receive parameters.
	xchg ah,al
	mov ah,0
	mov pack.argbk1,ax	; Store the returned number of arguments.
	mov ah,trans.chklen	; Checksum length we'll use.
	mov curchk,ah		; Save it.
	mov trans.chklen,1	; Use 1 char for init packet.
	mov ah,'Y'		; Acknowledge packet.
	call spack		; Send the packet.
	 jmp abort
	mov ah,curchk		; Checksum length we'll use.
	mov trans.chklen,ah	; Reset to desired value.
	mov ah,'F'		; Set the state to file send.
	mov pack.state,ah
	ret
rin22:	mov ah,curchk
	mov trans.chklen,ah	; Reset to desired value.
	jmp nak0		; Try again.
rinit3: cmp ah,'E'		; Is it an error packet?
	jne rinit4
	call error
rinit4:	jmp abort
RINIT	ENDP
 

;	Receive file
 
RFILE	PROC	NEAR
	cmp pack.numtry,maxtry	; Have we reached the maximum number of tries?
	jl rfile1
	call erpos		; Position cursor.
	mov dx,offset ermes8
	mov ah,prstr
	int dos			; Print an error message.
	mov bx,dx
	call errpack		; Send error packet just in case.
	jmp abort		; Change the state to abort.
rfile1: inc pack.numtry		; Save the updated number of tries.
	call rpack		; Get a packet.
	 jmp nak0		;  Trashed packet: nak, retry.
	cmp ah,'S'		; Is it a send initiate packet?
	je rfil10
	call dodec		; Decode all incoming packets.
	jmp rfile2		;  No, try next type.
rfil10:	cmp pack.oldtry,imxtry	; Have we reached the maximum number of tries?
	jl rfil12		; If not proceed.
	call erpos		; Position cursor.
	mov dx,offset ermes7
	mov ah,prstr
	int dos			; Print an error message.
	mov bx,dx
	call errpack		; Send error packet just in case.
	jmp abort		; Change the state to abort.
rfil12: inc pack.oldtry		; Save the updated number of tries.
	mov ax,pack.pktnum	; Get the present packet number.
	cmp ax,0		; Had we wrapped around? [18 start]
	jne rfilx 
	mov ax,64
rfilx:  dec ax			; Decrement.  [18 end -- new label]
	cmp ax,pack.argblk	; Is the packet's number one less than now?
	je rfil13
	jmp nak0		; No, NAK and try again.
rfil13: call updrtr		; Update retry count.
	mov pack.numtry,0	; Reset the number of tries.
	mov bx,offset data	; Get a pointer to our data block.
	call rpar		; Set up the parameter information.
	xchg ah,al
	mov ah,0
	mov pack.argbk1,ax	; Save the number of arguments.
	mov ah,'Y'		; Acknowledge packet.
	call spack		; Send the packet.
	 jmp abort
	ret
rfile2: cmp ah,'Z'		; Is it an EOF packet?
	jne rfile3		;  No, try next type.
	cmp pack.oldtry,maxtry	; Have we reached the maximum number of tries?
	jl rfil21		; If not proceed.
	call erpos		; Position cursor.
	mov dx,offset ermes9
	mov ah,prstr
	int dos			; Print an error message.
	mov bx,dx
	call errpack		; Send error packet just in case.
	jmp abort		; Change the state to abort.
rfil21: inc pack.oldtry		; Increment it.
	mov ax,pack.pktnum	; Get the present packet number.
	cmp ax,0		; Had we wrapped around? [18 start]
	jne rfily
	mov ax,64
rfily:  dec ax			; Decrement.  [18 end -- new label]
	cmp ax,pack.argblk	; Is the packet's number one less than now?
	je rfil24
	jmp nak0		; No, NAK and try again.
rfil24: call updrtr		; Update retry count.
	mov pack.numtry,0
	mov pack.argbk1,0	; No data.  (The packet number is in argblk.)
	mov cx,0
	call doenc
	mov ah,'Y'		; Acknowledge packet.
	call spack		; Send the packet.
	 jmp abort
	ret
rfile3: cmp ah,'F'		; Start of file?
	je rfil31		; Yes. [21c]
	cmp ah,'X'		; Text header packet? [21c]
	jne rfile4		; Neither one. 
rfil31: mov ax,pack.argblk	; Get the packet number. [21c]
	cmp ax,pack.pktnum	; Is it the right packet number?
	je rfil32
	jmp nak			; No, NAK it and try again.
rfil32: inc ax			; Increment the packet number.
	and ax,3FH		; Turn off the two high order bits.
	mov pack.pktnum,ax	; Save modulo 64 of the number.
	inc pack.numpkt		; Increment the number of packets.
	call gofil		; Get a file to write to.
	 jmp abort
	mov filopn,1		; Disk file open.
	call init1		; Initialize all the buffers.
	mov ah,pack.numtry	; Get the number of tries.
	mov pack.oldtry,ah	; Save it.
	mov pack.numtry,0	; Reset the number of tries.
	mov pack.argbk1,0	; No data.  (The packet number is in argblk.)
	mov cx,0
	call doenc
	mov ah,'Y'		; Acknowledge packet.
	call spack		; Send the packet.
	 jmp abort
	mov pack.state,'D'	; Set the state to data receive.
	ret
rfile4: cmp ah,'B'		; End of transmission.
	jne rfile5
	mov ax,pack.pktnum
	cmp ax,pack.argblk	; Do we match?
	je rfil41
	jmp nak			; No, NAK it and try again.
rfil41: mov pack.argbk1,0	; No data.  (Packet number already in argblk).
	mov cx,0
	call doenc
	mov ah,'Y'		; Acknowledge packet.
	call spack		; Send the packet.
	 jmp abort
	mov pack.state,'C'	; Set the state to complete.
	ret
rfile5: cmp ah,'E'		; Is it an error packet.
	jne rfile6
	call error
rfile6: jmp abort
RFILE	ENDP
 
 
;	Receive data
 
RDATA	PROC	NEAR
	cmp pack.numtry,maxtry	; Get the number of tries.
	jl rdata1
	call erpos		; Position cursor.
	mov dx,offset erms10
	mov ah,prstr
	int dos			; Print an error message.
	mov bx,dx
	call errpack		; Send error packet just in case.
	jmp abort		; Change the state to abort.
rdata1: inc pack.numtry		; Save the updated number of tries.
	call rpack		; Get a packet.
	 jmp nak0		;  Trashed packet: nak, retry.
	cmp ah,'D'		; Is it a data packet?
	je rdat11
	call dodec		; Decode data.
	jmp rdata2		;  No, try next type.
rdat11: mov ax,pack.pktnum	; Get the present packet number.
	cmp ax,pack.argblk	; Is the packet's number correct?
	jz rdat14
	cmp pack.oldtry,maxtry	; Have we reached the maximum number of tries?
	jl rdat12		; If not proceed.
	call erpos		; Position cursor.
	mov dx,offset erms10
	mov ah,prstr
	int dos			; Print an error message.
	mov bx,dx
	call errpack		; Send error packet just in case.
	jmp abort		; Change the state to abort.
rdat12: inc pack.oldtry		; Save the updated number of tries.
	mov ax,pack.pktnum
	cmp ax,0		; Had we wrapped around? [18 start]
	jne rdatx
	mov ax,64
rdatx:	dec ax			; [14] [18 end -- new label]
	cmp ax,pack.argblk	; Is the packet's number one less than now?
	je rdat13
	jmp nak0		; No, NAK it and try again.
rdat13: call updrtr		; Update retry count.
	mov pack.numtry,0	; Reset number of tries.
	mov pack.argbk1,0	; No data.  (The packet number is in argblk.)
	mov cx,0
	call doenc
	mov ah,'Y'		; Acknowledge packet.
	call spack		; Send the packet.
	 jmp abort
	ret
rdat14: inc ax			; Increment the packet number.
	and ax,3FH		; Turn off the two high order bits.
	mov pack.pktnum,ax	; Save modulo 64 of the number.
	inc pack.numpkt		; Increment the number of packets.
	mov ah,pack.numtry	; Get the number of tries.
	mov pack.oldtry,ah	; Save it.
	mov ax,pack.argbk1	; Get the length of the data.
	cmp flags.cxzflg,0	; Has the user typed a ^X or ^Z? [20c]
	je rdt14x		; No, write out the data.
	cmp flags.abfflg,1	; Discard incomplete files?
	je rdat15		; If yes don't write data out to file. [20c]
rdt14x:	mov bx,offset data	; Where the data is. [25]
	call ptchr
	 jmp abort		;  Unable to write out chars; abort.
rdat15: mov pack.numtry,0	; Reset the number of tries.
	mov pack.argbk1,0	; No data.  (Packet number still in argblk.)
	mov cx,0
	cmp flags.cxzflg,0	; Interrupt file transfer? [20c]
	je rdat16		; Nope. [20c] 
	mov bx,offset data	; Send data in ACK in case remote... [20c] 
	mov ah,flags.cxzflg	; ... knows about ^X/^Z. [20c]
	mov [bx],ah		; Put data into the packet. [20c]
	mov pack.argbk1,1	; Set data size to 1. [20c]
	mov cx,1
rdat16: call doenc
	mov ah,'Y'		; Acknowledge packet.
	call spack		; Send the packet.
	 jmp abort
	ret
rdata2: cmp ah,'F'		; Start of file?
	je rdat20		; Yup. [21c]
	cmp ah,'X'		; Text header packet? [21c]
	jne rdata3		;  No, try next type.
rdat20: cmp pack.oldtry,maxtry	; Reached the max number of tries? [21c]
	jl rdat21		; If not proceed.
	call erpos		; Position cursor.
	mov dx,offset ermes8
	mov ah,prstr
	int dos			; Print an error message.
	mov bx,dx
	call errpack		; Send error packet just in case.
	jmp abort		; Change the state to abort.
rdat21: inc pack.oldtry		; Save the updated number of tries.
	mov ax,pack.pktnum
	cmp ax,0		; Had we wrapped around? [18 start]
	jne rdaty
	mov ax,64
rdaty:	dec ax			; [14 Omitted accidentally - D.T.] [18 end]
	cmp ax,pack.argblk	; Is the packet's number one less than now?
	je rdat22
	jmp nak0		; No, NAK it and try again.
rdat22: call updrtr		; Update retry count.
	mov pack.numtry,0	; Reset number of tries.
	mov pack.argbk1,0	; No data.  (The packet number is in argblk.)
	mov cx,0
	call doenc
	mov ah,'Y'		; Acknowledge packet.
	call spack		; Send the packet.
	 jmp abort
	ret
rdata3: cmp ah,'Z'		; Is it a EOF packet?
	je rdat3x		; [13]
	jmp rdata4		; Try and see if its an error. [13]
rdat3x: mov ax,pack.pktnum	; Get the present packet number. [13]
	cmp ax,pack.argblk	; Is the packet's number correct?
	je rdat32
	jmp nak0		; No, NAK it and try again.
rdat32: inc ax			; Increment the packet number.
	and ax,3FH		; Turn off the two high order bits.
	mov pack.pktnum,ax	; Save modulo 64 of the number.
	inc pack.numpkt
	cmp flags.cxzflg,0	; Do we want to discard the file? [20c]
	jne rdt32x		; Yes. [20c]
	cmp pack.argbk1,1	; One piece of data? [20c]
	jne rdat33		; Nope - finish writing out file? [20c]
	mov bx,offset data	; Get data area. [20c]
	mov ah,[bx]		; Get the data. [20c]
	cmp ah,'D'		; "D" for discard? [20c]
	jne rdat33		; Nope - write out file. [20c]
rdt32x:	cmp flags.abfflg,0	; Keep incomplete files?
	je rdat33		; Yes, go write it out.
	cmp flags.xflg,1	; Writing to the screen?
	je rdt32y		; Don't close "file".
	mov ah,closf		; First, close the file.
	mov dx,offset fcb	; Give the file parameters. [20c]
	int dos			; Kill it, ignore errors. [20c]
	mov ah,delf		; Delete the file if opened. [20c]
	int dos
rdt32y:	cmp flags.cxzflg,'X'	; Kill one file or all? [20c]
	jne rdat36		; No so leave flag alone. [20c]
	call cxmsg		; Clear msg about interrupt. [20c]
	mov flags.cxzflg,0	; Reset - ^X only kills one file. [20c]
	jmp rdat36
rdat33: mov bx,bufpnt		; Get the dma pointer.
	mov ax,80H
	sub ax,chrcnt		; Get the number of chars left in the DMA.
	cmp flags.destflg,0	; Add ^Z if writing to printer.
	je rdt33x
	cmp flags.eofcz,0	; should we write a ^Z?
	jz rdat35		; no, keep going
	cmp flags.xflg,0	; writing to a file?
	jne rdat35		; no, skip ^Z
rdt33x:	cmp ax,80H		;   [13 start]
	jne rdat34
	call outbuf		; Write out buffer if no room for ^Z.
	 jmp abort
	mov ax,0		;   [13 end]
	inc chrcnt		; Increment size by one (not two). [21b]
rdat34: mov cl,'Z'-100O		; Put in a ^Z for EOF.
	mov [bx],cl		; Add it. [21c]
	inc ax
	dec chrcnt
rdat35:	mov cx,chrcnt
	mov temp,cx
	call outbuf		; Output the last buffer.
	 jmp abort		; Give up if the disk is full.
	mov ax,temp		; Prepare for the function call.
	call fixfcb
	cmp flags.xflg,1	; Writing to the screen?
	je rdat37		; Yes, don't close "file".
	mov ah,closf		; Close up the file.
	mov dx,offset fcb
	int dos
rdat36:	cmp flags.destflg,1	; Writing to disk?
	je rdat37		; Yes, skip next part.
	cmp flags.xflg,1	; Writing to screen?
	je rdat37		; Yes, skip this part.
	mov dl,ff		; Send a form feed.
	mov ah,lstout		; Write out to first printer.
	int dos
rdat37:	mov ah,pack.numtry	; Get the number of tries.
	mov pack.oldtry,ah	; Save it.
	mov pack.numtry,0	; Reset the number of tries.
	mov pack.argbk1,0	; No data.  (The packet number is in argblk.)
	mov cx,0
	call doenc
	mov ah,'Y'		; Acknowledge packet.
	call spack		; Send the packet.
	 jmp abort
	mov pack.state,'F'
	mov filopn,0		; File closed now.
	ret
rdata4: cmp ah,'E'			; Is it an error packet.
	jne rdata5
	call error
rdata5: jmp abort
RDATA	ENDP

 
; Jumping to this location is like retskp.  It assumes the instruction
;   after the call is a jmp addr.
 
RSKP    PROC    NEAR
	pop bp
	add bp,3
	push bp
        ret
RSKP    ENDP

R	PROC	NEAR
	ret
R	ENDP

code	ends 
	end
 
```
{% endraw %}

## MSSEND.ASM

{% raw %}
```
	public	spar, rpar, error, error1, nout, send, flags, trans, pack
	public	dodec, doenc, curchk, inichk, packlen, send11
	include msdefs.h	

spmin	equ	20		; Minimum packet size.
spmax	equ	94		; Maximum packet size.

datas 	segment	public 'datas'
	extrn	buff:byte, data:byte, fcb:byte, cpfcb:byte, filbuf:byte
	extrn	decbuf:byte, chrcnt:word, bufpnt:word, comand:byte
	extrn	rptq:byte, origr:byte, rptct:byte, rptval:byte

flags	flginfo	<>
trans	trinfo	<>
pack	pktinfo <>
crlf	db	cr,lf,'$'
ender	db	bell,bell,'$' 			;  [4]
erms14  db	'?Unable to receive an acknowledgment from the host$'
erms15  db	'?Unable to find file$'
erms20	db	'Unable to send init packet$'
erms21	db	'Unable to send file header$'
erms22	db	'Unable to send data$'
erms23	db	'Unable to send end-of-file packet$'
erms24	db	'Unable to send break packet$'
infms2  db	cr,'             Sending: In progress$'
infms3  db	'Completed$'
infms4  db	'Failed$'
infms6  db	'Interrupted$'
infms7	db	cr,' Percent transferred: 100%$'
remmsg1	db	'Kermit-MS: File not found$'
filhlp  db      ' Input file spec (possibly wild) $'
filmsg	db	' File name to use on target system or confirm with'
	db	' a carriage return $'

curchk	db	0		; Use to store checksum length.
inichk	db	1		; Original or set checksum length.
chrptr  dw	?		; Position in character buffer.
fcbpt	dw	?		; Position in FCB.
datptr  dw	?		; Position in packet data buffer.
siz	dw	?		; Size of data from gtchr.
temp	dw	0
temp4	dw	0
sendas	dw	50 dup(0)	; Buffer for file name.
difnam	db	0		; Send under different name?
difsiz	db	0		; Size of new file name.
asmsg	db	'  as  $'
filopn	db	0		; Says if disk file is open.
datas	ends

code	segment	public
	extrn serini:near, serrst:near, comnd:near, init:near
	extrn spack:near, rpack:near, gtnfil:near, gtchr:near
	extrn getfil:near, clrfln:near, nppos:near, rprpos:near
	extrn erpos:near, rtpos:near, cxmsg:near, stpos:near
	extrn encode:near, nulref:near, decode:near, nulr:near
	extrn errpack:near, updrtr:near, clrmod:near, fcbcpy:near
	extrn perpos:near
	assume	cs:code,ds:datas

;	This routine sets up the data for init packet (either the
;	Send_init or ACK packet).
 
RPAR	PROC	NEAR
	mov ah,trans.rpsiz	; Get the receive packet size.
	add ah,' '		; Add a space to make it printable.
	mov [bx],ah		; Put it in the packet.
	mov ah,trans.rtime	; Get the receive packet time out.
	add ah,' '		; Add a space.
	mov 1[bx],ah		; Put it in the packet.
	mov ah,trans.rpad	; Get the number of padding chars.
	add ah,' '
	mov 2[bx],ah		; Put it in the packet.
	mov ah,trans.rpadch	; Get the padding char.
	add ah,100O		; Uncontrol it.
	and ah,7FH
	mov 3[bx],ah		; Put it in the packet.
	mov ah,trans.reol	; Get the EOL char.
	add ah,' '
	mov 4[bx],ah		; Put it in the packet.
	mov ah,trans.rquote	; Get the quote char.
	mov 5[bx],ah		; Put it in the packet.
	mov ah,trans.ebquot	; Get 8-bit quote char. [21b]
	mov 6[bx],ah		; Add it to the packet. [21b] 
	mov ah,trans.chklen	; Length of checksum.
	add ah,48		; Make into a real digit.
	mov 7[bx],ah
	mov ah,rptq		; Repeat quote char.
	cmp ah,0		; Null means no.
	jne rpar0
	mov ah,' '		; Send a blank instead.
rpar0:	mov 8[bx],ah
	mov ah,09H		; Nine pieces of data.
	ret
RPAR	ENDP
 
;	This routine reads in all the send_init packet information.
 
SPAR	PROC	NEAR
	cmp ax,1
	jge sparx
	mov ah,dspsiz		; Data not supplied by host, use default.
	jmp sparx2
sparx:	mov temp4,ax		; Save the number of arguments.
	mov ah,trans.spsiz
	cmp ah,dspsiz		; Is current value the default?
	jne sparx2		; No, assume changed by user.
	mov ah,[bx]		; Get the max packet size.
	sub ah,' '		; Subtract a space.
	cmp ah,spmin		; Can't be below the minimum.
	jge sparx1
	mov ah,spmin
	jmp sparx2
sparx1:	cmp ah,spmax		; Or above the maximum.
	jle sparx2
	mov ah,spmax
sparx2:	mov trans.spsiz,ah	; Save it.
	mov ax,temp4
	cmp al,2		; Fewer than two pieces?
	jge spar0
	mov ah,dstime		; Data not supplied by host, use default.
	jmp spar02
spar0: 	mov ah,trans.stime
	cmp ah,dstime		; Is current value the default?
	jne spar02		; No, assume changed by user.
	mov ah,1[bx]		; Get the timeout value.
	sub ah,' '		; Subtract a space.
	cmp ah,0
	ja spar01		; Must be non-negative.
	mov ah,0
spar01:	cmp ah,trans.rtime	; Same as other side's timeout.
	jne spar02
	add ah,5		; If so, make it a little different.
spar02:	mov trans.stime,ah	; Save it.
	mov ax,temp4
	cmp al,3		; Fewer than three pieces?
	jge spar1
	mov ah,dspad		; Data not supplied by host, use default.
	jmp spar11
spar1:	mov ah,trans.spad
	cmp ah,dspad		; Is current value the default?
	jne spar11		; No, assume changed by user.
	mov ah,2[bx]		; Get the number of padding chars.
	sub ah,' '
	cmp ah,0
	ja spar11		; Must be non-negative.
	mov ah,0
spar11:	mov trans.spad,ah
	mov ax,temp4
	cmp al,4		; Fewer than four pieces?
	jge spar2
	mov ah,dspadc		; Data not supplied by host, use default.
	jmp spar21
spar2:	mov ah,trans.spadch
	cmp ah,dspadc		; Is current value the default?
	jne spar21		; No, assume changed by user.
	mov ah,3[bx]		; Get the padding char.
	add ah,100O		; Re-controlify it.
	and ah,7FH
	cmp ah,del		; Delete?
	je spar21		; Yes, then it's OK.
	cmp ah,0
	jge spar20
	mov ah,0		; Below zero is no good.
	jmp spar21		; Use zero (null).
spar20:	cmp ah,31		; Is it a control char?
	jle spar21		; Yes, then OK.
	mov ah,0		; No, use null.
spar21:	mov trans.spadch,ah
	mov ax,temp4
	cmp al,5		; Fewer than five pieces?
	jge spar3
	mov ah,dseol		; Data not supplied by host, use default.
	jmp spar31
spar3:  mov ah,trans.seol
	cmp ah,dseol		; Is current value the default?
	jne spar31		; No, assume changed by user.
	mov ah,4[bx]		; Get the EOL char.
	sub ah,' '
	cmp ah,0
	jge spar30		; Cannot be negative.
	mov ah,cr		; If it is, use default of carriage return.
	jmp spar31
spar30:	cmp ah,31		; Is it a control char?
	jle spar31		; Yes, then use it.
	mov ah,cr		; Else, use the default.
spar31:	mov trans.seol,ah
	mov ax,temp4
	cmp al,6		; Fewer than six pieces?
	jge spar4
	mov ah,dsquot		; Data not supplied by host, use default.
	jmp spar41
spar4:	mov ah,trans.squote
	cmp ah,dsquot		; Is current value the default?
	jne spar41		; No, assume changed by user.
	mov ah,5[bx]		; Get the quote char.
	cmp ah,' '		; Less than a space?
	jge spar40
	mov ah,dsquot		; Yes, use default.
	jmp spar41
spar40:	cmp ah,'~'		; Must also be less then a tilde.
	jle spar41
	mov ah,dsquot		; Else, use default.
spar41:	mov trans.squote,ah
	cmp al,7		; Fewer than seven pieces? [21b begin]
	jge spar5
	mov trans.ebquot,'Y'	; Data not supplied by host, use default.
	jmp spar51
spar5:	mov ah,6[bx]		; Get other sides 8-bit quote request.
	call doquo		; And set quote char.  [21b end]
spar51:	cmp al,8		; Fewer than eight pieces?
	jge spar6
	mov trans.chklen,1
	jmp spar61
spar6:	mov ah,inichk
	mov trans.chklen,ah	; Checksum length we really want to use.
	mov ah,7[bx]		; Get other sides checksum length.
	call dochk		; Determine what size to use.
spar61:	cmp al,9		; Fewer than nine pieces?
	jge spar7
	mov rptq,0
	ret
spar7:	mov ah,8[bx]		; Get other sides repeat count prefix.
	mov ch,drpt
	mov rptq,0
	call dorpt
	ret
SPAR	ENDP
 
; Set 8-bit quote character based on my capabilities and the other
; Kermit's request.   [21b]

DOQUO	PROC	NEAR
	cmp trans.ebquot,'N'	; Can I do 8-bit quoting at all?
	je dq3			; No - so forget it.
	cmp trans.ebquot,'Y'	; Can I do it if requested?
	jne dq0			; No - it's a must that I do it.
	mov trans.ebquot,ah	; Do whatever he wants.
	jmp dq1
dq0:	cmp ah,'Y'		; I need quoting - can he do it?
	je dq1			; Yes - then all is settled.
	cmp ah,'N'		; No - then don't quote.
	je dq3
	cmp ah,trans.ebquot	; Both need quoting - chars must match.
	jne dq3
dq1:	mov ah,trans.ebquot
	cmp ah,'Y'		; If Y or N, don't validate prefix.
	je dq2
	cmp ah,'N'
	je dq2
	call prechk		; Is it in range 33-62, 96-126?
	 mov ah,'Y'		; Failed, don't do quoting.
	 nop
	cmp ah,trans.rquote	; Same prefix?
	je dq3			; Not allowed, so don't do quoting. 
	cmp ah,trans.squote	; Same prefix here?
	je dq3			; This is illegal too.
	mov trans.ebquot,ah	; Remember what we decided on.
dq2:	ret
dq3:	mov trans.ebquot,'N'	; Quoting will not be done.
	ret
DOQUO	ENDP
 
; Check if prefix in AH is in the proper range: 33-62, 96-126. 
; RSKP if so else RETURN.
prechk:	cmp ah,33
	jge prec0		; It's above 33.
	ret
prec0:	cmp ah,62
	jg prec1
	jmp rskp		; And below 62.  OK.
prec1:	cmp ah,96
	jge prec2		; It's above 96.
	ret
prec2:	cmp ah,126
	jg prec3
	jmp rskp		; And below 126.  OK.
prec3:	ret

; Set checksum length. 
dochk:	cmp ah,'1'		; Must be 1, 2, or 3.
	jl doc1
	cmp ah,'3'
	jle doc2
doc1:	mov ah,'1'
doc2:	sub ah,48		; Don't want it printable.
	cmp ah,trans.chklen	; Do we want the same thing?
	je dochk0		; Yes, then we're done.
	mov trans.chklen,1	; No, use single character checksum.
dochk0:	ret			; Just return for now.

; Set repeat count quote character.  The one used must be different than
; the control and eight-bit quote characters.  Also, both sides must 
; use the same character.
dorpt:	call prechk		; Is it in the valid range?
	 mov ah,0		; No, don't use their value. 
	 nop
	cmp ah,trans.squote	; Same as the control quote char?
	je dorpt0		; Yes, that's illegal, no repeats.
	cmp ah,trans.rquote	; How about this one?
	je dorpt0		; No good.
	cmp ah,trans.ebquot	; Same as eight bit quote char?
	je dorpt0		; Yes, that's illegal too, no repeats.
	cmp ah,ch		; Are we planning to use the same char?
	jne dorpt0		; No, that's no good either.
	mov rptq,ch		; Use repeat quote char now.
dorpt0:	ret

;	Send command
 
SEND	PROC	NEAR
	mov comand.cmcr,0	; Filename must be specified.
	mov difnam,0		; Assume we'll use original filename.
	mov flags.wldflg,0	; Re-initialize every time.
	mov ah,cmifi		; Parse an input file spec.
	mov dx,offset fcb	; Give the address for the FCB.
	mov bx,offset filhlp	; Text of help message.
	call comnd
	 jmp r			;  Give up on bad parse.
	cmp flags.wldflg,0FFH	; Any wildcards seen?
	je send1		; Yes, get a confirm.
	mov bx,offset sendas	; See if want to send file under dif name.
	mov dx,offset filmsg	; In case user needs help.
	mov ah,cmtxt
	call comnd
	 jmp r
	cmp ah,0		; Different name supplied?
	je send11		; No - keep as it.
	mov difnam,1		; Yes - send different filename.
	mov difsiz,ah		; Remember length of new name.
	jmp send11
send1:  mov ah,cmcfm
	call comnd		; Get a confirm.
	 jmp r			;  Didn't get a confirm.
send11: mov flags.droflg,0	; Reset flags from fn parsing. [21a]
	mov flags.nmoflg,0	; Reset flags from fn parsing. [21a]
	mov ah,sfirst		; Get the first file.
	mov dx,offset fcb
	int dos
	cmp al,0FFH		; Any found?
	jne send12
	cmp pack.state,'R'	; was this from a remote GET?
	jne sen11a		; no, print error and continue
	mov bx,offset remmsg1	; else get error message
	call errpack		; go complain
	jmp abort		; and abort this
sen11a:	mov ah,prstr
	mov dx,offset crlf
	int dos
	mov ah,prstr
	mov dx,offset erms15
	int dos
	ret
send12: cmp flags.wldflg,0	; Any wildcards.      [7 start]
	je send16		; Nope, so no problem.
	mov bx,offset fcb	; Remember what FCB looked like.
	mov di,offset cpfcb
	mov cl,37		; Size of FCB.
	call fcbcpy
	mov di,offset fcb+1	; Copy filename	from DTA to FCB.
	mov bx,offset buff+1
	mov cl,11
	call fcbcpy					; [7 end]
send16:	call serini		; Initialize serial port. [14]
	mov pack.pktnum,0	; Set the packet number to zero.
	mov pack.numtry,0	; Set the number of tries to zero.
	mov pack.numpkt,0 	; Set the number of packets to zero.
	mov pack.numrtr,0	; Set the number of retries to zero.
	mov pack.state,'S'	; Set the state to receive initiate.
	cmp flags.remflg,0	; remote mode?
	jne send2a		; yes, continue below.
	call init		; Clear the line and initialize the buffers.
	call rtpos		; Position cursor.
	mov ax,0
	call nout		; Write the number of retries.
	call stpos		; Print status of file transfer.
	mov ah,prstr		; Be informative.
	mov dx,offset infms2
	int dos
send2:	cmp flags.remflg,0	; remote mode?
	jne send2a		; yes, skip printing
	call nppos		; Number of packets sent.
	mov ax,pack.numpkt
	call nout		; Write the packet number.
send2a:	cmp pack.state,'D'	; Are we in the data send state?
	jne send3
	call sdata
	jmp send2
send3:  cmp pack.state,'F'	; Are we in the file send state?
	jne send4
	call sfile		; Call send file.
	jmp send2
send4:  cmp pack.state,'Z'	; Are we in the EOF state?
	jne send5
	call seof
	jmp send2
send5:  cmp pack.state,'S'	; Are we in the send initiate state?
	jne send6
	call sinit
	jmp send2
send6:  cmp pack.state,'B'	; Are we in the eot state?
	jne send7
	call seot
	jmp send2
send7:  cmp pack.state,'C'	; Are we in the send complete state?
	jne send8
	call serrst		; Reset serial port.  [14]
	cmp flags.remflg,0	; remote mode?
	jne send7a		; yes, no printing.
	cmp flags.cxzflg,0	; completed normally?
	jne send7b		; no, don't bother with this
	call perpos
	mov ah,prstr
	mov dx,offset infms7
	int dos
send7b:	call stpos
	mov ah,prstr
	mov dx,offset infms3	; Plus a little cuteness.
	cmp flags.cxzflg,0	; Completed or interrupted?
	je snd71		; Ended normally.
	mov dx,offset infms6	; Say was interrupted.
snd71:  int dos			; New label. 
	cmp flags.belflg,0	; Bell desired? [17a]
	je sendnb		; [17a]
	mov dx,offset ender	; Ring them bells.   [4]
	int dos
sendnb:	call clrmod
	call rprpos
send7a:	jmp rskp
send8: 	call serrst		; Reset serial port.  [14]
	cmp flags.remflg,0	; remote mode?
	jne send9a		; no, no printing.
	call stpos
	mov ah,prstr
	mov dx,offset infms4	; Plus a little cuteness.
	int dos
	cmp flags.belflg,0	; Bell desired?  [17a]
	je send9		; No.  [17a]
	mov dx,offset ender	; Ring them bells.   [4]
	int dos			;  [4]
send9:	call clrmod
	call rprpos
send9a:	jmp rskp
SEND	ENDP
 
 
;	Send routines
 
;	Send initiate
 

SINIT	PROC	NEAR
	cmp pack.numtry,imxtry	; Have we reached the maximum number of tries?
	jl sinit2
	call erpos
	mov dx,offset erms14
	mov ah,prstr
	int dos			; Print an error message.
	mov bx,offset erms20
	call errpack		; Send error packet just in case.
	jmp abort		; Change the state to abort.
sinit2: inc pack.numtry		; Save the updated number of tries.
	mov bx,offset data	; Get a pointer to our data block.
	call rpar		; Set up the parameter information.
	xchg ah,al
	mov ah,0
	mov pack.argbk1,ax	; Save the number of arguments.
	mov ax,pack.numpkt	; Get the packet number.
	mov pack.argblk,ax
	mov ah,trans.chklen
	mov curchk,ah		; Store checksum length we want to use.
	mov trans.chklen,1	; Send init checksum is always 1 char.
	mov ah,'S'		; Send initiate packet.
	call spack		; Send the packet.
	 jmp abort
	call rpack		; Get a packet.
	 jmp sini23		; Trashed packet don't change state, retry.
	push ax
	mov ah,curchk
	mov trans.chklen,ah	; Checksum length we want to use.
	pop ax
	cmp ah,'Y'		; ACK?
	jne sinit3		; If not try next.
	mov ax,pack.pktnum	; Get the packet number.
	cmp ax,pack.argblk	; Is it the right packet number?
	je sini22
	ret			; If not try again.
sini22: inc ax			; Increment the packet number.
	and ax,3FH		; Turn off the two high order bits.
	mov pack.pktnum,ax	; Save modulo 64 of the number.
	inc pack.numpkt		; Increment the number of packets.
	mov ax,pack.argbk1	; Get the number of pieces of data.
	mov bx,offset data	; Pointer to the data.
	call spar		; Read in the data.
	call packlen		; Get max send packet size. [21b]
	mov ah,pack.numtry	; Get the number of tries.
	mov pack.oldtry,ah	; Save it.
	mov pack.numtry,0	; Reset the number of tries.
	mov pack.state,'F'	; Set the state to file send.
	call getfil		; Open the file.
	 jmp abort		;  Something is wrong, die.
	mov filopn,1		; Disk file is open.
	ret
sini23:	mov ah,curchk		; Restore desired checksum length.
	mov trans.chklen,ah
	call updrtr		; Update retry counter.
	ret			; And retry.
sinit3: cmp ah,'N'		; NAK?
	jne sinit4		; If not see if its an error.
	call rtpos		; Position cursor.
	inc pack.numrtr		; Increment the number of retries
	mov ax,pack.numrtr
	call nout		; Write the number of retries.
	ret
sinit4: cmp ah,'E'		; Is it an error packet.
	jne sinit5
	call error
sinit5: jmp abort
SINIT	ENDP
 


;	Send file header
 
SFILE	PROC	NEAR
	cmp pack.numtry,maxtry	; Have we reached the maximum number of tries?
	jl sfile1
	call erpos
	mov dx,offset erms14
	mov ah,prstr
	int dos			; Print an error message.
	mov bx,offset erms21
	call errpack		; Send error packet just in case.
	jmp abort		; Change the state to abort.
sfile1: inc pack.numtry		; Increment it.
	mov flags.cxzflg,0	; Clear ^X,^Z flag. 
	mov datptr,offset data  ; Get a pointer to our data block.
	mov bx,offset fcb+1		; Pointer to file name in FCB.
	mov fcbpt,bx		; Save position in FCB.
	mov cl,0		; Counter for chars in file name.
	mov ch,0		; Counter for number of chars in FCB.
sfil11:	cmp ch,8H		; Ninth char?
	jne sfil12
	mov ah,'.'
	mov bx,datptr
	mov [bx],ah		; Put dot in data packet.	
	inc bx
	mov datptr,bx		; Save new position in data packet.
	inc cl
sfil12:	inc ch
	cmp ch,0CH		; Twelve?
	jns sfil13
	mov bx,fcbpt
	mov ah,[bx]		; Get char of filename.
	inc bx
	mov fcbpt,bx		; Save position in FCB.
	cmp ah,'!'		; Is it a good char?
	jl sfil11		; If not, get the next.
	mov bx,datptr
	mov [bx],ah		; Put char in data buffer.
	inc cl			; Increment counter.
	inc bx
	mov datptr,bx		; Save new position. 
	jmp sfil11		; Get another char.
sfil13: mov ch,0
	cmp flags.remflg,0	; remote mode?
	jne sfil13a		; yes, no printing.
	push cx			; Don't forget the size.
	mov bx,datptr
	mov ah,'$'
	mov [bx],ah		; Put dollar sign for printing.
	call clrfln
	mov ah,prstr
	mov dx,offset data	; Print file name.
	int dos
	pop cx
sfil13a:cmp difnam,0		; Sending file under different name.
	je sfl13x		; No, so don't give new name.
	call newfn
sfl13x:	call doenc		; Do encoding.
	mov ax,pack.pktnum	; Get the packet number.
	mov pack.argblk,ax
	mov ah,'F'		; File header packet.
	call spack		; Send the packet.
	 jmp abort
	call rpack		; Get a packet.
	 jmp tryagn		; Trashed packet don't change state, retry.
	call dodec		; Do all decoding.
	cmp ah,'Y'		; ACK?
	jne sfile2		; If not try next.
	mov ax,pack.pktnum	; Get the packet number.
	cmp ax,pack.argblk
	je sfil14
	ret			; If not hold out for the right one.
sfil14: inc ax			; Increment the packet number.
	and ax,3FH		; Turn off the two high order bits.
	mov pack.pktnum,ax	; Save modulo 64 of the number.
	inc pack.numpkt		; Increment the number of packets.
	mov ah,pack.numtry	; Get the number of tries.
	mov pack.oldtry,ah	; Save it.
	mov pack.numtry,0	; Reset the number of tries.

sfil15: mov ah,0		; Get a zero.
	mov bx,offset fcb
	add bx,20H
	mov [bx],ah		; Set the record number to zero.
;	mov flags.eoflag,ah	; Indicate not EOF.  (Done in GETFIL).
	mov ah,0FFH
	mov flags.filflg,ah	; Indicate file buffer empty.
	call gtchr
	 jmp sfil16		; Error go see if its EOF.
	 nop
	jmp sfil17		; Got the chars, proceed.
sfil16: cmp ah,0FFH		; Is it EOF?
	je sfl161
	jmp abort		; If not give up.
sfl161: mov ah,'Z'		; Set the state to EOF.
	mov pack.state,ah
	ret
sfil17: mov siz,ax

	mov pack.state,'D'	; Set the state to data send.
	ret
sfile2: cmp ah,'N'		; NAK?
	jne sfile3		; Try if error packet.
	call rtpos		; Position cursor.
	inc pack.numrtr		; Increment the number of retries
	mov ax,pack.numrtr
	call nout		; Write the number of retries.
	mov ax,pack.pktnum	; Get the present packet number.
	inc ax			; Increment.
	and ax,03FH		; Account for wraparound.  [18]
	cmp ax,pack.argblk	; Is the packet's number one more than now?
	jz sfil14		; Just as good as a ACK; go to the ACK code.
	ret			; If not go try again.
sfile3: cmp ah,'E'		; Is it an error packet.
	jne sfile4
	call error
sfile4: jmp abort
SFILE	ENDP
 
 
;	Send data
 
SDATA	PROC	NEAR
	cmp flags.cxzflg,0	; Have we seen ^X or ^Z?
	je sdata2		; Nope, just continue.
	cmp flags.cxzflg,'C'	; Stop it all? [25]
	jne sdata1		; It was a ^X or ^Z.
	mov pack.state,'A'	; It was a ^C -- abort [25]
	ret
sdata1:	mov pack.state,'Z'	; Else, abort sending the file.
	ret
sdata2: cmp pack.numtry,maxtry	; Have we reached the maximum number of tries?
	jl sdata3
	call erpos
	mov dx,offset erms14
	mov ah,prstr
	int dos			; Print an error message.
	mov bx,offset erms22
	call errpack		; Send error packet just in case.
	jmp abort		; Change the state to abort.
sdata3: inc pack.numtry		; Increment it.
	mov datptr,offset data  ; Get a pointer to our data block.
	mov chrptr,offset filbuf ; Pointer to chars to be sent.
	mov cx,siz		; number to transfer
	mov si,chrptr		; source of characters
	mov di,datptr		; destination
;	cmp flags.eofcz,0	; stopping on ctl-z's?
;	jz sdata6		; no, do blind copy
;sdata4:	lodsb			; get a byte
;	cmp al,'Z'-40H		; is it a ctl-z?
;	je sdata5		; yes, break loop
;	stosb			; else copy it
;	loop sdata4		; and keep going
;sdata5:	mov ax,siz		; size to send
;	sub ax,cx		; minus actually sent...
;	jmp short sdata7
;sdata6:	
	rep movsb		; just copy data
	mov ax,siz		; this is how many were moved
sdata7:	mov pack.argbk1,ax
	mov ax,pack.pktnum	; Get the packet number.
	mov pack.argblk,ax
	mov ah,'D'		; Data packet.
	call spack		; Send the packet.
	 jmp tryagn		; if can't send it, retry before giving up
	call rpack		; Get a packet.
	 jmp tryagn		; Trashed packet don't change state, retry.
	call dodec		; Do all decoding.
	cmp ah,'Y'		; ACK?
	jne sdat14		; If not try next.
	mov ax,pack.pktnum	; Get the packet number.
	cmp ax,pack.argblk	; Is it the right packet number?
	jz sdata8
	ret			; If not hold out for the right one.
sdata8: inc ax			; Increment the packet number.
	and ax,3FH		; Turn off the two high order bits.
	mov pack.pktnum,ax	; Save modulo 64 of the number.
	inc pack.numpkt		; Increment the number of packets.
	mov ah,pack.numtry	; Get the number of tries.
	mov pack.oldtry,ah	; Save it.
	mov pack.numtry,0	; Reset the number of tries.
	cmp pack.argbk1,1	; Does the ACK contain data?
	jne sdat11		; Nope, so continue.
	mov bx,offset data	; If yes, check the data field.
	mov ah,[bx]		; Pick it up.
	cmp ah,'X'		; Other side requests ^X?
	jne sdata9		; Nope.
	jmp sdat10		; And leave.
sdata9: cmp ah,'Z'		; Other side requests ^Z?
	jne sdat11		; Nope.
sdat10:	mov flags.cxzflg,ah	; Yes remember it.
	mov pack.state,'Z'	; Abort sending file(s).
	ret
sdat11: call gtchr
	 jmp sdat12		; Error go see if its EOF.
	mov siz,ax		; Save the size of the data gotten.
	ret

sdat12: cmp ah,0FFH		; Is it EOF?
	je sdat13
	jmp abort		; If not give up.

sdat13: mov pack.state,'Z'	; Set the state to EOF.
	ret
sdat14: cmp ah,'N'		; NAK?
	jne sdat15		; See if is an error packet.
	call rtpos		; Position cursor.
	inc pack.numrtr		; Increment the number of retries
	mov ax,pack.numrtr
	call nout		; Write the number of retries.
	mov ax,pack.pktnum	; Get the present packet number.
	inc ax			; Increment.
	and ax,03FH		; Account for wraparound.  [18]
	cmp ax,pack.argblk	; Is the packet's number one more than now?
	jz sdata8		; Just as good as ACK; goto ACK code.
	ret			; If not go try again.
sdat15: cmp ah,'E'		; Is it an error packet.
	jne sdat16
	call error
sdat16: jmp abort
SDATA	ENDP
 
 
;	Send EOF
 
SEOF	PROC	NEAR
	cmp pack.numtry,maxtry	; Have we reached the maximum number of tries?
	jl seof1
	call erpos		; Position cursor.
	mov dx,offset erms14
	mov ah,prstr
	int dos			; Print an error message.
	mov bx,offset erms23
	call errpack		; Send error packet just in case.
	jmp abort		; Change the state to abort.
seof1:  inc pack.numtry		; Increment it.
	mov ax,pack.pktnum	; Get the packet number.
	mov pack.argblk,ax
	mov pack.argbk1,0	; No data.
	cmp flags.cxzflg,0	; Seen a ^X or ^Z?
	je seof11		; Nope, send normal EOF packet.
	mov bx,offset data	; Get data area of packet.
	mov ah,'D'		; Use "D" for discard.
	mov [bx],ah		; And add it to the packet.
	mov pack.argbk1,1	; Set data size to 1.
seof11:	mov cx,pack.argbk1	; Put size in CX.
	call doenc		; Encode the packet.
	mov ah,'Z'		; EOF packet.
	call spack		; Send the packet.
	 jmp abort
	call rpack		; Get a packet.
	 jmp tryagn		;  Trashed packet don't change state, retry.
	call dodec		; Do decoding.
	cmp ah,'Y'		; ACK?
	jne seof2		; If not try next.
	mov ax,pack.pktnum	; Get the packet number.
	cmp ax,pack.argblk	; Is it the right packet number?
	jz seof12
	ret			; If not hold out for the right one.
seof12: inc ax			; Increment the packet number.
	and ax,3FH		; Turn off the two high order bits.
	mov pack.pktnum,ax	; Save modulo 64 of the number.
	inc pack.numpkt		; Increment the number of packets.
	mov ah,pack.numtry	; Get the number of tries.
	mov pack.oldtry,ah	; Save it.
	mov pack.numtry,0	; Reset the number of tries.
	mov ah,closf		; Close the file.
	mov dx,offset fcb
	int dos
	call gtnfil		; Get the next file.
	 jmp seof13		;  No more.
	mov pack.state,'F'	; Set the state to file send.
	cmp flags.cxzflg,'X'	; Control-X seen?
	jne seof14
	call cxmsg		; Clear out the interrupt msg.
seof14:	mov flags.cxzflg,0	; Reset the flag.
	ret
seof13: mov pack.state,'B'	; Set the state to EOT.
	mov filopn,0		; No files open.
	ret
seof2:  cmp ah,'N'		; NAK?
	jne seof3		; Try and see if its an error packet.
	call rtpos		; Position cursor.
	inc pack.numrtr		; Increment the number of retries
	mov ax,pack.numrtr
	call nout		; Write the number of retries.
	mov ax,pack.pktnum	; Get the present packet number.
	inc ax			; Increment.
	and ax,03FH		; Account for wraparound.  [18]
	cmp ax,pack.argblk	; Is the packet's number one more than now?
	jz seof12		; Just as good as a ACK; go to the ACK code.
	ret			; If not go try again.
seof3:  cmp ah,'E'		; Is it an error packet?
	jne seof4
	call error
seof4:  jmp abort
SEOF	ENDP
 
 
;	Send EOT
 
SEOT	PROC	NEAR
	cmp pack.numtry,maxtry	; Have we reached the maximum number of tries?
	jl seot1
	call erpos	       ; Position cursor.
	mov dx,offset erms14
	mov ah,prstr
	int dos			; Print an error message.
	mov bx,offset erms24
	call errpack		; Send error packet just in case.
	jmp abort		; Change the state to abort.
seot1:  inc pack.numtry		; Increment it.
	mov ax,pack.pktnum	; Get the packet number.
	mov pack.argblk,ax
	mov pack.argbk1,0	; No data.
	mov cx,pack.argbk1
	call doenc		; Encode packet.
	mov ah,'B'		; EOF packet.
	call spack		; Send the packet.
	 jmp abort
	call rpack		; Get a packet.
	 jmp tryagn		; Trashed packet don't change state, retry.
	call dodec		; Decode packet.
	cmp ah,'Y'		; ACK?
	jne seot2		; If not try next.
	mov ax,pack.pktnum	; Get the packet number.
	cmp ax,pack.argblk	; Is it the right packet number?
	jz seot12
	ret			; If not hold out for the right one.
seot12: inc ax			; Increment the packet number.
	and ax,3FH		; Turn off the two high order bits.
	mov pack.pktnum,ax	; Save modulo 64 of the number.
	inc pack.numpkt		; Increment the number of packets.
	mov ah,pack.numtry	; Get the number of tries.
	mov pack.oldtry,ah	; Save it.
	mov pack.numtry,0	; Reset the number of tries.
	mov pack.state,'C'	; Set the state to file send.
	ret
seot2:  cmp ah,'N'		; NAK?
	jne seot3		; Is it error.
	call rtpos		; Position cursor.
	inc pack.numrtr		; Increment the number of retries
	mov ax,pack.numrtr
	call nout		; Write the number of retries.
	mov ax,pack.pktnum	; Get the present packet number.
	inc ax			; Increment.
	and ax,03FH		; Account for wraparound.  [18]
	cmp ax,pack.argblk	; Is the packet's number one more than now?
	jz seot12		; Just as good as a ACK; go to the ACK code.
	ret			; If not go try again.
seot3:  cmp ah,'E'		; Is it an error packet.
	jne seot4
	call error
seot4:  jmp abort
SEOT	ENDP
 
tryagn:	call updrtr
	ret

newfn:	mov ah,prstr
	mov dx,offset asmsg
	int dos
	mov ah,dconio
	mov si,offset sendas	; Buffer where the name is.
	mov di,offset data
	mov ch,0
	mov cl,difsiz		; Length of name.
newf0:	lodsb			; Get a char.
	cmp al,61H
	jb newf1		; Leave alone if less than 'a'?
	cmp al,7AH
	ja newf1		; Leave alone if over 'z'.
	sub al,20H		; Uppercase the letters.
newf1:	stosb
	mov dl,al
	cmp flags.remflg,0	; should we print?
	jne newf2		; no, we're in remote mode.
	int dos			; Print them.
newf2:	loop newf0
	mov ch,0
	mov cl,difsiz		; Reset the length field.
	ret

; Do encoding.  Expectx CX to be the data size.
doenc:	jcxz doen0
	mov chrcnt,cx		; Number of chars in filename.
	mov bx,offset data	; Source of data.
	mov bufpnt,bx
	mov bx,offset nulref	; Null routine for refilling buffer.
	mov ah,rptq
	mov origr,ah		; Save repeat prefix here.
	mov rptct,1		; Number of times char is repeated.
	mov rptval,0		; Value of repeated char.
	call encode		; Make a packet with size in AX.
	 nop
	 nop
	 nop
	mov pack.argbk1,ax	; Save number of char in filename.
	mov cx,ax
	call movpak		; Move to data part of packet.
doen0:	ret

; CX is set before this is called.
movpak:	push es
	mov ax,ds
	mov es,ax
	mov si,offset filbuf	; Move from here
	mov di,offset data	; to here
	repne movsb
	pop es
	ret

; Do decoding.
dodec:	cmp pack.argbk1,0
	je dodc0
	push ax			; Save packet size.
	mov cx,pack.argbk1	; Size of data.
	mov bx,offset data	; Address of data.
	mov ax,offset nulr	; Routine to dump buffer (null routine).
	mov bufpnt,offset decbuf  ; Where to put output.
	mov chrcnt,80H		; Buffer size.
	call decode
	 nop     
	 nop     
	 nop     
	call decmov		; Move decoded data back to "data" buffer.
 	pop ax
dodc0:	ret

; Move decoded data from decode buffer back to "data". 
decmov:	push si
	push di
	push es
	mov ax,ds
	mov es,ax
	mov cx,bufpnt		; Last char we added.
	sub cx,offset decbuf	; Get actual number of characters.
	mov pack.argbk1,cx	; Remember size of real data.
	lea si,decbuf		; Data is here.
	lea di,data		; Move to here.
	repne movsb		; Copy the data.
	mov al,0		; Null to end the string.
	stosb
	pop es
	pop di
	pop si
	ret

;	Abort
 
ABORT	PROC	NEAR
	cmp filopn,0		; Any disk files open?
	je abort0		; No so don't do a close.
	mov ah,closf		; Close the file and ignore errors.
	mov dx,offset fcb
	int dos
abort0:	mov pack.state,'A'	; Otherwise abort.
	ret
ABORT	ENDP

; This is where we go if we get an error packet.  A call to ERROR 
; positions the cursor and prints the message.  A call to ERROR1
; just prints a CRLF and then the message.  [8]
 
ERROR	PROC	NEAR
	mov pack.state,'A'	; Set the state to abort.
	call erpos		; Position the cursor.
	jmp error2
error1:	mov ah,prstr
	mov dx,offset crlf
	int dos
error2: mov bx,pack.argbk1	; Get the length of the data.
	add bx,offset data	; Get to the end of the string.
	mov ah,'$'		; Put a dollar sign at the end.
	mov [bx],ah
	mov ah,prstr		; Print the error message.
	mov dx,offset data
	int dos
	ret
ERROR	ENDP
 
; Set the maximum data packet size. [21b]

PACKLEN	PROC	NEAR
	mov ah,trans.spsiz	; Maximum send packet size. 
	sub ah,4		; Size minus control info. 
	sub ah,trans.chklen	; And minus checksum chars.
	sub ah,2		; Leave room at end: 2 for possible #X.
	cmp trans.ebquot,'N'	; Doing 8-bit quoting?
	je pack0		; Nope so we've got our size.
	cmp trans.ebquot,'Y'
	je pack0		; Not doing it in this case either.
	sub ah,1		; Another 1 for 8th-bit quoting. 
pack0:	cmp rptq,0		; Doing repeat character quoting?
	je pack1		; Nope, so that's all for now.
	sub ah,2		; Another 2 for repeat prefix.
pack1:	mov trans.maxdat,ah	; Save max length for data field.
	ret
PACKLEN	ENDP

 ; Print the number in AX on the screen in decimal rather that hex. [19a]

NOUT 	PROC	NEAR
	cmp flags.xflg,1	; Writing to screen? [21c]
	je nout1		; Yes, just leave. [21c]
	push ax
	push dx
	mov temp,10		; Divide quotient by 10.
;	cwd			; Convert word to doubleword.
	mov dx,0		; High order word should be zero.
	div temp		; AX <-- Quo, DX <-- Rem.
	cmp ax,0		; Are we done?	
	jz nout0		; Yes.
	call nout		; If not, then recurse.
nout0:	add dl,'0'		; Make it printable.
	mov temp,ax
	mov ah,conout
	int dos	
	mov ax,temp
	pop dx
	pop ax
nout1:	ret			; We're done. [21c]
NOUT	ENDP

; Jumping to this location is like retskp.  It assumes the instruction
;   after the call is a jmp addr.
 
RSKP	PROC	NEAR
	pop bp
	add bp,3
	push bp
	ret
RSKP	ENDP
 
; Jumping here is the same as a ret.
 
R	PROC	NEAR
	ret
R	ENDP

code	ends 
	end
```
{% endraw %}

## MSSERV.ASM

{% raw %}
```
	public	logout, bye, finish, remote, get, server
	include	msdefs.h

datas	segment	public 'datas'
	extrn	data:byte, flags:byte, trans:byte, pack:byte, curchk:byte
	extrn	fcb:byte

remcmd	db	0		; Remote command to be executed. [21c]
rempac	db	0		; Packet type: C (host) or G (generic). [21c] 

cmer05	db	cr,lf,'?Filename must be specified$'	 ; [21a]
ermes7  db      '?Unable to receive initiate$'
erms18	db	cr,lf,'?Unable to tell host that session is finished$'
erms19	db	cr,lf,'?Unable to tell host to logout$'
erms21  db      cr,lf,'?Unable to tell host to execute command$' ; [21c]
infms1	db	'Entering server mode',cr,lf,'$'
remms1	db	'Kermit-MS: Unknown server command$'
remms2	db	'Kermit-MS: Illegal file name$'
remms3	db	'Kermit-MS: Unknown generic command$'
pass	db	lf,cr,' Password: $' 	; When change directory. [21c]
crlf    db      cr,lf,'$'
tmp	db	?,'$'
temp	dw	0
oloc	dw	0		; Original buffer location. [21c]
osiz	dw	0		; Original buffer size. [21c]
inpbuf	dw	0		; Pointer to input buffer. [21c]
cnt	dw	0
delinp	db	BS,BS,BS,'   ',BS,BS,BS,'$'	; When DEL key is used. [21d]
clrspc  db      ' ',10O,'$'             ; Clear space.

srvchr	db	'SRGIE'		; server cmd characters
srvfln	equ	$-srvchr	; length of tbl
srvfun	dw	srvsnd,srvrcv,srvgen,srvini,serv1

remhlp	db	cr,lf,'CWD connect to a directory'	; [21c start]
	db	cr,lf,'DELETE a file'
	db	cr,lf,'DIRECTORY listing'
	db	cr,lf,'HELP'
	db	cr,lf,'HOST command'
	db	cr,lf,'SPACE in a directory'
	db	cr,lf,'TYPE a file$'			; [21c end]

remtab	db	07H		; Seven entries. [21c start]
	mkeyw	'CWD',remcwd
	mkeyw	'DELETE',remdel
	mkeyw	'DIRECTORY',remdir
	mkeyw	'HELP',remhel
	mkeyw	'HOST',remhos
	mkeyw	'SPACE',remdis
	mkeyw	'TYPE',remtyp		; [21c end]

remfnm	db	' Remote Source File: $'
lclfnm	db	' Local Destination File: $'
filhlp	db	' File name to receive as$'
filmsg	db	' Remote file specification or confirm with carriage return $'
frem	db	' Name of file on remote system $'
genmsg	db	' Enter text to be sent to remote server $'
rdbuf	db	80H DUP(?)
datas	ends

code	segment	public
	extrn comnd:near, serrst:near, spack:near, rpack5:near, init:near
	extrn read12:near, serini:near, read2:near, rpar:near, spar:near
	extrn rin21:near, rfile3:near, error1:near, clrfln:near
	extrn dodel:near, clearl:near, dodec: near, doenc:near
	extrn packlen:near, send11:near, errpack:near, init1:near
	extrn rpack:near,nak:near, rrinit:near, cmblnk:near
	extrn error:near, erpos:near, rprpos:near, clrmod:near
	extrn prompt:near
	assume	cs:code,ds:datas

; LOGOUT - tell remote KERSRV to logout.

LOGOUT	PROC	NEAR
	mov ah,cmcfm
	call comnd		; Get a confirm.
	 jmp r
	call logo
	 jmp rskp		; Go get another command whether we ....
	jmp rskp		; .... succeed or fail.
LOGOUT	ENDP

LOGO	PROC	NEAR
	mov pack.numtry,0	; Initialize count.
	mov pack.numrtr,0	; No retries yet.
	call serini		; Initialize port.  [14]
	mov ah,trans.chklen	; Don't forget the checksum length.
	mov curchk,ah
	mov trans.chklen,1	; Use one char for server functions.
logo1:	cmp pack.state,'A'	; Did user type a ^C?
	je logo2x		; Yes just leave.
	mov ah,pack.numtry
	cmp ah,maxtry		; Too many times?
	js logo3		; No, try it.
logo2:	mov ah,prstr
	mov dx,offset erms19
	int dos
logo2x:	call serrst		; Reset port.  [14]
	mov ah,curchk
	mov trans.chklen,ah	; Restore value.
	ret
logo3:	inc pack.numtry		; Increment number of tries.
	mov pack.argblk,0	; Packet number zero.
	mov pack.argbk1,1	; One piece of data.
	mov bx,offset data
	mov ah,'L'
	mov [bx],ah		; Logout the remote host.
	mov cx,1		; One piece of data.
	call doenc		; Do encoding.
	mov ah,'G'		; Generic command packet.
	call spack
	 jmp logo2		; Tell user and die.
	 nop
	call rpack5		; Get ACK (w/o screen msgs.)
	 jmp logo1		; Go try again.
	 nop
	push ax
	call dodec		; Decode packet.
	mov ah,curchk
	mov trans.chklen,ah	; Restore value.
	pop ax
	cmp ah,'Y'		; ACK?
	jne logo4
	call serrst		; Reset port.  [14]
	jmp rskp
logo4:	cmp ah,'E'		; Error packet?	
	jnz logo1		; Try sending the packet again.
	call error1
	call serrst		; Reset port.  [14]
	ret
LOGO	ENDP

; FINISH - tell remote KERSRV to exit.

FINISH	PROC	NEAR
	mov ah,cmcfm		; Parse a confirm.
	call comnd
	 jmp r
	mov pack.numtry,0	; Initialize count.
	mov pack.numrtr,0	; No retries yet.
	call serini		; Initialize port.  [14]
	mov ah,trans.chklen	; Don't forget the checksum length.
	mov curchk,ah
	mov trans.chklen,1	; Use one char for server functions.
fin1:	cmp pack.state,'A'	; ^C typed?
	je fin2x
	mov ah,pack.numtry
	cmp ah,maxtry		; Too many times?
	js fin3			; Nope, try it.
fin2:	mov ah,prstr
	mov dx,offset erms18
	int dos
fin2x:	call serrst		; Reset port.  [14]
	mov ah,curchk
	mov trans.chklen,ah	; Restore value.
	jmp rskp		; Go home.
fin3:	inc pack.numtry		; Increment number of tries.
	mov pack.argblk,0	; Packet number zero.
	mov pack.argbk1,1	; One piece of data.
	mov bx,offset data
	mov ah,'F'
	mov [bx],ah		; Finish running Kermit.
	mov cx,1		; One piece of data.
	call doenc		; Do encoding.
	mov ah,'G'		; Generic command packet.
	call spack
	 jmp fin2		; Tell user and die.
	 nop
	call rpack5		; Get ACK (w/o screen stuff).
	 jmp fin1		; Go try again.
	 nop
	push ax
	call dodec		; Decode data.
	mov ah,curchk
	mov trans.chklen,ah	; Restore value.
	pop ax
	cmp ah,'Y'		; Got an ACK?
	jnz fin4
	call serrst		; Reset port. [14]
	jmp rskp		; Yes, then we're done.
fin4:	cmp ah,'E'		; Error packet?
	jnz fin1		; Try sending it again.
	call error1
	call serrst		; Reset port.  [14]
	jmp rskp
FINISH	ENDP

; BYE command - tell remote KERSRV to logout & exits to DOS.  

BYE	PROC	NEAR
	mov ah,cmcfm		; Parse a confirm.
	call comnd
	 jmp r
	call logo		; Tell the mainframe to logout.
 	 jmp rskp		; Failed - don't exit.
	mov flags.extflg,1	; Set exit flag.
	jmp rskp					; [8 end]
BYE	ENDP

; Tell remote server to send the specified file(s).

get	PROC	NEAR
	mov flags.droflg,0	; Reset flags from fn parsing.
	mov flags.nmoflg,0	; Reset flags from fn parsing.
	mov flags.cxzflg,0	; no ctl-c typed yet...
	mov bx,offset rdbuf	; Where to put text.  [8 start]
	mov dx,offset filmsg	; In case user needs help.
	mov ah,cmtxt
        call comnd              ; Get text or confirm.
         jmp r			; Fail. 
	cmp ah,0		; Read in any chars?
	jne get4		; Yes, then OK.
; empty line, ask for file names
get1:	mov dx,offset remfnm	; ask for remote first
	call prompt
	mov bx,offset rdbuf
    	mov dx,offset frem
	mov ah,cmtxt
	call comnd		; get a line of text
	 jmp r
	cmp flags.cxzflg,'C'	; ctl-C typed?
	jne get2		; no, continue
	jmp rskp
get2:	cmp ah,0
	je get1			; ignore empty lines
	mov bl,ah
	mov bh,0
	mov byte ptr rdbuf[bx],'$' 	; terminate name for printing
	mov cnt,bx		; remember length here
	mov dx,offset lclfnm
	call prompt
	mov ah,cmifi
	mov bx,offset filhlp
	mov dx,offset fcb
	call comnd
	 jmp r
	mov ah,cmcfm
	call comnd
	 jmp r
	cmp flags.cxzflg,'C'	; control-C typed?
	jne get3		; no, keep going
	jmp rskp
get3:	mov flags.nmoflg,1	; remember changed name
	jmp short get5
get4:	mov al,ah
	mov ah,0
	mov cnt,ax		; Remember number of chars we read.
	mov byte ptr [bx],'$'	; use for printing.
get5:	call ipack		; Initialize.
	 jmp get8		; Sorry can't do it.
	 nop
	mov cx,cnt		; Get back filename size.
	mov pack.argbk1,cx	; Need it here to send packet.
	inc cx			; Don't forget "$" for printing.
	push es			; Prepare to put string into packet. 
	mov ax,ds
	mov es,ax
	mov si,offset rdbuf	; Move from here
	mov di,offset data	; to here.
	rep movsb		; Perform the string move.
	pop es
	cmp flags.remflg,0	; remote mode?
	jne get6		; yes, don't print anything
	cmp flags.destflg,2	; Receiving to screen? [27c]
	je get6			; Yes skip screen stuff. [27c]
	call init		; Clear line and initialize buffers.
	call clrfln		; Prepare to print filename.
	mov ah,prstr
	mov dx,offset data	; Print file name.
	int dos
get6:	call init1		; init buffers
	mov pack.numtry,0	; Initialize count.
	mov pack.numrtr,0	; No retries yet.
	mov pack.state,'R'	; this is what state will soon be...
	mov cx,pack.argbk1	; Data size.
	call doenc		; Encode data.
	mov ah,trans.chklen	; Don't forget the checksum length.
	mov curchk,ah
	mov trans.chklen,1	; Use one char for server functions.
get7:	cmp pack.state,'A'	; Did user type a ^C?
	je get9			; Yes - just return to main loop.
	mov ah,pack.numtry
	cmp ah,maxtry		; Too many times?
	jbe get10		; Nope, try it.
get8:	cmp flags.remflg,0	; remote mode?
	jne get9		; yes, no printing
	call erpos
	mov ah,prstr
	mov dx,offset ermes7	; Can't get init packet. 
	int dos
get9:	call serrst		; Reset port. 
	mov ah,curchk
	mov trans.chklen,ah	; Restore value.
	jmp rskp		; Go home.
get10:	inc pack.numtry		; Increment number of tries.
	mov pack.argblk,0	; Start at packet zero.
	mov ah,'R'		; Receive init packet.
	call spack		; Send the packet.
	 jmp get8		; Tell user we can't do it.
	 nop
	call rpack5		; Get ACK (w/o screen stuff).
	 jmp get7		; Got a NAK - try again.
	 nop
	push ax
	mov ah,curchk
	mov trans.chklen,ah	; Restore value.
	pop ax
	mov pack.argbk2,ax	; this is where rinit wants pkt type if getting
	mov flags.getflg,1	; "Get" as vs "Receive".
	jmp read12		; go join read code
get11:	mov ah,prstr		; Complain if no filename. 
	mov dx,offset cmer05
	int dos
	jmp rskp
GET	ENDP

; server command

server	proc	near
	mov	ah,cmcfm
	call	comnd
	 jmp	r
	push	es
	mov	ax,ds
	mov	es,ax		; address data segment
	mov	al,flags.remflg	; get remote flag
	push	ax		; preserve for later
	mov	flags.remflg,1	; set remote if server
	call	cmblnk		; clear screen
	mov	ah,prstr
	mov	dx,offset infms1
	int	dos
; should reset to default parms here...
; should increase timeout interval
serv1:	call	serini		; init serial line (send & recv reset it)
	mov	trans.chklen,1	; checksum len = 1
	mov	pack.pktnum,0	; pack number resets to 0
	mov	pack.numtry,0	; no retries yet.
	call	rpack		; get a packet
	 jmp	short serv2	; no good, nak and continue
	 nop
	jmp	short serv3	; try to figure this out
serv2:	cmp	flags.cxzflg,'C' ; ctl-C?
	je	serv5		; yes, stop this.
	call	nak		; nak the packet
	jmp	serv1		; and keep readiserv2 packets

serv3:	mov	di,offset srvchr ; server characters
	mov	cx,srvfln	; length of striserv2
	mov	al,ah		; packet type
	repne	scasb		; hunt for it
	je	serv4		; we know this one, go handle it
	mov	bx,offset remms1 ; else give a message
	call	errpack		; back to local kermit
	jmp	serv1		; and keep lookiserv2 for a cmd
serv4:	sub	di,offset srvchr+1 ; find offset, +1 for pre-increment
	shl	di,1		; convert to word index.
	call	srvfun[di]	; call the appropriate handler
	 jmp	serv5		; someone wanted to exit...
; should we reset serial line?
	jmp	serv1		; else keep goiserv2 for more cmds.

serv5:
;** restore timer values
	pop	ax		; get this off stack
	mov	flags.remflg,al	; restore old flag
	call	serrst		; reset serial handler
	pop	es		; restore register
	jmp	rskp		; and return
server	endp

; server commands.

; srvsnd - receives a file that the local kermit is sending.
srvsnd	proc	near
	mov	bx,offset data
	call	spar		; parse the send-init packet
	call	packlen		; figure max packet
	mov	bx,offset data
	call	rpar		; make answer for them
	mov	al,ah		; length of packet
	mov	ah,0
	mov	pack.argbk1,ax	; store length for spack
	mov	ah,'Y'		; ack
	call	spack		; answer them
	 jmp	rskp		; can't answer, forget this
	call	rrinit		; init variables for init
	inc	pack.pktnum	; count the send-init packet.
	mov	pack.state,'F'	; expecting file name about now
	call	read2		; and join read code
	 nop
	 nop
	 nop			; ignore errors
	jmp	rskp		; and return for more
srvsnd	endp

; srvrcv - send a file that they're receiving.
srvrcv	proc	near
	mov	si,offset data	; this should be filename
	mov	di,offset fcb	; this is where filename goes
	mov	al,1		; skip leading separators
	mov	ah,prsfcb	; parse an fcb
	int	dos		; let dos do the work
	cmp	al,0ffh		; invalid?
	jne	srvrc1		; no, keep going
	mov	bx,offset remms2 ; complain
	call	errpack		; that we can't find it
	jmp	rskp		; and return
srvrc1:	mov	pack.state,'R'	; remember state.
	call	send11		; this should send it
	 jmp	rskp
	jmp	rskp		; return in any case
srvrcv	endp

; srvgen - generic server commands.
; We only support Logout and Finish right now.
srvgen	proc	near
	mov	al,data		; get 1st packet char
	cmp	al,'F'		; maybe finish?
	je	srvge1		; yup, handle
	cmp	al,'L'		; logout?
	jne	srvge2		; no.
srvge1:	mov	pack.argbk1,0	; 0-length data
	mov	ah,'Y'
	call	spack		; ack it
	 nop
	 nop
	 nop			; *** ignore error?
	ret			; and return to signal exit.
srvge2:	mov	bx,offset remms3
	call	errpack
	jmp	rskp
srvgen	endp

; srvini - init parms based on init packet
srvini	proc	near
	mov	bx,offset data
	call	spar		; parse info
	call	packlen		; this should really be part of spar, but...
	mov	bx,offset data
	call	rpar		; get receive info
	mov	al,ah
	mov	ah,0
	mov	pack.argbk1,ax	; set size of return info
	mov	ah,'Y'
	call	spack		; send the packet off
	 jmp	rskp
	jmp	rskp		; and go succeed
srvini	endp

;       This is the REMOTE command. [21c]

REMOTE	PROC	NEAR
	mov dx,offset remtab	; Parse a keyword from the REMOTE table.
	mov bx,offset remhlp
	mov ah,cmkey
	call comnd
	 jmp r
	call bx			; Call the appropriate routine.
	 jmp r			; Command failed.
	jmp rskp
REMOTE	ENDP

; REMDIS - Get disk usage on remote system. [21c]

REMDIS	PROC	NEAR
	mov remcmd,'U'		; Disk usage command.
	mov rempac,'G'		; Packet type = generic.
	jmp genric		; Execute generic Kermit command.
REMDIS	ENDP


; REMHEL - Get help about remote commands. [21c] 

REMHEL	PROC	NEAR
	mov remcmd,'H'		; Help......
	mov rempac,'G'		; Packet type = generic.
	jmp genric		; Execute generic Kermit command.
REMHEL	ENDP

; REMTYP - Print a remote file. [21c]

REMTYP	PROC	NEAR
	mov remcmd,'T'		; Type the file.
	mov rempac,'G'		; Packet type = generic.
	jmp genric
REMTYP	ENDP

; REMHOS - Execute a remote host command. [21c]

REMHOS	PROC	NEAR
	mov remcmd,' '		; Don't need one.
	mov rempac,'C'		; Packet type = remote command.
	jmp genric
REMHOS	ENDP

; REMDIR - Do a directory. [21c]

REMDIR	PROC	NEAR
	mov remcmd,'D'
	mov rempac,'G'		; Packet type = generic.
	jmp genric
REMDIR	ENDP

; REMDEL - Delete a remote file. [21c]

REMDEL	PROC	NEAR
 	mov remcmd,'E'
	mov rempac,'G'		; Packet type = generic.
	jmp genric
REMDEL	ENDP

; REMCWD - Change remote working directory.  [21c]

REMCWD	PROC	NEAR
	mov remcmd,'C'
	mov rempac,'G'		; Packet type = generic.
	jmp genric
REMCWD	ENDP

; GENRIC - Send a generic command to a remote Kermit server. [21c]

GENRIC	PROC	NEAR
	mov bx,offset rdbuf	; Where to put the text.
	cmp rempac,'C'		; Remote host command? 
	je genra		; Yes, leave as is. 
	add bx,2		; Leave room for type and size.
genra:	mov ah,cmtxt		; Parse arbitrary text up to a CR.
	mov dx,offset genmsg	; In case they want text.
	call comnd
	 jmp r
	mov al,ah		; Don't forget the size.
	mov ah,0
	mov cnt,ax		; Save it here.
	cmp rempac,'C'		; Remote host command? 
	jne genrb		; No, skip this part. 
	call ipack
	 jmp genr2
	mov pack.numtry,0
	mov ah,trans.chklen
	mov curchk,ah		; Save desired checksum length.
	mov trans.chklen,1	; Use 1 char for server functions.
	mov pack.numrtr,0	; No retries yet.
	jmp genr1		; Send the packet.
genrb:	mov ax,cnt
	cmp ax,0		; Any data?
	je genr0		; Nope.
	mov ah,al		; Don't overwrite the real count value.
	add ah,32		; Do the char function.
	mov temp,bx		; Remember where we are.
	mov bx,offset rdbuf+1	; Size of remote command.
	mov [bx],ah
	mov ah,0
	inc al			; For the size field.
	cmp remcmd,'C'		; Change working directory?
	jne genr0		; No, so don't ask for password.
	mov cnt,ax		; Save here for a bit.
	mov ah,prstr
	mov dx,offset pass	; Send along an optional password. 
	int dos
	mov bx,temp		; Where to put the password.
	push bx			; Is safe since subroutine never fails.
	inc bx			; Leave room for count field.
	call input		; Read in the password.
	mov temp,bx		; Remember end of data pointer.
	pop bx			; Where to put the size.
	cmp ah,0		; No password given?
	jne genrc
	mov ax,cnt
	jmp genr0		; Then that's it.
genrc:	mov al,ah
	add ah,32		; Make it printable.
	mov [bx],ah		; Tell remote host the size.
	mov ah,0
	push ax			; Remember the count.
	call clearl		; Clear to end-of-line.
	pop ax
	inc al			; For second count value.
	add ax,cnt		; Total for both fields of input.
genr0:	inc al			; For the char representing the command.
	mov pack.argbk1,ax	; Set the size.
	mov cnt,ax		; And remember it. 
	mov pack.numtry,0	; Initialize count
	mov bx,offset rdbuf	; Start of data buffer.	
	mov ah,remcmd		; Command subtype.
	mov [bx],ah
	call ipack		; Send init parameters.
	 jmp genr2
	 nop			; Make it 3 bytes long.
	mov ah,trans.chklen
	mov curchk,ah		; Save desired checksum length.
	mov trans.chklen,1	; Use 1 char for server functions.
	mov pack.numrtr,0	; No retries yet.
genr1:	cmp pack.state,'A'	; Did the user type a ^C?
	je genr2x
	mov ah,pack.numtry
	cmp ah,maxtry		; Too many tries?
	js genr3		; Nope, keep trying.
genr2:	mov ah,prstr
	mov dx,offset erms21	; Print error msg and fail.
	int dos
genr2x:	call serrst		; Reset the port.
	mov ah,curchk
	mov trans.chklen,ah	; Restore.
	jmp rskp
genr3:	push es			; Prepare to put string into packet. 
	mov ax,ds
	mov es,ax
	mov si,offset rdbuf	; Move from here
	mov di,offset data	; to here.
	mov cx,cnt		; Move this many characters.
	rep movsb		; Perform the string move.
	pop es
	mov ax,cnt
	mov pack.argbk1,ax	; How much data to send.
	mov cx,ax		; Size of data.
	call doenc		; Encode it.
	inc pack.numtry		; Increment number of trials.
        mov pack.argblk,0       ; Packet number 0.
	mov ah,rempac		; Packet type.
	call spack		; Send the packet.
	 jmp genr2		; Tell user we can't do it.
	 nop
	call rpack5		; Get ACK (w/o screen stuff)
	 jmp genr1		; Got a NAK - try again.
	 nop
	push ax
	mov ah,curchk
	mov trans.chklen,ah	; Restore.
	pop ax
	cmp ah,'Y'		; Is all OK?
	jne genr4
	cmp pack.argbk1,0	; Any data in the ACK?
	je genr31		; Nope - just return. 
	call dodec		; Decode data.
	mov ah,prstr
	mov dx,offset crlf	; First go to a new line.
	int dos	
	mov di,offset data	; Where the reply is.
	mov cx,pack.argbk1	; How much data we have. 
	call prtscr		; Print it on the screen.
genr31:	jmp rskp		; And we're done. 
genr4:	cmp ah,'X'		; Text packet?
	je genr5
	cmp ah,'S'		; Handling this like a file?
	jne genr6
	mov pack.state,'R'	; Set the state.
	mov bx,offset rin21	; Where to go to.
	jmp genr51		; Continue.
genr5:	mov pack.state,'F'
	call dodec		; Decode data.
	mov bx,offset rfile3	; Jump to here.
genr51:	mov tmp,ah		; Save packet type.
	mov flags.xflg,1	; Remember we saw an "X" packet.
	mov pack.numtry,0
	mov pack.numrtr,0
	mov pack.numpkt,0
	mov pack.pktnum,0
	mov flags.cxzflg,0
	mov ah,tmp		; Packet type.
	call bx			; Handle it almost like filename.
	call read2		; Receive the rest.
	 jmp r			; Oops, we failed.
	jmp rskp		; Done OK.
genr6:	cmp ah,'E'		; Error packet?
	je genr6x		
	jmp genr1		; Try again.
genr6x: call dodec		; Decode data.
	call error1		; Print the error messge.
	call serrst
	jmp rskp		; And return.
GENRIC	ENDP

; Send "I" packet with transmission parameters. [21c]

IPACK	PROC	NEAR
	mov ah,trans.chklen
	mov curchk,ah		; Initialize.
	call serini
	mov pack.pktnum,0	; Use packet number 0.
	mov pack.numtry,0	; Number of retries.
ipk0:   cmp pack.state,'A'	; Did user type a ^C?
	je ipk0x
	cmp pack.numtry,imxtry  ; Reached our limit?
        jl ipk1
ipk0x:	ret			; Yes, so we fail. 
ipk1:   inc pack.numtry         ; Save the updated number of tries.
        mov bx,offset data      ; Get a pointer to our data block.
        call rpar               ; Set up the parameter information.
	xchg ah,al
	mov ah,0
        mov pack.argbk1,ax      ; Save the number of arguments.
        mov pack.argblk,0	; Use packet number 0.
	mov ah,trans.chklen
	mov curchk,ah		; Save real value.
	mov trans.chklen,1	; One char for server function.
        mov ah,'I'              ; "I" packet.
        call spack              ; Send the packet.
	 jmp ipk4
	 nop
        call rpack5             ; Get a packet.
         jmp ipk4               ; Try again.
	 nop
	push ax
	mov ah,curchk
	mov trans.chklen,ah	; Reset.
	pop ax
        cmp ah,'Y'              ; ACK?
        jne ipk3                ; If not try next.
        mov ax,pack.pktnum      ; Get the packet number.
        cmp ax,pack.argblk      ; Is it the right packet number?
        je ipk2
         jmp ipk0               ; If not try again.
ipk2:   mov ax,pack.argbk1      ; Get the number of pieces of data.
        mov bx,offset data      ; Pointer to the data.
        call spar               ; Read in the data.
	mov ah,trans.chklen
	mov curchk,ah		; This is what we decided on.
	call packlen		; Get max send packet size. [21b] 
        mov pack.numtry,0       ; Reset the number of tries.
        jmp rskp
ipk3:   cmp ah,'N'              ; NAK?
        je ipk0                 ; Yes, try again.
	cmp ah,'E'              ; Is it an error packet.
	je ipk3x
        jmp ipk0		; Trashed data. 
ipk3x:	jmp rskp		; Other side doesn't know about "I" packet.
ipk4:	mov ah,curchk
	mov trans.chklen,ah	; Reset.	
	jmp ipk0		; Keep trying.
IPACK	ENDP

; Returns in AH the count of characters read in.
;	  in BX the updated pointer to the input buffer.

INPUT	PROC	NEAR
	mov cl,0		; Keep a count.	
	mov inpbuf,bx		; Where to put data. 
input0:	mov ah,conin		; Read in a char.
	int dos
	cmp al,CR		; Done with input?
	jne input1
	mov ah,cl		; Return count in AH.
	jmp r
input1:	cmp al,BS		; Backspace?
	je inpt11		; 
	cmp al,DEL		; Or delete?
	jne input3
	call dodel		; Erase weird character.
inpt11:	dec cl			; Don't include in char count. 
	cmp cl,0		; Backspaced too much? 
	jns input2		; No, is OK.
	push bx
	call clearl
	pop bx	
	mov ah,conout
	mov dl,bell
	int dos
	mov cl,0
	jmp input0
input2:	dec bx			; 'Remove' from buffer.
	mov ah,prstr	
	mov dx,offset clrspc
	int dos
	jmp input0		; Go get more.
input3:	cmp al,'U'-64		; Control-U?
	jne input4
	mov ah,prstr
	mov dx,offset pass+1
	int dos	
	push bx
	push cx
	call clearl		; Blank out the line. 
	pop cx
	pop bx
	mov cl,0		; Reset count to zero.
	mov bx,inpbuf		; Start at head of buffer.
	jmp input0
input4:	cmp al,0		; Two character sequence?
	jne input5
	mov ah,conin
	int dos			; Get second char.
	cmp al,83		; Delete key?
	je inpt40		; Yup. 
	cmp al,75		; Backarrow key?
	je inpt40
	call dodel		; Erase weird character.
	jmp input0		; And go on computing.
inpt40:	mov ah,prstr
	mov dx,offset delinp	; Erase weird character. 
	int dos
	jmp inpt11		; Remove the offending char.
input5: mov [bx],al		; Add char to buffer.
	inc cl			; Include in count.
	inc bx
	jmp input0
INPUT	ENDP

; Print data onto the screen.  If text has no "$" in it, just print
; it.  Else, do special output for the "$".  
; Routine expects: DI = Start of buffer we are to print.
;                  CX = Number of characters to print.   [21c]

PRTSCR	PROC	NEAR
	mov al,'$'		; This is what we're looking for.
	mov oloc,di		; Remember original buffer address. 
	mov osiz,cx		; And original size. 
	push es
	mov bx,ds
	mov es,bx		; Have ES point to data area.
prts0:	repnz scasb		; Search for "$" in the buffer.
	cmp cx,0		; Found one?
	je prts1		; No, do a regular DOS call.
	mov ah,prstr
	mov dx,oloc		; Print up to the "$". 
	int dos
	mov ah,dconio
	mov dl,'$'
	int dos			; Print the "$"
	mov oloc,di		; New starting location.
	mov osiz,cx		; New size.
	jmp prts0
prts1:	mov bx,oloc		; The buffer location.
	add bx,osiz		; Point past the data.
	mov [bx],al		; Add "$" for printing.
	mov ah,prstr
	mov dx,oloc
	int dos
	pop es
	ret
PRTSCR	ENDP

; Jumping to this location is like retskp.  It assumes the instruction
;   after the call is a jmp addr.
 
RSKP    PROC    NEAR
	pop bp
	add bp,3
	push bp
        ret
RSKP    ENDP
 
; Jumping here is the same as a ret.
 
R       PROC    NEAR
        ret
R       ENDP

code	ends
	end
```
{% endraw %}

## MSSET.ASM

{% raw %}
```
	public setcom, status, stat0, baudprt, escprt, prmptr, dodef
	public setcpt, docom, shomac, atoi
	include msdefs.h

setextra  equ	100
macmax	equ	20			; max # of macros

datas 	segment	public 'datas'
	extrn	comand:byte, flags:byte, trans:byte, cptfcb:byte, takadr:word
	extrn	taklev:byte, inichk:byte, portval:word, curdsk:byte
	extrn	setktab:byte, setkhlp:byte

kerm    db      'Kermit-MS>$'
crlf	db      cr,lf,'$'
crlfsp	db	cr,lf,' '	; crlf space
	db	'$'
eqs	db	' = $'
ermes1	db	cr,lf,'?Too many macros$'
ermes2	db	cr,lf,'?No room in table for macro$'
ermes3  db      cr,lf,'?Not confirmed$'
ermes4	db	cr,lf,'?No room in take stack to expand macro$'
ermes5	db	cr,lf,'?Not implemented$'
erms23	db	cr,lf,'?Null input not allowed$' ;[jd] 
erms24	db	cr,lf,'?Capture file already open (use close command)$' ;[jd]
erms25	db	cr,lf,'?Input must be numeric$' 
filhlp	db	' Input file specification for session logging$'
macmsg	db	' Specify macro name followed by body of macro $'
shmmsg	db	' Confirm with carriage return $'
prmmsg	db	' Enter new prompt string $'
sk1msg	db	' Decimal scan code for key $'
sk2msg	db	' Redefinition string for key $'
prterr	db	'?Unrecognized value$'
unrec	db	'Baud rate is unknown$'
defpmp	db	'Definition string: $'
esctl	db	'Control-$'         ; [6]
nonmsg	db	'none$'
delmsg	db	'delete$'
onmsg	db	'On'
offmsg	db	'Off'
tmp	db	?,'$'
sum	db	0
min	db	0
max	db	0
desta	dw	0
numerr	dw	0
numhlp	dw	0
stflg	db	0		; Says if setting SEND or RECEIVE parameter.
srtmp	db	0
savsp	dw	0
temp	dw	0
temp1   dw      ?               ; Temporary storage.
temp2   dw      ?               ; Temporary storage.

locst   db      'Local echo $'
belon	db	'Ring bell after transfer$'
beloff	db	'No bell after transfer$'
vtemst  db	'HEATH-19 emulation $'
cm1st	db	'Communications port: 1$'
cm2st	db	'Communications port: 2$'
capmsg	db	'Session logging $'
eofmsg	db	'EOF mode: $'
flost	db	'No flow control used$'
floxmsg	db	'Flow control: XON/XOFF $'
handst	db	'Handshake used: $'
destst	db	'File destination: $'
diskst	db	'Default disk: $'
blokst	db	'Block check used: $'
ebyst	db	'8-bit quoting done only on request$'
ebvst	db	'8-bit quoting will be done with: $'
sqcst	db	'Send cntrl char prefix: $'
rqcst	db	'Receive cntrl char prefix: $'
debon	db	'Debug mode $'
flwon	db	'Warning $'
parmsg	db	'Parity $'
abfdst	db	'Discard incomplete file$'
abfkst	db	'Keep incomplete file$'
eolst	db	'End-of-line character: $'
ssohst	db	'Send start-of-packet char: $'
rsohst	db	'Receive start-of-packet char: $'
stimst	db	'Send timeout (seconds): $'
rtimst	db	'Receive timeout (seconds): $'
spakst	db	'Send packet size: $'
rpakst	db	'Receive packet size: $'
snpdst	db	'# of send pad chars: $'
rnpdst	db	'# of receive pad chars: $'
timmsg	db	'Timer $'
escmes  db      'Escape character: $'
b03st	db	'Baud rate is 300$'
b12st	db	'Baud rate is 1200$'
b18st	db	'Baud rate is 1800$'
b24st	db	'Baud rate is 2400$'
b48st	db	'Baud rate is 4800$'
b96st	db	'Baud rate is 9600$'
b04st	db	'Baud rate is 45.5$'
b05st	db	'Baud rate is 50$'
b07st	db	'Baud rate is 75$'
b11st	db	'Baud rate is 110$'
b13st	db	'Baud rate is 134.5$'
b15st	db	'Baud rate is 150$'
b06st	db	'Baud rate is 600$'
b20st	db	'Baud rate is 2000$'
b19st	db	'Baud rate is 19200$'
b38st	db	'Baud rate is 38400$'

eolhlp	db	cr,lf,'Decimal number between 0 and 31$'
eolerr	db	cr,lf,'Illegal end-of-line character$'
timerr	db	cr,lf,'Illegal timeout value$' 
timhlp	db	cr,lf,'Decimal number between 0 and 94$'
soherr	db	cr,lf,'Illegal start-of-packet character$'
quohlp	db	cr,lf,'Decimal number between 33 and 126$'
quoerr	db	cr,lf,'Illegal control character prefix$'
pakerr	db	cr,lf,'Illegal packet length$'
pakhlp	db	cr,lf,'Decimal number between 20 and 94$'
npderr	db	cr,lf,'Illegal number of pad characters$'
npdhlp	db	cr,lf,'Decimal number between 0 and 99$'
paderr	db	cr,lf,'Illegal pad character$'
padhlp	db	cr,lf,'Decimal number between 0 and 31 or 127$'
eschlp  db      cr,lf,'Enter literal value (ex: Cntrl ])  $'
desterr	db	cr,lf,'Illegal destination device$'
dskhlp	db	cr,lf,'Default disk drive to use, such as A:$'
dskerr	db	cr,lf,'Invalid drive specification$' 

sethlp	db      cr,lf,'BAUD rate'	
	db	cr,lf,'BELL'
	db	cr,lf,'BLOCK-CHECK-TYPE'
	db	cr,lf,'DEBUG'
	db	cr,lf,'DEFAULT-DISK'
	db	cr,lf,'DESTINATION'
	db	cr,lf,'END-OF-LINE character'
	db	cr,lf,'EOF CTRL-Z or NOCTRL-Z'
	db      cr,lf,'ESCAPE character change'
	db	cr,lf,'FLOW-CONTROL'
	db	cr,lf,'HANDSHAKE'
        db      cr,lf,'HEATH-19'
	db	cr,lf,'INCOMPLETE file'
	db	cr,lf,'KEY' 
        db      cr,lf,'LOCAL-ECHO echoing (half-duplex)'
	db	cr,lf,'PARITY type'
	db	cr,lf,'PORT for communication'
	db	cr,lf,'PROMPT'
	db	cr,lf,'RECEIVE parameter'
	db	cr,lf,'REMOTE on/off'
	db	cr,lf,'SEND parameter'
	db	cr,lf,'TAKE-ECHO' 
	db	cr,lf,'TIMER'
        db      cr,lf,'WARNING'
	db	'$'

settab  db      24
	mkeyw	'BAUD',baudst
	mkeyw	'BELL',bellst
	mkeyw	'BLOCK-CHECK-TYPE',blkset
	mkeyw	'DEBUG',debst
	mkeyw	'DEFAULT-DISK',dskset
	mkeyw	'DESTINATION',desset
	mkeyw	'END-OF-LINE',eolset
	mkeyw	'EOF',seteof
	mkeyw	'ESCAPE',escape
	mkeyw	'FLOW-CONTROL',floset
	mkeyw	'HANDSHAKE',hndset
	mkeyw	'HEATH19-EMULATION',vt52em
	mkeyw	'INCOMPLETE',abfset
	mkeyw	'KEY',setkey
	mkeyw	'LOCAL-ECHO',lcal
	mkeyw	'PARITY',setpar
	mkeyw	'PORT',comset
	mkeyw	'PROMPT',promset
	mkeyw	'RECEIVE',recset
	mkeyw	'REMOTE',remset
	mkeyw	'SEND',sendset
	mkeyw	'TAKE-ECHO',takset
	mkeyw	'TIMER',timset
	mkeyw	'WARNING',filwar

 
seoftab	db	2
	mkeyw	'CTRL-Z',1
	mkeyw	'NOCTRL-Z',0

stsrtb	db	06		; Number of options.
	mkeyw	'PACKET-LENGTH',srpack
	mkeyw	'PADCHAR',srpad
	mkeyw	'PADDING',srnpd
	mkeyw	'QUOTE',srquo
	mkeyw	'START-OF-PACKET',srsoh
	mkeyw	'TIMEOUT',srtim

ontab   db      02H             ; Two entries.
	mkeyw	'OFF',00H
	mkeyw	'ON',01H

destab	db	03H		; Three choices. [27c]
	mkeyw	'DISK',01H
	mkeyw	'PRINTER',00H
	mkeyw	'SCREEN',02H

; What type of block check to use.
blktab	db	03H
	mkeyw	'1-CHARACTER-CHECKSUM',1
	mkeyw	'2-CHARACTER-CHECKSUM',2
	mkeyw	'3-CHARACTER-CRC-CCITT',3

; If abort when receiving files, can keep what we have or discard. [20d]

abftab	db	02H		; Only two options. 
	mkeyw	'DISCARD',01H
	mkeyw	'KEEP',00H

partab	db	05H		; Five entries.			[10 start]
	mkeyw	'EVEN',PAREVN
	mkeyw	'MARK',PARMRK
	mkeyw	'NONE',PARNON
	mkeyw	'ODD',PARODD
	mkeyw	'SPACE',PARSPC

flotab	db	2
	mkeyw	'NONE',flonon
	mkeyw	'XON/XOFF',floxon

hndtab	db	7
	mkeyw	'BELL',bell
	mkeyw	'CR',cr
	mkeyw	'ESC',esc
	mkeyw	'LF',lf
	mkeyw	'NONE',0
	mkeyw	'XOFF',xoff
	mkeyw	'XON',xon

BStab	db	02H			;Two entries [19c start]
	mkeyw	'BACKSPACE',00H
	mkeyw	'DELETE',01H

bdtab	db	010H		; 16 entries
	mkeyw	'110',b0110
	mkeyw	'1200',b1200
	mkeyw	'134.5',b01345
	mkeyw	'150',b0150
	mkeyw	'1800',b1800
	mkeyw	'19200',b19200
	mkeyw	'2000',b2000
	mkeyw	'2400',b2400
	mkeyw	'300',b0300
	mkeyw	'38400',b38400
	mkeyw	'45.5',b00455
	mkeyw	'4800',b4800
	mkeyw	'50',b0050
	mkeyw	'600',b0600
	mkeyw	'75',b0075
	mkeyw	'9600',b9600

ten	dw	10			; multiplier for setatoi
rdbuf	db	80H DUP(?)
prm	db	30 dup(0)		; Buffer for new prompt.
prmptr	dw	kerm			; pointer to prompt
defkw	db	100 dup (?)
macnum	dw	0			; one macro yet
mactab	dw	ibmmac			; default ibm mac is macro 0
	dw	macmax dup (?)		; empty macro table
defptr	dw	macbuf
macbuf	db	macmax*100 dup (?)	; buffer for macro defs
rmlft	db	setextra		; space left in set table
mcctab	db	1			; macro cmd table, one initially
	mkeyw	'IBM',0			; macro # 0
	db	setextra dup (?)	; room for more.

ibmmac	db	imlen-1
	db	'set timer on',cr,'set parity mark',cr
	db	'set local-echo on',cr,'set handshake xon',cr
	db	'set flow none',cr
imlen	equ	$-ibmmac

; structure for status information
stent	struc
sttyp	dw	?		; type (actually routine to call)
msg	dw	?		; message to print
val2	dw	?		; needed value: another message, or tbl addr
tstcel	dw	?		; address of cell to test, in data segment
basval	dw	0		; base value, if non-zero
stent	ends

sttab	stent	<onoff,vtemst,,flags.vtflg>
	stent	<onoff,locst,,ecoflg,portval>
	stent	<baudprt>
	stent	<srchkw,parmsg,partab,parflg,portval>
	stent	<onechr,escmes,,trans.escchr>
	stent	<onoff,capmsg,,flags.capflg>
	stent	<msg2,flost,floxmsg,floflg,portval>
	stent	<prhnd>
	stent	<srchkw,destst,destab,flags.destflg>
	stent	<drnum,diskst,,curdsk>
	stent	<onoff,flwon,,flags.flwflg>
	stent	<msg2,beloff,belon,flags.belflg>
	stent	<msg2,abfkst,abfdst,flags.abfflg>
	stent	<srchkw,eofmsg,seoftab,flags.eofcz>
	stent	<onechr,sqcst,,trans.rquote>
	stent	<onechr,rqcst,,trans.squote>
	stent	<onechr,rsohst,,trans.rsoh>
	stent	<onechr,ssohst,,trans.ssoh>
	stent	<stnum,rtimst,,trans.rtime>
	stent	<stnum,stimst,,trans.stime>
	stent	<stnum,rpakst,,trans.rpsiz>
	stent	<stnum,spakst,,trans.spsiz>
	stent	<stnum,snpdst,,trans.spad>
	stent	<stnum,rnpdst,,trans.rpad>
	stent	<onoff,timmsg,,flags.timflg>
	stent	<pr8bit>
	stent	<onechr,eolst,,trans.seol>
	stent	<srchkw,blokst,blktab,trans.chklen>
	stent	<msg2,cm2st,cm1st,flags.comflg>
	stent	<onoff,debon,,flags.debug>
	dw	0		; end of table
sttbuf	db	2000 dup (?)	; big buffer for status msg.
datas	ends

code	segment	public
	extrn cmcfrm:near, prserr:near, comnd:near, dobaud:near
	extrn cmgtch:near, repars:near, coms:near, vts:near, defkey:near
	extrn inicpt:near, prompt:near, nout:near, prtscr:near
	extrn prkey:near, getbaud:near
	assume	cs:code,ds:datas

; This is the SET command.
 
SETCOM  PROC    NEAR
        mov dx,offset settab    ; Parse a keyword from the set table.
        mov bx,offset sethlp
        mov ah,cmkey
        call comnd
         jmp r
        call bx
	 nop
	 nop
	 nop
	jmp rskp
SETCOM	endp

docom	proc	near
	mov	dx,offset mcctab
	mov	bx,0
	mov	ah,cmkey
	call	comnd
	 jmp	r
	push	bx
	mov	ah,cmcfm
	call	comnd
	 pop	bx
	 ret
	 nop
	pop	bx
	cmp	taklev,maxtak		; room in take level?
	jl	docom2			; yes, continue
	mov	dx,offset ermes4	; else complain
	jmp	reterr
docom2:	inc	taklev			; increment take level (overflow)
	add	takadr,size takinfo
	shl	bx,1
	mov	si,mactab[bx]		; point to macro
	mov	cl,[si]			; get size from macro
	mov	ch,0
	inc	si			; point to actual definition
	mov	bx,takadr		; point to current buffer
	mov	[bx].takfcb,0ffh	; flag as a macro
	mov	[bx].takptr,si		; point to beginning of def
	mov	[bx].takchl,cl		; # of chars left in buffer
	mov	[bx].takcnt,cx		; and in definition
	mov	word ptr [bx].takcnt+2,0 ; zero high order...
	jmp	rskp
docom	endp
 
; the define command
dodef	proc	near
	cmp	macnum,macmax		; get current macro count
	jl	dode1			; no, go on
	mov	dx,offset ermes1	; else complain
	jmp	reterr			; and return

dode1:	mov	ah,cmtxt
	mov	bx,offset defkw+1	; buffer for keyword
	mov	dx,offset macmsg
	call	comnd
	 ret
	 nop
	 nop
	cmp	ah,0
	jne	dode2
	ret
dode2:	push	es
	mov	bx,ds
	mov	es,bx
	cld
	mov	cl,ah
	mov	ch,0			; length
	mov	si,offset defkw+1	; pointer to keyword
	mov	ah,0			; # of chars in keyword
; uppercase keyword, look for end
dode3:	lodsb				; get a byte
	cmp	al,'a'
	jb	dode4
	cmp	al,'z'
	ja	dode4
	sub	al,'a'-'A'
	mov	[si-1],al		; uppercase if necessary
dode4:	inc	ah			; increment word count
	cmp	al,' '			; is it the break character?
	loopne	dode3			; no, loop thru rest of word
dode5:	jne	dode6			; ended with break char?
	dec	ah			; yes, don't count in length
dode6:	mov	defkw,ah		; store length in front of it
	add	ah,4			; add keyword overhead length
	cmp	ah,rmlft		; will it fit in buffer
	jb	dode7			; yes, keep going
	pop	es
	mov	dx,offset ermes2	; else complain
	jmp	reterr

dode7:	sub	rmlft,ah		; subtract space used in tbl
	mov	di,defptr		; pointer to free space
	inc	macnum			; count the macro
	mov	bx,macnum
	shl	bx,1			; double for word idx!!!
	mov	mactab[bx],di		; install into table
	mov	[di],cl			; store length
	inc	di
	jcxz	dode10			; no copy if 0 length

; copy definition into buffer, changing commas to crs
dode8:	lodsb				; get a byte
	cmp	al,','			; comma?
	jne	dode9			; no, keep going
	mov	al,cr			; else replace with cr
dode9:	stosb
	loop	dode8			; keep copying

dode10:	mov	defptr,di		; update free ptr
	mov	bl,defkw
	mov	bh,0
	lea	di,defkw+1[bx]		; end of keyword
	mov	al,'$'
	stosb
	mov	ax,macnum
	stosb				; low-order
	mov	al,0			; high-order is always 0.
	stosb

; now install into table
	pop	es
	mov	bx,offset mcctab
	mov	dx,offset defkw
	call	addtab
	jmp	rskp
dodef	endp

; add an entry to a keyword table
; enter with bx/ table address, dx/ ptr to new entry
; no check is made to see if the entry fits in the table.
addtab	PROC	NEAR
	push	es
	cld
	mov	ax,ds
	mov	es,ax		; address data segment
	mov	bp,bx		; remember where tbl starts
	mov	cl,[bx]		; pick up length of table
	mov	ch,0
	inc	bx		; point to actual table...
addta1:	push	cx		; preserve count
	mov	si,dx		; point to entry
	lodsb			; get length of new entry
	mov	cl,[bx]		; and length of table entry...
	mov	ah,0		; assume they're the same size
	cmp	al,cl		; are they the same?
	lahf			; remember result of comparison...
	jae	addta2		; is new smaller? no, use table length
	mov	cl,al		; else use length of new entry
addta2:	mov	ch,0
	lea	di,[bx+1]	; point to actual keyword
	repe	cmpsb		; compare strings
	pop	cx		; restore count
	jb	addta4		; below, insert before this one
	jne	addta3		; not below or same, keep going
	sahf			; same. get back result of length comparison
	jb	addta4		; if new len is smaller, insert here
	jne	addta3		; if not same size, keep going
	mov	si,bx		; else this is where entry goes
	jmp	short addta6	; no insertion required...
addta3:	mov	al,[bx]
	mov	ah,0
	add	bx,ax		; skip this entry
	add	bx,4		; len + $ + value...
	loop	addta1		; and keep looking
addta4:	mov	si,bx		; this is first location to move
	mov	di,bx
	inc	ds:byte ptr [bp] ; remember we're adding one...
	jcxz	addta6		; no more entries, forget this stuff
	mov	bh,0		; this stays 0
addta5:	mov	bl,[di]		; get length
	lea	di,[bx+di+4]	; end is origin + length + 4 for len, $, value
	loop	addta5		; loop thru remaining keywords
	mov	cx,di
	sub	cx,si		; compute # of bytes to move
	push	si		; preserve loc for new entry
	mov	si,di		; first to move is last
	dec	si		; minus one
	mov	di,dx		; new entry
	mov	bl,[di]		; get length
	lea	di,[bx+si+4]	; dest is source + length of new + 4
	std			; move backwards
	rep	movsb		; move the table down
	cld			; put flag back
	pop	si
addta6:	mov	di,si		; this is where new entry goes
	mov	si,dx		; this is where it comes from
	mov	cl,[si]		; length
	mov	ch,0
	add	cx,4		; overhead bytes
	rep	movsb		; stick it in
	pop	es
	ret			; and return
addtab	endp

; Show defined macros.
SHOMAC	PROC	NEAR
	mov ah,cmtxt
	mov bx,offset rdbuf
	mov dx,offset shmmsg
	call comnd
	 jmp r 
	cmp ah,0		; Bare CR means show all macros.
	jne shom2		; No, he wants specific macro expanded.
	mov si,offset mcctab	; Table of macro names.
	lodsb
	mov cl,al		; Number of macro entries.
	mov ch,0
shom0:	jcxz shom1		; Done if none left to display.
	lodsb			; Length of macro name.
	push ax			; Don't forget it.
	mov ah,prstr
	mov dx,offset crlfsp	; Go to new line.
	int dos
	mov dx,si		; Print macro name.
	int dos
	mov dx,offset eqs
	int dos
	pop ax
	mov ah,0
	add si,ax		; Skip over name.
	inc si			; Get to macro number.
	mov bx,[si]		; Pick it up.
	call expmac		; Expand the macro.
	dec cx
	add si,2		; Skip over macro number.
	jmp shom0		; And do the rest.
shom1:	mov ah,prstr
	mov dx,offset crlf
	int dos
	jmp rskp
shom2:	mov ah,prstr
	mov dx,offset ermes3
	int dos
	jmp rskp
SHOMAC	ENDP

; Expand the macro, called with BX/macro number.
expmac:	push si
	push cx
	mov si,offset mactab	; Table of address expansions.
	shl bx,1		; Double and use as index into table.
	mov si,[si+bx]		; Get address of expansion in question.
	mov ax,si		; Address of string.
	inc ax			; Don't print length.
	mov cl,[si]		; Length of string.
	mov ch,0
	call prkey		; Print it.
	pop cx
	pop si
	ret

seteof	proc	near
	mov ah,cmkey
	mov bx,0
	mov dx,offset seoftab
	call comnd
	 jmp r
	push bx
	mov ah,cmcfm
	call comnd
	 jmp seteo1		; error return...
	 nop
	pop bx
	mov flags.eofcz,bl	; set value
	jmp rskp		; and return
seteo1:	pop bx
	ret
seteof	endp

;       This is the ESCAPE character SET subcommand.     [6 start]
 
ESCAPE  PROC    NEAR
	call cmgtch		; Get a char.
	cmp ah,0
	jns es1			; Terminator or no?
	and ah,7FH		; Turn off minus bit.
	cmp ah,'?'
	jne es0
	mov dx,offset eschlp
	mov ah,prstr
	int dos
	mov dx,offset crlf
	int dos
	mov dx,comand.cmprmp
	int dos
	mov bx,comand.cmdptr
	mov al,'$'
	mov [bx],al
	mov dx,offset comand.cmdbuf
	int dos
	dec comand.cmcptr		; Ignore dollar sign.
	dec comand.cmccnt
	mov comand.cmaflg,0
	jmp repars
es0:	mov ah,prstr
	mov dx,offset ermes3
	int dos
	ret
es1:  	mov temp,ax
	call cmcfrm
	 jmp es0
	 nop			; Take up 3 bytes.
	mov ax,temp
	mov trans.escchr,ah	; Save new value.
	ret
ESCAPE  ENDP			; [6 end]

; 	This is the End-of-line character SET subcommand.

EOLSET	PROC	NEAR
	mov min,0
	mov max,1FH
	mov sum,0
	mov tmp,10
	mov temp1,0
	mov desta,offset trans.seol
	mov numhlp,offset eolhlp
	mov numerr,offset eolerr
	jmp num0		; Common routine for parsing numerical input.
EOLSET	ENDP

num0:	call cmgtch		; Get the first char into AH.
	cmp ah,0
	js num1
	cmp ah,'0'
	jl num1
	cmp ah,'9'
	ja num1
	mov temp1,1
	sub ah,30H
	mov dl,ah
	mov al,sum
	mul tmp
	add al,dl
	mov sum,al
	jmp num0
num1:	and ah,7FH
	cmp ah,CR
	jne num2
	cmp temp1,0
	je num21
	mov al,sum
	cmp al,min
	jl num3
	cmp al,max
	jg num3
	mov bx,desta
	mov [bx],al
	ret
num2:	cmp ah,03FH		; Question mark?
	je num4
num21:	mov ah,prstr
	mov dx,offset ermes3
	int dos
	jmp prserr
num3:	mov ah,prstr
	mov dx,numerr
	int dos
	jmp prserr
num4:	mov ah,prstr
	mov dx,numhlp
	int dos
	mov dx,offset crlf
	int dos
	mov dx,comand.cmprmp
	int dos
	mov bx,comand.cmdptr
	mov al,'$'
	mov [bx],al
	mov dx,offset comand.cmdbuf
	int dos
	dec comand.cmcptr		; Don't count the dollar sign.
	dec comand.cmccnt		; Or the question mark.
	mov comand.cmaflg,0		; Check for more input.
	jmp repars
 
;       This is the LOCAL echo SET subcommand.
 
LCAL    PROC    NEAR
        mov dx,offset ontab
        mov bx,0
        mov ah,cmkey
        call comnd
         jmp r
        push bx                 ; Save the parsed value.
        mov ah,cmcfm
        call comnd              ; Get a confirm.
         jmp lcl0		;  Didn't get a confirm.
	 nop
        pop bx
	mov si,portval
        mov [si].ecoflg,bl     ; Set the local echo flag.
	mov [si].hndflg,bl	; This goes on/off with local echo.
	xor bl,01		; Toggle this.
	mov [si].floflg,bl	; This is the opposite.
	ret
lcl0:	pop bx
	ret
LCAL    ENDP
 
;       This is the VT52 emulation SET subcommand.
 
VT52EM  PROC    NEAR
	call vts
	ret
VT52EM  ENDP
 
; This is the SET subcommand to choose between COM1 and COM2. [19b]
  
COMSET  PROC    NEAR
	call coms
	ret
COMSET  ENDP

FILWAR  PROC    NEAR
        mov dx,offset ontab
        mov bx,0
        mov ah,cmkey
        call comnd
         jmp r
        push bx
        mov ah,cmcfm
        call comnd              ; Get a confirm.
         jmp fil0		; Didn't get a confirm.
	 nop
        pop bx
        mov flags.flwflg,bl     ; Set the filewarning flag.
	ret
fil0:	pop bx
	ret
FILWAR  ENDP

;       This is the SET aborted-file command.  [20d]
 
ABFSET  PROC    NEAR
        mov dx,offset abftab
        mov bx,0
        mov ah,cmkey
        call comnd
         jmp r
        push bx
        mov ah,cmcfm
        call comnd              ; Get a confirm.
         jmp abf0		;  Didn't get a confirm.
	 nop
        pop bx
        mov flags.abfflg,bl     ; Set the aborted file flag.
	ret
abf0:	pop bx
	ret
ABFSET  ENDP

;       This is the SET Parity command.				[10 start]
 
SETPAR  PROC    NEAR
        mov dx,offset partab
        mov bx,0
        mov ah,cmkey
        call comnd
         jmp r
        push bx
        mov ah,cmcfm
        call comnd              ; Get a confirm.
         jmp par0		;  Didn't get a confirm.
	 nop
        pop bx
	mov si,portval
        mov [si].parflg,bl	; Set the parity flag.
	cmp bl,parnon		; Resetting parity to none? [21b]
	je setp0		; Yes, reset 8 bit quote character. [21b]
	mov trans.ebquot,dqbin	; Else, do quoting.  [21b]
	ret			; That's it.  [21b]
setp0:	mov trans.ebquot,'Y'	; If none, say will quote upon request. [21b]
	ret
par0:	pop bx
	ret
SETPAR  ENDP							; [10 end]

; Sets debugging mode on and off.

DEBST	PROC    NEAR
        mov dx,offset ontab
        mov bx,0
        mov ah,cmkey
        call comnd
         jmp r
        push bx
        mov ah,cmcfm
        call comnd              ; Get a confirm.
         jmp deb0		; Didn't get a confirm.
	 nop
        pop bx
        mov flags.debug,bl	; Set the DEBUG flag.
	ret
deb0:	pop bx
	ret
DEBST   ENDP

; Turn bell on or off.    [17a start]

BELLST	PROC	NEAR
	mov dx,offset ontab
	mov bx,0
	mov ah,cmkey
	call comnd
	 jmp r
	push bx
	mov ah,cmcfm
	call comnd
	 jmp bel0
	 nop
	pop bx
	mov flags.belflg,bl
	ret
bel0:	pop bx
	ret
BELLST	ENDP                      ;  [17a end]

; Toggle echo'ing of TAKE file to be either ON or OFF.
TAKSET	PROC	NEAR
	mov dx,offset ontab
	mov bx,0
	mov ah,cmkey
	call comnd
	 jmp r
	push bx
	mov ah,cmcfm
	call comnd
	 jmp tak0
	 nop
	pop bx
	mov flags.takflg,bl
	ret
tak0:	pop bx
	ret
TAKSET	ENDP                      ;  [17a end]

; Set timer ON/OFF during file transfer.
TIMSET	PROC	NEAR
	mov dx,offset ontab
	mov bx,0
	mov ah,cmkey
	call comnd
	 jmp r
	push bx
	mov ah,cmcfm
	call comnd
	 jmp tim0
	 nop
	pop bx
	mov flags.timflg,bl
	ret
tim0:	pop bx
	ret
TIMSET	ENDP                      ;  [17a end]

; Allow user to change the "Kermit-MS>" prompt.
PROMSET	PROC	NEAR
	mov ah,cmtxt
	mov bx,offset prm		; Read in the prompt.
	mov dx,offset prmmsg
	call comnd
	 jmp r
	cmp ah,0			; Just a bare CR?
	jne prom0
	mov ax,offset kerm
	jmp prom1
prom0:	mov byte ptr [bx],'$'		; End of string.
	mov ax,offset prm
prom1:	mov prmptr,ax			; Remember it.
	jmp rskp
PROMSET	ENDP

; Set Flow-Control subcommand.
FLOSET	PROC	NEAR
        mov dx,offset flotab
  	xor bx,bx
        mov ah,cmkey
        call comnd
         jmp r
        push bx
        mov ah,cmcfm
        call comnd              ; Get a confirm.
         jmp flox		; Didn't get a confirm.
	 nop
        pop bx
	mov si,portval
	mov [si].flowc,bx	; Flow control value.
	cmp bx,0		; Turning it off?
	je flo0			; Yes.
        mov [si].floflg,1	; Say we're doing flow control.
	mov [si].hndflg,0	; So don't do handshaking.
	ret
flo0:	mov [si].floflg,bl	; Say we're not doing flow control.
	ret
flox:	pop bx
	ret
FLOSET	ENDP

; Set Handshake subcommand.
HNDSET	PROC	NEAR
        mov dx,offset hndtab
        mov bx,0
        mov ah,cmkey
        call comnd
         jmp r
        push bx
        mov ah,cmcfm
        call comnd              ; Get a confirm.
         jmp hndx		; Didn't get a confirm.
	 nop
        pop bx
	mov si,portval
	cmp bl,0		; Setting handshake off?
	je hnd0			; Yes.
	mov [si].floflg,0	; Else, turn flow control off.
	mov [si].hndflg,1	; And turn on handshaking.
	mov [si].hands,bl	; Use this char as the handshake.
	ret
hnd0:	mov [si].hndflg,0	; No handshaking.
	mov [si].floflg,1	; If one is off, the other is on.
	ret
hndx:	pop bx
	ret
HNDSET	ENDP

; Set block check type sub-command.
BLKSET	PROC	NEAR
        mov dx,offset blktab
        mov bx,0
        mov ah,cmkey
        call comnd
         jmp r
        push bx
        mov ah,cmcfm
        call comnd              ; Get a confirm.
         jmp blk0		; Didn't get a confirm.
	 nop
        pop bx
	mov trans.chklen,bl	; Use this char as the handshake.
	mov inichk,bl		; Save here too.
	ret
blk0:	pop bx
	ret
BLKSET	ENDP

; Set destination for incoming file.
DESSET	PROC	NEAR
        mov dx,offset destab
        mov bx,0
        mov ah,cmkey
        call comnd
         jmp r
        push bx
        mov ah,cmcfm
        call comnd              ; Get a confirm.
         jmp des0		; Didn't get a confirm.
  	 nop
        pop bx
        mov flags.destflg,bl	; Set the destination flag.
	cmp bl,2		; Is dest the screen? [27c]
	jne desa		; No, then done. [27c]
	mov flags.xflg,1	; Remember it here. [27c]
	ret
desa:	mov flags.xflg,0	; Don't write to screem [27c]
	ret
des0:	pop bx
	ret
DESSET	ENDP

; Set default disk for sending/receiving, etc.
DSKSET	PROC	NEAR
	mov comand.cmcr,1	; Don't want filename specified.
	mov ah,cmifi		; Parse for drive specification.
	mov dx,offset rdbuf	; Read into handy buffer.
	mov bx,offset dskhlp	; Text of help message.
	call comnd
	 jmp r
	mov ah,cmcfm
	call comnd
	 jmp r
	cmp flags.nmoflg,0	; Fail if specified file name.
	je dsk1
dsk0:	mov ah,prstr
	mov dx,offset dskerr	; Illegal drive specification.
	int dos
	ret
dsk1:	mov bx,offset rdbuf
	mov ah,[bx]		; Get the drive they said to use.
	cmp ah,0		; Did they type a bare CR?
	je dsk0			; Yes, complain.
	mov curdsk,ah		; And remember it.
	dec ah
	mov dl,ah
	mov ah,seldsk
	int dos
	ret
DSKSET	ENDP	

;  This function sets the baud rate.

BAUDST  PROC    NEAR
        mov dx,offset bdtab
        mov bx,0
        mov ah,cmkey
        call comnd
         jmp r
	push bx
	mov ah,cmcfm
	call comnd		; Get a confirm.
	 jmp bau0		; Didn't get one.
 	 nop
	pop bx
	mov si,portval
	mov ax,[si].baud	; Remember original value. [25]
	mov [si].baud,bx	; Set the baud rate.
	call dobaud		; Use common code. [19a] 
	ret
bau0:	pop bx
	ret
BAUDST  ENDP

SENDSET	PROC	NEAR
	mov stflg,'S'		; Setting SEND parameter 
sndst0: mov dx,offset stsrtb    ; Parse a keyword.
        mov bx,0
        mov ah,cmkey
        call comnd
         jmp r
        call bx
	 nop
	 nop
	 nop
	jmp rskp
SENDSET	ENDP

recset:	mov stflg,'R'		; Setting RECEIVE paramter.
	jmp sndst0

remset	proc	near
	mov	ah,cmkey
	mov	dx,offset ontab
	mov	bx,0
	call	comnd
	 jmp	r
	push	bx		; save parsed value
	mov	ah,cmcfm
	call	comnd		; confirm
	 pop	bx
	 ret			; return on failure
	 nop
	pop	bx
	mov	flags.remflg,bl	; set remote setting
	jmp	rskp		; and return
remset	endp

; Set send/receive start-of-header.
srsoh:	mov min,0
	mov max,1FH
	mov sum,0
	mov tmp,10
	mov desta,offset trans.ssoh	; Assume SEND.
	cmp stflg,'S'			; Setting SEND paramter?
	je srsoh0
	mov desta,offset trans.rsoh
srsoh0:	mov numhlp,offset eolhlp	; Reuse help message.
	mov numerr,offset soherr
	mov temp1,0
	jmp num0		; Common routine for parsing numerical input.

; Set send/receive timeout.
srtim:	mov min,0
	mov max,94
	mov sum,0
	mov tmp,10
	mov desta,offset trans.stime	; Assume SEND.
	cmp stflg,'S'			; Setting SEND paramter?
	je srtim0
	mov desta,offset trans.rtime
srtim0:	mov numhlp,offset timhlp	; Reuse help message.
	mov numerr,offset timerr
	mov temp1,0
	jmp num0		; Common routine for parsing numerical input.

; Set send/receive packet length.
srpack:	mov min,20
	mov max,94
	mov sum,0
	mov tmp,10
	mov desta,offset trans.spsiz
	cmp stflg,'S'		; Setting SEND paramter?
	je srpak0
	mov desta,offset trans.rpsiz
srpak0:	mov numhlp,offset pakhlp
	mov numerr,offset pakerr
	mov temp1,0
	jmp num0		; Parse numerical input.

; Set send/receive number of padding characters.
srnpd:	mov min,0
	mov max,99
	mov sum,0
	mov tmp,10
	mov desta,offset trans.spad
	cmp stflg,'S'		; Setting SEND paramter?
	je srnpd0
	mov desta,offset trans.rpad
srnpd0:	mov numhlp,offset npdhlp
	mov numerr,offset npderr
	mov temp1,0
	jmp num0		; Parse numerical input.

; Set send/receive padding character.
srpad:	mov min,0
	mov max,127
	mov sum,0
	mov tmp,10
	mov srtmp,0FFH		; Haven't seen anything yet.
	mov desta,offset srtmp
	mov numhlp,offset padhlp
	mov numerr,offset paderr
	mov temp1,0
	mov savsp,sp
	call num0		; Parse numerical input.
	mov sp,savsp
	mov temp,offset trans.spadch
	cmp stflg,'S'
	je srpad1
	mov temp,offset trans.rpadch
srpad1:	mov bx,offset srtmp
	mov ah,[bx]
	cmp ah,0FFH		; Did they end up not doing the command?
	je srpad3
	cmp ah,127		; This is allowed.
	je srpad2
	cmp ah,32
	jb srpad2		; Between 0 and 31 is OK too.
	mov ah,prstr
	mov dx,offset paderr
	int dos
	ret
srpad2:	mov bx,temp		; Set the real pad char.
	mov [bx],ah
srpad3:	ret

; Set send/receive control character prefix.
srquo:	mov min,33
	mov max,126
	mov sum,0
	mov tmp,10
	mov desta,offset trans.rquote	; Used for outgoing packets.
	cmp stflg,'S'			; Setting outgoing quote char?
	je srquo0	
	mov desta,offset trans.squote	; For incoming quote char.
srquo0:	mov numhlp,offset quohlp
	mov numerr,offset quoerr
	mov temp1,0
	jmp num0			; Parse numerical input.

;       This is the STATUS command.
 
STATUS  PROC    NEAR
        mov ah,cmcfm
        call comnd              ; Get a confirm.
         jmp r                  ;  Didn't get a confirm.
	mov dx,offset crlf
	mov ah,prstr
	int dos			; initial crlf
        call stat0
	mov cx,di		; End of buffer
	sub cx,ax		; Get length of buffer.
	dec cx			; Account for null.
	mov di,ax		; Buffer pointer.
	call prtscr		; Put data onto the screen. 
        jmp rskp
STATUS	ENDP
 
; Return a pointer to status message in AX, ptr to end in DI.

STAT0   PROC    NEAR
	push	es
	mov	ax,ds
	mov	es,ax		; address data segment
	cld			; make sure strings go the right way
	mov	di,offset sttbuf ; point to destination buffer
	mov	bx,offset sttab	; table to control printing
	mov	al,' '		; start with a space
	stosb			; in the buffer
	mov	ax,0		; need-new-line flag
stat01:	cmp	word ptr [bx],0	; end of table?
	je	stat02		; yes, exit routine
	push	bx
	push	di		; remember important values
	push	ax
	call	[bx].sttyp	; call the appropriate routine
	pop	ax
	pop	cx		; return buffer value
	pop	bx		; and ptr
	or	ax,ax		; do we need a newline?
	jne	stat03		; yes, go put one in
	sub	cx,di		; else see how many columns they used
	add	cx,40		; this is where we'd like to be
; if cx is negative here, we have a problem...
	mov	al,' '
	rep	stosb		; add right # of spaces
	mov	ax,1		; note we need a newline next time
	jmp	short stat04	; and keep looping around
stat03:	mov	cx,3
	mov	si,offset crlfsp
	rep	movsb		; append crlf to string
	xor	ax,ax		; reset newline flag
stat04:	add	bx,size stent	; advance to next one
	jmp	stat01
stat02:	mov	al,0		; end buffer
	stosb
	mov	ax,offset sttbuf
	pop	es		; restore this
	ret			; and return
STAT0	ENDP

; handler routines for status
; all are called with di/ destination buffer, bx/ stat ptr.  They
; can change any register but the segment registers, must update
; di to the end of the buffer.

; copy the message into the buffer
stmsg	proc	near
	mov	si,[bx].msg	; get message address
stms1:	lodsb			; get a byte
	stosb			; drop it off
	cmp	al,'$'		; end of message?
	jne	stms1		; no, keep going
	dec	di		; else back up ptr
	ret			; and return
stmsg	endp

; get address of test value in stent.  Returns address in si
stval	proc	near
	mov	si,[bx].basval	; get base value
	cmp	si,0		; any there?
	je	stva1		; no, keep going
	mov	si,[si]		; yes, use as base address
stva1:	add	si,[bx].tstcel	; add offset of test cell
	ret			; and return it
stval	endp

; print a single character
onechr	proc	near
	call	stmsg		; copy message part first
	call	stval		; pick up test value address
	mov	al,[si]		; this is char to print
	cmp	al,' '		; printable?
	jae	onech1		; yes, keep going
	add	al,64		; make printable.
	mov	byte ptr [di],'^'
	inc	di		; note ctrl char
onech1:	stosb			; drop char off
	ret			; and return
onechr	endp

; numeric field...
stnum	proc	near
	call	stmsg		; copy message
	call	stval		; pick up value address
	mov	al,[si]		; get value
	mov	ah,0		; high order is 0
	call	outnum		; put number into buffer
	ret			; and return
stnum	endp

; translate the number in ax...
outnum	proc	near
	cwd
	mov	bx,10
	div	bx		; divide to get digit
	push	dx		; save remainder digit
	or	ax,ax		; test quotient
	jz	outnu1		; zero, no more of number
	call	outnum		; else call for rest of number
outnu1:	pop	ax		; get digit back
	add	al,'0'		; make printable
	stosb			; drop it off
	ret			; and return
outnum	endp

; on/off field
onoff	proc	near
	call	stmsg		; copy message
	call	stval		; get value cell
	mov	al,[si]
	mov	si,offset onmsg
	mov	cx,2		; assume 2-byte 'ON' message
	or	al,al		; test value
	jnz	onof1		; on, have right msg
	mov	si,offset offmsg
	mov	cx,3
onof1:	rep	movsb		; copy right message in
	ret			; and return
onoff	endp

; print first message if false, second if true
msg2	proc	near
	call	stval		; get value cell
	mov	al,[si]
	mov	si,[bx].msg	; assume off
	or	al,al		; is it?
	jz	msg21		; yes, continue
	mov	si,[bx].val2	; else use alternate message
msg21:	jmp	stms1		; handle copy and return
msg2	endp

; search a keyword table for a value, print that value
srchkw	proc	near
	call	stmsg		; first print message
	call	stval
	mov	al,[si]		; get value to hunt for
	mov	ah,0		; high order is 0
	mov	bx,[bx].val2	; this is table address
	jmp	prttab		; and look in table.
srchkw	endp

; Print the drive name.
drnum	proc	near
	call	stmsg		; copy message part first
	call	stval		; pick up test value address
	mov	al,[si]		; this is char to print
	add	al,'@'		; Make it printable.
	stosb
	mov	byte ptr [di],':'
	inc	di		; end with a colon
	ret			; and return
drnum	endp

; print 8-bit quoting
pr8bit	proc	near
	mov	bl,trans.ebquot	; get quote char
	mov	si,offset ebyst	; assume no 8-bit quoting
	cmp	bl,'Y'		; on request only?
	je	pr8bi1		; yes, continue
	mov	si,offset ebvst	; else variable
pr8bi1:	call	stms1		; copy message in
	cmp	bl,'Y'		; not doing it?
	je	pr8bi2		; no, forget this part
	mov	[di],bl		; else drop off char too
	inc	di
pr8bi2:	ret			; and return
pr8bit	endp

; Print the handshake.
prhnd:	mov si,offset handst	; copy in initial message
	call stms1
	mov si,offset nonmsg	; assume no handshake
	mov bx,portval
	cmp [bx].hndflg,0	; Is handshaking in effect?
	jne prh0		; Yes, print what we're using.
	jmp stms1		; no, say so and return
prh0:	mov al,'^'		; Doing handshaking with control char.
	stosb
	mov al,[bx].hands
	add al,40H		; Make printable.
	stosb			; put in buffer
	ret			; and return

; Print the pad character in AL.
prpad:	cmp al,127		; Are they using a delete?
	jne prpad0
	mov ah,prstr
	mov dx,offset delmsg
	int dos
	ret
prpad0:	mov dl,'^'
	mov ah,conout
	push ax
	int dos
	pop ax
	mov dl,al
	add dl,40H		; Make printable.
	int dos
	ret

; Print value from table.  BX/address of table, AL/value of variable.
prttab:	mov cl,[bx]		; Number of entries in our table.
	inc bx			; Point to the data.
prtt0:	mov dl,[bx]		; Length of keyword.
	inc bx			; Point to keyword.
	mov dh,0
	inc dx			; Account for "$" in table.
	mov si,dx		; Put to index register.
	cmp ax,[bx+si]		; Is this the one?
	je prtt1
	add bx,dx		; Go to end of keyword.
	add bx,2		; Point to next keyword.
	dec cl			; Any more keywords to check?
	jnz prtt0		; Yes, go to it.
	mov bx,offset prterr
prtt1:	mov si,bx
prtt2:	jmp stms1		; copy in message
	ret			; and return

;	This routine prints out the escape character in readable format.  

ESCPRT	PROC	NEAR		; [6 start]
	mov dl,trans.escchr
	cmp dl,' '
	jge escpr2
	push dx
	mov ah,prstr
	mov dx,offset esctl
	int dos
	pop dx
	add dl,040H		; Make it printable.
escpr2:	mov ah,conout
	int dos
	ret
ESCPRT	ENDP			; [6 end]
 
; Print information on the baud rate. [19a]

BAUDPRT	PROC	 NEAR
	call getbaud		; read baud rate first
	mov si,portval
	mov ax,[si].baud
	mov dx,offset b48st	; Assume 4800 baud.
	cmp ax,B4800
	jnz bdprt0
	jmp bdprt2
bdprt0:	mov dx,offset b12st
	cmp ax,B1200
	jnz bdprt1
	jmp bdprt2
bdprt1:	mov dx,offset b18st
	cmp ax,B1800
	jz bdprt2
	mov dx,offset b24st
	cmp ax,B2400
	jz bdprt2
	mov dx,offset b96st
	cmp ax,B9600
	jz bdprt2
	mov dx,offset b03st
	cmp ax,B0300
	jz bdprt2
	mov dx,offset b04st
	cmp ax,B00455
	jz bdprt2
	mov dx,offset b05st
	cmp ax,B0050
	jz bdprt2
	mov dx,offset b07st
	cmp ax,b0075
	jz bdprt2
	mov dx,offset b11st
	cmp ax,B0110
	jz bdprt2
	mov dx,offset b13st
	cmp ax,B01345
	jz bdprt2
	mov dx,offset b15st
	cmp ax,B0150
	jz bdprt2
	mov dx,offset b06st
	cmp ax,B0600
	je bdprt2
	mov dx,offset b20st
	cmp ax,B2000
	jz bdprt2
	mov dx,offset b19st
	cmp ax,B19200
	jz bdprt2
	mov dx,offset b38st
	cmp ax,B38400
	jz bdprt2
	mov dx,offset unrec	; Unrecognized baud rate.
bdprt2:	mov si,dx		; this is baud rate
bdprt3:	jmp stms1		; go copy it and return
BAUDPRT	ENDP
 
setkey	proc	near		
	cmp	setktab,0	; any table?
	jne	setk0		; yes, use it
	mov	dx,offset ermes5
	jmp	reterr		; else print error message
setk0:	mov	dx,offset setktab	; set key options
	mov	bx,offset setkhlp
	mov	ah,cmkey
	call	comnd
	 jmp	r
	cmp	bx,-1		; do we have scan code?
	jne	setk1		; yes, skip this part

	mov	ah,cmtxt
	mov	bx,offset rdbuf	; handy buffer
	mov 	dx,offset sk1msg
	call	comnd
	 jmp	r		; fail return
	mov	si,offset rdbuf	; this is parsed number
	call	atoi		; Convert input to real number.
	 jmp	reterr		; No good.
	mov	bx,ax		; put accumulation into bl
setat3:	cmp	bx,0		; is scan code 0?
	jne	setk2		; no, have scan code, look for def

setk1:	push	bx		; save our scan code
	mov	ah,cmcfm
	call	comnd
	 jmp 	short setkx	; no good, pop bx and return
	nop			; waste a byte
	pop	bx
; scan code is in bl, ask for string part
setk2:	push	bx
	mov	dx,offset defpmp
	call	prompt
	mov	ah,cmtxt
	mov	bx,offset rdbuf
	mov	dx,offset sk2msg
	call	comnd		; read the definition
	 jmp	short setkx	; pop bx and fail return
	 nop
	mov	cl,ah
	mov	ch,0		; set up length of definition
	pop	ax		; get scan code back
	mov	si,offset rdbuf	; point to definition
	call	defkey		; go define the key
	ret			; use ret for now...
	jmp	rskp		; and return
setkx:	pop	bx		; pop junk off stack
	ret			; and return
setkey	endp

; Convert input in buffer pointed to by SI to real number which is returned
; in AX.  Return on failure, return skip on success.
ATOI	PROC	NEAR
	mov	cl,ah		; Number of chars of input.
	mov	ch,0		; size of string
	jcxz	atoi4		; Fail on no input.
	mov	ax,0		; init sum
	mov	bh,0		; high order of this stays 0.
	mov	tmp,0		; No input yet. [27f]
atoi0:	xchg	al,bl		; save current sum
	lodsb			; grab a byte
	cmp	al,' '		; leading space?
	jne	atoi1		; no, continue
	xchg	al,bl		; put sum back
	jmp	short atoi2	; and continue loop
atoi1:	cmp	al,'9'
	ja	atoi5		; out of range, fail
	cmp	al,'0'
	jb	atoi5
	xchg	al,bl		; put sum back into al
	mul	ten		; shift one digit
	sub	bl,'0'		; convert to binary
	add	ax,bx		; add to sum
	mov	tmp,1		; Got some legal input. [27f]
atoi2:	loop	atoi0		; loop thru all chars
	cmp	tmp,0		; Anything besides spaces? [27f]
	je	atoi4		; No so fail. [27f]
	jmp	rskp
atoi4:	mov	dx,offset erms23	; complain and return
	ret
atoi5:	mov	dx,offset erms25	; Input must be numeric
	ret
ATOI	ENDP

;  addition for capture of raw output

setcpt	proc	near
	test	flags.capflg,0FFH
	jz	setcp1			; no capture file, keep going
	mov	dx,offset erms24
	jmp	reterr
setcp1:	mov 	comand.cmcr,0		; Filename must be specified.
	mov	ah,cmifi
	mov	dx,offset cptfcb
	mov 	bx,offset filhlp
	call	comnd
	 jmp	r
	mov	ah,cmcfm
	call	comnd			; confirm with carriage return
	 jmp	r
	mov	ah,delf
	mov	dx,offset cptfcb
	int	dos			; open up file
	mov	ah,makef
	mov	dx,offset cptfcb
	int	dos
	mov 	cptfcb+32,0

	call	inicpt			; init capture variables
	mov	flags.capflg,0FFH	; know we have capture routine
	jmp	rskp		; and return

setcpt	endp

; Jumping to this location is like retskp.  It assumes the instruction
;   after the call is a jmp addr.
 
RSKP    PROC    NEAR
	pop bp
	add bp,3
	push bp
        ret
RSKP    ENDP
 
; Jumping here is the same as a ret.
 
R       PROC    NEAR
        ret
R       ENDP

; routine to print an error message, then retskp
; expects message in dx
reterr	proc	near
	mov	ah,prstr
	int	dos
	jmp	rskp
reterr	endp

code	ends 
	end
```
{% endraw %}

## MSTERM.ASM

{% raw %}
```
	public	clscpt, defkey, cptfcb, inicpt, clscpi, telnet
	public  dopar, shokey, prkey
	include msdefs.h

datas 	segment	public 'datas'
	extrn	flags:byte, trans:byte, buff:byte, portval:word

targ	termarg	<0,1,80,24,cptchr,2dch,0,scntab,deftab,0,,parnon>
ssp	dw	0		; Save SP in Telnet.
crlf    db      cr,lf,'$'
tmp	db	?,'$'
temp	dw	0
temp1   dw      ?               ; Temporary storage.
temp2   dw      ?               ; Temporary storage.
tmsg1	db	cr,lf,'[Connecting to host, type $' 
tmsg3	db	' C to return to PC]',cr,lf,cr,lf,cr,lf,'$'
tmsg2	db	cr,lf,'[Back at micro]',cr,lf,'$'
erms22	db	cr,lf,'?No capture file open$' ;[jd]
erms2	db	cr,lf,'?No room in definition buffer, definition ignored'
	db	cr,lf,'$'
erms3	db	cr,lf,'?No room in scan table, definition ignored',cr,lf,'$'
esctl	db	'Control-$'         ; [6]

inthlp  db	cr,lf,' ?  This message'
	db	cr,lf,' C  Close the connection'
	db	cr,lf,' S  Status of the connection'
	db	cr,lf,' B  Send a break'
	db	cr,lf,' M  Toggle mode line'
	db	cr,lf,' Q  Quit logging'
	db	cr,lf,' R  Resume logging'
	db	cr,lf,' 0  Send a null'
	db	cr,lf,' P  Push to a new command parser'
	db	cr,lf,' Typing the escape character will send it to the host'
	db	0

intprm	db	'Command>$'

CPTFCB	DB	25H DUP (?)
CAPBUF	DB	200 DUP (?)
CAPBP	DW	?
CAPLFT	DB	?

SCNTLEN	EQU	200		; MAX # OF DEFINITIONS ONE can have
defbsiz	equ	400		; combined length of all definitions...
scntab	dw	scntlen dup (?)	; scan codes redefined
deftab	dw	scntlen dup (?) ; pointer to definition strings
defbuf	db	defbsiz dup (?)
defptr	dw	defbuf		; pointer starts at beginning
deflen	dw	defbsiz		; amt of space left in buffer
sttmsg	db	'Type space to continue$'
shkmsg	db	cr,lf,'Press key: $'
ocbuf	db	4 dup (?)
datas	ends

code	segment	public
	extrn 	comnd:near, outchr:near, stat0:near
	extrn	escprt:near, clrbuf:near, term:near
	extrn	cmblnk:near, locate:near, prtchr:near
	extrn	beep:near, puthlp:near
	extrn	serini:near,serrst:near, sendbr:near, showkey:near
	extrn	fpush:near
	assume	cs:code, ds:datas

; the show key command.

shokey	proc	near
	mov	ah,cmcfm		; confirm with carriage return
	call	comnd
	 jmp	r			; uh oh...
	mov	dx,offset shkmsg
	mov	ah,prstr
	int	dos			; print a prompt for it
	mov	ax,offset targ		; give it terminal arg block.
	call	showkey			; show them the key definition
	push	ax
	push	cx			; save results
	mov	dx,offset crlf
	mov	ah,prstr
	int	dos
	pop	cx
	pop	ax
	call	prkey			; print the buffer
	mov	dx,offset crlf
	mov	ah,prstr
	int	dos
	jmp	rskp			; and return
shokey	endp

; pass a string pointer in ax, length in cx.
; Prints the string, quoting any unprintables, except crlf.

prkey	proc	near
	mov	si,ax			; copy string ptr
	jcxz	prke6			; no string, stop here
prke1:	push	cx			; save counter
	lodsb				; get a byte
	and	al,7fH			; only consider low-order 7 bits.
	cmp	al,' '			; printable?
	jb	prke2			; no, print the hard way
	cmp	al,7fH			; maybe a delete?
	jne	prke4			; no, can just put into string
prke2:	jcxz	prke3			; last char, can't be crlf
	cmp	al,cr			; carriage return?
	jne	prke3			; no, go on
	cmp	byte ptr [si],lf	; followed by linefeed?
	jne	prke3
	mov	ah,prstr
	mov	dx,offset crlf
	int	dos			; else just print crlf
	inc	si			; skip over lf
	pop	cx			; careful...
	dec	cx
	push	cx
	jmp	short prke5
prke3:	push	ax			; preserve the char
	mov	ah,conout
	mov	dl,'\'
	int	dos			; print the quote character
	pop	ax
	call	proct			; print the octal byte
	jmp	short prke5
prke4:	mov	dl,al			; normal char, just print it
	mov	ah,conout
	int	dos
prke5:	pop	cx			; restore count
	loop	prke1
prke6:	ret				; and return
prkey	endp

; print the byte in al as an octal number
proct	proc	near
	push	si
	push	di
	pushf				; save flags...
	mov	ch,3			; # of digits to print
	mov	cl,3			; shift count
	mov	di,offset ocbuf+2	; point to end of buffer
	std				; set direction to backwards
	mov	dl,al			; copy the byte
proc1:	mov	al,dl
	and	al,7			; keep low-order byte
	add	al,'0'			; make printable
	stosb				; drop it off
	shr	dl,cl			; shift this digit out
	dec	ch
	jnz	proc1			; loop thru all
	mov	cx,3
	cld				; forward again
	mov	si,offset ocbuf
	mov	ah,conout		; console output function
proc2:	lodsb
	mov	dl,al
	int	dos
	loop	proc2			; print all digits
	popf
	pop	di
	pop	si
	ret
proct	endp

;	This is the CONNECT command.
 
TELNET 	PROC	NEAR
	mov ah,cmcfm
	call comnd		; Get a confirm.
	 jmp r			;  Didn't get a confirm.
	mov ah,prstr		; Output
	mov dx,offset crlf	; a crlf.
	int dos
	call domsg		; Reassure user. [19b]
	mov al,targ.flgs	; get present flags
	and al,modoff		; this is only one we can keep around
	or al,havtt		; defaults (!)
	cmp flags.debug,0	; debug mode?
	jz tel0			; no, keep going
	or al,trnctl		; yes, show control chars
tel0:	cmp flags.vtflg,0	; vt52 emulation?
	jz tel1
	or al,emheath
tel1:	mov bx,portval
	cmp [bx].ecoflg,0	; echoing?
	jz tel2
	or al,lclecho
tel2:	mov targ.flgs,al	; store flags
	mov ah,flags.comflg
	mov targ.prt,ah		; Port 1 or 2
	mov ah,trans.escchr
	mov targ.escc,ah
	mov ah,[bx].parflg
	mov targ.parity,ah
	mov ax,[bx].baud
	mov targ.baudb,al
	mov ah,flags.capflg
	and ah,capt
	or targ.flgs,ah
	call serini		; init serial port
tem:	mov ax,offset targ	; Point to terminal arguments
	call term
	or targ.flgs,scrsam	; assume screen is the same.
intchr:	mov ah,dconio		; Direct console I/O.
	mov dl,0FFH		; Input.
	int dos			; Get a char.
	jz intchr		; no char, keep looking
	mov ah,al
	jz intchr		; If so, go until we get a char.
	cmp ah,' '		; space - ignore it
	je tem
	mov bh,ah		; Save the actual char.
	and ah,not ('a'-'A')	; Convert to upper case.
	or ah,40H		; convert ctl-char to actual char.
	cmp ah,'C'		; Is it close?
	jne intch1
	call serrst		; reset serial port
	jmp rskp		; and return
intch1: cmp ah,'S'		; Is it status?
	jnz intch2
	call stat0		; If so, call stat0.
	call puthlp		; put help on screen
	mov dx,offset sttmsg
	mov ah,prstr
	int dos
intch1a:mov ah,coninq		; console input, no echo
	int dos
	cmp al,' '		; space?
	jne intch1a
	and targ.flgs,not scrsam ; remember screen changed.
	jmp tem
intch2: cmp ah,'B'		; Send a break? [20g]
	jne intch3		; No. [20g]
	call sendbr		; Yes, so send a break. [20g]
	jmp tem			; And return.  [20g]
intch3:	cmp ah,'M'		; mode line?
	jne intch4
	xor targ.flgs,modoff	; toggle mode line
	jmp tem			; and reconnect
intch4:	cmp bh,'?'		; Is it help?
	jne intch5		; If not, go to the next check.
	mov ax,offset inthlp	; If so, get the address of the help message.
	call puthlp		; write help msg
	mov dx,offset intprm
	mov ah,prstr		; Print it.
	int dos
	and targ.flgs,not scrsam ; remember screen changed
	jmp intchr		; Get another char.
intch5: cmp bh,trans.escchr	; Is it the escape char?
	jne intch7		; If not, go send a beep to the user.
intch6: mov ah,al
	call outchr
	nop
	nop
	nop
	jmp tem			; Return, we are done here.
intch7:	cmp ah,'Q'		; maybe want to stop logging?
	jne intch8
	test targ.flgs,capt	; not capturing, can't do this
	jz intc11
	and targ.flgs,not capt ; stop capturing
	jmp tem			; and resume
intch8:	cmp ah,'R'		; maybe resume?
	jne intch9		; no, keep going
	cmp flags.capflg,0	; can we capture?
	jz intc11		; no, forget it
	test targ.flgs,capt	; already capturing?
	jnz intc11		; yes, can't toggle back on then
	or targ.flgs,capt	; else turn flag on
	jmp tem			; and resume
intch9:	cmp bh,'0'		; perhaps want a null (note original chr in bh)
	jne intc10
	mov ah,0
	call outchr
	nop
	nop
	nop
	jmp tem
intc10:	cmp ah,'P'		; maybe want to push?
	jne intc11		; no, go on
	call fpush		; try pushing
	 nop
	 nop
	 nop			; isn't this silly?
	mov dx,offset sttmsg
	mov ah,prstr
	int dos
	jmp intch1a		; wait for space
intc11:	call beep
	jmp tem
TELNET  ENDP

; Reassure user about connection to the host.  Tell him what escape
; sequence to use to return and the communications port and baud
; rate being used.   [19b] 

DOMSG	PROC	NEAR
	mov ah,prstr
	mov dx,offset tmsg1
	int dos
	call escprt
	mov ah,prstr
	mov dx,offset tmsg3
	int dos
	ret
DOMSG	ENDP


; Set parity for character in Register AL.

dopar:	push bx
	mov bx,portval
	cmp [bx].parflg,parnon	; No parity?			[10 start]
	je parret		; Just return
	cmp [bx].parflg,parevn	; Even parity?
	jne dopar0
	and al,07FH		; Strip parity.
	jpe parret		; Already even, leave it.
	or al,080H		; Make it even parity.
	jmp parret
dopar0:	cmp [bx].parflg,parmrk	; Mark parity?
	jne dopar1
	or al,080H		; Turn on the parity bit.
	jmp parret
dopar1:	cmp [bx].parflg,parodd	; Odd parity?	
	jne dopar2
	and al,07FH		; Strip parity.
	jpo parret		; Already odd, leave it.
	or al,080H		; Make it odd parity.
	jmp parret
dopar2: and al,07FH		; Space parity - turn off parity bit.
parret:	pop bx
	ret					; [10 end]

inicpt	proc	near
	mov	capbp,offset capbuf
	mov	caplft,128		; init buffer ptr & chrs left
	ret				; and return
inicpt	endp


cptchr	proc	near			; capture routine, char in al
	push	di
	mov	di,capbp
	mov	byte ptr [di],al
	inc	di
	mov	capbp,di		; restore pointer
	pop	di
	dec	caplft			; decrement chars remaining
	jnz	cptch1			; more room, forget this part
	call	cptdmp			; dump the info
	call	inicpt			; re-init ptrs.
cptch1:	ret				; and return
cptchr	endp

cptdmp	proc	near			; empty the capture buffer
	push	ax
	push	dx
	mov	ah,setdma
	mov	dx,offset capbuf	; the capture routine buffer
	int	dos
	mov	ah,writef
	mov	dx,offset cptfcb
	int	dos			; write out the block
;*** must be fixed... check error returns, disable capturing,
;*** figure out how to put dma address back
	mov	dx,offset buff
	mov	ah,setdma
	int	dos			; put dma back
	pop	dx
	pop	ax
	ret
cptdmp	endp

clscpt	proc	near
	test	flags.capflg,0FFH	; doing capture
	jnz	clscp1			; yes, go ahead
	mov	dx,offset erms22
	mov	ah,prstr
	int	dos
	jmp	rskp
clscp1:	mov	ah,cmcfm
	call	comnd
	 jmp	r
clscpi:	mov	al,'Z'-64		; control-z for eof...
	call	cptchr			; output to file
	mov	al,caplft
	cmp	al,128			; is buffer empty?
	je	clscp2			; yes, forget this stuff
	call	cptdmp			; dump buffer (preserves registers)
clscp2:	mov	ah,0
	sub	word ptr cptfcb+16,ax	; subtract remaining from low filsize
	sbb	word ptr cptfcb+18,0	; and from high size (with borrow)
	mov	ah,closf
	mov	dx,offset cptfcb
	int	dos			; close up file
	mov	flags.capflg,0		; no longer capturing...
	jmp	rskp			; and return
clscpt	endp

; enter with ax/scan code to define, si/ pointer to definition, cx/ length
; of definition.  Defines it in definition table.
defkey	proc	near
	cmp	deflen,cx
	jg	defk0		; room in buffer, continue
	mov	dx,offset erms2
	call	tmsg
	ret
defk0:	push	ax		; save scan code
	mov	ax,ds
	mov	es,ax		; address data segment
	mov	di,defptr	; this is where the def gets built
	inc	di		; leave a byte for length
defk1:	lodsb			; get a byte from the source
	cmp	al,'\'		; escape?
	jne	defk2		; no, just deposit him
	dec	cx		; count available is one less
	call	trnesc		; translate the escape sequence
	inc	cx		; account for '\' (loop will decrement again).
defk2:	stosb			; drop off character
	loop	defk1		; and keep going while we have more
	mov	ax,di		; get ptr to end
	dec	ax		; back up pointer to end
	mov	si,defptr	; pick up old ptr value
	sub	ax,si		; this is actual length used
	sub	deflen,ax	; account for the space
	mov	byte ptr [si],al ; fill in length of entry
	mov	defptr,di	; this is next free byte
; definition address is in si
	pop	ax		; recover scan code
	mov	cx,targ.klen	; length of scan table
	jcxz	defk4		; not there, just go add it
	mov	di,offset scntab ; the scan code table
	repne	scasw		; look for this one
	jne	defk4		; not defined already
	sub	di,offset scntab + 2 ; compute index into table
	mov	deftab[di],si	; fill in address
	ret			; and return
defk4:	mov	di,targ.klen	; get length again
	inc	di
	cmp	di,scntlen
	ja	defk5		;** ignore def if over size
	mov	targ.klen,di	; update length
	shl	di,1		; double for word index
	mov	scntab[di-2],ax	; put scan code into table
	mov	deftab[di-2],si	; and fill in definition
	ret			; that's it
defk5:	mov	dx,offset erms3
	call	tmsg
	ret
defkey	endp

; enter with si/ source pointer, cx/ count
; converts an escape sequence, updates all pointers
trnesc	proc	near
	push	bx
	push	dx		; preserve these
	mov	al,0		; this is current accumulation
	jcxz	trnes2		; empty string, forget it
	mov	bl,3		; this is max # of digits to use
	mov	bh,8		; this is radix
trnes1:	mov	dl,[si]
	cmp	dl,'0'
	jb	trnes2		; out of range, stop here
	cmp	dl,'7'
	ja	trnes2
	inc	si		; accept character
	sub	dl,'0'		; convert to binary
	mul	bh		; shift accumulation
	add	al,dl		; add to accumulation
	dec	bl		; decrement digit counter
	loopnz	trnes1		; and keep trying
trnes2:	pop	dx
	pop	bx
	ret			; and return
trnesc	endp

; print a $-message in dx
tmsg	proc	near
	mov	ah,prstr
	int	dos
	ret
tmsg	endp

; Jumping to this location is like retskp.  It assumes the instruction
;   after the call is a jmp addr.
 
RSKP	PROC	NEAR
	pop bp
	add bp,3
	push bp
	ret
RSKP	ENDP
 
; Jumping here is the same as a ret.
 
R	PROC	NEAR
	ret
R	ENDP

code	ends 
	end

```
{% endraw %}

## MSXDMB.ASM

{% raw %}
```
code	segment	public
code	ends
datas	segment	public 'datas'
datas	ends
stack	segment	stack 'stack'
stack	ends
	end
```
{% endraw %}

## MSXIBM.ASM

{% raw %}
```
; Kermit system dependent module for IBM-PC

; Edit History
;  Make break be 275 ms, DT 5:51pm  Thursday, 6 December 1984

	public	serini, serrst, clrbuf, outchr, coms, vts, dodel,
	public	ctlu, cmblnk, locate, prtchr, dobaud, clearl,
	public	dodisk, getbaud, beep,
	public	count, xofsnt, puthlp, putmod, clrmod, poscur
	public	sendbr, machnam, setktab, setkhlp, lclini, showkey
	include msdefs.h

false	equ	0
true	equ	1
mntrgh	equ	bufsiz*3/4	; High point = 3/4 of buffer full.

; constants used by serial port handler

BRKBIT	EQU	040H		; Send-break bit. 
TIMER	EQU	40H		; Use to issue short beep.
PORT_B	EQU	61H		; Port B address.
MCONF	EQU	11H		; Machine configuration. 
KEYB	EQU	16H
BIOS	EQU	10H

MDMDAT1	EQU	03F8H		; Address of modem port (data). [19b]
MDMSTS1	EQU	03FDH		; Address of modem port	status. [19b]
MDMCOM1	EQU	03FBH		; Address of modem port command. [19b]
MDMDAT2	EQU	02F8H		; Port 2 address. [19b]
MDMSTS2	EQU	02FDH		; Port 2 status. [19b]
MDMCOM2	EQU	02FBH		; Port 2 command. [19b]
MDMINP	EQU	1		; Input ready bit.

MDMINTV	EQU	0030H		; Address of modem port interrupt vector.
MDINTV2 EQU	002CH		; Address for port 2. [19b] 
MDMINTO	EQU	0EFH		; Mask to enable interrupt for modem port.
MDINTO2 EQU	0F7H		; Enable interrupt level 3. [19b]
MDMINTC	EQU	010H		; Bit to set to disable interrupts for modem.
MDINTC2 EQU	008H		; Disable IRQ3. [19b]

INTCONT	EQU	0021H		; Address of 8259 interrupt controller ICW2-3.
INTCON1	EQU	0020H		; Address of 8259 ICW1.
EOICOM	EQU	0064H		; End of interrupt.
EOICOM2	EQU	0063H		; End of interrupt for COM2. [19b]

; external variables used:
; drives - # of disk drives on system
; flags - global flags as per flginfo structure defined in pcdefs
; trans - global transmission parameters, trinfo struct defined in pcdefs
; portval - pointer to current portinfo structure (currently either port1
;    or port2)
; port1, port2 - portinfo structures for the corresponding ports

; global variables defined in this module:
; xofsnt, xofrcv - tell whether we saw or sent an xoff.
; setktab - keyword table for redefining keys (should contain a 0 if
;    not implemented)
; setkhlp - help for setktab.

datas 	segment	public 'datas'
	extrn	drives:byte,flags:byte, trans:byte
	extrn	portval:word, port1:byte, port2:byte

setktab	db	12
	mkeyw	'BACKSPACE',0eh
	mkeyw	'F1',3bh
	mkeyw	'F2',3ch
	mkeyw	'F3',3dh
	mkeyw	'F4',3eh
	mkeyw	'F5',3fh
	mkeyw	'F6',40h
	mkeyw	'F7',41h
	mkeyw	'F8',42h
	mkeyw	'F9',43h
	mkeyw	'F10',44h
	mkeyw	'SCAN',-1

setkhlp	db	cr,lf,'Keyname: backspace, f1, ... f10, or "SCAN" follwed by '
	db	'decimal scan code$'
brkval	db	0		; What to send for a break.
brkadr	dw	0		; Where to send it.
modem	mdminfo	<MDMDAT1,MDMSTS1,MDMCOM1,MDMINTO,MDMINTC,EOICOM,MDMINTV>
erms20	db	cr,lf,'?Warning: System has no disk drives$' ; [21a]
erms40	db	cr,lf,'?Warning: Unrecognized baud rate$'
badbd	db	cr,lf,'Unimplemented baud rate$'
machnam	db	'IBM-PC$'
crlf	db	cr,lf,'$'
delstr  db	BS,' ',BS,'$' 	; Delete string. [21d]
clrlin  db	cr,'$'			; Clear line (just the cr part).
savsci	dw	?		; Save for serial port interrupt vector. [14]
savscs	dw	?		; Ditto.  [14]  
savbr1	dw	?		; "Break" interrupt vector. [25]
savbr2	dw	?		; Ditto. [25]
portin	db	0		; Has comm port been initialized. [21c]
xofsnt	db	0		; Say if we sent an XOFF.
xofrcv	db	0		; Say if we received an XOFF.
tmp	db	?,'$'
temp	dw	0
temp1	dw	?		; Temporary storage.
temp2	dw	?		; Temporary storage.

ontab	db	02H		; Two entries.
	db	03H,'OFF$'	; Should be alphabetized.  [19a]
	dw	00H
	db	02H,'ON$'
	dw	01H

comptab	db	04H
	db	01H,'1$'
	dw	01H
	db	01H,'2$'
	dw	00H
	db	04H,'COM1$'
	dw	01H
 	db	04H,'COM2$'
	dw	00H

; this table is indexed by the baud rate definitions given in
; pcdefs.  Unsupported baud rates should contain FF.
bddat	label	word
	dw	0FFH		; 45.5 baud  -- Not supported.
	dw	900H		; 50 baud
	dw	600H		; 75 baud
	dw	417H		; 110 baud
	dw	359H		; 134.5 baud
	dw	300H		; 150 baud
	dw	180H		; 300 baud
	dw	0C0H		; 600 baud
	dw	60H		; 1200 baud
	dw	40H		; 1800 baud
	dw	3AH		; 2000 baud
	dw	30H		; 2400 baud
	dw	18H		; 4800 baud
	dw	0CH		; 9600 baud
	dw	0FFH		; 19200 baud -- Not supported.
	dw	0FFH		; 38400 baud -- Not supported.

; variables for serial interrupt handler

source	db	bufsiz DUP(?)	; Buffer for data from port.
srcpnt	dw	0		; Pointer in buffer (DI).
count	dw	0		; Number of chars in int buffer.
savesi	dw	0		; Save SI register here.	
telflg	db	0		; Are we acting as a terminal.
mst	dw	0		; Modem status address.
mdat	dw	0		; Modem data address.
mdeoi	db	0		; End-of-Interrupt value.

rbtrn	db	7fH		; rubout

shkbuf	db	300 dup (?)	; room for definition
shkmsg	db	'  Scan code: '
shkmln	equ	$-shkmsg
shkms1	db	cr,lf,'  Definition: '
shkm1ln	equ	$-shkms1
datas	ends

code	segment	public
	extrn	comnd:near, dopar:near, defkey:near, gss:near
	assume	cs:code,ds:datas

; local initialization

lclini	proc	near
	mov	ax,0eH		; scan code for arrow key
	mov	si,offset rbtrn	; translate to rubout
	mov	cx,1		; one char translation
	call	defkey
	mov brkval,BRKBIT	; What to send for a break.
	mov ax,modem.mdcom	; Where to send it.
	mov brkadr,ax
	ret
lclini	endp

; this is called by Kermit initialization.  It checks the
; number of disks on the system, sets the drives variable
; appropriately.  Returns normally.  

DODISK	PROC	NEAR
	int mconf			; Get equipment configuration.
	mov ah,al			; Store AL value for a bit.
	and al,01H			; First, look at bit 0.
	jz dodsk0			; No disk drives -- forget it.
	mov al,ah			; Get back original value.
	mov cl,6			; Shift over bits 6 and 7.
	shr al,cl			; To positions 0 and 1.
	inc al				; Want 1 thru 4 (not 0 thru 3).
	mov drives,al			; Remember how many. 
	ret
dodsk0:	mov ah,prstr			; Print a warning message.
	mov dx,offset erms20		; I'm not sure if things will
	int dos				; work with only a cassette.
	mov drives,0			; Say there aren't any drives.
	ret
DODISK	ENDP

; show the definition of a key.  The terminal argument block (which contains
; the address and length of the definition tables) is passed in ax.
; Returns a string to print in AX, length of same in CX.
; Returns normally.
showkey	proc	near
	push	es
	push	ax		; save the ptr
	mov	bx,ds
	mov	es,bx		; address data segment
	cld
showk1:	xor	ah,ah
	int	keyb		; read a char
	push	ax		; save the character
	call	gss		; get shift state
	pop	bx
	mov	ah,al		; shift state to ah
	mov	al,bh		; scan code to al
	push	ax		; remember scan code
	mov	di,offset shkbuf
	mov	si,offset shkmsg
	mov	cx,shkmln
	rep	movsb		; copy in initial message
	call	nout		; write out scan code
	mov	si,offset shkms1
	mov	cx,shkm1ln	; second message
	rep	movsb
	pop	ax		; get scan code back
	pop	bx		; and terminal arg block
	mov	cx,[bx].klen	; and length
	jcxz	showk2		; no table, not defined
	push	di		; remember output ptr
	mov	di,[bx].ktab	; get key table
	repne	scasw		; search for a definition for this
	mov	si,di		; remember result ptr
	pop	di		; get output ptr back
	jne	showk2		; not defined, forget it
	sub	si,[bx].ktab	; compute offset from beginning
	sub	si,2		; minus 2 for pre-increment
	add	si,[bx].krpl	; get index into replacement table
	mov	si,[si]		; pick up replacement
	mov	cl,[si]		; get length
	mov	ch,0
	inc	si
	rep	movsb		; copy into buffer
showk2:	mov	ax,offset shkbuf ; this is buffer
	mov	cx,di
	sub	cx,ax		; length
	pop	es
	ret			; and return
showkey	endp

; Clear the input buffer. This throws away all the characters in the
; serial interrupt buffer.  This is particularly important when
; talking to servers, since NAKs can accumulate in the buffer.
; Returns normally.

CLRBUF	PROC	NEAR
	cli
	mov ax,offset source
	mov srcpnt,ax
	mov savesi,ax
	mov count,0
	sti
	ret
CLRBUF	ENDP

; Clear to the end of the current line.  Returns normally.

CLEARL	PROC	NEAR
	mov ah,3		; Clear to end of line.
	mov bh,0
	int bios		; Get current cursor position
	mov cx,dx
	mov dl,79
	mov ah,7
	mov al,0
	mov bh,7
	int bios
	ret
CLEARL	ENDP

; Put the char in AH to the serial port.  This assumes the
; port has been initialized.  Should honor xon/xoff.  Skip returns on
; success, returns normally if the character cannot be written.

outchr:	mov bp,portval
	cmp ds:[bp].floflg,0	; Are we doing flow control.
	je outch2		; No, just continue.
	xor cx,cx		; clear counter
outch1:	cmp xofrcv,true		; Are we being held?
	jne outch2		; No - it's OK to go on.
	loop outch1		; held, try for a while
	mov xofrcv,false	; timed out, force it off and fall thru.
outch2:	push dx			; Save register.
	sub cx,cx
	mov al,ah		; Parity routine works on AL.
	call dopar		; Set parity appropriately.
	mov ah,al		; Don't overwrite character with status.
	mov dx,modem.mdstat	; Get port status.
outch3:	in al,dx
	test al,20H		; Transmitter ready?
	jnz outch4		; Yes
	loop outch3
	 jmp outch5		; Timeout
outch4:	mov al,ah		; Now send it out
	mov dx,modem.mddat
	out dx,al
	pop dx
	jmp rskp
outch5:	pop dx
	ret

; This routine blanks the screen.  Returns normally.

CMBLNK	PROC	NEAR		; This is stolen from the IBM example.
	mov cx,0
	mov dx,184FH
	mov bh,7
	mov ax,600H
	int bios
	ret
CMBLNK  ENDP

; Locate: homes the cursor.  Returns normally.

LOCATE  PROC	NEAR
	mov dx,0		; Go to top left corner of screen.
	jmp poscur
LOCATE  ENDP

; write a line in inverse video at the bottom of the screen...
; the line is passed in dx, terminated by a $.  Returns normally.
putmod	proc	near
	push	dx		; preserve message
	mov	cx,1800h
	mov	dx,184fh
	mov	ax,600h		; scroll to clear the line
	mov	bh,70h		; inverse video
	int	bios
	mov	dx,1800h	; now address line 24
	call	poscur
	pop	dx		; get message back
	mov	ah,prstr
	int	dos		; write it out
	ret			; and return
putmod	endp

; clear the mode line written by putmod.  Returns normally.
clrmod	proc	near
	mov	cx,1800h
	mov	dx,184fh
	mov	ax,600h
	mov	bh,7h
	int	bios
	ret
clrmod	endp

; put a help message on the screen.  This one uses reverse video...
; pass the message in ax, terminated by a null.  Returns normally.
puthlp	proc	near
	push	ax		; preserve this
	mov	si,ax		; point to it
	mov	dh,1		; init counter
puthl1:	lodsb			; get a byte
	cmp	al,lf		; linefeed?
	jne	puthl2		; no, keep going
	inc	dh		; count it
	jmp	puthl1		; and keep looping
puthl2:	cmp	al,0		; end of string?
	jne	puthl1		; no, keep going
	mov	ax,600h		; scroll to clear window
	xor	cx,cx		; from top left
	mov	dl,4fh		; to bottom right of needed piece
	mov	bh,70h		; inverse video
	int	bios
	call	locate		; home cursor
	pop	si		; point to string again
puthl3:	lodsb			; get a byte
	cmp	al,0		; end of string?
	je	puthl4		; yes, stop
	mov	ah,14
	int	bios		; else write to screen
	jmp	puthl3		; and keep going
puthl4:	mov	dx,24 * 100H	; go to last line
	jmp	poscur		; position and return
puthlp	endp

; Set the baud rate for the current port, based on the value
; in the portinfo structure.  Returns normally.

DOBAUD	PROC	NEAR
	mov bp,portval
	mov temp1,ax		; Don't overwrite previous rate. [25]
	mov ax,ds:[bp].baud	; Check if new rate is valid. [25]
	mov tmp,2
	mul tmp			; Get index into baud table.
	mov bx,offset bddat	; Start of table.
	add bx,ax
	mov ax,[bx]		; The data to output to port.
	cmp ax,0FFH		; Unimplemented baud rate.
	jne dobd0
	mov ax,temp1		; Get back orginal value.
	mov ds:[bp].baud,ax	; Leave baud rate as is.
	mov ah,prstr
	mov dx,offset badbd	; Give an error message.
	int dos
	ret
dobd0:	mov temp1,ax		; Remember value to output. [25]
	mov dx,modem.mdcom	; LCR -- Initialize baud rate. [19b]
	in al,dx
	mov bl,al
	or ax,80H
	out dx,al
	mov dx,modem.mddat	; [19b]
	mov ax,temp1
	out dx,al
	inc dx
	mov al,ah
	out dx,al
	mov dx,modem.mdcom	; [19b]
	mov al,bl
	out dx,al
	ret
DOBAUD	ENDP

; Get the current baud rate from the serial card and set it
; in the portinfo structure for the current port.  Returns normally.
; This is used during initialization.

GETBAUD	PROC	NEAR
	mov dx,modem.mdcom	; Get current Line Control Register value.
	in al,dx
	mov bl,al		; Save it.
	or ax,80H		; Turn on to access baud rate generator.
	out dx,al
	mov dx,modem.mddat	; Divisor latch.
	inc dx
	in al,dx		; Get hi order byte.
	mov ah,al		; Save here.
	dec dx
	in al,dx		; Get lo order byte.
	push ax	
	mov dx,modem.mdcom
	mov al,bl		; Restore old value.
	out dx,al
	pop ax
	cmp ax,0FFFFH		; Who knows what this is.
	je getb2
	mov bx,offset bddat	; Find rate's offset into table.
	mov cl,0		; Keep track of index.
getb0:	cmp ax,[bx]
	je getb1
	inc cl
	cmp cl,baudsiz		; At the end of the list.
	jge getb2
	add bx,2
	jmp getb0
getb1:	mov ch,0
	mov bp,portval
	mov ds:[bp].baud,cx	; Set baud rate.
	ret
getb2:	mov ah,prstr
	mov dx,offset erms40
	int dos
	ret
GETBAUD	ENDP

; skip returns if no character available at port,
; otherwise returns with char in al, # of chars in buffer in dx.
PRTCHR  PROC	NEAR
	call chkxon		; see if we need to xon
	cmp count,0
	jnz prtch2
	jmp rskp		; No data - check console.
prtch2:	mov si,savesi
	lodsb			; get a byte
	cmp si,offset source + bufsiz	; bigger than buffer?
	jb prtch1		; no, keep going
	mov si,offset source	; yes, wrap around
prtch1:	dec count
	mov savesi,si 
	mov dx,count		; return # of chars in buffer
	ret
PRTCHR  ENDP

; local routine to see if we have to transmit an xon
chkxon	proc	near
	push	bx
	mov	bx,portval
	cmp	[bx].floflg,0	; doing flow control?
	je	chkxo1		; no, skip all this
	cmp	xofsnt,false	; have we sent an xoff?
	je	chkxo1		; no, forget it
	cmp	count,mntrgh	; below trigger?
	jae	chkxo1		; no, forget it
	mov	ax,[bx].flowc	; ah gets xon
	call	outchr		; send it
	nop
	nop
	nop			; in case it skips
	mov	xofsnt,false	; remember we've sent the xon.
chkxo1:	pop	bx		; restore register
	ret			; and return
chkxon	endp

; Send a break out the current serial port.  Returns normally.
SENDBR	PROC	NEAR
	push cx
	push dx
	push ax
	xor cx,cx		; Clear loop counter.
	mov dx,brkadr		; Port address.  [19b]
	in al,dx		; Get current setting.
	or al,brkval		; Set send-break bit(s).
	out dx,al		; Start the break.
	push ax
	mov ax,275		; # of ms to wait
	call pcwait		; hold break for desired interval
	pop ax
	xor al,brkval		; Clear send-break bit(s).
	out dx,al		; Stop the break.
	pop ax
	pop dx
	pop cx
	ret			; And return.
SENDBR	ENDP

; Wait for the # of milliseconds in ax
; Thanks to Bernie Eiben for this one.
pcwait	proc	near
	mov	cx,240		; inner loop counter for 1 millisecond
pcwai1:	sub	cx,1		; inner loop takes 20 clock cycles
	jnz	pcwai1
	dec	ax		; outer loop counter
	jnz	pcwait		; wait another millisecond
	ret
pcwait	endp

; Position the cursor according to contents of DX:
; DH contains row, DL contains column.  Returns normally.

POSCUR	PROC	NEAR
	mov ah,2		; Position cursor.
	mov bh,0
	int bios
	ret
POSCUR	ENDP

; Delete a character from the terminal.  This works by printing
; backspaces and spaces.  Returns normally.

DODEL	PROC	NEAR
	mov ah,prstr
	mov dx,offset delstr	; Erase weird character.
	int dos			
	ret
DODEL	ENDP

; Move the cursor to the left margin, then clear to end of line.
; Returns normally.

CTLU	PROC	NEAR
	mov ah,prstr
	mov dx,offset clrlin
	int dos
	call clearl
	ret
CTLU	ENDP

; set the current port.  

COMS	PROC	NEAR
	mov dx,offset comptab
	mov bx,0
	mov ah,cmkey
	call comnd
	 jmp r
	push bx
	mov ah,cmcfm
	call comnd		; Get a confirm.
	 jmp comx		;  Didn't get a confirm.
	 nop
	pop bx
	mov flags.comflg,bl	; Set the comm port flag.
	cmp flags.comflg,1	; Using Com 1?
	jne coms0		; Nope.
	mov ax,offset port1
	mov portval,ax
	mov modem.mddat,MDMDAT1	; Set COM1 defaults.
	mov modem.mdstat,MDMSTS1
	mov modem.mdcom,MDMCOM1
	mov modem.mddis,MDMINTC
	mov modem.mden,MDMINTO
	mov modem.mdmeoi,EOICOM
	mov modem.mdintv,MDMINTV
	mov brkadr,MDMCOM1
	ret
coms0:	mov ax,offset port2
	mov portval,ax
	mov modem.mddat,MDMDAT2	; Set COM2 defaults.
	mov modem.mdstat,MDMSTS2
	mov modem.mdcom,MDMCOM2
	mov modem.mddis,MDINTC2
	mov modem.mden,MDINTO2
	mov modem.mdmeoi,EOICOM2
	mov modem.mdintv,MDINTV2
	mov brkadr,MDMCOM2
	ret
comx:	pop bx
	ret
COMS	ENDP

; Set heath emulation on/off.

VTS	PROC	NEAR
	mov dx,offset ontab
	mov bx,0
	mov ah,cmkey
	call comnd
	 jmp r
	push bx
	mov ah,cmcfm
	call comnd		; Get a confirm.
	 jmp vt0		;  Didn't get a confirm.
	 nop
	pop bx
	mov flags.vtflg,bl	; Set the VT52 emulation flag.
	ret
vt0:	pop bx
	ret
VTS	ENDP

; initialization for using serial port.  This routine performs
; any initialization necessary for using the serial port, including
; setting up interrupt routines, setting buffer pointers, etc.
; Doing this twice in a row should be harmless (this version checks
; a flag and returns if initialization has already been done).
; SERRST below should restore any interrupt vectors that this changes.
; Returns normally.

SERINI	PROC	NEAR
	push es
	cmp portin,0		; Did we initialize port already? [21c]
	jne serin0		; Yes, so just leave. [21c]
	cli			; Disable interrupts
	cld			; Do increments in string operations
	xor ax,ax		; Address low memory
	mov es,ax
	mov bx,modem.mdintv	; Save serial card interrupt vector. [19b]
	mov ax,es:[bx]
	mov savsci,ax
	mov ax,offset serint	; And point it to my routine
	mov es:[bx],ax
	add bx,2		; Save CS register too. [19b]
	mov ax,es:[bx]
	mov savscs,ax
	mov es:[bx],cs
	mov portin,1		; Remember port has been initialize. 
	call clrbuf		; Clear input buffer. 
	mov ax,modem.mdstat
	mov mst,ax		; Use this address for status. 
	mov ax,modem.mddat
	mov mdat,ax		; Use this address for data. 
	mov al,modem.mdmeoi
	mov mdeoi,al		; Use to signify end-of-interrupt. 
	in al,21H		; Set up 8259 interrupt controller
	and al,modem.mden	; Enable INT3 or INT4. 
	out 21H,al
	mov dx,modem.mdcom	; Set up the serial card. 
	mov al,3
	out dx,al
	mov dl,0F9H
	mov al,1		; Set up interrupt enable register
	out dx,al
	mov dl,0FCH		; Enable interrupts from serial card
	mov al,0BH
	out dx,al
	sti			; Allow interrupts
	mov dl,0F8H
	in al,dx
serin0:	pop es
	ret			; We're done.
SERINI	ENDP

; Reset the serial port.  This is the opposite of serini.  Calling
; this twice without intervening calls to serini should be harmless.
; Returns normally.

SERRST	PROC	NEAR
	push es			; preserve this
	cmp portin,0		; Reset already? 
	je srst1		; Yes, just leave. 
	cli			; Disable interrupts
	mov dx,03FCH		; Disable modem interrupts
	cmp flags.comflg,1	; Using port 1 ? 
	je srst0		; Yes - continue. 
	mov dh,02		; Set for port 2. 
srst0:	mov al,3
	out dx,al
	in al,21H		; Interrupt controller
	or al,modem.mddis	; Inhibit IRQ3 or IRQ4. 
	out 21H,al
	xor bx,bx		; Address low memory
	mov es,bx
	mov bx,modem.mdintv	; Restore the serial card int vector 
	mov ax,savsci
	mov es:[bx],ax
	add bx,2		; Restore CS too. 
	mov ax,savscs
	mov es:[bx],ax
	mov portin,0		; Reset flag.
	sti
srst1:	pop es
	ret			; All done.
SERRST	ENDP

; serial port interrupt routine.  This is not accessible outside this
; module, handles serial port receiver interrupts.

SERINT  PROC  NEAR
	push bx
	push dx
	push ax
	push es
	push di
	push ds
	push bp
	push cx
	cld
	mov ax,seg datas
	mov ds,ax		; address data segment
	mov es,ax
	mov di,srcpnt		; Registers for storing data.
	mov dx,mst		; Asynch status port. [19b]
	in al,dx
	test al,mdminp		; Data available?
	jz retint		; Nope.
	mov dx,mdat		; [19b]
	in al,dx
	cmp telflg,0		; File transfer or terminal mode? [17c]
	jz srint0
	and al,7FH		; Terminal mode (7 bits only). 
srint0: or al,al
	jz retint		; Ignore nulls.
	mov ah,al
	and ah,7fH		; strip parity temporarily
	cmp ah,7FH		; Ignore rubouts, too.
	jz retint
	mov bp,portval
	cmp ds:[bp].floflg,0	; Doing flow control?
	je srint2		; Nope.
	mov bx,ds:[bp].flowc	; Flow control char (BH = XON, BL = XOFF).
	cmp al,bl		; Is it an XOFF?
	jne srint1		; Nope, go on.
	mov xofrcv,true		; Set the flag.
	jmp retint
srint1:	cmp al,bh		; Get an XON?
	jne srint2		; No, go on.
	mov xofrcv,false	; Clear our flag.
	jmp retint
srint2:	stosb
	cmp di,offset source + bufsiz
	jb srint3		; not past end...
	mov di,offset source	; wrap buffer around
srint3:	inc count
	cmp ds:[bp].floflg,0	; Doing flow control?
	je retint		; No, just leave.
	cmp xofsnt,true		; Have we sent an XOFF?
	je retint		; Yes.
	cmp count,mntrgh	; Past the high trigger point?
	jbe retint		; No, we're within our limit.
	mov ah,bl		; Get the XOFF.
	call outchr		; Send it.
	nop
	nop
	nop			; ignore failure.
	mov xofsnt,true		; Remember we sent it.
retint:	mov srcpnt,di
	sti
	mov al,mdeoi		; [19b]
	out intcon1,al		; Send End-of-Interrupt to 8259.
	pop cx
	pop bp
	pop ds
	pop di
	pop es
	pop ax
	pop dx
	pop bx
intret:	iret
SERINT	ENDP

; Produce a short beep.  The PC DOS bell is long enough to cause a loss
; of data at the port.  Returns normally.

BEEP	PROC	NEAR
	mov al,10110110B	; Gen a short beep (long one losses data.)
	out timer+3,al		; Code snarfed from Technical Reference.
	mov ax,533H
	out timer+2,al
	mov al,ah
	out timer+2,al
	in al,port_b
	mov ah,al
	or al,03
	out port_b,al
	sub cx,cx
	mov bl,1
beep0:  loop beep0
	dec bl		
	jnz beep0
	mov al,ah
	out port_b,al
	ret
BEEP	ENDP 
 
; put the number in ax into the buffer pointed to by di.  Di is updated
nout	proc	near
	mov	dx,0		; high order is always 0.
	mov	bx,10
	div	bx		; divide to get digit
	push	dx		; save remainder digit
	or	ax,ax		; test quotient
	jz	nout1		; zero, no more of number
	call	nout		; else call for rest of number
nout1:	pop	ax		; get digit back
	add	al,'0'		; make printable
	stosb			; drop it off
	ret			; and return
nout	endp

; Jumping to this location is like retskp.  It assumes the instruction
;   after the call is a jmp addr.
 
RSKP	PROC	NEAR
	pop bp
	add bp,3
	push bp
	ret
RSKP	ENDP
 
; Jumping here is the same as a ret.
 
R	PROC	NEAR
	ret
R	ENDP

code	ends 
	end
```
{% endraw %}

## MSYIBM.ASM

{% raw %}
```

	title term

; edit history
; Fixed destructive tab problem (received from many people)
; Fixed insert/delete line problem when at bottom/top of screen.
; Newlines never scroll in inverse video lines
; Implemented cursor save/restore (from Univ. Md.)
; "Echo" status on mode corrected.
; JD, 6 December 1984

	public	term, gss		; entry points
	include	msdefs.h

; some character definitions

chesc	equ	27
bel	equ	7

print_out equ	05h			; dos function to print to printer
pbout	equ	02h			; dos function to print a character
prscan	equ	72h			; print-screen scan code...
upscan	equ	49h			; up page
dnscan	equ	51h			; down page
ctlup	equ	84h			; ctl-up page
ctldn	equ	76h			; ctl-down page
homscn	equ	47h			; home screen
endscn	equ	4fh			; end of screen
screen	equ	10h			; bios screen call
kb	equ	16h			; keyboard interrupt
alt_shift equ	8H			; alt shift key down
ctl_shift equ	4H			; ctl key down
left_shift equ	2H			; left shift key down
right_shift equ	1H			; right shift key down

timer	equ	40h			; timer port
bel_prt	equ	61h			; speaker control

crt_status equ	3dah			; crt status port
disp_enb   equ	8			; display enable bit

uparr	equ	48h			; scan codes for arrow keys
dnarr	equ	50h
lftarr	equ	4bh
rgtarr	equ	4dh


modfrm	struc				; format of mode line
	db	'Esc chr: '
m_echr	db	2 dup (?)
	db	', Port: '
m_prt	db	1 dup (?)
	db	', Speed: '
m_baud	db	4 dup (?)
	db	', Parity: '
m_par	db	4 dup (?)
	db	', Echo: '
m_echo	db	3 dup (?)
	db	', Type '
m_hlp	db	2 dup (?)
	db	'? for Help'
modfrm	ends

datas	segment	public 'datas'
waste	db	100h dup (?)		;*** need this junk because assembler
					;*** generates non-relocatable offsets
					;*** for things like 
					;*** "sub di,offset foo"
					;*** if offset foo < 100H
; stuff for screen routines
flags	db	?			; status flags...
flags1	db	0			; internal flags.
prtscr	equ	80h			; print screen pressed
lnwrap	equ	40h			; line wrap enabled.
inited	equ	08h			; been here before...
cursor	dw	?
esc_ch	db	?
argadr	dw	?			; address of arg blk
ckeys	db	0,prscan,dnscan,upscan,endscn,homscn,ctlup,ctldn
	db	uparr,dnarr,lftarr,rgtarr
lckeys	equ	$-ckeys
; ckacts must parallel ckeys above...
ckacts	dw	trnbrk,trnprs,upwpg,dnwpg,endwnd,homwnd,dnwind,upwind
	dw	trnupw,trndnw,trnlfw,trnrgw

uptrn	db	esc,'A'
dntrn	db	esc,'B'
rgtrn	db	esc,'C'
lftrn	db	esc,'D'

spctab	db	chesc,cr,lf,bs,tab,bel
lspctab	equ	$-spctab
spcjmp	dw	outesc,outcr,outlf,outbs,outtab,outbel	; must match spctab
esctab	db	'YABCDEFGHIJKLM'
	db	'NOZ@[pq<vw'
	db	'jk'
lesctab	equ	$-esctab
; escjmp must parallel esctab above
escjmp	dw	movcur,curup,curdwn,currt,outbs,clrscr,outign,outign,curhom
	dw	revind,clreow,clreol,inslin,dellin,delchr,noins
	dw	vtident,entins,doansi
	dw	invvid,nrmvid,outign,dowrap,nowrap
	dw	savecur,restcur
vtidstr	db	chesc,'/K'
lvtidst	equ	$-vtidstr
coord	dw	?
insmod	db	?
wcoord	dw	?
ttstate	dw	outtt0
curattr	db	?			; current attribute
ansarg	db	?			; ansi argument value
igncnt	db	?			; # of chars to ignore
beldiv	dw	2dch			; 550 hz?
crt_mode db	?
crt_cols db	?
crt_lins db	?	
low_rgt	dw	?			; lower right corner of window
; key redefinitions
ktrntab	dw	?			; address of translation table
krpltab	dw	?			; address of replacement table
tmptab	db	0eh,3bh			; scan code for bs, f1
ktlen	dw	?
modbuf	modfrm	<>			; mode line buffer
; routine to call for captured output
captrtn	dw	?
oldcur	dw	0			; save'd cursor position
; some static data for mode line
unkbaud	db	'Unk '			; must be 4 chars...
baudn	db	'45.5'
	db	'  50'
	db	'  75'
	db	' 110'
	db	' 135'
	db	' 150'
	db	' 300'
	db	' 600'
	db	'1200'
	db	'1800'
	db	'2000'
	db	'2400'
	db	'4800'
	db	'9600'
baudnsiz  equ	14			; # of baud rates known (tbl size / 4)
parnams	db	'Even'
	db	'Mark'
	db	'None'
	db	'Odd '			; must be 4 chars
	db	'Spc '
offmsg	db	'Off'
onmsg	db	'On '
lclmsg	db	'Lcl'
remmsg	db	'Rem'
; storage for multi-window stuff
swidth	equ	80
slen	equ	24
npgs	equ	5			; # of pages on each side
bsize	equ	swidth*slen*npgs*2
scrsav	dw	swidth*slen dup (0700H)	; a blank screen

; circular buffer.  To work properly, the buffer size should be an exact
; multiple of swidth*2
cbuf	struc
pp	dw	?			; place ptr in buffer
bend	dw	?			; end of buffer
orig	dw	?			; buffer origin
lcnt	dw	0			; # of lines in buffer.
cbuf	ends

topbuf	db	bsize dup (?)
botbuf	db	bsize dup (?)		; top and bottom windows
tlbuf	db	swidth*2 dup (?)
blbuf	db	swidth*2 dup (?)
twnd	cbuf	<topbuf,topbuf+bsize-1,topbuf,0>
bwnd	cbuf	<botbuf,botbuf+bsize-1,botbuf,0>
portno	db	?
prton	db	'Printer: on'
prtnlen	equ	$-prton
prtoff	db	'Printer: off'
prtflen	equ	$-prtoff
datas	ends

code	segment	public			; code segment
	extrn	prtchr:near,outchr:near,sendbr:near
	assume	cs:code,ds:datas,es:datas

scrini	proc	near			; init screen stuff
	mov	ah,15			; read video state...
	int	screen
	mov	crt_mode,al		; save crt mode
	cmp	ah,crt_cols		; is real # of cols < passed?
	jge	scrin1			; no
	mov	crt_cols,ah		; yes, save # of cols
scrin1:	mov	dl,crt_cols		; # of cols again
	mov	dh,crt_lins		; and # of rows
	dec	dl
	dec	dh
	mov	low_rgt,dx		; save away window address
	mov	insmod,0		; not in insert mode
	mov	dx,cursor		; assume old cursor
	test	flags1,inited		; have we been here before?
	jnz	scrin4			; yes, use old cursor
	mov	curattr,07		; else set nice screen attribute
	mov	ttstate,offset outtt0	; normal screen state
	mov	ah,3			; figure out where cursor is
	xor	bh,bh			; page 0
	int	screen			; read cursor position
	cmp	dh,crt_lins		; past logical end of screen?
	jb	scrin2			; no, keep going
	mov	dh,byte ptr low_rgt+1	; yes, just use lower right corner
scrin2:	cmp	dl,crt_cols		; maybe past right margin
	jb	scrin3			; no, use the way it is
	mov	dl,byte ptr low_rgt
scrin3:	mov	cursor,dx		; init cursor
scrin4:	mov	ah,2
	xor	bh,bh
	int	screen			; set cursor in case it moved
	ret
scrini	endp

argini	proc	near			; read passed arguments
	mov	bx,argadr		; base of argument block
	mov	al,[bx].flgs		; get flags
	and	al,capt+emheath+havtt+trnctl+lclecho+modoff
	mov	flags,al		; mask for allowable and save
	and	flags1,not (prtscr)	; these are allowable
					; (others remain).
	mov	al,[bx].prt
	cmp	al,portno		; using same port?
	je	argin1			; yes, go on
	and	flags1,not inited	; else re-init stuff
argin1:	mov	portno,al		; update port number
	mov	al,[bx].cols
	mov	crt_cols,al
	mov	al,[bx].rows
	mov	crt_lins,al		; init # of rows and cols
	mov	ax,[bx].captr
	mov	captrtn,ax		; buffer capture routine
	mov	ax,[bx].belld
	mov	beldiv,ax		; bell divisor
	mov	ax,[bx].klen
	mov	ktlen,ax		; length of key redef tbl
	mov	ax,[bx].ktab
	mov	ktrntab,ax		; save key translation table
	mov	ax,[bx].krpl
	mov	krpltab,ax
	mov	al,[bx].escc
	mov	esc_ch,al
	ret				; that's it
argini	endp

modlin	proc	near			; turn on mode line
	mov	al,esc_ch
	mov	modbuf.m_echr,' '	; first char is initial space
	mov	modbuf.m_hlp,' '	; goes here too.
	cmp	al,32			; printable?
	jnb	modl1			; yes, keep going
	add	al,40h			; made printable
	mov	modbuf.m_echr,'^'	; note control char
	mov	modbuf.m_hlp,'^'
modl1:	mov	modbuf.m_echr+1,al	; fill in character
	mov	modbuf.m_hlp+1,al
	mov	bx,argadr		; get argument block
	mov	al,[bx].baudb		; get baud bits
	mov	si,offset unkbaud	; assume unknown baud
	cmp	al,baudnsiz		; too big?
	jnb	modl2			; yes, use default
	mov	cl,2			; each is 4 bytes long
	shl	al,cl
	mov	ah,0
	add	ax,offset baudn
	mov	si,ax
modl2:	mov	cx,size m_baud		; length of baud space
	mov	di,offset modbuf.m_baud
	rep	movsb			; copy in baud rate
	mov	al,[bx].parity		; get parity code
	mov	cl,2			; each is 4 bytes long...
	shl	al,cl
	mov	ah,0
	add	ax,offset parnams	; names of parity settings
	mov	si,ax
	mov	cx,4			; each is 4 long
	mov	di,offset modbuf.m_par
	rep	movsb
	mov	si,offset remmsg	; Assume remote echoing.
	test	flags,lclecho		; Is remote side echoing?
	jz	modl4			; Yes, keep going
	mov	si,offset lclmsg	; Else it's local echoing. 
modl4:	mov	cx,3			; size of on/off
	mov	di,offset modbuf.m_echo
	rep	movsb
	mov	al,'1'
	cmp	portno,1		; port 1?
	je	modl5			; yes, keep going
	mov	al,'2'
modl5:	mov	modbuf.m_prt,al		; fill in port number
	mov	cx,size modfrm		; this is size of mode line
	mov	si,offset modbuf	; mode line image
; alternate entry to write an alternate mode line
modwrt:	push	cx
	push	si			; save mode line and size
	mov	dx,24 * 100h		; 25th line for mode line
	push	word ptr curattr	; save current attributes
	mov	curattr,70h		; want inverse video
	call	clreol			; clear to end of line...
	pop	word ptr curattr	; restore attributes
	mov	dx,24 * 100h
	mov	bh,0
	mov	ah,2			; set cursor position
	int	screen
	pop	si
	pop	cx			; restore these
modl6:	lodsb				; get a byte
	mov	ah,14			; write to terminal
	mov	bh,0			; page 0
	int	screen
	loop	modl6			; write out entire mode line
	mov	dx,cursor
	mov	ah,2
	mov	bh,0
	int	screen			; put cursor back where it belongs
	ret				; and return
modlin	endp

clrmod	proc	near			; clear mode line
	mov	ax,600h			; blank window
	mov	cx,24 * 100h		; beginning of window
	mov	dx,24 * 100h + 79	; end of window
	mov	bh,07			; nice attribute
	int	screen			; clear mode line
	ret				; and return
clrmod	endp

term	proc	near			; terminal emulator entry point

	mov	argadr,ax		; save argument ptr
	push	es			; save caller's extra segment address
	mov	ax,seg datas
	mov	es,ax

	call	argini			; init options from arg address

	call	scrini			; init screen stuff

	test	flags1,inited		; have we run yet?
	jz	term1			; no, forget this part
	call	restscr			; restore screen
term1:	or	flags1,inited		; remember we've run already.

	call	clrmod			; empty mode line
	test	flags,modoff		; is mode line disabled?
	jnz	lp			; yes, skip it
	call	modlin			; turn on mode line

lp:	call	portchr			; char at port?
	 jnc	chkinp			; no, keep going
	call	outtty			; print on terminal

chkinp:	mov	ah,1
	int	kb
	jz	lp			; nothing available...
	xor	ah,ah
	int	kb			; get the char from the buffer
	push	ax			; save character temporarily
	call	gss			; get shift state into al
	mov	bl,al			; save shift state
	pop	ax

	cmp	al,esc_ch		; escape character?
	je	quit			; yes, stop here

	call	trnout			; translate if nec., output to prt
	jmp	chkinp			; and keep going

quit:	call	clrmod			; erase mode line
	call	savescr			; save screen

	mov	al,flags
	mov	bx,argadr
	mov	[bx].flgs,al		; update flags in arg block
	pop	es			; restore segment register
	ret				; and return to caller

term	endp

; get shift state into al.  We only care about shift, ctl, and alt keys.
; right shift is collapsed into left shift.
gss	proc	near
	mov	ah,2
	int	kb			; get current shift state
	mov	bl,al			; copy for a moment
	and	bl,right_shift		; mask out all but right shift
	shl	bl,1			; move right shift to left shift pos
	or	al,bl			; collapse shift bits
	and	al,(left_shift + alt_shift + ctl_shift)
	ret
gss	endp

; save the screen so we can restore it
; maybe save cursor also.
savescr	proc	near
	push	ds
	mov	si,0
	mov	di,offset scrsav	; place to put screen
	mov	cx,80*24		; # of words on screen
	call	scrseg
	push	ax			; save screen segment
	call	scrwait			; wait for screen to be ready
	pop	ds			; address screen
	rep	movsw			; save the screen
	pop	ds			; restore this
	ret				; and return
savescr	endp

; restore screen from scrsav buffer
restscr	proc	near
	push	es
	mov	si,offset scrsav	; source
	mov	di,0
	mov	cx,80*24
	call	scrseg
	mov	es,ax
	call	scrwait
	rep	movsw			; restore it
	pop	es
	ret
restscr	endp

; send the character in al out to the serial port
; handle echoing also...
outprt	proc	near
	test	flags,lclecho		; echoing?
	jz	outpr1			; no, forget it
	push	ax			; save char
	call	outtty			; print it
	pop	ax			; restore
outpr1:	mov	ah,al			; this is where outchr expects it
	call	outchr			; output to the port
	 nop
	 nop
	 nop				; skip returns...
	ret
outprt	endp

; returns with carry on if a character is available

portchr	proc	near
	call	prtchr			; character at port?
	 jmp	short portc1		; yes, go handle
	nop				; skip return is stupid...
	clc				; no carry -> no character
	ret				; and return...
portc1:	and	al,7fh			; we don't worry about parity here
	stc				; have a character
	ret				; and return
portchr	endp


; translate the scan code in ah according to the translate table
; given in ktrntab/krpltab, output to port.  If no translation,
; use ascii char in al. (should probably include shift state
; somewhere).  Shift state is in bl.
trnout	proc	near
	test	flags,havtt		; translate table given?
	jz	trnou3			; no, just output character
	push	ax			; save original value
	mov	al,ah			; put scan code into ah
	mov	ah,bl			; shift state into top half.
	mov	di,ktrntab		; pick up translate tbl
	mov	cx,ktlen		; length of tbl
	repne	scasw			; look for our key
	pop	ax			; recover character
	jne	trnou3			; not found, forget it
	sub	di,ktrntab		; get index into tbl
	sub	di,2			; (minus 2 for pre-increment)
	mov	bx,krpltab		; get replacement table
	mov	si,[bx][di]		; and addr of replacement
	mov	cl,[si]			; get first byte (length)
	xor	ch,ch			; clear high-order byte
	inc	si			; point to translation string
trnou2:	lodsb				; get a byte
	push	si
	push	cx			; save important registers
	call	outprt			; send to port
	pop	cx
	pop	si
	loop	trnou2			; send all chars
	ret				; and return
trnou3:	cmp	ah,4eh			;*** plus key thing?
	je	trnmod			; yes, go toggle mode line
	cmp	al,0			; is it a special code?
	jne	trnou4			; no, don't do this
	mov	al,ah			; get scan code
	mov	cx,lckeys		; length of table
	mov	di,offset ckeys		; table address
	repne	scasb
	mov	al,0			; ascii code was 0...
	jne	trnou4			; not found, keep going
	sub	di,offset ckeys+1	; get table offset
	shl	di,1			; shift for word offset
	jmp	ckacts[di]		; jump to appropriate routine
trnou4:	call	outprt			; just output single char
	ret				; and return

trnmod:	test	flags,modoff		; mode line already off?
	jnz	trnm1			; yes, go turn on
	call	clrmod			; no, clear mode line here
	or	flags,modoff		; turn on flag
	ret				; and return
trnm1:	call	modlin			; turn on mode line
	and	flags,not modoff	; clear flag
	ret				; and return

trnbrk:	mov	ah,dconio
	mov	dl,0ffH
	int	dos			; read the bogus ^C DOS gets.
	call	sendbr
	ret
trnprs:	xor	flags1,prtscr		; flip the flag
	and	flags,not modoff	; turn on mode line
	mov	si,offset prton
	mov	cx,prtnlen
	test	flags1,prtscr		; did it go on?
	jnz	trnpr1			; yes, say so
	mov	si,offset prtoff
	mov	cx,prtflen
trnpr1:	call	modwrt			; write into mode line
	ret				; and return

; common entry for arrow keys
trnarr:	mov	cx,2			; length is always 2
	jmp	trnou2			; go send definition

trnupw:	mov	si,offset uptrn
	jmp	trnarr

trndnw:	mov	si,offset dntrn
	jmp	trnarr

trnlfw:	mov	si,offset lftrn
	jmp	trnarr

trnrgw:	mov	si,offset rgtrn
	jmp	trnarr

trnout	endp

; move viewing window up (screen moves down).
; alternate entry upwin2 doesn't beep if invalid.
upwind	proc	near
	mov	ax,offset tlbuf	; place to put line temporarily
	mov	bx,offset twnd ; where to get lines from
	call	getcirc		; try to get a line
	jnc	upwin3		; have a line, go show it
	call	outbel		; else ring bel
	ret			; and return
upwin2:	mov	ax,offset tlbuf
	mov	bx,offset twnd
	call	getcirc
	jnc	upwin3
	ret			; this just rets if no line avail.
upwin3:	mov	ax,offset blbuf	; place for bottom line
	call	getbot		; fetch bottom line
	mov	ax,offset blbuf
	mov	bx,offset bwnd
	call	putcirc		; save in circular buffer
	mov	ax,701h		; scroll down one line
	xor	cx,cx		; from top
	mov	dx,low_rgt	; to bottom
	mov	bh,curattr
	int	screen		; scroll it down
	mov	di,0		; offset for destination
	mov	si,offset tlbuf	; where to get line from
	mov	cx,swidth	; length of line
	push	es
	call	scrseg
	push	ax
	call	scrwait
	pop	es
	rep	movsw		; copy the line in
	pop	es		; restore this
	ret			; and return
upwind	endp


; move viewing window down a line (screen scrolls up)
; entry dwin2 does same w/out checking to see if scroll is legal
dnwind	proc	near
	mov	ax,offset blbuf	; place to put line temporarily
	mov	bx,offset bwnd ; where to get lines from
	call	getcirc		; try to get a line
	jnc	dnwin3		; have a line, go show it
	call	outbel		; else ring bel
	ret			; and return
dnwin2:	mov	ax,offset blbuf
	mov	bx,offset bwnd
	call	getcirc
	jnc	dnwin3
	ret			; this just rets if no line avail.
dnwin3:	call	scrprep		; save top line
	mov	ax,601h		; scroll up one line
	xor	cx,cx		; from top
	mov	dx,low_rgt	; to bottom
	mov	bh,curattr
	int	screen		; scroll it down
	mov	dx,low_rgt
	mov	dl,0		; get addr of last line
	call	scrloc
	mov	di,ax		; this is offset in dest
	mov	si,offset blbuf	; where to get line from
	mov	cx,swidth	; length of line
	push	es
	call	scrseg
	push	ax
	call	scrwait
	pop	es
	rep	movsw		; copy the line in
	pop	es		; restore this
	ret			; and return
dnwind	endp

; move viewing window down as much as possible...
endwnd	proc	near
	mov	cx,1000			; large number of lines
	jmp	dnwp1			; and enter dwnpg
endwnd	endp

; scroll viewing window down (contents move up) crt_lins times...
dnwpg	proc	near
	mov	cl,crt_lins
	mov	ch,0
dnwp1:	push	cx			; save this
	call	dnwin2
	pop	cx
	loop	dnwp1
	ret				; and return
dnwpg	endp

; home viewing window
homwnd	proc	near
	mov	cx,1000			; large # of lines
	jmp	upwp1			; join upwpg
homwnd	endp

; scroll viewing window up (screen moves down) a page
upwpg	proc	near
	mov	cl,crt_lins
	mov	ch,0
upwp1:	push	cx
	call	upwin2
	pop	cx
	loop	upwp1
	ret				; and return
upwpg	endp

; get the bottom line into the buffer pointed to by ax.
getbot	proc	near
	push	ds
	mov	di,ax			; save dest
	mov	cx,swidth
	mov	dx,low_rgt
	mov	dl,0
	call	scrloc
	mov	si,ax
	call	scrseg
	push	ax
	call	scrwait
	pop	ds
	rep	movsw
	pop	ds
	ret
getbot	endp

; put a line into the circular buffer.  Pass the buffer structure
; in bx, the pointer to the line in ax.
putcirc	proc	near
	push	si
	push	di
	push	cx
	push	dx
	mov	di,[bx].pp		; pick up buffer ptr
	add	di,2*swidth		; increment to next avail slot
	cmp	di,[bx].bend		; past end?
	jb	putci1			; no, leave alone
	mov	di,[bx].orig		; else start at beginning
putci1:	mov	[bx].pp,di		; update ptr
	mov	si,ax			; this is source
	mov	cx,swidth
	rep	movsw			; copy into buffer
	cmp	[bx].lcnt,npgs*slen	; can we increment it?
	jae	putci2			; no, keep going
	inc	[bx].lcnt		; else count this line
putci2:	pop	dx
	pop	cx
	pop	di
	pop	si			; restore registers
	ret
putcirc	endp

; get a line from the circular buffer, removing it from the buffer.
; returns with carry on if the buffer is empty.
; pass the buffer structure in bx, the buffer to copy the line into
; in ax.
getcirc	proc	near
	push	si
	push	di
	push	cx
	push	dx
	cmp	[bx].lcnt,0		; any lines in buffer?
	jne	getci1			; yes, ok to take one out.
	stc				; else set carry
	jmp	short getcir3		; and return
getci1:	mov	si,[bx].pp		; this is source
	mov	di,ax			; this is dest
	mov	cx,swidth		; # of chars to copy
	rep	movsw
	mov	si,[bx].pp		; get ptr again
	sub	si,2*swidth		; move back
	cmp	si,[bx].orig		; compare to origin
	jae	getcir2			; still in range, continue
	mov	si,[bx].bend		; else use end of buffer
	sub	si,2*swidth-1		; minus length of a piece
getcir2:mov	[bx].pp,si		; update ptr
	dec	[bx].lcnt		; decrement # of lines in buffer
	clc				; make sure no carry
getcir3:pop	dx
	pop	cx
	pop	di
	pop	si
	ret
getcirc	endp

; call before scrolling to save top line...
scrprep	proc	near
	push	ds
	mov	si,0			; offset of top line
	mov	cx,swidth		; length of line
	mov	di,offset tlbuf		; place to put line temporarily
	call	scrseg
	push	ax
	call	scrwait
	pop	ds
	rep	movsw			; copy the line
	pop	ds			; restore this
	mov	ax,offset tlbuf
	mov	bx,offset twnd		; this is where it goes
	call	putcirc			; put into buffer
	ret				; and return
scrprep	endp


; put the character in al to the screen
outtty	proc	near
	test	flags,capt		; capturing output?
	jz	outnoc			; no, forget this part
	push	ax			; save char
	call	captrtn			; give it captured character
	pop	ax			; restore character and keep going

outnoc:	test	flags1,prtscr		; should we be printing?
	jz	outnop			; no, keep going
	push	ax
	mov	ah,print_out
	mov	dl,al			; put character here for dos...
	int	dos
	pop	ax

outnop:	test	flags,emheath		; emulating heath?
	jnz	outnop1			; yup, go do something smart
	mov	dl,al
	mov	ah,pbout
	int	dos			; else let dos print char
	ret				; and return

outnop1:mov	dx,cursor		; these may need cursor...
	jmp	ttstate			; jump according to current state

outtt0:
	cmp	al,32			; special character?
	jb	outtt1			; yes, handle specially...

	cmp	insmod,0		; in insert mode?
	je	outnrm			; no, output normal
	push	ax			; save character
	call	inschr			; insert a character
	pop	ax
outnrm:	xor	bh,bh			; current page
	mov	cx,1			; only one char
	mov	bl,curattr		; with current attribute
	mov	ah,9
	int	screen			; put onto screen
	mov	dx,cursor		; get cursor pos
currt:	inc	dl			; bump col
	cmp	dl,crt_cols		; see if in range
	jb	setcur			; in range, go set cursor
	test	flags1,lnwrap		; in wrap mode?
	jz	outign			; no, just return w/out updating cursor
wrap:	xor	dl,dl
	inc	dh			; handle wrap
setcur:	cmp	dh,crt_lins
	jb	setc1			; not off end, keep going
	push	dx			; save row/col
	call	scrprep			; save top line in window buf
	mov	ax,0601h		; scroll up one line
	xor	cx,cx			; from 0,0
	mov	dx,low_rgt		; to 24,80
	mov	bh,7			; nice attribute
	int	screen			; do the scroll
	pop	dx
	mov	dh,crt_lins		; go to bottom line again...
	dec	dh
setc1:	xor	bh,bh			; page is 0
	mov	cursor,dx		; save cursor pos
	mov	ah,2
	int	screen			; set cursor
outign:	ret				; and return
; special character (in al)
outtt1:	mov	di,offset spctab	; special char table
	mov	cx,lspctab		; length of tbl
	repne	scasb			; look for char in tbl
	jz	outtt2			; found, go do something with it
	test	flags,trnctl		; are we allowed to print carets?
	jz	outign			; no, just ignore it.
	push	ax			; save char
	mov	al,'^'
	call	outtty			; print caret
	pop	ax
	add	al,'A'-1		; make printable
	jmp	outtty			; print, then return

outtt2:	mov	dx,cursor		; might need cursor pos
	sub	di,offset spctab+1	; get index of char
	shl	di,1			; double for word offset
	jmp	spcjmp[di]		; and go handle

; special char routines.  cursor is in dx, char in al

outlf:	inc	dh			; bump row
	jmp	setcur

outcr:	xor	dl,dl			; set col to 0
	jmp	setcur

outbs:	or	dl,dl
	jle	setcur			; col 0, can't back up
	dec	dl			; back up col
	jmp	setcur			; and use if reasonable

outtab:	mov	dl,byte ptr cursor	; get initial column
	add	dl,8			; tab is at most 8 columns
	and	dl,not 111b		; round down to a multiple of 8
	cmp	dl,crt_cols		; out of range?
	jb	setcur			; no, go set it
	test	flags1,lnwrap		; in wrap mode?
	jnz	outta1			; yes, wrap to next line
	mov	dl,byte ptr low_rgt	; else just move to right margin
	jmp	setcur
outta1:	jmp	wrap
	
; stolen from bios
outbel:	mov	al,10110110b		; timer initialization
	out	timer+3,al
	mov	ax,beldiv		; bel divisor
	out	timer+2,al
	mov	al,ah
	out	timer+2,al		; output divisor
	in	al,bel_prt
	mov	ah,al			; remember original value
	or	al,3			; turn speaker on
	out	bel_prt,al
	mov	cx,8888h
outbe1:	loop	outbe1			; wait a while
	mov	al,ah
	out	bel_prt,al		; turn bell off
	ret				; and return

outesc:	mov	ttstate,offset escseq	; expect escape sequence.
	ret				; and return

; escape-char handling routines
escseq:	mov	ttstate,offset outtt0	; put state back to normal
	mov	di,offset esctab	; escape char tbl
	mov	cx,lesctab		; length of tbl
	repne	scasb			; look for it in tbl
	jz	escsq1			; found, go use it
	jmp	outtty			; not there, just print it
escsq1:	sub	di,offset esctab+1	; get offset into tbl
	shl	di,1			; convert to word offset
	jmp	escjmp[di]		; and go dispatch on it

; escape dispatch routines
revind:	cmp	dh,0
	jle	revin1
	dec	dh			; back up a row
	jmp	setcur			; and go set cursor
revin1:	push	dx			; save cursor pos
	mov	ax,701h			; scroll down one line
	xor	cx,cx			; from top
	mov	dx,low_rgt		; to bottom
	mov	bh,curattr
	int	screen			; scroll it down
	pop	dx			; restore cursor.
	mov	dh,0			; set row back to 0
	jmp	setcur

curup:	cmp	dh,0			; w/in range?
	jle	curu1			; no, skip this
	dec	dh			; else back up
curu1:	jmp	setcur			; and go set position

curdwn:	inc	dh
	jmp	setcur			; increment row (setcur can scroll!)

; currt is above

clrscr:	call	curhom			; go home cursor
	jmp	clreow			; then clear to end of window

curhom:	xor	dx,dx			; move to 0,0
	jmp	setcur

clreow:	cmp	dl,0			; at beginning of line?
	jz	clrw1			; yes, skip this part...
	push	dx			; remember cursor pos
	call	clreol			; clear to end of this line
	pop	dx
	inc	dh			; bump row
	xor	dl,dl			; start from col 0
clrw1:	cmp	dh,crt_lins		; last line on screen
	jnb	clrw2			; if not in range, forget it
	mov	ax,700h			; clear whole window
	mov	cx,dx			; this is beginning
	mov	dx,low_rgt
;	mov	dx,174fh		; this is lower right corner
	mov	bh,curattr		; default attribute
	int	screen			; go clear it
clrw2:	ret				; and return

clreol:	push	es
	mov	cl,crt_cols		; last col + 1
	sub	cl,dl			; this is # of chars to move
	xor	ch,ch
	jcxz	clrl1
	call	scrloc			; compute screen location (to ax)
	mov	di,ax
	call	scrseg
	mov	es,ax			; address screen segment
	call	scrwait			; wait for retrace
	mov	ah,curattr		; current attribute
	mov	al,' '			; fill char
	rep	stosw			; fill line with spaces
clrl1:	pop	es
	ret				; and return

inslin:	mov	al,1			; scroll one line
; alternate entry if inserting more then one line
inslin1:mov	ch,dh			; start at current row
	xor	cl,cl			; column 0
	mov	dx,low_rgt
	mov	ah,7h			; scroll down.
	mov	bh,curattr		; attribute
	cmp	ch,dh			; moving last line down?
	jne	insli2			; no, keep going
	mov	al,0			; yes, just clear it
insli2:	int	screen
	ret

dellin:	mov	al,1			; scroll 1 line
; alternate entry if deleting more than one line
dellin1:mov	ch,dh			; start at current row
	xor	cl,cl			; column 0
	mov	dx,low_rgt
;	mov	dx,174fh		; to bottom of screen
	mov	ah,6h			; scroll up.
	mov	bh,curattr		; attribute
	cmp	ch,dh			; deleting last line?
	jne	delli2			; no, go on
	mov	al,0			; yes, just blank it
delli2:	int	screen
	ret

delchr:	push	ds
	push	es
	pushf			; these may get changed...
	mov	cl,crt_cols
	dec	cl
	sub	cl,dl		; from what we're fiddling)
	xor	ch,ch
	jcxz	delch1		; none to move, forget it
	call	scrloc		; compute location
	mov	di,ax
	mov	si,ax
	add	si,2		; source is next position over
	call	scrseg		; pick up screen segment
	push	ax		; put screen segment onto stack
	mov	es,ax		; and in destination segment
	call	scrwait		; wait for retrace
	pop	ds		; address screen segment
	rep	movsw		; delete it
	mov	byte ptr [di],' ' ; kill char at end of line
delch1:	popf
	pop	es
	pop	ds
	ret

inschr:	push	ds
	push	es		; save these as well
	pushf			; might as well save flags...
	mov	dx,cursor	; this is place to do it
	mov	cl,crt_cols
	dec	cl
;	mov	cl,79		; this is last col to move, +1 for length
	sub	cl,dl		; compute distance to end
	xor	ch,ch		; clear top half of offset
	jcxz	insch1		; nothing to move...
	mov	dl,crt_cols
	sub	dl,2		; last col to move
;	mov	dl,78		; this is address of last col to move
	call	scrloc		; compute pos
	mov	si,ax
	mov	di,ax
	add	di,2		; destination is one byte over...
	std			; remember to move us backwards
	call	scrseg		; find screen segment
	mov	es,ax
	push	ax		; save screen seg on stack
	call	scrwait		; wait until save to write
	pop	ds		; address screen segment
	rep	movsw		; move each char and attribute
insch1:	popf
	pop	es
	pop	ds
	ret			; and return

noins:	mov	insmod,0		; turn off insert mode
	ret				; and return

movcur:	mov	wcoord,2		; want two coordinates...
	mov	ttstate,offset getcoord
	ret				; and return

vtident: mov	si,offset vtidstr
	mov	cx,lvtidst
vtid1:	lodsb				; get a byte from the string
	push	si			; have to save from outprt
	push	cx
	call	outprt			; send to serial port
	pop	cx
	pop	si
	loop	vtid1			; go thru all chars
	ret				; and return

entins:	mov	insmod,0ffh		; enter insert mode...
	ret				; and return

doansi:	mov	ansarg,0		; ansi argument is 0 (default)
	mov	ttstate,offset getaarg	; state is get ansi argument
	ret

getaarg:cmp	al,'0'
	jb	getaa1			; in range for digit?
	cmp	al,'9'
	ja	getaa1
	sub	al,'0'			; convert to binary
	mov	dl,al			; tuck away
	mov	al,ansarg
	mov	dh,10
	mul	dh			; shift sum
	add	al,dl			; add in this digit (what about ovfl?)
	mov	ansarg,al
	ret				; and return

getaa1:	cmp	al,'?'			; the dreaded question mark?
	jne	getaa2
	mov	ttstate,offset ignn	; we ignore these...
	mov	igncnt,2		; this is how many chars come after him
	ret

getaa2:	mov	ttstate,offset outtt0	; reset state
	mov	dx,cursor		; this needs cursor position
	mov	bl,ansarg
	xchg	al,bl			; put argument in nice place
	cmp	bl,'L'			; insert line?
	jne	getaa3
	jmp	inslin1			; and go do it

getaa3:	cmp	bl,'M'			; maybe delete line?
	jne	getaa4
	jmp	dellin1

getaa4:	ret				; ignore.

invvid:	mov	curattr,70h		; attribute for inverse video
	ret

nrmvid:	mov	curattr,07h		; attribute for normal video
	ret

dowrap:	or	flags1,lnwrap		; turn on wrap mode
	ret				; and return

nowrap:	and	flags1,not lnwrap	; turn off wrap mode
	ret				; and return

; get a coordinate.
getcoord:
	sub	al,32			; coordinates offset by 32
	mov	si,wcoord
	dec	si
	mov	byte ptr coord[si],al	; fill in appropriate coordinate
	mov	wcoord,si		; update flag
	jnz	getco1			; more needed, can't do anything yet
	mov	ttstate,offset outtt0	; reset state
	mov	dx,coord		; get coordinates
	jmp	setcur			; and go jump there
getco1:	ret

; ignore following igncnt characters
ignn:	dec	igncnt			; decrement count
	jnz	ignn1
	mov	ttstate,offset outtt0	; put state back to normal if done
ignn1:	ret

; save cursor
savecur:
	mov	oldcur,dx
	ret

; restore cursor
restcur:
	mov	dx,oldcur
	jmp	setcur
	
outtty	endp

; computes screen location to ax, given row and col in dx.
; trashes ax,bx
scrloc	proc	near
	mov	al,dh		; get row
	mov	bl,crt_cols	;** row size
	mul	bl		; multiply by row size
	xor	dh,dh		; clear col
	add	ax,dx		; this is current position
	sal	ax,1		; double for attributes
	ret
scrloc	endp

; puts current screen segment in ax
scrseg	proc	near
	mov	ax,0b000h		; assume bw for now
	cmp	crt_mode,7		; 7 is bw (***)
	je	scrse1
	mov	ax,0b800h		; color card
scrse1:	ret
scrseg	endp

; wait for retrace so can write to screen memory
scrwait	proc	near
	cmp	crt_mode,7		; bw mode?
	je	scrwa3			; yes, no waiting
	push	dx
	mov	dx,crt_status
scrwa1:	in	al,dx
	test	al,disp_enb		; display enable?
	jnz	scrwa1			; yes, keep waiting
scrwa2:	in	al,dx
	test	al,disp_enb		; now wait for it to go off
	jz	scrwa2			; so can have whole cycle
	pop	dx
scrwa3:	ret				; that was easy...
scrwait	endp
code	ends

if1
	%out [End of pass 1]
else
	%out [End of assembly]
endif

	end

```
{% endraw %}

## MSYIBMJ.ASM

{% raw %}
```

	title term

; edit history
; Fixed destructive tab problem (received from many people)
; Fixed insert/delete line problem when at bottom/top of screen.
; Newlines never scroll in inverse video lines
; Implemented cursor save/restore (from Univ. Md.)
; "Echo" status on mode corrected.
; JD, 6 December 1984

	public	term, gss		; entry points
	include	msdefs.h

; some character definitions

chesc	equ	27
bel	equ	7

print_out equ	05h			; dos function to print to printer
pbout	equ	02h			; dos function to print a character
prscan	equ	72h			; print-screen scan code...
upscan	equ	49h			; up page
dnscan	equ	51h			; down page
ctlup	equ	84h			; ctl-up page
ctldn	equ	76h			; ctl-down page
homscn	equ	47h			; home screen
endscn	equ	4fh			; end of screen
screen	equ	10h			; bios screen call
kb	equ	16h			; keyboard interrupt
alt_shift equ	8H			; alt shift key down
ctl_shift equ	4H			; ctl key down
left_shift equ	2H			; left shift key down
right_shift equ	1H			; right shift key down

timer	equ	40h			; timer port
bel_prt	equ	61h			; speaker control

crt_status equ	3dah			; crt status port
disp_enb   equ	8			; display enable bit

uparr	equ	48h			; scan codes for arrow keys
dnarr	equ	50h
lftarr	equ	4bh
rgtarr	equ	4dh


modfrm	struc				; format of mode line
	db	'Esc chr: '
m_echr	db	2 dup (?)
	db	', Port: '
m_prt	db	1 dup (?)
	db	', Speed: '
m_baud	db	4 dup (?)
	db	', Parity: '
m_par	db	4 dup (?)
	db	', Echo: '
m_echo	db	3 dup (?)
	db	', Type '
m_hlp	db	2 dup (?)
	db	'? for Help'
modfrm	ends

datas	segment	public 'datas'
waste	db	100h dup (?)		;*** need this junk because assembler
					;*** generates non-relocatable offsets
					;*** for things like 
					;*** "sub di,offset foo"
					;*** if offset foo < 100H
; stuff for screen routines
flags	db	?			; status flags...
flags1	db	0			; internal flags.
prtscr	equ	80h			; print screen pressed
lnwrap	equ	40h			; line wrap enabled.
inited	equ	08h			; been here before...
cursor	dw	?
esc_ch	db	?
argadr	dw	?			; address of arg blk
ckeys	db	0,prscan,dnscan,upscan,endscn,homscn,ctlup,ctldn
	db	uparr,dnarr,lftarr,rgtarr
lckeys	equ	$-ckeys
; ckacts must parallel ckeys above...
ckacts	dw	trnbrk,trnprs,upwpg,dnwpg,endwnd,homwnd,dnwind,upwind
	dw	trnupw,trndnw,trnlfw,trnrgw

uptrn	db	esc,'A'
dntrn	db	esc,'B'
rgtrn	db	esc,'C'
lftrn	db	esc,'D'

spctab	db	chesc,cr,lf,bs,tab,bel
lspctab	equ	$-spctab
spcjmp	dw	outesc,outcr,outlf,outbs,outtab,outbel	; must match spctab
esctab	db	'YABCDEFGHIJKLM'
	db	'NOZ@[pq<vw'
	db	'jk'
lesctab	equ	$-esctab
; escjmp must parallel esctab above
escjmp	dw	movcur,curup,curdwn,currt,outbs,clrscr,outign,outign,curhom
	dw	revind,clreow,clreol,inslin,dellin,delchr,noins
	dw	vtident,entins,doansi
	dw	invvid,nrmvid,outign,dowrap,nowrap
	dw	savecur,restcur
vtidstr	db	chesc,'/K'
lvtidst	equ	$-vtidstr
coord	dw	?
insmod	db	?
wcoord	dw	?
ttstate	dw	outtt0
curattr	db	?			; current attribute
ansarg	db	?			; ansi argument value
igncnt	db	?			; # of chars to ignore
beldiv	dw	2dch			; 550 hz?
crt_mode db	?
crt_cols db	?
crt_lins db	?	
low_rgt	dw	?			; lower right corner of window
; key redefinitions
ktrntab	dw	?			; address of translation table
krpltab	dw	?			; address of replacement table
tmptab	db	0eh,3bh			; scan code for bs, f1
ktlen	dw	?
modbuf	modfrm	<>			; mode line buffer
; routine to call for captured output
captrtn	dw	?
oldcur	dw	0			; save'd cursor position
; some static data for mode line
unkbaud	db	'Unk '			; must be 4 chars...
baudn	db	'45.5'
	db	'  50'
	db	'  75'
	db	' 110'
	db	' 135'
	db	' 150'
	db	' 300'
	db	' 600'
	db	'1200'
	db	'1800'
	db	'2000'
	db	'2400'
	db	'4800'
	db	'9600'
baudnsiz  equ	14			; # of baud rates known (tbl size / 4)
parnams	db	'Even'
	db	'Mark'
	db	'None'
	db	'Odd '			; must be 4 chars
	db	'Spc '
offmsg	db	'Off'
onmsg	db	'On '
lclmsg	db	'Lcl'
remmsg	db	'Rem'
; storage for multi-window stuff
swidth	equ	80
slen	equ	24
npgs	equ	5			; # of pages on each side
bsize	equ	swidth*slen*npgs*2
scrsav	dw	swidth*slen dup (0700H)	; a blank screen

; circular buffer.  To work properly, the buffer size should be an exact
; multiple of swidth*2
cbuf	struc
pp	dw	?			; place ptr in buffer
bend	dw	?			; end of buffer
orig	dw	?			; buffer origin
lcnt	dw	0			; # of lines in buffer.
cbuf	ends

topbuf	db	bsize dup (?)
botbuf	db	bsize dup (?)		; top and bottom windows
tlbuf	db	swidth*2 dup (?)
blbuf	db	swidth*2 dup (?)
twnd	cbuf	<topbuf,topbuf+bsize-1,topbuf,0>
bwnd	cbuf	<botbuf,botbuf+bsize-1,botbuf,0>
portno	db	?
prton	db	'Printer: on'
prtnlen	equ	$-prton
prtoff	db	'Printer: off'
prtflen	equ	$-prtoff
datas	ends

code	segment	public			; code segment
	extrn	prtchr:near,outchr:near,sendbr:near
	assume	cs:code,ds:datas,es:datas

scrini	proc	near			; init screen stuff
	mov	ah,15			; read video state...
	int	screen
	mov	crt_mode,al		; save crt mode
	cmp	ah,crt_cols		; is real # of cols < passed?
	jge	scrin1			; no
	mov	crt_cols,ah		; yes, save # of cols
scrin1:	mov	dl,crt_cols		; # of cols again
	mov	dh,crt_lins		; and # of rows
	dec	dl
	dec	dh
	mov	low_rgt,dx		; save away window address
	mov	insmod,0		; not in insert mode
	mov	dx,cursor		; assume old cursor
	test	flags1,inited		; have we been here before?
	jnz	scrin4			; yes, use old cursor
	mov	curattr,07		; else set nice screen attribute
	mov	ttstate,offset outtt0	; normal screen state
	mov	ah,3			; figure out where cursor is
	xor	bh,bh			; page 0
	int	screen			; read cursor position
	cmp	dh,crt_lins		; past logical end of screen?
	jb	scrin2			; no, keep going
	mov	dh,byte ptr low_rgt+1	; yes, just use lower right corner
scrin2:	cmp	dl,crt_cols		; maybe past right margin
	jb	scrin3			; no, use the way it is
	mov	dl,byte ptr low_rgt
scrin3:	mov	cursor,dx		; init cursor
scrin4:	mov	ah,2
	xor	bh,bh
	int	screen			; set cursor in case it moved
	ret
scrini	endp

argini	proc	near			; read passed arguments
	mov	bx,argadr		; base of argument block
	mov	al,[bx].flgs		; get flags
	and	al,capt+emheath+havtt+trnctl+lclecho+modoff
	mov	flags,al		; mask for allowable and save
	and	flags1,not (prtscr)	; these are allowable
					; (others remain).
	mov	al,[bx].prt
	cmp	al,portno		; using same port?
	je	argin1			; yes, go on
	and	flags1,not inited	; else re-init stuff
argin1:	mov	portno,al		; update port number
	mov	al,[bx].cols
	mov	crt_cols,al
	mov	al,[bx].rows
	mov	crt_lins,al		; init # of rows and cols
	mov	ax,[bx].captr
	mov	captrtn,ax		; buffer capture routine
	mov	ax,[bx].belld
	mov	beldiv,ax		; bell divisor
	mov	ax,[bx].klen
	mov	ktlen,ax		; length of key redef tbl
	mov	ax,[bx].ktab
	mov	ktrntab,ax		; save key translation table
	mov	ax,[bx].krpl
	mov	krpltab,ax
	mov	al,[bx].escc
	mov	esc_ch,al
	ret				; that's it
argini	endp

modlin	proc	near			; turn on mode line
	mov	al,esc_ch
	mov	modbuf.m_echr,' '	; first char is initial space
	mov	modbuf.m_hlp,' '	; goes here too.
	cmp	al,32			; printable?
	jnb	modl1			; yes, keep going
	add	al,40h			; made printable
	mov	modbuf.m_echr,'^'	; note control char
	mov	modbuf.m_hlp,'^'
modl1:	mov	modbuf.m_echr+1,al	; fill in character
	mov	modbuf.m_hlp+1,al
	mov	bx,argadr		; get argument block
	mov	al,[bx].baudb		; get baud bits
	mov	si,offset unkbaud	; assume unknown baud
	cmp	al,baudnsiz		; too big?
	jnb	modl2			; yes, use default
	mov	cl,2			; each is 4 bytes long
	shl	al,cl
	mov	ah,0
	add	ax,offset baudn
	mov	si,ax
modl2:	mov	cx,size m_baud		; length of baud space
	mov	di,offset modbuf.m_baud
	rep	movsb			; copy in baud rate
	mov	al,[bx].parity		; get parity code
	mov	cl,2			; each is 4 bytes long...
	shl	al,cl
	mov	ah,0
	add	ax,offset parnams	; names of parity settings
	mov	si,ax
	mov	cx,4			; each is 4 long
	mov	di,offset modbuf.m_par
	rep	movsb
	mov	si,offset remmsg	; Assume remote echoing.
	test	flags,lclecho		; Is remote side echoing?
	jz	modl4			; Yes, keep going
	mov	si,offset lclmsg	; Else it's local echoing. 
modl4:	mov	cx,3			; size of on/off
	mov	di,offset modbuf.m_echo
	rep	movsb
	mov	al,'1'
	cmp	portno,1		; port 1?
	je	modl5			; yes, keep going
	mov	al,'2'
modl5:	mov	modbuf.m_prt,al		; fill in port number
	mov	cx,size modfrm		; this is size of mode line
	mov	si,offset modbuf	; mode line image
; alternate entry to write an alternate mode line
modwrt:	push	cx
	push	si			; save mode line and size
	mov	dx,24 * 100h		; 25th line for mode line
	push	word ptr curattr	; save current attributes
	mov	curattr,70h		; want inverse video
	call	clreol			; clear to end of line...
	pop	word ptr curattr	; restore attributes
	mov	dx,24 * 100h
	mov	bh,0
	mov	ah,2			; set cursor position
	int	screen
	pop	si
	pop	cx			; restore these
modl6:	lodsb				; get a byte
	mov	ah,14			; write to terminal
	mov	bh,0			; page 0
	int	screen
	loop	modl6			; write out entire mode line
	mov	dx,cursor
	mov	ah,2
	mov	bh,0
	int	screen			; put cursor back where it belongs
	ret				; and return
modlin	endp

clrmod	proc	near			; clear mode line
	mov	ax,600h			; blank window
	mov	cx,24 * 100h		; beginning of window
	mov	dx,24 * 100h + 79	; end of window
	mov	bh,07			; nice attribute
	int	screen			; clear mode line
	ret				; and return
clrmod	endp

term	proc	near			; terminal emulator entry point

	mov	argadr,ax		; save argument ptr
	push	es			; save caller's extra segment address
	mov	ax,seg datas
	mov	es,ax

	call	argini			; init options from arg address

	call	scrini			; init screen stuff

	test	flags1,inited		; have we run yet?
	jz	term1			; no, forget this part
	call	restscr			; restore screen
term1:	or	flags1,inited		; remember we've run already.

	call	clrmod			; empty mode line
	test	flags,modoff		; is mode line disabled?
	jnz	lp			; yes, skip it
	call	modlin			; turn on mode line

lp:	call	portchr			; char at port?
	 jnc	chkinp			; no, keep going
	call	outtty			; print on terminal

chkinp:	mov	ah,1
	int	kb
	jz	lp			; nothing available...
	xor	ah,ah
	int	kb			; get the char from the buffer
	push	ax			; save character temporarily
	call	gss			; get shift state into al
	mov	bl,al			; save shift state
	pop	ax

	cmp	al,esc_ch		; escape character?
	je	quit			; yes, stop here

	call	trnout			; translate if nec., output to prt
	jmp	chkinp			; and keep going

quit:	call	clrmod			; erase mode line
	call	savescr			; save screen

	mov	al,flags
	mov	bx,argadr
	mov	[bx].flgs,al		; update flags in arg block
	pop	es			; restore segment register
	ret				; and return to caller

term	endp

; get shift state into al.  We only care about shift, ctl, and alt keys.
; right shift is collapsed into left shift.
gss	proc	near
	mov	ah,2
	int	kb			; get current shift state
	mov	bl,al			; copy for a moment
	and	bl,right_shift		; mask out all but right shift
	shl	bl,1			; move right shift to left shift pos
	or	al,bl			; collapse shift bits
	and	al,(left_shift + alt_shift + ctl_shift)
	ret
gss	endp

; save the screen so we can restore it
; maybe save cursor also.
savescr	proc	near
	push	ds
	mov	si,0
	mov	di,offset scrsav	; place to put screen
	mov	cx,80*24		; # of words on screen
	call	scrseg
	push	ax			; save screen segment
	call	scrwait			; wait for screen to be ready
	pop	ds			; address screen
	rep	movsw			; save the screen
	pop	ds			; restore this
	ret				; and return
savescr	endp

; restore screen from scrsav buffer
restscr	proc	near
	push	es
	mov	si,offset scrsav	; source
	mov	di,0
	mov	cx,80*24
	call	scrseg
	mov	es,ax
	call	scrwait
	rep	movsw			; restore it
	pop	es
	ret
restscr	endp

; send the character in al out to the serial port
; handle echoing also...
outprt	proc	near
	test	flags,lclecho		; echoing?
	jz	outpr1			; no, forget it
	push	ax			; save char
	call	outtty			; print it
	pop	ax			; restore
outpr1:	mov	ah,al			; this is where outchr expects it
	call	outchr			; output to the port
	 nop
	 nop
	 nop				; skip returns...
	ret
outprt	endp

; returns with carry on if a character is available

portchr	proc	near
	call	prtchr			; character at port?
	 jmp	short portc1		; yes, go handle
	nop				; skip return is stupid...
	clc				; no carry -> no character
	ret				; and return...
portc1:	and	al,7fh			; we don't worry about parity here
	stc				; have a character
	ret				; and return
portchr	endp


; translate the scan code in ah according to the translate table
; given in ktrntab/krpltab, output to port.  If no translation,
; use ascii char in al. (should probably include shift state
; somewhere).  Shift state is in bl.
trnout	proc	near
	test	flags,havtt		; translate table given?
	jz	trnou3			; no, just output character
	push	ax			; save original value
	mov	al,ah			; put scan code into ah
	mov	ah,bl			; shift state into top half.
	mov	di,ktrntab		; pick up translate tbl
	mov	cx,ktlen		; length of tbl
	repne	scasw			; look for our key
	pop	ax			; recover character
	jne	trnou3			; not found, forget it
	sub	di,ktrntab		; get index into tbl
	sub	di,2			; (minus 2 for pre-increment)
	mov	bx,krpltab		; get replacement table
	mov	si,[bx][di]		; and addr of replacement
	mov	cl,[si]			; get first byte (length)
	xor	ch,ch			; clear high-order byte
	inc	si			; point to translation string
trnou2:	lodsb				; get a byte
	push	si
	push	cx			; save important registers
	call	outprt			; send to port
	pop	cx
	pop	si
	loop	trnou2			; send all chars
	ret				; and return
trnou3:	cmp	ah,4eh			;*** plus key thing?
	je	trnmod			; yes, go toggle mode line
	cmp	al,0			; is it a special code?
	jne	trnou4			; no, don't do this
	mov	al,ah			; get scan code
	mov	cx,lckeys		; length of table
	mov	di,offset ckeys		; table address
	repne	scasb
	mov	al,0			; ascii code was 0...
	jne	trnou4			; not found, keep going
	sub	di,offset ckeys+1	; get table offset
	shl	di,1			; shift for word offset
	jmp	ckacts[di]		; jump to appropriate routine
trnou4:	call	outprt			; just output single char
	ret				; and return

trnmod:	test	flags,modoff		; mode line already off?
	jnz	trnm1			; yes, go turn on
	call	clrmod			; no, clear mode line here
	or	flags,modoff		; turn on flag
	ret				; and return
trnm1:	call	modlin			; turn on mode line
	and	flags,not modoff	; clear flag
	ret				; and return

trnbrk:	mov	ah,dconio
	mov	dl,0ffH
	int	dos			; read the bogus ^C DOS gets.
	call	sendbr
	ret
trnprs:	xor	flags1,prtscr		; flip the flag
	and	flags,not modoff	; turn on mode line
	mov	si,offset prton
	mov	cx,prtnlen
	test	flags1,prtscr		; did it go on?
	jnz	trnpr1			; yes, say so
	mov	si,offset prtoff
	mov	cx,prtflen
trnpr1:	call	modwrt			; write into mode line
	ret				; and return

; common entry for arrow keys
trnarr:	mov	cx,2			; length is always 2
	jmp	trnou2			; go send definition

trnupw:	mov	si,offset uptrn
	jmp	trnarr

trndnw:	mov	si,offset dntrn
	jmp	trnarr

trnlfw:	mov	si,offset lftrn
	jmp	trnarr

trnrgw:	mov	si,offset rgtrn
	jmp	trnarr

trnout	endp

; move viewing window up (screen moves down).
; alternate entry upwin2 doesn't beep if invalid.
upwind	proc	near
	mov	ax,offset tlbuf	; place to put line temporarily
	mov	bx,offset twnd ; where to get lines from
	call	getcirc		; try to get a line
	jnc	upwin3		; have a line, go show it
	call	outbel		; else ring bel
	ret			; and return
upwin2:	mov	ax,offset tlbuf
	mov	bx,offset twnd
	call	getcirc
	jnc	upwin3
	ret			; this just rets if no line avail.
upwin3:	mov	ax,offset blbuf	; place for bottom line
	call	getbot		; fetch bottom line
	mov	ax,offset blbuf
	mov	bx,offset bwnd
	call	putcirc		; save in circular buffer
	mov	ax,701h		; scroll down one line
	xor	cx,cx		; from top
	mov	dx,low_rgt	; to bottom
	mov	bh,curattr
	int	screen		; scroll it down
	mov	di,0		; offset for destination
	mov	si,offset tlbuf	; where to get line from
	mov	cx,swidth	; length of line
	push	es
	call	scrseg
	push	ax
	call	scrwait
	pop	es
	rep	movsw		; copy the line in
	pop	es		; restore this
	ret			; and return
upwind	endp


; move viewing window down a line (screen scrolls up)
; entry dwin2 does same w/out checking to see if scroll is legal
dnwind	proc	near
	mov	ax,offset blbuf	; place to put line temporarily
	mov	bx,offset bwnd ; where to get lines from
	call	getcirc		; try to get a line
	jnc	dnwin3		; have a line, go show it
	call	outbel		; else ring bel
	ret			; and return
dnwin2:	mov	ax,offset blbuf
	mov	bx,offset bwnd
	call	getcirc
	jnc	dnwin3
	ret			; this just rets if no line avail.
dnwin3:	call	scrprep		; save top line
	mov	ax,601h		; scroll up one line
	xor	cx,cx		; from top
	mov	dx,low_rgt	; to bottom
	mov	bh,curattr
	int	screen		; scroll it down
	mov	dx,low_rgt
	mov	dl,0		; get addr of last line
	call	scrloc
	mov	di,ax		; this is offset in dest
	mov	si,offset blbuf	; where to get line from
	mov	cx,swidth	; length of line
	push	es
	call	scrseg
	push	ax
	call	scrwait
	pop	es
	rep	movsw		; copy the line in
	pop	es		; restore this
	ret			; and return
dnwind	endp

; move viewing window down as much as possible...
endwnd	proc	near
	mov	cx,1000			; large number of lines
	jmp	dnwp1			; and enter dwnpg
endwnd	endp

; scroll viewing window down (contents move up) crt_lins times...
dnwpg	proc	near
	mov	cl,crt_lins
	mov	ch,0
dnwp1:	push	cx			; save this
	call	dnwin2
	pop	cx
	loop	dnwp1
	ret				; and return
dnwpg	endp

; home viewing window
homwnd	proc	near
	mov	cx,1000			; large # of lines
	jmp	upwp1			; join upwpg
homwnd	endp

; scroll viewing window up (screen moves down) a page
upwpg	proc	near
	mov	cl,crt_lins
	mov	ch,0
upwp1:	push	cx
	call	upwin2
	pop	cx
	loop	upwp1
	ret				; and return
upwpg	endp

; get the bottom line into the buffer pointed to by ax.
getbot	proc	near
	push	ds
	mov	di,ax			; save dest
	mov	cx,swidth
	mov	dx,low_rgt
	mov	dl,0
	call	scrloc
	mov	si,ax
	call	scrseg
	push	ax
	call	scrwait
	pop	ds
	rep	movsw
	pop	ds
	ret
getbot	endp

; put a line into the circular buffer.  Pass the buffer structure
; in bx, the pointer to the line in ax.
putcirc	proc	near
	push	si
	push	di
	push	cx
	push	dx
	mov	di,[bx].pp		; pick up buffer ptr
	add	di,2*swidth		; increment to next avail slot
	cmp	di,[bx].bend		; past end?
	jb	putci1			; no, leave alone
	mov	di,[bx].orig		; else start at beginning
putci1:	mov	[bx].pp,di		; update ptr
	mov	si,ax			; this is source
	mov	cx,swidth
	rep	movsw			; copy into buffer
	cmp	[bx].lcnt,npgs*slen	; can we increment it?
	jae	putci2			; no, keep going
	inc	[bx].lcnt		; else count this line
putci2:	pop	dx
	pop	cx
	pop	di
	pop	si			; restore registers
	ret
putcirc	endp

; get a line from the circular buffer, removing it from the buffer.
; returns with carry on if the buffer is empty.
; pass the buffer structure in bx, the buffer to copy the line into
; in ax.
getcirc	proc	near
	push	si
	push	di
	push	cx
	push	dx
	cmp	[bx].lcnt,0		; any lines in buffer?
	jne	getci1			; yes, ok to take one out.
	stc				; else set carry
	jmp	short getcir3		; and return
getci1:	mov	si,[bx].pp		; this is source
	mov	di,ax			; this is dest
	mov	cx,swidth		; # of chars to copy
	rep	movsw
	mov	si,[bx].pp		; get ptr again
	sub	si,2*swidth		; move back
	cmp	si,[bx].orig		; compare to origin
	jae	getcir2			; still in range, continue
	mov	si,[bx].bend		; else use end of buffer
	sub	si,2*swidth-1		; minus length of a piece
getcir2:mov	[bx].pp,si		; update ptr
	dec	[bx].lcnt		; decrement # of lines in buffer
	clc				; make sure no carry
getcir3:pop	dx
	pop	cx
	pop	di
	pop	si
	ret
getcirc	endp

; call before scrolling to save top line...
scrprep	proc	near
	push	ds
	mov	si,0			; offset of top line
	mov	cx,swidth		; length of line
	mov	di,offset tlbuf		; place to put line temporarily
	call	scrseg
	push	ax
	call	scrwait
	pop	ds
	rep	movsw			; copy the line
	pop	ds			; restore this
	mov	ax,offset tlbuf
	mov	bx,offset twnd		; this is where it goes
	call	putcirc			; put into buffer
	ret				; and return
scrprep	endp


; put the character in al to the screen
outtty	proc	near
	test	flags,capt		; capturing output?
	jz	outnoc			; no, forget this part
	push	ax			; save char
	call	captrtn			; give it captured character
	pop	ax			; restore character and keep going

outnoc:	test	flags1,prtscr		; should we be printing?
	jz	outnop			; no, keep going
	push	ax
	mov	ah,print_out
	mov	dl,al			; put character here for dos...
	int	dos
	pop	ax

outnop:	test	flags,emheath		; emulating heath?
	jnz	outnop1			; yup, go do something smart
	mov	dl,al
	mov	ah,pbout
	int	dos			; else let dos print char
	ret				; and return

outnop1:mov	dx,cursor		; these may need cursor...
	jmp	ttstate			; jump according to current state

outtt0:
	cmp	al,32			; special character?
	jb	outtt1			; yes, handle specially...

	cmp	insmod,0		; in insert mode?
	je	outnrm			; no, output normal
	push	ax			; save character
	call	inschr			; insert a character
	pop	ax
outnrm:	xor	bh,bh			; current page
	mov	cx,1			; only one char
	mov	bl,curattr		; with current attribute
	mov	ah,9
	int	screen			; put onto screen
	mov	dx,cursor		; get cursor pos
currt:	inc	dl			; bump col
	cmp	dl,crt_cols		; see if in range
	jb	setcur			; in range, go set cursor
	test	flags1,lnwrap		; in wrap mode?
	jz	outign			; no, just return w/out updating cursor
wrap:	xor	dl,dl
	inc	dh			; handle wrap
setcur:	cmp	dh,crt_lins
	jb	setc1			; not off end, keep going
	push	dx			; save row/col
	call	scrprep			; save top line in window buf
	mov	ax,0601h		; scroll up one line
	xor	cx,cx			; from 0,0
	mov	dx,low_rgt		; to 24,80
	mov	bh,7			; nice attribute
	int	screen			; do the scroll
	pop	dx
	mov	dh,crt_lins		; go to bottom line again...
	dec	dh
setc1:	xor	bh,bh			; page is 0
	mov	cursor,dx		; save cursor pos
	mov	ah,2
	int	screen			; set cursor
outign:	ret				; and return
; special character (in al)
outtt1:	mov	di,offset spctab	; special char table
	mov	cx,lspctab		; length of tbl
	repne	scasb			; look for char in tbl
	jz	outtt2			; found, go do something with it
	test	flags,trnctl		; are we allowed to print carets?
	jz	outign			; no, just ignore it.
	push	ax			; save char
	mov	al,'^'
	call	outtty			; print caret
	pop	ax
	add	al,'A'-1		; make printable
	jmp	outtty			; print, then return

outtt2:	mov	dx,cursor		; might need cursor pos
	sub	di,offset spctab+1	; get index of char
	shl	di,1			; double for word offset
	jmp	spcjmp[di]		; and go handle

; special char routines.  cursor is in dx, char in al

outlf:	inc	dh			; bump row
	jmp	setcur

outcr:	xor	dl,dl			; set col to 0
	jmp	setcur

outbs:	or	dl,dl
	jle	setcur			; col 0, can't back up
	dec	dl			; back up col
	jmp	setcur			; and use if reasonable

outtab:	mov	dl,byte ptr cursor	; get initial column
	add	dl,8			; tab is at most 8 columns
	and	dl,not 111b		; round down to a multiple of 8
	cmp	dl,crt_cols		; out of range?
	jb	setcur			; no, go set it
	test	flags1,lnwrap		; in wrap mode?
	jnz	outta1			; yes, wrap to next line
	mov	dl,byte ptr low_rgt	; else just move to right margin
	jmp	setcur
outta1:	jmp	wrap
	
; stolen from bios
outbel:	mov	al,10110110b		; timer initialization
	out	timer+3,al
	mov	ax,beldiv		; bel divisor
	out	timer+2,al
	mov	al,ah
	out	timer+2,al		; output divisor
	in	al,bel_prt
	mov	ah,al			; remember original value
	or	al,3			; turn speaker on
	out	bel_prt,al
	mov	cx,0888h		; shorten bell to 17ms [jc 12-8-84]
;	mov	cx,8888h		; commented out [jc]
outbe1:	loop	outbe1			; wait a while
	mov	al,ah
	out	bel_prt,al		; turn bell off
	ret				; and return

outesc:	mov	ttstate,offset escseq	; expect escape sequence.
	ret				; and return

; escape-char handling routines
escseq:	mov	ttstate,offset outtt0	; put state back to normal
	mov	di,offset esctab	; escape char tbl
	mov	cx,lesctab		; length of tbl
	repne	scasb			; look for it in tbl
	jz	escsq1			; found, go use it
	jmp	outtty			; not there, just print it
escsq1:	sub	di,offset esctab+1	; get offset into tbl
	shl	di,1			; convert to word offset
	jmp	escjmp[di]		; and go dispatch on it

; escape dispatch routines
revind:	cmp	dh,0
	jle	revin1
	dec	dh			; back up a row
	jmp	setcur			; and go set cursor
revin1:	push	dx			; save cursor pos
	mov	ax,701h			; scroll down one line
	xor	cx,cx			; from top
	mov	dx,low_rgt		; to bottom
	mov	bh,curattr
	int	screen			; scroll it down
	pop	dx			; restore cursor.
	mov	dh,0			; set row back to 0
	jmp	setcur

curup:	cmp	dh,0			; w/in range?
	jle	curu1			; no, skip this
	dec	dh			; else back up
curu1:	jmp	setcur			; and go set position

curdwn:	inc	dh
	jmp	setcur			; increment row (setcur can scroll!)

; currt is above

clrscr:	call	curhom			; go home cursor
	jmp	clreow			; then clear to end of window

curhom:	xor	dx,dx			; move to 0,0
	jmp	setcur

clreow:	cmp	dl,0			; at beginning of line?
	jz	clrw1			; yes, skip this part...
	push	dx			; remember cursor pos
	call	clreol			; clear to end of this line
	pop	dx
	inc	dh			; bump row
	xor	dl,dl			; start from col 0
clrw1:	cmp	dh,crt_lins		; last line on screen
	jnb	clrw2			; if not in range, forget it
	mov	ax,700h			; clear whole window
	mov	cx,dx			; this is beginning
	mov	dx,low_rgt
;	mov	dx,174fh		; this is lower right corner
	mov	bh,curattr		; default attribute
	int	screen			; go clear it
clrw2:	ret				; and return

clreol:	push	es
	mov	cl,crt_cols		; last col + 1
	sub	cl,dl			; this is # of chars to move
	xor	ch,ch
	jcxz	clrl1
	call	scrloc			; compute screen location (to ax)
	mov	di,ax
	call	scrseg
	mov	es,ax			; address screen segment
	call	scrwait			; wait for retrace
	mov	ah,curattr		; current attribute
	mov	al,' '			; fill char
	rep	stosw			; fill line with spaces
clrl1:	pop	es
	ret				; and return

inslin:	mov	al,1			; scroll one line
; alternate entry if inserting more then one line
inslin1:mov	ch,dh			; start at current row
	xor	cl,cl			; column 0
	mov	dx,low_rgt
	mov	ah,7h			; scroll down.
	mov	bh,curattr		; attribute
	cmp	ch,dh			; moving last line down?
	jne	insli2			; no, keep going
	mov	al,0			; yes, just clear it
insli2:	int	screen
	ret

dellin:	mov	al,1			; scroll 1 line
; alternate entry if deleting more than one line
dellin1:mov	ch,dh			; start at current row
	xor	cl,cl			; column 0
	mov	dx,low_rgt
;	mov	dx,174fh		; to bottom of screen
	mov	ah,6h			; scroll up.
	mov	bh,curattr		; attribute
	cmp	ch,dh			; deleting last line?
	jne	delli2			; no, go on
	mov	al,0			; yes, just blank it
delli2:	int	screen
	ret

delchr:	push	ds
	push	es
	pushf			; these may get changed...
	mov	cl,crt_cols
	dec	cl
	sub	cl,dl		; from what we're fiddling)
	xor	ch,ch
	jcxz	delch1		; none to move, forget it
	call	scrloc		; compute location
	mov	di,ax
	mov	si,ax
	add	si,2		; source is next position over
	call	scrseg		; pick up screen segment
	push	ax		; put screen segment onto stack
	mov	es,ax		; and in destination segment
	call	scrwait		; wait for retrace
	pop	ds		; address screen segment
	rep	movsw		; delete it
	mov	byte ptr [di],' ' ; kill char at end of line
delch1:	popf
	pop	es
	pop	ds
	ret

inschr:	push	ds
	push	es		; save these as well
	pushf			; might as well save flags...
	mov	dx,cursor	; this is place to do it
	mov	cl,crt_cols
	dec	cl
;	mov	cl,79		; this is last col to move, +1 for length
	sub	cl,dl		; compute distance to end
	xor	ch,ch		; clear top half of offset
	jcxz	insch1		; nothing to move...
	mov	dl,crt_cols
	sub	dl,2		; last col to move
;	mov	dl,78		; this is address of last col to move
	call	scrloc		; compute pos
	mov	si,ax
	mov	di,ax
	add	di,2		; destination is one byte over...
	std			; remember to move us backwards
	call	scrseg		; find screen segment
	mov	es,ax
	push	ax		; save screen seg on stack
	call	scrwait		; wait until save to write
	pop	ds		; address screen segment
	rep	movsw		; move each char and attribute
insch1:	popf
	pop	es
	pop	ds
	ret			; and return

noins:	mov	insmod,0		; turn off insert mode
	ret				; and return

movcur:	mov	wcoord,2		; want two coordinates...
	mov	ttstate,offset getcoord
	ret				; and return

vtident: mov	si,offset vtidstr
	mov	cx,lvtidst
vtid1:	lodsb				; get a byte from the string
	push	si			; have to save from outprt
	push	cx
	call	outprt			; send to serial port
	pop	cx
	pop	si
	loop	vtid1			; go thru all chars
	ret				; and return

entins:	mov	insmod,0ffh		; enter insert mode...
	ret				; and return

doansi:	mov	ansarg,0		; ansi argument is 0 (default)
	mov	ttstate,offset getaarg	; state is get ansi argument
	ret

getaarg:cmp	al,'0'
	jb	getaa1			; in range for digit?
	cmp	al,'9'
	ja	getaa1
	sub	al,'0'			; convert to binary
	mov	dl,al			; tuck away
	mov	al,ansarg
	mov	dh,10
	mul	dh			; shift sum
	add	al,dl			; add in this digit (what about ovfl?)
	mov	ansarg,al
	ret				; and return

getaa1:	cmp	al,'?'			; the dreaded question mark?
	jne	getaa2
	mov	ttstate,offset ignn	; we ignore these...
	mov	igncnt,2		; this is how many chars come after him
	ret

getaa2:	mov	ttstate,offset outtt0	; reset state
	mov	dx,cursor		; this needs cursor position
	mov	bl,ansarg
	xchg	al,bl			; put argument in nice place
	cmp	bl,'L'			; insert line?
	jne	getaa3
	jmp	inslin1			; and go do it

getaa3:	cmp	bl,'M'			; maybe delete line?
	jne	getaa4
	jmp	dellin1

getaa4:	ret				; ignore.

invvid:	mov	curattr,70h		; attribute for inverse video
	ret

nrmvid:	mov	curattr,07h		; attribute for normal video
	ret

dowrap:	or	flags1,lnwrap		; turn on wrap mode
	ret				; and return

nowrap:	and	flags1,not lnwrap	; turn off wrap mode
	ret				; and return

; get a coordinate.
getcoord:
	sub	al,32			; coordinates offset by 32
	mov	si,wcoord
	dec	si
	mov	byte ptr coord[si],al	; fill in appropriate coordinate
	mov	wcoord,si		; update flag
	jnz	getco1			; more needed, can't do anything yet
	mov	ttstate,offset outtt0	; reset state
	mov	dx,coord		; get coordinates
	jmp	setcur			; and go jump there
getco1:	ret

; ignore following igncnt characters
ignn:	dec	igncnt			; decrement count
	jnz	ignn1
	mov	ttstate,offset outtt0	; put state back to normal if done
ignn1:	ret

; save cursor
savecur:
	mov	oldcur,dx
	ret

; restore cursor
restcur:
	mov	dx,oldcur
	jmp	setcur
	
outtty	endp

; computes screen location to ax, given row and col in dx.
; trashes ax,bx
scrloc	proc	near
	mov	al,dh		; get row
	mov	bl,crt_cols	;** row size
	mul	bl		; multiply by row size
	xor	dh,dh		; clear col
	add	ax,dx		; this is current position
	sal	ax,1		; double for attributes
	ret
scrloc	endp

; puts current screen segment in ax
scrseg	proc	near
	mov	ax,0b000h		; assume bw for now
	cmp	crt_mode,7		; 7 is bw (***)
	je	scrse1
	mov	ax,0b800h		; color card
scrse1:	ret
scrseg	endp

; wait for retrace so can write to screen memory
scrwait	proc	near
	cmp	crt_mode,7		; bw mode?
	je	scrwa3			; yes, no waiting
	push	dx
	mov	dx,crt_status
scrwa1:	in	al,dx
	test	al,disp_enb		; display enable?
	jnz	scrwa1			; yes, keep waiting
scrwa2:	in	al,dx
	test	al,disp_enb		; now wait for it to go off
	jz	scrwa2			; so can have whole cycle
	pop	dx
scrwa3:	ret				; that was easy...
scrwait	endp
code	ends

if1
	%out [End of pass 1]
else
	%out [End of assembly]
endif

	end

```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0041

     Volume in drive A has no label
     Directory of A:\

    FILES41  TXT       545   2-14-87  10:30a
    MSCMD    ASM     32721  12-08-84   1:43a
    MSCOMM   ASM     19458  12-08-84   1:47a
    MSDEFS   H        9193  12-08-84   1:49a
    MSFILE   ASM     31264  12-08-84   1:55a
    MSKERM   ASM     35538  12-08-84   2:26a
    MSRECV   ASM     20231  12-08-84   2:58a
    MSSEND   ASM     32759  12-08-84   3:05a
    MSSERV   ASM     24510  12-08-84   3:10a
    MSSET    ASM     40709  12-08-84   3:18a
    MSTERM   ASM     13334  12-08-84   3:21a
    MSXDMB   ASM       121   7-28-84   5:31a
    MSXIBM   ASM     22232  12-08-84   3:52a
    MSYIBM   ASM     31431  12-08-84   4:26a
    MSYIBMJ  ASM     31507  12-08-84   2:26p
    README             565   4-11-85   2:12p
           16 file(s)     346118 bytes
                           10240 bytes free
