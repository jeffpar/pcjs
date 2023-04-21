---
layout: page
title: "PC-SIG Diskette Library (Disk #362)"
permalink: /software/pcx86/sw/misc/pcsig/0001-0999/DISK0362/
machines:
  - id: ibm5160
    type: pcx86
    config: /machines/pcx86/ibm/5160/cga/256kb/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #0362"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5160" %}

{% comment %}info_begin{% endcomment %}

## Information about "SIMTERM"

    This package provides Hewlett-Packard terminal simulation to Unix
    systems; it was last revised 07/28/84.  SimTerm creates on an IBM-PC
    simulation of an H/P like terminal to the UNIX system.  It no longer
    requires the asynchronous communications software supporting package.
    If you have need of terminal simulation for your communication chores,
    this disk may be just what you've been looking for.
    
    How to Start:  To start, enter SIMTERM For 14 pages of documentation,
    enter TYPE README.  To run, enter SIMTERM <ENTER>.
    
    File Descriptions:
    
    BOARDS        BBSs phone numbers
    ARCHCOPY BAT
    XXGRAPH  ASM
    COMM     INC
    COM      ASM
    ARGLIST  PAS
    ARGLIST  INC
    XTRANS   C
    XRECV    C
    VERSION  OBJ
    VENTEL   PAS
    UTIL     PAS
    UTIL     INC
    UPDOWN   PAS
    TOKEN    PAS
    TERMCAP  IBM
    STRUCT   MAC
    STDIO    INC
    STDIO    ASM
    GRAPH    INC
    GETPUT   PAS
    ESCPAR   PAS
    COMP     PAS
    SMVENTEL PAS
    SMTERM   LNK
    SIMTERM  LNK
    SIMTERM  INC
    SIMTERM  EXE  Main program execution file
    SCANLINE PAS
    SAVDIS   PAS
    README        Documentation (14 pp) manual
    SAVDIS   PAS
    SCANLINE PAS
    MENUS         (Clues)
    MENUIT   PAS
    MAINSIM  PAS
    MACTEST  ASM
    LOGIN    PAS
    KEYPARSE PAS
    INFO          (Prologue)      terminal
    IBMPR    C
{% comment %}info_end{% endcomment %}

{% comment %}samples_begin{% endcomment %}

## FILES.TXT

{% raw %}
```
H-P like TERMINAL SIMULATOR to Unix  REVISED 07/28/84
 
This is a DOUBLE-SIDED (DOS 2.00) diskette  (program for any DOS)
 
Name           Description
 
ARCHCOPY.BAT   \\
ARGLIST .INC    \\
ARGLIST .PAS     \\
BOARDS         (BBS #s)
COM     .ASM       \\
COMM    .INC        \\   "SimTerm"
COMP    .PAS         \\   creates
ESCPAR  .PAS          \\   IBM-PC
GETPUT  .PAS           \\   simulation
GRAPH   .INC            \\   of
IBMPR   .C               \\   HP-like
INFO           (Prologue) \\   terminal
KEYPARSE.PAS               \\   to
LOGIN   .PAS                \\   UNIX
MACTEST .ASM                 \\   system
MAINSIM .PAS                  \\
MENUIT  .PAS                   \\
MENUS          (Clues)          \\
README  .      Documentation (14 pp) manual
SAVDIS  .PAS                      XX
SCANLINE.PAS                     //
SIMTERM .EXE   Main program execution file
SIMTERM .INC                   //
SIMTERM .LNK                  //
SMTERM  .LNK                 //
SMVENTEL.PAS                //
STDIO   .ASM               //   no
STDIO   .INC              //   longer
STRUCT  .MAC             //   requires
TERMCAP .IBM            //   IBM's
TOKEN   .PAS           //   Asynchronous
UPDOWN  .PAS          //   Communications
UTIL    .INC         //   supporting
UTIL    .PAS        //   software
VENTEL  .PAS       //   package
VERSION .OBJ      //
XRECV   .C       //
XTRANS  .C      //
XXGRAPH .ASM   //
README  .035   YOU ARE READING IT
 
 
 
```
{% endraw %}

