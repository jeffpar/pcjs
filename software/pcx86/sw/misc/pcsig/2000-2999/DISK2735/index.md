---
layout: page
title: "PC-SIG Diskette Library (Disk #2735)"
permalink: /software/pcx86/sw/misc/pcsig/2000-2999/DISK2735/
machines:
  - id: ibm5150
    type: pcx86
    config: /machines/pcx86/ibm/5150/cga/256kb/machine.xml
    diskettes: /machines/pcx86/diskettes.json,/disks/pcsigdisks/pcx86/diskettes.json
    autoGen: true
    autoMount:
      B: "PC-SIG Library Disk #2735"
    autoType: $date\r$time\rB:\rDIR\r
---

{% include machine.html id="ibm5150" %}
{% comment %}samples_begin{% endcomment %}

## BLINK.ASM

{% raw %}
```
DOSSEG
.MODEL		LARGE

include		extern.inc

EXTRN		GetSharedArea:FAR

.DATA

BlinkOffName  	db		'blinkoff',0
BlinkOnName	db		'blinkon',0

Pool		PoolStruct	<BlinkOffName,blinkoff,,HANDLER>
		PoolStruct	<BlinkOnName,blinkon,,HANDLER>
		PoolStruct	<>	;END

.CODE

WhenLoaded:	retf

setblink:
		push		cx
		call		GetSharedArea	;DX:AX = pointer to shared area
		pop		cx

		mov		es,dx
		mov		bx,ax		;ES:BX = pointer to shared area
		mov		al,es:[bx+502]	;AL = video card type:
						; 00 Monochrome
						; 01 CGA
						; 02 Extended CGA
						; 03 Extended CGA - PLASMA
						; 04 Hercules Monochrome
						; 05 EGA
						; 06 Extended EGA
						; 07 MCGA
						; 08 VGA
						; 09 Extended VGA
						; 10 Leadning EDGE Internal Graphics Adapter
						; 11 Unknown
		cmp		al,5
		jl		CGAMONO
		cmp		al,10
		jl		EGAVGA

CGAMONO:
		mov		ax,0040h
		mov		es,ax		;ES = BIOS data segment
		mov		dx,es:[63h]	;DX = address of 6845
		add		dl,4		;DL = crt mode control register
		mov		al,es:[65h]	;AL = value of crt mode ctrl
		and		al,11011111b	;zero bit 5 (blink)
		or		al,ch
		out		dx,al
		mov		es:[65h],al	;update BIOS info
		mov		ax,STOP
		retf


EGAVGA:		
		mov		bl,cl
		mov		ax,1003h
		int		10h
		mov		ax,STOP
		retf

blinkoff:
		xor		cx,cx
		jmp short	setblink

blinkon:
		mov		cx,2001h
		jmp short	setblink

END


```
{% endraw %}

## BOOT.ASM

{% raw %}
```
DOSSEG
.MODEL		LARGE

include		extern.inc

.DATA

BootName  	db		'reboot',0

Pool		PoolStruct	<BootName,reboot,,HANDLER>
		PoolStruct	<>	;END

.CODE

;
; no recovery boot procedure
;
; DO NOT CALL THIS HANDLER FROM A PAD THAT IS NOT READ-ONLY. DOING SO
; WILL CORRUPT YOUR PAD.
;
; However, you can call this handler from any read-only pad.
;
reboot:		xor		ax,ax
		mov		ds,ax
		mov		bx,1234h
		mov		ds:[472h],bx
		mov		bx,0ffffh
		push		bx
		push		ax
		retf

END



```
{% endraw %}

## BORDER.ASM

{% raw %}
```
;
; SetBorder: Extension that sets the border color to a particular value.
;
; To use this extension from HyperPAD, move the extension into the desired
; pad (or into the home pad if you need from more than one pad).
;
; Examples:
;
;		SetBorder blue;
;		SetBorder red;
;		for i = 1 to 16 do SetBorder i;
;
;
; This routine will work on EGA, VGA, and CGA. It will have no effect on MONO.
;
DOSSEG
.MODEL		LARGE

EXTRN htoi:FAR

include		extern.inc

.DATA

SetBorderName  	db		'setBorder',0

Pool		PoolStruct	<SetBorderName,SetBorder,,HANDLER>
		PoolStruct	<>	;END

.CODE

SetBorder	proc		far
		push		bp
		mov		bp,sp
		push		di

		mov		ax,[bp+6]	;NumArgs
		cmp		ax,1
		jne		SB_END

		;get the handle to argument, convert it to an integer
		les		di,[bp+8]	;ES:DI = hArg1
		push		es
		push		di
		call		htoi		;AX = integer value

		;set the border color using the video BIOS
		mov		bl,al		;bl = BorderValue
		xor		bh,bh		;bh = subfunction number
		mov		ah,0bh		;ah = int 10h function number
		int		10h		;set the border value

SB_END:
		mov		ax,STOP		;terminate this message
		pop		di
		pop		bp
		retf
SetBorder	endp

END


```
{% endraw %}

## FFAUX.ASM

{% raw %}
```
DOSSEG
.MODEL		LARGE

.CODE

		public		_getdta
_getdta		proc		far
		mov		ah,2fh
		int		21h
		mov		dx,es
		mov		ax,bx
		retf
_getdta		endp


		public		_getfirst
_getfirst	proc		far
		push		bp
		mov		bp,sp
		push		ds

		mov		ah,4eh
		lds		dx,[bp+6]
		mov		cx,31h
		int		21h
		jc		gf1
		xor		ax,ax
		jmp short	gf2
gf1:		mov		ax,1
gf2:
		pop		ds
		pop		bp
		retf		
_getfirst	endp

		public		_getnext
_getnext	proc		far
		mov		ah,4fh
		int		21h
		jc		gn1
		xor		ax,ax
		jmp short	gn2
gn1:		mov		ax,1
gn2:
		retf
_getnext	endp

END

```
{% endraw %}

## FIXENV.ASM

{% raw %}
```
; ---------------------------------------------------------------------------
; FIXENV.ASM
;
; This program sets HyperPAD's environment to the original environment used
; by COMMAND.COM. Also, the environment that HyperPAD passes to other programs
; when they are run is the actual environment of COMMAND.COM.
;
; It performs the following steps:
;
;	1. get the address of the first memory block
;	2. it assumes the second memory block is COMMAND.COM. It finds the
;	   next memory block owned by this memory block
;	3. this memory block is inserted into the HyperPAD shared data
;	   area as the new environment
;	4. the size of the memory block is calculated and inserted into the
;	   appropriate field in the shared data area
;
; ---------------------------------------------------------------------------
DOSSEG
.MODEL		LARGE

include		extern.inc

.DATA

FixEnvName  	db		'STARTUP',0

Pool		PoolStruct	<FixEnvName,FixEnv,,HANDLER>
		PoolStruct	<>	;END

.CODE

WhenLoaded:
WhenUnLoaded:	retf

EXTRN		GetSharedArea:FAR
FixEnv		proc far

		push	es
		push	si
		push	di

		mov	ah,52h		;undocumented DOS interrupt
		int	21h

		dec	bx		;ES:[BX-2] = first memory block
		dec	bx

		mov	si,3		;memory block offset of size
		mov	di,1		;memory block offset of owner

		mov	ax,es:[bx]	;AX = seg of first memory block
		mov	es,ax
		mov	bx,es:[si]	;BX = size of first memory block
		inc	bx
		add	ax,bx		;AX = seg of second memory block
		mov	es,ax
		mov	dx,es:[di]	;DX = owner of second mem block (COMMAND.COM)
loop1:
		mov	bx,es:[si]	;BX = size of block
		mov	cx,bx		;CX = block size (save for later)
		inc	bx
		add	ax,bx		;AX = segment of next block
		mov	es,ax
		cmp	dx,es:[di]	;check owner
		jnz	loop1		;not this block ... find next one

		inc	ax
		mov	si,ax		;SI = segment first COMMAND.COM environment
		mov	di,cx		;DI = size of block

		call	GetSharedArea	;DX:AX far pointer to shared data area
		mov	es,dx
		mov	bx,ax		;ES:BX = pointer to shared data area

		mov	es:[bx+618],si	;EnvSeg = segment of COMMAND.COM's environment
		mov	cl,4
		shl	di,cl		;convert paragraphs to bytes
		mov	es:[bx+624],di	;EnvSegSz = size fo environment block

		mov	ax,PASS		;pass the startup message on

		pop	di
		pop	si
		pop	es

		ret
FixEnv		endp

END


```
{% endraw %}