## FILES362.TXT

{% raw %}
```
------------------------------------------------------------------------
Disk No 362  SIMTERM                                            v2   DS2
------------------------------------------------------------------------
 
H-P like TERMINAL SIMULATOR to Unix  REVISED 07/28/84
 
ARCHCOPY BAT   \\
ARGLIST  INC    \\
ARGLIST  PAS     \\
BOARDS         (BBS #s)
COM      ASM       \\
COMM     INC        \\   "SimTerm"
COMP     PAS         \\   creates
ESCPAR   PAS          \\   IBM-PC
GETPUT   PAS           \\   simulation
GRAPH    INC            \\   of
IBMPR    C               \\   HP-like
INFO           (Prologue) \\   terminal
KEYPARSE PAS               \\   to
LOGIN    PAS                \\   UNIX
MACTEST  ASM                 \\   system
MAINSIM  PAS                  \\
MENUIT   PAS                   \\
MENUS          (Clues)          \\
README         Documentation (14 pp) manual
SAVDIS   PAS                      XX
SCANLINE PAS                     //
SIMTERM  EXE   Main program execution file
SIMTERM  INC                   //
SIMTERM  LNK                  //
SMTERM   LNK                 //
SMVENTEL PAS                //
STDIO    ASM               //   no
STDIO    INC              //   longer
STRUCT   MAC             //   requires
TERMCAP  IBM            //   IBM's
TOKEN    PAS           //   Asynchronous
UPDOWN   PAS          //   Communications
UTIL     INC         //   supporting
UTIL     PAS        //   software
VENTEL   PAS       //   package
VERSION  OBJ      //
XRECV    C       //
XTRANS   C      //
XXGRAPH  ASM   //
 
 
PC Software Interest Group (PC-SIG)
1030 E Duane, Suite J
Sunnyvale, CA 94086
(408) 730-9291
```
{% endraw %}

## MACTEST.ASM

{% raw %}
```
title	MACRO Test Program
page 62,132
include	struct.mac
data	segment
num	dd	1843200
	assume	cs:data
	@save	<ax,bx,si,di>
lab:	mov	ax,bx
	.repeat
	  mov al,ah
	.until loop

	.repeat
	  mov al,cl
	.until al l 34

	.repeat
	  add al,1
	.until al e 56 long

	.dowhl si e 5 long
	  dec si
	.enddo

	.if	pe
	  mov ax,1
	.else
	  mov ax,2
	  .if	z,long
	    mov ax,3
	  .else
	    mov ax,4
	  .endif
	.endif

	.dowhl ax e 1
	  dec ax
	.enddo

	.if <word ptr num> e 23h
	  mov word ptr num,40h
	.endif

	.if	ax,e,bx
	  mov ax,4
	.endif
	.if ax l 1
	  mov ax,1
	.else
	  mov ax,2
	.endif
	.if cx l 0
	  inc cx
	.else
	  dec cx
	.endif
	.if ax l 0
	  .if bx l 0
	    .if cx l 0
	      dec cx
	    .else
	      inc cx
	    .endif
	    mov bx,1
	  .else
	    mov bx,2
	  .endif
	  mov ax,1
	.else
	  mov ax,2
	.endif
	.if ax g cx long
	  add ax,1
	.else long
	  add ax,2
	.endif
	@restore
	check$
data	ends
	end
```
{% endraw %}

## STDIO.ASM