## INFOAUX.ASM

{% raw %}
```
DOSSEG
.MODEL		LARGE

.DATA

.CODE	INFO_TEXT
		assume		cs:INFO_TEXT

		public		Get52Ptr
Get52Ptr	proc		near
		mov		ah,52h
		int		21h
		mov		dx,es
		mov		ax,bx
		ret
Get52Ptr	endp

		public		emmptr
emmptr		proc		near
		mov		ax,3567h
		int		21h
		mov		dx,es
		mov		ax,10
		ret
emmptr		endp

		public		emmfree
emmfree		proc		near
		mov		ah,42h
		int		67h
		mov		ax,bx
		mov		bx,4000
		mul		bx
		ret
emmfree		endp

		public		emmtotal
emmtotal	proc		near
		mov		ah,42h
		int		67h
		mov		ax,dx
		mov		bx,4000
		mul		bx
		ret
emmtotal	endp

		public		emmversion
emmversion	proc		near
		mov		ah,46h
		int		67h
		xor		ah,ah
		ret
emmversion	endp

		public		getmemsize
getmemsize	proc		near
		int		12h
		ret
getmemsize	endp

		public		getextmemsize
getextmemsize	proc		near
		mov		ah,88h
		int		15h
		ret
getextmemsize	endp

		public		getequipment
getequipment	proc		near
		int		11h
		ret
getequipment	endp

END
```
{% endraw %}

## CLOSE.ASM

{% raw %}
```
DOSSEG
.MODEL		LARGE

.DATA

.CODE

; ---------------------------------------------------------------------------
; close(handle);
; ---------------------------------------------------------------------------
		public		_close
_close		proc		far
		push		bp
		mov		bp,sp

		mov		ah,03eh
		mov		bx,[bp+6]
		int		21h
		mov		ax,0
		jnc		end_close
		mov		ax,-1
end_close:
		pop		bp
		retf
_close		endp

		END





```
{% endraw %}

## CREATE.ASM

{% raw %}
```
DOSSEG
.MODEL		LARGE

.DATA

.CODE


; ---------------------------------------------------------------------------
; int create(FileName);
; ---------------------------------------------------------------------------
		public		_create
_create		proc		far
		push		bp
		mov		bp,sp
		push		ds

		mov		ah,03ch
		xor		cx,cx
		lds		dx,[bp+6]
		int		21h

		jnc		end_create

		mov		ax,-1		;error return
end_create:
		pop		ds
		pop		bp
		retf
_create		endp

		END





```
{% endraw %}

## LSEEK.ASM

{% raw %}
```
DOSSEG
.MODEL		LARGE

.DATA

.CODE


		public		_lseek
_lseek		proc		far
		push		bp
		mov		bp,sp			 
		mov		ah,42h
		mov		al,[bp+12]		;from_pos
		mov		bx,[bp+6]		;handle
		mov		dx,[bp+8]		;distance_low
		mov		cx,[bp+10]		;distance_hi
		int		21h
		pop		bp
		retf
_lseek		endp

		END





```
{% endraw %}

## OPEN.ASM

{% raw %}
```
DOSSEG
.MODEL		LARGE

.DATA

.CODE

; ---------------------------------------------------------------------------
; int open(FileName,access);
; ---------------------------------------------------------------------------

		public		_open
_open		proc		far
		push		bp
		mov		bp,sp
		push		ds

		mov		ah,03dh
		mov		al,[bp+10]
		lds		dx,[bp+6]
		int		21h

		jnc		end_open

		mov		ax,-1		;error return
end_open:
		pop		ds
		pop		bp
		retf
_open		endp

		END





```
{% endraw %}

## READ.ASM

{% raw %}
```
DOSSEG
.MODEL		LARGE

.DATA

.CODE

; ---------------------------------------------------------------------------
; read(handle,buf,num_bytes);
; ---------------------------------------------------------------------------
		public		_read
_read		proc		far
		push		bp
		mov		bp,sp
		push		ds
		
		mov		ah,03fh
		mov		bx,[bp+6]
		lds		dx,[bp+8]
		mov		cx,[bp+12]
		int		21h

		jnc		end_read

		mov		ax,-1
end_read:
		pop		ds
		pop		bp
		retf
_read		endp

		END





```
{% endraw %}

## REMOVE.ASM

{% raw %}
```
DOSSEG
.MODEL		LARGE

.DATA

.CODE

		public		_remove
_remove		proc		far
		push		bp
		mov		bp,sp
		push		ds
		lds		dx,[bp+6]
		mov		ah,41h
		int		21h
		pop		ds
		pop		bp
		ret
_remove		endp

		END





```
{% endraw %}

## WRITE.ASM

{% raw %}
```
DOSSEG
.MODEL		LARGE

.DATA

.CODE

; ---------------------------------------------------------------------------
; write(handle,buf,num_bytes);
; ---------------------------------------------------------------------------
		public		_write
_write		proc		far
		push		bp
		mov		bp,sp

		push		ds

		mov		ah,040h
		mov		bx,[bp+6]
		lds		dx,[bp+8]
		mov		cx,[bp+12]
		int		21h

		jnc		end_write

		mov		ax,-1

end_write:
		pop		ds
		pop		bp
		retf
_write		endp

		END





```
{% endraw %}

## ISSUBST.ASM

{% raw %}
```
DOSSEG
.MODEL		LARGE

EXTRN btoh:FAR
EXTRN ReturnValue:FAR

DIRSTRUCTSZ_DOS3	equ	51h	;works for DOS 3.X
DIRSTRUCTSZ_DOS4	equ	58h	;works for DOS 5.0 too!

include		extern.inc

.DATA

pname     	db		'issubst',0

Pool		PoolStruct	<pname,issubst,,FUNCTION>
		PoolStruct	<>	;END

.CODE

dtable		dd		0
lastdrv		db		0
tablesz		db		DIRSTRUCTSZ_DOS3

		public		WhenLoaded
WhenLoaded:
		mov		ah,52h
		int		21h			;ES:BX = pointer to DOS info

		mov		al,es:[bx+21h]		;AL = last drive
		mov		cs:lastdrv,al		;save

		les		bx,es:[bx+16h]		;ES:BX = drive table pointer
		mov word ptr	cs:dtable + 2,es	;save
		mov word ptr	cs:dtable,bx

		mov		ah,30h
		int		21h			;AL = version high
		cmp		al,4			;change size if > 3.X
		jb		WL1
		mov		cs:tablesz,DIRSTRUCTSZ_DOS4
WL1:
		retf

;
; This routine returns TRUE if a given drive letter is a subst drive, or
; FALSE otherwise.
;
; To call this routine from HyperPAD:
;
;	if issubst("F") then beep;
;
issubst:	push		bp
		mov		bp,sp

		mov		ax,[bp+6]	;AX = NumArgs
		cmp		ax,1
		jne		_FALSE

		mov		ah,30h		;dos version number
		int		21h
		cmp		al,3		;not a subst drive if DOS < 3
		jb		_FALSE

		les		bx,[bp+8]	;ES:BX = hDrive
		les		bx,es:[bx]	;ES:BX = pDrive
		mov		al,es:[bx]	;AL = drive letter
		cmp		al,'a'		;convert to upper case
		jb		IS3
		cmp		al,'z'
		ja		IS3
		sub		al,32
IS3:
		sub		ax,'A'		;AX: A = 0, B = 1, etc
		cmp		al,cs:lastdrv	;greater than last drive?
		jae		_FALSE		;not a subst drive (network?)

		cbw				;AX = drive letter
		mov		bl,cs:tablesz
		mul		bl		;AX = driveletter * tablesz
		les		bx,cs:dtable	;ES:BX = drive table
		add		bx,ax		;ES:BX = drive table entry for that drive

		mov		ax,es:[bx+43h]	;AX = drive flags
		and		ax,1000h
		jz		IS2

		mov		ax,1		;AX = TRUE (is a subst drive)

IS2:
		push		ax		;convert to boolean
		call		btoh
		push		dx		;pass to HyperPAD
		push		ax
		call		ReturnValue

		mov		ax,STOP		;don't pass message on
		pop		bp
		retf

_FALSE:		xor		ax,ax		;return FALSE (not a subst drive)
		jmp short	IS2

END


```
{% endraw %}

## KEEP.ASM

{% raw %}
```
DOSSEG
.MODEL		LARGE

include		extern.inc

EXTRN		GetSharedArea:FAR

.DATA

Proc1Name  	db		'Keep',0

Pool		PoolStruct	<Proc1Name,Keep,,HANDLER>
		PoolStruct	<>	;END

.CODE

Keep:		call		GetSharedArea
		mov		es,dx
		mov		bx,ax
		or byte ptr	es:[bx],10h
		mov		ax,STOP
		retf

END


```
{% endraw %}

## MOUSE.ASM

{% raw %}
```
DOSSEG
.MODEL		LARGE

.DATA

.CODE

version		dw		0
msarea		db		1024 dup (0)
msthere		db		0

		public		_show
_show:
		cmp byte ptr	cs:msthere,0	;is the mouse installed?
		je		S1
		mov		ax,1		;AX = show mouse function num
		int		33h		;show the mouse
S1:		retf

		public		_hide
_hide:
		cmp byte ptr	cs:msthere,0	;is the mouse installed?
		je		H1
		mov		ax,2		;AX = hide mouse function num
		int		33h		;hide the mouse
H1:		retf

		public		_button
_button:	
		xor		ax,ax		;return NO BUTTON by default
		cmp byte ptr	cs:msthere,0	;mouse there?
		je		B1
		mov		ax,3		;AX = get button info func num
		int		33h		;BX = get button info in
		mov		ax,bx		;AX = button status
B1:
		retf

		public		_savemouse
_savemouse:
		push		di
		push		si
		push		ds

		xor		ax,ax
		mov		es,ax		;ES = 0
		mov		al,'m';		;undoc call to get mouse area
		int		33h		;get mouse save area
		mov		ax,es
		or		ax,ax		;any change?
		jz		SM1

		mov		al,1
		mov		cs:msthere,al

		cli
		mov		ax,es:[di]
		mov		cs:version,ax

		mov		si,es:[di+8]

		mov		di,offset cs:msarea

		push		es
		push		cs
		pop		es
		pop		ds

		;ES:DI = destination for mouse stuff
		;DS:SI = source

SM2:
		mov		bx,[si]
		mov		cx,[si+2]
		mov		si,[si+4]

		rep		movsb
		mov		si,bx
		or		bx,bx
		jnz		SM2

		;disable user defined sub-routine

		mov		ax,12
		mov		cx,0
		int		33h

		sti

SM1:
		pop		ds
		pop		si
		pop		di
		retf



		public		_restoremouse
_restoremouse:
		push		si
		push		di
		push		ds

		cmp byte ptr	cs:msthere,0
		je		RM1

		cli

		mov		ax,'m'
		int		33h

		mov		si,es:[di+8]
		mov		di,offset cs:msarea

		xchg		di,si

		push		cs
		pop		ds

		;DS:SI = local mouse storage
		;ES:DI = mouse area

RM2:
		mov		bx,es:[di]
		mov		cx,es:[di+2]
		mov		di,es:[di+4]

		rep		movsb

		mov		di,bx
		or		bx,bx
		jnz		RM2

		sti
RM1:
		pop		ds
		pop		di
		pop		si
		retf

END
```
{% endraw %}

## README.DOC

{% raw %}
```
SETPAL.ZIP	Modifies the palette registers and DAC values
IO.ZIP		Implements low level DOS I/O (read, write, lseek)
TSR.ZIP		A sample of a TSR that registers itself with HyperPAD
SWITCH.ZIP	Switches between monochrome and color monitors
WITEM.ZIP	Returns the item number, given the item's text
STARTUP.ZIP	Current copies of the startup code and include files
LOWIO.ZIP	Low level DOS I/O available to pads
SETSCR.ZIP	Shows how to set the paint layer of a pg or bkgnd
KEYHOOK.ZIP	Shows how to intercept keys before HyperPAD does
FONT.ZIP	Changes the text font on EGA or VGA cards
CLICKAT.ZIP	Simulates a mouse click anywhere on the screen
BLINK.ZIP	Toggles blinking attributes on and off
GLOBALS.ZIP	Saves and reads global variables to and from a file
ISSUBST.ZIP	Determines if a drive is a DOS SUBST drive
BORDER.ZIP	Sets the border color on the display
MONTH.ZIP	Creates a calendar month for display in a field
NUMBER.ZIP	Creates enlarged digits for display in a field
CSORT.ZIP	Sorts items or lines of text
FORMAT.ZIP	Word wraps a text string for display in a field
FIXENV.ZIP	Causes HyperPAD to use the environment of COMMAND.COM
KEEP.ZIP	Causes HyperPAD not to clear the screen when running other programs
VIEWGX2.ZIP	Views a graphics GX2 file
CLEARBUF.ZIP	Clears the event queue of all keyboard and mouse events
HORLINE.ZIP	Draws a horizontal line of characters and attributes on the paint layer of the pg or bkgnd
GETSCR.ZIP	Copies and pastes the paint layer of the page or bkgnd
SOURCE.ZIP	Source code to STARTUP.LIB
SCAN.ZIP	Reads in a directory tree of a specified disk drive
BOOT.ZIP	Reboots the computer
INFO.ZIP	Returns information about the computer and memory configuration
FF.ZIP		Locates a file anywhere on a disk
BASE.ZIP	Converts numbers to and from other bases
BARCHART.ZIP	Graphs some data as a bar chart (640x200 BW graphics mode)
TEST.ZIP	Sample C extension showing a handler and a function
TESTASM.ZIP	Sample ASM extension
DOS.ZIP		DOS functions, such as md, rd, copy, and del

```
{% endraw %}

## RUNAUX.ASM

{% raw %}
```
DOSSEG
.MODEL		LARGE


.DATA

.CODE

		public		clearbuf
clearbuf	proc		far
top:
		mov		ah,1
		int		16h
		jz		done
		xor		ah,ah
		int		16h
		jmp short	top
done:
		retf
clearbuf	endp

END
```
{% endraw %}

## SCANAUX.ASM

{% raw %}
```
DOSSEG
.MODEL		LARGE

.CODE

		public		_getdta
_getdta		proc		far
		mov		ah,2fh
		int		21h
		mov		dx,es
		mov		ax,bx
		retf
_getdta		endp


		public		_getfirst
_getfirst	proc		far
		push		bp
		mov		bp,sp
		push		ds

		mov		ah,4eh
		lds		dx,[bp+6]
		mov		cx,31h
		int		21h
		jc		gf1
		xor		ax,ax
		jmp short	gf2
gf1:		mov		ax,1
gf2:
		pop		ds
		pop		bp
		retf		
_getfirst	endp

		public		_getnext
_getnext	proc		far
		mov		ah,4fh
		int		21h
		jc		gn1
		xor		ax,ax
		jmp short	gn2
gn1:		mov		ax,1
gn2:
		retf
_getnext	endp

END

```
{% endraw %}