{% raw %}
```

title STDIO Routines for PASCAL
page	62,131
include b:struct.mac
data	segment byte public 'data'
dgroup	group	data
str_area db	64 dup(?)		; Save area for PATH
data	ends

stdio	segment 'code'
	assume	cs:stdio,ds:dgroup
;
; function c_open(const filename : string;access : integer) : integer;
;		 bp+10=size  bp+8=@	bp+6=value
;
cs_open struc
	dw	3 dup(?)
access	dw
const_@ dw
const_$ dw
cs_open ends
	public	c_open
c_open	  proc	  far
	push	bp			; save stack pointer
	mov	bp,sp			; setup addressibility
	lea	bx,[bp].const_@
	call	str_load		; setup the string area with file name
	mov	al,byte ptr [bp].access 	 ; 'access'
	mov	ah,3dH			; 'open' code
	int	21H
	.if	c			; check for error
	  neg	  ax			; set minus on error
	.endif
	pop	bp
	ret	6			; return
c_open	  endp
;
; function c_creat(const filename : string; mode : integer) : integer
;		  bp+10=size bp+8=@	  bp+6=value
;
	public	c_creat
c_creat proc	far
	push	bp			; save stack pointer
	mov	bp,sp
	lea	bx,[bp+8]
	call	str_load
	mov	cx,[bp+6]		; `mode'
	mov	ah,3cH			; `creat' call #
	int	21H
	.if	c
	  neg	  ax			; on error, make negative
	.endif
	pop	bp
	ret	6
c_creat   endp

;
; function c_close(filenum : integer) : integer
;		 bp+6=value
;
	public	c_close
c_close proc	far
	push	bp
	mov	bp,sp
	mov	bx,[bp+6]		; pickup file#
	mov	ah,3eH
	int	21H
	.if	c
	  neg	  ax
	.else
	  xor	  ax,ax 		; clear since not set on normal return
	.endif
	pop	bp
	ret	2
c_close endp
;
; function c_write(filenum : integer; buffer : adsmem; bsize : integer) : integer
;		     bp+12=value     bp+10=# bp+8=@	 bp+6=value
;
	public	c_write
c_write proc	far
	push	bp			; setup stack pointer
	mov	bp,sp
	push	ds
	mov	cx,[bp+6]		; buffer size
	lds	dx,dword ptr [bp+8] ; ADS of buffer
	mov	bx,[bp+12]		; file descriptor
	mov	ah,40H
	int	21H			; WRITE call
	.if	c
	  neg	  ax			; set error flag
	.endif
	pop	ds
	pop	bp
	ret	8
c_write endp
;
; function c_read(filenum : integer; buffer : adsmem; bsize : integer) : integer
;		   bp+12=value	    bp+10=# bp+8=@     bp+6=value
;
	public	c_read
c_read	proc	far
	push	bp
	mov	bp,sp
	push	ds
	mov	cx,[bp+6]		; size
	lds	dx,dword ptr [bp+8] ; ADS of buffer
	mov	bx,[bp+12]		; file descriptor
	mov	ah,3fH
	int	21H			; READ call
	.if	c
	  neg	  ax			; set error flag
	.endif
	pop	ds
	pop	bp
	ret	8
c_read	endp
;
; function c_unlink(filename : string) : integer;
;		    bp+8=# bp+6=@
;
	public	c_unlink
c_unlink proc	far
	push	bp
	mov	bp,sp
	lea	bx,[bp+6]
	call	str_load
	mov	ah,41H
	int	21H
	.if	c
	  neg	  ax
	.endif
	pop	bp
	ret	4
c_unlink endp
;
; function c_mkdir(const dirname : string) : integer
;		   bp+8=# bp+6=@
;
	public	c_mkdir
c_mkdir proc	far
	push	bp
	mov	bp,sp			; setup stack pointer
	lea	bx,[bp+6]
	call	str_load		; setup ASCIZ string
	mov	ah,39H			; MKDIR
	int	21H
	.if	c
	  neg	  ax			; set negative for error
	.endif
	pop	bp
	ret	4
c_mkdir endp
;
; function c_rmdir(const dirname : string) : integer
;		     bp+8=#  bp+6=@
;
	public	c_rmdir
c_rmdir proc	far
	push	bp			; setup stack pointer
	mov	bp,sp
	lea	bx,[bp+6]		; setup ACSIZ string
	call	str_load
	mov	ah,3AH			; RMDIR
	int	21H
	.if	c
	  neg	  ax
	.endif
	pop	bp
	ret	4
c_rmdir endp
;
; function c_chdir(const dirname : string) : integer
;		     bp+8=#  bp+6=@
;
	public	c_chdir
c_chdir proc	far
	push	bp
	mov	bp,sp			; setup ASCIZ string
	lea	bx,[bp+6]
	call	str_load
	mov	ah,3BH			; CHDIR
	int	21H
	.if	c
	  neg	  ax
	.endif
	pop	bp
	ret	4
c_chdir endp
;
; setup the ASCIZ string needed on most calls
;   returns with DS:DX pointing to the string area
;
str_load proc	near
	cld
	push	es
	push	ds
	pop	es			; setup ES for MOVS
	mov	si,[bx] 		; @ of string
	mov	cx,[bx+2]		; size
	lea	di,str_area
	mov	dx,di			; save to return to caller
rep	movsb
	mov	byte ptr[di],0		; set the end of string
	pop	es
	ret
str_load endp

stdio	ends
	end
```
{% endraw %}