## SETPAL.ASM

{% raw %}
```
DOSSEG
.MODEL		LARGE

include		extern.inc

EXTRN		htoi:FAR
EXTRN		itoh:FAR
EXTRN		_sprintf:FAR
EXTRN		ReturnValue:FAR
EXTRN		stoh:FAR

.DATA

setreg_name  	db		'setreg',0
setpal_name	db		'setpal',0
getpal_name	db		'getpal',0
getreg_name	db		'getreg',0
format		db		"%d,%d,%d",0
buffer		db		20 dup (' ')

Pool		PoolStruct	<setreg_name,setreg,,HANDLER>
		PoolStruct	<setpal_name,setpal,,HANDLER>
		PoolStruct	<getpal_name,getpal,,FUNCTION>
		PoolStruct	<getreg_name,getreg,,FUNCTION>
		PoolStruct	<>	;END

.CODE

setpal:
		push		bp
		mov		bp,sp
		push		di

		cmp byte ptr	[bp+6],4 	;Need color and value
		jne		SP2
		mov		di,20		;stack offset of blue

SP1:		push		di		;save stack offset
		les		di,[bp+di]	;ES:DI = hColorValue
		push		es
		push		di
		call		htoi		;AX = color value
		pop		di		;get original stack offset
		push		ax		;save color value on stack
		sub		di,4		;next parameter
		cmp		di,8		;done yet?
		jae		SP1

		;there are now four colors on the stack

		pop		bx		;Color Number
		pop		ax		;red
		mov		dh,al
		pop		ax		;green
		mov		ch,al
		pop		ax		;blue
		mov		cl,al
		mov		ax,1010h	;Set 1 DAC Color
		int		10h

SP2:
		pop		di
		pop		bp
		mov		ax,STOP		;terminate this message
		retf

;
; This routine sets a color in the palette to another value. For example,
; if you wanted all of the red to become blue, use the command:
;
;	setreg red,blue;
;
setreg:
		push		bp
		mov		bp,sp

		mov		ax,[bp+6]	;NUMARGS
		cmp		ax,2
		jne		SR1

		les		bx,[bp+8]	;color
		push		es
		push		bx
		call		htoi
		push		ax		;AX = color

		les		bx,[bp+12]
		push		es
		push		bx
		call		htoi
		pop		bx		;AX = value, BX = color

		mov		bh,al
		mov		ax,1000h
		int		10h

SR1:
		mov		ax,STOP
		pop		bp
		retf

getpal:
		push		bp
		mov		bp,sp
		cmp byte ptr	[bp+6],1
		jne		GP1

		les		bx,[bp+8]	;ES:BX = hColorValue
		push		es
		push		bx
		call		htoi		;AX = color value

		mov		bx,ax
		mov		ax,1015h
		int		10h

		xor		ah,ah		;AH = 0
		mov		al,cl		;AX = blue
		push		ax

		mov		al,ch		;AX = green
		push		ax

		mov		al,dh		;AX = red
		push		ax

		push		ds
		mov		ax,offset format
		push		ax

		push		ds
		mov		ax,offset buffer
		push		ax

		call		_sprintf
		add		sp,14

		push		ds
		mov		ax,offset buffer
		push		ax
		call		stoh

		push		dx
		push		ax
		call		ReturnValue

GP1:		
		mov		ax,STOP
		pop		bp
		retf

getreg:
		push		bp
		mov		bp,sp
		cmp byte ptr	[bp+6],1
		jne		GR1

		les		bx,[bp+8]	;ES:BX = hColorValue
		push		es
		push		bx
		call		htoi		;AX = color value

		mov		bx,ax
		mov		ax,1007h
		int		10h

		mov		bl,bh
		xor		bh,bh
		push		bx

		call		itoh
		push		dx
		push		ax
		call		ReturnValue

GR1:		
		mov		ax,STOP
		pop		bp
		retf

END


```
{% endraw %}

## DEBUGGER.ASM

{% raw %}
```
STARTUP_TEXT	SEGMENT		BYTE PUBLIC 'CODE'
		assume		cs:STARTUP_TEXT

		public		_DEBUGGER
_DEBUGGER:
		int		3
		retf

STARTUP_TEXT	ENDS
END
```
{% endraw %}

## EXTFLAGS.ASM

{% raw %}
```
DOSSEG
.MODEL		LARGE				;child program must be large

.DATA

		public		ExtFlags
ExtFlags	db		0

END

```
{% endraw %}

## S0.ASM

{% raw %}
```
STARTUP_TEXT	SEGMENT		BYTE PUBLIC 'CODE'
		assume		cs:STARTUP_TEXT

		EXTRN		EXEC:near

		public		NEWHANDLE
NEWHANDLE:
		mov		al,0
		jmp		EXEC

STARTUP_TEXT	ENDS
END
```
{% endraw %}

## S1.ASM

{% raw %}
```
STARTUP_TEXT	SEGMENT		BYTE PUBLIC 'CODE'
		assume		cs:STARTUP_TEXT

		EXTRN		EXEC:near

		public		FREEHANDLE
FREEHANDLE:
		mov		al,1
		jmp		EXEC

STARTUP_TEXT	ENDS
END
```
{% endraw %}

## S10.ASM

{% raw %}
```
STARTUP_TEXT	SEGMENT		BYTE PUBLIC 'CODE'
		assume		cs:STARTUP_TEXT

		EXTRN		EXEC:near

		public		HTOI
HTOI:
		mov		al,10
		jmp		EXEC

STARTUP_TEXT	ENDS
END
```
{% endraw %}

## S11.ASM

{% raw %}
```
STARTUP_TEXT	SEGMENT		BYTE PUBLIC 'CODE'
		assume		cs:STARTUP_TEXT

		EXTRN		EXEC:near

		public		HTOL
HTOL:
		mov		al,11
		jmp		EXEC

STARTUP_TEXT	ENDS
END
```
{% endraw %}

## S12.ASM

{% raw %}
```
STARTUP_TEXT	SEGMENT		BYTE PUBLIC 'CODE'
		assume		cs:STARTUP_TEXT

		EXTRN		EXEC:near

		public		ITOH
ITOH:
		mov		al,12
		jmp		EXEC

STARTUP_TEXT	ENDS
END
```
{% endraw %}

## S13.ASM

{% raw %}
```
STARTUP_TEXT	SEGMENT		BYTE PUBLIC 'CODE'
		assume		cs:STARTUP_TEXT

		EXTRN		EXEC:near

		public		LTOH
LTOH:
		mov		al,13
		jmp		EXEC

STARTUP_TEXT	ENDS
END
```
{% endraw %}

## S14.ASM

{% raw %}
```
STARTUP_TEXT	SEGMENT		BYTE PUBLIC 'CODE'
		assume		cs:STARTUP_TEXT

		EXTRN		EXEC:near

		public		REALLOCHANDLE
REALLOCHANDLE:
		mov		al,14
		jmp		EXEC

STARTUP_TEXT	ENDS
END
```
{% endraw %}

## S15.ASM

{% raw %}
```
STARTUP_TEXT	SEGMENT		BYTE PUBLIC 'CODE'
		assume		cs:STARTUP_TEXT

		EXTRN		EXEC:near

		public		_SPRINTF
_SPRINTF:
		mov		al,15
		jmp		EXEC

STARTUP_TEXT	ENDS
END
```
{% endraw %}

## S16.ASM

{% raw %}
```
STARTUP_TEXT	SEGMENT		BYTE PUBLIC 'CODE'
		assume		cs:STARTUP_TEXT

		EXTRN		EXEC:near

		public		STOH
STOH:
		mov		al,16
		jmp		EXEC

STARTUP_TEXT	ENDS
END
```
{% endraw %}

## S17.ASM

{% raw %}
```
STARTUP_TEXT	SEGMENT		BYTE PUBLIC 'CODE'
		assume		cs:STARTUP_TEXT

		EXTRN		EXEC:near

		public		HTOS
HTOS:
		mov		al,17
		jmp		EXEC

STARTUP_TEXT	ENDS
END
```
{% endraw %}

## S18.ASM

{% raw %}
```
STARTUP_TEXT	SEGMENT		BYTE PUBLIC 'CODE'
		assume		cs:STARTUP_TEXT

		EXTRN		EXEC:near

		public		RELEASEHPAD
RELEASEHPAD:
		mov		al,18
		jmp		EXEC

STARTUP_TEXT	ENDS
END
```
{% endraw %}

## S19.ASM

{% raw %}
```
STARTUP_TEXT	SEGMENT		BYTE PUBLIC 'CODE'
		assume		cs:STARTUP_TEXT

		EXTRN		EXEC:near

		public		RESTOREHPAD
RESTOREHPAD:
		mov		al,19
		jmp		EXEC

STARTUP_TEXT	ENDS
END
```
{% endraw %}

## S2.ASM

{% raw %}
```
STARTUP_TEXT	SEGMENT		BYTE PUBLIC 'CODE'
		assume		cs:STARTUP_TEXT

		EXTRN		EXEC:near

		public		HANDLESIZE
HANDLESIZE:
		mov		al,2
		jmp		EXEC

STARTUP_TEXT	ENDS
END
```
{% endraw %}

## S20.ASM

{% raw %}
```
STARTUP_TEXT	SEGMENT		BYTE PUBLIC 'CODE'
		assume		cs:STARTUP_TEXT

		EXTRN		EXEC:near

		public		DO
DO:
		mov		al,20
		jmp		EXEC

STARTUP_TEXT	ENDS
END
```
{% endraw %}

## S21.ASM

{% raw %}
```
STARTUP_TEXT	SEGMENT		BYTE PUBLIC 'CODE'
		assume		cs:STARTUP_TEXT

		EXTRN		EXEC:near

		public		HTOB
HTOB:
		mov		al,21
		jmp		EXEC

STARTUP_TEXT	ENDS
END
```
{% endraw %}

## S22.ASM

{% raw %}
```
STARTUP_TEXT	SEGMENT		BYTE PUBLIC 'CODE'
		assume		cs:STARTUP_TEXT

		EXTRN		EXEC:near

		public		BTOH
BTOH:
		mov		al,22
		jmp		EXEC

STARTUP_TEXT	ENDS
END
```
{% endraw %}

## S23.ASM

{% raw %}
```
STARTUP_TEXT	SEGMENT		BYTE PUBLIC 'CODE'
		assume		cs:STARTUP_TEXT

		EXTRN		EXEC:near

		public		GETFIELDNUM
GETFIELDNUM:
		mov		al,23
		jmp		EXEC

STARTUP_TEXT	ENDS
END
```
{% endraw %}

## S24.ASM

{% raw %}
```
STARTUP_TEXT	SEGMENT		BYTE PUBLIC 'CODE'
		assume		cs:STARTUP_TEXT

		EXTRN		EXEC:near

		public		GETFIELDNAME
GETFIELDNAME:
		mov		al,24
		jmp		EXEC

STARTUP_TEXT	ENDS
END
```
{% endraw %}

## S25.ASM

{% raw %}
```
STARTUP_TEXT	SEGMENT		BYTE PUBLIC 'CODE'
		assume		cs:STARTUP_TEXT

		EXTRN		EXEC:near

		public		GETFIELDID
GETFIELDID:
		mov		al,25
		jmp		EXEC

STARTUP_TEXT	ENDS
END
```
{% endraw %}

## S26.ASM

{% raw %}
```
STARTUP_TEXT	SEGMENT		BYTE PUBLIC 'CODE'
		assume		cs:STARTUP_TEXT

		EXTRN		EXEC:near

		public		SETFIELDNUM
SETFIELDNUM:
		mov		al,26
		jmp		EXEC

STARTUP_TEXT	ENDS
END
```
{% endraw %}

## S27.ASM

{% raw %}
```
STARTUP_TEXT	SEGMENT		BYTE PUBLIC 'CODE'
		assume		cs:STARTUP_TEXT

		EXTRN		EXEC:near

		public		SETFIELDNAME
SETFIELDNAME:
		mov		al,27
		jmp		EXEC

STARTUP_TEXT	ENDS
END
```
{% endraw %}

## S28.ASM

{% raw %}
```
STARTUP_TEXT	SEGMENT		BYTE PUBLIC 'CODE'
		assume		cs:STARTUP_TEXT

		EXTRN		EXEC:near

		public		SETFIELDID
SETFIELDID:
		mov		al,28
		jmp		EXEC

STARTUP_TEXT	ENDS
END
```
{% endraw %}

## S29.ASM

{% raw %}
```
STARTUP_TEXT	SEGMENT		BYTE PUBLIC 'CODE'
		assume		cs:STARTUP_TEXT

		EXTRN		EXEC:near

		public		_SENDPAGEMSG
_SENDPAGEMSG:
		mov		al,29
		jmp		EXEC

STARTUP_TEXT	ENDS
END
```
{% endraw %}

## S3.ASM

{% raw %}
```
STARTUP_TEXT	SEGMENT		BYTE PUBLIC 'CODE'
		assume		cs:STARTUP_TEXT

		EXTRN		EXEC:near

		public		NEWPTR
NEWPTR:
		mov		al,3
		jmp		EXEC

STARTUP_TEXT	ENDS
END
```
{% endraw %}

## S30.ASM

{% raw %}
```
STARTUP_TEXT	SEGMENT		BYTE PUBLIC 'CODE'
		assume		cs:STARTUP_TEXT

		EXTRN		EXEC:near

		public		_SENDHPMSG
_SENDHPMSG:
		mov		al,30
		jmp		EXEC

STARTUP_TEXT	ENDS
END
```
{% endraw %}

## S31.ASM

{% raw %}
```
STARTUP_TEXT	SEGMENT		BYTE PUBLIC 'CODE'
		assume		cs:STARTUP_TEXT

		EXTRN		EXEC:near

		public		SETGLOBAL
SETGLOBAL:
		mov		al,31
		jmp		EXEC

STARTUP_TEXT	ENDS
END
```
{% endraw %}

## S32.ASM

{% raw %}
```
STARTUP_TEXT	SEGMENT		BYTE PUBLIC 'CODE'
		assume		cs:STARTUP_TEXT

		EXTRN		EXEC:near

		public		GETGLOBAL
GETGLOBAL:
		mov		al,32
		jmp		EXEC

STARTUP_TEXT	ENDS
END
```
{% endraw %}

## S33.ASM

{% raw %}
```
STARTUP_TEXT	SEGMENT		BYTE PUBLIC 'CODE'
		assume		cs:STARTUP_TEXT

		EXTRN		EXEC:near

		public		MAKEWIN
MAKEWIN:
		mov		al,33
		jmp		EXEC

STARTUP_TEXT	ENDS
END
```
{% endraw %}

## S34.ASM

{% raw %}
```
STARTUP_TEXT	SEGMENT		BYTE PUBLIC 'CODE'
		assume		cs:STARTUP_TEXT

		EXTRN		EXEC:near

		public		REMWIN
REMWIN:
		mov		al,34
		jmp		EXEC

STARTUP_TEXT	ENDS
END
```
{% endraw %}

## S35.ASM