## XXGRAPH.ASM

{% raw %}
```
title	Interface to CRT BIOM Routines for PASCAL
	page	85,132
;
;  COPYRIGHT @ 1982
;	Jim & Eric Holtman
;
include b:struct.mac
prolog	macro		; prolog setup for PASCAL
						push	bp
						mov	bp,sp	; parameters
	endm

epilog	macro	num	; exit of PASCAL procedure
						pop	bp
						ret	num*2
	endm

;
; setup EQU's for access to BIOS
;
bios	equ	int
crt	equ	10H
kbd	equ	16H
lpt	equ	17H
memck	equ	12H
equip	equ	11H

xxgraph segment para public 'code'
	assume	cs:xxgraph

;
; procedure xxmove(x,y : integer)
;
;    MOVE cursor to indicated position
;
	public	xxmove
xxmove	proc	far
	prolog
	mov	dh,[bp+6]	; 'y'
	mov	dl,[bp+8]	; 'x'
	xor	bh,bh		; clear (page 0)
	mov	ah,2		; cursor call
	bios	crt
	epilog	2
xxmove	endp
;
; procedure xxcls
;
;     CLEAR the screen
;
	public	xxcls
xxcls	proc	far
	prolog
	mov	cx,0	; clear entire window
	mov	dx,(24*256)+79
	mov	bh,7	; normal attribute
	mov	ax,600h
	bios	crt
	epilog	0
xxcls	endp

;
; function xxinkey(var a : char) : integer
;
;    READ the KEYBOARD
;	 allows the 'extended' ASCII characters to be read.
;
;      a - CHAR to which to return the value
;
;     return values:
;	  0 - no data present
;	  1 - normal ASCII
;	  2 - 'extended' ASCII
;
	public	xxinkey
xxinkey proc	far
	prolog
	mov	bp,[bp+6]	; @ of CHAR
	mov	ah,1		; get 'status' of keyboard
	bios	kbd		; KEYBOARD I/O
	.if	nz		; data present
	    xor   ax,ax 	  ; get the data
	    bios  kbd
	    .if   al e 0	  ; 'extended' ASCII
		mov [bp],ah	    ; store character
		mov ax,2	    ; set the flag
	    .else
		mov [bp],al	    ; normal ASCII
		mov ax,1
	    .endif
	.else
	    xor   ax,ax 	  ; set flag for 'NO DATA'
	.endif
	epilog	1
xxinkey endp
;
; procedure xscurt(type : integer)
;
;     set the type of cursor, where HIGH is start line
;     and LOW is the end line of the cursor.
;	      (range of values is 0-31)
;
	public	xscurt
xscurt	proc	far
	prolog
	mov	cx,[bp+6]	; descriptor
	mov	ah,1		; call #
	bios	crt
	epilog	1
xscurt	endp

;
; procedure xrcurp (var x,y : integer)
;
;      READ CURSOR POSITION -- returns the coords in x&y
;
	public	xrcurp
xrcurp	proc	far
	prolog
	xor	bh,bh		; set to page 0
	mov	ah,3		; call #
	bios	crt
	mov	al,dh		; row (y)
	xor	ah,ah		; zero high order bytes
	mov	si,[bp+6]	; pick up address
	mov	[si],ax 	; store 'y'
	xor	dh,dh		; zero high byte of 'x'
	mov	si,[bp+8]	; address
	mov	[si],dx 	; store 'x'
	epilog	2
xrcurp	endp

;
; procedure xscrlup(numlines,start,end : integer)
;
;     SCROLL UP
;	  numlines - # of lines to move
;	  start    - starting row
;	  end	   - ending row
;
	public	xscrlup
xscrlup proc	far
	prolog
	mov	ch,[bp+8]	; top of window <start,0>
	xor	cl,cl
	mov	dh,[bp+6]	; bottom of window <end,79>
	mov	dl,79
	mov	bh,7		; NORMAL attribute byte
	mov	al,[bp+10]	; numlines
	mov	ah,6		; call #
	bios	crt
	epilog	3
xscrlup endp

;
; procedure xscrldn(numline,start,end : integer)
;
;    SCROLL DOWN
;	 numline - # of lines to move
;	 start	 - starting row
;	 end	 - ending row
;
	public	xscrldn
xscrldn proc	far
	prolog
	mov	ch,[bp+8]	; top of window <start,0>
	xor	cl,cl
	mov	dh,[bp+6]	; bottom of window <end,79>
	mov	dl,79
	mov	bh,7		; NORMAL attribute
	mov	al,[bp+10]	; numline
	mov	ah,7		; call #
	bios	crt
	epilog	3
xscrldn endp

;
; function xrca : integer
;
;     READ CHARACTER and ATTRIBUTE at current position
;
;	  return value LOW = character; HIGH = attribute
;
	public	xrca
xrca	proc	far
	prolog
	xor	bh,bh		; page 0
	mov	ah,8		; call #
	bios	crt
	epilog	0
xrca	endp

;
; procedure xwca(ca,num : integer)
;
;     WRITE CHARACTER and ATTRIBUTE at current position
;	 LOW(ca) = character
;	 HIGH(ca) = attribute
;	 num - # of times to write (normally 1)
;
	public	xwca
xwca	proc	far
	prolog
	xor	bh,bh		; page 0
	mov	cx,[bp+6]	; num
	mov	al,[bp+8]	; character
	mov	bl,[bp+9]	; attribute
	mov	ah,9		; call #
	bios	crt
	epilog	2
xwca	endp

;
; procedure xttywrt(var a : string; attr : integer);
;
;    TTY WRITE function
;	 a - string to be written on the CRT
;
	public	xttywrt
xttywrt proc	far
	prolog
	xor	bh,bh		; page 0
	mov	si,[bp+8]	; address of string
	mov	cx,[bp+10]	; size of string
	cld			; set direction
	.repeat

	    .if <byte ptr [si]> ge 20h
		mov   bl,[bp+6]       ; attribute byte
		push  cx	      ; save since used on call
		mov   cx,1	      ; just write character once
		mov   ax,900h	      ; call# + null byte
		bios  crt
		pop   cx	      ; restore after call
	    .endif

	    lodsb		  ; pickup next character
	    mov   ah,14 	  ; call #
	    bios  crt
	.until loop
	epilog	3		; passed max size + address
xttywrt endp

;
; procedure xlpt1(var a : string);
;
;    PRINT CHARACTER string on PRINTER.
;	a - string to be printed
;
	public	xlpt1
xlpt1	proc	far
	prolog
	mov	si,[bp+6]	; @ of string
	mov	cx,[bp+8]	; size of string
	cld
	xor	dx,dx		; indicate printer 0
	.if	cx e 0		; NULL string; INIT the printer
	    mov     ah,1	  ; INIT code
	    bios    lpt
	    epilog  2		  ; return
	.endif
	.repeat
	    lodsb		  ; pickup character
	    xor   ah,ah 	  ; set code for printing
	    bios  lpt		  ; call printer BIOS routine
	.until	loop
	epilog	2		; return
xlpt1	endp
;
; procedure xfreemem
;
;	returns the value of DS+1000H.
;	  this will be the start of 'free memory'
;
	public	xfreemem
xfreemem proc	far
	mov	ax,ds
	add	ax,1000H
	ret
xfreemem endp
;
; function xmaxmem
;
;	returns the 'top of memory' (maximum address)
;
	public	xmaxmem
xmaxmem proc	far
	push	cx
	bios	memck		; get # of 1K blocks in ax
	mov	cl,6		; convert to 'segment' address
	shl	ax,cl
	pop	cx
	ret
xmaxmem endp

;
; function equipment : word
;
;	returns the 'equipment' that is on the PC. This is defined on
;	page A-67 of the Tech Manual.
;
	public	equipment
equipment proc far
	bios	equip		       ; determine equipment on PC
	ret			       ; returns value in AX from BIOS call
equipment endp

;
; procedure sleep(time:integer)
;
;	sleep for 'time' seconds
;
	public	sleep
sleep	proc	far
	push	bp
	mov	bp,sp			; address parameters
	push	ds
	xor	ax,ax			; setup low core memory
	mov	ds,ax
	mov	bx,ds:[46cH]		; low part of timer
	mov	ax,[bp+6]		; sleep 'time'
	mov	cx,182			; multiply by 18.2
	mul	cx			;    (*182/10)
	mov	cx,10
	div	cx			; result left in AX
	.repeat
	    mov    cx,ds:[46cH] 	; current time
	    sub    cx,bx
	.until ax be cx
	pop	ds
	pop	bp
	ret	2
sleep	endp

;
; function timer : word
;     returns the clock in 1 second ticks
;
	public	timer
timer	proc	far
	push	ds			; setup to address
	xor	ax,ax			; LOW core where the
	mov	ds,ax			; clock is.
	mov	ax,ds:[46CH]		; low order bytes of clock
	mov	cx,10
	mul	cx			; divide the time by 18.2
	mov	cx,182
	div	cx			; result left in AX
	pop	ds
	ret
timer	endp

	public	xxvert,retrace_flag
pas_data segment public 'data'
retrace_flag db 0			; set to false to start
pas_data ends

dgroup	group	pas_data

xxvert	proc	far			; wait for horizontal retrace
	assume	ds:dgroup
	.if	retrace_flag ne 0	; only wait if TRUE
	    xor     ax,ax		    ; address
	    mov     es,ax		    ;	low core
	    mov     dx,es:[463H]	    ; active display card
	    add     dx,6		    ; status port
	    .repeat
		in	al,dx
		test	al,1		    ; wait for LOW
	    .until  z
	    cli 			    ; lock out interrupts
	    .repeat
		in	al,dx
		test	al,1		    ; test for HIGH
	    .until  nz
	    sti
	.endif
	ret
xxvert	endp
	assume	ds:nothing

;
; procedure net_unpack(const source:string; var dest:string)
;			12:size  10:@	    8:size  6:@
;      `unpack' the transmission buffer to `printable' ASCII so it
;		use XMODEM protocol on the NET
;
	public	net_unpack