{% raw %}
```
STARTUP_TEXT	SEGMENT		BYTE PUBLIC 'CODE'
		assume		cs:STARTUP_TEXT

		EXTRN		EXEC:near

		public		PUTSTR
PUTSTR:
		mov		al,35
		jmp		EXEC

STARTUP_TEXT	ENDS
END
```
{% endraw %}

## S36.ASM

{% raw %}
```
STARTUP_TEXT	SEGMENT		BYTE PUBLIC 'CODE'
		assume		cs:STARTUP_TEXT

		EXTRN		EXEC:near

		public		HIGHLINE
HIGHLINE:
		mov		al,36
		jmp		EXEC

STARTUP_TEXT	ENDS
END
```
{% endraw %}

## S37.ASM

{% raw %}
```
STARTUP_TEXT	SEGMENT		BYTE PUBLIC 'CODE'
		assume		cs:STARTUP_TEXT

		EXTRN		EXEC:near

		public		PEEKEVENT
PEEKEVENT:
		mov		al,37
		jmp		EXEC

STARTUP_TEXT	ENDS
END
```
{% endraw %}

## S38.ASM

{% raw %}
```
STARTUP_TEXT	SEGMENT		BYTE PUBLIC 'CODE'
		assume		cs:STARTUP_TEXT

		EXTRN		EXEC:near

		public		UNGETEVENT
UNGETEVENT:
		mov		al,38
		jmp		EXEC

STARTUP_TEXT	ENDS
END
```
{% endraw %}

## S39.ASM

{% raw %}
```
STARTUP_TEXT	SEGMENT		BYTE PUBLIC 'CODE'
		assume		cs:STARTUP_TEXT

		EXTRN		EXEC:near

		public		GETEVENT
GETEVENT:
		mov		al,39
		jmp		EXEC

STARTUP_TEXT	ENDS
END
```
{% endraw %}

## S4.ASM

{% raw %}
```
STARTUP_TEXT	SEGMENT		BYTE PUBLIC 'CODE'
		assume		cs:STARTUP_TEXT

		EXTRN		EXEC:near

		public		FREEPTR
FREEPTR:
		mov		al,4
		jmp		EXEC

STARTUP_TEXT	ENDS
END
```
{% endraw %}

## S40.ASM

{% raw %}
```
STARTUP_TEXT	SEGMENT		BYTE PUBLIC 'CODE'
		assume		cs:STARTUP_TEXT

		EXTRN		EXEC:near

		public		SHOWMOUSE
SHOWMOUSE:
		mov		al,40
		jmp		EXEC

STARTUP_TEXT	ENDS
END
```
{% endraw %}

## S41.ASM

{% raw %}
```
STARTUP_TEXT	SEGMENT		BYTE PUBLIC 'CODE'
		assume		cs:STARTUP_TEXT

		EXTRN		EXEC:near

		public		HIDEMOUSE
HIDEMOUSE:
		mov		al,41
		jmp		EXEC

STARTUP_TEXT	ENDS
END
```
{% endraw %}

## S42.ASM

{% raw %}
```
STARTUP_TEXT	SEGMENT		BYTE PUBLIC 'CODE'
		assume		cs:STARTUP_TEXT

		EXTRN		EXEC:near

		public		GETSHAREDAREA
GETSHAREDAREA:
		mov		al,42
		jmp		EXEC

STARTUP_TEXT	ENDS
END
```
{% endraw %}

## S43.ASM

{% raw %}
```
STARTUP_TEXT	SEGMENT		BYTE PUBLIC 'CODE'
		assume		cs:STARTUP_TEXT

		EXTRN		EXEC:near

		public		PUTCH
PUTCH:
		mov		al,43
		jmp		EXEC

STARTUP_TEXT	ENDS
END
```
{% endraw %}

## S44.ASM

{% raw %}
```
STARTUP_TEXT	SEGMENT		BYTE PUBLIC 'CODE'
		assume		cs:STARTUP_TEXT

		EXTRN		EXEC:near

		public		PUTATTR
PUTATTR:
		mov		al,44
		jmp		EXEC

STARTUP_TEXT	ENDS
END
```
{% endraw %}

## S45.ASM

{% raw %}
```
STARTUP_TEXT	SEGMENT		BYTE PUBLIC 'CODE'
		assume		cs:STARTUP_TEXT

		EXTRN		EXEC:near

		public		_REFRESH
_REFRESH:
		mov		al,45
		jmp		EXEC

STARTUP_TEXT	ENDS
END
```
{% endraw %}

## S46.ASM

{% raw %}
```
STARTUP_TEXT	SEGMENT		BYTE PUBLIC 'CODE'
		assume		cs:STARTUP_TEXT

		EXTRN		EXEC:near

		public		GETTIME
GETTIME:
		mov		al,46
		jmp		EXEC

STARTUP_TEXT	ENDS
END
```
{% endraw %}

## S47.ASM

{% raw %}
```
STARTUP_TEXT	SEGMENT		BYTE PUBLIC 'CODE'
		assume		cs:STARTUP_TEXT

		EXTRN		EXEC:near

		public		_ACOS
_ACOS:
		mov		al,47
		jmp		EXEC

STARTUP_TEXT	ENDS
END
```
{% endraw %}

## S48.ASM

{% raw %}
```
STARTUP_TEXT	SEGMENT		BYTE PUBLIC 'CODE'
		assume		cs:STARTUP_TEXT

		EXTRN		EXEC:near

		public		_COS
_COS:
		mov		al,48
		jmp		EXEC

STARTUP_TEXT	ENDS
END
```
{% endraw %}

## S49.ASM

{% raw %}
```
STARTUP_TEXT	SEGMENT		BYTE PUBLIC 'CODE'
		assume		cs:STARTUP_TEXT

		EXTRN		EXEC:near

		public		_SIN
_SIN:
		mov		al,49
		jmp		EXEC

STARTUP_TEXT	ENDS
END
```
{% endraw %}

## S5.ASM

{% raw %}
```
STARTUP_TEXT	SEGMENT		BYTE PUBLIC 'CODE'
		assume		cs:STARTUP_TEXT

		EXTRN		EXEC:near

		public		PTRSIZE
PTRSIZE:
		mov		al,5
		jmp		EXEC

STARTUP_TEXT	ENDS
END
```
{% endraw %}

## S50.ASM

{% raw %}
```
STARTUP_TEXT	SEGMENT		BYTE PUBLIC 'CODE'
		assume		cs:STARTUP_TEXT

		EXTRN		EXEC:near

		public		_ASIN
_ASIN:
		mov		al,50
		jmp		EXEC

STARTUP_TEXT	ENDS
END
```
{% endraw %}

## S51.ASM

{% raw %}
```
STARTUP_TEXT	SEGMENT		BYTE PUBLIC 'CODE'
		assume		cs:STARTUP_TEXT

		EXTRN		EXEC:near

		public		_TAN
_TAN:
		mov		al,51
		jmp		EXEC

STARTUP_TEXT	ENDS
END
```
{% endraw %}

## S52.ASM

{% raw %}
```
STARTUP_TEXT	SEGMENT		BYTE PUBLIC 'CODE'
		assume		cs:STARTUP_TEXT

		EXTRN		EXEC:near

		public		_ATAN
_ATAN:
		mov		al,52
		jmp		EXEC

STARTUP_TEXT	ENDS
END
```
{% endraw %}

## S53.ASM

{% raw %}
```
STARTUP_TEXT	SEGMENT		BYTE PUBLIC 'CODE'
		assume		cs:STARTUP_TEXT

		EXTRN		EXEC:near

		public		_EXP
_EXP:
		mov		al,53
		jmp		EXEC

STARTUP_TEXT	ENDS
END
```
{% endraw %}

## S54.ASM