net_unpack proc far
	prolog
	mov	si,[bp+10]		; @ of source string
	mov	di,[bp+6]		; @ of dest string
	mov	bx,di
	add	bx,[bp+8]		; setup limit of conversion
					; this should be 176
	.repeat
		mov	al,[si]
		shr	al,1
		shr	al,1
		and	al,3FH		; get 1st 6 bits
		or	al,40H		; make ASCII
		mov	[di],al
		mov	ax,[si]
		xchg	al,ah		; get right byte ordering
		mov	cl,4
		shr	ax,cl
		and	al,3FH
		or	al,40H		; make ASCII
		mov	[di+1],al
		mov	ax,[si+1]
		xchg	al,ah
		mov	cl,6
		shr	ax,cl
		and	al,3FH
		or	al,40H
		mov	[di+2],al
		mov	al,[si+2]
		and	al,3FH
		or	al,40H
		mov	[di+3],al
		add	si,3
		add	di,4
	.until di ae bx
	epilog 4
net_unpack endp

;
; procedure net_pack(const source:string; var dest:string)
;		      12:size  10:@	 8:size  6:@
;      `packs' the data that came over the NET for XMODEM
;
	public	net_pack
net_pack proc	far
	prolog
	mov	si,[bp+10]		; @ of source
	mov	di,[bp+6]		; @ of dest
	mov	bx,di
	add	bx,[bp+8]		; ending condition
	.repeat
		mov	ax,[si]
		xchg	al,ah
		shl	al,1		; combine upper 6 bits
		shl	al,1
		shl	ax,1		; with lower 2 bits
		shl	ax,1
		mov	[di],ah 	; for 1st byte
		mov	ah,[si+2]	; AL contains high nibble
		shr	ah,1		; adjust the low nibble
		shr	ah,1
		and	ah,0FH
		or	ah,al		; combine for
		mov	[di+1],ah	;     2nd byte
		mov	ax,[si+2]
		xchg	al,ah
		shl	al,1		; combine the lower 6 bits
		shl	al,1
		shr	ax,1		; with the upper 2 bits
		shr	ax,1
		mov	[di+2],al	; and store as 3rd byte
		add	di,3
		add	si,4
	.until di ae bx
	epilog	4
net_pack endp

xxgraph ends
	end
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #0362

     Volume in drive A has no label
     Directory of A:\

    ARCHCOPY BAT       169   6-23-84   3:54p
    ARGLIST  INC       123   8-28-82   5:41p
    ARGLIST  PAS      1795   5-19-84  11:17a
    BOARDS            5645   6-23-84   2:26p
    COM      ASM     17112   6-21-84   6:37p
    COMM     INC       461   1-29-84   7:21p
    COMP     PAS      6112   5-19-84  11:10a
    ESCPAR   PAS     12194   6-19-84  10:06p
    FILES    TXT      1515   4-29-85  10:46a
    FILES362 TXT      1792   5-23-85   2:24p
    GETPUT   PAS      4820   5-19-84   1:20p
    GRAPH    INC      2101  12-30-83   8:07p
    IBMPR    C        7424   5-12-84   7:22a
    INFO               852   9-16-84  11:34a
    KEYPARSE PAS     11684   6-23-84   6:47a
    LOGIN    PAS     11087   6-14-84   5:16p
    MACTEST  ASM       981   9-09-82  11:00p
    MAINSIM  PAS     15611   6-23-84   9:13a
    MENUIT   PAS      5012   6-14-84   5:16p
    MENUS             1149   4-30-84   6:52p
    README           38014   6-23-84  12:36p
    SAVDIS   PAS      2523   6-14-84   9:44p
    SCANLINE PAS      2668   9-11-83  11:44a
    SIMTERM  EXE    106124   6-23-84  12:07p
    SIMTERM  INC      1096   6-03-83  10:09p
    SIMTERM  LNK       192   6-22-84   8:41p
    SMTERM   LNK       151   6-03-84  11:04a
    SMVENTEL PAS       497   6-03-84  11:00a
    STDIO    ASM      3999  12-24-83   8:48a
    STDIO    INC       871   4-16-83   8:32p
    STRUCT   MAC      2940   8-31-83  10:28a
    TERMCAP  IBM       247  12-31-82   9:16p
    TOKEN    PAS      4703   6-14-84   5:14p
    UPDOWN   PAS     18056   6-22-84   9:48p
    UTIL     INC       231  12-24-83  10:05p
    UTIL     PAS      2299   5-19-84  11:16a
    VENTEL   PAS     11686   6-23-84  12:02p
    VERSION  OBJ        74   6-23-84  12:02p
    XRECV    C        5888   5-13-84   8:00p
    XTRANS   C        4864   5-12-84   7:20a
    XXGRAPH  ASM      9439   5-09-84   1:01a
           41 file(s)     324201 bytes
                           17408 bytes free