{% raw %}
```
STARTUP_TEXT	SEGMENT		BYTE PUBLIC 'CODE'
		assume		cs:STARTUP_TEXT

		EXTRN		EXEC:near

		public		_POW
_POW:
		mov		al,54
		jmp		EXEC

STARTUP_TEXT	ENDS
END
```
{% endraw %}

## S55.ASM

{% raw %}
```
STARTUP_TEXT	SEGMENT		BYTE PUBLIC 'CODE'
		assume		cs:STARTUP_TEXT

		EXTRN		EXEC:near

		public		_LOG
_LOG:
		mov		al,55
		jmp		EXEC

STARTUP_TEXT	ENDS
END
```
{% endraw %}

## S56.ASM

{% raw %}
```
STARTUP_TEXT	SEGMENT		BYTE PUBLIC 'CODE'
		assume		cs:STARTUP_TEXT

		EXTRN		EXEC:near

		public		_FABS
_FABS:
		mov		al,56
		jmp		EXEC

STARTUP_TEXT	ENDS
END
```
{% endraw %}

## S57.ASM

{% raw %}
```
STARTUP_TEXT	SEGMENT		BYTE PUBLIC 'CODE'
		assume		cs:STARTUP_TEXT

		EXTRN		EXEC:near

		public		_FMOD
_FMOD:
		mov		al,57
		jmp		EXEC

STARTUP_TEXT	ENDS
END
```
{% endraw %}

## S58.ASM

{% raw %}
```
STARTUP_TEXT	SEGMENT		BYTE PUBLIC 'CODE'
		assume		cs:STARTUP_TEXT

		EXTRN		EXEC:near

		public		_FLOOR
_FLOOR:
		mov		al,58
		jmp		EXEC

STARTUP_TEXT	ENDS
END
```
{% endraw %}

## S59.ASM

{% raw %}
```
STARTUP_TEXT	SEGMENT		BYTE PUBLIC 'CODE'
		assume		cs:STARTUP_TEXT

		EXTRN		EXEC:near

		public		_SQRT
_SQRT:
		mov		al,59
		jmp		EXEC

STARTUP_TEXT	ENDS
END
```
{% endraw %}

## S6.ASM

{% raw %}
```
STARTUP_TEXT	SEGMENT		BYTE PUBLIC 'CODE'
		assume		cs:STARTUP_TEXT

		EXTRN		EXEC:near

		public		LOCKHANDLE
LOCKHANDLE:
		mov		al,6
		jmp		EXEC

STARTUP_TEXT	ENDS
END
```
{% endraw %}

## S60.ASM

{% raw %}
```
STARTUP_TEXT	SEGMENT		BYTE PUBLIC 'CODE'
		assume		cs:STARTUP_TEXT

		EXTRN		EXEC:near

		public		_HTOF
_HTOF:
		mov		al,60
		jmp		EXEC

STARTUP_TEXT	ENDS
END
```
{% endraw %}

## S61.ASM

{% raw %}
```
STARTUP_TEXT	SEGMENT		BYTE PUBLIC 'CODE'
		assume		cs:STARTUP_TEXT

		EXTRN		EXEC:near

		public		FTOH
FTOH:
		mov		al,61
		jmp		EXEC

STARTUP_TEXT	ENDS
END
```
{% endraw %}

## S62.ASM

{% raw %}
```
STARTUP_TEXT	SEGMENT		BYTE PUBLIC 'CODE'
		assume		cs:STARTUP_TEXT

		EXTRN		EXEC:near

		public		GETGLOBALS
GETGLOBALS:
		mov		al,62
		jmp		EXEC

STARTUP_TEXT	ENDS
END
```
{% endraw %}

## S63.ASM

{% raw %}
```
STARTUP_TEXT	SEGMENT		BYTE PUBLIC 'CODE'
		assume		cs:STARTUP_TEXT

		EXTRN		EXEC:near

		public		SETSCREEN
SETSCREEN:
		mov		al,63
		jmp		EXEC

STARTUP_TEXT	ENDS
END
```
{% endraw %}

## S64.ASM

{% raw %}
```
STARTUP_TEXT	SEGMENT		BYTE PUBLIC 'CODE'
		assume		cs:STARTUP_TEXT

		EXTRN		EXEC:near

		public		SETKEYHOOK
SETKEYHOOK:
		mov		al,64
		jmp		EXEC

STARTUP_TEXT	ENDS
END

```
{% endraw %}

## S65.ASM

{% raw %}
```
STARTUP_TEXT	SEGMENT		BYTE PUBLIC 'CODE'
		assume		cs:STARTUP_TEXT

		EXTRN		EXEC:near

		public		TRANSLATEKEY
TRANSLATEKEY:
		mov		al,65
		jmp		EXEC

STARTUP_TEXT	ENDS
END


```
{% endraw %}

## S66.ASM

{% raw %}
```
STARTUP_TEXT	SEGMENT		BYTE PUBLIC 'CODE'
		assume		cs:STARTUP_TEXT

		EXTRN		EXEC:near

		public		GETSCREEN
GETSCREEN:
		mov		al,66
		jmp		EXEC

STARTUP_TEXT	ENDS
END



```
{% endraw %}

## S67.ASM

{% raw %}
```
STARTUP_TEXT	SEGMENT		BYTE PUBLIC 'CODE'
		assume		cs:STARTUP_TEXT

		EXTRN		EXEC:near

		public		COPYPART
COPYPART:
		mov		al,67
		jmp		EXEC

STARTUP_TEXT	ENDS
END




```
{% endraw %}

## S68.ASM

{% raw %}
```
STARTUP_TEXT	SEGMENT		BYTE PUBLIC 'CODE'
		assume		cs:STARTUP_TEXT

		EXTRN		EXEC:near

		public		_REFRESHPART
_REFRESHPART:
		mov		al,68
		jmp		EXEC

STARTUP_TEXT	ENDS
END




```
{% endraw %}

## S69.ASM

{% raw %}
```
STARTUP_TEXT	SEGMENT		BYTE PUBLIC 'CODE'
		assume		cs:STARTUP_TEXT

		EXTRN		EXEC:near

		public		SCREENPTR
SCREENPTR:
		mov		al,69
		jmp		EXEC

STARTUP_TEXT	ENDS
END




```
{% endraw %}

## S7.ASM

{% raw %}
```
STARTUP_TEXT	SEGMENT		BYTE PUBLIC 'CODE'
		assume		cs:STARTUP_TEXT

		EXTRN		EXEC:near

		public		UNLOCKHANDLE
UNLOCKHANDLE:
		mov		al,7
		jmp		EXEC

STARTUP_TEXT	ENDS
END
```
{% endraw %}

## S70.ASM

{% raw %}
```
STARTUP_TEXT	SEGMENT		BYTE PUBLIC 'CODE'
		assume		cs:STARTUP_TEXT

		EXTRN		EXEC:near

		public		_SETFIELDRECT
_SETFIELDRECT:
		mov		al,70
		jmp		EXEC

STARTUP_TEXT	ENDS
END

```
{% endraw %}

## S71.ASM

{% raw %}
```
STARTUP_TEXT	SEGMENT		BYTE PUBLIC 'CODE'
		assume		cs:STARTUP_TEXT

		EXTRN		EXEC:near

		public		_SETFIELDVISIBLE
_SETFIELDVISIBLE:
		mov		al,71
		jmp		EXEC

STARTUP_TEXT	ENDS
END


```
{% endraw %}

## S8.ASM

{% raw %}
```
STARTUP_TEXT	SEGMENT		BYTE PUBLIC 'CODE'
		assume		cs:STARTUP_TEXT

		EXTRN		EXEC:near

		public		_PRINTF
_PRINTF:
		mov		al,8
		jmp		EXEC

STARTUP_TEXT	ENDS
END
```
{% endraw %}

## S9.ASM

{% raw %}
```
STARTUP_TEXT	SEGMENT		BYTE PUBLIC 'CODE'
		assume		cs:STARTUP_TEXT

		EXTRN		EXEC:near

		public		RETURNVALUE
RETURNVALUE:
		mov		al,9
		jmp		EXEC

STARTUP_TEXT	ENDS
END
```
{% endraw %}

## STARTUP.ASM

{% raw %}
```
; ---------------------------------------------------------------------------
; STARTUP.ASM - startup code for HyperPAD extensions.
;
;		Last Modified: 12/07/90
;
; ---------------------------------------------------------------------------

DOS_PRINT_STRING	equ		09h
DOS_TERM_PROCESS	equ		4ch
INT_DOS			equ		21h

DOSSEG
.MODEL		LARGE				;child program must be large

.DATA

		public		__fac
__fac		db		8 dup ('F')	;floating accumulator

exit_msg	db		'This program requires HyperPAD.',13,10,'$'
		EXTRN		Pool:DWORD	;declared by child program
		EXTRN		ExtFlags:BYTE	;declared by child program, if wanted

XIFB		segment	byte	public	'DATA'
xistart		label	byte
XIFB		ends
XIF		segment	byte	public	'DATA'
XIF		ends
XIFE		segment	byte	public	'DATA'
xiend		label	byte
XIFE		ends

XCFB		segment	byte	public	'DATA'
xcstart		label	byte
XCFB		ends
XCF		segment	byte	public	'DATA'
XCF		ends
XCFE		segment	byte	public	'DATA'
xcend		label	byte
XCFE		ends

dgroup	group   _data,XIFB,XIF,XIFE,XCFB,XCF,XCFE

.CODE
		public		__acrtused
__acrtused	=		09876h  		;solve C startup reference
				       		; so regular startup code
				       		; doesn't get linked

		public		__fltused
__fltused	=		0987h

		public		FIARQQ
		public		FICRQQ
		public		FIDRQQ
		public		FIERQQ
		public		FISRQQ
		public		FIWRQQ
		public		FJARQQ
		public		FJCRQQ
		public		FJSRQQ

FIARQQ		equ		0fe32h
FICRQQ		equ		00e32h
FIDRQQ		equ		05c32h
FIERQQ		equ		01632h
FISRQQ		equ		00632h
FIWRQQ		equ		0a23dh
FJARQQ		equ		04000h
FJCRQQ		equ		0c000h
FJSRQQ		equ		08000h

		EXTRN		WhenLoaded:FAR		;declared in child
		EXTRN		WhenUnLoaded:FAR	;declared in child

; ---------------------------------------------------------------------------
; This table is the initial communication area between the host and the child.
; This table is pointed to by the word before the CS:IP in the exe header.
; When loaded, the host replaces info_area[0] with the actual address of the
; callback routine that performs DS and stack context switching.
; The host then reads the location of the child's function pool and the two
; required functions, WhenLoaded() and WhenUnLoaded().
;
; This area can be expanded by adding to the end.
; ---------------------------------------------------------------------------
info_area:	db		0ECh			;ID for an extension
rtn_array:	dd		0			;pointer to array of routines
		dd		Pool			;pointer to the function pool
		dd		__WhenLoaded		;pointer to WhenLoaded function
		dd		__WhenUnLoaded		;pointer to WhenUnLoaded function
		dw		DGROUP			;used to switch to DGROUP for the extension
		dd		ExtFlags		;pointer to flags BYTE

; ---------------------------------------------------------------------------
; startup - CS:IP in the exe header points here!  This will only receive
;           control if the user runs the extension from DOS!
;	    ...thus its purpose should be to display an error and quit - like
;	    MS windows programs.
; ---------------------------------------------------------------------------
		dd		info_area		;point to the info_area
startup		proc		far
		mov		ax,DGROUP		;segment of data
		mov		ds,ax
		mov		dx,offset exit_msg	;DS:DX point to string
		mov		ah,DOS_PRINT_STRING	;print error message
		int		INT_DOS

		mov		ax,(DOS_TERM_PROCESS SHL 8) + 08h
		int		INT_DOS			;exit to DOS
startup		endp

; ---------------------------------------------------------------------------
; __WhenLoaded: This function is called before the user's WhenLoaded function
; to perform any startup stuff that may be required. The GRAPHICS.LIB uses
; this method to set up video mode variables.
; ---------------------------------------------------------------------------
__WhenLoaded	proc		far
		push		ds
		push		si
		push		di

		mov		ax,@DATA
		mov		ds,ax
		mov		si,offset DGROUP:xistart
		mov		di,offset DGROUP:xiend
		call		initterm

		pop		di
		pop		si
		call		WhenLoaded
		pop		ds		;wait until AFTER WhenLoaded is called before setting stack back
		ret
__WhenLoaded	endp

__WhenUnLoaded	proc		far
		push		ds
		push		si
		push		di
		mov		ax,@DATA
		mov		ds,ax
		mov		si,offset DGROUP:xcstart
		mov		di,offset DGROUP:xcend
		call		initterm
		pop		di
		pop		si
		call		WhenUnLoaded
		pop		ds		;wait until here to set the stack back
		ret
__WhenUnLoaded	endp

initterm:
		cmp		si,di		; are we done?
		jae		initdone	;   yes - no more

		sub		di,4
		mov		ax,[di]
		or		ax,[di+2]
		jz		initterm	; skip null procedures
		call dword ptr	[di]
		jmp short	initterm	; keep looping

initdone:	ret

; ---------------------------------------------------------------------------
; exec - calls the host dispatcher. This must be called with the index of
; the desired routine in AX:
;
;	mov 	ax,1
;	jmp	exec
;
; ---------------------------------------------------------------------------
		public		exec
exec:		xor		ah,ah
		jmp dword ptr	rtn_array

END		startup





```
{% endraw %}

## TESTASM.ASM

{% raw %}
```
DOSSEG
.MODEL		LARGE

include		extern.inc

extrn		_printf:far

.DATA

SampleName     	db		'sample',0

Pool		PoolStruct	<SampleName,SampleProc,,HANDLER>
		PoolStruct	<>	;END

formatstr	db		'%s',13,10,0

.CODE

WhenLoaded	proc		far
		ret
WhenLoaded	endp

WhenUnLoaded	proc		far
		ret
WhenUnLoaded	endp

;
; SampleProc: This routine prints out all of the arguments that
; you pass to it. It may mess up the screen, but this doesn't hurt
; anything. To call the handler from HyperPAD:
;
; handler select;
; begin
;   sample "hello","world",1,2,3;
; end;
;
SampleProc	proc		far
		push		bp
		mov		bp,sp

		;check number of arguments
		mov		cx,[bp+6]	;CX = NumArgs
		jcxz		SP_END		;exit if no args

		push		di		;save DI, use as counter
		mov		di,cx		;DI = NumArgs

		add		bp,8		;BP = next argument

SP_TOP:
		les		bx,[bp]		;ES:BX = hdl
		les		bx,es:[bx]	;ES:BX = *hdl
		push		es
		push		bx		;pass pointer to string
		push		ds		;segment of format string
		mov		ax,offset formatstr
		push		ax		;AX = offset of format string
		call		_printf
		add		sp,8		;cleanup stack after C call

		add		bp,4
		dec		di
		jnz		SP_TOP		;loop until no more args

		pop		di
SP_END:
		mov		ax,STOP		;don't pass on
		pop		bp
		ret
SampleProc	endp

END
```
{% endraw %}

{% comment %}samples_end{% endcomment %}

### Directory of PC-SIG Library Disk #2735

     Volume in drive A has no label
     Directory of A:\

    HP22D5   ZIP    208487   5-22-91   1:29p
    HPAD22   INF      5573   5-22-91   3:38p
            2 file(s)     214060 bytes
                          107520 bytes free
